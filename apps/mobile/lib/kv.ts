import * as SQLite from "expo-sqlite";

/**
 * Minimal synchronous key/value store backed by expo-sqlite. Used for
 * device settings and the Supabase auth-session blob, so we avoid pulling
 * in a second native storage module (AsyncStorage/SecureStore).
 */
const db = SQLite.openDatabaseSync("recall-kv.db");
db.execSync(`CREATE TABLE IF NOT EXISTS kv (k TEXT PRIMARY KEY, v TEXT NOT NULL);`);

export const kv = {
  get(key: string): string | null {
    const row = db.getFirstSync<{ v: string }>("SELECT v FROM kv WHERE k = ?", [key]);
    return row?.v ?? null;
  },
  set(key: string, value: string): void {
    db.runSync("INSERT INTO kv (k, v) VALUES (?, ?) ON CONFLICT(k) DO UPDATE SET v = excluded.v", [
      key,
      value
    ]);
  },
  remove(key: string): void {
    db.runSync("DELETE FROM kv WHERE k = ?", [key]);
  }
};

/** Promise-based shape Supabase's auth storage expects. */
export const kvAsyncStorage = {
  getItem: async (k: string) => kv.get(k),
  setItem: async (k: string, v: string) => kv.set(k, v),
  removeItem: async (k: string) => kv.remove(k)
};
