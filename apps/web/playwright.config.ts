import { defineConfig, devices } from "@playwright/test";

/**
 * E2E / accessibility config. Builds and serves the real production app, then
 * runs the axe-core audit against every route (see e2e/a11y.spec.ts) and the
 * offline drill test (e2e/offline.spec.ts).
 *
 * Chromium is preinstalled in CI via PLAYWRIGHT_BROWSERS_PATH; we never call
 * `playwright install`.
 */
const PORT = 3210;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? "list" : "html",
  timeout: 60_000,
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    trace: "on-first-retry"
  },
  // CI images often ship a Chromium whose build number doesn't match the
  // pinned @playwright/test. PLAYWRIGHT_CHROMIUM_PATH lets the environment
  // point at that prebuilt binary instead of downloading one; unset, we fall
  // back to Playwright's own managed browser.
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        ...(process.env.PLAYWRIGHT_CHROMIUM_PATH
          ? { launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH } }
          : {})
      }
    }
  ],
  webServer: {
    command: `pnpm exec next start -p ${PORT}`,
    url: `http://127.0.0.1:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000
  }
});
