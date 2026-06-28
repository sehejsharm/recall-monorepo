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
import { buildQueue, buildReviewQueue, dueCount, topicCounts, DEFAULT_QUEUE_LIMIT } from "./scheduler";
import { gradeBinary } from "./sm2";
import type { StorageAdapter } from "./storage";
import { syncUserData, type SupabaseLike, type SyncResult } from "./sync";
import type { DrillCard, ProgressRecord, ReadRecord, TopicCounts } from "./types";

/** repetitions threshold at which a card counts as "mastered". */
const MASTERY_REPETITIONS = 3;

export type DrillPhase = "idle" | "question" | "revealed" | "complete";

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
  /** The grade just given, kept for the brief reveal/flash on the card. */
  lastGrade: boolean | null;
  stats: { knew: number; wrong: number };
  /** Consecutive "Knew It" run in this session (drives combo UI + bonus XP). */
  combo: number;
  /** Total XP earned this session. */
  sessionXp: number;
  /** XP awarded by the most recent grade (drives the "+N" float). */
  lastXpAward: number;
  /** Lapsed cards re-enter the back of the queue once per session. */
  requeued: Record<string, true>;
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

  hydrate(): Promise<void>;

  /** Builds the full in-memory queue for a topic. Everything after this is 0ms. */
  startDrill(topicId: string, limit?: number): void;
  /** Builds a due-only queue spanning every exam (the daily review). */
  startReview(limit?: number): void;
  /** Drill a custom set of topics (custom drill builder). */
  startCustomDrill(topicIds: string[], limit?: number): void;
  /** Drill only the user's bookmarked questions. */
  startBookmarkedDrill(limit?: number): void;
  reveal(): void;
  grade(knewIt: boolean): void;
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
  onGrade?: (knewIt: boolean) => void;
}

const emptyDrill = (): DrillSession => ({
  topicId: null,
  queue: [],
  index: 0,
  phase: "idle",
  lastGrade: null,
  stats: { knew: 0, wrong: 0 },
  combo: 0,
  sessionXp: 0,
  lastXpAward: 0,
  requeued: {}
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

  const store = createStore<JyotirState>()((set, get) => ({
    ready: false,
    progress: {},
    reads: {},
    bookmarks: {},
    stats: initialGamification(),
    newlyUnlocked: [],
    drill: emptyDrill(),

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
      const queue = buildQueue(questions, get().progress, new Date(), limit);
      set({
        drill: {
          ...emptyDrill(),
          topicId,
          queue,
          phase: queue.length > 0 ? "question" : "complete"
        }
      });
    },

    startReview(limit = DEFAULT_QUEUE_LIMIT) {
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

    reveal() {
      const { drill } = get();
      if (drill.phase !== "question") return;
      deps.onReveal?.();
      set({ drill: { ...drill, phase: "revealed" } });
    },

    grade(knewIt) {
      const { drill, progress, stats } = get();
      if (drill.phase !== "revealed") return;
      const card = drill.queue[drill.index];
      if (!card) return;

      deps.onGrade?.(knewIt);

      const qid = card.question.id;
      const record = gradeBinary(qid, progress[qid], knewIt);
      const nextProgress = { ...progress, [qid]: record };

      // Lapsed card relearns within the session: re-queue at the back, once.
      let queue = drill.queue;
      let requeued = drill.requeued;
      if (!knewIt && !requeued[qid]) {
        queue = [...queue, { question: card.question, reason: "due" }];
        requeued = { ...requeued, [qid]: true };
      }

      const index = drill.index + 1;
      const phase = index >= queue.length ? "complete" : "question";
      const sessionStats = {
        knew: drill.stats.knew + (knewIt ? 1 : 0),
        wrong: drill.stats.wrong + (knewIt ? 0 : 1)
      };
      const combo = knewIt ? drill.combo + 1 : 0;

      // --- gamification ---
      const outcome = applyGradeToStats(stats, knewIt, combo, dayKey());
      // Attribute this card's XP to its exam (per-exam leaderboards).
      const examId = repo.examIdForTopic(card.question.topicId);
      const examXp = examId
        ? { ...outcome.state.examXp, [examId]: (outcome.state.examXp[examId] ?? 0) + outcome.xpAwarded }
        : outcome.state.examXp;
      const sessionSize = sessionStats.knew + sessionStats.wrong;
      const unlocked = evaluateAchievements({
        state: outcome.state,
        masteredCount: countMastered(nextProgress),
        sessionComplete: phase === "complete",
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

      set({
        progress: nextProgress,
        stats: nextStats,
        newlyUnlocked: [...get().newlyUnlocked, ...unlocked],
        drill: {
          ...drill,
          queue,
          requeued,
          index,
          lastGrade: knewIt,
          phase,
          stats: sessionStats,
          combo,
          sessionXp: drill.sessionXp + outcome.xpAwarded,
          lastXpAward: outcome.xpAwarded
        }
      });

      // I/O strictly after the synchronous state transition: the next card
      // is already on screen before these writes begin.
      persist(adapter.saveProgress(record));
      persist(adapter.saveStats(nextStats));
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
      const result = await syncUserData(adapter, supabase, userId, (progress, reads) => {
        if (progress.length === 0 && reads.length === 0) return;
        set((s) => {
          const nextProgress = { ...s.progress };
          for (const p of progress) nextProgress[p.questionId] = p;
          const nextReads = { ...s.reads };
          for (const r of reads) nextReads[r.materialId] = r;
          return { progress: nextProgress, reads: nextReads };
        });
      });
      // Reflect the pushed flags without re-reading storage.
      set((s) => {
        const progress: Record<string, ProgressRecord> = {};
        for (const [k, v] of Object.entries(s.progress)) progress[k] = { ...v, synced: true };
        const reads: Record<string, ReadRecord> = {};
        for (const [k, v] of Object.entries(s.reads)) reads[k] = { ...v, synced: true };
        return { progress, reads };
      });
      return result;
    }
  }));

  return Object.assign(store, { repo });
}
