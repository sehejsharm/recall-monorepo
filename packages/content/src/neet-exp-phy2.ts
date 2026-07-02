// NEET Physics depth expansion (round 2). Splits out two heavily-tested areas
// that were thin inside bundled chapters: Electrostatic Potential & Capacitance
// (the existing electrostatics topic focuses on charge and field) and Waves
// (progressive/stationary waves, beats, organ pipes, Doppler — previously
// bundled with oscillations). Each has a study note and a 12-question drill.
import type { AuthoredMaterial } from "./builder";
import type { Question, Topic } from "@jyotir/core";

export const phy2Topics: Topic[] = [
  // Physics (existing max orderIndex = 25)
  { id: "neet-physics-electrostatic-potential-capacitance", subjectId: "neet-physics", name: "Electrostatic Potential & Capacitance", slug: "electrostatic-potential-capacitance", orderIndex: 26 },
  { id: "neet-physics-waves", subjectId: "neet-physics", name: "Waves", slug: "waves", orderIndex: 27 }
];

export const phy2Materials: AuthoredMaterial[] = [
  { id: "neet-physics-electrostatic-potential-capacitance-m01", topicId: "neet-physics-electrostatic-potential-capacitance", title: "Electrostatic Potential & Capacitance", content: `**Electric potential** at a point is the work done per unit positive charge in bringing it from infinity to that point. It is a **scalar**, measured in **volts (V = J/C)**.

## Potential
\`\`\`
V = W / q
V = (1 / 4πε₀) · q / r      (due to a point charge)
E = − dV / dr               (field is the negative potential gradient)
\`\`\`
- An **equipotential surface** is everywhere perpendicular to field lines; **no work** is done moving a charge along it.

## Capacitance
- A **capacitor** stores charge; **C = Q / V**, measured in **farads (F)**.
\`\`\`
Parallel-plate:  C = ε₀A / d
With dielectric: C = K·ε₀A / d      (K = dielectric constant > 1)
\`\`\`
- A **dielectric** inserted between the plates **increases** the capacitance by factor K.

## Combinations & Energy
| Arrangement | Net capacitance |
| --- | --- |
| **Series** | 1/C = 1/C₁ + 1/C₂ + … |
| **Parallel** | C = C₁ + C₂ + … |

- Energy stored: \`U = ½CV² = ½QV = Q²/2C\`.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "neet-physics-waves-m01", topicId: "neet-physics-waves", title: "Waves", content: `A **wave** transfers energy without transferring matter. **Mechanical** waves need a medium; **electromagnetic** waves do not.

## Types & Speed
- **Transverse** — particles move perpendicular to propagation (light, waves on a string).
- **Longitudinal** — particles move parallel to propagation (sound).
\`\`\`
v = f · λ            (wave speed = frequency × wavelength)
\`\`\`
- Sound travels **fastest in solids**, slowest in gases (~340 m/s in air).

## Superposition
- **Stationary (standing) waves** form when two identical waves travel in opposite directions, giving fixed **nodes** (zero amplitude) and **antinodes** (maximum amplitude).

| Organ pipe | Harmonics | Fundamental |
| --- | --- | --- |
| **Closed** (one end) | Only **odd** | f = v/4L |
| **Open** (both ends) | **All** | f = v/2L |

## Beats & Doppler
- **Beats** arise from two waves of slightly different frequency; **beat frequency = |f₁ − f₂|**.
- **Doppler effect** — the apparent frequency changes with relative motion: **higher** when source and observer approach, **lower** when they recede.
- **Resonance** occurs when the driving frequency matches a natural frequency, giving maximum amplitude.`, estimatedReadTime: 2, orderIndex: 0 }
];

