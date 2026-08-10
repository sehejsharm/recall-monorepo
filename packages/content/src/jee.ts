import { defineBundle } from "./builder";
import { mainTopUpQuestions } from "./jee-main-exp";
import { jeeM2Topics, jeeM2Materials, jeeM2Questions } from "./jee-main-exp2";
import { mainDepthQuestions } from "./jee-main-exp3";

export const jee = defineBundle({
  exam: {
    id: "jee-main",
    slug: "jee-main",
    name: "JEE Main",
    tagline: "Physics · Chemistry · Mathematics — the NTA qualifier",
    orderIndex: 1,
    family: "jee",
    familyName: "JEE",
    familyTagline: "Joint Entrance Exam — pick your level",
    levelLabel: "Main"
  },
  subjects: [
    { id: "jee-physics", examId: "jee-main", name: "Physics", slug: "physics", orderIndex: 0 },
    { id: "jee-chemistry", examId: "jee-main", name: "Chemistry", slug: "chemistry", orderIndex: 1 },
    { id: "jee-mathematics", examId: "jee-main", name: "Mathematics", slug: "mathematics", orderIndex: 2 }
  ],
  topics: [
    {
      id: "jee-physics-kinematics-1d",
      subjectId: "jee-physics",
      name: "Kinematics (1D)",
      slug: "kinematics-1d",
      orderIndex: 0
    },
    {
      id: "jee-physics-rotational-motion",
      subjectId: "jee-physics",
      name: "Rotational Motion",
      slug: "rotational-motion",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-chemical-bonding",
      subjectId: "jee-chemistry",
      name: "Chemical Bonding",
      slug: "chemical-bonding",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-quadratic-equations",
      subjectId: "jee-mathematics",
      name: "Quadratic Equations",
      slug: "quadratic-equations",
      orderIndex: 0
    },
    {
      id: "jee-physics-laws-of-motion",
      subjectId: "jee-physics",
      name: "Laws of Motion & Friction",
      slug: "laws-of-motion",
      orderIndex: 2
    },
    {
      id: "jee-physics-work-energy-power",
      subjectId: "jee-physics",
      name: "Work, Energy & Power",
      slug: "work-energy-power",
      orderIndex: 3
    },
    {
      id: "jee-physics-gravitation",
      subjectId: "jee-physics",
      name: "Gravitation",
      slug: "gravitation",
      orderIndex: 4
    },
    {
      id: "jee-physics-shm-waves",
      subjectId: "jee-physics",
      name: "SHM & Waves",
      slug: "shm-waves",
      orderIndex: 5
    },
    {
      id: "jee-physics-electrostatics",
      subjectId: "jee-physics",
      name: "Electrostatics",
      slug: "electrostatics",
      orderIndex: 6
    },
    {
      id: "jee-physics-current-electricity",
      subjectId: "jee-physics",
      name: "Current Electricity",
      slug: "current-electricity",
      orderIndex: 7
    },
    {
      id: "jee-physics-magnetism-emi",
      subjectId: "jee-physics",
      name: "Magnetism & EMI",
      slug: "magnetism-emi",
      orderIndex: 8
    },
    {
      id: "jee-physics-optics",
      subjectId: "jee-physics",
      name: "Ray & Wave Optics",
      slug: "optics",
      orderIndex: 9
    },
    {
      id: "jee-physics-modern-physics",
      subjectId: "jee-physics",
      name: "Modern Physics",
      slug: "modern-physics",
      orderIndex: 10
    },
    {
      id: "jee-physics-thermodynamics",
      subjectId: "jee-physics",
      name: "Thermodynamics",
      slug: "thermodynamics",
      orderIndex: 11
    },
    {
      id: "jee-chemistry-atomic-structure",
      subjectId: "jee-chemistry",
      name: "Atomic Structure",
      slug: "atomic-structure",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-periodicity",
      subjectId: "jee-chemistry",
      name: "Periodic Table & Periodicity",
      slug: "periodicity",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-mole-concept",
      subjectId: "jee-chemistry",
      name: "Mole Concept & Stoichiometry",
      slug: "mole-concept",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-equilibrium",
      subjectId: "jee-chemistry",
      name: "Chemical & Ionic Equilibrium",
      slug: "equilibrium",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-thermodynamics",
      subjectId: "jee-chemistry",
      name: "Thermodynamics (Chemistry)",
      slug: "thermodynamics",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-goc",
      subjectId: "jee-chemistry",
      name: "GOC: Basics of Organic Chemistry",
      slug: "goc",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-hydrocarbons",
      subjectId: "jee-chemistry",
      name: "Hydrocarbons",
      slug: "hydrocarbons",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-coordination-compounds",
      subjectId: "jee-chemistry",
      name: "Coordination Compounds",
      slug: "coordination-compounds",
      orderIndex: 8
    },
    {
      id: "jee-chemistry-electrochemistry",
      subjectId: "jee-chemistry",
      name: "Electrochemistry",
      slug: "electrochemistry",
      orderIndex: 9
    },
    {
      id: "jee-chemistry-states-of-matter",
      subjectId: "jee-chemistry",
      name: "States of Matter",
      slug: "states-of-matter",
      orderIndex: 10
    },
    {
      id: "jee-mathematics-complex-numbers",
      subjectId: "jee-mathematics",
      name: "Complex Numbers",
      slug: "complex-numbers",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-sequences-series",
      subjectId: "jee-mathematics",
      name: "Sequences & Series",
      slug: "sequences-series",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-permutations-combinations",
      subjectId: "jee-mathematics",
      name: "Permutations & Combinations",
      slug: "permutations-combinations",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-binomial-theorem",
      subjectId: "jee-mathematics",
      name: "Binomial Theorem",
      slug: "binomial-theorem",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-matrices-determinants",
      subjectId: "jee-mathematics",
      name: "Matrices & Determinants",
      slug: "matrices-determinants",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-straight-lines-circles",
      subjectId: "jee-mathematics",
      name: "Straight Lines & Circles",
      slug: "straight-lines-circles",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-limits-continuity",
      subjectId: "jee-mathematics",
      name: "Limits, Continuity & Differentiability",
      slug: "limits-continuity",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-integration",
      subjectId: "jee-mathematics",
      name: "Integration",
      slug: "integration",
      orderIndex: 8
    },
    {
      id: "jee-mathematics-vectors-3d",
      subjectId: "jee-mathematics",
      name: "Vectors & 3D Geometry",
      slug: "vectors-3d",
      orderIndex: 9
    },
    {
      id: "jee-mathematics-probability",
      subjectId: "jee-mathematics",
      name: "Probability",
      slug: "probability",
      orderIndex: 10
    },
    {
      id: "jee-physics-units-dimensions",
      subjectId: "jee-physics",
      name: "Units, Dimensions & Measurement",
      slug: "units-dimensions",
      orderIndex: 12
    },
    {
      id: "jee-physics-fluid-mechanics",
      subjectId: "jee-physics",
      name: "Fluid Mechanics",
      slug: "fluid-mechanics",
      orderIndex: 13
    },
    {
      id: "jee-physics-thermal-properties",
      subjectId: "jee-physics",
      name: "Thermal Properties & Calorimetry",
      slug: "thermal-properties",
      orderIndex: 14
    },
    {
      id: "jee-physics-kinetic-theory",
      subjectId: "jee-physics",
      name: "Kinetic Theory of Gases",
      slug: "kinetic-theory",
      orderIndex: 15
    },
    {
      id: "jee-physics-elasticity-surface-tension",
      subjectId: "jee-physics",
      name: "Elasticity & Surface Tension",
      slug: "elasticity-surface-tension",
      orderIndex: 16
    },
    {
      id: "jee-physics-centre-of-mass-collisions",
      subjectId: "jee-physics",
      name: "Centre of Mass & Collisions",
      slug: "centre-of-mass-collisions",
      orderIndex: 17
    },
    {
      id: "jee-physics-electromagnetic-waves",
      subjectId: "jee-physics",
      name: "Electromagnetic Waves",
      slug: "electromagnetic-waves",
      orderIndex: 18
    },
    {
      id: "jee-physics-semiconductors",
      subjectId: "jee-physics",
      name: "Semiconductors & Logic Gates",
      slug: "semiconductors",
      orderIndex: 19
    },
    {
      id: "jee-physics-communication-systems",
      subjectId: "jee-physics",
      name: "Communication Systems",
      slug: "communication-systems",
      orderIndex: 20
    },
    {
      id: "jee-chemistry-redox-reactions",
      subjectId: "jee-chemistry",
      name: "Redox Reactions",
      slug: "redox-reactions",
      orderIndex: 11
    },
    {
      id: "jee-chemistry-solutions",
      subjectId: "jee-chemistry",
      name: "Solutions & Colligative Properties",
      slug: "solutions",
      orderIndex: 12
    },
    {
      id: "jee-chemistry-chemical-kinetics",
      subjectId: "jee-chemistry",
      name: "Chemical Kinetics",
      slug: "chemical-kinetics",
      orderIndex: 13
    },
    {
      id: "jee-chemistry-surface-chemistry",
      subjectId: "jee-chemistry",
      name: "Surface Chemistry",
      slug: "surface-chemistry",
      orderIndex: 14
    },
    {
      id: "jee-chemistry-s-block",
      subjectId: "jee-chemistry",
      name: "s-Block Elements",
      slug: "s-block",
      orderIndex: 15
    },
    {
      id: "jee-chemistry-p-block",
      subjectId: "jee-chemistry",
      name: "p-Block Elements",
      slug: "p-block",
      orderIndex: 16
    },
    {
      id: "jee-chemistry-d-f-block",
      subjectId: "jee-chemistry",
      name: "d & f Block Elements",
      slug: "d-f-block",
      orderIndex: 17
    },
    {
      id: "jee-chemistry-haloalkanes-haloarenes",
      subjectId: "jee-chemistry",
      name: "Haloalkanes & Haloarenes",
      slug: "haloalkanes-haloarenes",
      orderIndex: 18
    },
    {
      id: "jee-chemistry-alcohols-phenols-ethers",
      subjectId: "jee-chemistry",
      name: "Alcohols, Phenols & Ethers",
      slug: "alcohols-phenols-ethers",
      orderIndex: 19
    },
    {
      id: "jee-chemistry-aldehydes-ketones-acids",
      subjectId: "jee-chemistry",
      name: "Aldehydes, Ketones & Carboxylic Acids",
      slug: "aldehydes-ketones-acids",
      orderIndex: 20
    },
    {
      id: "jee-chemistry-amines",
      subjectId: "jee-chemistry",
      name: "Amines",
      slug: "amines",
      orderIndex: 21
    },
    {
      id: "jee-chemistry-biomolecules-polymers",
      subjectId: "jee-chemistry",
      name: "Biomolecules & Polymers",
      slug: "biomolecules-polymers",
      orderIndex: 22
    },
    {
      id: "jee-chemistry-metallurgy",
      subjectId: "jee-chemistry",
      name: "Metallurgy",
      slug: "metallurgy",
      orderIndex: 23
    },
    {
      id: "jee-chemistry-environmental-chemistry",
      subjectId: "jee-chemistry",
      name: "Environmental Chemistry",
      slug: "environmental-chemistry",
      orderIndex: 24
    },
    {
      id: "jee-mathematics-sets-relations-functions",
      subjectId: "jee-mathematics",
      name: "Sets, Relations & Functions",
      slug: "sets-relations-functions",
      orderIndex: 11
    },
    {
      id: "jee-mathematics-trigonometric-identities",
      subjectId: "jee-mathematics",
      name: "Trigonometric Identities",
      slug: "trigonometric-identities",
      orderIndex: 12
    },
    {
      id: "jee-mathematics-inverse-trigonometry",
      subjectId: "jee-mathematics",
      name: "Inverse Trigonometric Functions",
      slug: "inverse-trigonometry",
      orderIndex: 13
    },
    {
      id: "jee-mathematics-conic-sections",
      subjectId: "jee-mathematics",
      name: "Conic Sections",
      slug: "conic-sections",
      orderIndex: 14
    },
    {
      id: "jee-mathematics-differential-equations",
      subjectId: "jee-mathematics",
      name: "Differential Equations",
      slug: "differential-equations",
      orderIndex: 15
    },
    {
      id: "jee-mathematics-application-of-derivatives",
      subjectId: "jee-mathematics",
      name: "Application of Derivatives",
      slug: "application-of-derivatives",
      orderIndex: 16
    },
    {
      id: "jee-mathematics-area-under-curves",
      subjectId: "jee-mathematics",
      name: "Area Under Curves",
      slug: "area-under-curves",
      orderIndex: 17
    },
    {
      id: "jee-mathematics-statistics-reasoning",
      subjectId: "jee-mathematics",
      name: "Statistics & Mathematical Reasoning",
      slug: "statistics-reasoning",
      orderIndex: 18
    },
    {
      id: "jee-mathematics-heights-distances",
      subjectId: "jee-mathematics",
      name: "Heights & Distances",
      slug: "heights-distances",
      orderIndex: 19
    },
    ...jeeM2Topics
  ],
  materials: [
    {
      id: "jee-physics-kinematics-1d-m01",
      topicId: "jee-physics-kinematics-1d",
      title: "Kinematics in One Dimension",
      content: `**Kinematics** describes motion without asking what causes it. In 1D, displacement, velocity and acceleration are signed scalars along a single axis.

## Core Definitions
- **Average velocity** = total displacement / total time.
- **Instantaneous velocity** v = dx/dt; **acceleration** a = dv/dt = d²x/dt².
- **Speed** is the magnitude of velocity; distance is always ≥ |displacement|.

## Equations of Motion (constant a)
For uniform acceleration:

\`\`\`
v = u + at
s = ut + (1/2)at^2
v^2 = u^2 + 2as
s_nth = u + (a/2)(2n - 1)
\`\`\`

where **u** is initial velocity, **v** final velocity, **s** displacement and **s_nth** the distance in the n-th second.

## Free Fall
- For a body dropped from rest, u = 0 and a = **g ≈ 9.8 m/s²** downward.
- Time to reach the top of a vertical throw equals the time to fall back; speed of return equals speed of launch.

| Graph | Slope gives | Area gives |
| --- | --- | --- |
| x–t | velocity | — |
| v–t | acceleration | displacement |
| a–t | — | change in velocity |

### Key Tips
- The **slope of a position–time graph** is velocity; the **area under a velocity–time graph** is displacement.
- A negative velocity with positive acceleration means the object is **slowing down**, not speeding up.
- For motion under gravity, taking **up as positive** keeps g = −9.8 m/s² consistent throughout the problem.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-rotational-motion-m01",
      topicId: "jee-physics-rotational-motion",
      title: "Rotational Motion Essentials",
      content: `**Rotational motion** mirrors translational motion, with torque replacing force and moment of inertia replacing mass.

## Angular Quantities
- Angular displacement **θ**, angular velocity **ω = dθ/dt**, angular acceleration **α = dω/dt**.
- Linear–angular links: **v = ωr**, **a = αr**.

## Moment of Inertia (I)
\`\`\`
I = Σ m_i r_i^2
Solid sphere:   I = (2/5)MR^2
Hollow sphere:  I = (2/3)MR^2
Solid cylinder: I = (1/2)MR^2
Thin rod (centre): I = (1/12)ML^2
\`\`\`

The **parallel axis theorem**: I = I_cm + Md².

## Dynamics
- **Torque** τ = Iα = r × F.
- **Angular momentum** L = Iω; it is **conserved** when net external torque is zero (a spinning skater pulling in her arms).
- **Rotational KE** = (1/2)Iω².

| Translational | Rotational |
| --- | --- |
| F = ma | τ = Iα |
| p = mv | L = Iω |
| KE = ½mv² | KE = ½Iω² |

### Rolling Without Slipping
- The condition is **v = ωR**; total KE = (1/2)Mv² + (1/2)Iω².
- For a body rolling down an incline, **acceleration = g·sinθ / (1 + I/MR²)** — a solid sphere beats a ring because it has the smaller I/MR².`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-chemical-bonding-m01",
      topicId: "jee-chemistry-chemical-bonding",
      title: "Chemical Bonding & VSEPR",
      content: `**Chemical bonding** explains how atoms attain stable noble-gas configurations by sharing or transferring electrons.

## Types of Bonds
- **Ionic bond** — electrostatic attraction after electron transfer (e.g. NaCl); favoured by low ionisation energy and high electron affinity.
- **Covalent bond** — shared electron pairs; described by **VSEPR** and **hybridisation**.
- **Coordinate (dative) bond** — both electrons come from one atom (e.g. NH₄⁺).

## VSEPR Geometry
| Hybridisation | Electron pairs | Shape | Angle |
| --- | --- | --- | --- |
| sp | 2 | Linear | 180° |
| sp² | 3 | Trigonal planar | 120° |
| sp³ | 4 | Tetrahedral | 109.5° |
| sp³d | 5 | Trigonal bipyramidal | 90°/120° |
| sp³d² | 6 | Octahedral | 90° |

**Lone pairs** compress bond angles: water (sp³) is bent at ~104.5° because two lone pairs repel more than bond pairs.

## Key Concepts
- **Bond order** = (bonding − antibonding electrons) / 2 in **Molecular Orbital Theory**; higher bond order means shorter, stronger bonds.
- **Dipole moment** μ = q × d; symmetric molecules like CO₂ have zero net dipole despite polar bonds.
- **Hydrogen bonding** (N, O, F) explains the anomalously high boiling point of water and the structure of ice.

### Fajans' Rules
- Covalent character rises with **small cation, large anion and high charge** — predicting why AlCl₃ is more covalent than NaCl.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-quadratic-equations-m01",
      topicId: "jee-mathematics-quadratic-equations",
      title: "Quadratic Equations",
      content: `A **quadratic equation** ax² + bx + c = 0 (a ≠ 0) has at most two roots, given by the quadratic formula.

## The Formula & Discriminant
\`\`\`
x = (-b ± sqrt(D)) / (2a),  where D = b^2 - 4ac
\`\`\`

The **discriminant D** decides the nature of the roots:

| D | Nature of roots |
| --- | --- |
| D > 0 | Real and distinct |
| D = 0 | Real and equal |
| D < 0 | Complex conjugates |

If a, b, c are rational and D is a perfect square, the roots are **rational**.

## Sum and Product of Roots
For roots α and β:
- **Sum** α + β = −b/a.
- **Product** αβ = c/a.
- Equation from roots: **x² − (α + β)x + αβ = 0**.

## Useful Identities
- α² + β² = (α + β)² − 2αβ.
- |α − β| = sqrt(D) / |a|.

### Sign of the Quadratic
- If a > 0 the parabola opens **upward** (minimum); if a < 0 it opens **downward** (maximum).
- The vertex lies at **x = −b/(2a)**, giving the minimum/maximum value of the expression.
- For ax² + bx + c to be positive for all real x, we need **a > 0 and D < 0**.

### Common Roots
- If two quadratics share **both** roots, their coefficients are proportional: a₁/a₂ = b₁/b₂ = c₁/c₂.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-laws-of-motion-m01",
      topicId: "jee-physics-laws-of-motion",
      title: "Newton's Laws & Friction",
      content: `**Newton's laws** govern how forces change motion. They form the backbone of mechanics.

## The Three Laws
- **First law (inertia)**: a body stays at rest or in uniform motion unless a net external force acts.
- **Second law**: the heart of dynamics, written below.
- **Third law**: every action has an equal and opposite reaction; the pair acts on **different bodies**.

\`\`\`
F = ma           (net force)
F = dp/dt        (general form, p = mv)
Impulse J = F·t = Δp
\`\`\`

## Friction
- **Static friction** adjusts up to a maximum: f_s ≤ μ_s·N.
- **Kinetic friction** is constant once sliding: f_k = μ_k·N, with μ_k < μ_s.
- On an incline of angle θ, a block just slides when **tanθ = μ_s** (angle of repose).

| Quantity | Expression |
| --- | --- |
| Weight component along incline | mg·sinθ |
| Normal force on incline | mg·cosθ |
| Maximum static friction | μ_s·mg·cosθ |

## Key Applications
- **Tension** in a massless string is uniform throughout.
- For connected blocks pulled by force F, common **acceleration a = F / (m₁ + m₂)**.
- In a lift accelerating up, **apparent weight = m(g + a)**; in free fall it is zero (weightlessness).

### Pseudo Force
- In a **non-inertial frame** accelerating at a, add a pseudo force **−ma** on every body to apply Newton's laws.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-work-energy-power-m01",
      topicId: "jee-physics-work-energy-power",
      title: "Work, Energy & Power",
      content: `**Work** is energy transferred by a force acting through a displacement. Energy is the capacity to do work.

## Work and the Work-Energy Theorem
\`\`\`
W = F·s·cosθ        (constant force)
W = ∫ F dx          (variable force)
W_net = ΔKE = ½mv² - ½mu²
\`\`\`

The **work-energy theorem** says net work equals the change in kinetic energy.

## Energy Forms
- **Kinetic energy** KE = ½mv².
- **Gravitational PE** = mgh near the surface.
- **Spring PE** = ½kx² for a Hooke's-law spring.

## Conservation of Energy
For **conservative forces** (gravity, spring), mechanical energy is conserved:

| Force type | Path dependence | Energy stored? |
| --- | --- | --- |
| Conservative | Independent | Yes (PE defined) |
| Non-conservative (friction) | Dependent | No (dissipated) |

## Power
- **Average power** = W/t; **instantaneous power** P = F·v.
- 1 horsepower ≈ 746 W.

### Collisions
- In all collisions **momentum is conserved**.
- **Elastic**: KE also conserved; for equal masses, velocities are exchanged.
- **Coefficient of restitution e** = (relative velocity of separation)/(relative velocity of approach); e = 1 elastic, e = 0 perfectly inelastic.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-gravitation-m01",
      topicId: "jee-physics-gravitation",
      title: "Gravitation & Orbits",
      content: `**Gravitation** is the universal attractive force between masses, described by Newton's law.

## Newton's Law of Gravitation
\`\`\`
F = G·m₁·m₂ / r²       G = 6.67 × 10⁻¹¹ N·m²/kg²
g = GM / R²            (surface gravity)
\`\`\`

- **g decreases with altitude**: g_h = g(1 − 2h/R) for h << R.
- **g decreases with depth**: g_d = g(1 − d/R).

## Gravitational Potential and PE
- Potential **V = −GM/r**; potential energy **U = −GMm/r**.
- Work to move a mass between points equals the change in U.

## Orbits and Escape
\`\`\`
Orbital velocity:  v_o = sqrt(GM/r)
Escape velocity:   v_e = sqrt(2GM/R) = sqrt(2)·v_o
\`\`\`

Earth's escape velocity is about **11.2 km/s**.

## Kepler's Laws
| Law | Statement |
| --- | --- |
| First | Orbits are ellipses with the Sun at a focus |
| Second | Equal areas swept in equal times |
| Third | T² ∝ r³ |

### Satellites
- A **geostationary satellite** has a period of 24 h and orbits ~36000 km above the equator.
- Total orbital energy **E = −GMm/2r**, exactly half the potential energy.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-shm-waves-m01",
      topicId: "jee-physics-shm-waves",
      title: "SHM & Waves",
      content: `**Simple harmonic motion (SHM)** is oscillation where the restoring force is proportional to displacement and oppositely directed.

## SHM Basics
\`\`\`
F = -kx
x = A·sin(ωt + φ)
ω = sqrt(k/m),   T = 2π·sqrt(m/k)
\`\`\`

- **Velocity** v = ω·sqrt(A² − x²); maximum at the mean position.
- **Acceleration** a = −ω²x; maximum at the extremes.
- **Total energy** = ½kA² = ½mω²A², constant throughout.

## Common Oscillators
| System | Time period |
| --- | --- |
| Spring-mass | 2π·sqrt(m/k) |
| Simple pendulum | 2π·sqrt(L/g) |

## Waves
- A travelling wave: **y = A·sin(ωt − kx)**, with **v = fλ = ω/k**.
- Speed on a string **v = sqrt(T/μ)**, where μ is linear mass density.

## Superposition and Resonance
- **Beats** occur when two close frequencies superpose; beat frequency = |f₁ − f₂|.
- **Standing waves** form on fixed strings; fundamental f = v/2L.

### Doppler Effect
- Observed frequency **f' = f(v ± v_o)/(v ∓ v_s)**; pitch rises as source and observer approach.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-electrostatics-m01",
      topicId: "jee-physics-electrostatics",
      title: "Electrostatics",
      content: `**Electrostatics** studies charges at rest and the fields they create.

## Coulomb's Law
\`\`\`
F = k·q₁·q₂ / r²       k = 1/(4πε₀) ≈ 9 × 10⁹ N·m²/C²
E = F/q = kq / r²      (field of a point charge)
\`\`\`

The **electric field** is force per unit positive test charge.

## Potential and Energy
- **Potential** V = kq/r; it is a scalar and adds algebraically.
- Relation: **E = −dV/dr**.
- PE of two charges **U = kq₁q₂/r**.

## Gauss's Law
\`\`\`
Φ = ∮ E·dA = q_enclosed / ε₀
\`\`\`

| Charge distribution | Field |
| --- | --- |
| Infinite line (λ) | E = λ/(2πε₀r) |
| Infinite sheet (σ) | E = σ/(2ε₀) |
| Conductor surface | E = σ/ε₀ |

## Capacitance
- Parallel plate: **C = ε₀A/d**; energy stored **U = ½CV²**.
- A **dielectric** of constant K raises capacitance to KC₀.

### Conductors
- The field inside a conductor in equilibrium is **zero**; charge resides on the surface.
- A **dipole** of moment p in a field E feels torque **τ = pE·sinθ**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-current-electricity-m01",
      topicId: "jee-physics-current-electricity",
      title: "Current Electricity",
      content: `**Current electricity** deals with charges in motion through conductors and circuits.

## Ohm's Law and Resistance
\`\`\`
V = IR
R = ρL / A           (ρ = resistivity)
I = nAv_d·e          (drift relation)
\`\`\`

- **Resistivity** ρ rises with temperature for metals: ρ_T = ρ₀(1 + αΔT).

## Combinations
| Arrangement | Equivalent |
| --- | --- |
| Series | R = R₁ + R₂ + ... |
| Parallel | 1/R = 1/R₁ + 1/R₂ + ... |

## Power
- **Power dissipated** P = VI = I²R = V²/R.
- Electrical energy in kWh = power(kW) × time(h).

## Kirchhoff's Laws
- **Junction rule (KCL)**: ΣI_in = ΣI_out (charge conservation).
- **Loop rule (KVL)**: ΣV = 0 around a closed loop (energy conservation).

## EMF and Internal Resistance
- Terminal voltage **V = ε − I·r**; maximum power transfer when external R = internal r.

### Measuring Instruments
- A **Wheatstone bridge** is balanced when P/Q = R/S, giving an unknown resistance with no galvanometer current.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-magnetism-emi-m01",
      topicId: "jee-physics-magnetism-emi",
      title: "Magnetism & Electromagnetic Induction",
      content: `**Magnetic effects of current** and **electromagnetic induction** link electricity and magnetism.

## Magnetic Force
\`\`\`
F = q·v × B          |F| = qvB·sinθ
F = I·L × B          (force on a wire)
\`\`\`

- A charge in a uniform field moves in a circle of radius **r = mv/(qB)**.

## Sources of Magnetic Field
- **Biot-Savart / Ampere's law** give B from currents.
- Long straight wire: **B = μ₀I/(2πr)**.
- Centre of a loop: **B = μ₀I/(2R)**; solenoid: **B = μ₀nI**.

## Electromagnetic Induction
\`\`\`
EMF = -dΦ/dt          (Faraday's law)
Φ = B·A·cosθ
\`\`\`

**Lenz's law** sets the sign: the induced current opposes the change that causes it.

| Quantity | Expression |
| --- | --- |
| Motional EMF | BLv |
| Self-inductance EMF | -L·dI/dt |
| Energy in inductor | ½LI² |

### AC Circuits
- In an AC circuit, **reactance** X_L = ωL and X_C = 1/(ωC); impedance Z combines them.
- **Resonance** occurs at ω = 1/sqrt(LC), where current is maximum.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-optics-m01",
      topicId: "jee-physics-optics",
      title: "Ray & Wave Optics",
      content: `**Optics** covers how light reflects, refracts and interferes.

## Reflection and Mirrors
\`\`\`
1/v + 1/u = 1/f        (mirror formula)
m = -v/u               (magnification)
\`\`\`

For mirrors, **f = R/2**. Sign conventions follow the Cartesian rule.

## Refraction and Lenses
- **Snell's law**: n₁·sinθ₁ = n₂·sinθ₂.
- **Lens formula**: 1/v − 1/u = 1/f.
- **Lensmaker**: 1/f = (n − 1)(1/R₁ − 1/R₂).

| Element | Power | Combination |
| --- | --- | --- |
| Lens | P = 1/f (dioptres) | P = P₁ + P₂ |

- **Total internal reflection** occurs beyond the critical angle: sinθ_c = 1/n.

## Wave Optics
- **Young's double slit**: fringe width **β = λD/d**.
- Bright fringes at path difference = nλ; dark fringes at (n + ½)λ.

### Diffraction and Polarisation
- Single-slit minima at **a·sinθ = nλ**.
- **Malus's law**: I = I₀·cos²θ for polarised light through an analyser.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-modern-physics-m01",
      topicId: "jee-physics-modern-physics",
      title: "Modern Physics",
      content: `**Modern physics** introduces quantisation, the photoelectric effect and the atom.

## Photoelectric Effect
\`\`\`
E = hf = hc/λ
KE_max = hf - φ        (Einstein's equation)
\`\`\`

- **φ** is the work function; emission needs **f ≥ f₀** (threshold), independent of intensity.
- The **stopping potential** V₀ satisfies eV₀ = KE_max.

## Bohr Model of Hydrogen
| Quantity | Expression |
| --- | --- |
| Energy of level n | E_n = -13.6/n² eV |
| Radius | r_n = 0.529·n² Å |

- Spectral lines: **1/λ = R(1/n₁² − 1/n₂²)**, R = Rydberg constant.

## Matter Waves
- **de Broglie wavelength** λ = h/p = h/(mv); shows the wave nature of particles.

## Nuclear Physics
\`\`\`
E = mc²                (mass-energy)
N = N₀·e^(-λt)         (radioactive decay)
\`\`\`

- **Half-life** t½ = ln2/λ; **binding energy** per nucleon peaks near iron.

### Decay Types
- **Alpha** emits a helium nucleus; **beta** converts a neutron to a proton; **gamma** is high-energy photon emission with no mass change.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-thermodynamics-m01",
      topicId: "jee-physics-thermodynamics",
      title: "Thermodynamics & Kinetic Theory",
      content: `**Thermodynamics** relates heat, work and internal energy in systems.

## First Law
\`\`\`
ΔU = Q - W
W = ∫ P dV
\`\`\`

Internal energy **U** depends only on state; Q and W are path-dependent.

## Processes
| Process | Condition | Result |
| --- | --- | --- |
| Isothermal | T constant | ΔU = 0, Q = W |
| Adiabatic | Q = 0 | PV^γ constant |
| Isobaric | P constant | W = PΔV |
| Isochoric | V constant | W = 0 |

- For an ideal gas: **PV = nRT**.
- **γ = Cp/Cv**; Cp − Cv = R (Mayer's relation).

## Kinetic Theory
- Mean kinetic energy per molecule **= (3/2)kT**.
- **rms speed** v_rms = sqrt(3RT/M).

## Second Law and Engines
\`\`\`
Carnot efficiency: η = 1 - T_cold/T_hot
\`\`\`

### Entropy
- **Entropy** measures disorder; for any spontaneous process the total entropy of an isolated system increases.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-atomic-structure-m01",
      topicId: "jee-chemistry-atomic-structure",
      title: "Atomic Structure",
      content: `**Atomic structure** explains how electrons are arranged and how spectra arise.

## Quantum Numbers
| Symbol | Name | Meaning |
| --- | --- | --- |
| n | Principal | Shell, energy |
| l | Azimuthal | Subshell shape (0=s,1=p,2=d) |
| m | Magnetic | Orbital orientation |
| s | Spin | ±½ |

## Bohr Model and Spectra
\`\`\`
E_n = -13.6·Z²/n² eV
1/λ = R·Z²(1/n₁² - 1/n₂²)
\`\`\`

- Hydrogen's **Lyman, Balmer, Paschen** series correspond to transitions to n = 1, 2, 3.

## Filling Rules
- **Aufbau principle**: fill the lowest-energy orbitals first.
- **Pauli exclusion**: no two electrons share all four quantum numbers.
- **Hund's rule**: orbitals of a subshell fill singly before pairing.

## Dual Nature
\`\`\`
λ = h/(mv)              (de Broglie)
Δx·Δp ≥ h/(4π)          (Heisenberg uncertainty)
\`\`\`

### Key Facts
- The **(n + l) rule** orders subshell energies; for equal (n + l), lower n fills first.
- Half-filled and fully-filled subshells (e.g. **Cr: 3d⁵4s¹**) gain extra stability.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-periodicity-m01",
      topicId: "jee-chemistry-periodicity",
      title: "Periodic Table & Periodicity",
      content: `The **modern periodic law** arranges elements by increasing **atomic number**, giving recurring properties.

## Periodic Trends
| Property | Across a period | Down a group |
| --- | --- | --- |
| Atomic radius | Decreases | Increases |
| Ionisation energy | Increases | Decreases |
| Electron affinity | Increases (mostly) | Decreases |
| Electronegativity | Increases | Decreases |
| Metallic character | Decreases | Increases |

## Why the Trends
- **Effective nuclear charge (Z_eff)** rises across a period, pulling electrons closer.
- New shells dominate down a group, increasing size despite higher Z.

## Ionisation Energy
- **IE₂ > IE₁** always; large jumps reveal a noble-gas core.
- Exceptions: B < Be and O < N due to subshell stability.

## Classification
- **s-block**: groups 1-2; **p-block**: 13-18; **d-block**: transition metals; **f-block**: lanthanides and actinides.

### Anomalies
- The **lanthanide contraction** makes 4d and 5d elements of similar size (e.g. Zr and Hf).
- **Fluorine has a lower electron affinity** than chlorine due to its small, crowded 2p shell.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-mole-concept-m01",
      topicId: "jee-chemistry-mole-concept",
      title: "Mole Concept & Stoichiometry",
      content: `The **mole** is the chemist's counting unit, equal to **Avogadro's number** of particles.

## Core Relations
\`\`\`
N_A = 6.022 × 10²³
moles n = mass / molar mass = N / N_A
\`\`\`

- At **STP**, one mole of an ideal gas occupies **22.4 L**.

## Concentration Terms
| Term | Definition |
| --- | --- |
| Molarity (M) | moles solute / litre solution |
| Molality (m) | moles solute / kg solvent |
| Mole fraction | moles component / total moles |

## Stoichiometry
- Balance the equation, convert masses to moles, use **mole ratios**, then convert back.
- The **limiting reagent** is fully consumed and sets the maximum product.

## Composition
\`\`\`
% by mass = (mass of element / molar mass) × 100
Empirical formula → divide moles by smallest
Molecular formula = (empirical) × n
\`\`\`

### Concentration Tips
- **ppm** = mg solute per kg (or per litre) of solution.
- Dilution obeys **M₁V₁ = M₂V₂**; adding solvent lowers molarity but keeps moles constant.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-equilibrium-m01",
      topicId: "jee-chemistry-equilibrium",
      title: "Chemical & Ionic Equilibrium",
      content: `**Equilibrium** is the dynamic state where forward and reverse reaction rates are equal.

## Equilibrium Constant
\`\`\`
For aA + bB ⇌ cC + dD:
Kc = [C]^c[D]^d / ([A]^a[B]^b)
Kp = Kc·(RT)^Δn
\`\`\`

- A large **K** favours products; K is constant at fixed temperature.

## Le Chatelier's Principle
| Change | Shift |
| --- | --- |
| Increase reactant | Toward products |
| Increase pressure | Toward fewer gas moles |
| Increase temperature | Toward endothermic side |

## Ionic Equilibrium
- **pH = −log[H⁺]**; for water at 25°C, **K_w = [H⁺][OH⁻] = 10⁻¹⁴**.
- Weak acid: **K_a = [H⁺][A⁻]/[HA]**; pH ≈ ½(pK_a − log C).

## Buffers
\`\`\`
Henderson-Hasselbalch:  pH = pK_a + log([salt]/[acid])
\`\`\`

### Solubility
- **Solubility product K_sp** governs sparingly soluble salts; precipitation occurs when the ionic product exceeds K_sp.
- The **common-ion effect** suppresses solubility and ionisation.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-thermodynamics-m01",
      topicId: "jee-chemistry-thermodynamics",
      title: "Chemical Thermodynamics",
      content: `**Chemical thermodynamics** predicts whether a reaction is feasible and how much energy it exchanges.

## State Functions
\`\`\`
ΔU = q + w            (first law, w = -PΔV)
ΔH = ΔU + ΔnRT        (enthalpy)
\`\`\`

- **Enthalpy, entropy and Gibbs energy** are state functions; q and w are not.

## Enthalpy
| Type | Meaning |
| --- | --- |
| ΔH_f | Formation from elements |
| ΔH_c | Complete combustion |
| ΔH_neut | Acid-base neutralisation |

- **Hess's law**: ΔH of a reaction is path-independent; add step enthalpies.

## Spontaneity
\`\`\`
ΔG = ΔH - TΔS
\`\`\`

| ΔG | Process |
| --- | --- |
| < 0 | Spontaneous |
| = 0 | At equilibrium |
| > 0 | Non-spontaneous |

- Also **ΔG° = −RT·ln K**, linking thermodynamics to equilibrium.

### Entropy
- **Entropy increases** for gas-producing or disorder-increasing reactions.
- The **third law** sets the entropy of a perfect crystal at 0 K to zero.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-goc-m01",
      topicId: "jee-chemistry-goc",
      title: "GOC: Basics of Organic Chemistry",
      content: `**General Organic Chemistry (GOC)** provides the electronic principles behind organic reactivity.

## Electronic Effects
- **Inductive effect**: σ-bond polarisation; −I groups (NO₂, halogens) withdraw, +I groups (alkyl) donate.
- **Resonance (mesomeric) effect**: delocalisation of π electrons; +M donate, −M withdraw.
- **Hyperconjugation**: stabilisation by adjacent C–H σ bonds (no-bond resonance).

## Reaction Intermediates
| Intermediate | Stability order |
| --- | --- |
| Carbocation | 3° > 2° > 1° > methyl |
| Free radical | 3° > 2° > 1° > methyl |
| Carbanion | methyl > 1° > 2° > 3° |

## Acidity and Basicity
- Stronger acids give more **stable conjugate bases**; resonance and −I increase acidity.
- **Carboxylic acids > phenols > alcohols** in acidic strength.

## Isomerism
- **Structural** (chain, position, functional) versus **stereoisomerism** (geometrical, optical).
- A **chiral carbon** has four different groups and rotates plane-polarised light.

### Key Idea
- Reactive sites are classed as **electrophiles** (electron-poor) and **nucleophiles** (electron-rich); curly arrows track electron-pair movement.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-hydrocarbons-m01",
      topicId: "jee-chemistry-hydrocarbons",
      title: "Hydrocarbons",
      content: `**Hydrocarbons** contain only carbon and hydrogen and are the parent compounds of organic chemistry.

## Classes
| Class | Bonding | General formula |
| --- | --- | --- |
| Alkanes | Single | CₙH₂ₙ₊₂ |
| Alkenes | One double | CₙH₂ₙ |
| Alkynes | One triple | CₙH₂ₙ₋₂ |

## Alkanes
- Largely **unreactive**; undergo **free-radical substitution** with halogens in light.
- Combustion: CₙH₂ₙ₊₂ + O₂ gives CO₂ and H₂O.

## Alkenes and Alkynes
- Undergo **electrophilic addition** (HX, H₂O, Br₂).
- **Markovnikov's rule**: H adds to the carbon with more hydrogens; peroxides reverse it (anti-Markovnikov).

## Aromatic Hydrocarbons
- **Benzene** is planar, with delocalised π electrons obeying **Hückel's (4n + 2)** rule.
- It favours **electrophilic substitution** (nitration, halogenation, Friedel-Crafts) over addition.

### Directing Effects
- **Ortho/para directors** (−OH, −NH₂, alkyl) activate the ring; **meta directors** (−NO₂, −COOH) deactivate it.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-coordination-compounds-m01",
      topicId: "jee-chemistry-coordination-compounds",
      title: "Coordination Compounds",
      content: `**Coordination compounds** contain a central metal ion bonded to **ligands** by coordinate bonds.

## Werner's Terminology
- **Coordination number** is the number of ligand donor atoms attached to the metal.
- **Ligands** are mono-, bi- or polydentate; **chelating** ligands (en, EDTA) form rings.

## Nomenclature and Isomerism
| Isomerism | Basis |
| --- | --- |
| Ionisation | Counter-ion swaps with ligand |
| Linkage | Ambidentate ligand (NO₂/ONO) |
| Geometrical | cis / trans |
| Optical | Non-superimposable mirror images |

## Crystal Field Theory
- Ligands split the d orbitals into **t₂g and e_g** sets by an energy **Δ₀** (octahedral).
- **Strong-field ligands** (CN⁻, CO) give low-spin; **weak-field** (I⁻, Br⁻) give high-spin.

\`\`\`
CFSE depends on Δ₀ and the number of d electrons
\`\`\`

## Magnetic Behaviour
- **Spin-only moment** μ = sqrt(n(n + 2)) BM, where n is the number of unpaired electrons.

### Spectrochemical Series
- Approximate field strength: **I⁻ < Br⁻ < Cl⁻ < F⁻ < H₂O < NH₃ < en < CN⁻ < CO**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-electrochemistry-m01",
      topicId: "jee-chemistry-electrochemistry",
      title: "Electrochemistry",
      content: `**Electrochemistry** connects chemical reactions with electrical energy through redox processes.

## Cells
- A **galvanic (voltaic) cell** converts chemical energy to electrical; **oxidation at the anode**, reduction at the cathode.
- An **electrolytic cell** uses electricity to drive a non-spontaneous reaction.

## Electrode Potential
\`\`\`
E°cell = E°cathode - E°anode
Nernst:  E = E° - (0.059/n)·log Q   (at 25°C)
\`\`\`

- A higher (more positive) **standard reduction potential** means a stronger oxidising agent.

## Thermodynamics Link
\`\`\`
ΔG° = -nFE°cell        F = 96500 C/mol
E°cell = (0.059/n)·log K
\`\`\`

## Conductance
| Quantity | Symbol |
| --- | --- |
| Conductivity | κ |
| Molar conductivity | Λ_m = κ × 1000 / C |

- **Kohlrausch's law**: Λ°_m is the sum of independent ionic contributions.

### Faraday's Laws of Electrolysis
- Mass deposited **m = (Z·I·t)** where Z is the electrochemical equivalent; **96500 C** deposits one gram-equivalent.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-states-of-matter-m01",
      topicId: "jee-chemistry-states-of-matter",
      title: "States of Matter (Gases)",
      content: `The **gaseous state** is governed by simple laws relating pressure, volume and temperature.

## Gas Laws
| Law | Relation | Held constant |
| --- | --- | --- |
| Boyle | PV = const | T |
| Charles | V/T = const | P |
| Gay-Lussac | P/T = const | V |
| Avogadro | V ∝ n | P, T |

## Ideal Gas Equation
\`\`\`
PV = nRT
R = 0.0821 L·atm/(mol·K) = 8.314 J/(mol·K)
\`\`\`

- **Dalton's law**: total pressure = sum of partial pressures.

## Kinetic Molecular Theory
\`\`\`
v_rms = sqrt(3RT/M)
KE_avg = (3/2)kT per molecule
\`\`\`

- Three speeds rank as **v_mp < v_avg < v_rms**.

## Real Gases
- **van der Waals equation**: (P + an²/V²)(V − nb) = nRT corrects for attraction (a) and molecular volume (b).
- The **compressibility factor Z = PV/nRT**; Z = 1 for an ideal gas.

### Deviations
- Real gases behave most ideally at **high temperature and low pressure**, where intermolecular forces are negligible.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-complex-numbers-m01",
      topicId: "jee-mathematics-complex-numbers",
      title: "Complex Numbers",
      content: `A **complex number** z = x + iy combines a real and an imaginary part, where **i² = −1**.

## Modulus and Argument
\`\`\`
|z| = sqrt(x² + y²)
arg(z) = arctan(y/x)
z = r(cosθ + i·sinθ) = r·e^(iθ)
\`\`\`

- The **conjugate** is z̄ = x − iy, and **z·z̄ = |z|²**.

## Operations
| Operation | Result |
| --- | --- |
| Addition | Add real and imaginary parts |
| Multiplication | Multiply moduli, add arguments |
| Division | Divide moduli, subtract arguments |

## De Moivre's Theorem
\`\`\`
(cosθ + i·sinθ)^n = cos(nθ) + i·sin(nθ)
\`\`\`

- The **nth roots of unity** are equally spaced on the unit circle and sum to zero.

## Cube Roots of Unity
- They are **1, ω, ω²**, with **1 + ω + ω² = 0** and **ω³ = 1**.

### Geometry
- |z − z₀| = r is a **circle** of radius r centred at z₀.
- Multiplying by **e^(iθ)** rotates a point about the origin by angle θ.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-sequences-series-m01",
      topicId: "jee-mathematics-sequences-series",
      title: "Sequences & Series",
      content: `A **sequence** is an ordered list; a **series** is the sum of its terms.

## Arithmetic Progression (AP)
\`\`\`
nth term:  a_n = a + (n - 1)d
Sum:       S_n = (n/2)[2a + (n - 1)d]
\`\`\`

- The **arithmetic mean** of a and b is (a + b)/2.

## Geometric Progression (GP)
\`\`\`
nth term:  a_n = a·r^(n-1)
Sum:       S_n = a(rⁿ - 1)/(r - 1)
Infinite:  S = a/(1 - r),  |r| < 1
\`\`\`

- The **geometric mean** of a and b is sqrt(ab).

## Means Inequality
| Means | Relation |
| --- | --- |
| AM, GM, HM | AM ≥ GM ≥ HM |

- Equality holds only when all terms are equal; also **GM² = AM × HM**.

## Special Sums
\`\`\`
Σn = n(n + 1)/2
Σn² = n(n + 1)(2n + 1)/6
Σn³ = [n(n + 1)/2]²
\`\`\`

### Harmonic Progression
- An **HP** is a sequence whose reciprocals form an AP; there is no simple closed sum formula.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-permutations-combinations-m01",
      topicId: "jee-mathematics-permutations-combinations",
      title: "Permutations & Combinations",
      content: `**Permutations and combinations** count arrangements and selections.

## Fundamental Principle
- **Multiplication rule**: if a task has m then n independent choices, total ways = m × n.
- **Addition rule** applies to mutually exclusive options.

## Formulas
\`\`\`
nPr = n! / (n - r)!        (order matters)
nCr = n! / (r!(n - r)!)    (order does not matter)
\`\`\`

| Identity | Statement |
| --- | --- |
| nCr = nC(n−r) | Symmetry |
| nCr + nC(r−1) = (n+1)Cr | Pascal's rule |
| Σ nCr | = 2ⁿ |

## Special Cases
- Arrangements of **n objects with repeats** p, q, ...: n! / (p!·q!...).
- **Circular permutations** of n objects = (n − 1)!.

## Selections
- Choosing **at least one** from n distinct items: 2ⁿ − 1.
- Distributing identical items into groups uses the **stars and bars** method.

### Tip
- Decide first whether **order matters** (permutation) or not (combination); fix forbidden or required positions before counting the rest.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-binomial-theorem-m01",
      topicId: "jee-mathematics-binomial-theorem",
      title: "Binomial Theorem",
      content: `The **binomial theorem** expands powers of a sum into a series of terms.

## The Expansion
\`\`\`
(a + b)ⁿ = Σ (from r=0 to n) nCr · a^(n-r) · b^r
\`\`\`

- There are **n + 1 terms**; coefficients are the binomial coefficients nCr.

## General Term
\`\`\`
T_(r+1) = nCr · a^(n-r) · b^r
\`\`\`

- This locates any specific term, such as the **term independent of x** (set the power of x to zero).

## Properties
| Property | Statement |
| --- | --- |
| Sum of coefficients | Put a = b = 1, gives 2ⁿ |
| Middle term | One term if n even, two if n odd |
| Symmetry | nCr = nC(n−r) |

## Greatest Term and Coefficient
- The **greatest binomial coefficient** is the middle one(s).

## Infinite Series
\`\`\`
(1 + x)ⁿ = 1 + nx + n(n-1)x²/2! + ...   for |x| < 1
\`\`\`

### Use
- Valid for **any real index n** when |x| < 1; useful for approximations like (1 + x)ⁿ ≈ 1 + nx for small x.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-matrices-determinants-m01",
      topicId: "jee-mathematics-matrices-determinants",
      title: "Matrices & Determinants",
      content: `**Matrices** are rectangular arrays of numbers; **determinants** are scalars attached to square matrices.

## Matrix Basics
- Addition needs equal orders; **multiplication** requires inner dimensions to match and is generally **not commutative**.
- The **transpose** swaps rows and columns; (AB)ᵀ = BᵀAᵀ.

## Determinants
\`\`\`
2×2:  |A| = ad - bc
\`\`\`

| Property | Effect on |A| |
| --- | --- |
| Swap two rows | Sign changes |
| Multiply a row by k | Multiplies by k |
| Equal rows | Determinant is 0 |

## Inverse
\`\`\`
A⁻¹ = adj(A) / |A|,   exists only if |A| ≠ 0
\`\`\`

- A matrix is **singular** when |A| = 0 and has no inverse.

## Solving Systems
- **Cramer's rule**: x = Dₓ/D, provided D = |A| ≠ 0.
- For AX = B: a **unique solution** exists when |A| ≠ 0.

### Special Matrices
- **Symmetric**: Aᵀ = A; **skew-symmetric**: Aᵀ = −A (diagonal entries zero).
- For an n×n matrix, **|kA| = kⁿ|A|** and |AB| = |A|·|B|.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-straight-lines-circles-m01",
      topicId: "jee-mathematics-straight-lines-circles",
      title: "Straight Lines & Circles",
      content: `**Coordinate geometry** describes lines and circles by algebraic equations.

## Straight Lines
\`\`\`
Slope:        m = (y₂ - y₁)/(x₂ - x₁)
Point-slope:  y - y₁ = m(x - x₁)
Slope-intercept: y = mx + c
\`\`\`

| Relation | Condition |
| --- | --- |
| Parallel | m₁ = m₂ |
| Perpendicular | m₁·m₂ = −1 |

- **Distance from point to line** ax + by + c = 0: |ax₁ + by₁ + c| / sqrt(a² + b²).

## Circles
\`\`\`
Standard:  (x - h)² + (y - k)² = r²
General:   x² + y² + 2gx + 2fy + c = 0
\`\`\`

- Centre is **(−g, −f)** and radius **sqrt(g² + f² − c)**.

## Tangents
- A line is **tangent** to a circle when its distance from the centre equals the radius.
- Length of a tangent from an external point: **sqrt(S₁)**.

### Key Points
- The **angle between two lines**: tanθ = |(m₁ − m₂)/(1 + m₁m₂)|.
- Two circles **touch** when the distance between centres equals the sum (external) or difference (internal) of radii.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-limits-continuity-m01",
      topicId: "jee-mathematics-limits-continuity",
      title: "Limits, Continuity & Differentiability",
      content: `**Calculus** begins with limits, which underpin continuity and the derivative.

## Standard Limits
\`\`\`
lim (x→0) sin(x)/x = 1
lim (x→0) (e^x - 1)/x = 1
lim (x→0) (1 + x)^(1/x) = e
\`\`\`

- Indeterminate forms (0/0, ∞/∞) often yield to **L'Hopital's rule**.

## Continuity
A function is **continuous at x = a** when:

\`\`\`
lim (x→a) f(x) = f(a)
\`\`\`

| Discontinuity | Cause |
| --- | --- |
| Removable | Limit exists but ≠ f(a) |
| Jump | Left and right limits differ |
| Infinite | Limit is unbounded |

## Differentiability
- **f'(a) = lim (h→0) [f(a + h) − f(a)] / h**.
- Differentiability **implies continuity**, but not the reverse (e.g. |x| at 0).

## Rules
\`\`\`
Product:  (uv)' = u'v + uv'
Quotient: (u/v)' = (u'v - uv')/v²
Chain:    dy/dx = (dy/du)(du/dx)
\`\`\`

### Tip
- A function must be **continuous and have a unique tangent** to be differentiable; corners and cusps break differentiability.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-integration-m01",
      topicId: "jee-mathematics-integration",
      title: "Integration",
      content: `**Integration** reverses differentiation and measures accumulated quantities such as area.

## Standard Integrals
\`\`\`
∫ xⁿ dx = x^(n+1)/(n+1) + C   (n ≠ -1)
∫ (1/x) dx = ln|x| + C
∫ eˣ dx = eˣ + C
∫ sin(x) dx = -cos(x) + C
\`\`\`

## Techniques
| Method | When to use |
| --- | --- |
| Substitution | Composite functions |
| By parts | Product of unlike functions |
| Partial fractions | Rational functions |

- **Integration by parts**: ∫ u dv = uv − ∫ v du (choose u by the **ILATE** rule).

## Definite Integrals
\`\`\`
∫ (from a to b) f(x) dx = F(b) - F(a)
\`\`\`

- This is the **Fundamental Theorem of Calculus**, linking area to antiderivatives.

## Useful Properties
\`\`\`
∫ (a to b) f(x) dx = ∫ (a to b) f(a + b - x) dx
\`\`\`

### Symmetry
- For an **odd** function, ∫ (−a to a) f = 0; for an **even** function it equals 2∫ (0 to a) f.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-vectors-3d-m01",
      topicId: "jee-mathematics-vectors-3d",
      title: "Vectors & 3D Geometry",
      content: `**Vectors** carry magnitude and direction; 3D geometry locates points, lines and planes in space.

## Vector Products
\`\`\`
Dot:    a·b = |a||b|cosθ          (scalar)
Cross:  |a×b| = |a||b|sinθ        (vector, ⟂ to both)
\`\`\`

- **a·b = 0** means perpendicular; **a×b = 0** means parallel.

## Magnitude and Projection
- |a| = sqrt(a₁² + a₂² + a₃²).
- **Projection** of a on b = (a·b)/|b|.

## Triple Products
| Product | Meaning |
| --- | --- |
| Scalar triple a·(b×c) | Volume of parallelepiped |
| Coplanar vectors | Scalar triple product = 0 |

## 3D Geometry
\`\`\`
Line:   (x - x₁)/a = (y - y₁)/b = (z - z₁)/c
Plane:  ax + by + cz + d = 0
\`\`\`

- The **direction ratios** of the plane's normal are (a, b, c).

### Distances and Angles
- Distance of a point from a plane uses |ax₁ + by₁ + cz₁ + d| / sqrt(a² + b² + c²).
- The **angle between two planes** equals the angle between their normals.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-probability-m01",
      topicId: "jee-mathematics-probability",
      title: "Probability",
      content: `**Probability** measures the likelihood of events on a scale from 0 to 1.

## Basics
\`\`\`
P(E) = favourable outcomes / total outcomes
P(E) + P(E') = 1
\`\`\`

## Addition and Multiplication
| Rule | Statement |
| --- | --- |
| Addition | P(A∪B) = P(A) + P(B) − P(A∩B) |
| Mutually exclusive | P(A∩B) = 0 |
| Independent | P(A∩B) = P(A)·P(B) |

## Conditional Probability
\`\`\`
P(A|B) = P(A∩B) / P(B)
\`\`\`

- **Bayes' theorem** updates a prior using new evidence.

## Bayes' Theorem
\`\`\`
P(A|B) = P(B|A)·P(A) / P(B)
\`\`\`

## Distributions
- **Binomial**: P(X = r) = nCr·pʳ·q^(n−r), with mean **np** and variance **npq**.

### Tips
- Identify whether events are **independent or mutually exclusive** before combining them; these are different conditions and rarely both hold.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-units-dimensions-m01",
      topicId: "jee-physics-units-dimensions",
      title: "Units, Dimensions & Measurement",
      content: `**Dimensional analysis** checks equations and converts units by tracking the powers of base quantities.

## Base Quantities
The SI system has seven base units. The three mechanical ones are **mass [M], length [L] and time [T]**.

\`\`\`
Force    = [M L T^-2]
Energy   = [M L^2 T^-2]
Power    = [M L^2 T^-3]
Pressure = [M L^-1 T^-2]
\`\`\`

## Uses of Dimensions
- **Checking equations**: both sides must have identical dimensions (principle of homogeneity).
- **Deriving relations**: a quantity's dependence on others can be guessed up to a constant.
- **Unit conversion**: scale by ratios of base units.

## Significant Figures and Errors
| Quantity | Rule |
| --- | --- |
| Addition/subtraction | Keep least decimal places |
| Multiplication/division | Keep least significant figures |
| Relative error of product | Sum of relative errors |

For Z = A^p B^q / C^r, the fractional error combines as below.

\`\`\`
dZ/Z = p(dA/A) + q(dB/B) + r(dC/C)
\`\`\`

### Key Points
- **Dimensionless constants** (like 2 or pi) are invisible to dimensional analysis.
- Quantities with the **same dimensions** can be added; force and energy cannot.
- The **least count** of an instrument fixes the smallest reliable reading and the absolute error.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-fluid-mechanics-m01",
      topicId: "jee-physics-fluid-mechanics",
      title: "Fluid Mechanics",
      content: `**Fluid mechanics** studies liquids and gases at rest (statics) and in motion (dynamics).

## Pressure in Fluids
\`\`\`
P = P0 + rho*g*h        (hydrostatic pressure)
\`\`\`

- **Pascal's law**: pressure applied to a confined fluid is transmitted equally in all directions (hydraulic lift).
- **Buoyancy (Archimedes)**: upthrust = weight of displaced fluid = rho*V*g.

## Floating and Sinking
| Condition | Result |
| --- | --- |
| Object density < fluid | Floats |
| Object density = fluid | Suspended |
| Object density > fluid | Sinks |

## Fluid Dynamics
For ideal flow, the **continuity equation** conserves mass:

\`\`\`
A1*v1 = A2*v2          (continuity)
P + (1/2)rho*v^2 + rho*g*h = constant   (Bernoulli)
\`\`\`

**Bernoulli's theorem** states that faster flow means lower pressure, explaining aerofoil lift and the venturimeter.

## Viscosity
- **Stokes' law**: viscous drag F = 6*pi*eta*r*v on a small sphere.
- A sphere falling through a fluid reaches a constant **terminal velocity** when drag plus buoyancy balance weight.

### Key Points
- **Reynolds number** decides laminar versus turbulent flow.
- Streamlines crowd where speed is high; pressure there is low.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-thermal-properties-m01",
      topicId: "jee-physics-thermal-properties",
      title: "Thermal Properties & Calorimetry",
      content: `**Thermal physics** covers how matter expands, stores heat and transfers energy.

## Thermal Expansion
\`\`\`
Linear:  dL = L0 * alpha * dT
Area:    beta = 2*alpha
Volume:  gamma = 3*alpha
\`\`\`

A metal rod lengthens on heating; a hole in a plate **expands** like the surrounding material.

## Calorimetry
\`\`\`
Q = m * c * dT        (sensible heat)
Q = m * L             (latent heat)
\`\`\`

- **Specific heat c** is heat per unit mass per degree; water has an unusually high c.
- **Latent heat L** is absorbed during a phase change at constant temperature.

## Principle of Calorimetry
| Statement | Meaning |
| --- | --- |
| Heat lost = heat gained | No loss to surroundings |

## Heat Transfer
- **Conduction**: rate dQ/dt = k*A*dT/L through a solid.
- **Convection**: bulk movement of a heated fluid.
- **Radiation**: Stefan's law gives emitted power as below.

\`\`\`
P = sigma * e * A * T^4      (Stefan-Boltzmann)
\`\`\`

### Key Points
- **Newton's law of cooling**: cooling rate is proportional to the temperature excess for small differences.
- **Wien's law**: the wavelength of peak emission shifts shorter as temperature rises.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-kinetic-theory-m01",
      topicId: "jee-physics-kinetic-theory",
      title: "Kinetic Theory of Gases",
      content: `**Kinetic theory** models a gas as many tiny particles in random motion, linking pressure and temperature to molecular speeds.

## Pressure of an Ideal Gas
\`\`\`
P = (1/3) * rho * v_rms^2
P*V = (1/3) * N * m * v_rms^2
\`\`\`

## Molecular Speeds
\`\`\`
v_rms = sqrt(3*R*T / M)
v_avg = sqrt(8*R*T / (pi*M))
v_mp  = sqrt(2*R*T / M)
\`\`\`

These rank as **v_mp < v_avg < v_rms**.

## Temperature and Energy
- Average translational KE per molecule **= (3/2)*k*T**, depending only on temperature.
- The **degrees of freedom f** set the energy: (f/2)*k*T per molecule.

| Gas type | Degrees of freedom | Cv |
| --- | --- | --- |
| Monatomic | 3 | (3/2)R |
| Diatomic | 5 | (5/2)R |
| Triatomic (linear) | 7 | (7/2)R |

## Equipartition and Ratios
\`\`\`
gamma = Cp/Cv = 1 + 2/f
\`\`\`

### Key Points
- The **mean free path** grows as pressure falls and as molecular size shrinks.
- Real gases approach ideal behaviour at **low pressure and high temperature**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-elasticity-surface-tension-m01",
      topicId: "jee-physics-elasticity-surface-tension",
      title: "Elasticity & Surface Tension",
      content: `**Elasticity** describes how solids resist deformation, while **surface tension** governs liquid surfaces.

## Stress, Strain and Moduli
\`\`\`
Stress = Force / Area
Strain = change / original
Young's modulus Y = stress / strain
\`\`\`

| Modulus | Deformation |
| --- | --- |
| Young's (Y) | Length |
| Bulk (B) | Volume |
| Shear (eta) | Shape |

- **Hooke's law** holds within the elastic limit: stress is proportional to strain.
- Elastic potential energy per unit volume **= (1/2) * stress * strain**.

## Surface Tension
- **Surface tension T** is force per unit length along a liquid surface; it minimises surface area.
- Excess pressure inside a **drop** is 2T/R; inside a **soap bubble** it is 4T/R (two surfaces).

\`\`\`
Drop:   dP = 2T/R
Bubble: dP = 4T/R
\`\`\`

## Capillarity
\`\`\`
h = (2*T*cos(theta)) / (rho*g*r)
\`\`\`

A narrow tube raises water (theta < 90 degrees) but depresses mercury (theta > 90 degrees).

### Key Points
- A **steel wire is more elastic than rubber** because it returns to shape with a larger restoring stress.
- Surface tension **decreases** as temperature rises.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-centre-of-mass-collisions-m01",
      topicId: "jee-physics-centre-of-mass-collisions",
      title: "Centre of Mass & Collisions",
      content: `The **centre of mass (COM)** moves as if all mass and external force acted there.

## Locating the COM
\`\`\`
x_cm = (sum m_i * x_i) / (sum m_i)
\`\`\`

- For symmetric uniform bodies the COM lies at the **geometric centre**.
- Internal forces never shift the COM; only **external forces** do.

## Momentum Conservation
\`\`\`
p_total = sum m_i * v_i = constant   (no external force)
\`\`\`

When no external force acts, the COM moves with constant velocity even as parts move and collide.

## Collisions
| Type | Momentum | Kinetic energy |
| --- | --- | --- |
| Elastic | Conserved | Conserved |
| Inelastic | Conserved | Partly lost |
| Perfectly inelastic | Conserved | Maximum loss |

\`\`\`
e = (relative velocity of separation) / (relative velocity of approach)
\`\`\`

- **e = 1** is perfectly elastic; **e = 0** is perfectly inelastic.
- In a 1D elastic collision of **equal masses**, the bodies exchange velocities.

### Key Points
- A bursting shell's fragments still have a COM following the original parabolic path.
- For a 1D elastic collision, v1' = ((m1 - m2)*u1 + 2*m2*u2) / (m1 + m2).`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-electromagnetic-waves-m01",
      topicId: "jee-physics-electromagnetic-waves",
      title: "Electromagnetic Waves",
      content: `**Electromagnetic (EM) waves** are self-sustaining oscillations of electric and magnetic fields that travel through vacuum.

## Nature of EM Waves
- E and B fields oscillate **perpendicular to each other and to the direction of propagation** (transverse).
- They need **no medium** and travel at the speed of light in vacuum.

\`\`\`
c = 1 / sqrt(mu0 * epsilon0) = 3 x 10^8 m/s
c = E0 / B0
\`\`\`

## Energy and Momentum
\`\`\`
u_avg = (1/2)*epsilon0*E0^2
Intensity I = u_avg * c
\`\`\`

EM waves carry **momentum** and exert radiation pressure on surfaces.

## The Spectrum (increasing frequency)
| Region | Typical use |
| --- | --- |
| Radio | Communication |
| Microwave | Radar, ovens |
| Infrared | Heat sensing |
| Visible | Sight |
| Ultraviolet | Sterilisation |
| X-ray | Imaging |
| Gamma | Medical, nuclear |

## Displacement Current
- **Maxwell** added the displacement current Id = epsilon0 * d(flux_E)/dt so that Ampere's law holds in a charging capacitor.

### Key Points
- In all regions, frequency rises and **wavelength falls** while speed stays c in vacuum.
- The ratio of field amplitudes is fixed: **E0/B0 = c**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-semiconductors-m01",
      topicId: "jee-physics-semiconductors",
      title: "Semiconductors & Logic Gates",
      content: `**Semiconductors** have conductivity between metals and insulators and are the basis of all electronics.

## Intrinsic and Extrinsic
- **Intrinsic** semiconductors (pure Si, Ge) carry equal electrons and holes.
- **Doping** adds carriers: pentavalent gives **n-type** (electrons), trivalent gives **p-type** (holes).

| Type | Dopant | Majority carrier |
| --- | --- | --- |
| n-type | Phosphorus | Electrons |
| p-type | Boron | Holes |

## The p-n Junction Diode
- A **depletion region** forms at the junction with a built-in potential barrier.
- **Forward bias** lowers the barrier and conducts; **reverse bias** widens it and blocks.

\`\`\`
Forward: current flows (p to +, n to -)
Reverse: tiny saturation current only
\`\`\`

## Logic Gates
| Gate | Output is 1 when |
| --- | --- |
| AND | All inputs are 1 |
| OR | Any input is 1 |
| NOT | Input is 0 |
| NAND | Not all inputs are 1 |
| NOR | All inputs are 0 |

\`\`\`
NAND and NOR are universal gates
\`\`\`

### Key Points
- A **diode** acts as a one-way valve and is used in rectifiers.
- Raising temperature **increases** a semiconductor's conductivity, opposite to a metal.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-communication-systems-m01",
      topicId: "jee-physics-communication-systems",
      title: "Communication Systems",
      content: `**Communication systems** transmit information from a source to a destination using EM signals.

## Basic Blocks
A system has a **transmitter, a channel and a receiver**. The message is the **signal**; unwanted additions are **noise**.

## Modulation
Low-frequency signals cannot radiate efficiently, so they ride on a high-frequency **carrier**.

| Type | What varies |
| --- | --- |
| Amplitude (AM) | Carrier amplitude |
| Frequency (FM) | Carrier frequency |
| Phase (PM) | Carrier phase |

\`\`\`
Modulation index (AM): m = A_m / A_c   (kept <= 1)
\`\`\`

Over-modulation (m > 1) distorts the recovered signal.

## Propagation
| Mode | Frequency range |
| --- | --- |
| Ground wave | Low frequency |
| Sky wave | 2 to 30 MHz (ionosphere) |
| Space wave | Above 40 MHz (line of sight) |

## Antenna and Range
\`\`\`
Antenna length ~ lambda/4
Range of TV tower: d = sqrt(2*R*h)
\`\`\`

### Key Points
- **Bandwidth** is the range of frequencies a channel must carry; FM needs more than AM.
- **Line-of-sight** communication uses space waves and tall towers to extend range.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-redox-reactions-m01",
      topicId: "jee-chemistry-redox-reactions",
      title: "Redox Reactions",
      content: `**Redox reactions** involve simultaneous oxidation and reduction through electron transfer.

## Core Definitions
| Process | Electrons | Oxidation number |
| --- | --- | --- |
| Oxidation | Lost | Increases |
| Reduction | Gained | Decreases |

- The species **oxidised** is the reducing agent; the species **reduced** is the oxidising agent.

## Oxidation Number Rules
\`\`\`
Free element     : 0
H (most cases)   : +1
O (most cases)   : -2
Sum in a neutral molecule : 0
Sum in an ion    : equals its charge
\`\`\`

## Balancing
- The **ion-electron (half-reaction) method** balances mass, then charge, then combines so electrons cancel.
- In acidic medium add **H+ and H2O**; in basic medium add **OH- and H2O**.

## Types of Redox
| Type | Description |
| --- | --- |
| Combination | Elements form a compound |
| Decomposition | Compound breaks down |
| Displacement | A reactive element displaces another |
| Disproportionation | Same element both oxidised and reduced |

### Key Points
- In **disproportionation** one element in an intermediate oxidation state is simultaneously oxidised and reduced (e.g. Cl2 to Cl- and ClO-).
- A more reactive metal **displaces** a less reactive one from its salt solution.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-solutions-m01",
      topicId: "jee-chemistry-solutions",
      title: "Solutions & Colligative Properties",
      content: `A **solution** is a homogeneous mixture; **colligative properties** depend on the number of solute particles, not their nature.

## Concentration Terms
| Term | Definition |
| --- | --- |
| Molarity (M) | moles solute per litre solution |
| Molality (m) | moles solute per kg solvent |
| Mole fraction | moles part / total moles |

## Raoult's Law
\`\`\`
P_solution = X_solvent * P0_solvent
\`\`\`

- An **ideal solution** obeys Raoult's law over the whole range with no enthalpy or volume change of mixing.

## Colligative Properties
\`\`\`
Relative lowering of vapour pressure = X_solute
Boiling elevation:  dTb = i * Kb * m
Freezing depression: dTf = i * Kf * m
Osmotic pressure:    pi = i * C * R * T
\`\`\`

The **van't Hoff factor i** counts particles produced (i > 1 for dissociation, i < 1 for association).

## Why They Matter
| Property | Effect of solute |
| --- | --- |
| Vapour pressure | Lowered |
| Boiling point | Raised |
| Freezing point | Lowered |

### Key Points
- **Osmotic pressure** is the best method for large molecules (polymers) because it is measurable at low concentration.
- Adding salt **lowers the freezing point**, which is why salt melts ice on roads.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-chemical-kinetics-m01",
      topicId: "jee-chemistry-chemical-kinetics",
      title: "Chemical Kinetics",
      content: `**Chemical kinetics** studies reaction rates and the factors that control them.

## Rate and Rate Law
\`\`\`
Rate = -d[R]/dt = +d[P]/dt
Rate = k * [A]^x * [B]^y
\`\`\`

- The **order** is x + y, found experimentally, not from the balanced equation.
- The **molecularity** counts species in an elementary step and is a small whole number.

## Integrated Rate Laws
| Order | Integrated form | Half-life |
| --- | --- | --- |
| Zero | [A] = [A0] - k*t | [A0]/(2k) |
| First | ln[A] = ln[A0] - k*t | 0.693/k |

The **first-order half-life is independent of concentration**.

## Temperature Dependence
\`\`\`
k = A * exp(-Ea / (R*T))      (Arrhenius)
ln(k2/k1) = (Ea/R)*(1/T1 - 1/T2)
\`\`\`

Raising temperature increases the fraction of molecules above the **activation energy Ea**.

## Catalysis
- A **catalyst** lowers Ea by providing an alternative path; it is unchanged overall.

### Key Points
- For a first-order reaction, a plot of **ln[A] versus time** is a straight line of slope -k.
- The unit of k depends on the order: for first order it is per second.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-surface-chemistry-m01",
      topicId: "jee-chemistry-surface-chemistry",
      title: "Surface Chemistry",
      content: `**Surface chemistry** deals with phenomena at interfaces: adsorption, catalysis and colloids.

## Adsorption
- **Adsorption** is the accumulation of molecules at a surface; **absorption** is uptake throughout the bulk.

| Feature | Physisorption | Chemisorption |
| --- | --- | --- |
| Forces | van der Waals | Chemical bonds |
| Enthalpy | Low | High |
| Specificity | Low | High |
| Temperature | Favoured by low T | Needs higher T |

## Adsorption Isotherm
\`\`\`
Freundlich:  x/m = k * P^(1/n)      (n > 1)
\`\`\`

The extent of adsorption rises with pressure but levels off as the surface saturates.

## Catalysis
- **Homogeneous** catalysts share the phase of reactants; **heterogeneous** ones (solids) work via surface adsorption.
- **Enzymes** are highly specific biological catalysts.

## Colloids
| Type | Dispersed phase / medium | Example |
| --- | --- | --- |
| Sol | Solid in liquid | Paint |
| Emulsion | Liquid in liquid | Milk |
| Aerosol | Liquid in gas | Fog |

### Key Points
- The **Tyndall effect** (scattering of light) distinguishes a colloid from a true solution.
- Colloids are coagulated by adding an electrolyte; **higher ion charge** (Hardy-Schulze rule) is more effective.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-s-block-m01",
      topicId: "jee-chemistry-s-block",
      title: "s-Block Elements",
      content: `The **s-block** holds Group 1 (alkali metals) and Group 2 (alkaline earth metals), whose valence electrons are in s orbitals.

## General Character
- Highly **electropositive** and reactive; reactivity increases down each group.
- Group 1 shows the **+1** oxidation state; Group 2 shows **+2**.

| Trend (down group) | Change |
| --- | --- |
| Atomic radius | Increases |
| Ionisation energy | Decreases |
| Reactivity | Increases |

## Reactions
\`\`\`
2 Na + 2 H2O -> 2 NaOH + H2
Ca + 2 H2O -> Ca(OH)2 + H2
\`\`\`

- Alkali metals impart **characteristic flame colours** (Na yellow, K lilac, Ca brick red).

## Anomalies and Diagonal Relationship
- **Lithium** resembles magnesium, and **beryllium** resembles aluminium (diagonal relationship).
- Li and Be are the smallest, most covalent members of their groups.

## Important Compounds
| Compound | Use |
| --- | --- |
| NaOH | Soap, paper |
| Na2CO3 | Glass, washing soda |
| CaO | Cement, lime |

### Key Points
- Solubility of Group 2 **hydroxides increases** down the group, while **sulphates decrease**.
- **Sodium and potassium** are essential for nerve and muscle function in the body.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-p-block-m01",
      topicId: "jee-chemistry-p-block",
      title: "p-Block Elements",
      content: `The **p-block** spans Groups 13 to 18, where the differentiating electron enters a p orbital.

## General Features
- Contains **metals, metalloids and non-metals**; non-metallic character rises across a period.
- The **inert pair effect** makes lower oxidation states more stable for heavier members (e.g. Pb(+2) over Pb(+4)).

| Group | Family | Common oxidation states |
| --- | --- | --- |
| 13 | Boron | +3 (and +1 for heavy) |
| 14 | Carbon | +4, +2 |
| 15 | Nitrogen | -3 to +5 |
| 16 | Oxygen | -2 to +6 |
| 17 | Halogens | -1 to +7 |
| 18 | Noble gases | mostly 0 |

## Notable Trends
- **Halogens** are the most reactive non-metals; oxidising power decreases F2 > Cl2 > Br2 > I2.
- **Nitrogen** forms strong p-pi bonds, so it is a diatomic gas, while phosphorus is solid.

## Important Compounds
\`\`\`
NH3, HNO3 (nitrogen)
H2SO4 (sulphur)
\`\`\`

| Oxide | Nature |
| --- | --- |
| CO2, SO2 | Acidic |
| Al2O3 | Amphoteric |

### Key Points
- **Catenation** (self-linking) is strongest for carbon, giving its vast organic chemistry.
- Noble gases are stable due to **completely filled** valence shells.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-d-f-block-m01",
      topicId: "jee-chemistry-d-f-block",
      title: "d & f Block Elements",
      content: `The **d-block** (transition metals) and **f-block** (lanthanides and actinides) feature partially filled inner orbitals.

## Characteristic Properties
- **Variable oxidation states** from involvement of both (n-1)d and ns electrons.
- Many ions are **coloured** due to d-d electronic transitions.
- They are good **catalysts** and form complex ions readily.

| Property | Reason |
| --- | --- |
| Colour | d-d transitions |
| Paramagnetism | Unpaired d electrons |
| Catalytic activity | Variable oxidation states |

## Magnetic Moment
\`\`\`
mu = sqrt(n*(n + 2)) BM     (n = unpaired electrons)
\`\`\`

## Lanthanide Contraction
- A steady **decrease in size** across the lanthanides due to poor 4f shielding.
- It makes second and third transition series of similar size (Zr and Hf).

## Important Facts
| Element/ion | Note |
| --- | --- |
| Zn2+ | Colourless (d10, no d-d) |
| Mn (+7) | Strong oxidiser (KMnO4) |
| Cr (+6) | Oxidiser (K2Cr2O7) |

### Key Points
- A **colourless** transition ion usually has a fully filled or empty d subshell.
- **Actinides** are radioactive and show more oxidation states than lanthanides.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-haloalkanes-haloarenes-m01",
      topicId: "jee-chemistry-haloalkanes-haloarenes",
      title: "Haloalkanes & Haloarenes",
      content: `**Haloalkanes and haloarenes** have halogens bonded to sp3 carbon and aromatic rings respectively.

## Nature of the C-X Bond
- The **C-X bond is polar**; carbon is electrophilic and open to nucleophilic attack.
- Bond strength order: **C-F > C-Cl > C-Br > C-I**, so iodides are most reactive.

## Nucleophilic Substitution
| Mechanism | Rate law | Stereochemistry |
| --- | --- | --- |
| SN1 | Rate = k[RX] | Racemisation |
| SN2 | Rate = k[RX][Nu] | Inversion |

\`\`\`
SN1: favoured by 3 degrees C and polar protic solvent
SN2: favoured by 1 degree C and polar aprotic solvent
\`\`\`

- **SN2** gives Walden inversion (umbrella flip); **SN1** goes through a planar carbocation.

## Elimination
- The **E2/E1** routes give alkenes; **Saytzeff's rule** favours the more substituted alkene.

## Haloarenes
- Aryl halides resist substitution because of **partial double-bond character** and ring electron density.

### Key Points
- The **order of SN2 reactivity** is methyl > 1 degree > 2 degrees > 3 degrees (steric hindrance).
- **Grignard reagents** (RMgX) are powerful nucleophiles made from haloalkanes.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-alcohols-phenols-ethers-m01",
      topicId: "jee-chemistry-alcohols-phenols-ethers",
      title: "Alcohols, Phenols & Ethers",
      content: `**Alcohols (R-OH)**, **phenols (Ar-OH)** and **ethers (R-O-R')** share an oxygen functional group but differ widely in reactivity.

## Acidity
- **Phenols are far more acidic than alcohols** because the phenoxide ion is resonance-stabilised.
- Order: carboxylic acid > phenol > water > alcohol.

\`\`\`
Phenol: pKa ~ 10
Ethanol: pKa ~ 16
\`\`\`

## Classification of Alcohols
| Type | Carbon bearing OH |
| --- | --- |
| Primary | Attached to one C |
| Secondary | Attached to two C |
| Tertiary | Attached to three C |

## Reactions
- **Oxidation**: 1 degree alcohol to aldehyde to acid; 2 degrees to ketone; 3 degrees resists.
- **Dehydration** with acid gives alkenes (E1).
- **Lucas test** (HCl/ZnCl2) distinguishes alcohols by reaction speed (3 degrees fastest).

## Ethers
- Ethers are **fairly inert** but cleave with hot HI.

### Key Points
- Phenol gives a **violet colour** with neutral FeCl3, a classic test.
- The **Williamson synthesis** (alkoxide + haloalkane) is the best route to ethers.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-aldehydes-ketones-acids-m01",
      topicId: "jee-chemistry-aldehydes-ketones-acids",
      title: "Aldehydes, Ketones & Carboxylic Acids",
      content: `**Aldehydes (R-CHO), ketones (R-CO-R') and carboxylic acids (R-COOH)** all contain the polar carbonyl group.

## The Carbonyl Group
- The **C=O carbon is electrophilic**, so it undergoes **nucleophilic addition**.
- Aldehydes are more reactive than ketones (less steric hindrance, less +I).

## Key Reactions
\`\`\`
Nucleophilic addition: HCN, NaHSO3, alcohols
Aldol condensation: alpha-H compounds + base
\`\`\`

| Test | Positive for |
| --- | --- |
| Tollens (silver mirror) | Aldehydes |
| Fehling | Aliphatic aldehydes |
| Iodoform | Methyl ketones, ethanal |

- The **aldol reaction** needs an alpha-hydrogen; **Cannizzaro** occurs for aldehydes without alpha-H.

## Carboxylic Acids
- Acidity is enhanced by **electron-withdrawing groups** (Cl3C-COOH is very strong).
- The **carboxylate ion** is resonance-stabilised over two equivalent oxygens.

\`\`\`
Acidity: HCOOH > CH3COOH (alkyl is +I, weakens)
\`\`\`

### Key Points
- Only **aldehydes** give the Tollens silver mirror, distinguishing them from ketones.
- A **methyl ketone** gives a positive iodoform (yellow precipitate) test.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-amines-m01",
      topicId: "jee-chemistry-amines",
      title: "Amines",
      content: `**Amines** are derivatives of ammonia in which one or more hydrogens are replaced by alkyl or aryl groups.

## Classification
| Type | Structure |
| --- | --- |
| Primary | R-NH2 |
| Secondary | R2-NH |
| Tertiary | R3-N |

## Basicity
- Amines are **basic** because of the lone pair on nitrogen.
- In the gas phase basicity follows 3 degrees > 2 degrees > 1 degree; in water, solvation makes **2 degrees often most basic** among alkylamines.
- **Aromatic amines (aniline) are weaker bases** because the lone pair is delocalised into the ring.

\`\`\`
Basicity (aqueous): alkylamine > NH3 > aniline
\`\`\`

## Key Reactions
- **Diazotisation**: 1 degree aromatic amine + HNO2 at 0-5 C gives a diazonium salt.
- Diazonium salts undergo **coupling** to form azo dyes and substitution (Sandmeyer).

| Test | Result |
| --- | --- |
| Carbylamine | 1 degree amine gives foul isocyanide |
| Hinsberg | Distinguishes 1, 2, 3 degrees amines |

### Key Points
- The **carbylamine test** is specific to primary amines (foul-smelling isocyanide).
- **Diazonium salts** are versatile intermediates for introducing many groups onto the ring.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-biomolecules-polymers-m01",
      topicId: "jee-chemistry-biomolecules-polymers",
      title: "Biomolecules & Polymers",
      content: `**Biomolecules** build living systems; **polymers** are large molecules made of repeating units.

## Carbohydrates
- **Monosaccharides** (glucose, fructose) cannot be hydrolysed further.
- **Glucose** is an aldohexose; **starch and cellulose** are polysaccharides of glucose.

| Class | Example |
| --- | --- |
| Mono | Glucose |
| Di | Sucrose |
| Poly | Starch, cellulose |

## Proteins
- Built from **alpha-amino acids** joined by **peptide bonds (-CO-NH-)**.
- Structure levels: primary (sequence), secondary (helix/sheet), tertiary, quaternary.
- Heat causes **denaturation**, losing function while keeping the primary sequence.

## Nucleic Acids
- **DNA and RNA** store and transfer genetic information; bases pair A-T(U) and G-C.

## Polymers
| Type | Example | Bonding |
| --- | --- | --- |
| Addition | Polythene | Chain growth |
| Condensation | Nylon-6,6 | Step growth |

\`\`\`
Natural rubber: polymer of isoprene
\`\`\`

### Key Points
- **Vitamins** are micronutrients; A, D, E, K are fat-soluble while B and C are water-soluble.
- **Nylon and terylene** are condensation polymers that release a small molecule on each linkage.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-metallurgy-m01",
      topicId: "jee-chemistry-metallurgy",
      title: "Metallurgy",
      content: `**Metallurgy** is the science of extracting and refining metals from their ores.

## Steps of Extraction
1. **Concentration** of the ore (removing gangue).
2. **Reduction** of the oxide to the metal.
3. **Refining** to high purity.

## Concentration Methods
| Method | Used for |
| --- | --- |
| Froth flotation | Sulphide ores |
| Magnetic separation | Magnetic ores |
| Leaching | Bauxite, gold |

## Reduction
\`\`\`
Roasting:  sulphide + O2 -> oxide + SO2
Calcination: carbonate -> oxide + CO2
\`\`\`

- **Ellingham diagrams** show which reducing agent can reduce an oxide at a given temperature.
- A metal lower in the diagram reduces the oxide of a metal above it.

## Refining
| Technique | Example |
| --- | --- |
| Electrolytic | Copper, aluminium |
| Zone refining | Silicon, germanium |
| Vapour phase | Nickel (Mond process) |

### Key Points
- **Aluminium** is obtained by electrolysis of molten alumina (Hall-Heroult process).
- **Zone refining** exploits that impurities prefer the molten zone, giving ultrapure semiconductors.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-environmental-chemistry-m01",
      topicId: "jee-chemistry-environmental-chemistry",
      title: "Environmental Chemistry",
      content: `**Environmental chemistry** studies pollutants and the chemical processes in air, water and soil.

## Air Pollution
| Pollutant | Source / effect |
| --- | --- |
| CO | Incomplete combustion; binds haemoglobin |
| SO2, NOx | Burning fuel; acid rain |
| CFCs | Aerosols; ozone depletion |

\`\`\`
Acid rain: SO2, NO2 + H2O -> H2SO4, HNO3
\`\`\`

## The Ozone Layer
- Stratospheric **ozone (O3)** absorbs harmful UV.
- **CFCs release chlorine atoms** that catalytically destroy ozone, forming the ozone hole.

## Greenhouse Effect
- Gases such as **CO2, CH4 and water vapour** trap infrared and warm the planet.
- Excess emissions cause **global warming** and climate change.

## Water Pollution
| Indicator | Meaning |
| --- | --- |
| BOD | Oxygen demand of microbes; high BOD = polluted |
| DO | Dissolved oxygen; low DO harms aquatic life |

### Key Points
- **Eutrophication** from fertiliser runoff causes algal blooms that deplete dissolved oxygen.
- **Green chemistry** designs processes that prevent waste and use safer reagents.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-sets-relations-functions-m01",
      topicId: "jee-mathematics-sets-relations-functions",
      title: "Sets, Relations & Functions",
      content: `**Sets** group objects; **relations** pair elements; **functions** assign exactly one output to each input.

## Set Operations
\`\`\`
n(A union B) = n(A) + n(B) - n(A intersection B)
\`\`\`

| Operation | Meaning |
| --- | --- |
| Union | In A or B |
| Intersection | In both A and B |
| Difference A - B | In A but not B |
| Complement | Not in A |

## Relations
- A **relation** from A to B is a subset of A x B.
- An **equivalence relation** is reflexive, symmetric and transitive.

## Functions
| Type | Property |
| --- | --- |
| One-one (injective) | Distinct inputs give distinct outputs |
| Onto (surjective) | Every codomain element is hit |
| Bijective | Both one-one and onto |

\`\`\`
Number of functions from A (m elements) to B (n) = n^m
\`\`\`

- Only a **bijective** function has an inverse.

## Composition
- (f o g)(x) = f(g(x)); composition is **associative but not commutative**.

### Key Points
- For a finite set with n elements, the **power set** has 2^n subsets.
- **(f o g)** and **(g o f)** are generally different functions.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-trigonometric-identities-m01",
      topicId: "jee-mathematics-trigonometric-identities",
      title: "Trigonometric Identities",
      content: `**Trigonometric identities** relate the ratios sine, cosine and tangent for all angles.

## Fundamental Identities
\`\`\`
sin^2(x) + cos^2(x) = 1
1 + tan^2(x) = sec^2(x)
1 + cot^2(x) = csc^2(x)
\`\`\`

## Compound Angles
\`\`\`
sin(A + B) = sinA*cosB + cosA*sinB
cos(A + B) = cosA*cosB - sinA*sinB
tan(A + B) = (tanA + tanB) / (1 - tanA*tanB)
\`\`\`

## Double and Half Angles
\`\`\`
sin(2A) = 2*sinA*cosA
cos(2A) = 1 - 2*sin^2(A) = 2*cos^2(A) - 1
tan(2A) = 2*tanA / (1 - tan^2(A))
\`\`\`

## Standard Values
| Angle | sin | cos |
| --- | --- | --- |
| 0 | 0 | 1 |
| 30 | 1/2 | sqrt(3)/2 |
| 45 | sqrt(2)/2 | sqrt(2)/2 |
| 60 | sqrt(3)/2 | 1/2 |
| 90 | 1 | 0 |

### Key Points
- The general solution of **sin(x) = 0** is x = n*pi; of **cos(x) = 0** is x = (2n+1)*pi/2.
- **Product-to-sum** formulas convert sinA*cosB and similar products into sums for easy integration.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-inverse-trigonometry-m01",
      topicId: "jee-mathematics-inverse-trigonometry",
      title: "Inverse Trigonometric Functions",
      content: `**Inverse trigonometric functions** return the angle whose ratio is given, on a restricted principal range.

## Principal Value Ranges
| Function | Range |
| --- | --- |
| arcsin(x) | [-pi/2, pi/2] |
| arccos(x) | [0, pi] |
| arctan(x) | (-pi/2, pi/2) |

## Key Identities
\`\`\`
arcsin(x) + arccos(x) = pi/2
arctan(x) + arccot(x) = pi/2
arcsec(x) + arccsc(x) = pi/2
\`\`\`

## Sum Formula
\`\`\`
arctan(x) + arctan(y) = arctan((x + y)/(1 - x*y)),  if x*y < 1
\`\`\`

When x*y > 1 a correction of pi (or -pi) is added depending on signs.

## Useful Conversions
\`\`\`
2*arctan(x) = arcsin(2x/(1 + x^2)) = arccos((1 - x^2)/(1 + x^2))
\`\`\`

## Properties
- arcsin(-x) = -arcsin(x) (odd); arccos(-x) = pi - arccos(x).

### Key Points
- Always check the **principal range** before simplifying; arcsin(sin(x)) need not equal x.
- The derivative of **arctan(x)** is 1/(1 + x^2), a key integration result.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-conic-sections-m01",
      topicId: "jee-mathematics-conic-sections",
      title: "Conic Sections",
      content: `**Conic sections** are curves from slicing a cone: the parabola, ellipse and hyperbola, defined by eccentricity e.

## Eccentricity
| Conic | Eccentricity |
| --- | --- |
| Circle | e = 0 |
| Ellipse | 0 < e < 1 |
| Parabola | e = 1 |
| Hyperbola | e > 1 |

## Parabola
\`\`\`
y^2 = 4*a*x
Focus: (a, 0)   Directrix: x = -a
Latus rectum length: 4a
\`\`\`

## Ellipse
\`\`\`
x^2/a^2 + y^2/b^2 = 1,  a > b
b^2 = a^2*(1 - e^2)
Foci: (+-a*e, 0)
\`\`\`

The sum of distances from any point to the **two foci is constant (2a)**.

## Hyperbola
\`\`\`
x^2/a^2 - y^2/b^2 = 1
b^2 = a^2*(e^2 - 1)
Asymptotes: y = +-(b/a)*x
\`\`\`

The **difference** of focal distances is constant (2a).

### Key Points
- The **latus rectum** of an ellipse and hyperbola is 2*b^2/a.
- For a parabola **y^2 = 4ax**, a point on it is (a*t^2, 2*a*t) in parametric form.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-differential-equations-m01",
      topicId: "jee-mathematics-differential-equations",
      title: "Differential Equations",
      content: `A **differential equation** relates a function to its derivatives; solving one recovers the family of functions.

## Order and Degree
- **Order** is the highest derivative present; **degree** is its power after clearing radicals.

## Variable Separable
\`\`\`
dy/dx = f(x)*g(y)  ->  integral dy/g(y) = integral f(x) dx
\`\`\`

## Linear First Order
\`\`\`
dy/dx + P(x)*y = Q(x)
Integrating factor I.F. = exp(integral P dx)
Solution: y*(I.F.) = integral Q*(I.F.) dx + C
\`\`\`

## Homogeneous Equations
- A function f(x, y) is homogeneous of degree n if **f(t*x, t*y) = t^n * f(x, y)**.
- Substitute **y = v*x** to make the equation separable.

| Type | Method |
| --- | --- |
| Separable | Move variables to opposite sides |
| Linear | Integrating factor |
| Homogeneous | Substitute y = v*x |

### Key Points
- A general solution of an order-n equation contains **n arbitrary constants**.
- The **integrating factor** turns a linear equation into an exact derivative for direct integration.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-application-of-derivatives-m01",
      topicId: "jee-mathematics-application-of-derivatives",
      title: "Application of Derivatives",
      content: `The **derivative** measures instantaneous rate of change and reveals the shape of a curve.

## Tangents and Normals
\`\`\`
Slope of tangent at x = a : f'(a)
Slope of normal : -1/f'(a)
\`\`\`

## Rate of Change
- If two quantities are related, differentiating with respect to time links their rates (**related rates**).

## Increasing and Decreasing
| Condition | Behaviour |
| --- | --- |
| f'(x) > 0 | Increasing |
| f'(x) < 0 | Decreasing |
| f'(x) = 0 | Stationary point |

## Maxima and Minima
\`\`\`
First derivative: f'(x) = 0 at a critical point
Second derivative test:
  f''(x) > 0 -> local minimum
  f''(x) < 0 -> local maximum
\`\`\`

- Check **endpoints** as well for the absolute maximum on a closed interval.

## Approximation
\`\`\`
dy ~ f'(x)*dx       (small change)
\`\`\`

### Key Points
- At a point of **inflection** the second derivative changes sign and concavity flips.
- A stationary point with **f''(x) = 0** needs higher-order tests to classify.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-area-under-curves-m01",
      topicId: "jee-mathematics-area-under-curves",
      title: "Area Under Curves",
      content: `**Definite integration** computes the area enclosed between curves and the axes.

## Area Below a Curve
\`\`\`
Area = integral from a to b of f(x) dx   (f(x) >= 0)
\`\`\`

- If the curve dips **below the x-axis**, the integral is negative there, so take the modulus for physical area.

## Area Between Two Curves
\`\`\`
Area = integral from a to b of (y_upper - y_lower) dx
\`\`\`

The limits a and b are the **x-coordinates of intersection** of the two curves.

## With Respect to y
\`\`\`
Area = integral from c to d of (x_right - x_left) dy
\`\`\`

Choose dy strips when the curves are easier to express as x = g(y).

## Common Results
| Region | Area |
| --- | --- |
| Circle radius r | pi*r^2 |
| Ellipse a, b | pi*a*b |

### Key Points
- Always **sketch the region** and find intersection points before integrating.
- For symmetric regions, integrate over **half** and double to simplify the work.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-statistics-reasoning-m01",
      topicId: "jee-mathematics-statistics-reasoning",
      title: "Statistics & Mathematical Reasoning",
      content: `**Statistics** summarises data; **mathematical reasoning** handles the logic of statements.

## Measures of Central Tendency
| Measure | Definition |
| --- | --- |
| Mean | Sum / number of values |
| Median | Middle value when ordered |
| Mode | Most frequent value |

## Dispersion
\`\`\`
Variance = (sum (x_i - mean)^2) / n
Standard deviation = sqrt(Variance)
\`\`\`

- The **standard deviation** has the same units as the data; variance is its square.

## Mathematical Reasoning
| Term | Meaning |
| --- | --- |
| Conjunction (and) | True only if both true |
| Disjunction (or) | True if at least one true |
| Negation (not) | Reverses truth value |
| Implication (if p then q) | False only when p true, q false |

\`\`\`
Contrapositive of (p -> q) is (not q -> not p), logically equivalent
\`\`\`

### Key Points
- The **contrapositive** of a statement is always equivalent to it; the converse is not.
- A statement is **a tautology** if it is true for all truth values of its components.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-heights-distances-m01",
      topicId: "jee-mathematics-heights-distances",
      title: "Heights & Distances",
      content: `**Heights and distances** apply trigonometry to measure inaccessible lengths using angles.

## Angles of Elevation and Depression
- The **angle of elevation** is measured upward from the horizontal to an object above.
- The **angle of depression** is measured downward from the horizontal to an object below.
- These two angles are **equal** (alternate angles) for the same line of sight.

## Basic Right-Triangle Relations
\`\`\`
tan(theta) = opposite / adjacent = height / base
sin(theta) = opposite / hypotenuse
cos(theta) = adjacent / hypotenuse
\`\`\`

## Standard Setup
For an object of height h observed at angle theta from distance d:

\`\`\`
h = d * tan(theta)
\`\`\`

| Angle | tan value |
| --- | --- |
| 30 | 1/sqrt(3) |
| 45 | 1 |
| 60 | sqrt(3) |

## Two-Observation Problems
- Observing the same top from **two points** gives two equations to eliminate the unknown distance.

### Key Points
- At an elevation of **45 degrees**, the height equals the horizontal distance.
- Always draw a clear **right-angled diagram** and label the known angle and side first.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    ...jeeM2Materials
  ],
  questions: [
    {
      id: "jee-physics-kinematics-1d-q01",
      topicId: "jee-physics-kinematics-1d",
      text: "A body starts from rest and accelerates at 2 m/s². How far does it travel in 5 s?",
      optionA: "20 m",
      optionB: "25 m",
      optionC: "50 m",
      optionD: "10 m",
      correctOption: "B",
      explanation: "s = ut + ½at² = 0 + ½(2)(25) = 25 m.",
      orderIndex: 0
    },
    {
      id: "jee-physics-kinematics-1d-q02",
      topicId: "jee-physics-kinematics-1d",
      text: "A stone is dropped from rest. Its velocity after 3 s (g = 10 m/s²) is:",
      optionA: "10 m/s",
      optionB: "30 m/s",
      optionC: "20 m/s",
      optionD: "45 m/s",
      correctOption: "B",
      explanation: "v = u + gt = 0 + 10 × 3 = 30 m/s.",
      orderIndex: 1
    },
    {
      id: "jee-physics-kinematics-1d-q03",
      topicId: "jee-physics-kinematics-1d",
      text: "The area under a velocity–time graph represents:",
      optionA: "Acceleration",
      optionB: "Displacement",
      optionC: "Jerk",
      optionD: "Average speed",
      correctOption: "B",
      explanation: "Integrating velocity over time gives displacement, which is the area under the v–t curve.",
      orderIndex: 2
    },
    {
      id: "jee-physics-kinematics-1d-q04",
      topicId: "jee-physics-kinematics-1d",
      text: "A car moving at 20 m/s decelerates uniformly and stops in 100 m. The deceleration is:",
      optionA: "2 m/s²",
      optionB: "10 m/s²",
      optionC: "1 m/s²",
      optionD: "4 m/s²",
      correctOption: "A",
      explanation: "Using v² = u² + 2as: 0 = 400 + 2a(100), so a = −2 m/s².",
      orderIndex: 3
    },
    {
      id: "jee-physics-kinematics-1d-q05",
      topicId: "jee-physics-kinematics-1d",
      text: "The distance covered in the n-th second by a body from rest with acceleration a is:",
      optionA: "(a/2)(2n − 1)",
      optionB: "an",
      optionC: "½an²",
      optionD: "a(n − 1)",
      correctOption: "A",
      explanation: "s_nth = u + (a/2)(2n − 1); with u = 0 it reduces to (a/2)(2n − 1).",
      orderIndex: 4
    },
    {
      id: "jee-physics-kinematics-1d-q06",
      topicId: "jee-physics-kinematics-1d",
      text: "A ball thrown vertically up with 20 m/s reaches a maximum height of (g = 10 m/s²):",
      optionA: "20 m",
      optionB: "10 m",
      optionC: "30 m",
      optionD: "40 m",
      correctOption: "A",
      explanation: "At the top v = 0, so h = u²/2g = 400/20 = 20 m.",
      orderIndex: 5
    },
    {
      id: "jee-physics-kinematics-1d-q07",
      topicId: "jee-physics-kinematics-1d",
      text: "If velocity is negative and acceleration is positive, the body is:",
      optionA: "Slowing down",
      optionB: "Speeding up",
      optionC: "At rest",
      optionD: "Moving at constant speed",
      correctOption: "A",
      explanation: "Opposite signs of v and a mean the speed (magnitude) is decreasing.",
      orderIndex: 6
    },
    {
      id: "jee-physics-kinematics-1d-q08",
      topicId: "jee-physics-kinematics-1d",
      text: "Two balls are dropped 1 s apart from the same height. As they fall, the gap between them:",
      optionA: "Stays constant",
      optionB: "Decreases",
      optionC: "First increases then decreases",
      optionD: "Increases",
      correctOption: "D",
      explanation: "The earlier ball is always faster, so the separation grows with time.",
      orderIndex: 7
    },
    {
      id: "jee-physics-rotational-motion-q01",
      topicId: "jee-physics-rotational-motion",
      text: "The moment of inertia of a solid sphere about a diameter is:",
      optionA: "MR²",
      optionB: "(2/5)MR²",
      optionC: "(1/2)MR²",
      optionD: "(2/3)MR²",
      correctOption: "B",
      explanation: "A uniform solid sphere has I = (2/5)MR² about any diameter.",
      orderIndex: 0
    },
    {
      id: "jee-physics-rotational-motion-q02",
      topicId: "jee-physics-rotational-motion",
      text: "The rotational analogue of force is:",
      optionA: "Momentum",
      optionB: "Torque",
      optionC: "Impulse",
      optionD: "Power",
      correctOption: "B",
      explanation: "Torque τ = Iα plays the role of force F = ma in rotation.",
      orderIndex: 1
    },
    {
      id: "jee-physics-rotational-motion-q03",
      topicId: "jee-physics-rotational-motion",
      text: "A skater pulls in her arms while spinning. Her angular velocity:",
      optionA: "Stays the same",
      optionB: "Decreases",
      optionC: "Increases",
      optionD: "Becomes zero",
      correctOption: "C",
      explanation: "With torque zero, L = Iω is conserved; reducing I increases ω.",
      orderIndex: 2
    },
    {
      id: "jee-physics-rotational-motion-q04",
      topicId: "jee-physics-rotational-motion",
      text: "Which body reaches the bottom of an incline first while rolling without slipping?",
      optionA: "Solid sphere",
      optionB: "Hollow sphere",
      optionC: "Ring",
      optionD: "Hollow cylinder",
      correctOption: "A",
      explanation: "The solid sphere has the smallest I/MR² (2/5), giving the largest acceleration.",
      orderIndex: 3
    },
    {
      id: "jee-physics-rotational-motion-q05",
      topicId: "jee-physics-rotational-motion",
      text: "The parallel axis theorem states I = :",
      optionA: "I_cm − Md²",
      optionB: "I_cm + Md²",
      optionC: "I_cm + ½Md²",
      optionD: "2I_cm + Md²",
      correctOption: "B",
      explanation: "I about a parallel axis equals the centre-of-mass value plus Md².",
      orderIndex: 4
    },
    {
      id: "jee-physics-rotational-motion-q06",
      topicId: "jee-physics-rotational-motion",
      text: "For rolling without slipping, the velocity of the contact point with the ground is:",
      optionA: "Zero",
      optionB: "v/2",
      optionC: "2v",
      optionD: "v",
      correctOption: "A",
      explanation: "In pure rolling, the instantaneous velocity of the contact point is zero.",
      orderIndex: 5
    },
    {
      id: "jee-physics-rotational-motion-q07",
      topicId: "jee-physics-rotational-motion",
      text: "The rotational kinetic energy of a body is:",
      optionA: "½Iω²",
      optionB: "Iω²",
      optionC: "½Iω",
      optionD: "½I²ω",
      correctOption: "A",
      explanation: "Rotational KE = ½Iω², analogous to ½mv² for translation.",
      orderIndex: 6
    },
    {
      id: "jee-physics-rotational-motion-q08",
      topicId: "jee-physics-rotational-motion",
      text: "A disc of moment of inertia 2 kg·m² spins at 3 rad/s. Its angular momentum is:",
      optionA: "3 kg·m²/s",
      optionB: "9 kg·m²/s",
      optionC: "6 kg·m²/s",
      optionD: "5 kg·m²/s",
      correctOption: "C",
      explanation: "L = Iω = 2 × 3 = 6 kg·m²/s.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-chemical-bonding-q01",
      topicId: "jee-chemistry-chemical-bonding",
      text: "The shape of a molecule with sp³ hybridisation and no lone pairs is:",
      optionA: "Trigonal planar",
      optionB: "Tetrahedral",
      optionC: "Linear",
      optionD: "Octahedral",
      correctOption: "B",
      explanation: "Four equivalent sp³ orbitals point to the corners of a tetrahedron (109.5°).",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-chemical-bonding-q02",
      topicId: "jee-chemistry-chemical-bonding",
      text: "The bond angle in a water molecule is approximately:",
      optionA: "90°",
      optionB: "109.5°",
      optionC: "104.5°",
      optionD: "120°",
      correctOption: "C",
      explanation: "Two lone pairs on the sp³ oxygen compress the H–O–H angle to about 104.5°.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-chemical-bonding-q03",
      topicId: "jee-chemistry-chemical-bonding",
      text: "Which molecule has a zero net dipole moment despite polar bonds?",
      optionA: "NH₃",
      optionB: "CO₂",
      optionC: "HCl",
      optionD: "H₂O",
      correctOption: "B",
      explanation: "CO₂ is linear and symmetric, so the two bond dipoles cancel exactly.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-chemical-bonding-q04",
      topicId: "jee-chemistry-chemical-bonding",
      text: "The bond order of the oxygen molecule (O₂) from MO theory is:",
      optionA: "2",
      optionB: "1",
      optionC: "1.5",
      optionD: "3",
      correctOption: "A",
      explanation: "O₂ has a bond order of 2 and two unpaired electrons, making it paramagnetic.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-chemical-bonding-q05",
      topicId: "jee-chemistry-chemical-bonding",
      text: "According to Fajans' rules, covalent character increases with:",
      optionA: "Large cation, small anion",
      optionB: "Small cation, large anion",
      optionC: "Low cation charge",
      optionD: "Large anion, large cation",
      correctOption: "B",
      explanation: "A small, highly charged cation polarises a large anion, increasing covalent character.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-chemical-bonding-q06",
      topicId: "jee-chemistry-chemical-bonding",
      text: "The hybridisation of carbon in ethyne (C₂H₂) is:",
      optionA: "sp³d",
      optionB: "sp²",
      optionC: "sp³",
      optionD: "sp",
      correctOption: "D",
      explanation: "The triple-bonded carbons in ethyne are sp hybridised, giving a linear molecule.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-chemical-bonding-q07",
      topicId: "jee-chemistry-chemical-bonding",
      text: "The unusually high boiling point of water is mainly due to:",
      optionA: "Ionic bonding",
      optionB: "Van der Waals forces",
      optionC: "Hydrogen bonding",
      optionD: "Metallic bonding",
      correctOption: "C",
      explanation: "Extensive hydrogen bonding between water molecules requires extra energy to break.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-chemical-bonding-q08",
      topicId: "jee-chemistry-chemical-bonding",
      text: "In the ammonium ion (NH₄⁺), the fourth N–H bond is a:",
      optionA: "Coordinate bond",
      optionB: "Metallic bond",
      optionC: "Hydrogen bond",
      optionD: "Ionic bond",
      correctOption: "A",
      explanation: "The lone pair on nitrogen forms a coordinate (dative) bond with the proton.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-quadratic-equations-q01",
      topicId: "jee-mathematics-quadratic-equations",
      text: "For the equation x² − 5x + 6 = 0, the sum of the roots is:",
      optionA: "6",
      optionB: "5",
      optionC: "−5",
      optionD: "−6",
      correctOption: "B",
      explanation: "Sum of roots = −b/a = −(−5)/1 = 5 (roots are 2 and 3).",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-quadratic-equations-q02",
      topicId: "jee-mathematics-quadratic-equations",
      text: "The discriminant of 2x² + 3x + 5 = 0 is:",
      optionA: "31",
      optionB: "−49",
      optionC: "49",
      optionD: "−31",
      correctOption: "D",
      explanation: "D = b² − 4ac = 9 − 40 = −31, so the roots are complex.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-quadratic-equations-q03",
      topicId: "jee-mathematics-quadratic-equations",
      text: "If the roots of a quadratic are equal, the discriminant is:",
      optionA: "Negative",
      optionB: "Zero",
      optionC: "Irrational",
      optionD: "Positive",
      correctOption: "B",
      explanation: "Equal real roots occur exactly when D = b² − 4ac = 0.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-quadratic-equations-q04",
      topicId: "jee-mathematics-quadratic-equations",
      text: "The quadratic equation whose roots are 3 and −2 is:",
      optionA: "x² − 5x + 6 = 0",
      optionB: "x² + x − 6 = 0",
      optionC: "x² − x − 6 = 0",
      optionD: "x² + 5x + 6 = 0",
      correctOption: "C",
      explanation: "Sum = 1, product = −6, so x² − (1)x + (−6) = x² − x − 6 = 0.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-quadratic-equations-q05",
      topicId: "jee-mathematics-quadratic-equations",
      text: "For ax² + bx + c > 0 to hold for all real x, we require:",
      optionA: "a > 0 and D > 0",
      optionB: "a < 0 and D > 0",
      optionC: "a > 0 and D < 0",
      optionD: "a < 0 and D < 0",
      correctOption: "C",
      explanation: "An upward parabola (a > 0) that never touches the x-axis (D < 0) is always positive.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-quadratic-equations-q06",
      topicId: "jee-mathematics-quadratic-equations",
      text: "If α and β are roots of x² − 6x + 8 = 0, then α² + β² equals:",
      optionA: "16",
      optionB: "20",
      optionC: "36",
      optionD: "52",
      correctOption: "B",
      explanation: "α² + β² = (α + β)² − 2αβ = 36 − 16 = 20.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-quadratic-equations-q07",
      topicId: "jee-mathematics-quadratic-equations",
      text: "The vertex of the parabola y = x² − 4x + 7 lies at x =:",
      optionA: "−2",
      optionB: "1",
      optionC: "4",
      optionD: "2",
      correctOption: "D",
      explanation: "The vertex is at x = −b/(2a) = 4/2 = 2.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-quadratic-equations-q08",
      topicId: "jee-mathematics-quadratic-equations",
      text: "The product of the roots of 3x² − 12x + 9 = 0 is:",
      optionA: "3",
      optionB: "4",
      optionC: "1",
      optionD: "9",
      correctOption: "A",
      explanation: "Product = c/a = 9/3 = 3.",
      orderIndex: 7
    },
    {
      id: "jee-physics-laws-of-motion-q01",
      topicId: "jee-physics-laws-of-motion",
      text: "A net force of 12 N acts on a 3 kg block. Its acceleration is:",
      optionA: "4 m/s²",
      optionB: "36 m/s²",
      optionC: "9 m/s²",
      optionD: "2 m/s²",
      correctOption: "A",
      explanation: "By Newton's second law a = F/m = 12/3 = 4 m/s².",
      orderIndex: 0
    },
    {
      id: "jee-physics-laws-of-motion-q02",
      topicId: "jee-physics-laws-of-motion",
      text: "Newton's third law force pairs always act on:",
      optionA: "The same body",
      optionB: "Two different bodies",
      optionC: "Massless objects only",
      optionD: "The Earth only",
      correctOption: "B",
      explanation: "Action and reaction are equal, opposite, and act on different bodies.",
      orderIndex: 1
    },
    {
      id: "jee-physics-laws-of-motion-q03",
      topicId: "jee-physics-laws-of-motion",
      text: "A block on a horizontal surface has mu_s = 0.5 and mass 4 kg (g = 10). Maximum static friction is:",
      optionA: "20 N",
      optionB: "40 N",
      optionC: "2 N",
      optionD: "10 N",
      correctOption: "A",
      explanation: "f_max = mu_s x N = 0.5 x 4 x 10 = 20 N.",
      orderIndex: 2
    },
    {
      id: "jee-physics-laws-of-motion-q04",
      topicId: "jee-physics-laws-of-motion",
      text: "The angle of repose theta for a surface with coefficient of friction mu satisfies:",
      optionA: "sin(theta) = mu",
      optionB: "cos(theta) = mu",
      optionC: "theta = mu",
      optionD: "tan(theta) = mu",
      correctOption: "D",
      explanation: "A block just slides when tan(theta) equals the coefficient of static friction.",
      orderIndex: 3
    },
    {
      id: "jee-physics-laws-of-motion-q05",
      topicId: "jee-physics-laws-of-motion",
      text: "A person of mass 50 kg stands in a lift accelerating up at 2 m/s² (g = 10). Apparent weight is:",
      optionA: "500 N",
      optionB: "400 N",
      optionC: "600 N",
      optionD: "100 N",
      correctOption: "C",
      explanation: "Apparent weight = m(g + a) = 50 x 12 = 600 N.",
      orderIndex: 4
    },
    {
      id: "jee-physics-laws-of-motion-q06",
      topicId: "jee-physics-laws-of-motion",
      text: "Impulse is equal to the change in:",
      optionA: "Kinetic energy",
      optionB: "Momentum",
      optionC: "Acceleration",
      optionD: "Power",
      correctOption: "B",
      explanation: "Impulse J = F x t equals the change in momentum, by the impulse-momentum theorem.",
      orderIndex: 5
    },
    {
      id: "jee-physics-laws-of-motion-q07",
      topicId: "jee-physics-laws-of-motion",
      text: "Two blocks of 2 kg and 3 kg connected by a string are pulled by 20 N on a frictionless floor. Acceleration is:",
      optionA: "10 m/s²",
      optionB: "4 m/s²",
      optionC: "6.7 m/s²",
      optionD: "2 m/s²",
      correctOption: "B",
      explanation: "a = F/(m1 + m2) = 20/5 = 4 m/s².",
      orderIndex: 6
    },
    {
      id: "jee-physics-laws-of-motion-q08",
      topicId: "jee-physics-laws-of-motion",
      text: "A body in equilibrium under three forces means the forces:",
      optionA: "Form a closed triangle",
      optionB: "Are perpendicular",
      optionC: "Are all equal",
      optionD: "Have zero magnitude",
      correctOption: "A",
      explanation: "Three concurrent forces in equilibrium add vectorially to zero, forming a closed triangle.",
      orderIndex: 7
    },
    {
      id: "jee-physics-work-energy-power-q01",
      topicId: "jee-physics-work-energy-power",
      text: "A force of 10 N moves a body 5 m in its own direction. Work done is:",
      optionA: "2 J",
      optionB: "15 J",
      optionC: "0 J",
      optionD: "50 J",
      correctOption: "D",
      explanation: "W = F x s x cos(0) = 10 x 5 = 50 J.",
      orderIndex: 0
    },
    {
      id: "jee-physics-work-energy-power-q02",
      topicId: "jee-physics-work-energy-power",
      text: "The kinetic energy of a 2 kg body moving at 3 m/s is:",
      optionA: "9 J",
      optionB: "6 J",
      optionC: "18 J",
      optionD: "3 J",
      correctOption: "A",
      explanation: "KE = 0.5 x m x v² = 0.5 x 2 x 9 = 9 J.",
      orderIndex: 1
    },
    {
      id: "jee-physics-work-energy-power-q03",
      topicId: "jee-physics-work-energy-power",
      text: "Work done by a force perpendicular to the displacement is:",
      optionA: "Zero",
      optionB: "Equal to F x s",
      optionC: "Maximum",
      optionD: "Negative",
      correctOption: "A",
      explanation: "W = Fs cos(90) = 0; a perpendicular force does no work.",
      orderIndex: 2
    },
    {
      id: "jee-physics-work-energy-power-q04",
      topicId: "jee-physics-work-energy-power",
      text: "A spring of constant 200 N/m is stretched 0.1 m. Potential energy stored is:",
      optionA: "1 J",
      optionB: "2 J",
      optionC: "20 J",
      optionD: "10 J",
      correctOption: "A",
      explanation: "PE = 0.5 x k x x² = 0.5 x 200 x 0.01 = 1 J.",
      orderIndex: 3
    },
    {
      id: "jee-physics-work-energy-power-q05",
      topicId: "jee-physics-work-energy-power",
      text: "In a perfectly inelastic collision, the conserved quantity is:",
      optionA: "Kinetic energy",
      optionB: "Momentum",
      optionC: "Both KE and momentum",
      optionD: "Neither",
      correctOption: "B",
      explanation: "Momentum is conserved in all collisions; kinetic energy is lost when inelastic.",
      orderIndex: 4
    },
    {
      id: "jee-physics-work-energy-power-q06",
      topicId: "jee-physics-work-energy-power",
      text: "A 1000 W motor lifting a load does how much work in 10 s?",
      optionA: "10000 J",
      optionB: "1000 J",
      optionC: "100000 J",
      optionD: "100 J",
      correctOption: "A",
      explanation: "W = P x t = 1000 x 10 = 10000 J.",
      orderIndex: 5
    },
    {
      id: "jee-physics-work-energy-power-q07",
      topicId: "jee-physics-work-energy-power",
      text: "For a perfectly elastic collision, the coefficient of restitution e equals:",
      optionA: "0",
      optionB: "0.5",
      optionC: "1",
      optionD: "2",
      correctOption: "C",
      explanation: "e = 1 for elastic collisions; e = 0 for perfectly inelastic ones.",
      orderIndex: 6
    },
    {
      id: "jee-physics-work-energy-power-q08",
      topicId: "jee-physics-work-energy-power",
      text: "The instantaneous power delivered by a force F to a body moving at velocity v is:",
      optionA: "F/v",
      optionB: "F + v",
      optionC: "F x v",
      optionD: "0.5 F v²",
      correctOption: "C",
      explanation: "Instantaneous power P equals the dot product F x v.",
      orderIndex: 7
    },
    {
      id: "jee-physics-gravitation-q01",
      topicId: "jee-physics-gravitation",
      text: "The escape velocity from Earth is approximately:",
      optionA: "3.0 km/s",
      optionB: "7.9 km/s",
      optionC: "11.2 km/s",
      optionD: "30 km/s",
      correctOption: "C",
      explanation: "Earth's escape velocity is about 11.2 km/s, equal to sqrt(2GM/R).",
      orderIndex: 0
    },
    {
      id: "jee-physics-gravitation-q02",
      topicId: "jee-physics-gravitation",
      text: "If the distance between two masses is doubled, the gravitational force becomes:",
      optionA: "One-quarter",
      optionB: "Four times",
      optionC: "Double",
      optionD: "Half",
      correctOption: "A",
      explanation: "Force varies as 1/r²; doubling r reduces it to one-quarter.",
      orderIndex: 1
    },
    {
      id: "jee-physics-gravitation-q03",
      topicId: "jee-physics-gravitation",
      text: "The value of g at a height equal to Earth's radius R above the surface is:",
      optionA: "g/4",
      optionB: "g/2",
      optionC: "g",
      optionD: "g/9",
      correctOption: "A",
      explanation: "At height R, distance from centre is 2R, so g' = g/(2)² = g/4.",
      orderIndex: 2
    },
    {
      id: "jee-physics-gravitation-q04",
      topicId: "jee-physics-gravitation",
      text: "Kepler's third law states that the square of the orbital period is proportional to:",
      optionA: "Cube of the radius",
      optionB: "Square of the radius",
      optionC: "Orbital radius",
      optionD: "Mass of the planet",
      correctOption: "A",
      explanation: "T² is proportional to r³, Kepler's law of periods.",
      orderIndex: 3
    },
    {
      id: "jee-physics-gravitation-q05",
      topicId: "jee-physics-gravitation",
      text: "The orbital velocity of a satellite close to Earth's surface relates to escape velocity by:",
      optionA: "v_e = sqrt(2) v_o",
      optionB: "v_e = 2 v_o",
      optionC: "v_e = v_o",
      optionD: "v_e = v_o/2",
      correctOption: "A",
      explanation: "Escape velocity is sqrt(2) times the orbital velocity.",
      orderIndex: 4
    },
    {
      id: "jee-physics-gravitation-q06",
      topicId: "jee-physics-gravitation",
      text: "The period of a geostationary satellite is:",
      optionA: "365 days",
      optionB: "12 hours",
      optionC: "1 hour",
      optionD: "24 hours",
      correctOption: "D",
      explanation: "A geostationary satellite matches Earth's rotation with a 24-hour period.",
      orderIndex: 5
    },
    {
      id: "jee-physics-gravitation-q07",
      topicId: "jee-physics-gravitation",
      text: "The gravitational potential energy of two masses separated by r is:",
      optionA: "+GMm/r",
      optionB: "-GMm/r",
      optionC: "-GMm/r²",
      optionD: "GMm/r²",
      correctOption: "B",
      explanation: "Gravitational PE is negative: U = -GMm/r, taken zero at infinity.",
      orderIndex: 6
    },
    {
      id: "jee-physics-gravitation-q08",
      topicId: "jee-physics-gravitation",
      text: "At the centre of the Earth, the acceleration due to gravity is:",
      optionA: "Zero",
      optionB: "Equal to surface g",
      optionC: "Infinite",
      optionD: "Maximum",
      correctOption: "A",
      explanation: "g decreases linearly with depth and is zero at the centre.",
      orderIndex: 7
    },
    {
      id: "jee-physics-shm-waves-q01",
      topicId: "jee-physics-shm-waves",
      text: "The time period of a simple pendulum of length L is:",
      optionA: "2*pi*sqrt(L/g)",
      optionB: "2*pi*sqrt(g/L)",
      optionC: "2*pi*sqrt(m/k)",
      optionD: "sqrt(L/g)",
      correctOption: "A",
      explanation: "The pendulum period is 2*pi*sqrt(L/g), independent of mass.",
      orderIndex: 0
    },
    {
      id: "jee-physics-shm-waves-q02",
      topicId: "jee-physics-shm-waves",
      text: "In SHM, the acceleration is maximum at:",
      optionA: "The mean position",
      optionB: "Halfway",
      optionC: "The extreme position",
      optionD: "Everywhere equal",
      correctOption: "C",
      explanation: "Acceleration a = -omega²x is maximum where displacement x is largest, at the extremes.",
      orderIndex: 1
    },
    {
      id: "jee-physics-shm-waves-q03",
      topicId: "jee-physics-shm-waves",
      text: "A spring-mass system has k = 100 N/m and m = 1 kg. Its angular frequency is:",
      optionA: "5 rad/s",
      optionB: "1 rad/s",
      optionC: "100 rad/s",
      optionD: "10 rad/s",
      correctOption: "D",
      explanation: "omega = sqrt(k/m) = sqrt(100) = 10 rad/s.",
      orderIndex: 2
    },
    {
      id: "jee-physics-shm-waves-q04",
      topicId: "jee-physics-shm-waves",
      text: "Two tuning forks of 256 Hz and 260 Hz produce beats at a frequency of:",
      optionA: "2 Hz",
      optionB: "8 Hz",
      optionC: "4 Hz",
      optionD: "516 Hz",
      correctOption: "C",
      explanation: "Beat frequency equals the difference, 260 - 256 = 4 Hz.",
      orderIndex: 3
    },
    {
      id: "jee-physics-shm-waves-q05",
      topicId: "jee-physics-shm-waves",
      text: "The velocity of a wave with frequency 50 Hz and wavelength 4 m is:",
      optionA: "200 m/s",
      optionB: "12.5 m/s",
      optionC: "54 m/s",
      optionD: "100 m/s",
      correctOption: "A",
      explanation: "v = f x lambda = 50 x 4 = 200 m/s.",
      orderIndex: 4
    },
    {
      id: "jee-physics-shm-waves-q06",
      topicId: "jee-physics-shm-waves",
      text: "The total energy of a particle in SHM is proportional to:",
      optionA: "Amplitude",
      optionB: "Frequency only",
      optionC: "Square of amplitude",
      optionD: "Inverse of amplitude",
      correctOption: "C",
      explanation: "Total energy E = 0.5 k A² is proportional to the square of the amplitude.",
      orderIndex: 5
    },
    {
      id: "jee-physics-shm-waves-q07",
      topicId: "jee-physics-shm-waves",
      text: "The speed of a transverse wave on a stretched string depends on tension T and linear density mu as:",
      optionA: "sqrt(T/mu)",
      optionB: "sqrt(mu/T)",
      optionC: "T x mu",
      optionD: "T/mu",
      correctOption: "A",
      explanation: "Wave speed on a string is v = sqrt(T/mu).",
      orderIndex: 6
    },
    {
      id: "jee-physics-shm-waves-q08",
      topicId: "jee-physics-shm-waves",
      text: "When a source of sound approaches a stationary observer, the observed frequency:",
      optionA: "Decreases",
      optionB: "Increases",
      optionC: "Stays the same",
      optionD: "Becomes zero",
      correctOption: "B",
      explanation: "By the Doppler effect, an approaching source raises the observed pitch.",
      orderIndex: 7
    },
    {
      id: "jee-physics-electrostatics-q01",
      topicId: "jee-physics-electrostatics",
      text: "The force between two charges is F. If each charge is doubled, the new force is:",
      optionA: "2F",
      optionB: "F/4",
      optionC: "F/2",
      optionD: "4F",
      correctOption: "D",
      explanation: "F is proportional to the product of charges; doubling both gives 4F.",
      orderIndex: 0
    },
    {
      id: "jee-physics-electrostatics-q02",
      topicId: "jee-physics-electrostatics",
      text: "The electric field inside a charged conductor in electrostatic equilibrium is:",
      optionA: "Maximum",
      optionB: "Equal to the surface field",
      optionC: "Zero",
      optionD: "Infinite",
      correctOption: "C",
      explanation: "Charges reside on the surface, leaving the field inside a conductor zero.",
      orderIndex: 1
    },
    {
      id: "jee-physics-electrostatics-q03",
      topicId: "jee-physics-electrostatics",
      text: "Electric potential is a:",
      optionA: "Scalar quantity",
      optionB: "Always zero",
      optionC: "Tensor",
      optionD: "Vector quantity",
      correctOption: "A",
      explanation: "Potential is a scalar; potentials from multiple charges add algebraically.",
      orderIndex: 2
    },
    {
      id: "jee-physics-electrostatics-q04",
      topicId: "jee-physics-electrostatics",
      text: "By Gauss's law, the total electric flux through a closed surface depends on:",
      optionA: "Surface area",
      optionB: "External charges",
      optionC: "Shape of the surface",
      optionD: "Charge enclosed",
      correctOption: "D",
      explanation: "Flux equals q_enclosed/epsilon0, independent of shape or external charges.",
      orderIndex: 3
    },
    {
      id: "jee-physics-electrostatics-q05",
      topicId: "jee-physics-electrostatics",
      text: "Inserting a dielectric of constant K between capacitor plates changes capacitance to:",
      optionA: "C/K",
      optionB: "C unchanged",
      optionC: "K x C",
      optionD: "C + K",
      correctOption: "C",
      explanation: "A dielectric raises capacitance by the factor K to K times C.",
      orderIndex: 4
    },
    {
      id: "jee-physics-electrostatics-q06",
      topicId: "jee-physics-electrostatics",
      text: "The energy stored in a capacitor of capacitance C charged to voltage V is:",
      optionA: "0.5 C V²",
      optionB: "0.5 C V",
      optionC: "C V²",
      optionD: "CV",
      correctOption: "A",
      explanation: "Stored energy is U = 0.5 x C x V².",
      orderIndex: 5
    },
    {
      id: "jee-physics-electrostatics-q07",
      topicId: "jee-physics-electrostatics",
      text: "The electric field due to an infinite charged sheet of surface density sigma is:",
      optionA: "Depends on distance",
      optionB: "sigma/epsilon0",
      optionC: "sigma/(2 epsilon0)",
      optionD: "Zero",
      correctOption: "C",
      explanation: "The field of an infinite sheet is sigma/(2 epsilon0), independent of distance.",
      orderIndex: 6
    },
    {
      id: "jee-physics-electrostatics-q08",
      topicId: "jee-physics-electrostatics",
      text: "The torque on an electric dipole of moment p in a field E at angle theta is:",
      optionA: "pE",
      optionB: "pE cos(theta)",
      optionC: "pE sin(theta)",
      optionD: "Zero always",
      correctOption: "C",
      explanation: "Torque on a dipole is pE sin(theta), maximum when the dipole is perpendicular to the field.",
      orderIndex: 7
    },
    {
      id: "jee-physics-current-electricity-q01",
      topicId: "jee-physics-current-electricity",
      text: "A 12 V battery drives 3 A through a resistor. The resistance is:",
      optionA: "0.25 ohm",
      optionB: "4 ohm",
      optionC: "15 ohm",
      optionD: "36 ohm",
      correctOption: "B",
      explanation: "By Ohm's law R = V/I = 12/3 = 4 ohm.",
      orderIndex: 0
    },
    {
      id: "jee-physics-current-electricity-q02",
      topicId: "jee-physics-current-electricity",
      text: "Two resistors of 6 ohm each in parallel give an equivalent of:",
      optionA: "1.5 ohm",
      optionB: "6 ohm",
      optionC: "12 ohm",
      optionD: "3 ohm",
      correctOption: "D",
      explanation: "Equal parallel resistors halve: 6/2 = 3 ohm.",
      orderIndex: 1
    },
    {
      id: "jee-physics-current-electricity-q03",
      topicId: "jee-physics-current-electricity",
      text: "Kirchhoff's junction rule is a statement of conservation of:",
      optionA: "Energy",
      optionB: "Power",
      optionC: "Momentum",
      optionD: "Charge",
      correctOption: "D",
      explanation: "The junction rule reflects conservation of charge: current in equals current out.",
      orderIndex: 2
    },
    {
      id: "jee-physics-current-electricity-q04",
      topicId: "jee-physics-current-electricity",
      text: "The power dissipated in a 5 ohm resistor carrying 2 A is:",
      optionA: "10 W",
      optionB: "20 W",
      optionC: "40 W",
      optionD: "2.5 W",
      correctOption: "B",
      explanation: "P = I²R = 4 x 5 = 20 W.",
      orderIndex: 3
    },
    {
      id: "jee-physics-current-electricity-q05",
      topicId: "jee-physics-current-electricity",
      text: "The resistance of a wire of length L and area A with resistivity rho is:",
      optionA: "rho A / L",
      optionB: "rho L / A",
      optionC: "L / (rho A)",
      optionD: "rho L A",
      correctOption: "B",
      explanation: "R = rho x L / A; resistance grows with length and falls with area.",
      orderIndex: 4
    },
    {
      id: "jee-physics-current-electricity-q06",
      topicId: "jee-physics-current-electricity",
      text: "A Wheatstone bridge is balanced when:",
      optionA: "All arms are equal",
      optionB: "Galvanometer reads maximum",
      optionC: "P/Q = R/S",
      optionD: "The cell is removed",
      correctOption: "C",
      explanation: "Balance occurs when P/Q = R/S, giving no galvanometer current.",
      orderIndex: 5
    },
    {
      id: "jee-physics-current-electricity-q07",
      topicId: "jee-physics-current-electricity",
      text: "Three 2 ohm resistors in series give a total resistance of:",
      optionA: "6 ohm",
      optionB: "0.67 ohm",
      optionC: "2 ohm",
      optionD: "8 ohm",
      correctOption: "A",
      explanation: "Series resistances add: 2 + 2 + 2 = 6 ohm.",
      orderIndex: 6
    },
    {
      id: "jee-physics-current-electricity-q08",
      topicId: "jee-physics-current-electricity",
      text: "The terminal voltage of a cell of emf E and internal resistance r carrying current I is:",
      optionA: "E x Ir",
      optionB: "E + Ir",
      optionC: "E - Ir",
      optionD: "Ir - E",
      correctOption: "C",
      explanation: "Terminal voltage V = E - Ir while the cell delivers current.",
      orderIndex: 7
    },
    {
      id: "jee-physics-magnetism-emi-q01",
      topicId: "jee-physics-magnetism-emi",
      text: "Faraday's law states that the induced emf equals the negative rate of change of:",
      optionA: "Current",
      optionB: "Charge",
      optionC: "Resistance",
      optionD: "Magnetic flux",
      correctOption: "D",
      explanation: "Induced emf = -dPhi/dt, the rate of change of magnetic flux.",
      orderIndex: 0
    },
    {
      id: "jee-physics-magnetism-emi-q02",
      topicId: "jee-physics-magnetism-emi",
      text: "The direction of an induced current is given by:",
      optionA: "Lenz's law",
      optionB: "Ohm's law",
      optionC: "Coulomb's law",
      optionD: "Gauss's law",
      correctOption: "A",
      explanation: "Lenz's law: the induced current opposes the change in flux that produces it.",
      orderIndex: 1
    },
    {
      id: "jee-physics-magnetism-emi-q03",
      topicId: "jee-physics-magnetism-emi",
      text: "A charge moving parallel to a magnetic field experiences a force of:",
      optionA: "Zero",
      optionB: "Maximum",
      optionC: "qvB",
      optionD: "qE",
      correctOption: "A",
      explanation: "F = qvB sin(theta); when v is parallel to B, theta is zero so the force vanishes.",
      orderIndex: 2
    },
    {
      id: "jee-physics-magnetism-emi-q04",
      topicId: "jee-physics-magnetism-emi",
      text: "The magnetic field at distance r from a long straight wire carrying current I is:",
      optionA: "mu0 I r",
      optionB: "mu0 I / (2 r)",
      optionC: "mu0 I / (2 pi r)",
      optionD: "mu0 I / r²",
      correctOption: "C",
      explanation: "By Ampere's law, B = mu0 I / (2 pi r) around a long straight wire.",
      orderIndex: 3
    },
    {
      id: "jee-physics-magnetism-emi-q05",
      topicId: "jee-physics-magnetism-emi",
      text: "A rod of length L moves at speed v perpendicular to a field B. The motional emf is:",
      optionA: "BLv",
      optionB: "BL/v",
      optionC: "Bv/L",
      optionD: "BLv²",
      correctOption: "A",
      explanation: "Motional emf is B x L x v for a rod moving perpendicular to the field.",
      orderIndex: 4
    },
    {
      id: "jee-physics-magnetism-emi-q06",
      topicId: "jee-physics-magnetism-emi",
      text: "The energy stored in an inductor of inductance L carrying current I is:",
      optionA: "LI",
      optionB: "0.5 L I",
      optionC: "L I²",
      optionD: "0.5 L I²",
      correctOption: "D",
      explanation: "Energy stored in an inductor is U = 0.5 x L x I².",
      orderIndex: 5
    },
    {
      id: "jee-physics-magnetism-emi-q07",
      topicId: "jee-physics-magnetism-emi",
      text: "The inductive reactance of an inductor at angular frequency omega is:",
      optionA: "1/(omega L)",
      optionB: "L/omega",
      optionC: "omega L",
      optionD: "omega/L",
      correctOption: "C",
      explanation: "Inductive reactance X_L = omega x L and rises with frequency.",
      orderIndex: 6
    },
    {
      id: "jee-physics-magnetism-emi-q08",
      topicId: "jee-physics-magnetism-emi",
      text: "An LC circuit resonates at an angular frequency of:",
      optionA: "sqrt(LC)",
      optionB: "LC",
      optionC: "1/(LC)",
      optionD: "1/sqrt(LC)",
      correctOption: "D",
      explanation: "Resonance occurs at omega = 1/sqrt(LC).",
      orderIndex: 7
    },
    {
      id: "jee-physics-optics-q01",
      topicId: "jee-physics-optics",
      text: "The focal length of a concave mirror of radius of curvature 20 cm is:",
      optionA: "20 cm",
      optionB: "40 cm",
      optionC: "5 cm",
      optionD: "10 cm",
      correctOption: "D",
      explanation: "Focal length f = R/2 = 20/2 = 10 cm.",
      orderIndex: 0
    },
    {
      id: "jee-physics-optics-q02",
      topicId: "jee-physics-optics",
      text: "Total internal reflection occurs when light travels from a denser medium to a rarer one beyond the:",
      optionA: "Brewster angle",
      optionB: "Right angle",
      optionC: "Polarising angle",
      optionD: "Critical angle",
      correctOption: "D",
      explanation: "Beyond the critical angle, light is totally internally reflected.",
      orderIndex: 1
    },
    {
      id: "jee-physics-optics-q03",
      topicId: "jee-physics-optics",
      text: "The power of a lens of focal length 50 cm is:",
      optionA: "0.5 D",
      optionB: "5 D",
      optionC: "50 D",
      optionD: "2 D",
      correctOption: "D",
      explanation: "Power = 1/f(in metres) = 1/0.5 = 2 dioptres.",
      orderIndex: 2
    },
    {
      id: "jee-physics-optics-q04",
      topicId: "jee-physics-optics",
      text: "In Young's double-slit experiment, the fringe width is:",
      optionA: "lambda d / D",
      optionB: "D d / lambda",
      optionC: "lambda / (D d)",
      optionD: "lambda D / d",
      correctOption: "D",
      explanation: "Fringe width beta = lambda x D / d.",
      orderIndex: 3
    },
    {
      id: "jee-physics-optics-q05",
      topicId: "jee-physics-optics",
      text: "Snell's law relates the angles of incidence and refraction through:",
      optionA: "n1 cos(i) = n2 cos(r)",
      optionB: "n1 tan(i) = n2 tan(r)",
      optionC: "n1 i = n2 r",
      optionD: "n1 sin(i) = n2 sin(r)",
      correctOption: "D",
      explanation: "Snell's law: n1 sin(i) = n2 sin(r).",
      orderIndex: 4
    },
    {
      id: "jee-physics-optics-q06",
      topicId: "jee-physics-optics",
      text: "For constructive interference, the path difference must be:",
      optionA: "An odd multiple of lambda/2",
      optionB: "lambda/4",
      optionC: "An integer multiple of lambda",
      optionD: "Zero only",
      correctOption: "C",
      explanation: "Bright fringes appear where the path difference equals n times lambda.",
      orderIndex: 5
    },
    {
      id: "jee-physics-optics-q07",
      topicId: "jee-physics-optics",
      text: "When unpolarised light passes through two polarisers, Malus's law gives the transmitted intensity as:",
      optionA: "I0",
      optionB: "I0 cos(theta)",
      optionC: "I0 sin²(theta)",
      optionD: "I0 cos²(theta)",
      correctOption: "D",
      explanation: "Malus's law: I = I0 cos²(theta) for polarised light through an analyser.",
      orderIndex: 6
    },
    {
      id: "jee-physics-optics-q08",
      topicId: "jee-physics-optics",
      text: "A convex lens of focal length 10 cm forms an image of an object at 20 cm. The image distance is:",
      optionA: "40 cm",
      optionB: "10 cm",
      optionC: "5 cm",
      optionD: "20 cm",
      correctOption: "D",
      explanation: "1/v - 1/u = 1/f gives 1/v = 1/10 - 1/20, so v = 20 cm.",
      orderIndex: 7
    },
    {
      id: "jee-physics-modern-physics-q01",
      topicId: "jee-physics-modern-physics",
      text: "In the photoelectric effect, increasing the light intensity (frequency fixed) increases:",
      optionA: "Work function",
      optionB: "Maximum kinetic energy",
      optionC: "Threshold frequency",
      optionD: "Number of emitted electrons",
      correctOption: "D",
      explanation: "Higher intensity means more photons, hence more electrons, but the same maximum KE.",
      orderIndex: 0
    },
    {
      id: "jee-physics-modern-physics-q02",
      topicId: "jee-physics-modern-physics",
      text: "The energy of the ground state of the hydrogen atom is:",
      optionA: "-3.4 eV",
      optionB: "-1.51 eV",
      optionC: "-13.6 eV",
      optionD: "0 eV",
      correctOption: "C",
      explanation: "The n = 1 level of hydrogen has energy -13.6 eV.",
      orderIndex: 1
    },
    {
      id: "jee-physics-modern-physics-q03",
      topicId: "jee-physics-modern-physics",
      text: "The de Broglie wavelength of a particle of momentum p is:",
      optionA: "h / p",
      optionB: "h / p²",
      optionC: "p / h",
      optionD: "h p",
      correctOption: "A",
      explanation: "de Broglie wavelength lambda = h/p.",
      orderIndex: 2
    },
    {
      id: "jee-physics-modern-physics-q04",
      topicId: "jee-physics-modern-physics",
      text: "A radioactive sample has a half-life of 5 years. After 15 years the fraction remaining is:",
      optionA: "1/4",
      optionB: "1/8",
      optionC: "1/2",
      optionD: "1/16",
      correctOption: "B",
      explanation: "15 years is three half-lives, leaving (1/2)³ = 1/8 of the sample.",
      orderIndex: 3
    },
    {
      id: "jee-physics-modern-physics-q05",
      topicId: "jee-physics-modern-physics",
      text: "Einstein's photoelectric equation is KE_max =:",
      optionA: "hf + phi",
      optionB: "phi - hf",
      optionC: "hf - phi",
      optionD: "hf x phi",
      correctOption: "C",
      explanation: "KE_max = hf - phi, where phi is the work function.",
      orderIndex: 4
    },
    {
      id: "jee-physics-modern-physics-q06",
      topicId: "jee-physics-modern-physics",
      text: "Emission of an alpha particle reduces the mass number of a nucleus by:",
      optionA: "1",
      optionB: "4",
      optionC: "2",
      optionD: "0",
      correctOption: "B",
      explanation: "An alpha particle is a helium nucleus, so mass number drops by 4.",
      orderIndex: 5
    },
    {
      id: "jee-physics-modern-physics-q07",
      topicId: "jee-physics-modern-physics",
      text: "The relation between energy and mass defect is given by:",
      optionA: "E = mc²",
      optionB: "E = mc",
      optionC: "E = m/c²",
      optionD: "E = m²c",
      correctOption: "A",
      explanation: "Einstein's mass-energy relation E = mc² gives the released binding energy.",
      orderIndex: 6
    },
    {
      id: "jee-physics-modern-physics-q08",
      topicId: "jee-physics-modern-physics",
      text: "The radius of the n-th Bohr orbit varies with n as:",
      optionA: "n",
      optionB: "1/n²",
      optionC: "1/n",
      optionD: "n²",
      correctOption: "D",
      explanation: "The Bohr radius r_n is proportional to n².",
      orderIndex: 7
    },
    {
      id: "jee-physics-thermodynamics-q01",
      topicId: "jee-physics-thermodynamics",
      text: "The first law of thermodynamics is a statement of conservation of:",
      optionA: "Mass",
      optionB: "Momentum",
      optionC: "Energy",
      optionD: "Charge",
      correctOption: "C",
      explanation: "The first law, delta U = Q - W, expresses conservation of energy.",
      orderIndex: 0
    },
    {
      id: "jee-physics-thermodynamics-q02",
      topicId: "jee-physics-thermodynamics",
      text: "In an isothermal process for an ideal gas, the change in internal energy is:",
      optionA: "Negative",
      optionB: "Zero",
      optionC: "Positive",
      optionD: "Equal to the work done",
      correctOption: "B",
      explanation: "Internal energy depends on temperature only; at constant T, delta U = 0.",
      orderIndex: 1
    },
    {
      id: "jee-physics-thermodynamics-q03",
      topicId: "jee-physics-thermodynamics",
      text: "In an adiabatic process the quantity that stays constant is:",
      optionA: "Heat exchanged Q",
      optionB: "Pressure",
      optionC: "Temperature",
      optionD: "Volume",
      correctOption: "A",
      explanation: "An adiabatic process has Q = 0, with no heat exchanged.",
      orderIndex: 2
    },
    {
      id: "jee-physics-thermodynamics-q04",
      topicId: "jee-physics-thermodynamics",
      text: "The efficiency of a Carnot engine between 600 K and 300 K is:",
      optionA: "25 percent",
      optionB: "75 percent",
      optionC: "50 percent",
      optionD: "100 percent",
      correctOption: "C",
      explanation: "eta = 1 - T_cold/T_hot = 1 - 300/600 = 0.5, or 50 percent.",
      orderIndex: 3
    },
    {
      id: "jee-physics-thermodynamics-q05",
      topicId: "jee-physics-thermodynamics",
      text: "The work done in an isochoric (constant volume) process is:",
      optionA: "Zero",
      optionB: "Maximum",
      optionC: "P delta V",
      optionD: "nRT",
      correctOption: "A",
      explanation: "With no volume change, W = P delta V = 0.",
      orderIndex: 4
    },
    {
      id: "jee-physics-thermodynamics-q07",
      topicId: "jee-physics-thermodynamics",
      text: "Mayer's relation for an ideal gas is:",
      optionA: "Cp - Cv = R",
      optionB: "Cp + Cv = R",
      optionC: "Cp x Cv = R",
      optionD: "Cp/Cv = R",
      correctOption: "A",
      explanation: "For an ideal gas, Cp - Cv = R (Mayer's relation).",
      orderIndex: 6
    },
    {
      id: "jee-physics-thermodynamics-q08",
      topicId: "jee-physics-thermodynamics",
      text: "The rms speed of gas molecules is proportional to:",
      optionA: "T",
      optionB: "sqrt(T)",
      optionC: "1/T",
      optionD: "T²",
      correctOption: "B",
      explanation: "v_rms = sqrt(3RT/M) is proportional to the square root of temperature.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-atomic-structure-q01",
      topicId: "jee-chemistry-atomic-structure",
      text: "The maximum number of electrons in a shell with principal quantum number n is:",
      optionA: "n",
      optionB: "2n",
      optionC: "2n²",
      optionD: "n²",
      correctOption: "C",
      explanation: "A shell holds at most 2n² electrons.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-atomic-structure-q02",
      topicId: "jee-chemistry-atomic-structure",
      text: "The principle that no two electrons can have all four quantum numbers identical is:",
      optionA: "Aufbau principle",
      optionB: "Hund's rule",
      optionC: "Pauli exclusion principle",
      optionD: "Heisenberg principle",
      correctOption: "C",
      explanation: "The Pauli exclusion principle forbids identical sets of four quantum numbers.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-atomic-structure-q03",
      topicId: "jee-chemistry-atomic-structure",
      text: "The azimuthal quantum number l for a d subshell is:",
      optionA: "0",
      optionB: "2",
      optionC: "3",
      optionD: "1",
      correctOption: "B",
      explanation: "For d orbitals, l = 2 (s = 0, p = 1, d = 2, f = 3).",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-atomic-structure-q04",
      topicId: "jee-chemistry-atomic-structure",
      text: "The Balmer series of hydrogen corresponds to electron transitions ending at:",
      optionA: "n = 1",
      optionB: "n = 4",
      optionC: "n = 2",
      optionD: "n = 3",
      correctOption: "C",
      explanation: "Balmer lines arise from transitions down to n = 2 and lie in the visible region.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-atomic-structure-q05",
      topicId: "jee-chemistry-atomic-structure",
      text: "Hund's rule of maximum multiplicity states that electrons:",
      optionA: "Always pair with opposite spin",
      optionB: "Pair up first",
      optionC: "Occupy the highest orbital",
      optionD: "Fill orbitals singly before pairing",
      correctOption: "D",
      explanation: "Degenerate orbitals are singly filled before any pairing occurs.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-atomic-structure-q06",
      topicId: "jee-chemistry-atomic-structure",
      text: "The electronic configuration of chromium (Z = 24) is anomalous as:",
      optionA: "[Ar] 3d4 4s2",
      optionB: "[Ar] 3d6 4s0",
      optionC: "[Ar] 3d5 4s1",
      optionD: "[Ar] 3d3 4s3",
      correctOption: "C",
      explanation: "Chromium adopts 3d5 4s1 for the extra stability of a half-filled d subshell.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-atomic-structure-q07",
      topicId: "jee-chemistry-atomic-structure",
      text: "Heisenberg's uncertainty principle relates the uncertainties in:",
      optionA: "Position and momentum",
      optionB: "Charge and mass",
      optionC: "Energy and charge",
      optionD: "Spin and mass",
      correctOption: "A",
      explanation: "It states delta x times delta p is at least h/(4 pi).",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-atomic-structure-q08",
      topicId: "jee-chemistry-atomic-structure",
      text: "According to the (n + l) rule, which subshell fills first?",
      optionA: "3d",
      optionB: "4s",
      optionC: "4p",
      optionD: "4d",
      correctOption: "B",
      explanation: "4s (n + l = 4) fills before 3d (n + l = 5) under the Aufbau ordering.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-periodicity-q01",
      topicId: "jee-chemistry-periodicity",
      text: "Across a period from left to right, atomic radius generally:",
      optionA: "Increases",
      optionB: "Decreases",
      optionC: "Stays constant",
      optionD: "First increases then decreases",
      correctOption: "B",
      explanation: "Rising effective nuclear charge pulls electrons closer, shrinking the radius.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-periodicity-q02",
      topicId: "jee-chemistry-periodicity",
      text: "The modern periodic law arranges elements by increasing:",
      optionA: "Valency",
      optionB: "Atomic mass",
      optionC: "Density",
      optionD: "Atomic number",
      correctOption: "D",
      explanation: "Moseley's modern law orders elements by atomic number.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-periodicity-q03",
      topicId: "jee-chemistry-periodicity",
      text: "Down a group, ionisation energy generally:",
      optionA: "Decreases",
      optionB: "Increases",
      optionC: "Stays constant",
      optionD: "Becomes zero",
      correctOption: "A",
      explanation: "Added shells increase size, so electrons are easier to remove going down a group.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-periodicity-q04",
      topicId: "jee-chemistry-periodicity",
      text: "The most electronegative element in the periodic table is:",
      optionA: "Nitrogen",
      optionB: "Chlorine",
      optionC: "Oxygen",
      optionD: "Fluorine",
      correctOption: "D",
      explanation: "Fluorine has the highest electronegativity on the Pauling scale.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-periodicity-q05",
      topicId: "jee-chemistry-periodicity",
      text: "Elements of groups 1 and 2 belong to the:",
      optionA: "p-block",
      optionB: "s-block",
      optionC: "d-block",
      optionD: "f-block",
      correctOption: "B",
      explanation: "Groups 1 and 2 have their last electron in an s orbital, defining the s-block.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-periodicity-q06",
      topicId: "jee-chemistry-periodicity",
      text: "The second ionisation energy of an element compared with the first is always:",
      optionA: "Smaller",
      optionB: "Larger",
      optionC: "Equal",
      optionD: "Zero",
      correctOption: "B",
      explanation: "Removing an electron from a cation needs more energy, so IE2 is greater than IE1.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-periodicity-q07",
      topicId: "jee-chemistry-periodicity",
      text: "The lanthanide contraction causes the atomic sizes of which pair to be nearly equal?",
      optionA: "F and Cl",
      optionB: "Na and K",
      optionC: "Li and Be",
      optionD: "Zr and Hf",
      correctOption: "D",
      explanation: "The lanthanide contraction makes Zr and Hf almost the same size.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-periodicity-q08",
      topicId: "jee-chemistry-periodicity",
      text: "Down a group, metallic character generally:",
      optionA: "Decreases",
      optionB: "Increases",
      optionC: "Stays constant",
      optionD: "Disappears",
      correctOption: "B",
      explanation: "Easier electron loss down a group increases metallic character.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-mole-concept-q01",
      topicId: "jee-chemistry-mole-concept",
      text: "The number of molecules in 2 moles of a gas is:",
      optionA: "6.022 x 10^23",
      optionB: "12 x 10^24",
      optionC: "1.2 x 10^24",
      optionD: "3.0 x 10^23",
      correctOption: "C",
      explanation: "2 moles contain 2 x 6.022 x 10^23 = 1.2 x 10^24 molecules.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-mole-concept-q02",
      topicId: "jee-chemistry-mole-concept",
      text: "The molar volume of an ideal gas at STP is:",
      optionA: "22.4 L",
      optionB: "11.2 L",
      optionC: "24.4 L",
      optionD: "1 L",
      correctOption: "A",
      explanation: "One mole of ideal gas occupies 22.4 L at STP.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-mole-concept-q03",
      topicId: "jee-chemistry-mole-concept",
      text: "The number of moles in 36 g of water (molar mass 18) is:",
      optionA: "2",
      optionB: "1",
      optionC: "0.5",
      optionD: "18",
      correctOption: "A",
      explanation: "moles = mass/molar mass = 36/18 = 2.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-mole-concept-q04",
      topicId: "jee-chemistry-mole-concept",
      text: "Molarity is defined as moles of solute per:",
      optionA: "Kilogram of solvent",
      optionB: "Litre of solution",
      optionC: "Litre of solvent",
      optionD: "Mole of solution",
      correctOption: "B",
      explanation: "Molarity = moles of solute per litre of solution.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-mole-concept-q05",
      topicId: "jee-chemistry-mole-concept",
      text: "In a reaction, the reagent that is completely consumed is called the:",
      optionA: "Excess reagent",
      optionB: "Product",
      optionC: "Catalyst",
      optionD: "Limiting reagent",
      correctOption: "D",
      explanation: "The limiting reagent runs out first and caps the amount of product.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-mole-concept-q06",
      topicId: "jee-chemistry-mole-concept",
      text: "The mass of 0.5 mole of CO2 (molar mass 44) is:",
      optionA: "22 g",
      optionB: "11 g",
      optionC: "44 g",
      optionD: "88 g",
      correctOption: "A",
      explanation: "mass = moles x molar mass = 0.5 x 44 = 22 g.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-mole-concept-q07",
      topicId: "jee-chemistry-mole-concept",
      text: "On dilution of a solution, the number of moles of solute:",
      optionA: "Increases",
      optionB: "Becomes zero",
      optionC: "Decreases",
      optionD: "Stays the same",
      correctOption: "D",
      explanation: "Dilution adds only solvent, so moles of solute stay constant (M1V1 = M2V2).",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-mole-concept-q08",
      topicId: "jee-chemistry-mole-concept",
      text: "The empirical formula of a compound with 40 percent C, 6.7 percent H and 53.3 percent O (by mass) is:",
      optionA: "CHO",
      optionB: "CH4O",
      optionC: "C2H4O2",
      optionD: "CH2O",
      correctOption: "D",
      explanation: "Mole ratio C:H:O is about 1:2:1, giving the empirical formula CH2O.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-equilibrium-q01",
      topicId: "jee-chemistry-equilibrium",
      text: "At chemical equilibrium, the rates of the forward and reverse reactions are:",
      optionA: "Equal",
      optionB: "Maximum",
      optionC: "Zero",
      optionD: "Unrelated",
      correctOption: "A",
      explanation: "Equilibrium is dynamic: forward and reverse rates are equal.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-equilibrium-q02",
      topicId: "jee-chemistry-equilibrium",
      text: "The pH of a 0.01 M strong acid solution is:",
      optionA: "1",
      optionB: "2",
      optionC: "12",
      optionD: "0.01",
      correctOption: "B",
      explanation: "pH = -log(0.01) = 2.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-equilibrium-q03",
      topicId: "jee-chemistry-equilibrium",
      text: "Adding more reactant to a system at equilibrium shifts it, by Le Chatelier, toward the:",
      optionA: "Reactants",
      optionB: "Products",
      optionC: "No change",
      optionD: "Solid phase",
      correctOption: "B",
      explanation: "Increasing a reactant drives the equilibrium toward the products.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-equilibrium-q04",
      topicId: "jee-chemistry-equilibrium",
      text: "The ionic product of water Kw at 25 C is:",
      optionA: "10^-7",
      optionB: "10^-14",
      optionC: "10^-1",
      optionD: "1",
      correctOption: "B",
      explanation: "Kw = [H+][OH-] = 1.0 x 10^-14 at 25 C.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-equilibrium-q05",
      topicId: "jee-chemistry-equilibrium",
      text: "Increasing pressure on a gaseous equilibrium shifts it toward the side with:",
      optionA: "Higher temperature",
      optionB: "More gas moles",
      optionC: "Fewer gas moles",
      optionD: "More solid",
      correctOption: "C",
      explanation: "Higher pressure favours the side with fewer moles of gas.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-equilibrium-q06",
      topicId: "jee-chemistry-equilibrium",
      text: "A buffer solution is best described as one that resists changes in:",
      optionA: "Temperature",
      optionB: "Volume",
      optionC: "Colour",
      optionD: "pH",
      correctOption: "D",
      explanation: "A buffer resists pH change on adding small amounts of acid or base.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-equilibrium-q07",
      topicId: "jee-chemistry-equilibrium",
      text: "The relation between Kp and Kc is Kp =:",
      optionA: "Kc + RT",
      optionB: "Kc / RT",
      optionC: "Kc (RT)^delta-n",
      optionD: "Kc x RT",
      correctOption: "C",
      explanation: "Kp = Kc (RT) raised to the change in moles of gas, delta-n.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-equilibrium-q08",
      topicId: "jee-chemistry-equilibrium",
      text: "Adding a common ion to a weak electrolyte solution:",
      optionA: "Increases its ionisation",
      optionB: "Changes its identity",
      optionC: "Has no effect",
      optionD: "Suppresses its ionisation",
      correctOption: "D",
      explanation: "The common-ion effect shifts equilibrium back, suppressing ionisation.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-thermodynamics-q01",
      topicId: "jee-chemistry-thermodynamics",
      text: "A reaction is spontaneous when the Gibbs energy change is:",
      optionA: "Positive",
      optionB: "Negative",
      optionC: "Zero",
      optionD: "Infinite",
      correctOption: "B",
      explanation: "Spontaneity requires delta G to be negative.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-thermodynamics-q02",
      topicId: "jee-chemistry-thermodynamics",
      text: "Hess's law is based on the fact that enthalpy is a:",
      optionA: "Path function",
      optionB: "State function",
      optionC: "Random variable",
      optionD: "Constant for all reactions",
      correctOption: "B",
      explanation: "Enthalpy is a state function, so delta H is path-independent.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-thermodynamics-q03",
      topicId: "jee-chemistry-thermodynamics",
      text: "The Gibbs energy relation is delta G =:",
      optionA: "delta H + T delta S",
      optionB: "T delta S - delta H",
      optionC: "delta H - T delta S",
      optionD: "delta H x T delta S",
      correctOption: "C",
      explanation: "delta G = delta H - T delta S.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-thermodynamics-q04",
      topicId: "jee-chemistry-thermodynamics",
      text: "For an exothermic reaction, the enthalpy change delta H is:",
      optionA: "Positive",
      optionB: "Zero",
      optionC: "Always one",
      optionD: "Negative",
      correctOption: "D",
      explanation: "Exothermic reactions release heat, so delta H is negative.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-thermodynamics-q05",
      topicId: "jee-chemistry-thermodynamics",
      text: "The entropy of a perfect crystal at absolute zero is, by the third law:",
      optionA: "Zero",
      optionB: "Maximum",
      optionC: "Negative",
      optionD: "Undefined",
      correctOption: "A",
      explanation: "The third law sets the entropy of a perfect crystal at 0 K to zero.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-thermodynamics-q06",
      topicId: "jee-chemistry-thermodynamics",
      text: "At equilibrium, the Gibbs energy change of a reaction is:",
      optionA: "Maximum",
      optionB: "Zero",
      optionC: "Minimum negative",
      optionD: "Large positive",
      correctOption: "B",
      explanation: "At equilibrium delta G = 0.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-thermodynamics-q07",
      topicId: "jee-chemistry-thermodynamics",
      text: "The relation between standard Gibbs energy and equilibrium constant is delta G-standard =:",
      optionA: "-RT ln K",
      optionB: "RT ln K",
      optionC: "-R/T ln K",
      optionD: "RT/K",
      correctOption: "A",
      explanation: "delta G-standard = -RT ln K links thermodynamics to equilibrium.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-thermodynamics-q08",
      topicId: "jee-chemistry-thermodynamics",
      text: "Which reaction generally shows a positive entropy change?",
      optionA: "Solid to gas",
      optionB: "Liquid to solid",
      optionC: "Gas to liquid",
      optionD: "Two gases combining into one",
      correctOption: "A",
      explanation: "Sublimation increases disorder, giving a positive entropy change.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-goc-q01",
      topicId: "jee-chemistry-goc",
      text: "The stability order of carbocations is:",
      optionA: "methyl > 1 degree > 2 degree > 3 degree",
      optionB: "All equally stable",
      optionC: "3 degree > 2 degree > 1 degree > methyl",
      optionD: "1 degree > 2 degree > 3 degree",
      correctOption: "C",
      explanation: "Tertiary carbocations are most stable due to hyperconjugation and inductive donation.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-goc-q02",
      topicId: "jee-chemistry-goc",
      text: "An electron-deficient species that seeks electrons is a:",
      optionA: "Nucleophile",
      optionB: "Free radical",
      optionC: "Electrophile",
      optionD: "Carbanion",
      correctOption: "C",
      explanation: "Electrophiles are electron-poor and accept electron pairs.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-goc-q03",
      topicId: "jee-chemistry-goc",
      text: "The -NO2 group exerts which kind of inductive effect?",
      optionA: "Electron-withdrawing (-I)",
      optionB: "Electron-donating (+I)",
      optionC: "No effect",
      optionD: "Only resonance",
      correctOption: "A",
      explanation: "Nitro is strongly electron-withdrawing, showing a -I effect.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-goc-q04",
      topicId: "jee-chemistry-goc",
      text: "A carbon atom bonded to four different groups is called:",
      optionA: "Quaternary",
      optionB: "Primary",
      optionC: "Aromatic",
      optionD: "Chiral",
      correctOption: "D",
      explanation: "A chiral (asymmetric) carbon has four different substituents and is optically active.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-goc-q05",
      topicId: "jee-chemistry-goc",
      text: "Which is the strongest acid among the following?",
      optionA: "Ethanol",
      optionB: "Acetic acid",
      optionC: "Phenol",
      optionD: "Water",
      correctOption: "B",
      explanation: "Carboxylic acids are stronger than phenols and alcohols due to resonance-stabilised anions.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-goc-q06",
      topicId: "jee-chemistry-goc",
      text: "Hyperconjugation involves the delocalisation of electrons from:",
      optionA: "Lone pairs",
      optionB: "pi to pi bonds",
      optionC: "d orbitals",
      optionD: "Adjacent C-H sigma bonds",
      correctOption: "D",
      explanation: "Hyperconjugation delocalises electrons of neighbouring C-H sigma bonds into an empty or pi orbital.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-goc-q07",
      topicId: "jee-chemistry-goc",
      text: "Compounds with the same molecular formula but different structures are called:",
      optionA: "Isotopes",
      optionB: "Homologues",
      optionC: "Allotropes",
      optionD: "Isomers",
      correctOption: "D",
      explanation: "Isomers share a molecular formula but differ in structure or arrangement.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-goc-q08",
      topicId: "jee-chemistry-goc",
      text: "The resonance (+M) effect of -OH on benzene makes the ring:",
      optionA: "Deactivated",
      optionB: "Inert",
      optionC: "Meta-directing",
      optionD: "Activated toward electrophiles",
      correctOption: "D",
      explanation: "-OH donates electrons by resonance, activating the ring and directing ortho/para.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-hydrocarbons-q01",
      topicId: "jee-chemistry-hydrocarbons",
      text: "The general formula of an alkane is:",
      optionA: "CnHn",
      optionB: "CnH2n",
      optionC: "CnH2n-2",
      optionD: "CnH2n+2",
      correctOption: "D",
      explanation: "Saturated open-chain alkanes follow CnH2n+2.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-hydrocarbons-q02",
      topicId: "jee-chemistry-hydrocarbons",
      text: "Alkanes typically undergo which kind of reaction with halogens in sunlight?",
      optionA: "Electrophilic addition",
      optionB: "Free-radical substitution",
      optionC: "Nucleophilic substitution",
      optionD: "Elimination",
      correctOption: "B",
      explanation: "Alkanes undergo free-radical substitution with halogens under UV light.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-hydrocarbons-q03",
      topicId: "jee-chemistry-hydrocarbons",
      text: "Markovnikov's rule predicts the addition of HBr to propene gives mainly:",
      optionA: "Propane",
      optionB: "1-bromopropane",
      optionC: "2-bromopropane",
      optionD: "Propyne",
      correctOption: "C",
      explanation: "H adds to the carbon with more hydrogens, putting Br on C2 (2-bromopropane).",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-hydrocarbons-q04",
      topicId: "jee-chemistry-hydrocarbons",
      text: "Benzene preferentially undergoes:",
      optionA: "Free-radical addition",
      optionB: "Addition reactions",
      optionC: "Nucleophilic addition",
      optionD: "Electrophilic substitution",
      correctOption: "D",
      explanation: "Aromatic stability makes benzene favour electrophilic substitution over addition.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-hydrocarbons-q05",
      topicId: "jee-chemistry-hydrocarbons",
      text: "The number of pi bonds in an alkyne triple bond is:",
      optionA: "0",
      optionB: "2",
      optionC: "3",
      optionD: "1",
      correctOption: "B",
      explanation: "A triple bond has one sigma and two pi bonds.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-hydrocarbons-q06",
      topicId: "jee-chemistry-hydrocarbons",
      text: "Aromaticity by Huckel's rule requires the number of pi electrons to equal:",
      optionA: "4n + 2",
      optionB: "2n",
      optionC: "4n",
      optionD: "n + 1",
      correctOption: "A",
      explanation: "Huckel's rule: a planar cyclic system is aromatic with (4n + 2) pi electrons.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-hydrocarbons-q07",
      topicId: "jee-chemistry-hydrocarbons",
      text: "Addition of HBr to an alkene in the presence of peroxide gives anti-Markovnikov product via:",
      optionA: "Carbocation mechanism",
      optionB: "Ionic mechanism",
      optionC: "Free-radical mechanism",
      optionD: "No reaction",
      correctOption: "C",
      explanation: "The peroxide effect proceeds by a free-radical chain, reversing the regiochemistry.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-hydrocarbons-q08",
      topicId: "jee-chemistry-hydrocarbons",
      text: "A -NO2 substituent on benzene directs an incoming electrophile to the:",
      optionA: "Meta position",
      optionB: "Para position",
      optionC: "Ortho position",
      optionD: "Ipso position",
      correctOption: "A",
      explanation: "Nitro is a deactivating, meta-directing group.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-coordination-compounds-q01",
      topicId: "jee-chemistry-coordination-compounds",
      text: "The coordination number of the central metal in [Co(NH3)6]3+ is:",
      optionA: "6",
      optionB: "4",
      optionC: "3",
      optionD: "2",
      correctOption: "A",
      explanation: "Six ammonia ligands give a coordination number of 6.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-coordination-compounds-q02",
      topicId: "jee-chemistry-coordination-compounds",
      text: "A ligand that binds through two donor atoms is called:",
      optionA: "Monodentate",
      optionB: "Ambidentate",
      optionC: "Bidentate",
      optionD: "Neutral",
      correctOption: "C",
      explanation: "A bidentate ligand, such as ethylenediamine, donates through two atoms.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-coordination-compounds-q03",
      topicId: "jee-chemistry-coordination-compounds",
      text: "In crystal field theory, ligands split the d orbitals into:",
      optionA: "t2g and eg sets",
      optionB: "s and p sets",
      optionC: "Two equal halves",
      optionD: "Three triplets",
      correctOption: "A",
      explanation: "In an octahedral field, the d orbitals split into lower t2g and higher eg sets.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-coordination-compounds-q04",
      topicId: "jee-chemistry-coordination-compounds",
      text: "Which ligand is a strong-field ligand that favours low-spin complexes?",
      optionA: "I-",
      optionB: "Br-",
      optionC: "CN-",
      optionD: "Cl-",
      correctOption: "C",
      explanation: "Cyanide is a strong-field ligand causing large splitting and low-spin pairing.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-coordination-compounds-q05",
      topicId: "jee-chemistry-coordination-compounds",
      text: "The spin-only magnetic moment for a complex with 2 unpaired electrons is about:",
      optionA: "1.73 BM",
      optionB: "0 BM",
      optionC: "3.87 BM",
      optionD: "2.83 BM",
      correctOption: "D",
      explanation: "mu = sqrt(n(n+2)) = sqrt(8) = 2.83 BM for n = 2.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-coordination-compounds-q06",
      topicId: "jee-chemistry-coordination-compounds",
      text: "cis-trans isomerism in coordination compounds is a type of:",
      optionA: "Ionisation isomerism",
      optionB: "Optical isomerism",
      optionC: "Geometrical isomerism",
      optionD: "Linkage isomerism",
      correctOption: "C",
      explanation: "cis and trans arrangements of ligands are geometrical isomers.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-coordination-compounds-q07",
      topicId: "jee-chemistry-coordination-compounds",
      text: "A polydentate ligand forming a ring with the metal is said to produce a:",
      optionA: "Lattice",
      optionB: "Chelate",
      optionC: "Salt bridge",
      optionD: "Polymer",
      correctOption: "B",
      explanation: "Ring formation by a polydentate ligand is called chelation, giving a chelate.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-coordination-compounds-q08",
      topicId: "jee-chemistry-coordination-compounds",
      text: "In the spectrochemical series, which ligand causes the largest crystal-field splitting?",
      optionA: "H2O",
      optionB: "CO",
      optionC: "NH3",
      optionD: "Cl-",
      correctOption: "B",
      explanation: "CO lies highest in the spectrochemical series, producing the largest splitting.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-electrochemistry-q01",
      topicId: "jee-chemistry-electrochemistry",
      text: "In a galvanic cell, oxidation occurs at the:",
      optionA: "Anode",
      optionB: "Salt bridge",
      optionC: "Cathode",
      optionD: "Electrolyte",
      correctOption: "A",
      explanation: "Oxidation always occurs at the anode of any electrochemical cell.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-electrochemistry-q02",
      topicId: "jee-chemistry-electrochemistry",
      text: "The value of the Faraday constant is approximately:",
      optionA: "9650 C/mol",
      optionB: "96500 C/mol",
      optionC: "6.022 x 10^23 C/mol",
      optionD: "1.6 x 10^-19 C/mol",
      correctOption: "B",
      explanation: "One Faraday is about 96500 C, the charge of one mole of electrons.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-electrochemistry-q03",
      topicId: "jee-chemistry-electrochemistry",
      text: "The standard cell potential is given by E-cathode minus:",
      optionA: "Zero",
      optionB: "E-anode",
      optionC: "E-electrolyte",
      optionD: "Twice E-anode",
      correctOption: "B",
      explanation: "E-cell-standard = E-cathode-standard minus E-anode-standard.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-electrochemistry-q04",
      topicId: "jee-chemistry-electrochemistry",
      text: "The Nernst equation introduces a correction term proportional to:",
      optionA: "1/Q",
      optionB: "Q squared",
      optionC: "exp(Q)",
      optionD: "log Q",
      correctOption: "D",
      explanation: "The Nernst equation subtracts (0.059/n) log Q from the standard potential.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-electrochemistry-q05",
      topicId: "jee-chemistry-electrochemistry",
      text: "A positive standard reduction potential indicates a species that is a:",
      optionA: "Strong oxidising agent",
      optionB: "Poor conductor",
      optionC: "Neutral species",
      optionD: "Strong reducing agent",
      correctOption: "A",
      explanation: "More positive reduction potential means a stronger tendency to be reduced, a good oxidiser.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-electrochemistry-q06",
      topicId: "jee-chemistry-electrochemistry",
      text: "The relation between Gibbs energy and cell potential is delta G-standard =:",
      optionA: "nFE-standard",
      optionB: "nF / E-standard",
      optionC: "-nFE-standard",
      optionD: "E-standard / nF",
      correctOption: "C",
      explanation: "delta G-standard = -nFE-cell-standard.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-electrochemistry-q07",
      topicId: "jee-chemistry-electrochemistry",
      text: "Kohlrausch's law concerns the molar conductivity at:",
      optionA: "Infinite dilution",
      optionB: "Freezing point",
      optionC: "Standard pressure",
      optionD: "High concentration",
      correctOption: "A",
      explanation: "Kohlrausch's law gives molar conductivity at infinite dilution as a sum of ionic contributions.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-electrochemistry-q08",
      topicId: "jee-chemistry-electrochemistry",
      text: "Passing 96500 C through molten NaCl deposits how many gram-equivalents of sodium?",
      optionA: "1",
      optionB: "0.5",
      optionC: "2",
      optionD: "23",
      correctOption: "A",
      explanation: "By Faraday's law, 96500 C deposits one gram-equivalent of the element.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-states-of-matter-q01",
      topicId: "jee-chemistry-states-of-matter",
      text: "Boyle's law states that at constant temperature, pressure is:",
      optionA: "Proportional to temperature",
      optionB: "Proportional to volume",
      optionC: "Independent of volume",
      optionD: "Inversely proportional to volume",
      correctOption: "D",
      explanation: "At constant T, PV is constant, so P varies inversely with V.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-states-of-matter-q02",
      topicId: "jee-chemistry-states-of-matter",
      text: "The ideal gas constant R in SI units is approximately:",
      optionA: "8.314 J/(mol K)",
      optionB: "96500 J/(mol K)",
      optionC: "22.4 J/(mol K)",
      optionD: "0.0821 J/(mol K)",
      correctOption: "A",
      explanation: "R = 8.314 J/(mol K) in SI units.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-states-of-matter-q03",
      topicId: "jee-chemistry-states-of-matter",
      text: "Charles's law states that at constant pressure, volume is proportional to:",
      optionA: "Pressure",
      optionB: "1/Temperature",
      optionC: "Number of collisions",
      optionD: "Absolute temperature",
      correctOption: "D",
      explanation: "At constant pressure, V is directly proportional to absolute temperature.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-states-of-matter-q04",
      topicId: "jee-chemistry-states-of-matter",
      text: "Dalton's law of partial pressures states that the total pressure equals the:",
      optionA: "Product of partial pressures",
      optionB: "Sum of partial pressures",
      optionC: "Average of partial pressures",
      optionD: "Largest partial pressure",
      correctOption: "B",
      explanation: "Total pressure is the sum of the partial pressures of all gases present.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-states-of-matter-q05",
      topicId: "jee-chemistry-states-of-matter",
      text: "The compressibility factor Z for an ideal gas is:",
      optionA: "Greater than 1 always",
      optionB: "0",
      optionC: "1",
      optionD: "Less than 0",
      correctOption: "C",
      explanation: "For an ideal gas Z = PV/nRT = 1.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-states-of-matter-q06",
      topicId: "jee-chemistry-states-of-matter",
      text: "In the van der Waals equation, the constant b corrects for the:",
      optionA: "Intermolecular attraction",
      optionB: "Temperature drift",
      optionC: "Finite volume of molecules",
      optionD: "Number of moles",
      correctOption: "C",
      explanation: "The constant b accounts for the finite volume occupied by gas molecules.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-states-of-matter-q07",
      topicId: "jee-chemistry-states-of-matter",
      text: "Real gases behave most ideally at:",
      optionA: "High pressure, low temperature",
      optionB: "Low pressure, low temperature",
      optionC: "High pressure, high temperature",
      optionD: "Low pressure, high temperature",
      correctOption: "D",
      explanation: "At low pressure and high temperature intermolecular forces become negligible.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-states-of-matter-q08",
      topicId: "jee-chemistry-states-of-matter",
      text: "The rms speed of gas molecules increases with:",
      optionA: "Increasing molar mass",
      optionB: "Increasing temperature",
      optionC: "Decreasing temperature",
      optionD: "Increasing pressure only",
      correctOption: "B",
      explanation: "v_rms = sqrt(3RT/M) rises with temperature and falls with molar mass.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-complex-numbers-q01",
      topicId: "jee-mathematics-complex-numbers",
      text: "The modulus of the complex number 3 + 4i is:",
      optionA: "25",
      optionB: "5",
      optionC: "7",
      optionD: "1",
      correctOption: "B",
      explanation: "|z| = sqrt(3² + 4²) = sqrt(25) = 5.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-complex-numbers-q02",
      topicId: "jee-mathematics-complex-numbers",
      text: "The value of i raised to the power 4 is:",
      optionA: "i",
      optionB: "-1",
      optionC: "1",
      optionD: "-i",
      correctOption: "C",
      explanation: "i² = -1, so i^4 = (i²)² = 1.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-complex-numbers-q03",
      topicId: "jee-mathematics-complex-numbers",
      text: "The sum of the three cube roots of unity is:",
      optionA: "3",
      optionB: "1",
      optionC: "-1",
      optionD: "0",
      correctOption: "D",
      explanation: "1 + omega + omega² = 0 for the cube roots of unity.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-complex-numbers-q04",
      topicId: "jee-mathematics-complex-numbers",
      text: "The conjugate of the complex number 2 - 5i is:",
      optionA: "-2 + 5i",
      optionB: "-2 - 5i",
      optionC: "2 + 5i",
      optionD: "5 - 2i",
      correctOption: "C",
      explanation: "The conjugate flips the sign of the imaginary part, giving 2 + 5i.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-complex-numbers-q05",
      topicId: "jee-mathematics-complex-numbers",
      text: "By De Moivre's theorem, (cos(theta) + i sin(theta)) raised to n equals:",
      optionA: "cos(theta/n) + i sin(theta/n)",
      optionB: "cos(n theta) - i sin(n theta)",
      optionC: "n cos(theta) + i n sin(theta)",
      optionD: "cos(n theta) + i sin(n theta)",
      correctOption: "D",
      explanation: "De Moivre's theorem gives cos(n theta) + i sin(n theta).",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-complex-numbers-q06",
      topicId: "jee-mathematics-complex-numbers",
      text: "The product of a complex number z and its conjugate equals:",
      optionA: "z",
      optionB: "Modulus of z",
      optionC: "Zero",
      optionD: "Square of the modulus of z",
      correctOption: "D",
      explanation: "z times its conjugate equals |z|².",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-complex-numbers-q07",
      topicId: "jee-mathematics-complex-numbers",
      text: "Multiplying a complex number by i rotates its representation in the plane by:",
      optionA: "90 degrees",
      optionB: "45 degrees",
      optionC: "180 degrees",
      optionD: "270 degrees",
      correctOption: "A",
      explanation: "Multiplication by i is rotation by 90 degrees about the origin.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-complex-numbers-q08",
      topicId: "jee-mathematics-complex-numbers",
      text: "The equation |z - 2| = 3 represents in the complex plane a:",
      optionA: "Circle of radius 3",
      optionB: "Single point",
      optionC: "Parabola",
      optionD: "Straight line",
      correctOption: "A",
      explanation: "|z - z0| = r is a circle of radius r centred at z0, here radius 3 at 2.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-sequences-series-q01",
      topicId: "jee-mathematics-sequences-series",
      text: "The 10th term of the AP 2, 5, 8, ... is:",
      optionA: "27",
      optionB: "29",
      optionC: "30",
      optionD: "32",
      correctOption: "B",
      explanation: "a_n = a + (n-1)d = 2 + 9(3) = 29.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-sequences-series-q02",
      topicId: "jee-mathematics-sequences-series",
      text: "The sum of the first n natural numbers is:",
      optionA: "n(n+1)",
      optionB: "n(n+1)/2",
      optionC: "n²",
      optionD: "n(2n+1)/6",
      correctOption: "B",
      explanation: "Sum of first n naturals is n(n+1)/2.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-sequences-series-q03",
      topicId: "jee-mathematics-sequences-series",
      text: "The sum of an infinite GP with first term 1 and ratio 1/2 is:",
      optionA: "Infinite",
      optionB: "1",
      optionC: "1.5",
      optionD: "2",
      correctOption: "D",
      explanation: "S = a/(1 - r) = 1/(1 - 0.5) = 2.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-sequences-series-q04",
      topicId: "jee-mathematics-sequences-series",
      text: "The geometric mean of 4 and 9 is:",
      optionA: "13",
      optionB: "6.5",
      optionC: "6",
      optionD: "36",
      correctOption: "C",
      explanation: "GM = sqrt(4 x 9) = sqrt(36) = 6.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-sequences-series-q05",
      topicId: "jee-mathematics-sequences-series",
      text: "For positive numbers, the relation among the three means is:",
      optionA: "AM = GM = HM",
      optionB: "AM is at least GM is at least HM",
      optionC: "HM is at least GM is at least AM",
      optionD: "GM is the largest",
      correctOption: "B",
      explanation: "AM is greater than or equal to GM, which is greater than or equal to HM.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-sequences-series-q06",
      topicId: "jee-mathematics-sequences-series",
      text: "The 5th term of the GP 3, 6, 12, ... is:",
      optionA: "24",
      optionB: "96",
      optionC: "36",
      optionD: "48",
      correctOption: "D",
      explanation: "a_n = a r^(n-1) = 3 x 2^4 = 48.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-sequences-series-q07",
      topicId: "jee-mathematics-sequences-series",
      text: "The sum of squares of the first n natural numbers is:",
      optionA: "n(n+1)/2",
      optionB: "n(n+1)(2n+1)/6",
      optionC: "[n(n+1)/2]²",
      optionD: "n²",
      correctOption: "B",
      explanation: "Sum of squares is n(n+1)(2n+1)/6.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-sequences-series-q08",
      topicId: "jee-mathematics-sequences-series",
      text: "A sequence whose reciprocals form an AP is called a:",
      optionA: "Geometric progression",
      optionB: "Fibonacci sequence",
      optionC: "Arithmetic progression",
      optionD: "Harmonic progression",
      correctOption: "D",
      explanation: "If reciprocals are in AP, the original sequence is a harmonic progression.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-permutations-combinations-q01",
      topicId: "jee-mathematics-permutations-combinations",
      text: "The value of 5! (5 factorial) is:",
      optionA: "25",
      optionB: "720",
      optionC: "60",
      optionD: "120",
      correctOption: "D",
      explanation: "5! = 5 x 4 x 3 x 2 x 1 = 120.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-permutations-combinations-q02",
      topicId: "jee-mathematics-permutations-combinations",
      text: "The number of ways to choose 2 items from 5 distinct items is:",
      optionA: "5",
      optionB: "25",
      optionC: "10",
      optionD: "20",
      correctOption: "C",
      explanation: "Choosing 2 from 5 is a combination: 5C2 = 5!/(2!·3!) = 10.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-permutations-combinations-q03",
      topicId: "jee-mathematics-permutations-combinations",
      text: "The number of arrangements (permutations) of 3 items chosen from 5 is:",
      optionA: "15",
      optionB: "60",
      optionC: "120",
      optionD: "10",
      correctOption: "B",
      explanation: "5P3 = 5!/(5−3)! = 5!/2! = 60 ordered arrangements.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-permutations-combinations-q04",
      topicId: "jee-mathematics-permutations-combinations",
      text: "The number of circular permutations of 5 distinct objects is:",
      optionA: "5",
      optionB: "120",
      optionC: "24",
      optionD: "60",
      correctOption: "C",
      explanation: "Circular permutations of n objects equal (n-1)! = 4! = 24.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-permutations-combinations-q05",
      topicId: "jee-mathematics-permutations-combinations",
      text: "The sum of all binomial coefficients nC0 + nC1 + ... + nCn equals:",
      optionA: "n",
      optionB: "n squared",
      optionC: "n!",
      optionD: "2 raised to n",
      correctOption: "D",
      explanation: "Setting a = b = 1 in (a+b)^n gives the sum 2 raised to n.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-permutations-combinations-q06",
      topicId: "jee-mathematics-permutations-combinations",
      text: "The number of ways to arrange the letters of the word LEVEL is:",
      optionA: "120",
      optionB: "60",
      optionC: "30",
      optionD: "20",
      correctOption: "C",
      explanation: "LEVEL has 5 letters with L and E repeated twice: 5!/(2! 2!) = 30.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-permutations-combinations-q07",
      topicId: "jee-mathematics-permutations-combinations",
      text: "The identity nCr equals:",
      optionA: "nC(n+r)",
      optionB: "nCr-1",
      optionC: "n!/r!",
      optionD: "nC(n-r)",
      correctOption: "D",
      explanation: "By symmetry, nCr = nC(n-r).",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-permutations-combinations-q08",
      topicId: "jee-mathematics-permutations-combinations",
      text: "The number of ways to select at least one item from 4 distinct items is:",
      optionA: "4",
      optionB: "8",
      optionC: "15",
      optionD: "16",
      correctOption: "C",
      explanation: "Total subsets minus the empty set: 2^4 - 1 = 15.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-binomial-theorem-q01",
      topicId: "jee-mathematics-binomial-theorem",
      text: "The number of terms in the expansion of (a + b) raised to 7 is:",
      optionA: "7",
      optionB: "14",
      optionC: "9",
      optionD: "8",
      correctOption: "D",
      explanation: "The expansion of (a + b)^n has n + 1 terms, here 8.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-binomial-theorem-q02",
      topicId: "jee-mathematics-binomial-theorem",
      text: "The general term of (a + b) raised to n is:",
      optionA: "nCr a^r b^(n-r)",
      optionB: "nCr a^(n-r) b^r",
      optionC: "nPr a^(n-r) b^r",
      optionD: "a^(n-r) b^r",
      correctOption: "B",
      explanation: "The (r+1)th term is nCr times a^(n-r) times b^r.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-binomial-theorem-q03",
      topicId: "jee-mathematics-binomial-theorem",
      text: "The coefficient of x² in the expansion of (1 + x) raised to 4 is:",
      optionA: "12",
      optionB: "4",
      optionC: "8",
      optionD: "6",
      correctOption: "D",
      explanation: "The coefficient is 4C2 = 6.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-binomial-theorem-q04",
      topicId: "jee-mathematics-binomial-theorem",
      text: "The middle term in the expansion of (a + b) raised to 6 is the term number:",
      optionA: "4th",
      optionB: "3rd",
      optionC: "5th",
      optionD: "6th",
      correctOption: "A",
      explanation: "For n = 6 (even), the single middle term is the (n/2 + 1) = 4th term.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-binomial-theorem-q05",
      topicId: "jee-mathematics-binomial-theorem",
      text: "The sum of the binomial coefficients in (1 + x) raised to 5 is:",
      optionA: "16",
      optionB: "32",
      optionC: "10",
      optionD: "25",
      correctOption: "B",
      explanation: "Putting x = 1 gives 2^5 = 32.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-binomial-theorem-q06",
      topicId: "jee-mathematics-binomial-theorem",
      text: "For small x, the approximation (1 + x) raised to n is approximately:",
      optionA: "1 + x raised to n",
      optionB: "1 - nx",
      optionC: "1 + nx",
      optionD: "nx",
      correctOption: "C",
      explanation: "For small x, (1 + x)^n is about 1 + nx.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-binomial-theorem-q07",
      topicId: "jee-mathematics-binomial-theorem",
      text: "The number of middle terms in the expansion of (a + b) raised to 9 is:",
      optionA: "1",
      optionB: "0",
      optionC: "2",
      optionD: "3",
      correctOption: "C",
      explanation: "When n is odd there are two middle terms.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-binomial-theorem-q08",
      topicId: "jee-mathematics-binomial-theorem",
      text: "Pascal's rule states nCr + nC(r-1) equals:",
      optionA: "(n+1)Cr",
      optionB: "nC(r+1)",
      optionC: "(n-1)Cr",
      optionD: "2 nCr",
      correctOption: "A",
      explanation: "Pascal's rule: nCr + nC(r-1) = (n+1)Cr.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-matrices-determinants-q01",
      topicId: "jee-mathematics-matrices-determinants",
      text: "The determinant of the 2x2 matrix with rows (2, 3) and (1, 4) is:",
      optionA: "8",
      optionB: "5",
      optionC: "11",
      optionD: "-5",
      correctOption: "B",
      explanation: "Determinant = (2)(4) - (3)(1) = 8 - 3 = 5.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-matrices-determinants-q02",
      topicId: "jee-mathematics-matrices-determinants",
      text: "A square matrix is invertible only if its determinant is:",
      optionA: "Positive",
      optionB: "Zero",
      optionC: "Non-zero",
      optionD: "An integer",
      correctOption: "C",
      explanation: "An inverse exists only when the determinant is non-zero.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-matrices-determinants-q03",
      topicId: "jee-mathematics-matrices-determinants",
      text: "Matrix multiplication is in general:",
      optionA: "Commutative",
      optionB: "Equal to addition",
      optionC: "Not commutative",
      optionD: "Always undefined",
      correctOption: "C",
      explanation: "In general AB is not equal to BA, so matrix multiplication is not commutative.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-matrices-determinants-q04",
      topicId: "jee-mathematics-matrices-determinants",
      text: "If two rows of a determinant are identical, its value is:",
      optionA: "1",
      optionB: "Doubled",
      optionC: "Negative",
      optionD: "Zero",
      correctOption: "D",
      explanation: "A determinant with two equal rows is zero.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-matrices-determinants-q05",
      topicId: "jee-mathematics-matrices-determinants",
      text: "For a 3x3 matrix A, the determinant of kA equals:",
      optionA: "k det(A)",
      optionB: "k³ det(A)",
      optionC: "det(A)",
      optionD: "k² det(A)",
      correctOption: "B",
      explanation: "For an n x n matrix, det(kA) = k^n det(A); here k³ det(A).",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-matrices-determinants-q06",
      topicId: "jee-mathematics-matrices-determinants",
      text: "A matrix that equals its own transpose is called:",
      optionA: "Skew-symmetric",
      optionB: "Singular",
      optionC: "Symmetric",
      optionD: "Orthogonal",
      correctOption: "C",
      explanation: "A matrix with transpose equal to itself is symmetric.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-matrices-determinants-q07",
      topicId: "jee-mathematics-matrices-determinants",
      text: "Cramer's rule can be used to solve a linear system only when the coefficient determinant is:",
      optionA: "Zero",
      optionB: "Even",
      optionC: "Negative",
      optionD: "Non-zero",
      correctOption: "D",
      explanation: "Cramer's rule requires a non-zero coefficient determinant for a unique solution.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-matrices-determinants-q08",
      topicId: "jee-mathematics-matrices-determinants",
      text: "The diagonal elements of a skew-symmetric matrix are all:",
      optionA: "Zero",
      optionB: "One",
      optionC: "Equal",
      optionD: "Negative",
      correctOption: "A",
      explanation: "A skew-symmetric matrix has all diagonal entries zero.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-straight-lines-circles-q01",
      topicId: "jee-mathematics-straight-lines-circles",
      text: "The slope of the line passing through (1, 2) and (3, 6) is:",
      optionA: "1",
      optionB: "2",
      optionC: "3",
      optionD: "4",
      correctOption: "B",
      explanation: "Slope = (6 - 2)/(3 - 1) = 4/2 = 2.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-straight-lines-circles-q02",
      topicId: "jee-mathematics-straight-lines-circles",
      text: "Two lines are perpendicular when the product of their slopes is:",
      optionA: "0",
      optionB: "1",
      optionC: "-1",
      optionD: "Infinite",
      correctOption: "C",
      explanation: "Perpendicular lines satisfy m1 times m2 = -1.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-straight-lines-circles-q03",
      topicId: "jee-mathematics-straight-lines-circles",
      text: "The radius of the circle x² + y² = 49 is:",
      optionA: "7",
      optionB: "49",
      optionC: "14",
      optionD: "24.5",
      correctOption: "A",
      explanation: "Comparing with x² + y² = r² gives r = sqrt(49) = 7.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-straight-lines-circles-q04",
      topicId: "jee-mathematics-straight-lines-circles",
      text: "The centre of the circle x² + y² + 2gx + 2fy + c = 0 is:",
      optionA: "(g, f)",
      optionB: "(-g, -f)",
      optionC: "(2g, 2f)",
      optionD: "(-2g, -2f)",
      correctOption: "B",
      explanation: "The centre of the general circle is (-g, -f).",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-straight-lines-circles-q05",
      topicId: "jee-mathematics-straight-lines-circles",
      text: "Two parallel lines have slopes that are:",
      optionA: "Negative reciprocals",
      optionB: "Opposite in sign",
      optionC: "Zero",
      optionD: "Equal",
      correctOption: "D",
      explanation: "Parallel lines have equal slopes.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-straight-lines-circles-q06",
      topicId: "jee-mathematics-straight-lines-circles",
      text: "The distance of the point (0, 0) from the line 3x + 4y - 10 = 0 is:",
      optionA: "1",
      optionB: "2",
      optionC: "10",
      optionD: "5",
      correctOption: "B",
      explanation: "Distance = |0 + 0 - 10|/sqrt(9 + 16) = 10/5 = 2.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-straight-lines-circles-q07",
      topicId: "jee-mathematics-straight-lines-circles",
      text: "A line is tangent to a circle when its distance from the centre equals the:",
      optionA: "Diameter",
      optionB: "Circumference",
      optionC: "Radius",
      optionD: "Zero",
      correctOption: "C",
      explanation: "Tangency requires the centre-to-line distance to equal the radius.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-straight-lines-circles-q08",
      topicId: "jee-mathematics-straight-lines-circles",
      text: "The equation of a line with slope 2 and y-intercept 3 is:",
      optionA: "y = 3x + 2",
      optionB: "y = 2x - 3",
      optionC: "y = 2x + 3",
      optionD: "x = 2y + 3",
      correctOption: "C",
      explanation: "Using y = mx + c with m = 2 and c = 3 gives y = 2x + 3.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-limits-continuity-q01",
      topicId: "jee-mathematics-limits-continuity",
      text: "The limit as x approaches 0 of sin(x)/x is:",
      optionA: "0",
      optionB: "Infinite",
      optionC: "1",
      optionD: "Undefined",
      correctOption: "C",
      explanation: "This is a standard limit equal to 1.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-limits-continuity-q02",
      topicId: "jee-mathematics-limits-continuity",
      text: "A function f is continuous at x = a if the limit of f as x approaches a equals:",
      optionA: "0",
      optionB: "Infinity",
      optionC: "f prime of a",
      optionD: "f(a)",
      correctOption: "D",
      explanation: "Continuity at a requires the limit to equal the function value f(a).",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-limits-continuity-q03",
      topicId: "jee-mathematics-limits-continuity",
      text: "The function |x| at x = 0 is:",
      optionA: "Continuous but not differentiable",
      optionB: "Undefined",
      optionC: "Discontinuous",
      optionD: "Differentiable",
      correctOption: "A",
      explanation: "|x| is continuous everywhere but has a corner at 0, so it is not differentiable there.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-limits-continuity-q04",
      topicId: "jee-mathematics-limits-continuity",
      text: "The derivative of x³ with respect to x is:",
      optionA: "x²",
      optionB: "3x²",
      optionC: "3x",
      optionD: "x³/3",
      correctOption: "B",
      explanation: "By the power rule, d/dx of x³ is 3x².",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-limits-continuity-q05",
      topicId: "jee-mathematics-limits-continuity",
      text: "The limit as x approaches 0 of (e^x - 1)/x is:",
      optionA: "0",
      optionB: "e",
      optionC: "1",
      optionD: "Infinite",
      correctOption: "C",
      explanation: "This standard limit equals 1.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-limits-continuity-q06",
      topicId: "jee-mathematics-limits-continuity",
      text: "Differentiability of a function at a point implies that it is:",
      optionA: "Discontinuous there",
      optionB: "Unbounded",
      optionC: "Continuous there",
      optionD: "Constant",
      correctOption: "C",
      explanation: "Differentiability implies continuity, though the converse is false.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-limits-continuity-q07",
      topicId: "jee-mathematics-limits-continuity",
      text: "The derivative of the product uv is:",
      optionA: "u prime v + u v prime",
      optionB: "u prime v prime",
      optionC: "u prime v - u v prime",
      optionD: "u v",
      correctOption: "A",
      explanation: "The product rule gives (uv) prime = u prime v + u v prime.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-limits-continuity-q08",
      topicId: "jee-mathematics-limits-continuity",
      text: "A limit of the indeterminate form 0/0 can often be evaluated using:",
      optionA: "The power rule",
      optionB: "Integration",
      optionC: "The product rule",
      optionD: "L'Hopital's rule",
      correctOption: "D",
      explanation: "L'Hopital's rule resolves 0/0 and infinity/infinity forms by differentiating top and bottom.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-integration-q01",
      topicId: "jee-mathematics-integration",
      text: "The integral of x² with respect to x is:",
      optionA: "2x + C",
      optionB: "x³ + C",
      optionC: "x³/3 + C",
      optionD: "3x² + C",
      correctOption: "C",
      explanation: "By the power rule, the integral of x² is x³/3 + C.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-integration-q02",
      topicId: "jee-mathematics-integration",
      text: "The integral of 1/x with respect to x is:",
      optionA: "-1/x² + C",
      optionB: "ln|x| + C",
      optionC: "x + C",
      optionD: "1 + C",
      correctOption: "B",
      explanation: "The integral of 1/x is the natural logarithm ln|x| + C.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-integration-q03",
      topicId: "jee-mathematics-integration",
      text: "The integration by parts formula is the integral of u dv equals:",
      optionA: "the integral of u times the integral of dv",
      optionB: "uv plus the integral of v du",
      optionC: "uv times the integral of du",
      optionD: "uv minus the integral of v du",
      correctOption: "D",
      explanation: "Integration by parts: integral of u dv = uv minus the integral of v du.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-integration-q04",
      topicId: "jee-mathematics-integration",
      text: "The definite integral of 2x from 0 to 3 is:",
      optionA: "6",
      optionB: "18",
      optionC: "9",
      optionD: "3",
      correctOption: "C",
      explanation: "The antiderivative is x², so the value is 9 - 0 = 9.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-integration-q05",
      topicId: "jee-mathematics-integration",
      text: "The integral over a symmetric interval (-a to a) of an odd function is:",
      optionA: "2 times the integral from 0 to a",
      optionB: "Infinite",
      optionC: "a²",
      optionD: "Zero",
      correctOption: "D",
      explanation: "An odd function integrates to zero over a symmetric interval.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-integration-q06",
      topicId: "jee-mathematics-integration",
      text: "The integral of e^x with respect to x is:",
      optionA: "e^x + C",
      optionB: "ln(x) + C",
      optionC: "e^x / x + C",
      optionD: "x e^x + C",
      correctOption: "A",
      explanation: "The integral of e^x is itself, e^x + C.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-integration-q07",
      topicId: "jee-mathematics-integration",
      text: "The Fundamental Theorem of Calculus links integration to:",
      optionA: "Multiplication",
      optionB: "Factoring",
      optionC: "Differentiation",
      optionD: "Series summation",
      correctOption: "C",
      explanation: "It states the definite integral equals the change in an antiderivative, linking it to differentiation.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-integration-q08",
      topicId: "jee-mathematics-integration",
      text: "The recommended order for choosing u in integration by parts is given by:",
      optionA: "FOIL",
      optionB: "ILATE",
      optionC: "PEMDAS",
      optionD: "SOHCAHTOA",
      correctOption: "B",
      explanation: "ILATE orders functions (inverse, log, algebraic, trig, exponential) for choosing u.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-vectors-3d-q01",
      topicId: "jee-mathematics-vectors-3d",
      text: "The dot product of two perpendicular vectors is:",
      optionA: "Maximum",
      optionB: "Negative",
      optionC: "Zero",
      optionD: "Their product of magnitudes",
      correctOption: "C",
      explanation: "a dot b = |a||b|cos(90) = 0 for perpendicular vectors.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-vectors-3d-q02",
      topicId: "jee-mathematics-vectors-3d",
      text: "The cross product of two parallel vectors is:",
      optionA: "The zero vector",
      optionB: "Maximum",
      optionC: "A scalar",
      optionD: "Their sum",
      correctOption: "A",
      explanation: "a cross b = |a||b|sin(0) = 0 for parallel vectors.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-vectors-3d-q03",
      topicId: "jee-mathematics-vectors-3d",
      text: "The magnitude of the vector (3, 0, 4) is:",
      optionA: "7",
      optionB: "25",
      optionC: "12",
      optionD: "5",
      correctOption: "D",
      explanation: "Magnitude = sqrt(9 + 0 + 16) = sqrt(25) = 5.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-vectors-3d-q04",
      topicId: "jee-mathematics-vectors-3d",
      text: "The scalar triple product of three vectors gives the volume of a:",
      optionA: "Sphere",
      optionB: "Cylinder",
      optionC: "Parallelepiped",
      optionD: "Cone",
      correctOption: "C",
      explanation: "The scalar triple product a dot (b cross c) equals the parallelepiped volume.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-vectors-3d-q05",
      topicId: "jee-mathematics-vectors-3d",
      text: "Three vectors are coplanar when their scalar triple product is:",
      optionA: "Positive",
      optionB: "Negative",
      optionC: "Zero",
      optionD: "One",
      correctOption: "C",
      explanation: "Coplanarity makes the scalar triple product (the volume) zero.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-vectors-3d-q06",
      topicId: "jee-mathematics-vectors-3d",
      text: "The direction ratios of the normal to the plane 2x + 3y - z + 5 = 0 are:",
      optionA: "(1, 1, 1)",
      optionB: "(2, 3, -1)",
      optionC: "(5, 3, -1)",
      optionD: "(2, 3, 5)",
      correctOption: "B",
      explanation: "The coefficients of x, y, z give the normal's direction ratios (2, 3, -1).",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-vectors-3d-q07",
      topicId: "jee-mathematics-vectors-3d",
      text: "The cross product of two vectors yields a vector that is:",
      optionA: "Parallel to both",
      optionB: "In the same plane",
      optionC: "Perpendicular to both",
      optionD: "Always zero",
      correctOption: "C",
      explanation: "The cross product is perpendicular to both original vectors.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-vectors-3d-q08",
      topicId: "jee-mathematics-vectors-3d",
      text: "The angle between two planes equals the angle between their:",
      optionA: "Normals",
      optionB: "Areas",
      optionC: "Intercepts",
      optionD: "Centroids",
      correctOption: "A",
      explanation: "The angle between two planes is the angle between their normal vectors.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-probability-q01",
      topicId: "jee-mathematics-probability",
      text: "The probability of getting a head in a single toss of a fair coin is:",
      optionA: "0",
      optionB: "0.5",
      optionC: "1",
      optionD: "0.25",
      correctOption: "B",
      explanation: "A fair coin has two equally likely outcomes, so P(head) = 0.5.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-probability-q02",
      topicId: "jee-mathematics-probability",
      text: "The probability of rolling a number greater than 4 on a fair die is:",
      optionA: "1/6",
      optionB: "1/3",
      optionC: "1/2",
      optionD: "2/3",
      correctOption: "B",
      explanation: "Favourable outcomes are 5 and 6, so probability = 2/6 = 1/3.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-probability-q03",
      topicId: "jee-mathematics-probability",
      text: "For two independent events, P(A and B) equals:",
      optionA: "P(A) + P(B)",
      optionB: "P(A) times P(B)",
      optionC: "P(A) - P(B)",
      optionD: "P(A)/P(B)",
      correctOption: "B",
      explanation: "Independent events satisfy P(A and B) = P(A) times P(B).",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-probability-q04",
      topicId: "jee-mathematics-probability",
      text: "The sum of the probabilities of an event and its complement is:",
      optionA: "0",
      optionB: "1",
      optionC: "0.5",
      optionD: "2",
      correctOption: "B",
      explanation: "P(E) + P(E complement) = 1.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-probability-q05",
      topicId: "jee-mathematics-probability",
      text: "For mutually exclusive events A and B, P(A or B) equals:",
      optionA: "P(A) + P(B)",
      optionB: "P(A) + P(B) - P(A and B)",
      optionC: "P(A) times P(B)",
      optionD: "1",
      correctOption: "A",
      explanation: "Mutually exclusive events cannot both occur, so P(A or B) = P(A) + P(B).",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-probability-q06",
      topicId: "jee-mathematics-probability",
      text: "The conditional probability P(A given B) is defined as:",
      optionA: "P(B)/P(A)",
      optionB: "P(A and B)/P(B)",
      optionC: "P(A and B) times P(B)",
      optionD: "P(A)/P(B)",
      correctOption: "B",
      explanation: "P(A given B) = P(A and B)/P(B).",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-probability-q07",
      topicId: "jee-mathematics-probability",
      text: "The mean of a binomial distribution with parameters n and p is:",
      optionA: "n/p",
      optionB: "npq",
      optionC: "p/n",
      optionD: "np",
      correctOption: "D",
      explanation: "The mean of a binomial distribution is np.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-probability-q08",
      topicId: "jee-mathematics-probability",
      text: "Drawing two aces in succession from a deck without replacement involves events that are:",
      optionA: "Independent",
      optionB: "Dependent",
      optionC: "Mutually exclusive",
      optionD: "Impossible",
      correctOption: "B",
      explanation: "Without replacement, the first draw changes the second's probability, so events are dependent.",
      orderIndex: 7
    },
    {
      id: "jee-physics-units-dimensions-q01",
      topicId: "jee-physics-units-dimensions",
      text: "What is the dimensional formula of force?",
      optionA: "M L T^-1",
      optionB: "M L^2 T^-2",
      optionC: "M L T^-2",
      optionD: "M L^-1 T^-2",
      correctOption: "C",
      explanation: "Force = mass times acceleration, giving M L T^-2.",
      orderIndex: 0
    },
    {
      id: "jee-physics-units-dimensions-q02",
      topicId: "jee-physics-units-dimensions",
      text: "Which quantity has the same dimensions as energy?",
      optionA: "Work",
      optionB: "Power",
      optionC: "Force",
      optionD: "Momentum",
      correctOption: "A",
      explanation: "Work and energy both have dimensions M L^2 T^-2.",
      orderIndex: 1
    },
    {
      id: "jee-physics-units-dimensions-q03",
      topicId: "jee-physics-units-dimensions",
      text: "The dimensional formula of pressure is:",
      optionA: "M L T^-2",
      optionB: "M L^-1 T^-2",
      optionC: "M L^2 T^-2",
      optionD: "M L^-2 T^-1",
      correctOption: "B",
      explanation: "Pressure is force per area: M L T^-2 divided by L^2 gives M L^-1 T^-2.",
      orderIndex: 2
    },
    {
      id: "jee-physics-units-dimensions-q04",
      topicId: "jee-physics-units-dimensions",
      text: "How many base quantities are there in the SI system?",
      optionA: "Seven",
      optionB: "Six",
      optionC: "Five",
      optionD: "Eight",
      correctOption: "A",
      explanation: "The SI system defines seven base quantities.",
      orderIndex: 3
    },
    {
      id: "jee-physics-units-dimensions-q05",
      topicId: "jee-physics-units-dimensions",
      text: "In the product Z = A^2 B / C, if each of A, B, C has 1 percent error, the maximum error in Z is:",
      optionA: "2 percent",
      optionB: "3 percent",
      optionC: "4 percent",
      optionD: "6 percent",
      correctOption: "C",
      explanation: "Fractional errors add as 2 times 1 plus 1 plus 1, giving 4 percent.",
      orderIndex: 4
    },
    {
      id: "jee-physics-units-dimensions-q06",
      topicId: "jee-physics-units-dimensions",
      text: "Which of the following is dimensionless?",
      optionA: "Strain",
      optionB: "Force",
      optionC: "Velocity",
      optionD: "Density",
      correctOption: "A",
      explanation: "Strain is a ratio of like lengths, so it has no dimensions.",
      orderIndex: 5
    },
    {
      id: "jee-physics-units-dimensions-q07",
      topicId: "jee-physics-units-dimensions",
      text: "The number of significant figures in 0.00450 is:",
      optionA: "Two",
      optionB: "Three",
      optionC: "Four",
      optionD: "Five",
      correctOption: "B",
      explanation: "Leading zeros do not count; the figures 4, 5 and trailing 0 give three.",
      orderIndex: 6
    },
    {
      id: "jee-physics-units-dimensions-q08",
      topicId: "jee-physics-units-dimensions",
      text: "The dimensional formula of power is:",
      optionA: "M L T^-3",
      optionB: "M L^2 T^-2",
      optionC: "M L^2 T^-3",
      optionD: "M L^2 T^-1",
      correctOption: "C",
      explanation: "Power is energy per time: M L^2 T^-2 divided by T gives M L^2 T^-3.",
      orderIndex: 7
    },
    {
      id: "jee-physics-fluid-mechanics-q01",
      topicId: "jee-physics-fluid-mechanics",
      text: "The upthrust on a body submerged in a fluid equals the weight of:",
      optionA: "The body",
      optionB: "The remaining fluid",
      optionC: "The container",
      optionD: "The displaced fluid",
      correctOption: "D",
      explanation: "By Archimedes' principle, upthrust equals the weight of the fluid displaced.",
      orderIndex: 0
    },
    {
      id: "jee-physics-fluid-mechanics-q02",
      topicId: "jee-physics-fluid-mechanics",
      text: "Bernoulli's theorem is a statement of conservation of:",
      optionA: "Energy",
      optionB: "Momentum",
      optionC: "Mass",
      optionD: "Charge",
      correctOption: "A",
      explanation: "Bernoulli's equation expresses conservation of energy per unit volume in a flowing fluid.",
      orderIndex: 1
    },
    {
      id: "jee-physics-fluid-mechanics-q03",
      topicId: "jee-physics-fluid-mechanics",
      text: "The hydrostatic pressure at depth h in a liquid of density rho is given by:",
      optionA: "rho times g divided by h",
      optionB: "h divided by rho times g",
      optionC: "rho times g times h",
      optionD: "rho divided by g times h",
      correctOption: "C",
      explanation: "Gauge pressure increases linearly with depth as rho times g times h.",
      orderIndex: 2
    },
    {
      id: "jee-physics-fluid-mechanics-q04",
      topicId: "jee-physics-fluid-mechanics",
      text: "The principle behind a hydraulic lift is:",
      optionA: "Archimedes' principle",
      optionB: "Bernoulli's theorem",
      optionC: "Pascal's law",
      optionD: "Stokes' law",
      correctOption: "C",
      explanation: "Pascal's law transmits applied pressure equally throughout a confined fluid.",
      orderIndex: 3
    },
    {
      id: "jee-physics-fluid-mechanics-q05",
      topicId: "jee-physics-fluid-mechanics",
      text: "An object floats when its average density is:",
      optionA: "Greater than the fluid",
      optionB: "Equal to zero",
      optionC: "Equal to gravity",
      optionD: "Less than the fluid",
      correctOption: "D",
      explanation: "If the body density is less than the fluid density, the upthrust supports it and it floats.",
      orderIndex: 4
    },
    {
      id: "jee-physics-fluid-mechanics-q06",
      topicId: "jee-physics-fluid-mechanics",
      text: "By the equation of continuity, when a pipe narrows the fluid speed:",
      optionA: "Decreases",
      optionB: "Increases",
      optionC: "Stays constant",
      optionD: "Becomes zero",
      correctOption: "B",
      explanation: "Since area times velocity is constant, a smaller area means a higher speed.",
      orderIndex: 5
    },
    {
      id: "jee-physics-fluid-mechanics-q07",
      topicId: "jee-physics-fluid-mechanics",
      text: "The viscous drag on a small sphere moving slowly through a fluid is described by:",
      optionA: "Pascal's law",
      optionB: "Stokes' law",
      optionC: "Boyle's law",
      optionD: "Hooke's law",
      correctOption: "B",
      explanation: "Stokes' law gives the drag as 6 pi eta r v on a small sphere.",
      orderIndex: 6
    },
    {
      id: "jee-physics-fluid-mechanics-q08",
      topicId: "jee-physics-fluid-mechanics",
      text: "A body falling through a viscous fluid attains terminal velocity when:",
      optionA: "Drag exceeds weight",
      optionB: "Acceleration is maximum",
      optionC: "Buoyancy is zero",
      optionD: "Net force is zero",
      correctOption: "D",
      explanation: "Terminal velocity is reached when drag plus buoyancy balance weight, so net force is zero.",
      orderIndex: 7
    },
    {
      id: "jee-physics-thermal-properties-q01",
      topicId: "jee-physics-thermal-properties",
      text: "The coefficient of volume expansion equals how many times the linear coefficient?",
      optionA: "One",
      optionB: "Two",
      optionC: "Four",
      optionD: "Three",
      correctOption: "D",
      explanation: "Volume expansion gamma equals three times the linear coefficient alpha.",
      orderIndex: 0
    },
    {
      id: "jee-physics-thermal-properties-q02",
      topicId: "jee-physics-thermal-properties",
      text: "Heat absorbed during a phase change at constant temperature is called:",
      optionA: "Specific heat",
      optionB: "Latent heat",
      optionC: "Thermal capacity",
      optionD: "Calorific value",
      correctOption: "B",
      explanation: "Latent heat is the energy for a phase change at constant temperature.",
      orderIndex: 1
    },
    {
      id: "jee-physics-thermal-properties-q03",
      topicId: "jee-physics-thermal-properties",
      text: "The power radiated by a black body is proportional to which power of its absolute temperature?",
      optionA: "First",
      optionB: "Fourth",
      optionC: "Third",
      optionD: "Second",
      correctOption: "B",
      explanation: "By the Stefan-Boltzmann law, radiated power is proportional to T to the fourth.",
      orderIndex: 2
    },
    {
      id: "jee-physics-thermal-properties-q04",
      topicId: "jee-physics-thermal-properties",
      text: "Heat needed to raise 2 kg of water by 10 degrees C (c = 4200 J per kg K) is:",
      optionA: "8400 J",
      optionB: "42000 J",
      optionC: "84000 J",
      optionD: "21000 J",
      correctOption: "C",
      explanation: "Q = m c dT = 2 times 4200 times 10 = 84000 J.",
      orderIndex: 3
    },
    {
      id: "jee-physics-thermal-properties-q05",
      topicId: "jee-physics-thermal-properties",
      text: "Newton's law of cooling states the cooling rate is proportional to:",
      optionA: "The body's volume",
      optionB: "The temperature excess",
      optionC: "The square of temperature",
      optionD: "The surface colour",
      correctOption: "B",
      explanation: "For small differences, cooling rate is proportional to the excess temperature over surroundings.",
      orderIndex: 4
    },
    {
      id: "jee-physics-thermal-properties-q06",
      topicId: "jee-physics-thermal-properties",
      text: "Heat transfer through a solid metal rod occurs mainly by:",
      optionA: "Conduction",
      optionB: "Convection",
      optionC: "Radiation",
      optionD: "Advection",
      correctOption: "A",
      explanation: "In solids heat moves by conduction without bulk movement of matter.",
      orderIndex: 5
    },
    {
      id: "jee-physics-thermal-properties-q07",
      topicId: "jee-physics-thermal-properties",
      text: "In calorimetry, the basic principle assumes that heat lost equals:",
      optionA: "Zero",
      optionB: "Work done",
      optionC: "Twice the heat gained",
      optionD: "Heat gained",
      correctOption: "D",
      explanation: "With no loss to surroundings, heat lost by the hot body equals heat gained by the cold body.",
      orderIndex: 6
    },
    {
      id: "jee-physics-thermal-properties-q08",
      topicId: "jee-physics-thermal-properties",
      text: "As temperature rises, Wien's law says the wavelength of peak emission:",
      optionA: "Increases",
      optionB: "Stays the same",
      optionC: "Decreases",
      optionD: "Becomes infinite",
      correctOption: "C",
      explanation: "Wien's law states the peak wavelength is inversely proportional to temperature, so it decreases.",
      orderIndex: 7
    },
    {
      id: "jee-physics-kinetic-theory-q01",
      topicId: "jee-physics-kinetic-theory",
      text: "The average translational kinetic energy of a gas molecule depends only on:",
      optionA: "Pressure",
      optionB: "Temperature",
      optionC: "Volume",
      optionD: "Molar mass",
      correctOption: "B",
      explanation: "Average translational KE is (3/2) k T, depending only on temperature.",
      orderIndex: 0
    },
    {
      id: "jee-physics-kinetic-theory-q02",
      topicId: "jee-physics-kinetic-theory",
      text: "The rms speed of a gas is proportional to the square root of:",
      optionA: "M divided by T",
      optionB: "T divided by M",
      optionC: "T times M",
      optionD: "Pressure",
      correctOption: "B",
      explanation: "v_rms equals the square root of 3 R T over M, so it varies as the root of T over M.",
      orderIndex: 1
    },
    {
      id: "jee-physics-kinetic-theory-q03",
      topicId: "jee-physics-kinetic-theory",
      text: "The number of degrees of freedom of a monatomic ideal gas is:",
      optionA: "Two",
      optionB: "Five",
      optionC: "Three",
      optionD: "Six",
      correctOption: "C",
      explanation: "A monatomic gas has only three translational degrees of freedom.",
      orderIndex: 2
    },
    {
      id: "jee-physics-kinetic-theory-q04",
      topicId: "jee-physics-kinetic-theory",
      text: "The ratio Cp over Cv (gamma) for a diatomic gas is:",
      optionA: "1.33",
      optionB: "1.67",
      optionC: "1.40",
      optionD: "1.50",
      correctOption: "C",
      explanation: "With f = 5, gamma = 1 + 2/5 = 1.40 for a diatomic gas.",
      orderIndex: 3
    },
    {
      id: "jee-physics-kinetic-theory-q05",
      topicId: "jee-physics-kinetic-theory",
      text: "Which speed is the largest for a gas at a given temperature?",
      optionA: "Most probable speed",
      optionB: "Average speed",
      optionC: "Root mean square speed",
      optionD: "All are equal",
      correctOption: "C",
      explanation: "The speeds rank as most probable less than average less than rms.",
      orderIndex: 4
    },
    {
      id: "jee-physics-kinetic-theory-q06",
      topicId: "jee-physics-kinetic-theory",
      text: "If the absolute temperature of a gas is doubled, the rms speed becomes:",
      optionA: "Root two times",
      optionB: "Double",
      optionC: "Half",
      optionD: "Four times",
      correctOption: "A",
      explanation: "Since v_rms varies as the root of T, doubling T multiplies the speed by root two.",
      orderIndex: 5
    },
    {
      id: "jee-physics-kinetic-theory-q07",
      topicId: "jee-physics-kinetic-theory",
      text: "Pressure of an ideal gas in kinetic theory is given by:",
      optionA: "Half rho times v_rms squared",
      optionB: "rho times v_rms",
      optionC: "One third rho times v_rms squared",
      optionD: "rho times g times h",
      correctOption: "C",
      explanation: "Kinetic theory gives P equal to one third of rho times the mean square speed.",
      orderIndex: 6
    },
    {
      id: "jee-physics-kinetic-theory-q08",
      topicId: "jee-physics-kinetic-theory",
      text: "The mean free path of gas molecules increases when:",
      optionA: "Pressure decreases",
      optionB: "Pressure increases",
      optionC: "Molecular size increases",
      optionD: "Density increases",
      correctOption: "A",
      explanation: "Lower pressure means fewer molecules per volume, so the mean free path increases.",
      orderIndex: 7
    },
    {
      id: "jee-physics-elasticity-surface-tension-q01",
      topicId: "jee-physics-elasticity-surface-tension",
      text: "Young's modulus is the ratio of:",
      optionA: "Strain to stress",
      optionB: "Force to area",
      optionC: "Stress to strain",
      optionD: "Length to force",
      correctOption: "C",
      explanation: "Young's modulus is longitudinal stress divided by longitudinal strain.",
      orderIndex: 0
    },
    {
      id: "jee-physics-elasticity-surface-tension-q02",
      topicId: "jee-physics-elasticity-surface-tension",
      text: "The excess pressure inside a soap bubble of radius R is:",
      optionA: "Two T over R",
      optionB: "Four T over R",
      optionC: "T over R",
      optionD: "T over two R",
      correctOption: "B",
      explanation: "A soap bubble has two surfaces, so excess pressure is four T over R.",
      orderIndex: 1
    },
    {
      id: "jee-physics-elasticity-surface-tension-q03",
      topicId: "jee-physics-elasticity-surface-tension",
      text: "Which modulus relates to a change in shape at constant volume?",
      optionA: "Young's modulus",
      optionB: "Shear modulus",
      optionC: "Bulk modulus",
      optionD: "Poisson's ratio",
      correctOption: "B",
      explanation: "Shear (rigidity) modulus governs shape change without volume change.",
      orderIndex: 2
    },
    {
      id: "jee-physics-elasticity-surface-tension-q04",
      topicId: "jee-physics-elasticity-surface-tension",
      text: "Capillary rise of a liquid in a tube is inversely proportional to the tube's:",
      optionA: "Length",
      optionB: "Density squared",
      optionC: "Temperature",
      optionD: "Radius",
      correctOption: "D",
      explanation: "From the capillary formula, the rise h varies inversely with the tube radius.",
      orderIndex: 3
    },
    {
      id: "jee-physics-elasticity-surface-tension-q05",
      topicId: "jee-physics-elasticity-surface-tension",
      text: "Within the elastic limit, stress is directly proportional to strain. This is:",
      optionA: "Pascal's law",
      optionB: "Bernoulli's theorem",
      optionC: "Stokes' law",
      optionD: "Hooke's law",
      correctOption: "D",
      explanation: "Hooke's law states stress is proportional to strain within the elastic limit.",
      orderIndex: 4
    },
    {
      id: "jee-physics-elasticity-surface-tension-q06",
      topicId: "jee-physics-elasticity-surface-tension",
      text: "As temperature increases, the surface tension of a liquid generally:",
      optionA: "Increases",
      optionB: "Decreases",
      optionC: "Stays constant",
      optionD: "Becomes infinite",
      correctOption: "B",
      explanation: "Surface tension decreases as temperature rises and vanishes near the critical point.",
      orderIndex: 5
    },
    {
      id: "jee-physics-elasticity-surface-tension-q07",
      topicId: "jee-physics-elasticity-surface-tension",
      text: "Comparing steel and rubber for the same stress, steel is said to be more elastic because it:",
      optionA: "Stretches more",
      optionB: "Returns with greater restoring stress",
      optionC: "Is heavier",
      optionD: "Has no elastic limit",
      correctOption: "B",
      explanation: "Steel resists deformation with a larger restoring stress, so it is more elastic than rubber.",
      orderIndex: 6
    },
    {
      id: "jee-physics-elasticity-surface-tension-q08",
      topicId: "jee-physics-elasticity-surface-tension",
      text: "Mercury in a glass capillary shows a depression because its angle of contact is:",
      optionA: "Zero",
      optionB: "Acute",
      optionC: "Obtuse",
      optionD: "Exactly ninety degrees",
      correctOption: "C",
      explanation: "Mercury wets glass poorly, giving an obtuse contact angle and a capillary depression.",
      orderIndex: 7
    },
    {
      id: "jee-physics-centre-of-mass-collisions-q01",
      topicId: "jee-physics-centre-of-mass-collisions",
      text: "The centre of mass of a system can be accelerated only by:",
      optionA: "Internal forces",
      optionB: "External forces",
      optionC: "Tension alone",
      optionD: "No force",
      correctOption: "B",
      explanation: "Internal forces cancel in pairs, so only external forces move the centre of mass.",
      orderIndex: 0
    },
    {
      id: "jee-physics-centre-of-mass-collisions-q02",
      topicId: "jee-physics-centre-of-mass-collisions",
      text: "In which collision is kinetic energy conserved?",
      optionA: "Perfectly inelastic",
      optionB: "Inelastic",
      optionC: "Elastic",
      optionD: "All collisions",
      correctOption: "C",
      explanation: "Kinetic energy is conserved only in a perfectly elastic collision.",
      orderIndex: 1
    },
    {
      id: "jee-physics-centre-of-mass-collisions-q03",
      topicId: "jee-physics-centre-of-mass-collisions",
      text: "The coefficient of restitution for a perfectly inelastic collision is:",
      optionA: "Infinite",
      optionB: "One half",
      optionC: "One",
      optionD: "Zero",
      correctOption: "D",
      explanation: "In a perfectly inelastic collision the bodies stick, giving e equal to zero.",
      orderIndex: 2
    },
    {
      id: "jee-physics-centre-of-mass-collisions-q04",
      topicId: "jee-physics-centre-of-mass-collisions",
      text: "In a 1D elastic collision between two equal masses with one at rest, after impact they:",
      optionA: "Both stop",
      optionB: "Move together",
      optionC: "Reverse and speed up",
      optionD: "Exchange velocities",
      correctOption: "D",
      explanation: "For equal masses in an elastic collision, the velocities are exchanged.",
      orderIndex: 3
    },
    {
      id: "jee-physics-centre-of-mass-collisions-q05",
      topicId: "jee-physics-centre-of-mass-collisions",
      text: "Which quantity is conserved in every type of collision?",
      optionA: "Kinetic energy",
      optionB: "Linear momentum",
      optionC: "Mechanical energy",
      optionD: "Temperature",
      correctOption: "B",
      explanation: "Linear momentum is conserved in all collisions when no external force acts.",
      orderIndex: 4
    },
    {
      id: "jee-physics-centre-of-mass-collisions-q06",
      topicId: "jee-physics-centre-of-mass-collisions",
      text: "Two masses 2 kg and 3 kg are at x = 0 and x = 5 m. The centre of mass is at:",
      optionA: "2.0 m",
      optionB: "2.5 m",
      optionC: "3.5 m",
      optionD: "3.0 m",
      correctOption: "D",
      explanation: "x_cm = (2 times 0 + 3 times 5) divided by 5 = 15/5 = 3 m.",
      orderIndex: 5
    },
    {
      id: "jee-physics-centre-of-mass-collisions-q07",
      topicId: "jee-physics-centre-of-mass-collisions",
      text: "A shell explodes in mid-air. The centre of mass of the fragments:",
      optionA: "Stops instantly",
      optionB: "Moves straight up",
      optionC: "Follows the original path",
      optionD: "Reverses direction",
      correctOption: "C",
      explanation: "Explosion forces are internal, so the centre of mass keeps its original parabolic path.",
      orderIndex: 6
    },
    {
      id: "jee-physics-centre-of-mass-collisions-q08",
      topicId: "jee-physics-centre-of-mass-collisions",
      text: "The coefficient of restitution is the ratio of relative velocity of separation to that of:",
      optionA: "Approach",
      optionB: "The centre of mass",
      optionC: "The heavier body",
      optionD: "Sound",
      correctOption: "A",
      explanation: "e is defined as the ratio of separation speed to approach speed along the line of impact.",
      orderIndex: 7
    },
    {
      id: "jee-physics-electromagnetic-waves-q01",
      topicId: "jee-physics-electromagnetic-waves",
      text: "Electromagnetic waves are:",
      optionA: "Longitudinal",
      optionB: "Transverse",
      optionC: "Mechanical",
      optionD: "Stationary only",
      correctOption: "B",
      explanation: "The E and B fields oscillate perpendicular to propagation, making EM waves transverse.",
      orderIndex: 0
    },
    {
      id: "jee-physics-electromagnetic-waves-q02",
      topicId: "jee-physics-electromagnetic-waves",
      text: "In an electromagnetic wave the ratio E0 over B0 equals:",
      optionA: "One",
      optionB: "The speed of light",
      optionC: "The permittivity",
      optionD: "The frequency",
      correctOption: "B",
      explanation: "For an EM wave in vacuum, the field amplitude ratio E0 over B0 equals c.",
      orderIndex: 1
    },
    {
      id: "jee-physics-electromagnetic-waves-q03",
      topicId: "jee-physics-electromagnetic-waves",
      text: "Which of these EM radiations has the highest frequency?",
      optionA: "Radio waves",
      optionB: "Visible light",
      optionC: "X-rays",
      optionD: "Gamma rays",
      correctOption: "D",
      explanation: "Gamma rays have the highest frequency and shortest wavelength in the spectrum.",
      orderIndex: 2
    },
    {
      id: "jee-physics-electromagnetic-waves-q04",
      topicId: "jee-physics-electromagnetic-waves",
      text: "Maxwell introduced which term to make Ampere's law consistent?",
      optionA: "Induced EMF",
      optionB: "Displacement current",
      optionC: "Eddy current",
      optionD: "Drift current",
      correctOption: "B",
      explanation: "The displacement current term let Ampere's law hold across a charging capacitor.",
      orderIndex: 3
    },
    {
      id: "jee-physics-electromagnetic-waves-q05",
      topicId: "jee-physics-electromagnetic-waves",
      text: "EM waves require which medium to travel?",
      optionA: "Solid only",
      optionB: "Liquid only",
      optionC: "No medium",
      optionD: "Gas only",
      correctOption: "C",
      explanation: "EM waves are self-sustaining and propagate through vacuum, needing no medium.",
      orderIndex: 4
    },
    {
      id: "jee-physics-electromagnetic-waves-q06",
      topicId: "jee-physics-electromagnetic-waves",
      text: "Which radiation is used in a microwave oven?",
      optionA: "X-rays",
      optionB: "Gamma rays",
      optionC: "Microwaves",
      optionD: "Ultraviolet",
      correctOption: "C",
      explanation: "Microwaves heat food by exciting water molecules.",
      orderIndex: 5
    },
    {
      id: "jee-physics-electromagnetic-waves-q07",
      topicId: "jee-physics-electromagnetic-waves",
      text: "The speed of EM waves in vacuum equals one over the square root of:",
      optionA: "epsilon0 over mu0",
      optionB: "mu0 plus epsilon0",
      optionC: "mu0 over epsilon0",
      optionD: "mu0 times epsilon0",
      correctOption: "D",
      explanation: "c equals one over the square root of mu0 times epsilon0.",
      orderIndex: 6
    },
    {
      id: "jee-physics-electromagnetic-waves-q08",
      topicId: "jee-physics-electromagnetic-waves",
      text: "EM waves carry both energy and:",
      optionA: "Mass",
      optionB: "Charge",
      optionC: "Momentum",
      optionD: "Current",
      correctOption: "C",
      explanation: "EM waves transport momentum and exert radiation pressure on surfaces.",
      orderIndex: 7
    },
    {
      id: "jee-physics-semiconductors-q01",
      topicId: "jee-physics-semiconductors",
      text: "Doping silicon with a pentavalent impurity gives a:",
      optionA: "p-type semiconductor",
      optionB: "Pure conductor",
      optionC: "n-type semiconductor",
      optionD: "Insulator",
      correctOption: "C",
      explanation: "A pentavalent dopant donates electrons, producing an n-type semiconductor.",
      orderIndex: 0
    },
    {
      id: "jee-physics-semiconductors-q02",
      topicId: "jee-physics-semiconductors",
      text: "In a p-type semiconductor the majority carriers are:",
      optionA: "Electrons",
      optionB: "Neutrons",
      optionC: "Protons",
      optionD: "Holes",
      correctOption: "D",
      explanation: "Trivalent doping creates holes, which are the majority carriers in p-type material.",
      orderIndex: 1
    },
    {
      id: "jee-physics-semiconductors-q03",
      topicId: "jee-physics-semiconductors",
      text: "A p-n junction diode conducts well when it is:",
      optionA: "At absolute zero",
      optionB: "Reverse biased",
      optionC: "Unbiased",
      optionD: "Forward biased",
      correctOption: "D",
      explanation: "Forward bias lowers the barrier, so the diode conducts current.",
      orderIndex: 2
    },
    {
      id: "jee-physics-semiconductors-q04",
      topicId: "jee-physics-semiconductors",
      text: "Which logic gate gives output 1 only when all inputs are 1?",
      optionA: "OR",
      optionB: "AND",
      optionC: "NOT",
      optionD: "NOR",
      correctOption: "B",
      explanation: "An AND gate outputs 1 only when every input is 1.",
      orderIndex: 3
    },
    {
      id: "jee-physics-semiconductors-q05",
      topicId: "jee-physics-semiconductors",
      text: "Which pair are called universal gates?",
      optionA: "AND and OR",
      optionB: "NOT and OR",
      optionC: "AND and NOT",
      optionD: "NAND and NOR",
      correctOption: "D",
      explanation: "NAND and NOR can each build any other gate, so they are universal.",
      orderIndex: 4
    },
    {
      id: "jee-physics-semiconductors-q06",
      topicId: "jee-physics-semiconductors",
      text: "As temperature rises, the conductivity of a pure semiconductor:",
      optionA: "Increases",
      optionB: "Decreases",
      optionC: "Stays constant",
      optionD: "Drops to zero",
      correctOption: "A",
      explanation: "Heating frees more charge carriers, so a semiconductor conducts better, unlike a metal.",
      orderIndex: 5
    },
    {
      id: "jee-physics-semiconductors-q07",
      topicId: "jee-physics-semiconductors",
      text: "The region of immobile charges at a p-n junction is called the:",
      optionA: "Conduction band",
      optionB: "Forbidden gap",
      optionC: "Valence band",
      optionD: "Depletion region",
      correctOption: "D",
      explanation: "Diffusion creates a charge-free depletion region with a built-in potential barrier.",
      orderIndex: 6
    },
    {
      id: "jee-physics-semiconductors-q08",
      topicId: "jee-physics-semiconductors",
      text: "A NOT gate is also known as a/an:",
      optionA: "Buffer",
      optionB: "Adder",
      optionC: "Inverter",
      optionD: "Comparator",
      correctOption: "C",
      explanation: "A NOT gate inverts its single input, so it is called an inverter.",
      orderIndex: 7
    },
    {
      id: "jee-physics-communication-systems-q01",
      topicId: "jee-physics-communication-systems",
      text: "Why is a high-frequency carrier needed in communication?",
      optionA: "To reduce noise only",
      optionB: "To increase mass",
      optionC: "To slow the signal",
      optionD: "For efficient radiation by a small antenna",
      correctOption: "D",
      explanation: "High-frequency carriers radiate efficiently from practical antenna sizes.",
      orderIndex: 0
    },
    {
      id: "jee-physics-communication-systems-q02",
      topicId: "jee-physics-communication-systems",
      text: "In amplitude modulation, which property of the carrier varies?",
      optionA: "Frequency",
      optionB: "Amplitude",
      optionC: "Phase",
      optionD: "Speed",
      correctOption: "B",
      explanation: "In AM the carrier amplitude varies in step with the message signal.",
      orderIndex: 1
    },
    {
      id: "jee-physics-communication-systems-q03",
      topicId: "jee-physics-communication-systems",
      text: "Sky-wave propagation uses reflection from the:",
      optionA: "Ionosphere",
      optionB: "Ground",
      optionC: "Ocean",
      optionD: "Moon",
      correctOption: "A",
      explanation: "Sky waves are reflected back by the ionosphere for long-distance communication.",
      orderIndex: 2
    },
    {
      id: "jee-physics-communication-systems-q04",
      topicId: "jee-physics-communication-systems",
      text: "To avoid distortion in AM, the modulation index must be kept:",
      optionA: "Greater than two",
      optionB: "Less than or equal to one",
      optionC: "Equal to ten",
      optionD: "Exactly zero",
      correctOption: "B",
      explanation: "Over-modulation (index above one) distorts the recovered signal, so it is kept at or below one.",
      orderIndex: 3
    },
    {
      id: "jee-physics-communication-systems-q05",
      topicId: "jee-physics-communication-systems",
      text: "Which block of a communication system removes the carrier to recover the message?",
      optionA: "Modulator",
      optionB: "Transmitter",
      optionC: "Amplifier",
      optionD: "Demodulator",
      correctOption: "D",
      explanation: "The demodulator at the receiver extracts the original message from the modulated carrier.",
      orderIndex: 4
    },
    {
      id: "jee-physics-communication-systems-q06",
      topicId: "jee-physics-communication-systems",
      text: "Line-of-sight communication above 40 MHz uses which propagation mode?",
      optionA: "Ground wave",
      optionB: "Sky wave",
      optionC: "Space wave",
      optionD: "Surface wave",
      correctOption: "C",
      explanation: "High-frequency signals travel as space waves directly between antennas in line of sight.",
      orderIndex: 5
    },
    {
      id: "jee-physics-communication-systems-q07",
      topicId: "jee-physics-communication-systems",
      text: "The range of a TV tower of height h is approximately proportional to:",
      optionA: "h",
      optionB: "One over h",
      optionC: "h squared",
      optionD: "The square root of h",
      correctOption: "D",
      explanation: "Range equals the square root of 2 R h, so it varies as the square root of height.",
      orderIndex: 6
    },
    {
      id: "jee-physics-communication-systems-q08",
      topicId: "jee-physics-communication-systems",
      text: "Compared with AM, frequency modulation generally requires:",
      optionA: "Less bandwidth",
      optionB: "More bandwidth",
      optionC: "No bandwidth",
      optionD: "Zero power",
      correctOption: "B",
      explanation: "FM occupies a wider band of frequencies than AM for the same signal.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-redox-reactions-q01",
      topicId: "jee-chemistry-redox-reactions",
      text: "Oxidation is best defined as:",
      optionA: "Gain of electrons",
      optionB: "Loss of electrons",
      optionC: "Gain of protons",
      optionD: "Loss of neutrons",
      correctOption: "B",
      explanation: "Oxidation is the loss of electrons, raising the oxidation number.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-redox-reactions-q02",
      topicId: "jee-chemistry-redox-reactions",
      text: "The oxidation number of oxygen in most compounds is:",
      optionA: "Plus two",
      optionB: "Plus one",
      optionC: "Zero",
      optionD: "Minus two",
      correctOption: "D",
      explanation: "Oxygen usually has an oxidation number of minus two.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-redox-reactions-q03",
      topicId: "jee-chemistry-redox-reactions",
      text: "A reaction where the same element is both oxidised and reduced is called:",
      optionA: "Combination",
      optionB: "Disproportionation",
      optionC: "Displacement",
      optionD: "Neutralisation",
      correctOption: "B",
      explanation: "In disproportionation one element in an intermediate state is both oxidised and reduced.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-redox-reactions-q04",
      topicId: "jee-chemistry-redox-reactions",
      text: "The oxidation state of sulphur in H2SO4 is:",
      optionA: "Plus two",
      optionB: "Plus four",
      optionC: "Plus six",
      optionD: "Minus two",
      correctOption: "C",
      explanation: "With H at plus one and O at minus two, sulphur balances at plus six.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-redox-reactions-q05",
      topicId: "jee-chemistry-redox-reactions",
      text: "An oxidising agent is a species that:",
      optionA: "Loses electrons",
      optionB: "Gains electrons",
      optionC: "Is itself oxidised",
      optionD: "Has no charge",
      correctOption: "B",
      explanation: "An oxidising agent gains electrons and is itself reduced.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-redox-reactions-q06",
      topicId: "jee-chemistry-redox-reactions",
      text: "The oxidation number of an element in its free state is:",
      optionA: "Minus one",
      optionB: "Plus one",
      optionC: "Zero",
      optionD: "Equal to its group number",
      correctOption: "C",
      explanation: "A free uncombined element always has an oxidation number of zero.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-redox-reactions-q07",
      topicId: "jee-chemistry-redox-reactions",
      text: "In the half-reaction method in acidic medium, what is added to balance oxygen?",
      optionA: "OH minus ions",
      optionB: "Oxygen gas",
      optionC: "Water molecules",
      optionD: "Metal ions",
      correctOption: "C",
      explanation: "Water is added to balance oxygen and then H plus to balance hydrogen in acidic medium.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-redox-reactions-q08",
      topicId: "jee-chemistry-redox-reactions",
      text: "When zinc is added to copper sulphate solution, zinc is:",
      optionA: "Reduced",
      optionB: "Precipitated as metal",
      optionC: "Unchanged",
      optionD: "Oxidised",
      correctOption: "D",
      explanation: "Zinc loses electrons to copper ions, so zinc is oxidised and displaces copper.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-solutions-q01",
      topicId: "jee-chemistry-solutions",
      text: "Colligative properties depend on:",
      optionA: "Number of solute particles",
      optionB: "Nature of solute",
      optionC: "Colour of solute",
      optionD: "Density of solvent",
      correctOption: "A",
      explanation: "Colligative properties depend only on the number, not nature, of solute particles.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-solutions-q02",
      topicId: "jee-chemistry-solutions",
      text: "Adding a non-volatile solute to a solvent causes its vapour pressure to:",
      optionA: "Decrease",
      optionB: "Increase",
      optionC: "Stay constant",
      optionD: "Become zero",
      correctOption: "A",
      explanation: "By Raoult's law a non-volatile solute lowers the solvent's vapour pressure.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-solutions-q03",
      topicId: "jee-chemistry-solutions",
      text: "Molality is defined as moles of solute per:",
      optionA: "Litre of solution",
      optionB: "Litre of solvent",
      optionC: "Mole of solution",
      optionD: "Kilogram of solvent",
      correctOption: "D",
      explanation: "Molality is moles of solute per kilogram of solvent.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-solutions-q04",
      topicId: "jee-chemistry-solutions",
      text: "The van't Hoff factor for a solute that dissociates is:",
      optionA: "Greater than one",
      optionB: "Less than one",
      optionC: "Exactly zero",
      optionD: "Always one",
      correctOption: "A",
      explanation: "Dissociation produces more particles, so the van't Hoff factor exceeds one.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-solutions-q05",
      topicId: "jee-chemistry-solutions",
      text: "Which property is most suitable for finding the molar mass of a polymer?",
      optionA: "Boiling point elevation",
      optionB: "Osmotic pressure",
      optionC: "Freezing point depression",
      optionD: "Vapour pressure rise",
      correctOption: "B",
      explanation: "Osmotic pressure is measurable even at low concentration, ideal for large molecules.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-solutions-q06",
      topicId: "jee-chemistry-solutions",
      text: "An ideal solution obeys Raoult's law and shows mixing enthalpy of:",
      optionA: "Large positive",
      optionB: "Large negative",
      optionC: "Zero",
      optionD: "Infinite",
      correctOption: "C",
      explanation: "An ideal solution has zero enthalpy and volume change of mixing.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-solutions-q07",
      topicId: "jee-chemistry-solutions",
      text: "Spreading salt on icy roads works because it:",
      optionA: "Lowers the freezing point",
      optionB: "Raises the freezing point",
      optionC: "Raises vapour pressure",
      optionD: "Increases density",
      correctOption: "A",
      explanation: "Salt depresses the freezing point, so the ice melts at a lower temperature.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-solutions-q08",
      topicId: "jee-chemistry-solutions",
      text: "The osmotic pressure of a dilute solution is given by pi equals:",
      optionA: "C R T",
      optionB: "C over R T",
      optionC: "R T over C",
      optionD: "C plus R T",
      correctOption: "A",
      explanation: "For dilute solutions, osmotic pressure pi equals concentration times R times T.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-chemical-kinetics-q01",
      topicId: "jee-chemistry-chemical-kinetics",
      text: "The order of a reaction is determined:",
      optionA: "Experimentally",
      optionB: "From the balanced equation",
      optionC: "From molar masses",
      optionD: "From temperature only",
      correctOption: "A",
      explanation: "Reaction order is found experimentally, not from the stoichiometric equation.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-chemical-kinetics-q02",
      topicId: "jee-chemistry-chemical-kinetics",
      text: "The half-life of a first-order reaction is:",
      optionA: "Independent of concentration",
      optionB: "Proportional to concentration",
      optionC: "Inversely proportional to rate constant squared",
      optionD: "Always one second",
      correctOption: "A",
      explanation: "For first order, half-life equals 0.693 over k, independent of concentration.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-chemical-kinetics-q03",
      topicId: "jee-chemistry-chemical-kinetics",
      text: "A catalyst increases reaction rate by:",
      optionA: "Raising temperature",
      optionB: "Increasing concentration",
      optionC: "Shifting the equilibrium",
      optionD: "Lowering the activation energy",
      correctOption: "D",
      explanation: "A catalyst provides an alternative path with lower activation energy.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-chemical-kinetics-q04",
      topicId: "jee-chemistry-chemical-kinetics",
      text: "The Arrhenius equation relates the rate constant to:",
      optionA: "Pressure",
      optionB: "Volume",
      optionC: "Temperature and activation energy",
      optionD: "Colour",
      correctOption: "C",
      explanation: "The Arrhenius equation links k to temperature and activation energy.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-chemical-kinetics-q05",
      topicId: "jee-chemistry-chemical-kinetics",
      text: "For a first-order reaction, a plot of ln of concentration against time is:",
      optionA: "A straight line with slope minus k",
      optionB: "A parabola",
      optionC: "A hyperbola",
      optionD: "A horizontal line",
      correctOption: "A",
      explanation: "First-order kinetics gives a straight line of slope minus k for ln of concentration versus time.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-chemical-kinetics-q06",
      topicId: "jee-chemistry-chemical-kinetics",
      text: "The units of the rate constant for a first-order reaction are:",
      optionA: "Per second",
      optionB: "Mol per litre per second",
      optionC: "Litre per mol per second",
      optionD: "Dimensionless",
      correctOption: "A",
      explanation: "A first-order rate constant has units of inverse time, that is per second.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-chemical-kinetics-q07",
      topicId: "jee-chemistry-chemical-kinetics",
      text: "Molecularity of an elementary reaction is:",
      optionA: "Always fractional",
      optionB: "Determined experimentally",
      optionC: "A small whole number",
      optionD: "Equal to the order always",
      correctOption: "C",
      explanation: "Molecularity counts species in an elementary step and is a small whole number.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-chemical-kinetics-q08",
      topicId: "jee-chemistry-chemical-kinetics",
      text: "Raising temperature speeds a reaction mainly because it increases the:",
      optionA: "Activation energy",
      optionB: "Order of reaction",
      optionC: "Number of moles",
      optionD: "Fraction of molecules above the activation energy",
      correctOption: "D",
      explanation: "Higher temperature raises the fraction of molecules with energy above the activation barrier.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-surface-chemistry-q01",
      topicId: "jee-chemistry-surface-chemistry",
      text: "The accumulation of molecules at a surface is called:",
      optionA: "Absorption",
      optionB: "Sublimation",
      optionC: "Diffusion",
      optionD: "Adsorption",
      correctOption: "D",
      explanation: "Adsorption is the accumulation of a substance at a surface.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-surface-chemistry-q02",
      topicId: "jee-chemistry-surface-chemistry",
      text: "Physisorption is characterised by:",
      optionA: "Strong chemical bonds",
      optionB: "Weak van der Waals forces",
      optionC: "High specificity",
      optionD: "Irreversibility",
      correctOption: "B",
      explanation: "Physisorption involves weak van der Waals forces and low enthalpy.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-surface-chemistry-q03",
      topicId: "jee-chemistry-surface-chemistry",
      text: "The scattering of light by colloidal particles is called the:",
      optionA: "Raman effect",
      optionB: "Brownian effect",
      optionC: "Doppler effect",
      optionD: "Tyndall effect",
      correctOption: "D",
      explanation: "The Tyndall effect is light scattering by colloidal particles.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-surface-chemistry-q04",
      topicId: "jee-chemistry-surface-chemistry",
      text: "Milk is an example of which type of colloid?",
      optionA: "Emulsion",
      optionB: "Aerosol",
      optionC: "Sol",
      optionD: "Gel",
      correctOption: "A",
      explanation: "Milk is an emulsion of liquid fat dispersed in water.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-surface-chemistry-q05",
      topicId: "jee-chemistry-surface-chemistry",
      text: "According to the Freundlich isotherm, x over m is proportional to pressure raised to:",
      optionA: "One",
      optionB: "n",
      optionC: "One over n",
      optionD: "Two",
      correctOption: "C",
      explanation: "The Freundlich isotherm gives x over m proportional to P to the power one over n.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-surface-chemistry-q06",
      topicId: "jee-chemistry-surface-chemistry",
      text: "Enzymes are best described as:",
      optionA: "Inorganic catalysts",
      optionB: "Highly specific biological catalysts",
      optionC: "Non-catalytic proteins",
      optionD: "Strong acids",
      correctOption: "B",
      explanation: "Enzymes are highly specific biological catalysts.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-surface-chemistry-q07",
      topicId: "jee-chemistry-surface-chemistry",
      text: "According to the Hardy-Schulze rule, coagulating power increases with the ion's:",
      optionA: "Charge",
      optionB: "Mass only",
      optionC: "Colour",
      optionD: "Volume",
      correctOption: "A",
      explanation: "Higher ion charge gives greater coagulating power by the Hardy-Schulze rule.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-surface-chemistry-q08",
      topicId: "jee-chemistry-surface-chemistry",
      text: "A heterogeneous catalyst differs from reactants in its:",
      optionA: "Colour",
      optionB: "Physical phase",
      optionC: "Mass",
      optionD: "Charge",
      correctOption: "B",
      explanation: "A heterogeneous catalyst is in a different phase, usually a solid acting on gases or liquids.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-s-block-q01",
      topicId: "jee-chemistry-s-block",
      text: "Alkali metals belong to which group of the periodic table?",
      optionA: "Group 1",
      optionB: "Group 2",
      optionC: "Group 17",
      optionD: "Group 18",
      correctOption: "A",
      explanation: "Alkali metals are the Group 1 elements with one valence s electron.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-s-block-q02",
      topicId: "jee-chemistry-s-block",
      text: "The common oxidation state of alkaline earth metals is:",
      optionA: "Plus two",
      optionB: "Plus one",
      optionC: "Plus three",
      optionD: "Minus one",
      correctOption: "A",
      explanation: "Group 2 metals lose two electrons to show a plus two state.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-s-block-q03",
      topicId: "jee-chemistry-s-block",
      text: "Which element shows a diagonal relationship with magnesium?",
      optionA: "Sodium",
      optionB: "Potassium",
      optionC: "Lithium",
      optionD: "Calcium",
      correctOption: "C",
      explanation: "Lithium resembles magnesium through the diagonal relationship.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-s-block-q04",
      topicId: "jee-chemistry-s-block",
      text: "The flame colour imparted by sodium is:",
      optionA: "Lilac",
      optionB: "Brick red",
      optionC: "Green",
      optionD: "Golden yellow",
      correctOption: "D",
      explanation: "Sodium gives a characteristic golden yellow flame colour.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-s-block-q05",
      topicId: "jee-chemistry-s-block",
      text: "Down Group 1, the ionisation energy:",
      optionA: "Increases",
      optionB: "First rises then falls",
      optionC: "Stays constant",
      optionD: "Decreases",
      correctOption: "D",
      explanation: "Larger size and more shielding lower the ionisation energy down the group.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-s-block-q06",
      topicId: "jee-chemistry-s-block",
      text: "When sodium reacts with water it produces NaOH and:",
      optionA: "Oxygen",
      optionB: "Hydrogen",
      optionC: "Chlorine",
      optionD: "Nitrogen",
      correctOption: "B",
      explanation: "Sodium reacts with water to give sodium hydroxide and hydrogen gas.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-s-block-q07",
      topicId: "jee-chemistry-s-block",
      text: "The solubility of Group 2 hydroxides down the group:",
      optionA: "Stays constant",
      optionB: "Decreases",
      optionC: "Increases",
      optionD: "Becomes zero",
      correctOption: "C",
      explanation: "Group 2 hydroxide solubility increases down the group.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-s-block-q08",
      topicId: "jee-chemistry-s-block",
      text: "Washing soda is the common name for:",
      optionA: "Sodium chloride",
      optionB: "Sodium hydroxide",
      optionC: "Sodium nitrate",
      optionD: "Sodium carbonate",
      correctOption: "D",
      explanation: "Sodium carbonate decahydrate is known as washing soda.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-p-block-q01",
      topicId: "jee-chemistry-p-block",
      text: "The inert pair effect makes which oxidation state more stable for heavier p-block elements?",
      optionA: "Higher state",
      optionB: "Lower state",
      optionC: "Zero state",
      optionD: "Negative state",
      correctOption: "B",
      explanation: "The inert pair effect stabilises the lower oxidation state for heavier members.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-p-block-q02",
      topicId: "jee-chemistry-p-block",
      text: "Which is the most reactive halogen?",
      optionA: "Chlorine",
      optionB: "Fluorine",
      optionC: "Bromine",
      optionD: "Iodine",
      correctOption: "B",
      explanation: "Fluorine is the most reactive halogen and strongest oxidiser.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-p-block-q03",
      topicId: "jee-chemistry-p-block",
      text: "Nitrogen exists as a diatomic gas largely because of its strong:",
      optionA: "Ionic bonds",
      optionB: "Hydrogen bonds",
      optionC: "Triple bond",
      optionD: "Metallic bonds",
      correctOption: "C",
      explanation: "Nitrogen forms a very strong triple bond, making N2 a stable diatomic gas.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-p-block-q04",
      topicId: "jee-chemistry-p-block",
      text: "Aluminium oxide is classified as a/an:",
      optionA: "Amphoteric oxide",
      optionB: "Basic oxide",
      optionC: "Acidic oxide",
      optionD: "Neutral oxide",
      correctOption: "A",
      explanation: "Aluminium oxide is amphoteric, reacting with both acids and bases.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-p-block-q05",
      topicId: "jee-chemistry-p-block",
      text: "Which element shows the strongest tendency for catenation?",
      optionA: "Silicon",
      optionB: "Carbon",
      optionC: "Nitrogen",
      optionD: "Oxygen",
      correctOption: "B",
      explanation: "Carbon shows the strongest catenation, giving the vast field of organic chemistry.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-p-block-q06",
      topicId: "jee-chemistry-p-block",
      text: "Across a period in the p-block, non-metallic character generally:",
      optionA: "Increases",
      optionB: "Decreases",
      optionC: "Stays constant",
      optionD: "Disappears",
      correctOption: "A",
      explanation: "Non-metallic character rises across a period as effective nuclear charge increases.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-p-block-q07",
      topicId: "jee-chemistry-p-block",
      text: "Noble gases are largely unreactive because they have:",
      optionA: "One valence electron",
      optionB: "Completely filled valence shells",
      optionC: "Half-filled p orbitals",
      optionD: "High electron affinity",
      correctOption: "B",
      explanation: "Noble gases have completely filled valence shells, giving great stability.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-p-block-q08",
      topicId: "jee-chemistry-p-block",
      text: "The oxidising power of halogens follows the order:",
      optionA: "F2 greater than Cl2 greater than Br2 greater than I2",
      optionB: "I2 greater than Br2 greater than Cl2 greater than F2",
      optionC: "Cl2 greater than F2 greater than Br2 greater than I2",
      optionD: "Br2 greater than I2 greater than Cl2 greater than F2",
      correctOption: "A",
      explanation: "Oxidising power decreases down the group: F2 greater than Cl2 greater than Br2 greater than I2.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-d-f-block-q01",
      topicId: "jee-chemistry-d-f-block",
      text: "Transition metals show variable oxidation states because of involvement of:",
      optionA: "Both (n-1)d and ns electrons",
      optionB: "s orbitals only",
      optionC: "p orbitals only",
      optionD: "f orbitals only",
      correctOption: "A",
      explanation: "Both (n-1)d and ns electrons can take part, giving variable oxidation states.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-d-f-block-q02",
      topicId: "jee-chemistry-d-f-block",
      text: "Most transition metal compounds are coloured due to:",
      optionA: "d-d transitions",
      optionB: "s-p transitions",
      optionC: "Nuclear reactions",
      optionD: "Hydrogen bonding",
      correctOption: "A",
      explanation: "Colour arises from d-d electronic transitions in partially filled d orbitals.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-d-f-block-q03",
      topicId: "jee-chemistry-d-f-block",
      text: "The spin-only magnetic moment of an ion with two unpaired electrons is about:",
      optionA: "1.73 BM",
      optionB: "5.92 BM",
      optionC: "3.87 BM",
      optionD: "2.83 BM",
      correctOption: "D",
      explanation: "Using the square root of n times n plus two with n equal two gives about 2.83 BM.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-d-f-block-q04",
      topicId: "jee-chemistry-d-f-block",
      text: "The steady decrease in size across the lanthanides is called the:",
      optionA: "Inert pair effect",
      optionB: "Diagonal relationship",
      optionC: "Lanthanide contraction",
      optionD: "Shielding effect",
      correctOption: "C",
      explanation: "Poor 4f shielding causes the lanthanide contraction across the series.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-d-f-block-q05",
      topicId: "jee-chemistry-d-f-block",
      text: "Which ion is colourless?",
      optionA: "Cu two plus",
      optionB: "Fe three plus",
      optionC: "Zn two plus",
      optionD: "Mn two plus",
      correctOption: "C",
      explanation: "Zinc two plus has a fully filled d10 configuration, so it is colourless.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-d-f-block-q06",
      topicId: "jee-chemistry-d-f-block",
      text: "Potassium permanganate is a strong oxidiser with manganese in oxidation state:",
      optionA: "Plus seven",
      optionB: "Plus four",
      optionC: "Plus six",
      optionD: "Plus two",
      correctOption: "A",
      explanation: "In KMnO4 manganese is in the plus seven oxidation state.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-d-f-block-q07",
      topicId: "jee-chemistry-d-f-block",
      text: "Paramagnetism in transition metal ions is due to:",
      optionA: "Paired electrons",
      optionB: "Nuclear spin",
      optionC: "Filled orbitals",
      optionD: "Unpaired electrons",
      correctOption: "D",
      explanation: "Unpaired d electrons make many transition metal ions paramagnetic.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-d-f-block-q08",
      topicId: "jee-chemistry-d-f-block",
      text: "Compared with lanthanides, actinides show:",
      optionA: "Fewer oxidation states",
      optionB: "More oxidation states and radioactivity",
      optionC: "No oxidation states",
      optionD: "Only the plus two state",
      correctOption: "B",
      explanation: "Actinides are radioactive and display a wider range of oxidation states.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-haloalkanes-haloarenes-q01",
      topicId: "jee-chemistry-haloalkanes-haloarenes",
      text: "Which carbon-halogen bond is the weakest and most reactive?",
      optionA: "C-F",
      optionB: "C-Cl",
      optionC: "C-Br",
      optionD: "C-I",
      correctOption: "D",
      explanation: "The C-I bond is the weakest, making iodoalkanes the most reactive.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-haloalkanes-haloarenes-q02",
      topicId: "jee-chemistry-haloalkanes-haloarenes",
      text: "An SN2 reaction proceeds with:",
      optionA: "Inversion of configuration",
      optionB: "Retention of configuration",
      optionC: "Racemisation",
      optionD: "No change in geometry",
      correctOption: "A",
      explanation: "SN2 proceeds through backside attack, giving inversion (Walden inversion).",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-haloalkanes-haloarenes-q03",
      topicId: "jee-chemistry-haloalkanes-haloarenes",
      text: "The intermediate in an SN1 reaction is a:",
      optionA: "Carbanion",
      optionB: "Carbocation",
      optionC: "Free radical",
      optionD: "Carbene",
      correctOption: "B",
      explanation: "SN1 proceeds through a planar carbocation intermediate.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-haloalkanes-haloarenes-q04",
      topicId: "jee-chemistry-haloalkanes-haloarenes",
      text: "Which substrate reacts fastest by the SN1 mechanism?",
      optionA: "Primary halide",
      optionB: "Secondary halide",
      optionC: "Tertiary halide",
      optionD: "Methyl halide",
      correctOption: "C",
      explanation: "Tertiary halides form the most stable carbocation, favouring SN1.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-haloalkanes-haloarenes-q05",
      topicId: "jee-chemistry-haloalkanes-haloarenes",
      text: "Aryl halides are less reactive to nucleophilic substitution because of:",
      optionA: "Partial double-bond character of the C-X bond",
      optionB: "Weak C-X bonds",
      optionC: "Low molar mass",
      optionD: "High temperature",
      correctOption: "A",
      explanation: "Resonance gives the C-X bond partial double-bond character, resisting substitution.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-haloalkanes-haloarenes-q06",
      topicId: "jee-chemistry-haloalkanes-haloarenes",
      text: "By Saytzeff's rule, elimination favours the alkene that is:",
      optionA: "More substituted",
      optionB: "Less substituted",
      optionC: "Always terminal",
      optionD: "Always cis",
      correctOption: "A",
      explanation: "Saytzeff's rule favours the more substituted, more stable alkene.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-haloalkanes-haloarenes-q07",
      topicId: "jee-chemistry-haloalkanes-haloarenes",
      text: "A Grignard reagent has the general formula:",
      optionA: "R-O-R",
      optionB: "R-CHO",
      optionC: "R-OH",
      optionD: "R-MgX",
      correctOption: "D",
      explanation: "A Grignard reagent is R-MgX, a powerful nucleophile made from a haloalkane.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-haloalkanes-haloarenes-q08",
      topicId: "jee-chemistry-haloalkanes-haloarenes",
      text: "The rate of an SN2 reaction depends on the concentration of:",
      optionA: "Substrate only",
      optionB: "Nucleophile only",
      optionC: "Neither",
      optionD: "Both substrate and nucleophile",
      correctOption: "D",
      explanation: "SN2 is bimolecular, so its rate depends on both substrate and nucleophile concentrations.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-alcohols-phenols-ethers-q01",
      topicId: "jee-chemistry-alcohols-phenols-ethers",
      text: "Which is more acidic, phenol or ethanol?",
      optionA: "Ethanol",
      optionB: "Neither is acidic",
      optionC: "Both equal",
      optionD: "Phenol",
      correctOption: "D",
      explanation: "Phenol is more acidic because the phenoxide ion is resonance-stabilised.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-alcohols-phenols-ethers-q02",
      topicId: "jee-chemistry-alcohols-phenols-ethers",
      text: "Oxidation of a primary alcohol first gives a/an:",
      optionA: "Ketone",
      optionB: "Ether",
      optionC: "Ester",
      optionD: "Aldehyde",
      correctOption: "D",
      explanation: "A primary alcohol oxidises to an aldehyde, then further to a carboxylic acid.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-alcohols-phenols-ethers-q03",
      topicId: "jee-chemistry-alcohols-phenols-ethers",
      text: "The Lucas test distinguishes alcohols by their:",
      optionA: "Colour",
      optionB: "Boiling point",
      optionC: "Reaction speed with HCl/ZnCl2",
      optionD: "Density",
      correctOption: "C",
      explanation: "The Lucas test compares how fast alcohols react with HCl and zinc chloride.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-alcohols-phenols-ethers-q04",
      topicId: "jee-chemistry-alcohols-phenols-ethers",
      text: "The Williamson synthesis is the best method to prepare:",
      optionA: "Alcohols",
      optionB: "Aldehydes",
      optionC: "Ethers",
      optionD: "Amines",
      correctOption: "C",
      explanation: "The Williamson synthesis makes ethers from an alkoxide and a haloalkane.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-alcohols-phenols-ethers-q05",
      topicId: "jee-chemistry-alcohols-phenols-ethers",
      text: "Phenol gives which colour with neutral ferric chloride?",
      optionA: "Violet",
      optionB: "Yellow",
      optionC: "Brown",
      optionD: "Colourless",
      correctOption: "A",
      explanation: "Phenol forms a violet coloured complex with neutral ferric chloride.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-alcohols-phenols-ethers-q06",
      topicId: "jee-chemistry-alcohols-phenols-ethers",
      text: "Which alcohol resists oxidation under mild conditions?",
      optionA: "Primary",
      optionB: "Secondary",
      optionC: "All oxidise equally",
      optionD: "Tertiary",
      correctOption: "D",
      explanation: "A tertiary alcohol has no hydrogen on the carbinol carbon, so it resists mild oxidation.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-alcohols-phenols-ethers-q07",
      topicId: "jee-chemistry-alcohols-phenols-ethers",
      text: "Acid-catalysed dehydration of an alcohol gives a/an:",
      optionA: "Alkene",
      optionB: "Alkane",
      optionC: "Acid",
      optionD: "Ketone",
      correctOption: "A",
      explanation: "Dehydration removes water to form an alkene by an E1 pathway.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-alcohols-phenols-ethers-q08",
      topicId: "jee-chemistry-alcohols-phenols-ethers",
      text: "Ethers are generally cleaved by hot:",
      optionA: "Water",
      optionB: "Ethanol",
      optionC: "Sodium hydroxide",
      optionD: "Hydroiodic acid",
      correctOption: "D",
      explanation: "Ethers are fairly inert but are cleaved by hot hydroiodic acid.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-aldehydes-ketones-acids-q01",
      topicId: "jee-chemistry-aldehydes-ketones-acids",
      text: "The carbonyl carbon undergoes which kind of reaction?",
      optionA: "Nucleophilic addition",
      optionB: "Electrophilic addition",
      optionC: "Free-radical substitution",
      optionD: "Elimination only",
      correctOption: "A",
      explanation: "The electrophilic carbonyl carbon undergoes nucleophilic addition.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-aldehydes-ketones-acids-q02",
      topicId: "jee-chemistry-aldehydes-ketones-acids",
      text: "Tollens' reagent gives a silver mirror with:",
      optionA: "Ketones",
      optionB: "Ethers",
      optionC: "Aldehydes",
      optionD: "Alcohols",
      correctOption: "C",
      explanation: "Aldehydes reduce Tollens' reagent to a silver mirror; ketones do not.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-aldehydes-ketones-acids-q03",
      topicId: "jee-chemistry-aldehydes-ketones-acids",
      text: "The aldol condensation requires the carbonyl compound to have a/an:",
      optionA: "Alpha-hydrogen",
      optionB: "Aromatic ring",
      optionC: "Halogen",
      optionD: "Nitro group",
      correctOption: "A",
      explanation: "An alpha-hydrogen is needed to form the enolate in an aldol reaction.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-aldehydes-ketones-acids-q04",
      topicId: "jee-chemistry-aldehydes-ketones-acids",
      text: "The Cannizzaro reaction occurs with aldehydes that lack a/an:",
      optionA: "Carbonyl group",
      optionB: "Double bond",
      optionC: "Methyl group",
      optionD: "Alpha-hydrogen",
      correctOption: "D",
      explanation: "Aldehydes without an alpha-hydrogen undergo the Cannizzaro disproportionation.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-aldehydes-ketones-acids-q05",
      topicId: "jee-chemistry-aldehydes-ketones-acids",
      text: "Which compound is the strongest acid?",
      optionA: "Trichloroacetic acid",
      optionB: "Acetic acid",
      optionC: "Ethanol",
      optionD: "Phenol",
      correctOption: "A",
      explanation: "Three electron-withdrawing chlorines make trichloroacetic acid the strongest here.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-aldehydes-ketones-acids-q06",
      topicId: "jee-chemistry-aldehydes-ketones-acids",
      text: "A positive iodoform test indicates the presence of a:",
      optionA: "Carboxylic acid",
      optionB: "Simple ether",
      optionC: "Primary amine",
      optionD: "Methyl ketone",
      correctOption: "D",
      explanation: "Methyl ketones (and ethanal) give the yellow iodoform precipitate.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-aldehydes-ketones-acids-q07",
      topicId: "jee-chemistry-aldehydes-ketones-acids",
      text: "Why are aldehydes more reactive than ketones toward nucleophiles?",
      optionA: "Greater steric hindrance",
      optionB: "Aromatic stabilisation",
      optionC: "Higher molar mass",
      optionD: "Less steric hindrance and less electron donation",
      correctOption: "D",
      explanation: "Aldehydes have less steric crowding and less alkyl donation, so they react faster.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-aldehydes-ketones-acids-q08",
      topicId: "jee-chemistry-aldehydes-ketones-acids",
      text: "The carboxylate ion is stabilised by:",
      optionA: "Resonance over two oxygens",
      optionB: "Hydrogen bonding only",
      optionC: "A single localised charge",
      optionD: "An aromatic ring",
      correctOption: "A",
      explanation: "The negative charge is delocalised over two equivalent oxygens by resonance.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-amines-q01",
      topicId: "jee-chemistry-amines",
      text: "Amines are basic because nitrogen has a:",
      optionA: "Vacant orbital",
      optionB: "Lone pair of electrons",
      optionC: "Positive charge",
      optionD: "Triple bond",
      correctOption: "B",
      explanation: "The lone pair on nitrogen accepts a proton, making amines basic.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-amines-q02",
      topicId: "jee-chemistry-amines",
      text: "Aniline is a weaker base than ammonia because the lone pair is:",
      optionA: "Localised on nitrogen",
      optionB: "Delocalised into the ring",
      optionC: "Removed entirely",
      optionD: "Paired with oxygen",
      correctOption: "B",
      explanation: "In aniline the lone pair is delocalised into the benzene ring, lowering basicity.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-amines-q03",
      topicId: "jee-chemistry-amines",
      text: "The carbylamine test is specific to which type of amine?",
      optionA: "Quaternary",
      optionB: "Secondary",
      optionC: "Tertiary",
      optionD: "Primary",
      correctOption: "D",
      explanation: "Only primary amines give the foul-smelling isocyanide in the carbylamine test.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-amines-q04",
      topicId: "jee-chemistry-amines",
      text: "Diazotisation of a primary aromatic amine is carried out at a temperature of:",
      optionA: "60 degrees C",
      optionB: "25 degrees C",
      optionC: "0 to 5 degrees C",
      optionD: "100 degrees C",
      correctOption: "C",
      explanation: "Diazonium salts are unstable, so diazotisation is done at 0 to 5 degrees C.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-amines-q05",
      topicId: "jee-chemistry-amines",
      text: "The Hinsberg reagent is used to:",
      optionA: "Oxidise amines",
      optionB: "Reduce nitro groups",
      optionC: "Distinguish primary, secondary and tertiary amines",
      optionD: "Form azo dyes",
      correctOption: "C",
      explanation: "Hinsberg's reagent distinguishes the three classes of amines by their products.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-amines-q06",
      topicId: "jee-chemistry-amines",
      text: "A secondary amine has the general structure:",
      optionA: "R-NH2",
      optionB: "R4-N plus",
      optionC: "R3-N",
      optionD: "R2-NH",
      correctOption: "D",
      explanation: "A secondary amine has two alkyl groups and one hydrogen on nitrogen, R2-NH.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-amines-q07",
      topicId: "jee-chemistry-amines",
      text: "Diazonium salts are useful chiefly because they undergo:",
      optionA: "Only combustion",
      optionB: "No reactions",
      optionC: "Coupling and substitution reactions",
      optionD: "Polymerisation only",
      correctOption: "C",
      explanation: "Diazonium salts couple to form dyes and undergo substitution to add many groups.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-amines-q08",
      topicId: "jee-chemistry-amines",
      text: "In aqueous solution, the basicity order of methylamine and ammonia is:",
      optionA: "Ammonia greater than methylamine",
      optionB: "They are equal",
      optionC: "Methylamine greater than ammonia",
      optionD: "Both are neutral",
      correctOption: "C",
      explanation: "The electron-donating methyl group makes methylamine more basic than ammonia.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-biomolecules-polymers-q01",
      topicId: "jee-chemistry-biomolecules-polymers",
      text: "Glucose is classified as a/an:",
      optionA: "Disaccharide",
      optionB: "Amino acid",
      optionC: "Polysaccharide",
      optionD: "Aldohexose",
      correctOption: "D",
      explanation: "Glucose is an aldohexose, a six-carbon monosaccharide with an aldehyde group.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-biomolecules-polymers-q02",
      topicId: "jee-chemistry-biomolecules-polymers",
      text: "Proteins are polymers of:",
      optionA: "Glucose units",
      optionB: "Nucleotides",
      optionC: "Alpha-amino acids",
      optionD: "Fatty acids",
      correctOption: "C",
      explanation: "Proteins are polymers of alpha-amino acids joined by peptide bonds.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-biomolecules-polymers-q03",
      topicId: "jee-chemistry-biomolecules-polymers",
      text: "The bond linking amino acids in a protein is the:",
      optionA: "Peptide bond",
      optionB: "Glycosidic bond",
      optionC: "Ester bond",
      optionD: "Hydrogen bond",
      correctOption: "A",
      explanation: "Amino acids join by peptide (amide) bonds in proteins.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-biomolecules-polymers-q04",
      topicId: "jee-chemistry-biomolecules-polymers",
      text: "Nylon-6,6 is an example of which polymer type?",
      optionA: "Addition polymer",
      optionB: "Condensation polymer",
      optionC: "Natural polymer",
      optionD: "Elastomer",
      correctOption: "B",
      explanation: "Nylon-6,6 forms by condensation, releasing water at each amide linkage.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-biomolecules-polymers-q05",
      topicId: "jee-chemistry-biomolecules-polymers",
      text: "Which vitamin is water-soluble?",
      optionA: "Vitamin A",
      optionB: "Vitamin D",
      optionC: "Vitamin K",
      optionD: "Vitamin C",
      correctOption: "D",
      explanation: "Vitamin C is water-soluble, unlike the fat-soluble vitamins A, D, E and K.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-biomolecules-polymers-q06",
      topicId: "jee-chemistry-biomolecules-polymers",
      text: "Natural rubber is a polymer of:",
      optionA: "Ethene",
      optionB: "Vinyl chloride",
      optionC: "Styrene",
      optionD: "Isoprene",
      correctOption: "D",
      explanation: "Natural rubber is a polymer of isoprene units.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-biomolecules-polymers-q07",
      topicId: "jee-chemistry-biomolecules-polymers",
      text: "Denaturation of a protein destroys its higher structure but keeps the:",
      optionA: "Catalytic activity",
      optionB: "Quaternary structure",
      optionC: "Primary sequence",
      optionD: "Tertiary fold",
      correctOption: "C",
      explanation: "Denaturation unfolds the protein but leaves the primary amino acid sequence intact.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-biomolecules-polymers-q08",
      topicId: "jee-chemistry-biomolecules-polymers",
      text: "In DNA, adenine pairs with:",
      optionA: "Guanine",
      optionB: "Cytosine",
      optionC: "Uracil",
      optionD: "Thymine",
      correctOption: "D",
      explanation: "In DNA, adenine pairs with thymine through hydrogen bonds.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-metallurgy-q01",
      topicId: "jee-chemistry-metallurgy",
      text: "Froth flotation is used to concentrate which type of ore?",
      optionA: "Oxide ores",
      optionB: "Chloride ores",
      optionC: "Carbonate ores",
      optionD: "Sulphide ores",
      correctOption: "D",
      explanation: "Froth flotation concentrates sulphide ores using their preferential wetting by oil.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-metallurgy-q02",
      topicId: "jee-chemistry-metallurgy",
      text: "Heating a carbonate ore to give the oxide is called:",
      optionA: "Roasting",
      optionB: "Calcination",
      optionC: "Smelting",
      optionD: "Leaching",
      correctOption: "B",
      explanation: "Calcination heats a carbonate in limited air to drive off carbon dioxide.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-metallurgy-q03",
      topicId: "jee-chemistry-metallurgy",
      text: "Ellingham diagrams help choose a suitable:",
      optionA: "Solvent",
      optionB: "Reducing agent",
      optionC: "Catalyst",
      optionD: "Indicator",
      correctOption: "B",
      explanation: "Ellingham diagrams show which reducing agent works at a given temperature.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-metallurgy-q04",
      topicId: "jee-chemistry-metallurgy",
      text: "Aluminium is extracted commercially by:",
      optionA: "Carbon reduction",
      optionB: "Self-reduction",
      optionC: "Roasting",
      optionD: "Electrolysis of molten alumina",
      correctOption: "D",
      explanation: "Aluminium is obtained by electrolysis of molten alumina (Hall-Heroult process).",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-metallurgy-q05",
      topicId: "jee-chemistry-metallurgy",
      text: "Zone refining is especially suited to purify:",
      optionA: "Sodium",
      optionB: "Iron",
      optionC: "Semiconductors like silicon",
      optionD: "Copper sulphate",
      correctOption: "C",
      explanation: "Zone refining yields ultrapure semiconductors such as silicon and germanium.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-metallurgy-q06",
      topicId: "jee-chemistry-metallurgy",
      text: "Roasting of a sulphide ore in air produces the oxide and:",
      optionA: "Carbon dioxide",
      optionB: "Nitrogen",
      optionC: "Water",
      optionD: "Sulphur dioxide",
      correctOption: "D",
      explanation: "Roasting a sulphide in air gives the metal oxide and sulphur dioxide gas.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-metallurgy-q07",
      topicId: "jee-chemistry-metallurgy",
      text: "The Mond process refines which metal via a volatile carbonyl?",
      optionA: "Iron",
      optionB: "Lead",
      optionC: "Zinc",
      optionD: "Nickel",
      correctOption: "D",
      explanation: "The Mond process purifies nickel through its volatile carbonyl compound.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-metallurgy-q08",
      topicId: "jee-chemistry-metallurgy",
      text: "The unwanted earthy impurity present in an ore is called:",
      optionA: "Gangue",
      optionB: "Slag",
      optionC: "Flux",
      optionD: "Matte",
      correctOption: "A",
      explanation: "The unwanted rocky impurity in an ore is called the gangue.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-environmental-chemistry-q01",
      topicId: "jee-chemistry-environmental-chemistry",
      text: "Which gas binds strongly to haemoglobin, reducing oxygen transport?",
      optionA: "Carbon dioxide",
      optionB: "Nitrogen",
      optionC: "Carbon monoxide",
      optionD: "Oxygen",
      correctOption: "C",
      explanation: "Carbon monoxide binds haemoglobin far more strongly than oxygen, causing poisoning.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-environmental-chemistry-q02",
      topicId: "jee-chemistry-environmental-chemistry",
      text: "Acid rain is caused mainly by oxides of sulphur and:",
      optionA: "Carbon",
      optionB: "Sodium",
      optionC: "Helium",
      optionD: "Nitrogen",
      correctOption: "D",
      explanation: "Sulphur and nitrogen oxides form sulphuric and nitric acids, causing acid rain.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-environmental-chemistry-q03",
      topicId: "jee-chemistry-environmental-chemistry",
      text: "The ozone layer is depleted mainly by:",
      optionA: "Carbon dioxide",
      optionB: "Chlorofluorocarbons",
      optionC: "Methane",
      optionD: "Water vapour",
      correctOption: "B",
      explanation: "CFCs release chlorine atoms that catalytically destroy stratospheric ozone.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-environmental-chemistry-q04",
      topicId: "jee-chemistry-environmental-chemistry",
      text: "A high biochemical oxygen demand (BOD) in water indicates:",
      optionA: "Clean water",
      optionB: "High oxygen",
      optionC: "Low microbial content",
      optionD: "Heavy organic pollution",
      correctOption: "D",
      explanation: "High BOD means microbes consume much oxygen, signalling heavy organic pollution.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-environmental-chemistry-q05",
      topicId: "jee-chemistry-environmental-chemistry",
      text: "Which gas is the main contributor to the greenhouse effect from fossil fuels?",
      optionA: "Argon",
      optionB: "Oxygen",
      optionC: "Carbon dioxide",
      optionD: "Hydrogen",
      correctOption: "C",
      explanation: "Carbon dioxide from burning fossil fuels is the leading greenhouse gas.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-environmental-chemistry-q06",
      topicId: "jee-chemistry-environmental-chemistry",
      text: "Excess nutrients causing algal blooms in water lead to:",
      optionA: "Distillation",
      optionB: "Calcination",
      optionC: "Sublimation",
      optionD: "Eutrophication",
      correctOption: "D",
      explanation: "Nutrient runoff causes eutrophication, depleting dissolved oxygen in water.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-environmental-chemistry-q07",
      topicId: "jee-chemistry-environmental-chemistry",
      text: "Green chemistry aims primarily to:",
      optionA: "Maximise waste",
      optionB: "Increase toxic byproducts",
      optionC: "Prevent waste and use safer reagents",
      optionD: "Raise energy use",
      correctOption: "C",
      explanation: "Green chemistry designs processes that prevent waste and use safer reagents.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-environmental-chemistry-q08",
      topicId: "jee-chemistry-environmental-chemistry",
      text: "Low dissolved oxygen (DO) in a river is harmful because it:",
      optionA: "Suffocates aquatic life",
      optionB: "Helps aquatic life",
      optionC: "Raises water clarity",
      optionD: "Has no effect",
      correctOption: "A",
      explanation: "Low dissolved oxygen suffocates fish and other aquatic organisms.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-sets-relations-functions-q01",
      topicId: "jee-mathematics-sets-relations-functions",
      text: "The number of subsets of a set with n elements is:",
      optionA: "n squared",
      optionB: "Two times n",
      optionC: "n factorial",
      optionD: "Two to the power n",
      correctOption: "D",
      explanation: "A set with n elements has two to the power n subsets.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-sets-relations-functions-q02",
      topicId: "jee-mathematics-sets-relations-functions",
      text: "A function that is both one-one and onto is called:",
      optionA: "Bijective",
      optionB: "Surjective only",
      optionC: "Injective only",
      optionD: "Constant",
      correctOption: "A",
      explanation: "A function that is both one-one and onto is bijective.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-sets-relations-functions-q03",
      topicId: "jee-mathematics-sets-relations-functions",
      text: "An equivalence relation must be reflexive, symmetric and:",
      optionA: "Irreflexive",
      optionB: "Antisymmetric",
      optionC: "Transitive",
      optionD: "Empty",
      correctOption: "C",
      explanation: "An equivalence relation is reflexive, symmetric and transitive.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-sets-relations-functions-q04",
      topicId: "jee-mathematics-sets-relations-functions",
      text: "If n(A) = 3 and n(B) = 2, the number of functions from A to B is:",
      optionA: "Eight",
      optionB: "Six",
      optionC: "Nine",
      optionD: "Five",
      correctOption: "A",
      explanation: "The count is n(B) to the power n(A), that is two cubed equal to eight.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-sets-relations-functions-q05",
      topicId: "jee-mathematics-sets-relations-functions",
      text: "For two sets, n(A union B) equals n(A) plus n(B) minus:",
      optionA: "n(A intersection B)",
      optionB: "n(A) times n(B)",
      optionC: "Zero",
      optionD: "n(A) minus n(B)",
      correctOption: "A",
      explanation: "By the inclusion-exclusion principle, subtract the intersection count.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-sets-relations-functions-q06",
      topicId: "jee-mathematics-sets-relations-functions",
      text: "Composition of functions is generally:",
      optionA: "Commutative",
      optionB: "Always the identity",
      optionC: "Not commutative",
      optionD: "Undefined",
      correctOption: "C",
      explanation: "In general f composed with g differs from g composed with f.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-sets-relations-functions-q07",
      topicId: "jee-mathematics-sets-relations-functions",
      text: "Which type of function has an inverse?",
      optionA: "Bijective",
      optionB: "Only onto",
      optionC: "Only one-one",
      optionD: "Constant",
      correctOption: "A",
      explanation: "Only a bijective function has a well-defined inverse.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-sets-relations-functions-q08",
      topicId: "jee-mathematics-sets-relations-functions",
      text: "A relation from set A to set B is a subset of:",
      optionA: "A union B",
      optionB: "A intersection B",
      optionC: "The cartesian product A times B",
      optionD: "A minus B",
      correctOption: "C",
      explanation: "A relation from A to B is defined as a subset of the cartesian product A times B.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-trigonometric-identities-q01",
      topicId: "jee-mathematics-trigonometric-identities",
      text: "The value of sin squared x plus cos squared x is:",
      optionA: "One",
      optionB: "Zero",
      optionC: "Two",
      optionD: "Depends on x",
      correctOption: "A",
      explanation: "The Pythagorean identity gives sin squared x plus cos squared x equal to one.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-trigonometric-identities-q02",
      topicId: "jee-mathematics-trigonometric-identities",
      text: "sin 2A equals:",
      optionA: "Two cos squared A",
      optionB: "cos squared A minus sin squared A",
      optionC: "Two sin A cos A",
      optionD: "One minus two sin squared A",
      correctOption: "C",
      explanation: "The double-angle identity gives sin 2A equal to two sin A cos A.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-trigonometric-identities-q03",
      topicId: "jee-mathematics-trigonometric-identities",
      text: "The value of cos 60 degrees is:",
      optionA: "One",
      optionB: "Root three over two",
      optionC: "One half",
      optionD: "Zero",
      correctOption: "C",
      explanation: "The cosine of 60 degrees equals one half.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-trigonometric-identities-q04",
      topicId: "jee-mathematics-trigonometric-identities",
      text: "The identity 1 plus tan squared x equals:",
      optionA: "sec squared x",
      optionB: "csc squared x",
      optionC: "cot squared x",
      optionD: "sin squared x",
      correctOption: "A",
      explanation: "One plus tan squared x equals sec squared x.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-trigonometric-identities-q05",
      topicId: "jee-mathematics-trigonometric-identities",
      text: "The general solution of sin x equals zero is:",
      optionA: "x equals n pi",
      optionB: "x equals (2n plus 1) pi over 2",
      optionC: "x equals 2 n pi",
      optionD: "x equals n pi over 2",
      correctOption: "A",
      explanation: "Sine vanishes at integer multiples of pi, so x equals n pi.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-trigonometric-identities-q06",
      topicId: "jee-mathematics-trigonometric-identities",
      text: "cos(A plus B) equals:",
      optionA: "cos A cos B plus sin A sin B",
      optionB: "cos A cos B minus sin A sin B",
      optionC: "sin A cos B plus cos A sin B",
      optionD: "cos A sin B minus sin A cos B",
      correctOption: "B",
      explanation: "The compound-angle formula gives cos A cos B minus sin A sin B.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-trigonometric-identities-q07",
      topicId: "jee-mathematics-trigonometric-identities",
      text: "The value of tan 45 degrees is:",
      optionA: "One",
      optionB: "Zero",
      optionC: "Root three",
      optionD: "One over root three",
      correctOption: "A",
      explanation: "The tangent of 45 degrees equals one.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-trigonometric-identities-q08",
      topicId: "jee-mathematics-trigonometric-identities",
      text: "cos 2A may be written as:",
      optionA: "Two sin A cos A",
      optionB: "sin squared A minus cos squared A",
      optionC: "One plus two sin squared A",
      optionD: "Two cos squared A minus one",
      correctOption: "D",
      explanation: "One form of the double-angle identity is cos 2A equal to two cos squared A minus one.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-inverse-trigonometry-q01",
      topicId: "jee-mathematics-inverse-trigonometry",
      text: "The principal range of arcsin x is:",
      optionA: "Zero to pi",
      optionB: "Minus pi over two to pi over two",
      optionC: "Zero to pi over two",
      optionD: "Minus pi to pi",
      correctOption: "B",
      explanation: "The principal range of arcsin is from minus pi over two to pi over two.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-inverse-trigonometry-q02",
      topicId: "jee-mathematics-inverse-trigonometry",
      text: "The value of arcsin x plus arccos x is:",
      optionA: "Zero",
      optionB: "pi over two",
      optionC: "pi",
      optionD: "pi over four",
      correctOption: "B",
      explanation: "For all valid x, arcsin x plus arccos x equals pi over two.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-inverse-trigonometry-q03",
      topicId: "jee-mathematics-inverse-trigonometry",
      text: "The principal range of arccos x is:",
      optionA: "Minus pi over two to pi over two",
      optionB: "Minus pi to pi",
      optionC: "Zero to pi over two",
      optionD: "Zero to pi",
      correctOption: "D",
      explanation: "The principal range of arccos is from zero to pi.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-inverse-trigonometry-q04",
      topicId: "jee-mathematics-inverse-trigonometry",
      text: "The derivative of arctan x is:",
      optionA: "One over the square root of (1 minus x squared)",
      optionB: "One over (1 minus x squared)",
      optionC: "Minus one over (1 plus x squared)",
      optionD: "One over (1 plus x squared)",
      correctOption: "D",
      explanation: "The derivative of arctan x is one over (1 plus x squared).",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-inverse-trigonometry-q05",
      topicId: "jee-mathematics-inverse-trigonometry",
      text: "The value of arctan x plus arccot x is:",
      optionA: "Zero",
      optionB: "pi",
      optionC: "pi over two",
      optionD: "pi over four",
      correctOption: "C",
      explanation: "For all real x, arctan x plus arccot x equals pi over two.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-inverse-trigonometry-q06",
      topicId: "jee-mathematics-inverse-trigonometry",
      text: "The value of arcsin of one half is:",
      optionA: "pi over six",
      optionB: "pi over four",
      optionC: "pi over three",
      optionD: "pi over two",
      correctOption: "A",
      explanation: "Since sine of pi over six is one half, arcsin of one half is pi over six.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-inverse-trigonometry-q07",
      topicId: "jee-mathematics-inverse-trigonometry",
      text: "The function arcsin x is:",
      optionA: "An even function",
      optionB: "An odd function",
      optionC: "Neither even nor odd",
      optionD: "A constant",
      correctOption: "B",
      explanation: "Since arcsin of minus x equals minus arcsin x, the function is odd.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-inverse-trigonometry-q08",
      topicId: "jee-mathematics-inverse-trigonometry",
      text: "The expression arccos(minus x) equals:",
      optionA: "pi minus arccos x",
      optionB: "Minus arccos x",
      optionC: "arccos x",
      optionD: "pi over two minus arccos x",
      correctOption: "A",
      explanation: "By the identity, arccos of minus x equals pi minus arccos x.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-conic-sections-q01",
      topicId: "jee-mathematics-conic-sections",
      text: "The eccentricity of a parabola is:",
      optionA: "One",
      optionB: "Between zero and one",
      optionC: "Zero",
      optionD: "Greater than one",
      correctOption: "A",
      explanation: "A parabola has eccentricity exactly equal to one.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-conic-sections-q02",
      topicId: "jee-mathematics-conic-sections",
      text: "For the parabola y squared equals 4 a x, the focus is at:",
      optionA: "(0, a)",
      optionB: "(minus a, 0)",
      optionC: "(a, 0)",
      optionD: "(0, minus a)",
      correctOption: "C",
      explanation: "The focus of y squared equals 4 a x lies at the point (a, 0).",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-conic-sections-q03",
      topicId: "jee-mathematics-conic-sections",
      text: "For an ellipse, the sum of distances from any point to the two foci is:",
      optionA: "Zero",
      optionB: "Constant equal to 2a",
      optionC: "Equal to the eccentricity",
      optionD: "Variable",
      correctOption: "B",
      explanation: "An ellipse is the locus where the sum of focal distances is the constant 2a.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-conic-sections-q04",
      topicId: "jee-mathematics-conic-sections",
      text: "The eccentricity of a circle is:",
      optionA: "Zero",
      optionB: "One",
      optionC: "Greater than one",
      optionD: "One half",
      correctOption: "A",
      explanation: "A circle is a special conic with eccentricity zero.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-conic-sections-q05",
      topicId: "jee-mathematics-conic-sections",
      text: "The asymptotes of the hyperbola x squared over a squared minus y squared over b squared equal one are:",
      optionA: "y equals plus or minus b over a times x",
      optionB: "y equals plus or minus a over b times x",
      optionC: "x equals zero",
      optionD: "y equals zero",
      correctOption: "A",
      explanation: "The asymptotes are the lines y equals plus or minus b over a times x.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-conic-sections-q06",
      topicId: "jee-mathematics-conic-sections",
      text: "The length of the latus rectum of y squared equals 4 a x is:",
      optionA: "4a",
      optionB: "2a",
      optionC: "a",
      optionD: "a over two",
      correctOption: "A",
      explanation: "The latus rectum of y squared equals 4 a x has length 4a.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-conic-sections-q07",
      topicId: "jee-mathematics-conic-sections",
      text: "A conic with eccentricity greater than one is a/an:",
      optionA: "Ellipse",
      optionB: "Parabola",
      optionC: "Circle",
      optionD: "Hyperbola",
      correctOption: "D",
      explanation: "An eccentricity greater than one identifies a hyperbola.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-conic-sections-q08",
      topicId: "jee-mathematics-conic-sections",
      text: "For the ellipse x squared over a squared plus y squared over b squared equal one with a greater than b, b squared equals:",
      optionA: "a squared plus e squared",
      optionB: "a squared times (e squared minus 1)",
      optionC: "a squared times e squared",
      optionD: "a squared times (1 minus e squared)",
      correctOption: "D",
      explanation: "For an ellipse, b squared equals a squared times (1 minus e squared).",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-differential-equations-q01",
      topicId: "jee-mathematics-differential-equations",
      text: "The order of a differential equation is the:",
      optionA: "Highest derivative present",
      optionB: "Power of the highest derivative",
      optionC: "Number of terms",
      optionD: "Degree of the polynomial",
      correctOption: "A",
      explanation: "The order is the highest-order derivative appearing in the equation.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-differential-equations-q02",
      topicId: "jee-mathematics-differential-equations",
      text: "The integrating factor of dy/dx plus P y equals Q is:",
      optionA: "The integral of Q dx",
      optionB: "Exponential of the integral of P dx",
      optionC: "P times Q",
      optionD: "One over P",
      correctOption: "B",
      explanation: "The integrating factor is the exponential of the integral of P with respect to x.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-differential-equations-q03",
      topicId: "jee-mathematics-differential-equations",
      text: "To solve a homogeneous differential equation, the usual substitution is:",
      optionA: "x equals y squared",
      optionB: "y equals v x",
      optionC: "y equals constant",
      optionD: "x equals v over y",
      correctOption: "B",
      explanation: "Substituting y equals v x reduces a homogeneous equation to a separable one.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-differential-equations-q04",
      topicId: "jee-mathematics-differential-equations",
      text: "The general solution of an nth-order differential equation contains how many arbitrary constants?",
      optionA: "One",
      optionB: "Two",
      optionC: "Zero",
      optionD: "n",
      correctOption: "D",
      explanation: "A general solution of order n carries n arbitrary constants.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-differential-equations-q05",
      topicId: "jee-mathematics-differential-equations",
      text: "Which method solves dy/dx equals f(x) times g(y)?",
      optionA: "Integrating factor",
      optionB: "Substitution y equals v x",
      optionC: "Variable separation",
      optionD: "Partial fractions only",
      correctOption: "C",
      explanation: "Such an equation separates the variables onto opposite sides before integrating.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-differential-equations-q06",
      topicId: "jee-mathematics-differential-equations",
      text: "The degree of (dy/dx) squared plus y equals zero is:",
      optionA: "One",
      optionB: "Two",
      optionC: "Three",
      optionD: "Zero",
      correctOption: "B",
      explanation: "The highest derivative appears to the power two, so the degree is two.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-differential-equations-q07",
      topicId: "jee-mathematics-differential-equations",
      text: "A first-order linear differential equation has the form dy/dx plus P(x) y equals:",
      optionA: "Zero always",
      optionB: "A constant only",
      optionC: "y squared",
      optionD: "Q(x)",
      correctOption: "D",
      explanation: "The standard linear form is dy/dx plus P(x) y equals Q(x).",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-differential-equations-q08",
      topicId: "jee-mathematics-differential-equations",
      text: "The solution of dy/dx equals k y represents:",
      optionA: "Linear growth",
      optionB: "Exponential growth or decay",
      optionC: "Constant value",
      optionD: "Oscillation",
      correctOption: "B",
      explanation: "dy/dx equals k y integrates to an exponential, giving growth or decay.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-application-of-derivatives-q01",
      topicId: "jee-mathematics-application-of-derivatives",
      text: "The slope of the tangent to a curve at a point equals the:",
      optionA: "Value of the function",
      optionB: "First derivative there",
      optionC: "Second derivative there",
      optionD: "Integral there",
      correctOption: "B",
      explanation: "The slope of the tangent at a point is the first derivative at that point.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-application-of-derivatives-q02",
      topicId: "jee-mathematics-application-of-derivatives",
      text: "A function is increasing on an interval where its first derivative is:",
      optionA: "Positive",
      optionB: "Zero",
      optionC: "Negative",
      optionD: "Undefined",
      correctOption: "A",
      explanation: "A positive first derivative means the function is increasing.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-application-of-derivatives-q03",
      topicId: "jee-mathematics-application-of-derivatives",
      text: "At a local minimum the second derivative is generally:",
      optionA: "Negative",
      optionB: "Infinite",
      optionC: "Zero only",
      optionD: "Positive",
      correctOption: "D",
      explanation: "A positive second derivative at a critical point indicates a local minimum.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-application-of-derivatives-q04",
      topicId: "jee-mathematics-application-of-derivatives",
      text: "The slope of the normal to a curve is:",
      optionA: "Equal to the tangent slope",
      optionB: "Negative reciprocal of the tangent slope",
      optionC: "Zero always",
      optionD: "The second derivative",
      correctOption: "B",
      explanation: "The normal slope is the negative reciprocal of the tangent slope.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-application-of-derivatives-q05",
      topicId: "jee-mathematics-application-of-derivatives",
      text: "At a point of inflection, the second derivative:",
      optionA: "Is always positive",
      optionB: "Is undefined always",
      optionC: "Changes sign",
      optionD: "Equals the first derivative",
      correctOption: "C",
      explanation: "At an inflection point the second derivative changes sign and concavity flips.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-application-of-derivatives-q06",
      topicId: "jee-mathematics-application-of-derivatives",
      text: "Critical points of a function occur where the first derivative is:",
      optionA: "Zero or undefined",
      optionB: "Maximum",
      optionC: "Always positive",
      optionD: "Constant",
      correctOption: "A",
      explanation: "Critical points are where the first derivative is zero or fails to exist.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-application-of-derivatives-q07",
      topicId: "jee-mathematics-application-of-derivatives",
      text: "For a small change, the approximate change in y is given by:",
      optionA: "dx over f'(x)",
      optionB: "f(x) times dx",
      optionC: "f'(x) times dx",
      optionD: "f''(x) times dx",
      correctOption: "C",
      explanation: "The linear approximation gives dy approximately equal to f'(x) times dx.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-application-of-derivatives-q08",
      topicId: "jee-mathematics-application-of-derivatives",
      text: "To find the absolute maximum on a closed interval, one must also check the:",
      optionA: "Endpoints",
      optionB: "Origin only",
      optionC: "Asymptotes",
      optionD: "Inflection points only",
      correctOption: "A",
      explanation: "The absolute extremum may occur at the endpoints, so they must be checked.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-area-under-curves-q01",
      topicId: "jee-mathematics-area-under-curves",
      text: "The area under a non-negative curve y equals f(x) from a to b is given by:",
      optionA: "The definite integral of f from a to b",
      optionB: "The derivative of f",
      optionC: "f(b) minus f(a)",
      optionD: "The slope at b",
      correctOption: "A",
      explanation: "The area equals the definite integral of f(x) from a to b.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-area-under-curves-q02",
      topicId: "jee-mathematics-area-under-curves",
      text: "The area enclosed by a circle of radius r is:",
      optionA: "2 pi r",
      optionB: "4 pi r squared",
      optionC: "pi r",
      optionD: "pi r squared",
      correctOption: "D",
      explanation: "The area of a circle of radius r is pi times r squared.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-area-under-curves-q03",
      topicId: "jee-mathematics-area-under-curves",
      text: "The area between two curves uses the integral of:",
      optionA: "The derivative of each",
      optionB: "Their product",
      optionC: "Their sum",
      optionD: "Upper curve minus lower curve",
      correctOption: "D",
      explanation: "The area between curves is the integral of the upper minus the lower function.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-area-under-curves-q04",
      topicId: "jee-mathematics-area-under-curves",
      text: "If a region lies below the x-axis, the definite integral over it is:",
      optionA: "Positive",
      optionB: "Negative",
      optionC: "Zero",
      optionD: "Infinite",
      correctOption: "B",
      explanation: "Below the x-axis the function is negative, so the integral there is negative.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-area-under-curves-q05",
      topicId: "jee-mathematics-area-under-curves",
      text: "The area of an ellipse with semi-axes a and b is:",
      optionA: "2 pi a b",
      optionB: "pi (a plus b)",
      optionC: "pi a b",
      optionD: "pi a squared b",
      correctOption: "C",
      explanation: "The area of an ellipse is pi times a times b.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-area-under-curves-q06",
      topicId: "jee-mathematics-area-under-curves",
      text: "The limits of integration for the area between two curves are found from their:",
      optionA: "Points of intersection",
      optionB: "Maximum values",
      optionC: "Derivatives",
      optionD: "Asymptotes",
      correctOption: "A",
      explanation: "The integration limits are the x-coordinates where the two curves intersect.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-area-under-curves-q07",
      topicId: "jee-mathematics-area-under-curves",
      text: "When integrating with respect to y, the strip used is:",
      optionA: "Vertical",
      optionB: "Horizontal",
      optionC: "Diagonal",
      optionD: "Circular",
      correctOption: "B",
      explanation: "Integration with respect to y sums horizontal strips of width dy.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-area-under-curves-q08",
      topicId: "jee-mathematics-area-under-curves",
      text: "For a symmetric region, a useful shortcut is to integrate over half and then:",
      optionA: "Subtract the result",
      optionB: "Double the result",
      optionC: "Square the result",
      optionD: "Ignore symmetry",
      correctOption: "B",
      explanation: "Using symmetry, integrate over half the region and double the answer.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-statistics-reasoning-q01",
      topicId: "jee-mathematics-statistics-reasoning",
      text: "The most frequently occurring value in a data set is the:",
      optionA: "Mean",
      optionB: "Median",
      optionC: "Mode",
      optionD: "Range",
      correctOption: "C",
      explanation: "The mode is the value that occurs most often.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-statistics-reasoning-q02",
      topicId: "jee-mathematics-statistics-reasoning",
      text: "The standard deviation is the square root of the:",
      optionA: "Mean",
      optionB: "Mode",
      optionC: "Median",
      optionD: "Variance",
      correctOption: "D",
      explanation: "Standard deviation is the positive square root of the variance.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-statistics-reasoning-q03",
      topicId: "jee-mathematics-statistics-reasoning",
      text: "The contrapositive of the statement if p then q is:",
      optionA: "If q then p",
      optionB: "If not q then not p",
      optionC: "If not p then not q",
      optionD: "p and not q",
      correctOption: "B",
      explanation: "The contrapositive of if p then q is if not q then not p, which is equivalent.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-statistics-reasoning-q04",
      topicId: "jee-mathematics-statistics-reasoning",
      text: "The conjunction of two statements (p and q) is true only when:",
      optionA: "At least one is true",
      optionB: "Both are true",
      optionC: "Both are false",
      optionD: "They differ",
      correctOption: "B",
      explanation: "A conjunction is true only when both component statements are true.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-statistics-reasoning-q05",
      topicId: "jee-mathematics-statistics-reasoning",
      text: "The median of the data 3, 5, 7, 9 is:",
      optionA: "Five",
      optionB: "Seven",
      optionC: "Six",
      optionD: "Eight",
      correctOption: "C",
      explanation: "With an even count, the median is the average of 5 and 7, which is 6.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-statistics-reasoning-q06",
      topicId: "jee-mathematics-statistics-reasoning",
      text: "A statement that is always true regardless of its components is called a:",
      optionA: "Contradiction",
      optionB: "Tautology",
      optionC: "Converse",
      optionD: "Negation",
      correctOption: "B",
      explanation: "A tautology is true for all truth values of its components.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-statistics-reasoning-q07",
      topicId: "jee-mathematics-statistics-reasoning",
      text: "The disjunction (p or q) is false only when:",
      optionA: "Both are false",
      optionB: "One is true",
      optionC: "Both are true",
      optionD: "They differ",
      correctOption: "A",
      explanation: "An inclusive or is false only when both statements are false.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-statistics-reasoning-q08",
      topicId: "jee-mathematics-statistics-reasoning",
      text: "The mean of the data 2, 4, 6, 8 is:",
      optionA: "Four",
      optionB: "Five",
      optionC: "Six",
      optionD: "Seven",
      correctOption: "B",
      explanation: "The sum 20 divided by 4 values gives a mean of 5.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-heights-distances-q01",
      topicId: "jee-mathematics-heights-distances",
      text: "The angle of elevation is measured from the horizontal to an object that is:",
      optionA: "Below the observer",
      optionB: "At eye level",
      optionC: "Above the observer",
      optionD: "Behind the observer",
      correctOption: "C",
      explanation: "The angle of elevation is measured upward to an object above the horizontal.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-heights-distances-q02",
      topicId: "jee-mathematics-heights-distances",
      text: "At an angle of elevation of 45 degrees, the height of an object equals its:",
      optionA: "Horizontal distance",
      optionB: "Half the distance",
      optionC: "Twice the distance",
      optionD: "Square of the distance",
      correctOption: "A",
      explanation: "Since tan 45 degrees is one, the height equals the horizontal distance.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-heights-distances-q03",
      topicId: "jee-mathematics-heights-distances",
      text: "The angle of elevation and the angle of depression for the same line of sight are:",
      optionA: "Complementary",
      optionB: "Equal",
      optionC: "Supplementary",
      optionD: "Always 90 degrees",
      correctOption: "B",
      explanation: "They are alternate angles for the same line of sight, so they are equal.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-heights-distances-q04",
      topicId: "jee-mathematics-heights-distances",
      text: "A tower casts a shadow equal to its height when the sun's elevation is:",
      optionA: "30 degrees",
      optionB: "90 degrees",
      optionC: "60 degrees",
      optionD: "45 degrees",
      correctOption: "D",
      explanation: "Equal height and shadow give tan equal to one, so the elevation is 45 degrees.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-heights-distances-q05",
      topicId: "jee-mathematics-heights-distances",
      text: "For a height h at horizontal distance d, the angle of elevation satisfies tan theta equals:",
      optionA: "h over d",
      optionB: "d over h",
      optionC: "h times d",
      optionD: "d minus h",
      correctOption: "A",
      explanation: "tan theta equals the opposite over adjacent, that is h over d.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-heights-distances-q06",
      topicId: "jee-mathematics-heights-distances",
      text: "The value of tan 60 degrees is:",
      optionA: "One",
      optionB: "One over root three",
      optionC: "Root three",
      optionD: "Two",
      correctOption: "C",
      explanation: "The tangent of 60 degrees equals root three.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-heights-distances-q07",
      topicId: "jee-mathematics-heights-distances",
      text: "A pole 10 m high subtends an elevation of 30 degrees. Its distance from the observer is about:",
      optionA: "Ten root three m",
      optionB: "Ten over root three m",
      optionC: "10 m",
      optionD: "20 m",
      correctOption: "A",
      explanation: "Distance equals height over tan 30 degrees, that is 10 times root three metres.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-heights-distances-q08",
      topicId: "jee-mathematics-heights-distances",
      text: "Observing a top from two points gives two equations mainly to eliminate the:",
      optionA: "Height",
      optionB: "Unknown distance",
      optionC: "Angle",
      optionD: "Time",
      correctOption: "B",
      explanation: "Two observations let you eliminate the unknown base distance and solve for height.",
      orderIndex: 7
    },
    ...mainTopUpQuestions,
    ...jeeM2Questions,
    ...mainDepthQuestions
  ]
});
