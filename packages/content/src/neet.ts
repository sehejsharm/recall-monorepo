import { defineBundle } from "./builder";
import { bioTopics, bioMaterials, bioQuestions } from "./neet-exp-bio";

export const neet = defineBundle({
  exam: {
    id: "neet",
    slug: "neet",
    name: "NEET UG",
    tagline: "Biology · Chemistry · Physics for medical aspirants",
    orderIndex: 2
  },
  subjects: [
    { id: "neet-biology", examId: "neet", name: "Biology", slug: "biology", orderIndex: 0 },
    { id: "neet-chemistry", examId: "neet", name: "Chemistry", slug: "chemistry", orderIndex: 1 },
    { id: "neet-physics", examId: "neet", name: "Physics", slug: "physics", orderIndex: 2 }
  ],
  topics: [
    {
      id: "neet-biology-cell-structure-function",
      subjectId: "neet-biology",
      name: "Cell: Structure & Function",
      slug: "cell-structure-function",
      orderIndex: 0
    },
    {
      id: "neet-biology-human-physiology-digestion",
      subjectId: "neet-biology",
      name: "Human Physiology — Digestion",
      slug: "human-physiology-digestion",
      orderIndex: 1
    },
    {
      id: "neet-chemistry-organic-chemistry-basics",
      subjectId: "neet-chemistry",
      name: "Organic Chemistry Basics (GOC)",
      slug: "organic-chemistry-basics",
      orderIndex: 0
    },
    {
      id: "neet-physics-ray-optics",
      subjectId: "neet-physics",
      name: "Ray Optics",
      slug: "ray-optics",
      orderIndex: 0
    },
    {
      id: "neet-biology-cell-cycle-cell-division",
      subjectId: "neet-biology",
      name: "Cell Cycle & Cell Division",
      slug: "cell-cycle-cell-division",
      orderIndex: 2
    },
    {
      id: "neet-biology-biomolecules",
      subjectId: "neet-biology",
      name: "Biomolecules",
      slug: "biomolecules",
      orderIndex: 3
    },
    {
      id: "neet-biology-photosynthesis-higher-plants",
      subjectId: "neet-biology",
      name: "Photosynthesis in Higher Plants",
      slug: "photosynthesis-higher-plants",
      orderIndex: 4
    },
    {
      id: "neet-biology-plant-animal-tissues",
      subjectId: "neet-biology",
      name: "Plant & Animal Tissues",
      slug: "plant-animal-tissues",
      orderIndex: 5
    },
    {
      id: "neet-biology-breathing-exchange-of-gases",
      subjectId: "neet-biology",
      name: "Breathing & Exchange of Gases",
      slug: "breathing-exchange-of-gases",
      orderIndex: 6
    },
    {
      id: "neet-biology-body-fluids-circulation",
      subjectId: "neet-biology",
      name: "Body Fluids & Circulation",
      slug: "body-fluids-circulation",
      orderIndex: 7
    },
    {
      id: "neet-biology-excretory-products-elimination",
      subjectId: "neet-biology",
      name: "Excretory Products & Elimination",
      slug: "excretory-products-elimination",
      orderIndex: 8
    },
    {
      id: "neet-biology-neural-control-coordination",
      subjectId: "neet-biology",
      name: "Neural Control & Coordination",
      slug: "neural-control-coordination",
      orderIndex: 9
    },
    {
      id: "neet-biology-principles-inheritance-variation",
      subjectId: "neet-biology",
      name: "Principles of Inheritance & Variation",
      slug: "principles-inheritance-variation",
      orderIndex: 10
    },
    {
      id: "neet-biology-molecular-basis-inheritance",
      subjectId: "neet-biology",
      name: "Molecular Basis of Inheritance",
      slug: "molecular-basis-inheritance",
      orderIndex: 11
    },
    {
      id: "neet-biology-evolution",
      subjectId: "neet-biology",
      name: "Evolution",
      slug: "evolution",
      orderIndex: 12
    },
    {
      id: "neet-biology-human-reproduction",
      subjectId: "neet-biology",
      name: "Human Reproduction",
      slug: "human-reproduction",
      orderIndex: 13
    },
    {
      id: "neet-biology-biotechnology-principles",
      subjectId: "neet-biology",
      name: "Biotechnology: Principles",
      slug: "biotechnology-principles",
      orderIndex: 14
    },
    {
      id: "neet-biology-ecosystem-biodiversity",
      subjectId: "neet-biology",
      name: "Ecosystem & Biodiversity",
      slug: "ecosystem-biodiversity",
      orderIndex: 15
    },
    {
      id: "neet-biology-human-health-disease",
      subjectId: "neet-biology",
      name: "Human Health & Disease",
      slug: "human-health-disease",
      orderIndex: 16
    },
    {
      id: "neet-chemistry-atomic-structure",
      subjectId: "neet-chemistry",
      name: "Atomic Structure",
      slug: "atomic-structure",
      orderIndex: 1
    },
    {
      id: "neet-chemistry-chemical-bonding-molecular-structure",
      subjectId: "neet-chemistry",
      name: "Chemical Bonding & Molecular Structure",
      slug: "chemical-bonding-molecular-structure",
      orderIndex: 2
    },
    {
      id: "neet-chemistry-periodic-classification",
      subjectId: "neet-chemistry",
      name: "Periodic Classification",
      slug: "periodic-classification",
      orderIndex: 3
    },
    {
      id: "neet-chemistry-thermodynamics",
      subjectId: "neet-chemistry",
      name: "Thermodynamics",
      slug: "thermodynamics",
      orderIndex: 4
    },
    {
      id: "neet-chemistry-equilibrium",
      subjectId: "neet-chemistry",
      name: "Equilibrium",
      slug: "equilibrium",
      orderIndex: 5
    },
    {
      id: "neet-chemistry-hydrocarbons",
      subjectId: "neet-chemistry",
      name: "Hydrocarbons",
      slug: "hydrocarbons",
      orderIndex: 6
    },
    {
      id: "neet-chemistry-haloalkanes-haloarenes",
      subjectId: "neet-chemistry",
      name: "Haloalkanes & Haloarenes",
      slug: "haloalkanes-haloarenes",
      orderIndex: 7
    },
    {
      id: "neet-chemistry-alcohols-phenols-ethers",
      subjectId: "neet-chemistry",
      name: "Alcohols, Phenols & Ethers",
      slug: "alcohols-phenols-ethers",
      orderIndex: 8
    },
    {
      id: "neet-chemistry-aldehydes-ketones-carboxylic-acids",
      subjectId: "neet-chemistry",
      name: "Aldehydes, Ketones & Carboxylic Acids",
      slug: "aldehydes-ketones-carboxylic-acids",
      orderIndex: 9
    },
    {
      id: "neet-chemistry-biomolecules-chemistry",
      subjectId: "neet-chemistry",
      name: "Biomolecules (Chemistry)",
      slug: "biomolecules-chemistry",
      orderIndex: 10
    },
    {
      id: "neet-chemistry-coordination-compounds",
      subjectId: "neet-chemistry",
      name: "Coordination Compounds",
      slug: "coordination-compounds",
      orderIndex: 11
    },
    {
      id: "neet-physics-kinematics",
      subjectId: "neet-physics",
      name: "Kinematics",
      slug: "kinematics",
      orderIndex: 1
    },
    {
      id: "neet-physics-laws-of-motion",
      subjectId: "neet-physics",
      name: "Laws of Motion",
      slug: "laws-of-motion",
      orderIndex: 2
    },
    {
      id: "neet-physics-work-energy-power",
      subjectId: "neet-physics",
      name: "Work, Energy & Power",
      slug: "work-energy-power",
      orderIndex: 3
    },
    {
      id: "neet-physics-gravitation",
      subjectId: "neet-physics",
      name: "Gravitation",
      slug: "gravitation",
      orderIndex: 4
    },
    {
      id: "neet-physics-thermodynamics",
      subjectId: "neet-physics",
      name: "Thermodynamics",
      slug: "thermodynamics",
      orderIndex: 5
    },
    {
      id: "neet-physics-oscillations-waves",
      subjectId: "neet-physics",
      name: "Oscillations & Waves",
      slug: "oscillations-waves",
      orderIndex: 6
    },
    {
      id: "neet-physics-electrostatics",
      subjectId: "neet-physics",
      name: "Electrostatics",
      slug: "electrostatics",
      orderIndex: 7
    },
    {
      id: "neet-physics-current-electricity",
      subjectId: "neet-physics",
      name: "Current Electricity",
      slug: "current-electricity",
      orderIndex: 8
    },
    {
      id: "neet-physics-moving-charges-magnetism",
      subjectId: "neet-physics",
      name: "Moving Charges & Magnetism",
      slug: "moving-charges-magnetism",
      orderIndex: 9
    },
    {
      id: "neet-physics-electromagnetic-induction-ac",
      subjectId: "neet-physics",
      name: "Electromagnetic Induction & AC",
      slug: "electromagnetic-induction-ac",
      orderIndex: 10
    },
    {
      id: "neet-physics-dual-nature-modern-physics",
      subjectId: "neet-physics",
      name: "Dual Nature & Modern Physics",
      slug: "dual-nature-modern-physics",
      orderIndex: 11
    },
    {
      id: "neet-physics-semiconductor-electronics",
      subjectId: "neet-physics",
      name: "Semiconductor Electronics",
      slug: "semiconductor-electronics",
      orderIndex: 12
    },
    ...bioTopics
  ],
  materials: [
    {
      id: "neet-biology-cell-structure-function-m01",
      topicId: "neet-biology-cell-structure-function",
      title: "The Cell — Structure & Function",
      content: `**The cell** is the basic structural and functional unit of life. The **Cell Theory** (Schleiden, Schwann; extended by Virchow's *Omnis cellula e cellula*) states all living things are made of cells and all cells arise from pre-existing cells.

## Prokaryotic vs Eukaryotic
| Feature | Prokaryote | Eukaryote |
| --- | --- | --- |
| Nucleus | Absent (nucleoid) | True, membrane-bound |
| Ribosome | 70S | 80S (cytoplasm) |
| Membrane organelles | Absent | Present |
| Example | Bacteria | Plant, animal cells |

## Key Organelles
- **Mitochondrion** — the "**powerhouse**"; site of aerobic respiration and ATP synthesis; has its own circular DNA.
- **Chloroplast** — site of photosynthesis in plants; contains **chlorophyll** and thylakoids.
- **Endoplasmic reticulum** — RER (with ribosomes) makes proteins; SER makes lipids.
- **Golgi apparatus** — packaging and secretion.
- **Lysosomes** — the "**suicide bags**", rich in hydrolytic enzymes.
- **Ribosomes** — site of protein synthesis; the **70S** type also occurs in mitochondria and chloroplasts.

### The Nucleus
- Bounded by a double **nuclear envelope** with pores; contains **chromatin** and the **nucleolus** (rRNA synthesis).

### Plant vs Animal Cell
- Plant cells uniquely have a **cellulose cell wall**, large central **vacuole** and **chloroplasts**.
- Animal cells have **centrioles** (forming the spindle) and lysosomes are more prominent.

**Fluid-mosaic model** (Singer and Nicolson) describes the plasma membrane as a lipid bilayer with embedded mobile proteins.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-biology-human-physiology-digestion-m01",
      topicId: "neet-biology-human-physiology-digestion",
      title: "Human Digestion",
      content: `**Digestion** breaks complex food into absorbable molecules along the **alimentary canal**: mouth → oesophagus → stomach → small intestine → large intestine.

## Enzymes & Their Action
| Enzyme | Source | Substrate → Product |
| --- | --- | --- |
| Salivary amylase (ptyalin) | Saliva | Starch → maltose |
| Pepsin | Stomach (gastric) | Proteins → peptides |
| Trypsin | Pancreas | Proteins → peptides |
| Lipase | Pancreas | Fats → fatty acids + glycerol |

- **Pepsin** is secreted as inactive **pepsinogen**, activated by **HCl** at a low pH (~1.8).
- **Bile** from the liver (stored in the gall bladder) **emulsifies fats** but contains no enzymes.

## Absorption
- The bulk of absorption occurs in the **small intestine**, whose surface is amplified by **villi** and **microvilli**.
- The **large intestine** mainly absorbs **water** and electrolytes; it secretes no digestive enzymes.

### Key Facts
- The **liver** is the largest gland in the body; it produces bile and stores glycogen.
- **Intrinsic factor** secreted by the stomach is essential for the absorption of **vitamin B₁₂**.
- Hormones **gastrin** (stomach) and **secretin/CCK** (duodenum) regulate secretion.

### Dental Formula
- The adult human dental formula is **2123/2123**, giving a total of **32 teeth**.
- Teeth are **thecodont** (set in sockets), **diphyodont** (two sets) and **heterodont** (four types).`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-m01",
      topicId: "neet-chemistry-organic-chemistry-basics",
      title: "General Organic Chemistry (GOC)",
      content: `**GOC** provides the electronic logic behind organic reactions: how electrons move, why intermediates form, and which products dominate.

## Electronic Effects
- **Inductive effect (−I/+I)** — permanent σ-bond polarisation; **−I** groups (−NO₂, −CN, halogens) withdraw electrons.
- **Resonance/mesomeric effect (±M)** — delocalisation through π-systems; **−M** groups (−NO₂, −C=O) withdraw, **+M** groups (−OH, −NH₂) donate.
- **Hyperconjugation** — delocalisation of σ(C–H) electrons; stabilises carbocations and alkenes (the more α-hydrogens, the more stable).

## Reaction Intermediates
| Intermediate | Hybridisation | Stability order |
| --- | --- | --- |
| Carbocation | sp² | 3° > 2° > 1° > methyl |
| Carbanion | sp³ | methyl > 1° > 2° > 3° |
| Free radical | sp² | 3° > 2° > 1° |

## Acidity & Basicity
- **Carboxylic acids** are more acidic than phenols, which are more acidic than alcohols.
- **Electron-withdrawing groups increase acidity** (stabilise the conjugate base); electron-donating groups decrease it.

### Reaction Types
- **Substitution, Addition, Elimination** and **Rearrangement** are the four basic patterns.
- **Electrophiles** are electron-poor (accept pairs); **nucleophiles** are electron-rich (donate pairs).

### Isomerism
- **Structural** (chain, position, functional) and **stereoisomerism** (geometrical cis–trans, optical R/S) — a chiral centre has four different groups.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-physics-ray-optics-m01",
      topicId: "neet-physics-ray-optics",
      title: "Ray Optics",
      content: `**Ray optics** treats light as straight-line rays and explains reflection, refraction, mirrors and lenses.

## Mirror & Lens Formula
\`\`\`
1/v + 1/u = 1/f        (mirrors, sign convention)
1/v - 1/u = 1/f        (lenses)
Magnification m = v/u  (mirror),  m = v/u (lens)
\`\`\`

- Use the **Cartesian sign convention**: distances measured against the incident light are negative.
- **Focal length** f = R/2 for a spherical mirror.

## Refraction
- **Snell's law**: n₁ sin i = n₂ sin r, where **refractive index** n = c/v.
- **Total internal reflection** occurs when light goes from a denser to a rarer medium beyond the **critical angle** θ_c, with sin θ_c = 1/n. This underlies **optical fibres** and mirages.

| Element | Nature | f sign |
| --- | --- | --- |
| Concave mirror | Converging | negative |
| Convex mirror | Diverging | positive |
| Convex lens | Converging | positive |
| Concave lens | Diverging | negative |

## Lens Power & Combinations
- **Power** P = 1/f (in metres), measured in **dioptres (D)**.
- For thin lenses in contact: **P = P₁ + P₂**.

### Lensmaker's Formula
\`\`\`
1/f = (n - 1)(1/R1 - 1/R2)
\`\`\`

### Dispersion
- A prism splits white light because **refractive index depends on wavelength** — violet bends most, red least.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-biology-cell-cycle-cell-division-m01",
      topicId: "neet-biology-cell-cycle-cell-division",
      title: "Cell Cycle & Cell Division",
      content: `The **cell cycle** is the ordered sequence of events by which a cell grows and divides into two daughter cells.

## Phases of the Cell Cycle
| Phase | Event |
| --- | --- |
| G1 | Cell growth, metabolic activity |
| S | **DNA replication** (chromosome content doubles) |
| G2 | Growth, preparation for mitosis |
| M | **Mitosis** and cytokinesis |

- **Interphase** (G1 + S + G2) is the longest phase; the cell is metabolically active but not dividing.
- **G0** is a quiescent stage where cells exit the cycle (e.g. neurons).

## Mitosis
**Mitosis** is equational division producing two **diploid** cells identical to the parent. Its stages are **prophase, metaphase, anaphase, telophase**.
- At **metaphase**, chromosomes align at the equatorial plate.
- At **anaphase**, sister **chromatids** separate to opposite poles.

## Meiosis
**Meiosis** is reductional division producing four **haploid** cells, essential for **gametogenesis** and genetic variation.

### Key Facts
- **Crossing over** occurs during **pachytene** of prophase I at the **chiasmata**, recombining genetic material.
- Reduction of chromosome number happens at **meiosis I**; meiosis II is like mitosis.
- A human somatic cell has **46** chromosomes; gametes have **23**.
- **Synapsis** (pairing of homologous chromosomes) forms the **bivalent** or tetrad.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-biology-biomolecules-m01",
      topicId: "neet-biology-biomolecules",
      title: "Biomolecules",
      content: `**Biomolecules** are the chemical compounds found in living tissues — carbohydrates, proteins, lipids, nucleic acids and enzymes.

## Major Classes
| Biomolecule | Monomer / Unit | Example |
| --- | --- | --- |
| Carbohydrate | Monosaccharide | Glucose, starch |
| Protein | Amino acid | Enzymes, keratin |
| Nucleic acid | Nucleotide | DNA, RNA |
| Lipid | Fatty acid + glycerol | Triglycerides |

- Proteins are polymers of **20 standard amino acids** joined by **peptide bonds**.
- **Enzymes** are biological catalysts that lower **activation energy**; most are proteins.

## Protein Structure
- **Primary** — amino acid sequence.
- **Secondary** — alpha-helix and beta-pleated sheet.
- **Tertiary** — 3D folding; **Quaternary** — multiple subunits (e.g. haemoglobin).

### Enzyme Properties
- Highly **specific** and reusable; activity depends on **temperature** and **pH**.
- **Competitive inhibitors** resemble the substrate and bind the active site.

### Key Facts
- The most abundant protein in the biosphere is **RuBisCO**.
- **Glycogen** is the storage polysaccharide in animals; **starch** in plants.
- **Cellulose** is a structural homopolymer of beta-D-glucose.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-biology-photosynthesis-higher-plants-m01",
      topicId: "neet-biology-photosynthesis-higher-plants",
      title: "Photosynthesis in Higher Plants",
      content: `**Photosynthesis** is the process by which green plants convert light energy into chemical energy stored in glucose.

## Overall Equation
\`\`\`
6 CO2 + 12 H2O --light, chlorophyll--> C6H12O6 + 6 O2 + 6 H2O
\`\`\`

## Two Phases
| Phase | Location | Key output |
| --- | --- | --- |
| Light reaction | Thylakoid membrane | ATP, NADPH, O2 |
| Dark reaction (Calvin) | Stroma | Glucose |

- The **light reaction** splits water (**photolysis**) releasing **oxygen**.
- **Photosystem II (P680)** and **Photosystem I (P700)** drive the electron transport chain.

## Calvin Cycle (C3 Pathway)
- CO2 is fixed by the enzyme **RuBisCO** onto **RuBP**, the first stable product being **3-PGA**.
- ATP and NADPH from the light reaction reduce 3-PGA to sugar.

### C4 Plants
- C4 plants (maize, sugarcane) fix CO2 first as **oxaloacetate** via **PEP carboxylase** in mesophyll, concentrating CO2 in bundle-sheath cells — minimising photorespiration.

### Key Facts
- The site of photosynthesis is the **chloroplast**.
- **Chlorophyll a** is the primary pigment; carotenoids are accessory pigments.
- **Red and blue** wavelengths are most effective for photosynthesis.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-biology-plant-animal-tissues-m01",
      topicId: "neet-biology-plant-animal-tissues",
      title: "Plant & Animal Tissues",
      content: `A **tissue** is a group of similar cells performing a common function. Plants and animals have distinct tissue systems.

## Plant Tissues
| Tissue | Type | Function |
| --- | --- | --- |
| Meristematic | Dividing | Growth |
| Parenchyma | Simple permanent | Storage, photosynthesis |
| Collenchyma | Simple permanent | Flexible support |
| Sclerenchyma | Simple permanent | Rigid support |
| Xylem | Complex | Water conduction |
| Phloem | Complex | Food conduction |

- **Xylem** conducts water upward; **phloem** translocates food (via sieve tubes).
- **Meristems** (apical, lateral, intercalary) are regions of active division.

## Animal Tissues
- **Epithelial** — covering and lining (squamous, cuboidal, columnar).
- **Connective** — binds and supports (blood, bone, cartilage, adipose).
- **Muscular** — striated (skeletal), smooth (involuntary), cardiac.
- **Nervous** — neurons conduct impulses.

### Key Facts
- **Blood** is a fluid connective tissue with plasma as the matrix.
- **Tendons** connect muscle to bone; **ligaments** connect bone to bone.
- **Cardiac muscle** is striated, branched, involuntary and uninucleate.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-biology-breathing-exchange-of-gases-m01",
      topicId: "neet-biology-breathing-exchange-of-gases",
      title: "Breathing & Exchange of Gases",
      content: `**Breathing** (pulmonary ventilation) draws air into and out of the lungs, enabling gaseous exchange between blood and the atmosphere.

## Mechanism
- **Inspiration**: the **diaphragm** flattens and external intercostals contract, increasing thoracic volume and decreasing intrapulmonary pressure.
- **Expiration** is normally passive as muscles relax.

## Respiratory Volumes
| Volume | Approx. value |
| --- | --- |
| Tidal volume (TV) | 500 mL |
| Vital capacity (VC) | 3500-4500 mL |
| Residual volume (RV) | 1100-1200 mL |

## Gas Transport
- **Oxygen** is carried mostly as **oxyhaemoglobin** (about 97 percent).
- **Carbon dioxide** is transported mainly as **bicarbonate** ions (about 70 percent).

### Oxygen Dissociation Curve
- The sigmoid curve shifts right (**Bohr effect**) with high CO2, low pH, high temperature — releasing more O2 to tissues.

### Key Facts
- The breathing centre is in the **medulla oblongata**.
- **Carbonic anhydrase** in RBCs speeds CO2-to-bicarbonate conversion.
- Exchange of gases occurs across the thin walls of the **alveoli** by diffusion.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-biology-body-fluids-circulation-m01",
      topicId: "neet-biology-body-fluids-circulation",
      title: "Body Fluids & Circulation",
      content: `The **circulatory system** transports nutrients, gases, hormones and wastes. Humans have a **closed, double circulation**.

## Blood Composition
| Component | Role |
| --- | --- |
| Plasma | Fluid matrix, ~55 percent |
| RBC (erythrocyte) | Carries oxygen via haemoglobin |
| WBC (leukocyte) | Defence and immunity |
| Platelet | Blood clotting |

- Mature mammalian **RBCs lack a nucleus**; they live about 120 days.
- **Blood groups** (ABO) depend on surface antigens; **O** is the universal donor.

## The Heart
- The human heart is **myogenic** with four chambers: two **atria**, two **ventricles**.
- The **SA node** is the natural **pacemaker**; impulse travels SA node to AV node to bundle of His to Purkinje fibres.

## Cardiac Cycle
- One cycle has **systole** (contraction) and **diastole** (relaxation); normal heart rate ~72 per minute.
- The **lub-dub** sounds mark closure of the AV valves and semilunar valves.

### Key Facts
- The **double circulation** keeps oxygenated and deoxygenated blood separate.
- **Lymph** is a colourless fluid that returns interstitial fluid to blood.
- The **bicuspid (mitral) valve** lies between the left atrium and left ventricle.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-biology-excretory-products-elimination-m01",
      topicId: "neet-biology-excretory-products-elimination",
      title: "Excretory Products & Elimination",
      content: `**Excretion** removes nitrogenous and other metabolic wastes. In humans the **kidneys** are the principal excretory organs.

## Modes of Excretion
| Type | Main waste | Example |
| --- | --- | --- |
| Ammonotelic | Ammonia | Bony fish |
| Ureotelic | Urea | Mammals, humans |
| Uricotelic | Uric acid | Birds, reptiles, insects |

- Humans are **ureotelic**; urea is formed in the **liver** by the **ornithine (urea) cycle**.

## The Nephron
- The **nephron** is the functional unit of the kidney (about one million per kidney).
- Urine formation has three steps: **glomerular filtration**, **tubular reabsorption** and **tubular secretion**.

## Regulation
- **ADH (vasopressin)** promotes water reabsorption, concentrating urine.
- The **counter-current mechanism** in the loop of Henle maintains the medullary gradient.

### Key Facts
- Filtration occurs at the **Bowman's capsule** enclosing the glomerulus.
- Glomerular filtration rate (**GFR**) in a healthy person is about **125 mL per minute**.
- The hormone **renin** from the JG cells triggers the **RAAS** to raise blood pressure.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-biology-neural-control-coordination-m01",
      topicId: "neet-biology-neural-control-coordination",
      title: "Neural Control & Coordination",
      content: `**Neural coordination** uses electrical and chemical signals to integrate body activities rapidly through the **nervous system**.

## The Neuron
- A **neuron** has dendrites, a cell body and an **axon**; the **myelin sheath** speeds conduction.
- Signals cross the **synapse** via chemical **neurotransmitters** like **acetylcholine**.

## Nerve Impulse
| State | Membrane condition |
| --- | --- |
| Resting potential | About -70 mV, more Na+ outside |
| Action potential | Depolarisation, Na+ rushes in |
| Repolarisation | K+ moves out |

- The **sodium-potassium pump** maintains the resting potential.
- Conduction in myelinated fibres is **saltatory**, jumping between nodes of Ranvier.

## Organisation
- The **central nervous system (CNS)** is the brain and spinal cord.
- The **peripheral nervous system** includes somatic and **autonomic** (sympathetic and parasympathetic) divisions.

### Key Facts
- The **cerebrum** controls thought and voluntary action; the **cerebellum** controls balance.
- The **medulla oblongata** regulates heartbeat and breathing.
- A **reflex arc** allows rapid involuntary response, integrated at the spinal cord.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-biology-principles-inheritance-variation-m01",
      topicId: "neet-biology-principles-inheritance-variation",
      title: "Principles of Inheritance & Variation",
      content: `**Genetics** studies how traits pass from parents to offspring. **Gregor Mendel** established the foundational laws using garden pea (*Pisum sativum*).

## Mendel's Laws
| Law | Statement |
| --- | --- |
| Dominance | One allele masks the other |
| Segregation | Alleles separate during gamete formation |
| Independent assortment | Genes for different traits assort independently |

- A **monohybrid cross** gives a phenotypic ratio of **3:1** in the F2 generation.
- A **dihybrid cross** gives a phenotypic ratio of **9:3:3:1**.

## Beyond Mendel
- **Incomplete dominance** (snapdragon) gives a 1:2:1 phenotypic ratio.
- **Codominance** (ABO blood group) expresses both alleles.

## Sex Determination & Linkage
- In humans, **XX is female** and **XY is male**.
- **Linked genes** on the same chromosome tend to be inherited together.

### Key Facts
- **Haemophilia** and colour blindness are **X-linked recessive** disorders.
- **Down syndrome** results from **trisomy of chromosome 21**.
- A **test cross** (with a recessive parent) reveals an unknown genotype.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-biology-molecular-basis-inheritance-m01",
      topicId: "neet-biology-molecular-basis-inheritance",
      title: "Molecular Basis of Inheritance",
      content: `**DNA** is the genetic material in most organisms, carrying information in its base sequence.

## DNA Structure
- **Watson and Crick** (1953) proposed the **double helix**: two antiparallel strands.
- Bases pair by hydrogen bonds: **A=T** (two bonds) and **G=C** (three bonds), per **Chargaff's rule**.

## Central Dogma
\`\`\`
DNA --transcription--> RNA --translation--> Protein
\`\`\`

| Process | Enzyme | Product |
| --- | --- | --- |
| Replication | DNA polymerase | New DNA |
| Transcription | RNA polymerase | mRNA |
| Translation | Ribosome | Protein |

- Replication is **semiconservative** (proved by Meselson and Stahl).
- The **genetic code** is a triplet codon, degenerate and nearly universal.

## Gene Regulation
- The **lac operon** in *E. coli* is the classic model of inducible gene control.

### Key Facts
- The **start codon** is AUG (methionine); **stop codons** are UAA, UAG, UGA.
- **tRNA** carries amino acids; its **anticodon** reads the mRNA codon.
- The **Human Genome Project** mapped the entire human DNA sequence.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-biology-evolution-m01",
      topicId: "neet-biology-evolution",
      title: "Evolution",
      content: `**Evolution** is the gradual change in heritable characteristics of populations over generations.

## Key Theories
| Scientist | Concept |
| --- | --- |
| Lamarck | Inheritance of acquired characters |
| Darwin | Natural selection, survival of the fittest |
| De Vries | Mutation theory (saltation) |

- **Darwin** and **Wallace** independently proposed **natural selection**.
- **Variation** plus **natural selection** drives **adaptation**.

## Evidence for Evolution
- **Homologous organs** (same origin, different function) show **divergent** evolution.
- **Analogous organs** (different origin, same function) show **convergent** evolution.
- Fossils provide a direct record of past life.

## Hardy-Weinberg Principle
\`\`\`
p^2 + 2pq + q^2 = 1   (allele frequencies stay constant if no evolution)
\`\`\`

### Key Facts
- The Miller-Urey experiment supported **chemical evolution** of life.
- **Industrial melanism** in peppered moths illustrates natural selection.
- Human evolution sequence: *Australopithecus* to *Homo habilis* to *Homo erectus* to *Homo sapiens*.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-biology-human-reproduction-m01",
      topicId: "neet-biology-human-reproduction",
      title: "Human Reproduction",
      content: `**Human reproduction** is sexual, involving gamete formation, fertilisation, gestation and birth.

## Gametogenesis
| Process | Site | Product |
| --- | --- | --- |
| Spermatogenesis | Testis (seminiferous tubules) | Sperm |
| Oogenesis | Ovary | Ovum |

- **Sperm** production is continuous from puberty; **oogenesis** begins before birth and pauses.
- **FSH** and **LH** from the pituitary regulate gamete formation.

## Menstrual Cycle
- The cycle averages **28 days**; **ovulation** occurs around day 14 triggered by an **LH surge**.
- **Progesterone** from the **corpus luteum** maintains the uterine lining.

## Fertilisation & Development
- **Fertilisation** occurs in the **ampulla of the fallopian tube**, forming a diploid **zygote**.
- The **blastocyst** implants in the uterine wall; the **placenta** nourishes the foetus.

### Key Facts
- Human **gestation** lasts about **9 months (280 days)**.
- The hormone **hCG** is the basis of pregnancy tests.
- **Oxytocin** stimulates uterine contractions during childbirth.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-biology-biotechnology-principles-m01",
      topicId: "neet-biology-biotechnology-principles",
      title: "Biotechnology: Principles",
      content: `**Biotechnology** uses living systems and organisms to make useful products, with **genetic engineering** at its core.

## Key Tools
| Tool | Function |
| --- | --- |
| Restriction enzyme | Cuts DNA at specific sites |
| DNA ligase | Joins DNA fragments |
| Plasmid / vector | Carries foreign DNA into host |
| PCR | Amplifies DNA in vitro |

- **Restriction endonucleases** are "molecular scissors" producing **sticky ends**.
- **EcoRI** is a widely used restriction enzyme.

## Recombinant DNA Technology
- Foreign DNA is inserted into a **vector** (often a plasmid), introduced into a host such as *E. coli*, and cloned.
- **Selectable markers** identify transformed cells.

## PCR
- **Polymerase Chain Reaction** uses heat-stable **Taq polymerase**, primers and cycles of denaturation, annealing and extension.

### Key Facts
- **Gel electrophoresis** separates DNA fragments by size; DNA moves to the **positive** electrode.
- **Bioreactors** allow large-scale culture of cells.
- The first recombinant DNA was made by Cohen and Boyer.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-biology-ecosystem-biodiversity-m01",
      topicId: "neet-biology-ecosystem-biodiversity",
      title: "Ecosystem & Biodiversity",
      content: `An **ecosystem** is a functional unit of biotic communities and their abiotic environment interacting through energy flow and nutrient cycling.

## Trophic Structure
| Level | Organism |
| --- | --- |
| Producers | Green plants |
| Primary consumers | Herbivores |
| Secondary consumers | Carnivores |
| Decomposers | Bacteria, fungi |

- Energy flow is **unidirectional**, following the **10 percent law** (Lindeman) between trophic levels.
- The **pyramid of energy** is always **upright**.

## Biodiversity
- **Biodiversity** is the variety of life: genetic, species and ecosystem diversity.
- The **tropics** harbour the greatest species richness.

## Conservation
- **In situ** conservation: national parks, biosphere reserves, sanctuaries.
- **Ex situ** conservation: zoos, seed banks, botanical gardens.

### Key Facts
- The **carbon, nitrogen and phosphorus** cycles are major biogeochemical cycles.
- A **keystone species** has a disproportionately large effect on its ecosystem.
- The **IUCN Red List** classifies threatened species.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-biology-human-health-disease-m01",
      topicId: "neet-biology-human-health-disease",
      title: "Human Health & Disease",
      content: `**Health** is a state of complete physical, mental and social well-being. The **immune system** defends against disease-causing **pathogens**.

## Pathogens & Diseases
| Disease | Pathogen | Type |
| --- | --- | --- |
| Malaria | *Plasmodium* | Protozoan |
| Typhoid | *Salmonella* | Bacterium |
| AIDS | HIV | Virus |
| Amoebiasis | *Entamoeba* | Protozoan |

- **Malaria** is transmitted by the female **Anopheles** mosquito.
- **Filariasis** (elephantiasis) is caused by *Wuchereria*.

## Immunity
- **Innate immunity** is non-specific and present from birth.
- **Acquired immunity** is specific: **active** (own antibodies) or **passive** (ready-made antibodies).
- **Antibodies** are immunoglobulins; the structure is denoted **H2L2**.

### Key Facts
- **Vaccination** induces **active immunity** using weakened antigens.
- **AIDS** is caused by HIV, which targets **helper T-cells**.
- Cancer cells lose **contact inhibition** and divide uncontrollably.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-chemistry-atomic-structure-m01",
      topicId: "neet-chemistry-atomic-structure",
      title: "Atomic Structure",
      content: `**Atomic structure** describes the arrangement of subatomic particles and electrons within an atom.

## Subatomic Particles
| Particle | Charge | Discovered by |
| --- | --- | --- |
| Electron | -1 | J. J. Thomson |
| Proton | +1 | Goldstein / Rutherford |
| Neutron | 0 | James Chadwick |

- **Rutherford** proposed the nuclear model after the gold-foil experiment.
- **Bohr** introduced quantised orbits to explain the hydrogen spectrum.

## Quantum Numbers
\`\`\`
n  = principal (shell)
l  = azimuthal (subshell shape)
m  = magnetic (orbital orientation)
s  = spin (+1/2 or -1/2)
\`\`\`

- **Pauli exclusion principle**: no two electrons share all four quantum numbers.
- **Hund's rule**: orbitals of a subshell fill singly before pairing.
- **Aufbau principle**: electrons fill lowest-energy orbitals first.

### Key Facts
- The energy of the nth Bohr orbit of hydrogen is **E = -13.6/n^2 eV**.
- The **de Broglie** relation is lambda = h/mv, giving matter its wave nature.
- **Heisenberg's uncertainty principle** limits simultaneous knowledge of position and momentum.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-chemistry-chemical-bonding-molecular-structure-m01",
      topicId: "neet-chemistry-chemical-bonding-molecular-structure",
      title: "Chemical Bonding & Molecular Structure",
      content: `**Chemical bonding** explains how atoms combine to attain stability, usually by completing their **octet**.

## Types of Bonds
| Bond | Nature | Example |
| --- | --- | --- |
| Ionic | Transfer of electrons | NaCl |
| Covalent | Sharing of electrons | H2O |
| Coordinate | Shared pair from one atom | NH4+ |

- **Ionic bonds** form between metals and non-metals; **covalent bonds** between non-metals.

## VSEPR & Shapes
- **VSEPR theory** predicts geometry from electron-pair repulsion.
- **CH4** is tetrahedral (109.5 degrees), **NH3** pyramidal, **H2O** bent.

## Hybridisation
| Hybridisation | Geometry | Example |
| --- | --- | --- |
| sp | Linear | BeCl2 |
| sp2 | Trigonal planar | BF3 |
| sp3 | Tetrahedral | CH4 |

- **Sigma bonds** form by head-on overlap; **pi bonds** by sideways overlap.

### Key Facts
- **Molecular Orbital Theory** explains the paramagnetism of **O2**.
- **Hydrogen bonding** gives water its high boiling point.
- **Bond order** = (bonding - antibonding electrons)/2.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-chemistry-periodic-classification-m01",
      topicId: "neet-chemistry-periodic-classification",
      title: "Periodic Classification",
      content: `The **periodic table** arranges elements by increasing **atomic number** (Moseley's modern periodic law).

## Periodic Law
- Properties of elements are a **periodic function of their atomic number**.
- The table has **7 periods** and **18 groups**.

## Periodic Trends
| Property | Across a period | Down a group |
| --- | --- | --- |
| Atomic radius | Decreases | Increases |
| Ionisation enthalpy | Increases | Decreases |
| Electronegativity | Increases | Decreases |
| Metallic character | Decreases | Increases |

- **Effective nuclear charge** rising across a period pulls electrons closer.
- **Fluorine** is the most electronegative element.

## Blocks
- **s, p, d, f blocks** correspond to the subshell being filled.
- **Transition elements** are d-block; **lanthanoids and actinoids** are f-block.

### Key Facts
- **Mendeleev** arranged elements by atomic mass and predicted unknown elements.
- The element with the highest **ionisation enthalpy** is helium.
- **Diagonal relationship** links Li-Mg, Be-Al, B-Si.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-chemistry-thermodynamics-m01",
      topicId: "neet-chemistry-thermodynamics",
      title: "Chemical Thermodynamics",
      content: `**Thermodynamics** studies energy changes in chemical and physical processes.

## Laws
- **First law**: energy is conserved; **delta U = q + w**.
- **Second law**: entropy of the universe increases for a spontaneous process.
- **Third law**: entropy of a perfect crystal is zero at 0 K.

## Key Quantities
| Quantity | Symbol | Meaning |
| --- | --- | --- |
| Internal energy | U | Total energy |
| Enthalpy | H | H = U + PV |
| Entropy | S | Disorder |
| Gibbs energy | G | G = H - TS |

## Spontaneity
\`\`\`
delta G = delta H - T delta S
delta G < 0  spontaneous
delta G = 0  equilibrium
delta G > 0  non-spontaneous
\`\`\`

- An **exothermic** reaction releases heat (delta H negative); **endothermic** absorbs it.

### Key Facts
- **Hess's law**: total enthalpy change is independent of the path taken.
- Enthalpy of a process depends only on initial and final states (a **state function**).
- For an **isothermal** process of an ideal gas, delta U = 0.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-chemistry-equilibrium-m01",
      topicId: "neet-chemistry-equilibrium",
      title: "Equilibrium",
      content: `**Equilibrium** is reached when the rates of the forward and reverse reactions become equal, so concentrations stay constant.

## Equilibrium Constant
\`\`\`
For aA + bB <=> cC + dD
Kc = [C]^c [D]^d / ([A]^a [B]^b)
\`\`\`

- A large **Kc** means products dominate at equilibrium.

## Le Chatelier's Principle
| Change | Shift |
| --- | --- |
| Increase reactant | Forward |
| Increase pressure | Toward fewer gas moles |
| Increase temperature | Endothermic direction |

- The system **counteracts** any imposed change.

## Ionic Equilibrium
- **pH = -log[H+]**; for pure water at 25 C, pH = 7.
- **Kw = [H+][OH-] = 1.0 x 10^-14** at 25 C.
- A **buffer** resists pH change (e.g. CH3COOH and CH3COONa).

### Key Facts
- According to **Arrhenius**, acids give H+ and bases give OH- in water.
- A **Bronsted acid** donates a proton; a **base** accepts one.
- The **common ion effect** suppresses the ionisation of a weak electrolyte.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-chemistry-hydrocarbons-m01",
      topicId: "neet-chemistry-hydrocarbons",
      title: "Hydrocarbons",
      content: `**Hydrocarbons** contain only carbon and hydrogen and are classified as saturated, unsaturated or aromatic.

## Classification
| Class | Bonding | Example |
| --- | --- | --- |
| Alkane | Single (C-C) | Methane |
| Alkene | Double (C=C) | Ethene |
| Alkyne | Triple (C-=C) | Ethyne |
| Aromatic | Delocalised ring | Benzene |

- **Alkanes** undergo **substitution** (free-radical halogenation).
- **Alkenes and alkynes** undergo **addition** reactions.

## Key Reactions
- **Markovnikov's rule**: in HX addition, H adds to the carbon with more hydrogens.
- **Peroxide (anti-Markovnikov) effect** reverses addition with HBr.

## Aromaticity
- **Benzene** is aromatic, obeying **Huckel's rule** (4n + 2 pi electrons) and undergoing **electrophilic substitution**.

### Key Facts
- **Combustion** of hydrocarbons gives CO2 and H2O.
- **Ethyne (acetylene)** is prepared from calcium carbide and water.
- Saturated hydrocarbons follow the general formula **CnH(2n+2)**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-chemistry-haloalkanes-haloarenes-m01",
      topicId: "neet-chemistry-haloalkanes-haloarenes",
      title: "Haloalkanes & Haloarenes",
      content: `**Haloalkanes** and **haloarenes** are formed by replacing hydrogen of an alkane or arene with a halogen.

## Nucleophilic Substitution
| Mechanism | Order | Stereochemistry |
| --- | --- | --- |
| SN1 | 3° > 2° > 1° | Racemisation |
| SN2 | 1° > 2° > 3° | Inversion (Walden) |

- **SN1** is unimolecular via a carbocation; **SN2** is bimolecular, single-step.
- **SN2** shows **inversion of configuration** at the chiral carbon.

## Reactivity
- **C-X bond** strength order: C-F > C-Cl > C-Br > C-I, so **iodides** react fastest.
- **Haloarenes** are less reactive due to **resonance** and partial double-bond character.

## Important Reactions
- **Wurtz reaction**: two haloalkanes plus sodium give a higher alkane.
- **Elimination (E1/E2)** gives alkenes following **Saytzeff's rule**.

### Key Facts
- **Chloroform** in air and light forms poisonous **phosgene**.
- **DDT** is a well-known chlorinated insecticide.
- A **Grignard reagent** (R-Mg-X) is made from a haloalkane and magnesium.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-chemistry-alcohols-phenols-ethers-m01",
      topicId: "neet-chemistry-alcohols-phenols-ethers",
      title: "Alcohols, Phenols & Ethers",
      content: `These oxygen-containing compounds differ by the group bonded to oxygen: **-OH** (alcohols, phenols) or **-O-** (ethers).

## Comparison
| Compound | Functional group | Example |
| --- | --- | --- |
| Alcohol | -OH on sp3 carbon | Ethanol |
| Phenol | -OH on benzene ring | Phenol |
| Ether | R-O-R | Diethyl ether |

- **Phenol** is more acidic than alcohol because its **phenoxide ion is resonance-stabilised**.

## Reactions
- Alcohols undergo **dehydration** to alkenes and **oxidation** to aldehydes or acids.
- **Lucas test** distinguishes 1°, 2° and 3° alcohols by reaction speed.

## Preparation
- **Williamson synthesis** prepares ethers from an alkyl halide and sodium alkoxide.

### Key Facts
- **Primary** alcohols oxidise to aldehydes, then carboxylic acids.
- The acidity order is **carboxylic acid > phenol > alcohol > water** (varies, but phenol exceeds alcohol).
- Phenol is also called **carbolic acid** and is used as an antiseptic.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-chemistry-aldehydes-ketones-carboxylic-acids-m01",
      topicId: "neet-chemistry-aldehydes-ketones-carboxylic-acids",
      title: "Aldehydes, Ketones & Carboxylic Acids",
      content: `These compounds all contain the **carbonyl group** (C=O), a key functional group in organic chemistry.

## Functional Groups
| Compound | Group | Example |
| --- | --- | --- |
| Aldehyde | -CHO | Ethanal |
| Ketone | C=O (mid-chain) | Propanone |
| Carboxylic acid | -COOH | Ethanoic acid |

- **Aldehydes** are easily oxidised; **ketones** resist mild oxidation.

## Distinguishing Tests
- **Tollens' test** (silver mirror) is positive for aldehydes, not ketones.
- **Fehling's test** gives a red precipitate with aliphatic aldehydes.

## Key Reactions
- **Nucleophilic addition** to the carbonyl is characteristic.
- The **aldol condensation** needs an alpha-hydrogen; **Cannizzaro** occurs with no alpha-hydrogen.

### Key Facts
- **Carboxylic acids** are more acidic than alcohols and phenols due to resonance-stabilised carboxylate.
- **Formic acid** is the only carboxylic acid that reduces Tollens' reagent.
- The carbonyl carbon is **sp2** hybridised and electrophilic.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-chemistry-biomolecules-chemistry-m01",
      topicId: "neet-chemistry-biomolecules-chemistry",
      title: "Biomolecules (Chemistry)",
      content: `The **chemistry of biomolecules** covers carbohydrates, proteins, nucleic acids and vitamins at a molecular level.

## Carbohydrates
| Type | Example | Hydrolysis |
| --- | --- | --- |
| Monosaccharide | Glucose, fructose | Not hydrolysable |
| Disaccharide | Sucrose, maltose | To two units |
| Polysaccharide | Starch, cellulose | To many units |

- **Glucose** is an aldohexose; **fructose** is a ketohexose.
- **Sucrose** is a non-reducing sugar (no free anomeric -OH).

## Proteins
- Proteins are polymers of **alpha-amino acids** joined by **peptide bonds (-CO-NH-)**.
- **Denaturation** disrupts secondary and tertiary structure (heat, pH).

## Nucleic Acids
- **DNA and RNA** are polymers of **nucleotides** (base + sugar + phosphate).
- The sugar is **deoxyribose** in DNA and **ribose** in RNA.

### Key Facts
- **Vitamins** A, D, E, K are fat-soluble; B and C are water-soluble.
- The **glycosidic bond** links monosaccharide units.
- **Insulin** is a protein hormone regulating blood glucose.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-chemistry-coordination-compounds-m01",
      topicId: "neet-chemistry-coordination-compounds",
      title: "Coordination Compounds",
      content: `**Coordination compounds** contain a central metal atom bonded to surrounding **ligands** by coordinate bonds.

## Werner's Theory
- The metal shows **primary valency** (oxidation state) and **secondary valency** (coordination number).
- The **coordination number** is the number of ligand donor atoms attached.

## Ligands
| Type | Donor sites | Example |
| --- | --- | --- |
| Monodentate | 1 | Cl-, NH3, H2O |
| Bidentate | 2 | Ethylenediamine (en) |
| Polydentate | Many | EDTA |

- A **chelate** is a ring formed by a polydentate ligand, adding extra stability.

## Bonding & Colour
- **Crystal Field Theory** explains the splitting of d-orbitals into t2g and eg.
- **d-d transitions** give transition-metal complexes their colour.

### Key Facts
- In **K4[Fe(CN)6]**, iron has oxidation state +2 and coordination number 6.
- **EDTA** is a hexadentate ligand used in complexometric titrations.
- The **spectrochemical series** ranks ligands by field strength; CO is strong, I- is weak.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-physics-kinematics-m01",
      topicId: "neet-physics-kinematics",
      title: "Kinematics",
      content: `**Kinematics** describes motion without reference to its causes, using displacement, velocity and acceleration.

## Equations of Motion
\`\`\`
v = u + at
s = ut + (1/2) a t^2
v^2 = u^2 + 2as
\`\`\`

- These hold only for **uniform acceleration**.
- **Displacement** is a vector; **distance** is a scalar.

## Key Concepts
| Quantity | Type | SI Unit |
| --- | --- | --- |
| Displacement | Vector | metre |
| Velocity | Vector | m/s |
| Acceleration | Vector | m/s^2 |
| Speed | Scalar | m/s |

- The slope of a **position-time** graph gives velocity.
- The slope of a **velocity-time** graph gives acceleration; its area gives displacement.

## Projectile Motion
- A projectile follows a **parabolic** path; horizontal velocity stays constant.
- Maximum range occurs at a launch angle of **45 degrees**.

### Key Facts
- Acceleration due to gravity is about **9.8 m/s^2** downward.
- At the highest point of a projectile, the **vertical velocity is zero**.
- Time of flight for a projectile is **T = 2u sin(theta)/g**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-physics-laws-of-motion-m01",
      topicId: "neet-physics-laws-of-motion",
      title: "Laws of Motion",
      content: `**Newton's laws of motion** form the foundation of classical mechanics, relating force to changes in motion.

## The Three Laws
| Law | Statement |
| --- | --- |
| First | A body stays at rest or uniform motion unless acted on by a net force (inertia) |
| Second | F = ma; force equals rate of change of momentum |
| Third | Every action has an equal and opposite reaction |

\`\`\`
F = dp/dt = ma     (p = mv)
\`\`\`

- The **first law** defines **inertia**; mass measures inertia.
- **Momentum** p = mv is conserved when no external force acts.

## Friction
- **Static friction** prevents motion up to a maximum; **kinetic friction** opposes ongoing motion.
- Limiting friction f = mu times N.

## Circular Motion
- A body in circular motion needs a **centripetal force** directed inward, F = mv^2/r.

### Key Facts
- The SI unit of force is the **newton (N)**, equal to kg m/s^2.
- **Impulse** equals change in momentum (F times t).
- Conservation of momentum explains **rocket propulsion** and recoil of a gun.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-physics-work-energy-power-m01",
      topicId: "neet-physics-work-energy-power",
      title: "Work, Energy & Power",
      content: `**Work, energy and power** quantify the transfer and rate of transfer of energy in mechanical systems.

## Definitions
\`\`\`
Work  W = F s cos(theta)
Kinetic energy KE = (1/2) m v^2
Potential energy PE = mgh
Power P = W/t = F v
\`\`\`

- **Work** is done only when a force produces displacement along its direction.
- The SI unit of work and energy is the **joule (J)**; power is the **watt (W)**.

## Work-Energy Theorem
- The net work done on a body equals its **change in kinetic energy**.

## Conservation of Energy
| Form | Example |
| --- | --- |
| Kinetic | Moving car |
| Potential | Raised weight |
| Mechanical | KE + PE (conserved if only conservative forces act) |

- In a **conservative field** (gravity), total mechanical energy stays constant.

### Key Facts
- A **collision** is elastic if both momentum and kinetic energy are conserved.
- 1 horsepower equals about **746 watts**.
- Work done by a force perpendicular to displacement is **zero**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-physics-gravitation-m01",
      topicId: "neet-physics-gravitation",
      title: "Gravitation",
      content: `**Gravitation** is the universal attractive force between masses, described by Newton's law of gravitation.

## Newton's Law
\`\`\`
F = G m1 m2 / r^2      (G = 6.67 x 10^-11 N m^2/kg^2)
\`\`\`

- The force is **attractive** and acts along the line joining the masses.
- **g = GM/R^2** at a planet's surface.

## Key Quantities
| Quantity | Formula |
| --- | --- |
| Escape velocity | v = sqrt(2GM/R) |
| Orbital velocity | v = sqrt(GM/r) |
| Time period (Kepler) | T^2 proportional to r^3 |

- **Escape velocity** from Earth is about **11.2 km/s**.

## Kepler's Laws
- **Law of orbits**: planets move in ellipses with the Sun at a focus.
- **Law of areas**: equal areas swept in equal times.
- **Law of periods**: T^2 is proportional to a^3.

### Key Facts
- **g** decreases with **altitude** and **depth**, and is maximum at the poles.
- A **geostationary satellite** has an orbital period of 24 hours.
- Weightlessness in orbit arises from **free fall**, not absence of gravity.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-physics-thermodynamics-m01",
      topicId: "neet-physics-thermodynamics",
      title: "Physics Thermodynamics",
      content: `**Thermodynamics** in physics studies heat, work and internal energy in macroscopic systems.

## First Law
\`\`\`
delta Q = delta U + delta W      (W = P delta V)
\`\`\`

- Heat supplied raises internal energy and does work.
- **Internal energy** depends only on the state.

## Thermodynamic Processes
| Process | Constant | Condition |
| --- | --- | --- |
| Isothermal | Temperature | delta U = 0 |
| Adiabatic | No heat exchange | delta Q = 0 |
| Isobaric | Pressure | W = P delta V |
| Isochoric | Volume | W = 0 |

- An **adiabatic** process exchanges no heat with surroundings.

## Second Law & Engines
- A **heat engine** converts heat into work; efficiency = 1 - Tc/Th (Carnot).
- The **Carnot engine** is the most efficient possible engine between two temperatures.

### Key Facts
- No engine can be **100 percent efficient** (second law).
- **Cp - Cv = R** for an ideal gas (Mayer's relation).
- Heat always flows spontaneously from **hot to cold**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-physics-oscillations-waves-m01",
      topicId: "neet-physics-oscillations-waves",
      title: "Oscillations & Waves",
      content: `**Oscillations** are periodic to-and-fro motions; **waves** transfer energy through a medium without transferring matter.

## Simple Harmonic Motion
\`\`\`
a = -omega^2 x          (restoring force proportional to displacement)
T = 2 pi sqrt(m/k)      (spring)
T = 2 pi sqrt(L/g)      (simple pendulum)
\`\`\`

- In **SHM** the restoring force is proportional and opposite to displacement.
- Energy in SHM continuously interchanges between **kinetic and potential**.

## Types of Waves
| Type | Particle motion | Example |
| --- | --- | --- |
| Transverse | Perpendicular | Light, string waves |
| Longitudinal | Parallel | Sound |

- Wave speed **v = f times lambda**.

## Sound & Resonance
- **Resonance** occurs when forcing frequency equals natural frequency.
- **Beats** arise from two slightly different frequencies; beat frequency = |f1 - f2|.

### Key Facts
- Sound cannot travel through a **vacuum**.
- The **Doppler effect** changes observed frequency with relative motion.
- A **stationary wave** forms nodes and antinodes from interfering waves.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-physics-electrostatics-m01",
      topicId: "neet-physics-electrostatics",
      title: "Electrostatics",
      content: `**Electrostatics** studies charges at rest and the forces, fields and potentials they create.

## Coulomb's Law
\`\`\`
F = (1 / 4 pi epsilon0) q1 q2 / r^2
\`\`\`

- Like charges repel; unlike charges attract.
- The constant 1/(4 pi epsilon0) is about **9 x 10^9 N m^2/C^2**.

## Field & Potential
| Quantity | Definition | Unit |
| --- | --- | --- |
| Electric field E | Force per unit charge | N/C or V/m |
| Potential V | Work per unit charge | volt |
| Capacitance C | Q/V | farad |

- **Field lines** start on positive and end on negative charges and never cross.

## Capacitors
- For a parallel-plate capacitor, **C = epsilon0 A / d**.
- Energy stored is **U = (1/2) C V^2**.

### Key Facts
- A **conductor** in electrostatic equilibrium has zero field inside.
- **Gauss's law** relates flux to enclosed charge: flux = q/epsilon0.
- A **dielectric** inserted between plates increases capacitance.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-physics-current-electricity-m01",
      topicId: "neet-physics-current-electricity",
      title: "Current Electricity",
      content: `**Current electricity** deals with the flow of electric charge through conductors and circuits.

## Ohm's Law
\`\`\`
V = I R
R = rho L / A          (resistivity rho)
\`\`\`

- **Current** I = Q/t, measured in **amperes**.
- Resistance increases with **length** and decreases with **cross-sectional area**.

## Combinations
| Arrangement | Equivalent resistance |
| --- | --- |
| Series | R = R1 + R2 + ... |
| Parallel | 1/R = 1/R1 + 1/R2 + ... |

- In **series** the same current flows; in **parallel** the same voltage applies.

## Kirchhoff's Laws
- **Junction rule**: total current in equals total current out (charge conservation).
- **Loop rule**: sum of EMFs equals sum of IR drops (energy conservation).

### Key Facts
- Electrical power **P = VI = I^2 R = V^2 / R**.
- A **Wheatstone bridge** is balanced when P/Q = R/S.
- Drift velocity of electrons is small, but the field propagates near light speed.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-physics-moving-charges-magnetism-m01",
      topicId: "neet-physics-moving-charges-magnetism",
      title: "Moving Charges & Magnetism",
      content: `Moving charges create magnetic fields, and magnetic fields exert forces on moving charges and currents.

## Lorentz Force
\`\`\`
F = q (v x B)
F = B I L sin(theta)      (force on a current-carrying wire)
\`\`\`

- The magnetic force is **perpendicular** to both velocity and field.
- A charge moving parallel to B feels **no force**.

## Field Sources
| Source | Field formula |
| --- | --- |
| Long straight wire | B = mu0 I / (2 pi r) |
| Centre of circular loop | B = mu0 I / (2R) |
| Solenoid (interior) | B = mu0 n I |

- **Biot-Savart law** and **Ampere's law** give the field of currents.

## Applications
- A **cyclotron** accelerates charged particles using a magnetic field.
- A **moving-coil galvanometer** detects small currents via torque on a coil.

### Key Facts
- A charged particle in a uniform field moves in a **circle**; radius r = mv/(qB).
- The SI unit of magnetic field is the **tesla (T)**.
- Parallel currents in the same direction **attract**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-physics-electromagnetic-induction-ac-m01",
      topicId: "neet-physics-electromagnetic-induction-ac",
      title: "Electromagnetic Induction & AC",
      content: `**Electromagnetic induction** generates an EMF from a changing magnetic flux, the basis of generators and transformers.

## Faraday's & Lenz's Laws
\`\`\`
EMF = - d(phi)/dt        (phi = magnetic flux)
\`\`\`

- **Faraday's law**: induced EMF equals the rate of change of flux.
- **Lenz's law**: the induced current opposes the change causing it (energy conservation).

## Alternating Current
| Quantity | Relation |
| --- | --- |
| RMS current | I_rms = I0 / sqrt(2) |
| Inductive reactance | XL = 2 pi f L |
| Capacitive reactance | XC = 1 / (2 pi f C) |

- AC voltage and current vary **sinusoidally** with time.

## Transformer
- A **transformer** changes AC voltage using mutual induction; Vs/Vp = Ns/Np.
- It works on **AC only**, not DC.

### Key Facts
- **Self-induction** opposes changes in a coil's own current.
- At **resonance** in an LCR circuit, XL = XC and impedance is minimum.
- An ideal transformer conserves power: Vp Ip = Vs Is.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-physics-dual-nature-modern-physics-m01",
      topicId: "neet-physics-dual-nature-modern-physics",
      title: "Dual Nature & Modern Physics",
      content: `**Modern physics** reveals the dual wave-particle nature of light and matter and the structure of the atom and nucleus.

## Photoelectric Effect
\`\`\`
E = h f
h f = phi + KE_max       (Einstein's equation)
\`\`\`

- Light shows **particle nature** as **photons** of energy hf.
- Emission depends on **frequency**, not intensity; below the **threshold frequency** no electrons emit.

## Matter Waves
- **de Broglie**: lambda = h / (mv); particles have an associated wavelength.

## Atomic & Nuclear
| Concept | Note |
| --- | --- |
| Bohr model | Quantised energy levels |
| Mass-energy | E = mc^2 |
| Radioactivity | Alpha, beta, gamma decay |

- **Nuclear fission** splits heavy nuclei; **fusion** joins light nuclei.

### Key Facts
- The **work function** is the minimum energy to eject an electron.
- One **electronvolt (eV)** equals 1.6 x 10^-19 joule.
- The **photon** has zero rest mass but carries momentum p = h/lambda.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-physics-semiconductor-electronics-m01",
      topicId: "neet-physics-semiconductor-electronics",
      title: "Semiconductor Electronics",
      content: `**Semiconductors** have conductivity between conductors and insulators and underpin all modern electronics.

## Types
| Type | Dopant | Majority carrier |
| --- | --- | --- |
| Intrinsic | None | Electrons = holes |
| n-type | Pentavalent (P, As) | Electrons |
| p-type | Trivalent (B, Al) | Holes |

- **Doping** adds impurity atoms to control conductivity.

## p-n Junction Diode
- A **diode** conducts in **forward bias** and blocks in **reverse bias**.
- The **depletion region** forms at the junction with a potential barrier.

## Applications
- A diode acts as a **rectifier**, converting AC to DC.
- A **transistor** can amplify signals or act as a switch.

### Key Facts
- In a semiconductor, resistance **decreases** as temperature rises.
- A **Zener diode** is used for voltage regulation in reverse breakdown.
- **Forbidden energy gap** of silicon is about 1.1 eV.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    ...bioMaterials
  ],
  questions: [
    {
      id: "neet-biology-cell-structure-function-q01",
      topicId: "neet-biology-cell-structure-function",
      text: "Which organelle is known as the 'powerhouse of the cell'?",
      optionA: "Ribosome",
      optionB: "Lysosome",
      optionC: "Golgi apparatus",
      optionD: "Mitochondrion",
      correctOption: "D",
      explanation: "Mitochondria generate most cellular ATP through aerobic respiration.",
      orderIndex: 0
    },
    {
      id: "neet-biology-cell-structure-function-q02",
      topicId: "neet-biology-cell-structure-function",
      text: "Ribosomes found in the cytoplasm of eukaryotic cells are of the type:",
      optionA: "80S",
      optionB: "70S",
      optionC: "50S",
      optionD: "30S",
      correctOption: "A",
      explanation: "Eukaryotic cytoplasmic ribosomes are 80S; the 70S type occurs in mitochondria and chloroplasts.",
      orderIndex: 1
    },
    {
      id: "neet-biology-cell-structure-function-q03",
      topicId: "neet-biology-cell-structure-function",
      text: "Which structure is present in plant cells but absent in animal cells?",
      optionA: "Mitochondrion",
      optionB: "Nucleus",
      optionC: "Ribosome",
      optionD: "Cellulose cell wall",
      correctOption: "D",
      explanation: "A rigid cellulose cell wall surrounds plant cells but is absent in animal cells.",
      orderIndex: 2
    },
    {
      id: "neet-biology-cell-structure-function-q04",
      topicId: "neet-biology-cell-structure-function",
      text: "Lysosomes are often called the 'suicide bags' because they contain:",
      optionA: "Photosynthetic pigments",
      optionB: "DNA",
      optionC: "Hydrolytic enzymes",
      optionD: "Ribosomes",
      correctOption: "C",
      explanation: "Lysosomes are packed with hydrolytic enzymes that can digest the cell's own components.",
      orderIndex: 3
    },
    {
      id: "neet-biology-cell-structure-function-q05",
      topicId: "neet-biology-cell-structure-function",
      text: "The fluid-mosaic model of the plasma membrane was proposed by:",
      optionA: "Schleiden and Schwann",
      optionB: "Robert Hooke",
      optionC: "Singer and Nicolson",
      optionD: "Watson and Crick",
      correctOption: "C",
      explanation: "Singer and Nicolson (1972) described the membrane as a lipid bilayer with mobile proteins.",
      orderIndex: 4
    },
    {
      id: "neet-biology-cell-structure-function-q06",
      topicId: "neet-biology-cell-structure-function",
      text: "Which feature distinguishes a prokaryotic from a eukaryotic cell?",
      optionA: "Presence of cytoplasm",
      optionB: "Presence of a plasma membrane",
      optionC: "Presence of ribosomes",
      optionD: "Absence of a membrane-bound nucleus",
      correctOption: "D",
      explanation: "Prokaryotes lack a true membrane-bound nucleus; their DNA lies in a nucleoid region.",
      orderIndex: 5
    },
    {
      id: "neet-biology-cell-structure-function-q07",
      topicId: "neet-biology-cell-structure-function",
      text: "The nucleolus is the site of synthesis of:",
      optionA: "DNA",
      optionB: "rRNA",
      optionC: "Lipids",
      optionD: "ATP",
      correctOption: "B",
      explanation: "The nucleolus is the centre of ribosomal RNA synthesis and ribosome assembly.",
      orderIndex: 6
    },
    {
      id: "neet-biology-cell-structure-function-q08",
      topicId: "neet-biology-cell-structure-function",
      text: "'Omnis cellula e cellula', meaning new cells arise from existing cells, was stated by:",
      optionA: "Robert Hooke",
      optionB: "Rudolf Virchow",
      optionC: "Theodor Schwann",
      optionD: "Anton van Leeuwenhoek",
      correctOption: "B",
      explanation: "Virchow extended the cell theory with the principle that every cell comes from a pre-existing cell.",
      orderIndex: 7
    },
    {
      id: "neet-biology-human-physiology-digestion-q01",
      topicId: "neet-biology-human-physiology-digestion",
      text: "Salivary amylase (ptyalin) acts on:",
      optionA: "Proteins",
      optionB: "Fats",
      optionC: "Starch",
      optionD: "Nucleic acids",
      correctOption: "C",
      explanation: "Ptyalin begins starch digestion in the mouth, converting it to maltose.",
      orderIndex: 0
    },
    {
      id: "neet-biology-human-physiology-digestion-q02",
      topicId: "neet-biology-human-physiology-digestion",
      text: "Pepsin is secreted in an inactive form called:",
      optionA: "Pepsinogen",
      optionB: "Prorennin",
      optionC: "Trypsinogen",
      optionD: "Chymotrypsinogen",
      correctOption: "A",
      explanation: "Inactive pepsinogen is activated to pepsin by the HCl of gastric juice.",
      orderIndex: 1
    },
    {
      id: "neet-biology-human-physiology-digestion-q03",
      topicId: "neet-biology-human-physiology-digestion",
      text: "Bile, secreted by the liver, helps digestion by:",
      optionA: "Breaking proteins",
      optionB: "Emulsifying fats",
      optionC: "Hydrolysing starch",
      optionD: "Absorbing water",
      correctOption: "B",
      explanation: "Bile salts emulsify large fat globules into smaller droplets for lipase to act on.",
      orderIndex: 2
    },
    {
      id: "neet-biology-human-physiology-digestion-q04",
      topicId: "neet-biology-human-physiology-digestion",
      text: "Most absorption of digested food occurs in the:",
      optionA: "Stomach",
      optionB: "Oesophagus",
      optionC: "Small intestine",
      optionD: "Large intestine",
      correctOption: "C",
      explanation: "Villi and microvilli of the small intestine provide a huge surface for absorption.",
      orderIndex: 3
    },
    {
      id: "neet-biology-human-physiology-digestion-q05",
      topicId: "neet-biology-human-physiology-digestion",
      text: "The adult human dental formula 2123/2123 corresponds to how many teeth?",
      optionA: "20",
      optionB: "28",
      optionC: "36",
      optionD: "32",
      correctOption: "D",
      explanation: "Each half-jaw has 2 incisors, 1 canine, 2 premolars, 3 molars; total 32 teeth.",
      orderIndex: 4
    },
    {
      id: "neet-biology-human-physiology-digestion-q06",
      topicId: "neet-biology-human-physiology-digestion",
      text: "The largest gland in the human body is the:",
      optionA: "Liver",
      optionB: "Pancreas",
      optionC: "Salivary gland",
      optionD: "Thyroid",
      correctOption: "A",
      explanation: "The liver is the largest gland; it produces bile and stores glycogen.",
      orderIndex: 5
    },
    {
      id: "neet-biology-human-physiology-digestion-q07",
      topicId: "neet-biology-human-physiology-digestion",
      text: "Intrinsic factor secreted by the stomach is essential for the absorption of:",
      optionA: "Vitamin C",
      optionB: "Calcium",
      optionC: "Vitamin B₁₂",
      optionD: "Iron",
      correctOption: "C",
      explanation: "Intrinsic factor binds vitamin B₁₂, enabling its absorption in the ileum.",
      orderIndex: 6
    },
    {
      id: "neet-biology-human-physiology-digestion-q08",
      topicId: "neet-biology-human-physiology-digestion",
      text: "Which enzyme from the pancreas digests fats?",
      optionA: "Amylase",
      optionB: "Lipase",
      optionC: "Trypsin",
      optionD: "Pepsin",
      correctOption: "B",
      explanation: "Pancreatic lipase breaks fats into fatty acids and glycerol.",
      orderIndex: 7
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-q01",
      topicId: "neet-chemistry-organic-chemistry-basics",
      text: "The correct order of stability of carbocations is:",
      optionA: "Methyl > 1° > 2° > 3°",
      optionB: "2° > 3° > 1° > methyl",
      optionC: "3° > 2° > 1° > methyl",
      optionD: "1° > 2° > 3° > methyl",
      correctOption: "C",
      explanation: "Hyperconjugation and the +I effect make tertiary carbocations the most stable.",
      orderIndex: 0
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-q02",
      topicId: "neet-chemistry-organic-chemistry-basics",
      text: "An electrophile is a species that is:",
      optionA: "Electron-rich",
      optionB: "A free radical",
      optionC: "Always negatively charged",
      optionD: "Electron-deficient",
      correctOption: "D",
      explanation: "Electrophiles are electron-poor and accept an electron pair from a nucleophile.",
      orderIndex: 1
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-q03",
      topicId: "neet-chemistry-organic-chemistry-basics",
      text: "Which group shows a +M (electron-donating resonance) effect?",
      optionA: "−NO₂",
      optionB: "−C≡N",
      optionC: "−COOH",
      optionD: "−NH₂",
      correctOption: "D",
      explanation: "The lone pair on −NH₂ is donated into the ring, a +M effect.",
      orderIndex: 2
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-q04",
      topicId: "neet-chemistry-organic-chemistry-basics",
      text: "The hybridisation of the positively charged carbon in a carbocation is:",
      optionA: "sp",
      optionB: "sp²",
      optionC: "sp³",
      optionD: "sp³d",
      correctOption: "B",
      explanation: "A carbocation carbon is sp² hybridised with an empty p-orbital, giving planar geometry.",
      orderIndex: 3
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-q05",
      topicId: "neet-chemistry-organic-chemistry-basics",
      text: "Which of the following is the most acidic?",
      optionA: "Ethanol",
      optionB: "Acetic acid",
      optionC: "Phenol",
      optionD: "Water",
      correctOption: "B",
      explanation: "Carboxylic acids are more acidic than phenols, alcohols and water due to resonance-stabilised anions.",
      orderIndex: 4
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-q06",
      topicId: "neet-chemistry-organic-chemistry-basics",
      text: "Hyperconjugation involves the delocalisation of electrons from:",
      optionA: "A σ (C–H) bond",
      optionB: "A π bond only",
      optionC: "A lone pair",
      optionD: "A d orbital",
      correctOption: "A",
      explanation: "Hyperconjugation delocalises σ(C–H) bond electrons into an adjacent empty or π orbital.",
      orderIndex: 5
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-q07",
      topicId: "neet-chemistry-organic-chemistry-basics",
      text: "A chiral carbon atom must be bonded to:",
      optionA: "A double bond",
      optionB: "Two identical groups",
      optionC: "Four different groups",
      optionD: "A hydrogen only",
      correctOption: "C",
      explanation: "Optical activity requires a carbon attached to four different groups (a stereocentre).",
      orderIndex: 6
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-q08",
      topicId: "neet-chemistry-organic-chemistry-basics",
      text: "Electron-withdrawing groups attached to an acid generally:",
      optionA: "Decrease acidity",
      optionB: "Make it basic",
      optionC: "Have no effect",
      optionD: "Increase acidity",
      correctOption: "D",
      explanation: "They stabilise the conjugate base by dispersing negative charge, increasing acidity.",
      orderIndex: 7
    },
    {
      id: "neet-physics-ray-optics-q01",
      topicId: "neet-physics-ray-optics",
      text: "The focal length of a spherical mirror is related to its radius of curvature by:",
      optionA: "f = R",
      optionB: "f = 2R",
      optionC: "f = R/4",
      optionD: "f = R/2",
      correctOption: "D",
      explanation: "For a spherical mirror the focal length is half the radius of curvature, f = R/2.",
      orderIndex: 0
    },
    {
      id: "neet-physics-ray-optics-q02",
      topicId: "neet-physics-ray-optics",
      text: "Total internal reflection occurs when light travels from a:",
      optionA: "Denser to a rarer medium beyond the critical angle",
      optionB: "Denser to a rarer medium at normal incidence",
      optionC: "Medium to vacuum at any angle",
      optionD: "Rarer to a denser medium",
      correctOption: "A",
      explanation: "TIR needs a denser-to-rarer transition with the incidence angle exceeding the critical angle.",
      orderIndex: 1
    },
    {
      id: "neet-physics-ray-optics-q03",
      topicId: "neet-physics-ray-optics",
      text: "The power of a lens of focal length 50 cm is:",
      optionA: "0.5 D",
      optionB: "5 D",
      optionC: "2 D",
      optionD: "50 D",
      correctOption: "C",
      explanation: "P = 1/f(m) = 1/0.5 = 2 dioptres.",
      orderIndex: 2
    },
    {
      id: "neet-physics-ray-optics-q04",
      topicId: "neet-physics-ray-optics",
      text: "A convex lens always forms which type of image of a distant object?",
      optionA: "Virtual and erect",
      optionB: "Real and erect",
      optionC: "Virtual and inverted",
      optionD: "Real and inverted",
      correctOption: "D",
      explanation: "A converging lens forms a real, inverted image of a distant real object on the far side.",
      orderIndex: 3
    },
    {
      id: "neet-physics-ray-optics-q05",
      topicId: "neet-physics-ray-optics",
      text: "Snell's law relates the angles of incidence and refraction through:",
      optionA: "n₁ cos i = n₂ cos r",
      optionB: "n₁ sin i = n₂ sin r",
      optionC: "n₁ tan i = n₂ tan r",
      optionD: "n₁ i = n₂ r",
      correctOption: "B",
      explanation: "Snell's law states n₁ sin i = n₂ sin r at a refracting boundary.",
      orderIndex: 4
    },
    {
      id: "neet-physics-ray-optics-q06",
      topicId: "neet-physics-ray-optics",
      text: "Two thin lenses of power +3 D and +2 D placed in contact have a combined power of:",
      optionA: "1.2 D",
      optionB: "1 D",
      optionC: "6 D",
      optionD: "5 D",
      correctOption: "D",
      explanation: "Powers add for lenses in contact: P = 3 + 2 = 5 D.",
      orderIndex: 5
    },
    {
      id: "neet-physics-ray-optics-q07",
      topicId: "neet-physics-ray-optics",
      text: "A prism produces a spectrum of white light because the refractive index:",
      optionA: "Is constant for all colours",
      optionB: "Depends on wavelength",
      optionC: "Depends on the prism mass",
      optionD: "Is zero for violet light",
      correctOption: "B",
      explanation: "Refractive index varies with wavelength, so violet bends most and red least (dispersion).",
      orderIndex: 6
    },
    {
      id: "neet-physics-ray-optics-q08",
      topicId: "neet-physics-ray-optics",
      text: "A convex mirror always forms an image that is:",
      optionA: "Real and inverted",
      optionB: "Virtual and magnified",
      optionC: "Real and magnified",
      optionD: "Virtual, erect and diminished",
      correctOption: "D",
      explanation: "A convex (diverging) mirror always gives a virtual, erect, diminished image, useful as a rear-view mirror.",
      orderIndex: 7
    },
    {
      id: "neet-biology-cell-cycle-cell-division-q01",
      topicId: "neet-biology-cell-cycle-cell-division",
      text: "DNA replication during the cell cycle occurs in which phase?",
      optionA: "S phase",
      optionB: "G1 phase",
      optionC: "G2 phase",
      optionD: "M phase",
      correctOption: "A",
      explanation: "DNA is replicated during the S (synthesis) phase, doubling the chromosomal DNA content.",
      orderIndex: 0
    },
    {
      id: "neet-biology-cell-cycle-cell-division-q02",
      topicId: "neet-biology-cell-cycle-cell-division",
      text: "Separation of sister chromatids to opposite poles takes place during:",
      optionA: "Prophase",
      optionB: "Anaphase",
      optionC: "Metaphase",
      optionD: "Telophase",
      correctOption: "B",
      explanation: "In anaphase the centromeres split and sister chromatids move to opposite poles.",
      orderIndex: 1
    },
    {
      id: "neet-biology-cell-cycle-cell-division-q03",
      topicId: "neet-biology-cell-cycle-cell-division",
      text: "Crossing over, which recombines genetic material, occurs during which sub-stage of prophase I?",
      optionA: "Leptotene",
      optionB: "Pachytene",
      optionC: "Zygotene",
      optionD: "Diakinesis",
      correctOption: "B",
      explanation: "Crossing over occurs at the chiasmata during pachytene of meiotic prophase I.",
      orderIndex: 2
    },
    {
      id: "neet-biology-cell-cycle-cell-division-q04",
      topicId: "neet-biology-cell-cycle-cell-division",
      text: "Meiosis in a human cell produces gametes with how many chromosomes?",
      optionA: "46",
      optionB: "22",
      optionC: "92",
      optionD: "23",
      correctOption: "D",
      explanation: "Meiosis is reductional, halving the diploid 46 to the haploid 23 in gametes.",
      orderIndex: 3
    },
    {
      id: "neet-biology-cell-cycle-cell-division-q05",
      topicId: "neet-biology-cell-cycle-cell-division",
      text: "At which stage of mitosis do chromosomes align at the equatorial plate?",
      optionA: "Anaphase",
      optionB: "Metaphase",
      optionC: "Telophase",
      optionD: "Prophase",
      correctOption: "B",
      explanation: "During metaphase the chromosomes line up at the equatorial (metaphase) plate.",
      orderIndex: 4
    },
    {
      id: "neet-biology-cell-cycle-cell-division-q06",
      topicId: "neet-biology-cell-cycle-cell-division",
      text: "The quiescent stage in which cells exit the cell cycle is called:",
      optionA: "M phase",
      optionB: "S phase",
      optionC: "G2 phase",
      optionD: "G0 phase",
      correctOption: "D",
      explanation: "G0 is a quiescent stage where cells leave the cycle, as seen in mature neurons.",
      orderIndex: 5
    },
    {
      id: "neet-biology-cell-cycle-cell-division-q07",
      topicId: "neet-biology-cell-cycle-cell-division",
      text: "Reduction in chromosome number during meiosis occurs at:",
      optionA: "Meiosis II",
      optionB: "Cytokinesis",
      optionC: "Meiosis I",
      optionD: "Interphase",
      correctOption: "C",
      explanation: "The chromosome number is halved at meiosis I; meiosis II resembles mitosis.",
      orderIndex: 6
    },
    {
      id: "neet-biology-cell-cycle-cell-division-q08",
      topicId: "neet-biology-cell-cycle-cell-division",
      text: "Mitosis is described as equational division because the daughter cells are:",
      optionA: "Diploid and identical to the parent",
      optionB: "Haploid and different",
      optionC: "Haploid and identical",
      optionD: "Tetraploid",
      correctOption: "A",
      explanation: "Mitosis produces two diploid daughter cells genetically identical to the parent cell.",
      orderIndex: 7
    },
    {
      id: "neet-biology-biomolecules-q01",
      topicId: "neet-biology-biomolecules",
      text: "Proteins are polymers of amino acids joined by which type of bond?",
      optionA: "Glycosidic bond",
      optionB: "Hydrogen bond",
      optionC: "Phosphodiester bond",
      optionD: "Peptide bond",
      correctOption: "D",
      explanation: "Amino acids are linked by peptide bonds to form polypeptides and proteins.",
      orderIndex: 0
    },
    {
      id: "neet-biology-biomolecules-q02",
      topicId: "neet-biology-biomolecules",
      text: "The most abundant protein in the entire biosphere is:",
      optionA: "Haemoglobin",
      optionB: "Collagen",
      optionC: "Keratin",
      optionD: "RuBisCO",
      correctOption: "D",
      explanation: "RuBisCO, the CO2-fixing enzyme of photosynthesis, is the most abundant protein in the biosphere.",
      orderIndex: 1
    },
    {
      id: "neet-biology-biomolecules-q03",
      topicId: "neet-biology-biomolecules",
      text: "The alpha-helix and beta-pleated sheet describe which level of protein structure?",
      optionA: "Secondary",
      optionB: "Primary",
      optionC: "Tertiary",
      optionD: "Quaternary",
      correctOption: "A",
      explanation: "Secondary structure refers to local folding such as the alpha-helix and beta-pleated sheet.",
      orderIndex: 2
    },
    {
      id: "neet-biology-biomolecules-q04",
      topicId: "neet-biology-biomolecules",
      text: "The storage polysaccharide in animals is:",
      optionA: "Starch",
      optionB: "Glycogen",
      optionC: "Cellulose",
      optionD: "Chitin",
      correctOption: "B",
      explanation: "Glycogen is the storage polysaccharide in animals, while starch stores energy in plants.",
      orderIndex: 3
    },
    {
      id: "neet-biology-biomolecules-q05",
      topicId: "neet-biology-biomolecules",
      text: "Enzymes act as biological catalysts mainly by:",
      optionA: "Lowering activation energy",
      optionB: "Raising activation energy",
      optionC: "Changing the equilibrium constant",
      optionD: "Supplying heat",
      correctOption: "A",
      explanation: "Enzymes accelerate reactions by lowering the activation energy without altering equilibrium.",
      orderIndex: 4
    },
    {
      id: "neet-biology-biomolecules-q06",
      topicId: "neet-biology-biomolecules",
      text: "Haemoglobin, with four polypeptide subunits, illustrates which level of protein organisation?",
      optionA: "Primary",
      optionB: "Secondary",
      optionC: "Quaternary",
      optionD: "Tertiary",
      correctOption: "C",
      explanation: "Quaternary structure arises from the association of multiple subunits, as in haemoglobin.",
      orderIndex: 5
    },
    {
      id: "neet-biology-biomolecules-q07",
      topicId: "neet-biology-biomolecules",
      text: "An inhibitor that resembles the substrate and binds the active site is a:",
      optionA: "Coenzyme",
      optionB: "Non-competitive inhibitor",
      optionC: "Allosteric activator",
      optionD: "Competitive inhibitor",
      correctOption: "D",
      explanation: "Competitive inhibitors structurally resemble the substrate and compete for the active site.",
      orderIndex: 6
    },
    {
      id: "neet-biology-biomolecules-q08",
      topicId: "neet-biology-biomolecules",
      text: "Cellulose is a structural homopolymer made of:",
      optionA: "Alpha-D-glucose",
      optionB: "Amino acids",
      optionC: "Fructose",
      optionD: "Beta-D-glucose",
      correctOption: "D",
      explanation: "Cellulose is a structural homopolymer of beta-D-glucose units.",
      orderIndex: 7
    },
    {
      id: "neet-biology-photosynthesis-higher-plants-q01",
      topicId: "neet-biology-photosynthesis-higher-plants",
      text: "The light reaction of photosynthesis takes place in the:",
      optionA: "Stroma",
      optionB: "Thylakoid membrane",
      optionC: "Cytoplasm",
      optionD: "Mitochondrial matrix",
      correctOption: "B",
      explanation: "The light reaction occurs on the thylakoid membranes, producing ATP, NADPH and O2.",
      orderIndex: 0
    },
    {
      id: "neet-biology-photosynthesis-higher-plants-q02",
      topicId: "neet-biology-photosynthesis-higher-plants",
      text: "Oxygen released during photosynthesis comes from:",
      optionA: "Photolysis of water",
      optionB: "Glucose",
      optionC: "Carbon dioxide",
      optionD: "RuBP",
      correctOption: "A",
      explanation: "The splitting (photolysis) of water in the light reaction releases molecular oxygen.",
      orderIndex: 1
    },
    {
      id: "neet-biology-photosynthesis-higher-plants-q03",
      topicId: "neet-biology-photosynthesis-higher-plants",
      text: "The enzyme that fixes CO2 onto RuBP in the Calvin cycle is:",
      optionA: "PEP carboxylase",
      optionB: "ATP synthase",
      optionC: "RuBisCO",
      optionD: "Carbonic anhydrase",
      correctOption: "C",
      explanation: "RuBisCO fixes CO2 onto RuBP, the first stable product being 3-PGA in the C3 pathway.",
      orderIndex: 2
    },
    {
      id: "neet-biology-photosynthesis-higher-plants-q04",
      topicId: "neet-biology-photosynthesis-higher-plants",
      text: "The first stable product of the C3 (Calvin) cycle is a compound with how many carbons?",
      optionA: "3-carbon (3-PGA)",
      optionB: "4-carbon (OAA)",
      optionC: "5-carbon (RuBP)",
      optionD: "6-carbon (glucose)",
      correctOption: "A",
      explanation: "In C3 plants the first stable product is the 3-carbon 3-phosphoglyceric acid (3-PGA).",
      orderIndex: 3
    },
    {
      id: "neet-biology-photosynthesis-higher-plants-q05",
      topicId: "neet-biology-photosynthesis-higher-plants",
      text: "In C4 plants CO2 is first fixed in the mesophyll by which enzyme?",
      optionA: "RuBisCO",
      optionB: "PEP carboxylase",
      optionC: "Hexokinase",
      optionD: "Dehydrogenase",
      correctOption: "B",
      explanation: "C4 plants fix CO2 as oxaloacetate via PEP carboxylase, minimising photorespiration.",
      orderIndex: 4
    },
    {
      id: "neet-biology-photosynthesis-higher-plants-q06",
      topicId: "neet-biology-photosynthesis-higher-plants",
      text: "The primary photosynthetic pigment in green plants is:",
      optionA: "Carotenoid",
      optionB: "Xanthophyll",
      optionC: "Chlorophyll a",
      optionD: "Anthocyanin",
      correctOption: "C",
      explanation: "Chlorophyll a is the primary pigment; carotenoids serve as accessory pigments.",
      orderIndex: 5
    },
    {
      id: "neet-biology-photosynthesis-higher-plants-q07",
      topicId: "neet-biology-photosynthesis-higher-plants",
      text: "Which wavelengths of light are most effective for photosynthesis?",
      optionA: "Green and yellow",
      optionB: "Orange only",
      optionC: "Red and blue",
      optionD: "Ultraviolet",
      correctOption: "C",
      explanation: "Red and blue wavelengths are absorbed best by chlorophyll and drive photosynthesis effectively.",
      orderIndex: 6
    },
    {
      id: "neet-biology-photosynthesis-higher-plants-q08",
      topicId: "neet-biology-photosynthesis-higher-plants",
      text: "The dark reaction (Calvin cycle) occurs in which part of the chloroplast?",
      optionA: "Thylakoid lumen",
      optionB: "Stroma",
      optionC: "Thylakoid membrane",
      optionD: "Outer membrane",
      correctOption: "B",
      explanation: "The Calvin cycle, which synthesises sugar, takes place in the stroma of the chloroplast.",
      orderIndex: 7
    },
    {
      id: "neet-biology-plant-animal-tissues-q01",
      topicId: "neet-biology-plant-animal-tissues",
      text: "Conduction of water from roots to leaves is carried out by:",
      optionA: "Phloem",
      optionB: "Xylem",
      optionC: "Collenchyma",
      optionD: "Parenchyma",
      correctOption: "B",
      explanation: "Xylem conducts water and minerals upward; phloem translocates food.",
      orderIndex: 0
    },
    {
      id: "neet-biology-plant-animal-tissues-q02",
      topicId: "neet-biology-plant-animal-tissues",
      text: "Which animal tissue has plasma as its fluid matrix?",
      optionA: "Muscular tissue",
      optionB: "Nervous tissue",
      optionC: "Epithelial tissue",
      optionD: "Blood",
      correctOption: "D",
      explanation: "Blood is a fluid connective tissue with plasma serving as its liquid matrix.",
      orderIndex: 1
    },
    {
      id: "neet-biology-plant-animal-tissues-q03",
      topicId: "neet-biology-plant-animal-tissues",
      text: "Tendons, which connect muscle to bone, are an example of which tissue?",
      optionA: "Connective",
      optionB: "Epithelial",
      optionC: "Muscular",
      optionD: "Nervous",
      correctOption: "A",
      explanation: "Tendons are dense connective tissue joining muscle to bone; ligaments join bone to bone.",
      orderIndex: 2
    },
    {
      id: "neet-biology-plant-animal-tissues-q04",
      topicId: "neet-biology-plant-animal-tissues",
      text: "Flexible mechanical support in young plant stems is provided mainly by:",
      optionA: "Sclerenchyma",
      optionB: "Phloem",
      optionC: "Xylem",
      optionD: "Collenchyma",
      correctOption: "D",
      explanation: "Collenchyma provides flexible support; sclerenchyma gives rigid support.",
      orderIndex: 3
    },
    {
      id: "neet-biology-plant-animal-tissues-q05",
      topicId: "neet-biology-plant-animal-tissues",
      text: "Cardiac muscle is correctly described as:",
      optionA: "Smooth and multinucleate",
      optionB: "Smooth and voluntary",
      optionC: "Striated and voluntary",
      optionD: "Striated, branched and involuntary",
      correctOption: "D",
      explanation: "Cardiac muscle is striated, branched, uninucleate and involuntary.",
      orderIndex: 4
    },
    {
      id: "neet-biology-plant-animal-tissues-q06",
      topicId: "neet-biology-plant-animal-tissues",
      text: "Active cell division in plants takes place in tissue called:",
      optionA: "Parenchyma",
      optionB: "Sclerenchyma",
      optionC: "Phloem",
      optionD: "Meristematic tissue",
      correctOption: "D",
      explanation: "Meristematic tissue consists of dividing cells responsible for plant growth.",
      orderIndex: 5
    },
    {
      id: "neet-biology-plant-animal-tissues-q07",
      topicId: "neet-biology-plant-animal-tissues",
      text: "Which tissue lines and covers body surfaces in animals?",
      optionA: "Connective",
      optionB: "Muscular",
      optionC: "Epithelial",
      optionD: "Nervous",
      correctOption: "C",
      explanation: "Epithelial tissue covers and lines body surfaces and cavities.",
      orderIndex: 6
    },
    {
      id: "neet-biology-plant-animal-tissues-q08",
      topicId: "neet-biology-plant-animal-tissues",
      text: "Translocation of food in plants occurs through sieve tubes of the:",
      optionA: "Phloem",
      optionB: "Xylem",
      optionC: "Cambium",
      optionD: "Cortex",
      correctOption: "A",
      explanation: "Phloem, through its sieve tubes, translocates the food prepared in leaves.",
      orderIndex: 7
    },
    {
      id: "neet-biology-breathing-exchange-of-gases-q01",
      topicId: "neet-biology-breathing-exchange-of-gases",
      text: "The exchange of gases in the lungs occurs across the walls of the:",
      optionA: "Bronchi",
      optionB: "Trachea",
      optionC: "Larynx",
      optionD: "Alveoli",
      correctOption: "D",
      explanation: "Gaseous exchange occurs by diffusion across the thin walls of the alveoli.",
      orderIndex: 0
    },
    {
      id: "neet-biology-breathing-exchange-of-gases-q02",
      topicId: "neet-biology-breathing-exchange-of-gases",
      text: "Carbon dioxide is transported in blood mainly as:",
      optionA: "Bicarbonate ions",
      optionB: "Carbaminohaemoglobin",
      optionC: "Dissolved CO2",
      optionD: "Carbonic acid gas",
      correctOption: "A",
      explanation: "About 70 percent of CO2 is carried as bicarbonate ions in the plasma.",
      orderIndex: 1
    },
    {
      id: "neet-biology-breathing-exchange-of-gases-q03",
      topicId: "neet-biology-breathing-exchange-of-gases",
      text: "During inspiration the diaphragm:",
      optionA: "Relaxes and domes up",
      optionB: "Flattens and contracts",
      optionC: "Stays unchanged",
      optionD: "Moves sideways only",
      correctOption: "B",
      explanation: "The diaphragm flattens and contracts during inspiration, increasing thoracic volume.",
      orderIndex: 2
    },
    {
      id: "neet-biology-breathing-exchange-of-gases-q04",
      topicId: "neet-biology-breathing-exchange-of-gases",
      text: "The respiratory rhythm centre that controls breathing is located in the:",
      optionA: "Cerebellum",
      optionB: "Hypothalamus",
      optionC: "Medulla oblongata",
      optionD: "Spinal cord",
      correctOption: "C",
      explanation: "The breathing centre lies in the medulla oblongata of the brain.",
      orderIndex: 3
    },
    {
      id: "neet-biology-breathing-exchange-of-gases-q05",
      topicId: "neet-biology-breathing-exchange-of-gases",
      text: "Oxygen is transported in blood predominantly as:",
      optionA: "Oxyhaemoglobin",
      optionB: "Dissolved O2 in plasma",
      optionC: "Bicarbonate",
      optionD: "Carbamino compound",
      correctOption: "A",
      explanation: "About 97 percent of oxygen is carried bound to haemoglobin as oxyhaemoglobin.",
      orderIndex: 4
    },
    {
      id: "neet-biology-breathing-exchange-of-gases-q06",
      topicId: "neet-biology-breathing-exchange-of-gases",
      text: "The approximate tidal volume of a normal adult human is:",
      optionA: "4500 mL",
      optionB: "1500 mL",
      optionC: "3500 mL",
      optionD: "500 mL",
      correctOption: "D",
      explanation: "Tidal volume, the air exchanged in a normal breath, is about 500 mL.",
      orderIndex: 5
    },
    {
      id: "neet-biology-breathing-exchange-of-gases-q07",
      topicId: "neet-biology-breathing-exchange-of-gases",
      text: "The enzyme in RBCs that speeds conversion of CO2 to bicarbonate is:",
      optionA: "Pepsin",
      optionB: "Carbonic anhydrase",
      optionC: "Catalase",
      optionD: "Amylase",
      correctOption: "B",
      explanation: "Carbonic anhydrase in red blood cells accelerates the CO2-to-bicarbonate reaction.",
      orderIndex: 6
    },
    {
      id: "neet-biology-breathing-exchange-of-gases-q08",
      topicId: "neet-biology-breathing-exchange-of-gases",
      text: "A rightward shift of the oxygen dissociation curve (Bohr effect) is favoured by:",
      optionA: "Low CO2 and high pH",
      optionB: "High pH alone",
      optionC: "Low temperature only",
      optionD: "High CO2, low pH and high temperature",
      correctOption: "D",
      explanation: "High CO2, low pH and high temperature shift the curve right, releasing more O2 to tissues.",
      orderIndex: 7
    },
    {
      id: "neet-biology-body-fluids-circulation-q01",
      topicId: "neet-biology-body-fluids-circulation",
      text: "The natural pacemaker of the human heart is the:",
      optionA: "AV node",
      optionB: "Bundle of His",
      optionC: "SA node",
      optionD: "Purkinje fibres",
      correctOption: "C",
      explanation: "The sino-atrial (SA) node generates impulses and acts as the heart's pacemaker.",
      orderIndex: 0
    },
    {
      id: "neet-biology-body-fluids-circulation-q02",
      topicId: "neet-biology-body-fluids-circulation",
      text: "Mature mammalian red blood cells are unusual because they:",
      optionA: "Have two nuclei",
      optionB: "Lack a nucleus",
      optionC: "Contain chlorophyll",
      optionD: "Are amoeboid",
      correctOption: "B",
      explanation: "Mature mammalian RBCs lack a nucleus and live for about 120 days.",
      orderIndex: 1
    },
    {
      id: "neet-biology-body-fluids-circulation-q03",
      topicId: "neet-biology-body-fluids-circulation",
      text: "The valve located between the left atrium and left ventricle is the:",
      optionA: "Tricuspid valve",
      optionB: "Pulmonary valve",
      optionC: "Bicuspid (mitral) valve",
      optionD: "Aortic valve",
      correctOption: "C",
      explanation: "The bicuspid (mitral) valve lies between the left atrium and left ventricle.",
      orderIndex: 2
    },
    {
      id: "neet-biology-body-fluids-circulation-q04",
      topicId: "neet-biology-body-fluids-circulation",
      text: "Blood clotting is the primary function of:",
      optionA: "Erythrocytes",
      optionB: "Leukocytes",
      optionC: "Platelets",
      optionD: "Plasma proteins only",
      correctOption: "C",
      explanation: "Platelets (thrombocytes) play the central role in blood coagulation.",
      orderIndex: 3
    },
    {
      id: "neet-biology-body-fluids-circulation-q05",
      topicId: "neet-biology-body-fluids-circulation",
      text: "In the ABO system, which blood group is the universal donor?",
      optionA: "A",
      optionB: "B",
      optionC: "AB",
      optionD: "O",
      correctOption: "D",
      explanation: "Group O lacks A and B surface antigens, making it the universal donor.",
      orderIndex: 4
    },
    {
      id: "neet-biology-body-fluids-circulation-q06",
      topicId: "neet-biology-body-fluids-circulation",
      text: "Roughly what percentage of blood volume is plasma?",
      optionA: "About 10 percent",
      optionB: "About 25 percent",
      optionC: "About 90 percent",
      optionD: "About 55 percent",
      correctOption: "D",
      explanation: "Plasma forms about 55 percent of blood volume and is its fluid matrix.",
      orderIndex: 5
    },
    {
      id: "neet-biology-body-fluids-circulation-q07",
      topicId: "neet-biology-body-fluids-circulation",
      text: "The human heart is described as myogenic because the heartbeat originates in:",
      optionA: "Nerves of the brain",
      optionB: "Cardiac muscle itself",
      optionC: "The spinal cord",
      optionD: "Adrenal glands",
      correctOption: "B",
      explanation: "A myogenic heart generates its own beat from cardiac muscle (the SA node), not from nerves.",
      orderIndex: 6
    },
    {
      id: "neet-biology-body-fluids-circulation-q08",
      topicId: "neet-biology-body-fluids-circulation",
      text: "Double circulation in humans is advantageous because it:",
      optionA: "Mixes oxygenated and deoxygenated blood",
      optionB: "Keeps oxygenated and deoxygenated blood separate",
      optionC: "Removes the need for a heart",
      optionD: "Slows blood flow to tissues",
      correctOption: "B",
      explanation: "Double circulation keeps oxygenated and deoxygenated blood separate for efficient delivery.",
      orderIndex: 7
    },
    {
      id: "neet-biology-excretory-products-elimination-q01",
      topicId: "neet-biology-excretory-products-elimination",
      text: "The functional unit of the kidney is the:",
      optionA: "Neuron",
      optionB: "Glomerulus",
      optionC: "Alveolus",
      optionD: "Nephron",
      correctOption: "D",
      explanation: "The nephron is the structural and functional unit of the kidney.",
      orderIndex: 0
    },
    {
      id: "neet-biology-excretory-products-elimination-q02",
      topicId: "neet-biology-excretory-products-elimination",
      text: "Humans are ureotelic, meaning the chief nitrogenous waste excreted is:",
      optionA: "Urea",
      optionB: "Uric acid",
      optionC: "Ammonia",
      optionD: "Amino acids",
      correctOption: "A",
      explanation: "Ureotelic animals like humans excrete urea, formed in the liver by the ornithine cycle.",
      orderIndex: 1
    },
    {
      id: "neet-biology-excretory-products-elimination-q03",
      topicId: "neet-biology-excretory-products-elimination",
      text: "Glomerular filtration in the nephron takes place at the:",
      optionA: "Loop of Henle",
      optionB: "Distal tubule",
      optionC: "Collecting duct",
      optionD: "Bowman's capsule",
      correctOption: "D",
      explanation: "Filtration occurs at Bowman's capsule, which encloses the glomerulus.",
      orderIndex: 2
    },
    {
      id: "neet-biology-excretory-products-elimination-q04",
      topicId: "neet-biology-excretory-products-elimination",
      text: "ADH (vasopressin) acts on the kidney to:",
      optionA: "Increase urine volume",
      optionB: "Excrete more glucose",
      optionC: "Promote water reabsorption",
      optionD: "Block filtration",
      correctOption: "C",
      explanation: "ADH promotes water reabsorption, concentrating the urine and conserving water.",
      orderIndex: 3
    },
    {
      id: "neet-biology-excretory-products-elimination-q05",
      topicId: "neet-biology-excretory-products-elimination",
      text: "Birds and reptiles, which excrete mainly uric acid, are termed:",
      optionA: "Uricotelic",
      optionB: "Ureotelic",
      optionC: "Ammonotelic",
      optionD: "Osmotic",
      correctOption: "A",
      explanation: "Uricotelic animals such as birds and reptiles excrete nitrogen mainly as uric acid.",
      orderIndex: 4
    },
    {
      id: "neet-biology-excretory-products-elimination-q06",
      topicId: "neet-biology-excretory-products-elimination",
      text: "The glomerular filtration rate (GFR) in a healthy person is about:",
      optionA: "25 mL per minute",
      optionB: "500 mL per minute",
      optionC: "125 mL per minute",
      optionD: "1000 mL per minute",
      correctOption: "C",
      explanation: "A healthy GFR is about 125 mL per minute (roughly 180 L filtered per day).",
      orderIndex: 5
    },
    {
      id: "neet-biology-excretory-products-elimination-q07",
      topicId: "neet-biology-excretory-products-elimination",
      text: "The medullary concentration gradient of the kidney is maintained by the:",
      optionA: "Counter-current mechanism in the loop of Henle",
      optionB: "Glomerulus",
      optionC: "Bowman's capsule",
      optionD: "Renal pelvis",
      correctOption: "A",
      explanation: "The counter-current mechanism in the loop of Henle maintains the medullary osmotic gradient.",
      orderIndex: 6
    },
    {
      id: "neet-biology-excretory-products-elimination-q08",
      topicId: "neet-biology-excretory-products-elimination",
      text: "The hormone renin, which raises blood pressure via RAAS, is released by:",
      optionA: "JG cells of the kidney",
      optionB: "Adrenal cortex",
      optionC: "Liver",
      optionD: "Pancreas",
      correctOption: "A",
      explanation: "Juxtaglomerular (JG) cells release renin, triggering the RAAS to raise blood pressure.",
      orderIndex: 7
    },
    {
      id: "neet-biology-neural-control-coordination-q01",
      topicId: "neet-biology-neural-control-coordination",
      text: "The resting membrane potential of a neuron is approximately:",
      optionA: "+70 mV",
      optionB: "0 mV",
      optionC: "-30 mV",
      optionD: "-70 mV",
      correctOption: "D",
      explanation: "The resting potential is about -70 mV, with more sodium ions outside the membrane.",
      orderIndex: 0
    },
    {
      id: "neet-biology-neural-control-coordination-q02",
      topicId: "neet-biology-neural-control-coordination",
      text: "Conduction of the nerve impulse in myelinated fibres is called:",
      optionA: "Continuous conduction",
      optionB: "Saltatory conduction",
      optionC: "Synaptic conduction",
      optionD: "Reflex conduction",
      correctOption: "B",
      explanation: "In myelinated axons the impulse jumps between nodes of Ranvier, called saltatory conduction.",
      orderIndex: 1
    },
    {
      id: "neet-biology-neural-control-coordination-q03",
      topicId: "neet-biology-neural-control-coordination",
      text: "Which part of the brain controls balance and coordination of movement?",
      optionA: "Cerebrum",
      optionB: "Cerebellum",
      optionC: "Medulla oblongata",
      optionD: "Hypothalamus",
      correctOption: "B",
      explanation: "The cerebellum controls balance, posture and coordination of voluntary movement.",
      orderIndex: 2
    },
    {
      id: "neet-biology-neural-control-coordination-q04",
      topicId: "neet-biology-neural-control-coordination",
      text: "During depolarisation in an action potential, which ions rush into the neuron?",
      optionA: "Potassium ions",
      optionB: "Chloride ions",
      optionC: "Sodium ions",
      optionD: "Calcium ions only",
      correctOption: "C",
      explanation: "Depolarisation occurs as sodium ions rush into the neuron, reversing membrane polarity.",
      orderIndex: 3
    },
    {
      id: "neet-biology-neural-control-coordination-q05",
      topicId: "neet-biology-neural-control-coordination",
      text: "A commonly cited chemical neurotransmitter at synapses is:",
      optionA: "Insulin",
      optionB: "Renin",
      optionC: "Haemoglobin",
      optionD: "Acetylcholine",
      correctOption: "D",
      explanation: "Acetylcholine is a neurotransmitter that carries signals across chemical synapses.",
      orderIndex: 4
    },
    {
      id: "neet-biology-neural-control-coordination-q06",
      topicId: "neet-biology-neural-control-coordination",
      text: "The resting potential of a neuron is maintained chiefly by the:",
      optionA: "Nucleus",
      optionB: "Myelin sheath",
      optionC: "Sodium-potassium pump",
      optionD: "Golgi body",
      correctOption: "C",
      explanation: "The sodium-potassium pump actively maintains the ionic gradient and resting potential.",
      orderIndex: 5
    },
    {
      id: "neet-biology-neural-control-coordination-q07",
      topicId: "neet-biology-neural-control-coordination",
      text: "The central nervous system consists of the:",
      optionA: "Sense organs",
      optionB: "Nerves and ganglia",
      optionC: "Brain and spinal cord",
      optionD: "Autonomic nerves only",
      correctOption: "C",
      explanation: "The central nervous system comprises the brain and the spinal cord.",
      orderIndex: 6
    },
    {
      id: "neet-biology-neural-control-coordination-q08",
      topicId: "neet-biology-neural-control-coordination",
      text: "A rapid involuntary response such as withdrawing the hand from heat is integrated at the:",
      optionA: "Cerebrum",
      optionB: "Cerebellum",
      optionC: "Spinal cord (reflex arc)",
      optionD: "Thalamus",
      correctOption: "C",
      explanation: "A reflex arc allows rapid involuntary responses, integrated at the spinal cord.",
      orderIndex: 7
    },
    {
      id: "neet-biology-principles-inheritance-variation-q01",
      topicId: "neet-biology-principles-inheritance-variation",
      text: "The phenotypic ratio of a monohybrid cross in the F2 generation is:",
      optionA: "1:1",
      optionB: "3:1",
      optionC: "9:3:3:1",
      optionD: "1:2:1",
      correctOption: "B",
      explanation: "A monohybrid cross gives a 3:1 phenotypic ratio in the F2 generation.",
      orderIndex: 0
    },
    {
      id: "neet-biology-principles-inheritance-variation-q02",
      topicId: "neet-biology-principles-inheritance-variation",
      text: "Mendel performed his classic genetic experiments using:",
      optionA: "Drosophila",
      optionB: "Maize",
      optionC: "Garden pea",
      optionD: "Snapdragon",
      correctOption: "C",
      explanation: "Mendel used the garden pea, Pisum sativum, to establish the laws of inheritance.",
      orderIndex: 1
    },
    {
      id: "neet-biology-principles-inheritance-variation-q03",
      topicId: "neet-biology-principles-inheritance-variation",
      text: "Inheritance of the ABO blood group, where both alleles express, is an example of:",
      optionA: "Incomplete dominance",
      optionB: "Codominance",
      optionC: "Epistasis",
      optionD: "Linkage",
      correctOption: "B",
      explanation: "ABO blood groups show codominance, where alleles I-A and I-B are both expressed.",
      orderIndex: 2
    },
    {
      id: "neet-biology-principles-inheritance-variation-q04",
      topicId: "neet-biology-principles-inheritance-variation",
      text: "Down syndrome is caused by:",
      optionA: "Trisomy of chromosome 21",
      optionB: "Monosomy of chromosome 21",
      optionC: "Trisomy of chromosome 18",
      optionD: "XXY genotype",
      correctOption: "A",
      explanation: "Down syndrome results from trisomy of chromosome 21 (three copies of chromosome 21).",
      orderIndex: 3
    },
    {
      id: "neet-biology-principles-inheritance-variation-q05",
      topicId: "neet-biology-principles-inheritance-variation",
      text: "Mendel's law of segregation states that:",
      optionA: "Alleles assort independently",
      optionB: "One allele always masks another",
      optionC: "Alleles separate during gamete formation",
      optionD: "Genes are linked",
      correctOption: "C",
      explanation: "The law of segregation states that paired alleles separate during gamete formation.",
      orderIndex: 4
    },
    {
      id: "neet-biology-principles-inheritance-variation-q06",
      topicId: "neet-biology-principles-inheritance-variation",
      text: "Haemophilia and red-green colour blindness are inherited as:",
      optionA: "Autosomal dominant traits",
      optionB: "Y-linked traits",
      optionC: "X-linked recessive traits",
      optionD: "Mitochondrial traits",
      correctOption: "C",
      explanation: "Both haemophilia and colour blindness are X-linked recessive disorders.",
      orderIndex: 5
    },
    {
      id: "neet-biology-principles-inheritance-variation-q07",
      topicId: "neet-biology-principles-inheritance-variation",
      text: "A dihybrid cross between two heterozygotes gives an F2 phenotypic ratio of:",
      optionA: "9:3:3:1",
      optionB: "1:2:1",
      optionC: "3:1",
      optionD: "1:1:1:1",
      correctOption: "A",
      explanation: "A dihybrid cross yields a 9:3:3:1 phenotypic ratio in the F2 generation.",
      orderIndex: 6
    },
    {
      id: "neet-biology-principles-inheritance-variation-q08",
      topicId: "neet-biology-principles-inheritance-variation",
      text: "Crossing an individual of unknown genotype with a homozygous recessive parent is a:",
      optionA: "Test cross",
      optionB: "Back cross to dominant",
      optionC: "Reciprocal cross",
      optionD: "Dihybrid cross",
      correctOption: "A",
      explanation: "A test cross with a homozygous recessive parent reveals the unknown genotype.",
      orderIndex: 7
    },
    {
      id: "neet-biology-molecular-basis-inheritance-q01",
      topicId: "neet-biology-molecular-basis-inheritance",
      text: "The double-helix model of DNA was proposed in 1953 by:",
      optionA: "Watson and Crick",
      optionB: "Meselson and Stahl",
      optionC: "Hershey and Chase",
      optionD: "Griffith and Avery",
      correctOption: "A",
      explanation: "Watson and Crick proposed the antiparallel double-helix structure of DNA in 1953.",
      orderIndex: 0
    },
    {
      id: "neet-biology-molecular-basis-inheritance-q02",
      topicId: "neet-biology-molecular-basis-inheritance",
      text: "In DNA, adenine pairs with thymine through how many hydrogen bonds?",
      optionA: "One",
      optionB: "Two",
      optionC: "Three",
      optionD: "Four",
      correctOption: "B",
      explanation: "A=T pairing involves two hydrogen bonds, whereas G=C uses three.",
      orderIndex: 1
    },
    {
      id: "neet-biology-molecular-basis-inheritance-q03",
      topicId: "neet-biology-molecular-basis-inheritance",
      text: "DNA replication is described as semiconservative, a fact proved experimentally by:",
      optionA: "Meselson and Stahl",
      optionB: "Watson and Crick",
      optionC: "Mendel",
      optionD: "Morgan",
      correctOption: "A",
      explanation: "Meselson and Stahl demonstrated the semiconservative nature of DNA replication.",
      orderIndex: 2
    },
    {
      id: "neet-biology-molecular-basis-inheritance-q04",
      topicId: "neet-biology-molecular-basis-inheritance",
      text: "The start codon that signals the beginning of translation is:",
      optionA: "UAA",
      optionB: "AUG",
      optionC: "UAG",
      optionD: "UGA",
      correctOption: "B",
      explanation: "AUG is the start codon coding for methionine; UAA, UAG and UGA are stop codons.",
      orderIndex: 3
    },
    {
      id: "neet-biology-molecular-basis-inheritance-q05",
      topicId: "neet-biology-molecular-basis-inheritance",
      text: "The classic model of inducible gene regulation in E. coli is the:",
      optionA: "trp operon",
      optionB: "ara operon",
      optionC: "lac operon",
      optionD: "gal operon",
      correctOption: "C",
      explanation: "The lac operon of E. coli is the classic example of inducible gene regulation.",
      orderIndex: 4
    },
    {
      id: "neet-biology-molecular-basis-inheritance-q06",
      topicId: "neet-biology-molecular-basis-inheritance",
      text: "The enzyme that synthesises mRNA from a DNA template during transcription is:",
      optionA: "RNA polymerase",
      optionB: "DNA polymerase",
      optionC: "DNA ligase",
      optionD: "Helicase",
      correctOption: "A",
      explanation: "RNA polymerase transcribes DNA into mRNA during transcription.",
      orderIndex: 5
    },
    {
      id: "neet-biology-molecular-basis-inheritance-q07",
      topicId: "neet-biology-molecular-basis-inheritance",
      text: "According to the central dogma, the correct flow of genetic information is:",
      optionA: "Protein to RNA to DNA",
      optionB: "RNA to DNA to Protein",
      optionC: "DNA to Protein to RNA",
      optionD: "DNA to RNA to Protein",
      correctOption: "D",
      explanation: "The central dogma describes information flowing from DNA to RNA to protein.",
      orderIndex: 6
    },
    {
      id: "neet-biology-molecular-basis-inheritance-q08",
      topicId: "neet-biology-molecular-basis-inheritance",
      text: "The portion of tRNA that base-pairs with the mRNA codon is the:",
      optionA: "Anticodon",
      optionB: "Codon",
      optionC: "Promoter",
      optionD: "Operator",
      correctOption: "A",
      explanation: "The tRNA anticodon reads and base-pairs with the complementary mRNA codon.",
      orderIndex: 7
    },
    {
      id: "neet-biology-evolution-q01",
      topicId: "neet-biology-evolution",
      text: "The theory of natural selection was proposed by:",
      optionA: "Lamarck",
      optionB: "De Vries",
      optionC: "Darwin and Wallace",
      optionD: "Mendel",
      correctOption: "C",
      explanation: "Darwin and Wallace independently proposed evolution by natural selection.",
      orderIndex: 0
    },
    {
      id: "neet-biology-evolution-q02",
      topicId: "neet-biology-evolution",
      text: "Homologous organs, having a common origin but different functions, indicate:",
      optionA: "Convergent evolution",
      optionB: "Parallel evolution",
      optionC: "Divergent evolution",
      optionD: "Coevolution",
      correctOption: "C",
      explanation: "Homologous organs share a common origin and indicate divergent evolution.",
      orderIndex: 1
    },
    {
      id: "neet-biology-evolution-q03",
      topicId: "neet-biology-evolution",
      text: "The wings of a bird and a butterfly are analogous organs that show:",
      optionA: "Divergent evolution",
      optionB: "Adaptive radiation only",
      optionC: "Convergent evolution",
      optionD: "Genetic drift",
      correctOption: "C",
      explanation: "Analogous organs have different origins but similar function, indicating convergent evolution.",
      orderIndex: 2
    },
    {
      id: "neet-biology-evolution-q04",
      topicId: "neet-biology-evolution",
      text: "The inheritance of acquired characters was the central idea of:",
      optionA: "Darwin",
      optionB: "Wallace",
      optionC: "Lamarck",
      optionD: "Hardy",
      correctOption: "C",
      explanation: "Lamarck proposed the now-discredited inheritance of acquired characters.",
      orderIndex: 3
    },
    {
      id: "neet-biology-evolution-q05",
      topicId: "neet-biology-evolution",
      text: "Industrial melanism in peppered moths is a classic example of:",
      optionA: "Genetic drift",
      optionB: "Natural selection",
      optionC: "Mutation pressure",
      optionD: "Gene flow",
      correctOption: "B",
      explanation: "The rise of dark peppered moths during industrialisation illustrates natural selection.",
      orderIndex: 4
    },
    {
      id: "neet-biology-evolution-q06",
      topicId: "neet-biology-evolution",
      text: "The Miller-Urey experiment provided evidence for:",
      optionA: "Spontaneous generation",
      optionB: "Natural selection",
      optionC: "Chemical evolution of life",
      optionD: "Genetic drift",
      correctOption: "C",
      explanation: "The Miller-Urey experiment supported the chemical (abiogenic) origin of organic molecules.",
      orderIndex: 5
    },
    {
      id: "neet-biology-evolution-q07",
      topicId: "neet-biology-evolution",
      text: "The Hardy-Weinberg principle states that allele frequencies remain constant when:",
      optionA: "No evolutionary forces act",
      optionB: "Mutation is frequent",
      optionC: "Migration is high",
      optionD: "Selection is strong",
      correctOption: "A",
      explanation: "Allele frequencies stay constant in the absence of evolutionary forces (Hardy-Weinberg).",
      orderIndex: 6
    },
    {
      id: "neet-biology-evolution-q08",
      topicId: "neet-biology-evolution",
      text: "The correct sequence in human evolution is:",
      optionA: "Homo sapiens to Homo erectus to Homo habilis",
      optionB: "Australopithecus to Homo habilis to Homo erectus to Homo sapiens",
      optionC: "Homo erectus to Australopithecus to Homo sapiens",
      optionD: "Homo habilis to Australopithecus to Homo sapiens",
      correctOption: "B",
      explanation: "Human evolution proceeded Australopithecus to Homo habilis to Homo erectus to Homo sapiens.",
      orderIndex: 7
    },
    {
      id: "neet-biology-human-reproduction-q01",
      topicId: "neet-biology-human-reproduction",
      text: "In humans fertilisation normally takes place in the:",
      optionA: "Uterus",
      optionB: "Ovary",
      optionC: "Ampulla of the fallopian tube",
      optionD: "Cervix",
      correctOption: "C",
      explanation: "Fertilisation occurs in the ampulla of the fallopian tube, forming a diploid zygote.",
      orderIndex: 0
    },
    {
      id: "neet-biology-human-reproduction-q02",
      topicId: "neet-biology-human-reproduction",
      text: "Ovulation in a typical 28-day menstrual cycle is triggered by a surge of:",
      optionA: "FSH",
      optionB: "LH",
      optionC: "Progesterone",
      optionD: "Oxytocin",
      correctOption: "B",
      explanation: "A mid-cycle LH surge around day 14 triggers ovulation.",
      orderIndex: 1
    },
    {
      id: "neet-biology-human-reproduction-q03",
      topicId: "neet-biology-human-reproduction",
      text: "Spermatogenesis takes place within the:",
      optionA: "Epididymis",
      optionB: "Seminiferous tubules of the testis",
      optionC: "Prostate gland",
      optionD: "Vas deferens",
      correctOption: "B",
      explanation: "Sperm are produced in the seminiferous tubules of the testis.",
      orderIndex: 2
    },
    {
      id: "neet-biology-human-reproduction-q04",
      topicId: "neet-biology-human-reproduction",
      text: "The hormone detected by most pregnancy tests is:",
      optionA: "Oestrogen",
      optionB: "Progesterone",
      optionC: "FSH",
      optionD: "hCG",
      correctOption: "D",
      explanation: "Human chorionic gonadotropin (hCG) is the basis of common pregnancy tests.",
      orderIndex: 3
    },
    {
      id: "neet-biology-human-reproduction-q05",
      topicId: "neet-biology-human-reproduction",
      text: "Progesterone that maintains the uterine lining is secreted mainly by the:",
      optionA: "Corpus luteum",
      optionB: "Anterior pituitary",
      optionC: "Placenta in early days only",
      optionD: "Hypothalamus",
      correctOption: "A",
      explanation: "The corpus luteum secretes progesterone that maintains the uterine endometrium.",
      orderIndex: 4
    },
    {
      id: "neet-biology-human-reproduction-q06",
      topicId: "neet-biology-human-reproduction",
      text: "The hormone that stimulates uterine contractions during childbirth is:",
      optionA: "Oxytocin",
      optionB: "Insulin",
      optionC: "Thyroxine",
      optionD: "Aldosterone",
      correctOption: "A",
      explanation: "Oxytocin stimulates strong uterine contractions during parturition (childbirth).",
      orderIndex: 5
    },
    {
      id: "neet-biology-human-reproduction-q07",
      topicId: "neet-biology-human-reproduction",
      text: "Normal human gestation lasts approximately:",
      optionA: "6 months",
      optionB: "9 months (about 280 days)",
      optionC: "12 months",
      optionD: "3 months",
      correctOption: "B",
      explanation: "Human gestation lasts about 9 months (roughly 280 days).",
      orderIndex: 6
    },
    {
      id: "neet-biology-human-reproduction-q08",
      topicId: "neet-biology-human-reproduction",
      text: "After fertilisation, the structure that implants in the uterine wall is the:",
      optionA: "Zygote",
      optionB: "Corpus luteum",
      optionC: "Ovum",
      optionD: "Blastocyst",
      correctOption: "D",
      explanation: "The blastocyst implants in the uterine wall, after which the placenta develops.",
      orderIndex: 7
    },
    {
      id: "neet-biology-biotechnology-principles-q01",
      topicId: "neet-biology-biotechnology-principles",
      text: "Enzymes that cut DNA at specific recognition sequences are called:",
      optionA: "DNA ligases",
      optionB: "Polymerases",
      optionC: "Restriction endonucleases",
      optionD: "Helicases",
      correctOption: "C",
      explanation: "Restriction endonucleases are molecular scissors that cut DNA at specific sites.",
      orderIndex: 0
    },
    {
      id: "neet-biology-biotechnology-principles-q02",
      topicId: "neet-biology-biotechnology-principles",
      text: "The heat-stable enzyme used in PCR is:",
      optionA: "DNA ligase",
      optionB: "Reverse transcriptase",
      optionC: "Restriction enzyme",
      optionD: "Taq polymerase",
      correctOption: "D",
      explanation: "PCR uses heat-stable Taq polymerase to extend primers during repeated cycles.",
      orderIndex: 1
    },
    {
      id: "neet-biology-biotechnology-principles-q03",
      topicId: "neet-biology-biotechnology-principles",
      text: "In gel electrophoresis, DNA fragments move towards the:",
      optionA: "Negative electrode",
      optionB: "Neither electrode",
      optionC: "Positive electrode",
      optionD: "Both equally",
      correctOption: "C",
      explanation: "Negatively charged DNA migrates towards the positive electrode (anode) in electrophoresis.",
      orderIndex: 2
    },
    {
      id: "neet-biology-biotechnology-principles-q04",
      topicId: "neet-biology-biotechnology-principles",
      text: "The enzyme that joins two DNA fragments together is:",
      optionA: "Amylase",
      optionB: "Restriction enzyme",
      optionC: "DNA ligase",
      optionD: "Lipase",
      correctOption: "C",
      explanation: "DNA ligase seals the nicks and joins DNA fragments into recombinant molecules.",
      orderIndex: 3
    },
    {
      id: "neet-biology-biotechnology-principles-q05",
      topicId: "neet-biology-biotechnology-principles",
      text: "A widely used restriction endonuclease in genetic engineering is:",
      optionA: "Taq",
      optionB: "RNase",
      optionC: "DNA ligase",
      optionD: "EcoRI",
      correctOption: "D",
      explanation: "EcoRI is a commonly used restriction enzyme that cuts DNA at a specific palindromic site.",
      orderIndex: 4
    },
    {
      id: "neet-biology-biotechnology-principles-q06",
      topicId: "neet-biology-biotechnology-principles",
      text: "The vehicle most commonly used to carry foreign DNA into a host cell is a:",
      optionA: "Ribosome",
      optionB: "Lysosome",
      optionC: "Plasmid vector",
      optionD: "Centriole",
      correctOption: "C",
      explanation: "A plasmid acts as a vector, carrying foreign DNA into a host such as E. coli.",
      orderIndex: 5
    },
    {
      id: "neet-biology-biotechnology-principles-q07",
      topicId: "neet-biology-biotechnology-principles",
      text: "The three repeating steps of one PCR cycle are:",
      optionA: "Ligation, cutting, sealing",
      optionB: "Denaturation, annealing, extension",
      optionC: "Transcription, translation, folding",
      optionD: "Replication, transcription, translation",
      correctOption: "B",
      explanation: "Each PCR cycle consists of denaturation, primer annealing and extension.",
      orderIndex: 6
    },
    {
      id: "neet-biology-biotechnology-principles-q08",
      topicId: "neet-biology-biotechnology-principles",
      text: "Large-scale culture of cells for biotechnological products is carried out in:",
      optionA: "Petri dishes only",
      optionB: "Autoclaves",
      optionC: "Test tubes",
      optionD: "Bioreactors",
      correctOption: "D",
      explanation: "Bioreactors allow large-scale culture of cells to obtain biotechnology products.",
      orderIndex: 7
    },
    {
      id: "neet-biology-ecosystem-biodiversity-q01",
      topicId: "neet-biology-ecosystem-biodiversity",
      text: "Green plants in an ecosystem occupy the trophic level of:",
      optionA: "Primary consumers",
      optionB: "Decomposers",
      optionC: "Producers",
      optionD: "Secondary consumers",
      correctOption: "C",
      explanation: "Green plants are producers (autotrophs), the first trophic level of an ecosystem.",
      orderIndex: 0
    },
    {
      id: "neet-biology-ecosystem-biodiversity-q02",
      topicId: "neet-biology-ecosystem-biodiversity",
      text: "The 10 percent law of energy transfer between trophic levels was given by:",
      optionA: "Odum",
      optionB: "Tansley",
      optionC: "Lindeman",
      optionD: "Darwin",
      correctOption: "C",
      explanation: "Lindeman's 10 percent law states only about 10 percent of energy passes to the next trophic level.",
      orderIndex: 1
    },
    {
      id: "neet-biology-ecosystem-biodiversity-q03",
      topicId: "neet-biology-ecosystem-biodiversity",
      text: "The pyramid of energy in an ecosystem is always:",
      optionA: "Upright",
      optionB: "Inverted",
      optionC: "Spindle-shaped",
      optionD: "Horizontal",
      correctOption: "A",
      explanation: "The pyramid of energy is always upright because energy decreases at each higher level.",
      orderIndex: 2
    },
    {
      id: "neet-biology-ecosystem-biodiversity-q04",
      topicId: "neet-biology-ecosystem-biodiversity",
      text: "Conservation of species within their natural habitat, as in national parks, is:",
      optionA: "Ex situ conservation",
      optionB: "Tissue culture",
      optionC: "Cryopreservation",
      optionD: "In situ conservation",
      correctOption: "D",
      explanation: "In situ conservation protects species in their natural habitats like parks and reserves.",
      orderIndex: 3
    },
    {
      id: "neet-biology-ecosystem-biodiversity-q05",
      topicId: "neet-biology-ecosystem-biodiversity",
      text: "Energy flow through an ecosystem is described as:",
      optionA: "Cyclic",
      optionB: "Unidirectional",
      optionC: "Bidirectional",
      optionD: "Random",
      correctOption: "B",
      explanation: "Energy flow in an ecosystem is unidirectional, moving from producers to consumers.",
      orderIndex: 4
    },
    {
      id: "neet-biology-ecosystem-biodiversity-q06",
      topicId: "neet-biology-ecosystem-biodiversity",
      text: "The greatest species richness on Earth is found in the:",
      optionA: "Polar regions",
      optionB: "Deserts",
      optionC: "Tropics",
      optionD: "Temperate grasslands",
      correctOption: "C",
      explanation: "Species richness is highest in the tropics, which support the greatest biodiversity.",
      orderIndex: 5
    },
    {
      id: "neet-biology-ecosystem-biodiversity-q07",
      topicId: "neet-biology-ecosystem-biodiversity",
      text: "Threatened species are officially classified by the:",
      optionA: "WWF",
      optionB: "UNESCO",
      optionC: "IUCN Red List",
      optionD: "FAO",
      correctOption: "C",
      explanation: "The IUCN Red List classifies the conservation status of threatened species.",
      orderIndex: 6
    },
    {
      id: "neet-biology-ecosystem-biodiversity-q08",
      topicId: "neet-biology-ecosystem-biodiversity",
      text: "A species with a disproportionately large effect on its ecosystem is called a:",
      optionA: "Pioneer species",
      optionB: "Keystone species",
      optionC: "Endemic species",
      optionD: "Invasive species",
      correctOption: "B",
      explanation: "A keystone species has an effect on its community far larger than its abundance suggests.",
      orderIndex: 7
    },
    {
      id: "neet-biology-human-health-disease-q01",
      topicId: "neet-biology-human-health-disease",
      text: "Malaria in humans is caused by which pathogen?",
      optionA: "Plasmodium",
      optionB: "Salmonella",
      optionC: "Entamoeba",
      optionD: "HIV",
      correctOption: "A",
      explanation: "Malaria is caused by the protozoan Plasmodium, transmitted by female Anopheles mosquitoes.",
      orderIndex: 0
    },
    {
      id: "neet-biology-human-health-disease-q02",
      topicId: "neet-biology-human-health-disease",
      text: "Malaria is transmitted to humans by the bite of the female:",
      optionA: "Culex mosquito",
      optionB: "Anopheles mosquito",
      optionC: "Aedes mosquito",
      optionD: "Housefly",
      correctOption: "B",
      explanation: "The female Anopheles mosquito is the vector that transmits Plasmodium causing malaria.",
      orderIndex: 1
    },
    {
      id: "neet-biology-human-health-disease-q03",
      topicId: "neet-biology-human-health-disease",
      text: "HIV, the cause of AIDS, primarily attacks which cells of the immune system?",
      optionA: "Red blood cells",
      optionB: "Helper T-cells",
      optionC: "Platelets",
      optionD: "Neurons",
      correctOption: "B",
      explanation: "HIV targets and destroys helper T-cells, weakening the immune response in AIDS.",
      orderIndex: 2
    },
    {
      id: "neet-biology-human-health-disease-q04",
      topicId: "neet-biology-human-health-disease",
      text: "Vaccination protects against disease by inducing:",
      optionA: "Passive immunity",
      optionB: "Allergy",
      optionC: "Innate immunity only",
      optionD: "Active immunity",
      correctOption: "D",
      explanation: "Vaccines induce active immunity by exposing the body to weakened or inactivated antigens.",
      orderIndex: 3
    },
    {
      id: "neet-biology-human-health-disease-q05",
      topicId: "neet-biology-human-health-disease",
      text: "Immunity that is present from birth and is non-specific is termed:",
      optionA: "Acquired immunity",
      optionB: "Active immunity",
      optionC: "Innate immunity",
      optionD: "Passive immunity",
      correctOption: "C",
      explanation: "Innate immunity is non-specific and present from birth, forming the first line of defence.",
      orderIndex: 4
    },
    {
      id: "neet-biology-human-health-disease-q06",
      topicId: "neet-biology-human-health-disease",
      text: "Typhoid fever is caused by the bacterium:",
      optionA: "Plasmodium",
      optionB: "Entamoeba",
      optionC: "Salmonella",
      optionD: "Wuchereria",
      correctOption: "C",
      explanation: "Typhoid is caused by the bacterium Salmonella typhi.",
      orderIndex: 5
    },
    {
      id: "neet-biology-human-health-disease-q07",
      topicId: "neet-biology-human-health-disease",
      text: "A key feature distinguishing cancer cells from normal cells is the loss of:",
      optionA: "Contact inhibition",
      optionB: "Cell membrane",
      optionC: "Ribosomes",
      optionD: "Mitochondria",
      correctOption: "A",
      explanation: "Cancer cells lose contact inhibition, allowing uncontrolled division and tumour formation.",
      orderIndex: 6
    },
    {
      id: "neet-biology-human-health-disease-q08",
      topicId: "neet-biology-human-health-disease",
      text: "The injection of ready-made antibodies provides:",
      optionA: "Active immunity",
      optionB: "Passive immunity",
      optionC: "Innate immunity",
      optionD: "Lifelong immunity",
      correctOption: "B",
      explanation: "Supplying ready-made antibodies gives passive immunity, which is immediate but short-lived.",
      orderIndex: 7
    },
    {
      id: "neet-chemistry-atomic-structure-q01",
      topicId: "neet-chemistry-atomic-structure",
      text: "The neutron was discovered by:",
      optionA: "J. J. Thomson",
      optionB: "Rutherford",
      optionC: "Niels Bohr",
      optionD: "James Chadwick",
      correctOption: "D",
      explanation: "James Chadwick discovered the neutron, a neutral subatomic particle.",
      orderIndex: 0
    },
    {
      id: "neet-chemistry-atomic-structure-q02",
      topicId: "neet-chemistry-atomic-structure",
      text: "The principle that no two electrons in an atom can have all four quantum numbers identical is:",
      optionA: "Hund's rule",
      optionB: "Pauli exclusion principle",
      optionC: "Aufbau principle",
      optionD: "Heisenberg principle",
      correctOption: "B",
      explanation: "The Pauli exclusion principle forbids two electrons from sharing all four quantum numbers.",
      orderIndex: 1
    },
    {
      id: "neet-chemistry-atomic-structure-q03",
      topicId: "neet-chemistry-atomic-structure",
      text: "The energy of the nth Bohr orbit of the hydrogen atom is given by:",
      optionA: "E = -13.6 n^2 eV",
      optionB: "E = 13.6 n eV",
      optionC: "E = -13.6 / n^2 eV",
      optionD: "E = -13.6 / n eV",
      correctOption: "C",
      explanation: "The energy of the nth hydrogen Bohr orbit is E = -13.6/n^2 eV.",
      orderIndex: 2
    },
    {
      id: "neet-chemistry-atomic-structure-q04",
      topicId: "neet-chemistry-atomic-structure",
      text: "Hund's rule of maximum multiplicity states that orbitals of a subshell are:",
      optionA: "Filled in pairs first",
      optionB: "Filled randomly",
      optionC: "Left empty",
      optionD: "Filled singly before pairing",
      correctOption: "D",
      explanation: "Hund's rule says degenerate orbitals are singly occupied before any pairing of electrons.",
      orderIndex: 3
    },
    {
      id: "neet-chemistry-atomic-structure-q05",
      topicId: "neet-chemistry-atomic-structure",
      text: "The de Broglie relation for the wavelength of a moving particle is:",
      optionA: "lambda = mv/h",
      optionB: "lambda = h/mv",
      optionC: "lambda = hmv",
      optionD: "lambda = h/m",
      correctOption: "B",
      explanation: "The de Broglie wavelength is lambda = h/mv, giving matter its wave nature.",
      orderIndex: 4
    },
    {
      id: "neet-chemistry-atomic-structure-q06",
      topicId: "neet-chemistry-atomic-structure",
      text: "The nuclear model of the atom was proposed after the gold-foil experiment by:",
      optionA: "Rutherford",
      optionB: "Thomson",
      optionC: "Bohr",
      optionD: "Chadwick",
      correctOption: "A",
      explanation: "Rutherford proposed the nuclear model based on the alpha-particle scattering experiment.",
      orderIndex: 5
    },
    {
      id: "neet-chemistry-atomic-structure-q07",
      topicId: "neet-chemistry-atomic-structure",
      text: "The Aufbau principle states that electrons first occupy orbitals of:",
      optionA: "Highest energy",
      optionB: "Equal energy only",
      optionC: "Lowest energy",
      optionD: "The outermost shell",
      correctOption: "C",
      explanation: "By the Aufbau principle, electrons fill the lowest-energy available orbitals first.",
      orderIndex: 6
    },
    {
      id: "neet-chemistry-atomic-structure-q08",
      topicId: "neet-chemistry-atomic-structure",
      text: "Heisenberg's uncertainty principle places a limit on simultaneously knowing a particle's:",
      optionA: "Position and momentum",
      optionB: "Charge and mass",
      optionC: "Spin and charge",
      optionD: "Energy and charge",
      correctOption: "A",
      explanation: "Heisenberg's principle limits simultaneous precise knowledge of position and momentum.",
      orderIndex: 7
    },
    {
      id: "neet-chemistry-chemical-bonding-molecular-structure-q01",
      topicId: "neet-chemistry-chemical-bonding-molecular-structure",
      text: "The shape of a methane (CH4) molecule is:",
      optionA: "Tetrahedral",
      optionB: "Trigonal planar",
      optionC: "Linear",
      optionD: "Bent",
      correctOption: "A",
      explanation: "CH4 is tetrahedral with bond angles of 109.5 degrees due to sp3 hybridisation.",
      orderIndex: 0
    },
    {
      id: "neet-chemistry-chemical-bonding-molecular-structure-q02",
      topicId: "neet-chemistry-chemical-bonding-molecular-structure",
      text: "An ionic bond is typically formed between:",
      optionA: "Two non-metals",
      optionB: "Two metals",
      optionC: "A metal and a non-metal",
      optionD: "Two noble gases",
      correctOption: "C",
      explanation: "Ionic bonds form by electron transfer, typically between a metal and a non-metal.",
      orderIndex: 1
    },
    {
      id: "neet-chemistry-chemical-bonding-molecular-structure-q03",
      topicId: "neet-chemistry-chemical-bonding-molecular-structure",
      text: "The paramagnetic behaviour of the O2 molecule is best explained by:",
      optionA: "VSEPR theory",
      optionB: "Molecular orbital theory",
      optionC: "Valence bond theory",
      optionD: "Octet rule",
      correctOption: "B",
      explanation: "Molecular orbital theory predicts two unpaired electrons in O2, explaining its paramagnetism.",
      orderIndex: 2
    },
    {
      id: "neet-chemistry-chemical-bonding-molecular-structure-q04",
      topicId: "neet-chemistry-chemical-bonding-molecular-structure",
      text: "The hybridisation of the boron atom in BF3 is:",
      optionA: "sp",
      optionB: "sp2",
      optionC: "sp3",
      optionD: "sp3d",
      correctOption: "B",
      explanation: "BF3 is trigonal planar with sp2 hybridisation of the central boron atom.",
      orderIndex: 3
    },
    {
      id: "neet-chemistry-chemical-bonding-molecular-structure-q05",
      topicId: "neet-chemistry-chemical-bonding-molecular-structure",
      text: "A pi bond is formed by which kind of orbital overlap?",
      optionA: "Head-on (axial) overlap",
      optionB: "No overlap",
      optionC: "Sideways (lateral) overlap",
      optionD: "sp3 overlap only",
      correctOption: "C",
      explanation: "Pi bonds form by sideways overlap of p-orbitals; sigma bonds form by head-on overlap.",
      orderIndex: 4
    },
    {
      id: "neet-chemistry-chemical-bonding-molecular-structure-q06",
      topicId: "neet-chemistry-chemical-bonding-molecular-structure",
      text: "The unusually high boiling point of water is mainly due to:",
      optionA: "Hydrogen bonding",
      optionB: "Ionic bonding",
      optionC: "Metallic bonding",
      optionD: "Van der Waals forces only",
      correctOption: "A",
      explanation: "Extensive hydrogen bonding among water molecules gives water its high boiling point.",
      orderIndex: 5
    },
    {
      id: "neet-chemistry-chemical-bonding-molecular-structure-q07",
      topicId: "neet-chemistry-chemical-bonding-molecular-structure",
      text: "The geometry of molecules is predicted from electron-pair repulsion by:",
      optionA: "Band theory",
      optionB: "Crystal field theory",
      optionC: "VSEPR theory",
      optionD: "Kinetic theory",
      correctOption: "C",
      explanation: "VSEPR theory predicts molecular geometry from repulsion between electron pairs.",
      orderIndex: 6
    },
    {
      id: "neet-chemistry-chemical-bonding-molecular-structure-q08",
      topicId: "neet-chemistry-chemical-bonding-molecular-structure",
      text: "The bond order of a diatomic molecule is calculated as:",
      optionA: "(bonding - antibonding electrons)/2",
      optionB: "(bonding + antibonding electrons)/2",
      optionC: "bonding electrons only",
      optionD: "antibonding electrons / 2",
      correctOption: "A",
      explanation: "Bond order equals (number of bonding minus antibonding electrons) divided by two.",
      orderIndex: 7
    },
    {
      id: "neet-chemistry-periodic-classification-q01",
      topicId: "neet-chemistry-periodic-classification",
      text: "The modern periodic law arranges elements by increasing:",
      optionA: "Atomic mass",
      optionB: "Valency",
      optionC: "Density",
      optionD: "Atomic number",
      correctOption: "D",
      explanation: "Moseley's modern periodic law arranges elements by increasing atomic number.",
      orderIndex: 0
    },
    {
      id: "neet-chemistry-periodic-classification-q02",
      topicId: "neet-chemistry-periodic-classification",
      text: "The most electronegative element in the periodic table is:",
      optionA: "Oxygen",
      optionB: "Chlorine",
      optionC: "Fluorine",
      optionD: "Nitrogen",
      correctOption: "C",
      explanation: "Fluorine is the most electronegative element.",
      orderIndex: 1
    },
    {
      id: "neet-chemistry-periodic-classification-q03",
      topicId: "neet-chemistry-periodic-classification",
      text: "As we move across a period from left to right, the atomic radius generally:",
      optionA: "Decreases",
      optionB: "Increases",
      optionC: "Remains constant",
      optionD: "First increases then decreases",
      correctOption: "A",
      explanation: "Atomic radius decreases across a period as effective nuclear charge increases.",
      orderIndex: 2
    },
    {
      id: "neet-chemistry-periodic-classification-q04",
      topicId: "neet-chemistry-periodic-classification",
      text: "Down a group in the periodic table, ionisation enthalpy generally:",
      optionA: "Decreases",
      optionB: "Increases",
      optionC: "Stays the same",
      optionD: "Becomes zero",
      correctOption: "A",
      explanation: "Ionisation enthalpy decreases down a group as atomic size and shielding increase.",
      orderIndex: 3
    },
    {
      id: "neet-chemistry-periodic-classification-q05",
      topicId: "neet-chemistry-periodic-classification",
      text: "Transition elements belong to which block of the periodic table?",
      optionA: "d-block",
      optionB: "p-block",
      optionC: "s-block",
      optionD: "f-block",
      correctOption: "A",
      explanation: "Transition elements are d-block elements; lanthanoids and actinoids are f-block.",
      orderIndex: 4
    },
    {
      id: "neet-chemistry-periodic-classification-q06",
      topicId: "neet-chemistry-periodic-classification",
      text: "Mendeleev arranged the elements in his periodic table primarily according to:",
      optionA: "Atomic number",
      optionB: "Density",
      optionC: "Electronegativity",
      optionD: "Atomic mass",
      correctOption: "D",
      explanation: "Mendeleev arranged elements by increasing atomic mass and even predicted unknown elements.",
      orderIndex: 5
    },
    {
      id: "neet-chemistry-periodic-classification-q07",
      topicId: "neet-chemistry-periodic-classification",
      text: "The diagonal relationship correctly pairs which two elements?",
      optionA: "Li and Mg",
      optionB: "Na and K",
      optionC: "He and Ne",
      optionD: "Cl and Br",
      correctOption: "A",
      explanation: "The diagonal relationship links Li-Mg, Be-Al and B-Si due to similar properties.",
      orderIndex: 6
    },
    {
      id: "neet-chemistry-periodic-classification-q08",
      topicId: "neet-chemistry-periodic-classification",
      text: "Across a period, metallic character of elements generally:",
      optionA: "Increases",
      optionB: "Doubles",
      optionC: "Is unchanged",
      optionD: "Decreases",
      correctOption: "D",
      explanation: "Metallic character decreases across a period and increases down a group.",
      orderIndex: 7
    },
    {
      id: "neet-chemistry-thermodynamics-q01",
      topicId: "neet-chemistry-thermodynamics",
      text: "The mathematical statement of the first law of thermodynamics is:",
      optionA: "delta U = q + w",
      optionB: "delta U = q - w only",
      optionC: "delta G = delta H - T delta S",
      optionD: "delta S = q/T",
      correctOption: "A",
      explanation: "The first law states delta U = q + w, expressing conservation of energy.",
      orderIndex: 0
    },
    {
      id: "neet-chemistry-thermodynamics-q02",
      topicId: "neet-chemistry-thermodynamics",
      text: "A process is spontaneous when the Gibbs free energy change is:",
      optionA: "Greater than zero",
      optionB: "Equal to zero",
      optionC: "Infinite",
      optionD: "Less than zero",
      correctOption: "D",
      explanation: "A negative delta G (less than zero) indicates a spontaneous process.",
      orderIndex: 1
    },
    {
      id: "neet-chemistry-thermodynamics-q03",
      topicId: "neet-chemistry-thermodynamics",
      text: "The statement that the total enthalpy change is independent of the path taken is:",
      optionA: "Le Chatelier's principle",
      optionB: "Raoult's law",
      optionC: "Hess's law",
      optionD: "Henry's law",
      correctOption: "C",
      explanation: "Hess's law states the total enthalpy change of a reaction is independent of the path.",
      orderIndex: 2
    },
    {
      id: "neet-chemistry-thermodynamics-q04",
      topicId: "neet-chemistry-thermodynamics",
      text: "For an isothermal process involving an ideal gas, the change in internal energy is:",
      optionA: "Maximum",
      optionB: "Zero",
      optionC: "Negative always",
      optionD: "Equal to the work done",
      correctOption: "B",
      explanation: "For an ideal gas at constant temperature, internal energy change delta U is zero.",
      orderIndex: 3
    },
    {
      id: "neet-chemistry-thermodynamics-q05",
      topicId: "neet-chemistry-thermodynamics",
      text: "An exothermic reaction is characterised by an enthalpy change (delta H) that is:",
      optionA: "Positive",
      optionB: "Undefined",
      optionC: "Zero",
      optionD: "Negative",
      correctOption: "D",
      explanation: "Exothermic reactions release heat, so delta H is negative.",
      orderIndex: 4
    },
    {
      id: "neet-chemistry-thermodynamics-q06",
      topicId: "neet-chemistry-thermodynamics",
      text: "Enthalpy (H) is correctly defined as:",
      optionA: "H = U + PV",
      optionB: "H = U - PV",
      optionC: "H = U + TS",
      optionD: "H = U - TS",
      correctOption: "A",
      explanation: "Enthalpy is defined as H = U + PV.",
      orderIndex: 5
    },
    {
      id: "neet-chemistry-thermodynamics-q07",
      topicId: "neet-chemistry-thermodynamics",
      text: "According to the third law of thermodynamics, the entropy of a perfect crystal at 0 K is:",
      optionA: "Maximum",
      optionB: "Infinite",
      optionC: "Zero",
      optionD: "Negative",
      correctOption: "C",
      explanation: "The third law states the entropy of a perfect crystal is zero at absolute zero (0 K).",
      orderIndex: 6
    },
    {
      id: "neet-chemistry-thermodynamics-q08",
      topicId: "neet-chemistry-thermodynamics",
      text: "Which of the following is a state function?",
      optionA: "Work",
      optionB: "Heat",
      optionC: "Path length",
      optionD: "Enthalpy",
      correctOption: "D",
      explanation: "Enthalpy is a state function depending only on initial and final states, not the path.",
      orderIndex: 7
    },
    {
      id: "neet-chemistry-equilibrium-q01",
      topicId: "neet-chemistry-equilibrium",
      text: "At chemical equilibrium, the rates of the forward and reverse reactions are:",
      optionA: "Equal",
      optionB: "Both zero",
      optionC: "Forward greater",
      optionD: "Reverse greater",
      correctOption: "A",
      explanation: "At equilibrium the forward and reverse reaction rates are equal, so concentrations stay constant.",
      orderIndex: 0
    },
    {
      id: "neet-chemistry-equilibrium-q02",
      topicId: "neet-chemistry-equilibrium",
      text: "The pH of pure water at 25 degrees Celsius is:",
      optionA: "0",
      optionB: "14",
      optionC: "7",
      optionD: "1",
      correctOption: "C",
      explanation: "Pure water is neutral with a pH of 7 at 25 degrees Celsius.",
      orderIndex: 1
    },
    {
      id: "neet-chemistry-equilibrium-q03",
      topicId: "neet-chemistry-equilibrium",
      text: "According to Le Chatelier's principle, increasing the temperature shifts equilibrium in the:",
      optionA: "Exothermic direction",
      optionB: "Direction of fewer moles",
      optionC: "Endothermic direction",
      optionD: "No change",
      correctOption: "C",
      explanation: "Raising temperature shifts the equilibrium in the endothermic direction to absorb the heat.",
      orderIndex: 2
    },
    {
      id: "neet-chemistry-equilibrium-q04",
      topicId: "neet-chemistry-equilibrium",
      text: "According to the Arrhenius concept, a base is a substance that in water gives:",
      optionA: "H+ ions",
      optionB: "Electrons",
      optionC: "OH- ions",
      optionD: "Protons",
      correctOption: "C",
      explanation: "An Arrhenius base produces hydroxide (OH-) ions in aqueous solution.",
      orderIndex: 3
    },
    {
      id: "neet-chemistry-equilibrium-q05",
      topicId: "neet-chemistry-equilibrium",
      text: "A Bronsted-Lowry acid is defined as a substance that:",
      optionA: "Accepts a proton",
      optionB: "Donates a proton",
      optionC: "Donates an electron pair",
      optionD: "Accepts an electron pair",
      correctOption: "B",
      explanation: "A Bronsted-Lowry acid is a proton (H+) donor.",
      orderIndex: 4
    },
    {
      id: "neet-chemistry-equilibrium-q06",
      topicId: "neet-chemistry-equilibrium",
      text: "The ionic product of water, Kw, at 25 degrees Celsius is:",
      optionA: "1.0 x 10^-7",
      optionB: "1.0 x 10^-14",
      optionC: "1.0 x 10^7",
      optionD: "1.0 x 10^14",
      correctOption: "B",
      explanation: "Kw = [H+][OH-] = 1.0 x 10^-14 at 25 degrees Celsius.",
      orderIndex: 5
    },
    {
      id: "neet-chemistry-equilibrium-q07",
      topicId: "neet-chemistry-equilibrium",
      text: "Suppression of the ionisation of a weak electrolyte by adding a common ion is the:",
      optionA: "Buffer action",
      optionB: "Solubility effect",
      optionC: "Le Chatelier shift",
      optionD: "Common ion effect",
      correctOption: "D",
      explanation: "The common ion effect suppresses the ionisation of a weak electrolyte.",
      orderIndex: 6
    },
    {
      id: "neet-chemistry-equilibrium-q08",
      topicId: "neet-chemistry-equilibrium",
      text: "A solution of CH3COOH and CH3COONa is an example of a:",
      optionA: "Strong acid",
      optionB: "Buffer solution",
      optionC: "Neutral salt",
      optionD: "Strong base",
      correctOption: "B",
      explanation: "A mixture of a weak acid and its salt forms a buffer that resists pH change.",
      orderIndex: 7
    },
    {
      id: "neet-chemistry-hydrocarbons-q01",
      topicId: "neet-chemistry-hydrocarbons",
      text: "The general molecular formula of saturated hydrocarbons (alkanes) is:",
      optionA: "CnH2n",
      optionB: "CnH(2n-2)",
      optionC: "CnH(2n+2)",
      optionD: "CnHn",
      correctOption: "C",
      explanation: "Alkanes are saturated hydrocarbons with the general formula CnH(2n+2).",
      orderIndex: 0
    },
    {
      id: "neet-chemistry-hydrocarbons-q02",
      topicId: "neet-chemistry-hydrocarbons",
      text: "Markovnikov's rule predicts that in the addition of HX to an alkene, hydrogen adds to the carbon:",
      optionA: "With fewer hydrogens",
      optionB: "Bearing the halogen",
      optionC: "In the middle",
      optionD: "With more hydrogens",
      correctOption: "D",
      explanation: "By Markovnikov's rule, H adds to the carbon already bearing more hydrogen atoms.",
      orderIndex: 1
    },
    {
      id: "neet-chemistry-hydrocarbons-q03",
      topicId: "neet-chemistry-hydrocarbons",
      text: "Benzene is aromatic because it obeys Huckel's rule, having a number of pi electrons equal to:",
      optionA: "2n",
      optionB: "4n",
      optionC: "n + 1",
      optionD: "4n + 2",
      correctOption: "D",
      explanation: "Aromatic compounds obey Huckel's rule with (4n + 2) pi electrons; benzene has six.",
      orderIndex: 2
    },
    {
      id: "neet-chemistry-hydrocarbons-q04",
      topicId: "neet-chemistry-hydrocarbons",
      text: "Alkanes characteristically undergo which type of reaction?",
      optionA: "Addition",
      optionB: "Polymerisation only",
      optionC: "Elimination",
      optionD: "Substitution",
      correctOption: "D",
      explanation: "Saturated alkanes undergo free-radical substitution, such as halogenation.",
      orderIndex: 3
    },
    {
      id: "neet-chemistry-hydrocarbons-q05",
      topicId: "neet-chemistry-hydrocarbons",
      text: "Ethyne (acetylene) can be prepared in the laboratory from water and:",
      optionA: "Calcium oxide",
      optionB: "Sodium chloride",
      optionC: "Calcium carbide",
      optionD: "Calcium carbonate",
      correctOption: "C",
      explanation: "Calcium carbide reacts with water to give ethyne (acetylene).",
      orderIndex: 4
    },
    {
      id: "neet-chemistry-hydrocarbons-q06",
      topicId: "neet-chemistry-hydrocarbons",
      text: "The anti-Markovnikov (peroxide) effect is observed in the addition of which reagent to alkenes?",
      optionA: "HCl",
      optionB: "H2O",
      optionC: "HI",
      optionD: "HBr",
      correctOption: "D",
      explanation: "The peroxide (Kharasch) effect reverses addition only with HBr, not HCl or HI.",
      orderIndex: 5
    },
    {
      id: "neet-chemistry-hydrocarbons-q07",
      topicId: "neet-chemistry-hydrocarbons",
      text: "Complete combustion of a hydrocarbon yields:",
      optionA: "CO and H2",
      optionB: "CO2 and H2O",
      optionC: "C and H2O",
      optionD: "CO2 and H2",
      correctOption: "B",
      explanation: "Complete combustion of hydrocarbons produces carbon dioxide and water.",
      orderIndex: 6
    },
    {
      id: "neet-chemistry-hydrocarbons-q08",
      topicId: "neet-chemistry-hydrocarbons",
      text: "Which class of hydrocarbon contains a carbon-carbon triple bond?",
      optionA: "Alkane",
      optionB: "Alkyne",
      optionC: "Alkene",
      optionD: "Cycloalkane",
      correctOption: "B",
      explanation: "Alkynes contain a carbon-carbon triple bond, as in ethyne.",
      orderIndex: 7
    },
    {
      id: "neet-chemistry-haloalkanes-haloarenes-q01",
      topicId: "neet-chemistry-haloalkanes-haloarenes",
      text: "An SN2 reaction at a chiral carbon proceeds with:",
      optionA: "Retention of configuration",
      optionB: "Inversion of configuration",
      optionC: "Racemisation",
      optionD: "No stereochemical change",
      correctOption: "B",
      explanation: "SN2 reactions occur with inversion of configuration (Walden inversion) at the chiral carbon.",
      orderIndex: 0
    },
    {
      id: "neet-chemistry-haloalkanes-haloarenes-q02",
      topicId: "neet-chemistry-haloalkanes-haloarenes",
      text: "The reactivity order of haloalkanes towards SN2 is:",
      optionA: "3 degree > 2 degree > 1 degree",
      optionB: "1 degree > 2 degree > 3 degree",
      optionC: "2 degree > 1 degree > 3 degree",
      optionD: "All react equally",
      correctOption: "B",
      explanation: "SN2 reactivity is 1 degree > 2 degree > 3 degree because of decreasing steric hindrance.",
      orderIndex: 1
    },
    {
      id: "neet-chemistry-haloalkanes-haloarenes-q03",
      topicId: "neet-chemistry-haloalkanes-haloarenes",
      text: "A Grignard reagent (R-Mg-X) is prepared by reacting a haloalkane with:",
      optionA: "Magnesium",
      optionB: "Sodium",
      optionC: "Zinc",
      optionD: "Copper",
      correctOption: "A",
      explanation: "A Grignard reagent forms from a haloalkane and magnesium in dry ether.",
      orderIndex: 2
    },
    {
      id: "neet-chemistry-haloalkanes-haloarenes-q04",
      topicId: "neet-chemistry-haloalkanes-haloarenes",
      text: "Two molecules of a haloalkane reacting with sodium to form a higher alkane is the:",
      optionA: "Aldol reaction",
      optionB: "Cannizzaro reaction",
      optionC: "Wurtz reaction",
      optionD: "Friedel-Crafts reaction",
      correctOption: "C",
      explanation: "The Wurtz reaction couples two haloalkanes using sodium to give a higher alkane.",
      orderIndex: 3
    },
    {
      id: "neet-chemistry-haloalkanes-haloarenes-q05",
      topicId: "neet-chemistry-haloalkanes-haloarenes",
      text: "On standing in air and light, chloroform forms the poisonous gas:",
      optionA: "Methane",
      optionB: "Phosgene",
      optionC: "Carbon dioxide",
      optionD: "Mustard gas",
      correctOption: "B",
      explanation: "Chloroform is slowly oxidised in air and light to poisonous phosgene (carbonyl chloride).",
      orderIndex: 4
    },
    {
      id: "neet-chemistry-haloalkanes-haloarenes-q06",
      topicId: "neet-chemistry-haloalkanes-haloarenes",
      text: "Among the C-X bonds, which haloalkane is most reactive in substitution due to the weakest bond?",
      optionA: "Fluoride",
      optionB: "Chloride",
      optionC: "Bromide",
      optionD: "Iodide",
      correctOption: "D",
      explanation: "The C-I bond is the weakest, so iodides react fastest in nucleophilic substitution.",
      orderIndex: 5
    },
    {
      id: "neet-chemistry-haloalkanes-haloarenes-q07",
      topicId: "neet-chemistry-haloalkanes-haloarenes",
      text: "An SN1 reaction proceeds through which intermediate?",
      optionA: "Carbanion",
      optionB: "Carbene",
      optionC: "Free radical",
      optionD: "Carbocation",
      correctOption: "D",
      explanation: "SN1 is a two-step reaction proceeding through a carbocation intermediate.",
      orderIndex: 6
    },
    {
      id: "neet-chemistry-haloalkanes-haloarenes-q08",
      topicId: "neet-chemistry-haloalkanes-haloarenes",
      text: "Haloarenes are less reactive than haloalkanes towards nucleophilic substitution because:",
      optionA: "The C-X bond has partial double-bond character due to resonance",
      optionB: "They lack any C-X bond",
      optionC: "They are ionic",
      optionD: "They are saturated",
      correctOption: "A",
      explanation: "Resonance gives the C-X bond in haloarenes partial double-bond character, lowering reactivity.",
      orderIndex: 7
    },
    {
      id: "neet-chemistry-alcohols-phenols-ethers-q01",
      topicId: "neet-chemistry-alcohols-phenols-ethers",
      text: "Phenol is more acidic than ethanol because its conjugate base (phenoxide) is:",
      optionA: "Less stable",
      optionB: "Resonance-stabilised",
      optionC: "A free radical",
      optionD: "Non-polar",
      correctOption: "B",
      explanation: "The phenoxide ion is resonance-stabilised, making phenol more acidic than alcohols.",
      orderIndex: 0
    },
    {
      id: "neet-chemistry-alcohols-phenols-ethers-q02",
      topicId: "neet-chemistry-alcohols-phenols-ethers",
      text: "The Williamson synthesis is used to prepare:",
      optionA: "Ethers",
      optionB: "Alcohols",
      optionC: "Aldehydes",
      optionD: "Carboxylic acids",
      correctOption: "A",
      explanation: "The Williamson synthesis prepares ethers from an alkyl halide and a sodium alkoxide.",
      orderIndex: 1
    },
    {
      id: "neet-chemistry-alcohols-phenols-ethers-q03",
      topicId: "neet-chemistry-alcohols-phenols-ethers",
      text: "The test used to distinguish primary, secondary and tertiary alcohols by reaction speed is the:",
      optionA: "Tollens' test",
      optionB: "Iodoform test",
      optionC: "Fehling's test",
      optionD: "Lucas test",
      correctOption: "D",
      explanation: "The Lucas test distinguishes 1, 2 and 3 degree alcohols by the rate of turbidity formation.",
      orderIndex: 2
    },
    {
      id: "neet-chemistry-alcohols-phenols-ethers-q04",
      topicId: "neet-chemistry-alcohols-phenols-ethers",
      text: "On controlled oxidation, a primary alcohol is first converted to a(n):",
      optionA: "Ketone",
      optionB: "Ether",
      optionC: "Aldehyde",
      optionD: "Ester",
      correctOption: "C",
      explanation: "Primary alcohols oxidise first to aldehydes and then to carboxylic acids.",
      orderIndex: 3
    },
    {
      id: "neet-chemistry-alcohols-phenols-ethers-q05",
      topicId: "neet-chemistry-alcohols-phenols-ethers",
      text: "Phenol, used as an antiseptic, is also commonly known as:",
      optionA: "Formic acid",
      optionB: "Carbolic acid",
      optionC: "Acetic acid",
      optionD: "Oxalic acid",
      correctOption: "B",
      explanation: "Phenol is also called carbolic acid and was historically used as an antiseptic.",
      orderIndex: 4
    },
    {
      id: "neet-chemistry-alcohols-phenols-ethers-q06",
      topicId: "neet-chemistry-alcohols-phenols-ethers",
      text: "Dehydration of an alcohol typically yields a(n):",
      optionA: "Ester",
      optionB: "Alkane",
      optionC: "Alkyne",
      optionD: "Alkene",
      correctOption: "D",
      explanation: "Acid-catalysed dehydration of an alcohol removes water to give an alkene.",
      orderIndex: 5
    },
    {
      id: "neet-chemistry-alcohols-phenols-ethers-q07",
      topicId: "neet-chemistry-alcohols-phenols-ethers",
      text: "The functional group present in an alcohol is:",
      optionA: "-CHO",
      optionB: "-COOH",
      optionC: "-OH on an sp3 carbon",
      optionD: "-O- between two carbons",
      correctOption: "C",
      explanation: "Alcohols contain a hydroxyl (-OH) group attached to an sp3 (saturated) carbon.",
      orderIndex: 6
    },
    {
      id: "neet-chemistry-alcohols-phenols-ethers-q08",
      topicId: "neet-chemistry-alcohols-phenols-ethers",
      text: "Which of the following has the highest acidity?",
      optionA: "Ethanol",
      optionB: "Phenol",
      optionC: "Water",
      optionD: "Methanol",
      correctOption: "B",
      explanation: "Among these, phenol is the most acidic because its phenoxide ion is resonance-stabilised.",
      orderIndex: 7
    },
    {
      id: "neet-chemistry-aldehydes-ketones-carboxylic-acids-q01",
      topicId: "neet-chemistry-aldehydes-ketones-carboxylic-acids",
      text: "The functional group common to aldehydes, ketones and carboxylic acids is the:",
      optionA: "Carbonyl group",
      optionB: "Hydroxyl group",
      optionC: "Amino group",
      optionD: "Nitro group",
      correctOption: "A",
      explanation: "All three contain the carbonyl group (C=O) as their key functional feature.",
      orderIndex: 0
    },
    {
      id: "neet-chemistry-aldehydes-ketones-carboxylic-acids-q02",
      topicId: "neet-chemistry-aldehydes-ketones-carboxylic-acids",
      text: "Tollens' test (silver mirror) gives a positive result with:",
      optionA: "Ketones",
      optionB: "Alkanes",
      optionC: "Ethers",
      optionD: "Aldehydes",
      correctOption: "D",
      explanation: "Tollens' reagent is reduced by aldehydes, giving a silver mirror; ketones do not react.",
      orderIndex: 1
    },
    {
      id: "neet-chemistry-aldehydes-ketones-carboxylic-acids-q03",
      topicId: "neet-chemistry-aldehydes-ketones-carboxylic-acids",
      text: "The Cannizzaro reaction occurs only in aldehydes that have:",
      optionA: "No alpha-hydrogen",
      optionB: "An alpha-hydrogen",
      optionC: "A double bond",
      optionD: "A hydroxyl group",
      correctOption: "A",
      explanation: "The Cannizzaro reaction occurs with aldehydes lacking an alpha-hydrogen, like formaldehyde.",
      orderIndex: 2
    },
    {
      id: "neet-chemistry-aldehydes-ketones-carboxylic-acids-q04",
      topicId: "neet-chemistry-aldehydes-ketones-carboxylic-acids",
      text: "The only carboxylic acid that gives a positive Tollens' test is:",
      optionA: "Acetic acid",
      optionB: "Benzoic acid",
      optionC: "Formic acid",
      optionD: "Oxalic acid",
      correctOption: "C",
      explanation: "Formic acid has an aldehyde-like group and reduces Tollens' reagent.",
      orderIndex: 3
    },
    {
      id: "neet-chemistry-aldehydes-ketones-carboxylic-acids-q05",
      topicId: "neet-chemistry-aldehydes-ketones-carboxylic-acids",
      text: "The carbonyl carbon in aldehydes and ketones is hybridised as:",
      optionA: "sp2",
      optionB: "sp",
      optionC: "sp3",
      optionD: "sp3d",
      correctOption: "A",
      explanation: "The carbonyl carbon is sp2 hybridised and electrophilic, favouring nucleophilic addition.",
      orderIndex: 4
    },
    {
      id: "neet-chemistry-aldehydes-ketones-carboxylic-acids-q06",
      topicId: "neet-chemistry-aldehydes-ketones-carboxylic-acids",
      text: "The aldol condensation requires the reacting aldehyde or ketone to have:",
      optionA: "An alpha-hydrogen",
      optionB: "No alpha-hydrogen",
      optionC: "A halogen",
      optionD: "An aromatic ring",
      correctOption: "A",
      explanation: "Aldol condensation needs at least one alpha-hydrogen on the carbonyl compound.",
      orderIndex: 5
    },
    {
      id: "neet-chemistry-aldehydes-ketones-carboxylic-acids-q07",
      topicId: "neet-chemistry-aldehydes-ketones-carboxylic-acids",
      text: "Compared with alcohols and phenols, carboxylic acids are:",
      optionA: "Less acidic",
      optionB: "Neutral",
      optionC: "Equally acidic",
      optionD: "More acidic",
      correctOption: "D",
      explanation: "Carboxylic acids are more acidic owing to the resonance-stabilised carboxylate ion.",
      orderIndex: 6
    },
    {
      id: "neet-chemistry-aldehydes-ketones-carboxylic-acids-q08",
      topicId: "neet-chemistry-aldehydes-ketones-carboxylic-acids",
      text: "The characteristic reaction of the carbonyl group in aldehydes and ketones is:",
      optionA: "Electrophilic substitution",
      optionB: "Nucleophilic addition",
      optionC: "Free-radical addition",
      optionD: "Elimination",
      correctOption: "B",
      explanation: "The polar carbonyl group undergoes nucleophilic addition reactions.",
      orderIndex: 7
    },
    {
      id: "neet-chemistry-biomolecules-chemistry-q01",
      topicId: "neet-chemistry-biomolecules-chemistry",
      text: "Glucose is chemically classified as a(n):",
      optionA: "Aldohexose",
      optionB: "Ketohexose",
      optionC: "Aldopentose",
      optionD: "Ketopentose",
      correctOption: "A",
      explanation: "Glucose is an aldohexose (a six-carbon sugar with an aldehyde group).",
      orderIndex: 0
    },
    {
      id: "neet-chemistry-biomolecules-chemistry-q02",
      topicId: "neet-chemistry-biomolecules-chemistry",
      text: "Sucrose is a non-reducing sugar because it lacks a:",
      optionA: "Glycosidic bond",
      optionB: "Carbon atom",
      optionC: "Free anomeric -OH group",
      optionD: "Hydroxyl group entirely",
      correctOption: "C",
      explanation: "Sucrose is non-reducing because both anomeric -OH groups are involved in the glycosidic bond.",
      orderIndex: 1
    },
    {
      id: "neet-chemistry-biomolecules-chemistry-q03",
      topicId: "neet-chemistry-biomolecules-chemistry",
      text: "The sugar present in DNA is:",
      optionA: "Ribose",
      optionB: "Fructose",
      optionC: "Glucose",
      optionD: "Deoxyribose",
      correctOption: "D",
      explanation: "DNA contains the sugar deoxyribose, while RNA contains ribose.",
      orderIndex: 2
    },
    {
      id: "neet-chemistry-biomolecules-chemistry-q04",
      topicId: "neet-chemistry-biomolecules-chemistry",
      text: "Which group of vitamins is fat-soluble?",
      optionA: "B and C",
      optionB: "C only",
      optionC: "A, D, E and K",
      optionD: "B-complex only",
      correctOption: "C",
      explanation: "Vitamins A, D, E and K are fat-soluble; the B-complex and C are water-soluble.",
      orderIndex: 3
    },
    {
      id: "neet-chemistry-biomolecules-chemistry-q05",
      topicId: "neet-chemistry-biomolecules-chemistry",
      text: "Amino acids in a protein are joined together by:",
      optionA: "Glycosidic bonds",
      optionB: "Ether bonds",
      optionC: "Ester bonds",
      optionD: "Peptide bonds",
      correctOption: "D",
      explanation: "Alpha-amino acids are linked by peptide bonds (-CO-NH-) to form proteins.",
      orderIndex: 4
    },
    {
      id: "neet-chemistry-biomolecules-chemistry-q06",
      topicId: "neet-chemistry-biomolecules-chemistry",
      text: "The bonds joining monosaccharide units in a polysaccharide are:",
      optionA: "Peptide bonds",
      optionB: "Disulphide bonds",
      optionC: "Phosphodiester bonds",
      optionD: "Glycosidic bonds",
      correctOption: "D",
      explanation: "Glycosidic bonds link monosaccharide units in disaccharides and polysaccharides.",
      orderIndex: 5
    },
    {
      id: "neet-chemistry-biomolecules-chemistry-q07",
      topicId: "neet-chemistry-biomolecules-chemistry",
      text: "Insulin, which regulates blood glucose, is chemically a:",
      optionA: "Carbohydrate",
      optionB: "Lipid",
      optionC: "Protein hormone",
      optionD: "Nucleic acid",
      correctOption: "C",
      explanation: "Insulin is a protein (peptide) hormone that lowers and regulates blood glucose.",
      orderIndex: 6
    },
    {
      id: "neet-chemistry-biomolecules-chemistry-q08",
      topicId: "neet-chemistry-biomolecules-chemistry",
      text: "Heating or extreme pH disrupts the secondary and tertiary structure of a protein in a process called:",
      optionA: "Denaturation",
      optionB: "Hydrolysis",
      optionC: "Condensation",
      optionD: "Esterification",
      correctOption: "A",
      explanation: "Denaturation disrupts the secondary and tertiary structure of proteins by heat or pH change.",
      orderIndex: 7
    },
    {
      id: "neet-chemistry-coordination-compounds-q01",
      topicId: "neet-chemistry-coordination-compounds",
      text: "In K4[Fe(CN)6], the oxidation state of iron is:",
      optionA: "+3",
      optionB: "0",
      optionC: "+2",
      optionD: "+6",
      correctOption: "C",
      explanation: "In K4[Fe(CN)6] iron is in the +2 oxidation state with coordination number 6.",
      orderIndex: 0
    },
    {
      id: "neet-chemistry-coordination-compounds-q02",
      topicId: "neet-chemistry-coordination-compounds",
      text: "EDTA, widely used in complexometric titration, is a ligand that is:",
      optionA: "Hexadentate",
      optionB: "Bidentate",
      optionC: "Monodentate",
      optionD: "Unidentate",
      correctOption: "A",
      explanation: "EDTA is a hexadentate ligand, donating through six donor atoms.",
      orderIndex: 1
    },
    {
      id: "neet-chemistry-coordination-compounds-q03",
      topicId: "neet-chemistry-coordination-compounds",
      text: "In Werner's theory, the coordination number corresponds to the metal's:",
      optionA: "Primary valency",
      optionB: "Secondary valency",
      optionC: "Atomic number",
      optionD: "Mass number",
      correctOption: "B",
      explanation: "Secondary valency in Werner's theory equals the coordination number of ligand donor atoms.",
      orderIndex: 2
    },
    {
      id: "neet-chemistry-coordination-compounds-q04",
      topicId: "neet-chemistry-coordination-compounds",
      text: "Ethylenediamine (en) is an example of a ligand that is:",
      optionA: "Bidentate",
      optionB: "Monodentate",
      optionC: "Tridentate",
      optionD: "Hexadentate",
      correctOption: "A",
      explanation: "Ethylenediamine (en) is a bidentate ligand with two nitrogen donor atoms.",
      orderIndex: 3
    },
    {
      id: "neet-chemistry-coordination-compounds-q05",
      topicId: "neet-chemistry-coordination-compounds",
      text: "The colour of transition-metal complexes is mainly due to:",
      optionA: "s-s transitions",
      optionB: "d-d transitions",
      optionC: "Nuclear transitions",
      optionD: "p-p transitions",
      correctOption: "B",
      explanation: "d-d electronic transitions absorb visible light, giving transition-metal complexes colour.",
      orderIndex: 4
    },
    {
      id: "neet-chemistry-coordination-compounds-q06",
      topicId: "neet-chemistry-coordination-compounds",
      text: "The splitting of d-orbitals into t2g and eg sets in a complex is explained by:",
      optionA: "Valence bond theory",
      optionB: "Molecular orbital theory of diatomics",
      optionC: "VSEPR theory",
      optionD: "Crystal field theory",
      correctOption: "D",
      explanation: "Crystal field theory explains the splitting of d-orbitals into t2g and eg levels.",
      orderIndex: 5
    },
    {
      id: "neet-chemistry-coordination-compounds-q07",
      topicId: "neet-chemistry-coordination-compounds",
      text: "A ring structure formed by a polydentate ligand bound to a metal is called a:",
      optionA: "Salt",
      optionB: "Isomer",
      optionC: "Complex ion only",
      optionD: "Chelate",
      correctOption: "D",
      explanation: "A chelate is a ring formed by a polydentate ligand, which adds extra stability.",
      orderIndex: 6
    },
    {
      id: "neet-chemistry-coordination-compounds-q08",
      topicId: "neet-chemistry-coordination-compounds",
      text: "In the spectrochemical series, which ligand is a strong-field ligand?",
      optionA: "I-",
      optionB: "CO",
      optionC: "Cl-",
      optionD: "F-",
      correctOption: "B",
      explanation: "CO is a strong-field ligand in the spectrochemical series, while I- is weak-field.",
      orderIndex: 7
    },
    {
      id: "neet-physics-kinematics-q01",
      topicId: "neet-physics-kinematics",
      text: "Which equation of motion relates final velocity, initial velocity, acceleration and displacement?",
      optionA: "v^2 = u^2 + 2as",
      optionB: "s = ut + (1/2)at^2",
      optionC: "v = u + at",
      optionD: "s = vt",
      correctOption: "A",
      explanation: "The relation v^2 = u^2 + 2as connects velocities, acceleration and displacement (no time term).",
      orderIndex: 0
    },
    {
      id: "neet-physics-kinematics-q02",
      topicId: "neet-physics-kinematics",
      text: "The maximum range of a projectile (for a given speed) is achieved at a launch angle of:",
      optionA: "30 degrees",
      optionB: "60 degrees",
      optionC: "45 degrees",
      optionD: "90 degrees",
      correctOption: "C",
      explanation: "For a given speed, the horizontal range of a projectile is maximum at a 45 degree launch angle.",
      orderIndex: 1
    },
    {
      id: "neet-physics-kinematics-q03",
      topicId: "neet-physics-kinematics",
      text: "The slope of a velocity-time graph represents the:",
      optionA: "Displacement",
      optionB: "Speed",
      optionC: "Acceleration",
      optionD: "Distance",
      correctOption: "C",
      explanation: "The slope of a velocity-time graph gives the acceleration of the body.",
      orderIndex: 2
    },
    {
      id: "neet-physics-kinematics-q04",
      topicId: "neet-physics-kinematics",
      text: "At the highest point of a projectile's path, its vertical velocity is:",
      optionA: "Maximum",
      optionB: "Equal to horizontal velocity",
      optionC: "Zero",
      optionD: "Infinite",
      correctOption: "C",
      explanation: "At the highest point the vertical component of a projectile's velocity is zero.",
      orderIndex: 3
    },
    {
      id: "neet-physics-kinematics-q05",
      topicId: "neet-physics-kinematics",
      text: "Which of the following is a vector quantity?",
      optionA: "Speed",
      optionB: "Displacement",
      optionC: "Distance",
      optionD: "Time",
      correctOption: "B",
      explanation: "Displacement is a vector (has magnitude and direction); distance and speed are scalars.",
      orderIndex: 4
    },
    {
      id: "neet-physics-kinematics-q06",
      topicId: "neet-physics-kinematics",
      text: "The area under a velocity-time graph gives the:",
      optionA: "Displacement",
      optionB: "Acceleration",
      optionC: "Force",
      optionD: "Power",
      correctOption: "A",
      explanation: "The area under a velocity-time graph equals the displacement of the body.",
      orderIndex: 5
    },
    {
      id: "neet-physics-kinematics-q07",
      topicId: "neet-physics-kinematics",
      text: "The equations of motion (v = u + at etc.) are valid only when the acceleration is:",
      optionA: "Uniform (constant)",
      optionB: "Variable",
      optionC: "Zero",
      optionD: "Negative",
      correctOption: "A",
      explanation: "The standard equations of motion hold only for uniform (constant) acceleration.",
      orderIndex: 6
    },
    {
      id: "neet-physics-kinematics-q08",
      topicId: "neet-physics-kinematics",
      text: "The path followed by a projectile under gravity (ignoring air resistance) is:",
      optionA: "A straight line",
      optionB: "A parabola",
      optionC: "A circle",
      optionD: "An ellipse",
      correctOption: "B",
      explanation: "A projectile follows a parabolic path because horizontal velocity is constant while vertical velocity changes.",
      orderIndex: 7
    },
    {
      id: "neet-physics-laws-of-motion-q01",
      topicId: "neet-physics-laws-of-motion",
      text: "Newton's first law of motion is also known as the law of:",
      optionA: "Inertia",
      optionB: "Acceleration",
      optionC: "Action-reaction",
      optionD: "Gravitation",
      correctOption: "A",
      explanation: "Newton's first law defines inertia, the tendency of a body to resist a change in its state.",
      orderIndex: 0
    },
    {
      id: "neet-physics-laws-of-motion-q02",
      topicId: "neet-physics-laws-of-motion",
      text: "The SI unit of force is the:",
      optionA: "Newton",
      optionB: "Watt",
      optionC: "Joule",
      optionD: "Pascal",
      correctOption: "A",
      explanation: "The newton (N), equal to kg m/s^2, is the SI unit of force.",
      orderIndex: 1
    },
    {
      id: "neet-physics-laws-of-motion-q03",
      topicId: "neet-physics-laws-of-motion",
      text: "Newton's second law states that force equals the rate of change of:",
      optionA: "Displacement",
      optionB: "Acceleration",
      optionC: "Energy",
      optionD: "Momentum",
      correctOption: "D",
      explanation: "Newton's second law gives F = dp/dt, the rate of change of momentum (F = ma).",
      orderIndex: 2
    },
    {
      id: "neet-physics-laws-of-motion-q04",
      topicId: "neet-physics-laws-of-motion",
      text: "The centripetal force needed for circular motion is directed:",
      optionA: "Inward (toward the centre)",
      optionB: "Outward (away from centre)",
      optionC: "Tangentially",
      optionD: "Vertically up",
      correctOption: "A",
      explanation: "Centripetal force is directed toward the centre of the circular path, with magnitude mv^2/r.",
      orderIndex: 3
    },
    {
      id: "neet-physics-laws-of-motion-q05",
      topicId: "neet-physics-laws-of-motion",
      text: "Impulse delivered to a body is equal to its change in:",
      optionA: "Velocity",
      optionB: "Momentum",
      optionC: "Kinetic energy",
      optionD: "Acceleration",
      correctOption: "B",
      explanation: "Impulse (force multiplied by time) equals the change in momentum of the body.",
      orderIndex: 4
    },
    {
      id: "neet-physics-laws-of-motion-q06",
      topicId: "neet-physics-laws-of-motion",
      text: "The recoil of a gun when fired is best explained by the conservation of:",
      optionA: "Energy",
      optionB: "Momentum",
      optionC: "Mass",
      optionD: "Charge",
      correctOption: "B",
      explanation: "The gun's recoil follows from conservation of linear momentum (and Newton's third law).",
      orderIndex: 5
    },
    {
      id: "neet-physics-laws-of-motion-q07",
      topicId: "neet-physics-laws-of-motion",
      text: "Which type of friction must be overcome to start a stationary body moving?",
      optionA: "Kinetic friction",
      optionB: "Limiting (maximum static) friction",
      optionC: "Rolling friction",
      optionD: "Fluid friction",
      correctOption: "B",
      explanation: "A body starts moving only after the applied force exceeds the limiting static friction.",
      orderIndex: 6
    },
    {
      id: "neet-physics-laws-of-motion-q08",
      topicId: "neet-physics-laws-of-motion",
      text: "Newton's third law of motion states that for every action there is:",
      optionA: "No reaction",
      optionB: "A smaller reaction",
      optionC: "An equal and opposite reaction",
      optionD: "A larger reaction",
      correctOption: "C",
      explanation: "Newton's third law states every action has an equal and opposite reaction.",
      orderIndex: 7
    },
    {
      id: "neet-physics-work-energy-power-q01",
      topicId: "neet-physics-work-energy-power",
      text: "The net work done on a body equals its change in:",
      optionA: "Potential energy",
      optionB: "Kinetic energy",
      optionC: "Momentum",
      optionD: "Temperature",
      correctOption: "B",
      explanation: "By the work-energy theorem, net work done equals the change in kinetic energy.",
      orderIndex: 0
    },
    {
      id: "neet-physics-work-energy-power-q02",
      topicId: "neet-physics-work-energy-power",
      text: "Work done by a force acting perpendicular to the displacement is:",
      optionA: "Maximum",
      optionB: "Zero",
      optionC: "Negative",
      optionD: "Equal to the force",
      correctOption: "B",
      explanation: "Since W = Fs cos(theta) and cos 90 degrees = 0, perpendicular force does zero work.",
      orderIndex: 1
    },
    {
      id: "neet-physics-work-energy-power-q03",
      topicId: "neet-physics-work-energy-power",
      text: "The kinetic energy of a body of mass m moving with speed v is:",
      optionA: "mgh",
      optionB: "Fs",
      optionC: "mv",
      optionD: "(1/2)mv^2",
      correctOption: "D",
      explanation: "Kinetic energy is KE = (1/2)mv^2.",
      orderIndex: 2
    },
    {
      id: "neet-physics-work-energy-power-q04",
      topicId: "neet-physics-work-energy-power",
      text: "A collision is called elastic when there is conservation of:",
      optionA: "Both momentum and kinetic energy",
      optionB: "Only kinetic energy",
      optionC: "Only momentum",
      optionD: "Neither",
      correctOption: "A",
      explanation: "An elastic collision conserves both momentum and kinetic energy.",
      orderIndex: 3
    },
    {
      id: "neet-physics-work-energy-power-q05",
      topicId: "neet-physics-work-energy-power",
      text: "The SI unit of power is the:",
      optionA: "Joule",
      optionB: "Watt",
      optionC: "Newton",
      optionD: "Pascal",
      correctOption: "B",
      explanation: "Power, the rate of doing work, is measured in watts (W = J/s).",
      orderIndex: 4
    },
    {
      id: "neet-physics-work-energy-power-q06",
      topicId: "neet-physics-work-energy-power",
      text: "One horsepower is approximately equal to:",
      optionA: "100 watts",
      optionB: "746 watts",
      optionC: "1000 watts",
      optionD: "550 watts",
      correctOption: "B",
      explanation: "One horsepower equals about 746 watts.",
      orderIndex: 5
    },
    {
      id: "neet-physics-work-energy-power-q07",
      topicId: "neet-physics-work-energy-power",
      text: "In a conservative field such as gravity, the total mechanical energy of a body is:",
      optionA: "Always increasing",
      optionB: "Always decreasing",
      optionC: "Zero",
      optionD: "Constant",
      correctOption: "D",
      explanation: "If only conservative forces act, the total mechanical energy (KE + PE) stays constant.",
      orderIndex: 6
    },
    {
      id: "neet-physics-work-energy-power-q08",
      topicId: "neet-physics-work-energy-power",
      text: "The gravitational potential energy of a body of mass m at height h is:",
      optionA: "(1/2)mv^2",
      optionB: "mv",
      optionC: "mgh",
      optionD: "Fvt",
      correctOption: "C",
      explanation: "Gravitational potential energy near the surface is PE = mgh.",
      orderIndex: 7
    },
    {
      id: "neet-physics-gravitation-q01",
      topicId: "neet-physics-gravitation",
      text: "The escape velocity from the surface of the Earth is approximately:",
      optionA: "7.9 km/s",
      optionB: "3.0 x 10^5 km/s",
      optionC: "9.8 km/s",
      optionD: "11.2 km/s",
      correctOption: "D",
      explanation: "The escape velocity from Earth's surface is about 11.2 km/s.",
      orderIndex: 0
    },
    {
      id: "neet-physics-gravitation-q02",
      topicId: "neet-physics-gravitation",
      text: "Kepler's law of periods states that the square of the orbital period is proportional to the:",
      optionA: "Radius",
      optionB: "Square of the radius",
      optionC: "Cube of the semi-major axis",
      optionD: "Mass of the planet",
      correctOption: "C",
      explanation: "Kepler's third law states T^2 is proportional to a^3, the cube of the semi-major axis.",
      orderIndex: 1
    },
    {
      id: "neet-physics-gravitation-q03",
      topicId: "neet-physics-gravitation",
      text: "The value of g at a planet's surface is given by:",
      optionA: "g = GM/R",
      optionB: "g = GMR",
      optionC: "g = G/R^2",
      optionD: "g = GM/R^2",
      correctOption: "D",
      explanation: "Acceleration due to gravity at the surface is g = GM/R^2.",
      orderIndex: 2
    },
    {
      id: "neet-physics-gravitation-q04",
      topicId: "neet-physics-gravitation",
      text: "A geostationary satellite has an orbital period of:",
      optionA: "24 hours",
      optionB: "12 hours",
      optionC: "1 hour",
      optionD: "365 days",
      correctOption: "A",
      explanation: "A geostationary satellite orbits with a period of 24 hours, matching Earth's rotation.",
      orderIndex: 3
    },
    {
      id: "neet-physics-gravitation-q05",
      topicId: "neet-physics-gravitation",
      text: "The acceleration due to gravity g is maximum at the:",
      optionA: "Poles",
      optionB: "Equator",
      optionC: "Centre of the Earth",
      optionD: "Top of a mountain",
      correctOption: "A",
      explanation: "g is maximum at the poles and decreases with altitude and depth.",
      orderIndex: 4
    },
    {
      id: "neet-physics-gravitation-q06",
      topicId: "neet-physics-gravitation",
      text: "The weightlessness felt by an astronaut in orbit is due to the state of:",
      optionA: "Zero gravity in space",
      optionB: "High speed only",
      optionC: "Free fall",
      optionD: "Absence of mass",
      correctOption: "C",
      explanation: "Orbital weightlessness arises because the satellite and astronaut are in continuous free fall.",
      orderIndex: 5
    },
    {
      id: "neet-physics-gravitation-q07",
      topicId: "neet-physics-gravitation",
      text: "According to Kepler's law of areas, a planet sweeps out:",
      optionA: "Unequal areas in equal times",
      optionB: "Equal areas in unequal times",
      optionC: "Equal areas in equal times",
      optionD: "No area at all",
      correctOption: "C",
      explanation: "Kepler's second law states a planet sweeps equal areas in equal time intervals.",
      orderIndex: 6
    },
    {
      id: "neet-physics-gravitation-q08",
      topicId: "neet-physics-gravitation",
      text: "Newton's law of gravitation states that the force between two masses is:",
      optionA: "Inversely proportional to the square of the distance",
      optionB: "Directly proportional to the distance",
      optionC: "Independent of distance",
      optionD: "Inversely proportional to the distance",
      correctOption: "A",
      explanation: "Gravitational force varies as 1/r^2, the inverse square of the separation between masses.",
      orderIndex: 7
    },
    {
      id: "neet-physics-thermodynamics-q01",
      topicId: "neet-physics-thermodynamics",
      text: "In an adiabatic process, the quantity that stays zero is:",
      optionA: "Heat exchanged with surroundings",
      optionB: "Change in internal energy",
      optionC: "Work done",
      optionD: "Pressure",
      correctOption: "A",
      explanation: "An adiabatic process exchanges no heat with the surroundings (delta Q = 0).",
      orderIndex: 0
    },
    {
      id: "neet-physics-thermodynamics-q02",
      topicId: "neet-physics-thermodynamics",
      text: "The first law of thermodynamics is expressed as:",
      optionA: "delta Q = delta U - delta W",
      optionB: "delta Q = delta W - delta U",
      optionC: "delta Q = delta U + delta W",
      optionD: "delta U = 0",
      correctOption: "C",
      explanation: "The first law states delta Q = delta U + delta W, conserving energy.",
      orderIndex: 1
    },
    {
      id: "neet-physics-thermodynamics-q03",
      topicId: "neet-physics-thermodynamics",
      text: "The most efficient engine operating between two given temperatures is the:",
      optionA: "Petrol engine",
      optionB: "Carnot engine",
      optionC: "Diesel engine",
      optionD: "Steam engine",
      correctOption: "B",
      explanation: "The Carnot engine is the most efficient possible engine between two temperatures.",
      orderIndex: 2
    },
    {
      id: "neet-physics-thermodynamics-q04",
      topicId: "neet-physics-thermodynamics",
      text: "In an isochoric process (constant volume), the work done by the gas is:",
      optionA: "Zero",
      optionB: "Maximum",
      optionC: "Equal to delta U",
      optionD: "Negative",
      correctOption: "A",
      explanation: "At constant volume no work is done (W = P delta V = 0) since delta V = 0.",
      orderIndex: 3
    },
    {
      id: "neet-physics-thermodynamics-q05",
      topicId: "neet-physics-thermodynamics",
      text: "For an ideal gas, Mayer's relation states that:",
      optionA: "Cp - Cv = R",
      optionB: "Cp + Cv = R",
      optionC: "Cp = Cv",
      optionD: "Cv - Cp = R",
      correctOption: "A",
      explanation: "Mayer's relation for an ideal gas is Cp - Cv = R.",
      orderIndex: 4
    },
    {
      id: "neet-physics-thermodynamics-q06",
      topicId: "neet-physics-thermodynamics",
      text: "According to the second law, heat flows spontaneously from a body at:",
      optionA: "High to low temperature",
      optionB: "Low to high temperature",
      optionC: "Equal temperatures only",
      optionD: "Any direction",
      correctOption: "A",
      explanation: "Heat flows spontaneously from a hotter body to a colder body (second law).",
      orderIndex: 5
    },
    {
      id: "neet-physics-thermodynamics-q07",
      topicId: "neet-physics-thermodynamics",
      text: "The efficiency of a Carnot engine working between hot (Th) and cold (Tc) reservoirs is:",
      optionA: "1 - Tc/Th",
      optionB: "Tc/Th",
      optionC: "Th/Tc",
      optionD: "1 + Tc/Th",
      correctOption: "A",
      explanation: "Carnot efficiency is 1 - Tc/Th, with temperatures in kelvin.",
      orderIndex: 6
    },
    {
      id: "neet-physics-thermodynamics-q08",
      topicId: "neet-physics-thermodynamics",
      text: "In an isothermal process for an ideal gas, the change in internal energy is:",
      optionA: "Maximum",
      optionB: "Negative",
      optionC: "Zero",
      optionD: "Equal to the heat supplied",
      correctOption: "C",
      explanation: "At constant temperature, an ideal gas has delta U = 0.",
      orderIndex: 7
    },
    {
      id: "neet-physics-oscillations-waves-q01",
      topicId: "neet-physics-oscillations-waves",
      text: "In simple harmonic motion, the restoring force is proportional to and directed:",
      optionA: "Same as the displacement",
      optionB: "Opposite to the displacement",
      optionC: "Perpendicular to displacement",
      optionD: "Independent of displacement",
      correctOption: "B",
      explanation: "In SHM the restoring force is proportional to and directed opposite to the displacement.",
      orderIndex: 0
    },
    {
      id: "neet-physics-oscillations-waves-q02",
      topicId: "neet-physics-oscillations-waves",
      text: "Sound waves are an example of which type of wave?",
      optionA: "Transverse",
      optionB: "Standing only",
      optionC: "Electromagnetic",
      optionD: "Longitudinal",
      correctOption: "D",
      explanation: "Sound is a longitudinal wave in which particles vibrate parallel to wave propagation.",
      orderIndex: 1
    },
    {
      id: "neet-physics-oscillations-waves-q03",
      topicId: "neet-physics-oscillations-waves",
      text: "The time period of a simple pendulum of length L is given by:",
      optionA: "T = 2 pi sqrt(m/k)",
      optionB: "T = 2 pi L g",
      optionC: "T = 2 pi sqrt(g/L)",
      optionD: "T = 2 pi sqrt(L/g)",
      correctOption: "D",
      explanation: "The period of a simple pendulum is T = 2 pi sqrt(L/g).",
      orderIndex: 2
    },
    {
      id: "neet-physics-oscillations-waves-q04",
      topicId: "neet-physics-oscillations-waves",
      text: "Sound cannot travel through:",
      optionA: "Air",
      optionB: "A vacuum",
      optionC: "Steel",
      optionD: "Water",
      correctOption: "B",
      explanation: "Sound needs a material medium and cannot propagate through a vacuum.",
      orderIndex: 3
    },
    {
      id: "neet-physics-oscillations-waves-q05",
      topicId: "neet-physics-oscillations-waves",
      text: "Two sound waves of slightly different frequencies superpose to produce:",
      optionA: "Beats",
      optionB: "Resonance",
      optionC: "Echo",
      optionD: "Reverberation",
      correctOption: "A",
      explanation: "Beats arise from two waves of slightly different frequencies; beat frequency = |f1 - f2|.",
      orderIndex: 4
    },
    {
      id: "neet-physics-oscillations-waves-q06",
      topicId: "neet-physics-oscillations-waves",
      text: "The relation between wave speed, frequency and wavelength is:",
      optionA: "v = f/lambda",
      optionB: "v = f x lambda",
      optionC: "v = lambda/f",
      optionD: "v = f + lambda",
      correctOption: "B",
      explanation: "Wave speed equals frequency multiplied by wavelength (v = f times lambda).",
      orderIndex: 5
    },
    {
      id: "neet-physics-oscillations-waves-q07",
      topicId: "neet-physics-oscillations-waves",
      text: "The apparent change in observed frequency due to relative motion of source and observer is the:",
      optionA: "Bohr effect",
      optionB: "Photoelectric effect",
      optionC: "Doppler effect",
      optionD: "Compton effect",
      correctOption: "C",
      explanation: "The Doppler effect changes the observed frequency when source and observer move relative to each other.",
      orderIndex: 6
    },
    {
      id: "neet-physics-oscillations-waves-q08",
      topicId: "neet-physics-oscillations-waves",
      text: "Resonance occurs when the forcing frequency equals the system's:",
      optionA: "Beat frequency",
      optionB: "Natural frequency",
      optionC: "Half-frequency",
      optionD: "Zero frequency",
      correctOption: "B",
      explanation: "Resonance occurs when the driving frequency matches the natural frequency, giving large amplitude.",
      orderIndex: 7
    },
    {
      id: "neet-physics-electrostatics-q01",
      topicId: "neet-physics-electrostatics",
      text: "According to Coulomb's law, the force between two point charges is inversely proportional to:",
      optionA: "The distance",
      optionB: "The square of the distance",
      optionC: "The cube of the distance",
      optionD: "The product of charges",
      correctOption: "B",
      explanation: "Coulomb's law states the force varies as 1/r^2, the inverse square of the separation.",
      orderIndex: 0
    },
    {
      id: "neet-physics-electrostatics-q02",
      topicId: "neet-physics-electrostatics",
      text: "The SI unit of capacitance is the:",
      optionA: "Farad",
      optionB: "Coulomb",
      optionC: "Volt",
      optionD: "Tesla",
      correctOption: "A",
      explanation: "Capacitance (C = Q/V) is measured in farads (F).",
      orderIndex: 1
    },
    {
      id: "neet-physics-electrostatics-q03",
      topicId: "neet-physics-electrostatics",
      text: "The electric field inside a conductor in electrostatic equilibrium is:",
      optionA: "Maximum",
      optionB: "Infinite",
      optionC: "Equal to the surface field",
      optionD: "Zero",
      correctOption: "D",
      explanation: "In electrostatic equilibrium the electric field inside a conductor is zero.",
      orderIndex: 2
    },
    {
      id: "neet-physics-electrostatics-q04",
      topicId: "neet-physics-electrostatics",
      text: "Inserting a dielectric between the plates of a capacitor causes its capacitance to:",
      optionA: "Decrease",
      optionB: "Become zero",
      optionC: "Stay the same",
      optionD: "Increase",
      correctOption: "D",
      explanation: "A dielectric increases the capacitance of a capacitor.",
      orderIndex: 3
    },
    {
      id: "neet-physics-electrostatics-q05",
      topicId: "neet-physics-electrostatics",
      text: "Gauss's law relates the electric flux through a closed surface to the:",
      optionA: "Surface area",
      optionB: "Volume",
      optionC: "External field only",
      optionD: "Enclosed charge",
      correctOption: "D",
      explanation: "Gauss's law states the total flux equals the enclosed charge divided by epsilon0.",
      orderIndex: 4
    },
    {
      id: "neet-physics-electrostatics-q06",
      topicId: "neet-physics-electrostatics",
      text: "The energy stored in a capacitor of capacitance C charged to voltage V is:",
      optionA: "CV",
      optionB: "(1/2)CV^2",
      optionC: "C/V",
      optionD: "CV^2",
      correctOption: "B",
      explanation: "The energy stored in a charged capacitor is U = (1/2)CV^2.",
      orderIndex: 5
    },
    {
      id: "neet-physics-electrostatics-q07",
      topicId: "neet-physics-electrostatics",
      text: "Electric field lines:",
      optionA: "Cross each other",
      optionB: "Start on negative and end on positive charges",
      optionC: "Start on positive and end on negative charges",
      optionD: "Form closed loops around charges",
      correctOption: "C",
      explanation: "Electric field lines begin on positive charges and end on negative charges and never cross.",
      orderIndex: 6
    },
    {
      id: "neet-physics-electrostatics-q08",
      topicId: "neet-physics-electrostatics",
      text: "The SI unit of electric field intensity is:",
      optionA: "Newton per coulomb",
      optionB: "Volt-metre",
      optionC: "Coulomb per metre",
      optionD: "Joule per coulomb",
      correctOption: "A",
      explanation: "Electric field intensity is force per unit charge, measured in N/C (or V/m).",
      orderIndex: 7
    },
    {
      id: "neet-physics-current-electricity-q01",
      topicId: "neet-physics-current-electricity",
      text: "Ohm's law is correctly expressed as:",
      optionA: "I = VR",
      optionB: "V = IR",
      optionC: "R = VI",
      optionD: "V = I/R",
      correctOption: "B",
      explanation: "Ohm's law states V = IR for an ohmic conductor at constant temperature.",
      orderIndex: 0
    },
    {
      id: "neet-physics-current-electricity-q02",
      topicId: "neet-physics-current-electricity",
      text: "The equivalent resistance of resistors connected in series is:",
      optionA: "Less than the smallest resistance",
      optionB: "The sum of the individual resistances",
      optionC: "Reciprocal of the sum",
      optionD: "Always equal to one resistor",
      correctOption: "B",
      explanation: "In series the equivalent resistance equals the sum R1 + R2 + ...",
      orderIndex: 1
    },
    {
      id: "neet-physics-current-electricity-q03",
      topicId: "neet-physics-current-electricity",
      text: "Kirchhoff's junction rule is a direct consequence of the conservation of:",
      optionA: "Energy",
      optionB: "Mass",
      optionC: "Momentum",
      optionD: "Charge",
      correctOption: "D",
      explanation: "The junction rule (current in equals current out) follows from conservation of charge.",
      orderIndex: 2
    },
    {
      id: "neet-physics-current-electricity-q04",
      topicId: "neet-physics-current-electricity",
      text: "The resistance of a wire is related to its length L and area A by:",
      optionA: "R = rho L / A",
      optionB: "R = rho A / L",
      optionC: "R = L / (rho A)",
      optionD: "R = rho L A",
      correctOption: "A",
      explanation: "Resistance R = rho L / A, increasing with length and decreasing with cross-section.",
      orderIndex: 3
    },
    {
      id: "neet-physics-current-electricity-q05",
      topicId: "neet-physics-current-electricity",
      text: "Electrical power dissipated in a resistor can be written as:",
      optionA: "P = V/I",
      optionB: "P = I^2 R",
      optionC: "P = IR^2",
      optionD: "P = V/R",
      correctOption: "B",
      explanation: "Power dissipated is P = VI = I^2 R = V^2/R.",
      orderIndex: 4
    },
    {
      id: "neet-physics-current-electricity-q06",
      topicId: "neet-physics-current-electricity",
      text: "Kirchhoff's loop rule is based on the conservation of:",
      optionA: "Charge",
      optionB: "Mass",
      optionC: "Energy",
      optionD: "Momentum",
      correctOption: "C",
      explanation: "The loop rule (sum of EMFs equals sum of IR drops) follows from energy conservation.",
      orderIndex: 5
    },
    {
      id: "neet-physics-current-electricity-q07",
      topicId: "neet-physics-current-electricity",
      text: "A Wheatstone bridge is said to be balanced when:",
      optionA: "P = Q",
      optionB: "P/Q = R/S",
      optionC: "R = S",
      optionD: "P x Q = R x S",
      correctOption: "B",
      explanation: "A Wheatstone bridge is balanced when the ratio P/Q equals R/S, giving zero galvanometer current.",
      orderIndex: 6
    },
    {
      id: "neet-physics-current-electricity-q08",
      topicId: "neet-physics-current-electricity",
      text: "In a parallel combination of resistors, the quantity that is the same across each resistor is the:",
      optionA: "Current",
      optionB: "Power",
      optionC: "Resistance",
      optionD: "Voltage",
      correctOption: "D",
      explanation: "In a parallel circuit the same voltage is applied across each resistor.",
      orderIndex: 7
    },
    {
      id: "neet-physics-moving-charges-magnetism-q01",
      topicId: "neet-physics-moving-charges-magnetism",
      text: "The magnetic force on a charged particle moving in a magnetic field is:",
      optionA: "Parallel to the velocity",
      optionB: "Along the field",
      optionC: "Perpendicular to both velocity and field",
      optionD: "Zero always",
      correctOption: "C",
      explanation: "The magnetic (Lorentz) force F = q(v x B) is perpendicular to both velocity and field.",
      orderIndex: 0
    },
    {
      id: "neet-physics-moving-charges-magnetism-q02",
      topicId: "neet-physics-moving-charges-magnetism",
      text: "The SI unit of magnetic field strength is the:",
      optionA: "Weber",
      optionB: "Tesla",
      optionC: "Henry",
      optionD: "Gauss",
      correctOption: "B",
      explanation: "The SI unit of magnetic field (flux density) is the tesla (T).",
      orderIndex: 1
    },
    {
      id: "neet-physics-moving-charges-magnetism-q03",
      topicId: "neet-physics-moving-charges-magnetism",
      text: "Two parallel wires carrying current in the same direction will:",
      optionA: "Rotate",
      optionB: "Repel each other",
      optionC: "Exert no force",
      optionD: "Attract each other",
      correctOption: "D",
      explanation: "Parallel currents in the same direction attract each other.",
      orderIndex: 2
    },
    {
      id: "neet-physics-moving-charges-magnetism-q04",
      topicId: "neet-physics-moving-charges-magnetism",
      text: "A charged particle entering a uniform magnetic field perpendicular to its velocity follows a:",
      optionA: "Straight line",
      optionB: "Parabola",
      optionC: "Circular path",
      optionD: "Hyperbola",
      correctOption: "C",
      explanation: "A charge moving perpendicular to a uniform field moves in a circle of radius r = mv/(qB).",
      orderIndex: 3
    },
    {
      id: "neet-physics-moving-charges-magnetism-q05",
      topicId: "neet-physics-moving-charges-magnetism",
      text: "A device that accelerates charged particles using a magnetic field is the:",
      optionA: "Cyclotron",
      optionB: "Transformer",
      optionC: "Galvanometer",
      optionD: "Voltmeter",
      correctOption: "A",
      explanation: "A cyclotron uses a magnetic field and alternating voltage to accelerate charged particles.",
      orderIndex: 4
    },
    {
      id: "neet-physics-moving-charges-magnetism-q06",
      topicId: "neet-physics-moving-charges-magnetism",
      text: "The magnetic field inside a long solenoid carrying current is given by:",
      optionA: "B = mu0 n I",
      optionB: "B = mu0 I / (2 pi r)",
      optionC: "B = mu0 I / (2R)",
      optionD: "B = mu0 I R",
      correctOption: "A",
      explanation: "The field inside a long solenoid is B = mu0 n I, where n is turns per unit length.",
      orderIndex: 5
    },
    {
      id: "neet-physics-moving-charges-magnetism-q07",
      topicId: "neet-physics-moving-charges-magnetism",
      text: "A charged particle moving parallel to a magnetic field experiences a force that is:",
      optionA: "Maximum",
      optionB: "Zero",
      optionC: "Perpendicular to B",
      optionD: "Along B",
      correctOption: "B",
      explanation: "When velocity is parallel to B, sin(theta) = 0, so the magnetic force is zero.",
      orderIndex: 6
    },
    {
      id: "neet-physics-moving-charges-magnetism-q08",
      topicId: "neet-physics-moving-charges-magnetism",
      text: "A moving-coil galvanometer detects small currents by measuring the:",
      optionA: "Heat produced",
      optionB: "Charge stored",
      optionC: "Voltage drop",
      optionD: "Torque on a current-carrying coil",
      correctOption: "D",
      explanation: "A galvanometer works on the torque experienced by a current-carrying coil in a magnetic field.",
      orderIndex: 7
    },
    {
      id: "neet-physics-electromagnetic-induction-ac-q01",
      topicId: "neet-physics-electromagnetic-induction-ac",
      text: "Faraday's law states that the induced EMF is equal to the rate of change of:",
      optionA: "Magnetic flux",
      optionB: "Current",
      optionC: "Resistance",
      optionD: "Charge",
      correctOption: "A",
      explanation: "Faraday's law: the induced EMF equals the negative rate of change of magnetic flux.",
      orderIndex: 0
    },
    {
      id: "neet-physics-electromagnetic-induction-ac-q02",
      topicId: "neet-physics-electromagnetic-induction-ac",
      text: "Lenz's law, which says the induced current opposes the change causing it, is a consequence of conservation of:",
      optionA: "Charge",
      optionB: "Mass",
      optionC: "Momentum",
      optionD: "Energy",
      correctOption: "D",
      explanation: "Lenz's law is a statement of energy conservation; the induced current opposes the flux change.",
      orderIndex: 1
    },
    {
      id: "neet-physics-electromagnetic-induction-ac-q03",
      topicId: "neet-physics-electromagnetic-induction-ac",
      text: "A transformer can change the voltage of:",
      optionA: "Direct current only",
      optionB: "Both AC and DC",
      optionC: "Alternating current only",
      optionD: "Neither",
      correctOption: "C",
      explanation: "A transformer works only on alternating current, using mutual induction.",
      orderIndex: 2
    },
    {
      id: "neet-physics-electromagnetic-induction-ac-q04",
      topicId: "neet-physics-electromagnetic-induction-ac",
      text: "The RMS value of an alternating current of peak value I0 is:",
      optionA: "I0",
      optionB: "2 I0",
      optionC: "I0 x sqrt(2)",
      optionD: "I0 / sqrt(2)",
      correctOption: "D",
      explanation: "The RMS current equals the peak value divided by the square root of two, I0/sqrt(2).",
      orderIndex: 3
    },
    {
      id: "neet-physics-electromagnetic-induction-ac-q05",
      topicId: "neet-physics-electromagnetic-induction-ac",
      text: "At resonance in a series LCR circuit, the impedance is:",
      optionA: "Maximum",
      optionB: "Infinite",
      optionC: "Zero",
      optionD: "Minimum (equal to R)",
      correctOption: "D",
      explanation: "At resonance XL = XC, so impedance is minimum and equal to the resistance R.",
      orderIndex: 4
    },
    {
      id: "neet-physics-electromagnetic-induction-ac-q06",
      topicId: "neet-physics-electromagnetic-induction-ac",
      text: "Inductive reactance XL of a coil in an AC circuit is given by:",
      optionA: "1/(2 pi f L)",
      optionB: "1/(2 pi f C)",
      optionC: "2 pi f C",
      optionD: "2 pi f L",
      correctOption: "D",
      explanation: "Inductive reactance is XL = 2 pi f L, increasing with frequency.",
      orderIndex: 5
    },
    {
      id: "neet-physics-electromagnetic-induction-ac-q07",
      topicId: "neet-physics-electromagnetic-induction-ac",
      text: "For an ideal transformer, the relation between turns and voltages is:",
      optionA: "Vs/Vp = Ns/Np",
      optionB: "Vs/Vp = Np/Ns",
      optionC: "Vs x Vp = Ns x Np",
      optionD: "Vs = Vp",
      correctOption: "A",
      explanation: "In an ideal transformer Vs/Vp = Ns/Np, relating secondary and primary turns to voltages.",
      orderIndex: 6
    },
    {
      id: "neet-physics-electromagnetic-induction-ac-q08",
      topicId: "neet-physics-electromagnetic-induction-ac",
      text: "The phenomenon by which a coil opposes changes in its own current is called:",
      optionA: "Mutual induction",
      optionB: "Hysteresis",
      optionC: "Eddy currents",
      optionD: "Self-induction",
      correctOption: "D",
      explanation: "Self-induction is a coil opposing changes in its own current via an induced back-EMF.",
      orderIndex: 7
    },
    {
      id: "neet-physics-dual-nature-modern-physics-q01",
      topicId: "neet-physics-dual-nature-modern-physics",
      text: "In the photoelectric effect, the emission of electrons depends on the light's:",
      optionA: "Frequency",
      optionB: "Intensity only",
      optionC: "Colour temperature",
      optionD: "Phase",
      correctOption: "A",
      explanation: "Photoelectron emission depends on frequency; below the threshold frequency no electrons emit.",
      orderIndex: 0
    },
    {
      id: "neet-physics-dual-nature-modern-physics-q02",
      topicId: "neet-physics-dual-nature-modern-physics",
      text: "The minimum energy required to eject an electron from a metal surface is the:",
      optionA: "Work function",
      optionB: "Kinetic energy",
      optionC: "Binding energy",
      optionD: "Ionisation energy of gas",
      correctOption: "A",
      explanation: "The work function is the minimum energy needed to free an electron from the metal surface.",
      orderIndex: 1
    },
    {
      id: "neet-physics-dual-nature-modern-physics-q03",
      topicId: "neet-physics-dual-nature-modern-physics",
      text: "The de Broglie wavelength of a particle of momentum p is:",
      optionA: "lambda = h/p",
      optionB: "lambda = p/h",
      optionC: "lambda = hp",
      optionD: "lambda = h + p",
      correctOption: "A",
      explanation: "The de Broglie wavelength is lambda = h/p, linking a particle's momentum to its wavelength.",
      orderIndex: 2
    },
    {
      id: "neet-physics-dual-nature-modern-physics-q04",
      topicId: "neet-physics-dual-nature-modern-physics",
      text: "One electronvolt (eV) is equal to:",
      optionA: "1.6 x 10^-19 joule",
      optionB: "1.6 x 10^19 joule",
      optionC: "9.1 x 10^-31 joule",
      optionD: "6.6 x 10^-34 joule",
      correctOption: "A",
      explanation: "One electronvolt equals 1.6 x 10^-19 joule.",
      orderIndex: 3
    },
    {
      id: "neet-physics-dual-nature-modern-physics-q05",
      topicId: "neet-physics-dual-nature-modern-physics",
      text: "The joining of light nuclei to release energy, as in the Sun, is called:",
      optionA: "Nuclear fission",
      optionB: "Radioactivity",
      optionC: "Nuclear fusion",
      optionD: "Ionisation",
      correctOption: "C",
      explanation: "Nuclear fusion joins light nuclei into heavier ones, releasing large amounts of energy.",
      orderIndex: 4
    },
    {
      id: "neet-physics-dual-nature-modern-physics-q06",
      topicId: "neet-physics-dual-nature-modern-physics",
      text: "The energy of a photon of frequency f is given by:",
      optionA: "E = h/f",
      optionB: "E = hf",
      optionC: "E = f/h",
      optionD: "E = h + f",
      correctOption: "B",
      explanation: "A photon's energy is E = hf, where h is Planck's constant.",
      orderIndex: 5
    },
    {
      id: "neet-physics-dual-nature-modern-physics-q07",
      topicId: "neet-physics-dual-nature-modern-physics",
      text: "The rest mass of a photon is:",
      optionA: "Zero",
      optionB: "Equal to that of an electron",
      optionC: "Infinite",
      optionD: "Equal to that of a proton",
      correctOption: "A",
      explanation: "A photon has zero rest mass yet carries momentum p = h/lambda.",
      orderIndex: 6
    },
    {
      id: "neet-physics-dual-nature-modern-physics-q08",
      topicId: "neet-physics-dual-nature-modern-physics",
      text: "The Bohr model of the atom introduced the idea of:",
      optionA: "Quantised energy levels",
      optionB: "Continuous energy levels",
      optionC: "A solid nucleus only",
      optionD: "Electron-free atoms",
      correctOption: "A",
      explanation: "Bohr proposed quantised energy levels (stationary orbits) to explain atomic spectra.",
      orderIndex: 7
    },
    {
      id: "neet-physics-semiconductor-electronics-q01",
      topicId: "neet-physics-semiconductor-electronics",
      text: "In an n-type semiconductor the majority charge carriers are:",
      optionA: "Holes",
      optionB: "Protons",
      optionC: "Electrons",
      optionD: "Neutrons",
      correctOption: "C",
      explanation: "n-type semiconductors are doped with pentavalent atoms, making electrons the majority carriers.",
      orderIndex: 0
    },
    {
      id: "neet-physics-semiconductor-electronics-q02",
      topicId: "neet-physics-semiconductor-electronics",
      text: "A p-n junction diode conducts current when it is:",
      optionA: "Reverse biased",
      optionB: "Forward biased",
      optionC: "Unbiased",
      optionD: "At absolute zero",
      correctOption: "B",
      explanation: "A diode conducts in forward bias and blocks current in reverse bias.",
      orderIndex: 1
    },
    {
      id: "neet-physics-semiconductor-electronics-q03",
      topicId: "neet-physics-semiconductor-electronics",
      text: "A p-type semiconductor is produced by doping silicon with a:",
      optionA: "Pentavalent impurity",
      optionB: "Trivalent impurity",
      optionC: "Tetravalent impurity",
      optionD: "Noble gas",
      correctOption: "B",
      explanation: "Doping with a trivalent impurity (like boron) creates holes, giving a p-type semiconductor.",
      orderIndex: 2
    },
    {
      id: "neet-physics-semiconductor-electronics-q04",
      topicId: "neet-physics-semiconductor-electronics",
      text: "A diode is most commonly used in a circuit as a:",
      optionA: "Amplifier",
      optionB: "Transformer",
      optionC: "Oscillator",
      optionD: "Rectifier",
      correctOption: "D",
      explanation: "A diode acts as a rectifier, converting alternating current (AC) to direct current (DC).",
      orderIndex: 3
    },
    {
      id: "neet-physics-semiconductor-electronics-q05",
      topicId: "neet-physics-semiconductor-electronics",
      text: "As temperature increases, the resistance of a pure semiconductor:",
      optionA: "Increases",
      optionB: "Becomes infinite",
      optionC: "Stays constant",
      optionD: "Decreases",
      correctOption: "D",
      explanation: "In a semiconductor, more carriers are generated with rising temperature, so resistance decreases.",
      orderIndex: 4
    },
    {
      id: "neet-physics-semiconductor-electronics-q06",
      topicId: "neet-physics-semiconductor-electronics",
      text: "The diode used for voltage regulation operating in reverse breakdown is the:",
      optionA: "LED",
      optionB: "Rectifier diode",
      optionC: "Photodiode",
      optionD: "Zener diode",
      correctOption: "D",
      explanation: "A Zener diode operates in reverse breakdown and is used for voltage regulation.",
      orderIndex: 5
    },
    {
      id: "neet-physics-semiconductor-electronics-q07",
      topicId: "neet-physics-semiconductor-electronics",
      text: "The forbidden energy gap of silicon is approximately:",
      optionA: "0.1 eV",
      optionB: "1.1 eV",
      optionC: "5.5 eV",
      optionD: "11 eV",
      correctOption: "B",
      explanation: "The forbidden energy gap of silicon is about 1.1 eV.",
      orderIndex: 6
    },
    {
      id: "neet-physics-semiconductor-electronics-q08",
      topicId: "neet-physics-semiconductor-electronics",
      text: "A transistor can be used to:",
      optionA: "Store charge only",
      optionB: "Generate magnetic fields",
      optionC: "Amplify signals or act as a switch",
      optionD: "Rectify only",
      correctOption: "C",
      explanation: "A transistor can amplify signals or act as an electronic switch.",
      orderIndex: 7
    },
    ...bioQuestions
  ]
});
