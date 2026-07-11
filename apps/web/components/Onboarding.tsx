"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { repo } from "@/lib/content";
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

/** First-run steps after the name gate: pick your exam, set a target date,
 *  then a 5-card taste session — retention starts with retrieval, so the
 *  first run ends in DOING, not reading about doing. The classic tour is
 *  still reachable via "show me around". */
type Step = "exam" | "date" | "taste" | "tour";

/**
 * First-run flow. Step 0 is a MANDATORY name capture — the app cannot be used
 * without a name and this step has no skip. Then: exam picker → optional
 * exam date → taste session (or the skippable feature tour). Signing in
 * stays optional, so a broken/absent cloud backend never blocks entry.
 */
export function Onboarding() {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const [needName, setNeedName] = useState(false);
  const [step, setStep] = useState<Step | null>(null);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const s = loadSettings();
    setNeedName(!s.named);
    // Resume the first-run steps once a name exists; let the splash finish.
    if (s.named && !s.onboarded) {
      const t = setTimeout(() => setStep("exam"), 850);
      setReady(true);
      return () => clearTimeout(t);
    }
    setReady(true);
  }, []);

  // First-run flow only ever appears at the app's front door. A visitor
  // arriving from search on a content page (exam/subject/topic) must meet
  // the answer they searched for, never a name-capture modal — they get
  // onboarded when they come home.
  if (pathname !== "/") return null;

  if (!ready) return null;

  const finish = () => {
    saveSettings({ ...loadSettings(), onboarded: true });
    setStep(null);
  };

  /** The chosen exam's very first topic — the taste session destination. */
  const firstTopicPath = (examId: string): string | null => {
    const exam = repo.exams().find((e) => e.id === examId);
    if (!exam) return null;
    const subject = repo.subjectsByExam(exam.id)[0];
    if (!subject) return null;
    const topic = repo.topicsBySubject(subject.id)[0];
    if (!topic) return null;
    return `/${exam.slug}/${subject.slug}/${topic.slug}`;
  };

  // ── Mandatory name gate ────────────────────────────────────────────────
  if (needName) {
    const trimmed = name.trim();
    const valid = trimmed.length >= 2;
    const submit = () => {
      if (!valid) return;
      saveSettings({ ...loadSettings(), displayName: trimmed, named: true });
      setNeedName(false);
      setStep("exam"); // continue straight into the exam picker
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
            aria-label="Your name"
            autoFocus
            // autoFocus can be swallowed when the overlay mounts post-splash;
            // the callback ref re-asserts focus so typing works immediately.
            ref={(el) => el?.focus()}
            maxLength={24}
            className="mt-8 w-full max-w-sm rounded-2xl border border-edge bg-surface px-4 py-3.5 text-center text-base text-ink outline-none focus:border-correct/50"
          />
          <p className="mt-2 h-4 text-xs text-faint" aria-live="polite">
            {!valid && trimmed.length > 0 ? "Use at least 2 characters." : ""}
          </p>
        </div>
        <button
          onClick={submit}
          disabled={!valid}
          className="w-full rounded-2xl py-4 text-base font-bold transition-transform active:scale-[0.98] disabled:cursor-not-allowed enabled:bg-correct enabled:text-black disabled:bg-raised disabled:text-faint"
        >
          Continue
        </button>
      </div>
    );
  }

  if (step === null) return null;

  // ── Step: pick your exam ───────────────────────────────────────────────
  if (step === "exam") {
    return (
      <div className="fixed inset-0 z-[60] flex flex-col bg-oled px-6 pb-8 pt-16">
        <div className="flex min-h-0 flex-1 flex-col">
          <h2 className="text-2xl font-bold tracking-tight">Which exam are you preparing for?</h2>
          <p className="mt-2 text-sm text-muted">
            We&apos;ll feature it on your home screen. You can study any of the others too.
          </p>
          <div className="mt-6 flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto pb-4">
            {repo.exams().map((e) => (
              <button
                key={e.id}
                onClick={() => {
                  saveSettings({ ...loadSettings(), primaryExamId: e.id });
                  setStep("date");
                }}
                className="rounded-2xl border border-edge bg-surface px-4 py-3 text-left transition-colors hover:border-correct/40"
              >
                <span className="block text-sm font-semibold">{e.name}</span>
                <span className="mt-0.5 block truncate text-xs text-muted">{e.tagline}</span>
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => setStep("tour")}
          className="min-h-[44px] w-full text-sm font-semibold text-muted hover:text-ink"
        >
          Just exploring →
        </button>
      </div>
    );
  }

  // ── Step: target date (optional) ───────────────────────────────────────
  if (step === "date") {
    return (
      <div className="fixed inset-0 z-[60] flex flex-col bg-oled px-6 pb-8 pt-16">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-raised text-correct">
            <FlameIcon className="h-10 w-10" />
          </div>
          <h2 className="mt-7 text-2xl font-bold tracking-tight">When is your exam?</h2>
          <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
            We&apos;ll show a countdown on your home screen so every session counts toward the day
            that matters.
          </p>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-8 w-full max-w-sm rounded-2xl border border-edge bg-surface px-4 py-3.5 text-center text-base text-ink outline-none focus:border-correct/50"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <button
            onClick={() => {
              if (date) saveSettings({ ...loadSettings(), examDate: date });
              setStep("taste");
            }}
            disabled={!date}
            className="w-full rounded-2xl bg-correct py-4 text-base font-bold text-black transition-transform active:scale-[0.98] disabled:opacity-40"
          >
            Set my countdown
          </button>
          <button
            onClick={() => setStep("taste")}
            className="min-h-[44px] w-full text-sm font-semibold text-muted hover:text-ink"
          >
            Skip for now
          </button>
        </div>
      </div>
    );
  }

  // ── Step: 5-card taste session ─────────────────────────────────────────
  if (step === "taste") {
    const examId = loadSettings().primaryExamId;
    const path = examId ? firstTopicPath(examId) : null;
    return (
      <div className="fixed inset-0 z-[60] flex flex-col bg-oled px-6 pb-8 pt-16">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-raised text-correct">
            <BoltIcon className="h-10 w-10" />
          </div>
          <h2 className="mt-7 text-2xl font-bold tracking-tight">Feel it working — right now</h2>
          <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
            The fastest way to understand Recall is five quick questions. Answer, get graded,
            see why. Two minutes.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          {path && (
            <button
              onClick={() => {
                finish();
                router.push(`${path}?tab=drill&n=5`);
              }}
              className="w-full rounded-2xl bg-correct py-4 text-base font-bold text-black transition-transform active:scale-[0.98]"
            >
              Start with 5 quick cards →
            </button>
          )}
          <button
            onClick={() => setStep("tour")}
            className="min-h-[44px] w-full text-sm font-semibold text-muted hover:text-ink"
          >
            Show me around first
          </button>
        </div>
      </div>
    );
  }

  // ── Skippable feature tour ─────────────────────────────────────────────
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
