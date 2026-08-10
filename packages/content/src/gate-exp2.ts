// GATE (CS) depth expansion (pass 2). Adds high-yield topics to the thinnest
// areas — Computer Organization, Discrete Mathematics, and Programming & DS.
// Each new topic has a study note and a full 12-question drill.
import type { AuthoredMaterial } from "./builder";
import type { Question, Topic } from "@jyotir/core";

export const gate2Topics: Topic[] = [
  // Computer Organization (existing max orderIndex = 3)
  { id: "gate-computer-organization-addressing-modes-instruction-formats", subjectId: "gate-computer-organization", name: "Addressing Modes & Instruction Formats", slug: "addressing-modes-instruction-formats", orderIndex: 4 },
  { id: "gate-computer-organization-computer-arithmetic", subjectId: "gate-computer-organization", name: "Computer Arithmetic", slug: "computer-arithmetic", orderIndex: 5 },
  // Discrete Mathematics (existing max orderIndex = 3)
  { id: "gate-discrete-math-lattices-boolean-algebra", subjectId: "gate-discrete-math", name: "Lattices & Boolean Algebra", slug: "lattices-boolean-algebra", orderIndex: 4 },
  { id: "gate-discrete-math-number-theory-modular", subjectId: "gate-discrete-math", name: "Number Theory & Modular Arithmetic", slug: "number-theory-modular", orderIndex: 5 },
  // Programming & DS (existing max orderIndex = 5)
  { id: "gate-programming-ds-trees-bst", subjectId: "gate-programming-ds", name: "Trees & Binary Search Trees", slug: "trees-bst", orderIndex: 6 },
  { id: "gate-programming-ds-searching-sorting", subjectId: "gate-programming-ds", name: "Searching & Sorting Algorithms", slug: "searching-sorting", orderIndex: 7 }
];