export const phy2Questions: Question[] = [
  // ── Electrostatic Potential & Capacitance ──
  { id: "neet-physics-electrostatic-potential-capacitance-q01", topicId: "neet-physics-electrostatic-potential-capacitance", text: "Electric potential is a:", optionA: "Scalar quantity", optionB: "Vector quantity", optionC: "Tensor", optionD: "Dimensionless number", correctOption: "A", explanation: "Electric potential is a scalar; only its magnitude and sign matter.", orderIndex: 0 },
  { id: "neet-physics-electrostatic-potential-capacitance-q02", topicId: "neet-physics-electrostatic-potential-capacitance", text: "The SI unit of electric potential is the:", optionA: "Volt", optionB: "Ampere", optionC: "Coulomb", optionD: "Farad", correctOption: "A", explanation: "Potential is measured in volts (1 V = 1 J/C).", orderIndex: 1 },
  { id: "neet-physics-electrostatic-potential-capacitance-q03", topicId: "neet-physics-electrostatic-potential-capacitance", text: "The work done in moving a charge along an equipotential surface is:", optionA: "Zero", optionB: "Maximum", optionC: "Negative", optionD: "Infinite", correctOption: "A", explanation: "No work is done moving a charge along an equipotential surface (ΔV = 0).", orderIndex: 2 },
  { id: "neet-physics-electrostatic-potential-capacitance-q04", topicId: "neet-physics-electrostatic-potential-capacitance", text: "The potential due to a point charge q at distance r is proportional to:", optionA: "1/r", optionB: "1/r²", optionC: "r", optionD: "r²", correctOption: "A", explanation: "V = kq/r, so potential varies as 1/r (whereas field varies as 1/r²).", orderIndex: 3 },
  { id: "neet-physics-electrostatic-potential-capacitance-q05", topicId: "neet-physics-electrostatic-potential-capacitance", text: "The SI unit of capacitance is the:", optionA: "Farad", optionB: "Volt", optionC: "Henry", optionD: "Ohm", correctOption: "A", explanation: "Capacitance is measured in farads (1 F = 1 C/V).", orderIndex: 4 },
  { id: "neet-physics-electrostatic-potential-capacitance-q06", topicId: "neet-physics-electrostatic-potential-capacitance", text: "Inserting a dielectric between the plates of a capacitor:", optionA: "Increases the capacitance", optionB: "Decreases the capacitance", optionC: "Has no effect", optionD: "Makes it zero", correctOption: "A", explanation: "A dielectric of constant K increases capacitance by the factor K.", orderIndex: 5 },
  { id: "neet-physics-electrostatic-potential-capacitance-q07", topicId: "neet-physics-electrostatic-potential-capacitance", text: "For capacitors in parallel, the net capacitance is:", optionA: "C₁ + C₂ + …", optionB: "1/C₁ + 1/C₂", optionC: "C₁ × C₂", optionD: "C₁ − C₂", correctOption: "A", explanation: "Parallel capacitors add directly: C = C₁ + C₂ + …", orderIndex: 6 },
  { id: "neet-physics-electrostatic-potential-capacitance-q08", topicId: "neet-physics-electrostatic-potential-capacitance", text: "For capacitors in series, the correct relation is:", optionA: "1/C = 1/C₁ + 1/C₂ + …", optionB: "C = C₁ + C₂", optionC: "C = C₁C₂", optionD: "C = C₁ − C₂", correctOption: "A", explanation: "In series the reciprocals add: 1/C = 1/C₁ + 1/C₂ + …", orderIndex: 7 },
  { id: "neet-physics-electrostatic-potential-capacitance-q09", topicId: "neet-physics-electrostatic-potential-capacitance", text: "The energy stored in a capacitor is given by:", optionA: "½CV²", optionB: "CV", optionC: "2CV²", optionD: "C²V", correctOption: "A", explanation: "Energy U = ½CV² = ½QV = Q²/2C.", orderIndex: 8 },
  { id: "neet-physics-electrostatic-potential-capacitance-q10", topicId: "neet-physics-electrostatic-potential-capacitance", text: "The capacitance of a parallel-plate capacitor is proportional to:", optionA: "Plate area A", optionB: "Plate separation d", optionC: "The square of the voltage", optionD: "The stored charge only", correctOption: "A", explanation: "C = ε₀A/d, so C is proportional to plate area A and inversely to separation d.", orderIndex: 9 },
  { id: "neet-physics-electrostatic-potential-capacitance-q11", topicId: "neet-physics-electrostatic-potential-capacitance", text: "The relation between electric field and potential is:", optionA: "E = − dV/dr", optionB: "E = V·r", optionC: "E = dV·r", optionD: "E = V²", correctOption: "A", explanation: "The field is the negative gradient of potential: E = − dV/dr.", orderIndex: 10 },
  { id: "neet-physics-electrostatic-potential-capacitance-q12", topicId: "neet-physics-electrostatic-potential-capacitance", text: "One volt is equal to:", optionA: "One joule per coulomb", optionB: "One coulomb per second", optionC: "One newton per coulomb", optionD: "One joule per second", correctOption: "A", explanation: "1 volt = 1 joule/coulomb (work per unit charge).", orderIndex: 11 },

  // ── Waves ──
  { id: "neet-physics-waves-q01", topicId: "neet-physics-waves", text: "A wave transfers:", optionA: "Energy without transferring matter", optionB: "Matter without energy", optionC: "Both matter and energy equally", optionD: "Neither", correctOption: "A", explanation: "Waves carry energy through a medium without net transport of matter.", orderIndex: 0 },
  { id: "neet-physics-waves-q02", topicId: "neet-physics-waves", text: "Sound waves in air are:", optionA: "Longitudinal", optionB: "Transverse", optionC: "Electromagnetic", optionD: "Stationary only", correctOption: "A", explanation: "Sound in air is a longitudinal wave (compressions and rarefactions).", orderIndex: 1 },
  { id: "neet-physics-waves-q03", topicId: "neet-physics-waves", text: "The relation between wave speed, frequency and wavelength is:", optionA: "v = fλ", optionB: "v = f/λ", optionC: "v = λ/f", optionD: "v = f + λ", correctOption: "A", explanation: "Wave speed v = frequency × wavelength (v = fλ).", orderIndex: 2 },
  { id: "neet-physics-waves-q04", topicId: "neet-physics-waves", text: "Sound travels fastest in:", optionA: "Solids", optionB: "Liquids", optionC: "Gases", optionD: "Vacuum", correctOption: "A", explanation: "Sound travels fastest in solids and cannot travel through a vacuum.", orderIndex: 3 },
  { id: "neet-physics-waves-q05", topicId: "neet-physics-waves", text: "Points of zero amplitude in a stationary wave are called:", optionA: "Nodes", optionB: "Antinodes", optionC: "Crests", optionD: "Troughs", correctOption: "A", explanation: "Nodes are points of zero amplitude; antinodes have maximum amplitude.", orderIndex: 4 },
  { id: "neet-physics-waves-q06", topicId: "neet-physics-waves", text: "The beat frequency produced by two sound waves of frequency f₁ and f₂ is:", optionA: "|f₁ − f₂|", optionB: "f₁ + f₂", optionC: "f₁ × f₂", optionD: "f₁/f₂", correctOption: "A", explanation: "Beat frequency equals the magnitude of the difference, |f₁ − f₂|.", orderIndex: 5 },
  { id: "neet-physics-waves-q07", topicId: "neet-physics-waves", text: "A closed organ pipe produces which harmonics?", optionA: "Only odd harmonics", optionB: "Only even harmonics", optionC: "All harmonics", optionD: "No harmonics", correctOption: "A", explanation: "A pipe closed at one end supports only odd harmonics.", orderIndex: 6 },
  { id: "neet-physics-waves-q08", topicId: "neet-physics-waves", text: "The apparent change in frequency due to relative motion of source and observer is the:", optionA: "Doppler effect", optionB: "Photoelectric effect", optionC: "Compton effect", optionD: "Zeeman effect", correctOption: "A", explanation: "The Doppler effect changes the observed frequency with relative motion.", orderIndex: 7 },
  { id: "neet-physics-waves-q09", topicId: "neet-physics-waves", text: "As a sound source approaches a stationary observer, the observed frequency:", optionA: "Increases", optionB: "Decreases", optionC: "Stays the same", optionD: "Becomes zero", correctOption: "A", explanation: "An approaching source raises the observed frequency (Doppler blue-shift analogue).", orderIndex: 8 },
  { id: "neet-physics-waves-q10", topicId: "neet-physics-waves", text: "Waves on a stretched string are:", optionA: "Transverse", optionB: "Longitudinal", optionC: "Electromagnetic", optionD: "Non-mechanical", correctOption: "A", explanation: "Waves on a string are transverse — particles move perpendicular to propagation.", orderIndex: 9 },
  { id: "neet-physics-waves-q11", topicId: "neet-physics-waves", text: "An open organ pipe (open at both ends) produces:", optionA: "All harmonics", optionB: "Only odd harmonics", optionC: "Only even harmonics", optionD: "Only the fundamental", correctOption: "A", explanation: "An open pipe supports all harmonics (both odd and even).", orderIndex: 10 },
  { id: "neet-physics-waves-q12", topicId: "neet-physics-waves", text: "Maximum amplitude of vibration when the driving frequency equals the natural frequency is:", optionA: "Resonance", optionB: "Damping", optionC: "Interference", optionD: "Diffraction", correctOption: "A", explanation: "Resonance occurs when the driving frequency matches a natural frequency, maximising amplitude.", orderIndex: 11 }
];
