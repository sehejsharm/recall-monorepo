import type { GamificationState, ProgressRecord, ReadRecord, StorageAdapter } from "@jyotir/core";

const PROGRESS_KEY = "recall.progress.v1";
const READS_KEY = "recall.reads.v1";
const STATS_KEY = "recall.stats.v1";
const BOOKMARKS_KEY = "recall.bookmarks.v1";

/**
 * Legacy `jyotir.*` names. lib/storage-migration.ts moves these to the
 * `recall.*` namespace on boot; this map is the safety net for the rare case
 * where the migration couldn't run (storage disabled mid-session, quota), so
 * a read still finds pre-existing data instead of silently returning empty.
 */
const LEGACY_KEY: Record<string, string> = {
  [PROGRESS_KEY]: "jyotir.progress.v1",
  [READS_KEY]: "jyotir.reads.v1",
  [STATS_KEY]: "jyotir.stats.v1",
  [BOOKMARKS_KEY]: "jyotir.bookmarks.v1"
};

/** Reads `key`, falling back to its legacy name. */
function readRaw(key: string): string | null {
  const direct = window.localStorage.getItem(key);
  if (direct !== null) return direct;
  const legacy = LEGACY_KEY[key];
  return legacy ? window.localStorage.getItem(legacy) : null;
}

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
      const raw = readRaw(key);
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
      const raw = readRaw(STATS_KEY);
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
    // Clear both namespaces so a reset never leaves stale legacy data behind.
    for (const k of [PROGRESS_KEY, READS_KEY, STATS_KEY, BOOKMARKS_KEY]) {
      window.localStorage.removeItem(k);
      const legacy = LEGACY_KEY[k];
      if (legacy) window.localStorage.removeItem(legacy);
    }
  }
}
