// SSC CGL depth expansion — General Awareness science & current affairs (pass 4).
// Splits the broad "General Science" area into Physics, Chemistry and Biology,
// and adds a government-schemes/current-affairs topic. Each has a study note and
// a full 12-question drill.
import type { AuthoredMaterial } from "./builder";
import type { Question, Topic } from "@jyotir/core";

export const ssc4Topics: Topic[] = [
  // General Awareness (existing max orderIndex = 9)
  { id: "ssc-cgl-general-awareness-physics-gk", subjectId: "ssc-cgl-general-awareness", name: "Physics GK", slug: "physics-gk", orderIndex: 10 },
  { id: "ssc-cgl-general-awareness-chemistry-gk", subjectId: "ssc-cgl-general-awareness", name: "Chemistry GK", slug: "chemistry-gk", orderIndex: 11 },
  { id: "ssc-cgl-general-awareness-biology-gk", subjectId: "ssc-cgl-general-awareness", name: "Biology & Human Body", slug: "biology-gk", orderIndex: 12 },
  { id: "ssc-cgl-general-awareness-current-affairs-schemes", subjectId: "ssc-cgl-general-awareness", name: "Current Affairs & Government Schemes", slug: "current-affairs-schemes", orderIndex: 13 }
];

export const ssc4Materials: AuthoredMaterial[] = [
  { id: "ssc-cgl-general-awareness-physics-gk-m01", topicId: "ssc-cgl-general-awareness-physics-gk", title: "Physics GK", content: `## SI units (frequently asked)
| Quantity | SI unit |
| --- | --- |
| **Force** | Newton (N) |
| **Energy / Work** | Joule (J) |
| **Power** | Watt (W) |
| **Electric current** | Ampere (A) |
| **Frequency** | Hertz (Hz) |
| **Pressure** | Pascal (Pa) |

## Key facts
- **Speed of light** ≈ **3 × 10⁸ m/s**; sound cannot travel through a **vacuum**.
- **Newton's first law** is the **law of inertia**.
- **Gravity** pulls objects toward the Earth; weight = mass × g.
- **Mirrors**: a **concave** mirror is used in vehicle headlights and torches (it converges light).
- **Lenses**: **concave** corrects short-sight (myopia); **convex** corrects long-sight (hypermetropia).`, estimatedReadTime: 1, orderIndex: 0 },
  { id: "ssc-cgl-general-awareness-chemistry-gk-m01", topicId: "ssc-cgl-general-awareness-chemistry-gk", title: "Chemistry GK", content: `## Common chemical symbols
| Element | Symbol |
| --- | --- |
| Gold | **Au** |
| Silver | Ag |
| Sodium | **Na** |
| Iron | Fe |
| Potassium | K |

## Everyday chemistry
- **Common salt** is sodium chloride (**NaCl**); **water** is **H₂O**.
- The most abundant gas in air is **nitrogen** (~78%); **oxygen** supports respiration and burning.
- The **lightest element** is **hydrogen**; **helium** is a light, non-flammable gas used in balloons.
- **Diamond** is the hardest natural substance (a form of carbon).
- **Rusting** of iron needs both **oxygen and moisture (water)**.
- **Acids** turn blue litmus **red**; **bases** turn red litmus **blue**. A **neutral** solution has **pH 7**.`, estimatedReadTime: 1, orderIndex: 0 },
  { id: "ssc-cgl-general-awareness-biology-gk-m01", topicId: "ssc-cgl-general-awareness-biology-gk", title: "Biology & Human Body", content: `## The human body
- An adult human has **206 bones** and **23 pairs of chromosomes**.
- The **skin** is the largest organ; the **liver** is the largest internal gland.
- The **heart** pumps blood; **haemoglobin** gives blood its red colour and carries oxygen.
- The functional unit of the **kidney** is the **nephron**.
- The **pituitary gland** is the 'master gland'; **insulin** is made by the **pancreas**.

## Cells and nutrition
- The **mitochondrion** is the 'powerhouse of the cell'.
- Deficiency diseases: **Vitamin C → scurvy**, **Vitamin D → rickets**, **Vitamin A → night blindness**, **iron → anaemia**.
- In **photosynthesis**, plants take in CO₂ and release **oxygen**.`, estimatedReadTime: 1, orderIndex: 0 },
  { id: "ssc-cgl-general-awareness-current-affairs-schemes-m01", topicId: "ssc-cgl-general-awareness-current-affairs-schemes", title: "Current Affairs & Government Schemes", content: `Flagship **Government of India schemes** are staple SSC static/current-affairs questions.
| Scheme | Aim |
| --- | --- |
| **Jan Dhan Yojana** | Financial inclusion (bank accounts for all) |
| **Swachh Bharat Mission** | Cleanliness & sanitation |
| **Beti Bachao Beti Padhao** | Welfare & education of the girl child |
| **Ayushman Bharat** | Health insurance for the poor |
| **PM Awas Yojana** | Housing for all |
| **Ujjwala Yojana** | LPG connections to poor households |
| **MGNREGA** | 100 days of guaranteed rural employment |
| **Make in India** | Boost domestic manufacturing |
| **Digital India** | Digital empowerment / e-governance |
| **Skill India** | Skill training for youth |

- **NITI Aayog** replaced the **Planning Commission** (2015) as the government's policy think tank.
- The **Fit India Movement** promotes physical fitness.`, estimatedReadTime: 1, orderIndex: 0 }
];

