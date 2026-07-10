import type { ProgressRecord, Sm2State } from "./types";

/**
 * SM-2 (Wozniak, 1990) — https://super-memo.com/super-memo-2.html
 *
 * I(1) = 1 day, I(2) = 6 days, I(n) = round(I(n-1) * EF).
 * EF' = EF + (0.1 - (5-q) * (0.08 + (5-q) * 0.02)), floored at 1.3,
 * updated after EVERY response. A response with q < 3 resets the
 * repetition sequence (the card is relearned from I(1)) but keeps the
 * penalised EF, per the original algorithm.
 *
 * The drill UI is binary, so grades are mapped as:
 *   "Knew It"      -> q = 4  (correct; EF stays flat — binary input can't
 *                             distinguish a "perfect 5", so we don't inflate)
 *   "Got It Wrong" -> q = 2  (EF -0.32, repetitions reset)
 */

export type Grade = 0 | 1 | 2 | 3 | 4 | 5;

export const GRADE_KNEW_IT: Grade = 4;
export const GRADE_WRONG: Grade = 2;

export const MIN_EASE_FACTOR = 1.3;
export const INITIAL_EASE_FACTOR = 2.5;

const DAY_MS = 24 * 60 * 60 * 1000;

/** State for a card that has never been reviewed: due immediately. */
export function initialSm2State(now: Date = new Date()): Sm2State {
  return {
    repetitions: 0,
    easeFactor: INITIAL_EASE_FACTOR,
    intervalDays: 0,
    nextReviewDate: now.toISOString()
  };
}

export function nextEaseFactor(easeFactor: number, quality: Grade): number {
  const q = quality;
  const ef = easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  return Math.max(MIN_EASE_FACTOR, Math.round(ef * 100) / 100);
}

export function sm2(state: Sm2State, quality: Grade, now: Date = new Date()): Sm2State {
  const easeFactor = nextEaseFactor(state.easeFactor, quality);

  if (quality < 3) {
    return {
      repetitions: 0,
      easeFactor,
      intervalDays: 1,
      nextReviewDate: new Date(now.getTime() + DAY_MS).toISOString()
    };
  }

  const repetitions = state.repetitions + 1;
  const intervalDays =
    repetitions === 1 ? 1 : repetitions === 2 ? 6 : Math.round(state.intervalDays * easeFactor);

  return {
    repetitions,
    easeFactor,
    intervalDays,
    nextReviewDate: new Date(now.getTime() + intervalDays * DAY_MS).toISOString()
  };
}

/**
 * A one-line, human explanation of WHY a just-graded card returns when it
 * does — surfaced after the answer so the schedule is transparent (the trust
 * signal Anki power users care about), not a black box. `record` is the
 * post-grade ProgressRecord; `knewIt` is the grade just given.
 */
export function scheduleExplanation(record: ProgressRecord, knewIt: boolean): string {
  const { intervalDays, repetitions, easeFactor } = record;
  const when =
    intervalDays === 1
      ? "tomorrow"
      : intervalDays < 30
        ? `in ${intervalDays} days`
        : intervalDays < 60
          ? "in about a month"
          : `in about ${Math.round(intervalDays / 30)} months`;
  if (!knewIt) {
    return `Missed — so this card resets and returns ${when} to relearn it.`;
  }
  if (repetitions === 1) {
    return `First clean recall — back ${when}, then the gap widens each time you keep getting it right.`;
  }
  return `Recall #${repetitions} — the interval grows by your ease (×${easeFactor.toFixed(2)}), so it returns ${when}.`;
}

/** The binary drill gesture, producing a full persistable ProgressRecord. */
export function gradeBinary(
  questionId: string,
  prev: ProgressRecord | undefined,
  knewIt: boolean,
  now: Date = new Date()
): ProgressRecord {
  const base: Sm2State = prev ?? initialSm2State(now);
  const next = sm2(base, knewIt ? GRADE_KNEW_IT : GRADE_WRONG, now);
  return {
    questionId,
    ...next,
    lapses: (prev?.lapses ?? 0) + (knewIt ? 0 : 1),
    lastReviewedAt: now.toISOString(),
    updatedAt: now.toISOString(),
    synced: false
  };
}
