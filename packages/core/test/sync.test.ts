import { describe, expect, it } from "vitest";
import { MemoryStorageAdapter } from "../src/storage";
import { syncUserData, type SupabaseLike } from "../src/sync";
import type { ProgressRecord, ReadRecord } from "../src/types";

/**
 * Minimal in-memory Supabase test double implementing the structural
 * SupabaseLike contract. Records every upsert and serves canned rows for
 * the pull phase, so we can assert push payloads and the last-write-wins
 * merge without a network or a real Postgres.
 */
function fakeSupabase(remote: {
  user_progress?: Record<string, unknown>[];
  user_read_history?: Record<string, unknown>[];
}) {
  const upserts: Record<string, Record<string, unknown>[][]> = {};
  const conflicts: Record<string, string> = {};

  const client: SupabaseLike = {
    from(table: string) {
      return {
        upsert(values: Record<string, unknown>[], opts: { onConflict: string }) {
          (upserts[table] ??= []).push(values);
          conflicts[table] = opts.onConflict;
          return Promise.resolve({ data: null, error: null });
        },
        select(_columns: string) {
          return {
            eq(_column: string, _value: string) {
              return Promise.resolve({
                data: (remote[table as keyof typeof remote] ?? []) as Record<string, unknown>[],
                error: null
              });
            }
          };
        }
      };
    }
  };

  return { client, upserts, conflicts };
}

const localProgress = (over: Partial<ProgressRecord> & { questionId: string }): ProgressRecord => ({
  repetitions: 1,
  easeFactor: 2.5,
  intervalDays: 1,
  nextReviewDate: "2026-06-13T00:00:00.000Z",
  lapses: 0,
  lastReviewedAt: "2026-06-12T00:00:00.000Z",
  updatedAt: "2026-06-12T00:00:00.000Z",
  synced: false,
  ...over
});

