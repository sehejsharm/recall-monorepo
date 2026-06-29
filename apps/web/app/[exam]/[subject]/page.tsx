import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { repo } from "@/lib/content";
import { TopicList } from "@/components/TopicList";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return repo.exams().flatMap((e) =>
    repo.subjectsByExam(e.id).map((s) => ({ exam: e.slug, subject: s.slug }))
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ exam: string; subject: string }>;
}): Promise<Metadata> {
  const { exam: examSlug, subject: subjectSlug } = await params;
  const exam = repo.examBySlug(examSlug);
  const subject = exam ? repo.subjectBySlug(exam.id, subjectSlug) : undefined;
  if (!exam || !subject) return {};
  const topics = repo.topicsBySubject(subject.id);
  const title = `${subject.name} — ${exam.name} notes & MCQs`;
  const description = `Master ${subject.name} for ${exam.name}: ${topics.length} topics with concise notes and practice questions. Drill with spaced repetition, free and offline.`;
  return {
    title,
    description,
    alternates: { canonical: `/${exam.slug}/${subject.slug}` },
    openGraph: { title: `${title} · Recall`, description, url: `/${exam.slug}/${subject.slug}` },
    twitter: { title: `${title} · Recall`, description }
  };
}

export default async function TopicsPage({
  params
}: {
  params: Promise<{ exam: string; subject: string }>;
}) {
  const { exam: examSlug, subject: subjectSlug } = await params;
  const exam = repo.examBySlug(examSlug);
  if (!exam) notFound();
  const subject = repo.subjectBySlug(exam.id, subjectSlug);
  if (!subject) notFound();

  return (
    <>
      <Breadcrumbs
        visible={false}
        items={[
          { name: "Home", href: "/" },
          { name: exam.name, href: `/${exam.slug}` },
          { name: subject.name, href: `/${exam.slug}/${subject.slug}` }
        ]}
      />
      <TopicList examSlug={exam.slug} examName={exam.name} subjectId={subject.id} subjectName={subject.name} subjectSlug={subject.slug} />
    </>
  );
}
