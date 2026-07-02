// NEET Biology depth expansion (round 2). Biology is half of NEET, so this adds
// the high-yield units the exam tests as distinct topics but which currently sit
// buried inside broader chapters: immunity, human genetic disorders, enzyme
// action, the special sense organs, and gametogenesis + the menstrual cycle.
// Each new topic has a study note and a full 12-question drill.
import type { AuthoredMaterial } from "./builder";
import type { Question, Topic } from "@jyotir/core";

export const bio2Topics: Topic[] = [
  // Biology (existing max orderIndex = 38)
  { id: "neet-biology-immunity-immune-system", subjectId: "neet-biology", name: "Immunity & the Immune System", slug: "immunity-immune-system", orderIndex: 39 },
  { id: "neet-biology-human-genetics-disorders", subjectId: "neet-biology", name: "Human Genetics & Genetic Disorders", slug: "human-genetics-disorders", orderIndex: 40 },
  { id: "neet-biology-enzymes", subjectId: "neet-biology", name: "Enzymes: Structure & Mechanism", slug: "enzymes", orderIndex: 41 },
  { id: "neet-biology-sense-organs-eye-ear", subjectId: "neet-biology", name: "Sense Organs: Eye & Ear", slug: "sense-organs-eye-ear", orderIndex: 42 },
  { id: "neet-biology-gametogenesis-menstrual-cycle", subjectId: "neet-biology", name: "Gametogenesis & Menstrual Cycle", slug: "gametogenesis-menstrual-cycle", orderIndex: 43 }
];