export const ssc4Questions: Question[] = [
  // ── Physics GK ──
  { id: "ssc-cgl-general-awareness-physics-gk-q01", topicId: "ssc-cgl-general-awareness-physics-gk", text: "The SI unit of force is the:", optionA: "Newton", optionB: "Joule", optionC: "Watt", optionD: "Pascal", correctOption: "A", explanation: "Force is measured in newtons (N).", orderIndex: 0 },
  { id: "ssc-cgl-general-awareness-physics-gk-q02", topicId: "ssc-cgl-general-awareness-physics-gk", text: "The SI unit of power is the:", optionA: "Watt", optionB: "Newton", optionC: "Joule", optionD: "Ampere", correctOption: "A", explanation: "Power is measured in watts (W), equal to joules per second.", orderIndex: 1 },
  { id: "ssc-cgl-general-awareness-physics-gk-q03", topicId: "ssc-cgl-general-awareness-physics-gk", text: "The SI unit of electric current is the:", optionA: "Ampere", optionB: "Volt", optionC: "Ohm", optionD: "Watt", correctOption: "A", explanation: "Electric current is measured in amperes (A).", orderIndex: 2 },
  { id: "ssc-cgl-general-awareness-physics-gk-q04", topicId: "ssc-cgl-general-awareness-physics-gk", text: "The speed of light in a vacuum is approximately:", optionA: "3 × 10⁸ m/s", optionB: "3 × 10⁶ m/s", optionC: "3 × 10¹⁰ m/s", optionD: "3 × 10⁵ m/s", correctOption: "A", explanation: "Light travels at about 3 × 10⁸ metres per second in a vacuum.", orderIndex: 3 },
  { id: "ssc-cgl-general-awareness-physics-gk-q05", topicId: "ssc-cgl-general-awareness-physics-gk", text: "The type of mirror used in vehicle headlights is:", optionA: "Concave", optionB: "Convex", optionC: "Plane", optionD: "Cylindrical", correctOption: "A", explanation: "A concave mirror converges light into a strong parallel beam, ideal for headlights.", orderIndex: 4 },
  { id: "ssc-cgl-general-awareness-physics-gk-q06", topicId: "ssc-cgl-general-awareness-physics-gk", text: "The SI unit of frequency is the:", optionA: "Hertz", optionB: "Newton", optionC: "Decibel", optionD: "Watt", correctOption: "A", explanation: "Frequency is measured in hertz (Hz), i.e., cycles per second.", orderIndex: 5 },
  { id: "ssc-cgl-general-awareness-physics-gk-q07", topicId: "ssc-cgl-general-awareness-physics-gk", text: "Newton's first law of motion is also called the law of:", optionA: "Inertia", optionB: "Gravity", optionC: "Momentum", optionD: "Friction", correctOption: "A", explanation: "The first law describes inertia — a body stays at rest or in uniform motion unless acted on by a force.", orderIndex: 6 },
  { id: "ssc-cgl-general-awareness-physics-gk-q08", topicId: "ssc-cgl-general-awareness-physics-gk", text: "The instrument used to measure temperature is the:", optionA: "Thermometer", optionB: "Barometer", optionC: "Ammeter", optionD: "Voltmeter", correctOption: "A", explanation: "A thermometer measures temperature.", orderIndex: 7 },
  { id: "ssc-cgl-general-awareness-physics-gk-q08b", topicId: "ssc-cgl-general-awareness-physics-gk", text: "Sound cannot travel through a:", optionA: "Vacuum", optionB: "Solid", optionC: "Liquid", optionD: "Gas", correctOption: "A", explanation: "Sound needs a medium; it cannot travel through a vacuum.", orderIndex: 8 },
  { id: "ssc-cgl-general-awareness-physics-gk-q10", topicId: "ssc-cgl-general-awareness-physics-gk", text: "The SI unit of energy is the:", optionA: "Joule", optionB: "Newton", optionC: "Watt", optionD: "Pascal", correctOption: "A", explanation: "Energy and work are measured in joules (J).", orderIndex: 9 },
  { id: "ssc-cgl-general-awareness-physics-gk-q11", topicId: "ssc-cgl-general-awareness-physics-gk", text: "The lens used to correct short-sightedness (myopia) is:", optionA: "Concave", optionB: "Convex", optionC: "Bifocal", optionD: "Cylindrical", correctOption: "A", explanation: "Myopia is corrected with a concave (diverging) lens.", orderIndex: 10 },
  { id: "ssc-cgl-general-awareness-physics-gk-q12", topicId: "ssc-cgl-general-awareness-physics-gk", text: "The force that pulls objects toward the centre of the Earth is:", optionA: "Gravity", optionB: "Friction", optionC: "Magnetism", optionD: "Tension", correctOption: "A", explanation: "Gravity is the attractive force pulling objects toward the Earth.", orderIndex: 11 },

  // ── Chemistry GK ──
  { id: "ssc-cgl-general-awareness-chemistry-gk-q01", topicId: "ssc-cgl-general-awareness-chemistry-gk", text: "The chemical symbol for gold is:", optionA: "Au", optionB: "Ag", optionC: "Gd", optionD: "Go", correctOption: "A", explanation: "Gold's symbol is Au, from the Latin 'aurum'.", orderIndex: 0 },
  { id: "ssc-cgl-general-awareness-chemistry-gk-q02", topicId: "ssc-cgl-general-awareness-chemistry-gk", text: "The chemical symbol for sodium is:", optionA: "Na", optionB: "So", optionC: "Sd", optionD: "S", correctOption: "A", explanation: "Sodium's symbol is Na, from the Latin 'natrium'.", orderIndex: 1 },
  { id: "ssc-cgl-general-awareness-chemistry-gk-q03", topicId: "ssc-cgl-general-awareness-chemistry-gk", text: "The most abundant gas in the Earth's atmosphere is:", optionA: "Nitrogen", optionB: "Oxygen", optionC: "Carbon dioxide", optionD: "Hydrogen", correctOption: "A", explanation: "Nitrogen makes up about 78% of the atmosphere.", orderIndex: 2 },
  { id: "ssc-cgl-general-awareness-chemistry-gk-q04", topicId: "ssc-cgl-general-awareness-chemistry-gk", text: "The gas essential for human respiration is:", optionA: "Oxygen", optionB: "Nitrogen", optionC: "Helium", optionD: "Argon", correctOption: "A", explanation: "Oxygen is required for respiration.", orderIndex: 3 },
  { id: "ssc-cgl-general-awareness-chemistry-gk-q05", topicId: "ssc-cgl-general-awareness-chemistry-gk", text: "The pH of a neutral solution is:", optionA: "7", optionB: "0", optionC: "14", optionD: "1", correctOption: "A", explanation: "A neutral solution (like pure water) has a pH of 7.", orderIndex: 4 },
  { id: "ssc-cgl-general-awareness-chemistry-gk-q06", topicId: "ssc-cgl-general-awareness-chemistry-gk", text: "Common salt is chemically known as:", optionA: "Sodium chloride", optionB: "Calcium carbonate", optionC: "Sodium bicarbonate", optionD: "Potassium chloride", correctOption: "A", explanation: "Common table salt is sodium chloride (NaCl).", orderIndex: 5 },
  { id: "ssc-cgl-general-awareness-chemistry-gk-q07", topicId: "ssc-cgl-general-awareness-chemistry-gk", text: "The lightest element in the periodic table is:", optionA: "Hydrogen", optionB: "Helium", optionC: "Lithium", optionD: "Oxygen", correctOption: "A", explanation: "Hydrogen is the lightest and simplest element.", orderIndex: 6 },
  { id: "ssc-cgl-general-awareness-chemistry-gk-q08", topicId: "ssc-cgl-general-awareness-chemistry-gk", text: "The chemical formula of water is:", optionA: "H₂O", optionB: "CO₂", optionC: "O₂", optionD: "H₂O₂", correctOption: "A", explanation: "Water is H₂O — two hydrogen atoms and one oxygen atom.", orderIndex: 7 },
  { id: "ssc-cgl-general-awareness-chemistry-gk-q09", topicId: "ssc-cgl-general-awareness-chemistry-gk", text: "Rusting of iron requires oxygen and:", optionA: "Water (moisture)", optionB: "Nitrogen", optionC: "Carbon", optionD: "Salt only", correctOption: "A", explanation: "Iron rusts in the presence of both oxygen and moisture.", orderIndex: 8 },
  { id: "ssc-cgl-general-awareness-chemistry-gk-q10", topicId: "ssc-cgl-general-awareness-chemistry-gk", text: "The lighter-than-air gas commonly used to fill balloons is:", optionA: "Helium", optionB: "Oxygen", optionC: "Carbon dioxide", optionD: "Chlorine", correctOption: "A", explanation: "Helium is lighter than air and non-flammable, so it is used in balloons.", orderIndex: 9 },
  { id: "ssc-cgl-general-awareness-chemistry-gk-q11", topicId: "ssc-cgl-general-awareness-chemistry-gk", text: "The hardest naturally occurring substance is:", optionA: "Diamond", optionB: "Iron", optionC: "Gold", optionD: "Quartz", correctOption: "A", explanation: "Diamond, a form of carbon, is the hardest natural substance.", orderIndex: 10 },
  { id: "ssc-cgl-general-awareness-chemistry-gk-q12", topicId: "ssc-cgl-general-awareness-chemistry-gk", text: "Acids turn blue litmus paper:", optionA: "Red", optionB: "Blue", optionC: "Green", optionD: "Yellow", correctOption: "A", explanation: "Acids turn blue litmus red; bases turn red litmus blue.", orderIndex: 11 },

  // ── Biology & Human Body ──
  { id: "ssc-cgl-general-awareness-biology-gk-q01", topicId: "ssc-cgl-general-awareness-biology-gk", text: "The 'powerhouse of the cell' is the:", optionA: "Mitochondria", optionB: "Nucleus", optionC: "Ribosome", optionD: "Golgi body", correctOption: "A", explanation: "Mitochondria produce ATP energy and are called the powerhouse of the cell.", orderIndex: 0 },
  { id: "ssc-cgl-general-awareness-biology-gk-q02", topicId: "ssc-cgl-general-awareness-biology-gk", text: "The number of bones in the adult human body is:", optionA: "206", optionB: "201", optionC: "212", optionD: "198", correctOption: "A", explanation: "An adult human skeleton has 206 bones.", orderIndex: 1 },
  { id: "ssc-cgl-general-awareness-biology-gk-q03", topicId: "ssc-cgl-general-awareness-biology-gk", text: "The largest organ of the human body is the:", optionA: "Skin", optionB: "Liver", optionC: "Heart", optionD: "Brain", correctOption: "A", explanation: "The skin is the body's largest organ.", orderIndex: 2 },
  { id: "ssc-cgl-general-awareness-biology-gk-q04", topicId: "ssc-cgl-general-awareness-biology-gk", text: "The red colour of blood is due to:", optionA: "Haemoglobin", optionB: "Plasma", optionC: "Platelets", optionD: "Melanin", correctOption: "A", explanation: "Haemoglobin, the iron-containing pigment in red blood cells, gives blood its red colour.", orderIndex: 3 },
  { id: "ssc-cgl-general-awareness-biology-gk-q05", topicId: "ssc-cgl-general-awareness-biology-gk", text: "The organ that pumps blood throughout the body is the:", optionA: "Heart", optionB: "Lung", optionC: "Liver", optionD: "Kidney", correctOption: "A", explanation: "The heart pumps blood around the circulatory system.", orderIndex: 4 },
  { id: "ssc-cgl-general-awareness-biology-gk-q06", topicId: "ssc-cgl-general-awareness-biology-gk", text: "Insulin is produced by the:", optionA: "Pancreas", optionB: "Liver", optionC: "Kidney", optionD: "Thyroid", correctOption: "A", explanation: "The pancreas secretes insulin, which regulates blood sugar.", orderIndex: 5 },
  { id: "ssc-cgl-general-awareness-biology-gk-q07", topicId: "ssc-cgl-general-awareness-biology-gk", text: "The functional unit of the kidney is the:", optionA: "Nephron", optionB: "Neuron", optionC: "Alveolus", optionD: "Villus", correctOption: "A", explanation: "The nephron is the kidney's basic filtering unit.", orderIndex: 6 },
  { id: "ssc-cgl-general-awareness-biology-gk-q08", topicId: "ssc-cgl-general-awareness-biology-gk", text: "A human has how many pairs of chromosomes?", optionA: "23", optionB: "22", optionC: "46", optionD: "24", correctOption: "A", explanation: "Humans have 23 pairs (46 total) of chromosomes.", orderIndex: 7 },
  { id: "ssc-cgl-general-awareness-biology-gk-q09", topicId: "ssc-cgl-general-awareness-biology-gk", text: "Deficiency of vitamin C causes:", optionA: "Scurvy", optionB: "Rickets", optionC: "Night blindness", optionD: "Goitre", correctOption: "A", explanation: "A lack of vitamin C leads to scurvy.", orderIndex: 8 },
  { id: "ssc-cgl-general-awareness-biology-gk-q10", topicId: "ssc-cgl-general-awareness-biology-gk", text: "The 'master gland' of the human body is the:", optionA: "Pituitary gland", optionB: "Thyroid gland", optionC: "Adrenal gland", optionD: "Pancreas", correctOption: "A", explanation: "The pituitary gland controls other endocrine glands, so it is called the master gland.", orderIndex: 9 },
  { id: "ssc-cgl-general-awareness-biology-gk-q11", topicId: "ssc-cgl-general-awareness-biology-gk", text: "The largest gland in the human body is the:", optionA: "Liver", optionB: "Pancreas", optionC: "Thyroid", optionD: "Salivary gland", correctOption: "A", explanation: "The liver is the largest gland (and largest internal organ) in the body.", orderIndex: 10 },
  { id: "ssc-cgl-general-awareness-biology-gk-q12", topicId: "ssc-cgl-general-awareness-biology-gk", text: "During photosynthesis, green plants release:", optionA: "Oxygen", optionB: "Carbon dioxide", optionC: "Nitrogen", optionD: "Hydrogen", correctOption: "A", explanation: "Plants take in carbon dioxide and release oxygen during photosynthesis.", orderIndex: 11 },

  // ── Current Affairs & Government Schemes ──
  { id: "ssc-cgl-general-awareness-current-affairs-schemes-q01", topicId: "ssc-cgl-general-awareness-current-affairs-schemes", text: "The Pradhan Mantri Jan Dhan Yojana is aimed at:", optionA: "Financial inclusion (bank accounts for all)", optionB: "Rural roads", optionC: "Crop insurance", optionD: "Space research", correctOption: "A", explanation: "Jan Dhan Yojana provides banking access to unbanked citizens — financial inclusion.", orderIndex: 0 },
  { id: "ssc-cgl-general-awareness-current-affairs-schemes-q02", topicId: "ssc-cgl-general-awareness-current-affairs-schemes", text: "The Swachh Bharat Mission is related to:", optionA: "Cleanliness and sanitation", optionB: "Digital payments", optionC: "Skill training", optionD: "Defence", correctOption: "A", explanation: "The Swachh Bharat Mission promotes sanitation and cleanliness.", orderIndex: 1 },
  { id: "ssc-cgl-general-awareness-current-affairs-schemes-q03", topicId: "ssc-cgl-general-awareness-current-affairs-schemes", text: "'Beti Bachao Beti Padhao' focuses on:", optionA: "Welfare and education of the girl child", optionB: "Farmer loans", optionC: "Urban housing", optionD: "Tourism", correctOption: "A", explanation: "The scheme aims to save and educate the girl child.", orderIndex: 2 },
  { id: "ssc-cgl-general-awareness-current-affairs-schemes-q04", topicId: "ssc-cgl-general-awareness-current-affairs-schemes", text: "Ayushman Bharat (PM-JAY) primarily provides:", optionA: "Health insurance for poor families", optionB: "Free laptops", optionC: "LPG connections", optionD: "Pension", correctOption: "A", explanation: "Ayushman Bharat gives health insurance coverage to eligible poor and vulnerable families.", orderIndex: 3 },
  { id: "ssc-cgl-general-awareness-current-affairs-schemes-q05", topicId: "ssc-cgl-general-awareness-current-affairs-schemes", text: "The 'Make in India' initiative aims to promote:", optionA: "Domestic manufacturing", optionB: "Foreign tourism", optionC: "Organic farming", optionD: "Space missions", correctOption: "A", explanation: "Make in India encourages companies to manufacture in India.", orderIndex: 4 },
  { id: "ssc-cgl-general-awareness-current-affairs-schemes-q06", topicId: "ssc-cgl-general-awareness-current-affairs-schemes", text: "The 'Digital India' programme aims to:", optionA: "Digitally empower citizens and improve e-governance", optionB: "Build highways", optionC: "Distribute free food", optionD: "Increase exports of tea", correctOption: "A", explanation: "Digital India promotes digital services, connectivity and e-governance.", orderIndex: 5 },
  { id: "ssc-cgl-general-awareness-current-affairs-schemes-q07", topicId: "ssc-cgl-general-awareness-current-affairs-schemes", text: "The PM Awas Yojana provides:", optionA: "Affordable housing", optionB: "Free electricity", optionC: "Health check-ups", optionD: "Bank loans for exports", correctOption: "A", explanation: "PM Awas Yojana aims to provide housing for all.", orderIndex: 6 },
  { id: "ssc-cgl-general-awareness-current-affairs-schemes-q08", topicId: "ssc-cgl-general-awareness-current-affairs-schemes", text: "The Ujjwala Yojana provides poor households with:", optionA: "LPG (cooking gas) connections", optionB: "Free smartphones", optionC: "Solar panels", optionD: "Tractors", correctOption: "A", explanation: "The Pradhan Mantri Ujjwala Yojana provides free LPG connections to poor women.", orderIndex: 7 },
  { id: "ssc-cgl-general-awareness-current-affairs-schemes-q09", topicId: "ssc-cgl-general-awareness-current-affairs-schemes", text: "MGNREGA guarantees how many days of employment per rural household per year?", optionA: "100 days", optionB: "50 days", optionC: "200 days", optionD: "365 days", correctOption: "A", explanation: "MGNREGA guarantees 100 days of wage employment to rural households.", orderIndex: 8 },
  { id: "ssc-cgl-general-awareness-current-affairs-schemes-q10", topicId: "ssc-cgl-general-awareness-current-affairs-schemes", text: "The 'Skill India' mission is intended to:", optionA: "Train and skill the youth", optionB: "Build dams", optionC: "Provide health insurance", optionD: "Clean rivers", correctOption: "A", explanation: "Skill India aims to provide vocational skills and training to the youth.", orderIndex: 9 },
  { id: "ssc-cgl-general-awareness-current-affairs-schemes-q11", topicId: "ssc-cgl-general-awareness-current-affairs-schemes", text: "NITI Aayog replaced which former body in 2015?", optionA: "The Planning Commission", optionB: "The Finance Commission", optionC: "The Election Commission", optionD: "The UPSC", correctOption: "A", explanation: "NITI Aayog replaced the Planning Commission as the government's policy think tank.", orderIndex: 10 },
  { id: "ssc-cgl-general-awareness-current-affairs-schemes-q12", topicId: "ssc-cgl-general-awareness-current-affairs-schemes", text: "The 'Fit India Movement' promotes:", optionA: "Physical fitness and healthy living", optionB: "Digital literacy", optionC: "Water conservation", optionD: "Road safety", correctOption: "A", explanation: "The Fit India Movement encourages people to stay physically active and healthy.", orderIndex: 11 }
];
