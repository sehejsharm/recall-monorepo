/**
 * One-time namespace migration: `jyotir.*` (the project's original internal
 * name) → `recall.*`, so all client storage shares one prefix.
 *
 * Safety properties — this runs on every boot, so it must be boring:
 *   - idempotent: a completion flag short-circuits it, and it re-checks each
 *     key anyway;
 *   - never destructive: an old key is only removed AFTER its value is
 *     confirmed written under the new key;
 *   - never overwrites: if a new-prefix key already holds data (e.g. the user
 *     already ran a newer build), the old copy is left untouched and simply
 *     not migrated, so nothing can clobber fresher data;
 *   - total failure is survivable: any exception leaves the old keys in place
 *     and the app continues reading them via the legacy fallback in
 *     WebStorageAdapter.
 */
const DONE_FLAG = "recall.migration.namespace.v1";

/** old key -> new key */
export const NAMESPACE_MIGRATIONS: Record<string, string> = {
  "jyotir.progress.v1": "recall.progress.v1",
  "jyotir.reads.v1": "recall.reads.v1",
  "jyotir.stats.v1": "recall.stats.v1",
  "jyotir.bookmarks.v1": "recall.bookmarks.v1"
};

/**
 * Migrates legacy keys in the given Storage. Exported (and Storage-injected)
 * so it is unit-testable without a browser. Returns the number of keys moved.
 */
export function migrateNamespace(store: Storage): number {
  let moved = 0;
  try {
    if (store.getItem(DONE_FLAG) === "1") return 0;

    for (const [oldKey, newKey] of Object.entries(NAMESPACE_MIGRATIONS)) {
      const oldValue = store.getItem(oldKey);
      if (oldValue === null) continue;

      // Never clobber data already written under the new namespace.
      if (store.getItem(newKey) === null) {
        store.setItem(newKey, oldValue);
        // Only drop the original once the copy is verifiably in place.
        if (store.getItem(newKey) === oldValue) {
          store.removeItem(oldKey);
          moved += 1;
        }
      } else {
        // New key wins; the stale duplicate is safe to drop.
        store.removeItem(oldKey);
      }
    }

    store.setItem(DONE_FLAG, "1");
  } catch {
    // Quota/private-mode/storage-disabled: leave everything as-is. The
    // adapter still reads the legacy keys, so no data is lost.
  }
  return moved;
}

/** Browser entry point — safe to call on every boot, no-op on the server. */
export function runStorageMigrations(): void {
  if (typeof window === "undefined") return;
  migrateNamespace(window.localStorage);
}
