import type { GamificationState } from "./gamification";
import type { ProgressRecord, ReadRecord } from "./types";

/**
 * Platform persistence boundary.
 *
 * Implementations:
 *   - web:    localStorage-backed (apps/web/lib/web-storage.ts)
 *   - mobile: expo-sqlite (apps/mobile/lib/sqlite-storage.ts)
 *
 * Records carry their own `synced` flag, so the adapter doubles as the
 * offline mutation queue: anything with synced=false is pending push.
 * All writes are fire-and-forget from the store's perspective — grading a
 * card never waits on I/O.
 */
export interface StorageAdapter {
  loadProgress(): Promise<Record<string, ProgressRecord>>;
  saveProgress(record: ProgressRecord): Promise<void>;

  loadReadHistory(): Promise<Record<string, ReadRecord>>;
  saveReadRecord(record: ReadRecord): Promise<void>;

  /** Bookmarked (flagged) question ids -> true. */
  loadBookmarks(): Promise<Record<string, true>>;
  saveBookmark(questionId: string, on: boolean): Promise<void>;

  /** XP / streak / achievements. null until the first card is graded. */
  loadStats(): Promise<GamificationState | null>;
  saveStats(state: GamificationState): Promise<void>;

  /** Mark records as pushed after a successful sync. */
  markProgressSynced(questionIds: string[]): Promise<void>;
  markReadsSynced(materialIds: string[]): Promise<void>;

  /** Wipe all local data (progress, reads, stats) for "reset progress". */
  clearAll(): Promise<void>;
}

/** In-memory adapter for tests and SSR render passes. */
export class MemoryStorageAdapter implements StorageAdapter {
  private progress: Record<string, ProgressRecord> = {};
  private reads: Record<string, ReadRecord> = {};
  private bookmarks: Record<string, true> = {};
  private stats: GamificationState | null = null;

  async loadProgress() {
    return { ...this.progress };
  }
  async saveProgress(record: ProgressRecord) {
    this.progress[record.questionId] = record;
  }
  async loadReadHistory() {
    return { ...this.reads };
  }
  async saveReadRecord(record: ReadRecord) {
    this.reads[record.materialId] = record;
  }
  async loadBookmarks() {
    return { ...this.bookmarks };
  }
  async saveBookmark(questionId: string, on: boolean) {
    if (on) this.bookmarks[questionId] = true;
    else delete this.bookmarks[questionId];
  }
  async loadStats() {
    return this.stats;
  }
  async saveStats(state: GamificationState) {
    this.stats = state;
  }
  async markProgressSynced(questionIds: string[]) {
    for (const id of questionIds) {
      const rec = this.progress[id];
      if (rec) rec.synced = true;
    }
  }
  async markReadsSynced(materialIds: string[]) {
    for (const id of materialIds) {
      const rec = this.reads[id];
      if (rec) rec.synced = true;
    }
  }
  async clearAll() {
    this.progress = {};
    this.reads = {};
    this.bookmarks = {};
    this.stats = null;
  }
}
