-- Recall: SCHEMA ONLY (no content seed).
-- Paste-able in the Supabase SQL Editor (small). Enables auth, leaderboards,
-- per-exam ranks, and the user tables. Run the full supabase/setup.sql via
-- psql (direct connection) to ALSO seed content so cross-device progress
-- sync works (user_progress.question_id has an FK to questions).
-- Idempotent: safe to re-run.

-- Jyotir: MCQ drilling + micro-learning for Indian competitive exams.
--
-- Idempotent: safe to run any number of times (uses IF NOT EXISTS / OR
-- REPLACE / DROP-then-CREATE throughout), so pasting it into the Supabase
-- SQL editor always converges to the same schema regardless of prior state.
--
-- Design notes:
--   * Content tables use stable human-readable TEXT primary keys (e.g.
--     'upsc-polity-fundamental-rights-q01'). Ids are identical in the
--     bundled content, the on-device SQLite cache and Postgres, so offline
--     progress sync is a pure upsert with no id translation layer.
--   * User tables use UUID PKs and reference auth.users.
--   * The spec's `interval` column is named `interval_days` (INTERVAL is a
--     reserved type name in Postgres; the unit is also now explicit).

-- ============================== content ===============================

create table if not exists public.exams (
  id          text primary key,
  name        text not null,
  slug        text not null unique,
  tagline     text not null default '',
  order_index int  not null default 0,
  created_at  timestamptz not null default now()
);

create table if not exists public.subjects (
  id          text primary key,
  exam_id     text not null references public.exams (id) on delete cascade,
  name        text not null,
  slug        text not null,
  order_index int  not null default 0,
  created_at  timestamptz not null default now(),
  unique (exam_id, slug)
);

create table if not exists public.topics (
  id          text primary key,
  subject_id  text not null references public.subjects (id) on delete cascade,
  name        text not null,
  slug        text not null,
  order_index int  not null default 0,
  created_at  timestamptz not null default now(),
  unique (subject_id, slug)
);

create table if not exists public.study_materials (
  id                     text primary key,
  topic_id               text not null references public.topics (id) on delete cascade,
  title                  text not null,
  -- Markdown. High-yield micro-note, <= 2 minute read. No PDFs, ever.
  content                text not null,
  estimated_read_time    int  not null default 2 check (estimated_read_time between 1 and 5),
  -- Denormalised count powering the "Drill This Topic Now (X cards)" CTA;
  -- maintained by trigger, never written by application code.
  total_linked_questions int  not null default 0,
  order_index            int  not null default 0,
  created_at             timestamptz not null default now()
);

create table if not exists public.questions (
  id             text primary key,
  topic_id       text not null references public.topics (id) on delete cascade,
  text           text not null,
  option_a       text not null,
  option_b       text not null,
  option_c       text not null,
  option_d       text not null,
  correct_option char(1) not null check (correct_option in ('A', 'B', 'C', 'D')),
  -- One line, <= ~140 chars: the micro-explanation under the revealed answer.
  explanation    text not null,
  order_index    int  not null default 0,
  created_at     timestamptz not null default now()
);

create index if not exists subjects_exam_idx on public.subjects (exam_id, order_index);
create index if not exists topics_subject_idx on public.topics (subject_id, order_index);
create index if not exists study_materials_topic_idx on public.study_materials (topic_id, order_index);
create index if not exists questions_topic_idx on public.questions (topic_id, order_index);

-- Keep study_materials.total_linked_questions in sync with the question bank.
create or replace function public.refresh_linked_question_count()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  affected_topic text;
begin
  affected_topic := coalesce(new.topic_id, old.topic_id);
  update public.study_materials sm
     set total_linked_questions = (
       select count(*) from public.questions q where q.topic_id = affected_topic
     )
   where sm.topic_id = affected_topic;
  return null;
end;
$$;

drop trigger if exists questions_count_sync on public.questions;
create trigger questions_count_sync
after insert or update of topic_id or delete on public.questions
for each row execute function public.refresh_linked_question_count();

-- ============================ user progress ===========================

-- SM-2 state per (user, question). One row per card the user has ever seen.
create table if not exists public.user_progress (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid not null references auth.users (id) on delete cascade,
  question_id      text not null references public.questions (id) on delete cascade,
  next_review_date timestamptz not null,
  interval_days    int  not null default 0 check (interval_days >= 0),
  ease_factor      numeric(4, 2) not null default 2.50 check (ease_factor >= 1.30),
  repetitions      int  not null default 0 check (repetitions >= 0),
  lapses           int  not null default 0 check (lapses >= 0),
  last_reviewed_at timestamptz not null default now(),
  updated_at       timestamptz not null default now(),
  unique (user_id, question_id)
);

