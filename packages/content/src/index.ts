import type { Exam, Question, StudyMaterial, Subject, Topic } from "@jyotir/core";
import type { ExamBundle } from "./builder";
import { upsc } from "./upsc";
import { jee } from "./jee";
import { jeeAdvanced } from "./jee-adv";
import { neet } from "./neet";
import { sscCgl } from "./ssc-cgl";
import { gate } from "./gate";
import { cfaLevel1 } from "./cfa";
import { cfaLevel2 } from "./cfa-l2";
import { cfaLevel3 } from "./cfa-l3";
import { frmPart1, frmPart2 } from "./frm";
import { distractorRationales } from "./distractors";

export type { ExamBundle, RawExamBundle, AuthoredMaterial } from "./builder";
export { defineBundle, defineProgram } from "./builder";
export { distractorRationales } from "./distractors";

export const bundles: ExamBundle[] = [
  upsc,
  jee,
  jeeAdvanced,
  neet,
  sscCgl,
  gate,
  cfaLevel1,
  cfaLevel2,
  cfaLevel3,
  frmPart1,
  frmPart2
];

export const exams: Exam[] = bundles.map((b) => b.exam);
export const subjects: Subject[] = bundles.flatMap((b) => b.subjects);
export const topics: Topic[] = bundles.flatMap((b) => b.topics);
export const materials: StudyMaterial[] = bundles.flatMap((b) => b.materials);
// Questions carry authored distractor rationales as an overlay (keyed by id),
// so the flagship-topic "why each wrong answer is wrong" content can grow
// without editing the large per-exam question files.
export const questions: Question[] = bundles
  .flatMap((b) => b.questions)
  .map((q) => {
    const d = distractorRationales[q.id];
    return d ? { ...q, distractors: d } : q;
  });

export { upsc, jee, jeeAdvanced, neet, sscCgl, gate, cfaLevel1, cfaLevel2, cfaLevel3, frmPart1, frmPart2 };
