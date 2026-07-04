// CFA Level III — portfolio management & wealth planning focus. A focused,
// high-yield starter track (12 questions per reading); expandable toward the
// full Level III curriculum.
import { defineBundle } from "./builder";
import type { Question } from "@jyotir/core";
import type { AuthoredMaterial } from "./builder";
import { expSubjects, expTopics, expMaterials, expQuestions } from "./cfa-l3-exp";
import { exp2Topics, exp2Materials, exp2Questions } from "./cfa-l3-exp2";

const exam = {
  id: "cfa-3",
  slug: "cfa-3" as const,
  name: "CFA Level III",
  tagline: "Portfolio management & wealth: behavior · allocation · attribution",
  orderIndex: 7,
  family: "cfa",
  familyName: "CFA Program",
  familyTagline: "Chartered Financial Analyst — pick your level",
  levelLabel: "Level III"
};

const subjects = [
  { id: "cfa3-behavioral", examId: "cfa-3", name: "Behavioral Finance", slug: "behavioral", orderIndex: 0 },
  { id: "cfa3-capital-market-expectations", examId: "cfa-3", name: "Capital Market Expectations", slug: "capital-market-expectations", orderIndex: 1 },
  { id: "cfa3-asset-allocation", examId: "cfa-3", name: "Asset Allocation", slug: "asset-allocation", orderIndex: 2 },
  { id: "cfa3-fixed-income-pm", examId: "cfa-3", name: "Fixed Income Portfolio Management", slug: "fixed-income-pm", orderIndex: 3 },
  { id: "cfa3-performance", examId: "cfa-3", name: "Performance Evaluation", slug: "performance", orderIndex: 4 }
];

const topics = [
  { id: "cfa3-behavioral-biases-portfolio", subjectId: "cfa3-behavioral", name: "Behavioral Biases in Portfolio Construction", slug: "biases-portfolio", orderIndex: 0 },
  { id: "cfa3-capital-market-expectations-forecasting", subjectId: "cfa3-capital-market-expectations", name: "Forecasting Returns & Economic Analysis", slug: "forecasting", orderIndex: 0 },
  { id: "cfa3-asset-allocation-strategic", subjectId: "cfa3-asset-allocation", name: "Strategic Asset Allocation", slug: "strategic", orderIndex: 0 },
  { id: "cfa3-fixed-income-pm-ldi", subjectId: "cfa3-fixed-income-pm", name: "Liability-Driven Investing & Immunization", slug: "ldi", orderIndex: 0 },
  { id: "cfa3-performance-attribution", subjectId: "cfa3-performance", name: "Attribution & Appraisal Measures", slug: "attribution", orderIndex: 0 }
];

