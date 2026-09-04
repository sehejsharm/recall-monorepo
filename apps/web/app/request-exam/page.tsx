"use client";

import Link from "next/link";
import { useState } from "react";
import { getSupabase } from "@/lib/supabase";

const SUGGESTIONS = ["CAT", "GMAT", "GRE", "Bank PO / IBPS", "CLAT", "NDA", "CA Foundation", "UGC NET"];

export default function RequestExamPage() {
  const supabase = getSupabase();
  const [examName, setExamName] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!examName.trim()) return;
    setStatus("sending");
    setError(null);
    if (!supabase) {
      window.location.href = `mailto:hello@recall.app?subject=${encodeURIComponent(
        "Exam request: " + examName
      )}&body=${encodeURIComponent(note)}`;
      setStatus("sent");
      return;
    }
    const { data } = await supabase.auth.getUser();
    const { error: err } = await supabase
      .from("exam_requests")
      .insert({ user_id: data.user?.id ?? null, exam_name: examName, note });
    if (err) {
      setError(err.message);
      setStatus("error");
    } else {
      setStatus("sent");
    }
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 pb-24 pt-12">
      <Link href="/settings" className="text-xs text-muted hover:text-ink">
        ← Settings
      </Link>
      <h1 className="mb-2 mt-3 text-2xl font-bold tracking-tight">Request an exam</h1>
      <p className="mb-6 text-sm text-muted">
        Which exam should we add next? The most-requested ones get built first.
      </p>

      {status === "sent" ? (
        <div className="rounded-2xl border border-correct/40 bg-correct-dim/30 px-5 py-6 text-sm text-correct-bright">
          Got it — <span className="font-semibold">{examName}</span> is on the list. Thank you.
        </div>
      ) : (
        <form onSubmit={submit} className="flex flex-col gap-3">
          <input
            required
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
            maxLength={120}
            placeholder="Exam name (e.g. CAT, GMAT)"
            className="rounded-xl border border-edge bg-surface px-4 py-3 text-sm outline-none focus:border-correct/50"
          />
          <div className="flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setExamName(s)}
                className="rounded-full border border-edge px-3 py-1 text-xs text-muted hover:border-correct/40 hover:text-ink"
              >
                {s}
              </button>
            ))}
          </div>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            maxLength={2000}
            placeholder="Anything specific (subjects, level)? Optional."
            rows={4}
            className="rounded-xl border border-edge bg-surface px-4 py-3 text-sm outline-none focus:border-correct/50"
          />
          {error && <p className="text-sm text-wrong-bright">{error}</p>}
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-xl bg-correct py-3.5 font-bold text-black active:scale-[0.98] disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Submit request"}
          </button>
        </form>
      )}
    </main>
  );
}
