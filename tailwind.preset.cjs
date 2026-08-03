/**
 * Shared design tokens for web (Tailwind) and mobile (NativeWind).
 * Dark-mode-first: the app renders on OLED black; there is no light theme.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Backgrounds: true black for OLED, with two elevation steps.
        oled: "#000000",
        surface: "#0A0A0B",
        raised: "#131316",
        edge: "#26262B",
        // Typography. Contrast ratios are measured against the darkest and
        // lightest surfaces the token is used on (oled #000 → raised #131316)
        // and must clear WCAG 2.1 AA (4.5:1) — enforced by the axe audit in
        // apps/web/e2e/a11y.spec.ts.
        //   ink   ~19:1   muted 6.2–5.5:1   faint 5.2–4.6:1
        // `faint` was #55555C (2.5–2.8:1), a serious AA failure on section
        // headings, footer links and metadata text.
        ink: "#FAFAFA",
        muted: "#8B8B93",
        faint: "#7E7E88",
        // Semantic accents (the ONLY colors in the app)
        correct: {
          DEFAULT: "#10B981",
          bright: "#34D399",
          dim: "#064E3B"
        },
        wrong: {
          DEFAULT: "#E11D48",
          bright: "#FB7185",
          dim: "#4C0519"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  }
};
