import type { StudyMaterial } from "@jyotir/core";

/**
 * Display read time, derived from the note's actual word count (~200 wpm)
 * so labels are consistent across every list — two notes of similar length
 * always show the same estimate. Falls back to the authored estimate only
 * if a note is somehow empty.
 */
export function readMinutes(material: StudyMaterial): number {
  const words = material.content.split(/\s+/).filter(Boolean).length;
  if (words === 0) return Math.max(1, material.estimatedReadTime);
  return Math.max(1, Math.round(words / 200));
}