create table if not exists public.user_read_history (
  id                  uuid primary key default gen_random_uuid(),
  user_id             uuid not null references auth.users (id) on delete cascade,
  material_id         text not null references public.study_materials (id) on delete cascade,
  marked_completed_at timestamptz not null default now(),
  unique (user_id, material_id)
);

-- The hot path for review scheduling: "what is due for me, now".
create index if not exists user_progress_due_idx on public.user_progress (user_id, next_review_date);
create index if not exists user_read_history_user_idx on public.user_read_history (user_id);

-- Offline-first last-write-wins: an upsert from a stale device must not
-- clobber newer state that another device already pushed.
create or replace function public.user_progress_lww_guard()
returns trigger
language plpgsql
as $$
begin
  if new.updated_at < old.updated_at then
    return old;
  end if;
  return new;
end;
$$;

drop trigger if exists user_progress_lww on public.user_progress;
create trigger user_progress_lww
before update on public.user_progress
for each row execute function public.user_progress_lww_guard();

-- Server-side due counts per topic (client computes these locally; this view
-- backs dashboards / notifications).
create or replace view public.user_due_counts
with (security_invoker = true) as
select
  up.user_id,
  q.topic_id,
  count(*) filter (where up.next_review_date <= now()) as due_count,
  count(*) as seen_count
from public.user_progress up
join public.questions q on q.id = up.question_id
group by up.user_id, q.topic_id;

-- ================================ RLS =================================

alter table public.exams enable row level security;
alter table public.subjects enable row level security;
alter table public.topics enable row level security;
alter table public.study_materials enable row level security;
alter table public.questions enable row level security;
alter table public.user_progress enable row level security;
alter table public.user_read_history enable row level security;

-- Content: world-readable (the app must work before sign-in); writes only
-- via service_role (which bypasses RLS), i.e. the seed/CMS pipeline.
drop policy if exists "content readable" on public.exams;
create policy "content readable" on public.exams for select using (true);
drop policy if exists "content readable" on public.subjects;
create policy "content readable" on public.subjects for select using (true);
drop policy if exists "content readable" on public.topics;
create policy "content readable" on public.topics for select using (true);
drop policy if exists "content readable" on public.study_materials;
create policy "content readable" on public.study_materials for select using (true);
drop policy if exists "content readable" on public.questions;
create policy "content readable" on public.questions for select using (true);

-- User data: row owner only, all verbs.
drop policy if exists "own progress select" on public.user_progress;
create policy "own progress select" on public.user_progress
  for select using (auth.uid() = user_id);
drop policy if exists "own progress insert" on public.user_progress;
create policy "own progress insert" on public.user_progress
  for insert with check (auth.uid() = user_id);
drop policy if exists "own progress update" on public.user_progress;
create policy "own progress update" on public.user_progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
drop policy if exists "own progress delete" on public.user_progress;
create policy "own progress delete" on public.user_progress
  for delete using (auth.uid() = user_id);

drop policy if exists "own reads select" on public.user_read_history;
create policy "own reads select" on public.user_read_history
  for select using (auth.uid() = user_id);
drop policy if exists "own reads insert" on public.user_read_history;
create policy "own reads insert" on public.user_read_history
  for insert with check (auth.uid() = user_id);
drop policy if exists "own reads update" on public.user_read_history;
create policy "own reads update" on public.user_read_history
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
drop policy if exists "own reads delete" on public.user_read_history;
create policy "own reads delete" on public.user_read_history
  for delete using (auth.uid() = user_id);

-- Recall: social + feedback layer (leaderboard, exam requests, contact).
-- Idempotent: safe to run any number of times.

-- Per-user public stats backing the global leaderboard. display_name stays
-- private (own-row read only); `handle` is the anonymized public identity.
create table if not exists public.user_stats (
  user_id        uuid primary key references auth.users (id) on delete cascade,
  display_name   text not null default 'Aspirant',
  handle         text not null,
  xp             int  not null default 0,
  level          int  not null default 1,
  current_streak int  not null default 0,
  longest_streak int  not null default 0,
  cards_graded   int  not null default 0,
  updated_at     timestamptz not null default now()
);

create index if not exists user_stats_xp_idx on public.user_stats (xp desc, updated_at asc);

