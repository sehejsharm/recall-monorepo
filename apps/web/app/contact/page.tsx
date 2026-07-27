"use client";

import Link from "next/link";
import { useState } from "react";
import { getSupabase } from "@/lib/supabase";
import { SUPPORT_EMAIL } from "@/lib/site-config";

export default function ContactPage() {
  const supabase = getSupabase();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setStatus("sending");
    setError(null);
    if (!supabase) {
      // No backend configured — fall back to the user's mail client.
      window.location.href = `mailto:${SUPPORT_EMAIL}?subject=Recall%20feedback&body=${encodeURIComponent(
        message
      )}`;
      setStatus("sent");
      return;
    }
    const { data } = await supabase.auth.getUser();
    try {
      const { error: err } = await supabase
        .from("contact_messages")
        .insert({ user_id: data.user?.id ?? null, email: email || data.user?.email || null, message });
      if (err) throw err;
      setStatus("sent");
    } catch {
      // Never show a raw backend error; offer the email fallback instead.
      setError(`Couldn't send just now — please email ${SUPPORT_EMAIL} directly.`);
      setStatus("error");
    }
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 pb-24 pt-12">
      <Link href="/settings" className="text-xs text-muted hover:text-ink">
        ← Settings
      </Link>
      <h1 className="mb-2 mt-3 text-2xl font-bold tracking-tight">Contact us</h1>
      <p className="mb-6 text-sm text-muted">
        Found a bug, a wrong answer, or have an idea? Tell us. You can also email{" "}
        <span className="text-correct">{SUPPORT_EMAIL}</span>.
      </p>

      {status === "sent" ? (
        <div className="rounded-2xl border border-correct/40 bg-correct-dim/30 px-5 py-6 text-sm text-correct-bright">
          Thanks — your message is on its way. We read every one.
        </div>
      ) : (
        <form onSubmit={submit} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email (optional)"
            className="rounded-xl border border-edge bg-surface px-4 py-3 text-sm outline-none focus:border-correct/50"
          />
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What's on your mind?"
            rows={6}
            className="rounded-xl border border-edge bg-surface px-4 py-3 text-sm outline-none focus:border-correct/50"
          />
          {error && <p className="text-sm text-wrong-bright">{error}</p>}
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-xl bg-correct py-3.5 font-bold text-black active:scale-[0.98] disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
        </form>
      )}
    </main>
  );
}
