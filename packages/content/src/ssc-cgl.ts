import { defineBundle } from "./builder";
import { sscTopUp } from "./ssc-cgl-exp1";
import { sscQuant2Topics, sscQuant2Materials, sscQuant2Questions } from "./ssc-cgl-exp2";
import { ssc3Topics, ssc3Materials, ssc3Questions } from "./ssc-cgl-exp3";
import { ssc4Topics, ssc4Materials, ssc4Questions } from "./ssc-cgl-exp4";
import { ssc5Topics, ssc5Materials, ssc5Questions } from "./ssc-cgl-exp5";

export const sscCgl = defineBundle({
  exam: {
    id: "ssc-cgl",
    slug: "ssc-cgl",
    name: "SSC CGL",
    tagline: "Quant · Reasoning · English · General Awareness",
    orderIndex: 3
  },
  subjects: [
    { id: "ssc-cgl-quant", examId: "ssc-cgl", name: "Quantitative Aptitude", slug: "quant", orderIndex: 0 },
    { id: "ssc-cgl-reasoning", examId: "ssc-cgl", name: "Reasoning", slug: "reasoning", orderIndex: 1 },
    { id: "ssc-cgl-english", examId: "ssc-cgl", name: "English", slug: "english", orderIndex: 2 },
    { id: "ssc-cgl-general-awareness", examId: "ssc-cgl", name: "General Awareness", slug: "general-awareness", orderIndex: 3 }
  ],
  topics: [
    {
      id: "ssc-cgl-quant-percentages-profit-loss",
      subjectId: "ssc-cgl-quant",
      name: "Percentages & Profit-Loss",
      slug: "percentages-profit-loss",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-time-speed-distance",
      subjectId: "ssc-cgl-quant",
      name: "Time, Speed & Distance",
      slug: "time-speed-distance",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series",
      subjectId: "ssc-cgl-reasoning",
      name: "Coding-Decoding & Series",
      slug: "coding-decoding-series",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-idioms-one-word",
      subjectId: "ssc-cgl-english",
      name: "Idioms & One-Word Substitution",
      slug: "idioms-one-word",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts",
      subjectId: "ssc-cgl-general-awareness",
      name: "Indian Polity Quick Facts",
      slug: "indian-polity-facts",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-ratio-proportion",
      subjectId: "ssc-cgl-quant",
      name: "Ratio & Proportion",
      slug: "ratio-proportion",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-quant-averages",
      subjectId: "ssc-cgl-quant",
      name: "Averages",
      slug: "averages",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-quant-simple-compound-interest",
      subjectId: "ssc-cgl-quant",
      name: "Simple & Compound Interest",
      slug: "simple-compound-interest",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-quant-time-and-work",
      subjectId: "ssc-cgl-quant",
      name: "Time & Work",
      slug: "time-and-work",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-quant-number-system",
      subjectId: "ssc-cgl-quant",
      name: "Number System (LCM/HCF)",
      slug: "number-system",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-quant-mensuration",
      subjectId: "ssc-cgl-quant",
      name: "Mensuration",
      slug: "mensuration",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-quant-algebra-basics",
      subjectId: "ssc-cgl-quant",
      name: "Algebra Basics",
      slug: "algebra-basics",
      orderIndex: 8
    },
    {
      id: "ssc-cgl-quant-trigonometry",
      subjectId: "ssc-cgl-quant",
      name: "Trigonometry",
      slug: "trigonometry",
      orderIndex: 9
    },
    {
      id: "ssc-cgl-quant-geometry",
      subjectId: "ssc-cgl-quant",
      name: "Geometry",
      slug: "geometry",
      orderIndex: 10
    },
    {
      id: "ssc-cgl-quant-data-interpretation",
      subjectId: "ssc-cgl-quant",
      name: "Data Interpretation",
      slug: "data-interpretation",
      orderIndex: 11
    },
    {
      id: "ssc-cgl-reasoning-analogy-classification",
      subjectId: "ssc-cgl-reasoning",
      name: "Analogy & Classification",
      slug: "analogy-classification",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-reasoning-blood-relations",
      subjectId: "ssc-cgl-reasoning",
      name: "Blood Relations",
      slug: "blood-relations",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-reasoning-direction-sense",
      subjectId: "ssc-cgl-reasoning",
      name: "Direction Sense",
      slug: "direction-sense",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-reasoning-syllogism",
      subjectId: "ssc-cgl-reasoning",
      name: "Syllogism",
      slug: "syllogism",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-reasoning-seating-puzzles",
      subjectId: "ssc-cgl-reasoning",
      name: "Seating Arrangement & Puzzles",
      slug: "seating-puzzles",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-reasoning-clock-calendar",
      subjectId: "ssc-cgl-reasoning",
      name: "Clock & Calendar",
      slug: "clock-calendar",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-reasoning-mirror-paper-folding",
      subjectId: "ssc-cgl-reasoning",
      name: "Non-Verbal: Mirror & Paper Folding",
      slug: "mirror-paper-folding",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-reasoning-statement-conclusion",
      subjectId: "ssc-cgl-reasoning",
      name: "Statement & Conclusion",
      slug: "statement-conclusion",
      orderIndex: 8
    },
    {
      id: "ssc-cgl-english-synonyms-antonyms",
      subjectId: "ssc-cgl-english",
      name: "Synonyms & Antonyms",
      slug: "synonyms-antonyms",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-english-spotting-errors",
      subjectId: "ssc-cgl-english",
      name: "Spotting Errors",
      slug: "spotting-errors",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-english-sentence-improvement-spelling",
      subjectId: "ssc-cgl-english",
      name: "Sentence Improvement & Spelling",
      slug: "sentence-improvement-spelling",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-english-reading-comprehension",
      subjectId: "ssc-cgl-english",
      name: "Reading Comprehension",
      slug: "reading-comprehension",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-english-active-passive-voice",
      subjectId: "ssc-cgl-english",
      name: "Active & Passive Voice",
      slug: "active-passive-voice",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-english-cloze-test",
      subjectId: "ssc-cgl-english",
      name: "Cloze Test",
      slug: "cloze-test",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-general-awareness-history",
      subjectId: "ssc-cgl-general-awareness",
      name: "Static GK: History",
      slug: "history",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-general-awareness-geography",
      subjectId: "ssc-cgl-general-awareness",
      name: "Static GK: Geography",
      slug: "geography",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-general-awareness-general-science",
      subjectId: "ssc-cgl-general-awareness",
      name: "General Science Facts",
      slug: "general-science",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-general-awareness-economy-basics",
      subjectId: "ssc-cgl-general-awareness",
      name: "Indian Economy Basics",
      slug: "economy-basics",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-general-awareness-days-current-affairs",
      subjectId: "ssc-cgl-general-awareness",
      name: "Important Days & Current Affairs",
      slug: "days-current-affairs",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-general-awareness-books-authors-awards",
      subjectId: "ssc-cgl-general-awareness",
      name: "Books, Authors & Awards",
      slug: "books-authors-awards",
      orderIndex: 6
    },
    ...sscQuant2Topics,
    ...ssc3Topics,
    ...ssc4Topics,
    ...ssc5Topics
  ],
  materials: [
    {
      id: "ssc-cgl-quant-percentages-profit-loss-m01",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      title: "Percentages, Profit & Loss",
      content: `**Percentage** means "per hundred". Mastering fraction equivalents turns slow calculations into mental math.

## Must-Know Fraction Equivalents
| Fraction | Percent |
| --- | --- |
| 1/2 | 50% |
| 1/4 | 25% |
| 1/5 | 20% |
| 1/8 | 12.5% |
| 1/3 | 33.33% |

## Successive Percentage Change
For two successive changes of **a%** and **b%**, the net change is:

\`\`\`
Net% = a + b + (a*b)/100
\`\`\`

For example, a 10% rise then a 10% fall gives 10 − 10 − 100/100 = **−1%** (a net loss).

## Profit & Loss
- **Profit% = (Profit / CP) × 100**, always on the **Cost Price**.
- **SP = CP × (100 + Profit%) / 100**.
- **Discount** is calculated on the **Marked Price**, not the cost.

| Quantity | Formula |
| --- | --- |
| Profit | SP − CP |
| Loss | CP − SP |
| Profit% | (SP − CP)/CP × 100 |

### Shortcuts
- If an article is sold at **x% profit** and **y% loss** gives the same SP, the relation links both cost prices.
- Selling two items at the same SP, one at **+x%** and one at **−x%**, always gives a **net loss of (x/10)²%**.
- **Marked price → discount → SP**: SP = MP × (100 − discount%)/100.

### Population/Growth
- A quantity changing by r% per year for n years becomes **P(1 + r/100)ⁿ**, the compound-growth form.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-m01",
      topicId: "ssc-cgl-quant-time-speed-distance",
      title: "Time, Speed & Distance",
      content: `**Speed = Distance / Time.** Almost every TSD problem is a rearrangement of this single relation.

## Core Formulae
\`\`\`
Distance = Speed * Time
Speed    = Distance / Time
1 km/h   = 5/18 m/s
1 m/s    = 18/5 km/h
\`\`\`

## Average Speed
- For equal **distances** at speeds u and v, average speed = **2uv / (u + v)** (the harmonic mean).
- For equal **times**, average speed is the simple mean (u + v)/2.

## Relative Speed
| Case | Relative speed |
| --- | --- |
| Same direction | difference of speeds |
| Opposite direction | sum of speeds |

## Trains
- Time to cross a **pole** = (train length) / speed.
- Time to cross a **platform** = (train length + platform length) / speed.

### Boats & Streams
- **Downstream speed** = boat speed + stream speed.
- **Upstream speed** = boat speed − stream speed.
- Boat speed = (down + up)/2; stream speed = (down − up)/2.

### Key Tips
- If speed and time are **inversely proportional** for a fixed distance, then doubling speed halves the time.
- A common trap: average speed is **never** the simple average of two speeds over equal distances — use the harmonic mean.
- Convert units first: to find time in seconds, keep speed in m/s and distance in metres.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-m01",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      title: "Coding-Decoding & Series",
      content: `**Coding-Decoding** tests pattern recognition by substituting letters or numbers using a hidden rule.

## Letter Positions
Memorise these anchor positions to decode shifts quickly:

| Letter | Position |
| --- | --- |
| A | 1 |
| E | 5 |
| J | 10 |
| O | 15 |
| T | 20 |
| Z | 26 |

The **EJOTY** trick (E-5, J-10, O-15, T-20, Y-25) lets you locate any letter in seconds.

## Common Coding Types
- **Letter-shift coding** — each letter moves forward/backward by a fixed number (e.g. +1: CAT → DBU).
- **Reverse / opposite coding** — A↔Z, B↔Y... (the *position from the other end* is 27 − n).
- **Number coding** — letters replaced by their positional value.
- **Symbol/substitution coding** — words swapped wholesale.

## Number & Letter Series
- Look for differences (arithmetic), ratios (geometric), squares/cubes, or alternating patterns.
- **Example:** 2, 6, 12, 20, 30 → differences 4, 6, 8, 10 (i.e. n² + n).
- **Fibonacci-type:** each term is the sum of the previous two (1, 1, 2, 3, 5, 8...).

### Strategy
- First check the **difference between consecutive terms**; if not constant, check the difference of differences or a multiplicative rule.
- For mixed series, separate alternate terms into two sub-series.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-idioms-one-word-m01",
      topicId: "ssc-cgl-english-idioms-one-word",
      title: "Idioms & One-Word Substitution",
      content: `**Idioms** carry a figurative meaning beyond their literal words, and **one-word substitutions** compress a phrase into a single precise term. Both are scoring areas in SSC English.

## High-Frequency Idioms
| Idiom | Meaning |
| --- | --- |
| To bite the dust | To be defeated / die |
| A blessing in disguise | A hidden benefit |
| To let the cat out of the bag | To reveal a secret |
| Once in a blue moon | Very rarely |
| To turn a blind eye | To deliberately ignore |
| To burn the midnight oil | To work late into the night |

## Common One-Word Substitutions
| Phrase | Word |
| --- | --- |
| One who eats everything | **Omnivore** |
| A person who hates mankind | **Misanthrope** |
| Words written on a tomb | **Epitaph** |
| One who walks on a rope | **Funambulist** |
| Study of birds | **Ornithology** |
| A government by the wealthy | **Plutocracy** |

### Quick Tips
- Watch the **root**: *-cide* (killing), *-phobia* (fear), *-cracy* (rule), *-vorous* (eating), *-logy* (study).
- For idioms, never read literally — pick the figurative option (e.g. "at the eleventh hour" means **at the last moment**, not 11 o'clock).
- A person who **cannot read or write** is *illiterate*; one **indifferent to pleasure or pain** is *stoic*.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-m01",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      title: "Indian Polity — Quick Facts",
      content: `**Indian Polity** is a guaranteed GA scorer. These crisp facts repeat year after year in SSC papers.

## The Constitution
- **Adopted:** 26 November 1949; **came into force:** 26 January 1950.
- **Drafting Committee Chairman:** Dr. **B.R. Ambedkar**.
- It originally had **395 Articles, 22 Parts and 8 Schedules**; now over 470 Articles and **12 Schedules**.
- Borrowed features: **Parliamentary system** (UK), **Fundamental Rights** (USA), **Directive Principles** (Ireland), **Emergency** (Germany).

## Key Office-Holders & Articles
| Office | Article |
| --- | --- |
| President | 52 |
| Vice-President | 63 |
| Prime Minister | 75 |
| Comptroller & Auditor General | 148 |
| Attorney General | 76 |

## Amendments & Schedules
- The **42nd Amendment (1976)** is the "Mini-Constitution"; it added the words **Socialist, Secular** and **Integrity** to the Preamble.
- **Fundamental Duties** (Article 51A) were added on the recommendation of the **Swaran Singh Committee**.
- The **Eighth Schedule** lists the **22 official languages**.

### Elections & Bodies
- The **Election Commission** (Article 324) is a multi-member constitutional body.
- A **President** is elected by an electoral college using the **single transferable vote** and proportional representation.
- The **Finance Commission** (Article 280) is constituted every **five years** to recommend tax-revenue sharing.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-ratio-proportion-m01",
      topicId: "ssc-cgl-quant-ratio-proportion",
      title: "Ratio & Proportion",
      content: `A **ratio** compares two quantities of the same kind; a **proportion** states that two ratios are equal.

## Core Ideas
- A ratio a : b means a/b; multiply or divide both terms by the same number to get equivalent ratios.
- In a proportion **a : b :: c : d**, the product of extremes equals the product of means.

\`\`\`
If a/b = c/d  then  a*d = b*c
Mean proportional of a and b = sqrt(a*b)
\`\`\`

## Dividing a Quantity
To split N in the ratio a : b : c, give each part its share of the total parts:

| Part | Share |
| --- | --- |
| First | N * a/(a+b+c) |
| Second | N * b/(a+b+c) |
| Third | N * c/(a+b+c) |

## Shortcuts
- If x : y = a : b and y : z = c : d, then **x : y : z = ac : bc : bd**.
- To compare ratios, cross-multiply: a/b vs c/d, compare **a*d** with **b*c**.
- **Componendo-Dividendo:** if a/b = c/d then (a+b)/(a-b) = (c+d)/(c-d).

### Common Traps
- A ratio has **no units**; never attach kg or rupees to the answer ratio itself.
- "Increase 2 : 3 to make it 3 : 4" requires adding to *both* terms, not one.
- When ages are in a ratio "after n years", add n to each present age before forming the new ratio.

### Quick Practice Logic
If incomes are 3 : 4 and savings 1 : 2 are equal in rupees only when expenditures match, always set the common multiple as **k** and solve a single linear equation.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-averages-m01",
      topicId: "ssc-cgl-quant-averages",
      title: "Averages",
      content: `The **average** (arithmetic mean) is the total divided by the count. SSC loves "new average after a change" questions.

## Core Formulae
\`\`\`
Average = Sum of observations / Number of observations
Sum     = Average * Number
\`\`\`

## Handy Results
| Set | Average |
| --- | --- |
| First n natural numbers | (n + 1)/2 |
| First n odd numbers | n |
| First n even numbers | n + 1 |
| n consecutive numbers | middle (or mean of ends) |

## Change Shortcuts
- If a new value replaces an old one and the average rises by **d** across **n** items, the new value exceeds the old by **n * d**.
- When a person joins or leaves a group and shifts the average, the **difference** equals (change in average) multiplied by the **new count**.

### Weighted Average
For groups of sizes n1, n2 with averages A1, A2:

\`\`\`
Weighted avg = (n1*A1 + n2*A2) / (n1 + n2)
\`\`\`

### Common Traps
- The average speed over equal **distances** is the **harmonic mean**, not the simple mean.
- Replacing the wrong value: read carefully whether a number was **added** or **replaced**.
- The average of a set does not change if every element changes by the **same** amount equal to that shift.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-simple-compound-interest-m01",
      topicId: "ssc-cgl-quant-simple-compound-interest",
      title: "Simple & Compound Interest",
      content: `Interest is the price paid for borrowed money. **Simple interest** stays flat; **compound interest** grows on itself.

## Core Formulae
\`\`\`
SI = (P * R * T) / 100
Amount (SI) = P + SI
CI = P * (1 + R/100)^T - P
\`\`\`

## SI vs CI
| Period | Relation |
| --- | --- |
| 1 year | SI = CI |
| 2 years | CI - SI = P*(R/100)^2 |

## Key Shortcuts
- **Difference for 2 years** between CI and SI = P * (R/100)^2 = SI * R / (2 * 100) approx.
- Money **doubles** under SI when R * T = 100.
- For **half-yearly** compounding, halve the rate and double the time.

### Worked Logic
At 10% for 2 years on P = 1000:

\`\`\`
SI = 1000*10*2/100 = 200
CI = 1000*(1.1^2) - 1000 = 210
Difference = 10 = 1000*(10/100)^2
\`\`\`

### Common Traps
- Time given in months must be converted to **years** (8 months = 8/12 year) for SI.
- CI compounds each period; never just multiply the first year's interest by the number of years.
- Read whether the rate is **per annum** but compounded half-yearly or quarterly.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-time-and-work-m01",
      topicId: "ssc-cgl-quant-time-and-work",
      title: "Time & Work",
      content: `**Work** problems hinge on one idea: rate of work is the reciprocal of time taken. Total work is best treated as **1 unit** or as the **LCM** of the given days.

## Core Formulae
\`\`\`
Work rate = 1 / (time to finish alone)
Combined rate = sum of individual rates
Time together = 1 / (combined rate)
\`\`\`

## LCM Method
If A does a job in 10 days and B in 15 days, set total work = LCM(10,15) = 30 units:

| Worker | Units/day |
| --- | --- |
| A | 3 |
| B | 2 |
| A + B | 5 |

So together they finish 30/5 = **6 days**.

## Shortcuts
- A in a days and B in b days finish together in **ab/(a+b)** days.
- **Efficiency** is inversely proportional to time: if A is twice as efficient as B, A takes half the time.
- **Pipes & cisterns** is the same theory; an outlet pipe has a **negative** rate.

### Common Traps
- Add **rates**, never times: two people each taking 6 days do *not* finish in 12 days.
- For "A leaves after k days", subtract the work A and B did together, then divide the rest by the remaining worker's rate.
- Man-days: **men * days = constant** for the same job.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-number-system-m01",
      topicId: "ssc-cgl-quant-number-system",
      title: "Number System (LCM & HCF)",
      content: `The **number system** covers divisibility, LCM and HCF, and remainders. These power many shortcut questions.

## LCM and HCF
- **HCF** (GCD) is the largest number dividing all given numbers.
- **LCM** is the smallest number divisible by all of them.

\`\`\`
HCF * LCM = product of the two numbers
Product = a * b  (only for two numbers)
\`\`\`

## Divisibility Rules
| Divisor | Rule |
| --- | --- |
| 3 | digit sum divisible by 3 |
| 4 | last two digits divisible by 4 |
| 8 | last three digits divisible by 8 |
| 9 | digit sum divisible by 9 |
| 11 | alternating digit-sum difference divisible by 11 |

## Shortcuts
- **HCF of fractions** = HCF(numerators)/LCM(denominators).
- **LCM of fractions** = LCM(numerators)/HCF(denominators).
- Greatest number dividing a, b, c leaving the **same remainder** = HCF of the differences.

### Common Traps
- The relation HCF * LCM = product holds for **two** numbers only, not three.
- "Least number that when divided by 5, 6, 7 leaves remainder 2" = **LCM + 2**.
- A prime has exactly two factors; **1 is not prime**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-mensuration-m01",
      topicId: "ssc-cgl-quant-mensuration",
      title: "Mensuration",
      content: `**Mensuration** is the geometry of areas, perimeters and volumes. Memorising the standard formulae is the whole battle.

## 2D Formulae
| Shape | Area | Perimeter |
| --- | --- | --- |
| Square | side^2 | 4*side |
| Rectangle | l*b | 2(l+b) |
| Triangle | (1/2)*b*h | a+b+c |
| Circle | pi*r^2 | 2*pi*r |

\`\`\`
Equilateral triangle area = (sqrt(3)/4) * side^2
Diagonal of square = side * sqrt(2)
\`\`\`

## 3D Formulae
| Solid | Volume | Curved/Total Surface |
| --- | --- | --- |
| Cube | a^3 | TSA = 6*a^2 |
| Cuboid | l*b*h | TSA = 2(lb+bh+hl) |
| Cylinder | pi*r^2*h | CSA = 2*pi*r*h |
| Sphere | (4/3)*pi*r^3 | SA = 4*pi*r^2 |

## Shortcuts
- Use **pi = 22/7** when the radius is a multiple of 7; otherwise 3.14.
- If every dimension scales by k, **area scales by k^2** and **volume by k^3**.

### Common Traps
- Mixing CSA (curved) with TSA (total) for cylinders and cones.
- Cone volume is **one-third** of a cylinder with the same base and height.
- Always match units before computing; convert cm to m first.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-algebra-basics-m01",
      topicId: "ssc-cgl-quant-algebra-basics",
      title: "Algebra Basics",
      content: `**Algebra** in SSC is mostly identities and quick substitution. Knowing the standard identities saves heavy computation.

## Standard Identities
\`\`\`
(a + b)^2 = a^2 + 2ab + b^2
(a - b)^2 = a^2 - 2ab + b^2
a^2 - b^2 = (a + b)(a - b)
(a + b)^3 = a^3 + b^3 + 3ab(a + b)
a^3 + b^3 = (a + b)(a^2 - ab + b^2)
\`\`\`

## High-Yield Results
| Given | Useful form |
| --- | --- |
| a + 1/a = k | a^2 + 1/a^2 = k^2 - 2 |
| a - 1/a = k | a^2 + 1/a^2 = k^2 + 2 |
| a + b + c = 0 | a^3 + b^3 + c^3 = 3abc |

## Shortcuts
- Sum and product of roots of **ax^2 + bx + c = 0**: sum = -b/a, product = c/a.
- To find a^3 + 1/a^3 from a + 1/a = k, use **k^3 - 3k**.

### Common Traps
- Sign errors in (a - b)^2; the middle term is **-2ab**.
- a^2 - b^2 factorises, but a^2 + b^2 does **not** over the reals.
- When a + b + c = 0, the identity a^3 + b^3 + c^3 = 3abc applies only under that condition.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-trigonometry-m01",
      topicId: "ssc-cgl-quant-trigonometry",
      title: "Trigonometry",
      content: `**Trigonometry** questions reward memorised standard angles and the three Pythagorean identities.

## Standard Values
| Angle | sin | cos | tan |
| --- | --- | --- | --- |
| 0 | 0 | 1 | 0 |
| 30 | 1/2 | sqrt(3)/2 | 1/sqrt(3) |
| 45 | 1/sqrt(2) | 1/sqrt(2) | 1 |
| 60 | sqrt(3)/2 | 1/2 | sqrt(3) |
| 90 | 1 | 0 | undefined |

## Key Identities
\`\`\`
sin^2(x) + cos^2(x) = 1
1 + tan^2(x) = sec^2(x)
1 + cot^2(x) = cosec^2(x)
\`\`\`

## Complementary Angles
- **sin(90 - x) = cos(x)** and **tan(90 - x) = cot(x)**.
- This swap solves most "sin 40 / cos 50" style simplifications instantly.

### Heights & Distances
- Angle of elevation uses **tan = height / base**.
- A 45-degree elevation means **height equals horizontal distance**.

### Common Traps
- tan 90 and sec 90 are **undefined**, not zero.
- Mixing degrees and the identity forms; keep angles consistent.
- Remember **cosec and sec** are reciprocals of sin and cos, not of tan.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-geometry-m01",
      topicId: "ssc-cgl-quant-geometry",
      title: "Geometry",
      content: `**Geometry** for SSC centres on triangles, circles and angle properties. A few theorems cover most questions.

## Triangle Facts
- Angle sum of a triangle is **180 degrees**; exterior angle equals the sum of the two opposite interior angles.
- **Pythagoras:** in a right triangle, hypotenuse^2 = base^2 + height^2.

\`\`\`
Common Pythagorean triples: (3,4,5), (5,12,13), (8,15,17), (7,24,25)
\`\`\`

## Centres of a Triangle
| Centre | Defined by |
| --- | --- |
| Centroid | medians, divides 2:1 |
| Incentre | angle bisectors |
| Circumcentre | perpendicular bisectors |
| Orthocentre | altitudes |

## Circle Properties
- The angle in a **semicircle is 90 degrees**.
- The angle at the centre is **twice** the angle at the circumference on the same arc.
- Tangent meets the radius at a **right angle**.

### Polygon Angles
- Sum of interior angles of an n-sided polygon = **(n - 2) * 180** degrees.
- Each exterior angle of a regular polygon = **360 / n**.

### Common Traps
- The centroid divides each median **2:1** from the vertex, not the midpoint.
- Equal chords are equidistant from the centre, but only within the **same** circle.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-data-interpretation-m01",
      topicId: "ssc-cgl-quant-data-interpretation",
      title: "Data Interpretation",
      content: `**Data Interpretation (DI)** tests speed in reading tables, bar charts and pie charts, then applying percentage and average logic.

## Core Tools
\`\`\`
Percentage change = (new - old) / old * 100
Share in pie chart = (category value / total) * 360 degrees
Average = total / number of categories
\`\`\`

## Sample Table
| Year | Sales (units) |
| --- | --- |
| 2021 | 200 |
| 2022 | 250 |
| 2023 | 300 |

From 2021 to 2022 the rise is (250-200)/200 = **25%**.

## Reading Pie Charts
- A full circle is **360 degrees** = 100%; so 90 degrees is one quarter of the total.
- To convert a degree slice to a value: (slice / 360) * grand total.

### Strategy
- Read the **question first**, then scan only the rows or slices you need.
- Approximate large divisions to the nearest round figure to eliminate options fast.
- Keep a running note of the **total** since most sub-questions reuse it.

### Common Traps
- Confusing **percentage point** change with **percentage** change.
- Reading the wrong axis or mislabelling the legend in a multi-bar chart.
- Assuming the largest slice is always more than half; it may only be the biggest of many.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-analogy-classification-m01",
      topicId: "ssc-cgl-reasoning-analogy-classification",
      title: "Analogy & Classification",
      content: `**Analogy** finds the relationship in a given pair and applies it to a new pair; **classification** spots the odd one out.

## Common Relationship Types
| Type | Example |
| --- | --- |
| Synonym | Big : Large |
| Antonym | Hot : Cold |
| Part-whole | Wheel : Car |
| Worker-tool | Carpenter : Saw |
| Cause-effect | Rain : Flood |

## Number Analogy
- Look for **squares, cubes, multiples or differences**.
- Example: 4 : 16 :: 5 : 25 (each squared).

\`\`\`
Square pattern: n : n^2
Cube pattern:   n : n^3
\`\`\`

## Classification (Odd One Out)
- Group items by a shared property: living vs non-living, prime vs composite, fruit vs vegetable.
- The odd one breaks the single rule shared by all the others.

### Strategy
- Name the relationship in **words** before scanning the options.
- For letters, check positional gaps; for numbers, check arithmetic links.

### Common Traps
- Choosing a pair with the **right** relationship but in **reversed order**.
- Overlooking a second valid grouping; pick the **most specific** common rule.
- In odd-one-out, more than one answer may seem to fit, so confirm the rule covers exactly the rest.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-blood-relations-m01",
      topicId: "ssc-cgl-reasoning-blood-relations",
      title: "Blood Relations",
      content: `**Blood relation** questions test family-tree logic. Drawing a quick diagram beats reading the sentence repeatedly.

## Notation
| Symbol | Meaning |
| --- | --- |
| + | male |
| - | female |
| = | married couple |
| line | parent-child link |

## Key Relations
- **Maternal** = mother's side; **paternal** = father's side.
- Father's brother is **paternal uncle**; mother's brother is **maternal uncle**.
- Your son's wife is your **daughter-in-law**.

## Strategy
- Convert each statement into a small diagram, placing males and females on either side.
- Work from the **fixed person** outward, one relation at a time.
- For "pointing at a photo" puzzles, resolve the speaker's relation **last**.

\`\`\`
"He is the son of my mother's only son" -> the speaker's own son
\`\`\`

### Common Traps
- Assuming gender: "spouse of my sibling" could be brother-in-law or sister-in-law.
- Confusing **generation levels**; an uncle and a cousin are not the same generation.
- "Only son of my grandfather" need not be your father if the grandfather is maternal.

### Quick Check
Always verify the final relation by reading the chain **backwards** from the target to the speaker.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-direction-sense-m01",
      topicId: "ssc-cgl-reasoning-direction-sense",
      title: "Direction Sense",
      content: `**Direction sense** tracks movement across the compass and the final displacement. A neat sketch prevents errors.

## The Compass
\`\`\`
        North
West  +  East
       South
\`\`\`

- A **right turn** rotates clockwise; a **left turn** rotates anticlockwise.
- At sunrise, shadows fall towards the **west**; at sunset, towards the **east**.

## Distance Shortcut
When a path forms a right angle, the straight-line (shortest) distance uses **Pythagoras**:

\`\`\`
Shortest distance = sqrt(a^2 + b^2)
\`\`\`

| Legs | Shortest distance |
| --- | --- |
| 3 and 4 | 5 |
| 6 and 8 | 10 |
| 5 and 12 | 13 |

### Strategy
- Mark the starting point, then plot each leg with its direction and length.
- Track **net east-west** and **net north-south** displacements separately.
- The final direction from start is read off the resulting right triangle.

### Common Traps
- Mixing up left and right after the person changes facing direction.
- Forgetting that turning around (about-turn) is a **180-degree** reversal.
- At noon the shadow is shortest and points roughly north or south, not east-west.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-syllogism-m01",
      topicId: "ssc-cgl-reasoning-syllogism",
      title: "Syllogism",
      content: `**Syllogism** judges whether conclusions necessarily follow from given statements, regardless of real-world truth.

## Statement Types
| Type | Form |
| --- | --- |
| Universal positive | All A are B |
| Universal negative | No A is B |
| Particular positive | Some A are B |
| Particular negative | Some A are not B |

## Venn Diagram Method
- Draw circles for each term and test **every** possible arrangement.
- A conclusion follows only if it holds in **all** valid diagrams.

\`\`\`
All A are B + All B are C  =>  All A are C  (valid)
Some A are B + All B are C =>  Some A are C (valid)
\`\`\`

## Golden Rules
- Two **particular** statements give **no definite** conclusion.
- Two **negative** statements give no definite conclusion.
- "Some A are B" always implies "**Some B are A**" (conversion).

### Possibility Conclusions
- A "**may be true**" conclusion is valid if at least one diagram allows it.

### Common Traps
- Importing outside knowledge: ignore whether statements are factually true.
- Treating "All A are B" as meaning "All B are A" (it does **not**).
- Overlooking the complementary pair: either "Some are" or "Some are not" must follow when both are offered together.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-seating-puzzles-m01",
      topicId: "ssc-cgl-reasoning-seating-puzzles",
      title: "Seating Arrangement & Puzzles",
      content: `**Seating** and **puzzle** questions reward a clean diagram and disciplined elimination of impossible cases.

## Arrangement Types
| Type | Setup |
| --- | --- |
| Linear | a single row, all facing one way |
| Circular (facing centre) | left and right are swapped vs outward |
| Circular (facing out) | left and right match an outward viewer |
| Square/rectangle | corners and mid-sides |

## Direction Rule for Circles
\`\`\`
Facing centre  -> my right is the neighbour's clockwise side
Facing outward -> my right is the anticlockwise side
\`\`\`

## Strategy
- Start with the **most concrete** clue (a fixed seat or an exact gap).
- Use "immediate neighbour" clues to lock adjacency, then place relative clues.
- Maintain a **possibilities table** when a clue allows two placements.

### Common Traps
- Forgetting that in a **circle facing the centre**, left and right are mirror-reversed from a top view.
- Mixing "to the left of" (adjacent) with "somewhere to the left" (any seat that side).
- In linear rows, confirm whether all face **north** or some face **south** before reading left/right.

### Tip
Re-test the completed arrangement against **every** original clue before answering.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-clock-calendar-m01",
      topicId: "ssc-cgl-reasoning-clock-calendar",
      title: "Clock & Calendar",
      content: `**Clock and calendar** questions use fixed angular speeds and the concept of **odd days**.

## Clock Basics
\`\`\`
Minute hand: 6 degrees per minute
Hour hand:   0.5 degrees per minute
Angle = |30*H - 5.5*M| degrees
\`\`\`

- The hands **coincide 11 times every 12 hours**, and are at right angles **22 times** in 12 hours.
- They overlap every **65 + 5/11 minutes**.

## Calendar: Odd Days
The **odd day** is the remainder when the number of days is divided by 7.

| Period | Odd days |
| --- | --- |
| Ordinary year | 1 |
| Leap year | 2 |
| 100 years | 5 |
| 400 years | 0 |

## Leap Year Rule
- Divisible by 4, but century years only if divisible by **400** (1900 is not a leap year; 2000 is).

### Strategy
- For "day of the week", count total odd days from a known reference date.
- For clock angles, plug H and M into the angle formula and take the smaller value (under 180).

### Common Traps
- Forgetting the **0.5 degree per minute** drift of the hour hand.
- Treating every century year as a leap year.
- Using 360 - angle when the direct value is already below 180.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-mirror-paper-folding-m01",
      topicId: "ssc-cgl-reasoning-mirror-paper-folding",
      title: "Non-Verbal: Mirror & Paper Folding",
      content: `**Non-verbal reasoning** here covers **mirror images**, **water images** and **paper folding/cutting**.

## Mirror vs Water Image
| Image | Effect |
| --- | --- |
| Mirror (vertical) | left-right reversed |
| Water (horizontal) | top-bottom reversed |

\`\`\`
Mirror image: hold the figure against a vertical line on its side
Water image:  flip the figure about a horizontal line below it
\`\`\`

## Symmetric Letters
- Letters unchanged in a **vertical mirror**: A, H, I, M, O, T, U, V, W, X, Y.
- These have a vertical axis of symmetry, so they look the same when mirrored sideways.

## Paper Folding & Cutting
- When a folded paper is punched and reopened, holes appear **symmetrically** about every fold line.
- One fold gives **2** symmetric holes; two folds can give **4**.

### Strategy
- For mirror images, swap left and right while keeping top and bottom fixed.
- For punch problems, mentally **unfold step by step**, reflecting each hole across the last crease.

### Common Traps
- Confusing mirror (sideways) with water (downward) reflection.
- Forgetting that numbers and many letters change under reflection.
- Miscounting holes: each fold can **double** the number of punched holes.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-statement-conclusion-m01",
      topicId: "ssc-cgl-reasoning-statement-conclusion",
      title: "Statement & Conclusion",
      content: `**Statement and conclusion** asks whether a conclusion **logically follows** strictly from the given statement, never from outside knowledge.

## What Counts as Following
- A conclusion follows only if it is **directly supported** or is a necessary implication.
- Assumptions, courses of action and inferences are related but distinct question forms.

## Decision Grid
| Situation | Verdict |
| --- | --- |
| Clearly stated/implied | Follows |
| Needs outside facts | Does not follow |
| Restates the statement | Follows (trivially) |
| Adds new strong claim | Does not follow |

## Strategy
- Treat the statement as the **only** truth available.
- Reject conclusions that require real-world data the passage never gives.
- For two conclusions, test each **independently**, then pick the combined option.

\`\`\`
Statement: "Smoking is injurious to health."
Conclusion "One should avoid smoking" -> follows (recommendation implied)
\`\`\`

### Assumptions vs Conclusions
- An **assumption** is something taken for granted to make the statement meaningful.
- A **conclusion** is drawn after, from the statement.

### Common Traps
- Using general knowledge instead of the given text.
- Marking an overly strong or absolute conclusion as following when the statement is moderate.
- Confusing a restated idea (valid) with a brand-new claim (invalid).`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-synonyms-antonyms-m01",
      topicId: "ssc-cgl-english-synonyms-antonyms",
      title: "Synonyms & Antonyms",
      content: `**Synonyms** are words of similar meaning; **antonyms** are opposites. SSC tests a recurring high-frequency list.

## High-Frequency Synonyms
| Word | Synonym |
| --- | --- |
| Abundant | Plentiful |
| Candid | Frank |
| Lethargic | Sluggish |
| Augment | Increase |
| Benevolent | Kind |

## High-Frequency Antonyms
| Word | Antonym |
| --- | --- |
| Transparent | Opaque |
| Optimist | Pessimist |
| Condemn | Praise |
| Frugal | Extravagant |
| Amateur | Professional |

## Strategy
- Use the **root and context**: *bene-* means good, *mal-* means bad.
- Eliminate options that are the **same part of speech** but clearly off in tone.
- For antonyms, beware options that are merely **unrelated**, not opposite.

\`\`\`
Tip: read the word in a short sentence to feel its tone before matching.
\`\`\`

### Common Traps
- Picking a near-synonym when an **exact** antonym is required, or vice versa.
- Confusing similar-sounding words such as **eminent** (famous) and **imminent** (about to happen).
- Choosing a word with the right meaning but the wrong **connotation** (positive vs negative).`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-spotting-errors-m01",
      topicId: "ssc-cgl-english-spotting-errors",
      title: "Spotting Errors",
      content: `**Spotting errors** tests grammar by splitting a sentence into parts and asking which part is wrong.

## High-Yield Rules
| Area | Rule |
| --- | --- |
| Subject-verb | singular subject takes a singular verb |
| Articles | use "an" before a vowel sound |
| Prepositions | married to, comprised of (no preposition with "comprise") |
| Tense | keep tense consistent in a sentence |

## Common Error Patterns
- **Subject-verb agreement:** "One of the boys **is**" (not "are").
- **Each/every** are singular: "Each student **has** a book."
- Uncountable nouns take **singular**: "The furniture **is** new."

\`\`\`
"comprises of" is wrong -> "comprises" or "is composed of"
\`\`\`

## Strategy
- Find the **main subject** and its verb first; check agreement.
- Watch for misused prepositions and double comparatives ("more better").
- Read each segment in isolation, then as a whole.

### Common Traps
- A long phrase between subject and verb hiding the real subject.
- Collective nouns ("team", "jury") taking singular verbs in Indian English usage.
- Redundancy such as "return back" or "repeat again".

### Tip
If no segment is wrong, the answer is **No error**; do not invent a mistake.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-sentence-improvement-spelling-m01",
      topicId: "ssc-cgl-english-sentence-improvement-spelling",
      title: "Sentence Improvement & Spelling",
      content: `**Sentence improvement** asks you to replace an underlined part with the most correct, concise option; **spelling** items test commonly misspelt words.

## Improvement Checklist
| Check | Example fix |
| --- | --- |
| Tense | "has went" -> "has gone" |
| Preposition | "discuss about" -> "discuss" |
| Redundancy | "free gift" -> "gift" |
| Parallelism | "reading and to write" -> "reading and writing" |

## Commonly Misspelt Words
\`\`\`
accommodate, occurrence, definitely,
embarrass, privilege, maintenance, separate
\`\`\`

- Doubled letters trip candidates: **accommodate** has two c and two m.
- **Definitely** has no a; **separate** has an a in the middle.

## Strategy
- Pick the option that is grammatically correct **and** the most concise.
- Prefer the standard idiom over the wordy paraphrase.
- For spelling, scan for doubled consonants and tricky vowel pairs.

### Common Traps
- Choosing a grammatically correct but **wordier** option when a shorter one exists.
- "No improvement" is sometimes correct; do not change a sentence that is already right.
- Confusing pairs like **stationary** (still) and **stationery** (paper goods).`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-reading-comprehension-m01",
      topicId: "ssc-cgl-english-reading-comprehension",
      title: "Reading Comprehension",
      content: `**Reading comprehension (RC)** measures how well you extract meaning, tone and detail from a passage under time pressure.

## Question Types
| Type | What it asks |
| --- | --- |
| Factual | a detail stated directly |
| Inference | a logical implication |
| Vocabulary | meaning of a word in context |
| Tone/purpose | author's attitude or aim |
| Title | the central idea |

## Strategy
- Skim for the **main idea** first, then read the questions, then re-scan for specifics.
- For **vocabulary-in-context**, replace the word with each option and test the fit.
- Answer strictly from the **passage**, never from prior knowledge.

\`\`\`
Factual answer -> locate the exact line
Inference answer -> stay one safe step beyond the text
\`\`\`

### Tone Words
- Positive: optimistic, appreciative. Negative: critical, sceptical. Neutral: objective, descriptive.

### Common Traps
- Choosing an option that is **true in real life** but not supported by the passage.
- Picking an **extreme** statement when the author is measured.
- Over-inferring: a good inference is small and safe, not a leap.

### Tip
Eliminate two clearly wrong options first, then decide between the remaining pair using the exact wording of the text.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-active-passive-voice-m01",
      topicId: "ssc-cgl-english-active-passive-voice",
      title: "Active & Passive Voice",
      content: `In the **active voice** the subject performs the action; in the **passive voice** the subject receives it. SSC tests the conversion mechanics.

## Conversion Rule
\`\`\`
Active:  Subject + Verb + Object
Passive: Object + form of "be" + past participle + by + Subject
\`\`\`

- The **object** of the active sentence becomes the **subject** of the passive.
- Use the correct form of **be** matching the original tense.

## Tense Map
| Tense | Passive auxiliary |
| --- | --- |
| Simple present | is/am/are + V3 |
| Simple past | was/were + V3 |
| Present continuous | is/am/are being + V3 |
| Present perfect | has/have been + V3 |
| Future simple | will be + V3 |

## Strategy
- Identify the object first; it leads the passive sentence.
- Keep the **tense** unchanged; only the voice shifts.
- Modals stay: "can do" -> "can be done".

\`\`\`
Active:  "She writes a letter."
Passive: "A letter is written by her."
\`\`\`

### Common Traps
- Forgetting **by + agent**, or keeping it when the agent is obvious ("by someone" is often dropped).
- Wrong past participle (V3): "wrote" should become **written**, not "wrote".
- Pronoun case change: "She" becomes **her** as the agent.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-cloze-test-m01",
      topicId: "ssc-cgl-english-cloze-test",
      title: "Cloze Test",
      content: `A **cloze test** is a passage with blanks; you choose the word that best fits each gap in grammar and meaning.

## What Each Blank Tests
| Clue | Decide |
| --- | --- |
| Grammar | correct part of speech and tense |
| Collocation | words that naturally pair |
| Connectors | however, therefore, because |
| Tone | positive vs negative fit |

## Strategy
- Read the **whole passage** once for the theme before filling any blank.
- Use the surrounding words to judge the needed **part of speech**.
- Watch transition words: **but/however** signal contrast; **so/therefore** signal result.

\`\`\`
Contrast signal -> opposite idea ahead (but, yet, although)
Cause signal    -> reason follows (because, since, as)
\`\`\`

## Collocations
- "make a decision", "take a risk", "pay attention", "do homework" are fixed pairings tested often.

### Common Traps
- Choosing a word that fits the blank in isolation but breaks the **overall** flow.
- Ignoring a connector that demands a contrasting or causal idea.
- Picking a synonym that is grammatically wrong (noun where a verb is needed).

### Tip
After filling all blanks, **reread** the full passage to confirm it flows coherently.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-history-m01",
      topicId: "ssc-cgl-general-awareness-history",
      title: "Static GK: History",
      content: `**Indian history** facts recur in SSC GA. Focus on freedom-struggle milestones and major dynasties.

## Freedom Struggle Milestones
| Event | Year |
| --- | --- |
| First War of Independence | 1857 |
| Formation of INC | 1885 |
| Jallianwala Bagh massacre | 1919 |
| Dandi Salt March | 1930 |
| Quit India Movement | 1942 |
| Independence | 1947 |

## Key Leaders
- **Mahatma Gandhi** led the Non-Cooperation, Civil Disobedience and Quit India movements.
- **Subhas Chandra Bose** founded the **Forward Bloc** and led the INA.
- **Dadabhai Naoroji** is called the **Grand Old Man of India**.

## Ancient & Medieval
- The **Mauryan** empire peaked under **Ashoka**, who embraced Buddhism after Kalinga.
- The **Gupta** age is called the **Golden Age** of India.

### Quick Facts
\`\`\`
Indus Valley sites: Harappa, Mohenjo-daro, Lothal, Kalibangan
\`\`\`

### Common Traps
- Confusing the year of **INC formation (1885)** with the first session location (Bombay).
- Mixing up the **Dandi March (1930)** with Quit India (1942).
- Attributing Ashoka's edicts to a different dynasty; they are **Mauryan**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-geography-m01",
      topicId: "ssc-cgl-general-awareness-geography",
      title: "Static GK: Geography",
      content: `**Geography** facts in SSC span Indian physical features, rivers and world capitals.

## Indian Physical Facts
| Feature | Fact |
| --- | --- |
| Highest peak | Kanchenjunga (in India) |
| Longest river | Ganga |
| Largest state (area) | Rajasthan |
| Largest freshwater lake | Wular |

## Rivers and Their Origins
- The **Ganga** rises from **Gangotri** (Gaumukh) in Uttarakhand.
- The **Godavari** is the longest river of **peninsular India**.
- The **Tropic of Cancer** passes through **eight** Indian states.

## World Pointers
\`\`\`
Sahara: largest hot desert
Nile: traditionally the longest river
Pacific: largest and deepest ocean
\`\`\`

### Climate and Soil
- The **southwest monsoon** brings most of India's annual rainfall.
- **Black soil** (regur) suits cotton; **alluvial soil** dominates the northern plains.

### Common Traps
- Calling **Mount Everest** an Indian peak; the highest peak in India is **Kanchenjunga**.
- Confusing the longest Indian river (**Ganga**) with the longest peninsular river (**Godavari**).
- Forgetting that the Tropic of Cancer crosses India, affecting its climate zones.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-general-science-m01",
      topicId: "ssc-cgl-general-awareness-general-science",
      title: "General Science Facts",
      content: `**General science** in SSC mixes basic physics, chemistry and biology facts that repeat across years.

## Physics & Units
| Quantity | SI Unit |
| --- | --- |
| Force | Newton |
| Energy/Work | Joule |
| Power | Watt |
| Pressure | Pascal |
| Electric current | Ampere |

\`\`\`
Speed of light approx 3 * 10^8 m/s
Acceleration due to gravity g approx 9.8 m/s^2
\`\`\`

## Chemistry Pointers
- **Water** is H2O; **common salt** is sodium chloride (NaCl).
- The **pH scale** runs 0 to 14; **7 is neutral**, below 7 acidic, above 7 basic.

## Biology Pointers
- The **powerhouse of the cell** is the **mitochondrion**.
- **Photosynthesis** occurs in **chloroplasts** and releases oxygen.
- Humans have **206 bones** in the adult skeleton and **23 pairs** of chromosomes.

### Vitamins
- Vitamin **C** prevents scurvy; vitamin **D** deficiency causes rickets.

### Common Traps
- Confusing the unit of force (Newton) with energy (Joule).
- Calling pH 7 acidic; it is **neutral**.
- Mixing **vitamin C (scurvy)** with vitamin D (rickets).`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-economy-basics-m01",
      topicId: "ssc-cgl-general-awareness-economy-basics",
      title: "Indian Economy Basics",
      content: `**Economy** questions test institutions, terms and basic indicators central to the Indian financial system.

## Key Institutions
| Body | Role |
| --- | --- |
| RBI | central bank, monetary policy |
| SEBI | securities market regulator |
| NITI Aayog | policy think tank (replaced Planning Commission) |
| Finance Commission | tax-revenue sharing |

## Core Terms
- **GDP** is the total value of goods and services produced within a country in a year.
- **Inflation** is a sustained rise in the general price level.
- **Fiscal deficit** = total expenditure minus total receipts (excluding borrowings).

\`\`\`
Repo rate: rate at which RBI lends to banks
Reverse repo: rate at which RBI borrows from banks
\`\`\`

## Money & Banking
- The **RBI** controls money supply via the **repo rate** and **CRR**.
- A higher repo rate generally **reduces** borrowing and cools inflation.

### Planning
- The Planning Commission was replaced by **NITI Aayog** in **2015**.

### Common Traps
- Confusing **fiscal deficit** with **revenue deficit**.
- Thinking SEBI regulates banks; banks are under the **RBI**, securities under SEBI.
- Mixing **repo** (RBI lends) with **reverse repo** (RBI borrows).`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-days-current-affairs-m01",
      topicId: "ssc-cgl-general-awareness-days-current-affairs",
      title: "Important Days & Current Affairs",
      content: `**Important days** are a quick, reliable scorer. Memorise the fixed national and international observances.

## National Days
| Date | Day |
| --- | --- |
| 26 January | Republic Day |
| 15 August | Independence Day |
| 2 October | Gandhi Jayanti |
| 5 September | Teachers' Day |
| 14 November | Children's Day |

## International Days
| Date | Day |
| --- | --- |
| 8 March | International Women's Day |
| 22 April | Earth Day |
| 5 June | World Environment Day |
| 21 June | International Yoga Day |
| 1 December | World AIDS Day |

## Why Some Dates
- **Teachers' Day (5 Sep)** marks the birthday of **Dr. S. Radhakrishnan**.
- **Children's Day (14 Nov)** marks **Jawaharlal Nehru's** birthday.

\`\`\`
Tip: link each day to the person or theme it honours for fast recall.
\`\`\`

### Current Affairs Strategy
- Track **appointments, awards, summits and sports** events from the last 6 to 12 months.
- Note host cities of major summits and the latest holders of constitutional posts.

### Common Traps
- Swapping **Teachers' Day** and **Children's Day** dates.
- Confusing **World Environment Day (5 June)** with Earth Day (22 April).`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-books-authors-awards-m01",
      topicId: "ssc-cgl-general-awareness-books-authors-awards",
      title: "Books, Authors & Awards",
      content: `**Books, authors and awards** form a steady chunk of SSC GA. Focus on famous works and India's top honours.

## Famous Books and Authors
| Book | Author |
| --- | --- |
| Discovery of India | Jawaharlal Nehru |
| Wings of Fire | A.P.J. Abdul Kalam |
| The Argumentative Indian | Amartya Sen |
| Gitanjali | Rabindranath Tagore |
| Train to Pakistan | Khushwant Singh |

## Top Indian Civilian Awards
\`\`\`
Order of precedence:
Bharat Ratna > Padma Vibhushan > Padma Bhushan > Padma Shri
\`\`\`

- The **Bharat Ratna** is the highest civilian award.
- The **Param Vir Chakra** is the highest wartime gallantry award.

## Literary & Other Honours
- The **Jnanpith Award** is the highest literary honour in India.
- The **Dronacharya Award** recognises outstanding sports **coaches**.

### Nobel Pointers
- **Rabindranath Tagore** won the Nobel Prize in Literature in **1913** for Gitanjali.

### Common Traps
- Reversing the precedence of **Padma Bhushan** and **Padma Vibhushan** (Vibhushan ranks higher).
- Confusing the **Khel Ratna** (for players) with the **Dronacharya** (for coaches).
- Attributing Wings of Fire to the wrong author; it is **A.P.J. Abdul Kalam's** autobiography.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    ...sscQuant2Materials,
    ...ssc3Materials,
    ...ssc4Materials,
    ...ssc5Materials
  ],
  questions: [
    {
      id: "ssc-cgl-quant-percentages-profit-loss-q01",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      text: "A price is increased by 20% and then decreased by 20%. The net change is:",
      optionA: "0%",
      optionB: "+4%",
      optionC: "−2%",
      optionD: "−4%",
      correctOption: "D",
      explanation: "Net% = 20 − 20 − (400/100) = −4%, a net decrease.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-percentages-profit-loss-q02",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      text: "An article bought for ₹400 is sold for ₹500. The profit percentage is:",
      optionA: "30%",
      optionB: "20%",
      optionC: "25%",
      optionD: "40%",
      correctOption: "C",
      explanation: "Profit% = (100/400) × 100 = 25%.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-quant-percentages-profit-loss-q03",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      text: "What is 35% of 240?",
      optionA: "80",
      optionB: "84",
      optionC: "74",
      optionD: "96",
      correctOption: "B",
      explanation: "35% of 240 = 0.35 × 240 = 84.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-quant-percentages-profit-loss-q04",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      text: "Two items are sold at the same price, one at 10% profit and one at 10% loss. The overall result is:",
      optionA: "No profit, no loss",
      optionB: "1% profit",
      optionC: "1% loss",
      optionD: "2% loss",
      correctOption: "C",
      explanation: "Selling at equal SP with ±x% gives a loss of (x/10)² = (10/10)² = 1%.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-quant-percentages-profit-loss-q05",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      text: "A shopkeeper marks an item at ₹800 and gives a 15% discount. The selling price is:",
      optionA: "₹640",
      optionB: "₹700",
      optionC: "₹680",
      optionD: "₹720",
      correctOption: "C",
      explanation: "SP = 800 × (85/100) = ₹680.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-quant-percentages-profit-loss-q06",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      text: "If 60 is what percent of 150?",
      optionA: "50%",
      optionB: "25%",
      optionC: "45%",
      optionD: "40%",
      correctOption: "D",
      explanation: "(60/150) × 100 = 40%.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-quant-percentages-profit-loss-q07",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      text: "By selling a pen for ₹54, a man loses 10%. The cost price was:",
      optionA: "₹58",
      optionB: "₹62",
      optionC: "₹60",
      optionD: "₹64",
      correctOption: "C",
      explanation: "CP = 54 / 0.90 = ₹60.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-quant-percentages-profit-loss-q08",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      text: "A number increased by 25% becomes 250. The original number is:",
      optionA: "180",
      optionB: "210",
      optionC: "200",
      optionD: "225",
      correctOption: "C",
      explanation: "Original = 250 / 1.25 = 200.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-q01",
      topicId: "ssc-cgl-quant-time-speed-distance",
      text: "A car covers 180 km in 3 hours. Its speed is:",
      optionA: "50 km/h",
      optionB: "70 km/h",
      optionC: "60 km/h",
      optionD: "90 km/h",
      correctOption: "C",
      explanation: "Speed = 180/3 = 60 km/h.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-q02",
      topicId: "ssc-cgl-quant-time-speed-distance",
      text: "Convert 72 km/h into m/s:",
      optionA: "18 m/s",
      optionB: "20 m/s",
      optionC: "15 m/s",
      optionD: "25 m/s",
      correctOption: "B",
      explanation: "To convert km/h to m/s, multiply by 5/18: 72 × 5/18 = 20 m/s.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-q03",
      topicId: "ssc-cgl-quant-time-speed-distance",
      text: "A man covers equal distances at 30 km/h and 60 km/h. His average speed is:",
      optionA: "40 km/h",
      optionB: "45 km/h",
      optionC: "48 km/h",
      optionD: "50 km/h",
      correctOption: "A",
      explanation: "Average = 2uv/(u+v) = 2(30)(60)/90 = 40 km/h.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-q04",
      topicId: "ssc-cgl-quant-time-speed-distance",
      text: "Two trains move towards each other at 40 km/h and 50 km/h. Their relative speed is:",
      optionA: "100 km/h",
      optionB: "45 km/h",
      optionC: "10 km/h",
      optionD: "90 km/h",
      correctOption: "D",
      explanation: "For opposite directions, relative speed is the sum: 40 + 50 = 90 km/h.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-q05",
      topicId: "ssc-cgl-quant-time-speed-distance",
      text: "A 150 m long train running at 20 m/s crosses a pole in:",
      optionA: "5 s",
      optionB: "7.5 s",
      optionC: "10 s",
      optionD: "12 s",
      correctOption: "B",
      explanation: "Time = length/speed = 150/20 = 7.5 s.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-q06",
      topicId: "ssc-cgl-quant-time-speed-distance",
      text: "A boat goes 12 km/h downstream and 8 km/h upstream. The speed of the stream is:",
      optionA: "2 km/h",
      optionB: "4 km/h",
      optionC: "6 km/h",
      optionD: "10 km/h",
      correctOption: "A",
      explanation: "Stream speed = (down − up)/2 = (12 − 8)/2 = 2 km/h.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-q07",
      topicId: "ssc-cgl-quant-time-speed-distance",
      text: "If a journey of 240 km takes 4 hours, how long will 360 km take at the same speed?",
      optionA: "5 hours",
      optionB: "6 hours",
      optionC: "7 hours",
      optionD: "8 hours",
      correctOption: "B",
      explanation: "Speed = 60 km/h, so 360/60 = 6 hours.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-q08",
      topicId: "ssc-cgl-quant-time-speed-distance",
      text: "A 120 m train at 15 m/s crosses a 180 m platform in:",
      optionA: "15 s",
      optionB: "20 s",
      optionC: "24 s",
      optionD: "18 s",
      correctOption: "B",
      explanation: "Time = (120 + 180)/15 = 300/15 = 20 s.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-q01",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      text: "If CAT is coded as DBU, then DOG is coded as:",
      optionA: "FPH",
      optionB: "EPF",
      optionC: "EPH",
      optionD: "CPH",
      correctOption: "C",
      explanation: "Each letter shifts forward by one: D→E, O→P, G→H.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-q02",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      text: "Find the next term: 2, 6, 12, 20, 30, ?",
      optionA: "40",
      optionB: "42",
      optionC: "44",
      optionD: "36",
      correctOption: "B",
      explanation: "Differences are 4, 6, 8, 10, then 12; 30 + 12 = 42.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-q03",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      text: "What is the position of the letter T in the English alphabet?",
      optionA: "20",
      optionB: "19",
      optionC: "18",
      optionD: "21",
      correctOption: "A",
      explanation: "Using EJOTY, T is the 20th letter.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-q04",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      text: "Complete the series: 1, 1, 2, 3, 5, 8, ?",
      optionA: "11",
      optionB: "15",
      optionC: "12",
      optionD: "13",
      correctOption: "D",
      explanation: "Fibonacci: each term is the sum of the two before it; 5 + 8 = 13.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-q05",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      text: "In a code, A is written as Z, B as Y, C as X. How is D written?",
      optionA: "W",
      optionB: "V",
      optionC: "X",
      optionD: "U",
      correctOption: "A",
      explanation: "Opposite coding: each letter maps to 27 − n, so D (4) → 23 → W.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-q06",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      text: "Find the missing term: 3, 9, 27, 81, ?",
      optionA: "243",
      optionB: "210",
      optionC: "162",
      optionD: "324",
      correctOption: "A",
      explanation: "Each term is multiplied by 3; 81 × 3 = 243.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-q07",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      text: "If 5 is coded as 36 and 6 as 49, then 7 is coded as:",
      optionA: "56",
      optionB: "63",
      optionC: "64",
      optionD: "81",
      correctOption: "C",
      explanation: "The code is (n + 1)²; (7 + 1)² = 64.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-q08",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      text: "Find the odd one in the number series: 4, 9, 16, 25, 35, 49",
      optionA: "16",
      optionB: "25",
      optionC: "49",
      optionD: "35",
      correctOption: "D",
      explanation: "All are perfect squares except 35 (36 would fit the pattern).",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-english-idioms-one-word-q01",
      topicId: "ssc-cgl-english-idioms-one-word",
      text: "The idiom 'to let the cat out of the bag' means:",
      optionA: "To buy a pet",
      optionB: "To reveal a secret",
      optionC: "To run away",
      optionD: "To take a risk",
      correctOption: "B",
      explanation: "It means to disclose a secret, usually by accident.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-idioms-one-word-q02",
      topicId: "ssc-cgl-english-idioms-one-word",
      text: "One word for 'a person who studies birds' is:",
      optionA: "Botanist",
      optionB: "Ornithologist",
      optionC: "Zoologist",
      optionD: "Entomologist",
      correctOption: "B",
      explanation: "Ornithology is the study of birds, so the practitioner is an ornithologist.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-english-idioms-one-word-q03",
      topicId: "ssc-cgl-english-idioms-one-word",
      text: "The idiom 'a blessing in disguise' means:",
      optionA: "A hidden danger",
      optionB: "A good thing that seemed bad at first",
      optionC: "A bad omen",
      optionD: "An obvious gift",
      correctOption: "B",
      explanation: "It refers to something that turns out beneficial despite seeming unfortunate initially.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-english-idioms-one-word-q04",
      topicId: "ssc-cgl-english-idioms-one-word",
      text: "One word for 'words inscribed on a tomb' is:",
      optionA: "Epithet",
      optionB: "Epitaph",
      optionC: "Epilogue",
      optionD: "Epigram",
      correctOption: "B",
      explanation: "An epitaph is the inscription on a gravestone or tomb.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-english-idioms-one-word-q05",
      topicId: "ssc-cgl-english-idioms-one-word",
      text: "'Once in a blue moon' means an event that happens:",
      optionA: "Very often",
      optionB: "Every month",
      optionC: "At night only",
      optionD: "Very rarely",
      correctOption: "D",
      explanation: "The idiom denotes something happening extremely rarely.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-english-idioms-one-word-q06",
      topicId: "ssc-cgl-english-idioms-one-word",
      text: "One word for 'a person who hates mankind' is:",
      optionA: "Misanthrope",
      optionB: "Egotist",
      optionC: "Misogynist",
      optionD: "Philanthropist",
      correctOption: "A",
      explanation: "A misanthrope dislikes or distrusts humankind; a philanthropist loves it.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-english-idioms-one-word-q07",
      topicId: "ssc-cgl-english-idioms-one-word",
      text: "To 'burn the midnight oil' means to:",
      optionA: "Waste resources",
      optionB: "Sleep early",
      optionC: "Start a fire",
      optionD: "Work late into the night",
      correctOption: "D",
      explanation: "The idiom describes studying or working late into the night.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-english-idioms-one-word-q08",
      topicId: "ssc-cgl-english-idioms-one-word",
      text: "One word for 'a person who walks on a tightrope' is:",
      optionA: "Funambulist",
      optionB: "Equestrian",
      optionC: "Somnambulist",
      optionD: "Acrobat",
      correctOption: "A",
      explanation: "A funambulist is a tightrope walker; a somnambulist is a sleepwalker.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-q01",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      text: "The Indian Constitution came into force on:",
      optionA: "26 January 1950",
      optionB: "15 August 1947",
      optionC: "26 November 1949",
      optionD: "2 October 1950",
      correctOption: "A",
      explanation: "Though adopted on 26 November 1949, it came into force on 26 January 1950.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-q02",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      text: "Who was the Chairman of the Drafting Committee of the Constitution?",
      optionA: "Jawaharlal Nehru",
      optionB: "Rajendra Prasad",
      optionC: "B.R. Ambedkar",
      optionD: "Sardar Patel",
      correctOption: "C",
      explanation: "Dr. B.R. Ambedkar chaired the Drafting Committee of the Constituent Assembly.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-q03",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      text: "The Fundamental Duties were added to the Constitution by which amendment?",
      optionA: "42nd Amendment",
      optionB: "44th Amendment",
      optionC: "52nd Amendment",
      optionD: "73rd Amendment",
      correctOption: "A",
      explanation: "The 42nd Amendment (1976) added the Fundamental Duties under Article 51A.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-q04",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      text: "Which Article of the Constitution deals with the office of the President?",
      optionA: "Article 63",
      optionB: "Article 52",
      optionC: "Article 75",
      optionD: "Article 76",
      correctOption: "B",
      explanation: "Article 52 establishes the office of the President of India.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-q05",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      text: "The Eighth Schedule of the Constitution deals with:",
      optionA: "Anti-defection",
      optionB: "Panchayats",
      optionC: "Union and State lists",
      optionD: "Official languages",
      correctOption: "D",
      explanation: "The Eighth Schedule lists the recognised official languages, now 22 in number.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-q06",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      text: "The concept of Directive Principles of State Policy was borrowed from:",
      optionA: "The USA",
      optionB: "The UK",
      optionC: "Ireland",
      optionD: "Canada",
      correctOption: "C",
      explanation: "India adopted the Directive Principles from the Irish Constitution.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-q07",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      text: "The Finance Commission is constituted under which Article and at what interval?",
      optionA: "Article 280, every 5 years",
      optionB: "Article 324, every 6 years",
      optionC: "Article 148, annually",
      optionD: "Article 280, every 10 years",
      correctOption: "A",
      explanation: "Article 280 provides for a Finance Commission constituted every five years.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-q08",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      text: "The 42nd Amendment (1976) added which words to the Preamble?",
      optionA: "Sovereign and Republic",
      optionB: "Democratic and Justice",
      optionC: "Liberty and Equality",
      optionD: "Socialist, Secular and Integrity",
      correctOption: "D",
      explanation: "The 42nd Amendment inserted 'Socialist', 'Secular' and 'Integrity' into the Preamble.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-quant-ratio-proportion-q01",
      topicId: "ssc-cgl-quant-ratio-proportion",
      text: "Divide ₹600 in the ratio 2 : 3. The smaller share is:",
      optionA: "₹300",
      optionB: "₹360",
      optionC: "₹200",
      optionD: "₹240",
      correctOption: "D",
      explanation: "Smaller share = 600 × 2/(2+3) = 600 × 2/5 = ₹240.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-ratio-proportion-q02",
      topicId: "ssc-cgl-quant-ratio-proportion",
      text: "The mean proportional of 9 and 16 is:",
      optionA: "10",
      optionB: "12",
      optionC: "14",
      optionD: "15",
      correctOption: "B",
      explanation: "Mean proportional = sqrt(9 × 16) = sqrt(144) = 12.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-quant-ratio-proportion-q03",
      topicId: "ssc-cgl-quant-ratio-proportion",
      text: "If a : b = 2 : 3 and b : c = 4 : 5, then a : c is:",
      optionA: "8 : 15",
      optionB: "2 : 5",
      optionC: "3 : 5",
      optionD: "8 : 5",
      correctOption: "A",
      explanation: "a : b : c = 8 : 12 : 15, so a : c = 8 : 15.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-quant-ratio-proportion-q04",
      topicId: "ssc-cgl-quant-ratio-proportion",
      text: "In a proportion a : b :: c : d, if a = 4, b = 6 and c = 10, then d is:",
      optionA: "12",
      optionB: "14",
      optionC: "16",
      optionD: "15",
      correctOption: "D",
      explanation: "a×d = b×c gives 4d = 60, so d = 15.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-quant-ratio-proportion-q05",
      topicId: "ssc-cgl-quant-ratio-proportion",
      text: "Two numbers are in the ratio 5 : 7 and their sum is 96. The larger number is:",
      optionA: "40",
      optionB: "60",
      optionC: "56",
      optionD: "48",
      correctOption: "C",
      explanation: "Larger = 96 × 7/12 = 56.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-quant-ratio-proportion-q06",
      topicId: "ssc-cgl-quant-ratio-proportion",
      text: "The ratio 18 : 24 in its simplest form is:",
      optionA: "2 : 3",
      optionB: "4 : 5",
      optionC: "3 : 4",
      optionD: "6 : 8",
      correctOption: "C",
      explanation: "Dividing both by HCF 6 gives 3 : 4.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-quant-ratio-proportion-q07",
      topicId: "ssc-cgl-quant-ratio-proportion",
      text: "If 40% of A equals 60% of B, then A : B is:",
      optionA: "2 : 3",
      optionB: "3 : 2",
      optionC: "4 : 6",
      optionD: "5 : 3",
      correctOption: "B",
      explanation: "0.4A = 0.6B gives A/B = 0.6/0.4 = 3/2, so A : B = 3 : 2.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-quant-ratio-proportion-q08",
      topicId: "ssc-cgl-quant-ratio-proportion",
      text: "A sum is split among P, Q, R in the ratio 1 : 2 : 3. If R gets ₹90, the total sum is:",
      optionA: "₹150",
      optionB: "₹160",
      optionC: "₹120",
      optionD: "₹180",
      correctOption: "D",
      explanation: "R has 3 parts = ₹90, so 1 part = ₹30 and total 6 parts = ₹180.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-quant-averages-q01",
      topicId: "ssc-cgl-quant-averages",
      text: "The average of 10, 20, 30, 40 and 50 is:",
      optionA: "25",
      optionB: "30",
      optionC: "35",
      optionD: "40",
      correctOption: "B",
      explanation: "Sum = 150, count = 5, average = 150/5 = 30.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-averages-q02",
      topicId: "ssc-cgl-quant-averages",
      text: "The average of the first 10 natural numbers is:",
      optionA: "5",
      optionB: "5.5",
      optionC: "6",
      optionD: "4.5",
      correctOption: "B",
      explanation: "Average of first n naturals = (n+1)/2 = 11/2 = 5.5.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-quant-averages-q03",
      topicId: "ssc-cgl-quant-averages",
      text: "The average age of 5 boys is 14 years. The total of their ages is:",
      optionA: "70",
      optionB: "65",
      optionC: "60",
      optionD: "75",
      correctOption: "A",
      explanation: "Total = average × number = 14 × 5 = 70.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-quant-averages-q04",
      topicId: "ssc-cgl-quant-averages",
      text: "The average of 6 numbers is 25. If one number 30 is removed, the average of the rest is:",
      optionA: "22",
      optionB: "23",
      optionC: "24",
      optionD: "26",
      correctOption: "C",
      explanation: "Sum = 150, remove 30 gives 120 over 5 numbers = 24.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-quant-averages-q05",
      topicId: "ssc-cgl-quant-averages",
      text: "The average of first n odd natural numbers is:",
      optionA: "n + 1",
      optionB: "2n",
      optionC: "(n+1)/2",
      optionD: "n",
      correctOption: "D",
      explanation: "The average of the first n odd numbers is exactly n.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-quant-averages-q06",
      topicId: "ssc-cgl-quant-averages",
      text: "A batsman's average in 10 innings is 40. To raise it to 42 in the 11th innings, he must score:",
      optionA: "62",
      optionB: "60",
      optionC: "64",
      optionD: "66",
      correctOption: "A",
      explanation: "New total needed = 42 × 11 = 462; old total = 400; required = 462 − 400 = 62.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-quant-averages-q07",
      topicId: "ssc-cgl-quant-averages",
      text: "The average of three consecutive even numbers is 16. The largest of them is:",
      optionA: "14",
      optionB: "16",
      optionC: "20",
      optionD: "18",
      correctOption: "D",
      explanation: "Middle number = average = 16, so the numbers are 14, 16, 18; largest is 18.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-quant-averages-q08",
      topicId: "ssc-cgl-quant-averages",
      text: "Two groups of 4 and 6 students score average 70 and 80. The combined average is:",
      optionA: "74",
      optionB: "75",
      optionC: "76",
      optionD: "78",
      correctOption: "C",
      explanation: "Weighted avg = (4×70 + 6×80)/10 = (280+480)/10 = 760/10 = 76.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-quant-simple-compound-interest-q01",
      topicId: "ssc-cgl-quant-simple-compound-interest",
      text: "The simple interest on ₹1000 at 5% per annum for 3 years is:",
      optionA: "₹150",
      optionB: "₹120",
      optionC: "₹180",
      optionD: "₹200",
      correctOption: "A",
      explanation: "SI = (1000 × 5 × 3)/100 = ₹150.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-simple-compound-interest-q02",
      topicId: "ssc-cgl-quant-simple-compound-interest",
      text: "The compound interest on ₹2000 at 10% per annum for 2 years is:",
      optionA: "₹420",
      optionB: "₹400",
      optionC: "₹440",
      optionD: "₹460",
      correctOption: "A",
      explanation: "CI = 2000×(1.1)^2 − 2000 = 2420 − 2000 = ₹420.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-quant-simple-compound-interest-q03",
      topicId: "ssc-cgl-quant-simple-compound-interest",
      text: "The difference between CI and SI on ₹1000 at 10% for 2 years is:",
      optionA: "₹5",
      optionB: "₹8",
      optionC: "₹12",
      optionD: "₹10",
      correctOption: "D",
      explanation: "Difference = P×(R/100)^2 = 1000×(0.1)^2 = ₹10.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-quant-simple-compound-interest-q04",
      topicId: "ssc-cgl-quant-simple-compound-interest",
      text: "At what rate will SI on a sum double the principal in 20 years?",
      optionA: "5%",
      optionB: "4%",
      optionC: "6%",
      optionD: "10%",
      correctOption: "A",
      explanation: "Money doubles under SI when R×T = 100, so R = 100/20 = 5%.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-quant-simple-compound-interest-q05",
      topicId: "ssc-cgl-quant-simple-compound-interest",
      text: "The amount on ₹500 at simple interest of 8% for 2 years is:",
      optionA: "₹560",
      optionB: "₹580",
      optionC: "₹600",
      optionD: "₹620",
      correctOption: "B",
      explanation: "SI = (500×8×2)/100 = ₹80; amount = 500 + 80 = ₹580.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-quant-simple-compound-interest-q06",
      topicId: "ssc-cgl-quant-simple-compound-interest",
      text: "A sum gives ₹60 simple interest in 2 years at 5% per annum. The principal is:",
      optionA: "₹500",
      optionB: "₹550",
      optionC: "₹650",
      optionD: "₹600",
      correctOption: "D",
      explanation: "P = (SI×100)/(R×T) = (60×100)/(5×2) = ₹600.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-quant-simple-compound-interest-q07",
      topicId: "ssc-cgl-quant-simple-compound-interest",
      text: "The amount on ₹8000 at 5% compound interest for 1 year is:",
      optionA: "₹8200",
      optionB: "₹8300",
      optionC: "₹8400",
      optionD: "₹8500",
      correctOption: "C",
      explanation: "Amount = 8000 × 1.05 = ₹8400 (for 1 year CI equals SI).",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-quant-simple-compound-interest-q08",
      topicId: "ssc-cgl-quant-simple-compound-interest",
      text: "Simple interest on a sum for 8 months at 6% per annum equals ₹40. The principal is:",
      optionA: "₹800",
      optionB: "₹900",
      optionC: "₹1000",
      optionD: "₹1200",
      correctOption: "C",
      explanation: "T = 8/12 yr; P = (40×100)/(6×8/12) = 4000/4 = ₹1000.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-quant-time-and-work-q01",
      topicId: "ssc-cgl-quant-time-and-work",
      text: "A does a job in 10 days and B in 15 days. Together they finish it in:",
      optionA: "5 days",
      optionB: "8 days",
      optionC: "7 days",
      optionD: "6 days",
      correctOption: "D",
      explanation: "Together = ab/(a+b) = (10×15)/25 = 150/25 = 6 days.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-time-and-work-q02",
      topicId: "ssc-cgl-quant-time-and-work",
      text: "If A can do a work in 12 days, his one day's work is:",
      optionA: "1/10",
      optionB: "1/24",
      optionC: "1/6",
      optionD: "1/12",
      correctOption: "D",
      explanation: "One day's work = 1/(time to finish) = 1/12.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-quant-time-and-work-q03",
      topicId: "ssc-cgl-quant-time-and-work",
      text: "A and B together finish a job in 8 days; A alone takes 12 days. B alone takes:",
      optionA: "24 days",
      optionB: "20 days",
      optionC: "16 days",
      optionD: "18 days",
      correctOption: "A",
      explanation: "B's rate = 1/8 − 1/12 = 3/24 − 2/24 = 1/24, so B takes 24 days.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-quant-time-and-work-q04",
      topicId: "ssc-cgl-quant-time-and-work",
      text: "12 men finish a work in 10 days. In how many days will 8 men finish the same work?",
      optionA: "12 days",
      optionB: "14 days",
      optionC: "15 days",
      optionD: "16 days",
      correctOption: "C",
      explanation: "Men×days constant: 12×10 = 8×d, so d = 120/8 = 15 days.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-quant-time-and-work-q05",
      topicId: "ssc-cgl-quant-time-and-work",
      text: "A is twice as efficient as B. If B does a job in 18 days, A does it in:",
      optionA: "9 days",
      optionB: "6 days",
      optionC: "12 days",
      optionD: "36 days",
      correctOption: "A",
      explanation: "Twice the efficiency means half the time: 18/2 = 9 days.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-quant-time-and-work-q06",
      topicId: "ssc-cgl-quant-time-and-work",
      text: "A pipe fills a tank in 6 hours and an outlet empties it in 12 hours. Together they fill it in:",
      optionA: "12 hours",
      optionB: "10 hours",
      optionC: "8 hours",
      optionD: "18 hours",
      correctOption: "A",
      explanation: "Net rate = 1/6 − 1/12 = 1/12, so the tank fills in 12 hours.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-quant-time-and-work-q07",
      topicId: "ssc-cgl-quant-time-and-work",
      text: "A and B do a job in 20 and 30 days. Working together, the fraction done in 6 days is:",
      optionA: "1/3",
      optionB: "2/5",
      optionC: "1/2",
      optionD: "3/5",
      correctOption: "C",
      explanation: "Combined rate = 1/20 + 1/30 = 5/60 = 1/12; in 6 days = 6/12 = 1/2.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-quant-time-and-work-q08",
      topicId: "ssc-cgl-quant-time-and-work",
      text: "If 4 workers build a wall in 9 days, how many workers build it in 6 days?",
      optionA: "5",
      optionB: "7",
      optionC: "6",
      optionD: "8",
      correctOption: "C",
      explanation: "Workers×days constant: 4×9 = w×6, so w = 36/6 = 6 workers.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-quant-number-system-q01",
      topicId: "ssc-cgl-quant-number-system",
      text: "The HCF of 12 and 18 is:",
      optionA: "2",
      optionB: "3",
      optionC: "9",
      optionD: "6",
      correctOption: "D",
      explanation: "Common factors of 12 and 18 give the greatest as 6.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-number-system-q02",
      topicId: "ssc-cgl-quant-number-system",
      text: "The LCM of 4, 6 and 8 is:",
      optionA: "12",
      optionB: "24",
      optionC: "16",
      optionD: "48",
      correctOption: "B",
      explanation: "Smallest number divisible by 4, 6 and 8 is 24.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-quant-number-system-q03",
      topicId: "ssc-cgl-quant-number-system",
      text: "If the HCF of two numbers is 6 and their LCM is 36, and one number is 12, the other is:",
      optionA: "24",
      optionB: "20",
      optionC: "18",
      optionD: "30",
      correctOption: "C",
      explanation: "Product = HCF×LCM = 216; other = 216/12 = 18.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-quant-number-system-q04",
      topicId: "ssc-cgl-quant-number-system",
      text: "Which of these numbers is divisible by 9?",
      optionA: "1234",
      optionB: "2345",
      optionC: "4321",
      optionD: "5346",
      correctOption: "D",
      explanation: "Digit sum of 5346 = 5+3+4+6 = 18, divisible by 9.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-quant-number-system-q05",
      topicId: "ssc-cgl-quant-number-system",
      text: "The least number which when divided by 5, 6 and 7 leaves remainder 2 in each case is:",
      optionA: "210",
      optionB: "208",
      optionC: "212",
      optionD: "216",
      correctOption: "C",
      explanation: "LCM(5,6,7) = 210; required = 210 + 2 = 212.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-quant-number-system-q06",
      topicId: "ssc-cgl-quant-number-system",
      text: "Which of the following is a prime number?",
      optionA: "21",
      optionB: "27",
      optionC: "29",
      optionD: "33",
      correctOption: "C",
      explanation: "29 has exactly two factors, 1 and itself, so it is prime.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-quant-number-system-q07",
      topicId: "ssc-cgl-quant-number-system",
      text: "Is 3927 divisible by 11?",
      optionA: "No, remainder 1",
      optionB: "Yes, it is divisible",
      optionC: "No, remainder 3",
      optionD: "No, remainder 5",
      correctOption: "B",
      explanation: "Alternating sum (7−2+9−3)=11 is divisible by 11, so 3927 is divisible.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-quant-number-system-q08",
      topicId: "ssc-cgl-quant-number-system",
      text: "The HCF of the fractions 2/3 and 4/9 is:",
      optionA: "2/9",
      optionB: "2/3",
      optionC: "4/3",
      optionD: "1/9",
      correctOption: "A",
      explanation: "HCF of fractions = HCF(2,4)/LCM(3,9) = 2/9.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-quant-mensuration-q01",
      topicId: "ssc-cgl-quant-mensuration",
      text: "The area of a square with side 7 cm is:",
      optionA: "28 cm^2",
      optionB: "49 cm^2",
      optionC: "14 cm^2",
      optionD: "56 cm^2",
      correctOption: "B",
      explanation: "Area = side^2 = 7^2 = 49 cm^2.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-mensuration-q02",
      topicId: "ssc-cgl-quant-mensuration",
      text: "The perimeter of a rectangle 8 cm by 5 cm is:",
      optionA: "13 cm",
      optionB: "20 cm",
      optionC: "40 cm",
      optionD: "26 cm",
      correctOption: "D",
      explanation: "Perimeter = 2(l+b) = 2(8+5) = 26 cm.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-quant-mensuration-q03",
      topicId: "ssc-cgl-quant-mensuration",
      text: "The area of a circle with radius 7 cm (pi = 22/7) is:",
      optionA: "144 cm^2",
      optionB: "174 cm^2",
      optionC: "164 cm^2",
      optionD: "154 cm^2",
      correctOption: "D",
      explanation: "Area = pi×r^2 = (22/7)×49 = 154 cm^2.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-quant-mensuration-q04",
      topicId: "ssc-cgl-quant-mensuration",
      text: "The volume of a cube of edge 5 cm is:",
      optionA: "25 cm^3",
      optionB: "75 cm^3",
      optionC: "150 cm^3",
      optionD: "125 cm^3",
      correctOption: "D",
      explanation: "Volume = a^3 = 5^3 = 125 cm^3.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-quant-mensuration-q05",
      topicId: "ssc-cgl-quant-mensuration",
      text: "The total surface area of a cube of edge 4 cm is:",
      optionA: "64 cm^2",
      optionB: "80 cm^2",
      optionC: "112 cm^2",
      optionD: "96 cm^2",
      correctOption: "D",
      explanation: "TSA = 6×a^2 = 6×16 = 96 cm^2.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-quant-mensuration-q06",
      topicId: "ssc-cgl-quant-mensuration",
      text: "The area of a triangle with base 10 cm and height 6 cm is:",
      optionA: "60 cm^2",
      optionB: "16 cm^2",
      optionC: "30 cm^2",
      optionD: "40 cm^2",
      correctOption: "C",
      explanation: "Area = (1/2)×base×height = (1/2)×10×6 = 30 cm^2.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-quant-mensuration-q07",
      topicId: "ssc-cgl-quant-mensuration",
      text: "The diagonal of a square of side 5 cm is:",
      optionA: "5 cm",
      optionB: "10 cm",
      optionC: "5sqrt(2) cm",
      optionD: "25 cm",
      correctOption: "C",
      explanation: "Diagonal = side × sqrt(2) = 5sqrt(2) cm.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-quant-mensuration-q08",
      topicId: "ssc-cgl-quant-mensuration",
      text: "If each edge of a cube doubles, its volume becomes:",
      optionA: "8 times",
      optionB: "4 times",
      optionC: "6 times",
      optionD: "2 times",
      correctOption: "A",
      explanation: "Volume scales by k^3; doubling gives 2^3 = 8 times.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-quant-algebra-basics-q01",
      topicId: "ssc-cgl-quant-algebra-basics",
      text: "Expand (a + b)^2:",
      optionA: "a^2 + b^2",
      optionB: "a^2 - 2ab + b^2",
      optionC: "a^2 + 2ab + b^2",
      optionD: "2a + 2b",
      correctOption: "C",
      explanation: "(a + b)^2 = a^2 + 2ab + b^2.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-algebra-basics-q02",
      topicId: "ssc-cgl-quant-algebra-basics",
      text: "Factorise a^2 - b^2:",
      optionA: "(a - b)^2",
      optionB: "(a + b)^2",
      optionC: "(a + b)(a - b)",
      optionD: "a^2 + b^2",
      correctOption: "C",
      explanation: "a^2 - b^2 = (a + b)(a - b).",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-quant-algebra-basics-q03",
      topicId: "ssc-cgl-quant-algebra-basics",
      text: "If a + 1/a = 3, then a^2 + 1/a^2 equals:",
      optionA: "7",
      optionB: "5",
      optionC: "9",
      optionD: "11",
      correctOption: "A",
      explanation: "a^2 + 1/a^2 = (a + 1/a)^2 − 2 = 9 − 2 = 7.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-quant-algebra-basics-q04",
      topicId: "ssc-cgl-quant-algebra-basics",
      text: "If a + b + c = 0, then a^3 + b^3 + c^3 equals:",
      optionA: "0",
      optionB: "abc",
      optionC: "a^3b^3c^3",
      optionD: "3abc",
      correctOption: "D",
      explanation: "When a + b + c = 0, a^3 + b^3 + c^3 = 3abc.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-quant-algebra-basics-q05",
      topicId: "ssc-cgl-quant-algebra-basics",
      text: "For the equation 2x^2 - 5x + 3 = 0, the sum of the roots is:",
      optionA: "-5/2",
      optionB: "3/2",
      optionC: "5/2",
      optionD: "2/5",
      correctOption: "C",
      explanation: "Sum of roots = -b/a = -(-5)/2 = 5/2.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-quant-algebra-basics-q06",
      topicId: "ssc-cgl-quant-algebra-basics",
      text: "The value of 102^2 - 98^2 is:",
      optionA: "400",
      optionB: "600",
      optionC: "1000",
      optionD: "800",
      correctOption: "D",
      explanation: "a^2 - b^2 = (102+98)(102-98) = 200×4 = 800.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-quant-algebra-basics-q07",
      topicId: "ssc-cgl-quant-algebra-basics",
      text: "For 3x^2 + 6x + 2 = 0, the product of the roots is:",
      optionA: "2",
      optionB: "6",
      optionC: "-2",
      optionD: "2/3",
      correctOption: "D",
      explanation: "Product of roots = c/a = 2/3.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-quant-algebra-basics-q08",
      topicId: "ssc-cgl-quant-algebra-basics",
      text: "If a - 1/a = 2, then a^2 + 1/a^2 equals:",
      optionA: "4",
      optionB: "5",
      optionC: "6",
      optionD: "8",
      correctOption: "C",
      explanation: "a^2 + 1/a^2 = (a - 1/a)^2 + 2 = 4 + 2 = 6.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-quant-trigonometry-q01",
      topicId: "ssc-cgl-quant-trigonometry",
      text: "The value of sin 30 degrees is:",
      optionA: "0",
      optionB: "sqrt(3)/2",
      optionC: "1",
      optionD: "1/2",
      correctOption: "D",
      explanation: "sin 30 degrees = 1/2 from the standard table.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-trigonometry-q02",
      topicId: "ssc-cgl-quant-trigonometry",
      text: "The value of sin^2(x) + cos^2(x) is:",
      optionA: "0",
      optionB: "depends on x",
      optionC: "2",
      optionD: "1",
      correctOption: "D",
      explanation: "The Pythagorean identity gives sin^2(x) + cos^2(x) = 1 for all x.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-quant-trigonometry-q03",
      topicId: "ssc-cgl-quant-trigonometry",
      text: "The value of tan 45 degrees is:",
      optionA: "0",
      optionB: "1/sqrt(3)",
      optionC: "sqrt(3)",
      optionD: "1",
      correctOption: "D",
      explanation: "tan 45 degrees = 1 from the standard angles.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-quant-trigonometry-q04",
      topicId: "ssc-cgl-quant-trigonometry",
      text: "sin(90 degrees - x) is equal to:",
      optionA: "cos x",
      optionB: "sin x",
      optionC: "tan x",
      optionD: "cosec x",
      correctOption: "A",
      explanation: "By complementary angles, sin(90 − x) = cos x.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-quant-trigonometry-q05",
      topicId: "ssc-cgl-quant-trigonometry",
      text: "The value of cos 60 degrees is:",
      optionA: "1/2",
      optionB: "sqrt(3)/2",
      optionC: "1",
      optionD: "0",
      correctOption: "A",
      explanation: "cos 60 degrees = 1/2 from the standard table.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-quant-trigonometry-q06",
      topicId: "ssc-cgl-quant-trigonometry",
      text: "1 + tan^2(x) equals:",
      optionA: "cosec^2(x)",
      optionB: "sec^2(x)",
      optionC: "cot^2(x)",
      optionD: "sin^2(x)",
      correctOption: "B",
      explanation: "The identity states 1 + tan^2(x) = sec^2(x).",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-quant-trigonometry-q07",
      topicId: "ssc-cgl-quant-trigonometry",
      text: "A tower casts a shadow equal to its height. The angle of elevation of the sun is:",
      optionA: "45 degrees",
      optionB: "30 degrees",
      optionC: "60 degrees",
      optionD: "90 degrees",
      correctOption: "A",
      explanation: "tan(angle) = height/shadow = 1, so the angle is 45 degrees.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-quant-trigonometry-q08",
      topicId: "ssc-cgl-quant-trigonometry",
      text: "The value of sin 0 degrees + cos 0 degrees is:",
      optionA: "0",
      optionB: "2",
      optionC: "1",
      optionD: "1/2",
      correctOption: "C",
      explanation: "sin 0 = 0 and cos 0 = 1, so the sum is 1.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-quant-geometry-q01",
      topicId: "ssc-cgl-quant-geometry",
      text: "The sum of the interior angles of a triangle is:",
      optionA: "180 degrees",
      optionB: "90 degrees",
      optionC: "270 degrees",
      optionD: "360 degrees",
      correctOption: "A",
      explanation: "The angle sum of any triangle is 180 degrees.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-geometry-q02",
      topicId: "ssc-cgl-quant-geometry",
      text: "In a right triangle with legs 6 and 8, the hypotenuse is:",
      optionA: "9",
      optionB: "10",
      optionC: "12",
      optionD: "14",
      correctOption: "B",
      explanation: "Hypotenuse = sqrt(6^2 + 8^2) = sqrt(100) = 10.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-quant-geometry-q03",
      topicId: "ssc-cgl-quant-geometry",
      text: "The angle in a semicircle is:",
      optionA: "45 degrees",
      optionB: "90 degrees",
      optionC: "60 degrees",
      optionD: "120 degrees",
      correctOption: "B",
      explanation: "The angle subtended in a semicircle is a right angle, 90 degrees.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-quant-geometry-q04",
      topicId: "ssc-cgl-quant-geometry",
      text: "The sum of interior angles of a hexagon is:",
      optionA: "540 degrees",
      optionB: "720 degrees",
      optionC: "900 degrees",
      optionD: "1080 degrees",
      correctOption: "B",
      explanation: "Sum = (n−2)×180 = (6−2)×180 = 720 degrees.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-quant-geometry-q05",
      topicId: "ssc-cgl-quant-geometry",
      text: "Each exterior angle of a regular pentagon is:",
      optionA: "60 degrees",
      optionB: "90 degrees",
      optionC: "72 degrees",
      optionD: "108 degrees",
      correctOption: "C",
      explanation: "Exterior angle = 360/n = 360/5 = 72 degrees.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-quant-geometry-q06",
      topicId: "ssc-cgl-quant-geometry",
      text: "The centroid of a triangle divides each median in the ratio:",
      optionA: "1 : 1",
      optionB: "2 : 1",
      optionC: "3 : 1",
      optionD: "3 : 2",
      correctOption: "B",
      explanation: "The centroid divides each median 2 : 1 from the vertex.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-quant-geometry-q07",
      topicId: "ssc-cgl-quant-geometry",
      text: "An exterior angle of a triangle is 110 degrees and one opposite interior angle is 70 degrees. The other is:",
      optionA: "40 degrees",
      optionB: "30 degrees",
      optionC: "50 degrees",
      optionD: "60 degrees",
      correctOption: "A",
      explanation: "Exterior angle = sum of opposite interiors, so other = 110 − 70 = 40 degrees.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-quant-geometry-q08",
      topicId: "ssc-cgl-quant-geometry",
      text: "A tangent to a circle meets the radius at the point of contact at an angle of:",
      optionA: "45 degrees",
      optionB: "90 degrees",
      optionC: "60 degrees",
      optionD: "180 degrees",
      correctOption: "B",
      explanation: "A tangent is perpendicular to the radius at the point of contact, 90 degrees.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-quant-data-interpretation-q01",
      topicId: "ssc-cgl-quant-data-interpretation",
      text: "Sales rose from 200 to 250 units. The percentage increase is:",
      optionA: "20%",
      optionB: "25%",
      optionC: "30%",
      optionD: "50%",
      correctOption: "B",
      explanation: "Increase = (250−200)/200 × 100 = 25%.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-data-interpretation-q02",
      topicId: "ssc-cgl-quant-data-interpretation",
      text: "In a pie chart, a category is 25% of the total. Its slice angle is:",
      optionA: "60 degrees",
      optionB: "72 degrees",
      optionC: "90 degrees",
      optionD: "120 degrees",
      correctOption: "C",
      explanation: "Angle = 25% × 360 = 90 degrees.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-quant-data-interpretation-q03",
      topicId: "ssc-cgl-quant-data-interpretation",
      text: "Sales over three years were 200, 250 and 300. The average annual sales is:",
      optionA: "240",
      optionB: "260",
      optionC: "250",
      optionD: "275",
      correctOption: "C",
      explanation: "Average = (200+250+300)/3 = 750/3 = 250.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-quant-data-interpretation-q04",
      topicId: "ssc-cgl-quant-data-interpretation",
      text: "A pie slice measures 90 degrees and the grand total is 800. The slice value is:",
      optionA: "150",
      optionB: "200",
      optionC: "180",
      optionD: "250",
      correctOption: "B",
      explanation: "Value = (90/360) × 800 = 200.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-quant-data-interpretation-q05",
      topicId: "ssc-cgl-quant-data-interpretation",
      text: "A value falls from 300 to 240. The percentage decrease is:",
      optionA: "20%",
      optionB: "15%",
      optionC: "25%",
      optionD: "30%",
      correctOption: "A",
      explanation: "Decrease = (300−240)/300 × 100 = 20%.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-quant-data-interpretation-q06",
      topicId: "ssc-cgl-quant-data-interpretation",
      text: "If a category is 120 degrees in a pie chart, its share of the total is:",
      optionA: "33.33%",
      optionB: "30%",
      optionC: "25%",
      optionD: "40%",
      correctOption: "A",
      explanation: "Share = (120/360) × 100 = 33.33%.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-quant-data-interpretation-q07",
      topicId: "ssc-cgl-quant-data-interpretation",
      text: "Four products sell 40, 60, 80 and 20 units. The product with the largest share has what percent?",
      optionA: "30%",
      optionB: "45%",
      optionC: "40%",
      optionD: "50%",
      correctOption: "C",
      explanation: "Total = 200; largest is 80, so share = 80/200 × 100 = 40%.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-quant-data-interpretation-q08",
      topicId: "ssc-cgl-quant-data-interpretation",
      text: "A bar shows 150 in 2022 and 180 in 2023. The percentage growth is:",
      optionA: "15%",
      optionB: "20%",
      optionC: "18%",
      optionD: "25%",
      correctOption: "B",
      explanation: "Growth = (180−150)/150 × 100 = 20%.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-reasoning-analogy-classification-q01",
      topicId: "ssc-cgl-reasoning-analogy-classification",
      text: "Hot is to Cold as Up is to:",
      optionA: "High",
      optionB: "Down",
      optionC: "Top",
      optionD: "Sky",
      correctOption: "B",
      explanation: "The relationship is antonyms; the opposite of Up is Down.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-analogy-classification-q02",
      topicId: "ssc-cgl-reasoning-analogy-classification",
      text: "4 : 16 :: 5 : ?",
      optionA: "20",
      optionB: "10",
      optionC: "30",
      optionD: "25",
      correctOption: "D",
      explanation: "The pattern is n : n^2, so 5 : 25.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-reasoning-analogy-classification-q03",
      topicId: "ssc-cgl-reasoning-analogy-classification",
      text: "Find the odd one out:",
      optionA: "Rose",
      optionB: "Lotus",
      optionC: "Jasmine",
      optionD: "Mango",
      correctOption: "D",
      explanation: "Rose, Lotus and Jasmine are flowers; Mango is a fruit.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-reasoning-analogy-classification-q04",
      topicId: "ssc-cgl-reasoning-analogy-classification",
      text: "Carpenter is to Saw as Tailor is to:",
      optionA: "Scissors",
      optionB: "Shirt",
      optionC: "Cloth",
      optionD: "Shop",
      correctOption: "A",
      explanation: "Worker-tool relationship; a tailor uses scissors as a carpenter uses a saw.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-reasoning-analogy-classification-q05",
      topicId: "ssc-cgl-reasoning-analogy-classification",
      text: "Find the odd number out:",
      optionA: "20",
      optionB: "16",
      optionC: "25",
      optionD: "9",
      correctOption: "A",
      explanation: "9, 16 and 25 are perfect squares; 20 is not.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-reasoning-analogy-classification-q06",
      topicId: "ssc-cgl-reasoning-analogy-classification",
      text: "Wheel is to Car as Petal is to:",
      optionA: "Flower",
      optionB: "Garden",
      optionC: "Stem",
      optionD: "Leaf",
      correctOption: "A",
      explanation: "Part-whole relationship; a petal is part of a flower as a wheel is part of a car.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-reasoning-analogy-classification-q07",
      topicId: "ssc-cgl-reasoning-analogy-classification",
      text: "Find the odd one out:",
      optionA: "11",
      optionB: "13",
      optionC: "15",
      optionD: "17",
      correctOption: "C",
      explanation: "11, 13 and 17 are prime; 15 is composite (3×5).",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-reasoning-analogy-classification-q08",
      topicId: "ssc-cgl-reasoning-analogy-classification",
      text: "Big is to Large as Quick is to:",
      optionA: "Slow",
      optionB: "Easy",
      optionC: "Late",
      optionD: "Fast",
      correctOption: "D",
      explanation: "Synonym relationship; Quick and Fast mean the same.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-reasoning-blood-relations-q01",
      topicId: "ssc-cgl-reasoning-blood-relations",
      text: "Your father's brother is your:",
      optionA: "Maternal uncle",
      optionB: "Paternal uncle",
      optionC: "Cousin",
      optionD: "Nephew",
      correctOption: "B",
      explanation: "The father's brother is the paternal uncle.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-blood-relations-q02",
      topicId: "ssc-cgl-reasoning-blood-relations",
      text: "Your mother's brother is your:",
      optionA: "Maternal uncle",
      optionB: "Paternal uncle",
      optionC: "Brother-in-law",
      optionD: "Father",
      correctOption: "A",
      explanation: "The mother's brother is the maternal uncle.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-reasoning-blood-relations-q03",
      topicId: "ssc-cgl-reasoning-blood-relations",
      text: "Pointing to a man, a woman said, \"He is the son of my mother's only son.\" The man is the woman's:",
      optionA: "Brother",
      optionB: "Son",
      optionC: "Nephew",
      optionD: "Cousin",
      correctOption: "B",
      explanation: "Mother's only son is the woman's brother only if she has none; here it is herself, so the man is her son.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-reasoning-blood-relations-q04",
      topicId: "ssc-cgl-reasoning-blood-relations",
      text: "Your son's wife is your:",
      optionA: "Sister-in-law",
      optionB: "Niece",
      optionC: "Daughter-in-law",
      optionD: "Granddaughter",
      correctOption: "C",
      explanation: "The wife of your son is your daughter-in-law.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-reasoning-blood-relations-q05",
      topicId: "ssc-cgl-reasoning-blood-relations",
      text: "A is B's father and C is B's sister. How is A related to C?",
      optionA: "Uncle",
      optionB: "Brother",
      optionC: "Father",
      optionD: "Grandfather",
      correctOption: "C",
      explanation: "B and C are siblings, and A is the father of B, so A is C's father.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-reasoning-blood-relations-q06",
      topicId: "ssc-cgl-reasoning-blood-relations",
      text: "Your daughter's son is your:",
      optionA: "Grandson",
      optionB: "Nephew",
      optionC: "Son",
      optionD: "Cousin",
      correctOption: "A",
      explanation: "The son of your daughter is your grandson.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-reasoning-blood-relations-q07",
      topicId: "ssc-cgl-reasoning-blood-relations",
      text: "P is the mother of Q. Q is the brother of R. R is the daughter of S. How is P related to S?",
      optionA: "Sister",
      optionB: "Wife",
      optionC: "Daughter",
      optionD: "Mother",
      correctOption: "B",
      explanation: "P is mother of Q and R; S is father of R, so P is S's wife.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-reasoning-blood-relations-q08",
      topicId: "ssc-cgl-reasoning-blood-relations",
      text: "Your father's sister's husband is your:",
      optionA: "Maternal uncle",
      optionB: "Brother-in-law",
      optionC: "Paternal uncle (by marriage)",
      optionD: "Cousin",
      correctOption: "C",
      explanation: "Father's sister is your aunt; her husband is your uncle by marriage on the paternal side.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-reasoning-direction-sense-q01",
      topicId: "ssc-cgl-reasoning-direction-sense",
      text: "A man walks 3 km east then 4 km north. His shortest distance from the start is:",
      optionA: "5 km",
      optionB: "7 km",
      optionC: "6 km",
      optionD: "1 km",
      correctOption: "A",
      explanation: "Shortest = sqrt(3^2 + 4^2) = sqrt(25) = 5 km.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-direction-sense-q02",
      topicId: "ssc-cgl-reasoning-direction-sense",
      text: "Facing north, you take a right turn. You now face:",
      optionA: "East",
      optionB: "South",
      optionC: "West",
      optionD: "North",
      correctOption: "A",
      explanation: "A right turn from north (clockwise) faces east.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-reasoning-direction-sense-q03",
      topicId: "ssc-cgl-reasoning-direction-sense",
      text: "At sunrise a man's shadow falls towards his:",
      optionA: "West",
      optionB: "North",
      optionC: "East",
      optionD: "South",
      correctOption: "A",
      explanation: "The sun rises in the east, so shadows fall towards the west.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-reasoning-direction-sense-q04",
      topicId: "ssc-cgl-reasoning-direction-sense",
      text: "A walks 6 km south then 8 km west. His shortest distance from start is:",
      optionA: "10 km",
      optionB: "12 km",
      optionC: "14 km",
      optionD: "2 km",
      correctOption: "A",
      explanation: "Shortest = sqrt(6^2 + 8^2) = sqrt(100) = 10 km.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-reasoning-direction-sense-q05",
      topicId: "ssc-cgl-reasoning-direction-sense",
      text: "Facing south, you make an about-turn. You now face:",
      optionA: "East",
      optionB: "West",
      optionC: "South",
      optionD: "North",
      correctOption: "D",
      explanation: "An about-turn is a 180-degree reversal; from south you face north.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-reasoning-direction-sense-q06",
      topicId: "ssc-cgl-reasoning-direction-sense",
      text: "Facing east, you turn left. You now face:",
      optionA: "West",
      optionB: "South",
      optionC: "North",
      optionD: "East",
      correctOption: "C",
      explanation: "A left turn from east (anticlockwise) faces north.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-reasoning-direction-sense-q07",
      topicId: "ssc-cgl-reasoning-direction-sense",
      text: "A man walks 5 km north, 5 km east, 5 km south. He is now from start:",
      optionA: "5 km east",
      optionB: "5 km west",
      optionC: "5 km north",
      optionD: "10 km east",
      correctOption: "A",
      explanation: "North and south cancel; net displacement is 5 km east.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-reasoning-direction-sense-q08",
      topicId: "ssc-cgl-reasoning-direction-sense",
      text: "A path has legs of 5 km and 12 km at a right angle. The shortest distance is:",
      optionA: "15 km",
      optionB: "17 km",
      optionC: "13 km",
      optionD: "7 km",
      correctOption: "C",
      explanation: "Shortest = sqrt(5^2 + 12^2) = sqrt(169) = 13 km.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-reasoning-syllogism-q01",
      topicId: "ssc-cgl-reasoning-syllogism",
      text: "All A are B. All B are C. Which conclusion follows?",
      optionA: "All C are A",
      optionB: "No A is C",
      optionC: "Some C are not A",
      optionD: "All A are C",
      correctOption: "D",
      explanation: "All A are B and all B are C together give All A are C.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-syllogism-q02",
      topicId: "ssc-cgl-reasoning-syllogism",
      text: "\"Some A are B\" always implies which conversion?",
      optionA: "All B are A",
      optionB: "Some B are A",
      optionC: "No B is A",
      optionD: "All A are B",
      correctOption: "B",
      explanation: "A particular positive converts: Some A are B implies Some B are A.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-reasoning-syllogism-q03",
      topicId: "ssc-cgl-reasoning-syllogism",
      text: "Two particular statements together give:",
      optionA: "A universal conclusion",
      optionB: "No definite conclusion",
      optionC: "A negative conclusion",
      optionD: "All are related",
      correctOption: "B",
      explanation: "Two particular premises yield no definite conclusion.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-reasoning-syllogism-q04",
      topicId: "ssc-cgl-reasoning-syllogism",
      text: "All pens are books. No book is red. Which follows?",
      optionA: "Some pens are red",
      optionB: "No pen is red",
      optionC: "All books are pens",
      optionD: "All red are books",
      correctOption: "B",
      explanation: "If no book is red and all pens are books, then no pen is red.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-reasoning-syllogism-q05",
      topicId: "ssc-cgl-reasoning-syllogism",
      text: "Does \"All A are B\" mean \"All B are A\"?",
      optionA: "No, not necessarily",
      optionB: "Yes, always",
      optionC: "Only if A equals B",
      optionD: "Only for particular statements",
      correctOption: "A",
      explanation: "All A are B does not reverse; All B are A need not hold.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-reasoning-syllogism-q06",
      topicId: "ssc-cgl-reasoning-syllogism",
      text: "Some A are B. All B are C. Which follows?",
      optionA: "No A is C",
      optionB: "All A are C",
      optionC: "Some A are C",
      optionD: "All C are A",
      correctOption: "C",
      explanation: "Some A are B and all B are C give Some A are C.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-reasoning-syllogism-q07",
      topicId: "ssc-cgl-reasoning-syllogism",
      text: "Two negative statements together give:",
      optionA: "A valid conclusion",
      optionB: "Some are conclusion",
      optionC: "A universal positive",
      optionD: "No definite conclusion",
      correctOption: "D",
      explanation: "Two negative premises yield no definite conclusion.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-reasoning-syllogism-q08",
      topicId: "ssc-cgl-reasoning-syllogism",
      text: "In syllogism, you should judge conclusions based on:",
      optionA: "The given statements only",
      optionB: "Real-world facts",
      optionC: "Common sense",
      optionD: "Personal opinion",
      correctOption: "A",
      explanation: "Conclusions must follow strictly from the given statements, not outside knowledge.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-reasoning-seating-puzzles-q01",
      topicId: "ssc-cgl-reasoning-seating-puzzles",
      text: "In a row of 5 facing north, who is exactly in the middle position?",
      optionA: "1st",
      optionB: "2nd",
      optionC: "5th",
      optionD: "3rd",
      correctOption: "D",
      explanation: "In a row of 5, the middle position is the 3rd seat.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-seating-puzzles-q02",
      topicId: "ssc-cgl-reasoning-seating-puzzles",
      text: "Five friends sit in a row. A is left of B, B is left of C. The leftmost so far is:",
      optionA: "B",
      optionB: "A",
      optionC: "C",
      optionD: "Cannot say",
      correctOption: "B",
      explanation: "A is left of B who is left of C, so A is the leftmost of these three.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-reasoning-seating-puzzles-q03",
      topicId: "ssc-cgl-reasoning-seating-puzzles",
      text: "In a circle facing the centre, a person's right hand points toward which side?",
      optionA: "Outside",
      optionB: "Anticlockwise neighbour",
      optionC: "The centre",
      optionD: "Clockwise neighbour",
      correctOption: "D",
      explanation: "Facing centre, your right is toward the clockwise neighbour.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-reasoning-seating-puzzles-q04",
      topicId: "ssc-cgl-reasoning-seating-puzzles",
      text: "In a row of 7 people, the person 3rd from left is also which from the right?",
      optionA: "3rd",
      optionB: "5th",
      optionC: "4th",
      optionD: "6th",
      correctOption: "B",
      explanation: "Position from right = total − left position + 1 = 7 − 3 + 1 = 5th.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-reasoning-seating-puzzles-q05",
      topicId: "ssc-cgl-reasoning-seating-puzzles",
      text: "Eight people sit evenly around a circle. The person opposite seat 1 is at seat:",
      optionA: "4",
      optionB: "8",
      optionC: "6",
      optionD: "5",
      correctOption: "D",
      explanation: "Opposite seat in a circle of 8 is 1 + 4 = seat 5.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-reasoning-seating-puzzles-q06",
      topicId: "ssc-cgl-reasoning-seating-puzzles",
      text: "In a circle facing outward, a person's right hand points toward which side?",
      optionA: "Clockwise neighbour",
      optionB: "The centre",
      optionC: "Anticlockwise neighbour",
      optionD: "Nobody",
      correctOption: "C",
      explanation: "Facing outward, your right is toward the anticlockwise neighbour.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-reasoning-seating-puzzles-q07",
      topicId: "ssc-cgl-reasoning-seating-puzzles",
      text: "In a row of 10, a person is 4th from the left. How many people are to the right of them?",
      optionA: "5",
      optionB: "7",
      optionC: "6",
      optionD: "4",
      correctOption: "C",
      explanation: "People to the right = 10 − 4 = 6.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-reasoning-seating-puzzles-q08",
      topicId: "ssc-cgl-reasoning-seating-puzzles",
      text: "When solving a seating puzzle, you should begin with:",
      optionA: "A vague clue",
      optionB: "The most concrete fixed clue",
      optionC: "The last clue",
      optionD: "A random guess",
      correctOption: "B",
      explanation: "Start from the most concrete fixed clue to anchor the arrangement.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-reasoning-clock-calendar-q01",
      topicId: "ssc-cgl-reasoning-clock-calendar",
      text: "The angle between the hands of a clock at 3:00 is:",
      optionA: "60 degrees",
      optionB: "120 degrees",
      optionC: "90 degrees",
      optionD: "180 degrees",
      correctOption: "C",
      explanation: "Angle = |30×3 − 5.5×0| = 90 degrees.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-clock-calendar-q02",
      topicId: "ssc-cgl-reasoning-clock-calendar",
      text: "How many odd days are there in an ordinary year?",
      optionA: "0",
      optionB: "3",
      optionC: "2",
      optionD: "1",
      correctOption: "D",
      explanation: "365 days give 365 mod 7 = 1 odd day.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-reasoning-clock-calendar-q03",
      topicId: "ssc-cgl-reasoning-clock-calendar",
      text: "The minute hand moves how many degrees per minute?",
      optionA: "0.5 degrees",
      optionB: "6 degrees",
      optionC: "1 degree",
      optionD: "12 degrees",
      correctOption: "B",
      explanation: "The minute hand covers 360 degrees in 60 minutes = 6 degrees per minute.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-reasoning-clock-calendar-q04",
      topicId: "ssc-cgl-reasoning-clock-calendar",
      text: "Which of these is a leap year?",
      optionA: "1900",
      optionB: "1800",
      optionC: "2100",
      optionD: "2000",
      correctOption: "D",
      explanation: "Century years are leap only if divisible by 400; 2000 qualifies.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-reasoning-clock-calendar-q05",
      topicId: "ssc-cgl-reasoning-clock-calendar",
      text: "The angle between the clock hands at 6:00 is:",
      optionA: "90 degrees",
      optionB: "120 degrees",
      optionC: "150 degrees",
      optionD: "180 degrees",
      correctOption: "D",
      explanation: "Angle = |30×6 − 5.5×0| = 180 degrees.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-reasoning-clock-calendar-q06",
      topicId: "ssc-cgl-reasoning-clock-calendar",
      text: "How many odd days are there in a leap year?",
      optionA: "2",
      optionB: "1",
      optionC: "3",
      optionD: "0",
      correctOption: "A",
      explanation: "366 days give 366 mod 7 = 2 odd days.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-reasoning-clock-calendar-q07",
      topicId: "ssc-cgl-reasoning-clock-calendar",
      text: "In 12 hours, the hands of a clock coincide how many times?",
      optionA: "10",
      optionB: "24",
      optionC: "12",
      optionD: "11",
      correctOption: "D",
      explanation: "The hands coincide 11 times in every 12 hours.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-reasoning-clock-calendar-q08",
      topicId: "ssc-cgl-reasoning-clock-calendar",
      text: "The hour hand moves how many degrees per minute?",
      optionA: "1 degree",
      optionB: "0.5 degrees",
      optionC: "6 degrees",
      optionD: "2 degrees",
      correctOption: "B",
      explanation: "The hour hand covers 30 degrees in 60 minutes = 0.5 degrees per minute.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-reasoning-mirror-paper-folding-q01",
      topicId: "ssc-cgl-reasoning-mirror-paper-folding",
      text: "A vertical mirror image reverses which directions?",
      optionA: "Top and bottom",
      optionB: "Left and right",
      optionC: "Both diagonals",
      optionD: "Nothing changes",
      correctOption: "B",
      explanation: "A vertical mirror reverses left and right while keeping top and bottom.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-mirror-paper-folding-q02",
      topicId: "ssc-cgl-reasoning-mirror-paper-folding",
      text: "A water image reverses which directions?",
      optionA: "Left and right",
      optionB: "Both",
      optionC: "Nothing changes",
      optionD: "Top and bottom",
      correctOption: "D",
      explanation: "A water image flips the figure top to bottom about a horizontal line.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-reasoning-mirror-paper-folding-q03",
      topicId: "ssc-cgl-reasoning-mirror-paper-folding",
      text: "Which letter looks the same in a vertical mirror?",
      optionA: "B",
      optionB: "A",
      optionC: "F",
      optionD: "G",
      correctOption: "B",
      explanation: "A has a vertical axis of symmetry, so it is unchanged in a vertical mirror.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-reasoning-mirror-paper-folding-q04",
      topicId: "ssc-cgl-reasoning-mirror-paper-folding",
      text: "A paper folded once, punched with one hole, when opened shows how many holes?",
      optionA: "1",
      optionB: "3",
      optionC: "2",
      optionD: "4",
      correctOption: "C",
      explanation: "One fold creates a symmetric pair, giving 2 holes.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-reasoning-mirror-paper-folding-q05",
      topicId: "ssc-cgl-reasoning-mirror-paper-folding",
      text: "Which letter does NOT have vertical mirror symmetry?",
      optionA: "H",
      optionB: "R",
      optionC: "T",
      optionD: "O",
      correctOption: "B",
      explanation: "R lacks a vertical axis of symmetry; H, O and T have one.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-reasoning-mirror-paper-folding-q06",
      topicId: "ssc-cgl-reasoning-mirror-paper-folding",
      text: "A paper folded twice, punched once, when opened shows up to how many holes?",
      optionA: "2",
      optionB: "3",
      optionC: "4",
      optionD: "8",
      correctOption: "C",
      explanation: "Two folds can double twice, giving up to 4 holes.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-reasoning-mirror-paper-folding-q07",
      topicId: "ssc-cgl-reasoning-mirror-paper-folding",
      text: "In a mirror, a clock shows 3:00. What time does the actual clock show?",
      optionA: "3:00",
      optionB: "9:00",
      optionC: "6:00",
      optionD: "12:00",
      correctOption: "B",
      explanation: "Mirror time = 12:00 − shown time, so 12:00 − 3:00 = 9:00.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-reasoning-mirror-paper-folding-q08",
      topicId: "ssc-cgl-reasoning-mirror-paper-folding",
      text: "For mirror images you should:",
      optionA: "Swap top and bottom",
      optionB: "Rotate 90 degrees",
      optionC: "Swap left and right",
      optionD: "Do nothing",
      correctOption: "C",
      explanation: "A mirror image swaps left and right while keeping top and bottom fixed.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-reasoning-statement-conclusion-q01",
      topicId: "ssc-cgl-reasoning-statement-conclusion",
      text: "Statement: \"Smoking is injurious to health.\" Conclusion: \"One should avoid smoking.\" Does it follow?",
      optionA: "Follows",
      optionB: "Does not follow",
      optionC: "Cannot be determined",
      optionD: "Partially follows",
      correctOption: "A",
      explanation: "The recommendation to avoid smoking is implied by the statement, so it follows.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-statement-conclusion-q02",
      topicId: "ssc-cgl-reasoning-statement-conclusion",
      text: "In statement-conclusion questions, conclusions needing outside facts:",
      optionA: "Do not follow",
      optionB: "Always follow",
      optionC: "Follow if true in reality",
      optionD: "Follow sometimes",
      correctOption: "A",
      explanation: "Conclusions requiring outside facts do not follow from the statement alone.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-reasoning-statement-conclusion-q03",
      topicId: "ssc-cgl-reasoning-statement-conclusion",
      text: "A conclusion that merely restates the statement:",
      optionA: "Does not follow",
      optionB: "Needs more data",
      optionC: "Is always wrong",
      optionD: "Follows trivially",
      correctOption: "D",
      explanation: "A restatement of the statement follows trivially.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-reasoning-statement-conclusion-q04",
      topicId: "ssc-cgl-reasoning-statement-conclusion",
      text: "An assumption is best described as something that is:",
      optionA: "Drawn after the statement",
      optionB: "A restatement",
      optionC: "An outside fact",
      optionD: "Taken for granted to make the statement meaningful",
      correctOption: "D",
      explanation: "An assumption is taken for granted to make the statement meaningful.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-reasoning-statement-conclusion-q05",
      topicId: "ssc-cgl-reasoning-statement-conclusion",
      text: "When evaluating two conclusions, you should test them:",
      optionA: "Independently",
      optionB: "Together as one",
      optionC: "Using real-world data",
      optionD: "By guessing",
      correctOption: "A",
      explanation: "Each conclusion is tested independently before selecting the combined option.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-reasoning-statement-conclusion-q06",
      topicId: "ssc-cgl-reasoning-statement-conclusion",
      text: "Statement: \"The library is open from 9 am to 5 pm.\" Conclusion: \"The library is closed at 8 pm.\" Does it follow?",
      optionA: "Cannot be determined",
      optionB: "Does not follow",
      optionC: "Follows",
      optionD: "Partially follows",
      correctOption: "C",
      explanation: "Since hours end at 5 pm, the library is closed at 8 pm, so it follows.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-reasoning-statement-conclusion-q07",
      topicId: "ssc-cgl-reasoning-statement-conclusion",
      text: "An overly strong, absolute conclusion drawn from a moderate statement:",
      optionA: "Does not follow",
      optionB: "Follows",
      optionC: "Always follows",
      optionD: "Is an assumption",
      correctOption: "A",
      explanation: "An absolute claim beyond a moderate statement does not follow.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-reasoning-statement-conclusion-q08",
      topicId: "ssc-cgl-reasoning-statement-conclusion",
      text: "In these questions, the statement should be treated as:",
      optionA: "Possibly false",
      optionB: "One of many facts",
      optionC: "The only available truth",
      optionD: "Irrelevant",
      correctOption: "C",
      explanation: "The statement is treated as the only truth available for the conclusion.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-english-synonyms-antonyms-q01",
      topicId: "ssc-cgl-english-synonyms-antonyms",
      text: "Choose the synonym of ABUNDANT:",
      optionA: "Scarce",
      optionB: "Plentiful",
      optionC: "Empty",
      optionD: "Rare",
      correctOption: "B",
      explanation: "Abundant means existing in large quantity, that is, plentiful.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-synonyms-antonyms-q02",
      topicId: "ssc-cgl-english-synonyms-antonyms",
      text: "Choose the antonym of TRANSPARENT:",
      optionA: "Clear",
      optionB: "Opaque",
      optionC: "Glassy",
      optionD: "Bright",
      correctOption: "B",
      explanation: "The opposite of transparent (see-through) is opaque.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-english-synonyms-antonyms-q03",
      topicId: "ssc-cgl-english-synonyms-antonyms",
      text: "Choose the synonym of CANDID:",
      optionA: "Frank",
      optionB: "Secretive",
      optionC: "Rude",
      optionD: "Shy",
      correctOption: "A",
      explanation: "Candid means open and honest, that is, frank.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-english-synonyms-antonyms-q04",
      topicId: "ssc-cgl-english-synonyms-antonyms",
      text: "Choose the antonym of FRUGAL:",
      optionA: "Extravagant",
      optionB: "Economical",
      optionC: "Thrifty",
      optionD: "Careful",
      correctOption: "A",
      explanation: "Frugal means sparing with money; its opposite is extravagant.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-english-synonyms-antonyms-q05",
      topicId: "ssc-cgl-english-synonyms-antonyms",
      text: "Choose the synonym of BENEVOLENT:",
      optionA: "Kind",
      optionB: "Cruel",
      optionC: "Greedy",
      optionD: "Harsh",
      correctOption: "A",
      explanation: "Benevolent means well-meaning and kind.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-english-synonyms-antonyms-q06",
      topicId: "ssc-cgl-english-synonyms-antonyms",
      text: "Choose the antonym of OPTIMIST:",
      optionA: "Dreamer",
      optionB: "Pessimist",
      optionC: "Realist",
      optionD: "Believer",
      correctOption: "B",
      explanation: "An optimist expects the best; the opposite is a pessimist.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-english-synonyms-antonyms-q07",
      topicId: "ssc-cgl-english-synonyms-antonyms",
      text: "Choose the synonym of LETHARGIC:",
      optionA: "Sluggish",
      optionB: "Energetic",
      optionC: "Active",
      optionD: "Quick",
      correctOption: "A",
      explanation: "Lethargic means lacking energy, that is, sluggish.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-english-synonyms-antonyms-q08",
      topicId: "ssc-cgl-english-synonyms-antonyms",
      text: "Choose the antonym of AMATEUR:",
      optionA: "Beginner",
      optionB: "Novice",
      optionC: "Professional",
      optionD: "Learner",
      correctOption: "C",
      explanation: "An amateur is a non-expert; the opposite is a professional.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-english-spotting-errors-q01",
      topicId: "ssc-cgl-english-spotting-errors",
      text: "Identify the error: \"One of the boys (A)/ are absent (B)/ today (C)/ No error (D).\"",
      optionA: "B",
      optionB: "A",
      optionC: "C",
      optionD: "D",
      correctOption: "A",
      explanation: "\"One of the boys\" is singular, so it should be \"is absent\".",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-spotting-errors-q02",
      topicId: "ssc-cgl-english-spotting-errors",
      text: "Identify the error: \"Each student (A)/ have submitted (B)/ the form (C)/ No error (D).\"",
      optionA: "A",
      optionB: "D",
      optionC: "C",
      optionD: "B",
      correctOption: "D",
      explanation: "\"Each\" is singular, so it takes \"has submitted\".",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-english-spotting-errors-q03",
      topicId: "ssc-cgl-english-spotting-errors",
      text: "Identify the error: \"The furniture (A)/ in this room (B)/ are very old (C)/ No error (D).\"",
      optionA: "A",
      optionB: "C",
      optionC: "B",
      optionD: "D",
      correctOption: "B",
      explanation: "\"Furniture\" is uncountable and takes a singular verb \"is very old\".",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-english-spotting-errors-q04",
      topicId: "ssc-cgl-english-spotting-errors",
      text: "Identify the error: \"She is (A)/ more better (B)/ than her sister (C)/ No error (D).\"",
      optionA: "A",
      optionB: "D",
      optionC: "C",
      optionD: "B",
      correctOption: "D",
      explanation: "\"More better\" is a double comparative; it should be just \"better\".",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-english-spotting-errors-q05",
      topicId: "ssc-cgl-english-spotting-errors",
      text: "Identify the error: \"He returned (A)/ back home (B)/ late at night (C)/ No error (D).\"",
      optionA: "A",
      optionB: "B",
      optionC: "C",
      optionD: "D",
      correctOption: "B",
      explanation: "\"Returned back\" is redundant; \"returned\" alone is correct.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-english-spotting-errors-q06",
      topicId: "ssc-cgl-english-spotting-errors",
      text: "Identify the error: \"He bought (A)/ a umbrella (B)/ from the market (C)/ No error (D).\"",
      optionA: "A",
      optionB: "D",
      optionC: "C",
      optionD: "B",
      correctOption: "D",
      explanation: "\"Umbrella\" begins with a vowel sound, so it needs \"an umbrella\".",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-english-spotting-errors-q07",
      topicId: "ssc-cgl-english-spotting-errors",
      text: "Identify the error: \"The committee (A)/ comprises of (B)/ ten members (C)/ No error (D).\"",
      optionA: "B",
      optionB: "A",
      optionC: "C",
      optionD: "D",
      correctOption: "A",
      explanation: "\"Comprise\" takes no preposition; \"comprises of\" should be \"comprises\".",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-english-spotting-errors-q08",
      topicId: "ssc-cgl-english-spotting-errors",
      text: "Identify the error: \"They have (A)/ completed the project (B)/ successfully (C)/ No error (D).\"",
      optionA: "A",
      optionB: "B",
      optionC: "C",
      optionD: "D",
      correctOption: "D",
      explanation: "The sentence is grammatically correct, so the answer is No error.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-english-sentence-improvement-spelling-q01",
      topicId: "ssc-cgl-english-sentence-improvement-spelling",
      text: "Improve: \"She has went to the market.\"",
      optionA: "has gone",
      optionB: "have went",
      optionC: "had went",
      optionD: "No improvement",
      correctOption: "A",
      explanation: "The past participle of go is gone, so \"has gone\" is correct.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-sentence-improvement-spelling-q02",
      topicId: "ssc-cgl-english-sentence-improvement-spelling",
      text: "Choose the correctly spelt word:",
      optionA: "Accomodate",
      optionB: "Acommodate",
      optionC: "Accommodate",
      optionD: "Acomodate",
      correctOption: "C",
      explanation: "Accommodate has two c's and two m's.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-english-sentence-improvement-spelling-q03",
      topicId: "ssc-cgl-english-sentence-improvement-spelling",
      text: "Improve: \"Let us discuss about the plan.\"",
      optionA: "discuss on",
      optionB: "discuss about",
      optionC: "discuss over",
      optionD: "discuss",
      correctOption: "D",
      explanation: "\"Discuss\" takes no preposition, so \"discuss the plan\" is correct.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-english-sentence-improvement-spelling-q04",
      topicId: "ssc-cgl-english-sentence-improvement-spelling",
      text: "Choose the correctly spelt word:",
      optionA: "Definitely",
      optionB: "Definately",
      optionC: "Definitly",
      optionD: "Defenitely",
      correctOption: "A",
      explanation: "Definitely is spelt with no a and ends in -itely.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-english-sentence-improvement-spelling-q05",
      topicId: "ssc-cgl-english-sentence-improvement-spelling",
      text: "Improve: \"He gave me a free gift.\"",
      optionA: "a free gift",
      optionB: "a gift",
      optionC: "an free gift",
      optionD: "free of gift",
      correctOption: "B",
      explanation: "A gift is already free, so \"free gift\" is redundant; \"a gift\" is correct.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-english-sentence-improvement-spelling-q06",
      topicId: "ssc-cgl-english-sentence-improvement-spelling",
      text: "Choose the correctly spelt word:",
      optionA: "Embarass",
      optionB: "Embaras",
      optionC: "Embarrass",
      optionD: "Embarras",
      correctOption: "C",
      explanation: "Embarrass has two r's and two s's.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-english-sentence-improvement-spelling-q07",
      topicId: "ssc-cgl-english-sentence-improvement-spelling",
      text: "Improve: \"She likes reading and to write.\"",
      optionA: "reading and writing",
      optionB: "reading and to write",
      optionC: "to read and writing",
      optionD: "read and write",
      correctOption: "A",
      explanation: "Parallelism requires matching forms: \"reading and writing\".",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-english-sentence-improvement-spelling-q08",
      topicId: "ssc-cgl-english-sentence-improvement-spelling",
      text: "Choose the word meaning paper goods (pens, paper):",
      optionA: "Stationary",
      optionB: "Stationry",
      optionC: "Stationery",
      optionD: "Stationarry",
      correctOption: "C",
      explanation: "Stationery (with an e) means paper goods; stationary means still.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-english-reading-comprehension-q01",
      topicId: "ssc-cgl-english-reading-comprehension",
      text: "In RC, a factual question is best answered by:",
      optionA: "Guessing",
      optionB: "Prior knowledge",
      optionC: "Locating the exact line in the passage",
      optionD: "Choosing the longest option",
      correctOption: "C",
      explanation: "Factual answers are found by locating the exact line in the passage.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-reading-comprehension-q02",
      topicId: "ssc-cgl-english-reading-comprehension",
      text: "An inference answer should:",
      optionA: "Go far beyond the text",
      optionB: "Stay one safe step beyond the text",
      optionC: "Contradict the text",
      optionD: "Ignore the text",
      correctOption: "B",
      explanation: "A good inference stays one safe step beyond the passage.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-english-reading-comprehension-q03",
      topicId: "ssc-cgl-english-reading-comprehension",
      text: "Answers in reading comprehension should be based on:",
      optionA: "The passage only",
      optionB: "General knowledge",
      optionC: "Personal opinion",
      optionD: "Other passages",
      correctOption: "A",
      explanation: "RC answers must come strictly from the passage, not prior knowledge.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-english-reading-comprehension-q04",
      topicId: "ssc-cgl-english-reading-comprehension",
      text: "Which word describes a neutral author tone?",
      optionA: "Objective",
      optionB: "Sceptical",
      optionC: "Critical",
      optionD: "Appreciative",
      correctOption: "A",
      explanation: "Objective and descriptive indicate a neutral tone.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-english-reading-comprehension-q05",
      topicId: "ssc-cgl-english-reading-comprehension",
      text: "A common RC trap is choosing an option that is:",
      optionA: "True in real life but unsupported by the passage",
      optionB: "Supported by the passage",
      optionC: "Directly quoted",
      optionD: "The main idea",
      correctOption: "A",
      explanation: "A trap is an option true in real life but not supported by the passage.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-english-reading-comprehension-q06",
      topicId: "ssc-cgl-english-reading-comprehension",
      text: "For vocabulary-in-context questions, the best method is to:",
      optionA: "Use the dictionary meaning only",
      optionB: "Pick the hardest word",
      optionC: "Replace the word with each option and test the fit",
      optionD: "Skip the question",
      correctOption: "C",
      explanation: "Replace the word with each option and test the fit in context.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-english-reading-comprehension-q07",
      topicId: "ssc-cgl-english-reading-comprehension",
      text: "A title question asks for the passage's:",
      optionA: "Smallest detail",
      optionB: "Hardest word",
      optionC: "First sentence",
      optionD: "Central idea",
      correctOption: "D",
      explanation: "A title question asks for the central idea of the passage.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-english-reading-comprehension-q08",
      topicId: "ssc-cgl-english-reading-comprehension",
      text: "A good first step in RC is to:",
      optionA: "Skim for the main idea",
      optionB: "Memorise the passage",
      optionC: "Read every option first",
      optionD: "Answer without reading",
      correctOption: "A",
      explanation: "Skim for the main idea first, then read the questions.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-english-active-passive-voice-q01",
      topicId: "ssc-cgl-english-active-passive-voice",
      text: "Change to passive: \"She writes a letter.\"",
      optionA: "A letter was written by her.",
      optionB: "A letter is written by her.",
      optionC: "A letter is being written by her.",
      optionD: "A letter has written by her.",
      correctOption: "B",
      explanation: "Simple present passive uses is/are + V3: A letter is written by her.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-active-passive-voice-q02",
      topicId: "ssc-cgl-english-active-passive-voice",
      text: "Change to passive: \"He ate an apple.\"",
      optionA: "An apple is eaten by him.",
      optionB: "An apple has been eaten by him.",
      optionC: "An apple was ate by him.",
      optionD: "An apple was eaten by him.",
      correctOption: "D",
      explanation: "Simple past passive uses was/were + V3: An apple was eaten by him.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-english-active-passive-voice-q03",
      topicId: "ssc-cgl-english-active-passive-voice",
      text: "Change to passive: \"They are building a house.\"",
      optionA: "A house is built by them.",
      optionB: "A house is being built by them.",
      optionC: "A house was being built by them.",
      optionD: "A house has been built by them.",
      correctOption: "B",
      explanation: "Present continuous passive uses is/are being + V3.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-english-active-passive-voice-q04",
      topicId: "ssc-cgl-english-active-passive-voice",
      text: "Change to passive: \"She has completed the task.\"",
      optionA: "The task is completed by her.",
      optionB: "The task was completed by her.",
      optionC: "The task has been completed by her.",
      optionD: "The task had completed by her.",
      correctOption: "C",
      explanation: "Present perfect passive uses has/have been + V3.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-english-active-passive-voice-q05",
      topicId: "ssc-cgl-english-active-passive-voice",
      text: "Change to passive: \"He will finish the work.\"",
      optionA: "The work was finished by him.",
      optionB: "The work is finished by him.",
      optionC: "The work will been finished by him.",
      optionD: "The work will be finished by him.",
      correctOption: "D",
      explanation: "Future simple passive uses will be + V3.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-english-active-passive-voice-q06",
      topicId: "ssc-cgl-english-active-passive-voice",
      text: "Change to passive: \"You can solve this problem.\"",
      optionA: "This problem can be solved by you.",
      optionB: "This problem is solved by you.",
      optionC: "This problem could be solved by you.",
      optionD: "This problem can solved by you.",
      correctOption: "A",
      explanation: "Modals stay: \"can solve\" becomes \"can be solved\".",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-english-active-passive-voice-q07",
      topicId: "ssc-cgl-english-active-passive-voice",
      text: "In passive voice, the object of the active sentence becomes the:",
      optionA: "Verb",
      optionB: "Adverb",
      optionC: "Subject",
      optionD: "Agent",
      correctOption: "C",
      explanation: "The object of the active sentence becomes the subject of the passive.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-english-active-passive-voice-q08",
      topicId: "ssc-cgl-english-active-passive-voice",
      text: "Change to passive: \"The teacher praised the student.\"",
      optionA: "The student is praised by the teacher.",
      optionB: "The student praised by the teacher.",
      optionC: "The student has praised by the teacher.",
      optionD: "The student was praised by the teacher.",
      correctOption: "D",
      explanation: "Simple past passive: The student was praised by the teacher.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-english-cloze-test-q01",
      topicId: "ssc-cgl-english-cloze-test",
      text: "He worked hard, ____ he failed the exam.",
      optionA: "so",
      optionB: "and",
      optionC: "because",
      optionD: "but",
      correctOption: "D",
      explanation: "A contrast between effort and failure needs the connector \"but\".",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-cloze-test-q02",
      topicId: "ssc-cgl-english-cloze-test",
      text: "She was tired, ____ she went to sleep early.",
      optionA: "but",
      optionB: "yet",
      optionC: "although",
      optionD: "so",
      correctOption: "D",
      explanation: "A cause and result relationship needs \"so\".",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-english-cloze-test-q03",
      topicId: "ssc-cgl-english-cloze-test",
      text: "Please pay ____ to the instructions.",
      optionA: "notice",
      optionB: "mind",
      optionC: "care",
      optionD: "attention",
      correctOption: "D",
      explanation: "The fixed collocation is \"pay attention\".",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-english-cloze-test-q04",
      topicId: "ssc-cgl-english-cloze-test",
      text: "We must ____ a decision quickly.",
      optionA: "make",
      optionB: "take",
      optionC: "do",
      optionD: "give",
      correctOption: "A",
      explanation: "The collocation is \"make a decision\".",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-english-cloze-test-q05",
      topicId: "ssc-cgl-english-cloze-test",
      text: "____ it was raining, we went out.",
      optionA: "Because",
      optionB: "Although",
      optionC: "So",
      optionD: "Therefore",
      correctOption: "B",
      explanation: "A contrast between rain and going out needs \"Although\".",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-english-cloze-test-q06",
      topicId: "ssc-cgl-english-cloze-test",
      text: "The students must ____ their homework daily.",
      optionA: "make",
      optionB: "give",
      optionC: "take",
      optionD: "do",
      correctOption: "D",
      explanation: "The collocation is \"do homework\".",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-english-cloze-test-q07",
      topicId: "ssc-cgl-english-cloze-test",
      text: "He could not come ____ he was ill.",
      optionA: "but",
      optionB: "yet",
      optionC: "although",
      optionD: "because",
      correctOption: "D",
      explanation: "A reason follows, so the cause connector \"because\" fits.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-english-cloze-test-q08",
      topicId: "ssc-cgl-english-cloze-test",
      text: "After filling all blanks in a cloze test, you should:",
      optionA: "Submit immediately",
      optionB: "Reread the full passage to confirm flow",
      optionC: "Change every answer",
      optionD: "Ignore the connectors",
      correctOption: "B",
      explanation: "Reread the full passage to confirm it flows coherently.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-general-awareness-history-q01",
      topicId: "ssc-cgl-general-awareness-history",
      text: "In which year did the First War of Independence take place?",
      optionA: "1947",
      optionB: "1885",
      optionC: "1919",
      optionD: "1857",
      correctOption: "D",
      explanation: "The First War of Independence occurred in 1857.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-history-q02",
      topicId: "ssc-cgl-general-awareness-history",
      text: "The Indian National Congress was formed in:",
      optionA: "1857",
      optionB: "1885",
      optionC: "1905",
      optionD: "1919",
      correctOption: "B",
      explanation: "The INC was founded in 1885.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-general-awareness-history-q03",
      topicId: "ssc-cgl-general-awareness-history",
      text: "The Dandi Salt March was led by Gandhi in:",
      optionA: "1920",
      optionB: "1930",
      optionC: "1942",
      optionD: "1947",
      correctOption: "B",
      explanation: "The Dandi Salt March took place in 1930.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-general-awareness-history-q04",
      topicId: "ssc-cgl-general-awareness-history",
      text: "Who founded the Forward Bloc?",
      optionA: "Mahatma Gandhi",
      optionB: "Jawaharlal Nehru",
      optionC: "Subhas Chandra Bose",
      optionD: "Dadabhai Naoroji",
      correctOption: "C",
      explanation: "Subhas Chandra Bose founded the Forward Bloc and led the INA.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-general-awareness-history-q05",
      topicId: "ssc-cgl-general-awareness-history",
      text: "The Quit India Movement was launched in:",
      optionA: "1930",
      optionB: "1942",
      optionC: "1919",
      optionD: "1947",
      correctOption: "B",
      explanation: "The Quit India Movement began in 1942.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-general-awareness-history-q06",
      topicId: "ssc-cgl-general-awareness-history",
      text: "Which Mauryan emperor embraced Buddhism after the Kalinga war?",
      optionA: "Chandragupta",
      optionB: "Bindusara",
      optionC: "Harsha",
      optionD: "Ashoka",
      correctOption: "D",
      explanation: "Ashoka embraced Buddhism after the Kalinga war.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-general-awareness-history-q07",
      topicId: "ssc-cgl-general-awareness-history",
      text: "Which age is called the Golden Age of India?",
      optionA: "Mauryan age",
      optionB: "Mughal age",
      optionC: "Gupta age",
      optionD: "Vedic age",
      correctOption: "C",
      explanation: "The Gupta age is called the Golden Age of India.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-general-awareness-history-q08",
      topicId: "ssc-cgl-general-awareness-history",
      text: "Who is called the Grand Old Man of India?",
      optionA: "Dadabhai Naoroji",
      optionB: "Mahatma Gandhi",
      optionC: "B.R. Ambedkar",
      optionD: "Subhas Chandra Bose",
      correctOption: "A",
      explanation: "Dadabhai Naoroji is called the Grand Old Man of India.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-general-awareness-geography-q01",
      topicId: "ssc-cgl-general-awareness-geography",
      text: "Which is the highest peak located within India?",
      optionA: "Mount Everest",
      optionB: "Kanchenjunga",
      optionC: "Nanda Devi",
      optionD: "K2",
      correctOption: "B",
      explanation: "Kanchenjunga is the highest peak located within India.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-geography-q02",
      topicId: "ssc-cgl-general-awareness-geography",
      text: "The longest river of India is the:",
      optionA: "Godavari",
      optionB: "Ganga",
      optionC: "Yamuna",
      optionD: "Brahmaputra",
      correctOption: "B",
      explanation: "The Ganga is the longest river of India.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-general-awareness-geography-q03",
      topicId: "ssc-cgl-general-awareness-geography",
      text: "The largest Indian state by area is:",
      optionA: "Madhya Pradesh",
      optionB: "Rajasthan",
      optionC: "Maharashtra",
      optionD: "Uttar Pradesh",
      correctOption: "B",
      explanation: "Rajasthan is the largest Indian state by area.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-general-awareness-geography-q04",
      topicId: "ssc-cgl-general-awareness-geography",
      text: "The longest river of peninsular India is the:",
      optionA: "Ganga",
      optionB: "Kaveri",
      optionC: "Krishna",
      optionD: "Godavari",
      correctOption: "D",
      explanation: "The Godavari is the longest river of peninsular India.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-general-awareness-geography-q05",
      topicId: "ssc-cgl-general-awareness-geography",
      text: "The largest hot desert in the world is the:",
      optionA: "Sahara",
      optionB: "Gobi",
      optionC: "Thar",
      optionD: "Kalahari",
      correctOption: "A",
      explanation: "The Sahara is the largest hot desert in the world.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-general-awareness-geography-q06",
      topicId: "ssc-cgl-general-awareness-geography",
      text: "Which soil is best suited for cotton cultivation?",
      optionA: "Alluvial soil",
      optionB: "Laterite soil",
      optionC: "Red soil",
      optionD: "Black soil",
      correctOption: "D",
      explanation: "Black soil (regur) is best suited for cotton.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-general-awareness-geography-q07",
      topicId: "ssc-cgl-general-awareness-geography",
      text: "Which brings most of India's annual rainfall?",
      optionA: "Northeast monsoon",
      optionB: "Southwest monsoon",
      optionC: "Western disturbances",
      optionD: "Local thunderstorms",
      correctOption: "B",
      explanation: "The southwest monsoon brings most of India's annual rainfall.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-general-awareness-geography-q08",
      topicId: "ssc-cgl-general-awareness-geography",
      text: "The River Ganga rises from which glacier region?",
      optionA: "Yamunotri",
      optionB: "Siachen",
      optionC: "Gangotri (Gaumukh)",
      optionD: "Pindari",
      correctOption: "C",
      explanation: "The Ganga rises from Gangotri (Gaumukh) in Uttarakhand.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-general-awareness-general-science-q01",
      topicId: "ssc-cgl-general-awareness-general-science",
      text: "The SI unit of force is the:",
      optionA: "Joule",
      optionB: "Newton",
      optionC: "Watt",
      optionD: "Pascal",
      correctOption: "B",
      explanation: "The SI unit of force is the Newton.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-general-science-q02",
      topicId: "ssc-cgl-general-awareness-general-science",
      text: "On the pH scale, a value of 7 is:",
      optionA: "Neutral",
      optionB: "Basic",
      optionC: "Acidic",
      optionD: "Strongly acidic",
      correctOption: "A",
      explanation: "A pH of 7 is neutral; below 7 is acidic, above 7 is basic.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-general-awareness-general-science-q03",
      topicId: "ssc-cgl-general-awareness-general-science",
      text: "The powerhouse of the cell is the:",
      optionA: "Mitochondrion",
      optionB: "Ribosome",
      optionC: "Nucleus",
      optionD: "Chloroplast",
      correctOption: "A",
      explanation: "The mitochondrion is called the powerhouse of the cell.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-general-awareness-general-science-q04",
      topicId: "ssc-cgl-general-awareness-general-science",
      text: "Which vitamin deficiency causes scurvy?",
      optionA: "Vitamin A",
      optionB: "Vitamin B",
      optionC: "Vitamin C",
      optionD: "Vitamin D",
      correctOption: "C",
      explanation: "Vitamin C deficiency causes scurvy.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-general-awareness-general-science-q05",
      topicId: "ssc-cgl-general-awareness-general-science",
      text: "How many bones are there in the adult human skeleton?",
      optionA: "196",
      optionB: "206",
      optionC: "212",
      optionD: "300",
      correctOption: "B",
      explanation: "The adult human skeleton has 206 bones.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-general-awareness-general-science-q06",
      topicId: "ssc-cgl-general-awareness-general-science",
      text: "The chemical formula of common salt is:",
      optionA: "H2O",
      optionB: "CaCO3",
      optionC: "CO2",
      optionD: "NaCl",
      correctOption: "D",
      explanation: "Common salt is sodium chloride, NaCl.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-general-awareness-general-science-q07",
      topicId: "ssc-cgl-general-awareness-general-science",
      text: "The SI unit of power is the:",
      optionA: "Watt",
      optionB: "Joule",
      optionC: "Newton",
      optionD: "Ampere",
      correctOption: "A",
      explanation: "The SI unit of power is the Watt.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-general-awareness-general-science-q08",
      topicId: "ssc-cgl-general-awareness-general-science",
      text: "Photosynthesis in plants mainly occurs in the:",
      optionA: "Mitochondria",
      optionB: "Chloroplasts",
      optionC: "Nucleus",
      optionD: "Vacuole",
      correctOption: "B",
      explanation: "Photosynthesis occurs in chloroplasts and releases oxygen.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-general-awareness-economy-basics-q01",
      topicId: "ssc-cgl-general-awareness-economy-basics",
      text: "The central bank of India is the:",
      optionA: "SEBI",
      optionB: "NITI Aayog",
      optionC: "RBI",
      optionD: "SBI",
      correctOption: "C",
      explanation: "The Reserve Bank of India (RBI) is the central bank.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-economy-basics-q02",
      topicId: "ssc-cgl-general-awareness-economy-basics",
      text: "Which body regulates the securities market in India?",
      optionA: "RBI",
      optionB: "NITI Aayog",
      optionC: "SEBI",
      optionD: "Finance Commission",
      correctOption: "C",
      explanation: "SEBI is the securities market regulator.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-general-awareness-economy-basics-q03",
      topicId: "ssc-cgl-general-awareness-economy-basics",
      text: "The Planning Commission was replaced by NITI Aayog in:",
      optionA: "2010",
      optionB: "2015",
      optionC: "2012",
      optionD: "2017",
      correctOption: "B",
      explanation: "NITI Aayog replaced the Planning Commission in 2015.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-general-awareness-economy-basics-q04",
      topicId: "ssc-cgl-general-awareness-economy-basics",
      text: "The repo rate is the rate at which:",
      optionA: "RBI borrows from banks",
      optionB: "Banks lend to customers",
      optionC: "RBI lends to banks",
      optionD: "Banks borrow abroad",
      correctOption: "C",
      explanation: "The repo rate is the rate at which RBI lends to banks.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-general-awareness-economy-basics-q05",
      topicId: "ssc-cgl-general-awareness-economy-basics",
      text: "GDP stands for:",
      optionA: "Gross Domestic Product",
      optionB: "General Domestic Profit",
      optionC: "Gross Development Plan",
      optionD: "Global Domestic Product",
      correctOption: "A",
      explanation: "GDP is the total value of goods and services produced within a country in a year.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-general-awareness-economy-basics-q06",
      topicId: "ssc-cgl-general-awareness-economy-basics",
      text: "A sustained rise in the general price level is called:",
      optionA: "Deflation",
      optionB: "Recession",
      optionC: "Devaluation",
      optionD: "Inflation",
      correctOption: "D",
      explanation: "Inflation is a sustained rise in the general price level.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-general-awareness-economy-basics-q07",
      topicId: "ssc-cgl-general-awareness-economy-basics",
      text: "A higher repo rate generally:",
      optionA: "Increases borrowing",
      optionB: "Reduces borrowing and cools inflation",
      optionC: "Has no effect",
      optionD: "Raises money supply",
      correctOption: "B",
      explanation: "A higher repo rate reduces borrowing and helps cool inflation.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-general-awareness-economy-basics-q08",
      topicId: "ssc-cgl-general-awareness-economy-basics",
      text: "Banks in India are regulated by the:",
      optionA: "SEBI",
      optionB: "Finance Commission",
      optionC: "NITI Aayog",
      optionD: "RBI",
      correctOption: "D",
      explanation: "Banks are under the RBI; securities are under SEBI.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-general-awareness-days-current-affairs-q01",
      topicId: "ssc-cgl-general-awareness-days-current-affairs",
      text: "International Yoga Day is observed on:",
      optionA: "5 June",
      optionB: "8 March",
      optionC: "22 April",
      optionD: "21 June",
      correctOption: "D",
      explanation: "International Yoga Day is observed on 21 June.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-days-current-affairs-q02",
      topicId: "ssc-cgl-general-awareness-days-current-affairs",
      text: "Teachers' Day in India is celebrated on:",
      optionA: "14 November",
      optionB: "2 October",
      optionC: "5 September",
      optionD: "15 August",
      correctOption: "C",
      explanation: "Teachers' Day (5 Sep) marks the birthday of Dr. S. Radhakrishnan.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-general-awareness-days-current-affairs-q03",
      topicId: "ssc-cgl-general-awareness-days-current-affairs",
      text: "World Environment Day is observed on:",
      optionA: "5 June",
      optionB: "22 April",
      optionC: "21 June",
      optionD: "1 December",
      correctOption: "A",
      explanation: "World Environment Day is observed on 5 June.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-general-awareness-days-current-affairs-q04",
      topicId: "ssc-cgl-general-awareness-days-current-affairs",
      text: "Children's Day in India marks the birthday of:",
      optionA: "Jawaharlal Nehru",
      optionB: "Dr. S. Radhakrishnan",
      optionC: "Mahatma Gandhi",
      optionD: "B.R. Ambedkar",
      correctOption: "A",
      explanation: "Children's Day (14 Nov) marks Jawaharlal Nehru's birthday.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-general-awareness-days-current-affairs-q05",
      topicId: "ssc-cgl-general-awareness-days-current-affairs",
      text: "International Women's Day is observed on:",
      optionA: "22 April",
      optionB: "8 March",
      optionC: "5 June",
      optionD: "14 November",
      correctOption: "B",
      explanation: "International Women's Day is observed on 8 March.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-general-awareness-days-current-affairs-q06",
      topicId: "ssc-cgl-general-awareness-days-current-affairs",
      text: "Republic Day in India is celebrated on:",
      optionA: "15 August",
      optionB: "2 October",
      optionC: "26 January",
      optionD: "26 November",
      correctOption: "C",
      explanation: "Republic Day is celebrated on 26 January.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-general-awareness-days-current-affairs-q07",
      topicId: "ssc-cgl-general-awareness-days-current-affairs",
      text: "Earth Day is observed on:",
      optionA: "5 June",
      optionB: "1 December",
      optionC: "21 June",
      optionD: "22 April",
      correctOption: "D",
      explanation: "Earth Day is observed on 22 April.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-general-awareness-days-current-affairs-q08",
      topicId: "ssc-cgl-general-awareness-days-current-affairs",
      text: "World AIDS Day is observed on:",
      optionA: "21 June",
      optionB: "8 March",
      optionC: "1 December",
      optionD: "2 October",
      correctOption: "C",
      explanation: "World AIDS Day is observed on 1 December.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-general-awareness-books-authors-awards-q01",
      topicId: "ssc-cgl-general-awareness-books-authors-awards",
      text: "Who wrote the autobiography \"Wings of Fire\"?",
      optionA: "Jawaharlal Nehru",
      optionB: "Amartya Sen",
      optionC: "A.P.J. Abdul Kalam",
      optionD: "Khushwant Singh",
      correctOption: "C",
      explanation: "Wings of Fire is the autobiography of A.P.J. Abdul Kalam.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-books-authors-awards-q02",
      topicId: "ssc-cgl-general-awareness-books-authors-awards",
      text: "The highest civilian award of India is the:",
      optionA: "Padma Shri",
      optionB: "Padma Bhushan",
      optionC: "Bharat Ratna",
      optionD: "Padma Vibhushan",
      correctOption: "C",
      explanation: "The Bharat Ratna is the highest civilian award of India.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-general-awareness-books-authors-awards-q03",
      topicId: "ssc-cgl-general-awareness-books-authors-awards",
      text: "Who wrote \"Discovery of India\"?",
      optionA: "Jawaharlal Nehru",
      optionB: "Rabindranath Tagore",
      optionC: "Amartya Sen",
      optionD: "A.P.J. Abdul Kalam",
      correctOption: "A",
      explanation: "Discovery of India was written by Jawaharlal Nehru.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-general-awareness-books-authors-awards-q04",
      topicId: "ssc-cgl-general-awareness-books-authors-awards",
      text: "The highest literary honour in India is the:",
      optionA: "Sahitya Akademi Award",
      optionB: "Jnanpith Award",
      optionC: "Booker Prize",
      optionD: "Padma Shri",
      correctOption: "B",
      explanation: "The Jnanpith Award is the highest literary honour in India.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-general-awareness-books-authors-awards-q05",
      topicId: "ssc-cgl-general-awareness-books-authors-awards",
      text: "Who won the Nobel Prize in Literature in 1913 for Gitanjali?",
      optionA: "Amartya Sen",
      optionB: "Rabindranath Tagore",
      optionC: "Khushwant Singh",
      optionD: "Jawaharlal Nehru",
      correctOption: "B",
      explanation: "Rabindranath Tagore won the Nobel Prize in Literature in 1913 for Gitanjali.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-general-awareness-books-authors-awards-q06",
      topicId: "ssc-cgl-general-awareness-books-authors-awards",
      text: "The highest wartime gallantry award of India is the:",
      optionA: "Vir Chakra",
      optionB: "Maha Vir Chakra",
      optionC: "Ashok Chakra",
      optionD: "Param Vir Chakra",
      correctOption: "D",
      explanation: "The Param Vir Chakra is the highest wartime gallantry award.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-general-awareness-books-authors-awards-q07",
      topicId: "ssc-cgl-general-awareness-books-authors-awards",
      text: "The Dronacharya Award is given to outstanding sports:",
      optionA: "Players",
      optionB: "Umpires",
      optionC: "Coaches",
      optionD: "Administrators",
      correctOption: "C",
      explanation: "The Dronacharya Award recognises outstanding sports coaches.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-general-awareness-books-authors-awards-q08",
      topicId: "ssc-cgl-general-awareness-books-authors-awards",
      text: "Which civilian award ranks higher?",
      optionA: "Padma Shri",
      optionB: "Padma Bhushan",
      optionC: "Padma Vibhushan",
      optionD: "They are equal",
      correctOption: "C",
      explanation: "Order is Bharat Ratna > Padma Vibhushan > Padma Bhushan > Padma Shri.",
      orderIndex: 7
    },
    ...sscTopUp,
    ...sscQuant2Questions,
    ...ssc3Questions,
    ...ssc4Questions,
    ...ssc5Questions
  ]
});
