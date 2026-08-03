import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // plugin-react transforms .tsx (Next's tsconfig sets jsx: "preserve",
  // which Vite's own parser can't handle).
  plugins: [react()],
  resolve: {
    // Force a single copy of React across the app and @testing-library.
    dedupe: ["react", "react-dom"],
    alias: { "@": fileURLToPath(new URL("./", import.meta.url)) }
  },
  test: {
    environment: "jsdom",
    globals: true,
    // e2e/ holds Playwright specs (own runner, real browser) — vitest must
    // not try to collect them.
    exclude: ["**/node_modules/**", "**/dist/**", "e2e/**"]
  }
});
