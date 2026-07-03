"use client";

import { useEffect, useState } from "react";
import { loadSettings, saveSettings } from "@/lib/settings";
import { BoltIcon, FlameIcon, RecallMark, TrophyIcon, UsersIcon } from "./icons";

interface Slide {
  Icon: (p: { className?: string }) => React.ReactNode;
  title: string;
  body: string;
}

const SLIDES: Slide[] = [
  {
    Icon: ({ className }) => <RecallMark className={className} />,
    title: "Welcome to Recall",
    body: "Master tough exams by active recall — short notes, then rapid-fire questions. No feeds, no fluff."
  },
  {
    Icon: BoltIcon,
    title: "The drill loop",
    body: "See a question, pick the answer you think is right, and the app grades it instantly. At the end you review every question and the correct answers."
  },
  {
    Icon: FlameIcon,
    title: "Spaced repetition + streaks",
    body: "We schedule each card with the SM-2 algorithm so you review exactly when you're about to forget. Drill daily to build your streak."
  },
  {
    Icon: TrophyIcon,
    title: "Earn XP and level up",
    body: "Every card earns XP, combos give bonuses, and achievements await. Climb from Novice to Legend."
  },
  {
    Icon: UsersIcon,
    title: "Compete on the ranks",
    body: "Sign in from Account (optional) to climb the anonymized leaderboards. Your real name stays private."
  }
];

/**
 * First-run flow. Step 0 is a MANDATORY name capture — the app cannot be used
 * without a name and this step has no skip. After that comes the skippable
 * feature tour. Signing in stays optional, so a broken/absent cloud backend
 * never blocks entry.
 */
export function Onboarding() {
  const [ready, setReady] = useState(false);
  const [needName, setNeedName] = useState(false);
  const [showTour, setShowTour] = useState(false);
  const [name, setName] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const s = loadSettings();
    setNeedName(!s.named);
    // Only show the tour once a name exists; let the splash finish first.
    if (s.named && !s.onboarded) {
      const t = setTimeout(() => setShowTour(true), 850);
      setReady(true);
      return () => clearTimeout(t);
    }
    setReady(true);
  }, []);

  if (!ready) return null;

  // ── Mandatory name gate ────────────────────────────────────────────────
  if (needName) {
    const trimmed = name.trim();
    const valid = trimmed.length >= 2;
    const submit = () => {
      if (!valid) return;
      saveSettings({ ...loadSettings(), displayName: trimmed, named: true });
      setNeedName(false);
      setShowTour(true); // continue straight into the tour
    };
    return (
      <div className="fixed inset-0 z-[60] flex flex-col bg-oled px-6 pb-8 pt-16">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-raised text-correct">
            <UsersIcon className="h-10 w-10" />
          </div>
          <h2 className="mt-7 text-2xl font-bold tracking-tight">What should we call you?</h2>
          <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
            Enter your name to get started. This stays on your device — your public
            leaderboard identity is always anonymized.
          </p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="Your name"
            autoFocus
            maxLength={24}
            className="mt-8 w-full max-w-sm rounded-2xl border border-edge bg-surface px-4 py-3.5 text-center text-base text-ink outline-none focus:border-correct/50"
          />
        </div>
        <button
          onClick={submit}
          disabled={!valid}
          className="w-full rounded-2xl bg-correct py-4 text-base font-bold text-black transition-transform active:scale-[0.98] disabled:opacity-40"
        >
          Continue
        </button>
      </div>
    );
  }

  // ── Skippable feature tour ─────────────────────────────────────────────
  if (!showTour) return null;

  const finish = () => {
    saveSettings({ ...loadSettings(), onboarded: true });
    setShowTour(false);
  };

  const slide = SLIDES[i]!;
  const last = i === SLIDES.length - 1;
  const Icon = slide.Icon;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-oled px-6 pb-8 pt-16">
      <button onClick={finish} className="absolute right-5 top-6 text-xs font-semibold text-faint hover:text-ink">
        Skip
      </button>

      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div key={i} className="animate-pop-in">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-raised text-correct">
            <Icon className="h-10 w-10" />
          </div>
          <h2 className="mt-7 text-2xl font-bold tracking-tight">{slide.title}</h2>
          <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-muted">{slide.body}</p>
        </div>
      </div>

      <div className="mb-6 flex justify-center gap-1.5">
        {SLIDES.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-5 bg-correct" : "w-1.5 bg-edge"}`}
          />
        ))}
      </div>

      <button
        onClick={() => (last ? finish() : setI((n) => n + 1))}
        className="w-full rounded-2xl bg-correct py-4 text-base font-bold text-black active:scale-[0.98]"
      >
        {last ? "Start drilling" : "Next"}
      </button>
    </div>
  );
}
