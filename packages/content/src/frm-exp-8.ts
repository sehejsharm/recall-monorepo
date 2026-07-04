// FRM depth expansion (pass 8). Extends every FRM Part I and Part II subject
// with three additional curriculum learning-module topics so the practice set
// covers the full syllabus breadth. Each topic ships a study note and a
// 12-question drill.
import type { AuthoredMaterial } from "./builder";
import type { Question, Topic } from "@jyotir/core";

export const expansionTopics: Topic[] = [
  // ── Part I: Foundations of Risk Management (max orderIndex = 5) ──
  { id: "frm-foundations-garp-code", subjectId: "frm-foundations", name: "GARP Code of Conduct & Ethics", slug: "garp-code", orderIndex: 6 },
  { id: "frm-foundations-risk-data", subjectId: "frm-foundations", name: "Risk Data Aggregation & Reporting", slug: "risk-data", orderIndex: 7 },
  { id: "frm-foundations-capital-allocation", subjectId: "frm-foundations", name: "Capital Allocation & RAROC", slug: "capital-allocation", orderIndex: 8 },
  // ── Part I: Quantitative Analysis ──
  { id: "frm-quantitative-analysis-hypothesis-testing", subjectId: "frm-quantitative-analysis", name: "Hypothesis Testing & Confidence Intervals", slug: "hypothesis-testing", orderIndex: 6 },
  { id: "frm-quantitative-analysis-correlation-copulas", subjectId: "frm-quantitative-analysis", name: "Correlation, Covariance & Copulas", slug: "correlation-copulas", orderIndex: 7 },
  { id: "frm-quantitative-analysis-bayesian", subjectId: "frm-quantitative-analysis", name: "Bayesian Analysis & Estimation", slug: "bayesian", orderIndex: 8 },
  // ── Part I: Financial Markets & Products ──
  { id: "frm-financial-markets-commodity-forwards", subjectId: "frm-financial-markets", name: "Commodity Forwards & Futures", slug: "commodity-forwards", orderIndex: 6 },
  { id: "frm-financial-markets-foreign-exchange", subjectId: "frm-financial-markets", name: "Foreign Exchange Markets & Risk", slug: "foreign-exchange", orderIndex: 7 },
  { id: "frm-financial-markets-mortgages-mbs", subjectId: "frm-financial-markets", name: "Mortgages & Mortgage-Backed Securities", slug: "mortgages-mbs", orderIndex: 8 },
  // ── Part I: Valuation & Risk Models ──
  { id: "frm-valuation-risk-models-fixed-income-risk", subjectId: "frm-valuation-risk-models", name: "Fixed-Income Risk: DV01 & Convexity", slug: "fixed-income-risk", orderIndex: 6 },
  { id: "frm-valuation-risk-models-country-risk", subjectId: "frm-valuation-risk-models", name: "Country & Sovereign Risk", slug: "country-risk", orderIndex: 7 },
  { id: "frm-valuation-risk-models-credit-ratings", subjectId: "frm-valuation-risk-models", name: "External & Internal Credit Ratings", slug: "credit-ratings", orderIndex: 8 },
  // ── Part II: Market Risk Measurement ──
  { id: "frm-market-risk-fixed-income-var", subjectId: "frm-market-risk", name: "Fixed-Income VaR & Rate Risk", slug: "fixed-income-var", orderIndex: 6 },
  { id: "frm-market-risk-correlation-basis", subjectId: "frm-market-risk", name: "Correlation & Basis Risk", slug: "correlation-basis", orderIndex: 7 },
  { id: "frm-market-risk-frtb", subjectId: "frm-market-risk", name: "FRTB: Fundamental Review of the Trading Book", slug: "frtb", orderIndex: 8 },
  // ── Part II: Credit Risk Measurement ──
  { id: "frm-credit-risk-credit-scoring", subjectId: "frm-credit-risk", name: "Credit Scoring & Rating Models", slug: "credit-scoring", orderIndex: 6 },
  { id: "frm-credit-risk-portfolio-models", subjectId: "frm-credit-risk", name: "Credit Portfolio Models", slug: "portfolio-models", orderIndex: 7 },
  { id: "frm-credit-risk-wrong-way-risk", subjectId: "frm-credit-risk", name: "Wrong-Way Risk & Netting", slug: "wrong-way-risk", orderIndex: 8 },
  // ── Part II: Operational & Integrated Risk ──
  { id: "frm-operational-risk-model-validation", subjectId: "frm-operational-risk", name: "Model Risk & Model Validation", slug: "model-validation", orderIndex: 6 },
  { id: "frm-operational-risk-third-party", subjectId: "frm-operational-risk", name: "Third-Party & Outsourcing Risk", slug: "third-party", orderIndex: 7 },
  { id: "frm-operational-risk-conduct-culture", subjectId: "frm-operational-risk", name: "Conduct & Culture Risk", slug: "conduct-culture", orderIndex: 8 },
  // ── Part II: Liquidity & Treasury Risk ──
  { id: "frm-liquidity-risk-regulation", subjectId: "frm-liquidity-risk", name: "Liquidity Regulation: LCR & NSFR", slug: "regulation", orderIndex: 6 },
  { id: "frm-liquidity-risk-intraday", subjectId: "frm-liquidity-risk", name: "Intraday Liquidity & Collateral", slug: "intraday", orderIndex: 7 },
  { id: "frm-liquidity-risk-contingency-funding", subjectId: "frm-liquidity-risk", name: "Contingency Funding Planning", slug: "contingency-funding", orderIndex: 8 },
  // ── Part II: Risk Management in Investment ──
  { id: "frm-investment-risk-portfolio-construction", subjectId: "frm-investment-risk", name: "Portfolio Construction & Optimization", slug: "portfolio-construction", orderIndex: 6 },
  { id: "frm-investment-risk-attribution", subjectId: "frm-investment-risk", name: "Risk Monitoring & Performance Attribution", slug: "attribution", orderIndex: 7 },
  { id: "frm-investment-risk-illiquid-assets", subjectId: "frm-investment-risk", name: "Illiquid Assets & Alternative Risk", slug: "illiquid-assets", orderIndex: 8 },
  // ── Part II: Current Issues in Risk ──
  { id: "frm-current-issues-fintech", subjectId: "frm-current-issues", name: "Fintech & Financial Innovation", slug: "fintech", orderIndex: 6 },
  { id: "frm-current-issues-operational-resilience", subjectId: "frm-current-issues", name: "Cyber & Operational Resilience", slug: "operational-resilience", orderIndex: 7 },
  { id: "frm-current-issues-cbdc", subjectId: "frm-current-issues", name: "CBDCs & Payment Innovation", slug: "cbdc", orderIndex: 8 }
];