export const gate2Materials: AuthoredMaterial[] = [
  { id: "gate-computer-organization-addressing-modes-instruction-formats-m01", topicId: "gate-computer-organization-addressing-modes-instruction-formats", title: "Addressing Modes & Instruction Formats", content: `An **instruction** has an **opcode** (operation) and zero or more **operands**. **Addressing modes** specify how an operand's location is determined.

## Common addressing modes
| Mode | Operand is… |
| --- | --- |
| **Immediate** | A constant given in the instruction |
| **Direct (absolute)** | At the memory address given in the instruction |
| **Indirect** | At the address stored at the given address |
| **Register** | In a named register |
| **Register indirect** | At the address held in a register |
| **Indexed** | Base address + index register |
| **PC-relative** | PC + a signed offset (used for branches) |

## Instruction formats
Instructions are classified by their number of explicit addresses:
- **3-address** (op A, B, C), **2-address** (op A, B), **1-address** (accumulator-based), **0-address** (stack machine, using push/pop).
- **RISC** designs favour fixed-length, few, simple instructions with load/store memory access; **CISC** has variable-length, many, complex instructions.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "gate-computer-organization-computer-arithmetic-m01", topicId: "gate-computer-organization-computer-arithmetic", title: "Computer Arithmetic", content: `## Integers
Signed integers use **two's complement**: negate by inverting all bits and adding 1. Addition and subtraction use the same adder hardware. A **half adder** adds two bits; a **full adder** also takes a carry-in. **Overflow** occurs when the result exceeds the representable range (e.g., two positives giving a negative).

## Multiplication
**Booth's algorithm** efficiently multiplies signed numbers in two's complement by examining pairs of bits.

## Floating point (IEEE 754)
A floating-point number is stored as **sign · exponent · mantissa (fraction)**:
| Format | Bits | Sign | Exponent | Mantissa |
| --- | --- | --- | --- | --- |
| **Single** | 32 | 1 | 8 | 23 |
| **Double** | 64 | 1 | 11 | 52 |

The exponent uses a **bias** (127 for single, 1023 for double), and the mantissa has an implicit leading 1 (normalised form).`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "gate-discrete-math-lattices-boolean-algebra-m01", topicId: "gate-discrete-math-lattices-boolean-algebra", title: "Lattices & Boolean Algebra", content: `## Posets and lattices
A **partially ordered set (poset)** has a relation that is reflexive, antisymmetric and transitive, often drawn as a **Hasse diagram**.

A **lattice** is a poset in which **every pair of elements** has:
- a **least upper bound (LUB / join, ∨)**, and
- a **greatest lower bound (GLB / meet, ∧)**.

A **bounded lattice** has a greatest element **1** and least element **0**.

## Boolean algebra
A **Boolean algebra** is a **complemented, distributive lattice**. It satisfies:
- **Commutative, associative, distributive** laws,
- **Identity** (a ∨ 0 = a, a ∧ 1 = a),
- **Complement** (a ∨ a' = 1, a ∧ a' = 0), and
- **De Morgan's laws**: (a ∨ b)' = a' ∧ b'.

Digital logic is built directly on Boolean algebra.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "gate-discrete-math-number-theory-modular-m01", topicId: "gate-discrete-math-number-theory-modular", title: "Number Theory & Modular Arithmetic", content: `## Divisibility, GCD and LCM
The **greatest common divisor** is found by **Euclid's algorithm**: gcd(a, b) = gcd(b, a mod b). For any two positive integers, **gcd(a,b) × lcm(a,b) = a × b**.

## Modular arithmetic
Working 'mod n' keeps only remainders:
\`\`\`
(a + b) mod n = ((a mod n) + (b mod n)) mod n
(a × b) mod n = ((a mod n) × (b mod n)) mod n
\`\`\`
**a ≡ b (mod n)** means n divides (a − b) — a **congruence**.

## Key results
- A **prime** has exactly two divisors, 1 and itself.
- **Fermat's little theorem**: if p is prime and gcd(a, p) = 1, then **aᵖ⁻¹ ≡ 1 (mod p)**.
- **Euler's totient φ(n)** counts integers ≤ n that are coprime to n; for a prime p, φ(p) = p − 1.
These underpin cryptography (e.g., RSA).`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "gate-programming-ds-trees-bst-m01", topicId: "gate-programming-ds-trees-bst", title: "Trees & Binary Search Trees", content: `A **tree** is a connected acyclic graph with a **root**; nodes have children, and leaves have none. A **binary tree** has at most two children per node.

## Binary search tree (BST)
A BST keeps, for every node, **left subtree keys < node < right subtree keys**. Search, insert and delete take **O(h)** time, where h is the height — **O(log n)** if balanced, but **O(n)** in the worst (skewed) case.

## Balanced trees
- **AVL tree**: height-balanced; the balance factor (height difference of subtrees) is kept in {−1, 0, +1} using rotations.
- **Red-black tree**: balanced via colouring rules, guaranteeing O(log n) height.

## Traversals
| Traversal | Order |
| --- | --- |
| **In-order** | Left, Root, Right → **sorted** for a BST |
| **Pre-order** | Root, Left, Right |
| **Post-order** | Left, Right, Root |
| **Level-order** | Breadth-first (uses a queue) |`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "gate-programming-ds-searching-sorting-m01", topicId: "gate-programming-ds-searching-sorting", title: "Searching & Sorting Algorithms", content: `## Searching
- **Linear search** — O(n), works on any list.
- **Binary search** — O(log n), but requires a **sorted** array.

## Sorting complexities
| Algorithm | Best | Average | Worst | Stable? |
| --- | --- | --- | --- | --- |
| **Bubble / Insertion** | O(n) | O(n²) | O(n²) | Yes |
| **Selection** | O(n²) | O(n²) | O(n²) | No |
| **Merge Sort** | O(n log n) | O(n log n) | O(n log n) | Yes |
| **Quick Sort** | O(n log n) | O(n log n) | **O(n²)** | No |
| **Heap Sort** | O(n log n) | O(n log n) | O(n log n) | No |

- A **stable** sort keeps equal keys in their original order; an **in-place** sort uses O(1) extra space.
- Any **comparison-based** sort needs at least **Ω(n log n)** comparisons.
- **Counting** and **radix** sort are non-comparison sorts that can run in **O(n)** for suitable integer keys.`, estimatedReadTime: 2, orderIndex: 0 }
];

