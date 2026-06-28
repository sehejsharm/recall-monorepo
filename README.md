# Recall

Hyper-minimalist MCQ drilling + micro-learning for competitive exams. Active
recall, SM-2 spaced repetition, 2-minute high-yield micro-notes, and a
gamified streak/XP loop. Dark-mode-first, fully offline. **Drill. Read. Repeat.**

**Exams:** UPSC CSE · JEE · NEET UG · SSC CGL · GATE · CFA · FRM.

## The core mechanics

**1 — The Drill Loop.** Question + 4 options → make a *mental* choice → tap
anywhere to reveal the answer and a 1-line explanation → "Knew It" / "Got It
Wrong" (buttons, ←/→ keys, or swipe) feeds SM-2 → the next card renders
synchronously from the in-memory queue. **0ms between cards.**

**2 — Read to Drill.** Every topic pairs one Markdown micro-note (≤2-min read)
with its question bank. The sticky **"Drill This Topic Now (X Cards Due)"** CTA
flips Study → Drill instantly.

**3 — Daily Review.** The home screen leads with a due-only queue across *all*
exams, so you open the app, clear what's scheduled, and reach inbox-zero.

**4 — Gamification.** XP per grade (with a combo bonus), levels/ranks
(Novice → Legend), daily streaks, 12 achievements, and an anonymized global
**leaderboard**. A `/stats` screen tracks it all.

## Monorepo layout

```
apps/web        Next.js 16 · Tailwind · localStorage · Supabase auth + sync
apps/mobile     Expo SDK 56 · expo-router · NativeWind · expo-sqlite · haptics
packages/core   Engine: types, SM-2, scheduler, gamification, Zustand store,
                StorageAdapter, offline-first last-write-wins sync
packages/content  Bundled content: 7 exams of validated micro-notes + MCQs
supabase/       SQL migrations (content + social/leaderboard) + generated seed
prisma/         Prisma mirror of the content schema
scripts/        seed generator, content codemods
```

## Quickstart

```bash
pnpm install
pnpm test                 # core engine + web render tests
pnpm dev:web              # Next.js on http://localhost:3000
pnpm dev:mobile           # Expo (press i / a, or scan the QR)
```

The apps run fully **offline and anonymous by default** — content is bundled,
progress + XP + streaks persist locally (localStorage on web, SQLite on mobile).

## Deploy & backend

- **Web → Vercel:** [`DEPLOY.md`](DEPLOY.md). Import the repo, set Root Directory
  to `apps/web`, deploy. Installable as a mobile PWA.
- **Supabase (optional, for accounts + sync + leaderboard):** [`SUPABASE.md`](SUPABASE.md).
  Paste [`supabase/setup.sql`](supabase/setup.sql) into the SQL editor (idempotent —
  re-run after any content/schema update), enable email auth, add the
  `NEXT_PUBLIC_SUPABASE_*` env vars.

## Architecture notes

- **Stable text ids** (`upsc-polity-fundamental-rights-q01`) everywhere — bundle,
  SQLite, Postgres — so sync is a pure upsert with no id mapping.
- **SM-2:** binary input maps to q=4 / q=2; EF floor 1.3; lapses re-queue once
  per session. **Zero-spinner:** `startDrill()` builds the whole queue in memory;
  `grade()` is synchronous; persistence happens after the next card is on screen.
- **Leaderboard** is anonymized: a SECURITY DEFINER function exposes only
  `handle/xp/level`, never display names — your real name stays on your device.
- **Sync** is offline-first last-write-wins on `updated_at`, enforced by a DB
  trigger too, so a stale device can't clobber newer progress.

## Content generation

Each exam is a `defineBundle(...)` that validates referential integrity and id
uniqueness at module load. Regenerate the SQL after editing content:

```bash
pnpm seed:generate        # emits supabase/seed.sql and supabase/setup.sql
```

## Mobile app (Expo / React Native)

`apps/mobile` is the native iOS + Android app, sharing the entire `packages/core`
engine with the web app. Feature-complete with the web build, plus:

- **Mock-test mode** — timed, scored papers per exam.
- **Custom drills** — pick any subjects/topics.
- **Bookmarks** — flag questions into a focused review deck.
- **Daily reminders** — local notifications (expo-notifications).
- **Light / dark / system theme** — runtime-switchable.
- **Read-aloud notes** — TTS via expo-speech.
- **Email auth + cross-device sync** and anonymized leaderboards.

```bash
pnpm dev:mobile               # Expo dev server
npx expo install              # pin native dep versions
```

Cloud sync/auth is optional — set `EXPO_PUBLIC_SUPABASE_URL` and
`EXPO_PUBLIC_SUPABASE_ANON_KEY`. Shipping to stores: see
[`apps/mobile`](apps/mobile) + [`STORE.md`](STORE.md) and [`PRIVACY.md`](PRIVACY.md).
