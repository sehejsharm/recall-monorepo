import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { repo } from "@/lib/content";
import { TopicShell } from "@/components/TopicShell";

export function generateStaticParams() {
  return repo.exams().flatMap((e) =>
    repo.subjectsByExam(e.id).flatMap((s) =>
      repo.topicsBySubject(s.id).map((t) => ({
        exam: e.slug,
        subject: s.slug,
        topic: t.slug
      }))
    )
  );
}

/** Strip Markdown to a clean ~155-char meta description. */
function excerpt(markdown: string, max = 155): string {
  const plain = markdown
    .replace(/[#*_`>|]/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  return plain.length > max ? `${plain.slice(0, max - 1).trimEnd()}…` : plain;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ exam: string; subject: string; topic: string }>;
}): Promise<Metadata> {
  const { exam: examSlug, subject: subjectSlug, topic: topicSlug } = await params;
  const exam = repo.examBySlug(examSlug);
  const subject = exam ? repo.subjectBySlug(exam.id, subjectSlug) : undefined;
  const topic = subject ? repo.topicBySlug(subject.id, topicSlug) : undefined;
  if (!exam || !subject || !topic) return {};
  const material = repo.materialByTopic(topic.id);
  const qCount = repo.questionsByTopic(topic.id).length;
  const title = `${topic.name} — ${exam.name} (${subject.name})`;
  const description = material
    ? excerpt(material.content)
    : `${topic.name} notes and ${qCount} practice MCQs for ${exam.name}.`;
  const url = `/${exam.slug}/${subject.slug}/${topic.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} · Recall`, description, url, type: "article" },
    twitter: { title: `${title} · Recall`, description }
  };
}

export default async function TopicPage({
  params
}: {
  params: Promise<{ exam: string; subject: string; topic: string }>;
}) {
  const { exam: examSlug, subject: subjectSlug, topic: topicSlug } = await params;
  const exam = repo.examBySlug(examSlug);
  if (!exam) notFound();
  const subject = repo.subjectBySlug(exam.id, subjectSlug);
  if (!subject) notFound();
  const topic = repo.topicBySlug(subject.id, topicSlug);
  if (!topic) notFound();

  const material = repo.materialByTopic(topic.id);
  const qCount = repo.questionsByTopic(topic.id).length;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: `${topic.name} — ${exam.name}`,
    description: material ? excerpt(material.content) : topic.name,
    educationalLevel: exam.name,
    about: `${exam.name} · ${subject.name}`,
    learningResourceType: ["Study note", "Practice questions"],
    teaches: topic.name,
    interactivityType: "active",
    isAccessibleForFree: true,
    inLanguage: "en",
    ...(qCount > 0 ? { assesses: `${qCount} multiple-choice questions` } : {})
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopicShell
        examSlug={exam.slug}
        subjectSlug={subject.slug}
        subjectName={subject.name}
        topicId={topic.id}
        topicName={topic.name}
      />
    </>
  );
}
