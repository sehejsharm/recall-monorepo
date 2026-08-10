-- Recall: privacy remediation ahead of the Play Store submission.
--
-- Two defects, both of which made a user-facing promise untrue:
--
--   1. Onboarding says the display name "stays on your device", but the
--      client was uploading it into user_stats.display_name on every stats
--      push. Nothing ever read that column back — not the client, not the
--      leaderboard/my_rank RPCs, which return only (handle, xp, level). The
--      client no longer sends it (apps/web/lib/leaderboard.ts,
--      apps/mobile/lib/leaderboard.ts); this scrubs the names already
--      uploaded by earlier builds so the promise is true retroactively.
--
--   2. /delete-account says "we retain nothing tied to your identity after
--      deletion" and that feedback rows are "disassociated from your
--      account". delete_account() nulled contact_messages.user_id via the
--      FK's `on delete set null`, but left contact_messages.email — an
--      email address is by definition tied to an identity. This nulls it as
--      part of the same transaction.
--
-- The column itself is intentionally NOT dropped. Until every client has
-- picked up the new bundle, an older cached build may still send
-- display_name; dropping the column would make its upsert fail and silently
-- break leaderboard sync for those users. It is inert and defaulted.

-- 1. Scrub display names already uploaded by earlier builds.
update public.user_stats
   set display_name = 'Aspirant'
 where display_name is distinct from 'Aspirant';

comment on column public.user_stats.display_name is
  'Deprecated and unused. Never populated by the client and never read by any '
  'RPC; the public identity is `handle`. Retained only so older cached clients '
  'that still send it do not fail their upsert. Do not start reading this.';

-- 2. Deletion must also clear the support-inbox email, not just the user_id.
create or replace function public.delete_account()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'not authenticated';
  end if;

  -- Explicit deletes are belt-and-braces: every user-owned table already
  -- cascades from auth.users, but this keeps the function correct even if
  -- a future table forgets the cascade.
  delete from public.user_progress where user_id = uid;
  delete from public.user_read_history where user_id = uid;
  delete from public.user_exam_stats where user_id = uid;
  delete from public.user_stats where user_id = uid;

  -- Feedback inboxes use `on delete set null`, so the rows survive with a
  -- null user_id. That is only genuinely anonymous once the directly
  -- identifying email is gone too — otherwise the deletion copy is false.
  update public.contact_messages set email = null where user_id = uid;

  delete from auth.users where id = uid;
end;
$$;

revoke all on function public.delete_account() from public;
grant execute on function public.delete_account() to authenticated;
