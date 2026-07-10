# Native follow-ups that need a real build (not doable in this repo alone)

These are the remaining "best-in-class" ideas that require native modules
and an actual EAS build to develop and test — they can't be validated by
`expo export` alone, so they're scoped here rather than half-shipped.

## Home-screen widgets (streak / due-count)
- Needs a native widget extension: **WidgetKit** (iOS, Swift) and an
  **App Widget** (Android, Kotlin/XML), wired via an Expo config plugin
  (e.g. `@bacons/apple-targets` or a custom plugin) plus an App Group / shared
  storage so the widget can read the streak the JS app writes.
- Effort: real native code + a dev build to iterate. Plan: write today's
  streak + due-count to a shared container on each app foreground; widget
  reads and renders. Deep-link the widget tap to `/review`.

## Smarter notifications (fire only when cards are actually due)
- Current: one static daily reminder at a chosen time (already shipped).
- Better: a **background task** (`expo-background-task` / `expo-task-manager`)
  that wakes periodically, computes `dueTotal()` from the on-device SQLite,
  and only schedules/updates the reminder when something is actually due —
  with copy that names the count ("12 cards due — 3-day streak on the line").
- Needs native background-execution config + on-device testing; iOS
  throttles background wakeups, so validate cadence on a real device.

## Rich share images (vs. the text card already shipped)
- The text `shareCard()` is live (Stats → Share). A branded IMAGE card would
  convert better on Instagram/Stories: render an off-screen view to PNG with
  `react-native-view-shot`, then share the file via `expo-sharing`.
- Low risk but adds two dependencies; do it alongside the next dev build.

## Deep-linkable review/exam from widgets & notifications
- The `recall://` scheme + expo-router already support deep links; once
  widgets/notifications exist, point them at `/review` and `/{exam}` and
  confirm cold-start routing.
