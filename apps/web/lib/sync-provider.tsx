"use client";

import { useEffect, type ReactNode } from "react";
import type { SupabaseLike } from "@jyotir/core";
import { getSupabase } from "./supabase";
import { pushStats } from "./leaderboard";
import { useJyotirStore } from "./store-provider";

/**
 * Background progress sync. When Supabase is configured and a user is
 * signed in, pushes local SM-2 progress + read history and merges remote
 * changes (last-write-wins) on:
 *   - initial load / sign-in
 *   - the tab regaining focus
 *   - the network coming back online
 *
 * A complete no-op when Supabase is unconfigured or no session exists, so
 * the offline-first experience is never blocked on the network.
 */
export function SyncProvider({ children }: { children: ReactNode }) {
  const store = useJyotirStore();

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) return;

    let userId: string | null = null;
    let inFlight = false;

    const sync = async () => {
      if (!userId || inFlight) return;
      inFlight = true;
      // Progress sync and the leaderboard stats push are independent:
      // a failure in one must never silently starve the other (a failing
      // progress push used to keep signed-in users off the leaderboard).
      try {
        await store.getState().syncNow(supabase as unknown as SupabaseLike, userId);
      } catch (err) {
        console.error("[recall] progress sync failed:", err);
      }
      try {
        await pushStats(supabase, userId, store.getState().stats);
      } catch (err) {
        console.error("[recall] leaderboard stats push failed:", err);
      }
      inFlight = false;
    };

    void supabase.auth.getSession().then(({ data }) => {
      userId = data.session?.user.id ?? null;
      void sync();
    });

    const { data: authSub } = supabase.auth.onAuthStateChange((_event, session) => {
      userId = session?.user.id ?? null;
      void sync();
    });

    const onVisible = () => {
      if (document.visibilityState === "visible") void sync();
    };
    const onOnline = () => void sync();

    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("online", onOnline);

    return () => {
      authSub.subscription.unsubscribe();
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("online", onOnline);
    };
  }, [store]);

  return <>{children}</>;
}
