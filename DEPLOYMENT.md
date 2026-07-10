# Deployment

The web app (`apps/web`) is hosted on **Vercel** via its **Git integration**:
Vercel watches the repo and auto-deploys every push to the production branch.
The build settings live in git (`apps/web/vercel.json`) so they can't silently
drift from a dashboard-only config.

> Why this doc exists: for a while the live site lagged `main` because the
> deployment was configured only in the Vercel dashboard — invisible to git,
> with nothing guaranteeing a push actually shipped. Connecting the Git
> integration to `main` (below) makes every merge deploy automatically.

## One-time setup (connect the repo to Vercel)

1. **vercel.com → Add New… → Project** → import `sehejsharm/recall-monorepo`.
2. **Root Directory: `apps/web`** — the single most important setting. Vercel
   then reads `apps/web/vercel.json` and detects the pnpm workspace at the
   repo root automatically.
3. Framework is auto-detected as **Next.js**; the build (`next build`) and
   install (`pnpm install --frozen-lockfile`) come from `vercel.json`. pnpm
   `10.33.0` is pinned via the root `package.json` `packageManager` field.
4. **Settings → Git → Production Branch: `main`.** This is what makes pushes
   to `main` deploy to production. (Every other branch gets a preview URL.)
5. **Settings → Environment Variables** (Production) — optional but
   recommended:
   - `NEXT_PUBLIC_SITE_URL` = `https://<your-domain>` — used for canonical
     tags, sitemap and OpenGraph URLs. Without it these fall back to
     `http://localhost:3000`.
   - Supabase already has safe **public** defaults baked in
     (`apps/web/lib/supabase.ts`); override `NEXT_PUBLIC_SUPABASE_URL` /
     `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` only to point a fork at a
     different project.
6. **Deploy.** From then on, every push to `main` ships automatically and the
   live site can no longer lag the repo.

## Verifying a deploy shipped

- Vercel dashboard → Deployments: the top entry's commit SHA should match
  `git rev-parse origin/main`.
- The build must be green; CI (`.github/workflows/ci.yml`) already gates
  tests + typecheck + the web build on every push, so a broken build is
  caught before you'd wonder why the site looks stale.

## Local production build (parity with Vercel)

```sh
pnpm install --frozen-lockfile
pnpm --filter @jyotir/web build   # == what Vercel runs, from apps/web
```

## Backend

Database schema + content seed deploy separately — see `supabase/README.md`
(the `seed-apply` workflow keeps the DB in sync with shipped content).
