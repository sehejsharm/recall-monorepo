import { beforeEach, describe, expect, it } from "vitest";
import { migrateNamespace } from "@/lib/storage-migration";

/** Minimal in-memory Storage double. */
function makeStore(seed: Record<string, string> = {}): Storage {
  const map = new Map(Object.entries(seed));
  return {
    get length() {
      return map.size;
    },
    clear: () => map.clear(),
    getItem: (k: string) => (map.has(k) ? map.get(k)! : null),
    key: (i: number) => [...map.keys()][i] ?? null,
    removeItem: (k: string) => void map.delete(k),
    setItem: (k: string, v: string) => void map.set(k, v)
  } as Storage;
}

describe("jyotir.* -> recall.* namespace migration", () => {
  let store: Storage;

  beforeEach(() => {
    store = makeStore({
      "jyotir.progress.v1": '{"q1":{"questionId":"q1"}}',
      "jyotir.stats.v1": '{"xp":420}'
    });
  });

  it("moves legacy keys to the new namespace and removes the originals", () => {
    const moved = migrateNamespace(store);
    expect(moved).toBe(2);
    expect(store.getItem("recall.progress.v1")).toBe('{"q1":{"questionId":"q1"}}');
    expect(store.getItem("recall.stats.v1")).toBe('{"xp":420}');
    expect(store.getItem("jyotir.progress.v1")).toBeNull();
    expect(store.getItem("jyotir.stats.v1")).toBeNull();
  });

  it("is idempotent — running it repeatedly changes nothing", () => {
    expect(migrateNamespace(store)).toBe(2);
    expect(migrateNamespace(store)).toBe(0);
    expect(migrateNamespace(store)).toBe(0);
    expect(store.getItem("recall.progress.v1")).toBe('{"q1":{"questionId":"q1"}}');
  });

  it("never overwrites newer data already under the new namespace", () => {
    const s = makeStore({
      "jyotir.stats.v1": '{"xp":1}',
      "recall.stats.v1": '{"xp":999}'
    });
    migrateNamespace(s);
    // The newer value wins and the stale duplicate is dropped.
    expect(s.getItem("recall.stats.v1")).toBe('{"xp":999}');
    expect(s.getItem("jyotir.stats.v1")).toBeNull();
  });

  it("is a no-op for a fresh install with no legacy keys", () => {
    const s = makeStore();
    expect(migrateNamespace(s)).toBe(0);
    expect(s.getItem("recall.progress.v1")).toBeNull();
  });

  it("never loses data if the write half fails", () => {
    // Storage that silently refuses writes (quota / private mode).
    const backing = makeStore({ "jyotir.stats.v1": '{"xp":7}' });
    const readOnly = {
      ...backing,
      getItem: (k: string) => backing.getItem(k),
      setItem: () => {
        /* silently dropped */
      },
      removeItem: (k: string) => backing.removeItem(k)
    } as unknown as Storage;

    migrateNamespace(readOnly);
    // The copy never landed, so the original must still be there.
    expect(backing.getItem("jyotir.stats.v1")).toBe('{"xp":7}');
  });
});
