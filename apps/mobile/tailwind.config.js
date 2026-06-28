/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset"), require("../../tailwind.preset.cjs")],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Runtime-themeable tokens (see global.css). Accents stay from the preset.
      colors: {
        oled: "rgb(var(--c-oled) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        raised: "rgb(var(--c-raised) / <alpha-value>)",
        edge: "rgb(var(--c-edge) / <alpha-value>)",
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        faint: "rgb(var(--c-faint) / <alpha-value>)"
      }
    }
  },
  plugins: []
};
