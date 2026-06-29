import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { repo } from "@/lib/content";

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

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 py-14">
      <header className="mb-8">
        <Link href="/" className="text-xs text-muted hover:text-ink">
          ← All exams
        </Link>
        <h1 className="mt-3 text-2xl font-bold tracking-tight">{exam.name}</h1>
      </header>

      <ul className="flex flex-col gap-2.5">
        {subjects.map((subject) => {
          const topicCount = repo.topicsBySubject(subject.id).length;
          return (
            <li key={subject.id}>
              <Link
                href={`/${exam.slug}/${subject.slug}`}
                className="flex items-baseline justify-between rounded-2xl border border-edge bg-surface px-5 py-4 transition-colors hover:border-correct/40 active:bg-raised"
              >
                <span className="font-semibold">{subject.name}</span>
                <span className="text-xs text-muted">
                  {topicCount} {topicCount === 1 ? "topic" : "topics"}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
