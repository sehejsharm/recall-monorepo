// GATE (CS) depth expansion (pass 5) — Core CS. The single-topic OS, DBMS,
// Networks, TOC and Compiler entries are the highest-weight areas in the GATE
// CS paper, so this pass splits their exam-critical sub-topics into their own
// drillable topics, each with a study note and a full 12-question drill.
import type { AuthoredMaterial } from "./builder";
import type { Question, Topic } from "@jyotir/core";

export const gate5Topics: Topic[] = [
  // Core CS (existing max orderIndex = 14)
  { id: "gate-core-cs-process-scheduling-synchronization", subjectId: "gate-core-cs", name: "Process Scheduling & Synchronization", slug: "process-scheduling-synchronization", orderIndex: 15 },
  { id: "gate-core-cs-deadlocks-memory-management", subjectId: "gate-core-cs", name: "Deadlocks & Memory Management", slug: "deadlocks-memory-management", orderIndex: 16 },
  { id: "gate-core-cs-database-normalization-transactions", subjectId: "gate-core-cs", name: "Normalization & Transactions", slug: "database-normalization-transactions", orderIndex: 17 },
  { id: "gate-core-cs-tcp-ip-subnetting", subjectId: "gate-core-cs", name: "TCP/IP & Subnetting", slug: "tcp-ip-subnetting", orderIndex: 18 },
  { id: "gate-core-cs-regular-languages-finite-automata", subjectId: "gate-core-cs", name: "Regular Languages & Finite Automata", slug: "regular-languages-finite-automata", orderIndex: 19 },
  { id: "gate-core-cs-context-free-grammars-parsing", subjectId: "gate-core-cs", name: "Context-Free Grammars & Parsing", slug: "context-free-grammars-parsing", orderIndex: 20 }
];

