import { defineBundle } from "./builder";
import { gateTopUp } from "./gate-exp1";
import { gate2Topics, gate2Materials, gate2Questions } from "./gate-exp2";
import { gate3Topics, gate3Materials, gate3Questions } from "./gate-exp3";
import { gate4Topics, gate4Materials, gate4Questions } from "./gate-exp4";
import { gate5Topics, gate5Materials, gate5Questions } from "./gate-exp5";

export const gate = defineBundle({
  exam: {
    id: "gate",
    slug: "gate",
    name: "GATE",
    tagline: "Engineering Maths · Aptitude · Core CS",
    orderIndex: 4
  },
  subjects: [
    { id: "gate-engineering-mathematics", examId: "gate", name: "Engineering Mathematics", slug: "engineering-mathematics", orderIndex: 0 },
    { id: "gate-general-aptitude", examId: "gate", name: "General Aptitude", slug: "general-aptitude", orderIndex: 1 },
    { id: "gate-core-cs", examId: "gate", name: "Core CS", slug: "core-cs", orderIndex: 2 },
    { id: "gate-programming-ds", examId: "gate", name: "Programming & DS", slug: "programming-ds", orderIndex: 3 },
    { id: "gate-computer-organization", examId: "gate", name: "Computer Organization", slug: "computer-organization", orderIndex: 4 },
    { id: "gate-discrete-math", examId: "gate", name: "Discrete Mathematics", slug: "discrete-math", orderIndex: 5 }
  ],
  topics: [
    {
      id: "gate-engineering-mathematics-linear-algebra",
      subjectId: "gate-engineering-mathematics",
      name: "Linear Algebra",
      slug: "linear-algebra",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-probability",
      subjectId: "gate-engineering-mathematics",
      name: "Probability",
      slug: "probability",
      orderIndex: 1
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles",
      subjectId: "gate-general-aptitude",
      name: "Ratio & Logical Puzzles",
      slug: "ratio-logical-puzzles",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees",
      subjectId: "gate-core-cs",
      name: "Data Structures — Complexity & Trees",
      slug: "data-structures-complexity-trees",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-calculus",
      subjectId: "gate-engineering-mathematics",
      name: "Calculus",
      slug: "calculus",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-differential-equations",
      subjectId: "gate-engineering-mathematics",
      name: "Differential Equations",
      slug: "differential-equations",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-sets-relations",
      subjectId: "gate-engineering-mathematics",
      name: "Discrete Mathematics: Sets & Relations",
      slug: "sets-relations",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-graph-theory",
      subjectId: "gate-engineering-mathematics",
      name: "Graph Theory",
      slug: "graph-theory",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-combinatorics",
      subjectId: "gate-engineering-mathematics",
      name: "Combinatorics",
      slug: "combinatorics",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-numerical-methods",
      subjectId: "gate-engineering-mathematics",
      name: "Numerical Methods",
      slug: "numerical-methods",
      orderIndex: 7
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude",
      subjectId: "gate-general-aptitude",
      name: "Quantitative Aptitude",
      slug: "quantitative-aptitude",
      orderIndex: 1
    },
    {
      id: "gate-general-aptitude-verbal-ability",
      subjectId: "gate-general-aptitude",
      name: "Verbal Ability",
      slug: "verbal-ability",
      orderIndex: 2
    },
    {
      id: "gate-general-aptitude-data-interpretation",
      subjectId: "gate-general-aptitude",
      name: "Data Interpretation",
      slug: "data-interpretation",
      orderIndex: 3
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series",
      subjectId: "gate-general-aptitude",
      name: "Logical Reasoning & Series",
      slug: "logical-reasoning-series",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity",
      subjectId: "gate-core-cs",
      name: "Algorithms: Sorting & Complexity",
      slug: "algorithms-sorting-complexity",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming",
      subjectId: "gate-core-cs",
      name: "Greedy & Dynamic Programming",
      slug: "greedy-dynamic-programming",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-operating-systems",
      subjectId: "gate-core-cs",
      name: "Operating Systems",
      slug: "operating-systems",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-dbms-sql",
      subjectId: "gate-core-cs",
      name: "DBMS & SQL",
      slug: "dbms-sql",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-computer-networks",
      subjectId: "gate-core-cs",
      name: "Computer Networks",
      slug: "computer-networks",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-theory-of-computation",
      subjectId: "gate-core-cs",
      name: "Theory of Computation",
      slug: "theory-of-computation",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-compiler-design",
      subjectId: "gate-core-cs",
      name: "Compiler Design",
      slug: "compiler-design",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-computer-organization-architecture",
      subjectId: "gate-core-cs",
      name: "Computer Organization & Architecture",
      slug: "computer-organization-architecture",
      orderIndex: 8
    },
    {
      id: "gate-core-cs-digital-logic",
      subjectId: "gate-core-cs",
      name: "Digital Logic",
      slug: "digital-logic",
      orderIndex: 9
    },
    {
      id: "gate-core-cs-programming-recursion-c",
      subjectId: "gate-core-cs",
      name: "Programming & Recursion in C",
      slug: "programming-recursion-c",
      orderIndex: 10
    },
    {
      id: "gate-core-cs-software-engineering",
      subjectId: "gate-core-cs",
      name: "Software Engineering",
      slug: "software-engineering",
      orderIndex: 11
    },
    {
      id: "gate-core-cs-computer-graphics-basics",
      subjectId: "gate-core-cs",
      name: "Computer Graphics Basics",
      slug: "computer-graphics-basics",
      orderIndex: 12
    },
    {
      id: "gate-core-cs-artificial-intelligence-ml-basics",
      subjectId: "gate-core-cs",
      name: "Artificial Intelligence & ML Basics",
      slug: "artificial-intelligence-ml-basics",
      orderIndex: 13
    },
    {
      id: "gate-core-cs-information-security-cryptography",
      subjectId: "gate-core-cs",
      name: "Information Security & Cryptography",
      slug: "information-security-cryptography",
      orderIndex: 14
    },
    {
      id: "gate-programming-ds-c-programming-pointers",
      subjectId: "gate-programming-ds",
      name: "C Programming & Pointers",
      slug: "c-programming-pointers",
      orderIndex: 0
    },
    {
      id: "gate-programming-ds-recursion-backtracking",
      subjectId: "gate-programming-ds",
      name: "Recursion & Backtracking",
      slug: "recursion-backtracking",
      orderIndex: 1
    },
    {
      id: "gate-programming-ds-linked-lists-stacks-queues",
      subjectId: "gate-programming-ds",
      name: "Linked Lists, Stacks & Queues",
      slug: "linked-lists-stacks-queues",
      orderIndex: 2
    },
    {
      id: "gate-programming-ds-hashing-heaps",
      subjectId: "gate-programming-ds",
      name: "Hashing & Heaps",
      slug: "hashing-heaps",
      orderIndex: 3
    },
    {
      id: "gate-programming-ds-graph-algorithms-bfs-dfs",
      subjectId: "gate-programming-ds",
      name: "Graph Algorithms (BFS/DFS)",
      slug: "graph-algorithms-bfs-dfs",
      orderIndex: 4
    },
    {
      id: "gate-programming-ds-dynamic-programming",
      subjectId: "gate-programming-ds",
      name: "Dynamic Programming",
      slug: "dynamic-programming",
      orderIndex: 5
    },
    {
      id: "gate-computer-organization-number-systems-boolean-algebra",
      subjectId: "gate-computer-organization",
      name: "Number Systems & Boolean Algebra",
      slug: "number-systems-boolean-algebra",
      orderIndex: 0
    },
    {
      id: "gate-computer-organization-cpu-instruction-pipelining",
      subjectId: "gate-computer-organization",
      name: "CPU & Instruction Pipelining",
      slug: "cpu-instruction-pipelining",
      orderIndex: 1
    },
    {
      id: "gate-computer-organization-cache-memory-hierarchy",
      subjectId: "gate-computer-organization",
      name: "Cache & Memory Hierarchy",
      slug: "cache-memory-hierarchy",
      orderIndex: 2
    },
    {
      id: "gate-computer-organization-io-interrupts",
      subjectId: "gate-computer-organization",
      name: "I/O & Interrupts",
      slug: "io-interrupts",
      orderIndex: 3
    },
    {
      id: "gate-discrete-math-propositional-predicate-logic",
      subjectId: "gate-discrete-math",
      name: "Propositional & Predicate Logic",
      slug: "propositional-predicate-logic",
      orderIndex: 0
    },
    {
      id: "gate-discrete-math-set-theory-relations",
      subjectId: "gate-discrete-math",
      name: "Set Theory & Relations",
      slug: "set-theory-relations",
      orderIndex: 1
    },
    {
      id: "gate-discrete-math-group-theory-algebra",
      subjectId: "gate-discrete-math",
      name: "Group Theory & Algebra",
      slug: "group-theory-algebra",
      orderIndex: 2
    },
    {
      id: "gate-discrete-math-counting-recurrences",
      subjectId: "gate-discrete-math",
      name: "Counting & Recurrences",
      slug: "counting-recurrences",
      orderIndex: 3
    },
    ...gate2Topics,
    ...gate3Topics,
    ...gate4Topics,
    ...gate5Topics
  ],
  materials: [
    {
      id: "gate-engineering-mathematics-linear-algebra-m01",
      topicId: "gate-engineering-mathematics-linear-algebra",
      title: "Linear Algebra",
      content: `**Linear algebra** is the study of vectors, matrices and the linear maps between them — a guaranteed source of GATE marks across every branch.

## Determinant & Inverse
- A square matrix **A** is **invertible** iff **det(A) ≠ 0** (it is then non-singular).
- **A⁻¹ = adj(A) / det(A)**.
- det(AB) = det(A)·det(B); det(Aᵀ) = det(A).

## Rank & Systems
- **Rank** = number of linearly independent rows (or columns) = number of non-zero rows in row-echelon form.
- For **Ax = b**: a unique solution needs rank(A) = rank(A|b) = number of unknowns; if rank < n, infinite solutions; if rank(A) ≠ rank(A|b), no solution.

## Eigenvalues & Eigenvectors
For **Av = λv** (v ≠ 0):

\`\`\`
det(A - lambda*I) = 0   (characteristic equation)
\`\`\`

| Property | Result |
| --- | --- |
| Sum of eigenvalues | trace(A) |
| Product of eigenvalues | det(A) |
| Eigenvalues of A⁻¹ | 1/λ |
| Eigenvalues of Aᵏ | λᵏ |

### Special Matrices
- **Symmetric** (A = Aᵀ) matrices have **real eigenvalues**.
- A **triangular** matrix's eigenvalues are its diagonal entries.
- The **Cayley–Hamilton theorem** states every matrix satisfies its own characteristic equation, a fast way to find A⁻¹ or high powers.

### Tip
- Trace and determinant give two quick checks on computed eigenvalues — their sum must equal the trace and their product the determinant.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-probability-m01",
      topicId: "gate-engineering-mathematics-probability",
      title: "Probability",
      content: `**Probability** quantifies uncertainty on a scale from 0 (impossible) to 1 (certain). GATE tests both combinatorial and distribution-based questions.

## Axioms & Rules
- **Addition rule:** P(A ∪ B) = P(A) + P(B) − P(A ∩ B).
- For **mutually exclusive** events, P(A ∩ B) = 0.
- **Conditional probability:** P(A|B) = P(A ∩ B) / P(B).
- **Independent events:** P(A ∩ B) = P(A)·P(B).

## Bayes' Theorem
\`\`\`
P(A|B) = P(B|A) * P(A) / P(B)
\`\`\`

## Key Distributions
| Distribution | Mean | Variance |
| --- | --- | --- |
| Binomial (n, p) | np | np(1−p) |
| Poisson (λ) | λ | λ |
| Uniform (a, b) | (a+b)/2 | (b−a)²/12 |
| Normal (μ, σ²) | μ | σ² |

## Expectation & Variance
- **E(X) = Σ x·P(x)** (the mean).
- **Var(X) = E(X²) − [E(X)]²**.
- Var(aX + b) = a²·Var(X); the constant b does not affect variance.

### Common Results
- For a fair die, E(X) = 3.5.
- The **Poisson** approximates the binomial when n is large and p is small (λ = np).
- The standard **normal distribution** is symmetric about its mean, with about 68% of values within one σ.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-m01",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      title: "Ratio, Proportion & Logical Puzzles",
      content: `**General Aptitude** carries 15% of GATE marks and is the highest return-on-effort section. Ratios and quick logic dominate.

## Ratio & Proportion
- A **ratio** a : b compares two quantities; a **proportion** equates two ratios, a : b = c : d, so **ad = bc**.
- To divide an amount in ratio a : b : c, each share = (part / sum) × total.
- **Mean proportional** between a and b is **√(ab)**.

## Mixtures & Alligation
The **rule of alligation** finds the ratio in which two ingredients at given prices are mixed to get a mean price:

\`\`\`
(Cheaper qty) / (Dearer qty) = (Dearer price - Mean) / (Mean - Cheaper price)
\`\`\`

## Logical Puzzle Tactics
| Puzzle type | Approach |
| --- | --- |
| Seating / arrangement | Draw a grid, fix one anchor |
| Blood relations | Use a family-tree diagram |
| Direction sense | Sketch N-E-S-W axes |
| Syllogisms | Use Venn diagrams |

### Worked Idea
- If A : B = 2 : 3 and B : C = 4 : 5, scale to a common B: A : B : C = 8 : 12 : 15.
- In **work problems**, if A does a job in x days, A's one-day work is **1/x**; combined rate adds the reciprocals.

### Tip
- Convert worded comparisons into a single chained ratio before computing — it removes most arithmetic slips.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-m01",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      title: "Data Structures — Complexity & Trees",
      content: `**Data structures** and their time complexities form the backbone of the GATE CS paper.

## Asymptotic Notation
- **Big-O** is the upper bound, **Ω** the lower bound, **Θ** the tight bound.
- Growth order: **O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)**.

## Operation Complexities
| Structure | Search | Insert | Delete |
| --- | --- | --- | --- |
| Array (unsorted) | O(n) | O(1) | O(n) |
| Sorted array | O(log n) | O(n) | O(n) |
| Hash table (avg) | O(1) | O(1) | O(1) |
| Balanced BST | O(log n) | O(log n) | O(log n) |
| Binary heap | O(n) | O(log n) | O(log n) |

## Trees
- A **binary tree** of height h has at most **2^(h+1) − 1** nodes.
- A **complete binary tree** with n nodes has height **⌊log₂ n⌋**.
- **BST property:** left subtree < node < right subtree; inorder traversal yields sorted order.
- **AVL** and **Red-Black** trees self-balance to keep operations at O(log n).

### Traversals
- **Inorder** (L, root, R), **Preorder** (root, L, R), **Postorder** (L, R, root).
- A **binary heap** is a complete tree stored in an array: for node i, children are at **2i+1** and **2i+2**.

### Tip
- A skewed (unbalanced) BST degrades to O(n) — this is exactly why balanced trees exist.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-calculus-m01",
      topicId: "gate-engineering-mathematics-calculus",
      title: "Calculus",
      content: `**Calculus** studies change through limits, derivatives and integrals — a recurring GATE topic in every engineering branch.

## Limits & Continuity
- A function is **continuous** at x = a if the left limit, right limit and f(a) all coincide.
- **L'Hopital's rule** resolves 0/0 or infinity/infinity forms by differentiating numerator and denominator.

## Derivatives
- The derivative measures instantaneous rate of change: **f'(x) = lim (f(x+h) - f(x))/h**.
- **Maxima/minima:** set f'(x) = 0; if f''(x) > 0 it is a minimum, if f''(x) < 0 a maximum.

| Function | Derivative |
| --- | --- |
| xⁿ | n·xⁿ⁻¹ |
| sin x | cos x |
| eˣ | eˣ |
| ln x | 1/x |

## Integration
The **Fundamental Theorem of Calculus** links the two operations:

\`\`\`
integral from a to b of f'(x) dx = f(b) - f(a)
\`\`\`

- **Definite integrals** give net area; **indefinite integrals** add a constant C.

### Series & Mean Value
- The **Mean Value Theorem** guarantees a point where the tangent slope equals the average rate over [a, b].
- A **Taylor series** expands f about a point: f(a) + f'(a)(x-a) + f''(a)(x-a)²/2! + ...

### Tip
- Always test the second derivative or check endpoints before declaring a global extremum.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-differential-equations-m01",
      topicId: "gate-engineering-mathematics-differential-equations",
      title: "Differential Equations",
      content: `A **differential equation** relates a function to its derivatives. GATE focuses on first-order and linear constant-coefficient forms.

## Order & Degree
- **Order** is the highest derivative present; **degree** is the power of that highest derivative after clearing radicals.

## First-Order Methods
- **Separable:** rewrite as g(y) dy = h(x) dx and integrate both sides.
- **Linear:** for dy/dx + P(x)y = Q(x), use the **integrating factor**:

\`\`\`
IF = e^(integral of P(x) dx)
\`\`\`

- **Exact:** M dx + N dy = 0 is exact when dM/dy = dN/dx.

## Second-Order Linear (constant coefficients)
For ay'' + by' + cy = 0, solve the **auxiliary equation** am² + bm + c = 0:

| Roots | General solution |
| --- | --- |
| Real distinct m1, m2 | C1·e^(m1·x) + C2·e^(m2·x) |
| Real equal m | (C1 + C2·x)·e^(m·x) |
| Complex p ± qi | e^(p·x)(C1·cos qx + C2·sin qx) |

### Particular & General
- The full solution is **complementary function + particular integral**.
- Order n equations need n independent boundary or initial conditions.

### Tip
- Identify the equation type first; choosing the wrong method wastes the most time.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-sets-relations-m01",
      topicId: "gate-engineering-mathematics-sets-relations",
      title: "Discrete Mathematics: Sets & Relations",
      content: `**Sets and relations** underpin databases, logic and automata — a high-yield discrete mathematics area for GATE CS.

## Set Basics
- **Cardinality** |A| is the number of elements; the **power set** of an n-element set has **2ⁿ** subsets.
- **Inclusion-exclusion:** |A ∪ B| = |A| + |B| − |A ∩ B|.

## Relations
A **relation** R on set A is a subset of A × A. Key properties:

| Property | Definition |
| --- | --- |
| Reflexive | (a, a) in R for all a |
| Symmetric | (a, b) in R implies (b, a) in R |
| Transitive | (a, b) and (b, c) in R implies (a, c) in R |
| Antisymmetric | (a, b) and (b, a) in R implies a = b |

## Equivalence & Partial Order
- An **equivalence relation** is reflexive, symmetric and transitive; it partitions A into disjoint classes.
- A **partial order** is reflexive, antisymmetric and transitive (a poset).

## Functions
- A function is **injective** (one-to-one), **surjective** (onto) or **bijective** (both).
- The number of functions from an m-set to an n-set is **n^m**.

### Tip
- For a set with n elements, there are 2^(n²) possible relations — count carefully in property questions.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-graph-theory-m01",
      topicId: "gate-engineering-mathematics-graph-theory",
      title: "Graph Theory",
      content: `**Graph theory** models networks of vertices and edges, appearing in algorithms, networks and combinatorics on GATE.

## Fundamentals
- A graph G = (V, E) has vertices V and edges E.
- The **handshaking lemma:** the sum of all vertex degrees equals **2|E|**.
- A **simple graph** has no loops or multiple edges.

## Special Graphs
| Graph | Edges |
| --- | --- |
| Complete K_n | n(n−1)/2 |
| Tree (n vertices) | n − 1 |
| Bipartite K(m,n) | m·n |

## Connectivity & Trees
- A **tree** is a connected acyclic graph with exactly n − 1 edges.
- A graph is **connected** if a path exists between every pair of vertices.

## Special Walks
- An **Euler circuit** exists iff the graph is connected and every vertex has **even degree**.
- A **Hamiltonian cycle** visits every vertex exactly once (no simple characterization).

## Coloring & Planarity
- The **chromatic number** is the minimum colors for a proper vertex coloring.
- For a connected planar graph, **Euler's formula** holds:

\`\`\`
V - E + F = 2
\`\`\`

### Tip
- Check the even-degree condition first when a question mentions traversing every edge.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-combinatorics-m01",
      topicId: "gate-engineering-mathematics-combinatorics",
      title: "Combinatorics",
      content: `**Combinatorics** counts arrangements and selections, a fast-scoring GATE topic underpinning probability and algorithms.

## Permutations & Combinations
- **Permutations** (order matters): nPr = n! / (n − r)!.
- **Combinations** (order ignored): nCr = n! / (r!(n − r)!).

\`\`\`
nCr = nC(n-r)   and   nCr + nC(r-1) = (n+1)Cr
\`\`\`

## Counting Principles
| Principle | Idea |
| --- | --- |
| Sum rule | Either A or B: add the counts |
| Product rule | A then B: multiply the counts |
| Pigeonhole | n+1 items in n boxes force a repeat |

## Binomial Theorem
- (x + y)ⁿ = Σ nCk · xⁿ⁻ᵏ · yᵏ; the coefficients form **Pascal's triangle**.
- The sum of all binomial coefficients for exponent n is **2ⁿ**.

## Arrangements with Repetition
- Distinct arrangements of a word with repeated letters = n! / (p! q! ...).
- Circular permutations of n objects = **(n − 1)!**.

### Tip
- Decide first whether order matters; that single choice picks permutation versus combination.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-m01",
      topicId: "gate-engineering-mathematics-numerical-methods",
      title: "Numerical Methods",
      content: `**Numerical methods** approximate solutions to equations and integrals when closed forms are hard — a steady GATE scorer.

## Root-Finding
- **Bisection** halves a bracketing interval each step; it converges **linearly** but is guaranteed.
- **Newton-Raphson** uses the tangent for fast (quadratic) convergence:

\`\`\`
x_{n+1} = x_n - f(x_n)/f'(x_n)
\`\`\`

- **Secant** approximates the derivative with a difference quotient.

## Numerical Integration
| Rule | Error order |
| --- | --- |
| Trapezoidal | O(h²) |
| Simpson's 1/3 | O(h⁴) |

- **Simpson's 1/3 rule** needs an even number of subintervals.

## Interpolation
- **Lagrange** and **Newton's divided differences** fit a polynomial through given points.
- n+1 points determine a unique polynomial of degree at most n.

## Convergence Notes
- Newton-Raphson may diverge if f'(x) is near zero or the start point is poor.
- Smaller step size h generally lowers truncation error but raises round-off error.

### Tip
- Quote convergence order from memory: bisection linear, Newton-Raphson quadratic.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-m01",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      title: "Quantitative Aptitude",
      content: `**Quantitative aptitude** rewards speed on percentages, interest, speed-time and averages — reliable GATE aptitude marks.

## Percentages & Profit
- A change from old to new is **((new − old)/old) × 100** percent.
- **Profit% = (Profit / Cost Price) × 100**; selling above cost gives profit.

## Interest
\`\`\`
Simple Interest = P*R*T/100
Compound Amount  = P*(1 + R/100)^T
\`\`\`

## Speed, Time & Distance
| Quantity | Relation |
| --- | --- |
| Speed | Distance / Time |
| Average speed | Total distance / Total time |
| Relative speed (same dir) | difference of speeds |
| Relative speed (opposite) | sum of speeds |

## Averages
- **Average = sum of observations / number of observations**.
- Adding a value equal to the current average leaves the average unchanged.

### Worked Idea
- A 20% increase followed by a 20% decrease yields a net **4% decrease**, not zero, because the base changes.

### Tip
- Convert percentages to fractions (25% = 1/4) to cut arithmetic time under exam pressure.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-verbal-ability-m01",
      topicId: "gate-general-aptitude-verbal-ability",
      title: "Verbal Ability",
      content: `**Verbal ability** tests vocabulary, grammar and reading comprehension — easy marks for a careful reader on GATE.

## Vocabulary
- **Synonyms** share meaning; **antonyms** oppose it. Context decides the best fit.
- Watch for **homophones** (their/there) and commonly confused pairs (affect/effect).

## Grammar Essentials
| Concept | Rule |
| --- | --- |
| Subject-verb agreement | Singular subject takes a singular verb |
| Tense consistency | Keep one timeframe within a clause |
| Articles | Use 'a' before consonant sounds, 'an' before vowel sounds |
| Modifiers | Place modifiers next to the word they describe |

## Sentence Completion
- Read the full sentence for tone and logical connectors (however, therefore, although).
- A contrast word signals an opposite idea ahead.

## Reading Comprehension
- Identify the **main idea** before the details.
- Distinguish **stated facts** from the author's **inference or opinion**.

### Tip
- For analogies, state the relationship in a short sentence, then test each option against it.`,
      estimatedReadTime: 1,
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-data-interpretation-m01",
      topicId: "gate-general-aptitude-data-interpretation",
      title: "Data Interpretation",
      content: `**Data interpretation** asks you to read tables, charts and graphs and compute quickly — a high-yield GATE aptitude skill.

## Chart Types
| Chart | Best for |
| --- | --- |
| Bar chart | Comparing discrete categories |
| Line graph | Trends over time |
| Pie chart | Parts of a whole (360 degrees) |
| Table | Exact values |

## Pie Chart Maths
- Each category's angle = **(category value / total) × 360** degrees.
- A category's percentage = (its angle / 360) × 100.

## Common Computations
\`\`\`
Percentage change = (New - Old) / Old * 100
Average = Sum of values / Count of values
\`\`\`

## Reading Tips
- Note the **units and scale** (thousands, lakhs, percent) before calculating.
- Watch whether a value is **absolute** or already a **percentage**.

### Worked Idea
- If a 90 degree sector represents 45 units, the whole pie is 4 × 45 = 180 units.

### Tip
- Approximate first to eliminate far-off options, then compute the exact value only if needed.`,
      estimatedReadTime: 1,
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-m01",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      title: "Logical Reasoning & Series",
      content: `**Logical reasoning and series** test pattern recognition and deduction — fast, formula-light GATE aptitude marks.

## Number Series
- Look for a consistent **difference**, **ratio**, or pattern of squares/cubes.
- Mixed series may alternate two rules across odd and even positions.

| Series | Rule |
| --- | --- |
| 2, 4, 8, 16 | Multiply by 2 |
| 1, 4, 9, 16 | Perfect squares |
| 2, 6, 12, 20 | n(n+1) |
| 1, 1, 2, 3, 5 | Fibonacci (add previous two) |

## Coding-Decoding
- Map letters to positions (A = 1, Z = 26) and look for a fixed shift.
- A common cipher shifts each letter forward or backward by a constant.

## Syllogisms & Statements
- Use **Venn diagrams** to test whether a conclusion necessarily follows.
- A conclusion is valid only if it holds in **every** possible diagram.

## Logical Deduction
\`\`\`
If P implies Q, and Q is false, then P is false (modus tollens)
\`\`\`

### Tip
- Check first differences, then ratios; most number series yield to one of these two quickly.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-m01",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      title: "Algorithms: Sorting & Complexity",
      content: `**Sorting algorithms** and their analysis are core GATE territory, blending recurrence solving with comparison counting.

## Comparison Sorts
| Algorithm | Best | Average | Worst | Space |
| --- | --- | --- | --- | --- |
| Quick sort | O(n log n) | O(n log n) | O(n²) | O(log n) |
| Merge sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Heap sort | O(n log n) | O(n log n) | O(n log n) | O(1) |
| Insertion sort | O(n) | O(n²) | O(n²) | O(1) |

- Any **comparison-based sort** has a lower bound of **Omega(n log n)**.

## Stability & In-Place
- A **stable** sort preserves the order of equal keys (merge, insertion are stable).
- **Quick sort** is in-place but not stable; **merge sort** is stable but needs O(n) extra space.

## Recurrences (Master Theorem)
\`\`\`
T(n) = a*T(n/b) + f(n)
\`\`\`

- Merge sort's T(n) = 2T(n/2) + O(n) solves to **O(n log n)**.

## Linear-Time Sorts
- **Counting, radix and bucket** sorts beat the n log n bound by avoiding comparisons, given bounded keys.

### Tip
- Quick sort's worst case O(n²) arises on already-sorted input with a poor pivot choice.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-m01",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      title: "Greedy & Dynamic Programming",
      content: `**Greedy** and **dynamic programming (DP)** are the two optimization paradigms most tested in GATE algorithm questions.

## Greedy Method
- Builds a solution by making the **locally optimal** choice at each step.
- Works only when the problem has the **greedy-choice property** and optimal substructure.

| Greedy algorithm | Problem |
| --- | --- |
| Kruskal / Prim | Minimum spanning tree |
| Dijkstra | Single-source shortest path (non-negative weights) |
| Huffman | Optimal prefix codes |

## Dynamic Programming
- Solves **overlapping subproblems** once and stores results (**memoization** or tabulation).
- Requires **optimal substructure**: an optimal solution is built from optimal subsolutions.

\`\`\`
Fib(n) = Fib(n-1) + Fib(n-2)   memoized in O(n)
\`\`\`

## Classic DP Problems
- **0/1 Knapsack**, **Longest Common Subsequence**, **Matrix Chain Multiplication**, **Floyd-Warshall**.
- 0/1 Knapsack runs in **O(nW)** pseudo-polynomial time.

## Greedy vs DP
- Greedy commits early and never reconsiders; DP explores all subproblem combinations.

### Tip
- If a greedy choice can be regretted later, the problem usually needs DP instead.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-operating-systems-m01",
      topicId: "gate-core-cs-operating-systems",
      title: "Operating Systems",
      content: `**Operating systems** manage processes, memory and I/O. GATE emphasizes scheduling, synchronization and memory management.

## Process Scheduling
| Algorithm | Property |
| --- | --- |
| FCFS | Simple, may cause convoy effect |
| SJF | Optimal average waiting time |
| Round Robin | Time-sliced, fair, preemptive |
| Priority | Risk of starvation |

- **Turnaround time = completion − arrival**; **waiting time = turnaround − burst**.

## Synchronization
- A **race condition** occurs when output depends on uncontrolled thread interleaving.
- **Mutual exclusion** in a critical section is enforced via **semaphores** or locks.
- **Deadlock** needs four conditions together: mutual exclusion, hold-and-wait, no preemption, circular wait.

## Memory Management
\`\`\`
Effective access time = (1 - p)*memory time + p*page-fault time
\`\`\`

- **Paging** removes external fragmentation; **segmentation** maps logical units.
- The **TLB** caches recent page-table entries to speed translation.

### Tip
- Breaking any one of the four deadlock conditions prevents deadlock entirely.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-dbms-sql-m01",
      topicId: "gate-core-cs-dbms-sql",
      title: "DBMS & SQL",
      content: `**Database management** covers the relational model, normalization and SQL — a dense, high-mark GATE CS topic.

## Relational Model & Keys
- A **candidate key** minimally identifies a tuple; one is chosen as the **primary key**.
- A **foreign key** references a primary key in another relation, enforcing referential integrity.

## Normalization
| Form | Removes |
| --- | --- |
| 1NF | Multi-valued / repeating groups |
| 2NF | Partial dependency on part of a key |
| 3NF | Transitive dependency on a key |
| BCNF | Every determinant is a candidate key |

- A **functional dependency** X to Y means X uniquely determines Y.

## SQL Essentials
\`\`\`
SELECT dept, COUNT(*) FROM emp GROUP BY dept HAVING COUNT(*) > 5;
\`\`\`

- **WHERE** filters rows before grouping; **HAVING** filters after aggregation.
- **JOIN** combines rows across tables on a matching condition.

## Transactions
- **ACID** properties: Atomicity, Consistency, Isolation, Durability.

### Tip
- HAVING works on aggregates, WHERE works on individual rows; confusing them is a classic error.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-computer-networks-m01",
      topicId: "gate-core-cs-computer-networks",
      title: "Computer Networks",
      content: `**Computer networks** span layered protocols, addressing and routing — a broad and reliably tested GATE area.

## OSI & TCP/IP Layers
| OSI layer | Example unit / protocol |
| --- | --- |
| Application | HTTP, DNS |
| Transport | TCP, UDP (segments) |
| Network | IP (packets) |
| Data link | Ethernet (frames) |
| Physical | bits on the wire |

## Transport Layer
- **TCP** is connection-oriented and reliable; **UDP** is connectionless and faster.
- TCP uses sequence numbers, acknowledgements and a **sliding window** for flow control.

## IP Addressing
\`\`\`
Hosts per subnet = 2^(32 - prefix) - 2
\`\`\`

- A /24 network has 2^8 − 2 = **254** usable host addresses.
- **Subnetting** borrows host bits to create more networks.

## Key Protocols
- **ARP** maps IP to MAC; **DNS** resolves names to IP addresses.
- **CSMA/CD** handles collisions in classic Ethernet.

### Tip
- Subtract 2 from host counts for the network and broadcast addresses.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-theory-of-computation-m01",
      topicId: "gate-core-cs-theory-of-computation",
      title: "Theory of Computation",
      content: `**Theory of computation** classifies languages and machines — abstract but high-scoring once the hierarchy is clear.

## Chomsky Hierarchy
| Language class | Recognizer |
| --- | --- |
| Regular | Finite automaton (DFA/NFA) |
| Context-free | Pushdown automaton |
| Context-sensitive | Linear bounded automaton |
| Recursively enumerable | Turing machine |

## Regular Languages
- **DFA** and **NFA** accept exactly the same class; every NFA has an equivalent DFA.
- **Regular expressions** describe regular languages; the **pumping lemma** proves a language is not regular.

## Context-Free
- A **CFG** generates context-free languages; a **PDA** uses a stack to recognize them.
- The language a^n b^n is context-free but **not regular**.

## Decidability
\`\`\`
The Halting Problem is undecidable.
\`\`\`

- **Decidable** problems have an always-halting algorithm; some problems are only **semi-decidable**.

### Tip
- Whenever a language requires counting or matching (like a^n b^n), suspect it is non-regular.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-compiler-design-m01",
      topicId: "gate-core-cs-compiler-design",
      title: "Compiler Design",
      content: `**Compiler design** translates source code to machine code through well-defined phases — a structured GATE CS topic.

## Phases of a Compiler
| Phase | Output |
| --- | --- |
| Lexical analysis | Tokens |
| Syntax analysis | Parse tree |
| Semantic analysis | Annotated tree |
| Intermediate code | Three-address code |
| Code optimization | Improved IR |
| Code generation | Target code |

## Front-End Tools
- The **lexer** (scanner) uses regular expressions and finite automata to produce tokens.
- The **parser** uses a context-free grammar to check syntax.

## Parsing
\`\`\`
Top-down: LL(1)    Bottom-up: LR(0), SLR, LALR, CLR
\`\`\`

- **LL(1)** parsers read Left-to-right, Leftmost derivation, 1 lookahead, and need no left recursion.
- **LR parsers** are more powerful and handle a larger grammar class.

## Symbol Table & SDT
- The **symbol table** stores identifier attributes across phases.
- **Syntax-directed translation** attaches semantic rules to grammar productions.

### Tip
- Eliminate left recursion and left factor a grammar before attempting LL(1) parsing.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-computer-organization-architecture-m01",
      topicId: "gate-core-cs-computer-organization-architecture",
      title: "Computer Organization & Architecture",
      content: `**Computer organization** covers how the CPU, memory and pipelines execute instructions — a calculation-heavy GATE topic.

## Memory Hierarchy
- Faster, smaller, costlier near the CPU: **registers < cache < main memory < disk**.
- **Cache hit ratio** drives effective access time.

\`\`\`
Avg access time = h*cache_time + (1 - h)*memory_time
\`\`\`

## Cache Mapping
| Mapping | Idea |
| --- | --- |
| Direct | Block maps to one fixed line |
| Fully associative | Block maps anywhere |
| Set associative | Block maps to one set, any line in it |

## Pipelining
- A k-stage pipeline ideally gives up to **k times** speedup.
- **Hazards** (data, control, structural) stall the pipeline and reduce throughput.

## Instruction Cycle
- Steps: **fetch, decode, execute, memory access, write-back**.
- **CPI** (cycles per instruction) and clock rate together set performance.

### Tip
- Speedup from pipelining is bounded by the number of stages and lost to hazard stalls.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-digital-logic-m01",
      topicId: "gate-core-cs-digital-logic",
      title: "Digital Logic",
      content: `**Digital logic** designs circuits from gates and Boolean algebra — a precise, formula-driven GATE foundation topic.

## Boolean Algebra
- **De Morgan's laws:** NOT(A AND B) = NOT A OR NOT B, and NOT(A OR B) = NOT A AND NOT B.
- Identities: A + 0 = A, A · 1 = A, A + A' = 1, A · A' = 0.

## Logic Gates
| Gate | Output is 1 when |
| --- | --- |
| AND | All inputs are 1 |
| OR | Any input is 1 |
| XOR | Inputs differ |
| NAND | Not all inputs are 1 |

- **NAND** and **NOR** are functionally complete (universal) gates.

## Number Systems
\`\`\`
2's complement of N = (1's complement) + 1
\`\`\`

- Two's complement represents signed integers and simplifies subtraction.

## Combinational & Sequential
- **Combinational** circuits (adders, multiplexers) depend only on current inputs.
- **Sequential** circuits (flip-flops, counters) also depend on stored state via a clock.

### Tip
- Minimize Boolean expressions with K-maps before building a circuit to cut gate count.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-programming-recursion-c-m01",
      topicId: "gate-core-cs-programming-recursion-c",
      title: "Programming & Recursion in C",
      content: `**Programming in C** with pointers and recursion is heavily tested in GATE through code-tracing questions.

## Data Types & Operators
- **sizeof** returns bytes for a type; integer division truncates toward zero.
- Operator precedence: unary > multiplicative > additive > relational > logical.

## Pointers
- A **pointer** holds an address; **dereferencing** with * accesses the pointed value.
- Array name decays to a pointer to its first element; **a[i] equals *(a + i)**.

| Concept | Meaning |
| --- | --- |
| int *p | p points to an int |
| &x | address of x |
| *p | value at p |

## Recursion
- A recursive function calls itself with a smaller input and needs a **base case**.

\`\`\`
fact(n) = (n == 0) ? 1 : n * fact(n - 1)
\`\`\`

- Each call adds a **stack frame**; missing or wrong base cases cause stack overflow.

## Parameter Passing
- C passes arguments **by value**; to modify a caller's variable, pass its **address**.

### Tip
- Trace recursion by drawing the call stack; track each return value as the stack unwinds.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-software-engineering-m01",
      topicId: "gate-core-cs-software-engineering",
      title: "Software Engineering",
      content: `**Software engineering** applies disciplined processes to build reliable systems. GATE asks about life-cycle models, metrics and testing.

## Process Models
| Model | Key trait |
| --- | --- |
| Waterfall | Sequential, rigid, no overlap |
| Iterative | Repeated cycles, early feedback |
| Spiral | Risk-driven, prototypes per loop |
| Agile | Incremental, embraces change |

- **Waterfall** suits stable requirements; **Agile** suits evolving ones.

## Estimation & Metrics
- **COCOMO** estimates effort from **KLOC** (thousands of lines of code).
- **Cyclomatic complexity** measures independent paths in a program:

\`\`\`
V(G) = E - N + 2P
\`\`\`

where E is edges, N is nodes and P is connected components of the control-flow graph.

## Testing
- **Black-box** testing checks behaviour against the specification without seeing code.
- **White-box** testing exercises internal paths and branches.
- **Unit** to **integration** to **system** to **acceptance** is the usual order.

## Coupling & Cohesion
- Aim for **low coupling** (modules independent) and **high cohesion** (a module does one job).
- High cohesion plus low coupling yields maintainable, reusable designs.

### Tip
- A higher cyclomatic complexity signals more test cases are needed to cover the paths.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-computer-graphics-basics-m01",
      topicId: "gate-core-cs-computer-graphics-basics",
      title: "Computer Graphics Basics",
      content: `**Computer graphics** turns geometric models into pixels using algorithms for drawing, clipping and transforming shapes.

## Raster Scan & Pixels
- A **raster** display stores intensity per **pixel** in the **frame buffer**.
- **Resolution** is the pixel count; **aspect ratio** is width to height.

## Line & Circle Drawing
- **Bresenham's algorithm** draws lines using only integer addition and a decision parameter, avoiding floating point.
- The **midpoint circle algorithm** exploits eight-way symmetry.

## 2D Transformations
Transformations use matrices in **homogeneous coordinates**:

| Transform | Effect |
| --- | --- |
| Translation | Shifts by (tx, ty) |
| Scaling | Multiplies coordinates by (sx, sy) |
| Rotation | Rotates by angle theta about origin |

\`\`\`
Rotation: x' = x*cos(t) - y*sin(t),  y' = x*sin(t) + y*cos(t)
\`\`\`

## Clipping
- **Cohen-Sutherland** line clipping uses 4-bit region codes around the window.
- **Sutherland-Hodgman** clips polygons against each window edge in turn.

### Tip
- Homogeneous coordinates let translation be a matrix multiply, so all transforms compose by multiplication.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-artificial-intelligence-ml-basics-m01",
      topicId: "gate-core-cs-artificial-intelligence-ml-basics",
      title: "Artificial Intelligence & ML Basics",
      content: `**Artificial intelligence** builds agents that perceive and act; **machine learning** lets them improve from data.

## Search Strategies
| Strategy | Property |
| --- | --- |
| BFS | Complete, optimal for unit cost |
| DFS | Low memory, not optimal |
| Uniform cost | Optimal for non-negative costs |
| A* | Optimal with an admissible heuristic |

- **A\\*** uses **f(n) = g(n) + h(n)**; an **admissible** heuristic never overestimates the true cost.

## Learning Paradigms
- **Supervised** learning maps inputs to labelled outputs (classification, regression).
- **Unsupervised** learning finds structure without labels (clustering).
- **Reinforcement** learning optimizes a reward through trial and error.

## Bias-Variance
\`\`\`
Total error = bias^2 + variance + irreducible noise
\`\`\`

- **Overfitting** is high variance; **underfitting** is high bias.

## Common Models
- **Linear regression**, **logistic regression**, **decision trees**, and **neural networks**.
- A neuron applies an **activation function** (such as sigmoid or ReLU) to a weighted sum.

### Tip
- Keep an admissible, consistent heuristic so A\\* stays both optimal and efficient.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-information-security-cryptography-m01",
      topicId: "gate-core-cs-information-security-cryptography",
      title: "Information Security & Cryptography",
      content: `**Information security** protects data through cryptography and access control. GATE tests cipher types, keys and core goals.

## Security Goals (CIA)
- **Confidentiality**, **Integrity** and **Availability** form the CIA triad.
- **Authentication** verifies identity; **non-repudiation** prevents denial of an action.

## Symmetric vs Asymmetric
| Type | Keys | Examples |
| --- | --- | --- |
| Symmetric | One shared secret key | AES, DES |
| Asymmetric | Public and private key pair | RSA, ECC |

- **Symmetric** ciphers are fast; **asymmetric** ciphers simplify key distribution.

## RSA Essentials
\`\`\`
Public key (e, n);  Private key (d, n);  n = p*q
Encrypt: c = m^e mod n     Decrypt: m = c^d mod n
\`\`\`

- RSA security rests on the difficulty of **factoring** large n.

## Hashing & Signatures
- A **cryptographic hash** (such as SHA-256) is one-way and collision-resistant.
- A **digital signature** encrypts a message hash with the sender's private key, proving origin and integrity.

### Tip
- Encrypting with the recipient's public key gives confidentiality; signing with your private key gives authenticity.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-programming-ds-c-programming-pointers-m01",
      topicId: "gate-programming-ds-c-programming-pointers",
      title: "C Programming & Pointers",
      content: `**Pointers** are the heart of C and a frequent GATE code-tracing topic, covering memory, arrays and dynamic allocation.

## Pointer Basics
- A **pointer** stores a memory address; **&x** takes an address and ***p** dereferences it.
- Adding 1 to a pointer advances it by **sizeof(pointed type)** bytes, not one byte.

| Declaration | Meaning |
| --- | --- |
| int *p | pointer to int |
| int **p | pointer to pointer to int |
| int a[5] | array; a is address of a[0] |
| char *s | pointer to a char (string) |

## Arrays and Pointers
- Array name **decays** to a pointer: **a[i]** is **\\*(a + i)**.
- A 2D array element a[i][j] is at base + (i*cols + j) elements.

## Dynamic Memory
\`\`\`
int *p = malloc(n * sizeof(int));  // heap allocation
free(p);                           // release to avoid leaks
\`\`\`

- **malloc** returns NULL on failure and uninitialized memory; **calloc** zeroes it.

## Common Pitfalls
- A **dangling pointer** points to freed memory; a **wild pointer** is uninitialized.
- Forgetting **free** causes a memory leak.

### Tip
- Pointer arithmetic scales by the element size, so track the type, not raw byte counts.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-programming-ds-recursion-backtracking-m01",
      topicId: "gate-programming-ds-recursion-backtracking",
      title: "Recursion & Backtracking",
      content: `**Recursion** solves a problem in terms of smaller instances; **backtracking** is recursion that abandons dead-end choices.

## Recursion Anatomy
- Every recursion needs a **base case** to stop and a **recursive case** that shrinks the input.
- Each call pushes a **stack frame**; depth too large causes stack overflow.

\`\`\`
fact(n) = (n == 0) ? 1 : n * fact(n - 1)
\`\`\`

## Recurrence Costs
| Recurrence | Solution |
| --- | --- |
| T(n) = T(n-1) + O(1) | O(n) |
| T(n) = 2T(n/2) + O(n) | O(n log n) |
| T(n) = 2T(n-1) + O(1) | O(2^n) |

- Naive Fibonacci is **O(2^n)** due to repeated subproblems.

## Backtracking
- Build a solution incrementally; when a partial choice cannot lead to a valid result, **backtrack** and try the next option.
- Classic problems: **N-Queens**, **Sudoku**, **subset sum**, **permutation generation**.

## Tail vs Non-Tail
- A **tail-recursive** call is the last action and can be optimized into a loop.

### Tip
- Prune early in backtracking: reject invalid partial states before recursing deeper to save time.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-programming-ds-linked-lists-stacks-queues-m01",
      topicId: "gate-programming-ds-linked-lists-stacks-queues",
      title: "Linked Lists, Stacks & Queues",
      content: `**Linked lists, stacks and queues** are linear structures with distinct access rules — staple GATE data-structure questions.

## Linked Lists
- Each **node** holds data and a pointer to the next node; the list grows dynamically.
- A **singly** list links one way; a **doubly** list links both ways; a **circular** list loops back.

| Operation | Singly list cost |
| --- | --- |
| Insert at head | O(1) |
| Insert at tail (no tail ptr) | O(n) |
| Search | O(n) |
| Delete given node ref | O(1) for doubly |

## Stack (LIFO)
- **push** and **pop** act at the top; both are **O(1)**.
- Uses: expression evaluation, function-call stack, undo, balanced parentheses.

\`\`\`
Postfix eval: push operands, pop two on an operator, push the result
\`\`\`

## Queue (FIFO)
- **enqueue** at the rear, **dequeue** at the front, both **O(1)**.
- A **circular queue** reuses freed slots; a **deque** allows both ends.

### Tip
- Choose a stack for reversal or nesting problems and a queue for fair, in-order processing.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-programming-ds-hashing-heaps-m01",
      topicId: "gate-programming-ds-hashing-heaps",
      title: "Hashing & Heaps",
      content: `**Hashing** gives near-constant lookups; **heaps** give fast access to the min or max — both recur in GATE algorithm questions.

## Hashing
- A **hash function** maps a key to a bucket index; **collisions** occur when two keys land together.
- The **load factor** is **n / m** (entries over slots).

| Collision handling | Idea |
| --- | --- |
| Chaining | Linked list per bucket |
| Linear probing | Try next slot sequentially |
| Quadratic probing | Try i^2 away |
| Double hashing | Second hash for step size |

- Average operations are **O(1)**; worst case degrades to **O(n)**.

## Heaps
- A **binary heap** is a complete tree: a **min-heap** keeps the smallest at the root, a **max-heap** the largest.
- For node at index i, children are at **2i+1** and **2i+2** (0-indexed).

\`\`\`
build_heap: O(n)    insert / delete-min: O(log n)    peek: O(1)
\`\`\`

## Applications
- Heaps power **priority queues**, **heap sort**, and **Dijkstra's** algorithm.

### Tip
- Building a heap by sift-down over all nodes is O(n), cheaper than n separate O(log n) insertions.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-programming-ds-graph-algorithms-bfs-dfs-m01",
      topicId: "gate-programming-ds-graph-algorithms-bfs-dfs",
      title: "Graph Algorithms (BFS/DFS)",
      content: `**Graph traversal** with BFS and DFS underlies shortest paths, connectivity and ordering — high-frequency GATE material.

## Representations
| Representation | Space | Edge check |
| --- | --- | --- |
| Adjacency matrix | O(V^2) | O(1) |
| Adjacency list | O(V + E) | O(degree) |

- Lists suit **sparse** graphs; matrices suit **dense** graphs.

## BFS
- Explores level by level using a **queue**; runs in **O(V + E)**.
- On an **unweighted** graph, BFS finds the shortest path in edges.

## DFS
- Explores as deep as possible using a **stack** or recursion; also **O(V + E)**.
- Produces a DFS tree with tree, back, forward and cross edges.

\`\`\`
A back edge in a directed DFS indicates a cycle
\`\`\`

## Applications
- **Topological sort** orders a DAG (DFS finish times or Kahn's algorithm).
- DFS finds **connected components** and detects cycles; BFS gives shortest unweighted paths.

### Tip
- Use BFS when you need fewest edges; use DFS for cycle detection and topological ordering.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-programming-ds-dynamic-programming-m01",
      topicId: "gate-programming-ds-dynamic-programming",
      title: "Dynamic Programming",
      content: `**Dynamic programming (DP)** solves problems with overlapping subproblems and optimal substructure by reusing stored results.

## When DP Applies
- **Overlapping subproblems:** the same smaller problem recurs many times.
- **Optimal substructure:** an optimal answer is built from optimal sub-answers.

## Memoization vs Tabulation
| Approach | Direction | Style |
| --- | --- | --- |
| Memoization | Top-down | Recursion plus a cache |
| Tabulation | Bottom-up | Iterative table fill |

\`\`\`
Fib(n) = Fib(n-1) + Fib(n-2)   computed once each, O(n) time
\`\`\`

## Classic Problems
- **0/1 Knapsack**: O(nW) pseudo-polynomial time.
- **Longest Common Subsequence (LCS)**: O(m*n).
- **Matrix Chain Multiplication**: O(n^3).
- **Coin change**, **edit distance**, **Floyd-Warshall** all-pairs shortest paths.

## Greedy vs DP
- Greedy commits to a local choice; DP examines all combinations of subproblems and is safe when greedy fails.

### Tip
- Define the state and recurrence first; the table dimensions follow directly from the state variables.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-computer-organization-number-systems-boolean-algebra-m01",
      topicId: "gate-computer-organization-number-systems-boolean-algebra",
      title: "Number Systems & Boolean Algebra",
      content: `**Number systems** and **Boolean algebra** form the arithmetic and logic base of computer organization.

## Bases & Conversion
| Base | Digits |
| --- | --- |
| Binary | 0, 1 |
| Octal | 0 to 7 |
| Decimal | 0 to 9 |
| Hexadecimal | 0 to 9, A to F |

- Group binary bits in threes for octal, fours for hex.

## Signed Representation
\`\`\`
2's complement of N = (1's complement of N) + 1
\`\`\`

- **Two's complement** stores signed integers and turns subtraction into addition.
- An n-bit two's complement range is **-2^(n-1) to 2^(n-1) - 1**.

## Boolean Algebra
- **De Morgan's laws:** NOT(A AND B) = NOT A OR NOT B; NOT(A OR B) = NOT A AND NOT B.
- Identities: A + 0 = A, A . 1 = A, A + A' = 1, A . A' = 0.

## Minimization
- **K-maps** group adjacent 1s to simplify expressions and cut gate count.
- **NAND** and **NOR** are universal gates that can build any function.

### Tip
- To negate a two's complement number, invert all bits and add one; this also gives subtraction.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-computer-organization-cpu-instruction-pipelining-m01",
      topicId: "gate-computer-organization-cpu-instruction-pipelining",
      title: "CPU & Instruction Pipelining",
      content: `**Pipelining** overlaps instruction stages to raise throughput — one of the most computational GATE organization topics.

## Instruction Cycle
- Classic stages: **fetch, decode, execute, memory access, write-back**.
- **CPI** (cycles per instruction) and clock rate together determine performance.

## Pipeline Speedup
\`\`\`
Speedup = (n * k) / (k + n - 1)   ->  approaches k for large n
\`\`\`

where k is the number of stages and n the number of instructions.

| Hazard | Cause |
| --- | --- |
| Structural | Resource conflict |
| Data | Dependency on a prior result |
| Control | Branch changes the flow |

## Hazard Handling
- **Forwarding** (bypassing) feeds a result to a later stage early to avoid data stalls.
- **Branch prediction** and **delayed branches** reduce control-hazard penalty.

## Performance
- A k-stage pipeline ideally gives up to **k times** speedup, never more.
- Stalls and dependencies erode the ideal speedup.

### Tip
- Ideal pipeline speedup is bounded by the stage count; hazards only push you below it.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-computer-organization-cache-memory-hierarchy-m01",
      topicId: "gate-computer-organization-cache-memory-hierarchy",
      title: "Cache & Memory Hierarchy",
      content: `**The memory hierarchy** trades speed for size, and **caches** bridge the CPU-memory gap — a calculation-rich GATE topic.

## Hierarchy
- Faster, smaller, costlier near the CPU: **registers < cache < main memory < disk**.
- **Locality** (temporal and spatial) makes caching effective.

## Effective Access Time
\`\`\`
EAT = h * cache_time + (1 - h) * memory_time
\`\`\`

where h is the **hit ratio**.

## Cache Mapping
| Mapping | Block placement |
| --- | --- |
| Direct | One fixed line |
| Fully associative | Any line |
| Set associative | Any line within one set |

## Write Policies & Misses
- **Write-through** updates cache and memory together; **write-back** defers until eviction.
- Miss types: **compulsory** (first access), **capacity** (cache too small), **conflict** (mapping clash).

## Replacement
- Common policies: **LRU**, **FIFO**, and **random**; LRU exploits temporal locality.

### Tip
- A higher hit ratio lowers effective access time the most, so improving locality pays off first.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-computer-organization-io-interrupts-m01",
      topicId: "gate-computer-organization-io-interrupts",
      title: "I/O & Interrupts",
      content: `**Input/output** moves data between the CPU and devices; **interrupts** let devices signal the processor asynchronously.

## I/O Techniques
| Technique | CPU involvement |
| --- | --- |
| Programmed I/O | Busy-waits, polls a status bit |
| Interrupt-driven | Device signals when ready |
| DMA | Controller transfers, CPU freed |

- **Programmed I/O** wastes CPU cycles polling; **DMA** offloads bulk transfers.

## Interrupts
- An **interrupt** suspends the current program, saves context, and runs an **interrupt service routine (ISR)**.
- **Maskable** interrupts can be disabled; **non-maskable** ones cannot.

\`\`\`
On interrupt: save PC and registers -> run ISR -> restore -> resume
\`\`\`

## Priority & Vectoring
- A **priority** scheme decides which interrupt is serviced when several occur.
- **Vectored** interrupts supply the ISR address directly, avoiding a polling scan.

## DMA Modes
- **Burst**, **cycle-stealing**, and **transparent** modes balance transfer speed against CPU access.

### Tip
- Use DMA for large block transfers; the CPU only sets up and is notified once the transfer completes.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-discrete-math-propositional-predicate-logic-m01",
      topicId: "gate-discrete-math-propositional-predicate-logic",
      title: "Propositional & Predicate Logic",
      content: `**Logic** formalizes reasoning with propositions and quantifiers — a dependable GATE discrete-mathematics scorer.

## Connectives
| Connective | Symbol meaning |
| --- | --- |
| Negation | NOT p |
| Conjunction | p AND q |
| Disjunction | p OR q |
| Implication | p implies q |
| Biconditional | p if and only if q |

- An **implication** p implies q is false only when p is true and q is false.

## Equivalences
\`\`\`
p implies q  ==  (NOT p) OR q          (material implication)
NOT(p AND q) ==  (NOT p) OR (NOT q)    (De Morgan)
\`\`\`

- A **tautology** is always true; a **contradiction** is always false.
- The **contrapositive** (NOT q implies NOT p) is equivalent to the original implication.

## Predicate Logic
- A **predicate** P(x) becomes a proposition once x is bound by a quantifier.
- **Universal** (for all x) and **existential** (there exists x) quantifiers; negation swaps them: NOT(for all x P) = there exists x NOT P.

### Tip
- Rewrite implications as (NOT p) OR q to simplify truth tables and check equivalences fast.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-discrete-math-set-theory-relations-m01",
      topicId: "gate-discrete-math-set-theory-relations",
      title: "Set Theory & Relations",
      content: `**Set theory and relations** underpin databases, logic and counting — a high-yield GATE discrete-mathematics area.

## Set Basics
- **Cardinality** |A| counts elements; the **power set** of an n-element set has **2^n** subsets.
- **Inclusion-exclusion:** |A union B| = |A| + |B| - |A intersect B|.

## Relations on a Set
A **relation** R on A is a subset of A x A.

| Property | Definition |
| --- | --- |
| Reflexive | (a, a) in R for all a |
| Symmetric | (a, b) in R implies (b, a) in R |
| Transitive | (a, b), (b, c) in R implies (a, c) in R |
| Antisymmetric | (a, b), (b, a) in R implies a = b |

## Equivalence & Order
- An **equivalence relation** is reflexive, symmetric and transitive; it partitions A into disjoint **classes**.
- A **partial order** is reflexive, antisymmetric and transitive, forming a **poset**.

## Functions
\`\`\`
Number of functions from an m-set to an n-set = n^m
\`\`\`

- A function is **injective**, **surjective** or **bijective**.

### Tip
- For an n-element set there are 2^(n^2) possible relations; count carefully in property questions.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-discrete-math-group-theory-algebra-m01",
      topicId: "gate-discrete-math-group-theory-algebra",
      title: "Group Theory & Algebra",
      content: `**Group theory** studies sets with a single well-behaved operation — the algebraic backbone of cryptography and coding.

## Algebraic Structures
| Structure | Requirements |
| --- | --- |
| Semigroup | Closure, associativity |
| Monoid | Semigroup with identity |
| Group | Monoid with inverses |
| Abelian group | Group that is commutative |

- A **group** (G, *) satisfies closure, associativity, an **identity**, and an **inverse** for each element.

## Group Properties
\`\`\`
Order of a group = number of its elements
Order of an element a = smallest k with a^k = identity
\`\`\`

- **Lagrange's theorem:** the order of a subgroup **divides** the order of the group.

## Cyclic & Beyond
- A **cyclic group** is generated by a single element; every cyclic group is abelian.
- A **ring** adds a second operation; a **field** is a commutative ring where every non-zero element has a multiplicative inverse.

### Tip
- Use Lagrange's theorem to rule out impossible subgroup sizes: only divisors of the group order can occur.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-discrete-math-counting-recurrences-m01",
      topicId: "gate-discrete-math-counting-recurrences",
      title: "Counting & Recurrences",
      content: `**Counting** and **recurrence relations** quantify arrangements and recursive growth — a fast-scoring GATE combinatorics topic.

## Counting Principles
| Principle | Idea |
| --- | --- |
| Sum rule | Either A or B: add counts |
| Product rule | A then B: multiply counts |
| Pigeonhole | n+1 items in n boxes force a repeat |

- **Permutations:** nPr = n! / (n - r)!; **combinations:** nCr = n! / (r!(n - r)!).

## Recurrence Relations
\`\`\`
Linear homogeneous: a_n = c1*a_(n-1) + c2*a_(n-2)
Characteristic eqn: x^2 = c1*x + c2
\`\`\`

- Solve the characteristic equation; distinct roots give A*r1^n + B*r2^n.

## Common Recurrences
| Recurrence | Closed form |
| --- | --- |
| a_n = a_(n-1) + d | Arithmetic, O(n) |
| a_n = r * a_(n-1) | Geometric, r^n |
| a_n = a_(n-1) + a_(n-2) | Fibonacci |

## Generating Functions
- A **generating function** encodes a sequence as coefficients of a power series, helping solve recurrences.

### Tip
- For a linear recurrence, form and solve the characteristic equation; repeated roots add a factor of n.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    ...gate2Materials,
    ...gate3Materials,
    ...gate4Materials,
    ...gate5Materials
  ],
  questions: [
    {
      id: "gate-engineering-mathematics-linear-algebra-q01",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "A square matrix A is invertible if and only if:",
      optionA: "det(A) = 0",
      optionB: "trace(A) = 0",
      optionC: "A is symmetric",
      optionD: "det(A) ≠ 0",
      correctOption: "D",
      explanation: "A matrix is non-singular (invertible) exactly when its determinant is non-zero.",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q02",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "The sum of the eigenvalues of a matrix equals its:",
      optionA: "Determinant",
      optionB: "Trace",
      optionC: "Rank",
      optionD: "Norm",
      correctOption: "B",
      explanation: "The sum of eigenvalues equals the trace; their product equals the determinant.",
      orderIndex: 1
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q03",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "If the eigenvalues of A are 2 and 3, the eigenvalues of A⁻¹ are:",
      optionA: "2 and 3",
      optionB: "−2 and −3",
      optionC: "1/2 and 1/3",
      optionD: "4 and 9",
      correctOption: "C",
      explanation: "Eigenvalues of the inverse are the reciprocals of the original eigenvalues.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q04",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "The eigenvalues of a triangular matrix are:",
      optionA: "Always complex",
      optionB: "Its diagonal entries",
      optionC: "Its off-diagonal entries",
      optionD: "Always zero",
      correctOption: "B",
      explanation: "For a triangular matrix, the eigenvalues are simply the diagonal elements.",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q05",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "A real symmetric matrix always has:",
      optionA: "Zero determinant",
      optionB: "Complex eigenvalues",
      optionC: "Real eigenvalues",
      optionD: "Equal eigenvalues",
      correctOption: "C",
      explanation: "Real symmetric matrices are guaranteed to have real eigenvalues.",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q06",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "For the system Ax = b to have a unique solution, the rank must satisfy:",
      optionA: "rank(A) = rank(A|b) = n",
      optionB: "rank(A) < n",
      optionC: "rank(A) ≠ rank(A|b)",
      optionD: "rank(A) = 0",
      correctOption: "A",
      explanation: "A unique solution needs the coefficient and augmented ranks to equal the number of unknowns n.",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q07",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "The Cayley–Hamilton theorem states that every square matrix satisfies its own:",
      optionA: "Characteristic equation",
      optionB: "Determinant",
      optionC: "Trace equation",
      optionD: "Inverse",
      correctOption: "A",
      explanation: "Every matrix satisfies its characteristic equation, enabling quick computation of inverses and powers.",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q08",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "If det(A) = 5 and det(B) = 2 for 3×3 matrices, then det(AB) is:",
      optionA: "7",
      optionB: "0",
      optionC: "25",
      optionD: "10",
      correctOption: "D",
      explanation: "det(AB) = det(A)·det(B) = 5 × 2 = 10.",
      orderIndex: 7
    },
    {
      id: "gate-engineering-mathematics-probability-q01",
      topicId: "gate-engineering-mathematics-probability",
      text: "Two events A and B are independent when:",
      optionA: "P(A ∩ B) = 0",
      optionB: "P(A) = P(B)",
      optionC: "P(A ∩ B) = P(A)·P(B)",
      optionD: "P(A ∪ B) = 1",
      correctOption: "C",
      explanation: "Independence means the joint probability equals the product of the individual probabilities.",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-probability-q02",
      topicId: "gate-engineering-mathematics-probability",
      text: "The mean of a binomial distribution with parameters n and p is:",
      optionA: "np(1−p)",
      optionB: "n/p",
      optionC: "p/n",
      optionD: "np",
      correctOption: "D",
      explanation: "The binomial mean is np; its variance is np(1−p).",
      orderIndex: 1
    },
    {
      id: "gate-engineering-mathematics-probability-q03",
      topicId: "gate-engineering-mathematics-probability",
      text: "For a Poisson distribution, the variance equals:",
      optionA: "λ",
      optionB: "λ²",
      optionC: "√λ",
      optionD: "1/λ",
      correctOption: "A",
      explanation: "A Poisson distribution has mean and variance both equal to λ.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-probability-q04",
      topicId: "gate-engineering-mathematics-probability",
      text: "The expected value when rolling a single fair six-sided die is:",
      optionA: "3",
      optionB: "3.5",
      optionC: "4",
      optionD: "6",
      correctOption: "B",
      explanation: "E(X) = (1+2+3+4+5+6)/6 = 21/6 = 3.5.",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-probability-q05",
      topicId: "gate-engineering-mathematics-probability",
      text: "The variance of a random variable is given by:",
      optionA: "E(X) − E(X²)",
      optionB: "E(X²) + E(X)",
      optionC: "[E(X)]² − E(X²)",
      optionD: "E(X²) − [E(X)]²",
      correctOption: "D",
      explanation: "Var(X) = E(X²) − [E(X)]² by definition.",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-probability-q06",
      topicId: "gate-engineering-mathematics-probability",
      text: "Two fair coins are tossed. The probability of getting exactly one head is:",
      optionA: "1/4",
      optionB: "1/3",
      optionC: "1/2",
      optionD: "3/4",
      correctOption: "C",
      explanation: "Outcomes HT and TH out of four equally likely give 2/4 = 1/2.",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-probability-q07",
      topicId: "gate-engineering-mathematics-probability",
      text: "Conditional probability P(A|B) is defined as:",
      optionA: "P(A) · P(B)",
      optionB: "P(B) / P(A)",
      optionC: "P(A ∪ B) / P(B)",
      optionD: "P(A ∩ B) / P(B)",
      correctOption: "D",
      explanation: "P(A|B) = P(A ∩ B)/P(B), assuming P(B) > 0.",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-probability-q08",
      topicId: "gate-engineering-mathematics-probability",
      text: "Adding a constant b to a random variable X changes its variance by:",
      optionA: "2b",
      optionB: "No change",
      optionC: "b",
      optionD: "b²",
      correctOption: "B",
      explanation: "Var(X + b) = Var(X); shifting by a constant does not affect variance.",
      orderIndex: 7
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q01",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "If A : B = 2 : 3 and B : C = 4 : 5, then A : C is:",
      optionA: "2 : 5",
      optionB: "3 : 4",
      optionC: "5 : 8",
      optionD: "8 : 15",
      correctOption: "D",
      explanation: "Scale to A : B : C = 8 : 12 : 15, so A : C = 8 : 15.",
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q02",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "₹1200 is divided between two people in the ratio 2 : 3. The larger share is:",
      optionA: "₹720",
      optionB: "₹600",
      optionC: "₹800",
      optionD: "₹480",
      correctOption: "A",
      explanation: "The larger share = (3/5) × 1200 = ₹720.",
      orderIndex: 1
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q03",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "The mean proportional between 4 and 16 is:",
      optionA: "8",
      optionB: "6",
      optionC: "10",
      optionD: "12",
      correctOption: "A",
      explanation: "Mean proportional = √(4 × 16) = √64 = 8.",
      orderIndex: 2
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q04",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "A does a job in 10 days and B in 15 days. Working together they finish in:",
      optionA: "5 days",
      optionB: "12 days",
      optionC: "6 days",
      optionD: "8 days",
      correctOption: "C",
      explanation: "Combined rate = 1/10 + 1/15 = 1/6, so they finish in 6 days.",
      orderIndex: 3
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q05",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "Pointing to a photo, a man says, 'She is my mother's only daughter.' The photo is of his:",
      optionA: "Wife",
      optionB: "Sister",
      optionC: "Mother",
      optionD: "Daughter",
      correctOption: "B",
      explanation: "His mother's only daughter is his sister.",
      orderIndex: 4
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q06",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "A man walks 5 km north, then 3 km east, then 5 km south. How far is he from the start?",
      optionA: "3 km",
      optionB: "5 km",
      optionC: "2 km",
      optionD: "8 km",
      correctOption: "A",
      explanation: "The north and south cancel, leaving 3 km east of the start.",
      orderIndex: 5
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q07",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "In what ratio must rice at ₹30/kg be mixed with rice at ₹40/kg to get a mixture at ₹36/kg?",
      optionA: "3 : 2",
      optionB: "4 : 6",
      optionC: "2 : 3",
      optionD: "6 : 4",
      correctOption: "C",
      explanation: "By alligation, ratio = (40−36) : (36−30) = 4 : 6 = 2 : 3.",
      orderIndex: 6
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q08",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "If 3 men can build a wall in 8 days, how many days will 4 men take (same rate)?",
      optionA: "4 days",
      optionB: "6 days",
      optionC: "8 days",
      optionD: "10 days",
      correctOption: "B",
      explanation: "Work is constant: 3 × 8 = 4 × d, so d = 24/4 = 6 days.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q01",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "The average-case time complexity of search in a balanced binary search tree is:",
      optionA: "O(1)",
      optionB: "O(log n)",
      optionC: "O(n)",
      optionD: "O(n log n)",
      correctOption: "B",
      explanation: "A balanced BST keeps height at log n, giving O(log n) search.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q02",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "The maximum number of nodes in a binary tree of height h is:",
      optionA: "2^(h+1) − 1",
      optionB: "2^h",
      optionC: "2^h − 1",
      optionD: "h²",
      correctOption: "A",
      explanation: "A full binary tree of height h holds 2^(h+1) − 1 nodes.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q03",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "Which traversal of a binary search tree visits nodes in sorted order?",
      optionA: "Preorder",
      optionB: "Level-order",
      optionC: "Postorder",
      optionD: "Inorder",
      correctOption: "D",
      explanation: "Inorder traversal (L, root, R) of a BST yields keys in ascending order.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q04",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "The average-case time to search in a hash table is:",
      optionA: "O(n²)",
      optionB: "O(1)",
      optionC: "O(n)",
      optionD: "O(log n)",
      correctOption: "B",
      explanation: "With good hashing and few collisions, hash-table search is O(1) on average.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q05",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "In a binary heap stored in an array, the children of node at index i are at:",
      optionA: "i−1 and i+1",
      optionB: "2i and 2i+1 (0-indexed)",
      optionC: "2i+1 and 2i+2 (0-indexed)",
      optionD: "i/2 and 2i",
      correctOption: "C",
      explanation: "For a 0-indexed array heap, node i has children at 2i+1 and 2i+2.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q06",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "Which notation describes the tight asymptotic bound of an algorithm?",
      optionA: "Big-Ω",
      optionB: "Little-o",
      optionC: "Big-O",
      optionD: "Big-Θ",
      correctOption: "D",
      explanation: "Big-Θ gives a tight bound, sandwiching the function between O and Ω.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q07",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "Searching an unsorted array of n elements has worst-case complexity:",
      optionA: "O(n)",
      optionB: "O(log n)",
      optionC: "O(1)",
      optionD: "O(n²)",
      correctOption: "A",
      explanation: "A linear scan may inspect all n elements, giving O(n).",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q08",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "A binary search tree degrades to O(n) operations when it is:",
      optionA: "Perfectly balanced",
      optionB: "Completely skewed",
      optionC: "Empty",
      optionD: "Complete",
      correctOption: "B",
      explanation: "A fully skewed BST behaves like a linked list, making operations O(n).",
      orderIndex: 7
    },
    {
      id: "gate-engineering-mathematics-calculus-q01",
      topicId: "gate-engineering-mathematics-calculus",
      text: "The derivative of x raised to the power n with respect to x is:",
      optionA: "x raised to (n plus 1) over (n plus 1)",
      optionB: "x raised to (n minus 1)",
      optionC: "n times x raised to n",
      optionD: "n times x raised to (n minus 1)",
      correctOption: "D",
      explanation: "By the power rule, d/dx of x^n equals n times x^(n-1).",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-calculus-q02",
      topicId: "gate-engineering-mathematics-calculus",
      text: "At a local minimum of a twice-differentiable function, the second derivative is:",
      optionA: "Zero",
      optionB: "Positive",
      optionC: "Negative",
      optionD: "Undefined",
      correctOption: "B",
      explanation: "A positive second derivative at a stationary point indicates a local minimum.",
      orderIndex: 1
    },
    {
      id: "gate-engineering-mathematics-calculus-q03",
      topicId: "gate-engineering-mathematics-calculus",
      text: "The value of the integral of cos x with respect to x is:",
      optionA: "Negative sin x plus C",
      optionB: "sin x plus C",
      optionC: "tan x plus C",
      optionD: "Negative cos x plus C",
      correctOption: "B",
      explanation: "The antiderivative of cos x is sin x plus a constant.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-calculus-q04",
      topicId: "gate-engineering-mathematics-calculus",
      text: "The limit of (sin x)/x as x approaches 0 is:",
      optionA: "0",
      optionB: "Infinity",
      optionC: "1",
      optionD: "Undefined",
      correctOption: "C",
      explanation: "This standard limit equals 1, often confirmed via L'Hopital's rule.",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-calculus-q05",
      topicId: "gate-engineering-mathematics-calculus",
      text: "L'Hopital's rule applies directly to limits of the indeterminate form:",
      optionA: "0 over 0",
      optionB: "1 over 0",
      optionC: "0 times 1",
      optionD: "1 plus 1",
      correctOption: "A",
      explanation: "L'Hopital's rule resolves 0/0 and infinity/infinity indeterminate forms.",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-calculus-q06",
      topicId: "gate-engineering-mathematics-calculus",
      text: "A function is continuous at a point when its left limit, right limit, and function value are:",
      optionA: "Strictly increasing",
      optionB: "All zero",
      optionC: "All equal",
      optionD: "Undefined",
      correctOption: "C",
      explanation: "Continuity requires the two one-sided limits and the function value to coincide.",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-calculus-q07",
      topicId: "gate-engineering-mathematics-calculus",
      text: "The definite integral of 2x from 0 to 3 evaluates to:",
      optionA: "6",
      optionB: "3",
      optionC: "9",
      optionD: "12",
      correctOption: "C",
      explanation: "The integral of 2x is x squared; evaluated from 0 to 3 gives 9 minus 0.",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-calculus-q08",
      topicId: "gate-engineering-mathematics-calculus",
      text: "The Mean Value Theorem guarantees a point where the tangent slope equals the:",
      optionA: "Average rate of change over the interval",
      optionB: "Second derivative",
      optionC: "Maximum value",
      optionD: "Area under the curve",
      correctOption: "A",
      explanation: "The MVT gives a point whose instantaneous slope equals the interval's average rate.",
      orderIndex: 7
    },
    {
      id: "gate-engineering-mathematics-differential-equations-q01",
      topicId: "gate-engineering-mathematics-differential-equations",
      text: "The order of a differential equation is determined by its:",
      optionA: "Highest power of the function",
      optionB: "Number of terms",
      optionC: "Degree of the lowest derivative",
      optionD: "Highest derivative present",
      correctOption: "D",
      explanation: "Order is the highest derivative appearing in the equation.",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-differential-equations-q02",
      topicId: "gate-engineering-mathematics-differential-equations",
      text: "For the linear equation dy/dx plus P(x)y equals Q(x), the integrating factor is:",
      optionA: "e raised to the integral of P(x) dx",
      optionB: "e raised to the integral of Q(x) dx",
      optionC: "the integral of P(x) dx",
      optionD: "P(x) times Q(x)",
      correctOption: "A",
      explanation: "The integrating factor is e raised to the integral of P(x) with respect to x.",
      orderIndex: 1
    },
    {
      id: "gate-engineering-mathematics-differential-equations-q03",
      topicId: "gate-engineering-mathematics-differential-equations",
      text: "The auxiliary equation of y double-prime minus 5y prime plus 6y equals 0 has roots:",
      optionA: "2 and 3",
      optionB: "1 and 6",
      optionC: "Negative 2 and negative 3",
      optionD: "5 and 6",
      correctOption: "A",
      explanation: "Solving m squared minus 5m plus 6 equals 0 gives m equal to 2 and 3.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-differential-equations-q04",
      topicId: "gate-engineering-mathematics-differential-equations",
      text: "When the auxiliary equation has a repeated real root m, the general solution form is:",
      optionA: "C1 plus C2 times x",
      optionB: "Two distinct exponentials",
      optionC: "A sine and cosine combination",
      optionD: "(C1 plus C2 x) times e raised to m x",
      correctOption: "D",
      explanation: "A repeated root m gives the solution (C1 plus C2 x) times e^(m x).",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-differential-equations-q05",
      topicId: "gate-engineering-mathematics-differential-equations",
      text: "A first-order equation M dx plus N dy equals 0 is exact when:",
      optionA: "M equals N",
      optionB: "partial M over partial y equals partial N over partial x",
      optionC: "M times N equals 0",
      optionD: "partial M over partial x equals partial N over partial y",
      correctOption: "B",
      explanation: "Exactness requires the partial of M w.r.t. y to equal the partial of N w.r.t. x.",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-differential-equations-q06",
      topicId: "gate-engineering-mathematics-differential-equations",
      text: "The complete solution of a linear differential equation is the sum of the complementary function and the:",
      optionA: "Integrating factor",
      optionB: "Boundary value",
      optionC: "Auxiliary equation",
      optionD: "Particular integral",
      correctOption: "D",
      explanation: "General solution equals complementary function plus particular integral.",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-differential-equations-q07",
      topicId: "gate-engineering-mathematics-differential-equations",
      text: "A complex root pair p plus or minus qi of the auxiliary equation yields solutions involving:",
      optionA: "Polynomials only",
      optionB: "Logarithms",
      optionC: "Hyperbolic functions",
      optionD: "Sine and cosine of qx",
      correctOption: "D",
      explanation: "Complex roots give e^(p x) times a combination of cos qx and sin qx.",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-differential-equations-q08",
      topicId: "gate-engineering-mathematics-differential-equations",
      text: "A second-order differential equation requires how many independent conditions to fix constants?",
      optionA: "One",
      optionB: "Zero",
      optionC: "Three",
      optionD: "Two",
      correctOption: "D",
      explanation: "An order-n equation needs n independent initial or boundary conditions.",
      orderIndex: 7
    },
    {
      id: "gate-engineering-mathematics-sets-relations-q01",
      topicId: "gate-engineering-mathematics-sets-relations",
      text: "The number of subsets of a set with 4 elements is:",
      optionA: "16",
      optionB: "8",
      optionC: "4",
      optionD: "32",
      correctOption: "A",
      explanation: "A set of n elements has 2 raised to n subsets; 2 to the 4th is 16.",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-sets-relations-q02",
      topicId: "gate-engineering-mathematics-sets-relations",
      text: "A relation that is reflexive, symmetric, and transitive is called:",
      optionA: "A partial order",
      optionB: "A function",
      optionC: "A bijection",
      optionD: "An equivalence relation",
      correctOption: "D",
      explanation: "These three properties together define an equivalence relation.",
      orderIndex: 1
    },
    {
      id: "gate-engineering-mathematics-sets-relations-q03",
      topicId: "gate-engineering-mathematics-sets-relations",
      text: "If set A has m elements and set B has n elements, the number of functions from A to B is:",
      optionA: "m times n",
      optionB: "m raised to n",
      optionC: "n raised to m",
      optionD: "n factorial",
      correctOption: "C",
      explanation: "Each of the m elements maps to any of n images, giving n raised to m.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-sets-relations-q04",
      topicId: "gate-engineering-mathematics-sets-relations",
      text: "A relation is antisymmetric when (a, b) and (b, a) both in R imply:",
      optionA: "R is empty",
      optionB: "a is not equal to b",
      optionC: "a equals b",
      optionD: "R is reflexive",
      correctOption: "C",
      explanation: "Antisymmetry forces a to equal b whenever both ordered pairs are present.",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-sets-relations-q05",
      topicId: "gate-engineering-mathematics-sets-relations",
      text: "By inclusion-exclusion, the cardinality of A union B equals:",
      optionA: "Cardinality of A plus cardinality of B",
      optionB: "Cardinality of A plus B minus their intersection",
      optionC: "Cardinality of the intersection only",
      optionD: "Cardinality of A times cardinality of B",
      correctOption: "B",
      explanation: "The size of A union B is the sum of sizes minus the size of the intersection.",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-sets-relations-q06",
      topicId: "gate-engineering-mathematics-sets-relations",
      text: "A function that is both injective and surjective is called:",
      optionA: "Constant",
      optionB: "Bijective",
      optionC: "Partial",
      optionD: "Reflexive",
      correctOption: "B",
      explanation: "A one-to-one and onto function is a bijection.",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-sets-relations-q07",
      topicId: "gate-engineering-mathematics-sets-relations",
      text: "The total number of binary relations on a set with 3 elements is:",
      optionA: "8",
      optionB: "64",
      optionC: "27",
      optionD: "512",
      correctOption: "D",
      explanation: "Relations on an n-set number 2 raised to n squared; for n equal 3 that is 2 to the 9, or 512.",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-sets-relations-q08",
      topicId: "gate-engineering-mathematics-sets-relations",
      text: "A partial order relation is reflexive, transitive, and:",
      optionA: "Symmetric",
      optionB: "Irreflexive",
      optionC: "Antisymmetric",
      optionD: "Surjective",
      correctOption: "C",
      explanation: "A partial order is reflexive, antisymmetric, and transitive.",
      orderIndex: 7
    },
    {
      id: "gate-engineering-mathematics-graph-theory-q01",
      topicId: "gate-engineering-mathematics-graph-theory",
      text: "By the handshaking lemma, the sum of all vertex degrees in a graph equals:",
      optionA: "Twice the number of edges",
      optionB: "The number of vertices",
      optionC: "The number of edges",
      optionD: "Half the number of edges",
      correctOption: "A",
      explanation: "Each edge contributes 2 to the total degree, so the sum is twice the edge count.",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-graph-theory-q02",
      topicId: "gate-engineering-mathematics-graph-theory",
      text: "The number of edges in a complete graph on n vertices is:",
      optionA: "n minus 1",
      optionB: "n squared",
      optionC: "n times (n minus 1) over 2",
      optionD: "2 times n",
      correctOption: "C",
      explanation: "A complete graph K_n has n(n-1)/2 edges, one between every vertex pair.",
      orderIndex: 1
    },
    {
      id: "gate-engineering-mathematics-graph-theory-q03",
      topicId: "gate-engineering-mathematics-graph-theory",
      text: "A tree with n vertices has exactly how many edges?",
      optionA: "n",
      optionB: "n plus 1",
      optionC: "n minus 1",
      optionD: "2n minus 1",
      correctOption: "C",
      explanation: "A tree is connected and acyclic, which forces exactly n minus 1 edges.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-graph-theory-q04",
      topicId: "gate-engineering-mathematics-graph-theory",
      text: "A connected graph has an Euler circuit if and only if every vertex has:",
      optionA: "Degree 1",
      optionB: "Odd degree",
      optionC: "Even degree",
      optionD: "Degree 0",
      correctOption: "C",
      explanation: "An Euler circuit exists when the graph is connected and all degrees are even.",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-graph-theory-q05",
      topicId: "gate-engineering-mathematics-graph-theory",
      text: "For a connected planar graph, Euler's formula V minus E plus F equals:",
      optionA: "0",
      optionB: "1",
      optionC: "2",
      optionD: "The number of vertices",
      correctOption: "C",
      explanation: "Euler's formula for a connected planar graph states V minus E plus F equals 2.",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-graph-theory-q06",
      topicId: "gate-engineering-mathematics-graph-theory",
      text: "The number of edges in the complete bipartite graph K(3,4) is:",
      optionA: "7",
      optionB: "9",
      optionC: "16",
      optionD: "12",
      correctOption: "D",
      explanation: "K(m,n) has m times n edges, so K(3,4) has 3 times 4, which is 12.",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-graph-theory-q07",
      topicId: "gate-engineering-mathematics-graph-theory",
      text: "A cycle that visits every vertex exactly once is called a:",
      optionA: "Hamiltonian cycle",
      optionB: "Spanning tree",
      optionC: "Bipartite path",
      optionD: "Euler circuit",
      correctOption: "A",
      explanation: "A Hamiltonian cycle passes through every vertex exactly once.",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-graph-theory-q08",
      topicId: "gate-engineering-mathematics-graph-theory",
      text: "The minimum number of colors needed for a proper vertex coloring is the graph's:",
      optionA: "Degree",
      optionB: "Order",
      optionC: "Chromatic number",
      optionD: "Girth",
      correctOption: "C",
      explanation: "The chromatic number is the least number of colors for a proper coloring.",
      orderIndex: 7
    },
    {
      id: "gate-engineering-mathematics-combinatorics-q01",
      topicId: "gate-engineering-mathematics-combinatorics",
      text: "The number of ways to choose 2 items from 5 distinct items (order ignored) is:",
      optionA: "10",
      optionB: "20",
      optionC: "25",
      optionD: "120",
      correctOption: "A",
      explanation: "5 choose 2 equals 5 factorial over (2 factorial times 3 factorial), which is 10.",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-combinatorics-q02",
      topicId: "gate-engineering-mathematics-combinatorics",
      text: "The number of distinct arrangements of all letters of the word LEVEL is:",
      optionA: "120",
      optionB: "60",
      optionC: "24",
      optionD: "30",
      correctOption: "D",
      explanation: "LEVEL has 5 letters with L and E repeated twice; 5 factorial over (2 times 2) is 30.",
      orderIndex: 1
    },
    {
      id: "gate-engineering-mathematics-combinatorics-q03",
      topicId: "gate-engineering-mathematics-combinatorics",
      text: "The sum of all binomial coefficients in the expansion of (x plus y) raised to n is:",
      optionA: "n squared",
      optionB: "n factorial",
      optionC: "2 raised to n",
      optionD: "2n",
      correctOption: "C",
      explanation: "Setting x equal y equal 1 shows the coefficients sum to 2 raised to n.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-combinatorics-q04",
      topicId: "gate-engineering-mathematics-combinatorics",
      text: "The number of circular permutations of 5 distinct objects is:",
      optionA: "120",
      optionB: "24",
      optionC: "20",
      optionD: "60",
      correctOption: "B",
      explanation: "Circular permutations of n objects number (n minus 1) factorial, so 4 factorial is 24.",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-combinatorics-q05",
      topicId: "gate-engineering-mathematics-combinatorics",
      text: "The pigeonhole principle guarantees that placing 10 items into 9 boxes forces:",
      optionA: "One empty box",
      optionB: "Equal distribution",
      optionC: "At least one box with two items",
      optionD: "No box with more than one item",
      correctOption: "C",
      explanation: "With more items than boxes, at least one box must hold two or more items.",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-combinatorics-q06",
      topicId: "gate-engineering-mathematics-combinatorics",
      text: "The number of ways to arrange 3 distinct books on a shelf is:",
      optionA: "6",
      optionB: "9",
      optionC: "12",
      optionD: "3",
      correctOption: "A",
      explanation: "Arrangements of 3 distinct items equal 3 factorial, which is 6.",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-combinatorics-q07",
      topicId: "gate-engineering-mathematics-combinatorics",
      text: "The identity n choose r equals n choose (n minus r) reflects:",
      optionA: "Symmetry of combinations",
      optionB: "The product rule",
      optionC: "Circular permutation",
      optionD: "The pigeonhole principle",
      correctOption: "A",
      explanation: "Choosing r to include is the same as choosing n minus r to exclude.",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-combinatorics-q08",
      topicId: "gate-engineering-mathematics-combinatorics",
      text: "How many distinct 3-digit numbers can be formed using digits 1 to 5 without repetition?",
      optionA: "60",
      optionB: "15",
      optionC: "20",
      optionD: "125",
      correctOption: "A",
      explanation: "This is 5 permute 3, equal to 5 times 4 times 3, which is 60.",
      orderIndex: 7
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-q01",
      topicId: "gate-engineering-mathematics-numerical-methods",
      text: "The Newton-Raphson method has which order of convergence near a simple root?",
      optionA: "Quadratic",
      optionB: "Logarithmic",
      optionC: "Cubic",
      optionD: "Linear",
      correctOption: "A",
      explanation: "Newton-Raphson converges quadratically near a simple root.",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-q02",
      topicId: "gate-engineering-mathematics-numerical-methods",
      text: "The bisection method is guaranteed to converge provided the function:",
      optionA: "Is differentiable everywhere",
      optionB: "Has a zero derivative",
      optionC: "Changes sign over the bracketing interval",
      optionD: "Is a polynomial",
      correctOption: "C",
      explanation: "Bisection needs a sign change across the interval to bracket a root.",
      orderIndex: 1
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-q03",
      topicId: "gate-engineering-mathematics-numerical-methods",
      text: "Simpson's one-third rule requires the number of subintervals to be:",
      optionA: "Odd",
      optionB: "Even",
      optionC: "A power of two",
      optionD: "Prime",
      correctOption: "B",
      explanation: "Simpson's one-third rule needs an even number of subintervals.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-q04",
      topicId: "gate-engineering-mathematics-numerical-methods",
      text: "The trapezoidal rule has a truncation error of order:",
      optionA: "h cubed",
      optionB: "h",
      optionC: "h to the fourth",
      optionD: "h squared",
      correctOption: "D",
      explanation: "The trapezoidal rule has error of order h squared.",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-q05",
      topicId: "gate-engineering-mathematics-numerical-methods",
      text: "The Newton-Raphson iteration may fail when the derivative at the current point is:",
      optionA: "Negative",
      optionB: "Close to zero",
      optionC: "Large",
      optionD: "Constant",
      correctOption: "B",
      explanation: "A near-zero derivative makes the tangent step blow up, causing divergence.",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-q06",
      topicId: "gate-engineering-mathematics-numerical-methods",
      text: "A unique interpolating polynomial through n plus 1 distinct points has degree at most:",
      optionA: "n",
      optionB: "2n",
      optionC: "n minus 1",
      optionD: "n plus 1",
      correctOption: "A",
      explanation: "n plus 1 points determine a unique polynomial of degree at most n.",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-q07",
      topicId: "gate-engineering-mathematics-numerical-methods",
      text: "The secant method differs from Newton-Raphson by:",
      optionA: "Requiring the exact derivative",
      optionB: "Always halving the interval",
      optionC: "Using a fixed step size",
      optionD: "Approximating the derivative with a difference quotient",
      correctOption: "D",
      explanation: "The secant method replaces the derivative with a finite difference of two points.",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-q08",
      topicId: "gate-engineering-mathematics-numerical-methods",
      text: "Reducing the step size h in numerical integration generally lowers truncation error but raises:",
      optionA: "The order of the method",
      optionB: "The polynomial degree",
      optionC: "The number of roots",
      optionD: "Round-off error",
      correctOption: "D",
      explanation: "Smaller h cuts truncation error but accumulates more round-off error.",
      orderIndex: 7
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-q01",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      text: "A 20 percent increase followed by a 20 percent decrease results in a net:",
      optionA: "4 percent increase",
      optionB: "4 percent decrease",
      optionC: "No change",
      optionD: "20 percent decrease",
      correctOption: "B",
      explanation: "Net factor is 1.2 times 0.8, equal 0.96, which is a 4 percent decrease.",
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-q02",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      text: "The simple interest on 1000 rupees at 5 percent per year for 2 years is:",
      optionA: "150 rupees",
      optionB: "50 rupees",
      optionC: "100 rupees",
      optionD: "200 rupees",
      correctOption: "C",
      explanation: "Simple interest is principal times rate times time over 100, giving 100 rupees.",
      orderIndex: 1
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-q03",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      text: "An item bought for 80 rupees and sold for 100 rupees gives a profit percentage of:",
      optionA: "20 percent",
      optionB: "15 percent",
      optionC: "30 percent",
      optionD: "25 percent",
      correctOption: "D",
      explanation: "Profit is 20 on a cost of 80, so profit percent is 20 over 80, which is 25.",
      orderIndex: 2
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-q04",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      text: "A train travels 120 km in 2 hours. Its average speed is:",
      optionA: "60 km per hour",
      optionB: "40 km per hour",
      optionC: "50 km per hour",
      optionD: "80 km per hour",
      correctOption: "A",
      explanation: "Average speed is distance over time, 120 divided by 2, equal 60 km per hour.",
      orderIndex: 3
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-q05",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      text: "The average of 10, 20, and 30 is:",
      optionA: "15",
      optionB: "25",
      optionC: "30",
      optionD: "20",
      correctOption: "D",
      explanation: "The average is the sum 60 divided by 3, which is 20.",
      orderIndex: 4
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-q06",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      text: "Two trains move toward each other at 40 and 60 km per hour. Their relative speed is:",
      optionA: "100 km per hour",
      optionB: "50 km per hour",
      optionC: "20 km per hour",
      optionD: "10 km per hour",
      correctOption: "A",
      explanation: "For opposite directions, relative speed is the sum, 40 plus 60, which is 100.",
      orderIndex: 5
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-q07",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      text: "If the compound interest rate is 10 percent per year, 100 rupees grows in 2 years to:",
      optionA: "110 rupees",
      optionB: "120 rupees",
      optionC: "121 rupees",
      optionD: "125 rupees",
      correctOption: "C",
      explanation: "Amount is 100 times 1.1 squared, equal 121 rupees.",
      orderIndex: 6
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-q08",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      text: "What is 15 percent of 200?",
      optionA: "20",
      optionB: "15",
      optionC: "45",
      optionD: "30",
      correctOption: "D",
      explanation: "15 percent of 200 is 0.15 times 200, which equals 30.",
      orderIndex: 7
    },
    {
      id: "gate-general-aptitude-verbal-ability-q01",
      topicId: "gate-general-aptitude-verbal-ability",
      text: "Choose the word most nearly opposite in meaning to ABUNDANT:",
      optionA: "Scarce",
      optionB: "Numerous",
      optionC: "Ample",
      optionD: "Plentiful",
      correctOption: "A",
      explanation: "Abundant means plentiful, so its antonym is scarce.",
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-verbal-ability-q02",
      topicId: "gate-general-aptitude-verbal-ability",
      text: "Select the correct sentence:",
      optionA: "She do not like coffee.",
      optionB: "She does not likes coffee.",
      optionC: "She not like coffee.",
      optionD: "She does not like coffee.",
      correctOption: "D",
      explanation: "The auxiliary does pairs with the base verb like in the negative present tense.",
      orderIndex: 1
    },
    {
      id: "gate-general-aptitude-verbal-ability-q03",
      topicId: "gate-general-aptitude-verbal-ability",
      text: "Choose a synonym for METICULOUS:",
      optionA: "Vague",
      optionB: "Hasty",
      optionC: "Careful",
      optionD: "Careless",
      correctOption: "C",
      explanation: "Meticulous means showing great care and attention, so careful is a synonym.",
      orderIndex: 2
    },
    {
      id: "gate-general-aptitude-verbal-ability-q04",
      topicId: "gate-general-aptitude-verbal-ability",
      text: "The article that correctly fills the blank in the phrase a blank hour of waiting is:",
      optionA: "the, in all cases",
      optionB: "a, because hour begins with a consonant letter",
      optionC: "an, because hour begins with a vowel sound",
      optionD: "no article is needed",
      correctOption: "C",
      explanation: "Hour starts with a silent h and a vowel sound, so an is correct.",
      orderIndex: 3
    },
    {
      id: "gate-general-aptitude-verbal-ability-q05",
      topicId: "gate-general-aptitude-verbal-ability",
      text: "Complete the analogy: PEN is to WRITE as KNIFE is to:",
      optionA: "Sharp",
      optionB: "Kitchen",
      optionC: "Cut",
      optionD: "Metal",
      correctOption: "C",
      explanation: "A pen is used to write, as a knife is used to cut.",
      orderIndex: 4
    },
    {
      id: "gate-general-aptitude-verbal-ability-q06",
      topicId: "gate-general-aptitude-verbal-ability",
      text: "Choose the correctly spelled word:",
      optionA: "Definitely",
      optionB: "Definitly",
      optionC: "Defenitely",
      optionD: "Definately",
      correctOption: "A",
      explanation: "The correct spelling is definitely.",
      orderIndex: 5
    },
    {
      id: "gate-general-aptitude-verbal-ability-q07",
      topicId: "gate-general-aptitude-verbal-ability",
      text: "Select the word that correctly fills the blank: The decision will blank the outcome of the project.",
      optionA: "affect",
      optionB: "affective",
      optionC: "effect",
      optionD: "effecting",
      correctOption: "A",
      explanation: "Affect is the verb meaning to influence; effect is usually a noun here.",
      orderIndex: 6
    },
    {
      id: "gate-general-aptitude-verbal-ability-q08",
      topicId: "gate-general-aptitude-verbal-ability",
      text: "In reading comprehension, an inference is best described as:",
      optionA: "A directly stated fact",
      optionB: "A quoted sentence",
      optionC: "A conclusion drawn from given information",
      optionD: "The title of the passage",
      correctOption: "C",
      explanation: "An inference is a logical conclusion derived from, but not directly stated in, the text.",
      orderIndex: 7
    },
    {
      id: "gate-general-aptitude-data-interpretation-q01",
      topicId: "gate-general-aptitude-data-interpretation",
      text: "In a pie chart, a category representing 25 percent of the total spans how many degrees?",
      optionA: "90 degrees",
      optionB: "45 degrees",
      optionC: "120 degrees",
      optionD: "25 degrees",
      correctOption: "A",
      explanation: "25 percent of 360 degrees is 90 degrees.",
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-data-interpretation-q02",
      topicId: "gate-general-aptitude-data-interpretation",
      text: "Which chart type is best suited for showing a trend over time?",
      optionA: "Pie chart",
      optionB: "Scatter of unrelated points",
      optionC: "Line graph",
      optionD: "Venn diagram",
      correctOption: "C",
      explanation: "A line graph clearly displays how a value changes over time.",
      orderIndex: 1
    },
    {
      id: "gate-general-aptitude-data-interpretation-q03",
      topicId: "gate-general-aptitude-data-interpretation",
      text: "A value rises from 200 to 250. The percentage increase is:",
      optionA: "25 percent",
      optionB: "10 percent",
      optionC: "50 percent",
      optionD: "20 percent",
      correctOption: "A",
      explanation: "Increase is 50 over 200, which equals 25 percent.",
      orderIndex: 2
    },
    {
      id: "gate-general-aptitude-data-interpretation-q04",
      topicId: "gate-general-aptitude-data-interpretation",
      text: "If a 90 degree sector of a pie chart represents 45 units, the whole pie represents:",
      optionA: "90 units",
      optionB: "135 units",
      optionC: "360 units",
      optionD: "180 units",
      correctOption: "D",
      explanation: "90 degrees is a quarter of the pie, so the total is 4 times 45, which is 180.",
      orderIndex: 3
    },
    {
      id: "gate-general-aptitude-data-interpretation-q05",
      topicId: "gate-general-aptitude-data-interpretation",
      text: "The average of the values 40, 60, and 80 shown in a bar chart is:",
      optionA: "50",
      optionB: "80",
      optionC: "70",
      optionD: "60",
      correctOption: "D",
      explanation: "The average is the sum 180 divided by 3, which is 60.",
      orderIndex: 4
    },
    {
      id: "gate-general-aptitude-data-interpretation-q06",
      topicId: "gate-general-aptitude-data-interpretation",
      text: "Before computing from a chart, the first thing to confirm is the:",
      optionA: "Units and scale of the data",
      optionB: "Number of categories only",
      optionC: "Font of the labels",
      optionD: "Color of the bars",
      correctOption: "A",
      explanation: "Misreading units or scale, such as thousands versus units, is a common error.",
      orderIndex: 5
    },
    {
      id: "gate-general-aptitude-data-interpretation-q07",
      topicId: "gate-general-aptitude-data-interpretation",
      text: "Two categories occupy 120 and 60 degrees of a pie chart. Their value ratio is:",
      optionA: "1 to 1",
      optionB: "2 to 1",
      optionC: "3 to 1",
      optionD: "1 to 2",
      correctOption: "B",
      explanation: "Angles are proportional to values, so 120 to 60 simplifies to 2 to 1.",
      orderIndex: 6
    },
    {
      id: "gate-general-aptitude-data-interpretation-q08",
      topicId: "gate-general-aptitude-data-interpretation",
      text: "Sales were 300 in year one and 240 in year two. The percentage decrease is:",
      optionA: "25 percent",
      optionB: "30 percent",
      optionC: "20 percent",
      optionD: "60 percent",
      correctOption: "C",
      explanation: "Decrease is 60 over 300, which equals 20 percent.",
      orderIndex: 7
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-q01",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      text: "Find the next term: 2, 4, 8, 16, ?",
      optionA: "32",
      optionB: "20",
      optionC: "24",
      optionD: "30",
      correctOption: "A",
      explanation: "Each term doubles the previous one, so 16 times 2 is 32.",
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-q02",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      text: "Find the next term: 1, 4, 9, 16, ?",
      optionA: "20",
      optionB: "25",
      optionC: "24",
      optionD: "36",
      correctOption: "B",
      explanation: "These are perfect squares, so the next is 5 squared, which is 25.",
      orderIndex: 1
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-q03",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      text: "In a code, CAT is written as DBU. How is DOG written?",
      optionA: "CPF",
      optionB: "EPI",
      optionC: "EPH",
      optionD: "DPH",
      correctOption: "C",
      explanation: "Each letter shifts forward by one, so DOG becomes EPH.",
      orderIndex: 2
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-q04",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      text: "Find the next term in the Fibonacci-like series: 1, 1, 2, 3, 5, ?",
      optionA: "6",
      optionB: "7",
      optionC: "8",
      optionD: "10",
      correctOption: "C",
      explanation: "Each term is the sum of the previous two, so 3 plus 5 is 8.",
      orderIndex: 3
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-q05",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      text: "Find the next term: 2, 6, 12, 20, ?",
      optionA: "24",
      optionB: "28",
      optionC: "32",
      optionD: "30",
      correctOption: "D",
      explanation: "Terms follow n times (n plus 1); for n equal 5 that is 30.",
      orderIndex: 4
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-q06",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      text: "If all roses are flowers and some flowers fade quickly, which conclusion is valid?",
      optionA: "Some roses may fade quickly",
      optionB: "No rose is a flower",
      optionC: "All roses fade quickly",
      optionD: "All flowers are roses",
      correctOption: "A",
      explanation: "Only a possibility follows; no definite conclusion about all roses can be drawn.",
      orderIndex: 5
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-q07",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      text: "By modus tollens, if P implies Q and Q is false, then:",
      optionA: "P is true",
      optionB: "Q is true",
      optionC: "P is false",
      optionD: "Nothing follows",
      correctOption: "C",
      explanation: "If P implies Q and Q is false, then P must be false.",
      orderIndex: 6
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-q08",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      text: "Find the missing term: 3, 6, 11, 18, ?",
      optionA: "25",
      optionB: "27",
      optionC: "29",
      optionD: "24",
      correctOption: "B",
      explanation: "Differences grow as 3, 5, 7, 9, so 18 plus 9 is 27.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-q01",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      text: "The worst-case time complexity of quick sort is:",
      optionA: "O(n squared)",
      optionB: "O(n log n)",
      optionC: "O(n)",
      optionD: "O(log n)",
      correctOption: "A",
      explanation: "A poor pivot, such as on sorted input, gives quick sort O(n squared) worst case.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-q02",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      text: "Which sorting algorithm guarantees O(n log n) time in the worst case and is stable?",
      optionA: "Quick sort",
      optionB: "Selection sort",
      optionC: "Merge sort",
      optionD: "Heap sort",
      correctOption: "C",
      explanation: "Merge sort is stable and runs in O(n log n) even in the worst case.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-q03",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      text: "The lower bound for any comparison-based sorting algorithm is:",
      optionA: "Omega(n log n)",
      optionB: "Omega(log n)",
      optionC: "Omega(n)",
      optionD: "Omega(n squared)",
      correctOption: "A",
      explanation: "Comparison sorts cannot beat Omega(n log n) in the worst case.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-q04",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      text: "The recurrence T(n) equals 2 T(n over 2) plus O(n) solves to:",
      optionA: "O(n)",
      optionB: "O(n log n)",
      optionC: "O(n squared)",
      optionD: "O(log n)",
      correctOption: "B",
      explanation: "By the master theorem this merge-sort recurrence is O(n log n).",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-q05",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      text: "Insertion sort runs in O(n) time when the input array is:",
      optionA: "Reverse sorted",
      optionB: "All equal except one",
      optionC: "Randomly shuffled",
      optionD: "Already sorted",
      correctOption: "D",
      explanation: "On already-sorted input, insertion sort makes one comparison per element, O(n).",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-q06",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      text: "Which sort runs in linear time for bounded integer keys by avoiding comparisons?",
      optionA: "Quick sort",
      optionB: "Merge sort",
      optionC: "Counting sort",
      optionD: "Heap sort",
      correctOption: "C",
      explanation: "Counting sort uses key values as indices, achieving linear time for bounded keys.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-q07",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      text: "Heap sort has an auxiliary space complexity of:",
      optionA: "O(log n)",
      optionB: "O(1)",
      optionC: "O(n)",
      optionD: "O(n log n)",
      correctOption: "B",
      explanation: "Heap sort sorts in place, using only O(1) extra space.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-q08",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      text: "A sorting algorithm is stable if it:",
      optionA: "Always runs in O(n log n)",
      optionB: "Never recurses",
      optionC: "Uses no extra memory",
      optionD: "Preserves the relative order of equal keys",
      correctOption: "D",
      explanation: "Stability means equal keys keep their original relative order after sorting.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-q01",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      text: "Dijkstra's shortest-path algorithm is an example of which paradigm?",
      optionA: "Backtracking",
      optionB: "Divide and conquer",
      optionC: "Greedy",
      optionD: "Brute force",
      correctOption: "C",
      explanation: "Dijkstra greedily selects the nearest unvisited vertex at each step.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-q02",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      text: "Dynamic programming is preferred over plain recursion mainly because it:",
      optionA: "Avoids all recursion",
      optionB: "Uses less code",
      optionC: "Requires no base case",
      optionD: "Stores results of overlapping subproblems",
      correctOption: "D",
      explanation: "DP memoizes overlapping subproblems so each is solved only once.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-q03",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      text: "The 0/1 knapsack problem with n items and capacity W is solved by DP in time:",
      optionA: "O(n)",
      optionB: "O(2 raised to n)",
      optionC: "O(n log W)",
      optionD: "O(n W)",
      correctOption: "D",
      explanation: "Standard DP fills an n by W table, giving O(n W) pseudo-polynomial time.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-q04",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      text: "Huffman coding builds optimal prefix codes using which strategy?",
      optionA: "Dynamic programming",
      optionB: "Linear programming",
      optionC: "Greedy",
      optionD: "Exhaustive search",
      correctOption: "C",
      explanation: "Huffman greedily merges the two lowest-frequency nodes at each step.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-q05",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      text: "Both greedy and dynamic programming require the problem to have:",
      optionA: "A cyclic structure",
      optionB: "Negative weights",
      optionC: "Optimal substructure",
      optionD: "A unique solution",
      correctOption: "C",
      explanation: "Optimal substructure, where optimal solutions build from optimal subsolutions, is shared.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-q06",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      text: "The Floyd-Warshall algorithm computes all-pairs shortest paths using:",
      optionA: "Dynamic programming",
      optionB: "A greedy heap",
      optionC: "Depth-first search",
      optionD: "A union-find structure",
      correctOption: "A",
      explanation: "Floyd-Warshall is a DP that relaxes paths through each intermediate vertex.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-q07",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      text: "Which problem is typically solved with dynamic programming rather than a greedy method?",
      optionA: "Minimum spanning tree",
      optionB: "Longest common subsequence",
      optionC: "Single-source shortest path with non-negative weights",
      optionD: "Optimal prefix coding",
      correctOption: "B",
      explanation: "Longest common subsequence needs DP over overlapping subproblems.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-q08",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      text: "The key difference of a greedy method from dynamic programming is that greedy:",
      optionA: "Always uses a table",
      optionB: "Commits to local choices without reconsidering",
      optionC: "Explores all subproblem combinations",
      optionD: "Cannot find optimal solutions ever",
      correctOption: "B",
      explanation: "Greedy makes an irrevocable locally optimal choice at each step.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-operating-systems-q01",
      topicId: "gate-core-cs-operating-systems",
      text: "Which CPU scheduling algorithm gives the minimum average waiting time?",
      optionA: "First Come First Served",
      optionB: "Shortest Job First",
      optionC: "Priority with aging",
      optionD: "Round Robin",
      correctOption: "B",
      explanation: "Shortest Job First is provably optimal for minimizing average waiting time.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-operating-systems-q02",
      topicId: "gate-core-cs-operating-systems",
      text: "Which is NOT one of the four necessary conditions for deadlock?",
      optionA: "Mutual exclusion",
      optionB: "Hold and wait",
      optionC: "Preemption allowed",
      optionD: "Circular wait",
      correctOption: "C",
      explanation: "Deadlock requires no preemption; allowing preemption breaks a condition.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-operating-systems-q03",
      topicId: "gate-core-cs-operating-systems",
      text: "A race condition arises when:",
      optionA: "Memory is fully paged",
      optionB: "A process runs alone",
      optionC: "The output depends on uncontrolled thread interleaving",
      optionD: "The CPU is idle",
      correctOption: "C",
      explanation: "A race condition occurs when the result depends on the timing of concurrent accesses.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-operating-systems-q04",
      topicId: "gate-core-cs-operating-systems",
      text: "Paging primarily eliminates which problem?",
      optionA: "Internal fragmentation",
      optionB: "External fragmentation",
      optionC: "Deadlock",
      optionD: "Race conditions",
      correctOption: "B",
      explanation: "Fixed-size pages remove external fragmentation, though some internal may remain.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-operating-systems-q05",
      topicId: "gate-core-cs-operating-systems",
      text: "The Round Robin scheduling algorithm is best described as:",
      optionA: "Non-preemptive and priority based",
      optionB: "Based on remaining burst time",
      optionC: "Preemptive with fixed time slices",
      optionD: "Optimal for average waiting time",
      correctOption: "C",
      explanation: "Round Robin preempts each process after a fixed time quantum, ensuring fairness.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-operating-systems-q06",
      topicId: "gate-core-cs-operating-systems",
      text: "The turnaround time of a process is computed as:",
      optionA: "Burst time minus waiting time",
      optionB: "Arrival time minus burst time",
      optionC: "Waiting time plus arrival time",
      optionD: "Completion time minus arrival time",
      correctOption: "D",
      explanation: "Turnaround time equals completion time minus arrival time.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-operating-systems-q07",
      topicId: "gate-core-cs-operating-systems",
      text: "The TLB is used to speed up:",
      optionA: "Disk scheduling",
      optionB: "Process creation",
      optionC: "Interrupt handling",
      optionD: "Virtual-to-physical address translation",
      correctOption: "D",
      explanation: "The Translation Lookaside Buffer caches recent page-table entries for fast translation.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-operating-systems-q08",
      topicId: "gate-core-cs-operating-systems",
      text: "A semaphore is primarily used to enforce:",
      optionA: "Memory allocation",
      optionB: "Mutual exclusion and synchronization",
      optionC: "Page replacement",
      optionD: "Disk caching",
      correctOption: "B",
      explanation: "Semaphores coordinate access to critical sections, enforcing mutual exclusion.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-dbms-sql-q01",
      topicId: "gate-core-cs-dbms-sql",
      text: "Which normal form removes transitive dependency on the primary key?",
      optionA: "First normal form",
      optionB: "Second normal form",
      optionC: "Third normal form",
      optionD: "Zero normal form",
      correctOption: "C",
      explanation: "Third normal form eliminates transitive dependencies on the key.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-dbms-sql-q02",
      topicId: "gate-core-cs-dbms-sql",
      text: "In SQL, which clause filters rows after aggregation by GROUP BY?",
      optionA: "WHERE",
      optionB: "HAVING",
      optionC: "ORDER BY",
      optionD: "SELECT",
      correctOption: "B",
      explanation: "HAVING filters grouped results, whereas WHERE filters rows before grouping.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-dbms-sql-q03",
      topicId: "gate-core-cs-dbms-sql",
      text: "A foreign key in a relation is used to:",
      optionA: "Reference a primary key in another relation",
      optionB: "Store aggregate values",
      optionC: "Uniquely identify each row by itself",
      optionD: "Index the table physically",
      correctOption: "A",
      explanation: "A foreign key references another relation's primary key to enforce integrity.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-dbms-sql-q04",
      topicId: "gate-core-cs-dbms-sql",
      text: "The ACID property ensuring a transaction fully completes or has no effect is:",
      optionA: "Consistency",
      optionB: "Isolation",
      optionC: "Durability",
      optionD: "Atomicity",
      correctOption: "D",
      explanation: "Atomicity guarantees all-or-nothing execution of a transaction.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-dbms-sql-q05",
      topicId: "gate-core-cs-dbms-sql",
      text: "A relation is in BCNF when, for every functional dependency, the determinant is:",
      optionA: "An aggregate",
      optionB: "A foreign key",
      optionC: "A non-prime attribute",
      optionD: "A candidate key",
      correctOption: "D",
      explanation: "In BCNF every determinant must be a candidate key.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-dbms-sql-q06",
      topicId: "gate-core-cs-dbms-sql",
      text: "Which SQL operation combines rows from two tables on a matching condition?",
      optionA: "DISTINCT",
      optionB: "GROUP BY",
      optionC: "JOIN",
      optionD: "UNION",
      correctOption: "C",
      explanation: "A JOIN merges rows from tables that satisfy the join condition.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-dbms-sql-q07",
      topicId: "gate-core-cs-dbms-sql",
      text: "A functional dependency X to Y means:",
      optionA: "Y uniquely determines X",
      optionB: "X uniquely determines Y",
      optionC: "X and Y are independent",
      optionD: "X equals Y",
      correctOption: "B",
      explanation: "X to Y means each value of X determines exactly one value of Y.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-dbms-sql-q08",
      topicId: "gate-core-cs-dbms-sql",
      text: "A minimal attribute set that uniquely identifies a tuple is a:",
      optionA: "Foreign key",
      optionB: "Candidate key",
      optionC: "Composite value",
      optionD: "Secondary index",
      correctOption: "B",
      explanation: "A candidate key minimally and uniquely identifies each tuple.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-computer-networks-q01",
      topicId: "gate-core-cs-computer-networks",
      text: "Which transport-layer protocol is connection-oriented and reliable?",
      optionA: "IP",
      optionB: "TCP",
      optionC: "UDP",
      optionD: "ARP",
      correctOption: "B",
      explanation: "TCP provides connection-oriented, reliable, ordered delivery.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-computer-networks-q02",
      topicId: "gate-core-cs-computer-networks",
      text: "The number of usable host addresses in a /24 IPv4 network is:",
      optionA: "256",
      optionB: "254",
      optionC: "255",
      optionD: "128",
      correctOption: "B",
      explanation: "A /24 has 2 to the 8 addresses minus 2 reserved, giving 254 usable hosts.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-computer-networks-q03",
      topicId: "gate-core-cs-computer-networks",
      text: "Which protocol maps an IP address to a MAC address?",
      optionA: "ARP",
      optionB: "DNS",
      optionC: "HTTP",
      optionD: "ICMP",
      correctOption: "A",
      explanation: "ARP resolves an IP address to its corresponding MAC address.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-computer-networks-q04",
      topicId: "gate-core-cs-computer-networks",
      text: "At which OSI layer does the IP protocol operate?",
      optionA: "Transport",
      optionB: "Network",
      optionC: "Data link",
      optionD: "Application",
      correctOption: "B",
      explanation: "IP operates at the network layer, handling routing of packets.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-computer-networks-q05",
      topicId: "gate-core-cs-computer-networks",
      text: "The data unit at the data link layer is called a:",
      optionA: "Segment",
      optionB: "Packet",
      optionC: "Frame",
      optionD: "Bit",
      correctOption: "C",
      explanation: "The data link layer encapsulates data into frames.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-computer-networks-q06",
      topicId: "gate-core-cs-computer-networks",
      text: "Which protocol resolves human-readable domain names to IP addresses?",
      optionA: "DNS",
      optionB: "TCP",
      optionC: "ARP",
      optionD: "FTP",
      correctOption: "A",
      explanation: "DNS translates domain names into IP addresses.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-computer-networks-q07",
      topicId: "gate-core-cs-computer-networks",
      text: "TCP achieves flow control primarily through:",
      optionA: "A sliding window",
      optionB: "Broadcast storms",
      optionC: "Subnet masks",
      optionD: "MAC filtering",
      correctOption: "A",
      explanation: "TCP uses a sliding window to control how much unacknowledged data is in flight.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-computer-networks-q08",
      topicId: "gate-core-cs-computer-networks",
      text: "Compared to TCP, UDP is:",
      optionA: "Connection-oriented and reliable",
      optionB: "Connectionless and faster",
      optionC: "Always encrypted",
      optionD: "A network-layer protocol",
      correctOption: "B",
      explanation: "UDP is connectionless with low overhead, trading reliability for speed.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-theory-of-computation-q01",
      topicId: "gate-core-cs-theory-of-computation",
      text: "Which machine recognizes exactly the class of regular languages?",
      optionA: "Turing machine",
      optionB: "Finite automaton",
      optionC: "Pushdown automaton",
      optionD: "Linear bounded automaton",
      correctOption: "B",
      explanation: "Finite automata, both DFA and NFA, recognize exactly the regular languages.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-theory-of-computation-q02",
      topicId: "gate-core-cs-theory-of-computation",
      text: "The language a raised to n followed by b raised to n is:",
      optionA: "Regular",
      optionB: "Context-free but not regular",
      optionC: "Finite",
      optionD: "Not a language",
      correctOption: "B",
      explanation: "Matching counts of a and b is context-free, but the pumping lemma shows it is not regular.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-theory-of-computation-q03",
      topicId: "gate-core-cs-theory-of-computation",
      text: "A pushdown automaton differs from a finite automaton by having a:",
      optionA: "Stack",
      optionB: "Two-way tape",
      optionC: "Queue",
      optionD: "Random-access memory",
      correctOption: "A",
      explanation: "A PDA augments a finite automaton with a stack to recognize context-free languages.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-theory-of-computation-q04",
      topicId: "gate-core-cs-theory-of-computation",
      text: "The pumping lemma is most commonly used to prove that a language is:",
      optionA: "Decidable",
      optionB: "Not regular",
      optionC: "Context-free",
      optionD: "Finite",
      correctOption: "B",
      explanation: "The pumping lemma provides a contradiction tool to show non-regularity.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-theory-of-computation-q05",
      topicId: "gate-core-cs-theory-of-computation",
      text: "A deterministic finite automaton and a nondeterministic finite automaton:",
      optionA: "Recognize different language classes",
      optionB: "Both require a stack",
      optionC: "Cannot be converted to each other",
      optionD: "Recognize the same class of languages",
      correctOption: "D",
      explanation: "Every NFA has an equivalent DFA, so both accept exactly the regular languages.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-theory-of-computation-q06",
      topicId: "gate-core-cs-theory-of-computation",
      text: "The Halting Problem is an example of a problem that is:",
      optionA: "Decidable",
      optionB: "Regular",
      optionC: "Undecidable",
      optionD: "Context-free",
      correctOption: "C",
      explanation: "The Halting Problem is undecidable; no algorithm decides it for all inputs.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-theory-of-computation-q07",
      topicId: "gate-core-cs-theory-of-computation",
      text: "Recursively enumerable languages are recognized by a:",
      optionA: "Finite automaton",
      optionB: "Pushdown automaton",
      optionC: "Turing machine",
      optionD: "Regular expression",
      correctOption: "C",
      explanation: "Turing machines recognize the recursively enumerable languages.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-theory-of-computation-q08",
      topicId: "gate-core-cs-theory-of-computation",
      text: "Context-free languages are generated by a:",
      optionA: "Regular expression",
      optionB: "Context-free grammar",
      optionC: "Finite automaton",
      optionD: "Truth table",
      correctOption: "B",
      explanation: "A context-free grammar generates exactly the context-free languages.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-compiler-design-q01",
      topicId: "gate-core-cs-compiler-design",
      text: "Which compiler phase produces tokens from the source program?",
      optionA: "Syntax analysis",
      optionB: "Code generation",
      optionC: "Semantic analysis",
      optionD: "Lexical analysis",
      correctOption: "D",
      explanation: "Lexical analysis scans characters and emits tokens.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-compiler-design-q02",
      topicId: "gate-core-cs-compiler-design",
      text: "An LL(1) parser performs which type of parsing?",
      optionA: "Bottom-up",
      optionB: "Right-to-left",
      optionC: "Top-down with one lookahead",
      optionD: "Random",
      correctOption: "C",
      explanation: "LL(1) is top-down, reading left-to-right with one symbol of lookahead.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-compiler-design-q03",
      topicId: "gate-core-cs-compiler-design",
      text: "The output of the syntax analysis phase is typically a:",
      optionA: "Machine code",
      optionB: "Symbol table only",
      optionC: "Token stream",
      optionD: "Parse tree",
      correctOption: "D",
      explanation: "Syntax analysis builds a parse tree reflecting the grammar structure.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-compiler-design-q04",
      topicId: "gate-core-cs-compiler-design",
      text: "Before LL(1) parsing, a grammar must typically be free of:",
      optionA: "Terminals",
      optionB: "Start symbols",
      optionC: "Productions",
      optionD: "Left recursion",
      correctOption: "D",
      explanation: "LL(1) parsing requires removing left recursion, often with left factoring too.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-compiler-design-q05",
      topicId: "gate-core-cs-compiler-design",
      text: "Which structure stores identifier attributes across compiler phases?",
      optionA: "Symbol table",
      optionB: "Register file",
      optionC: "Parse tree",
      optionD: "Activation record",
      correctOption: "A",
      explanation: "The symbol table records identifier names, types and scope across phases.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-compiler-design-q06",
      topicId: "gate-core-cs-compiler-design",
      text: "Three-address code is an example of:",
      optionA: "Source code",
      optionB: "Intermediate code",
      optionC: "Target machine code",
      optionD: "A token",
      correctOption: "B",
      explanation: "Three-address code is a common intermediate representation.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-compiler-design-q07",
      topicId: "gate-core-cs-compiler-design",
      text: "Compared with LL parsers, LR parsers generally handle:",
      optionA: "A smaller class of grammars",
      optionB: "Only regular grammars",
      optionC: "A larger class of grammars",
      optionD: "No grammars at all",
      correctOption: "C",
      explanation: "Bottom-up LR parsers accept a broader class of grammars than LL parsers.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-compiler-design-q08",
      topicId: "gate-core-cs-compiler-design",
      text: "Syntax-directed translation attaches semantic rules to:",
      optionA: "Grammar productions",
      optionB: "Tokens",
      optionC: "Registers",
      optionD: "Machine instructions",
      correctOption: "A",
      explanation: "Syntax-directed translation associates semantic actions with grammar productions.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-computer-organization-architecture-q01",
      topicId: "gate-core-cs-computer-organization-architecture",
      text: "Which memory is the fastest in the typical hierarchy?",
      optionA: "Main memory",
      optionB: "Registers",
      optionC: "Hard disk",
      optionD: "Cache",
      correctOption: "B",
      explanation: "Registers sit closest to the CPU and are the fastest storage.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-computer-organization-architecture-q02",
      topicId: "gate-core-cs-computer-organization-architecture",
      text: "An ideal k-stage instruction pipeline offers a maximum speedup of about:",
      optionA: "k times",
      optionB: "log k times",
      optionC: "k squared times",
      optionD: "2 times",
      correctOption: "A",
      explanation: "An ideal k-stage pipeline can approach a k-fold speedup.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-computer-organization-architecture-q03",
      topicId: "gate-core-cs-computer-organization-architecture",
      text: "In direct-mapped cache, a memory block maps to:",
      optionA: "Any cache line",
      optionB: "Two specific lines",
      optionC: "Any line within one set",
      optionD: "Exactly one fixed cache line",
      correctOption: "D",
      explanation: "Direct mapping sends each block to one predetermined cache line.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-computer-organization-architecture-q04",
      topicId: "gate-core-cs-computer-organization-architecture",
      text: "Which is a type of pipeline hazard?",
      optionA: "Cache hazard",
      optionB: "Address hazard",
      optionC: "Register hazard",
      optionD: "Data hazard",
      correctOption: "D",
      explanation: "Data, control, and structural hazards are the three pipeline hazard types.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-computer-organization-architecture-q05",
      topicId: "gate-core-cs-computer-organization-architecture",
      text: "If the cache hit ratio is 0.9 with cache time 10 ns and memory time 100 ns, average access time is:",
      optionA: "90 ns",
      optionB: "10 ns",
      optionC: "100 ns",
      optionD: "19 ns",
      correctOption: "D",
      explanation: "Average is 0.9 times 10 plus 0.1 times 100, equal 9 plus 10, which is 19 ns.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-computer-organization-architecture-q06",
      topicId: "gate-core-cs-computer-organization-architecture",
      text: "The metric CPI stands for:",
      optionA: "Cache per instruction",
      optionB: "Clocks per input",
      optionC: "Calls per interrupt",
      optionD: "Cycles per instruction",
      correctOption: "D",
      explanation: "CPI is cycles per instruction, a key performance measure.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-computer-organization-architecture-q07",
      topicId: "gate-core-cs-computer-organization-architecture",
      text: "Which is the correct order of basic instruction-cycle steps?",
      optionA: "Fetch, decode, execute, write-back",
      optionB: "Write-back, execute, decode, fetch",
      optionC: "Decode, fetch, write-back, execute",
      optionD: "Execute, fetch, decode, write-back",
      correctOption: "A",
      explanation: "The cycle proceeds fetch, decode, execute, then write-back.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-computer-organization-architecture-q08",
      topicId: "gate-core-cs-computer-organization-architecture",
      text: "Fully associative cache mapping allows a block to be placed in:",
      optionA: "Exactly one line",
      optionB: "Any cache line",
      optionC: "Only even-numbered lines",
      optionD: "Only the first line",
      correctOption: "B",
      explanation: "Fully associative mapping permits a block in any cache line.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-digital-logic-q01",
      topicId: "gate-core-cs-digital-logic",
      text: "Which gates are functionally complete (universal)?",
      optionA: "AND and OR",
      optionB: "XOR only",
      optionC: "NAND and NOR",
      optionD: "Buffer only",
      correctOption: "C",
      explanation: "NAND and NOR are universal; any circuit can be built from either alone.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-digital-logic-q02",
      topicId: "gate-core-cs-digital-logic",
      text: "By De Morgan's law, NOT (A AND B) equals:",
      optionA: "NOT A OR NOT B",
      optionB: "A OR B",
      optionC: "NOT A AND NOT B",
      optionD: "A AND B",
      correctOption: "A",
      explanation: "De Morgan's law gives NOT (A AND B) equals NOT A OR NOT B.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-digital-logic-q03",
      topicId: "gate-core-cs-digital-logic",
      text: "The two's complement of a binary number is obtained by:",
      optionA: "Taking the one's complement and adding 1",
      optionB: "Reversing the bit order",
      optionC: "Adding 1 to the number",
      optionD: "Subtracting 1 from the number",
      correctOption: "A",
      explanation: "Two's complement is the one's complement plus one.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-digital-logic-q04",
      topicId: "gate-core-cs-digital-logic",
      text: "An XOR gate outputs 1 when its inputs are:",
      optionA: "Both 1",
      optionB: "Both 0",
      optionC: "Equal",
      optionD: "Different",
      correctOption: "D",
      explanation: "XOR outputs 1 exactly when the two inputs differ.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-digital-logic-q05",
      topicId: "gate-core-cs-digital-logic",
      text: "Which circuit type depends on stored state and a clock?",
      optionA: "Combinational",
      optionB: "A multiplexer",
      optionC: "Sequential",
      optionD: "A single AND gate",
      correctOption: "C",
      explanation: "Sequential circuits depend on current inputs and stored state via a clock.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-digital-logic-q06",
      topicId: "gate-core-cs-digital-logic",
      text: "The Boolean expression A plus A prime simplifies to:",
      optionA: "A",
      optionB: "0",
      optionC: "1",
      optionD: "A prime",
      correctOption: "C",
      explanation: "A variable OR its complement always equals 1.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-digital-logic-q07",
      topicId: "gate-core-cs-digital-logic",
      text: "A device that selects one of several inputs based on select lines is a:",
      optionA: "Decoder",
      optionB: "Counter",
      optionC: "Flip-flop",
      optionD: "Multiplexer",
      correctOption: "D",
      explanation: "A multiplexer routes one selected input to the output based on select lines.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-digital-logic-q08",
      topicId: "gate-core-cs-digital-logic",
      text: "Karnaugh maps are used primarily to:",
      optionA: "Minimize Boolean expressions",
      optionB: "Store sequential state",
      optionC: "Generate random logic",
      optionD: "Increase the number of gates",
      correctOption: "A",
      explanation: "K-maps simplify Boolean functions to reduce gate count.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-programming-recursion-c-q01",
      topicId: "gate-core-cs-programming-recursion-c",
      text: "In C, the expression a[i] is equivalent to:",
      optionA: "a plus i",
      optionB: "i plus a[0]",
      optionC: "the address of a",
      optionD: "value at the address a plus i",
      correctOption: "D",
      explanation: "a[i] is defined as the value at the address a plus i, that is the dereference of (a plus i).",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-programming-recursion-c-q02",
      topicId: "gate-core-cs-programming-recursion-c",
      text: "Every correct recursive function must include a:",
      optionA: "Base case",
      optionB: "Loop",
      optionC: "Global variable",
      optionD: "Pointer argument",
      correctOption: "A",
      explanation: "A base case stops recursion; without it the calls never terminate.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-programming-recursion-c-q03",
      topicId: "gate-core-cs-programming-recursion-c",
      text: "By default, C passes function arguments:",
      optionA: "By reference",
      optionB: "By name",
      optionC: "By value",
      optionD: "By pointer automatically",
      correctOption: "C",
      explanation: "C uses call by value; to modify a caller's variable you pass its address.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-programming-recursion-c-q04",
      topicId: "gate-core-cs-programming-recursion-c",
      text: "The recursive function fact with fact(0) equal 1 returns, for fact(4):",
      optionA: "10",
      optionB: "16",
      optionC: "12",
      optionD: "24",
      correctOption: "D",
      explanation: "fact(4) is 4 times 3 times 2 times 1, which equals 24.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-programming-recursion-c-q05",
      topicId: "gate-core-cs-programming-recursion-c",
      text: "The C operator sizeof returns:",
      optionA: "The value stored in a variable",
      optionB: "The number of array elements always",
      optionC: "The address of a variable",
      optionD: "The number of bytes a type or variable occupies",
      correctOption: "D",
      explanation: "sizeof yields the size in bytes of its operand type or variable.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-programming-recursion-c-q06",
      topicId: "gate-core-cs-programming-recursion-c",
      text: "A missing or incorrect base case in recursion most commonly causes:",
      optionA: "Stack overflow",
      optionB: "A syntax warning",
      optionC: "A compile error",
      optionD: "Faster execution",
      correctOption: "A",
      explanation: "Without a reachable base case, recursion grows the stack until it overflows.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-programming-recursion-c-q07",
      topicId: "gate-core-cs-programming-recursion-c",
      text: "In C, the unary operator that gives the address of a variable x is:",
      optionA: "Star x",
      optionB: "Hash x",
      optionC: "Percent x",
      optionD: "Ampersand x",
      correctOption: "D",
      explanation: "The ampersand operator yields the address of its operand.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-programming-recursion-c-q08",
      topicId: "gate-core-cs-programming-recursion-c",
      text: "Integer division of 7 by 2 in C evaluates to:",
      optionA: "4",
      optionB: "3",
      optionC: "3.5",
      optionD: "2",
      correctOption: "B",
      explanation: "Integer division truncates toward zero, so 7 divided by 2 is 3.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-software-engineering-q01",
      topicId: "gate-core-cs-software-engineering",
      text: "Which software process model is sequential with no overlap between phases?",
      optionA: "Waterfall model",
      optionB: "Spiral model",
      optionC: "Agile model",
      optionD: "Iterative model",
      correctOption: "A",
      explanation: "The waterfall model proceeds strictly phase by phase with no overlap.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-software-engineering-q02",
      topicId: "gate-core-cs-software-engineering",
      text: "Cyclomatic complexity primarily measures:",
      optionA: "Lines of code in a module",
      optionB: "The number of independent paths through a program",
      optionC: "The runtime of a program",
      optionD: "The number of variables used",
      correctOption: "B",
      explanation: "Cyclomatic complexity counts the linearly independent paths in the control-flow graph.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-software-engineering-q03",
      topicId: "gate-core-cs-software-engineering",
      text: "Testing that checks behaviour against the specification without viewing the code is called:",
      optionA: "White-box testing",
      optionB: "Black-box testing",
      optionC: "Unit testing",
      optionD: "Path testing",
      correctOption: "B",
      explanation: "Black-box testing validates outputs against requirements, ignoring internal structure.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-software-engineering-q04",
      topicId: "gate-core-cs-software-engineering",
      text: "A good modular design aims for:",
      optionA: "Low coupling and high cohesion",
      optionB: "High coupling and high cohesion",
      optionC: "Low coupling and low cohesion",
      optionD: "High coupling and low cohesion",
      correctOption: "A",
      explanation: "Low coupling plus high cohesion yields maintainable, independent modules.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-software-engineering-q05",
      topicId: "gate-core-cs-software-engineering",
      text: "The COCOMO model estimates project effort mainly from:",
      optionA: "Number of test cases",
      optionB: "Thousands of lines of code",
      optionC: "Number of developers",
      optionD: "Number of bugs found",
      correctOption: "B",
      explanation: "COCOMO derives effort from estimated KLOC (thousands of lines of code).",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-software-engineering-q06",
      topicId: "gate-core-cs-software-engineering",
      text: "For a control-flow graph with 9 edges, 7 nodes and 1 component, V(G) = E - N + 2P equals:",
      optionA: "2",
      optionB: "3",
      optionC: "5",
      optionD: "4",
      correctOption: "D",
      explanation: "V(G) = 9 - 7 + 2(1) = 4.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-software-engineering-q07",
      topicId: "gate-core-cs-software-engineering",
      text: "Which process model is explicitly risk-driven and uses prototypes in each loop?",
      optionA: "Waterfall model",
      optionB: "Spiral model",
      optionC: "Big-bang model",
      optionD: "V model",
      correctOption: "B",
      explanation: "The spiral model addresses risk through repeated prototyping cycles.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-software-engineering-q08",
      topicId: "gate-core-cs-software-engineering",
      text: "Which testing level is typically performed last, by or for the end user?",
      optionA: "Unit testing",
      optionB: "Acceptance testing",
      optionC: "System testing",
      optionD: "Integration testing",
      correctOption: "B",
      explanation: "Acceptance testing confirms the system meets user needs and is the final stage.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-computer-graphics-basics-q01",
      topicId: "gate-core-cs-computer-graphics-basics",
      text: "Bresenham's line drawing algorithm is preferred because it:",
      optionA: "Requires floating-point division",
      optionB: "Uses only integer arithmetic",
      optionC: "Works only for vertical lines",
      optionD: "Needs trigonometric functions",
      correctOption: "B",
      explanation: "Bresenham's algorithm draws lines using integer addition and a decision parameter.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-computer-graphics-basics-q02",
      topicId: "gate-core-cs-computer-graphics-basics",
      text: "In raster graphics, the smallest addressable picture element is a:",
      optionA: "Vector",
      optionB: "Polygon",
      optionC: "Vertex",
      optionD: "Pixel",
      correctOption: "D",
      explanation: "A pixel is the smallest addressable element in a raster display.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-computer-graphics-basics-q03",
      topicId: "gate-core-cs-computer-graphics-basics",
      text: "Homogeneous coordinates are used in 2D graphics mainly to:",
      optionA: "Reduce memory usage",
      optionB: "Represent translation as matrix multiplication",
      optionC: "Avoid using matrices",
      optionD: "Increase color depth",
      correctOption: "B",
      explanation: "Homogeneous coordinates let translation be expressed as a single matrix multiply.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-computer-graphics-basics-q04",
      topicId: "gate-core-cs-computer-graphics-basics",
      text: "The Cohen-Sutherland algorithm is used for:",
      optionA: "Polygon filling",
      optionB: "Line clipping",
      optionC: "Curve smoothing",
      optionD: "Shading",
      correctOption: "B",
      explanation: "Cohen-Sutherland clips line segments against a rectangular window using region codes.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-computer-graphics-basics-q05",
      topicId: "gate-core-cs-computer-graphics-basics",
      text: "The midpoint circle drawing algorithm exploits how many axes of symmetry?",
      optionA: "Two-way symmetry",
      optionB: "Four-way symmetry",
      optionC: "Eight-way symmetry",
      optionD: "No symmetry",
      correctOption: "C",
      explanation: "The midpoint circle algorithm uses eight-way symmetry to plot all octants from one.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-computer-graphics-basics-q06",
      topicId: "gate-core-cs-computer-graphics-basics",
      text: "Which transformation changes the size of an object?",
      optionA: "Translation",
      optionB: "Rotation",
      optionC: "Reflection",
      optionD: "Scaling",
      correctOption: "D",
      explanation: "Scaling multiplies coordinates by scale factors, altering object size.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-computer-graphics-basics-q07",
      topicId: "gate-core-cs-computer-graphics-basics",
      text: "The Sutherland-Hodgman algorithm clips a:",
      optionA: "Single point",
      optionB: "Polygon against a window",
      optionC: "Circle against a line",
      optionD: "Text string",
      correctOption: "B",
      explanation: "Sutherland-Hodgman clips a polygon against each edge of the clipping window.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-computer-graphics-basics-q08",
      topicId: "gate-core-cs-computer-graphics-basics",
      text: "The frame buffer in a raster system stores:",
      optionA: "The CPU instruction queue",
      optionB: "Intensity or color values for each pixel",
      optionC: "Only vector endpoints",
      optionD: "Keyboard input events",
      correctOption: "B",
      explanation: "The frame buffer holds the intensity or color value of every pixel on the screen.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-artificial-intelligence-ml-basics-q01",
      topicId: "gate-core-cs-artificial-intelligence-ml-basics",
      text: "A heuristic is admissible if it:",
      optionA: "Always overestimates the cost to the goal",
      optionB: "Never overestimates the cost to the goal",
      optionC: "Equals the number of nodes expanded",
      optionD: "Is always zero",
      correctOption: "B",
      explanation: "An admissible heuristic never overestimates the true cost, keeping A* optimal.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-artificial-intelligence-ml-basics-q02",
      topicId: "gate-core-cs-artificial-intelligence-ml-basics",
      text: "Learning from labelled input-output pairs is called:",
      optionA: "Supervised learning",
      optionB: "Reinforcement learning",
      optionC: "Unsupervised learning",
      optionD: "Clustering",
      correctOption: "A",
      explanation: "Supervised learning trains a model on labelled examples.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-artificial-intelligence-ml-basics-q03",
      topicId: "gate-core-cs-artificial-intelligence-ml-basics",
      text: "In the A* evaluation function f(n) = g(n) + h(n), the term g(n) is:",
      optionA: "The estimated cost from n to the goal",
      optionB: "A random value",
      optionC: "The cost from the start to node n",
      optionD: "The branching factor",
      correctOption: "C",
      explanation: "g(n) is the actual cost of the path from the start node to n.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-artificial-intelligence-ml-basics-q04",
      topicId: "gate-core-cs-artificial-intelligence-ml-basics",
      text: "A model that performs well on training data but poorly on unseen data is said to be:",
      optionA: "Overfitting",
      optionB: "Regularized",
      optionC: "Unbiased",
      optionD: "Underfitting",
      correctOption: "A",
      explanation: "Overfitting means high variance: the model memorizes training data and generalizes poorly.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-artificial-intelligence-ml-basics-q05",
      topicId: "gate-core-cs-artificial-intelligence-ml-basics",
      text: "Which search strategy is complete and optimal for a tree with uniform step costs?",
      optionA: "Random walk",
      optionB: "Depth-first search",
      optionC: "Greedy best-first search",
      optionD: "Breadth-first search",
      correctOption: "D",
      explanation: "BFS is complete and optimal when every step has the same cost.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-artificial-intelligence-ml-basics-q06",
      topicId: "gate-core-cs-artificial-intelligence-ml-basics",
      text: "Grouping unlabelled data into clusters by similarity is a task in:",
      optionA: "Supervised learning",
      optionB: "Regression",
      optionC: "Reinforcement learning",
      optionD: "Unsupervised learning",
      correctOption: "D",
      explanation: "Clustering is an unsupervised task that finds structure without labels.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-artificial-intelligence-ml-basics-q07",
      topicId: "gate-core-cs-artificial-intelligence-ml-basics",
      text: "A perceptron computes its output by applying an activation function to:",
      optionA: "A random input",
      optionB: "The maximum of its inputs",
      optionC: "The median of its inputs",
      optionD: "A weighted sum of inputs",
      correctOption: "D",
      explanation: "A neuron applies an activation function to the weighted sum of its inputs.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-artificial-intelligence-ml-basics-q08",
      topicId: "gate-core-cs-artificial-intelligence-ml-basics",
      text: "Learning by maximizing a reward through trial and error is called:",
      optionA: "Supervised learning",
      optionB: "Feature scaling",
      optionC: "Dimensionality reduction",
      optionD: "Reinforcement learning",
      correctOption: "D",
      explanation: "Reinforcement learning optimizes behaviour from reward signals via trial and error.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-information-security-cryptography-q01",
      topicId: "gate-core-cs-information-security-cryptography",
      text: "Which set forms the classic CIA triad of information security?",
      optionA: "Control, Integrity, Access",
      optionB: "Confidentiality, Identity, Authorization",
      optionC: "Cipher, Identity, Authentication",
      optionD: "Confidentiality, Integrity, Availability",
      correctOption: "D",
      explanation: "The CIA triad is Confidentiality, Integrity and Availability.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-information-security-cryptography-q02",
      topicId: "gate-core-cs-information-security-cryptography",
      text: "Which algorithm uses a public and private key pair?",
      optionA: "RSA",
      optionB: "DES",
      optionC: "AES",
      optionD: "Caesar cipher",
      correctOption: "A",
      explanation: "RSA is an asymmetric cipher using a public-private key pair.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-information-security-cryptography-q03",
      topicId: "gate-core-cs-information-security-cryptography",
      text: "The security of RSA relies on the difficulty of:",
      optionA: "Sorting large arrays",
      optionB: "Computing logarithms quickly",
      optionC: "Reversing a hash collision",
      optionD: "Factoring large composite numbers",
      correctOption: "D",
      explanation: "RSA is secure because factoring the large modulus n into its primes is hard.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-information-security-cryptography-q04",
      topicId: "gate-core-cs-information-security-cryptography",
      text: "To send a confidential message, the sender encrypts it with the recipient's:",
      optionA: "Private key",
      optionB: "Own private key",
      optionC: "Own public key",
      optionD: "Public key",
      correctOption: "D",
      explanation: "Encrypting with the recipient's public key ensures only the recipient can decrypt it.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-information-security-cryptography-q05",
      topicId: "gate-core-cs-information-security-cryptography",
      text: "A cryptographic hash function is expected to be:",
      optionA: "One-way and collision-resistant",
      optionB: "Easily reversible",
      optionC: "Dependent on a shared key",
      optionD: "Different for the same input each time",
      correctOption: "A",
      explanation: "Cryptographic hashes are one-way and resistant to finding collisions.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-information-security-cryptography-q06",
      topicId: "gate-core-cs-information-security-cryptography",
      text: "Which property prevents a sender from later denying having sent a message?",
      optionA: "Availability",
      optionB: "Non-repudiation",
      optionC: "Confidentiality",
      optionD: "Redundancy",
      correctOption: "B",
      explanation: "Non-repudiation ensures the sender cannot deny the action, typically via signatures.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-information-security-cryptography-q07",
      topicId: "gate-core-cs-information-security-cryptography",
      text: "A digital signature is created by encrypting a message hash with the sender's:",
      optionA: "Public key",
      optionB: "Private key",
      optionC: "Symmetric session key",
      optionD: "Recipient's private key",
      correctOption: "B",
      explanation: "Signing uses the sender's private key on the message hash, proving origin and integrity.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-information-security-cryptography-q08",
      topicId: "gate-core-cs-information-security-cryptography",
      text: "Compared with asymmetric ciphers, symmetric ciphers are generally:",
      optionA: "Slower but easier for key distribution",
      optionB: "Unable to encrypt bulk data",
      optionC: "Always more secure",
      optionD: "Faster but harder for key distribution",
      correctOption: "D",
      explanation: "Symmetric ciphers are faster but require securely sharing the single secret key.",
      orderIndex: 7
    },
    {
      id: "gate-programming-ds-c-programming-pointers-q01",
      topicId: "gate-programming-ds-c-programming-pointers",
      text: "In C, the expression a[i] for an array a is equivalent to:",
      optionA: "Value at a plus i bytes",
      optionB: "Address of a plus i bytes",
      optionC: "Value at address a plus i elements",
      optionD: "The literal i",
      correctOption: "C",
      explanation: "a[i] dereferences a + i, where the offset is scaled by the element size.",
      orderIndex: 0
    },
    {
      id: "gate-programming-ds-c-programming-pointers-q02",
      topicId: "gate-programming-ds-c-programming-pointers",
      text: "Incrementing a pointer to int by 1 advances the address by:",
      optionA: "1 byte",
      optionB: "2 bytes always",
      optionC: "The size of an int in bytes",
      optionD: "The value stored",
      correctOption: "C",
      explanation: "Pointer arithmetic scales by the size of the pointed-to type, here sizeof(int).",
      orderIndex: 1
    },
    {
      id: "gate-programming-ds-c-programming-pointers-q03",
      topicId: "gate-programming-ds-c-programming-pointers",
      text: "A pointer that refers to memory that has already been freed is called a:",
      optionA: "Dangling pointer",
      optionB: "Null pointer",
      optionC: "Void pointer",
      optionD: "Function pointer",
      correctOption: "A",
      explanation: "A dangling pointer still references memory that has been deallocated.",
      orderIndex: 2
    },
    {
      id: "gate-programming-ds-c-programming-pointers-q04",
      topicId: "gate-programming-ds-c-programming-pointers",
      text: "In C, arguments are passed by default using:",
      optionA: "Call by reference",
      optionB: "Call by name",
      optionC: "Call by value",
      optionD: "Call by need",
      correctOption: "C",
      explanation: "C passes arguments by value; modifying a parameter does not change the caller's variable.",
      orderIndex: 3
    },
    {
      id: "gate-programming-ds-c-programming-pointers-q05",
      topicId: "gate-programming-ds-c-programming-pointers",
      text: "Which function allocates memory and initializes it to zero?",
      optionA: "free",
      optionB: "malloc",
      optionC: "calloc",
      optionD: "sizeof",
      correctOption: "C",
      explanation: "calloc zero-initializes the allocated block, unlike malloc.",
      orderIndex: 4
    },
    {
      id: "gate-programming-ds-c-programming-pointers-q06",
      topicId: "gate-programming-ds-c-programming-pointers",
      text: "Failing to release dynamically allocated memory leads to a:",
      optionA: "Stack overflow",
      optionB: "Buffer underflow",
      optionC: "Compile error",
      optionD: "Memory leak",
      correctOption: "D",
      explanation: "Not calling free on heap memory causes a memory leak.",
      orderIndex: 5
    },
    {
      id: "gate-programming-ds-c-programming-pointers-q07",
      topicId: "gate-programming-ds-c-programming-pointers",
      text: "The declaration int **p declares p as a:",
      optionA: "Pointer to an int",
      optionB: "Function returning int",
      optionC: "Array of ints",
      optionD: "Pointer to a pointer to an int",
      correctOption: "D",
      explanation: "int **p is a pointer to a pointer to int.",
      orderIndex: 6
    },
    {
      id: "gate-programming-ds-c-programming-pointers-q08",
      topicId: "gate-programming-ds-c-programming-pointers",
      text: "For a row-major 2D array with C columns, element a[i][j] is at offset:",
      optionA: "i + j elements",
      optionB: "j * C + i elements",
      optionC: "i * C + j elements",
      optionD: "i * j elements",
      correctOption: "C",
      explanation: "In row-major order the linear offset of a[i][j] is i*C + j elements from the base.",
      orderIndex: 7
    },
    {
      id: "gate-programming-ds-recursion-backtracking-q01",
      topicId: "gate-programming-ds-recursion-backtracking",
      text: "Every correct recursive function must include a:",
      optionA: "Base case",
      optionB: "Loop",
      optionC: "Global variable",
      optionD: "Pointer argument",
      correctOption: "A",
      explanation: "A base case stops the recursion; without it the calls never terminate.",
      orderIndex: 0
    },
    {
      id: "gate-programming-ds-recursion-backtracking-q02",
      topicId: "gate-programming-ds-recursion-backtracking",
      text: "The naive recursive computation of the nth Fibonacci number runs in time:",
      optionA: "O(2^n)",
      optionB: "O(log n)",
      optionC: "O(n^2)",
      optionD: "O(n)",
      correctOption: "A",
      explanation: "Unmemoized Fibonacci recomputes subproblems exponentially, giving O(2^n).",
      orderIndex: 1
    },
    {
      id: "gate-programming-ds-recursion-backtracking-q03",
      topicId: "gate-programming-ds-recursion-backtracking",
      text: "Which problem is classically solved using backtracking?",
      optionA: "Binary search",
      optionB: "The N-Queens problem",
      optionC: "Bubble sort",
      optionD: "Hash table lookup",
      correctOption: "B",
      explanation: "N-Queens places queens incrementally and backtracks on conflicts.",
      orderIndex: 2
    },
    {
      id: "gate-programming-ds-recursion-backtracking-q04",
      topicId: "gate-programming-ds-recursion-backtracking",
      text: "Each recursive call consumes additional:",
      optionA: "Stack space for its frame",
      optionB: "No memory at all",
      optionC: "Heap memory only",
      optionD: "Disk storage",
      correctOption: "A",
      explanation: "Each call pushes a new activation record onto the call stack.",
      orderIndex: 3
    },
    {
      id: "gate-programming-ds-recursion-backtracking-q05",
      topicId: "gate-programming-ds-recursion-backtracking",
      text: "A recursive call that is the last operation in a function is called:",
      optionA: "Nested recursion",
      optionB: "Mutual recursion",
      optionC: "Indirect recursion",
      optionD: "Tail recursion",
      correctOption: "D",
      explanation: "In tail recursion the recursive call is the final action, allowing loop conversion.",
      orderIndex: 4
    },
    {
      id: "gate-programming-ds-recursion-backtracking-q06",
      topicId: "gate-programming-ds-recursion-backtracking",
      text: "The recurrence T(n) = T(n-1) + O(1) solves to:",
      optionA: "O(log n)",
      optionB: "O(2^n)",
      optionC: "O(n log n)",
      optionD: "O(n)",
      correctOption: "D",
      explanation: "Reducing the problem by one with constant work each step gives linear time.",
      orderIndex: 5
    },
    {
      id: "gate-programming-ds-recursion-backtracking-q07",
      topicId: "gate-programming-ds-recursion-backtracking",
      text: "The key efficiency idea in backtracking is to:",
      optionA: "Always explore every leaf",
      optionB: "Prune partial solutions that cannot succeed",
      optionC: "Avoid recursion entirely",
      optionD: "Sort the input first",
      correctOption: "B",
      explanation: "Backtracking prunes branches that cannot lead to a valid solution, cutting the search.",
      orderIndex: 6
    },
    {
      id: "gate-programming-ds-recursion-backtracking-q08",
      topicId: "gate-programming-ds-recursion-backtracking",
      text: "Computing n! recursively requires how many multiplications for n greater than 0?",
      optionA: "n",
      optionB: "2n",
      optionC: "n + 1",
      optionD: "n - 1",
      correctOption: "D",
      explanation: "factorial(n) multiplies n down to 1, performing n - 1 multiplications.",
      orderIndex: 7
    },
    {
      id: "gate-programming-ds-linked-lists-stacks-queues-q01",
      topicId: "gate-programming-ds-linked-lists-stacks-queues",
      text: "A stack follows which ordering discipline?",
      optionA: "First-In-First-Out",
      optionB: "Random order",
      optionC: "Priority order",
      optionD: "Last-In-First-Out",
      correctOption: "D",
      explanation: "A stack is LIFO: the most recently pushed item is popped first.",
      orderIndex: 0
    },
    {
      id: "gate-programming-ds-linked-lists-stacks-queues-q02",
      topicId: "gate-programming-ds-linked-lists-stacks-queues",
      text: "A queue follows which ordering discipline?",
      optionA: "Smallest first",
      optionB: "Last-In-First-Out",
      optionC: "Largest first",
      optionD: "First-In-First-Out",
      correctOption: "D",
      explanation: "A queue is FIFO: the earliest enqueued item is dequeued first.",
      orderIndex: 1
    },
    {
      id: "gate-programming-ds-linked-lists-stacks-queues-q03",
      topicId: "gate-programming-ds-linked-lists-stacks-queues",
      text: "Inserting a node at the head of a singly linked list takes time:",
      optionA: "O(1)",
      optionB: "O(log n)",
      optionC: "O(n)",
      optionD: "O(n log n)",
      correctOption: "A",
      explanation: "Head insertion just relinks the head pointer, a constant-time operation.",
      orderIndex: 2
    },
    {
      id: "gate-programming-ds-linked-lists-stacks-queues-q04",
      topicId: "gate-programming-ds-linked-lists-stacks-queues",
      text: "Which structure is most natural for evaluating a postfix expression?",
      optionA: "Queue",
      optionB: "Stack",
      optionC: "Binary search tree",
      optionD: "Hash table",
      correctOption: "B",
      explanation: "Postfix evaluation pushes operands and pops them on operators using a stack.",
      orderIndex: 3
    },
    {
      id: "gate-programming-ds-linked-lists-stacks-queues-q05",
      topicId: "gate-programming-ds-linked-lists-stacks-queues",
      text: "Searching for a value in an unsorted singly linked list takes time:",
      optionA: "O(n)",
      optionB: "O(log n)",
      optionC: "O(1)",
      optionD: "O(n^2)",
      correctOption: "A",
      explanation: "A linked list has no random access, so search scans nodes in O(n).",
      orderIndex: 4
    },
    {
      id: "gate-programming-ds-linked-lists-stacks-queues-q06",
      topicId: "gate-programming-ds-linked-lists-stacks-queues",
      text: "A data structure allowing insertion and deletion at both ends is a:",
      optionA: "Stack",
      optionB: "Simple queue",
      optionC: "Deque",
      optionD: "Singly linked list",
      correctOption: "C",
      explanation: "A deque (double-ended queue) supports operations at both the front and rear.",
      orderIndex: 5
    },
    {
      id: "gate-programming-ds-linked-lists-stacks-queues-q07",
      topicId: "gate-programming-ds-linked-lists-stacks-queues",
      text: "Which structure is used to manage function calls during program execution?",
      optionA: "Queue",
      optionB: "Priority queue",
      optionC: "Call stack",
      optionD: "Circular buffer",
      correctOption: "C",
      explanation: "Function calls use a LIFO call stack to store return addresses and locals.",
      orderIndex: 6
    },
    {
      id: "gate-programming-ds-linked-lists-stacks-queues-q08",
      topicId: "gate-programming-ds-linked-lists-stacks-queues",
      text: "A circular queue is preferred over a linear array queue because it:",
      optionA: "Sorts elements automatically",
      optionB: "Reuses vacated front slots",
      optionC: "Allows binary search",
      optionD: "Stores keys and values",
      correctOption: "B",
      explanation: "A circular queue wraps around to reuse slots freed at the front, avoiding waste.",
      orderIndex: 7
    },
    {
      id: "gate-programming-ds-hashing-heaps-q01",
      topicId: "gate-programming-ds-hashing-heaps",
      text: "The average-case time complexity of a lookup in a hash table is:",
      optionA: "O(log n)",
      optionB: "O(1)",
      optionC: "O(n)",
      optionD: "O(n log n)",
      correctOption: "B",
      explanation: "With a good hash function and load factor, lookups average O(1).",
      orderIndex: 0
    },
    {
      id: "gate-programming-ds-hashing-heaps-q02",
      topicId: "gate-programming-ds-hashing-heaps",
      text: "In a min-heap, the smallest element is always located at the:",
      optionA: "Last leaf",
      optionB: "Rightmost node",
      optionC: "Root",
      optionD: "Middle level",
      correctOption: "C",
      explanation: "A min-heap keeps the minimum element at the root.",
      orderIndex: 1
    },
    {
      id: "gate-programming-ds-hashing-heaps-q03",
      topicId: "gate-programming-ds-hashing-heaps",
      text: "The load factor of a hash table is defined as:",
      optionA: "Slots divided by entries",
      optionB: "Entries times slots",
      optionC: "Number of collisions",
      optionD: "Number of entries divided by number of slots",
      correctOption: "D",
      explanation: "Load factor = n/m, the ratio of stored entries to available slots.",
      orderIndex: 2
    },
    {
      id: "gate-programming-ds-hashing-heaps-q04",
      topicId: "gate-programming-ds-hashing-heaps",
      text: "Inserting an element into a binary heap of n elements takes time:",
      optionA: "O(n)",
      optionB: "O(1)",
      optionC: "O(log n)",
      optionD: "O(n log n)",
      correctOption: "C",
      explanation: "Heap insertion sifts the new element up at most the height, O(log n).",
      orderIndex: 3
    },
    {
      id: "gate-programming-ds-hashing-heaps-q05",
      topicId: "gate-programming-ds-hashing-heaps",
      text: "Building a binary heap from n unordered elements using sift-down takes time:",
      optionA: "O(n)",
      optionB: "O(n log n)",
      optionC: "O(log n)",
      optionD: "O(n^2)",
      correctOption: "A",
      explanation: "The standard build-heap procedure runs in O(n), faster than n insertions.",
      orderIndex: 4
    },
    {
      id: "gate-programming-ds-hashing-heaps-q06",
      topicId: "gate-programming-ds-hashing-heaps",
      text: "Which collision-resolution method stores colliding keys in a list per bucket?",
      optionA: "Separate chaining",
      optionB: "Quadratic probing",
      optionC: "Linear probing",
      optionD: "Double hashing",
      correctOption: "A",
      explanation: "Separate chaining keeps a linked list of entries in each bucket.",
      orderIndex: 5
    },
    {
      id: "gate-programming-ds-hashing-heaps-q07",
      topicId: "gate-programming-ds-hashing-heaps",
      text: "In a 0-indexed array heap, the children of node i are at indices:",
      optionA: "i-1 and i+1",
      optionB: "2i+1 and 2i+2",
      optionC: "i/2 and i/3",
      optionD: "i+2 and i+3",
      correctOption: "B",
      explanation: "For 0-indexed heaps the children of node i are at 2i+1 and 2i+2.",
      orderIndex: 6
    },
    {
      id: "gate-programming-ds-hashing-heaps-q08",
      topicId: "gate-programming-ds-hashing-heaps",
      text: "A binary heap is most directly used to implement a:",
      optionA: "Hash map",
      optionB: "Balanced BST",
      optionC: "Priority queue",
      optionD: "Stack",
      correctOption: "C",
      explanation: "Heaps efficiently support priority-queue operations like extract-min and insert.",
      orderIndex: 7
    },
    {
      id: "gate-programming-ds-graph-algorithms-bfs-dfs-q01",
      topicId: "gate-programming-ds-graph-algorithms-bfs-dfs",
      text: "Breadth-first search uses which auxiliary data structure?",
      optionA: "Stack",
      optionB: "Queue",
      optionC: "Heap",
      optionD: "Hash table",
      correctOption: "B",
      explanation: "BFS explores level by level using a FIFO queue.",
      orderIndex: 0
    },
    {
      id: "gate-programming-ds-graph-algorithms-bfs-dfs-q02",
      topicId: "gate-programming-ds-graph-algorithms-bfs-dfs",
      text: "The time complexity of BFS or DFS on a graph with V vertices and E edges using an adjacency list is:",
      optionA: "O(V^2)",
      optionB: "O(V * E)",
      optionC: "O(E log V)",
      optionD: "O(V + E)",
      correctOption: "D",
      explanation: "Both traversals visit each vertex and edge once, giving O(V + E).",
      orderIndex: 1
    },
    {
      id: "gate-programming-ds-graph-algorithms-bfs-dfs-q03",
      topicId: "gate-programming-ds-graph-algorithms-bfs-dfs",
      text: "On an unweighted graph, BFS from a source finds the shortest path measured in:",
      optionA: "Total edge weight",
      optionB: "Number of edges",
      optionC: "Number of vertices squared",
      optionD: "Memory used",
      correctOption: "B",
      explanation: "BFS yields the fewest-edge (shortest) path in an unweighted graph.",
      orderIndex: 2
    },
    {
      id: "gate-programming-ds-graph-algorithms-bfs-dfs-q04",
      topicId: "gate-programming-ds-graph-algorithms-bfs-dfs",
      text: "Topological sorting can be applied only to a:",
      optionA: "Directed acyclic graph",
      optionB: "Complete graph",
      optionC: "Undirected cyclic graph",
      optionD: "Bipartite graph",
      correctOption: "A",
      explanation: "A topological order exists only for a DAG (no directed cycles).",
      orderIndex: 3
    },
    {
      id: "gate-programming-ds-graph-algorithms-bfs-dfs-q05",
      topicId: "gate-programming-ds-graph-algorithms-bfs-dfs",
      text: "An adjacency matrix for a graph with V vertices requires space:",
      optionA: "O(V + E)",
      optionB: "O(E)",
      optionC: "O(V)",
      optionD: "O(V^2)",
      correctOption: "D",
      explanation: "An adjacency matrix stores a V by V table, needing O(V^2) space.",
      orderIndex: 4
    },
    {
      id: "gate-programming-ds-graph-algorithms-bfs-dfs-q06",
      topicId: "gate-programming-ds-graph-algorithms-bfs-dfs",
      text: "In a depth-first traversal of a directed graph, a back edge indicates:",
      optionA: "A disconnected graph",
      optionB: "A spanning tree",
      optionC: "A shortest path",
      optionD: "A cycle",
      correctOption: "D",
      explanation: "A back edge to an ancestor in the DFS tree reveals a cycle.",
      orderIndex: 5
    },
    {
      id: "gate-programming-ds-graph-algorithms-bfs-dfs-q07",
      topicId: "gate-programming-ds-graph-algorithms-bfs-dfs",
      text: "Depth-first search can be implemented iteratively using a:",
      optionA: "Queue",
      optionB: "Stack",
      optionC: "Priority queue",
      optionD: "Sorted array",
      correctOption: "B",
      explanation: "Iterative DFS uses an explicit stack in place of the recursion stack.",
      orderIndex: 6
    },
    {
      id: "gate-programming-ds-graph-algorithms-bfs-dfs-q08",
      topicId: "gate-programming-ds-graph-algorithms-bfs-dfs",
      text: "An adjacency list representation is most space-efficient for a graph that is:",
      optionA: "Sparse",
      optionB: "Complete",
      optionC: "Dense",
      optionD: "Bipartite",
      correctOption: "A",
      explanation: "Adjacency lists use O(V + E) space, ideal when E is small (sparse graphs).",
      orderIndex: 7
    },
    {
      id: "gate-programming-ds-dynamic-programming-q01",
      topicId: "gate-programming-ds-dynamic-programming",
      text: "Dynamic programming is applicable when a problem exhibits overlapping subproblems and:",
      optionA: "Optimal substructure",
      optionB: "No structure",
      optionC: "Only one subproblem",
      optionD: "Random input",
      correctOption: "A",
      explanation: "DP requires optimal substructure so optimal answers combine from optimal sub-answers.",
      orderIndex: 0
    },
    {
      id: "gate-programming-ds-dynamic-programming-q02",
      topicId: "gate-programming-ds-dynamic-programming",
      text: "Top-down dynamic programming that caches results of recursive calls is called:",
      optionA: "Tabulation",
      optionB: "Memoization",
      optionC: "Greedy",
      optionD: "Branch and bound",
      correctOption: "B",
      explanation: "Memoization stores recursive results in a cache to avoid recomputation.",
      orderIndex: 1
    },
    {
      id: "gate-programming-ds-dynamic-programming-q03",
      topicId: "gate-programming-ds-dynamic-programming",
      text: "The 0/1 knapsack problem with n items and capacity W is solved in time:",
      optionA: "O(n + W)",
      optionB: "O(n log W)",
      optionC: "O(2^n)",
      optionD: "O(nW)",
      correctOption: "D",
      explanation: "The DP table over items and capacities runs in pseudo-polynomial O(nW) time.",
      orderIndex: 2
    },
    {
      id: "gate-programming-ds-dynamic-programming-q04",
      topicId: "gate-programming-ds-dynamic-programming",
      text: "The longest common subsequence of strings of length m and n is computed in time:",
      optionA: "O(m + n)",
      optionB: "O(log(m + n))",
      optionC: "O(m^2 * n^2)",
      optionD: "O(m * n)",
      correctOption: "D",
      explanation: "The LCS DP fills an m by n table, giving O(m*n) time.",
      orderIndex: 3
    },
    {
      id: "gate-programming-ds-dynamic-programming-q05",
      topicId: "gate-programming-ds-dynamic-programming",
      text: "Matrix chain multiplication ordering is solved by dynamic programming in time:",
      optionA: "O(n^3)",
      optionB: "O(n^2)",
      optionC: "O(n)",
      optionD: "O(2^n)",
      correctOption: "A",
      explanation: "The standard matrix chain DP runs in O(n^3) over subchain lengths.",
      orderIndex: 4
    },
    {
      id: "gate-programming-ds-dynamic-programming-q06",
      topicId: "gate-programming-ds-dynamic-programming",
      text: "Bottom-up dynamic programming that fills a table iteratively is known as:",
      optionA: "Memoization",
      optionB: "Backtracking",
      optionC: "Tabulation",
      optionD: "Recursion",
      correctOption: "C",
      explanation: "Tabulation builds the solution iteratively from base cases upward.",
      orderIndex: 5
    },
    {
      id: "gate-programming-ds-dynamic-programming-q07",
      topicId: "gate-programming-ds-dynamic-programming",
      text: "Which algorithm computes all-pairs shortest paths via dynamic programming?",
      optionA: "Dijkstra",
      optionB: "Prim",
      optionC: "Floyd-Warshall",
      optionD: "Kruskal",
      correctOption: "C",
      explanation: "Floyd-Warshall is a DP that finds shortest paths between all vertex pairs.",
      orderIndex: 6
    },
    {
      id: "gate-programming-ds-dynamic-programming-q08",
      topicId: "gate-programming-ds-dynamic-programming",
      text: "Memoization reduces the naive recursive Fibonacci time complexity to:",
      optionA: "O(2^n)",
      optionB: "O(log n)",
      optionC: "O(n)",
      optionD: "O(n^2)",
      correctOption: "C",
      explanation: "Caching each Fibonacci value computes it once, yielding O(n) time.",
      orderIndex: 7
    },
    {
      id: "gate-computer-organization-number-systems-boolean-algebra-q01",
      topicId: "gate-computer-organization-number-systems-boolean-algebra",
      text: "The decimal value of the binary number 1011 is:",
      optionA: "9",
      optionB: "13",
      optionC: "11",
      optionD: "15",
      correctOption: "C",
      explanation: "1011 in binary equals 8 + 0 + 2 + 1 = 11.",
      orderIndex: 0
    },
    {
      id: "gate-computer-organization-number-systems-boolean-algebra-q02",
      topicId: "gate-computer-organization-number-systems-boolean-algebra",
      text: "The two's complement of a number is obtained by:",
      optionA: "Adding 1 to the number",
      optionB: "Subtracting 1 from the number",
      optionC: "Taking the one's complement then adding 1",
      optionD: "Reversing the digit order",
      correctOption: "C",
      explanation: "Two's complement = one's complement (invert all bits) plus 1.",
      orderIndex: 1
    },
    {
      id: "gate-computer-organization-number-systems-boolean-algebra-q03",
      topicId: "gate-computer-organization-number-systems-boolean-algebra",
      text: "Which gates are functionally complete (universal)?",
      optionA: "NAND and NOR",
      optionB: "XOR and XNOR",
      optionC: "AND and OR",
      optionD: "Only NOT",
      correctOption: "A",
      explanation: "Any Boolean function can be built using only NAND gates or only NOR gates.",
      orderIndex: 2
    },
    {
      id: "gate-computer-organization-number-systems-boolean-algebra-q04",
      topicId: "gate-computer-organization-number-systems-boolean-algebra",
      text: "By De Morgan's law, NOT(A AND B) is equivalent to:",
      optionA: "(NOT A) OR (NOT B)",
      optionB: "A OR B",
      optionC: "(NOT A) AND (NOT B)",
      optionD: "A AND B",
      correctOption: "A",
      explanation: "De Morgan: the complement of a product equals the sum of the complements.",
      orderIndex: 3
    },
    {
      id: "gate-computer-organization-number-systems-boolean-algebra-q05",
      topicId: "gate-computer-organization-number-systems-boolean-algebra",
      text: "The range of an 8-bit two's complement signed integer is:",
      optionA: "0 to 255",
      optionB: "-255 to 255",
      optionC: "-127 to 128",
      optionD: "-128 to 127",
      correctOption: "D",
      explanation: "An n-bit two's complement range is -2^(n-1) to 2^(n-1)-1, here -128 to 127.",
      orderIndex: 4
    },
    {
      id: "gate-computer-organization-number-systems-boolean-algebra-q06",
      topicId: "gate-computer-organization-number-systems-boolean-algebra",
      text: "The hexadecimal equivalent of the binary number 11110000 is:",
      optionA: "0F",
      optionB: "FF",
      optionC: "F0",
      optionD: "0E",
      correctOption: "C",
      explanation: "Grouping into 1111 and 0000 gives F and 0, so the value is F0.",
      orderIndex: 5
    },
    {
      id: "gate-computer-organization-number-systems-boolean-algebra-q07",
      topicId: "gate-computer-organization-number-systems-boolean-algebra",
      text: "The Boolean expression A + A' simplifies to:",
      optionA: "0",
      optionB: "A",
      optionC: "1",
      optionD: "A'",
      correctOption: "C",
      explanation: "A variable ORed with its complement always equals 1.",
      orderIndex: 6
    },
    {
      id: "gate-computer-organization-number-systems-boolean-algebra-q08",
      topicId: "gate-computer-organization-number-systems-boolean-algebra",
      text: "Karnaugh maps are used primarily to:",
      optionA: "Convert decimal to binary",
      optionB: "Minimize Boolean expressions",
      optionC: "Detect parity errors",
      optionD: "Schedule processes",
      correctOption: "B",
      explanation: "K-maps group adjacent minterms to simplify Boolean functions and reduce gates.",
      orderIndex: 7
    },
    {
      id: "gate-computer-organization-cpu-instruction-pipelining-q01",
      topicId: "gate-computer-organization-cpu-instruction-pipelining",
      text: "An ideal k-stage instruction pipeline can give a maximum speedup of about:",
      optionA: "k times",
      optionB: "2 times",
      optionC: "k squared times",
      optionD: "log k times",
      correctOption: "A",
      explanation: "An ideal pipeline approaches a speedup equal to the number of stages k.",
      orderIndex: 0
    },
    {
      id: "gate-computer-organization-cpu-instruction-pipelining-q02",
      topicId: "gate-computer-organization-cpu-instruction-pipelining",
      text: "A hazard caused by an instruction depending on the result of a previous one is a:",
      optionA: "Structural hazard",
      optionB: "Data hazard",
      optionC: "Control hazard",
      optionD: "Power hazard",
      correctOption: "B",
      explanation: "Data hazards arise when an instruction needs a result not yet produced.",
      orderIndex: 1
    },
    {
      id: "gate-computer-organization-cpu-instruction-pipelining-q03",
      topicId: "gate-computer-organization-cpu-instruction-pipelining",
      text: "A branch instruction that may change the program flow causes a:",
      optionA: "Data hazard",
      optionB: "Structural hazard",
      optionC: "Control hazard",
      optionD: "Cache miss",
      correctOption: "C",
      explanation: "Branches create control hazards because the next instruction is uncertain.",
      orderIndex: 2
    },
    {
      id: "gate-computer-organization-cpu-instruction-pipelining-q04",
      topicId: "gate-computer-organization-cpu-instruction-pipelining",
      text: "The technique of feeding a computed result to an earlier-needing stage to avoid stalls is:",
      optionA: "Interrupting",
      optionB: "Paging",
      optionC: "Forwarding",
      optionD: "Spooling",
      correctOption: "C",
      explanation: "Forwarding (bypassing) routes a result directly to a dependent stage, avoiding stalls.",
      orderIndex: 3
    },
    {
      id: "gate-computer-organization-cpu-instruction-pipelining-q05",
      topicId: "gate-computer-organization-cpu-instruction-pipelining",
      text: "A 5-stage pipeline processing a very large number of instructions approaches a speedup of:",
      optionA: "2",
      optionB: "5",
      optionC: "10",
      optionD: "25",
      correctOption: "B",
      explanation: "For large n the pipeline speedup tends toward the stage count, here 5.",
      orderIndex: 4
    },
    {
      id: "gate-computer-organization-cpu-instruction-pipelining-q06",
      topicId: "gate-computer-organization-cpu-instruction-pipelining",
      text: "A conflict over a shared hardware resource between two instructions is a:",
      optionA: "Data hazard",
      optionB: "Structural hazard",
      optionC: "Control hazard",
      optionD: "Logical hazard",
      correctOption: "B",
      explanation: "Structural hazards occur when instructions compete for the same hardware unit.",
      orderIndex: 5
    },
    {
      id: "gate-computer-organization-cpu-instruction-pipelining-q07",
      topicId: "gate-computer-organization-cpu-instruction-pipelining",
      text: "CPI in processor performance analysis stands for:",
      optionA: "Cost per instruction",
      optionB: "Cycles per instruction",
      optionC: "Cache per instruction",
      optionD: "Calls per interrupt",
      correctOption: "B",
      explanation: "CPI is cycles per instruction, a key factor in execution time.",
      orderIndex: 6
    },
    {
      id: "gate-computer-organization-cpu-instruction-pipelining-q08",
      topicId: "gate-computer-organization-cpu-instruction-pipelining",
      text: "Which is NOT one of the classic instruction cycle stages?",
      optionA: "Fetch",
      optionB: "Decode",
      optionC: "Defragment",
      optionD: "Write-back",
      correctOption: "C",
      explanation: "The stages are fetch, decode, execute, memory access and write-back; defragment is not one.",
      orderIndex: 7
    },
    {
      id: "gate-computer-organization-cache-memory-hierarchy-q01",
      topicId: "gate-computer-organization-cache-memory-hierarchy",
      text: "Which storage level is the fastest and closest to the CPU?",
      optionA: "Main memory",
      optionB: "Magnetic disk",
      optionC: "Registers",
      optionD: "Optical disk",
      correctOption: "C",
      explanation: "Registers sit at the top of the hierarchy: fastest, smallest and closest to the CPU.",
      orderIndex: 0
    },
    {
      id: "gate-computer-organization-cache-memory-hierarchy-q02",
      topicId: "gate-computer-organization-cache-memory-hierarchy",
      text: "If the cache hit ratio is 0.9, cache time is 10 ns and memory time is 100 ns, the effective access time is:",
      optionA: "100 ns",
      optionB: "55 ns",
      optionC: "90 ns",
      optionD: "19 ns",
      correctOption: "D",
      explanation: "EAT = 0.9*10 + 0.1*100 = 9 + 10 = 19 ns.",
      orderIndex: 1
    },
    {
      id: "gate-computer-organization-cache-memory-hierarchy-q03",
      topicId: "gate-computer-organization-cache-memory-hierarchy",
      text: "In direct-mapped cache, a memory block can be placed in:",
      optionA: "Any cache line",
      optionB: "Any line within one set",
      optionC: "Exactly one fixed line",
      optionD: "Two specific lines",
      correctOption: "C",
      explanation: "Direct mapping assigns each block to exactly one predetermined cache line.",
      orderIndex: 2
    },
    {
      id: "gate-computer-organization-cache-memory-hierarchy-q04",
      topicId: "gate-computer-organization-cache-memory-hierarchy",
      text: "A write policy that updates both cache and main memory on every write is called:",
      optionA: "Write-back",
      optionB: "Write-around",
      optionC: "Lazy write",
      optionD: "Write-through",
      correctOption: "D",
      explanation: "Write-through writes to cache and memory simultaneously on each store.",
      orderIndex: 3
    },
    {
      id: "gate-computer-organization-cache-memory-hierarchy-q05",
      topicId: "gate-computer-organization-cache-memory-hierarchy",
      text: "A cache miss occurring on the very first reference to a block is a:",
      optionA: "Capacity miss",
      optionB: "Conflict miss",
      optionC: "Compulsory miss",
      optionD: "Coherence miss",
      correctOption: "C",
      explanation: "Compulsory (cold) misses happen on the first access to a block.",
      orderIndex: 4
    },
    {
      id: "gate-computer-organization-cache-memory-hierarchy-q06",
      topicId: "gate-computer-organization-cache-memory-hierarchy",
      text: "Which replacement policy evicts the block unused for the longest time?",
      optionA: "FIFO",
      optionB: "Random",
      optionC: "LRU",
      optionD: "LIFO",
      correctOption: "C",
      explanation: "LRU (least recently used) discards the block that has gone longest without use.",
      orderIndex: 5
    },
    {
      id: "gate-computer-organization-cache-memory-hierarchy-q07",
      topicId: "gate-computer-organization-cache-memory-hierarchy",
      text: "The principle that recently accessed data is likely to be accessed again soon is:",
      optionA: "Temporal locality",
      optionB: "Spatial locality",
      optionC: "Sequential mapping",
      optionD: "Associativity",
      correctOption: "A",
      explanation: "Temporal locality refers to reuse of the same data within a short time window.",
      orderIndex: 6
    },
    {
      id: "gate-computer-organization-cache-memory-hierarchy-q08",
      topicId: "gate-computer-organization-cache-memory-hierarchy",
      text: "In a set-associative cache, a memory block maps to:",
      optionA: "One fixed line only",
      optionB: "Any line in the entire cache",
      optionC: "Any line within one specific set",
      optionD: "No line at all",
      correctOption: "C",
      explanation: "Set-associative mapping fixes the set but allows any line within that set.",
      orderIndex: 7
    },
    {
      id: "gate-computer-organization-io-interrupts-q01",
      topicId: "gate-computer-organization-io-interrupts",
      text: "Which I/O technique frees the CPU by letting a controller transfer data directly to memory?",
      optionA: "Programmed I/O",
      optionB: "Interrupt-driven I/O",
      optionC: "Direct Memory Access",
      optionD: "Polling",
      correctOption: "C",
      explanation: "DMA lets a dedicated controller move data, freeing the CPU during the transfer.",
      orderIndex: 0
    },
    {
      id: "gate-computer-organization-io-interrupts-q02",
      topicId: "gate-computer-organization-io-interrupts",
      text: "Programmed I/O is inefficient mainly because the CPU:",
      optionA: "Busy-waits polling a status bit",
      optionB: "Cannot access memory",
      optionC: "Loses all interrupts",
      optionD: "Runs at a lower clock",
      correctOption: "A",
      explanation: "In programmed I/O the CPU wastes cycles repeatedly polling a device status bit.",
      orderIndex: 1
    },
    {
      id: "gate-computer-organization-io-interrupts-q03",
      topicId: "gate-computer-organization-io-interrupts",
      text: "The routine executed in response to an interrupt is the:",
      optionA: "Interrupt service routine",
      optionB: "Boot loader",
      optionC: "Scheduler",
      optionD: "Page replacer",
      correctOption: "A",
      explanation: "The CPU runs the interrupt service routine (ISR) to handle an interrupt.",
      orderIndex: 2
    },
    {
      id: "gate-computer-organization-io-interrupts-q04",
      topicId: "gate-computer-organization-io-interrupts",
      text: "An interrupt that cannot be disabled by the processor is called:",
      optionA: "Maskable",
      optionB: "Non-maskable",
      optionC: "Software",
      optionD: "Vectored",
      correctOption: "B",
      explanation: "A non-maskable interrupt cannot be ignored or disabled by the CPU.",
      orderIndex: 3
    },
    {
      id: "gate-computer-organization-io-interrupts-q05",
      topicId: "gate-computer-organization-io-interrupts",
      text: "A vectored interrupt improves handling by:",
      optionA: "Disabling all other interrupts",
      optionB: "Increasing the clock speed",
      optionC: "Polling each device in turn",
      optionD: "Supplying the ISR address directly",
      correctOption: "D",
      explanation: "Vectored interrupts provide the ISR address immediately, skipping a polling scan.",
      orderIndex: 4
    },
    {
      id: "gate-computer-organization-io-interrupts-q06",
      topicId: "gate-computer-organization-io-interrupts",
      text: "Immediately after an interrupt is accepted, the CPU first:",
      optionA: "Erases main memory",
      optionB: "Saves the current context",
      optionC: "Reboots the system",
      optionD: "Disables the clock permanently",
      correctOption: "B",
      explanation: "The CPU saves the program counter and registers before running the ISR.",
      orderIndex: 5
    },
    {
      id: "gate-computer-organization-io-interrupts-q07",
      topicId: "gate-computer-organization-io-interrupts",
      text: "DMA is most beneficial for:",
      optionA: "Single-byte transfers",
      optionB: "Branch prediction",
      optionC: "Arithmetic computation",
      optionD: "Large block data transfers",
      correctOption: "D",
      explanation: "DMA shines for bulk block transfers, freeing the CPU from per-byte handling.",
      orderIndex: 6
    },
    {
      id: "gate-computer-organization-io-interrupts-q08",
      topicId: "gate-computer-organization-io-interrupts",
      text: "When several interrupts occur together, which scheme decides the service order?",
      optionA: "Round robin only",
      optionB: "Priority",
      optionC: "Random selection",
      optionD: "Alphabetical order",
      correctOption: "B",
      explanation: "A priority scheme determines which simultaneous interrupt is serviced first.",
      orderIndex: 7
    },
    {
      id: "gate-discrete-math-propositional-predicate-logic-q01",
      topicId: "gate-discrete-math-propositional-predicate-logic",
      text: "The implication p implies q is false only when:",
      optionA: "p is true and q is false",
      optionB: "p is false and q is true",
      optionC: "p is true and q is true",
      optionD: "p is false and q is false",
      correctOption: "A",
      explanation: "An implication is false exactly when its premise is true but its conclusion is false.",
      orderIndex: 0
    },
    {
      id: "gate-discrete-math-propositional-predicate-logic-q02",
      topicId: "gate-discrete-math-propositional-predicate-logic",
      text: "A proposition that is true under every truth assignment is a:",
      optionA: "Contradiction",
      optionB: "Predicate",
      optionC: "Contingency",
      optionD: "Tautology",
      correctOption: "D",
      explanation: "A tautology is a formula that evaluates to true for all assignments.",
      orderIndex: 1
    },
    {
      id: "gate-discrete-math-propositional-predicate-logic-q03",
      topicId: "gate-discrete-math-propositional-predicate-logic",
      text: "The expression p implies q is logically equivalent to:",
      optionA: "p AND q",
      optionB: "(NOT p) OR q",
      optionC: "p OR (NOT q)",
      optionD: "(NOT p) AND q",
      correctOption: "B",
      explanation: "By material implication, p implies q equals (NOT p) OR q.",
      orderIndex: 2
    },
    {
      id: "gate-discrete-math-propositional-predicate-logic-q04",
      topicId: "gate-discrete-math-propositional-predicate-logic",
      text: "The contrapositive of p implies q is:",
      optionA: "q implies p",
      optionB: "(NOT p) implies (NOT q)",
      optionC: "(NOT q) implies (NOT p)",
      optionD: "p implies (NOT q)",
      correctOption: "C",
      explanation: "The contrapositive (NOT q implies NOT p) is logically equivalent to the original.",
      orderIndex: 3
    },
    {
      id: "gate-discrete-math-propositional-predicate-logic-q05",
      topicId: "gate-discrete-math-propositional-predicate-logic",
      text: "The negation of the statement 'for all x, P(x)' is:",
      optionA: "there exists x such that NOT P(x)",
      optionB: "for all x, NOT P(x)",
      optionC: "there exists x such that P(x)",
      optionD: "for all x, P(x)",
      correctOption: "A",
      explanation: "Negating a universal quantifier gives an existential with the negated predicate.",
      orderIndex: 4
    },
    {
      id: "gate-discrete-math-propositional-predicate-logic-q06",
      topicId: "gate-discrete-math-propositional-predicate-logic",
      text: "A proposition that is false under every truth assignment is a:",
      optionA: "Tautology",
      optionB: "Contradiction",
      optionC: "Contingency",
      optionD: "Theorem",
      correctOption: "B",
      explanation: "A contradiction evaluates to false for all possible truth assignments.",
      orderIndex: 5
    },
    {
      id: "gate-discrete-math-propositional-predicate-logic-q07",
      topicId: "gate-discrete-math-propositional-predicate-logic",
      text: "By De Morgan's law, NOT(p OR q) equals:",
      optionA: "(NOT p) OR (NOT q)",
      optionB: "(NOT p) AND (NOT q)",
      optionC: "p AND q",
      optionD: "p OR q",
      correctOption: "B",
      explanation: "The negation of a disjunction is the conjunction of the negations.",
      orderIndex: 6
    },
    {
      id: "gate-discrete-math-propositional-predicate-logic-q08",
      topicId: "gate-discrete-math-propositional-predicate-logic",
      text: "The biconditional p if and only if q is true when:",
      optionA: "both are false only",
      optionB: "p is true and q is false",
      optionC: "exactly one of p, q is true",
      optionD: "p and q have the same truth value",
      correctOption: "D",
      explanation: "A biconditional is true precisely when both operands share the same truth value.",
      orderIndex: 7
    },
    {
      id: "gate-discrete-math-set-theory-relations-q01",
      topicId: "gate-discrete-math-set-theory-relations",
      text: "The number of subsets of a set with 4 elements is:",
      optionA: "8",
      optionB: "16",
      optionC: "12",
      optionD: "24",
      correctOption: "B",
      explanation: "A set with n elements has 2^n subsets; here 2^4 = 16.",
      orderIndex: 0
    },
    {
      id: "gate-discrete-math-set-theory-relations-q02",
      topicId: "gate-discrete-math-set-theory-relations",
      text: "A relation that is reflexive, symmetric and transitive is called:",
      optionA: "An equivalence relation",
      optionB: "A partial order",
      optionC: "A total order",
      optionD: "An antisymmetric relation",
      correctOption: "A",
      explanation: "Reflexive, symmetric and transitive together define an equivalence relation.",
      orderIndex: 1
    },
    {
      id: "gate-discrete-math-set-theory-relations-q03",
      topicId: "gate-discrete-math-set-theory-relations",
      text: "By inclusion-exclusion, if |A| = 5, |B| = 7 and |A intersect B| = 3, then |A union B| is:",
      optionA: "15",
      optionB: "12",
      optionC: "9",
      optionD: "10",
      correctOption: "C",
      explanation: "|A union B| = 5 + 7 - 3 = 9.",
      orderIndex: 2
    },
    {
      id: "gate-discrete-math-set-theory-relations-q04",
      topicId: "gate-discrete-math-set-theory-relations",
      text: "A relation that is reflexive, antisymmetric and transitive defines a:",
      optionA: "Partial order",
      optionB: "Equivalence relation",
      optionC: "Function",
      optionD: "Bijection",
      correctOption: "A",
      explanation: "Those three properties define a partial order (a poset).",
      orderIndex: 3
    },
    {
      id: "gate-discrete-math-set-theory-relations-q05",
      topicId: "gate-discrete-math-set-theory-relations",
      text: "The number of functions from a set of 3 elements to a set of 4 elements is:",
      optionA: "64",
      optionB: "24",
      optionC: "12",
      optionD: "81",
      correctOption: "A",
      explanation: "The count of functions from an m-set to an n-set is n^m = 4^3 = 64.",
      orderIndex: 4
    },
    {
      id: "gate-discrete-math-set-theory-relations-q06",
      topicId: "gate-discrete-math-set-theory-relations",
      text: "A function that is both injective and surjective is called:",
      optionA: "Bijective",
      optionB: "Constant",
      optionC: "Partial",
      optionD: "Identity only",
      correctOption: "A",
      explanation: "A function that is one-to-one and onto is bijective.",
      orderIndex: 5
    },
    {
      id: "gate-discrete-math-set-theory-relations-q07",
      topicId: "gate-discrete-math-set-theory-relations",
      text: "The total number of relations on a set with 3 elements is:",
      optionA: "512",
      optionB: "64",
      optionC: "8",
      optionD: "729",
      correctOption: "A",
      explanation: "Relations on an n-set number 2^(n^2); for n = 3 that is 2^9 = 512.",
      orderIndex: 6
    },
    {
      id: "gate-discrete-math-set-theory-relations-q08",
      topicId: "gate-discrete-math-set-theory-relations",
      text: "An equivalence relation on a set induces a:",
      optionA: "Total ordering",
      optionB: "Partition into disjoint classes",
      optionC: "Single element",
      optionD: "Cyclic group",
      correctOption: "B",
      explanation: "An equivalence relation partitions the set into disjoint equivalence classes.",
      orderIndex: 7
    },
    {
      id: "gate-discrete-math-group-theory-algebra-q01",
      topicId: "gate-discrete-math-group-theory-algebra",
      text: "A group requires closure, associativity, an identity element and:",
      optionA: "An inverse for every element",
      optionB: "Commutativity",
      optionC: "A zero divisor",
      optionD: "A maximum element",
      correctOption: "A",
      explanation: "A group needs each element to have an inverse, in addition to the other axioms.",
      orderIndex: 0
    },
    {
      id: "gate-discrete-math-group-theory-algebra-q02",
      topicId: "gate-discrete-math-group-theory-algebra",
      text: "A group in which the operation is commutative is called:",
      optionA: "Abelian",
      optionB: "Cyclic",
      optionC: "Simple",
      optionD: "Trivial",
      correctOption: "A",
      explanation: "A commutative group is called an abelian group.",
      orderIndex: 1
    },
    {
      id: "gate-discrete-math-group-theory-algebra-q03",
      topicId: "gate-discrete-math-group-theory-algebra",
      text: "Lagrange's theorem states that the order of any subgroup:",
      optionA: "Equals the group order",
      optionB: "Divides the order of the group",
      optionC: "Is always prime",
      optionD: "Is always 1",
      correctOption: "B",
      explanation: "By Lagrange's theorem, a subgroup's order divides the group's order.",
      orderIndex: 2
    },
    {
      id: "gate-discrete-math-group-theory-algebra-q04",
      topicId: "gate-discrete-math-group-theory-algebra",
      text: "An algebraic structure with closure and associativity but not necessarily an identity is a:",
      optionA: "Group",
      optionB: "Semigroup",
      optionC: "Monoid",
      optionD: "Field",
      correctOption: "B",
      explanation: "A semigroup only requires closure and associativity.",
      orderIndex: 3
    },
    {
      id: "gate-discrete-math-group-theory-algebra-q05",
      topicId: "gate-discrete-math-group-theory-algebra",
      text: "Every cyclic group is necessarily:",
      optionA: "Infinite",
      optionB: "Abelian",
      optionC: "Non-abelian",
      optionD: "A field",
      correctOption: "B",
      explanation: "A cyclic group is generated by one element and is therefore always abelian.",
      orderIndex: 4
    },
    {
      id: "gate-discrete-math-group-theory-algebra-q06",
      topicId: "gate-discrete-math-group-theory-algebra",
      text: "A commutative ring in which every non-zero element has a multiplicative inverse is a:",
      optionA: "Field",
      optionB: "Group",
      optionC: "Semigroup",
      optionD: "Monoid",
      correctOption: "A",
      explanation: "A field is a commutative ring where every non-zero element is invertible.",
      orderIndex: 5
    },
    {
      id: "gate-discrete-math-group-theory-algebra-q07",
      topicId: "gate-discrete-math-group-theory-algebra",
      text: "A semigroup that also contains an identity element is called a:",
      optionA: "Monoid",
      optionB: "Group",
      optionC: "Field",
      optionD: "Ring",
      correctOption: "A",
      explanation: "A monoid is a semigroup with an identity element.",
      orderIndex: 6
    },
    {
      id: "gate-discrete-math-group-theory-algebra-q08",
      topicId: "gate-discrete-math-group-theory-algebra",
      text: "The order of an element a in a group is the smallest positive integer k such that:",
      optionA: "a + k = 0",
      optionB: "a^k = 0",
      optionC: "k * a = a",
      optionD: "a^k equals the identity",
      correctOption: "D",
      explanation: "The order of a is the least k for which a raised to k equals the identity.",
      orderIndex: 7
    },
    {
      id: "gate-discrete-math-counting-recurrences-q01",
      topicId: "gate-discrete-math-counting-recurrences",
      text: "The number of ways to arrange 4 distinct books in a row is:",
      optionA: "4",
      optionB: "24",
      optionC: "16",
      optionD: "256",
      correctOption: "B",
      explanation: "Arrangements of 4 distinct items number 4! = 24.",
      orderIndex: 0
    },
    {
      id: "gate-discrete-math-counting-recurrences-q02",
      topicId: "gate-discrete-math-counting-recurrences",
      text: "The number of ways to choose 2 items from 5 distinct items (order ignored) is:",
      optionA: "60",
      optionB: "20",
      optionC: "25",
      optionD: "10",
      correctOption: "D",
      explanation: "5C2 = 5! / (2! 3!) = 10.",
      orderIndex: 1
    },
    {
      id: "gate-discrete-math-counting-recurrences-q03",
      topicId: "gate-discrete-math-counting-recurrences",
      text: "The pigeonhole principle guarantees that placing 11 items into 10 boxes forces:",
      optionA: "Every box to be empty",
      optionB: "At least one box with two items",
      optionC: "Exactly one item per box",
      optionD: "No box used twice",
      correctOption: "B",
      explanation: "With more items than boxes, at least one box must hold two or more items.",
      orderIndex: 2
    },
    {
      id: "gate-discrete-math-counting-recurrences-q04",
      topicId: "gate-discrete-math-counting-recurrences",
      text: "The characteristic equation of the recurrence a_n = 5 a_(n-1) - 6 a_(n-2) is:",
      optionA: "x^2 - 6x + 5 = 0",
      optionB: "x^2 + 5x + 6 = 0",
      optionC: "x^2 - 5x + 6 = 0",
      optionD: "x^2 - 5x - 6 = 0",
      correctOption: "C",
      explanation: "Substituting a_n = x^n gives x^2 = 5x - 6, that is x^2 - 5x + 6 = 0.",
      orderIndex: 3
    },
    {
      id: "gate-discrete-math-counting-recurrences-q05",
      topicId: "gate-discrete-math-counting-recurrences",
      text: "The number of distinct arrangements of the letters in the word LEVEL is:",
      optionA: "30",
      optionB: "60",
      optionC: "120",
      optionD: "24",
      correctOption: "A",
      explanation: "LEVEL has 5 letters with L twice and E twice: 5! / (2! 2!) = 30.",
      orderIndex: 4
    },
    {
      id: "gate-discrete-math-counting-recurrences-q06",
      topicId: "gate-discrete-math-counting-recurrences",
      text: "The number of circular permutations of 5 distinct objects is:",
      optionA: "120",
      optionB: "60",
      optionC: "24",
      optionD: "20",
      correctOption: "C",
      explanation: "Circular permutations of n objects number (n-1)! = 4! = 24.",
      orderIndex: 5
    },
    {
      id: "gate-discrete-math-counting-recurrences-q07",
      topicId: "gate-discrete-math-counting-recurrences",
      text: "The sum of all binomial coefficients for exponent n, that is the sum of nCk over k, equals:",
      optionA: "n",
      optionB: "n^2",
      optionC: "n!",
      optionD: "2^n",
      correctOption: "D",
      explanation: "The binomial coefficients for exponent n sum to 2^n.",
      orderIndex: 6
    },
    {
      id: "gate-discrete-math-counting-recurrences-q08",
      topicId: "gate-discrete-math-counting-recurrences",
      text: "A generating function encodes a sequence as the coefficients of a:",
      optionA: "Truth table",
      optionB: "Determinant",
      optionC: "Power series",
      optionD: "Permutation matrix",
      correctOption: "C",
      explanation: "A generating function represents a sequence as coefficients in a power series.",
      orderIndex: 7
    },
    ...gateTopUp,
    ...gate2Questions,
    ...gate3Questions,
    ...gate4Questions,
    ...gate5Questions
  ]
});
