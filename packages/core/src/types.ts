/**
 * Canonical domain model, mirrored 1:1 by the Supabase schema
 * (supabase/migrations) and the Prisma schema (prisma/schema.prisma).
 *
 * Content entities use stable human-readable TEXT ids (e.g.
 * "upsc-polity-fundamental-rights-q01") so that ids are identical across
 * the bundled content, local SQLite cache and Postgres — which makes
 * offline progress sync a pure upsert with no id mapping.
 */

export type ExamSlug =
  | "upsc"
  | "jee"
  | "neet"
  | "ssc-cgl"
  | "gate"
  | "cfa-1"
  | "cfa-2"
  | "cfa-3"
  | "frm-1"
  | "frm-2";

export interface Exam {
  id: string;
  slug: ExamSlug;
  name: string;
  /** One-line positioning shown on the exam picker. */
  tagline: string;
  orderIndex: number;
}

export interface Subject {
  id: string;
  examId: string;
  name: string;
  slug: string;
  orderIndex: number;
}

export interface Topic {
  id: string;
  subjectId: string;
  name: string;
  slug: string;
  orderIndex: number;
}

export interface StudyMaterial {
  id: string;
  topicId: string;
  title: string;
  /** Markdown. High-yield only: bold keywords, tables, formulas. ≤2 min read. */
  content: string;
  /** Estimated read time in minutes (1 or 2 — never more). */
  estimatedReadTime: number;
  /** Number of drill questions in this material's topic. Derived, never authored. */
  totalLinkedQuestions: number;
  orderIndex: number;
}

export type OptionKey = "A" | "B" | "C" | "D";

export interface Question {
  id: string;
  topicId: string;
  text: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption: OptionKey;
  /** One line. Shown under the revealed answer. */
  explanation: string;
  orderIndex: number;
}

/** SM-2 scheduling state for a single (user, question) pair. */
export interface Sm2State {
  /** Consecutive successful recalls. Resets to 0 on a lapse. */
  repetitions: number;
  /** E-Factor. Starts at 2.5, floored at 1.3. */
  easeFactor: number;
  /** Current inter-repetition interval in whole days. */
  intervalDays: number;
  /** ISO timestamp after which the card is due again. */
  nextReviewDate: string;
}

export interface ProgressRecord extends Sm2State {
  questionId: string;
  lapses: number;
  lastReviewedAt: string;
  /** Last local mutation time; drives last-write-wins merge during sync. */
  updatedAt: string;
  /** False until the row has been pushed to Supabase. */
  synced: boolean;
}

export interface ReadRecord {
  materialId: string;
  markedCompletedAt: string;
  synced: boolean;
}

/** Why a card is in the current drill queue. */
export type QueueReason = "due" | "new" | "early";

export interface DrillCard {
  question: Question;
  reason: QueueReason;
}

export interface TopicCounts {
  /** Cards with nextReviewDate <= now. */
  due: number;
  /** Cards never seen. */
  fresh: number;
  total: number;
}

export const optionText = (q: Question, key: OptionKey): string =>
  key === "A" ? q.optionA : key === "B" ? q.optionB : key === "C" ? q.optionC : q.optionD;

export const OPTION_KEYS: readonly OptionKey[] = ["A", "B", "C", "D"];
