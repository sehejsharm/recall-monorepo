// JEE Main depth expansion (pass 2). Fills the remaining high-yield syllabus
// gaps across all three subjects: Physics (AC/LCR circuits, capacitance,
// experimental physics), Chemistry (everyday-life, salt analysis, purification
// of organic compounds, named reactions), and Mathematics (properties of
// triangles, mathematical induction, mean-value theorems). Each topic ships a
// study note and a full 12-question drill.
import type { AuthoredMaterial } from "./builder";
import type { Question, Topic } from "@jyotir/core";

export const jeeM2Topics: Topic[] = [
  // Physics (existing max orderIndex = 20)
  { id: "jee-physics-alternating-current", subjectId: "jee-physics", name: "Alternating Current & LCR Circuits", slug: "alternating-current", orderIndex: 21 },
  { id: "jee-physics-capacitance", subjectId: "jee-physics", name: "Capacitance & Capacitors", slug: "capacitance", orderIndex: 22 },
  { id: "jee-physics-experimental-physics", subjectId: "jee-physics", name: "Experimental Physics & Error Analysis", slug: "experimental-physics", orderIndex: 23 },
  // Chemistry (existing max orderIndex = 24)
  { id: "jee-chemistry-everyday-life", subjectId: "jee-chemistry", name: "Chemistry in Everyday Life", slug: "everyday-life", orderIndex: 25 },
  { id: "jee-chemistry-qualitative-analysis", subjectId: "jee-chemistry", name: "Qualitative Salt Analysis", slug: "qualitative-analysis", orderIndex: 26 },
  { id: "jee-chemistry-purification-organic", subjectId: "jee-chemistry", name: "Purification & Characterisation of Organic Compounds", slug: "purification-organic", orderIndex: 27 },
  { id: "jee-chemistry-name-reactions", subjectId: "jee-chemistry", name: "Named Organic Reactions", slug: "name-reactions", orderIndex: 28 },
  // Mathematics (existing max orderIndex = 19)
  { id: "jee-mathematics-properties-of-triangles", subjectId: "jee-mathematics", name: "Properties & Solutions of Triangles", slug: "properties-of-triangles", orderIndex: 20 },
  { id: "jee-mathematics-mathematical-induction", subjectId: "jee-mathematics", name: "Mathematical Induction", slug: "mathematical-induction", orderIndex: 21 },
  { id: "jee-mathematics-mean-value-theorems", subjectId: "jee-mathematics", name: "Rolle's & Mean Value Theorems", slug: "mean-value-theorems", orderIndex: 22 }
];

