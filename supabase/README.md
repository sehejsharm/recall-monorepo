# Supabase backend

Everything the cloud side needs, in three idempotent files:

| File | What it is | When to run |
|---|---|---|
| `migrations/*.sql` | Schema: tables, RLS, triggers, leaderboard views | Once per new migration (re-running is safe — all are idempotent) |
| `seed.sql` | **Generated** content: every exam/subject/topic/note/question shipped in `@jyotir/content` | After every content change that reaches `main` |
| `setup.sql` | **Generated** one-paste bundle: all migrations + seed, for the Supabase SQL editor | Bootstrapping a fresh project |

## Why the seed must never drift

`user_progress.question_id` has a foreign key to `questions.id`. If the
deployed `questions` table lags the shipped content bundle, every progress
row a learner records against newer questions is rejected by the server
(409 FK violation) and their cloud sync degrades. This happened once: the
committed seed was 7 exams / 2,776 questions while the app shipped
11 exams / 10,968 — see the resilient-push logic in
`packages/core/src/sync.ts` that now contains the blast radius.

Two guards keep it from recurring:

1. **CI drift check** (`.github/workflows/ci.yml`, job `seed-drift`):
   regenerates the seed from the content bundle and fails the build if
   `seed.sql`/`setup.sql` don't match what's committed. A content PR that
   forgets `pnpm seed:generate` cannot merge.
2. **Auto-apply on main** (`.github/workflows/seed-apply.yml`): whenever
   `seed.sql` or a migration changes on `main`, CI re-applies them to the
   database. Configure the `SUPABASE_DB_URL` repository secret (Supabase
   Dashboard → Project Settings → Database → Connection string, URI
   format). No credentials live in the repo; without the secret the job
   skips with a notice and you apply manually.

## Commands

```sh
# Regenerate seed.sql + setup.sql from packages/content (run after editing content):
pnpm seed:generate

# Apply the seed to a database (post-deploy step if not using the Action):
DATABASE_URL="postgres://…" pnpm seed:apply

# Or via the Supabase CLI against a local/linked project:
supabase db reset          # replays migrations + seed.sql

# Fresh project bootstrap: paste supabase/setup.sql into the SQL editor.
```

Both generated files carry a header with the exam/topic/question counts —
if the header's numbers don't match the app, the backend is stale.
