import { defineBundle } from "./builder";
import { topUp1 } from "./upsc-exp1";
import { historyTopics, historyMaterials, historyQuestions } from "./upsc-exp2-history";

export const upsc = defineBundle({
  exam: {
    id: "upsc",
    slug: "upsc",
    name: "UPSC Civil Services",
    tagline: "Polity · History · Geography · Economy · Current Affairs",
    orderIndex: 0
  },
  subjects: [
    { id: "upsc-polity", examId: "upsc", name: "Polity", slug: "polity", orderIndex: 0 },
    { id: "upsc-modern-history", examId: "upsc", name: "Modern History", slug: "modern-history", orderIndex: 1 },
    { id: "upsc-geography", examId: "upsc", name: "Geography", slug: "geography", orderIndex: 2 },
    { id: "upsc-economy", examId: "upsc", name: "Economy", slug: "economy", orderIndex: 3 },
    { id: "upsc-current-affairs", examId: "upsc", name: "Current Affairs", slug: "current-affairs", orderIndex: 4 },
    { id: "upsc-ancient-history", examId: "upsc", name: "Ancient History", slug: "ancient-history", orderIndex: 5 },
    { id: "upsc-medieval-history", examId: "upsc", name: "Medieval History", slug: "medieval-history", orderIndex: 6 },
    { id: "upsc-art-and-culture", examId: "upsc", name: "Art & Culture", slug: "art-and-culture", orderIndex: 7 },
    { id: "upsc-environment", examId: "upsc", name: "Environment & Ecology", slug: "environment", orderIndex: 8 },
    { id: "upsc-science-technology", examId: "upsc", name: "Science & Technology", slug: "science-technology", orderIndex: 9 },
    { id: "upsc-international-relations", examId: "upsc", name: "International Relations", slug: "international-relations", orderIndex: 10 },
    { id: "upsc-ethics", examId: "upsc", name: "Ethics, Integrity & Aptitude", slug: "ethics", orderIndex: 11 },
    { id: "upsc-governance", examId: "upsc", name: "Governance & Social Justice", slug: "governance", orderIndex: 12 },
    { id: "upsc-internal-security", examId: "upsc", name: "Internal Security & Disaster Mgmt", slug: "internal-security", orderIndex: 13 }
  ],
  topics: [
    {
      id: "upsc-polity-fundamental-rights",
      subjectId: "upsc-polity",
      name: "Fundamental Rights",
      slug: "fundamental-rights",
      orderIndex: 0
    },
    {
      id: "upsc-polity-parliament-state-legislatures",
      subjectId: "upsc-polity",
      name: "Parliament & State Legislatures",
      slug: "parliament-state-legislatures",
      orderIndex: 1
    },
    {
      id: "upsc-modern-history-revolt-of-1857",
      subjectId: "upsc-modern-history",
      name: "Revolt of 1857",
      slug: "revolt-of-1857",
      orderIndex: 0
    },
    {
      id: "upsc-geography-monsoon-and-climate",
      subjectId: "upsc-geography",
      name: "Monsoon & Climate of India",
      slug: "monsoon-and-climate",
      orderIndex: 0
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy",
      subjectId: "upsc-economy",
      name: "Inflation & Monetary Policy",
      slug: "inflation-and-monetary-policy",
      orderIndex: 0
    },
    {
      id: "upsc-current-affairs-government-schemes",
      subjectId: "upsc-current-affairs",
      name: "Flagship Government Schemes",
      slug: "government-schemes",
      orderIndex: 0
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties",
      subjectId: "upsc-polity",
      name: "DPSP & Fundamental Duties",
      slug: "dpsp-and-fundamental-duties",
      orderIndex: 2
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review",
      subjectId: "upsc-polity",
      name: "Judiciary & Judicial Review",
      slug: "judiciary-and-judicial-review",
      orderIndex: 3
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies",
      subjectId: "upsc-polity",
      name: "Constitutional & Statutory Bodies",
      slug: "constitutional-and-statutory-bodies",
      orderIndex: 4
    },
    {
      id: "upsc-modern-history-moderates-and-extremists",
      subjectId: "upsc-modern-history",
      name: "Moderates & Extremists",
      slug: "moderates-and-extremists",
      orderIndex: 1
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements",
      subjectId: "upsc-modern-history",
      name: "Gandhian Mass Movements",
      slug: "gandhian-mass-movements",
      orderIndex: 2
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements",
      subjectId: "upsc-modern-history",
      name: "Socio-Religious Reform Movements",
      slug: "socio-religious-reform-movements",
      orderIndex: 3
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers",
      subjectId: "upsc-geography",
      name: "Indian Physiography & Rivers",
      slug: "indian-physiography-and-rivers",
      orderIndex: 1
    },
    {
      id: "upsc-geography-soils-and-agriculture",
      subjectId: "upsc-geography",
      name: "Soils & Agriculture",
      slug: "soils-and-agriculture",
      orderIndex: 2
    },
    {
      id: "upsc-geography-world-geography-landforms",
      subjectId: "upsc-geography",
      name: "World Geography: Landforms",
      slug: "world-geography-landforms",
      orderIndex: 3
    },
    {
      id: "upsc-economy-national-income-and-gdp",
      subjectId: "upsc-economy",
      name: "National Income & GDP",
      slug: "national-income-and-gdp",
      orderIndex: 1
    },
    {
      id: "upsc-economy-banking-system-and-rbi",
      subjectId: "upsc-economy",
      name: "Banking System & RBI",
      slug: "banking-system-and-rbi",
      orderIndex: 2
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy",
      subjectId: "upsc-economy",
      name: "Union Budget & Fiscal Policy",
      slug: "union-budget-and-fiscal-policy",
      orderIndex: 3
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices",
      subjectId: "upsc-current-affairs",
      name: "Key Institutions & Indices",
      slug: "key-institutions-and-indices",
      orderIndex: 1
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news",
      subjectId: "upsc-current-affairs",
      name: "Polity & Economy in the News",
      slug: "polity-and-economy-in-the-news",
      orderIndex: 2
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation",
      subjectId: "upsc-ancient-history",
      name: "Indus Valley Civilisation",
      slug: "indus-valley-civilisation",
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-mauryan-empire",
      subjectId: "upsc-ancient-history",
      name: "Mauryan Empire",
      slug: "mauryan-empire",
      orderIndex: 1
    },
    {
      id: "upsc-ancient-history-gupta-age",
      subjectId: "upsc-ancient-history",
      name: "Gupta Age",
      slug: "gupta-age",
      orderIndex: 2
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism",
      subjectId: "upsc-ancient-history",
      name: "Buddhism & Jainism",
      slug: "buddhism-and-jainism",
      orderIndex: 3
    },
    {
      id: "upsc-medieval-history-delhi-sultanate",
      subjectId: "upsc-medieval-history",
      name: "Delhi Sultanate",
      slug: "delhi-sultanate",
      orderIndex: 0
    },
    {
      id: "upsc-medieval-history-mughal-empire",
      subjectId: "upsc-medieval-history",
      name: "Mughal Empire",
      slug: "mughal-empire",
      orderIndex: 1
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements",
      subjectId: "upsc-medieval-history",
      name: "Bhakti & Sufi Movements",
      slug: "bhakti-and-sufi-movements",
      orderIndex: 2
    },
    {
      id: "upsc-art-and-culture-temple-architecture",
      subjectId: "upsc-art-and-culture",
      name: "Temple Architecture",
      slug: "temple-architecture",
      orderIndex: 0
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms",
      subjectId: "upsc-art-and-culture",
      name: "Classical Dance Forms",
      slug: "classical-dance-forms",
      orderIndex: 1
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools",
      subjectId: "upsc-art-and-culture",
      name: "Indian Painting Schools",
      slug: "indian-painting-schools",
      orderIndex: 2
    },
    {
      id: "upsc-environment-biodiversity-and-conservation",
      subjectId: "upsc-environment",
      name: "Biodiversity & Conservation",
      slug: "biodiversity-and-conservation",
      orderIndex: 0
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements",
      subjectId: "upsc-environment",
      name: "Climate Change & Global Agreements",
      slug: "climate-change-and-global-agreements",
      orderIndex: 1
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains",
      subjectId: "upsc-environment",
      name: "Ecosystems & Food Chains",
      slug: "ecosystems-and-food-chains",
      orderIndex: 2
    },
    {
      id: "upsc-science-technology-space-technology-isro",
      subjectId: "upsc-science-technology",
      name: "Space Technology (ISRO)",
      slug: "space-technology-isro",
      orderIndex: 0
    },
    {
      id: "upsc-science-technology-biotechnology-basics",
      subjectId: "upsc-science-technology",
      name: "Biotechnology Basics",
      slug: "biotechnology-basics",
      orderIndex: 1
    },
    {
      id: "upsc-science-technology-defence-technology",
      subjectId: "upsc-science-technology",
      name: "Defence Technology",
      slug: "defence-technology",
      orderIndex: 2
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours",
      subjectId: "upsc-international-relations",
      name: "India & Its Neighbours",
      slug: "india-and-its-neighbours",
      orderIndex: 0
    },
    {
      id: "upsc-international-relations-major-global-groupings",
      subjectId: "upsc-international-relations",
      name: "Major Global Groupings",
      slug: "major-global-groupings",
      orderIndex: 1
    },
    {
      id: "upsc-polity-president-pm-and-council-of-ministers",
      subjectId: "upsc-polity",
      name: "President, PM & Council of Ministers",
      slug: "president-pm-and-council-of-ministers",
      orderIndex: 5
    },
    {
      id: "upsc-polity-federalism-and-centre-state-relations",
      subjectId: "upsc-polity",
      name: "Federalism & Centre-State Relations",
      slug: "federalism-and-centre-state-relations",
      orderIndex: 6
    },
    {
      id: "upsc-polity-panchayati-raj-and-local-government",
      subjectId: "upsc-polity",
      name: "Panchayati Raj & Local Government",
      slug: "panchayati-raj-and-local-government",
      orderIndex: 7
    },
    {
      id: "upsc-polity-emergency-provisions-and-amendments",
      subjectId: "upsc-polity",
      name: "Emergency Provisions & Amendments",
      slug: "emergency-provisions-and-amendments",
      orderIndex: 8
    },
    {
      id: "upsc-economy-taxation-and-gst",
      subjectId: "upsc-economy",
      name: "Taxation & GST",
      slug: "taxation-and-gst",
      orderIndex: 4
    },
    {
      id: "upsc-economy-poverty-unemployment-and-inclusive-growth",
      subjectId: "upsc-economy",
      name: "Poverty, Unemployment & Inclusive Growth",
      slug: "poverty-unemployment-and-inclusive-growth",
      orderIndex: 5
    },
    {
      id: "upsc-economy-external-sector-and-trade",
      subjectId: "upsc-economy",
      name: "External Sector & Trade",
      slug: "external-sector-and-trade",
      orderIndex: 6
    },
    {
      id: "upsc-economy-agriculture-and-food-security",
      subjectId: "upsc-economy",
      name: "Agriculture & Food Security",
      slug: "agriculture-and-food-security",
      orderIndex: 7
    },
    {
      id: "upsc-international-relations-important-international-organizations",
      subjectId: "upsc-international-relations",
      name: "Important International Organizations",
      slug: "important-international-organizations",
      orderIndex: 2
    },
    {
      id: "upsc-international-relations-indias-foreign-policy-and-diaspora",
      subjectId: "upsc-international-relations",
      name: "India's Foreign Policy & Diaspora",
      slug: "indias-foreign-policy-and-diaspora",
      orderIndex: 3
    },
    {
      id: "upsc-ethics-ethics-and-human-interface",
      subjectId: "upsc-ethics",
      name: "Ethics & Human Interface",
      slug: "ethics-and-human-interface",
      orderIndex: 0
    },
    {
      id: "upsc-ethics-attitude-and-emotional-intelligence",
      subjectId: "upsc-ethics",
      name: "Attitude & Emotional Intelligence",
      slug: "attitude-and-emotional-intelligence",
      orderIndex: 1
    },
    {
      id: "upsc-ethics-moral-thinkers-and-philosophers",
      subjectId: "upsc-ethics",
      name: "Moral Thinkers & Philosophers",
      slug: "moral-thinkers-and-philosophers",
      orderIndex: 2
    },
    {
      id: "upsc-ethics-public-civil-service-values",
      subjectId: "upsc-ethics",
      name: "Public/Civil Service Values",
      slug: "public-civil-service-values",
      orderIndex: 3
    },
    {
      id: "upsc-ethics-probity-in-governance",
      subjectId: "upsc-ethics",
      name: "Probity in Governance",
      slug: "probity-in-governance",
      orderIndex: 4
    },
    {
      id: "upsc-ethics-case-studies-approach",
      subjectId: "upsc-ethics",
      name: "Case Studies Approach",
      slug: "case-studies-approach",
      orderIndex: 5
    },
    {
      id: "upsc-governance-governance-and-e-governance",
      subjectId: "upsc-governance",
      name: "Governance & e-Governance",
      slug: "governance-and-e-governance",
      orderIndex: 0
    },
    {
      id: "upsc-governance-transparency-rti-and-accountability",
      subjectId: "upsc-governance",
      name: "Transparency, RTI & Accountability",
      slug: "transparency-rti-and-accountability",
      orderIndex: 1
    },
    {
      id: "upsc-governance-welfare-schemes-and-vulnerable-sections",
      subjectId: "upsc-governance",
      name: "Welfare Schemes & Vulnerable Sections",
      slug: "welfare-schemes-and-vulnerable-sections",
      orderIndex: 2
    },
    {
      id: "upsc-governance-health-education-and-human-resources",
      subjectId: "upsc-governance",
      name: "Health, Education & Human Resources",
      slug: "health-education-and-human-resources",
      orderIndex: 3
    },
    {
      id: "upsc-internal-security-internal-security-challenges",
      subjectId: "upsc-internal-security",
      name: "Internal Security Challenges",
      slug: "internal-security-challenges",
      orderIndex: 0
    },
    {
      id: "upsc-internal-security-cyber-security-and-money-laundering",
      subjectId: "upsc-internal-security",
      name: "Cyber Security & Money Laundering",
      slug: "cyber-security-and-money-laundering",
      orderIndex: 1
    },
    {
      id: "upsc-internal-security-border-management",
      subjectId: "upsc-internal-security",
      name: "Border Management",
      slug: "border-management",
      orderIndex: 2
    },
    {
      id: "upsc-internal-security-disaster-management",
      subjectId: "upsc-internal-security",
      name: "Disaster Management",
      slug: "disaster-management",
      orderIndex: 3
    },
    ...historyTopics
  ],
  materials: [
    {
      id: "upsc-polity-fundamental-rights-m01",
      topicId: "upsc-polity-fundamental-rights",
      title: "Fundamental Rights — Articles 12–35",
      content: `**Fundamental Rights** are enshrined in **Part III (Articles 12–35)** of the Constitution and are largely borrowed from the **US Bill of Rights**. They are justiciable — enforceable directly in courts under **Article 32**, which Dr. Ambedkar called the "**heart and soul**" of the Constitution.

## The Six Rights
Originally seven; the **Right to Property** was removed by the **44th Amendment (1978)** and made a legal right under **Article 300A**.

| Right | Articles |
| --- | --- |
| Right to Equality | 14–18 |
| Right to Freedom | 19–22 |
| Right against Exploitation | 23–24 |
| Right to Freedom of Religion | 25–28 |
| Cultural & Educational Rights | 29–30 |
| Right to Constitutional Remedies | 32 |

## Key Points
- **Article 14** — equality before law and equal protection of laws.
- **Article 19** guarantees **six freedoms** (speech, assembly, association, movement, residence, profession) — reasonable restrictions apply.
- **Article 21** — protection of life and personal liberty; the **Maneka Gandhi (1978)** case expanded it to include due process.
- **Article 21A** — Right to Education (6–14 years), added by the **86th Amendment (2002)**.
- **Article 32** offers five writs: *Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto*.

### Available against whom
Most FRs are available only against the **State**, but **Articles 15(2), 17, 23 and 24** are enforceable against **private individuals** too. During a national emergency, **Articles 20 and 21 can never be suspended** (44th Amendment).`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-polity-parliament-state-legislatures-m01",
      topicId: "upsc-polity-parliament-state-legislatures",
      title: "Parliament & State Legislatures",
      content: `**Parliament** consists of the **President**, the **Lok Sabha** (House of the People) and the **Rajya Sabha** (Council of States). Though the President is not a member of either House, no bill becomes law without assent.

## Composition
| House | Max Strength | Term |
| --- | --- | --- |
| Lok Sabha | 552 | 5 years |
| Rajya Sabha | 250 | Permanent, 1/3 retire every 2 years |

- **Lok Sabha** members are directly elected; a member must be **at least 25 years** old.
- **Rajya Sabha** members are elected by state legislatures via **single transferable vote**; minimum age **30 years**.
- **Money Bills (Article 110)** can originate **only in the Lok Sabha**; the Rajya Sabha can delay them by a maximum of **14 days**.

## Key Provisions
- A **Joint Sitting (Article 108)** resolves a deadlock on ordinary bills and is presided over by the **Speaker of the Lok Sabha**.
- **Quorum** for either House is **one-tenth** of total members.
- The **Vice-President** is the ex-officio Chairman of the Rajya Sabha.

### State Legislatures
- A state may have a **bicameral** legislature (Vidhan Sabha + Vidhan Parishad) or be **unicameral**.
- The **Legislative Council (Vidhan Parishad)** can be created or abolished by Parliament under **Article 169** on a state resolution passed by special majority.
- **Anti-defection** is governed by the **Tenth Schedule**, added by the **52nd Amendment (1985)**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-modern-history-revolt-of-1857-m01",
      topicId: "upsc-modern-history-revolt-of-1857",
      title: "The Revolt of 1857",
      content: `**The Revolt of 1857** — also called the **First War of Independence** (V.D. Savarkar) or the **Sepoy Mutiny** — began at **Meerut on 10 May 1857** and is the great watershed of modern Indian history.

## Immediate & Underlying Causes
- The immediate trigger was the **greased cartridges** of the new **Enfield rifle**, rumoured to be coated with **cow and pig fat**.
- **Political:** Dalhousie's **Doctrine of Lapse** annexed Satara, Jhansi and Nagpur; Awadh was annexed in 1856 on grounds of misgovernment.
- **Economic:** ruin of artisans, heavy land revenue, drain of wealth.
- **Military:** the **General Service Enlistment Act (1856)** and discrimination against Indian sepoys.

## Centres and Leaders
| Centre | Leader |
| --- | --- |
| Delhi | Bahadur Shah Zafar / Bakht Khan |
| Kanpur | Nana Saheb / Tantia Tope |
| Lucknow | Begum Hazrat Mahal |
| Jhansi | Rani Lakshmibai |
| Bihar (Jagdishpur) | Kunwar Singh |

## Consequences
- **Mangal Pandey** fired the first shot at Barrackpore (29 March 1857).
- The revolt ended Company rule: the **Government of India Act, 1858** transferred power to the **British Crown**.
- **Queen Victoria's Proclamation (1858)** promised non-interference in religion and the end of expansion.

### Why It Failed
- No unified leadership, limited geographic spread, and many princely states (Hyderabad, Scindia) stayed loyal to the British.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-geography-monsoon-and-climate-m01",
      topicId: "upsc-geography-monsoon-and-climate",
      title: "Indian Monsoon & Climate",
      content: `**The Indian monsoon** is a seasonal reversal of wind that gives the subcontinent a **tropical monsoon (Köppen "Am/Aw")** climate. The word derives from the Arabic *mausim*, meaning season.

## Mechanism
- In summer, intense heating creates a **low-pressure trough** over northwest India, drawing in moisture-laden **South-West Monsoon** winds from the **Indian Ocean**.
- The **Inter-Tropical Convergence Zone (ITCZ)** shifts north, and the **Tropical Easterly Jet** and a strong **El Niño** weaken the monsoon, while **La Niña** strengthens it.
- The **branch** split: the **Arabian Sea branch** and the **Bay of Bengal branch** converge over the Ganga plain.

## Seasons (IMD)
| Season | Months |
| --- | --- |
| Cold Weather | Dec–Feb |
| Hot Weather | Mar–May |
| South-West Monsoon (Advancing) | Jun–Sep |
| Retreating Monsoon | Oct–Nov |

## Key Facts
- The monsoon usually **bursts over Kerala around 1 June**.
- **Mawsynram (Meghalaya)** is the wettest place on Earth; the Shillong plateau funnels the Bay of Bengal branch.
- **Western disturbances** bring winter rain to Punjab and Haryana, vital for the **rabi** crop.
- **October heat ("October Heat")** is the humid, oppressive weather during the retreating monsoon.

### Phenomena
- **Mango showers** (pre-monsoon rain in Kerala/Karnataka) and **Kal Baisakhi / Norwesters** in Bengal aid tea, coffee and jute.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-m01",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      title: "Inflation & Monetary Policy",
      content: `**Inflation** is a sustained rise in the general price level, eroding the purchasing power of money. In India it is measured chiefly by two indices.

## Measuring Inflation
| Index | Base Year | Released By |
| --- | --- | --- |
| CPI (Combined) | 2012 | NSO / MoSPI |
| WPI | 2011-12 | Office of Economic Adviser |

- **CPI** is the headline measure for the inflation target; **WPI** excludes services.
- **Core inflation** strips out volatile **food and fuel** prices.

## Monetary Policy Framework
- Under the amended **RBI Act, the Monetary Policy Committee (MPC)** — 6 members — sets the **repo rate**.
- The flexible inflation target is **4% ± 2%** (i.e. 2%–6%), reviewed every five years.
- Tools: **Repo rate, Reverse repo, CRR, SLR, MSF** and **Open Market Operations (OMO)**.

### Repo vs Reverse Repo
- **Repo rate** — rate at which RBI lends to banks (raising it fights inflation).
- **Reverse repo** — rate at which RBI borrows from banks.

## Types of Inflation
- **Demand-pull** — too much money chasing too few goods.
- **Cost-push** — rising input costs (e.g. crude oil).
- **Stagflation** — high inflation with stagnant growth and high unemployment.

A **moderate, predictable** inflation (creeping inflation) is considered healthy as it encourages investment, while **deflation** can deepen a recession.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-current-affairs-government-schemes-m01",
      topicId: "upsc-current-affairs-government-schemes",
      title: "Flagship Government Schemes",
      content: `**Government schemes** are a high-yield, recurring theme. Know the **ministry, year and objective** of each flagship programme.

## Financial Inclusion & Welfare
- **PM Jan Dhan Yojana (2014)** — universal, no-frills bank accounts with **RuPay** debit cards and overdraft.
- **Ayushman Bharat — PM-JAY (2018)** — health cover of **₹5 lakh** per family per year, the world's largest health assurance scheme.
- **PM-KISAN (2019)** — income support of **₹6,000/year** in three instalments to farmer families.

## Housing, Sanitation & Energy
| Scheme | Aim |
| --- | --- |
| PM Awas Yojana | Housing for all |
| Swachh Bharat Mission | Open-defecation-free India |
| Ujjwala Yojana | Free LPG connections to BPL women |
| Saubhagya | Universal household electrification |

## Skilling & Employment
- **MGNREGA (2005)** guarantees **100 days** of wage employment to rural households.
- **Skill India / PMKVY** offers short-term skill training.
- **Make in India** and **PLI (Production-Linked Incentive)** schemes boost domestic manufacturing.

### Direct Benefit Transfer
- **DBT** uses the **JAM trinity** — *Jan Dhan, Aadhaar, Mobile* — to plug leakages by transferring subsidies straight to bank accounts.

When revising, link each scheme to the relevant **ministry** and the **target beneficiary group**, as questions often pair a scheme with its wrong ministry as a distractor.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-m01",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      title: "DPSP & Fundamental Duties",
      content: `**Directive Principles of State Policy (DPSP)** are listed in **Part IV (Articles 36–51)** and were borrowed from the **Irish Constitution**. Unlike Fundamental Rights, they are **non-justiciable** but **fundamental in the governance** of the country.

## Classification
| Type | Example Article |
| --- | --- |
| Socialistic | Article 39 (equal pay, resources) |
| Gandhian | Article 40 (panchayats), 43 (cottage industry) |
| Liberal-Intellectual | Article 44 (Uniform Civil Code), 48 |

- **Article 39A** — equal justice and free legal aid (added by 42nd Amendment).
- **Article 45** — early childhood care below 6 years.
- **Article 50** — separation of judiciary from executive.

## Fundamental Duties
- Added by the **42nd Amendment (1976)** on the recommendation of the **Swaran Singh Committee**, inspired by the **USSR Constitution**.
- Originally **ten**; the **86th Amendment (2002)** added the **eleventh** — a parent's duty to provide education to a child aged 6–14.
- They are listed in **Part IVA, Article 51A** and are **non-justiciable**.

### Conflict Resolution
- In **Minerva Mills (1980)**, the Supreme Court held that **balance** between Fundamental Rights and DPSP is part of the **basic structure**.
- The **Kesavananda Bharati (1973)** case established the **Basic Structure doctrine** limiting Parliament's amending power.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-m01",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      title: "Judiciary & Judicial Review",
      content: `India has an **integrated and independent judiciary** with the **Supreme Court** at the apex, followed by **High Courts** and subordinate courts.

## Supreme Court
- Established under **Article 124**; the **CJI plus up to 33 other judges** (sanctioned strength 34).
- A judge holds office until **65 years** of age and can be removed only through **impeachment** under Article 124(4) for proved misbehaviour or incapacity.
- **Article 137** allows the court to **review its own judgments**.

## Jurisdiction
| Type | Article |
| --- | --- |
| Original | 131 |
| Writ | 32 |
| Appellate | 132–136 |
| Advisory | 143 |

## Judicial Review
- **Judicial review** is the power to examine the constitutionality of laws and executive orders; it is part of the **basic structure**.
- The **Collegium System** for appointments evolved from the **Second** and **Third Judges Cases**.
- The **99th Amendment** creating the **NJAC** was struck down in 2015.

### Public Interest Litigation
- **PIL** was pioneered by Justices **P.N. Bhagwati** and **V.R. Krishna Iyer**, relaxing the rule of **locus standi**.
- A **High Court** issues writs under **Article 226**, which is **wider** than Article 32 as it covers legal rights too.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-m01",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      title: "Constitutional & Statutory Bodies",
      content: `A **constitutional body** derives its powers directly from the **Constitution**, whereas a **statutory body** is created by an **Act of Parliament**.

## Constitutional Bodies
| Body | Article |
| --- | --- |
| Election Commission | 324 |
| UPSC | 315 |
| Comptroller & Auditor General (CAG) | 148 |
| Finance Commission | 280 |
| Attorney General | 76 |

- The **CAG** is the guardian of the public purse and audits government accounts.
- The **Finance Commission** is constituted every **five years** to recommend tax devolution between Centre and States.

## Statutory Bodies
- The **National Human Rights Commission (NHRC)** was set up under the **Protection of Human Rights Act, 1993**.
- The **Central Information Commission (CIC)** functions under the **RTI Act, 2005**.
- The **Lokpal** was created under the **Lokpal and Lokayuktas Act, 2013**.

### Recently Elevated
- The **National Commission for Backward Classes (NCBC)** became a **constitutional body** under **Article 338B** via the **102nd Amendment (2018)**.

Distinguish carefully: questions frequently test whether a body is constitutional, statutory, executive, or quasi-judicial in nature.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-m01",
      topicId: "upsc-modern-history-moderates-and-extremists",
      title: "Moderates & Extremists",
      content: `The **Indian National Congress** was founded in **1885** by **A.O. Hume**, with **W.C. Bonnerjee** as its first president. Its early phase (1885–1905) was dominated by the **Moderates**.

## Moderates (1885–1905)
- Leaders: **Dadabhai Naoroji** (Drain Theory), **Gopal Krishna Gokhale**, **Pherozeshah Mehta**, **Surendranath Banerjee**.
- Methods: the **"3 Ps"** — *Petitions, Prayers, Protests* — and constitutional agitation.
- Believed in the **British sense of justice**.

## Extremists (Lal-Bal-Pal)
| Leader | Region |
| --- | --- |
| Lala Lajpat Rai | Punjab |
| Bal Gangadhar Tilak | Maharashtra |
| Bipin Chandra Pal | Bengal |

- Tilak's slogan: **"Swaraj is my birthright and I shall have it."**
- Triggered by the **Partition of Bengal (1905)** and the **Swadeshi Movement**.

## Surat Split (1907)
- The Congress split into Moderates and Extremists at the **Surat session (1907)**.
- They reunited at the **Lucknow Session (1916)**, which also saw the **Lucknow Pact** with the Muslim League.

### Significance
- The Extremists shifted goals from **administrative reform** to **complete Swaraj**, deepening mass participation.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-m01",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      title: "Gandhian Mass Movements",
      content: `**Mahatma Gandhi** returned to India in **1915** and transformed the freedom struggle into a **mass movement** based on **Satyagraha** (truth-force) and **non-violence**.

## Early Satyagrahas
- **Champaran (1917)** — against the **tinkathia** system imposed on indigo cultivators in Bihar.
- **Kheda (1918)** — for remission of land revenue in Gujarat during crop failure.
- **Ahmedabad Mill Strike (1918)** — Gandhi's first **hunger strike**.

## Major Movements
| Movement | Year | Trigger |
| --- | --- | --- |
| Non-Cooperation | 1920–22 | Jallianwala Bagh, Khilafat |
| Civil Disobedience | 1930 | Dandi Salt March |
| Quit India | 1942 | Failure of Cripps Mission |

- The **Non-Cooperation Movement** was withdrawn after the **Chauri Chaura** incident (1922).
- The **Dandi March (12 March–6 April 1930)** broke the salt law, covering about **385 km**.
- The **Quit India Movement** raised the slogan **"Do or Die."**

### Outcomes
- The **Gandhi-Irwin Pact (1931)** led to Congress participation in the **Second Round Table Conference**.
- These movements made the freedom struggle a truly **pan-Indian** phenomenon.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-m01",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      title: "Socio-Religious Reform Movements",
      content: `The **19th century** saw a wave of **socio-religious reform** aimed at eradicating social evils and reviving rational thought, often called the **Indian Renaissance**.

## Key Reformers and Bodies
| Reformer | Organisation | Year |
| --- | --- | --- |
| Raja Ram Mohan Roy | Brahmo Samaj | 1828 |
| Dayananda Saraswati | Arya Samaj | 1875 |
| Swami Vivekananda | Ramakrishna Mission | 1897 |
| Jyotiba Phule | Satyashodhak Samaj | 1873 |

- **Raja Ram Mohan Roy**, the **"Father of Indian Renaissance,"** campaigned against **Sati**, abolished by **Lord William Bentinck** in **1829**.
- **Dayananda Saraswati** gave the slogan **"Back to the Vedas"** and started the **Shuddhi** movement.

## Other Reforms
- **Ishwar Chandra Vidyasagar** championed **widow remarriage** (Act of 1856).
- **Theosophical Society** was founded by **Madame Blavatsky** and **Colonel Olcott** (1875).
- **Aligarh Movement** by **Sir Syed Ahmed Khan** promoted modern education among Muslims.

### Significance
- These movements attacked **caste, untouchability, child marriage** and **purdah**, laying the social base for nationalism.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-m01",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      title: "Indian Physiography & Rivers",
      content: `India's physiography divides into the **Himalayas**, the **Northern Plains**, the **Peninsular Plateau**, the **Coastal Plains**, the **Desert** and the **Islands**.

## The Himalayas
- Three parallel ranges: **Himadri (Greater)**, **Himachal (Lesser)** and **Shiwaliks (Outer)**.
- The **Himadri** holds the highest peaks; **K2 (Godwin Austen)** is the highest in India.
- Longitudinally divided into Punjab, Kumaon, Nepal and Assam Himalayas.

## River Systems
| System | Type | Example |
| --- | --- | --- |
| Himalayan | Perennial | Ganga, Indus, Brahmaputra |
| Peninsular | Seasonal | Godavari, Krishna, Kaveri |

- The **Indus** and **Brahmaputra** are **antecedent** rivers, older than the Himalayas.
- The **Godavari** is the largest peninsular river, called the **"Dakshin Ganga."**
- The **Narmada** and **Tapi** flow **westward** through rift valleys into the Arabian Sea.

### Key Facts
- The **Peninsular Plateau** is the oldest landmass, made of **Gondwana** rocks.
- The **Western Ghats (Sahyadris)** are continuous and higher than the broken **Eastern Ghats**.
- **Anamudi** in the Western Ghats is the highest peak of peninsular India.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-geography-soils-and-agriculture-m01",
      topicId: "upsc-geography-soils-and-agriculture",
      title: "Soils & Agriculture",
      content: `India has a great diversity of **soils**, classified by the **ICAR** into several major groups that determine cropping patterns.

## Major Soil Types
| Soil | Feature | Crops |
| --- | --- | --- |
| Alluvial | Most fertile, plains | Wheat, rice, sugarcane |
| Black (Regur) | Retains moisture, Deccan trap | Cotton |
| Red | Iron-rich, less fertile | Millets, pulses |
| Laterite | Leached, acidic | Tea, coffee, cashew |

- **Alluvial soil** covers about **40%** of land; *khadar* is new alluvium, *bhangar* is old.
- **Black soil** is also called **"black cotton soil"** or **regur**.

## Cropping Seasons
- **Kharif** — sown June–July, harvested Sept–Oct (rice, cotton, maize).
- **Rabi** — sown Oct–Dec, harvested Apr (wheat, gram, mustard).
- **Zaid** — short summer season (watermelon, cucumber).

### Revolutions
- **Green Revolution** — foodgrains (led by **M.S. Swaminathan**, **Norman Borlaug**).
- **White Revolution** — milk (**Operation Flood**, **Verghese Kurien**).
- **Blue Revolution** — fisheries; **Yellow Revolution** — oilseeds.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-geography-world-geography-landforms-m01",
      topicId: "upsc-geography-world-geography-landforms",
      title: "World Geography: Landforms",
      content: `**Landforms** are natural features of the Earth's surface shaped by **endogenic** (internal) and **exogenic** (external) forces acting on the **lithosphere**.

## Earth's Structure
- The **crust**, **mantle** and **core**; the **lithosphere** is broken into **tectonic plates**.
- **Plate tectonics** (Alfred Wegener's **Continental Drift**) explains the movement of plates.

## Plate Boundaries
| Boundary | Result |
| --- | --- |
| Convergent | Mountains, trenches, volcanoes |
| Divergent | Mid-ocean ridges, rift valleys |
| Transform | Earthquakes (e.g. San Andreas Fault) |

- The **Himalayas** formed by the convergence of the **Indian** and **Eurasian** plates.
- The **Pacific Ring of Fire** hosts about **two-thirds** of the world's active volcanoes.

## Volcanoes
- **Active, dormant** and **extinct** types; **lava, ash** and **pyroclasts** are ejected.
- **Mt. Kilimanjaro** (Africa) and **Mauna Loa** (Hawaii) are notable examples.

### Other Landforms
- **Fold mountains** (Himalayas, Andes), **block mountains** (horst and graben), and **plateaus** like the **Tibetan Plateau**, the highest in the world.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-economy-national-income-and-gdp-m01",
      topicId: "upsc-economy-national-income-and-gdp",
      title: "National Income & GDP",
      content: `**National income** measures the total value of goods and services produced by a country in a year. The key aggregate is **Gross Domestic Product (GDP)**.

## Core Concepts
- **GDP** — value of all final goods and services produced **within** a country's borders.
- **GNP** = GDP + net factor income from abroad.
- **NNP** = GNP minus depreciation; **NNP at factor cost** is the **National Income**.

## Key Formulae
| Aggregate | Relation |
| --- | --- |
| GNP | GDP + NFIA |
| NDP | GDP - Depreciation |
| NNP | GNP - Depreciation |

- **Nominal GDP** uses current prices; **Real GDP** uses **constant (base-year) prices**.
- The **GDP deflator** = (Nominal GDP / Real GDP) x 100.

## Measurement in India
- The base year for GDP is **2011-12**, with figures released by the **NSO (MoSPI)**.
- GDP is estimated at **market prices** since 2015, replacing factor cost as headline.
- **Per capita income** = National Income / Population.

### Methods
- Three approaches: **Production (value-added)**, **Income**, and **Expenditure** methods, all yielding the same total in theory.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-economy-banking-system-and-rbi-m01",
      topicId: "upsc-economy-banking-system-and-rbi",
      title: "Banking System & RBI",
      content: `The **Reserve Bank of India (RBI)**, established in **1935** and nationalised in **1949**, is India's **central bank** and the apex monetary authority.

## Functions of RBI
- **Issuer of currency** (except the one-rupee note and coins, issued by the **Finance Ministry**).
- **Banker to the government** and **lender of last resort** to banks.
- **Custodian of foreign exchange reserves**.

## Quantitative Tools
| Tool | Meaning |
| --- | --- |
| CRR | Cash kept with RBI as a ratio of deposits |
| SLR | Liquid assets banks must hold |
| Repo | Rate RBI lends to banks |
| MSF | Emergency overnight borrowing |

- **CRR** has no floor or ceiling since 2006; **SLR** is capped at 40%.

## Bank Types
- **Scheduled Commercial Banks** are listed in the **Second Schedule** of the RBI Act.
- **Public Sector, Private, Foreign, Regional Rural** and **Cooperative** banks form the system.
- **Payments Banks** (e.g. for small deposits) cannot lend or issue credit cards.

### NPAs and Reform
- An asset is a **Non-Performing Asset (NPA)** if interest or principal is overdue for **90 days**.
- The **Insolvency and Bankruptcy Code (IBC), 2016** speeds up resolution of bad loans.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-m01",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      title: "Union Budget & Fiscal Policy",
      content: `The **Union Budget**, or **Annual Financial Statement** under **Article 112**, is the government's statement of estimated receipts and expenditure for a financial year.

## Budget Structure
- Divided into the **Revenue Budget** and the **Capital Budget**.
- **Revenue receipts** are non-debt creating (taxes, dividends); **capital receipts** create liabilities or reduce assets.

## Key Deficits
| Deficit | Formula |
| --- | --- |
| Fiscal Deficit | Total Expenditure - Total Receipts (excl. borrowings) |
| Revenue Deficit | Revenue Expenditure - Revenue Receipts |
| Primary Deficit | Fiscal Deficit - Interest Payments |

- The **Fiscal Deficit** indicates total borrowing needs of the government.

## Fiscal Policy
- **Fiscal policy** uses **taxation** and **public spending** to influence the economy.
- The **FRBM Act, 2003** mandates fiscal discipline and deficit targets.
- **Direct taxes** (income, corporate) are progressive; **indirect taxes** (GST) are regressive.

### GST
- The **Goods and Services Tax**, launched **1 July 2017**, is a destination-based tax governed by the **GST Council (Article 279A)**.
- The **Consolidated Fund (Article 266)** holds all government revenues; withdrawals need parliamentary approval.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-m01",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      title: "Key Institutions & Indices",
      content: `Global **indices** and the **institutions** that publish them are a recurring exam theme. Linking each index to its **releasing body** prevents common errors.

## Major Indices
| Index | Released By |
| --- | --- |
| Human Development Index | UNDP |
| Global Hunger Index | Concern Worldwide / Welthungerhilfe |
| World Happiness Report | SDSN (UN) |
| Ease of Doing Business | World Bank (discontinued) |
| Global Innovation Index | WIPO |

- The **HDI** combines **life expectancy, education** and **per capita income (GNI)**.
- The **Multidimensional Poverty Index (MPI)** is published jointly by **UNDP** and **OPHI**.

## Key Institutions
- **NITI Aayog** (2015) replaced the **Planning Commission** as a policy think-tank.
- The **IMF** publishes the **World Economic Outlook**; the **World Bank** the **World Development Report**.
- The **WEF** (Davos) releases the **Global Gender Gap Report** and **Global Competitiveness Report**.

### Environment Indices
- The **Environmental Performance Index (EPI)** is released by **Yale and Columbia universities**.
- The **WTO** governs global trade rules; the **WHO** is the UN's health body.

Pair each index with the **correct parent organisation**, as wrong pairings are classic distractors.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-m01",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      title: "Polity & Economy in the News",
      content: `Recurring **polity and economy** themes in the news demand a firm grasp of the **constitutional and institutional basis** behind a headline.

## Polity in Focus
- **Anti-defection** disqualifications are decided by the **Presiding Officer** under the **Tenth Schedule**.
- **Money Bill** classification (Article 110) is certified by the **Speaker**, whose decision is final.
- **Governor's discretion** on bills under **Article 200** (assent, withhold, reserve) is a frequent flashpoint.

## Economy in Focus
| Theme | Key Body |
| --- | --- |
| Inflation targeting | RBI / MPC |
| GST rates | GST Council |
| Fiscal transfers | Finance Commission |
| Capital markets | SEBI |

- **SEBI**, set up in **1992**, regulates securities markets and protects investors.
- **Disinvestment** is managed by the **DIPAM** under the Finance Ministry.

## Institutions in News
- The **Election Commission** conducts polls under **Article 324**.
- The **CAG** audits and reports to Parliament under **Article 148**.

### Approach
- For any news item, identify the **constitutional article, statute** or **regulator** that anchors it; that linkage is what the exam tests.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-m01",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      title: "Indus Valley Civilisation",
      content: `The **Indus Valley Civilisation (IVC)**, or **Harappan Civilisation**, flourished around **2600–1900 BCE** in the **Bronze Age** and is the earliest urban culture of the subcontinent.

## Major Sites
| Site | River | Discovered |
| --- | --- | --- |
| Harappa | Ravi | 1921 (Daya Ram Sahni) |
| Mohenjo-daro | Indus | 1922 (R.D. Banerji) |
| Dholavira | Gujarat | 1967-68 |
| Lothal | Gujarat | Dockyard |

- **Mohenjo-daro** means **"Mound of the Dead"** and housed the **Great Bath**.
- **Lothal** had an artificial **dockyard**, evidence of maritime trade.

## Features
- **Town planning** on a **grid pattern** with a **citadel** and **lower town**.
- Advanced **drainage system** and standardised **burnt bricks**.
- The script remains **undeciphered** and was **pictographic**, written **boustrophedon**.

## Economy and Religion
- Trade with **Mesopotamia** (called **Meluhha**); used standardised **weights and measures**.
- Worship of the **Mother Goddess** and a **Pashupati** (proto-Shiva) seal.

### Decline
- Theories include **Aryan invasion, floods, climate change** and the drying of the **Saraswati**. No clear single cause is established.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-mauryan-empire-m01",
      topicId: "upsc-ancient-history-mauryan-empire",
      title: "Mauryan Empire",
      content: `The **Mauryan Empire (322–185 BCE)** was the first **pan-Indian empire**, founded by **Chandragupta Maurya** with the guidance of **Chanakya (Kautilya)**.

## Key Rulers
| Ruler | Note |
| --- | --- |
| Chandragupta | Founder; defeated Seleucus |
| Bindusara | Called "Amitraghata" |
| Ashoka | Kalinga War, spread Buddhism |

- **Chandragupta** later embraced **Jainism** and went to **Shravanabelagola**.
- **Megasthenes**, the Greek envoy, wrote **"Indica"** at Chandragupta's court.

## Ashoka the Great
- The **Kalinga War (261 BCE)** transformed Ashoka, who then propagated **Dhamma**.
- His **edicts** are inscribed in **Brahmi, Kharosthi, Greek** and **Aramaic** scripts.
- The **Lion Capital of Sarnath** is India's **national emblem**.

## Administration
- **Kautilya's Arthashastra** details statecraft, espionage and economy.
- The empire was divided into **provinces** under princes (**Kumaras**).
- A vast **bureaucracy** and **spy network** ensured central control.

### Decline
- Weak successors, financial strain and the assassination of **Brihadratha** by **Pushyamitra Shunga** (185 BCE) ended the dynasty.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-gupta-age-m01",
      topicId: "upsc-ancient-history-gupta-age",
      title: "Gupta Age",
      content: `The **Gupta Age (c. 320–550 CE)** is often called the **"Golden Age of India"** for its achievements in science, art, literature and administration.

## Rulers
| Ruler | Achievement |
| --- | --- |
| Chandragupta I | Founder, married Kumaradevi |
| Samudragupta | "Napoleon of India" (V.A. Smith) |
| Chandragupta II | Vikramaditya; defeated Shakas |

- **Samudragupta's** conquests are recorded in the **Allahabad Pillar (Prayag Prashasti)** by **Harisena**.
- **Fa-Hien**, the Chinese pilgrim, visited during **Chandragupta II's** reign.

## Science and Literature
- **Aryabhata** wrote the **Aryabhatiya**, proposing Earth's rotation and the concept of **zero**.
- **Varahamihira** authored the **Brihat Samhita**; **Kalidasa** wrote **Abhijnanashakuntalam**.
- The **decimal system** and advances in **metallurgy** (Mehrauli **Iron Pillar**) flourished.

## Art and Architecture
- The **Ajanta cave paintings** and **Nalanda University** reached their peak.
- Temple architecture in the **Nagara style** began to develop.

### Decline
- Invasions by the **Hunas** (led by **Toramana** and **Mihirakula**) and weak successors caused collapse by the mid-6th century.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-m01",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      title: "Buddhism & Jainism",
      content: `Around the **6th century BCE**, **Buddhism** and **Jainism** emerged as **heterodox (nastika)** movements protesting against Brahmanical ritualism.

## Buddhism
- Founded by **Gautama Buddha** (Siddhartha), born at **Lumbini** (c. 563 BCE); attained enlightenment at **Bodh Gaya**.
- The **Four Noble Truths** and the **Eightfold Path** form its core; it follows the **Middle Path**.
- First sermon (**Dharmachakra Pravartana**) was at **Sarnath**.

## Jainism
| Tirthankara | Symbol |
| --- | --- |
| Rishabhanatha | First, the bull |
| Parshvanatha | 23rd |
| Mahavira | 24th, the lion |

- **Mahavira** preached the **Three Jewels (Triratna)**: right faith, right knowledge, right conduct.
- The core principle is **Ahimsa** (non-violence); sects are **Digambara** and **Svetambara**.

## Councils
- The **Third Buddhist Council** was held under **Ashoka** at **Pataliputra**.
- The **Fourth Council** under **Kanishka** split Buddhism into **Hinayana** and **Mahayana**.

### Spread
- **Pali** was the language of early Buddhist texts (**Tripitaka**); Jain texts used **Prakrit (Agamas)**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-m01",
      topicId: "upsc-medieval-history-delhi-sultanate",
      title: "Delhi Sultanate",
      content: `The **Delhi Sultanate (1206–1526)** was a series of five dynasties of **Turkish and Afghan** origin that ruled north India from Delhi.

## The Five Dynasties
| Dynasty | Founder | Period |
| --- | --- | --- |
| Slave (Mamluk) | Qutb-ud-din Aibak | 1206 |
| Khalji | Jalal-ud-din | 1290 |
| Tughlaq | Ghiyasuddin | 1320 |
| Sayyid | Khizr Khan | 1414 |
| Lodi | Bahlol Lodi | 1451 |

- **Qutb-ud-din Aibak** began the **Qutub Minar**, completed by **Iltutmish**.
- **Razia Sultana** was the only woman to rule the Sultanate.

## Notable Rulers
- **Alauddin Khalji** introduced **market (price) control** reforms and repelled the **Mongols**.
- **Muhammad bin Tughlaq** is famed for the **transfer of capital** to Daulatabad and **token currency**.
- **Firoz Shah Tughlaq** levied the **jizya** and built canals.

## Administration
- The **iqta system** assigned land revenue to officials in lieu of salary.
- Persian was the **court language**; the **Sultan** held supreme authority.

### End
- The Sultanate fell when **Babur** defeated **Ibrahim Lodi** at the **First Battle of Panipat (1526)**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-medieval-history-mughal-empire-m01",
      topicId: "upsc-medieval-history-mughal-empire",
      title: "Mughal Empire",
      content: `The **Mughal Empire (1526–1857)** was founded by **Babur** after the **First Battle of Panipat (1526)** and became one of the great Islamic empires.

## Great Mughals
| Ruler | Key Event |
| --- | --- |
| Babur | Panipat 1526 |
| Humayun | Lost to Sher Shah Suri |
| Akbar | Din-i-Ilahi, Mansabdari |
| Jahangir | Patron of painting |
| Shah Jahan | Built the Taj Mahal |
| Aurangzeb | Greatest extent; re-imposed jizya |

- **Akbar** abolished the **jizya**, started **Din-i-Ilahi (1582)** and the **Mansabdari** system.
- **Sher Shah Suri** introduced the **rupiya** and built the **Grand Trunk Road**.

## Administration
- The **Mansabdari** system graded officials by **zat** and **sawar** ranks.
- The **Zabti / Dahsala** revenue system was developed by **Raja Todar Mal**.

## Art and Architecture
- The **Taj Mahal** (Shah Jahan) and **Fatehpur Sikri** (Akbar) are iconic.
- Mughal painting blended **Persian** and **Indian** styles, peaking under **Jahangir**.

### Decline
- **Aurangzeb's** Deccan wars, religious policy and weak successors after **1707** led to fragmentation.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-m01",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      title: "Bhakti & Sufi Movements",
      content: `The **Bhakti** and **Sufi** movements were parallel currents of **devotional reform** in medieval India that stressed **love and devotion** over ritual.

## Bhakti Movement
- Emphasised **devotion (bhakti)** to a personal god and rejected **caste** and ritualism.
- **Nirguna** (formless god) saints included **Kabir** and **Guru Nanak**; **Saguna** saints worshipped a god with form.

| Saint | Region |
| --- | --- |
| Ramananda | North India |
| Kabir | Varanasi |
| Mirabai | Rajasthan |
| Tulsidas | Awadh |
| Chaitanya | Bengal |

- **Guru Nanak** founded **Sikhism**; **Mirabai** was devoted to **Krishna**.

## Sufi Movement
- Sufism is the **mystical** dimension of Islam, organised into **silsilas** (orders).
- The **Chishti** order (**Khwaja Moinuddin Chishti** of Ajmer) and the **Suhrawardi** order were prominent.
- **Khanqahs** were Sufi hospices; **Sama** (devotional music) was central to the Chishtis.

### Significance
- Both movements promoted **communal harmony**, used **vernacular languages**, and shaped a composite culture, including **Nizamuddin Auliya** and **Amir Khusro**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-art-and-culture-temple-architecture-m01",
      topicId: "upsc-art-and-culture-temple-architecture",
      title: "Temple Architecture",
      content: `Indian **temple architecture** evolved from the **Gupta period** into three principal styles defined by the shape of the tower (**shikhara**) and plan.

## Three Styles
| Style | Region | Tower |
| --- | --- | --- |
| Nagara | North India | Curvilinear shikhara |
| Dravida | South India | Pyramidal vimana |
| Vesara | Deccan | Hybrid |

- The **Nagara** style has no boundary walls or gateways and a curvilinear **shikhara**.
- The **Dravida** temple is enclosed by walls with a **gopuram** (gateway tower).

## Key Features
- The **garbhagriha** (sanctum) houses the deity; the **mandapa** is the assembly hall.
- The **amalaka** and **kalasha** crown the Nagara shikhara.

## Famous Examples
- **Nagara:** Kandariya Mahadeva (**Khajuraho**), Sun Temple (**Konark**).
- **Dravida:** Brihadeshwara Temple (**Thanjavur**, Cholas), Meenakshi Temple (**Madurai**).
- **Vesara:** temples of the **Chalukyas** and **Hoysalas** (e.g. Belur, Halebid).

### Rock-Cut and Cave
- The **Kailasa Temple at Ellora** is monolithic, carved top-down by the **Rashtrakutas**.
- The **Mahabalipuram (Pallava)** shore temple and **rathas** are UNESCO sites.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-m01",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      title: "Classical Dance Forms",
      content: `India recognises **eight classical dance forms**, each rooted in **Bharata's Natya Shastra**, the foundational treatise on performing arts.

## The Eight Forms
| Dance | State |
| --- | --- |
| Bharatanatyam | Tamil Nadu |
| Kathak | Uttar Pradesh / North India |
| Kathakali | Kerala |
| Kuchipudi | Andhra Pradesh |
| Odissi | Odisha |
| Manipuri | Manipur |
| Mohiniyattam | Kerala |
| Sattriya | Assam |

- **Bharatanatyam** is the oldest, originating in temples (the **devadasi** tradition).
- **Kathak** is the only major classical form with strong **Persian / Mughal** influence.

## Distinctive Features
- **Kathakali** uses elaborate **make-up** and masks, depicting epics.
- **Sattriya** was founded by the Vaishnavite saint **Sankaradeva**.
- **Manipuri** is known for its gentle, devotional movements linked to **Raslila**.

### Tandava and Lasya
- **Tandava** is the vigorous, masculine aspect; **Lasya** is the graceful, feminine aspect of dance.
- **Mohiniyattam** is a solo female dance embodying **Lasya** grace.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-m01",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      title: "Indian Painting Schools",
      content: `Indian **painting** spans ancient **murals** to medieval **miniatures**, evolving through distinct regional schools.

## Ancient and Mural
- The **Ajanta caves** (Maharashtra) hold the finest **Buddhist murals**, painted in the **tempera** technique.
- **Bagh** and **Sittanavasal** are other notable mural sites.

## Miniature Schools
| School | Patron / Region |
| --- | --- |
| Mughal | Akbar to Shah Jahan |
| Rajput / Rajasthani | Mewar, Bundi, Kishangarh |
| Pahari | Kangra, Basohli |
| Deccan | Bijapur, Golconda |

- **Mughal painting** blended **Persian** technique with Indian themes; it peaked under **Jahangir**.
- The **Kishangarh** school is famous for the **"Bani Thani"** portrait.

## Folk Traditions
- **Madhubani (Mithila)** painting from Bihar uses natural dyes and geometric motifs.
- **Warli** painting (Maharashtra) uses simple white figures on a mud background.
- **Pattachitra** is a cloth-based scroll painting from Odisha and Bengal.

### Modern
- The **Bengal School** (led by **Abanindranath Tagore**) revived Indian themes against Western academic art during the nationalist era.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-m01",
      topicId: "upsc-environment-biodiversity-and-conservation",
      title: "Biodiversity & Conservation",
      content: `**Biodiversity** is the variety of life at three levels: **genetic, species** and **ecosystem**. India is one of **17 megadiverse** countries.

## Biodiversity Hotspots
- India has **four hotspots**: the **Himalayas, Western Ghats, Indo-Burma** and **Sundaland (Nicobar Islands)**.
- A hotspot must have high **endemism** and have lost **70%** of its original habitat.

## Conservation Approaches
| Type | Example |
| --- | --- |
| In-situ | National parks, sanctuaries, biosphere reserves |
| Ex-situ | Zoos, botanical gardens, seed banks |

- **National Parks** allow no human activity; **Sanctuaries** permit some regulated activity.
- **Biosphere Reserves** have core, buffer and transition zones.

## Legal and Institutional
- The **Wildlife (Protection) Act, 1972** lists protected species in schedules.
- **Project Tiger (1973)** and **Project Elephant (1992)** are flagship programmes.

## IUCN Red List
- Categories range from **Least Concern** to **Critically Endangered** and **Extinct**.

### Conventions
- The **Convention on Biological Diversity (CBD)** was adopted at the **Rio Summit (1992)**; **CITES** regulates trade in endangered species.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-m01",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      title: "Climate Change & Global Agreements",
      content: `**Climate change** is driven by rising **greenhouse gases (GHGs)** that trap heat and warm the planet, a process called the **greenhouse effect**.

## Key Greenhouse Gases
| Gas | Main Source |
| --- | --- |
| Carbon dioxide | Fossil fuels |
| Methane | Livestock, paddy, landfills |
| Nitrous oxide | Fertilisers |
| F-gases | Refrigeration |

- **Methane** has a far higher **warming potential** than CO2 over a short horizon.

## Global Architecture
- The **IPCC** (set up 1988 by **WMO** and **UNEP**) assesses the science.
- The **UNFCCC (1992)** is the parent treaty; parties meet annually at the **COP**.

## Major Agreements
- The **Kyoto Protocol (1997)** set binding targets for developed nations.
- The **Paris Agreement (2015)** aims to limit warming to **well below 2 degrees C**, pursuing **1.5 degrees C**, via **NDCs**.
- The **Montreal Protocol (1987)** phased out **ozone-depleting** substances; its **Kigali Amendment** targets HFCs.

### India's Stand
- India follows **Common But Differentiated Responsibilities (CBDR)** and targets **net zero by 2070**, with missions under the **NAPCC**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-m01",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      title: "Ecosystems & Food Chains",
      content: `An **ecosystem** is a community of living organisms interacting with their **non-living (abiotic)** environment, linked by flows of **energy** and **nutrients**.

## Components
- **Abiotic:** sunlight, water, soil, temperature.
- **Biotic:** producers, consumers and decomposers.

## Trophic Levels
| Level | Role |
| --- | --- |
| Producers | Plants (autotrophs) |
| Primary consumers | Herbivores |
| Secondary consumers | Carnivores |
| Decomposers | Bacteria, fungi |

- A **food chain** is linear; a **food web** is an interconnected network of chains.

## Energy Flow
- Energy flow is **unidirectional**; only about **10%** transfers to the next level (**Lindeman's 10% law**).
- **Ecological pyramids** of number, biomass and energy depict this; the energy pyramid is always **upright**.

## Biogeochemical Cycles
- The **carbon, nitrogen** and **water cycles** recycle nutrients through the biosphere.

### Productivity
- **Gross Primary Productivity (GPP)** is total energy fixed; **Net Primary Productivity (NPP)** is GPP minus respiration, available to consumers.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-science-technology-space-technology-isro-m01",
      topicId: "upsc-science-technology-space-technology-isro",
      title: "Space Technology (ISRO)",
      content: `The **Indian Space Research Organisation (ISRO)**, founded in **1969** under **Vikram Sarabhai**, is India's national space agency, headquartered at **Bengaluru**.

## Launch Vehicles
| Vehicle | Use |
| --- | --- |
| PSLV | Polar / Sun-synchronous orbits |
| GSLV | Geostationary satellites |
| LVM3 (GSLV Mk III) | Heavy payloads, crewed missions |

- The **PSLV** is the reliable **"workhorse"** of ISRO.
- The **GSLV** uses an indigenous **cryogenic** upper stage.

## Landmark Missions
- **Aryabhata (1975)** was India's first satellite.
- **Chandrayaan-1 (2008)** discovered **water molecules** on the Moon.
- **Mangalyaan (2013)** made India the first nation to reach **Mars** orbit on its first attempt.
- **Chandrayaan-3 (2023)** soft-landed near the lunar **south pole**.

## Applications
- **Navigation:** the **NavIC (IRNSS)** regional system.
- **Communication and remote sensing** satellites (INSAT, IRS series).

### Future
- **Gaganyaan** aims for India's first **crewed** spaceflight, and **Aditya-L1** studies the **Sun** from the L1 point.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-science-technology-biotechnology-basics-m01",
      topicId: "upsc-science-technology-biotechnology-basics",
      title: "Biotechnology Basics",
      content: `**Biotechnology** is the use of living systems and organisms to develop products, spanning **agriculture, medicine** and **industry**.

## Core Concepts
- **DNA** carries genetic information; **genes** code for proteins.
- **Genetic engineering** inserts, deletes or modifies genes using **recombinant DNA** technology.

## Key Tools
| Tool | Function |
| --- | --- |
| Restriction enzymes | Cut DNA at specific sites |
| PCR | Amplify DNA copies |
| CRISPR-Cas9 | Precise gene editing |
| Vectors (plasmids) | Carry genes into cells |

- **CRISPR-Cas9** is a revolutionary **gene-editing** tool.

## Applications
- **GM crops:** **Bt cotton** (India's only approved GM crop) resists bollworm pests.
- **Golden Rice** is engineered to be rich in **Vitamin A**.
- **Vaccines, insulin** and **monoclonal antibodies** are produced via biotech.

## Regulation in India
- The **Genetic Engineering Appraisal Committee (GEAC)** under the **MoEFCC** approves GM organisms.

### Ethics
- Concerns include **biosafety, biopiracy** and gene-editing ethics; **stem cells** and **gene therapy** are emerging frontiers.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-science-technology-defence-technology-m01",
      topicId: "upsc-science-technology-defence-technology",
      title: "Defence Technology",
      content: `India's **defence technology** is driven by the **Defence Research and Development Organisation (DRDO)**, established in **1958**, to make the armed forces self-reliant.

## Missile Programme
- The **Integrated Guided Missile Development Programme (IGMDP)** was led by **Dr. A.P.J. Abdul Kalam**.

| Missile | Type |
| --- | --- |
| Agni | Surface-to-surface ballistic |
| Prithvi | Short-range ballistic |
| Akash | Surface-to-air |
| Nag | Anti-tank |
| BrahMos | Supersonic cruise (India-Russia) |

- **BrahMos** is a joint venture and one of the fastest **cruise missiles**.

## Other Systems
- **Tejas** is India's indigenous **Light Combat Aircraft (LCA)**.
- The **Arjun** main battle tank and **INS Vikrant**, India's first indigenous aircraft carrier, are key platforms.

## Nuclear and Strategic
- The **nuclear triad** delivers weapons by land, air and sea; **INS Arihant** is India's nuclear submarine.
- India follows a **No First Use (NFU)** nuclear doctrine.

### Self-Reliance
- **Atmanirbhar Bharat** in defence promotes domestic production and **defence exports** through positive indigenisation lists.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-m01",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      title: "India & Its Neighbours",
      content: `India's foreign policy toward its neighbours follows the **"Neighbourhood First"** policy, managing relations with seven land and maritime neighbours.

## Land Borders
| Neighbour | Border Line / Issue |
| --- | --- |
| China | Line of Actual Control (LAC) |
| Pakistan | Line of Control (LoC), Radcliffe Line |
| Afghanistan | Durand Line (with Pakistan) |
| Bangladesh | Land Boundary Agreement 2015 |
| Nepal | Open border, Kalapani dispute |

- India shares its **longest border** with **Bangladesh**.
- The **McMahon Line** demarcates the India-China boundary in the eastern sector.

## Key Relations
- **Nepal** and **Bhutan** are tied to India by **friendship treaties** (1950 with Nepal; 2007 revised with Bhutan).
- **Sri Lanka** and the **Maldives** are key **maritime** neighbours in the Indian Ocean.

## Connectivity
- Projects like the **Chabahar Port** (Iran) bypass Pakistan to reach **Afghanistan** and Central Asia.

### Doctrines
- **Gujral Doctrine** emphasised non-reciprocal accommodation of smaller neighbours; **SAGAR** ("Security and Growth for All in the Region") guides maritime policy.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-international-relations-major-global-groupings-m01",
      topicId: "upsc-international-relations-major-global-groupings",
      title: "Major Global Groupings",
      content: `India is a member of numerous **multilateral groupings** that shape global governance, trade and security.

## Key Groupings
| Grouping | Note |
| --- | --- |
| United Nations | India a founding member (1945) |
| G20 | India hosted the 2023 summit |
| BRICS | Brazil, Russia, India, China, S. Africa |
| SCO | Shanghai Cooperation Organisation |
| QUAD | India, US, Japan, Australia |

- India is **not** a permanent member of the **UN Security Council** but seeks reform.
- **BRICS** runs the **New Development Bank (NDB)**, headquartered in **Shanghai**.

## Regional Bodies
- **SAARC** (1985, HQ Kathmandu) and **BIMSTEC** link South Asia and the Bay of Bengal.
- **ASEAN** is central to India's **"Act East"** policy.

## Economic and Strategic
- The **QUAD** is a strategic dialogue in the **Indo-Pacific**.
- **I2U2** groups India, Israel, the UAE and the USA.

### Nuclear Regimes
- India is a member of the **MTCR, Wassenaar Arrangement** and **Australia Group**, but **not** the **Nuclear Suppliers Group (NSG)** or the **NPT**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-polity-president-pm-and-council-of-ministers-m01",
      topicId: "upsc-polity-president-pm-and-council-of-ministers",
      title: "President, PM & Council of Ministers",
      content: `The **President** is the **constitutional head** of the Union executive under **Article 52**, while real power rests with the **Council of Ministers** headed by the **Prime Minister**.

## The President
- Elected indirectly by an **electoral college** (elected MPs and elected MLAs) through **proportional representation** by **single transferable vote** (Article 55).
- Term is **five years**; qualifying age is **35**; can be removed by **impeachment** under **Article 61** for violation of the Constitution.
- **Article 72** gives the power of **pardon**; **Article 123** allows promulgation of **ordinances**.

## Executive Hierarchy
| Office | Key Article |
| --- | --- |
| President | 52, 53 |
| Vice-President | 63 |
| Prime Minister | 75 |
| Council of Ministers | 74, 75 |
| Attorney General | 76 |

- **Article 74** mandates that the President acts on the **aid and advice** of the Council of Ministers; the **42nd and 44th Amendments** made this advice binding (with one return).

## Prime Minister & Cabinet
- The PM is **appointed** by the President (Article 75) and is the **leader of the majority** in the Lok Sabha.
- The Council is **collectively responsible** to the **Lok Sabha**; ministers hold office during the **pleasure** of the President.

### Key Points
- Total ministers cannot exceed **15%** of Lok Sabha strength (**91st Amendment, 2003**).
- A minister who is not a member of either House must get elected within **six months**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-polity-federalism-and-centre-state-relations-m01",
      topicId: "upsc-polity-federalism-and-centre-state-relations",
      title: "Federalism & Centre-State Relations",
      content: `India has a **federal structure with a unitary bias**, described as **"quasi-federal"** by K.C. Wheare. Centre-State relations span **legislative, administrative** and **financial** domains.

## Distribution of Powers
- The **Seventh Schedule** divides subjects into three lists.

| List | Examples | Authority |
| --- | --- | --- |
| Union List | Defence, foreign affairs, railways | Parliament |
| State List | Police, public health, agriculture | State Legislature |
| Concurrent List | Education, forests, criminal law | Both |

- **Residuary powers** (Article 248) rest with the **Union Parliament**.
- In a conflict on the Concurrent List, **Union law prevails** (Article 254).

## Parliament's Power over State List
- Parliament can legislate on a State subject if the **Rajya Sabha** passes a resolution under **Article 249** (national interest) or during a **national emergency** (Article 250).

## Key Commissions
- The **Sarkaria Commission (1983)** and the **Punchhi Commission (2007)** reviewed Centre-State relations.
- **Article 263** provides for an **Inter-State Council**.

### Cooperative Federalism
- **GST Council** and **NITI Aayog** embody **cooperative federalism**, while horizontal ties between states are termed **competitive federalism**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-polity-panchayati-raj-and-local-government-m01",
      topicId: "upsc-polity-panchayati-raj-and-local-government",
      title: "Panchayati Raj & Local Government",
      content: `**Local self-government** was given constitutional status by the **73rd and 74th Amendments (1992)**, adding **Part IX** (panchayats) and **Part IXA** (municipalities).

## The Three-Tier System
| Tier | Level |
| --- | --- |
| Gram Panchayat | Village |
| Panchayat Samiti | Intermediate / Block |
| Zila Parishad | District |

- The **three-tier system** is mandatory for states with a population above **20 lakh**.
- The **Balwant Rai Mehta Committee (1957)** recommended the three-tier model; the **Ashok Mehta Committee (1977)** proposed a two-tier one.

## Key Features
- **Article 243E** fixes a **five-year term**; elections are conducted by the **State Election Commission** (Article 243K).
- One-third of seats are **reserved for women** (many states now reserve 50%).
- The **Eleventh Schedule** lists **29 subjects** for panchayats; the **Twelfth Schedule** lists **18** for municipalities.

## Finance
- The **State Finance Commission** (Article 243I) reviews the financial position every **five years**.

### PESA
- The **PESA Act, 1996** extends panchayat provisions to **Fifth Schedule (tribal) areas**, empowering the **Gram Sabha** over local resources.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-polity-emergency-provisions-and-amendments-m01",
      topicId: "upsc-polity-emergency-provisions-and-amendments",
      title: "Emergency Provisions & Amendments",
      content: `The Constitution contains **three types of emergency** (Part XVIII) and a defined procedure for **amendment** under **Article 368**.

## Types of Emergency
| Type | Article | Ground |
| --- | --- | --- |
| National | 352 | War, external aggression, armed rebellion |
| President's Rule | 356 | Failure of constitutional machinery in a State |
| Financial | 360 | Threat to financial stability |

- **Article 352** uses the term **"armed rebellion"** (substituted for "internal disturbance" by the **44th Amendment, 1978**).
- A **National Emergency** must be approved by both Houses within **one month** and by a **special majority**.

## President's Rule
- Imposed under **Article 356** when a State cannot be run per the Constitution; the **S.R. Bommai (1994)** case made it subject to **judicial review**.

## Constitutional Amendments
- **Article 368** allows amendment by **simple, special**, or **special majority plus state ratification**.
- The **Kesavananda Bharati (1973)** case held that Parliament cannot alter the **basic structure**.

### Landmark Amendments
- **42nd (1976)** — the "Mini-Constitution"; added Fundamental Duties and the words **Socialist, Secular**.
- **44th (1978)** — strengthened safeguards against misuse of emergency.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-economy-taxation-and-gst-m01",
      topicId: "upsc-economy-taxation-and-gst",
      title: "Taxation & GST",
      content: `**Taxes** are the government's main source of revenue, broadly split into **direct** and **indirect** taxes. The **GST** unified most indirect taxes from 2017.

## Direct vs Indirect
| Type | Examples | Nature |
| --- | --- | --- |
| Direct | Income tax, corporate tax | Progressive |
| Indirect | GST, customs duty | Regressive |

- **Direct taxes** are borne by the same person on whom they are levied; **indirect taxes** can be passed on.

## Goods and Services Tax
- Launched on **1 July 2017** by the **101st Amendment**, GST is a **destination-based**, value-added tax.
- Governed by the **GST Council (Article 279A)**, chaired by the **Union Finance Minister**, with **two-thirds** voting weight for states.
- Components: **CGST, SGST/UTGST** and **IGST** (on inter-state supply).
- **Petroleum, alcohol** and electricity are currently **outside GST**.

## Tax Concepts
- **Tax buoyancy** measures revenue responsiveness to GDP growth.
- The **Laffer Curve** shows that very high rates can lower total collections.

### Devolution
- The **Finance Commission** recommends sharing of **net tax proceeds** between the Centre and States (currently 41% to states).`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-economy-poverty-unemployment-and-inclusive-growth-m01",
      topicId: "upsc-economy-poverty-unemployment-and-inclusive-growth",
      title: "Poverty, Unemployment & Inclusive Growth",
      content: `**Inclusive growth** seeks broad-based prosperity that reduces **poverty** and **unemployment** while narrowing inequality.

## Measuring Poverty
- The **Tendulkar Committee (2009)** and the **Rangarajan Committee (2014)** estimated poverty lines based on consumption.
- The **Multidimensional Poverty Index (MPI)** by **NITI Aayog** captures health, education and living standards.

## Types of Unemployment
| Type | Description |
| --- | --- |
| Disguised | More workers than needed (common in agriculture) |
| Structural | Skill-demand mismatch |
| Frictional | Between jobs |
| Cyclical | Due to economic downturns |

- **Disguised unemployment** is widespread in **agriculture**, where marginal productivity is near zero.
- The **Periodic Labour Force Survey (PLFS)** by NSO measures employment.

## Key Indicators
- **Labour Force Participation Rate (LFPR)** and the **Worker Population Ratio** track participation.

### Inclusive Measures
- **MGNREGA** provides a rural employment guarantee; **Gini coefficient** measures income inequality (0 = perfect equality).
- The **Lorenz Curve** depicts the distribution of income graphically.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-economy-external-sector-and-trade-m01",
      topicId: "upsc-economy-external-sector-and-trade",
      title: "External Sector & Trade",
      content: `The **external sector** covers a country's transactions with the rest of the world, summarised in the **Balance of Payments (BoP)**.

## Balance of Payments
| Account | Includes |
| --- | --- |
| Current Account | Trade, services, remittances, income |
| Capital Account | FDI, FPI, loans, banking capital |

- A **Current Account Deficit (CAD)** arises when imports of goods and services exceed exports plus net transfers.
- The **trade deficit** is the gap between merchandise exports and imports alone.

## Exchange Rate
- India follows a **managed floating** exchange rate; the **RBI** intervenes to curb volatility.
- **Depreciation** makes exports cheaper and imports costlier.

## Foreign Investment
- **FDI** is long-term and management-linked; **FPI (FII)** is short-term portfolio flow, often called **"hot money."**

## Institutions and Reserves
- **Forex reserves** include foreign currency assets, gold, SDRs and the IMF reserve tranche.
- The **WTO** governs global trade; the **DGFT** administers India's **Foreign Trade Policy**.

### Key Terms
- **Balance of Trade (BoT)** is visible trade; **invisibles** include services and remittances, where India runs a surplus.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-economy-agriculture-and-food-security-m01",
      topicId: "upsc-economy-agriculture-and-food-security",
      title: "Agriculture & Food Security",
      content: `**Agriculture** supports nearly half of India's workforce, and **food security** ensures availability, access and affordability of food.

## Minimum Support Price
- The **MSP** is recommended by the **Commission for Agricultural Costs and Prices (CACP)** and announced for **23 crops**.
- Procurement is handled mainly by the **Food Corporation of India (FCI)**.

## Food Security Architecture
| Element | Body / Law |
| --- | --- |
| PDS / Ration | National Food Security Act, 2013 |
| Buffer stock | FCI |
| Nutrition | Poshan Abhiyaan |

- The **National Food Security Act, 2013** gives a legal right to subsidised foodgrains to about **two-thirds** of the population.
- **One Nation One Ration Card** allows portability of PDS benefits.

## Cost Concepts
- The CACP uses **A2, A2+FL** and **C2** cost concepts; MSP is benchmarked at **1.5 times** the A2+FL cost.

## Institutions
- **NABARD** is the apex body for rural and agricultural credit.

### Revolutions
- The **Green Revolution** boosted wheat and rice; **e-NAM** is a unified national online agri-market.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-international-relations-important-international-organizations-m01",
      topicId: "upsc-international-relations-important-international-organizations",
      title: "Important International Organizations",
      content: `**International organizations** set the rules of global cooperation in security, finance, trade and health. Linking each to its **HQ and mandate** is high-yield.

## The United Nations
- Founded in **1945** with HQ at **New York**; the **UN Charter** has its six principal organs.
- The **Security Council** has **five permanent members (P5)** with veto power: the **USA, UK, France, Russia and China**.
- The **International Court of Justice (ICJ)** sits at **The Hague**.

## Bretton Woods Institutions
| Body | HQ | Role |
| --- | --- | --- |
| IMF | Washington DC | Exchange stability, BoP support |
| World Bank | Washington DC | Development finance |
| WTO | Geneva | Trade rules (est. 1995) |

- The **IMF** issues **Special Drawing Rights (SDRs)**; the **World Bank Group** includes **IBRD, IDA, IFC, MIGA** and **ICSID**.

## Specialised & Health Bodies
- The **WHO** (Geneva) leads global health; the **ILO** (Geneva) is the only tripartite UN agency.
- The **IAEA** (Vienna) promotes peaceful nuclear use.

### India's Push
- India seeks **permanent membership** of the UNSC and reform of these bodies through the **G4** (India, Germany, Japan, Brazil).`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-international-relations-indias-foreign-policy-and-diaspora-m01",
      topicId: "upsc-international-relations-indias-foreign-policy-and-diaspora",
      title: "India's Foreign Policy & Diaspora",
      content: `India's foreign policy is rooted in **strategic autonomy**, evolving from **Non-Alignment** to multi-alignment, and leverages the **world's largest diaspora**.

## Pillars and Principles
- **Panchsheel (1954)** — Five Principles of Peaceful Coexistence with China, centred on mutual respect and non-interference.
- The **Non-Aligned Movement (NAM)**, shaped by **Jawaharlal Nehru**, kept India out of Cold War blocs.

## Policy Doctrines
| Policy | Focus |
| --- | --- |
| Neighbourhood First | Immediate neighbours |
| Act East | ASEAN and East Asia |
| Link West / SAGAR | Gulf and Indian Ocean |

- **SAGAR** stands for **"Security and Growth for All in the Region."**

## The Indian Diaspora
- India has the **largest overseas diaspora** and is the **top recipient of remittances** worldwide.
- **Pravasi Bharatiya Divas** is observed on **9 January**, marking Gandhi's return from South Africa in 1915.

## Diaspora Categories
- **NRI** (Non-Resident Indian) holds Indian citizenship; **PIO/OCI** are foreign citizens of Indian origin.

### Institutions
- The **Ministry of External Affairs (MEA)** conducts diplomacy; **OCI** cards offer lifelong visa-free entry but **no voting rights**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-ethics-ethics-and-human-interface-m01",
      topicId: "upsc-ethics-ethics-and-human-interface",
      title: "Ethics & Human Interface",
      content: `**Ethics** is the systematic study of **morality** — the standards of right and wrong that guide human conduct in the **human interface**.

## Core Distinctions
| Term | Meaning |
| --- | --- |
| Ethics | Systematic study of morality |
| Morals | Personal beliefs of right/wrong |
| Values | Enduring guiding ideals |
| Norms | Socially expected behaviour |

- **Ethics** is prescriptive and reflective; **morals** are individual convictions.

## Determinants and Sources
- Sources of ethics include **family, religion, society, law, the constitution** and **conscience**.
- **Conscience** acts as an inner moral guide and the **"court of last appeal."**

## Dimensions of Ethics
- **Descriptive ethics** studies what people actually do; **normative ethics** prescribes what they ought to do; **meta-ethics** analyses the meaning of moral terms; **applied ethics** addresses specific fields.

## Consequences vs Duty
- **Consequentialism (teleology)** judges acts by outcomes; **deontology** judges acts by adherence to duty regardless of results.

### Ethics in Private and Public Life
- Public conduct demands **higher accountability** because actions affect many; a private virtue like honesty becomes a **public duty** for a civil servant.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-ethics-attitude-and-emotional-intelligence-m01",
      topicId: "upsc-ethics-attitude-and-emotional-intelligence",
      title: "Attitude & Emotional Intelligence",
      content: `**Attitude** is a learned tendency to respond favourably or unfavourably to a person, object or idea. **Emotional Intelligence (EI)** is the ability to perceive and manage emotions.

## Components of Attitude (ABC Model)
| Component | Meaning |
| --- | --- |
| Affective | Feelings and emotions |
| Behavioural | Tendency to act |
| Cognitive | Beliefs and thoughts |

- Attitudes are **learned**, relatively **enduring**, and influence behaviour.

## Functions of Attitude
- Katz identified four: **adjustment, ego-defensive, value-expressive** and **knowledge** functions.

## Emotional Intelligence
- Popularised by **Daniel Goleman**, EI has **five elements**: **self-awareness, self-regulation, motivation, empathy** and **social skills**.
- EI is often measured as an **Emotional Quotient (EQ)**, distinct from **IQ**.

## Persuasion and Change
- Attitudes change through **persuasion, cognitive dissonance** (Festinger) and direct experience.
- **Prejudice** is a negative attitude; **stereotype** is its cognitive component; **discrimination** is its behavioural expression.

### Relevance for Administrators
- High EI helps a civil servant show **empathy** toward the weak, stay calm under pressure, and resist **emotional bias** in decisions.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-ethics-moral-thinkers-and-philosophers-m01",
      topicId: "upsc-ethics-moral-thinkers-and-philosophers",
      title: "Moral Thinkers & Philosophers",
      content: `Knowing **moral thinkers** and their core ideas helps illustrate ethical answers. Both **Western** and **Indian** philosophers are tested.

## Western Thinkers
| Thinker | Core Idea |
| --- | --- |
| Aristotle | Virtue ethics, golden mean |
| Immanuel Kant | Categorical imperative, duty |
| J.S. Mill / Bentham | Utilitarianism |
| John Rawls | Justice as fairness |

- **Kant's categorical imperative** says to act only on a maxim you could will to be a **universal law**.
- **Bentham's** utilitarianism seeks the **"greatest happiness of the greatest number."**

## Rawls and Justice
- **John Rawls** proposed the **"veil of ignorance"** to design just institutions impartially.

## Indian Thinkers
- **Mahatma Gandhi** stressed **truth (satya)** and **non-violence (ahimsa)** and the idea of **trusteeship**.
- **Swami Vivekananda** emphasised service to humanity as worship; **Kautilya** linked ethics with statecraft in the **Arthashastra**.

### Virtue and Duty
- **Aristotle** held that virtue lies in the **golden mean** between two extremes (e.g. courage between cowardice and recklessness).
- The **Bhagavad Gita** teaches **Nishkama Karma** — action without attachment to results.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-ethics-public-civil-service-values-m01",
      topicId: "upsc-ethics-public-civil-service-values",
      title: "Public/Civil Service Values",
      content: `**Civil service values** are the ethical foundations that uphold **public trust** and ensure impartial, accountable administration.

## Foundational Values
- The **Second Administrative Reforms Commission (2nd ARC)** stressed **integrity, impartiality, commitment** and **dedication to public service**.
- The UK **Nolan Committee** gave the **Seven Principles of Public Life**: selflessness, integrity, objectivity, accountability, openness, honesty and leadership.

## Key Values
| Value | Meaning |
| --- | --- |
| Integrity | Wholeness and honesty in conduct |
| Impartiality | Treating all without favour |
| Objectivity | Decisions on merit and evidence |
| Non-partisanship | Serving the government of the day neutrally |

- **Anonymity** and **political neutrality** are traditional values of the permanent civil service.

## Accountability
- A civil servant is accountable to the **law, the political executive** and ultimately the **public**.
- **Empathy and compassion** toward the weaker sections are increasingly emphasised.

### Codes
- Conduct is governed by the **All India Services (Conduct) Rules, 1968** and the **Central Civil Services (Conduct) Rules, 1964**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-ethics-probity-in-governance-m01",
      topicId: "upsc-ethics-probity-in-governance",
      title: "Probity in Governance",
      content: `**Probity** means **integrity, uprightness and honesty** in public life. Probity in governance is essential for efficient and corruption-free administration.

## Philosophical Basis
- Probity rests on **transparency, accountability** and the **rule of law**.
- The **2nd ARC** report "Ethics in Governance" recommended reforms to strengthen integrity.

## Pillars of Probity
| Mechanism | Purpose |
| --- | --- |
| RTI Act, 2005 | Transparency |
| Citizen's Charter | Service standards |
| Code of Conduct | Behaviour norms |
| Lokpal & Lokayuktas | Anti-corruption ombudsman |

- The **Right to Information Act, 2005** empowers citizens and curbs corruption.
- The **Citizen's Charter** declares service standards and grievance redress.

## Anti-Corruption Framework
- The **Prevention of Corruption Act, 1988** penalises bribery and criminal misconduct by public servants.
- The **Central Vigilance Commission (CVC)** is the apex integrity watchdog (statutory since 2003).
- The **Lokpal** investigates corruption complaints against public functionaries.

### Information Sharing
- **Whistleblower protection** under the **Whistle Blowers Protection Act, 2014** encourages disclosure of wrongdoing.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-ethics-case-studies-approach-m01",
      topicId: "upsc-ethics-case-studies-approach",
      title: "Case Studies Approach",
      content: `**Case studies** test the practical application of ethics to real administrative **dilemmas**, requiring a structured, reasoned response.

## What a Case Study Demands
- Identification of **stakeholders**, the **ethical dilemma**, available **options** and their **consequences**.
- A **defensible decision** grounded in values and law, not vague idealism.

## A Structured Approach
| Step | Action |
| --- | --- |
| 1 | State the facts and dilemma |
| 2 | Identify stakeholders |
| 3 | List options |
| 4 | Evaluate against ethics and law |
| 5 | Decide and justify |

- An **ethical dilemma** is a conflict between **two right values** (e.g. loyalty vs. honesty), unlike a simple right-versus-wrong choice.

## Resolving Conflicts
- Apply tests such as the **publicity test** (would you defend it publicly?) and the **legality and conscience** checks.
- Balance **means and ends**: ethical administration insists that **good ends never justify wrong means**.

### Common Dilemmas
- Conflicts between **personal ethics and professional duty**, between **rules and compassion**, and pressure from **political superiors** are recurring themes.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-governance-governance-and-e-governance-m01",
      topicId: "upsc-governance-governance-and-e-governance",
      title: "Governance & e-Governance",
      content: `**Governance** is the process of decision-making and implementation. **Good governance** and **e-governance** aim to make it efficient, inclusive and transparent.

## Pillars of Good Governance
- The **World Bank** identifies **accountability, transparency, rule of law** and **participation**.
- The **2nd ARC** emphasised **citizen-centric** administration.

## e-Governance Models
| Model | Interaction |
| --- | --- |
| G2C | Government to Citizen |
| G2B | Government to Business |
| G2G | Government to Government |
| G2E | Government to Employee |

- **e-Governance** uses ICT to deliver services, improve transparency and reduce discretion.

## Key Initiatives
- **Digital India (2015)** has three pillars: digital infrastructure, services on demand, and digital empowerment.
- **UMANG, DigiLocker, e-Sign** and the **Common Service Centres (CSCs)** widen access.
- **Aadhaar** and the **JAM trinity** enable **Direct Benefit Transfer (DBT)**.

## Reforms
- The **Citizen's Charter** and **Sevottam** model set service-delivery standards.

### Maximum Governance
- The motto **"Minimum Government, Maximum Governance"** stresses simplification, self-certification and process re-engineering.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-governance-transparency-rti-and-accountability-m01",
      topicId: "upsc-governance-transparency-rti-and-accountability",
      title: "Transparency, RTI & Accountability",
      content: `**Transparency** and **accountability** ensure that public power is exercised openly and answerably. The **RTI Act, 2005** is the cornerstone law.

## The RTI Act, 2005
- Gives every citizen the **right to information** held by public authorities, flowing from **Article 19(1)(a)**.
- Information must normally be provided within **30 days** (48 hours if life or liberty is involved).
- Establishes the **Central Information Commission (CIC)** and **State Information Commissions**.

## Accountability Institutions
| Body | Function |
| --- | --- |
| CAG | Audits public accounts (Article 148) |
| CVC | Vigilance and anti-corruption |
| Lokpal | Ombudsman against corruption |
| PAC | Parliamentary scrutiny of spending |

- The **CAG** is the guardian of the public purse, reporting to Parliament.

## Other Tools
- **Social audit** (used in MGNREGA) lets communities verify spending.
- The **Citizen's Charter** and **Public Service Guarantee Acts** in some states ensure time-bound delivery.

### Exemptions
- RTI does not cover information affecting **national security, sovereignty** or specified intelligence agencies under **Section 8 and the Second Schedule**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-governance-welfare-schemes-and-vulnerable-sections-m01",
      topicId: "upsc-governance-welfare-schemes-and-vulnerable-sections",
      title: "Welfare Schemes & Vulnerable Sections",
      content: `The State runs **welfare schemes** for **vulnerable sections** — SCs, STs, OBCs, women, children, the elderly and persons with disabilities — backed by constitutional safeguards.

## Constitutional Safeguards
| Group | Key Provision |
| --- | --- |
| SCs/STs | Articles 15, 16, 17, 46, 338, 338A |
| OBCs | Articles 15(4), 16(4), 340, 338B |
| Women | Article 15(3) |
| Children | Articles 21A, 24, 39(f) |

- **Article 17** abolishes **untouchability**; **Article 46** directs the State to promote weaker sections' interests.

## Statutory Bodies
- The **National Commission for SCs (Article 338)** and **STs (Article 338A)** safeguard rights.
- The **NCBC** became a constitutional body under **Article 338B** (102nd Amendment).

## Major Laws and Schemes
- The **SC/ST (Prevention of Atrocities) Act, 1989** and the **Rights of Persons with Disabilities Act, 2016**.
- **Beti Bachao Beti Padhao, ICDS** and **Poshan Abhiyaan** target women and children.

### Tribal Welfare
- The **Forest Rights Act, 2006** recognises forest-dwellers' rights; the **Fifth and Sixth Schedules** govern tribal administration.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-governance-health-education-and-human-resources-m01",
      topicId: "upsc-governance-health-education-and-human-resources",
      title: "Health, Education & Human Resources",
      content: `**Health** and **education** build **human capital**, the foundation of development. Both are largely on the **Concurrent List**, shared by the Centre and States.

## Health Architecture
- **Ayushman Bharat** has two pillars: **Health and Wellness Centres** and **PM-JAY** (₹5 lakh cover per family).
- The **National Health Mission (NHM)** covers rural and urban health.
- The **National Medical Commission (NMC)** replaced the **Medical Council of India** in 2020.

## Education Framework
| Provision / Policy | Significance |
| --- | --- |
| Article 21A | Right to free education (6-14) |
| RTE Act, 2009 | Operationalises Article 21A |
| NEP 2020 | 5+3+3+4 school structure |

- The **National Education Policy 2020** targets a **GER of 50%** in higher education by 2035.

## Human Resource Indicators
- **Human Development Index (HDI)** combines health, education and income.
- India's **demographic dividend** depends on skilling its young workforce.

### Key Bodies
- **UGC** and **AICTE** regulate higher and technical education; **Skill India** and **PMKVY** drive vocational training.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-internal-security-internal-security-challenges-m01",
      topicId: "upsc-internal-security-internal-security-challenges",
      title: "Internal Security Challenges",
      content: `**Internal security** safeguards the nation from threats arising **within** its borders, ranging from **terrorism** to **insurgency** and **Left-Wing Extremism**.

## Major Challenges
| Challenge | Region / Note |
| --- | --- |
| Left-Wing Extremism (Naxalism) | Red Corridor (central-east India) |
| Insurgency | North-East states |
| Cross-border terrorism | Jammu & Kashmir |
| Communalism | Pan-India social fabric |

- **Left-Wing Extremism** was called the **"single biggest internal security threat"** to India.

## Key Laws
- The **Unlawful Activities (Prevention) Act (UAPA), 1967** is the principal anti-terror law, amended in 2019 to designate **individuals** as terrorists.
- The **National Investigation Agency (NIA)** investigates terror offences under the **NIA Act, 2008**.

## Security Forces
- **Central Armed Police Forces (CAPFs)**: CRPF, BSF, CISF, ITBP, SSB and the **Assam Rifles**.
- The **CRPF** is the lead force for internal security and anti-Naxal operations.

### Linkages
- The role of **media and social media** in spreading radicalisation and the **money-muscle** nexus complicate internal security.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-internal-security-cyber-security-and-money-laundering-m01",
      topicId: "upsc-internal-security-cyber-security-and-money-laundering",
      title: "Cyber Security & Money Laundering",
      content: `**Cyber security** protects digital systems from attacks, while **money laundering** disguises the origins of illicit funds — both are growing security challenges.

## Cyber Security
- The **Information Technology Act, 2000** is the primary law for cyber offences.
- **CERT-In** (Computer Emergency Response Team) is the national nodal agency for cyber incidents.
- The **National Critical Information Infrastructure Protection Centre (NCIIPC)** guards critical sectors.

## Common Cyber Threats
| Threat | Nature |
| --- | --- |
| Phishing | Fraudulent data theft |
| Ransomware | Encrypts data for ransom |
| DDoS | Overloads servers |
| Malware | Malicious software |

## Money Laundering
- Laundering has **three stages**: **placement, layering** and **integration**.
- The **Prevention of Money Laundering Act (PMLA), 2002** is enforced by the **Enforcement Directorate (ED)**.
- The **Financial Action Task Force (FATF)** sets global anti-money-laundering standards and maintains a **grey list**.

### Institutions
- The **Financial Intelligence Unit (FIU-IND)** receives and analyses suspicious transaction reports.
- **Hawala** networks and **shell companies** are common laundering channels.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-internal-security-border-management-m01",
      topicId: "upsc-internal-security-border-management",
      title: "Border Management",
      content: `**Border management** secures India's long land and maritime frontiers against infiltration, smuggling and trafficking through a **"one border, one force"** approach.

## Guarding Forces
| Border | Guarding Force |
| --- | --- |
| Pakistan & Bangladesh | Border Security Force (BSF) |
| China (LAC) | Indo-Tibetan Border Police (ITBP) |
| Nepal & Bhutan | Sashastra Seema Bal (SSB) |
| Myanmar | Assam Rifles |
| Coastline | Indian Coast Guard |

- The **BSF** is the **"first line of defence"** on the Indo-Pak and Indo-Bangladesh borders.

## Boundary Lines
- The **Radcliffe Line** (Pakistan), the **McMahon Line** (China, eastern sector), the **Line of Control (LoC)** and the **Line of Actual Control (LAC)**.

## Coastal Security
- After the **2008 Mumbai attacks**, coastal security was strengthened with the **Coastal Security Scheme** and the **Indian Coast Guard** as the lead agency in territorial waters.

### Schemes
- The **Border Area Development Programme (BADP)** and the **Comprehensive Integrated Border Management System (CIBMS)** use technology to seal vulnerable stretches.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-internal-security-disaster-management-m01",
      topicId: "upsc-internal-security-disaster-management",
      title: "Disaster Management",
      content: `**Disaster management** aims to reduce risk and respond to natural and man-made disasters through prevention, mitigation, preparedness and response.

## Legal & Institutional Framework
- The **Disaster Management Act, 2005** created a three-tier structure.
- The **National Disaster Management Authority (NDMA)** is chaired by the **Prime Minister**.

| Level | Authority | Head |
| --- | --- | --- |
| National | NDMA | Prime Minister |
| State | SDMA | Chief Minister |
| District | DDMA | District Collector |

- The **National Disaster Response Force (NDRF)** is the specialised response force.

## Global Framework
- The **Sendai Framework (2015-2030)** guides disaster risk reduction, with four priorities and seven targets.
- India promotes the **Coalition for Disaster Resilient Infrastructure (CDRI)**, launched in 2019.

## Phases
- **Pre-disaster**: prevention, mitigation, preparedness.
- **Post-disaster**: response, recovery, rehabilitation and reconstruction.

### Types
- Disasters are **natural** (earthquakes, floods, cyclones) or **man-made** (industrial, chemical, nuclear). The **Bhopal Gas Tragedy (1984)** is a landmark industrial disaster.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    ...historyMaterials
  ],
  questions: [
    {
      id: "upsc-polity-fundamental-rights-q01",
      topicId: "upsc-polity-fundamental-rights",
      text: "In which Part of the Constitution are the Fundamental Rights enshrined?",
      optionA: "Part II (Articles 5–11)",
      optionB: "Part IVA (Article 51A)",
      optionC: "Part IV (Articles 36–51)",
      optionD: "Part III (Articles 12–35)",
      correctOption: "D",
      explanation: "Fundamental Rights occupy Part III; Part IV holds the Directive Principles and Part IVA the Fundamental Duties.",
      orderIndex: 0
    },
    {
      id: "upsc-polity-fundamental-rights-q02",
      topicId: "upsc-polity-fundamental-rights",
      text: "Consider the following statements about the Right to Property:\n1. It was originally a Fundamental Right.\n2. The 44th Amendment made it a legal right under Article 300A.\nWhich is/are correct?",
      optionA: "Neither 1 nor 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "The 44th Amendment (1978) removed property from Part III and re-cast it as a legal right under Article 300A.",
      orderIndex: 1
    },
    {
      id: "upsc-polity-fundamental-rights-q03",
      topicId: "upsc-polity-fundamental-rights",
      text: "Which Article did Dr. B.R. Ambedkar call the 'heart and soul' of the Constitution?",
      optionA: "Article 14",
      optionB: "Article 19",
      optionC: "Article 32",
      optionD: "Article 21",
      correctOption: "C",
      explanation: "Article 32 guarantees the right to constitutional remedies, making the other rights enforceable.",
      orderIndex: 2
    },
    {
      id: "upsc-polity-fundamental-rights-q04",
      topicId: "upsc-polity-fundamental-rights",
      text: "How many freedoms are guaranteed to citizens under Article 19?",
      optionA: "Six",
      optionB: "Five",
      optionC: "Four",
      optionD: "Seven",
      correctOption: "A",
      explanation: "After the 44th Amendment removed the right to property, Article 19 now lists six freedoms.",
      orderIndex: 3
    },
    {
      id: "upsc-polity-fundamental-rights-q05",
      topicId: "upsc-polity-fundamental-rights",
      text: "Consider the following statements:\n1. Articles 20 and 21 cannot be suspended even during a national emergency.\n2. The writ of Habeas Corpus can be issued against private individuals.\nWhich is/are correct?",
      optionA: "2 only",
      optionB: "1 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "The 44th Amendment protects Articles 20 and 21; Habeas Corpus lies against both the State and private persons.",
      orderIndex: 4
    },
    {
      id: "upsc-polity-fundamental-rights-q06",
      topicId: "upsc-polity-fundamental-rights",
      text: "The Right to Education under Article 21A was inserted by which Constitutional Amendment?",
      optionA: "44th Amendment",
      optionB: "73rd Amendment",
      optionC: "42nd Amendment",
      optionD: "86th Amendment",
      correctOption: "D",
      explanation: "The 86th Amendment (2002) added Article 21A guaranteeing free education to children aged 6 to 14.",
      orderIndex: 5
    },
    {
      id: "upsc-polity-fundamental-rights-q07",
      topicId: "upsc-polity-fundamental-rights",
      text: "Which writ is issued to quash an order already passed by a lower court or tribunal?",
      optionA: "Quo-Warranto",
      optionB: "Certiorari",
      optionC: "Mandamus",
      optionD: "Prohibition",
      correctOption: "B",
      explanation: "Certiorari quashes a decision already made; Prohibition stops proceedings still in progress.",
      orderIndex: 6
    },
    {
      id: "upsc-polity-fundamental-rights-q08",
      topicId: "upsc-polity-fundamental-rights",
      text: "From which country's constitution did India borrow the concept of Fundamental Rights?",
      optionA: "United States",
      optionB: "United Kingdom",
      optionC: "Ireland",
      optionD: "Canada",
      correctOption: "A",
      explanation: "Fundamental Rights were inspired by the US Bill of Rights; the Directive Principles came from Ireland.",
      orderIndex: 7
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q01",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "A Money Bill can be introduced only in which House of Parliament?",
      optionA: "A joint sitting",
      optionB: "Rajya Sabha",
      optionC: "Lok Sabha",
      optionD: "Either House",
      correctOption: "C",
      explanation: "Under Article 110, a Money Bill originates only in the Lok Sabha; the Rajya Sabha may delay it 14 days.",
      orderIndex: 0
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q02",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "Consider the following statements:\n1. The Rajya Sabha is a permanent House not subject to dissolution.\n2. One-third of its members retire every two years.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "1 only",
      correctOption: "A",
      explanation: "The Rajya Sabha is permanent and one-third of its members retire biennially, giving each a six-year term.",
      orderIndex: 1
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q03",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "Who presides over a joint sitting of both Houses of Parliament?",
      optionA: "The Speaker of the Lok Sabha",
      optionB: "The Vice-President",
      optionC: "The President",
      optionD: "The senior-most member",
      correctOption: "A",
      explanation: "Under Article 108, the Speaker of the Lok Sabha presides over a joint sitting.",
      orderIndex: 2
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q04",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "What is the minimum age to become a member of the Rajya Sabha?",
      optionA: "21 years",
      optionB: "30 years",
      optionC: "35 years",
      optionD: "25 years",
      correctOption: "B",
      explanation: "A Rajya Sabha member must be at least 30 years old, against 25 for the Lok Sabha.",
      orderIndex: 3
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q05",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "The quorum to constitute a sitting of either House is what fraction of its total membership?",
      optionA: "One-half",
      optionB: "One-fifth",
      optionC: "One-fourth",
      optionD: "One-tenth",
      correctOption: "D",
      explanation: "Article 100 fixes the quorum for either House at one-tenth of the total number of members.",
      orderIndex: 4
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q06",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "The anti-defection law is contained in which Schedule of the Constitution?",
      optionA: "Eighth Schedule",
      optionB: "Ninth Schedule",
      optionC: "Tenth Schedule",
      optionD: "Twelfth Schedule",
      correctOption: "C",
      explanation: "The 52nd Amendment (1985) added the Tenth Schedule dealing with disqualification on grounds of defection.",
      orderIndex: 5
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q07",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "Under which Article can Parliament create or abolish a State Legislative Council?",
      optionA: "Article 200",
      optionB: "Article 169",
      optionC: "Article 249",
      optionD: "Article 312",
      correctOption: "B",
      explanation: "Article 169 lets Parliament create or abolish a Vidhan Parishad on a special-majority resolution of the state assembly.",
      orderIndex: 6
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q08",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "Who is the ex-officio Chairman of the Rajya Sabha?",
      optionA: "The President",
      optionB: "The Prime Minister",
      optionC: "The Speaker",
      optionD: "The Vice-President",
      correctOption: "D",
      explanation: "The Vice-President of India serves as the ex-officio Chairman of the Rajya Sabha.",
      orderIndex: 7
    },
    {
      id: "upsc-modern-history-revolt-of-1857-q01",
      topicId: "upsc-modern-history-revolt-of-1857",
      text: "The Revolt of 1857 began at which cantonment?",
      optionA: "Meerut",
      optionB: "Barrackpore",
      optionC: "Kanpur",
      optionD: "Lucknow",
      correctOption: "A",
      explanation: "The mutiny erupted at Meerut on 10 May 1857 before spreading to Delhi.",
      orderIndex: 0
    },
    {
      id: "upsc-modern-history-revolt-of-1857-q02",
      topicId: "upsc-modern-history-revolt-of-1857",
      text: "Who led the revolt at Lucknow?",
      optionA: "Kunwar Singh",
      optionB: "Nana Saheb",
      optionC: "Rani Lakshmibai",
      optionD: "Begum Hazrat Mahal",
      correctOption: "D",
      explanation: "Begum Hazrat Mahal led the uprising in Lucknow on behalf of her son Birjis Qadr.",
      orderIndex: 1
    },
    {
      id: "upsc-modern-history-revolt-of-1857-q03",
      topicId: "upsc-modern-history-revolt-of-1857",
      text: "Consider the following statements:\n1. The Doctrine of Lapse was a political cause of the revolt.\n2. The Government of India Act, 1858 ended Company rule.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "Dalhousie's annexations bred resentment, and the 1858 Act transferred power to the British Crown.",
      orderIndex: 2
    },
    {
      id: "upsc-modern-history-revolt-of-1857-q04",
      topicId: "upsc-modern-history-revolt-of-1857",
      text: "Who fired the first shot of the revolt at Barrackpore?",
      optionA: "Mangal Pandey",
      optionB: "Bakht Khan",
      optionC: "Tantia Tope",
      optionD: "Bahadur Shah Zafar",
      correctOption: "A",
      explanation: "Sepoy Mangal Pandey of the 34th Native Infantry fired on his officers at Barrackpore in March 1857.",
      orderIndex: 3
    },
    {
      id: "upsc-modern-history-revolt-of-1857-q05",
      topicId: "upsc-modern-history-revolt-of-1857",
      text: "The immediate cause of the revolt was the rumour about which item?",
      optionA: "A new salt tax",
      optionB: "Abolition of sati",
      optionC: "Greased Enfield cartridges",
      optionD: "Forced religious conversion",
      correctOption: "C",
      explanation: "Cartridges greased with cow and pig fat offended Hindu and Muslim sepoys, triggering the mutiny.",
      orderIndex: 4
    },
    {
      id: "upsc-modern-history-revolt-of-1857-q06",
      topicId: "upsc-modern-history-revolt-of-1857",
      text: "Which Mughal ruler was proclaimed the symbolic leader of the revolt at Delhi?",
      optionA: "Akbar II",
      optionB: "Bahadur Shah Zafar",
      optionC: "Shah Alam II",
      optionD: "Aurangzeb",
      correctOption: "B",
      explanation: "The rebels rallied around Bahadur Shah Zafar II, the last Mughal emperor, at Delhi.",
      orderIndex: 5
    },
    {
      id: "upsc-modern-history-revolt-of-1857-q07",
      topicId: "upsc-modern-history-revolt-of-1857",
      text: "Who described the 1857 revolt as the 'First War of Independence'?",
      optionA: "V.D. Savarkar",
      optionB: "S.N. Sen",
      optionC: "R.C. Majumdar",
      optionD: "Benjamin Disraeli",
      correctOption: "A",
      explanation: "V.D. Savarkar called it the First War of Independence in his 1909 work on the subject.",
      orderIndex: 6
    },
    {
      id: "upsc-modern-history-revolt-of-1857-q08",
      topicId: "upsc-modern-history-revolt-of-1857",
      text: "Which leader defended Jhansi and later joined the rebels at Gwalior?",
      optionA: "Begum Hazrat Mahal",
      optionB: "Kunwar Singh",
      optionC: "Rani Lakshmibai",
      optionD: "Nana Saheb",
      correctOption: "C",
      explanation: "Rani Lakshmibai of Jhansi fought British forces and died in battle near Gwalior in 1858.",
      orderIndex: 7
    },
    {
      id: "upsc-geography-monsoon-and-climate-q01",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "The South-West Monsoon normally bursts over which state first?",
      optionA: "West Bengal",
      optionB: "Tamil Nadu",
      optionC: "Kerala",
      optionD: "Gujarat",
      correctOption: "C",
      explanation: "The monsoon onset usually occurs over Kerala around 1 June.",
      orderIndex: 0
    },
    {
      id: "upsc-geography-monsoon-and-climate-q02",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "Consider the following statements:\n1. El Niño conditions tend to weaken the Indian monsoon.\n2. La Niña conditions tend to strengthen it.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "El Niño typically suppresses monsoon rainfall while La Niña enhances it.",
      orderIndex: 1
    },
    {
      id: "upsc-geography-monsoon-and-climate-q03",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "Which is recorded as one of the wettest places on Earth?",
      optionA: "Mawsynram",
      optionB: "Pune",
      optionC: "Jaisalmer",
      optionD: "Leh",
      correctOption: "A",
      explanation: "Mawsynram in Meghalaya receives the highest average annual rainfall in the world.",
      orderIndex: 2
    },
    {
      id: "upsc-geography-monsoon-and-climate-q04",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "'Mango showers' are pre-monsoon rains associated mainly with which region?",
      optionA: "Punjab and Haryana",
      optionB: "Assam",
      optionC: "Rajasthan",
      optionD: "Kerala and Karnataka",
      correctOption: "D",
      explanation: "Pre-monsoon showers in Kerala and coastal Karnataka help ripen mangoes, hence the name.",
      orderIndex: 3
    },
    {
      id: "upsc-geography-monsoon-and-climate-q05",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "Winter rainfall in north-west India is caused mainly by:",
      optionA: "Western disturbances",
      optionB: "Norwesters",
      optionC: "Retreating monsoon",
      optionD: "Trade winds",
      correctOption: "A",
      explanation: "Western disturbances originating in the Mediterranean bring vital winter rain for the rabi crop.",
      orderIndex: 4
    },
    {
      id: "upsc-geography-monsoon-and-climate-q06",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "The two branches into which the South-West Monsoon splits are the:",
      optionA: "Coromandel and Malabar branches",
      optionB: "Arabian Sea and Bay of Bengal branches",
      optionC: "Himalayan and Peninsular branches",
      optionD: "Polar and Tropical branches",
      correctOption: "B",
      explanation: "The monsoon divides into the Arabian Sea branch and the Bay of Bengal branch.",
      orderIndex: 5
    },
    {
      id: "upsc-geography-monsoon-and-climate-q07",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "The seasonal reversal of winds that defines the monsoon is linked to the migration of the:",
      optionA: "Inter-Tropical Convergence Zone (ITCZ)",
      optionB: "Jet stream only",
      optionC: "Tropic of Cancer",
      optionD: "Equatorial low alone",
      correctOption: "A",
      explanation: "The northward shift of the ITCZ in summer pulls moisture-laden winds onto the subcontinent.",
      orderIndex: 6
    },
    {
      id: "upsc-geography-monsoon-and-climate-q08",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "'Kal Baisakhi' or Norwesters are violent thunderstorms that mainly affect:",
      optionA: "Gujarat",
      optionB: "Tamil Nadu",
      optionC: "West Bengal and Assam",
      optionD: "Kashmir",
      correctOption: "C",
      explanation: "These pre-monsoon evening storms strike Bengal and Assam, aiding tea and jute cultivation.",
      orderIndex: 7
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q01",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "Which body sets the policy repo rate in India?",
      optionA: "The Finance Ministry",
      optionB: "The Cabinet Committee on Economic Affairs",
      optionC: "The NITI Aayog",
      optionD: "The Monetary Policy Committee",
      correctOption: "D",
      explanation: "The six-member Monetary Policy Committee fixes the repo rate under the amended RBI Act.",
      orderIndex: 0
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q02",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "India's flexible inflation target is set at:",
      optionA: "4% ± 2%",
      optionB: "2% ± 2%",
      optionC: "5% ± 1%",
      optionD: "6% ± 2%",
      correctOption: "A",
      explanation: "The CPI inflation target is 4% with a tolerance band of plus or minus two percentage points.",
      orderIndex: 1
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q03",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "Consider the following statements:\n1. Core inflation excludes food and fuel prices.\n2. WPI includes the prices of services.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Core inflation strips out volatile food and fuel, while the WPI covers only goods, not services.",
      orderIndex: 2
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q04",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "The repo rate is the rate at which:",
      optionA: "Banks lend to the public",
      optionB: "RBI lends to commercial banks",
      optionC: "RBI borrows from banks",
      optionD: "Banks lend to one another",
      correctOption: "B",
      explanation: "Repo is the rate at which the RBI lends short-term funds to commercial banks against securities.",
      orderIndex: 3
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q05",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "A situation of high inflation combined with stagnant growth and high unemployment is called:",
      optionA: "Deflation",
      optionB: "Disinflation",
      optionC: "Reflation",
      optionD: "Stagflation",
      correctOption: "D",
      explanation: "Stagflation pairs rising prices with economic stagnation and high joblessness.",
      orderIndex: 4
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q06",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "To control high inflation, the RBI would typically:",
      optionA: "Reduce the repo rate",
      optionB: "Conduct OMO purchases",
      optionC: "Raise the repo rate",
      optionD: "Lower the CRR",
      correctOption: "C",
      explanation: "Raising the repo rate makes credit costlier, curbing demand and cooling inflation.",
      orderIndex: 5
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q07",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "The headline Consumer Price Index in India is released by:",
      optionA: "The NSO under MoSPI",
      optionB: "The SEBI",
      optionC: "The Office of the Economic Adviser",
      optionD: "The Reserve Bank of India",
      correctOption: "A",
      explanation: "The National Statistical Office under MoSPI compiles and releases the CPI.",
      orderIndex: 6
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q08",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "'Too much money chasing too few goods' best describes which type of inflation?",
      optionA: "Imported inflation",
      optionB: "Cost-push inflation",
      optionC: "Structural inflation",
      optionD: "Demand-pull inflation",
      correctOption: "D",
      explanation: "Demand-pull inflation arises when aggregate demand outstrips the available supply of goods.",
      orderIndex: 7
    },
    {
      id: "upsc-current-affairs-government-schemes-q01",
      topicId: "upsc-current-affairs-government-schemes",
      text: "Ayushman Bharat (PM-JAY) provides annual health cover of what amount per family?",
      optionA: "₹2 lakh",
      optionB: "₹3 lakh",
      optionC: "₹5 lakh",
      optionD: "₹10 lakh",
      correctOption: "C",
      explanation: "PM-JAY gives a health cover of ₹5 lakh per family per year for secondary and tertiary care.",
      orderIndex: 0
    },
    {
      id: "upsc-current-affairs-government-schemes-q02",
      topicId: "upsc-current-affairs-government-schemes",
      text: "The 'JAM' trinity used for Direct Benefit Transfer stands for:",
      optionA: "Jan Dhan, Awas, MGNREGA",
      optionB: "Jobs, Agriculture, Manufacturing",
      optionC: "Justice, Aadhaar, Money",
      optionD: "Jan Dhan, Aadhaar, Mobile",
      correctOption: "D",
      explanation: "JAM links Jan Dhan accounts, Aadhaar identity and Mobile numbers to deliver subsidies directly.",
      orderIndex: 1
    },
    {
      id: "upsc-current-affairs-government-schemes-q03",
      topicId: "upsc-current-affairs-government-schemes",
      text: "PM-KISAN provides income support of how much per year to eligible farmer families?",
      optionA: "₹12,000",
      optionB: "₹6,000",
      optionC: "₹8,000",
      optionD: "₹4,000",
      correctOption: "B",
      explanation: "PM-KISAN transfers ₹6,000 a year in three equal instalments of ₹2,000.",
      orderIndex: 2
    },
    {
      id: "upsc-current-affairs-government-schemes-q04",
      topicId: "upsc-current-affairs-government-schemes",
      text: "The Ujjwala Yojana is associated with the distribution of:",
      optionA: "Free LPG connections",
      optionB: "Bank accounts",
      optionC: "Solar panels",
      optionD: "Free housing",
      correctOption: "A",
      explanation: "PM Ujjwala Yojana provides free LPG connections to women from below-poverty-line households.",
      orderIndex: 3
    },
    {
      id: "upsc-current-affairs-government-schemes-q05",
      topicId: "upsc-current-affairs-government-schemes",
      text: "MGNREGA guarantees how many days of wage employment per rural household per year?",
      optionA: "50 days",
      optionB: "150 days",
      optionC: "100 days",
      optionD: "200 days",
      correctOption: "C",
      explanation: "The Act guarantees 100 days of unskilled manual wage employment to each rural household.",
      orderIndex: 4
    },
    {
      id: "upsc-current-affairs-government-schemes-q06",
      topicId: "upsc-current-affairs-government-schemes",
      text: "Consider the following statements:\n1. PM Jan Dhan Yojana provides RuPay debit cards.\n2. The Saubhagya scheme aims at universal household electrification.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Jan Dhan accounts come with RuPay cards, while Saubhagya targets electricity for all households.",
      orderIndex: 5
    },
    {
      id: "upsc-current-affairs-government-schemes-q07",
      topicId: "upsc-current-affairs-government-schemes",
      text: "The Production-Linked Incentive (PLI) scheme is designed primarily to boost:",
      optionA: "Agricultural exports",
      optionB: "Tourism",
      optionC: "Rural employment",
      optionD: "Domestic manufacturing",
      correctOption: "D",
      explanation: "PLI offers incentives on incremental sales to expand domestic manufacturing under Make in India.",
      orderIndex: 6
    },
    {
      id: "upsc-current-affairs-government-schemes-q08",
      topicId: "upsc-current-affairs-government-schemes",
      text: "The Swachh Bharat Mission is chiefly aimed at achieving:",
      optionA: "An open-defecation-free India",
      optionB: "Free education",
      optionC: "Universal banking",
      optionD: "Affordable housing",
      correctOption: "A",
      explanation: "The mission focuses on sanitation and making India open-defecation-free through toilet construction.",
      orderIndex: 7
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-q01",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      text: "In which Part of the Constitution are the Directive Principles of State Policy contained?",
      optionA: "Part IV (Articles 36-51)",
      optionB: "Part III (Articles 12-35)",
      optionC: "Part IVA (Article 51A)",
      optionD: "Part II (Articles 5-11)",
      correctOption: "A",
      explanation: "DPSP are contained in Part IV, Articles 36-51, and are borrowed from the Irish Constitution.",
      orderIndex: 0
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-q02",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      text: "Fundamental Duties were added to the Constitution by which amendment?",
      optionA: "86th Amendment, 2002",
      optionB: "42nd Amendment, 1976",
      optionC: "44th Amendment, 1978",
      optionD: "73rd Amendment, 1992",
      correctOption: "B",
      explanation: "The 42nd Amendment (1976) added Fundamental Duties on the recommendation of the Swaran Singh Committee.",
      orderIndex: 1
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-q03",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      text: "Consider the following statements about DPSP:\n1. They are justiciable and enforceable in courts.\n2. They were borrowed from the Irish Constitution.\nWhich is/are correct?",
      optionA: "2 only",
      optionB: "1 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "DPSP are non-justiciable but fundamental in governance; they were borrowed from the Irish Constitution.",
      orderIndex: 2
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-q04",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      text: "Which Article of the Constitution provides for a Uniform Civil Code?",
      optionA: "Article 40",
      optionB: "Article 44",
      optionC: "Article 39A",
      optionD: "Article 50",
      correctOption: "B",
      explanation: "Article 44 directs the State to secure a Uniform Civil Code; it is a liberal-intellectual directive.",
      orderIndex: 3
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-q05",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      text: "The Eleventh Fundamental Duty, added by the 86th Amendment (2002), relates to:",
      optionA: "Protecting the environment",
      optionB: "A parent's duty to provide education to a child aged 6-14",
      optionC: "Safeguarding public property",
      optionD: "Promoting scientific temper",
      correctOption: "B",
      explanation: "The 86th Amendment added the duty of a parent to provide education opportunities to a child aged 6-14.",
      orderIndex: 4
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-q06",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      text: "Consider the following statements:\n1. Article 50 calls for separation of the judiciary from the executive.\n2. Fundamental Duties are enshrined in Part IVA under Article 51A.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "Neither 1 nor 2",
      optionD: "2 only",
      correctOption: "B",
      explanation: "Article 50 mandates judiciary-executive separation; Fundamental Duties sit in Part IVA, Article 51A.",
      orderIndex: 5
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-q07",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      text: "Which case held that balance between Fundamental Rights and DPSP is part of the basic structure?",
      optionA: "Minerva Mills case (1980)",
      optionB: "Maneka Gandhi case (1978)",
      optionC: "Golaknath case (1967)",
      optionD: "Gopalan case (1950)",
      correctOption: "A",
      explanation: "In Minerva Mills (1980), the Supreme Court held the balance between FRs and DPSP is part of the basic structure.",
      orderIndex: 6
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-q08",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      text: "Article 39A, providing for free legal aid and equal justice, was added by which amendment?",
      optionA: "42nd Amendment",
      optionB: "44th Amendment",
      optionC: "86th Amendment",
      optionD: "1st Amendment",
      correctOption: "A",
      explanation: "Article 39A on equal justice and free legal aid was inserted by the 42nd Amendment of 1976.",
      orderIndex: 7
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-q01",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      text: "Under which Article is the Supreme Court of India established?",
      optionA: "Article 124",
      optionB: "Article 32",
      optionC: "Article 137",
      optionD: "Article 143",
      correctOption: "A",
      explanation: "Article 124 establishes the Supreme Court of India and provides for its composition.",
      orderIndex: 0
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-q02",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      text: "What is the present sanctioned strength of judges in the Supreme Court (including the CJI)?",
      optionA: "34",
      optionB: "26",
      optionC: "30",
      optionD: "31",
      correctOption: "A",
      explanation: "The sanctioned strength is 34: the Chief Justice of India plus up to 33 other judges.",
      orderIndex: 1
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-q03",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      text: "Consider the following statements:\n1. A Supreme Court judge holds office until 65 years of age.\n2. Article 137 empowers the court to review its own judgments.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "1 only",
      correctOption: "A",
      explanation: "SC judges retire at 65; Article 137 grants the power to review the court's own judgments.",
      orderIndex: 2
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-q04",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      text: "The advisory jurisdiction of the Supreme Court is provided under which Article?",
      optionA: "Article 131",
      optionB: "Article 143",
      optionC: "Article 136",
      optionD: "Article 132",
      correctOption: "B",
      explanation: "Article 143 allows the President to seek the advisory opinion of the Supreme Court.",
      orderIndex: 3
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-q05",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      text: "The 99th Amendment that created the NJAC was struck down by the Supreme Court in which year?",
      optionA: "2010",
      optionB: "2013",
      optionC: "2018",
      optionD: "2015",
      correctOption: "D",
      explanation: "The Supreme Court struck down the NJAC (99th Amendment) in 2015, restoring the collegium system.",
      orderIndex: 4
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-q06",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      text: "Consider the following statements about writ jurisdiction:\n1. A High Court issues writs under Article 226.\n2. Article 226 is wider than Article 32 as it covers legal rights too.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "High Courts issue writs under Article 226, which is wider than Article 32 since it covers legal rights too.",
      orderIndex: 5
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-q07",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      text: "Public Interest Litigation (PIL) in India was pioneered chiefly by which judges?",
      optionA: "H.J. Kania and M. Patanjali Sastri",
      optionB: "M. Hidayatullah and S.M. Sikri",
      optionC: "P.N. Bhagwati and V.R. Krishna Iyer",
      optionD: "A.N. Ray and Y.V. Chandrachud",
      correctOption: "C",
      explanation: "Justices P.N. Bhagwati and V.R. Krishna Iyer pioneered PIL by relaxing the rule of locus standi.",
      orderIndex: 6
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-q08",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      text: "The collegium system for the appointment of judges evolved from which cases?",
      optionA: "The Second and Third Judges Cases",
      optionB: "The First and Second Judges Cases",
      optionC: "The Kesavananda and Minerva cases",
      optionD: "The Golaknath and Maneka Gandhi cases",
      correctOption: "A",
      explanation: "The collegium system evolved primarily from the Second (1993) and Third (1998) Judges Cases.",
      orderIndex: 7
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-q01",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      text: "Which one of the following is a constitutional body?",
      optionA: "Election Commission of India",
      optionB: "National Human Rights Commission",
      optionC: "NITI Aayog",
      optionD: "Central Information Commission",
      correctOption: "A",
      explanation: "The Election Commission is a constitutional body under Article 324; the others are non-constitutional or statutory.",
      orderIndex: 0
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-q02",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      text: "The Comptroller and Auditor General of India is provided for under which Article?",
      optionA: "Article 280",
      optionB: "Article 324",
      optionC: "Article 315",
      optionD: "Article 148",
      correctOption: "D",
      explanation: "Article 148 provides for the CAG, the guardian of the public purse who audits government accounts.",
      orderIndex: 1
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-q03",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      text: "Consider the following statements:\n1. The Finance Commission is constituted under Article 280.\n2. It is set up every five years to recommend tax devolution.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "The Finance Commission, under Article 280, is constituted every five years for Centre-State tax devolution.",
      orderIndex: 2
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-q04",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      text: "The National Human Rights Commission (NHRC) was established under which law?",
      optionA: "Protection of Human Rights Act, 1993",
      optionB: "Lokpal and Lokayuktas Act, 2013",
      optionC: "RTI Act, 2005",
      optionD: "Right to Education Act, 2009",
      correctOption: "A",
      explanation: "The NHRC is a statutory body set up under the Protection of Human Rights Act, 1993.",
      orderIndex: 3
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-q05",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      text: "The National Commission for Backward Classes became a constitutional body under which Article?",
      optionA: "Article 280",
      optionB: "Article 338",
      optionC: "Article 324",
      optionD: "Article 338B",
      correctOption: "D",
      explanation: "The NCBC gained constitutional status under Article 338B via the 102nd Amendment (2018).",
      orderIndex: 4
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-q06",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      text: "Consider the following statements:\n1. The UPSC is a constitutional body under Article 315.\n2. The Lokpal is a statutory body created in 2013.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "Neither 1 nor 2",
      optionC: "2 only",
      optionD: "1 only",
      correctOption: "A",
      explanation: "The UPSC is constitutional under Article 315; the Lokpal is statutory under the 2013 Act.",
      orderIndex: 5
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-q07",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      text: "The Central Information Commission functions under which Act?",
      optionA: "Protection of Human Rights Act, 1993",
      optionB: "Right to Information Act, 2005",
      optionC: "Companies Act, 2013",
      optionD: "Lokpal and Lokayuktas Act, 2013",
      correctOption: "B",
      explanation: "The CIC is a statutory body that functions under the Right to Information Act, 2005.",
      orderIndex: 6
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-q08",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      text: "The Attorney General of India is provided for under which Article?",
      optionA: "Article 315",
      optionB: "Article 148",
      optionC: "Article 280",
      optionD: "Article 76",
      correctOption: "D",
      explanation: "Article 76 provides for the Attorney General, the highest law officer of the Union.",
      orderIndex: 7
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-q01",
      topicId: "upsc-modern-history-moderates-and-extremists",
      text: "Who was the first president of the Indian National Congress?",
      optionA: "W.C. Bonnerjee",
      optionB: "Dadabhai Naoroji",
      optionC: "A.O. Hume",
      optionD: "Surendranath Banerjee",
      correctOption: "A",
      explanation: "W.C. Bonnerjee presided over the first Congress session in 1885; A.O. Hume founded the party.",
      orderIndex: 0
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-q02",
      topicId: "upsc-modern-history-moderates-and-extremists",
      text: "The 'Drain Theory' explaining the economic exploitation of India was propounded by:",
      optionA: "Gopal Krishna Gokhale",
      optionB: "Dadabhai Naoroji",
      optionC: "Bal Gangadhar Tilak",
      optionD: "Bipin Chandra Pal",
      correctOption: "B",
      explanation: "Dadabhai Naoroji propounded the Drain Theory in his work Poverty and Un-British Rule in India.",
      orderIndex: 1
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-q03",
      topicId: "upsc-modern-history-moderates-and-extremists",
      text: "Consider the following statements:\n1. The Congress split into Moderates and Extremists at the Surat session of 1907.\n2. They reunited at the Lucknow session of 1916.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "The Surat Split occurred in 1907 and the two factions reunited at Lucknow in 1916.",
      orderIndex: 2
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-q04",
      topicId: "upsc-modern-history-moderates-and-extremists",
      text: "Which trio is collectively known as 'Lal-Bal-Pal'?",
      optionA: "Lala Hardayal, Tilak, B.G. Pal",
      optionB: "Lajpat Rai, Bonnerjee, Pherozeshah Mehta",
      optionC: "Lajpat Rai, Tilak, Bipin Chandra Pal",
      optionD: "Lajpat Rai, Gokhale, Naoroji",
      correctOption: "C",
      explanation: "Lal-Bal-Pal were the extremist leaders Lala Lajpat Rai, Bal Gangadhar Tilak and Bipin Chandra Pal.",
      orderIndex: 3
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-q05",
      topicId: "upsc-modern-history-moderates-and-extremists",
      text: "The slogan 'Swaraj is my birthright and I shall have it' was given by:",
      optionA: "Lala Lajpat Rai",
      optionB: "Bipin Chandra Pal",
      optionC: "Bal Gangadhar Tilak",
      optionD: "Aurobindo Ghosh",
      correctOption: "C",
      explanation: "Bal Gangadhar Tilak gave the famous slogan asserting Swaraj as a birthright.",
      orderIndex: 4
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-q06",
      topicId: "upsc-modern-history-moderates-and-extremists",
      text: "Consider the following statements:\n1. The Moderates relied on petitions, prayers and protests.\n2. The Swadeshi Movement was triggered by the Partition of Bengal in 1905.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Neither 1 nor 2",
      optionC: "2 only",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Moderates used the 3 Ps; the 1905 Partition of Bengal triggered the Swadeshi Movement.",
      orderIndex: 5
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-q07",
      topicId: "upsc-modern-history-moderates-and-extremists",
      text: "The Indian National Congress was founded in which year?",
      optionA: "1857",
      optionB: "1905",
      optionC: "1885",
      optionD: "1916",
      correctOption: "C",
      explanation: "The Indian National Congress was founded in 1885 by A.O. Hume.",
      orderIndex: 6
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-q08",
      topicId: "upsc-modern-history-moderates-and-extremists",
      text: "The Lucknow session of 1916 is notable because:",
      optionA: "It marked the founding of the Congress",
      optionB: "It launched the Quit India Movement",
      optionC: "It saw the Lucknow Pact with the Muslim League",
      optionD: "It abolished the Drain Theory",
      correctOption: "C",
      explanation: "The 1916 Lucknow session reunited Congress factions and produced the Lucknow Pact with the Muslim League.",
      orderIndex: 7
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-q01",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      text: "Gandhi's first Satyagraha in India, in 1917, was launched at:",
      optionA: "Kheda",
      optionB: "Ahmedabad",
      optionC: "Champaran",
      optionD: "Dandi",
      correctOption: "C",
      explanation: "The Champaran Satyagraha of 1917 opposed the tinkathia system imposed on indigo cultivators in Bihar.",
      orderIndex: 0
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-q02",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      text: "The Non-Cooperation Movement was withdrawn following which incident?",
      optionA: "Jallianwala Bagh massacre",
      optionB: "Chauri Chaura incident",
      optionC: "Failure of the Cripps Mission",
      optionD: "Partition of Bengal",
      correctOption: "B",
      explanation: "Gandhi withdrew the Non-Cooperation Movement in 1922 after the violent Chauri Chaura incident.",
      orderIndex: 1
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-q03",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      text: "Consider the following statements:\n1. The Dandi March began on 12 March 1930.\n2. The Civil Disobedience Movement broke the salt law.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "The Dandi March started on 12 March 1930 and launched Civil Disobedience by breaking the salt law.",
      orderIndex: 2
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-q04",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      text: "The slogan 'Do or Die' is associated with which movement?",
      optionA: "Non-Cooperation Movement",
      optionB: "Quit India Movement",
      optionC: "Swadeshi Movement",
      optionD: "Civil Disobedience Movement",
      correctOption: "B",
      explanation: "Gandhi gave the 'Do or Die' call during the Quit India Movement of 1942.",
      orderIndex: 3
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-q05",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      text: "The Kheda Satyagraha of 1918 was launched for:",
      optionA: "Remission of land revenue during crop failure",
      optionB: "Abolition of the tinkathia system",
      optionC: "Higher wages for mill workers",
      optionD: "Repeal of the salt tax",
      correctOption: "A",
      explanation: "The Kheda Satyagraha in Gujarat demanded remission of land revenue after crop failure.",
      orderIndex: 4
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-q06",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      text: "Consider the following statements:\n1. The Quit India Movement was triggered by the failure of the Cripps Mission.\n2. The Gandhi-Irwin Pact led to Congress joining the Second Round Table Conference.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Quit India followed the Cripps Mission failure; the 1931 Gandhi-Irwin Pact preceded the Second Round Table Conference.",
      orderIndex: 5
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-q07",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      text: "In which year did Mahatma Gandhi return to India from South Africa?",
      optionA: "1915",
      optionB: "1909",
      optionC: "1920",
      optionD: "1919",
      correctOption: "A",
      explanation: "Gandhi returned to India in 1915 and transformed the freedom struggle into a mass movement.",
      orderIndex: 6
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-q08",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      text: "Gandhi's first hunger strike in India was undertaken during which event?",
      optionA: "Champaran Satyagraha",
      optionB: "Kheda Satyagraha",
      optionC: "Ahmedabad Mill Strike",
      optionD: "Dandi March",
      correctOption: "C",
      explanation: "Gandhi undertook his first hunger strike during the 1918 Ahmedabad Mill Strike.",
      orderIndex: 7
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-q01",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      text: "The Brahmo Samaj was founded in 1828 by:",
      optionA: "Ishwar Chandra Vidyasagar",
      optionB: "Dayananda Saraswati",
      optionC: "Swami Vivekananda",
      optionD: "Raja Ram Mohan Roy",
      correctOption: "D",
      explanation: "Raja Ram Mohan Roy founded the Brahmo Samaj in 1828 and is called the Father of Indian Renaissance.",
      orderIndex: 0
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-q02",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      text: "The slogan 'Back to the Vedas' was given by:",
      optionA: "Raja Ram Mohan Roy",
      optionB: "Jyotiba Phule",
      optionC: "Dayananda Saraswati",
      optionD: "Sir Syed Ahmed Khan",
      correctOption: "C",
      explanation: "Dayananda Saraswati, founder of the Arya Samaj (1875), gave the slogan 'Back to the Vedas'.",
      orderIndex: 1
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-q03",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      text: "Consider the following statements:\n1. Sati was abolished by Lord William Bentinck in 1829.\n2. Raja Ram Mohan Roy campaigned against Sati.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "Lord William Bentinck abolished Sati in 1829, supported by Raja Ram Mohan Roy's campaign.",
      orderIndex: 2
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-q04",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      text: "The Satyashodhak Samaj (1873) was founded by:",
      optionA: "Swami Vivekananda",
      optionB: "Colonel Olcott",
      optionC: "Dayananda Saraswati",
      optionD: "Jyotiba Phule",
      correctOption: "D",
      explanation: "Jyotiba Phule founded the Satyashodhak Samaj in 1873 to fight caste oppression.",
      orderIndex: 3
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-q05",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      text: "Who championed the cause of widow remarriage, leading to the Act of 1856?",
      optionA: "Sir Syed Ahmed Khan",
      optionB: "Ishwar Chandra Vidyasagar",
      optionC: "Swami Vivekananda",
      optionD: "Madame Blavatsky",
      correctOption: "B",
      explanation: "Ishwar Chandra Vidyasagar championed widow remarriage, which led to the Widow Remarriage Act of 1856.",
      orderIndex: 4
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-q06",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      text: "Consider the following statements:\n1. The Ramakrishna Mission was founded by Swami Vivekananda in 1897.\n2. The Aligarh Movement was led by Sir Syed Ahmed Khan.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Vivekananda founded the Ramakrishna Mission in 1897; Sir Syed Ahmed Khan led the Aligarh Movement.",
      orderIndex: 5
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-q07",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      text: "The Shuddhi movement, aimed at reconversion, was started by which organisation?",
      optionA: "Theosophical Society",
      optionB: "Brahmo Samaj",
      optionC: "Ramakrishna Mission",
      optionD: "Arya Samaj",
      correctOption: "D",
      explanation: "The Arya Samaj, founded by Dayananda Saraswati, started the Shuddhi reconversion movement.",
      orderIndex: 6
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-q08",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      text: "The Theosophical Society was founded in 1875 by:",
      optionA: "Annie Besant alone",
      optionB: "Sir Syed Ahmed Khan",
      optionC: "Madame Blavatsky and Colonel Olcott",
      optionD: "Raja Ram Mohan Roy",
      correctOption: "C",
      explanation: "The Theosophical Society was founded in 1875 by Madame Blavatsky and Colonel Olcott.",
      orderIndex: 7
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-q01",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      text: "Mohenjo-daro is situated on the banks of which river?",
      optionA: "Indus",
      optionB: "Ravi",
      optionC: "Ghaggar",
      optionD: "Sutlej",
      correctOption: "A",
      explanation: "Mohenjo-daro, meaning Mound of the Dead, is located on the Indus river and housed the Great Bath.",
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-q02",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      text: "The site of Lothal is best known for its:",
      optionA: "Artificial dockyard",
      optionB: "Citadel",
      optionC: "Great Bath",
      optionD: "Pillared hall",
      correctOption: "A",
      explanation: "Lothal in Gujarat had an artificial dockyard, evidence of Harappan maritime trade.",
      orderIndex: 1
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-q03",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      text: "Consider the following statements:\n1. Harappa was discovered in 1921 by Daya Ram Sahni.\n2. Mohenjo-daro was discovered in 1922 by R.D. Banerji.\nWhich is/are correct?",
      optionA: "2 only",
      optionB: "Both 1 and 2",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "Harappa was found in 1921 by Daya Ram Sahni and Mohenjo-daro in 1922 by R.D. Banerji.",
      orderIndex: 2
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-q04",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      text: "The Harappans traded with Mesopotamia, where their land was referred to as:",
      optionA: "Meluhha",
      optionB: "Magan",
      optionC: "Dilmun",
      optionD: "Punt",
      correctOption: "A",
      explanation: "Mesopotamian records refer to the Indus region as Meluhha.",
      orderIndex: 3
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-q05",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      text: "The Indus Valley Civilisation belonged to which technological age?",
      optionA: "Iron Age",
      optionB: "Bronze Age",
      optionC: "Stone Age",
      optionD: "Copper Age only",
      correctOption: "B",
      explanation: "The IVC was a Bronze Age civilisation flourishing roughly 2600-1900 BCE.",
      orderIndex: 4
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-q06",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      text: "Consider the following statements:\n1. The Harappan script is pictographic and remains undeciphered.\n2. The Pashupati seal is regarded as a proto-Shiva representation.\nWhich is/are correct?",
      optionA: "2 only",
      optionB: "1 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "The pictographic Harappan script is undeciphered, and the Pashupati seal is seen as proto-Shiva.",
      orderIndex: 5
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-q07",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      text: "Harappan towns were typically laid out on which pattern?",
      optionA: "Grid pattern",
      optionB: "Radial pattern",
      optionC: "Concentric circles",
      optionD: "Random clusters",
      correctOption: "A",
      explanation: "Harappan towns followed a grid pattern with a citadel and a lower town, plus advanced drainage.",
      orderIndex: 6
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-q08",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      text: "Which deity was widely worshipped in the Indus Valley Civilisation?",
      optionA: "The Mother Goddess",
      optionB: "Indra",
      optionC: "Vishnu",
      optionD: "Surya",
      correctOption: "A",
      explanation: "The Harappans worshipped the Mother Goddess and a proto-Shiva Pashupati figure.",
      orderIndex: 7
    },
    {
      id: "upsc-ancient-history-mauryan-empire-q01",
      topicId: "upsc-ancient-history-mauryan-empire",
      text: "Who was the founder of the Mauryan Empire?",
      optionA: "Chandragupta Maurya",
      optionB: "Bindusara",
      optionC: "Ashoka",
      optionD: "Pushyamitra Shunga",
      correctOption: "A",
      explanation: "Chandragupta Maurya founded the empire in 322 BCE with the guidance of Chanakya (Kautilya).",
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-mauryan-empire-q02",
      topicId: "upsc-ancient-history-mauryan-empire",
      text: "The Greek envoy who wrote 'Indica' at the Mauryan court was:",
      optionA: "Seleucus",
      optionB: "Fa-Hien",
      optionC: "Megasthenes",
      optionD: "Hiuen Tsang",
      correctOption: "C",
      explanation: "Megasthenes, the Greek envoy of Seleucus, wrote Indica at Chandragupta Maurya's court.",
      orderIndex: 1
    },
    {
      id: "upsc-ancient-history-mauryan-empire-q03",
      topicId: "upsc-ancient-history-mauryan-empire",
      text: "Consider the following statements:\n1. The Kalinga War was fought in 261 BCE.\n2. After the war Ashoka propagated his policy of Dhamma.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "The Kalinga War of 261 BCE transformed Ashoka, who then propagated Dhamma.",
      orderIndex: 2
    },
    {
      id: "upsc-ancient-history-mauryan-empire-q04",
      topicId: "upsc-ancient-history-mauryan-empire",
      text: "The Arthashastra, a treatise on statecraft, was authored by:",
      optionA: "Megasthenes",
      optionB: "Kautilya (Chanakya)",
      optionC: "Harisena",
      optionD: "Varahamihira",
      correctOption: "B",
      explanation: "Kautilya, also known as Chanakya, authored the Arthashastra on statecraft, economy and espionage.",
      orderIndex: 3
    },
    {
      id: "upsc-ancient-history-mauryan-empire-q05",
      topicId: "upsc-ancient-history-mauryan-empire",
      text: "The Lion Capital of Sarnath, India's national emblem, was erected by:",
      optionA: "Chandragupta Maurya",
      optionB: "Bindusara",
      optionC: "Ashoka",
      optionD: "Samudragupta",
      correctOption: "C",
      explanation: "Ashoka's Lion Capital of Sarnath was adopted as India's national emblem.",
      orderIndex: 4
    },
    {
      id: "upsc-ancient-history-mauryan-empire-q06",
      topicId: "upsc-ancient-history-mauryan-empire",
      text: "Consider the following statements:\n1. Ashoka's edicts were inscribed in scripts including Brahmi and Kharosthi.\n2. The Mauryan dynasty ended with the assassination of Brihadratha by Pushyamitra Shunga.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "1 only",
      correctOption: "A",
      explanation: "Ashoka's edicts used Brahmi, Kharosthi, Greek and Aramaic; Pushyamitra Shunga killed Brihadratha in 185 BCE.",
      orderIndex: 5
    },
    {
      id: "upsc-ancient-history-mauryan-empire-q07",
      topicId: "upsc-ancient-history-mauryan-empire",
      text: "Which Mauryan ruler was known by the title 'Amitraghata'?",
      optionA: "Bindusara",
      optionB: "Chandragupta Maurya",
      optionC: "Ashoka",
      optionD: "Dasharatha",
      correctOption: "A",
      explanation: "Bindusara, son of Chandragupta, was known as Amitraghata, the slayer of foes.",
      orderIndex: 6
    },
    {
      id: "upsc-ancient-history-mauryan-empire-q08",
      topicId: "upsc-ancient-history-mauryan-empire",
      text: "Mauryan provinces were administered by princes who held which title?",
      optionA: "Mahamatras",
      optionB: "Kumaras",
      optionC: "Amatyas",
      optionD: "Rajukas",
      correctOption: "B",
      explanation: "Mauryan provinces were governed by princes known as Kumaras.",
      orderIndex: 7
    },
    {
      id: "upsc-ancient-history-gupta-age-q01",
      topicId: "upsc-ancient-history-gupta-age",
      text: "Which Gupta ruler is described as the 'Napoleon of India' by historian V.A. Smith?",
      optionA: "Chandragupta I",
      optionB: "Samudragupta",
      optionC: "Chandragupta II",
      optionD: "Skandagupta",
      correctOption: "B",
      explanation: "Samudragupta's extensive conquests earned him the title 'Napoleon of India' from V.A. Smith.",
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-gupta-age-q02",
      topicId: "upsc-ancient-history-gupta-age",
      text: "The Allahabad Pillar inscription (Prayag Prashasti) was composed by:",
      optionA: "Kalidasa",
      optionB: "Harisena",
      optionC: "Aryabhata",
      optionD: "Varahamihira",
      correctOption: "B",
      explanation: "Harisena composed the Allahabad Pillar inscription recording Samudragupta's conquests.",
      orderIndex: 1
    },
    {
      id: "upsc-ancient-history-gupta-age-q03",
      topicId: "upsc-ancient-history-gupta-age",
      text: "Consider the following statements:\n1. Aryabhata wrote the Aryabhatiya and proposed Earth's rotation.\n2. Fa-Hien visited India during Chandragupta II's reign.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Aryabhata wrote the Aryabhatiya; the Chinese pilgrim Fa-Hien visited during Chandragupta II's reign.",
      orderIndex: 2
    },
    {
      id: "upsc-ancient-history-gupta-age-q04",
      topicId: "upsc-ancient-history-gupta-age",
      text: "Chandragupta II earned fame by defeating which foreign rulers?",
      optionA: "The Hunas",
      optionB: "The Shakas",
      optionC: "The Kushanas",
      optionD: "The Greeks",
      correctOption: "B",
      explanation: "Chandragupta II Vikramaditya defeated the Shakas, extending Gupta power to western India.",
      orderIndex: 3
    },
    {
      id: "upsc-ancient-history-gupta-age-q05",
      topicId: "upsc-ancient-history-gupta-age",
      text: "Kalidasa, the celebrated Gupta-era poet, authored which work?",
      optionA: "Aryabhatiya",
      optionB: "Abhijnanashakuntalam",
      optionC: "Brihat Samhita",
      optionD: "Indica",
      correctOption: "B",
      explanation: "Kalidasa wrote Abhijnanashakuntalam; the Brihat Samhita was by Varahamihira.",
      orderIndex: 4
    },
    {
      id: "upsc-ancient-history-gupta-age-q06",
      topicId: "upsc-ancient-history-gupta-age",
      text: "Consider the following statements:\n1. The Gupta age is called the Golden Age of India.\n2. The decline of the Guptas was hastened by Huna invasions under Toramana and Mihirakula.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "The Gupta age is the Golden Age; Huna invasions led by Toramana and Mihirakula hastened its decline.",
      orderIndex: 5
    },
    {
      id: "upsc-ancient-history-gupta-age-q07",
      topicId: "upsc-ancient-history-gupta-age",
      text: "Who founded the Gupta dynasty and married Kumaradevi of the Licchavis?",
      optionA: "Samudragupta",
      optionB: "Sri Gupta",
      optionC: "Chandragupta II",
      optionD: "Chandragupta I",
      correctOption: "D",
      explanation: "Chandragupta I founded the imperial Gupta line and strengthened it by marrying Licchavi princess Kumaradevi.",
      orderIndex: 6
    },
    {
      id: "upsc-ancient-history-gupta-age-q08",
      topicId: "upsc-ancient-history-gupta-age",
      text: "The Mehrauli Iron Pillar is a notable example of Gupta-era advances in:",
      optionA: "Metallurgy",
      optionB: "Painting",
      optionC: "Astronomy",
      optionD: "Town planning",
      correctOption: "A",
      explanation: "The rust-resistant Mehrauli Iron Pillar demonstrates the high metallurgical skill of the Gupta period.",
      orderIndex: 7
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-q01",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      text: "Gautama Buddha attained enlightenment at which place?",
      optionA: "Lumbini",
      optionB: "Bodh Gaya",
      optionC: "Kushinagar",
      optionD: "Sarnath",
      correctOption: "B",
      explanation: "Buddha attained enlightenment at Bodh Gaya; he was born at Lumbini and gave his first sermon at Sarnath.",
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-q02",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      text: "Who was the 24th and last Tirthankara of Jainism?",
      optionA: "Rishabhanatha",
      optionB: "Parshvanatha",
      optionC: "Neminatha",
      optionD: "Mahavira",
      correctOption: "D",
      explanation: "Mahavira was the 24th Tirthankara; Rishabhanatha was the first and Parshvanatha the 23rd.",
      orderIndex: 1
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-q03",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      text: "Consider the following statements:\n1. Buddha's first sermon at Sarnath is called Dharmachakra Pravartana.\n2. Buddhism follows the Middle Path.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "The first sermon at Sarnath is the Dharmachakra Pravartana; Buddhism advocates the Middle Path.",
      orderIndex: 2
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-q04",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      text: "The Fourth Buddhist Council, which split Buddhism into Hinayana and Mahayana, was held under:",
      optionA: "Kanishka",
      optionB: "Bindusara",
      optionC: "Ajatashatru",
      optionD: "Ashoka",
      correctOption: "A",
      explanation: "The Fourth Buddhist Council was held under Kanishka and led to the Hinayana-Mahayana split.",
      orderIndex: 3
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-q05",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      text: "The Three Jewels (Triratna) of Jainism are right faith, right knowledge and:",
      optionA: "Right conduct",
      optionB: "Right livelihood",
      optionC: "Right speech",
      optionD: "Right mindfulness",
      correctOption: "A",
      explanation: "The Jain Triratna comprises right faith, right knowledge and right conduct.",
      orderIndex: 4
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-q06",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      text: "Consider the following statements:\n1. The Third Buddhist Council was held under Ashoka at Pataliputra.\n2. Early Buddhist texts (Tripitaka) were written in Pali.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "1 only",
      optionC: "Neither 1 nor 2",
      optionD: "2 only",
      correctOption: "A",
      explanation: "The Third Council met under Ashoka at Pataliputra; the Tripitaka was composed in Pali.",
      orderIndex: 5
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-q07",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      text: "The two principal sects of Jainism are:",
      optionA: "Hinayana and Mahayana",
      optionB: "Saguna and Nirguna",
      optionC: "Theravada and Vajrayana",
      optionD: "Digambara and Svetambara",
      correctOption: "D",
      explanation: "Jainism's two principal sects are the Digambara (sky-clad) and Svetambara (white-clad).",
      orderIndex: 6
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-q08",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      text: "The core ethical principle emphasised by Jainism is:",
      optionA: "Ahimsa (non-violence)",
      optionB: "Moksha through ritual",
      optionC: "Animal sacrifice",
      optionD: "Idol worship",
      correctOption: "A",
      explanation: "Ahimsa, or non-violence, is the central ethical principle of Jainism.",
      orderIndex: 7
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-q01",
      topicId: "upsc-medieval-history-delhi-sultanate",
      text: "Who founded the Slave (Mamluk) dynasty of the Delhi Sultanate in 1206?",
      optionA: "Iltutmish",
      optionB: "Qutb-ud-din Aibak",
      optionC: "Balban",
      optionD: "Jalal-ud-din Khalji",
      correctOption: "B",
      explanation: "Qutb-ud-din Aibak founded the Slave dynasty in 1206 and began the Qutub Minar.",
      orderIndex: 0
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-q02",
      topicId: "upsc-medieval-history-delhi-sultanate",
      text: "The only woman to rule the Delhi Sultanate was:",
      optionA: "Chand Bibi",
      optionB: "Razia Sultana",
      optionC: "Nur Jahan",
      optionD: "Rani Durgavati",
      correctOption: "B",
      explanation: "Razia Sultana, daughter of Iltutmish, was the only woman to rule the Delhi Sultanate.",
      orderIndex: 1
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-q03",
      topicId: "upsc-medieval-history-delhi-sultanate",
      text: "Consider the following statements:\n1. Alauddin Khalji introduced market price control reforms.\n2. He repelled repeated Mongol invasions.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Alauddin Khalji introduced market control reforms and successfully repelled Mongol invasions.",
      orderIndex: 2
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-q04",
      topicId: "upsc-medieval-history-delhi-sultanate",
      text: "The transfer of capital to Daulatabad and the issue of token currency are associated with:",
      optionA: "Firoz Shah Tughlaq",
      optionB: "Muhammad bin Tughlaq",
      optionC: "Ghiyasuddin Tughlaq",
      optionD: "Bahlol Lodi",
      correctOption: "B",
      explanation: "Muhammad bin Tughlaq shifted the capital to Daulatabad and introduced token currency.",
      orderIndex: 3
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-q05",
      topicId: "upsc-medieval-history-delhi-sultanate",
      text: "Under the iqta system of the Delhi Sultanate, an iqta referred to:",
      optionA: "A unit of currency",
      optionB: "A military rank",
      optionC: "An assignment of land revenue in lieu of salary",
      optionD: "A religious tax",
      correctOption: "C",
      explanation: "The iqta system assigned land revenue to officials in place of a cash salary.",
      orderIndex: 4
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-q06",
      topicId: "upsc-medieval-history-delhi-sultanate",
      text: "Consider the following statements:\n1. The Qutub Minar was begun by Qutb-ud-din Aibak and completed by Iltutmish.\n2. The Delhi Sultanate ended with the First Battle of Panipat in 1526.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "Aibak began and Iltutmish completed the Qutub Minar; Babur ended the Sultanate at Panipat in 1526.",
      orderIndex: 5
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-q07",
      topicId: "upsc-medieval-history-delhi-sultanate",
      text: "Which ruler founded the Lodi dynasty, the last of the Delhi Sultanate?",
      optionA: "Khizr Khan",
      optionB: "Ibrahim Lodi",
      optionC: "Sikandar Lodi",
      optionD: "Bahlol Lodi",
      correctOption: "D",
      explanation: "Bahlol Lodi founded the Lodi dynasty in 1451; Ibrahim Lodi was the last Sultan.",
      orderIndex: 6
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-q08",
      topicId: "upsc-medieval-history-delhi-sultanate",
      text: "Firoz Shah Tughlaq is particularly remembered for:",
      optionA: "Introducing token currency",
      optionB: "Levying jizya and building canals",
      optionC: "Transferring the capital to Daulatabad",
      optionD: "Defeating Babur at Panipat",
      correctOption: "B",
      explanation: "Firoz Shah Tughlaq levied the jizya tax and built irrigation canals.",
      orderIndex: 7
    },
    {
      id: "upsc-medieval-history-mughal-empire-q01",
      topicId: "upsc-medieval-history-mughal-empire",
      text: "The Mughal Empire was founded after the First Battle of Panipat (1526) by:",
      optionA: "Babur",
      optionB: "Akbar",
      optionC: "Sher Shah Suri",
      optionD: "Humayun",
      correctOption: "A",
      explanation: "Babur founded the Mughal Empire after defeating Ibrahim Lodi at the First Battle of Panipat in 1526.",
      orderIndex: 0
    },
    {
      id: "upsc-medieval-history-mughal-empire-q02",
      topicId: "upsc-medieval-history-mughal-empire",
      text: "Who introduced the silver coin 'rupiya' and built the Grand Trunk Road?",
      optionA: "Aurangzeb",
      optionB: "Akbar",
      optionC: "Babur",
      optionD: "Sher Shah Suri",
      correctOption: "D",
      explanation: "Sher Shah Suri introduced the rupiya and developed the Grand Trunk Road.",
      orderIndex: 1
    },
    {
      id: "upsc-medieval-history-mughal-empire-q03",
      topicId: "upsc-medieval-history-mughal-empire",
      text: "Consider the following statements:\n1. Akbar abolished the jizya tax.\n2. Akbar started the Din-i-Ilahi in 1582.\nWhich is/are correct?",
      optionA: "Neither 1 nor 2",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "1 only",
      correctOption: "B",
      explanation: "Akbar abolished the jizya and founded the syncretic Din-i-Ilahi in 1582.",
      orderIndex: 2
    },
    {
      id: "upsc-medieval-history-mughal-empire-q04",
      topicId: "upsc-medieval-history-mughal-empire",
      text: "The Zabti or Dahsala revenue system was developed under Akbar by:",
      optionA: "Raja Todar Mal",
      optionB: "Abul Fazl",
      optionC: "Birbal",
      optionD: "Man Singh",
      correctOption: "A",
      explanation: "Raja Todar Mal developed the Zabti (Dahsala) land revenue system under Akbar.",
      orderIndex: 3
    },
    {
      id: "upsc-medieval-history-mughal-empire-q05",
      topicId: "upsc-medieval-history-mughal-empire",
      text: "In the Mansabdari system, the ranks 'zat' and 'sawar' indicated respectively:",
      optionA: "Tax rate and revenue share",
      optionB: "Personal status and cavalry obligation",
      optionC: "Religious rank and military rank",
      optionD: "Land grant and salary",
      correctOption: "B",
      explanation: "Zat denoted personal status and pay, while sawar indicated the number of cavalry to be maintained.",
      orderIndex: 4
    },
    {
      id: "upsc-medieval-history-mughal-empire-q06",
      topicId: "upsc-medieval-history-mughal-empire",
      text: "Consider the following statements:\n1. Shah Jahan built the Taj Mahal.\n2. Mughal painting peaked under Jahangir.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Neither 1 nor 2",
      optionC: "Both 1 and 2",
      optionD: "2 only",
      correctOption: "C",
      explanation: "Shah Jahan built the Taj Mahal and Mughal painting reached its zenith under Jahangir.",
      orderIndex: 5
    },
    {
      id: "upsc-medieval-history-mughal-empire-q07",
      topicId: "upsc-medieval-history-mughal-empire",
      text: "Which Mughal emperor re-imposed the jizya and expanded the empire to its greatest extent?",
      optionA: "Akbar",
      optionB: "Jahangir",
      optionC: "Shah Jahan",
      optionD: "Aurangzeb",
      correctOption: "D",
      explanation: "Aurangzeb re-imposed the jizya and took the empire to its greatest territorial extent.",
      orderIndex: 6
    },
    {
      id: "upsc-medieval-history-mughal-empire-q08",
      topicId: "upsc-medieval-history-mughal-empire",
      text: "Mughal emperor Humayun is best known for:",
      optionA: "Building Fatehpur Sikri",
      optionB: "Starting the Din-i-Ilahi",
      optionC: "Building the Taj Mahal",
      optionD: "Losing his throne to Sher Shah Suri",
      correctOption: "D",
      explanation: "Humayun temporarily lost the throne to Sher Shah Suri before regaining it in 1555.",
      orderIndex: 7
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-q01",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      text: "Which saint founded Sikhism?",
      optionA: "Chaitanya",
      optionB: "Ramananda",
      optionC: "Kabir",
      optionD: "Guru Nanak",
      correctOption: "D",
      explanation: "Guru Nanak founded Sikhism; he was a Nirguna saint who rejected ritualism and caste.",
      orderIndex: 0
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-q02",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      text: "The Bhakti saint Mirabai was devoted to:",
      optionA: "Vishnu as Vithoba",
      optionB: "Shiva",
      optionC: "Rama",
      optionD: "Krishna",
      correctOption: "D",
      explanation: "Mirabai of Rajasthan was a devotee of Krishna and a celebrated Bhakti poet.",
      orderIndex: 1
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-q03",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      text: "Consider the following statements:\n1. Kabir and Guru Nanak were Nirguna saints.\n2. Saguna saints worshipped a god with form.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "Kabir and Guru Nanak belonged to the Nirguna (formless) school; Saguna saints worshipped a god with form.",
      orderIndex: 2
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-q04",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      text: "The Chishti Sufi order in India is most closely associated with which saint of Ajmer?",
      optionA: "Nizamuddin Auliya",
      optionB: "Khwaja Moinuddin Chishti",
      optionC: "Baba Farid",
      optionD: "Sheikh Bahauddin Zakariya",
      correctOption: "B",
      explanation: "Khwaja Moinuddin Chishti of Ajmer founded the influential Chishti order in India.",
      orderIndex: 3
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-q05",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      text: "In Sufi tradition, a 'khanqah' refers to:",
      optionA: "A mystical order",
      optionB: "A devotional song",
      optionC: "A Sufi hospice",
      optionD: "A holy relic",
      correctOption: "C",
      explanation: "A khanqah was a Sufi hospice where the saint lived and disciples gathered.",
      orderIndex: 4
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-q06",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      text: "Consider the following statements:\n1. Sufi orders were organised into silsilas.\n2. Sama, or devotional music, was central to the Chishti order.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Sufism was organised into silsilas (orders), and Sama (devotional music) was central to the Chishtis.",
      orderIndex: 5
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-q07",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      text: "The Bhakti saint Chaitanya is chiefly associated with which region?",
      optionA: "Bengal",
      optionB: "Awadh",
      optionC: "Rajasthan",
      optionD: "Maharashtra",
      correctOption: "A",
      explanation: "Chaitanya Mahaprabhu spread Krishna devotion in Bengal and Odisha.",
      orderIndex: 6
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-q08",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      text: "The poet and musician closely associated with Nizamuddin Auliya was:",
      optionA: "Tulsidas",
      optionB: "Kabir",
      optionC: "Surdas",
      optionD: "Amir Khusro",
      correctOption: "D",
      explanation: "Amir Khusro, a disciple of Nizamuddin Auliya, contributed greatly to a composite Indo-Islamic culture.",
      orderIndex: 7
    },
    {
      id: "upsc-art-and-culture-temple-architecture-q01",
      topicId: "upsc-art-and-culture-temple-architecture",
      text: "The curvilinear shikhara is the defining feature of which temple style?",
      optionA: "Nagara",
      optionB: "Dravida",
      optionC: "Vesara",
      optionD: "Kalinga only",
      correctOption: "A",
      explanation: "The Nagara style of north India is marked by a curvilinear shikhara and lacks boundary walls.",
      orderIndex: 0
    },
    {
      id: "upsc-art-and-culture-temple-architecture-q02",
      topicId: "upsc-art-and-culture-temple-architecture",
      text: "The gopuram, a towering gateway, is a characteristic feature of which style?",
      optionA: "Nagara",
      optionB: "Dravida",
      optionC: "Vesara",
      optionD: "Bengal terracotta",
      correctOption: "B",
      explanation: "The Dravida temple of south India is enclosed by walls with a gopuram gateway tower.",
      orderIndex: 1
    },
    {
      id: "upsc-art-and-culture-temple-architecture-q03",
      topicId: "upsc-art-and-culture-temple-architecture",
      text: "Consider the following statements:\n1. The Brihadeshwara Temple at Thanjavur was built by the Cholas.\n2. The Kandariya Mahadeva at Khajuraho is a Nagara temple.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "The Chola Brihadeshwara Temple is Dravida; Khajuraho's Kandariya Mahadeva is a Nagara temple.",
      orderIndex: 2
    },
    {
      id: "upsc-art-and-culture-temple-architecture-q04",
      topicId: "upsc-art-and-culture-temple-architecture",
      text: "In temple architecture, the 'garbhagriha' is the:",
      optionA: "Assembly hall",
      optionB: "Circumambulatory path",
      optionC: "Sanctum housing the deity",
      optionD: "Gateway tower",
      correctOption: "C",
      explanation: "The garbhagriha is the sanctum sanctorum that houses the main deity; the mandapa is the assembly hall.",
      orderIndex: 3
    },
    {
      id: "upsc-art-and-culture-temple-architecture-q05",
      topicId: "upsc-art-and-culture-temple-architecture",
      text: "The monolithic Kailasa Temple at Ellora was carved by which dynasty?",
      optionA: "Cholas",
      optionB: "Rashtrakutas",
      optionC: "Pallavas",
      optionD: "Hoysalas",
      correctOption: "B",
      explanation: "The Rashtrakutas carved the monolithic Kailasa Temple at Ellora from top to bottom.",
      orderIndex: 4
    },
    {
      id: "upsc-art-and-culture-temple-architecture-q06",
      topicId: "upsc-art-and-culture-temple-architecture",
      text: "Consider the following statements:\n1. The Vesara style is a hybrid associated with the Chalukyas and Hoysalas.\n2. The shore temple and rathas at Mahabalipuram were built by the Pallavas.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Vesara is a hybrid style of the Chalukyas and Hoysalas; Mahabalipuram's monuments are Pallava works.",
      orderIndex: 5
    },
    {
      id: "upsc-art-and-culture-temple-architecture-q07",
      topicId: "upsc-art-and-culture-temple-architecture",
      text: "The Sun Temple at Konark is an example of which architectural style?",
      optionA: "Nagara",
      optionB: "Vesara",
      optionC: "Dravida",
      optionD: "Indo-Saracenic",
      correctOption: "A",
      explanation: "The Sun Temple at Konark is a famous Nagara-style temple in Odisha.",
      orderIndex: 6
    },
    {
      id: "upsc-art-and-culture-temple-architecture-q08",
      topicId: "upsc-art-and-culture-temple-architecture",
      text: "The amalaka and kalasha typically crown the tower of which temple style?",
      optionA: "Cave temples",
      optionB: "Dravida",
      optionC: "Vesara",
      optionD: "Nagara",
      correctOption: "D",
      explanation: "The amalaka and kalasha crown the shikhara of a Nagara-style temple.",
      orderIndex: 7
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-q01",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      text: "How many dance forms are officially recognised as classical in India?",
      optionA: "Six",
      optionB: "Seven",
      optionC: "Nine",
      optionD: "Eight",
      correctOption: "D",
      explanation: "India recognises eight classical dance forms, each rooted in Bharata's Natya Shastra.",
      orderIndex: 0
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-q02",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      text: "Which classical dance form originates from Kerala and uses elaborate make-up and masks?",
      optionA: "Kuchipudi",
      optionB: "Kathakali",
      optionC: "Odissi",
      optionD: "Manipuri",
      correctOption: "B",
      explanation: "Kathakali of Kerala uses elaborate make-up and masks to depict episodes from the epics.",
      orderIndex: 1
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-q03",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      text: "Consider the following statements:\n1. Bharatanatyam is the oldest classical dance and originated in temples.\n2. Kathak shows strong Persian and Mughal influence.\nWhich is/are correct?",
      optionA: "Neither 1 nor 2",
      optionB: "1 only",
      optionC: "Both 1 and 2",
      optionD: "2 only",
      correctOption: "C",
      explanation: "Bharatanatyam is the oldest temple dance, and Kathak carries strong Persian and Mughal influence.",
      orderIndex: 2
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-q04",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      text: "Sattriya, a classical dance form, originated in which state?",
      optionA: "Odisha",
      optionB: "Manipur",
      optionC: "Assam",
      optionD: "Tamil Nadu",
      correctOption: "C",
      explanation: "Sattriya originated in Assam and was founded by the Vaishnavite saint Sankaradeva.",
      orderIndex: 3
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-q05",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      text: "Mohiniyattam, a solo female dance embodying Lasya grace, belongs to:",
      optionA: "Odisha",
      optionB: "Andhra Pradesh",
      optionC: "Kerala",
      optionD: "Karnataka",
      correctOption: "C",
      explanation: "Mohiniyattam is a graceful solo female dance form from Kerala embodying the Lasya aspect.",
      orderIndex: 4
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-q06",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      text: "Consider the following statements:\n1. Tandava is the vigorous, masculine aspect of dance.\n2. Lasya is the graceful, feminine aspect of dance.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "1 only",
      correctOption: "A",
      explanation: "Tandava is the vigorous masculine aspect and Lasya the graceful feminine aspect of dance.",
      orderIndex: 5
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-q07",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      text: "The foundational treatise on Indian performing arts is the:",
      optionA: "Abhinaya Darpana only",
      optionB: "Arthashastra",
      optionC: "Sangeet Ratnakara",
      optionD: "Natya Shastra",
      correctOption: "D",
      explanation: "Bharata's Natya Shastra is the foundational treatise underpinning India's classical dance forms.",
      orderIndex: 6
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-q08",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      text: "Manipuri dance is best known for its gentle devotional movements linked to:",
      optionA: "Mughal courts",
      optionB: "Tandava",
      optionC: "The devadasi tradition",
      optionD: "Raslila",
      correctOption: "D",
      explanation: "Manipuri dance is known for its gentle, devotional movements linked to the Raslila of Krishna.",
      orderIndex: 7
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-q01",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      text: "The Ajanta cave murals were executed primarily in which technique?",
      optionA: "Tempera",
      optionB: "Watercolour wash",
      optionC: "Oil painting",
      optionD: "Fresco buono",
      correctOption: "A",
      explanation: "The Buddhist murals of Ajanta were painted in the tempera technique.",
      orderIndex: 0
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-q02",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      text: "The famous 'Bani Thani' portrait belongs to which school of painting?",
      optionA: "Pahari (Kangra)",
      optionB: "Mughal",
      optionC: "Deccan",
      optionD: "Kishangarh",
      correctOption: "D",
      explanation: "The Bani Thani portrait is the signature work of the Kishangarh school of Rajasthani painting.",
      orderIndex: 1
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-q03",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      text: "Consider the following statements:\n1. Madhubani painting originates from Bihar.\n2. Warli painting uses white figures on a mud background.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Madhubani (Mithila) painting is from Bihar; Warli painting uses white figures on a mud background.",
      orderIndex: 2
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-q04",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      text: "Mughal painting reached its zenith under which emperor?",
      optionA: "Jahangir",
      optionB: "Akbar",
      optionC: "Shah Jahan",
      optionD: "Humayun",
      correctOption: "A",
      explanation: "Mughal painting, blending Persian technique with Indian themes, peaked under Jahangir.",
      orderIndex: 3
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-q05",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      text: "Pattachitra, a cloth-based scroll painting, is traditionally associated with:",
      optionA: "Maharashtra",
      optionB: "Bihar",
      optionC: "Odisha and Bengal",
      optionD: "Rajasthan",
      correctOption: "C",
      explanation: "Pattachitra is a cloth-based scroll painting tradition of Odisha and Bengal.",
      orderIndex: 4
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-q06",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      text: "Consider the following statements:\n1. The Bengal School was led by Abanindranath Tagore.\n2. It revived Indian themes against Western academic art.\nWhich is/are correct?",
      optionA: "2 only",
      optionB: "Both 1 and 2",
      optionC: "Neither 1 nor 2",
      optionD: "1 only",
      correctOption: "B",
      explanation: "Abanindranath Tagore led the Bengal School, which revived Indian themes against Western academic art.",
      orderIndex: 5
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-q07",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      text: "Which of the following is a Pahari school of miniature painting?",
      optionA: "Kangra",
      optionB: "Bijapur",
      optionC: "Bundi",
      optionD: "Mewar",
      correctOption: "A",
      explanation: "Kangra and Basohli are Pahari schools; Bundi and Mewar are Rajasthani and Bijapur is Deccan.",
      orderIndex: 6
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-q08",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      text: "The Deccan school of miniature painting flourished at which centres?",
      optionA: "Kangra and Basohli",
      optionB: "Mewar and Bundi",
      optionC: "Mithila and Tanjore",
      optionD: "Bijapur and Golconda",
      correctOption: "D",
      explanation: "The Deccan school flourished at Bijapur and Golconda.",
      orderIndex: 7
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-q01",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      text: "The largest peninsular river of India, called the 'Dakshin Ganga', is the:",
      optionA: "Mahanadi",
      optionB: "Kaveri",
      optionC: "Krishna",
      optionD: "Godavari",
      correctOption: "D",
      explanation: "The Godavari is the largest peninsular river and is known as the Dakshin Ganga.",
      orderIndex: 0
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-q02",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      text: "Which two rivers flow westward through rift valleys into the Arabian Sea?",
      optionA: "Godavari and Krishna",
      optionB: "Ganga and Yamuna",
      optionC: "Narmada and Tapi",
      optionD: "Mahanadi and Kaveri",
      correctOption: "C",
      explanation: "The Narmada and Tapi flow westward through rift valleys into the Arabian Sea.",
      orderIndex: 1
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-q03",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      text: "Consider the following statements:\n1. The Indus and Brahmaputra are antecedent rivers.\n2. They are older than the Himalayas.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "The Indus and Brahmaputra are antecedent rivers older than the Himalayas through which they cut.",
      orderIndex: 2
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-q04",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      text: "The highest peak of peninsular India is:",
      optionA: "K2 (Godwin Austen)",
      optionB: "Anamudi",
      optionC: "Doda Betta",
      optionD: "Mahendragiri",
      correctOption: "B",
      explanation: "Anamudi, in the Western Ghats, is the highest peak of peninsular India.",
      orderIndex: 3
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-q05",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      text: "The three parallel ranges of the Himalayas from north to south are:",
      optionA: "Himadri, Himachal, Shiwaliks",
      optionB: "Shiwaliks, Himachal, Himadri",
      optionC: "Himachal, Himadri, Shiwaliks",
      optionD: "Himadri, Shiwaliks, Himachal",
      correctOption: "A",
      explanation: "From north to south the ranges are the Himadri (Greater), Himachal (Lesser) and Shiwaliks (Outer).",
      orderIndex: 4
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-q06",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      text: "Consider the following statements:\n1. The Peninsular Plateau is the oldest landmass made of Gondwana rocks.\n2. The Western Ghats are continuous and higher than the Eastern Ghats.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "The Peninsular Plateau is the oldest Gondwana landmass, and the Western Ghats are continuous and higher.",
      orderIndex: 5
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-q07",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      text: "The highest peak located within India is:",
      optionA: "Mount Everest",
      optionB: "Kanchenjunga",
      optionC: "K2 (Godwin Austen)",
      optionD: "Nanda Devi",
      correctOption: "C",
      explanation: "K2, also called Godwin Austen, is the highest peak in India (in the Karakoram range).",
      orderIndex: 6
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-q08",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      text: "Himalayan rivers are generally described as perennial because they are fed by:",
      optionA: "Only the monsoon",
      optionB: "Both glaciers and rainfall",
      optionC: "Only groundwater",
      optionD: "Only lakes",
      correctOption: "B",
      explanation: "Himalayan rivers are perennial because they receive water from both melting glaciers and rainfall.",
      orderIndex: 7
    },
    {
      id: "upsc-geography-soils-and-agriculture-q01",
      topicId: "upsc-geography-soils-and-agriculture",
      text: "Black soil (regur) is especially suited to the cultivation of:",
      optionA: "Tea",
      optionB: "Coffee",
      optionC: "Rice",
      optionD: "Cotton",
      correctOption: "D",
      explanation: "Black soil, or regur, retains moisture well and is ideal for cotton, hence 'black cotton soil'.",
      orderIndex: 0
    },
    {
      id: "upsc-geography-soils-and-agriculture-q02",
      topicId: "upsc-geography-soils-and-agriculture",
      text: "In the alluvial soils of India, the older alluvium is known as:",
      optionA: "Khadar",
      optionB: "Bhangar",
      optionC: "Regur",
      optionD: "Laterite",
      correctOption: "B",
      explanation: "Bhangar is old alluvium while khadar is the newer, more fertile alluvium.",
      orderIndex: 1
    },
    {
      id: "upsc-geography-soils-and-agriculture-q03",
      topicId: "upsc-geography-soils-and-agriculture",
      text: "Consider the following statements:\n1. Kharif crops are sown in June-July.\n2. Rabi crops include wheat and gram.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Kharif crops are sown in June-July; rabi crops such as wheat and gram are sown in winter.",
      orderIndex: 2
    },
    {
      id: "upsc-geography-soils-and-agriculture-q04",
      topicId: "upsc-geography-soils-and-agriculture",
      text: "The White Revolution in India is associated with:",
      optionA: "Foodgrains",
      optionB: "Oilseeds",
      optionC: "Milk production",
      optionD: "Fisheries",
      correctOption: "C",
      explanation: "The White Revolution (Operation Flood) under Verghese Kurien boosted milk production.",
      orderIndex: 3
    },
    {
      id: "upsc-geography-soils-and-agriculture-q05",
      topicId: "upsc-geography-soils-and-agriculture",
      text: "Laterite soil, formed by leaching, is best suited to which crops?",
      optionA: "Wheat and sugarcane",
      optionB: "Tea, coffee and cashew",
      optionC: "Mustard and pulses",
      optionD: "Cotton and gram",
      correctOption: "B",
      explanation: "Leached, acidic laterite soil suits plantation crops like tea, coffee and cashew.",
      orderIndex: 4
    },
    {
      id: "upsc-geography-soils-and-agriculture-q06",
      topicId: "upsc-geography-soils-and-agriculture",
      text: "Consider the following statements:\n1. The Green Revolution was associated with M.S. Swaminathan and Norman Borlaug.\n2. Alluvial soil covers about 40% of India's land.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Swaminathan and Borlaug led the Green Revolution; alluvial soil covers roughly 40% of India's land.",
      orderIndex: 5
    },
    {
      id: "upsc-geography-soils-and-agriculture-q07",
      topicId: "upsc-geography-soils-and-agriculture",
      text: "Which cropping season corresponds to the short summer period?",
      optionA: "Kharif",
      optionB: "Zaid",
      optionC: "Rabi",
      optionD: "Bhangar",
      correctOption: "B",
      explanation: "The Zaid season is the short summer cropping period for crops like watermelon and cucumber.",
      orderIndex: 6
    },
    {
      id: "upsc-geography-soils-and-agriculture-q08",
      topicId: "upsc-geography-soils-and-agriculture",
      text: "The Blue Revolution in India refers to development in:",
      optionA: "Oilseeds",
      optionB: "Milk",
      optionC: "Fisheries",
      optionD: "Foodgrains",
      correctOption: "C",
      explanation: "The Blue Revolution refers to the development of fisheries and aquaculture.",
      orderIndex: 7
    },
    {
      id: "upsc-geography-world-geography-landforms-q01",
      topicId: "upsc-geography-world-geography-landforms",
      text: "The theory of Continental Drift was proposed by:",
      optionA: "Alfred Wegener",
      optionB: "Charles Lyell",
      optionC: "James Hutton",
      optionD: "Harry Hess",
      correctOption: "A",
      explanation: "Alfred Wegener proposed the Continental Drift theory, a precursor to plate tectonics.",
      orderIndex: 0
    },
    {
      id: "upsc-geography-world-geography-landforms-q02",
      topicId: "upsc-geography-world-geography-landforms",
      text: "Mid-ocean ridges and rift valleys are typically formed at which plate boundary?",
      optionA: "Convergent",
      optionB: "Subduction",
      optionC: "Transform",
      optionD: "Divergent",
      correctOption: "D",
      explanation: "Divergent boundaries, where plates move apart, create mid-ocean ridges and rift valleys.",
      orderIndex: 1
    },
    {
      id: "upsc-geography-world-geography-landforms-q03",
      topicId: "upsc-geography-world-geography-landforms",
      text: "Consider the following statements:\n1. The Himalayas formed by the convergence of the Indian and Eurasian plates.\n2. The Pacific Ring of Fire hosts about two-thirds of the world's active volcanoes.\nWhich is/are correct?",
      optionA: "Neither 1 nor 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "The Himalayas arose from Indian-Eurasian convergence; the Ring of Fire holds about two-thirds of active volcanoes.",
      orderIndex: 2
    },
    {
      id: "upsc-geography-world-geography-landforms-q04",
      topicId: "upsc-geography-world-geography-landforms",
      text: "The San Andreas Fault is a classic example of which type of plate boundary?",
      optionA: "Transform",
      optionB: "Divergent",
      optionC: "Convergent",
      optionD: "Continental",
      correctOption: "A",
      explanation: "The San Andreas Fault is a transform boundary where plates slide past one another, causing earthquakes.",
      orderIndex: 3
    },
    {
      id: "upsc-geography-world-geography-landforms-q05",
      topicId: "upsc-geography-world-geography-landforms",
      text: "The highest plateau in the world is the:",
      optionA: "Colorado Plateau",
      optionB: "Deccan Plateau",
      optionC: "Tibetan Plateau",
      optionD: "Ethiopian Plateau",
      correctOption: "C",
      explanation: "The Tibetan Plateau is the highest plateau in the world.",
      orderIndex: 4
    },
    {
      id: "upsc-geography-world-geography-landforms-q06",
      topicId: "upsc-geography-world-geography-landforms",
      text: "Consider the following statements:\n1. Block mountains are formed by horst and graben structures.\n2. The Himalayas and Andes are examples of fold mountains.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Block mountains arise from horst-and-graben faulting; the Himalayas and Andes are fold mountains.",
      orderIndex: 5
    },
    {
      id: "upsc-geography-world-geography-landforms-q07",
      topicId: "upsc-geography-world-geography-landforms",
      text: "Forces originating from within the Earth that shape landforms are called:",
      optionA: "Exogenic forces",
      optionB: "Aeolian forces",
      optionC: "Gradational forces",
      optionD: "Endogenic forces",
      correctOption: "D",
      explanation: "Endogenic (internal) forces such as tectonics build landforms; exogenic forces wear them down.",
      orderIndex: 6
    },
    {
      id: "upsc-geography-world-geography-landforms-q08",
      topicId: "upsc-geography-world-geography-landforms",
      text: "The outermost layer of the Earth, broken into tectonic plates, is the:",
      optionA: "Lithosphere",
      optionB: "Mantle",
      optionC: "Outer core",
      optionD: "Asthenosphere",
      correctOption: "A",
      explanation: "The lithosphere is the rigid outer layer of the Earth that is broken into tectonic plates.",
      orderIndex: 7
    },
    {
      id: "upsc-economy-national-income-and-gdp-q01",
      topicId: "upsc-economy-national-income-and-gdp",
      text: "Gross Domestic Product (GDP) measures the value of final goods and services produced:",
      optionA: "Within a country's borders",
      optionB: "Only in the manufacturing sector",
      optionC: "By a country's nationals worldwide",
      optionD: "After deducting depreciation",
      correctOption: "A",
      explanation: "GDP is the value of all final goods and services produced within a country's borders in a year.",
      orderIndex: 0
    },
    {
      id: "upsc-economy-national-income-and-gdp-q02",
      topicId: "upsc-economy-national-income-and-gdp",
      text: "Gross National Product (GNP) is equal to:",
      optionA: "GDP plus depreciation",
      optionB: "GDP minus depreciation",
      optionC: "GDP plus net factor income from abroad",
      optionD: "NNP plus taxes",
      correctOption: "C",
      explanation: "GNP equals GDP plus net factor income from abroad (NFIA).",
      orderIndex: 1
    },
    {
      id: "upsc-economy-national-income-and-gdp-q03",
      topicId: "upsc-economy-national-income-and-gdp",
      text: "Consider the following statements:\n1. Nominal GDP is calculated at current prices.\n2. Real GDP is calculated at constant base-year prices.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Nominal GDP uses current prices, while real GDP uses constant base-year prices.",
      orderIndex: 2
    },
    {
      id: "upsc-economy-national-income-and-gdp-q04",
      topicId: "upsc-economy-national-income-and-gdp",
      text: "The current base year for India's GDP estimates is:",
      optionA: "2004-05",
      optionB: "2015-16",
      optionC: "2011-12",
      optionD: "2020-21",
      correctOption: "C",
      explanation: "India's GDP series uses 2011-12 as the base year, with figures released by the NSO under MoSPI.",
      orderIndex: 3
    },
    {
      id: "upsc-economy-national-income-and-gdp-q05",
      topicId: "upsc-economy-national-income-and-gdp",
      text: "The GDP deflator is calculated as:",
      optionA: "(Nominal GDP / Real GDP) x 100",
      optionB: "Nominal GDP minus Real GDP",
      optionC: "(Real GDP / Nominal GDP) x 100",
      optionD: "GDP minus depreciation",
      correctOption: "A",
      explanation: "The GDP deflator equals Nominal GDP divided by Real GDP, multiplied by 100.",
      orderIndex: 4
    },
    {
      id: "upsc-economy-national-income-and-gdp-q06",
      topicId: "upsc-economy-national-income-and-gdp",
      text: "Consider the following statements:\n1. NNP at factor cost is termed the National Income.\n2. Per capita income equals National Income divided by population.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "NNP at factor cost is the National Income, and per capita income is National Income divided by population.",
      orderIndex: 5
    },
    {
      id: "upsc-economy-national-income-and-gdp-q07",
      topicId: "upsc-economy-national-income-and-gdp",
      text: "Net Domestic Product (NDP) is obtained by:",
      optionA: "Adding NFIA to GDP",
      optionB: "Subtracting taxes from GNP",
      optionC: "Adding depreciation to GDP",
      optionD: "Subtracting depreciation from GDP",
      correctOption: "D",
      explanation: "NDP equals GDP minus depreciation.",
      orderIndex: 6
    },
    {
      id: "upsc-economy-national-income-and-gdp-q08",
      topicId: "upsc-economy-national-income-and-gdp",
      text: "Which of the following is NOT one of the three methods of measuring national income?",
      optionA: "Production (value-added) method",
      optionB: "Income method",
      optionC: "Expenditure method",
      optionD: "Depreciation method",
      correctOption: "D",
      explanation: "National income is measured by the production, income and expenditure methods, not a 'depreciation method'.",
      orderIndex: 7
    },
    {
      id: "upsc-economy-banking-system-and-rbi-q01",
      topicId: "upsc-economy-banking-system-and-rbi",
      text: "In which year was the Reserve Bank of India nationalised?",
      optionA: "1935",
      optionB: "1947",
      optionC: "1949",
      optionD: "1969",
      correctOption: "C",
      explanation: "The RBI was established in 1935 and nationalised in 1949.",
      orderIndex: 0
    },
    {
      id: "upsc-economy-banking-system-and-rbi-q02",
      topicId: "upsc-economy-banking-system-and-rbi",
      text: "The 'repo rate' is the rate at which:",
      optionA: "Banks lend to the RBI",
      optionB: "The RBI lends to commercial banks",
      optionC: "Banks lend to each other",
      optionD: "The government borrows from the public",
      correctOption: "B",
      explanation: "The repo rate is the rate at which the RBI lends short-term funds to commercial banks.",
      orderIndex: 1
    },
    {
      id: "upsc-economy-banking-system-and-rbi-q03",
      topicId: "upsc-economy-banking-system-and-rbi",
      text: "Consider the following statements:\n1. The RBI is the sole issuer of currency except the one-rupee note and coins.\n2. The RBI is the lender of last resort to banks.\nWhich is/are correct?",
      optionA: "Neither 1 nor 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "The RBI issues currency except the one-rupee note and coins, and acts as lender of last resort.",
      orderIndex: 2
    },
    {
      id: "upsc-economy-banking-system-and-rbi-q04",
      topicId: "upsc-economy-banking-system-and-rbi",
      text: "An asset is classified as a Non-Performing Asset (NPA) if interest or principal is overdue for:",
      optionA: "30 days",
      optionB: "60 days",
      optionC: "180 days",
      optionD: "90 days",
      correctOption: "D",
      explanation: "A loan becomes an NPA when interest or principal remains overdue for 90 days.",
      orderIndex: 3
    },
    {
      id: "upsc-economy-banking-system-and-rbi-q05",
      topicId: "upsc-economy-banking-system-and-rbi",
      text: "The one-rupee note and coins in India are issued by:",
      optionA: "The Ministry of Finance",
      optionB: "The Reserve Bank of India",
      optionC: "The State Bank of India",
      optionD: "NABARD",
      correctOption: "A",
      explanation: "The one-rupee note and coins are issued by the Ministry of Finance, not the RBI.",
      orderIndex: 4
    },
    {
      id: "upsc-economy-banking-system-and-rbi-q06",
      topicId: "upsc-economy-banking-system-and-rbi",
      text: "Consider the following statements:\n1. The SLR is capped at 40%.\n2. Scheduled commercial banks are listed in the Second Schedule of the RBI Act.\nWhich is/are correct?",
      optionA: "2 only",
      optionB: "Both 1 and 2",
      optionC: "Neither 1 nor 2",
      optionD: "1 only",
      correctOption: "B",
      explanation: "SLR is capped at 40% and scheduled commercial banks are listed in the Second Schedule of the RBI Act.",
      orderIndex: 5
    },
    {
      id: "upsc-economy-banking-system-and-rbi-q07",
      topicId: "upsc-economy-banking-system-and-rbi",
      text: "Which of the following is true of Payments Banks in India?",
      optionA: "They cannot lend or issue credit cards",
      optionB: "They can give long-term loans",
      optionC: "They can issue credit cards",
      optionD: "They function only in rural areas",
      correctOption: "A",
      explanation: "Payments Banks accept small deposits but cannot lend or issue credit cards.",
      orderIndex: 6
    },
    {
      id: "upsc-economy-banking-system-and-rbi-q08",
      topicId: "upsc-economy-banking-system-and-rbi",
      text: "The Insolvency and Bankruptcy Code (IBC) was enacted in which year?",
      optionA: "2016",
      optionB: "2013",
      optionC: "2014",
      optionD: "2018",
      correctOption: "A",
      explanation: "The Insolvency and Bankruptcy Code was enacted in 2016 to speed up resolution of bad loans.",
      orderIndex: 7
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-q01",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      text: "The Union Budget is presented as the 'Annual Financial Statement' under which Article?",
      optionA: "Article 280",
      optionB: "Article 110",
      optionC: "Article 266",
      optionD: "Article 112",
      correctOption: "D",
      explanation: "Article 112 provides for the Annual Financial Statement, that is, the Union Budget.",
      orderIndex: 0
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-q02",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      text: "The Fiscal Deficit is best defined as:",
      optionA: "Total Expenditure minus Total Receipts excluding borrowings",
      optionB: "Revenue Expenditure minus Revenue Receipts",
      optionC: "Fiscal Deficit minus Interest Payments",
      optionD: "Capital Receipts minus Capital Expenditure",
      correctOption: "A",
      explanation: "The Fiscal Deficit equals total expenditure minus total receipts excluding borrowings, indicating borrowing needs.",
      orderIndex: 1
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-q03",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      text: "Consider the following statements:\n1. The Primary Deficit equals the Fiscal Deficit minus interest payments.\n2. The FRBM Act was enacted in 2003.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "The Primary Deficit is the Fiscal Deficit minus interest payments; the FRBM Act was passed in 2003.",
      orderIndex: 2
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-q04",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      text: "The Goods and Services Tax (GST) was launched in India on:",
      optionA: "1 July 2017",
      optionB: "26 January 2017",
      optionC: "1 January 2018",
      optionD: "1 April 2016",
      correctOption: "A",
      explanation: "GST, a destination-based tax, was launched on 1 July 2017 and is governed by the GST Council.",
      orderIndex: 3
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-q05",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      text: "The GST Council is a constitutional body created under which Article?",
      optionA: "Article 112",
      optionB: "Article 279A",
      optionC: "Article 110",
      optionD: "Article 266",
      correctOption: "B",
      explanation: "The GST Council is established under Article 279A of the Constitution.",
      orderIndex: 4
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-q06",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      text: "Consider the following statements:\n1. Direct taxes are progressive.\n2. Indirect taxes such as GST are regressive.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Direct taxes like income tax are progressive, while indirect taxes such as GST are regressive.",
      orderIndex: 5
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-q07",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      text: "All revenues received by the Government of India are credited to the:",
      optionA: "Contingency Fund",
      optionB: "Public Account",
      optionC: "Consolidated Fund of India",
      optionD: "Capital Account",
      correctOption: "C",
      explanation: "The Consolidated Fund of India (Article 266) holds all government revenues; withdrawals need parliamentary approval.",
      orderIndex: 6
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-q08",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      text: "Which of the following is a revenue receipt of the government?",
      optionA: "Disinvestment proceeds",
      optionB: "Tax revenue",
      optionC: "Borrowings",
      optionD: "Recovery of loans",
      correctOption: "B",
      explanation: "Tax revenue is a non-debt-creating revenue receipt; borrowings and disinvestment are capital receipts.",
      orderIndex: 7
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-q01",
      topicId: "upsc-environment-biodiversity-and-conservation",
      text: "How many biodiversity hotspots are located in India?",
      optionA: "Two",
      optionB: "Three",
      optionC: "Four",
      optionD: "Six",
      correctOption: "C",
      explanation: "India has four biodiversity hotspots: the Himalayas, Western Ghats, Indo-Burma and Sundaland.",
      orderIndex: 0
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-q02",
      topicId: "upsc-environment-biodiversity-and-conservation",
      text: "Conservation of species within their natural habitat is known as:",
      optionA: "Ex-situ conservation",
      optionB: "In-situ conservation",
      optionC: "Cryopreservation",
      optionD: "Captive breeding",
      correctOption: "B",
      explanation: "In-situ conservation protects species in their natural habitat, such as national parks and sanctuaries.",
      orderIndex: 1
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-q03",
      topicId: "upsc-environment-biodiversity-and-conservation",
      text: "Consider the following statements:\n1. National Parks allow no human activity.\n2. Wildlife Sanctuaries permit some regulated activity.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "1 only",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "National Parks prohibit human activity while Sanctuaries permit certain regulated activities.",
      orderIndex: 2
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-q04",
      topicId: "upsc-environment-biodiversity-and-conservation",
      text: "Project Tiger was launched in which year?",
      optionA: "1972",
      optionB: "1992",
      optionC: "1985",
      optionD: "1973",
      correctOption: "D",
      explanation: "Project Tiger was launched in 1973; Project Elephant followed in 1992.",
      orderIndex: 3
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-q05",
      topicId: "upsc-environment-biodiversity-and-conservation",
      text: "The Convention on Biological Diversity (CBD) was adopted at which summit?",
      optionA: "Stockholm Conference 1972",
      optionB: "Johannesburg Summit 2002",
      optionC: "Rio Earth Summit 1992",
      optionD: "Paris Summit 2015",
      correctOption: "C",
      explanation: "The CBD was adopted at the Rio Earth Summit in 1992.",
      orderIndex: 4
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-q06",
      topicId: "upsc-environment-biodiversity-and-conservation",
      text: "Consider the following statements:\n1. India is one of 17 megadiverse countries.\n2. Biosphere Reserves have core, buffer and transition zones.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "India is among 17 megadiverse nations, and Biosphere Reserves comprise core, buffer and transition zones.",
      orderIndex: 5
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-q07",
      topicId: "upsc-environment-biodiversity-and-conservation",
      text: "Protected species in India are listed in the schedules of which Act?",
      optionA: "Biological Diversity Act, 2002",
      optionB: "Environment Protection Act, 1986",
      optionC: "Forest Conservation Act, 1980",
      optionD: "Wildlife (Protection) Act, 1972",
      correctOption: "D",
      explanation: "The Wildlife (Protection) Act, 1972 lists protected species in its schedules.",
      orderIndex: 6
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-q08",
      topicId: "upsc-environment-biodiversity-and-conservation",
      text: "Which international convention regulates trade in endangered species?",
      optionA: "CBD",
      optionB: "CITES",
      optionC: "Ramsar Convention",
      optionD: "UNFCCC",
      correctOption: "B",
      explanation: "CITES regulates international trade in endangered species of wild fauna and flora.",
      orderIndex: 7
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-q01",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      text: "The Paris Agreement (2015) aims to limit the rise in global average temperature to:",
      optionA: "Below 3 degrees C",
      optionB: "Below 4 degrees C",
      optionC: "Exactly 2.5 degrees C",
      optionD: "Well below 2 degrees C, pursuing 1.5 degrees C",
      correctOption: "D",
      explanation: "The Paris Agreement seeks to keep warming well below 2 degrees C while pursuing 1.5 degrees C.",
      orderIndex: 0
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-q02",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      text: "The Montreal Protocol (1987) was aimed at phasing out:",
      optionA: "Greenhouse gases",
      optionB: "Ozone-depleting substances",
      optionC: "Fossil fuel subsidies",
      optionD: "Plastic waste",
      correctOption: "B",
      explanation: "The Montreal Protocol phased out ozone-depleting substances; its Kigali Amendment targets HFCs.",
      orderIndex: 1
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-q03",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      text: "Consider the following statements:\n1. The IPCC was set up in 1988 by WMO and UNEP.\n2. The UNFCCC of 1992 is the parent climate treaty.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "The IPCC was set up in 1988 by WMO and UNEP, and the 1992 UNFCCC is the parent climate treaty.",
      orderIndex: 2
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-q04",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      text: "India has set a target of achieving net zero emissions by:",
      optionA: "2050",
      optionB: "2060",
      optionC: "2047",
      optionD: "2070",
      correctOption: "D",
      explanation: "India targets net zero emissions by 2070, following the principle of CBDR.",
      orderIndex: 3
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-q05",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      text: "The Kyoto Protocol of 1997 set binding emission targets primarily for:",
      optionA: "Developing nations",
      optionB: "Only island nations",
      optionC: "All UN members equally",
      optionD: "Developed nations",
      correctOption: "D",
      explanation: "The Kyoto Protocol set binding greenhouse gas targets for developed nations.",
      orderIndex: 4
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-q06",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      text: "Consider the following statements:\n1. Methane is mainly emitted by livestock, paddy and landfills.\n2. The Paris Agreement operates through Nationally Determined Contributions.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "Methane comes from livestock, paddy and landfills; the Paris Agreement works through NDCs.",
      orderIndex: 5
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-q07",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      text: "Parties to the UNFCCC meet annually at the:",
      optionA: "G20 Summit",
      optionB: "General Assembly",
      optionC: "Security Council",
      optionD: "Conference of the Parties (COP)",
      correctOption: "D",
      explanation: "Parties to the UNFCCC meet annually at the Conference of the Parties (COP).",
      orderIndex: 6
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-q08",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      text: "India's climate missions are coordinated under which national framework?",
      optionA: "NAPCC",
      optionB: "NITI Aayog",
      optionC: "FRBM",
      optionD: "NDB",
      correctOption: "A",
      explanation: "India's climate missions operate under the National Action Plan on Climate Change (NAPCC).",
      orderIndex: 7
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-q01",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      text: "In an ecosystem, green plants are classified as:",
      optionA: "Primary consumers",
      optionB: "Decomposers",
      optionC: "Producers",
      optionD: "Secondary consumers",
      correctOption: "C",
      explanation: "Green plants are autotrophic producers that fix energy at the base of the food chain.",
      orderIndex: 0
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-q02",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      text: "According to Lindeman's 10% law, the energy transferred to the next trophic level is about:",
      optionA: "10%",
      optionB: "1%",
      optionC: "50%",
      optionD: "90%",
      correctOption: "A",
      explanation: "Lindeman's 10% law states that only about 10% of energy is transferred to the next trophic level.",
      orderIndex: 1
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-q03",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      text: "Consider the following statements:\n1. Energy flow in an ecosystem is unidirectional.\n2. The pyramid of energy is always upright.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "Energy flow is unidirectional and the energy pyramid is always upright.",
      orderIndex: 2
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-q04",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      text: "Which of the following are decomposers in an ecosystem?",
      optionA: "Bacteria and fungi",
      optionB: "Carnivores",
      optionC: "Herbivores",
      optionD: "Green plants",
      correctOption: "A",
      explanation: "Bacteria and fungi act as decomposers, breaking down dead organic matter.",
      orderIndex: 3
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-q05",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      text: "An interconnected network of food chains is called a:",
      optionA: "Ecological niche",
      optionB: "Trophic level",
      optionC: "Biome",
      optionD: "Food web",
      correctOption: "D",
      explanation: "A food web is an interconnected network of multiple food chains.",
      orderIndex: 4
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-q06",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      text: "Consider the following statements:\n1. Net Primary Productivity equals GPP minus respiration.\n2. NPP is the energy available to consumers.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "NPP equals GPP minus respiration and represents the energy available to consumers.",
      orderIndex: 5
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-q07",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      text: "Which of the following is an abiotic component of an ecosystem?",
      optionA: "Herbivores",
      optionB: "Decomposers",
      optionC: "Producers",
      optionD: "Sunlight",
      correctOption: "D",
      explanation: "Sunlight, water, soil and temperature are abiotic (non-living) components of an ecosystem.",
      orderIndex: 6
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-q08",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      text: "Herbivores in a food chain occupy the trophic level of:",
      optionA: "Producers",
      optionB: "Primary consumers",
      optionC: "Secondary consumers",
      optionD: "Decomposers",
      correctOption: "B",
      explanation: "Herbivores feed on producers and so occupy the primary consumer trophic level.",
      orderIndex: 7
    },
    {
      id: "upsc-science-technology-space-technology-isro-q01",
      topicId: "upsc-science-technology-space-technology-isro",
      text: "Who is regarded as the father of the Indian space programme?",
      optionA: "A.P.J. Abdul Kalam",
      optionB: "Vikram Sarabhai",
      optionC: "Satish Dhawan",
      optionD: "Homi Bhabha",
      correctOption: "B",
      explanation: "Vikram Sarabhai, under whom ISRO was founded in 1969, is the father of the Indian space programme.",
      orderIndex: 0
    },
    {
      id: "upsc-science-technology-space-technology-isro-q02",
      topicId: "upsc-science-technology-space-technology-isro",
      text: "India's first satellite, launched in 1975, was named:",
      optionA: "Bhaskara",
      optionB: "Rohini",
      optionC: "Aryabhata",
      optionD: "INSAT-1A",
      correctOption: "C",
      explanation: "Aryabhata, launched in 1975, was India's first satellite.",
      orderIndex: 1
    },
    {
      id: "upsc-science-technology-space-technology-isro-q03",
      topicId: "upsc-science-technology-space-technology-isro",
      text: "Consider the following statements:\n1. The PSLV is known as the workhorse of ISRO.\n2. The GSLV uses an indigenous cryogenic upper stage.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "The PSLV is ISRO's workhorse, and the GSLV uses an indigenous cryogenic upper stage.",
      orderIndex: 2
    },
    {
      id: "upsc-science-technology-space-technology-isro-q04",
      topicId: "upsc-science-technology-space-technology-isro",
      text: "Which Indian mission made India the first nation to reach Mars orbit on its first attempt?",
      optionA: "Chandrayaan-1",
      optionB: "Mangalyaan (Mars Orbiter Mission)",
      optionC: "Aditya-L1",
      optionD: "Gaganyaan",
      correctOption: "B",
      explanation: "Mangalyaan (2013) made India the first nation to reach Mars orbit on its first attempt.",
      orderIndex: 3
    },
    {
      id: "upsc-science-technology-space-technology-isro-q05",
      topicId: "upsc-science-technology-space-technology-isro",
      text: "Chandrayaan-3 (2023) is notable for soft-landing near the Moon's:",
      optionA: "North pole",
      optionB: "South pole",
      optionC: "Equator",
      optionD: "Far side centre",
      correctOption: "B",
      explanation: "Chandrayaan-3 soft-landed near the lunar south pole in 2023.",
      orderIndex: 4
    },
    {
      id: "upsc-science-technology-space-technology-isro-q06",
      topicId: "upsc-science-technology-space-technology-isro",
      text: "Consider the following statements:\n1. Chandrayaan-1 discovered water molecules on the Moon.\n2. NavIC is India's regional satellite navigation system.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "1 only",
      optionC: "Neither 1 nor 2",
      optionD: "2 only",
      correctOption: "A",
      explanation: "Chandrayaan-1 found water molecules on the Moon, and NavIC (IRNSS) is India's regional navigation system.",
      orderIndex: 5
    },
    {
      id: "upsc-science-technology-space-technology-isro-q07",
      topicId: "upsc-science-technology-space-technology-isro",
      text: "The Aditya-L1 mission is designed to study the:",
      optionA: "Sun",
      optionB: "Mars",
      optionC: "Moon",
      optionD: "Venus",
      correctOption: "A",
      explanation: "Aditya-L1 studies the Sun from the L1 Lagrange point.",
      orderIndex: 6
    },
    {
      id: "upsc-science-technology-space-technology-isro-q08",
      topicId: "upsc-science-technology-space-technology-isro",
      text: "Gaganyaan is India's planned mission for:",
      optionA: "A Mars rover",
      optionB: "Its first crewed spaceflight",
      optionC: "A lunar sample return",
      optionD: "An asteroid mission",
      correctOption: "B",
      explanation: "Gaganyaan aims to achieve India's first crewed spaceflight.",
      orderIndex: 7
    },
    {
      id: "upsc-science-technology-biotechnology-basics-q01",
      topicId: "upsc-science-technology-biotechnology-basics",
      text: "Which enzymes are used to cut DNA at specific recognition sites?",
      optionA: "Polymerases",
      optionB: "DNA ligases",
      optionC: "Restriction enzymes",
      optionD: "Helicases",
      correctOption: "C",
      explanation: "Restriction enzymes cut DNA at specific sequences, a key tool in genetic engineering.",
      orderIndex: 0
    },
    {
      id: "upsc-science-technology-biotechnology-basics-q02",
      topicId: "upsc-science-technology-biotechnology-basics",
      text: "The technique used to amplify copies of a DNA segment is:",
      optionA: "Electrophoresis",
      optionB: "Chromatography",
      optionC: "Centrifugation",
      optionD: "PCR (Polymerase Chain Reaction)",
      correctOption: "D",
      explanation: "PCR (Polymerase Chain Reaction) amplifies copies of a specific DNA segment.",
      orderIndex: 1
    },
    {
      id: "upsc-science-technology-biotechnology-basics-q03",
      topicId: "upsc-science-technology-biotechnology-basics",
      text: "Consider the following statements:\n1. Bt cotton is India's only approved GM crop for commercial cultivation.\n2. Golden Rice is engineered to be rich in Vitamin A.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Bt cotton is India's only approved commercial GM crop, and Golden Rice is engineered for Vitamin A.",
      orderIndex: 2
    },
    {
      id: "upsc-science-technology-biotechnology-basics-q04",
      topicId: "upsc-science-technology-biotechnology-basics",
      text: "Which body in India approves the release of genetically modified organisms?",
      optionA: "ICMR",
      optionB: "GEAC",
      optionC: "DBT",
      optionD: "CSIR",
      correctOption: "B",
      explanation: "The Genetic Engineering Appraisal Committee (GEAC) under the MoEFCC approves GM organisms.",
      orderIndex: 3
    },
    {
      id: "upsc-science-technology-biotechnology-basics-q05",
      topicId: "upsc-science-technology-biotechnology-basics",
      text: "The revolutionary precise gene-editing tool widely used in biotechnology is:",
      optionA: "PCR",
      optionB: "Gel electrophoresis",
      optionC: "CRISPR-Cas9",
      optionD: "Plasmid cloning",
      correctOption: "C",
      explanation: "CRISPR-Cas9 is a revolutionary tool for precise gene editing.",
      orderIndex: 4
    },
    {
      id: "upsc-science-technology-biotechnology-basics-q06",
      topicId: "upsc-science-technology-biotechnology-basics",
      text: "Consider the following statements:\n1. Plasmids are used as vectors to carry genes into cells.\n2. Bt cotton resists bollworm pests.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "Neither 1 nor 2",
      optionD: "2 only",
      correctOption: "B",
      explanation: "Plasmids serve as vectors carrying genes into cells, and Bt cotton resists bollworm pests.",
      orderIndex: 5
    },
    {
      id: "upsc-science-technology-biotechnology-basics-q07",
      topicId: "upsc-science-technology-biotechnology-basics",
      text: "The insertion, deletion or modification of genes using recombinant DNA is called:",
      optionA: "Tissue culture",
      optionB: "Hybridisation",
      optionC: "Fermentation",
      optionD: "Genetic engineering",
      correctOption: "D",
      explanation: "Genetic engineering modifies genes using recombinant DNA technology.",
      orderIndex: 6
    },
    {
      id: "upsc-science-technology-biotechnology-basics-q08",
      topicId: "upsc-science-technology-biotechnology-basics",
      text: "Which of the following is commonly produced using biotechnology?",
      optionA: "Steel",
      optionB: "Cement",
      optionC: "Petroleum",
      optionD: "Insulin",
      correctOption: "D",
      explanation: "Insulin, vaccines and monoclonal antibodies are produced using biotechnology.",
      orderIndex: 7
    },
    {
      id: "upsc-science-technology-defence-technology-q01",
      topicId: "upsc-science-technology-defence-technology",
      text: "The Defence Research and Development Organisation (DRDO) was established in:",
      optionA: "1947",
      optionB: "1974",
      optionC: "1969",
      optionD: "1958",
      correctOption: "D",
      explanation: "DRDO was established in 1958 to make India's armed forces self-reliant in technology.",
      orderIndex: 0
    },
    {
      id: "upsc-science-technology-defence-technology-q02",
      topicId: "upsc-science-technology-defence-technology",
      text: "The Integrated Guided Missile Development Programme (IGMDP) was led by:",
      optionA: "Homi Bhabha",
      optionB: "A.P.J. Abdul Kalam",
      optionC: "Vikram Sarabhai",
      optionD: "Satish Dhawan",
      correctOption: "B",
      explanation: "Dr. A.P.J. Abdul Kalam led the IGMDP, earning the title 'Missile Man of India'.",
      orderIndex: 1
    },
    {
      id: "upsc-science-technology-defence-technology-q03",
      topicId: "upsc-science-technology-defence-technology",
      text: "Consider the following statements:\n1. BrahMos is an India-Russia joint venture cruise missile.\n2. Akash is a surface-to-air missile.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "BrahMos is an India-Russia supersonic cruise missile and Akash is a surface-to-air missile.",
      orderIndex: 2
    },
    {
      id: "upsc-science-technology-defence-technology-q04",
      topicId: "upsc-science-technology-defence-technology",
      text: "Tejas is India's indigenous:",
      optionA: "Light Combat Aircraft",
      optionB: "Main battle tank",
      optionC: "Nuclear submarine",
      optionD: "Aircraft carrier",
      correctOption: "A",
      explanation: "Tejas is India's indigenous Light Combat Aircraft (LCA).",
      orderIndex: 3
    },
    {
      id: "upsc-science-technology-defence-technology-q05",
      topicId: "upsc-science-technology-defence-technology",
      text: "INS Arihant is significant as India's:",
      optionA: "First aircraft carrier",
      optionB: "Largest destroyer",
      optionC: "First frigate",
      optionD: "First nuclear-powered submarine",
      correctOption: "D",
      explanation: "INS Arihant is India's first indigenous nuclear-powered ballistic missile submarine, completing the nuclear triad.",
      orderIndex: 4
    },
    {
      id: "upsc-science-technology-defence-technology-q06",
      topicId: "upsc-science-technology-defence-technology",
      text: "Consider the following statements:\n1. India follows a No First Use nuclear doctrine.\n2. INS Vikrant is India's first indigenous aircraft carrier.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Neither 1 nor 2",
      optionC: "Both 1 and 2",
      optionD: "2 only",
      correctOption: "C",
      explanation: "India follows a No First Use doctrine, and INS Vikrant is its first indigenous aircraft carrier.",
      orderIndex: 5
    },
    {
      id: "upsc-science-technology-defence-technology-q07",
      topicId: "upsc-science-technology-defence-technology",
      text: "The Agni series of missiles are classified as:",
      optionA: "Surface-to-air missiles",
      optionB: "Anti-tank missiles",
      optionC: "Cruise missiles",
      optionD: "Surface-to-surface ballistic missiles",
      correctOption: "D",
      explanation: "Agni missiles are surface-to-surface ballistic missiles.",
      orderIndex: 6
    },
    {
      id: "upsc-science-technology-defence-technology-q08",
      topicId: "upsc-science-technology-defence-technology",
      text: "The Nag missile developed by DRDO is a:",
      optionA: "Surface-to-air missile",
      optionB: "Anti-tank guided missile",
      optionC: "Intercontinental ballistic missile",
      optionD: "Cruise missile",
      correctOption: "B",
      explanation: "The Nag is an anti-tank guided missile developed under the IGMDP.",
      orderIndex: 7
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-q01",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      text: "With which country does India share its longest land border?",
      optionA: "Bangladesh",
      optionB: "Pakistan",
      optionC: "Nepal",
      optionD: "China",
      correctOption: "A",
      explanation: "India shares its longest land border with Bangladesh.",
      orderIndex: 0
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-q02",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      text: "The boundary line between India and China in the eastern sector is the:",
      optionA: "Radcliffe Line",
      optionB: "Line of Control",
      optionC: "Durand Line",
      optionD: "McMahon Line",
      correctOption: "D",
      explanation: "The McMahon Line demarcates the India-China boundary in the eastern sector.",
      orderIndex: 1
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-q03",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      text: "Consider the following statements:\n1. The Chabahar Port is located in Iran.\n2. It helps India reach Afghanistan and Central Asia bypassing Pakistan.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "1 only",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "The Chabahar Port in Iran lets India reach Afghanistan and Central Asia while bypassing Pakistan.",
      orderIndex: 2
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-q04",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      text: "The 'SAGAR' doctrine relates to India's policy in which domain?",
      optionA: "Cyber security",
      optionB: "Space cooperation",
      optionC: "Maritime security and growth",
      optionD: "Trade tariffs",
      correctOption: "C",
      explanation: "SAGAR (Security and Growth for All in the Region) guides India's maritime policy in the Indian Ocean.",
      orderIndex: 3
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-q05",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      text: "The Kalapani territorial dispute is between India and:",
      optionA: "China",
      optionB: "Bhutan",
      optionC: "Myanmar",
      optionD: "Nepal",
      correctOption: "D",
      explanation: "The Kalapani dispute is a boundary issue between India and Nepal.",
      orderIndex: 4
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-q06",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      text: "Consider the following statements:\n1. The Land Boundary Agreement with Bangladesh was implemented in 2015.\n2. India and China are separated by the Line of Actual Control.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "The India-Bangladesh Land Boundary Agreement took effect in 2015; India and China are divided by the LAC.",
      orderIndex: 5
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-q07",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      text: "The Gujral Doctrine emphasised:",
      optionA: "Non-reciprocal accommodation of smaller neighbours",
      optionB: "Strict reciprocity with all neighbours",
      optionC: "Military alliances in South Asia",
      optionD: "Economic sanctions on rivals",
      correctOption: "A",
      explanation: "The Gujral Doctrine emphasised non-reciprocal accommodation of India's smaller neighbours.",
      orderIndex: 6
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-q08",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      text: "India's broad approach toward its immediate neighbours is captured by which policy?",
      optionA: "Look East Policy",
      optionB: "Indo-Pacific Strategy",
      optionC: "Neighbourhood First Policy",
      optionD: "Connect Central Asia Policy",
      correctOption: "C",
      explanation: "India's approach to its immediate neighbours is guided by the 'Neighbourhood First' policy.",
      orderIndex: 7
    },
    {
      id: "upsc-international-relations-major-global-groupings-q01",
      topicId: "upsc-international-relations-major-global-groupings",
      text: "Which countries make up the QUAD grouping?",
      optionA: "India, US, UK, France",
      optionB: "India, China, Russia, Brazil",
      optionC: "India, Japan, Israel, UAE",
      optionD: "India, US, Japan, Australia",
      correctOption: "D",
      explanation: "The QUAD comprises India, the United States, Japan and Australia.",
      orderIndex: 0
    },
    {
      id: "upsc-international-relations-major-global-groupings-q02",
      topicId: "upsc-international-relations-major-global-groupings",
      text: "The New Development Bank (NDB) of BRICS is headquartered in:",
      optionA: "Moscow",
      optionB: "New Delhi",
      optionC: "Shanghai",
      optionD: "Johannesburg",
      correctOption: "C",
      explanation: "The BRICS New Development Bank is headquartered in Shanghai.",
      orderIndex: 1
    },
    {
      id: "upsc-international-relations-major-global-groupings-q03",
      topicId: "upsc-international-relations-major-global-groupings",
      text: "Consider the following statements:\n1. SAARC was established in 1985 with its secretariat at Kathmandu.\n2. ASEAN is central to India's Act East policy.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "SAARC was set up in 1985 with its secretariat in Kathmandu; ASEAN anchors India's Act East policy.",
      orderIndex: 2
    },
    {
      id: "upsc-international-relations-major-global-groupings-q04",
      topicId: "upsc-international-relations-major-global-groupings",
      text: "The I2U2 grouping comprises India, Israel, the USA and:",
      optionA: "Saudi Arabia",
      optionB: "Qatar",
      optionC: "The United Arab Emirates",
      optionD: "Egypt",
      correctOption: "C",
      explanation: "I2U2 groups India, Israel, the United Arab Emirates and the United States.",
      orderIndex: 3
    },
    {
      id: "upsc-international-relations-major-global-groupings-q05",
      topicId: "upsc-international-relations-major-global-groupings",
      text: "India hosted the G20 summit in which year?",
      optionA: "2021",
      optionB: "2024",
      optionC: "2022",
      optionD: "2023",
      correctOption: "D",
      explanation: "India hosted the G20 summit in 2023.",
      orderIndex: 4
    },
    {
      id: "upsc-international-relations-major-global-groupings-q06",
      topicId: "upsc-international-relations-major-global-groupings",
      text: "Consider the following statements:\n1. India is a member of the MTCR.\n2. India is a member of the Nuclear Suppliers Group (NSG).\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "1 only",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "India is a member of the MTCR but is not yet a member of the Nuclear Suppliers Group.",
      orderIndex: 5
    },
    {
      id: "upsc-international-relations-major-global-groupings-q07",
      topicId: "upsc-international-relations-major-global-groupings",
      text: "The grouping linking the countries around the Bay of Bengal is:",
      optionA: "SAARC",
      optionB: "BIMSTEC",
      optionC: "ASEAN",
      optionD: "SCO",
      correctOption: "B",
      explanation: "BIMSTEC links South Asian and Southeast Asian nations around the Bay of Bengal.",
      orderIndex: 6
    },
    {
      id: "upsc-international-relations-major-global-groupings-q08",
      topicId: "upsc-international-relations-major-global-groupings",
      text: "Consider the following statements about India's global standing:\n1. India is a founding member of the United Nations (1945).\n2. India is a permanent member of the UN Security Council.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "India is a founding UN member of 1945 but is not a permanent member of the Security Council.",
      orderIndex: 7
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-q01",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      text: "The Human Development Index (HDI) is published by which organisation?",
      optionA: "UNDP",
      optionB: "IMF",
      optionC: "WEF",
      optionD: "World Bank",
      correctOption: "A",
      explanation: "The HDI is published annually by the United Nations Development Programme (UNDP).",
      orderIndex: 0
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-q02",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      text: "The Global Innovation Index is released by:",
      optionA: "UNESCO",
      optionB: "WTO",
      optionC: "WIPO",
      optionD: "WHO",
      correctOption: "C",
      explanation: "The Global Innovation Index is released by the World Intellectual Property Organization (WIPO).",
      orderIndex: 1
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-q03",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      text: "Consider the following statements:\n1. NITI Aayog replaced the Planning Commission in 2015.\n2. The HDI combines life expectancy, education and per capita income.\nWhich is/are correct?",
      optionA: "2 only",
      optionB: "Both 1 and 2",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "NITI Aayog replaced the Planning Commission in 2015; the HDI combines longevity, education and income.",
      orderIndex: 2
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-q04",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      text: "The 'World Economic Outlook' is published by which institution?",
      optionA: "IMF",
      optionB: "OECD",
      optionC: "WEF",
      optionD: "World Bank",
      correctOption: "A",
      explanation: "The International Monetary Fund (IMF) publishes the World Economic Outlook.",
      orderIndex: 3
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-q05",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      text: "The Global Gender Gap Report is released by the:",
      optionA: "World Bank",
      optionB: "World Economic Forum",
      optionC: "UNDP",
      optionD: "WHO",
      correctOption: "B",
      explanation: "The World Economic Forum (WEF) releases the Global Gender Gap Report.",
      orderIndex: 4
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-q06",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      text: "Consider the following statements:\n1. The Multidimensional Poverty Index is published jointly by UNDP and OPHI.\n2. The Environmental Performance Index is released by Yale and Columbia universities.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "The MPI is published by UNDP and OPHI; the EPI is released by Yale and Columbia universities.",
      orderIndex: 5
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-q07",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      text: "The World Development Report is published by:",
      optionA: "The IMF",
      optionB: "The UNDP",
      optionC: "The World Bank",
      optionD: "The WTO",
      correctOption: "C",
      explanation: "The World Bank publishes the World Development Report.",
      orderIndex: 6
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-q08",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      text: "The World Happiness Report is published under the auspices of the:",
      optionA: "WHO",
      optionB: "Sustainable Development Solutions Network (SDSN)",
      optionC: "World Bank",
      optionD: "OECD",
      correctOption: "B",
      explanation: "The World Happiness Report is released by the UN's Sustainable Development Solutions Network (SDSN).",
      orderIndex: 7
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-q01",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      text: "Anti-defection disqualifications are decided by whom under the Tenth Schedule?",
      optionA: "The President",
      optionB: "The Supreme Court",
      optionC: "The Presiding Officer of the House",
      optionD: "The Election Commission",
      correctOption: "C",
      explanation: "Under the Tenth Schedule, the Presiding Officer of the House decides anti-defection disqualifications.",
      orderIndex: 0
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-q02",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      text: "The Securities and Exchange Board of India (SEBI) was established in:",
      optionA: "1988",
      optionB: "1991",
      optionC: "1992",
      optionD: "2000",
      correctOption: "C",
      explanation: "SEBI was given statutory status in 1992 to regulate securities markets and protect investors.",
      orderIndex: 1
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-q03",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      text: "Consider the following statements:\n1. The classification of a Money Bill is certified by the Speaker.\n2. The Speaker's decision on a Money Bill is final.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "The Speaker certifies a bill as a Money Bill under Article 110, and that decision is final.",
      orderIndex: 2
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-q04",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      text: "A Governor's options on a bill under Article 200 include assent, withholding assent and:",
      optionA: "Dissolving the assembly",
      optionB: "Reserving it for the President",
      optionC: "Amending it directly",
      optionD: "Issuing an ordinance",
      correctOption: "B",
      explanation: "Under Article 200 a Governor may assent, withhold assent, or reserve a bill for the President's consideration.",
      orderIndex: 3
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-q05",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      text: "Disinvestment of public sector undertakings is managed by which body?",
      optionA: "RBI",
      optionB: "DIPAM",
      optionC: "SEBI",
      optionD: "NITI Aayog",
      correctOption: "B",
      explanation: "Disinvestment is managed by DIPAM (Department of Investment and Public Asset Management).",
      orderIndex: 4
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-q06",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      text: "Consider the following statements:\n1. The Election Commission conducts elections under Article 324.\n2. The CAG audits and reports to Parliament under Article 148.\nWhich is/are correct?",
      optionA: "Neither 1 nor 2",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "1 only",
      correctOption: "C",
      explanation: "The Election Commission acts under Article 324 and the CAG audits and reports under Article 148.",
      orderIndex: 5
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-q07",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      text: "Inflation targeting in India is carried out by which body?",
      optionA: "The Finance Commission",
      optionB: "The GST Council",
      optionC: "The Monetary Policy Committee of the RBI",
      optionD: "SEBI",
      correctOption: "C",
      explanation: "Inflation targeting is handled by the RBI's Monetary Policy Committee (MPC).",
      orderIndex: 6
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-q08",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      text: "Fiscal transfers between the Centre and the States are recommended by the:",
      optionA: "Finance Commission",
      optionB: "GST Council",
      optionC: "NITI Aayog",
      optionD: "RBI",
      correctOption: "A",
      explanation: "The Finance Commission recommends fiscal transfers and tax devolution between the Centre and the States.",
      orderIndex: 7
    },
    {
      id: "upsc-polity-president-pm-and-council-of-ministers-q01",
      topicId: "upsc-polity-president-pm-and-council-of-ministers",
      text: "Under which Article is the President of India the head of the Union executive?",
      optionA: "Article 74",
      optionB: "Article 53",
      optionC: "Article 52",
      optionD: "Article 75",
      correctOption: "C",
      explanation: "Article 52 provides that there shall be a President of India, the head of the Union executive.",
      orderIndex: 0
    },
    {
      id: "upsc-polity-president-pm-and-council-of-ministers-q02",
      topicId: "upsc-polity-president-pm-and-council-of-ministers",
      text: "Consider the following statements:\n1. The President is elected by an electoral college through proportional representation.\n2. The election uses the single transferable vote system.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "Article 55 prescribes proportional representation by single transferable vote for the presidential election.",
      orderIndex: 1
    },
    {
      id: "upsc-polity-president-pm-and-council-of-ministers-q03",
      topicId: "upsc-polity-president-pm-and-council-of-ministers",
      text: "The total number of ministers in the Council cannot exceed what percentage of the Lok Sabha strength?",
      optionA: "Ten per cent",
      optionB: "Twelve per cent",
      optionC: "Twenty per cent",
      optionD: "Fifteen per cent",
      correctOption: "D",
      explanation: "The 91st Amendment (2003) caps the Council of Ministers at 15 per cent of the Lok Sabha's total strength.",
      orderIndex: 2
    },
    {
      id: "upsc-polity-president-pm-and-council-of-ministers-q04",
      topicId: "upsc-polity-president-pm-and-council-of-ministers",
      text: "The power of the President to grant pardons is contained in which Article?",
      optionA: "Article 76",
      optionB: "Article 72",
      optionC: "Article 123",
      optionD: "Article 61",
      correctOption: "B",
      explanation: "Article 72 empowers the President to grant pardons, reprieves, respites and remissions of punishment.",
      orderIndex: 3
    },
    {
      id: "upsc-polity-president-pm-and-council-of-ministers-q05",
      topicId: "upsc-polity-president-pm-and-council-of-ministers",
      text: "The Council of Ministers is collectively responsible to which House?",
      optionA: "The Rajya Sabha",
      optionB: "The President",
      optionC: "Both Houses jointly",
      optionD: "The Lok Sabha",
      correctOption: "D",
      explanation: "Article 75(3) makes the Council of Ministers collectively responsible to the Lok Sabha.",
      orderIndex: 4
    },
    {
      id: "upsc-polity-president-pm-and-council-of-ministers-q06",
      topicId: "upsc-polity-president-pm-and-council-of-ministers",
      text: "A person who is not a member of either House can remain a minister for a maximum of how long?",
      optionA: "Three months",
      optionB: "One year",
      optionC: "Six months",
      optionD: "Twelve months",
      correctOption: "C",
      explanation: "Such a minister must become a member of either House within six months, failing which the post is vacated.",
      orderIndex: 5
    },
    {
      id: "upsc-polity-president-pm-and-council-of-ministers-q07",
      topicId: "upsc-polity-president-pm-and-council-of-ministers",
      text: "Under which Article does the President promulgate ordinances?",
      optionA: "Article 123",
      optionB: "Article 74",
      optionC: "Article 72",
      optionD: "Article 356",
      correctOption: "A",
      explanation: "Article 123 empowers the President to promulgate ordinances when Parliament is not in session.",
      orderIndex: 6
    },
    {
      id: "upsc-polity-president-pm-and-council-of-ministers-q08",
      topicId: "upsc-polity-president-pm-and-council-of-ministers",
      text: "Consider the following statements:\n1. The President normally acts on the aid and advice of the Council of Ministers.\n2. The President may return such advice once for reconsideration.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Article 74, as amended by the 44th Amendment, lets the President return advice once but then must accept it.",
      orderIndex: 7
    },
    {
      id: "upsc-polity-federalism-and-centre-state-relations-q01",
      topicId: "upsc-polity-federalism-and-centre-state-relations",
      text: "The division of legislative powers between the Centre and States is contained in which Schedule?",
      optionA: "Seventh Schedule",
      optionB: "Sixth Schedule",
      optionC: "Fifth Schedule",
      optionD: "Tenth Schedule",
      correctOption: "A",
      explanation: "The Seventh Schedule contains the Union, State and Concurrent Lists distributing legislative powers.",
      orderIndex: 0
    },
    {
      id: "upsc-polity-federalism-and-centre-state-relations-q02",
      topicId: "upsc-polity-federalism-and-centre-state-relations",
      text: "In whom do the residuary powers of legislation vest?",
      optionA: "The State Legislatures",
      optionB: "The Union Parliament",
      optionC: "The President",
      optionD: "The Inter-State Council",
      correctOption: "B",
      explanation: "Article 248 vests residuary powers of legislation in the Union Parliament.",
      orderIndex: 1
    },
    {
      id: "upsc-polity-federalism-and-centre-state-relations-q03",
      topicId: "upsc-polity-federalism-and-centre-state-relations",
      text: "Consider the following statements:\n1. Police and public order are subjects in the State List.\n2. Education is a subject in the Concurrent List.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "Police and public order fall in the State List, while education is on the Concurrent List after the 42nd Amendment.",
      orderIndex: 2
    },
    {
      id: "upsc-polity-federalism-and-centre-state-relations-q04",
      topicId: "upsc-polity-federalism-and-centre-state-relations",
      text: "Which commission was set up in 1983 to examine Centre-State relations?",
      optionA: "The Punchhi Commission",
      optionB: "The Rajamannar Committee",
      optionC: "The Sarkaria Commission",
      optionD: "The Mandal Commission",
      correctOption: "C",
      explanation: "The Sarkaria Commission (1983) was appointed to review Centre-State relations; the Punchhi Commission came in 2007.",
      orderIndex: 3
    },
    {
      id: "upsc-polity-federalism-and-centre-state-relations-q05",
      topicId: "upsc-polity-federalism-and-centre-state-relations",
      text: "Parliament can legislate on a State subject in the national interest if the Rajya Sabha passes a resolution under which Article?",
      optionA: "Article 280",
      optionB: "Article 256",
      optionC: "Article 262",
      optionD: "Article 249",
      correctOption: "D",
      explanation: "Article 249 lets Parliament legislate on a State subject if the Rajya Sabha resolves so in the national interest.",
      orderIndex: 4
    },
    {
      id: "upsc-polity-federalism-and-centre-state-relations-q06",
      topicId: "upsc-polity-federalism-and-centre-state-relations",
      text: "Which body is described by some scholars as an example of cooperative federalism in India?",
      optionA: "The Supreme Court",
      optionB: "The Election Commission",
      optionC: "The GST Council",
      optionD: "The Comptroller and Auditor General",
      correctOption: "C",
      explanation: "The GST Council, with Centre and States deciding tax rates jointly, exemplifies cooperative federalism.",
      orderIndex: 5
    },
    {
      id: "upsc-polity-federalism-and-centre-state-relations-q07",
      topicId: "upsc-polity-federalism-and-centre-state-relations",
      text: "The Inter-State Council can be established by the President under which Article?",
      optionA: "Article 131",
      optionB: "Article 324",
      optionC: "Article 280",
      optionD: "Article 263",
      correctOption: "D",
      explanation: "Article 263 empowers the President to establish an Inter-State Council to coordinate between states and the Centre.",
      orderIndex: 6
    },
    {
      id: "upsc-polity-federalism-and-centre-state-relations-q08",
      topicId: "upsc-polity-federalism-and-centre-state-relations",
      text: "When a Union law and a State law on a Concurrent subject conflict, which prevails?",
      optionA: "The State law",
      optionB: "Neither, both are void",
      optionC: "The earlier law",
      optionD: "The Union law",
      correctOption: "D",
      explanation: "Under Article 254, the Union law generally prevails over a conflicting State law on a Concurrent List subject.",
      orderIndex: 7
    },
    {
      id: "upsc-polity-panchayati-raj-and-local-government-q01",
      topicId: "upsc-polity-panchayati-raj-and-local-government",
      text: "Which Constitutional Amendment gave panchayats constitutional status?",
      optionA: "74th Amendment",
      optionB: "73rd Amendment",
      optionC: "65th Amendment",
      optionD: "44th Amendment",
      correctOption: "B",
      explanation: "The 73rd Amendment (1992) added Part IX, giving panchayati raj institutions constitutional status.",
      orderIndex: 0
    },
    {
      id: "upsc-polity-panchayati-raj-and-local-government-q02",
      topicId: "upsc-polity-panchayati-raj-and-local-government",
      text: "The three-tier system of panchayati raj is mandatory for states with a population above:",
      optionA: "Ten lakh",
      optionB: "Twenty lakh",
      optionC: "Fifteen lakh",
      optionD: "Fifty lakh",
      correctOption: "B",
      explanation: "States with a population above twenty lakh must constitute the three-tier panchayati raj system.",
      orderIndex: 1
    },
    {
      id: "upsc-polity-panchayati-raj-and-local-government-q03",
      topicId: "upsc-polity-panchayati-raj-and-local-government",
      text: "Consider the following statements:\n1. The Eleventh Schedule lists subjects for panchayats.\n2. The Twelfth Schedule lists subjects for municipalities.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "The Eleventh Schedule has 29 subjects for panchayats; the Twelfth Schedule has 18 for municipalities.",
      orderIndex: 2
    },
    {
      id: "upsc-polity-panchayati-raj-and-local-government-q04",
      topicId: "upsc-polity-panchayati-raj-and-local-government",
      text: "Which committee first recommended the three-tier panchayati raj system?",
      optionA: "The Balwant Rai Mehta Committee",
      optionB: "The Ashok Mehta Committee",
      optionC: "The L.M. Singhvi Committee",
      optionD: "The G.V.K. Rao Committee",
      correctOption: "A",
      explanation: "The Balwant Rai Mehta Committee (1957) recommended the three-tier structure of panchayati raj.",
      orderIndex: 3
    },
    {
      id: "upsc-polity-panchayati-raj-and-local-government-q05",
      topicId: "upsc-polity-panchayati-raj-and-local-government",
      text: "The conduct of elections to panchayats is vested in the:",
      optionA: "Election Commission of India",
      optionB: "District Collector",
      optionC: "State Finance Commission",
      optionD: "State Election Commission",
      correctOption: "D",
      explanation: "Article 243K vests superintendence of panchayat elections in the State Election Commission.",
      orderIndex: 4
    },
    {
      id: "upsc-polity-panchayati-raj-and-local-government-q06",
      topicId: "upsc-polity-panchayati-raj-and-local-government",
      text: "What is the fixed term of a panchayat under Article 243E?",
      optionA: "Four years",
      optionB: "Six years",
      optionC: "Five years",
      optionD: "Three years",
      correctOption: "C",
      explanation: "Article 243E fixes a five-year term for every panchayat from the date of its first meeting.",
      orderIndex: 5
    },
    {
      id: "upsc-polity-panchayati-raj-and-local-government-q07",
      topicId: "upsc-polity-panchayati-raj-and-local-government",
      text: "The PESA Act, 1996 extends panchayat provisions to which areas?",
      optionA: "Urban municipal areas",
      optionB: "Sixth Schedule areas",
      optionC: "Union Territories",
      optionD: "Fifth Schedule (tribal) areas",
      correctOption: "D",
      explanation: "The PESA Act, 1996 extends Part IX provisions to the Scheduled (Fifth Schedule) tribal areas.",
      orderIndex: 6
    },
    {
      id: "upsc-polity-panchayati-raj-and-local-government-q08",
      topicId: "upsc-polity-panchayati-raj-and-local-government",
      text: "The financial position of panchayats is reviewed every five years by the:",
      optionA: "Union Finance Commission",
      optionB: "NITI Aayog",
      optionC: "Comptroller and Auditor General",
      optionD: "State Finance Commission",
      correctOption: "D",
      explanation: "Article 243I provides for a State Finance Commission to review panchayat finances every five years.",
      orderIndex: 7
    },
    {
      id: "upsc-polity-emergency-provisions-and-amendments-q01",
      topicId: "upsc-polity-emergency-provisions-and-amendments",
      text: "A National Emergency is proclaimed under which Article?",
      optionA: "Article 368",
      optionB: "Article 356",
      optionC: "Article 360",
      optionD: "Article 352",
      correctOption: "D",
      explanation: "Article 352 allows a National Emergency on grounds of war, external aggression or armed rebellion.",
      orderIndex: 0
    },
    {
      id: "upsc-polity-emergency-provisions-and-amendments-q02",
      topicId: "upsc-polity-emergency-provisions-and-amendments",
      text: "President's Rule in a State is imposed under which Article?",
      optionA: "Article 352",
      optionB: "Article 360",
      optionC: "Article 356",
      optionD: "Article 365",
      correctOption: "C",
      explanation: "Article 356 provides for President's Rule when the constitutional machinery in a State fails.",
      orderIndex: 1
    },
    {
      id: "upsc-polity-emergency-provisions-and-amendments-q03",
      topicId: "upsc-polity-emergency-provisions-and-amendments",
      text: "Consider the following statements:\n1. The 44th Amendment replaced 'internal disturbance' with 'armed rebellion'.\n2. A National Emergency must be approved by Parliament within one month.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "The 44th Amendment substituted 'armed rebellion' and required parliamentary approval within one month.",
      orderIndex: 2
    },
    {
      id: "upsc-polity-emergency-provisions-and-amendments-q04",
      topicId: "upsc-polity-emergency-provisions-and-amendments",
      text: "Which case made the imposition of President's Rule subject to judicial review?",
      optionA: "S.R. Bommai case",
      optionB: "Minerva Mills case",
      optionC: "Kesavananda Bharati case",
      optionD: "Maneka Gandhi case",
      correctOption: "A",
      explanation: "The S.R. Bommai (1994) case held that President's Rule under Article 356 is subject to judicial review.",
      orderIndex: 3
    },
    {
      id: "upsc-polity-emergency-provisions-and-amendments-q05",
      topicId: "upsc-polity-emergency-provisions-and-amendments",
      text: "The procedure for amending the Constitution is laid down in which Article?",
      optionA: "Article 360",
      optionB: "Article 352",
      optionC: "Article 370",
      optionD: "Article 368",
      correctOption: "D",
      explanation: "Article 368 lays down the procedure for amending the Constitution.",
      orderIndex: 4
    },
    {
      id: "upsc-polity-emergency-provisions-and-amendments-q06",
      topicId: "upsc-polity-emergency-provisions-and-amendments",
      text: "Which amendment is popularly called the 'Mini-Constitution'?",
      optionA: "73rd Amendment",
      optionB: "44th Amendment",
      optionC: "1st Amendment",
      optionD: "42nd Amendment",
      correctOption: "D",
      explanation: "The 42nd Amendment (1976) made sweeping changes and is known as the 'Mini-Constitution'.",
      orderIndex: 5
    },
    {
      id: "upsc-polity-emergency-provisions-and-amendments-q07",
      topicId: "upsc-polity-emergency-provisions-and-amendments",
      text: "The doctrine that Parliament cannot alter the 'basic structure' was laid down in which case?",
      optionA: "Kesavananda Bharati case",
      optionB: "Golaknath case",
      optionC: "Shankari Prasad case",
      optionD: "Indira Sawhney case",
      correctOption: "A",
      explanation: "The Kesavananda Bharati (1973) case established the basic structure doctrine limiting Article 368.",
      orderIndex: 6
    },
    {
      id: "upsc-polity-emergency-provisions-and-amendments-q08",
      topicId: "upsc-polity-emergency-provisions-and-amendments",
      text: "A Financial Emergency can be proclaimed under which Article?",
      optionA: "Article 352",
      optionB: "Article 356",
      optionC: "Article 360",
      optionD: "Article 365",
      correctOption: "C",
      explanation: "Article 360 provides for a Financial Emergency on a threat to the financial stability or credit of India.",
      orderIndex: 7
    },
    {
      id: "upsc-economy-taxation-and-gst-q01",
      topicId: "upsc-economy-taxation-and-gst",
      text: "GST in India was introduced by which Constitutional Amendment?",
      optionA: "103rd Amendment",
      optionB: "100th Amendment",
      optionC: "102nd Amendment",
      optionD: "101st Amendment",
      correctOption: "D",
      explanation: "The 101st Amendment Act, 2016 introduced the Goods and Services Tax, effective from 1 July 2017.",
      orderIndex: 0
    },
    {
      id: "upsc-economy-taxation-and-gst-q02",
      topicId: "upsc-economy-taxation-and-gst",
      text: "The GST Council is established under which Article?",
      optionA: "Article 246A",
      optionB: "Article 280",
      optionC: "Article 279A",
      optionD: "Article 110",
      correctOption: "C",
      explanation: "Article 279A provides for the constitution of the GST Council, chaired by the Union Finance Minister.",
      orderIndex: 1
    },
    {
      id: "upsc-economy-taxation-and-gst-q03",
      topicId: "upsc-economy-taxation-and-gst",
      text: "Consider the following statements:\n1. Income tax is a direct tax.\n2. GST is an indirect tax.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Income tax is a direct tax borne by the payer, while GST is an indirect tax that can be passed on.",
      orderIndex: 2
    },
    {
      id: "upsc-economy-taxation-and-gst-q04",
      topicId: "upsc-economy-taxation-and-gst",
      text: "GST levied on inter-state supply of goods is known as:",
      optionA: "IGST",
      optionB: "SGST",
      optionC: "CGST",
      optionD: "UTGST",
      correctOption: "A",
      explanation: "Integrated GST (IGST) is levied by the Centre on inter-state supplies of goods and services.",
      orderIndex: 3
    },
    {
      id: "upsc-economy-taxation-and-gst-q05",
      topicId: "upsc-economy-taxation-and-gst",
      text: "Which of the following is currently outside the ambit of GST?",
      optionA: "Restaurant services",
      optionB: "Electronics",
      optionC: "Textiles",
      optionD: "Petroleum products",
      correctOption: "D",
      explanation: "Petroleum products, alcohol for human consumption and electricity remain outside GST at present.",
      orderIndex: 4
    },
    {
      id: "upsc-economy-taxation-and-gst-q06",
      topicId: "upsc-economy-taxation-and-gst",
      text: "GST is best described as which kind of tax?",
      optionA: "Origin-based tax",
      optionB: "A wealth tax",
      optionC: "A direct tax",
      optionD: "Destination-based tax",
      correctOption: "D",
      explanation: "GST is a destination-based, value-added tax collected at the point of consumption.",
      orderIndex: 5
    },
    {
      id: "upsc-economy-taxation-and-gst-q07",
      topicId: "upsc-economy-taxation-and-gst",
      text: "The Laffer Curve illustrates the relationship between:",
      optionA: "Inflation and unemployment",
      optionB: "Tax rates and tax revenue",
      optionC: "Savings and investment",
      optionD: "Demand and supply",
      correctOption: "B",
      explanation: "The Laffer Curve shows that beyond a point, higher tax rates can reduce total tax revenue.",
      orderIndex: 6
    },
    {
      id: "upsc-economy-taxation-and-gst-q08",
      topicId: "upsc-economy-taxation-and-gst",
      text: "Tax buoyancy refers to the responsiveness of tax revenue to changes in:",
      optionA: "GDP / national income",
      optionB: "The repo rate",
      optionC: "The exchange rate",
      optionD: "The fiscal deficit",
      correctOption: "A",
      explanation: "Tax buoyancy measures how tax revenue responds to growth in GDP or national income.",
      orderIndex: 7
    },
    {
      id: "upsc-economy-poverty-unemployment-and-inclusive-growth-q01",
      topicId: "upsc-economy-poverty-unemployment-and-inclusive-growth",
      text: "Which type of unemployment is most associated with Indian agriculture?",
      optionA: "Frictional unemployment",
      optionB: "Cyclical unemployment",
      optionC: "Voluntary unemployment",
      optionD: "Disguised unemployment",
      correctOption: "D",
      explanation: "Disguised unemployment, where surplus workers add little output, is common in Indian agriculture.",
      orderIndex: 0
    },
    {
      id: "upsc-economy-poverty-unemployment-and-inclusive-growth-q02",
      topicId: "upsc-economy-poverty-unemployment-and-inclusive-growth",
      text: "Consider the following statements:\n1. The Tendulkar Committee estimated poverty based on consumption expenditure.\n2. The Rangarajan Committee later reviewed poverty estimation.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "Both the Tendulkar (2009) and Rangarajan (2014) committees estimated poverty using consumption expenditure.",
      orderIndex: 1
    },
    {
      id: "upsc-economy-poverty-unemployment-and-inclusive-growth-q03",
      topicId: "upsc-economy-poverty-unemployment-and-inclusive-growth",
      text: "The Gini coefficient is a measure of:",
      optionA: "Inflation",
      optionB: "Economic growth",
      optionC: "Income inequality",
      optionD: "Tax efficiency",
      correctOption: "C",
      explanation: "The Gini coefficient measures income inequality, ranging from 0 (perfect equality) to 1 (perfect inequality).",
      orderIndex: 2
    },
    {
      id: "upsc-economy-poverty-unemployment-and-inclusive-growth-q04",
      topicId: "upsc-economy-poverty-unemployment-and-inclusive-growth",
      text: "Which survey is the primary official source of employment data in India?",
      optionA: "National Family Health Survey",
      optionB: "National Sample Survey on Consumption",
      optionC: "Census of India",
      optionD: "Periodic Labour Force Survey",
      correctOption: "D",
      explanation: "The Periodic Labour Force Survey (PLFS) by the NSO is the main source of employment and unemployment data.",
      orderIndex: 3
    },
    {
      id: "upsc-economy-poverty-unemployment-and-inclusive-growth-q05",
      topicId: "upsc-economy-poverty-unemployment-and-inclusive-growth",
      text: "Unemployment arising from a mismatch between workers' skills and job requirements is called:",
      optionA: "Structural unemployment",
      optionB: "Cyclical unemployment",
      optionC: "Frictional unemployment",
      optionD: "Seasonal unemployment",
      correctOption: "A",
      explanation: "Structural unemployment results from a mismatch between available skills and the demands of the economy.",
      orderIndex: 4
    },
    {
      id: "upsc-economy-poverty-unemployment-and-inclusive-growth-q06",
      topicId: "upsc-economy-poverty-unemployment-and-inclusive-growth",
      text: "The Multidimensional Poverty Index in India is released by:",
      optionA: "The RBI",
      optionB: "NITI Aayog",
      optionC: "SEBI",
      optionD: "The Finance Commission",
      correctOption: "B",
      explanation: "NITI Aayog releases the national Multidimensional Poverty Index covering health, education and living standards.",
      orderIndex: 5
    },
    {
      id: "upsc-economy-poverty-unemployment-and-inclusive-growth-q07",
      topicId: "upsc-economy-poverty-unemployment-and-inclusive-growth",
      text: "The Lorenz Curve is used to depict:",
      optionA: "The business cycle",
      optionB: "Marginal utility",
      optionC: "The distribution of income",
      optionD: "Price elasticity",
      correctOption: "C",
      explanation: "The Lorenz Curve graphically represents the distribution of income or wealth in an economy.",
      orderIndex: 6
    },
    {
      id: "upsc-economy-poverty-unemployment-and-inclusive-growth-q08",
      topicId: "upsc-economy-poverty-unemployment-and-inclusive-growth",
      text: "Which programme guarantees 100 days of wage employment to rural households?",
      optionA: "PM-KISAN",
      optionB: "PM Awas Yojana",
      optionC: "PMKVY",
      optionD: "MGNREGA",
      correctOption: "D",
      explanation: "MGNREGA guarantees 100 days of wage employment per year to every rural household demanding work.",
      orderIndex: 7
    },
    {
      id: "upsc-economy-external-sector-and-trade-q01",
      topicId: "upsc-economy-external-sector-and-trade",
      text: "The current account of the Balance of Payments includes:",
      optionA: "Trade in goods, services and remittances",
      optionB: "Foreign direct investment",
      optionC: "External commercial borrowings",
      optionD: "Portfolio investment",
      correctOption: "A",
      explanation: "The current account records trade in goods and services, income and current transfers like remittances.",
      orderIndex: 0
    },
    {
      id: "upsc-economy-external-sector-and-trade-q02",
      topicId: "upsc-economy-external-sector-and-trade",
      text: "Consider the following statements:\n1. FDI is generally long-term and involves management control.\n2. FPI is short-term portfolio investment often called 'hot money'.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "FDI is durable and management-linked, while FPI is volatile portfolio flow termed 'hot money'.",
      orderIndex: 1
    },
    {
      id: "upsc-economy-external-sector-and-trade-q03",
      topicId: "upsc-economy-external-sector-and-trade",
      text: "Depreciation of the rupee generally makes:",
      optionA: "Exports costlier and imports cheaper",
      optionB: "No change in trade flows",
      optionC: "Both exports and imports cheaper",
      optionD: "Exports cheaper and imports costlier",
      correctOption: "D",
      explanation: "A weaker rupee makes Indian exports cheaper abroad and imports more expensive at home.",
      orderIndex: 2
    },
    {
      id: "upsc-economy-external-sector-and-trade-q04",
      topicId: "upsc-economy-external-sector-and-trade",
      text: "India's exchange rate system is best described as:",
      optionA: "Fixed peg",
      optionB: "Free float",
      optionC: "Managed float",
      optionD: "Currency board",
      correctOption: "C",
      explanation: "India follows a managed floating exchange rate, with the RBI intervening to limit volatility.",
      orderIndex: 3
    },
    {
      id: "upsc-economy-external-sector-and-trade-q05",
      topicId: "upsc-economy-external-sector-and-trade",
      text: "A Current Account Deficit arises when:",
      optionA: "Exports exceed imports of goods and services",
      optionB: "Forex reserves rise",
      optionC: "Capital inflows exceed outflows",
      optionD: "Imports of goods and services exceed exports plus net transfers",
      correctOption: "D",
      explanation: "A CAD occurs when a country's imports of goods and services exceed exports and net current transfers.",
      orderIndex: 4
    },
    {
      id: "upsc-economy-external-sector-and-trade-q06",
      topicId: "upsc-economy-external-sector-and-trade",
      text: "Which body administers India's Foreign Trade Policy?",
      optionA: "The RBI",
      optionB: "The Directorate General of Foreign Trade",
      optionC: "SEBI",
      optionD: "The Finance Commission",
      correctOption: "B",
      explanation: "The Directorate General of Foreign Trade (DGFT) administers India's Foreign Trade Policy.",
      orderIndex: 5
    },
    {
      id: "upsc-economy-external-sector-and-trade-q07",
      topicId: "upsc-economy-external-sector-and-trade",
      text: "Which of the following is classified as an 'invisible' in the Balance of Payments?",
      optionA: "Software services and remittances",
      optionB: "Import of crude oil",
      optionC: "Export of machinery",
      optionD: "Import of gold",
      correctOption: "A",
      explanation: "Services and remittances are 'invisibles', as against visible merchandise trade in goods.",
      orderIndex: 6
    },
    {
      id: "upsc-economy-external-sector-and-trade-q08",
      topicId: "upsc-economy-external-sector-and-trade",
      text: "The global body that frames the rules of international trade is the:",
      optionA: "IMF",
      optionB: "WTO",
      optionC: "World Bank",
      optionD: "UNCTAD",
      correctOption: "B",
      explanation: "The World Trade Organization (WTO), established in 1995, frames and enforces global trade rules.",
      orderIndex: 7
    },
    {
      id: "upsc-economy-agriculture-and-food-security-q01",
      topicId: "upsc-economy-agriculture-and-food-security",
      text: "The Minimum Support Price (MSP) is recommended by which body?",
      optionA: "The Food Corporation of India",
      optionB: "The Commission for Agricultural Costs and Prices",
      optionC: "NABARD",
      optionD: "The NITI Aayog",
      correctOption: "B",
      explanation: "The Commission for Agricultural Costs and Prices (CACP) recommends the MSP to the government.",
      orderIndex: 0
    },
    {
      id: "upsc-economy-agriculture-and-food-security-q02",
      topicId: "upsc-economy-agriculture-and-food-security",
      text: "Consider the following statements:\n1. The National Food Security Act was enacted in 2013.\n2. It gives a legal right to subsidised foodgrains.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "The National Food Security Act, 2013 gives a legal entitlement to subsidised foodgrains via the PDS.",
      orderIndex: 1
    },
    {
      id: "upsc-economy-agriculture-and-food-security-q03",
      topicId: "upsc-economy-agriculture-and-food-security",
      text: "Procurement of foodgrains for the central pool is handled mainly by the:",
      optionA: "Food Corporation of India",
      optionB: "NABARD",
      optionC: "RBI",
      optionD: "CACP",
      correctOption: "A",
      explanation: "The Food Corporation of India (FCI) is the principal agency for procurement and buffer stocking.",
      orderIndex: 2
    },
    {
      id: "upsc-economy-agriculture-and-food-security-q04",
      topicId: "upsc-economy-agriculture-and-food-security",
      text: "The apex institution for agricultural and rural credit in India is:",
      optionA: "NABARD",
      optionB: "SIDBI",
      optionC: "The RBI",
      optionD: "EXIM Bank",
      correctOption: "A",
      explanation: "NABARD is the apex development bank for agriculture and rural credit in India.",
      orderIndex: 3
    },
    {
      id: "upsc-economy-agriculture-and-food-security-q05",
      topicId: "upsc-economy-agriculture-and-food-security",
      text: "The 'One Nation One Ration Card' scheme primarily enables:",
      optionA: "Crop insurance",
      optionB: "Portability of PDS benefits across states",
      optionC: "Free electricity to farmers",
      optionD: "Direct cash transfer of MSP",
      correctOption: "B",
      explanation: "One Nation One Ration Card allows beneficiaries to access PDS rations anywhere in the country.",
      orderIndex: 4
    },
    {
      id: "upsc-economy-agriculture-and-food-security-q06",
      topicId: "upsc-economy-agriculture-and-food-security",
      text: "MSP has been declared as a benchmark of how many times the A2+FL cost?",
      optionA: "1.2 times",
      optionB: "1 time",
      optionC: "2 times",
      optionD: "1.5 times",
      correctOption: "D",
      explanation: "The government announced MSP at a level of at least 1.5 times the A2+FL cost of production.",
      orderIndex: 5
    },
    {
      id: "upsc-economy-agriculture-and-food-security-q07",
      topicId: "upsc-economy-agriculture-and-food-security",
      text: "e-NAM is best described as:",
      optionA: "A unified national online agricultural market",
      optionB: "A crop insurance scheme",
      optionC: "A fertiliser subsidy portal",
      optionD: "A soil health card scheme",
      correctOption: "A",
      explanation: "e-NAM is the electronic National Agriculture Market, a unified online trading platform for farm produce.",
      orderIndex: 6
    },
    {
      id: "upsc-economy-agriculture-and-food-security-q08",
      topicId: "upsc-economy-agriculture-and-food-security",
      text: "The Green Revolution in India is most associated with which crops?",
      optionA: "Pulses and oilseeds",
      optionB: "Cotton and jute",
      optionC: "Wheat and rice",
      optionD: "Tea and coffee",
      correctOption: "C",
      explanation: "The Green Revolution sharply raised the output of wheat and rice through high-yielding varieties.",
      orderIndex: 7
    },
    {
      id: "upsc-international-relations-important-international-organizations-q01",
      topicId: "upsc-international-relations-important-international-organizations",
      text: "How many permanent members does the UN Security Council have?",
      optionA: "Seven",
      optionB: "Ten",
      optionC: "Fifteen",
      optionD: "Five",
      correctOption: "D",
      explanation: "The UNSC has five permanent members (USA, UK, France, Russia, China) with veto power.",
      orderIndex: 0
    },
    {
      id: "upsc-international-relations-important-international-organizations-q02",
      topicId: "upsc-international-relations-important-international-organizations",
      text: "Where is the International Court of Justice located?",
      optionA: "New York",
      optionB: "The Hague",
      optionC: "Geneva",
      optionD: "Vienna",
      correctOption: "B",
      explanation: "The International Court of Justice, the principal judicial organ of the UN, sits at The Hague.",
      orderIndex: 1
    },
    {
      id: "upsc-international-relations-important-international-organizations-q03",
      topicId: "upsc-international-relations-important-international-organizations",
      text: "Consider the following statements:\n1. The IMF and the World Bank are Bretton Woods institutions.\n2. Both are headquartered in Washington DC.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "The IMF and World Bank emerged from the 1944 Bretton Woods Conference and are based in Washington DC.",
      orderIndex: 2
    },
    {
      id: "upsc-international-relations-important-international-organizations-q04",
      topicId: "upsc-international-relations-important-international-organizations",
      text: "Special Drawing Rights (SDRs) are issued by which institution?",
      optionA: "The World Bank",
      optionB: "The WTO",
      optionC: "The IMF",
      optionD: "The Asian Development Bank",
      correctOption: "C",
      explanation: "Special Drawing Rights are an international reserve asset created and allocated by the IMF.",
      orderIndex: 3
    },
    {
      id: "upsc-international-relations-important-international-organizations-q05",
      topicId: "upsc-international-relations-important-international-organizations",
      text: "The International Atomic Energy Agency (IAEA) is headquartered in:",
      optionA: "Geneva",
      optionB: "Vienna",
      optionC: "Paris",
      optionD: "New York",
      correctOption: "B",
      explanation: "The IAEA, which promotes peaceful use of nuclear energy, is headquartered in Vienna.",
      orderIndex: 4
    },
    {
      id: "upsc-international-relations-important-international-organizations-q06",
      topicId: "upsc-international-relations-important-international-organizations",
      text: "Which is the only tripartite agency of the United Nations?",
      optionA: "The WHO",
      optionB: "The ILO",
      optionC: "UNESCO",
      optionD: "UNICEF",
      correctOption: "B",
      explanation: "The International Labour Organization (ILO) is unique in bringing together governments, employers and workers.",
      orderIndex: 5
    },
    {
      id: "upsc-international-relations-important-international-organizations-q07",
      topicId: "upsc-international-relations-important-international-organizations",
      text: "The WTO, governing global trade rules, came into existence in which year?",
      optionA: "1945",
      optionB: "1995",
      optionC: "1948",
      optionD: "2001",
      correctOption: "B",
      explanation: "The World Trade Organization was established in 1995, succeeding the GATT.",
      orderIndex: 6
    },
    {
      id: "upsc-international-relations-important-international-organizations-q08",
      topicId: "upsc-international-relations-important-international-organizations",
      text: "The G4 group, which seeks permanent UNSC seats, consists of India, Germany, Japan and:",
      optionA: "Australia",
      optionB: "South Africa",
      optionC: "Italy",
      optionD: "Brazil",
      correctOption: "D",
      explanation: "The G4 nations seeking permanent UN Security Council seats are India, Germany, Japan and Brazil.",
      orderIndex: 7
    },
    {
      id: "upsc-international-relations-indias-foreign-policy-and-diaspora-q01",
      topicId: "upsc-international-relations-indias-foreign-policy-and-diaspora",
      text: "The Panchsheel principles were enunciated in which year?",
      optionA: "1947",
      optionB: "1950",
      optionC: "1962",
      optionD: "1954",
      correctOption: "D",
      explanation: "The Panchsheel, the Five Principles of Peaceful Coexistence, were articulated in 1954.",
      orderIndex: 0
    },
    {
      id: "upsc-international-relations-indias-foreign-policy-and-diaspora-q02",
      topicId: "upsc-international-relations-indias-foreign-policy-and-diaspora",
      text: "SAGAR, a maritime vision, stands for:",
      optionA: "Security and Growth for All in the Region",
      optionB: "Strategic Action for Global Asian Regions",
      optionC: "South Asian Group for African Relations",
      optionD: "Safe Anchorage and Gulf Access Route",
      correctOption: "A",
      explanation: "SAGAR stands for 'Security and Growth for All in the Region', India's maritime cooperation vision.",
      orderIndex: 1
    },
    {
      id: "upsc-international-relations-indias-foreign-policy-and-diaspora-q03",
      topicId: "upsc-international-relations-indias-foreign-policy-and-diaspora",
      text: "Consider the following statements:\n1. India has the largest overseas diaspora in the world.\n2. India is among the top recipients of remittances.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "India has the world's largest diaspora and is the leading recipient of remittances globally.",
      orderIndex: 2
    },
    {
      id: "upsc-international-relations-indias-foreign-policy-and-diaspora-q04",
      topicId: "upsc-international-relations-indias-foreign-policy-and-diaspora",
      text: "Pravasi Bharatiya Divas is observed on which date?",
      optionA: "9 January",
      optionB: "26 January",
      optionC: "15 August",
      optionD: "2 October",
      correctOption: "A",
      explanation: "Pravasi Bharatiya Divas is observed on 9 January, marking Gandhi's return from South Africa in 1915.",
      orderIndex: 3
    },
    {
      id: "upsc-international-relations-indias-foreign-policy-and-diaspora-q05",
      topicId: "upsc-international-relations-indias-foreign-policy-and-diaspora",
      text: "India's 'Act East' policy is chiefly directed toward:",
      optionA: "ASEAN and East Asia",
      optionB: "Africa",
      optionC: "The Gulf countries",
      optionD: "Latin America",
      correctOption: "A",
      explanation: "The Act East policy strengthens India's economic and strategic ties with ASEAN and East Asia.",
      orderIndex: 4
    },
    {
      id: "upsc-international-relations-indias-foreign-policy-and-diaspora-q06",
      topicId: "upsc-international-relations-indias-foreign-policy-and-diaspora",
      text: "Which leader is most closely associated with shaping the Non-Aligned Movement for India?",
      optionA: "Sardar Patel",
      optionB: "Lal Bahadur Shastri",
      optionC: "Jawaharlal Nehru",
      optionD: "B.R. Ambedkar",
      correctOption: "C",
      explanation: "Jawaharlal Nehru was a principal architect of India's non-alignment and the Non-Aligned Movement.",
      orderIndex: 5
    },
    {
      id: "upsc-international-relations-indias-foreign-policy-and-diaspora-q07",
      topicId: "upsc-international-relations-indias-foreign-policy-and-diaspora",
      text: "An Overseas Citizen of India (OCI) cardholder is generally:",
      optionA: "A foreign citizen of Indian origin with visa-free entry",
      optionB: "An Indian citizen by birth",
      optionC: "Allowed to vote in Indian elections",
      optionD: "Eligible to hold constitutional office",
      correctOption: "A",
      explanation: "An OCI is a foreign citizen of Indian origin given lifelong visa-free entry but no voting rights.",
      orderIndex: 6
    },
    {
      id: "upsc-international-relations-indias-foreign-policy-and-diaspora-q08",
      topicId: "upsc-international-relations-indias-foreign-policy-and-diaspora",
      text: "Indian diplomacy and foreign relations are primarily conducted by which ministry?",
      optionA: "Ministry of Home Affairs",
      optionB: "Ministry of External Affairs",
      optionC: "Ministry of Defence",
      optionD: "Ministry of Commerce",
      correctOption: "B",
      explanation: "The Ministry of External Affairs (MEA) conducts India's diplomacy and foreign relations.",
      orderIndex: 7
    },
    {
      id: "upsc-ethics-ethics-and-human-interface-q01",
      topicId: "upsc-ethics-ethics-and-human-interface",
      text: "Ethics is best defined as:",
      optionA: "A set of legal rules",
      optionB: "The systematic study of morality",
      optionC: "Individual personal preferences",
      optionD: "Religious commandments only",
      correctOption: "B",
      explanation: "Ethics is the systematic, reflective study of morality and standards of right and wrong conduct.",
      orderIndex: 0
    },
    {
      id: "upsc-ethics-ethics-and-human-interface-q02",
      topicId: "upsc-ethics-ethics-and-human-interface",
      text: "Consider the following statements:\n1. Deontology judges an act by its consequences.\n2. Consequentialism judges an act by its outcomes.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "Deontology judges acts by adherence to duty, while consequentialism judges them by their outcomes.",
      orderIndex: 1
    },
    {
      id: "upsc-ethics-ethics-and-human-interface-q03",
      topicId: "upsc-ethics-ethics-and-human-interface",
      text: "The branch of ethics that analyses the meaning of moral terms is called:",
      optionA: "Meta-ethics",
      optionB: "Normative ethics",
      optionC: "Descriptive ethics",
      optionD: "Applied ethics",
      correctOption: "A",
      explanation: "Meta-ethics examines the nature and meaning of moral concepts such as 'good' and 'right'.",
      orderIndex: 2
    },
    {
      id: "upsc-ethics-ethics-and-human-interface-q04",
      topicId: "upsc-ethics-ethics-and-human-interface",
      text: "Which is often described as the inner moral guide or 'court of last appeal'?",
      optionA: "Law",
      optionB: "Conscience",
      optionC: "Custom",
      optionD: "Public opinion",
      correctOption: "B",
      explanation: "Conscience is regarded as the inner moral compass, the final internal arbiter of right and wrong.",
      orderIndex: 3
    },
    {
      id: "upsc-ethics-ethics-and-human-interface-q05",
      topicId: "upsc-ethics-ethics-and-human-interface",
      text: "Morals differ from ethics in that morals are:",
      optionA: "The systematic study of conduct",
      optionB: "Identical to legal rules",
      optionC: "Always codified in law",
      optionD: "Personal beliefs of right and wrong",
      correctOption: "D",
      explanation: "Morals are an individual's personal convictions, whereas ethics is the reasoned study of those convictions.",
      orderIndex: 4
    },
    {
      id: "upsc-ethics-ethics-and-human-interface-q06",
      topicId: "upsc-ethics-ethics-and-human-interface",
      text: "Normative ethics is primarily concerned with:",
      optionA: "What people ought to do",
      optionB: "What people actually do",
      optionC: "The meaning of moral language",
      optionD: "Statistical study of behaviour",
      correctOption: "A",
      explanation: "Normative ethics prescribes the standards of how people ought to act.",
      orderIndex: 5
    },
    {
      id: "upsc-ethics-ethics-and-human-interface-q07",
      topicId: "upsc-ethics-ethics-and-human-interface",
      text: "Consider the following statements:\n1. Public conduct demands higher accountability than private conduct.\n2. Conscience is regarded as a source of ethics.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "Public actions affect many and demand higher accountability, and conscience is a recognised source of ethics.",
      orderIndex: 6
    },
    {
      id: "upsc-ethics-ethics-and-human-interface-q08",
      topicId: "upsc-ethics-ethics-and-human-interface",
      text: "Which of the following is NOT generally considered a source of ethics?",
      optionA: "Religion",
      optionB: "Random chance",
      optionC: "The Constitution",
      optionD: "Society and family",
      correctOption: "B",
      explanation: "Family, religion, society and the constitution shape ethics; random chance is not a source of moral values.",
      orderIndex: 7
    },
    {
      id: "upsc-ethics-attitude-and-emotional-intelligence-q01",
      topicId: "upsc-ethics-attitude-and-emotional-intelligence",
      text: "The three components of attitude in the ABC model are affective, behavioural and:",
      optionA: "Contextual",
      optionB: "Compulsive",
      optionC: "Cognitive",
      optionD: "Cultural",
      correctOption: "C",
      explanation: "The ABC model of attitude comprises affective (feelings), behavioural and cognitive (beliefs) components.",
      orderIndex: 0
    },
    {
      id: "upsc-ethics-attitude-and-emotional-intelligence-q02",
      topicId: "upsc-ethics-attitude-and-emotional-intelligence",
      text: "The concept of Emotional Intelligence was popularised by:",
      optionA: "Abraham Maslow",
      optionB: "Sigmund Freud",
      optionC: "Daniel Goleman",
      optionD: "Leon Festinger",
      correctOption: "C",
      explanation: "Daniel Goleman popularised Emotional Intelligence through his widely read work on the subject.",
      orderIndex: 1
    },
    {
      id: "upsc-ethics-attitude-and-emotional-intelligence-q03",
      topicId: "upsc-ethics-attitude-and-emotional-intelligence",
      text: "Consider the following statements:\n1. Prejudice is a negative attitude toward a group.\n2. Discrimination is the behavioural expression of prejudice.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Prejudice is a negative attitude, and discrimination is its behavioural manifestation.",
      orderIndex: 2
    },
    {
      id: "upsc-ethics-attitude-and-emotional-intelligence-q04",
      topicId: "upsc-ethics-attitude-and-emotional-intelligence",
      text: "Which is NOT one of Goleman's five elements of Emotional Intelligence?",
      optionA: "Intelligence quotient",
      optionB: "Empathy",
      optionC: "Self-awareness",
      optionD: "Self-regulation",
      correctOption: "A",
      explanation: "Goleman's elements are self-awareness, self-regulation, motivation, empathy and social skills; IQ is separate.",
      orderIndex: 3
    },
    {
      id: "upsc-ethics-attitude-and-emotional-intelligence-q05",
      topicId: "upsc-ethics-attitude-and-emotional-intelligence",
      text: "The mental discomfort from holding conflicting beliefs is termed:",
      optionA: "Cognitive bias",
      optionB: "Cognitive dissonance",
      optionC: "Cognitive load",
      optionD: "Cognitive map",
      correctOption: "B",
      explanation: "Leon Festinger's cognitive dissonance describes discomfort from holding inconsistent beliefs or attitudes.",
      orderIndex: 4
    },
    {
      id: "upsc-ethics-attitude-and-emotional-intelligence-q06",
      topicId: "upsc-ethics-attitude-and-emotional-intelligence",
      text: "A stereotype is best described as the ___ component of an attitude toward a group.",
      optionA: "Affective",
      optionB: "Behavioural",
      optionC: "Cognitive",
      optionD: "Physiological",
      correctOption: "C",
      explanation: "A stereotype is the cognitive component, a generalised belief about members of a group.",
      orderIndex: 5
    },
    {
      id: "upsc-ethics-attitude-and-emotional-intelligence-q07",
      topicId: "upsc-ethics-attitude-and-emotional-intelligence",
      text: "Which feature best characterises attitudes?",
      optionA: "They are innate and fixed at birth",
      optionB: "They change every moment",
      optionC: "They cannot influence behaviour",
      optionD: "They are learned and relatively enduring",
      correctOption: "D",
      explanation: "Attitudes are learned, relatively enduring evaluations that influence behaviour.",
      orderIndex: 6
    },
    {
      id: "upsc-ethics-attitude-and-emotional-intelligence-q08",
      topicId: "upsc-ethics-attitude-and-emotional-intelligence",
      text: "Consider the following statements:\n1. Empathy is a component of emotional intelligence.\n2. High emotional intelligence helps an administrator manage stress.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Empathy is central to EI, and high EI aids stress management and balanced decision-making.",
      orderIndex: 7
    },
    {
      id: "upsc-ethics-moral-thinkers-and-philosophers-q01",
      topicId: "upsc-ethics-moral-thinkers-and-philosophers",
      text: "The 'categorical imperative' is a core idea of which philosopher?",
      optionA: "Aristotle",
      optionB: "Jeremy Bentham",
      optionC: "Immanuel Kant",
      optionD: "John Rawls",
      correctOption: "C",
      explanation: "Immanuel Kant's categorical imperative requires acting only on maxims that could be universal laws.",
      orderIndex: 0
    },
    {
      id: "upsc-ethics-moral-thinkers-and-philosophers-q02",
      topicId: "upsc-ethics-moral-thinkers-and-philosophers",
      text: "The principle of the 'greatest happiness of the greatest number' is associated with:",
      optionA: "Deontology",
      optionB: "Virtue ethics",
      optionC: "Existentialism",
      optionD: "Utilitarianism",
      correctOption: "D",
      explanation: "Utilitarianism, advanced by Bentham and Mill, seeks the greatest happiness of the greatest number.",
      orderIndex: 1
    },
    {
      id: "upsc-ethics-moral-thinkers-and-philosophers-q03",
      topicId: "upsc-ethics-moral-thinkers-and-philosophers",
      text: "Consider the following statements:\n1. Aristotle is associated with virtue ethics and the golden mean.\n2. John Rawls proposed the 'veil of ignorance'.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Aristotle gave virtue ethics and the golden mean; Rawls proposed the veil of ignorance for justice.",
      orderIndex: 2
    },
    {
      id: "upsc-ethics-moral-thinkers-and-philosophers-q04",
      topicId: "upsc-ethics-moral-thinkers-and-philosophers",
      text: "Gandhi's idea that the wealthy hold their riches in trust for society is called:",
      optionA: "Satyagraha",
      optionB: "Sarvodaya",
      optionC: "Trusteeship",
      optionD: "Swadeshi",
      correctOption: "C",
      explanation: "Gandhi's trusteeship doctrine holds that the rich should manage wealth for the welfare of society.",
      orderIndex: 3
    },
    {
      id: "upsc-ethics-moral-thinkers-and-philosophers-q05",
      topicId: "upsc-ethics-moral-thinkers-and-philosophers",
      text: "According to Aristotle, virtue lies in:",
      optionA: "The greatest pleasure",
      optionB: "Maximising utility",
      optionC: "Strict obedience to law",
      optionD: "The golden mean between extremes",
      correctOption: "D",
      explanation: "Aristotle held that moral virtue is the golden mean between two vices of excess and deficiency.",
      orderIndex: 4
    },
    {
      id: "upsc-ethics-moral-thinkers-and-philosophers-q06",
      topicId: "upsc-ethics-moral-thinkers-and-philosophers",
      text: "The concept of 'Nishkama Karma', action without attachment to results, is taught in the:",
      optionA: "Bhagavad Gita",
      optionB: "Arthashastra",
      optionC: "Republic",
      optionD: "Leviathan",
      correctOption: "A",
      explanation: "The Bhagavad Gita teaches Nishkama Karma, performing one's duty without attachment to its fruits.",
      orderIndex: 5
    },
    {
      id: "upsc-ethics-moral-thinkers-and-philosophers-q07",
      topicId: "upsc-ethics-moral-thinkers-and-philosophers",
      text: "Which thinker linked ethics with statecraft in the Arthashastra?",
      optionA: "Confucius",
      optionB: "Plato",
      optionC: "Kautilya",
      optionD: "Socrates",
      correctOption: "C",
      explanation: "Kautilya (Chanakya) integrated ethics with practical statecraft and economy in the Arthashastra.",
      orderIndex: 6
    },
    {
      id: "upsc-ethics-moral-thinkers-and-philosophers-q08",
      topicId: "upsc-ethics-moral-thinkers-and-philosophers",
      text: "Swami Vivekananda chiefly emphasised:",
      optionA: "Renunciation of all action",
      optionB: "Pursuit of personal wealth",
      optionC: "Service to humanity as worship",
      optionD: "Absolute obedience to authority",
      correctOption: "C",
      explanation: "Vivekananda taught that selfless service to humanity is a form of worship of the divine.",
      orderIndex: 7
    },
    {
      id: "upsc-ethics-public-civil-service-values-q01",
      topicId: "upsc-ethics-public-civil-service-values",
      text: "The 'Seven Principles of Public Life' were articulated by which committee?",
      optionA: "The Nolan Committee",
      optionB: "The Santhanam Committee",
      optionC: "The Hota Committee",
      optionD: "The Sarkaria Commission",
      correctOption: "A",
      explanation: "The UK's Nolan Committee laid down the Seven Principles of Public Life.",
      orderIndex: 0
    },
    {
      id: "upsc-ethics-public-civil-service-values-q02",
      topicId: "upsc-ethics-public-civil-service-values",
      text: "Which value requires a civil servant to treat all citizens without favour or bias?",
      optionA: "Anonymity",
      optionB: "Impartiality",
      optionC: "Secrecy",
      optionD: "Hierarchy",
      correctOption: "B",
      explanation: "Impartiality requires treating all citizens equally, without favour, bias or discrimination.",
      orderIndex: 1
    },
    {
      id: "upsc-ethics-public-civil-service-values-q03",
      topicId: "upsc-ethics-public-civil-service-values",
      text: "Consider the following statements:\n1. Integrity means honesty and wholeness in conduct.\n2. Objectivity means deciding on merit and evidence.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Integrity is honesty and consistency, while objectivity means basing decisions on merit and evidence.",
      orderIndex: 2
    },
    {
      id: "upsc-ethics-public-civil-service-values-q04",
      topicId: "upsc-ethics-public-civil-service-values",
      text: "Conduct of All India Service officers is governed by which rules?",
      optionA: "Representation of the People Act, 1951",
      optionB: "All India Services (Conduct) Rules, 1968",
      optionC: "Right to Information Act, 2005",
      optionD: "Indian Penal Code, 1860",
      correctOption: "B",
      explanation: "The All India Services (Conduct) Rules, 1968 govern the conduct of All India Service officers.",
      orderIndex: 3
    },
    {
      id: "upsc-ethics-public-civil-service-values-q05",
      topicId: "upsc-ethics-public-civil-service-values",
      text: "The traditional value requiring a civil servant to serve the elected government of the day neutrally is:",
      optionA: "Partisanship",
      optionB: "Political neutrality",
      optionC: "Populism",
      optionD: "Activism",
      correctOption: "B",
      explanation: "Political neutrality requires the permanent civil service to serve any elected government impartially.",
      orderIndex: 4
    },
    {
      id: "upsc-ethics-public-civil-service-values-q06",
      topicId: "upsc-ethics-public-civil-service-values",
      text: "Which body in India recommended reforms in its report 'Ethics in Governance'?",
      optionA: "The First ARC",
      optionB: "The Law Commission",
      optionC: "The Second ARC",
      optionD: "The Finance Commission",
      correctOption: "C",
      explanation: "The Second Administrative Reforms Commission devoted a report to 'Ethics in Governance'.",
      orderIndex: 5
    },
    {
      id: "upsc-ethics-public-civil-service-values-q07",
      topicId: "upsc-ethics-public-civil-service-values",
      text: "Ultimately, in a democracy, a civil servant is accountable to the:",
      optionA: "Public",
      optionB: "Media alone",
      optionC: "Their own family",
      optionD: "Foreign agencies",
      correctOption: "A",
      explanation: "A civil servant is accountable to the law, the political executive and ultimately the public.",
      orderIndex: 6
    },
    {
      id: "upsc-ethics-public-civil-service-values-q08",
      topicId: "upsc-ethics-public-civil-service-values",
      text: "Which value increasingly emphasised in modern administration relates to compassion for the weak?",
      optionA: "Aloofness",
      optionB: "Empathy",
      optionC: "Indifference",
      optionD: "Rigidity",
      correctOption: "B",
      explanation: "Empathy and compassion toward weaker sections are increasingly stressed civil service values.",
      orderIndex: 7
    },
    {
      id: "upsc-ethics-probity-in-governance-q01",
      topicId: "upsc-ethics-probity-in-governance",
      text: "Probity in governance essentially means:",
      optionA: "Integrity and uprightness in public life",
      optionB: "Speed of decision-making",
      optionC: "Maximising government revenue",
      optionD: "Strict secrecy of files",
      correctOption: "A",
      explanation: "Probity means complete integrity, uprightness and honesty in the conduct of public affairs.",
      orderIndex: 0
    },
    {
      id: "upsc-ethics-probity-in-governance-q02",
      topicId: "upsc-ethics-probity-in-governance",
      text: "The Right to Information Act was enacted in which year?",
      optionA: "2002",
      optionB: "2009",
      optionC: "2005",
      optionD: "2013",
      correctOption: "C",
      explanation: "The Right to Information Act was enacted in 2005 to promote transparency and accountability.",
      orderIndex: 1
    },
    {
      id: "upsc-ethics-probity-in-governance-q03",
      topicId: "upsc-ethics-probity-in-governance",
      text: "Consider the following statements:\n1. The Prevention of Corruption Act was enacted in 1988.\n2. The Central Vigilance Commission is the apex integrity watchdog.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "The Prevention of Corruption Act dates to 1988, and the CVC is the apex anti-corruption watchdog.",
      orderIndex: 2
    },
    {
      id: "upsc-ethics-probity-in-governance-q04",
      topicId: "upsc-ethics-probity-in-governance",
      text: "A Citizen's Charter primarily aims to:",
      optionA: "Declare service standards and grievance redress",
      optionB: "Increase tax collection",
      optionC: "Conduct elections",
      optionD: "Appoint judges",
      correctOption: "A",
      explanation: "A Citizen's Charter declares an organisation's service standards and mechanisms for redress.",
      orderIndex: 3
    },
    {
      id: "upsc-ethics-probity-in-governance-q05",
      topicId: "upsc-ethics-probity-in-governance",
      text: "The institution created to act as an ombudsman against corruption at the central level is the:",
      optionA: "Election Commission",
      optionB: "NITI Aayog",
      optionC: "Finance Commission",
      optionD: "Lokpal",
      correctOption: "D",
      explanation: "The Lokpal, set up under the Lokpal and Lokayuktas Act, 2013, is the central anti-corruption ombudsman.",
      orderIndex: 4
    },
    {
      id: "upsc-ethics-probity-in-governance-q06",
      topicId: "upsc-ethics-probity-in-governance",
      text: "Which Act protects those who expose corruption or wrongdoing?",
      optionA: "The Official Secrets Act, 1923",
      optionB: "The Whistle Blowers Protection Act, 2014",
      optionC: "The Companies Act, 2013",
      optionD: "The Contempt of Courts Act, 1971",
      correctOption: "B",
      explanation: "The Whistle Blowers Protection Act, 2014 provides protection to those disclosing corruption.",
      orderIndex: 5
    },
    {
      id: "upsc-ethics-probity-in-governance-q07",
      topicId: "upsc-ethics-probity-in-governance",
      text: "Which mechanism, used in MGNREGA, lets the community verify public spending?",
      optionA: "Social audit",
      optionB: "Internal audit",
      optionC: "Statutory audit",
      optionD: "Forensic audit",
      correctOption: "A",
      explanation: "Social audit empowers the community to scrutinise public spending, notably under MGNREGA.",
      orderIndex: 6
    },
    {
      id: "upsc-ethics-probity-in-governance-q08",
      topicId: "upsc-ethics-probity-in-governance",
      text: "Probity in governance rests primarily on transparency, accountability and the:",
      optionA: "Discretion of officials",
      optionB: "Rule of the majority",
      optionC: "Rule of law",
      optionD: "Secrecy of decisions",
      correctOption: "C",
      explanation: "Probity rests on transparency, accountability and the rule of law in public administration.",
      orderIndex: 7
    },
    {
      id: "upsc-ethics-case-studies-approach-q01",
      topicId: "upsc-ethics-case-studies-approach",
      text: "An ethical dilemma is best described as a conflict between:",
      optionA: "A right and a clearly wrong option",
      optionB: "Law and personal profit",
      optionC: "Two equally valid right values",
      optionD: "Two illegal options",
      correctOption: "C",
      explanation: "An ethical dilemma is a genuine conflict between two competing right values, not right versus wrong.",
      orderIndex: 0
    },
    {
      id: "upsc-ethics-case-studies-approach-q02",
      topicId: "upsc-ethics-case-studies-approach",
      text: "In ethics, the principle that good ends do not justify wrong means stresses the importance of:",
      optionA: "Only the final outcome",
      optionB: "Means as well as ends",
      optionC: "Personal gain",
      optionD: "Speed over correctness",
      correctOption: "B",
      explanation: "Ethical administration insists that the means must be as legitimate as the ends sought.",
      orderIndex: 1
    },
    {
      id: "upsc-ethics-case-studies-approach-q03",
      topicId: "upsc-ethics-case-studies-approach",
      text: "Consider the following statements:\n1. Identifying stakeholders is a key step in a case study.\n2. The decision should be justified with reasons.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "A sound case-study answer identifies stakeholders and gives a reasoned justification for the chosen action.",
      orderIndex: 2
    },
    {
      id: "upsc-ethics-case-studies-approach-q04",
      topicId: "upsc-ethics-case-studies-approach",
      text: "The 'publicity test' for an ethical decision asks whether you would:",
      optionA: "Keep it strictly secret",
      optionB: "Be willing to defend it publicly",
      optionC: "Maximise personal benefit",
      optionD: "Obey superiors blindly",
      correctOption: "B",
      explanation: "The publicity test asks whether you could openly justify and defend the decision before the public.",
      orderIndex: 3
    },
    {
      id: "upsc-ethics-case-studies-approach-q05",
      topicId: "upsc-ethics-case-studies-approach",
      text: "Which of the following is typically the FIRST step in analysing a case study?",
      optionA: "State the facts and identify the dilemma",
      optionB: "Announce the final decision",
      optionC: "Punish the wrongdoer",
      optionD: "Ignore the stakeholders",
      correctOption: "A",
      explanation: "The first step is to understand the facts clearly and identify the central ethical dilemma.",
      orderIndex: 4
    },
    {
      id: "upsc-ethics-case-studies-approach-q06",
      topicId: "upsc-ethics-case-studies-approach",
      text: "A frequent dilemma in case studies is the conflict between:",
      optionA: "Two unrelated hobbies",
      optionB: "Personal ethics and professional duty",
      optionC: "Two foreign policies",
      optionD: "Weather and climate",
      correctOption: "B",
      explanation: "Conflicts between personal ethics and professional or official duty are common case-study dilemmas.",
      orderIndex: 5
    },
    {
      id: "upsc-ethics-case-studies-approach-q07",
      topicId: "upsc-ethics-case-studies-approach",
      text: "Evaluating each option against ethics and law before deciding is important because it ensures the choice is:",
      optionA: "Arbitrary",
      optionB: "Based on personal bias",
      optionC: "Defensible and reasoned",
      optionD: "Hidden from scrutiny",
      correctOption: "C",
      explanation: "Weighing options against ethics and law makes the final decision defensible and well reasoned.",
      orderIndex: 6
    },
    {
      id: "upsc-ethics-case-studies-approach-q08",
      topicId: "upsc-ethics-case-studies-approach",
      text: "Consider the following statements:\n1. Pressure from political superiors is a recurring case-study theme.\n2. The legality and conscience checks help resolve dilemmas.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "Pressure from superiors is common, and legality plus conscience checks guide a reasoned resolution.",
      orderIndex: 7
    },
    {
      id: "upsc-governance-governance-and-e-governance-q01",
      topicId: "upsc-governance-governance-and-e-governance",
      text: "The Digital India programme was launched in which year?",
      optionA: "2014",
      optionB: "2015",
      optionC: "2016",
      optionD: "2017",
      correctOption: "B",
      explanation: "The Digital India programme was launched in 2015 to transform India into a digitally empowered society.",
      orderIndex: 0
    },
    {
      id: "upsc-governance-governance-and-e-governance-q02",
      topicId: "upsc-governance-governance-and-e-governance",
      text: "In e-governance, 'G2C' interaction refers to:",
      optionA: "Government to Citizen",
      optionB: "Government to Business",
      optionC: "Government to Government",
      optionD: "Government to Employee",
      correctOption: "A",
      explanation: "G2C denotes Government to Citizen service delivery in the e-governance framework.",
      orderIndex: 1
    },
    {
      id: "upsc-governance-governance-and-e-governance-q03",
      topicId: "upsc-governance-governance-and-e-governance",
      text: "Consider the following statements:\n1. Accountability and transparency are pillars of good governance.\n2. e-Governance can reduce discretion and corruption.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "Good governance rests on accountability and transparency, and e-governance curbs discretion and graft.",
      orderIndex: 2
    },
    {
      id: "upsc-governance-governance-and-e-governance-q04",
      topicId: "upsc-governance-governance-and-e-governance",
      text: "Which platform allows citizens to store official documents digitally?",
      optionA: "DigiLocker",
      optionB: "MyGov",
      optionC: "GeM",
      optionD: "PRAGATI",
      correctOption: "A",
      explanation: "DigiLocker provides citizens secure cloud-based storage and access to official documents.",
      orderIndex: 3
    },
    {
      id: "upsc-governance-governance-and-e-governance-q05",
      topicId: "upsc-governance-governance-and-e-governance",
      text: "Common Service Centres (CSCs) are mainly intended to:",
      optionA: "Replace courts",
      optionB: "Conduct elections",
      optionC: "Deliver digital services at the last mile",
      optionD: "Print currency",
      correctOption: "C",
      explanation: "CSCs deliver government and digital services to citizens at the last mile, especially in rural areas.",
      orderIndex: 4
    },
    {
      id: "upsc-governance-governance-and-e-governance-q06",
      topicId: "upsc-governance-governance-and-e-governance",
      text: "The 'JAM trinity' enabling Direct Benefit Transfer comprises Jan Dhan, Aadhaar and:",
      optionA: "Microfinance",
      optionB: "Mobile",
      optionC: "Markets",
      optionD: "Mandis",
      correctOption: "B",
      explanation: "The JAM trinity is Jan Dhan accounts, Aadhaar and Mobile numbers, enabling Direct Benefit Transfer.",
      orderIndex: 5
    },
    {
      id: "upsc-governance-governance-and-e-governance-q07",
      topicId: "upsc-governance-governance-and-e-governance",
      text: "The motto 'Minimum Government, Maximum Governance' emphasises:",
      optionA: "Expanding bureaucracy",
      optionB: "Reducing citizen services",
      optionC: "Centralising all power",
      optionD: "Simplification and process re-engineering",
      correctOption: "D",
      explanation: "The motto stresses simplifying processes and reducing red tape while improving service delivery.",
      orderIndex: 6
    },
    {
      id: "upsc-governance-governance-and-e-governance-q08",
      topicId: "upsc-governance-governance-and-e-governance",
      text: "The Sevottam model is associated with:",
      optionA: "Service delivery standards and grievance redress",
      optionB: "Defence procurement",
      optionC: "Foreign trade",
      optionD: "Monetary policy",
      correctOption: "A",
      explanation: "The Sevottam model sets standards for public service delivery and grievance redress.",
      orderIndex: 7
    },
    {
      id: "upsc-governance-transparency-rti-and-accountability-q01",
      topicId: "upsc-governance-transparency-rti-and-accountability",
      text: "The Right to Information flows mainly from which Fundamental Right?",
      optionA: "Article 21",
      optionB: "Article 32",
      optionC: "Article 14",
      optionD: "Article 19(1)(a) freedom of speech and expression",
      correctOption: "D",
      explanation: "The RTI is read into Article 19(1)(a), the freedom of speech and expression.",
      orderIndex: 0
    },
    {
      id: "upsc-governance-transparency-rti-and-accountability-q02",
      topicId: "upsc-governance-transparency-rti-and-accountability",
      text: "Under the RTI Act, information is normally to be provided within:",
      optionA: "15 days",
      optionB: "45 days",
      optionC: "30 days",
      optionD: "60 days",
      correctOption: "C",
      explanation: "The RTI Act requires information to be furnished within 30 days of the request in normal cases.",
      orderIndex: 1
    },
    {
      id: "upsc-governance-transparency-rti-and-accountability-q03",
      topicId: "upsc-governance-transparency-rti-and-accountability",
      text: "Consider the following statements:\n1. The CAG audits government accounts under Article 148.\n2. The Public Accounts Committee scrutinises government spending.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "The CAG audits accounts under Article 148, and the PAC examines audited government expenditure.",
      orderIndex: 2
    },
    {
      id: "upsc-governance-transparency-rti-and-accountability-q04",
      topicId: "upsc-governance-transparency-rti-and-accountability",
      text: "The apex appellate body under the RTI Act at the central level is the:",
      optionA: "Central Information Commission",
      optionB: "Central Vigilance Commission",
      optionC: "Central Administrative Tribunal",
      optionD: "National Human Rights Commission",
      correctOption: "A",
      explanation: "The Central Information Commission is the apex appellate authority under the RTI Act at the Centre.",
      orderIndex: 3
    },
    {
      id: "upsc-governance-transparency-rti-and-accountability-q05",
      topicId: "upsc-governance-transparency-rti-and-accountability",
      text: "When information concerns the life or liberty of a person, the RTI reply must be given within:",
      optionA: "15 days",
      optionB: "7 days",
      optionC: "48 hours",
      optionD: "30 days",
      correctOption: "C",
      explanation: "Where life or liberty is involved, the RTI Act mandates a response within 48 hours.",
      orderIndex: 4
    },
    {
      id: "upsc-governance-transparency-rti-and-accountability-q06",
      topicId: "upsc-governance-transparency-rti-and-accountability",
      text: "Which tool lets a local community directly verify the use of public funds?",
      optionA: "Statutory audit",
      optionB: "Performance budgeting",
      optionC: "Social audit",
      optionD: "Zero-based budgeting",
      correctOption: "C",
      explanation: "Social audit allows the community to verify how public funds are spent, as in MGNREGA.",
      orderIndex: 5
    },
    {
      id: "upsc-governance-transparency-rti-and-accountability-q07",
      topicId: "upsc-governance-transparency-rti-and-accountability",
      text: "The CAG is described as the:",
      optionA: "Chief electoral officer",
      optionB: "Head of the executive",
      optionC: "Guardian of the public purse",
      optionD: "Custodian of foreign reserves",
      correctOption: "C",
      explanation: "The Comptroller and Auditor General is called the guardian of the public purse.",
      orderIndex: 6
    },
    {
      id: "upsc-governance-transparency-rti-and-accountability-q08",
      topicId: "upsc-governance-transparency-rti-and-accountability",
      text: "RTI exemptions for certain intelligence and security organisations are listed in the:",
      optionA: "First Schedule",
      optionB: "Second Schedule",
      optionC: "Third Schedule",
      optionD: "Fourth Schedule",
      correctOption: "B",
      explanation: "The Second Schedule of the RTI Act lists exempt intelligence and security organisations.",
      orderIndex: 7
    },
    {
      id: "upsc-governance-welfare-schemes-and-vulnerable-sections-q01",
      topicId: "upsc-governance-welfare-schemes-and-vulnerable-sections",
      text: "Untouchability is abolished by which Article of the Constitution?",
      optionA: "Article 14",
      optionB: "Article 15",
      optionC: "Article 17",
      optionD: "Article 21",
      correctOption: "C",
      explanation: "Article 17 abolishes untouchability and forbids its practice in any form.",
      orderIndex: 0
    },
    {
      id: "upsc-governance-welfare-schemes-and-vulnerable-sections-q02",
      topicId: "upsc-governance-welfare-schemes-and-vulnerable-sections",
      text: "The National Commission for Scheduled Castes is provided for under which Article?",
      optionA: "Article 340",
      optionB: "Article 338A",
      optionC: "Article 338B",
      optionD: "Article 338",
      correctOption: "D",
      explanation: "Article 338 provides for the National Commission for Scheduled Castes.",
      orderIndex: 1
    },
    {
      id: "upsc-governance-welfare-schemes-and-vulnerable-sections-q03",
      topicId: "upsc-governance-welfare-schemes-and-vulnerable-sections",
      text: "Consider the following statements:\n1. The Forest Rights Act was enacted in 2006.\n2. It recognises rights of forest-dwelling communities.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "The Forest Rights Act, 2006 recognises the rights of forest-dwelling Scheduled Tribes and other dwellers.",
      orderIndex: 2
    },
    {
      id: "upsc-governance-welfare-schemes-and-vulnerable-sections-q04",
      topicId: "upsc-governance-welfare-schemes-and-vulnerable-sections",
      text: "The National Commission for Backward Classes became a constitutional body under which Article?",
      optionA: "Article 338",
      optionB: "Article 338B",
      optionC: "Article 338A",
      optionD: "Article 340",
      correctOption: "B",
      explanation: "The 102nd Amendment inserted Article 338B, giving the NCBC constitutional status.",
      orderIndex: 3
    },
    {
      id: "upsc-governance-welfare-schemes-and-vulnerable-sections-q05",
      topicId: "upsc-governance-welfare-schemes-and-vulnerable-sections",
      text: "The Rights of Persons with Disabilities Act was enacted in which year?",
      optionA: "1995",
      optionB: "2006",
      optionC: "2013",
      optionD: "2016",
      correctOption: "D",
      explanation: "The Rights of Persons with Disabilities Act was enacted in 2016, expanding recognised disabilities to 21.",
      orderIndex: 4
    },
    {
      id: "upsc-governance-welfare-schemes-and-vulnerable-sections-q06",
      topicId: "upsc-governance-welfare-schemes-and-vulnerable-sections",
      text: "Which scheme targets the welfare of women and children through nutrition support?",
      optionA: "Make in India",
      optionB: "Poshan Abhiyaan",
      optionC: "Stand-Up India",
      optionD: "Smart Cities Mission",
      correctOption: "B",
      explanation: "Poshan Abhiyaan aims to improve nutritional outcomes for children, pregnant women and mothers.",
      orderIndex: 5
    },
    {
      id: "upsc-governance-welfare-schemes-and-vulnerable-sections-q07",
      topicId: "upsc-governance-welfare-schemes-and-vulnerable-sections",
      text: "Special provisions enabling the State to make laws for women and children are found in:",
      optionA: "Article 32",
      optionB: "Article 19(1)(a)",
      optionC: "Article 25",
      optionD: "Article 15(3)",
      correctOption: "D",
      explanation: "Article 15(3) allows the State to make special provisions for women and children.",
      orderIndex: 6
    },
    {
      id: "upsc-governance-welfare-schemes-and-vulnerable-sections-q08",
      topicId: "upsc-governance-welfare-schemes-and-vulnerable-sections",
      text: "Administration of tribal areas in states like Assam, Meghalaya and Mizoram is governed by the:",
      optionA: "Fifth Schedule",
      optionB: "Sixth Schedule",
      optionC: "Seventh Schedule",
      optionD: "Eighth Schedule",
      correctOption: "B",
      explanation: "The Sixth Schedule governs the administration of tribal areas in Assam, Meghalaya, Tripura and Mizoram.",
      orderIndex: 7
    },
    {
      id: "upsc-governance-health-education-and-human-resources-q01",
      topicId: "upsc-governance-health-education-and-human-resources",
      text: "Ayushman Bharat PM-JAY provides health cover of how much per family per year?",
      optionA: "5 lakh",
      optionB: "3 lakh",
      optionC: "1 lakh",
      optionD: "10 lakh",
      correctOption: "A",
      explanation: "PM-JAY provides health cover of 5 lakh rupees per family per year for secondary and tertiary care.",
      orderIndex: 0
    },
    {
      id: "upsc-governance-health-education-and-human-resources-q02",
      topicId: "upsc-governance-health-education-and-human-resources",
      text: "The Right of Children to Free and Compulsory Education Act was enacted in:",
      optionA: "2002",
      optionB: "2005",
      optionC: "2009",
      optionD: "2016",
      correctOption: "C",
      explanation: "The RTE Act, 2009 operationalises Article 21A, guaranteeing free education to children aged 6 to 14.",
      orderIndex: 1
    },
    {
      id: "upsc-governance-health-education-and-human-resources-q03",
      topicId: "upsc-governance-health-education-and-human-resources",
      text: "Consider the following statements:\n1. The National Medical Commission replaced the Medical Council of India.\n2. The NEP 2020 introduced a 5+3+3+4 school structure.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "The NMC replaced the MCI in 2020, and the NEP 2020 introduced the 5+3+3+4 schooling structure.",
      orderIndex: 2
    },
    {
      id: "upsc-governance-health-education-and-human-resources-q04",
      topicId: "upsc-governance-health-education-and-human-resources",
      text: "Which body regulates higher education and universities in India?",
      optionA: "SEBI",
      optionB: "The RBI",
      optionC: "The UGC",
      optionD: "The NITI Aayog",
      correctOption: "C",
      explanation: "The University Grants Commission (UGC) regulates standards in higher education and universities.",
      orderIndex: 3
    },
    {
      id: "upsc-governance-health-education-and-human-resources-q05",
      topicId: "upsc-governance-health-education-and-human-resources",
      text: "The Human Development Index combines income with which two dimensions?",
      optionA: "Inflation and employment",
      optionB: "Savings and consumption",
      optionC: "Trade and investment",
      optionD: "Health and education",
      correctOption: "D",
      explanation: "The HDI combines health (life expectancy), education and per capita income.",
      orderIndex: 4
    },
    {
      id: "upsc-governance-health-education-and-human-resources-q06",
      topicId: "upsc-governance-health-education-and-human-resources",
      text: "The NEP 2020 targets a Gross Enrolment Ratio in higher education of about what level by 2035?",
      optionA: "50 per cent",
      optionB: "40 per cent",
      optionC: "30 per cent",
      optionD: "60 per cent",
      correctOption: "A",
      explanation: "The NEP 2020 aims to raise the higher-education Gross Enrolment Ratio to 50 per cent by 2035.",
      orderIndex: 5
    },
    {
      id: "upsc-governance-health-education-and-human-resources-q07",
      topicId: "upsc-governance-health-education-and-human-resources",
      text: "Health and education in India largely fall under which legislative list?",
      optionA: "Union List",
      optionB: "Concurrent List",
      optionC: "State List",
      optionD: "Residuary powers",
      correctOption: "B",
      explanation: "Both health-related matters and education are largely on the Concurrent List shared by Centre and States.",
      orderIndex: 6
    },
    {
      id: "upsc-governance-health-education-and-human-resources-q08",
      topicId: "upsc-governance-health-education-and-human-resources",
      text: "India's potential 'demographic dividend' depends most critically on:",
      optionA: "Rising death rates",
      optionB: "Reducing literacy",
      optionC: "Skilling its young workforce",
      optionD: "Cutting health spending",
      correctOption: "C",
      explanation: "The demographic dividend is realised only if the large young population is educated and skilled.",
      orderIndex: 7
    },
    {
      id: "upsc-internal-security-internal-security-challenges-q01",
      topicId: "upsc-internal-security-internal-security-challenges",
      text: "Which is India's principal anti-terror law?",
      optionA: "The NIA Act, 2008",
      optionB: "The PMLA, 2002",
      optionC: "The Arms Act, 1959",
      optionD: "The UAPA, 1967",
      correctOption: "D",
      explanation: "The Unlawful Activities (Prevention) Act, 1967 is India's principal anti-terror legislation.",
      orderIndex: 0
    },
    {
      id: "upsc-internal-security-internal-security-challenges-q02",
      topicId: "upsc-internal-security-internal-security-challenges",
      text: "Which agency investigates terror-related offences at the national level?",
      optionA: "The CBI",
      optionB: "The Intelligence Bureau",
      optionC: "The Enforcement Directorate",
      optionD: "The National Investigation Agency",
      correctOption: "D",
      explanation: "The National Investigation Agency (NIA) investigates terror offences under the NIA Act, 2008.",
      orderIndex: 1
    },
    {
      id: "upsc-internal-security-internal-security-challenges-q03",
      topicId: "upsc-internal-security-internal-security-challenges",
      text: "Consider the following statements:\n1. Left-Wing Extremism has been called India's single biggest internal security threat.\n2. The CRPF is the lead force for anti-Naxal operations.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "LWE was termed the biggest internal security threat, and the CRPF leads anti-Naxal operations.",
      orderIndex: 2
    },
    {
      id: "upsc-internal-security-internal-security-challenges-q04",
      topicId: "upsc-internal-security-internal-security-challenges",
      text: "The 2019 amendment to the UAPA notably allowed the government to designate as terrorists:",
      optionA: "Only organisations",
      optionB: "Only foreign nationals",
      optionC: "Only convicted persons",
      optionD: "Individuals as well",
      correctOption: "D",
      explanation: "The 2019 UAPA amendment empowered the government to designate individuals, not just organisations, as terrorists.",
      orderIndex: 3
    },
    {
      id: "upsc-internal-security-internal-security-challenges-q05",
      topicId: "upsc-internal-security-internal-security-challenges",
      text: "Insurgency in India has been most persistently associated with which region?",
      optionA: "Kerala",
      optionB: "The North-East",
      optionC: "Gujarat",
      optionD: "Goa",
      correctOption: "B",
      explanation: "Several North-Eastern states have witnessed long-running insurgencies over identity and autonomy.",
      orderIndex: 4
    },
    {
      id: "upsc-internal-security-internal-security-challenges-q06",
      topicId: "upsc-internal-security-internal-security-challenges",
      text: "Which of the following is a Central Armed Police Force?",
      optionA: "The Indian Navy",
      optionB: "The Territorial Army",
      optionC: "The Indian Air Force",
      optionD: "The CISF",
      correctOption: "D",
      explanation: "The CISF is one of the Central Armed Police Forces, alongside the CRPF, BSF, ITBP and SSB.",
      orderIndex: 5
    },
    {
      id: "upsc-internal-security-internal-security-challenges-q07",
      topicId: "upsc-internal-security-internal-security-challenges",
      text: "The corridor of districts affected by Left-Wing Extremism is popularly called the:",
      optionA: "Golden Corridor",
      optionB: "Red Corridor",
      optionC: "Green Corridor",
      optionD: "Blue Corridor",
      correctOption: "B",
      explanation: "The belt of LWE-affected districts in central and eastern India is known as the Red Corridor.",
      orderIndex: 6
    },
    {
      id: "upsc-internal-security-internal-security-challenges-q08",
      topicId: "upsc-internal-security-internal-security-challenges",
      text: "Which force is mainly deployed for internal security and law-and-order duties across states?",
      optionA: "The CRPF",
      optionB: "The BSF",
      optionC: "The ITBP",
      optionD: "The Coast Guard",
      correctOption: "A",
      explanation: "The Central Reserve Police Force (CRPF) is the lead force for internal security and law and order.",
      orderIndex: 7
    },
    {
      id: "upsc-internal-security-cyber-security-and-money-laundering-q01",
      topicId: "upsc-internal-security-cyber-security-and-money-laundering",
      text: "Which is the national nodal agency for responding to cyber security incidents in India?",
      optionA: "NCIIPC",
      optionB: "CERT-In",
      optionC: "NTRO",
      optionD: "NIA",
      correctOption: "B",
      explanation: "CERT-In is the national nodal agency for handling cyber security incidents in India.",
      orderIndex: 0
    },
    {
      id: "upsc-internal-security-cyber-security-and-money-laundering-q02",
      topicId: "upsc-internal-security-cyber-security-and-money-laundering",
      text: "The primary law dealing with cyber offences in India is the:",
      optionA: "Indian Penal Code, 1860",
      optionB: "Telegraph Act, 1885",
      optionC: "Information Technology Act, 2000",
      optionD: "Evidence Act, 1872",
      correctOption: "C",
      explanation: "The Information Technology Act, 2000 is the primary law governing cyber offences in India.",
      orderIndex: 1
    },
    {
      id: "upsc-internal-security-cyber-security-and-money-laundering-q03",
      topicId: "upsc-internal-security-cyber-security-and-money-laundering",
      text: "Consider the following statements:\n1. Money laundering has three stages: placement, layering and integration.\n2. The Enforcement Directorate enforces the PMLA.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "Laundering involves placement, layering and integration, and the ED enforces the PMLA, 2002.",
      orderIndex: 2
    },
    {
      id: "upsc-internal-security-cyber-security-and-money-laundering-q04",
      topicId: "upsc-internal-security-cyber-security-and-money-laundering",
      text: "Which global body sets standards against money laundering and terror financing?",
      optionA: "The IMF",
      optionB: "The WTO",
      optionC: "The FATF",
      optionD: "The OECD",
      correctOption: "C",
      explanation: "The Financial Action Task Force (FATF) sets global anti-money-laundering and counter-terror-finance standards.",
      orderIndex: 3
    },
    {
      id: "upsc-internal-security-cyber-security-and-money-laundering-q05",
      topicId: "upsc-internal-security-cyber-security-and-money-laundering",
      text: "Ransomware is a cyber threat that typically:",
      optionA: "Speeds up a computer",
      optionB: "Backs up files automatically",
      optionC: "Encrypts data and demands payment",
      optionD: "Improves network security",
      correctOption: "C",
      explanation: "Ransomware encrypts a victim's data and demands a ransom for its release.",
      orderIndex: 4
    },
    {
      id: "upsc-internal-security-cyber-security-and-money-laundering-q06",
      topicId: "upsc-internal-security-cyber-security-and-money-laundering",
      text: "The agency that receives and analyses suspicious transaction reports in India is the:",
      optionA: "FIU-IND",
      optionB: "SEBI",
      optionC: "CERT-In",
      optionD: "RBI",
      correctOption: "A",
      explanation: "The Financial Intelligence Unit-India (FIU-IND) collects and analyses suspicious transaction reports.",
      orderIndex: 5
    },
    {
      id: "upsc-internal-security-cyber-security-and-money-laundering-q07",
      topicId: "upsc-internal-security-cyber-security-and-money-laundering",
      text: "An informal value-transfer system often misused for laundering is known as:",
      optionA: "Hundi insurance",
      optionB: "Hawala",
      optionC: "Crowdfunding",
      optionD: "Factoring",
      correctOption: "B",
      explanation: "Hawala is an informal, trust-based money-transfer network frequently misused for laundering.",
      orderIndex: 6
    },
    {
      id: "upsc-internal-security-cyber-security-and-money-laundering-q08",
      topicId: "upsc-internal-security-cyber-security-and-money-laundering",
      text: "Which body is tasked with protecting India's critical information infrastructure?",
      optionA: "NCIIPC",
      optionB: "CERT-In",
      optionC: "FIU-IND",
      optionD: "The Coast Guard",
      correctOption: "A",
      explanation: "The National Critical Information Infrastructure Protection Centre (NCIIPC) guards critical information assets.",
      orderIndex: 7
    },
    {
      id: "upsc-internal-security-border-management-q01",
      topicId: "upsc-internal-security-border-management",
      text: "Which force primarily guards the India-Pakistan and India-Bangladesh borders?",
      optionA: "The ITBP",
      optionB: "The Border Security Force",
      optionC: "The SSB",
      optionD: "The Assam Rifles",
      correctOption: "B",
      explanation: "The Border Security Force (BSF) guards the India-Pakistan and India-Bangladesh borders.",
      orderIndex: 0
    },
    {
      id: "upsc-internal-security-border-management-q02",
      topicId: "upsc-internal-security-border-management",
      text: "The Indo-Tibetan Border Police primarily guards the border with:",
      optionA: "Pakistan",
      optionB: "Bangladesh",
      optionC: "China",
      optionD: "Myanmar",
      correctOption: "C",
      explanation: "The ITBP guards the India-China border along the Line of Actual Control.",
      orderIndex: 1
    },
    {
      id: "upsc-internal-security-border-management-q03",
      topicId: "upsc-internal-security-border-management",
      text: "Consider the following statements:\n1. The Sashastra Seema Bal guards the Nepal and Bhutan borders.\n2. The Assam Rifles guards the Myanmar border.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "The SSB guards the Nepal and Bhutan borders, while the Assam Rifles guards the Myanmar frontier.",
      orderIndex: 2
    },
    {
      id: "upsc-internal-security-border-management-q04",
      topicId: "upsc-internal-security-border-management",
      text: "The boundary between India and Pakistan demarcated at Partition is the:",
      optionA: "McMahon Line",
      optionB: "Radcliffe Line",
      optionC: "Durand Line",
      optionD: "Line of Actual Control",
      correctOption: "B",
      explanation: "The Radcliffe Line, drawn in 1947, demarcates the India-Pakistan boundary.",
      orderIndex: 3
    },
    {
      id: "upsc-internal-security-border-management-q05",
      topicId: "upsc-internal-security-border-management",
      text: "After the 2008 Mumbai attacks, the lead agency for coastal security in territorial waters became the:",
      optionA: "Indian Navy",
      optionB: "Indian Coast Guard",
      optionC: "The BSF",
      optionD: "The CISF",
      correctOption: "B",
      explanation: "The Indian Coast Guard was made the lead agency for coastal security in territorial waters after 2008.",
      orderIndex: 4
    },
    {
      id: "upsc-internal-security-border-management-q06",
      topicId: "upsc-internal-security-border-management",
      text: "The India-China boundary in the eastern sector is broadly defined by the:",
      optionA: "Radcliffe Line",
      optionB: "McMahon Line",
      optionC: "Durand Line",
      optionD: "Line of Control",
      correctOption: "B",
      explanation: "The McMahon Line broadly defines the India-China boundary in the eastern sector.",
      orderIndex: 5
    },
    {
      id: "upsc-internal-security-border-management-q07",
      topicId: "upsc-internal-security-border-management",
      text: "The programme that funds development of villages along the border is the:",
      optionA: "Smart Cities Mission",
      optionB: "Border Area Development Programme",
      optionC: "AMRUT",
      optionD: "PM Gram Sadak Yojana",
      correctOption: "B",
      explanation: "The Border Area Development Programme (BADP) funds development of border-area villages.",
      orderIndex: 6
    },
    {
      id: "upsc-internal-security-border-management-q08",
      topicId: "upsc-internal-security-border-management",
      text: "The technology-based system to seal vulnerable border stretches is the:",
      optionA: "CIBMS",
      optionB: "NATGRID",
      optionC: "CCTNS",
      optionD: "UMANG",
      correctOption: "A",
      explanation: "The Comprehensive Integrated Border Management System (CIBMS) uses technology to monitor borders.",
      orderIndex: 7
    },
    {
      id: "upsc-internal-security-disaster-management-q01",
      topicId: "upsc-internal-security-disaster-management",
      text: "The Disaster Management Act in India was enacted in which year?",
      optionA: "2000",
      optionB: "2009",
      optionC: "2005",
      optionD: "2013",
      correctOption: "C",
      explanation: "The Disaster Management Act was enacted in 2005, creating a three-tier institutional structure.",
      orderIndex: 0
    },
    {
      id: "upsc-internal-security-disaster-management-q02",
      topicId: "upsc-internal-security-disaster-management",
      text: "The National Disaster Management Authority (NDMA) is chaired by the:",
      optionA: "Home Minister",
      optionB: "Cabinet Secretary",
      optionC: "President",
      optionD: "Prime Minister",
      correctOption: "D",
      explanation: "The NDMA is chaired by the Prime Minister of India.",
      orderIndex: 1
    },
    {
      id: "upsc-internal-security-disaster-management-q03",
      topicId: "upsc-internal-security-disaster-management",
      text: "Consider the following statements:\n1. The State Disaster Management Authority is headed by the Chief Minister.\n2. The District Disaster Management Authority is headed by the District Collector.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "The SDMA is headed by the Chief Minister and the DDMA by the District Collector or Magistrate.",
      orderIndex: 2
    },
    {
      id: "upsc-internal-security-disaster-management-q04",
      topicId: "upsc-internal-security-disaster-management",
      text: "The global framework guiding disaster risk reduction for 2015-2030 is the:",
      optionA: "Hyogo Framework",
      optionB: "Paris Agreement",
      optionC: "Kyoto Protocol",
      optionD: "Sendai Framework",
      correctOption: "D",
      explanation: "The Sendai Framework (2015-2030) guides global disaster risk reduction with four priorities.",
      orderIndex: 3
    },
    {
      id: "upsc-internal-security-disaster-management-q05",
      topicId: "upsc-internal-security-disaster-management",
      text: "The specialised force for disaster response in India is the:",
      optionA: "BSF",
      optionB: "CRPF",
      optionC: "NDRF",
      optionD: "Territorial Army",
      correctOption: "C",
      explanation: "The National Disaster Response Force (NDRF) is the specialised force for disaster response.",
      orderIndex: 4
    },
    {
      id: "upsc-internal-security-disaster-management-q06",
      topicId: "upsc-internal-security-disaster-management",
      text: "The Coalition for Disaster Resilient Infrastructure (CDRI) was launched by India in:",
      optionA: "2015",
      optionB: "2019",
      optionC: "2017",
      optionD: "2021",
      correctOption: "B",
      explanation: "India launched the Coalition for Disaster Resilient Infrastructure (CDRI) in 2019.",
      orderIndex: 5
    },
    {
      id: "upsc-internal-security-disaster-management-q07",
      topicId: "upsc-internal-security-disaster-management",
      text: "The 1984 Bhopal Gas Tragedy is an example of which type of disaster?",
      optionA: "Natural disaster",
      optionB: "Biological disaster",
      optionC: "Man-made (industrial) disaster",
      optionD: "Astronomical disaster",
      correctOption: "C",
      explanation: "The Bhopal Gas Tragedy was a man-made industrial chemical disaster.",
      orderIndex: 6
    },
    {
      id: "upsc-internal-security-disaster-management-q08",
      topicId: "upsc-internal-security-disaster-management",
      text: "Activities such as prevention, mitigation and preparedness belong to which phase of disaster management?",
      optionA: "Response phase",
      optionB: "Pre-disaster phase",
      optionC: "Recovery phase",
      optionD: "Rehabilitation phase",
      correctOption: "B",
      explanation: "Prevention, mitigation and preparedness are activities of the pre-disaster phase.",
      orderIndex: 7
    },
    ...topUp1,
    ...historyQuestions
  ]
});
