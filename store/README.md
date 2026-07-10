# Store submission kit

Everything App Store Connect and Google Play Console ask for, written out so
submission is copy-paste, not authoring. Files:

| File | Feeds |
|---|---|
| `listing-appstore.md` | App Store Connect → App Information + Version metadata |
| `listing-playstore.md` | Play Console → Main store listing |
| `privacy-appstore.md` | App Store Connect → App Privacy (nutrition label) |
| `data-safety-playstore.md` | Play Console → Data safety form |
| `screenshots.md` | The captioned screenshot set both stores require |
| `submission-checklist.md` | The end-to-end pre-submit gate (what rejects apps, and our status on each) |

## What only you can do (accounts, money, identity)

These are intentionally not automated — they require your identity and
payment, and the store agreements must be accepted by the account owner:

1. **Apple Developer Program** — $99/yr, identity-verified.
2. **Google Play Console** — $25 one-time.
3. `eas init` to mint the real **EAS `projectId`** (replaces the placeholder
   in `apps/mobile/app.json`).
4. Fill the **iOS submit** placeholders in `apps/mobile/eas.json`
   (`appleId`, `ascAppId`, `appleTeamId`) and drop in the Play
   `google-play-service-account.json`.
5. Host the **privacy policy** at a public URL (the `/privacy` page is ready
   to deploy; both stores need the live URL).

Once those exist: `eas build --platform all --profile production` then
`eas submit --platform all --profile production`.
