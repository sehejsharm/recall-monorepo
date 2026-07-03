// GATE (CS) depth expansion (pass 4) — Computer Organization & Discrete
// Mathematics. Adds sequential logic + memory/secondary-storage to CO, and
// functions + proof techniques to Discrete Maths. Each new topic has a study
// note and a full 12-question drill.
import type { AuthoredMaterial } from "./builder";
import type { Question, Topic } from "@jyotir/core";

export const gate4Topics: Topic[] = [
  // Computer Organization (existing max orderIndex = 5)
  { id: "gate-computer-organization-sequential-circuits", subjectId: "gate-computer-organization", name: "Sequential Circuits & Registers", slug: "sequential-circuits", orderIndex: 6 },
  { id: "gate-computer-organization-memory-organization", subjectId: "gate-computer-organization", name: "Memory Organization & Storage", slug: "memory-organization", orderIndex: 7 },
  // Discrete Mathematics (existing max orderIndex = 5)
  { id: "gate-discrete-math-functions", subjectId: "gate-discrete-math", name: "Functions & Mappings", slug: "functions", orderIndex: 6 },
  { id: "gate-discrete-math-proof-techniques", subjectId: "gate-discrete-math", name: "Proof Techniques & Induction", slug: "proof-techniques", orderIndex: 7 }
];

