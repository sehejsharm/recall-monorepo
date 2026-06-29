import type { Exam, Question, StudyMaterial, Subject, Topic } from "@jyotir/core";
import type { ExamBundle } from "./builder";
import { upsc } from "./upsc";
import { jee } from "./jee";
import { neet } from "./neet";
import { sscCgl } from "./ssc-cgl";
import { gate } from "./gate";
import { cfaLevel1 } from "./cfa";
import { cfaLevel2 } from "./cfa-l2";
import { cfaLevel3 } from "./cfa-l3";
import { frmPart1, frmPart2 } from "./frm";

export type { ExamBundle, RawExamBundle, AuthoredMaterial } from "./builder";
export { defineBundle, defineProgram } from "./builder";

export const bundles: ExamBundle[] = [
  upsc,
  jee,
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
export const questions: Question[] = bundles.flatMap((b) => b.questions);

export { upsc, jee, neet, sscCgl, gate, cfaLevel1, cfaLevel2, cfaLevel3, frmPart1, frmPart2 };