alter table public.user_stats enable row level security;
drop policy if exists "own stats select" on public.user_stats;
create policy "own stats select" on public.user_stats for select using (auth.uid() = user_id);
drop policy if exists "own stats insert" on public.user_stats;
create policy "own stats insert" on public.user_stats for insert with check (auth.uid() = user_id);
drop policy if exists "own stats update" on public.user_stats;
create policy "own stats update" on public.user_stats for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Anonymized global leaderboard: exposes only handle + xp + level (never
-- display_name or user_id), so the ranking is public but identities are not.
create or replace function public.leaderboard(n int default 100)
returns table (rank bigint, handle text, xp int, level int)
language sql stable security definer set search_path = public as $$
  select row_number() over (order by xp desc, updated_at asc) as rank, handle, xp, level
  from public.user_stats
  order by xp desc, updated_at asc
  limit greatest(1, least(n, 500));
$$;
grant execute on function public.leaderboard(int) to anon, authenticated;

-- The caller's own rank within the full board.
create or replace function public.my_rank()
returns table (rank bigint, handle text, xp int, level int)
language sql stable security definer set search_path = public as $$
  with ranked as (
    select user_id, handle, xp, level,
           row_number() over (order by xp desc, updated_at asc) as rank
    from public.user_stats
  )
  select rank, handle, xp, level from ranked where user_id = auth.uid();
$$;
grant execute on function public.my_rank() to authenticated;

-- Total players (for "you're #N of M").
create or replace function public.leaderboard_size()
returns bigint language sql stable security definer set search_path = public as $$
  select count(*) from public.user_stats;
$$;
grant execute on function public.leaderboard_size() to anon, authenticated;

-- "Request more exams" — write-only feedback inbox.
create table if not exists public.exam_requests (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid references auth.users (id) on delete set null,
  exam_name  text not null,
  note       text not null default '',
  created_at timestamptz not null default now()
);
alter table public.exam_requests enable row level security;
drop policy if exists "anyone can request" on public.exam_requests;
create policy "anyone can request" on public.exam_requests for insert with check (true);

-- "Contact us" — write-only feedback inbox.
create table if not exists public.contact_messages (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid references auth.users (id) on delete set null,
  email      text,
  message    text not null,
  created_at timestamptz not null default now()
);
alter table public.contact_messages enable row level security;
drop policy if exists "anyone can contact" on public.contact_messages;
create policy "anyone can contact" on public.contact_messages for insert with check (true);

-- Recall: per-exam leaderboards (compete within each individual exam).
-- Idempotent.

create table if not exists public.user_exam_stats (
  user_id    uuid not null references auth.users (id) on delete cascade,
  exam_id    text not null,
  handle     text not null,
  xp         int  not null default 0,
  updated_at timestamptz not null default now(),
  primary key (user_id, exam_id)
);

create index if not exists user_exam_stats_idx on public.user_exam_stats (exam_id, xp desc, updated_at asc);

alter table public.user_exam_stats enable row level security;
drop policy if exists "own exam stats select" on public.user_exam_stats;
create policy "own exam stats select" on public.user_exam_stats for select using (auth.uid() = user_id);
drop policy if exists "own exam stats insert" on public.user_exam_stats;
create policy "own exam stats insert" on public.user_exam_stats for insert with check (auth.uid() = user_id);
drop policy if exists "own exam stats update" on public.user_exam_stats;
create policy "own exam stats update" on public.user_exam_stats for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Anonymized per-exam ranking (handle + xp only).
create or replace function public.leaderboard_by_exam(exam text, n int default 100)
returns table (rank bigint, handle text, xp int)
language sql stable security definer set search_path = public as $$
  select row_number() over (order by xp desc, updated_at asc) as rank, handle, xp
  from public.user_exam_stats
  where exam_id = exam and xp > 0
  order by xp desc, updated_at asc
  limit greatest(1, least(n, 500));
$$;
grant execute on function public.leaderboard_by_exam(text, int) to anon, authenticated;

create or replace function public.my_exam_rank(exam text)
returns table (rank bigint, handle text, xp int)
language sql stable security definer set search_path = public as $$
  with ranked as (
    select user_id, handle, xp,
           row_number() over (order by xp desc, updated_at asc) as rank
    from public.user_exam_stats
    where exam_id = exam and xp > 0
  )
  select rank, handle, xp from ranked where user_id = auth.uid();
$$;
grant execute on function public.my_exam_rank(text) to authenticated;