export const gate4Materials: AuthoredMaterial[] = [
  { id: "gate-computer-organization-sequential-circuits-m01", topicId: "gate-computer-organization-sequential-circuits", title: "Sequential Circuits & Registers", content: `A **combinational circuit's** output depends only on the **current inputs** (e.g. adders, multiplexers). A **sequential circuit's** output depends on the current inputs **and** the stored past — it has **memory**.

## Flip-flops (1-bit memory)
A **flip-flop** stores exactly **one bit** and changes state on a **clock edge**.
| Type | Behaviour |
| --- | --- |
| **SR** | Set/Reset; input S=R=1 is **forbidden** (NOR latch) |
| **D** | Output Q **follows** the D input on each clock |
| **JK** | Like SR but J=K=1 **toggles** (no forbidden state) |
| **T** | T=1 **toggles**, T=0 holds |

A **latch** is **level-triggered** (transparent while enable is high); a **flip-flop** is **edge-triggered** (changes only at the clock edge).

## Registers & counters
- A **register** is a group of flip-flops storing a multi-bit word — **n flip-flops store n bits**.
- A **shift register** moves data one bit per clock pulse.
- A **counter** cycles through states; a **mod-m** counter needs ⌈log₂m⌉ flip-flops.
- **n flip-flops** can represent **2ⁿ distinct states**, so a mod-8 counter needs **3** flip-flops.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "gate-computer-organization-memory-organization-m01", topicId: "gate-computer-organization-memory-organization", title: "Memory Organization & Storage", content: `Memory is organised as a **hierarchy** ordered by speed and cost: **registers → cache → main memory (RAM) → secondary storage (disk/SSD)**. Faster memory sits closer to the CPU and costs more per bit.

## Semiconductor memory
| Type | Volatile? | Notes |
| --- | --- | --- |
| **SRAM** | Yes | Fast, uses flip-flops, **no refresh** — used for cache |
| **DRAM** | Yes | One **capacitor + transistor** per bit, needs **refresh**, dense — used for main memory |
| **ROM / PROM / EPROM / EEPROM / Flash** | No | Non-volatile; **EEPROM/Flash** erase **electrically** |

## Addressing
With **n address lines** the CPU can address **2ⁿ locations**. So **1 KB = 1024 bytes** needs **10** address lines (2¹⁰ = 1024).

## Secondary storage & RAID
- A **magnetic disk** stores data on concentric **tracks**, each split into **sectors**.
- **RAID 0** = **striping** (speed, no redundancy); **RAID 1** = **mirroring** (full redundancy); **RAID 5** = block striping with **distributed parity** (survives one disk failure).`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "gate-discrete-math-functions-m01", topicId: "gate-discrete-math-functions", title: "Functions & Mappings", content: `A **function** f: A → B assigns to **every** element of the domain A **exactly one** element of the codomain B.

## Types of function
- **Injective (one-to-one)**: distinct inputs give distinct outputs — f(x₁)=f(x₂) ⇒ x₁=x₂.
- **Surjective (onto)**: every element of B is hit by some input.
- **Bijective**: both injective **and** surjective. A function has an **inverse iff it is bijective**.

## Counting functions
| Count | Formula |
| --- | --- |
| Functions A→B, \\|A\\|=m, \\|B\\|=n | **nᵐ** |
| Injections A→B, m ≤ n | n·(n−1)···(n−m+1) |
| Bijections on an n-set | **n!** |

## Composition & pigeonhole
- **Composition**: (g∘f)(x) = **g(f(x))** — apply f first, then g.
- The **identity function** maps each element to **itself**.
- **Pigeonhole principle**: placing **n+1** items into **n** boxes forces at least one box to hold **≥ 2** items (so among 13 people, two share a birth month).`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "gate-discrete-math-proof-techniques-m01", topicId: "gate-discrete-math-proof-techniques", title: "Proof Techniques & Induction", content: `A **proof** is a logically valid argument establishing a statement's truth.

## Direct & indirect proofs
- **Direct proof**: assume the hypothesis P, derive the conclusion Q.
- **Contrapositive**: prove "if ¬Q then ¬P" — logically equivalent to "if P then Q".
- **Proof by contradiction**: assume the statement is **false** and derive an absurdity (e.g. **√2 is irrational** is proved this way).
- **Counterexample**: a **single** case disproves a universal claim — "all primes are odd" is refuted by **2**.

## Mathematical induction
To prove P(n) holds for all n ≥ n₀:
1. **Base case** — verify P(n₀) (usually P(1)).
2. **Inductive step** — assume P(k) (the *hypothesis*) and prove **P(k+1)**.

**Strong induction** assumes P holds for **all** values up to k, not just k, when proving P(k+1). The identity **1+2+···+n = n(n+1)/2** is a classic induction exercise.`, estimatedReadTime: 2, orderIndex: 0 }
];

export const gate4Questions: Question[] = [
  // ── Sequential Circuits & Registers ──
  { id: "gate-computer-organization-sequential-circuits-q01", topicId: "gate-computer-organization-sequential-circuits", text: "How does a sequential circuit differ from a combinational circuit?", optionA: "Its output depends on current inputs and stored past state", optionB: "It has no inputs", optionC: "Its output depends only on current inputs", optionD: "It cannot use a clock", correctOption: "A", explanation: "Sequential circuits have memory, so output depends on inputs plus stored state.", orderIndex: 0 },
  { id: "gate-computer-organization-sequential-circuits-q02", topicId: "gate-computer-organization-sequential-circuits", text: "How many bits does a single flip-flop store?", optionA: "8 bits", optionB: "1 bit", optionC: "2 bits", optionD: "4 bits", correctOption: "B", explanation: "A flip-flop is a one-bit memory element, storing exactly one bit.", orderIndex: 1 },
  { id: "gate-computer-organization-sequential-circuits-q03", topicId: "gate-computer-organization-sequential-circuits", text: "Which flip-flop toggles its output when both inputs are 1 and has no forbidden state?", optionA: "SR flip-flop", optionB: "D flip-flop", optionC: "JK flip-flop", optionD: "Half adder", correctOption: "C", explanation: "The JK flip-flop toggles on J=K=1 and removes the SR forbidden state.", orderIndex: 2 },
  { id: "gate-computer-organization-sequential-circuits-q04", topicId: "gate-computer-organization-sequential-circuits", text: "For a NOR-based SR flip-flop, which input combination is forbidden?", optionA: "S=0, R=0", optionB: "S=0, R=1", optionC: "S=1, R=0", optionD: "S=1, R=1", correctOption: "D", explanation: "S=R=1 is forbidden because it drives both outputs to the same level.", orderIndex: 3 },
  { id: "gate-computer-organization-sequential-circuits-q05", topicId: "gate-computer-organization-sequential-circuits", text: "In a D flip-flop, the output Q after a clock edge equals:", optionA: "The D input", optionB: "The complement of the clock", optionC: "Always 0", optionD: "The previous Q inverted", correctOption: "A", explanation: "A D flip-flop simply latches whatever value is on its D input.", orderIndex: 4 },
  { id: "gate-computer-organization-sequential-circuits-q06", topicId: "gate-computer-organization-sequential-circuits", text: "A T flip-flop with T = 1 will:", optionA: "Hold its state", optionB: "Toggle its state each clock", optionC: "Reset to 0", optionD: "Enter a forbidden state", correctOption: "B", explanation: "With T=1 a T flip-flop toggles (inverts) its output on every clock.", orderIndex: 5 },
  { id: "gate-computer-organization-sequential-circuits-q07", topicId: "gate-computer-organization-sequential-circuits", text: "What is the key difference between a latch and a flip-flop?", optionA: "A latch stores 8 bits", optionB: "A flip-flop is edge-triggered while a latch is level-triggered", optionC: "A flip-flop has no clock", optionD: "There is no difference", correctOption: "B", explanation: "Flip-flops change on a clock edge; latches are transparent while enabled.", orderIndex: 6 },
  { id: "gate-computer-organization-sequential-circuits-q08", topicId: "gate-computer-organization-sequential-circuits", text: "How many distinct states can n flip-flops represent?", optionA: "2ⁿ", optionB: "n", optionC: "n²", optionD: "2n", correctOption: "A", explanation: "Each flip-flop holds one bit, so n of them give 2ⁿ distinct states.", orderIndex: 7 },
  { id: "gate-computer-organization-sequential-circuits-q09", topicId: "gate-computer-organization-sequential-circuits", text: "How many flip-flops are needed to store an 8-bit byte?", optionA: "1", optionB: "4", optionC: "8", optionD: "16", correctOption: "C", explanation: "Each flip-flop stores one bit, so eight are needed for eight bits.", orderIndex: 8 },
  { id: "gate-computer-organization-sequential-circuits-q10", topicId: "gate-computer-organization-sequential-circuits", text: "A register that moves its stored bits one position per clock pulse is a:", optionA: "Shift register", optionB: "Multiplexer", optionC: "Decoder", optionD: "Comparator", correctOption: "A", explanation: "A shift register shifts its contents one bit per clock pulse.", orderIndex: 9 },
  { id: "gate-computer-organization-sequential-circuits-q11", topicId: "gate-computer-organization-sequential-circuits", text: "How many flip-flops does a mod-8 (0 to 7) counter require?", optionA: "2", optionB: "3", optionC: "4", optionD: "8", correctOption: "B", explanation: "8 states need ⌈log₂8⌉ = 3 flip-flops since 2³ = 8.", orderIndex: 10 },
  { id: "gate-computer-organization-sequential-circuits-q12", topicId: "gate-computer-organization-sequential-circuits", text: "In a ripple (asynchronous) counter, each flip-flop is clocked by:", optionA: "A common global clock", optionB: "The output of the preceding flip-flop", optionC: "The power supply", optionD: "An external decoder", correctOption: "B", explanation: "In a ripple counter each stage is triggered by the previous stage's output.", orderIndex: 11 },

  // ── Memory Organization & Storage ──
  { id: "gate-computer-organization-memory-organization-q01", topicId: "gate-computer-organization-memory-organization", text: "Compared with DRAM, SRAM is:", optionA: "Slower and needs refreshing", optionB: "Faster and needs no refresh", optionC: "Non-volatile", optionD: "Cheaper per bit", correctOption: "B", explanation: "SRAM uses flip-flops, so it is faster and requires no refresh, but costs more.", orderIndex: 0 },
  { id: "gate-computer-organization-memory-organization-q02", topicId: "gate-computer-organization-memory-organization", text: "In DRAM, each bit is stored using:", optionA: "A capacitor (with a transistor)", optionB: "Six transistors", optionC: "A magnetic domain", optionD: "An optical pit", correctOption: "A", explanation: "DRAM stores each bit as charge on a capacitor, which must be refreshed.", orderIndex: 1 },
  { id: "gate-computer-organization-memory-organization-q03", topicId: "gate-computer-organization-memory-organization", text: "With n address lines, how many distinct memory locations can be addressed?", optionA: "n", optionB: "2n", optionC: "2ⁿ", optionD: "n²", correctOption: "C", explanation: "n address lines give 2ⁿ unique addressable locations.", orderIndex: 2 },
  { id: "gate-computer-organization-memory-organization-q04", topicId: "gate-computer-organization-memory-organization", text: "How many address lines are needed to address 1 KB (1024 bytes) of memory?", optionA: "8", optionB: "10", optionC: "12", optionD: "1024", correctOption: "B", explanation: "1024 = 2¹⁰, so 10 address lines are required.", orderIndex: 3 },
  { id: "gate-computer-organization-memory-organization-q05", topicId: "gate-computer-organization-memory-organization", text: "Which of the following memory types is volatile?", optionA: "RAM", optionB: "ROM", optionC: "Flash", optionD: "EEPROM", correctOption: "A", explanation: "RAM loses its contents when power is removed; the others are non-volatile.", orderIndex: 4 },
  { id: "gate-computer-organization-memory-organization-q06", topicId: "gate-computer-organization-memory-organization", text: "EEPROM can be erased:", optionA: "Only by ultraviolet light", optionB: "Electrically", optionC: "Never once written", optionD: "By formatting the disk", correctOption: "B", explanation: "EEPROM stands for Electrically Erasable PROM — it erases electrically.", orderIndex: 5 },
  { id: "gate-computer-organization-memory-organization-q07", topicId: "gate-computer-organization-memory-organization", text: "Flash memory is a type of:", optionA: "SRAM", optionB: "Volatile DRAM", optionC: "Non-volatile EEPROM", optionD: "Cache", correctOption: "C", explanation: "Flash is a non-volatile, electrically erasable form of EEPROM.", orderIndex: 6 },
  { id: "gate-computer-organization-memory-organization-q08", topicId: "gate-computer-organization-memory-organization", text: "On a magnetic disk, data is stored on concentric circles called:", optionA: "Tracks", optionB: "Pages", optionC: "Frames", optionD: "Registers", correctOption: "A", explanation: "A disk surface is divided into concentric tracks, each split into sectors.", orderIndex: 7 },
  { id: "gate-computer-organization-memory-organization-q09", topicId: "gate-computer-organization-memory-organization", text: "RAID 0 improves performance by using ____ but provides no redundancy.", optionA: "Mirroring", optionB: "Striping", optionC: "Parity", optionD: "Refreshing", correctOption: "B", explanation: "RAID 0 stripes data across disks for speed but offers no fault tolerance.", orderIndex: 8 },
  { id: "gate-computer-organization-memory-organization-q10", topicId: "gate-computer-organization-memory-organization", text: "RAID 1 provides redundancy by:", optionA: "Distributing parity", optionB: "Mirroring data on two disks", optionC: "Striping without parity", optionD: "Compressing data", correctOption: "B", explanation: "RAID 1 keeps a full mirror copy of the data on a second disk.", orderIndex: 9 },
  { id: "gate-computer-organization-memory-organization-q11", topicId: "gate-computer-organization-memory-organization", text: "RAID 5 achieves fault tolerance using:", optionA: "Distributed parity", optionB: "No redundancy", optionC: "Triple mirroring", optionD: "A single dedicated data disk", correctOption: "A", explanation: "RAID 5 spreads parity across all disks, surviving one disk failure.", orderIndex: 10 },
  { id: "gate-computer-organization-memory-organization-q12", topicId: "gate-computer-organization-memory-organization", text: "In the memory hierarchy, which is the fastest to access?", optionA: "Secondary disk storage", optionB: "Main memory (DRAM)", optionC: "CPU registers", optionD: "Optical disc", correctOption: "C", explanation: "Registers sit closest to the CPU and are the fastest memory available.", orderIndex: 11 },

  // ── Functions & Mappings ──
  { id: "gate-discrete-math-functions-q01", topicId: "gate-discrete-math-functions", text: "A function that is both injective and surjective is called:", optionA: "Constant", optionB: "Bijective", optionC: "Partial", optionD: "Recursive", correctOption: "B", explanation: "A function that is one-to-one and onto is called a bijection.", orderIndex: 0 },
  { id: "gate-discrete-math-functions-q02", topicId: "gate-discrete-math-functions", text: "A function is injective (one-to-one) when:", optionA: "Distinct inputs map to distinct outputs", optionB: "Every codomain element is hit", optionC: "It has no inverse", optionD: "All inputs map to one output", correctOption: "A", explanation: "Injective means f(x1)=f(x2) implies x1=x2, so distinct inputs differ in output.", orderIndex: 1 },
  { id: "gate-discrete-math-functions-q03", topicId: "gate-discrete-math-functions", text: "A function is surjective (onto) when:", optionA: "It is constant", optionB: "Its domain is empty", optionC: "Every codomain element is mapped by some input", optionD: "No two inputs share an output", correctOption: "C", explanation: "Surjective means every element of the codomain has a pre-image.", orderIndex: 2 },
  { id: "gate-discrete-math-functions-q04", topicId: "gate-discrete-math-functions", text: "The number of functions from a set of size m to a set of size n is:", optionA: "nᵐ", optionB: "mⁿ", optionC: "m × n", optionD: "n!", correctOption: "A", explanation: "Each of the m inputs independently chooses one of n outputs, giving nᵐ.", orderIndex: 3 },
  { id: "gate-discrete-math-functions-q05", topicId: "gate-discrete-math-functions", text: "How many functions are there from a 3-element set to a 2-element set?", optionA: "6", optionB: "8", optionC: "9", optionD: "5", correctOption: "B", explanation: "The count is nᵐ = 2³ = 8 functions.", orderIndex: 4 },
  { id: "gate-discrete-math-functions-q06", topicId: "gate-discrete-math-functions", text: "The number of bijections from an n-element set to itself is:", optionA: "2ⁿ", optionB: "n²", optionC: "n!", optionD: "nⁿ", correctOption: "C", explanation: "Bijections on an n-set are the permutations, counted by n!.", orderIndex: 5 },
  { id: "gate-discrete-math-functions-q07", topicId: "gate-discrete-math-functions", text: "A function f has an inverse function if and only if it is:", optionA: "Constant", optionB: "Bijective", optionC: "Injective only", optionD: "Surjective only", correctOption: "B", explanation: "Only bijective functions are invertible, needing both one-to-one and onto.", orderIndex: 6 },
  { id: "gate-discrete-math-functions-q08", topicId: "gate-discrete-math-functions", text: "The composition (g∘f)(x) is defined as:", optionA: "g(f(x))", optionB: "f(g(x))", optionC: "g(x) × f(x)", optionD: "g(x) + f(x)", correctOption: "A", explanation: "Composition applies f first, then g, so (g∘f)(x) = g(f(x)).", orderIndex: 7 },
  { id: "gate-discrete-math-functions-q09", topicId: "gate-discrete-math-functions", text: "How many one-to-one (injective) functions exist from a 2-element set to a 4-element set?", optionA: "8", optionB: "16", optionC: "12", optionD: "6", correctOption: "C", explanation: "First input has 4 choices, second has 3, giving 4 × 3 = 12 injections.", orderIndex: 8 },
  { id: "gate-discrete-math-functions-q10", topicId: "gate-discrete-math-functions", text: "The pigeonhole principle states that placing n+1 items into n boxes forces:", optionA: "Every box to be empty", optionB: "At least one box to hold two or more items", optionC: "Exactly one item per box", optionD: "All items into one box", correctOption: "B", explanation: "With more items than boxes, some box must contain at least two items.", orderIndex: 9 },
  { id: "gate-discrete-math-functions-q11", topicId: "gate-discrete-math-functions", text: "Among any 13 people, at least two must share a birth month because:", optionA: "There are only 7 days in a week", optionB: "13 exceeds 12 months (pigeonhole)", optionC: "Months have 30 days", optionD: "Birthdays are random", correctOption: "B", explanation: "13 people into 12 months forces two into the same month by pigeonhole.", orderIndex: 10 },
  { id: "gate-discrete-math-functions-q12", topicId: "gate-discrete-math-functions", text: "The identity function on a set maps every element to:", optionA: "Zero", optionB: "The first element", optionC: "Itself", optionD: "Its successor", correctOption: "C", explanation: "The identity function returns each element unchanged, f(x) = x.", orderIndex: 11 },

  // ── Proof Techniques & Induction ──
  { id: "gate-discrete-math-proof-techniques-q01", topicId: "gate-discrete-math-proof-techniques", text: "Mathematical induction is used to prove a statement holds for all:", optionA: "Real numbers", optionB: "Natural numbers (positive integers)", optionC: "Irrational numbers", optionD: "Complex numbers", correctOption: "B", explanation: "Induction proves statements over the natural numbers step by step.", orderIndex: 0 },
  { id: "gate-discrete-math-proof-techniques-q02", topicId: "gate-discrete-math-proof-techniques", text: "The two essential steps of a proof by induction are:", optionA: "Guess and check", optionB: "Base case and inductive step", optionC: "Contradiction and negation", optionD: "Expansion and factoring", correctOption: "B", explanation: "Induction needs a base case and an inductive step to conclude.", orderIndex: 1 },
  { id: "gate-discrete-math-proof-techniques-q03", topicId: "gate-discrete-math-proof-techniques", text: "In the inductive step you assume P(k) is true and then prove:", optionA: "P(k+1)", optionB: "P(0)", optionC: "P(k−1)", optionD: "P is false", correctOption: "A", explanation: "The inductive step derives P(k+1) from the assumption P(k).", orderIndex: 2 },
  { id: "gate-discrete-math-proof-techniques-q04", topicId: "gate-discrete-math-proof-techniques", text: "The best way to disprove the claim 'all prime numbers are odd' is by:", optionA: "Induction", optionB: "A counterexample (the prime 2)", optionC: "Contrapositive", optionD: "Direct proof", correctOption: "B", explanation: "The even prime 2 is a single counterexample that disproves the claim.", orderIndex: 3 },
  { id: "gate-discrete-math-proof-techniques-q05", topicId: "gate-discrete-math-proof-techniques", text: "A proof by contradiction begins by assuming:", optionA: "The statement is true", optionB: "The negation of the statement", optionC: "A random example", optionD: "The base case", correctOption: "B", explanation: "You assume the statement is false and derive a logical contradiction.", orderIndex: 4 },
  { id: "gate-discrete-math-proof-techniques-q06", topicId: "gate-discrete-math-proof-techniques", text: "The classic proof that √2 is irrational uses proof by:", optionA: "Induction", optionB: "Contradiction", optionC: "Enumeration", optionD: "Counterexample", correctOption: "B", explanation: "Assuming √2 = a/b in lowest terms leads to a contradiction.", orderIndex: 5 },
  { id: "gate-discrete-math-proof-techniques-q07", topicId: "gate-discrete-math-proof-techniques", text: "Proving 'if not Q then not P' in place of 'if P then Q' is a proof by:", optionA: "Contrapositive", optionB: "Induction", optionC: "Construction", optionD: "Example", correctOption: "A", explanation: "The contrapositive is logically equivalent to the original implication.", orderIndex: 6 },
  { id: "gate-discrete-math-proof-techniques-q08", topicId: "gate-discrete-math-proof-techniques", text: "The contrapositive of 'if P then Q' is:", optionA: "if Q then P", optionB: "if not P then not Q", optionC: "if not Q then not P", optionD: "P and not Q", correctOption: "C", explanation: "The contrapositive of P→Q is ¬Q→¬P, which is equivalent to it.", orderIndex: 7 },
  { id: "gate-discrete-math-proof-techniques-q09", topicId: "gate-discrete-math-proof-techniques", text: "A single counterexample is sufficient to:", optionA: "Prove a universal statement", optionB: "Disprove a universal statement", optionC: "Prove an existential statement false", optionD: "Complete an induction", correctOption: "B", explanation: "One counterexample refutes a claim asserted for all cases.", orderIndex: 8 },
  { id: "gate-discrete-math-proof-techniques-q10", topicId: "gate-discrete-math-proof-techniques", text: "Strong induction differs from ordinary induction because it assumes the statement holds for:", optionA: "Only k", optionB: "All values up to k, not just k", optionC: "Only the base case", optionD: "No previous values", correctOption: "B", explanation: "Strong induction assumes P holds for all values up to k when proving P(k+1).", orderIndex: 9 },
  { id: "gate-discrete-math-proof-techniques-q11", topicId: "gate-discrete-math-proof-techniques", text: "For proving P(n) for all n ≥ 1, the base case usually verifies:", optionA: "P(0)", optionB: "P(1)", optionC: "P(n+1)", optionD: "P(∞)", correctOption: "B", explanation: "When the claim starts at n = 1, the base case checks P(1).", orderIndex: 10 },
  { id: "gate-discrete-math-proof-techniques-q12", topicId: "gate-discrete-math-proof-techniques", text: "The formula 1 + 2 + ... + n = n(n+1)/2 is most naturally proved by:", optionA: "Contradiction", optionB: "Mathematical induction", optionC: "A counterexample", optionD: "Truth table", correctOption: "B", explanation: "This summation identity is a standard proof by mathematical induction.", orderIndex: 11 }
];
