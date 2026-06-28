import { describe, expect, it } from "vitest";
import { sampleQuestions, scoreMock } from "../src/mock";
import type { Question } from "../src/types";

const q = (id: string, correct: Question["correctOption"]): Question => ({
  id, topicId: "t", text: id, optionA: "a", optionB: "b", optionC: "c", optionD: "d",
  correctOption: correct, explanation: "", orderIndex: 0
});
const pool = [q("1","A"), q("2","B"), q("3","C"), q("4","D"), q("5","A")];

describe("sampleQuestions", () => {
  it("returns exactly count items when pool is large enough", () => {
    expect(sampleQuestions(pool, 3, () => 0).length).toBe(3);
  });
  it("caps at pool size when count exceeds it", () => {
    expect(sampleQuestions(pool, 99).length).toBe(5);
  });
  it("never mutates the source pool", () => {
    const copy = [...pool];
    sampleQuestions(pool, 5);
    expect(pool).toEqual(copy);
  });
  it("is deterministic for a fixed rng", () => {
    const seq = [0.1, 0.9, 0.3, 0.7, 0.2];
    let i = 0;
    const rng = () => seq[i++ % seq.length]!;
    let j = 0;
    const rng2 = () => seq[j++ % seq.length]!;
    expect(sampleQuestions(pool, 4, rng).map((x) => x.id)).toEqual(
      sampleQuestions(pool, 4, rng2).map((x) => x.id)
    );
  });
});

describe("scoreMock", () => {
  it("scores correct/answered/pct and marks skips", () => {
    const qs = [q("1","A"), q("2","B"), q("3","C")];
    const r = scoreMock(qs, { "1": "A", "2": "D", "3": null });
    expect(r).toMatchObject({ total: 3, answered: 2, correct: 1, scorePct: 33 });
    expect(r.answers[0]).toMatchObject({ picked: "A", correct: true });
    expect(r.answers[1]).toMatchObject({ picked: "D", correct: false });
    expect(r.answers[2]).toMatchObject({ picked: null, correct: false });
  });
  it("returns 0% for an empty paper without dividing by zero", () => {
    expect(scoreMock([], {}).scorePct).toBe(0);
  });
});