export const bio2Materials: AuthoredMaterial[] = [
  { id: "neet-biology-immunity-immune-system-m01", topicId: "neet-biology-immunity-immune-system", title: "Immunity & the Immune System", content: `**Immunity** is the ability to resist pathogens. It is **innate** (non-specific, present from birth) or **acquired** (specific, with memory).

## Innate vs Acquired
| Type | Features |
| --- | --- |
| **Innate** | Non-specific barriers: physical (skin, mucus), physiological (acid, saliva, tears), cellular (**neutrophils, macrophages, NK cells**), cytokine (**interferons**) |
| **Acquired** | Pathogen-specific, has **memory**; **humoral** (B-cells → antibodies) and **cell-mediated** (T-cells) |

## Antibodies
- Structure is **H₂L₂** — two heavy + two light chains, Y-shaped.
- **IgG** — most abundant, crosses the placenta; **IgM** — largest, first to appear; **IgA** — in secretions, milk (**colostrum**); **IgE** — allergy; **IgD**.

## Active vs Passive Immunity
| Active | Passive |
| --- | --- |
| Own body makes antibodies (infection/**vaccine**) | Ready-made antibodies given |
| Slow onset, **long-lasting**, has memory | Fast onset, **short-lived**, no memory |
| e.g., recovering from disease | e.g., mother→foetus (IgG), **colostrum** (IgA), **anti-venom** |

- **Vaccination** primes memory cells using weakened/inactivated antigens.
- **Allergy** = exaggerated **IgE**-mediated response (mast cells release **histamine**; treated with antihistamines).
- **Autoimmunity** = immune attack on self (e.g., rheumatoid arthritis). **AIDS** — HIV destroys **helper T (CD4⁺)** cells. Graft rejection is **cell-mediated**.
- **Lymphoid organs**: primary (**bone marrow, thymus**), secondary (**spleen, lymph nodes, tonsils, MALT, Peyer's patches**).`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "neet-biology-human-genetics-disorders-m01", topicId: "neet-biology-human-genetics-disorders", title: "Human Genetics & Genetic Disorders", content: `**Pedigree analysis** traces a trait through generations of a family. Human genetic disorders are **Mendelian** (single-gene) or **chromosomal** (change in chromosome number/structure).

## Mendelian Disorders
| Disorder | Inheritance | Defect |
| --- | --- | --- |
| **Haemophilia** | X-linked recessive | Blood fails to clot ('royal disease') |
| **Colour blindness** | X-linked recessive | Red-green defect |
| **Sickle-cell anaemia** | Autosomal recessive | HbS: **Glu→Val** at 6th position of β-globin |
| **Thalassemia** | Autosomal recessive | Reduced globin-chain synthesis |
| **Phenylketonuria (PKU)** | Autosomal recessive | Missing enzyme → phenylalanine builds up |

## Chromosomal Disorders (from non-disjunction)
| Disorder | Karyotype | Features |
| --- | --- | --- |
| **Down's syndrome** | Trisomy 21 (47) | Flat face, mental retardation (described by Langdon Down) |
| **Klinefelter's** | 47, **XXY** | Sterile male, gynaecomastia |
| **Turner's** | 45, **X0** | Sterile female, no ovaries |

## Sex Determination
- Humans have **46 chromosomes** (23 pairs): **22 autosomes + 1 sex pair**.
- **XX = female (homogametic), XY = male (heterogametic)** — the father's sperm decides the sex.
- **Aneuploidy** results from **non-disjunction** (failure of chromosomes to separate in meiosis).`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "neet-biology-enzymes-m01", topicId: "neet-biology-enzymes", title: "Enzymes: Structure & Mechanism", content: `**Enzymes** are biocatalysts — mostly **proteins** (some RNA = **ribozymes**) — that speed reactions by **lowering activation energy** without being consumed.

## Action
- Substrate binds the **active site**; models are **lock-and-key** and **induced fit**.
- Enzymes are highly **specific** and are not used up.

## Classification (six classes, IUB)
| Class | Reaction |
| --- | --- |
| **Oxidoreductases** | Oxidation–reduction |
| **Transferases** | Transfer of a group |
| **Hydrolases** | Hydrolysis (bond + water) |
| **Lyases** | Add/remove groups (not hydrolysis) |
| **Isomerases** | Rearrangement (isomers) |
| **Ligases** | Join molecules using ATP |

## Cofactors
- **Apoenzyme (protein) + cofactor = holoenzyme.**
- **Prosthetic groups** (tightly bound, e.g., heme), **coenzymes** (loosely bound organic, from vitamins — **NAD, FAD**), and **metal-ion activators**.

## Factors & Inhibition
- Activity peaks at an **optimum temperature** (~37 °C in humans) and **optimum pH** (pepsin acidic, trypsin alkaline); it rises with substrate concentration up to **V_max**.
- **Competitive inhibition** — inhibitor resembles the substrate and competes for the active site (e.g., **malonate** on succinate dehydrogenase); **non-competitive** — binds elsewhere.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "neet-biology-sense-organs-eye-ear-m01", topicId: "neet-biology-sense-organs-eye-ear", title: "Sense Organs: Eye & Ear", content: `The **eye** and **ear** are the special photo- and mechano-receptor organs.

## The Eye
- Three layers: **sclera** (outer; **cornea** in front), **choroid** (middle; **iris**, ciliary body, **lens**), and **retina** (inner; photoreceptors).
- **Rods** — dim-light/night vision, pigment **rhodopsin** (has vitamin A); **cones** — bright light and **colour** (three types).
- **Fovea (macula lutea)** — only cones, point of **sharpest vision**; **blind spot** — no receptors where the optic nerve leaves.
- **Aqueous humor** (front) and **vitreous humor** (back) maintain shape; the lens focuses by **accommodation** (ciliary muscles).

| Defect | Problem | Correction |
| --- | --- | --- |
| **Myopia** | Near-sighted | Concave lens |
| **Hypermetropia** | Far-sighted | Convex lens |
| **Presbyopia** | Ageing lens | Bifocal |
| **Cataract** | Opaque lens | Surgery |

## The Ear
- **Outer**: pinna, auditory canal, **tympanum (eardrum)**.
- **Middle**: three ossicles — **malleus, incus, stapes** — plus the **Eustachian tube** (equalises pressure).
- **Inner**: the **cochlea** (with the **organ of Corti** — hearing) and the **vestibular apparatus** (**semicircular canals, utricle, saccule** — balance/equilibrium). Fluids: **perilymph** and **endolymph**.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "neet-biology-gametogenesis-menstrual-cycle-m01", topicId: "neet-biology-gametogenesis-menstrual-cycle", title: "Gametogenesis & Menstrual Cycle", content: `**Gametogenesis** forms gametes by meiosis: **spermatogenesis** (sperm) and **oogenesis** (egg).

## Spermatogenesis
- Occurs in the **seminiferous tubules**: spermatogonium (2n) → primary spermatocyte (2n) → **meiosis I** → secondary spermatocyte (n) → **meiosis II** → spermatids → **spermiogenesis** → sperm.
- **Sertoli cells** nourish germ cells; **Leydig (interstitial) cells** secrete **testosterone**. Driven by **FSH** and **LH**.

## Oogenesis
- **Oogonia** form before birth; the **primary oocyte arrests in prophase I** until puberty.
- One oocyte matures per cycle: **meiosis I** completes at ovulation → **secondary oocyte** (+ first polar body); **meiosis II arrests at metaphase II** and finishes **only if fertilisation occurs**. One egg + polar bodies result (unequal division).

## Menstrual Cycle (~28 days)
| Phase | Days | Key events |
| --- | --- | --- |
| **Menstrual** | 1–5 | Endometrium shed (bleeding) |
| **Follicular/Proliferative** | 6–13 | **FSH** → follicle; **oestrogen** rebuilds endometrium |
| **Ovulation** | ~14 | **LH surge** releases the secondary oocyte |
| **Luteal/Secretory** | 15–28 | **Corpus luteum** → **progesterone** maintains endometrium |

- No fertilisation → corpus luteum degenerates → **menstruation**. **Menarche** = first period; **menopause** = cessation. Hormones: **FSH, LH** (pituitary); **oestrogen, progesterone** (ovary).`, estimatedReadTime: 2, orderIndex: 0 }
];

