/**
 * Gamification: XP, levels/ranks, daily streaks, combos and achievements.
 *
 * Pure and platform-agnostic — the store calls these on every grade and the
 * web/mobile UIs render the derived values. State persists locally via the
 * StorageAdapter (loadStats/saveStats); it can later be synced to Supabase
 * with the same last-write-wins approach as progress.
 */

export interface GamificationState {
  xp: number;
  cardsGraded: number;
  currentStreak: number;
  longestStreak: number;
  /** "YYYY-MM-DD" (UTC) of the last day a card was drilled, or null. */
  lastDrillDay: string | null;
  /** Best consecutive "Knew It" run ever, across all sessions. */
  bestCombo: number;
  /** Unlocked achievement ids. */
  achievements: string[];
  /** XP earned per exam (examId -> xp), backing per-exam leaderboards. */
  examXp: Record<string, number>;
  updatedAt: string;
}

export function initialGamification(now: Date = new Date()): GamificationState {
  return {
    xp: 0,
    cardsGraded: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastDrillDay: null,
    bestCombo: 0,
    achievements: [],
    examXp: {},
    updatedAt: now.toISOString()
  };
}

/** Backfills fields missing from older persisted state (forward-compatible load). */
export function normalizeGamification(s: Partial<GamificationState> | null): GamificationState {
  return { ...initialGamification(), ...(s ?? {}), examXp: { ...(s?.examXp ?? {}) } };
}

// ------------------------------- XP -----------------------------------

export const XP_KNEW = 10;
export const XP_WRONG = 4; // effort still earns — keeps grading honest
export const COMBO_BONUS_CAP = 5;

/** comboAfter = the consecutive "Knew It" count including this card. */
export function xpForGrade(knewIt: boolean, comboAfter: number): number {
  const base = knewIt ? XP_KNEW : XP_WRONG;
  const bonus = knewIt ? Math.min(Math.max(comboAfter - 1, 0), COMBO_BONUS_CAP) : 0;
  return base + bonus;
}

// ----------------------------- levels ---------------------------------

/** Rank names by level (1-indexed); the last one is the cap. No emojis. */
export const RANKS = [
  "Novice",
  "Apprentice",
  "Scholar",
  "Adept",
  "Expert",
  "Master",
  "Grandmaster",
  "Sage",
  "Luminary",
  "Legend"
] as const;

/** Cumulative XP required to reach a level: 50·(L-1)². */
export function xpForLevel(level: number): number {
  return 50 * (level - 1) * (level - 1);
}

export function levelForXp(xp: number): number {
  return Math.floor(Math.sqrt(Math.max(0, xp) / 50)) + 1;
}

export function rankName(level: number): string {
  return RANKS[Math.min(level - 1, RANKS.length - 1)] ?? RANKS[0];
}

export interface LevelProgress {
  level: number;
  rank: string;
  /** XP earned within the current level. */
  into: number;
  /** XP span of the current level. */
  span: number;
  /** XP remaining to the next level. */
  toNext: number;
  /** 0–100 progress through the current level. */
  pct: number;
}

export function levelProgress(xp: number): LevelProgress {
  const level = levelForXp(xp);
  const cur = xpForLevel(level);
  const next = xpForLevel(level + 1);
  const span = next - cur;
  const into = xp - cur;
  return {
    level,
    rank: rankName(level),
    into,
    span,
    toNext: next - xp,
    pct: span > 0 ? Math.min(100, Math.round((into / span) * 100)) : 0
  };
}

/**
 * A shareable one-card summary of progress — the growth loop. Plain text so
 * it drops cleanly into any share sheet (WhatsApp, Instagram, X, etc.). Kept
 * in core so web and mobile share identical copy, and so it's unit-testable.
 */
export function shareCard(
  stats: GamificationState,
  opts: { url?: string; examName?: string } = {}
): string {
  const lp = levelProgress(stats.xp);
  const lines = [
    `📚 My Recall progress${opts.examName ? ` · ${opts.examName}` : ""}`,
    `${lp.rank} · Level ${lp.level} · ${stats.xp} XP`,
    `🔥 ${stats.currentStreak}-day streak${
      stats.longestStreak > stats.currentStreak ? ` (best ${stats.longestStreak})` : ""
    } · ${stats.cardsGraded} cards drilled`,
    "",
    `Drilling for my exam on Recall — join me:`,
    opts.url ?? "https://recall.app"
  ];
  return lines.join("\n");
}

/**
 * A stable signature of the leaderboard-relevant fields (exactly what
 * pushStats uploads). Callers persist the last-pushed signature and skip the
 * upsert when it's unchanged — so a plain page load / tab refocus never
 * re-writes identical stats. This matters beyond saving a request: the
 * leaderboard breaks XP ties by `updated_at asc`, so a redundant push would
 * bump updated_at and silently demote the user on every tie.
 */
export function statsSignature(stats: GamificationState): string {
  const examXp = Object.entries(stats.examXp ?? {})
    .filter(([, xp]) => xp > 0)
    .sort(([a], [b]) => a.localeCompare(b));
  return JSON.stringify([
    stats.xp,
    levelForXp(stats.xp),
    stats.currentStreak,
    stats.longestStreak,
    stats.cardsGraded,
    examXp
  ]);
}

