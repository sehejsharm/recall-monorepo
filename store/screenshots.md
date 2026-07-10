# Screenshot set

Both stores reward **captioned marketing screenshots** (a headline band над a
device frame), not raw captures. Ship 6 in this order — the narrative is
"see the loop, see why it's smart, see it stick".

| # | Screen to capture | Caption headline | Sub-caption |
|---|---|---|---|
| 1 | A drill question mid-answer (4 options) | Drill, don't cram | Active recall on every card |
| 2 | Answered card showing ✓ + "Why not B: …" rationale | Learn from wrong answers | Know why each option fails |
| 3 | A micro-note (study reader) | 2-minute notes | High-yield, then straight to drilling |
| 4 | Home with exam countdown + "Start Daily Review · N due" | One tap to what's due | Spaced repetition across every exam |
| 5 | Stats screen (level, streak, achievements) | Streaks that stick | XP, combos, and a daily goal |
| 6 | Leaderboard with "ahead of N% of aspirants" | Climb the ranks | Anonymized — your name stays private |

## Required sizes

**App Store (required):**
- 6.9" iPhone (1290 × 2796) — required
- 6.5" iPhone (1242 × 2688 or 1284 × 2778) — required
- iPad 12.9" (2048 × 2732) — required only if you leave `supportsTablet: true`
  (currently true in app.json)

**Play Store (required):**
- Phone: min 2, up to 8 (1080 × 1920 or higher, 16:9 or 9:16)
- Feature graphic: **1024 × 500** (required, no device frame — logo + tagline)

## How to capture
`eas build --profile preview` → install on a device/simulator, or run the
dev client. Capture the six screens above, then compose the caption band in
any tool. Keep the dark theme — it frames well. Use the same green accent
(`#10B981`) for headline text to stay on-brand.

## Feature graphic (Play, 1024×500)
Center the Recall wordmark on `#000000`, tagline "Drill. Read. Repeat."
below in muted grey, a single green underline accent. No screenshots inside
the feature graphic.