export const bio2Questions: Question[] = [
  // ── Immunity & the Immune System ──
  { id: "neet-biology-immunity-immune-system-q01", topicId: "neet-biology-immunity-immune-system", text: "Immunity present from birth and acting non-specifically is called:", optionA: "Innate immunity", optionB: "Acquired immunity", optionC: "Passive immunity", optionD: "Active immunity", correctOption: "A", explanation: "Innate immunity is the non-specific defence present from birth.", orderIndex: 0 },
  { id: "neet-biology-immunity-immune-system-q02", topicId: "neet-biology-immunity-immune-system", text: "Antibody-mediated (humoral) immunity is carried out by:", optionA: "B-lymphocytes", optionB: "T-lymphocytes", optionC: "Neutrophils", optionD: "Platelets", correctOption: "A", explanation: "B-cells produce antibodies, providing humoral immunity.", orderIndex: 1 },
  { id: "neet-biology-immunity-immune-system-q03", topicId: "neet-biology-immunity-immune-system", text: "An antibody molecule is made up of how many polypeptide chains?", optionA: "Four (two heavy, two light)", optionB: "Two", optionC: "Six", optionD: "One", correctOption: "A", explanation: "An antibody has the H₂L₂ structure — two heavy and two light chains.", orderIndex: 2 },
  { id: "neet-biology-immunity-immune-system-q04", topicId: "neet-biology-immunity-immune-system", text: "The antibody that can cross the placenta is:", optionA: "IgG", optionB: "IgM", optionC: "IgE", optionD: "IgA", correctOption: "A", explanation: "IgG is the most abundant antibody and the only one that crosses the placenta.", orderIndex: 3 },
  { id: "neet-biology-immunity-immune-system-q05", topicId: "neet-biology-immunity-immune-system", text: "Immunity acquired by receiving ready-made antibodies is:", optionA: "Passive immunity", optionB: "Active immunity", optionC: "Innate immunity", optionD: "Cellular immunity", correctOption: "A", explanation: "Passive immunity involves ready-made antibodies and is fast but short-lived.", orderIndex: 4 },
  { id: "neet-biology-immunity-immune-system-q06", topicId: "neet-biology-immunity-immune-system", text: "The antibody chiefly involved in allergic reactions is:", optionA: "IgE", optionB: "IgG", optionC: "IgM", optionD: "IgA", correctOption: "A", explanation: "IgE mediates allergic responses via mast cells releasing histamine.", orderIndex: 5 },
  { id: "neet-biology-immunity-immune-system-q07", topicId: "neet-biology-immunity-immune-system", text: "Vaccination produces which type of immunity?", optionA: "Active (artificially acquired)", optionB: "Passive", optionC: "Innate", optionD: "None", correctOption: "A", explanation: "A vaccine primes the body to make its own antibodies — active, long-lasting immunity.", orderIndex: 6 },
  { id: "neet-biology-immunity-immune-system-q08", topicId: "neet-biology-immunity-immune-system", text: "HIV, the cause of AIDS, mainly attacks which cells?", optionA: "Helper T-cells (CD4⁺)", optionB: "Red blood cells", optionC: "Platelets", optionD: "Neurons", correctOption: "A", explanation: "HIV destroys helper T (CD4⁺) cells, crippling the immune system.", orderIndex: 7 },
  { id: "neet-biology-immunity-immune-system-q09", topicId: "neet-biology-immunity-immune-system", text: "The primary lymphoid organs where lymphocytes mature are the:", optionA: "Bone marrow and thymus", optionB: "Spleen and tonsils", optionC: "Liver and pancreas", optionD: "Lymph nodes only", correctOption: "A", explanation: "The bone marrow and thymus are primary lymphoid organs for lymphocyte maturation.", orderIndex: 8 },
  { id: "neet-biology-immunity-immune-system-q10", topicId: "neet-biology-immunity-immune-system", text: "Ready-made antibodies passed from mother to infant through colostrum are chiefly:", optionA: "IgA", optionB: "IgG", optionC: "IgD", optionD: "IgM", correctOption: "A", explanation: "Colostrum is rich in IgA, giving the newborn passive immunity.", orderIndex: 9 },
  { id: "neet-biology-immunity-immune-system-q11", topicId: "neet-biology-immunity-immune-system", text: "When the immune system attacks the body's own cells, the condition is called:", optionA: "Autoimmunity", optionB: "Allergy", optionC: "Immunodeficiency", optionD: "Active immunity", correctOption: "A", explanation: "Autoimmunity is an immune attack on self, as in rheumatoid arthritis.", orderIndex: 10 },
  { id: "neet-biology-immunity-immune-system-q12", topicId: "neet-biology-immunity-immune-system", text: "The chemical released during an allergic reaction causing symptoms is:", optionA: "Histamine", optionB: "Insulin", optionC: "Thyroxine", optionD: "Adrenaline only", correctOption: "A", explanation: "Mast cells release histamine during allergy; antihistamines counter it.", orderIndex: 11 },

  // ── Human Genetics & Genetic Disorders ──
  { id: "neet-biology-human-genetics-disorders-q01", topicId: "neet-biology-human-genetics-disorders", text: "Down's syndrome is caused by an extra copy of chromosome:", optionA: "21", optionB: "18", optionC: "23", optionD: "13", correctOption: "A", explanation: "Down's syndrome is trisomy 21 — an extra chromosome 21 (47 total).", orderIndex: 0 },
  { id: "neet-biology-human-genetics-disorders-q02", topicId: "neet-biology-human-genetics-disorders", text: "Haemophilia is an example of a disorder that is:", optionA: "X-linked recessive", optionB: "Autosomal dominant", optionC: "Y-linked", optionD: "Mitochondrial", correctOption: "A", explanation: "Haemophilia is an X-linked recessive disorder of blood clotting.", orderIndex: 1 },
  { id: "neet-biology-human-genetics-disorders-q03", topicId: "neet-biology-human-genetics-disorders", text: "Sickle-cell anaemia results from the substitution of glutamic acid by:", optionA: "Valine", optionB: "Glycine", optionC: "Lysine", optionD: "Alanine", correctOption: "A", explanation: "In HbS, valine replaces glutamic acid at the 6th position of the β-globin chain.", orderIndex: 2 },
  { id: "neet-biology-human-genetics-disorders-q04", topicId: "neet-biology-human-genetics-disorders", text: "Klinefelter's syndrome has the sex-chromosome karyotype:", optionA: "XXY", optionB: "X0", optionC: "XYY", optionD: "XXX", correctOption: "A", explanation: "Klinefelter's syndrome is 47, XXY — a sterile male with feminine features.", orderIndex: 3 },
  { id: "neet-biology-human-genetics-disorders-q05", topicId: "neet-biology-human-genetics-disorders", text: "Turner's syndrome is characterised by the karyotype:", optionA: "45, X0", optionB: "47, XXY", optionC: "47, XX+21", optionD: "46, XY", correctOption: "A", explanation: "Turner's syndrome is 45, X0 — a sterile female with only one X chromosome.", orderIndex: 4 },
  { id: "neet-biology-human-genetics-disorders-q06", topicId: "neet-biology-human-genetics-disorders", text: "Sickle-cell anaemia and thalassemia are both inherited as:", optionA: "Autosomal recessive", optionB: "X-linked dominant", optionC: "Y-linked", optionD: "Autosomal dominant", correctOption: "A", explanation: "Both sickle-cell anaemia and thalassemia are autosomal recessive disorders.", orderIndex: 5 },
  { id: "neet-biology-human-genetics-disorders-q07", topicId: "neet-biology-human-genetics-disorders", text: "In humans, the sex of the child is determined by the:", optionA: "Father's sperm (X or Y)", optionB: "Mother's egg", optionC: "Both eggs equally", optionD: "Number of chromosomes", correctOption: "A", explanation: "The father is heterogametic (XY); his sperm (X or Y) determines the child's sex.", orderIndex: 6 },
  { id: "neet-biology-human-genetics-disorders-q08", topicId: "neet-biology-human-genetics-disorders", text: "The failure of chromosomes to separate during meiosis, causing aneuploidy, is:", optionA: "Non-disjunction", optionB: "Crossing over", optionC: "Translocation", optionD: "Duplication", correctOption: "A", explanation: "Non-disjunction is the failure of homologous chromosomes/chromatids to separate.", orderIndex: 7 },
  { id: "neet-biology-human-genetics-disorders-q09", topicId: "neet-biology-human-genetics-disorders", text: "The study of the inheritance of a trait across generations of a family is:", optionA: "Pedigree analysis", optionB: "Karyotyping", optionC: "Cloning", optionD: "Gene therapy", correctOption: "A", explanation: "Pedigree analysis traces how a trait is inherited through a family tree.", orderIndex: 8 },
  { id: "neet-biology-human-genetics-disorders-q10", topicId: "neet-biology-human-genetics-disorders", text: "A normal human somatic cell contains how many autosomes?", optionA: "44", optionB: "46", optionC: "22", optionD: "23", correctOption: "A", explanation: "Humans have 22 pairs (44) autosomes plus one pair of sex chromosomes.", orderIndex: 9 },
  { id: "neet-biology-human-genetics-disorders-q11", topicId: "neet-biology-human-genetics-disorders", text: "Phenylketonuria (PKU) is caused by the lack of an enzyme that converts:", optionA: "Phenylalanine to tyrosine", optionB: "Glucose to glycogen", optionC: "Lactose to glucose", optionD: "Fat to glycerol", correctOption: "A", explanation: "In PKU the enzyme converting phenylalanine to tyrosine is missing, so phenylalanine accumulates.", orderIndex: 10 },
  { id: "neet-biology-human-genetics-disorders-q12", topicId: "neet-biology-human-genetics-disorders", text: "Colour blindness in humans is generally:", optionA: "X-linked recessive", optionB: "Autosomal dominant", optionC: "Y-linked", optionD: "Autosomal recessive", correctOption: "A", explanation: "Red-green colour blindness is an X-linked recessive trait, more common in males.", orderIndex: 11 },

  // ── Enzymes: Structure & Mechanism ──
  { id: "neet-biology-enzymes-q01", topicId: "neet-biology-enzymes", text: "Enzymes speed up reactions by:", optionA: "Lowering the activation energy", optionB: "Raising the activation energy", optionC: "Increasing temperature", optionD: "Being consumed in the reaction", correctOption: "A", explanation: "Enzymes lower activation energy without being consumed.", orderIndex: 0 },
  { id: "neet-biology-enzymes-q02", topicId: "neet-biology-enzymes", text: "Chemically, most enzymes are:", optionA: "Proteins", optionB: "Lipids", optionC: "Carbohydrates", optionD: "Nucleotides", correctOption: "A", explanation: "Most enzymes are proteins; a few RNA molecules (ribozymes) are also catalytic.", orderIndex: 1 },
  { id: "neet-biology-enzymes-q03", topicId: "neet-biology-enzymes", text: "The region of an enzyme where the substrate binds is the:", optionA: "Active site", optionB: "Allosteric site only", optionC: "Peptide bond", optionD: "Disulphide bridge", correctOption: "A", explanation: "The substrate binds at the enzyme's active site.", orderIndex: 2 },
  { id: "neet-biology-enzymes-q04", topicId: "neet-biology-enzymes", text: "RNA molecules that act as biological catalysts are called:", optionA: "Ribozymes", optionB: "Coenzymes", optionC: "Apoenzymes", optionD: "Isozymes", correctOption: "A", explanation: "Ribozymes are catalytic RNA molecules.", orderIndex: 3 },
  { id: "neet-biology-enzymes-q05", topicId: "neet-biology-enzymes", text: "Enzymes that catalyse oxidation-reduction reactions belong to the class:", optionA: "Oxidoreductases", optionB: "Hydrolases", optionC: "Ligases", optionD: "Isomerases", correctOption: "A", explanation: "Oxidoreductases catalyse oxidation-reduction reactions.", orderIndex: 4 },
  { id: "neet-biology-enzymes-q06", topicId: "neet-biology-enzymes", text: "A complete, active enzyme (protein plus cofactor) is called a:", optionA: "Holoenzyme", optionB: "Apoenzyme", optionC: "Coenzyme", optionD: "Zymogen", correctOption: "A", explanation: "Apoenzyme (protein) + cofactor = holoenzyme (the active enzyme).", orderIndex: 5 },
  { id: "neet-biology-enzymes-q07", topicId: "neet-biology-enzymes", text: "Loosely bound organic cofactors, often derived from vitamins, are:", optionA: "Coenzymes", optionB: "Prosthetic groups", optionC: "Metal ions", optionD: "Substrates", correctOption: "A", explanation: "Coenzymes (e.g., NAD, FAD) are loosely bound organic cofactors from vitamins.", orderIndex: 6 },
  { id: "neet-biology-enzymes-q08", topicId: "neet-biology-enzymes", text: "The 'lock-and-key' and 'induced fit' concepts describe enzyme:", optionA: "Substrate binding/specificity", optionB: "Denaturation", optionC: "Synthesis", optionD: "Excretion", correctOption: "A", explanation: "Both models describe how a specific substrate fits the enzyme's active site.", orderIndex: 7 },
  { id: "neet-biology-enzymes-q09", topicId: "neet-biology-enzymes", text: "Malonate inhibiting succinate dehydrogenase by resembling the substrate is an example of:", optionA: "Competitive inhibition", optionB: "Non-competitive inhibition", optionC: "Feedback activation", optionD: "Denaturation", correctOption: "A", explanation: "Malonate competes with succinate for the active site — competitive inhibition.", orderIndex: 8 },
  { id: "neet-biology-enzymes-q10", topicId: "neet-biology-enzymes", text: "Human enzymes generally work best at a temperature of about:", optionA: "37 °C", optionB: "0 °C", optionC: "100 °C", optionD: "60 °C", correctOption: "A", explanation: "Most human enzymes have an optimum around body temperature, ~37 °C.", orderIndex: 9 },
  { id: "neet-biology-enzymes-q11", topicId: "neet-biology-enzymes", text: "The stomach enzyme pepsin works best in which pH range?", optionA: "Acidic", optionB: "Neutral", optionC: "Strongly alkaline", optionD: "Any pH", correctOption: "A", explanation: "Pepsin has an acidic optimum pH (~1.5–2), suited to the stomach.", orderIndex: 10 },
  { id: "neet-biology-enzymes-q12", topicId: "neet-biology-enzymes", text: "Enzymes of the class 'ligases' catalyse the:", optionA: "Joining of two molecules using ATP", optionB: "Hydrolysis of bonds", optionC: "Rearrangement into isomers", optionD: "Removal of groups", correctOption: "A", explanation: "Ligases join two molecules together, typically using ATP.", orderIndex: 11 },

  // ── Sense Organs: Eye & Ear ──
  { id: "neet-biology-sense-organs-eye-ear-q01", topicId: "neet-biology-sense-organs-eye-ear", text: "The photoreceptor cells responsible for dim-light (night) vision are the:", optionA: "Rods", optionB: "Cones", optionC: "Bipolar cells", optionD: "Ganglion cells", correctOption: "A", explanation: "Rods, containing rhodopsin, function in dim light; cones handle colour and bright light.", orderIndex: 0 },
  { id: "neet-biology-sense-organs-eye-ear-q02", topicId: "neet-biology-sense-organs-eye-ear", text: "Colour vision in the human eye is due to the:", optionA: "Cones", optionB: "Rods", optionC: "Cornea", optionD: "Sclera", correctOption: "A", explanation: "Cones detect colour; there are three types sensitive to different wavelengths.", orderIndex: 1 },
  { id: "neet-biology-sense-organs-eye-ear-q03", topicId: "neet-biology-sense-organs-eye-ear", text: "The region of sharpest vision in the retina, containing only cones, is the:", optionA: "Fovea (macula lutea)", optionB: "Blind spot", optionC: "Optic disc", optionD: "Ciliary body", correctOption: "A", explanation: "The fovea (in the macula lutea) has only cones and gives the sharpest vision.", orderIndex: 2 },
  { id: "neet-biology-sense-organs-eye-ear-q04", topicId: "neet-biology-sense-organs-eye-ear", text: "The visual pigment present in the rods is:", optionA: "Rhodopsin", optionB: "Melanin", optionC: "Haemoglobin", optionD: "Chlorophyll", correctOption: "A", explanation: "Rods contain rhodopsin (visual purple), derived from vitamin A.", orderIndex: 3 },
  { id: "neet-biology-sense-organs-eye-ear-q05", topicId: "neet-biology-sense-organs-eye-ear", text: "Myopia (short-sightedness) is corrected using a:", optionA: "Concave lens", optionB: "Convex lens", optionC: "Cylindrical lens", optionD: "Plane mirror", correctOption: "A", explanation: "Myopia is corrected with a concave (diverging) lens.", orderIndex: 4 },
  { id: "neet-biology-sense-organs-eye-ear-q06", topicId: "neet-biology-sense-organs-eye-ear", text: "Hypermetropia (long-sightedness) is corrected using a:", optionA: "Convex lens", optionB: "Concave lens", optionC: "Bifocal only", optionD: "Prism", correctOption: "A", explanation: "Hypermetropia is corrected with a convex (converging) lens.", orderIndex: 5 },
  { id: "neet-biology-sense-organs-eye-ear-q07", topicId: "neet-biology-sense-organs-eye-ear", text: "The three ear ossicles in correct order from the eardrum are:", optionA: "Malleus, incus, stapes", optionB: "Stapes, incus, malleus", optionC: "Incus, malleus, stapes", optionD: "Cochlea, utricle, saccule", correctOption: "A", explanation: "Sound passes eardrum → malleus → incus → stapes → oval window.", orderIndex: 6 },
  { id: "neet-biology-sense-organs-eye-ear-q08", topicId: "neet-biology-sense-organs-eye-ear", text: "The hearing receptor in the inner ear is the:", optionA: "Organ of Corti", optionB: "Semicircular canal", optionC: "Utricle", optionD: "Eustachian tube", correctOption: "A", explanation: "The organ of Corti in the cochlea converts sound vibrations into nerve impulses.", orderIndex: 7 },
  { id: "neet-biology-sense-organs-eye-ear-q09", topicId: "neet-biology-sense-organs-eye-ear", text: "Balance and equilibrium are controlled by which part of the inner ear?", optionA: "The vestibular apparatus (semicircular canals)", optionB: "The cochlea", optionC: "The tympanum", optionD: "The pinna", correctOption: "A", explanation: "The vestibular apparatus — semicircular canals, utricle, saccule — maintains balance.", orderIndex: 8 },
  { id: "neet-biology-sense-organs-eye-ear-q10", topicId: "neet-biology-sense-organs-eye-ear", text: "The tube that equalises air pressure across the eardrum is the:", optionA: "Eustachian tube", optionB: "Fallopian tube", optionC: "Bronchus", optionD: "Ureter", correctOption: "A", explanation: "The Eustachian tube connects the middle ear to the pharynx and equalises pressure.", orderIndex: 9 },
  { id: "neet-biology-sense-organs-eye-ear-q11", topicId: "neet-biology-sense-organs-eye-ear", text: "The 'blind spot' of the eye is the point where:", optionA: "The optic nerve leaves the retina (no receptors)", optionB: "Cones are most dense", optionC: "The lens attaches", optionD: "Tears are produced", correctOption: "A", explanation: "The blind spot has no photoreceptors because the optic nerve exits there.", orderIndex: 10 },
  { id: "neet-biology-sense-organs-eye-ear-q12", topicId: "neet-biology-sense-organs-eye-ear", text: "Focusing the lens for near and far objects is called:", optionA: "Accommodation", optionB: "Adaptation", optionC: "Refraction only", optionD: "Diffraction", correctOption: "A", explanation: "Accommodation is the adjustment of lens curvature by the ciliary muscles to focus.", orderIndex: 11 },

  // ── Gametogenesis & Menstrual Cycle ──
  { id: "neet-biology-gametogenesis-menstrual-cycle-q01", topicId: "neet-biology-gametogenesis-menstrual-cycle", text: "Spermatogenesis takes place in the:", optionA: "Seminiferous tubules", optionB: "Epididymis", optionC: "Prostate gland", optionD: "Urethra", correctOption: "A", explanation: "Sperm are produced in the seminiferous tubules of the testes.", orderIndex: 0 },
  { id: "neet-biology-gametogenesis-menstrual-cycle-q02", topicId: "neet-biology-gametogenesis-menstrual-cycle", text: "The cells that nourish developing sperm are the:", optionA: "Sertoli cells", optionB: "Leydig cells", optionC: "Red blood cells", optionD: "Granulosa cells", correctOption: "A", explanation: "Sertoli cells nourish the germ cells; Leydig cells make testosterone.", orderIndex: 1 },
  { id: "neet-biology-gametogenesis-menstrual-cycle-q03", topicId: "neet-biology-gametogenesis-menstrual-cycle", text: "Testosterone is secreted by which cells of the testis?", optionA: "Leydig (interstitial) cells", optionB: "Sertoli cells", optionC: "Spermatogonia", optionD: "Spermatids", correctOption: "A", explanation: "Leydig (interstitial) cells secrete the male hormone testosterone.", orderIndex: 2 },
  { id: "neet-biology-gametogenesis-menstrual-cycle-q04", topicId: "neet-biology-gametogenesis-menstrual-cycle", text: "In oogenesis, the primary oocyte is arrested in which stage until puberty?", optionA: "Prophase I", optionB: "Metaphase II", optionC: "Anaphase I", optionD: "Telophase II", correctOption: "A", explanation: "The primary oocyte remains arrested in prophase I of meiosis until puberty.", orderIndex: 3 },
  { id: "neet-biology-gametogenesis-menstrual-cycle-q05", topicId: "neet-biology-gametogenesis-menstrual-cycle", text: "The secondary oocyte completes meiosis II only when:", optionA: "Fertilisation occurs", optionB: "Ovulation begins", optionC: "Menstruation starts", optionD: "Puberty begins", correctOption: "A", explanation: "Meiosis II of the secondary oocyte is completed only if a sperm fertilises it.", orderIndex: 4 },
  { id: "neet-biology-gametogenesis-menstrual-cycle-q06", topicId: "neet-biology-gametogenesis-menstrual-cycle", text: "Ovulation in a typical 28-day menstrual cycle occurs around day:", optionA: "14", optionB: "1", optionC: "5", optionD: "28", correctOption: "A", explanation: "Ovulation usually occurs around the middle of the cycle, about day 14.", orderIndex: 5 },
  { id: "neet-biology-gametogenesis-menstrual-cycle-q07", topicId: "neet-biology-gametogenesis-menstrual-cycle", text: "The surge of which hormone triggers ovulation?", optionA: "Luteinising hormone (LH)", optionB: "Progesterone", optionC: "Insulin", optionD: "Prolactin", correctOption: "A", explanation: "A mid-cycle surge of LH triggers the release of the secondary oocyte.", orderIndex: 6 },
  { id: "neet-biology-gametogenesis-menstrual-cycle-q08", topicId: "neet-biology-gametogenesis-menstrual-cycle", text: "After ovulation, the ruptured follicle becomes the:", optionA: "Corpus luteum", optionB: "Graafian follicle", optionC: "Corpus albicans immediately", optionD: "Zona pellucida", correctOption: "A", explanation: "The empty follicle becomes the corpus luteum, which secretes progesterone.", orderIndex: 7 },
  { id: "neet-biology-gametogenesis-menstrual-cycle-q09", topicId: "neet-biology-gametogenesis-menstrual-cycle", text: "The hormone secreted by the corpus luteum to maintain the endometrium is:", optionA: "Progesterone", optionB: "FSH", optionC: "Oestrogen only", optionD: "Oxytocin", correctOption: "A", explanation: "The corpus luteum secretes progesterone, which maintains the uterine lining.", orderIndex: 8 },
  { id: "neet-biology-gametogenesis-menstrual-cycle-q10", topicId: "neet-biology-gametogenesis-menstrual-cycle", text: "The first menstruation at puberty is called:", optionA: "Menarche", optionB: "Menopause", optionC: "Ovulation", optionD: "Gestation", correctOption: "A", explanation: "Menarche is the first menstrual period; menopause is the cessation of menstruation.", orderIndex: 9 },
  { id: "neet-biology-gametogenesis-menstrual-cycle-q11", topicId: "neet-biology-gametogenesis-menstrual-cycle", text: "One primary oocyte undergoing oogenesis finally produces:", optionA: "One ovum (and polar bodies)", optionB: "Four functional ova", optionC: "Two ova", optionD: "Eight ova", correctOption: "A", explanation: "Oogenesis is unequal — one functional ovum plus non-functional polar bodies form.", orderIndex: 10 },
  { id: "neet-biology-gametogenesis-menstrual-cycle-q12", topicId: "neet-biology-gametogenesis-menstrual-cycle", text: "If fertilisation does not occur, the fall in progesterone leads to:", optionA: "Menstruation (shedding of the endometrium)", optionB: "Ovulation", optionC: "Pregnancy", optionD: "Menarche", correctOption: "A", explanation: "Without fertilisation the corpus luteum degenerates; falling progesterone triggers menstruation.", orderIndex: 11 }
];
