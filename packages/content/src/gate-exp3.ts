// GATE (CS) depth expansion (pass 3) — General Aptitude. Rounds out the GA
// section with verbal reading comprehension, mensuration & geometry, and
// analytical/spatial aptitude. Each new topic has a study note and a full
// 12-question drill.
import type { AuthoredMaterial } from "./builder";
import type { Question, Topic } from "@jyotir/core";

export const gate3Topics: Topic[] = [
  // General Aptitude (existing max orderIndex = 4)
  { id: "gate-general-aptitude-reading-comprehension", subjectId: "gate-general-aptitude", name: "Reading Comprehension", slug: "reading-comprehension", orderIndex: 5 },
  { id: "gate-general-aptitude-mensuration-geometry", subjectId: "gate-general-aptitude", name: "Mensuration & Geometry", slug: "mensuration-geometry", orderIndex: 6 },
  { id: "gate-general-aptitude-spatial-aptitude", subjectId: "gate-general-aptitude", name: "Analytical & Spatial Aptitude", slug: "spatial-aptitude", orderIndex: 7 }
];

export const gate3Materials: AuthoredMaterial[] = [
  { id: "gate-general-aptitude-reading-comprehension-m01", topicId: "gate-general-aptitude-reading-comprehension", title: "Reading Comprehension", content: `**Reading comprehension** tests whether you can understand a passage and answer questions **from the text itself**, not from outside knowledge.

## What questions ask
- **Main idea** — the central point the author is making.
- **Inference** — a conclusion the passage supports but does not state directly.
- **Vocabulary in context** — the meaning of a word as used in the passage.
- **Tone / attitude** — the author's stance (e.g., critical, neutral, enthusiastic).
- **Supporting detail** — a specific fact that backs up the main idea.

## Strategy
1. Skim for the **main idea** first, then read closely.
2. Answer strictly from **what is written** — avoid bringing in your own assumptions.
3. For 'inference' questions, choose the option that **must** follow from the text.
4. Watch **transition words** (however, therefore, although) — they signal contrast, cause, or concession.`, estimatedReadTime: 1, orderIndex: 0 },
  { id: "gate-general-aptitude-mensuration-geometry-m01", topicId: "gate-general-aptitude-mensuration-geometry", title: "Mensuration & Geometry", content: `**Mensuration** computes lengths, areas and volumes of shapes.

## 2D shapes
| Shape | Area | Perimeter |
| --- | --- | --- |
| **Rectangle** | l × b | 2(l + b) |
| **Square** | a² | 4a |
| **Triangle** | ½ × base × height | sum of sides |
| **Circle** | πr² | 2πr (circumference) |

## 3D solids
| Solid | Volume | Surface area |
| --- | --- | --- |
| **Cube** | a³ | 6a² |
| **Cuboid** | l × b × h | 2(lb + bh + hl) |
| **Cylinder** | πr²h | 2πr(r + h) |
| **Sphere** | (4/3)πr³ | 4πr² |

## Geometry facts
- Interior angles of a **triangle** sum to **180°**; of a **quadrilateral**, **360°**.
- The angle in a **semicircle** is **90°**. Use **π ≈ 22/7** unless told otherwise.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "gate-general-aptitude-spatial-aptitude-m01", topicId: "gate-general-aptitude-spatial-aptitude", title: "Analytical & Spatial Aptitude", content: `**Analytical aptitude** tests logical deduction; **spatial aptitude** tests reasoning about shapes and space.

## Analytical (deductive) reasoning
- **Transitivity**: if A > B and B > C, then A > C.
- **Syllogism**: All A are B, all B are C ⇒ all A are C.
- **Modus ponens**: if P then Q; P is true ⇒ Q is true.
- A universal negative converts: 'No A is B' ⇒ 'No B is A'.

## Spatial reasoning
- A **cube** has **6 faces, 12 edges, 8 vertices**; a **cross-shaped net** of six squares folds into a cube.
- A **plane mirror** produces **left-right (lateral) inversion**; a **water reflection** inverts **top-to-bottom**.
- **Rotations**: a 90° turn is a quarter turn; a 180° turn is a half turn.
- **Cube cutting**: an n×n×n painted cube has 8 corner pieces (3 painted faces), 12(n−2) edge pieces (2 faces), 6(n−2)² face pieces (1 face), and (n−2)³ hidden pieces (0 faces).`, estimatedReadTime: 2, orderIndex: 0 }
];

export const gate3Questions: Question[] = [
  // ── Reading Comprehension ──
  { id: "gate-general-aptitude-reading-comprehension-q01", topicId: "gate-general-aptitude-reading-comprehension", text: "Passage: 'Renewable sources such as solar and wind reduce carbon emissions.' According to the passage, solar and wind reduce:", optionA: "Carbon emissions", optionB: "Rainfall", optionC: "Population", optionD: "Wind speed", correctOption: "A", explanation: "The passage states these sources reduce carbon emissions.", orderIndex: 0 },
  { id: "gate-general-aptitude-reading-comprehension-q02", topicId: "gate-general-aptitude-reading-comprehension", text: "The 'main idea' of a passage is:", optionA: "The central point the author conveys", optionB: "The last sentence only", optionC: "The longest word", optionD: "A minor detail", correctOption: "A", explanation: "The main idea is the overall point the author is making.", orderIndex: 1 },
  { id: "gate-general-aptitude-reading-comprehension-q03", topicId: "gate-general-aptitude-reading-comprehension", text: "To 'infer' from a passage means to:", optionA: "Draw a conclusion supported by the text", optionB: "Copy a sentence", optionC: "Ignore the passage", optionD: "Count the words", correctOption: "A", explanation: "An inference is a conclusion the text supports without stating it outright.", orderIndex: 2 },
  { id: "gate-general-aptitude-reading-comprehension-q04", topicId: "gate-general-aptitude-reading-comprehension", text: "In 'The scientist's meticulous work paid off,' the word 'meticulous' means:", optionA: "Careful and thorough", optionB: "Careless", optionC: "Quick", optionD: "Lazy", correctOption: "A", explanation: "'Meticulous' means showing great attention to detail — careful and thorough.", orderIndex: 3 },
  { id: "gate-general-aptitude-reading-comprehension-q05", topicId: "gate-general-aptitude-reading-comprehension", text: "Passage: 'Despite the heavy rain, the match continued.' This implies that:", optionA: "The rain did not stop the match", optionB: "The match was cancelled", optionC: "It did not rain", optionD: "The match never started", correctOption: "A", explanation: "'Despite the rain, the match continued' means the rain did not prevent play.", orderIndex: 4 },
  { id: "gate-general-aptitude-reading-comprehension-q06", topicId: "gate-general-aptitude-reading-comprehension", text: "The 'tone' of a passage refers to the author's:", optionA: "Attitude toward the subject", optionB: "Handwriting", optionC: "Vocabulary size", optionD: "Word count", correctOption: "A", explanation: "Tone is the author's attitude or stance conveyed through the writing.", orderIndex: 5 },
  { id: "gate-general-aptitude-reading-comprehension-q07", topicId: "gate-general-aptitude-reading-comprehension", text: "A synonym for 'enormous' is:", optionA: "Huge", optionB: "Tiny", optionC: "Narrow", optionD: "Light", correctOption: "A", explanation: "'Enormous' means very large — huge.", orderIndex: 6 },
  { id: "gate-general-aptitude-reading-comprehension-q08", topicId: "gate-general-aptitude-reading-comprehension", text: "In a passage, the word 'therefore' usually signals:", optionA: "A conclusion or result", optionB: "A contradiction", optionC: "An example", optionD: "A question", correctOption: "A", explanation: "'Therefore' introduces a conclusion drawn from the preceding statements.", orderIndex: 7 },
  { id: "gate-general-aptitude-reading-comprehension-q09", topicId: "gate-general-aptitude-reading-comprehension", text: "In 'She was elated at the good news,' 'elated' means:", optionA: "Very happy", optionB: "Confused", optionC: "Angry", optionD: "Bored", correctOption: "A", explanation: "'Elated' means extremely happy or joyful.", orderIndex: 8 },
  { id: "gate-general-aptitude-reading-comprehension-q10", topicId: "gate-general-aptitude-reading-comprehension", text: "The word 'however' in a sentence typically indicates:", optionA: "A contrast", optionB: "A conclusion", optionC: "Agreement", optionD: "An example", correctOption: "A", explanation: "'However' signals a contrast with what was said before.", orderIndex: 9 },
  { id: "gate-general-aptitude-reading-comprehension-q11", topicId: "gate-general-aptitude-reading-comprehension", text: "Supporting details in a passage serve to:", optionA: "Back up the main idea", optionB: "Change the topic", optionC: "End the passage", optionD: "Confuse the reader", correctOption: "A", explanation: "Supporting details provide evidence and elaboration for the main idea.", orderIndex: 10 },
  { id: "gate-general-aptitude-reading-comprehension-q12", topicId: "gate-general-aptitude-reading-comprehension", text: "The best answer to a comprehension question is one that is:", optionA: "Supported by the passage", optionB: "Based on outside opinion", optionC: "The longest option", optionD: "Unrelated to the text", correctOption: "A", explanation: "Answers must be grounded in what the passage actually says.", orderIndex: 11 },

  // ── Mensuration & Geometry ──
  { id: "gate-general-aptitude-mensuration-geometry-q01", topicId: "gate-general-aptitude-mensuration-geometry", text: "The area of a rectangle 8 cm by 5 cm is:", optionA: "40 cm²", optionB: "13 cm²", optionC: "26 cm²", optionD: "45 cm²", correctOption: "A", explanation: "Area = length × breadth = 8 × 5 = 40 cm².", orderIndex: 0 },
  { id: "gate-general-aptitude-mensuration-geometry-q02", topicId: "gate-general-aptitude-mensuration-geometry", text: "The perimeter of a square of side 6 cm is:", optionA: "24 cm", optionB: "36 cm", optionC: "12 cm", optionD: "30 cm", correctOption: "A", explanation: "Perimeter = 4 × side = 4 × 6 = 24 cm.", orderIndex: 1 },
  { id: "gate-general-aptitude-mensuration-geometry-q03", topicId: "gate-general-aptitude-mensuration-geometry", text: "The area of a circle of radius 7 cm (π = 22/7) is:", optionA: "154 cm²", optionB: "44 cm²", optionC: "49 cm²", optionD: "22 cm²", correctOption: "A", explanation: "Area = πr² = 22/7 × 49 = 154 cm².", orderIndex: 2 },
  { id: "gate-general-aptitude-mensuration-geometry-q04", topicId: "gate-general-aptitude-mensuration-geometry", text: "The volume of a cube of side 3 cm is:", optionA: "27 cm³", optionB: "9 cm³", optionC: "18 cm³", optionD: "12 cm³", correctOption: "A", explanation: "Volume = side³ = 3³ = 27 cm³.", orderIndex: 3 },
  { id: "gate-general-aptitude-mensuration-geometry-q05", topicId: "gate-general-aptitude-mensuration-geometry", text: "The area of a triangle with base 10 cm and height 6 cm is:", optionA: "30 cm²", optionB: "60 cm²", optionC: "16 cm²", optionD: "45 cm²", correctOption: "A", explanation: "Area = ½ × base × height = ½ × 10 × 6 = 30 cm².", orderIndex: 4 },
  { id: "gate-general-aptitude-mensuration-geometry-q06", topicId: "gate-general-aptitude-mensuration-geometry", text: "The circumference of a circle of radius 7 cm (π = 22/7) is:", optionA: "44 cm", optionB: "154 cm", optionC: "22 cm", optionD: "88 cm", correctOption: "A", explanation: "Circumference = 2πr = 2 × 22/7 × 7 = 44 cm.", orderIndex: 5 },
  { id: "gate-general-aptitude-mensuration-geometry-q07", topicId: "gate-general-aptitude-mensuration-geometry", text: "The volume of a cuboid 2 × 3 × 4 cm is:", optionA: "24 cm³", optionB: "9 cm³", optionC: "12 cm³", optionD: "26 cm³", correctOption: "A", explanation: "Volume = l × b × h = 2 × 3 × 4 = 24 cm³.", orderIndex: 6 },
  { id: "gate-general-aptitude-mensuration-geometry-q08", topicId: "gate-general-aptitude-mensuration-geometry", text: "The total surface area of a cube of side 2 cm is:", optionA: "24 cm²", optionB: "8 cm²", optionC: "12 cm²", optionD: "16 cm²", correctOption: "A", explanation: "Surface area = 6 × side² = 6 × 4 = 24 cm².", orderIndex: 7 },
  { id: "gate-general-aptitude-mensuration-geometry-q09", topicId: "gate-general-aptitude-mensuration-geometry", text: "The sum of the interior angles of a triangle is:", optionA: "180°", optionB: "360°", optionC: "90°", optionD: "270°", correctOption: "A", explanation: "A triangle's interior angles always sum to 180°.", orderIndex: 8 },
  { id: "gate-general-aptitude-mensuration-geometry-q10", topicId: "gate-general-aptitude-mensuration-geometry", text: "The volume of a cylinder of radius 7 cm and height 10 cm (π = 22/7) is:", optionA: "1540 cm³", optionB: "440 cm³", optionC: "154 cm³", optionD: "770 cm³", correctOption: "A", explanation: "Volume = πr²h = 22/7 × 49 × 10 = 1540 cm³.", orderIndex: 9 },
  { id: "gate-general-aptitude-mensuration-geometry-q11", topicId: "gate-general-aptitude-mensuration-geometry", text: "The area of a square of side 9 cm is:", optionA: "81 cm²", optionB: "36 cm²", optionC: "18 cm²", optionD: "72 cm²", correctOption: "A", explanation: "Area = side² = 9² = 81 cm².", orderIndex: 10 },
  { id: "gate-general-aptitude-mensuration-geometry-q12", topicId: "gate-general-aptitude-mensuration-geometry", text: "The sum of the interior angles of a quadrilateral is:", optionA: "360°", optionB: "180°", optionC: "270°", optionD: "540°", correctOption: "A", explanation: "A quadrilateral's interior angles sum to 360°.", orderIndex: 11 },

  // ── Analytical & Spatial Aptitude ──
  { id: "gate-general-aptitude-spatial-aptitude-q01", topicId: "gate-general-aptitude-spatial-aptitude", text: "All A are B, and all B are C. Therefore:", optionA: "All A are C", optionB: "All C are A", optionC: "No A is C", optionD: "Some A are not C", correctOption: "A", explanation: "Chaining the two universals gives: all A are C.", orderIndex: 0 },
  { id: "gate-general-aptitude-spatial-aptitude-q02", topicId: "gate-general-aptitude-spatial-aptitude", text: "If A is taller than B and B is taller than C, the tallest is:", optionA: "A", optionB: "B", optionC: "C", optionD: "Cannot say", correctOption: "A", explanation: "By transitivity A > B > C, so A is the tallest.", orderIndex: 1 },
  { id: "gate-general-aptitude-spatial-aptitude-q03", topicId: "gate-general-aptitude-spatial-aptitude", text: "A cube has how many vertices (corners)?", optionA: "8", optionB: "6", optionC: "12", optionD: "4", correctOption: "A", explanation: "A cube has 8 vertices, 12 edges and 6 faces.", orderIndex: 2 },
  { id: "gate-general-aptitude-spatial-aptitude-q04", topicId: "gate-general-aptitude-spatial-aptitude", text: "The mirror image of the lowercase letter 'b' most resembles:", optionA: "d", optionB: "p", optionC: "q", optionD: "b", correctOption: "A", explanation: "A plane mirror laterally inverts, turning 'b' into a 'd'-like shape.", orderIndex: 3 },
  { id: "gate-general-aptitude-spatial-aptitude-q05", topicId: "gate-general-aptitude-spatial-aptitude", text: "Facing east and turning 180°, you now face:", optionA: "West", optionB: "North", optionC: "South", optionD: "East", correctOption: "A", explanation: "A half turn (180°) from east points west.", orderIndex: 4 },
  { id: "gate-general-aptitude-spatial-aptitude-q06", topicId: "gate-general-aptitude-spatial-aptitude", text: "A cross-shaped net of six squares folds into a:", optionA: "Cube", optionB: "Pyramid", optionC: "Cylinder", optionD: "Sphere", correctOption: "A", explanation: "Six squares in a cross net fold up to form a cube.", orderIndex: 5 },
  { id: "gate-general-aptitude-spatial-aptitude-q07", topicId: "gate-general-aptitude-spatial-aptitude", text: "'If it rains, the ground gets wet. It rained.' Therefore:", optionA: "The ground got wet", optionB: "It did not rain", optionC: "The ground stayed dry", optionD: "Nothing follows", correctOption: "A", explanation: "By modus ponens, the consequent follows: the ground got wet.", orderIndex: 6 },
  { id: "gate-general-aptitude-spatial-aptitude-q08", topicId: "gate-general-aptitude-spatial-aptitude", text: "A 2 × 2 × 2 cube is made of how many unit cubes?", optionA: "8", optionB: "4", optionC: "6", optionD: "12", correctOption: "A", explanation: "2 × 2 × 2 = 8 unit cubes.", orderIndex: 7 },
  { id: "gate-general-aptitude-spatial-aptitude-q09", topicId: "gate-general-aptitude-spatial-aptitude", text: "'No X is Y' validly converts to:", optionA: "No Y is X", optionB: "Some Y are X", optionC: "All Y are X", optionD: "All X are Y", correctOption: "A", explanation: "A universal negative converts symmetrically: 'No X is Y' ⇒ 'No Y is X'.", orderIndex: 8 },
  { id: "gate-general-aptitude-spatial-aptitude-q10", topicId: "gate-general-aptitude-spatial-aptitude", text: "A water (surface) reflection inverts an image:", optionA: "Top to bottom", optionB: "Left to right", optionC: "Not at all", optionD: "Diagonally", correctOption: "A", explanation: "A water reflection flips the image vertically (top-to-bottom).", orderIndex: 9 },
  { id: "gate-general-aptitude-spatial-aptitude-q11", topicId: "gate-general-aptitude-spatial-aptitude", text: "If P is the son of Q and Q is the son of R, then R is P's:", optionA: "Grandfather", optionB: "Father", optionC: "Brother", optionD: "Uncle", correctOption: "A", explanation: "R is the father of P's father, i.e., P's grandfather.", orderIndex: 10 },
  { id: "gate-general-aptitude-spatial-aptitude-q12", topicId: "gate-general-aptitude-spatial-aptitude", text: "Rotating a square by 90° about its centre produces:", optionA: "A square in the same position", optionB: "A triangle", optionC: "A circle", optionD: "A rectangle", correctOption: "A", explanation: "A square has 4-fold rotational symmetry, so a 90° rotation looks identical.", orderIndex: 11 }
];
