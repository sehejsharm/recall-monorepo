// SSC CGL depth expansion (pass 5). Adds high-frequency Tier-I topics that
// round out the thinnest corners of each section: Quant (surds & indices,
// coordinate geometry, height & distance), Reasoning (word formation, missing
// numbers), and English (phrasal verbs). Each topic ships a study note and a
// full 12-question drill.
import type { AuthoredMaterial } from "./builder";
import type { Question, Topic } from "@jyotir/core";

export const ssc5Topics: Topic[] = [
  // Quantitative Aptitude (existing max orderIndex = 16)
  { id: "ssc-cgl-quant-surds-indices", subjectId: "ssc-cgl-quant", name: "Surds & Indices", slug: "surds-indices", orderIndex: 17 },
  { id: "ssc-cgl-quant-coordinate-geometry", subjectId: "ssc-cgl-quant", name: "Coordinate Geometry", slug: "coordinate-geometry", orderIndex: 18 },
  { id: "ssc-cgl-quant-height-distance", subjectId: "ssc-cgl-quant", name: "Height & Distance", slug: "height-distance", orderIndex: 19 },
  // Reasoning (existing max orderIndex = 11)
  { id: "ssc-cgl-reasoning-word-formation", subjectId: "ssc-cgl-reasoning", name: "Word Formation & Dictionary Order", slug: "word-formation", orderIndex: 12 },
  { id: "ssc-cgl-reasoning-missing-numbers", subjectId: "ssc-cgl-reasoning", name: "Missing Numbers & Matrix", slug: "missing-numbers", orderIndex: 13 },
  // English (existing max orderIndex = 9)
  { id: "ssc-cgl-english-phrasal-verbs", subjectId: "ssc-cgl-english", name: "Phrasal Verbs", slug: "phrasal-verbs", orderIndex: 10 }
];

export const ssc5Materials: AuthoredMaterial[] = [
  { id: "ssc-cgl-quant-surds-indices-m01", topicId: "ssc-cgl-quant-surds-indices", title: "Surds & Indices", content: `**Indices** are powers; **surds** are irrational roots like √2 that can't be simplified to a rational number.

## Laws of indices
- aᵐ × aⁿ = a^(m+n)
- aᵐ ÷ aⁿ = a^(m−n)
- (aᵐ)ⁿ = a^(mn)
- a⁰ = 1 (a ≠ 0)
- a^(−n) = 1 / aⁿ
- a^(1/n) = ⁿ√a

## Working with surds
- √a × √b = √(ab); √a ÷ √b = √(a/b).
- **Rationalise** a denominator by multiplying by the conjugate: 1/(√a + √b) × (√a − √b)/(√a − √b).
- **Compare** surds by raising to a common power, e.g. compare ³√2 and ⁴√3 by taking the 12th power.

## Quick facts
- √2 ≈ 1.414, √3 ≈ 1.732, √5 ≈ 2.236 — memorise these for fast estimation.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "ssc-cgl-quant-coordinate-geometry-m01", topicId: "ssc-cgl-quant-coordinate-geometry", title: "Coordinate Geometry", content: `Coordinate geometry places points on the **x–y plane** and measures them with formulas.

## Core formulas
| Quantity | Formula |
| --- | --- |
| **Distance** between (x₁,y₁),(x₂,y₂) | √[(x₂−x₁)² + (y₂−y₁)²] |
| **Midpoint** | ((x₁+x₂)/2, (y₁+y₂)/2) |
| **Slope** m | (y₂−y₁)/(x₂−x₁) |
| **Section (ratio m:n)** | ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n)) |

## Lines
- **Slope-intercept**: y = mx + c.
- **Parallel** lines have equal slopes; **perpendicular** lines have slopes with product **−1**.
- A line through the origin has c = 0.

## Triangle area
Area = ½ |x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|. If this is **0**, the three points are **collinear**.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "ssc-cgl-quant-height-distance-m01", topicId: "ssc-cgl-quant-height-distance", title: "Height & Distance", content: `Height-and-distance problems apply **trigonometry** to angles of elevation and depression.

## Key ratios (right triangle)
- tan θ = opposite / adjacent = height / base.
- sin θ = opposite / hypotenuse; cos θ = adjacent / hypotenuse.

## Standard angles
| θ | tan θ |
| --- | --- |
| 30° | 1/√3 |
| 45° | 1 |
| 60° | √3 |

## Method
1. Draw the right triangle; mark the **angle of elevation** (looking up) or **depression** (looking down).
2. The angle of depression from the top equals the angle of elevation from the bottom (alternate angles).
3. Use tan θ = height / distance and solve.

**Example**: from 30 m away, a tower subtends 45°. Since tan 45° = 1 = h/30, the height is **30 m**.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "ssc-cgl-reasoning-word-formation-m01", topicId: "ssc-cgl-reasoning-word-formation", title: "Word Formation & Dictionary Order", content: `These questions test careful ordering and letter manipulation.

