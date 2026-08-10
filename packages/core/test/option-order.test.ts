import { describe, expect, it } from "vitest";
import { OPTION_KEYS, displayedLabel, optionOrder, type OptionKey } from "../src/types";

describe("optionOrder", () => {
  it("is a permutation of all four keys", () => {
    for (let i = 0; i < 500; i++) {
      const order = optionOrder(`q-${i}`);
      expect([...order].sort()).toEqual(["A", "B", "C", "D"]);
    }
  });

  it("is stable for the same id", () => {
    // A card that reshuffled between reviews would change the memory cue
    // mid-schedule, which defeats the point of spaced repetition.
    const a = optionOrder("upsc-polity-fundamental-rights-q01");
    const b = optionOrder("upsc-polity-fundamental-rights-q01");
    expect(a).toEqual(b);
  });

  it("differs across ids often enough to break positional guessing", () => {
    const seen = new Set(
      Array.from({ length: 2000 }, (_, i) => optionOrder(`q-${i}`).join(""))
    );
    expect(seen.size).toBe(24); // every permutation reachable
  });

  it("spreads a corpus that is 100% option A across all four positions", () => {
    // The real bank skews ~65% to A; simulate the worst case (always A) and
    // assert the shuffle alone flattens it.
    const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
    const n = 10_000;
    for (let i = 0; i < n; i++) counts[displayedLabel(`q-${i}`, "A")]!++;
    for (const k of OPTION_KEYS) {
      expect(counts[k]! / n).toBeGreaterThan(0.2);
      expect(counts[k]! / n).toBeLessThan(0.3);
    }
  });

  it("displayedLabel round-trips to the option actually rendered there", () => {
    for (let i = 0; i < 200; i++) {
      const id = `q-${i}`;
      const order = optionOrder(id);
      for (const authored of OPTION_KEYS) {
        const shown = displayedLabel(id, authored);
        const position = OPTION_KEYS.indexOf(shown as OptionKey);
        expect(order[position]).toBe(authored);
      }
    }
  });
});