export const gate2Questions: Question[] = [
  // ── Addressing Modes & Instruction Formats ──
  { id: "gate-computer-organization-addressing-modes-instruction-formats-q01", topicId: "gate-computer-organization-addressing-modes-instruction-formats", text: "In immediate addressing mode, the operand is:", optionA: "A constant given within the instruction", optionB: "At a memory address", optionC: "In a register", optionD: "At the address stored in a register", correctOption: "A", explanation: "Immediate mode encodes the operand value directly in the instruction.", orderIndex: 0 },
  { id: "gate-computer-organization-addressing-modes-instruction-formats-q02", topicId: "gate-computer-organization-addressing-modes-instruction-formats", text: "In direct (absolute) addressing, the instruction contains:", optionA: "The memory address of the operand", optionB: "The operand value itself", optionC: "A register name", optionD: "An offset from the PC", correctOption: "A", explanation: "Direct addressing gives the actual memory address where the operand resides.", orderIndex: 1 },
  { id: "gate-computer-organization-addressing-modes-instruction-formats-q03", topicId: "gate-computer-organization-addressing-modes-instruction-formats", text: "In indirect addressing, the instruction gives:", optionA: "The address of the address of the operand", optionB: "The operand directly", optionC: "A constant", optionD: "A register value", correctOption: "A", explanation: "Indirect mode holds a pointer: the given address stores the operand's address.", orderIndex: 2 },
  { id: "gate-computer-organization-addressing-modes-instruction-formats-q04", topicId: "gate-computer-organization-addressing-modes-instruction-formats", text: "Branch instructions commonly use which addressing mode?", optionA: "PC-relative", optionB: "Immediate", optionC: "Register", optionD: "Direct only", correctOption: "A", explanation: "PC-relative addressing computes the target as the program counter plus a signed offset.", orderIndex: 3 },
  { id: "gate-computer-organization-addressing-modes-instruction-formats-q05", topicId: "gate-computer-organization-addressing-modes-instruction-formats", text: "A stack machine uses which instruction format?", optionA: "Zero-address", optionB: "Three-address", optionC: "Two-address", optionD: "One-address", correctOption: "A", explanation: "Stack (0-address) instructions operate implicitly on the top of the stack via push/pop.", orderIndex: 4 },
  { id: "gate-computer-organization-addressing-modes-instruction-formats-q06", topicId: "gate-computer-organization-addressing-modes-instruction-formats", text: "In register addressing mode, the operand is located in:", optionA: "A CPU register", optionB: "Main memory", optionC: "The instruction itself", optionD: "The stack", correctOption: "A", explanation: "Register mode names a CPU register that holds the operand, giving fast access.", orderIndex: 5 },
  { id: "gate-computer-organization-addressing-modes-instruction-formats-q07", topicId: "gate-computer-organization-addressing-modes-instruction-formats", text: "Indexed addressing computes the operand address as:", optionA: "Base address + index register", optionB: "PC + opcode", optionC: "A constant only", optionD: "A register value only", correctOption: "A", explanation: "Indexed addressing adds an index register to a base address, useful for arrays.", orderIndex: 6 },
  { id: "gate-computer-organization-addressing-modes-instruction-formats-q08", topicId: "gate-computer-organization-addressing-modes-instruction-formats", text: "A RISC architecture typically favours:", optionA: "Fixed-length, simple instructions with load/store memory access", optionB: "Variable-length complex instructions", optionC: "Only stack operations", optionD: "No registers", correctOption: "A", explanation: "RISC uses a small set of fixed-length instructions and accesses memory only via load/store.", orderIndex: 7 },
  { id: "gate-computer-organization-addressing-modes-instruction-formats-q09", topicId: "gate-computer-organization-addressing-modes-instruction-formats", text: "The part of an instruction that specifies the operation to perform is the:", optionA: "Opcode", optionB: "Operand", optionC: "Address field", optionD: "Flag", correctOption: "A", explanation: "The opcode (operation code) tells the CPU which operation to execute.", orderIndex: 8 },
  { id: "gate-computer-organization-addressing-modes-instruction-formats-q10", topicId: "gate-computer-organization-addressing-modes-instruction-formats", text: "Register indirect addressing means the operand address is held in:", optionA: "A register", optionB: "The opcode", optionC: "The instruction's constant field", optionD: "The program counter", correctOption: "A", explanation: "In register indirect mode, a register contains the memory address of the operand.", orderIndex: 9 },
  { id: "gate-computer-organization-addressing-modes-instruction-formats-q11", topicId: "gate-computer-organization-addressing-modes-instruction-formats", text: "A one-address instruction format implies the use of a(n):", optionA: "Accumulator", optionB: "Stack only", optionC: "Three operands", optionD: "No operands", correctOption: "A", explanation: "One-address instructions use an implied accumulator as the second operand and destination.", orderIndex: 10 },
  { id: "gate-computer-organization-addressing-modes-instruction-formats-q12", topicId: "gate-computer-organization-addressing-modes-instruction-formats", text: "Compared with RISC, CISC instructions are generally:", optionA: "Variable-length and more complex", optionB: "Fixed-length and simple", optionC: "Always 0-address", optionD: "Register-only", correctOption: "A", explanation: "CISC has variable-length, complex instructions that may perform multiple operations.", orderIndex: 11 },

  // ── Computer Arithmetic ──
  { id: "gate-computer-organization-computer-arithmetic-q01", topicId: "gate-computer-organization-computer-arithmetic", text: "Signed integers in most computers are represented using:", optionA: "Two's complement", optionB: "Sign-magnitude only", optionC: "BCD", optionD: "Gray code", correctOption: "A", explanation: "Two's complement lets one adder handle both addition and subtraction with a single zero.", orderIndex: 0 },
  { id: "gate-computer-organization-computer-arithmetic-q02", topicId: "gate-computer-organization-computer-arithmetic", text: "The two's complement of a binary number is obtained by:", optionA: "Inverting all bits and adding 1", optionB: "Adding 1 only", optionC: "Inverting all bits only", optionD: "Shifting right", correctOption: "A", explanation: "Two's complement = one's complement (bit inversion) plus 1.", orderIndex: 1 },
  { id: "gate-computer-organization-computer-arithmetic-q03", topicId: "gate-computer-organization-computer-arithmetic", text: "A full adder adds:", optionA: "Two bits plus a carry-in", optionB: "Two bits only", optionC: "Three carry bits", optionD: "Four bits", correctOption: "A", explanation: "A full adder sums two input bits and a carry-in, producing a sum and carry-out.", orderIndex: 2 },
  { id: "gate-computer-organization-computer-arithmetic-q04", topicId: "gate-computer-organization-computer-arithmetic", text: "Booth's algorithm is used for:", optionA: "Signed binary multiplication", optionB: "Division only", optionC: "Sorting", optionD: "Floating-point addition", correctOption: "A", explanation: "Booth's algorithm efficiently multiplies signed numbers in two's complement form.", orderIndex: 3 },
  { id: "gate-computer-organization-computer-arithmetic-q05", topicId: "gate-computer-organization-computer-arithmetic", text: "An IEEE 754 single-precision float uses how many bits in total?", optionA: "32", optionB: "16", optionC: "64", optionD: "8", correctOption: "A", explanation: "Single precision is 32 bits: 1 sign, 8 exponent, 23 mantissa.", orderIndex: 4 },
  { id: "gate-computer-organization-computer-arithmetic-q06", topicId: "gate-computer-organization-computer-arithmetic", text: "In IEEE 754 single precision, the exponent field is:", optionA: "8 bits", optionB: "23 bits", optionC: "11 bits", optionD: "1 bit", correctOption: "A", explanation: "Single precision allots 8 bits to the biased exponent.", orderIndex: 5 },
  { id: "gate-computer-organization-computer-arithmetic-q07", topicId: "gate-computer-organization-computer-arithmetic", text: "The exponent in IEEE 754 is stored in:", optionA: "Biased (excess) form", optionB: "Two's complement", optionC: "Sign-magnitude", optionD: "BCD", correctOption: "A", explanation: "IEEE 754 stores the exponent with a bias (127 for single precision).", orderIndex: 6 },
  { id: "gate-computer-organization-computer-arithmetic-q08", topicId: "gate-computer-organization-computer-arithmetic", text: "Arithmetic overflow occurs when:", optionA: "A result exceeds the representable range", optionB: "A register is read", optionC: "Two zeros are added", optionD: "An instruction is fetched", correctOption: "A", explanation: "Overflow happens when the true result cannot fit in the available bits.", orderIndex: 7 },
  { id: "gate-computer-organization-computer-arithmetic-q09", topicId: "gate-computer-organization-computer-arithmetic", text: "An IEEE 754 double-precision float uses how many bits?", optionA: "64", optionB: "32", optionC: "128", optionD: "16", correctOption: "A", explanation: "Double precision is 64 bits: 1 sign, 11 exponent, 52 mantissa.", orderIndex: 8 },
  { id: "gate-computer-organization-computer-arithmetic-q10", topicId: "gate-computer-organization-computer-arithmetic", text: "A half adder produces a sum and a:", optionA: "Carry-out", optionB: "Borrow-in", optionC: "Quotient", optionD: "Remainder", correctOption: "A", explanation: "A half adder outputs the sum and carry of two input bits (no carry-in).", orderIndex: 9 },
  { id: "gate-computer-organization-computer-arithmetic-q11", topicId: "gate-computer-organization-computer-arithmetic", text: "In normalised IEEE 754 form, the mantissa has an implicit leading:", optionA: "1", optionB: "0", optionC: "sign bit", optionD: "exponent", correctOption: "A", explanation: "Normalised numbers assume a hidden leading 1 before the stored fraction bits.", orderIndex: 10 },
  { id: "gate-computer-organization-computer-arithmetic-q12", topicId: "gate-computer-organization-computer-arithmetic", text: "Subtraction in two's complement is performed by:", optionA: "Adding the two's complement of the subtrahend", optionB: "A separate subtractor circuit only", optionC: "Shifting left", optionD: "Inverting the result", correctOption: "A", explanation: "A − B is computed as A + (two's complement of B), reusing the adder.", orderIndex: 11 },

  // ── Lattices & Boolean Algebra ──
  { id: "gate-discrete-math-lattices-boolean-algebra-q01", topicId: "gate-discrete-math-lattices-boolean-algebra", text: "A lattice is a poset in which every pair of elements has a:", optionA: "Least upper bound and a greatest lower bound", optionB: "Unique complement only", optionC: "Cycle", optionD: "Maximum degree", correctOption: "A", explanation: "A lattice requires both a join (LUB) and a meet (GLB) for every pair of elements.", orderIndex: 0 },
  { id: "gate-discrete-math-lattices-boolean-algebra-q02", topicId: "gate-discrete-math-lattices-boolean-algebra", text: "The least upper bound of two elements in a lattice is called the:", optionA: "Join", optionB: "Meet", optionC: "Complement", optionD: "Identity", correctOption: "A", explanation: "The join (∨) is the least upper bound; the meet (∧) is the greatest lower bound.", orderIndex: 1 },
  { id: "gate-discrete-math-lattices-boolean-algebra-q03", topicId: "gate-discrete-math-lattices-boolean-algebra", text: "A Boolean algebra is a lattice that is:", optionA: "Complemented and distributive", optionB: "Only reflexive", optionC: "Cyclic", optionD: "Unbounded", correctOption: "A", explanation: "A Boolean algebra is a complemented, distributive (and bounded) lattice.", orderIndex: 2 },
  { id: "gate-discrete-math-lattices-boolean-algebra-q04", topicId: "gate-discrete-math-lattices-boolean-algebra", text: "A partial order relation is reflexive, antisymmetric, and:", optionA: "Transitive", optionB: "Symmetric", optionC: "Irreflexive", optionD: "Complete", correctOption: "A", explanation: "A poset relation is reflexive, antisymmetric and transitive.", orderIndex: 3 },
  { id: "gate-discrete-math-lattices-boolean-algebra-q05", topicId: "gate-discrete-math-lattices-boolean-algebra", text: "A poset is commonly visualised using a:", optionA: "Hasse diagram", optionB: "Truth table", optionC: "Venn diagram only", optionD: "Flowchart", correctOption: "A", explanation: "A Hasse diagram depicts the covering relation of a partially ordered set.", orderIndex: 4 },
  { id: "gate-discrete-math-lattices-boolean-algebra-q06", topicId: "gate-discrete-math-lattices-boolean-algebra", text: "In Boolean algebra, a ∨ a' equals:", optionA: "1", optionB: "0", optionC: "a", optionD: "a'", correctOption: "A", explanation: "The complement law gives a ∨ a' = 1 (and a ∧ a' = 0).", orderIndex: 5 },
  { id: "gate-discrete-math-lattices-boolean-algebra-q07", topicId: "gate-discrete-math-lattices-boolean-algebra", text: "By De Morgan's law, (a ∨ b)' equals:", optionA: "a' ∧ b'", optionB: "a' ∨ b'", optionC: "a ∧ b", optionD: "a ∨ b", correctOption: "A", explanation: "The complement of a join is the meet of the complements.", orderIndex: 6 },
  { id: "gate-discrete-math-lattices-boolean-algebra-q08", topicId: "gate-discrete-math-lattices-boolean-algebra", text: "A bounded lattice has a greatest element and a:", optionA: "Least element", optionB: "Cycle", optionC: "Complement only", optionD: "Midpoint", correctOption: "A", explanation: "A bounded lattice has both a top (1) and a bottom (0) element.", orderIndex: 7 },
  { id: "gate-discrete-math-lattices-boolean-algebra-q09", topicId: "gate-discrete-math-lattices-boolean-algebra", text: "The greatest lower bound of two elements is the:", optionA: "Meet", optionB: "Join", optionC: "Supremum", optionD: "Complement", correctOption: "A", explanation: "The meet (∧) is the greatest lower bound (infimum) of the two elements.", orderIndex: 8 },
  { id: "gate-discrete-math-lattices-boolean-algebra-q10", topicId: "gate-discrete-math-lattices-boolean-algebra", text: "In Boolean algebra, a ∧ 1 equals:", optionA: "a", optionB: "1", optionC: "0", optionD: "a'", correctOption: "A", explanation: "1 is the identity for the meet operation, so a ∧ 1 = a.", orderIndex: 9 },
  { id: "gate-discrete-math-lattices-boolean-algebra-q11", topicId: "gate-discrete-math-lattices-boolean-algebra", text: "Digital logic circuits are a direct application of:", optionA: "Boolean algebra", optionB: "Calculus", optionC: "Graph colouring", optionD: "Number theory", correctOption: "A", explanation: "Logic gates implement Boolean operations, making Boolean algebra their foundation.", orderIndex: 10 },
  { id: "gate-discrete-math-lattices-boolean-algebra-q12", topicId: "gate-discrete-math-lattices-boolean-algebra", text: "Antisymmetry of a partial order means if a ≤ b and b ≤ a then:", optionA: "a = b", optionB: "a < b", optionC: "a ≠ b", optionD: "a and b are incomparable", correctOption: "A", explanation: "Antisymmetry forces a = b when both a ≤ b and b ≤ a hold.", orderIndex: 11 },

  // ── Number Theory & Modular Arithmetic ──
  { id: "gate-discrete-math-number-theory-modular-q01", topicId: "gate-discrete-math-number-theory-modular", text: "Euclid's algorithm computes the:", optionA: "Greatest common divisor (GCD)", optionB: "Least common multiple only", optionC: "Prime factorisation", optionD: "Square root", correctOption: "A", explanation: "Euclid's algorithm finds gcd(a,b) via gcd(b, a mod b) until the remainder is 0.", orderIndex: 0 },
  { id: "gate-discrete-math-number-theory-modular-q02", topicId: "gate-discrete-math-number-theory-modular", text: "For positive integers a and b, gcd(a,b) × lcm(a,b) equals:", optionA: "a × b", optionB: "a + b", optionC: "a − b", optionD: "a / b", correctOption: "A", explanation: "The product of the GCD and LCM equals the product of the two numbers.", orderIndex: 1 },
  { id: "gate-discrete-math-number-theory-modular-q03", topicId: "gate-discrete-math-number-theory-modular", text: "The value of 17 mod 5 is:", optionA: "2", optionB: "3", optionC: "1", optionD: "0", correctOption: "A", explanation: "17 = 3×5 + 2, so the remainder is 2.", orderIndex: 2 },
  { id: "gate-discrete-math-number-theory-modular-q04", topicId: "gate-discrete-math-number-theory-modular", text: "a ≡ b (mod n) means that n divides:", optionA: "(a − b)", optionB: "(a + b)", optionC: "(a × b)", optionD: "n itself", correctOption: "A", explanation: "Congruence mod n means n | (a − b), i.e., a and b share the same remainder.", orderIndex: 3 },
  { id: "gate-discrete-math-number-theory-modular-q05", topicId: "gate-discrete-math-number-theory-modular", text: "A prime number has exactly how many positive divisors?", optionA: "Two", optionB: "One", optionC: "Three", optionD: "Infinitely many", correctOption: "A", explanation: "A prime is divisible only by 1 and itself — exactly two divisors.", orderIndex: 4 },
  { id: "gate-discrete-math-number-theory-modular-q06", topicId: "gate-discrete-math-number-theory-modular", text: "Fermat's little theorem states that for a prime p and gcd(a,p)=1:", optionA: "aᵖ⁻¹ ≡ 1 (mod p)", optionB: "aᵖ ≡ 0 (mod p)", optionC: "a ≡ p (mod 1)", optionD: "aᵖ⁺¹ ≡ 1 (mod p)", correctOption: "A", explanation: "Fermat's little theorem: aᵖ⁻¹ ≡ 1 (mod p) when p is prime and a is coprime to p.", orderIndex: 5 },
  { id: "gate-discrete-math-number-theory-modular-q07", topicId: "gate-discrete-math-number-theory-modular", text: "Euler's totient φ(p) for a prime p equals:", optionA: "p − 1", optionB: "p", optionC: "p + 1", optionD: "1", correctOption: "A", explanation: "All integers from 1 to p−1 are coprime to a prime p, so φ(p) = p − 1.", orderIndex: 6 },
  { id: "gate-discrete-math-number-theory-modular-q08", topicId: "gate-discrete-math-number-theory-modular", text: "(7 + 8) mod 6 equals:", optionA: "3", optionB: "5", optionC: "1", optionD: "0", correctOption: "A", explanation: "15 mod 6 = 3 (since 15 = 2×6 + 3).", orderIndex: 7 },
  { id: "gate-discrete-math-number-theory-modular-q09", topicId: "gate-discrete-math-number-theory-modular", text: "The GCD of 12 and 18 is:", optionA: "6", optionB: "3", optionC: "12", optionD: "36", correctOption: "A", explanation: "The largest number dividing both 12 and 18 is 6.", orderIndex: 8 },
  { id: "gate-discrete-math-number-theory-modular-q10", topicId: "gate-discrete-math-number-theory-modular", text: "Number theory results like Euler's and Fermat's theorems are fundamental to:", optionA: "Public-key cryptography (e.g., RSA)", optionB: "Sorting algorithms", optionC: "Graph traversal", optionD: "Cache design", correctOption: "A", explanation: "RSA and related schemes rely on modular arithmetic and these number-theoretic results.", orderIndex: 9 },
  { id: "gate-discrete-math-number-theory-modular-q11", topicId: "gate-discrete-math-number-theory-modular", text: "(4 × 5) mod 7 equals:", optionA: "6", optionB: "5", optionC: "0", optionD: "1", correctOption: "A", explanation: "20 mod 7 = 6 (since 20 = 2×7 + 6).", orderIndex: 10 },
  { id: "gate-discrete-math-number-theory-modular-q12", topicId: "gate-discrete-math-number-theory-modular", text: "Two integers are said to be coprime (relatively prime) when their GCD is:", optionA: "1", optionB: "0", optionC: "2", optionD: "Their product", correctOption: "A", explanation: "Coprime integers share no common factor other than 1, so gcd = 1.", orderIndex: 11 },

  // ── Trees & Binary Search Trees ──
  { id: "gate-programming-ds-trees-bst-q01", topicId: "gate-programming-ds-trees-bst", text: "In a binary search tree, for any node, the keys in its left subtree are:", optionA: "Less than the node's key", optionB: "Greater than the node's key", optionC: "Equal to the node's key", optionD: "Unordered", correctOption: "A", explanation: "A BST keeps left-subtree keys < node < right-subtree keys.", orderIndex: 0 },
  { id: "gate-programming-ds-trees-bst-q02", topicId: "gate-programming-ds-trees-bst", text: "In-order traversal of a binary search tree gives the keys in:", optionA: "Ascending sorted order", optionB: "Descending order", optionC: "Level order", optionD: "Random order", correctOption: "A", explanation: "Left–Root–Right traversal of a BST visits keys in ascending order.", orderIndex: 1 },
  { id: "gate-programming-ds-trees-bst-q03", topicId: "gate-programming-ds-trees-bst", text: "Search, insert and delete in a BST take time proportional to the:", optionA: "Height of the tree", optionB: "Number of leaves only", optionC: "Number of edges squared", optionD: "Constant", correctOption: "A", explanation: "These operations follow a root-to-node path, costing O(h) where h is the height.", orderIndex: 2 },
  { id: "gate-programming-ds-trees-bst-q04", topicId: "gate-programming-ds-trees-bst", text: "In the worst case (a skewed BST), search takes:", optionA: "O(n)", optionB: "O(log n)", optionC: "O(1)", optionD: "O(n²)", correctOption: "A", explanation: "A completely unbalanced BST degenerates into a list with height n, giving O(n) search.", orderIndex: 3 },
  { id: "gate-programming-ds-trees-bst-q05", topicId: "gate-programming-ds-trees-bst", text: "An AVL tree maintains balance by keeping the balance factor of each node in:", optionA: "{−1, 0, +1}", optionB: "{0, 1, 2}", optionC: "{−2, +2}", optionD: "Any range", correctOption: "A", explanation: "An AVL tree keeps each node's subtree-height difference within −1, 0 or +1 using rotations.", orderIndex: 4 },
  { id: "gate-programming-ds-trees-bst-q06", topicId: "gate-programming-ds-trees-bst", text: "Pre-order traversal visits nodes in the order:", optionA: "Root, Left, Right", optionB: "Left, Root, Right", optionC: "Left, Right, Root", optionD: "Right, Root, Left", correctOption: "A", explanation: "Pre-order processes the root first, then the left and right subtrees.", orderIndex: 5 },
  { id: "gate-programming-ds-trees-bst-q07", topicId: "gate-programming-ds-trees-bst", text: "Level-order traversal of a tree is implemented using a:", optionA: "Queue", optionB: "Stack", optionC: "Heap", optionD: "Hash table", correctOption: "A", explanation: "Breadth-first (level-order) traversal uses a queue to process nodes level by level.", orderIndex: 6 },
  { id: "gate-programming-ds-trees-bst-q08", topicId: "gate-programming-ds-trees-bst", text: "A balanced BST of n nodes has height:", optionA: "O(log n)", optionB: "O(n)", optionC: "O(n log n)", optionD: "O(1)", correctOption: "A", explanation: "Balancing keeps the height logarithmic, giving O(log n) operations.", orderIndex: 7 },
  { id: "gate-programming-ds-trees-bst-q09", topicId: "gate-programming-ds-trees-bst", text: "A node with no children in a tree is called a:", optionA: "Leaf", optionB: "Root", optionC: "Internal node", optionD: "Sibling", correctOption: "A", explanation: "A leaf (external node) has no children.", orderIndex: 8 },
  { id: "gate-programming-ds-trees-bst-q10", topicId: "gate-programming-ds-trees-bst", text: "Post-order traversal visits nodes in the order:", optionA: "Left, Right, Root", optionB: "Root, Left, Right", optionC: "Left, Root, Right", optionD: "Root, Right, Left", correctOption: "A", explanation: "Post-order processes both subtrees before the root — Left, Right, Root.", orderIndex: 9 },
  { id: "gate-programming-ds-trees-bst-q11", topicId: "gate-programming-ds-trees-bst", text: "A red-black tree guarantees a height of:", optionA: "O(log n)", optionB: "O(n)", optionC: "O(√n)", optionD: "O(1)", correctOption: "A", explanation: "Red-black colouring rules keep the tree approximately balanced with O(log n) height.", orderIndex: 10 },
  { id: "gate-programming-ds-trees-bst-q12", topicId: "gate-programming-ds-trees-bst", text: "The maximum number of nodes in a binary tree of height h (root at height 0) is:", optionA: "2^(h+1) − 1", optionB: "2h", optionC: "h²", optionD: "2^h", correctOption: "A", explanation: "A perfect binary tree of height h has 2⁰ + 2¹ + … + 2ʰ = 2^(h+1) − 1 nodes.", orderIndex: 11 },

  // ── Searching & Sorting Algorithms ──
  { id: "gate-programming-ds-searching-sorting-q01", topicId: "gate-programming-ds-searching-sorting", text: "Binary search requires that the input array be:", optionA: "Sorted", optionB: "Unsorted", optionC: "A linked list", optionD: "A tree", correctOption: "A", explanation: "Binary search relies on order to halve the search space, so the array must be sorted.", orderIndex: 0 },
  { id: "gate-programming-ds-searching-sorting-q02", topicId: "gate-programming-ds-searching-sorting", text: "The worst-case time complexity of linear search is:", optionA: "O(n)", optionB: "O(log n)", optionC: "O(1)", optionD: "O(n log n)", correctOption: "A", explanation: "Linear search may scan all n elements in the worst case.", orderIndex: 1 },
  { id: "gate-programming-ds-searching-sorting-q04", topicId: "gate-programming-ds-searching-sorting", text: "Quick Sort's worst-case time complexity is:", optionA: "O(n²)", optionB: "O(n log n)", optionC: "O(n)", optionD: "O(log n)", correctOption: "A", explanation: "With unfavourable pivots Quick Sort degrades to O(n²), though its average is O(n log n).", orderIndex: 3 },
  { id: "gate-programming-ds-searching-sorting-q05", topicId: "gate-programming-ds-searching-sorting", text: "A sorting algorithm is 'stable' if it:", optionA: "Preserves the relative order of equal keys", optionB: "Uses no extra memory", optionC: "Always runs in O(n)", optionD: "Sorts in descending order", correctOption: "A", explanation: "Stability means records with equal keys keep their original relative order.", orderIndex: 4 },
  { id: "gate-programming-ds-searching-sorting-q06", topicId: "gate-programming-ds-searching-sorting", text: "Any comparison-based sorting algorithm requires at least:", optionA: "Ω(n log n) comparisons", optionB: "Ω(n) comparisons", optionC: "Ω(log n) comparisons", optionD: "Ω(n²) comparisons", correctOption: "A", explanation: "The decision-tree lower bound for comparison sorts is Ω(n log n).", orderIndex: 5 },
  { id: "gate-programming-ds-searching-sorting-q07", topicId: "gate-programming-ds-searching-sorting", text: "The average-case complexity of Quick Sort is:", optionA: "O(n log n)", optionB: "O(n²)", optionC: "O(n)", optionD: "O(log n)", correctOption: "A", explanation: "With balanced partitions on average, Quick Sort runs in O(n log n).", orderIndex: 6 },
  { id: "gate-programming-ds-searching-sorting-q08", topicId: "gate-programming-ds-searching-sorting", text: "Which of these is a non-comparison sort that can run in O(n)?", optionA: "Counting sort", optionB: "Merge sort", optionC: "Quick sort", optionD: "Heap sort", correctOption: "A", explanation: "Counting sort (and radix sort) sort integer keys without comparisons, in O(n) for suitable ranges.", orderIndex: 7 },
  { id: "gate-programming-ds-searching-sorting-q09", topicId: "gate-programming-ds-searching-sorting", text: "An in-place sorting algorithm uses extra space of:", optionA: "O(1)", optionB: "O(n)", optionC: "O(n log n)", optionD: "O(n²)", correctOption: "A", explanation: "In-place algorithms use only a constant amount of auxiliary memory.", orderIndex: 8 },
  { id: "gate-programming-ds-searching-sorting-q10", topicId: "gate-programming-ds-searching-sorting", text: "Insertion sort has a best-case time complexity (nearly sorted input) of:", optionA: "O(n)", optionB: "O(n²)", optionC: "O(n log n)", optionD: "O(log n)", correctOption: "A", explanation: "On already (nearly) sorted data, insertion sort does O(n) work.", orderIndex: 9 },
  { id: "gate-programming-ds-searching-sorting-q11", topicId: "gate-programming-ds-searching-sorting", text: "Heap Sort has a worst-case time complexity of:", optionA: "O(n log n)", optionB: "O(n²)", optionC: "O(n)", optionD: "O(log n)", correctOption: "A", explanation: "Heap Sort builds a heap and extracts elements in O(n log n) worst case.", orderIndex: 10 },
  { id: "gate-programming-ds-searching-sorting-q12", topicId: "gate-programming-ds-searching-sorting", text: "Binary search on a sorted array of n elements runs in:", optionA: "O(log n)", optionB: "O(n)", optionC: "O(1)", optionD: "O(n log n)", correctOption: "A", explanation: "Halving the range each step gives logarithmic time.", orderIndex: 11 }
];
