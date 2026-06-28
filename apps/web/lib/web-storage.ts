import type { GamificationState, ProgressRecord, ReadRecord, StorageAdapter } from "@jyotir/core";

const PROGRESS_KEY = "jyotir.progress.v1";
const READS_KEY = "jyotir.reads.v1";
const STATS_KEY = "jyotir.stats.v1";
const BOOKMARKS_KEY = "jyotir.bookmarks.v1";

/**
 * localStorage-backed StorageAdapter. Progress is a few KB even after
 * thousands of reviews, and synchronous localStorage keeps the post-grade
 * write off the critical path entirely. Swap for IndexedDB/WatermelonDB
 * behind the same interface when multi-MB content caching lands on web.
 */
export class WebStorageAdapter implements StorageAdapter {
  private read<T>(key: string): Record<string, T> {
    if (typeof window === "undefined") return {};
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as Record<string, T>) : {};
    } catch {
      return {};
    }
  }

  private write<T>(key: string, value: Record<string, T>): void {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  async loadProgress(): Promise<Record<string, ProgressRecord>> {
    return this.read<ProgressRecord>(PROGRESS_KEY);
  }

  async saveProgress(record: ProgressRecord): Promise<void> {
    const all = this.read<ProgressRecord>(PROGRESS_KEY);
    all[record.questionId] = record;
    this.write(PROGRESS_KEY, all);
  }

  async loadReadHistory(): Promise<Record<string, ReadRecord>> {
    return this.read<ReadRecord>(READS_KEY);
  }

  async saveReadRecord(record: ReadRecord): Promise<void> {
    const all = this.read<ReadRecord>(READS_KEY);
    all[record.materialId] = record;
    this.write(READS_KEY, all);
  }

  async loadBookmarks(): Promise<Record<string, true>> {
    return this.read<true>(BOOKMARKS_KEY);
  }

  async saveBookmark(questionId: string, on: boolean): Promise<void> {
    const all = this.read<true>(BOOKMARKS_KEY);
    if (on) all[questionId] = true;
    else delete all[questionId];
    this.write(BOOKMARKS_KEY, all);
  }

  async loadStats(): Promise<GamificationState | null> {
    if (typeof window === "undefined") return null;
    try {
      const raw = window.localStorage.getItem(STATS_KEY);
      return raw ? (JSON.parse(raw) as GamificationState) : null;
    } catch {
      return null;
    }
  }

  async saveStats(state: GamificationState): Promise<void> {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STATS_KEY, JSON.stringify(state));
  }

  async markProgressSynced(questionIds: string[]): Promise<void> {
    const all = this.read<ProgressRecord>(PROGRESS_KEY);
    for (const id of questionIds) {
      const rec = all[id];
      if (rec) rec.synced = true;
    }
    this.write(PROGRESS_KEY, all);
  }

  async markReadsSynced(materialIds: string[]): Promise<void> {
    const all = this.read<ReadRecord>(READS_KEY);
    for (const id of materialIds) {
      const rec = all[id];
      if (rec) rec.synced = true;
    }
    this.write(READS_KEY, all);
  }

  async clearAll(): Promise<void> {
    if (typeof window === "undefined") return;
    for (const k of [PROGRESS_KEY, READS_KEY, STATS_KEY, BOOKMARKS_KEY]) window.localStorage.removeItem(k);
  }
}
