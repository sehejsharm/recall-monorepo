"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { SupabaseLike } from "@jyotir/core";
import { getSupabase } from "@/lib/supabase";
import { useJyotirStore } from "@/lib/store-provider";

type Mode = "login" | "signup" | "magic";

/**
 * Page chrome. Declared at module scope — defining this inside AccountPage
 * created a brand-new component type on every render, so React remounted the
 * whole subtree (and reset the form inputs) on each keystroke.
 */
function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 pb-24 pt-14">
      <Link href="/" className="text-xs text-muted hover:text-ink">
        ← Home
      </Link>
      <h1 className="mb-8 mt-3 text-2xl font-bold tracking-tight">Account</h1>
      {children}
    </main>
  );
}

export default function AccountPage() {
  const supabase = getSupabase();
  const store = useJyotirStore();
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) return;
    void supabase.auth.getUser().then(({ data }) => setUserEmail(data.user?.email ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) =>
      setUserEmail(session?.user.email ?? null)
    );
    return () => sub.subscription.unsubscribe();
  }, [supabase]);

  if (!supabase) {
    return (
      <Shell>
        <div className="rounded-2xl border border-edge bg-surface px-5 py-6">
          <p className="text-sm font-semibold">Cloud sync isn&apos;t configured</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Your progress is saved locally on this device. To enable accounts, cross-device sync
            and leaderboards, add your Supabase keys (see <code className="text-correct-bright">SUPABASE.md</code>).
          </p>
        </div>
      </Shell>
    );
  }

  if (userEmail) {
    return (
      <Shell>
        <div className="rounded-2xl border border-edge bg-surface px-5 py-6">
          <p className="text-xs text-muted">Signed in as</p>
          <p className="mt-1 font-semibold">{userEmail}</p>
          <p className="mt-2 text-xs text-correct">Progress and ranks sync across your devices.</p>
        </div>
        <div className="mt-3 flex flex-col gap-2.5">
          <button
            onClick={async () => {
              setNotice("Syncing…");
              try {
                const { data } = await supabase.auth.getUser();
                if (data.user) {
                  const r = await store
                    .getState()
                    .syncNow(supabase as unknown as SupabaseLike, data.user.id);
                  setNotice(`Synced · pushed ${r.pushedProgress}, pulled ${r.pulledProgress}`);
                }
              } catch (e) {
                setNotice(`Sync failed: ${(e as Error).message}`);
              }
            }}
            className="rounded-xl bg-ink py-3.5 font-bold text-black active:scale-[0.98]"
          >
            Sync now
          </button>
          <button
            onClick={() => void supabase.auth.signOut()}
            className="rounded-xl border border-edge py-3.5 font-semibold text-muted hover:text-ink"
          >
            Sign out
          </button>
        </div>
        {notice && <p className="mt-3 text-center text-xs text-muted">{notice}</p>}
      </Shell>
    );
  }

  /** Turn raw Supabase auth errors into something a user can act on. */
  const friendlyError = (message: string): string => {
    const m = message.toLowerCase();
    if (m.includes("invalid login credentials")) return "Wrong email or password.";
    if (m.includes("email not confirmed"))
      return "Please confirm your email first — check your inbox for the confirmation link.";
    if (m.includes("already registered") || m.includes("already been registered"))
      return "That email already has an account. Try logging in instead.";
    if (m.includes("email logins are disabled") || m.includes("signups not allowed"))
      return "Email sign-in isn't enabled for this app yet. You can keep using Recall without an account.";
    if (m.includes("network") || m.includes("fetch") || m.includes("failed to fetch"))
      return "Network error — check your connection and try again.";
    return message;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();
    setError(null);
    setNotice(null);

    if (!cleanEmail.includes("@") || cleanEmail.length < 5) {
      setError("Enter a valid email address.");
      return;
    }
    if (mode !== "magic" && cleanPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setBusy(true);
    try {
      if (mode === "magic") {
        const { error: err } = await supabase.auth.signInWithOtp({
          email: cleanEmail,
          options: { emailRedirectTo: `${window.location.origin}/account` }
        });
        if (err) throw err;
        setNotice(`Check ${cleanEmail} for your sign-in link.`);
      } else if (mode === "signup") {
        const { data, error: err } = await supabase.auth.signUp({
          email: cleanEmail,
          password: cleanPassword
        });
        if (err) throw err;
        if (!data.session)
          setNotice(`Almost there — check ${cleanEmail} to confirm your account, then log in.`);
      } else {
        const { error: err } = await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password: cleanPassword
        });
        if (err) throw err;
      }
    } catch (e) {
      setError(friendlyError((e as Error).message));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Shell>
      <div className="mb-5 grid grid-cols-2 rounded-xl border border-edge bg-surface p-1">
        <button
          onClick={() => setMode("login")}
          className={`rounded-lg py-2 text-sm font-semibold transition-colors ${
            mode === "login" ? "bg-raised text-ink" : "text-muted"
          }`}
        >
          Log in
        </button>
        <button
          onClick={() => setMode("signup")}
          className={`rounded-lg py-2 text-sm font-semibold transition-colors ${
            mode === "signup" ? "bg-raised text-ink" : "text-muted"
          }`}
        >
          Sign up
        </button>
      </div>

      <form onSubmit={submit} className="flex flex-col gap-2.5">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          className="rounded-xl border border-edge bg-surface px-4 py-3 text-sm outline-none focus:border-correct/50"
        />
        {mode !== "magic" && (
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password (6+ characters)"
            autoComplete={mode === "signup" ? "new-password" : "current-password"}
            className="rounded-xl border border-edge bg-surface px-4 py-3 text-sm outline-none focus:border-correct/50"
          />
        )}
        <button
          type="submit"
          disabled={busy}
          className="mt-1 rounded-xl bg-correct py-3.5 font-bold text-black active:scale-[0.98] disabled:opacity-60"
        >
          {busy ? "…" : mode === "signup" ? "Create account" : mode === "magic" ? "Send magic link" : "Log in"}
        </button>
      </form>

      <button
        onClick={() => setMode((m) => (m === "magic" ? "login" : "magic"))}
        className="mt-4 text-center text-xs text-muted hover:text-ink"
      >
        {mode === "magic" ? "Use email + password instead" : "Or sign in with a magic link (no password)"}
      </button>

      {notice && <p className="mt-4 rounded-xl border border-correct/40 bg-correct-dim/30 px-4 py-3 text-sm text-correct-bright">{notice}</p>}
      {error && <p className="mt-4 text-sm text-wrong-bright">{error}</p>}
    </Shell>
  );
}
