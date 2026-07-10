# Pre-submission checklist

The common rejection reasons for an app like this, and our status on each.
✅ done in-repo · 🔑 needs your account/credentials · 📸 needs asset creation.

## Blockers that reject an app

- ✅ **In-app account deletion** (Apple 5.1.1(v)) — Account → "Delete account
  & cloud data" → `delete_account` RPC. Migration `0004`, applied to prod.
- ✅ **Sign-in leads somewhere** — auth flow works; app is fully usable
  WITHOUT an account, so a reviewer never hits a dead end / login wall.
- ✅ **No placeholder UI** — the old "v0.1" footer is gone; Request-exam and
  Contact routes resolve.
- ✅ **Privacy policy content** reflects in-app deletion + what's collected.
- ✅ **App icon** 1024×1024, no alpha (iOS requirement) — verified.
- ✅ **Not a WebView wrapper** (Apple 4.2 minimum functionality) — this is a
  real React Native app: native navigation, on-device SQLite, haptics, local
  notifications, offline content. Lead the review notes with the offline +
  spaced-repetition + notifications native story.
- 🔑 **Privacy policy URL is public** — deploy the `/privacy` page and use its
  live URL in both stores.
- 🔑 **Apple Privacy label / Play Data safety** submitted — copy is written
  (`privacy-appstore.md`, `data-safety-playstore.md`); you paste it in.
- 📸 **Screenshots at required sizes** — plan + captions in `screenshots.md`.
- 📸 **Play feature graphic** 1024×500 — spec in `screenshots.md`.

## Config placeholders to fill (🔑)

- `apps/mobile/app.json` → `extra.eas.projectId` — run `eas init`.
- `apps/mobile/eas.json` → `submit.production.ios`: `appleId`, `ascAppId`,
  `appleTeamId`.
- `apps/mobile/eas.json` → `submit.production.android`:
  `google-play-service-account.json` (download from Google Cloud).

## Metadata to set in the consoles

- App name / subtitle / keywords / description → `listing-appstore.md`,
  `listing-playstore.md`.
- Category **Education**, age rating **4+ / Everyone**.
- Support URL (`/contact`), Marketing URL (site root), Privacy URL (`/privacy`).

## Build & ship (once the above exist)

```sh
cd apps/mobile
eas init                                   # one-time: mints projectId
eas build   --platform all --profile production
eas submit  --platform all --profile production
```

## Recommended reviewer notes (paste into App Store Connect "Notes")

> Recall is a native offline exam-prep app. No account is required — you can
> use every study feature offline and anonymously. Optional sign-in adds
> cross-device sync and anonymized leaderboards. To see account features,
> create an account on the Account tab; account deletion is in
> Account → "Delete account & cloud data". Native capabilities: on-device
> SQLite content cache, local daily-reminder notifications, and haptics.
