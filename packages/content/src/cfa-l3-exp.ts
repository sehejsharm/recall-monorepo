// CFA Level III — additional readings (12 questions each).
import type { AuthoredMaterial } from "./builder";
import type { Question, Subject, Topic } from "@jyotir/core";

export const expSubjects: Subject[] = [
  { id: "cfa3-equity-pm", examId: "cfa-3", name: "Equity Portfolio Management", slug: "equity-pm", orderIndex: 5 },
  { id: "cfa3-risk-management", examId: "cfa-3", name: "Risk Management", slug: "risk-management", orderIndex: 6 },
  { id: "cfa3-private-wealth", examId: "cfa-3", name: "Private Wealth Management", slug: "private-wealth", orderIndex: 7 },
  { id: "cfa3-institutional", examId: "cfa-3", name: "Institutional Investors", slug: "institutional", orderIndex: 8 },
  { id: "cfa3-ethics", examId: "cfa-3", name: "Ethics & Professional Standards", slug: "ethics", orderIndex: 9 },
  { id: "cfa3-alternative-investments", examId: "cfa-3", name: "Alternative Investments", slug: "alternative-investments", orderIndex: 10 },
  { id: "cfa3-manager-selection", examId: "cfa-3", name: "Manager Selection", slug: "manager-selection", orderIndex: 11 }
];

export const expTopics: Topic[] = [
  { id: "cfa3-equity-pm-passive-active-factor", subjectId: "cfa3-equity-pm", name: "Passive, Active & Factor Investing", slug: "passive-active-factor", orderIndex: 0 },
  { id: "cfa3-risk-management-derivatives", subjectId: "cfa3-risk-management", name: "Risk Management with Derivatives", slug: "derivatives", orderIndex: 0 },
  { id: "cfa3-private-wealth-tax-estate", subjectId: "cfa3-private-wealth", name: "Private Wealth: Tax & Estate Planning", slug: "tax-estate", orderIndex: 0 },
  { id: "cfa3-institutional-pensions-endowments", subjectId: "cfa3-institutional", name: "Pensions & Endowments", slug: "pensions-endowments", orderIndex: 0 },
  { id: "cfa3-asset-allocation-rebalancing-execution", subjectId: "cfa3-asset-allocation", name: "Rebalancing & Trade Execution", slug: "rebalancing-execution", orderIndex: 1 },
  { id: "cfa3-risk-management-currency", subjectId: "cfa3-risk-management", name: "Currency Management", slug: "currency", orderIndex: 1 },
  { id: "cfa3-ethics-asset-manager-code", subjectId: "cfa3-ethics", name: "Asset Manager Code & GIPS", slug: "asset-manager-code", orderIndex: 0 },
  { id: "cfa3-alternative-investments-portfolio-role", subjectId: "cfa3-alternative-investments", name: "Alternatives in Portfolio Management", slug: "portfolio-role", orderIndex: 0 },
  { id: "cfa3-manager-selection-due-diligence", subjectId: "cfa3-manager-selection", name: "Manager Selection & Due Diligence", slug: "due-diligence", orderIndex: 0 },
  { id: "cfa3-behavioral-market-behavior", subjectId: "cfa3-behavioral", name: "Behavioral Finance & Market Anomalies", slug: "market-behavior", orderIndex: 1 },
  { id: "cfa3-behavioral-investor-types", subjectId: "cfa3-behavioral", name: "Behavioral Investor Types", slug: "investor-types", orderIndex: 2 },
  { id: "cfa3-behavioral-adviser-client", subjectId: "cfa3-behavioral", name: "Adviser-Client Relations", slug: "adviser-client", orderIndex: 3 },
  { id: "cfa3-behavioral-analyst-biases", subjectId: "cfa3-behavioral", name: "Behavioral Biases of Analysts", slug: "analyst-biases", orderIndex: 4 },
  { id: "cfa3-behavioral-committee-bias", subjectId: "cfa3-behavioral", name: "Biases in Committees & Markets", slug: "committee-bias", orderIndex: 5 },
  { id: "cfa3-capital-market-expectations-economic-analysis", subjectId: "cfa3-capital-market-expectations", name: "Economic Analysis & the Business Cycle", slug: "economic-analysis", orderIndex: 1 },
  { id: "cfa3-capital-market-expectations-fixed-income", subjectId: "cfa3-capital-market-expectations", name: "Forecasting Fixed-Income Returns", slug: "fixed-income", orderIndex: 2 },
  { id: "cfa3-capital-market-expectations-equity", subjectId: "cfa3-capital-market-expectations", name: "Forecasting Equity Returns", slug: "equity", orderIndex: 3 },
  { id: "cfa3-capital-market-expectations-real-estate", subjectId: "cfa3-capital-market-expectations", name: "Forecasting Real Estate & Alternatives", slug: "real-estate", orderIndex: 4 },
  { id: "cfa3-capital-market-expectations-exchange-rates", subjectId: "cfa3-capital-market-expectations", name: "Forecasting Exchange Rates", slug: "exchange-rates", orderIndex: 5 },
  { id: "cfa3-asset-allocation-approaches", subjectId: "cfa3-asset-allocation", name: "Asset Allocation Approaches", slug: "approaches", orderIndex: 2 },
  { id: "cfa3-asset-allocation-liability-relative", subjectId: "cfa3-asset-allocation", name: "Liability-Relative Asset Allocation", slug: "liability-relative", orderIndex: 3 },
  { id: "cfa3-asset-allocation-goals-based", subjectId: "cfa3-asset-allocation", name: "Goals-Based Asset Allocation", slug: "goals-based", orderIndex: 4 },
  { id: "cfa3-asset-allocation-constraints", subjectId: "cfa3-asset-allocation", name: "Asset Allocation with Constraints", slug: "constraints", orderIndex: 5 },
  { id: "cfa3-fixed-income-pm-indexing", subjectId: "cfa3-fixed-income-pm", name: "Index-Based Fixed-Income Investing", slug: "indexing", orderIndex: 1 },
  { id: "cfa3-fixed-income-pm-yield-curve", subjectId: "cfa3-fixed-income-pm", name: "Yield-Curve Strategies", slug: "yield-curve", orderIndex: 2 },
  { id: "cfa3-fixed-income-pm-credit", subjectId: "cfa3-fixed-income-pm", name: "Credit Strategies", slug: "credit", orderIndex: 3 },
  { id: "cfa3-fixed-income-pm-leverage", subjectId: "cfa3-fixed-income-pm", name: "Leverage, Carry & Roll-Down", slug: "leverage", orderIndex: 4 },
  { id: "cfa3-fixed-income-pm-multiple-liabilities", subjectId: "cfa3-fixed-income-pm", name: "Managing Multiple Liabilities", slug: "multiple-liabilities", orderIndex: 5 },
  { id: "cfa3-equity-pm-passive", subjectId: "cfa3-equity-pm", name: "Passive Equity Investing", slug: "passive", orderIndex: 1 },
  { id: "cfa3-equity-pm-active-fundamental", subjectId: "cfa3-equity-pm", name: "Active Equity: Fundamental Strategies", slug: "active-fundamental", orderIndex: 2 },
  { id: "cfa3-equity-pm-active-quant", subjectId: "cfa3-equity-pm", name: "Active Equity: Quantitative Strategies", slug: "active-quant", orderIndex: 3 },
  { id: "cfa3-equity-pm-construction", subjectId: "cfa3-equity-pm", name: "Equity Portfolio Construction & Risk", slug: "construction", orderIndex: 4 },
  { id: "cfa3-equity-pm-corporate-governance", subjectId: "cfa3-equity-pm", name: "Corporate Governance & ESG Integration", slug: "corporate-governance", orderIndex: 5 },
  { id: "cfa3-performance-return-measurement", subjectId: "cfa3-performance", name: "Return Measurement: TWR & MWR", slug: "return-measurement", orderIndex: 1 },
  { id: "cfa3-performance-attribution-approaches", subjectId: "cfa3-performance", name: "Return Attribution Approaches", slug: "attribution-approaches", orderIndex: 2 },
  { id: "cfa3-performance-risk-attribution", subjectId: "cfa3-performance", name: "Risk Attribution", slug: "risk-attribution", orderIndex: 3 },
  { id: "cfa3-performance-benchmarks", subjectId: "cfa3-performance", name: "Benchmarks & Benchmark Quality", slug: "benchmarks", orderIndex: 4 },
  { id: "cfa3-performance-appraisal", subjectId: "cfa3-performance", name: "Manager Continuation & Appraisal", slug: "appraisal", orderIndex: 5 },
  { id: "cfa3-private-wealth-ips", subjectId: "cfa3-private-wealth", name: "Individual IPS & Goals", slug: "ips", orderIndex: 1 },
  { id: "cfa3-private-wealth-human-capital", subjectId: "cfa3-private-wealth", name: "Human Capital & Life-Cycle Investing", slug: "human-capital", orderIndex: 2 },
  { id: "cfa3-private-wealth-tax-efficiency", subjectId: "cfa3-private-wealth", name: "Tax-Efficient Investing & Asset Location", slug: "tax-efficiency", orderIndex: 3 },
  { id: "cfa3-private-wealth-estate-planning", subjectId: "cfa3-private-wealth", name: "Estate Planning & Wealth Transfer", slug: "estate-planning", orderIndex: 4 },
  { id: "cfa3-private-wealth-risk-insurance", subjectId: "cfa3-private-wealth", name: "Risk Management for Individuals", slug: "risk-insurance", orderIndex: 5 },
  { id: "cfa3-institutional-db-pension", subjectId: "cfa3-institutional", name: "Defined-Benefit Pension Management", slug: "db-pension", orderIndex: 1 },
  { id: "cfa3-institutional-foundations", subjectId: "cfa3-institutional", name: "Foundations & Endowments IPS", slug: "foundations", orderIndex: 2 },
  { id: "cfa3-institutional-insurance", subjectId: "cfa3-institutional", name: "Insurance Companies", slug: "insurance", orderIndex: 3 },
  { id: "cfa3-institutional-banks", subjectId: "cfa3-institutional", name: "Banks & Asset-Liability Management", slug: "banks", orderIndex: 4 },
  { id: "cfa3-institutional-sovereign", subjectId: "cfa3-institutional", name: "Sovereign Wealth Funds", slug: "sovereign", orderIndex: 5 },
  { id: "cfa3-ethics-code-standards", subjectId: "cfa3-ethics", name: "Code of Ethics & the Seven Standards", slug: "code-standards", orderIndex: 1 },
  { id: "cfa3-ethics-professionalism", subjectId: "cfa3-ethics", name: "Professionalism & Market Integrity (I & II)", slug: "professionalism", orderIndex: 2 },
  { id: "cfa3-ethics-duties-clients", subjectId: "cfa3-ethics", name: "Duties to Clients (Standard III)", slug: "duties-clients", orderIndex: 3 },
  { id: "cfa3-ethics-conflicts", subjectId: "cfa3-ethics", name: "Conflicts & Priority of Transactions (VI)", slug: "conflicts", orderIndex: 4 },
  { id: "cfa3-ethics-application-cases", subjectId: "cfa3-ethics", name: "Application of the Code & Standards", slug: "application-cases", orderIndex: 5 },
  { id: "cfa3-risk-management-market-risk", subjectId: "cfa3-risk-management", name: "Measuring & Managing Market Risk (VaR)", slug: "market-risk", orderIndex: 2 },
  { id: "cfa3-risk-management-swaps-forwards", subjectId: "cfa3-risk-management", name: "Swaps, Forwards & Futures Strategies", slug: "swaps-forwards", orderIndex: 3 },
  { id: "cfa3-risk-management-options-strategies", subjectId: "cfa3-risk-management", name: "Options Strategies", slug: "options-strategies", orderIndex: 4 },
  { id: "cfa3-risk-management-enterprise", subjectId: "cfa3-risk-management", name: "Risk Governance & Enterprise Risk Management", slug: "enterprise", orderIndex: 5 },
  { id: "cfa3-alternative-investments-hedge-funds", subjectId: "cfa3-alternative-investments", name: "Hedge Fund Strategies", slug: "hedge-funds", orderIndex: 1 },
  { id: "cfa3-alternative-investments-private-equity", subjectId: "cfa3-alternative-investments", name: "Private Equity & Venture Capital", slug: "private-equity", orderIndex: 2 },
  { id: "cfa3-alternative-investments-real-estate", subjectId: "cfa3-alternative-investments", name: "Real Estate Investment", slug: "real-estate", orderIndex: 3 },
  { id: "cfa3-alternative-investments-real-assets", subjectId: "cfa3-alternative-investments", name: "Commodities & Real Assets", slug: "real-assets", orderIndex: 4 },
  { id: "cfa3-alternative-investments-private-debt", subjectId: "cfa3-alternative-investments", name: "Private Debt & Infrastructure", slug: "private-debt", orderIndex: 5 },
  { id: "cfa3-manager-selection-quantitative", subjectId: "cfa3-manager-selection", name: "Quantitative Manager Evaluation", slug: "quantitative", orderIndex: 1 },
  { id: "cfa3-manager-selection-fees", subjectId: "cfa3-manager-selection", name: "Fee Structures & Alignment", slug: "fees", orderIndex: 2 },
  { id: "cfa3-manager-selection-style-analysis", subjectId: "cfa3-manager-selection", name: "Style & Holdings-Based Analysis", slug: "style-analysis", orderIndex: 3 },
  { id: "cfa3-manager-selection-monitoring", subjectId: "cfa3-manager-selection", name: "Monitoring & Manager Termination", slug: "monitoring", orderIndex: 4 },
  { id: "cfa3-manager-selection-universe", subjectId: "cfa3-manager-selection", name: "Universe Definition & Process Screening", slug: "universe", orderIndex: 5 }
];

export const expMaterials: AuthoredMaterial[] = [
  {
    id: "cfa3-equity-pm-passive-active-factor-m01",
    topicId: "cfa3-equity-pm-passive-active-factor",
    title: "Passive, Active & Factor Investing",
    content: `## The spectrum
- **Passive** — track an index; low cost, low tracking error. Methods: full replication, **stratified sampling**, optimization.
- **Active** — seek alpha; higher fees and tracking error. Judged by the **information ratio** (active return / active risk).
- **Factor / smart beta** — rules-based tilts to rewarded factors (value, size, momentum, quality, low-volatility) — between passive and active.

## Building exposure
- **Index funds/ETFs** and **derivatives** (equity futures, total-return swaps) give cheap, liquid beta; a **completion overlay** fills gaps.
- **Long-only vs long/short**: market-neutral isolates alpha by removing beta.

## Costs & implementation
- Watch **management fees, transaction costs, market impact, and taxes**; rebalancing and turnover erode returns.
- **Tracking error** measures deviation from benchmark; passive minimizes it, active budgets it.
- Fundamental law: **IR ≈ IC × √breadth** — more independent, skillful bets raise the achievable information ratio.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa3-risk-management-derivatives-m01",
    topicId: "cfa3-risk-management-derivatives",
    title: "Risk Management with Derivatives",
    content: `Derivatives let managers **adjust exposures** cheaply without trading the underlying.

## Common overlays
- **Equity futures**: change beta. Contracts = [(β_target − β_port)/β_futures] × (Portfolio/Futures price). Sell to lower beta, buy to raise it.
- **Interest-rate futures/swaps**: adjust portfolio **duration**. Number of contracts ≈ [(D_target − D_port)/D_futures] × (Portfolio/Futures BPV).
- **Currency forwards**: hedge foreign-asset FX exposure (hedge ratio choice).
- **Options**: asymmetric protection — **protective put** (floor), **covered call** (income), **collar** (cap + floor cheaply).

## Discipline
- Define the **risk to hedge**, choose the instrument, size it, and monitor **basis risk** (the hedge and exposure not moving identically).
- Futures need **margin** and daily settlement; swaps/forwards are OTC with **counterparty risk** (mitigated by clearing/collateral).
- Hedging reduces both downside and upside; **dynamic** delta hedging requires rebalancing due to gamma.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa3-private-wealth-tax-estate-m01",
    topicId: "cfa3-private-wealth-tax-estate",
    title: "Private Wealth: Tax & Estate Planning",
    content: `## Taxes and returns
- **Tax drag** compounds: after-tax return r·(1 − t) over many years sharply reduces terminal wealth.
- **Asset location**: hold tax-inefficient assets (bonds, high-turnover) in **tax-deferred/exempt** accounts; tax-efficient (low-turnover equity) in taxable accounts.
- **Tax-loss harvesting** and deferring gains raise after-tax returns; **step-up in basis** at death can eliminate embedded gains.

## Account types
- **Tax-deferred** (contributions pre-tax, taxed on withdrawal) vs **tax-exempt** (after-tax in, tax-free out). Choice depends on current vs expected future tax rates.

## Estate planning
- **Gifting during life** (uses the lower of gift/estate tax, removes future growth from the estate) vs **bequests** at death.
- **Trusts** (revocable vs irrevocable), **life insurance**, and **charitable** vehicles manage transfer taxes and control.
- Core IPS inputs for individuals: **time horizon, liquidity needs, taxes, legal/regulatory, and unique circumstances** (the constraints), plus return/risk objectives. Human capital and **mortality/longevity risk** shape asset allocation and insurance needs.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa3-institutional-pensions-endowments-m01",
    topicId: "cfa3-institutional-pensions-endowments",
    title: "Pensions & Endowments",
    content: `## Defined-benefit pensions
- **Risk tolerance** rises with a younger workforce, a well-funded status, a lower plan/sponsor correlation, and a smaller plan relative to the sponsor.
- Liabilities are **bond-like** → **LDI** (match duration of assets to liabilities). Time horizon often long but tied to the active/retired mix.
- Liquidity needs depend on the **retired-lives proportion** and contributions.

## Endowments & foundations
- Goal: fund spending **in perpetuity** while preserving **real** value → high equity/alternatives allocation, long horizon, high risk tolerance.
- **Spending rules**: simple (% of beginning assets), rolling 3-year average (smooths), or **geometric/Yale** (weights prior spending and market value) to stabilize distributions.
- Return objective ≈ **spending rate + inflation + fees**; **US foundations** must typically distribute ~5% annually.

## Other institutions
- **Banks/insurers**: heavily regulated, liability-driven, lower risk tolerance, strong liquidity and ALM focus.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa3-asset-allocation-rebalancing-execution-m01",
    topicId: "cfa3-asset-allocation-rebalancing-execution",
    title: "Rebalancing & Trade Execution",
    content: `## Rebalancing
- **Calendar** rebalancing (e.g. quarterly) is simple but ignores market moves; **percentage-range (corridor)** rebalances when a weight breaches a band.
- Optimal corridor **width** is *wider* for higher transaction costs, higher risk tolerance, and lower correlation with the rest of the portfolio; *narrower* for higher volatility.
- Rebalancing is **contrarian** (sells winners, buys losers) and can capture a **diversification return**; it controls risk, it doesn't chase return.

## Execution costs
- **Implementation shortfall** = paper-portfolio return − actual return = explicit costs (commissions, fees, taxes) + implicit costs (**spread, market impact, delay/slippage, opportunity cost** of unfilled orders).
- **VWAP** benchmarks fills against volume-weighted average price.

## Trade strategy
- **Urgency vs cost**: aggressive (liquidity-demanding) trades pay more impact but less timing risk; patient (liquidity-supplying) trades risk adverse price moves.
- Algorithms: VWAP/TWAP, implementation-shortfall, and liquidity-seeking; large orders are **sliced** to limit impact.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa3-risk-management-currency-m01",
    topicId: "cfa3-risk-management-currency",
    title: "Currency Management",
    content: `Foreign assets carry **two** return sources: the local asset return and the **currency** return.

## The strategic decision
- **Hedging ratio** ranges from fully unhedged → fully hedged. Drivers toward **more hedging**: short horizon, risk-averse client, high hedging-cost tolerance, low correlation of currency with the asset.
- Bonds: currency risk is large relative to return → often **hedged**. Equities: currency is a smaller share and adds diversification → often **partially** hedged.

## Tools
- **Forwards** (most common — precise, low cost; roll at maturity), **currency futures**, **options** (asymmetric), and **cross-hedges/proxy hedges** when a direct forward is costly.
- **Minimum-variance hedge ratio** = regression beta of asset (domestic-currency) returns on the exchange-rate return.

## Active overlays
- A **currency overlay** manager seeks alpha from FX separately from the asset managers. Tactics use carry, value (PPP), momentum, and volatility trading. **Roll yield** matters: hedging a forward at a premium/discount adds or subtracts return.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa3-ethics-asset-manager-code-m01",
    topicId: "cfa3-ethics-asset-manager-code",
    title: "Asset Manager Code & GIPS",
    content: `## Asset Manager Code (AMC)
Voluntary, firm-level conduct code (vs. the individual Code & Standards). Firms **claim compliance** for the whole firm; CFA Institute does not verify it. Six pillars of ethical responsibilities:
1. **Loyalty to clients** (place client interests first; confidentiality)
2. **Investment process & actions** (reasonable basis, fair dealing, no manipulation)
3. **Trading** (best execution; client brokerage for client benefit; priority of client trades)
4. **Risk management, compliance & support** (designated compliance officer, controls, recordkeeping)
5. **Performance & valuation** (fair, accurate, complete; no cherry-picking)
6. **Disclosures** (truthful, timely; conflicts, fees, costs)

## GIPS (Global Investment Performance Standards)
- Voluntary, ethical performance-presentation standards ensuring **fair representation and full disclosure**; compliance is **firm-wide**, not per-composite.
- **Composites** group all fee-paying discretionary portfolios of similar mandate (prevents survivorship/cherry-picking). Must show ≥ history (building to 10 years).
- Returns are **time-weighted** (TWR removes the effect of client cash flows); show benchmark and dispersion. **Verification** by a third party is recommended but optional.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa3-alternative-investments-portfolio-role-m01",
    topicId: "cfa3-alternative-investments-portfolio-role",
    title: "Alternatives in Portfolio Management",
    content: `Alternatives (private equity, hedge funds, real assets, private debt, commodities) are added for **diversification, return enhancement, and inflation protection**.

## Portfolio role & allocation
- Low (and unstable) correlations with stocks/bonds — but correlations **rise in crises**.
- Reported returns are **smoothed** (appraisal-based/stale pricing) → **understated volatility and correlation**; "unsmooth" before optimizing or MVO over-allocates to alternatives.
- Liquidity, long lock-ups, the **J-curve**, high fees (2-and-20), and operational/manager risk constrain sizing.

## Approaches
- Allocate by **role** (capital growth, income, diversification, inflation hedge) rather than by traditional asset-class labels.
- Use **liquidity tiers** and commitment pacing for private funds; model **vintage-year** diversification.
- Risk tools must capture **non-normal** returns (fat tails, negative skew) — VaR/volatility alone understate risk; use scenario analysis and downside measures.
- Benchmarks are difficult: peer-group/IRR for private; absolute or risk-factor for hedge funds.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa3-manager-selection-due-diligence-m01",
    topicId: "cfa3-manager-selection-due-diligence",
    title: "Manager Selection & Due Diligence",
    content: `Manager selection has three steps: **universe definition → quantitative analysis → qualitative (operational) due diligence.**

## Type I vs Type II error
- **Type I**: hiring/keeping a manager with **no real skill** (false positive).
- **Type II**: rejecting/firing a **genuinely skilled** manager (false negative).
- Tightening selection criteria reduces Type I but raises Type II (and vice-versa).

## Quantitative
- Style/returns-based and holdings-based analysis; capture **alpha vs. factor exposures** (don't pay alpha fees for cheap beta). Assess **information ratio**, consistency, drawdowns, and capacity. Beware short, noisy track records and **backfill/survivorship bias**.

## Qualitative & operational due diligence
- **Investment**: philosophy, process repeatability, team, decision rights.
- **Operational** (a major source of fund failure): independent **administrator/custodian/auditor**, valuation policy, controls, compliance, key-person and business risk, fee terms, and alignment.
- Output: a conviction-weighted recommendation, not just past returns.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa3-behavioral-market-behavior-m01",
    topicId: "cfa3-behavioral-market-behavior",
    title: "Behavioral Finance & Market Anomalies",
    content: `Behavioral finance challenges the **efficient market hypothesis** and rational-investor assumptions.

## Anomalies (apparent EMH violations)
- **Momentum** (returns persist short-term), **value & size** premia, **January/calendar** effects, **overreaction/reversal**, **post-earnings-announcement drift**.
- Many shrink after discovery or vanish net of costs/risk — possibly compensation for risk, data mining, or true mispricing.

## Bubbles & crashes
- Driven by **herding, overconfidence, regret, and disposition** effects; "**this time is different**" narratives. Prices detach from fundamentals, then reverse violently.

## Theories of market behavior
- **Adaptive Markets Hypothesis (Lo)**: applies evolution/ecology — efficiency varies with conditions; strategies "survive" until competed away.
- **Behavioral asset pricing** adds a sentiment premium to required return.

> Implication: markets are *mostly* efficient but exhibit periodic, behaviorally driven mispricing that disciplined investors may exploit (carefully).`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa3-behavioral-investor-types-m01",
    topicId: "cfa3-behavioral-investor-types",
    title: "Behavioral Investor Types",
    content: `Classifying clients helps advisers tailor portfolios and communication. The **BIT (Pompian)** framework:

| Type | Dominant biases | Risk tolerance |
| --- | --- | --- |
| **Passive Preserver** | emotional (loss aversion, status quo, endowment, regret) | low |
| **Friendly Follower** | cognitive (availability, recency); follows trends | low-medium |
| **Independent Individualist** | cognitive (overconfidence, confirmation, self-attribution) | high |
| **Active Accumulator** | emotional (overconfidence, illusion of control) | high |

## Using the types
- **Emotional** biases → **adapt** the portfolio (build around them). **Cognitive** errors → **moderate** with education and data.
- Wealthier/higher-standard-of-living clients can tolerate larger deviations from the rational optimum.

## Limitations
- Investors don't fit neatly into one box, can show multiple biases, and change over time. Use the BIT as a starting diagnostic, then confirm via discussion and a bias questionnaire.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa3-behavioral-adviser-client-m01",
    topicId: "cfa3-behavioral-adviser-client",
    title: "Adviser-Client Relations",
    content: `Understanding client psychology improves the relationship and outcomes.

## Why it matters
- Better **risk profiling** (ability + willingness), more **suitable** portfolios, stronger trust, and clients who **stick with the plan** through volatility.
- A **behaviorally modified asset allocation** lets clients deviate modestly from the mean-variance optimum so they can stay invested.

## Practical steps
- Use **risk-tolerance questionnaires** and conversation to identify biases and the **behavioral investor type**.
- **Educate** to moderate cognitive errors; **accommodate** deep emotional biases.
- Frame information carefully (avoid triggering loss aversion); set expectations; agree the IPS jointly.

## Limits on deviation
- Larger allowable deviations when the client has **higher standard-of-living risk tolerance** and **emotional** (hard-to-change) biases; smaller deviations when biases are cognitive and the client's financial security depends on staying near the optimum.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa3-behavioral-analyst-biases-m01",
    topicId: "cfa3-behavioral-analyst-biases",
    title: "Behavioral Biases of Analysts",
    content: `Analysts are not immune to bias.

## Forecasting biases
- **Overconfidence**: too-narrow confidence intervals (**illusion of knowledge**), **illusion of control**, **self-attribution** (credit skill, blame luck). → over-precise forecasts.
- **Representativeness** & **base-rate neglect**: over-weighting recent or vivid data; **gambler's fallacy**.
- **Confirmation bias**: seeking data that supports the thesis; **anchoring** to prior estimates or management guidance.
- **Availability**: over-weighting easily recalled scenarios.

## Company-interaction biases
- Over-reliance on **management**; halo effect (good company ≠ good stock); social pressure to match consensus.

## Remedies
- Use **systematic processes, base rates, and prior records**; pre-commit to decision rules; seek **disconfirming** evidence; perform **post-mortems**; use **structured** analysis and counter-arguments to widen confidence intervals.`,
    estimatedReadTime: 2,
    orderIndex: 4
  },
  {
    id: "cfa3-behavioral-committee-bias-m01",
    topicId: "cfa3-behavioral-committee-bias",
    title: "Biases in Committees & Markets",
    content: `## Investment committees
- **Social proof / groupthink**: members defer to the group or a dominant voice, suppressing dissent.
- Remedies: **anonymous input**, diverse membership, a **devil's advocate**, structured voting, and a leader who solicits dissent before stating their own view.

## Market-level effects of bias
- **Momentum & herding** can create **bubbles** (overreaction up) and **crashes** (overreaction down). The **disposition effect** (holding losers, selling winners) contributes to **under-reaction** and momentum.
- **Halo effect** and **home bias** distort allocation; **trend-chasing** flows amplify cycles.

## Anomalies linked to biases
- **Value and momentum** premia, post-earnings drift, and calendar effects are partly behavioral.
- Whether anomalies are exploitable depends on **persistence, capacity, and costs** — many fade once widely known.`,
    estimatedReadTime: 2,
    orderIndex: 5
  },
  {
    id: "cfa3-capital-market-expectations-economic-analysis-m01",
    topicId: "cfa3-capital-market-expectations-economic-analysis",
    title: "Economic Analysis & the Business Cycle",
    content: `Capital market expectations rest on macro analysis.

## Business cycle & assets
- Phases (initial recovery → early/late expansion → slowdown → contraction) map to returns: equities/credit do best early; defensives and bonds later.
- **Inflation**: rising inflation hurts bonds (and often stocks at high levels); deflation helps quality bonds.

## Monetary & fiscal policy
- **Taylor rule** for the neutral policy rate: r* + inflation + 0.5(inflation gap) + 0.5(output gap).
- The **yield curve** signals expectations: an **inverted** curve often precedes recession.

## Forecasting tools & pitfalls
- **Econometric models, leading indicators, surveys**. Drivers of trend growth: labor, capital, **productivity (TFP)**.
- Pitfalls: status-quo/anchoring bias, **data mining**, using **non-stationary** data, model uncertainty, and ignoring **regime shifts**. Distinguish **secular** trends from cyclical noise.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa3-capital-market-expectations-fixed-income-m01",
    topicId: "cfa3-capital-market-expectations-fixed-income",
    title: "Forecasting Fixed-Income Returns",
    content: `## Building-block expected return
**Real risk-free rate + expected inflation + term premium + credit premium + liquidity premium.** The **DCF/YTM** is the base forecast for a bond held to maturity (assuming reinvestment).

## Drivers
- **Government bonds**: expectations of short-rate path + a term premium; tied to growth/inflation and policy.
- **Credit**: spread compensates for **expected loss + risk/liquidity premium**; spreads are **pro-cyclical** (widen in recession). Return impact ≈ yield/carry + roll − (spread duration × Δspread) − expected loss.
- **Emerging-market debt**: add country/political risk and currency considerations.

## Methods
- **Survey/judgment**, building-block, and **DCF/scenario** approaches.
- Mind **reinvestment and rolldown**; forwards are the **break-even** — active return requires realized rates to differ from forwards. Watch liquidity and the credit cycle.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa3-capital-market-expectations-equity-m01",
    topicId: "cfa3-capital-market-expectations-equity",
    title: "Forecasting Equity Returns",
    content: `## Models
- **Grinold-Kroner**: E[R] ≈ **dividend yield − Δshares + nominal earnings growth + Δ(P/E)** = (D/P − ΔS) + (i + g) + ΔPE. Repricing (ΔPE) averages ~0 long-run.
- **Historical** averages (adjust for survivorship/time-period bias) and **risk-premium/build-up** (R_f + ERP).
- **Singer-Terhaar (ICAPM)**: blends fully integrated and segmented risk premia by the degree of market integration; RP_i = ρ_{i,M} · σ_i · (Sharpe of global market).

## Inputs
- The **equity risk premium** can be estimated via historical, forward (DDM-implied), or survey methods.
- Earnings growth ≈ trend GDP growth ± margin/share effects.

## Cautions
- Avoid extrapolating recent returns; account for **mean reversion** in margins and valuations, and regime changes. Cross-check models against each other.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa3-capital-market-expectations-real-estate-m01",
    topicId: "cfa3-capital-market-expectations-real-estate",
    title: "Forecasting Real Estate & Alternatives",
    content: `## Real estate expected return
**Cap rate (income) + NOI growth ± valuation change.** The **cap rate ≈ discount rate − growth**; expected return ≈ cap rate + NOI growth − cap-rate expansion.
- Real estate blends **bond-like** (lease income) and **equity-like** (cyclical value) behavior; it is sensitive to rates, the economy, and credit availability.
- **Smoothed appraisals** understate volatility/correlation — unsmooth before use.

## Other alternatives
- **Commodities**: price + **roll** (backwardation positive, contango negative) + collateral yield; an inflation hedge.
- **Private equity/credit**: build up an illiquidity premium over public comparables; model **vintage** and J-curve effects.
- **Hedge funds**: factor-based or absolute-return assumptions; account for **non-normality** and fees.

## Caution
- Reported alternative returns are **stale/smoothed**; adjust risk and correlation inputs before optimization.`,
    estimatedReadTime: 2,
    orderIndex: 4
  },
  {
    id: "cfa3-capital-market-expectations-exchange-rates-m01",
    topicId: "cfa3-capital-market-expectations-exchange-rates",
    title: "Forecasting Exchange Rates",
    content: `## Frameworks
- **Parity conditions** (PPP, uncovered IRP, international Fisher) — useful long-run anchors but poor short-run predictors.
- **Balance of payments / current account**: persistent deficits pressure a currency lower (flows), though capital flows can dominate.
- **Monetary & portfolio-balance** models: relative money growth, inflation, and asset demand.

## Short-run drivers
- **Capital flows** chasing relative returns (carry), **risk sentiment** (safe havens — USD, JPY, CHF — rally in stress), and **policy/intervention**.
- **Carry trades** profit when UIRP fails but carry **crash risk** (negative skew).

## In CME
- Currency forecasts feed **hedging decisions** for international assets (hedge ratio) and the home-currency expected returns. Combine fundamentals with **technical/sentiment** and acknowledge high forecast uncertainty.`,
    estimatedReadTime: 2,
    orderIndex: 5
  },
  {
    id: "cfa3-asset-allocation-approaches-m01",
    topicId: "cfa3-asset-allocation-approaches",
    title: "Asset Allocation Approaches",
    content: `## Asset-only methods
- **Mean-variance optimization (MVO)**: maximize utility = E[R] − ½λσ². Powerful but an **"error maximizer"** — highly sensitive to expected-return inputs, producing concentrated, unstable weights.
- Remedies: **constraints**, **resampled** efficiency, **Black-Litterman** (blend equilibrium reverse-optimized returns with views), and **reverse optimization**.

## Risk-based methods
- **Risk budgeting** allocates risk (not capital); **risk parity** equalizes each asset's risk contribution (often levered).
- **Minimum-variance** and **maximum-diversification** portfolios.

## Factor-based
- Allocate to **rewarded factors** (value, size, momentum, quality, carry) rather than asset-class labels.

## Choosing
- Match to the investor: **asset-only** vs **liability-relative** vs **goals-based**. Account for costs, taxes, and the **rebalancing** policy. MVO with sensible constraints remains the workhorse.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa3-asset-allocation-liability-relative-m01",
    topicId: "cfa3-asset-allocation-liability-relative",
    title: "Liability-Relative Asset Allocation",
    content: `Manages assets against the **liabilities** they must fund (pensions, insurers, banks).

## Approaches
- **Surplus optimization**: mean-variance on the **surplus** (assets − liabilities); maximize expected surplus return per unit of surplus volatility.
- **Hedging/return-seeking** split: a **liability-hedging** portfolio (duration-matched bonds) plus a **return-seeking** portfolio (growth assets) sized by the funded ratio and risk appetite.
- **Integrated asset-liability management (ALM)** jointly models both sides.

## Key concepts
- **Funded ratio** = assets / PV(liabilities); a surplus deficit raises risk.
- Liabilities are **bond-like**, so **interest-rate (duration) risk** dominates → match BPV; mind **inflation-linked** liabilities (use linkers).
- A better-funded plan can **de-risk** (glide path) toward more hedging assets.

## Risks
- **Surplus** volatility, **non-parallel** curve moves, longevity (pensions), and contribution/regulatory risk.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa3-asset-allocation-goals-based-m01",
    topicId: "cfa3-asset-allocation-goals-based",
    title: "Goals-Based Asset Allocation",
    content: `Used mainly for **individuals**: build separate **sub-portfolios** for distinct goals, each with its own time horizon and **required probability of success**.

## Mechanics
- Assign each goal a **minimum-expectations** return and a confidence level; higher-priority/near-term goals get **safer** sub-portfolios; aspirational/long-term goals can hold **riskier** assets.
- Aggregates into an **overall** allocation, but the framing leverages clients' natural **mental accounting** so they stay disciplined.

## Pros & cons
- **Pros**: intuitive, improves client behavior/adherence, ties risk to each goal.
- **Cons**: can be **sub-optimal** at the total-portfolio level (ignores cross-goal diversification), and more complex to manage.

## Module/overlay approach
- Use standardized **risk modules** (sub-portfolios at set risk levels) and allocate each goal to a module by its horizon and required success probability; an overlay manages the aggregate exposures and taxes.`,
    estimatedReadTime: 2,
    orderIndex: 4
  },
  {
    id: "cfa3-asset-allocation-constraints-m01",
    topicId: "cfa3-asset-allocation-constraints",
    title: "Asset Allocation with Constraints",
    content: `Real-world allocation faces frictions beyond the textbook optimum.

## Constraints
- **Asset size** (too small to access some alternatives; too large faces capacity limits), **liquidity needs**, **time horizon**, **regulatory/legal**, and **tax**.
- **Illiquid assets** (PE, real estate, infrastructure): model **commitment pacing**, the **J-curve**, and a liquidity reserve; they can't be rebalanced freely.

## Tax-aware allocation
- **After-tax** return and risk differ from pre-tax; **asset location** (tax-inefficient assets in sheltered accounts) and **tax-loss harvesting** add value. Rebalancing has tax costs — use **wider corridors** for taxable accounts.

## Other adjustments
- **Mental accounting/behavioral** modifications, **ESG** constraints, and home-country/currency limits.
- Rebalancing policy: **calendar vs corridor**; wider bands for illiquid, high-cost, or low-correlation assets.
- **Tactical** shifts and **automatic adjustments** (glide paths) respond to changing circumstances and capital market expectations.`,
    estimatedReadTime: 2,
    orderIndex: 5
  },
  {
    id: "cfa3-fixed-income-pm-indexing-m01",
    topicId: "cfa3-fixed-income-pm-indexing",
    title: "Index-Based Fixed-Income Investing",
    content: `Replicating a bond index is harder than equities: indices have **thousands of issues**, many illiquid, with constantly changing composition (maturities, calls, new issuance).

## Replication methods
- **Full replication**: rarely feasible — too many illiquid bonds.
- **Stratified sampling (cell matching)**: divide the index into **cells** by key risk factors (duration/maturity bucket, sector, quality) and hold representative bonds matching each cell's weight.
- **Enhanced indexing**: match the index's **risk factors (duration, key-rate durations, sector/quality)** but make small bets to add value at low tracking error.

## Tracking risk
- Sources: mismatches in **duration, key-rate, sector, quality, and convexity**; transaction costs; and index reconstitution.
- Match **portfolio BPV/duration** and key-rate durations to the benchmark to control interest-rate tracking error.

## Vehicles
- **Bond ETFs/index funds**, **total-return swaps**, and **futures** give cheap, liquid exposure; mind liquidity and the **cash-bond basis**.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa3-fixed-income-pm-yield-curve-m01",
    topicId: "cfa3-fixed-income-pm-yield-curve",
    title: "Yield-Curve Strategies",
    content: `Position for an expected change in the **level, slope, or curvature** of the yield curve.

## Level (duration)
- Expect **rates to fall** → **extend duration**; **rise** → **shorten**. Use **key-rate durations** to target specific maturities.

## Slope
- Expect **flattening** → **barbell** / overweight the long end; expect **steepening** → **bullet** / overweight the short-intermediate. Combinations: bull/bear steepeners and flatteners.

## Curvature
- **Butterfly** trades: long the wings vs the belly (or vice-versa), usually **duration-neutral**, to profit from curvature changes.

## Stable curve
- **Buy-and-hold**, **rolldown** (ride the curve), sell convexity, and use **carry/leverage**.

## Tools & caveats
- A given duration via a **barbell** has more **convexity** (helps in large moves) but lower yield than a **bullet**. Profit from active trades only if realized rates differ from the **forward-implied** rates.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa3-fixed-income-pm-credit-m01",
    topicId: "cfa3-fixed-income-pm-credit",
    title: "Credit Strategies",
    content: `## Top-down vs bottom-up
- **Top-down**: rotate **sector, quality, and credit-cycle** exposure based on the macro/credit outlook (add risk in recovery, de-risk before downturns).
- **Bottom-up**: pick individual **mispriced issuers** via fundamental/relative-value analysis.

## Spread analysis
- **G/I/Z-spread** and **OAS**; spread return ≈ carry/roll − **spread duration × Δspread** − expected loss.
- **Expected loss = PD × LGD**; spreads are **pro-cyclical** (widen in recessions).
- The **credit-spread curve** and **rolldown** matter, as do **liquidity** and the **CDS-cash basis**.

## Implementation & risks
- Cash bonds, **CDS/CDX index** (efficient long/short credit), and **total-return swaps**.
- Diversify idiosyncratic default risk; watch **liquidity, downgrade/migration**, and **tail** (jump-to-default) risk.
- **Spread duration** measures sensitivity to spread changes — the key risk metric for a credit portfolio.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa3-fixed-income-pm-leverage-m01",
    topicId: "cfa3-fixed-income-pm-leverage",
    title: "Leverage, Carry & Roll-Down",
    content: `## Leverage methods
- **Repo** (sale + repurchase agreement — the main tool), **futures/swaps** (embedded leverage), **securities lending**, and structured vehicles.
- **Leveraged return** ≈ r_assets + (borrowed/equity) × (r_assets − r_borrow). Leverage **magnifies gains and losses** and adds **funding/rollover risk** (repo haircuts can rise in stress).

## Carry & rolldown
- **Carry** = income earned (coupon/yield) minus financing cost. A positive **carry trade** profits if the curve is unchanged.
- **Rolldown return**: on a stable upward-sloping curve, a bond's yield falls as it ages toward shorter maturities, producing price gains beyond the coupon.

## Risks
- Leverage amplifies **duration/spread** risk; **margin calls** can force selling at the worst time.
- The **repo haircut** and rate determine financing cost; a flat/steep curve and stable rates favor carry/rolldown strategies, but they lose if rates rise sharply.`,
    estimatedReadTime: 2,
    orderIndex: 4
  },
  {
    id: "cfa3-fixed-income-pm-multiple-liabilities-m01",
    topicId: "cfa3-fixed-income-pm-multiple-liabilities",
    title: "Managing Multiple Liabilities",
    content: `## Approaches (lowest to highest flexibility/risk)
- **Cash-flow matching (dedication)**: buy bonds whose cash flows **directly fund** each liability — minimal risk, least flexible, often higher cost.
- **Duration matching (immunization of multiple liabilities)**: match the portfolio's **BPV (money duration)** to the liabilities', keep **PV(assets) ≥ PV(liabilities)**, and **minimize dispersion/convexity difference** to limit structural risk. More flexible, exposes some curve risk.
- **Contingent immunization**: manage **actively** while a surplus cushion exists; revert to pure immunization if the cushion is exhausted.
- **Horizon matching**: cash-flow match near-term liabilities and duration-match longer ones.

## Risks
- **Structural risk** from **non-parallel (twist)** curve shifts — reduced by minimizing dispersion. Also **rebalancing**, **spread**, and **model** risk.
- Immunization locks in a return against **small, parallel** rate moves; rebalance as durations drift.`,
    estimatedReadTime: 2,
    orderIndex: 5
  },
  {
    id: "cfa3-equity-pm-passive-m01",
    topicId: "cfa3-equity-pm-passive",
    title: "Passive Equity Investing",
    content: `Track an index at low cost and low tracking error.

## Index construction matters
- **Market-cap weighted** (most common; self-rebalancing, but concentrates in large/overvalued names), **price-weighted**, **equal-weighted** (small-cap tilt, needs rebalancing), and **fundamental/factor-weighted** (smart beta).

## Replication methods
- **Full replication** (hold all constituents — best for liquid, narrow indices), **stratified sampling**, and **optimization** (minimize tracking error subject to constraints) for large/illiquid indices.

## Implementation
- **Index mutual funds/ETFs**, **derivatives** (equity futures, total-return swaps) for cheap, liquid beta and **completion overlays**.
- Costs: management fee, **transaction costs, market impact**, and **index reconstitution** (front-running at rebalance dates). Securities lending can offset some costs.
- **Tracking error** is the primary success metric for a passive manager; minimize it.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa3-equity-pm-active-fundamental-m01",
    topicId: "cfa3-equity-pm-active-fundamental",
    title: "Active Equity: Fundamental Strategies",
    content: `Discretionary, research-driven stock selection.

## Styles
- **Value** (low multiples, contrarian), **growth** (earnings momentum), **GARP** (growth at a reasonable price); **market-cap** and **sector** tilts.
- **Top-down** (macro/sector themes → stocks) vs **bottom-up** (company-by-company).

## Process & metrics
- Build a thesis (competitive position, earnings power, valuation) with a **margin of safety**.
- **Pitfalls/behavioral risks**: confirmation bias, anchoring, overconfidence, illusion of control, and **style drift**.
- Concentration vs diversification; **active share** measures how much holdings differ from the benchmark.

## Evaluation
- Judge skill with the **information ratio** (active return / active risk) and **active share**; high active share + high IR signals genuine, well-rewarded conviction.
- Capacity and turnover/costs constrain how much alpha survives.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa3-equity-pm-active-quant-m01",
    topicId: "cfa3-equity-pm-active-quant",
    title: "Active Equity: Quantitative Strategies",
    content: `Systematic, rules-based selection using factors and models.

## Process
1. Define the **investment thesis** and **factors** (value, momentum, quality, size, low-volatility, growth).
2. **Backtest** (out-of-sample/walk-forward) and build a **multifactor model**.
3. **Portfolio construction** via optimization with risk/turnover constraints.

## Risks & pitfalls
- **Overfitting/data mining**, **survivorship & look-ahead bias**, **factor crowding/decay**, and **regime change** (a model that worked can break).
- **Quant meltdowns** occur when crowded factor trades unwind simultaneously.

## Fundamental vs quant
- Quant: **breadth** (many small bets), discipline, low cost. Fundamental: **depth** (few high-conviction bets), adaptability.
- The **fundamental law**: **IR ≈ IC × √breadth** — quant relies on modest skill applied across many independent positions.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa3-equity-pm-construction-m01",
    topicId: "cfa3-equity-pm-construction",
    title: "Equity Portfolio Construction & Risk",
    content: `Translate insights into a portfolio while controlling risk and cost.

## Key building blocks (Active return decomposition)
Active return comes from **factor (rewarded) exposures** + **idiosyncratic (security selection)** + (minus) **costs**.

## Risk controls & metrics
- **Active share** (how different from the benchmark) and **active risk / tracking error** (volatility of active return). Pure stock-pickers have high active share; factor bets show up as active risk.
- Limit position sizes, sector/factor exposures, and **turnover**; manage **liquidity**.

## Approaches
- **Concentrated** (few high-conviction names — higher active share/risk) vs **diversified/closet-index** (low active share).
- **Long-only** vs **long/short** (market-neutral isolates alpha by removing beta).
- Mind **implementation costs** (impact, spread) — they erode paper alpha. Set a **risk budget** consistent with the mandate.`,
    estimatedReadTime: 2,
    orderIndex: 4
  },
  {
    id: "cfa3-equity-pm-corporate-governance-m01",
    topicId: "cfa3-equity-pm-corporate-governance",
    title: "Corporate Governance & ESG Integration",
    content: `## Corporate governance (for equity owners)
- Strong governance — **independent, diverse boards**, aligned incentives, one-share-one-vote, sound audit/controls — lowers risk and the cost of capital.
- **Shareholder activism & engagement**: proxy voting, dialogue, and (for activists) board changes/capital-return campaigns to unlock value.
- Red flags: entrenchment (poison pills, staggered boards), dual-class shares, weak audit.

## ESG integration in equity
- **E/S/G** factors that are **material** affect cash flows and risk → adjust forecasts and discount rates.
- Approaches: **negative/exclusionary screening, positive/best-in-class, thematic, impact, ESG integration, and active ownership/engagement**.
- Watch **greenwashing** and data inconsistency; focus on financially **material** issues (e.g., SASB framework).
- **Stewardship** is part of the manager's fiduciary duty; voting and engagement are tools to protect/enhance long-term value.`,
    estimatedReadTime: 2,
    orderIndex: 5
  },
  {
    id: "cfa3-performance-return-measurement-m01",
    topicId: "cfa3-performance-return-measurement",
    title: "Return Measurement: TWR & MWR",
    content: `## Two return measures
- **Time-weighted return (TWR)**: removes the effect of **external cash flows** (client deposits/withdrawals). It compounds sub-period returns between cash flows. **Best for judging the manager** (they don't control flows) — the GIPS default.
- **Money-weighted return (MWR / IRR)**: the internal rate of return on actual cash flows. It **reflects the timing and size of flows**, so it measures the **investor's** experience.

## When they differ
- They diverge when there are **large external cash flows** and volatile sub-period returns.
- If money flows in **before** a strong period, MWR > TWR; flows in before a weak period → MWR < TWR.

## Practical points
- Use TWR for **manager comparison/GIPS**; use MWR when the manager **controls the timing** of flows (e.g., private equity, where IRR is standard).
- Sub-period valuation at each cash flow improves TWR accuracy; **linked internal rate of return** approximates TWR when frequent valuations aren't available.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa3-performance-attribution-approaches-m01",
    topicId: "cfa3-performance-attribution-approaches",
    title: "Return Attribution Approaches",
    content: `Decompose **active return** (portfolio − benchmark) into its sources.

## Equity — Brinson
- **Allocation effect**: over/underweighting sectors vs the benchmark.
- **Selection effect**: picking out/under-performing securities within sectors.
- **Interaction**: the cross term. (Brinson-Hood-Beebower vs Brinson-Fachler differ in the allocation benchmark.)

## Types of attribution
- **Returns-based**: uses only periodic returns and a factor model — easy, less precise, can be **gamed**.
- **Holdings-based**: uses portfolio weights each period — more accurate, more data.
- **Transaction-based**: uses holdings **and trades** — most accurate, most data-intensive.

## Fixed income
- Decompose into **yield/income, roll, duration (level), curve (slope/curvature), spread/credit, and currency** effects.

## Use
- Attribution explains **how** active return was earned, distinguishing **allocation vs selection** skill and identifying unintended bets.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa3-performance-risk-attribution-m01",
    topicId: "cfa3-performance-risk-attribution",
    title: "Risk Attribution",
    content: `Where return attribution explains realized return, **risk attribution** explains the sources of **risk** taken.

## Decomposition
- **Active risk (tracking error)²** = **active factor risk** + **active specific (selection) risk**. A factor-bet manager shows mostly factor risk; a pure stock-picker shows mostly specific risk.
- For absolute mandates, decompose **total risk** into factor and idiosyncratic contributions; **marginal/component VaR** attributes total risk to positions.

## Tying risk to process
- The **dominant risk source should match the stated strategy** (e.g., a "stock picker" with mostly factor risk has style drift).
- **Risk budgeting** sets ex-ante limits; risk attribution checks the **ex-post** outcome against them.

## Metrics
- Tracking error, beta, factor exposures, VaR/ES, and drawdowns. Combine with return attribution to judge whether the **risk taken was rewarded** (information ratio).`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa3-performance-benchmarks-m01",
    topicId: "cfa3-performance-benchmarks",
    title: "Benchmarks & Benchmark Quality",
    content: `## Properties of a valid benchmark (mnemonic: SAMURAI)
**S**pecified in advance · **A**ppropriate · **M**easurable · **U**nambiguous · **R**eflective of current investment opinions · **A**ccountable (owned) · **I**nvestable.

## Types
- **Absolute** (a target return), **broad market index**, **style index**, **factor/risk model**, **manager universe (peer group)** — but peer groups are **not investable** and suffer survivorship bias.
- **Custom/strategy benchmarks** and **normal portfolios** best fit specialized mandates.

## Quality tests
- **Systematic biases**: low correlation between the manager's active return and the benchmark's active return vs the market signals a poor fit.
- **Tracking error** vs the benchmark should be reasonable; **coverage** (% of holdings in the benchmark) should be high.

## Why it matters
- A flawed (style-mismatched) benchmark distorts attribution and appraisal — making allocation/selection effects meaningless and unfairly judging the manager.`,
    estimatedReadTime: 2,
    orderIndex: 4
  },
  {
    id: "cfa3-performance-appraisal-m01",
    topicId: "cfa3-performance-appraisal",
    title: "Manager Continuation & Appraisal",
    content: `Distinguishing **skill from luck** and deciding whether to retain a manager.

## Risk-adjusted appraisal ratios
| Measure | Risk used |
| --- | --- |
| **Sharpe** | total volatility |
| **Treynor** | beta |
| **Information ratio** | tracking error (active risk) |
| **M² (Modigliani)** | total risk, in return units |
| **Jensen's alpha** | CAPM beta |

- **IR ≈ IC × √breadth** (fundamental law). An IR ~0.5 is good, ~1.0 exceptional.

## Continuation policy
- Avoid the **Type I / Type II** trade-off: firing a skilled manager after bad luck (Type II) vs keeping an unskilled one (Type I).
- A **manager continuation policy (MCP)** sets objective criteria and a **zone of acceptable performance** to reduce churn driven by noise.
- Short, volatile records make skill hard to confirm statistically; weight **process and operational** quality, not just past returns.`,
    estimatedReadTime: 2,
    orderIndex: 5
  },
  {
    id: "cfa3-private-wealth-ips-m01",
    topicId: "cfa3-private-wealth-ips",
    title: "Individual IPS & Goals",
    content: `An individual IPS = **objectives + constraints**, like institutions, but with personal nuances.

## Objectives
- **Return**: derived from goals (retirement, education, bequest) — solve for the required return given spending and horizon.
- **Risk**: combine **ability** (wealth vs. needs, horizon, flexibility) and **willingness** (psychological) — use the **lower**, then educate.

## Constraints (T-T-L-L-U)
- **Time horizon** (often multi-stage: pre- and post-retirement), **Taxes** (a major individual factor), **Liquidity** (spending, emergencies, large purchases), **Legal/regulatory** (trusts, jurisdiction), **Unique** (ESG, concentrated stock, illiquid business).

## Distinctive features
- **Goals-based** framing; **human capital** and **mortality/longevity** risk shape allocation and insurance.
- Multi-stage horizons and changing circumstances mean the IPS is **reviewed regularly**.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa3-private-wealth-human-capital-m01",
    topicId: "cfa3-private-wealth-human-capital",
    title: "Human Capital & Life-Cycle Investing",
    content: `**Total wealth = financial capital + human capital** (the present value of future labor income).

## Implications
- **Bond-like human capital** (stable salary, e.g. tenured professor) → tilt financial assets **toward equities**.
- **Equity-like human capital** (volatile, correlated with markets, e.g. a trader) → tilt **toward bonds**.
- Human capital **declines** with age while financial capital grows → the equity share of *financial* assets typically **falls over the life cycle** (a glide path), even though total-wealth risk may stay similar.

## Risks to human capital
- **Mortality risk** (death cuts future income) → **life insurance**.
- **Longevity risk** (outliving assets) → **annuities**.
- **Earnings/disability risk** → disability insurance and an emergency reserve.

## Integration
- Optimal asset allocation considers human capital's size and its **correlation** with risky assets, plus insurance to hedge its risks.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa3-private-wealth-tax-efficiency-m01",
    topicId: "cfa3-private-wealth-tax-efficiency",
    title: "Tax-Efficient Investing & Asset Location",
    content: `## Tax drag compounds
After-tax return r(1 − t) over many years sharply reduces terminal wealth. Minimizing the tax drag is a major source of value for individuals.

## Levers
- **Asset location**: hold **tax-inefficient** assets (taxable bonds, high-turnover, REITs) in **tax-deferred/exempt** accounts; **tax-efficient** assets (low-turnover equity, municipals) in taxable accounts.
- **Tax-loss harvesting**: realize losses to offset gains/income.
- **Defer gains** (lower turnover) and use the **step-up in basis** at death.
- **Account types**: tax-deferred (pre-tax in, taxed out) vs tax-exempt (after-tax in, tax-free out) — choose by current vs expected future rates.
- Hold appreciated assets to be **gifted/bequeathed** rather than sold.

## Taxes & risk
- Taxes reduce both **return and risk** (the government shares gains/losses), so optimize on an **after-tax** basis. Wider rebalancing corridors for taxable accounts limit taxable trades.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa3-private-wealth-estate-planning-m01",
    topicId: "cfa3-private-wealth-estate-planning",
    title: "Estate Planning & Wealth Transfer",
    content: `Transfer wealth efficiently across generations and to charity.

## Lifetime gifts vs bequests
- **Gifting during life** removes future **appreciation** from the estate and may use a lower gift-tax rate/annual exclusion; **bequests** transfer at death (often with a **step-up in basis**).
- The relative benefit depends on gift vs estate tax rates, the donor's vs recipient's tax rates, and expected growth.

## Tools
- **Trusts** (revocable — flexible, in the estate; **irrevocable** — removes assets/control from the estate), **life insurance** (liquidity to pay estate taxes; often held in an irrevocable trust), and **charitable** vehicles (donor-advised funds, charitable trusts).
- **Generation-skipping** transfers and **forced heirship** rules vary by jurisdiction.

## Core ideas
- **Relative after-tax value** of gifting vs bequest drives the decision.
- Coordinate with the IPS: liquidity for taxes, concentrated-position management, and the client's **legacy goals**.`,
    estimatedReadTime: 2,
    orderIndex: 4
  },
  {
    id: "cfa3-private-wealth-risk-insurance-m01",
    topicId: "cfa3-private-wealth-risk-insurance",
    title: "Risk Management for Individuals",
    content: `Individuals face risks beyond market risk; insurance transfers those that are **low-probability, high-severity**.

## Major personal risks & tools
- **Mortality** (premature death cuts human capital) → **life insurance** (term vs whole/permanent).
- **Longevity** (outliving assets) → **annuities** (immediate/deferred; longevity annuities).
- **Health/disability** → health and disability insurance.
- **Property/liability** → P&C and umbrella liability coverage.

## Risk management framework
- **Retain** (small, frequent), **reduce/avoid**, **transfer** (insure low-frequency/high-severity), and **self-insure** where wealth allows.
- The **economic (holistic) balance sheet** includes human capital and the PV of pensions/liabilities, not just financial assets.

## Insurance vs investing
- Life insurance hedges **early death**; annuities hedge **long life** — they are complementary. Need analysis sizes coverage from the gap between resources and obligations.`,
    estimatedReadTime: 2,
    orderIndex: 5
  },
  {
    id: "cfa3-institutional-db-pension-m01",
    topicId: "cfa3-institutional-db-pension",
    title: "Defined-Benefit Pension Management",
    content: `## Risk tolerance drivers
A DB plan's ability to take risk **rises** with: a **younger** workforce (longer horizon), a **higher funded ratio**, a **smaller** plan relative to the sponsor, a **financially strong** sponsor, and **low correlation** between plan assets and the sponsor's business.

## Objectives & constraints
- **Return**: at minimum, fund the liabilities (the discount/actuarial rate is a benchmark).
- **Risk**: surplus risk; balance funding cost vs contribution volatility.
- **Liquidity**: driven by the **retired-lives proportion** (benefit payments) and contributions; **time horizon** long but tied to workforce age.
- **Legal**: ERISA-type fiduciary rules; **Taxes**: usually tax-exempt.

## LDI
- Liabilities are **bond-like** → **liability-driven investing** (duration/BPV match) plus a return-seeking sleeve. Inflation-linked benefits → linkers. Better-funded plans **de-risk** along a glide path.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa3-institutional-foundations-m01",
    topicId: "cfa3-institutional-foundations",
    title: "Foundations & Endowments IPS",
    content: `Both support a mission **in perpetuity**, implying long horizons, high risk tolerance, and a real-return focus.

## Return objective
≈ **spending rate + inflation + investment fees**. **US private foundations** must distribute ~**5%** annually; endowments set their own spending rule.

## Spending rules (endowments)
- **Simple** (% of beginning assets — volatile), **rolling 3-year average** (smooths), **geometric/Yale** (weights prior spending + a % of market value — most stable).

## Constraints
- **Time horizon**: very long/perpetual. **Liquidity**: modest near-term (spending) but constrained by large **illiquid alternatives** allocations. **Taxes**: largely tax-exempt. **Legal/regulatory**: UPMIFA-type prudence; donor restrictions. **Unique**: mission/ESG constraints.

## Allocation
- The **endowment model**: heavy equities and **alternatives** (PE, real assets, hedge funds) for real returns over long horizons, accepting illiquidity.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa3-institutional-insurance-m01",
    topicId: "cfa3-institutional-insurance",
    title: "Insurance Companies",
    content: `Insurers invest premiums (the "**float**") to fund future claims; they are **liability-driven** and heavily regulated.

## Life vs P&C
| | Life insurers | Property-casualty (P&C) |
| --- | --- | --- |
| Liabilities | Long-duration, predictable | Shorter, **lumpy/uncertain** (catastrophes) |
| Investing | Long bonds, ALM/duration match, some equities | Shorter bonds + **more liquidity**; equities for surplus |
| Key risk | Interest-rate/disintermediation | Underwriting/cat risk, liquidity |

## Constraints
- **Risk**: low — protect policyholders/solvency. **Liquidity**: high for P&C (claims), lower for life. **Time horizon**: long (life), shorter (P&C). **Taxes**: taxable, complex. **Legal/regulatory**: solvency capital (e.g., RBC, Solvency II) drives asset choices.

## Themes
- **Asset-liability management** and **duration matching** dominate; credit quality is emphasized; a **surplus** portfolio can take more risk than reserves backing liabilities.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa3-institutional-banks-m01",
    topicId: "cfa3-institutional-banks",
    title: "Banks & Asset-Liability Management",
    content: `A bank's **securities portfolio** is a residual/liquidity buffer managed within an **asset-liability management (ALM)** framework.

## Goals
- Manage the **net interest margin** and the **duration gap** between assets (loans, securities) and liabilities (deposits, borrowings).
- Maintain **liquidity** (e.g., LCR/NSFR), meet **regulatory capital** (Basel risk-weights favor high-quality, liquid assets), and provide **collateral**.

## Constraints
- **Risk**: low for the securities book (it backs deposits/regulatory needs). **Liquidity**: high. **Time horizon**: tied to the liability structure. **Taxes**: taxable. **Legal/regulatory**: capital and liquidity rules dominate.

## Tools
- Use **duration/key-rate** measures and derivatives (swaps, futures) to manage the duration gap and interest-rate risk; tilt to **high-quality, liquid** securities (governments, agencies) for regulatory and liquidity reasons.`,
    estimatedReadTime: 2,
    orderIndex: 4
  },
  {
    id: "cfa3-institutional-sovereign-m01",
    topicId: "cfa3-institutional-sovereign",
    title: "Sovereign Wealth Funds",
    content: `State-owned funds investing national reserves/resource revenues. Objectives vary by **type**:

| Type | Purpose | Horizon/risk |
| --- | --- | --- |
| **Budget stabilization** | smooth commodity/revenue swings | short horizon, low risk, liquid |
| **Savings/future generations** | preserve wealth across generations | very long, high risk tolerance |
| **Development** | fund domestic projects | long, project-linked |
| **Reserve investment** | earn more on FX reserves | varies, often liquid/high-grade |
| **Pension reserve** | pre-fund future pension liabilities | long, liability-aware |

## Constraints
- **Time horizon/risk** depend on type (stabilization = conservative; savings = aggressive). **Liquidity**: high for stabilization, low for savings/development. **Legal/regulatory & political**: governance, transparency (Santiago Principles), and political scrutiny.

## Themes
- Long-horizon savings funds resemble **endowments** (equity/alternatives heavy); stabilization funds resemble **liquidity reserves** (short bonds).`,
    estimatedReadTime: 2,
    orderIndex: 5
  },
  {
    id: "cfa3-ethics-code-standards-m01",
    topicId: "cfa3-ethics-code-standards",
    title: "Code of Ethics & the Seven Standards",
    content: `The **Code of Ethics** sets the ethical principles; the **Standards of Professional Conduct** make them actionable. The most heavily tested area at **every** level.

## The seven Standards
| # | Standard | Core idea |
| --- | --- | --- |
| **I** | Professionalism | Knowledge of law, independence, no misrepresentation, no misconduct |
| **II** | Integrity of Capital Markets | No MNPI use, no manipulation |
| **III** | Duties to Clients | Loyalty/care, fair dealing, suitability, performance, confidentiality |
| **IV** | Duties to Employers | Loyalty, additional compensation, supervision |
| **V** | Investment Analysis & Actions | Diligence/reasonable basis, communication, record retention |
| **VI** | Conflicts of Interest | Disclose conflicts, priority of transactions, referral fees |
| **VII** | Responsibilities as a Member/Candidate | Don't compromise CFA/CFA Institute integrity; conduct in the program |

## Approach
- Follow the **stricter** of law or the Code. Read each case, map the action to the precise sub-standard, and pick the **least-compliant** choice.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa3-ethics-professionalism-m01",
    topicId: "cfa3-ethics-professionalism",
    title: "Professionalism & Market Integrity (I & II)",
    content: `## Standard I — Professionalism
- **I(A) Knowledge of the Law**: follow the **stricter** of law/Code; **dissociate** from violations.
- **I(B) Independence & Objectivity**: avoid gifts/pressure that bias you; modest items only; firewalls.
- **I(C) Misrepresentation**: no untrue statements, no guaranteed returns on risky assets; **plagiarism** is misrepresentation.
- **I(D) Misconduct**: no dishonesty/fraud reflecting on professional integrity.

## Standard II — Integrity of Capital Markets
- **II(A) Material Nonpublic Information**: don't act/cause others to act on **MNPI**. **Mosaic theory** (public + non-material nonpublic) is allowed; use **firewalls**.
- **II(B) Market Manipulation**: no **transaction-based** (wash trades, spoofing, pump-and-dump) or **information-based** manipulation.

> Recommended procedures — restricted lists, firewalls, compliance review — frequently resolve I- and II-type vignettes.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa3-ethics-duties-clients-m01",
    topicId: "cfa3-ethics-duties-clients",
    title: "Duties to Clients (Standard III)",
    content: `## Standard III — Duties to Clients
- **III(A) Loyalty, Prudence & Care**: place clients' interests first; for pensions, loyalty runs to the **beneficiaries**. Use **client brokerage (soft dollars)** for the client's benefit; seek **best execution**.
- **III(B) Fair Dealing**: disseminate recommendations and changes **fairly** to all clients — don't favor select clients.
- **III(C) Suitability**: match recommendations to each client's **IPS** (objectives/constraints); in advisory relationships consider the **total portfolio**.
- **III(D) Performance Presentation**: **fair, accurate, and complete** — no cherry-picking.
- **III(E) Preservation of Confidentiality**: keep current/former/prospective client information confidential (unless legally required or to report illegal activity).

> Watch vignettes mixing III with **VI(B)** Priority of Transactions and **I(B)** Independence.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa3-ethics-conflicts-m01",
    topicId: "cfa3-ethics-conflicts",
    title: "Conflicts & Priority of Transactions (VI)",
    content: `## Standard VI — Conflicts of Interest
- **VI(A) Disclosure of Conflicts**: **fully and fairly** disclose anything that could impair independence/objectivity — ownership, board seats, compensation arrangements, broker relationships — **prominently** and in plain language.
- **VI(B) Priority of Transactions**: **client and employer trades take precedence** over a member's own. Personal trading must never disadvantage clients; use **restricted lists, pre-clearance, and blackout/restricted periods** (especially for IPOs and private placements).
- **VI(C) Referral Fees**: disclose to clients and the employer any compensation for referrals so clients can assess bias.

## Standard IV (Duties to Employers) — overlap
- **IV(A) Loyalty** (no taking records/clients), **IV(B) Additional Compensation** (written consent), **IV(C) Supervisors** (prevent/detect violations).

> The default cure for a conflict is **disclosure + management**, never concealment.`,
    estimatedReadTime: 2,
    orderIndex: 4
  },
  {
    id: "cfa3-ethics-application-cases-m01",
    topicId: "cfa3-ethics-application-cases",
    title: "Application of the Code & Standards",
    content: `Level III tests ethics through **cases/vignettes**. A reliable method:

## Method
1. **Identify the actors and actions** in the scenario.
2. **Map each action to the precise sub-standard** (e.g., taking a client list → IV(A) Loyalty; trading on a tip → II(A) MNPI).
3. Pick the **least compliant** action / the response that **best** remedies it.
4. When law and the Code differ, follow the **stricter**.

## Common case themes
- **Soft dollars** must benefit the client; **best execution** cannot be sacrificed.
- **Mosaic theory** is permissible; trading on MNPI is not.
- **Gifts**: from clients (disclose), from third parties seeking influence (decline).
- **GIPS/AMC** claims must be accurate and firm-wide.
- **Recommended procedures** (firewalls, restricted lists, disclosure, supervision, record retention) usually resolve the case.`,
    estimatedReadTime: 2,
    orderIndex: 5
  },
  {
    id: "cfa3-risk-management-market-risk-m01",
    topicId: "cfa3-risk-management-market-risk",
    title: "Measuring & Managing Market Risk (VaR)",
    content: `**Value at Risk (VaR)** is the minimum loss expected over a horizon at a given probability — e.g., a 5% one-day VaR of $1m means losses should exceed $1m on ~5% of days.

## Estimating VaR
- **Parametric (variance–covariance)**: assumes normally distributed returns; fast but understates tail risk.
- **Historical simulation**: re-prices the portfolio over an actual past return window; no distributional assumption but anchored to history.
- **Monte Carlo**: simulates many return paths from an assumed model; flexible but model- and compute-intensive.

## Limits & complements
- VaR says nothing about losses **beyond** the threshold → use **Conditional VaR (expected shortfall)**, the average loss in the tail.
- Add **sensitivity measures** (beta, duration, delta/gamma, vega) and **scenario/stress tests** (historical and hypothetical) to capture non-normal, regime-shift risk.

## Using risk measures
- **Risk budgeting** allocates a total risk limit across positions/managers.
- Constraints include **position limits, stop-losses, and VaR/scenario limits**; market participants (banks, asset managers, pensions) weight these differently per their mandates.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa3-risk-management-swaps-forwards-m01",
    topicId: "cfa3-risk-management-swaps-forwards",
    title: "Swaps, Forwards & Futures Strategies",
    content: `Linear (symmetric) derivatives let managers alter exposures **without trading the underlying**.

## Duration & equity exposure
- **Interest-rate swaps**: receive-fixed/pay-floating **adds** duration; pay-fixed/receive-floating **reduces** it. The swap's duration ≈ difference between fixed- and floating-leg durations.
- **Bond futures** adjust portfolio duration toward a target via the basis-point value (BPV) hedge ratio.
- **Equity index futures** change beta: contracts ≈ [(β_target − β_port)/β_fut] × (portfolio value / futures value).

## Currency & asset-class overlays
- **Currency forwards/swaps** hedge or take FX exposure; **total-return / equity swaps** synthetically gain or shed an asset-class exposure cheaply.
- A **cash-equitization** ("cash drag") overlay uses index futures to keep idle cash market-exposed.

## Trade-offs
- Symmetric instruments remove **both** downside and upside. Futures bring **margin and daily mark-to-market**; swaps are OTC with counterparty risk (mitigated by collateral/clearing). **Basis risk** remains when the derivative imperfectly matches the exposure.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa3-risk-management-options-strategies-m01",
    topicId: "cfa3-risk-management-options-strategies",
    title: "Options Strategies",
    content: `Options give **asymmetric** payoffs — protection or income — for a premium.

## Directional & protective
- **Protective put**: long asset + long put → floor on losses, upside kept (less premium).
- **Covered call**: long asset + short call → premium income, upside capped at the strike.
- **Collar**: protective put financed by a short call → bounded downside *and* upside.

## Spreads & volatility
- **Bull call / bear put spreads** reduce cost by capping the payoff; **calendar spreads** trade time decay.
- **Straddle/strangle** (long): profit from large moves either way (long volatility); short versions earn premium if the market is quiet.

## The Greeks
- **Delta** (≈ directional exposure), **gamma** (delta's sensitivity → why delta hedges must be rebalanced), **theta** (time decay), **vega** (volatility), **rho** (rates).
- Implied volatility and the **volatility smile/skew** shape option prices; managers choose strategies by their volatility and directional view.`,
    estimatedReadTime: 2,
    orderIndex: 4
  },
  {
    id: "cfa3-risk-management-enterprise-m01",
    topicId: "cfa3-risk-management-enterprise",
    title: "Risk Governance & Enterprise Risk Management",
    content: `**Enterprise Risk Management (ERM)** is a centralized, top-down framework that manages risk **across the whole organization** against its goals and risk tolerance.

## Risk governance
- The **board/senior management** set risk tolerance aligned to objectives; an effective framework is **enterprise-wide**, not siloed.
- Steps: (1) identify & classify risks, (2) measure & aggregate, (3) set a **risk budget/limits**, (4) monitor & report, (5) adjust/mitigate.

## Risk types
- **Financial**: market, credit, liquidity. **Non-financial**: operational, model, solvency, regulatory, legal, settlement, tail risk.
- Aggregation must account for **correlations** — risks are not simply additive.

## Mitigation choices
- **Prevent/avoid**, **accept** (self-insure), **transfer** (insurance), or **shift/hedge** (derivatives). Choice weighs cost vs. benefit and the firm's comparative advantage in bearing each risk.
- Good governance places risk decisions where the firm has the most knowledge and gives a **centralized** view of total exposure.`,
    estimatedReadTime: 2,
    orderIndex: 5
  },
  {
    id: "cfa3-alternative-investments-hedge-funds-m01",
    topicId: "cfa3-alternative-investments-hedge-funds",
    title: "Hedge Fund Strategies",
    content: `Hedge funds pursue **absolute return** using leverage, shorting, and derivatives, grouped by strategy.

## Major categories
- **Equity hedge**: long/short equity, market-neutral, short-biased.
- **Event-driven**: merger arbitrage, distressed, special situations.
- **Relative value**: fixed-income/convertible arbitrage — small mispricings, high leverage.
- **Opportunistic/macro**: global macro, managed futures (CTAs/trend-following).
- **Multi-strategy**: allocate dynamically across the above.

## Risk & return profile
- Strategies vary from **equity-like** (long/short) to **diversifying/convex** (managed futures often gains in crises).
- Many carry **tail risk**: arbitrage and short-volatility styles can show steady gains then sharp drawdowns ("picking up pennies in front of a steamroller").

## Practicalities
- Conditional, **time-varying correlations** to equities (low in calm, higher in stress).
- **Fees** (commonly ~1.5-and-15/20), lock-ups, and gates. Benchmarking uses **peer groups, absolute targets, or risk-factor models** rather than a single index.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa3-alternative-investments-private-equity-m01",
    topicId: "cfa3-alternative-investments-private-equity",
    title: "Private Equity & Venture Capital",
    content: `Private equity buys, improves, and exits private (or take-private) companies via long-lived, illiquid funds.

## Structure
- **Closed-end LP funds**: investors (LPs) commit capital that a **GP** draws down over an investment period. Typical terms: **2% management fee + 20% carried interest** over an **8% hurdle**, often with a **clawback**.
- **Capital is committed, then called** — investors hold dry powder and pace commitments across **vintage years**.

## Value creation & the J-curve
- Buyouts add value through **operational improvement, financial leverage, and multiple expansion**; venture funds back early-stage growth with high dispersion and failure rates.
- The **J-curve**: fees and early markdowns create initial negative returns before exits drive gains.

## Performance & risk
- Measured by **IRR and MOIC/TVPI** (money-weighted), plus **DPI** (realized). Compared against a **public-market equivalent (PME)**.
- Risks: illiquidity, leverage, manager dispersion (skill persistence matters), and valuation **smoothing** that understates true volatility.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa3-alternative-investments-real-estate-m01",
    topicId: "cfa3-alternative-investments-real-estate",
    title: "Real Estate Investment",
    content: `Real estate spans **private** (direct, funds) and **public** (REITs) plus **equity** and **debt** (mortgages) quadrants.

## Valuation
- **Income/direct-capitalization**: Value = NOI / **cap rate**; a lower cap rate implies a higher price (and lower expected return).
- **Discounted cash flow** of NOI plus a terminal value; **cost** and **sales-comparison** approaches cross-check.
- **NOI** = rental and other income − operating expenses (excludes financing and taxes).

## Portfolio role
- Provides **income, diversification, and partial inflation protection**; returns driven by income yield plus appreciation.
- **Leverage** amplifies both return and risk; vacancy, financing, and liquidity are key risks.

## Vehicles
- **REITs** offer liquidity and daily pricing but behave more **equity-like** in the short run; **private real estate** is appraisal-priced → **smoothed**, understated volatility.
- Core → value-add → opportunistic styles trade rising risk/return and leverage.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa3-alternative-investments-real-assets-m01",
    topicId: "cfa3-alternative-investments-real-assets",
    title: "Commodities & Real Assets",
    content: `Commodities and other real assets are added mainly for **inflation sensitivity and diversification**.

## Commodity returns
- Most exposure is via **futures**, not physical holding. Total return = **spot + roll + collateral** yield.
- **Roll yield** is positive in **backwardation** (futures below spot) and negative in **contango** (futures above spot).
- Theories: **insurance/hedging-pressure** and **theory of storage** (convenience yield) explain the futures curve.

## Role & risks
- Historically **positive correlation with inflation surprises**, a diversifier versus stocks/bonds — but volatile and producing **no income**.
- Storage, seasonality, and curve shape drive returns; correlations can rise in macro shocks.

## Other real assets
- **Infrastructure, timber, farmland, and natural resources** offer long-duration, inflation-linked cash flows.
- Like other privates, valuations may be **appraisal-based (smoothed)**; sizing must respect illiquidity.`,
    estimatedReadTime: 2,
    orderIndex: 4
  },
  {
    id: "cfa3-alternative-investments-private-debt-m01",
    topicId: "cfa3-alternative-investments-private-debt",
    title: "Private Debt & Infrastructure",
    content: `Private debt and infrastructure provide **contractual, often inflation-linked income** with illiquidity premia.

## Private debt
- **Direct lending** (senior secured loans to mid-market firms), **mezzanine** (subordinated, equity kicker), **distressed**, and **specialty finance** (venture debt, real-estate/asset-backed).
- Return drivers: **credit spread + illiquidity premium**, often **floating-rate** (low duration, rises with rates). Key risk is **credit/default and recovery**, plus weak covenants in frothy markets.

## Infrastructure
- Long-lived physical assets (transport, utilities, energy, social). **Brownfield** (operating, stable yield) vs. **greenfield** (development, higher risk).
- Cash flows are often **regulated or contracted and inflation-linked**, giving bond-like, diversifying returns over long horizons.

## Portfolio fit
- Both suit long-horizon investors seeking **income and inflation protection**; illiquidity, leverage, and (for infrastructure) regulatory/political risk constrain sizing and require careful pacing.`,
    estimatedReadTime: 2,
    orderIndex: 5
  },
  {
    id: "cfa3-manager-selection-quantitative-m01",
    topicId: "cfa3-manager-selection-quantitative",
    title: "Quantitative Manager Evaluation",
    content: `Quantitative evaluation tests whether a track record reflects **skill** rather than luck, beta, or biases.

## Returns-based analysis
- Regress manager returns on factor/benchmark returns to separate **alpha (skill)** from **factor (beta) exposure** — don't pay active fees for cheap beta.
- Gauge consistency with the **information ratio** (active return / tracking error) and risk-adjusted measures (Sharpe, Sortino).

## Statistical caution
- Short, volatile records have **low statistical power** to distinguish skill from luck.
- **Backfill and survivorship biases** inflate database track records; returns may be **smoothed** for illiquid holdings.

## Style & drift
- Confirm the manager actually delivers the intended exposures; watch for **style drift** away from the mandate.
- Outputs feed a **forward-looking** judgment — past returns alone are weak predictors, so combine the quant evidence with qualitative due diligence.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa3-manager-selection-fees-m01",
    topicId: "cfa3-manager-selection-fees",
    title: "Fee Structures & Alignment",
    content: `Fee terms shape **net** returns and the alignment between manager and client incentives.

## Common structures
- **Ad valorem (AUM) fees**: a fixed % of assets — simple, but rewards asset gathering.
- **Performance fees**: a share of gains, raising upside alignment but also **risk-taking incentives**.
- **High-water mark**: performance fees only on new net profits (no double-charging after a drawdown). **Hurdle rate**: performance fee applies only above a threshold return.

## Alignment tools
- **Clawbacks** (private funds) return excess carry if later results disappoint; **caps** limit how much performance fee accrues.
- A **symmetric (fulcrum) fee** rewards out- and penalizes under-performance, improving alignment.

## Evaluation
- Compare **gross vs. net** of fees and assess whether the structure encourages **appropriate risk**.
- High fixed fees on a **beta-heavy** strategy destroy value; selection should weigh fee level *and* structure against expected, repeatable skill.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa3-manager-selection-style-analysis-m01",
    topicId: "cfa3-manager-selection-style-analysis",
    title: "Style & Holdings-Based Analysis",
    content: `Style analysis verifies **what a manager actually does** versus what they claim.

## Two approaches
- **Returns-based style analysis (RBSA)**: regress fund returns on a set of style indexes; the constrained coefficients estimate the **effective style mix**. Cheap and timely but backward-looking and can miss rapid changes.
- **Holdings-based style analysis (HBSA)**: classify the **actual positions** by size, value/growth, sector, region. More precise and current but **data-intensive** and a snapshot.

## What it reveals
- **Style drift** away from mandate, hidden **factor tilts**, and concentration.
- Whether reported alpha is genuine or simply **persistent factor exposure**.

## Use in selection
- Confirms the manager fits the intended **portfolio role** and won't overlap or double-count exposures with existing managers.
- Combine RBSA (history/consistency) with HBSA (current positioning) for a fuller picture before hiring or monitoring.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa3-manager-selection-monitoring-m01",
    topicId: "cfa3-manager-selection-monitoring",
    title: "Monitoring & Manager Termination",
    content: `Selection doesn't end at hiring — managers must be **monitored** and replaced when the thesis breaks.

## What to monitor
- **Performance** vs. benchmark and peers (in the right risk context), **style consistency**, and the original **investment thesis**.
- **People, process, and firm**: team turnover/**key-person** departures, ownership changes, asset growth toward **capacity** limits, and **operational** red flags.

## Termination triggers
- Loss of the rationale for hiring: **style drift**, **process change**, eroding edge, or operational/ethical problems — not just a bad quarter.
- Beware **performance chasing**: firing after underperformance and hiring recent winners often **destroys value** (mean reversion).

## Errors revisited
- Premature firing of a skilled manager is a **Type II error**; retaining an unskilled one is **Type I**. Set decisions on a sound, ex-ante framework and watch **transaction/transition costs** of replacement.`,
    estimatedReadTime: 2,
    orderIndex: 4
  },
  {
    id: "cfa3-manager-selection-universe-m01",
    topicId: "cfa3-manager-selection-universe",
    title: "Universe Definition & Process Screening",
    content: `Sound selection starts by **defining the opportunity set** and screening it down to candidates worth deep diligence.

## Universe definition
- Specify the **mandate**: asset class, style, region, vehicle (separate account vs. fund), liquidity, and constraints (ESG, leverage).
- A poorly defined universe yields **apples-to-oranges** comparisons and misleading peer rankings.

## Screening
- Apply **quantitative filters** (track-record length, AUM/capacity, risk-adjusted performance, fees) and **qualitative filters** (firm stability, transparency, alignment).
- Adjust databases for **survivorship/backfill** bias so the screen isn't built on inflated histories.

## From screen to shortlist
- Surviving managers proceed to full **investment + operational due diligence**.
- The aim is a **repeatable, documented process** that controls both error types and produces a **conviction-weighted** recommendation grounded in skill and operations — not a ranking by last year's return.`,
    estimatedReadTime: 2,
    orderIndex: 5
  }
];

export const expQuestions: Question[] = [
  // Passive/Active/Factor
  { id: "cfa3-equity-pm-passive-active-factor-q01", topicId: "cfa3-equity-pm-passive-active-factor", text: "Active management is most appropriately evaluated using the:", optionA: "Sharpe ratio", optionB: "Information ratio (active return / tracking error)", optionC: "Cap rate", optionD: "Current ratio", correctOption: "B", explanation: "The information ratio measures active return per unit of active risk, the natural gauge of active skill.", orderIndex: 0 },
  { id: "cfa3-equity-pm-passive-active-factor-q02", topicId: "cfa3-equity-pm-passive-active-factor", text: "A passive index fund seeks primarily to minimize:", optionA: "Tracking error relative to its benchmark", optionB: "Beta", optionC: "Dividend income", optionD: "The number of holdings", correctOption: "A", explanation: "Passive strategies aim to replicate the benchmark, so minimizing tracking error (and cost) is the objective.", orderIndex: 1 },
  { id: "cfa3-equity-pm-passive-active-factor-q03", topicId: "cfa3-equity-pm-passive-active-factor", text: "'Smart beta' / factor strategies are best described as:", optionA: "Purely passive cap-weighting", optionB: "Rules-based tilts toward rewarded factors, between passive and active", optionC: "High-frequency trading", optionD: "Risk-free investing", correctOption: "B", explanation: "Factor investing uses transparent rules to tilt toward factors like value or momentum, sitting between pure passive and discretionary active.", orderIndex: 2 },
  { id: "cfa3-equity-pm-passive-active-factor-q04", topicId: "cfa3-equity-pm-passive-active-factor", text: "Stratified sampling is a method of:", optionA: "Active stock picking", optionB: "Passively replicating an index without holding every constituent", optionC: "Hedging currency", optionD: "Estimating beta", correctOption: "B", explanation: "Stratified sampling matches index characteristics (sectors, size) with a subset of securities, approximating the index at lower cost.", orderIndex: 3 },
  { id: "cfa3-equity-pm-passive-active-factor-q05", topicId: "cfa3-equity-pm-passive-active-factor", text: "A market-neutral long/short strategy aims to:", optionA: "Maximize beta exposure", optionB: "Isolate alpha by removing market (beta) exposure", optionC: "Track the index exactly", optionD: "Eliminate all risk", correctOption: "B", explanation: "Balancing long and short positions removes net market exposure, isolating the manager's security-selection alpha.", orderIndex: 4 },
  { id: "cfa3-equity-pm-passive-active-factor-q06", topicId: "cfa3-equity-pm-passive-active-factor", text: "Which is a commonly cited rewarded equity factor?", optionA: "Ticker length", optionB: "Value (high book-to-market)", optionC: "Share price level", optionD: "Trading hours", correctOption: "B", explanation: "Value, size, momentum, quality, and low volatility are widely studied rewarded factors; value is a classic example.", orderIndex: 5 },
  { id: "cfa3-equity-pm-passive-active-factor-q07", topicId: "cfa3-equity-pm-passive-active-factor", text: "Equity futures or total-return swaps are often used to gain market exposure because they are:", optionA: "Free of any risk", optionB: "Cheap and liquid relative to buying all underlying stocks", optionC: "Always tax-exempt", optionD: "Guaranteed to outperform", correctOption: "B", explanation: "Derivatives provide efficient, low-cost, liquid beta exposure and are useful for overlays and completion strategies.", orderIndex: 6 },
  { id: "cfa3-equity-pm-passive-active-factor-q08", topicId: "cfa3-equity-pm-passive-active-factor", text: "According to the fundamental law of active management, the information ratio rises with:", optionA: "Higher fees", optionB: "Greater skill (IC) and breadth of independent decisions", optionC: "More tracking error alone", optionD: "Higher turnover alone", correctOption: "B", explanation: "IR ≈ IC × √breadth: combining skill with many independent bets raises the achievable information ratio.", orderIndex: 7 },
  { id: "cfa3-equity-pm-passive-active-factor-q09", topicId: "cfa3-equity-pm-passive-active-factor", text: "Higher portfolio turnover most directly increases:", optionA: "Transaction costs and tax drag", optionB: "Dividend yield", optionC: "Book value", optionD: "The risk-free rate", correctOption: "A", explanation: "Frequent trading raises explicit and implicit transaction costs and can trigger taxable gains, reducing net returns.", orderIndex: 8 },
  { id: "cfa3-equity-pm-passive-active-factor-q10", topicId: "cfa3-equity-pm-passive-active-factor", text: "A completion overlay is used to:", optionA: "Eliminate the benchmark", optionB: "Fill gaps so total exposures match the desired target", optionC: "Increase fees", optionD: "Remove all equities", correctOption: "B", explanation: "A completion overlay (often via derivatives) aligns the portfolio's net exposures with the intended target.", orderIndex: 9 },
  { id: "cfa3-equity-pm-passive-active-factor-q11", topicId: "cfa3-equity-pm-passive-active-factor", text: "Full replication of an index is most practical when the index has:", optionA: "Thousands of illiquid constituents", optionB: "A manageable number of liquid constituents", optionC: "No constituents", optionD: "Only derivatives", correctOption: "B", explanation: "Full replication works well for indices with relatively few, liquid names; otherwise sampling/optimization is used.", orderIndex: 10 },
  { id: "cfa3-equity-pm-passive-active-factor-q12", topicId: "cfa3-equity-pm-passive-active-factor", text: "Relative to passive management, active management generally has:", optionA: "Lower fees and lower tracking error", optionB: "Higher fees and higher tracking error", optionC: "Zero fees", optionD: "No benchmark", correctOption: "B", explanation: "Active strategies charge more and deliberately deviate from the benchmark, producing higher tracking error.", orderIndex: 11 },

  // Risk management with derivatives
  { id: "cfa3-risk-management-derivatives-q01", topicId: "cfa3-risk-management-derivatives", text: "To reduce a portfolio's equity beta, a manager would:", optionA: "Buy equity index futures", optionB: "Sell equity index futures", optionC: "Buy more stocks", optionD: "Buy call options", correctOption: "B", explanation: "Selling (shorting) index futures lowers the portfolio's effective beta/market exposure.", orderIndex: 0 },
  { id: "cfa3-risk-management-derivatives-q02", topicId: "cfa3-risk-management-derivatives", text: "Interest-rate futures and swaps are most commonly used to adjust a bond portfolio's:", optionA: "Credit rating", optionB: "Duration", optionC: "Coupon", optionD: "Currency", correctOption: "B", explanation: "Rate derivatives let managers raise or lower portfolio duration without buying/selling the underlying bonds.", orderIndex: 1 },
  { id: "cfa3-risk-management-derivatives-q03", topicId: "cfa3-risk-management-derivatives", text: "A protective put strategy provides:", optionA: "A floor on losses while retaining upside", optionB: "A cap on gains with no downside protection", optionC: "Income but unlimited downside", optionD: "No effect on the payoff", correctOption: "A", explanation: "Buying a put on a held asset sets a price floor while leaving upside intact (less the premium).", orderIndex: 2 },
  { id: "cfa3-risk-management-derivatives-q04", topicId: "cfa3-risk-management-derivatives", text: "A covered call (long stock + short call) primarily:", optionA: "Generates premium income but caps upside", optionB: "Provides downside protection below the strike", optionC: "Increases upside without limit", optionD: "Eliminates all risk", correctOption: "A", explanation: "Writing a call earns premium income but caps gains at the strike; downside is only cushioned by the premium received.", orderIndex: 3 },
  { id: "cfa3-risk-management-derivatives-q05", topicId: "cfa3-risk-management-derivatives", text: "A collar combines a:", optionA: "Long put and short call around a held asset", optionB: "Two long calls", optionC: "Two short puts", optionD: "Long stock only", correctOption: "A", explanation: "A collar buys a protective put and sells a call to finance it, bounding both downside and upside.", orderIndex: 4 },
  { id: "cfa3-risk-management-derivatives-q06", topicId: "cfa3-risk-management-derivatives", text: "Basis risk in a hedge refers to the risk that:", optionA: "The hedge and the exposure do not move perfectly together", optionB: "Margin is required", optionC: "The option expires worthless", optionD: "Interest rates are zero", correctOption: "A", explanation: "Basis risk arises when the hedging instrument and the hedged exposure are imperfectly correlated, leaving residual risk.", orderIndex: 5 },
  { id: "cfa3-risk-management-derivatives-q07", topicId: "cfa3-risk-management-derivatives", text: "Currency forwards are used to:", optionA: "Increase equity beta", optionB: "Hedge the FX exposure of foreign-currency assets", optionC: "Adjust credit risk", optionD: "Raise duration", correctOption: "B", explanation: "Currency forwards offset the exchange-rate exposure embedded in foreign-currency-denominated holdings.", orderIndex: 6 },
  { id: "cfa3-risk-management-derivatives-q08", topicId: "cfa3-risk-management-derivatives", text: "Compared with OTC forwards, exchange-traded futures require:", optionA: "No collateral", optionB: "Margin and daily mark-to-market settlement", optionC: "Bilateral negotiation of every term", optionD: "No clearinghouse", correctOption: "B", explanation: "Futures are margined and settled daily through a clearinghouse, reducing counterparty risk versus bilateral forwards.", orderIndex: 7 },
  { id: "cfa3-risk-management-derivatives-q09", topicId: "cfa3-risk-management-derivatives", text: "To raise a portfolio's duration toward a target, a manager would generally:", optionA: "Sell interest-rate futures", optionB: "Buy interest-rate futures (or receive-fixed in a swap)", optionC: "Buy protective puts", optionD: "Short equities", correctOption: "B", explanation: "Going long rate futures (or receiving fixed in a swap) adds duration, raising the portfolio toward its target.", orderIndex: 8 },
  { id: "cfa3-risk-management-derivatives-q10", topicId: "cfa3-risk-management-derivatives", text: "A drawback of hedging with a symmetric instrument like a forward or future is that it:", optionA: "Removes downside but keeps upside", optionB: "Removes both downside and upside exposure", optionC: "Has unlimited upside", optionD: "Requires no monitoring", correctOption: "B", explanation: "Forwards/futures lock in a rate, eliminating both adverse and favorable moves—unlike asymmetric options.", orderIndex: 9 },
  { id: "cfa3-risk-management-derivatives-q11", topicId: "cfa3-risk-management-derivatives", text: "Delta hedging an option position must be rebalanced over time because of:", optionA: "Theta", optionB: "Gamma (delta changes as the underlying moves)", optionC: "Rho", optionD: "The strike", correctOption: "B", explanation: "Gamma causes delta to change with the underlying, so a static delta hedge drifts and needs dynamic rebalancing.", orderIndex: 10 },
  { id: "cfa3-risk-management-derivatives-q12", topicId: "cfa3-risk-management-derivatives", text: "The number of equity futures to change beta depends on the target and current betas and the ratio of:", optionA: "Portfolio value to futures contract value", optionB: "Coupon to yield", optionC: "Dividends to price", optionD: "Duration to convexity", correctOption: "A", explanation: "Contracts ≈ [(β_target − β_portfolio)/β_futures] × (portfolio value / futures contract value).", orderIndex: 11 },

  // Private wealth: tax & estate
  { id: "cfa3-private-wealth-tax-estate-q01", topicId: "cfa3-private-wealth-tax-estate", text: "'Asset location' refers to:", optionA: "Geographic diversification", optionB: "Placing tax-inefficient assets in tax-advantaged accounts", optionC: "Choosing a custodian", optionD: "Currency hedging", correctOption: "B", explanation: "Asset location optimizes after-tax returns by holding tax-inefficient assets (e.g., bonds) in tax-deferred/exempt accounts.", orderIndex: 0 },
  { id: "cfa3-private-wealth-tax-estate-q02", topicId: "cfa3-private-wealth-tax-estate", text: "Tax drag is most damaging to terminal wealth when:", optionA: "Horizons are short", optionB: "Returns are taxed annually over long horizons", optionC: "There are no returns", optionD: "Assets are tax-exempt", correctOption: "B", explanation: "Annual taxation reduces the compounding base each year; over long horizons this drag compounds significantly.", orderIndex: 1 },
  { id: "cfa3-private-wealth-tax-estate-q03", topicId: "cfa3-private-wealth-tax-estate", text: "A tax-deferred account is most advantageous when the investor expects their future tax rate to be:", optionA: "Higher than today", optionB: "Lower than today", optionC: "Exactly the same", optionD: "Zero forever", correctOption: "B", explanation: "Deferring tax (pre-tax contributions, taxed on withdrawal) helps most when withdrawals are taxed at a lower future rate.", orderIndex: 2 },
  { id: "cfa3-private-wealth-tax-estate-q04", topicId: "cfa3-private-wealth-tax-estate", text: "Tax-loss harvesting improves after-tax returns by:", optionA: "Realizing losses to offset taxable gains", optionB: "Increasing turnover for its own sake", optionC: "Avoiding all equities", optionD: "Deferring dividends", correctOption: "A", explanation: "Harvesting losses offsets realized gains (and some income), lowering the current tax bill and deferring taxes.", orderIndex: 3 },
  { id: "cfa3-private-wealth-tax-estate-q05", topicId: "cfa3-private-wealth-tax-estate", text: "A 'step-up in basis' at death can benefit heirs by:", optionA: "Eliminating embedded capital gains on inherited assets", optionB: "Increasing the estate tax", optionC: "Forcing immediate sale", optionD: "Removing all dividends", correctOption: "A", explanation: "Resetting the cost basis to fair value at death can erase unrealized capital gains for heirs.", orderIndex: 4 },
  { id: "cfa3-private-wealth-tax-estate-q06", topicId: "cfa3-private-wealth-tax-estate", text: "Lifetime gifting can reduce estate taxes primarily by:", optionA: "Removing future appreciation of the gifted asset from the estate", optionB: "Increasing the taxable estate", optionC: "Raising the donor's income", optionD: "Eliminating the gift's value", correctOption: "A", explanation: "Gifting transfers an asset—and its future growth—out of the estate, often at a lower transfer-tax cost.", orderIndex: 5 },
  { id: "cfa3-private-wealth-tax-estate-q07", topicId: "cfa3-private-wealth-tax-estate", text: "Which is a constraint (not an objective) in an individual's IPS?", optionA: "Required rate of return", optionB: "Time horizon", optionC: "Risk tolerance", optionD: "Target alpha", correctOption: "B", explanation: "IPS constraints include time horizon, liquidity, taxes, legal/regulatory, and unique circumstances; return and risk are objectives.", orderIndex: 6 },
  { id: "cfa3-private-wealth-tax-estate-q08", topicId: "cfa3-private-wealth-tax-estate", text: "An irrevocable trust differs from a revocable trust in that the grantor:", optionA: "Can freely change or revoke it", optionB: "Generally gives up control, often removing assets from the taxable estate", optionC: "Pays no setup cost", optionD: "Retains full ownership", correctOption: "B", explanation: "Irrevocable trusts remove assets from the grantor's control (and often the estate), unlike revocable trusts.", orderIndex: 7 },
  { id: "cfa3-private-wealth-tax-estate-q09", topicId: "cfa3-private-wealth-tax-estate", text: "Holding low-turnover, tax-efficient equities in a taxable account is consistent with:", optionA: "Poor asset location", optionB: "Sound asset-location practice", optionC: "Maximizing tax drag", optionD: "Avoiding equities", correctOption: "B", explanation: "Tax-efficient assets belong in taxable accounts, leaving scarce tax-advantaged space for tax-inefficient holdings.", orderIndex: 8 },
  { id: "cfa3-private-wealth-tax-estate-q10", topicId: "cfa3-private-wealth-tax-estate", text: "An individual's 'human capital' is best described as:", optionA: "The present value of future labor income", optionB: "Their stock portfolio", optionC: "Their home equity", optionD: "Their pension only", correctOption: "A", explanation: "Human capital is the present value of expected future earnings; bond-like human capital argues for more equity in financial assets.", orderIndex: 9 },
  { id: "cfa3-private-wealth-tax-estate-q11", topicId: "cfa3-private-wealth-tax-estate", text: "Longevity risk for a retiree is the risk of:", optionA: "Dying earlier than expected", optionB: "Outliving one's assets", optionC: "Market volatility only", optionD: "Currency depreciation", correctOption: "B", explanation: "Longevity risk is the danger of living longer than planned and exhausting savings; annuities can hedge it.", orderIndex: 10 },
  { id: "cfa3-private-wealth-tax-estate-q12", topicId: "cfa3-private-wealth-tax-estate", text: "A tax-exempt account (after-tax contributions, tax-free withdrawals) is most attractive when future tax rates are expected to be:", optionA: "Lower than today", optionB: "Higher than today", optionC: "Zero", optionD: "Irrelevant", correctOption: "B", explanation: "Paying tax now (tax-exempt account) is favorable when withdrawals would otherwise be taxed at a higher future rate.", orderIndex: 11 },

  // Pensions & endowments
  { id: "cfa3-institutional-pensions-endowments-q01", topicId: "cfa3-institutional-pensions-endowments", text: "A defined-benefit pension generally has a HIGHER risk tolerance when:", optionA: "The workforce is older and the plan is underfunded", optionB: "The workforce is younger and the plan is well funded", optionC: "The sponsor is financially weak", optionD: "The plan is large relative to the sponsor", correctOption: "B", explanation: "Younger workforce, strong funded status, and a financially healthy sponsor all raise a DB plan's ability to bear risk.", orderIndex: 0 },
  { id: "cfa3-institutional-pensions-endowments-q02", topicId: "cfa3-institutional-pensions-endowments", text: "Because pension liabilities are bond-like, plans commonly adopt:", optionA: "Pure equity indexing", optionB: "Liability-driven investing (duration matching)", optionC: "Currency speculation", optionD: "Commodity-only portfolios", correctOption: "B", explanation: "LDI hedges the interest-rate sensitivity of the bond-like liabilities by matching asset and liability duration.", orderIndex: 1 },
  { id: "cfa3-institutional-pensions-endowments-q03", topicId: "cfa3-institutional-pensions-endowments", text: "An endowment's primary objective is typically to:", optionA: "Maximize short-term income", optionB: "Support spending in perpetuity while preserving real value", optionC: "Avoid all equities", optionD: "Minimize the time horizon", correctOption: "B", explanation: "Endowments aim to fund ongoing spending forever while maintaining the inflation-adjusted (real) value of the corpus.", orderIndex: 2 },
  { id: "cfa3-institutional-pensions-endowments-q04", topicId: "cfa3-institutional-pensions-endowments", text: "An endowment's return objective is approximately:", optionA: "The risk-free rate", optionB: "Spending rate + inflation + fees", optionC: "Zero", optionD: "The dividend yield only", correctOption: "B", explanation: "To preserve real value and fund spending, the required return ≈ spending rate + expected inflation + management costs.", orderIndex: 3 },
  { id: "cfa3-institutional-pensions-endowments-q05", topicId: "cfa3-institutional-pensions-endowments", text: "A rolling 3-year average spending rule is used to:", optionA: "Increase spending volatility", optionB: "Smooth distributions versus a simple percentage of current assets", optionC: "Eliminate spending", optionD: "Track a single year's return", correctOption: "B", explanation: "Averaging asset values over several years smooths spending, reducing year-to-year volatility in distributions.", orderIndex: 4 },
  { id: "cfa3-institutional-pensions-endowments-q06", topicId: "cfa3-institutional-pensions-endowments", text: "Endowments typically have a ____ risk tolerance and ____ time horizon.", optionA: "low; short", optionB: "high; long", optionC: "low; long", optionD: "high; short", correctOption: "B", explanation: "Their perpetual horizon and limited near-term liquidity needs give endowments high risk tolerance and a long horizon.", orderIndex: 5 },
  { id: "cfa3-institutional-pensions-endowments-q07", topicId: "cfa3-institutional-pensions-endowments", text: "A higher proportion of retired lives in a pension plan tends to increase its:", optionA: "Risk tolerance", optionB: "Liquidity needs", optionC: "Time horizon", optionD: "Equity allocation", correctOption: "B", explanation: "More retirees means larger, nearer-term benefit payments, raising liquidity needs and lowering risk tolerance.", orderIndex: 6 },
  { id: "cfa3-institutional-pensions-endowments-q08", topicId: "cfa3-institutional-pensions-endowments", text: "Banks and insurers, relative to endowments, generally have:", optionA: "Higher risk tolerance and longer horizons", optionB: "Lower risk tolerance with strong liability/ALM and liquidity focus", optionC: "No regulation", optionD: "No liabilities", correctOption: "B", explanation: "Regulated, liability-driven institutions like banks/insurers have lower risk tolerance and emphasize asset-liability management and liquidity.", orderIndex: 7 },
  { id: "cfa3-institutional-pensions-endowments-q09", topicId: "cfa3-institutional-pensions-endowments", text: "US private foundations are generally required to distribute about:", optionA: "1% of assets annually", optionB: "5% of assets annually", optionC: "20% of assets annually", optionD: "Nothing", correctOption: "B", explanation: "US private foundations typically must pay out roughly 5% of assets per year to maintain tax-exempt status.", orderIndex: 8 },
  { id: "cfa3-institutional-pensions-endowments-q10", topicId: "cfa3-institutional-pensions-endowments", text: "The 'Yale' (geometric/smoothing) spending rule blends:", optionA: "Prior spending and current market value", optionB: "Only the risk-free rate", optionC: "Dividends and coupons only", optionD: "Beta and alpha", correctOption: "A", explanation: "The geometric/Yale rule weights last year's (inflation-adjusted) spending and a percentage of current market value to stabilize payouts.", orderIndex: 9 },
  { id: "cfa3-institutional-pensions-endowments-q11", topicId: "cfa3-institutional-pensions-endowments", text: "A pension plan whose asset returns are highly correlated with the sponsor's operating results should generally take:", optionA: "More investment risk", optionB: "Less investment risk", optionC: "The same risk regardless", optionD: "Only currency risk", correctOption: "B", explanation: "High correlation between plan assets and sponsor health concentrates risk, arguing for a more conservative plan allocation.", orderIndex: 10 },
  { id: "cfa3-institutional-pensions-endowments-q12", topicId: "cfa3-institutional-pensions-endowments", text: "Endowments' long horizons and high risk tolerance often lead to large allocations to:", optionA: "Cash and T-bills", optionB: "Equities and alternative investments", optionC: "Short-term deposits only", optionD: "A single bond", correctOption: "B", explanation: "To meet real-return objectives over perpetual horizons, endowments tilt toward equities and alternatives (the 'endowment model').", orderIndex: 11 },

  // Rebalancing & execution
  { id: "cfa3-asset-allocation-rebalancing-execution-q01", topicId: "cfa3-asset-allocation-rebalancing-execution", text: "A percentage-range (corridor) rebalancing policy triggers a trade when:", optionA: "A fixed calendar date arrives", optionB: "An asset's weight breaches its tolerance band", optionC: "The market rises", optionD: "A dividend is paid", correctOption: "B", explanation: "Corridor rebalancing acts when an allocation drifts outside its preset band, regardless of the date.", orderIndex: 0 },
  { id: "cfa3-asset-allocation-rebalancing-execution-q02", topicId: "cfa3-asset-allocation-rebalancing-execution", text: "Optimal rebalancing corridors should be WIDER for assets with:", optionA: "Higher transaction costs", optionB: "Higher volatility", optionC: "Higher correlation with the rest of the portfolio", optionD: "Lower risk tolerance", correctOption: "A", explanation: "Higher trading costs justify wider bands to avoid frequent, costly rebalancing; higher volatility argues for narrower bands.", orderIndex: 1 },
  { id: "cfa3-asset-allocation-rebalancing-execution-q03", topicId: "cfa3-asset-allocation-rebalancing-execution", text: "Disciplined rebalancing is inherently:", optionA: "A momentum strategy", optionB: "A contrarian strategy (sell winners, buy losers)", optionC: "Identical to buy-and-hold", optionD: "Risk-free", correctOption: "B", explanation: "Rebalancing trims appreciated assets and tops up laggards—a contrarian action that can earn a diversification return.", orderIndex: 2 },
  { id: "cfa3-asset-allocation-rebalancing-execution-q04", topicId: "cfa3-asset-allocation-rebalancing-execution", text: "Implementation shortfall measures the difference between:", optionA: "Two benchmarks", optionB: "A paper portfolio's return and the actual executed return", optionC: "Beta and alpha", optionD: "Bid and ask only", correctOption: "B", explanation: "Implementation shortfall captures total trading cost as the gap between a hypothetical (decision-price) portfolio and the real one.", orderIndex: 3 },
  { id: "cfa3-asset-allocation-rebalancing-execution-q05", topicId: "cfa3-asset-allocation-rebalancing-execution", text: "Which is an IMPLICIT trading cost?", optionA: "Brokerage commission", optionB: "Market impact", optionC: "Exchange fee", optionD: "Transaction tax", correctOption: "B", explanation: "Market impact (the price move caused by trading) is implicit; commissions, fees and taxes are explicit costs.", orderIndex: 4 },
  { id: "cfa3-asset-allocation-rebalancing-execution-q06", topicId: "cfa3-asset-allocation-rebalancing-execution", text: "VWAP as an execution benchmark compares fills against the:", optionA: "Volume-weighted average price over the period", optionB: "Closing price only", optionC: "Risk-free rate", optionD: "Prior day's open", correctOption: "A", explanation: "VWAP measures execution quality against the volume-weighted average traded price during the order's horizon.", orderIndex: 5 },
  { id: "cfa3-asset-allocation-rebalancing-execution-q07", topicId: "cfa3-asset-allocation-rebalancing-execution", text: "A more aggressive (liquidity-demanding) execution generally has:", optionA: "Higher market impact but lower timing risk", optionB: "Lower impact and lower timing risk", optionC: "No costs", optionD: "Higher opportunity cost", correctOption: "A", explanation: "Trading quickly raises market-impact cost but reduces exposure to adverse price drift (timing risk).", orderIndex: 6 },
  { id: "cfa3-asset-allocation-rebalancing-execution-q08", topicId: "cfa3-asset-allocation-rebalancing-execution", text: "The opportunity cost component of implementation shortfall arises from:", optionA: "Commissions", optionB: "Portions of the order left unfilled as the price moves away", optionC: "Taxes", optionD: "The bid-ask spread only", correctOption: "B", explanation: "Unexecuted shares whose price moves adversely create an opportunity (missed-trade) cost.", orderIndex: 7 },
  { id: "cfa3-asset-allocation-rebalancing-execution-q09", topicId: "cfa3-asset-allocation-rebalancing-execution", text: "Slicing a large order into smaller child orders over time primarily aims to:", optionA: "Increase market impact", optionB: "Reduce market impact", optionC: "Raise commissions", optionD: "Avoid all risk", correctOption: "B", explanation: "Breaking a large order into pieces limits the price impact of demanding too much liquidity at once.", orderIndex: 8 },
  { id: "cfa3-asset-allocation-rebalancing-execution-q10", topicId: "cfa3-asset-allocation-rebalancing-execution", text: "Calendar rebalancing differs from corridor rebalancing in that it:", optionA: "Responds to market moves continuously", optionB: "Rebalances on fixed dates regardless of drift", optionC: "Never trades", optionD: "Eliminates transaction costs", correctOption: "B", explanation: "Calendar rebalancing is time-triggered, ignoring how far weights have drifted between dates.", orderIndex: 9 },
  { id: "cfa3-asset-allocation-rebalancing-execution-q11", topicId: "cfa3-asset-allocation-rebalancing-execution", text: "The diversification return captured by rebalancing is greatest when assets have:", optionA: "Perfectly correlated returns", optionB: "Volatile, less-than-perfectly correlated returns", optionC: "Zero volatility", optionD: "Identical returns", correctOption: "B", explanation: "Rebalancing benefits most from volatile assets whose correlations are below 1, harvesting relative mispricings.", orderIndex: 10 },
  { id: "cfa3-asset-allocation-rebalancing-execution-q12", topicId: "cfa3-asset-allocation-rebalancing-execution", text: "An implementation-shortfall execution algorithm explicitly trades off:", optionA: "Market impact against timing/price risk", optionB: "Dividends against coupons", optionC: "Beta against alpha", optionD: "Duration against convexity", correctOption: "A", explanation: "IS algorithms balance the cost of trading fast (impact) against the risk of trading slowly (price drift).", orderIndex: 11 },

  // Currency management
  { id: "cfa3-risk-management-currency-q01", topicId: "cfa3-risk-management-currency", text: "The total return on an unhedged foreign asset comprises the local asset return and the:", optionA: "Risk-free rate", optionB: "Currency (exchange-rate) return", optionC: "Dividend yield only", optionD: "Inflation rate", correctOption: "B", explanation: "An unhedged foreign investment earns the foreign asset's return plus the return from currency movements.", orderIndex: 0 },
  { id: "cfa3-risk-management-currency-q02", topicId: "cfa3-risk-management-currency", text: "The most commonly used instrument for currency hedging is the:", optionA: "Currency forward", optionB: "Equity index future", optionC: "Credit default swap", optionD: "Interest-rate cap", correctOption: "A", explanation: "Currency forwards are precise, low-cost and widely used; they are rolled at maturity to maintain a hedge.", orderIndex: 1 },
  { id: "cfa3-risk-management-currency-q03", topicId: "cfa3-risk-management-currency", text: "Currency risk is typically hedged MORE for foreign bond portfolios than equity portfolios because:", optionA: "Bonds have higher returns", optionB: "Currency volatility is large relative to bond returns", optionC: "Bonds have no issuer risk", optionD: "Equities cannot be hedged", correctOption: "B", explanation: "For bonds the currency swing can dwarf the yield, so hedging is common; for equities currency is a smaller, diversifying share.", orderIndex: 2 },
  { id: "cfa3-risk-management-currency-q04", topicId: "cfa3-risk-management-currency", text: "A fully hedged foreign-asset position is most appropriate for an investor who is:", optionA: "Long-horizon and risk-seeking", optionB: "Short-horizon and risk-averse", optionC: "Indifferent to risk", optionD: "Seeking maximum currency exposure", correctOption: "B", explanation: "Shorter horizons and risk aversion push toward higher hedge ratios to remove currency volatility.", orderIndex: 3 },
  { id: "cfa3-risk-management-currency-q05", topicId: "cfa3-risk-management-currency", text: "The minimum-variance hedge ratio is estimated as the:", optionA: "Beta from regressing domestic-currency asset returns on the exchange-rate return", optionB: "Ratio of durations", optionC: "Dividend yield", optionD: "Sharpe ratio", correctOption: "A", explanation: "The minimum-variance hedge ratio is the regression slope of the asset's domestic-currency return on the currency return.", orderIndex: 4 },
  { id: "cfa3-risk-management-currency-q06", topicId: "cfa3-risk-management-currency", text: "A proxy (cross) hedge is used when:", optionA: "A direct forward in the exposure currency is costly or unavailable", optionB: "The asset is domestic", optionC: "There is no currency risk", optionD: "Interest rates are zero", correctOption: "A", explanation: "A proxy hedge uses a correlated, more liquid/cheaper currency when a direct forward is impractical—introducing basis risk.", orderIndex: 5 },
  { id: "cfa3-risk-management-currency-q07", topicId: "cfa3-risk-management-currency", text: "Currency options differ from forwards as a hedge in that options:", optionA: "Provide asymmetric protection (downside hedged, upside kept) for a premium", optionB: "Lock in a single rate with no premium", optionC: "Cannot expire", optionD: "Have no cost", correctOption: "A", explanation: "Options hedge adverse moves while retaining favorable ones, at the cost of the premium—unlike symmetric forwards.", orderIndex: 6 },
  { id: "cfa3-risk-management-currency-q08", topicId: "cfa3-risk-management-currency", text: "A currency overlay manager is hired to:", optionA: "Manage the underlying stocks and bonds", optionB: "Manage currency exposure (and seek FX alpha) separately from the asset managers", optionC: "Set the strategic asset allocation", optionD: "Run the leaderboard", correctOption: "B", explanation: "A currency overlay separates FX management—hedging and active currency bets—from the underlying asset mandates.", orderIndex: 7 },
  { id: "cfa3-risk-management-currency-q09", topicId: "cfa3-risk-management-currency", text: "Maintaining a forward hedge requires periodically:", optionA: "Rolling the forward at maturity", optionB: "Paying dividends", optionC: "Exercising an option", optionD: "Issuing equity", correctOption: "A", explanation: "Forwards expire, so a continuing hedge is maintained by rolling into a new forward at each maturity.", orderIndex: 8 },
  { id: "cfa3-risk-management-currency-q10", topicId: "cfa3-risk-management-currency", text: "Active currency strategies commonly exploit which factor?", optionA: "Carry (interest-rate differentials)", optionB: "Bond convexity", optionC: "Equity book value", optionD: "Operating leverage", correctOption: "A", explanation: "Currency alpha tactics include carry, value (PPP), momentum and volatility trading.", orderIndex: 9 },
  { id: "cfa3-risk-management-currency-q11", topicId: "cfa3-risk-management-currency", text: "'Roll yield' on a currency hedge refers to the return from:", optionA: "Dividends on the foreign asset", optionB: "The forward premium/discount as the hedge is rolled", optionC: "Equity price changes", optionD: "Coupon reinvestment", correctOption: "B", explanation: "Hedging a currency trading at a forward premium or discount adds or subtracts return when the forward is rolled.", orderIndex: 10 },
  { id: "cfa3-risk-management-currency-q12", topicId: "cfa3-risk-management-currency", text: "Leaving foreign-equity currency exposure partially unhedged can be justified because currencies may:", optionA: "Guarantee higher returns", optionB: "Provide diversification to the overall portfolio", optionC: "Eliminate equity risk", optionD: "Remove the need for an IPS", correctOption: "B", explanation: "Currency returns are imperfectly correlated with equities, so some unhedged exposure can add diversification.", orderIndex: 11 },

  // Ethics: Asset Manager Code & GIPS
  { id: "cfa3-ethics-asset-manager-code-q01", topicId: "cfa3-ethics-asset-manager-code", text: "The Asset Manager Code applies at the level of the:", optionA: "Individual member", optionB: "Firm", optionC: "Regulator", optionD: "Client", correctOption: "B", explanation: "The AMC is a firm-level voluntary code of conduct, distinct from the individual Code and Standards.", orderIndex: 0 },
  { id: "cfa3-ethics-asset-manager-code-q02", topicId: "cfa3-ethics-asset-manager-code", text: "Compliance with the Asset Manager Code is:", optionA: "Verified by CFA Institute before a firm may claim it", optionB: "Self-claimed by the firm; CFA Institute does not verify it", optionC: "Mandatory for all firms", optionD: "Granted by regulators", correctOption: "B", explanation: "Firms claim AMC compliance themselves; CFA Institute does not certify or verify those claims.", orderIndex: 1 },
  { id: "cfa3-ethics-asset-manager-code-q03", topicId: "cfa3-ethics-asset-manager-code", text: "Which is one of the six components of the Asset Manager Code?", optionA: "Maximizing assets under management", optionB: "Trading (best execution, client brokerage)", optionC: "Beating the benchmark every year", optionD: "Avoiding all derivatives", correctOption: "B", explanation: "The AMC's six areas include Loyalty to Clients, Investment Process, Trading, Risk/Compliance, Performance/Valuation, and Disclosures.", orderIndex: 2 },
  { id: "cfa3-ethics-asset-manager-code-q04", topicId: "cfa3-ethics-asset-manager-code", text: "GIPS compliance must be applied on a ____ basis.", optionA: "Composite-by-composite", optionB: "Firm-wide", optionC: "Per-client", optionD: "Per-portfolio", correctOption: "B", explanation: "A firm either complies with GIPS firm-wide or it does not; partial (composite-only) compliance is not permitted.", orderIndex: 3 },
  { id: "cfa3-ethics-asset-manager-code-q05", topicId: "cfa3-ethics-asset-manager-code", text: "A GIPS composite must include:", optionA: "Only the firm's best-performing portfolios", optionB: "All fee-paying discretionary portfolios of a similar mandate", optionC: "Hypothetical model portfolios", optionD: "Only terminated accounts", correctOption: "B", explanation: "Composites group all actual fee-paying discretionary portfolios of a strategy, preventing cherry-picking and survivorship bias.", orderIndex: 4 },
  { id: "cfa3-ethics-asset-manager-code-q06", topicId: "cfa3-ethics-asset-manager-code", text: "GIPS requires returns to be calculated using a ____ return.", optionA: "Money-weighted", optionB: "Time-weighted", optionC: "Simple average", optionD: "Geometric-only nominal", correctOption: "B", explanation: "Time-weighted returns remove the distorting effect of client-driven external cash flows, the GIPS default for composites.", orderIndex: 5 },
  { id: "cfa3-ethics-asset-manager-code-q07", topicId: "cfa3-ethics-asset-manager-code", text: "Third-party verification under GIPS is:", optionA: "Mandatory", optionB: "Recommended but voluntary, and applies firm-wide", optionC: "Performed by CFA Institute", optionD: "Done per composite only", correctOption: "B", explanation: "Verification is recommended, voluntary, and assesses firm-wide compliance—not individual composites.", orderIndex: 6 },
  { id: "cfa3-ethics-asset-manager-code-q08", topicId: "cfa3-ethics-asset-manager-code", text: "Under the AMC, client brokerage (soft dollars) must be used:", optionA: "For the manager's overhead", optionB: "For the benefit of the client", optionC: "To reward the largest clients", optionD: "However the firm wishes", correctOption: "B", explanation: "The Trading component requires client brokerage to be used for the client's benefit, consistent with the Standards.", orderIndex: 7 },
  { id: "cfa3-ethics-asset-manager-code-q09", topicId: "cfa3-ethics-asset-manager-code", text: "The AMC requires firms to designate a:", optionA: "Marketing director", optionB: "Compliance officer responsible for policies and controls", optionC: "Chief investment officer only", optionD: "Board chair", correctOption: "B", explanation: "The Risk Management, Compliance and Support component requires a designated compliance officer and adequate controls.", orderIndex: 8 },
  { id: "cfa3-ethics-asset-manager-code-q10", topicId: "cfa3-ethics-asset-manager-code", text: "When first claiming GIPS compliance, a firm must present at least ____ of compliant history (building toward 10).", optionA: "1 month", optionB: "5 years (or since inception if shorter)", optionC: "20 years", optionD: "No history", correctOption: "B", explanation: "Firms must show a minimum of five years (or since inception) of GIPS-compliant performance, then build to ten.", orderIndex: 9 },
  { id: "cfa3-ethics-asset-manager-code-q11", topicId: "cfa3-ethics-asset-manager-code", text: "A primary purpose of the GIPS standards is to ensure:", optionA: "Higher returns", optionB: "Fair representation and full disclosure of performance", optionC: "Lower fees", optionD: "Tax efficiency", correctOption: "B", explanation: "GIPS exists to standardize performance reporting so it fairly represents results and fully discloses methodology.", orderIndex: 10 },
  { id: "cfa3-ethics-asset-manager-code-q12", topicId: "cfa3-ethics-asset-manager-code", text: "Under the AMC Disclosures component, firms must disclose:", optionA: "Only positive performance", optionB: "Conflicts of interest, fees and costs truthfully and on time", optionC: "Competitors' weaknesses", optionD: "Clients' identities publicly", correctOption: "B", explanation: "Disclosures must be truthful, accurate, complete and timely—covering conflicts, fees, costs and material information.", orderIndex: 11 },

  // Alternatives in portfolio management
  { id: "cfa3-alternative-investments-portfolio-role-q01", topicId: "cfa3-alternative-investments-portfolio-role", text: "A primary portfolio reason to add alternatives is:", optionA: "Guaranteed returns", optionB: "Diversification and potential return/inflation benefits", optionC: "Daily liquidity", optionD: "Zero fees", correctOption: "B", explanation: "Alternatives are added mainly for diversification, return enhancement, and inflation protection—not liquidity or low cost.", orderIndex: 0 },
  { id: "cfa3-alternative-investments-portfolio-role-q02", topicId: "cfa3-alternative-investments-portfolio-role", text: "Appraisal-based (stale) pricing of private assets causes reported returns to have:", optionA: "Overstated volatility", optionB: "Understated volatility and correlation (smoothing)", optionC: "No bias", optionD: "Negative returns", correctOption: "B", explanation: "Smoothing from infrequent appraisals understates measured volatility and correlation, flattering risk statistics.", orderIndex: 1 },
  { id: "cfa3-alternative-investments-portfolio-role-q03", topicId: "cfa3-alternative-investments-portfolio-role", text: "Feeding smoothed alternative returns directly into mean-variance optimization tends to:", optionA: "Under-allocate to alternatives", optionB: "Over-allocate to alternatives", optionC: "Have no effect", optionD: "Eliminate them", correctOption: "B", explanation: "Because risk looks artificially low, naive MVO over-allocates to alternatives; returns should be 'unsmoothed' first.", orderIndex: 2 },
  { id: "cfa3-alternative-investments-portfolio-role-q04", topicId: "cfa3-alternative-investments-portfolio-role", text: "The correlation of alternatives with public markets typically:", optionA: "Stays constant", optionB: "Rises during market crises, reducing diversification when most needed", optionC: "Falls to zero in crises", optionD: "Is always 1", correctOption: "B", explanation: "Diversification benefits weaken in stress as correlations spike across asset classes.", orderIndex: 3 },
  { id: "cfa3-alternative-investments-portfolio-role-q05", topicId: "cfa3-alternative-investments-portfolio-role", text: "Allocating alternatives by 'role' means grouping them by:", optionA: "Ticker", optionB: "Function (growth, income, diversification, inflation hedge)", optionC: "Manager surname", optionD: "Country only", correctOption: "B", explanation: "A functional/role-based approach allocates by the economic purpose each alternative serves, rather than rigid asset-class labels.", orderIndex: 4 },
  { id: "cfa3-alternative-investments-portfolio-role-q06", topicId: "cfa3-alternative-investments-portfolio-role", text: "Risk measurement for alternatives should account for returns that are:", optionA: "Perfectly normal", optionB: "Non-normal (fat-tailed, negatively skewed)", optionC: "Risk-free", optionD: "Symmetric and thin-tailed", correctOption: "B", explanation: "Alternative returns often have fat tails and negative skew, so volatility/VaR alone understate risk—use scenario and downside measures.", orderIndex: 5 },
  { id: "cfa3-alternative-investments-portfolio-role-q07", topicId: "cfa3-alternative-investments-portfolio-role", text: "The 'J-curve' affects private-fund allocations by producing:", optionA: "Immediate high returns", optionB: "Early negative returns before later gains", optionC: "Constant returns", optionD: "Guaranteed losses", correctOption: "B", explanation: "Fees and early markdowns create initial negative returns (the J-curve) before exits generate gains.", orderIndex: 6 },
  { id: "cfa3-alternative-investments-portfolio-role-q08", topicId: "cfa3-alternative-investments-portfolio-role", text: "Commitment pacing and vintage-year diversification are used to manage:", optionA: "Currency risk", optionB: "Liquidity and timing risk in private funds", optionC: "Interest-rate risk only", optionD: "Tax filing", correctOption: "B", explanation: "Spreading commitments across vintages manages liquidity, the J-curve, and timing concentration in private programs.", orderIndex: 7 },
  { id: "cfa3-alternative-investments-portfolio-role-q09", topicId: "cfa3-alternative-investments-portfolio-role", text: "A key constraint on sizing alternatives is:", optionA: "Excessive liquidity", optionB: "Illiquidity, lock-ups and high fees", optionC: "Daily pricing", optionD: "Government guarantees", correctOption: "B", explanation: "Long lock-ups, illiquidity, high fees and operational risk limit how much a portfolio can prudently allocate.", orderIndex: 8 },
  { id: "cfa3-alternative-investments-portfolio-role-q10", topicId: "cfa3-alternative-investments-portfolio-role", text: "Real assets (e.g., commodities, real estate, infrastructure) are often added for:", optionA: "Inflation protection", optionB: "Guaranteed income", optionC: "Tax exemption", optionD: "Zero volatility", correctOption: "A", explanation: "Real assets tend to provide inflation sensitivity, a key diversifying role in multi-asset portfolios.", orderIndex: 9 },
  { id: "cfa3-alternative-investments-portfolio-role-q11", topicId: "cfa3-alternative-investments-portfolio-role", text: "Benchmarking hedge funds is difficult, so investors often use:", optionA: "A government bond index", optionB: "Peer-group or absolute/risk-factor benchmarks", optionC: "The risk-free rate exactly", optionD: "No benchmark is ever possible", correctOption: "B", explanation: "Hedge funds are commonly assessed against peer groups, absolute-return targets, or factor-based benchmarks.", orderIndex: 10 },
  { id: "cfa3-alternative-investments-portfolio-role-q12", topicId: "cfa3-alternative-investments-portfolio-role", text: "'Unsmoothing' a private-asset return series generally:", optionA: "Lowers estimated volatility further", optionB: "Raises estimated volatility and correlation toward true levels", optionC: "Removes all risk", optionD: "Converts it to cash", correctOption: "B", explanation: "Unsmoothing reverses appraisal lag, increasing measured volatility/correlation to more realistic levels for allocation.", orderIndex: 11 },

  // Manager selection & due diligence
  { id: "cfa3-manager-selection-due-diligence-q01", topicId: "cfa3-manager-selection-due-diligence", text: "A Type I error in manager selection is:", optionA: "Rejecting a skilled manager", optionB: "Hiring/retaining a manager with no real skill", optionC: "A data entry mistake", optionD: "Choosing a benchmark", correctOption: "B", explanation: "Type I (false positive) is keeping or hiring an unskilled manager.", orderIndex: 0 },
  { id: "cfa3-manager-selection-due-diligence-q02", topicId: "cfa3-manager-selection-due-diligence", text: "A Type II error in manager selection is:", optionA: "Hiring an unskilled manager", optionB: "Rejecting or firing a genuinely skilled manager", optionC: "Overpaying fees", optionD: "Using time-weighted returns", correctOption: "B", explanation: "Type II (false negative) is failing to hire or wrongly firing a skilled manager.", orderIndex: 1 },
  { id: "cfa3-manager-selection-due-diligence-q03", topicId: "cfa3-manager-selection-due-diligence", text: "Tightening selection criteria to avoid unskilled managers tends to:", optionA: "Reduce Type I but increase Type II errors", optionB: "Reduce both error types", optionC: "Increase Type I errors", optionD: "Have no effect on errors", correctOption: "A", explanation: "Stricter screens cut false positives (Type I) but raise the chance of rejecting skilled managers (Type II).", orderIndex: 2 },
  { id: "cfa3-manager-selection-due-diligence-q04", topicId: "cfa3-manager-selection-due-diligence", text: "Operational due diligence is important because operational failures are:", optionA: "Never a cause of fund losses", optionB: "A major cause of fund failures", optionC: "Only relevant to equities", optionD: "Irrelevant to selection", correctOption: "B", explanation: "Many fund blow-ups stem from operational issues (controls, valuation, fraud), making ODD essential.", orderIndex: 3 },
  { id: "cfa3-manager-selection-due-diligence-q05", topicId: "cfa3-manager-selection-due-diligence", text: "An independent administrator, custodian and auditor primarily provide:", optionA: "Higher returns", optionB: "Checks on valuation and safekeeping that reduce operational/fraud risk", optionC: "Tax savings", optionD: "Lower volatility", correctOption: "B", explanation: "Independent service providers verify assets and valuations, a key operational-risk control in due diligence.", orderIndex: 4 },
  { id: "cfa3-manager-selection-due-diligence-q06", topicId: "cfa3-manager-selection-due-diligence", text: "Decomposing a manager's return into alpha and factor exposures helps avoid:", optionA: "Paying alpha fees for what is really cheap beta", optionB: "Using a benchmark", optionC: "Diversification", optionD: "Time-weighted returns", correctOption: "A", explanation: "Returns-based analysis separates true skill (alpha) from factor (beta) exposure so investors don't overpay for beta.", orderIndex: 5 },
  { id: "cfa3-manager-selection-due-diligence-q07", topicId: "cfa3-manager-selection-due-diligence", text: "Backfill and survivorship biases in a manager database tend to:", optionA: "Understate historical performance", optionB: "Overstate historical performance", optionC: "Have no effect", optionD: "Only affect fees", correctOption: "B", explanation: "Both biases inflate reported track records, so due diligence must adjust for them.", orderIndex: 6 },
  { id: "cfa3-manager-selection-due-diligence-q08", topicId: "cfa3-manager-selection-due-diligence", text: "A short, volatile track record makes it hard to:", optionA: "Compute fees", optionB: "Distinguish skill from luck statistically", optionC: "Define a universe", optionD: "Read disclosures", correctOption: "B", explanation: "Limited, noisy data reduces statistical confidence in separating genuine skill from random outcomes.", orderIndex: 7 },
  { id: "cfa3-manager-selection-due-diligence-q09", topicId: "cfa3-manager-selection-due-diligence", text: "Investment due diligence assesses the manager's:", optionA: "Office location only", optionB: "Philosophy, repeatable process, team and decision-making", optionC: "Auditor's fees", optionD: "Custodian's address", correctOption: "B", explanation: "Investment DD evaluates whether the strategy, process and team can plausibly repeat past success.", orderIndex: 8 },
  { id: "cfa3-manager-selection-due-diligence-q10", topicId: "cfa3-manager-selection-due-diligence", text: "Key-person risk in manager selection refers to:", optionA: "The custodian failing", optionB: "Over-reliance on one critical individual", optionC: "High portfolio turnover", optionD: "Currency exposure", correctOption: "B", explanation: "Key-person risk is dependence on a single individual whose departure would impair the strategy.", orderIndex: 9 },
  { id: "cfa3-manager-selection-due-diligence-q11", topicId: "cfa3-manager-selection-due-diligence", text: "Capacity analysis matters because a strategy that grows too large may:", optionA: "Always improve returns", optionB: "Suffer decayed alpha from market impact and crowding", optionC: "Become risk-free", optionD: "Lower its fees automatically", correctOption: "B", explanation: "Excess assets can erode a strategy's edge through higher transaction costs and reduced opportunity per dollar.", orderIndex: 10 },
  { id: "cfa3-manager-selection-due-diligence-q12", topicId: "cfa3-manager-selection-due-diligence", text: "The final output of a sound manager-selection process should be:", optionA: "A ranking by last year's return only", optionB: "A conviction-weighted recommendation grounded in skill and operations", optionC: "The cheapest manager", optionD: "The largest fund", correctOption: "B", explanation: "Selection should yield a forward-looking, conviction-based decision integrating skill evidence and operational soundness, not just past returns.", orderIndex: 11 },

  // Behavioral finance & market anomalies
  { id: "cfa3-behavioral-market-behavior-q01", topicId: "cfa3-behavioral-market-behavior", text: "Momentum (returns persisting short-term) is considered a market anomaly because it appears to contradict:", optionA: "The capital structure theory", optionB: "Weak-form market efficiency", optionC: "Put-call parity", optionD: "The Taylor rule", correctOption: "B", explanation: "Predictable continuation of returns from past prices challenges weak-form efficiency.", orderIndex: 0 },
  { id: "cfa3-behavioral-market-behavior-q02", topicId: "cfa3-behavioral-market-behavior", text: "Bubbles and crashes are often driven by:", optionA: "Perfect rationality", optionB: "Herding, overconfidence and regret", optionC: "Lower trading volume", optionD: "Risk-free arbitrage", correctOption: "B", explanation: "Behavioral forces like herding and overconfidence detach prices from fundamentals, then reverse sharply.", orderIndex: 1 },
  { id: "cfa3-behavioral-market-behavior-q03", topicId: "cfa3-behavioral-market-behavior", text: "The Adaptive Markets Hypothesis suggests that market efficiency:", optionA: "Is constant", optionB: "Varies with conditions as strategies compete and adapt", optionC: "Never exists", optionD: "Is guaranteed", correctOption: "B", explanation: "Lo's AMH applies evolutionary ideas: efficiency fluctuates as participants and strategies adapt.", orderIndex: 2 },
  { id: "cfa3-behavioral-market-behavior-q04", topicId: "cfa3-behavioral-market-behavior", text: "Many documented anomalies tend to:", optionA: "Strengthen after publication", optionB: "Weaken or disappear after discovery / net of costs", optionC: "Guarantee profits", optionD: "Be risk-free", correctOption: "B", explanation: "Anomalies often shrink once known, suggesting risk compensation, data mining, or arbitraged-away mispricing.", orderIndex: 3 },
  { id: "cfa3-behavioral-market-behavior-q05", topicId: "cfa3-behavioral-market-behavior", text: "The value premium refers to the tendency of:", optionA: "Growth stocks to outperform", optionB: "High book-to-market (value) stocks to outperform over time", optionC: "Large caps to outperform", optionD: "Bonds to beat stocks", correctOption: "B", explanation: "Value stocks have historically earned a premium, partly attributed to risk and partly to behavior.", orderIndex: 4 },
  { id: "cfa3-behavioral-market-behavior-q06", topicId: "cfa3-behavioral-market-behavior", text: "The disposition effect contributes to which market pattern?", optionA: "Under-reaction and momentum", optionB: "Instant full efficiency", optionC: "Put-call parity", optionD: "Risk-free arbitrage", correctOption: "A", explanation: "Holding losers and selling winners slows price adjustment, feeding under-reaction and momentum.", orderIndex: 5 },
  { id: "cfa3-behavioral-market-behavior-q07", topicId: "cfa3-behavioral-market-behavior", text: "'This time is different' narratives during bubbles are an example of:", optionA: "Rational expectations", optionB: "Overconfidence and rationalization", optionC: "Arbitrage", optionD: "Risk aversion", correctOption: "B", explanation: "Such narratives rationalize extreme valuations, a hallmark of bubble psychology.", orderIndex: 6 },
  { id: "cfa3-behavioral-market-behavior-q08", topicId: "cfa3-behavioral-market-behavior", text: "Post-earnings-announcement drift describes prices that:", optionA: "Adjust instantly to earnings", optionB: "Continue drifting in the direction of an earnings surprise", optionC: "Reverse immediately", optionD: "Ignore earnings", correctOption: "B", explanation: "Prices under-react to earnings surprises and drift, an anomaly versus semi-strong efficiency.", orderIndex: 7 },
  { id: "cfa3-behavioral-market-behavior-q09", topicId: "cfa3-behavioral-market-behavior", text: "Whether an anomaly is exploitable depends largely on its persistence, capacity and:", optionA: "Transaction costs", optionB: "The risk-free rate", optionC: "The dividend date", optionD: "The auditor", correctOption: "A", explanation: "After costs and capacity limits, many anomalies offer little net, exploitable profit.", orderIndex: 8 },
  { id: "cfa3-behavioral-market-behavior-q10", topicId: "cfa3-behavioral-market-behavior", text: "Behavioral asset pricing adds to required return a:", optionA: "Sentiment premium", optionB: "Coupon", optionC: "Dividend", optionD: "Tax shield", correctOption: "A", explanation: "Behavioral models append a sentiment-driven premium to the standard risk-based required return.", orderIndex: 9 },
  { id: "cfa3-behavioral-market-behavior-q11", topicId: "cfa3-behavioral-market-behavior", text: "The size effect is the historical tendency of:", optionA: "Large caps to outperform", optionB: "Small caps to outperform large caps", optionC: "Bonds to outperform", optionD: "Cash to outperform", correctOption: "B", explanation: "Smaller firms have historically earned higher returns (the size premium), partly a risk story.", orderIndex: 10 },
  { id: "cfa3-behavioral-market-behavior-q12", topicId: "cfa3-behavioral-market-behavior", text: "A practical implication of behavioral finance for markets is that they are:", optionA: "Always perfectly efficient", optionB: "Mostly efficient but subject to periodic behavioral mispricing", optionC: "Completely random and unanalyzable", optionD: "Always mispriced", correctOption: "B", explanation: "Evidence supports broadly efficient markets punctuated by behaviorally driven mispricing.", orderIndex: 11 },

  // Behavioral investor types
  { id: "cfa3-behavioral-investor-types-q01", topicId: "cfa3-behavioral-investor-types", text: "A Passive Preserver is dominated by which kind of bias?", optionA: "Cognitive", optionB: "Emotional (loss aversion, status quo)", optionC: "No biases", optionD: "Arbitrage", correctOption: "B", explanation: "Passive Preservers are emotionally biased and risk-averse, prioritizing capital preservation.", orderIndex: 0 },
  { id: "cfa3-behavioral-investor-types-q02", topicId: "cfa3-behavioral-investor-types", text: "An Active Accumulator typically has:", optionA: "Low risk tolerance and emotional biases", optionB: "High risk tolerance with overconfidence/illusion of control", optionC: "No biases", optionD: "Only cognitive errors", correctOption: "B", explanation: "Active Accumulators are aggressive, emotionally biased (overconfidence, illusion of control).", orderIndex: 1 },
  { id: "cfa3-behavioral-investor-types-q03", topicId: "cfa3-behavioral-investor-types", text: "An Independent Individualist is characterized mainly by:", optionA: "Emotional biases", optionB: "Cognitive biases (overconfidence, confirmation, self-attribution)", optionC: "No risk tolerance", optionD: "Following trends", correctOption: "B", explanation: "Independent Individualists exhibit cognitive biases and contrarian, high-risk tendencies.", orderIndex: 2 },
  { id: "cfa3-behavioral-investor-types-q04", topicId: "cfa3-behavioral-investor-types", text: "A Friendly Follower tends to:", optionA: "Lead market trends", optionB: "Follow trends/peers and exhibit recency and availability biases", optionC: "Ignore all advice", optionD: "Take maximum risk", correctOption: "B", explanation: "Friendly Followers chase popular ideas, showing cognitive biases like recency and availability.", orderIndex: 3 },
  { id: "cfa3-behavioral-investor-types-q05", topicId: "cfa3-behavioral-investor-types", text: "For a client dominated by emotional biases, an adviser should generally:", optionA: "Moderate the biases aggressively", optionB: "Adapt the portfolio to accommodate them", optionC: "Ignore the biases", optionD: "Maximize tracking error", correctOption: "B", explanation: "Hard-to-change emotional biases are accommodated; cognitive errors are moderated with education.", orderIndex: 4 },
  { id: "cfa3-behavioral-investor-types-q06", topicId: "cfa3-behavioral-investor-types", text: "For a client with mostly cognitive errors, the adviser should:", optionA: "Adapt the plan around them", optionB: "Moderate them with education and data", optionC: "Do nothing", optionD: "Increase leverage", correctOption: "B", explanation: "Cognitive errors can be reduced through information and disciplined process.", orderIndex: 5 },
  { id: "cfa3-behavioral-investor-types-q07", topicId: "cfa3-behavioral-investor-types", text: "A limitation of behavioral investor type frameworks is that investors:", optionA: "Always fit one type perfectly", optionB: "May show multiple biases and change over time", optionC: "Have no biases", optionD: "Cannot be profiled", correctOption: "B", explanation: "People rarely fit a single box and their biases shift, so types are a starting diagnostic only.", orderIndex: 6 },
  { id: "cfa3-behavioral-investor-types-q08", topicId: "cfa3-behavioral-investor-types", text: "Larger deviations from the rational optimum are more acceptable when a client has:", optionA: "Low standard-of-living risk tolerance", optionB: "High standard-of-living risk tolerance and emotional biases", optionC: "Only cognitive biases", optionD: "No wealth", correctOption: "B", explanation: "Wealthier clients (higher SLR tolerance) with emotional biases can deviate more while staying secure.", orderIndex: 7 },
  { id: "cfa3-behavioral-investor-types-q09", topicId: "cfa3-behavioral-investor-types", text: "The Passive Preserver's low risk tolerance suggests a portfolio that is:", optionA: "Highly aggressive", optionB: "Conservative, capital-preservation oriented", optionC: "100% equities", optionD: "Fully leveraged", correctOption: "B", explanation: "A risk-averse preserver needs a conservative allocation emphasizing safety.", orderIndex: 8 },
  { id: "cfa3-behavioral-investor-types-q10", topicId: "cfa3-behavioral-investor-types", text: "Behavioral typing helps advisers primarily by:", optionA: "Eliminating market risk", optionB: "Tailoring portfolios and communication to the client", optionC: "Predicting returns", optionD: "Removing fees", correctOption: "B", explanation: "Understanding type improves suitability, communication, and client adherence.", orderIndex: 9 },
  { id: "cfa3-behavioral-investor-types-q11", topicId: "cfa3-behavioral-investor-types", text: "A Friendly Follower may overestimate their risk tolerance because of:", optionA: "Confirmation bias only", optionB: "Recency and social-proof influences", optionC: "Loss aversion only", optionD: "Endowment bias", correctOption: "B", explanation: "Following recent winners and peers can lead Friendly Followers to misjudge their true risk appetite.", orderIndex: 10 },
  { id: "cfa3-behavioral-investor-types-q12", topicId: "cfa3-behavioral-investor-types", text: "After assigning a behavioral type, the adviser should:", optionA: "Treat it as final and unchangeable", optionB: "Confirm via discussion and a bias questionnaire", optionC: "Ignore the client's input", optionD: "Maximize turnover", correctOption: "B", explanation: "Types are a hypothesis to validate through conversation and structured assessment.", orderIndex: 11 },

  // Adviser-client relations
  { id: "cfa3-behavioral-adviser-client-q01", topicId: "cfa3-behavioral-adviser-client", text: "Understanding client psychology helps mainly by improving:", optionA: "Market efficiency", optionB: "Risk profiling, suitability and client adherence", optionC: "The risk-free rate", optionD: "Tax rates", correctOption: "B", explanation: "Behavioral insight yields better risk profiles, more suitable portfolios, and clients who stick with the plan.", orderIndex: 0 },
  { id: "cfa3-behavioral-adviser-client-q02", topicId: "cfa3-behavioral-adviser-client", text: "A behaviorally modified asset allocation is designed to:", optionA: "Maximize tracking error", optionB: "Let clients deviate modestly from the optimum so they stay invested", optionC: "Eliminate all risk", optionD: "Remove the IPS", correctOption: "B", explanation: "Small, deliberate deviations accommodate biases so clients can adhere through volatility.", orderIndex: 1 },
  { id: "cfa3-behavioral-adviser-client-q03", topicId: "cfa3-behavioral-adviser-client", text: "Risk tolerance combines a client's:", optionA: "Ability and willingness to take risk", optionB: "Income and age only", optionC: "Beta and alpha", optionD: "Duration and convexity", correctOption: "A", explanation: "Risk tolerance integrates the ability (financial capacity) and willingness (psychological) to bear risk.", orderIndex: 2 },
  { id: "cfa3-behavioral-adviser-client-q04", topicId: "cfa3-behavioral-adviser-client", text: "Emotional biases in a client should generally be:", optionA: "Moderated aggressively", optionB: "Accommodated (adapted to)", optionC: "Ignored", optionD: "Penalized", correctOption: "B", explanation: "Deep emotional biases are hard to change, so the plan is built around them.", orderIndex: 3 },
  { id: "cfa3-behavioral-adviser-client-q05", topicId: "cfa3-behavioral-adviser-client", text: "Framing information to avoid triggering loss aversion is an example of:", optionA: "Manipulation", optionB: "Behaviorally informed communication", optionC: "Market timing", optionD: "Tax planning", correctOption: "B", explanation: "Thoughtful framing helps clients make better decisions and stay disciplined.", orderIndex: 4 },
  { id: "cfa3-behavioral-adviser-client-q06", topicId: "cfa3-behavioral-adviser-client", text: "Larger allowed deviations from the optimum occur when the client's standard-of-living risk tolerance is:", optionA: "Low", optionB: "High", optionC: "Zero", optionD: "Negative", correctOption: "B", explanation: "Greater financial security (high SLR tolerance) permits accommodating biases with larger deviations.", orderIndex: 5 },
  { id: "cfa3-behavioral-adviser-client-q07", topicId: "cfa3-behavioral-adviser-client", text: "Cognitive errors are best addressed through:", optionA: "Accommodation", optionB: "Education and better information", optionC: "Higher leverage", optionD: "Ignoring them", correctOption: "B", explanation: "Cognitive errors respond to education, data, and disciplined process.", orderIndex: 6 },
  { id: "cfa3-behavioral-adviser-client-q08", topicId: "cfa3-behavioral-adviser-client", text: "A strong adviser-client relationship tends to result in clients who:", optionA: "Abandon the plan in downturns", optionB: "Stay invested through volatility", optionC: "Trade constantly", optionD: "Avoid the IPS", correctOption: "B", explanation: "Trust and understanding help clients adhere to the long-term plan during market stress.", orderIndex: 7 },
  { id: "cfa3-behavioral-adviser-client-q09", topicId: "cfa3-behavioral-adviser-client", text: "A risk-tolerance questionnaire primarily helps identify a client's:", optionA: "Tax bracket", optionB: "Willingness to take risk and biases", optionC: "Beta", optionD: "Duration", correctOption: "B", explanation: "Questionnaires gauge willingness and surface biases, complementing the ability assessment.", orderIndex: 8 },
  { id: "cfa3-behavioral-adviser-client-q10", topicId: "cfa3-behavioral-adviser-client", text: "When ability and willingness to take risk differ, the adviser should generally adopt the:", optionA: "Higher of the two", optionB: "Lower (more conservative) of the two, then educate", optionC: "Average", optionD: "Neither", correctOption: "B", explanation: "Use the more conservative measure, then seek to reconcile via education where appropriate.", orderIndex: 9 },
  { id: "cfa3-behavioral-adviser-client-q11", topicId: "cfa3-behavioral-adviser-client", text: "The IPS should ideally be:", optionA: "Imposed by the adviser alone", optionB: "Agreed jointly with the client", optionC: "Kept secret from the client", optionD: "Changed daily", correctOption: "B", explanation: "Joint agreement on the IPS improves buy-in and adherence.", orderIndex: 10 },
  { id: "cfa3-behavioral-adviser-client-q12", topicId: "cfa3-behavioral-adviser-client", text: "Smaller deviations from the rational optimum are appropriate when:", optionA: "Biases are emotional and wealth is high", optionB: "Biases are cognitive and the client's security depends on staying near the optimum", optionC: "The client is very wealthy", optionD: "Markets are calm", correctOption: "B", explanation: "Cognitive biases should be moderated, and limited financial security argues for staying near the optimum.", orderIndex: 11 },

  // Behavioral biases of analysts
  { id: "cfa3-behavioral-analyst-biases-q01", topicId: "cfa3-behavioral-analyst-biases", text: "Analyst overconfidence often shows up as:", optionA: "Confidence intervals that are too wide", optionB: "Confidence intervals that are too narrow", optionC: "No forecasts", optionD: "Random forecasts", correctOption: "B", explanation: "Overconfident analysts produce overly precise (too-narrow) forecast ranges.", orderIndex: 0 },
  { id: "cfa3-behavioral-analyst-biases-q02", topicId: "cfa3-behavioral-analyst-biases", text: "Crediting good outcomes to skill and blaming bad ones on luck is:", optionA: "Self-attribution bias", optionB: "Anchoring", optionC: "Availability", optionD: "Loss aversion", correctOption: "A", explanation: "Self-attribution reinforces overconfidence by mis-assigning credit and blame.", orderIndex: 1 },
  { id: "cfa3-behavioral-analyst-biases-q03", topicId: "cfa3-behavioral-analyst-biases", text: "Over-weighting recent or vivid information reflects:", optionA: "Availability/recency bias", optionB: "Self-control", optionC: "Endowment", optionD: "Regret aversion", correctOption: "A", explanation: "Availability/recency leads analysts to overemphasize easily recalled data.", orderIndex: 2 },
  { id: "cfa3-behavioral-analyst-biases-q04", topicId: "cfa3-behavioral-analyst-biases", text: "Anchoring in forecasting means:", optionA: "Ignoring all prior data", optionB: "Sticking to an initial estimate and adjusting insufficiently", optionC: "Using base rates", optionD: "Seeking disconfirming evidence", correctOption: "B", explanation: "Analysts anchor to prior estimates or management guidance and under-adjust to new information.", orderIndex: 3 },
  { id: "cfa3-behavioral-analyst-biases-q05", topicId: "cfa3-behavioral-analyst-biases", text: "Base-rate neglect occurs when analysts:", optionA: "Over-rely on representative but unrepresentative samples", optionB: "Always use base rates", optionC: "Ignore company data", optionD: "Use disconfirming evidence", correctOption: "A", explanation: "Representativeness can cause neglect of relevant base rates in favor of vivid specifics.", orderIndex: 4 },
  { id: "cfa3-behavioral-analyst-biases-q06", topicId: "cfa3-behavioral-analyst-biases", text: "Confirmation bias leads analysts to:", optionA: "Seek information supporting their thesis", optionB: "Seek disconfirming evidence", optionC: "Use base rates", optionD: "Widen confidence intervals", correctOption: "A", explanation: "Confirmation bias favors supportive evidence and discounts contradictory data.", orderIndex: 5 },
  { id: "cfa3-behavioral-analyst-biases-q07", topicId: "cfa3-behavioral-analyst-biases", text: "Over-reliance on company management can cause:", optionA: "Independent analysis", optionB: "A halo effect and biased forecasts", optionC: "Lower fees", optionD: "Higher base rates", correctOption: "B", explanation: "Trusting management uncritically (and the halo effect) biases analyst conclusions.", orderIndex: 6 },
  { id: "cfa3-behavioral-analyst-biases-q08", topicId: "cfa3-behavioral-analyst-biases", text: "A useful remedy for analyst overconfidence is to:", optionA: "Use base rates and track prior forecast accuracy", optionB: "Narrow confidence intervals", optionC: "Avoid disconfirming evidence", optionD: "Match consensus", correctOption: "A", explanation: "Calibrating against base rates and past records widens and improves forecast ranges.", orderIndex: 7 },
  { id: "cfa3-behavioral-analyst-biases-q09", topicId: "cfa3-behavioral-analyst-biases", text: "The illusion of control bias leads analysts to:", optionA: "Underestimate their influence", optionB: "Overestimate their ability to influence outcomes", optionC: "Use systematic processes", optionD: "Avoid forecasting", correctOption: "B", explanation: "Illusion of control inflates confidence in forecasts of outcomes one cannot actually control.", orderIndex: 8 },
  { id: "cfa3-behavioral-analyst-biases-q10", topicId: "cfa3-behavioral-analyst-biases", text: "The gambler's fallacy is a form of:", optionA: "Misapplied representativeness", optionB: "Loss aversion", optionC: "Endowment bias", optionD: "Regret aversion", correctOption: "A", explanation: "Expecting reversals in independent events (e.g., 'due' for a change) misapplies representativeness.", orderIndex: 9 },
  { id: "cfa3-behavioral-analyst-biases-q11", topicId: "cfa3-behavioral-analyst-biases", text: "Conducting post-mortems on past forecasts helps reduce bias by:", optionA: "Encouraging self-attribution", optionB: "Providing objective feedback on accuracy", optionC: "Hiding errors", optionD: "Narrowing intervals", correctOption: "B", explanation: "Honest reviews of prior calls counter self-attribution and improve calibration.", orderIndex: 10 },
  { id: "cfa3-behavioral-analyst-biases-q12", topicId: "cfa3-behavioral-analyst-biases", text: "Pre-committing to a structured, rule-based process primarily mitigates:", optionA: "Market risk", optionB: "Cognitive biases in analysis", optionC: "Currency risk", optionD: "Liquidity risk", correctOption: "B", explanation: "Systematic processes and disconfirming checks reduce discretionary cognitive biases.", orderIndex: 11 },

  // Biases in committees & markets
  { id: "cfa3-behavioral-committee-bias-q01", topicId: "cfa3-behavioral-committee-bias", text: "Groupthink in an investment committee refers to:", optionA: "Diverse, independent views", optionB: "Members suppressing dissent to conform", optionC: "Anonymous voting", optionD: "A devil's advocate", correctOption: "B", explanation: "Groupthink occurs when conformity pressure suppresses dissent and critical evaluation.", orderIndex: 0 },
  { id: "cfa3-behavioral-committee-bias-q02", topicId: "cfa3-behavioral-committee-bias", text: "A useful remedy for committee bias is to:", optionA: "Have the leader state their view first", optionB: "Appoint a devil's advocate and gather anonymous input", optionC: "Reduce diversity", optionD: "Discourage dissent", correctOption: "B", explanation: "Devil's advocates, anonymity, and diverse membership counter social-proof pressures.", orderIndex: 1 },
  { id: "cfa3-behavioral-committee-bias-q03", topicId: "cfa3-behavioral-committee-bias", text: "Social proof in committees describes members:", optionA: "Forming independent opinions", optionB: "Deferring to the group or a dominant voice", optionC: "Voting anonymously", optionD: "Ignoring the chair", correctOption: "B", explanation: "Social proof leads members to follow the group/dominant member rather than reason independently.", orderIndex: 2 },
  { id: "cfa3-behavioral-committee-bias-q04", topicId: "cfa3-behavioral-committee-bias", text: "Herding among investors can contribute to:", optionA: "Efficient pricing", optionB: "Bubbles and crashes", optionC: "Lower volatility", optionD: "Risk-free arbitrage", correctOption: "B", explanation: "Herding amplifies price moves, helping inflate bubbles and deepen crashes.", orderIndex: 3 },
  { id: "cfa3-behavioral-committee-bias-q05", topicId: "cfa3-behavioral-committee-bias", text: "A committee leader can reduce bias by:", optionA: "Stating their opinion before others", optionB: "Soliciting dissent before sharing their own view", optionC: "Discouraging debate", optionD: "Voting publicly first", correctOption: "B", explanation: "Eliciting independent input before anchoring on the leader's view improves decisions.", orderIndex: 4 },
  { id: "cfa3-behavioral-committee-bias-q06", topicId: "cfa3-behavioral-committee-bias", text: "The disposition effect contributes to which market phenomenon?", optionA: "Momentum/under-reaction", optionB: "Instant efficiency", optionC: "Put-call parity", optionD: "Arbitrage", correctOption: "A", explanation: "Selling winners and holding losers slows price adjustment, producing momentum.", orderIndex: 5 },
  { id: "cfa3-behavioral-committee-bias-q07", topicId: "cfa3-behavioral-committee-bias", text: "Home bias in portfolios is an example of:", optionA: "Optimal diversification", optionB: "Familiarity bias reducing diversification", optionC: "Loss aversion only", optionD: "Arbitrage", correctOption: "B", explanation: "Overweighting domestic assets (familiarity) reduces diversification.", orderIndex: 6 },
  { id: "cfa3-behavioral-committee-bias-q08", topicId: "cfa3-behavioral-committee-bias", text: "Diversity of committee membership helps because it:", optionA: "Increases groupthink", optionB: "Brings independent perspectives that challenge consensus", optionC: "Slows all decisions to a halt", optionD: "Removes accountability", correctOption: "B", explanation: "Diverse, independent members reduce correlated errors and challenge premature consensus.", orderIndex: 7 },
  { id: "cfa3-behavioral-committee-bias-q09", topicId: "cfa3-behavioral-committee-bias", text: "Trend-chasing fund flows tend to:", optionA: "Stabilize prices", optionB: "Amplify market cycles", optionC: "Eliminate volatility", optionD: "Create arbitrage", correctOption: "B", explanation: "Money flowing toward recent winners reinforces momentum and amplifies cycles.", orderIndex: 8 },
  { id: "cfa3-behavioral-committee-bias-q10", topicId: "cfa3-behavioral-committee-bias", text: "Anonymous polling of committee members helps by:", optionA: "Increasing conformity", optionB: "Reducing social-proof pressure and revealing true views", optionC: "Hiding the decision", optionD: "Eliminating analysis", correctOption: "B", explanation: "Anonymity lets members express genuine opinions free of conformity pressure.", orderIndex: 9 },
  { id: "cfa3-behavioral-committee-bias-q11", topicId: "cfa3-behavioral-committee-bias", text: "Whether a behavioral anomaly persists depends on its:", optionA: "Capacity, costs, and how widely it is known", optionB: "Coupon", optionC: "Duration", optionD: "Beta only", correctOption: "A", explanation: "Limited capacity, high costs, and broad awareness erode an anomaly's exploitability.", orderIndex: 10 },
  { id: "cfa3-behavioral-committee-bias-q12", topicId: "cfa3-behavioral-committee-bias", text: "The halo effect in investing is the tendency to assume that a good company is:", optionA: "A poor investment", optionB: "Automatically a good stock", optionC: "Risk-free", optionD: "Overvalued always", correctOption: "B", explanation: "The halo effect conflates a good company with a good investment, ignoring valuation.", orderIndex: 11 },

  // Economic analysis & the business cycle (CME)
  { id: "cfa3-capital-market-expectations-economic-analysis-q01", topicId: "cfa3-capital-market-expectations-economic-analysis", text: "Equities and credit typically perform best in which business-cycle phase?", optionA: "Deep contraction", optionB: "Early recovery/expansion", optionC: "Peak only", optionD: "Never", correctOption: "B", explanation: "Risk assets like equities and credit tend to outperform early in the recovery/expansion.", orderIndex: 0 },
  { id: "cfa3-capital-market-expectations-economic-analysis-q02", topicId: "cfa3-capital-market-expectations-economic-analysis", text: "An inverted yield curve is often interpreted as a signal of:", optionA: "Strong growth ahead", optionB: "An impending recession", optionC: "Rising inflation only", optionD: "A bull market", correctOption: "B", explanation: "Curve inversion (short rates above long) has historically preceded recessions.", orderIndex: 1 },
  { id: "cfa3-capital-market-expectations-economic-analysis-q03", topicId: "cfa3-capital-market-expectations-economic-analysis", text: "The Taylor rule estimates the appropriate:", optionA: "Equity risk premium", optionB: "Central-bank policy rate", optionC: "Credit spread", optionD: "Dividend yield", correctOption: "B", explanation: "The Taylor rule sets a policy rate from the neutral rate plus inflation and output gaps.", orderIndex: 2 },
  { id: "cfa3-capital-market-expectations-economic-analysis-q04", topicId: "cfa3-capital-market-expectations-economic-analysis", text: "Long-run trend economic growth is driven by labor, capital and:", optionA: "Total factor productivity", optionB: "Inflation", optionC: "Currency moves", optionD: "Dividends", correctOption: "A", explanation: "Trend growth depends on labor and capital inputs plus productivity (TFP).", orderIndex: 3 },
  { id: "cfa3-capital-market-expectations-economic-analysis-q05", topicId: "cfa3-capital-market-expectations-economic-analysis", text: "Using a sample dominated by a bull market to forecast long-run returns reflects:", optionA: "Time-period bias", optionB: "Survivorship bias", optionC: "Anchoring", optionD: "No bias", correctOption: "A", explanation: "Over-reflecting a particular window introduces time-period bias.", orderIndex: 4 },
  { id: "cfa3-capital-market-expectations-economic-analysis-q06", topicId: "cfa3-capital-market-expectations-economic-analysis", text: "Rising inflation generally:", optionA: "Helps nominal bonds", optionB: "Hurts nominal bonds (and stocks at high levels)", optionC: "Has no effect on assets", optionD: "Guarantees equity gains", correctOption: "B", explanation: "Higher inflation raises nominal yields, hurting bonds; very high inflation also pressures equities.", orderIndex: 5 },
  { id: "cfa3-capital-market-expectations-economic-analysis-q07", topicId: "cfa3-capital-market-expectations-economic-analysis", text: "Leading indicators (e.g., new orders, permits) are useful because they:", optionA: "Confirm the past", optionB: "Tend to change ahead of the economy", optionC: "Lag the cycle", optionD: "Measure inflation only", correctOption: "B", explanation: "Leading indicators move before the broader economy, aiding cyclical forecasting.", orderIndex: 6 },
  { id: "cfa3-capital-market-expectations-economic-analysis-q08", topicId: "cfa3-capital-market-expectations-economic-analysis", text: "Distinguishing secular trends from cyclical noise matters because:", optionA: "They have identical implications", optionB: "Long-run forecasts should reflect durable trends, not temporary cycles", optionC: "Cycles never matter", optionD: "Trends are irrelevant", correctOption: "B", explanation: "Capital market expectations should separate persistent (secular) drivers from transient cyclical effects.", orderIndex: 7 },
  { id: "cfa3-capital-market-expectations-economic-analysis-q09", topicId: "cfa3-capital-market-expectations-economic-analysis", text: "A common pitfall when using historical data for CME is:", optionA: "Using stationary data", optionB: "Relying on non-stationary data and ignoring regime shifts", optionC: "Adjusting for biases", optionD: "Cross-checking models", correctOption: "B", explanation: "Non-stationary data and structural breaks undermine naive historical extrapolation.", orderIndex: 8 },
  { id: "cfa3-capital-market-expectations-economic-analysis-q10", topicId: "cfa3-capital-market-expectations-economic-analysis", text: "Late in an expansion, a typical positioning shift is toward:", optionA: "More cyclical, high-beta exposure", optionB: "More defensive assets and quality", optionC: "Maximum leverage", optionD: "Only small caps", correctOption: "B", explanation: "As expansion matures, investors often rotate to defensives and higher-quality assets.", orderIndex: 9 },
  { id: "cfa3-capital-market-expectations-economic-analysis-q11", topicId: "cfa3-capital-market-expectations-economic-analysis", text: "Data mining in forecasting refers to:", optionA: "Careful theory-based modeling", optionB: "Searching data until a spurious relationship fits", optionC: "Using base rates", optionD: "Cross-validation", correctOption: "B", explanation: "Data mining finds chance relationships that fail out of sample.", orderIndex: 10 },
  { id: "cfa3-capital-market-expectations-economic-analysis-q12", topicId: "cfa3-capital-market-expectations-economic-analysis", text: "Anchoring on the status quo when forecasting is an example of a:", optionA: "Psychological/behavioral bias in CME", optionB: "Risk premium", optionC: "Data source", optionD: "Hedging tool", correctOption: "A", explanation: "Status-quo/anchoring biases distort capital market expectations and should be guarded against.", orderIndex: 11 },

  // Forecasting fixed-income returns (CME)
  { id: "cfa3-capital-market-expectations-fixed-income-q01", topicId: "cfa3-capital-market-expectations-fixed-income", text: "The building-block expected return for a bond starts with the real risk-free rate plus:", optionA: "Expected inflation and a term premium", optionB: "The dividend yield", optionC: "Beta", optionD: "The equity risk premium", correctOption: "A", explanation: "Fixed-income building blocks add expected inflation, term, credit, and liquidity premia to the real rate.", orderIndex: 0 },
  { id: "cfa3-capital-market-expectations-fixed-income-q02", topicId: "cfa3-capital-market-expectations-fixed-income", text: "Credit spreads are typically ____ over the business cycle.", optionA: "Counter-cyclical (widen in booms)", optionB: "Pro-cyclical (widen in recessions)", optionC: "Constant", optionD: "Random", correctOption: "B", explanation: "Spreads widen as default risk rises in downturns and narrow in expansions.", orderIndex: 1 },
  { id: "cfa3-capital-market-expectations-fixed-income-q03", topicId: "cfa3-capital-market-expectations-fixed-income", text: "For a credit bond, the spread compensates for expected loss plus a:", optionA: "Risk and liquidity premium", optionB: "Dividend", optionC: "Tax shield", optionD: "Coupon", correctOption: "A", explanation: "Spread = expected loss + risk/uncertainty premium + liquidity premium.", orderIndex: 2 },
  { id: "cfa3-capital-market-expectations-fixed-income-q04", topicId: "cfa3-capital-market-expectations-fixed-income", text: "The approximate return impact of a spread change is:", optionA: "−(spread duration × Δspread)", optionB: "+coupon", optionC: "duration × convexity", optionD: "recovery × notional", correctOption: "A", explanation: "Holding rates constant, credit return ≈ carry/roll − spread duration × Δspread − expected loss.", orderIndex: 3 },
  { id: "cfa3-capital-market-expectations-fixed-income-q05", topicId: "cfa3-capital-market-expectations-fixed-income", text: "For a government bond held to maturity, the base return estimate is its:", optionA: "Yield to maturity", optionB: "Dividend yield", optionC: "Beta", optionD: "Cap rate", correctOption: "A", explanation: "The YTM (with reinvestment assumptions) anchors the expected return for a held-to-maturity bond.", orderIndex: 4 },
  { id: "cfa3-capital-market-expectations-fixed-income-q06", topicId: "cfa3-capital-market-expectations-fixed-income", text: "Forward rates serve as the ____ for active fixed-income positioning.", optionA: "Guaranteed outcome", optionB: "Break-even", optionC: "Coupon", optionD: "Dividend", correctOption: "B", explanation: "Forwards are break-even rates; active return requires realized rates to differ from them.", orderIndex: 5 },
  { id: "cfa3-capital-market-expectations-fixed-income-q07", topicId: "cfa3-capital-market-expectations-fixed-income", text: "Emerging-market debt forecasts should additionally incorporate:", optionA: "Country/political and currency risk", optionB: "Only the risk-free rate", optionC: "Dividend growth", optionD: "Cap rates", correctOption: "A", explanation: "EM debt carries extra country, political, and currency considerations beyond developed-market premia.", orderIndex: 6 },
  { id: "cfa3-capital-market-expectations-fixed-income-q08", topicId: "cfa3-capital-market-expectations-fixed-income", text: "The term premium compensates investors for:", optionA: "Default risk", optionB: "Uncertainty over future short rates at longer horizons", optionC: "Currency risk", optionD: "Equity risk", correctOption: "B", explanation: "Longer maturities bear interest-rate uncertainty, earning a term premium.", orderIndex: 7 },
  { id: "cfa3-capital-market-expectations-fixed-income-q09", topicId: "cfa3-capital-market-expectations-fixed-income", text: "Rolldown return arises when, on an upward-sloping stable curve, a bond's yield:", optionA: "Rises as it ages", optionB: "Falls as it ages toward shorter maturities", optionC: "Stays constant", optionD: "Becomes negative", correctOption: "B", explanation: "On a stable upward-sloping curve, aging lowers a bond's yield, producing price gains (rolldown).", orderIndex: 8 },
  { id: "cfa3-capital-market-expectations-fixed-income-q10", topicId: "cfa3-capital-market-expectations-fixed-income", text: "During a recession, a fixed-income forecaster would expect credit spreads to:", optionA: "Narrow", optionB: "Widen", optionC: "Stay flat", optionD: "Vanish", correctOption: "B", explanation: "Rising default risk widens spreads in recessions, hurting credit returns.", orderIndex: 9 },
  { id: "cfa3-capital-market-expectations-fixed-income-q11", topicId: "cfa3-capital-market-expectations-fixed-income", text: "Loss given default in expected-loss estimates equals:", optionA: "1 − recovery rate", optionB: "The coupon", optionC: "Duration", optionD: "The spread", correctOption: "A", explanation: "Expected loss = PD × LGD, with LGD = 1 − recovery rate.", orderIndex: 10 },
  { id: "cfa3-capital-market-expectations-fixed-income-q12", topicId: "cfa3-capital-market-expectations-fixed-income", text: "A key reinvestment consideration in bond return forecasts is that realized return equals YTM only if coupons are reinvested at:", optionA: "The YTM", optionB: "The risk-free rate", optionC: "Zero", optionD: "The dividend yield", correctOption: "A", explanation: "Realized return matches YTM only under reinvestment at the YTM and holding to maturity.", orderIndex: 11 },

  // Forecasting equity returns (CME)
  { id: "cfa3-capital-market-expectations-equity-q01", topicId: "cfa3-capital-market-expectations-equity", text: "The Grinold-Kroner model expresses expected equity return as income, nominal earnings growth and:", optionA: "Repricing (change in P/E)", optionB: "The risk-free rate", optionC: "Beta", optionD: "Tracking error", correctOption: "A", explanation: "E[R] ≈ (D/P − ΔS) + (i + g) + ΔPE; the last term is repricing.", orderIndex: 0 },
  { id: "cfa3-capital-market-expectations-equity-q02", topicId: "cfa3-capital-market-expectations-equity", text: "In Grinold-Kroner, net share buybacks (negative ΔS):", optionA: "Lower expected return", optionB: "Raise expected per-share return", optionC: "Have no effect", optionD: "Remove the dividend", correctOption: "B", explanation: "Subtracting a negative ΔS adds to return — buybacks reduce share count, raising per-share return.", orderIndex: 1 },
  { id: "cfa3-capital-market-expectations-equity-q03", topicId: "cfa3-capital-market-expectations-equity", text: "Over the long run, the repricing term (ΔP/E) is generally assumed to:", optionA: "Dominate returns", optionB: "Average near zero", optionC: "Equal the dividend yield", optionD: "Be negative always", correctOption: "B", explanation: "Valuation change tends to average around zero over long horizons, leaving income and growth as drivers.", orderIndex: 2 },
  { id: "cfa3-capital-market-expectations-equity-q04", topicId: "cfa3-capital-market-expectations-equity", text: "The Singer-Terhaar approach blends fully integrated and fully segmented risk premia based on the degree of:", optionA: "Market integration", optionB: "Inflation", optionC: "Leverage", optionD: "Liquidity only", correctOption: "A", explanation: "Singer-Terhaar weights the two premia by how integrated the market is with global markets.", orderIndex: 3 },
  { id: "cfa3-capital-market-expectations-equity-q05", topicId: "cfa3-capital-market-expectations-equity", text: "A forward-looking estimate of the equity risk premium can be derived from a:", optionA: "DDM-implied (Gordon) approach", optionB: "Coupon", optionC: "Cap rate", optionD: "Duration", correctOption: "A", explanation: "The DDM/Gordon model can imply the ERP from current prices, dividends, and growth.", orderIndex: 4 },
  { id: "cfa3-capital-market-expectations-equity-q06", topicId: "cfa3-capital-market-expectations-equity", text: "Long-run equity earnings growth is often anchored to:", optionA: "Trend GDP growth", optionB: "The dividend date", optionC: "The risk-free rate only", optionD: "Beta", correctOption: "A", explanation: "Aggregate earnings growth tends to track trend nominal GDP growth, adjusted for margins/shares.", orderIndex: 5 },
  { id: "cfa3-capital-market-expectations-equity-q07", topicId: "cfa3-capital-market-expectations-equity", text: "Using raw historical average returns to forecast the ERP risks:", optionA: "Survivorship and time-period bias", optionB: "No bias", optionC: "Understating returns always", optionD: "Removing risk", correctOption: "A", explanation: "Historical estimates must be adjusted for survivorship and the specific sample period.", orderIndex: 6 },
  { id: "cfa3-capital-market-expectations-equity-q08", topicId: "cfa3-capital-market-expectations-equity", text: "In Singer-Terhaar, a market's risk premium when fully integrated equals ρ_{i,M} × σ_i ×:", optionA: "The global market Sharpe ratio", optionB: "The dividend yield", optionC: "Beta of bonds", optionD: "The coupon", correctOption: "A", explanation: "RP_i = ρ_{i,M}·σ_i·(Sharpe ratio of the global market) under full integration.", orderIndex: 7 },
  { id: "cfa3-capital-market-expectations-equity-q09", topicId: "cfa3-capital-market-expectations-equity", text: "A segmented market generally has a ____ risk premium than the same market when integrated.", optionA: "Lower", optionB: "Higher", optionC: "Identical", optionD: "Zero", correctOption: "B", explanation: "Segmentation reduces diversification with the world, so investors demand a higher premium.", orderIndex: 8 },
  { id: "cfa3-capital-market-expectations-equity-q10", topicId: "cfa3-capital-market-expectations-equity", text: "Mean reversion in profit margins implies analysts should be cautious about:", optionA: "Extrapolating recent high margins indefinitely", optionB: "Using base rates", optionC: "Diversifying", optionD: "Hedging currency", correctOption: "A", explanation: "Margins tend to revert, so projecting current peak margins forever overstates growth.", orderIndex: 9 },
  { id: "cfa3-capital-market-expectations-equity-q11", topicId: "cfa3-capital-market-expectations-equity", text: "Cross-checking multiple equity-return models is recommended because:", optionA: "Each has different assumptions/weaknesses", optionB: "They always agree", optionC: "Only one model exists", optionD: "It removes all uncertainty", correctOption: "A", explanation: "Triangulating across models mitigates the limitations of any single approach.", orderIndex: 10 },
  { id: "cfa3-capital-market-expectations-equity-q12", topicId: "cfa3-capital-market-expectations-equity", text: "The build-up method estimates the cost of equity as the risk-free rate plus:", optionA: "An equity risk premium (and other premia)", optionB: "The coupon", optionC: "The cap rate", optionD: "Duration", correctOption: "A", explanation: "Build-up adds an equity risk premium (and size/specific premia) to R_f to get the required equity return.", orderIndex: 11 },

  // Forecasting real estate & alternatives (CME)
  { id: "cfa3-capital-market-expectations-real-estate-q01", topicId: "cfa3-capital-market-expectations-real-estate", text: "A simple expected return for direct real estate is approximately the cap rate plus:", optionA: "NOI growth (less any cap-rate expansion)", optionB: "The dividend yield", optionC: "Beta", optionD: "The coupon", correctOption: "A", explanation: "Expected return ≈ income (cap rate) + NOI growth ± valuation (cap-rate) change.", orderIndex: 0 },
  { id: "cfa3-capital-market-expectations-real-estate-q02", topicId: "cfa3-capital-market-expectations-real-estate", text: "The cap rate is approximately the discount rate minus the:", optionA: "Growth rate of NOI", optionB: "Inflation rate", optionC: "Risk-free rate", optionD: "Vacancy rate", correctOption: "A", explanation: "Like Gordon growth, cap rate ≈ required return − expected NOI growth.", orderIndex: 1 },
  { id: "cfa3-capital-market-expectations-real-estate-q03", topicId: "cfa3-capital-market-expectations-real-estate", text: "Real estate exhibits a blend of:", optionA: "Bond-like income and equity-like cyclicality", optionB: "Pure risk-free behavior", optionC: "Only equity behavior", optionD: "Only currency exposure", correctOption: "A", explanation: "Lease income is bond-like; property values are cyclical (equity-like).", orderIndex: 2 },
  { id: "cfa3-capital-market-expectations-real-estate-q04", topicId: "cfa3-capital-market-expectations-real-estate", text: "Appraisal-based real-estate returns tend to:", optionA: "Overstate volatility", optionB: "Understate volatility and correlation (smoothing)", optionC: "Be perfectly accurate", optionD: "Be risk-free", correctOption: "B", explanation: "Infrequent appraisals smooth returns, understating true volatility and correlation.", orderIndex: 3 },
  { id: "cfa3-capital-market-expectations-real-estate-q05", topicId: "cfa3-capital-market-expectations-real-estate", text: "A commodity futures total return includes price return, collateral yield and:", optionA: "Roll return", optionB: "Dividend yield", optionC: "Coupon", optionD: "Cap rate", correctOption: "A", explanation: "Commodity return = price + roll + collateral; the roll depends on the futures-curve shape.", orderIndex: 4 },
  { id: "cfa3-capital-market-expectations-real-estate-q06", topicId: "cfa3-capital-market-expectations-real-estate", text: "Backwardation in a commodity curve produces a roll return that is:", optionA: "Positive", optionB: "Negative", optionC: "Zero", optionD: "Undefined", correctOption: "A", explanation: "Rolling up toward a higher spot in backwardation yields a positive roll return.", orderIndex: 5 },
  { id: "cfa3-capital-market-expectations-real-estate-q07", topicId: "cfa3-capital-market-expectations-real-estate", text: "Private-equity return forecasts typically build in a(n):", optionA: "Illiquidity premium over public comparables", optionB: "Dividend yield", optionC: "Risk-free discount", optionD: "Negative premium", correctOption: "A", explanation: "PE expected returns add an illiquidity premium and model vintage/J-curve effects.", orderIndex: 6 },
  { id: "cfa3-capital-market-expectations-real-estate-q08", topicId: "cfa3-capital-market-expectations-real-estate", text: "Before using alternative-asset returns in optimization, analysts should:", optionA: "Use them raw", optionB: "Unsmooth them to restore realistic risk/correlation", optionC: "Ignore correlations", optionD: "Assume normality", correctOption: "B", explanation: "Unsmoothing corrects appraisal lag so MVO doesn't over-allocate to alternatives.", orderIndex: 7 },
  { id: "cfa3-capital-market-expectations-real-estate-q09", topicId: "cfa3-capital-market-expectations-real-estate", text: "Commodities are commonly forecast to serve as a(n):", optionA: "Inflation hedge", optionB: "Duration hedge", optionC: "Risk-free asset", optionD: "Dividend source", correctOption: "A", explanation: "Commodities tend to rise with unexpected inflation, providing an inflation hedge.", orderIndex: 8 },
  { id: "cfa3-capital-market-expectations-real-estate-q10", topicId: "cfa3-capital-market-expectations-real-estate", text: "Hedge-fund return assumptions must account for returns that are:", optionA: "Perfectly normal", optionB: "Non-normal (skewed, fat-tailed) and fee-laden", optionC: "Risk-free", optionD: "Coupon-bearing", correctOption: "B", explanation: "Hedge-fund returns are non-normal with high fees, requiring careful, downside-aware assumptions.", orderIndex: 9 },
  { id: "cfa3-capital-market-expectations-real-estate-q11", topicId: "cfa3-capital-market-expectations-real-estate", text: "Rising cap rates (cap-rate expansion), all else equal, ____ real estate values.", optionA: "Raise", optionB: "Lower", optionC: "Do not affect", optionD: "Double", correctOption: "B", explanation: "Higher cap rates reduce property values (value = NOI / cap rate), a drag on returns.", orderIndex: 10 },
  { id: "cfa3-capital-market-expectations-real-estate-q12", topicId: "cfa3-capital-market-expectations-real-estate", text: "Contango in a commodity curve generates a roll return that is:", optionA: "Positive", optionB: "Negative", optionC: "Zero", optionD: "Equal to carry", correctOption: "B", explanation: "Rolling into higher-priced deferred contracts in contango produces a negative roll yield.", orderIndex: 11 },

  // Forecasting exchange rates (CME)
  { id: "cfa3-capital-market-expectations-exchange-rates-q01", topicId: "cfa3-capital-market-expectations-exchange-rates", text: "Purchasing power parity is best regarded as a:", optionA: "Reliable short-run predictor", optionB: "Long-run anchor that fails short-term", optionC: "Daily trading signal", optionD: "Risk-free arbitrage", correctOption: "B", explanation: "PPP holds loosely over long horizons but predicts poorly in the short run.", orderIndex: 0 },
  { id: "cfa3-capital-market-expectations-exchange-rates-q02", topicId: "cfa3-capital-market-expectations-exchange-rates", text: "Under the balance-of-payments view, persistent current-account deficits tend to:", optionA: "Strengthen the currency", optionB: "Pressure the currency lower over time", optionC: "Have no effect", optionD: "Eliminate inflation", correctOption: "B", explanation: "Sustained deficits imply net selling pressure, though capital flows can offset short-term.", orderIndex: 1 },
  { id: "cfa3-capital-market-expectations-exchange-rates-q03", topicId: "cfa3-capital-market-expectations-exchange-rates", text: "In risk-off (stress) periods, which currencies typically appreciate?", optionA: "High-yield emerging currencies", optionB: "Safe havens (USD, JPY, CHF)", optionC: "Commodity currencies", optionD: "All currencies equally", correctOption: "B", explanation: "Safe-haven currencies rally as investors seek safety during stress.", orderIndex: 2 },
  { id: "cfa3-capital-market-expectations-exchange-rates-q04", topicId: "cfa3-capital-market-expectations-exchange-rates", text: "Carry trades profit when:", optionA: "Uncovered interest parity holds exactly", optionB: "High-yield currencies fail to depreciate as UIRP predicts", optionC: "Covered parity is violated", optionD: "Inflation is identical", correctOption: "B", explanation: "Carry earns the rate differential when high-yield currencies don't depreciate enough — a UIRP failure.", orderIndex: 3 },
  { id: "cfa3-capital-market-expectations-exchange-rates-q05", topicId: "cfa3-capital-market-expectations-exchange-rates", text: "Carry-trade returns are characterized by:", optionA: "Symmetric, normal payoffs", optionB: "Negative skew (occasional large losses)", optionC: "Zero risk", optionD: "Guaranteed gains", correctOption: "B", explanation: "Carry trades earn steady gains punctuated by sharp losses — negative skew/crash risk.", orderIndex: 4 },
  { id: "cfa3-capital-market-expectations-exchange-rates-q06", topicId: "cfa3-capital-market-expectations-exchange-rates", text: "Short-run exchange-rate moves are most influenced by:", optionA: "Trade flows", optionB: "Capital flows and risk sentiment", optionC: "Long-run PPP", optionD: "Dividends", correctOption: "B", explanation: "Capital flows chasing returns and shifts in risk sentiment dominate short-run FX.", orderIndex: 5 },
  { id: "cfa3-capital-market-expectations-exchange-rates-q07", topicId: "cfa3-capital-market-expectations-exchange-rates", text: "Currency forecasts feed portfolio decisions mainly through the:", optionA: "Hedge ratio for foreign assets", optionB: "Coupon", optionC: "Cap rate", optionD: "Duration", correctOption: "A", explanation: "Expected currency moves inform how much foreign-asset FX exposure to hedge.", orderIndex: 6 },
  { id: "cfa3-capital-market-expectations-exchange-rates-q08", topicId: "cfa3-capital-market-expectations-exchange-rates", text: "Relative PPP predicts the higher-inflation country's currency will:", optionA: "Appreciate", optionB: "Depreciate by the inflation differential", optionC: "Stay constant", optionD: "Track interest rates", correctOption: "B", explanation: "Under relative PPP, higher inflation leads to currency depreciation by the differential.", orderIndex: 7 },
  { id: "cfa3-capital-market-expectations-exchange-rates-q09", topicId: "cfa3-capital-market-expectations-exchange-rates", text: "Central-bank intervention is most effective when backed by:", optionA: "No reserves", optionB: "Ample reserves and credibility", optionC: "Higher dividends", optionD: "A buyback", correctOption: "B", explanation: "Reserves and credibility determine whether intervention can durably move the currency.", orderIndex: 8 },
  { id: "cfa3-capital-market-expectations-exchange-rates-q10", topicId: "cfa3-capital-market-expectations-exchange-rates", text: "A practical caution in FX forecasting is that:", optionA: "Forecasts are highly certain", optionB: "Forecast uncertainty is high; combine fundamentals with sentiment", optionC: "Only PPP matters", optionD: "Currencies never move", correctOption: "B", explanation: "FX is notoriously hard to forecast; blend fundamentals, technicals/sentiment, and acknowledge uncertainty.", orderIndex: 9 },
  { id: "cfa3-capital-market-expectations-exchange-rates-q11", topicId: "cfa3-capital-market-expectations-exchange-rates", text: "The international Fisher effect links nominal interest-rate differentials to differences in expected:", optionA: "Inflation", optionB: "Dividends", optionC: "GDP only", optionD: "Beta", correctOption: "A", explanation: "It assumes equal real rates, so nominal differentials reflect expected inflation differences.", orderIndex: 10 },
  { id: "cfa3-capital-market-expectations-exchange-rates-q12", topicId: "cfa3-capital-market-expectations-exchange-rates", text: "Monetary models tie long-run currency value to relative money growth and:", optionA: "Inflation", optionB: "Dividends", optionC: "Beta", optionD: "Cap rates", correctOption: "A", explanation: "Monetary approaches emphasize relative money supply growth and inflation as long-run FX drivers.", orderIndex: 11 },

  // Asset allocation approaches
  { id: "cfa3-asset-allocation-approaches-q01", topicId: "cfa3-asset-allocation-approaches", text: "Mean-variance optimization is often called an 'error maximizer' because it is highly sensitive to:", optionA: "Estimation error in expected returns", optionB: "The risk-free rate only", optionC: "The number of assets", optionD: "Tax rates", correctOption: "A", explanation: "MVO concentrates weights in high-(mis)estimated-return assets, magnifying input errors.", orderIndex: 0 },
  { id: "cfa3-asset-allocation-approaches-q02", topicId: "cfa3-asset-allocation-approaches", text: "Risk parity allocates so that each asset contributes:", optionA: "Equal capital", optionB: "Equal risk", optionC: "Equal return", optionD: "Zero risk", correctOption: "B", explanation: "Risk parity equalizes each asset's contribution to total portfolio risk, often using leverage.", orderIndex: 1 },
  { id: "cfa3-asset-allocation-approaches-q03", topicId: "cfa3-asset-allocation-approaches", text: "The Black-Litterman model improves MVO by:", optionA: "Ignoring equilibrium", optionB: "Blending equilibrium (reverse-optimized) returns with investor views", optionC: "Removing constraints", optionD: "Using only history", correctOption: "B", explanation: "Black-Litterman tilts equilibrium returns toward the investor's views, stabilizing weights.", orderIndex: 2 },
  { id: "cfa3-asset-allocation-approaches-q04", topicId: "cfa3-asset-allocation-approaches", text: "Resampling and adding constraints help MVO by:", optionA: "Increasing concentration", optionB: "Reducing concentrated, unstable weights", optionC: "Removing diversification", optionD: "Raising input error", correctOption: "B", explanation: "These remedies temper MVO's tendency to produce extreme, input-sensitive allocations.", orderIndex: 3 },
  { id: "cfa3-asset-allocation-approaches-q05", topicId: "cfa3-asset-allocation-approaches", text: "Risk budgeting is the process of:", optionA: "Allocating capital equally", optionB: "Allocating the portfolio's risk across positions/factors", optionC: "Minimizing trades", optionD: "Setting fees", correctOption: "B", explanation: "Risk budgeting decides how much risk each position or factor may contribute.", orderIndex: 4 },
  { id: "cfa3-asset-allocation-approaches-q06", topicId: "cfa3-asset-allocation-approaches", text: "Reverse optimization derives:", optionA: "Expected returns implied by market-cap weights", optionB: "The risk-free rate", optionC: "Duration", optionD: "Cap rates", correctOption: "A", explanation: "Reverse optimization backs out the returns implied by equilibrium (market) weights — a Black-Litterman input.", orderIndex: 5 },
  { id: "cfa3-asset-allocation-approaches-q07", topicId: "cfa3-asset-allocation-approaches", text: "Factor-based asset allocation allocates to:", optionA: "Asset-class labels only", optionB: "Rewarded factors (value, momentum, quality, carry)", optionC: "Cash only", optionD: "A single stock", correctOption: "B", explanation: "Factor investing targets underlying return drivers rather than traditional asset-class buckets.", orderIndex: 6 },
  { id: "cfa3-asset-allocation-approaches-q08", topicId: "cfa3-asset-allocation-approaches", text: "The MVO objective function maximizes expected return minus:", optionA: "½ × risk-aversion × variance", optionB: "The dividend yield", optionC: "Duration", optionD: "The coupon", correctOption: "A", explanation: "Utility = E[R] − ½λσ², trading off return against variance scaled by risk aversion.", orderIndex: 7 },
  { id: "cfa3-asset-allocation-approaches-q09", topicId: "cfa3-asset-allocation-approaches", text: "A minimum-variance portfolio is constructed to:", optionA: "Maximize expected return", optionB: "Minimize total portfolio variance", optionC: "Maximize beta", optionD: "Equalize capital", correctOption: "B", explanation: "It seeks the lowest-variance combination of assets, ignoring expected-return estimates.", orderIndex: 8 },
  { id: "cfa3-asset-allocation-approaches-q10", topicId: "cfa3-asset-allocation-approaches", text: "Risk parity portfolios often use leverage to:", optionA: "Reduce return", optionB: "Raise the expected return of a low-risk, well-diversified mix", optionC: "Eliminate all risk", optionD: "Avoid bonds", correctOption: "B", explanation: "Because risk parity overweights low-risk assets, leverage is used to reach a target return.", orderIndex: 9 },
  { id: "cfa3-asset-allocation-approaches-q11", topicId: "cfa3-asset-allocation-approaches", text: "The choice among asset-only, liability-relative and goals-based approaches depends mainly on:", optionA: "The investor's situation and objectives", optionB: "The risk-free rate", optionC: "The auditor", optionD: "Beta", correctOption: "A", explanation: "The appropriate framework follows from whether liabilities or specific goals must be funded.", orderIndex: 10 },
  { id: "cfa3-asset-allocation-approaches-q12", topicId: "cfa3-asset-allocation-approaches", text: "Despite its flaws, MVO with sensible constraints remains:", optionA: "Never used", optionB: "A widely used workhorse for asset allocation", optionC: "Risk-free", optionD: "Identical to risk parity", correctOption: "B", explanation: "Constrained/resampled MVO is still the practical baseline for strategic allocation.", orderIndex: 11 },

  // Liability-relative asset allocation
  { id: "cfa3-asset-allocation-liability-relative-q01", topicId: "cfa3-asset-allocation-liability-relative", text: "Liability-relative asset allocation is most appropriate for:", optionA: "A young individual with no liabilities", optionB: "Pensions and insurers with defined obligations", optionC: "A day trader", optionD: "A cash-only saver", correctOption: "B", explanation: "Institutions with liabilities to fund manage assets relative to those liabilities.", orderIndex: 0 },
  { id: "cfa3-asset-allocation-liability-relative-q02", topicId: "cfa3-asset-allocation-liability-relative", text: "Surplus optimization maximizes expected surplus return per unit of:", optionA: "Surplus volatility", optionB: "Asset volatility only", optionC: "Coupon", optionD: "Beta", correctOption: "A", explanation: "Surplus optimization is mean-variance applied to the surplus (assets − liabilities).", orderIndex: 1 },
  { id: "cfa3-asset-allocation-liability-relative-q03", topicId: "cfa3-asset-allocation-liability-relative", text: "The hedging/return-seeking split divides the portfolio into a liability-hedging portfolio and a:", optionA: "Cash buffer only", optionB: "Return-seeking (growth) portfolio", optionC: "Single bond", optionD: "Currency overlay only", correctOption: "B", explanation: "One sleeve hedges liabilities (duration-matched bonds); the other seeks return (growth assets).", orderIndex: 2 },
  { id: "cfa3-asset-allocation-liability-relative-q04", topicId: "cfa3-asset-allocation-liability-relative", text: "The funded ratio equals:", optionA: "Assets / PV(liabilities)", optionB: "Liabilities / assets", optionC: "Assets − coupon", optionD: "PV(liabilities) × beta", correctOption: "A", explanation: "Funded ratio = assets divided by the present value of liabilities; below 1 is a deficit.", orderIndex: 3 },
  { id: "cfa3-asset-allocation-liability-relative-q05", topicId: "cfa3-asset-allocation-liability-relative", text: "Because pension liabilities are bond-like, the dominant risk to hedge is:", optionA: "Equity beta", optionB: "Interest-rate (duration) risk", optionC: "Currency risk only", optionD: "Liquidity only", correctOption: "B", explanation: "Liability values move with interest rates, so duration matching is central to hedging.", orderIndex: 4 },
  { id: "cfa3-asset-allocation-liability-relative-q06", topicId: "cfa3-asset-allocation-liability-relative", text: "A better-funded plan can generally:", optionA: "Take more risk indefinitely", optionB: "De-risk (glide path) toward more hedging assets", optionC: "Ignore liabilities", optionD: "Stop investing", correctOption: "B", explanation: "As funded status improves, plans often de-risk toward liability-hedging assets to lock in gains.", orderIndex: 5 },
  { id: "cfa3-asset-allocation-liability-relative-q07", topicId: "cfa3-asset-allocation-liability-relative", text: "Inflation-linked liabilities are best hedged with:", optionA: "Nominal bonds", optionB: "Inflation-linked bonds (linkers)", optionC: "Equities only", optionD: "Cash", correctOption: "B", explanation: "Linkers hedge inflation-sensitive liabilities better than nominal bonds.", orderIndex: 6 },
  { id: "cfa3-asset-allocation-liability-relative-q08", topicId: "cfa3-asset-allocation-liability-relative", text: "Integrated asset-liability management (ALM) jointly models:", optionA: "Only assets", optionB: "Both assets and liabilities", optionC: "Only liabilities", optionD: "Neither", correctOption: "B", explanation: "ALM optimizes considering both sides of the balance sheet together.", orderIndex: 7 },
  { id: "cfa3-asset-allocation-liability-relative-q09", topicId: "cfa3-asset-allocation-liability-relative", text: "Surplus volatility primarily reflects the mismatch between asset and liability:", optionA: "Coupons", optionB: "Sensitivities (e.g., duration)", optionC: "Auditors", optionD: "Tickers", correctOption: "B", explanation: "Differences in interest-rate (and other) sensitivities drive surplus volatility.", orderIndex: 8 },
  { id: "cfa3-asset-allocation-liability-relative-q10", topicId: "cfa3-asset-allocation-liability-relative", text: "A plan that is underfunded generally has:", optionA: "Lower need for returns", optionB: "Pressure to take some return-seeking risk (subject to constraints)", optionC: "No liabilities", optionD: "A surplus", correctOption: "B", explanation: "Deficits often require growth assets to close the gap, balanced against funding risk.", orderIndex: 9 },
  { id: "cfa3-asset-allocation-liability-relative-q11", topicId: "cfa3-asset-allocation-liability-relative", text: "A key risk in liability-relative allocation is:", optionA: "Surplus volatility and non-parallel curve shifts", optionB: "Dividend risk only", optionC: "No risk", optionD: "Style drift only", correctOption: "A", explanation: "Surplus can swing from rate moves (including twists), plus longevity and contribution risks.", orderIndex: 10 },
  { id: "cfa3-asset-allocation-liability-relative-q12", topicId: "cfa3-asset-allocation-liability-relative", text: "The liability-hedging portfolio is typically composed of:", optionA: "High-growth equities", optionB: "Duration-matched (often high-quality) bonds", optionC: "Commodities", optionD: "Cash only", correctOption: "B", explanation: "Hedging assets are bonds matched to the liabilities' interest-rate sensitivity.", orderIndex: 11 },

  // Goals-based asset allocation
  { id: "cfa3-asset-allocation-goals-based-q01", topicId: "cfa3-asset-allocation-goals-based", text: "Goals-based asset allocation is most associated with:", optionA: "Pension funds", optionB: "Individual investors", optionC: "Central banks", optionD: "Insurers only", correctOption: "B", explanation: "Goals-based investing organizes an individual's wealth around specific personal goals.", orderIndex: 0 },
  { id: "cfa3-asset-allocation-goals-based-q02", topicId: "cfa3-asset-allocation-goals-based", text: "Each goal is assigned a sub-portfolio based on its time horizon and:", optionA: "Required probability of success", optionB: "The auditor", optionC: "Beta", optionD: "The coupon", correctOption: "A", explanation: "Goals are funded by sub-portfolios sized to a horizon and a required success probability.", orderIndex: 1 },
  { id: "cfa3-asset-allocation-goals-based-q03", topicId: "cfa3-asset-allocation-goals-based", text: "High-priority, near-term goals are typically funded with:", optionA: "Riskier assets", optionB: "Safer (lower-risk) sub-portfolios", optionC: "Leverage", optionD: "Only equities", correctOption: "B", explanation: "Critical, soon-due goals get conservative allocations to ensure they are met.", orderIndex: 2 },
  { id: "cfa3-asset-allocation-goals-based-q04", topicId: "cfa3-asset-allocation-goals-based", text: "Goals-based investing leverages which behavioral tendency constructively?", optionA: "Mental accounting", optionB: "Loss aversion only", optionC: "Anchoring", optionD: "Herding", correctOption: "A", explanation: "It uses clients' natural mental accounting (separate buckets per goal) to improve discipline.", orderIndex: 3 },
  { id: "cfa3-asset-allocation-goals-based-q05", topicId: "cfa3-asset-allocation-goals-based", text: "A drawback of goals-based allocation is that it can be ____ at the total-portfolio level.", optionA: "Optimal", optionB: "Sub-optimal (ignores cross-goal diversification)", optionC: "Risk-free", optionD: "Tax-free", correctOption: "B", explanation: "Separating goals can miss diversification across the aggregate, a mild efficiency cost.", orderIndex: 4 },
  { id: "cfa3-asset-allocation-goals-based-q06", topicId: "cfa3-asset-allocation-goals-based", text: "Aspirational, long-horizon goals can be funded with:", optionA: "Cash only", optionB: "Riskier, higher-expected-return assets", optionC: "No assets", optionD: "Short bills only", correctOption: "B", explanation: "Lower-priority, distant goals can bear more risk for higher expected return.", orderIndex: 5 },
  { id: "cfa3-asset-allocation-goals-based-q07", topicId: "cfa3-asset-allocation-goals-based", text: "A module/overlay approach uses standardized:", optionA: "Risk modules (sub-portfolios at set risk levels)", optionB: "Single stocks", optionC: "Currencies", optionD: "Auditors", correctOption: "A", explanation: "Goals are mapped to pre-built risk modules; an overlay manages aggregate exposures/taxes.", orderIndex: 6 },
  { id: "cfa3-asset-allocation-goals-based-q08", topicId: "cfa3-asset-allocation-goals-based", text: "The 'minimum expectations' return for a goal is the return needed to achieve it at a:", optionA: "Specified high confidence level", optionB: "Zero probability", optionC: "Random level", optionD: "Negative level", correctOption: "A", explanation: "Each goal targets a return achievable with its required (often high) probability of success.", orderIndex: 7 },
  { id: "cfa3-asset-allocation-goals-based-q09", topicId: "cfa3-asset-allocation-goals-based", text: "A benefit of goals-based investing is improved:", optionA: "Client adherence/behavior", optionB: "Market efficiency", optionC: "Tax rates", optionD: "Beta", correctOption: "A", explanation: "Tying portfolios to tangible goals helps clients stay disciplined through volatility.", orderIndex: 8 },
  { id: "cfa3-asset-allocation-goals-based-q10", topicId: "cfa3-asset-allocation-goals-based", text: "Goals-based sub-portfolios aggregate into:", optionA: "An overall asset allocation", optionB: "A single bond", optionC: "Cash only", optionD: "No allocation", correctOption: "A", explanation: "The combined sub-portfolios form the investor's total allocation.", orderIndex: 9 },
  { id: "cfa3-asset-allocation-goals-based-q11", topicId: "cfa3-asset-allocation-goals-based", text: "Compared with traditional MVO, goals-based allocation is generally:", optionA: "Simpler at the total level", optionB: "More intuitive for clients but potentially less total-portfolio efficient", optionC: "Always more efficient", optionD: "Risk-free", correctOption: "B", explanation: "It improves client understanding/behavior at a modest cost to aggregate efficiency.", orderIndex: 10 },
  { id: "cfa3-asset-allocation-goals-based-q12", topicId: "cfa3-asset-allocation-goals-based", text: "Lower-priority goals in a goals-based plan are typically allocated:", optionA: "The safest assets", optionB: "More risk than high-priority goals", optionC: "Only cash", optionD: "No assets", correctOption: "B", explanation: "Risk is scaled by priority — less critical goals can take more risk.", orderIndex: 11 },

  // Asset allocation with constraints
  { id: "cfa3-asset-allocation-constraints-q01", topicId: "cfa3-asset-allocation-constraints", text: "A very small asset owner may be constrained because it:", optionA: "Faces capacity limits in large strategies", optionB: "Cannot access some alternatives (minimums/scale)", optionC: "Has too much liquidity", optionD: "Has no goals", correctOption: "B", explanation: "Small portfolios may be unable to meet minimums or diversify into certain alternatives.", orderIndex: 0 },
  { id: "cfa3-asset-allocation-constraints-q02", topicId: "cfa3-asset-allocation-constraints", text: "Illiquid assets like private equity complicate allocation because they:", optionA: "Can be rebalanced freely", optionB: "Cannot be rebalanced easily and require commitment pacing", optionC: "Have daily liquidity", optionD: "Have no risk", correctOption: "B", explanation: "Illiquidity and capital calls require pacing and a liquidity reserve, limiting rebalancing.", orderIndex: 1 },
  { id: "cfa3-asset-allocation-constraints-q03", topicId: "cfa3-asset-allocation-constraints", text: "Asset location places tax-inefficient assets in:", optionA: "Taxable accounts", optionB: "Tax-advantaged (sheltered) accounts", optionC: "Cash", optionD: "Foreign accounts", correctOption: "B", explanation: "Tax-inefficient assets (e.g., high-turnover, bonds) belong in sheltered accounts to reduce tax drag.", orderIndex: 2 },
  { id: "cfa3-asset-allocation-constraints-q04", topicId: "cfa3-asset-allocation-constraints", text: "After-tax asset allocation matters because taxes change an asset's:", optionA: "Ticker", optionB: "Effective return and risk", optionC: "Auditor", optionD: "Coupon date", correctOption: "B", explanation: "Taxes reduce returns and alter risk, so optimization should use after-tax inputs.", orderIndex: 3 },
  { id: "cfa3-asset-allocation-constraints-q05", topicId: "cfa3-asset-allocation-constraints", text: "Rebalancing corridors for taxable accounts are typically:", optionA: "Narrower", optionB: "Wider (to limit taxable trades)", optionC: "Zero", optionD: "Irrelevant", correctOption: "B", explanation: "Tax costs of trading justify wider rebalancing bands in taxable accounts.", orderIndex: 4 },
  { id: "cfa3-asset-allocation-constraints-q06", topicId: "cfa3-asset-allocation-constraints", text: "Commitment pacing for private funds manages:", optionA: "Currency risk only", optionB: "Liquidity and the timing/J-curve of capital deployment", optionC: "Beta", optionD: "Coupons", correctOption: "B", explanation: "Pacing commitments across vintages smooths liquidity needs and the J-curve.", orderIndex: 5 },
  { id: "cfa3-asset-allocation-constraints-q07", topicId: "cfa3-asset-allocation-constraints", text: "Tax-loss harvesting improves after-tax results by:", optionA: "Realizing losses to offset gains", optionB: "Increasing turnover for its own sake", optionC: "Avoiding equities", optionD: "Deferring dividends", correctOption: "A", explanation: "Harvesting losses offsets taxable gains, lowering the current tax bill.", orderIndex: 6 },
  { id: "cfa3-asset-allocation-constraints-q08", topicId: "cfa3-asset-allocation-constraints", text: "A liquidity reserve is held primarily to:", optionA: "Maximize return", optionB: "Meet near-term needs and capital calls without forced selling", optionC: "Increase leverage", optionD: "Avoid taxes", correctOption: "B", explanation: "Cash/liquid assets cover spending and capital calls, avoiding forced sales of illiquid assets.", orderIndex: 7 },
  { id: "cfa3-asset-allocation-constraints-q09", topicId: "cfa3-asset-allocation-constraints", text: "ESG or legal restrictions are examples of:", optionA: "Return objectives", optionB: "Constraints on the allocation", optionC: "Risk-free assets", optionD: "Benchmarks", correctOption: "B", explanation: "Mandated exclusions/limits act as constraints shaping the feasible allocation.", orderIndex: 8 },
  { id: "cfa3-asset-allocation-constraints-q10", topicId: "cfa3-asset-allocation-constraints", text: "A glide path is an example of a(n):", optionA: "Automatic adjustment to allocation over time", optionB: "Single trade", optionC: "Tax form", optionD: "Benchmark", correctOption: "A", explanation: "Glide paths systematically shift the allocation (e.g., de-risking) as circumstances change.", orderIndex: 9 },
  { id: "cfa3-asset-allocation-constraints-q11", topicId: "cfa3-asset-allocation-constraints", text: "A large asset owner may face the constraint of:", optionA: "Too few opportunities to deploy capital (capacity)", optionB: "Inability to access any markets", optionC: "No liquidity ever", optionD: "No governance", correctOption: "A", explanation: "Very large portfolios can struggle to deploy capital in capacity-limited strategies without moving prices.", orderIndex: 10 },
  { id: "cfa3-asset-allocation-constraints-q12", topicId: "cfa3-asset-allocation-constraints", text: "Tactical asset allocation shifts respond to:", optionA: "Permanent policy", optionB: "Short-run changes in capital market expectations", optionC: "The auditor", optionD: "Share count", correctOption: "B", explanation: "TAA temporarily deviates from policy to exploit changing near-term opportunities.", orderIndex: 11 },

  // Index-based fixed-income investing
  { id: "cfa3-fixed-income-pm-indexing-q01", topicId: "cfa3-fixed-income-pm-indexing", text: "Full replication of a bond index is usually impractical because the index has:", optionA: "Too few bonds", optionB: "Thousands of issues, many illiquid", optionC: "No duration", optionD: "Only government bonds", correctOption: "B", explanation: "Bond indices contain many illiquid issues with changing composition, making full replication infeasible.", orderIndex: 0 },
  { id: "cfa3-fixed-income-pm-indexing-q02", topicId: "cfa3-fixed-income-pm-indexing", text: "Stratified sampling (cell matching) replicates an index by:", optionA: "Holding every bond", optionB: "Matching cell weights defined by risk factors like duration and sector", optionC: "Buying only the largest bond", optionD: "Ignoring credit quality", correctOption: "B", explanation: "Cells are formed by key risk dimensions; the portfolio matches each cell's index weight.", orderIndex: 1 },
  { id: "cfa3-fixed-income-pm-indexing-q03", topicId: "cfa3-fixed-income-pm-indexing", text: "Enhanced indexing aims to:", optionA: "Take large active bets", optionB: "Match index risk factors while making small value-adding bets at low tracking error", optionC: "Maximize tracking error", optionD: "Ignore the benchmark", correctOption: "B", explanation: "Enhanced indexing keeps factor exposures near the index and seeks modest alpha with low active risk.", orderIndex: 2 },
  { id: "cfa3-fixed-income-pm-indexing-q04", topicId: "cfa3-fixed-income-pm-indexing", text: "To control interest-rate tracking error, the portfolio should match the benchmark's:", optionA: "Coupon", optionB: "Duration and key-rate durations", optionC: "Number of issuers only", optionD: "Dividend yield", correctOption: "B", explanation: "Matching duration and key-rate durations minimizes interest-rate tracking error versus the index.", orderIndex: 3 },
  { id: "cfa3-fixed-income-pm-indexing-q05", topicId: "cfa3-fixed-income-pm-indexing", text: "A source of tracking error in a sampled bond index portfolio is:", optionA: "Perfect replication", optionB: "Mismatches in sector, quality, and convexity exposures", optionC: "Zero transaction costs", optionD: "Holding the entire index", correctOption: "B", explanation: "Sampling leaves residual mismatches (sector, quality, convexity) that create tracking error.", orderIndex: 4 },
  { id: "cfa3-fixed-income-pm-indexing-q06", topicId: "cfa3-fixed-income-pm-indexing", text: "Bond ETFs and total-return swaps are used for index exposure because they are:", optionA: "Illiquid and costly", optionB: "Cheap and liquid", optionC: "Free of basis risk", optionD: "Guaranteed to outperform", correctOption: "B", explanation: "These vehicles provide efficient, liquid index exposure, though basis/liquidity must be watched.", orderIndex: 5 },
  { id: "cfa3-fixed-income-pm-indexing-q07", topicId: "cfa3-fixed-income-pm-indexing", text: "Matching portfolio BPV to the benchmark's BPV controls:", optionA: "Credit risk", optionB: "Interest-rate (duration) tracking error", optionC: "Currency risk", optionD: "Liquidity risk", correctOption: "B", explanation: "Equal basis-point values neutralize the net interest-rate sensitivity vs the benchmark.", orderIndex: 6 },
  { id: "cfa3-fixed-income-pm-indexing-q08", topicId: "cfa3-fixed-income-pm-indexing", text: "Index reconstitution creates costs because:", optionA: "Indices never change", optionB: "Forced buying/selling at rebalance dates incurs transaction costs", optionC: "There is no turnover", optionD: "Bonds never mature", correctOption: "B", explanation: "Periodic index changes force trades that incur costs and potential front-running.", orderIndex: 7 },
  { id: "cfa3-fixed-income-pm-indexing-q09", topicId: "cfa3-fixed-income-pm-indexing", text: "Optimization-based replication minimizes tracking error subject to:", optionA: "No constraints", optionB: "Risk and turnover constraints", optionC: "Maximizing turnover", optionD: "Holding one bond", correctOption: "B", explanation: "Optimization selects holdings to minimize tracking error within practical risk/turnover limits.", orderIndex: 8 },
  { id: "cfa3-fixed-income-pm-indexing-q10", topicId: "cfa3-fixed-income-pm-indexing", text: "Securities lending can help an index bond fund by:", optionA: "Increasing tracking error", optionB: "Generating income that offsets costs", optionC: "Eliminating duration", optionD: "Removing credit risk", correctOption: "B", explanation: "Lending out bonds earns fees that can reduce the fund's net expense/tracking drag.", orderIndex: 9 },
  { id: "cfa3-fixed-income-pm-indexing-q11", topicId: "cfa3-fixed-income-pm-indexing", text: "The primary success metric for a passive bond manager is:", optionA: "Absolute return", optionB: "Low tracking error vs the benchmark", optionC: "High turnover", optionD: "Beating peers by a wide margin", correctOption: "B", explanation: "Passive mandates are judged on how closely they track the index (minimal tracking error).", orderIndex: 10 },
  { id: "cfa3-fixed-income-pm-indexing-q12", topicId: "cfa3-fixed-income-pm-indexing", text: "Compared with equity indexing, bond indexing is harder mainly due to:", optionA: "Fewer securities", optionB: "Many illiquid issues and constant composition changes", optionC: "No duration risk", optionD: "Daily liquidity in all bonds", correctOption: "B", explanation: "Bond universes are large, illiquid, and constantly changing (maturities, calls, issuance).", orderIndex: 11 },

  // Yield-curve strategies (L3)
  { id: "cfa3-fixed-income-pm-yield-curve-q01", topicId: "cfa3-fixed-income-pm-yield-curve", text: "Expecting rates to fall, a manager should:", optionA: "Shorten duration", optionB: "Extend duration", optionC: "Hold cash", optionD: "Buy floaters", correctOption: "B", explanation: "Longer duration maximizes price gains when yields fall.", orderIndex: 0 },
  { id: "cfa3-fixed-income-pm-yield-curve-q02", topicId: "cfa3-fixed-income-pm-yield-curve", text: "Anticipating curve flattening, a manager might use a:", optionA: "Bullet at the short end", optionB: "Barbell / overweight the long end", optionC: "Cash-only position", optionD: "Equity hedge", correctOption: "B", explanation: "If long yields fall relative to short, overweighting the long end (barbell) benefits.", orderIndex: 1 },
  { id: "cfa3-fixed-income-pm-yield-curve-q03", topicId: "cfa3-fixed-income-pm-yield-curve", text: "For a given duration, a barbell vs a bullet has:", optionA: "Lower convexity", optionB: "Higher convexity but typically a lower yield", optionC: "No convexity", optionD: "Identical yield and convexity", correctOption: "B", explanation: "Barbells have more convexity (helpful in large moves) but usually a lower yield than bullets.", orderIndex: 2 },
  { id: "cfa3-fixed-income-pm-yield-curve-q04", topicId: "cfa3-fixed-income-pm-yield-curve", text: "A butterfly trade is used to exploit a change in the curve's:", optionA: "Level", optionB: "Curvature", optionC: "Credit spread", optionD: "Coupon", correctOption: "B", explanation: "Butterfly trades (wings vs belly) target curvature changes, usually duration-neutral.", orderIndex: 3 },
  { id: "cfa3-fixed-income-pm-yield-curve-q05", topicId: "cfa3-fixed-income-pm-yield-curve", text: "On a stable, upward-sloping curve, a profitable passive approach is:", optionA: "Constantly shorting bonds", optionB: "Buy-and-hold with rolldown/carry", optionC: "Moving fully to cash", optionD: "Maximizing turnover", correctOption: "B", explanation: "A stable curve lets carry and rolldown capture yield without rate forecasts.", orderIndex: 4 },
  { id: "cfa3-fixed-income-pm-yield-curve-q06", topicId: "cfa3-fixed-income-pm-yield-curve", text: "Key-rate durations are used to:", optionA: "Capture only parallel shifts", optionB: "Target exposure to specific maturities (non-parallel moves)", optionC: "Measure credit risk", optionD: "Compute the coupon", correctOption: "B", explanation: "Key-rate durations measure sensitivity at individual points on the curve for slope/curvature trades.", orderIndex: 5 },
  { id: "cfa3-fixed-income-pm-yield-curve-q07", topicId: "cfa3-fixed-income-pm-yield-curve", text: "An active curve trade is profitable only if realized rates differ from the:", optionA: "Coupon", optionB: "Forward-implied rates", optionC: "Risk-free rate", optionD: "Dividend yield", correctOption: "B", explanation: "Forwards are the break-even; active positioning pays only if the curve evolves differently than forwards imply.", orderIndex: 6 },
  { id: "cfa3-fixed-income-pm-yield-curve-q08", topicId: "cfa3-fixed-income-pm-yield-curve", text: "Anticipating steepening, a manager would favor a:", optionA: "Barbell", optionB: "Bullet / overweight short-intermediate maturities", optionC: "Long-only at the long end", optionD: "Cash", correctOption: "B", explanation: "If long yields rise relative to short, concentrating in shorter maturities (bullet) reduces losses.", orderIndex: 7 },
  { id: "cfa3-fixed-income-pm-yield-curve-q09", topicId: "cfa3-fixed-income-pm-yield-curve", text: "Higher convexity is most valuable when:", optionA: "Rates are constant", optionB: "Large or volatile rate moves are expected", optionC: "The curve never changes", optionD: "Coupons are zero", correctOption: "B", explanation: "Convexity improves the price response asymmetrically, helping most in big/volatile moves.", orderIndex: 8 },
  { id: "cfa3-fixed-income-pm-yield-curve-q10", topicId: "cfa3-fixed-income-pm-yield-curve", text: "Empirically, most yield-curve variance is explained by changes in the:", optionA: "Level (parallel shift)", optionB: "Curvature", optionC: "Convexity", optionD: "Coupon", correctOption: "A", explanation: "The first principal component — level/parallel shift — accounts for the bulk of curve variance.", orderIndex: 9 },
  { id: "cfa3-fixed-income-pm-yield-curve-q11", topicId: "cfa3-fixed-income-pm-yield-curve", text: "A duration-neutral slope trade isolates exposure to:", optionA: "The overall level of rates", optionB: "Changes in the curve's slope", optionC: "Credit spreads", optionD: "Currency", correctOption: "B", explanation: "Holding duration constant while shifting weights toward one end isolates a slope (steepening/flattening) view.", orderIndex: 10 },
  { id: "cfa3-fixed-income-pm-yield-curve-q12", topicId: "cfa3-fixed-income-pm-yield-curve", text: "Riding (rolling) down the yield curve adds return when the curve is:", optionA: "Inverted and volatile", optionB: "Upward-sloping and stable", optionC: "Flat and falling", optionD: "Downward-sloping", correctOption: "B", explanation: "On a stable upward-sloping curve, a bond's yield falls as it ages, producing price gains beyond its coupon.", orderIndex: 11 },

  // Credit strategies (L3)
  { id: "cfa3-fixed-income-pm-credit-q01", topicId: "cfa3-fixed-income-pm-credit", text: "A top-down credit strategy focuses on:", optionA: "Picking individual mispriced issuers", optionB: "Sector, quality and credit-cycle rotation", optionC: "Currency forecasting", optionD: "Duration only", correctOption: "B", explanation: "Top-down credit rotates sector/quality exposure based on the macro and credit-cycle outlook.", orderIndex: 0 },
  { id: "cfa3-fixed-income-pm-credit-q02", topicId: "cfa3-fixed-income-pm-credit", text: "The key risk metric for a credit portfolio's spread sensitivity is:", optionA: "Spread duration", optionB: "The coupon", optionC: "Beta", optionD: "Vega", correctOption: "A", explanation: "Spread duration measures price sensitivity to changes in credit spreads.", orderIndex: 1 },
  { id: "cfa3-fixed-income-pm-credit-q03", topicId: "cfa3-fixed-income-pm-credit", text: "The credit-spread return impact is approximately:", optionA: "−(spread duration × Δspread)", optionB: "+coupon", optionC: "duration × convexity", optionD: "recovery × notional", correctOption: "A", explanation: "With rates held constant, spread return ≈ carry/roll − spread duration × Δspread − expected loss.", orderIndex: 2 },
  { id: "cfa3-fixed-income-pm-credit-q04", topicId: "cfa3-fixed-income-pm-credit", text: "Anticipating a recession, a credit manager would typically:", optionA: "Add lower-quality, high-spread credit", optionB: "Move up in quality and shorten spread duration", optionC: "Maximize leverage", optionD: "Buy only equities", correctOption: "B", explanation: "Defensively, managers upgrade quality and reduce spread duration before spreads widen.", orderIndex: 3 },
  { id: "cfa3-fixed-income-pm-credit-q05", topicId: "cfa3-fixed-income-pm-credit", text: "Expected credit loss equals:", optionA: "PD × LGD", optionB: "Coupon × duration", optionC: "Spread × convexity", optionD: "Beta × premium", correctOption: "A", explanation: "Expected loss = probability of default × loss given default (= 1 − recovery).", orderIndex: 4 },
  { id: "cfa3-fixed-income-pm-credit-q06", topicId: "cfa3-fixed-income-pm-credit", text: "CDX/iTraxx index CDS are used to:", optionA: "Buy a single bond", optionB: "Take efficient diversified long/short credit exposure", optionC: "Hedge currency only", optionD: "Buy equities", correctOption: "B", explanation: "Index CDS provide liquid, diversified credit exposure for hedging or expressing views.", orderIndex: 5 },
  { id: "cfa3-fixed-income-pm-credit-q07", topicId: "cfa3-fixed-income-pm-credit", text: "Credit spreads are generally ____ over the business cycle.", optionA: "Counter-cyclical", optionB: "Pro-cyclical (widen in recessions)", optionC: "Constant", optionD: "Random", correctOption: "B", explanation: "Spreads widen as default risk rises in downturns and narrow in expansions.", orderIndex: 6 },
  { id: "cfa3-fixed-income-pm-credit-q08", topicId: "cfa3-fixed-income-pm-credit", text: "A bottom-up credit approach relies on:", optionA: "Macro sector rotation", optionB: "Fundamental/relative-value analysis of individual issuers", optionC: "Currency views", optionD: "Index replication", correctOption: "B", explanation: "Bottom-up selects specific bonds believed mispriced via issuer-level analysis.", orderIndex: 7 },
  { id: "cfa3-fixed-income-pm-credit-q09", topicId: "cfa3-fixed-income-pm-credit", text: "Diversifying across many issuers primarily reduces:", optionA: "Systematic spread risk", optionB: "Idiosyncratic default risk", optionC: "Interest-rate risk", optionD: "Inflation risk", correctOption: "B", explanation: "Holding many uncorrelated issuers reduces issuer-specific default risk; systematic spread risk remains.", orderIndex: 8 },
  { id: "cfa3-fixed-income-pm-credit-q10", topicId: "cfa3-fixed-income-pm-credit", text: "The CDS-cash basis is the difference between:", optionA: "Two coupons", optionB: "The CDS spread and the cash-bond spread", optionC: "Duration and convexity", optionD: "Beta and alpha", correctOption: "B", explanation: "The basis compares CDS and cash-bond spreads for the same issuer, enabling relative-value trades.", orderIndex: 9 },
  { id: "cfa3-fixed-income-pm-credit-q11", topicId: "cfa3-fixed-income-pm-credit", text: "In a recovery phase, a credit manager seeking return would likely:", optionA: "Buy only Treasuries", optionB: "Add lower-rated, higher-spread credit", optionC: "Shorten spread duration sharply", optionD: "Sell all credit", correctOption: "B", explanation: "As spreads tighten in recovery, adding higher-spread credit raises return potential.", orderIndex: 10 },
  { id: "cfa3-fixed-income-pm-credit-q12", topicId: "cfa3-fixed-income-pm-credit", text: "'Jump-to-default' is an example of:", optionA: "Tail (idiosyncratic) credit risk", optionB: "Interest-rate risk", optionC: "Currency risk", optionD: "Liquidity-only risk", correctOption: "A", explanation: "A sudden default is a tail risk that diversification mitigates but cannot eliminate.", orderIndex: 11 },

  // Leverage, carry & roll-down
  { id: "cfa3-fixed-income-pm-leverage-q01", topicId: "cfa3-fixed-income-pm-leverage", text: "The main tool for leveraging a fixed-income portfolio is:", optionA: "Equity issuance", optionB: "Repurchase (repo) agreements", optionC: "Dividends", optionD: "Stock buybacks", correctOption: "B", explanation: "Repo financing is the primary way bond managers obtain leverage.", orderIndex: 0 },
  { id: "cfa3-fixed-income-pm-leverage-q02", topicId: "cfa3-fixed-income-pm-leverage", text: "Leverage magnifies:", optionA: "Only gains", optionB: "Both gains and losses", optionC: "Only losses", optionD: "Neither", correctOption: "B", explanation: "Leverage amplifies returns in both directions and adds funding risk.", orderIndex: 1 },
  { id: "cfa3-fixed-income-pm-leverage-q03", topicId: "cfa3-fixed-income-pm-leverage", text: "Positive carry exists when the asset's yield exceeds the:", optionA: "Coupon", optionB: "Financing (borrowing) cost", optionC: "Dividend", optionD: "Tax rate", correctOption: "B", explanation: "Carry = income earned minus financing cost; positive carry profits if the curve is unchanged.", orderIndex: 2 },
  { id: "cfa3-fixed-income-pm-leverage-q04", topicId: "cfa3-fixed-income-pm-leverage", text: "A repo haircut represents:", optionA: "Extra interest paid", optionB: "The collateral margin (overcollateralization) required by the lender", optionC: "A dividend", optionD: "A tax", correctOption: "B", explanation: "The haircut is the excess collateral the borrower must post; it can rise in stress, tightening funding.", orderIndex: 3 },
  { id: "cfa3-fixed-income-pm-leverage-q05", topicId: "cfa3-fixed-income-pm-leverage", text: "Rolldown return arises on a stable upward-sloping curve as a bond's yield:", optionA: "Rises with age", optionB: "Falls as it ages toward shorter maturities", optionC: "Stays constant", optionD: "Becomes negative", correctOption: "B", explanation: "Aging moves the bond down a positively sloped curve, lowering its yield and raising its price.", orderIndex: 4 },
  { id: "cfa3-fixed-income-pm-leverage-q06", topicId: "cfa3-fixed-income-pm-leverage", text: "A danger of leverage during market stress is:", optionA: "Lower volatility", optionB: "Margin calls forcing sales at the worst time", optionC: "Higher liquidity", optionD: "No effect", correctOption: "B", explanation: "Falling prices and rising haircuts can trigger margin calls, forcing distressed selling.", orderIndex: 5 },
  { id: "cfa3-fixed-income-pm-leverage-q07", topicId: "cfa3-fixed-income-pm-leverage", text: "Leveraged return approximately equals the asset return plus leverage times the:", optionA: "Coupon", optionB: "(asset return − borrowing cost) spread", optionC: "Dividend", optionD: "Tax shield", correctOption: "B", explanation: "Leveraged return ≈ r_assets + (borrowed/equity)(r_assets − r_borrow).", orderIndex: 6 },
  { id: "cfa3-fixed-income-pm-leverage-q08", topicId: "cfa3-fixed-income-pm-leverage", text: "Futures and swaps provide leverage because they:", optionA: "Require full cash outlay", optionB: "Have embedded leverage (small margin controls a large notional)", optionC: "Pay dividends", optionD: "Eliminate risk", correctOption: "B", explanation: "Derivatives control large notional exposure with little capital, providing implicit leverage.", orderIndex: 7 },
  { id: "cfa3-fixed-income-pm-leverage-q09", topicId: "cfa3-fixed-income-pm-leverage", text: "A carry trade in fixed income loses money if:", optionA: "The curve is unchanged", optionB: "Rates rise sharply (prices fall)", optionC: "Carry is positive", optionD: "Rolldown is positive", correctOption: "B", explanation: "A sharp rate rise produces capital losses that can exceed the positive carry.", orderIndex: 8 },
  { id: "cfa3-fixed-income-pm-leverage-q10", topicId: "cfa3-fixed-income-pm-leverage", text: "The cost of repo financing depends on the repo rate and the:", optionA: "Dividend yield", optionB: "Haircut and collateral quality", optionC: "Equity beta", optionD: "Coupon only", correctOption: "B", explanation: "Funding cost reflects the repo rate plus the capital tied up by the haircut on the posted collateral.", orderIndex: 9 },
  { id: "cfa3-fixed-income-pm-leverage-q11", topicId: "cfa3-fixed-income-pm-leverage", text: "Leverage applied to a duration position primarily amplifies:", optionA: "Currency risk", optionB: "Interest-rate (and spread) risk", optionC: "Dividend risk", optionD: "Nothing", correctOption: "B", explanation: "Leverage scales up the portfolio's duration/spread exposures, magnifying rate and spread risk.", orderIndex: 10 },
  { id: "cfa3-fixed-income-pm-leverage-q12", topicId: "cfa3-fixed-income-pm-leverage", text: "Carry and rolldown strategies perform best when the yield curve is:", optionA: "Rising sharply", optionB: "Upward-sloping and stable", optionC: "Inverting rapidly", optionD: "Highly volatile", correctOption: "B", explanation: "A stable, positively sloped curve lets carry and rolldown accrue without adverse rate moves.", orderIndex: 11 },

  // Managing multiple liabilities
  { id: "cfa3-fixed-income-pm-multiple-liabilities-q01", topicId: "cfa3-fixed-income-pm-multiple-liabilities", text: "Cash-flow matching (dedication) is characterized as:", optionA: "Highest risk, most flexible", optionB: "Lowest risk, least flexible", optionC: "Identical to duration matching", optionD: "Requiring no bonds", correctOption: "B", explanation: "Dedication directly funds each liability with matching cash flows — minimal risk, least flexibility.", orderIndex: 0 },
  { id: "cfa3-fixed-income-pm-multiple-liabilities-q02", topicId: "cfa3-fixed-income-pm-multiple-liabilities", text: "Duration matching of multiple liabilities sets the portfolio's BPV equal to the:", optionA: "Coupon", optionB: "Liabilities' BPV", optionC: "Risk-free rate", optionD: "Equity beta", correctOption: "B", explanation: "Matching basis-point values neutralizes net interest-rate sensitivity to small parallel moves.", orderIndex: 1 },
  { id: "cfa3-fixed-income-pm-multiple-liabilities-q03", topicId: "cfa3-fixed-income-pm-multiple-liabilities", text: "To reduce structural risk when immunizing multiple liabilities, minimize the portfolio's:", optionA: "Duration", optionB: "Dispersion/convexity difference vs the liabilities", optionC: "Present value", optionD: "Coupon", correctOption: "B", explanation: "Minimizing dispersion makes the assets track the liabilities under non-parallel shifts.", orderIndex: 2 },
  { id: "cfa3-fixed-income-pm-multiple-liabilities-q04", topicId: "cfa3-fixed-income-pm-multiple-liabilities", text: "Immunization protects most reliably against ____ rate changes.", optionA: "Large non-parallel", optionB: "Small parallel", optionC: "Only rising", optionD: "Only falling", correctOption: "B", explanation: "Classical immunization locks in a return against small parallel shifts; twists leave structural risk.", orderIndex: 3 },
  { id: "cfa3-fixed-income-pm-multiple-liabilities-q05", topicId: "cfa3-fixed-income-pm-multiple-liabilities", text: "Contingent immunization allows active management while:", optionA: "There is no surplus", optionB: "A surplus cushion above the required terminal value exists", optionC: "Rates are zero", optionD: "The portfolio is all cash", correctOption: "B", explanation: "Active management continues until the safety cushion is exhausted, then the manager immunizes.", orderIndex: 4 },
  { id: "cfa3-fixed-income-pm-multiple-liabilities-q06", topicId: "cfa3-fixed-income-pm-multiple-liabilities", text: "Duration matching versus cash-flow matching is generally:", optionA: "Less flexible", optionB: "More flexible but exposed to some curve risk", optionC: "Risk-free", optionD: "Impossible", correctOption: "B", explanation: "BPV matching offers more flexibility than dedication but leaves residual non-parallel curve risk.", orderIndex: 5 },
  { id: "cfa3-fixed-income-pm-multiple-liabilities-q07", topicId: "cfa3-fixed-income-pm-multiple-liabilities", text: "An immunized portfolio requires rebalancing because, over time, its duration:", optionA: "Stays matched forever", optionB: "Drifts away from the liabilities' duration", optionC: "Becomes negative", optionD: "Equals its convexity", correctOption: "B", explanation: "Durations change with time and yields, so periodic rebalancing maintains the match.", orderIndex: 6 },
  { id: "cfa3-fixed-income-pm-multiple-liabilities-q08", topicId: "cfa3-fixed-income-pm-multiple-liabilities", text: "Horizon matching combines:", optionA: "Equities and cash", optionB: "Cash-flow matching of near-term and duration matching of longer liabilities", optionC: "Two equity sleeves", optionD: "Only futures", correctOption: "B", explanation: "Horizon matching dedicates near-term liabilities and duration-matches the longer ones.", orderIndex: 7 },
  { id: "cfa3-fixed-income-pm-multiple-liabilities-q09", topicId: "cfa3-fixed-income-pm-multiple-liabilities", text: "Structural risk in immunization arises primarily from:", optionA: "Parallel shifts", optionB: "Non-parallel (twist) curve movements", optionC: "Reinvestment at the YTM", optionD: "Holding to maturity", correctOption: "B", explanation: "Twists cause the portfolio to diverge from the liabilities — the residual structural risk.", orderIndex: 8 },
  { id: "cfa3-fixed-income-pm-multiple-liabilities-q10", topicId: "cfa3-fixed-income-pm-multiple-liabilities", text: "For immunization, the present value of assets should be:", optionA: "Less than PV of liabilities", optionB: "At least equal to PV of liabilities", optionC: "Exactly zero", optionD: "Equal to the coupon", correctOption: "B", explanation: "PV(assets) ≥ PV(liabilities) ensures the obligations can be funded.", orderIndex: 9 },
  { id: "cfa3-fixed-income-pm-multiple-liabilities-q11", topicId: "cfa3-fixed-income-pm-multiple-liabilities", text: "Cash-flow matching's main drawback is:", optionA: "High structural risk", optionB: "Less flexibility and often higher cost", optionC: "Daily rebalancing needs", optionD: "Currency exposure", correctOption: "B", explanation: "Dedication constrains bond selection and can cost more than duration matching, though it minimizes risk.", orderIndex: 10 },
  { id: "cfa3-fixed-income-pm-multiple-liabilities-q12", topicId: "cfa3-fixed-income-pm-multiple-liabilities", text: "A pension hedging the interest-rate sensitivity of its liabilities is practicing:", optionA: "Momentum investing", optionB: "Liability-driven investing", optionC: "Pure equity indexing", optionD: "Currency overlay", correctOption: "B", explanation: "Managing assets to hedge/fund the liabilities' rate exposure is liability-driven investing.", orderIndex: 11 },

  // Passive equity investing
  { id: "cfa3-equity-pm-passive-q01", topicId: "cfa3-equity-pm-passive", text: "The most common index weighting scheme is:", optionA: "Equal-weighted", optionB: "Market-cap weighted", optionC: "Price-weighted", optionD: "Fundamental-weighted", correctOption: "B", explanation: "Market-cap weighting dominates; it is self-rebalancing but concentrates in large (possibly overvalued) names.", orderIndex: 0 },
  { id: "cfa3-equity-pm-passive-q02", topicId: "cfa3-equity-pm-passive", text: "An equal-weighted index, versus cap-weighted, has:", optionA: "A large-cap tilt", optionB: "A small-cap tilt and higher rebalancing needs", optionC: "No rebalancing", optionD: "Zero turnover", correctOption: "B", explanation: "Equal weighting tilts toward smaller names and must be periodically rebalanced back to equal weights.", orderIndex: 1 },
  { id: "cfa3-equity-pm-passive-q03", topicId: "cfa3-equity-pm-passive", text: "Full replication is most practical for an index that is:", optionA: "Broad and illiquid", optionB: "Narrow and liquid", optionC: "Composed of private firms", optionD: "Bond-only", correctOption: "B", explanation: "Full replication works well when the index has relatively few, liquid constituents.", orderIndex: 2 },
  { id: "cfa3-equity-pm-passive-q04", topicId: "cfa3-equity-pm-passive", text: "Optimization-based replication for large indices aims to:", optionA: "Maximize tracking error", optionB: "Minimize tracking error subject to constraints", optionC: "Hold one stock", optionD: "Ignore the benchmark", correctOption: "B", explanation: "Optimization selects a subset minimizing tracking error within risk/turnover limits.", orderIndex: 3 },
  { id: "cfa3-equity-pm-passive-q05", topicId: "cfa3-equity-pm-passive", text: "Equity index futures and total-return swaps provide:", optionA: "Illiquid exposure", optionB: "Cheap, liquid beta and completion-overlay capability", optionC: "Guaranteed alpha", optionD: "No market exposure", correctOption: "B", explanation: "Derivatives offer efficient index exposure and let managers complete/adjust exposures cheaply.", orderIndex: 4 },
  { id: "cfa3-equity-pm-passive-q06", topicId: "cfa3-equity-pm-passive", text: "A cost specific to passive funds around index changes is:", optionA: "Reconstitution / rebalancing turnover", optionB: "Performance fees", optionC: "Carried interest", optionD: "Currency hedging", correctOption: "A", explanation: "Index additions/deletions force trades (and front-running risk) at reconstitution dates.", orderIndex: 5 },
  { id: "cfa3-equity-pm-passive-q07", topicId: "cfa3-equity-pm-passive", text: "Fundamental (smart-beta) weighting selects weights based on:", optionA: "Market cap", optionB: "Accounting measures like sales, book value, or dividends", optionC: "Price only", optionD: "Random selection", correctOption: "B", explanation: "Fundamental indices weight by economic size measures, creating a value tilt versus cap weighting.", orderIndex: 6 },
  { id: "cfa3-equity-pm-passive-q08", topicId: "cfa3-equity-pm-passive", text: "A drawback of market-cap weighting is that it:", optionA: "Requires frequent rebalancing", optionB: "Overweights large, potentially overvalued stocks", optionC: "Has a small-cap tilt", optionD: "Ignores liquidity", correctOption: "B", explanation: "Cap weighting allocates more to the largest stocks, which may be overvalued (a 'return drag' critique).", orderIndex: 7 },
  { id: "cfa3-equity-pm-passive-q09", topicId: "cfa3-equity-pm-passive", text: "Securities lending in an index fund can:", optionA: "Increase tracking error", optionB: "Generate income that offsets costs", optionC: "Eliminate beta", optionD: "Remove dividends", correctOption: "B", explanation: "Lending portfolio holdings earns fees that reduce the fund's net costs.", orderIndex: 8 },
  { id: "cfa3-equity-pm-passive-q10", topicId: "cfa3-equity-pm-passive", text: "The primary success metric for a passive equity manager is:", optionA: "Alpha", optionB: "Low tracking error", optionC: "High turnover", optionD: "Beating peers widely", correctOption: "B", explanation: "Passive mandates are judged by how tightly they track the index at low cost.", orderIndex: 9 },
  { id: "cfa3-equity-pm-passive-q11", topicId: "cfa3-equity-pm-passive", text: "Stratified sampling replicates an index by:", optionA: "Holding every stock", optionB: "Matching key characteristics (sector, size) with a subset", optionC: "Buying one stock", optionD: "Using only derivatives", correctOption: "B", explanation: "Sampling matches the index's characteristics with a representative subset, lowering cost.", orderIndex: 10 },
  { id: "cfa3-equity-pm-passive-q12", topicId: "cfa3-equity-pm-passive", text: "A price-weighted index (e.g., the DJIA) is most influenced by:", optionA: "The largest-cap stock", optionB: "The highest-priced stock", optionC: "The smallest stock", optionD: "Equal contributions", correctOption: "B", explanation: "Price weighting gives higher-priced shares more influence regardless of company size.", orderIndex: 11 },

  // Active equity: fundamental strategies
  { id: "cfa3-equity-pm-active-fundamental-q01", topicId: "cfa3-equity-pm-active-fundamental", text: "Value investing typically seeks stocks with:", optionA: "High multiples and momentum", optionB: "Low valuation multiples (a margin of safety)", optionC: "No earnings", optionD: "The largest market cap", correctOption: "B", explanation: "Value managers buy stocks trading cheaply relative to fundamentals, seeking a margin of safety.", orderIndex: 0 },
  { id: "cfa3-equity-pm-active-fundamental-q02", topicId: "cfa3-equity-pm-active-fundamental", text: "GARP (growth at a reasonable price) blends:", optionA: "Value discipline with growth characteristics", optionB: "Indexing and cash", optionC: "Only deep value", optionD: "Only momentum", correctOption: "A", explanation: "GARP seeks growing companies whose valuations remain reasonable.", orderIndex: 1 },
  { id: "cfa3-equity-pm-active-fundamental-q03", topicId: "cfa3-equity-pm-active-fundamental", text: "Active share measures:", optionA: "Total volatility", optionB: "How much a portfolio's holdings differ from the benchmark", optionC: "Beta", optionD: "Duration", correctOption: "B", explanation: "Active share is the percentage of holdings that differ from the benchmark — a measure of active 'differentness'.", orderIndex: 2 },
  { id: "cfa3-equity-pm-active-fundamental-q04", topicId: "cfa3-equity-pm-active-fundamental", text: "A high-conviction concentrated portfolio tends to have:", optionA: "Low active share", optionB: "High active share and higher active risk", optionC: "Zero tracking error", optionD: "Index-like returns", correctOption: "B", explanation: "Concentration in differentiated bets raises active share and tracking error.", orderIndex: 3 },
  { id: "cfa3-equity-pm-active-fundamental-q05", topicId: "cfa3-equity-pm-active-fundamental", text: "A behavioral risk for fundamental managers is:", optionA: "Confirmation bias and overconfidence", optionB: "Index reconstitution", optionC: "Currency translation", optionD: "Repo haircuts", correctOption: "A", explanation: "Discretionary stock-pickers are prone to cognitive biases like confirmation and overconfidence.", orderIndex: 4 },
  { id: "cfa3-equity-pm-active-fundamental-q06", topicId: "cfa3-equity-pm-active-fundamental", text: "Top-down fundamental investing starts from:", optionA: "Individual company analysis", optionB: "Macro/sector themes that drive stock selection", optionC: "Index weights", optionD: "Random screens", correctOption: "B", explanation: "Top-down derives sector/theme views first, then selects stocks; bottom-up works company-by-company.", orderIndex: 5 },
  { id: "cfa3-equity-pm-active-fundamental-q07", topicId: "cfa3-equity-pm-active-fundamental", text: "Style drift occurs when a manager:", optionA: "Stays true to the stated strategy", optionB: "Deviates from the stated investment style", optionC: "Indexes the benchmark", optionD: "Hedges currency", correctOption: "B", explanation: "Style drift is unintended departure from the declared style, complicating attribution and suitability.", orderIndex: 6 },
  { id: "cfa3-equity-pm-active-fundamental-q08", topicId: "cfa3-equity-pm-active-fundamental", text: "Manager skill is best gauged by the:", optionA: "Information ratio", optionB: "Coupon", optionC: "Cap rate", optionD: "Dividend yield", correctOption: "A", explanation: "The information ratio (active return / active risk) measures active management efficiency.", orderIndex: 7 },
  { id: "cfa3-equity-pm-active-fundamental-q09", topicId: "cfa3-equity-pm-active-fundamental", text: "A 'margin of safety' refers to:", optionA: "Buying below estimated intrinsic value", optionB: "Using leverage", optionC: "Hedging all risk", optionD: "Maximizing turnover", correctOption: "A", explanation: "Buying at a discount to intrinsic value cushions against estimation error and adverse outcomes.", orderIndex: 8 },
  { id: "cfa3-equity-pm-active-fundamental-q10", topicId: "cfa3-equity-pm-active-fundamental", text: "Growth investing typically emphasizes:", optionA: "Low multiples", optionB: "Strong earnings/revenue growth (often higher multiples)", optionC: "No earnings growth", optionD: "Distressed firms", correctOption: "B", explanation: "Growth managers pay up for companies with superior expected growth.", orderIndex: 9 },
  { id: "cfa3-equity-pm-active-fundamental-q11", topicId: "cfa3-equity-pm-active-fundamental", text: "High active share combined with a high information ratio suggests:", optionA: "Closet indexing", optionB: "Genuine, well-rewarded conviction", optionC: "No skill", optionD: "Pure luck", correctOption: "B", explanation: "Differentiated holdings (active share) that deliver active return per unit of risk indicate real skill.", orderIndex: 10 },
  { id: "cfa3-equity-pm-active-fundamental-q12", topicId: "cfa3-equity-pm-active-fundamental", text: "A constraint on how much alpha a fundamental strategy can deliver is:", optionA: "Capacity and turnover/costs", optionB: "The risk-free rate", optionC: "The auditor", optionD: "The dividend date", correctOption: "A", explanation: "Capacity limits and trading costs erode the alpha a strategy can realize at scale.", orderIndex: 11 },

  // Active equity: quantitative strategies
  { id: "cfa3-equity-pm-active-quant-q01", topicId: "cfa3-equity-pm-active-quant", text: "Quantitative equity strategies are best described as:", optionA: "Discretionary stock picking", optionB: "Systematic, rules-based selection using factors/models", optionC: "Pure indexing", optionD: "Currency trading", correctOption: "B", explanation: "Quant strategies use disciplined, rules-based models and factors to select securities.", orderIndex: 0 },
  { id: "cfa3-equity-pm-active-quant-q02", topicId: "cfa3-equity-pm-active-quant", text: "Overfitting in a backtest means the model:", optionA: "Generalizes well", optionB: "Fits historical noise and fails out of sample", optionC: "Uses base rates", optionD: "Has no parameters", correctOption: "B", explanation: "Overfit models capture noise, performing well in-sample but poorly on new data.", orderIndex: 1 },
  { id: "cfa3-equity-pm-active-quant-q03", topicId: "cfa3-equity-pm-active-quant", text: "Look-ahead bias occurs when a backtest uses:", optionA: "Only past data", optionB: "Information not available at the decision time", optionC: "Random data", optionD: "Out-of-sample data", correctOption: "B", explanation: "Look-ahead bias uses data (e.g., restated financials) not knowable at the historical decision point.", orderIndex: 2 },
  { id: "cfa3-equity-pm-active-quant-q04", topicId: "cfa3-equity-pm-active-quant", text: "A common rewarded factor in quant models is:", optionA: "Ticker length", optionB: "Momentum", optionC: "Share price level", optionD: "Trading hours", correctOption: "B", explanation: "Momentum (along with value, quality, size, low-vol) is a widely used rewarded factor.", orderIndex: 3 },
  { id: "cfa3-equity-pm-active-quant-q05", topicId: "cfa3-equity-pm-active-quant", text: "A 'quant meltdown' typically occurs when:", optionA: "Markets are calm", optionB: "Crowded factor trades unwind simultaneously", optionC: "Factors never change", optionD: "There is no leverage", correctOption: "B", explanation: "When many quants hold the same crowded factor bets, a simultaneous unwind causes sharp losses.", orderIndex: 4 },
  { id: "cfa3-equity-pm-active-quant-q06", topicId: "cfa3-equity-pm-active-quant", text: "Relative to fundamental managers, quant strategies rely on:", optionA: "Deep, concentrated bets", optionB: "Breadth — many small, independent bets", optionC: "No diversification", optionD: "A single stock", correctOption: "B", explanation: "Quant exploits modest skill across many positions; IR ≈ IC × √breadth.", orderIndex: 5 },
  { id: "cfa3-equity-pm-active-quant-q07", topicId: "cfa3-equity-pm-active-quant", text: "Survivorship bias inflates backtest results by:", optionA: "Including failed firms", optionB: "Excluding firms that delisted/failed", optionC: "Using out-of-sample data", optionD: "Lowering returns", correctOption: "B", explanation: "Dropping failed firms leaves only survivors, overstating historical performance.", orderIndex: 6 },
  { id: "cfa3-equity-pm-active-quant-q08", topicId: "cfa3-equity-pm-active-quant", text: "Factor crowding/decay refers to a factor's premium:", optionA: "Growing forever", optionB: "Shrinking as more investors exploit it", optionC: "Being risk-free", optionD: "Never changing", correctOption: "B", explanation: "As a factor becomes popular, its excess return tends to erode (crowding/decay).", orderIndex: 7 },
  { id: "cfa3-equity-pm-active-quant-q09", topicId: "cfa3-equity-pm-active-quant", text: "Out-of-sample (walk-forward) testing helps guard against:", optionA: "Overfitting", optionB: "Lower returns", optionC: "Currency risk", optionD: "Liquidity risk", correctOption: "A", explanation: "Testing on data not used to build the model checks whether it generalizes, mitigating overfitting.", orderIndex: 8 },
  { id: "cfa3-equity-pm-active-quant-q10", topicId: "cfa3-equity-pm-active-quant", text: "Quant portfolio construction usually uses:", optionA: "Gut feel", optionB: "Optimization with risk and turnover constraints", optionC: "A single discretionary bet", optionD: "No model", correctOption: "B", explanation: "Quant builds portfolios via optimization, balancing expected return against risk and trading costs.", orderIndex: 9 },
  { id: "cfa3-equity-pm-active-quant-q11", topicId: "cfa3-equity-pm-active-quant", text: "A key risk for quant strategies is:", optionA: "Regime change breaking a previously working model", optionB: "Too much diversification", optionC: "No data", optionD: "Zero turnover", correctOption: "A", explanation: "Structural/regime shifts can invalidate relationships a model relied upon.", orderIndex: 10 },
  { id: "cfa3-equity-pm-active-quant-q12", topicId: "cfa3-equity-pm-active-quant", text: "The fundamental law of active management is IR ≈ IC ×:", optionA: "√breadth", optionB: "beta", optionC: "the risk-free rate", optionD: "tracking error²", correctOption: "A", explanation: "IR ≈ information coefficient × square root of breadth — central to quant's many-small-bets approach.", orderIndex: 11 },

  // Equity portfolio construction & risk
  { id: "cfa3-equity-pm-construction-q01", topicId: "cfa3-equity-pm-construction", text: "Active return can be decomposed into factor exposures, security selection and:", optionA: "Costs (subtracted)", optionB: "The risk-free rate", optionC: "Dividends", optionD: "The coupon", correctOption: "A", explanation: "Active return = rewarded-factor returns + idiosyncratic selection − implementation costs.", orderIndex: 0 },
  { id: "cfa3-equity-pm-construction-q02", topicId: "cfa3-equity-pm-construction", text: "Active risk (tracking error) measures the:", optionA: "Total volatility", optionB: "Volatility of active (vs benchmark) returns", optionC: "Beta", optionD: "Duration", correctOption: "B", explanation: "Tracking error is the standard deviation of the portfolio's return minus the benchmark's.", orderIndex: 1 },
  { id: "cfa3-equity-pm-construction-q03", topicId: "cfa3-equity-pm-construction", text: "A pure stock-picker typically exhibits:", optionA: "High active share, mostly idiosyncratic risk", optionB: "Low active share", optionC: "Only factor risk", optionD: "Zero tracking error", correctOption: "A", explanation: "Stock selection produces high active share with risk dominated by security-specific (idiosyncratic) bets.", orderIndex: 2 },
  { id: "cfa3-equity-pm-construction-q04", topicId: "cfa3-equity-pm-construction", text: "A factor-bet manager's active risk is dominated by:", optionA: "Idiosyncratic risk", optionB: "Factor (systematic) exposures", optionC: "The risk-free rate", optionD: "Currency", correctOption: "B", explanation: "Tilting toward factors makes systematic factor exposure the main source of active risk.", orderIndex: 3 },
  { id: "cfa3-equity-pm-construction-q05", topicId: "cfa3-equity-pm-construction", text: "A market-neutral long/short portfolio aims to:", optionA: "Maximize beta", optionB: "Isolate alpha by removing net market exposure", optionC: "Track the index", optionD: "Eliminate all risk", correctOption: "B", explanation: "Balancing longs and shorts removes net beta, isolating security-selection alpha.", orderIndex: 4 },
  { id: "cfa3-equity-pm-construction-q06", topicId: "cfa3-equity-pm-construction", text: "Implementation costs (impact, spread) primarily:", optionA: "Increase paper alpha", optionB: "Erode realized alpha", optionC: "Have no effect", optionD: "Lower risk", correctOption: "B", explanation: "Trading costs reduce the alpha actually captured relative to a paper portfolio.", orderIndex: 5 },
  { id: "cfa3-equity-pm-construction-q07", topicId: "cfa3-equity-pm-construction", text: "A closet indexer is characterized by:", optionA: "High active share", optionB: "Low active share with active fees", optionC: "Market-neutral positioning", optionD: "High tracking error", correctOption: "B", explanation: "Closet indexers hug the benchmark (low active share) while charging active fees — poor value.", orderIndex: 6 },
  { id: "cfa3-equity-pm-construction-q08", topicId: "cfa3-equity-pm-construction", text: "A risk budget for an active equity portfolio sets limits on:", optionA: "Dividend dates", optionB: "Position sizes, sector/factor exposures and tracking error", optionC: "The auditor", optionD: "Coupon", correctOption: "B", explanation: "Risk budgeting constrains exposures and active risk consistent with the mandate.", orderIndex: 7 },
  { id: "cfa3-equity-pm-construction-q09", topicId: "cfa3-equity-pm-construction", text: "Higher portfolio concentration generally:", optionA: "Lowers active share and risk", optionB: "Raises active share and active risk", optionC: "Eliminates risk", optionD: "Tracks the index", correctOption: "B", explanation: "Fewer, larger positions increase both how different the portfolio is and its active risk.", orderIndex: 8 },
  { id: "cfa3-equity-pm-construction-q10", topicId: "cfa3-equity-pm-construction", text: "Liquidity management in construction matters because:", optionA: "It has no cost", optionB: "Illiquid positions raise trading costs and exit risk", optionC: "All stocks are liquid", optionD: "It eliminates beta", correctOption: "B", explanation: "Position sizing must consider liquidity to avoid high impact costs and difficulty exiting.", orderIndex: 9 },
  { id: "cfa3-equity-pm-construction-q11", topicId: "cfa3-equity-pm-construction", text: "Active share alone is insufficient to judge skill because it:", optionA: "Measures volatility", optionB: "Shows differentness, not whether bets are rewarded", optionC: "Equals the information ratio", optionD: "Measures beta", correctOption: "B", explanation: "High active share can still underperform; pair it with the information ratio to assess rewarded skill.", orderIndex: 10 },
  { id: "cfa3-equity-pm-construction-q12", topicId: "cfa3-equity-pm-construction", text: "A long-only manager's ability to underweight is limited by:", optionA: "Unlimited shorting", optionB: "The benchmark weight (cannot go below zero holding)", optionC: "The risk-free rate", optionD: "Currency", correctOption: "B", explanation: "Without shorting, the maximum underweight of a stock is its benchmark weight, constraining negative views.", orderIndex: 11 },

  // Corporate governance & ESG integration
  { id: "cfa3-equity-pm-corporate-governance-q01", topicId: "cfa3-equity-pm-corporate-governance", text: "Strong corporate governance tends to:", optionA: "Raise the cost of capital", optionB: "Lower risk and the cost of capital", optionC: "Have no effect", optionD: "Guarantee higher earnings", correctOption: "B", explanation: "Good governance reduces agency/operational risk, which can lower the firm's cost of capital.", orderIndex: 0 },
  { id: "cfa3-equity-pm-corporate-governance-q02", topicId: "cfa3-equity-pm-corporate-governance", text: "Shareholder engagement (stewardship) includes:", optionA: "Proxy voting and dialogue with management", optionB: "Ignoring the company", optionC: "Insider trading", optionD: "Front-running", correctOption: "A", explanation: "Engagement uses voting and direct dialogue to influence governance and protect value.", orderIndex: 1 },
  { id: "cfa3-equity-pm-corporate-governance-q03", topicId: "cfa3-equity-pm-corporate-governance", text: "ESG integration adjusts valuation by incorporating material factors into:", optionA: "Cash-flow forecasts and/or the discount rate", optionB: "Only marketing", optionC: "Share count", optionD: "The dividend date", correctOption: "A", explanation: "Material ESG factors affect projected cash flows and required returns.", orderIndex: 2 },
  { id: "cfa3-equity-pm-corporate-governance-q04", topicId: "cfa3-equity-pm-corporate-governance", text: "Negative (exclusionary) screening means:", optionA: "Picking best-in-class ESG firms", optionB: "Excluding certain sectors/companies on ESG grounds", optionC: "Ignoring ESG", optionD: "Buying only bonds", correctOption: "B", explanation: "Negative screening removes objectionable industries/firms from the universe.", orderIndex: 3 },
  { id: "cfa3-equity-pm-corporate-governance-q05", topicId: "cfa3-equity-pm-corporate-governance", text: "Greenwashing refers to:", optionA: "Genuine emission cuts", optionB: "Overstating or misrepresenting ESG credentials", optionC: "A bond type", optionD: "An accounting method", correctOption: "B", explanation: "Greenwashing is misleading promotion of sustainability that overstates reality.", orderIndex: 4 },
  { id: "cfa3-equity-pm-corporate-governance-q06", topicId: "cfa3-equity-pm-corporate-governance", text: "ESG 'materiality' means focusing on factors that:", optionA: "Are always environmental", optionB: "Affect cash flows or risk", optionC: "Are immaterial to value", optionD: "Only matter to regulators", correctOption: "B", explanation: "Material ESG issues are those with a plausible financial impact.", orderIndex: 5 },
  { id: "cfa3-equity-pm-corporate-governance-q07", topicId: "cfa3-equity-pm-corporate-governance", text: "A governance red flag is:", optionA: "An independent, diverse board", optionB: "A staggered board and dual-class shares", optionC: "One-share-one-vote", optionD: "A strong audit committee", correctOption: "B", explanation: "Entrenchment devices (staggered boards, dual-class shares) weaken accountability.", orderIndex: 6 },
  { id: "cfa3-equity-pm-corporate-governance-q08", topicId: "cfa3-equity-pm-corporate-governance", text: "Activist investors typically seek to:", optionA: "Hold passively forever", optionB: "Drive board/strategic changes to unlock value", optionC: "Avoid voting", optionD: "Index the market", correctOption: "B", explanation: "Activists push for changes (board seats, capital returns, strategy) to increase shareholder value.", orderIndex: 7 },
  { id: "cfa3-equity-pm-corporate-governance-q09", topicId: "cfa3-equity-pm-corporate-governance", text: "Positive (best-in-class) screening:", optionA: "Excludes whole sectors", optionB: "Selects ESG leaders within sectors", optionC: "Ignores ESG", optionD: "Buys only fossil fuels", correctOption: "B", explanation: "Best-in-class screening favors the strongest ESG performers within each sector.", orderIndex: 8 },
  { id: "cfa3-equity-pm-corporate-governance-q10", topicId: "cfa3-equity-pm-corporate-governance", text: "A frameworks like SASB helps investors identify:", optionA: "Industry-specific material ESG issues", optionB: "Coupon rates", optionC: "Currency forwards", optionD: "Duration", correctOption: "A", explanation: "SASB maps financially material ESG topics by industry, aiding integration.", orderIndex: 9 },
  { id: "cfa3-equity-pm-corporate-governance-q11", topicId: "cfa3-equity-pm-corporate-governance", text: "Dual-class share structures concern investors because they:", optionA: "Give all holders equal votes", optionB: "Concentrate voting control disproportionate to economic ownership", optionC: "Eliminate voting", optionD: "Are legally required", correctOption: "B", explanation: "Dual-class shares give insiders outsized control relative to their cash-flow stake.", orderIndex: 10 },
  { id: "cfa3-equity-pm-corporate-governance-q12", topicId: "cfa3-equity-pm-corporate-governance", text: "Stewardship through proxy voting is considered part of a manager's:", optionA: "Marketing", optionB: "Fiduciary duty to protect/enhance long-term value", optionC: "Tax planning", optionD: "Trading desk", correctOption: "B", explanation: "Voting and engagement are tools to fulfill the fiduciary duty to clients' long-term interests.", orderIndex: 11 },

  // Return measurement: TWR & MWR
  { id: "cfa3-performance-return-measurement-q01", topicId: "cfa3-performance-return-measurement", text: "Time-weighted return is preferred for judging a manager because it:", optionA: "Reflects client cash-flow timing", optionB: "Removes the effect of external cash flows", optionC: "Equals the IRR", optionD: "Ignores returns", correctOption: "B", explanation: "TWR strips out client-driven flows the manager doesn't control, isolating investment skill.", orderIndex: 0 },
  { id: "cfa3-performance-return-measurement-q02", topicId: "cfa3-performance-return-measurement", text: "Money-weighted return (IRR) reflects the:", optionA: "Manager's skill only", optionB: "Timing and size of cash flows (the investor's experience)", optionC: "Benchmark return", optionD: "Risk-free rate", correctOption: "B", explanation: "MWR depends on when and how much cash was invested, capturing the investor's actual outcome.", orderIndex: 1 },
  { id: "cfa3-performance-return-measurement-q03", topicId: "cfa3-performance-return-measurement", text: "TWR and MWR diverge most when there are:", optionA: "No cash flows", optionB: "Large external cash flows and volatile sub-period returns", optionC: "Constant returns", optionD: "Only one period", correctOption: "B", explanation: "Big flows combined with variable returns drive a wedge between the two measures.", orderIndex: 2 },
  { id: "cfa3-performance-return-measurement-q04", topicId: "cfa3-performance-return-measurement", text: "GIPS requires composite returns to be calculated as:", optionA: "Money-weighted", optionB: "Time-weighted", optionC: "Simple average", optionD: "Nominal coupon", correctOption: "B", explanation: "Time-weighted returns are the GIPS default, removing client cash-flow effects.", orderIndex: 3 },
  { id: "cfa3-performance-return-measurement-q05", topicId: "cfa3-performance-return-measurement", text: "If a large deposit is made just before a strong period, MWR will be:", optionA: "Lower than TWR", optionB: "Higher than TWR", optionC: "Equal to TWR", optionD: "Zero", correctOption: "B", explanation: "More capital invested before strong performance lifts the money-weighted return above TWR.", orderIndex: 4 },
  { id: "cfa3-performance-return-measurement-q06", topicId: "cfa3-performance-return-measurement", text: "MWR is most appropriate when the manager:", optionA: "Does not control cash-flow timing", optionB: "Controls the timing of cash flows (e.g., private equity)", optionC: "Indexes the benchmark", optionD: "Has no clients", correctOption: "B", explanation: "When the manager dictates when capital is called/returned (PE), IRR/MWR fairly measures performance.", orderIndex: 5 },
  { id: "cfa3-performance-return-measurement-q07", topicId: "cfa3-performance-return-measurement", text: "More frequent portfolio valuation improves the accuracy of:", optionA: "The benchmark", optionB: "Time-weighted return", optionC: "The coupon", optionD: "Beta", correctOption: "B", explanation: "Valuing at each cash flow makes TWR more precise; the linked IRR approximates it when valuations are infrequent.", orderIndex: 6 },
  { id: "cfa3-performance-return-measurement-q08", topicId: "cfa3-performance-return-measurement", text: "TWR compounds the returns of:", optionA: "Each sub-period between cash flows", optionB: "Only the first period", optionC: "The benchmark", optionD: "The risk-free asset", correctOption: "A", explanation: "TWR geometrically links the returns of sub-periods defined by external cash flows.", orderIndex: 7 },
  { id: "cfa3-performance-return-measurement-q09", topicId: "cfa3-performance-return-measurement", text: "A deposit just before a weak period makes MWR:", optionA: "Higher than TWR", optionB: "Lower than TWR", optionC: "Equal to TWR", optionD: "Undefined", correctOption: "B", explanation: "Investing more capital before poor performance drags the money-weighted return below TWR.", orderIndex: 8 },
  { id: "cfa3-performance-return-measurement-q10", topicId: "cfa3-performance-return-measurement", text: "For comparing two managers fairly, use:", optionA: "Money-weighted return", optionB: "Time-weighted return", optionC: "Their cash balances", optionD: "Dividend yield", correctOption: "B", explanation: "TWR is comparable across managers because it ignores client-driven flows.", orderIndex: 9 },
  { id: "cfa3-performance-return-measurement-q11", topicId: "cfa3-performance-return-measurement", text: "The money-weighted return is mathematically the:", optionA: "Arithmetic mean", optionB: "Internal rate of return of the cash flows", optionC: "Geometric mean of sub-periods", optionD: "Risk-free rate", correctOption: "B", explanation: "MWR is the IRR that sets the present value of all cash flows (including ending value) to zero.", orderIndex: 10 },
  { id: "cfa3-performance-return-measurement-q12", topicId: "cfa3-performance-return-measurement", text: "When there are no external cash flows during a period, TWR and MWR are:", optionA: "Very different", optionB: "Equal", optionC: "Both zero", optionD: "Undefined", correctOption: "B", explanation: "Without external flows, the two measures coincide.", orderIndex: 11 },

  // Return attribution approaches
  { id: "cfa3-performance-attribution-approaches-q01", topicId: "cfa3-performance-attribution-approaches", text: "Brinson attribution decomposes active return into allocation, selection and:", optionA: "Interaction", optionB: "Inflation", optionC: "Duration", optionD: "Tracking error", correctOption: "A", explanation: "The Brinson model splits active return into allocation, selection, and an interaction term.", orderIndex: 0 },
  { id: "cfa3-performance-attribution-approaches-q02", topicId: "cfa3-performance-attribution-approaches", text: "Overweighting a sector that outperforms contributes to the ____ effect.", optionA: "Selection", optionB: "Allocation", optionC: "Interaction only", optionD: "Currency", correctOption: "B", explanation: "Choosing sector weights different from the benchmark drives the allocation effect.", orderIndex: 1 },
  { id: "cfa3-performance-attribution-approaches-q03", topicId: "cfa3-performance-attribution-approaches", text: "Picking outperforming stocks within a sector contributes to the ____ effect.", optionA: "Allocation", optionB: "Selection", optionC: "Interaction", optionD: "Benchmark", correctOption: "B", explanation: "Security choices within sectors drive the selection effect.", orderIndex: 2 },
  { id: "cfa3-performance-attribution-approaches-q04", topicId: "cfa3-performance-attribution-approaches", text: "Returns-based attribution, versus holdings-based, is:", optionA: "More accurate but data-heavy", optionB: "Easier but less precise and can be gamed", optionC: "Impossible", optionD: "Identical", correctOption: "B", explanation: "Returns-based uses only periodic returns/factor models — convenient but less precise and manipulable.", orderIndex: 3 },
  { id: "cfa3-performance-attribution-approaches-q05", topicId: "cfa3-performance-attribution-approaches", text: "Transaction-based attribution is the most accurate because it uses:", optionA: "Only returns", optionB: "Holdings and the actual trades", optionC: "The benchmark only", optionD: "No data", correctOption: "B", explanation: "Incorporating intra-period trades gives the most precise attribution, at high data cost.", orderIndex: 4 },
  { id: "cfa3-performance-attribution-approaches-q06", topicId: "cfa3-performance-attribution-approaches", text: "Fixed-income attribution commonly decomposes return into income, roll, duration, curve and:", optionA: "Spread/credit and currency", optionB: "Dividends", optionC: "Active share", optionD: "Beta", correctOption: "A", explanation: "FI attribution separates yield/income, roll, level (duration), curve, spread/credit, and currency effects.", orderIndex: 5 },
  { id: "cfa3-performance-attribution-approaches-q07", topicId: "cfa3-performance-attribution-approaches", text: "Holdings-based attribution requires:", optionA: "Only returns", optionB: "Portfolio weights each period", optionC: "No data", optionD: "Manager interviews", correctOption: "B", explanation: "Holdings-based attribution uses periodic position weights, improving accuracy over returns-based.", orderIndex: 6 },
  { id: "cfa3-performance-attribution-approaches-q08", topicId: "cfa3-performance-attribution-approaches", text: "Attribution primarily explains:", optionA: "Future returns", optionB: "How (the sources by which) active return was earned", optionC: "The risk-free rate", optionD: "The benchmark's coupon", correctOption: "B", explanation: "Attribution identifies the contribution of allocation, selection, and other effects to realized active return.", orderIndex: 7 },
  { id: "cfa3-performance-attribution-approaches-q09", topicId: "cfa3-performance-attribution-approaches", text: "The interaction effect captures the:", optionA: "Combined impact of allocation and selection decisions", optionB: "Risk-free rate", optionC: "Currency only", optionD: "Coupon", correctOption: "A", explanation: "Interaction is the cross term reflecting the joint effect of weighting and selection within a sector.", orderIndex: 8 },
  { id: "cfa3-performance-attribution-approaches-q10", topicId: "cfa3-performance-attribution-approaches", text: "Attribution can reveal ____ that the manager did not intend.", optionA: "Unintended factor/sector bets", optionB: "The risk-free rate", optionC: "Audit fees", optionD: "Coupon dates", correctOption: "A", explanation: "Attribution surfaces inadvertent exposures, helping align the portfolio with the strategy.", orderIndex: 9 },
  { id: "cfa3-performance-attribution-approaches-q11", topicId: "cfa3-performance-attribution-approaches", text: "A drawback of returns-based attribution is that it can be:", optionA: "Too accurate", optionB: "Gamed or imprecise (a 'black box')", optionC: "Free of assumptions", optionD: "Identical to holdings-based", correctOption: "B", explanation: "Because it relies on a factor model and not actual holdings, returns-based attribution can mislead.", orderIndex: 10 },
  { id: "cfa3-performance-attribution-approaches-q12", topicId: "cfa3-performance-attribution-approaches", text: "Currency effects in attribution are most relevant for:", optionA: "Domestic-only portfolios", optionB: "International portfolios", optionC: "Cash holdings", optionD: "Risk-free assets", correctOption: "B", explanation: "Cross-border portfolios require isolating currency contributions in attribution.", orderIndex: 11 },

  // Risk attribution
  { id: "cfa3-performance-risk-attribution-q01", topicId: "cfa3-performance-risk-attribution", text: "Risk attribution explains the sources of:", optionA: "Realized return", optionB: "Risk taken", optionC: "Fees", optionD: "Dividends", correctOption: "B", explanation: "Where return attribution explains return, risk attribution decomposes the risk taken.", orderIndex: 0 },
  { id: "cfa3-performance-risk-attribution-q02", topicId: "cfa3-performance-risk-attribution", text: "Active risk² can be decomposed into active factor risk and active:", optionA: "Specific (selection) risk", optionB: "Risk-free rate", optionC: "Coupon", optionD: "Duration", correctOption: "A", explanation: "Tracking error² = active factor risk + active idiosyncratic (selection) risk.", orderIndex: 1 },
  { id: "cfa3-performance-risk-attribution-q03", topicId: "cfa3-performance-risk-attribution", text: "A stock-picker whose risk is mostly factor-based may be experiencing:", optionA: "Perfect alignment", optionB: "Style drift (risk not matching the stated process)", optionC: "Lower fees", optionD: "Higher liquidity", correctOption: "B", explanation: "The dominant risk source should match the strategy; a mismatch signals style drift or unintended bets.", orderIndex: 2 },
  { id: "cfa3-performance-risk-attribution-q04", topicId: "cfa3-performance-risk-attribution", text: "Component (or marginal) VaR is used to:", optionA: "Eliminate risk", optionB: "Attribute total portfolio risk to individual positions/factors", optionC: "Compute the coupon", optionD: "Set the benchmark", correctOption: "B", explanation: "Component VaR decomposes total risk into additive contributions from positions or factors.", orderIndex: 3 },
  { id: "cfa3-performance-risk-attribution-q05", topicId: "cfa3-performance-risk-attribution", text: "Risk budgeting sets ____ limits, while risk attribution checks the ____ outcome.", optionA: "ex-ante; ex-post", optionB: "ex-post; ex-ante", optionC: "no; no", optionD: "coupon; dividend", correctOption: "A", explanation: "Risk budgets are set in advance (ex-ante); attribution verifies the realized (ex-post) risk against them.", orderIndex: 4 },
  { id: "cfa3-performance-risk-attribution-q06", topicId: "cfa3-performance-risk-attribution", text: "Combining risk and return attribution helps judge whether:", optionA: "The risk taken was rewarded", optionB: "The auditor is independent", optionC: "Dividends were paid", optionD: "The coupon is fixed", correctOption: "A", explanation: "Together they show if the active risk produced commensurate active return (the information ratio).", orderIndex: 5 },
  { id: "cfa3-performance-risk-attribution-q07", topicId: "cfa3-performance-risk-attribution", text: "For an absolute-return mandate, risk is decomposed into:", optionA: "Active vs benchmark only", optionB: "Factor and idiosyncratic contributions to total risk", optionC: "Coupon and dividend", optionD: "Beta and alpha only", correctOption: "B", explanation: "Absolute mandates decompose total (not active) risk into factor and specific sources.", orderIndex: 6 },
  { id: "cfa3-performance-risk-attribution-q08", topicId: "cfa3-performance-risk-attribution", text: "A factor-tilt manager's tracking error is dominated by:", optionA: "Idiosyncratic risk", optionB: "Active factor exposures", optionC: "Cash", optionD: "Currency", correctOption: "B", explanation: "Deliberate factor tilts make systematic factor risk the main contributor to active risk.", orderIndex: 7 },
  { id: "cfa3-performance-risk-attribution-q09", topicId: "cfa3-performance-risk-attribution", text: "Risk attribution that doesn't match the strategy may indicate:", optionA: "Good control", optionB: "Unintended exposures requiring correction", optionC: "Lower fees", optionD: "Higher liquidity", correctOption: "B", explanation: "Mismatched risk sources flag unintended bets that should be addressed.", orderIndex: 8 },
  { id: "cfa3-performance-risk-attribution-q10", topicId: "cfa3-performance-risk-attribution", text: "A pure stock-picker should show risk dominated by:", optionA: "Factor risk", optionB: "Idiosyncratic (specific) risk", optionC: "The risk-free rate", optionD: "Currency", correctOption: "B", explanation: "Genuine security selection produces mostly idiosyncratic active risk.", orderIndex: 9 },
  { id: "cfa3-performance-risk-attribution-q11", topicId: "cfa3-performance-risk-attribution", text: "Marginal contribution to risk measures how a position changes:", optionA: "Portfolio total/active risk at the margin", optionB: "The coupon", optionC: "Dividends", optionD: "The benchmark", correctOption: "A", explanation: "Marginal contribution shows the incremental risk from a small change in a position's weight.", orderIndex: 10 },
  { id: "cfa3-performance-risk-attribution-q12", topicId: "cfa3-performance-risk-attribution", text: "Risk attribution complements return attribution by confirming the manager's:", optionA: "Process is consistent with the risk taken", optionB: "Audit fees", optionC: "Coupon schedule", optionD: "Dividend policy", correctOption: "A", explanation: "It verifies that the realized risk profile aligns with the stated investment process.", orderIndex: 11 },

  // Benchmarks & benchmark quality
  { id: "cfa3-performance-benchmarks-q01", topicId: "cfa3-performance-benchmarks", text: "A valid benchmark should be specified in advance and:", optionA: "Unambiguous, investable, measurable", optionB: "Chosen after performance is known", optionC: "Impossible to replicate", optionD: "Different each period", correctOption: "A", explanation: "Quality benchmarks (SAMURAI) are pre-specified, unambiguous, investable, measurable, appropriate, reflective, and accountable.", orderIndex: 0 },
  { id: "cfa3-performance-benchmarks-q02", topicId: "cfa3-performance-benchmarks", text: "A manager (peer) universe is a flawed benchmark mainly because it is:", optionA: "Investable", optionB: "Not investable and subject to survivorship bias", optionC: "Specified in advance", optionD: "Unambiguous", correctOption: "B", explanation: "You cannot invest in a peer group, and it suffers survivorship bias — failing key benchmark properties.", orderIndex: 1 },
  { id: "cfa3-performance-benchmarks-q03", topicId: "cfa3-performance-benchmarks", text: "A custom (normal) portfolio benchmark is useful for:", optionA: "Generic large-cap mandates", optionB: "Specialized strategies not fit by a standard index", optionC: "Cash", optionD: "Risk-free assets", correctOption: "B", explanation: "Normal portfolios capture a manager's typical investable universe for specialized mandates.", orderIndex: 2 },
  { id: "cfa3-performance-benchmarks-q04", topicId: "cfa3-performance-benchmarks", text: "A poorly matched (style-mismatched) benchmark causes:", optionA: "Accurate attribution", optionB: "Distorted attribution and unfair appraisal", optionC: "Lower fees", optionD: "Higher liquidity", correctOption: "B", explanation: "A bad benchmark makes allocation/selection effects meaningless and misjudges the manager.", orderIndex: 3 },
  { id: "cfa3-performance-benchmarks-q05", topicId: "cfa3-performance-benchmarks", text: "An absolute-return benchmark is a:", optionA: "Market index", optionB: "Fixed target return (e.g., cash + x%)", optionC: "Peer group", optionD: "Factor model", correctOption: "B", explanation: "Absolute benchmarks specify a target return independent of any market index.", orderIndex: 4 },
  { id: "cfa3-performance-benchmarks-q06", topicId: "cfa3-performance-benchmarks", text: "High benchmark 'coverage' means:", optionA: "Few holdings are in the benchmark", optionB: "Most of the portfolio's holdings are in the benchmark", optionC: "Zero overlap", optionD: "Only cash is covered", correctOption: "B", explanation: "Coverage measures the share of portfolio holdings represented in the benchmark; high coverage indicates a good fit.", orderIndex: 5 },
  { id: "cfa3-performance-benchmarks-q07", topicId: "cfa3-performance-benchmarks", text: "A test of benchmark quality is whether the manager's active return is ____ with the benchmark's active return vs the market.", optionA: "Positively correlated", optionB: "Uncorrelated / low systematic bias", optionC: "Always equal", optionD: "Identical to the coupon", correctOption: "B", explanation: "A good benchmark leaves no systematic bias — the manager's and benchmark's active returns shouldn't be systematically related.", orderIndex: 6 },
  { id: "cfa3-performance-benchmarks-q08", topicId: "cfa3-performance-benchmarks", text: "'Reflective of current investment opinions' means the benchmark contains:", optionA: "Securities the manager has knowledge/views on", optionB: "Random securities", optionC: "Only cash", optionD: "Only bonds", correctOption: "A", explanation: "The benchmark should comprise securities within the manager's expertise and opinion set.", orderIndex: 7 },
  { id: "cfa3-performance-benchmarks-q09", topicId: "cfa3-performance-benchmarks", text: "'Accountable (owned)' means the manager:", optionA: "Rejects the benchmark", optionB: "Accepts and is accountable to the benchmark", optionC: "Ignores it", optionD: "Picks it after the fact", correctOption: "B", explanation: "The manager should acknowledge the benchmark as the standard they are accountable to.", orderIndex: 8 },
  { id: "cfa3-performance-benchmarks-q10", topicId: "cfa3-performance-benchmarks", text: "A style index benchmark is appropriate for a manager who:", optionA: "Has no style", optionB: "Follows a specific style (e.g., large-cap value)", optionC: "Holds only cash", optionD: "Indexes the whole market", correctOption: "B", explanation: "Style indices match managers with defined style mandates.", orderIndex: 9 },
  { id: "cfa3-performance-benchmarks-q11", topicId: "cfa3-performance-benchmarks", text: "Survivorship bias in a peer-group benchmark causes it to:", optionA: "Understate the median manager return", optionB: "Overstate the median manager return", optionC: "Have no bias", optionD: "Become investable", correctOption: "B", explanation: "Dropping failed managers inflates the surviving group's apparent performance.", orderIndex: 10 },
  { id: "cfa3-performance-benchmarks-q12", topicId: "cfa3-performance-benchmarks", text: "The mnemonic SAMURAI is used to remember:", optionA: "Properties of a valid benchmark", optionB: "Types of options", optionC: "Bond risks", optionD: "Behavioral biases", correctOption: "A", explanation: "SAMURAI lists the properties of a valid benchmark (specified, appropriate, measurable, unambiguous, reflective, accountable, investable).", orderIndex: 11 },

  // Manager continuation & appraisal
  { id: "cfa3-performance-appraisal-q01", topicId: "cfa3-performance-appraisal", text: "The information ratio measures active return per unit of:", optionA: "Beta", optionB: "Tracking error (active risk)", optionC: "Total volatility", optionD: "The risk-free rate", correctOption: "B", explanation: "IR = active return / tracking error, the core appraisal measure of active management.", orderIndex: 0 },
  { id: "cfa3-performance-appraisal-q02", topicId: "cfa3-performance-appraisal", text: "The M² measure expresses risk-adjusted performance in units of:", optionA: "Beta", optionB: "Return (at the benchmark's total risk)", optionC: "Tracking error", optionD: "Duration", correctOption: "B", explanation: "M² restates the Sharpe ratio as a return comparable to the benchmark at equal total risk.", orderIndex: 1 },
  { id: "cfa3-performance-appraisal-q03", topicId: "cfa3-performance-appraisal", text: "Firing a skilled manager after a stretch of bad luck is a:", optionA: "Type I error", optionB: "Type II error", optionC: "Data error", optionD: "Benchmark error", correctOption: "B", explanation: "Rejecting a genuinely skilled manager (false negative) is a Type II error.", orderIndex: 2 },
  { id: "cfa3-performance-appraisal-q04", topicId: "cfa3-performance-appraisal", text: "A manager continuation policy (MCP) helps by:", optionA: "Maximizing churn", optionB: "Setting objective criteria/zones to reduce noise-driven firing/hiring", optionC: "Ignoring performance", optionD: "Removing benchmarks", correctOption: "B", explanation: "An MCP defines acceptable-performance zones and criteria, reducing decisions driven by random noise.", orderIndex: 3 },
  { id: "cfa3-performance-appraisal-q05", topicId: "cfa3-performance-appraisal", text: "The Sharpe ratio uses which risk measure?", optionA: "Beta", optionB: "Total volatility (standard deviation)", optionC: "Tracking error", optionD: "VaR", correctOption: "B", explanation: "The Sharpe ratio divides excess return by total standard deviation.", orderIndex: 4 },
  { id: "cfa3-performance-appraisal-q06", topicId: "cfa3-performance-appraisal", text: "Jensen's alpha measures return in excess of that required by the:", optionA: "Dividend discount model", optionB: "CAPM (given the portfolio's beta)", optionC: "Sortino target", optionD: "Information ratio", correctOption: "B", explanation: "Jensen's alpha = portfolio return − CAPM-required return based on beta.", orderIndex: 5 },
  { id: "cfa3-performance-appraisal-q07", topicId: "cfa3-performance-appraisal", text: "Retaining an unskilled manager is a:", optionA: "Type I error", optionB: "Type II error", optionC: "No error", optionD: "Benchmark error", correctOption: "A", explanation: "Keeping/hiring a manager with no real skill (false positive) is a Type I error.", orderIndex: 6 },
  { id: "cfa3-performance-appraisal-q08", topicId: "cfa3-performance-appraisal", text: "An IR around 1.0 is generally considered:", optionA: "Poor", optionB: "Exceptional", optionC: "Average", optionD: "Negative", correctOption: "B", explanation: "An information ratio near 1.0 reflects exceptional active management; ~0.5 is good.", orderIndex: 7 },
  { id: "cfa3-performance-appraisal-q09", topicId: "cfa3-performance-appraisal", text: "Short, volatile track records make appraisal hard because:", optionA: "Skill is easy to confirm", optionB: "It is statistically difficult to separate skill from luck", optionC: "Returns are guaranteed", optionD: "Benchmarks are perfect", correctOption: "B", explanation: "Limited noisy data lowers statistical confidence in distinguishing skill from random results.", orderIndex: 8 },
  { id: "cfa3-performance-appraisal-q10", topicId: "cfa3-performance-appraisal", text: "Treynor ratio is most appropriate for:", optionA: "An investor's entire portfolio", optionB: "A well-diversified sub-portfolio (uses beta)", optionC: "A single risk-free asset", optionD: "A cash account", correctOption: "B", explanation: "Treynor uses beta, fitting a diversified sub-portfolio whose idiosyncratic risk is diversified away.", orderIndex: 9 },
  { id: "cfa3-performance-appraisal-q11", topicId: "cfa3-performance-appraisal", text: "When appraising managers, process and operational quality should be weighted because:", optionA: "Past returns alone confirm skill", optionB: "Returns are noisy; process/operations are more persistent indicators", optionC: "They are irrelevant", optionD: "They lower the IR", correctOption: "B", explanation: "Because returns are noisy, durable process and operational quality help confirm genuine skill.", orderIndex: 10 },
  { id: "cfa3-performance-appraisal-q12", topicId: "cfa3-performance-appraisal", text: "A 'zone of acceptable performance' in an MCP is designed to:", optionA: "Trigger immediate firing on any underperformance", optionB: "Tolerate normal performance variation before action", optionC: "Ignore all performance", optionD: "Maximize turnover", correctOption: "B", explanation: "The zone allows for expected noise so managers aren't churned over random short-term variation.", orderIndex: 11 },

  // Individual IPS & goals
  { id: "cfa3-private-wealth-ips-q01", topicId: "cfa3-private-wealth-ips", text: "An individual's risk tolerance combines ability and willingness; when they differ, use the:", optionA: "Higher of the two", optionB: "Lower (more conservative) of the two, then educate", optionC: "Average", optionD: "Neither", correctOption: "B", explanation: "The more conservative measure governs; the adviser then seeks to reconcile via education.", orderIndex: 0 },
  { id: "cfa3-private-wealth-ips-q02", topicId: "cfa3-private-wealth-ips", text: "Which is the most distinctive constraint for individuals versus institutions?", optionA: "Time horizon", optionB: "Taxes", optionC: "Liquidity", optionD: "Legal", correctOption: "B", explanation: "Taxes are a defining, complex constraint in individual portfolio management.", orderIndex: 1 },
  { id: "cfa3-private-wealth-ips-q03", topicId: "cfa3-private-wealth-ips", text: "An individual's required return is best derived from their:", optionA: "Benchmark index", optionB: "Goals, spending, and time horizon", optionC: "Beta", optionD: "The risk-free rate only", correctOption: "B", explanation: "Solve for the return needed to fund the client's goals given spending and horizon.", orderIndex: 2 },
  { id: "cfa3-private-wealth-ips-q04", topicId: "cfa3-private-wealth-ips", text: "Individual time horizons are often:", optionA: "Single-stage and short", optionB: "Multi-stage (e.g., pre- and post-retirement)", optionC: "Always infinite", optionD: "Irrelevant", correctOption: "B", explanation: "Individuals commonly have multi-stage horizons that change the allocation over time.", orderIndex: 3 },
  { id: "cfa3-private-wealth-ips-q05", topicId: "cfa3-private-wealth-ips", text: "A concentrated single-stock position is typically captured under which IPS constraint?", optionA: "Unique circumstances", optionB: "Taxes only", optionC: "Time horizon", optionD: "Liquidity only", correctOption: "A", explanation: "Special situations like concentrated holdings or ESG preferences fall under unique circumstances.", orderIndex: 4 },
  { id: "cfa3-private-wealth-ips-q06", topicId: "cfa3-private-wealth-ips", text: "Ability to take risk is higher when the client has:", optionA: "Large needs relative to wealth and a short horizon", optionB: "Ample wealth relative to needs, a long horizon, and flexibility", optionC: "No income", optionD: "High debt", correctOption: "B", explanation: "Greater financial capacity, longer horizon, and spending flexibility raise the ability to bear risk.", orderIndex: 5 },
  { id: "cfa3-private-wealth-ips-q07", topicId: "cfa3-private-wealth-ips", text: "Liquidity needs in an individual IPS include:", optionA: "Spending, emergencies, and large planned purchases", optionB: "The benchmark", optionC: "Beta", optionD: "The coupon", correctOption: "A", explanation: "Individual liquidity covers ongoing spending, reserves, and known upcoming outlays.", orderIndex: 6 },
  { id: "cfa3-private-wealth-ips-q08", topicId: "cfa3-private-wealth-ips", text: "Goals-based framing helps individual clients by:", optionA: "Eliminating taxes", optionB: "Improving discipline via mental accounting per goal", optionC: "Removing the IPS", optionD: "Guaranteeing returns", correctOption: "B", explanation: "Tying portfolios to specific goals leverages mental accounting to improve adherence.", orderIndex: 7 },
  { id: "cfa3-private-wealth-ips-q09", topicId: "cfa3-private-wealth-ips", text: "Willingness to take risk is primarily a function of the client's:", optionA: "Psychological attitude toward risk", optionB: "Net worth only", optionC: "Tax bracket", optionD: "Beta", correctOption: "A", explanation: "Willingness reflects the client's psychological comfort with risk, distinct from financial ability.", orderIndex: 8 },
  { id: "cfa3-private-wealth-ips-q10", topicId: "cfa3-private-wealth-ips", text: "An individual IPS should be reviewed:", optionA: "Never", optionB: "Regularly and when circumstances change materially", optionC: "Only at death", optionD: "Daily", correctOption: "B", explanation: "Changing life stages and goals require periodic IPS review and updates.", orderIndex: 9 },
  { id: "cfa3-private-wealth-ips-q11", topicId: "cfa3-private-wealth-ips", text: "Legal/regulatory constraints for individuals include:", optionA: "Trust structures and jurisdictional rules", optionB: "Index reconstitution", optionC: "Beta limits", optionD: "Coupon schedules", correctOption: "A", explanation: "Trusts, estate law, and jurisdiction shape the individual's legal constraints.", orderIndex: 10 },
  { id: "cfa3-private-wealth-ips-q12", topicId: "cfa3-private-wealth-ips", text: "Mortality and longevity risks affect the IPS mainly through:", optionA: "Allocation and insurance needs", optionB: "The benchmark", optionC: "Trading costs", optionD: "Currency", correctOption: "A", explanation: "These human-capital risks shape asset allocation and the need for life insurance/annuities.", orderIndex: 11 },

  // Human capital & life-cycle investing
  { id: "cfa3-private-wealth-human-capital-q01", topicId: "cfa3-private-wealth-human-capital", text: "Total wealth equals financial capital plus:", optionA: "Human capital (PV of future labor income)", optionB: "The benchmark", optionC: "Beta", optionD: "The coupon", correctOption: "A", explanation: "Human capital — the present value of future earnings — is part of total wealth.", orderIndex: 0 },
  { id: "cfa3-private-wealth-human-capital-q02", topicId: "cfa3-private-wealth-human-capital", text: "An investor with bond-like (stable) human capital should tilt financial assets toward:", optionA: "Bonds", optionB: "Equities", optionC: "Cash", optionD: "Commodities", correctOption: "B", explanation: "Stable, bond-like human capital offsets risk, allowing more equities in financial assets.", orderIndex: 1 },
  { id: "cfa3-private-wealth-human-capital-q03", topicId: "cfa3-private-wealth-human-capital", text: "An investor with equity-like (volatile, market-correlated) human capital should tilt financial assets toward:", optionA: "Equities", optionB: "Bonds", optionC: "More of the same risky assets", optionD: "Leverage", correctOption: "B", explanation: "Risky, market-correlated human capital argues for more bonds to balance total-wealth risk.", orderIndex: 2 },
  { id: "cfa3-private-wealth-human-capital-q04", topicId: "cfa3-private-wealth-human-capital", text: "Over the life cycle, human capital generally:", optionA: "Rises with age", optionB: "Declines with age as financial capital grows", optionC: "Stays constant", optionD: "Is zero", correctOption: "B", explanation: "As people age, remaining earning years fall, so human capital declines while savings accumulate.", orderIndex: 3 },
  { id: "cfa3-private-wealth-human-capital-q05", topicId: "cfa3-private-wealth-human-capital", text: "Consequently, the equity share of financial assets typically:", optionA: "Rises with age", optionB: "Falls over the life cycle (a glide path)", optionC: "Stays at 100%", optionD: "Is irrelevant", correctOption: "B", explanation: "As bond-like human capital shrinks, financial assets are de-risked toward bonds over time.", orderIndex: 4 },
  { id: "cfa3-private-wealth-human-capital-q06", topicId: "cfa3-private-wealth-human-capital", text: "Life insurance primarily hedges:", optionA: "Longevity risk", optionB: "Mortality risk (loss of human capital from early death)", optionC: "Market risk", optionD: "Inflation", correctOption: "B", explanation: "Life insurance replaces lost future income if the earner dies prematurely.", orderIndex: 5 },
  { id: "cfa3-private-wealth-human-capital-q07", topicId: "cfa3-private-wealth-human-capital", text: "Annuities primarily hedge:", optionA: "Mortality risk", optionB: "Longevity risk (outliving assets)", optionC: "Currency risk", optionD: "Credit risk", correctOption: "B", explanation: "Annuities provide lifetime income, hedging the risk of living longer than planned.", orderIndex: 6 },
  { id: "cfa3-private-wealth-human-capital-q08", topicId: "cfa3-private-wealth-human-capital", text: "Optimal allocation considers human capital's size and its ____ with risky assets.", optionA: "Correlation", optionB: "Coupon", optionC: "Duration", optionD: "Beta to bonds only", correctOption: "A", explanation: "The correlation between human capital and markets affects how much financial risk is appropriate.", orderIndex: 7 },
  { id: "cfa3-private-wealth-human-capital-q09", topicId: "cfa3-private-wealth-human-capital", text: "A tenured professor's human capital is best described as:", optionA: "Equity-like", optionB: "Bond-like", optionC: "Cash-like only", optionD: "Worthless", correctOption: "B", explanation: "Stable, secure salary makes the professor's human capital bond-like.", orderIndex: 8 },
  { id: "cfa3-private-wealth-human-capital-q10", topicId: "cfa3-private-wealth-human-capital", text: "Disability insurance addresses the risk of:", optionA: "Outliving assets", optionB: "Loss of earning ability during working years", optionC: "Market crashes", optionD: "Inflation", correctOption: "B", explanation: "Disability cover protects human capital if illness/injury prevents earning income.", orderIndex: 9 },
  { id: "cfa3-private-wealth-human-capital-q11", topicId: "cfa3-private-wealth-human-capital", text: "A commodities trader's human capital is most likely:", optionA: "Bond-like", optionB: "Equity-like (volatile, market-correlated)", optionC: "Risk-free", optionD: "Zero", correctOption: "B", explanation: "Income tied to markets is volatile and correlated — equity-like human capital.", orderIndex: 10 },
  { id: "cfa3-private-wealth-human-capital-q12", topicId: "cfa3-private-wealth-human-capital", text: "Young investors typically hold more equities because their:", optionA: "Human capital is large and bond-like", optionB: "Financial capital is large", optionC: "Horizon is short", optionD: "Taxes are higher", correctOption: "A", explanation: "Large, bond-like human capital early in life supports a higher equity allocation in financial assets.", orderIndex: 11 },

  // Tax-efficient investing & asset location
  { id: "cfa3-private-wealth-tax-efficiency-q01", topicId: "cfa3-private-wealth-tax-efficiency", text: "Asset location places tax-inefficient assets in:", optionA: "Taxable accounts", optionB: "Tax-advantaged (sheltered) accounts", optionC: "Foreign accounts", optionD: "Cash", correctOption: "B", explanation: "Tax-inefficient assets belong in tax-deferred/exempt accounts to reduce tax drag.", orderIndex: 0 },
  { id: "cfa3-private-wealth-tax-efficiency-q02", topicId: "cfa3-private-wealth-tax-efficiency", text: "Tax-loss harvesting improves after-tax returns by:", optionA: "Realizing losses to offset gains/income", optionB: "Increasing turnover for its own sake", optionC: "Avoiding equities", optionD: "Deferring dividends", correctOption: "A", explanation: "Harvesting losses offsets taxable gains, lowering the current tax bill.", orderIndex: 1 },
  { id: "cfa3-private-wealth-tax-efficiency-q03", topicId: "cfa3-private-wealth-tax-efficiency", text: "Tax drag is most damaging when returns are taxed:", optionA: "Once at the end", optionB: "Annually over long horizons", optionC: "Never", optionD: "Only on cash", correctOption: "B", explanation: "Annual taxation reduces the compounding base each year, compounding the drag over time.", orderIndex: 2 },
  { id: "cfa3-private-wealth-tax-efficiency-q04", topicId: "cfa3-private-wealth-tax-efficiency", text: "A tax-deferred account is most advantageous when future tax rates are expected to be:", optionA: "Higher than today", optionB: "Lower than today", optionC: "The same", optionD: "Zero", correctOption: "B", explanation: "Deferring tax helps most when withdrawals are taxed at a lower future rate.", orderIndex: 3 },
  { id: "cfa3-private-wealth-tax-efficiency-q05", topicId: "cfa3-private-wealth-tax-efficiency", text: "A tax-exempt account (after-tax in, tax-free out) is best when future rates are expected to be:", optionA: "Lower than today", optionB: "Higher than today", optionC: "Zero", optionD: "Irrelevant", correctOption: "B", explanation: "Paying tax now is favorable when withdrawals would otherwise face a higher future rate.", orderIndex: 4 },
  { id: "cfa3-private-wealth-tax-efficiency-q06", topicId: "cfa3-private-wealth-tax-efficiency", text: "The step-up in basis at death can benefit heirs by:", optionA: "Eliminating embedded capital gains", optionB: "Increasing estate taxes", optionC: "Forcing a sale", optionD: "Removing dividends", correctOption: "A", explanation: "Resetting basis to fair value at death can erase unrealized gains for heirs.", orderIndex: 5 },
  { id: "cfa3-private-wealth-tax-efficiency-q07", topicId: "cfa3-private-wealth-tax-efficiency", text: "Holding low-turnover equities in a taxable account reflects:", optionA: "Poor asset location", optionB: "Sound asset location", optionC: "Tax-loss harvesting", optionD: "Estate planning", correctOption: "B", explanation: "Tax-efficient assets belong in taxable accounts, preserving sheltered space for inefficient ones.", orderIndex: 6 },
  { id: "cfa3-private-wealth-tax-efficiency-q08", topicId: "cfa3-private-wealth-tax-efficiency", text: "Taxes reduce both an asset's return and its:", optionA: "Risk (the government shares gains/losses)", optionB: "Liquidity", optionC: "Duration", optionD: "Coupon", correctOption: "A", explanation: "Because the tax authority shares gains and losses, after-tax volatility is lower — optimize after-tax.", orderIndex: 7 },
  { id: "cfa3-private-wealth-tax-efficiency-q09", topicId: "cfa3-private-wealth-tax-efficiency", text: "Municipal bonds are typically held in:", optionA: "Tax-deferred accounts", optionB: "Taxable accounts (their tax-exempt income is wasted in shelters)", optionC: "Foreign accounts", optionD: "Trusts only", correctOption: "B", explanation: "Tax-exempt munis belong in taxable accounts; placing them in shelters wastes their tax advantage.", orderIndex: 8 },
  { id: "cfa3-private-wealth-tax-efficiency-q10", topicId: "cfa3-private-wealth-tax-efficiency", text: "Lower portfolio turnover improves tax efficiency by:", optionA: "Realizing more gains", optionB: "Deferring capital gains taxes", optionC: "Increasing dividends", optionD: "Raising the tax rate", correctOption: "B", explanation: "Holding positions longer defers capital-gains realization, improving after-tax compounding.", orderIndex: 9 },
  { id: "cfa3-private-wealth-tax-efficiency-q11", topicId: "cfa3-private-wealth-tax-efficiency", text: "Rebalancing corridors in taxable accounts should generally be:", optionA: "Narrower", optionB: "Wider (to limit taxable trades)", optionC: "Zero", optionD: "Irrelevant", correctOption: "B", explanation: "Tax costs of trading justify wider bands in taxable accounts.", orderIndex: 10 },
  { id: "cfa3-private-wealth-tax-efficiency-q12", topicId: "cfa3-private-wealth-tax-efficiency", text: "High-turnover or REIT holdings are best located in:", optionA: "Taxable accounts", optionB: "Tax-advantaged accounts", optionC: "Cash", optionD: "Foreign accounts", correctOption: "B", explanation: "These tax-inefficient assets belong in sheltered accounts to minimize tax drag.", orderIndex: 11 },

  // Estate planning & wealth transfer
  { id: "cfa3-private-wealth-estate-planning-q01", topicId: "cfa3-private-wealth-estate-planning", text: "Lifetime gifting can reduce estate taxes primarily by:", optionA: "Removing future appreciation from the estate", optionB: "Increasing the taxable estate", optionC: "Raising the donor's income", optionD: "Eliminating the gift's value", correctOption: "A", explanation: "Gifting transfers an asset and its future growth out of the estate, often at lower transfer-tax cost.", orderIndex: 0 },
  { id: "cfa3-private-wealth-estate-planning-q02", topicId: "cfa3-private-wealth-estate-planning", text: "An irrevocable trust differs from a revocable trust in that the grantor:", optionA: "Can freely revoke it", optionB: "Generally gives up control, often removing assets from the estate", optionC: "Pays no setup cost", optionD: "Retains full ownership", correctOption: "B", explanation: "Irrevocable trusts remove assets from the grantor's control and usually the taxable estate.", orderIndex: 1 },
  { id: "cfa3-private-wealth-estate-planning-q03", topicId: "cfa3-private-wealth-estate-planning", text: "Life insurance in estate planning is often used to:", optionA: "Avoid all taxes", optionB: "Provide liquidity to pay estate taxes", optionC: "Increase the estate's size only", optionD: "Replace the IPS", correctOption: "B", explanation: "Insurance proceeds (often in an irrevocable trust) supply liquidity for estate taxes/expenses.", orderIndex: 2 },
  { id: "cfa3-private-wealth-estate-planning-q04", topicId: "cfa3-private-wealth-estate-planning", text: "The choice between gifting and bequeathing depends on relative:", optionA: "After-tax values (gift vs estate tax, growth, rates)", optionB: "Tickers", optionC: "Auditors", optionD: "Coupons", correctOption: "A", explanation: "Compare the after-tax value of gifting now versus bequeathing later, given tax rates and growth.", orderIndex: 3 },
  { id: "cfa3-private-wealth-estate-planning-q05", topicId: "cfa3-private-wealth-estate-planning", text: "A bequest at death may carry a:", optionA: "Step-up in basis", optionB: "Gift-tax credit only", optionC: "Negative basis", optionD: "Mandatory sale", correctOption: "A", explanation: "Assets passed at death often receive a basis step-up, potentially eliminating embedded gains.", orderIndex: 4 },
  { id: "cfa3-private-wealth-estate-planning-q06", topicId: "cfa3-private-wealth-estate-planning", text: "Charitable trusts and donor-advised funds are tools for:", optionA: "Reducing diversification", optionB: "Tax-efficient charitable giving", optionC: "Increasing turnover", optionD: "Avoiding the IPS", correctOption: "B", explanation: "These vehicles facilitate philanthropic goals with favorable tax treatment.", orderIndex: 5 },
  { id: "cfa3-private-wealth-estate-planning-q07", topicId: "cfa3-private-wealth-estate-planning", text: "Forced heirship rules:", optionA: "Are identical worldwide", optionB: "Vary by jurisdiction and can constrain bequests", optionC: "Apply only to trusts", optionD: "Eliminate estate tax", correctOption: "B", explanation: "Some jurisdictions mandate minimum inheritances to certain heirs, constraining estate plans.", orderIndex: 6 },
  { id: "cfa3-private-wealth-estate-planning-q08", topicId: "cfa3-private-wealth-estate-planning", text: "Gifting is more attractive when the asset is expected to:", optionA: "Decline in value", optionB: "Appreciate significantly", optionC: "Stay flat", optionD: "Pay no return", correctOption: "B", explanation: "Removing a high-growth asset early shifts more future appreciation out of the estate.", orderIndex: 7 },
  { id: "cfa3-private-wealth-estate-planning-q09", topicId: "cfa3-private-wealth-estate-planning", text: "Holding an appreciated asset until death rather than selling can be favorable because of:", optionA: "Higher turnover", optionB: "The step-up in basis eliminating the gain", optionC: "Larger dividends", optionD: "Lower returns", correctOption: "B", explanation: "The basis step-up at death can erase the unrealized gain, avoiding capital-gains tax.", orderIndex: 8 },
  { id: "cfa3-private-wealth-estate-planning-q10", topicId: "cfa3-private-wealth-estate-planning", text: "A revocable trust's assets are generally:", optionA: "Outside the taxable estate", optionB: "Inside the estate (grantor retains control)", optionC: "Tax-free", optionD: "Owned by charity", correctOption: "B", explanation: "Because the grantor can revoke it, a revocable trust's assets remain in the taxable estate.", orderIndex: 9 },
  { id: "cfa3-private-wealth-estate-planning-q11", topicId: "cfa3-private-wealth-estate-planning", text: "Estate planning should be coordinated with the IPS to ensure:", optionA: "Liquidity for taxes and alignment with legacy goals", optionB: "Maximum turnover", optionC: "The highest beta", optionD: "No diversification", correctOption: "A", explanation: "Plans must provide liquidity for transfer taxes and reflect the client's legacy objectives.", orderIndex: 10 },
  { id: "cfa3-private-wealth-estate-planning-q12", topicId: "cfa3-private-wealth-estate-planning", text: "Generation-skipping transfers are designed to:", optionA: "Pass wealth to grandchildren, potentially avoiding a layer of estate tax", optionB: "Increase current income", optionC: "Eliminate trusts", optionD: "Raise turnover", correctOption: "A", explanation: "Skipping a generation can avoid taxing the estate twice, subject to GST tax rules.", orderIndex: 11 },

  // Risk management for individuals
  { id: "cfa3-private-wealth-risk-insurance-q01", topicId: "cfa3-private-wealth-risk-insurance", text: "Insurance is most appropriate for risks that are:", optionA: "High-frequency, low-severity", optionB: "Low-frequency, high-severity", optionC: "Certain", optionD: "Trivial", correctOption: "B", explanation: "Transfer (insure) low-probability, high-severity risks; retain small, frequent ones.", orderIndex: 0 },
  { id: "cfa3-private-wealth-risk-insurance-q02", topicId: "cfa3-private-wealth-risk-insurance", text: "Term life insurance differs from whole life in that term:", optionA: "Builds cash value", optionB: "Provides pure death-benefit cover for a period, no cash value", optionC: "Is permanent", optionD: "Hedges longevity", correctOption: "B", explanation: "Term life is temporary protection without a savings/cash-value component.", orderIndex: 1 },
  { id: "cfa3-private-wealth-risk-insurance-q03", topicId: "cfa3-private-wealth-risk-insurance", text: "An immediate annuity primarily provides:", optionA: "Lump-sum death benefit", optionB: "Guaranteed lifetime income (hedging longevity)", optionC: "Disability cover", optionD: "Property protection", correctOption: "B", explanation: "Annuities convert wealth into lifetime income, hedging the risk of outliving assets.", orderIndex: 2 },
  { id: "cfa3-private-wealth-risk-insurance-q04", topicId: "cfa3-private-wealth-risk-insurance", text: "The four basic risk-management responses are retain, reduce/avoid, transfer and:", optionA: "Ignore", optionB: "Self-insure (where wealth allows)", optionC: "Leverage", optionD: "Speculate", correctOption: "B", explanation: "Risks are retained, reduced/avoided, transferred (insured), or self-insured.", orderIndex: 3 },
  { id: "cfa3-private-wealth-risk-insurance-q05", topicId: "cfa3-private-wealth-risk-insurance", text: "The economic (holistic) balance sheet includes, beyond financial assets:", optionA: "Human capital and the PV of pensions/liabilities", optionB: "Only cash", optionC: "Only equities", optionD: "The benchmark", correctOption: "A", explanation: "It adds human capital and the present value of pensions and future liabilities.", orderIndex: 4 },
  { id: "cfa3-private-wealth-risk-insurance-q06", topicId: "cfa3-private-wealth-risk-insurance", text: "Life insurance and annuities are complementary because they hedge:", optionA: "The same risk", optionB: "Opposite risks (early death vs long life)", optionC: "Only market risk", optionD: "Currency risk", correctOption: "B", explanation: "Life insurance hedges premature death; annuities hedge longevity — opposite human-capital risks.", orderIndex: 5 },
  { id: "cfa3-private-wealth-risk-insurance-q07", topicId: "cfa3-private-wealth-risk-insurance", text: "Umbrella liability insurance protects against:", optionA: "Market losses", optionB: "Large personal liability claims beyond standard policy limits", optionC: "Longevity", optionD: "Inflation", correctOption: "B", explanation: "Umbrella coverage adds liability protection above home/auto policy limits.", orderIndex: 6 },
  { id: "cfa3-private-wealth-risk-insurance-q08", topicId: "cfa3-private-wealth-risk-insurance", text: "Small, frequent, affordable losses are best:", optionA: "Insured fully", optionB: "Retained (self-funded)", optionC: "Avoided entirely", optionD: "Transferred", correctOption: "B", explanation: "It is inefficient to insure small, frequent losses; retain them.", orderIndex: 7 },
  { id: "cfa3-private-wealth-risk-insurance-q09", topicId: "cfa3-private-wealth-risk-insurance", text: "A young breadwinner with dependents most needs:", optionA: "An annuity", optionB: "Life and disability insurance", optionC: "No insurance", optionD: "Only property cover", correctOption: "B", explanation: "Large human capital and dependents make life/disability cover a priority.", orderIndex: 8 },
  { id: "cfa3-private-wealth-risk-insurance-q10", topicId: "cfa3-private-wealth-risk-insurance", text: "A retiree's chief financial risk is often:", optionA: "Longevity risk", optionB: "Mortality risk", optionC: "Disability risk", optionD: "Earnings risk", correctOption: "A", explanation: "Retirees worry most about outliving their assets (longevity), which annuities address.", orderIndex: 9 },
  { id: "cfa3-private-wealth-risk-insurance-q11", topicId: "cfa3-private-wealth-risk-insurance", text: "A needs analysis sizes life insurance from the:", optionA: "Gap between resources and obligations", optionB: "Stock price", optionC: "Benchmark", optionD: "Coupon", correctOption: "A", explanation: "Coverage equals the shortfall between available resources and the family's financial obligations.", orderIndex: 10 },
  { id: "cfa3-private-wealth-risk-insurance-q12", topicId: "cfa3-private-wealth-risk-insurance", text: "Whole/permanent life insurance, unlike term, includes a:", optionA: "Cash-value (savings) component", optionB: "Disability rider only", optionC: "Property cover", optionD: "Longevity hedge", correctOption: "A", explanation: "Permanent policies build cash value alongside the death benefit.", orderIndex: 11 },

  // Defined-benefit pension management
  { id: "cfa3-institutional-db-pension-q01", topicId: "cfa3-institutional-db-pension", text: "A DB plan has higher risk tolerance when the workforce is:", optionA: "Older and the plan underfunded", optionB: "Younger and the plan well funded", optionC: "Near retirement", optionD: "Shrinking with a weak sponsor", correctOption: "B", explanation: "A younger workforce and strong funded status lengthen the horizon and raise risk capacity.", orderIndex: 0 },
  { id: "cfa3-institutional-db-pension-q02", topicId: "cfa3-institutional-db-pension", text: "Because pension liabilities are bond-like, plans commonly use:", optionA: "Pure equity indexing", optionB: "Liability-driven investing (duration matching)", optionC: "Currency speculation", optionD: "Commodities only", correctOption: "B", explanation: "LDI hedges the interest-rate sensitivity of the bond-like liabilities.", orderIndex: 1 },
  { id: "cfa3-institutional-db-pension-q03", topicId: "cfa3-institutional-db-pension", text: "A higher proportion of retired lives tends to:", optionA: "Lower liquidity needs", optionB: "Raise liquidity needs and lower risk tolerance", optionC: "Extend the horizon", optionD: "Raise equity allocation", correctOption: "B", explanation: "More retirees means larger, nearer-term benefit payments, increasing liquidity needs.", orderIndex: 2 },
  { id: "cfa3-institutional-db-pension-q04", topicId: "cfa3-institutional-db-pension", text: "High correlation between plan assets and the sponsor's business argues for:", optionA: "More investment risk", optionB: "Less investment risk", optionC: "No effect", optionD: "Only currency risk", correctOption: "B", explanation: "Correlated risks concentrate exposure, so the plan should be more conservative.", orderIndex: 3 },
  { id: "cfa3-institutional-db-pension-q05", topicId: "cfa3-institutional-db-pension", text: "A DB plan's minimum return objective is to:", optionA: "Beat equities", optionB: "Fund the liabilities (meet the actuarial/discount rate)", optionC: "Maximize turnover", optionD: "Match cash", correctOption: "B", explanation: "At minimum, the plan must earn enough to fund its promised benefits.", orderIndex: 4 },
  { id: "cfa3-institutional-db-pension-q06", topicId: "cfa3-institutional-db-pension", text: "DB plans are generally:", optionA: "Heavily taxed", optionB: "Tax-exempt", optionC: "Subject to capital-gains tax only", optionD: "Taxed like individuals", correctOption: "B", explanation: "Qualified pension plans are typically tax-exempt.", orderIndex: 5 },
  { id: "cfa3-institutional-db-pension-q07", topicId: "cfa3-institutional-db-pension", text: "As a plan's funded ratio improves, a common strategy is to:", optionA: "Take more equity risk", optionB: "De-risk (glide path) toward liability-hedging assets", optionC: "Stop investing", optionD: "Ignore liabilities", correctOption: "B", explanation: "Better-funded plans lock in gains by shifting toward hedging assets along a glide path.", orderIndex: 6 },
  { id: "cfa3-institutional-db-pension-q08", topicId: "cfa3-institutional-db-pension", text: "Inflation-indexed pension benefits are best hedged with:", optionA: "Nominal bonds", optionB: "Inflation-linked bonds", optionC: "Equities only", optionD: "Cash", correctOption: "B", explanation: "Linkers hedge inflation-sensitive liabilities better than nominal bonds.", orderIndex: 7 },
  { id: "cfa3-institutional-db-pension-q09", topicId: "cfa3-institutional-db-pension", text: "A financially weak plan sponsor reduces the plan's:", optionA: "Risk tolerance", optionB: "Liquidity needs", optionC: "Time horizon", optionD: "Tax rate", correctOption: "A", explanation: "A weak sponsor that may not fund shortfalls lowers the plan's ability to take risk.", orderIndex: 8 },
  { id: "cfa3-institutional-db-pension-q10", topicId: "cfa3-institutional-db-pension", text: "Surplus risk refers to volatility in:", optionA: "Assets minus liabilities", optionB: "Coupons", optionC: "Dividends", optionD: "The benchmark", correctOption: "A", explanation: "Surplus risk is the volatility of the funded surplus (assets − liabilities).", orderIndex: 9 },
  { id: "cfa3-institutional-db-pension-q11", topicId: "cfa3-institutional-db-pension", text: "A smaller plan relative to the sponsor's size implies:", optionA: "Lower risk tolerance", optionB: "Higher risk tolerance (the sponsor can absorb shortfalls)", optionC: "No effect", optionD: "Mandatory de-risking", correctOption: "B", explanation: "When the plan is small relative to the sponsor, the sponsor can more easily fund shortfalls, raising risk capacity.", orderIndex: 10 },
  { id: "cfa3-institutional-db-pension-q12", topicId: "cfa3-institutional-db-pension", text: "The return-seeking portfolio in an LDI structure is meant to:", optionA: "Hedge the liabilities", optionB: "Generate growth to improve the funded ratio", optionC: "Hold only cash", optionD: "Match duration", correctOption: "B", explanation: "Alongside the hedging sleeve, the return-seeking portfolio pursues growth to close/maintain funding.", orderIndex: 11 },

  // Foundations & endowments
  { id: "cfa3-institutional-foundations-q01", topicId: "cfa3-institutional-foundations", text: "Endowments and foundations generally have a ____ time horizon.", optionA: "Short", optionB: "Very long/perpetual", optionC: "One-year", optionD: "Zero", correctOption: "B", explanation: "Supporting a mission in perpetuity gives these institutions very long horizons.", orderIndex: 0 },
  { id: "cfa3-institutional-foundations-q02", topicId: "cfa3-institutional-foundations", text: "A typical endowment return objective is approximately:", optionA: "The risk-free rate", optionB: "Spending rate + inflation + fees", optionC: "Zero", optionD: "The dividend yield", correctOption: "B", explanation: "To preserve real value and fund spending, required return ≈ spending + inflation + costs.", orderIndex: 1 },
  { id: "cfa3-institutional-foundations-q03", topicId: "cfa3-institutional-foundations", text: "US private foundations must generally distribute about:", optionA: "1% annually", optionB: "5% of assets annually", optionC: "20% annually", optionD: "Nothing", correctOption: "B", explanation: "US private foundations typically must pay out ~5% of assets per year.", orderIndex: 2 },
  { id: "cfa3-institutional-foundations-q04", topicId: "cfa3-institutional-foundations", text: "A rolling 3-year average spending rule is used to:", optionA: "Increase spending volatility", optionB: "Smooth distributions vs a simple percentage rule", optionC: "Eliminate spending", optionD: "Track one year", correctOption: "B", explanation: "Averaging asset values over years reduces year-to-year spending volatility.", orderIndex: 3 },
  { id: "cfa3-institutional-foundations-q05", topicId: "cfa3-institutional-foundations", text: "The endowment model emphasizes:", optionA: "Cash and T-bills", optionB: "Equities and alternative investments", optionC: "Short-term deposits", optionD: "A single bond", correctOption: "B", explanation: "Long horizons and high risk tolerance support heavy equity/alternatives allocations.", orderIndex: 4 },
  { id: "cfa3-institutional-foundations-q06", topicId: "cfa3-institutional-foundations", text: "Endowments and foundations are generally:", optionA: "Heavily taxed", optionB: "Largely tax-exempt", optionC: "Taxed like individuals", optionD: "Subject to VAT", correctOption: "B", explanation: "These institutions are typically tax-exempt.", orderIndex: 5 },
  { id: "cfa3-institutional-foundations-q07", topicId: "cfa3-institutional-foundations", text: "A constraint created by large illiquid alternatives allocations is:", optionA: "No liquidity issues", optionB: "Reduced liquidity to meet spending in stress", optionC: "Higher taxes", optionD: "Shorter horizon", correctOption: "B", explanation: "Heavy private/illiquid holdings can strain liquidity when distributions are due in downturns.", orderIndex: 6 },
  { id: "cfa3-institutional-foundations-q08", topicId: "cfa3-institutional-foundations", text: "The geometric (Yale) spending rule weights:", optionA: "Only current market value", optionB: "Prior spending (inflation-adjusted) and a % of current market value", optionC: "The risk-free rate", optionD: "Coupons", correctOption: "B", explanation: "The Yale rule blends last year's spending and a percentage of market value to stabilize payouts.", orderIndex: 7 },
  { id: "cfa3-institutional-foundations-q09", topicId: "cfa3-institutional-foundations", text: "Endowments aim to preserve the corpus's ____ value over time.", optionA: "Nominal", optionB: "Real (inflation-adjusted)", optionC: "Book", optionD: "Par", correctOption: "B", explanation: "They target maintaining the inflation-adjusted (real) value to support spending forever.", orderIndex: 8 },
  { id: "cfa3-institutional-foundations-q10", topicId: "cfa3-institutional-foundations", text: "A simple percentage-of-beginning-assets spending rule is criticized for:", optionA: "Smoothing spending too much", optionB: "Volatile spending tied to market swings", optionC: "Ignoring assets", optionD: "Being illegal", correctOption: "B", explanation: "Tying spending to current asset values makes distributions swing with markets.", orderIndex: 9 },
  { id: "cfa3-institutional-foundations-q11", topicId: "cfa3-institutional-foundations", text: "Donor restrictions on gifts are an example of which constraint?", optionA: "Legal/regulatory (and unique)", optionB: "Time horizon", optionC: "Taxes", optionD: "Beta", correctOption: "A", explanation: "Donor-imposed restrictions create legal/unique constraints on how funds may be invested/spent.", orderIndex: 10 },
  { id: "cfa3-institutional-foundations-q12", topicId: "cfa3-institutional-foundations", text: "Compared with a foundation, a university endowment's spending also funds:", optionA: "A meaningful share of the operating budget", optionB: "Only grants", optionC: "Nothing", optionD: "Taxes", correctOption: "A", explanation: "University endowments often support a significant portion of the institution's operating budget.", orderIndex: 11 },

  // Insurance companies
  { id: "cfa3-institutional-insurance-q01", topicId: "cfa3-institutional-insurance", text: "Insurance companies are fundamentally:", optionA: "Liability-driven investors", optionB: "Return-maximizing with no liabilities", optionC: "Tax-exempt always", optionD: "Short-horizon traders", correctOption: "A", explanation: "Insurers invest to fund future claims, making them liability-driven and heavily regulated.", orderIndex: 0 },
  { id: "cfa3-institutional-insurance-q02", topicId: "cfa3-institutional-insurance", text: "Life insurers' liabilities are typically:", optionA: "Short and lumpy", optionB: "Long-duration and relatively predictable", optionC: "Zero", optionD: "Equity-like", correctOption: "B", explanation: "Life liabilities are long-dated and fairly predictable, favoring long bonds and ALM.", orderIndex: 1 },
  { id: "cfa3-institutional-insurance-q03", topicId: "cfa3-institutional-insurance", text: "Property-casualty insurers, versus life insurers, need:", optionA: "Less liquidity", optionB: "More liquidity (claims are lumpy/uncertain)", optionC: "Longer-duration assets", optionD: "No bonds", correctOption: "B", explanation: "P&C claims (e.g., catastrophes) are uncertain and lumpy, requiring higher liquidity and shorter assets.", orderIndex: 2 },
  { id: "cfa3-institutional-insurance-q04", topicId: "cfa3-institutional-insurance", text: "A key risk for life insurers is:", optionA: "Interest-rate/disintermediation risk", optionB: "Catastrophe risk only", optionC: "No risk", optionD: "Equity-only risk", correctOption: "A", explanation: "Rate moves affect both asset values and policyholder behavior (disintermediation), a core life-insurer risk.", orderIndex: 3 },
  { id: "cfa3-institutional-insurance-q05", topicId: "cfa3-institutional-insurance", text: "Insurers generally have a ____ risk tolerance for reserves backing liabilities.", optionA: "High", optionB: "Low (protect solvency/policyholders)", optionC: "Unlimited", optionD: "Negative", correctOption: "B", explanation: "Reserves are invested conservatively to protect policyholders and meet solvency requirements.", orderIndex: 4 },
  { id: "cfa3-institutional-insurance-q06", topicId: "cfa3-institutional-insurance", text: "Regulatory capital regimes (e.g., RBC, Solvency II) influence insurers by:", optionA: "Encouraging only equities", optionB: "Driving asset choices toward higher-quality/liquid holdings", optionC: "Removing all constraints", optionD: "Eliminating ALM", correctOption: "B", explanation: "Capital rules penalize risky assets, steering insurers toward high-grade, liquid securities.", orderIndex: 5 },
  { id: "cfa3-institutional-insurance-q07", topicId: "cfa3-institutional-insurance", text: "The insurer's 'float' refers to:", optionA: "Premiums invested before claims are paid", optionB: "A type of bond", optionC: "Equity capital", optionD: "A derivative", correctOption: "A", explanation: "Float is the premium money held and invested until claims come due.", orderIndex: 6 },
  { id: "cfa3-institutional-insurance-q08", topicId: "cfa3-institutional-insurance", text: "A life insurer's surplus portfolio, vs reserves, can:", optionA: "Take more investment risk (e.g., equities)", optionB: "Take less risk", optionC: "Hold only cash", optionD: "Not be invested", correctOption: "A", explanation: "Surplus (capital beyond reserves) can bear more risk than the assets backing liabilities.", orderIndex: 7 },
  { id: "cfa3-institutional-insurance-q09", topicId: "cfa3-institutional-insurance", text: "Asset-liability management for insurers focuses on:", optionA: "Maximizing turnover", optionB: "Matching asset and liability cash flows/durations", optionC: "Currency speculation", optionD: "Ignoring liabilities", correctOption: "B", explanation: "ALM aligns the timing/duration of assets with liabilities to manage interest-rate risk.", orderIndex: 8 },
  { id: "cfa3-institutional-insurance-q10", topicId: "cfa3-institutional-insurance", text: "P&C insurers typically hold ____ duration assets than life insurers.", optionA: "Longer", optionB: "Shorter", optionC: "Identical", optionD: "Zero", correctOption: "B", explanation: "Shorter, uncertain P&C liabilities call for shorter-duration, more liquid assets.", orderIndex: 9 },
  { id: "cfa3-institutional-insurance-q11", topicId: "cfa3-institutional-insurance", text: "Insurers are generally:", optionA: "Tax-exempt", optionB: "Taxable, with complex tax rules", optionC: "Subject to no regulation", optionD: "Individuals", correctOption: "B", explanation: "Insurance companies are taxable entities facing complex, regime-specific tax treatment.", orderIndex: 10 },
  { id: "cfa3-institutional-insurance-q12", topicId: "cfa3-institutional-insurance", text: "Credit quality is emphasized in insurer portfolios mainly to:", optionA: "Maximize yield at any risk", optionB: "Protect solvency and meet capital requirements", optionC: "Increase turnover", optionD: "Avoid bonds", correctOption: "B", explanation: "High credit quality supports solvency and reduces regulatory capital charges.", orderIndex: 11 },

  // Banks & ALM
  { id: "cfa3-institutional-banks-q01", topicId: "cfa3-institutional-banks", text: "A bank's securities portfolio is primarily managed to:", optionA: "Maximize return at any risk", optionB: "Provide liquidity and manage the duration gap (ALM)", optionC: "Speculate on equities", optionD: "Avoid regulation", correctOption: "B", explanation: "The securities book serves liquidity, collateral, and interest-rate (ALM) management within regulatory limits.", orderIndex: 0 },
  { id: "cfa3-institutional-banks-q02", topicId: "cfa3-institutional-banks", text: "The duration gap is the mismatch between the durations of a bank's:", optionA: "Assets and liabilities", optionB: "Equity and debt only", optionC: "Two benchmarks", optionD: "Loans and dividends", correctOption: "A", explanation: "ALM manages the gap between asset (loans/securities) and liability (deposits/borrowings) durations.", orderIndex: 1 },
  { id: "cfa3-institutional-banks-q03", topicId: "cfa3-institutional-banks", text: "Banks favor high-quality, liquid securities partly because:", optionA: "They have the highest yield", optionB: "Regulatory (Basel) rules and liquidity needs reward them", optionC: "They are tax-free", optionD: "They have no duration", correctOption: "B", explanation: "Capital/liquidity rules (risk weights, LCR/NSFR) steer banks toward governments/agencies.", orderIndex: 2 },
  { id: "cfa3-institutional-banks-q04", topicId: "cfa3-institutional-banks", text: "Net interest margin is the difference between:", optionA: "Interest earned on assets and interest paid on liabilities", optionB: "Dividends and coupons", optionC: "Two benchmarks", optionD: "Equity and debt", correctOption: "A", explanation: "NIM measures the spread the bank earns between its assets' yield and its funding cost.", orderIndex: 3 },
  { id: "cfa3-institutional-banks-q05", topicId: "cfa3-institutional-banks", text: "The risk tolerance of a bank's securities book is generally:", optionA: "High", optionB: "Low (it backs deposits and regulatory needs)", optionC: "Unlimited", optionD: "Negative", correctOption: "B", explanation: "Because it supports liquidity and capital requirements, the securities portfolio is conservative.", orderIndex: 4 },
  { id: "cfa3-institutional-banks-q06", topicId: "cfa3-institutional-banks", text: "Banks use interest-rate swaps and futures to:", optionA: "Speculate on equities", optionB: "Manage the duration gap / interest-rate risk", optionC: "Avoid taxes", optionD: "Increase the NIM with no risk", correctOption: "B", explanation: "Derivatives adjust the duration gap and hedge interest-rate risk efficiently.", orderIndex: 5 },
  { id: "cfa3-institutional-banks-q07", topicId: "cfa3-institutional-banks", text: "A positive duration gap (assets longer than liabilities) means rising rates will:", optionA: "Increase the bank's net worth", optionB: "Decrease the bank's economic net worth", optionC: "Have no effect", optionD: "Raise the NIM immediately", correctOption: "B", explanation: "If assets are more rate-sensitive (longer) than liabilities, rising rates lower asset values more, reducing net worth.", orderIndex: 6 },
  { id: "cfa3-institutional-banks-q08", topicId: "cfa3-institutional-banks", text: "Liquidity regulations affecting banks include the:", optionA: "LCR and NSFR", optionB: "P/E ratio", optionC: "Sharpe ratio", optionD: "Cap rate", correctOption: "A", explanation: "The Liquidity Coverage Ratio and Net Stable Funding Ratio are key Basel liquidity rules.", orderIndex: 7 },
  { id: "cfa3-institutional-banks-q09", topicId: "cfa3-institutional-banks", text: "Banks are generally:", optionA: "Tax-exempt", optionB: "Taxable", optionC: "Individuals", optionD: "Unregulated", correctOption: "B", explanation: "Banks are taxable, regulated entities.", orderIndex: 8 },
  { id: "cfa3-institutional-banks-q10", topicId: "cfa3-institutional-banks", text: "The bank securities portfolio also provides:", optionA: "Collateral for borrowing and regulatory liquidity", optionB: "Only dividend income", optionC: "Equity upside only", optionD: "No function", correctOption: "A", explanation: "High-quality securities serve as collateral and count toward liquidity requirements.", orderIndex: 9 },
  { id: "cfa3-institutional-banks-q11", topicId: "cfa3-institutional-banks", text: "Managing the duration gap toward zero aims to:", optionA: "Maximize interest-rate risk", optionB: "Immunize net worth against interest-rate moves", optionC: "Increase turnover", optionD: "Avoid all bonds", correctOption: "B", explanation: "A zero duration gap makes the bank's net worth approximately insensitive to small rate changes.", orderIndex: 10 },
  { id: "cfa3-institutional-banks-q12", topicId: "cfa3-institutional-banks", text: "A bank's time horizon for its securities book is tied to its:", optionA: "Liability (deposit/funding) structure", optionB: "Dividend policy", optionC: "Equity beta", optionD: "Auditor", correctOption: "A", explanation: "The funding/liability structure drives the appropriate horizon and duration of the securities portfolio.", orderIndex: 11 },

  // Sovereign wealth funds
  { id: "cfa3-institutional-sovereign-q01", topicId: "cfa3-institutional-sovereign", text: "A budget-stabilization sovereign wealth fund typically has a:", optionA: "Long horizon and high risk tolerance", optionB: "Short horizon, low risk, high liquidity", optionC: "Perpetual horizon", optionD: "No objective", correctOption: "B", explanation: "Stabilization funds smooth revenue swings, so they stay short, conservative, and liquid.", orderIndex: 0 },
  { id: "cfa3-institutional-sovereign-q02", topicId: "cfa3-institutional-sovereign", text: "A savings/future-generations SWF generally has:", optionA: "A very long horizon and high risk tolerance", optionB: "A one-year horizon", optionC: "No risk tolerance", optionD: "Daily liquidity needs", correctOption: "A", explanation: "Savings funds preserve wealth across generations, allowing long horizons and aggressive allocations.", orderIndex: 1 },
  { id: "cfa3-institutional-sovereign-q03", topicId: "cfa3-institutional-sovereign", text: "A development SWF aims to:", optionA: "Fund domestic economic projects", optionB: "Smooth budget revenue", optionC: "Hold only cash", optionD: "Pay dividends", correctOption: "A", explanation: "Development funds invest to support domestic economic development goals.", orderIndex: 2 },
  { id: "cfa3-institutional-sovereign-q04", topicId: "cfa3-institutional-sovereign", text: "A reserve-investment SWF is created to:", optionA: "Earn higher returns on excess FX reserves", optionB: "Pay current pensions", optionC: "Fund a single project", optionD: "Avoid taxes", correctOption: "A", explanation: "Reserve-investment funds seek better returns on reserves beyond traditional liquidity holdings.", orderIndex: 3 },
  { id: "cfa3-institutional-sovereign-q05", topicId: "cfa3-institutional-sovereign", text: "A pension-reserve SWF is liability-aware because it:", optionA: "Pre-funds future pension obligations", optionB: "Has no liabilities", optionC: "Is a stabilization fund", optionD: "Holds only equities", correctOption: "A", explanation: "Pension reserve funds set aside assets to meet future pension liabilities, so they consider those liabilities.", orderIndex: 4 },
  { id: "cfa3-institutional-sovereign-q06", topicId: "cfa3-institutional-sovereign", text: "Long-horizon savings SWFs most resemble:", optionA: "Liquidity reserves", optionB: "Endowments (equity/alternatives heavy)", optionC: "Banks", optionD: "P&C insurers", correctOption: "B", explanation: "Their perpetual, growth-oriented mandate mirrors the endowment model.", orderIndex: 5 },
  { id: "cfa3-institutional-sovereign-q07", topicId: "cfa3-institutional-sovereign", text: "Stabilization funds most resemble:", optionA: "Endowments", optionB: "Short-duration liquidity reserves", optionC: "Equity hedge funds", optionD: "Private equity", correctOption: "B", explanation: "Their need to deploy funds on short notice makes them like conservative liquidity portfolios.", orderIndex: 6 },
  { id: "cfa3-institutional-sovereign-q08", topicId: "cfa3-institutional-sovereign", text: "The Santiago Principles relate to SWF:", optionA: "Tax rates", optionB: "Governance and transparency best practices", optionC: "Currency hedging", optionD: "Duration matching", correctOption: "B", explanation: "The Santiago Principles set voluntary governance/transparency standards for sovereign wealth funds.", orderIndex: 7 },
  { id: "cfa3-institutional-sovereign-q09", topicId: "cfa3-institutional-sovereign", text: "A key non-financial constraint for SWFs is:", optionA: "Political scrutiny and governance", optionB: "Dividend dates", optionC: "Coupon schedules", optionD: "Beta limits", correctOption: "A", explanation: "Political oversight, governance, and transparency are significant constraints for state-owned funds.", orderIndex: 8 },
  { id: "cfa3-institutional-sovereign-q10", topicId: "cfa3-institutional-sovereign", text: "Liquidity needs are highest for which SWF type?", optionA: "Savings", optionB: "Budget stabilization", optionC: "Development", optionD: "Pension reserve", correctOption: "B", explanation: "Stabilization funds must be ready to deploy on short notice, so liquidity needs are highest.", orderIndex: 9 },
  { id: "cfa3-institutional-sovereign-q11", topicId: "cfa3-institutional-sovereign", text: "A resource-rich country smoothing oil-revenue swings would use a:", optionA: "Stabilization fund", optionB: "Pension reserve fund", optionC: "Development bank loan", optionD: "Hedge fund", correctOption: "A", explanation: "Stabilization funds buffer government budgets against commodity-revenue volatility.", orderIndex: 10 },
  { id: "cfa3-institutional-sovereign-q12", topicId: "cfa3-institutional-sovereign", text: "The objective and risk profile of an SWF depend mainly on its:", optionA: "Type/purpose", optionB: "Currency only", optionC: "Auditor", optionD: "Coupon", correctOption: "A", explanation: "Each SWF type (stabilization, savings, development, reserve, pension) implies a distinct horizon/risk profile.", orderIndex: 11 },

  // Code of ethics & the seven standards
  { id: "cfa3-ethics-code-standards-q01", topicId: "cfa3-ethics-code-standards", text: "When local law is less strict than the Code and Standards, members must follow:", optionA: "Local law", optionB: "The stricter (Code and Standards)", optionC: "Neither", optionD: "Client preference", correctOption: "B", explanation: "Standard I(A) requires adhering to the stricter of applicable law or the Code and Standards.", orderIndex: 0 },
  { id: "cfa3-ethics-code-standards-q02", topicId: "cfa3-ethics-code-standards", text: "Standard II concerns:", optionA: "Integrity of capital markets (MNPI, manipulation)", optionB: "Duties to employers", optionC: "Conflicts of interest", optionD: "Professionalism", correctOption: "A", explanation: "Standard II covers material nonpublic information and market manipulation.", orderIndex: 1 },
  { id: "cfa3-ethics-code-standards-q03", topicId: "cfa3-ethics-code-standards", text: "Suitability falls under which Standard?", optionA: "III Duties to Clients", optionB: "I Professionalism", optionC: "VI Conflicts", optionD: "VII Member responsibilities", correctOption: "A", explanation: "Suitability is Standard III(C), part of Duties to Clients.", orderIndex: 2 },
  { id: "cfa3-ethics-code-standards-q04", topicId: "cfa3-ethics-code-standards", text: "Record retention and diligence/reasonable basis are under Standard:", optionA: "V Investment Analysis, Recommendations & Actions", optionB: "II Integrity of Capital Markets", optionC: "IV Duties to Employers", optionD: "VI Conflicts", correctOption: "A", explanation: "Standard V covers diligence/reasonable basis, communication, and record retention.", orderIndex: 3 },
  { id: "cfa3-ethics-code-standards-q05", topicId: "cfa3-ethics-code-standards", text: "Priority of transactions is part of Standard:", optionA: "VI Conflicts of Interest", optionB: "I Professionalism", optionC: "III Duties to Clients", optionD: "VII Member responsibilities", correctOption: "A", explanation: "Priority of transactions is Standard VI(B).", orderIndex: 4 },
  { id: "cfa3-ethics-code-standards-q06", topicId: "cfa3-ethics-code-standards", text: "Conduct in the CFA Program is governed by Standard:", optionA: "VII Responsibilities as a Member/Candidate", optionB: "I Professionalism", optionC: "V Investment Analysis", optionD: "III Duties to Clients", correctOption: "A", explanation: "Standard VII addresses conduct that could compromise CFA Institute or the program.", orderIndex: 5 },
  { id: "cfa3-ethics-code-standards-q07", topicId: "cfa3-ethics-code-standards", text: "Independence and objectivity is part of Standard:", optionA: "I Professionalism", optionB: "II Integrity of Markets", optionC: "IV Employers", optionD: "VI Conflicts", correctOption: "A", explanation: "Independence and objectivity is Standard I(B).", orderIndex: 6 },
  { id: "cfa3-ethics-code-standards-q08", topicId: "cfa3-ethics-code-standards", text: "Loyalty to employer and supervisory responsibilities are under Standard:", optionA: "IV Duties to Employers", optionB: "III Duties to Clients", optionC: "I Professionalism", optionD: "V Investment Analysis", correctOption: "A", explanation: "Standard IV covers loyalty, additional compensation, and supervisor responsibilities.", orderIndex: 7 },
  { id: "cfa3-ethics-code-standards-q09", topicId: "cfa3-ethics-code-standards", text: "The most heavily weighted topic area across all CFA levels is:", optionA: "Derivatives", optionB: "Ethics and Professional Standards", optionC: "Economics", optionD: "Alternative investments", correctOption: "B", explanation: "Ethics is consistently the most heavily tested area at every level.", orderIndex: 8 },
  { id: "cfa3-ethics-code-standards-q10", topicId: "cfa3-ethics-code-standards", text: "The recommended approach to an ethics vignette is to:", optionA: "Pick the first plausible answer", optionB: "Map actions to the precise sub-standard and choose the least-compliant", optionC: "Ignore the facts", optionD: "Assume all actions comply", correctOption: "B", explanation: "Identify each action, match it to the relevant sub-standard, then select the least compliant choice.", orderIndex: 9 },
  { id: "cfa3-ethics-code-standards-q11", topicId: "cfa3-ethics-code-standards", text: "The Code of Ethics differs from the Standards in that the Code:", optionA: "Provides specific rules", optionB: "States the broad ethical principles", optionC: "Is optional", optionD: "Applies only to candidates", correctOption: "B", explanation: "The Code states principles; the Standards translate them into specific, actionable conduct rules.", orderIndex: 10 },
  { id: "cfa3-ethics-code-standards-q12", topicId: "cfa3-ethics-code-standards", text: "If a member knows of an ongoing violation of law, they should:", optionA: "Participate", optionB: "Dissociate from the activity", optionC: "Ignore it", optionD: "Profit from it", correctOption: "B", explanation: "Standard I(A) requires members to dissociate from known violations.", orderIndex: 11 },

  // Professionalism & market integrity (I & II) — L3
  { id: "cfa3-ethics-professionalism-q01", topicId: "cfa3-ethics-professionalism", text: "Accepting lavish, influence-seeking gifts from a covered company risks violating:", optionA: "I(B) Independence and Objectivity", optionB: "II(B) Manipulation", optionC: "V(C) Records", optionD: "VII Conduct", correctOption: "A", explanation: "Lavish benefits that could bias judgment threaten independence and objectivity.", orderIndex: 0 },
  { id: "cfa3-ethics-professionalism-q02", topicId: "cfa3-ethics-professionalism", text: "Trading on material nonpublic information violates:", optionA: "II(A) Material Nonpublic Information", optionB: "I(C) Misrepresentation", optionC: "IV(A) Loyalty", optionD: "VI(B) Priority", correctOption: "A", explanation: "Acting on MNPI breaches Standard II(A).", orderIndex: 1 },
  { id: "cfa3-ethics-professionalism-q03", topicId: "cfa3-ethics-professionalism", text: "The mosaic theory permits combining:", optionA: "Insider tips and rumors", optionB: "Public and non-material nonpublic information", optionC: "Two material nonpublic items", optionD: "Client and personal trades", correctOption: "B", explanation: "Conclusions from public plus non-material nonpublic information are permissible under the mosaic theory.", orderIndex: 2 },
  { id: "cfa3-ethics-professionalism-q04", topicId: "cfa3-ethics-professionalism", text: "Wash trades and spoofing are examples of:", optionA: "Market manipulation [II(B)]", optionB: "Fair dealing", optionC: "Diligence", optionD: "Record retention", correctOption: "A", explanation: "Transaction-based manipulation (wash trades, spoofing) violates II(B).", orderIndex: 3 },
  { id: "cfa3-ethics-professionalism-q05", topicId: "cfa3-ethics-professionalism", text: "Plagiarizing another's report violates:", optionA: "I(C) Misrepresentation", optionB: "II(A) MNPI", optionC: "IV(A) Loyalty", optionD: "VI(C) Referral fees", correctOption: "A", explanation: "Plagiarism is a misrepresentation under Standard I(C).", orderIndex: 4 },
  { id: "cfa3-ethics-professionalism-q06", topicId: "cfa3-ethics-professionalism", text: "Firewalls are a recommended procedure to comply with:", optionA: "II(A) Material Nonpublic Information", optionB: "III(C) Suitability", optionC: "V(C) Records", optionD: "VI(B) Priority", correctOption: "A", explanation: "Information barriers prevent improper flow/use of MNPI, supporting II(A).", orderIndex: 5 },
  { id: "cfa3-ethics-professionalism-q07", topicId: "cfa3-ethics-professionalism", text: "Guaranteeing a specific return on a volatile fund violates:", optionA: "I(C) Misrepresentation", optionB: "II(A) MNPI", optionC: "IV(B) Compensation", optionD: "VI(A) Disclosure", correctOption: "A", explanation: "Promising a return on a risky investment is a misrepresentation under I(C).", orderIndex: 6 },
  { id: "cfa3-ethics-professionalism-q08", topicId: "cfa3-ethics-professionalism", text: "A 'pump-and-dump' scheme is:", optionA: "Information-based market manipulation", optionB: "Fair dealing", optionC: "Suitability analysis", optionD: "Independence", correctOption: "A", explanation: "Spreading false positives to inflate a price then selling is information-based manipulation [II(B)].", orderIndex: 7 },
  { id: "cfa3-ethics-professionalism-q09", topicId: "cfa3-ethics-professionalism", text: "A modest meal and a branded pen at an investor day are:", optionA: "A violation requiring client disclosure", optionB: "Acceptable token items", optionC: "Market manipulation", optionD: "Misconduct", correctOption: "B", explanation: "Token items unlikely to bias judgment are acceptable; the concern is lavish/influence-seeking benefits.", orderIndex: 8 },
  { id: "cfa3-ethics-professionalism-q10", topicId: "cfa3-ethics-professionalism", text: "Dishonesty or fraud reflecting on professional integrity violates:", optionA: "I(D) Misconduct", optionB: "II(A) MNPI", optionC: "III(B) Fair Dealing", optionD: "VI(A) Disclosure", correctOption: "A", explanation: "Standard I(D) Misconduct addresses dishonest/fraudulent conduct affecting professional reputation.", orderIndex: 9 },
  { id: "cfa3-ethics-professionalism-q11", topicId: "cfa3-ethics-professionalism", text: "Using recognized government statistical data without attribution is:", optionA: "Always plagiarism", optionB: "Permitted (factual/statistical data need not be cited)", optionC: "A violation of independence", optionD: "Manipulation", correctOption: "B", explanation: "Recognized factual/statistical data may be used without attribution; plagiarism concerns others' analysis.", orderIndex: 10 },
  { id: "cfa3-ethics-professionalism-q12", topicId: "cfa3-ethics-professionalism", text: "Pressure from an employer to issue a biased rating should be:", optionA: "Followed", optionB: "Resisted to maintain independence and objectivity [I(B)]", optionC: "Disclosed only to the SEC", optionD: "Ignored", correctOption: "B", explanation: "Members must keep independent, objective opinions despite internal pressure.", orderIndex: 11 },

  // Duties to clients (Standard III)
  { id: "cfa3-ethics-duties-clients-q01", topicId: "cfa3-ethics-duties-clients", text: "Under III(A), a pension manager's loyalty runs primarily to the:", optionA: "Plan sponsor's executives", optionB: "Plan beneficiaries", optionC: "Brokerage firm", optionD: "Regulator", correctOption: "B", explanation: "Loyalty, Prudence and Care requires acting for the ultimate beneficiaries.", orderIndex: 0 },
  { id: "cfa3-ethics-duties-clients-q02", topicId: "cfa3-ethics-duties-clients", text: "Tipping a favored client before others violates:", optionA: "III(B) Fair Dealing", optionB: "I(B) Independence", optionC: "VI(B) Priority", optionD: "IV(A) Loyalty", correctOption: "A", explanation: "Fair Dealing requires fair dissemination of recommendations and changes.", orderIndex: 1 },
  { id: "cfa3-ethics-duties-clients-q03", topicId: "cfa3-ethics-duties-clients", text: "Suitability [III(C)] requires matching recommendations to the client's:", optionA: "Objectives and constraints (IPS)", optionB: "Broker's targets", optionC: "Country only", optionD: "Tax bracket only", correctOption: "A", explanation: "Suitability ties recommendations to each client's IPS and, in advisory relationships, the total portfolio.", orderIndex: 2 },
  { id: "cfa3-ethics-duties-clients-q04", topicId: "cfa3-ethics-duties-clients", text: "Performance presentation [III(D)] must be:", optionA: "Cherry-picked", optionB: "Fair, accurate and complete", optionC: "Only the best account", optionD: "Hypothetical", correctOption: "B", explanation: "Performance must be presented fairly, accurately, and completely.", orderIndex: 3 },
  { id: "cfa3-ethics-duties-clients-q05", topicId: "cfa3-ethics-duties-clients", text: "Confidentiality [III(E)] applies to:", optionA: "Only current clients", optionB: "Current, former, and prospective clients", optionC: "No one", optionD: "Competitors", correctOption: "B", explanation: "Confidentiality extends to current, former, and prospective clients (subject to legal exceptions).", orderIndex: 4 },
  { id: "cfa3-ethics-duties-clients-q06", topicId: "cfa3-ethics-duties-clients", text: "Soft dollars (client brokerage) must be used:", optionA: "For firm overhead", optionB: "For the client's benefit (research)", optionC: "For personal travel", optionD: "However the manager wishes", correctOption: "B", explanation: "Client brokerage belongs to the client and must fund research benefiting the investment process.", orderIndex: 5 },
  { id: "cfa3-ethics-duties-clients-q07", topicId: "cfa3-ethics-duties-clients", text: "Best execution must not be sacrificed to:", optionA: "Reduce client taxes", optionB: "Direct soft-dollar business to a broker", optionC: "Comply with the law", optionD: "Diversify", correctOption: "B", explanation: "Managers must seek best execution; soft-dollar arrangements cannot override it.", orderIndex: 6 },
  { id: "cfa3-ethics-duties-clients-q08", topicId: "cfa3-ethics-duties-clients", text: "Confidential client information may be disclosed when:", optionA: "A friend asks", optionB: "Legally required or concerning illegal activity", optionC: "It benefits the manager", optionD: "Never", correctOption: "B", explanation: "Disclosure is permitted when required by law or to report illegal client activity.", orderIndex: 7 },
  { id: "cfa3-ethics-duties-clients-q09", topicId: "cfa3-ethics-duties-clients", text: "Fair dealing requires that recommendation changes be communicated:", optionA: "To large clients first", optionB: "Fairly to all clients", optionC: "Only to the manager's account", optionD: "After trading personally", correctOption: "B", explanation: "All clients must be treated fairly when disseminating changes.", orderIndex: 8 },
  { id: "cfa3-ethics-duties-clients-q10", topicId: "cfa3-ethics-duties-clients", text: "In an advisory relationship, suitability considers the:", optionA: "Single trade alone", optionB: "Client's total portfolio", optionC: "Manager's portfolio", optionD: "Benchmark only", correctOption: "B", explanation: "Suitability is judged in the context of the client's overall portfolio, not the trade in isolation.", orderIndex: 9 },
  { id: "cfa3-ethics-duties-clients-q11", topicId: "cfa3-ethics-duties-clients", text: "Loyalty, Prudence and Care requires the manager to:", optionA: "Favor the employer", optionB: "Act with reasonable care in the client's interest", optionC: "Maximize commissions", optionD: "Trade ahead of clients", correctOption: "B", explanation: "III(A) requires prudence and care, placing the client's interest first.", orderIndex: 10 },
  { id: "cfa3-ethics-duties-clients-q12", topicId: "cfa3-ethics-duties-clients", text: "Selectively presenting only top-performing composites violates:", optionA: "III(D) Performance Presentation", optionB: "II(A) MNPI", optionC: "I(A) Knowledge of Law", optionD: "VI(C) Referral Fees", correctOption: "A", explanation: "Cherry-picking performance breaches the fair, accurate, complete requirement of III(D).", orderIndex: 11 },

  // Conflicts & priority of transactions (VI)
  { id: "cfa3-ethics-conflicts-q01", topicId: "cfa3-ethics-conflicts", text: "Standard VI(A) requires members to ____ conflicts of interest.", optionA: "Conceal", optionB: "Fully and fairly disclose", optionC: "Ignore if small", optionD: "Disclose only to regulators", correctOption: "B", explanation: "Conflicts must be disclosed prominently, fully, and fairly in plain language.", orderIndex: 0 },
  { id: "cfa3-ethics-conflicts-q02", topicId: "cfa3-ethics-conflicts", text: "Priority of transactions [VI(B)] requires that:", optionA: "The member trades first", optionB: "Client and employer trades take precedence over the member's own", optionC: "All trades are simultaneous", optionD: "Personal trades are banned entirely", correctOption: "B", explanation: "Clients and the employer come before the member's personal transactions.", orderIndex: 1 },
  { id: "cfa3-ethics-conflicts-q03", topicId: "cfa3-ethics-conflicts", text: "Referral fees [VI(C)] must be disclosed to:", optionA: "Clients and the employer", optionB: "Only the regulator", optionC: "No one", optionD: "Competitors", correctOption: "A", explanation: "Disclosing referral compensation lets clients assess potential bias.", orderIndex: 2 },
  { id: "cfa3-ethics-conflicts-q04", topicId: "cfa3-ethics-conflicts", text: "Taking a desirable IPO allocation ahead of clients violates:", optionA: "VI(B) Priority of Transactions", optionB: "III(D) Performance", optionC: "I(A) Knowledge of Law", optionD: "IV(C) Supervisors", correctOption: "A", explanation: "Members must not take attractive allocations ahead of clients.", orderIndex: 3 },
  { id: "cfa3-ethics-conflicts-q05", topicId: "cfa3-ethics-conflicts", text: "Recommended procedures for personal trading include:", optionA: "No rules", optionB: "Restricted lists, pre-clearance, and blackout periods", optionC: "Front-running", optionD: "Trading ahead of clients", correctOption: "B", explanation: "These controls help comply with VI(B) priority of transactions.", orderIndex: 4 },
  { id: "cfa3-ethics-conflicts-q06", topicId: "cfa3-ethics-conflicts", text: "A board seat at a covered company should be:", optionA: "Hidden", optionB: "Disclosed under VI(A)", optionC: "Disclosed only to the board", optionD: "Ignored if unpaid", correctOption: "B", explanation: "Board membership can impair objectivity and must be disclosed as a conflict.", orderIndex: 5 },
  { id: "cfa3-ethics-conflicts-q07", topicId: "cfa3-ethics-conflicts", text: "The default remedy for a conflict of interest is:", optionA: "Concealment", optionB: "Full disclosure and proper management", optionC: "Resignation always", optionD: "Ignoring it", correctOption: "B", explanation: "Conflicts are addressed by disclosing and managing them.", orderIndex: 6 },
  { id: "cfa3-ethics-conflicts-q08", topicId: "cfa3-ethics-conflicts", text: "A compensation structure that could bias a recommendation is:", optionA: "Not a conflict", optionB: "A disclosable conflict under VI(A)", optionC: "Manipulation", optionD: "Misconduct", correctOption: "B", explanation: "Compensation arrangements that may affect objectivity must be disclosed.", orderIndex: 7 },
  { id: "cfa3-ethics-conflicts-q09", topicId: "cfa3-ethics-conflicts", text: "Disclosure of a conflict should be:", optionA: "Buried in fine print", optionB: "Prominent and in plain language", optionC: "Verbal only", optionD: "After trading", correctOption: "B", explanation: "Disclosures must be clear and understandable so recipients can evaluate the conflict.", orderIndex: 8 },
  { id: "cfa3-ethics-conflicts-q10", topicId: "cfa3-ethics-conflicts", text: "Standard IV(B) Additional Compensation requires:", optionA: "No action", optionB: "Written consent for outside compensation that competes with the employer", optionC: "Only verbal notice", optionD: "Client disclosure only", correctOption: "B", explanation: "Members need written consent for competing additional compensation arrangements.", orderIndex: 9 },
  { id: "cfa3-ethics-conflicts-q11", topicId: "cfa3-ethics-conflicts", text: "Supervisors [IV(C)] must take reasonable steps to:", optionA: "Maximize trades", optionB: "Prevent and detect violations by those they supervise", optionC: "Avoid compliance", optionD: "Hide conflicts", correctOption: "B", explanation: "Supervisory responsibility requires adequate procedures to prevent/detect violations.", orderIndex: 10 },
  { id: "cfa3-ethics-conflicts-q12", topicId: "cfa3-ethics-conflicts", text: "Personal-trading rules ensure members do not:", optionA: "Benefit clients", optionB: "Disadvantage clients through their own trades", optionC: "Disclose conflicts", optionD: "Keep records", correctOption: "B", explanation: "VI(B) protects clients from being disadvantaged by a member's personal transactions.", orderIndex: 11 },

  // Application of the code & standards (cases)
  { id: "cfa3-ethics-application-cases-q01", topicId: "cfa3-ethics-application-cases", text: "The first step in analyzing an ethics vignette is to:", optionA: "Pick the longest answer", optionB: "Identify the actors and actions", optionC: "Assume compliance", optionD: "Skip the facts", correctOption: "B", explanation: "Start by identifying who did what before mapping to the standards.", orderIndex: 0 },
  { id: "cfa3-ethics-application-cases-q02", topicId: "cfa3-ethics-application-cases", text: "Taking a client list to a new employer maps to:", optionA: "IV(A) Loyalty to Employer", optionB: "II(A) MNPI", optionC: "III(C) Suitability", optionD: "VI(C) Referral Fees", correctOption: "A", explanation: "Client lists/records are the employer's property; taking them breaches IV(A).", orderIndex: 1 },
  { id: "cfa3-ethics-application-cases-q03", topicId: "cfa3-ethics-application-cases", text: "Acting on a friend's tip about an unannounced merger maps to:", optionA: "II(A) Material Nonpublic Information", optionB: "III(B) Fair Dealing", optionC: "I(B) Independence", optionD: "V(C) Records", correctOption: "A", explanation: "Trading on material nonpublic information violates II(A).", orderIndex: 2 },
  { id: "cfa3-ethics-application-cases-q04", topicId: "cfa3-ethics-application-cases", text: "A gift from a client for past performance should be:", optionA: "Declined always", optionB: "Disclosed to the employer", optionC: "Hidden", optionD: "Returned with interest", correctOption: "B", explanation: "Client gifts for prior work are permitted but must be disclosed to the employer.", orderIndex: 3 },
  { id: "cfa3-ethics-application-cases-q05", topicId: "cfa3-ethics-application-cases", text: "A gift/benefit from a third party seeking to influence research should be:", optionA: "Accepted freely", optionB: "Declined (or strictly limited)", optionC: "Disclosed only to clients", optionD: "Shared with the team", correctOption: "B", explanation: "Influence-seeking third-party benefits should be declined to protect independence.", orderIndex: 4 },
  { id: "cfa3-ethics-application-cases-q06", topicId: "cfa3-ethics-application-cases", text: "When law and the Code conflict, follow the:", optionA: "Less strict", optionB: "Stricter", optionC: "Local law always", optionD: "Code always", correctOption: "B", explanation: "Members must comply with the stricter of applicable law or the Code and Standards.", orderIndex: 5 },
  { id: "cfa3-ethics-application-cases-q07", topicId: "cfa3-ethics-application-cases", text: "Most ethics cases can be resolved by recommending procedures such as:", optionA: "Firewalls, restricted lists, disclosure, supervision", optionB: "Higher leverage", optionC: "More trading", optionD: "Ignoring conflicts", correctOption: "A", explanation: "Standard recommended procedures (controls/disclosure) typically resolve case scenarios.", orderIndex: 6 },
  { id: "cfa3-ethics-application-cases-q08", topicId: "cfa3-ethics-application-cases", text: "Claiming GIPS compliance for only the firm's best composites is:", optionA: "Acceptable", optionB: "A violation — GIPS compliance is firm-wide", optionC: "Required", optionD: "A tax strategy", correctOption: "B", explanation: "GIPS compliance must be firm-wide; partial/cherry-picked claims are prohibited.", orderIndex: 7 },
  { id: "cfa3-ethics-application-cases-q09", topicId: "cfa3-ethics-application-cases", text: "Using public reports plus your own non-material observations to reach a buy is:", optionA: "Permissible (mosaic theory)", optionB: "Insider trading", optionC: "Manipulation", optionD: "Misconduct", correctOption: "A", explanation: "The mosaic theory permits combining public and non-material nonpublic information.", orderIndex: 8 },
  { id: "cfa3-ethics-application-cases-q10", topicId: "cfa3-ethics-application-cases", text: "When choosing among answers, select the one that is:", optionA: "Most compliant / best remedies the issue", optionB: "Longest", optionC: "Most aggressive", optionD: "Cheapest", correctOption: "A", explanation: "Pick the most compliant action or best remedy (or identify the least-compliant act, per the question).", orderIndex: 9 },
  { id: "cfa3-ethics-application-cases-q11", topicId: "cfa3-ethics-application-cases", text: "Reasonable basis and diligence behind a recommendation is required by Standard:", optionA: "V(A)", optionB: "II(B)", optionC: "VI(A)", optionD: "IV(C)", correctOption: "A", explanation: "Standard V(A) requires a reasonable and adequate basis for recommendations and actions.", orderIndex: 10 },
  { id: "cfa3-ethics-application-cases-q12", topicId: "cfa3-ethics-application-cases", text: "Mixed-use research paid with client brokerage should be:", optionA: "Fully charged to clients", optionB: "Allocated, with only the research portion paid by client brokerage", optionC: "Charged entirely to the firm regardless", optionD: "Never disclosed", correctOption: "B", explanation: "Mixed-use products must be reasonably allocated; only the research portion may use client brokerage.", orderIndex: 11 },

  // Risk Management — Measuring & Managing Market Risk (VaR)
  { id: "cfa3-risk-management-market-risk-q01", topicId: "cfa3-risk-management-market-risk", text: "A 5% one-day VaR of $2m means:", optionA: "Losses will never exceed $2m", optionB: "On ~5% of days losses are expected to exceed $2m", optionC: "The portfolio will gain $2m 5% of the time", optionD: "Average daily loss is $2m", correctOption: "B", explanation: "VaR gives a threshold loss exceeded with the stated probability — here, on about 5% of days.", orderIndex: 0 },
  { id: "cfa3-risk-management-market-risk-q02", topicId: "cfa3-risk-management-market-risk", text: "The parametric (variance–covariance) VaR method primarily assumes:", optionA: "Returns are normally distributed", optionB: "No correlation among assets", optionC: "Zero volatility", optionD: "Returns are fat-tailed", correctOption: "A", explanation: "Parametric VaR assumes normally distributed returns, which makes it fast but prone to understating tail risk.", orderIndex: 1 },
  { id: "cfa3-risk-management-market-risk-q03", topicId: "cfa3-risk-management-market-risk", text: "Historical simulation VaR is computed by:", optionA: "Assuming a normal distribution", optionB: "Re-pricing the portfolio over an actual past return window", optionC: "Drawing random paths from a model", optionD: "Using only the latest day's return", correctOption: "B", explanation: "Historical simulation applies actual historical returns to the current portfolio, requiring no distributional assumption.", orderIndex: 2 },
  { id: "cfa3-risk-management-market-risk-q04", topicId: "cfa3-risk-management-market-risk", text: "A key weakness of VaR is that it:", optionA: "Says nothing about the size of losses beyond the threshold", optionB: "Cannot be computed", optionC: "Always overstates risk", optionD: "Requires no data", correctOption: "A", explanation: "VaR ignores the magnitude of tail losses past the cutoff, which is why expected shortfall complements it.", orderIndex: 3 },
  { id: "cfa3-risk-management-market-risk-q05", topicId: "cfa3-risk-management-market-risk", text: "Conditional VaR (expected shortfall) measures the:", optionA: "Probability of any loss", optionB: "Average loss given that the VaR threshold is exceeded", optionC: "Maximum possible gain", optionD: "Daily volatility", correctOption: "B", explanation: "CVaR/expected shortfall is the mean loss in the tail beyond VaR, capturing tail severity.", orderIndex: 4 },
  { id: "cfa3-risk-management-market-risk-q06", topicId: "cfa3-risk-management-market-risk", text: "Monte Carlo VaR is most useful when:", optionA: "The portfolio has complex, non-linear payoffs", optionB: "There is no computing power", optionC: "Returns are exactly normal", optionD: "Only one asset is held", correctOption: "A", explanation: "Monte Carlo simulation flexibly handles non-linear instruments like options, at the cost of model risk and computation.", orderIndex: 5 },
  { id: "cfa3-risk-management-market-risk-q07", topicId: "cfa3-risk-management-market-risk", text: "For a bond portfolio, the key sensitivity measure is:", optionA: "Delta", optionB: "Duration (and convexity)", optionC: "Vega", optionD: "Beta", correctOption: "B", explanation: "Duration (with convexity) measures a bond portfolio's sensitivity to interest-rate changes.", orderIndex: 6 },
  { id: "cfa3-risk-management-market-risk-q08", topicId: "cfa3-risk-management-market-risk", text: "Scenario analysis and stress testing are valuable because they:", optionA: "Replace the need for VaR", optionB: "Capture extreme, non-normal outcomes VaR may miss", optionC: "Guarantee no losses", optionD: "Only use normal distributions", correctOption: "B", explanation: "Stress tests examine severe, plausible shocks and regime shifts that standard VaR can understate.", orderIndex: 7 },
  { id: "cfa3-risk-management-market-risk-q09", topicId: "cfa3-risk-management-market-risk", text: "Risk budgeting refers to:", optionA: "Setting a marketing budget", optionB: "Allocating a total risk limit across positions or managers", optionC: "Minimizing all risk to zero", optionD: "Forecasting returns", correctOption: "B", explanation: "Risk budgeting distributes an overall risk allowance among activities so total risk stays within tolerance.", orderIndex: 8 },
  { id: "cfa3-risk-management-market-risk-q10", topicId: "cfa3-risk-management-market-risk", text: "For an options book, the sensitivity to a change in volatility is:", optionA: "Delta", optionB: "Vega", optionC: "Duration", optionD: "Rho", correctOption: "B", explanation: "Vega measures the change in an option's value for a change in implied volatility.", orderIndex: 9 },
  { id: "cfa3-risk-management-market-risk-q11", topicId: "cfa3-risk-management-market-risk", text: "Different market participants (banks vs. pensions) set risk limits differently mainly because of their:", optionA: "Office size", optionB: "Distinct objectives, liabilities and regulation", optionC: "Logo colors", optionD: "Number of employees", correctOption: "B", explanation: "Mandates, liability profiles, and regulatory regimes drive how each participant frames and limits risk.", orderIndex: 10 },
  { id: "cfa3-risk-management-market-risk-q12", topicId: "cfa3-risk-management-market-risk", text: "A common constraint used alongside VaR limits is a:", optionA: "Position/stop-loss limit", optionB: "Marketing quota", optionC: "Dividend target", optionD: "Headcount cap", correctOption: "A", explanation: "Position limits and stop-losses are practical constraints used together with VaR and scenario limits.", orderIndex: 11 },

  // Risk Management — Swaps, Forwards & Futures Strategies
  { id: "cfa3-risk-management-swaps-forwards-q01", topicId: "cfa3-risk-management-swaps-forwards", text: "To increase a bond portfolio's duration with a swap, a manager would:", optionA: "Pay fixed / receive floating", optionB: "Receive fixed / pay floating", optionC: "Sell the portfolio", optionD: "Buy a call option", correctOption: "B", explanation: "Receiving fixed adds positive duration; paying floating offsets little, so the swap raises portfolio duration.", orderIndex: 0 },
  { id: "cfa3-risk-management-swaps-forwards-q02", topicId: "cfa3-risk-management-swaps-forwards", text: "A pay-fixed interest-rate swap has a duration that is:", optionA: "Positive and large", optionB: "Negative (reduces portfolio duration)", optionC: "Always zero", optionD: "Equal to the coupon", correctOption: "B", explanation: "Paying fixed/receiving floating carries negative duration, lowering a portfolio's interest-rate sensitivity.", orderIndex: 1 },
  { id: "cfa3-risk-management-swaps-forwards-q03", topicId: "cfa3-risk-management-swaps-forwards", text: "Equity index futures are used to change a portfolio's:", optionA: "Credit rating", optionB: "Beta (equity market exposure)", optionC: "Coupon", optionD: "Dividend policy", correctOption: "B", explanation: "Long or short equity index futures raise or lower the portfolio's effective beta without trading shares.", orderIndex: 2 },
  { id: "cfa3-risk-management-swaps-forwards-q04", topicId: "cfa3-risk-management-swaps-forwards", text: "A total-return (equity) swap lets an investor:", optionA: "Gain an asset's return synthetically without owning it", optionB: "Eliminate counterparty risk", optionC: "Avoid all fees", optionD: "Guarantee a profit", correctOption: "A", explanation: "A total-return swap exchanges a financing rate for an asset's total return, giving synthetic exposure.", orderIndex: 3 },
  { id: "cfa3-risk-management-swaps-forwards-q05", topicId: "cfa3-risk-management-swaps-forwards", text: "Cash equitization (an overlay) is used to:", optionA: "Keep idle cash exposed to the market via index futures", optionB: "Increase cash holdings", optionC: "Hedge credit risk", optionD: "Lower equity exposure", correctOption: "A", explanation: "Buying index futures against cash removes 'cash drag' by giving idle cash market exposure.", orderIndex: 4 },
  { id: "cfa3-risk-management-swaps-forwards-q06", topicId: "cfa3-risk-management-swaps-forwards", text: "A drawback of hedging with forwards/futures versus options is they:", optionA: "Remove upside as well as downside", optionB: "Cost a large premium", optionC: "Have unlimited upside", optionD: "Cannot be closed out", correctOption: "A", explanation: "Symmetric instruments lock in a rate, giving up favorable moves along with adverse ones.", orderIndex: 5 },
  { id: "cfa3-risk-management-swaps-forwards-q07", topicId: "cfa3-risk-management-swaps-forwards", text: "Compared with OTC forwards, exchange-traded futures involve:", optionA: "No counterparty", optionB: "Margin and daily mark-to-market via a clearinghouse", optionC: "Bilateral term negotiation", optionD: "No standardization", correctOption: "B", explanation: "Futures are standardized, margined, and cleared with daily settlement, reducing counterparty risk.", orderIndex: 6 },
  { id: "cfa3-risk-management-swaps-forwards-q08", topicId: "cfa3-risk-management-swaps-forwards", text: "The number of bond futures to hit a target duration is based on the ratio of:", optionA: "Portfolio BPV to futures BPV", optionB: "Coupon to yield", optionC: "Price to earnings", optionD: "Dividends to price", correctOption: "A", explanation: "The hedge uses the basis-point value (BPV) of the portfolio relative to the futures' BPV.", orderIndex: 7 },
  { id: "cfa3-risk-management-swaps-forwards-q09", topicId: "cfa3-risk-management-swaps-forwards", text: "Counterparty risk on OTC swaps is mitigated mainly by:", optionA: "Collateral and central clearing", optionB: "Higher coupons", optionC: "Longer maturities", optionD: "Ignoring it", correctOption: "A", explanation: "Collateral posting and clearinghouses reduce bilateral counterparty exposure on swaps.", orderIndex: 8 },
  { id: "cfa3-risk-management-swaps-forwards-q10", topicId: "cfa3-risk-management-swaps-forwards", text: "Basis risk in a futures hedge arises when:", optionA: "The hedge and exposure move imperfectly together", optionB: "Margin is required", optionC: "The future is cleared", optionD: "Rates are zero", correctOption: "A", explanation: "Basis risk is residual risk from imperfect correlation between the hedging future and the hedged exposure.", orderIndex: 9 },
  { id: "cfa3-risk-management-swaps-forwards-q11", topicId: "cfa3-risk-management-swaps-forwards", text: "A receive-fixed swap is most like adding a position in a:", optionA: "Long fixed-rate bond", optionB: "Short bond", optionC: "Equity index", optionD: "Currency forward", correctOption: "A", explanation: "Receiving fixed behaves like owning a fixed-rate bond, adding positive duration.", orderIndex: 10 },
  { id: "cfa3-risk-management-swaps-forwards-q12", topicId: "cfa3-risk-management-swaps-forwards", text: "Using a currency swap, an investor can:", optionA: "Convert cash flows from one currency to another over time", optionB: "Increase equity beta", optionC: "Raise credit quality", optionD: "Remove duration", correctOption: "A", explanation: "Currency swaps exchange principal and/or interest in different currencies, managing FX exposure over a horizon.", orderIndex: 11 },

  // Risk Management — Options Strategies
  { id: "cfa3-risk-management-options-strategies-q01", topicId: "cfa3-risk-management-options-strategies", text: "A protective put consists of:", optionA: "Long asset + long put", optionB: "Long asset + short call", optionC: "Short asset + long call", optionD: "Two short puts", correctOption: "A", explanation: "Holding the asset and buying a put sets a floor on losses while keeping upside, less the premium.", orderIndex: 0 },
  { id: "cfa3-risk-management-options-strategies-q02", topicId: "cfa3-risk-management-options-strategies", text: "A covered call:", optionA: "Earns premium but caps upside", optionB: "Provides unlimited upside", optionC: "Removes all downside", optionD: "Requires shorting the stock", correctOption: "A", explanation: "Long stock plus a short call generates income but limits gains at the strike, cushioning downside only by the premium.", orderIndex: 1 },
  { id: "cfa3-risk-management-options-strategies-q03", topicId: "cfa3-risk-management-options-strategies", text: "A collar is built from a:", optionA: "Long put financed by a short call", optionB: "Two long calls", optionC: "Long straddle", optionD: "Short put only", correctOption: "A", explanation: "A collar buys a protective put and sells a call to fund it, bounding both downside and upside.", orderIndex: 2 },
  { id: "cfa3-risk-management-options-strategies-q04", topicId: "cfa3-risk-management-options-strategies", text: "A long straddle profits when the underlying:", optionA: "Stays flat", optionB: "Makes a large move in either direction", optionC: "Pays a dividend", optionD: "Rises slightly only", correctOption: "B", explanation: "A long call plus long put at the same strike gains from big moves up or down (a long-volatility bet).", orderIndex: 3 },
  { id: "cfa3-risk-management-options-strategies-q05", topicId: "cfa3-risk-management-options-strategies", text: "A bull call spread is used to:", optionA: "Profit from a moderate rise at lower cost, with capped payoff", optionB: "Hedge currency", optionC: "Add duration", optionD: "Short volatility only", correctOption: "A", explanation: "Buying a lower-strike call and selling a higher-strike call lowers cost but caps the upside payoff.", orderIndex: 4 },
  { id: "cfa3-risk-management-options-strategies-q06", topicId: "cfa3-risk-management-options-strategies", text: "Delta of an option measures sensitivity to:", optionA: "The underlying price", optionB: "Volatility", optionC: "Time", optionD: "Interest rates", correctOption: "A", explanation: "Delta is the change in option value per unit change in the underlying's price.", orderIndex: 5 },
  { id: "cfa3-risk-management-options-strategies-q07", topicId: "cfa3-risk-management-options-strategies", text: "Gamma is important because it explains why:", optionA: "Delta hedges must be rebalanced as the underlying moves", optionB: "Options never expire", optionC: "Premiums are zero", optionD: "Rates rise", correctOption: "A", explanation: "Gamma is the rate of change of delta, so a static delta hedge drifts and needs dynamic rebalancing.", orderIndex: 6 },
  { id: "cfa3-risk-management-options-strategies-q08", topicId: "cfa3-risk-management-options-strategies", text: "Theta represents an option's sensitivity to:", optionA: "Time decay", optionB: "The underlying price", optionC: "Volatility", optionD: "Currency", correctOption: "A", explanation: "Theta measures how an option's value erodes as time to expiration passes.", orderIndex: 7 },
  { id: "cfa3-risk-management-options-strategies-q09", topicId: "cfa3-risk-management-options-strategies", text: "Writing (shorting) a straddle is a bet that volatility will be:", optionA: "Low (the market stays quiet)", optionB: "Very high", optionC: "Irrelevant", optionD: "Negative", correctOption: "A", explanation: "A short straddle earns premium if the underlying barely moves, but has large risk if it moves sharply.", orderIndex: 8 },
  { id: "cfa3-risk-management-options-strategies-q10", topicId: "cfa3-risk-management-options-strategies", text: "The volatility 'skew/smile' refers to:", optionA: "Implied volatility varying across strikes", optionB: "A constant volatility", optionC: "The risk-free rate", optionD: "Dividend yield", correctOption: "A", explanation: "Implied volatility typically differs by strike (and maturity), producing a smile or skew in option prices.", orderIndex: 9 },
  { id: "cfa3-risk-management-options-strategies-q11", topicId: "cfa3-risk-management-options-strategies", text: "Relative to a forward, an option hedge offers:", optionA: "Asymmetric protection for a premium", optionB: "A symmetric locked rate at no cost", optionC: "No protection", optionD: "Guaranteed gains", correctOption: "A", explanation: "Options hedge adverse moves while keeping favorable ones, paid for with the premium — unlike symmetric forwards.", orderIndex: 10 },
  { id: "cfa3-risk-management-options-strategies-q12", topicId: "cfa3-risk-management-options-strategies", text: "A calendar spread mainly trades:", optionA: "Differences in time decay between two expirations", optionB: "Currency exposure", optionC: "Credit risk", optionD: "Equity beta", correctOption: "A", explanation: "A calendar spread is long and short options of the same strike but different expiries, profiting from time-decay differences.", orderIndex: 11 },

  // Risk Management — Enterprise Risk Management
  { id: "cfa3-risk-management-enterprise-q01", topicId: "cfa3-risk-management-enterprise", text: "Enterprise Risk Management (ERM) is best described as:", optionA: "Managing each desk's risk in isolation", optionB: "A centralized, enterprise-wide view of risk against objectives", optionC: "Buying insurance only", optionD: "Ignoring non-financial risk", correctOption: "B", explanation: "ERM takes a top-down, organization-wide approach aligning total risk with the firm's goals and tolerance.", orderIndex: 0 },
  { id: "cfa3-risk-management-enterprise-q02", topicId: "cfa3-risk-management-enterprise", text: "Who is ultimately responsible for setting risk tolerance?", optionA: "The board / senior management", optionB: "Individual traders", optionC: "The custodian", optionD: "External auditors", correctOption: "A", explanation: "Risk governance places ultimate responsibility for risk tolerance with the board and senior management.", orderIndex: 1 },
  { id: "cfa3-risk-management-enterprise-q03", topicId: "cfa3-risk-management-enterprise", text: "Which is a NON-financial risk?", optionA: "Market risk", optionB: "Operational risk", optionC: "Credit risk", optionD: "Liquidity risk", correctOption: "B", explanation: "Operational (also model, legal, regulatory, solvency) risks are non-financial; market/credit/liquidity are financial.", orderIndex: 2 },
  { id: "cfa3-risk-management-enterprise-q04", topicId: "cfa3-risk-management-enterprise", text: "Aggregating risks across an organization must account for:", optionA: "Correlations among risks", optionB: "Only the largest single risk", optionC: "Office locations", optionD: "Nothing — risks simply add", correctOption: "A", explanation: "Risks are not simply additive; correlations determine the true aggregate exposure.", orderIndex: 3 },
  { id: "cfa3-risk-management-enterprise-q05", topicId: "cfa3-risk-management-enterprise", text: "Transferring a risk via insurance is appropriate when:", optionA: "The firm has no comparative advantage in bearing it", optionB: "The risk is free to retain", optionC: "The premium exceeds any benefit always", optionD: "The risk cannot be measured at all", correctOption: "A", explanation: "Risks the firm is poorly positioned to bear are good candidates to transfer when the cost is justified.", orderIndex: 4 },
  { id: "cfa3-risk-management-enterprise-q06", topicId: "cfa3-risk-management-enterprise", text: "Self-insuring (accepting) a risk means the firm:", optionA: "Retains and bears the risk itself", optionB: "Buys an option", optionC: "Sells the business", optionD: "Hedges fully", correctOption: "A", explanation: "Acceptance/self-insurance keeps the risk on the firm's own book rather than transferring or hedging it.", orderIndex: 5 },
  { id: "cfa3-risk-management-enterprise-q07", topicId: "cfa3-risk-management-enterprise", text: "The first step in a risk-management process is to:", optionA: "Identify and classify the risks", optionB: "Buy insurance", optionC: "Fire managers", optionD: "Set marketing goals", correctOption: "A", explanation: "Effective ERM begins by identifying and classifying the risks the organization faces.", orderIndex: 6 },
  { id: "cfa3-risk-management-enterprise-q08", topicId: "cfa3-risk-management-enterprise", text: "A risk budget in ERM serves to:", optionA: "Allocate total acceptable risk across activities", optionB: "Set salaries", optionC: "Eliminate all risk", optionD: "Forecast revenue", correctOption: "A", explanation: "A risk budget distributes the firm's overall risk tolerance across units and activities.", orderIndex: 7 },
  { id: "cfa3-risk-management-enterprise-q09", topicId: "cfa3-risk-management-enterprise", text: "Good risk governance locates risk decisions where the firm has:", optionA: "The most knowledge and comparative advantage", optionB: "The fewest employees", optionC: "The lowest pay", optionD: "The newest office", correctOption: "A", explanation: "Decisions should sit where expertise and comparative advantage in bearing the risk are greatest.", orderIndex: 8 },
  { id: "cfa3-risk-management-enterprise-q10", topicId: "cfa3-risk-management-enterprise", text: "Model risk is the risk that:", optionA: "A pricing/risk model is wrong or misused", optionB: "Markets fall", optionC: "Rates rise", optionD: "A counterparty defaults", correctOption: "A", explanation: "Model risk arises when flawed assumptions or misuse of a model produce incorrect valuations or risk estimates.", orderIndex: 9 },
  { id: "cfa3-risk-management-enterprise-q11", topicId: "cfa3-risk-management-enterprise", text: "Tail risk is best addressed with:", optionA: "Scenario/stress testing and CVaR", optionB: "Higher leverage", optionC: "Ignoring extreme events", optionD: "More marketing", correctOption: "A", explanation: "Extreme, low-probability losses are examined via stress tests and expected-shortfall measures, not standard VaR alone.", orderIndex: 10 },
  { id: "cfa3-risk-management-enterprise-q12", topicId: "cfa3-risk-management-enterprise", text: "An effective ERM framework should be:", optionA: "Siloed by department", optionB: "Enterprise-wide and integrated", optionC: "Limited to market risk", optionD: "Run only by traders", correctOption: "B", explanation: "ERM is integrated across the whole enterprise rather than fragmented into independent silos.", orderIndex: 11 },

  // Alternatives — Hedge Fund Strategies
  { id: "cfa3-alternative-investments-hedge-funds-q01", topicId: "cfa3-alternative-investments-hedge-funds", text: "Hedge funds generally target:", optionA: "Benchmark-relative returns", optionB: "Absolute returns using leverage, shorting and derivatives", optionC: "Index replication", optionD: "Guaranteed income", correctOption: "B", explanation: "Hedge funds pursue absolute returns with flexible tools rather than tracking a benchmark.", orderIndex: 0 },
  { id: "cfa3-alternative-investments-hedge-funds-q02", topicId: "cfa3-alternative-investments-hedge-funds", text: "Merger (risk) arbitrage is an example of which category?", optionA: "Event-driven", optionB: "Global macro", optionC: "Equity market-neutral", optionD: "Managed futures", correctOption: "A", explanation: "Merger arbitrage trades announced deals and is classified under event-driven strategies.", orderIndex: 1 },
  { id: "cfa3-alternative-investments-hedge-funds-q03", topicId: "cfa3-alternative-investments-hedge-funds", text: "Equity market-neutral funds aim to:", optionA: "Maximize market beta", optionB: "Remove net market exposure and profit from relative mispricing", optionC: "Hold only cash", optionD: "Replicate an index", correctOption: "B", explanation: "Market-neutral balances longs and shorts to strip out beta, seeking alpha from relative value.", orderIndex: 2 },
  { id: "cfa3-alternative-investments-hedge-funds-q04", topicId: "cfa3-alternative-investments-hedge-funds", text: "Managed futures / CTAs are valued in a portfolio because they often:", optionA: "Provide crisis-period diversification (positive in trends)", optionB: "Guarantee returns", optionC: "Have no leverage", optionD: "Track the S&P exactly", correctOption: "A", explanation: "Trend-following CTAs can perform well in sustained market moves, adding crisis-period diversification.", orderIndex: 3 },
  { id: "cfa3-alternative-investments-hedge-funds-q05", topicId: "cfa3-alternative-investments-hedge-funds", text: "Relative-value arbitrage strategies typically use:", optionA: "High leverage on small mispricings", optionB: "No leverage", optionC: "Only long equities", optionD: "Physical commodities", correctOption: "A", explanation: "Arbitrage of small pricing differences relies on significant leverage to make returns meaningful.", orderIndex: 4 },
  { id: "cfa3-alternative-investments-hedge-funds-q06", topicId: "cfa3-alternative-investments-hedge-funds", text: "The phrase 'picking up pennies in front of a steamroller' describes:", optionA: "Steady small gains with rare large losses (tail risk)", optionB: "Guaranteed losses", optionC: "Low-risk indexing", optionD: "High daily volatility", correctOption: "A", explanation: "Many arbitrage/short-volatility styles show consistent small profits punctuated by severe drawdowns.", orderIndex: 5 },
  { id: "cfa3-alternative-investments-hedge-funds-q07", topicId: "cfa3-alternative-investments-hedge-funds", text: "A global macro fund primarily trades on:", optionA: "Top-down views of economies, rates and currencies", optionB: "Single-stock fundamentals only", optionC: "Real estate appraisals", optionD: "Merger spreads only", correctOption: "A", explanation: "Global macro takes directional positions across asset classes based on macroeconomic forecasts.", orderIndex: 6 },
  { id: "cfa3-alternative-investments-hedge-funds-q08", topicId: "cfa3-alternative-investments-hedge-funds", text: "Hedge fund correlations to equities tend to:", optionA: "Stay constant", optionB: "Rise during market stress", optionC: "Fall to −1 in crises", optionD: "Always be zero", correctOption: "B", explanation: "Correlations are time-varying and often increase in stressed markets, reducing diversification when needed.", orderIndex: 7 },
  { id: "cfa3-alternative-investments-hedge-funds-q09", topicId: "cfa3-alternative-investments-hedge-funds", text: "A multi-strategy hedge fund:", optionA: "Allocates dynamically across several strategies", optionB: "Holds only government bonds", optionC: "Uses no leverage", optionD: "Tracks an index", correctOption: "A", explanation: "Multi-strategy funds shift capital among strategies to exploit the best opportunities and smooth returns.", orderIndex: 8 },
  { id: "cfa3-alternative-investments-hedge-funds-q10", topicId: "cfa3-alternative-investments-hedge-funds", text: "A 'gate' provision allows a fund to:", optionA: "Limit the amount investors can redeem at once", optionB: "Guarantee returns", optionC: "Avoid all fees", optionD: "Add leverage automatically", correctOption: "A", explanation: "Gates cap aggregate redemptions in a period, protecting the fund from forced asset sales.", orderIndex: 9 },
  { id: "cfa3-alternative-investments-hedge-funds-q11", topicId: "cfa3-alternative-investments-hedge-funds", text: "Benchmarking hedge funds is difficult, so investors often use:", optionA: "Peer groups, absolute targets, or factor models", optionB: "A single government-bond index", optionC: "The risk-free rate exactly", optionD: "No evaluation at all", correctOption: "A", explanation: "Because no single index fits, hedge funds are judged against peers, absolute return goals, or risk-factor benchmarks.", orderIndex: 10 },
  { id: "cfa3-alternative-investments-hedge-funds-q12", topicId: "cfa3-alternative-investments-hedge-funds", text: "A distressed-securities strategy invests in:", optionA: "Securities of firms in or near financial distress", optionB: "AAA government bonds only", optionC: "Index funds", optionD: "Cash equivalents", correctOption: "A", explanation: "Distressed investing buys the debt or equity of troubled companies, an event-driven approach.", orderIndex: 11 },

  // Alternatives — Private Equity & Venture Capital
  { id: "cfa3-alternative-investments-private-equity-q01", topicId: "cfa3-alternative-investments-private-equity", text: "A typical private-equity fund is structured as a:", optionA: "Closed-end limited partnership", optionB: "Daily-liquidity mutual fund", optionC: "Bank deposit", optionD: "Exchange-traded fund", correctOption: "A", explanation: "PE funds are closed-end LPs with committed capital drawn down over an investment period.", orderIndex: 0 },
  { id: "cfa3-alternative-investments-private-equity-q02", topicId: "cfa3-alternative-investments-private-equity", text: "'Carried interest' refers to the GP's:", optionA: "Share of fund profits (e.g., 20%)", optionB: "Annual management fee", optionC: "Office rent", optionD: "Hurdle rate", correctOption: "A", explanation: "Carried interest is the general partner's performance share of profits, commonly around 20%.", orderIndex: 1 },
  { id: "cfa3-alternative-investments-private-equity-q03", topicId: "cfa3-alternative-investments-private-equity", text: "A hurdle rate in a PE fund means carry is paid only:", optionA: "Above a minimum return to LPs", optionB: "Before any returns", optionC: "On management fees", optionD: "If the fund loses money", correctOption: "A", explanation: "The hurdle (preferred return) requires LPs to earn a minimum before the GP shares in profits.", orderIndex: 2 },
  { id: "cfa3-alternative-investments-private-equity-q04", topicId: "cfa3-alternative-investments-private-equity", text: "The J-curve describes:", optionA: "Early negative returns followed by later gains", optionB: "Steadily rising returns from day one", optionC: "Constant returns", optionD: "Guaranteed losses", correctOption: "A", explanation: "Fees and early markdowns produce initial negative returns before exits drive the curve upward.", orderIndex: 3 },
  { id: "cfa3-alternative-investments-private-equity-q05", topicId: "cfa3-alternative-investments-private-equity", text: "Buyout funds create value mainly through:", optionA: "Operational improvement, leverage and multiple expansion", optionB: "Daily trading", optionC: "Currency hedging", optionD: "Holding cash", correctOption: "A", explanation: "Leveraged buyouts add value via operating gains, financial leverage, and exit multiple expansion.", orderIndex: 4 },
  { id: "cfa3-alternative-investments-private-equity-q06", topicId: "cfa3-alternative-investments-private-equity", text: "Venture capital is characterized by:", optionA: "Early-stage investing with high dispersion and failure rates", optionB: "Low risk and steady income", optionC: "Daily liquidity", optionD: "Government guarantees", correctOption: "A", explanation: "VC funds back early-stage companies, where a few big winners offset many failures.", orderIndex: 5 },
  { id: "cfa3-alternative-investments-private-equity-q07", topicId: "cfa3-alternative-investments-private-equity", text: "PE performance is primarily measured by:", optionA: "IRR and MOIC/TVPI (money-weighted)", optionB: "Time-weighted return only", optionC: "Cap rate", optionD: "Current ratio", correctOption: "A", explanation: "Because the GP controls cash-flow timing, money-weighted IRR and multiples like MOIC/TVPI are standard.", orderIndex: 6 },
  { id: "cfa3-alternative-investments-private-equity-q08", topicId: "cfa3-alternative-investments-private-equity", text: "DPI (distributions to paid-in) measures:", optionA: "Realized cash returned relative to capital called", optionB: "Unrealized value only", optionC: "Management fees", optionD: "The hurdle rate", correctOption: "A", explanation: "DPI captures cash actually distributed to LPs per dollar of paid-in capital — the realized multiple.", orderIndex: 7 },
  { id: "cfa3-alternative-investments-private-equity-q09", topicId: "cfa3-alternative-investments-private-equity", text: "A public-market equivalent (PME) compares PE returns to:", optionA: "A public-index investment with the same cash-flow timing", optionB: "The risk-free rate", optionC: "Inflation", optionD: "A peer hedge fund", correctOption: "A", explanation: "PME benchmarks a private fund against the return of investing the same cash flows in a public index.", orderIndex: 8 },
  { id: "cfa3-alternative-investments-private-equity-q10", topicId: "cfa3-alternative-investments-private-equity", text: "A 'clawback' provision requires the GP to:", optionA: "Return excess carry if later results disappoint", optionB: "Add capital each year", optionC: "Pay LP taxes", optionD: "Lower its hurdle", correctOption: "A", explanation: "Clawbacks return previously paid carried interest if the fund's overall results fall short of the agreed split.", orderIndex: 9 },
  { id: "cfa3-alternative-investments-private-equity-q11", topicId: "cfa3-alternative-investments-private-equity", text: "Vintage-year diversification helps manage:", optionA: "Timing/concentration and J-curve risk", optionB: "Currency risk only", optionC: "Coupon risk", optionD: "Dividend risk", correctOption: "A", explanation: "Spreading commitments across vintages reduces dependence on any one market environment and smooths the J-curve.", orderIndex: 10 },
  { id: "cfa3-alternative-investments-private-equity-q12", topicId: "cfa3-alternative-investments-private-equity", text: "'Committed capital' that has not yet been called is known as:", optionA: "Dry powder", optionB: "Carried interest", optionC: "NOI", optionD: "A hurdle", correctOption: "A", explanation: "Uncalled commitments waiting to be drawn are referred to as dry powder.", orderIndex: 11 },

  // Alternatives — Real Estate Investment
  { id: "cfa3-alternative-investments-real-estate-q01", topicId: "cfa3-alternative-investments-real-estate", text: "Under direct capitalization, property value equals:", optionA: "NOI divided by the cap rate", optionB: "NOI times the cap rate", optionC: "Rent minus taxes", optionD: "Price times yield", correctOption: "A", explanation: "Value = NOI / cap rate; a lower cap rate implies a higher value and lower expected return.", orderIndex: 0 },
  { id: "cfa3-alternative-investments-real-estate-q02", topicId: "cfa3-alternative-investments-real-estate", text: "Net operating income (NOI) excludes:", optionA: "Financing costs and income taxes", optionB: "Rental income", optionC: "Operating expenses", optionD: "Vacancy allowance", correctOption: "A", explanation: "NOI is income after operating expenses but before financing and taxes.", orderIndex: 1 },
  { id: "cfa3-alternative-investments-real-estate-q03", topicId: "cfa3-alternative-investments-real-estate", text: "A lower capitalization rate generally implies:", optionA: "A higher property price and lower expected return", optionB: "A lower price", optionC: "Higher risk", optionD: "No effect on value", correctOption: "A", explanation: "Cap rate moves inversely with price; a low cap rate means investors accept a lower yield for the asset.", orderIndex: 2 },
  { id: "cfa3-alternative-investments-real-estate-q04", topicId: "cfa3-alternative-investments-real-estate", text: "The three main valuation approaches for real estate are income, cost, and:", optionA: "Sales comparison", optionB: "Dividend discount", optionC: "Black–Scholes", optionD: "CAPM", correctOption: "A", explanation: "Real estate is valued via income, cost, and sales-comparison (comparable transactions) approaches.", orderIndex: 3 },
  { id: "cfa3-alternative-investments-real-estate-q05", topicId: "cfa3-alternative-investments-real-estate", text: "REITs differ from direct private real estate by being:", optionA: "Liquid and daily-priced, behaving more equity-like short term", optionB: "Always lower returning", optionC: "Appraisal-priced", optionD: "Free of market risk", correctOption: "A", explanation: "Listed REITs trade like equities with daily prices, showing more short-run correlation to stocks.", orderIndex: 4 },
  { id: "cfa3-alternative-investments-real-estate-q06", topicId: "cfa3-alternative-investments-real-estate", text: "Private real estate returns are 'smoothed' because they are:", optionA: "Appraisal-based and infrequently marked", optionB: "Traded every second", optionC: "Government set", optionD: "Risk-free", correctOption: "A", explanation: "Infrequent appraisals understate true volatility and correlation, smoothing reported returns.", orderIndex: 5 },
  { id: "cfa3-alternative-investments-real-estate-q07", topicId: "cfa3-alternative-investments-real-estate", text: "Leverage in real estate:", optionA: "Amplifies both returns and risk", optionB: "Removes risk", optionC: "Has no effect", optionD: "Guarantees gains", correctOption: "A", explanation: "Mortgage financing magnifies equity returns up and down and adds financing/refinancing risk.", orderIndex: 6 },
  { id: "cfa3-alternative-investments-real-estate-q08", topicId: "cfa3-alternative-investments-real-estate", text: "Real estate is often added to a portfolio for:", optionA: "Income, diversification, and partial inflation protection", optionB: "Daily liquidity", optionC: "Zero volatility", optionD: "Tax exemption", correctOption: "A", explanation: "Property offers income yield, diversification, and some inflation sensitivity over time.", orderIndex: 7 },
  { id: "cfa3-alternative-investments-real-estate-q09", topicId: "cfa3-alternative-investments-real-estate", text: "Moving from core to opportunistic real estate strategies generally means:", optionA: "Higher risk, return, and leverage", optionB: "Lower risk", optionC: "More liquidity", optionD: "No development risk", correctOption: "A", explanation: "Core→value-add→opportunistic trades up risk, expected return, and the use of leverage and development.", orderIndex: 8 },
  { id: "cfa3-alternative-investments-real-estate-q10", topicId: "cfa3-alternative-investments-real-estate", text: "The debt quadrant of real estate refers to:", optionA: "Mortgages and mortgage-backed lending", optionB: "Equity ownership", optionC: "REIT shares", optionD: "Vacant land", correctOption: "A", explanation: "Real estate exposure can be equity or debt (mortgages), and public or private — the four quadrants.", orderIndex: 9 },
  { id: "cfa3-alternative-investments-real-estate-q11", topicId: "cfa3-alternative-investments-real-estate", text: "A primary risk specific to rental properties is:", optionA: "Vacancy / tenant default", optionB: "Coupon reinvestment", optionC: "Convexity", optionD: "Tracking error", correctOption: "A", explanation: "Vacancy and tenant credit directly reduce NOI and therefore value.", orderIndex: 10 },
  { id: "cfa3-alternative-investments-real-estate-q12", topicId: "cfa3-alternative-investments-real-estate", text: "A terminal (reversion) value in a DCF of property represents the:", optionA: "Estimated sale value at the end of the holding period", optionB: "First year's rent", optionC: "Annual depreciation", optionD: "Loan balance", correctOption: "A", explanation: "DCF valuation discounts interim NOI plus a terminal value reflecting the expected resale price.", orderIndex: 11 },

  // Alternatives — Commodities & Real Assets
  { id: "cfa3-alternative-investments-real-assets-q01", topicId: "cfa3-alternative-investments-real-assets", text: "Most institutional commodity exposure is obtained through:", optionA: "Futures contracts", optionB: "Physical storage", optionC: "Bank deposits", optionD: "Equities only", correctOption: "A", explanation: "Investors typically use commodity futures rather than holding and storing the physical goods.", orderIndex: 0 },
  { id: "cfa3-alternative-investments-real-assets-q02", topicId: "cfa3-alternative-investments-real-assets", text: "Total return on a collateralized commodity futures position is spot + collateral yield +:", optionA: "Roll yield", optionB: "Dividend yield", optionC: "Coupon", optionD: "Cap rate", correctOption: "A", explanation: "Commodity futures total return decomposes into spot price change, roll yield, and collateral (cash) yield.", orderIndex: 1 },
  { id: "cfa3-alternative-investments-real-assets-q03", topicId: "cfa3-alternative-investments-real-assets", text: "Roll yield is positive when the futures curve is in:", optionA: "Backwardation (futures below spot)", optionB: "Contango", optionC: "A flat shape", optionD: "Inversion of rates", correctOption: "A", explanation: "In backwardation, rolling to cheaper near-dated futures produces a positive roll yield.", orderIndex: 2 },
  { id: "cfa3-alternative-investments-real-assets-q04", topicId: "cfa3-alternative-investments-real-assets", text: "Contango in a futures market means:", optionA: "Futures prices exceed the spot price", optionB: "Futures below spot", optionC: "No futures exist", optionD: "Spot equals zero", correctOption: "A", explanation: "Contango is an upward-sloping curve (futures above spot), producing a negative roll yield.", orderIndex: 3 },
  { id: "cfa3-alternative-investments-real-assets-q05", topicId: "cfa3-alternative-investments-real-assets", text: "Commodities are added to portfolios mainly for:", optionA: "Inflation sensitivity and diversification", optionB: "Steady income", optionC: "Daily coupons", optionD: "Guaranteed returns", correctOption: "A", explanation: "Commodities historically correlate with inflation surprises and diversify stock/bond portfolios, despite paying no income.", orderIndex: 4 },
  { id: "cfa3-alternative-investments-real-assets-q06", topicId: "cfa3-alternative-investments-real-assets", text: "The 'theory of storage' explains the futures curve via:", optionA: "Convenience yield and storage costs", optionB: "Dividend policy", optionC: "Bond duration", optionD: "Equity beta", correctOption: "A", explanation: "The theory of storage links the curve shape to storage costs, financing, and the convenience yield of holding the physical.", orderIndex: 5 },
  { id: "cfa3-alternative-investments-real-assets-q07", topicId: "cfa3-alternative-investments-real-assets", text: "A defining feature of commodities versus bonds is that commodities:", optionA: "Produce no income", optionB: "Pay regular coupons", optionC: "Have fixed maturities", optionD: "Carry credit ratings", correctOption: "A", explanation: "Commodities generate no cash income; return comes from price and roll, not coupons or dividends.", orderIndex: 6 },
  { id: "cfa3-alternative-investments-real-assets-q08", topicId: "cfa3-alternative-investments-real-assets", text: "Timberland and farmland are examples of:", optionA: "Real assets with inflation-linked, long-duration cash flows", optionB: "Money-market instruments", optionC: "Equity derivatives", optionD: "Government bonds", correctOption: "A", explanation: "Natural-resource real assets offer long-horizon, often inflation-sensitive returns and diversification.", orderIndex: 7 },
  { id: "cfa3-alternative-investments-real-assets-q09", topicId: "cfa3-alternative-investments-real-assets", text: "The hedging-pressure (insurance) hypothesis says futures prices reflect:", optionA: "Compensation paid by hedgers to speculators", optionB: "Only inflation", optionC: "Dividend yields", optionD: "Bond convexity", correctOption: "A", explanation: "Hedgers may accept a lower expected price to offload risk, paying a premium to speculators who bear it.", orderIndex: 8 },
  { id: "cfa3-alternative-investments-real-assets-q10", topicId: "cfa3-alternative-investments-real-assets", text: "Commodity returns tend to be:", optionA: "Volatile, with correlations rising in macro shocks", optionB: "Always stable", optionC: "Risk-free", optionD: "Perfectly normal", correctOption: "A", explanation: "Commodities are volatile and can see correlations move with macroeconomic conditions.", orderIndex: 9 },
  { id: "cfa3-alternative-investments-real-assets-q11", topicId: "cfa3-alternative-investments-real-assets", text: "A practical reason to access commodities via futures rather than physical is:", optionA: "Avoiding storage, insurance and spoilage costs", optionB: "Earning dividends", optionC: "Gaining voting rights", optionD: "Lower volatility", correctOption: "A", explanation: "Futures avoid the cost and impracticality of storing, insuring, and transporting physical commodities.", orderIndex: 10 },
  { id: "cfa3-alternative-investments-real-assets-q12", topicId: "cfa3-alternative-investments-real-assets", text: "Like other private real assets, infrastructure/timber valuations may be:", optionA: "Appraisal-based and smoothed", optionB: "Marked every second", optionC: "Government guaranteed", optionD: "Free of illiquidity", correctOption: "A", explanation: "Private real-asset valuations are often appraisal-based, smoothing returns and understating volatility.", orderIndex: 11 },

  // Alternatives — Private Debt & Infrastructure
  { id: "cfa3-alternative-investments-private-debt-q01", topicId: "cfa3-alternative-investments-private-debt", text: "Direct lending typically provides:", optionA: "Senior secured loans to mid-market firms", optionB: "Common equity stakes", optionC: "Government bonds", optionD: "Listed REIT shares", correctOption: "A", explanation: "Direct lending funds make senior secured loans, mostly to middle-market companies.", orderIndex: 0 },
  { id: "cfa3-alternative-investments-private-debt-q02", topicId: "cfa3-alternative-investments-private-debt", text: "Mezzanine debt is best described as:", optionA: "Subordinated debt, often with an equity kicker", optionB: "Senior secured debt", optionC: "Government guaranteed", optionD: "Daily-liquid", correctOption: "A", explanation: "Mezzanine sits between senior debt and equity, carrying higher yield and often warrants/equity participation.", orderIndex: 1 },
  { id: "cfa3-alternative-investments-private-debt-q03", topicId: "cfa3-alternative-investments-private-debt", text: "Private-debt returns are driven mainly by:", optionA: "Credit spread plus an illiquidity premium", optionB: "Equity multiple expansion", optionC: "Roll yield", optionD: "Dividend growth", correctOption: "A", explanation: "Investors earn the credit spread and an illiquidity premium for locking up capital in private loans.", orderIndex: 2 },
  { id: "cfa3-alternative-investments-private-debt-q04", topicId: "cfa3-alternative-investments-private-debt", text: "Many direct loans are floating-rate, which means they:", optionA: "Have low duration and benefit as rates rise", optionB: "Have very high duration", optionC: "Pay no interest", optionD: "Are equity-like", correctOption: "A", explanation: "Floating-rate loans reset with short rates, giving low duration and rising coupons when rates increase.", orderIndex: 3 },
  { id: "cfa3-alternative-investments-private-debt-q05", topicId: "cfa3-alternative-investments-private-debt", text: "The primary risk in private debt is:", optionA: "Credit/default and recovery risk", optionB: "Currency only", optionC: "Tracking error", optionD: "Dividend cuts", correctOption: "A", explanation: "Default probability and recovery on the underlying borrowers drive private-debt risk, with covenant quality key.", orderIndex: 4 },
  { id: "cfa3-alternative-investments-private-debt-q06", topicId: "cfa3-alternative-investments-private-debt", text: "Infrastructure assets are typically:", optionA: "Long-lived physical assets with regulated/contracted cash flows", optionB: "Short-term trading instruments", optionC: "Daily-liquid equities", optionD: "Zero-coupon bonds", correctOption: "A", explanation: "Infrastructure comprises long-duration physical assets whose cash flows are often regulated or contracted.", orderIndex: 5 },
  { id: "cfa3-alternative-investments-private-debt-q07", topicId: "cfa3-alternative-investments-private-debt", text: "Brownfield infrastructure refers to assets that are:", optionA: "Already operating, offering stable yield", optionB: "Under development", optionC: "Never built", optionD: "Listed equities", correctOption: "A", explanation: "Brownfield assets are existing, operating projects with more predictable, lower-risk cash flows than greenfield.", orderIndex: 6 },
  { id: "cfa3-alternative-investments-private-debt-q08", topicId: "cfa3-alternative-investments-private-debt", text: "Greenfield infrastructure carries higher risk because it involves:", optionA: "Construction/development before cash flows begin", optionB: "Guaranteed income", optionC: "Daily liquidity", optionD: "No leverage", correctOption: "A", explanation: "Greenfield projects must be built, adding construction, completion, and demand risk before generating revenue.", orderIndex: 7 },
  { id: "cfa3-alternative-investments-private-debt-q09", topicId: "cfa3-alternative-investments-private-debt", text: "Infrastructure cash flows are attractive to long-horizon investors because they are often:", optionA: "Inflation-linked and bond-like", optionB: "Highly volatile", optionC: "Tax-exempt", optionD: "Zero", correctOption: "A", explanation: "Regulated/contracted, frequently inflation-indexed cash flows give infrastructure stable, diversifying, bond-like returns.", orderIndex: 8 },
  { id: "cfa3-alternative-investments-private-debt-q10", topicId: "cfa3-alternative-investments-private-debt", text: "A specific risk of infrastructure investing is:", optionA: "Regulatory / political risk", optionB: "Coupon reinvestment only", optionC: "Style drift", optionD: "Survivorship bias", correctOption: "A", explanation: "Because many assets are regulated utilities/transport, changes in regulation or politics materially affect returns.", orderIndex: 9 },
  { id: "cfa3-alternative-investments-private-debt-q11", topicId: "cfa3-alternative-investments-private-debt", text: "Both private debt and infrastructure are well-suited to investors seeking:", optionA: "Income and inflation protection over long horizons", optionB: "Daily liquidity", optionC: "Maximum equity beta", optionD: "Zero risk", correctOption: "A", explanation: "Their contractual, often inflation-linked income fits long-horizon investors who can bear illiquidity.", orderIndex: 10 },
  { id: "cfa3-alternative-investments-private-debt-q12", topicId: "cfa3-alternative-investments-private-debt", text: "Weak loan covenants ('cov-lite') in private debt tend to:", optionA: "Reduce lender protection and worsen recoveries", optionB: "Increase coupon guarantees", optionC: "Eliminate default risk", optionD: "Raise liquidity", correctOption: "A", explanation: "Looser covenants give lenders fewer early warning rights, often lowering recoveries when borrowers struggle.", orderIndex: 11 },

  // Manager Selection — Quantitative Manager Evaluation
  { id: "cfa3-manager-selection-quantitative-q01", topicId: "cfa3-manager-selection-quantitative", text: "Returns-based analysis seeks to separate a manager's return into:", optionA: "Alpha (skill) and factor (beta) exposures", optionB: "Fees and taxes", optionC: "Income and capital gains", optionD: "Cash and bonds", correctOption: "A", explanation: "Regressing returns on factors isolates genuine alpha from cheap factor/beta exposure.", orderIndex: 0 },
  { id: "cfa3-manager-selection-quantitative-q02", topicId: "cfa3-manager-selection-quantitative", text: "The information ratio is defined as:", optionA: "Active return divided by tracking error", optionB: "Return divided by total volatility", optionC: "Beta times the market return", optionD: "Alpha minus fees", correctOption: "A", explanation: "The information ratio measures active return per unit of active risk, gauging consistency of skill.", orderIndex: 1 },
  { id: "cfa3-manager-selection-quantitative-q03", topicId: "cfa3-manager-selection-quantitative", text: "A short, volatile track record makes it hard to:", optionA: "Distinguish skill from luck statistically", optionB: "Compute fees", optionC: "Define the mandate", optionD: "Read disclosures", correctOption: "A", explanation: "Limited, noisy data has low statistical power to separate true skill from random good luck.", orderIndex: 2 },
  { id: "cfa3-manager-selection-quantitative-q04", topicId: "cfa3-manager-selection-quantitative", text: "Backfill bias in a manager database tends to:", optionA: "Overstate historical performance", optionB: "Understate performance", optionC: "Have no effect", optionD: "Only affect fees", correctOption: "A", explanation: "Adding a manager's favorable past returns when they join inflates the database's reported performance.", orderIndex: 3 },
  { id: "cfa3-manager-selection-quantitative-q05", topicId: "cfa3-manager-selection-quantitative", text: "Survivorship bias arises because databases:", optionA: "Drop failed/closed funds, inflating average returns", optionB: "Include too many funds", optionC: "Use net returns", optionD: "Report monthly", correctOption: "A", explanation: "Excluding funds that closed leaves only survivors, biasing measured performance upward.", orderIndex: 4 },
  { id: "cfa3-manager-selection-quantitative-q06", topicId: "cfa3-manager-selection-quantitative", text: "Paying active fees for returns that are really factor exposure means:", optionA: "Overpaying for cheap beta", optionB: "Earning true alpha", optionC: "Reducing risk", optionD: "Avoiding fees", correctOption: "A", explanation: "If 'alpha' is just persistent factor tilt, the investor is paying active fees for beta that could be bought cheaply.", orderIndex: 5 },
  { id: "cfa3-manager-selection-quantitative-q07", topicId: "cfa3-manager-selection-quantitative", text: "The Sortino ratio differs from the Sharpe ratio by using:", optionA: "Downside deviation instead of total volatility", optionB: "Beta instead of alpha", optionC: "Gross instead of net returns", optionD: "Tracking error", correctOption: "A", explanation: "Sortino penalizes only downside volatility, useful when returns are asymmetric.", orderIndex: 6 },
  { id: "cfa3-manager-selection-quantitative-q08", topicId: "cfa3-manager-selection-quantitative", text: "Smoothed (appraisal-based) returns in a quant evaluation will:", optionA: "Understate volatility and overstate risk-adjusted ratios", optionB: "Overstate volatility", optionC: "Have no impact", optionD: "Eliminate alpha", correctOption: "A", explanation: "Smoothing lowers measured volatility, flattering Sharpe/IR; returns should be unsmoothed first.", orderIndex: 7 },
  { id: "cfa3-manager-selection-quantitative-q09", topicId: "cfa3-manager-selection-quantitative", text: "A high information ratio sustained over time suggests:", optionA: "Consistent active skill", optionB: "Pure luck", optionC: "High fees", optionD: "Low risk only", correctOption: "A", explanation: "Persistently high active return per unit of active risk is evidence of repeatable skill.", orderIndex: 8 },
  { id: "cfa3-manager-selection-quantitative-q10", topicId: "cfa3-manager-selection-quantitative", text: "Quantitative evaluation alone is insufficient because:", optionA: "It must be paired with qualitative/operational due diligence", optionB: "Numbers are always wrong", optionC: "It ignores returns", optionD: "It sets fees", correctOption: "A", explanation: "Past statistics weakly predict future results, so quant work is combined with qualitative and operational DD.", orderIndex: 9 },
  { id: "cfa3-manager-selection-quantitative-q11", topicId: "cfa3-manager-selection-quantitative", text: "Style drift detected in returns-based analysis means the manager:", optionA: "Has moved away from the intended exposures", optionB: "Earned guaranteed alpha", optionC: "Lowered fees", optionD: "Closed the fund", correctOption: "A", explanation: "Drift signals exposures inconsistent with the mandate, a flag for monitoring or termination.", orderIndex: 10 },
  { id: "cfa3-manager-selection-quantitative-q12", topicId: "cfa3-manager-selection-quantitative", text: "Risk-adjusted return measures are preferred over raw returns because they:", optionA: "Account for the risk taken to earn the return", optionB: "Ignore risk", optionC: "Always exceed benchmarks", optionD: "Remove fees", correctOption: "A", explanation: "Adjusting for risk reveals whether returns came from skill or simply from taking more risk.", orderIndex: 11 },

  // Manager Selection — Fee Structures & Alignment
  { id: "cfa3-manager-selection-fees-q01", topicId: "cfa3-manager-selection-fees", text: "An ad valorem fee is charged as:", optionA: "A fixed percentage of assets under management", optionB: "A share of profits", optionC: "A flat dollar amount", optionD: "A percentage of losses", correctOption: "A", explanation: "Ad valorem (AUM) fees are a fixed percentage of assets, rewarding asset gathering.", orderIndex: 0 },
  { id: "cfa3-manager-selection-fees-q02", topicId: "cfa3-manager-selection-fees", text: "A high-water mark ensures performance fees are charged only on:", optionA: "New net profits above the prior peak", optionB: "Total assets", optionC: "Losses", optionD: "Management fees", correctOption: "A", explanation: "The high-water mark prevents charging performance fees again on gains that merely recover a prior drawdown.", orderIndex: 1 },
  { id: "cfa3-manager-selection-fees-q03", topicId: "cfa3-manager-selection-fees", text: "A hurdle rate means a performance fee applies only:", optionA: "Above a specified threshold return", optionB: "On all returns", optionC: "When the fund loses money", optionD: "On the management fee", correctOption: "A", explanation: "The hurdle sets a minimum return the manager must beat before earning performance fees.", orderIndex: 2 },
  { id: "cfa3-manager-selection-fees-q04", topicId: "cfa3-manager-selection-fees", text: "Performance fees can create an incentive for managers to:", optionA: "Take excessive risk for upside", optionB: "Avoid all risk", optionC: "Lower their AUM", optionD: "Reduce returns", correctOption: "A", explanation: "Sharing the upside but not the downside can encourage excessive risk-taking, a key alignment concern.", orderIndex: 3 },
  { id: "cfa3-manager-selection-fees-q05", topicId: "cfa3-manager-selection-fees", text: "A symmetric (fulcrum) fee:", optionA: "Rewards outperformance and penalizes underperformance", optionB: "Only rewards gains", optionC: "Is a fixed AUM fee", optionD: "Never changes", correctOption: "A", explanation: "Fulcrum fees adjust up and down around a benchmark, improving alignment by sharing both outcomes.", orderIndex: 4 },
  { id: "cfa3-manager-selection-fees-q06", topicId: "cfa3-manager-selection-fees", text: "When evaluating managers, investors should compare returns:", optionA: "Net of fees", optionB: "Gross only", optionC: "Before any costs", optionD: "Ignoring fees", correctOption: "A", explanation: "What matters to the client is net-of-fee return; high fees can erase a manager's gross edge.", orderIndex: 5 },
  { id: "cfa3-manager-selection-fees-q07", topicId: "cfa3-manager-selection-fees", text: "A clawback provision protects investors by:", optionA: "Recovering excess carry if later results disappoint", optionB: "Raising fees", optionC: "Removing the hurdle", optionD: "Adding leverage", correctOption: "A", explanation: "Clawbacks return previously paid performance fees when overall results fall short, improving alignment.", orderIndex: 6 },
  { id: "cfa3-manager-selection-fees-q08", topicId: "cfa3-manager-selection-fees", text: "Paying high fixed fees for a beta-heavy strategy is problematic because:", optionA: "The investor pays active prices for cheap market exposure", optionB: "Beta is unavailable", optionC: "Fees are tax-deductible", optionD: "It lowers risk", correctOption: "A", explanation: "If most return is beta, high active fees destroy value relative to cheaply available index exposure.", orderIndex: 7 },
  { id: "cfa3-manager-selection-fees-q09", topicId: "cfa3-manager-selection-fees", text: "AUM-based fees can misalign incentives because they reward:", optionA: "Asset gathering over performance", optionB: "Risk reduction", optionC: "Closing the fund", optionD: "Lower fees", correctOption: "A", explanation: "Because the fee scales with assets, managers may prioritize growing AUM rather than returns.", orderIndex: 8 },
  { id: "cfa3-manager-selection-fees-q10", topicId: "cfa3-manager-selection-fees", text: "A cap on performance fees serves to:", optionA: "Limit how much performance fee can accrue", optionB: "Guarantee returns", optionC: "Raise the hurdle", optionD: "Remove the high-water mark", correctOption: "A", explanation: "A cap bounds the manager's performance-fee share, a tool in negotiating fee terms.", orderIndex: 9 },
  { id: "cfa3-manager-selection-fees-q11", topicId: "cfa3-manager-selection-fees", text: "Combining a hurdle with a high-water mark primarily improves:", optionA: "Alignment between manager and client", optionB: "The management fee", optionC: "Leverage", optionD: "Tracking error", correctOption: "A", explanation: "Together they ensure performance fees reward only genuine, sustained outperformance.", orderIndex: 10 },
  { id: "cfa3-manager-selection-fees-q12", topicId: "cfa3-manager-selection-fees", text: "Fee evaluation in selection should weigh:", optionA: "Both the level and the structure of fees", optionB: "Only the headline rate", optionC: "Office location", optionD: "Fund age only", correctOption: "A", explanation: "Both how much and how fees are charged (incentives) matter for net value and alignment.", orderIndex: 11 },

  // Manager Selection — Style & Holdings-Based Analysis
  { id: "cfa3-manager-selection-style-analysis-q01", topicId: "cfa3-manager-selection-style-analysis", text: "Returns-based style analysis (RBSA) estimates style by:", optionA: "Regressing fund returns on style-index returns", optionB: "Listing every holding", optionC: "Reading the prospectus", optionD: "Interviewing the manager", correctOption: "A", explanation: "RBSA uses a constrained regression of fund returns on style indexes to infer the effective style mix.", orderIndex: 0 },
  { id: "cfa3-manager-selection-style-analysis-q02", topicId: "cfa3-manager-selection-style-analysis", text: "Holdings-based style analysis (HBSA) classifies a manager by:", optionA: "The actual portfolio positions", optionB: "Past returns only", optionC: "Fees charged", optionD: "AUM size", correctOption: "A", explanation: "HBSA examines actual holdings by size, value/growth, sector, and region for a precise current snapshot.", orderIndex: 1 },
  { id: "cfa3-manager-selection-style-analysis-q03", topicId: "cfa3-manager-selection-style-analysis", text: "An advantage of RBSA over HBSA is that it is:", optionA: "Cheap and timely, needing only return data", optionB: "Always more precise", optionC: "Forward-looking", optionD: "Free of estimation error", correctOption: "A", explanation: "RBSA requires only returns, making it inexpensive and timely, though it is backward-looking and less precise.", orderIndex: 2 },
  { id: "cfa3-manager-selection-style-analysis-q04", topicId: "cfa3-manager-selection-style-analysis", text: "An advantage of HBSA over RBSA is that it is:", optionA: "More precise and current about actual exposures", optionB: "Cheaper", optionC: "Requires no data", optionD: "Backward-looking", correctOption: "A", explanation: "Examining real positions gives a precise, up-to-date view, at the cost of being data-intensive and a snapshot.", orderIndex: 3 },
  { id: "cfa3-manager-selection-style-analysis-q05", topicId: "cfa3-manager-selection-style-analysis", text: "Style drift refers to a manager:", optionA: "Moving away from the intended style/mandate", optionB: "Lowering fees", optionC: "Closing the fund", optionD: "Beating the benchmark", correctOption: "A", explanation: "Style drift is unintended migration away from the mandate's exposures, a key thing style analysis detects.", orderIndex: 4 },
  { id: "cfa3-manager-selection-style-analysis-q06", topicId: "cfa3-manager-selection-style-analysis", text: "Style analysis helps reveal whether reported alpha is really:", optionA: "Persistent factor exposure", optionB: "A data error", optionC: "A fee", optionD: "Cash drag", correctOption: "A", explanation: "By identifying exposures, style analysis shows whether 'alpha' is genuine or just hidden factor tilts.", orderIndex: 5 },
  { id: "cfa3-manager-selection-style-analysis-q07", topicId: "cfa3-manager-selection-style-analysis", text: "A limitation of RBSA is that it:", optionA: "Is backward-looking and can miss rapid changes", optionB: "Requires every holding", optionC: "Cannot use regression", optionD: "Is too expensive", correctOption: "A", explanation: "RBSA infers average past exposures and may lag quick shifts in actual positioning.", orderIndex: 6 },
  { id: "cfa3-manager-selection-style-analysis-q08", topicId: "cfa3-manager-selection-style-analysis", text: "A limitation of HBSA is that it is:", optionA: "Data-intensive and only a point-in-time snapshot", optionB: "Always backward-looking", optionC: "Free of detail", optionD: "Unable to show sectors", correctOption: "A", explanation: "HBSA needs full holdings data and captures only the positions at one moment, missing intra-period trading.", orderIndex: 7 },
  { id: "cfa3-manager-selection-style-analysis-q09", topicId: "cfa3-manager-selection-style-analysis", text: "Style analysis supports selection by confirming a manager:", optionA: "Fits the intended portfolio role without overlap", optionB: "Has the lowest fee", optionC: "Is the largest fund", optionD: "Has the longest history", correctOption: "A", explanation: "It verifies the manager delivers the wanted exposures and won't duplicate existing managers' bets.", orderIndex: 8 },
  { id: "cfa3-manager-selection-style-analysis-q10", topicId: "cfa3-manager-selection-style-analysis", text: "Combining RBSA and HBSA is useful because they provide:", optionA: "History/consistency plus current positioning", optionB: "Identical information", optionC: "Only fee data", optionD: "No added value", correctOption: "A", explanation: "RBSA shows consistency over time while HBSA shows the present mix; together they give a fuller picture.", orderIndex: 9 },
  { id: "cfa3-manager-selection-style-analysis-q11", topicId: "cfa3-manager-selection-style-analysis", text: "Detecting hidden factor tilts matters because they can:", optionA: "Concentrate risk and double-count exposures across managers", optionB: "Raise the hurdle rate", optionC: "Lower the AUM fee", optionD: "Remove tracking error", correctOption: "A", explanation: "Unseen tilts may concentrate portfolio risk or overlap with other managers, undermining diversification.", orderIndex: 10 },
  { id: "cfa3-manager-selection-style-analysis-q12", topicId: "cfa3-manager-selection-style-analysis", text: "The constrained coefficients in RBSA are interpreted as:", optionA: "The portfolio's effective style weights", optionB: "Future returns", optionC: "Fees", optionD: "Tracking error", correctOption: "A", explanation: "The regression weights (summing to one, non-negative) estimate the manager's effective allocation to each style.", orderIndex: 11 },

  // Manager Selection — Monitoring & Termination
  { id: "cfa3-manager-selection-monitoring-q01", topicId: "cfa3-manager-selection-monitoring", text: "Ongoing manager monitoring should track performance, style consistency, and:", optionA: "The original investment thesis (people, process, firm)", optionB: "Only last quarter's return", optionC: "Office size", optionD: "Logo changes", correctOption: "A", explanation: "Monitoring confirms the reasons for hiring still hold — performance in context, style, and the thesis.", orderIndex: 0 },
  { id: "cfa3-manager-selection-monitoring-q02", topicId: "cfa3-manager-selection-monitoring", text: "An appropriate termination trigger is:", optionA: "Loss of the original rationale (style drift, process change)", optionB: "A single weak quarter", optionC: "A new office", optionD: "A rebranding", correctOption: "A", explanation: "Managers should be replaced when the basis for hiring breaks down, not for short-term noise.", orderIndex: 1 },
  { id: "cfa3-manager-selection-monitoring-q03", topicId: "cfa3-manager-selection-monitoring", text: "Performance chasing — firing losers and hiring recent winners — often:", optionA: "Destroys value due to mean reversion", optionB: "Guarantees outperformance", optionC: "Lowers fees", optionD: "Removes all risk", correctOption: "A", explanation: "Chasing past returns tends to buy high and sell low as performance mean-reverts, hurting results.", orderIndex: 2 },
  { id: "cfa3-manager-selection-monitoring-q04", topicId: "cfa3-manager-selection-monitoring", text: "Prematurely firing a genuinely skilled manager is a:", optionA: "Type II error", optionB: "Type I error", optionC: "Data entry error", optionD: "Benchmark error", correctOption: "A", explanation: "Rejecting/firing a skilled manager is a Type II (false-negative) error.", orderIndex: 3 },
  { id: "cfa3-manager-selection-monitoring-q05", topicId: "cfa3-manager-selection-monitoring", text: "Retaining an unskilled manager is a:", optionA: "Type I error", optionB: "Type II error", optionC: "Rounding error", optionD: "Sampling error", correctOption: "A", explanation: "Keeping a manager with no real skill is a Type I (false-positive) error.", orderIndex: 4 },
  { id: "cfa3-manager-selection-monitoring-q06", topicId: "cfa3-manager-selection-monitoring", text: "Key-person risk monitoring watches for:", optionA: "Departure of a critical individual", optionB: "Currency moves", optionC: "Coupon changes", optionD: "Index rebalancing", correctOption: "A", explanation: "Over-reliance on one person means their exit can impair the strategy, a monitoring priority.", orderIndex: 5 },
  { id: "cfa3-manager-selection-monitoring-q07", topicId: "cfa3-manager-selection-monitoring", text: "Rapid asset growth toward capacity limits is a concern because it can:", optionA: "Erode alpha via market impact and crowding", optionB: "Lower fees automatically", optionC: "Guarantee returns", optionD: "Remove risk", correctOption: "A", explanation: "Too many assets raise transaction costs and reduce opportunity per dollar, decaying the strategy's edge.", orderIndex: 6 },
  { id: "cfa3-manager-selection-monitoring-q08", topicId: "cfa3-manager-selection-monitoring", text: "Operational red flags during monitoring include:", optionA: "Valuation, control, or service-provider problems", optionB: "Strong returns", optionC: "Low turnover", optionD: "Clear disclosures", correctOption: "A", explanation: "Operational issues (weak controls, valuation concerns, provider changes) are leading causes of fund failure.", orderIndex: 7 },
  { id: "cfa3-manager-selection-monitoring-q09", topicId: "cfa3-manager-selection-monitoring", text: "Performance should be evaluated:", optionA: "In the proper risk and style context, not in isolation", optionB: "Only versus cash", optionC: "Gross of everything", optionD: "Once at hiring", correctOption: "A", explanation: "Returns must be judged against the right benchmark/peers and the risk taken, not as a raw number.", orderIndex: 8 },
  { id: "cfa3-manager-selection-monitoring-q10", topicId: "cfa3-manager-selection-monitoring", text: "Transition (replacement) costs matter because firing a manager involves:", optionA: "Transaction costs and potential market impact", optionB: "No costs at all", optionC: "Higher guaranteed returns", optionD: "Lower risk only", correctOption: "A", explanation: "Replacing a manager incurs trading and transition costs that must be weighed against the expected benefit.", orderIndex: 9 },
  { id: "cfa3-manager-selection-monitoring-q11", topicId: "cfa3-manager-selection-monitoring", text: "A change in the manager's investment process should prompt:", optionA: "Re-evaluation of whether the thesis still holds", optionB: "An automatic fee cut", optionC: "Immediate ignore", optionD: "More leverage", correctOption: "A", explanation: "A process change can invalidate the original reason for hiring and warrants reassessment.", orderIndex: 10 },
  { id: "cfa3-manager-selection-monitoring-q12", topicId: "cfa3-manager-selection-monitoring", text: "Termination decisions should be based on:", optionA: "A sound, ex-ante framework rather than recent returns alone", optionB: "Last month's return only", optionC: "The cheapest option", optionD: "Fund size", correctOption: "A", explanation: "Disciplined, forward-looking criteria reduce both error types versus reacting to short-term performance.", orderIndex: 11 },

  // Manager Selection — Universe Definition & Process Screening
  { id: "cfa3-manager-selection-universe-q01", topicId: "cfa3-manager-selection-universe", text: "Sound manager selection begins by:", optionA: "Defining the universe / mandate", optionB: "Negotiating fees", optionC: "Firing the incumbent", optionD: "Setting marketing goals", correctOption: "A", explanation: "Specifying the asset class, style, region, and constraints defines the opportunity set before screening.", orderIndex: 0 },
  { id: "cfa3-manager-selection-universe-q02", topicId: "cfa3-manager-selection-universe", text: "A poorly defined universe leads to:", optionA: "Apples-to-oranges comparisons and misleading rankings", optionB: "Lower fees", optionC: "Guaranteed alpha", optionD: "No estimation error", correctOption: "A", explanation: "Comparing managers with different mandates produces invalid peer rankings and poor decisions.", orderIndex: 1 },
  { id: "cfa3-manager-selection-universe-q03", topicId: "cfa3-manager-selection-universe", text: "Quantitative screens typically filter on:", optionA: "Track-record length, AUM/capacity, risk-adjusted performance, fees", optionB: "Office decor", optionC: "Manager surnames", optionD: "Logo color", correctOption: "A", explanation: "Quant filters narrow the universe using measurable criteria like performance, capacity, and cost.", orderIndex: 2 },
  { id: "cfa3-manager-selection-universe-q04", topicId: "cfa3-manager-selection-universe", text: "Qualitative screens assess factors such as:", optionA: "Firm stability, transparency, and alignment", optionB: "Daily price ticks", optionC: "Index weights", optionD: "Coupon rates", correctOption: "A", explanation: "Qualitative criteria gauge the organization's soundness, openness, and incentive alignment.", orderIndex: 3 },
  { id: "cfa3-manager-selection-universe-q05", topicId: "cfa3-manager-selection-universe", text: "Databases used for screening should be adjusted for:", optionA: "Survivorship and backfill bias", optionB: "Currency only", optionC: "Coupon reinvestment", optionD: "Convexity", correctOption: "A", explanation: "Without correcting these biases, screens are built on inflated historical performance.", orderIndex: 4 },
  { id: "cfa3-manager-selection-universe-q06", topicId: "cfa3-manager-selection-universe", text: "Managers surviving the screen proceed to:", optionA: "Full investment and operational due diligence", optionB: "Immediate funding", optionC: "Termination", optionD: "A fee auction", correctOption: "A", explanation: "Screening yields a shortlist that then undergoes deep investment and operational due diligence.", orderIndex: 5 },
  { id: "cfa3-manager-selection-universe-q07", topicId: "cfa3-manager-selection-universe", text: "Including capacity in the universe definition matters because:", optionA: "A strategy too large for the mandate may decay in alpha", optionB: "Capacity is irrelevant", optionC: "It sets fees", optionD: "It removes risk", correctOption: "A", explanation: "Strategies near capacity can struggle to deploy new assets without eroding their edge.", orderIndex: 6 },
  { id: "cfa3-manager-selection-universe-q08", topicId: "cfa3-manager-selection-universe", text: "Specifying the investment vehicle (e.g., separate account vs. fund) affects:", optionA: "Liquidity, customization, and control", optionB: "Nothing", optionC: "Only the logo", optionD: "The risk-free rate", correctOption: "A", explanation: "Vehicle choice influences liquidity terms, customization, fees, and governance, so it belongs in the mandate.", orderIndex: 7 },
  { id: "cfa3-manager-selection-universe-q09", topicId: "cfa3-manager-selection-universe", text: "Constraints like ESG or leverage limits should be:", optionA: "Built into the universe/mandate definition", optionB: "Ignored", optionC: "Added after funding only", optionD: "Set by the manager alone", correctOption: "A", explanation: "Client constraints define which managers are even eligible and belong in the universe specification.", orderIndex: 8 },
  { id: "cfa3-manager-selection-universe-q10", topicId: "cfa3-manager-selection-universe", text: "The goal of a documented selection process is to:", optionA: "Be repeatable and control both error types", optionB: "Pick the cheapest manager", optionC: "Maximize AUM", optionD: "Avoid all due diligence", correctOption: "A", explanation: "A disciplined, repeatable process reduces Type I/II errors and yields defensible decisions.", orderIndex: 9 },
  { id: "cfa3-manager-selection-universe-q11", topicId: "cfa3-manager-selection-universe", text: "The final output of selection should be:", optionA: "A conviction-weighted recommendation grounded in skill and operations", optionB: "A ranking by last year's return", optionC: "The largest fund", optionD: "The newest firm", correctOption: "A", explanation: "Selection should produce a forward-looking, conviction-based decision integrating skill and operational soundness.", orderIndex: 10 },
  { id: "cfa3-manager-selection-universe-q12", topicId: "cfa3-manager-selection-universe", text: "Screening on fees in the universe stage helps:", optionA: "Eliminate managers whose costs outweigh expected skill", optionB: "Increase tracking error", optionC: "Guarantee returns", optionD: "Add leverage", correctOption: "A", explanation: "Filtering on cost early removes managers unlikely to deliver value net of fees.", orderIndex: 11 }
];