const materials: AuthoredMaterial[] = [
  {
    id: "cfa3-behavioral-biases-portfolio-m01",
    topicId: "cfa3-behavioral-biases-portfolio",
    title: "Behavioral Biases in Portfolio Construction",
    content: `Biases split into **cognitive errors** (faulty reasoning — *moderate* them with education/data) and **emotional biases** (feeling-based — *adapt* the plan around them).

## Cognitive
- Belief perseverance: **conservatism, confirmation, representativeness, illusion of control, hindsight.**
- Information processing: **anchoring, mental accounting, framing, availability.**

## Emotional
- **Loss aversion** (→ disposition effect), **overconfidence, self-control, status quo, endowment, regret aversion.**

## In portfolios
- Biases cause **inertia/under-diversification** (status quo, endowment, home bias), **excessive trading** (overconfidence), and **mis-set risk** (overconfidence lowers, loss aversion raises perceived risk).
- A **behaviorally modified asset allocation** lets clients deviate modestly from the rational optimum so they can stick with the plan. Higher willingness/standard-of-living-risk tolerance → larger allowable deviations.
- **Goals-based investing** uses mental-accounting tendencies constructively (separate risk buckets per goal).`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa3-capital-market-expectations-forecasting-m01",
    topicId: "cfa3-capital-market-expectations-forecasting",
    title: "Forecasting Returns & Economic Analysis",
    content: `**Capital market expectations (CME)** are forecasts of risk, return, and correlations used to set asset allocation.

## Pitfalls
- Anchoring, status-quo and confirmation bias; **data-mining**; using **non-stationary** historical data; survivorship bias; **time-period bias**.

## Tools
- **Grinold-Kroner** equity return ≈ dividend yield − Δshares + nominal earnings growth + Δ(P/E):  D/P − ΔS + i + g + ΔPE.
- **Building-block** fixed income: real risk-free + inflation + term + credit + liquidity premia.
- **Singer-Terhaar** (ICAPM): blends fully integrated and fully segmented market risk premia using the degree of integration; RP = ρ·σ·(market Sharpe).
- **Taylor rule** for the policy rate: r* + inflation + 0.5(inflation gap) + 0.5(output gap).

## Business cycle
- Map phases (initial recovery → late expansion → slowdown → contraction) to asset-class returns; leading/coincident/lagging indicators inform timing.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa3-asset-allocation-strategic-m01",
    topicId: "cfa3-asset-allocation-strategic",
    title: "Strategic Asset Allocation",
    content: `**Strategic asset allocation (SAA)** sets long-run policy weights from the IPS objectives and constraints; it is the dominant driver of long-run return variability.

## Approaches
- **Asset-only** (e.g. mean-variance optimization, MVO) — maximize utility = E[R] − ½λσ². MVO is **sensitive to inputs** ("error maximization"); remedies: constraints, **resampling**, Black-Litterman, reverse optimization.
- **Liability-relative** — manage assets against liabilities (pensions, insurers); surplus optimization.
- **Goals-based** — sub-portfolios per goal, each with its own time horizon and required probability of success.

## Risk concepts
- **Risk budgeting** allocates risk (not just capital); **risk parity** equalizes risk contributions.
- **Rebalancing**: calendar vs **percentage-range** (corridor); wider corridors for illiquid/high-cost/low-correlation assets. Rebalancing harvests a **diversification return** and is contrarian.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa3-fixed-income-pm-ldi-m01",
    topicId: "cfa3-fixed-income-pm-ldi",
    title: "Liability-Driven Investing & Immunization",
    content: `**LDI** manages assets to fund a known set of liabilities.

## Single liability — immunization
- **Match Macaulay duration** of assets to the liability (investment) horizon, set **PV(assets) ≥ PV(liability)**, and **minimize convexity/dispersion** of the asset portfolio so it tracks the liability under parallel shifts.
- Immunization locks in a target return against **small parallel** rate moves; rebalance as durations drift.

## Multiple liabilities
- **Cash-flow matching** (dedication) buys bonds whose cash flows match each liability — lowest risk, least flexible.
- **Duration matching** matches the portfolio's BPV to the liabilities' BPV — more flexible, exposes some structural/curve risk.

## Risks
- **Structural risk** (non-parallel/twist moves), **basis/spread risk**, model and rebalancing risk. Minimizing dispersion reduces structural risk.
- Contingent immunization allows **active management** while a safety cushion (surplus) exists.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa3-performance-attribution-m01",
    topicId: "cfa3-performance-attribution",
    title: "Attribution & Appraisal Measures",
    content: `Performance evaluation = **measurement** (return), **attribution** (sources), and **appraisal** (skill vs luck).

## Attribution
- **Brinson** decomposes active return into **allocation** (over/underweighting sectors), **selection** (picking within sectors), and **interaction**.
- **Returns-based** uses a factor model; **holdings/transaction-based** uses actual positions (more accurate, more data).

## Appraisal (risk-adjusted) ratios
| Measure | Risk used |
| --- | --- |
| **Sharpe** | Total volatility |
| **Treynor** | Beta |
| **Information ratio** | Tracking error (active risk) |
| **M² (Modigliani)** | Total risk, expressed in return units |
| **Jensen's alpha** | CAPM beta (excess over required) |

- **IR ≈ IC × √breadth** (fundamental law of active management).
- Use the **appropriate, investable, specified-in-advance** benchmark; check for **style/benchmark misfit**.`,
    estimatedReadTime: 2,
    orderIndex: 0
  }
];

const questions: Question[] = [
  // Behavioral biases
  { id: "cfa3-behavioral-biases-portfolio-q01", topicId: "cfa3-behavioral-biases-portfolio", text: "The recommended treatment of cognitive errors versus emotional biases is to:", optionA: "Adapt to cognitive, moderate emotional", optionB: "Moderate cognitive, adapt to emotional", optionC: "Ignore both", optionD: "Eliminate both completely", correctOption: "B", explanation: "Cognitive errors can usually be moderated with education/data, while harder-to-change emotional biases are accommodated (adapted to).", orderIndex: 0 },
  { id: "cfa3-behavioral-biases-portfolio-q02", topicId: "cfa3-behavioral-biases-portfolio", text: "Holding too much of an inherited stock because selling 'feels wrong' is an example of:", optionA: "Anchoring (cognitive)", optionB: "Endowment bias (emotional)", optionC: "Confirmation bias", optionD: "Availability bias", correctOption: "B", explanation: "Endowment bias is an emotional bias where owners over-value assets they hold, causing under-diversification.", orderIndex: 1 },
  { id: "cfa3-behavioral-biases-portfolio-q03", topicId: "cfa3-behavioral-biases-portfolio", text: "Overconfidence most commonly leads investors to:", optionA: "Hold excess cash", optionB: "Trade excessively and under-diversify", optionC: "Avoid all equities", optionD: "Over-rebalance", correctOption: "B", explanation: "Overconfident investors overrate their information/skill, leading to excessive trading and concentrated portfolios.", orderIndex: 2 },
  { id: "cfa3-behavioral-biases-portfolio-q04", topicId: "cfa3-behavioral-biases-portfolio", text: "A behaviorally modified asset allocation generally allows larger deviations from the rational optimum when the client has:", optionA: "Low ability to take risk and mostly cognitive biases", optionB: "High standard-of-living risk and emotional biases the advisor adapts to", optionC: "No biases at all", optionD: "Only confirmation bias", correctOption: "B", explanation: "Greater allowable deviations accompany emotional biases (which are adapted to) when standard-of-living risk is high enough to tolerate them.", orderIndex: 3 },
  { id: "cfa3-behavioral-biases-portfolio-q05", topicId: "cfa3-behavioral-biases-portfolio", text: "The disposition effect—selling winners early and holding losers—arises mainly from:", optionA: "Loss aversion", optionB: "Anchoring", optionC: "Framing", optionD: "Hindsight bias", correctOption: "A", explanation: "Loss aversion makes realizing losses painful, so investors hold losers and sell winners (the disposition effect).", orderIndex: 4 },
  { id: "cfa3-behavioral-biases-portfolio-q06", topicId: "cfa3-behavioral-biases-portfolio", text: "Mental accounting can be used constructively through:", optionA: "Goals-based investing with separate risk buckets", optionB: "Ignoring client goals", optionC: "A single combined portfolio only", optionD: "Maximizing turnover", correctOption: "A", explanation: "Goals-based investing leverages the natural tendency to mentally segregate money, assigning each goal its own sub-portfolio and risk level.", orderIndex: 5 },
  { id: "cfa3-behavioral-biases-portfolio-q07", topicId: "cfa3-behavioral-biases-portfolio", text: "Representativeness bias is best described as:", optionA: "Over-relying on an initial number", optionB: "Judging probability by similarity to a stereotype/sample", optionC: "Seeking confirming evidence", optionD: "Fear of regret", correctOption: "B", explanation: "Representativeness classifies new information based on resemblance to past patterns or stereotypes, often ignoring base rates.", orderIndex: 6 },
  { id: "cfa3-behavioral-biases-portfolio-q08", topicId: "cfa3-behavioral-biases-portfolio", text: "Status quo and endowment biases tend to cause portfolios to be:", optionA: "Over-traded", optionB: "Inert and under-diversified", optionC: "Perfectly efficient", optionD: "Fully hedged", correctOption: "B", explanation: "These biases create inertia—investors leave holdings unchanged—leading to under-diversification.", orderIndex: 7 },
  { id: "cfa3-behavioral-biases-portfolio-q09", topicId: "cfa3-behavioral-biases-portfolio", text: "Confirmation bias is categorized as a:", optionA: "Emotional bias", optionB: "Cognitive error", optionC: "Market anomaly", optionD: "Risk measure", correctOption: "B", explanation: "Confirmation bias is a cognitive (belief-perseverance) error: seeking information that supports existing views.", orderIndex: 8 },
  { id: "cfa3-behavioral-biases-portfolio-q10", topicId: "cfa3-behavioral-biases-portfolio", text: "According to prospect theory, investors tend to be risk-seeking in the domain of:", optionA: "Gains", optionB: "Losses", optionC: "Neither", optionD: "Both equally", correctOption: "B", explanation: "Prospect theory finds risk-averse behavior over gains but risk-seeking behavior over losses, relative to a reference point.", orderIndex: 9 },
  { id: "cfa3-behavioral-biases-portfolio-q11", topicId: "cfa3-behavioral-biases-portfolio", text: "Anchoring and adjustment is a bias in which investors:", optionA: "Fixate on an initial value and adjust insufficiently", optionB: "Follow the crowd", optionC: "Overestimate their own skill", optionD: "Avoid realizing losses", correctOption: "A", explanation: "Anchoring fixes estimates near an initial reference point, with inadequate adjustment as new information arrives.", orderIndex: 10 },
  { id: "cfa3-behavioral-biases-portfolio-q12", topicId: "cfa3-behavioral-biases-portfolio", text: "Home bias—overweighting domestic securities—is most directly a form of:", optionA: "Familiarity/availability bias", optionB: "Loss aversion", optionC: "Self-control bias", optionD: "Hindsight bias", correctOption: "A", explanation: "Home bias reflects familiarity (a relative of availability bias): investors favor what they know, reducing diversification.", orderIndex: 11 },

  // Capital market expectations
  { id: "cfa3-capital-market-expectations-forecasting-q01", topicId: "cfa3-capital-market-expectations-forecasting", text: "The Grinold-Kroner model decomposes expected equity return into income, nominal earnings growth, and:", optionA: "Repricing (change in the P/E ratio)", optionB: "The risk-free rate only", optionC: "Tracking error", optionD: "Beta", correctOption: "A", explanation: "Grinold-Kroner ≈ dividend yield − Δshares + (inflation + real growth) + Δ(P/E), where the last term is repricing.", orderIndex: 0 },
  { id: "cfa3-capital-market-expectations-forecasting-q02", topicId: "cfa3-capital-market-expectations-forecasting", text: "Using a sample period dominated by a bull market to forecast long-run returns is an example of:", optionA: "Time-period bias", optionB: "Survivorship bias", optionC: "Anchoring", optionD: "The Taylor rule", correctOption: "A", explanation: "Time-period bias arises when a forecast over-reflects the particular (e.g., bull-market) window used to estimate it.", orderIndex: 1 },
  { id: "cfa3-capital-market-expectations-forecasting-q03", topicId: "cfa3-capital-market-expectations-forecasting", text: "The building-block approach to a bond's expected return sums the real risk-free rate, expected inflation, and:", optionA: "Term, credit, and liquidity premia", optionB: "The equity risk premium", optionC: "The P/E change", optionD: "Beta times the market premium", correctOption: "A", explanation: "Building-block fixed-income returns add a term (maturity) premium, credit premium, and liquidity premium to the real rate plus inflation.", orderIndex: 2 },
  { id: "cfa3-capital-market-expectations-forecasting-q04", topicId: "cfa3-capital-market-expectations-forecasting", text: "The Singer-Terhaar approach estimates a risk premium by blending fully integrated and fully segmented markets based on the degree of:", optionA: "Market integration", optionB: "Inflation", optionC: "Leverage", optionD: "Liquidity only", correctOption: "A", explanation: "Singer-Terhaar weights the integrated and segmented risk premia by how integrated the market is with global markets.", orderIndex: 3 },
  { id: "cfa3-capital-market-expectations-forecasting-q05", topicId: "cfa3-capital-market-expectations-forecasting", text: "The Taylor rule helps forecast the:", optionA: "Equity risk premium", optionB: "Neutral/policy short-term interest rate", optionC: "Credit spread", optionD: "Dividend yield", correctOption: "B", explanation: "The Taylor rule estimates the appropriate central-bank policy rate from the neutral rate, inflation gap, and output gap.", orderIndex: 4 },
  { id: "cfa3-capital-market-expectations-forecasting-q06", topicId: "cfa3-capital-market-expectations-forecasting", text: "Finding a spurious 'predictor' by searching many variables until one fits is:", optionA: "Data mining (data snooping)", optionB: "Building-block estimation", optionC: "Risk budgeting", optionD: "Immunization", correctOption: "A", explanation: "Data mining/snooping produces relationships that fit past data by chance and typically fail out of sample.", orderIndex: 5 },
  { id: "cfa3-capital-market-expectations-forecasting-q07", topicId: "cfa3-capital-market-expectations-forecasting", text: "Using a covariance matrix estimated from historical data assumes the data are:", optionA: "Non-stationary", optionB: "Reasonably stationary over the forecast horizon", optionC: "Risk-free", optionD: "Lognormal only", correctOption: "B", explanation: "Historical estimates are valid only if the underlying statistical relationships are roughly stationary; regime shifts undermine them.", orderIndex: 6 },
  { id: "cfa3-capital-market-expectations-forecasting-q08", topicId: "cfa3-capital-market-expectations-forecasting", text: "During the 'initial recovery' phase of the business cycle, which is typically expected?", optionA: "Falling stock prices and rising short rates", optionB: "Rising stock prices with still-accommodative monetary policy", optionC: "Inverted yield curve", optionD: "Deep recession", correctOption: "B", explanation: "Early recovery usually features improving confidence, rising equities, and still-low policy rates supporting growth.", orderIndex: 7 },
  { id: "cfa3-capital-market-expectations-forecasting-q09", topicId: "cfa3-capital-market-expectations-forecasting", text: "Excluding failed funds from a historical return sample causes:", optionA: "Survivorship bias (overstated returns)", optionB: "Anchoring", optionC: "Understated returns", optionD: "No bias", correctOption: "A", explanation: "Survivorship bias inflates measured returns because only the surviving (better-performing) funds remain in the sample.", orderIndex: 8 },
  { id: "cfa3-capital-market-expectations-forecasting-q10", topicId: "cfa3-capital-market-expectations-forecasting", text: "In the Grinold-Kroner model, a net share buyback (negative ΔS) will:", optionA: "Decrease expected return", optionB: "Increase expected return", optionC: "Have no effect", optionD: "Eliminate the dividend yield", correctOption: "B", explanation: "Net buybacks reduce share count (negative ΔS); since the model subtracts ΔS, buybacks raise the expected per-share return.", orderIndex: 9 },
  { id: "cfa3-capital-market-expectations-forecasting-q11", topicId: "cfa3-capital-market-expectations-forecasting", text: "Leading economic indicators are useful in CME because they:", optionA: "Confirm past activity", optionB: "Tend to change ahead of the overall economy", optionC: "Lag the cycle", optionD: "Measure only inflation", correctOption: "B", explanation: "Leading indicators (e.g., new orders, building permits) shift before the broader economy, aiding cyclical forecasting.", orderIndex: 10 },
  { id: "cfa3-capital-market-expectations-forecasting-q12", topicId: "cfa3-capital-market-expectations-forecasting", text: "A key limitation of relying on past correlations for asset allocation is that correlations:", optionA: "Are always stable", optionB: "Can rise toward 1 in crises, reducing diversification when it's needed most", optionC: "Are irrelevant to risk", optionD: "Equal beta", correctOption: "B", explanation: "Correlations often spike during market stress, undermining the diversification benefits assumed from calmer historical periods.", orderIndex: 11 },

  // Strategic asset allocation
  { id: "cfa3-asset-allocation-strategic-q01", topicId: "cfa3-asset-allocation-strategic", text: "Strategic asset allocation is primarily derived from the:", optionA: "Latest market momentum", optionB: "Investor's objectives and constraints in the IPS", optionC: "Most recent quarter's returns", optionD: "Broker recommendations", correctOption: "B", explanation: "SAA translates the IPS's return objectives, risk tolerance, and constraints into long-run policy weights.", orderIndex: 0 },
  { id: "cfa3-asset-allocation-strategic-q02", topicId: "cfa3-asset-allocation-strategic", text: "Mean-variance optimization is often criticized as an 'error maximizer' because it is highly sensitive to:", optionA: "The number of assets only", optionB: "Estimation error in expected returns", optionC: "The risk-free rate alone", optionD: "Tax rates", correctOption: "B", explanation: "MVO concentrates weights in assets with the highest (often mis-estimated) expected returns, magnifying input errors.", orderIndex: 1 },
  { id: "cfa3-asset-allocation-strategic-q03", topicId: "cfa3-asset-allocation-strategic", text: "Which approach is most appropriate for a defined-benefit pension that must fund future obligations?", optionA: "Asset-only optimization", optionB: "Liability-relative asset allocation", optionC: "Pure momentum", optionD: "Single-stock concentration", correctOption: "B", explanation: "Liability-relative (surplus) allocation manages assets against the plan's liabilities, the natural fit for a DB pension.", orderIndex: 2 },
  { id: "cfa3-asset-allocation-strategic-q04", topicId: "cfa3-asset-allocation-strategic", text: "Risk parity allocates so that each asset contributes:", optionA: "Equal capital", optionB: "Equal risk to the portfolio", optionC: "Equal expected return", optionD: "Zero risk", correctOption: "B", explanation: "Risk parity sizes positions so each asset contributes an equal share of total portfolio risk, rather than equal capital.", orderIndex: 3 },
  { id: "cfa3-asset-allocation-strategic-q05", topicId: "cfa3-asset-allocation-strategic", text: "The Black-Litterman model improves MVO by:", optionA: "Ignoring market equilibrium", optionB: "Blending market-implied equilibrium returns with the investor's views", optionC: "Removing all constraints", optionD: "Using only historical returns", correctOption: "B", explanation: "Black-Litterman starts from reverse-optimized equilibrium returns and tilts them toward the investor's views, yielding stabler weights.", orderIndex: 4 },
  { id: "cfa3-asset-allocation-strategic-q06", topicId: "cfa3-asset-allocation-strategic", text: "A percentage-range (corridor) rebalancing policy should generally use WIDER corridors for assets that are:", optionA: "Highly liquid and low-cost to trade", optionB: "Illiquid or costly to trade", optionC: "Perfectly correlated with the portfolio", optionD: "Risk-free", correctOption: "B", explanation: "Higher transaction costs/illiquidity justify wider corridors to avoid frequent, expensive rebalancing trades.", orderIndex: 5 },
  { id: "cfa3-asset-allocation-strategic-q07", topicId: "cfa3-asset-allocation-strategic", text: "Goals-based asset allocation constructs:", optionA: "A single portfolio for all goals", optionB: "Separate sub-portfolios matched to each goal's horizon and required success", optionC: "Only a cash portfolio", optionD: "Equal weights across all assets", correctOption: "B", explanation: "Goals-based investing builds distinct sub-portfolios, each sized and invested for a specific goal and probability of success.", orderIndex: 6 },
  { id: "cfa3-asset-allocation-strategic-q08", topicId: "cfa3-asset-allocation-strategic", text: "Disciplined rebalancing back to target weights is inherently:", optionA: "A momentum (trend-following) strategy", optionB: "A contrarian strategy that sells winners and buys losers", optionC: "Identical to buy-and-hold", optionD: "Risk-free", correctOption: "B", explanation: "Rebalancing trims appreciated assets and adds to laggards, a contrarian action that can earn a diversification return.", orderIndex: 7 },
  { id: "cfa3-asset-allocation-strategic-q09", topicId: "cfa3-asset-allocation-strategic", text: "Risk budgeting is the process of:", optionA: "Allocating capital equally", optionB: "Allocating the portfolio's risk across positions/factors", optionC: "Minimizing the number of trades", optionD: "Setting the management fee", correctOption: "B", explanation: "Risk budgeting decides how much of the total risk each position or factor is permitted to contribute.", orderIndex: 8 },
  { id: "cfa3-asset-allocation-strategic-q10", topicId: "cfa3-asset-allocation-strategic", text: "Across long horizons, the largest share of the variation in a diversified portfolio's returns is typically attributed to:", optionA: "Security selection", optionB: "Strategic asset allocation", optionC: "Market timing", optionD: "Trading costs", correctOption: "B", explanation: "Empirically, the policy (strategic) asset allocation explains most of the variability of long-run portfolio returns.", orderIndex: 9 },
  { id: "cfa3-asset-allocation-strategic-q11", topicId: "cfa3-asset-allocation-strategic", text: "Reverse optimization is used to:", optionA: "Derive expected returns implied by a set of market-cap weights", optionB: "Eliminate risk", optionC: "Forecast inflation", optionD: "Compute duration", correctOption: "A", explanation: "Reverse optimization backs out the expected returns implied by observed (equilibrium) asset weights, a key input to Black-Litterman.", orderIndex: 10 },
  { id: "cfa3-asset-allocation-strategic-q12", topicId: "cfa3-asset-allocation-strategic", text: "Resampling and adding constraints are remedies for which MVO problem?", optionA: "Excessive diversification", optionB: "Concentrated, unstable weights driven by input error", optionC: "Too few asset classes", optionD: "Negative volatility", correctOption: "B", explanation: "Constraints and resampled efficiency reduce MVO's tendency to produce highly concentrated, input-sensitive allocations.", orderIndex: 11 },

  // LDI & immunization
  { id: "cfa3-fixed-income-pm-ldi-q01", topicId: "cfa3-fixed-income-pm-ldi", text: "To immunize a single liability, the asset portfolio's Macaulay duration should be set equal to the:", optionA: "Liability's coupon rate", optionB: "Liability's (investment) horizon", optionC: "Risk-free rate", optionD: "Portfolio's convexity", correctOption: "B", explanation: "Single-liability immunization matches the portfolio's Macaulay duration to the liability horizon so price and reinvestment effects offset.", orderIndex: 0 },
  { id: "cfa3-fixed-income-pm-ldi-q02", topicId: "cfa3-fixed-income-pm-ldi", text: "Beyond matching duration, immunizing a single liability also requires the present value of assets to be:", optionA: "Less than the PV of the liability", optionB: "At least equal to the PV of the liability", optionC: "Exactly zero", optionD: "Equal to the coupon", correctOption: "B", explanation: "The asset PV must be greater than or equal to the liability PV so the obligation can be funded.", orderIndex: 1 },
  { id: "cfa3-fixed-income-pm-ldi-q03", topicId: "cfa3-fixed-income-pm-ldi", text: "To reduce structural risk in an immunized portfolio, an analyst should minimize the portfolio's:", optionA: "Convexity/dispersion of cash flows", optionB: "Duration", optionC: "Present value", optionD: "Coupon", correctOption: "A", explanation: "Lower dispersion/convexity makes the asset portfolio behave like the single liability, reducing exposure to non-parallel shifts (structural risk).", orderIndex: 2 },
  { id: "cfa3-fixed-income-pm-ldi-q04", topicId: "cfa3-fixed-income-pm-ldi", text: "Cash-flow matching (dedication) for multiple liabilities is characterized as:", optionA: "Highest risk, most flexible", optionB: "Lowest risk, least flexible", optionC: "Identical to duration matching", optionD: "Requiring no bonds", correctOption: "B", explanation: "Dedication buys bonds whose cash flows directly fund each liability—minimal risk but the least flexible approach.", orderIndex: 3 },
  { id: "cfa3-fixed-income-pm-ldi-q05", topicId: "cfa3-fixed-income-pm-ldi", text: "Immunization most reliably protects against ____ changes in interest rates.", optionA: "Large, non-parallel", optionB: "Small, parallel", optionC: "Only rising", optionD: "Only falling", correctOption: "B", explanation: "Classical immunization locks in a return against small, parallel yield-curve shifts; twists create residual structural risk.", orderIndex: 4 },
  { id: "cfa3-fixed-income-pm-ldi-q06", topicId: "cfa3-fixed-income-pm-ldi", text: "Duration matching of multiple liabilities, versus cash-flow matching, is generally:", optionA: "Less flexible", optionB: "More flexible but exposed to some curve/structural risk", optionC: "Risk-free", optionD: "Impossible", correctOption: "B", explanation: "Matching BPV gives more portfolio flexibility than dedication but leaves exposure to non-parallel curve moves.", orderIndex: 5 },
  { id: "cfa3-fixed-income-pm-ldi-q07", topicId: "cfa3-fixed-income-pm-ldi", text: "An immunized portfolio must be rebalanced over time because, as rates and time change, the portfolio's duration:", optionA: "Stays perfectly matched forever", optionB: "Drifts away from the liability's duration", optionC: "Becomes negative", optionD: "Equals its convexity", correctOption: "B", explanation: "Duration changes with the passage of time and yield moves, so periodic rebalancing is needed to maintain the match.", orderIndex: 6 },
  { id: "cfa3-fixed-income-pm-ldi-q08", topicId: "cfa3-fixed-income-pm-ldi", text: "Contingent immunization permits active management as long as the portfolio maintains a sufficient:", optionA: "Number of bonds", optionB: "Surplus (safety cushion) above the required terminal value", optionC: "Credit rating", optionD: "Cash balance only", correctOption: "B", explanation: "Contingent immunization allows active management while a cushion exists; if the surplus is exhausted, the manager reverts to pure immunization.", orderIndex: 7 },
  { id: "cfa3-fixed-income-pm-ldi-q09", topicId: "cfa3-fixed-income-pm-ldi", text: "A pension using bonds to hedge the interest-rate sensitivity of its liabilities is practicing:", optionA: "Liability-driven investing", optionB: "Momentum investing", optionC: "Pure indexing of equities", optionD: "Currency overlay", correctOption: "A", explanation: "Managing assets specifically to hedge/fund the liabilities' interest-rate exposure is liability-driven investing (LDI).", orderIndex: 8 },
  { id: "cfa3-fixed-income-pm-ldi-q10", topicId: "cfa3-fixed-income-pm-ldi", text: "The basis point value (BPV) hedge for liabilities aims to set asset BPV:", optionA: "To zero", optionB: "Equal to the liabilities' BPV", optionC: "Equal to the coupon", optionD: "Above convexity", correctOption: "B", explanation: "Matching the asset and liability BPV neutralizes the net interest-rate sensitivity of the surplus to small parallel moves.", orderIndex: 9 },
  { id: "cfa3-fixed-income-pm-ldi-q11", topicId: "cfa3-fixed-income-pm-ldi", text: "Structural risk in immunization comes primarily from:", optionA: "Parallel shifts", optionB: "Non-parallel (twist) yield-curve movements", optionC: "Coupon reinvestment at the YTM", optionD: "Holding to maturity", correctOption: "B", explanation: "Twists and non-parallel shifts cause the immunized portfolio to diverge from the liability—this residual is structural risk.", orderIndex: 10 },
  { id: "cfa3-fixed-income-pm-ldi-q12", topicId: "cfa3-fixed-income-pm-ldi", text: "Compared with cash-flow matching, immunization with a duration target generally requires:", optionA: "More frequent rebalancing", optionB: "No rebalancing ever", optionC: "Exactly matching every cash flow", optionD: "Only zero-coupon bonds", correctOption: "A", explanation: "Duration-based immunization needs ongoing rebalancing as durations drift, whereas a fully dedicated cash-flow match is largely set-and-forget.", orderIndex: 11 },

  // Attribution & appraisal
  { id: "cfa3-performance-attribution-q01", topicId: "cfa3-performance-attribution", text: "Brinson-style performance attribution decomposes active return into allocation, selection, and:", optionA: "Interaction", optionB: "Inflation", optionC: "Duration", optionD: "Tracking error", correctOption: "A", explanation: "The Brinson model splits active return into allocation, selection, and an interaction term.", orderIndex: 0 },
  { id: "cfa3-performance-attribution-q02", topicId: "cfa3-performance-attribution", text: "The information ratio is defined as active return divided by:", optionA: "Beta", optionB: "Tracking error (active risk)", optionC: "Total volatility", optionD: "The risk-free rate", correctOption: "B", explanation: "IR = active return / tracking error, measuring active return earned per unit of active risk.", orderIndex: 1 },
  { id: "cfa3-performance-attribution-q03", topicId: "cfa3-performance-attribution", text: "The M² (Modigliani) measure expresses risk-adjusted performance in units of:", optionA: "Beta", optionB: "Return (comparable to the benchmark at equal total risk)", optionC: "Tracking error", optionD: "Duration", correctOption: "B", explanation: "M² restates the Sharpe ratio as a return: the portfolio's return if levered/de-levered to the benchmark's total risk.", orderIndex: 2 },
  { id: "cfa3-performance-attribution-q04", topicId: "cfa3-performance-attribution", text: "The Treynor ratio uses which measure of risk in its denominator?", optionA: "Total volatility", optionB: "Beta (systematic risk)", optionC: "Tracking error", optionD: "Downside deviation", correctOption: "B", explanation: "The Treynor ratio divides excess return by beta, appropriate for a well-diversified sub-portfolio.", orderIndex: 3 },
  { id: "cfa3-performance-attribution-q05", topicId: "cfa3-performance-attribution", text: "The fundamental law of active management approximates the information ratio as the information coefficient times the:", optionA: "Square root of breadth", optionB: "Beta", optionC: "Risk-free rate", optionD: "Tracking error squared", correctOption: "A", explanation: "IR ≈ IC × √breadth: skill scaled by the number of independent active decisions.", orderIndex: 4 },
  { id: "cfa3-performance-attribution-q06", topicId: "cfa3-performance-attribution", text: "Overweighting a sector that subsequently outperforms contributes positively to the ____ component of attribution.", optionA: "Selection", optionB: "Allocation", optionC: "Interaction only", optionD: "Tracking error", correctOption: "B", explanation: "Choosing sector weights that differ from the benchmark drives the allocation effect.", orderIndex: 5 },
  { id: "cfa3-performance-attribution-q07", topicId: "cfa3-performance-attribution", text: "A valid benchmark should be, among other properties:", optionA: "Unambiguous, investable, and specified in advance", optionB: "Chosen after performance is known", optionC: "Impossible to replicate", optionD: "Different each period", correctOption: "A", explanation: "Quality benchmarks are specified in advance, unambiguous, investable, measurable, appropriate, and reflective of current opinions.", orderIndex: 6 },
  { id: "cfa3-performance-attribution-q08", topicId: "cfa3-performance-attribution", text: "Holdings-based attribution, versus returns-based attribution, is generally:", optionA: "Less accurate but needs less data", optionB: "More accurate but needs more granular data", optionC: "Identical in all cases", optionD: "Only valid for bonds", correctOption: "B", explanation: "Holdings/transaction-based attribution uses actual positions for greater accuracy, at the cost of more detailed data.", orderIndex: 7 },
  { id: "cfa3-performance-attribution-q09", topicId: "cfa3-performance-attribution", text: "Jensen's alpha measures return in excess of that required by the:", optionA: "Dividend discount model", optionB: "CAPM (given the portfolio's beta)", optionC: "Sortino target", optionD: "Information ratio", correctOption: "B", explanation: "Jensen's alpha = portfolio return − CAPM-required return based on beta.", orderIndex: 8 },
  { id: "cfa3-performance-attribution-q10", topicId: "cfa3-performance-attribution", text: "The Sharpe ratio is most appropriate when evaluating:", optionA: "A single security within a portfolio", optionB: "An investor's entire portfolio (total risk matters)", optionC: "Only active managers vs a benchmark", optionD: "A risk-free asset", correctOption: "B", explanation: "Because it uses total risk, the Sharpe ratio suits the whole portfolio rather than a component.", orderIndex: 9 },
  { id: "cfa3-performance-attribution-q11", topicId: "cfa3-performance-attribution", text: "A persistent benchmark misfit (style bias) in attribution can cause:", optionA: "Active return to be measured against an inappropriate standard", optionB: "Lower transaction costs", optionC: "Higher liquidity", optionD: "Zero tracking error", correctOption: "A", explanation: "If the benchmark doesn't match the manager's style, attributed allocation/selection effects are distorted.", orderIndex: 10 },
  { id: "cfa3-performance-attribution-q12", topicId: "cfa3-performance-attribution", text: "Distinguishing manager skill from luck (appraisal) is harder when:", optionA: "The track record is very long", optionB: "The track record is short and returns are volatile", optionC: "Tracking error is zero", optionD: "The benchmark is investable", correctOption: "B", explanation: "Short, noisy track records make it statistically difficult to separate genuine skill from random luck.", orderIndex: 11 }
];

export const cfaLevel3 = defineBundle({
  exam,
  subjects: [...subjects, ...expSubjects],
  topics: [...topics, ...expTopics, ...exp2Topics],
  materials: [...materials, ...expMaterials, ...exp2Materials],
  questions: [...questions, ...expQuestions, ...exp2Questions]
});
