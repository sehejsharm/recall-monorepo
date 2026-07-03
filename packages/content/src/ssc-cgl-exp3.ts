// SSC CGL depth expansion — Reasoning, English & General Awareness (pass 3).
// Rounds out the non-quant sections with nine classic SSC topics. Each new topic
// has a short study note and a full 12-question drill.
import type { AuthoredMaterial } from "./builder";
import type { Question, Topic } from "@jyotir/core";

export const ssc3Topics: Topic[] = [
  // Reasoning (existing max orderIndex = 8)
  { id: "ssc-cgl-reasoning-order-ranking", subjectId: "ssc-cgl-reasoning", name: "Order & Ranking", slug: "order-ranking", orderIndex: 9 },
  { id: "ssc-cgl-reasoning-venn-diagrams", subjectId: "ssc-cgl-reasoning", name: "Venn Diagrams", slug: "venn-diagrams", orderIndex: 10 },
  { id: "ssc-cgl-reasoning-dice-cubes", subjectId: "ssc-cgl-reasoning", name: "Dice & Cubes", slug: "dice-cubes", orderIndex: 11 },
  // English (existing max orderIndex = 6)
  { id: "ssc-cgl-english-para-jumbles", subjectId: "ssc-cgl-english", name: "Para Jumbles", slug: "para-jumbles", orderIndex: 7 },
  { id: "ssc-cgl-english-narration", subjectId: "ssc-cgl-english", name: "Narration (Direct-Indirect Speech)", slug: "narration", orderIndex: 8 },
  { id: "ssc-cgl-english-fill-blanks", subjectId: "ssc-cgl-english", name: "Fill in the Blanks & Vocabulary", slug: "fill-blanks", orderIndex: 9 },
  // General Awareness (existing max orderIndex = 6)
  { id: "ssc-cgl-general-awareness-static-gk", subjectId: "ssc-cgl-general-awareness", name: "Static GK & National Symbols", slug: "static-gk", orderIndex: 7 },
  { id: "ssc-cgl-general-awareness-sports", subjectId: "ssc-cgl-general-awareness", name: "Sports GK", slug: "sports", orderIndex: 8 },
  { id: "ssc-cgl-general-awareness-computer-awareness", subjectId: "ssc-cgl-general-awareness", name: "Computer & IT Awareness", slug: "computer-awareness", orderIndex: 9 }
];

