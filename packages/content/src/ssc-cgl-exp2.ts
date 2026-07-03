// SSC CGL depth expansion — Quantitative Aptitude (pass 2). Adds five classic
// SSC arithmetic topics missing from the base set. Each new topic has a short
// study note and a full 12-question drill.
import type { AuthoredMaterial } from "./builder";
import type { Question, Topic } from "@jyotir/core";

export const sscQuant2Topics: Topic[] = [
  // Quantitative Aptitude (existing max orderIndex = 11)
  { id: "ssc-cgl-quant-mixtures-alligation", subjectId: "ssc-cgl-quant", name: "Mixtures & Alligation", slug: "mixtures-alligation", orderIndex: 12 },
  { id: "ssc-cgl-quant-partnership", subjectId: "ssc-cgl-quant", name: "Partnership", slug: "partnership", orderIndex: 13 },
  { id: "ssc-cgl-quant-pipes-cisterns", subjectId: "ssc-cgl-quant", name: "Pipes & Cisterns", slug: "pipes-cisterns", orderIndex: 14 },
  { id: "ssc-cgl-quant-boats-streams", subjectId: "ssc-cgl-quant", name: "Boats & Streams", slug: "boats-streams", orderIndex: 15 },
  { id: "ssc-cgl-quant-simplification", subjectId: "ssc-cgl-quant", name: "Simplification & Approximation", slug: "simplification", orderIndex: 16 }
];

export const sscQuant2Materials: AuthoredMaterial[] = [
  { id: "ssc-cgl-quant-mixtures-alligation-m01", topicId: "ssc-cgl-quant-mixtures-alligation", title: "Mixtures & Alligation", content: `**Alligation** finds the **ratio** in which two ingredients at different prices (or concentrations) are mixed to get a desired mean value.

## The rule of alligation
\`\`\`
(Quantity of cheaper) : (Quantity of dearer)
   = (Dearer − Mean) : (Mean − Cheaper)
\`\`\`
The **mean price always lies between** the two ingredient prices.

## Weighted average
The mean of the mixture is the weighted average:
\`\`\`
Mean = (q₁·p₁ + q₂·p₂) / (q₁ + q₂)
\`\`\`

## Repeated replacement
If a vessel holds V litres and x litres are removed and replaced with water **n times**, the pure liquid left is:
\`\`\`
V × (1 − x/V)ⁿ
\`\`\`
Treat a free ingredient (like water) as having price **0** when applying alligation.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "ssc-cgl-quant-partnership-m01", topicId: "ssc-cgl-quant-partnership", title: "Partnership", content: `In a **partnership**, profit is shared in proportion to each partner's contribution.

## Two cases
- **Same time invested** → profit ratio = ratio of **capitals**.
- **Different times** → profit ratio = ratio of **(capital × time)**.
\`\`\`
Profit ratio A : B = (C_A × T_A) : (C_B × T_B)
\`\`\`

## Types of partner
- A **working (active) partner** manages the business (may also earn a salary/commission).
- A **sleeping (dormant) partner** only invests capital and does not manage.

Each partner's share of the profit = (their ratio term ÷ sum of ratio terms) × total profit.`, estimatedReadTime: 1, orderIndex: 0 },
  { id: "ssc-cgl-quant-pipes-cisterns-m01", topicId: "ssc-cgl-quant-pipes-cisterns", title: "Pipes & Cisterns", content: `Pipes-and-cisterns problems are just **time-and-work** in disguise.

- An **inlet** pipe **fills** the tank — its rate is counted **positive**.
- An **outlet** (or leak) **empties** the tank — its rate is counted **negative**.

## Rates
If a pipe fills a tank in **a** hours, in one hour it fills **1/a** of the tank. Add the rates of all pipes working together:
\`\`\`
Net rate = 1/a + 1/b − 1/c   (c = outlet)
Time to fill = 1 / (net rate)
\`\`\`

## Handy result
If an inlet fills in **a** hours and an outlet empties in **b** hours (b > a), the tank fills in **ab / (b − a)** hours.`, estimatedReadTime: 1, orderIndex: 0 },
  { id: "ssc-cgl-quant-boats-streams-m01", topicId: "ssc-cgl-quant-boats-streams", title: "Boats & Streams", content: `Let the boat's speed in **still water** be **b** and the **stream (current)** speed be **s**.

## Key formulas
\`\`\`
Downstream speed = b + s   (current helps)
Upstream speed   = b − s   (current opposes)

Boat speed  b = (downstream + upstream) / 2
Stream speed s = (downstream − upstream) / 2
\`\`\`

- **Still water** means there is no current, so the effective speed is just **b**.
- Use speed = distance ÷ time on each leg (downstream or upstream) as needed.`, estimatedReadTime: 1, orderIndex: 0 },
  { id: "ssc-cgl-quant-simplification-m01", topicId: "ssc-cgl-quant-simplification", title: "Simplification & Approximation", content: `**Simplification** evaluates an expression using the correct order of operations, remembered as **BODMAS**:
\`\`\`
B — Brackets
O — Orders (powers and roots)
D — Division
M — Multiplication
A — Addition
S — Subtraction
\`\`\`
Division and multiplication rank equally (left to right), as do addition and subtraction.

## Approximation
For fast estimation, **round** each number to a convenient value, then compute — e.g., 49.8 × 10.2 ≈ 50 × 10 = **500**. Useful when the options are far apart.`, estimatedReadTime: 1, orderIndex: 0 }
];

