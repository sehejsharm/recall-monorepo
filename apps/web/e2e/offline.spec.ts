import { expect, test } from "@playwright/test";

/**
 * Offline robustness (P0.4). The manifest and listing claim the app works
 * fully offline; these tests hold that claim honest:
 *
 *   1. the service worker registers and caches the app shell;
 *   2. a topic's note + question bank render with the network fully cut;
 *   3. a full answer→grade→advance drill cycle completes offline;
 *   4. progress written offline survives and the app recovers when the
 *      network returns.
 *
 * Note: the entire question bank ships inside the JS bundle, so caching the
 * shell + hashed chunks is sufficient — there is no per-question fetch.
 */
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

const TOPIC = "/upsc/polity/fundamental-rights";

test("app shell + drill work with the network fully disabled", async ({ page, context }) => {
  await page.addInitScript((s) => {
    window.localStorage.setItem("recall.settings.v1", JSON.stringify(s));
  }, ONBOARDED);

  // Warm the caches online first (the real-world precondition: the user has
  // opened the app at least once).
  await page.goto(TOPIC, { waitUntil: "networkidle" });
  // Wait for the worker to activate AND finish warming the cache with this
  // page's resources (see components/ServiceWorker.tsx).
  await page.waitForFunction(
    async () => {
      if (!navigator.serviceWorker?.controller) {
        const reg = await navigator.serviceWorker?.getRegistration();
        if (!reg?.active) return false;
      }
      const names = await caches.keys();
      if (names.length === 0) return false;
      for (const n of names) {
        const c = await caches.open(n);
        if ((await c.keys()).some((r) => r.url.includes("/_next/static/"))) return true;
      }
      return false;
    },
    null,
    { timeout: 30_000 }
  );

  // Cut the network entirely.
  await context.setOffline(true);

  await page.reload({ waitUntil: "domcontentloaded" });

  // The note content must still render from cache.
  await expect(page.getByRole("heading", { name: /fundamental rights/i })).toBeVisible({
    timeout: 15_000
  });

  // A full drill cycle must work offline.
  await page.getByRole("tab", { name: /drill engine/i }).click();
  const optionA = page.getByRole("button", { name: /^A\b/ }).first();
  await expect(optionA).toBeVisible({ timeout: 15_000 });
  await optionA.click();
  await expect(page.getByRole("button", { name: /next question|see results/i })).toBeVisible();

  await context.setOffline(false);
});

test("progress recorded offline persists and the app recovers online", async ({ page, context }) => {
  await page.addInitScript((s) => {
    window.localStorage.setItem("recall.settings.v1", JSON.stringify(s));
  }, ONBOARDED);

  await page.goto(TOPIC, { waitUntil: "networkidle" });
  // Wait for the worker to activate AND finish warming the cache with this
  // page's resources (see components/ServiceWorker.tsx).
  await page.waitForFunction(
    async () => {
      if (!navigator.serviceWorker?.controller) {
        const reg = await navigator.serviceWorker?.getRegistration();
        if (!reg?.active) return false;
      }
      const names = await caches.keys();
      if (names.length === 0) return false;
      for (const n of names) {
        const c = await caches.open(n);
        if ((await c.keys()).some((r) => r.url.includes("/_next/static/"))) return true;
      }
      return false;
    },
    null,
    { timeout: 30_000 }
  );

  await context.setOffline(true);
  await page.reload({ waitUntil: "domcontentloaded" });

  await page.getByRole("tab", { name: /drill engine/i }).click();
  const optionA = page.getByRole("button", { name: /^A\b/ }).first();
  await expect(optionA).toBeVisible({ timeout: 15_000 });
  await optionA.click();
  await expect(page.getByRole("button", { name: /next question|see results/i })).toBeVisible();

  // The grade must be committed to local storage while offline — this is the
  // queue that syncs later; losing it would lose the user's work.
  const progressCount = await page.evaluate(() => {
    const raw = window.localStorage.getItem("recall.progress.v1");
    return raw ? Object.keys(JSON.parse(raw)).length : 0;
  });
  expect(progressCount).toBeGreaterThan(0);

  // Back online: the app must recover without a reload loop or error screen.
  await context.setOffline(false);
  await page.reload({ waitUntil: "networkidle" });
  await expect(page.getByRole("heading", { name: /fundamental rights/i })).toBeVisible({
    timeout: 15_000
  });

  // Progress survived the transition.
  const stillThere = await page.evaluate(() => {
    const raw = window.localStorage.getItem("recall.progress.v1");
    return raw ? Object.keys(JSON.parse(raw)).length : 0;
  });
  expect(stillThere).toBeGreaterThanOrEqual(progressCount);
});
