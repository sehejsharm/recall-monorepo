"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { topicCounts, type StudyMaterial } from "@jyotir/core";
import { repo } from "@/lib/content";
import { useJyotir } from "@/lib/store-provider";

/**
 * The micro-note reader. Markdown only — no PDFs, ever. Ends in the
 * product's signature move: a giant sticky "Drill This Topic Now (X Cards
 * Due)" button that flips straight into the drill engine.
 */
export function StudyReader({
  material,
  onDrill
}: {
  material: StudyMaterial;
  onDrill: () => void;
}) {
  // Select the stable `progress` reference and derive counts in render —
  // never return a fresh object from a Zustand selector (infinite loop).
  const progress = useJyotir((s) => s.progress);
  const counts = topicCounts(repo.questionsByTopic(material.topicId), progress);
  const isRead = useJyotir((s) => Boolean(s.reads[material.id]));
  const markRead = useJyotir((s) => s.markRead);

  const pending = counts.due + counts.fresh;
  const ctaLabel =
    pending > 0
      ? `Drill This Topic Now (${pending} ${pending === 1 ? "Card" : "Cards"} Due)`
      : "Drill This Topic Now (All Caught Up)";

  const handleDrill = () => {
    if (!isRead) markRead(material.id);
    onDrill();
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-4 flex items-center justify-between text-xs text-muted">
        <span>
          {material.title} · {material.estimatedReadTime} min read
        </span>
        {isRead ? (
          <span className="font-semibold text-correct">read ✓</span>
        ) : (
          <button
            onClick={() => markRead(material.id)}
            className="-my-3 -mr-2 flex min-h-[44px] items-center px-2 hover:text-ink"
          >
            mark as read
          </button>
        )}
      </div>

      <article className="flex-1 pb-28">
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: (props) => (
              <h2 className="mb-3 mt-7 text-lg font-bold tracking-tight first:mt-0" {...props} />
            ),
            h3: (props) => <h3 className="mb-2 mt-5 font-bold" {...props} />,
            p: (props) => <p className="mb-4 text-[15px] leading-relaxed text-ink/90" {...props} />,
            strong: (props) => <strong className="font-bold text-correct-bright" {...props} />,
            ul: (props) => <ul className="mb-4 ml-5 list-disc space-y-1.5 text-[15px] leading-relaxed text-ink/90" {...props} />,
            ol: (props) => <ol className="mb-4 ml-5 list-decimal space-y-1.5 text-[15px] leading-relaxed text-ink/90" {...props} />,
            table: (props) => (
              <div className="mb-4 overflow-x-auto rounded-xl border border-edge">
                <table className="w-full border-collapse text-sm" {...props} />
              </div>
            ),
            thead: (props) => <thead className="bg-raised text-left" {...props} />,
            th: (props) => <th className="border-b border-edge px-3 py-2 font-bold" {...props} />,
            td: (props) => <td className="border-b border-edge/50 px-3 py-2 text-ink/90" {...props} />,
            code: (props) => (
              <code className="rounded bg-raised px-1.5 py-0.5 font-mono text-[13px] text-correct-bright" {...props} />
            ),
            blockquote: (props) => (
              <blockquote className="mb-4 border-l-2 border-correct pl-3 text-sm text-muted" {...props} />
            )
          }}
        >
          {material.content}
        </Markdown>
      </article>

      {/* The "Read to Drill" CTA — sticky, giant, impossible to miss.
          Sticky (not fixed): it stays inside the card's own scroll container,
          so it never slides under the global bottom nav and never stacks on
          top of a neighbouring card's CTA in the swipe deck. */}
      <div className="sticky bottom-0 bg-gradient-to-t from-oled via-oled/95 to-transparent pb-2 pt-8">
        <button
          onClick={handleDrill}
          className="mx-auto block w-full max-w-xl rounded-2xl bg-correct py-4 text-base font-bold text-black shadow-[0_0_32px_rgba(16,185,129,0.25)] transition-transform active:scale-[0.98]"
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
