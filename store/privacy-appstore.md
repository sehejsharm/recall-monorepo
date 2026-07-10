# App Store — App Privacy answers (nutrition label)

Enter these in App Store Connect → your app → App Privacy. They must match
what the shipped build actually does. This reflects the current code:

- The app is fully usable offline and anonymous. Data is collected ONLY if
  the user voluntarily creates an account for cross-device sync.
- No third-party analytics, ads, attribution or tracking SDKs are bundled in
  the mobile app. Daily reminders are scheduled locally on-device.

> ⚠️ Re-verify before every submission: if you later add crash reporting
> (e.g. Sentry), analytics, or an ads SDK, you MUST update this label.

## "Do you or your third-party partners collect data from this app?"
**Yes** (only when the user signs in).

## Data used to track you
**None.** No data is used to track users across apps/websites owned by other
companies. (No IDFA, no ad networks, no third-party analytics.)

## Data linked to the user's identity
All for **App Functionality** only (account, cross-device sync, leaderboard):

| Data type | Category | Purpose | Linked | Tracking |
|---|---|---|---|---|
| Email address | Contact Info | App Functionality (sign-in) | Yes | No |
| User ID | Identifiers | App Functionality (sync key) | Yes | No |
| Other data — learning progress, XP, streaks, study/read history | Other Data | App Functionality | Yes | No |

## Data NOT linked to the user
**None.**

## Data types explicitly NOT collected
Location, Contacts, Photos/Videos, Audio, Browsing history, Search history,
Health, Financial info, Purchases, Sensitive info, Physical address,
Diagnostics/crash data, product-interaction Usage Data for analytics.

## Account deletion
Answer **Yes** to "Does your app support account deletion?" — it's in
Account → "Delete account & cloud data" (calls the `delete_account` RPC),
removing the auth identity and all synced rows.
