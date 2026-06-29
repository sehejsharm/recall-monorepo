// CFA Level III — additional readings (12 questions each).
import type { AuthoredMaterial } from "./builder";
import type { Question, Subject, Topic } from "@jyotir/core";

export const expSubjects: Subject[] = [
  { id: "cfa3-equity-pm", examId: "cfa-3", name: "Equity Portfolio Management", slug: "equity-pm", orderIndex: 5 },
  { id: "cfa3-risk-management", examId: "cfa-3", name: "Risk Management", slug: "risk-management", orderIndex: 6 },
  { id: "cfa3-private-wealth", examId: "cfa-3", name: "Private Wealth Management", slug: "private-wealth", orderIndex: 7 },
  { id: "cfa3-institutional", examId: "cfa-3", name: "Institutional Investors", slug: "institutional", orderIndex: 8 }
];

export const expTopics: Topic[] = [
  { id: "cfa3-equity-pm-passive-active-factor", subjectId: "cfa3-equity-pm", name: "Passive, Active & Factor Investing", slug: "passive-active-factor", orderIndex: 0 },
  { id: "cfa3-risk-management-derivatives", subjectId: "cfa3-risk-management", name: "Risk Management with Derivatives", slug: "derivatives", orderIndex: 0 },
  { id: "cfa3-private-wealth-tax-estate", subjectId: "cfa3-private-wealth", name: "Private Wealth: Tax & Estate Planning", slug: "tax-estate", orderIndex: 0 },
  { id: "cfa3-institutional-pensions-endowments", subjectId: "cfa3-institutional", name: "Pensions & Endowments", slug: "pensions-endowments", orderIndex: 0 }
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
  { id: "cfa3-institutional-pensions-endowments-q12", topicId: "cfa3-institutional-pensions-endowments", text: "Endowments' long horizons and high risk tolerance often lead to large allocations to:", optionA: "Cash and T-bills", optionB: "Equities and alternative investments", optionC: "Short-term deposits only", optionD: "A single bond", correctOption: "B", explanation: "To meet real-return objectives over perpetual horizons, endowments tilt toward equities and alternatives (the 'endowment model').", orderIndex: 11 }
];
