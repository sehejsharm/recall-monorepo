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

/**
 * Optional per-wrong-option rationales ("why this is wrong"). Keyed by the
 * distractor's option letter; the correct option is never keyed. Progressive
 * enhancement — most questions won't have these yet, so the field is optional
 * and the drill UI degrades gracefully to the single explanation.
 */
export type Distractors = Partial<Record<OptionKey, string>>;

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
  /** Optional "why each wrong answer is wrong" rationales (top-yield topics
   *  first). Absent on most questions; when present, keys exclude the
   *  correct option. */
  distractors?: Distractors;
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

/**
 * A question the user has answered in the current drill, retained so the
 * end-of-session review screen can show the picked option, correctness and the
 * correct answer for every question in order.
 */
export interface AnsweredCard {
  question: Question;
  /** The option the user tapped. */
  selected: OptionKey;
  /** The right answer (`question.correctOption`, denormalised for the review). */
  correct: OptionKey;
  wasCorrect: boolean;
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

/**
 * Deterministic per-question presentation order for the four options.
 *
 * The authored banks skew hard toward option A — corpus-wide it is correct
 * ~65% of the time, ~90% on JEE Advanced, and in 306 topics *every* card in
 * the deck shares one correct letter. Rendering the stored A→D order makes
 * the app trivially gameable (tap A, score 65%) and poisons the SM-2
 * schedule, because cards get graded "correct" for reasons that have nothing
 * to do with recall.
 *
 * Shuffling at presentation time fixes that without rewriting ~11k stored
 * answer keys: progress stays keyed to the authored letter, seed.sql is
 * untouched, and content authored later is covered automatically.
 *
 * The permutation is derived from the question id rather than random, so a
 * card looks identical every time a user meets it. A deck that reshuffled
 * between reviews would change the memory cue mid-schedule, which is exactly
 * what spaced repetition must not do.
 */
export function optionOrder(questionId: string): readonly OptionKey[] {
  // FNV-1a — small, dependency-free, and stable across JS engines so web and
  // native show the same card in the same order.
  let h = 0x811c9dc5;
  for (let i = 0; i < questionId.length; i++) {
    h ^= questionId.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  const keys = [...OPTION_KEYS];
  // Fisher-Yates, stepped by xorshift32 so each swap uses fresh bits.
  for (let i = keys.length - 1; i > 0; i--) {
    h ^= h << 13;
    h >>>= 0;
    h ^= h >>> 17;
    h ^= h << 5;
    h >>>= 0;
    const j = h % (i + 1);
    const tmp = keys[i]!;
    keys[i] = keys[j]!;
    keys[j] = tmp;
  }
  return keys;
}

/**
 * The letter the user actually saw for `key` on this question.
 *
 * Stored answers (and the end-of-session review) reference the *authored*
 * letter, so anything that shows a letter back to the user has to translate
 * it through the same permutation — otherwise the review screen says
 * "Correct: C" about an option that was displayed as A.
 */
export function displayedLabel(questionId: string, key: OptionKey): OptionKey {
  const idx = optionOrder(questionId).indexOf(key);
  return OPTION_KEYS[idx < 0 ? 0 : idx]!;
}
