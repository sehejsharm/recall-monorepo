"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase";

const DISMISS_KEY = "recall.localOnlyBanner.dismissed.v1";

/**
 * Signed-out users' progress lives only in this browser's localStorage —
 * uninstalling the PWA, clearing site data or switching devices loses it.
 * That's an honest consequence of the no-account-required design, so we say
 * it once, inline and dismissibly.
 *
 * Deliberately NOT a modal: the whole product promise is that you can drill
 * without an account, and an interrupt would undercut it. Hidden entirely
 * when signed in, when cloud sync isn't configured (nothing to offer), or
 * once dismissed.
 */
export function LocalOnlyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) return; // no backend configured — no sign-in to offer
    try {
      if (window.localStorage.getItem(DISMISS_KEY) === "1") return;
    } catch {
      return;
    }
    let alive = true;
    void supabase.auth.getSession().then(({ data }) => {
      if (alive && !data.session) setVisible(true);
    });
    return () => {
      alive = false;
    };
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* storage unavailable — it just reappears next visit */
    }
  };

  return (
    <div className="mb-3 flex items-start gap-3 rounded-2xl border border-edge bg-surface px-4 py-3">
      <div className="min-w-0 flex-1">
        <p className="text-xs leading-relaxed text-muted">
          Your progress is saved on this device only — it&apos;s lost if you uninstall or clear site
          data.{" "}
          <Link href="/account" className="font-semibold text-correct underline">
            Sign in to back it up
          </Link>
          .
        </p>
      </div>
      <button
        onClick={dismiss}
        aria-label="Dismiss local storage notice"
        className="-m-2 shrink-0 p-2 text-sm leading-none text-faint hover:text-ink"
      >
        ✕
      </button>
    </div>
  );
}
