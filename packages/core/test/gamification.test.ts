import { describe, expect, it } from "vitest";
import {
  ACHIEVEMENTS,
  applyGradeToStats,
  evaluateAchievements,
  initialGamification,
  levelForXp,
  levelProgress,
  normalizeGamification,
  rankName,
  registerDrillDay,
  shareCard,
  statsSignature,
  xpForGrade,
  xpForLevel,
  type GamificationState
} from "../src/gamification";

describe("normalizeGamification", () => {
  it("backfills missing fields from older persisted state", () => {
    const old = { xp: 120, cardsGraded: 10 } as Partial<GamificationState>;
    const s = normalizeGamification(old);
    expect(s.xp).toBe(120);
    expect(s.cardsGraded).toBe(10);
    expect(s.examXp).toEqual({}); // new field defaulted
    expect(s.achievements).toEqual([]);
  });

  it("returns a fresh state for null", () => {
    expect(normalizeGamification(null).xp).toBe(0);
  });
});

describe("xp + levels", () => {
  it("awards base XP plus a capped combo bonus for Knew It", () => {
    expect(xpForGrade(true, 1)).toBe(10); // first correct, no bonus
    expect(xpForGrade(true, 3)).toBe(12); // +2 combo bonus
    expect(xpForGrade(true, 100)).toBe(15); // bonus capped at +5
    expect(xpForGrade(false, 0)).toBe(4); // effort still counts
  });

  it("maps XP to the 50·(L-1)² level curve", () => {
    expect(xpForLevel(1)).toBe(0);
    expect(xpForLevel(2)).toBe(50);
    expect(xpForLevel(3)).toBe(200);
    expect(levelForXp(0)).toBe(1);
    expect(levelForXp(49)).toBe(1);
    expect(levelForXp(50)).toBe(2);
    expect(levelForXp(200)).toBe(3);
  });

  it("derives rank and in-level progress", () => {
    expect(rankName(1)).toBe("Novice");
    expect(rankName(5)).toBe("Expert");
    expect(rankName(999)).toBe("Legend"); // clamped
    const p = levelProgress(125); // level 2 (50..199), 75 into a 150 span
    expect(p.level).toBe(2);
    expect(p.into).toBe(75);
    expect(p.span).toBe(150);
    expect(p.pct).toBe(50);
  });
});

describe("streaks", () => {
  const base = initialGamification(new Date("2026-06-13T00:00:00Z"));

  it("starts at 1, increments on consecutive days, ignores same-day repeats", () => {
    let s = registerDrillDay(base, "2026-06-13");
    expect(s.currentStreak).toBe(1);
    s = registerDrillDay(s, "2026-06-13"); // same day
    expect(s.currentStreak).toBe(1);
    s = registerDrillDay(s, "2026-06-14"); // next day
    expect(s.currentStreak).toBe(2);
    s = registerDrillDay(s, "2026-06-15");
    expect(s.currentStreak).toBe(3);
    expect(s.longestStreak).toBe(3);
  });

  it("resets to 1 after a missed day but keeps the longest", () => {
    let s = registerDrillDay(base, "2026-06-13");
    s = registerDrillDay(s, "2026-06-14");
    s = registerDrillDay(s, "2026-06-14"); // longest now 2
    s = registerDrillDay(s, "2026-06-20"); // gap
    expect(s.currentStreak).toBe(1);
    expect(s.longestStreak).toBe(2);
  });

  it("handles month boundaries", () => {
    let s = registerDrillDay(base, "2026-06-30");
    s = registerDrillDay(s, "2026-07-01");
    expect(s.currentStreak).toBe(2);
  });
});

describe("applyGradeToStats", () => {
  it("accumulates xp, cards, best combo and reports level-ups", () => {
    let s = initialGamification(new Date("2026-06-13T00:00:00Z"));
    const r1 = applyGradeToStats(s, true, 1, "2026-06-13");
    expect(r1.state.xp).toBe(10);
    expect(r1.state.cardsGraded).toBe(1);
    expect(r1.state.currentStreak).toBe(1);
    expect(r1.leveledTo).toBeNull();
    s = r1.state;

    // Drive XP over 50 to trigger level 2.
    for (let i = 0; i < 4; i++) s = applyGradeToStats(s, true, 1, "2026-06-13").state;
    expect(s.xp).toBe(50);
    expect(levelForXp(s.xp)).toBe(2);
  });

  it("tracks best combo across grades", () => {
    let s = initialGamification();
    s = applyGradeToStats(s, true, 1, "2026-06-13").state;
    s = applyGradeToStats(s, true, 2, "2026-06-13").state;
    s = applyGradeToStats(s, true, 3, "2026-06-13").state;
    expect(s.bestCombo).toBe(3);
    s = applyGradeToStats(s, false, 0, "2026-06-13").state;
    expect(s.bestCombo).toBe(3); // not lowered by a reset
  });
});