export const ssc3Materials: AuthoredMaterial[] = [
  { id: "ssc-cgl-reasoning-order-ranking-m01", topicId: "ssc-cgl-reasoning-order-ranking", title: "Order & Ranking", content: `Order-and-ranking problems place people in a **row or a rank list** and ask for a position.

## Key formulas
For a person in a **row**:
\`\`\`
Position from left + Position from right = Total + 1
Total = (Position from left) + (Position from right) − 1
\`\`\`
For a **rank** in a class:
\`\`\`
Rank from bottom = Total − Rank from top + 1
\`\`\`

## Tips
- 'Ahead of' / 'in front of' usually means toward the **left/top**.
- When two positions are given for the **same** person from opposite ends, add them and subtract 1 to get the total.
- Draw a quick left-to-right sketch to avoid off-by-one errors.`, estimatedReadTime: 1, orderIndex: 0 },
  { id: "ssc-cgl-reasoning-venn-diagrams-m01", topicId: "ssc-cgl-reasoning-venn-diagrams", title: "Venn Diagrams", content: `A **Venn diagram** uses **overlapping circles** to show the relationship between groups (sets).

## Reading the diagram
- The **overlap** of two circles = elements **common** to both.
- **Separate (non-touching)** circles = **no** common elements (disjoint).
- One circle **inside** another = the inner group is entirely **contained** in the outer.

## Typical relationships
| Statement | Diagram |
| --- | --- |
| All A are B | Circle A inside circle B |
| Some A are B | Two partially overlapping circles |
| No A is B | Two separate circles |

- A **rectangle** around everything represents the **universal set**.
- Choose the diagram whose regions match the real-world relationship (e.g., *Mango* ⊂ *Fruit* ⊂ *Food* are three nested circles).`, estimatedReadTime: 1, orderIndex: 0 },
  { id: "ssc-cgl-reasoning-dice-cubes-m01", topicId: "ssc-cgl-reasoning-dice-cubes", title: "Dice & Cubes", content: `## Dice
A standard die is a cube with **6 faces**, numbered 1–6. On a **standard die, opposite faces sum to 7** (1-6, 2-5, 3-4). Three faces meet at each corner, and the six numbers total **21**.

## Cubes
A cube has **6 faces, 12 edges, and 8 corners (vertices)**.

## Painted-cube cutting
If a painted cube is cut into an **n × n × n** grid of small cubes:
| Painted faces | Count |
| --- | --- |
| **3 faces** (corners) | Always **8** |
| **2 faces** (edges) | 12 × (n − 2) |
| **1 face** (face centres) | 6 × (n − 2)² |
| **0 faces** (interior) | (n − 2)³ |

For a **3 × 3 × 3** cube (27 pieces): 8 corner cubes (3 faces), 12 edge (2 faces), 6 face-centre (1 face), and **1** fully hidden interior cube (0 faces).`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "ssc-cgl-english-para-jumbles-m01", topicId: "ssc-cgl-english-para-jumbles", title: "Para Jumbles", content: `In a **para jumble**, several sentences are given out of order and you must rearrange them into a **coherent paragraph**.

## Strategy
1. **Find the opening sentence** — it is independent, introduces the topic, and does not begin with a pronoun or connector.
2. **Follow the links**: pronouns (**it, they, this, he**) refer back to a noun already mentioned, so that sentence comes **after** the one naming the noun.
3. **Transition words** (*however, therefore, moreover, finally*) signal how sentences connect.
4. The **concluding sentence** often summarises or gives a result.
5. Read your final order end-to-end to check it flows logically.`, estimatedReadTime: 1, orderIndex: 0 },
  { id: "ssc-cgl-english-narration-m01", topicId: "ssc-cgl-english-narration", title: "Narration (Direct-Indirect Speech)", content: `**Direct speech** quotes the exact words in **quotation marks**; **indirect (reported) speech** reports them without quotes.

## Common changes (when the reporting verb is past)
| Direct | Indirect |
| --- | --- |
| present tense | past tense |
| will | would |
| now | then |
| today | that day |
| this | that |
| here | there |

## Rules
- Use **'that'** to report statements: *He said, "I am tired" → He said that he was tired.*
- Report **questions** with **if/whether** (yes-no) or the wh-word, changing to statement order.
- Report **commands/requests** with **told/ordered/requested … to** + verb.
- If the reporting verb is in the **present** (e.g., *He says*), the tense of the reported words does **not** change.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "ssc-cgl-english-fill-blanks-m01", topicId: "ssc-cgl-english-fill-blanks", title: "Fill in the Blanks & Vocabulary", content: `Fill-in-the-blank questions test **prepositions**, **vocabulary**, and correct usage.

## Prepositions after common words
- **fond of**, **good at**, **angry with** (a person), **interested in**, **afraid of**, **proud of**, **married to**, **capable of**.
- Wait **for**, depend **on**, succeed **in**, believe **in**, listen **to**.

## Vocabulary
- Know common **synonyms** (happy → joyful) and **antonyms** (accept → reject).
- **One-word substitution**: a doctor for teeth = **dentist**; that cannot be seen = **invisible**; a place for books = **library**.

Read the whole sentence for **context** — the tense, tone and surrounding words point to the right choice.`, estimatedReadTime: 1, orderIndex: 0 },
  { id: "ssc-cgl-general-awareness-static-gk-m01", topicId: "ssc-cgl-general-awareness-static-gk", title: "Static GK & National Symbols", content: `**National symbols of India** are among the most repeated SSC static-GK facts.
| Symbol | National identity |
| --- | --- |
| **Animal** | Royal Bengal Tiger |
| **Bird** | Indian Peacock |
| **Flower** | Lotus |
| **Tree** | Banyan |
| **Fruit** | Mango |
| **River** | Ganga |
| **Aquatic animal** | Ganges River Dolphin |

- **National anthem**: *Jana Gana Mana* (Rabindranath Tagore).
- **National song**: *Vande Mataram* (Bankim Chandra Chattopadhyay).
- **National emblem**: the **Lion Capital of Ashoka** (Sarnath), with the motto **Satyameva Jayate** ('Truth alone triumphs').
- The **rupee symbol (₹)** was designed by **Udaya Kumar** (adopted 2010).`, estimatedReadTime: 1, orderIndex: 0 },
  { id: "ssc-cgl-general-awareness-sports-m01", topicId: "ssc-cgl-general-awareness-sports", title: "Sports GK", content: `## Team sizes (players on the field)
| Sport | Players per side |
| --- | --- |
| **Cricket** | 11 |
| **Football (soccer)** | 11 |
| **Hockey** | 11 |
| **Basketball** | 5 |
| **Kabaddi** | 7 |
| **Volleyball** | 6 |

## Terms and events
- **'Love'** (zero) and 'deuce' are terms in **tennis**; **Wimbledon** is a tennis Grand Slam.
- A **century** in cricket is 100 runs; **The Ashes** is a cricket series (England vs Australia).
- **Checkmate** and 'gambit' are **chess** terms; the **Ryder Cup** is in **golf**.
- The **Summer Olympics** are held **every four years**.
- India's highest sporting honour is the **Major Dhyan Chand Khel Ratna Award**.`, estimatedReadTime: 1, orderIndex: 0 },
  { id: "ssc-cgl-general-awareness-computer-awareness-m01", topicId: "ssc-cgl-general-awareness-computer-awareness", title: "Computer & IT Awareness", content: `## Basics
- **CPU** = Central Processing Unit (the 'brain' of the computer); it contains the control unit and the **ALU**.
- **RAM** = Random Access Memory (volatile working memory); **ROM** = Read-Only Memory.
- **Hardware** = the physical parts; **software** = the programs.
- **1 byte = 8 bits**; sizes go KB → MB → GB → TB.
- **Motherboard** = the main circuit board connecting components.

## Everyday IT
- **WWW** = World Wide Web; **email** = electronic mail; **URL** = the web address.
- Common shortcuts: **Ctrl + C** (copy), **Ctrl + V** (paste), **Ctrl + Z** (undo), **Ctrl + S** (save).
- Input devices: keyboard, **mouse**, scanner; output devices: monitor, printer, speakers.`, estimatedReadTime: 1, orderIndex: 0 }
];

export const ssc3Questions: Question[] = [
  // ── Order & Ranking ──
  { id: "ssc-cgl-reasoning-order-ranking-q01", topicId: "ssc-cgl-reasoning-order-ranking", text: "In a row of 40 people, A is 10th from the left. A's position from the right is:", optionA: "31st", optionB: "30th", optionC: "29th", optionD: "32nd", correctOption: "A", explanation: "Position from right = 40 − 10 + 1 = 31st.", orderIndex: 0 },
  { id: "ssc-cgl-reasoning-order-ranking-q02", topicId: "ssc-cgl-reasoning-order-ranking", text: "In a class of 30, a student ranks 12th from the top. The rank from the bottom is:", optionA: "19th", optionB: "18th", optionC: "20th", optionD: "17th", correctOption: "A", explanation: "Rank from bottom = 30 − 12 + 1 = 19th.", orderIndex: 1 },
  { id: "ssc-cgl-reasoning-order-ranking-q03", topicId: "ssc-cgl-reasoning-order-ranking", text: "If a person's position from the left is L and from the right is R, the total number of people is:", optionA: "L + R − 1", optionB: "L + R", optionC: "L + R + 1", optionD: "L − R", correctOption: "A", explanation: "Total = position from left + position from right − 1.", orderIndex: 2 },
  { id: "ssc-cgl-reasoning-order-ranking-q04", topicId: "ssc-cgl-reasoning-order-ranking", text: "In a row of 25, B is 7th from the right. B's position from the left is:", optionA: "19th", optionB: "18th", optionC: "20th", optionD: "17th", correctOption: "A", explanation: "Position from left = 25 − 7 + 1 = 19th.", orderIndex: 3 },
  { id: "ssc-cgl-reasoning-order-ranking-q05", topicId: "ssc-cgl-reasoning-order-ranking", text: "In a queue, a person is 8th from the front and 12th from the back. The total number of people is:", optionA: "19", optionB: "20", optionC: "18", optionD: "21", correctOption: "A", explanation: "Total = 8 + 12 − 1 = 19.", orderIndex: 4 },
  { id: "ssc-cgl-reasoning-order-ranking-q06", topicId: "ssc-cgl-reasoning-order-ranking", text: "In a row of 50, a person 20th from the left is, from the right:", optionA: "31st", optionB: "30th", optionC: "29th", optionD: "32nd", correctOption: "A", explanation: "From the right = 50 − 20 + 1 = 31st.", orderIndex: 5 },
  { id: "ssc-cgl-reasoning-order-ranking-q07", topicId: "ssc-cgl-reasoning-order-ranking", text: "X is 3rd from the top and 3rd from the bottom in a rank list. The total number of students is:", optionA: "5", optionB: "6", optionC: "4", optionD: "7", correctOption: "A", explanation: "Total = 3 + 3 − 1 = 5.", orderIndex: 6 },
  { id: "ssc-cgl-reasoning-order-ranking-q08", topicId: "ssc-cgl-reasoning-order-ranking", text: "The rank from the bottom equals:", optionA: "Total − rank from top + 1", optionB: "Total − rank from top", optionC: "Total + rank from top", optionD: "Rank from top − 1", correctOption: "A", explanation: "Rank from bottom = Total − rank from top + 1.", orderIndex: 7 },
  { id: "ssc-cgl-reasoning-order-ranking-q09", topicId: "ssc-cgl-reasoning-order-ranking", text: "In a row of 15, A is 5th from the left and B is 6th from the right. The number of people between them is:", optionA: "4", optionB: "5", optionC: "3", optionD: "6", correctOption: "A", explanation: "B from left = 15 − 6 + 1 = 10th; between positions 5 and 10 there are 10 − 5 − 1 = 4 people.", orderIndex: 8 },
  { id: "ssc-cgl-reasoning-order-ranking-q10", topicId: "ssc-cgl-reasoning-order-ranking", text: "Ranking 1st in a list means being:", optionA: "At the top", optionB: "At the bottom", optionC: "In the middle", optionD: "Last", correctOption: "A", explanation: "Rank 1 is the highest position — the top.", orderIndex: 9 },
  { id: "ssc-cgl-reasoning-order-ranking-q11", topicId: "ssc-cgl-reasoning-order-ranking", text: "A is 10th in a queue. B is 4 places ahead of A. B's position is:", optionA: "6th", optionB: "14th", optionC: "5th", optionD: "7th", correctOption: "A", explanation: "'Ahead' means nearer the front: 10 − 4 = 6th.", orderIndex: 10 },
  { id: "ssc-cgl-reasoning-order-ranking-q12", topicId: "ssc-cgl-reasoning-order-ranking", text: "In a row of 20, a person 12th from the left is, from the right:", optionA: "9th", optionB: "8th", optionC: "10th", optionD: "11th", correctOption: "A", explanation: "From the right = 20 − 12 + 1 = 9th.", orderIndex: 11 },

  // ── Venn Diagrams ──
  { id: "ssc-cgl-reasoning-venn-diagrams-q01", topicId: "ssc-cgl-reasoning-venn-diagrams", text: "A Venn diagram represents relationships between groups using:", optionA: "Overlapping circles", optionB: "Straight lines", optionC: "Bar graphs", optionD: "Tables only", correctOption: "A", explanation: "Venn diagrams use overlapping circles to show how sets relate.", orderIndex: 0 },
  { id: "ssc-cgl-reasoning-venn-diagrams-q02", topicId: "ssc-cgl-reasoning-venn-diagrams", text: "The overlapping region of two circles represents elements that are:", optionA: "Common to both groups", optionB: "In neither group", optionC: "Only in the first group", optionD: "Only in the second group", correctOption: "A", explanation: "The intersection (overlap) holds elements belonging to both sets.", orderIndex: 1 },
  { id: "ssc-cgl-reasoning-venn-diagrams-q03", topicId: "ssc-cgl-reasoning-venn-diagrams", text: "If all A are B, the correct diagram shows:", optionA: "Circle A entirely inside circle B", optionB: "Two separate circles", optionC: "Two equal circles", optionD: "Circle B inside circle A", correctOption: "A", explanation: "'All A are B' means every A is contained in B, so A sits inside B.", orderIndex: 2 },
  { id: "ssc-cgl-reasoning-venn-diagrams-q04", topicId: "ssc-cgl-reasoning-venn-diagrams", text: "Which best represents Dog, Cat and Animal?", optionA: "Dog and Cat as separate circles inside Animal", optionB: "Three fully overlapping circles", optionC: "Three separate circles", optionD: "Animal inside Dog", correctOption: "A", explanation: "Dogs and cats are distinct kinds of animals, so both lie separately within the Animal circle.", orderIndex: 3 },
  { id: "ssc-cgl-reasoning-venn-diagrams-q05", topicId: "ssc-cgl-reasoning-venn-diagrams", text: "If no A is B, the two circles are:", optionA: "Separate (disjoint)", optionB: "Overlapping", optionC: "One inside the other", optionD: "Identical", correctOption: "A", explanation: "'No A is B' means the sets share nothing, so the circles do not touch.", orderIndex: 4 },
  { id: "ssc-cgl-reasoning-venn-diagrams-q06", topicId: "ssc-cgl-reasoning-venn-diagrams", text: "Which relationship suits Apple, Fruit and Food?", optionA: "Apple inside Fruit inside Food (nested)", optionB: "Three separate circles", optionC: "Food inside Apple", optionD: "Apple and Food overlapping only", correctOption: "A", explanation: "Every apple is a fruit and every fruit is food, giving three nested circles.", orderIndex: 5 },
  { id: "ssc-cgl-reasoning-venn-diagrams-q07", topicId: "ssc-cgl-reasoning-venn-diagrams", text: "'Some A are B' is shown by:", optionA: "Two partially overlapping circles", optionB: "Two separate circles", optionC: "A inside B", optionD: "Two identical circles", correctOption: "A", explanation: "'Some' means a partial overlap between the two circles.", orderIndex: 6 },
  { id: "ssc-cgl-reasoning-venn-diagrams-q08", topicId: "ssc-cgl-reasoning-venn-diagrams", text: "The universal set in a Venn diagram is usually drawn as a:", optionA: "Rectangle enclosing the circles", optionB: "Single line", optionC: "Small dot", optionD: "Triangle inside a circle", correctOption: "A", explanation: "A rectangle around all the circles denotes the universal set.", orderIndex: 7 },
  { id: "ssc-cgl-reasoning-venn-diagrams-q09", topicId: "ssc-cgl-reasoning-venn-diagrams", text: "Which best represents Doctors, Women and Human Beings?", optionA: "Doctors and Women overlapping, both inside Human Beings", optionB: "Three separate circles", optionC: "Human Beings inside Doctors", optionD: "Doctors inside Women", correctOption: "A", explanation: "Some doctors are women (overlap), and both are human beings (contained in that circle).", orderIndex: 8 },
  { id: "ssc-cgl-reasoning-venn-diagrams-q10", topicId: "ssc-cgl-reasoning-venn-diagrams", text: "The central region common to three overlapping circles contains elements that are:", optionA: "In all three groups", optionB: "In only one group", optionC: "In none of the groups", optionD: "In exactly two groups", correctOption: "A", explanation: "The centre where all three circles overlap holds elements belonging to every set.", orderIndex: 9 },
  { id: "ssc-cgl-reasoning-venn-diagrams-q11", topicId: "ssc-cgl-reasoning-venn-diagrams", text: "Pen, Pencil and Stationery are best shown as:", optionA: "Pen and Pencil as separate circles inside Stationery", optionB: "Three separate circles", optionC: "Stationery inside Pen", optionD: "Pen inside Pencil", correctOption: "A", explanation: "Pens and pencils are distinct items of stationery, so both lie separately inside it.", orderIndex: 10 },
  { id: "ssc-cgl-reasoning-venn-diagrams-q12", topicId: "ssc-cgl-reasoning-venn-diagrams", text: "Two circles that do not touch at all represent groups with:", optionA: "No common elements", optionB: "All elements common", optionC: "Some common elements", optionD: "One inside the other", correctOption: "A", explanation: "Non-touching (disjoint) circles indicate the groups share no elements.", orderIndex: 11 },

  // ── Dice & Cubes ──
  { id: "ssc-cgl-reasoning-dice-cubes-q01", topicId: "ssc-cgl-reasoning-dice-cubes", text: "A standard die has how many faces?", optionA: "6", optionB: "4", optionC: "8", optionD: "12", correctOption: "A", explanation: "A die is a cube with 6 numbered faces.", orderIndex: 0 },
  { id: "ssc-cgl-reasoning-dice-cubes-q02", topicId: "ssc-cgl-reasoning-dice-cubes", text: "On a standard die, the numbers on opposite faces add up to:", optionA: "7", optionB: "6", optionC: "8", optionD: "5", correctOption: "A", explanation: "Opposite faces of a standard die always sum to 7 (1-6, 2-5, 3-4).", orderIndex: 1 },
  { id: "ssc-cgl-reasoning-dice-cubes-q03", topicId: "ssc-cgl-reasoning-dice-cubes", text: "If 1 is opposite 6 on a standard die, then 2 is opposite:", optionA: "5", optionB: "4", optionC: "3", optionD: "6", correctOption: "A", explanation: "Opposite faces sum to 7, so 2 is opposite 5.", orderIndex: 2 },
  { id: "ssc-cgl-reasoning-dice-cubes-q04", topicId: "ssc-cgl-reasoning-dice-cubes", text: "A cube has how many edges?", optionA: "12", optionB: "8", optionC: "6", optionD: "4", correctOption: "A", explanation: "A cube has 12 edges, 6 faces and 8 vertices.", orderIndex: 3 },
  { id: "ssc-cgl-reasoning-dice-cubes-q05", topicId: "ssc-cgl-reasoning-dice-cubes", text: "A cube has how many corners (vertices)?", optionA: "8", optionB: "6", optionC: "12", optionD: "4", correctOption: "A", explanation: "A cube has 8 corners.", orderIndex: 4 },
  { id: "ssc-cgl-reasoning-dice-cubes-q06", topicId: "ssc-cgl-reasoning-dice-cubes", text: "How many faces of a cube meet at each corner?", optionA: "3", optionB: "2", optionC: "4", optionD: "6", correctOption: "A", explanation: "Three faces meet at every corner of a cube.", orderIndex: 5 },
  { id: "ssc-cgl-reasoning-dice-cubes-q07", topicId: "ssc-cgl-reasoning-dice-cubes", text: "A painted cube is cut into 27 identical small cubes (3×3×3). How many have no face painted?", optionA: "1", optionB: "8", optionC: "6", optionD: "12", correctOption: "A", explanation: "Only the single hidden interior cube of a 3×3×3 has no painted face.", orderIndex: 6 },
  { id: "ssc-cgl-reasoning-dice-cubes-q08", topicId: "ssc-cgl-reasoning-dice-cubes", text: "In a painted 3×3×3 cube, how many small cubes have exactly three faces painted?", optionA: "8", optionB: "12", optionC: "6", optionD: "1", correctOption: "A", explanation: "The 8 corner cubes each show three painted faces.", orderIndex: 7 },
  { id: "ssc-cgl-reasoning-dice-cubes-q09", topicId: "ssc-cgl-reasoning-dice-cubes", text: "A cube cut into 3 equal parts along each dimension gives how many small cubes?", optionA: "27", optionB: "9", optionC: "18", optionD: "12", correctOption: "A", explanation: "3 × 3 × 3 = 27 small cubes.", orderIndex: 8 },
  { id: "ssc-cgl-reasoning-dice-cubes-q10", topicId: "ssc-cgl-reasoning-dice-cubes", text: "The sum of all the numbers on a standard die (1 to 6) is:", optionA: "21", optionB: "18", optionC: "24", optionD: "20", correctOption: "A", explanation: "1 + 2 + 3 + 4 + 5 + 6 = 21.", orderIndex: 9 },
  { id: "ssc-cgl-reasoning-dice-cubes-q11", topicId: "ssc-cgl-reasoning-dice-cubes", text: "In a painted 3×3×3 cube, how many small cubes have exactly one face painted?", optionA: "6", optionB: "8", optionC: "12", optionD: "1", correctOption: "A", explanation: "The centre cube of each of the 6 faces has exactly one painted face.", orderIndex: 10 },
  { id: "ssc-cgl-reasoning-dice-cubes-q12", topicId: "ssc-cgl-reasoning-dice-cubes", text: "A cube has how many faces?", optionA: "6", optionB: "8", optionC: "12", optionD: "4", correctOption: "A", explanation: "A cube has 6 square faces.", orderIndex: 11 },

  // ── Para Jumbles ──
  { id: "ssc-cgl-english-para-jumbles-q01", topicId: "ssc-cgl-english-para-jumbles", text: "In a para-jumble question, the sentences must be arranged into a:", optionA: "Coherent, logical paragraph", optionB: "Reverse-alphabetical list", optionC: "Random order", optionD: "Set of questions", correctOption: "A", explanation: "The goal is to reorder the sentences so the paragraph reads logically.", orderIndex: 0 },
  { id: "ssc-cgl-english-para-jumbles-q02", topicId: "ssc-cgl-english-para-jumbles", text: "The opening sentence of a paragraph is usually:", optionA: "Independent and introduces the topic", optionB: "Beginning with 'however'", optionC: "Beginning with a pronoun", optionD: "A conclusion", correctOption: "A", explanation: "The first sentence stands alone and introduces the subject, without back-referring words.", orderIndex: 1 },
  { id: "ssc-cgl-english-para-jumbles-q03", topicId: "ssc-cgl-english-para-jumbles", text: "A sentence beginning with the pronoun 'it' or 'they' most likely comes:", optionA: "After the sentence naming the noun it refers to", optionB: "First in the paragraph", optionC: "Independently anywhere", optionD: "As the opening line", correctOption: "A", explanation: "A pronoun needs an earlier antecedent, so its sentence follows the one that introduces the noun.", orderIndex: 2 },
  { id: "ssc-cgl-english-para-jumbles-q04", topicId: "ssc-cgl-english-para-jumbles", text: "Words like 'however', 'therefore' and 'moreover' are called:", optionA: "Transition (connecting) words", optionB: "Nouns", optionC: "Prepositions", optionD: "Interjections", correctOption: "A", explanation: "Transition words link ideas and signal how sentences relate.", orderIndex: 3 },
  { id: "ssc-cgl-english-para-jumbles-q05", topicId: "ssc-cgl-english-para-jumbles", text: "The concluding sentence of a paragraph typically:", optionA: "Summarises or gives the result", optionB: "Introduces a new topic", optionC: "Starts with 'firstly'", optionD: "Contains no verb", correctOption: "A", explanation: "The final sentence usually wraps up or concludes the idea.", orderIndex: 4 },
  { id: "ssc-cgl-english-para-jumbles-q06", topicId: "ssc-cgl-english-para-jumbles", text: "The most reliable last step in solving a para jumble is to:", optionA: "Read the arranged order end-to-end for flow", optionB: "Count the words", optionC: "Ignore the connectors", optionD: "Reverse the order", correctOption: "A", explanation: "Reading the final sequence checks that it flows logically and coherently.", orderIndex: 5 },
  { id: "ssc-cgl-english-para-jumbles-q07", topicId: "ssc-cgl-english-para-jumbles", text: "Arrange logically: (P) He switched off the lights. (Q) He felt sleepy. (R) He went to bed.", optionA: "Q, P, R", optionB: "R, P, Q", optionC: "P, R, Q", optionD: "R, Q, P", correctOption: "A", explanation: "He felt sleepy, then switched off the lights, then went to bed — Q, P, R.", orderIndex: 6 },
  { id: "ssc-cgl-english-para-jumbles-q08", topicId: "ssc-cgl-english-para-jumbles", text: "The word 'finally' in a sentence usually signals that it belongs:", optionA: "Near the end of the paragraph", optionB: "At the very beginning", optionC: "In the middle only", optionD: "Nowhere", correctOption: "A", explanation: "'Finally' marks a concluding or last point, placing the sentence toward the end.", orderIndex: 7 },
  { id: "ssc-cgl-english-para-jumbles-q09", topicId: "ssc-cgl-english-para-jumbles", text: "Arrange logically: (P) It grew into a tree. (Q) He planted a seed. (R) The seed sprouted.", optionA: "Q, R, P", optionB: "P, Q, R", optionC: "R, Q, P", optionD: "Q, P, R", correctOption: "A", explanation: "He planted a seed, it sprouted, then grew into a tree — Q, R, P.", orderIndex: 8 },
  { id: "ssc-cgl-english-para-jumbles-q10", topicId: "ssc-cgl-english-para-jumbles", text: "Chronological clues (first, then, next, later) help decide the sentences':", optionA: "Order", optionB: "Spelling", optionC: "Tense only", optionD: "Length", correctOption: "A", explanation: "Time-sequence words indicate the correct order of events.", orderIndex: 9 },
  { id: "ssc-cgl-english-para-jumbles-q11", topicId: "ssc-cgl-english-para-jumbles", text: "A sentence that gives background/definition of the main subject usually appears:", optionA: "Early in the paragraph", optionB: "As the conclusion", optionC: "Never", optionD: "Only last", correctOption: "A", explanation: "Introductory background about the topic typically comes near the start.", orderIndex: 10 },
  { id: "ssc-cgl-english-para-jumbles-q12", topicId: "ssc-cgl-english-para-jumbles", text: "Arrange logically: (P) So she took an umbrella. (Q) It was raining heavily. (R) She reached office dry.", optionA: "Q, P, R", optionB: "P, Q, R", optionC: "R, Q, P", optionD: "Q, R, P", correctOption: "A", explanation: "It was raining, so she took an umbrella, and reached office dry — Q, P, R.", orderIndex: 11 },

  // ── Narration (Direct-Indirect Speech) ──
  { id: "ssc-cgl-english-narration-q01", topicId: "ssc-cgl-english-narration", text: "Direct speech is marked by the use of:", optionA: "Quotation marks", optionB: "Brackets", optionC: "Hyphens", optionD: "No punctuation", correctOption: "A", explanation: "Direct speech quotes the exact words within quotation marks.", orderIndex: 0 },
  { id: "ssc-cgl-english-narration-q02", topicId: "ssc-cgl-english-narration", text: "Indirect form of: He said, \"I am happy.\"", optionA: "He said that he was happy.", optionB: "He said that he is happy.", optionC: "He says he was happy.", optionD: "He said I am happy.", correctOption: "A", explanation: "Present tense shifts to past and 'I' becomes 'he': He said that he was happy.", orderIndex: 1 },
  { id: "ssc-cgl-english-narration-q03", topicId: "ssc-cgl-english-narration", text: "In indirect speech (past reporting verb), present tense usually changes to:", optionA: "Past tense", optionB: "Future tense", optionC: "No change", optionD: "Present perfect", correctOption: "A", explanation: "With a past reporting verb, the reported present tense moves one step back to past.", orderIndex: 2 },
  { id: "ssc-cgl-english-narration-q04", topicId: "ssc-cgl-english-narration", text: "In indirect speech, 'now' changes to:", optionA: "then", optionB: "here", optionC: "today", optionD: "soon", correctOption: "A", explanation: "'Now' becomes 'then' when converting to reported speech.", orderIndex: 3 },
  { id: "ssc-cgl-english-narration-q05", topicId: "ssc-cgl-english-narration", text: "In indirect speech, 'today' changes to:", optionA: "that day", optionB: "this day", optionC: "next day", optionD: "yesterday", correctOption: "A", explanation: "'Today' becomes 'that day' in reported speech.", orderIndex: 4 },
  { id: "ssc-cgl-english-narration-q06", topicId: "ssc-cgl-english-narration", text: "Indirect form of: He said, \"I will go.\"", optionA: "He said that he would go.", optionB: "He said that he will go.", optionC: "He said he go.", optionD: "He said I will go.", correctOption: "A", explanation: "'Will' changes to 'would': He said that he would go.", orderIndex: 5 },
  { id: "ssc-cgl-english-narration-q07", topicId: "ssc-cgl-english-narration", text: "In indirect speech, 'this' generally changes to:", optionA: "that", optionB: "these", optionC: "those", optionD: "here", correctOption: "A", explanation: "'This' becomes 'that' in reported speech.", orderIndex: 6 },
  { id: "ssc-cgl-english-narration-q08", topicId: "ssc-cgl-english-narration", text: "A reported (indirect) question is usually introduced by 'if/whether' or a:", optionA: "Wh-word (what, where, why…)", optionB: "Full stop", optionC: "Comma only", optionD: "Quotation mark", correctOption: "A", explanation: "Yes-no questions use if/whether; others keep their wh-word, in statement order.", orderIndex: 7 },
  { id: "ssc-cgl-english-narration-q09", topicId: "ssc-cgl-english-narration", text: "In indirect speech, 'here' changes to:", optionA: "there", optionB: "near", optionC: "then", optionD: "that", correctOption: "A", explanation: "'Here' becomes 'there' in reported speech.", orderIndex: 8 },
  { id: "ssc-cgl-english-narration-q10", topicId: "ssc-cgl-english-narration", text: "Commands and requests in indirect speech use verbs like:", optionA: "told / ordered / requested … to", optionB: "said that", optionC: "asked if", optionD: "exclaimed that", correctOption: "A", explanation: "Imperatives are reported with told/ordered/requested + 'to' + verb.", orderIndex: 9 },
  { id: "ssc-cgl-english-narration-q11", topicId: "ssc-cgl-english-narration", text: "If the reporting verb is in the present tense (e.g., 'He says'), the reported tense:", optionA: "Does not change", optionB: "Always becomes past", optionC: "Becomes future", optionD: "Is removed", correctOption: "A", explanation: "With a present reporting verb, the tense of the reported words stays the same.", orderIndex: 10 },
  { id: "ssc-cgl-english-narration-q12", topicId: "ssc-cgl-english-narration", text: "Indirect form of: She said, \"I am reading a book.\"", optionA: "She said that she was reading a book.", optionB: "She said that she is reading a book.", optionC: "She says she was reading a book.", optionD: "She said I am reading a book.", correctOption: "A", explanation: "Present continuous shifts to past continuous and 'I' to 'she'.", orderIndex: 11 },

  // ── Fill in the Blanks & Vocabulary ──
  { id: "ssc-cgl-english-fill-blanks-q01", topicId: "ssc-cgl-english-fill-blanks", text: "Fill in: 'She is fond ___ music.'", optionA: "of", optionB: "for", optionC: "with", optionD: "to", correctOption: "A", explanation: "The correct phrase is 'fond of'.", orderIndex: 0 },
  { id: "ssc-cgl-english-fill-blanks-q02", topicId: "ssc-cgl-english-fill-blanks", text: "Fill in: 'He succeeded ___ his examination.'", optionA: "in", optionB: "at", optionC: "on", optionD: "for", correctOption: "A", explanation: "One succeeds 'in' something.", orderIndex: 1 },
  { id: "ssc-cgl-english-fill-blanks-q03", topicId: "ssc-cgl-english-fill-blanks", text: "Choose the synonym of 'HAPPY':", optionA: "Joyful", optionB: "Sad", optionC: "Angry", optionD: "Tired", correctOption: "A", explanation: "'Joyful' means the same as 'happy'.", orderIndex: 2 },
  { id: "ssc-cgl-english-fill-blanks-q04", topicId: "ssc-cgl-english-fill-blanks", text: "Choose the antonym of 'BIG':", optionA: "Small", optionB: "Large", optionC: "Huge", optionD: "Wide", correctOption: "A", explanation: "'Small' is the opposite of 'big'.", orderIndex: 3 },
  { id: "ssc-cgl-english-fill-blanks-q05", topicId: "ssc-cgl-english-fill-blanks", text: "Fill in: 'The sun rises ___ the east.'", optionA: "in", optionB: "on", optionC: "at", optionD: "from", correctOption: "A", explanation: "The idiom is 'rises in the east'.", orderIndex: 4 },
  { id: "ssc-cgl-english-fill-blanks-q06", topicId: "ssc-cgl-english-fill-blanks", text: "One word for 'a doctor who treats teeth':", optionA: "Dentist", optionB: "Surgeon", optionC: "Physician", optionD: "Optician", correctOption: "A", explanation: "A dentist specialises in teeth.", orderIndex: 5 },
  { id: "ssc-cgl-english-fill-blanks-q07", topicId: "ssc-cgl-english-fill-blanks", text: "Fill in: 'He is angry ___ me.'", optionA: "with", optionB: "on", optionC: "at", optionD: "for", correctOption: "A", explanation: "One is angry 'with' a person.", orderIndex: 6 },
  { id: "ssc-cgl-english-fill-blanks-q08", topicId: "ssc-cgl-english-fill-blanks", text: "Choose the synonym of 'QUICK':", optionA: "Fast", optionB: "Slow", optionC: "Late", optionD: "Heavy", correctOption: "A", explanation: "'Fast' is a synonym of 'quick'.", orderIndex: 7 },
  { id: "ssc-cgl-english-fill-blanks-q09", topicId: "ssc-cgl-english-fill-blanks", text: "Fill in: 'I have been waiting ___ an hour.'", optionA: "for", optionB: "since", optionC: "from", optionD: "at", correctOption: "A", explanation: "Use 'for' with a period of time (an hour).", orderIndex: 8 },
  { id: "ssc-cgl-english-fill-blanks-q10", topicId: "ssc-cgl-english-fill-blanks", text: "Choose the antonym of 'ACCEPT':", optionA: "Reject", optionB: "Agree", optionC: "Receive", optionD: "Take", correctOption: "A", explanation: "'Reject' is the opposite of 'accept'.", orderIndex: 9 },
  { id: "ssc-cgl-english-fill-blanks-q11", topicId: "ssc-cgl-english-fill-blanks", text: "Fill in: 'He is good ___ English.'", optionA: "at", optionB: "in", optionC: "on", optionD: "with", correctOption: "A", explanation: "The correct collocation is 'good at' a subject.", orderIndex: 10 },
  { id: "ssc-cgl-english-fill-blanks-q12", topicId: "ssc-cgl-english-fill-blanks", text: "One word for 'something that cannot be seen':", optionA: "Invisible", optionB: "Transparent", optionC: "Illegible", optionD: "Vague", correctOption: "A", explanation: "'Invisible' means unable to be seen.", orderIndex: 11 },

  // ── Static GK & National Symbols ──
  { id: "ssc-cgl-general-awareness-static-gk-q01", topicId: "ssc-cgl-general-awareness-static-gk", text: "The national animal of India is the:", optionA: "Royal Bengal Tiger", optionB: "Lion", optionC: "Elephant", optionD: "Leopard", correctOption: "A", explanation: "The Royal Bengal Tiger is India's national animal.", orderIndex: 0 },
  { id: "ssc-cgl-general-awareness-static-gk-q02", topicId: "ssc-cgl-general-awareness-static-gk", text: "The national bird of India is the:", optionA: "Peacock", optionB: "Parrot", optionC: "Eagle", optionD: "Sparrow", correctOption: "A", explanation: "The Indian Peacock is the national bird.", orderIndex: 1 },
  { id: "ssc-cgl-general-awareness-static-gk-q03", topicId: "ssc-cgl-general-awareness-static-gk", text: "The national flower of India is the:", optionA: "Lotus", optionB: "Rose", optionC: "Marigold", optionD: "Sunflower", correctOption: "A", explanation: "The Lotus is India's national flower.", orderIndex: 2 },
  { id: "ssc-cgl-general-awareness-static-gk-q04", topicId: "ssc-cgl-general-awareness-static-gk", text: "The national tree of India is the:", optionA: "Banyan", optionB: "Neem", optionC: "Peepal", optionD: "Mango", correctOption: "A", explanation: "The Banyan tree is the national tree of India.", orderIndex: 3 },
  { id: "ssc-cgl-general-awareness-static-gk-q05", topicId: "ssc-cgl-general-awareness-static-gk", text: "The national fruit of India is the:", optionA: "Mango", optionB: "Banana", optionC: "Apple", optionD: "Orange", correctOption: "A", explanation: "The Mango is India's national fruit.", orderIndex: 4 },
  { id: "ssc-cgl-general-awareness-static-gk-q06", topicId: "ssc-cgl-general-awareness-static-gk", text: "The Indian national anthem was written by:", optionA: "Rabindranath Tagore", optionB: "Bankim Chandra Chattopadhyay", optionC: "Sarojini Naidu", optionD: "Mahatma Gandhi", correctOption: "A", explanation: "'Jana Gana Mana' was composed by Rabindranath Tagore.", orderIndex: 5 },
  { id: "ssc-cgl-general-awareness-static-gk-q07", topicId: "ssc-cgl-general-awareness-static-gk", text: "The national song 'Vande Mataram' was written by:", optionA: "Bankim Chandra Chattopadhyay", optionB: "Rabindranath Tagore", optionC: "Subramania Bharati", optionD: "Muhammad Iqbal", correctOption: "A", explanation: "'Vande Mataram' was written by Bankim Chandra Chattopadhyay.", orderIndex: 6 },
  { id: "ssc-cgl-general-awareness-static-gk-q08", topicId: "ssc-cgl-general-awareness-static-gk", text: "The national emblem of India is adapted from the Lion Capital of Ashoka at:", optionA: "Sarnath", optionB: "Sanchi", optionC: "Bodh Gaya", optionD: "Ellora", correctOption: "A", explanation: "The emblem is the Lion Capital of Ashoka from Sarnath.", orderIndex: 7 },
  { id: "ssc-cgl-general-awareness-static-gk-q09", topicId: "ssc-cgl-general-awareness-static-gk", text: "The words below the national emblem read:", optionA: "Satyameva Jayate", optionB: "Vande Mataram", optionC: "Jai Hind", optionD: "Sare Jahan Se Achha", correctOption: "A", explanation: "'Satyameva Jayate' ('Truth alone triumphs') appears below the emblem.", orderIndex: 8 },
  { id: "ssc-cgl-general-awareness-static-gk-q10", topicId: "ssc-cgl-general-awareness-static-gk", text: "The national river of India is the:", optionA: "Ganga", optionB: "Yamuna", optionC: "Godavari", optionD: "Narmada", correctOption: "A", explanation: "The Ganga is declared the national river of India.", orderIndex: 9 },
  { id: "ssc-cgl-general-awareness-static-gk-q11", topicId: "ssc-cgl-general-awareness-static-gk", text: "The national aquatic animal of India is the:", optionA: "Ganges River Dolphin", optionB: "Blue Whale", optionC: "Sea Turtle", optionD: "Crocodile", correctOption: "A", explanation: "The Ganges River Dolphin is the national aquatic animal.", orderIndex: 10 },
  { id: "ssc-cgl-general-awareness-static-gk-q12", topicId: "ssc-cgl-general-awareness-static-gk", text: "The symbol of the Indian Rupee (₹) was designed by:", optionA: "Udaya Kumar", optionB: "Nandan Nilekani", optionC: "Raghuram Rajan", optionD: "M. F. Husain", correctOption: "A", explanation: "The ₹ symbol was designed by Udaya Kumar and adopted in 2010.", orderIndex: 11 },

  // ── Sports GK ──
  { id: "ssc-cgl-general-awareness-sports-q01", topicId: "ssc-cgl-general-awareness-sports", text: "The number of players in a cricket team is:", optionA: "11", optionB: "10", optionC: "12", optionD: "9", correctOption: "A", explanation: "A cricket team fields 11 players.", orderIndex: 0 },
  { id: "ssc-cgl-general-awareness-sports-q02", topicId: "ssc-cgl-general-awareness-sports", text: "The number of players in a football (soccer) team is:", optionA: "11", optionB: "9", optionC: "7", optionD: "5", correctOption: "A", explanation: "A football team has 11 players on the field.", orderIndex: 1 },
  { id: "ssc-cgl-general-awareness-sports-q03", topicId: "ssc-cgl-general-awareness-sports", text: "The term 'love' (meaning zero) is used in:", optionA: "Tennis", optionB: "Cricket", optionC: "Hockey", optionD: "Chess", correctOption: "A", explanation: "In tennis scoring, 'love' means a score of zero.", orderIndex: 2 },
  { id: "ssc-cgl-general-awareness-sports-q04", topicId: "ssc-cgl-general-awareness-sports", text: "Wimbledon is a famous tournament in:", optionA: "Tennis", optionB: "Golf", optionC: "Cricket", optionD: "Badminton", correctOption: "A", explanation: "Wimbledon is one of the four tennis Grand Slams.", orderIndex: 3 },
  { id: "ssc-cgl-general-awareness-sports-q05", topicId: "ssc-cgl-general-awareness-sports", text: "A 'century' in cricket means scoring:", optionA: "100 runs", optionB: "50 runs", optionC: "10 wickets", optionD: "6 runs", correctOption: "A", explanation: "A century is 100 runs by a batsman.", orderIndex: 4 },
  { id: "ssc-cgl-general-awareness-sports-q06", topicId: "ssc-cgl-general-awareness-sports", text: "The Summer Olympic Games are held every:", optionA: "4 years", optionB: "2 years", optionC: "5 years", optionD: "6 years", correctOption: "A", explanation: "The Olympics are held once every four years.", orderIndex: 5 },
  { id: "ssc-cgl-general-awareness-sports-q07", topicId: "ssc-cgl-general-awareness-sports", text: "The number of players on court in a basketball team is:", optionA: "5", optionB: "6", optionC: "7", optionD: "11", correctOption: "A", explanation: "A basketball team has 5 players on the court.", orderIndex: 6 },
  { id: "ssc-cgl-general-awareness-sports-q08", topicId: "ssc-cgl-general-awareness-sports", text: "The Ashes is a Test cricket series played between England and:", optionA: "Australia", optionB: "India", optionC: "South Africa", optionD: "New Zealand", correctOption: "A", explanation: "The Ashes is contested between England and Australia.", orderIndex: 7 },
  { id: "ssc-cgl-general-awareness-sports-q09", topicId: "ssc-cgl-general-awareness-sports", text: "'Checkmate' is a term in:", optionA: "Chess", optionB: "Carrom", optionC: "Table tennis", optionD: "Boxing", correctOption: "A", explanation: "Checkmate ends a game of chess.", orderIndex: 8 },
  { id: "ssc-cgl-general-awareness-sports-q10", topicId: "ssc-cgl-general-awareness-sports", text: "The number of players in a Kabaddi team (on the mat) is:", optionA: "7", optionB: "9", optionC: "11", optionD: "5", correctOption: "A", explanation: "A Kabaddi team has 7 players on the mat.", orderIndex: 9 },
  { id: "ssc-cgl-general-awareness-sports-q11", topicId: "ssc-cgl-general-awareness-sports", text: "The Ryder Cup is associated with:", optionA: "Golf", optionB: "Tennis", optionC: "Cricket", optionD: "Rugby", correctOption: "A", explanation: "The Ryder Cup is a team golf competition.", orderIndex: 10 },
  { id: "ssc-cgl-general-awareness-sports-q12", topicId: "ssc-cgl-general-awareness-sports", text: "India's highest sporting award is the:", optionA: "Major Dhyan Chand Khel Ratna Award", optionB: "Arjuna Award", optionC: "Dronacharya Award", optionD: "Padma Shri", correctOption: "A", explanation: "The Major Dhyan Chand Khel Ratna is India's highest sporting honour.", orderIndex: 11 },

  // ── Computer & IT Awareness ──
  { id: "ssc-cgl-general-awareness-computer-awareness-q01", topicId: "ssc-cgl-general-awareness-computer-awareness", text: "CPU stands for:", optionA: "Central Processing Unit", optionB: "Computer Personal Unit", optionC: "Central Program Unit", optionD: "Control Processing Utility", correctOption: "A", explanation: "CPU = Central Processing Unit, the computer's main processor.", orderIndex: 0 },
  { id: "ssc-cgl-general-awareness-computer-awareness-q02", topicId: "ssc-cgl-general-awareness-computer-awareness", text: "RAM stands for:", optionA: "Random Access Memory", optionB: "Read Access Memory", optionC: "Rapid Access Module", optionD: "Random Active Memory", correctOption: "A", explanation: "RAM = Random Access Memory, volatile working memory.", orderIndex: 1 },
  { id: "ssc-cgl-general-awareness-computer-awareness-q03", topicId: "ssc-cgl-general-awareness-computer-awareness", text: "The 'brain' of a computer is the:", optionA: "CPU", optionB: "Monitor", optionC: "Keyboard", optionD: "Printer", correctOption: "A", explanation: "The CPU processes instructions and is called the brain of the computer.", orderIndex: 2 },
  { id: "ssc-cgl-general-awareness-computer-awareness-q04", topicId: "ssc-cgl-general-awareness-computer-awareness", text: "One byte equals how many bits?", optionA: "8", optionB: "4", optionC: "16", optionD: "2", correctOption: "A", explanation: "One byte is made up of 8 bits.", orderIndex: 3 },
  { id: "ssc-cgl-general-awareness-computer-awareness-q05", topicId: "ssc-cgl-general-awareness-computer-awareness", text: "WWW stands for:", optionA: "World Wide Web", optionB: "World Web Wide", optionC: "Wide World Web", optionD: "Web World Wide", correctOption: "A", explanation: "WWW = World Wide Web.", orderIndex: 4 },
  { id: "ssc-cgl-general-awareness-computer-awareness-q06", topicId: "ssc-cgl-general-awareness-computer-awareness", text: "The physical components of a computer are called:", optionA: "Hardware", optionB: "Software", optionC: "Firmware", optionD: "Malware", correctOption: "A", explanation: "Hardware refers to the tangible parts of a computer.", orderIndex: 5 },
  { id: "ssc-cgl-general-awareness-computer-awareness-q07", topicId: "ssc-cgl-general-awareness-computer-awareness", text: "A set of instructions/programs that runs a computer is called:", optionA: "Software", optionB: "Hardware", optionC: "A monitor", optionD: "A keyboard", correctOption: "A", explanation: "Software is the programs that direct the hardware.", orderIndex: 6 },
  { id: "ssc-cgl-general-awareness-computer-awareness-q08", topicId: "ssc-cgl-general-awareness-computer-awareness", text: "The keyboard shortcut to copy selected text is:", optionA: "Ctrl + C", optionB: "Ctrl + V", optionC: "Ctrl + X", optionD: "Ctrl + Z", correctOption: "A", explanation: "Ctrl + C copies; Ctrl + V pastes.", orderIndex: 7 },
  { id: "ssc-cgl-general-awareness-computer-awareness-q09", topicId: "ssc-cgl-general-awareness-computer-awareness", text: "The keyboard shortcut to paste is:", optionA: "Ctrl + V", optionB: "Ctrl + C", optionC: "Ctrl + P", optionD: "Ctrl + S", correctOption: "A", explanation: "Ctrl + V pastes copied content.", orderIndex: 8 },
  { id: "ssc-cgl-general-awareness-computer-awareness-q10", topicId: "ssc-cgl-general-awareness-computer-awareness", text: "A common device used to point and click is the:", optionA: "Mouse", optionB: "Printer", optionC: "Speaker", optionD: "Scanner", correctOption: "A", explanation: "The mouse is a pointing input device.", orderIndex: 9 },
  { id: "ssc-cgl-general-awareness-computer-awareness-q11", topicId: "ssc-cgl-general-awareness-computer-awareness", text: "Email stands for:", optionA: "Electronic mail", optionB: "Express mail", optionC: "Electric mail", optionD: "Extra mail", correctOption: "A", explanation: "Email = electronic mail.", orderIndex: 10 },
  { id: "ssc-cgl-general-awareness-computer-awareness-q12", topicId: "ssc-cgl-general-awareness-computer-awareness", text: "The main circuit board of a computer is the:", optionA: "Motherboard", optionB: "Hard disk", optionC: "Monitor", optionD: "Mouse", correctOption: "A", explanation: "The motherboard connects and links all the computer's components.", orderIndex: 11 }
];
