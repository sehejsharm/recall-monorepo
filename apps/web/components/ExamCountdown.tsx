"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { examCatalog } from "@jyotir/content/catalog";
import { loadSettings, type Settings } from "@/lib/settings";

/**
 * Home-screen urgency strip: "GATE in 47 days" plus a one-tap continue link
 * for the user's chosen exam. Settings load in an effect (never at render —
 * localStorage reads at render caused hydration mismatches before), so the
 * server renders nothing and the strip pops in post-hydration.
 */
export function ExamCountdown() {
  const [settings, setSettings] = useState<Settings | null>(null);
  useEffect(() => setSettings(loadSettings()), []);

  if (!settings?.primaryExamId) return null;
  const exam = examCatalog.find((e) => e.id === settings.primaryExamId);
  if (!exam) return null;

  let days: number | null = null;
  if (settings.examDate) {
    const target = new Date(`${settings.examDate}T00:00:00`);
    days = Math.ceil((target.getTime() - Date.now()) / 86_400_000);
  }

  return (
    <Link
      href={`/${exam.slug}`}
      className="mb-3 flex items-center justify-between rounded-2xl border border-edge bg-surface px-5 py-3.5 transition-colors hover:border-correct/40"
    >
      <span className="min-w-0">
        <span className="block truncate text-sm font-bold">
          {days !== null && days >= 0 ? (
            days === 0 ? (
              <>{exam.name} is today — you&apos;ve got this.</>
            ) : (
              <>
                {exam.name} in <span className="text-correct">{days}</span> day{days === 1 ? "" : "s"}
              </>
            )
          ) : (
            <>Continue {exam.name}</>
          )}
        </span>
        <span className="mt-0.5 block text-xs text-muted">
          {days !== null && days > 0 ? "Every card you clear today compounds." : "Pick up where you left off."}
        </span>
      </span>
      <span aria-hidden className="shrink-0 text-lg text-muted">
        ›
      </span>
    </Link>
  );
}