export const gate5Materials: AuthoredMaterial[] = [
  { id: "gate-core-cs-process-scheduling-synchronization-m01", topicId: "gate-core-cs-process-scheduling-synchronization", title: "Process Scheduling & Synchronization", content: `**CPU scheduling** decides which ready process runs next. GATE tests you on computing **waiting time** and **turnaround time**.

## Key formulas
- **Turnaround time (TAT)** = Completion − Arrival.
- **Waiting time (WT)** = Turnaround − Burst.
- **Response time** = first CPU time − Arrival.

## Scheduling algorithms
| Algorithm | Idea | Notes |
| --- | --- | --- |
| **FCFS** | first come, first served | non-preemptive; **convoy effect** |
| **SJF** | shortest job first | **optimal** average WT; needs burst prediction |
| **SRTF** | preemptive SJF | shortest remaining time |
| **Round Robin** | fixed time quantum | fair; high context-switch overhead |
| **Priority** | highest priority first | risk of **starvation** → fix with **aging** |

## Synchronization
- **Critical section** must satisfy **mutual exclusion, progress, bounded waiting**.
- A **semaphore** is an integer with atomic **wait (P)** and **signal (V)**. A **binary semaphore / mutex** allows one process in.
- The **producer–consumer, readers–writers and dining-philosophers** problems are classic synchronization exercises.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "gate-core-cs-deadlocks-memory-management-m01", topicId: "gate-core-cs-deadlocks-memory-management", title: "Deadlocks & Memory Management", content: `## Deadlock
A **deadlock** needs **all four Coffman conditions** to hold at once:
1. **Mutual exclusion**, 2. **Hold and wait**, 3. **No preemption**, 4. **Circular wait**.

- **Prevention** breaks one condition; **avoidance** uses the **Banker's algorithm** to stay in a **safe state**.
- A cycle in the **resource-allocation graph** implies deadlock **only** when each resource has a single instance.

## Memory management
- **Paging** splits memory into fixed **frames** and logical memory into equal **pages** — no external fragmentation, but internal fragmentation.
- A **logical address** = (page number, offset); the **page table** maps page → frame.
- **Segmentation** uses variable-size logical segments.

## Page replacement
On a page fault the OS evicts a frame using **FIFO**, **LRU** or **Optimal**.
- **Belady's anomaly**: more frames can cause **more** faults — possible under **FIFO**, never under LRU or Optimal.
- **Effective access time** = (1 − p)·mem + p·page-fault-time, where p is the fault rate.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "gate-core-cs-database-normalization-transactions-m01", topicId: "gate-core-cs-database-normalization-transactions", title: "Normalization & Transactions", content: `## Normal forms
Normalization removes redundancy using **functional dependencies (FDs)**.
| Form | Requirement |
| --- | --- |
| **1NF** | atomic (indivisible) attribute values |
| **2NF** | 1NF + no **partial** dependency on part of a candidate key |
| **3NF** | 2NF + no **transitive** dependency of non-prime attributes |
| **BCNF** | every FD's left side is a **superkey** |

A **candidate key** minimally determines all attributes; a **prime attribute** belongs to some candidate key.

## Transactions — ACID
**Atomicity, Consistency, Isolation, Durability.**

- A **schedule** is **conflict-serializable** if its **precedence graph is acyclic**.
- **Two-Phase Locking (2PL)** guarantees serializability; **strict 2PL** also avoids cascading rollbacks.
- Conflicting operations = two operations on the **same item** where at least one is a **write**.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "gate-core-cs-tcp-ip-subnetting-m01", topicId: "gate-core-cs-tcp-ip-subnetting", title: "TCP/IP & Subnetting", content: `## The stack
The **TCP/IP model** has 4 layers; the **OSI model** has 7. Key protocols by layer:
- **Application** — HTTP, DNS, SMTP, FTP.
- **Transport** — **TCP** (reliable, connection-oriented) and **UDP** (unreliable, connectionless).
- **Network** — **IP**, routing, ICMP.
- **Link** — Ethernet, ARP, MAC.

## TCP vs UDP
- TCP: 3-way handshake (**SYN, SYN-ACK, ACK**), flow control (sliding window), congestion control.
- UDP: no handshake, lower overhead — used for DNS, streaming, VoIP.

## Subnetting
An IPv4 address is **32 bits**. A **/n prefix** fixes the first n network bits.
- **Hosts per subnet** = 2^(32−n) − 2 (subtract network + broadcast address).
- Example: **/24** → 2⁸ − 2 = **254** usable hosts; **/26** → 2⁶ − 2 = **62** hosts.
- The **subnet mask** for /26 is 255.255.255.192.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "gate-core-cs-regular-languages-finite-automata-m01", topicId: "gate-core-cs-regular-languages-finite-automata", title: "Regular Languages & Finite Automata", content: `## Finite automata
A **DFA** has exactly one transition per (state, symbol); an **NFA** may have many or **ε-moves**. Both recognise exactly the **regular languages** — every NFA has an equivalent DFA (subset construction), so they are equal in power.

- A DFA is a 5-tuple (Q, Σ, δ, q₀, F).
- Converting an n-state NFA to a DFA can need up to **2ⁿ** states.

## Regular languages
Regular languages are **closed** under union, concatenation, star, intersection and complement.

- **Regular expressions**, DFAs, NFAs and regular grammars all describe the same class.
- The **pumping lemma** proves a language is **not** regular — e.g. { aⁿbⁿ } is not regular because it needs unbounded counting.
- **Myhill–Nerode**: a language is regular iff it has **finitely many** distinguishable classes; this also gives the **minimum DFA**.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "gate-core-cs-context-free-grammars-parsing-m01", topicId: "gate-core-cs-context-free-grammars-parsing", title: "Context-Free Grammars & Parsing", content: `## Context-free grammars
A **CFG** has productions with a **single non-terminal** on the left. CFGs generate the **context-free languages**, recognised by **pushdown automata (PDA)** — the stack supplies the memory a finite automaton lacks (so { aⁿbⁿ } **is** context-free).

- A grammar is **ambiguous** if some string has two distinct parse trees / leftmost derivations.
- CFLs are closed under union, concatenation and star, but **not** under intersection or complement.

## Parsing
- **Top-down (LL)** parsers build the tree from the root; they need a grammar free of **left recursion** and require **left factoring**.
- **Bottom-up (LR/SLR/LALR)** parsers are more powerful and handle a larger grammar class.
- **FIRST** and **FOLLOW** sets drive predictive-parser table construction.
- A **deterministic PDA** is strictly weaker than a general (non-deterministic) PDA.`, estimatedReadTime: 2, orderIndex: 0 }
];

export const gate5Questions: Question[] = [
  // ── Process Scheduling & Synchronization ──
  { id: "gate-core-cs-process-scheduling-synchronization-q01", topicId: "gate-core-cs-process-scheduling-synchronization", text: "Turnaround time of a process is defined as:", optionA: "Completion time − Arrival time", optionB: "Burst time − Waiting time", optionC: "Arrival time − Completion time", optionD: "Waiting time + Response time", correctOption: "A", explanation: "Turnaround time is the total time from arrival to completion.", orderIndex: 0 },
  { id: "gate-core-cs-process-scheduling-synchronization-q02", topicId: "gate-core-cs-process-scheduling-synchronization", text: "Which scheduling algorithm gives the minimum average waiting time?", optionA: "FCFS", optionB: "Round Robin", optionC: "Shortest Job First (SJF)", optionD: "Priority (non-preemptive)", correctOption: "C", explanation: "SJF is provably optimal for minimizing average waiting time.", orderIndex: 1 },
  { id: "gate-core-cs-process-scheduling-synchronization-q03", topicId: "gate-core-cs-process-scheduling-synchronization", text: "The 'convoy effect', where short processes wait behind a long one, occurs in:", optionA: "SJF", optionB: "FCFS", optionC: "Round Robin", optionD: "SRTF", correctOption: "B", explanation: "FCFS suffers the convoy effect since a long job blocks the queue.", orderIndex: 2 },
  { id: "gate-core-cs-process-scheduling-synchronization-q04", topicId: "gate-core-cs-process-scheduling-synchronization", text: "Waiting time is computed as:", optionA: "Turnaround time − Burst time", optionB: "Completion + Arrival", optionC: "Burst + Turnaround", optionD: "Arrival − Burst", correctOption: "A", explanation: "Waiting time equals turnaround time minus the CPU burst time.", orderIndex: 3 },
  { id: "gate-core-cs-process-scheduling-synchronization-q05", topicId: "gate-core-cs-process-scheduling-synchronization", text: "Round Robin scheduling is primarily characterized by:", optionA: "A fixed time quantum per process", optionB: "Running the shortest job first", optionC: "Never preempting a process", optionD: "Priority-based selection", correctOption: "A", explanation: "Round Robin gives each process a fixed time quantum in turn.", orderIndex: 4 },
  { id: "gate-core-cs-process-scheduling-synchronization-q06", topicId: "gate-core-cs-process-scheduling-synchronization", text: "Starvation in priority scheduling is best mitigated by:", optionA: "Aging", optionB: "Larger time quantum", optionC: "Disabling interrupts", optionD: "FCFS ordering", correctOption: "A", explanation: "Aging gradually raises a waiting process's priority, preventing starvation.", orderIndex: 5 },
  { id: "gate-core-cs-process-scheduling-synchronization-q07", topicId: "gate-core-cs-process-scheduling-synchronization", text: "A semaphore's two atomic operations are:", optionA: "wait (P) and signal (V)", optionB: "lock and commit", optionC: "push and pop", optionD: "read and write", correctOption: "A", explanation: "Semaphores use atomic wait (P) and signal (V) operations.", orderIndex: 6 },
  { id: "gate-core-cs-process-scheduling-synchronization-q08", topicId: "gate-core-cs-process-scheduling-synchronization", text: "Which is NOT a required property of a correct critical-section solution?", optionA: "Mutual exclusion", optionB: "Progress", optionC: "Bounded waiting", optionD: "Maximum CPU utilization", correctOption: "D", explanation: "The three requirements are mutual exclusion, progress and bounded waiting.", orderIndex: 7 },
  { id: "gate-core-cs-process-scheduling-synchronization-q09", topicId: "gate-core-cs-process-scheduling-synchronization", text: "A binary semaphore (mutex) allows how many processes in the critical section at once?", optionA: "One", optionB: "Two", optionC: "Unlimited", optionD: "Zero", correctOption: "A", explanation: "A binary semaphore permits exactly one process in the critical section.", orderIndex: 8 },
  { id: "gate-core-cs-process-scheduling-synchronization-q10", topicId: "gate-core-cs-process-scheduling-synchronization", text: "SRTF (Shortest Remaining Time First) is the preemptive version of:", optionA: "FCFS", optionB: "SJF", optionC: "Round Robin", optionD: "Priority aging", correctOption: "B", explanation: "SRTF is preemptive SJF, switching when a shorter job arrives.", orderIndex: 9 },
  { id: "gate-core-cs-process-scheduling-synchronization-q11", topicId: "gate-core-cs-process-scheduling-synchronization", text: "Response time is measured from arrival until:", optionA: "The process first gets the CPU", optionB: "The process completes", optionC: "The process is swapped out", optionD: "The next context switch", correctOption: "A", explanation: "Response time is the delay until a process first receives the CPU.", orderIndex: 10 },
  { id: "gate-core-cs-process-scheduling-synchronization-q12", topicId: "gate-core-cs-process-scheduling-synchronization", text: "Three processes with bursts 4, 2, 6 arrive together; under SJF what is the average waiting time?", optionA: "2.67", optionB: "4.00", optionC: "3.33", optionD: "6.00", correctOption: "A", explanation: "SJF order 2,4,6 gives waits 0,2,6 → average (0+2+6)/3 = 2.67.", orderIndex: 11 },

  // ── Deadlocks & Memory Management ──
  { id: "gate-core-cs-deadlocks-memory-management-q01", topicId: "gate-core-cs-deadlocks-memory-management", text: "How many Coffman conditions must hold simultaneously for a deadlock?", optionA: "Two", optionB: "Three", optionC: "Four", optionD: "Five", correctOption: "C", explanation: "All four conditions — mutual exclusion, hold and wait, no preemption, circular wait — must hold.", orderIndex: 0 },
  { id: "gate-core-cs-deadlocks-memory-management-q02", topicId: "gate-core-cs-deadlocks-memory-management", text: "Which is NOT one of the four necessary conditions for deadlock?", optionA: "Mutual exclusion", optionB: "Circular wait", optionC: "Preemption of resources", optionD: "Hold and wait", correctOption: "C", explanation: "'No preemption' is the condition; allowing preemption actually breaks deadlock.", orderIndex: 1 },
  { id: "gate-core-cs-deadlocks-memory-management-q03", topicId: "gate-core-cs-deadlocks-memory-management", text: "The Banker's algorithm is used for deadlock:", optionA: "Avoidance", optionB: "Detection only", optionC: "Prevention", optionD: "Recovery", correctOption: "A", explanation: "The Banker's algorithm avoids deadlock by keeping the system in a safe state.", orderIndex: 2 },
  { id: "gate-core-cs-deadlocks-memory-management-q04", topicId: "gate-core-cs-deadlocks-memory-management", text: "In a resource-allocation graph with single-instance resources, a cycle means:", optionA: "Deadlock exists", optionB: "No deadlock", optionC: "Starvation only", optionD: "Nothing can be inferred", correctOption: "A", explanation: "With one instance per resource, a cycle is a sufficient condition for deadlock.", orderIndex: 3 },
  { id: "gate-core-cs-deadlocks-memory-management-q05", topicId: "gate-core-cs-deadlocks-memory-management", text: "Paging eliminates which type of fragmentation?", optionA: "External fragmentation", optionB: "Internal fragmentation", optionC: "Both types", optionD: "Neither type", correctOption: "A", explanation: "Fixed-size frames remove external fragmentation, though internal remains.", orderIndex: 4 },
  { id: "gate-core-cs-deadlocks-memory-management-q06", topicId: "gate-core-cs-deadlocks-memory-management", text: "A logical address in a paging system is split into:", optionA: "Page number and offset", optionB: "Segment and limit", optionC: "Frame and base", optionD: "Tag and index", correctOption: "A", explanation: "A logical address is (page number, offset); the page table maps page to frame.", orderIndex: 5 },
  { id: "gate-core-cs-deadlocks-memory-management-q07", topicId: "gate-core-cs-deadlocks-memory-management", text: "Belady's anomaly can occur under which page-replacement policy?", optionA: "FIFO", optionB: "LRU", optionC: "Optimal", optionD: "LFU with stack property", correctOption: "A", explanation: "FIFO can exhibit Belady's anomaly; stack algorithms like LRU cannot.", orderIndex: 6 },
  { id: "gate-core-cs-deadlocks-memory-management-q08", topicId: "gate-core-cs-deadlocks-memory-management", text: "Which page-replacement algorithm yields the theoretically minimum faults?", optionA: "Optimal (replace the page used farthest in future)", optionB: "FIFO", optionC: "Random", optionD: "Second-chance", correctOption: "A", explanation: "The Optimal policy evicts the page used farthest in the future, minimizing faults.", orderIndex: 7 },
  { id: "gate-core-cs-deadlocks-memory-management-q09", topicId: "gate-core-cs-deadlocks-memory-management", text: "If page-fault rate is p, effective access time is:", optionA: "(1 − p)·mem + p·fault_time", optionB: "p·mem + fault_time", optionC: "mem + p", optionD: "(1 + p)·mem", correctOption: "A", explanation: "EAT weights normal access by (1−p) and fault service by p.", orderIndex: 8 },
  { id: "gate-core-cs-deadlocks-memory-management-q10", topicId: "gate-core-cs-deadlocks-memory-management", text: "Segmentation differs from paging in that segments are:", optionA: "Variable-sized logical units", optionB: "Fixed-size frames", optionC: "Always one byte", optionD: "Stored only on disk", correctOption: "A", explanation: "Segmentation uses variable-size, logically meaningful segments.", orderIndex: 9 },
  { id: "gate-core-cs-deadlocks-memory-management-q11", topicId: "gate-core-cs-deadlocks-memory-management", text: "Breaking the 'hold and wait' condition is an example of deadlock:", optionA: "Prevention", optionB: "Avoidance", optionC: "Detection", optionD: "Recovery", correctOption: "A", explanation: "Denying one of the four conditions outright is deadlock prevention.", orderIndex: 10 },
  { id: "gate-core-cs-deadlocks-memory-management-q12", topicId: "gate-core-cs-deadlocks-memory-management", text: "With 3 frames and reference string 1,2,3,4,1,2,5 under FIFO, the number of page faults is:", optionA: "6", optionB: "7", optionC: "5", optionD: "4", correctOption: "A", explanation: "FIFO faults on 1,2,3,4,1,2,5 except the second-window hits give 6 faults total.", orderIndex: 11 },

  // ── Normalization & Transactions ──
  { id: "gate-core-cs-database-normalization-transactions-q01", topicId: "gate-core-cs-database-normalization-transactions", text: "First Normal Form (1NF) requires that:", optionA: "All attribute values are atomic", optionB: "There are no transitive dependencies", optionC: "Every determinant is a superkey", optionD: "There are no partial dependencies", correctOption: "A", explanation: "1NF requires atomic (indivisible) attribute values.", orderIndex: 0 },
  { id: "gate-core-cs-database-normalization-transactions-q02", topicId: "gate-core-cs-database-normalization-transactions", text: "2NF removes which kind of dependency?", optionA: "Partial dependency on part of a candidate key", optionB: "Transitive dependency", optionC: "Multivalued dependency", optionD: "Join dependency", correctOption: "A", explanation: "2NF eliminates partial dependencies of non-prime attributes on a key.", orderIndex: 1 },
  { id: "gate-core-cs-database-normalization-transactions-q03", topicId: "gate-core-cs-database-normalization-transactions", text: "3NF eliminates:", optionA: "Transitive dependency of non-prime attributes", optionB: "All functional dependencies", optionC: "Atomic values", optionD: "Candidate keys", correctOption: "A", explanation: "3NF removes transitive dependencies of non-prime attributes on the key.", orderIndex: 2 },
  { id: "gate-core-cs-database-normalization-transactions-q04", topicId: "gate-core-cs-database-normalization-transactions", text: "A relation is in BCNF if, for every functional dependency X→Y:", optionA: "X is a superkey", optionB: "Y is atomic", optionC: "X is a single attribute", optionD: "Y is a candidate key", correctOption: "A", explanation: "BCNF requires the left side of every FD to be a superkey.", orderIndex: 3 },
  { id: "gate-core-cs-database-normalization-transactions-q05", topicId: "gate-core-cs-database-normalization-transactions", text: "A prime attribute is one that:", optionA: "Belongs to some candidate key", optionB: "Is always numeric", optionC: "Cannot be null", optionD: "Is the primary key alone", correctOption: "A", explanation: "A prime attribute is a member of at least one candidate key.", orderIndex: 4 },
  { id: "gate-core-cs-database-normalization-transactions-q06", topicId: "gate-core-cs-database-normalization-transactions", text: "The 'I' in ACID properties stands for:", optionA: "Isolation", optionB: "Integrity", optionC: "Indexing", optionD: "Inheritance", correctOption: "A", explanation: "ACID = Atomicity, Consistency, Isolation, Durability.", orderIndex: 5 },
  { id: "gate-core-cs-database-normalization-transactions-q07", topicId: "gate-core-cs-database-normalization-transactions", text: "A schedule is conflict-serializable if and only if its precedence graph is:", optionA: "Acyclic", optionB: "Complete", optionC: "Connected", optionD: "Bipartite", correctOption: "A", explanation: "Conflict serializability holds exactly when the precedence graph is acyclic.", orderIndex: 6 },
  { id: "gate-core-cs-database-normalization-transactions-q08", topicId: "gate-core-cs-database-normalization-transactions", text: "Two operations conflict when they access the same item and:", optionA: "At least one is a write", optionB: "Both are reads", optionC: "Both are from the same transaction", optionD: "They occur at the same time", correctOption: "A", explanation: "A conflict needs two operations on one item where at least one writes.", orderIndex: 7 },
  { id: "gate-core-cs-database-normalization-transactions-q09", topicId: "gate-core-cs-database-normalization-transactions", text: "Two-Phase Locking (2PL) guarantees:", optionA: "Conflict serializability", optionB: "Deadlock freedom", optionC: "No lost updates only", optionD: "Atomicity only", correctOption: "A", explanation: "2PL guarantees conflict-serializable schedules (though not deadlock freedom).", orderIndex: 8 },
  { id: "gate-core-cs-database-normalization-transactions-q10", topicId: "gate-core-cs-database-normalization-transactions", text: "Strict 2PL additionally prevents:", optionA: "Cascading rollbacks", optionB: "Deadlocks", optionC: "Partial dependencies", optionD: "Internal fragmentation", correctOption: "A", explanation: "Strict 2PL holds write locks until commit, avoiding cascading aborts.", orderIndex: 9 },
  { id: "gate-core-cs-database-normalization-transactions-q11", topicId: "gate-core-cs-database-normalization-transactions", text: "A candidate key is a minimal set of attributes that:", optionA: "Functionally determines all attributes", optionB: "Contains only numeric fields", optionC: "Is always a single column", optionD: "Allows duplicate rows", correctOption: "A", explanation: "A candidate key minimally determines every attribute of the relation.", orderIndex: 10 },
  { id: "gate-core-cs-database-normalization-transactions-q12", topicId: "gate-core-cs-database-normalization-transactions", text: "Atomicity of a transaction guarantees that:", optionA: "All operations execute or none do", optionB: "Data types match", optionC: "The schedule is serial", optionD: "Locks are released early", correctOption: "A", explanation: "Atomicity means a transaction is all-or-nothing.", orderIndex: 11 },

  // ── TCP/IP & Subnetting ──
  { id: "gate-core-cs-tcp-ip-subnetting-q01", topicId: "gate-core-cs-tcp-ip-subnetting", text: "How many layers does the TCP/IP model have?", optionA: "4", optionB: "5", optionC: "7", optionD: "3", correctOption: "A", explanation: "The TCP/IP model has 4 layers; OSI has 7.", orderIndex: 0 },
  { id: "gate-core-cs-tcp-ip-subnetting-q02", topicId: "gate-core-cs-tcp-ip-subnetting", text: "Which transport protocol is connection-oriented and reliable?", optionA: "TCP", optionB: "UDP", optionC: "IP", optionD: "ICMP", correctOption: "A", explanation: "TCP is reliable and connection-oriented; UDP is neither.", orderIndex: 1 },
  { id: "gate-core-cs-tcp-ip-subnetting-q03", topicId: "gate-core-cs-tcp-ip-subnetting", text: "The TCP connection setup uses a:", optionA: "Three-way handshake (SYN, SYN-ACK, ACK)", optionB: "Two-way handshake", optionC: "Four-way broadcast", optionD: "Single SYN packet", correctOption: "A", explanation: "TCP establishes a connection with the SYN, SYN-ACK, ACK handshake.", orderIndex: 2 },
  { id: "gate-core-cs-tcp-ip-subnetting-q04", topicId: "gate-core-cs-tcp-ip-subnetting", text: "How many bits are in an IPv4 address?", optionA: "32", optionB: "64", optionC: "128", optionD: "16", correctOption: "A", explanation: "An IPv4 address is 32 bits (IPv6 is 128 bits).", orderIndex: 3 },
  { id: "gate-core-cs-tcp-ip-subnetting-q06", topicId: "gate-core-cs-tcp-ip-subnetting", text: "Two addresses in every subnet are reserved for:", optionA: "Network and broadcast", optionB: "Gateway and DNS", optionC: "Source and destination", optionD: "TCP and UDP", correctOption: "A", explanation: "The network (all-0 host) and broadcast (all-1 host) addresses are reserved.", orderIndex: 5 },
  { id: "gate-core-cs-tcp-ip-subnetting-q07", topicId: "gate-core-cs-tcp-ip-subnetting", text: "The subnet mask for a /26 network is:", optionA: "255.255.255.192", optionB: "255.255.255.0", optionC: "255.255.255.128", optionD: "255.255.255.224", correctOption: "A", explanation: "/26 sets 26 bits: the last octet is 11000000 = 192.", orderIndex: 6 },
  { id: "gate-core-cs-tcp-ip-subnetting-q08b", topicId: "gate-core-cs-tcp-ip-subnetting", text: "DNS primarily runs over which transport protocol for typical queries?", optionA: "UDP", optionB: "TCP only", optionC: "ICMP", optionD: "ARP", correctOption: "A", explanation: "DNS queries typically use UDP for low overhead, falling back to TCP.", orderIndex: 8 },
  { id: "gate-core-cs-tcp-ip-subnetting-q10", topicId: "gate-core-cs-tcp-ip-subnetting", text: "How many usable hosts are in a /26 subnet?", optionA: "62", optionB: "64", optionC: "30", optionD: "126", correctOption: "A", explanation: "2^(32−26) − 2 = 64 − 2 = 62 usable hosts.", orderIndex: 9 },
  { id: "gate-core-cs-tcp-ip-subnetting-q11", topicId: "gate-core-cs-tcp-ip-subnetting", text: "Which layer of the TCP/IP model does IP belong to?", optionA: "Network (Internet) layer", optionB: "Transport layer", optionC: "Application layer", optionD: "Link layer", correctOption: "A", explanation: "IP operates at the network (internet) layer of the TCP/IP model.", orderIndex: 10 },
  { id: "gate-core-cs-tcp-ip-subnetting-q12", topicId: "gate-core-cs-tcp-ip-subnetting", text: "Which is an advantage of UDP over TCP?", optionA: "Lower overhead / latency", optionB: "Guaranteed delivery", optionC: "Ordered byte stream", optionD: "Congestion control", correctOption: "A", explanation: "UDP's lack of handshakes and acknowledgements gives lower overhead and latency.", orderIndex: 11 },

  // ── Regular Languages & Finite Automata ──
  { id: "gate-core-cs-regular-languages-finite-automata-q01", topicId: "gate-core-cs-regular-languages-finite-automata", text: "A DFA differs from an NFA in that a DFA has:", optionA: "Exactly one transition per state-symbol pair", optionB: "Epsilon transitions", optionC: "Multiple start states", optionD: "An infinite alphabet", correctOption: "A", explanation: "A DFA defines exactly one transition for each (state, symbol) pair.", orderIndex: 0 },
  { id: "gate-core-cs-regular-languages-finite-automata-q02", topicId: "gate-core-cs-regular-languages-finite-automata", text: "In terms of language recognition power, DFAs and NFAs are:", optionA: "Equivalent", optionB: "NFAs strictly stronger", optionC: "DFAs strictly stronger", optionD: "Incomparable", correctOption: "A", explanation: "Every NFA has an equivalent DFA, so both recognise exactly the regular languages.", orderIndex: 1 },
  { id: "gate-core-cs-regular-languages-finite-automata-q03", topicId: "gate-core-cs-regular-languages-finite-automata", text: "Converting an n-state NFA to a DFA may require up to how many states?", optionA: "2ⁿ", optionB: "n", optionC: "n²", optionD: "n!", correctOption: "A", explanation: "Subset construction can produce up to 2ⁿ DFA states.", orderIndex: 2 },
  { id: "gate-core-cs-regular-languages-finite-automata-q04", topicId: "gate-core-cs-regular-languages-finite-automata", text: "Which tool proves that a language is NOT regular?", optionA: "The pumping lemma", optionB: "Subset construction", optionC: "Thompson's construction", optionD: "Kleene's theorem", correctOption: "A", explanation: "The pumping lemma for regular languages is used to prove non-regularity.", orderIndex: 3 },
  { id: "gate-core-cs-regular-languages-finite-automata-q05", topicId: "gate-core-cs-regular-languages-finite-automata", text: "The language { aⁿbⁿ : n ≥ 0 } is:", optionA: "Not regular", optionB: "Regular", optionC: "Finite", optionD: "Recognised by a DFA", correctOption: "A", explanation: "It needs unbounded counting, so no finite automaton recognises it.", orderIndex: 4 },
  { id: "gate-core-cs-regular-languages-finite-automata-q06", topicId: "gate-core-cs-regular-languages-finite-automata", text: "Regular languages are closed under all of the following EXCEPT:", optionA: "None — they are closed under union, intersection and complement", optionB: "Union", optionC: "Complement", optionD: "Intersection", correctOption: "A", explanation: "Regular languages are closed under union, intersection and complement.", orderIndex: 5 },
  { id: "gate-core-cs-regular-languages-finite-automata-q07", topicId: "gate-core-cs-regular-languages-finite-automata", text: "The Myhill–Nerode theorem characterizes regular languages by having:", optionA: "Finitely many equivalence classes", optionB: "A context-free grammar", optionC: "An ambiguous grammar", optionD: "A pushdown stack", correctOption: "A", explanation: "A language is regular iff it has finitely many Myhill–Nerode classes.", orderIndex: 6 },
  { id: "gate-core-cs-regular-languages-finite-automata-q08", topicId: "gate-core-cs-regular-languages-finite-automata", text: "A DFA is formally defined as a tuple with how many components?", optionA: "5", optionB: "3", optionC: "4", optionD: "6", correctOption: "A", explanation: "A DFA is the 5-tuple (Q, Σ, δ, q₀, F).", orderIndex: 7 },
  { id: "gate-core-cs-regular-languages-finite-automata-q09", topicId: "gate-core-cs-regular-languages-finite-automata", text: "Which describe exactly the same class of languages?", optionA: "Regular expressions and finite automata", optionB: "CFGs and PDAs", optionC: "Turing machines and PDAs", optionD: "LL and LR grammars", correctOption: "A", explanation: "Regular expressions, DFAs and NFAs all describe the regular languages.", orderIndex: 8 },
  { id: "gate-core-cs-regular-languages-finite-automata-q10", topicId: "gate-core-cs-regular-languages-finite-automata", text: "The Myhill–Nerode relation also yields:", optionA: "The minimum-state DFA", optionB: "The maximum NFA", optionC: "An ambiguous grammar", optionD: "A non-deterministic PDA", correctOption: "A", explanation: "The equivalence classes correspond to states of the minimal DFA.", orderIndex: 9 },
  { id: "gate-core-cs-regular-languages-finite-automata-q11", topicId: "gate-core-cs-regular-languages-finite-automata", text: "An NFA may include which feature that a DFA cannot?", optionA: "Epsilon (ε) transitions", optionB: "A start state", optionC: "Accepting states", optionD: "A finite alphabet", correctOption: "A", explanation: "NFAs allow ε-moves and multiple transitions; DFAs do not.", orderIndex: 10 },
  { id: "gate-core-cs-regular-languages-finite-automata-q12", topicId: "gate-core-cs-regular-languages-finite-automata", text: "The set of regular languages over an alphabet is closed under Kleene star. This means:", optionA: "L* is regular if L is regular", optionB: "L* is always finite", optionC: "L* is context-free only", optionD: "L* is never regular", correctOption: "A", explanation: "Closure under star guarantees L* is regular whenever L is.", orderIndex: 11 },

  // ── Context-Free Grammars & Parsing ──
  { id: "gate-core-cs-context-free-grammars-parsing-q01", topicId: "gate-core-cs-context-free-grammars-parsing", text: "A context-free grammar restricts every production to have:", optionA: "A single non-terminal on the left", optionB: "A single terminal on the left", optionC: "No non-terminals", optionD: "Only terminals on the right", correctOption: "A", explanation: "In a CFG each production's left side is one non-terminal.", orderIndex: 0 },
  { id: "gate-core-cs-context-free-grammars-parsing-q02", topicId: "gate-core-cs-context-free-grammars-parsing", text: "Context-free languages are recognised by:", optionA: "Pushdown automata", optionB: "Finite automata", optionC: "Linear-bounded automata", optionD: "Combinational circuits", correctOption: "A", explanation: "A pushdown automaton's stack lets it recognise context-free languages.", orderIndex: 1 },
  { id: "gate-core-cs-context-free-grammars-parsing-q03", topicId: "gate-core-cs-context-free-grammars-parsing", text: "The language { aⁿbⁿ } is context-free because a PDA can:", optionA: "Use its stack to count", optionB: "Use only its states", optionC: "Run in constant space", optionD: "Avoid a stack", correctOption: "A", explanation: "The stack stores the count of a's to match against b's.", orderIndex: 2 },
  { id: "gate-core-cs-context-free-grammars-parsing-q04", topicId: "gate-core-cs-context-free-grammars-parsing", text: "A grammar is ambiguous if some string has:", optionA: "Two distinct parse trees", optionB: "No derivation", optionC: "Only one derivation", optionD: "Only terminals", correctOption: "A", explanation: "Ambiguity means a string has more than one parse tree / leftmost derivation.", orderIndex: 3 },
  { id: "gate-core-cs-context-free-grammars-parsing-q05", topicId: "gate-core-cs-context-free-grammars-parsing", text: "Context-free languages are NOT closed under:", optionA: "Intersection", optionB: "Union", optionC: "Concatenation", optionD: "Kleene star", correctOption: "A", explanation: "CFLs are closed under union, concatenation and star, but not intersection.", orderIndex: 4 },
  { id: "gate-core-cs-context-free-grammars-parsing-q06", topicId: "gate-core-cs-context-free-grammars-parsing", text: "Top-down LL parsers require the grammar to be free of:", optionA: "Left recursion", optionB: "Right recursion", optionC: "Terminals", optionD: "Epsilon rules", correctOption: "A", explanation: "LL parsers cannot handle left recursion; it must be removed first.", orderIndex: 5 },
  { id: "gate-core-cs-context-free-grammars-parsing-q07", topicId: "gate-core-cs-context-free-grammars-parsing", text: "Which parsing family is generally more powerful?", optionA: "Bottom-up (LR)", optionB: "Top-down (LL)", optionC: "They are identical", optionD: "Recursive descent only", correctOption: "A", explanation: "LR (bottom-up) parsers handle a strictly larger grammar class than LL.", orderIndex: 6 },
  { id: "gate-core-cs-context-free-grammars-parsing-q08", topicId: "gate-core-cs-context-free-grammars-parsing", text: "FIRST and FOLLOW sets are used to build:", optionA: "Predictive parsing tables", optionB: "Symbol tables", optionC: "Register allocations", optionD: "Page tables", correctOption: "A", explanation: "FIRST and FOLLOW sets drive construction of LL predictive-parse tables.", orderIndex: 7 },
  { id: "gate-core-cs-context-free-grammars-parsing-q09", topicId: "gate-core-cs-context-free-grammars-parsing", text: "Transforming rules to defer a common-prefix choice is called:", optionA: "Left factoring", optionB: "Left recursion", optionC: "Loop unrolling", optionD: "Constant folding", correctOption: "A", explanation: "Left factoring rewrites productions sharing a prefix for predictive parsing.", orderIndex: 8 },
  { id: "gate-core-cs-context-free-grammars-parsing-q10", topicId: "gate-core-cs-context-free-grammars-parsing", text: "A deterministic PDA is:", optionA: "Strictly weaker than a general PDA", optionB: "Equal to a general PDA", optionC: "Stronger than a Turing machine", optionD: "Equivalent to a DFA", correctOption: "A", explanation: "Deterministic PDAs recognise a proper subset of the context-free languages.", orderIndex: 9 },
  { id: "gate-core-cs-context-free-grammars-parsing-q11", topicId: "gate-core-cs-context-free-grammars-parsing", text: "A parse tree's leaves, read left to right, spell out:", optionA: "The derived string (yield)", optionB: "The start symbol", optionC: "The FOLLOW set", optionD: "Only non-terminals", correctOption: "A", explanation: "The yield of a parse tree is the terminal string it derives.", orderIndex: 10 },
  { id: "gate-core-cs-context-free-grammars-parsing-q12", topicId: "gate-core-cs-context-free-grammars-parsing", text: "Which memory structure gives a PDA more power than a finite automaton?", optionA: "A stack", optionB: "A queue", optionC: "A register", optionD: "A cache", correctOption: "A", explanation: "The stack is the extra memory that lifts a PDA above finite automata.", orderIndex: 11 }
];