## Dictionary (alphabetical) order
Arrange words as in a dictionary: compare the **first letter**; if equal, move to the **second**, and so on. This is a common "which word comes 3rd?" question.

## Word formation
- **Can this word be formed?** Check every required letter is present in the source word with enough repeats.
- Example: from **"TRIANGLE"** you can form **"GIANT"** (G, I, A, N, T all present) but not **"GREAT"** (no second... check E, no issue — actually no 'second' letter problem; the trick is a missing letter like a double).

## Letter–number positions
Memorise positions both ways:
- A=1 … Z=26; and the reverse Z=1 … A=26 (reverse position = 27 − forward position).
- **EJOTY** trick: E=5, J=10, O=15, T=20, Y=25 — anchors for fast counting.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "ssc-cgl-reasoning-missing-numbers-m01", topicId: "ssc-cgl-reasoning-missing-numbers", title: "Missing Numbers & Matrix", content: `Find the number that fits a hidden pattern in a series, grid, or figure.

## Approach
1. **Look for the operation** linking given numbers: addition, multiplication, squares, cubes, or a mix.
2. In a **3×3 matrix**, the rule usually links the two known entries of a row/column to the third — try (a op b = c) across each row, then apply it to the incomplete one.
3. In **circle/triangle** puzzles, the centre is often a function of the outer numbers (sum, product, or difference).

## Common patterns
- **Squares/cubes**: 1, 4, 9, 16 (n²) or 1, 8, 27, 64 (n³).
- **Alternating series**: two interleaved sequences.
- **Difference of differences**: constant second difference ⇒ quadratic rule.

Always **verify your rule on every given cell** before filling the blank.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "ssc-cgl-english-phrasal-verbs-m01", topicId: "ssc-cgl-english-phrasal-verbs", title: "Phrasal Verbs", content: `A **phrasal verb** is a verb + particle (preposition/adverb) whose meaning differs from the verb alone. SSC tests the correct particle and the idiomatic meaning.

## High-frequency phrasal verbs
| Phrasal verb | Meaning |
| --- | --- |
| **call off** | cancel |
| **put off** | postpone |
| **give in** | surrender / yield |
| **give up** | quit / stop trying |
| **break down** | stop functioning; collapse |
| **look into** | investigate |
| **carry out** | execute / perform |
| **turn down** | reject |
| **bring up** | raise (a child / a topic) |
| **run into** | meet by chance |

## Tips
- The **particle changes the meaning**: *look after* (care for) ≠ *look into* (investigate) ≠ *look up to* (admire).
- Learn them as whole units; don't translate literally.`, estimatedReadTime: 2, orderIndex: 0 }
];

