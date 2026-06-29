# Store submission runbook — Recall

This is everything needed to ship the Expo app (`apps/mobile`) to the Google
Play Store and Apple App Store. Code, icons, splash and EAS profiles are ready
(app version **1.0.0**); the steps below are the account-gated actions only you
can perform.

## 0. One-time prerequisites
- **Expo account** (free): https://expo.dev — run `npx expo login`.
- **Apple Developer Program** ($99/yr): https://developer.apple.com/programs/
- **Google Play Developer** ($25 one-time): https://play.google.com/console/signup
- Install the CLI: `npm i -g eas-cli` then `eas login`.

## 0.5 Preflight (run anytime)
From the repo root:
```
pnpm preflight:store
```
Checks app config, asset sizes/alpha rules, and which `eas submit` placeholders
still need your accounts. All code/config checks pass today; the only warnings
are the account-gated items below (EAS projectId, Apple IDs, Play service
account). It exits non-zero only on hard failures, so it's safe to gate CI on.

## 1. Link the EAS project
From `apps/mobile`:
```
eas init                      # creates the project, fills extra.eas.projectId
eas build:configure
```

## 2. Build
```
# Android App Bundle (.aab) for Play, and iOS build for App Store
eas build --platform android --profile production
eas build --platform ios     --profile production
```
EAS handles signing (Android keystore + iOS certs/provisioning) for you.

## 3. Submit
```
eas submit --platform android --profile production   # needs Play service-account JSON
eas submit --platform ios     --profile production   # needs Apple IDs in eas.json
```
Fill the REPLACE_WITH_* placeholders in `apps/mobile/eas.json` first.

## 4. Store listing content

**App name:** Recall — Drill. Read. Repeat.
**Subtitle (iOS, 30 chars):** Active-recall exam drilling
**Short description (Play, 80 chars):**
Rapid MCQ drilling + 2-min notes with spaced repetition. UPSC, JEE, NEET & more.

**Full description:**
Recall is a hyper-minimalist study app for India's toughest exams — UPSC, JEE,
NEET, SSC CGL, GATE, CFA and FRM. Read a 2-minute high-yield note, then drill
its question bank with zero friction: decide in your head, tap to reveal, grade
yourself. An SM-2 spaced-repetition engine schedules every card for the moment
you're about to forget it, so daily review reaches inbox-zero.

• Drill. Read. Repeat. — 0ms between cards, fully offline.
• Spaced repetition (SM-2) across all your exams.
• Daily review queue, streaks, XP, levels and achievements.
• Mock-test mode — timed, scored papers.
• Custom drills — pick any subjects/topics.
• Bookmark tricky questions for a focused review deck.
• Anonymized global + per-exam leaderboards.
• Light/dark theme, daily reminders, read-aloud notes.
No ads. No feeds. Private by default — works without an account.

**Keywords (iOS):** UPSC,JEE,NEET,SSC,GATE,CFA,FRM,MCQ,spaced repetition,exam
**Category:** Education
**Privacy policy URL:** (host PRIVACY.md — e.g. https://jyotir-web.vercel.app/privacy)
**Support email:** sharmasehej2104@gmail.com

## 5. Screenshots
Required sizes: iPhone 6.7" (1290×2796) and 6.5"; Android phone (min 2).
Capture from a release build of: Home, a Drill card revealed, Study note,
Mock-test result, Stats, Leaderboard. (EAS build → run on device/simulator →
screenshot.)

## 6. App Store review notes
- The app offers email sign-in only (no third-party social login), so Apple's
  "Sign in with Apple" requirement does **not** apply. If you later add Google
  sign-in, you must also add Sign in with Apple.
- Account deletion: in-app instructions point to the support email (see PRIVACY.md).
- Encryption: `ITSAppUsesNonExemptEncryption=false` is already set.
- **Notifications:** the app does not fire the system permission prompt on
  launch. The first-run onboarding has a dedicated "Never miss a day" screen
  with an explicit "Enable daily reminder" button (and a "Maybe later" decline);
  permission is only requested on that tap. Notifications are a single optional
  local daily reminder — no push server, no marketing. This satisfies the
  App Store guideline against unprompted permission requests.
- **Content:** fully bundled and offline — ~3,100 questions across 10 exam
  tracks, including CFA Level I/II/III and FRM Part I & II as separate
  selectable tracks. No user-generated content and no moderation surface.
