import type { MetadataRoute } from "next";

/**
 * PWA manifest — makes Recall installable to the home screen on Android/iOS
 * and desktop, launching standalone (no browser chrome) on OLED black.
 *
 * This file is ALSO the source of truth for the Trusted Web Activity (TWA)
 * Android wrapper: `bubblewrap init --manifest <site>/manifest.webmanifest`
 * reads it and derives the Android app's name, launcher label, colours,
 * orientation, icons, adaptive (maskable) icon and app shortcuts from it.
 * See store/twa/README.md. Changing a value here changes the Android app, so
 * re-run `bubblewrap update` after editing.
 *
 * Field notes (Play/Bubblewrap-relevant):
 *   - `id` pins the app's stable identity. Without it the identity defaults to
 *     `start_url`, so a future start_url change would look like a NEW app to
 *     Chrome and orphan every existing installation.
 *   - `scope` is required by Bubblewrap: it becomes the TWA's verified origin
 *     scope. Any navigation outside it opens a Custom Tab with a URL bar.
 *   - `lang`/`dir` match <html lang="en"> in app/layout.tsx.
 *   - exactly ONE icon carries `purpose: "maskable"`, and it is a dedicated
 *     safe-zone asset (see store/twa/make-maskable-icon.mjs), not icon-512
 *     doing double duty — a maskable icon whose art reaches the edge gets
 *     visibly clipped by Android's adaptive-icon mask.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    // Stable app identity. Never change this string once published.
    id: "/",
    name: "Recall — Drill. Read. Repeat.",
    short_name: "Recall",
    description:
      "Frictionless MCQ drilling and 2-minute micro-notes for UPSC, JEE, NEET, SSC CGL, GATE, CFA and FRM. Spaced repetition, gamified, fully offline.",
    lang: "en",
    dir: "ltr",
    start_url: "/",
    // Whole-origin scope: every route (/[exam], /review, /stats, /account, …)
    // stays inside the TWA instead of bouncing into a Custom Tab.
    scope: "/",
    display: "standalone",
    // Honoured by browsers that support it; `display` remains the fallback.
    display_override: ["standalone", "minimal-ui", "browser"],
    orientation: "portrait",
    background_color: "#000000",
    theme_color: "#000000",
    categories: ["education", "productivity"],
    // We do not point at a Play listing yet (the Android package name is not
    // decided — see store/submission-checklist.md). `false` keeps Chrome's
    // web install prompt active. Add `related_applications` only once the
    // real Play package id exists.
    prefer_related_applications: false,
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }
    ],
    // Long-press the home-screen icon (and Android app shortcuts in the TWA).
    // Both targets are real top-level routes: app/review and app/stats.
    shortcuts: [
      {
        name: "Daily review",
        short_name: "Review",
        description: "Clear every card due today across all your exams",
        url: "/review",
        icons: [{ src: "/icon-192.png", sizes: "192x192", type: "image/png" }]
      },
      {
        name: "Stats",
        short_name: "Stats",
        description: "XP, streaks and spaced-repetition progress",
        url: "/stats",
        icons: [{ src: "/icon-192.png", sizes: "192x192", type: "image/png" }]
      }
    ],
    // Richer install UX on Android/desktop. The PNGs live in
    // public/screenshots/ — add real captures there (see store/screenshots.md).
    // A "narrow" form_factor entry shows in the phone install prompt; "wide"
    // shows on desktop. `sizes` MUST match the real pixel dimensions of each
    // file exactly, or Chrome silently drops the whole screenshot set.
    screenshots: [
      {
        src: "/screenshots/drill.png",
        sizes: "1080x1920",
        type: "image/png",
        form_factor: "narrow",
        label: "Rapid-fire MCQ drilling with instant feedback"
      },
      {
        src: "/screenshots/note.png",
        sizes: "1080x1920",
        type: "image/png",
        form_factor: "narrow",
        label: "2-minute micro-notes, then straight to drilling"
      },
      {
        src: "/screenshots/stats.png",
        sizes: "1080x1920",
        type: "image/png",
        form_factor: "narrow",
        label: "XP, streaks and spaced-repetition progress"
      }
    ]
  };
}
