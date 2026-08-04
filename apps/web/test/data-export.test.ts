import { beforeEach, describe, expect, it } from "vitest";
import { buildExport, EXPORT_KEYS, validateExport } from "@/lib/data-export";

/** Minimal in-memory Storage double. */
function makeStore(seed: Record<string, string> = {}): Storage {
  const map = new Map(Object.entries(seed));
  return {
    get length() {
      return map.size;
    },
    clear: () => map.clear(),
    getItem: (k: string) => (map.has(k) ? map.get(k)! : null),
    key: (i: number) => [...map.keys()][i] ?? null,
    removeItem: (k: string) => void map.delete(k),
    setItem: (k: string, v: string) => void map.set(k, v)
  } as Storage;
}

const PROGRESS = { q1: { questionId: "q1", repetitions: 2 }, q2: { questionId: "q2" } };
const READS = { "m-1": { materialId: "m-1" } };
const STATS = { xp: 420, currentStreak: 3 };
const BOOKMARKS = { q2: true };

const FULL = {
  [EXPORT_KEYS.progress]: JSON.stringify(PROGRESS),
  [EXPORT_KEYS.reads]: JSON.stringify(READS),
  [EXPORT_KEYS.stats]: JSON.stringify(STATS),
  [EXPORT_KEYS.bookmarks]: JSON.stringify(BOOKMARKS)
};

describe("data export", () => {
  beforeEach(() => {
    // loadSettings() reads window.localStorage; jsdom provides it.
    window.localStorage.clear();
  });

  it("includes every data domain with the real values", () => {
    const data = buildExport(makeStore(FULL));
    expect(data.progress).toEqual(PROGRESS);
    expect(data.reads).toEqual(READS);
    expect(data.stats).toEqual(STATS);
    expect(data.bookmarks).toEqual(BOOKMARKS);
    // settings comes from loadSettings(), which always yields a full object.
    expect(Object.keys(data.settings).length).toBeGreaterThan(0);
  });

  it("survives a JSON round-trip and validates clean", () => {
    const original = buildExport(makeStore(FULL));
    const reimported = JSON.parse(JSON.stringify(original)) as unknown;
    expect(validateExport(reimported)).toEqual([]);
    expect(reimported).toEqual(original); // nothing lost or mangled
  });

  it("reports counts that agree with the payload, so truncation is visible", () => {
    const data = buildExport(makeStore(FULL));
    expect(data.counts.progress).toBe(2);
    expect(data.counts.reads).toBe(1);
    expect(data.counts.bookmarks).toBe(1);
    expect(validateExport(data)).toEqual([]);
  });

  it("does NOT silently omit data still under the legacy jyotir.* namespace", () => {
    // The namespace migration is designed to survive storage being
    // unavailable, so a user can legitimately still be on legacy keys.
    const legacyOnly = makeStore({
      "jyotir.progress.v1": JSON.stringify(PROGRESS),
      "jyotir.reads.v1": JSON.stringify(READS),
      "jyotir.stats.v1": JSON.stringify(STATS),
      "jyotir.bookmarks.v1": JSON.stringify(BOOKMARKS)
    });
    const data = buildExport(legacyOnly);
    expect(data.progress).toEqual(PROGRESS);
    expect(data.reads).toEqual(READS);
    expect(data.stats).toEqual(STATS);
    expect(data.bookmarks).toEqual(BOOKMARKS);
    expect(data.counts.progress).toBe(2);
  });

  it("prefers the new namespace when both exist", () => {
    const both = makeStore({
      [EXPORT_KEYS.progress]: JSON.stringify({ new: { questionId: "new" } }),
      "jyotir.progress.v1": JSON.stringify(PROGRESS)
    });
    expect(buildExport(both).progress).toEqual({ new: { questionId: "new" } });
  });

  it("falls back to legacy data rather than exporting corrupt JSON", () => {
    const corrupt = makeStore({
      [EXPORT_KEYS.progress]: "{not json",
      "jyotir.progress.v1": JSON.stringify(PROGRESS)
    });
    expect(buildExport(corrupt).progress).toEqual(PROGRESS);
  });

  it("exports a valid, empty-but-complete file for a brand-new user", () => {
    const data = buildExport(makeStore());
    expect(validateExport(data)).toEqual([]);
    expect(data.progress).toEqual({});
    expect(data.reads).toEqual({});
    expect(data.bookmarks).toEqual({});
    // stats is the one domain allowed to be null — never drilled.
    expect(data.stats).toBeNull();
  });

  describe("validateExport rejects bad files", () => {
    it("catches a wrong/missing format tag", () => {
      const d = { ...buildExport(makeStore(FULL)), format: "something-else" };
      expect(validateExport(d)).toContain("bad format: something-else");
    });

    it("catches a missing domain", () => {
      const d = buildExport(makeStore(FULL)) as unknown as Record<string, unknown>;
      delete d.reads;
      expect(validateExport(d).join()).toMatch(/reads missing/);
    });

    it("catches counts that disagree with the payload (silent truncation)", () => {
      const d = buildExport(makeStore(FULL));
      d.counts.progress = 99;
      expect(validateExport(d).join()).toMatch(/counts\.progress \(99\) disagrees/);
    });

    it("rejects non-objects", () => {
      expect(validateExport(null)).toEqual(["not an object"]);
      expect(validateExport([])).toEqual(["not an object"]);
    });
  });
});
