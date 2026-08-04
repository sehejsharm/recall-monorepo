import { loadSettings } from "./settings";
import { NAMESPACE_MIGRATIONS } from "./storage-migration";

/**
 * Client-side "Download your data" (GDPR portability / DPDP §13). Everything
 * is assembled from local storage in the browser — no server round-trip, so
 * it works with no account and no network, consistent with the app's
 * offline-first design.
 */
export interface ExportedData {
  format: "recall.export.v1";
  exportedAt: string;
  /** Device preferences, incl. display name and daily goal. */
  settings: Record<string, unknown>;
  /** SM-2 scheduling state per question. */
  progress: Record<string, unknown>;
  /** Study notes marked read. */
  reads: Record<string, unknown>;
  /** XP, level, streaks, achievements. Null only if never drilled. */
  stats: Record<string, unknown> | null;
  /** Bookmarked question ids. */
  bookmarks: Record<string, unknown>;
  /** Row counts, so a truncated or silently-empty export is self-evident. */
  counts: { progress: number; reads: number; bookmarks: number; settings: number };
}

/** New-namespace key for each exported domain. */
export const EXPORT_KEYS = {
  progress: "recall.progress.v1",
  reads: "recall.reads.v1",
  stats: "recall.stats.v1",
  bookmarks: "recall.bookmarks.v1"
} as const;

/** Reverse of NAMESPACE_MIGRATIONS: new key -> legacy key. */
const LEGACY_OF: Record<string, string> = Object.fromEntries(
  Object.entries(NAMESPACE_MIGRATIONS).map(([oldKey, newKey]) => [newKey, oldKey])
);

/**
 * Reads a domain, falling back to its legacy `jyotir.*` key.
 *
 * The fallback matters: the namespace migration is designed to survive
 * storage being unavailable, so a user can legitimately still be on legacy
 * keys. Without this, the app would show their progress while the export
 * silently returned `{}` — the worst kind of data-portability bug.
 */
function readDomain(store: Storage, key: string): Record<string, unknown> {
  for (const candidate of [key, LEGACY_OF[key]]) {
    if (!candidate) continue;
    try {
      const raw = store.getItem(candidate);
      if (!raw) continue;
      const parsed = JSON.parse(raw) as unknown;
      // Only object maps are valid here; anything else is corrupt, so fall
      // through to the legacy key rather than exporting garbage.
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return parsed as Record<string, unknown>;
      }
    } catch {
      /* corrupt JSON — try the legacy key */
    }
  }
  return {};
}

/**
 * Builds the export payload. `store` is injectable so this is unit-testable
 * without a browser; it defaults to localStorage.
 */
export function buildExport(store?: Storage): ExportedData {
  const s = store ?? (typeof window === "undefined" ? undefined : window.localStorage);
  if (!s) throw new Error("buildExport requires a Storage (no window available)");

  const settings = loadSettings() as unknown as Record<string, unknown>;
  const progress = readDomain(s, EXPORT_KEYS.progress);
  const reads = readDomain(s, EXPORT_KEYS.reads);
  const stats = readDomain(s, EXPORT_KEYS.stats);
  const bookmarks = readDomain(s, EXPORT_KEYS.bookmarks);

  return {
    format: "recall.export.v1",
    exportedAt: new Date().toISOString(),
    // Settings include the display name the user typed; it's their own data,
    // and this file never leaves their device unless they share it.
    settings,
    progress,
    reads,
    stats: Object.keys(stats).length > 0 ? stats : null,
    bookmarks,
    counts: {
      progress: Object.keys(progress).length,
      reads: Object.keys(reads).length,
      bookmarks: Object.keys(bookmarks).length,
      settings: Object.keys(settings).length
    }
  };
}

/**
 * Validates an export's shape — the re-import counterpart. Returns the list
 * of problems (empty means valid), so a future import path can reject a bad
 * file instead of corrupting local state.
 */
export function validateExport(value: unknown): string[] {
  const problems: string[] = [];
  if (!value || typeof value !== "object" || Array.isArray(value)) return ["not an object"];
  const d = value as Partial<ExportedData>;

  if (d.format !== "recall.export.v1") problems.push(`bad format: ${String(d.format)}`);
  if (typeof d.exportedAt !== "string" || Number.isNaN(Date.parse(d.exportedAt))) {
    problems.push("exportedAt is not an ISO timestamp");
  }

  const isMap = (v: unknown) => !!v && typeof v === "object" && !Array.isArray(v);
  for (const domain of ["settings", "progress", "reads", "bookmarks"] as const) {
    if (!isMap(d[domain])) problems.push(`${domain} missing or not an object`);
  }
  // stats is the one domain allowed to be null (user never drilled).
  if (d.stats !== null && !isMap(d.stats)) problems.push("stats must be an object or null");

  if (!isMap(d.counts)) {
    problems.push("counts missing");
  } else {
    const c = d.counts as ExportedData["counts"];
    const expect: [keyof ExportedData["counts"], Record<string, unknown> | undefined][] = [
      ["progress", d.progress],
      ["reads", d.reads],
      ["bookmarks", d.bookmarks],
      ["settings", d.settings]
    ];
    for (const [name, map] of expect) {
      if (typeof c[name] !== "number") problems.push(`counts.${name} is not a number`);
      else if (isMap(map) && c[name] !== Object.keys(map!).length) {
        problems.push(`counts.${name} (${c[name]}) disagrees with ${name} size`);
      }
    }
  }
  return problems;
}

/** Triggers a download of the export as a JSON file. Returns the filename. */
export function downloadExport(): string {
  const data = buildExport();
  const filename = `recall-data-${data.exportedAt.slice(0, 10)}.json`;
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  // Release the blob on the next tick so the download has definitely started.
  setTimeout(() => URL.revokeObjectURL(url), 0);
  return filename;
}
