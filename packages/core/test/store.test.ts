import { describe, expect, it } from "vitest";
import { createJyotirStore, REVIEW_SCOPE } from "../src/store";
import { MemoryStorageAdapter } from "../src/storage";
import type { ContentSource } from "../src/content-repo";
import type { OptionKey, Question } from "../src/types";

const q = (id: string, orderIndex: number): Question => ({
  id,
  topicId: "t1",
  text: `Q ${id}`,
  optionA: "a",
  optionB: "b",
  optionC: "c",
  optionD: "d",
  correctOption: "B",
  explanation: "because",
  orderIndex
});

const content: ContentSource = {
  exams: [{ id: "upsc", slug: "upsc", name: "UPSC", tagline: "", orderIndex: 0 }],
  subjects: [{ id: "upsc-polity", examId: "upsc", name: "Polity", slug: "polity", orderIndex: 0 }],
  topics: [{ id: "t1", subjectId: "upsc-polity", name: "FRs", slug: "frs", orderIndex: 0 }],
  materials: [
    {
      id: "t1-m01",
      topicId: "t1",
      title: "FRs",
      content: "**hi**",
      estimatedReadTime: 1,
      totalLinkedQuestions: 3,
      orderIndex: 0
    }
  ],
  questions: [q("q1", 0), q("q2", 1), q("q3", 2)]
};

function makeStore() {
  return createJyotirStore({ adapter: new MemoryStorageAdapter(), content });
}

describe("drill loop", () => {
  it("auto-grades a correct tap and advances on next()", () => {
    const store = makeStore();
    store.getState().startDrill("t1");
    expect(store.getState().drill.queue).toHaveLength(3);
    expect(store.getState().drill.phase).toBe("question");

    store.getState().answer("B"); // "B" is the correct option in the fixture
    let drill = store.getState().drill;
    expect(drill.phase).toBe("answered");
    expect(drill.selected).toBe("B");
    expect(drill.stats).toEqual({ knew: 1, wrong: 0 });
    // The answer is recorded for the review screen with the derived verdict.
    expect(drill.answers).toHaveLength(1);
    expect(drill.answers[0]).toMatchObject({ selected: "B", correct: "B", wasCorrect: true });
    expect(store.getState().progress["q1"]?.repetitions).toBe(1);
    // XP is attributed to the card's exam (per-exam leaderboards).
    const s = store.getState().stats;
    expect(s.examXp["upsc"]).toBeGreaterThan(0);
    expect(s.examXp["upsc"]).toBe(s.xp);

    store.getState().next();
    drill = store.getState().drill;
    expect(drill.phase).toBe("question");
    expect(drill.index).toBe(1);
    expect(drill.selected).toBeNull();
  });

  it("auto-grades a wrong tap without the user self-reporting", () => {
    const store = makeStore();
    store.getState().startDrill("t1");
    store.getState().answer("A"); // wrong — correct is "B"
    const { drill } = store.getState();
    expect(drill.phase).toBe("answered");
    expect(drill.stats).toEqual({ knew: 0, wrong: 1 });
    expect(drill.answers[0]).toMatchObject({ selected: "A", correct: "B", wasCorrect: false });
  });

  it("ignores answer() outside the question phase and next() outside answered", () => {
    const store = makeStore();
    store.getState().startDrill("t1");
    // next() before answering is a no-op.
    store.getState().next();
    expect(store.getState().drill.phase).toBe("question");
    expect(store.getState().drill.index).toBe(0);
    // A second answer() while already answered is ignored.
    store.getState().answer("B");
    store.getState().answer("A");
    expect(store.getState().drill.answers).toHaveLength(1);
  });

  it("collects every answer in order for the review screen and completes cleanly", () => {
    const store = makeStore();
    store.getState().startDrill("t1");

    // Answer q1 wrong, q2 & q3 correct — the queue is not re-ordered.
    const picks: OptionKey[] = ["A", "B", "B"];
    picks.forEach((opt, i) => {
      store.getState().answer(opt);
      if (i < picks.length - 1) store.getState().next();
    });
    store.getState().next(); // advance past the last card -> complete

    const { drill } = store.getState();
    expect(drill.phase).toBe("complete");
    expect(drill.queue).toHaveLength(3);
    expect(drill.answers).toHaveLength(3);
    expect(drill.answers.map((a) => a.wasCorrect)).toEqual([false, true, true]);
    expect(drill.stats).toEqual({ knew: 2, wrong: 1 });
  });

  it("counts due cards for the Read-to-Drill CTA", () => {
    const store = makeStore();
    expect(store.getState().countsForTopic("t1")).toEqual({ due: 0, fresh: 3, total: 3 });

    store.getState().startDrill("t1");
    store.getState().answer("B"); // correct -> scheduled tomorrow, no longer fresh or due
    expect(store.getState().countsForTopic("t1")).toEqual({ due: 0, fresh: 2, total: 3 });
  });

  it("persists progress to the adapter after answering", async () => {
    const adapter = new MemoryStorageAdapter();
    const store = createJyotirStore({ adapter, content });
    store.getState().startDrill("t1");
    store.getState().answer("B");
    await new Promise((r) => setTimeout(r, 0));
    const saved = await adapter.loadProgress();
    expect(saved["q1"]?.repetitions).toBe(1);
    expect(saved["q1"]?.synced).toBe(false);
  });

  it("marks materials read", async () => {
    const store = makeStore();
    store.getState().markRead("t1-m01");
    expect(store.getState().reads["t1-m01"]?.synced).toBe(false);
  });
});

describe("cross-exam review", () => {
  it("dueTotal and startReview surface only cards whose review date has passed", async () => {
    const adapter = new MemoryStorageAdapter();
    // Pre-seed one overdue card and one scheduled far ahead.
    await adapter.saveProgress({
      questionId: "q1",
      repetitions: 2,
      easeFactor: 2.5,
      intervalDays: 6,
      nextReviewDate: "2000-01-01T00:00:00.000Z",
      lapses: 0,
      lastReviewedAt: "2000-01-01T00:00:00.000Z",
      updatedAt: "2000-01-01T00:00:00.000Z",
      synced: true
    });
    await adapter.saveProgress({
      questionId: "q2",
      repetitions: 2,
      easeFactor: 2.5,
      intervalDays: 6,
      nextReviewDate: "2999-01-01T00:00:00.000Z",
      lapses: 0,
      lastReviewedAt: "2000-01-01T00:00:00.000Z",
      updatedAt: "2000-01-01T00:00:00.000Z",
      synced: true
    });

    const store = createJyotirStore({ adapter, content });
    await store.getState().hydrate();

    expect(store.getState().dueTotal()).toBe(1);

    store.getState().startReview();
    const { drill } = store.getState();
    expect(drill.topicId).toBe(REVIEW_SCOPE);
    expect(drill.queue.map((c) => c.question.id)).toEqual(["q1"]);
    expect(drill.phase).toBe("question");
  });

  it("starts in the complete phase when nothing is due", () => {
    const store = makeStore();
    store.getState().startReview();
    expect(store.getState().drill.phase).toBe("complete");
    expect(store.getState().dueTotal()).toBe(0);
  });
});
