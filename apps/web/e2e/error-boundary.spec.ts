import { expect, test, type Page } from "@playwright/test";

/**
 * Proves the route error boundary (app/error.tsx) actually catches a render
 * failure on each route — rather than assuming Next.js wired it up.
 *
 * Each page mounts <ErrorTrigger>, which throws during render when
 * ?__boom=1 is present AND NEXT_PUBLIC_E2E_ERROR_HOOK=1 (set only for the
 * e2e build). Production never sets that var, so the throw is unreachable.
 *
 * Skipped automatically when the hook isn't compiled in, so a normal
 * `playwright test` against a production build doesn't report false failures.
 */
const HOOK_ENABLED = process.env.NEXT_PUBLIC_E2E_ERROR_HOOK === "1";

const ONBOARDED = {
  displayName: "Aspirant",
  named: true,
  handle: "Aspirant-TEST",
  dailyGoal: 20,
  reduceMotion: false,
  leaderboardOptIn: true,
  onboarded: true,
  primaryExamId: null,
  examDate: null
};

const ROUTES = [
  { path: "/", name: "home" },
  { path: "/review", name: "daily review" },
  { path: "/upsc/polity/fundamental-rights", name: "topic page" },
  { path: "/settings", name: "settings" },
  { path: "/account", name: "account" }
];

async function seed(page: Page) {
  await page.addInitScript((s) => {
    window.localStorage.setItem("recall.settings.v1", JSON.stringify(s));
  }, ONBOARDED);
}

test.describe("route error boundary", () => {
  test.skip(!HOOK_ENABLED, "requires a build with NEXT_PUBLIC_E2E_ERROR_HOOK=1");

  for (const route of ROUTES) {
    test(`catches a thrown error on ${route.name} (${route.path})`, async ({ page }) => {
      await seed(page);
      // Page-level errors are expected here; don't let them fail the test.
      page.on("pageerror", () => {});

      await page.goto(`${route.path}?__boom=1`, { waitUntil: "domcontentloaded" });

      // The friendly fallback replaced the route, and matches the 404 tone.
      await expect(page.getByRole("heading", { name: "Something broke" })).toBeVisible({
        timeout: 15_000
      });
      await expect(page.getByText(/your progress is safe/i)).toBeVisible();
      await expect(page.getByRole("button", { name: /try again/i })).toBeVisible();
      await expect(page.getByRole("link", { name: /go to home/i })).toBeVisible();
    });
  }

  test("the same routes render normally without the trigger", async ({ page }) => {
    await seed(page);
    for (const route of ROUTES) {
      await page.goto(route.path, { waitUntil: "domcontentloaded" });
      await expect(page.getByRole("heading", { name: "Something broke" })).toHaveCount(0);
    }
  });
});