// ----------------------------- streaks --------------------------------

export function dayKey(d: Date = new Date()): string {
  return d.toISOString().slice(0, 10);
}

function shiftDay(key: string, delta: number): string {
  const [y, m, d] = key.split("-").map(Number);
  const date = new Date(Date.UTC(y ?? 1970, (m ?? 1) - 1, d ?? 1));
  date.setUTCDate(date.getUTCDate() + delta);
  return date.toISOString().slice(0, 10);
}

/** Increments the daily streak the first time a card is drilled each day. */
export function registerDrillDay(state: GamificationState, today: string): GamificationState {
  if (state.lastDrillDay === today) return state;
  const continued = state.lastDrillDay === shiftDay(today, -1);
  const currentStreak = continued ? state.currentStreak + 1 : 1;
  return {
    ...state,
    currentStreak,
    longestStreak: Math.max(state.longestStreak, currentStreak),
    lastDrillDay: today
  };
}

/** A streak is "alive" only if today or yesterday saw activity. */
export function isStreakActive(state: GamificationState, today: string = dayKey()): boolean {
  return state.lastDrillDay === today || state.lastDrillDay === shiftDay(today, -1);
}

// --------------------------- achievements -----------------------------

export interface AchievementDef {
  id: string;
  name: string;
  description: string;
}

export const ACHIEVEMENTS: AchievementDef[] = [
  { id: "first-steps", name: "First Steps", description: "Drill your first card." },
  { id: "half-century", name: "Half Century", description: "Drill 50 cards." },
  { id: "century", name: "Century", description: "Drill 100 cards." },
  { id: "five-hundred", name: "Five Hundred Club", description: "Drill 500 cards." },
  { id: "streak-3", name: "Warming Up", description: "Reach a 3-day streak." },
  { id: "week-warrior", name: "Week Warrior", description: "Reach a 7-day streak." },
  { id: "month-monk", name: "Month of Discipline", description: "Reach a 30-day streak." },
  { id: "combo-10", name: "On Fire", description: "Hit a 10-card combo in one session." },
  { id: "flawless", name: "Flawless", description: "Finish a session of 10+ cards at 100%." },
  { id: "level-5", name: "Expert Arrives", description: "Reach Level 5." },
  { id: "level-10", name: "Legend", description: "Reach Level 10." },
  { id: "mastermind", name: "Mastermind", description: "Master 25 cards (3+ clean recalls)." }
];

export interface AchievementContext {
  state: GamificationState;
  /** Cards with repetitions >= 3 (well-learned). */
  masteredCount: number;
  sessionComplete: boolean;
  sessionSize: number;
  sessionAccuracy: number; // 0–100
}

function meets(id: string, ctx: AchievementContext): boolean {
  const s = ctx.state;
  const level = levelForXp(s.xp);
  switch (id) {
    case "first-steps":
      return s.cardsGraded >= 1;
    case "half-century":
      return s.cardsGraded >= 50;
    case "century":
      return s.cardsGraded >= 100;
    case "five-hundred":
      return s.cardsGraded >= 500;
    case "streak-3":
      return s.currentStreak >= 3;
    case "week-warrior":
      return s.currentStreak >= 7;
    case "month-monk":
      return s.currentStreak >= 30;
    case "combo-10":
      return s.bestCombo >= 10;
    case "flawless":
      return ctx.sessionComplete && ctx.sessionSize >= 10 && ctx.sessionAccuracy >= 100;
    case "level-5":
      return level >= 5;
    case "level-10":
      return level >= 10;
    case "mastermind":
      return ctx.masteredCount >= 25;
    default:
      return false;
  }
}

/** Returns ids newly unlocked by this context (not already owned). */
export function evaluateAchievements(ctx: AchievementContext): string[] {
  return ACHIEVEMENTS.filter((a) => !ctx.state.achievements.includes(a.id) && meets(a.id, ctx)).map(
    (a) => a.id
  );
}

export function achievementById(id: string): AchievementDef | undefined {
  return ACHIEVEMENTS.find((a) => a.id === id);
}

// ------------------------- grade application --------------------------

export interface GradeStatsOutcome {
  state: GamificationState;
  xpAwarded: number;
  /** New level if this grade caused a level-up, else null. */
  leveledTo: number | null;
}

export function applyGradeToStats(
  state: GamificationState,
  knewIt: boolean,
  comboAfter: number,
  today: string = dayKey(),
  now: Date = new Date()
): GradeStatsOutcome {
  const xpAwarded = xpForGrade(knewIt, comboAfter);
  const beforeLevel = levelForXp(state.xp);
  let next: GamificationState = {
    ...state,
    xp: state.xp + xpAwarded,
    cardsGraded: state.cardsGraded + 1,
    bestCombo: Math.max(state.bestCombo, comboAfter),
    updatedAt: now.toISOString()
  };
  next = registerDrillDay(next, today);
  const afterLevel = levelForXp(next.xp);
  return { state: next, xpAwarded, leveledTo: afterLevel > beforeLevel ? afterLevel : null };
}
