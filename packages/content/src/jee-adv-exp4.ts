// JEE Advanced depth expansion (pass 4). Fills remaining high-yield syllabus
// gaps: Physics (capacitors & dielectrics, EM waves, nuclear physics,
// experimental physics), Chemistry (metallurgy, qualitative inorganic
// analysis, gaseous state & real gases), Mathematics (properties of triangles,
// mathematical induction, mean-value theorems). Each topic ships a study note
// and a full 12-question drill.
import type { AuthoredMaterial } from "./builder";
import type { Question, Topic } from "@jyotir/core";

export const adv4Topics: Topic[] = [
  // Physics (existing max orderIndex = 20)
  { id: "jee-adv-phy-capacitors", subjectId: "jee-adv-physics", name: "Capacitors & Dielectrics", slug: "capacitors", orderIndex: 21 },
  { id: "jee-adv-phy-electromagnetic-waves", subjectId: "jee-adv-physics", name: "Electromagnetic Waves", slug: "electromagnetic-waves", orderIndex: 22 },
  { id: "jee-adv-phy-nuclear-physics", subjectId: "jee-adv-physics", name: "Nuclear Physics & Radioactivity", slug: "nuclear-physics", orderIndex: 23 },
  { id: "jee-adv-phy-experimental-physics", subjectId: "jee-adv-physics", name: "Experimental Physics & Error Analysis", slug: "experimental-physics", orderIndex: 24 },
  // Chemistry (existing max orderIndex = 24)
  { id: "jee-adv-chem-metallurgy", subjectId: "jee-adv-chemistry", name: "Metallurgy & Isolation of Elements", slug: "metallurgy", orderIndex: 25 },
  { id: "jee-adv-chem-qualitative-analysis", subjectId: "jee-adv-chemistry", name: "Qualitative Inorganic Analysis", slug: "qualitative-analysis", orderIndex: 26 },
  { id: "jee-adv-chem-gaseous-state", subjectId: "jee-adv-chemistry", name: "Gaseous State & Real Gases", slug: "gaseous-state", orderIndex: 27 },
  // Mathematics (existing max orderIndex = 19)
  { id: "jee-adv-math-properties-triangles", subjectId: "jee-adv-mathematics", name: "Properties & Solutions of Triangles", slug: "properties-triangles", orderIndex: 20 },
  { id: "jee-adv-math-mathematical-induction", subjectId: "jee-adv-mathematics", name: "Mathematical Induction", slug: "mathematical-induction", orderIndex: 21 },
  { id: "jee-adv-math-mean-value-theorems", subjectId: "jee-adv-mathematics", name: "Rolle's & Mean Value Theorems", slug: "mean-value-theorems", orderIndex: 22 }
];

