import { describe, expect, it } from "vitest";
import { OPTION_KEYS, displayedLabel } from "@jyotir/core";
import { exams, subjects, topics, materials, questions } from "../src/index";

/**
 * Cross-exam content integrity. Progress records are keyed by question id
 * ALONE (user_id + question_id in the backend, question id in local
 * storage), so a question id duplicated across any two exams would silently
 * merge two different topics' spaced-repetition schedules — studying one
 * exam would corrupt the other's. Same for slugs: the URL space resolves
 * exam → subject → topic by slug, so a duplicate slug at any level makes a
 * page unreachable (shadowed by whichever sibling comes first).
 *
 * These invariants are global (across the ENTIRE merged bundle), not
 * per-exam — per-exam checks alone cannot catch a CFA-L1 / CFA-L2 clash.
 */

function duplicates(ids: string[]): string[] {
  const seen = new Set<string>();
  const dups = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) dups.add(id);
    seen.add(id);
  }
  return [...dups];
}

describe("global id uniqueness (the progress-key namespace)", () => {
  it("question ids are unique across every exam", () => {
    expect(duplicates(questions.map((q) => q.id))).toEqual([]);
  });

  it("topic ids are unique across every exam", () => {
    expect(duplicates(topics.map((t) => t.id))).toEqual([]);
  });

  it("material ids are unique across every exam", () => {
    expect(duplicates(materials.map((m) => m.id))).toEqual([]);
  });

  it("subject and exam ids are unique", () => {
    expect(duplicates(subjects.map((s) => s.id))).toEqual([]);
    expect(duplicates(exams.map((e) => e.id))).toEqual([]);
  });
});

describe("URL-space uniqueness (slug resolution can never shadow)", () => {
  it("exam slugs are unique", () => {
    expect(duplicates(exams.map((e) => e.slug))).toEqual([]);
  });

  it("subject slugs are unique within each exam", () => {
    for (const e of exams) {
      const slugs = subjects.filter((s) => s.examId === e.id).map((s) => s.slug);
      expect(duplicates(slugs), `exam ${e.id}`).toEqual([]);
    }
  });

  it("topic slugs are unique within each subject", () => {
    const bySubject = new Map<string, string[]>();
    for (const t of topics) {
      const list = bySubject.get(t.subjectId) ?? [];
      list.push(t.slug);
      bySubject.set(t.subjectId, list);
    }
    for (const [subjectId, slugs] of bySubject) {
      expect(duplicates(slugs), `subject ${subjectId}`).toEqual([]);
    }
  });
});

describe("referential integrity", () => {
  it("every subject belongs to an existing exam", () => {
    const examIds = new Set(exams.map((e) => e.id));
    expect(subjects.filter((s) => !examIds.has(s.examId)).map((s) => s.id)).toEqual([]);
  });

  it("every topic belongs to an existing subject", () => {
    const subjectIds = new Set(subjects.map((s) => s.id));
    expect(topics.filter((t) => !subjectIds.has(t.subjectId)).map((t) => t.id)).toEqual([]);
  });

  it("every question and material belongs to an existing topic", () => {
    const topicIds = new Set(topics.map((t) => t.id));
    expect(questions.filter((q) => !topicIds.has(q.topicId)).map((q) => q.id)).toEqual([]);
    expect(materials.filter((m) => !topicIds.has(m.topicId)).map((m) => m.id)).toEqual([]);
  });

  it("the two CFA hypothesis-testing topics live in different exams with disjoint question ids", () => {
    // Regression lock for the reported "CFA L1/L2 share a progress key"
    // concern: L1 (cfa-…) and L2 (cfa2-…) must remain fully disjoint.
    const l1 = topics.find((t) => t.id === "cfa-quantitative-methods-hypothesis-testing");
    const l2 = topics.find((t) => t.id === "cfa2-quantitative-methods-hypothesis-testing");
    expect(l1).toBeDefined();
    expect(l2).toBeDefined();
    const examOf = (subjectId: string) => subjects.find((s) => s.id === subjectId)?.examId;
    expect(examOf(l1!.subjectId)).toBe("cfa-1");
    expect(examOf(l2!.subjectId)).toBe("cfa-2");
    const l1Qs = new Set(questions.filter((q) => q.topicId === l1!.id).map((q) => q.id));
    const l2Qs = questions.filter((q) => q.topicId === l2!.id).map((q) => q.id);
    expect(l2Qs.some((id) => l1Qs.has(id))).toBe(false);
  });
});

/**
 * Answer-key exploitability, measured as the user experiences it.
 *
 * The authored banks skew hard toward option A (~65% corpus-wide, ~90% on
 * JEE Advanced) and 306 topics were authored with a single correct letter
 * for every card. That is only harmless because the drill renders options in
 * a deterministic per-question shuffle (`optionOrder`), so what matters — and
 * what this guards — is the distribution of the letter the user actually
 * SEES. If someone reverts the shuffle, or adds a bank skewed badly enough to
 * survive it, these fail.
 */
describe("answer key is not guessable as presented", () => {
  const shown = questions.map((q) => displayedLabel(q.id, q.correctOption));

  it("no displayed position is correct much more often than chance", () => {
    for (const key of OPTION_KEYS) {
      const share = shown.filter((k) => k === key).length / questions.length;
      expect(share, `option ${key} share`).toBeGreaterThan(0.15);
      expect(share, `option ${key} share`).toBeLessThan(0.35);
    }
  });

  it("no topic deck has a single displayed letter for every card", () => {
    const byTopic = new Map<string, Set<string>>();
    questions.forEach((q, i) => {
      if (!byTopic.has(q.topicId)) byTopic.set(q.topicId, new Set());
      byTopic.get(q.topicId)!.add(shown[i]!);
    });
    const singleLetter = [...byTopic]
      .filter(([, letters]) => letters.size === 1)
      .map(([topicId]) => topicId);
    expect(singleLetter).toEqual([]);
  });

  it("always tapping the first option scores no better than chance", () => {
    const firstOption = shown.filter((k) => k === "A").length / questions.length;
    expect(firstOption).toBeLessThan(0.35);
  });
});