describe("achievements", () => {
  const ctx = (state: GamificationState, over: Partial<Parameters<typeof evaluateAchievements>[0]> = {}) => ({
    state,
    masteredCount: 0,
    sessionComplete: false,
    sessionSize: 0,
    sessionAccuracy: 0,
    ...over
  });

  it("unlocks first-steps on the first card", () => {
    const s = { ...initialGamification(), cardsGraded: 1 };
    expect(evaluateAchievements(ctx(s))).toContain("first-steps");
  });

  it("unlocks a flawless session only at 10+ cards and 100%", () => {
    const s = initialGamification();
    expect(evaluateAchievements(ctx(s, { sessionComplete: true, sessionSize: 9, sessionAccuracy: 100 }))).not.toContain("flawless");
    expect(evaluateAchievements(ctx(s, { sessionComplete: true, sessionSize: 12, sessionAccuracy: 100 }))).toContain("flawless");
  });

  it("does not re-unlock already-owned achievements", () => {
    const s = { ...initialGamification(), cardsGraded: 1, achievements: ["first-steps"] };
    expect(evaluateAchievements(ctx(s))).not.toContain("first-steps");
  });

  it("unlocks streak and level milestones", () => {
    expect(evaluateAchievements(ctx({ ...initialGamification(), currentStreak: 7 }))).toContain("week-warrior");
    expect(evaluateAchievements(ctx({ ...initialGamification(), xp: xpForLevel(5) }))).toContain("level-5");
    expect(evaluateAchievements(ctx(initialGamification(), { masteredCount: 25 }))).toContain("mastermind");
  });

  it("every achievement id has a definition", () => {
    const ids = new Set(ACHIEVEMENTS.map((a) => a.id));
    expect(ids.size).toBe(ACHIEVEMENTS.length); // unique
  });
});

describe("shareCard", () => {
  const base: GamificationState = {
    ...initialGamification(),
    xp: 757,
    cardsGraded: 120,
    currentStreak: 6,
    longestStreak: 9
  };

  it("summarizes rank, streak and cards, and includes the link", () => {
    const card = shareCard(base, { url: "https://recall.app" });
    expect(card).toMatch(/Level \d+/);
    expect(card).toMatch(/757 XP/);
    expect(card).toMatch(/6-day streak/);
    expect(card).toMatch(/best 9/);
    expect(card).toMatch(/120 cards/);
    expect(card).toContain("https://recall.app");
  });

  it("names the exam when provided and omits 'best' when current is the best", () => {
    const card = shareCard({ ...base, longestStreak: 6 }, { examName: "UPSC Civil Services" });
    expect(card).toContain("UPSC Civil Services");
    expect(card).not.toMatch(/best/);
  });
});

describe("statsSignature", () => {
  const base: GamificationState = { ...initialGamification(), xp: 100, cardsGraded: 10, currentStreak: 3 };

  it("is stable for unchanged stats (so a bare reload never re-pushes)", () => {
    expect(statsSignature(base)).toBe(statsSignature({ ...base }));
  });

  it("ignores examXp key order but reflects real changes", () => {
    const a = { ...base, examXp: { upsc: 60, jee: 40 } };
    const b = { ...base, examXp: { jee: 40, upsc: 60 } };
    expect(statsSignature(a)).toBe(statsSignature(b)); // order-independent

    expect(statsSignature(base)).not.toBe(statsSignature({ ...base, xp: 110 }));
    expect(statsSignature(base)).not.toBe(statsSignature({ ...base, currentStreak: 4 }));
    expect(statsSignature(base)).not.toBe(statsSignature({ ...base, examXp: { upsc: 10 } }));
  });
});
