"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useJyotir } from "@/lib/store-provider";
import { RecallMark } from "./icons";

/** App-shell routes that get the branded launch moment. Content routes
 *  (exam/subject/topic) are deliberately EXCLUDED: they're the SEO landing
 *  pages — a visitor arriving from search must see the server-rendered note
 *  on first paint, not a splash covering it for over a second. Those pages
 *  gate only their interactive parts (the drill) on hydration. */
const SPLASH_ROUTES = new Set(["/", "/review", "/stats"]);

/**
 * Branded loading screen shown on app launch until local data hydrates (and
 * for a short minimum so the brand moment registers), then fades out.
 */
export function Splash() {
  const pathname = usePathname();
  const ready = useJyotir((s) => s.ready);
  const [minElapsed, setMinElapsed] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMinElapsed(true), 750);
    return () => clearTimeout(t);
  }, []);

  const done = ready && minElapsed;
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setHidden(true), 340);
    return () => clearTimeout(t);
  }, [done]);

  if (!SPLASH_ROUTES.has(pathname)) return null;
  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-oled transition-opacity duration-300 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <RecallMark className="animate-pop-in h-20 w-20 text-4xl shadow-[0_0_40px_rgba(16,185,129,0.35)]" />
      <h1 className="mt-5 text-2xl font-bold tracking-tight">Recall</h1>
      <p className="mt-1 text-xs text-muted">Drill. Read. Repeat.</p>
      <div className="mt-7 h-1 w-24 overflow-hidden rounded-full bg-raised">
        <div className="animate-loading-bar h-full w-1/3 rounded-full bg-correct" />
      </div>
    </div>
  );
}
