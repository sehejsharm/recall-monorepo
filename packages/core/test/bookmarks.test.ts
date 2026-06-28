import { describe, expect, it } from "vitest";
import { createJyotirStore, BOOKMARK_SCOPE, CUSTOM_SCOPE } from "../src/store";
import { MemoryStorageAdapter } from "../src/storage";
import type { ContentSource } from "../src/content-repo";
import type { Question } from "../src/types";

const mkQ = (id: string, topicId: string, o = 0): Question => ({
  id, topicId, text: id, optionA: "a", optionB: "b", optionC: "c", optionD: "d",
  correctOption: "A", explanation: "", orderIndex: o
});

const content: ContentSource = {
  exams: [{ id: "e1", slug: "upsc", name: "UPSC", tagline: "", orderIndex: 0 }],
  subjects: [{ id: "s1", examId: "e1", name: "S1", slug: "s1", orderIndex: 0 }],
  topics: [
    { id: "t1", subjectId: "s1", name: "T1", slug: "t1", orderIndex: 0 },
    { id: "t2", subjectId: "s1", name: "T2", slug: "t2", orderIndex: 1 }
  ],
  materials: [],
  questions: [mkQ("q1", "t1"), mkQ("q2", "t1", 1), mkQ("q3", "t2")]
};

const fresh = () => createJyotirStore({ adapter: new MemoryStorageAdapter(), content });

describe("bookmarks", () => {
  it("toggles, reports state, and counts", () => {
    const store = fresh();
    const s = store.getState();
    expect(s.isBookmarked("q1")).toBe(false);
    s.toggleBookmark("q1");
    s.toggleBookmark("q3");
    expect(store.getState().isBookmarked("q1")).toBe(true);
    expect(store.getState().bookmarkedCount()).toBe(2);
    store.getState().toggleBookmark("q1");
    expect(store.getState().isBookmarked("q1")).toBe(false);
    expect(store.getState().bookmarkedCount()).toBe(1);
  });

  it("persists across a rehydrate", async () => {
    const adapter = new MemoryStorageAdapter();
    const a = createJyotirStore({ adapter, content });
    a.getState().toggleBookmark("q2");
    const b = createJyotirStore({ adapter, content });
    await b.getState().hydrate();
    expect(b.getState().isBookmarked("q2")).toBe(true);
  });

  it("startBookmarkedDrill only queues bookmarked questions", () => {
    const store = fresh();
    store.getState().toggleBookmark("q2");
    store.getState().startBookmarkedDrill();
    const d = store.getState().drill;
    expect(d.topicId).toBe(BOOKMARK_SCOPE);
    expect(d.queue.map((c) => c.question.id)).toEqual(["q2"]);
  });

  it("resetAll clears bookmarks", () => {
    const store = fresh();
    store.getState().toggleBookmark("q1");
    store.getState().resetAll();
    expect(store.getState().bookmarkedCount()).toBe(0);
  });
});

describe("custom drill", () => {
  it("queues questions across the chosen topics only", () => {
    const store = fresh();
    store.getState().startCustomDrill(["t2"]);
    const d = store.getState().drill;
    expect(d.topicId).toBe(CUSTOM_SCOPE);
    expect(d.queue.map((c) => c.question.id)).toEqual(["q3"]);
  });
});
