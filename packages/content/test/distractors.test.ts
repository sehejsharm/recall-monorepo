import { describe, expect, it } from "vitest";
import type { OptionKey } from "@jyotir/core";
import { distractorRationales } from "../src/distractors";
import { questions } from "../src/index";

/**
 * Distractor-rationale authoring contract. These rationales tell a learner
 * WHY the option they picked is wrong, so a rationale attached to the wrong
 * key — or to the correct option, or referencing a question that no longer
 * exists — would actively mislead. Locked down here.
 */

const byId = new Map(questions.map((q) => [q.id, q]));

describe("distractor rationales", () => {
  it("every keyed question id exists in the bundle", () => {
    const missing = Object.keys(distractorRationales).filter((id) => !byId.has(id));
    expect(missing).toEqual([]);
  });

  it("never provides a rationale for the correct option", () => {
    const offenders: string[] = [];
    for (const [id, d] of Object.entries(distractorRationales)) {
      const q = byId.get(id);
      if (q && d[q.correctOption] !== undefined) offenders.push(`${id}:${q.correctOption}`);
    }
    expect(offenders).toEqual([]);
  });

  it("only keys real option letters (A–D)", () => {
    const valid = new Set<OptionKey>(["A", "B", "C", "D"]);
    const bad: string[] = [];
    for (const [id, d] of Object.entries(distractorRationales)) {
      for (const key of Object.keys(d)) {
        if (!valid.has(key as OptionKey)) bad.push(`${id}:${key}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it("every rationale is a substantive sentence (>= 20 chars)", () => {
    const thin: string[] = [];
    for (const [id, d] of Object.entries(distractorRationales)) {
      for (const [key, text] of Object.entries(d)) {
        if ((text ?? "").trim().length < 20) thin.push(`${id}:${key}`);
      }
    }
    expect(thin).toEqual([]);
  });

  it("surfaces on the assembled question objects via the overlay", () => {
    // The index.ts overlay must actually attach the rationales to questions.
    const sampleId = "cfa-ethics-material-non-public-info-q03";
    const q = byId.get(sampleId);
    expect(q?.distractors?.B).toContain("transaction-based");
    // And it never attaches an empty object to untouched questions.
    const plain = questions.find((x) => !distractorRationales[x.id]);
    expect(plain?.distractors).toBeUndefined();
  });
});
