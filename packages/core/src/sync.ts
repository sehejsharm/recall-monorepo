import type { StorageAdapter } from "./storage";
import type { ProgressRecord, ReadRecord } from "./types";

/**
 * Offline-first progress sync against Supabase.
 *
 * Local SQLite/localStorage is the source of truth during a session; rows
 * with synced=false form the outbound queue. Sync is a two-phase
 * last-write-wins merge keyed on updatedAt:
 *
 *   push: upsert unsynced local rows (unique on user_id+question_id /
 *         user_id+material_id) — server keeps the newer updatedAt via RLS-
 *         safe upsert.
 *   pull: fetch server rows and adopt any that are newer than local.
 *
 * Push resilience — one bad row must never block the whole account:
 *   1. Rows referencing content ids that no longer exist in the shipped
 *      bundle (retired questions/materials from old content versions) are
 *      quarantined up front: retired locally (marked synced so they leave
 *      the outbound queue forever) and never sent. Historically a single
 *      such orphan made the batched upsert 409 on a foreign key and
 *      silently blocked ALL progress from ever reaching the server.
 *   2. If the batch upsert still fails (e.g. the server's content tables
 *      lag the shipped bundle), fall back to per-row upserts: successes
 *      are marked synced, failures stay dirty and retry on the next sync.
 *      Push failures are reported in the result, not thrown — the pull
 *      phase still runs so the device keeps converging.
 *
 * The Supabase client is injected as a minimal structural type so core
 * stays dependency-free and the engine is trivially testable.
 */

interface PostgrestResult<T> {
  data: T | null;
  error: { message: string } | null;
}

export interface SupabaseLike {
  from(table: string): {
    upsert(values: Record<string, unknown>[], opts: { onConflict: string }): PromiseLike<PostgrestResult<unknown>>;
    select(columns: string): {
      eq(column: string, value: string): PromiseLike<PostgrestResult<Record<string, unknown>[]>>;
    };
  };
}

export interface SyncOptions {
  /** Question ids that exist in the current content bundle. When provided,
   *  dirty progress rows outside this set are quarantined (never pushed). */
  knownQuestionIds?: ReadonlySet<string>;
  /** Material ids that exist in the current content bundle. */
  knownMaterialIds?: ReadonlySet<string>;
}

export interface SyncResult {
  pushedProgress: number;
  pushedReads: number;
  pulledProgress: number;
  pulledReads: number;
  /** Local rows referencing retired content ids — quarantined, never pushed. */
  orphanedProgress: number;
  orphanedReads: number;
  /** Rows the server rejected — left dirty; retried on the next sync. */
  failedProgress: number;
  failedReads: number;
  /** First push error message, when any rows failed. */
  pushError?: string;
}

/**
 * Upsert `rows` as one batch; on failure fall back to per-row upserts so a
 * single poisoned row cannot reject its neighbours. Returns the ids (per
 * `idOf`) that the server accepted plus the failure count / first error.
 */
async function resilientUpsert<T>(
  supabase: SupabaseLike,
  table: string,
  onConflict: string,
  rows: T[],
  toPayload: (row: T) => Record<string, unknown>,
  idOf: (row: T) => string
): Promise<{ acceptedIds: string[]; failed: number; error?: string }> {
  if (rows.length === 0) return { acceptedIds: [], failed: 0 };

  const batch = await supabase.from(table).upsert(rows.map(toPayload), { onConflict });
  if (!batch.error) return { acceptedIds: rows.map(idOf), failed: 0 };

  // Batch rejected — isolate the poison: try each row on its own.
  const acceptedIds: string[] = [];
  let failed = 0;
  let firstError: string | undefined;
  for (const row of rows) {
    const single = await supabase.from(table).upsert([toPayload(row)], { onConflict });
    if (single.error) {
      failed += 1;
      firstError ??= single.error.message;
    } else {
      acceptedIds.push(idOf(row));
    }
  }
  // If every row "fails" identically the batch error is the real story.
  return { acceptedIds, failed, error: firstError ?? batch.error.message };
}

