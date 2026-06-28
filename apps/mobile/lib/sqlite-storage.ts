import * as SQLite from "expo-sqlite";
import type { GamificationState, ProgressRecord, ReadRecord, StorageAdapter } from "@jyotir/core";

/**
 * expo-sqlite StorageAdapter: SM-2 state and read history survive app
 * restarts and full offline stretches. Rows with synced=0 are the
 * outbound queue for the next Supabase sync.
 *
 * The synchronous SQLite API is intentional — rows are tiny, and the
 * store fires these writes after the UI transition, so they're never on
 * the critical path.
 */
export class SqliteStorageAdapter implements StorageAdapter {
  private db: SQLite.SQLiteDatabase;

  constructor(databaseName = "jyotir.db") {
    this.db = SQLite.openDatabaseSync(databaseName);
    this.db.execSync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS progress (
        question_id      TEXT PRIMARY KEY,
        repetitions      INTEGER NOT NULL,
        ease_factor      REAL    NOT NULL,
        interval_days    INTEGER NOT NULL,
        next_review_date TEXT    NOT NULL,
        lapses           INTEGER NOT NULL,
        last_reviewed_at TEXT    NOT NULL,
        updated_at       TEXT    NOT NULL,
        synced           INTEGER NOT NULL DEFAULT 0
      );
      CREATE INDEX IF NOT EXISTS progress_due_idx ON progress (next_review_date);
      CREATE TABLE IF NOT EXISTS reads (
        material_id         TEXT PRIMARY KEY,
        marked_completed_at TEXT NOT NULL,
        synced              INTEGER NOT NULL DEFAULT 0
      );
      -- Single-row gamification blob (id is always 1).
      CREATE TABLE IF NOT EXISTS stats (
        id    INTEGER PRIMARY KEY CHECK (id = 1),
        json  TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS bookmarks (
        question_id TEXT PRIMARY KEY
      );
    `);
  }

  async loadProgress(): Promise<Record<string, ProgressRecord>> {
    const rows = this.db.getAllSync<{
      question_id: string;
      repetitions: number;
      ease_factor: number;
      interval_days: number;
      next_review_date: string;
      lapses: number;
      last_reviewed_at: string;
      updated_at: string;
      synced: number;
    }>("SELECT * FROM progress");
    const out: Record<string, ProgressRecord> = {};
    for (const r of rows) {
      out[r.question_id] = {
        questionId: r.question_id,
        repetitions: r.repetitions,
        easeFactor: r.ease_factor,
        intervalDays: r.interval_days,
        nextReviewDate: r.next_review_date,
        lapses: r.lapses,
        lastReviewedAt: r.last_reviewed_at,
        updatedAt: r.updated_at,
        synced: r.synced === 1
      };
    }
    return out;
  }

  async saveProgress(p: ProgressRecord): Promise<void> {
    this.db.runSync(
      `INSERT INTO progress (question_id, repetitions, ease_factor, interval_days, next_review_date, lapses, last_reviewed_at, updated_at, synced)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(question_id) DO UPDATE SET
         repetitions = excluded.repetitions,
         ease_factor = excluded.ease_factor,
         interval_days = excluded.interval_days,
         next_review_date = excluded.next_review_date,
         lapses = excluded.lapses,
         last_reviewed_at = excluded.last_reviewed_at,
         updated_at = excluded.updated_at,
         synced = excluded.synced`,
      [
        p.questionId,
        p.repetitions,
        p.easeFactor,
        p.intervalDays,
        p.nextReviewDate,
        p.lapses,
        p.lastReviewedAt,
        p.updatedAt,
        p.synced ? 1 : 0
      ]
    );
  }

  async loadReadHistory(): Promise<Record<string, ReadRecord>> {
    const rows = this.db.getAllSync<{
      material_id: string;
      marked_completed_at: string;
      synced: number;
    }>("SELECT * FROM reads");
    const out: Record<string, ReadRecord> = {};
    for (const r of rows) {
      out[r.material_id] = {
        materialId: r.material_id,
        markedCompletedAt: r.marked_completed_at,
        synced: r.synced === 1
      };
    }
    return out;
  }

  async saveReadRecord(r: ReadRecord): Promise<void> {
    this.db.runSync(
      `INSERT INTO reads (material_id, marked_completed_at, synced)
       VALUES (?, ?, ?)
       ON CONFLICT(material_id) DO UPDATE SET
         marked_completed_at = excluded.marked_completed_at,
         synced = excluded.synced`,
      [r.materialId, r.markedCompletedAt, r.synced ? 1 : 0]
    );
  }

  async loadBookmarks(): Promise<Record<string, true>> {
    const rows = this.db.getAllSync<{ question_id: string }>("SELECT question_id FROM bookmarks");
    const out: Record<string, true> = {};
    for (const r of rows) out[r.question_id] = true;
    return out;
  }

  async saveBookmark(questionId: string, on: boolean): Promise<void> {
    if (on) {
      this.db.runSync(
        "INSERT INTO bookmarks (question_id) VALUES (?) ON CONFLICT(question_id) DO NOTHING",
        [questionId]
      );
    } else {
      this.db.runSync("DELETE FROM bookmarks WHERE question_id = ?", [questionId]);
    }
  }

  async loadStats(): Promise<GamificationState | null> {
    const row = this.db.getFirstSync<{ json: string }>("SELECT json FROM stats WHERE id = 1");
    return row ? (JSON.parse(row.json) as GamificationState) : null;
  }

  async saveStats(state: GamificationState): Promise<void> {
    this.db.runSync(
      `INSERT INTO stats (id, json) VALUES (1, ?)
       ON CONFLICT(id) DO UPDATE SET json = excluded.json`,
      [JSON.stringify(state)]
    );
  }

  async markProgressSynced(questionIds: string[]): Promise<void> {
    if (questionIds.length === 0) return;
    const placeholders = questionIds.map(() => "?").join(",");
    this.db.runSync(
      `UPDATE progress SET synced = 1 WHERE question_id IN (${placeholders})`,
      questionIds
    );
  }

  async markReadsSynced(materialIds: string[]): Promise<void> {
    if (materialIds.length === 0) return;
    const placeholders = materialIds.map(() => "?").join(",");
    this.db.runSync(
      `UPDATE reads SET synced = 1 WHERE material_id IN (${placeholders})`,
      materialIds
    );
  }

  async clearAll(): Promise<void> {
    this.db.execSync("DELETE FROM progress; DELETE FROM reads; DELETE FROM stats; DELETE FROM bookmarks;");
  }
}
