import type {
  Exam,
  Question,
  StudyMaterial,
  Subject,
  Topic
} from "@jyotir/core";

/** Authored shape: totalLinkedQuestions is derived, so authors omit it. */
export type AuthoredMaterial = Omit<StudyMaterial, "totalLinkedQuestions">;

export interface RawExamBundle {
  exam: Exam;
  subjects: Subject[];
  topics: Topic[];
  materials: AuthoredMaterial[];
  questions: Question[];
}

export interface ExamBundle {
  exam: Exam;
  subjects: Subject[];
  topics: Topic[];
  materials: StudyMaterial[];
  questions: Question[];
}

/**
 * Validates referential integrity and id uniqueness, and derives
 * totalLinkedQuestions for every material. Throws at module-load time so a
 * broken bundle can never ship.
 */
export function defineBundle(raw: RawExamBundle): ExamBundle {
  const subjectIds = new Set<string>();
  for (const s of raw.subjects) {
    if (s.examId !== raw.exam.id) {
      throw new Error(`[content] subject ${s.id} examId mismatch`);
    }
    if (subjectIds.has(s.id)) throw new Error(`[content] duplicate subject id ${s.id}`);
    subjectIds.add(s.id);
  }

  const topicIds = new Set<string>();
  for (const t of raw.topics) {
    if (!subjectIds.has(t.subjectId)) {
      throw new Error(`[content] topic ${t.id} references unknown subject ${t.subjectId}`);
    }
    if (topicIds.has(t.id)) throw new Error(`[content] duplicate topic id ${t.id}`);
    topicIds.add(t.id);
  }

  const questionsByTopic = new Map<string, number>();
  const questionIds = new Set<string>();
  for (const q of raw.questions) {
    if (!topicIds.has(q.topicId)) {
      throw new Error(`[content] question ${q.id} references unknown topic ${q.topicId}`);
    }
    if (questionIds.has(q.id)) throw new Error(`[content] duplicate question id ${q.id}`);
    questionIds.add(q.id);
    questionsByTopic.set(q.topicId, (questionsByTopic.get(q.topicId) ?? 0) + 1);
  }

  const materialIds = new Set<string>();
  const materials: StudyMaterial[] = raw.materials.map((m) => {
    if (!topicIds.has(m.topicId)) {
      throw new Error(`[content] material ${m.id} references unknown topic ${m.topicId}`);
    }
    if (materialIds.has(m.id)) throw new Error(`[content] duplicate material id ${m.id}`);
    materialIds.add(m.id);
    return { ...m, totalLinkedQuestions: questionsByTopic.get(m.topicId) ?? 0 };
  });

  return { ...raw, materials };
}

/** A single track within a multi-level program (e.g. CFA Level I). */
export interface ProgramTrack {
  exam: Exam;
  /** Subject ids (from the combined pool) that belong to this track. */
  subjectIds: string[];
}

export interface ProgramPool {
  subjects: Subject[];
  topics: Topic[];
  materials: AuthoredMaterial[];
  questions: Question[];
}

/**
 * Splits one combined content pool into several per-track bundles (one exam
 * each), partitioning subjects/topics/materials/questions by subject
 * membership and re-stamping each subject's examId to its track. Each track
 * is run through defineBundle, so referential integrity is still enforced and
 * every subject must be claimed by exactly one track.
 */
export function defineProgram(tracks: ProgramTrack[], pool: ProgramPool): ExamBundle[] {
  const claimed = new Map<string, string>(); // subjectId -> examId
  for (const { exam, subjectIds } of tracks) {
    for (const id of subjectIds) {
      if (claimed.has(id)) {
        throw new Error(`[content] subject ${id} claimed by both ${claimed.get(id)} and ${exam.id}`);
      }
      claimed.set(id, exam.id);
    }
  }
  for (const s of pool.subjects) {
    if (!claimed.has(s.id)) throw new Error(`[content] subject ${s.id} not assigned to any track`);
  }

  return tracks.map(({ exam, subjectIds }) => {
    const ids = new Set(subjectIds);
    const subjects = pool.subjects
      .filter((s) => ids.has(s.id))
      .map((s) => ({ ...s, examId: exam.id }));
    const topics = pool.topics.filter((t) => ids.has(t.subjectId));
    const topicIds = new Set(topics.map((t) => t.id));
    const materials = pool.materials.filter((m) => topicIds.has(m.topicId));
    const questions = pool.questions.filter((q) => topicIds.has(q.topicId));
    return defineBundle({ exam, subjects, topics, materials, questions });
  });
}
