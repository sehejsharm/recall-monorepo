import { describe, expect, it } from "vitest";
import { buildQueue, buildReviewQueue, dueCount, topicCounts } from "../src/scheduler";
import type { ProgressRecord, Question } from "../src/types";

const NOW = new Date("2026-06-12T12:00:00.000Z");

const q = (id: string, orderIndex: number): Question => ({
  id,
  topicId: "t1",
  text: `Question ${id}`,
  optionA: "a",
  optionB: "b",
  optionC: "c",
  optionD: "d",
  correctOption: "A",
  explanation: "because",
  orderIndex
});

const prog = (questionId: string, nextReviewDate: string): ProgressRecord => ({
  questionId,
  repetitions: 1,
  easeFactor: 2.5,
  intervalDays: 1,
  nextReviewDate,
  lapses: 0,
  lastReviewedAt: NOW.toISOString(),
  updatedAt: NOW.toISOString(),
  synced: true
});

describe("buildQueue", () => {
  it("orders due (most overdue first), then new, then early", () => {
    const questions = [q("new2", 3), q("due-recent", 1), q("due-old", 0), q("new1", 2), q("early", 4)];
    const progress = {
      "due-old": prog("due-old", "2026-06-01T00:00:00.000Z"),
      "due-recent": prog("due-recent", "2026-06-12T00:00:00.000Z"),
      early: prog("early", "2026-06-20T00:00:00.000Z")
    };
    const queue = buildQueue(questions, progress, NOW);
    expect(queue.map((c) => c.question.id)).toEqual(["due-old", "due-recent", "new1", "new2", "early"]);
    expect(queue.map((c) => c.reason)).toEqual(["due", "due", "new", "new", "early"]);
  });

  it("caps the queue at the prefetch limit (default 30)", () => {
    const questions = Array.from({ length: 50 }, (_, i) => q(`q${i}`, i));
    expect(buildQueue(questions, {}, NOW)).toHaveLength(30);
    expect(buildQueue(questions, {}, NOW, 10)).toHaveLength(10);
  });

  it('earlyFill "ifEmpty" excludes not-yet-due cards when anything is due/new (session matches the promised count)', () => {
    const questions = [q("due1", 0), q("new1", 1), q("early1", 2), q("early2", 3)];
    const progress = {
      due1: prog("due1", "2026-06-01T00:00:00.000Z"),
      early1: prog("early1", "2026-06-20T00:00:00.000Z"),
      early2: prog("early2", "2026-06-25T00:00:00.000Z")
    };
    const queue = buildQueue(questions, progress, NOW, 30, "ifEmpty");
    // "1 due · 1 new" is exactly what the session serves — never padded
    // with cards that are still scheduled for the future.
    expect(queue.map((c) => c.question.id)).toEqual(["due1", "new1"]);
    expect(queue.map((c) => c.reason)).toEqual(["due", "new"]);
  });

  it('earlyFill "ifEmpty" still serves early cards when fully caught up (practice mode)', () => {
    const questions = [q("early1", 0), q("early2", 1)];
    const progress = {
      early1: prog("early1", "2026-06-20T00:00:00.000Z"),
      early2: prog("early2", "2026-06-25T00:00:00.000Z")
    };
    const queue = buildQueue(questions, progress, NOW, 30, "ifEmpty");
    expect(queue.map((c) => c.question.id)).toEqual(["early1", "early2"]);
    expect(queue.every((c) => c.reason === "early")).toBe(true);
  });
});

describe("topicCounts", () => {
  it("splits due / fresh / total for the CTA badge", () => {
    const questions = [q("a", 0), q("b", 1), q("c", 2)];
    const progress = {
      a: prog("a", "2026-06-01T00:00:00.000Z"), // due
      b: prog("b", "2026-07-01T00:00:00.000Z") // scheduled ahead
    };
    expect(topicCounts(questions, progress, NOW)).toEqual({ due: 1, fresh: 1, total: 3 });
  });
});

describe("buildReviewQueue", () => {
  it("includes only due cards, most overdue first, and never new cards", () => {
    const questions = [q("fresh", 0), q("due-old", 1), q("ahead", 2), q("due-new", 3)];
    const progress = {
      "due-old": prog("due-old", "2026-06-01T00:00:00.000Z"),
      "due-new": prog("due-new", "2026-06-12T00:00:00.000Z"),
      ahead: prog("ahead", "2026-07-01T00:00:00.000Z")
      // "fresh" intentionally has no progress row
    };
    const queue = buildReviewQueue(questions, progress, NOW);
    expect(queue.map((c) => c.question.id)).toEqual(["due-old", "due-new"]);
    expect(queue.every((c) => c.reason === "due")).toBe(true);
  });

  it("can reach an empty queue when nothing is due (review hits zero)", () => {
    const questions = [q("a", 0), q("b", 1)];
    const progress = { a: prog("a", "2026-07-01T00:00:00.000Z") };
    expect(buildReviewQueue(questions, progress, NOW)).toEqual([]);
  });

  it("respects the prefetch limit", () => {
    const questions = Array.from({ length: 40 }, (_, i) => q(`q${i}`, i));
    const progress = Object.fromEntries(
      questions.map((x) => [x.id, prog(x.id, "2026-06-01T00:00:00.000Z")])
    );
    expect(buildReviewQueue(questions, progress, NOW, 30)).toHaveLength(30);
  });
});

describe("dueCount", () => {
  it("counts only due cards across the set", () => {
    const questions = [q("a", 0), q("b", 1), q("c", 2)];
    const progress = {
      a: prog("a", "2026-06-01T00:00:00.000Z"),
      b: prog("b", "2026-06-11T00:00:00.000Z"),
      c: prog("c", "2026-07-01T00:00:00.000Z")
    };
    expect(dueCount(questions, progress, NOW)).toBe(2);
  });
});