export const jeeM2Materials: AuthoredMaterial[] = [
  { id: "jee-physics-alternating-current-m01", topicId: "jee-physics-alternating-current", title: "Alternating Current & LCR Circuits", content: `**Alternating current (AC)** varies sinusoidally: i = i₀ sin(ωt).

## RMS and peak
- **RMS value**: I_rms = i₀/√2; V_rms = V₀/√2. Meters read RMS.
- Average of a full sine cycle is **zero**.

## Reactance
| Element | Reactance | Phase (voltage vs current) |
| --- | --- | --- |
| Resistor R | R | in phase |
| Inductor L | X_L = ωL | voltage **leads** by 90° |
| Capacitor C | X_C = 1/ωC | voltage **lags** by 90° |

## Series LCR circuit
- **Impedance** Z = √[R² + (X_L − X_C)²].
- **Resonance** occurs when X_L = X_C ⇒ ω₀ = 1/√(LC); at resonance Z = R (minimum) and current is maximum.
- **Power factor** = cos φ = R/Z; average power P = V_rms·I_rms·cos φ. A pure L or C consumes **no** average power (wattless current).`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-physics-capacitance-m01", topicId: "jee-physics-capacitance", title: "Capacitance & Capacitors", content: `A **capacitor** stores charge; **capacitance** C = Q/V (unit: farad).

## Parallel-plate capacitor
- C = ε₀A/d (vacuum); with a dielectric of constant K, C = Kε₀A/d.
- Inserting a dielectric **increases** capacitance.

## Combinations
| Arrangement | Formula |
| --- | --- |
| **Series** | 1/C = 1/C₁ + 1/C₂ + … |
| **Parallel** | C = C₁ + C₂ + … |

## Energy
- Energy stored: U = ½CV² = ½QV = Q²/2C.
- Energy density in the field: u = ½ε₀E².

## Charging (RC circuit)
- Charge grows as Q = Q₀(1 − e^(−t/RC)); the **time constant** is τ = RC.
- After one time constant the capacitor reaches ~63% of full charge.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-physics-experimental-physics-m01", topicId: "jee-physics-experimental-physics", title: "Experimental Physics & Error Analysis", content: `JEE Main tests **measurement instruments** and **error propagation**.

## Instruments & least count
- **Vernier calliper**: LC = 1 main-scale division − 1 vernier division (typically 0.1 mm).
- **Screw gauge / micrometer**: LC = pitch / number of circular-scale divisions (typically 0.01 mm).
- **Zero error** must be added or subtracted from every reading.

## Errors
- **Absolute error** = |measured − true|; **relative error** = absolute/true; **percentage error** = relative × 100.
- For a **sum or difference**, absolute errors add.
- For a **product or quotient**, **relative** (fractional) errors add.
- For a **power** Z = Aⁿ, the relative error is **n × (relative error of A)**.

## Significant figures
Report a result to the least number of significant figures among the measurements used.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-chemistry-everyday-life-m01", topicId: "jee-chemistry-everyday-life", title: "Chemistry in Everyday Life", content: `This topic covers the chemistry of **drugs, food and cleaning agents**.

## Drugs by action
| Class | Action | Example |
| --- | --- | --- |
| **Analgesic** | relieves pain | aspirin, paracetamol |
| **Antipyretic** | reduces fever | paracetamol |
| **Antiseptic** | kills microbes on living tissue | dettol, iodine |
| **Disinfectant** | kills microbes on surfaces | phenol (high conc.) |
| **Antacid** | neutralises stomach acid | ranitidine, Mg(OH)₂ |
| **Antihistamine** | anti-allergy | cetirizine |
| **Tranquiliser** | treats stress/anxiety | equanil |

## Food & cleaning
- **Artificial sweeteners**: aspartame, saccharin (no calories).
- **Antioxidants** (BHT, BHA) prevent food from oxidising.
- **Soaps** are sodium/potassium salts of fatty acids; **detergents** are salts of sulphonic acids and work in **hard water**.
- **Antibiotics** are broad-spectrum (chloramphenicol) or narrow-spectrum.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-chemistry-qualitative-analysis-m01", topicId: "jee-chemistry-qualitative-analysis", title: "Qualitative Salt Analysis", content: `Salt analysis identifies the **cation (basic radical)** and **anion (acidic radical)** in a salt.

## Anion tests
- **Carbonate (CO₃²⁻)**: dilute acid gives brisk effervescence of CO₂ (turns lime water milky).
- **Sulphide (S²⁻)**: smell of rotten eggs (H₂S); blackens lead-acetate paper.
- **Chloride (Cl⁻)**: white precipitate with AgNO₃, soluble in NH₃.
- **Sulphate (SO₄²⁻)**: white precipitate with BaCl₂, insoluble in acid.
- **Nitrate (NO₃⁻)**: **brown ring test** with FeSO₄ and conc. H₂SO₄.

## Cation groups (systematic scheme)
| Group | Reagent | Cations |
| --- | --- | --- |
| I | dil. HCl | Pb²⁺ |
| II | H₂S / dil. HCl | Cu²⁺, Pb²⁺ |
| III | NH₄OH / NH₄Cl | Al³⁺, Fe³⁺ |
| IV | H₂S / NH₄OH | Zn²⁺, Mn²⁺ |
| V | (NH₄)₂CO₃ | Ca²⁺, Ba²⁺ |

**Flame colours**: Na⁺ golden-yellow, K⁺ lilac, Ca²⁺ brick-red, Cu²⁺ green-blue.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-chemistry-purification-organic-m01", topicId: "jee-chemistry-purification-organic", title: "Purification & Characterisation of Organic Compounds", content: `Organic compounds are purified by exploiting differences in physical properties.

## Purification methods
| Method | Based on | Use |
| --- | --- | --- |
| **Filtration** | particle size | solid from liquid |
| **Crystallisation** | solubility vs temperature | purifying solids |
| **Distillation** | boiling point | separating liquids |
| **Fractional distillation** | close boiling points | e.g. petroleum |
| **Steam distillation** | steam-volatile, immiscible with water | aniline |
| **Sublimation** | solid → vapour directly | camphor, naphthalene |
| **Chromatography** | differential adsorption | separating mixtures |

## Detection of elements (Lassaigne's test)
Fusing with sodium converts covalent elements to ionic forms:
- **Nitrogen** → Prussian blue with FeSO₄.
- **Sulphur** → black PbS or violet with sodium nitroprusside.
- **Halogens** → silver halide precipitate with AgNO₃.

## Estimation
- **Carbon & hydrogen**: Liebig's combustion (weigh CO₂ and H₂O).
- **Nitrogen**: Kjeldahl (for amines/amides) or Duma's method.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-chemistry-name-reactions-m01", topicId: "jee-chemistry-name-reactions", title: "Named Organic Reactions", content: `High-frequency named reactions in JEE Main.

## Carbonyl & aromatic reactions
| Reaction | What it does |
| --- | --- |
| **Aldol condensation** | two carbonyls (with α-H) → β-hydroxy carbonyl → enone |
| **Cannizzaro** | aldehydes **without** α-H disproportionate (base) |
| **Friedel–Crafts** | alkylation/acylation of arenes (AlCl₃ catalyst) |
| **Reimer–Tiemann** | phenol → salicylaldehyde (CHCl₃/NaOH) |
| **Kolbe** | phenol → salicylic acid (CO₂/NaOH) |
| **Wurtz** | 2 R–X + 2Na → R–R (alkane) |

## Amine & reduction reactions
| Reaction | What it does |
| --- | --- |
| **Hofmann bromamide** | amide → amine with **one fewer carbon** |
| **Sandmeyer** | diazonium → aryl halide (CuX) |
| **Gabriel phthalimide** | synthesis of **primary** amines |
| **Clemmensen** | C=O → CH₂ (Zn-Hg/HCl) |
| **Wolff–Kishner** | C=O → CH₂ (NH₂NH₂/base) |

The **haloform** reaction gives CHX₃ from methyl ketones with X₂/NaOH — also a test for CH₃CO– groups.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-mathematics-properties-of-triangles-m01", topicId: "jee-mathematics-properties-of-triangles", title: "Properties & Solutions of Triangles", content: `Relations among the sides a, b, c and angles A, B, C of a triangle.

## Core rules
- **Sine rule**: a/sin A = b/sin B = c/sin C = 2R (R = circumradius).
- **Cosine rule**: a² = b² + c² − 2bc·cos A.
- **Projection rule**: a = b·cos C + c·cos B.

## Area
- Area = ½·ab·sin C = ½·bc·sin A.
- **Heron's formula**: Area = √[s(s−a)(s−b)(s−c)], where s = (a+b+c)/2 is the semi-perimeter.

## Radii
- **Circumradius** R = abc / (4·Area).
- **Inradius** r = Area / s.

## Half-angle
tan(A/2) = √[ (s−b)(s−c) / (s(s−a)) ]. These let you "solve" a triangle from partial data (SSS, SAS, ASA cases).`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-mathematics-mathematical-induction-m01", topicId: "jee-mathematics-mathematical-induction", title: "Mathematical Induction", content: `The **principle of mathematical induction (PMI)** proves a statement P(n) for all natural numbers n ≥ n₀.

## The two steps
1. **Base case**: verify P(n₀) (usually P(1)) is true.
2. **Inductive step**: assume P(k) is true (the **inductive hypothesis**) and prove P(k+1).

If both hold, P(n) is true for every n ≥ n₀.

## Standard results proved by induction
- 1 + 2 + … + n = n(n+1)/2.
- 1² + 2² + … + n² = n(n+1)(2n+1)/6.
- 1³ + 2³ + … + n³ = [n(n+1)/2]².
- Divisibility, e.g. **n³ + 2n is divisible by 3** for all n.

## Cautions
- The base case is essential — skipping it can "prove" false statements.
- **Strong induction** assumes P holds for all values up to k, useful for recurrences.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-mathematics-mean-value-theorems-m01", topicId: "jee-mathematics-mean-value-theorems", title: "Rolle's & Mean Value Theorems", content: `Two central theorems of differential calculus, on a function continuous on [a,b] and differentiable on (a,b).

## Rolle's theorem
If additionally **f(a) = f(b)**, then there exists at least one c in (a,b) with **f′(c) = 0**.
Geometrically: a horizontal tangent exists somewhere between two equal-height endpoints.

## Lagrange's Mean Value Theorem (LMVT)
There exists c in (a,b) such that
**f′(c) = [f(b) − f(a)] / (b − a)**.
Geometrically: the tangent at c is parallel to the chord joining the endpoints. Rolle's theorem is the special case f(a) = f(b).

## Consequences
- If f′(x) = 0 throughout an interval, f is **constant** there.
- If f′(x) > 0 on an interval, f is **strictly increasing**.
- LMVT gives inequalities, e.g. |sin x − sin y| ≤ |x − y|.

**Conditions matter**: both continuity on the closed interval and differentiability on the open interval are required.`, estimatedReadTime: 2, orderIndex: 0 }
];

export const jeeM2Questions: Question[] = [
  // ── Alternating Current & LCR Circuits ──
  { id: "jee-physics-alternating-current-q01", topicId: "jee-physics-alternating-current", text: "If the peak value of an AC current is i₀, its RMS value is:", optionA: "i₀/√2", optionB: "i₀", optionC: "i₀√2", optionD: "i₀/2", correctOption: "A", explanation: "For a sinusoid the RMS value is the peak divided by √2.", orderIndex: 0 },
  { id: "jee-physics-alternating-current-q02", topicId: "jee-physics-alternating-current", text: "The average value of AC current over a complete cycle is:", optionA: "Zero", optionB: "i₀/√2", optionC: "i₀", optionD: "2i₀/π", correctOption: "A", explanation: "Over a full sine cycle the positive and negative halves cancel to zero.", orderIndex: 1 },
  { id: "jee-physics-alternating-current-q03", topicId: "jee-physics-alternating-current", text: "The inductive reactance X_L equals:", optionA: "ωL", optionB: "1/ωL", optionC: "ωC", optionD: "1/ωC", correctOption: "A", explanation: "Inductive reactance X_L = ωL, rising with frequency.", orderIndex: 2 },
  { id: "jee-physics-alternating-current-q04", topicId: "jee-physics-alternating-current", text: "The capacitive reactance X_C equals:", optionA: "1/ωC", optionB: "ωC", optionC: "ωL", optionD: "1/ωL", correctOption: "A", explanation: "Capacitive reactance X_C = 1/ωC, falling with frequency.", orderIndex: 3 },
  { id: "jee-physics-alternating-current-q05", topicId: "jee-physics-alternating-current", text: "In a purely inductive circuit, the voltage:", optionA: "Leads the current by 90°", optionB: "Lags the current by 90°", optionC: "Is in phase with the current", optionD: "Leads by 45°", correctOption: "A", explanation: "Across an inductor the voltage leads the current by 90°.", orderIndex: 4 },
  { id: "jee-physics-alternating-current-q06", topicId: "jee-physics-alternating-current", text: "The impedance of a series LCR circuit is:", optionA: "√[R² + (X_L − X_C)²]", optionB: "R + X_L + X_C", optionC: "√[R² + X_L² + X_C²]", optionD: "R − X_L + X_C", correctOption: "A", explanation: "Impedance combines resistance and net reactance in quadrature.", orderIndex: 5 },
  { id: "jee-physics-alternating-current-q07", topicId: "jee-physics-alternating-current", text: "At resonance in a series LCR circuit:", optionA: "X_L = X_C and impedance is minimum", optionB: "X_L = X_C and impedance is maximum", optionC: "X_L = 0", optionD: "Current is zero", correctOption: "A", explanation: "At resonance the reactances cancel, Z = R (minimum), so current peaks.", orderIndex: 6 },
  { id: "jee-physics-alternating-current-q08", topicId: "jee-physics-alternating-current", text: "The resonant angular frequency of an LCR circuit is:", optionA: "1/√(LC)", optionB: "√(LC)", optionC: "1/(LC)", optionD: "LC", correctOption: "A", explanation: "Setting X_L = X_C gives ω₀ = 1/√(LC).", orderIndex: 7 },
  { id: "jee-physics-alternating-current-q09", topicId: "jee-physics-alternating-current", text: "The power factor of an AC circuit is:", optionA: "cos φ = R/Z", optionB: "sin φ", optionC: "Z/R", optionD: "tan φ", correctOption: "A", explanation: "Power factor is cos φ = R/Z, the ratio of resistance to impedance.", orderIndex: 8 },
  { id: "jee-physics-alternating-current-q10", topicId: "jee-physics-alternating-current", text: "The average power consumed by a pure capacitor in an AC circuit is:", optionA: "Zero", optionB: "V_rms·I_rms", optionC: "½V₀I₀", optionD: "I_rms²·X_C", correctOption: "A", explanation: "A pure reactance draws wattless current, so average power is zero.", orderIndex: 9 },
  { id: "jee-physics-alternating-current-q11", topicId: "jee-physics-alternating-current", text: "If V_rms = 220 V, the peak voltage V₀ is approximately:", optionA: "311 V", optionB: "220 V", optionC: "156 V", optionD: "440 V", correctOption: "A", explanation: "V₀ = V_rms × √2 = 220 × 1.414 ≈ 311 V.", orderIndex: 10 },
  { id: "jee-physics-alternating-current-q12", topicId: "jee-physics-alternating-current", text: "A device that changes AC voltage levels using mutual induction is a:", optionA: "Transformer", optionB: "Rectifier", optionC: "Capacitor", optionD: "Galvanometer", correctOption: "A", explanation: "A transformer steps voltage up or down via mutual induction.", orderIndex: 11 },

  // ── Capacitance & Capacitors ──
  { id: "jee-physics-capacitance-q01", topicId: "jee-physics-capacitance", text: "Capacitance is defined as:", optionA: "C = Q/V", optionB: "C = QV", optionC: "C = V/Q", optionD: "C = Q²V", correctOption: "A", explanation: "Capacitance is charge stored per unit potential difference, C = Q/V.", orderIndex: 0 },
  { id: "jee-physics-capacitance-q02", topicId: "jee-physics-capacitance", text: "The SI unit of capacitance is the:", optionA: "Farad", optionB: "Coulomb", optionC: "Volt", optionD: "Henry", correctOption: "A", explanation: "Capacitance is measured in farads (coulombs per volt).", orderIndex: 1 },
  { id: "jee-physics-capacitance-q03", topicId: "jee-physics-capacitance", text: "For a parallel-plate capacitor in vacuum, C equals:", optionA: "ε₀A/d", optionB: "ε₀d/A", optionC: "A/d", optionD: "ε₀Ad", correctOption: "A", explanation: "C = ε₀A/d — proportional to area, inverse to plate separation.", orderIndex: 2 },
  { id: "jee-physics-capacitance-q04", topicId: "jee-physics-capacitance", text: "Inserting a dielectric of constant K between the plates:", optionA: "Increases capacitance K times", optionB: "Decreases capacitance", optionC: "Has no effect", optionD: "Reverses polarity", correctOption: "A", explanation: "A dielectric multiplies capacitance by its dielectric constant K.", orderIndex: 3 },
  { id: "jee-physics-capacitance-q05", topicId: "jee-physics-capacitance", text: "For capacitors in parallel, the equivalent capacitance is:", optionA: "C₁ + C₂ + …", optionB: "1/C₁ + 1/C₂", optionC: "C₁C₂/(C₁+C₂)", optionD: "√(C₁C₂)", correctOption: "A", explanation: "Parallel capacitances simply add.", orderIndex: 4 },
  { id: "jee-physics-capacitance-q06", topicId: "jee-physics-capacitance", text: "Two capacitors of 6 μF and 3 μF in series give:", optionA: "2 μF", optionB: "9 μF", optionC: "18 μF", optionD: "4.5 μF", correctOption: "A", explanation: "1/C = 1/6 + 1/3 = 1/2, so C = 2 μF.", orderIndex: 5 },
  { id: "jee-physics-capacitance-q07", topicId: "jee-physics-capacitance", text: "The energy stored in a capacitor is:", optionA: "½CV²", optionB: "CV²", optionC: "½C²V", optionD: "QV²", correctOption: "A", explanation: "Stored energy U = ½CV² = ½QV = Q²/2C.", orderIndex: 6 },
  { id: "jee-physics-capacitance-q08", topicId: "jee-physics-capacitance", text: "The time constant of an RC charging circuit is:", optionA: "RC", optionB: "R/C", optionC: "C/R", optionD: "1/RC", correctOption: "A", explanation: "The time constant τ equals the product RC.", orderIndex: 7 },
  { id: "jee-physics-capacitance-q08b", topicId: "jee-physics-capacitance", text: "After one time constant, a charging capacitor reaches about what fraction of full charge?", optionA: "63%", optionB: "37%", optionC: "50%", optionD: "100%", correctOption: "A", explanation: "Q = Q₀(1 − e⁻¹) ≈ 0.63 Q₀ after one time constant.", orderIndex: 8 },
  { id: "jee-physics-capacitance-q10", topicId: "jee-physics-capacitance", text: "If the charge on a capacitor doubles at fixed capacitance, its stored energy:", optionA: "Quadruples", optionB: "Doubles", optionC: "Halves", optionD: "Is unchanged", correctOption: "A", explanation: "U = Q²/2C, so doubling Q multiplies energy by four.", orderIndex: 9 },
  { id: "jee-physics-capacitance-q11", topicId: "jee-physics-capacitance", text: "The energy density of an electric field is:", optionA: "½ε₀E²", optionB: "ε₀E", optionC: "½ε₀E", optionD: "ε₀E²", correctOption: "A", explanation: "Energy per unit volume in a field is u = ½ε₀E².", orderIndex: 10 },
  { id: "jee-physics-capacitance-q12", topicId: "jee-physics-capacitance", text: "Three 3 μF capacitors connected in parallel give a total capacitance of:", optionA: "9 μF", optionB: "1 μF", optionC: "3 μF", optionD: "6 μF", correctOption: "A", explanation: "Parallel capacitances add: 3 + 3 + 3 = 9 μF.", orderIndex: 11 },

  // ── Experimental Physics & Error Analysis ──
  { id: "jee-physics-experimental-physics-q01", topicId: "jee-physics-experimental-physics", text: "The least count of a standard vernier calliper is usually:", optionA: "0.1 mm", optionB: "1 mm", optionC: "0.01 mm", optionD: "1 cm", correctOption: "A", explanation: "A typical vernier calliper resolves to 0.1 mm.", orderIndex: 0 },
  { id: "jee-physics-experimental-physics-q02", topicId: "jee-physics-experimental-physics", text: "The least count of a screw gauge is given by:", optionA: "Pitch / number of circular-scale divisions", optionB: "Pitch × divisions", optionC: "Divisions / pitch", optionD: "1 main-scale division", correctOption: "A", explanation: "Screw-gauge least count = pitch ÷ number of head-scale divisions.", orderIndex: 1 },
  { id: "jee-physics-experimental-physics-q03", topicId: "jee-physics-experimental-physics", text: "When two quantities are multiplied, the errors that add are the:", optionA: "Relative (fractional) errors", optionB: "Absolute errors", optionC: "Squared errors", optionD: "Zero errors", correctOption: "A", explanation: "For products and quotients, fractional errors add.", orderIndex: 2 },
  { id: "jee-physics-experimental-physics-q04", topicId: "jee-physics-experimental-physics", text: "For a sum or difference of quantities, the errors that add are the:", optionA: "Absolute errors", optionB: "Relative errors", optionC: "Percentage errors", optionD: "Fractional errors", correctOption: "A", explanation: "For sums and differences the absolute errors add.", orderIndex: 3 },
  { id: "jee-physics-experimental-physics-q05", topicId: "jee-physics-experimental-physics", text: "If Z = A³, the relative error in Z is how many times that in A?", optionA: "3", optionB: "1", optionC: "1/3", optionD: "9", correctOption: "A", explanation: "For a power Aⁿ the relative error scales by n, here 3.", orderIndex: 4 },
  { id: "jee-physics-experimental-physics-q06", topicId: "jee-physics-experimental-physics", text: "A reading has an absolute error of 0.2 in a value of 40. The percentage error is:", optionA: "0.5%", optionB: "5%", optionC: "0.2%", optionD: "2%", correctOption: "A", explanation: "(0.2/40) × 100 = 0.5%.", orderIndex: 5 },
  { id: "jee-physics-experimental-physics-q07", topicId: "jee-physics-experimental-physics", text: "Zero error of an instrument must be:", optionA: "Corrected for in every reading", optionB: "Ignored", optionC: "Doubled", optionD: "Added only once at the end", correctOption: "A", explanation: "Zero error is a systematic offset corrected in each measurement.", orderIndex: 6 },
  { id: "jee-physics-experimental-physics-q08", topicId: "jee-physics-experimental-physics", text: "The number 0.00340 has how many significant figures?", optionA: "3", optionB: "5", optionC: "2", optionD: "6", correctOption: "A", explanation: "Leading zeros don't count; 3, 4 and the trailing 0 give 3 sig figs.", orderIndex: 7 },
  { id: "jee-physics-experimental-physics-q09", topicId: "jee-physics-experimental-physics", text: "Systematic errors are best described as errors that:", optionA: "Have a consistent bias in one direction", optionB: "Are random in sign", optionC: "Cancel on averaging", optionD: "Cannot be reduced", correctOption: "A", explanation: "Systematic errors bias readings consistently, unlike random errors.", orderIndex: 8 },
  { id: "jee-physics-experimental-physics-q10", topicId: "jee-physics-experimental-physics", text: "Random errors can be reduced by:", optionA: "Taking many readings and averaging", optionB: "Using a biased instrument", optionC: "Ignoring outliers only", optionD: "Reading once carefully", correctOption: "A", explanation: "Averaging repeated readings reduces random error.", orderIndex: 9 },
  { id: "jee-physics-experimental-physics-q11", topicId: "jee-physics-experimental-physics", text: "The result of a calculation should be reported to:", optionA: "The least number of significant figures among the data", optionB: "The most decimal places available", optionC: "Ten significant figures", optionD: "Two decimal places always", correctOption: "A", explanation: "Precision is limited by the least precise measurement used.", orderIndex: 10 },
  { id: "jee-physics-experimental-physics-q12", topicId: "jee-physics-experimental-physics", text: "In Z = A·B/C, if each of A, B, C has 1% error, the maximum error in Z is:", optionA: "3%", optionB: "1%", optionC: "0.33%", optionD: "9%", correctOption: "A", explanation: "Fractional errors add for products/quotients: 1% + 1% + 1% = 3%.", orderIndex: 11 },

  // ── Chemistry in Everyday Life ──
  { id: "jee-chemistry-everyday-life-q01", topicId: "jee-chemistry-everyday-life", text: "A substance that relieves pain is called an:", optionA: "Analgesic", optionB: "Antibiotic", optionC: "Antiseptic", optionD: "Antacid", correctOption: "A", explanation: "Analgesics such as aspirin relieve pain.", orderIndex: 0 },
  { id: "jee-chemistry-everyday-life-q02", topicId: "jee-chemistry-everyday-life", text: "Ranitidine and Mg(OH)₂ are examples of:", optionA: "Antacids", optionB: "Analgesics", optionC: "Antihistamines", optionD: "Antiseptics", correctOption: "A", explanation: "These neutralise excess stomach acid, so they are antacids.", orderIndex: 1 },
  { id: "jee-chemistry-everyday-life-q03", topicId: "jee-chemistry-everyday-life", text: "Chemicals that kill microorganisms on living tissue are:", optionA: "Antiseptics", optionB: "Disinfectants", optionC: "Antacids", optionD: "Analgesics", correctOption: "A", explanation: "Antiseptics are applied to living tissue; disinfectants to surfaces.", orderIndex: 2 },
  { id: "jee-chemistry-everyday-life-q04", topicId: "jee-chemistry-everyday-life", text: "Aspartame and saccharin are:", optionA: "Artificial sweeteners", optionB: "Antioxidants", optionC: "Preservatives", optionD: "Antibiotics", correctOption: "A", explanation: "They are non-nutritive artificial sweeteners.", orderIndex: 3 },
  { id: "jee-chemistry-everyday-life-q05", topicId: "jee-chemistry-everyday-life", text: "Soaps are sodium or potassium salts of:", optionA: "Long-chain fatty acids", optionB: "Sulphonic acids", optionC: "Amino acids", optionD: "Nucleic acids", correctOption: "A", explanation: "Soaps are alkali salts of long-chain fatty acids.", orderIndex: 4 },
  { id: "jee-chemistry-everyday-life-q06", topicId: "jee-chemistry-everyday-life", text: "Unlike soaps, synthetic detergents work well in:", optionA: "Hard water", optionB: "Only distilled water", optionC: "Alcohol only", optionD: "Acidic soil", correctOption: "A", explanation: "Detergents don't form insoluble salts with Ca²⁺/Mg²⁺, so they lather in hard water.", orderIndex: 5 },
  { id: "jee-chemistry-everyday-life-q07", topicId: "jee-chemistry-everyday-life", text: "Cetirizine is an example of an:", optionA: "Antihistamine", optionB: "Antacid", optionC: "Analgesic", optionD: "Antibiotic", correctOption: "A", explanation: "Antihistamines like cetirizine treat allergies.", orderIndex: 6 },
  { id: "jee-chemistry-everyday-life-q08", topicId: "jee-chemistry-everyday-life", text: "A drug that reduces fever is an:", optionA: "Antipyretic", optionB: "Antiseptic", optionC: "Antacid", optionD: "Antifungal", correctOption: "A", explanation: "Antipyretics such as paracetamol reduce fever.", orderIndex: 7 },
  { id: "jee-chemistry-everyday-life-q09", topicId: "jee-chemistry-everyday-life", text: "Substances added to food to prevent oxidation are:", optionA: "Antioxidants", optionB: "Sweeteners", optionC: "Emulsifiers", optionD: "Antibiotics", correctOption: "A", explanation: "Antioxidants like BHA and BHT prevent oxidation of food.", orderIndex: 8 },
  { id: "jee-chemistry-everyday-life-q10", topicId: "jee-chemistry-everyday-life", text: "Chloramphenicol, effective against many bacteria, is a:", optionA: "Broad-spectrum antibiotic", optionB: "Narrow-spectrum antibiotic", optionC: "Antiseptic", optionD: "Tranquiliser", correctOption: "A", explanation: "It acts on a wide range of bacteria, so it is broad-spectrum.", orderIndex: 9 },
  { id: "jee-chemistry-everyday-life-q11", topicId: "jee-chemistry-everyday-life", text: "Equanil is used as a:", optionA: "Tranquiliser", optionB: "Antacid", optionC: "Analgesic", optionD: "Sweetener", correctOption: "A", explanation: "Equanil is a tranquiliser used to relieve stress and anxiety.", orderIndex: 10 },
  { id: "jee-chemistry-everyday-life-q12", topicId: "jee-chemistry-everyday-life", text: "Phenol at high concentration acts as a:", optionA: "Disinfectant", optionB: "Sweetener", optionC: "Antacid", optionD: "Vitamin", correctOption: "A", explanation: "Concentrated phenol disinfects surfaces (dilute solutions are antiseptic).", orderIndex: 11 },

  // ── Qualitative Salt Analysis ──
  { id: "jee-chemistry-qualitative-analysis-q01", topicId: "jee-chemistry-qualitative-analysis", text: "Brisk effervescence with dilute acid, giving a gas that turns lime water milky, indicates:", optionA: "Carbonate", optionB: "Sulphate", optionC: "Chloride", optionD: "Nitrate", correctOption: "A", explanation: "Carbonates release CO₂, which turns lime water milky.", orderIndex: 0 },
  { id: "jee-chemistry-qualitative-analysis-q02", topicId: "jee-chemistry-qualitative-analysis", text: "A white precipitate with AgNO₃ that dissolves in ammonia indicates:", optionA: "Chloride", optionB: "Sulphate", optionC: "Nitrate", optionD: "Carbonate", correctOption: "A", explanation: "AgCl is white and dissolves in ammonia, confirming chloride.", orderIndex: 1 },
  { id: "jee-chemistry-qualitative-analysis-q03", topicId: "jee-chemistry-qualitative-analysis", text: "The brown ring test confirms the presence of:", optionA: "Nitrate", optionB: "Sulphide", optionC: "Chloride", optionD: "Carbonate", correctOption: "A", explanation: "The brown ring with FeSO₄ and conc. H₂SO₄ confirms nitrate.", orderIndex: 2 },
  { id: "jee-chemistry-qualitative-analysis-q04", topicId: "jee-chemistry-qualitative-analysis", text: "A white precipitate with BaCl₂ that is insoluble in acid indicates:", optionA: "Sulphate", optionB: "Chloride", optionC: "Nitrate", optionD: "Sulphide", correctOption: "A", explanation: "BaSO₄ is a white, acid-insoluble precipitate confirming sulphate.", orderIndex: 3 },
  { id: "jee-chemistry-qualitative-analysis-q05", topicId: "jee-chemistry-qualitative-analysis", text: "The smell of rotten eggs on adding dilute acid indicates:", optionA: "Sulphide", optionB: "Nitrate", optionC: "Carbonate", optionD: "Chloride", correctOption: "A", explanation: "Sulphides evolve H₂S, which smells of rotten eggs.", orderIndex: 4 },
  { id: "jee-chemistry-qualitative-analysis-q06", topicId: "jee-chemistry-qualitative-analysis", text: "A golden-yellow flame test colour indicates:", optionA: "Sodium (Na⁺)", optionB: "Potassium (K⁺)", optionC: "Calcium (Ca²⁺)", optionD: "Copper (Cu²⁺)", correctOption: "A", explanation: "Sodium imparts a characteristic golden-yellow flame.", orderIndex: 5 },
  { id: "jee-chemistry-qualitative-analysis-q07", topicId: "jee-chemistry-qualitative-analysis", text: "A brick-red flame colour is characteristic of:", optionA: "Calcium", optionB: "Sodium", optionC: "Potassium", optionD: "Barium", correctOption: "A", explanation: "Calcium salts give a brick-red flame.", orderIndex: 6 },
  { id: "jee-chemistry-qualitative-analysis-q08", topicId: "jee-chemistry-qualitative-analysis", text: "Group I cations in the systematic scheme are precipitated by:", optionA: "Dilute HCl", optionB: "H₂S", optionC: "NH₄OH", optionD: "(NH₄)₂CO₃", correctOption: "A", explanation: "Group I (e.g. Pb²⁺) is precipitated as chloride by dilute HCl.", orderIndex: 7 },
  { id: "jee-chemistry-qualitative-analysis-q09", topicId: "jee-chemistry-qualitative-analysis", text: "The group reagent for Group III cations (Al³⁺, Fe³⁺) is:", optionA: "NH₄Cl and NH₄OH", optionB: "Dilute HCl", optionC: "BaCl₂", optionD: "AgNO₃", correctOption: "A", explanation: "Group III hydroxides precipitate with NH₄OH in presence of NH₄Cl.", orderIndex: 8 },
  { id: "jee-chemistry-qualitative-analysis-q10", topicId: "jee-chemistry-qualitative-analysis", text: "A lilac (violet) flame test colour indicates:", optionA: "Potassium", optionB: "Sodium", optionC: "Calcium", optionD: "Copper", correctOption: "A", explanation: "Potassium salts give a lilac/violet flame.", orderIndex: 9 },
  { id: "jee-chemistry-qualitative-analysis-q11", topicId: "jee-chemistry-qualitative-analysis", text: "A green-blue flame test colour indicates:", optionA: "Copper", optionB: "Sodium", optionC: "Potassium", optionD: "Calcium", correctOption: "A", explanation: "Copper salts impart a green-blue colour to the flame.", orderIndex: 10 },
  { id: "jee-chemistry-qualitative-analysis-q12", topicId: "jee-chemistry-qualitative-analysis", text: "In salt analysis, the anion is also called the:", optionA: "Acidic radical", optionB: "Basic radical", optionC: "Cation", optionD: "Ligand", correctOption: "A", explanation: "The anion is the acidic radical; the cation is the basic radical.", orderIndex: 11 },

  // ── Purification & Characterisation of Organic Compounds ──
  { id: "jee-chemistry-purification-organic-q01", topicId: "jee-chemistry-purification-organic", text: "Which method separates two miscible liquids with very close boiling points?", optionA: "Fractional distillation", optionB: "Simple distillation", optionC: "Filtration", optionD: "Sublimation", correctOption: "A", explanation: "Fractional distillation separates liquids with close boiling points.", orderIndex: 0 },
  { id: "jee-chemistry-purification-organic-q02", topicId: "jee-chemistry-purification-organic", text: "A solid that sublimes, such as camphor, is purified by:", optionA: "Sublimation", optionB: "Distillation", optionC: "Crystallisation", optionD: "Filtration", correctOption: "A", explanation: "Sublimation purifies solids that vaporise directly, like camphor.", orderIndex: 1 },
  { id: "jee-chemistry-purification-organic-q03", topicId: "jee-chemistry-purification-organic", text: "Steam distillation is suitable for compounds that are:", optionA: "Steam-volatile and immiscible with water", optionB: "Soluble in water", optionC: "Non-volatile solids", optionD: "Ionic salts", correctOption: "A", explanation: "Steam distillation suits steam-volatile, water-immiscible liquids like aniline.", orderIndex: 2 },
  { id: "jee-chemistry-purification-organic-q04", topicId: "jee-chemistry-purification-organic", text: "Purification based on differential adsorption is called:", optionA: "Chromatography", optionB: "Crystallisation", optionC: "Distillation", optionD: "Sublimation", correctOption: "A", explanation: "Chromatography separates components by differential adsorption.", orderIndex: 3 },
  { id: "jee-chemistry-purification-organic-q05", topicId: "jee-chemistry-purification-organic", text: "In Lassaigne's test, nitrogen is detected as:", optionA: "Prussian blue", optionB: "A white precipitate", optionC: "A brown ring", optionD: "A violet flame", correctOption: "A", explanation: "Nitrogen forms Prussian blue with ferrous sulphate.", orderIndex: 4 },
  { id: "jee-chemistry-purification-organic-q06", topicId: "jee-chemistry-purification-organic", text: "Lassaigne's sodium fusion converts covalent elements into:", optionA: "Ionic (water-soluble) forms", optionB: "Free elements", optionC: "Oxides", optionD: "Metals", correctOption: "A", explanation: "Fusion with sodium turns N, S and halogens into detectable ionic species.", orderIndex: 5 },
  { id: "jee-chemistry-purification-organic-q07", topicId: "jee-chemistry-purification-organic", text: "Nitrogen in an amine can be estimated by:", optionA: "Kjeldahl's method", optionB: "Liebig's method", optionC: "Victor Meyer's method", optionD: "Beckmann method", correctOption: "A", explanation: "Kjeldahl's method estimates nitrogen in amines and amides.", orderIndex: 6 },
  { id: "jee-chemistry-purification-organic-q08", topicId: "jee-chemistry-purification-organic", text: "Carbon and hydrogen are estimated by burning the compound and weighing:", optionA: "CO₂ and H₂O", optionB: "CO and H₂", optionC: "O₂ and N₂", optionD: "CH₄ only", correctOption: "A", explanation: "Liebig's combustion weighs the CO₂ and H₂O produced.", orderIndex: 7 },
  { id: "jee-chemistry-purification-organic-q09", topicId: "jee-chemistry-purification-organic", text: "Crystallisation separates a solid based on differences in:", optionA: "Solubility with temperature", optionB: "Boiling point", optionC: "Density only", optionD: "Colour", correctOption: "A", explanation: "Crystallisation exploits the change of solubility with temperature.", orderIndex: 8 },
  { id: "jee-chemistry-purification-organic-q10", topicId: "jee-chemistry-purification-organic", text: "Sulphur in an organic compound gives a violet colour with:", optionA: "Sodium nitroprusside", optionB: "AgNO₃", optionC: "Lime water", optionD: "FeSO₄", correctOption: "A", explanation: "Sulphide ion gives a violet colour with sodium nitroprusside.", orderIndex: 9 },
  { id: "jee-chemistry-purification-organic-q11", topicId: "jee-chemistry-purification-organic", text: "Halogens in an organic compound are confirmed by a precipitate with:", optionA: "AgNO₃", optionB: "BaCl₂", optionC: "Lime water", optionD: "NaOH", correctOption: "A", explanation: "Silver halide precipitates form with AgNO₃, confirming halogens.", orderIndex: 10 },
  { id: "jee-chemistry-purification-organic-q12", topicId: "jee-chemistry-purification-organic", text: "Which technique is used to purify petroleum into its fractions?", optionA: "Fractional distillation", optionB: "Sublimation", optionC: "Crystallisation", optionD: "Filtration", correctOption: "A", explanation: "Petroleum is separated into fractions by fractional distillation.", orderIndex: 11 },

  // ── Named Organic Reactions ──
  { id: "jee-chemistry-name-reactions-q01", topicId: "jee-chemistry-name-reactions", text: "The Cannizzaro reaction occurs with aldehydes that:", optionA: "Lack an alpha-hydrogen", optionB: "Have an alpha-hydrogen", optionC: "Are aromatic only", optionD: "Contain nitrogen", correctOption: "A", explanation: "Cannizzaro disproportionation needs aldehydes without α-hydrogen.", orderIndex: 0 },
  { id: "jee-chemistry-name-reactions-q02", topicId: "jee-chemistry-name-reactions", text: "Aldol condensation requires the carbonyl compound to have:", optionA: "An alpha-hydrogen", optionB: "No alpha-hydrogen", optionC: "A benzene ring", optionD: "A halogen", correctOption: "A", explanation: "The aldol reaction needs α-hydrogens to form the enolate.", orderIndex: 1 },
  { id: "jee-chemistry-name-reactions-q03", topicId: "jee-chemistry-name-reactions", text: "Friedel–Crafts alkylation of benzene is catalysed by:", optionA: "Anhydrous AlCl₃", optionB: "NaOH", optionC: "H₂O", optionD: "KMnO₄", correctOption: "A", explanation: "Anhydrous AlCl₃ is the Lewis-acid catalyst for Friedel–Crafts reactions.", orderIndex: 2 },
  { id: "jee-chemistry-name-reactions-q04", topicId: "jee-chemistry-name-reactions", text: "The Hofmann bromamide reaction converts an amide to an amine with:", optionA: "One fewer carbon atom", optionB: "One more carbon atom", optionC: "The same carbons", optionD: "Two fewer carbons", correctOption: "A", explanation: "Hofmann degradation yields a primary amine with one less carbon.", orderIndex: 3 },
  { id: "jee-chemistry-name-reactions-q05", topicId: "jee-chemistry-name-reactions", text: "The Wurtz reaction is used to prepare:", optionA: "Alkanes", optionB: "Alkenes", optionC: "Alcohols", optionD: "Amines", correctOption: "A", explanation: "Wurtz couples two alkyl halides with sodium to give a symmetrical alkane.", orderIndex: 4 },
  { id: "jee-chemistry-name-reactions-q06", topicId: "jee-chemistry-name-reactions", text: "The Sandmeyer reaction converts a diazonium salt into an:", optionA: "Aryl halide", optionB: "Aryl amine", optionC: "Alcohol", optionD: "Alkane", correctOption: "A", explanation: "Sandmeyer replaces the diazonium group with a halide using CuX.", orderIndex: 5 },
  { id: "jee-chemistry-name-reactions-q07", topicId: "jee-chemistry-name-reactions", text: "The Gabriel phthalimide synthesis gives exclusively:", optionA: "Primary amines", optionB: "Secondary amines", optionC: "Tertiary amines", optionD: "Quaternary salts", correctOption: "A", explanation: "Gabriel synthesis produces pure primary amines.", orderIndex: 6 },
  { id: "jee-chemistry-name-reactions-q08", topicId: "jee-chemistry-name-reactions", text: "The Reimer–Tiemann reaction converts phenol into:", optionA: "Salicylaldehyde", optionB: "Benzaldehyde", optionC: "Aniline", optionD: "Toluene", correctOption: "A", explanation: "Phenol with CHCl₃/NaOH gives salicylaldehyde.", orderIndex: 7 },
  { id: "jee-chemistry-name-reactions-q09", topicId: "jee-chemistry-name-reactions", text: "The Clemmensen reduction reduces a carbonyl group to a:", optionA: "Methylene (CH₂)", optionB: "Hydroxyl", optionC: "Carboxyl", optionD: "Nitrile", correctOption: "A", explanation: "Clemmensen (Zn-Hg/HCl) reduces C=O to CH₂.", orderIndex: 8 },
  { id: "jee-chemistry-name-reactions-q10", topicId: "jee-chemistry-name-reactions", text: "The Wolff–Kishner reduction uses which reagent to convert C=O to CH₂?", optionA: "Hydrazine and base", optionB: "Zn-Hg and HCl", optionC: "LiAlH₄", optionD: "NaBH₄", correctOption: "A", explanation: "Wolff–Kishner uses NH₂NH₂ with a strong base to give CH₂.", orderIndex: 9 },
  { id: "jee-chemistry-name-reactions-q11", topicId: "jee-chemistry-name-reactions", text: "The haloform reaction is a test for the presence of a:", optionA: "Methyl ketone (CH₃CO–) group", optionB: "Carboxylic acid", optionC: "Nitro group", optionD: "Primary amine", correctOption: "A", explanation: "Methyl ketones give a haloform (e.g. CHI₃) with X₂/NaOH.", orderIndex: 10 },
  { id: "jee-chemistry-name-reactions-q12", topicId: "jee-chemistry-name-reactions", text: "The Kolbe reaction converts sodium phenoxide (with CO₂) into:", optionA: "Salicylic acid", optionB: "Benzoic acid", optionC: "Picric acid", optionD: "Oxalic acid", correctOption: "A", explanation: "Kolbe's reaction gives salicylic acid from phenol and CO₂ under pressure.", orderIndex: 11 },

  // ── Properties & Solutions of Triangles ──
  { id: "jee-mathematics-properties-of-triangles-q01", topicId: "jee-mathematics-properties-of-triangles", text: "The sine rule states that a/sin A equals:", optionA: "2R", optionB: "R", optionC: "R/2", optionD: "4R", correctOption: "A", explanation: "By the sine rule a/sin A = b/sin B = c/sin C = 2R.", orderIndex: 0 },
  { id: "jee-mathematics-properties-of-triangles-q02", topicId: "jee-mathematics-properties-of-triangles", text: "The cosine rule for side a is a² =", optionA: "b² + c² − 2bc·cos A", optionB: "b² + c² + 2bc·cos A", optionC: "b² − c² + 2bc", optionD: "b² + c²", correctOption: "A", explanation: "The cosine rule gives a² = b² + c² − 2bc·cos A.", orderIndex: 1 },
  { id: "jee-mathematics-properties-of-triangles-q03", topicId: "jee-mathematics-properties-of-triangles", text: "In Heron's formula the semi-perimeter s is:", optionA: "(a + b + c)/2", optionB: "a + b + c", optionC: "(a + b + c)/3", optionD: "abc/2", correctOption: "A", explanation: "The semi-perimeter is half the sum of the sides.", orderIndex: 2 },
  { id: "jee-mathematics-properties-of-triangles-q04", topicId: "jee-mathematics-properties-of-triangles", text: "The area of a triangle in terms of two sides and included angle C is:", optionA: "½ab·sin C", optionB: "ab·cos C", optionC: "½ab·cos C", optionD: "ab·sin C", correctOption: "A", explanation: "Area = ½ × ab × sin(included angle).", orderIndex: 3 },
  { id: "jee-mathematics-properties-of-triangles-q05", topicId: "jee-mathematics-properties-of-triangles", text: "The circumradius R equals:", optionA: "abc / (4·Area)", optionB: "Area / s", optionC: "abc / Area", optionD: "4·Area / abc", correctOption: "A", explanation: "The circumradius is R = abc divided by four times the area.", orderIndex: 4 },
  { id: "jee-mathematics-properties-of-triangles-q06", topicId: "jee-mathematics-properties-of-triangles", text: "The inradius r of a triangle equals:", optionA: "Area / s", optionB: "s / Area", optionC: "abc / 4", optionD: "Area × s", correctOption: "A", explanation: "The inradius is the area divided by the semi-perimeter.", orderIndex: 5 },
  { id: "jee-mathematics-properties-of-triangles-q07", topicId: "jee-mathematics-properties-of-triangles", text: "In a triangle with a = 3, b = 4, C = 90°, the area is:", optionA: "6", optionB: "12", optionC: "5", optionD: "7", correctOption: "A", explanation: "Area = ½·ab·sin 90° = ½·3·4·1 = 6.", orderIndex: 6 },
  { id: "jee-mathematics-properties-of-triangles-q08", topicId: "jee-mathematics-properties-of-triangles", text: "If sides are 3, 4, 5, the semi-perimeter s is:", optionA: "6", optionB: "12", optionC: "5", optionD: "10", correctOption: "A", explanation: "s = (3 + 4 + 5)/2 = 6.", orderIndex: 7 },
  { id: "jee-mathematics-properties-of-triangles-q09", topicId: "jee-mathematics-properties-of-triangles", text: "Using Heron's formula for sides 3, 4, 5, the area is:", optionA: "6", optionB: "12", optionC: "10", optionD: "7.5", correctOption: "A", explanation: "√[6·3·2·1] = √36 = 6.", orderIndex: 8 },
  { id: "jee-mathematics-properties-of-triangles-q10", topicId: "jee-mathematics-properties-of-triangles", text: "The projection rule expresses a as:", optionA: "b·cos C + c·cos B", optionB: "b·sin C + c·sin B", optionC: "b·cos C − c·cos B", optionD: "b + c", correctOption: "A", explanation: "The projection formula gives a = b·cos C + c·cos B.", orderIndex: 9 },
  { id: "jee-mathematics-properties-of-triangles-q11", topicId: "jee-mathematics-properties-of-triangles", text: "The sum of the interior angles A + B + C of a triangle is:", optionA: "π radians", optionB: "π/2 radians", optionC: "2π radians", optionD: "3π/2 radians", correctOption: "A", explanation: "The interior angles of a triangle sum to 180° = π radians.", orderIndex: 10 },
  { id: "jee-mathematics-properties-of-triangles-q12", topicId: "jee-mathematics-properties-of-triangles", text: "For a right triangle with legs 3, 4 the circumradius R is:", optionA: "2.5", optionB: "5", optionC: "1.5", optionD: "6", correctOption: "A", explanation: "For a right triangle R is half the hypotenuse: 5/2 = 2.5.", orderIndex: 11 },

  // ── Mathematical Induction ──
  { id: "jee-mathematics-mathematical-induction-q01", topicId: "jee-mathematics-mathematical-induction", text: "The first step of a proof by induction is to verify the:", optionA: "Base case", optionB: "Inductive step", optionC: "Conclusion", optionD: "Contrapositive", correctOption: "A", explanation: "You first establish the base case, usually P(1).", orderIndex: 0 },
  { id: "jee-mathematics-mathematical-induction-q02", topicId: "jee-mathematics-mathematical-induction", text: "In the inductive step, you assume P(k) and prove:", optionA: "P(k+1)", optionB: "P(1)", optionC: "P(k−1)", optionD: "P(0) only", correctOption: "A", explanation: "The inductive step derives P(k+1) from the hypothesis P(k).", orderIndex: 1 },
  { id: "jee-mathematics-mathematical-induction-q03", topicId: "jee-mathematics-mathematical-induction", text: "The sum 1 + 2 + … + n equals:", optionA: "n(n+1)/2", optionB: "n²", optionC: "n(n+1)", optionD: "n(n−1)/2", correctOption: "A", explanation: "This standard result is proved by induction: n(n+1)/2.", orderIndex: 2 },
  { id: "jee-mathematics-mathematical-induction-q04", topicId: "jee-mathematics-mathematical-induction", text: "The sum 1² + 2² + … + n² equals:", optionA: "n(n+1)(2n+1)/6", optionB: "[n(n+1)/2]²", optionC: "n(n+1)/2", optionD: "n³", correctOption: "A", explanation: "The sum of the first n squares is n(n+1)(2n+1)/6.", orderIndex: 3 },
  { id: "jee-mathematics-mathematical-induction-q05", topicId: "jee-mathematics-mathematical-induction", text: "The sum 1³ + 2³ + … + n³ equals:", optionA: "[n(n+1)/2]²", optionB: "n(n+1)(2n+1)/6", optionC: "n²(n+1)", optionD: "n(n+1)/2", correctOption: "A", explanation: "The sum of the first n cubes is the square of the sum 1+…+n.", orderIndex: 4 },
  { id: "jee-mathematics-mathematical-induction-q06", topicId: "jee-mathematics-mathematical-induction", text: "Why is the base case essential in induction?", optionA: "Without it, false statements could be 'proved'", optionB: "It is optional", optionC: "It replaces the inductive step", optionD: "It proves the converse", correctOption: "A", explanation: "The inductive step alone, with no valid base, can propagate falsehoods.", orderIndex: 5 },
  { id: "jee-mathematics-mathematical-induction-q07", topicId: "jee-mathematics-mathematical-induction", text: "For all natural n, n³ + 2n is divisible by:", optionA: "3", optionB: "5", optionC: "7", optionD: "4", correctOption: "A", explanation: "n³ + 2n is divisible by 3 for every natural number, provable by induction.", orderIndex: 6 },
  { id: "jee-mathematics-mathematical-induction-q08", topicId: "jee-mathematics-mathematical-induction", text: "Strong induction differs from ordinary induction because it assumes P holds for:", optionA: "All values up to k", optionB: "Only k", optionC: "Only the base", optionD: "No prior values", correctOption: "A", explanation: "Strong induction uses the hypothesis for all values up to k.", orderIndex: 7 },
  { id: "jee-mathematics-mathematical-induction-q09", topicId: "jee-mathematics-mathematical-induction", text: "The value of the sum 1 + 2 + 3 + 4 + 5 is:", optionA: "15", optionB: "10", optionC: "20", optionD: "25", correctOption: "A", explanation: "Using n(n+1)/2 with n=5: 5·6/2 = 15.", orderIndex: 8 },
  { id: "jee-mathematics-mathematical-induction-q10", topicId: "jee-mathematics-mathematical-induction", text: "The assumption made in the inductive step is called the:", optionA: "Inductive hypothesis", optionB: "Base case", optionC: "Axiom", optionD: "Corollary", correctOption: "A", explanation: "Assuming P(k) is the inductive hypothesis.", orderIndex: 9 },
  { id: "jee-mathematics-mathematical-induction-q11", topicId: "jee-mathematics-mathematical-induction", text: "Induction is most appropriate for statements indexed by:", optionA: "Natural numbers", optionB: "Real numbers", optionC: "Irrational numbers", optionD: "Complex numbers", correctOption: "A", explanation: "PMI proves statements over the natural numbers.", orderIndex: 10 },
  { id: "jee-mathematics-mathematical-induction-q12", topicId: "jee-mathematics-mathematical-induction", text: "The value of 1² + 2² + 3² is:", optionA: "14", optionB: "9", optionC: "36", optionD: "12", correctOption: "A", explanation: "Using n(n+1)(2n+1)/6 with n=3: 3·4·7/6 = 14.", orderIndex: 11 },

  // ── Rolle's & Mean Value Theorems ──
  { id: "jee-mathematics-mean-value-theorems-q01", topicId: "jee-mathematics-mean-value-theorems", text: "Rolle's theorem additionally requires that:", optionA: "f(a) = f(b)", optionB: "f(a) > f(b)", optionC: "f is linear", optionD: "f(a) = 0", correctOption: "A", explanation: "Rolle's theorem needs equal endpoint values f(a) = f(b).", orderIndex: 0 },
  { id: "jee-mathematics-mean-value-theorems-q02", topicId: "jee-mathematics-mean-value-theorems", text: "Rolle's theorem guarantees a point c in (a,b) where:", optionA: "f′(c) = 0", optionB: "f(c) = 0", optionC: "f″(c) = 0", optionD: "f(c) = c", correctOption: "A", explanation: "It guarantees a stationary point f′(c) = 0.", orderIndex: 1 },
  { id: "jee-mathematics-mean-value-theorems-q03", topicId: "jee-mathematics-mean-value-theorems", text: "Lagrange's MVT gives a c in (a,b) with f′(c) equal to:", optionA: "[f(b) − f(a)]/(b − a)", optionB: "f(b) − f(a)", optionC: "(b − a)/[f(b) − f(a)]", optionD: "0", correctOption: "A", explanation: "LMVT: f′(c) equals the average rate of change over [a,b].", orderIndex: 2 },
  { id: "jee-mathematics-mean-value-theorems-q04", topicId: "jee-mathematics-mean-value-theorems", text: "Geometrically, LMVT says the tangent at c is parallel to the:", optionA: "Chord joining the endpoints", optionB: "X-axis always", optionC: "Y-axis", optionD: "Normal at a", correctOption: "A", explanation: "The tangent at c is parallel to the chord through (a,f(a)) and (b,f(b)).", orderIndex: 3 },
  { id: "jee-mathematics-mean-value-theorems-q05", topicId: "jee-mathematics-mean-value-theorems", text: "Rolle's theorem is a special case of LMVT when:", optionA: "f(a) = f(b)", optionB: "f′(a) = 0", optionC: "a = b", optionD: "f is constant everywhere", correctOption: "A", explanation: "With f(a)=f(b) the chord slope is 0, giving Rolle's f′(c)=0.", orderIndex: 4 },
  { id: "jee-mathematics-mean-value-theorems-q06", topicId: "jee-mathematics-mean-value-theorems", text: "Both theorems require f to be continuous on:", optionA: "The closed interval [a,b]", optionB: "The open interval only", optionC: "All of R", optionD: "A single point", correctOption: "A", explanation: "Continuity on the closed interval [a,b] is required.", orderIndex: 5 },
  { id: "jee-mathematics-mean-value-theorems-q07", topicId: "jee-mathematics-mean-value-theorems", text: "If f′(x) = 0 for all x in an interval, then f is:", optionA: "Constant on that interval", optionB: "Increasing", optionC: "Decreasing", optionD: "Discontinuous", correctOption: "A", explanation: "A zero derivative throughout means f is constant there (a corollary of MVT).", orderIndex: 6 },
  { id: "jee-mathematics-mean-value-theorems-q08", topicId: "jee-mathematics-mean-value-theorems", text: "If f′(x) > 0 on an interval, f is:", optionA: "Strictly increasing", optionB: "Strictly decreasing", optionC: "Constant", optionD: "Concave", correctOption: "A", explanation: "A positive derivative implies the function is strictly increasing.", orderIndex: 7 },
  { id: "jee-mathematics-mean-value-theorems-q09", topicId: "jee-mathematics-mean-value-theorems", text: "For f(x) = x² on [0,2], the c from LMVT is:", optionA: "1", optionB: "2", optionC: "0", optionD: "1.5", correctOption: "A", explanation: "f′(c)=2c must equal (4−0)/2=2, so c=1.", orderIndex: 8 },
  { id: "jee-mathematics-mean-value-theorems-q10", topicId: "jee-mathematics-mean-value-theorems", text: "Differentiability in both theorems is required on the:", optionA: "Open interval (a,b)", optionB: "Closed interval [a,b]", optionC: "Endpoints only", optionD: "Whole real line", correctOption: "A", explanation: "Differentiability is required on the open interval (a,b).", orderIndex: 9 },
  { id: "jee-mathematics-mean-value-theorems-q11", topicId: "jee-mathematics-mean-value-theorems", text: "The inequality |sin x − sin y| ≤ |x − y| follows from:", optionA: "The Mean Value Theorem", optionB: "Rolle's theorem only", optionC: "L'Hôpital's rule", optionD: "The binomial theorem", correctOption: "A", explanation: "Applying LMVT to sin with |cos c| ≤ 1 yields this bound.", orderIndex: 10 },
  { id: "jee-mathematics-mean-value-theorems-q12", topicId: "jee-mathematics-mean-value-theorems", text: "For f(x)=x² on [−1,1], Rolle's theorem gives c =", optionA: "0", optionB: "1", optionC: "−1", optionD: "0.5", correctOption: "A", explanation: "f(−1)=f(1)=1 and f′(c)=2c=0 gives c=0.", orderIndex: 11 }
];