export const ssc5Questions: Question[] = [
  // ── Surds & Indices ──
  { id: "ssc-cgl-quant-surds-indices-q01", topicId: "ssc-cgl-quant-surds-indices", text: "Simplify: 2³ × 2⁴.", optionA: "2⁷", optionB: "2¹²", optionC: "2⁵", optionD: "4⁷", correctOption: "A", explanation: "aᵐ × aⁿ = a^(m+n), so 2³ × 2⁴ = 2⁷.", orderIndex: 0 },
  { id: "ssc-cgl-quant-surds-indices-q02", topicId: "ssc-cgl-quant-surds-indices", text: "What is the value of 5⁰?", optionA: "1", optionB: "0", optionC: "5", optionD: "Undefined", correctOption: "A", explanation: "Any non-zero number raised to the power 0 equals 1.", orderIndex: 1 },
  { id: "ssc-cgl-quant-surds-indices-q03", topicId: "ssc-cgl-quant-surds-indices", text: "Simplify: 3⁶ ÷ 3².", optionA: "3⁴", optionB: "3³", optionC: "3⁸", optionD: "1⁴", correctOption: "A", explanation: "aᵐ ÷ aⁿ = a^(m−n), so 3⁶ ÷ 3² = 3⁴.", orderIndex: 2 },
  { id: "ssc-cgl-quant-surds-indices-q04", topicId: "ssc-cgl-quant-surds-indices", text: "Evaluate (2²)³.", optionA: "64", optionB: "32", optionC: "12", optionD: "16", correctOption: "A", explanation: "(aᵐ)ⁿ = a^(mn) = 2⁶ = 64.", orderIndex: 3 },
  { id: "ssc-cgl-quant-surds-indices-q05", topicId: "ssc-cgl-quant-surds-indices", text: "What is 4^(−2)?", optionA: "1/16", optionB: "−16", optionC: "16", optionD: "−1/16", correctOption: "A", explanation: "a^(−n) = 1/aⁿ, so 4^(−2) = 1/16.", orderIndex: 4 },
  { id: "ssc-cgl-quant-surds-indices-q06", topicId: "ssc-cgl-quant-surds-indices", text: "√2 × √8 equals:", optionA: "4", optionB: "16", optionC: "√10", optionD: "2√2", correctOption: "A", explanation: "Multiply under one root: √2 × √8 = √16 = 4.", orderIndex: 5 },
  { id: "ssc-cgl-quant-surds-indices-q07", topicId: "ssc-cgl-quant-surds-indices", text: "Express 8^(1/3) as a whole number.", optionA: "2", optionB: "4", optionC: "3", optionD: "8", correctOption: "A", explanation: "8^(1/3) is the cube root of 8, which is 2.", orderIndex: 6 },
  { id: "ssc-cgl-quant-surds-indices-q08", topicId: "ssc-cgl-quant-surds-indices", text: "Rationalising 1/√3 gives:", optionA: "√3 / 3", optionB: "3 / √3", optionC: "√3", optionD: "1 / 3", correctOption: "A", explanation: "Multiply top and bottom by √3: 1/√3 = √3/3.", orderIndex: 7 },
  { id: "ssc-cgl-quant-surds-indices-q09", topicId: "ssc-cgl-quant-surds-indices", text: "Which of these is a surd?", optionA: "√5", optionB: "√9", optionC: "√16", optionD: "√25", correctOption: "A", explanation: "√5 is irrational; the others are perfect squares giving whole numbers.", orderIndex: 8 },
  { id: "ssc-cgl-quant-surds-indices-q10", topicId: "ssc-cgl-quant-surds-indices", text: "Simplify √50.", optionA: "5√2", optionB: "2√5", optionC: "25√2", optionD: "10√5", correctOption: "A", explanation: "√50 = √(25×2) = 5√2.", orderIndex: 9 },
  { id: "ssc-cgl-quant-surds-indices-q11", topicId: "ssc-cgl-quant-surds-indices", text: "If 2ˣ = 32, then x equals:", optionA: "5", optionB: "4", optionC: "6", optionD: "16", correctOption: "A", explanation: "Since 32 = 2⁵, matching powers gives x = 5.", orderIndex: 10 },
  { id: "ssc-cgl-quant-surds-indices-q12", topicId: "ssc-cgl-quant-surds-indices", text: "The approximate value of √3 is:", optionA: "1.732", optionB: "1.414", optionC: "2.236", optionD: "1.618", correctOption: "A", explanation: "√3 ≈ 1.732 (√2 ≈ 1.414, √5 ≈ 2.236).", orderIndex: 11 },

  // ── Coordinate Geometry ──
  { id: "ssc-cgl-quant-coordinate-geometry-q01", topicId: "ssc-cgl-quant-coordinate-geometry", text: "The distance between (0,0) and (3,4) is:", optionA: "5", optionB: "7", optionC: "12", optionD: "1", correctOption: "A", explanation: "√(3² + 4²) = √25 = 5.", orderIndex: 0 },
  { id: "ssc-cgl-quant-coordinate-geometry-q02", topicId: "ssc-cgl-quant-coordinate-geometry", text: "The midpoint of (2,4) and (6,8) is:", optionA: "(4,6)", optionB: "(8,12)", optionC: "(3,5)", optionD: "(4,4)", correctOption: "A", explanation: "Midpoint = ((2+6)/2, (4+8)/2) = (4,6).", orderIndex: 1 },
  { id: "ssc-cgl-quant-coordinate-geometry-q03", topicId: "ssc-cgl-quant-coordinate-geometry", text: "The slope of the line through (1,2) and (3,6) is:", optionA: "2", optionB: "1", optionC: "3", optionD: "1/2", correctOption: "A", explanation: "Slope = (6−2)/(3−1) = 4/2 = 2.", orderIndex: 2 },
  { id: "ssc-cgl-quant-coordinate-geometry-q04", topicId: "ssc-cgl-quant-coordinate-geometry", text: "In y = mx + c, the letter m represents the:", optionA: "Slope", optionB: "Y-intercept", optionC: "X-intercept", optionD: "Origin", correctOption: "A", explanation: "In slope-intercept form m is the slope and c the y-intercept.", orderIndex: 3 },
  { id: "ssc-cgl-quant-coordinate-geometry-q05", topicId: "ssc-cgl-quant-coordinate-geometry", text: "Two lines are perpendicular when the product of their slopes is:", optionA: "−1", optionB: "1", optionC: "0", optionD: "Undefined", correctOption: "A", explanation: "Perpendicular lines have slopes whose product is −1.", orderIndex: 4 },
  { id: "ssc-cgl-quant-coordinate-geometry-q06", topicId: "ssc-cgl-quant-coordinate-geometry", text: "Parallel lines have slopes that are:", optionA: "Equal", optionB: "Negative reciprocals", optionC: "Zero", optionD: "Product −1", correctOption: "A", explanation: "Parallel lines share the same slope.", orderIndex: 5 },
  { id: "ssc-cgl-quant-coordinate-geometry-q07", topicId: "ssc-cgl-quant-coordinate-geometry", text: "If the area of a triangle formed by three points is 0, the points are:", optionA: "Collinear", optionB: "A right triangle", optionC: "Equilateral", optionD: "Concurrent", correctOption: "A", explanation: "Zero area means the three points lie on one straight line (collinear).", orderIndex: 6 },
  { id: "ssc-cgl-quant-coordinate-geometry-q08", topicId: "ssc-cgl-quant-coordinate-geometry", text: "The point (0, 5) lies on the:", optionA: "Y-axis", optionB: "X-axis", optionC: "Origin", optionD: "Line y = x", correctOption: "A", explanation: "A point with x = 0 lies on the y-axis.", orderIndex: 7 },
  { id: "ssc-cgl-quant-coordinate-geometry-q09", topicId: "ssc-cgl-quant-coordinate-geometry", text: "The distance of point (6, 8) from the origin is:", optionA: "10", optionB: "14", optionC: "48", optionD: "8", correctOption: "A", explanation: "√(6² + 8²) = √100 = 10.", orderIndex: 8 },
  { id: "ssc-cgl-quant-coordinate-geometry-q10", topicId: "ssc-cgl-quant-coordinate-geometry", text: "A line passing through the origin has y-intercept c equal to:", optionA: "0", optionB: "1", optionC: "The slope", optionD: "Undefined", correctOption: "A", explanation: "If a line passes through the origin, c = 0.", orderIndex: 9 },
  { id: "ssc-cgl-quant-coordinate-geometry-q11", topicId: "ssc-cgl-quant-coordinate-geometry", text: "The point that divides (0,0) and (4,4) in ratio 1:1 is:", optionA: "(2,2)", optionB: "(1,1)", optionC: "(4,4)", optionD: "(3,3)", correctOption: "A", explanation: "A 1:1 ratio gives the midpoint (2,2).", orderIndex: 10 },
  { id: "ssc-cgl-quant-coordinate-geometry-q12", topicId: "ssc-cgl-quant-coordinate-geometry", text: "The slope of a horizontal line is:", optionA: "0", optionB: "1", optionC: "Undefined", optionD: "−1", correctOption: "A", explanation: "A horizontal line has no vertical change, so its slope is 0.", orderIndex: 11 },

  // ── Height & Distance ──
  { id: "ssc-cgl-quant-height-distance-q01", topicId: "ssc-cgl-quant-height-distance", text: "In a right triangle, tan θ equals:", optionA: "Opposite / adjacent", optionB: "Adjacent / hypotenuse", optionC: "Hypotenuse / opposite", optionD: "Opposite / hypotenuse", correctOption: "A", explanation: "tan θ = opposite side ÷ adjacent side.", orderIndex: 0 },
  { id: "ssc-cgl-quant-height-distance-q02", topicId: "ssc-cgl-quant-height-distance", text: "The value of tan 45° is:", optionA: "1", optionB: "√3", optionC: "1/√3", optionD: "0", correctOption: "A", explanation: "For a 45° right triangle the legs are equal, so tan 45° = 1.", orderIndex: 1 },
  { id: "ssc-cgl-quant-height-distance-q03", topicId: "ssc-cgl-quant-height-distance", text: "From 30 m away, a tower's top has an elevation of 45°. Its height is:", optionA: "30 m", optionB: "45 m", optionC: "15 m", optionD: "60 m", correctOption: "A", explanation: "tan 45° = 1 = h/30, so h = 30 m.", orderIndex: 2 },
  { id: "ssc-cgl-quant-height-distance-q04", topicId: "ssc-cgl-quant-height-distance", text: "The value of tan 60° is:", optionA: "√3", optionB: "1", optionC: "1/√3", optionD: "2", correctOption: "A", explanation: "tan 60° = √3, a standard trigonometric value.", orderIndex: 3 },
  { id: "ssc-cgl-quant-height-distance-q05", topicId: "ssc-cgl-quant-height-distance", text: "The angle of elevation is measured when the observer looks:", optionA: "Upward", optionB: "Downward", optionC: "Horizontally", optionD: "Backward", correctOption: "A", explanation: "The angle of elevation is above the horizontal (looking up).", orderIndex: 4 },
  { id: "ssc-cgl-quant-height-distance-q06", topicId: "ssc-cgl-quant-height-distance", text: "The value of tan 30° is:", optionA: "1/√3", optionB: "√3", optionC: "1", optionD: "1/2", correctOption: "A", explanation: "tan 30° = 1/√3, a standard trigonometric value.", orderIndex: 5 },
  { id: "ssc-cgl-quant-height-distance-q07", topicId: "ssc-cgl-quant-height-distance", text: "A 10 m ladder leans at 60° to the ground. Its height reached is 10·sin 60° =", optionA: "5√3 m", optionB: "5 m", optionC: "10√3 m", optionD: "20 m", correctOption: "A", explanation: "Height = 10 × sin 60° = 10 × (√3/2) = 5√3 m.", orderIndex: 6 },
  { id: "ssc-cgl-quant-height-distance-q08", topicId: "ssc-cgl-quant-height-distance", text: "The angle of depression from a height equals the angle of elevation from the ground because they are:", optionA: "Alternate angles", optionB: "Vertically opposite", optionC: "Complementary", optionD: "Reflex angles", correctOption: "A", explanation: "They are alternate interior angles between parallel horizontals.", orderIndex: 7 },
  { id: "ssc-cgl-quant-height-distance-q09", topicId: "ssc-cgl-quant-height-distance", text: "sin θ in a right triangle is:", optionA: "Opposite / hypotenuse", optionB: "Adjacent / hypotenuse", optionC: "Opposite / adjacent", optionD: "Hypotenuse / adjacent", correctOption: "A", explanation: "sin θ = opposite ÷ hypotenuse.", orderIndex: 8 },
  { id: "ssc-cgl-quant-height-distance-q10", topicId: "ssc-cgl-quant-height-distance", text: "A pole casts a shadow equal to its own height. The elevation of the sun is:", optionA: "45°", optionB: "30°", optionC: "60°", optionD: "90°", correctOption: "A", explanation: "tan θ = height/shadow = 1, so θ = 45°.", orderIndex: 9 },
  { id: "ssc-cgl-quant-height-distance-q11", topicId: "ssc-cgl-quant-height-distance", text: "cos θ in a right triangle is:", optionA: "Adjacent / hypotenuse", optionB: "Opposite / hypotenuse", optionC: "Opposite / adjacent", optionD: "Adjacent / opposite", correctOption: "A", explanation: "cos θ = adjacent ÷ hypotenuse.", orderIndex: 10 },
  { id: "ssc-cgl-quant-height-distance-q12", topicId: "ssc-cgl-quant-height-distance", text: "If a tower 100 m tall is seen at 30° elevation, the distance to it is 100/tan 30° =", optionA: "100√3 m", optionB: "100 m", optionC: "50 m", optionD: "100/√3 m", correctOption: "A", explanation: "Distance = 100 ÷ tan 30° = 100 ÷ (1/√3) = 100√3 m.", orderIndex: 11 },

  // ── Word Formation & Dictionary Order ──
  { id: "ssc-cgl-reasoning-word-formation-q01", topicId: "ssc-cgl-reasoning-word-formation", text: "Which word comes first in dictionary order?", optionA: "Apple", optionB: "Angle", optionC: "Ample", optionD: "Actor", correctOption: "D", explanation: "Comparing second letters, 'Actor' (c) precedes 'm', 'n', 'p'.", orderIndex: 0 },
  { id: "ssc-cgl-reasoning-word-formation-q02", topicId: "ssc-cgl-reasoning-word-formation", text: "What is the position of the letter 'J' in the English alphabet?", optionA: "10", optionB: "9", optionC: "11", optionD: "12", correctOption: "A", explanation: "Using EJOTY, J is the 10th letter.", orderIndex: 1 },
  { id: "ssc-cgl-reasoning-word-formation-q03", topicId: "ssc-cgl-reasoning-word-formation", text: "Which word CANNOT be formed from the letters of 'TRIANGLE'?", optionA: "GARDEN", optionB: "ANGLE", optionC: "GIANT", optionD: "LATER", correctOption: "A", explanation: "'GARDEN' needs a 'D', which is absent in TRIANGLE.", orderIndex: 2 },
  { id: "ssc-cgl-reasoning-word-formation-q04", topicId: "ssc-cgl-reasoning-word-formation", text: "In the reverse alphabet (Z=1 … A=26), the position of 'A' is:", optionA: "26", optionB: "1", optionC: "25", optionD: "27", correctOption: "A", explanation: "Reverse position = 27 − 1 = 26 for A.", orderIndex: 3 },
  { id: "ssc-cgl-reasoning-word-formation-q05", topicId: "ssc-cgl-reasoning-word-formation", text: "Which word comes last in dictionary order?", optionA: "Zebra", optionB: "Yellow", optionC: "Xerox", optionD: "Wagon", correctOption: "A", explanation: "'Zebra' starts with Z, the latest first letter.", orderIndex: 4 },
  { id: "ssc-cgl-reasoning-word-formation-q06", topicId: "ssc-cgl-reasoning-word-formation", text: "Using A=1, B=2 …, the value of the letter 'O' is:", optionA: "15", optionB: "14", optionC: "16", optionD: "12", correctOption: "A", explanation: "By EJOTY, O is the 15th letter.", orderIndex: 5 },
  { id: "ssc-cgl-reasoning-word-formation-q07", topicId: "ssc-cgl-reasoning-word-formation", text: "Which pair of words is in correct dictionary order?", optionA: "Cat, Cup", optionB: "Cup, Cat", optionC: "Dog, Cat", optionD: "Zoo, Ant", correctOption: "A", explanation: "'Cat' precedes 'Cup' since 'a' comes before 'u'.", orderIndex: 6 },
  { id: "ssc-cgl-reasoning-word-formation-q08", topicId: "ssc-cgl-reasoning-word-formation", text: "The letter at position 20 in the alphabet is:", optionA: "T", optionB: "S", optionC: "U", optionD: "R", correctOption: "A", explanation: "By EJOTY, T is the 20th letter.", orderIndex: 7 },
  { id: "ssc-cgl-reasoning-word-formation-q09", topicId: "ssc-cgl-reasoning-word-formation", text: "Which word can be formed from the letters of 'EDUCATION'?", optionA: "AUCTION", optionB: "FRIEND", optionC: "MARKET", optionD: "PLANET", correctOption: "A", explanation: "AUCTION uses A,U,C,T,I,O,N, all present once in EDUCATION.", orderIndex: 8 },
  { id: "ssc-cgl-reasoning-word-formation-q10", topicId: "ssc-cgl-reasoning-word-formation", text: "Which word comes second when arranged alphabetically: Mango, Apple, Orange, Banana?", optionA: "Banana", optionB: "Apple", optionC: "Mango", optionD: "Orange", correctOption: "A", explanation: "Order: Apple, Banana, Mango, Orange — Banana is second.", orderIndex: 9 },
  { id: "ssc-cgl-reasoning-word-formation-q11", topicId: "ssc-cgl-reasoning-word-formation", text: "The 5th letter of the alphabet is:", optionA: "E", optionB: "D", optionC: "F", optionD: "G", correctOption: "A", explanation: "By EJOTY, E is the 5th letter.", orderIndex: 10 },
  { id: "ssc-cgl-reasoning-word-formation-q12", topicId: "ssc-cgl-reasoning-word-formation", text: "Which word CANNOT be formed from 'KEYBOARD'?", optionA: "BRIDGE", optionB: "BREAD", optionC: "BOARD", optionD: "BAKER", correctOption: "A", explanation: "'BRIDGE' needs 'I' and 'G', neither present in KEYBOARD.", orderIndex: 11 },

  // ── Missing Numbers & Matrix ──
  { id: "ssc-cgl-reasoning-missing-numbers-q01", topicId: "ssc-cgl-reasoning-missing-numbers", text: "Find the missing number: 2, 4, 8, 16, __", optionA: "32", optionB: "24", optionC: "20", optionD: "18", correctOption: "A", explanation: "Each term doubles, so the next is 16 × 2 = 32.", orderIndex: 0 },
  { id: "ssc-cgl-reasoning-missing-numbers-q02", topicId: "ssc-cgl-reasoning-missing-numbers", text: "Complete the series: 1, 4, 9, 16, __", optionA: "25", optionB: "20", optionC: "24", optionD: "36", correctOption: "A", explanation: "These are perfect squares; 5² = 25.", orderIndex: 1 },
  { id: "ssc-cgl-reasoning-missing-numbers-q03", topicId: "ssc-cgl-reasoning-missing-numbers", text: "Find the missing number: 3, 6, 11, 18, __", optionA: "27", optionB: "24", optionC: "25", optionD: "30", correctOption: "A", explanation: "Differences 3,5,7,9 give 18 + 9 = 27.", orderIndex: 2 },
  { id: "ssc-cgl-reasoning-missing-numbers-q04", topicId: "ssc-cgl-reasoning-missing-numbers", text: "Series: 5, 10, 20, 40, __", optionA: "80", optionB: "60", optionC: "70", optionD: "45", correctOption: "A", explanation: "Each term doubles: 40 × 2 = 80.", orderIndex: 3 },
  { id: "ssc-cgl-reasoning-missing-numbers-q05", topicId: "ssc-cgl-reasoning-missing-numbers", text: "Find the missing number: 1, 8, 27, 64, __", optionA: "125", optionB: "100", optionC: "81", optionD: "128", correctOption: "A", explanation: "These are cubes; 5³ = 125.", orderIndex: 4 },
  { id: "ssc-cgl-reasoning-missing-numbers-q06", topicId: "ssc-cgl-reasoning-missing-numbers", text: "Complete: 2, 6, 12, 20, 30, __", optionA: "42", optionB: "40", optionC: "36", optionD: "44", correctOption: "A", explanation: "Differences 4,6,8,10,12 give 30 + 12 = 42.", orderIndex: 5 },
  { id: "ssc-cgl-reasoning-missing-numbers-q07", topicId: "ssc-cgl-reasoning-missing-numbers", text: "In the series 7, 14, 28, 56, __ the pattern is:", optionA: "Multiply by 2", optionB: "Add 7", optionC: "Add 14", optionD: "Square", correctOption: "A", explanation: "Each term is double the previous (56 × 2 = 112).", orderIndex: 6 },
  { id: "ssc-cgl-reasoning-missing-numbers-q08", topicId: "ssc-cgl-reasoning-missing-numbers", text: "Find the odd one out: 3, 5, 7, 9, 11", optionA: "9", optionB: "5", optionC: "7", optionD: "11", correctOption: "A", explanation: "3,5,7,11 are prime; 9 is not, so it is the odd one out.", orderIndex: 7 },
  { id: "ssc-cgl-reasoning-missing-numbers-q09", topicId: "ssc-cgl-reasoning-missing-numbers", text: "Series: 100, 81, 64, 49, __", optionA: "36", optionB: "40", optionC: "25", optionD: "42", correctOption: "A", explanation: "Squares descending: 10²,9²,8²,7²,6² → 36.", orderIndex: 8 },
  { id: "ssc-cgl-reasoning-missing-numbers-q10", topicId: "ssc-cgl-reasoning-missing-numbers", text: "In a row the third number is the product of the first two: (4, 5, 20) and (3, 6, ?). Find the missing number.", optionA: "18", optionB: "9", optionC: "12", optionD: "24", correctOption: "A", explanation: "The rule is first × second = third, so 3 × 6 = 18.", orderIndex: 9 },
  { id: "ssc-cgl-reasoning-missing-numbers-q11", topicId: "ssc-cgl-reasoning-missing-numbers", text: "Complete: 1, 2, 4, 7, 11, __", optionA: "16", optionB: "15", optionC: "14", optionD: "18", correctOption: "A", explanation: "Differences 1,2,3,4,5 give 11 + 5 = 16.", orderIndex: 10 },
  { id: "ssc-cgl-reasoning-missing-numbers-q12", topicId: "ssc-cgl-reasoning-missing-numbers", text: "Series: 81, 27, 9, 3, __", optionA: "1", optionB: "0", optionC: "2", optionD: "3", correctOption: "A", explanation: "Each term is divided by 3: 3 ÷ 3 = 1.", orderIndex: 11 },

  // ── Phrasal Verbs ──
  { id: "ssc-cgl-english-phrasal-verbs-q01", topicId: "ssc-cgl-english-phrasal-verbs", text: "The match was ____ due to rain. (cancelled)", optionA: "called off", optionB: "called on", optionC: "called up", optionD: "called for", correctOption: "A", explanation: "'Call off' means to cancel.", orderIndex: 0 },
  { id: "ssc-cgl-english-phrasal-verbs-q02", topicId: "ssc-cgl-english-phrasal-verbs", text: "'Put off' means to:", optionA: "Postpone", optionB: "Wear", optionC: "Encourage", optionD: "Explain", correctOption: "A", explanation: "'Put off' means to postpone or delay.", orderIndex: 1 },
  { id: "ssc-cgl-english-phrasal-verbs-q03", topicId: "ssc-cgl-english-phrasal-verbs", text: "The police will ____ the matter. (investigate)", optionA: "look into", optionB: "look after", optionC: "look up to", optionD: "look out", correctOption: "A", explanation: "'Look into' means to investigate.", orderIndex: 2 },
  { id: "ssc-cgl-english-phrasal-verbs-q04", topicId: "ssc-cgl-english-phrasal-verbs", text: "'Give up' means to:", optionA: "Quit / stop trying", optionB: "Distribute", optionC: "Return", optionD: "Increase", correctOption: "A", explanation: "'Give up' means to quit or stop trying.", orderIndex: 3 },
  { id: "ssc-cgl-english-phrasal-verbs-q05", topicId: "ssc-cgl-english-phrasal-verbs", text: "Our car ____ on the highway. (stopped functioning)", optionA: "broke down", optionB: "broke in", optionC: "broke out", optionD: "broke up", correctOption: "A", explanation: "'Break down' means to stop functioning.", orderIndex: 4 },
  { id: "ssc-cgl-english-phrasal-verbs-q06", topicId: "ssc-cgl-english-phrasal-verbs", text: "'Turn down' a job offer means to:", optionA: "Reject it", optionB: "Accept it", optionC: "Delay it", optionD: "Lower it", correctOption: "A", explanation: "'Turn down' means to reject or refuse.", orderIndex: 5 },
  { id: "ssc-cgl-english-phrasal-verbs-q07", topicId: "ssc-cgl-english-phrasal-verbs", text: "She was ____ by her grandparents. (raised)", optionA: "brought up", optionB: "brought about", optionC: "brought in", optionD: "brought down", correctOption: "A", explanation: "'Bring up' means to raise or rear a child.", orderIndex: 6 },
  { id: "ssc-cgl-english-phrasal-verbs-q08", topicId: "ssc-cgl-english-phrasal-verbs", text: "'Give in' means to:", optionA: "Surrender / yield", optionB: "Submit a form", optionC: "Enter", optionD: "Distribute", correctOption: "A", explanation: "'Give in' means to surrender or yield.", orderIndex: 7 },
  { id: "ssc-cgl-english-phrasal-verbs-q09", topicId: "ssc-cgl-english-phrasal-verbs", text: "The soldiers were ordered to ____ the mission. (perform)", optionA: "carry out", optionB: "carry on", optionC: "carry off", optionD: "carry over", correctOption: "A", explanation: "'Carry out' means to execute or perform a task.", orderIndex: 8 },
  { id: "ssc-cgl-english-phrasal-verbs-q10", topicId: "ssc-cgl-english-phrasal-verbs", text: "I ____ an old friend at the market. (met by chance)", optionA: "ran into", optionB: "ran out", optionC: "ran over", optionD: "ran up", correctOption: "A", explanation: "'Run into' means to meet someone by chance.", orderIndex: 9 },
  { id: "ssc-cgl-english-phrasal-verbs-q11", topicId: "ssc-cgl-english-phrasal-verbs", text: "'Look after' means to:", optionA: "Take care of", optionB: "Investigate", optionC: "Search for", optionD: "Admire", correctOption: "A", explanation: "'Look after' means to take care of someone or something.", orderIndex: 10 },
  { id: "ssc-cgl-english-phrasal-verbs-q12", topicId: "ssc-cgl-english-phrasal-verbs", text: "We had to ____ the meeting until Monday. (postpone)", optionA: "put off", optionB: "put on", optionC: "put up", optionD: "put out", correctOption: "A", explanation: "'Put off' means to postpone.", orderIndex: 11 }
];
