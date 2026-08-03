# Monetization & mock-exam flags — DECISIONS REQUIRED

**Status: nothing is priced, nothing is gated, no payment code exists.**
`lib/features.ts` and `lib/entitlements.ts` are extension points only, both
default OFF / fully-granted. This file records what is deliberately *not*
decided so it doesn't get decided by accident.

## Open decisions (yours, not the code's)

| Decision | Options | Notes |
|---|---|---|
| **Is Recall paid at all?** | Stay free · one-time unlock · subscription · freemium (free exams + paid exams) | Free is currently a real differentiator vs. Testbook/Unacademy. Going paid changes store listing, Data-safety ("purchases"), and content-rating answers. |
| **What would be paid?** | `all-exams` · `unlimited-mock-exams` · `offline-packs` | These three are stubbed as `Entitlement` values. Nothing is gated today. |
| **Price point / currency** | — | India-first pricing is very different from global. Not encoded anywhere. |
| **Timed mock-exam scope** | Per-exam full-length? Sectional? Negative marking? | The flag exists; the feature doesn't. |

## Constraints any implementation must respect

- **Play policy**: digital goods on Android must go through **Google Play
  Billing**. Do not add a web checkout that unlocks Android features.
- **Offline-first**: entitlement checks must be cached locally and **fail
  open** — a failed receipt check must never lock out a paying user offline.
- **No-account-required**: an anonymous user must keep everything that is
  free today. Do not make sign-in a prerequisite for existing functionality.
- Turning on `NEXT_PUBLIC_FEATURE_BILLING` must not by itself gate anything;
  `hasEntitlement()` currently returns `true` unconditionally on purpose.

## Enabling a flag

```sh
NEXT_PUBLIC_FEATURE_MOCK_EXAM=1   # timed mock-exam mode (not built)
NEXT_PUBLIC_FEATURE_BILLING=1     # billing seam (no payment code)
```

Both are read in `lib/features.ts` and default to off when unset.

## Why the mock-exam seam is cheap

The drill engine already accepts a bounded queue (`limit`), and the SM-2
scheduler is independent of session shape. A timed mock is therefore a timer
+ a results screen + "don't reveal answers until the end" — no changes to
scheduling or storage.
