import type { DrillCard, ProgressRecord, Question, TopicCounts } from "./types";

/**
 * Builds the in-memory drill queue for a topic. Called once when a drill
 * session starts; the whole queue lives in memory so advancing between
 * cards is a synchronous state update (0ms — no fetch, no spinner).
 *
 * Priority order:
 *   1. "due"   — reviewed before, nextReviewDate <= now, most overdue first
 *   2. "new"   — never reviewed, in authored order
 *   3. "early" — not yet due, soonest first
 *
 * `earlyFill` controls when early cards join the queue:
 *   "always"  — pad the session up to `limit` (explicit practice decks:
 *               custom drills, bookmark drills).
 *   "ifEmpty" — only when there is nothing due and nothing new, so the
 *               session length matches the due/new count the UI promised
 *               ("11 Cards Due" starts an 11-card session), while a fully
 *               caught-up user can still practice.
 */
export const DEFAULT_QUEUE_LIMIT = 30;

/**
 * The cross-exam daily review serves EVERYTHING due — the home banner
 * promises "everything due, across all your exams", so the session length
 * must equal the advertised due count, not a 30-card slice of it. The cap
 * exists only as a memory/sanity guard for pathological backlogs; UI copy
 * must disclose the truncation whenever dueTotal exceeds it.
 */
export const REVIEW_QUEUE_LIMIT = 500;

export type EarlyFill = "always" | "ifEmpty";

export function buildQueue(
  questions: Question[],
  progress: Record<string, ProgressRecord>,
  now: Date = new Date(),
  limit: number = DEFAULT_QUEUE_LIMIT,
  earlyFill: EarlyFill = "always"
): DrillCard[] {
  const nowIso = now.toISOString();
  const due: { q: Question; at: string }[] = [];
  const fresh: Question[] = [];
  const early: { q: Question; at: string }[] = [];

  for (const q of questions) {
    const p = progress[q.id];
    if (!p) {
      fresh.push(q);
    } else if (p.nextReviewDate <= nowIso) {
      due.push({ q, at: p.nextReviewDate });
    } else {
      early.push({ q, at: p.nextReviewDate });
    }
  }

  due.sort((a, b) => a.at.localeCompare(b.at));
  fresh.sort((a, b) => a.orderIndex - b.orderIndex);
  early.sort((a, b) => a.at.localeCompare(b.at));

  const includeEarly = earlyFill === "always" || (due.length === 0 && fresh.length === 0);
  const queue: DrillCard[] = [
    ...due.map(({ q }) => ({ question: q, reason: "due" as const })),
    ...fresh.map((q) => ({ question: q, reason: "new" as const })),
    ...(includeEarly ? early.map(({ q }) => ({ question: q, reason: "early" as const })) : [])
  ];

  return queue.slice(0, limit);
}

/** Due/new counts powering badges and the "Drill This Topic Now (X Cards Due)" CTA. */
export function topicCounts(
  questions: Question[],
  progress: Record<string, ProgressRecord>,
  now: Date = new Date()
): TopicCounts {
  const nowIso = now.toISOString();
  let due = 0;
  let fresh = 0;
  for (const q of questions) {
    const p = progress[q.id];
    if (!p) fresh += 1;
    else if (p.nextReviewDate <= nowIso) due += 1;
  }
  return { due, fresh, total: questions.length };
}

/**
 * Cross-topic review queue: ONLY cards that are actually due (seen before,
 * nextReviewDate <= now), most overdue first. This is the frictionless
 * "drill everything due across all my exams" entry point — it never
 * surfaces brand-new cards, so the daily review can reach zero.
 */
export function buildReviewQueue(
  questions: Question[],
  progress: Record<string, ProgressRecord>,
  now: Date = new Date(),
  limit: number = DEFAULT_QUEUE_LIMIT
): DrillCard[] {
  const nowIso = now.toISOString();
  const due: { q: Question; at: string }[] = [];
  for (const q of questions) {
    const p = progress[q.id];
    if (p && p.nextReviewDate <= nowIso) due.push({ q, at: p.nextReviewDate });
  }
  due.sort((a, b) => a.at.localeCompare(b.at));
  return due.slice(0, limit).map(({ q }) => ({ question: q, reason: "due" as const }));
}

/** Total number of due cards across an arbitrary question set (drives the home badge). */
export function dueCount(
  questions: Question[],
  progress: Record<string, ProgressRecord>,
  now: Date = new Date()
): number {
  const nowIso = now.toISOString();
  let n = 0;
  for (const q of questions) {
    const p = progress[q.id];
    if (p && p.nextReviewDate <= nowIso) n += 1;
  }
  return n;
}
