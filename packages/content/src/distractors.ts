import type { Distractors, OptionKey } from "@jyotir/core";
import { stemDistractors } from "./distractors-stem";

/**
 * Per-wrong-option rationales ("why this is wrong"), keyed by question id and
 * applied as an overlay onto the question bank (see index.ts). Kept separate
 * from the question definitions so the flagship-topic authoring can grow
 * independently, one topic at a time, without touching the large content
 * files. Batches live in sibling files (e.g. distractors-stem.ts) and are
 * merged below.
 *
 * Authoring contract (enforced by test/distractors.test.ts):
 *   - every key is a real question id in the bundle;
 *   - the correct option is NEVER given a rationale (it has the explanation);
 *   - each rationale is a substantive sentence (≥ 20 chars).
 */
const humanitiesDistractors: Record<string, Distractors> = {
  // ─── CFA Level I · Ethics · Material Non-Public Information ───────────────
  "cfa-ethics-material-non-public-info-q01": {
    B: "Standard I(C) covers misrepresentation, not trading on inside tips — the analyst here is acting on undisclosed earnings, not making a false statement.",
    C: "Standard III(A) governs a manager's duty of loyalty and care to clients; it isn't the standard breached by trading on nonpublic earnings.",
    D: "Standard VI(B) sequences client trades ahead of personal ones — a conflict rule, not the material-nonpublic-information prohibition at issue."
  },
  "cfa-ethics-material-non-public-info-q02": {
    B: "Acting on material nonpublic information from an insider is exactly what Standard II(A) forbids — the opposite of what the mosaic theory permits.",
    C: "Inside information from a personal relationship is still material and nonpublic; trading on it is prohibited regardless of the source.",
    D: "Channel checks that surface material nonpublic details cannot be acted upon; materiality, not the collection method, is what matters."
  },
  "cfa-ethics-material-non-public-info-q03": {
    B: "Trading large volumes to move a price is transaction-based manipulation — a different form of Standard II(B) breach, not the information-based one asked about.",
    C: "Front-running client orders violates the priority-of-transactions duty, not the market-manipulation standard.",
    D: "Undisclosed conflicts fall under disclosure standards; they are not a form of market manipulation."
  },
  "cfa-ethics-material-non-public-info-q04": {
    A: "Trading ahead of the public on overheard merger news is textbook trading on material nonpublic information — a clear violation.",
    B: "Selectively tipping favoured clients spreads the inside information further and compounds the breach rather than curing it.",
    D: "How the information was obtained is irrelevant; once it is material and nonpublic, continuing to trade on it is prohibited."
  },
  "cfa-ethics-material-non-public-info-q05": {
    A: "A cafeteria-vendor change would not sway a reasonable investor's decision, so it is immaterial.",
    C: "A cosmetic website tweak has no bearing on the security's value and fails the materiality test.",
    D: "Routine upkeep of a financial model is ordinary analyst work, not price-moving material information."
  },
  "cfa-ethics-material-non-public-info-q06": {
    A: "Blanket trading restrictions across all client accounts are overbroad and harm clients unnecessarily; an information barrier is the targeted control.",
    C: "NDAs alone don't stop information already leaking between divisions; a structural barrier (a firewall) is what's required.",
    D: "Reporting to the SEC before trading is not the prescribed remedy; preventing the information from crossing divisions is."
  },
  "cfa-ethics-material-non-public-info-q07": {
    B: "Wash trading fabricates trading activity; it does not involve trading on material nonpublic information under II(A).",
    C: "Diligence and reasonable basis (V(A)) concern research quality, not the creation of fake trading volume.",
    D: "Wash trading is prohibited manipulation and is never permitted, even if disclosed to regulators."
  },
  "cfa-ethics-material-non-public-info-q08": {
    A: "Recent publication in a newspaper speaks to whether information is public, not to whether it is material.",
    B: "There is no fixed percentage price-move threshold for materiality; the test is the reasonable-investor standard.",
    D: "Materiality does not depend on the information coming from the CEO or CFO — source is separate from materiality."
  },
  "cfa-ethics-material-non-public-info-q09": {
    B: "Acting on public information is permitted; Standard II(A) restricts only material nonpublic information.",
    C: "Analyst consensus estimates are public and may be used freely.",
    D: "Historical price data is public information and is not restricted by II(A)."
  },
  "cfa-ethics-material-non-public-info-q10": {
    B: "Length has nothing to do with materiality; a one-line fact can be highly material.",
    C: "Information can be material even if it doesn't come from management — the test is investor importance, not source.",
    D: "If information is already widely known it is public, which is the opposite of the nonpublic half of the rule."
  },
  "cfa-ethics-material-non-public-info-q11": {
    B: "The mosaic theory does not license trading on any tip; a material nonpublic tip remains off-limits.",
    C: "Ignoring public disclosures is not what the theory allows — it is precisely public information that the analyst may combine.",
    D: "Sharing inside information with clients is a violation, not a permitted use of the mosaic theory."
  },
  "cfa-ethics-material-non-public-info-q12": {
    B: "Publishing independent research is encouraged, not prohibited, under the standard.",
    C: "Disclosing conflicts is required conduct, the opposite of a manipulation violation.",
    D: "Fair dealing with clients is a duty the standards require, not a prohibited practice."
  },

  // ─── UPSC · Polity · Fundamental Rights ──────────────────────────────────
  "upsc-polity-fundamental-rights-q01": {
    A: "Part II (Articles 5–11) deals with citizenship, not the Fundamental Rights.",
    B: "Part IVA (Article 51A) contains the Fundamental Duties, added by the 42nd Amendment — not the rights.",
    C: "Part IV (Articles 36–51) holds the Directive Principles of State Policy, which are non-justiciable, unlike the rights."
  },
  "upsc-polity-fundamental-rights-q02": {
    A: "Both statements are in fact correct, so 'neither' is wrong: property was originally a right and is now a legal right.",
    B: "Statement 1 is also true — the Right to Property was originally a Fundamental Right under Articles 19(1)(f) and 31.",
    C: "Statement 2 is also true — the 44th Amendment (1978) moved property to Article 300A as a legal right."
  },
  "upsc-polity-fundamental-rights-q03": {
    A: "Article 14 guarantees equality before the law, but Ambedkar reserved the 'heart and soul' phrase for the remedy that enforces all rights.",
    B: "Article 19 lists the six freedoms; it is protected by, but is not itself, the 'heart and soul' article.",
    D: "Article 21 protects life and personal liberty, but the enforcing right (Article 32) is the one Ambedkar so described."
  },
  "upsc-polity-fundamental-rights-q04": {
    B: "Five understates it — Article 19 originally listed seven and now guarantees six freedoms after the right to property was removed.",
    C: "Four is too few; six freedoms remain under Article 19(1).",
    D: "Seven was the original count before the 44th Amendment deleted the right to property, leaving six."
  },
  "upsc-polity-fundamental-rights-q05": {
    A: "Statement 1 is also correct — Articles 20 and 21 can never be suspended, even in an emergency (44th Amendment).",
    B: "Statement 2 is also correct — Habeas Corpus can be issued against both the state and private individuals.",
    D: "Both statements are true, so 'neither' is wrong."
  },
  "upsc-polity-fundamental-rights-q06": {
    A: "The 44th Amendment dealt with the right to property, not the right to education.",
    B: "The 73rd Amendment established Panchayati Raj institutions, unrelated to Article 21A.",
    C: "The 42nd Amendment made sweeping changes but did not insert the right to education; that was the 86th (2002)."
  },
  "upsc-polity-fundamental-rights-q07": {
    A: "Quo-Warranto questions a person's legal right to hold a public office, not the quashing of an order.",
    C: "Mandamus commands a public authority to perform a duty; it does not quash an existing order.",
    D: "Prohibition stops a lower court from exceeding its jurisdiction while a case is pending, whereas Certiorari quashes an order already passed."
  },
  "upsc-polity-fundamental-rights-q08": {
    B: "The UK has no codified bill of rights; India drew its justiciable Fundamental Rights from the US model.",
    C: "From Ireland India borrowed the Directive Principles, not the Fundamental Rights.",
    D: "From Canada India took the federal scheme with a strong centre, not the Fundamental Rights."
  },
  "upsc-polity-fundamental-rights-q09": {
    A: "'Soul of the Constitution' is a near-miss paraphrase; Ambedkar's exact words for Article 32 were 'heart and soul'.",
    B: "He called it the very opposite of a 'dead letter' — the provision that gives all other rights meaning.",
    C: "Far from minor, Article 32 is itself a Fundamental Right and the guarantor of the others."
  },
  "upsc-polity-fundamental-rights-q10": {
    A: "Mandamus orders a public official to do their duty; it does not free a detained person.",
    C: "Certiorari quashes an order of a lower court or tribunal, not an unlawful detention.",
    D: "Quo Warranto challenges the authority under which someone holds public office."
  },
  "upsc-polity-fundamental-rights-q11": {
    A: "The 42nd Amendment made many changes but did not remove property as a Fundamental Right.",
    C: "The 1st Amendment (1951) added reasonable restrictions and the Ninth Schedule, not the removal of property rights.",
    D: "The 73rd Amendment created Panchayati Raj and is unrelated to the right to property."
  },
  "upsc-polity-fundamental-rights-q12": {
    A: "Equality before the law is Article 14, not Article 21.",
    C: "The right against exploitation is Articles 23–24.",
    D: "Freedom of religion is Articles 25–28, distinct from Article 21's protection of life and liberty."
  },

  // ─── NEET · Biology · Cell: Structure & Function ─────────────────────────
  "neet-biology-cell-structure-function-q01": {
    A: "Ribosomes are the sites of protein synthesis, not ATP generation.",
    B: "Lysosomes carry out intracellular digestion; they don't produce the cell's energy.",
    C: "The Golgi apparatus packages and dispatches proteins; it isn't the powerhouse."
  },
  "neet-biology-cell-structure-function-q02": {
    B: "70S ribosomes are found in prokaryotes (and in mitochondria/chloroplasts), not the eukaryotic cytoplasm.",
    C: "50S is the large subunit of the prokaryotic 70S ribosome, not a complete eukaryotic ribosome.",
    D: "30S is the small subunit of the prokaryotic ribosome, not the eukaryotic cytoplasmic type."
  },
  "neet-biology-cell-structure-function-q03": {
    A: "Mitochondria occur in both plant and animal cells.",
    B: "The nucleus is present in both plant and animal eukaryotic cells.",
    C: "Ribosomes are universal to plant and animal cells alike."
  },
  "neet-biology-cell-structure-function-q04": {
    A: "Photosynthetic pigments are in chloroplasts, not lysosomes.",
    B: "Lysosomes are not the cell's DNA store; that is the nucleus (and some in mitochondria).",
    D: "Ribosomes synthesise protein; the digestive punch of a lysosome comes from hydrolytic enzymes."
  },
  "neet-biology-cell-structure-function-q05": {
    A: "Schleiden and Schwann proposed the cell theory, not the membrane model.",
    B: "Robert Hooke first described cells (in cork), long before membrane models existed.",
    D: "Watson and Crick described the structure of DNA, not the plasma membrane."
  },
  "neet-biology-cell-structure-function-q06": {
    A: "Cytoplasm is present in both prokaryotic and eukaryotic cells, so it cannot distinguish them.",
    B: "A plasma membrane surrounds both cell types.",
    C: "Ribosomes occur in both; the true distinction is the absence of a membrane-bound nucleus in prokaryotes."
  },
  "neet-biology-cell-structure-function-q07": {
    A: "DNA replication occurs in the nucleoplasm, not specifically in the nucleolus.",
    C: "Lipid synthesis is a function of the smooth endoplasmic reticulum, not the nucleolus.",
    D: "ATP is generated mainly in mitochondria, not the nucleolus."
  },
  "neet-biology-cell-structure-function-q08": {
    A: "Robert Hooke coined the term 'cell' but did not state that cells arise from pre-existing cells.",
    C: "Schwann co-founded cell theory but the 'omnis cellula e cellula' dictum is attributed to Virchow.",
    D: "Leeuwenhoek first observed living cells but did not formulate this principle."
  },
  "neet-biology-cell-structure-function-q09": {
    A: "Ribosomes make proteins; they are not the cell's powerhouse.",
    C: "The Golgi apparatus sorts and ships proteins, not the energy producer.",
    D: "Lysosomes handle digestion, not ATP synthesis."
  },
  "neet-biology-cell-structure-function-q10": {
    B: "The nucleus stores genetic material; it is not the digestive 'suicidal bag'.",
    C: "Peroxisomes handle detox and fatty-acid breakdown but aren't termed the suicidal bag.",
    D: "Vacuoles store water and solutes; lysosomes are the enzyme-filled suicidal bags."
  },
  "neet-biology-cell-structure-function-q11": {
    A: "Watson and Crick modelled DNA, not the plasma membrane.",
    C: "Robert Hooke observed cells; he did not propose the fluid-mosaic model.",
    D: "Schleiden and Schwann gave the cell theory, not the membrane model."
  },
  "neet-biology-cell-structure-function-q12": {
    A: "A true membrane-bound nucleus is the eukaryotic feature; prokaryotes lack it.",
    C: "Mitochondria are eukaryotic organelles absent from prokaryotes.",
    D: "The endoplasmic reticulum is a eukaryotic organelle, not a prokaryotic feature."
  }
};

/** All authored rationale batches, merged. Keys are disjoint across batches. */
export const distractorRationales: Record<string, Distractors> = {
  ...humanitiesDistractors,
  ...stemDistractors
};

/** Every option key present across all authored rationales (for tests/tooling). */
export const distractorOptionKeys: OptionKey[] = ["A", "B", "C", "D"];
