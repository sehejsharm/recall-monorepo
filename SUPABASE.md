# Setting up Supabase (accounts + cross-device sync)

Optional — the app works fully without this. Supabase adds passwordless
sign-in and syncs each user's SM-2 progress and read history across devices.
Takes ~10 minutes on the free tier.

## 1. Create the project

1. Go to <https://supabase.com/dashboard> → **New project**.
2. Name it `jyotir`, choose a region near your users (e.g. Mumbai / `ap-south-1`),
   and set a database password (save it — it's your `DIRECT_URL` password).
3. Wait for it to provision (~2 min).

## 2. Create the schema + seed the content

**One paste (recommended):** open **SQL Editor → New query**, paste the entire
contents of [`supabase/setup.sql`](supabase/setup.sql) and click **Run**. That
single file runs every migration (content schema + the social/leaderboard
schema) and inserts all exams, micro-notes and questions. It is fully
idempotent — **re-run it after any content or schema update** (you'll see
harmless `NOTICE … skipping` lines). It also creates the leaderboard,
exam-requests and contact tables used by the in-app social features.

<details>
<summary>Or run the two files separately</summary>

1. **SQL Editor → New query** → paste
   [`supabase/migrations/0001_init.sql`](supabase/migrations/0001_init.sql) → **Run**.
2. New query → paste [`supabase/seed.sql`](supabase/seed.sql) → **Run**. The seed
   is idempotent, so re-running after a content change just updates rows.
</details>

> Regenerate both files any time you edit content with `pnpm seed:generate`.

## 3. Enable email magic-link auth

1. **Authentication → Providers → Email**: ensure it's enabled (it is by default).
2. **Authentication → URL Configuration → Site URL**: set it to your deployed
   Vercel URL (e.g. `https://jyotir.vercel.app`). Add the same value under
   **Redirect URLs**, plus `http://localhost:3000` for local dev.

   *(Optional, even more frictionless: enable **Anonymous sign-ins** under
   Authentication → Providers to sync without an email. The current UI uses
   magic links, which need no extra setup.)*

## 4. Grab your keys

**Project Settings → API**:

- **Project URL** (e.g. `https://abcdxyz.supabase.co`) → `NEXT_PUBLIC_SUPABASE_URL`
- **anon / public key** _or_ the new **publishable key** (`sb_publishable_…`) →
  `NEXT_PUBLIC_SUPABASE_ANON_KEY` (the app also accepts
  `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`)

  > The publishable/anon key is client-safe (protected by row-level security).
  > Never put the **service_role** / **secret** key in a `NEXT_PUBLIC_*` var.

For local server use (Prisma / re-seeding), also from **Settings → Database**:

- **Connection string (URI)** → `DATABASE_URL` (use the pooled `6543` URL)
- **Direct connection** → `DIRECT_URL` (the `5432` URL)

## 5. Wire it up

**On Vercel:** Project → **Settings → Environment Variables** → add
`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` and
`NEXT_PUBLIC_SITE_URL`, then **redeploy**.

**Locally (web):**

```bash
cp .env.example apps/web/.env.local   # fill in the two NEXT_PUBLIC_ values
pnpm dev:web
```

### Mobile app (Expo) — this is what powers the in-app Account / sign-in screen

The mobile app reads **`EXPO_PUBLIC_`-prefixed** variables (not the `NEXT_PUBLIC_`
ones). Until both are present, `getSupabase()` returns `null` and the Account
screen shows "Cloud sync isn't configured" with **no sign-in form** — that's the
"no sign in" you're seeing, not a bug.

- `EXPO_PUBLIC_SUPABASE_URL` = your Project URL (`https://<ref>.supabase.co`)
- `EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY` = your `sb_publishable_…` key
  (the app also accepts `EXPO_PUBLIC_SUPABASE_ANON_KEY`)

**Local dev:** create `apps/mobile/.env` (gitignored) with those two lines, then
`pnpm dev:mobile`. Expo inlines `EXPO_PUBLIC_*` at bundle time.

**EAS builds (store apps):** add the same two vars to each profile's `env` block
in `apps/mobile/eas.json`, or as EAS environment variables
(`eas env:create`). The publishable key is client-safe to commit; the URL is not
secret either. Rebuild after changing them — `EXPO_PUBLIC_*` values are baked in
at build time, so a new build is required for them to take effect.

> You must also have run `supabase/setup.sql` (step 2) on the project, or
> sign-in will succeed but the leaderboard/sync RPCs (`leaderboard_by_exam`,
> `my_rank`, …) will error.

That's it. The **Account** link on the home screen now offers magic-link
sign-in, and `SyncProvider` pushes/pulls progress automatically on load, on
tab focus, and when the network reconnects — merging last-write-wins so a
stale device never clobbers newer progress.

## How sync behaves

- **Offline:** every drill writes to localStorage immediately; nothing blocks
  on the network. Rows are flagged `synced: false`.
- **Reconnect / focus / sign-in:** unsynced rows are upserted to Supabase
  (conflict key `user_id,question_id`), then remote rows newer than local are
  merged back. A DB trigger enforces last-write-wins server-side too.
