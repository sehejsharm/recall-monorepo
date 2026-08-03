import { loadSettings } from "./settings";

/**
 * Client-side "Download your data" (GDPR portability / DPDP §13). Everything
 * is assembled from local storage in the browser — no server round-trip, so
 * it works with no account and no network, consistent with the app's
 * offline-first design.
 */
export interface ExportedData {
  format: "recall.export.v1";
  exportedAt: string;
  settings: Record<string, unknown>;
  /** SM-2 scheduling state per question. */
  progress: Record<string, unknown>;
  /** Study notes marked read. */
  reads: Record<string, unknown>;
  /** XP, level, streaks, achievements. */
  stats: Record<string, unknown> | null;
  /** Bookmarked question ids. */
  bookmarks: Record<string, unknown>;
}

function readJson(key: string): Record<string, unknown> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as Record<string, unknown>) : {};
  } catch {
    return {};
  }
}

/** Builds the export payload from local storage. */
export function buildExport(): ExportedData {
  const stats = readJson("recall.stats.v1");
  return {
    format: "recall.export.v1",
    exportedAt: new Date().toISOString(),
    // Settings include the display name the user typed; it's their own data,
    // and this file never leaves their device unless they share it.
    settings: loadSettings() as unknown as Record<string, unknown>,
    progress: readJson("recall.progress.v1"),
    reads: readJson("recall.reads.v1"),
    stats: Object.keys(stats).length > 0 ? stats : null,
    bookmarks: readJson("recall.bookmarks.v1")
  };
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