export const adv4Materials: AuthoredMaterial[] = [
  { id: "jee-adv-phy-capacitors-m01", topicId: "jee-adv-phy-capacitors", title: "Capacitors & Dielectrics", content: `A **capacitor** stores charge: C = Q/V. For a parallel-plate capacitor C = **Kε₀A/d**, where K is the dielectric constant.

## Energy
- U = ½CV² = ½QV = Q²/2C.
- Field energy density u = ½ε₀E² (½Kε₀E² inside a dielectric).

## Dielectrics
- Inserting a slab multiplies C by K.
- **Battery connected (V constant)**: Q and U increase.
- **Battery disconnected (Q constant)**: V and U **decrease** (energy goes into pulling the slab in).

## Combinations & networks
- Series: 1/C = Σ 1/Cᵢ; parallel: C = Σ Cᵢ.
- Use symmetry and **Wheatstone-bridge balance** (C₁/C₂ = C₃/C₄ ⇒ bridge capacitor carries no charge) for complex networks.

## Charging
Q(t) = Q₀(1 − e^(−t/RC)); time constant τ = RC; steady-state current through a capacitor is zero.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-adv-phy-electromagnetic-waves-m01", topicId: "jee-adv-phy-electromagnetic-waves", title: "Electromagnetic Waves", content: `**EM waves** are self-sustaining oscillations of **E** and **B** fields, transverse and mutually perpendicular, propagating along **E × B**.

## Key relations
- Speed in vacuum c = 1/√(μ₀ε₀) ≈ 3 × 10⁸ m/s.
- E₀/B₀ = c (fields in phase).
- Speed in a medium v = c/n (n = refractive index).

## Energy & momentum
- Average intensity I = ½ε₀E₀²c; energy is shared equally by the E and B fields.
- EM waves carry momentum p = U/c, exerting **radiation pressure**.

## Spectrum (increasing frequency)
radio → microwave → infrared → **visible** → ultraviolet → X-rays → gamma rays.

- **Displacement current** (Maxwell) I_d = ε₀ dΦ_E/dt makes Ampère's law consistent and is the source term for the magnetic field between capacitor plates.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-adv-phy-nuclear-physics-m01", topicId: "jee-adv-phy-nuclear-physics", title: "Nuclear Physics & Radioactivity", content: `## Nuclear binding
- **Mass defect** Δm = (Zmₚ + Nmₙ) − M_nucleus; binding energy E = Δm·c² (931.5 MeV per u).
- Binding energy **per nucleon** peaks near **iron (A ≈ 56)** — so both **fusion** (light nuclei) and **fission** (heavy nuclei) release energy.

## Radioactive decay
- **Law**: N = N₀e^(−λt); activity A = λN.
- **Half-life** T½ = ln2/λ = 0.693/λ; **mean life** τ = 1/λ.
- After n half-lives a fraction (½)ⁿ remains.

## Decay types
| Decay | Emission | Effect |
| --- | --- | --- |
| **α** | ⁴₂He | Z−2, A−4 |
| **β⁻** | electron + antineutrino | Z+1, A same |
| **β⁺** | positron + neutrino | Z−1, A same |
| **γ** | photon | no change in Z or A |

The **Q-value** is the energy released; a reaction is spontaneous when Q > 0.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-adv-phy-experimental-physics-m01", topicId: "jee-adv-phy-experimental-physics", title: "Experimental Physics & Error Analysis", content: `## Instruments & least count
- **Vernier calliper**: LC = 1 MSD − 1 VSD (typically 0.1 mm).
- **Screw gauge**: LC = pitch / (circular-scale divisions) (typically 0.01 mm).
- Always correct for **zero error**.

## Error propagation
- **Sum/difference**: absolute errors add.
- **Product/quotient**: relative (fractional) errors add.
- **Power** Z = Aᵖ Bq / Cʳ: ΔZ/Z = p(ΔA/A) + q(ΔB/B) + r(ΔC/C).

## Common JEE-Advanced experiments
- **Metre-bridge / Wheatstone bridge**: unknown R from balance point; error minimised near the middle of the wire.
- **Search for g** with a simple pendulum: g = 4π²L/T²; combine ΔL/L and 2ΔT/T.
- **Ohm's law / potentiometer**: EMF comparison without drawing current.

Report the answer to the **least number of significant figures** among the inputs.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-adv-chem-metallurgy-m01", topicId: "jee-adv-chem-metallurgy", title: "Metallurgy & Isolation of Elements", content: `Metallurgy extracts a metal from its ore through **concentration → reduction → refining**.

## Concentration of ore
- **Froth flotation** for sulphide ores; **magnetic separation**; **leaching** (e.g., bauxite by NaOH — Bayer process; gold/silver by cyanide).

## Reduction methods
| Method | Used for |
| --- | --- |
| **Carbon reduction (smelting)** | Fe, Zn, Pb oxides |
| **Self-reduction** | Cu, Hg sulphides |
| **Thermite (aluminothermy)** | Cr, Mn |
| **Electrolysis** | reactive metals Na, Al, Mg |

## Thermodynamics — Ellingham diagram
Plots ΔG° vs T for oxide formation. A metal whose line lies **below** another's can reduce that oxide. Carbon's line slopes down, so above a certain T carbon reduces most metal oxides.

## Refining
Electrolytic refining, zone refining (ultrapure Si/Ge), van Arkel (Ti, Zr), Mond process (Ni).`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-adv-chem-qualitative-analysis-m01", topicId: "jee-adv-chem-qualitative-analysis", title: "Qualitative Inorganic Analysis", content: `Systematic identification of the **cation (basic radical)** and **anion (acidic radical)**.

## Cation groups
| Group | Reagent | Cations |
| --- | --- | --- |
| I | dil. HCl | Pb²⁺ |
| II | H₂S in dil. HCl | Cu²⁺, Cd²⁺, Pb²⁺ |
| III | NH₄Cl + NH₄OH | Al³⁺, Fe³⁺, Cr³⁺ |
| IV | H₂S in NH₄OH | Zn²⁺, Mn²⁺, Ni²⁺, Co²⁺ |
| V | (NH₄)₂CO₃ | Ba²⁺, Sr²⁺, Ca²⁺ |
| VI | — | Mg²⁺, Na⁺, K⁺ |

Group II vs IV separation exploits the **common-ion effect**: dilute HCl lowers [S²⁻] so only low-Ksp group-II sulphides precipitate.

## Anion tests
- **CO₃²⁻**: CO₂ effervescence; **NO₃⁻**: brown-ring test; **Cl⁻/Br⁻/I⁻**: AgNO₃ then NH₃ solubility; **SO₄²⁻**: BaCl₂ white ppt.

## Confirmatory colour tests
- Fe³⁺ + SCN⁻ → blood-red; Cu²⁺ + NH₃ → deep blue; Ni²⁺ + DMG → rosy-red.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-adv-chem-gaseous-state-m01", topicId: "jee-adv-chem-gaseous-state", title: "Gaseous State & Real Gases", content: `## Ideal gas
PV = nRT. Kinetic theory gives P = (1/3)(mN/V)⟨v²⟩ and average KE = (3/2)kT per molecule.

## Molecular speeds
- **RMS**: v_rms = √(3RT/M).
- **Average**: v_avg = √(8RT/πM).
- **Most probable**: v_mp = √(2RT/M). Order: v_mp < v_avg < v_rms.

## Real gases — van der Waals
(P + an²/V²)(V − nb) = nRT.
- **a** corrects for intermolecular attraction; **b** for finite molecular volume.
- **Compressibility factor** Z = PV/nRT: Z < 1 (attraction dominates), Z > 1 (repulsion/high P). For an ideal gas Z = 1.

## Critical constants & liquefaction
- Above the **critical temperature** T_c a gas cannot be liquefied by pressure alone.
- **Boyle temperature**: the gas behaves ideally over a range of pressure.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-adv-math-properties-triangles-m01", topicId: "jee-adv-math-properties-triangles", title: "Properties & Solutions of Triangles", content: `Relations among sides a, b, c and angles A, B, C.

## Core rules
- **Sine rule**: a/sin A = b/sin B = c/sin C = 2R.
- **Cosine rule**: cos A = (b² + c² − a²)/(2bc).
- **Projection**: a = b cos C + c cos B.
- **Tangent (Napier's) rule**: tan((B−C)/2) = ((b−c)/(b+c))·cot(A/2).

## Area & radii
- Area Δ = ½ab sin C = √[s(s−a)(s−b)(s−c)] (Heron), s = (a+b+c)/2.
- Circumradius R = abc/4Δ; inradius r = Δ/s.
- r = 4R·sin(A/2)sin(B/2)sin(C/2).

## Half-angle formulae
sin(A/2) = √[(s−b)(s−c)/bc]; cos(A/2) = √[s(s−a)/bc]; tan(A/2) = √[(s−b)(s−c)/(s(s−a))].

These solve triangles from SSS, SAS, or ASA data and handle the **ambiguous (SSA)** case.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-adv-math-mathematical-induction-m01", topicId: "jee-adv-math-mathematical-induction", title: "Mathematical Induction", content: `The **principle of mathematical induction (PMI)** proves P(n) for all n ≥ n₀.

## Steps
1. **Base case**: verify P(n₀) (often P(1)).
2. **Inductive step**: assume P(k) (hypothesis), prove P(k+1).

## Standard results
- 1 + 2 + … + n = n(n+1)/2.
- Σ n² = n(n+1)(2n+1)/6; Σ n³ = [n(n+1)/2]².
- **Divisibility**: 3² ⁿ − 1 divisible by 8; n³ + 2n by 3; xⁿ − yⁿ by (x − y).
- **Inequality**: 2ⁿ > n for n ≥ 1; (1 + x)ⁿ ≥ 1 + nx (**Bernoulli**).

## Strong induction
Assumes P holds for **all** values up to k — needed for recurrences (e.g., Fibonacci bounds) where P(k+1) depends on several previous terms. The base case is indispensable; omitting it can "prove" false claims.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "jee-adv-math-mean-value-theorems-m01", topicId: "jee-adv-math-mean-value-theorems", title: "Rolle's & Mean Value Theorems", content: `For f continuous on [a,b] and differentiable on (a,b):

## Rolle's theorem
If f(a) = f(b), then some c in (a,b) has **f′(c) = 0**.
- Corollary: between two roots of f there is a root of f′.

## Lagrange's MVT
Some c in (a,b) satisfies **f′(c) = [f(b) − f(a)]/(b − a)** — the tangent is parallel to the chord. Rolle's is the case f(a) = f(b).

## Cauchy's MVT
For f, g on [a,b]: [f(b) − f(a)]/[g(b) − g(a)] = f′(c)/g′(c). This underlies **L'Hôpital's rule**.

## Consequences
- f′ = 0 on an interval ⇒ f is constant; f′ > 0 ⇒ strictly increasing.
- **Inequalities**: e.g., x/(1+x) < ln(1+x) < x for x > 0, proved via MVT.
- Bounding number of roots: if f′ has k roots, f has at most k+1.

Both continuity on [a,b] and differentiability on (a,b) are required — dropping either breaks the conclusion.`, estimatedReadTime: 2, orderIndex: 0 }
];

export const adv4Questions: Question[] = [
  // ── Capacitors & Dielectrics ──
  { id: "jee-adv-phy-capacitors-q01", topicId: "jee-adv-phy-capacitors", text: "A parallel-plate capacitor with a dielectric constant K has capacitance:", optionA: "Kε₀A/d", optionB: "ε₀A/(Kd)", optionC: "ε₀A/d", optionD: "Kd/(ε₀A)", correctOption: "A", explanation: "A dielectric multiplies the vacuum capacitance by K: C = Kε₀A/d.", orderIndex: 0 },
  { id: "jee-adv-phy-capacitors-q02", topicId: "jee-adv-phy-capacitors", text: "Energy stored in a capacitor of charge Q and capacitance C is:", optionA: "Q²/2C", optionB: "Q²C/2", optionC: "2C/Q²", optionD: "QC²", correctOption: "A", explanation: "U = ½CV² = ½QV = Q²/2C.", orderIndex: 1 },
  { id: "jee-adv-phy-capacitors-q03", topicId: "jee-adv-phy-capacitors", text: "A charged capacitor is disconnected from the battery, then a dielectric is inserted. The stored energy:", optionA: "Decreases", optionB: "Increases", optionC: "Stays the same", optionD: "Becomes zero", correctOption: "A", explanation: "At constant Q, C rises so U = Q²/2C falls; the field pulls the slab in.", orderIndex: 2 },
  { id: "jee-adv-phy-capacitors-q04", topicId: "jee-adv-phy-capacitors", text: "With the battery still connected, inserting a dielectric makes the charge:", optionA: "Increase", optionB: "Decrease", optionC: "Stay constant", optionD: "Reverse sign", correctOption: "A", explanation: "At constant V, Q = CV rises because C increases.", orderIndex: 3 },
  { id: "jee-adv-phy-capacitors-q05", topicId: "jee-adv-phy-capacitors", text: "Two capacitors 2 μF and 2 μF in series give:", optionA: "1 μF", optionB: "4 μF", optionC: "2 μF", optionD: "0.5 μF", correctOption: "A", explanation: "1/C = 1/2 + 1/2 = 1, so C = 1 μF.", orderIndex: 4 },
  { id: "jee-adv-phy-capacitors-q06", topicId: "jee-adv-phy-capacitors", text: "The electric-field energy density in vacuum is:", optionA: "½ε₀E²", optionB: "ε₀E²", optionC: "½ε₀E", optionD: "ε₀E/2", correctOption: "A", explanation: "Energy per unit volume of an electric field is u = ½ε₀E².", orderIndex: 5 },
  { id: "jee-adv-phy-capacitors-q07", topicId: "jee-adv-phy-capacitors", text: "In steady state, the current through a fully charged capacitor is:", optionA: "Zero", optionB: "Maximum", optionC: "V/R", optionD: "Infinite", correctOption: "A", explanation: "A fully charged capacitor blocks DC, so steady-state current is zero.", orderIndex: 6 },
  { id: "jee-adv-phy-capacitors-q08", topicId: "jee-adv-phy-capacitors", text: "In a balanced capacitor Wheatstone bridge (C₁/C₂ = C₃/C₄), the bridge capacitor:", optionA: "Carries no charge", optionB: "Carries maximum charge", optionC: "Breaks down", optionD: "Doubles its value", correctOption: "A", explanation: "A balanced bridge has equal potentials across the bridge element, so no charge.", orderIndex: 7 },
  { id: "jee-adv-phy-capacitors-q09", topicId: "jee-adv-phy-capacitors", text: "The time constant of an RC circuit is:", optionA: "RC", optionB: "R/C", optionC: "C/R", optionD: "1/(RC)", correctOption: "A", explanation: "The charging time constant is τ = RC.", orderIndex: 8 },
  { id: "jee-adv-phy-capacitors-q10", topicId: "jee-adv-phy-capacitors", text: "Three 2 μF capacitors in parallel give a total capacitance of:", optionA: "6 μF", optionB: "2/3 μF", optionC: "2 μF", optionD: "8 μF", correctOption: "A", explanation: "Parallel capacitances add: 2 + 2 + 2 = 6 μF.", orderIndex: 9 },
  { id: "jee-adv-phy-capacitors-q11", topicId: "jee-adv-phy-capacitors", text: "If the plate separation d of an isolated charged capacitor is doubled, its capacitance:", optionA: "Halves", optionB: "Doubles", optionC: "Quadruples", optionD: "Is unchanged", correctOption: "A", explanation: "C = ε₀A/d is inversely proportional to d, so doubling d halves C.", orderIndex: 10 },
  { id: "jee-adv-phy-capacitors-q12", topicId: "jee-adv-phy-capacitors", text: "At constant voltage, doubling the capacitance changes the stored energy by a factor of:", optionA: "2", optionB: "4", optionC: "½", optionD: "1", correctOption: "A", explanation: "U = ½CV²; at fixed V, doubling C doubles the energy.", orderIndex: 11 },

  // ── Electromagnetic Waves ──
  { id: "jee-adv-phy-electromagnetic-waves-q01", topicId: "jee-adv-phy-electromagnetic-waves", text: "In an electromagnetic wave, the E and B fields are:", optionA: "Mutually perpendicular and in phase", optionB: "Parallel to each other", optionC: "90° out of phase", optionD: "Both along the direction of travel", correctOption: "A", explanation: "E and B are perpendicular to each other and oscillate in phase.", orderIndex: 0 },
  { id: "jee-adv-phy-electromagnetic-waves-q02", topicId: "jee-adv-phy-electromagnetic-waves", text: "The speed of EM waves in vacuum is given by:", optionA: "1/√(μ₀ε₀)", optionB: "√(μ₀ε₀)", optionC: "μ₀ε₀", optionD: "1/(μ₀ε₀)", correctOption: "A", explanation: "c = 1/√(μ₀ε₀) ≈ 3 × 10⁸ m/s.", orderIndex: 1 },
  { id: "jee-adv-phy-electromagnetic-waves-q03", topicId: "jee-adv-phy-electromagnetic-waves", text: "The ratio E₀/B₀ of the field amplitudes in an EM wave equals:", optionA: "c", optionB: "1/c", optionC: "c²", optionD: "μ₀", correctOption: "A", explanation: "For an EM wave E₀ = cB₀, so E₀/B₀ = c.", orderIndex: 2 },
  { id: "jee-adv-phy-electromagnetic-waves-q04", topicId: "jee-adv-phy-electromagnetic-waves", text: "EM waves are:", optionA: "Transverse", optionB: "Longitudinal", optionC: "Neither", optionD: "Both simultaneously", correctOption: "A", explanation: "Electromagnetic waves are transverse — fields oscillate perpendicular to propagation.", orderIndex: 3 },
  { id: "jee-adv-phy-electromagnetic-waves-q05", topicId: "jee-adv-phy-electromagnetic-waves", text: "Which has the highest frequency?", optionA: "Gamma rays", optionB: "Microwaves", optionC: "Infrared", optionD: "Radio waves", correctOption: "A", explanation: "Gamma rays sit at the high-frequency end of the EM spectrum.", orderIndex: 4 },
  { id: "jee-adv-phy-electromagnetic-waves-q06", topicId: "jee-adv-phy-electromagnetic-waves", text: "EM waves carry momentum p related to energy U by:", optionA: "p = U/c", optionB: "p = Uc", optionC: "p = U/c²", optionD: "p = Uc²", correctOption: "A", explanation: "The momentum of radiation is p = U/c, giving radiation pressure.", orderIndex: 5 },
  { id: "jee-adv-phy-electromagnetic-waves-q07", topicId: "jee-adv-phy-electromagnetic-waves", text: "The displacement current introduced by Maxwell is proportional to:", optionA: "dΦ_E/dt", optionB: "dΦ_B/dt", optionC: "The conduction current only", optionD: "The magnetic flux", correctOption: "A", explanation: "Displacement current I_d = ε₀ dΦ_E/dt, the rate of change of electric flux.", orderIndex: 6 },
  { id: "jee-adv-phy-electromagnetic-waves-q08", topicId: "jee-adv-phy-electromagnetic-waves", text: "In an EM wave the wave travels along the direction of:", optionA: "E × B", optionB: "B × E", optionC: "E only", optionD: "B only", correctOption: "A", explanation: "The Poynting vector E × B gives the propagation direction.", orderIndex: 7 },
  { id: "jee-adv-phy-electromagnetic-waves-q09", topicId: "jee-adv-phy-electromagnetic-waves", text: "In an EM wave, the energy is:", optionA: "Shared equally by E and B fields", optionB: "Only in the E field", optionC: "Only in the B field", optionD: "Zero on average", correctOption: "A", explanation: "The electric and magnetic fields carry equal average energy densities.", orderIndex: 8 },
  { id: "jee-adv-phy-electromagnetic-waves-q10", topicId: "jee-adv-phy-electromagnetic-waves", text: "Visible light lies between which two regions of the spectrum?", optionA: "Infrared and ultraviolet", optionB: "Radio and microwave", optionC: "X-rays and gamma rays", optionD: "Microwave and infrared", correctOption: "A", explanation: "Visible light falls between infrared (lower f) and ultraviolet (higher f).", orderIndex: 9 },
  { id: "jee-adv-phy-electromagnetic-waves-q11", topicId: "jee-adv-phy-electromagnetic-waves", text: "In a medium of refractive index n, the speed of an EM wave is:", optionA: "c/n", optionB: "cn", optionC: "c", optionD: "n/c", correctOption: "A", explanation: "The wave slows to v = c/n in a medium of index n.", orderIndex: 10 },
  { id: "jee-adv-phy-electromagnetic-waves-q12", topicId: "jee-adv-phy-electromagnetic-waves", text: "Radiation pressure is exerted because EM waves carry:", optionA: "Momentum", optionB: "Mass", optionC: "Charge", optionD: "Temperature", correctOption: "A", explanation: "EM waves transport momentum, which produces radiation pressure on absorption.", orderIndex: 11 },

  // ── Nuclear Physics & Radioactivity ──
  { id: "jee-adv-phy-nuclear-physics-q01", topicId: "jee-adv-phy-nuclear-physics", text: "The energy equivalent of 1 atomic mass unit is approximately:", optionA: "931.5 MeV", optionB: "13.6 eV", optionC: "1 MeV", optionD: "511 keV", correctOption: "A", explanation: "1 u corresponds to about 931.5 MeV via E = mc².", orderIndex: 0 },
  { id: "jee-adv-phy-nuclear-physics-q02", topicId: "jee-adv-phy-nuclear-physics", text: "Binding energy per nucleon is maximum near which nucleus?", optionA: "Iron (A ≈ 56)", optionB: "Hydrogen", optionC: "Uranium", optionD: "Helium", correctOption: "A", explanation: "The binding-energy-per-nucleon curve peaks near iron (A ≈ 56).", orderIndex: 1 },
  { id: "jee-adv-phy-nuclear-physics-q03", topicId: "jee-adv-phy-nuclear-physics", text: "The radioactive decay law is:", optionA: "N = N₀e^(−λt)", optionB: "N = N₀e^(λt)", optionC: "N = N₀λt", optionD: "N = N₀/t", correctOption: "A", explanation: "Nuclei decay exponentially: N = N₀e^(−λt).", orderIndex: 2 },
  { id: "jee-adv-phy-nuclear-physics-q04", topicId: "jee-adv-phy-nuclear-physics", text: "The half-life T½ in terms of the decay constant λ is:", optionA: "0.693/λ", optionB: "λ/0.693", optionC: "1/λ", optionD: "λ²", correctOption: "A", explanation: "T½ = ln2/λ = 0.693/λ.", orderIndex: 3 },
  { id: "jee-adv-phy-nuclear-physics-q05", topicId: "jee-adv-phy-nuclear-physics", text: "In alpha decay, the mass number A of the nucleus changes by:", optionA: "−4", optionB: "−2", optionC: "+1", optionD: "0", correctOption: "A", explanation: "Emitting a ⁴₂He nucleus reduces A by 4 (and Z by 2).", orderIndex: 4 },
  { id: "jee-adv-phy-nuclear-physics-q06", topicId: "jee-adv-phy-nuclear-physics", text: "In β⁻ decay, the atomic number Z:", optionA: "Increases by 1", optionB: "Decreases by 1", optionC: "Decreases by 2", optionD: "Stays the same", correctOption: "A", explanation: "A neutron becomes a proton, so Z increases by 1 (A unchanged).", orderIndex: 5 },
  { id: "jee-adv-phy-nuclear-physics-q07", topicId: "jee-adv-phy-nuclear-physics", text: "After 3 half-lives, the fraction of the original sample remaining is:", optionA: "1/8", optionB: "1/3", optionC: "1/6", optionD: "3/4", correctOption: "A", explanation: "(½)³ = 1/8 of the nuclei remain after three half-lives.", orderIndex: 6 },
  { id: "jee-adv-phy-nuclear-physics-q08", topicId: "jee-adv-phy-nuclear-physics", text: "Energy is released in nuclear fusion because light nuclei have:", optionA: "Lower binding energy per nucleon than the product", optionB: "Higher binding energy per nucleon", optionC: "Zero binding energy", optionD: "No mass defect", correctOption: "A", explanation: "Fusing light nuclei raises binding energy per nucleon, releasing energy.", orderIndex: 7 },
  { id: "jee-adv-phy-nuclear-physics-q09", topicId: "jee-adv-phy-nuclear-physics", text: "Activity A of a sample is related to N by:", optionA: "A = λN", optionB: "A = N/λ", optionC: "A = λ/N", optionD: "A = λ²N", correctOption: "A", explanation: "Activity is the decay rate A = λN.", orderIndex: 8 },
  { id: "jee-adv-phy-nuclear-physics-q10", topicId: "jee-adv-phy-nuclear-physics", text: "Gamma emission changes the nucleus's:", optionA: "Neither Z nor A", optionB: "Z only", optionC: "A only", optionD: "Both Z and A", correctOption: "A", explanation: "A gamma photon carries away energy but not nucleons, so Z and A are unchanged.", orderIndex: 9 },
  { id: "jee-adv-phy-nuclear-physics-q11", topicId: "jee-adv-phy-nuclear-physics", text: "The mean life τ of a radioactive nucleus equals:", optionA: "1/λ", optionB: "λ", optionC: "0.693/λ", optionD: "λ/2", correctOption: "A", explanation: "Mean life τ = 1/λ, longer than the half-life.", orderIndex: 10 },
  { id: "jee-adv-phy-nuclear-physics-q12", topicId: "jee-adv-phy-nuclear-physics", text: "The mass defect Δm of a nucleus is converted to:", optionA: "Binding energy", optionB: "Kinetic energy of the nucleus", optionC: "Charge", optionD: "Angular momentum", correctOption: "A", explanation: "The mass defect appears as the nuclear binding energy E = Δm·c².", orderIndex: 11 },

  // ── Experimental Physics & Error Analysis ──
  { id: "jee-adv-phy-experimental-physics-q01", topicId: "jee-adv-phy-experimental-physics", text: "The least count of a screw gauge is:", optionA: "Pitch / number of circular-scale divisions", optionB: "Pitch × divisions", optionC: "1 main-scale division", optionD: "Divisions / pitch", correctOption: "A", explanation: "Screw-gauge least count = pitch ÷ head-scale divisions.", orderIndex: 0 },
  { id: "jee-adv-phy-experimental-physics-q02", topicId: "jee-adv-phy-experimental-physics", text: "When quantities are multiplied or divided, the errors that add are the:", optionA: "Relative (fractional) errors", optionB: "Absolute errors", optionC: "Squared errors", optionD: "Zero errors", correctOption: "A", explanation: "For products and quotients, fractional errors add.", orderIndex: 1 },
  { id: "jee-adv-phy-experimental-physics-q03", topicId: "jee-adv-phy-experimental-physics", text: "For Z = A²B/C, the maximum fractional error in Z is:", optionA: "2(ΔA/A) + (ΔB/B) + (ΔC/C)", optionB: "(ΔA/A) + (ΔB/B) + (ΔC/C)", optionC: "2(ΔA/A) − (ΔB/B)", optionD: "(ΔA/A)²", correctOption: "A", explanation: "Powers multiply their fractional errors: A² contributes 2(ΔA/A).", orderIndex: 2 },
  { id: "jee-adv-phy-experimental-physics-q04", topicId: "jee-adv-phy-experimental-physics", text: "In a metre-bridge experiment, error is minimised when the balance point is near the:", optionA: "Middle of the wire", optionB: "Left end", optionC: "Right end", optionD: "Galvanometer", correctOption: "A", explanation: "Sensitivity is greatest and error least near the wire's midpoint.", orderIndex: 3 },
  { id: "jee-adv-phy-experimental-physics-q05", topicId: "jee-adv-phy-experimental-physics", text: "For g from a pendulum, g = 4π²L/T². The fractional error in g includes the T term as:", optionA: "2(ΔT/T)", optionB: "(ΔT/T)", optionC: "½(ΔT/T)", optionD: "4(ΔT/T)", correctOption: "A", explanation: "Since T is squared, it contributes 2(ΔT/T) to the fractional error.", orderIndex: 4 },
  { id: "jee-adv-phy-experimental-physics-q06", topicId: "jee-adv-phy-experimental-physics", text: "A potentiometer measures EMF accurately because at balance it draws:", optionA: "No current from the cell", optionB: "Maximum current", optionC: "A constant 1 A", optionD: "Alternating current", correctOption: "A", explanation: "At the null point no current flows, so the true EMF is measured.", orderIndex: 5 },
  { id: "jee-adv-phy-experimental-physics-q07", topicId: "jee-adv-phy-experimental-physics", text: "The reading 0.00450 has how many significant figures?", optionA: "3", optionB: "5", optionC: "2", optionD: "6", correctOption: "A", explanation: "Leading zeros don't count; 4, 5 and the trailing 0 give 3 sig figs.", orderIndex: 6 },
  { id: "jee-adv-phy-experimental-physics-q08", topicId: "jee-adv-phy-experimental-physics", text: "For a sum or difference of quantities, the errors that add are the:", optionA: "Absolute errors", optionB: "Relative errors", optionC: "Percentage errors", optionD: "Fractional errors", correctOption: "A", explanation: "Absolute errors add for sums and differences.", orderIndex: 7 },
  { id: "jee-adv-phy-experimental-physics-q09", topicId: "jee-adv-phy-experimental-physics", text: "Zero error of a screw gauge must be:", optionA: "Algebraically subtracted from each reading", optionB: "Ignored", optionC: "Squared", optionD: "Added twice", correctOption: "A", explanation: "The systematic zero error is subtracted (with sign) from every reading.", orderIndex: 8 },
  { id: "jee-adv-phy-experimental-physics-q10", topicId: "jee-adv-phy-experimental-physics", text: "Random errors are reduced by:", optionA: "Averaging repeated measurements", optionB: "Using a biased scale", optionC: "Reading only once", optionD: "Increasing zero error", correctOption: "A", explanation: "Averaging many readings cancels random fluctuations.", orderIndex: 9 },
  { id: "jee-adv-phy-experimental-physics-q11", topicId: "jee-adv-phy-experimental-physics", text: "A vernier calliper typically has a least count of:", optionA: "0.1 mm", optionB: "1 mm", optionC: "0.5 mm", optionD: "1 cm", correctOption: "A", explanation: "A standard vernier calliper resolves to 0.1 mm.", orderIndex: 10 },
  { id: "jee-adv-phy-experimental-physics-q12", topicId: "jee-adv-phy-experimental-physics", text: "A calculated result should be quoted to the:", optionA: "Least number of significant figures among the data", optionB: "Most decimal places possible", optionC: "Nearest whole number always", optionD: "Twelve significant figures", correctOption: "A", explanation: "Precision is limited by the least precise measurement used.", orderIndex: 11 },

  // ── Metallurgy & Isolation of Elements ──
  { id: "jee-adv-chem-metallurgy-q01", topicId: "jee-adv-chem-metallurgy", text: "Froth flotation is used to concentrate which type of ore?", optionA: "Sulphide ores", optionB: "Oxide ores", optionC: "Carbonate ores", optionD: "Chloride ores", correctOption: "A", explanation: "Froth flotation concentrates sulphide ores using their preference for oil.", orderIndex: 0 },
  { id: "jee-adv-chem-metallurgy-q02", topicId: "jee-adv-chem-metallurgy", text: "Highly reactive metals such as sodium and aluminium are extracted by:", optionA: "Electrolysis", optionB: "Carbon reduction", optionC: "Roasting", optionD: "Froth flotation", correctOption: "A", explanation: "Reactive metals are obtained by electrolysis of their molten salts/oxides.", orderIndex: 1 },
  { id: "jee-adv-chem-metallurgy-q03", topicId: "jee-adv-chem-metallurgy", text: "The Ellingham diagram plots:", optionA: "ΔG° of oxide formation vs temperature", optionB: "ΔH vs pressure", optionC: "Ksp vs temperature", optionD: "EMF vs concentration", correctOption: "A", explanation: "Ellingham diagrams plot standard free energy of oxide formation against T.", orderIndex: 2 },
  { id: "jee-adv-chem-metallurgy-q04", topicId: "jee-adv-chem-metallurgy", text: "The thermite (aluminothermy) process is used to extract:", optionA: "Chromium and manganese", optionB: "Sodium", optionC: "Aluminium", optionD: "Copper", correctOption: "A", explanation: "Aluminium reduces Cr₂O₃ and MnO₂ in the highly exothermic thermite reaction.", orderIndex: 3 },
  { id: "jee-adv-chem-metallurgy-q05", topicId: "jee-adv-chem-metallurgy", text: "Bauxite is purified in the Bayer process by leaching with:", optionA: "NaOH solution", optionB: "Dilute HCl", optionC: "Cyanide solution", optionD: "Water only", correctOption: "A", explanation: "Bauxite dissolves in hot NaOH, separating from insoluble impurities.", orderIndex: 4 },
  { id: "jee-adv-chem-metallurgy-q06", topicId: "jee-adv-chem-metallurgy", text: "Ultrapure silicon and germanium for semiconductors are obtained by:", optionA: "Zone refining", optionB: "Electrolysis", optionC: "Froth flotation", optionD: "Roasting", correctOption: "A", explanation: "Zone refining exploits impurities' preference for the molten zone.", orderIndex: 5 },
  { id: "jee-adv-chem-metallurgy-q07", topicId: "jee-adv-chem-metallurgy", text: "Converting a sulphide ore to its oxide by heating in air is called:", optionA: "Roasting", optionB: "Calcination", optionC: "Smelting", optionD: "Leaching", correctOption: "A", explanation: "Roasting heats sulphide ores in air to form the oxide (releasing SO₂).", orderIndex: 6 },
  { id: "jee-adv-chem-metallurgy-q08", topicId: "jee-adv-chem-metallurgy", text: "Calcination is the heating of an ore:", optionA: "In limited air to expel volatile matter", optionB: "In excess oxygen", optionC: "With carbon", optionD: "In water", correctOption: "A", explanation: "Calcination heats carbonate/hydrated ores in limited air to drive off CO₂/H₂O.", orderIndex: 7 },
  { id: "jee-adv-chem-metallurgy-q09", topicId: "jee-adv-chem-metallurgy", text: "Gold and silver are extracted from their ores by leaching with:", optionA: "Sodium cyanide solution", optionB: "Sodium hydroxide", optionC: "Sulphuric acid", optionD: "Ammonia", correctOption: "A", explanation: "Cyanide leaching forms soluble complexes of Au and Ag (MacArthur–Forrest).", orderIndex: 8 },
  { id: "jee-adv-chem-metallurgy-q10", topicId: "jee-adv-chem-metallurgy", text: "In the Ellingham diagram, a metal can reduce an oxide whose line lies:", optionA: "Above its own line", optionB: "Below its own line", optionC: "Parallel to its line", optionD: "At the same point", correctOption: "A", explanation: "A metal reduces oxides whose formation lines lie above (less negative) its own.", orderIndex: 9 },
  { id: "jee-adv-chem-metallurgy-q11", topicId: "jee-adv-chem-metallurgy", text: "Nickel is purified by the Mond process, which involves its volatile:", optionA: "Carbonyl complex", optionB: "Chloride", optionC: "Sulphide", optionD: "Oxide", correctOption: "A", explanation: "Ni forms volatile Ni(CO)₄, which decomposes to give pure nickel.", orderIndex: 10 },
  { id: "jee-adv-chem-metallurgy-q12", topicId: "jee-adv-chem-metallurgy", text: "The reduction of a metal oxide by carbon in a furnace is called:", optionA: "Smelting", optionB: "Leaching", optionC: "Flotation", optionD: "Calcination", correctOption: "A", explanation: "Smelting reduces oxide ore with carbon (coke) at high temperature.", orderIndex: 11 },

  // ── Qualitative Inorganic Analysis ──
  { id: "jee-adv-chem-qualitative-analysis-q01", topicId: "jee-adv-chem-qualitative-analysis", text: "Group I cations in qualitative analysis are precipitated by:", optionA: "Dilute HCl", optionB: "H₂S in acidic medium", optionC: "NH₄OH", optionD: "(NH₄)₂CO₃", correctOption: "A", explanation: "Group I (e.g. Pb²⁺) precipitates as chlorides with dilute HCl.", orderIndex: 0 },
  { id: "jee-adv-chem-qualitative-analysis-q02", topicId: "jee-adv-chem-qualitative-analysis", text: "Group II sulphides are precipitated using H₂S in the presence of:", optionA: "Dilute HCl (low S²⁻ concentration)", optionB: "NH₄OH", optionC: "Excess NaOH", optionD: "Concentrated HNO₃", correctOption: "A", explanation: "Dilute HCl suppresses S²⁻ via the common-ion effect so only low-Ksp sulphides precipitate.", orderIndex: 1 },
  { id: "jee-adv-chem-qualitative-analysis-q03", topicId: "jee-adv-chem-qualitative-analysis", text: "The separation of Group II from Group IV cations relies on the:", optionA: "Common-ion effect controlling [S²⁻]", optionB: "Flame test", optionC: "Density difference", optionD: "Magnetic property", correctOption: "A", explanation: "Adjusting [S²⁻] via acidity selectively precipitates group II then group IV.", orderIndex: 2 },
  { id: "jee-adv-chem-qualitative-analysis-q04", topicId: "jee-adv-chem-qualitative-analysis", text: "A blood-red colour with potassium thiocyanate confirms:", optionA: "Fe³⁺", optionB: "Cu²⁺", optionC: "Zn²⁺", optionD: "Al³⁺", correctOption: "A", explanation: "Fe³⁺ forms the blood-red [Fe(SCN)]²⁺ complex.", orderIndex: 3 },
  { id: "jee-adv-chem-qualitative-analysis-q05", topicId: "jee-adv-chem-qualitative-analysis", text: "A deep-blue solution with excess ammonia confirms:", optionA: "Cu²⁺", optionB: "Fe³⁺", optionC: "Ca²⁺", optionD: "Pb²⁺", correctOption: "A", explanation: "Cu²⁺ forms the deep-blue [Cu(NH₃)₄]²⁺ complex.", orderIndex: 4 },
  { id: "jee-adv-chem-qualitative-analysis-q06", topicId: "jee-adv-chem-qualitative-analysis", text: "The rosy-red precipitate with dimethylglyoxime (DMG) confirms:", optionA: "Ni²⁺", optionB: "Co²⁺", optionC: "Mn²⁺", optionD: "Zn²⁺", correctOption: "A", explanation: "Ni²⁺ gives a characteristic rosy-red complex with DMG.", orderIndex: 5 },
  { id: "jee-adv-chem-qualitative-analysis-q07", topicId: "jee-adv-chem-qualitative-analysis", text: "The brown-ring test confirms the presence of:", optionA: "Nitrate ion", optionB: "Sulphate ion", optionC: "Chloride ion", optionD: "Carbonate ion", correctOption: "A", explanation: "The brown ring of [Fe(H₂O)₅NO]²⁺ confirms nitrate.", orderIndex: 6 },
  { id: "jee-adv-chem-qualitative-analysis-q08", topicId: "jee-adv-chem-qualitative-analysis", text: "The Group III reagent (for Al³⁺, Fe³⁺) is:", optionA: "NH₄Cl with NH₄OH", optionB: "Dilute HCl", optionC: "H₂S in HCl", optionD: "(NH₄)₂CO₃", correctOption: "A", explanation: "NH₄OH in presence of NH₄Cl precipitates group III hydroxides.", orderIndex: 7 },
  { id: "jee-adv-chem-qualitative-analysis-q09", topicId: "jee-adv-chem-qualitative-analysis", text: "A white precipitate with BaCl₂ insoluble in dilute HCl indicates:", optionA: "Sulphate", optionB: "Chloride", optionC: "Nitrate", optionD: "Carbonate", correctOption: "A", explanation: "BaSO₄ is white and acid-insoluble, confirming sulphate.", orderIndex: 8 },
  { id: "jee-adv-chem-qualitative-analysis-q10", topicId: "jee-adv-chem-qualitative-analysis", text: "Group V cations (Ba²⁺, Sr²⁺, Ca²⁺) are precipitated by:", optionA: "Ammonium carbonate", optionB: "Dilute HCl", optionC: "H₂S", optionD: "NaOH", correctOption: "A", explanation: "(NH₄)₂CO₃ precipitates the group V carbonates.", orderIndex: 9 },
  { id: "jee-adv-chem-qualitative-analysis-q11", topicId: "jee-adv-chem-qualitative-analysis", text: "AgCl precipitate dissolves in ammonia, distinguishing chloride from:", optionA: "Iodide", optionB: "Nitrate", optionC: "Sulphate", optionD: "Carbonate", correctOption: "A", explanation: "AgCl dissolves in NH₃ whereas AgI does not, separating Cl⁻ from I⁻.", orderIndex: 10 },
  { id: "jee-adv-chem-qualitative-analysis-q12", topicId: "jee-adv-chem-qualitative-analysis", text: "In systematic analysis, the acidic radical refers to the:", optionA: "Anion", optionB: "Cation", optionC: "Metal ion", optionD: "Ligand", correctOption: "A", explanation: "The anion is termed the acidic radical; the cation is the basic radical.", orderIndex: 11 },

  // ── Gaseous State & Real Gases ──
  { id: "jee-adv-chem-gaseous-state-q01", topicId: "jee-adv-chem-gaseous-state", text: "The ideal gas equation is:", optionA: "PV = nRT", optionB: "PV = nRT²", optionC: "P/V = nRT", optionD: "PVT = nR", correctOption: "A", explanation: "The ideal gas law relates P, V, n and T by PV = nRT.", orderIndex: 0 },
  { id: "jee-adv-chem-gaseous-state-q02", topicId: "jee-adv-chem-gaseous-state", text: "The RMS speed of a gas molecule is:", optionA: "√(3RT/M)", optionB: "√(2RT/M)", optionC: "√(8RT/πM)", optionD: "3RT/M", correctOption: "A", explanation: "The root-mean-square speed is v_rms = √(3RT/M).", orderIndex: 1 },
  { id: "jee-adv-chem-gaseous-state-q03", topicId: "jee-adv-chem-gaseous-state", text: "The correct order of molecular speeds is:", optionA: "v_mp < v_avg < v_rms", optionB: "v_rms < v_avg < v_mp", optionC: "v_avg < v_mp < v_rms", optionD: "All equal", correctOption: "A", explanation: "Most probable < average < root-mean-square speed.", orderIndex: 2 },
  { id: "jee-adv-chem-gaseous-state-q04", topicId: "jee-adv-chem-gaseous-state", text: "In the van der Waals equation, the constant 'a' accounts for:", optionA: "Intermolecular attraction", optionB: "Molecular volume", optionC: "Temperature", optionD: "Pressure units", correctOption: "A", explanation: "'a' corrects the pressure for intermolecular attractive forces.", orderIndex: 3 },
  { id: "jee-adv-chem-gaseous-state-q05", topicId: "jee-adv-chem-gaseous-state", text: "The van der Waals constant 'b' represents:", optionA: "The finite volume of molecules", optionB: "Attractive forces", optionC: "Kinetic energy", optionD: "The gas constant", correctOption: "A", explanation: "'b' is the excluded volume due to the finite size of molecules.", orderIndex: 4 },
  { id: "jee-adv-chem-gaseous-state-q06", topicId: "jee-adv-chem-gaseous-state", text: "The compressibility factor Z for an ideal gas is:", optionA: "1", optionB: "0", optionC: "Greater than 1 always", optionD: "Less than 1 always", correctOption: "A", explanation: "Z = PV/nRT = 1 for an ideal gas.", orderIndex: 5 },
  { id: "jee-adv-chem-gaseous-state-q07", topicId: "jee-adv-chem-gaseous-state", text: "When attractive forces dominate in a real gas, Z is:", optionA: "Less than 1", optionB: "Greater than 1", optionC: "Exactly 1", optionD: "Negative", correctOption: "A", explanation: "Attraction makes the gas more compressible, so Z < 1.", orderIndex: 6 },
  { id: "jee-adv-chem-gaseous-state-q08", topicId: "jee-adv-chem-gaseous-state", text: "Above the critical temperature, a gas:", optionA: "Cannot be liquefied by pressure alone", optionB: "Liquefies immediately", optionC: "Becomes a solid", optionD: "Loses all pressure", correctOption: "A", explanation: "No amount of pressure liquefies a gas above its critical temperature.", orderIndex: 7 },
  { id: "jee-adv-chem-gaseous-state-q09", topicId: "jee-adv-chem-gaseous-state", text: "The average kinetic energy of a gas molecule is proportional to:", optionA: "Absolute temperature", optionB: "Pressure", optionC: "Volume", optionD: "Molar mass", correctOption: "A", explanation: "Average KE = (3/2)kT, proportional to absolute temperature only.", orderIndex: 8 },
  { id: "jee-adv-chem-gaseous-state-q10", topicId: "jee-adv-chem-gaseous-state", text: "At the Boyle temperature a real gas:", optionA: "Behaves ideally over a range of pressure", optionB: "Cannot exist", optionC: "Has Z = 0", optionD: "Always liquefies", correctOption: "A", explanation: "At the Boyle temperature a real gas obeys the ideal law over an appreciable pressure range.", orderIndex: 9 },
  { id: "jee-adv-chem-gaseous-state-q11", topicId: "jee-adv-chem-gaseous-state", text: "Which gas will behave most ideally under ordinary conditions?", optionA: "Hydrogen", optionB: "Carbon dioxide", optionC: "Ammonia", optionD: "Sulphur dioxide", correctOption: "A", explanation: "Small, weakly-attracting H₂ behaves most ideally; CO₂, NH₃, SO₂ deviate more.", orderIndex: 10 },
  { id: "jee-adv-chem-gaseous-state-q12", topicId: "jee-adv-chem-gaseous-state", text: "According to kinetic theory, gas pressure arises from:", optionA: "Molecular collisions with the walls", optionB: "Intermolecular attraction", optionC: "The gas's weight", optionD: "Chemical bonds", correctOption: "A", explanation: "Pressure results from momentum transfer during molecule–wall collisions.", orderIndex: 11 },

  // ── Properties & Solutions of Triangles ──
  { id: "jee-adv-math-properties-triangles-q01", topicId: "jee-adv-math-properties-triangles", text: "The sine rule states a/sin A =", optionA: "2R", optionB: "R", optionC: "R/2", optionD: "4R", correctOption: "A", explanation: "a/sin A = b/sin B = c/sin C = 2R (circumdiameter).", orderIndex: 0 },
  { id: "jee-adv-math-properties-triangles-q02", topicId: "jee-adv-math-properties-triangles", text: "The cosine rule gives cos A =", optionA: "(b² + c² − a²)/(2bc)", optionB: "(a² + b² − c²)/(2ab)", optionC: "(b² + c² + a²)/(2bc)", optionD: "a/(2bc)", correctOption: "A", explanation: "cos A = (b² + c² − a²)/(2bc).", orderIndex: 1 },
  { id: "jee-adv-math-properties-triangles-q03", topicId: "jee-adv-math-properties-triangles", text: "Heron's formula for the area uses the semi-perimeter s =", optionA: "(a + b + c)/2", optionB: "a + b + c", optionC: "abc/2", optionD: "(a + b + c)/3", correctOption: "A", explanation: "s is half the perimeter; Area = √[s(s−a)(s−b)(s−c)].", orderIndex: 2 },
  { id: "jee-adv-math-properties-triangles-q04", topicId: "jee-adv-math-properties-triangles", text: "The circumradius R equals:", optionA: "abc/(4Δ)", optionB: "Δ/s", optionC: "abc/Δ", optionD: "s/Δ", correctOption: "A", explanation: "R = abc divided by four times the area Δ.", orderIndex: 3 },
  { id: "jee-adv-math-properties-triangles-q05", topicId: "jee-adv-math-properties-triangles", text: "The inradius r equals:", optionA: "Δ/s", optionB: "s/Δ", optionC: "abc/4", optionD: "Δ·s", correctOption: "A", explanation: "The inradius is area over semi-perimeter, r = Δ/s.", orderIndex: 4 },
  { id: "jee-adv-math-properties-triangles-q06", topicId: "jee-adv-math-properties-triangles", text: "tan(A/2) equals:", optionA: "√[(s−b)(s−c)/(s(s−a))]", optionB: "√[s(s−a)/bc]", optionC: "√[(s−b)(s−c)/bc]", optionD: "(s−a)/s", correctOption: "A", explanation: "The half-angle tangent formula is tan(A/2) = √[(s−b)(s−c)/(s(s−a))].", orderIndex: 5 },
  { id: "jee-adv-math-properties-triangles-q07", topicId: "jee-adv-math-properties-triangles", text: "For sides 5, 12, 13, the triangle's area is:", optionA: "30", optionB: "60", optionC: "78", optionD: "39", correctOption: "A", explanation: "It is right-angled (5² + 12² = 13²), so area = ½·5·12 = 30.", orderIndex: 6 },
  { id: "jee-adv-math-properties-triangles-q08", topicId: "jee-adv-math-properties-triangles", text: "For a right triangle, the circumradius equals:", optionA: "Half the hypotenuse", optionB: "The hypotenuse", optionC: "Half a leg", optionD: "The inradius", correctOption: "A", explanation: "The hypotenuse is a diameter of the circumcircle, so R = hypotenuse/2.", orderIndex: 7 },
  { id: "jee-adv-math-properties-triangles-q09", topicId: "jee-adv-math-properties-triangles", text: "The projection formula gives a =", optionA: "b cos C + c cos B", optionB: "b sin C + c sin B", optionC: "b cos C − c cos B", optionD: "b + c", correctOption: "A", explanation: "a = b cos C + c cos B (projection rule).", orderIndex: 8 },
  { id: "jee-adv-math-properties-triangles-q10", topicId: "jee-adv-math-properties-triangles", text: "The SSA configuration is known as the:", optionA: "Ambiguous case", optionB: "Right-angle case", optionC: "Equilateral case", optionD: "Degenerate case", correctOption: "A", explanation: "SSA can give zero, one, or two triangles — the ambiguous case.", orderIndex: 9 },
  { id: "jee-adv-math-properties-triangles-q11", topicId: "jee-adv-math-properties-triangles", text: "The area of a triangle in terms of two sides and the included angle is:", optionA: "½ab sin C", optionB: "½ab cos C", optionC: "ab sin C", optionD: "ab cos C", correctOption: "A", explanation: "Δ = ½ab sin C where C is the included angle.", orderIndex: 10 },
  { id: "jee-adv-math-properties-triangles-q12", topicId: "jee-adv-math-properties-triangles", text: "In any triangle, r = 4R·sin(A/2)·sin(B/2)·sin(C/2) relates the inradius to the:", optionA: "Circumradius", optionB: "Semi-perimeter only", optionC: "Longest side", optionD: "Median", correctOption: "A", explanation: "This identity links the inradius r to the circumradius R.", orderIndex: 11 },

  // ── Mathematical Induction ──
  { id: "jee-adv-math-mathematical-induction-q01", topicId: "jee-adv-math-mathematical-induction", text: "The first step of induction is to verify the:", optionA: "Base case", optionB: "Inductive step", optionC: "Conclusion", optionD: "Converse", correctOption: "A", explanation: "You start by verifying the base case, usually P(1).", orderIndex: 0 },
  { id: "jee-adv-math-mathematical-induction-q02", topicId: "jee-adv-math-mathematical-induction", text: "In the inductive step, assuming P(k), you prove:", optionA: "P(k+1)", optionB: "P(1)", optionC: "P(k−1)", optionD: "The base case", correctOption: "A", explanation: "The inductive step derives P(k+1) from the hypothesis P(k).", orderIndex: 1 },
  { id: "jee-adv-math-mathematical-induction-q03", topicId: "jee-adv-math-mathematical-induction", text: "Σ from 1 to n of k² equals:", optionA: "n(n+1)(2n+1)/6", optionB: "[n(n+1)/2]²", optionC: "n(n+1)/2", optionD: "n³", correctOption: "A", explanation: "The sum of the first n squares is n(n+1)(2n+1)/6.", orderIndex: 2 },
  { id: "jee-adv-math-mathematical-induction-q04", topicId: "jee-adv-math-mathematical-induction", text: "Bernoulli's inequality states that for x > −1 and n ≥ 1:", optionA: "(1 + x)ⁿ ≥ 1 + nx", optionB: "(1 + x)ⁿ ≤ 1 + nx", optionC: "(1 + x)ⁿ = nx", optionD: "(1 + x)ⁿ < 0", correctOption: "A", explanation: "Bernoulli's inequality (1 + x)ⁿ ≥ 1 + nx is a classic induction result.", orderIndex: 3 },
  { id: "jee-adv-math-mathematical-induction-q05", topicId: "jee-adv-math-mathematical-induction", text: "For all natural n, xⁿ − yⁿ is divisible by:", optionA: "x − y", optionB: "x + y", optionC: "xy", optionD: "n", correctOption: "A", explanation: "xⁿ − yⁿ is always divisible by (x − y), provable by induction.", orderIndex: 4 },
  { id: "jee-adv-math-mathematical-induction-q06", topicId: "jee-adv-math-mathematical-induction", text: "Strong induction assumes the statement holds for:", optionA: "All values up to k", optionB: "Only k", optionC: "Only the base case", optionD: "No previous values", correctOption: "A", explanation: "Strong induction uses P for all values up to k when proving P(k+1).", orderIndex: 5 },
  { id: "jee-adv-math-mathematical-induction-q07", topicId: "jee-adv-math-mathematical-induction", text: "The expression 3²ⁿ − 1 is divisible by:", optionA: "8", optionB: "5", optionC: "7", optionD: "6", correctOption: "A", explanation: "3²ⁿ − 1 = 9ⁿ − 1 is divisible by 8 for all natural n.", orderIndex: 6 },
  { id: "jee-adv-math-mathematical-induction-q08", topicId: "jee-adv-math-mathematical-induction", text: "Σ from 1 to n of k³ equals:", optionA: "[n(n+1)/2]²", optionB: "n(n+1)(2n+1)/6", optionC: "n²(n+1)/2", optionD: "n(n+1)/2", correctOption: "A", explanation: "The sum of the first n cubes is the square of the first-power sum.", orderIndex: 7 },
  { id: "jee-adv-math-mathematical-induction-q09", topicId: "jee-adv-math-mathematical-induction", text: "Why is the base case indispensable?", optionA: "Without it, false statements could be 'proved'", optionB: "It is decorative", optionC: "It proves the converse", optionD: "It replaces the hypothesis", correctOption: "A", explanation: "The inductive step alone, lacking a true base, can propagate falsehoods.", orderIndex: 8 },
  { id: "jee-adv-math-mathematical-induction-q10", topicId: "jee-adv-math-mathematical-induction", text: "The assumption P(k) is called the:", optionA: "Inductive hypothesis", optionB: "Axiom", optionC: "Base case", optionD: "Lemma", correctOption: "A", explanation: "Assuming P(k) true is the inductive hypothesis.", orderIndex: 9 },
  { id: "jee-adv-math-mathematical-induction-q11", topicId: "jee-adv-math-mathematical-induction", text: "For n ≥ 1, 2ⁿ compares with n as:", optionA: "2ⁿ > n", optionB: "2ⁿ < n", optionC: "2ⁿ = n", optionD: "2ⁿ = 2n", correctOption: "A", explanation: "2ⁿ > n for every natural n, provable by induction.", orderIndex: 10 },
  { id: "jee-adv-math-mathematical-induction-q12", topicId: "jee-adv-math-mathematical-induction", text: "Induction proves statements indexed by:", optionA: "Natural numbers", optionB: "Real numbers", optionC: "Complex numbers", optionD: "Irrational numbers", correctOption: "A", explanation: "PMI applies to statements over the natural numbers.", orderIndex: 11 },

  // ── Rolle's & Mean Value Theorems ──
  { id: "jee-adv-math-mean-value-theorems-q01", topicId: "jee-adv-math-mean-value-theorems", text: "Rolle's theorem additionally requires:", optionA: "f(a) = f(b)", optionB: "f(a) = 0", optionC: "f is linear", optionD: "f(a) > f(b)", correctOption: "A", explanation: "Rolle's theorem needs equal endpoint values f(a) = f(b).", orderIndex: 0 },
  { id: "jee-adv-math-mean-value-theorems-q02", topicId: "jee-adv-math-mean-value-theorems", text: "Rolle's theorem guarantees a c in (a,b) with:", optionA: "f′(c) = 0", optionB: "f(c) = 0", optionC: "f″(c) = 0", optionD: "f(c) = c", correctOption: "A", explanation: "It guarantees a stationary point f′(c) = 0.", orderIndex: 1 },
  { id: "jee-adv-math-mean-value-theorems-q03", topicId: "jee-adv-math-mean-value-theorems", text: "Lagrange's MVT gives f′(c) =", optionA: "[f(b) − f(a)]/(b − a)", optionB: "f(b) − f(a)", optionC: "0", optionD: "(b − a)/[f(b) − f(a)]", correctOption: "A", explanation: "LMVT: the derivative at c equals the average rate of change.", orderIndex: 2 },
  { id: "jee-adv-math-mean-value-theorems-q04", topicId: "jee-adv-math-mean-value-theorems", text: "Cauchy's Mean Value Theorem underlies which rule?", optionA: "L'Hôpital's rule", optionB: "The chain rule", optionC: "The product rule", optionD: "The binomial theorem", correctOption: "A", explanation: "L'Hôpital's rule follows from Cauchy's generalised MVT.", orderIndex: 3 },
  { id: "jee-adv-math-mean-value-theorems-q05", topicId: "jee-adv-math-mean-value-theorems", text: "Geometrically, LMVT means the tangent at c is parallel to the:", optionA: "Chord joining the endpoints", optionB: "X-axis always", optionC: "Y-axis", optionD: "Normal at b", correctOption: "A", explanation: "The tangent at c is parallel to the chord over [a,b].", orderIndex: 4 },
  { id: "jee-adv-math-mean-value-theorems-q06", topicId: "jee-adv-math-mean-value-theorems", text: "Between two distinct real roots of a differentiable f, there is at least one root of:", optionA: "f′", optionB: "f″ only", optionC: "1/f", optionD: "f itself", correctOption: "A", explanation: "By Rolle's theorem, f′ has a root between two roots of f.", orderIndex: 5 },
  { id: "jee-adv-math-mean-value-theorems-q07", topicId: "jee-adv-math-mean-value-theorems", text: "If f′(x) = 0 throughout an interval, then f is:", optionA: "Constant there", optionB: "Increasing", optionC: "Decreasing", optionD: "Discontinuous", correctOption: "A", explanation: "A vanishing derivative on an interval means f is constant (a corollary of MVT).", orderIndex: 6 },
  { id: "jee-adv-math-mean-value-theorems-q08", topicId: "jee-adv-math-mean-value-theorems", text: "For f(x) = x² on [0, 2], LMVT gives c =", optionA: "1", optionB: "2", optionC: "0", optionD: "1.5", correctOption: "A", explanation: "2c = (4 − 0)/2 = 2, so c = 1.", orderIndex: 7 },
  { id: "jee-adv-math-mean-value-theorems-q09", topicId: "jee-adv-math-mean-value-theorems", text: "Rolle's theorem is the special case of LMVT when:", optionA: "f(a) = f(b)", optionB: "a = b", optionC: "f is constant everywhere", optionD: "f′(a) = 0", correctOption: "A", explanation: "With f(a) = f(b) the chord slope is 0, giving Rolle's f′(c) = 0.", orderIndex: 8 },
  { id: "jee-adv-math-mean-value-theorems-q10", topicId: "jee-adv-math-mean-value-theorems", text: "Both theorems require differentiability on:", optionA: "The open interval (a,b)", optionB: "The closed interval [a,b]", optionC: "The endpoints only", optionD: "All of R", correctOption: "A", explanation: "Differentiability is required on the open interval (a,b).", orderIndex: 9 },
  { id: "jee-adv-math-mean-value-theorems-q11", topicId: "jee-adv-math-mean-value-theorems", text: "The bound |sin x − sin y| ≤ |x − y| follows from:", optionA: "The Mean Value Theorem", optionB: "Rolle's theorem only", optionC: "The binomial theorem", optionD: "Cauchy's inequality", correctOption: "A", explanation: "Applying LMVT to sine with |cos c| ≤ 1 gives this Lipschitz bound.", orderIndex: 10 },
  { id: "jee-adv-math-mean-value-theorems-q12", topicId: "jee-adv-math-mean-value-theorems", text: "For f(x) = x² − 4 on [−2, 2], Rolle's theorem gives c =", optionA: "0", optionB: "2", optionC: "−2", optionD: "1", correctOption: "A", explanation: "f(−2) = f(2) = 0 and f′(c) = 2c = 0 gives c = 0.", orderIndex: 11 }
];
