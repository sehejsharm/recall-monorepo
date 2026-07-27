import type { MetadataRoute } from "next";

/**
 * PWA manifest — makes Jyotir installable to the home screen on Android/iOS
 * and desktop, launching standalone (no browser chrome) on OLED black.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Recall — Drill. Read. Repeat.",
    short_name: "Recall",
    description:
      "Frictionless MCQ drilling and 2-minute micro-notes for UPSC, JEE, NEET, SSC CGL, GATE, CFA and FRM. Spaced repetition, gamified, fully offline.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#000000",
    theme_color: "#000000",
    categories: ["education"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }
    ],
    // Richer install UX on Android/desktop. The PNGs live in
    // public/screenshots/ — add real captures there (see store/screenshots.md).
    // A "narrow" form_factor entry shows in the phone install prompt; "wide"
    // shows on desktop.
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