export const expansionMaterials: AuthoredMaterial[] = [
  { id: "frm-foundations-garp-code-m01", topicId: "frm-foundations-garp-code", title: "GARP Code of Conduct & Ethics", content: `The **GARP Code of Conduct** sets the ethical standard for FRMs, similar in spirit to the CFA Code.

## Core principles
1. **Professional integrity and ethical conduct** — act honestly, avoid conduct that discredits the profession.
2. **Conflicts of interest** — disclose and manage; place the interests of clients and employers appropriately.
3. **Confidentiality** — protect client and employer information.
4. **Fundamental responsibilities** — comply with laws/regulations and maintain competence.
5. **General accepted practices** — follow prevailing risk-management standards.

## Enforcement
- Violations can lead to loss of the FRM designation and removal from membership.
- The Code applies to **candidates and certified members** alike.

Ethics questions test applying these principles to realistic risk-management dilemmas — disclosure, independence, and professional competence.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-foundations-risk-data-m01", topicId: "frm-foundations-risk-data", title: "Risk Data Aggregation & Reporting", content: `After 2008, the Basel Committee issued **BCBS 239** — principles for effective **risk data aggregation and risk reporting (RDARR)**.

## Key principles
- **Governance and infrastructure**: strong data architecture and IT.
- **Accuracy and integrity**: aggregate data reliably, largely automated, with reconciliation.
- **Completeness**: capture all material risks across the group.
- **Timeliness**: produce aggregated risk data rapidly, especially in stress.
- **Adaptability**: meet ad-hoc requests and new scenarios.

## Reporting principles
Reports should be **accurate, comprehensive, clear, useful and timely**, distributed to the right recipients.

Poor data aggregation was a key failing in the crisis — banks could not quickly measure aggregate exposures (e.g., to a single counterparty).`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-foundations-capital-allocation-m01", topicId: "frm-foundations-capital-allocation", title: "Capital Allocation & RAROC", content: `**RAROC (risk-adjusted return on capital)** measures profitability relative to the **economic capital** at risk.

## The formula
RAROC = (Expected return − Expected loss − Costs + Return on capital) / **Economic capital**.
- **Economic capital** is the capital needed to absorb unexpected losses at a chosen confidence level.
- A project/business adds value when **RAROC > hurdle rate** (often the cost of equity).

## Uses
- **Capital allocation** across business lines by risk-adjusted performance.
- **Pricing** — ensuring each transaction earns enough to cover its risk.
- **Performance measurement** and incentive design.

## Adjusted RAROC (ARAROC)
Adjusts for the business's beta so comparisons account for systematic risk, comparing ARAROC against the risk-free rate.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-quantitative-analysis-hypothesis-testing-m01", topicId: "frm-quantitative-analysis-hypothesis-testing", title: "Hypothesis Testing & Confidence Intervals", content: `**Hypothesis testing** evaluates a claim about a population parameter.

## Framework
- **Null (H₀)** vs **alternative (H₁)** hypotheses.
- **Test statistic** (z or t) compared to a critical value; or use the **p-value**.
- Reject H₀ if the p-value < significance level **α** (e.g., 5%).

## Errors
- **Type I error** (α): rejecting a true H₀ (false positive).
- **Type II error** (β): failing to reject a false H₀; **power** = 1 − β.

## Confidence intervals
- A 95% CI is the estimate ± (critical value × standard error).
- Use the **z** distribution when the population variance is known/large samples; the **t** distribution for small samples with unknown variance.
- **One-tailed vs two-tailed** tests change the critical value.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-quantitative-analysis-correlation-copulas-m01", topicId: "frm-quantitative-analysis-correlation-copulas", title: "Correlation, Covariance & Copulas", content: `**Covariance** measures how two variables move together; **correlation** ρ standardises it to [−1, 1].

## Key facts
- Portfolio variance uses covariances: σ²_p = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂.
- Correlation captures only **linear** dependence and can miss tail dependence.

## Copulas
- A **copula** joins marginal distributions into a joint distribution, modelling the **dependence structure** separately from the marginals.
- **Gaussian copulas** underprice **tail dependence** — a key lesson from the 2008 CDO crisis.
- **t-copulas** and **Gumbel/Clayton** copulas capture **tail dependence** better.

Copulas are essential in credit portfolio and structured-product modelling where joint defaults matter.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-quantitative-analysis-bayesian-m01", topicId: "frm-quantitative-analysis-bayesian", title: "Bayesian Analysis & Estimation", content: `**Bayesian analysis** updates beliefs with new evidence using **Bayes' theorem**:
P(A│B) = P(B│A)·P(A) / P(B).

## Terminology
- **Prior**: initial belief before data.
- **Likelihood**: probability of the data given the hypothesis.
- **Posterior**: updated belief after data (∝ prior × likelihood).

## In risk management
- Update **probability of default** as new information arrives.
- Combine expert judgement (prior) with sparse loss data — useful for **operational risk** where data are scarce.
- Contrast with the **frequentist** view, which treats parameters as fixed and uses long-run frequencies.

A classic application is revising the probability a borrower is 'good' after observing a payment, or diagnosing base-rate problems.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-financial-markets-commodity-forwards-m01", topicId: "frm-financial-markets-commodity-forwards", title: "Commodity Forwards & Futures", content: `Commodity forward pricing follows **cost-of-carry** but with commodity-specific twists.

## Pricing
F₀ = S₀·e^((r + u − y)T), where **u** = storage cost, **y** = convenience yield.
- **Convenience yield**: benefit of holding the physical commodity (avoiding stock-outs).

## Curve shapes
- **Contango**: futures above spot (carry costs dominate).
- **Backwardation**: futures below spot (high convenience yield / tight supply).

## Return components
- Total return = **spot return + roll yield + collateral yield**.
- **Roll yield** is positive in backwardation, negative in contango.

Commodities include energy, metals and agriculturals; each has distinct storage, seasonality and convenience-yield behaviour.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-financial-markets-foreign-exchange-m01", topicId: "frm-financial-markets-foreign-exchange", title: "Foreign Exchange Markets & Risk", content: `The **FX market** is the largest, most liquid market, quoting currency pairs.

## Key relationships
- **Covered interest rate parity (CIRP)**: F/S = (1 + r_domestic)/(1 + r_foreign); enforced by arbitrage.
- **Uncovered interest rate parity (UIP)**: expected spot change equals the interest differential (often fails short-term).
- A currency trades at a **forward premium** when its interest rate is lower.

## FX risk types
- **Transaction risk** (contracted cash flows), **translation risk** (accounting), and **economic risk** (competitive position).

## Hedging
- **Forwards, futures, options and swaps** hedge FX exposure.
- **Multi-currency VaR** aggregates positions; correlations between currencies matter.

FX exposure is a major driver of risk for global banks and corporates.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-financial-markets-mortgages-mbs-m01", topicId: "frm-financial-markets-mortgages-mbs", title: "Mortgages & Mortgage-Backed Securities", content: `A **mortgage-backed security (MBS)** pools mortgages and passes their cash flows to investors.

## Key risks
- **Prepayment risk**: borrowers refinance when rates fall, shortening the security (**contraction risk**); when rates rise, prepayments slow (**extension risk**).
- Prepayment makes MBS exhibit **negative convexity** — price gains are capped as rates fall.

## Structures
- **Pass-throughs** share pooled cash flows pro rata.
- **CMOs** carve prepayment risk into tranches (e.g., PAC, support).
- Measured with the **PSA prepayment model** and **option-adjusted spread (OAS)**.

## Agency vs non-agency
- **Agency MBS** carry a government/GSE guarantee (little credit risk); **non-agency** carry credit risk requiring subordination.

Prepayment modelling is central to valuing and hedging MBS.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-valuation-risk-models-fixed-income-risk-m01", topicId: "frm-valuation-risk-models-fixed-income-risk", title: "Fixed-Income Risk: DV01 & Convexity", content: `Bond price sensitivity to rates is captured by **duration** and **convexity**.

## Measures
- **DV01** (dollar value of a basis point): price change for a 1 bp yield move.
- **Modified duration**: % price change per 1% yield change; ΔP/P ≈ −D·Δy.
- **Convexity** corrects the linear duration estimate: ΔP/P ≈ −D·Δy + ½·C·(Δy)².

## Hedging
- **Duration hedging**: match DV01 of the hedge to the position.
- **Key-rate (partial) durations** capture non-parallel curve shifts.

## Behaviour
- Positive convexity benefits the holder (price rises more than duration predicts when yields fall, falls less when they rise).
- Callable bonds and MBS can show **negative convexity**.

DV01 and duration are the workhorses of interest-rate risk management.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-valuation-risk-models-country-risk-m01", topicId: "frm-valuation-risk-models-country-risk", title: "Country & Sovereign Risk", content: `**Country risk** is the risk of investing in a particular nation; **sovereign risk** is the risk the government defaults.

## Drivers
- **Economic**: growth, inflation, fiscal and current-account deficits, debt/GDP.
- **Political/legal**: stability, rule of law, expropriation risk.
- **Ability vs willingness to pay**: a sovereign may be able but unwilling to repay (especially foreign-currency debt).

## Assessment tools
- **Sovereign credit ratings** and **CDS spreads** signal default risk.
- Local-currency vs foreign-currency debt differ — a government can print its own currency but not foreign currency.

## Contagion
Country risk can spread across similar economies (contagion), as seen in emerging-market and euro-area crises.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-valuation-risk-models-credit-ratings-m01", topicId: "frm-valuation-risk-models-credit-ratings", title: "External & Internal Credit Ratings", content: `**Credit ratings** assess the creditworthiness of a borrower or issue.

## External ratings
- Agencies (S&P, Moody's, Fitch) map issuers to grades: **investment grade** (BBB−/Baa3 and above) vs **speculative/high-yield** below.
- Ratings are **through-the-cycle** and can lag; **rating transitions** are summarised in **transition matrices**.

## Issues & criticisms
- **Issuer-pays conflict of interest**, procyclicality, and slow reaction (as in 2008).
- **Rating cliffs** can force selling when a bond is downgraded below investment grade.

## Internal ratings
- Banks build **internal rating-based (IRB)** models estimating **PD, LGD and EAD** for Basel capital.
- Internal ratings can be **point-in-time** (reflecting current conditions) or through-the-cycle.

A **transition matrix** gives the probability of moving between rating grades over a horizon.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-market-risk-fixed-income-var-m01", topicId: "frm-market-risk-fixed-income-var", title: "Fixed-Income VaR & Rate Risk", content: `Estimating **VaR for bond portfolios** requires mapping to interest-rate risk factors.

## Approaches
- **Duration-based VaR**: VaR ≈ portfolio value × modified duration × Δy(at chosen confidence).
- **Cash-flow mapping**: decompose bonds into **zero-coupon** exposures at standard maturities (vertices), then apply the covariance matrix.
- **Full revaluation** reprices under yield-curve scenarios.

## Curve risk
- Parallel shifts are captured by duration; **key-rate durations** and **principal component analysis (PCA)** capture non-parallel (steepening/flattening) moves.
- The first three PCA factors — **level, slope, curvature** — explain most yield-curve variation.

## Considerations
- Convexity adjustments improve large-move estimates.
- Credit spread risk is a separate factor from the risk-free curve.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-market-risk-correlation-basis-m01", topicId: "frm-market-risk-correlation-basis", title: "Correlation & Basis Risk", content: `**Basis risk** is the risk that a hedge and the hedged item do not move together.

## Sources of basis risk
- **Cross-hedging** with an imperfectly correlated instrument.
- Maturity or delivery mismatches between the hedge and exposure.
- The **basis** = spot price − futures price; it varies over time.

## Correlation risk
- Portfolios rely on assumed correlations; **correlations rise toward 1 in crises**, reducing diversification.
- **Correlation trading** (e.g., in tranches) takes explicit views on correlation.

## Managing it
- Choose hedges with high, stable correlation to the exposure.
- Stress-test the hedge under scenarios where correlations break down.

Underestimating basis and correlation risk has caused many hedging failures.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-market-risk-frtb-m01", topicId: "frm-market-risk-frtb", title: "FRTB: Fundamental Review of the Trading Book", content: `**FRTB** is the Basel overhaul of market-risk capital rules after the 2008 crisis.

## Key changes
- Replaces VaR with **Expected Shortfall (ES)** at 97.5% for the internal models approach — ES better captures tail risk and is **coherent** (subadditive).
- A stricter, more risk-sensitive **standardised approach (SA)** that all banks must compute.
- A clearer **boundary between the trading book and banking book** to curb regulatory arbitrage.

## Model approval
- **Internal Models Approach (IMA)** requires **P&L attribution** and **backtesting** tests at the desk level; failing desks revert to the SA.
- **Non-modellable risk factors (NMRFs)** attract add-on capital.

FRTB raises capital sensitivity and comparability across banks.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-credit-risk-credit-scoring-m01", topicId: "frm-credit-risk-credit-scoring", title: "Credit Scoring & Rating Models", content: `**Credit scoring** models estimate the probability a borrower defaults.

## Model types
- **Logistic regression** (scorecards): outputs a default probability; widely used for retail lending.
- **Discriminant analysis** (e.g., **Altman Z-score**) classifies firms as safe or distressed from financial ratios.
- **Machine-learning** models (trees, neural nets) improve accuracy but reduce interpretability.

## Key outputs (Basel)
- **PD** (probability of default), **LGD** (loss given default), **EAD** (exposure at default).
- **Expected loss** = PD × LGD × EAD.

## Validation
- Discriminatory power via the **ROC/AUC** and the **KS statistic**; calibration via observed vs predicted defaults.

Scorecards must be monitored for **population drift** and periodically recalibrated.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-credit-risk-portfolio-models-m01", topicId: "frm-credit-risk-portfolio-models", title: "Credit Portfolio Models", content: `Credit portfolio models estimate the **loss distribution** of a portfolio, capturing **default correlation**.

## Major frameworks
- **CreditMetrics** (J.P. Morgan): rating-transition based; uses a transition matrix and asset-return correlations to simulate portfolio value changes.
- **KMV / Moody's**: structural (Merton) approach using **distance to default**.
- **CreditRisk+** (Credit Suisse): actuarial, models default counts with a Poisson-type distribution.

## Key concepts
- **Default correlation** drives the tail of the loss distribution — higher correlation fattens the tail.
- **Unexpected loss** (economic capital) is the difference between a high quantile and the expected loss.
- **Concentration risk** (single-name or sector) raises tail losses.

Diversification reduces unexpected loss but cannot remove systematic credit risk.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-credit-risk-wrong-way-risk-m01", topicId: "frm-credit-risk-wrong-way-risk", title: "Wrong-Way Risk & Netting", content: `**Wrong-way risk** is when exposure to a counterparty **rises** as the counterparty's credit quality **worsens**.

## Types
- **General wrong-way risk**: exposure and default probability driven by common macro factors.
- **Specific wrong-way risk**: a direct link (e.g., buying protection on a firm from that same firm's affiliate).

## Mitigants
- **Netting agreements (ISDA)**: offset positive and negative mark-to-markets to a single net exposure.
- **Collateral / margin (CSA)**: reduce exposure; **initial** and **variation** margin.
- **CVA** (credit valuation adjustment) prices counterparty risk; wrong-way risk raises CVA.

## Right-way risk
The opposite — exposure falls as the counterparty deteriorates (favourable).

Netting and collateral dramatically reduce counterparty exposure but must be legally enforceable.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-operational-risk-model-validation-m01", topicId: "frm-operational-risk-model-validation", title: "Model Risk & Model Validation", content: `**Model risk** is the risk of loss from using an incorrect or misused model.

## Sources
- **Incorrect model** (wrong assumptions/specification), **implementation errors**, and **inappropriate use** (applying a model outside its valid domain).

## Validation (SR 11-7 framework)
Three core elements:
1. **Conceptual soundness** — is the theory and design appropriate?
2. **Ongoing monitoring** — benchmarking and process verification.
3. **Outcomes analysis** — **backtesting** predictions against actuals.

## Governance
- **Independent** validation function separate from model developers.
- A **model inventory** and tiering by materiality.
- Address **model limitations** with conservative adjustments or overlays.

Complex, AI-driven models heighten model risk, demanding stronger validation and governance.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-operational-risk-third-party-m01", topicId: "frm-operational-risk-third-party", title: "Third-Party & Outsourcing Risk", content: `Reliance on **vendors and outsourcing** creates operational risk that remains the firm's responsibility.

## Key risks
- **Concentration**: many firms depending on one provider (e.g., a cloud host) creates systemic fragility.
- **Fourth-party risk**: a vendor's own subcontractors.
- **Business continuity**: a vendor failure disrupts the firm.

## Management lifecycle
1. **Due diligence** before onboarding (financials, controls, security).
2. **Contract** with clear SLAs, audit rights and exit clauses.
3. **Ongoing monitoring** of performance and risk.
4. **Exit / substitutability** planning.

## Regulatory focus
Regulators increasingly treat critical third parties (especially cloud) as sources of **systemic operational risk**.

You can outsource the activity but not the accountability.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-operational-risk-conduct-culture-m01", topicId: "frm-operational-risk-conduct-culture", title: "Conduct & Culture Risk", content: `**Conduct risk** is the risk of harm to customers or markets from inappropriate behaviour; **culture** shapes whether conduct is sound.

## Conduct risk examples
- Mis-selling, market manipulation (e.g., LIBOR/FX rigging), and unfair treatment of customers.
- These caused enormous fines and reputational damage after 2008.

## Risk culture drivers
- **Tone from the top**, incentives, accountability, and effective challenge.
- A strong risk culture rewards **speaking up** and does not punish messengers.

## Measurement & tools
- Surveys, conduct metrics, complaints data, and **behavioural indicators**.
- **Three lines of defence**: business (1st), risk/compliance (2nd), internal audit (3rd).

Culture is hard to measure but is a root cause of many operational and conduct failures.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-liquidity-risk-regulation-m01", topicId: "frm-liquidity-risk-regulation", title: "Liquidity Regulation: LCR & NSFR", content: `Basel III introduced two quantitative **liquidity standards**.

## Liquidity Coverage Ratio (LCR)
- **LCR = High-Quality Liquid Assets (HQLA) / Net cash outflows over 30 days ≥ 100%.**
- Ensures survival of a **30-day** acute stress scenario.
- HQLA are tiered (Level 1: cash, government bonds; Level 2: high-grade corporates with haircuts).

## Net Stable Funding Ratio (NSFR)
- **NSFR = Available stable funding / Required stable funding ≥ 100%.**
- Promotes **longer-term (1-year)** structural funding stability, reducing reliance on short-term wholesale funding.

## Purpose
- LCR addresses **short-term** resilience; NSFR addresses **structural** funding.
- Both were responses to the funding runs of 2007–08.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-liquidity-risk-intraday-m01", topicId: "frm-liquidity-risk-intraday", title: "Intraday Liquidity & Collateral", content: `**Intraday liquidity** is the funding a bank needs **within the day** to settle payments as they fall due.

## Why it matters
- Banks must meet payment and settlement obligations in real time through systems (RTGS, CLS).
- A shortfall intraday can cause **settlement failures** and cascade to counterparties.

## Monitoring (BCBS tools)
- Daily maximum liquidity usage, available intraday liquidity, total payments, and time-specific obligations.

## Collateral management
- **Collateral** (HQLA) is pledged to central banks and CCPs; efficient **collateral optimisation** allocates the cheapest eligible collateral.
- **Margin calls** (initial and variation) create intraday funding needs, especially in volatile markets.

Managing intraday liquidity and collateral is now a core treasury function.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-liquidity-risk-contingency-funding-m01", topicId: "frm-liquidity-risk-contingency-funding", title: "Contingency Funding Planning", content: `A **Contingency Funding Plan (CFP)** is a documented playbook for a liquidity crisis.

## Components
- **Early-warning indicators (EWIs)**: rising funding costs, deposit outflows, widening CDS, rating pressure.
- **Stress scenarios**: idiosyncratic (firm-specific), market-wide, and combined.
- **Action plans**: which liquidity sources to tap and in what order (asset sales, secured borrowing, central-bank facilities).
- **Governance**: roles, escalation triggers, and communication.

## Liquidity sources & buffer
- A **liquidity buffer** of HQLA is the first line of defence.
- Diversify funding by **source, tenor and currency** to avoid concentration.

## Testing
The CFP must be **regularly tested** and integrated with recovery/resolution planning.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-investment-risk-portfolio-construction-m01", topicId: "frm-investment-risk-portfolio-construction", title: "Portfolio Construction & Optimization", content: `Portfolio construction turns forecasts into weights while controlling risk.

## Mean-variance optimization (MVO)
- Maximises expected return for a given risk, tracing the **efficient frontier**.
- Highly sensitive to **input estimation error**, especially expected returns ('error maximisation').

## Robust techniques
- **Resampling** and **Black–Litterman** blend a market equilibrium prior with investor views for more stable weights.
- **Constraints** (position limits, turnover) reduce extreme allocations.
- **Risk parity** allocates by risk contribution rather than capital.

## Risk control
- Set **tracking-error** budgets and factor exposures.
- Account for **transaction costs** and **liquidity** in the optimisation.

Good construction balances expected alpha against estimation risk and implementation costs.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-investment-risk-attribution-m01", topicId: "frm-investment-risk-attribution", title: "Risk Monitoring & Performance Attribution", content: `Ongoing **monitoring** and **attribution** explain where risk and return come from.

## Performance attribution
- **Brinson**: splits active return into **allocation**, **selection**, and **interaction**.
- **Factor-based attribution**: decomposes return into factor exposures × factor returns plus specific return.

## Risk monitoring
- Track **ex-ante (predicted)** vs **ex-post (realised)** risk and tracking error.
- Monitor factor exposures, concentrations, and limit breaches.
- **Style drift**: a manager deviating from the stated mandate.

## Metrics
- **Information ratio** (active return / active risk) gauges skill.
- Compare realised risk to the risk budget; investigate large gaps.

Attribution links results back to decisions, supporting accountability and process improvement.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-investment-risk-illiquid-assets-m01", topicId: "frm-investment-risk-illiquid-assets", title: "Illiquid Assets & Alternative Risk", content: `Illiquid alternatives (private equity, real estate, private credit) require special risk treatment.

## Measurement pitfalls
- **Appraisal-based valuations** smooth returns, understating volatility and correlation and overstating Sharpe ratios.
- **Stale pricing** and infrequent marks distort risk metrics.

## Risk considerations
- **Liquidity risk**: capital is locked up; account for **drawdowns and capital calls**.
- **J-curve**: early negative returns before value is realised.
- Correlations to public markets **rise in stress**, reducing diversification.

## Managing it
- Size illiquid allocations to the investor's **ability to bear illiquidity**.
- Use **downside measures** (max drawdown, CVaR) rather than Sharpe alone.
- Model **commitment pacing** and liquidity needs across the portfolio.

The **illiquidity premium** is compensation for bearing these risks, not a free lunch.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-current-issues-fintech-m01", topicId: "frm-current-issues-fintech", title: "Fintech & Financial Innovation", content: `**Fintech** applies technology to financial services, reshaping risk.

## Areas of innovation
- **Digital lending / marketplace lending**, **robo-advisers**, **payments**, **insurtech**, and **decentralised finance (DeFi)**.
- **Big data and AI** for credit scoring and fraud detection.

## Risk implications
- **New entrants** and **disintermediation** pressure incumbents.
- **Operational and cyber risk** rise with digital delivery.
- **Regulatory arbitrage** and gaps as innovation outpaces rules; **regtech** helps compliance.
- **Financial inclusion** benefits, but also new consumer-protection and data-privacy risks.

## Supervisory response
- **Regulatory sandboxes** let firms test innovations under supervision.
- Regulators watch for **systemic risk** from concentration in tech platforms.

Fintech creates both efficiency gains and novel risk-management challenges.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-current-issues-operational-resilience-m01", topicId: "frm-current-issues-operational-resilience", title: "Cyber & Operational Resilience", content: `**Operational resilience** is the ability to deliver critical operations through disruption.

## Cyber risk
- Threats: ransomware, data breaches, DDoS, and supply-chain attacks.
- Frameworks: **NIST** (Identify, Protect, Detect, Respond, Recover).
- Rising with digitalisation and third-party dependence.

## Operational resilience approach
- Identify **important business services**, set **impact tolerances** (max tolerable disruption), and map dependencies.
- **Scenario test** severe-but-plausible disruptions and ensure the firm stays within tolerance.

## Key concepts
- **Recovery time objective (RTO)** and **recovery point objective (RPO)**.
- Resilience assumes disruptions **will** happen — the goal is to withstand and recover, not just prevent.

Regulators now treat operational resilience as a supervisory priority alongside financial resilience.`, estimatedReadTime: 2, orderIndex: 0 },
  { id: "frm-current-issues-cbdc-m01", topicId: "frm-current-issues-cbdc", title: "CBDCs & Payment Innovation", content: `A **Central Bank Digital Currency (CBDC)** is a digital form of a nation's fiat money, issued by the central bank.

## Types
- **Retail CBDC**: for the general public (like digital cash).
- **Wholesale CBDC**: for interbank settlement.

## Potential benefits
- Faster, cheaper payments; financial inclusion; a risk-free digital settlement asset.

## Risks & design issues
- **Disintermediation of banks**: if households move deposits to CBDC, banks lose funding (a structural risk), so designs often include **holding limits**.
- **Bank-run acceleration**: digital flight to a risk-free CBDC in a crisis.
- **Privacy** vs **AML/CFT** trade-offs, and **cyber** and operational resilience of the infrastructure.

## Related innovation
- **Stablecoins** and **fast-payment systems** compete with or complement CBDCs.

CBDCs illustrate how payment innovation reshapes monetary and financial-stability risk.`, estimatedReadTime: 2, orderIndex: 0 }
];

export const expansionQuestions: Question[] = [
  // ── GARP Code of Conduct & Ethics ──
  { id: "frm-foundations-garp-code-q01", topicId: "frm-foundations-garp-code", text: "The GARP Code of Conduct applies to:", optionA: "Both candidates and certified members", optionB: "Only certified FRMs", optionC: "Only candidates", optionD: "Only employers", correctOption: "A", explanation: "The Code binds FRM candidates and certified members alike.", orderIndex: 0 },
  { id: "frm-foundations-garp-code-q02", topicId: "frm-foundations-garp-code", text: "Under the Code, conflicts of interest must be:", optionA: "Disclosed and managed", optionB: "Ignored", optionC: "Kept confidential from all", optionD: "Always avoided by resigning", correctOption: "A", explanation: "Members must disclose and appropriately manage conflicts of interest.", orderIndex: 1 },
  { id: "frm-foundations-garp-code-q03", topicId: "frm-foundations-garp-code", text: "A member who leaks a client's confidential exposure data violates the principle of:", optionA: "Confidentiality", optionB: "Timeliness", optionC: "Adaptability", optionD: "Diversification", correctOption: "A", explanation: "Protecting client and employer information is a core confidentiality duty.", orderIndex: 2 },
  { id: "frm-foundations-garp-code-q04", topicId: "frm-foundations-garp-code", text: "Maintaining professional competence is part of a member's:", optionA: "Fundamental responsibilities", optionB: "Marketing duties", optionC: "Trading limits", optionD: "Tax obligations", correctOption: "A", explanation: "Complying with laws and maintaining competence are fundamental responsibilities.", orderIndex: 3 },
  { id: "frm-foundations-garp-code-q05", topicId: "frm-foundations-garp-code", text: "A serious violation of the GARP Code can result in:", optionA: "Loss of the FRM designation", optionB: "A cash bonus", optionC: "Automatic promotion", optionD: "No consequence", correctOption: "A", explanation: "Violations can lead to loss of the designation and removal from membership.", orderIndex: 4 },
  { id: "frm-foundations-garp-code-q06", topicId: "frm-foundations-garp-code", text: "Acting honestly and avoiding conduct that discredits the profession reflects:", optionA: "Professional integrity", optionB: "Model validation", optionC: "Backtesting", optionD: "Netting", correctOption: "A", explanation: "Professional integrity and ethical conduct is the first core principle.", orderIndex: 5 },
  { id: "frm-foundations-garp-code-q07", topicId: "frm-foundations-garp-code", text: "Following prevailing risk-management standards reflects the principle of:", optionA: "Generally accepted practices", optionB: "Confidentiality", optionC: "Timeliness", optionD: "Anonymity", correctOption: "A", explanation: "Members should adhere to generally accepted risk-management practices.", orderIndex: 6 },
  { id: "frm-foundations-garp-code-q08", topicId: "frm-foundations-garp-code", text: "An FRM overstating a model's accuracy to win approval breaches:", optionA: "Professional integrity", optionB: "Timeliness", optionC: "Adaptability", optionD: "Liquidity", correctOption: "A", explanation: "Misrepresenting a model violates the duty of integrity and honesty.", orderIndex: 7 },
  { id: "frm-foundations-garp-code-q09", topicId: "frm-foundations-garp-code", text: "The GARP Code is most similar in spirit to the:", optionA: "CFA Code of Ethics", optionB: "Basel III accord", optionC: "IFRS standards", optionD: "Tax code", correctOption: "A", explanation: "Both codes set professional ethical standards for practitioners.", orderIndex: 8 },
  { id: "frm-foundations-garp-code-q10", topicId: "frm-foundations-garp-code", text: "When a personal investment could bias a risk assessment, the member should:", optionA: "Disclose the conflict", optionB: "Hide it", optionC: "Trade more", optionD: "Ignore the assignment", correctOption: "A", explanation: "Potential conflicts must be disclosed and managed under the Code.", orderIndex: 9 },
  { id: "frm-foundations-garp-code-q11", topicId: "frm-foundations-garp-code", text: "Complying with applicable laws and regulations is:", optionA: "A fundamental responsibility", optionB: "Optional", optionC: "Only for auditors", optionD: "A marketing choice", correctOption: "A", explanation: "Legal and regulatory compliance is a fundamental responsibility.", orderIndex: 10 },
  { id: "frm-foundations-garp-code-q12", topicId: "frm-foundations-garp-code", text: "Ethics questions in the FRM exam typically test:", optionA: "Applying principles to realistic dilemmas", optionB: "Memorising dates", optionC: "Pricing bonds", optionD: "Coding models", correctOption: "A", explanation: "The exam applies the Code's principles to practical situations.", orderIndex: 11 },

  // ── Risk Data Aggregation & Reporting ──
  { id: "frm-foundations-risk-data-q01", topicId: "frm-foundations-risk-data", text: "The Basel standard for risk data aggregation is known as:", optionA: "BCBS 239", optionB: "IFRS 9", optionC: "Basel I", optionD: "SOX 404", correctOption: "A", explanation: "BCBS 239 sets principles for risk data aggregation and reporting (RDARR).", orderIndex: 0 },
  { id: "frm-foundations-risk-data-q02", topicId: "frm-foundations-risk-data", text: "A key motivation for BCBS 239 was banks' inability during 2008 to:", optionA: "Quickly measure aggregate exposures", optionB: "Pay dividends", optionC: "Hire staff", optionD: "Issue equity", correctOption: "A", explanation: "Poor data aggregation meant banks could not rapidly gauge total exposures.", orderIndex: 1 },
  { id: "frm-foundations-risk-data-q03", topicId: "frm-foundations-risk-data", text: "The principle that risk data must be reliable and largely automated is:", optionA: "Accuracy and integrity", optionB: "Timeliness", optionC: "Adaptability", optionD: "Confidentiality", correctOption: "A", explanation: "Accuracy and integrity require reliable, largely automated aggregation.", orderIndex: 2 },
  { id: "frm-foundations-risk-data-q04", topicId: "frm-foundations-risk-data", text: "Capturing all material risks across the group reflects the principle of:", optionA: "Completeness", optionB: "Timeliness", optionC: "Clarity", optionD: "Governance", correctOption: "A", explanation: "Completeness means aggregating all material risk exposures firm-wide.", orderIndex: 3 },
  { id: "frm-foundations-risk-data-q05", topicId: "frm-foundations-risk-data", text: "Producing aggregated risk data rapidly, especially in stress, reflects:", optionA: "Timeliness", optionB: "Adaptability", optionC: "Accuracy", optionD: "Confidentiality", correctOption: "A", explanation: "Timeliness requires fast production of risk data, particularly under stress.", orderIndex: 4 },
  { id: "frm-foundations-risk-data-q06", topicId: "frm-foundations-risk-data", text: "Meeting ad-hoc requests and new scenarios reflects the principle of:", optionA: "Adaptability", optionB: "Completeness", optionC: "Integrity", optionD: "Timeliness", correctOption: "A", explanation: "Adaptability is the ability to handle ad-hoc and new risk-data requests.", orderIndex: 5 },
  { id: "frm-foundations-risk-data-q07", topicId: "frm-foundations-risk-data", text: "Strong data architecture and IT infrastructure fall under:", optionA: "Governance and infrastructure", optionB: "Clarity", optionC: "Distribution", optionD: "Timeliness", correctOption: "A", explanation: "Governance and infrastructure underpin effective risk data aggregation.", orderIndex: 6 },
  { id: "frm-foundations-risk-data-q08", topicId: "frm-foundations-risk-data", text: "Risk reports should be accurate, comprehensive, clear, useful and:", optionA: "Timely", optionB: "Anonymous", optionC: "Confidential to no one", optionD: "Random", correctOption: "A", explanation: "Effective reporting must be timely alongside accuracy, clarity and usefulness.", orderIndex: 7 },
  { id: "frm-foundations-risk-data-q09", topicId: "frm-foundations-risk-data", text: "Reconciliation of aggregated data helps ensure:", optionA: "Accuracy and integrity", optionB: "Marketing appeal", optionC: "Lower taxes", optionD: "Higher leverage", correctOption: "A", explanation: "Reconciling data sources supports accuracy and integrity.", orderIndex: 8 },
  { id: "frm-foundations-risk-data-q10", topicId: "frm-foundations-risk-data", text: "RDARR stands for risk data aggregation and:", optionA: "Risk reporting", optionB: "Return realization", optionC: "Rate recalibration", optionD: "Reserve requirement", correctOption: "A", explanation: "RDARR = Risk Data Aggregation and Risk Reporting.", orderIndex: 9 },
  { id: "frm-foundations-risk-data-q11", topicId: "frm-foundations-risk-data", text: "Being able to aggregate exposure to a single counterparty quickly supports:", optionA: "Completeness and timeliness", optionB: "Marketing", optionC: "Dividend policy", optionD: "Tax planning", correctOption: "A", explanation: "Rapid, complete aggregation of counterparty exposure is a core RDARR goal.", orderIndex: 10 },
  { id: "frm-foundations-risk-data-q12", topicId: "frm-foundations-risk-data", text: "BCBS 239 was issued by the:", optionA: "Basel Committee on Banking Supervision", optionB: "SEC", optionC: "IASB", optionD: "GARP", correctOption: "A", explanation: "The Basel Committee published BCBS 239 on risk data aggregation.", orderIndex: 11 },

  // ── Capital Allocation & RAROC ──
  { id: "frm-foundations-capital-allocation-q01", topicId: "frm-foundations-capital-allocation", text: "RAROC measures return relative to:", optionA: "Economic capital", optionB: "Total assets", optionC: "Revenue", optionD: "Headcount", correctOption: "A", explanation: "RAROC divides risk-adjusted return by the economic capital at risk.", orderIndex: 0 },
  { id: "frm-foundations-capital-allocation-q02", topicId: "frm-foundations-capital-allocation", text: "Economic capital is the capital needed to absorb:", optionA: "Unexpected losses at a confidence level", optionB: "Expected losses only", optionC: "All revenue", optionD: "Dividends", correctOption: "A", explanation: "Economic capital covers unexpected losses to a chosen confidence level.", orderIndex: 1 },
  { id: "frm-foundations-capital-allocation-q03", topicId: "frm-foundations-capital-allocation", text: "A project adds value when its RAROC is:", optionA: "Above the hurdle rate", optionB: "Below the hurdle rate", optionC: "Equal to zero", optionD: "Negative", correctOption: "A", explanation: "RAROC above the hurdle (often the cost of equity) signals value creation.", orderIndex: 2 },
  { id: "frm-foundations-capital-allocation-q04", topicId: "frm-foundations-capital-allocation", text: "Expected loss is typically ____ in the RAROC numerator.", optionA: "Subtracted", optionB: "Added", optionC: "Ignored", optionD: "Squared", correctOption: "A", explanation: "Expected loss is deducted from returns in the RAROC numerator.", orderIndex: 3 },
  { id: "frm-foundations-capital-allocation-q05", topicId: "frm-foundations-capital-allocation", text: "RAROC is commonly used to allocate capital across:", optionA: "Business lines", optionB: "Countries only", optionC: "Auditors", optionD: "Regulators", correctOption: "A", explanation: "RAROC ranks business lines by risk-adjusted performance for capital allocation.", orderIndex: 4 },
  { id: "frm-foundations-capital-allocation-q06", topicId: "frm-foundations-capital-allocation", text: "Adjusted RAROC (ARAROC) accounts for a business's:", optionA: "Systematic risk (beta)", optionB: "Headcount", optionC: "Tax rate only", optionD: "Marketing budget", correctOption: "A", explanation: "ARAROC adjusts for beta so comparisons reflect systematic risk.", orderIndex: 5 },
  { id: "frm-foundations-capital-allocation-q07", topicId: "frm-foundations-capital-allocation", text: "The hurdle rate in RAROC is often the firm's:", optionA: "Cost of equity", optionB: "Coupon rate", optionC: "Dividend yield", optionD: "Tax rate", correctOption: "A", explanation: "The hurdle is typically the cost of equity capital.", orderIndex: 6 },
  { id: "frm-foundations-capital-allocation-q08", topicId: "frm-foundations-capital-allocation", text: "RAROC supports transaction pricing by ensuring each deal:", optionA: "Earns enough to cover its risk", optionB: "Ignores risk", optionC: "Maximizes volume only", optionD: "Avoids capital", correctOption: "A", explanation: "RAROC-based pricing ensures returns compensate for the risk taken.", orderIndex: 7 },
  { id: "frm-foundations-capital-allocation-q09", topicId: "frm-foundations-capital-allocation", text: "A higher economic capital requirement, all else equal, ____ RAROC.", optionA: "Lowers", optionB: "Raises", optionC: "Does not affect", optionD: "Doubles", correctOption: "A", explanation: "More capital in the denominator reduces RAROC.", orderIndex: 8 },
  { id: "frm-foundations-capital-allocation-q10", topicId: "frm-foundations-capital-allocation", text: "RAROC is a tool for:", optionA: "Risk-adjusted performance measurement", optionB: "Tax filing", optionC: "Marketing", optionD: "Custody", correctOption: "A", explanation: "RAROC measures performance adjusted for the risk/capital consumed.", orderIndex: 9 },
  { id: "frm-foundations-capital-allocation-q11", topicId: "frm-foundations-capital-allocation", text: "ARAROC is compared against the ____ to judge value creation.", optionA: "Risk-free rate", optionB: "Dividend yield", optionC: "Coupon", optionD: "Inflation only", correctOption: "A", explanation: "After the beta adjustment, ARAROC is benchmarked to the risk-free rate.", orderIndex: 10 },
  { id: "frm-foundations-capital-allocation-q12", topicId: "frm-foundations-capital-allocation", text: "Incentive compensation tied to RAROC encourages managers to:", optionA: "Consider risk, not just return", optionB: "Maximize volume only", optionC: "Ignore capital", optionD: "Increase leverage without limit", correctOption: "A", explanation: "RAROC-linked pay rewards risk-adjusted, capital-efficient performance.", orderIndex: 11 },

  // ── Hypothesis Testing & Confidence Intervals ──
  { id: "frm-quantitative-analysis-hypothesis-testing-q01", topicId: "frm-quantitative-analysis-hypothesis-testing", text: "A Type I error is:", optionA: "Rejecting a true null hypothesis", optionB: "Failing to reject a false null", optionC: "Accepting the alternative correctly", optionD: "A correct decision", correctOption: "A", explanation: "A Type I error (α) is rejecting H₀ when it is actually true.", orderIndex: 0 },
  { id: "frm-quantitative-analysis-hypothesis-testing-q02", topicId: "frm-quantitative-analysis-hypothesis-testing", text: "A Type II error is:", optionA: "Failing to reject a false null", optionB: "Rejecting a true null", optionC: "A correct rejection", optionD: "Setting alpha", correctOption: "A", explanation: "A Type II error (β) is not rejecting H₀ when it is false.", orderIndex: 1 },
  { id: "frm-quantitative-analysis-hypothesis-testing-q03", topicId: "frm-quantitative-analysis-hypothesis-testing", text: "The power of a test equals:", optionA: "1 − β", optionB: "α", optionC: "1 − α", optionD: "β", correctOption: "A", explanation: "Power is the probability of correctly rejecting a false null, 1 − β.", orderIndex: 2 },
  { id: "frm-quantitative-analysis-hypothesis-testing-q04", topicId: "frm-quantitative-analysis-hypothesis-testing", text: "The significance level α is the probability of a:", optionA: "Type I error", optionB: "Type II error", optionC: "Correct decision", optionD: "Wide interval", correctOption: "A", explanation: "α is the chosen probability of committing a Type I error.", orderIndex: 3 },
  { id: "frm-quantitative-analysis-hypothesis-testing-q05", topicId: "frm-quantitative-analysis-hypothesis-testing", text: "The null hypothesis is rejected when the p-value is:", optionA: "Less than α", optionB: "Greater than α", optionC: "Equal to 1", optionD: "Negative", correctOption: "A", explanation: "Reject H₀ when the p-value falls below the significance level α.", orderIndex: 4 },
  { id: "frm-quantitative-analysis-hypothesis-testing-q06", topicId: "frm-quantitative-analysis-hypothesis-testing", text: "For a small sample with unknown variance, the appropriate distribution is the:", optionA: "t-distribution", optionB: "z (normal)", optionC: "chi-square only", optionD: "uniform", correctOption: "A", explanation: "The t-distribution applies to small samples with unknown population variance.", orderIndex: 5 },
  { id: "frm-quantitative-analysis-hypothesis-testing-q07", topicId: "frm-quantitative-analysis-hypothesis-testing", text: "A 95% confidence interval equals the estimate plus or minus:", optionA: "Critical value times the standard error", optionB: "The mean", optionC: "The variance", optionD: "The p-value", correctOption: "A", explanation: "A CI is the estimate ± (critical value × standard error).", orderIndex: 6 },
  { id: "frm-quantitative-analysis-hypothesis-testing-q08", topicId: "frm-quantitative-analysis-hypothesis-testing", text: "A one-tailed test compared with a two-tailed test at the same α has a:", optionA: "Smaller critical value in the tail of interest", optionB: "Larger p-value always", optionC: "No critical region", optionD: "Zero power", correctOption: "A", explanation: "A one-tailed test concentrates α in one tail, giving a smaller critical value there.", orderIndex: 7 },
  { id: "frm-quantitative-analysis-hypothesis-testing-q09", topicId: "frm-quantitative-analysis-hypothesis-testing", text: "Increasing the sample size generally:", optionA: "Narrows the confidence interval", optionB: "Widens it", optionC: "Has no effect", optionD: "Raises α", correctOption: "A", explanation: "A larger sample reduces the standard error, narrowing the interval.", orderIndex: 8 },
  { id: "frm-quantitative-analysis-hypothesis-testing-q10", topicId: "frm-quantitative-analysis-hypothesis-testing", text: "Lowering α from 5% to 1%, all else equal, ____ the Type II error rate.", optionA: "Increases", optionB: "Decreases", optionC: "Eliminates", optionD: "Does not affect", correctOption: "A", explanation: "A stricter α makes rejection harder, raising the chance of a Type II error.", orderIndex: 9 },
  { id: "frm-quantitative-analysis-hypothesis-testing-q11", topicId: "frm-quantitative-analysis-hypothesis-testing", text: "The p-value is the probability of observing a result at least as extreme, assuming:", optionA: "The null hypothesis is true", optionB: "The alternative is true", optionC: "Alpha equals beta", optionD: "The sample is biased", correctOption: "A", explanation: "The p-value is computed under the assumption that H₀ holds.", orderIndex: 10 },
  { id: "frm-quantitative-analysis-hypothesis-testing-q12", topicId: "frm-quantitative-analysis-hypothesis-testing", text: "A wider confidence level (e.g., 99% vs 95%) produces a:", optionA: "Wider interval", optionB: "Narrower interval", optionC: "Point estimate", optionD: "Lower standard error", correctOption: "A", explanation: "Higher confidence requires a wider interval to be more certain.", orderIndex: 11 },

  // ── Correlation, Covariance & Copulas ──
  { id: "frm-quantitative-analysis-correlation-copulas-q01", topicId: "frm-quantitative-analysis-correlation-copulas", text: "The correlation coefficient ranges between:", optionA: "−1 and +1", optionB: "0 and 1", optionC: "−∞ and +∞", optionD: "0 and 100", correctOption: "A", explanation: "Correlation is standardised covariance bounded by −1 and +1.", orderIndex: 0 },
  { id: "frm-quantitative-analysis-correlation-copulas-q02", topicId: "frm-quantitative-analysis-correlation-copulas", text: "Correlation captures which type of dependence?", optionA: "Linear", optionB: "Non-linear", optionC: "Tail", optionD: "Causal", correctOption: "A", explanation: "The correlation coefficient measures only linear dependence.", orderIndex: 1 },
  { id: "frm-quantitative-analysis-correlation-copulas-q03", topicId: "frm-quantitative-analysis-correlation-copulas", text: "A copula joins marginal distributions into a:", optionA: "Joint distribution", optionB: "Single mean", optionC: "Variance", optionD: "Correlation matrix only", correctOption: "A", explanation: "A copula links marginals to form a joint distribution, modelling dependence.", orderIndex: 2 },
  { id: "frm-quantitative-analysis-correlation-copulas-q04", topicId: "frm-quantitative-analysis-correlation-copulas", text: "The Gaussian copula was criticised in 2008 for understating:", optionA: "Tail dependence", optionB: "Mean returns", optionC: "Volatility only", optionD: "Interest rates", correctOption: "A", explanation: "Gaussian copulas underprice joint tail events, a key CDO-crisis lesson.", orderIndex: 3 },
  { id: "frm-quantitative-analysis-correlation-copulas-q05", topicId: "frm-quantitative-analysis-correlation-copulas", text: "Which copula better captures tail dependence than the Gaussian?", optionA: "t-copula", optionB: "Independence copula", optionC: "Linear copula", optionD: "None", correctOption: "A", explanation: "The t-copula (and Gumbel/Clayton) model tail dependence better than the Gaussian.", orderIndex: 4 },
  { id: "frm-quantitative-analysis-correlation-copulas-q06", topicId: "frm-quantitative-analysis-correlation-copulas", text: "In portfolio variance, the cross term includes:", optionA: "2·w₁·w₂·ρ·σ₁·σ₂", optionB: "w₁·w₂ only", optionC: "σ₁ + σ₂", optionD: "ρ alone", correctOption: "A", explanation: "The covariance term is 2·w₁·w₂·ρ·σ₁·σ₂.", orderIndex: 5 },
  { id: "frm-quantitative-analysis-correlation-copulas-q07", topicId: "frm-quantitative-analysis-correlation-copulas", text: "A correlation of zero implies the variables are:", optionA: "Linearly uncorrelated (but possibly dependent)", optionB: "Always independent", optionC: "Perfectly related", optionD: "Identical", correctOption: "A", explanation: "Zero correlation means no linear relationship, but non-linear dependence can exist.", orderIndex: 6 },
  { id: "frm-quantitative-analysis-correlation-copulas-q08", topicId: "frm-quantitative-analysis-correlation-copulas", text: "Copulas are especially important in modelling:", optionA: "Joint defaults in credit portfolios", optionB: "Single-stock dividends", optionC: "Coupon dates", optionD: "Tax rates", correctOption: "A", explanation: "Copulas model the dependence of defaults in credit/structured products.", orderIndex: 7 },
  { id: "frm-quantitative-analysis-correlation-copulas-q09", topicId: "frm-quantitative-analysis-correlation-copulas", text: "Covariance differs from correlation in that covariance is:", optionA: "Not standardised (unit-dependent)", optionB: "Always between −1 and 1", optionC: "Dimensionless", optionD: "Always positive", correctOption: "A", explanation: "Covariance depends on the variables' units; correlation standardises it.", orderIndex: 8 },
  { id: "frm-quantitative-analysis-correlation-copulas-q10", topicId: "frm-quantitative-analysis-correlation-copulas", text: "Tail dependence measures the tendency of variables to be extreme:", optionA: "Together", optionB: "Separately", optionC: "Never", optionD: "Linearly only", correctOption: "A", explanation: "Tail dependence is the probability of joint extreme (tail) moves.", orderIndex: 9 },
  { id: "frm-quantitative-analysis-correlation-copulas-q11", topicId: "frm-quantitative-analysis-correlation-copulas", text: "Diversification benefit is greatest when correlation is:", optionA: "Low or negative", optionB: "Exactly +1", optionC: "Very high", optionD: "Undefined", correctOption: "A", explanation: "Lower correlation reduces portfolio variance more, improving diversification.", orderIndex: 10 },
  { id: "frm-quantitative-analysis-correlation-copulas-q12", topicId: "frm-quantitative-analysis-correlation-copulas", text: "A key advantage of copulas is separating dependence from the:", optionA: "Marginal distributions", optionB: "Sample size", optionC: "Significance level", optionD: "Mean only", correctOption: "A", explanation: "Copulas model the dependence structure independently of the marginals.", orderIndex: 11 },

  // ── Bayesian Analysis & Estimation ──
  { id: "frm-quantitative-analysis-bayesian-q01", topicId: "frm-quantitative-analysis-bayesian", text: "Bayes' theorem updates the ____ into a posterior using the likelihood.", optionA: "Prior", optionB: "Variance", optionC: "Median", optionD: "p-value", correctOption: "A", explanation: "Bayes combines the prior belief with the likelihood to yield the posterior.", orderIndex: 0 },
  { id: "frm-quantitative-analysis-bayesian-q02", topicId: "frm-quantitative-analysis-bayesian", text: "The posterior is proportional to prior times:", optionA: "Likelihood", optionB: "Variance", optionC: "Sample size", optionD: "The mean", correctOption: "A", explanation: "Posterior ∝ prior × likelihood.", orderIndex: 1 },
  { id: "frm-quantitative-analysis-bayesian-q03", topicId: "frm-quantitative-analysis-bayesian", text: "In Bayesian analysis, parameters are treated as:", optionA: "Random variables with distributions", optionB: "Fixed constants only", optionC: "Always zero", optionD: "Non-existent", correctOption: "A", explanation: "Bayesians treat parameters as random with prior/posterior distributions.", orderIndex: 2 },
  { id: "frm-quantitative-analysis-bayesian-q04", topicId: "frm-quantitative-analysis-bayesian", text: "The frequentist view, by contrast, treats parameters as:", optionA: "Fixed but unknown", optionB: "Random", optionC: "Always known", optionD: "Irrelevant", correctOption: "A", explanation: "Frequentists regard parameters as fixed, using long-run frequencies.", orderIndex: 3 },
  { id: "frm-quantitative-analysis-bayesian-q05", topicId: "frm-quantitative-analysis-bayesian", text: "Bayesian methods are useful in operational risk because loss data are:", optionA: "Scarce", optionB: "Abundant", optionC: "Irrelevant", optionD: "Perfectly known", correctOption: "A", explanation: "With sparse data, priors (expert judgement) help supplement observations.", orderIndex: 4 },
  { id: "frm-quantitative-analysis-bayesian-q06", topicId: "frm-quantitative-analysis-bayesian", text: "The likelihood is the probability of the:", optionA: "Data given the hypothesis", optionB: "Hypothesis given no data", optionC: "Prior given the posterior", optionD: "Mean given the variance", correctOption: "A", explanation: "Likelihood is P(data | hypothesis).", orderIndex: 5 },
  { id: "frm-quantitative-analysis-bayesian-q07", topicId: "frm-quantitative-analysis-bayesian", text: "As more data arrive, the posterior generally:", optionA: "Depends less on the prior", optionB: "Ignores the data", optionC: "Becomes the prior", optionD: "Grows more uncertain", correctOption: "A", explanation: "With abundant data the likelihood dominates and the prior's influence fades.", orderIndex: 6 },
  { id: "frm-quantitative-analysis-bayesian-q08", topicId: "frm-quantitative-analysis-bayesian", text: "Bayes' theorem can revise a borrower's:", optionA: "Probability of default after new information", optionB: "Coupon rate", optionC: "Maturity", optionD: "Face value", correctOption: "A", explanation: "New payment behaviour updates the estimated probability of default.", orderIndex: 7 },
  { id: "frm-quantitative-analysis-bayesian-q09", topicId: "frm-quantitative-analysis-bayesian", text: "A prior that reflects strong existing beliefs is called:", optionA: "Informative", optionB: "Uninformative", optionC: "Posterior", optionD: "Frequentist", correctOption: "A", explanation: "An informative prior encodes substantial prior knowledge.", orderIndex: 8 },
  { id: "frm-quantitative-analysis-bayesian-q10", topicId: "frm-quantitative-analysis-bayesian", text: "Ignoring base rates when judging probabilities is the:", optionA: "Base-rate fallacy", optionB: "Central limit theorem", optionC: "Law of large numbers", optionD: "Efficient market", correctOption: "A", explanation: "The base-rate fallacy neglects prior probabilities, which Bayes corrects.", orderIndex: 9 },
  { id: "frm-quantitative-analysis-bayesian-q11", topicId: "frm-quantitative-analysis-bayesian", text: "In Bayes' theorem P(A│B) = P(B│A)·P(A) / ____.", optionA: "P(B)", optionB: "P(A)", optionC: "P(B│A)", optionD: "1", correctOption: "A", explanation: "The denominator is the total probability of the evidence, P(B).", orderIndex: 10 },
  { id: "frm-quantitative-analysis-bayesian-q12", topicId: "frm-quantitative-analysis-bayesian", text: "Combining expert judgement with data is a strength of the ____ approach.", optionA: "Bayesian", optionB: "Purely frequentist", optionC: "Non-statistical", optionD: "Deterministic", correctOption: "A", explanation: "Bayesian methods formally blend prior judgement with observed data.", orderIndex: 11 },

  // ── Commodity Forwards & Futures ──
  { id: "frm-financial-markets-commodity-forwards-q01", topicId: "frm-financial-markets-commodity-forwards", text: "The convenience yield reflects the benefit of holding the:", optionA: "Physical commodity", optionB: "Futures contract", optionC: "Cash bond", optionD: "Option", correctOption: "A", explanation: "Convenience yield is the benefit of holding the physical asset (e.g., avoiding stock-outs).", orderIndex: 0 },
  { id: "frm-financial-markets-commodity-forwards-q02", topicId: "frm-financial-markets-commodity-forwards", text: "A market where futures prices exceed the spot price is in:", optionA: "Contango", optionB: "Backwardation", optionC: "Equilibrium only", optionD: "Default", correctOption: "A", explanation: "Contango is when futures trade above spot (carry costs dominate).", orderIndex: 1 },
  { id: "frm-financial-markets-commodity-forwards-q03", topicId: "frm-financial-markets-commodity-forwards", text: "Backwardation occurs when futures prices are:", optionA: "Below the spot price", optionB: "Above the spot price", optionC: "Equal to spot", optionD: "Negative", correctOption: "A", explanation: "Backwardation is futures below spot, often from high convenience yield.", orderIndex: 2 },
  { id: "frm-financial-markets-commodity-forwards-q04", topicId: "frm-financial-markets-commodity-forwards", text: "Storage costs in commodity forward pricing:", optionA: "Raise the forward price", optionB: "Lower the forward price", optionC: "Have no effect", optionD: "Eliminate the contract", correctOption: "A", explanation: "Storage cost is a carry cost that increases the forward price.", orderIndex: 3 },
  { id: "frm-financial-markets-commodity-forwards-q05", topicId: "frm-financial-markets-commodity-forwards", text: "Roll yield is positive when the futures curve is in:", optionA: "Backwardation", optionB: "Contango", optionC: "Equilibrium", optionD: "Default", correctOption: "A", explanation: "Rolling up a backwardated curve generates a positive roll yield.", orderIndex: 4 },
  { id: "frm-financial-markets-commodity-forwards-q06", topicId: "frm-financial-markets-commodity-forwards", text: "Total commodity futures return combines spot return, collateral yield, and:", optionA: "Roll yield", optionB: "Dividend yield", optionC: "Coupon", optionD: "Convexity", correctOption: "A", explanation: "Total return = spot return + roll yield + collateral yield.", orderIndex: 5 },
  { id: "frm-financial-markets-commodity-forwards-q07", topicId: "frm-financial-markets-commodity-forwards", text: "A high convenience yield tends to push the forward price:", optionA: "Down", optionB: "Up", optionC: "To infinity", optionD: "To zero always", correctOption: "A", explanation: "Convenience yield acts like a benefit, lowering the forward price.", orderIndex: 6 },
  { id: "frm-financial-markets-commodity-forwards-q08", topicId: "frm-financial-markets-commodity-forwards", text: "Rolling futures in a contango market generally produces a:", optionA: "Negative roll yield", optionB: "Positive roll yield", optionC: "Zero roll yield always", optionD: "Guaranteed profit", correctOption: "A", explanation: "Buying higher-priced later contracts in contango creates a negative roll yield.", orderIndex: 7 },
  { id: "frm-financial-markets-commodity-forwards-q09", topicId: "frm-financial-markets-commodity-forwards", text: "Which commodity category is highly affected by seasonality?", optionA: "Agriculturals", optionB: "Government bonds", optionC: "Equity indexes", optionD: "Currencies", correctOption: "A", explanation: "Agricultural commodities have strong seasonal supply/demand patterns.", orderIndex: 8 },
  { id: "frm-financial-markets-commodity-forwards-q10", topicId: "frm-financial-markets-commodity-forwards", text: "The cost-of-carry model for commodities uses F₀ = S₀·e^((r + u − y)T), where y is the:", optionA: "Convenience yield", optionB: "Coupon", optionC: "Dividend", optionD: "Tax rate", correctOption: "A", explanation: "y is the convenience yield; u is the storage cost.", orderIndex: 9 },
  { id: "frm-financial-markets-commodity-forwards-q11", topicId: "frm-financial-markets-commodity-forwards", text: "Commodities are often held in portfolios for:", optionA: "Inflation protection and diversification", optionB: "Guaranteed income", optionC: "Coupon payments", optionD: "Voting rights", correctOption: "A", explanation: "Commodities hedge inflation and diversify against financial assets.", orderIndex: 10 },
  { id: "frm-financial-markets-commodity-forwards-q12", topicId: "frm-financial-markets-commodity-forwards", text: "Unlike stocks, commodities generally provide:", optionA: "No income (no dividends/coupons)", optionB: "Regular dividends", optionC: "Fixed coupons", optionD: "Voting rights", correctOption: "A", explanation: "Physical commodities earn no income; returns come from price and roll.", orderIndex: 11 },

  // ── Foreign Exchange Markets & Risk ──
  { id: "frm-financial-markets-foreign-exchange-q01", topicId: "frm-financial-markets-foreign-exchange", text: "Covered interest rate parity is enforced by:", optionA: "Arbitrage", optionB: "Central bank decree", optionC: "Tax law", optionD: "Rating agencies", correctOption: "A", explanation: "CIRP holds because any deviation offers a riskless arbitrage.", orderIndex: 0 },
  { id: "frm-financial-markets-foreign-exchange-q02", topicId: "frm-financial-markets-foreign-exchange", text: "A currency with a lower interest rate typically trades at a forward:", optionA: "Premium", optionB: "Discount", optionC: "Par with spot", optionD: "Default", correctOption: "A", explanation: "Under CIRP the lower-yielding currency trades at a forward premium.", orderIndex: 1 },
  { id: "frm-financial-markets-foreign-exchange-q03", topicId: "frm-financial-markets-foreign-exchange", text: "Transaction risk relates to:", optionA: "Contracted foreign-currency cash flows", optionB: "Accounting translation", optionC: "Competitive position", optionD: "Interest rates only", correctOption: "A", explanation: "Transaction risk affects known, contracted FX cash flows.", orderIndex: 2 },
  { id: "frm-financial-markets-foreign-exchange-q04", topicId: "frm-financial-markets-foreign-exchange", text: "Translation risk arises from:", optionA: "Consolidating foreign financial statements", optionB: "A single trade", optionC: "Convenience yield", optionD: "Coupon payments", correctOption: "A", explanation: "Translation (accounting) risk comes from converting foreign statements to the reporting currency.", orderIndex: 3 },
  { id: "frm-financial-markets-foreign-exchange-q05", topicId: "frm-financial-markets-foreign-exchange", text: "Economic (operating) exposure affects a firm's:", optionA: "Long-term competitive position", optionB: "Coupon dates", optionC: "Audit fees", optionD: "Tax filing date", correctOption: "A", explanation: "Economic exposure reflects how FX moves alter competitiveness and cash flows over time.", orderIndex: 4 },
  { id: "frm-financial-markets-foreign-exchange-q06", topicId: "frm-financial-markets-foreign-exchange", text: "The most common instrument to hedge a known FX payment is a:", optionA: "Forward contract", optionB: "Common share", optionC: "Convertible bond", optionD: "Warrant", correctOption: "A", explanation: "FX forwards lock in the rate for a known future payment.", orderIndex: 5 },
  { id: "frm-financial-markets-foreign-exchange-q07", topicId: "frm-financial-markets-foreign-exchange", text: "Uncovered interest rate parity often fails in the short run, enabling the:", optionA: "Carry trade", optionB: "Arbitrage-free bond", optionC: "Efficient frontier", optionD: "Immunization", correctOption: "A", explanation: "Because high-yield currencies don't depreciate as UIP predicts, carry trades can profit.", orderIndex: 6 },
  { id: "frm-financial-markets-foreign-exchange-q08", topicId: "frm-financial-markets-foreign-exchange", text: "The FX market is best described as the:", optionA: "Largest, most liquid financial market", optionB: "Smallest market", optionC: "An exchange-only market", optionD: "A closed market", correctOption: "A", explanation: "FX is the world's largest and most liquid market, mostly OTC.", orderIndex: 7 },
  { id: "frm-financial-markets-foreign-exchange-q09", topicId: "frm-financial-markets-foreign-exchange", text: "Options to hedge FX provide:", optionA: "Downside protection while keeping upside", optionB: "No protection", optionC: "Guaranteed appreciation", optionD: "Symmetric free cover", correctOption: "A", explanation: "FX options cap downside for a premium while retaining favourable moves.", orderIndex: 8 },
  { id: "frm-financial-markets-foreign-exchange-q10", topicId: "frm-financial-markets-foreign-exchange", text: "Multi-currency VaR must account for:", optionA: "Correlations between currencies", optionB: "Only one currency", optionC: "Coupon schedules", optionD: "Dividend yields", correctOption: "A", explanation: "Aggregating FX positions requires the correlation structure across currencies.", orderIndex: 9 },
  { id: "frm-financial-markets-foreign-exchange-q11", topicId: "frm-financial-markets-foreign-exchange", text: "A cross-currency swap can hedge:", optionA: "Long-dated currency and rate exposure", optionB: "Only intraday exposure", optionC: "Equity dividends", optionD: "Commodity storage", correctOption: "A", explanation: "Cross-currency swaps hedge longer-term currency and interest-rate exposure.", orderIndex: 10 },
  { id: "frm-financial-markets-foreign-exchange-q12", topicId: "frm-financial-markets-foreign-exchange", text: "FX exposure is a major risk driver for:", optionA: "Global banks and multinational corporates", optionB: "Only domestic retailers", optionC: "Tax authorities", optionD: "Rating agencies", correctOption: "A", explanation: "Firms with cross-border activity face significant FX risk.", orderIndex: 11 },

  // ── Mortgages & Mortgage-Backed Securities ──
  { id: "frm-financial-markets-mortgages-mbs-q01", topicId: "frm-financial-markets-mortgages-mbs", text: "An MBS passes to investors the cash flows of a pool of:", optionA: "Mortgages", optionB: "Equities", optionC: "Commodities", optionD: "Currencies", correctOption: "A", explanation: "Mortgage-backed securities are backed by pooled mortgage loans.", orderIndex: 0 },
  { id: "frm-financial-markets-mortgages-mbs-q02", topicId: "frm-financial-markets-mortgages-mbs", text: "Contraction risk in an MBS occurs when interest rates:", optionA: "Fall and prepayments speed up", optionB: "Rise and prepayments slow", optionC: "Stay constant", optionD: "Turn negative", correctOption: "A", explanation: "Falling rates spur refinancing, shortening the MBS (contraction).", orderIndex: 1 },
  { id: "frm-financial-markets-mortgages-mbs-q03", topicId: "frm-financial-markets-mortgages-mbs", text: "Extension risk occurs when interest rates:", optionA: "Rise and prepayments slow", optionB: "Fall and prepayments speed up", optionC: "Are zero", optionD: "Default", correctOption: "A", explanation: "Rising rates slow prepayment, lengthening the security (extension).", orderIndex: 2 },
  { id: "frm-financial-markets-mortgages-mbs-q04", topicId: "frm-financial-markets-mortgages-mbs", text: "Prepayment option causes MBS to exhibit:", optionA: "Negative convexity", optionB: "Positive convexity always", optionC: "No convexity", optionD: "Infinite duration", correctOption: "A", explanation: "The borrower's prepayment option caps upside, giving negative convexity.", orderIndex: 3 },
  { id: "frm-financial-markets-mortgages-mbs-q05", topicId: "frm-financial-markets-mortgages-mbs", text: "A pass-through security distributes pooled cash flows:", optionA: "Pro rata to investors", optionB: "Only to the issuer", optionC: "As a lump sum at maturity", optionD: "To equity holders", correctOption: "A", explanation: "Pass-throughs pay principal and interest pro rata to holders.", orderIndex: 4 },
  { id: "frm-financial-markets-mortgages-mbs-q06", topicId: "frm-financial-markets-mortgages-mbs", text: "CMOs are designed to redistribute:", optionA: "Prepayment risk across tranches", optionB: "Currency risk", optionC: "Equity risk", optionD: "Operational risk", correctOption: "A", explanation: "Collateralized mortgage obligations carve prepayment risk into tranches.", orderIndex: 5 },
  { id: "frm-financial-markets-mortgages-mbs-q07", topicId: "frm-financial-markets-mortgages-mbs", text: "Agency MBS carry little credit risk because of a:", optionA: "Government/GSE guarantee", optionB: "High coupon", optionC: "Short maturity", optionD: "Convenience yield", correctOption: "A", explanation: "Agency guarantees largely remove credit risk from agency MBS.", orderIndex: 6 },
  { id: "frm-financial-markets-mortgages-mbs-q08", topicId: "frm-financial-markets-mortgages-mbs", text: "Non-agency MBS require which credit-enhancement technique?", optionA: "Subordination", optionB: "Convenience yield", optionC: "A dividend", optionD: "A coupon step-up", correctOption: "A", explanation: "Non-agency deals use subordination (junior tranches) as credit enhancement.", orderIndex: 7 },
  { id: "frm-financial-markets-mortgages-mbs-q09", topicId: "frm-financial-markets-mortgages-mbs", text: "The PSA model is used to describe:", optionA: "Prepayment speed", optionB: "Coupon reset", optionC: "Default recovery", optionD: "Tax treatment", correctOption: "A", explanation: "The PSA benchmark models the pace of mortgage prepayments.", orderIndex: 8 },
  { id: "frm-financial-markets-mortgages-mbs-q10", topicId: "frm-financial-markets-mortgages-mbs", text: "Option-adjusted spread (OAS) accounts for the effect of the:", optionA: "Prepayment (embedded) option", optionB: "Currency", optionC: "Dividend", optionD: "Tax rate", correctOption: "A", explanation: "OAS removes the embedded prepayment option to compare MBS on a like basis.", orderIndex: 9 },
  { id: "frm-financial-markets-mortgages-mbs-q11", topicId: "frm-financial-markets-mortgages-mbs", text: "A PAC tranche is designed to provide:", optionA: "More stable, predictable cash flows", optionB: "Maximum prepayment risk", optionC: "Equity upside", optionD: "No cash flows", correctOption: "A", explanation: "Planned amortisation class (PAC) tranches offer more predictable cash flows, with support tranches absorbing variability.", orderIndex: 10 },
  { id: "frm-financial-markets-mortgages-mbs-q12", topicId: "frm-financial-markets-mortgages-mbs", text: "Prepayment modelling is central to:", optionA: "Valuing and hedging MBS", optionB: "Pricing equities", optionC: "Setting tax rates", optionD: "FX arbitrage", correctOption: "A", explanation: "Because prepayments drive MBS cash flows, modelling them is essential to valuation and hedging.", orderIndex: 11 },

  // ── Fixed-Income Risk: DV01 & Convexity ──
  { id: "frm-valuation-risk-models-fixed-income-risk-q01", topicId: "frm-valuation-risk-models-fixed-income-risk", text: "DV01 measures the price change of a bond for a:", optionA: "1 basis point yield move", optionB: "1% yield move", optionC: "10% yield move", optionD: "Coupon change", correctOption: "A", explanation: "DV01 is the dollar value change for a one-basis-point yield move.", orderIndex: 0 },
  { id: "frm-valuation-risk-models-fixed-income-risk-q02", topicId: "frm-valuation-risk-models-fixed-income-risk", text: "Modified duration approximates the percentage price change per:", optionA: "1% change in yield", optionB: "1 bp change", optionC: "Coupon payment", optionD: "Maturity year", correctOption: "A", explanation: "Modified duration gives the approximate % price change for a 1% yield change.", orderIndex: 1 },
  { id: "frm-valuation-risk-models-fixed-income-risk-q03", topicId: "frm-valuation-risk-models-fixed-income-risk", text: "Convexity is a correction to which linear estimate?", optionA: "Duration", optionB: "DV01 only", optionC: "The coupon", optionD: "Yield", correctOption: "A", explanation: "Convexity refines the duration (linear) approximation for larger yield moves.", orderIndex: 2 },
  { id: "frm-valuation-risk-models-fixed-income-risk-q04", topicId: "frm-valuation-risk-models-fixed-income-risk", text: "Positive convexity means, for a given yield change, the price:", optionA: "Rises more than duration predicts and falls less", optionB: "Always falls", optionC: "Is unchanged", optionD: "Falls more than predicted", correctOption: "A", explanation: "Positive convexity benefits the holder: bigger gains, smaller losses than duration alone.", orderIndex: 3 },
  { id: "frm-valuation-risk-models-fixed-income-risk-q05", topicId: "frm-valuation-risk-models-fixed-income-risk", text: "Duration hedging matches the ____ of the hedge and the position.", optionA: "DV01", optionB: "Coupon", optionC: "Maturity only", optionD: "Face value", correctOption: "A", explanation: "A duration hedge equalises the DV01 of the hedge and the exposure.", orderIndex: 4 },
  { id: "frm-valuation-risk-models-fixed-income-risk-q06", topicId: "frm-valuation-risk-models-fixed-income-risk", text: "Key-rate durations are used to capture:", optionA: "Non-parallel yield-curve shifts", optionB: "Only parallel shifts", optionC: "Credit spreads", optionD: "Currency moves", correctOption: "A", explanation: "Key-rate (partial) durations measure sensitivity to individual points on the curve.", orderIndex: 5 },
  { id: "frm-valuation-risk-models-fixed-income-risk-q07", topicId: "frm-valuation-risk-models-fixed-income-risk", text: "Callable bonds and MBS can exhibit:", optionA: "Negative convexity", optionB: "Zero duration", optionC: "Infinite DV01", optionD: "No price risk", correctOption: "A", explanation: "Embedded options cap upside, producing negative convexity.", orderIndex: 6 },
  { id: "frm-valuation-risk-models-fixed-income-risk-q08", topicId: "frm-valuation-risk-models-fixed-income-risk", text: "The approximate price change ΔP/P equals:", optionA: "−D·Δy + ½·C·(Δy)²", optionB: "D·Δy only", optionC: "C·Δy", optionD: "−Δy", correctOption: "A", explanation: "Combining duration and convexity gives ΔP/P ≈ −D·Δy + ½·C·(Δy)².", orderIndex: 7 },
  { id: "frm-valuation-risk-models-fixed-income-risk-q09", topicId: "frm-valuation-risk-models-fixed-income-risk", text: "A longer-maturity bond generally has a:", optionA: "Higher duration", optionB: "Lower duration", optionC: "Zero duration", optionD: "Negative DV01", correctOption: "A", explanation: "Longer maturity typically raises duration and rate sensitivity.", orderIndex: 8 },
  { id: "frm-valuation-risk-models-fixed-income-risk-q10", topicId: "frm-valuation-risk-models-fixed-income-risk", text: "Higher convexity is generally ____ for a bondholder.", optionA: "Favourable", optionB: "Unfavourable", optionC: "Irrelevant", optionD: "Always costless", correctOption: "A", explanation: "Positive convexity improves the price response to yield changes, benefiting the holder.", orderIndex: 9 },
  { id: "frm-valuation-risk-models-fixed-income-risk-q11", topicId: "frm-valuation-risk-models-fixed-income-risk", text: "DV01 is also referred to as the:", optionA: "Price value of a basis point (PVBP)", optionB: "Coupon rate", optionC: "Yield to maturity", optionD: "Convexity", correctOption: "A", explanation: "DV01 is the price value of a basis point (PVBP).", orderIndex: 10 },
  { id: "frm-valuation-risk-models-fixed-income-risk-q12", topicId: "frm-valuation-risk-models-fixed-income-risk", text: "Duration and DV01 are the primary tools for managing:", optionA: "Interest-rate risk", optionB: "Currency risk", optionC: "Operational risk", optionD: "Liquidity risk", correctOption: "A", explanation: "Duration and DV01 quantify and hedge interest-rate risk.", orderIndex: 11 },

  // ── Country & Sovereign Risk ──
  { id: "frm-valuation-risk-models-country-risk-q01", topicId: "frm-valuation-risk-models-country-risk", text: "Sovereign risk is the risk that a:", optionA: "Government defaults on its debt", optionB: "Company misses a coupon", optionC: "Bank fails an audit", optionD: "Stock falls", correctOption: "A", explanation: "Sovereign risk is the chance a national government defaults.", orderIndex: 0 },
  { id: "frm-valuation-risk-models-country-risk-q02", topicId: "frm-valuation-risk-models-country-risk", text: "A sovereign may default on foreign-currency debt because it cannot:", optionA: "Print the foreign currency", optionB: "Levy taxes", optionC: "Issue local bonds", optionD: "Set interest rates", correctOption: "A", explanation: "A government cannot print foreign currency, so foreign-currency debt carries more default risk.", orderIndex: 1 },
  { id: "frm-valuation-risk-models-country-risk-q03", topicId: "frm-valuation-risk-models-country-risk", text: "'Willingness to pay' matters because a sovereign may be able but:", optionA: "Unwilling to repay", optionB: "Always willing", optionC: "Unable to tax", optionD: "Unaware of its debt", correctOption: "A", explanation: "A country can have the ability yet lack the willingness to repay.", orderIndex: 2 },
  { id: "frm-valuation-risk-models-country-risk-q04", topicId: "frm-valuation-risk-models-country-risk", text: "A high debt-to-GDP ratio raises:", optionA: "Sovereign default risk", optionB: "The convenience yield", optionC: "Equity dividends", optionD: "The coupon only", correctOption: "A", explanation: "Heavier debt burdens increase the likelihood of sovereign distress.", orderIndex: 3 },
  { id: "frm-valuation-risk-models-country-risk-q05", topicId: "frm-valuation-risk-models-country-risk", text: "Sovereign CDS spreads are a market signal of:", optionA: "Default risk", optionB: "Dividend policy", optionC: "Storage cost", optionD: "Tax rates", correctOption: "A", explanation: "Wider sovereign CDS spreads indicate higher perceived default risk.", orderIndex: 4 },
  { id: "frm-valuation-risk-models-country-risk-q06", topicId: "frm-valuation-risk-models-country-risk", text: "Expropriation risk is a form of:", optionA: "Political risk", optionB: "Market risk", optionC: "Liquidity risk", optionD: "Convexity", correctOption: "A", explanation: "The risk a government seizes assets is a political component of country risk.", orderIndex: 5 },
  { id: "frm-valuation-risk-models-country-risk-q07", topicId: "frm-valuation-risk-models-country-risk", text: "Contagion refers to country risk:", optionA: "Spreading across similar economies", optionB: "Disappearing entirely", optionC: "Only affecting one bond", optionD: "Reducing to zero", correctOption: "A", explanation: "Contagion is the transmission of crises across related economies.", orderIndex: 6 },
  { id: "frm-valuation-risk-models-country-risk-q08", topicId: "frm-valuation-risk-models-country-risk", text: "A large current-account deficit can increase:", optionA: "External vulnerability", optionB: "Convenience yield", optionC: "Duration", optionD: "Dividend yield", correctOption: "A", explanation: "Persistent external deficits raise a country's financing vulnerability.", orderIndex: 7 },
  { id: "frm-valuation-risk-models-country-risk-q09", topicId: "frm-valuation-risk-models-country-risk", text: "Local-currency sovereign debt is generally ____ than foreign-currency debt.", optionA: "Less likely to default", optionB: "More likely to default", optionC: "Identical in risk", optionD: "Always in default", correctOption: "A", explanation: "A government can print its own currency, lowering local-currency default risk.", orderIndex: 8 },
  { id: "frm-valuation-risk-models-country-risk-q10", topicId: "frm-valuation-risk-models-country-risk", text: "Rule of law and political stability are part of:", optionA: "Country risk assessment", optionB: "Coupon setting", optionC: "Convexity", optionD: "Tax filing", correctOption: "A", explanation: "Legal and political factors are central to country-risk analysis.", orderIndex: 9 },
  { id: "frm-valuation-risk-models-country-risk-q11", topicId: "frm-valuation-risk-models-country-risk", text: "Sovereign credit ratings assess a government's:", optionA: "Creditworthiness", optionB: "Stock price", optionC: "Dividend yield", optionD: "Storage costs", correctOption: "A", explanation: "Sovereign ratings gauge the government's ability and willingness to repay.", orderIndex: 10 },
  { id: "frm-valuation-risk-models-country-risk-q12", topicId: "frm-valuation-risk-models-country-risk", text: "High inflation and fiscal deficits typically:", optionA: "Raise sovereign risk", optionB: "Lower it", optionC: "Have no effect", optionD: "Guarantee repayment", correctOption: "A", explanation: "Macroeconomic instability increases the risk of sovereign default.", orderIndex: 11 },

  // ── External & Internal Credit Ratings ──
  { id: "frm-valuation-risk-models-credit-ratings-q01", topicId: "frm-valuation-risk-models-credit-ratings", text: "The boundary between investment grade and speculative grade is around:", optionA: "BBB−/Baa3", optionB: "AAA", optionC: "CCC", optionD: "D", correctOption: "A", explanation: "BBB−/Baa3 is the lowest investment-grade rating; below it is speculative/high-yield.", orderIndex: 0 },
  { id: "frm-valuation-risk-models-credit-ratings-q02", topicId: "frm-valuation-risk-models-credit-ratings", text: "A rating transition matrix shows the probability of:", optionA: "Moving between rating grades", optionB: "A coupon change", optionC: "A currency move", optionD: "A dividend cut", correctOption: "A", explanation: "Transition matrices give probabilities of migrating between rating categories.", orderIndex: 1 },
  { id: "frm-valuation-risk-models-credit-ratings-q03", topicId: "frm-valuation-risk-models-credit-ratings", text: "A key criticism of agency ratings is the:", optionA: "Issuer-pays conflict of interest", optionB: "Low fees", optionC: "Excess speed", optionD: "Over-conservatism", correctOption: "A", explanation: "Issuers paying for their own ratings creates a conflict of interest.", orderIndex: 2 },
  { id: "frm-valuation-risk-models-credit-ratings-q04", topicId: "frm-valuation-risk-models-credit-ratings", text: "External agency ratings tend to be:", optionA: "Through-the-cycle and can lag", optionB: "Real-time and leading", optionC: "Updated every second", optionD: "Never changed", correctOption: "A", explanation: "Agency ratings are through-the-cycle and often lag deteriorating conditions.", orderIndex: 3 },
  { id: "frm-valuation-risk-models-credit-ratings-q05", topicId: "frm-valuation-risk-models-credit-ratings", text: "A 'rating cliff' can force selling when a bond is downgraded below:", optionA: "Investment grade", optionB: "AAA", optionC: "The coupon", optionD: "Par value", correctOption: "A", explanation: "Falling below investment grade can trigger forced selling by mandate-constrained investors.", orderIndex: 4 },
  { id: "frm-valuation-risk-models-credit-ratings-q06", topicId: "frm-valuation-risk-models-credit-ratings", text: "Banks' internal rating-based (IRB) models estimate PD, LGD and:", optionA: "EAD", optionB: "P/E", optionC: "DV01", optionD: "Convexity", correctOption: "A", explanation: "IRB models estimate probability of default, loss given default and exposure at default.", orderIndex: 5 },
  { id: "frm-valuation-risk-models-credit-ratings-q07", topicId: "frm-valuation-risk-models-credit-ratings", text: "Expected loss equals PD times LGD times:", optionA: "EAD", optionB: "The coupon", optionC: "Duration", optionD: "The rating", correctOption: "A", explanation: "Expected loss = PD × LGD × EAD.", orderIndex: 6 },
  { id: "frm-valuation-risk-models-credit-ratings-q08", topicId: "frm-valuation-risk-models-credit-ratings", text: "A point-in-time rating reflects:", optionA: "Current conditions", optionB: "Long-run averages only", optionC: "No information", optionD: "The coupon", correctOption: "A", explanation: "Point-in-time ratings incorporate current economic conditions, unlike through-the-cycle.", orderIndex: 7 },
  { id: "frm-valuation-risk-models-credit-ratings-q09", topicId: "frm-valuation-risk-models-credit-ratings", text: "Procyclicality of ratings means they can:", optionA: "Amplify booms and busts", optionB: "Smooth the cycle", optionC: "Eliminate risk", optionD: "Fix prices", correctOption: "A", explanation: "Ratings tightening in downturns can worsen procyclical effects.", orderIndex: 8 },
  { id: "frm-valuation-risk-models-credit-ratings-q10", topicId: "frm-valuation-risk-models-credit-ratings", text: "The three major rating agencies are S&P, Fitch and:", optionA: "Moody's", optionB: "GARP", optionC: "IASB", optionD: "BIS", correctOption: "A", explanation: "Moody's, S&P and Fitch are the three major credit rating agencies.", orderIndex: 9 },
  { id: "frm-valuation-risk-models-credit-ratings-q11", topicId: "frm-valuation-risk-models-credit-ratings", text: "A downgrade from BBB to BB moves a bond to:", optionA: "High yield (speculative grade)", optionB: "Investment grade", optionC: "AAA", optionD: "Default", correctOption: "A", explanation: "BB is below investment grade, i.e., high-yield/speculative.", orderIndex: 10 },
  { id: "frm-valuation-risk-models-credit-ratings-q12", topicId: "frm-valuation-risk-models-credit-ratings", text: "Internal ratings are used by banks primarily for:", optionA: "Basel regulatory capital", optionB: "Marketing", optionC: "Dividend policy", optionD: "FX arbitrage", correctOption: "A", explanation: "IRB internal ratings feed Basel capital calculations.", orderIndex: 11 },

  // ── Fixed-Income VaR & Rate Risk ──
  { id: "frm-market-risk-fixed-income-var-q01", topicId: "frm-market-risk-fixed-income-var", text: "Duration-based VaR uses the portfolio value, modified duration, and a:", optionA: "Yield change at the confidence level", optionB: "Dividend", optionC: "Coupon", optionD: "Storage cost", correctOption: "A", explanation: "Duration VaR ≈ value × duration × Δy at the chosen confidence.", orderIndex: 0 },
  { id: "frm-market-risk-fixed-income-var-q02", topicId: "frm-market-risk-fixed-income-var", text: "Cash-flow mapping decomposes bonds into:", optionA: "Zero-coupon exposures at standard vertices", optionB: "Equity positions", optionC: "Currency pairs", optionD: "Options only", correctOption: "A", explanation: "Bonds are mapped to zero-coupon cash flows at standard maturity vertices.", orderIndex: 1 },
  { id: "frm-market-risk-fixed-income-var-q03", topicId: "frm-market-risk-fixed-income-var", text: "The first three PCA factors of the yield curve are level, slope and:", optionA: "Curvature", optionB: "Coupon", optionC: "Convenience yield", optionD: "Dividend", correctOption: "A", explanation: "Level, slope and curvature explain most yield-curve variation.", orderIndex: 2 },
  { id: "frm-market-risk-fixed-income-var-q04", topicId: "frm-market-risk-fixed-income-var", text: "Duration captures which type of yield-curve move?", optionA: "Parallel shifts", optionB: "Steepening only", optionC: "Curvature only", optionD: "Currency moves", correctOption: "A", explanation: "Duration measures sensitivity to parallel shifts of the curve.", orderIndex: 3 },
  { id: "frm-market-risk-fixed-income-var-q05", topicId: "frm-market-risk-fixed-income-var", text: "Key-rate durations are needed to capture:", optionA: "Non-parallel (twist) moves", optionB: "Parallel moves only", optionC: "Equity risk", optionD: "FX risk", correctOption: "A", explanation: "Key-rate durations handle steepening/flattening not captured by a single duration.", orderIndex: 4 },
  { id: "frm-market-risk-fixed-income-var-q06", topicId: "frm-market-risk-fixed-income-var", text: "Full revaluation VaR reprices the portfolio under:", optionA: "Yield-curve scenarios", optionB: "One fixed rate", optionC: "No changes", optionD: "Equity scenarios only", correctOption: "A", explanation: "Full revaluation reprices bonds across simulated curve scenarios.", orderIndex: 5 },
  { id: "frm-market-risk-fixed-income-var-q07", topicId: "frm-market-risk-fixed-income-var", text: "Credit spread risk is treated as:", optionA: "A separate factor from the risk-free curve", optionB: "Part of duration", optionC: "Currency risk", optionD: "Negligible always", correctOption: "A", explanation: "Spread risk is a distinct factor from the risk-free rate curve.", orderIndex: 6 },
  { id: "frm-market-risk-fixed-income-var-q08", topicId: "frm-market-risk-fixed-income-var", text: "A convexity adjustment improves VaR estimates for:", optionA: "Large yield moves", optionB: "Zero moves", optionC: "Currency moves", optionD: "Dividends", correctOption: "A", explanation: "Convexity corrects duration's linear estimate for large rate changes.", orderIndex: 7 },
  { id: "frm-market-risk-fixed-income-var-q09", topicId: "frm-market-risk-fixed-income-var", text: "Mapping to standard vertices allows use of a:", optionA: "Covariance matrix of rates", optionB: "Single equity beta", optionC: "Dividend model", optionD: "Coupon schedule", correctOption: "A", explanation: "Cash-flow mapping uses the covariance matrix of the vertex rates to compute VaR.", orderIndex: 8 },
  { id: "frm-market-risk-fixed-income-var-q10", topicId: "frm-market-risk-fixed-income-var", text: "PCA reduces yield-curve risk to a few:", optionA: "Independent factors", optionB: "Coupons", optionC: "Currencies", optionD: "Dividends", correctOption: "A", explanation: "Principal component analysis summarises curve moves into a few orthogonal factors.", orderIndex: 9 },
  { id: "frm-market-risk-fixed-income-var-q11", topicId: "frm-market-risk-fixed-income-var", text: "A steepening of the yield curve is an example of a:", optionA: "Non-parallel shift", optionB: "Parallel shift", optionC: "Currency move", optionD: "Equity move", correctOption: "A", explanation: "Steepening changes the slope — a non-parallel shift.", orderIndex: 10 },
  { id: "frm-market-risk-fixed-income-var-q12", topicId: "frm-market-risk-fixed-income-var", text: "The main risk factor for a government bond portfolio is:", optionA: "Interest rates", optionB: "Equity prices", optionC: "Commodity storage", optionD: "Dividend yield", correctOption: "A", explanation: "Interest-rate (yield-curve) risk dominates a government bond portfolio.", orderIndex: 11 },

  // ── Correlation & Basis Risk ──
  { id: "frm-market-risk-correlation-basis-q01", topicId: "frm-market-risk-correlation-basis", text: "Basis risk is the risk that a hedge and the hedged item:", optionA: "Do not move together perfectly", optionB: "Move identically", optionC: "Have the same coupon", optionD: "Mature on the same date", correctOption: "A", explanation: "Basis risk arises when the hedge and exposure are imperfectly correlated.", orderIndex: 0 },
  { id: "frm-market-risk-correlation-basis-q02", topicId: "frm-market-risk-correlation-basis", text: "The basis is defined as:", optionA: "Spot price minus futures price", optionB: "Coupon minus yield", optionC: "Bid minus ask", optionD: "Duration minus convexity", correctOption: "A", explanation: "The basis = spot − futures, which fluctuates over time.", orderIndex: 1 },
  { id: "frm-market-risk-correlation-basis-q03", topicId: "frm-market-risk-correlation-basis", text: "Cross-hedging introduces basis risk because the instruments are:", optionA: "Imperfectly correlated", optionB: "Identical", optionC: "Risk-free", optionD: "The same maturity", correctOption: "A", explanation: "Hedging with a different but related instrument leaves basis risk.", orderIndex: 2 },
  { id: "frm-market-risk-correlation-basis-q04", topicId: "frm-market-risk-correlation-basis", text: "In a crisis, asset correlations typically:", optionA: "Rise toward 1", optionB: "Fall to zero", optionC: "Stay constant", optionD: "Become negative", correctOption: "A", explanation: "Correlations spike in stress, reducing diversification benefits.", orderIndex: 3 },
  { id: "frm-market-risk-correlation-basis-q05", topicId: "frm-market-risk-correlation-basis", text: "Correlation trading takes explicit views on:", optionA: "Correlation between assets", optionB: "A single stock's dividend", optionC: "Coupon dates", optionD: "Storage costs", correctOption: "A", explanation: "Correlation trades (e.g., tranches) profit from changes in correlation.", orderIndex: 4 },
  { id: "frm-market-risk-correlation-basis-q06", topicId: "frm-market-risk-correlation-basis", text: "A maturity mismatch between a hedge and exposure creates:", optionA: "Basis risk", optionB: "No risk", optionC: "Guaranteed profit", optionD: "Currency risk only", correctOption: "A", explanation: "Timing/maturity mismatches are a source of basis risk.", orderIndex: 5 },
  { id: "frm-market-risk-correlation-basis-q07", topicId: "frm-market-risk-correlation-basis", text: "To reduce basis risk, choose a hedge with:", optionA: "High, stable correlation to the exposure", optionB: "Low correlation", optionC: "The highest volatility", optionD: "No relationship", correctOption: "A", explanation: "A closely and stably correlated hedge minimises basis risk.", orderIndex: 6 },
  { id: "frm-market-risk-correlation-basis-q08", topicId: "frm-market-risk-correlation-basis", text: "Underestimating correlation risk can cause:", optionA: "Hedging failures", optionB: "Guaranteed gains", optionC: "Lower volatility", optionD: "Higher liquidity", correctOption: "A", explanation: "Assuming correlations that break down leads hedges to fail.", orderIndex: 7 },
  { id: "frm-market-risk-correlation-basis-q09", topicId: "frm-market-risk-correlation-basis", text: "Stress-testing a hedge examines scenarios where correlations:", optionA: "Break down", optionB: "Stay perfect", optionC: "Reach exactly zero always", optionD: "Are irrelevant", correctOption: "A", explanation: "Stress tests probe the hedge when assumed correlations fail.", orderIndex: 8 },
  { id: "frm-market-risk-correlation-basis-q10", topicId: "frm-market-risk-correlation-basis", text: "As the futures contract approaches expiry, the basis tends to:", optionA: "Converge toward zero", optionB: "Widen indefinitely", optionC: "Stay constant", optionD: "Turn negative always", correctOption: "A", explanation: "Spot and futures converge at expiry, so the basis narrows to zero.", orderIndex: 9 },
  { id: "frm-market-risk-correlation-basis-q11", topicId: "frm-market-risk-correlation-basis", text: "Reliance on assumed correlations is a weakness of:", optionA: "Diversified portfolios in stress", optionB: "Cash holdings", optionC: "Single bonds", optionD: "Coupons", correctOption: "A", explanation: "Diversification depends on correlations that can rise in crises.", orderIndex: 10 },
  { id: "frm-market-risk-correlation-basis-q12", topicId: "frm-market-risk-correlation-basis", text: "Basis risk is especially relevant when hedging with:", optionA: "Standardised futures against a custom exposure", optionB: "The identical asset", optionC: "Cash", optionD: "Nothing", correctOption: "A", explanation: "Standardised futures rarely match a bespoke exposure exactly, creating basis risk.", orderIndex: 11 },

  // ── FRTB ──
  { id: "frm-market-risk-frtb-q01", topicId: "frm-market-risk-frtb", text: "FRTB replaces VaR with which risk measure for internal models?", optionA: "Expected Shortfall", optionB: "Duration", optionC: "Beta", optionD: "The Sharpe ratio", correctOption: "A", explanation: "FRTB adopts Expected Shortfall (at 97.5%) instead of VaR.", orderIndex: 0 },
  { id: "frm-market-risk-frtb-q02", topicId: "frm-market-risk-frtb", text: "Expected Shortfall is preferred over VaR because it:", optionA: "Captures tail risk and is coherent", optionB: "Ignores the tail", optionC: "Is always smaller", optionD: "Needs no data", correctOption: "A", explanation: "ES measures losses beyond the threshold and is subadditive (coherent).", orderIndex: 1 },
  { id: "frm-market-risk-frtb-q03", topicId: "frm-market-risk-frtb", text: "FRTB clarifies the boundary between the:", optionA: "Trading book and banking book", optionB: "Assets and equity", optionC: "Debit and credit", optionD: "Spot and forward", correctOption: "A", explanation: "A stricter trading/banking book boundary curbs regulatory arbitrage.", orderIndex: 2 },
  { id: "frm-market-risk-frtb-q04", topicId: "frm-market-risk-frtb", text: "Under FRTB, all banks must compute the:", optionA: "Standardised approach", optionB: "No capital at all", optionC: "Only internal models", optionD: "Dividend yield", correctOption: "A", explanation: "The revised standardised approach is mandatory for all banks.", orderIndex: 3 },
  { id: "frm-market-risk-frtb-q05", topicId: "frm-market-risk-frtb", text: "The Internal Models Approach requires desk-level:", optionA: "P&L attribution and backtesting", optionB: "Marketing", optionC: "Dividend policy", optionD: "Tax filing", correctOption: "A", explanation: "IMA approval needs P&L attribution and backtesting tests per desk.", orderIndex: 4 },
  { id: "frm-market-risk-frtb-q06", topicId: "frm-market-risk-frtb", text: "A desk failing FRTB model tests must:", optionA: "Revert to the standardised approach", optionB: "Stop trading forever", optionC: "Pay a dividend", optionD: "Ignore the result", correctOption: "A", explanation: "Failing desks fall back to the standardised approach for capital.", orderIndex: 5 },
  { id: "frm-market-risk-frtb-q07", topicId: "frm-market-risk-frtb", text: "Non-modellable risk factors (NMRFs) attract:", optionA: "Add-on capital", optionB: "A rebate", optionC: "No capital", optionD: "A dividend", correctOption: "A", explanation: "NMRFs require additional capital charges under FRTB.", orderIndex: 6 },
  { id: "frm-market-risk-frtb-q08", topicId: "frm-market-risk-frtb", text: "The ES confidence level under FRTB is:", optionA: "97.5%", optionB: "99%", optionC: "95%", optionD: "90%", correctOption: "A", explanation: "FRTB uses Expected Shortfall at the 97.5% level.", orderIndex: 7 },
  { id: "frm-market-risk-frtb-q09", topicId: "frm-market-risk-frtb", text: "FRTB was a response to weaknesses revealed in:", optionA: "The 2008 financial crisis", optionB: "The dot-com boom", optionC: "The 1970s oil shock", optionD: "A single default", correctOption: "A", explanation: "FRTB reformed trading-book capital after the 2008 crisis.", orderIndex: 8 },
  { id: "frm-market-risk-frtb-q10", topicId: "frm-market-risk-frtb", text: "A goal of FRTB is greater capital:", optionA: "Sensitivity and comparability", optionB: "Reduction for all", optionC: "Elimination", optionD: "Randomness", correctOption: "A", explanation: "FRTB aims for more risk-sensitive, comparable capital across banks.", orderIndex: 9 },
  { id: "frm-market-risk-frtb-q11", topicId: "frm-market-risk-frtb", text: "Coherent risk measures satisfy properties including:", optionA: "Subadditivity", optionB: "Non-monotonicity", optionC: "Negativity", optionD: "Randomness", correctOption: "A", explanation: "ES is coherent, satisfying subadditivity, unlike VaR in general.", orderIndex: 10 },
  { id: "frm-market-risk-frtb-q12", topicId: "frm-market-risk-frtb", text: "FRTB's standardised approach is more:", optionA: "Risk-sensitive than the old one", optionB: "Lenient", optionC: "Optional", optionD: "Unregulated", correctOption: "A", explanation: "The revised SA is more risk-sensitive than the previous standardised method.", orderIndex: 11 },

  // ── Credit Scoring & Rating Models ──
  { id: "frm-credit-risk-credit-scoring-q01", topicId: "frm-credit-risk-credit-scoring", text: "Retail credit scorecards are commonly built with:", optionA: "Logistic regression", optionB: "Duration analysis", optionC: "Copulas only", optionD: "PCA only", correctOption: "A", explanation: "Logistic regression is the standard technique for retail default scoring.", orderIndex: 0 },
  { id: "frm-credit-risk-credit-scoring-q02", topicId: "frm-credit-risk-credit-scoring", text: "The Altman Z-score is an example of:", optionA: "Discriminant analysis", optionB: "A copula", optionC: "A transition matrix", optionD: "Monte Carlo", correctOption: "A", explanation: "The Z-score uses discriminant analysis of financial ratios to flag distress.", orderIndex: 1 },
  { id: "frm-credit-risk-credit-scoring-q03", topicId: "frm-credit-risk-credit-scoring", text: "Expected loss equals PD times LGD times:", optionA: "EAD", optionB: "Duration", optionC: "The coupon", optionD: "The rating", correctOption: "A", explanation: "Expected loss = PD × LGD × EAD.", orderIndex: 2 },
  { id: "frm-credit-risk-credit-scoring-q04", topicId: "frm-credit-risk-credit-scoring", text: "LGD stands for loss given:", optionA: "Default", optionB: "Downgrade", optionC: "Duration", optionD: "Dividend", correctOption: "A", explanation: "LGD is the loss given default, net of recovery.", orderIndex: 3 },
  { id: "frm-credit-risk-credit-scoring-q05", topicId: "frm-credit-risk-credit-scoring", text: "A scorecard's discriminatory power is often measured by the:", optionA: "ROC/AUC", optionB: "Coupon", optionC: "Duration", optionD: "Dividend yield", correctOption: "A", explanation: "The ROC curve and its AUC gauge how well a model separates defaulters.", orderIndex: 4 },
  { id: "frm-credit-risk-credit-scoring-q06", topicId: "frm-credit-risk-credit-scoring", text: "Machine-learning credit models tend to improve accuracy but reduce:", optionA: "Interpretability", optionB: "Data needs", optionC: "Regulation", optionD: "Default rates", correctOption: "A", explanation: "Complex ML models can be more accurate but harder to interpret/explain.", orderIndex: 5 },
  { id: "frm-credit-risk-credit-scoring-q07", topicId: "frm-credit-risk-credit-scoring", text: "EAD stands for exposure at:", optionA: "Default", optionB: "Downgrade", optionC: "Duration", optionD: "Dividend", correctOption: "A", explanation: "EAD is the exposure at default — the amount owed if default occurs.", orderIndex: 6 },
  { id: "frm-credit-risk-credit-scoring-q08", topicId: "frm-credit-risk-credit-scoring", text: "Population drift in a scorecard requires:", optionA: "Periodic recalibration", optionB: "No action", optionC: "Higher coupons", optionD: "More leverage", correctOption: "A", explanation: "As the applicant population shifts, scorecards must be recalibrated.", orderIndex: 7 },
  { id: "frm-credit-risk-credit-scoring-q09", topicId: "frm-credit-risk-credit-scoring", text: "The KS statistic measures a model's:", optionA: "Ability to separate good and bad borrowers", optionB: "Coupon", optionC: "Duration", optionD: "Currency", correctOption: "A", explanation: "The Kolmogorov–Smirnov statistic captures separation between default classes.", orderIndex: 8 },
  { id: "frm-credit-risk-credit-scoring-q10", topicId: "frm-credit-risk-credit-scoring", text: "Calibration of a PD model compares predicted defaults to:", optionA: "Observed defaults", optionB: "The coupon", optionC: "Duration", optionD: "Market cap", correctOption: "A", explanation: "Calibration checks predicted PDs against realised default rates.", orderIndex: 9 },
  { id: "frm-credit-risk-credit-scoring-q11", topicId: "frm-credit-risk-credit-scoring", text: "A higher AUC indicates a model that is:", optionA: "Better at ranking risk", optionB: "Worse", optionC: "Random", optionD: "Irrelevant", correctOption: "A", explanation: "A higher AUC means stronger discrimination between defaulters and non-defaulters.", orderIndex: 10 },
  { id: "frm-credit-risk-credit-scoring-q12", topicId: "frm-credit-risk-credit-scoring", text: "PD, LGD and EAD are the key parameters of the Basel:", optionA: "Internal ratings-based (IRB) approach", optionB: "Standardised leverage ratio", optionC: "Liquidity coverage ratio", optionD: "Dividend rule", correctOption: "A", explanation: "PD, LGD and EAD drive the IRB credit-capital calculation.", orderIndex: 11 },

  // ── Credit Portfolio Models ──
  { id: "frm-credit-risk-portfolio-models-q01", topicId: "frm-credit-risk-portfolio-models", text: "CreditMetrics is based on:", optionA: "Rating transitions and correlations", optionB: "Duration only", optionC: "Coupon schedules", optionD: "Currency parity", correctOption: "A", explanation: "CreditMetrics uses transition matrices and asset correlations to model portfolio value.", orderIndex: 0 },
  { id: "frm-credit-risk-portfolio-models-q02", topicId: "frm-credit-risk-portfolio-models", text: "The KMV/Merton approach is based on:", optionA: "Distance to default", optionB: "Coupon dates", optionC: "Dividend yield", optionD: "Storage cost", correctOption: "A", explanation: "KMV uses the structural Merton model and distance to default.", orderIndex: 1 },
  { id: "frm-credit-risk-portfolio-models-q03", topicId: "frm-credit-risk-portfolio-models", text: "CreditRisk+ is an actuarial model of default:", optionA: "Counts (Poisson-type)", optionB: "Coupons", optionC: "Durations", optionD: "Currencies", correctOption: "A", explanation: "CreditRisk+ models the number of defaults with a Poisson-type distribution.", orderIndex: 2 },
  { id: "frm-credit-risk-portfolio-models-q04", topicId: "frm-credit-risk-portfolio-models", text: "Higher default correlation ____ the tail of the loss distribution.", optionA: "Fattens", optionB: "Removes", optionC: "Halves", optionD: "Does not affect", correctOption: "A", explanation: "More correlated defaults increase the probability of large joint losses.", orderIndex: 3 },
  { id: "frm-credit-risk-portfolio-models-q05", topicId: "frm-credit-risk-portfolio-models", text: "Economic capital for credit is based on:", optionA: "Unexpected loss (a high quantile minus expected loss)", optionB: "Expected loss only", optionC: "The coupon", optionD: "Duration", correctOption: "A", explanation: "Economic capital covers unexpected loss beyond the expected loss.", orderIndex: 4 },
  { id: "frm-credit-risk-portfolio-models-q06", topicId: "frm-credit-risk-portfolio-models", text: "Concentration risk in a credit portfolio:", optionA: "Raises tail losses", optionB: "Lowers all risk", optionC: "Has no effect", optionD: "Guarantees profit", correctOption: "A", explanation: "Single-name or sector concentration increases the portfolio's tail risk.", orderIndex: 5 },
  { id: "frm-credit-risk-portfolio-models-q07", topicId: "frm-credit-risk-portfolio-models", text: "Diversification reduces unexpected loss but cannot remove:", optionA: "Systematic credit risk", optionB: "All risk", optionC: "Idiosyncratic risk", optionD: "Data errors", correctOption: "A", explanation: "Systematic (macro) credit risk remains even in a well-diversified portfolio.", orderIndex: 6 },
  { id: "frm-credit-risk-portfolio-models-q08", topicId: "frm-credit-risk-portfolio-models", text: "Credit portfolio models primarily estimate the:", optionA: "Loss distribution", optionB: "Coupon", optionC: "Duration", optionD: "Dividend", correctOption: "A", explanation: "These models produce the portfolio's credit loss distribution.", orderIndex: 7 },
  { id: "frm-credit-risk-portfolio-models-q09", topicId: "frm-credit-risk-portfolio-models", text: "Asset-return correlations in CreditMetrics proxy for:", optionA: "Default correlation", optionB: "Coupon timing", optionC: "Currency moves", optionD: "Storage costs", correctOption: "A", explanation: "Correlated asset returns drive joint rating changes/defaults.", orderIndex: 8 },
  { id: "frm-credit-risk-portfolio-models-q10", topicId: "frm-credit-risk-portfolio-models", text: "Distance to default measures how many standard deviations a firm is from:", optionA: "Its default point", optionB: "Its coupon", optionC: "Its dividend", optionD: "Par", correctOption: "A", explanation: "Distance to default is the gap between asset value and the default threshold in σ units.", orderIndex: 9 },
  { id: "frm-credit-risk-portfolio-models-q11", topicId: "frm-credit-risk-portfolio-models", text: "The expected loss is subtracted from a high quantile to give:", optionA: "Unexpected loss (economic capital)", optionB: "The coupon", optionC: "Duration", optionD: "The dividend", correctOption: "A", explanation: "Unexpected loss = high-quantile loss − expected loss = economic capital.", orderIndex: 10 },
  { id: "frm-credit-risk-portfolio-models-q12", topicId: "frm-credit-risk-portfolio-models", text: "A structural credit model links default to the firm's:", optionA: "Asset value falling below its debt", optionB: "Coupon schedule", optionC: "Dividend policy", optionD: "Storage costs", correctOption: "A", explanation: "In structural models, default occurs when asset value drops below liabilities.", orderIndex: 11 },

  // ── Wrong-Way Risk & Netting ──
  { id: "frm-credit-risk-wrong-way-risk-q01", topicId: "frm-credit-risk-wrong-way-risk", text: "Wrong-way risk is when exposure rises as the counterparty's credit quality:", optionA: "Worsens", optionB: "Improves", optionC: "Stays constant", optionD: "Is unknown", correctOption: "A", explanation: "Wrong-way risk means exposure and default probability increase together.", orderIndex: 0 },
  { id: "frm-credit-risk-wrong-way-risk-q02", topicId: "frm-credit-risk-wrong-way-risk", text: "General wrong-way risk is driven by:", optionA: "Common macro factors", optionB: "A direct contractual link", optionC: "Coupon dates", optionD: "Dividend policy", correctOption: "A", explanation: "General wrong-way risk stems from exposure and default sharing macro drivers.", orderIndex: 1 },
  { id: "frm-credit-risk-wrong-way-risk-q03", topicId: "frm-credit-risk-wrong-way-risk", text: "Specific wrong-way risk arises from a:", optionA: "Direct link between exposure and counterparty", optionB: "Random factor", optionC: "Coupon schedule", optionD: "Currency peg", correctOption: "A", explanation: "Specific wrong-way risk is a direct dependence (e.g., protection bought from a related entity).", orderIndex: 2 },
  { id: "frm-credit-risk-wrong-way-risk-q04", topicId: "frm-credit-risk-wrong-way-risk", text: "Netting agreements offset positive and negative mark-to-markets into a:", optionA: "Single net exposure", optionB: "Gross exposure", optionC: "Coupon", optionD: "Dividend", correctOption: "A", explanation: "ISDA netting reduces many trades to one net counterparty exposure.", orderIndex: 3 },
  { id: "frm-credit-risk-wrong-way-risk-q05", topicId: "frm-credit-risk-wrong-way-risk", text: "Collateral posted under a CSA reduces:", optionA: "Counterparty exposure", optionB: "Coupon", optionC: "Duration", optionD: "Dividend", correctOption: "A", explanation: "Collateral (margin) lowers the net exposure to a counterparty.", orderIndex: 4 },
  { id: "frm-credit-risk-wrong-way-risk-q06", topicId: "frm-credit-risk-wrong-way-risk", text: "CVA is the:", optionA: "Credit valuation adjustment for counterparty risk", optionB: "Coupon value adjustment", optionC: "Currency value average", optionD: "Convexity value", correctOption: "A", explanation: "CVA prices the expected loss from counterparty default.", orderIndex: 5 },
  { id: "frm-credit-risk-wrong-way-risk-q07", topicId: "frm-credit-risk-wrong-way-risk", text: "Wrong-way risk ____ the CVA.", optionA: "Raises", optionB: "Lowers", optionC: "Eliminates", optionD: "Does not affect", correctOption: "A", explanation: "Because exposure peaks when default is likely, wrong-way risk increases CVA.", orderIndex: 6 },
  { id: "frm-credit-risk-wrong-way-risk-q08", topicId: "frm-credit-risk-wrong-way-risk", text: "Right-way risk is when exposure ____ as the counterparty deteriorates.", optionA: "Falls", optionB: "Rises", optionC: "Stays flat", optionD: "Doubles", correctOption: "A", explanation: "Right-way risk is favourable — exposure declines as credit worsens.", orderIndex: 7 },
  { id: "frm-credit-risk-wrong-way-risk-q09", topicId: "frm-credit-risk-wrong-way-risk", text: "Initial margin is designed to cover:", optionA: "Potential future exposure between default and close-out", optionB: "The coupon", optionC: "The dividend", optionD: "Storage costs", correctOption: "A", explanation: "Initial margin buffers against exposure that can build up during the close-out period.", orderIndex: 8 },
  { id: "frm-credit-risk-wrong-way-risk-q10", topicId: "frm-credit-risk-wrong-way-risk", text: "Variation margin is exchanged to cover:", optionA: "Current mark-to-market changes", optionB: "Future coupons", optionC: "Dividends", optionD: "Storage", correctOption: "A", explanation: "Variation margin settles day-to-day changes in the position's value.", orderIndex: 9 },
  { id: "frm-credit-risk-wrong-way-risk-q11", topicId: "frm-credit-risk-wrong-way-risk", text: "Netting benefits require the agreement to be:", optionA: "Legally enforceable", optionB: "Verbal only", optionC: "Ignored in default", optionD: "Renewed daily", correctOption: "A", explanation: "Netting reduces exposure only if it is legally enforceable in the relevant jurisdiction.", orderIndex: 10 },
  { id: "frm-credit-risk-wrong-way-risk-q12", topicId: "frm-credit-risk-wrong-way-risk", text: "Buying credit protection on a firm from its own affiliate is an example of:", optionA: "Specific wrong-way risk", optionB: "Right-way risk", optionC: "No risk", optionD: "Basis risk only", correctOption: "A", explanation: "The protection weakens exactly when needed — specific wrong-way risk.", orderIndex: 11 },

  // ── Model Risk & Model Validation ──
  { id: "frm-operational-risk-model-validation-q01", topicId: "frm-operational-risk-model-validation", text: "Model risk is the risk of loss from:", optionA: "An incorrect or misused model", optionB: "High liquidity", optionC: "Low volatility", optionD: "Diversification", correctOption: "A", explanation: "Model risk arises from wrong models or their misuse.", orderIndex: 0 },
  { id: "frm-operational-risk-model-validation-q02", topicId: "frm-operational-risk-model-validation", text: "The three core elements of model validation include conceptual soundness, ongoing monitoring, and:", optionA: "Outcomes analysis (backtesting)", optionB: "Marketing", optionC: "Dividend policy", optionD: "Tax review", correctOption: "A", explanation: "SR 11-7 validation covers conceptual soundness, monitoring and outcomes analysis.", orderIndex: 1 },
  { id: "frm-operational-risk-model-validation-q03", topicId: "frm-operational-risk-model-validation", text: "Model validation should be performed by a function that is:", optionA: "Independent of model developers", optionB: "The same as developers", optionC: "The marketing team", optionD: "The traders", correctOption: "A", explanation: "Independent validation avoids conflicts of interest.", orderIndex: 2 },
  { id: "frm-operational-risk-model-validation-q04", topicId: "frm-operational-risk-model-validation", text: "Applying a model outside its valid domain is an example of:", optionA: "Inappropriate use", optionB: "Conceptual soundness", optionC: "Backtesting", optionD: "Diversification", correctOption: "A", explanation: "Using a model beyond its intended scope is model misuse.", orderIndex: 3 },
  { id: "frm-operational-risk-model-validation-q05", topicId: "frm-operational-risk-model-validation", text: "Backtesting compares model predictions to:", optionA: "Actual outcomes", optionB: "The coupon", optionC: "Marketing goals", optionD: "Dividends", correctOption: "A", explanation: "Outcomes analysis (backtesting) checks predictions against realised results.", orderIndex: 4 },
  { id: "frm-operational-risk-model-validation-q06", topicId: "frm-operational-risk-model-validation", text: "A model inventory tiered by materiality supports:", optionA: "Model risk governance", optionB: "Tax filing", optionC: "Marketing", optionD: "Dividend policy", correctOption: "A", explanation: "Cataloguing and tiering models by importance is core to governance.", orderIndex: 5 },
  { id: "frm-operational-risk-model-validation-q07", topicId: "frm-operational-risk-model-validation", text: "Implementation errors are a source of:", optionA: "Model risk", optionB: "Liquidity risk", optionC: "Currency risk", optionD: "Convexity", correctOption: "A", explanation: "Coding/implementation mistakes are a form of model risk.", orderIndex: 6 },
  { id: "frm-operational-risk-model-validation-q08", topicId: "frm-operational-risk-model-validation", text: "Conceptual soundness asks whether the model's:", optionA: "Theory and design are appropriate", optionB: "Coupon is high", optionC: "Marketing is strong", optionD: "Dividend is stable", correctOption: "A", explanation: "Conceptual soundness evaluates the theory, assumptions and design.", orderIndex: 7 },
  { id: "frm-operational-risk-model-validation-q09", topicId: "frm-operational-risk-model-validation", text: "Model limitations are often addressed with:", optionA: "Conservative adjustments or overlays", optionB: "Ignoring them", optionC: "Higher leverage", optionD: "More marketing", correctOption: "A", explanation: "Known limitations are managed via conservative overlays and adjustments.", orderIndex: 8 },
  { id: "frm-operational-risk-model-validation-q10", topicId: "frm-operational-risk-model-validation", text: "Complex, AI-driven models generally:", optionA: "Increase model risk", optionB: "Eliminate risk", optionC: "Lower governance needs", optionD: "Guarantee accuracy", correctOption: "A", explanation: "Opaque, complex models raise model risk and validation demands.", orderIndex: 9 },
  { id: "frm-operational-risk-model-validation-q11", topicId: "frm-operational-risk-model-validation", text: "Benchmarking a model against alternatives is part of:", optionA: "Ongoing monitoring", optionB: "Marketing", optionC: "Tax review", optionD: "Dividend policy", correctOption: "A", explanation: "Benchmarking and process verification fall under ongoing monitoring.", orderIndex: 10 },
  { id: "frm-operational-risk-model-validation-q12", topicId: "frm-operational-risk-model-validation", text: "The regulatory guidance widely used for model risk management is:", optionA: "SR 11-7", optionB: "IFRS 9", optionC: "Basel I", optionD: "MiFID", correctOption: "A", explanation: "US SR 11-7 is the standard model-risk-management guidance.", orderIndex: 11 },

  // ── Third-Party & Outsourcing Risk ──
  { id: "frm-operational-risk-third-party-q01", topicId: "frm-operational-risk-third-party", text: "Outsourcing an activity transfers the work but not the:", optionA: "Accountability", optionB: "Coupon", optionC: "Dividend", optionD: "Convexity", correctOption: "A", explanation: "The firm remains accountable for outsourced activities.", orderIndex: 0 },
  { id: "frm-operational-risk-third-party-q02", topicId: "frm-operational-risk-third-party", text: "Many firms depending on one cloud provider creates:", optionA: "Concentration risk", optionB: "Diversification", optionC: "Lower risk", optionD: "Guaranteed uptime", correctOption: "A", explanation: "Shared reliance on a single provider is a concentration/systemic risk.", orderIndex: 1 },
  { id: "frm-operational-risk-third-party-q03", topicId: "frm-operational-risk-third-party", text: "Fourth-party risk refers to a vendor's:", optionA: "Own subcontractors", optionB: "Shareholders", optionC: "Auditors only", optionD: "Regulators", correctOption: "A", explanation: "Fourth-party risk is the risk from a vendor's subcontractors.", orderIndex: 2 },
  { id: "frm-operational-risk-third-party-q04", topicId: "frm-operational-risk-third-party", text: "Vendor due diligence should occur:", optionA: "Before onboarding", optionB: "Only after a failure", optionC: "Never", optionD: "After ten years", correctOption: "A", explanation: "Due diligence assesses a vendor before engaging them.", orderIndex: 3 },
  { id: "frm-operational-risk-third-party-q05", topicId: "frm-operational-risk-third-party", text: "Contracts with vendors should include SLAs, audit rights and:", optionA: "Exit clauses", optionB: "Dividends", optionC: "Coupons", optionD: "Convexity", correctOption: "A", explanation: "Clear service levels, audit rights and exit provisions manage outsourcing risk.", orderIndex: 4 },
  { id: "frm-operational-risk-third-party-q06", topicId: "frm-operational-risk-third-party", text: "A vendor failure that disrupts the firm is a ____ risk.", optionA: "Business continuity", optionB: "Coupon", optionC: "Currency", optionD: "Convexity", correctOption: "A", explanation: "Vendor outages threaten the firm's business continuity.", orderIndex: 5 },
  { id: "frm-operational-risk-third-party-q07", topicId: "frm-operational-risk-third-party", text: "Ongoing monitoring of a vendor tracks performance and:", optionA: "Risk", optionB: "Dividends", optionC: "Coupons", optionD: "Convexity", correctOption: "A", explanation: "Firms continually monitor vendor performance and emerging risks.", orderIndex: 6 },
  { id: "frm-operational-risk-third-party-q08", topicId: "frm-operational-risk-third-party", text: "Exit planning ensures the firm can:", optionA: "Substitute or bring the service in-house", optionB: "Ignore the vendor", optionC: "Raise dividends", optionD: "Avoid audits", correctOption: "A", explanation: "Exit/substitutability planning limits lock-in to a single provider.", orderIndex: 7 },
  { id: "frm-operational-risk-third-party-q09", topicId: "frm-operational-risk-third-party", text: "Regulators increasingly treat critical cloud providers as sources of:", optionA: "Systemic operational risk", optionB: "Dividend risk", optionC: "Coupon risk", optionD: "No risk", correctOption: "A", explanation: "Concentration in critical tech providers is viewed as systemic operational risk.", orderIndex: 8 },
  { id: "frm-operational-risk-third-party-q10", topicId: "frm-operational-risk-third-party", text: "Third-party cyber weaknesses can become the firm's:", optionA: "Attack surface", optionB: "Dividend", optionC: "Coupon", optionD: "Convexity", correctOption: "A", explanation: "Vendor vulnerabilities expand the firm's own attack surface.", orderIndex: 9 },
  { id: "frm-operational-risk-third-party-q11", topicId: "frm-operational-risk-third-party", text: "The vendor risk lifecycle begins with:", optionA: "Due diligence", optionB: "Termination", optionC: "A dividend", optionD: "An audit finding", correctOption: "A", explanation: "The lifecycle starts with pre-onboarding due diligence.", orderIndex: 10 },
  { id: "frm-operational-risk-third-party-q12", topicId: "frm-operational-risk-third-party", text: "A guiding principle of outsourcing risk is:", optionA: "You can outsource activity but not accountability", optionB: "Vendors bear all risk", optionC: "No oversight is needed", optionD: "Risk disappears", correctOption: "A", explanation: "The firm always retains accountability for outsourced functions.", orderIndex: 11 },

  // ── Conduct & Culture Risk ──
  { id: "frm-operational-risk-conduct-culture-q01", topicId: "frm-operational-risk-conduct-culture", text: "Conduct risk is the risk of harm from:", optionA: "Inappropriate behaviour toward customers/markets", optionB: "High liquidity", optionC: "Low volatility", optionD: "Diversification", correctOption: "A", explanation: "Conduct risk concerns misconduct harming clients or market integrity.", orderIndex: 0 },
  { id: "frm-operational-risk-conduct-culture-q02", topicId: "frm-operational-risk-conduct-culture", text: "LIBOR and FX rigging are examples of:", optionA: "Market manipulation (conduct risk)", optionB: "Liquidity risk", optionC: "Convexity", optionD: "Diversification", correctOption: "A", explanation: "Rate rigging is market manipulation — a major conduct-risk event.", orderIndex: 1 },
  { id: "frm-operational-risk-conduct-culture-q03", topicId: "frm-operational-risk-conduct-culture", text: "'Tone from the top' refers to:", optionA: "Leadership setting ethical standards", optionB: "The coupon", optionC: "Dividend policy", optionD: "The yield curve", correctOption: "A", explanation: "Senior leaders' behaviour shapes the firm's risk culture.", orderIndex: 2 },
  { id: "frm-operational-risk-conduct-culture-q04", topicId: "frm-operational-risk-conduct-culture", text: "A strong risk culture encourages employees to:", optionA: "Speak up without fear", optionB: "Hide problems", optionC: "Maximize volume only", optionD: "Ignore risk", correctOption: "A", explanation: "Good culture rewards raising concerns and does not punish messengers.", orderIndex: 3 },
  { id: "frm-operational-risk-conduct-culture-q05", topicId: "frm-operational-risk-conduct-culture", text: "The three lines of defence place risk and compliance in the:", optionA: "Second line", optionB: "First line", optionC: "Third line", optionD: "Fourth line", correctOption: "A", explanation: "Risk/compliance is the second line; business is first, audit is third.", orderIndex: 4 },
  { id: "frm-operational-risk-conduct-culture-q06", topicId: "frm-operational-risk-conduct-culture", text: "Internal audit represents the ____ line of defence.", optionA: "Third", optionB: "First", optionC: "Second", optionD: "Fourth", correctOption: "A", explanation: "Internal audit is the independent third line of defence.", orderIndex: 5 },
  { id: "frm-operational-risk-conduct-culture-q07", topicId: "frm-operational-risk-conduct-culture", text: "Mis-selling products to customers is a form of:", optionA: "Conduct risk", optionB: "Market risk", optionC: "Liquidity risk", optionD: "Convexity", correctOption: "A", explanation: "Selling unsuitable products harms customers — conduct risk.", orderIndex: 6 },
  { id: "frm-operational-risk-conduct-culture-q08", topicId: "frm-operational-risk-conduct-culture", text: "Poorly designed incentives can drive:", optionA: "Misconduct", optionB: "Better culture", optionC: "Lower risk", optionD: "Higher liquidity", correctOption: "A", explanation: "Incentives that reward volume over quality encourage misconduct.", orderIndex: 7 },
  { id: "frm-operational-risk-conduct-culture-q09", topicId: "frm-operational-risk-conduct-culture", text: "Conduct failures after 2008 led to large:", optionA: "Fines and reputational damage", optionB: "Dividends", optionC: "Coupons", optionD: "Tax refunds", correctOption: "A", explanation: "Conduct scandals produced enormous fines and reputational harm.", orderIndex: 8 },
  { id: "frm-operational-risk-conduct-culture-q10", topicId: "frm-operational-risk-conduct-culture", text: "Culture is difficult to measure but can be gauged with:", optionA: "Surveys and behavioural indicators", optionB: "Coupon rates", optionC: "Duration", optionD: "Convexity", correctOption: "A", explanation: "Surveys, complaints and conduct metrics proxy for culture.", orderIndex: 9 },
  { id: "frm-operational-risk-conduct-culture-q11", topicId: "frm-operational-risk-conduct-culture", text: "The first line of defence is the:", optionA: "Business (risk owners)", optionB: "Risk function", optionC: "Internal audit", optionD: "Regulator", correctOption: "A", explanation: "The business that takes risk is the first line of defence.", orderIndex: 10 },
  { id: "frm-operational-risk-conduct-culture-q12", topicId: "frm-operational-risk-conduct-culture", text: "Culture is often described as a root cause of many:", optionA: "Operational and conduct failures", optionB: "Interest-rate moves", optionC: "Currency pegs", optionD: "Dividend cuts", correctOption: "A", explanation: "Weak culture underlies many operational-risk and conduct events.", orderIndex: 11 },

  // ── Liquidity Regulation: LCR & NSFR ──
  { id: "frm-liquidity-risk-regulation-q01", topicId: "frm-liquidity-risk-regulation", text: "The LCR ensures a bank can survive a stress period of:", optionA: "30 days", optionB: "One year", optionC: "One day", optionD: "Ten years", correctOption: "A", explanation: "The Liquidity Coverage Ratio covers a 30-day acute stress scenario.", orderIndex: 0 },
  { id: "frm-liquidity-risk-regulation-q02", topicId: "frm-liquidity-risk-regulation", text: "The LCR is HQLA divided by:", optionA: "Net cash outflows over 30 days", optionB: "Total assets", optionC: "Equity", optionD: "Revenue", correctOption: "A", explanation: "LCR = HQLA / net 30-day cash outflows ≥ 100%.", orderIndex: 1 },
  { id: "frm-liquidity-risk-regulation-q03", topicId: "frm-liquidity-risk-regulation", text: "HQLA stands for high-quality liquid:", optionA: "Assets", optionB: "Accruals", optionC: "Allocations", optionD: "Accounts", correctOption: "A", explanation: "HQLA = high-quality liquid assets, the LCR numerator.", orderIndex: 2 },
  { id: "frm-liquidity-risk-regulation-q04", topicId: "frm-liquidity-risk-regulation", text: "The NSFR promotes funding stability over a horizon of:", optionA: "One year", optionB: "30 days", optionC: "One day", optionD: "Ten years", correctOption: "A", explanation: "The Net Stable Funding Ratio addresses structural funding over one year.", orderIndex: 3 },
  { id: "frm-liquidity-risk-regulation-q05", topicId: "frm-liquidity-risk-regulation", text: "The NSFR equals available stable funding divided by:", optionA: "Required stable funding", optionB: "HQLA", optionC: "Net outflows", optionD: "Equity", correctOption: "A", explanation: "NSFR = available stable funding / required stable funding ≥ 100%.", orderIndex: 4 },
  { id: "frm-liquidity-risk-regulation-q06", topicId: "frm-liquidity-risk-regulation", text: "Level 1 HQLA includes cash and:", optionA: "Government bonds", optionB: "Equities", optionC: "High-yield bonds", optionD: "Commodities", correctOption: "A", explanation: "Level 1 HQLA are the most liquid — cash and high-grade government bonds.", orderIndex: 5 },
  { id: "frm-liquidity-risk-regulation-q07", topicId: "frm-liquidity-risk-regulation", text: "Both LCR and NSFR were responses to the:", optionA: "2007–08 funding runs", optionB: "Dot-com bubble", optionC: "1970s oil shock", optionD: "A single default", correctOption: "A", explanation: "The liquidity standards addressed the funding runs of the 2007–08 crisis.", orderIndex: 6 },
  { id: "frm-liquidity-risk-regulation-q08", topicId: "frm-liquidity-risk-regulation", text: "The LCR addresses ____ resilience.", optionA: "Short-term", optionB: "Structural (long-term)", optionC: "Equity", optionD: "Dividend", correctOption: "A", explanation: "The LCR targets short-term (30-day) liquidity resilience.", orderIndex: 7 },
  { id: "frm-liquidity-risk-regulation-q09", topicId: "frm-liquidity-risk-regulation", text: "The NSFR reduces reliance on:", optionA: "Short-term wholesale funding", optionB: "Long-term deposits", optionC: "Equity", optionD: "Retained earnings", correctOption: "A", explanation: "The NSFR discourages excessive short-term wholesale funding.", orderIndex: 8 },
  { id: "frm-liquidity-risk-regulation-q10", topicId: "frm-liquidity-risk-regulation", text: "Level 2 HQLA are subject to:", optionA: "Haircuts", optionB: "No adjustment", optionC: "A bonus", optionD: "Dividends", correctOption: "A", explanation: "Lower-quality Level 2 HQLA receive haircuts in the LCR.", orderIndex: 9 },
  { id: "frm-liquidity-risk-regulation-q11", topicId: "frm-liquidity-risk-regulation", text: "Both ratios must generally be at least:", optionA: "100%", optionB: "50%", optionC: "8%", optionD: "0%", correctOption: "A", explanation: "The LCR and NSFR each require a minimum of 100%.", orderIndex: 10 },
  { id: "frm-liquidity-risk-regulation-q12", topicId: "frm-liquidity-risk-regulation", text: "These liquidity standards were introduced under:", optionA: "Basel III", optionB: "Basel I", optionC: "IFRS 9", optionD: "MiFID", correctOption: "A", explanation: "Basel III introduced the LCR and NSFR liquidity standards.", orderIndex: 11 },

  // ── Intraday Liquidity & Collateral ──
  { id: "frm-liquidity-risk-intraday-q01", topicId: "frm-liquidity-risk-intraday", text: "Intraday liquidity is the funding needed to settle payments:", optionA: "Within the day", optionB: "Over a year", optionC: "In a decade", optionD: "Never", correctOption: "A", explanation: "Intraday liquidity covers payment obligations as they fall due during the day.", orderIndex: 0 },
  { id: "frm-liquidity-risk-intraday-q02", topicId: "frm-liquidity-risk-intraday", text: "An intraday shortfall can cause:", optionA: "Settlement failures", optionB: "Higher dividends", optionC: "Lower coupons", optionD: "More convexity", correctOption: "A", explanation: "Failing to fund payments intraday can trigger settlement failures.", orderIndex: 1 },
  { id: "frm-liquidity-risk-intraday-q03", topicId: "frm-liquidity-risk-intraday", text: "Real-time gross settlement systems are known as:", optionA: "RTGS", optionB: "IRB", optionC: "LCR", optionD: "CSA", correctOption: "A", explanation: "RTGS systems settle payments individually in real time.", orderIndex: 2 },
  { id: "frm-liquidity-risk-intraday-q04", topicId: "frm-liquidity-risk-intraday", text: "Collateral pledged for liquidity is typically:", optionA: "HQLA", optionB: "Equities only", optionC: "Commodities", optionD: "Real estate", correctOption: "A", explanation: "High-quality liquid assets are pledged to central banks and CCPs.", orderIndex: 3 },
  { id: "frm-liquidity-risk-intraday-q05", topicId: "frm-liquidity-risk-intraday", text: "Collateral optimisation seeks to allocate the:", optionA: "Cheapest eligible collateral", optionB: "Most expensive assets", optionC: "Equities only", optionD: "No collateral", correctOption: "A", explanation: "Optimisation posts the least valuable eligible collateral to conserve HQLA.", orderIndex: 4 },
  { id: "frm-liquidity-risk-intraday-q06", topicId: "frm-liquidity-risk-intraday", text: "Margin calls create intraday funding needs especially in:", optionA: "Volatile markets", optionB: "Calm markets", optionC: "No markets", optionD: "Closed markets", correctOption: "A", explanation: "Volatility drives variation-margin calls, spiking intraday liquidity needs.", orderIndex: 5 },
  { id: "frm-liquidity-risk-intraday-q07", topicId: "frm-liquidity-risk-intraday", text: "A shortfall at one bank can cascade to:", optionA: "Counterparties", optionB: "Dividends", optionC: "Coupons", optionD: "Convexity", correctOption: "A", explanation: "Settlement failures propagate to counterparties, a systemic concern.", orderIndex: 6 },
  { id: "frm-liquidity-risk-intraday-q08", topicId: "frm-liquidity-risk-intraday", text: "BCBS monitoring tools track daily maximum liquidity:", optionA: "Usage", optionB: "Coupon", optionC: "Dividend", optionD: "Convexity", correctOption: "A", explanation: "Intraday monitoring includes daily maximum liquidity usage.", orderIndex: 7 },
  { id: "frm-liquidity-risk-intraday-q09", topicId: "frm-liquidity-risk-intraday", text: "CLS is a system used for:", optionA: "FX settlement", optionB: "Equity dividends", optionC: "Tax filing", optionD: "Bond coupons only", correctOption: "A", explanation: "CLS settles foreign-exchange transactions, reducing settlement risk.", orderIndex: 8 },
  { id: "frm-liquidity-risk-intraday-q10", topicId: "frm-liquidity-risk-intraday", text: "Time-specific obligations are payments that must be made:", optionA: "By a set time of day", optionB: "Whenever convenient", optionC: "Annually", optionD: "Never", correctOption: "A", explanation: "Some obligations have hard intraday deadlines, adding liquidity pressure.", orderIndex: 9 },
  { id: "frm-liquidity-risk-intraday-q11", topicId: "frm-liquidity-risk-intraday", text: "Initial and variation margin are forms of:", optionA: "Collateral", optionB: "Dividend", optionC: "Coupon", optionD: "Convexity", correctOption: "A", explanation: "Margin is collateral posted to cover counterparty exposure.", orderIndex: 10 },
  { id: "frm-liquidity-risk-intraday-q12", topicId: "frm-liquidity-risk-intraday", text: "Managing intraday liquidity is now a core function of:", optionA: "Treasury", optionB: "Marketing", optionC: "Internal audit only", optionD: "The board only", correctOption: "A", explanation: "Treasury manages intraday liquidity and collateral.", orderIndex: 11 },

  // ── Contingency Funding Planning ──
  { id: "frm-liquidity-risk-contingency-funding-q01", topicId: "frm-liquidity-risk-contingency-funding", text: "A Contingency Funding Plan is a playbook for a:", optionA: "Liquidity crisis", optionB: "Marketing campaign", optionC: "Dividend increase", optionD: "Tax audit", correctOption: "A", explanation: "The CFP prepares the firm to respond to a liquidity stress event.", orderIndex: 0 },
  { id: "frm-liquidity-risk-contingency-funding-q02", topicId: "frm-liquidity-risk-contingency-funding", text: "Early-warning indicators include rising funding costs and:", optionA: "Deposit outflows", optionB: "Higher dividends", optionC: "Lower coupons", optionD: "More convexity", correctOption: "A", explanation: "EWIs like deposit flight and widening spreads signal emerging stress.", orderIndex: 1 },
  { id: "frm-liquidity-risk-contingency-funding-q03", topicId: "frm-liquidity-risk-contingency-funding", text: "A CFP should specify liquidity sources and:", optionA: "The order in which to tap them", optionB: "Dividend policy", optionC: "Marketing plans", optionD: "Tax rates", correctOption: "A", explanation: "The plan sequences which funding sources to use and when.", orderIndex: 2 },
  { id: "frm-liquidity-risk-contingency-funding-q04", topicId: "frm-liquidity-risk-contingency-funding", text: "The first line of defence in a liquidity crisis is the:", optionA: "Liquidity buffer of HQLA", optionB: "Dividend", optionC: "Coupon", optionD: "Equity issuance", correctOption: "A", explanation: "A buffer of high-quality liquid assets is the primary defence.", orderIndex: 3 },
  { id: "frm-liquidity-risk-contingency-funding-q05", topicId: "frm-liquidity-risk-contingency-funding", text: "Funding should be diversified by source, tenor and:", optionA: "Currency", optionB: "Coupon", optionC: "Dividend", optionD: "Sector only", correctOption: "A", explanation: "Diversifying funding across currency, tenor and source avoids concentration.", orderIndex: 4 },
  { id: "frm-liquidity-risk-contingency-funding-q06", topicId: "frm-liquidity-risk-contingency-funding", text: "CFP scenarios include idiosyncratic, market-wide and:", optionA: "Combined stresses", optionB: "No stress", optionC: "Dividend growth", optionD: "Coupon reset", correctOption: "A", explanation: "Plans test firm-specific, systemic and combined liquidity scenarios.", orderIndex: 5 },
  { id: "frm-liquidity-risk-contingency-funding-q07", topicId: "frm-liquidity-risk-contingency-funding", text: "Central-bank facilities are a:", optionA: "Backstop liquidity source", optionB: "Dividend", optionC: "Marketing tool", optionD: "Tax shelter", correctOption: "A", explanation: "Central-bank facilities provide backstop funding in stress.", orderIndex: 6 },
  { id: "frm-liquidity-risk-contingency-funding-q08", topicId: "frm-liquidity-risk-contingency-funding", text: "A CFP must define escalation triggers and:", optionA: "Roles/communication", optionB: "Dividend dates", optionC: "Coupon schedules", optionD: "Storage costs", correctOption: "A", explanation: "Governance in the CFP sets roles, escalation and communication.", orderIndex: 7 },
  { id: "frm-liquidity-risk-contingency-funding-q09", topicId: "frm-liquidity-risk-contingency-funding", text: "The CFP should be:", optionA: "Regularly tested", optionB: "Written once and shelved", optionC: "Kept secret from management", optionD: "Ignored", correctOption: "A", explanation: "Regular testing keeps the plan effective and current.", orderIndex: 8 },
  { id: "frm-liquidity-risk-contingency-funding-q10", topicId: "frm-liquidity-risk-contingency-funding", text: "Widening CDS spreads on the firm are an:", optionA: "Early-warning indicator", optionB: "Dividend signal", optionC: "Coupon change", optionD: "Tax event", correctOption: "A", explanation: "Rising CDS spreads warn of deteriorating funding conditions.", orderIndex: 9 },
  { id: "frm-liquidity-risk-contingency-funding-q11", topicId: "frm-liquidity-risk-contingency-funding", text: "Selling assets and secured borrowing are examples of CFP:", optionA: "Action plans", optionB: "Dividends", optionC: "Coupons", optionD: "Marketing", correctOption: "A", explanation: "The action plans list funding actions like asset sales and secured borrowing.", orderIndex: 10 },
  { id: "frm-liquidity-risk-contingency-funding-q12", topicId: "frm-liquidity-risk-contingency-funding", text: "The CFP is typically integrated with:", optionA: "Recovery and resolution planning", optionB: "Marketing strategy", optionC: "Dividend policy", optionD: "Tax filing", correctOption: "A", explanation: "Contingency funding links to broader recovery/resolution planning.", orderIndex: 11 },

  // ── Portfolio Construction & Optimization ──
  { id: "frm-investment-risk-portfolio-construction-q01", topicId: "frm-investment-risk-portfolio-construction", text: "Mean-variance optimization traces the:", optionA: "Efficient frontier", optionB: "Yield curve", optionC: "Coupon ladder", optionD: "Credit curve", correctOption: "A", explanation: "MVO maximises return for given risk, generating the efficient frontier.", orderIndex: 0 },
  { id: "frm-investment-risk-portfolio-construction-q02", topicId: "frm-investment-risk-portfolio-construction", text: "MVO is highly sensitive to errors in:", optionA: "Expected return estimates", optionB: "Ticker symbols", optionC: "Custodian choice", optionD: "Coupon dates", correctOption: "A", explanation: "MVO is notoriously sensitive to expected-return inputs ('error maximisation').", orderIndex: 1 },
  { id: "frm-investment-risk-portfolio-construction-q03", topicId: "frm-investment-risk-portfolio-construction", text: "The Black–Litterman model blends investor views with a:", optionA: "Market equilibrium prior", optionB: "Random guess", optionC: "Coupon", optionD: "Dividend", correctOption: "A", explanation: "Black–Litterman combines equilibrium returns with the investor's views.", orderIndex: 2 },
  { id: "frm-investment-risk-portfolio-construction-q04", topicId: "frm-investment-risk-portfolio-construction", text: "Constraints in optimization help reduce:", optionA: "Extreme allocations", optionB: "Diversification", optionC: "Returns", optionD: "Liquidity", correctOption: "A", explanation: "Position and turnover constraints prevent unstable, extreme weights.", orderIndex: 3 },
  { id: "frm-investment-risk-portfolio-construction-q05", topicId: "frm-investment-risk-portfolio-construction", text: "Risk parity allocates by:", optionA: "Risk contribution rather than capital", optionB: "Capital only", optionC: "Coupon", optionD: "Ticker order", correctOption: "A", explanation: "Risk parity equalises each asset's contribution to portfolio risk.", orderIndex: 4 },
  { id: "frm-investment-risk-portfolio-construction-q06", topicId: "frm-investment-risk-portfolio-construction", text: "Resampling is a technique to make MVO weights more:", optionA: "Stable", optionB: "Extreme", optionC: "Random", optionD: "Concentrated", correctOption: "A", explanation: "Resampling averages many optimisations to produce more stable allocations.", orderIndex: 5 },
  { id: "frm-investment-risk-portfolio-construction-q07", topicId: "frm-investment-risk-portfolio-construction", text: "Transaction costs and liquidity should be:", optionA: "Included in the optimisation", optionB: "Always ignored", optionC: "Maximised", optionD: "Left to marketing", correctOption: "A", explanation: "Realistic construction accounts for costs and liquidity.", orderIndex: 6 },
  { id: "frm-investment-risk-portfolio-construction-q08", topicId: "frm-investment-risk-portfolio-construction", text: "Tracking-error budgets set limits on:", optionA: "Active risk versus a benchmark", optionB: "Coupon", optionC: "Dividend", optionD: "Convexity", correctOption: "A", explanation: "A tracking-error budget caps deviation from the benchmark.", orderIndex: 7 },
  { id: "frm-investment-risk-portfolio-construction-q09", topicId: "frm-investment-risk-portfolio-construction", text: "'Error maximisation' describes MVO's tendency to:", optionA: "Overweight assets with overestimated returns", optionB: "Underweight everything", optionC: "Ignore returns", optionD: "Equalise weights", correctOption: "A", explanation: "MVO loads onto assets whose returns are most overestimated.", orderIndex: 8 },
  { id: "frm-investment-risk-portfolio-construction-q10", topicId: "frm-investment-risk-portfolio-construction", text: "Good construction balances expected alpha against:", optionA: "Estimation risk and costs", optionB: "Dividend yield", optionC: "Coupon rate", optionD: "Storage cost", correctOption: "A", explanation: "Construction weighs alpha against input uncertainty and implementation costs.", orderIndex: 9 },
  { id: "frm-investment-risk-portfolio-construction-q11", topicId: "frm-investment-risk-portfolio-construction", text: "Black–Litterman produces weights that are typically:", optionA: "More diversified and intuitive", optionB: "More extreme", optionC: "Random", optionD: "All in one asset", correctOption: "A", explanation: "Anchoring to equilibrium yields more balanced, intuitive allocations.", orderIndex: 10 },
  { id: "frm-investment-risk-portfolio-construction-q12", topicId: "frm-investment-risk-portfolio-construction", text: "The efficient frontier shows the best return for each level of:", optionA: "Risk", optionB: "Coupon", optionC: "Dividend", optionD: "Duration", correctOption: "A", explanation: "The frontier plots maximum expected return per unit of risk.", orderIndex: 11 },

  // ── Risk Monitoring & Performance Attribution ──
  { id: "frm-investment-risk-attribution-q01", topicId: "frm-investment-risk-attribution", text: "Brinson attribution splits active return into allocation, selection, and:", optionA: "Interaction", optionB: "Coupon", optionC: "Duration", optionD: "Currency only", correctOption: "A", explanation: "Brinson decomposes active return into allocation, selection and interaction.", orderIndex: 0 },
  { id: "frm-investment-risk-attribution-q02", topicId: "frm-investment-risk-attribution", text: "Factor-based attribution decomposes return into factor exposures times:", optionA: "Factor returns plus specific return", optionB: "Coupons", optionC: "Dividends", optionD: "Storage costs", correctOption: "A", explanation: "Factor attribution = exposures × factor returns + idiosyncratic return.", orderIndex: 1 },
  { id: "frm-investment-risk-attribution-q03", topicId: "frm-investment-risk-attribution", text: "Ex-ante risk is the ____ risk.", optionA: "Predicted", optionB: "Realised", optionC: "Historical only", optionD: "Zero", correctOption: "A", explanation: "Ex-ante is forecast/predicted risk; ex-post is realised.", orderIndex: 2 },
  { id: "frm-investment-risk-attribution-q04", topicId: "frm-investment-risk-attribution", text: "Style drift is when a manager:", optionA: "Deviates from the stated mandate", optionB: "Follows the mandate", optionC: "Pays a dividend", optionD: "Lowers fees", correctOption: "A", explanation: "Style drift is unintended deviation from the declared investment style.", orderIndex: 3 },
  { id: "frm-investment-risk-attribution-q05", topicId: "frm-investment-risk-attribution", text: "The information ratio is active return divided by:", optionA: "Active risk", optionB: "Total risk", optionC: "Beta", optionD: "The risk-free rate", correctOption: "A", explanation: "IR = active return / active risk (tracking error).", orderIndex: 4 },
  { id: "frm-investment-risk-attribution-q06", topicId: "frm-investment-risk-attribution", text: "The allocation effect measures the impact of:", optionA: "Sector over/underweighting", optionB: "Security picks", optionC: "Currency hedging", optionD: "Coupons", correctOption: "A", explanation: "Allocation captures the value from sector weighting decisions.", orderIndex: 5 },
  { id: "frm-investment-risk-attribution-q07", topicId: "frm-investment-risk-attribution", text: "The selection effect measures the impact of:", optionA: "Security choices within sectors", optionB: "Sector weights", optionC: "Total contributions", optionD: "The benchmark", correctOption: "A", explanation: "Selection isolates value from picking securities within sectors.", orderIndex: 6 },
  { id: "frm-investment-risk-attribution-q08", topicId: "frm-investment-risk-attribution", text: "Comparing ex-ante to ex-post risk helps detect:", optionA: "Model or exposure problems", optionB: "Dividend timing", optionC: "Coupon dates", optionD: "Storage costs", correctOption: "A", explanation: "Large gaps between predicted and realised risk flag issues to investigate.", orderIndex: 7 },
  { id: "frm-investment-risk-attribution-q09", topicId: "frm-investment-risk-attribution", text: "Monitoring concentrations helps control:", optionA: "Unintended risk exposures", optionB: "Dividends", optionC: "Coupons", optionD: "Convexity", correctOption: "A", explanation: "Tracking concentrations prevents hidden risk build-up.", orderIndex: 8 },
  { id: "frm-investment-risk-attribution-q10", topicId: "frm-investment-risk-attribution", text: "Attribution links results back to:", optionA: "Investment decisions", optionB: "Tax filings", optionC: "Custody", optionD: "Marketing", correctOption: "A", explanation: "Attribution supports accountability by tracing returns to decisions.", orderIndex: 9 },
  { id: "frm-investment-risk-attribution-q11", topicId: "frm-investment-risk-attribution", text: "A high information ratio signals strong:", optionA: "Active management skill", optionB: "Liquidity", optionC: "Tax efficiency", optionD: "Custody", correctOption: "A", explanation: "A high IR reflects skillful active return per unit of active risk.", orderIndex: 10 },
  { id: "frm-investment-risk-attribution-q12", topicId: "frm-investment-risk-attribution", text: "Realised risk exceeding the risk budget warrants:", optionA: "Investigation", optionB: "Ignoring it", optionC: "A dividend", optionD: "A coupon", correctOption: "A", explanation: "Breaching the risk budget should prompt investigation and action.", orderIndex: 11 },

  // ── Illiquid Assets & Alternative Risk ──
  { id: "frm-investment-risk-illiquid-assets-q01", topicId: "frm-investment-risk-illiquid-assets", text: "Appraisal-based valuations tend to:", optionA: "Smooth returns and understate volatility", optionB: "Overstate volatility", optionC: "Be real-time", optionD: "Eliminate risk", correctOption: "A", explanation: "Infrequent appraisals smooth returns, understating true volatility and correlation.", orderIndex: 0 },
  { id: "frm-investment-risk-illiquid-assets-q02", topicId: "frm-investment-risk-illiquid-assets", text: "Return smoothing tends to ____ the Sharpe ratio of illiquid assets.", optionA: "Overstate", optionB: "Understate", optionC: "Zero out", optionD: "Not affect", correctOption: "A", explanation: "Understated volatility inflates the reported Sharpe ratio.", orderIndex: 1 },
  { id: "frm-investment-risk-illiquid-assets-q03", topicId: "frm-investment-risk-illiquid-assets", text: "The J-curve describes early ____ returns in private funds.", optionA: "Negative", optionB: "Positive", optionC: "Zero", optionD: "Guaranteed", correctOption: "A", explanation: "Fees and early markdowns create initial negative returns before later gains.", orderIndex: 2 },
  { id: "frm-investment-risk-illiquid-assets-q04", topicId: "frm-investment-risk-illiquid-assets", text: "Illiquid assets require accounting for:", optionA: "Drawdowns and capital calls", optionB: "Coupons only", optionC: "Dividends only", optionD: "No cash flows", correctOption: "A", explanation: "Capital is committed and called over time, requiring liquidity planning.", orderIndex: 3 },
  { id: "frm-investment-risk-illiquid-assets-q05", topicId: "frm-investment-risk-illiquid-assets", text: "In stress, illiquid-asset correlations to public markets tend to:", optionA: "Rise", optionB: "Fall to zero", optionC: "Stay constant", optionD: "Turn strongly negative", correctOption: "A", explanation: "Correlations increase in crises, reducing diversification.", orderIndex: 4 },
  { id: "frm-investment-risk-illiquid-assets-q06", topicId: "frm-investment-risk-illiquid-assets", text: "Illiquid allocations should be sized to the investor's:", optionA: "Ability to bear illiquidity", optionB: "Favourite sector", optionC: "Custodian", optionD: "Tax bracket only", correctOption: "A", explanation: "Illiquid holdings must match the investor's liquidity horizon and needs.", orderIndex: 5 },
  { id: "frm-investment-risk-illiquid-assets-q07", topicId: "frm-investment-risk-illiquid-assets", text: "Downside measures for illiquid assets include max drawdown and:", optionA: "CVaR", optionB: "Coupon", optionC: "Duration", optionD: "Dividend yield", correctOption: "A", explanation: "CVaR and max drawdown better capture non-normal illiquid-asset risk than Sharpe alone.", orderIndex: 6 },
  { id: "frm-investment-risk-illiquid-assets-q08", topicId: "frm-investment-risk-illiquid-assets", text: "The illiquidity premium is:", optionA: "Compensation for bearing illiquidity", optionB: "A free return", optionC: "A guaranteed gain", optionD: "A tax credit", correctOption: "A", explanation: "The premium rewards investors for accepting illiquidity, not a free lunch.", orderIndex: 7 },
  { id: "frm-investment-risk-illiquid-assets-q09", topicId: "frm-investment-risk-illiquid-assets", text: "Stale pricing can distort:", optionA: "Risk metrics", optionB: "Coupons", optionC: "Dividends", optionD: "Storage costs", correctOption: "A", explanation: "Infrequent, outdated marks bias volatility and correlation estimates.", orderIndex: 8 },
  { id: "frm-investment-risk-illiquid-assets-q10", topicId: "frm-investment-risk-illiquid-assets", text: "Commitment pacing models the flow of:", optionA: "Capital calls and distributions over time", optionB: "Coupons", optionC: "Dividends", optionD: "Convexity", correctOption: "A", explanation: "Pacing plans capital deployment and distributions to manage liquidity.", orderIndex: 9 },
  { id: "frm-investment-risk-illiquid-assets-q11", topicId: "frm-investment-risk-illiquid-assets", text: "Using only the Sharpe ratio for illiquid assets can be:", optionA: "Misleading due to non-normal returns", optionB: "Perfectly reliable", optionC: "Required by law", optionD: "Tax-efficient", correctOption: "A", explanation: "Sharpe assumes normality, which illiquid assets violate.", orderIndex: 10 },
  { id: "frm-investment-risk-illiquid-assets-q12", topicId: "frm-investment-risk-illiquid-assets", text: "Private equity, real estate and private credit are examples of:", optionA: "Illiquid alternatives", optionB: "Money-market funds", optionC: "Treasury bills", optionD: "Listed equities", correctOption: "A", explanation: "These are illiquid alternative asset classes requiring special risk treatment.", orderIndex: 11 },

  // ── Fintech & Financial Innovation ──
  { id: "frm-current-issues-fintech-q01", topicId: "frm-current-issues-fintech", text: "Fintech applies ____ to financial services.", optionA: "Technology", optionB: "Only regulation", optionC: "Coupons", optionD: "Dividends", correctOption: "A", explanation: "Fintech uses technology to reshape financial services.", orderIndex: 0 },
  { id: "frm-current-issues-fintech-q02", topicId: "frm-current-issues-fintech", text: "Robo-advisers automate:", optionA: "Investment advice", optionB: "Bond coupons", optionC: "Tax audits", optionD: "Storage", correctOption: "A", explanation: "Robo-advisers deliver algorithm-driven investment advice.", orderIndex: 1 },
  { id: "frm-current-issues-fintech-q03", topicId: "frm-current-issues-fintech", text: "DeFi stands for:", optionA: "Decentralised finance", optionB: "Deferred finance", optionC: "Default finance", optionD: "Dividend finance", correctOption: "A", explanation: "DeFi is decentralised finance built on blockchains.", orderIndex: 2 },
  { id: "frm-current-issues-fintech-q04", topicId: "frm-current-issues-fintech", text: "Fintech raises which operational risk in particular?", optionA: "Cyber risk", optionB: "Coupon risk", optionC: "Convexity", optionD: "Dividend risk", correctOption: "A", explanation: "Digital delivery increases cyber and operational risk.", orderIndex: 3 },
  { id: "frm-current-issues-fintech-q05", topicId: "frm-current-issues-fintech", text: "Regulatory sandboxes let firms:", optionA: "Test innovations under supervision", optionB: "Avoid all rules", optionC: "Skip audits", optionD: "Pay no tax", correctOption: "A", explanation: "Sandboxes allow supervised experimentation with new products.", orderIndex: 4 },
  { id: "frm-current-issues-fintech-q06", topicId: "frm-current-issues-fintech", text: "Regtech helps firms with:", optionA: "Compliance", optionB: "Marketing", optionC: "Coupons", optionD: "Dividends", correctOption: "A", explanation: "Regtech applies technology to regulatory compliance.", orderIndex: 5 },
  { id: "frm-current-issues-fintech-q07", topicId: "frm-current-issues-fintech", text: "Disintermediation means fintech firms:", optionA: "Bypass traditional intermediaries", optionB: "Add more middlemen", optionC: "Raise coupons", optionD: "Lower dividends", correctOption: "A", explanation: "Fintech can remove traditional intermediaries from transactions.", orderIndex: 6 },
  { id: "frm-current-issues-fintech-q08", topicId: "frm-current-issues-fintech", text: "A benefit of fintech is greater financial:", optionA: "Inclusion", optionB: "Exclusion", optionC: "Coupon risk", optionD: "Convexity", correctOption: "A", explanation: "Fintech can expand access to financial services (inclusion).", orderIndex: 7 },
  { id: "frm-current-issues-fintech-q09", topicId: "frm-current-issues-fintech", text: "Big data and AI are used in fintech for:", optionA: "Credit scoring and fraud detection", optionB: "Bond coupons", optionC: "Storage", optionD: "Dividends", correctOption: "A", explanation: "AI/big data power credit decisions and fraud detection.", orderIndex: 8 },
  { id: "frm-current-issues-fintech-q10", topicId: "frm-current-issues-fintech", text: "Concentration in tech platforms raises concern about:", optionA: "Systemic risk", optionB: "Higher dividends", optionC: "Lower coupons", optionD: "More convexity", correctOption: "A", explanation: "Reliance on a few platforms can create systemic fragility.", orderIndex: 9 },
  { id: "frm-current-issues-fintech-q11", topicId: "frm-current-issues-fintech", text: "Regulatory arbitrage occurs when innovation:", optionA: "Outpaces the rules", optionB: "Follows the rules exactly", optionC: "Eliminates risk", optionD: "Raises coupons", correctOption: "A", explanation: "Gaps arise when innovation moves faster than regulation.", orderIndex: 10 },
  { id: "frm-current-issues-fintech-q12", topicId: "frm-current-issues-fintech", text: "Fintech creates both efficiency gains and new:", optionA: "Risk-management challenges", optionB: "Coupons", optionC: "Dividends", optionD: "Storage costs", correctOption: "A", explanation: "Innovation brings efficiency plus novel risks to manage.", orderIndex: 11 },

  // ── Cyber & Operational Resilience ──
  { id: "frm-current-issues-operational-resilience-q01", topicId: "frm-current-issues-operational-resilience", text: "Operational resilience is the ability to deliver critical operations through:", optionA: "Disruption", optionB: "Marketing", optionC: "Dividends", optionD: "Coupons", correctOption: "A", explanation: "Resilience is withstanding and recovering from disruptions.", orderIndex: 0 },
  { id: "frm-current-issues-operational-resilience-q02", topicId: "frm-current-issues-operational-resilience", text: "The NIST framework's functions include Identify, Protect, Detect, Respond and:", optionA: "Recover", optionB: "Retire", optionC: "Refinance", optionD: "Reinvest", correctOption: "A", explanation: "NIST: Identify, Protect, Detect, Respond, Recover.", orderIndex: 1 },
  { id: "frm-current-issues-operational-resilience-q03", topicId: "frm-current-issues-operational-resilience", text: "Impact tolerance defines the maximum tolerable:", optionA: "Disruption to a service", optionB: "Coupon", optionC: "Dividend", optionD: "Convexity", correctOption: "A", explanation: "Impact tolerance sets the limit of acceptable disruption to an important service.", orderIndex: 2 },
  { id: "frm-current-issues-operational-resilience-q04", topicId: "frm-current-issues-operational-resilience", text: "Ransomware is a type of:", optionA: "Cyber threat", optionB: "Coupon", optionC: "Dividend", optionD: "Convexity", correctOption: "A", explanation: "Ransomware is a cyber attack that encrypts data for ransom.", orderIndex: 3 },
  { id: "frm-current-issues-operational-resilience-q05", topicId: "frm-current-issues-operational-resilience", text: "RTO stands for recovery time:", optionA: "Objective", optionB: "Order", optionC: "Option", optionD: "Overlay", correctOption: "A", explanation: "RTO is the recovery time objective — the target time to restore a service.", orderIndex: 4 },
  { id: "frm-current-issues-operational-resilience-q06", topicId: "frm-current-issues-operational-resilience", text: "RPO stands for recovery point:", optionA: "Objective", optionB: "Order", optionC: "Option", optionD: "Overlay", correctOption: "A", explanation: "RPO is the recovery point objective — the maximum tolerable data loss.", orderIndex: 5 },
  { id: "frm-current-issues-operational-resilience-q07", topicId: "frm-current-issues-operational-resilience", text: "Resilience assumes that disruptions:", optionA: "Will happen and must be withstood", optionB: "Never happen", optionC: "Are impossible", optionD: "Raise dividends", correctOption: "A", explanation: "Resilience presumes disruptions occur; the goal is to withstand and recover.", orderIndex: 6 },
  { id: "frm-current-issues-operational-resilience-q08", topicId: "frm-current-issues-operational-resilience", text: "A DDoS attack aims to:", optionA: "Overwhelm systems and deny service", optionB: "Pay dividends", optionC: "Lower coupons", optionD: "Raise convexity", correctOption: "A", explanation: "Distributed denial-of-service attacks flood systems to deny access.", orderIndex: 7 },
  { id: "frm-current-issues-operational-resilience-q09", topicId: "frm-current-issues-operational-resilience", text: "Firms first identify their important business:", optionA: "Services", optionB: "Coupons", optionC: "Dividends", optionD: "Sectors", correctOption: "A", explanation: "Resilience starts by identifying important business services and mapping dependencies.", orderIndex: 8 },
  { id: "frm-current-issues-operational-resilience-q10", topicId: "frm-current-issues-operational-resilience", text: "Supply-chain attacks exploit:", optionA: "Third-party/vendor weaknesses", optionB: "High dividends", optionC: "Low coupons", optionD: "Convexity", correctOption: "A", explanation: "Supply-chain attacks target vendors to reach the primary firm.", orderIndex: 9 },
  { id: "frm-current-issues-operational-resilience-q11", topicId: "frm-current-issues-operational-resilience", text: "Scenario testing checks whether the firm stays within its:", optionA: "Impact tolerances", optionB: "Dividend policy", optionC: "Coupon schedule", optionD: "Tax bracket", correctOption: "A", explanation: "Severe-but-plausible scenarios test whether disruption stays within tolerance.", orderIndex: 10 },
  { id: "frm-current-issues-operational-resilience-q12", topicId: "frm-current-issues-operational-resilience", text: "Regulators now treat operational resilience as:", optionA: "A supervisory priority", optionB: "Irrelevant", optionC: "A marketing task", optionD: "Optional", correctOption: "A", explanation: "Operational resilience is a supervisory priority alongside financial resilience.", orderIndex: 11 },

  // ── CBDCs & Payment Innovation ──
  { id: "frm-current-issues-cbdc-q01", topicId: "frm-current-issues-cbdc", text: "A CBDC is a digital form of a nation's:", optionA: "Fiat money issued by the central bank", optionB: "Corporate stock", optionC: "Commodity", optionD: "Bond coupon", correctOption: "A", explanation: "A central bank digital currency is central-bank-issued digital fiat money.", orderIndex: 0 },
  { id: "frm-current-issues-cbdc-q02", topicId: "frm-current-issues-cbdc", text: "A retail CBDC is intended for:", optionA: "The general public", optionB: "Only interbank settlement", optionC: "Central banks only", optionD: "Governments only", correctOption: "A", explanation: "Retail CBDCs are for public use, like digital cash.", orderIndex: 1 },
  { id: "frm-current-issues-cbdc-q03", topicId: "frm-current-issues-cbdc", text: "A wholesale CBDC is used for:", optionA: "Interbank settlement", optionB: "Retail shopping", optionC: "Payroll only", optionD: "Tax refunds", correctOption: "A", explanation: "Wholesale CBDCs serve interbank/settlement purposes.", orderIndex: 2 },
  { id: "frm-current-issues-cbdc-q04", topicId: "frm-current-issues-cbdc", text: "A key financial-stability risk of CBDCs is:", optionA: "Disintermediation of banks", optionB: "Higher coupons", optionC: "Lower dividends", optionD: "More convexity", correctOption: "A", explanation: "Deposits shifting to CBDC could disintermediate banks, reducing their funding.", orderIndex: 3 },
  { id: "frm-current-issues-cbdc-q05", topicId: "frm-current-issues-cbdc", text: "To limit disintermediation, CBDC designs often include:", optionA: "Holding limits", optionB: "Unlimited balances", optionC: "Coupons", optionD: "Dividends", correctOption: "A", explanation: "Caps on individual holdings help limit deposit flight from banks.", orderIndex: 4 },
  { id: "frm-current-issues-cbdc-q06", topicId: "frm-current-issues-cbdc", text: "In a crisis, a CBDC could accelerate:", optionA: "Bank runs (flight to safety)", optionB: "Dividend growth", optionC: "Coupon payments", optionD: "Storage", correctOption: "A", explanation: "Instant digital flight to a risk-free CBDC could speed up bank runs.", orderIndex: 5 },
  { id: "frm-current-issues-cbdc-q07", topicId: "frm-current-issues-cbdc", text: "A design tension in CBDCs is between privacy and:", optionA: "AML/CFT requirements", optionB: "Dividends", optionC: "Coupons", optionD: "Convexity", correctOption: "A", explanation: "CBDCs must balance user privacy with anti-money-laundering rules.", orderIndex: 6 },
  { id: "frm-current-issues-cbdc-q08", topicId: "frm-current-issues-cbdc", text: "A potential benefit of CBDCs is:", optionA: "Faster, cheaper payments", optionB: "Higher coupons", optionC: "More convexity", optionD: "Guaranteed returns", correctOption: "A", explanation: "CBDCs can make payments faster and cheaper and aid inclusion.", orderIndex: 7 },
  { id: "frm-current-issues-cbdc-q09", topicId: "frm-current-issues-cbdc", text: "Stablecoins are pegged to:", optionA: "Fiat or collateral", optionB: "Equity indexes", optionC: "Commodities always", optionD: "Nothing", correctOption: "A", explanation: "Stablecoins maintain value by pegging to fiat currency or collateral.", orderIndex: 8 },
  { id: "frm-current-issues-cbdc-q10", topicId: "frm-current-issues-cbdc", text: "CBDC infrastructure must ensure cyber and:", optionA: "Operational resilience", optionB: "Higher dividends", optionC: "Coupon growth", optionD: "Convexity", correctOption: "A", explanation: "The payment infrastructure needs strong cyber and operational resilience.", orderIndex: 9 },
  { id: "frm-current-issues-cbdc-q11", topicId: "frm-current-issues-cbdc", text: "A CBDC offers the public a ____ digital settlement asset.", optionA: "Risk-free", optionB: "High-risk", optionC: "Illiquid", optionD: "Defaulted", correctOption: "A", explanation: "As central-bank money, a CBDC is a risk-free digital settlement asset.", orderIndex: 10 },
  { id: "frm-current-issues-cbdc-q12", topicId: "frm-current-issues-cbdc", text: "CBDCs illustrate how payment innovation reshapes:", optionA: "Monetary and financial-stability risk", optionB: "Coupon schedules", optionC: "Dividend policy", optionD: "Storage costs", correctOption: "A", explanation: "CBDCs affect monetary policy transmission and financial stability.", orderIndex: 11 }
];
