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
  | "jee-main"
  | "jee-adv"
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
  /**
   * Optional grouping: exams sharing a `family` are levels/parts of one
   * program (e.g. CFA Level I/II/III). The picker shows a single family card
   * and the user then chooses a level.
   */
  family?: string;
  /** Family display name shown on the grouped card (e.g. "CFA Program"). */
  familyName?: string;
  /** Family one-liner for the grouped card. */
  familyTagline?: string;
  /** Short level label shown on the chooser chip (e.g. "Level I", "Part I"). */
  levelLabel?: string;
}

/**
 * A row in the exam picker: either a standalone exam (one level) or a family
 * (program) the user picks a level within.
 */
export interface ExamGroup {
  id: string;
  name: string;
  tagline: string;
  orderIndex: number;
  /** Ordered levels; length 1 for a standalone exam. */
  levels: Exam[];
}

/** Collapse level/part exams (same `family`) into one picker row each. */
export function groupExams(exams: Exam[]): ExamGroup[] {
  const groups: ExamGroup[] = [];
  const byFamily = new Map<string, ExamGroup>();
  for (const exam of [...exams].sort((a, b) => a.orderIndex - b.orderIndex)) {
    if (exam.family) {
      const existing = byFamily.get(exam.family);
      if (existing) {
        existing.levels.push(exam);
      } else {
        const group: ExamGroup = {
          id: exam.family,
          name: exam.familyName ?? exam.name,
          tagline: exam.familyTagline ?? exam.tagline,
          orderIndex: exam.orderIndex,
          levels: [exam]
        };
        byFamily.set(exam.family, group);
        groups.push(group);
      }
    } else {
      groups.push({
        id: exam.id,
        name: exam.name,
        tagline: exam.tagline,
        orderIndex: exam.orderIndex,
        levels: [exam]
      });
    }
  }
  return groups;
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
