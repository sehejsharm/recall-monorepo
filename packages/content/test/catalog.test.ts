import { describe, expect, it } from "vitest";
import { examCatalog, firstTopicPathByExam } from "../src/catalog";
import { exams, subjects, topics } from "../src/index";

/**
 * catalog.ts is a generated, hand-duplicated slice of the bundle that exists so
 * exam-picker UI doesn't drag the 5.7 MB question corpus into the client. A
 * duplicate is only safe if drift is impossible, so this re-derives it from the
 * real bundle and fails if `pnpm catalog:generate` wasn't re-run.
 */
const byOrder = (a: { orderIndex: number }, b: { orderIndex: number }) =>
  a.orderIndex - b.orderIndex;

describe("exam catalog", () => {
  it("matches the bundle exactly, in picker order", () => {
    expect(examCatalog).toEqual([...exams].sort(byOrder));
  });

  it("has a taste-session path for every exam", () => {
    expect(Object.keys(firstTopicPathByExam).sort()).toEqual(exams.map((e) => e.id).sort());
  });

  it("every taste-session path resolves to a real exam/subject/topic", () => {
    for (const [examId, path] of Object.entries(firstTopicPathByExam)) {
      const exam = exams.find((e) => e.id === examId)!;
      const subject = subjects.filter((s) => s.examId === exam.id).sort(byOrder)[0]!;
      const topic = topics.filter((t) => t.subjectId === subject.id).sort(byOrder)[0]!;
      expect(path).toBe(`/${exam.slug}/${subject.slug}/${topic.slug}`);
    }
  });

  it("stays small enough to be worth having", () => {
    // Guards the entire point of the file: if someone inlines question or
    // material data here, the bundle-size win silently disappears.
    const bytes = JSON.stringify({ examCatalog, firstTopicPathByExam }).length;
    expect(bytes).toBeLessThan(20_000);
  });
});
