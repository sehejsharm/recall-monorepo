import { createStore, type StoreApi } from "zustand";
import { createContentRepo, type ContentRepo, type ContentSource } from "./content-repo";
import {
  applyGradeToStats,
  dayKey,
  evaluateAchievements,
  initialGamification,
  normalizeGamification,
  type GamificationState
} from "./gamification";
import {
  buildQueue,
  buildReviewQueue,
  dueCount,
  topicCounts,
  DEFAULT_QUEUE_LIMIT,
  REVIEW_QUEUE_LIMIT
} from "./scheduler";
import { gradeBinary } from "./sm2";
import type { StorageAdapter } from "./storage";
import { syncUserData, type SupabaseLike, type SyncResult } from "./sync";
import type { AnsweredCard, DrillCard, OptionKey, ProgressRecord, ReadRecord, TopicCounts } from "./types";

/** repetitions threshold at which a card counts as "mastered". */
const MASTERY_REPETITIONS = 3;

/**
 * Drill is an auto-graded multiple-choice loop:
 *   "question"  — the four options are shown; the user taps one.
 *   "answered"  — the app has graded the tap (right/wrong is derived, never
 *                 self-reported); the correct option and explanation are shown.
 *   "complete"  — every card answered; the review screen lists them all.
 */
export type DrillPhase = "idle" | "question" | "answered" | "complete";

/**
 * Sentinel `drill.topicId` for a cross-exam review session (not tied to any
 * single topic). Lets the existing DrillEngine identity guard
 * (`drill.topicId !== id`) work unchanged for both modes.
 */
export const REVIEW_SCOPE = "__review__";

/** Sentinel drill scope for a custom multi-topic drill. */
export const CUSTOM_SCOPE = "__custom__";

/** Sentinel drill scope for the bookmarked-questions drill. */
export const BOOKMARK_SCOPE = "__bookmark__";

export interface DrillSession {
  topicId: string | null;
  queue: DrillCard[];
  index: number;
  phase: DrillPhase;
  /** The option the user tapped for the current card (null until answered). */
  selected: OptionKey | null;
  /** Every answered question, in order, for the end-of-session review screen. */
  answers: AnsweredCard[];
  stats: { knew: number; wrong: number };
  /** Consecutive correct run in this session (drives combo UI + bonus XP). */
  combo: number;
  /** Total XP earned this session. */
  sessionXp: number;
  /** XP awarded by the most recent answer (drives the "+N" float). */
  lastXpAward: number;
}

/** Outcome of the most recent sync attempt — drives honest status UI. */
export interface SyncStatus {
  /** ISO time of the attempt. */
  at: string;
  /** True when the round-trip completed and the server accepted every row. */
  ok: boolean;
  /** Failure detail when !ok (network/pull error or first rejected row). */
  error?: string;
  /** Rows the server rejected this attempt (kept locally; retried later). */
  failedRows: number;
  /** Retired-content rows quarantined out of the outbound queue. */
  orphanedRows: number;
}

export interface JyotirState {
  ready: boolean;
  progress: Record<string, ProgressRecord>;
  reads: Record<string, ReadRecord>;
  /** Flagged question ids the user saved for a focused review deck. */
  bookmarks: Record<string, true>;
  stats: GamificationState;
  /** Achievement ids unlocked since the UI last consumed them (for toasts). */
  newlyUnlocked: string[];
  drill: DrillSession;
  /** Result of the last sync attempt (null until one runs). */
  lastSync: SyncStatus | null;

  hydrate(): Promise<void>;

  /** Builds the full in-memory queue for a topic. Everything after this is 0ms. */
  startDrill(topicId: string, limit?: number): void;
  /** Builds a due-only queue spanning every exam (the daily review). */
  startReview(limit?: number): void;
  /** Drill a custom set of topics (custom drill builder). */
  startCustomDrill(topicIds: string[], limit?: number): void;
  /** Drill only the user's bookmarked questions. */
  startBookmarkedDrill(limit?: number): void;
  /** Grade the current card from the tapped option and reveal the answer. */
  answer(option: OptionKey): void;
  /** Advance from the revealed answer to the next card (or the review screen). */
  next(): void;
  exitDrill(): void;

  markRead(materialId: string): void;
  /** Toggle a question's bookmark flag (persisted). */
  toggleBookmark(questionId: string): void;
  /** True if the question is bookmarked. */
  isBookmarked(questionId: string): boolean;
  /** How many questions are bookmarked. */
  bookmarkedCount(): number;
  countsForTopic(topicId: string): TopicCounts;
  /** Total due cards across all exams — drives the home "Review" badge. */
  dueTotal(): number;
  /** Count of mastered cards (3+ clean recalls) — for the stats screen. */
  masteredCount(): number;
  /** UI consumed the unlock toasts. */
  clearNewlyUnlocked(): void;
  /** Erase all local progress, reads and gamification stats. */
  resetAll(): void;

  syncNow(supabase: SupabaseLike, userId: string): Promise<SyncResult>;
}

