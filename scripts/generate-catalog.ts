/**
 * Generates packages/content/src/catalog.ts — the lightweight exam index.
 *
 * Why this exists: every bundle file (upsc.ts, cfa-l3.ts, …) holds its exam
 * object in the SAME module as its questions and study notes, so importing an
 * exam's name drags in the whole 5.7 MB corpus. Four client components —
 * Onboarding (mounted in the root layout, i.e. on EVERY route), ExamCountdown,
 * Settings and Leaderboard — need nothing but the exam list, and were paying
 * 1.66 MB gzip for it on pages like /privacy.
 *
 * The catalog is generated rather than hand-written so it cannot drift, and
 * packages/content/test/catalog.test.ts re-derives it from the real bundle and
 * fails if this file is stale. Run `pnpm catalog:generate` after adding an exam.
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { exams, subjects, topics } from "../packages/content/src/index";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "../packages/content/src/catalog.ts");

/** The first topic of an exam's first subject — the onboarding taste session. */
function firstTopicPath(examId: string): string | null {
  const exam = exams.find((e) => e.id === examId);
  if (!exam) return null;
  const subject = subjects.filter((s) => s.examId === exam.id).sort(byOrder)[0];
  if (!subject) return null;
  const topic = topics.filter((t) => t.subjectId === subject.id).sort(byOrder)[0];
  if (!topic) return null;
  return `/${exam.slug}/${subject.slug}/${topic.slug}`;
}
const byOrder = (a: { orderIndex: number }, b: { orderIndex: number }) => a.orderIndex - b.orderIndex;

const ordered = [...exams].sort(byOrder);
const paths = Object.fromEntries(
  ordered.map((e) => [e.id, firstTopicPath(e.id)]).filter(([, p]) => p !== null)
);

const body = `// GENERATED FILE — do not edit by hand.
// Run \`pnpm catalog:generate\` to regenerate from the content bundle.
// packages/content/test/catalog.test.ts fails if this drifts.
//
// This module deliberately imports NOTHING from the exam bundles. Its whole
// purpose is to let UI that only needs exam names (the onboarding picker, the
// home countdown, the settings dropdown, the leaderboard filter) avoid pulling
// the 5.7 MB question corpus into the client bundle. Keep it dependency-free
// apart from the Exam type.
import type { Exam } from "@jyotir/core";

/** Every exam, ordered as the pickers display them. */
export const examCatalog: Exam[] = ${JSON.stringify(ordered, null, 2)};

/**
 * examId -> the path of that exam's very first topic, used as the onboarding
 * taste-session destination. Precomputed so resolving it needs no topic data.
 */
export const firstTopicPathByExam: Record<string, string> = ${JSON.stringify(paths, null, 2)};
`;

writeFileSync(OUT, body);
console.log(
  `wrote ${OUT}: ${ordered.length} exams, ${Object.keys(paths).length} taste-session paths`
);
