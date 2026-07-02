// NEET Chemistry depth expansion (round 2). Adds the Solid State chapter (a
// genuine NCERT gap — no crystal-lattice content existed) and a dedicated
// Nomenclature & Isomerism topic (isomerism is heavily tested and distinct from
// the electronic-effects focus of the existing GOC topic). Each has a study
// note and a full 12-question drill.
import type { AuthoredMaterial } from "./builder";
import type { Question, Topic } from "@jyotir/core";

export const chem2Topics: Topic[] = [
  // Chemistry (existing max orderIndex = 28)
  { id: "neet-chemistry-solid-state", subjectId: "neet-chemistry", name: "The Solid State", slug: "solid-state", orderIndex: 29 },
  { id: "neet-chemistry-nomenclature-isomerism", subjectId: "neet-chemistry", name: "Nomenclature & Isomerism", slug: "nomenclature-isomerism", orderIndex: 30 }
];

export const chem2Materials: AuthoredMaterial[] = [
  { id: "neet-chemistry-solid-state-m01", topicId: "neet-chemistry-solid-state", title: "The Solid State", content: `Solids are **crystalline** (long-range order, sharp melting point, **anisotropic** — e.g., NaCl, diamond) or **amorphous** (short-range order, no sharp melting point, **isotropic** — e.g., glass, rubber).

## Cubic Unit Cells
| Type | Atoms/cell (z) | Coordination no. | Packing efficiency |
| --- | --- | --- | --- |
| **Simple (primitive)** | 1 | 6 | 52.4% |
| **Body-centred (BCC)** | 2 | 8 | 68% |
| **Face-centred (FCC/CCP)** | 4 | 12 | 74% |

- **Contributions**: a corner atom counts **1/8**, a face atom **1/2**, an edge atom **1/4**, and a body-centre atom **1**.
- **hcp and ccp (= fcc)** are close-packed with **74%** efficiency; close packing creates **tetrahedral** and **octahedral voids**.

## Density
\`\`\`
d = (z · M) / (a³ · N_A)
\`\`\`
where z = atoms per cell, M = molar mass, a = edge length, N_A = Avogadro's number.

## Point Defects
| Defect | Description | Effect |
| --- | --- | --- |
| **Schottky** | Equal cation + anion vacancies | **Density decreases** (e.g., NaCl, KCl) |
| **Frenkel** | Cation moves to an interstitial site | **Density unchanged** (e.g., AgCl, ZnS) |

- **Electrical**: conductors, insulators, and **semiconductors** (doped **n-type** with group-15, **p-type** with group-13 elements).
- **Magnetic**: **paramagnetic, diamagnetic, ferromagnetic, ferrimagnetic, antiferromagnetic**.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "neet-chemistry-nomenclature-isomerism-m01", topicId: "neet-chemistry-nomenclature-isomerism", title: "Nomenclature & Isomerism", content: `**IUPAC names** combine a **root** (chain length: meth-, eth-, prop-, but-, pent-…), a **suffix** (principal functional group), and **prefixes** (substituents, numbered for lowest locants).

## Functional-Group Priority (highest first)
Carboxylic acid **>** ester **>** amide **>** nitrile **>** aldehyde **>** ketone **>** alcohol **>** amine. The senior group gets the suffix; the rest become prefixes.

## Isomerism
Isomers share a **molecular formula** but differ in structure or arrangement.

### Structural (constitutional)
| Type | Difference |
| --- | --- |
| **Chain** | Branching of the carbon skeleton |
| **Position** | Position of a group / multiple bond |
| **Functional** | Different functional group (e.g., alcohol vs ether) |
| **Metamerism** | Different alkyl groups around a functional group |
| **Tautomerism** | Dynamic keto–enol (etc.) interconversion |

### Stereoisomerism
- **Geometrical (cis–trans / E–Z)** — needs **restricted rotation** (a C=C double bond or ring); each doubly-bonded carbon must bear two different groups.
- **Optical** — a **chiral carbon** (four different groups) gives **non-superimposable mirror images (enantiomers)** that rotate plane-polarised light. A 50:50 mix is a **racemate**; internally compensated forms are **meso**. The number of optical isomers = **2ⁿ** (n = chiral centres).`, estimatedReadTime: 2, orderIndex: 0 }
];

export const chem2Questions: Question[] = [
  // ── The Solid State ──
  { id: "neet-chemistry-solid-state-q01", topicId: "neet-chemistry-solid-state", text: "A solid with a sharp melting point and long-range order is:", optionA: "Crystalline", optionB: "Amorphous", optionC: "A supercooled liquid", optionD: "A gas", correctOption: "A", explanation: "Crystalline solids have long-range order and a sharp, definite melting point.", orderIndex: 0 },
  { id: "neet-chemistry-solid-state-q02", topicId: "neet-chemistry-solid-state", text: "Glass is an example of which type of solid?", optionA: "Amorphous", optionB: "Ionic crystalline", optionC: "Metallic", optionD: "Covalent network", correctOption: "A", explanation: "Glass is amorphous — it lacks long-range order and softens over a range.", orderIndex: 1 },
  { id: "neet-chemistry-solid-state-q03", topicId: "neet-chemistry-solid-state", text: "The number of atoms per unit cell in a face-centred cubic (FCC) lattice is:", optionA: "4", optionB: "1", optionC: "2", optionD: "8", correctOption: "A", explanation: "FCC has 8×1/8 (corners) + 6×1/2 (faces) = 4 atoms per unit cell.", orderIndex: 2 },
  { id: "neet-chemistry-solid-state-q04", topicId: "neet-chemistry-solid-state", text: "A body-centred cubic (BCC) unit cell contains how many atoms?", optionA: "2", optionB: "1", optionC: "4", optionD: "6", correctOption: "A", explanation: "BCC has 8×1/8 (corners) + 1 (body centre) = 2 atoms per unit cell.", orderIndex: 3 },
  { id: "neet-chemistry-solid-state-q05", topicId: "neet-chemistry-solid-state", text: "The packing efficiency of a face-centred cubic (close-packed) structure is:", optionA: "74%", optionB: "68%", optionC: "52.4%", optionD: "100%", correctOption: "A", explanation: "FCC (ccp) and hcp are close-packed with 74% packing efficiency.", orderIndex: 4 },
  { id: "neet-chemistry-solid-state-q06", topicId: "neet-chemistry-solid-state", text: "A corner atom in a cubic unit cell contributes what fraction to the cell?", optionA: "1/8", optionB: "1/2", optionC: "1/4", optionD: "1", correctOption: "A", explanation: "A corner atom is shared among 8 cells, contributing 1/8 to each.", orderIndex: 5 },
  { id: "neet-chemistry-solid-state-q07", topicId: "neet-chemistry-solid-state", text: "The coordination number in a simple (primitive) cubic lattice is:", optionA: "6", optionB: "8", optionC: "12", optionD: "4", correctOption: "A", explanation: "In a simple cubic lattice each atom touches 6 neighbours.", orderIndex: 6 },
  { id: "neet-chemistry-solid-state-q08", topicId: "neet-chemistry-solid-state", text: "A Schottky defect in an ionic crystal results in:", optionA: "A decrease in density", optionB: "An increase in density", optionC: "No change in mass", optionD: "Increased coordination number", correctOption: "A", explanation: "Schottky defects remove equal cations and anions, lowering the density.", orderIndex: 7 },
  { id: "neet-chemistry-solid-state-q09", topicId: "neet-chemistry-solid-state", text: "In a Frenkel defect, the density of the crystal:", optionA: "Remains unchanged", optionB: "Decreases sharply", optionC: "Increases sharply", optionD: "Becomes zero", correctOption: "A", explanation: "In a Frenkel defect an ion merely shifts to an interstitial site, so density is unchanged.", orderIndex: 8 },
  { id: "neet-chemistry-solid-state-q10", topicId: "neet-chemistry-solid-state", text: "Doping silicon with a group-15 element (e.g., phosphorus) gives a:", optionA: "n-type semiconductor", optionB: "p-type semiconductor", optionC: "Perfect insulator", optionD: "Superconductor", correctOption: "A", explanation: "Group-15 dopants add extra electrons, giving an n-type semiconductor.", orderIndex: 9 },
  { id: "neet-chemistry-solid-state-q11", topicId: "neet-chemistry-solid-state", text: "In the density formula d = zM/(a³N_A), the symbol 'z' represents:", optionA: "Number of atoms per unit cell", optionB: "Edge length", optionC: "Molar mass", optionD: "Avogadro's number", correctOption: "A", explanation: "'z' is the number of formula units (atoms) per unit cell.", orderIndex: 10 },
  { id: "neet-chemistry-solid-state-q12", topicId: "neet-chemistry-solid-state", text: "Crystalline solids are anisotropic, meaning their properties:", optionA: "Vary with direction", optionB: "Are the same in all directions", optionC: "Do not exist", optionD: "Change with time only", correctOption: "A", explanation: "Anisotropy means physical properties differ along different directions in the crystal.", orderIndex: 11 },

  // ── Nomenclature & Isomerism ──
  { id: "neet-chemistry-nomenclature-isomerism-q01", topicId: "neet-chemistry-nomenclature-isomerism", text: "Compounds with the same molecular formula but different structures are called:", optionA: "Isomers", optionB: "Isotopes", optionC: "Isobars", optionD: "Allotropes", correctOption: "A", explanation: "Isomers share a molecular formula but differ in structure or arrangement.", orderIndex: 0 },
  { id: "neet-chemistry-nomenclature-isomerism-q02", topicId: "neet-chemistry-nomenclature-isomerism", text: "n-Butane and isobutane are examples of which isomerism?", optionA: "Chain isomerism", optionB: "Position isomerism", optionC: "Functional isomerism", optionD: "Optical isomerism", correctOption: "A", explanation: "They differ in carbon-skeleton branching — chain isomerism.", orderIndex: 1 },
  { id: "neet-chemistry-nomenclature-isomerism-q03", topicId: "neet-chemistry-nomenclature-isomerism", text: "Ethanol (an alcohol) and dimethyl ether have the same formula C₂H₆O — this is:", optionA: "Functional isomerism", optionB: "Chain isomerism", optionC: "Metamerism", optionD: "Geometrical isomerism", correctOption: "A", explanation: "Different functional groups (alcohol vs ether) with the same formula is functional isomerism.", orderIndex: 2 },
  { id: "neet-chemistry-nomenclature-isomerism-q04", topicId: "neet-chemistry-nomenclature-isomerism", text: "Geometrical (cis–trans) isomerism requires:", optionA: "Restricted rotation (a C=C double bond or ring)", optionB: "A chiral carbon", optionC: "A free radical", optionD: "A benzene ring only", correctOption: "A", explanation: "Geometrical isomerism arises when rotation is restricted, as around a C=C bond.", orderIndex: 3 },
  { id: "neet-chemistry-nomenclature-isomerism-q05", topicId: "neet-chemistry-nomenclature-isomerism", text: "A carbon atom bonded to four different groups is described as:", optionA: "Chiral (asymmetric)", optionB: "Achiral", optionC: "Aromatic", optionD: "Quaternary and symmetric", correctOption: "A", explanation: "A chiral (asymmetric) carbon has four different groups, giving optical isomers.", orderIndex: 4 },
  { id: "neet-chemistry-nomenclature-isomerism-q06", topicId: "neet-chemistry-nomenclature-isomerism", text: "Non-superimposable mirror-image isomers are called:", optionA: "Enantiomers", optionB: "Diastereomers", optionC: "Metamers", optionD: "Tautomers", correctOption: "A", explanation: "Enantiomers are non-superimposable mirror images that rotate light oppositely.", orderIndex: 5 },
  { id: "neet-chemistry-nomenclature-isomerism-q07", topicId: "neet-chemistry-nomenclature-isomerism", text: "For a molecule with n chiral centres, the maximum number of optical isomers is:", optionA: "2ⁿ", optionB: "n²", optionC: "2n", optionD: "n/2", correctOption: "A", explanation: "The maximum number of optical isomers is 2ⁿ, where n is the number of chiral centres.", orderIndex: 6 },
  { id: "neet-chemistry-nomenclature-isomerism-q08", topicId: "neet-chemistry-nomenclature-isomerism", text: "An equimolar mixture of two enantiomers that is optically inactive is called a:", optionA: "Racemic mixture", optionB: "Meso compound", optionC: "Diastereomer", optionD: "Tautomer", correctOption: "A", explanation: "A racemic (±) mixture is a 50:50 mix of enantiomers and is optically inactive.", orderIndex: 7 },
  { id: "neet-chemistry-nomenclature-isomerism-q09", topicId: "neet-chemistry-nomenclature-isomerism", text: "The dynamic interconversion between keto and enol forms is:", optionA: "Tautomerism", optionB: "Metamerism", optionC: "Chain isomerism", optionD: "Geometrical isomerism", correctOption: "A", explanation: "Keto–enol tautomerism is a rapid interconversion of structural isomers.", orderIndex: 8 },
  { id: "neet-chemistry-nomenclature-isomerism-q10", topicId: "neet-chemistry-nomenclature-isomerism", text: "In IUPAC nomenclature, which functional group has the highest priority for the suffix?", optionA: "Carboxylic acid", optionB: "Alcohol", optionC: "Aldehyde", optionD: "Amine", correctOption: "A", explanation: "Carboxylic acid ranks highest among these for the principal characteristic (suffix) group.", orderIndex: 9 },
  { id: "neet-chemistry-nomenclature-isomerism-q11", topicId: "neet-chemistry-nomenclature-isomerism", text: "The IUPAC root word for a four-carbon chain is:", optionA: "But", optionB: "Prop", optionC: "Pent", optionD: "Eth", correctOption: "A", explanation: "The roots run meth (1), eth (2), prop (3), but (4), pent (5)…", orderIndex: 10 },
  { id: "neet-chemistry-nomenclature-isomerism-q12", topicId: "neet-chemistry-nomenclature-isomerism", text: "An optically inactive stereoisomer with chiral centres but an internal plane of symmetry is a:", optionA: "Meso compound", optionB: "Racemic mixture", optionC: "Enantiomer", optionD: "Metamer", correctOption: "A", explanation: "A meso compound has chiral centres but is achiral overall due to internal symmetry.", orderIndex: 11 }
];
