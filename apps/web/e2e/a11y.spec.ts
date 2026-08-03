import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

/**
 * WCAG 2.1 AA audit across every route. Fails the build on any violation at
 * `critical` or `serious` impact, so accessibility regressions are caught in
 * CI rather than in review.
 *
 * The first-run onboarding overlay covers the app on a fresh profile, so each
 * test seeds settings as an already-onboarded user before navigating —
 * otherwise every route would just audit the name-capture modal. Onboarding
 * itself is audited explicitly in its own test below.
 */
const ROUTES: { path: string; name: string }[] = [
  { path: "/", name: "home" },
  { path: "/review", name: "daily review" },
  { path: "/leaderboard", name: "leaderboard" },
  { path: "/stats", name: "stats" },
  { path: "/settings", name: "settings" },
  { path: "/account", name: "account" },
  { path: "/privacy", name: "privacy" },
  { path: "/terms", name: "terms" },
  { path: "/delete-account", name: "delete account" },
  { path: "/upsc", name: "exam page" },
  { path: "/upsc/polity", name: "subject page" },
  { path: "/upsc/polity/fundamental-rights", name: "topic / note page" },
  { path: "/this-route-does-not-exist", name: "404 page" }
];

const ONBOARDED_SETTINGS = {
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

async function seedOnboarded(page: Page) {
  await page.addInitScript((settings) => {
    window.localStorage.setItem("recall.settings.v1", JSON.stringify(settings));
  }, ONBOARDED_SETTINGS);
}

/** Run axe and return only the violations we gate on. */
async function seriousViolations(page: Page) {
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  return results.violations.filter(
    (v) => v.impact === "critical" || v.impact === "serious"
  );
}

/** Readable failure output: rule, impact and the offending selectors. */
function describe(violations: Awaited<ReturnType<typeof seriousViolations>>) {
  return violations
    .map(
      (v) =>
        `[${v.impact}] ${v.id}: ${v.help}\n    ${v.nodes
          .slice(0, 5)
          .map((n) => n.target.join(" "))
          .join("\n    ")}`
    )
    .join("\n");
}

for (const route of ROUTES) {
  test(`a11y: ${route.name} (${route.path})`, async ({ page }) => {
    await seedOnboarded(page);
    await page.goto(route.path, { waitUntil: "networkidle" });
    // The launch splash fades over ~1s on app-shell routes; audit the settled UI.
    await page.waitForTimeout(1400);
    const violations = await seriousViolations(page);
    expect(describe(violations)).toBe("");
  });
}

test("a11y: first-run onboarding overlay", async ({ page }) => {
  // No seeding — this is a genuinely fresh visitor.
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1400);
  const violations = await seriousViolations(page);
  expect(describe(violations)).toBe("");
});

test("keyboard: quiz flow is fully operable without a mouse", async ({ page }) => {
  await seedOnboarded(page);
  await page.goto("/upsc/polity/fundamental-rights", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  // Switch to the drill tab by keyboard alone.
  const drillTab = page.getByRole("tab", { name: /drill engine/i });
  await drillTab.focus();
  await page.keyboard.press("Enter");

  // Answer options must be reachable as real buttons and activatable by Enter.
  const firstOption = page.getByRole("button", { name: /^A\b/ }).first();
  await expect(firstOption).toBeVisible({ timeout: 10_000 });
  await firstOption.focus();
  await expect(firstOption).toBeFocused();
  await page.keyboard.press("Enter");

  // After grading, the explanation and an advance control appear.
  await expect(page.getByRole("button", { name: /next question|see results/i })).toBeVisible();
});
