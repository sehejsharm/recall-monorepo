# Google Play — Data safety form answers

Enter in Play Console → App content → Data safety.

**A data-safety form that does not match the shipped build is a Play policy
violation and is grounds for suspension.** Every claim below was re-verified
against the code at HEAD; the file/line evidence is included so the next
person can re-verify instead of trusting this document.

> ⚠️ This form describes **the artifact you upload**. Recall has two possible
> Android artifacts (Bubblewrap TWA of the PWA, or the Expo app) and they do
> not collect identically — see the TWA-only section at the bottom. Confirm
> which one you are submitting before you fill this in.

---

## Verified against code — evidence

| Claim | Verified in |
|---|---|
| Sync/leaderboard only run for a signed-in user; total no-op otherwise | `apps/web/lib/sync-provider.tsx` (returns early when `userId` is null), `apps/mobile/lib/sync-provider.tsx` |
| Leaderboard push is opt-out-able and never sends the display name | `apps/web/lib/leaderboard.ts` / `apps/mobile/lib/leaderboard.ts` — `pushStats()` returns false when `leaderboardOptIn` is off; the upsert sends `handle, xp, level, streaks, cards_graded` and **no** `display_name` |
| The typed display name stays on-device | Removed from the upsert in commit `5fa2914`; historical values scrubbed by `supabase/migrations/0005_privacy_remediation.sql`; the column is deprecated, never read by `leaderboard()` / `my_rank()` |
| No crash/diagnostics SDK | `apps/web/lib/error-reporting.ts` is a deliberate no-op with no vendor installed; no Sentry/Firebase/Crashlytics dependency in either app's `package.json` |
| No ads, no ad SDK, no advertising ID | no ad dependency anywhere; `apps/web/lib/entitlements.ts` gates nothing and the app is free |
| Analytics currently inactive | `apps/web/components/Analytics.tsx` returns `null` unless `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is set — see the blocker below |
| In-app deletion exists | `public.delete_account()` in `supabase/migrations/0005_privacy_remediation.sql`, wired to Account → "Delete account & cloud data" |
| Encrypted in transit | all backend traffic is HTTPS to Supabase (`apps/*/lib/supabase.ts`) |

---

## ⚠️ Two items to resolve BEFORE you submit this form

### 1. Contact / Request-an-exam forms transmit data from anonymous users

`apps/web/app/contact/page.tsx` inserts into `contact_messages`:
`{ user_id, email, message }` — and `apps/web/app/request-exam/page.tsx`
inserts into `exam_requests`: `{ user_id, exam_name, note }`. **Both work
without an account**, and the contact form sends an email address the user
types (or, when signed in, their account email).

Consequences for the table below:

* the "Email address" row's qualifier "only if signing in" is **wrong** —
  email can also be collected from a signed-out user via Contact;
* free-text `message` / `note` is user-supplied content that the table does
  not currently cover at all.

**Owner decision required.** Google's data-safety guidance has a narrow
exemption for data a user actively types in order to send the developer a
support message, and a separate "Messages → Other in-app messages" /
"App activity → Other user-generated content" type that may apply instead.
I am not going to guess which one Play expects here — read the current
"Data types" and "Data collection exemptions" pages in the Play Console help
and answer accordingly. Whichever way you answer, the "only if signing in"
qualifier on Email must be corrected.

### 2. Analytics must be confirmed OFF at deploy time (TWA path especially)

`Analytics.tsx` self-activates from an environment variable. If
`NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is set in the Vercel project, a third-party
analytics script runs — inside the Play-distributed app, if you ship the TWA.
That would make both the privacy policy ("We do not collect ... analytics")
and this form false.

Check before submitting:

```sh
vercel env ls              # NEXT_PUBLIC_PLAUSIBLE_DOMAIN must NOT be set
```

If you ever set it, you must in the same change amend the privacy policy, add
an Analytics row here, and re-answer the form.

---

## Overview

- **Does your app collect or share any of the required user data types?**
  **Yes.**
- **Is all user data encrypted in transit?** **Yes** (HTTPS to Supabase).
- **Do you provide a way for users to request that their data be deleted?**
  **Yes** — in-app (Account → "Delete account & cloud data", which calls the
  `delete_account()` RPC) and by email. Play also wants a public deletion URL:
  `https://recall-monorepo-web.vercel.app/delete-account`.

## Data types collected (none shared with third parties)

| Data type | Category | Collected | Shared | Optional? | Purpose |
|---|---|---|---|---|---|
| Email address | Personal info | Yes | No | Yes | Account management, App functionality, **Customer support** — collected on sign-in AND (see blocker 1) from the Contact form, which does not require an account |
| User IDs | Personal info | Yes | No | Yes (only if signing in) | Account management, App functionality |
| App activity — in-app progress, XP, streaks, read history, leaderboard handle | App activity | Yes | No | Yes (only if signing in; leaderboard is separately opt-out) | App functionality (cross-device sync, leaderboards) |
| Free-text feedback / exam requests | see blocker 1 | see blocker 1 | No | Yes | Customer support |

## Explicitly NOT collected — each verified above

Name (the typed display name is never uploaded), phone number, address,
location, financial info, health, photos/videos, audio, files/docs, calendar,
contacts, web browsing history, installed apps, purchase history,
device/other identifiers, advertising ID, crash logs, diagnostics,
performance data, ads/marketing data.

## Data sharing

**No data is shared** with third parties. Supabase is a processor (backend
infrastructure), not a recipient for its own purposes. Declare it as a
service provider, not as sharing.

## Security practices

- Encrypted in transit: yes.
- Users can request deletion: yes — in-app and by email.
- Data is protected server-side by Supabase row-level security
  (`supabase/schema.sql`).
- No ads and no ad SDKs. (Note: the app targets 16+, so the **Families**
  policy programme does not apply — do not opt into it.)

---

## If you ship the **TWA**, re-check these

The TWA is the *website* in an Android shell, so the Play declaration must
describe `apps/web`, not `apps/mobile`:

- Anything the web app loads at runtime is in scope, including
  `Analytics.tsx` (see blocker 2) and any future third-party script.
- Progress is stored in `localStorage` (`apps/web/lib/web-storage.ts`) and
  the service worker cache — on-device only, so **not** "collected", but say
  so consistently if a reviewer asks.
- The TWA declares **no** notification permission
  (`store/twa/twa-manifest.json` → `"enableNotifications": false`), so there
  is no notification-related disclosure.

## If you ship the **Expo app**, re-check these

- No analytics/crash/ads SDK is present (grep-verified).
- Notifications are **local only** — `apps/mobile/lib/notifications.ts`
  schedules a single daily reminder with `expo-notifications`. There is no
  push server and no FCM token is ever sent anywhere, so there is no
  notification data collection to declare.
- Confirm the final merged Android permission list before answering the
  permissions questions — see the permissions step in
  `store/submission-checklist.md`.