export async function syncUserData(
  adapter: StorageAdapter,
  supabase: SupabaseLike,
  userId: string,
  applyRemote: (progress: ProgressRecord[], reads: ReadRecord[]) => void,
  options: SyncOptions = {}
): Promise<SyncResult> {
  const [localProgress, localReads] = await Promise.all([
    adapter.loadProgress(),
    adapter.loadReadHistory()
  ]);

  // ---- push: progress ----
  const dirtyProgress = Object.values(localProgress).filter((p) => !p.synced);
  const { knownQuestionIds, knownMaterialIds } = options;
  const orphanProgress = knownQuestionIds
    ? dirtyProgress.filter((p) => !knownQuestionIds.has(p.questionId))
    : [];
  const pushableProgress = knownQuestionIds
    ? dirtyProgress.filter((p) => knownQuestionIds.has(p.questionId))
    : dirtyProgress;

  // Quarantine orphans: retire them from the outbound queue permanently.
  if (orphanProgress.length > 0) {
    await adapter.markProgressSynced(orphanProgress.map((p) => p.questionId));
  }

  const progressPush = await resilientUpsert(
    supabase,
    "user_progress",
    "user_id,question_id",
    pushableProgress,
    (p) => ({
      user_id: userId,
      question_id: p.questionId,
      next_review_date: p.nextReviewDate,
      interval_days: p.intervalDays,
      ease_factor: p.easeFactor,
      repetitions: p.repetitions,
      lapses: p.lapses,
      last_reviewed_at: p.lastReviewedAt,
      updated_at: p.updatedAt
    }),
    (p) => p.questionId
  );
  if (progressPush.acceptedIds.length > 0) {
    await adapter.markProgressSynced(progressPush.acceptedIds);
  }

  // ---- push: read history ----
  const dirtyReads = Object.values(localReads).filter((r) => !r.synced);
  const orphanReads = knownMaterialIds
    ? dirtyReads.filter((r) => !knownMaterialIds.has(r.materialId))
    : [];
  const pushableReads = knownMaterialIds
    ? dirtyReads.filter((r) => knownMaterialIds.has(r.materialId))
    : dirtyReads;

  if (orphanReads.length > 0) {
    await adapter.markReadsSynced(orphanReads.map((r) => r.materialId));
  }

  const readsPush = await resilientUpsert(
    supabase,
    "user_read_history",
    "user_id,material_id",
    pushableReads,
    (r) => ({
      user_id: userId,
      material_id: r.materialId,
      marked_completed_at: r.markedCompletedAt
    }),
    (r) => r.materialId
  );
  if (readsPush.acceptedIds.length > 0) {
    await adapter.markReadsSynced(readsPush.acceptedIds);
  }

  // ---- pull ----
  const { data: remoteProgress, error: progressErr } = await supabase
    .from("user_progress")
    .select("question_id,next_review_date,interval_days,ease_factor,repetitions,lapses,last_reviewed_at,updated_at")
    .eq("user_id", userId);
  if (progressErr) throw new Error(`sync pull (progress): ${progressErr.message}`);

  const { data: remoteReads, error: readsErr } = await supabase
    .from("user_read_history")
    .select("material_id,marked_completed_at")
    .eq("user_id", userId);
  if (readsErr) throw new Error(`sync pull (reads): ${readsErr.message}`);

  const newerProgress: ProgressRecord[] = [];
  for (const row of remoteProgress ?? []) {
    const rec: ProgressRecord = {
      questionId: String(row.question_id),
      nextReviewDate: String(row.next_review_date),
      intervalDays: Number(row.interval_days),
      easeFactor: Number(row.ease_factor),
      repetitions: Number(row.repetitions),
      lapses: Number(row.lapses),
      lastReviewedAt: String(row.last_reviewed_at),
      updatedAt: String(row.updated_at),
      synced: true
    };
    const local = localProgress[rec.questionId];
    if (!local || local.updatedAt < rec.updatedAt) {
      newerProgress.push(rec);
      await adapter.saveProgress(rec);
    }
  }

  const newerReads: ReadRecord[] = [];
  for (const row of remoteReads ?? []) {
    const rec: ReadRecord = {
      materialId: String(row.material_id),
      markedCompletedAt: String(row.marked_completed_at),
      synced: true
    };
    if (!localReads[rec.materialId]) {
      newerReads.push(rec);
      await adapter.saveReadRecord(rec);
    }
  }

  applyRemote(newerProgress, newerReads);

  const pushError = progressPush.error ?? readsPush.error;
  return {
    pushedProgress: progressPush.acceptedIds.length,
    pushedReads: readsPush.acceptedIds.length,
    pulledProgress: newerProgress.length,
    pulledReads: newerReads.length,
    orphanedProgress: orphanProgress.length,
    orphanedReads: orphanReads.length,
    failedProgress: progressPush.failed,
    failedReads: readsPush.failed,
    ...(pushError ? { pushError } : {})
  };
}
