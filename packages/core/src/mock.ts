import type { OptionKey, Question } from "./types";

/**
 * Mock-test mode: a fixed-length, timed, scored exam drawn from a question
 * pool. Unlike the drill loop this is NOT spaced repetition — it never
 * touches SM-2 state. It's a one-shot self-assessment: answer N questions
 * against the clock, get a percentage and a per-question review.
 */

export interface MockConfig {
  /** Number of questions in the paper. */
  count: number;
  /** Total time budget in seconds (0 = untimed). */
  durationSec: number;
}

export interface MockAnswer {
  questionId: string;
  /** The option the user picked, or null if skipped / timed out. */
  picked: OptionKey | null;
  correct: boolean;
}

export interface MockResult {
  total: number;
  answered: number;
  correct: number;
  /** 0-100, rounded. */
  scorePct: number;
  answers: MockAnswer[];
}

/**
 * Deterministic-when-seeded Fisher-Yates sample. Pulls `count` from `pool`
 * without replacement; if the pool is smaller, returns it shuffled. `rng`
 * defaults to Math.random but is injectable so tests are stable.
 */
export function sampleQuestions(
  pool: Question[],
  count: number,
  rng: () => number = Math.random
): Question[] {
  const a = [...pool];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a.slice(0, Math.max(0, Math.min(count, a.length)));
}

/** Build the answer/score summary from the user's picks. */
export function scoreMock(
  questions: Question[],
  picks: Record<string, OptionKey | null>
): MockResult {
  const answers: MockAnswer[] = questions.map((q) => {
    const picked = picks[q.id] ?? null;
    return { questionId: q.id, picked, correct: picked === q.correctOption };
  });
  const correct = answers.filter((a) => a.correct).length;
  const answered = answers.filter((a) => a.picked !== null).length;
  return {
    total: questions.length,
    answered,
    correct,
    scorePct: questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0,
    answers
  };
}
