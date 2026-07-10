import { describe, expect, it } from "vitest";
import {
  GRADE_KNEW_IT,
  GRADE_WRONG,
  gradeBinary,
  initialSm2State,
  MIN_EASE_FACTOR,
  nextEaseFactor,
  scheduleExplanation,
  sm2
} from "../src/sm2";

const NOW = new Date("2026-06-12T00:00:00.000Z");
const days = (n: number) => new Date(NOW.getTime() + n * 86_400_000).toISOString();

describe("sm2", () => {
  it("schedules the canonical 1, 6, round(6*EF) day ladder on successes", () => {
    let s = initialSm2State(NOW);
    s = sm2(s, 5, NOW);
    expect(s).toMatchObject({ repetitions: 1, intervalDays: 1, easeFactor: 2.6 });
    expect(s.nextReviewDate).toBe(days(1));

    s = sm2(s, 5, NOW);
    expect(s).toMatchObject({ repetitions: 2, intervalDays: 6, easeFactor: 2.7 });
    expect(s.nextReviewDate).toBe(days(6));

    s = sm2(s, 5, NOW);
    // I(3) = round(6 * 2.8) = 17
    expect(s).toMatchObject({ repetitions: 3, intervalDays: 17, easeFactor: 2.8 });
    expect(s.nextReviewDate).toBe(days(17));
  });

  it("q=4 keeps the ease factor flat", () => {
    expect(nextEaseFactor(2.5, 4)).toBe(2.5);
  });

  it("resets repetitions and interval on a lapse but keeps the penalised EF", () => {
    let s = initialSm2State(NOW);
    s = sm2(s, 4, NOW); // rep 1
    s = sm2(s, 4, NOW); // rep 2, interval 6
    s = sm2(s, GRADE_WRONG, NOW);
    expect(s.repetitions).toBe(0);
    expect(s.intervalDays).toBe(1);
    expect(s.easeFactor).toBeCloseTo(2.18, 2); // 2.5 - 0.32
    expect(s.nextReviewDate).toBe(days(1));
  });

  it("never lets EF drop below 1.3", () => {
    let ef = 2.5;
    for (let i = 0; i < 20; i++) ef = nextEaseFactor(ef, 0);
    expect(ef).toBe(MIN_EASE_FACTOR);
  });

  it("a new card is due immediately", () => {
    const s = initialSm2State(NOW);
    expect(s.nextReviewDate <= NOW.toISOString()).toBe(true);
  });
});

describe("gradeBinary", () => {
  it("maps Knew It to q=4 and Got It Wrong to q=2", () => {
    const knew = gradeBinary("q1", undefined, true, NOW);
    expect(knew).toMatchObject({
      questionId: "q1",
      repetitions: 1,
      intervalDays: 1,
      easeFactor: 2.5,
      lapses: 0,
      synced: false
    });

    const wrong = gradeBinary("q1", knew, false, NOW);
    expect(wrong.repetitions).toBe(0);
    expect(wrong.lapses).toBe(1);
    expect(wrong.easeFactor).toBeCloseTo(2.18, 2);
  });

  it("compounds intervals across reviews", () => {
    let rec = gradeBinary("q1", undefined, true, NOW); // 1d
    rec = gradeBinary("q1", rec, true, NOW); // 6d
    rec = gradeBinary("q1", rec, true, NOW); // round(6*2.5)=15d
    expect(rec.intervalDays).toBe(15);
    expect(rec.nextReviewDate).toBe(days(15));
  });

  it("uses the documented grade constants", () => {
    expect(GRADE_KNEW_IT).toBe(4);
    expect(GRADE_WRONG).toBe(2);
  });
});

describe("scheduleExplanation", () => {
  it("explains a reset after a miss", () => {
    const rec = gradeBinary("q", undefined, false, NOW);
    const msg = scheduleExplanation(rec, false);
    expect(msg).toMatch(/reset/i);
    expect(msg).toMatch(/tomorrow/);
  });

  it("explains the first clean recall", () => {
    const rec = gradeBinary("q", undefined, true, NOW);
    const msg = scheduleExplanation(rec, true);
    expect(msg).toMatch(/first clean recall/i);
    expect(msg).toMatch(/tomorrow/);
  });

  it("cites the ease multiplier on later recalls and a month-scale interval", () => {
    // Third clean recall: interval 6 -> round(6 * EF) days, so weeks out.
    let rec = gradeBinary("q", undefined, true, NOW); // rep 1
    rec = gradeBinary("q", rec, true, NOW); // rep 2, interval 6
    rec = gradeBinary("q", rec, true, NOW); // rep 3
    const msg = scheduleExplanation(rec, true);
    expect(msg).toMatch(/Recall #3/);
    expect(msg).toMatch(/×\d\.\d{2}/);
  });
});
