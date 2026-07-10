# Google Play — Data safety form answers

Enter in Play Console → App content → Data safety. Must match the shipped
build. Reflects the current code (no analytics/ads/crash SDKs in mobile;
collection happens only when the user creates an account).

> ⚠️ Re-verify before every submission if you add analytics/crash/ads SDKs.

## Overview
- **Does your app collect or share any of the required user data types?**
  **Yes** — but only when a user voluntarily signs in for sync.
- **Is all user data encrypted in transit?** **Yes** (HTTPS to Supabase).
- **Do you provide a way for users to request that their data be deleted?**
  **Yes** — in-app (Account → Delete account & cloud data) and by email.

## Data types collected (all: collected, not shared with third parties)

| Data type | Category | Collected | Shared | Optional? | Purpose |
|---|---|---|---|---|---|
| Email address | Personal info | Yes | No | Yes (only if signing in) | Account management, App functionality |
| User IDs | Personal info | Yes | No | Yes | Account management, App functionality |
| App activity — in-app progress, XP, streaks, read history | App activity | Yes | No | Yes | App functionality (cross-device sync) |

## Explicitly NOT collected
Name (real name is never collected — the leaderboard handle is
auto-generated and anonymized), phone number, address, location, financial
info, health, photos/videos, audio, files/docs, calendar, contacts, web
browsing history, installed apps, device/other identifiers for ads,
crash logs, diagnostics, ads/marketing data.

## Data sharing
**No data is shared** with third parties. Supabase is our processor
(backend infrastructure), not a data recipient for their own use.

## Security practices
- Data is encrypted in transit.
- Users can request deletion (in-app + email).
- Committed to Play's Families / no-ads posture: the app shows no ads.
