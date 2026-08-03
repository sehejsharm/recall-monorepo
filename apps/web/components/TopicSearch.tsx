"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export interface SearchEntry {
  /** Topic name. */
  n: string;
  /** Subject name, shown as context. */
  s: string;
  /** Href to the topic page. */
  h: string;
}

/**
 * Client-side topic search for an exam. An exam can carry 100+ topics across
 * a dozen subjects, which is unbrowsable without search.
 *
 * The index is built on the server and passed in, so this stays a pure filter
 * over already-bundled content: no network, no API, works offline. Matching is
 * a simple case-insensitive substring over topic and subject names — enough
 * for v1, and predictable.
 */
export function TopicSearch({ entries, examName }: { entries: SearchEntry[]; examName: string }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (q.length < 2) return [];
    const matches = entries.filter(
      (e) => e.n.toLowerCase().includes(q) || e.s.toLowerCase().includes(q)
    );
    // Topics whose name starts with the query are the likeliest intent.
    matches.sort((a, b) => {
      const aStarts = a.n.toLowerCase().startsWith(q) ? 0 : 1;
      const bStarts = b.n.toLowerCase().startsWith(q) ? 0 : 1;
      return aStarts - bStarts || a.n.localeCompare(b.n);
    });
    return matches.slice(0, 25);
  }, [entries, q]);

  return (
    <search className="mb-5">
      <label htmlFor="topic-search" className="sr-only">
        Search {examName} topics
      </label>
      <input
        id="topic-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={`Search ${entries.length} topics…`}
        className="w-full rounded-xl border border-edge bg-surface px-4 py-3 text-sm outline-none focus:border-correct/50"
      />

      {q.length >= 2 && (
        <div aria-live="polite">
          {results.length === 0 ? (
            <p className="mt-3 px-1 text-sm text-muted">
              No topics match “{query.trim()}”.
            </p>
          ) : (
            <>
              <p className="mt-3 px-1 text-xs text-faint">
                {results.length} {results.length === 1 ? "topic" : "topics"}
              </p>
              <ul className="mt-1.5 flex flex-col gap-1.5">
                {results.map((r) => (
                  <li key={r.h}>
                    <Link
                      href={r.h}
                      className="flex items-center justify-between gap-3 rounded-xl border border-edge bg-surface px-4 py-3 transition-colors hover:border-correct/40"
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold">{r.n}</span>
                        <span className="mt-0.5 block truncate text-xs text-muted">{r.s}</span>
                      </span>
                      <span aria-hidden className="shrink-0 text-lg leading-none text-muted">
                        ›
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </search>
  );
}