export interface StoreDeps {
  adapter: StorageAdapter;
  content: ContentSource;
  /** Platform feedback hooks (e.g. expo-haptics). Fired synchronously. */
  onReveal?: () => void;
  /** Fired when a card is graded; `correct` reflects the tapped option. */
  onGrade?: (correct: boolean) => void;
}

const emptyDrill = (): DrillSession => ({
  topicId: null,
  queue: [],
  index: 0,
  phase: "idle",
  selected: null,
  answers: [],
  stats: { knew: 0, wrong: 0 },
  combo: 0,
  sessionXp: 0,
  lastXpAward: 0
});

const countMastered = (progress: Record<string, ProgressRecord>): number => {
  let n = 0;
  for (const p of Object.values(progress)) if (p.repetitions >= MASTERY_REPETITIONS) n += 1;
  return n;
};

export type JyotirStore = StoreApi<JyotirState> & { repo: ContentRepo };

export function createJyotirStore(deps: StoreDeps): JyotirStore {
  const repo = createContentRepo(deps.content);
  const { adapter } = deps;

  const persist = (p: Promise<void>) =>
    p.catch((err) => console.error("[jyotir] persistence failed:", err));

  // Content ids known to this build — computed once, on first sync. Local
  // progress rows outside these sets reference retired content (old bundle
  // versions) and must never reach the server (they 409 on the FK and used
  // to poison the whole batched push).
  let knownIds: { questions: Set<string>; materials: Set<string> } | null = null;
  const knownContentIds = () =>
    (knownIds ??= {
      questions: new Set(deps.content.questions.map((q) => q.id)),
      materials: new Set(deps.content.materials.map((m) => m.id))
    });

  const store = createStore<JyotirState>()((set, get) => ({
    ready: false,
    progress: {},
    reads: {},
    bookmarks: {},
    stats: initialGamification(),
    newlyUnlocked: [],
    drill: emptyDrill(),
    lastSync: null,

    async hydrate() {
      const [progress, reads, bookmarks, stats] = await Promise.all([
        adapter.loadProgress(),
        adapter.loadReadHistory(),
        adapter.loadBookmarks(),
        adapter.loadStats()
      ]);
      set({ progress, reads, bookmarks, stats: normalizeGamification(stats), ready: true });
    },

    startDrill(topicId, limit = DEFAULT_QUEUE_LIMIT) {
      const questions = repo.questionsByTopic(topicId);
      // "ifEmpty": the session serves exactly the due+new cards the topic
      // badge/CTA promised; not-yet-due cards only appear when the user is
      // fully caught up (pure practice, labelled "ahead of schedule").
      const queue = buildQueue(questions, get().progress, new Date(), limit, "ifEmpty");
      set({
        drill: {
          ...emptyDrill(),
          topicId,
          queue,
          phase: queue.length > 0 ? "question" : "complete"
        }
      });
    },

    startReview(limit = REVIEW_QUEUE_LIMIT) {
      const queue = buildReviewQueue(repo.allQuestions(), get().progress, new Date(), limit);
      set({
        drill: {
          ...emptyDrill(),
          topicId: REVIEW_SCOPE,
          queue,
          phase: queue.length > 0 ? "question" : "complete"
        }
      });
    },

    startCustomDrill(topicIds, limit = DEFAULT_QUEUE_LIMIT) {
      const queue = buildQueue(repo.questionsByTopics(topicIds), get().progress, new Date(), limit);
      set({
        drill: {
          ...emptyDrill(),
          topicId: CUSTOM_SCOPE,
          queue,
          phase: queue.length > 0 ? "question" : "complete"
        }
      });
    },

    startBookmarkedDrill(limit = DEFAULT_QUEUE_LIMIT) {
      const ids = new Set(Object.keys(get().bookmarks));
      const questions = repo.allQuestions().filter((q) => ids.has(q.id));
      const queue = buildQueue(questions, get().progress, new Date(), limit);
      set({
        drill: {
          ...emptyDrill(),
          topicId: BOOKMARK_SCOPE,
          queue,
          phase: queue.length > 0 ? "question" : "complete"
        }
      });
    },

    answer(option) {
      const { drill, progress, stats } = get();
      if (drill.phase !== "question") return;
      const card = drill.queue[drill.index];
      if (!card) return;

      // Correctness is derived from the tapped option — never self-reported.
      const correct = option === card.question.correctOption;
      deps.onGrade?.(correct);

      const qid = card.question.id;
      const record = gradeBinary(qid, progress[qid], correct);
      const nextProgress = { ...progress, [qid]: record };

      const sessionStats = {
        knew: drill.stats.knew + (correct ? 1 : 0),
        wrong: drill.stats.wrong + (correct ? 0 : 1)
      };
      const combo = correct ? drill.combo + 1 : 0;
      // The queue is fixed for the session (no in-session re-queue), so the
      // last card is known up front and completion achievements fire on it.
      const isLast = drill.index + 1 >= drill.queue.length;

      // --- gamification ---
      const outcome = applyGradeToStats(stats, correct, combo, dayKey());
      // Attribute this card's XP to its exam (per-exam leaderboards).
      const examId = repo.examIdForTopic(card.question.topicId);
      const examXp = examId
        ? { ...outcome.state.examXp, [examId]: (outcome.state.examXp[examId] ?? 0) + outcome.xpAwarded }
        : outcome.state.examXp;
      const sessionSize = sessionStats.knew + sessionStats.wrong;
      const unlocked = evaluateAchievements({
        state: outcome.state,
        masteredCount: countMastered(nextProgress),
        sessionComplete: isLast,
        sessionSize,
        sessionAccuracy: sessionSize > 0 ? (sessionStats.knew / sessionSize) * 100 : 0
      });
      const nextStats: GamificationState = {
        ...outcome.state,
        examXp,
        achievements: unlocked.length
          ? [...outcome.state.achievements, ...unlocked]
          : outcome.state.achievements
      };

      const answered: AnsweredCard = {
        question: card.question,
        selected: option,
        correct: card.question.correctOption,
        wasCorrect: correct
      };

      set({
        progress: nextProgress,
        stats: nextStats,
        newlyUnlocked: [...get().newlyUnlocked, ...unlocked],
        drill: {
          ...drill,
          phase: "answered",
          selected: option,
          answers: [...drill.answers, answered],
          stats: sessionStats,
          combo,
          sessionXp: drill.sessionXp + outcome.xpAwarded,
          lastXpAward: outcome.xpAwarded
        }
      });

      // I/O strictly after the synchronous state transition.
      persist(adapter.saveProgress(record));
      persist(adapter.saveStats(nextStats));
    },

    next() {
      const { drill } = get();
      if (drill.phase !== "answered") return;
      const index = drill.index + 1;
      const phase: DrillPhase = index >= drill.queue.length ? "complete" : "question";
      set({ drill: { ...drill, index, phase, selected: null } });
    },

    exitDrill() {
      set({ drill: emptyDrill() });
    },

    markRead(materialId) {
      const record: ReadRecord = {
        materialId,
        markedCompletedAt: new Date().toISOString(),
        synced: false
      };
      set((s) => ({ reads: { ...s.reads, [materialId]: record } }));
      persist(adapter.saveReadRecord(record));
    },

    toggleBookmark(questionId) {
      const on = !get().bookmarks[questionId];
      set((s) => {
        const next = { ...s.bookmarks };
        if (on) next[questionId] = true;
        else delete next[questionId];
        return { bookmarks: next };
      });
      persist(adapter.saveBookmark(questionId, on));
    },

    isBookmarked(questionId) {
      return Boolean(get().bookmarks[questionId]);
    },

    bookmarkedCount() {
      return Object.keys(get().bookmarks).length;
    },

    countsForTopic(topicId) {
      return topicCounts(repo.questionsByTopic(topicId), get().progress);
    },

    dueTotal() {
      return dueCount(repo.allQuestions(), get().progress);
    },

    masteredCount() {
      return countMastered(get().progress);
    },

    clearNewlyUnlocked() {
      if (get().newlyUnlocked.length > 0) set({ newlyUnlocked: [] });
    },

    resetAll() {
      set({
        progress: {},
        reads: {},
        bookmarks: {},
        stats: initialGamification(),
        newlyUnlocked: [],
        drill: emptyDrill()
      });
      persist(adapter.clearAll());
    },

    async syncNow(supabase, userId) {
      const ids = knownContentIds();
      let result: SyncResult;
      try {
        result = await syncUserData(
          adapter,
          supabase,
          userId,
          (progress, reads) => {
            if (progress.length === 0 && reads.length === 0) return;
            set((s) => {
              const nextProgress = { ...s.progress };
              for (const p of progress) nextProgress[p.questionId] = p;
              const nextReads = { ...s.reads };
              for (const r of reads) nextReads[r.materialId] = r;
              return { progress: nextProgress, reads: nextReads };
            });
          },
          { knownQuestionIds: ids.questions, knownMaterialIds: ids.materials }
        );
      } catch (err) {
        set({
          lastSync: {
            at: new Date().toISOString(),
            ok: false,
            error: err instanceof Error ? err.message : String(err),
            failedRows: 0,
            orphanedRows: 0
          }
        });
        throw err;
      }
      // Adopt the adapter's post-sync flags verbatim: only rows the server
      // actually accepted are marked synced (failed rows stay dirty and
      // retry on the next sync).
      const [progress, reads] = await Promise.all([
        adapter.loadProgress(),
        adapter.loadReadHistory()
      ]);
      const failedRows = result.failedProgress + result.failedReads;
      set({
        progress,
        reads,
        lastSync: {
          at: new Date().toISOString(),
          ok: failedRows === 0,
          ...(result.pushError ? { error: result.pushError } : {}),
          failedRows,
          orphanedRows: result.orphanedProgress + result.orphanedReads
        }
      });
      return result;
    }
  }));

  return Object.assign(store, { repo });
}