export const sscQuant2Questions: Question[] = [
  // ── Mixtures & Alligation ──
  { id: "ssc-cgl-quant-mixtures-alligation-q01", topicId: "ssc-cgl-quant-mixtures-alligation", text: "The rule of alligation is used to find the:", optionA: "Ratio in which ingredients are mixed", optionB: "Total cost only", optionC: "Time taken", optionD: "Simple interest", correctOption: "A", explanation: "Alligation gives the ratio in which two ingredients at different prices are mixed for a mean price.", orderIndex: 0 },
  { id: "ssc-cgl-quant-mixtures-alligation-q02", topicId: "ssc-cgl-quant-mixtures-alligation", text: "In what ratio must rice at ₹20/kg be mixed with rice at ₹30/kg to get a mixture worth ₹24/kg?", optionA: "3:2", optionB: "2:3", optionC: "1:2", optionD: "4:1", correctOption: "A", explanation: "Ratio = (30−24):(24−20) = 6:4 = 3:2.", orderIndex: 1 },
  { id: "ssc-cgl-quant-mixtures-alligation-q03", topicId: "ssc-cgl-quant-mixtures-alligation", text: "Sugar at ₹12/kg and ₹18/kg are mixed to give a mixture worth ₹16/kg. The ratio is:", optionA: "1:2", optionB: "2:1", optionC: "1:1", optionD: "3:2", correctOption: "A", explanation: "Ratio = (18−16):(16−12) = 2:4 = 1:2.", orderIndex: 2 },
  { id: "ssc-cgl-quant-mixtures-alligation-q04", topicId: "ssc-cgl-quant-mixtures-alligation", text: "A 40-litre mixture has milk and water in the ratio 3:1. The quantity of water is:", optionA: "10 litres", optionB: "30 litres", optionC: "20 litres", optionD: "15 litres", correctOption: "A", explanation: "Water = 40 × 1/4 = 10 litres.", orderIndex: 3 },
  { id: "ssc-cgl-quant-mixtures-alligation-q05", topicId: "ssc-cgl-quant-mixtures-alligation", text: "From 20 litres of pure milk, 4 litres are removed and replaced with water. The milk remaining is:", optionA: "16 litres", optionB: "18 litres", optionC: "15 litres", optionD: "12 litres", correctOption: "A", explanation: "Milk left = 20 × (1 − 4/20) = 20 × 0.8 = 16 litres.", orderIndex: 4 },
  { id: "ssc-cgl-quant-mixtures-alligation-q06", topicId: "ssc-cgl-quant-mixtures-alligation", text: "The weighted average price of 2 kg at ₹10/kg and 3 kg at ₹20/kg is:", optionA: "₹16", optionB: "₹15", optionC: "₹18", optionD: "₹14", correctOption: "A", explanation: "Mean = (2×10 + 3×20)/5 = 80/5 = ₹16.", orderIndex: 5 },
  { id: "ssc-cgl-quant-mixtures-alligation-q07", topicId: "ssc-cgl-quant-mixtures-alligation", text: "In what ratio must water be mixed with milk costing ₹40/litre to make the mixture cost ₹32/litre?", optionA: "1:4", optionB: "1:5", optionC: "1:3", optionD: "2:5", correctOption: "A", explanation: "Treat water as ₹0: ratio = (40−32):(32−0) = 8:32 = 1:4.", orderIndex: 6 },
  { id: "ssc-cgl-quant-mixtures-alligation-q08", topicId: "ssc-cgl-quant-mixtures-alligation", text: "Two varieties of tea at ₹15/kg and ₹25/kg are mixed in equal quantities. The average price is:", optionA: "₹20", optionB: "₹18", optionC: "₹22", optionD: "₹19", correctOption: "A", explanation: "Equal mix average = (15 + 25)/2 = ₹20.", orderIndex: 7 },
  { id: "ssc-cgl-quant-mixtures-alligation-q09", topicId: "ssc-cgl-quant-mixtures-alligation", text: "60 litres of a milk-water mixture is in the ratio 2:1. To make the ratio 1:1, water to be added is:", optionA: "20 litres", optionB: "10 litres", optionC: "30 litres", optionD: "15 litres", correctOption: "A", explanation: "Milk = 40, water = 20. For 1:1 water must equal 40, so add 20 litres.", orderIndex: 8 },
  { id: "ssc-cgl-quant-mixtures-alligation-q10", topicId: "ssc-cgl-quant-mixtures-alligation", text: "In a mixture, milk : water = 5:3. If the water is 24 litres, the milk is:", optionA: "40 litres", optionB: "36 litres", optionC: "30 litres", optionD: "48 litres", correctOption: "A", explanation: "One part = 24/3 = 8; milk = 5 × 8 = 40 litres.", orderIndex: 9 },
  { id: "ssc-cgl-quant-mixtures-alligation-q11", topicId: "ssc-cgl-quant-mixtures-alligation", text: "The cost of the mean mixture always lies:", optionA: "Between the two ingredient costs", optionB: "Above both costs", optionC: "Below both costs", optionD: "At zero", correctOption: "A", explanation: "A weighted average must fall between the smallest and largest ingredient prices.", orderIndex: 10 },
  { id: "ssc-cgl-quant-mixtures-alligation-q12", topicId: "ssc-cgl-quant-mixtures-alligation", text: "A 50-litre mixture contains 20% water. The quantity of water is:", optionA: "10 litres", optionB: "20 litres", optionC: "5 litres", optionD: "15 litres", correctOption: "A", explanation: "Water = 20% of 50 = 0.20 × 50 = 10 litres.", orderIndex: 11 },

  // ── Partnership ──
  { id: "ssc-cgl-quant-partnership-q01", topicId: "ssc-cgl-quant-partnership", text: "When partners invest for the same period, profit is divided in the ratio of their:", optionA: "Capitals", optionB: "Ages", optionC: "Salaries", optionD: "Time only", correctOption: "A", explanation: "For equal time, profit is shared in proportion to the capitals invested.", orderIndex: 0 },
  { id: "ssc-cgl-quant-partnership-q02", topicId: "ssc-cgl-quant-partnership", text: "A and B invest ₹5000 and ₹10000 for the same time. The profit-sharing ratio is:", optionA: "1:2", optionB: "2:1", optionC: "1:1", optionD: "2:3", correctOption: "A", explanation: "Equal time, so the ratio is of capitals: 5000:10000 = 1:2.", orderIndex: 1 },
  { id: "ssc-cgl-quant-partnership-q03", topicId: "ssc-cgl-quant-partnership", text: "When the investment periods differ, profit is shared in the ratio of:", optionA: "Capital × time", optionB: "Capital only", optionC: "Time only", optionD: "Capital + time", correctOption: "A", explanation: "Profit ratio = (capital × time) for each partner.", orderIndex: 2 },
  { id: "ssc-cgl-quant-partnership-q04", topicId: "ssc-cgl-quant-partnership", text: "A invests ₹6000 for 12 months and B invests ₹8000 for 6 months. The profit ratio is:", optionA: "3:2", optionB: "2:3", optionC: "1:1", optionD: "3:4", correctOption: "A", explanation: "6000×12 : 8000×6 = 72000:48000 = 3:2.", orderIndex: 3 },
  { id: "ssc-cgl-quant-partnership-q05", topicId: "ssc-cgl-quant-partnership", text: "A partner who invests capital and also manages the business is a:", optionA: "Working partner", optionB: "Sleeping partner", optionC: "Silent partner", optionD: "Dormant partner", correctOption: "A", explanation: "A working (active) partner both invests and runs the business.", orderIndex: 4 },
  { id: "ssc-cgl-quant-partnership-q06", topicId: "ssc-cgl-quant-partnership", text: "A total profit of ₹9000 is shared in the ratio 2:1. The larger share is:", optionA: "₹6000", optionB: "₹3000", optionC: "₹4500", optionD: "₹5000", correctOption: "A", explanation: "Larger share = 9000 × 2/3 = ₹6000.", orderIndex: 5 },
  { id: "ssc-cgl-quant-partnership-q07", topicId: "ssc-cgl-quant-partnership", text: "If two partners invest equal amounts for equal time, they share the profit:", optionA: "Equally (1:1)", optionB: "In the ratio 2:1", optionC: "In the ratio 1:2", optionD: "Unequally", correctOption: "A", explanation: "Equal capital and equal time give an equal (1:1) profit share.", orderIndex: 6 },
  { id: "ssc-cgl-quant-partnership-q08", topicId: "ssc-cgl-quant-partnership", text: "A, B and C invest in the ratio 2:3:5. Of a ₹10000 profit, C's share is:", optionA: "₹5000", optionB: "₹3000", optionC: "₹2000", optionD: "₹4000", correctOption: "A", explanation: "C's share = 10000 × 5/10 = ₹5000.", orderIndex: 7 },
  { id: "ssc-cgl-quant-partnership-q09", topicId: "ssc-cgl-quant-partnership", text: "A sleeping (dormant) partner is one who:", optionA: "Invests capital but does not manage the business", optionB: "Manages but does not invest", optionC: "Neither invests nor manages", optionD: "Only takes a salary", correctOption: "A", explanation: "A sleeping partner contributes capital only and takes no part in management.", orderIndex: 8 },
  { id: "ssc-cgl-quant-partnership-q10", topicId: "ssc-cgl-quant-partnership", text: "A invests ₹4000 for 6 months and B ₹4000 for 12 months. Their profit ratio is:", optionA: "1:2", optionB: "2:1", optionC: "1:1", optionD: "1:3", correctOption: "A", explanation: "4000×6 : 4000×12 = 1:2.", orderIndex: 9 },
  { id: "ssc-cgl-quant-partnership-q11", topicId: "ssc-cgl-quant-partnership", text: "In a two-partner firm, A's share of a ₹1200 profit is ₹800. B's share is:", optionA: "₹400", optionB: "₹600", optionC: "₹300", optionD: "₹500", correctOption: "A", explanation: "B = 1200 − 800 = ₹400.", orderIndex: 10 },
  { id: "ssc-cgl-quant-partnership-q12", topicId: "ssc-cgl-quant-partnership", text: "The profit ratio of A:B is 3:2. If A receives ₹300 more than B, the total profit is:", optionA: "₹1500", optionB: "₹1200", optionC: "₹900", optionD: "₹1800", correctOption: "A", explanation: "Difference = 1 part = ₹300; total = 5 parts = ₹1500.", orderIndex: 11 },

  // ── Pipes & Cisterns ──
  { id: "ssc-cgl-quant-pipes-cisterns-q01", topicId: "ssc-cgl-quant-pipes-cisterns", text: "A pipe that fills a tank is called an:", optionA: "Inlet", optionB: "Outlet", optionC: "Leak", optionD: "Drain", correctOption: "A", explanation: "An inlet fills the tank (positive rate); an outlet or leak empties it.", orderIndex: 0 },
  { id: "ssc-cgl-quant-pipes-cisterns-q02", topicId: "ssc-cgl-quant-pipes-cisterns", text: "A pipe fills a tank in 6 hours. In one hour it fills:", optionA: "1/6 of the tank", optionB: "6 tanks", optionC: "1/3 of the tank", optionD: "The whole tank", correctOption: "A", explanation: "Rate = 1/time = 1/6 of the tank per hour.", orderIndex: 1 },
  { id: "ssc-cgl-quant-pipes-cisterns-q03", topicId: "ssc-cgl-quant-pipes-cisterns", text: "Pipe A fills a tank in 4 hours and pipe B in 6 hours. Together they fill it in:", optionA: "2.4 hours", optionB: "2 hours", optionC: "3 hours", optionD: "5 hours", correctOption: "A", explanation: "1/4 + 1/6 = 5/12, so time = 12/5 = 2.4 hours.", orderIndex: 2 },
  { id: "ssc-cgl-quant-pipes-cisterns-q04", topicId: "ssc-cgl-quant-pipes-cisterns", text: "The work done by an outlet pipe is taken as:", optionA: "Negative", optionB: "Positive", optionC: "Zero", optionD: "Doubled", correctOption: "A", explanation: "An outlet empties the tank, so its rate is subtracted (negative).", orderIndex: 3 },
  { id: "ssc-cgl-quant-pipes-cisterns-q05", topicId: "ssc-cgl-quant-pipes-cisterns", text: "Inlet A fills a tank in 3 hours; outlet B empties it in 6 hours. With both open, the tank fills in:", optionA: "6 hours", optionB: "3 hours", optionC: "9 hours", optionD: "2 hours", correctOption: "A", explanation: "Net rate = 1/3 − 1/6 = 1/6, so time = 6 hours.", orderIndex: 4 },
  { id: "ssc-cgl-quant-pipes-cisterns-q06", topicId: "ssc-cgl-quant-pipes-cisterns", text: "Two pipes fill a tank in 12 and 24 minutes. Together they fill it in:", optionA: "8 minutes", optionB: "6 minutes", optionC: "10 minutes", optionD: "12 minutes", correctOption: "A", explanation: "1/12 + 1/24 = 3/24 = 1/8, so 8 minutes.", orderIndex: 5 },
  { id: "ssc-cgl-quant-pipes-cisterns-q07", topicId: "ssc-cgl-quant-pipes-cisterns", text: "A pipe fills 1/5 of a tank in 3 minutes. The whole tank is filled in:", optionA: "15 minutes", optionB: "12 minutes", optionC: "10 minutes", optionD: "20 minutes", correctOption: "A", explanation: "If 1/5 takes 3 min, the full tank takes 5 × 3 = 15 minutes.", orderIndex: 6 },
  { id: "ssc-cgl-quant-pipes-cisterns-q08", topicId: "ssc-cgl-quant-pipes-cisterns", text: "A tap fills a tank in 5 hours. In 2 hours it fills:", optionA: "2/5 of the tank", optionB: "1/2 of the tank", optionC: "2/3 of the tank", optionD: "1/5 of the tank", correctOption: "A", explanation: "In 2 hours it fills 2 × (1/5) = 2/5 of the tank.", orderIndex: 7 },
  { id: "ssc-cgl-quant-pipes-cisterns-q09", topicId: "ssc-cgl-quant-pipes-cisterns", text: "Pipe A fills in 8 hours; a leak empties the full tank in 12 hours. With both, the tank fills in:", optionA: "24 hours", optionB: "20 hours", optionC: "16 hours", optionD: "12 hours", correctOption: "A", explanation: "Net rate = 1/8 − 1/12 = 1/24, so time = 24 hours.", orderIndex: 8 },
  { id: "ssc-cgl-quant-pipes-cisterns-q10", topicId: "ssc-cgl-quant-pipes-cisterns", text: "Pipes-and-cisterns problems are mathematically analogous to:", optionA: "Time-and-work problems", optionB: "Profit-and-loss problems", optionC: "Simple interest", optionD: "Mensuration", correctOption: "A", explanation: "Filling a tank is a work problem: rates add just like combined work rates.", orderIndex: 9 },
  { id: "ssc-cgl-quant-pipes-cisterns-q11", topicId: "ssc-cgl-quant-pipes-cisterns", text: "Two pipes fill a tank in 10 and 15 minutes. Together they fill it in:", optionA: "6 minutes", optionB: "5 minutes", optionC: "8 minutes", optionD: "12 minutes", correctOption: "A", explanation: "1/10 + 1/15 = 1/6, so 6 minutes.", orderIndex: 10 },
  { id: "ssc-cgl-quant-pipes-cisterns-q12", topicId: "ssc-cgl-quant-pipes-cisterns", text: "If an inlet fills in 'a' hours and an outlet empties in 'b' hours (b > a), the fill time is:", optionA: "ab / (b − a)", optionB: "a + b", optionC: "ab / (a + b)", optionD: "b − a", correctOption: "A", explanation: "Net rate = 1/a − 1/b = (b−a)/ab, so time = ab/(b−a).", orderIndex: 11 },

  // ── Boats & Streams ──
  { id: "ssc-cgl-quant-boats-streams-q01", topicId: "ssc-cgl-quant-boats-streams", text: "Downstream speed equals the boat's speed plus the:", optionA: "Stream (current) speed", optionB: "Wind speed", optionC: "Distance", optionD: "Time", correctOption: "A", explanation: "Going downstream, the current helps, so speeds add: b + s.", orderIndex: 0 },
  { id: "ssc-cgl-quant-boats-streams-q02", topicId: "ssc-cgl-quant-boats-streams", text: "Upstream speed equals the boat's speed minus the:", optionA: "Stream speed", optionB: "Distance", optionC: "Time", optionD: "Depth", correctOption: "A", explanation: "Going upstream, the current opposes, so upstream speed = b − s.", orderIndex: 1 },
  { id: "ssc-cgl-quant-boats-streams-q03", topicId: "ssc-cgl-quant-boats-streams", text: "A boat's speed in still water is 10 km/h and the stream 2 km/h. Its downstream speed is:", optionA: "12 km/h", optionB: "8 km/h", optionC: "10 km/h", optionD: "5 km/h", correctOption: "A", explanation: "Downstream = 10 + 2 = 12 km/h.", orderIndex: 2 },
  { id: "ssc-cgl-quant-boats-streams-q04", topicId: "ssc-cgl-quant-boats-streams", text: "A boat's speed in still water is 10 km/h and the stream 2 km/h. Its upstream speed is:", optionA: "8 km/h", optionB: "12 km/h", optionC: "10 km/h", optionD: "6 km/h", correctOption: "A", explanation: "Upstream = 10 − 2 = 8 km/h.", orderIndex: 3 },
  { id: "ssc-cgl-quant-boats-streams-q05", topicId: "ssc-cgl-quant-boats-streams", text: "If downstream speed is 12 km/h and upstream 8 km/h, the boat's speed in still water is:", optionA: "10 km/h", optionB: "4 km/h", optionC: "2 km/h", optionD: "20 km/h", correctOption: "A", explanation: "Boat speed = (12 + 8)/2 = 10 km/h.", orderIndex: 4 },
  { id: "ssc-cgl-quant-boats-streams-q06", topicId: "ssc-cgl-quant-boats-streams", text: "If downstream speed is 12 km/h and upstream 8 km/h, the stream speed is:", optionA: "2 km/h", optionB: "4 km/h", optionC: "10 km/h", optionD: "1 km/h", correctOption: "A", explanation: "Stream speed = (12 − 8)/2 = 2 km/h.", orderIndex: 5 },
  { id: "ssc-cgl-quant-boats-streams-q07", topicId: "ssc-cgl-quant-boats-streams", text: "A boat covers 12 km downstream in 2 hours. Its downstream speed is:", optionA: "6 km/h", optionB: "8 km/h", optionC: "10 km/h", optionD: "4 km/h", correctOption: "A", explanation: "Speed = distance/time = 12/2 = 6 km/h.", orderIndex: 6 },
  { id: "ssc-cgl-quant-boats-streams-q08", topicId: "ssc-cgl-quant-boats-streams", text: "If a boat's still-water speed is 8 km/h and the stream is 3 km/h, its upstream speed is:", optionA: "5 km/h", optionB: "11 km/h", optionC: "3 km/h", optionD: "8 km/h", correctOption: "A", explanation: "Upstream = 8 − 3 = 5 km/h.", orderIndex: 7 },
  { id: "ssc-cgl-quant-boats-streams-q09", topicId: "ssc-cgl-quant-boats-streams", text: "'Speed in still water' refers to the boat's speed when:", optionA: "There is no current", optionB: "The current is strongest", optionC: "It is anchored", optionD: "It moves upstream", correctOption: "A", explanation: "Still water means no current, so the effective speed is just the boat's own speed b.", orderIndex: 8 },
  { id: "ssc-cgl-quant-boats-streams-q10", topicId: "ssc-cgl-quant-boats-streams", text: "A man rows downstream at 15 km/h and upstream at 5 km/h. His speed in still water is:", optionA: "10 km/h", optionB: "5 km/h", optionC: "20 km/h", optionD: "7.5 km/h", correctOption: "A", explanation: "Still-water speed = (15 + 5)/2 = 10 km/h.", orderIndex: 9 },
  { id: "ssc-cgl-quant-boats-streams-q11", topicId: "ssc-cgl-quant-boats-streams", text: "A man rows downstream at 15 km/h and upstream at 5 km/h. The stream speed is:", optionA: "5 km/h", optionB: "10 km/h", optionC: "2.5 km/h", optionD: "20 km/h", correctOption: "A", explanation: "Stream speed = (15 − 5)/2 = 5 km/h.", orderIndex: 10 },
  { id: "ssc-cgl-quant-boats-streams-q12", topicId: "ssc-cgl-quant-boats-streams", text: "A boat covers 16 km upstream in 4 hours. Its upstream speed is:", optionA: "4 km/h", optionB: "8 km/h", optionC: "12 km/h", optionD: "2 km/h", correctOption: "A", explanation: "Upstream speed = 16/4 = 4 km/h.", orderIndex: 11 },

  // ── Simplification & Approximation ──
  { id: "ssc-cgl-quant-simplification-q01", topicId: "ssc-cgl-quant-simplification", text: "In BODMAS, the letter 'B' stands for:", optionA: "Brackets", optionB: "Base", optionC: "Bonus", optionD: "Balance", correctOption: "A", explanation: "BODMAS = Brackets, Orders, Division, Multiplication, Addition, Subtraction.", orderIndex: 0 },
  { id: "ssc-cgl-quant-simplification-q02", topicId: "ssc-cgl-quant-simplification", text: "Using BODMAS, 12 + 6 ÷ 2 equals:", optionA: "15", optionB: "9", optionC: "12", optionD: "18", correctOption: "A", explanation: "Divide first: 6 ÷ 2 = 3; then 12 + 3 = 15.", orderIndex: 1 },
  { id: "ssc-cgl-quant-simplification-q03", topicId: "ssc-cgl-quant-simplification", text: "The value of (8 + 2) × 3 is:", optionA: "30", optionB: "14", optionC: "24", optionD: "26", correctOption: "A", explanation: "Brackets first: (10) × 3 = 30.", orderIndex: 2 },
  { id: "ssc-cgl-quant-simplification-q04", topicId: "ssc-cgl-quant-simplification", text: "The value of 5 × 4 − 6 is:", optionA: "14", optionB: "10", optionC: "26", optionD: "20", correctOption: "A", explanation: "Multiply first: 20 − 6 = 14.", orderIndex: 3 },
  { id: "ssc-cgl-quant-simplification-q05", topicId: "ssc-cgl-quant-simplification", text: "The value of 20 ÷ 4 + 3 is:", optionA: "8", optionB: "5", optionC: "11", optionD: "23", correctOption: "A", explanation: "Divide first: 5 + 3 = 8.", orderIndex: 4 },
  { id: "ssc-cgl-quant-simplification-q06", topicId: "ssc-cgl-quant-simplification", text: "Approximately, 49.8 × 10.2 is closest to:", optionA: "500", optionB: "400", optionC: "600", optionD: "250", correctOption: "A", explanation: "Round to 50 × 10 = 500.", orderIndex: 5 },
  { id: "ssc-cgl-quant-simplification-q07", topicId: "ssc-cgl-quant-simplification", text: "The value of 2³ + 1 is:", optionA: "9", optionB: "7", optionC: "6", optionD: "8", correctOption: "A", explanation: "Orders first: 2³ = 8; then 8 + 1 = 9.", orderIndex: 6 },
  { id: "ssc-cgl-quant-simplification-q08", topicId: "ssc-cgl-quant-simplification", text: "The value of √81 + √16 is:", optionA: "13", optionB: "12", optionC: "25", optionD: "10", correctOption: "A", explanation: "√81 = 9 and √16 = 4, so 9 + 4 = 13.", orderIndex: 7 },
  { id: "ssc-cgl-quant-simplification-q09", topicId: "ssc-cgl-quant-simplification", text: "15% of 240 is:", optionA: "36", optionB: "30", optionC: "24", optionD: "40", correctOption: "A", explanation: "15% of 240 = 0.15 × 240 = 36.", orderIndex: 8 },
  { id: "ssc-cgl-quant-simplification-q10", topicId: "ssc-cgl-quant-simplification", text: "The value of 7 × (3 + 2) is:", optionA: "35", optionB: "23", optionC: "17", optionD: "42", correctOption: "A", explanation: "Brackets first: 7 × 5 = 35.", orderIndex: 9 },
  { id: "ssc-cgl-quant-simplification-q11", topicId: "ssc-cgl-quant-simplification", text: "The value of 100 − 20 ÷ 5 is:", optionA: "96", optionB: "16", optionC: "80", optionD: "95", correctOption: "A", explanation: "Divide first: 20 ÷ 5 = 4; then 100 − 4 = 96.", orderIndex: 10 },
  { id: "ssc-cgl-quant-simplification-q12", topicId: "ssc-cgl-quant-simplification", text: "In BODMAS, operations of the same rank (like ÷ and ×) are done:", optionA: "Left to right", optionB: "Right to left", optionC: "In any order", optionD: "Last", correctOption: "A", explanation: "Division and multiplication share a rank and are evaluated left to right.", orderIndex: 11 }
];
