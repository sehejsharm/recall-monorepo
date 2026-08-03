import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { repo } from "@/lib/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TopicSearch, type SearchEntry } from "@/components/TopicSearch";

export function generateStaticParams() {
  return repo.exams().map((e) => ({ exam: e.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ exam: string }>;
}): Promise<Metadata> {
  const { exam: examSlug } = await params;
  const exam = repo.examBySlug(examSlug);
  if (!exam) return {};
  const subjects = repo.subjectsByExam(exam.id);
  const topicCount = repo.topicsByExam(exam.id).length;
  const questionCount = repo.questionsByExam(exam.id).length;
  const title = `${exam.name} preparation — free notes & MCQ practice`;
  const description = `Study ${exam.name} with ${topicCount} high-yield topics, ${questionCount} practice questions and 2-minute notes across ${subjects.length} subjects. ${exam.tagline}`;
  return {
    title,
    description,
    alternates: { canonical: `/${exam.slug}` },
    openGraph: { title: `${title} · Recall`, description, url: `/${exam.slug}` },
    twitter: { title: `${title} · Recall`, description }
  };
}

export default async function SubjectsPage({
  params
}: {
  params: Promise<{ exam: string }>;
}) {
  const { exam: examSlug } = await params;
  const exam = repo.examBySlug(examSlug);
  if (!exam) notFound();
  const subjects = repo.subjectsByExam(exam.id);
  const topicCount = repo.topicsByExam(exam.id).length;
  const questionCount = repo.questionsByExam(exam.id).length;
  const searchIndex: SearchEntry[] = subjects.flatMap((subject) =>
    repo.topicsBySubject(subject.id).map((topic) => ({
      n: topic.name,
      s: subject.name,
      h: `/${exam.slug}/${subject.slug}/${topic.slug}`
    }))
  );

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 py-14">
      <header className="mb-8">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: exam.name, href: `/${exam.slug}` }]} />
        <h1 className="mt-3 text-2xl font-bold tracking-tight">{exam.name}</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Prepare for {exam.name} with free, high-yield study notes and{" "}
          <strong className="text-ink">{questionCount.toLocaleString()}</strong> practice questions
          across <strong className="text-ink">{subjects.length}</strong> subjects and {topicCount}{" "}
          topics. {exam.tagline}. Read a 2-minute note, then drill its questions with spaced
          repetition — works fully offline, no sign-up required.
        </p>
      </header>

      {/* Built server-side from bundled content, so search is a pure local
          filter — no API, fully offline. */}
      <TopicSearch examName={exam.name} entries={searchIndex} />

      <ul className="flex flex-col gap-2.5">
        {subjects.map((subject) => {
          const topicCount = repo.topicsBySubject(subject.id).length;
          return (
            <li key={subject.id}>
              <Link
                href={`/${exam.slug}/${subject.slug}`}
                className="flex items-center justify-between gap-3 rounded-2xl border border-edge bg-surface px-5 py-4 transition-colors hover:border-correct/40 active:bg-raised"
              >
                <span className="min-w-0 flex-1 font-semibold">{subject.name}</span>
                <span className="shrink-0 text-xs text-muted">
                  {topicCount} {topicCount === 1 ? "topic" : "topics"}
                </span>
                <span aria-hidden className="shrink-0 text-lg leading-none text-muted">
                  ›
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