describe("syncUserData", () => {
  it("pushes only unsynced rows with the correct conflict targets, then marks them synced", async () => {
    const adapter = new MemoryStorageAdapter();
    await adapter.saveProgress(localProgress({ questionId: "q-dirty", synced: false }));
    await adapter.saveProgress(localProgress({ questionId: "q-clean", synced: true }));
    await adapter.saveReadRecord({
      materialId: "m-dirty",
      markedCompletedAt: "2026-06-12T00:00:00.000Z",
      synced: false
    });

    const { client, upserts, conflicts } = fakeSupabase({});
    const result = await syncUserData(adapter, client, "user-1", () => {});

    // Only the dirty progress row is pushed.
    expect(upserts.user_progress).toHaveLength(1);
    expect(upserts.user_progress?.[0]).toHaveLength(1);
    expect(upserts.user_progress?.[0]?.[0]).toMatchObject({
      user_id: "user-1",
      question_id: "q-dirty",
      ease_factor: 2.5
    });
    expect(conflicts.user_progress).toBe("user_id,question_id");
    expect(conflicts.user_read_history).toBe("user_id,material_id");
    expect(result.pushedProgress).toBe(1);
    expect(result.pushedReads).toBe(1);

    // Local rows are now flagged synced.
    const saved = await adapter.loadProgress();
    expect(saved["q-dirty"]?.synced).toBe(true);
  });

  it("adopts a newer remote row but keeps a newer local row (last-write-wins)", async () => {
    const adapter = new MemoryStorageAdapter();
    await adapter.saveProgress(
      localProgress({ questionId: "q-stale-local", updatedAt: "2026-06-10T00:00:00.000Z", synced: true })
    );
    await adapter.saveProgress(
      localProgress({ questionId: "q-fresh-local", updatedAt: "2026-06-30T00:00:00.000Z", synced: true })
    );

    const remoteRow = (questionId: string, updatedAt: string) => ({
      question_id: questionId,
      next_review_date: "2026-07-01T00:00:00.000Z",
      interval_days: 6,
      ease_factor: 2.6,
      repetitions: 2,
      lapses: 0,
      last_reviewed_at: updatedAt,
      updated_at: updatedAt
    });

    const { client } = fakeSupabase({
      user_progress: [
        remoteRow("q-stale-local", "2026-06-20T00:00:00.000Z"), // newer than local -> adopt
        remoteRow("q-fresh-local", "2026-06-20T00:00:00.000Z") // older than local -> ignore
      ]
    });

    const applied: { progress: ProgressRecord[]; reads: ReadRecord[] } = { progress: [], reads: [] };
    const result = await syncUserData(adapter, client, "user-1", (progress, reads) => {
      applied.progress = progress;
      applied.reads = reads;
    });

    expect(result.pulledProgress).toBe(1);
    expect(applied.progress.map((p) => p.questionId)).toEqual(["q-stale-local"]);

    const saved = await adapter.loadProgress();
    // Adopted the remote version of the stale card...
    expect(saved["q-stale-local"]?.repetitions).toBe(2);
    expect(saved["q-stale-local"]?.easeFactor).toBe(2.6);
    // ...but the locally-newer card is untouched.
    expect(saved["q-fresh-local"]?.updatedAt).toBe("2026-06-30T00:00:00.000Z");
    expect(saved["q-fresh-local"]?.repetitions).toBe(1);
  });

  it("reports a push error in the result and keeps the rows dirty for retry", async () => {
    const adapter = new MemoryStorageAdapter();
    await adapter.saveProgress(localProgress({ questionId: "q1", synced: false }));

    const failing: SupabaseLike = {
      from() {
        return {
          upsert() {
            return Promise.resolve({ data: null, error: { message: "rls denied" } });
          },
          select() {
            return { eq() { return Promise.resolve({ data: [], error: null }); } };
          }
        };
      }
    };

    // Push failures no longer abort the sync (the pull still runs); they are
    // reported so the UI can surface an honest status.
    const result = await syncUserData(adapter, failing, "user-1", () => {});
    expect(result.failedProgress).toBe(1);
    expect(result.pushedProgress).toBe(0);
    expect(result.pushError).toMatch(/rls denied/);
    // The unsynced row must remain unsynced so a later sync retries it.
    const saved = await adapter.loadProgress();
    expect(saved["q1"]?.synced).toBe(false);
  });

  it("quarantines rows for retired content ids so they never poison the push", async () => {
    const adapter = new MemoryStorageAdapter();
    // "q-old" belongs to a retired content version — its id no longer exists.
    await adapter.saveProgress(localProgress({ questionId: "q-old", synced: false }));
    await adapter.saveProgress(localProgress({ questionId: "q-live", synced: false }));

    const { client, upserts } = fakeSupabase({});
    const result = await syncUserData(adapter, client, "user-1", () => {}, {
      knownQuestionIds: new Set(["q-live"]),
      knownMaterialIds: new Set()
    });

    // Only the live row was pushed; the orphan was quarantined, not sent.
    expect(upserts.user_progress).toHaveLength(1);
    expect(upserts.user_progress?.[0]?.map((r) => r.question_id)).toEqual(["q-live"]);
    expect(result.pushedProgress).toBe(1);
    expect(result.orphanedProgress).toBe(1);
    expect(result.failedProgress).toBe(0);

    // The orphan is retired from the outbound queue permanently (marked
    // synced locally) so it can never block a future sync either.
    const saved = await adapter.loadProgress();
    expect(saved["q-old"]?.synced).toBe(true);
    expect(saved["q-live"]?.synced).toBe(true);
  });

  it("falls back to per-row pushes when the batch fails, so one bad row cannot block the rest", async () => {
    const adapter = new MemoryStorageAdapter();
    await adapter.saveProgress(localProgress({ questionId: "q-good-1", synced: false }));
    await adapter.saveProgress(localProgress({ questionId: "q-poison", synced: false }));
    await adapter.saveProgress(localProgress({ questionId: "q-good-2", synced: false }));

    // Server double: rejects any payload containing q-poison (FK violation),
    // accepts everything else — mimicking the real 409 that used to zero out
    // the entire account's sync.
    const poisoned: SupabaseLike = {
      from(table: string) {
        return {
          upsert(values: Record<string, unknown>[]) {
            const bad = values.some((v) => v.question_id === "q-poison");
            return Promise.resolve(
              bad
                ? { data: null, error: { message: 'violates foreign key constraint "user_progress_question_id_fkey"' } }
                : { data: null, error: null }
            );
          },
          select() {
            return { eq() { return Promise.resolve({ data: [], error: null }); } };
          }
        };
      }
    };

    const result = await syncUserData(adapter, poisoned, "user-1", () => {});

    // Both healthy rows synced despite the poisoned neighbour.
    expect(result.pushedProgress).toBe(2);
    expect(result.failedProgress).toBe(1);
    expect(result.pushError).toMatch(/foreign key/);

    const saved = await adapter.loadProgress();
    expect(saved["q-good-1"]?.synced).toBe(true);
    expect(saved["q-good-2"]?.synced).toBe(true);
    // The bad row stays dirty (would retry — or be quarantined once the
    // caller passes knownQuestionIds).
    expect(saved["q-poison"]?.synced).toBe(false);
  });
});
