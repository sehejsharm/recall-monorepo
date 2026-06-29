// CFA Level II — additional readings (12 questions each).
import type { AuthoredMaterial } from "./builder";
import type { Question, Subject, Topic } from "@jyotir/core";

export const expSubjects: Subject[] = [
  { id: "cfa2-quantitative-methods", examId: "cfa-2", name: "Quantitative Methods", slug: "quantitative-methods", orderIndex: 4 },
  { id: "cfa2-economics", examId: "cfa-2", name: "Economics", slug: "economics", orderIndex: 5 },
  { id: "cfa2-alternative-investments", examId: "cfa-2", name: "Alternative Investments", slug: "alternative-investments", orderIndex: 6 },
  { id: "cfa2-ethics", examId: "cfa-2", name: "Ethics & Professional Standards", slug: "ethics", orderIndex: 7 },
  { id: "cfa2-corporate-issuers", examId: "cfa-2", name: "Corporate Issuers", slug: "corporate-issuers", orderIndex: 8 },
  { id: "cfa2-portfolio-management", examId: "cfa-2", name: "Portfolio Management", slug: "portfolio-management", orderIndex: 9 }
];

export const expTopics: Topic[] = [
  { id: "cfa2-quantitative-methods-multiple-regression", subjectId: "cfa2-quantitative-methods", name: "Multiple Regression & Model Misspecification", slug: "multiple-regression", orderIndex: 0 },
  { id: "cfa2-economics-currency-forecasting", subjectId: "cfa2-economics", name: "Currency Exchange Rates & Forecasting", slug: "currency-forecasting", orderIndex: 0 },
  { id: "cfa2-equity-price-multiples", subjectId: "cfa2-equity", name: "Price & Enterprise-Value Multiples", slug: "price-multiples", orderIndex: 2 },
  { id: "cfa2-alternative-investments-pe-real-estate", subjectId: "cfa2-alternative-investments", name: "Private Equity & Real Estate Valuation", slug: "pe-real-estate", orderIndex: 0 },
  { id: "cfa2-ethics-application-soft-dollar", subjectId: "cfa2-ethics", name: "Application of the Code & Soft-Dollar Standards", slug: "application-soft-dollar", orderIndex: 0 },
  { id: "cfa2-corporate-issuers-capital-structure-payout", subjectId: "cfa2-corporate-issuers", name: "Capital Structure & Payout Policy", slug: "capital-structure-payout", orderIndex: 0 },
  { id: "cfa2-portfolio-management-multifactor-models", subjectId: "cfa2-portfolio-management", name: "Multifactor Models & Risk Attribution", slug: "multifactor-models", orderIndex: 0 },
  { id: "cfa2-fixed-income-credit-analysis", subjectId: "cfa2-fixed-income", name: "Credit Analysis & Credit Strategies", slug: "credit-analysis", orderIndex: 1 },
  { id: "cfa2-financial-reporting-pensions", subjectId: "cfa2-financial-reporting", name: "Pensions & Post-Employment Benefits", slug: "pensions", orderIndex: 1 },
  { id: "cfa2-financial-reporting-multinational", subjectId: "cfa2-financial-reporting", name: "Multinational Operations & Currency Translation", slug: "multinational", orderIndex: 2 },
  { id: "cfa2-derivatives-swaps-fra", subjectId: "cfa2-derivatives", name: "Swaps & FRA Valuation", slug: "swaps-fra", orderIndex: 1 },
  { id: "cfa2-quantitative-methods-time-series", subjectId: "cfa2-quantitative-methods", name: "Time-Series Analysis", slug: "time-series", orderIndex: 1 },
  { id: "cfa2-economics-growth", subjectId: "cfa2-economics", name: "Economic Growth & the Investment Setting", slug: "growth", orderIndex: 1 },
  { id: "cfa2-alternative-investments-hedge-funds", subjectId: "cfa2-alternative-investments", name: "Hedge Fund Strategies", slug: "hedge-funds", orderIndex: 1 },
  { id: "cfa2-ethics-analysis-recommendations", subjectId: "cfa2-ethics", name: "Investment Analysis, Recommendations & Record Retention", slug: "analysis-recommendations", orderIndex: 1 },
  { id: "cfa2-corporate-issuers-governance-esg", subjectId: "cfa2-corporate-issuers", name: "Corporate Governance, ESG & Stakeholders", slug: "governance-esg", orderIndex: 1 },
  { id: "cfa2-portfolio-management-market-risk-var", subjectId: "cfa2-portfolio-management", name: "Measuring & Managing Market Risk (VaR)", slug: "market-risk-var", orderIndex: 1 },
  { id: "cfa2-quantitative-methods-machine-learning", subjectId: "cfa2-quantitative-methods", name: "Machine Learning & Big Data", slug: "machine-learning", orderIndex: 2 },
  { id: "cfa2-equity-multistage-ddm", subjectId: "cfa2-equity", name: "Multistage Dividend Discount Models", slug: "multistage-ddm", orderIndex: 3 },
  { id: "cfa2-equity-private-company", subjectId: "cfa2-equity", name: "Private Company Valuation", slug: "private-company", orderIndex: 4 },
  { id: "cfa2-fixed-income-term-structure", subjectId: "cfa2-fixed-income", name: "Term Structure & Interest Rate Models", slug: "term-structure", orderIndex: 2 },
  { id: "cfa2-fixed-income-cds", subjectId: "cfa2-fixed-income", name: "Credit Default Swaps", slug: "cds", orderIndex: 3 },
  { id: "cfa2-derivatives-forwards-futures", subjectId: "cfa2-derivatives", name: "Forward & Futures Pricing", slug: "forwards-futures", orderIndex: 2 },
  { id: "cfa2-financial-reporting-income-taxes", subjectId: "cfa2-financial-reporting", name: "Income Taxes (Deferred Tax)", slug: "income-taxes", orderIndex: 3 },
  { id: "cfa2-equity-industry-analysis", subjectId: "cfa2-equity", name: "Industry & Competitive Analysis", slug: "industry-analysis", orderIndex: 5 },
  { id: "cfa2-derivatives-option-strategies", subjectId: "cfa2-derivatives", name: "Option Strategies & Greeks", slug: "option-strategies", orderIndex: 3 },
  { id: "cfa2-quantitative-methods-simulation", subjectId: "cfa2-quantitative-methods", name: "Simulation & Probabilistic Methods", slug: "simulation", orderIndex: 3 },
  { id: "cfa2-economics-regulation", subjectId: "cfa2-economics", name: "Economics of Regulation", slug: "regulation", orderIndex: 2 },
  { id: "cfa2-alternative-investments-commodities", subjectId: "cfa2-alternative-investments", name: "Commodities & Commodity Derivatives", slug: "commodities", orderIndex: 2 },
  { id: "cfa2-ethics-gips", subjectId: "cfa2-ethics", name: "GIPS Standards", slug: "gips", orderIndex: 2 },
  { id: "cfa2-corporate-issuers-mergers-acquisitions", subjectId: "cfa2-corporate-issuers", name: "Mergers, Acquisitions & Restructuring", slug: "mergers-acquisitions", orderIndex: 2 },
  { id: "cfa2-portfolio-management-trading-execution", subjectId: "cfa2-portfolio-management", name: "Trading, Execution & Rebalancing", slug: "trading-execution", orderIndex: 2 },
  { id: "cfa2-financial-reporting-analysis-techniques", subjectId: "cfa2-financial-reporting", name: "Financial Analysis Techniques & Earnings Quality", slug: "analysis-techniques", orderIndex: 4 },
  { id: "cfa2-fixed-income-mbs-abs", subjectId: "cfa2-fixed-income", name: "Mortgage- & Asset-Backed Securities", slug: "mbs-abs", orderIndex: 4 },
  { id: "cfa2-derivatives-interest-rate", subjectId: "cfa2-derivatives", name: "Interest-Rate Derivatives & Swaptions", slug: "interest-rate", orderIndex: 4 },
  { id: "cfa2-economics-currency-determination", subjectId: "cfa2-economics", name: "Currency Exchange Rate Determination", slug: "currency-determination", orderIndex: 3 },
  { id: "cfa2-alternative-investments-real-estate", subjectId: "cfa2-alternative-investments", name: "Real Estate & REITs", slug: "real-estate", orderIndex: 3 },
  { id: "cfa2-ethics-professionalism-integrity", subjectId: "cfa2-ethics", name: "Professionalism & Market Integrity (Standards I & II)", slug: "professionalism-integrity", orderIndex: 3 },
  { id: "cfa2-corporate-issuers-capital-budgeting", subjectId: "cfa2-corporate-issuers", name: "Capital Budgeting & Investment Decisions", slug: "capital-budgeting", orderIndex: 3 },
  { id: "cfa2-portfolio-management-economics-markets", subjectId: "cfa2-portfolio-management", name: "Economics & Investment Markets", slug: "economics-markets", orderIndex: 3 }
];

export const expMaterials: AuthoredMaterial[] = [
  {
    id: "cfa2-quantitative-methods-multiple-regression-m01",
    topicId: "cfa2-quantitative-methods-multiple-regression",
    title: "Multiple Regression & Model Misspecification",
    content: `## The model
Y = b₀ + b₁X₁ + … + bₖXₖ + ε. Each slope is the effect of that X **holding the others constant**.

## Inference
- **t-test** on each coefficient; **F-test** for joint significance of all slopes.
- **R²** always rises with more regressors → use **adjusted R²** to penalize added variables.

## Assumption violations
| Problem | Effect | Detect | Fix |
| --- | --- | --- | --- |
| **Heteroskedasticity** | biased standard errors (not coefficients) | Breusch-Pagan | robust (White) SE |
| **Serial correlation** | biased SE, inflated t | Durbin-Watson, Breusch-Godfrey | Newey-West SE |
| **Multicollinearity** | high R² but insignificant t's | high VIF | drop/combine variables |

## Misspecification
- Omitting a relevant variable → **biased** coefficients. Wrong functional form, or using a lagged dependent variable with serial correlation, also bias results. Good models are grounded in **economic reasoning**, not data mining.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa2-economics-currency-forecasting-m01",
    topicId: "cfa2-economics-currency-forecasting",
    title: "Currency Exchange Rates & Forecasting",
    content: `## Parity (recap)
- **Covered IRP** holds by arbitrage; **uncovered IRP**, **PPP** and the **international Fisher effect** are equilibrium tendencies that often fail short-term (carry-trade profits).

## Mark-to-market on a forward
A long base-currency forward gains when the spot/forward moves in its favor; value = PV of (current forward − contracted forward) on the remaining term.

## Approaches to forecasting FX
- **Balance of payments / current account**: persistent deficits pressure a currency lower (flow effects), but capital flows can dominate.
- **Monetary models**: money supply growth and inflation drive long-run value.
- **Portfolio-balance / asset-market**: relative returns and risk premia drive capital flows.
- **Carry trade**: borrow low-yield, invest high-yield — profits if UIRP fails; risk of sudden crashes ("picking up nickels in front of a steamroller").

## Intervention & controls
- Central-bank intervention and capital controls can move rates short-term; effectiveness depends on reserves and credibility.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa2-equity-price-multiples-m01",
    topicId: "cfa2-equity-price-multiples",
    title: "Price & Enterprise-Value Multiples",
    content: `## Price multiples
- **P/E** — most common. **Trailing** uses last 12m EPS; **forward** uses expected EPS. Justified leading P/E = (payout)/(r − g). Use for profitable, stable firms; distorted by cyclicality and accounting.
- **P/B** — useful for banks/financials and when earnings are negative; reflects asset intensity.
- **P/S** — robust to accounting choices and usable for unprofitable firms; ignores cost structure/leverage.
- **P/CF** — harder to manipulate than earnings.

## Enterprise value (EV)
EV = market cap + debt + preferred + minority interest − cash.
- **EV/EBITDA** — capital-structure neutral; good for comparing firms with different leverage and for capital-intensive businesses. **EV/Sales** for early-stage.

## Method of comparables vs. fundamentals
- **Comparables**: compare a multiple to peers/benchmark; cheap if below peers with similar fundamentals.
- **Justified multiple**: derived from a DCF/DDM, telling you what the multiple *should* be given r and g.
- Watch the **trailing vs leading** mismatch and one-off items (normalize EPS).`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa2-alternative-investments-pe-real-estate-m01",
    topicId: "cfa2-alternative-investments-pe-real-estate",
    title: "Private Equity & Real Estate Valuation",
    content: `## Private equity
- **Buyout vs venture capital**: buyouts use leverage on mature cash-flow firms; VC funds early-stage growth.
- **Exit routes**: trade sale, secondary sale, **IPO**, recapitalization.
- Fund economics: **2-and-20** (management fee + carried interest), often over a **hurdle rate** with a **clawback**; **J-curve** (early negative returns from fees before exits).
- Performance: **IRR** and multiples (**MOIC/TVPI, DPI, RVPI**).

## Real estate
Four quadrants: **private/public × equity/debt** (direct property, REITs, mortgages, MBS).

| Approach | Idea |
| --- | --- |
| **Income (cap rate)** | Value = NOI / cap rate |
| **DCF** | PV of forecast NOI + reversion |
| **Cost** | Replacement cost − depreciation + land |
| **Comparable sales** | Adjust recent transactions |

- **Cap rate** ≈ discount rate − growth; lower cap rate ⇒ higher price/lower yield.
- **REITs** valued via NAV, price-to-FFO/AFFO, and dividend discount.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa2-ethics-application-soft-dollar-m01",
    topicId: "cfa2-ethics-application-soft-dollar",
    title: "Application of the Code & Soft-Dollar Standards",
    content: `Level II tests the Standards through **cases**. Work the facts against the seven Standards and pick the *least* compliant action.

## High-frequency themes
- **Standard III(B) Fair Dealing**: disseminate recommendations/changes to all clients fairly — don't tip favored clients first.
- **Standard VI(A) Disclosure of Conflicts**: disclose ownership, board seats, referral fees (VI(C)).
- **Standard III(A) Loyalty, Prudence, Care**: act for the client/beneficiary, not the plan sponsor.

## Soft dollars (client brokerage)
- Client brokerage **belongs to the client** and must be used for their benefit — to buy **research that aids the investment decision**, not the manager's overhead (rent, software unrelated to research, travel).
- "**Best execution**" cannot be sacrificed to direct soft-dollar business.
- **Directed brokerage** (client directs trades to a broker for the client's own benefit, e.g. to offset fees) is allowed but may forgo best execution/soft-dollar benefits — disclose.
- The **CFA Institute Soft Dollar Standards** are *voluntary* best practice on top of the Code.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa2-corporate-issuers-capital-structure-payout-m01",
    topicId: "cfa2-corporate-issuers-capital-structure-payout",
    title: "Capital Structure & Payout Policy",
    content: `## Capital structure
- **Modigliani-Miller (no taxes)**: capital structure is irrelevant; WACC is constant.
- **MM with taxes**: debt adds a **tax shield** → value rises with leverage (favoring 100% debt in theory).
- **Static trade-off**: optimal leverage balances the tax shield against **financial distress / bankruptcy costs**; the WACC is U-shaped.
- **Pecking order** (asymmetric info): firms prefer **internal funds → debt → equity**; issuing equity signals overvaluation.
- Higher business risk and asset intangibility argue for **less** debt.

## Payout policy
- **Dividend irrelevance** (MM) vs. signaling: dividend **initiations/increases** signal confidence; **cuts** are penalized.
- **Clientele effect**: investors self-select by payout/tax preference.
- **Share repurchases** vs dividends: buybacks are more **flexible**, are tax-advantaged where capital gains < dividend tax, and boost EPS if the buyback yield > earnings yield (financed cheaply).
- A buyback at a price **below** intrinsic value transfers wealth to remaining holders.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa2-portfolio-management-multifactor-models-m01",
    topicId: "cfa2-portfolio-management-multifactor-models",
    title: "Multifactor Models & Risk Attribution",
    content: `## Arbitrage Pricing Theory (APT)
E[R] = R_f + Σ βₖ·(factor risk premiumₖ). Built on **no-arbitrage**, multiple systematic factors, and well-diversified portfolios — a generalization of the single-factor CAPM.

## Types of multifactor models
- **Macroeconomic** (factors = surprises in GDP, inflation, credit spreads, term structure).
- **Fundamental** (factors = firm attributes: size, value, momentum, quality).
- **Statistical** (factors extracted via PCA/factor analysis).

## Uses
- **Return attribution**: active return = Σ (factor tilt × factor return) + security selection.
- **Risk attribution**: active risk² = **factor (systematic) variance + active specific variance**.
- **Information ratio** = active return / active risk; the **fundamental law**: IR ≈ IC × √breadth.
- Construct **factor-mimicking portfolios** to hedge or target a single factor (e.g. interest-rate or inflation hedges).`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa2-fixed-income-credit-analysis-m01",
    topicId: "cfa2-fixed-income-credit-analysis",
    title: "Credit Analysis & Credit Strategies",
    content: `## Measuring credit risk
- **Expected loss = PD × LGD × EAD** (LGD = 1 − recovery rate).
- **Credit spread** compensates for expected loss + a risk premium + liquidity.
- **Structural (Merton)** models: equity is a call on assets; default if assets < debt. **Reduced-form** models: default is a statistical hazard driven by macro variables.

## Spread analysis
- **G-spread** (over government), **I-spread** (over swaps), **Z-spread** (over the spot curve), **OAS** (Z-spread minus option cost). Use **OAS** to compare bonds with embedded options.
- Return impact of a spread change ≈ **−(spread duration × Δspread)** + convexity term.

## Strategies
- **Bottom-up** (pick mispriced issuers) vs **top-down** (sector/quality rotation over the cycle).
- In an expected **downturn**, move up in quality and shorten spread duration; in a **recovery**, add lower-rated/higher-spread credit.
- Watch **liquidity** and **spread curve** roll-down; diversify idiosyncratic default risk.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa2-financial-reporting-pensions-m01",
    topicId: "cfa2-financial-reporting-pensions",
    title: "Pensions & Post-Employment Benefits",
    content: `## Plan types
- **Defined contribution (DC)**: employer pays a fixed contribution; the **employee bears investment risk**. Expense = the contribution; no balance-sheet liability beyond unpaid amounts.
- **Defined benefit (DB)**: employer promises a future benefit; the **employer bears the risk**. Requires actuarial estimates.

## Funded status (DB)
**Funded status = fair value of plan assets − PBO** (projected benefit obligation). A deficit is a net pension **liability** on the balance sheet; a surplus is an asset.

## Periodic pension cost (DB)
- Components: **service cost**, **net interest** (discount rate × net liability), **remeasurements/actuarial gains-losses**, and past service cost.
- **IFRS**: service cost + net interest go to **P&L**; remeasurements to **OCI** (not recycled).
- **US GAAP**: service cost in operating income; interest & expected return can sit in non-operating; actuarial gains/losses often in OCI with **corridor/amortization**.

## Key assumptions
- A **higher discount rate** lowers the PBO and usually service cost; a higher assumed **compensation growth** raises the PBO. Analysts adjust for aggressive assumptions and reclassify components for comparability.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa2-financial-reporting-multinational-m01",
    topicId: "cfa2-financial-reporting-multinational",
    title: "Multinational Operations & Currency Translation",
    content: `When a parent consolidates a foreign subsidiary, the sub's statements must be translated into the presentation currency.

## Two methods
| | Current-rate method | Temporal method |
| --- | --- | --- |
| When | Functional currency = local currency | Functional currency = parent's |
| Assets/liabs | **Current** rate | Monetary at current; **non-monetary at historical** |
| Revenue/exp | Average rate | Average; COGS & depreciation at **historical** |
| Gain/loss to | **OCI** (CTA) | **Net income** (remeasurement gain/loss) |

## Choosing the functional currency
- Determined by the **primary economic environment** (where cash flows, prices, financing are denominated).
- In a **hyperinflationary** economy: US GAAP uses the **temporal** method (functional = parent's); IFRS **restates** for inflation then translates at the current rate.

## Effects
- Current-rate method preserves financial **ratios** of the sub (all at current rate); the temporal method distorts them.
- A depreciating local currency with a net asset exposure produces a **negative CTA** (current-rate) or remeasurement loss (temporal).`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa2-derivatives-swaps-fra-m01",
    topicId: "cfa2-derivatives-swaps-fra",
    title: "Swaps & FRA Valuation",
    content: `## Forward rate agreements (FRA)
- An FRA locks a future interest rate. The **long** gains if the reference rate **rises** above the contract rate.
- Payoff is settled at the FRA expiry on a **discounted** basis: (reference − FRA rate) × notional × period, divided by (1 + reference × period).

## Interest-rate swaps
- A plain-vanilla swap = exchange **fixed for floating**; it is economically a **portfolio of FRAs** (or a long/short bond pair).
- The **swap fixed rate** is set so the swap's initial value is **zero** — it's the rate that equates the PV of fixed and floating legs (a par-rate calculation from discount factors).
- **Value over time**: as rates move, the swap gains/loses. Value to the fixed-rate payer ≈ (PV of floating leg) − (PV of fixed leg). The floating leg resets to par at each payment date.

## Other swaps
- **Currency swap**: exchange principal + interest in two currencies. **Equity swap**: exchange equity return for fixed/floating. Used to convert exposures (e.g., fixed↔floating debt) cheaply without re-issuing.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa2-quantitative-methods-time-series-m01",
    topicId: "cfa2-quantitative-methods-time-series",
    title: "Time-Series Analysis",
    content: `## Models
- **Trend models**: linear (constant change) or **log-linear** (constant growth rate). Check residuals for serial correlation (Durbin-Watson).
- **Autoregressive AR(p)**: x_t depends on its own lags. **Covariance-stationary** is required (constant mean/variance; autocovariances depend only on lag).

## Diagnostics
- **AR(1) stationarity**: |slope| < 1. A **unit root** (slope = 1, random walk) ⇒ non-stationary; test with **Dickey-Fuller**. Fix by **first-differencing**.
- Check residual autocorrelations (t-tests / Ljung-Box); add lags or seasonal terms if significant.
- **Mean reversion** level = b₀ / (1 − b₁) for an AR(1).

## Other tools
- **RMSE** compares out-of-sample forecast accuracy (lower is better).
- **Seasonality**: add a seasonal lag (e.g., x_{t-4} for quarterly).
- **ARCH**: if error variance depends on prior squared errors, variance is not constant — use generalized least squares / model the variance (ARCH/GARCH).
- **Cointegration**: two unit-root series can be regressed if cointegrated (long-run relationship); otherwise the regression is **spurious**.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa2-economics-growth-m01",
    topicId: "cfa2-economics-growth",
    title: "Economic Growth & the Investment Setting",
    content: `## Sources of growth
- **Labor** (size, participation, hours, human capital) + **capital** (physical + human + technology) + **total factor productivity (TFP)**.
- **Production function**: Y = A·F(K, L). Growth in output = TFP growth + α·ΔK + (1−α)·ΔL (growth accounting).

## Theories
- **Neoclassical (Solow)**: diminishing returns to capital → economies reach a **steady state**; long-run per-capita growth comes only from **exogenous technology**. Poorer economies grow faster (**convergence**).
- **Endogenous growth**: R&D and human capital generate **constant/increasing** returns; policy can raise the long-run growth rate (no forced convergence).
- **Club convergence**: only economies with similar institutions converge.

## Investment implications
- **Sustainable growth** raises equity returns over the long run via earnings growth.
- Drivers analysts watch: **savings/investment rates, demographics, productivity, property rights, openness to trade, and infrastructure**.
- Government policy (taxes, education, rule of law) and **capital deepening** vs. genuine TFP gains matter for durability.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa2-alternative-investments-hedge-funds-m01",
    topicId: "cfa2-alternative-investments-hedge-funds",
    title: "Hedge Fund Strategies",
    content: `## Strategy buckets
- **Equity**: long/short equity, equity market-neutral (beta ≈ 0), dedicated short.
- **Event-driven**: merger (risk) arbitrage, distressed, special situations.
- **Relative value**: fixed-income arbitrage, convertible arbitrage, volatility.
- **Macro / managed futures**: discretionary global macro, **CTA/trend-following**.
- **Multi-strategy** and **fund-of-funds** (added diversification but **double fees**).

## Characteristics
- Often use **leverage, shorting, and derivatives**; seek **absolute return** / alpha.
- Fees **2-and-20** with **hurdle** and **high-water mark**; lock-ups, gates, and notice periods limit liquidity.
- Returns are often **non-normal** (negative skew, fat tails) — many strategies are "short volatility," paying steady returns then large losses in stress.

## In a portfolio
- Low average correlation to equities but **correlations rise in crises**; report-smoothing understates risk.
- **Operational due diligence** is critical; conditional/strategy-specific risk (e.g., liquidity in distressed) must be modeled, not just volatility.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa2-ethics-analysis-recommendations-m01",
    topicId: "cfa2-ethics-analysis-recommendations",
    title: "Investment Analysis, Recommendations & Record Retention",
    content: `**Standard V — Investment Analysis, Recommendations, and Actions.**

## V(A) Diligence & reasonable basis
- Have a **reasonable, adequate basis** supported by research before making a recommendation.
- When using **third-party/secondary research or quant models**, make reasonable efforts to verify their soundness; you remain responsible.
- Group research: you may disagree with a team's consensus and need not dissent publicly as long as the basis is sound.

## V(B) Communication with clients
- Distinguish **fact from opinion**; disclose the **basic process and risks**; promptly disclose **material changes** in process.
- Identify **limitations** and key assumptions.

## V(C) Record retention
- Keep records supporting analysis, recommendations, and actions. Absent a regulator's rule, CFA Institute recommends **≥ 7 years**. Records are the **firm's property**; you cannot take files to a new employer.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa2-corporate-issuers-governance-esg-m01",
    topicId: "cfa2-corporate-issuers-governance-esg",
    title: "Corporate Governance, ESG & Stakeholders",
    content: `## Stakeholder management
Balancing the interests of **shareholders, board, management, employees, creditors, suppliers, customers, and regulators**. Key conflicts: **principal-agent** (managers vs. shareholders) and **shareholder vs. creditor** (e.g., risk-shifting).

## Governance mechanisms
- **Board**: independent, diverse directors; separate chair/CEO; committees (audit, remuneration, nomination).
- **Shareholder rights**: voting (one-share-one-vote vs. dual-class), proxy access, say-on-pay, takeover defenses (poison pills reduce accountability).
- Strong governance lowers risk and the cost of capital; weak governance is a red flag.

## ESG integration
- **E** (climate, emissions, resource use), **S** (labor, safety, data privacy), **G** (board, ethics, controls).
- Approaches: **negative/exclusionary screening, positive/best-in-class, thematic, impact investing, ESG integration** into valuation, and **active ownership/engagement**.
- **Materiality** matters — focus on ESG factors that affect cash flows/risk; watch for **greenwashing**. ESG risks feed into discount rates and cash-flow forecasts.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa2-portfolio-management-market-risk-var-m01",
    topicId: "cfa2-portfolio-management-market-risk-var",
    title: "Measuring & Managing Market Risk (VaR)",
    content: `**Value at Risk (VaR)**: the **minimum** loss expected over a period at a given confidence (e.g. "5% 1-day VaR = $1m" → ≥ $1m loss on the worst 5% of days).

## Three methods
| Method | Idea | Pros / cons |
| --- | --- | --- |
| **Parametric (variance-covariance)** | Assumes normal returns; uses σ | Simple; poor for options/fat tails |
| **Historical simulation** | Reuses actual past returns | No distribution assumption; backward-looking |
| **Monte Carlo** | Simulate many scenarios | Flexible for non-linear payoffs; compute-heavy |

## Extensions & limits
- **Conditional VaR (expected shortfall)** = average loss **beyond** VaR — captures tail severity that VaR ignores.
- VaR says nothing about the **size** of losses past the threshold, can be gamed, and depends on assumptions.
- Complements: **scenario analysis, stress tests, and sensitivity measures** (beta, duration, delta/gamma).
- Other constraints: **risk budgeting, position limits, stop-losses**.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa2-quantitative-methods-machine-learning-m01",
    topicId: "cfa2-quantitative-methods-machine-learning",
    title: "Machine Learning & Big Data",
    content: `## Learning types
- **Supervised** (labeled data): regression & classification — penalized regression/**LASSO**, **SVM**, KNN, CART, random forests, neural nets.
- **Unsupervised** (no labels): **clustering** (k-means, hierarchical) and **dimension reduction** (**PCA**).
- **Deep learning / reinforcement learning** for complex, non-linear problems.

## Overfitting — the central risk
- A model that fits noise has **low bias, high variance** and fails out of sample.
- Control with **train/validation/test splits, cross-validation, regularization (LASSO/ridge), and pruning**.
- **Bias-variance tradeoff**: too simple → underfit; too complex → overfit.

## Big data & the data project
Steps: **conceptualization → data collection → preparation/wrangling (cleaning, handling outliers/missing) → exploration → model training → tuning**.
- Text/NLP: **tokenization, stemming, bag-of-words, TF-IDF**.
- Big data traits: **volume, velocity, variety** (and veracity). ML finds patterns but needs sound economic reasoning and care with data quality and look-ahead bias.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa2-equity-multistage-ddm-m01",
    topicId: "cfa2-equity-multistage-ddm",
    title: "Multistage Dividend Discount Models",
    content: `When growth isn't constant, use a **multistage DDM**: forecast dividends explicitly, then a terminal value.

## Gordon (single-stage)
**V₀ = D₁ / (r − g)** — only for stable, mature firms where g < r.

## Two-stage
High growth for n years, then a stable terminal growth. Terminal value at year n: **TV_n = D_{n+1}/(r − g_L)**; discount each dividend + TV back to today.

## H-model
Growth **declines linearly** from g_S to g_L over 2H years:
**V₀ = [D₀(1+g_L) + D₀·H·(g_S − g_L)] / (r − g_L)** — a shortcut for a fading high-growth phase.

## Three-stage
Growth, transition, and maturity phases — for young firms.

## Notes
- Terminal value usually dominates; check sensitivity to **r and g_L**.
- **Sustainable growth g = b × ROE** (retention ratio × ROE).
- Use DDM for dividend-paying firms; for non-payers prefer FCFE/residual income.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa2-equity-private-company-m01",
    topicId: "cfa2-equity-private-company",
    title: "Private Company Valuation",
    content: `## Three approaches
1. **Income** — free-cash-flow / capitalized-cash-flow / **excess-earnings**; discount at a build-up or expanded-CAPM rate (add size + company-specific premia).
2. **Market** — guideline public companies, guideline transactions, prior-transaction multiples.
3. **Asset-based** — net asset value (less common for going concerns).

## Normalizing earnings
Adjust for **owner compensation, related-party transactions, and one-offs** to reflect true economic earnings.

## Discounts & premiums
- **DLOM** (discount for lack of marketability) — private interests can't be sold quickly.
- **DLOC** (discount for lack of control) for minority stakes; a **control premium** for controlling stakes.
- Private discount rates exceed comparable public rates (illiquidity, size, specific risk).

## Definitions (standard) of value
Fair market value, fair value, market value, investment value, intrinsic value — the **purpose** (tax, litigation, M&A, financial reporting) drives which applies.`,
    estimatedReadTime: 2,
    orderIndex: 4
  },
  {
    id: "cfa2-fixed-income-term-structure-m01",
    topicId: "cfa2-fixed-income-term-structure",
    title: "Term Structure & Interest Rate Models",
    content: `## Theories of the yield-curve shape
- **Pure expectations**: forwards = expected future spot rates (no risk premium).
- **Liquidity preference**: investors demand a premium for longer maturities → upward bias.
- **Market segmentation / preferred habitat**: supply-demand in maturity buckets; investors shift only for a premium.

## Spot, forward, swap, par rates
Linked by no-arbitrage: (1+z₂)² = (1+z₁)(1+f₁,₁). The **swap-rate curve** is a common benchmark; the **swap spread** over governments reflects credit/liquidity.

## Risk drivers
- The curve moves via **level, slope (steepness), and curvature** — the first principal component (level) explains most variance.
- **Key rate (partial) durations** capture exposure to specific maturities (non-parallel shifts) better than a single effective duration.

## Models
- **Equilibrium** (e.g. CIR, Vasicek) start from economic assumptions; **arbitrage-free** (e.g. Ho-Lee) are calibrated to fit the current curve exactly — used to value bonds with embedded options on a tree.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa2-fixed-income-cds-m01",
    topicId: "cfa2-fixed-income-cds",
    title: "Credit Default Swaps",
    content: `A **CDS** is insurance against a borrower's default: the **protection buyer** pays a periodic **premium (spread)**; the **seller** pays out on a **credit event** (bankruptcy, failure to pay, restructuring).

## Mechanics
- **Single-name** (one issuer) or **index** (e.g. CDX, iTraxx, a basket).
- **Standard coupon** (e.g. 1% or 5%); the difference vs. the fair spread is settled via an **upfront payment**: upfront ≈ (CDS spread − coupon) × **duration**.
- Payout ≈ notional × **(1 − recovery rate)** = notional × LGD.

## Pricing intuition
- CDS spread ≈ **hazard rate × (1 − recovery)** — compensation for expected loss.
- Value to the protection buyer rises as **credit quality deteriorates** (spread widens).

## Uses
- **Hedge** credit exposure, **express a view** (buy protection = short credit), or exploit the **basis** (CDS spread vs. cash-bond spread). Enables **synthetic** long/short credit without trading the bond.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa2-derivatives-forwards-futures-m01",
    topicId: "cfa2-derivatives-forwards-futures",
    title: "Forward & Futures Pricing",
    content: `## No-arbitrage forward price
**F₀ = S₀ × (1 + r)^T** (cost-of-carry). With income/costs:
**F₀ = (S₀ − PV(income) + PV(costs)) × (1 + r)^T**.
- **Carry benefits** (dividends, coupons, convenience yield) **lower** the forward; **carry costs** (storage) **raise** it.

## Value over time
A forward's value at t: **V_t = (F_t − F₀) × discount factor** (zero at initiation). The price is fixed; the *value* drifts as spot/rates move.

## Forwards vs futures
- **Futures** are exchange-traded, standardized, daily **marked-to-market** with margin (minimal counterparty risk); **forwards** are OTC, customized, settled at maturity (counterparty risk).
- When rates correlate with the asset, futures and forward prices differ slightly (mark-to-market timing).

## Backwardation vs contango
- **Contango**: futures > spot (carry costs dominate). **Backwardation**: futures < spot (high convenience yield/benefits).`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa2-financial-reporting-income-taxes-m01",
    topicId: "cfa2-financial-reporting-income-taxes",
    title: "Income Taxes (Deferred Tax)",
    content: `Differences between **accounting** profit and **taxable** profit create deferred taxes.

## Temporary vs permanent
- **Temporary differences** reverse over time → create **deferred tax assets/liabilities**. Example: accelerated tax depreciation > book depreciation → a **deferred tax liability (DTL)**.
- **Permanent differences** (e.g. tax-exempt interest, non-deductible fines) never reverse → affect the **effective tax rate**, not deferred taxes.

## DTA vs DTL
- **DTL**: tax payable now is *less* than book expense (e.g. faster tax depreciation, installment sales).
- **DTA**: tax payable now is *more* than book (e.g. **loss carryforwards**, warranty/bad-debt provisions). A **valuation allowance** (US GAAP) reduces a DTA if realization is unlikely.

## Analyst points
- A change in the **tax rate** remeasures DTAs/DTLs (hits the period's tax expense).
- DTLs expected to **reverse** are treated as debt-like; those that keep growing/never reverse may be treated as **equity** in analysis.
- **Income tax expense = taxes payable + ΔDTL − ΔDTA**.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa2-equity-industry-analysis-m01",
    topicId: "cfa2-equity-industry-analysis",
    title: "Industry & Competitive Analysis",
    content: `## Framework
1. **Classify** the industry (by business cycle sensitivity — cyclical vs. defensive — and by life-cycle stage: embryonic → growth → shakeout → mature → decline).
2. **Analyze structure** with **Porter's Five Forces**: rivalry, new entrants, substitutes, supplier power, buyer power.
3. **Competitive position** & strategy (Porter: **cost leadership, differentiation, focus**).

## Key drivers
- **Industry life cycle** shapes margins and growth: growth stage = high growth, falling prices; mature = consolidation, stable margins.
- **Barriers to entry**, pricing power, industry concentration (few players → more pricing power), and exposure to **macro, demographic, technological, governmental, and social** influences.
- **Experience curve**: unit costs fall with cumulative output (a barrier favoring incumbents).

## For valuation
- A company can only sustain returns above its cost of capital with a durable **competitive advantage (moat)**.
- Map industry forces to forecasts of **revenue growth, margins, and reinvestment** used in the DCF.`,
    estimatedReadTime: 2,
    orderIndex: 5
  },
  {
    id: "cfa2-derivatives-option-strategies-m01",
    topicId: "cfa2-derivatives-option-strategies",
    title: "Option Strategies & Greeks",
    content: `## Core positions
- **Covered call** (long stock + short call): income, caps upside. **Protective put** (long stock + long put): floors downside.
- **Collar**: protective put financed by a short call — bounded payoff.

## Spreads & combinations
- **Bull call spread** / **bear put spread**: directional, limited risk & reward.
- **Straddle** (long call + put, same strike): profits from large moves **either** direction (long volatility). **Strangle**: cheaper, wider strikes.
- **Butterfly**: profits if the underlying stays near the middle strike (short volatility).

## The Greeks
| Greek | Sensitivity to | Note |
| --- | --- | --- |
| **Delta** | underlying price | hedge ratio |
| **Gamma** | change in delta | largest ATM near expiry |
| **Vega** | volatility | largest ATM, long-dated |
| **Theta** | time decay | hurts long options |
| **Rho** | interest rates | small for short-dated |

- **Delta hedging** is dynamic (rebalance due to gamma). Maximum gain/loss and **breakevens** are standard exam computations.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa2-quantitative-methods-simulation-m01",
    topicId: "cfa2-quantitative-methods-simulation",
    title: "Simulation & Probabilistic Methods",
    content: `## Monte Carlo simulation
Generates thousands of random scenarios from assumed input distributions to build a **distribution of outcomes** (e.g. option values, VaR, retirement wealth).
- Strengths: handles **complex, path-dependent, non-linear** payoffs and many interacting variables.
- Limits: only as good as the input assumptions ("garbage in, garbage out"); **statistical**, not analytical.

## Other tools
- **Historical simulation**: resample actual past data (no distribution assumption).
- **Bootstrapping**: repeatedly resample (with replacement) from observed data to estimate a sampling distribution / standard errors.
- **Sensitivity analysis**: vary one input at a time. **Scenario analysis**: change a coherent set of inputs.

## Probability essentials
- **Bayes' formula** updates a prior probability with new evidence: P(A|B) = P(B|A)·P(A) / P(B).
- Track **correlations** between inputs — ignoring them understates or overstates portfolio risk. Use enough trials for the estimate to **converge**.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa2-economics-regulation-m01",
    topicId: "cfa2-economics-regulation",
    title: "Economics of Regulation",
    content: `## Why regulate
- **Market failures**: externalities, public goods, information asymmetry, and **natural monopoly** (one provider is most efficient → price regulation).
- Regulators also protect investors/consumers and ensure financial stability.

## Types
- **Statutes** (legislatures), **administrative regulations** (agencies), and **judicial law**.
- **Economic** regulation (prices, entry — e.g. utilities) vs. **prudential** (safety/soundness of financial firms) vs. **disclosure/conduct**.
- **Self-regulating organizations (SROs)** can be granted authority (e.g. exchanges).

## Analyst lens
- **Regulatory capture**: regulators serve the regulated industry's interests.
- **Regulatory arbitrage**: firms exploit gaps/differences across jurisdictions.
- Assess **costs vs. benefits** (compliance costs, unintended consequences). Regulation changes industry economics — barriers to entry, pricing, and risk — so it feeds directly into valuation and risk assessment.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa2-alternative-investments-commodities-m01",
    topicId: "cfa2-alternative-investments-commodities",
    title: "Commodities & Commodity Derivatives",
    content: `Commodity **spot** exposure is hard to hold (storage), so investors use **futures**.

## Total return of a futures position
**Price return + roll return + collateral return.**
- **Roll return** depends on the curve: **backwardation** (futures < spot) → **positive** roll yield as you roll up to spot; **contango** (futures > spot) → **negative** roll yield.

## Pricing theories
- **Insurance/hedging-pressure (Keynes)**: producers hedge by selling futures → futures sit below expected spot (normal backwardation).
- **Theory of storage**: futures ≈ spot + storage cost − **convenience yield**. High convenience yield (tight supply) → backwardation.

## Portfolio role
- **Inflation hedge** and diversifier; commodities often rise with unexpected inflation when stocks/bonds fall.
- No income/dividends; returns driven by supply-demand, the curve shape, and the **collateral** (cash) yield. Sub-sectors: energy, metals, agriculture, livestock.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa2-ethics-gips-m01",
    topicId: "cfa2-ethics-gips",
    title: "GIPS Standards",
    content: `**GIPS** are voluntary, ethical standards for **fair representation and full disclosure** of investment performance.

## Core rules
- Compliance is **firm-wide** (all or nothing). Define the **firm** appropriately.
- **Composites**: include **all actual fee-paying, discretionary** portfolios of a similar strategy — prevents cherry-picking and survivorship bias. Non-discretionary accounts are excluded.
- Show a minimum of **5 years** (or since inception), building to **10**.
- Returns are **time-weighted** (removing client cash-flow timing); present a **benchmark** and a measure of **dispersion**.

## Other points
- **Verification** is firm-wide, performed by an independent third party, and **recommended but not required**.
- Must not present **false or misleading** performance; disclose fees, methodology, and significant events.
- GIPS does not replace local law; where law conflicts, follow law and disclose. The standards reduce the information asymmetry between managers and prospective clients.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa2-corporate-issuers-mergers-acquisitions-m01",
    topicId: "cfa2-corporate-issuers-mergers-acquisitions",
    title: "Mergers, Acquisitions & Restructuring",
    content: `## Types & motives
- **Horizontal** (same industry — synergies/market power), **vertical** (supply chain), **conglomerate** (diversification).
- Motives: **synergies**, growth, economies of scale, tax benefits, undervaluation. Beware **managerial hubris** and empire-building.

## Payment & defenses
- **Cash vs. stock** offer: stock shares risk with the target; cash transfers all risk/reward to the acquirer.
- Takeover defenses: **poison pill, staggered board, golden parachute, white knight, greenmail, Pac-Man**.

## Valuation of the deal
- **DCF**, comparable companies, and **comparable transactions** (which include a control premium).
- **Synergies** and the **premium** paid determine who wins: **Gains_target = premium**; **Gains_acquirer = synergies − premium**. Overpaying destroys acquirer value (the **winner's curse**).

## Restructuring
- **Divestitures, spin-offs, carve-outs, leveraged buyouts** — often to unlock value or refocus. Regulators review for **antitrust** (e.g. HHI concentration).`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa2-portfolio-management-trading-execution-m01",
    topicId: "cfa2-portfolio-management-trading-execution",
    title: "Trading, Execution & Rebalancing",
    content: `## Execution costs
- **Explicit** (commissions, fees, taxes) + **implicit** (bid-ask **spread**, **market impact**, **delay/slippage**, **opportunity cost** of unfilled orders).
- **Implementation shortfall** = paper-portfolio return − actual return — the most complete cost measure. **VWAP** is a common benchmark.

## Order types & algos
- **Market** (immediacy, pays impact) vs. **limit** (price control, risks non-execution).
- Algorithms: **VWAP/TWAP**, **implementation-shortfall** (balances impact vs. timing risk), and **liquidity-seeking**. Slice large orders to limit impact.

## Rebalancing
- **Calendar** vs. **percentage-range (corridor)**. Wider corridors for **higher transaction costs**, higher risk tolerance, and lower correlation; narrower for higher volatility.
- Rebalancing is **contrarian** (sell winners, buy losers) and can earn a **diversification return**; it controls risk, not return.
- Trade **urgency**: aggressive trades pay impact but cut timing risk; patient trades risk adverse price moves.`,
    estimatedReadTime: 2,
    orderIndex: 2
  },
  {
    id: "cfa2-financial-reporting-analysis-techniques-m01",
    topicId: "cfa2-financial-reporting-analysis-techniques",
    title: "Financial Analysis Techniques & Earnings Quality",
    content: `## Tools
- **Common-size** statements (% of revenue / total assets), **ratio analysis**, and **trend/horizontal** analysis.
- **DuPont decomposition** of ROE:
  - 3-way: ROE = **net margin × asset turnover × leverage**.
  - 5-way: tax burden × interest burden × EBIT margin × asset turnover × leverage — isolates operating vs. financing vs. tax effects.

## Ratio categories
- **Activity** (turnover), **liquidity** (current, quick), **solvency** (debt/equity, interest coverage), **profitability** (margins, ROE/ROA), **valuation** (P/E, P/B).

## Earnings quality
- **High-quality earnings** are sustainable and backed by cash. Red flags: **earnings >> operating cash flow** (high accruals), rising DSO/inventory, frequent "one-offs", aggressive revenue recognition, capitalizing costs.
- **Accruals ratio** and the **cash-flow-to-net-income** ratio gauge quality.
- Compare against **peers and the firm's own history**; adjust statements for off-balance-sheet items and non-recurring effects before forecasting.`,
    estimatedReadTime: 2,
    orderIndex: 4
  },
  {
    id: "cfa2-fixed-income-mbs-abs-m01",
    topicId: "cfa2-fixed-income-mbs-abs",
    title: "Mortgage- & Asset-Backed Securities",
    content: `**Securitization** pools loans (mortgages, auto, cards) into tradable securities, moving them off the originator's balance sheet via a bankruptcy-remote **SPV**.

## Mortgage-backed securities (MBS)
- **Agency** (gov-backed, minimal credit risk) vs. **non-agency**.
- **Prepayment risk** is the key feature: borrowers refinance when rates fall (**contraction risk**) and prepay slowly when rates rise (**extension risk**) → **negative convexity** for pass-throughs.
- **CMOs** carve cash flows into **tranches** to redistribute prepayment risk (e.g., sequential-pay, PAC vs. support tranches).

## Asset-backed securities (ABS)
- Backed by auto loans, credit cards, etc.; use **credit tranching** (senior/subordinated **waterfall**) and credit enhancement (overcollateralization, reserve accounts).
- **Amortizing** (autos) vs. **non-amortizing/revolving** (cards, with a lockout/revolving period).

## Analysis
- Value with prepayment models (**SMM/CPR**, PSA benchmark) on an interest-rate tree; use **OAS** to compare.`,
    estimatedReadTime: 2,
    orderIndex: 4
  },
  {
    id: "cfa2-derivatives-interest-rate-m01",
    topicId: "cfa2-derivatives-interest-rate",
    title: "Interest-Rate Derivatives & Swaptions",
    content: `## Building blocks
- **FRA**: locks a single future rate. **Interest-rate swap**: a strip of FRAs (fixed ↔ floating).
- **Caps & floors**: a **cap** = a series of **caplets** (calls on a reference rate) — protects a floating-rate **borrower** when rates rise. A **floor** = a series of **floorlets** (puts) — protects a floating-rate **lender/investor** when rates fall.
- A **collar** = long cap + short floor (cheaper protection).

## Swaptions
- A **payer swaption**: the right to **pay fixed / receive floating** — gains value as rates **rise** (like a call on rates). Used to hedge against rising rates or to enter a swap later.
- A **receiver swaption**: right to **receive fixed** — gains as rates **fall**.
- Swaptions are used to hedge **callable/putable debt** and to monetize rate views.

## Uses
- Convert fixed↔floating exposure, hedge a future borrowing, or cap funding costs. Valuation uses an arbitrage-free model calibrated to the current curve and rate **volatility**.`,
    estimatedReadTime: 2,
    orderIndex: 4
  },
  {
    id: "cfa2-economics-currency-determination-m01",
    topicId: "cfa2-economics-currency-determination",
    title: "Currency Exchange Rate Determination",
    content: `## Quote conventions
**Price/base** (P/B): units of price currency per 1 base. A **cross rate** is derived from two pairs sharing a currency.

## Spot vs forward
Forward points come from the **interest-rate differential** (covered interest rate parity). The higher-yield currency trades at a forward **discount**.

## Determination frameworks
- **Mundell-Fleming**: links monetary/fiscal policy to exchange rates via interest rates and trade. Expansionary **monetary** policy → lower rates → currency **depreciates** (with high capital mobility).
- **Monetary models**: relative money supply and inflation drive long-run value.
- **Portfolio-balance**: sustained fiscal deficits eventually pressure the currency lower.

## Other
- **Real exchange rate** adjusts the nominal rate for relative price levels.
- Capital flows often dominate trade flows short-term; **central-bank intervention** and **capital controls** can influence rates temporarily.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa2-alternative-investments-real-estate-m01",
    topicId: "cfa2-alternative-investments-real-estate",
    title: "Real Estate & REITs",
    content: `## Four quadrants
Private/public × equity/debt: **direct property, REITs, mortgages, MBS**.

## Valuing direct property
| Approach | Idea |
| --- | --- |
| **Income (direct capitalization)** | Value = **NOI / cap rate** |
| **DCF** | PV of forecast NOI + reversion (terminal) value |
| **Cost** | Replacement cost − depreciation + land |
| **Comparable sales** | Adjust recent transactions |

- **Cap rate ≈ discount rate − NOI growth**; a lower cap rate ⇒ higher value/lower yield.
- **NOI** = rental income − operating expenses (before financing and taxes).

## REITs
- Pass-through vehicles that must distribute most income (tax-advantaged); valued by **NAV**, **price-to-FFO/AFFO**, and **dividend discount**.
- **FFO** = net income + real-estate depreciation − gains on sales; **AFFO** subtracts maintenance capex (a cleaner cash measure).
- Provide income, diversification, and inflation sensitivity; public REITs are more **liquid** but more **equity-correlated** than direct property.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa2-ethics-professionalism-integrity-m01",
    topicId: "cfa2-ethics-professionalism-integrity",
    title: "Professionalism & Market Integrity (Standards I & II)",
    content: `## Standard I — Professionalism
- **I(A) Knowledge of the Law**: follow the **stricter** of law or the Code; dissociate from violations.
- **I(B) Independence & Objectivity**: avoid gifts/pressure that could bias you; modest items only.
- **I(C) Misrepresentation**: no untrue statements; **plagiarism** is misrepresentation.
- **I(D) Misconduct**: no dishonesty, fraud, or conduct reflecting on professional integrity.

## Standard II — Integrity of Capital Markets
- **II(A) Material Nonpublic Information (MNPI)**: do not act or cause others to act on MNPI. Use the **mosaic theory** (combining public + non-material non-public is fine) and **firewalls**.
- **II(B) Market Manipulation**: no transaction-based (e.g. **wash trades, spoofing, pump-and-dump**) or information-based manipulation.

> Exam approach: read the vignette, match the action to the precise sub-standard, and choose the least-compliant option. Recommended procedures (firewalls, restricted lists, compliance review) often resolve cases.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa2-corporate-issuers-capital-budgeting-m01",
    topicId: "cfa2-corporate-issuers-capital-budgeting",
    title: "Capital Budgeting & Investment Decisions",
    content: `## Decision rules
- **NPV** = PV(inflows) − initial outlay. **Accept if NPV > 0** — the theoretically correct rule (adds shareholder value).
- **IRR**: the discount rate making NPV = 0. Accept if IRR > cost of capital. Beware **multiple/no IRRs** with non-conventional cash flows and **ranking conflicts** with NPV for mutually exclusive or different-scale projects — **follow NPV**.
- Others: **payback** (ignores time value and post-payback flows), **discounted payback**, **profitability index** = PV(inflows)/outlay.

## Cash-flow principles
- Use **incremental, after-tax** cash flows; include **opportunity costs** and **externalities**; **exclude sunk costs** and ignore **financing costs** (captured in the discount rate).
- Account for **depreciation tax shields**, **net working-capital** changes, and **terminal/salvage** value.

## Analytical tools
- **Sensitivity, scenario, and Monte Carlo** analysis; **real options** (timing, expansion, abandonment) add value not captured by static NPV.`,
    estimatedReadTime: 2,
    orderIndex: 3
  },
  {
    id: "cfa2-portfolio-management-economics-markets-m01",
    topicId: "cfa2-portfolio-management-economics-markets",
    title: "Economics & Investment Markets",
    content: `## Discount-rate building blocks
Any asset's value is the PV of expected cash flows. The required return = **real risk-free rate + expected inflation + risk premium**. The **real risk-free rate** tracks expected real GDP growth and the inter-temporal rate of substitution.

## Business cycle & asset classes
- **Default-free bond** yields ≈ expected future short rates + a **term premium**; the yield curve embeds growth/inflation expectations.
- **Credit spreads** widen in recessions (rising default risk) and narrow in expansions — credit is **pro-cyclical**.
- **Equities** carry a higher risk premium and are most sensitive to the cycle; expected return ≈ risk-free + equity risk premium.
- **Real estate** blends bond-like (lease income) and equity-like (cyclical) features.

## Implications
- Discount rates rise with growth and risk aversion. **Pro-cyclical** assets (equities, credit) earn premia for poor recession-time payoffs. Inflation expectations shift nominal yields and the relative appeal of real vs. nominal assets.`,
    estimatedReadTime: 2,
    orderIndex: 3
  }
];

export const expQuestions: Question[] = [
  // Multiple Regression
  { id: "cfa2-quantitative-methods-multiple-regression-q01", topicId: "cfa2-quantitative-methods-multiple-regression", text: "A slope coefficient in a multiple regression measures the effect of its variable on Y while:", optionA: "Ignoring all other variables", optionB: "Holding the other independent variables constant", optionC: "Maximizing R-squared", optionD: "Setting the intercept to zero", correctOption: "B", explanation: "Each partial slope is the marginal effect of that regressor with the other independent variables held constant.", orderIndex: 0 },
  { id: "cfa2-quantitative-methods-multiple-regression-q02", topicId: "cfa2-quantitative-methods-multiple-regression", text: "Adjusted R-squared is preferred to R-squared because it:", optionA: "Always increases with more regressors", optionB: "Penalizes the addition of variables that don't improve the model", optionC: "Measures serial correlation", optionD: "Equals the F-statistic", correctOption: "B", explanation: "Adjusted R² adds a penalty for extra regressors, so it can fall when an added variable adds little explanatory power.", orderIndex: 1 },
  { id: "cfa2-quantitative-methods-multiple-regression-q03", topicId: "cfa2-quantitative-methods-multiple-regression", text: "The F-test in a multiple regression evaluates the null hypothesis that:", optionA: "The intercept is zero", optionB: "All slope coefficients jointly equal zero", optionC: "Residuals are normal", optionD: "There is multicollinearity", correctOption: "B", explanation: "The F-test assesses whether the regressors jointly explain a significant portion of the variation in Y.", orderIndex: 2 },
  { id: "cfa2-quantitative-methods-multiple-regression-q04", topicId: "cfa2-quantitative-methods-multiple-regression", text: "Heteroskedasticity primarily affects a regression by:", optionA: "Biasing the coefficient estimates", optionB: "Biasing the standard errors, distorting t-tests", optionC: "Increasing R-squared", optionD: "Removing serial correlation", correctOption: "B", explanation: "Heteroskedasticity leaves coefficients unbiased but makes standard errors (and thus t-statistics) unreliable.", orderIndex: 3 },
  { id: "cfa2-quantitative-methods-multiple-regression-q05", topicId: "cfa2-quantitative-methods-multiple-regression", text: "A classic symptom of multicollinearity is:", optionA: "A low R-squared with significant t-statistics", optionB: "A high R-squared with insignificant individual t-statistics", optionC: "A Durbin-Watson statistic near 2", optionD: "Zero correlation among regressors", correctOption: "B", explanation: "Multicollinearity inflates standard errors so individual coefficients look insignificant even though the model overall (high R²/F) is significant.", orderIndex: 4 },
  { id: "cfa2-quantitative-methods-multiple-regression-q06", topicId: "cfa2-quantitative-methods-multiple-regression", text: "The Durbin-Watson statistic is used to detect:", optionA: "Heteroskedasticity", optionB: "Serial (auto)correlation of residuals", optionC: "Multicollinearity", optionD: "Omitted variables", correctOption: "B", explanation: "The Durbin-Watson statistic tests for first-order serial correlation in the regression residuals.", orderIndex: 5 },
  { id: "cfa2-quantitative-methods-multiple-regression-q07", topicId: "cfa2-quantitative-methods-multiple-regression", text: "Omitting a relevant explanatory variable that is correlated with included regressors causes:", optionA: "Unbiased coefficients", optionB: "Biased coefficient estimates", optionC: "Only a lower R-squared with no bias", optionD: "Perfect multicollinearity", correctOption: "B", explanation: "Omitted-variable bias arises when a relevant, correlated variable is left out, biasing the estimated coefficients.", orderIndex: 6 },
  { id: "cfa2-quantitative-methods-multiple-regression-q08", topicId: "cfa2-quantitative-methods-multiple-regression", text: "A common correction for serial correlation in standard errors is:", optionA: "White (robust) standard errors", optionB: "Newey-West standard errors", optionC: "Dropping the intercept", optionD: "Adding more regressors", correctOption: "B", explanation: "Newey-West (HAC) standard errors correct for both serial correlation and heteroskedasticity.", orderIndex: 7 },
  { id: "cfa2-quantitative-methods-multiple-regression-q09", topicId: "cfa2-quantitative-methods-multiple-regression", text: "A high variance inflation factor (VIF) for a regressor indicates:", optionA: "Strong multicollinearity with other regressors", optionB: "Heteroskedasticity", optionC: "A good model fit", optionD: "Serial correlation", correctOption: "A", explanation: "VIF measures how much a coefficient's variance is inflated by correlation with other regressors; high VIF signals multicollinearity.", orderIndex: 8 },
  { id: "cfa2-quantitative-methods-multiple-regression-q10", topicId: "cfa2-quantitative-methods-multiple-regression", text: "Building a model by searching many variables until statistical significance appears risks:", optionA: "Heteroskedasticity", optionB: "Data mining and overfitting", optionC: "A unit root", optionD: "Lower R-squared", correctOption: "B", explanation: "Data mining finds chance relationships that fail out of sample; models should rest on economic reasoning.", orderIndex: 9 },
  { id: "cfa2-quantitative-methods-multiple-regression-q11", topicId: "cfa2-quantitative-methods-multiple-regression", text: "Robust (White) standard errors specifically correct for:", optionA: "Serial correlation only", optionB: "Heteroskedasticity", optionC: "Omitted variables", optionD: "Multicollinearity", correctOption: "B", explanation: "White's heteroskedasticity-consistent standard errors give valid inference when error variance is non-constant.", orderIndex: 10 },
  { id: "cfa2-quantitative-methods-multiple-regression-q12", topicId: "cfa2-quantitative-methods-multiple-regression", text: "Using a logarithmic transformation of a variable is one way to address:", optionA: "An incorrect functional-form misspecification", optionB: "Perfect collinearity", optionC: "A small sample only", optionD: "The intercept term", correctOption: "A", explanation: "Transformations (e.g., logs) can correct functional-form misspecification when relationships are non-linear in levels.", orderIndex: 11 },

  // Currency forecasting
  { id: "cfa2-economics-currency-forecasting-q01", topicId: "cfa2-economics-currency-forecasting", text: "Which parity relationship is enforced by arbitrage and therefore reliably holds?", optionA: "Uncovered interest rate parity", optionB: "Covered interest rate parity", optionC: "Purchasing power parity", optionD: "The international Fisher effect", correctOption: "B", explanation: "Covered interest rate parity is enforced by riskless arbitrage with forwards; the others are equilibrium tendencies.", orderIndex: 0 },
  { id: "cfa2-economics-currency-forecasting-q02", topicId: "cfa2-economics-currency-forecasting", text: "A carry trade profits when:", optionA: "Uncovered interest rate parity holds exactly", optionB: "High-yield currencies fail to depreciate as UIRP predicts", optionC: "Covered interest parity is violated", optionD: "Inflation is identical across countries", correctOption: "B", explanation: "Carry trades earn the rate differential when high-yield currencies don't depreciate enough to offset it, i.e., UIRP fails.", orderIndex: 1 },
  { id: "cfa2-economics-currency-forecasting-q03", topicId: "cfa2-economics-currency-forecasting", text: "Under the balance-of-payments (flow) approach, a country with persistent large current-account deficits tends to face:", optionA: "Upward pressure on its currency", optionB: "Downward pressure on its currency", optionC: "No effect on its currency", optionD: "Guaranteed appreciation", correctOption: "B", explanation: "Persistent current-account deficits imply net selling of the currency, creating downward pressure—though capital flows can offset this.", orderIndex: 2 },
  { id: "cfa2-economics-currency-forecasting-q04", topicId: "cfa2-economics-currency-forecasting", text: "A key risk of the carry trade is that returns exhibit:", optionA: "Symmetric, normally distributed payoffs", optionB: "Negative skew — occasional large crashes", optionC: "Zero volatility", optionD: "Guaranteed positive returns", correctOption: "B", explanation: "Carry-trade returns are negatively skewed: steady small gains punctuated by sudden, sharp losses when high-yield currencies crash.", orderIndex: 3 },
  { id: "cfa2-economics-currency-forecasting-q05", topicId: "cfa2-economics-currency-forecasting", text: "Relative purchasing power parity predicts that the currency of a higher-inflation country will:", optionA: "Appreciate by the inflation differential", optionB: "Depreciate by the inflation differential", optionC: "Stay constant", optionD: "Track the interest differential", correctOption: "B", explanation: "Under relative PPP, the higher-inflation currency depreciates by roughly the inflation differential.", orderIndex: 4 },
  { id: "cfa2-economics-currency-forecasting-q06", topicId: "cfa2-economics-currency-forecasting", text: "Monetary models of exchange rates emphasize the role of:", optionA: "Replacement cost of assets", optionB: "Relative money supply growth and inflation", optionC: "Dividend yields", optionD: "Beta", correctOption: "B", explanation: "Monetary approaches link long-run currency value to relative money-supply growth and inflation between countries.", orderIndex: 5 },
  { id: "cfa2-economics-currency-forecasting-q07", topicId: "cfa2-economics-currency-forecasting", text: "The portfolio-balance/asset-market approach to FX focuses on:", optionA: "Trade flows only", optionB: "Capital flows driven by relative returns and risk premia", optionC: "Inflation only", optionD: "Tariffs", correctOption: "B", explanation: "The asset-market view holds that capital flows responding to relative expected returns and risk dominate exchange-rate movements, especially short-term.", orderIndex: 6 },
  { id: "cfa2-economics-currency-forecasting-q08", topicId: "cfa2-economics-currency-forecasting", text: "The effectiveness of central-bank FX intervention depends importantly on its:", optionA: "Reserves and credibility", optionB: "Dividend policy", optionC: "Equity market cap", optionD: "Corporate tax rate", correctOption: "A", explanation: "Intervention works best when the central bank has ample reserves and market credibility; otherwise it has limited lasting effect.", orderIndex: 7 },
  { id: "cfa2-economics-currency-forecasting-q09", topicId: "cfa2-economics-currency-forecasting", text: "A long forward position on the base currency gains value when the:", optionA: "Spot/forward rate moves against the position", optionB: "Spot/forward rate moves in the position's favor", optionC: "Risk-free rate is zero", optionD: "Position is closed early at a loss", correctOption: "B", explanation: "The forward's mark-to-market value rises when the prevailing forward rate moves favorably relative to the contracted rate.", orderIndex: 8 },
  { id: "cfa2-economics-currency-forecasting-q10", topicId: "cfa2-economics-currency-forecasting", text: "Capital controls are most likely to:", optionA: "Permanently fix the real exchange rate", optionB: "Affect exchange rates and flows in the short term", optionC: "Eliminate inflation", optionD: "Guarantee appreciation", correctOption: "B", explanation: "Capital controls can influence flows and rates temporarily but rarely override fundamentals over the long run.", orderIndex: 9 },
  { id: "cfa2-economics-currency-forecasting-q11", topicId: "cfa2-economics-currency-forecasting", text: "If covered interest rate parity is violated, traders can profit via:", optionA: "Covered interest arbitrage", optionB: "A buy-and-hold equity strategy", optionC: "Pure speculation on inflation", optionD: "Dividend capture", correctOption: "A", explanation: "A CIRP violation enables riskless covered interest arbitrage, which trades quickly restore parity.", orderIndex: 10 },
  { id: "cfa2-economics-currency-forecasting-q12", topicId: "cfa2-economics-currency-forecasting", text: "Combining relative PPP with uncovered interest rate parity implies the expected real exchange rate is:", optionA: "Rising", optionB: "Constant", optionC: "Falling", optionD: "Equal to the nominal rate", correctOption: "B", explanation: "When both hold, nominal rate changes offset inflation differentials, leaving the expected real exchange rate constant.", orderIndex: 11 },

  // Price & EV multiples
  { id: "cfa2-equity-price-multiples-q01", topicId: "cfa2-equity-price-multiples", text: "A leading (forward) P/E ratio uses:", optionA: "Trailing 12-month earnings", optionB: "Expected next-period earnings", optionC: "Book value", optionD: "Sales", correctOption: "B", explanation: "The forward P/E divides price by expected (forecast) earnings, whereas trailing P/E uses the last 12 months' EPS.", orderIndex: 0 },
  { id: "cfa2-equity-price-multiples-q02", topicId: "cfa2-equity-price-multiples", text: "The justified leading P/E based on the Gordon model equals:", optionA: "(1 − payout)/(r − g)", optionB: "payout/(r − g)", optionC: "(r − g)/payout", optionD: "g/(r − g)", correctOption: "B", explanation: "Dividing the Gordon model by E₁ gives justified leading P/E = payout ratio / (r − g).", orderIndex: 1 },
  { id: "cfa2-equity-price-multiples-q03", topicId: "cfa2-equity-price-multiples", text: "Price-to-book is especially useful for valuing:", optionA: "Early-stage tech startups", optionB: "Banks and other asset-intensive financials", optionC: "Firms with no assets", optionD: "Pre-revenue biotech", correctOption: "B", explanation: "P/B suits firms whose value rests on marked-to-market assets (e.g., banks) and works even when earnings are negative.", orderIndex: 2 },
  { id: "cfa2-equity-price-multiples-q04", topicId: "cfa2-equity-price-multiples", text: "A key advantage of price-to-sales over P/E is that sales are:", optionA: "Always larger than earnings", optionB: "Less easily distorted by accounting choices and usable for unprofitable firms", optionC: "Unaffected by the business cycle", optionD: "Equal to cash flow", correctOption: "B", explanation: "Revenue is harder to manipulate than earnings and is positive even for loss-making firms, making P/S broadly applicable.", orderIndex: 3 },
  { id: "cfa2-equity-price-multiples-q05", topicId: "cfa2-equity-price-multiples", text: "Enterprise value (EV) is calculated as market cap plus debt, preferred and minority interest, minus:", optionA: "Inventory", optionB: "Cash and cash equivalents", optionC: "Goodwill", optionD: "Retained earnings", correctOption: "B", explanation: "EV = equity value + debt + preferred + minority interest − cash, reflecting the cost to acquire the operating business.", orderIndex: 4 },
  { id: "cfa2-equity-price-multiples-q06", topicId: "cfa2-equity-price-multiples", text: "EV/EBITDA is often preferred to P/E when comparing firms with different:", optionA: "Capital structures (leverage)", optionB: "Tickers", optionC: "Fiscal year-ends", optionD: "Dividend dates", correctOption: "A", explanation: "Because EV and EBITDA are pre-financing, EV/EBITDA is capital-structure neutral, aiding comparison across different leverage.", orderIndex: 5 },
  { id: "cfa2-equity-price-multiples-q07", topicId: "cfa2-equity-price-multiples", text: "The 'method of comparables' values a stock by:", optionA: "Discounting its dividends", optionB: "Comparing its multiple to those of similar companies", optionC: "Estimating replacement cost", optionD: "Using the risk-free rate", correctOption: "B", explanation: "Comparables benchmark a firm's multiple against peers/industry to judge relative cheapness or richness.", orderIndex: 6 },
  { id: "cfa2-equity-price-multiples-q08", topicId: "cfa2-equity-price-multiples", text: "A 'justified' multiple differs from a comparables multiple in that it is:", optionA: "Derived from fundamentals via a discounted-cash-flow model", optionB: "Always lower", optionC: "Based only on peers", optionD: "Independent of growth and risk", correctOption: "A", explanation: "A justified multiple is what the multiple should be given the firm's required return and growth, derived from a valuation model.", orderIndex: 7 },
  { id: "cfa2-equity-price-multiples-q09", topicId: "cfa2-equity-price-multiples", text: "Trailing P/E can be misleading for a cyclical firm because earnings:", optionA: "Are constant over the cycle", optionB: "Peak and trough with the cycle, distorting the ratio (Molodovsky effect)", optionC: "Equal sales", optionD: "Are always negative", correctOption: "B", explanation: "Cyclical earnings swing widely, so P/E can look low at the peak and high at the trough—normalized earnings help (the Molodovsky effect).", orderIndex: 8 },
  { id: "cfa2-equity-price-multiples-q10", topicId: "cfa2-equity-price-multiples", text: "Price-to-cash-flow is sometimes favored over P/E because cash flow is:", optionA: "Always larger", optionB: "Harder to manipulate than reported earnings", optionC: "Unrelated to operations", optionD: "Equal to dividends", correctOption: "B", explanation: "Cash flow measures are less susceptible to accrual-based manipulation than net earnings.", orderIndex: 9 },
  { id: "cfa2-equity-price-multiples-q11", topicId: "cfa2-equity-price-multiples", text: "When normalizing EPS for a price multiple, an analyst removes:", optionA: "All revenue", optionB: "Transitory, non-recurring items", optionC: "The dividend", optionD: "The risk-free rate", correctOption: "B", explanation: "Normalizing strips out one-off, non-recurring items to reflect sustainable earnings power.", orderIndex: 10 },
  { id: "cfa2-equity-price-multiples-q12", topicId: "cfa2-equity-price-multiples", text: "A stock trading at a lower P/E than peers with similar fundamentals is, all else equal, potentially:", optionA: "Overvalued", optionB: "Undervalued", optionC: "Risk-free", optionD: "Fairly valued by definition", correctOption: "B", explanation: "A lower multiple than comparable peers with similar growth/risk suggests the stock may be relatively undervalued.", orderIndex: 11 },

  // PE & Real Estate
  { id: "cfa2-alternative-investments-pe-real-estate-q01", topicId: "cfa2-alternative-investments-pe-real-estate", text: "Leveraged buyouts typically target companies that are:", optionA: "Early-stage with no revenue", optionB: "Mature with stable cash flows", optionC: "Pre-product startups", optionD: "Government agencies", correctOption: "B", explanation: "Buyouts apply leverage to mature firms with steady cash flows able to service the acquisition debt.", orderIndex: 0 },
  { id: "cfa2-alternative-investments-pe-real-estate-q02", topicId: "cfa2-alternative-investments-pe-real-estate", text: "The private-equity 'J-curve' describes:", optionA: "Early negative returns (fees/markdowns) before later gains from exits", optionB: "Returns that always decline", optionC: "A risk-free payoff", optionD: "Linear constant returns", correctOption: "A", explanation: "The J-curve reflects early negative net returns from fees and conservative marks, with positive returns emerging as investments are exited.", orderIndex: 1 },
  { id: "cfa2-alternative-investments-pe-real-estate-q03", topicId: "cfa2-alternative-investments-pe-real-estate", text: "In a '2 and 20' fee structure, the '20' refers to:", optionA: "A 20% management fee", optionB: "Carried interest of 20% of profits", optionC: "A 20-year lockup", optionD: "20 portfolio companies", correctOption: "B", explanation: "The '20' is carried interest—the GP's 20% share of profits—on top of the 2% management fee.", orderIndex: 2 },
  { id: "cfa2-alternative-investments-pe-real-estate-q04", topicId: "cfa2-alternative-investments-pe-real-estate", text: "A clawback provision protects limited partners by:", optionA: "Increasing management fees", optionB: "Requiring the GP to return excess carried interest if later losses occur", optionC: "Guaranteeing returns", optionD: "Eliminating the hurdle rate", correctOption: "B", explanation: "A clawback forces the GP to repay carried interest taken early if subsequent results mean the LPs were overcharged.", orderIndex: 3 },
  { id: "cfa2-alternative-investments-pe-real-estate-q05", topicId: "cfa2-alternative-investments-pe-real-estate", text: "Which is a common exit route for a private-equity investment?", optionA: "A coupon payment", optionB: "An initial public offering (IPO)", optionC: "A stock split", optionD: "A dividend reinvestment plan", correctOption: "B", explanation: "PE exits include trade sales, secondary sales, IPOs, and recapitalizations; an IPO is a classic route.", orderIndex: 4 },
  { id: "cfa2-alternative-investments-pe-real-estate-q06", topicId: "cfa2-alternative-investments-pe-real-estate", text: "In the income approach to real estate, value equals net operating income divided by the:", optionA: "Coupon rate", optionB: "Capitalization (cap) rate", optionC: "Beta", optionD: "Inflation rate", correctOption: "B", explanation: "The direct capitalization method values property as NOI / cap rate.", orderIndex: 5 },
  { id: "cfa2-alternative-investments-pe-real-estate-q07", topicId: "cfa2-alternative-investments-pe-real-estate", text: "A lower capitalization rate, all else equal, implies a property value that is:", optionA: "Lower", optionB: "Higher", optionC: "Unchanged", optionD: "Negative", correctOption: "B", explanation: "Since value = NOI / cap rate, a lower cap rate produces a higher value (and a lower income yield).", orderIndex: 6 },
  { id: "cfa2-alternative-investments-pe-real-estate-q08", topicId: "cfa2-alternative-investments-pe-real-estate", text: "The four quadrants of real estate investing are private/public crossed with:", optionA: "Equity and debt", optionB: "Large-cap and small-cap", optionC: "Domestic and foreign", optionD: "Growth and value", correctOption: "A", explanation: "Real estate spans private equity (direct), public equity (REITs), private debt (mortgages), and public debt (MBS).", orderIndex: 7 },
  { id: "cfa2-alternative-investments-pe-real-estate-q09", topicId: "cfa2-alternative-investments-pe-real-estate", text: "REITs are commonly valued using price-to-FFO, where FFO adjusts net income by adding back:", optionA: "Interest expense", optionB: "Real-estate depreciation (and removing property sale gains)", optionC: "Dividends", optionD: "Taxes", correctOption: "B", explanation: "Funds from operations adds back non-cash real-estate depreciation and excludes gains/losses on property sales to better reflect cash earnings.", orderIndex: 8 },
  { id: "cfa2-alternative-investments-pe-real-estate-q10", topicId: "cfa2-alternative-investments-pe-real-estate", text: "The cap rate is approximately equal to the discount rate minus the:", optionA: "Inflation rate", optionB: "Growth rate of NOI", optionC: "Risk-free rate", optionD: "Vacancy rate", correctOption: "B", explanation: "Analogous to the Gordon model, cap rate ≈ required return − expected growth in NOI.", orderIndex: 9 },
  { id: "cfa2-alternative-investments-pe-real-estate-q11", topicId: "cfa2-alternative-investments-pe-real-estate", text: "Venture capital differs from buyout investing primarily in that VC funds:", optionA: "Use heavy leverage on mature firms", optionB: "Finance early-stage, high-growth companies with little leverage", optionC: "Invest only in government bonds", optionD: "Avoid equity entirely", correctOption: "B", explanation: "VC targets young, high-growth companies using mostly equity, whereas buyouts use significant debt on established firms.", orderIndex: 10 },
  { id: "cfa2-alternative-investments-pe-real-estate-q12", topicId: "cfa2-alternative-investments-pe-real-estate", text: "DPI (distributions to paid-in capital) measures a private fund's:", optionA: "Unrealized value only", optionB: "Realized cash returned to investors relative to capital contributed", optionC: "Management fee", optionD: "Leverage ratio", correctOption: "B", explanation: "DPI is the ratio of cumulative distributions to paid-in capital—the realized, cash-on-cash return to LPs.", orderIndex: 11 },

  // Ethics: application & soft dollars
  { id: "cfa2-ethics-application-soft-dollar-q01", topicId: "cfa2-ethics-application-soft-dollar", text: "Client brokerage ('soft dollars') should be used to purchase:", optionA: "Office rent and general overhead", optionB: "Research that benefits the client's investment decision-making", optionC: "The manager's personal travel", optionD: "Marketing for the firm", correctOption: "B", explanation: "Client brokerage belongs to the client and must buy research that aids the investment process, not the manager's overhead.", orderIndex: 0 },
  { id: "cfa2-ethics-application-soft-dollar-q02", topicId: "cfa2-ethics-application-soft-dollar", text: "Tipping a favored client about a recommendation change before others most directly violates:", optionA: "Fair Dealing [III(B)]", optionB: "Independence and Objectivity", optionC: "Record Retention", optionD: "Knowledge of the Law", correctOption: "A", explanation: "Standard III(B) Fair Dealing requires recommendations and changes be disseminated fairly to all clients.", orderIndex: 1 },
  { id: "cfa2-ethics-application-soft-dollar-q03", topicId: "cfa2-ethics-application-soft-dollar", text: "Under the duty of Loyalty, Prudence and Care [III(A)], a manager of a pension plan must act in the interest of the:", optionA: "Plan sponsor's management", optionB: "Plan beneficiaries", optionC: "Brokerage firm", optionD: "Manager's employer", correctOption: "B", explanation: "The manager's loyalty runs to the ultimate beneficiaries of the plan, not the sponsor's executives.", orderIndex: 2 },
  { id: "cfa2-ethics-application-soft-dollar-q04", topicId: "cfa2-ethics-application-soft-dollar", text: "Best execution may NOT be sacrificed in order to:", optionA: "Reduce the client's taxes", optionB: "Direct soft-dollar business to a particular broker", optionC: "Comply with the law", optionD: "Diversify the portfolio", correctOption: "B", explanation: "Managers must seek best execution; they cannot give up execution quality to generate soft-dollar benefits.", orderIndex: 3 },
  { id: "cfa2-ethics-application-soft-dollar-q05", topicId: "cfa2-ethics-application-soft-dollar", text: "A board seat held at a company the analyst covers should be:", optionA: "Kept secret", optionB: "Disclosed as a conflict of interest [VI(A)]", optionC: "Ignored if immaterial to the analyst", optionD: "Disclosed only to regulators", correctOption: "B", explanation: "Standard VI(A) requires disclosure of conflicts such as board membership that could impair objectivity.", orderIndex: 4 },
  { id: "cfa2-ethics-application-soft-dollar-q06", topicId: "cfa2-ethics-application-soft-dollar", text: "Directed brokerage, where a client directs trades to a broker for the client's own benefit, is:", optionA: "Prohibited", optionB: "Permitted, though it may forgo best execution/soft-dollar benefits and should be disclosed", optionC: "Required", optionD: "Only allowed for institutions", correctOption: "B", explanation: "Directed brokerage is allowed but the client should understand it may sacrifice best execution or soft-dollar value.", orderIndex: 5 },
  { id: "cfa2-ethics-application-soft-dollar-q07", topicId: "cfa2-ethics-application-soft-dollar", text: "The CFA Institute Soft Dollar Standards are:", optionA: "Mandatory regulations", optionB: "Voluntary best-practice guidance built on the Code", optionC: "Tax rules", optionD: "Accounting standards", correctOption: "B", explanation: "The Soft Dollar Standards are voluntary guidance supplementing the mandatory Code and Standards.", orderIndex: 6 },
  { id: "cfa2-ethics-application-soft-dollar-q08", topicId: "cfa2-ethics-application-soft-dollar", text: "Referral fees received for recommending a service to clients must be:", optionA: "Disclosed to clients and employer [VI(C)]", optionB: "Kept confidential", optionC: "Paid to charity", optionD: "Reported only if over $100", correctOption: "A", explanation: "Standard VI(C) requires disclosure of referral fees to clients and the employer so they can assess any bias.", orderIndex: 7 },
  { id: "cfa2-ethics-application-soft-dollar-q09", topicId: "cfa2-ethics-application-soft-dollar", text: "When local law and the Code differ, members must follow the:", optionA: "Less strict of the two", optionB: "More strict of the applicable law or the Code", optionC: "Local law always", optionD: "Code always, ignoring law", correctOption: "B", explanation: "Standard I(A) requires adhering to the stricter of applicable law or the Code and Standards.", orderIndex: 8 },
  { id: "cfa2-ethics-application-soft-dollar-q10", topicId: "cfa2-ethics-application-soft-dollar", text: "Allocating a hot IPO disproportionately to the manager's own account breaches:", optionA: "Priority of Transactions [VI(B)]", optionB: "Knowledge of the Law", optionC: "Record Retention", optionD: "Market Manipulation", correctOption: "A", explanation: "Standard VI(B) Priority of Transactions requires client and employer trades take precedence over the member's own.", orderIndex: 9 },
  { id: "cfa2-ethics-application-soft-dollar-q11", topicId: "cfa2-ethics-application-soft-dollar", text: "When a recommendation is suitable for some but not all clients, the manager should apply:", optionA: "A blanket trade for everyone", optionB: "Suitability [III(C)] to each client's objectives and constraints", optionC: "Fair dealing only to large clients", optionD: "No analysis", correctOption: "B", explanation: "Standard III(C) Suitability requires matching recommendations to each client's situation, not applying them uniformly.", orderIndex: 10 },
  { id: "cfa2-ethics-application-soft-dollar-q12", topicId: "cfa2-ethics-application-soft-dollar", text: "Mixed-use research (part investment decision-making, part overhead) paid with client brokerage should be:", optionA: "Fully charged to clients", optionB: "Reasonably allocated, with only the research portion paid by client brokerage", optionC: "Charged entirely to the firm regardless", optionD: "Never disclosed", correctOption: "B", explanation: "Mixed-use products must be allocated; only the portion that assists investment decisions may be paid with client brokerage.", orderIndex: 11 },

  // Corporate Issuers: capital structure & payout
  { id: "cfa2-corporate-issuers-capital-structure-payout-q01", topicId: "cfa2-corporate-issuers-capital-structure-payout", text: "Under Modigliani-Miller with no taxes, a firm's WACC as leverage increases:", optionA: "Falls continuously", optionB: "Stays constant", optionC: "Rises continuously", optionD: "Is undefined", correctOption: "B", explanation: "With no taxes or distress costs, capital structure is irrelevant and WACC is constant.", orderIndex: 0 },
  { id: "cfa2-corporate-issuers-capital-structure-payout-q02", topicId: "cfa2-corporate-issuers-capital-structure-payout", text: "Adding corporate taxes to the MM framework makes debt attractive because of the:", optionA: "Interest tax shield", optionB: "Higher bankruptcy risk", optionC: "Dividend tax", optionD: "Equity premium", correctOption: "A", explanation: "Tax-deductible interest creates a tax shield, so firm value rises with leverage in MM-with-taxes.", orderIndex: 1 },
  { id: "cfa2-corporate-issuers-capital-structure-payout-q03", topicId: "cfa2-corporate-issuers-capital-structure-payout", text: "The static trade-off theory sets optimal leverage by balancing the tax shield against:", optionA: "Dividend payments", optionB: "Financial distress / bankruptcy costs", optionC: "Share count", optionD: "The risk-free rate", correctOption: "B", explanation: "The trade-off theory finds the leverage that maximizes value by offsetting the tax benefit with expected distress costs.", orderIndex: 2 },
  { id: "cfa2-corporate-issuers-capital-structure-payout-q04", topicId: "cfa2-corporate-issuers-capital-structure-payout", text: "Pecking-order theory predicts firms prefer financing in the order:", optionA: "Equity, then debt, then internal funds", optionB: "Internal funds, then debt, then equity", optionC: "Debt, then equity, then internal funds", optionD: "Equity only", correctOption: "B", explanation: "Because of asymmetric information, firms favor internal funds first, then debt, and issue equity only as a last resort.", orderIndex: 3 },
  { id: "cfa2-corporate-issuers-capital-structure-payout-q05", topicId: "cfa2-corporate-issuers-capital-structure-payout", text: "Issuing new equity is often read by the market as a signal that management believes the shares are:", optionA: "Undervalued", optionB: "Overvalued", optionC: "Fairly valued", optionD: "Risk-free", correctOption: "B", explanation: "Under information asymmetry, equity issuance can signal that managers think the stock is overvalued, pressuring the price.", orderIndex: 4 },
  { id: "cfa2-corporate-issuers-capital-structure-payout-q06", topicId: "cfa2-corporate-issuers-capital-structure-payout", text: "A firm with high business risk and largely intangible assets should generally carry:", optionA: "More debt", optionB: "Less debt", optionC: "Only debt", optionD: "No equity", correctOption: "B", explanation: "High operating risk and few tangible (collateralizable) assets raise distress costs, arguing for lower leverage.", orderIndex: 5 },
  { id: "cfa2-corporate-issuers-capital-structure-payout-q07", topicId: "cfa2-corporate-issuers-capital-structure-payout", text: "A dividend cut is typically interpreted by investors as:", optionA: "A positive signal", optionB: "A negative signal about future prospects", optionC: "Neutral", optionD: "A tax benefit", correctOption: "B", explanation: "Because managers are reluctant to cut, a reduction signals expected weakness and is usually penalized.", orderIndex: 6 },
  { id: "cfa2-corporate-issuers-capital-structure-payout-q08", topicId: "cfa2-corporate-issuers-capital-structure-payout", text: "Relative to dividends, share repurchases are generally:", optionA: "Less flexible", optionB: "More flexible and can be tax-advantaged", optionC: "Always taxed more heavily", optionD: "A signal of distress", correctOption: "B", explanation: "Buybacks are discretionary (more flexible) and, where capital-gains tax is lower than dividend tax, more tax-efficient.", orderIndex: 7 },
  { id: "cfa2-corporate-issuers-capital-structure-payout-q09", topicId: "cfa2-corporate-issuers-capital-structure-payout", text: "A share repurchase increases EPS when the funds' after-tax cost (earnings yield given up) is:", optionA: "Greater than the earnings yield of the stock", optionB: "Less than the earnings yield of the stock", optionC: "Equal to the dividend yield", optionD: "Zero", correctOption: "B", explanation: "If the after-tax financing cost is below the stock's earnings yield, buying back shares is accretive to EPS.", orderIndex: 8 },
  { id: "cfa2-corporate-issuers-capital-structure-payout-q10", topicId: "cfa2-corporate-issuers-capital-structure-payout", text: "The clientele effect refers to investors:", optionA: "Self-selecting firms based on payout/tax preferences", optionB: "Always preferring dividends", optionC: "Ignoring taxes", optionD: "Trading on insider information", correctOption: "A", explanation: "Different investor groups (clienteles) gravitate to firms whose payout policies suit their tax and income preferences.", orderIndex: 9 },
  { id: "cfa2-corporate-issuers-capital-structure-payout-q11", topicId: "cfa2-corporate-issuers-capital-structure-payout", text: "A buyback executed below intrinsic value:", optionA: "Transfers wealth to remaining shareholders", optionB: "Destroys value for remaining shareholders", optionC: "Has no effect", optionD: "Increases shares outstanding", correctOption: "A", explanation: "Repurchasing undervalued shares benefits continuing holders by retiring stock for less than it is worth.", orderIndex: 10 },
  { id: "cfa2-corporate-issuers-capital-structure-payout-q12", topicId: "cfa2-corporate-issuers-capital-structure-payout", text: "In MM with taxes but ignoring distress costs, the value-maximizing capital structure is theoretically:", optionA: "All equity", optionB: "Nearly all debt", optionC: "50/50", optionD: "Irrelevant", correctOption: "B", explanation: "With only the tax shield and no offsetting costs, value rises with leverage, implying a corner solution of (almost) all debt.", orderIndex: 11 },

  // Portfolio Management: multifactor models
  { id: "cfa2-portfolio-management-multifactor-models-q01", topicId: "cfa2-portfolio-management-multifactor-models", text: "Arbitrage Pricing Theory expresses expected return as a function of:", optionA: "A single market factor", optionB: "Multiple systematic risk factors", optionC: "Only idiosyncratic risk", optionD: "Dividend yield", correctOption: "B", explanation: "APT is a multifactor, no-arbitrage model generalizing the single-factor CAPM.", orderIndex: 0 },
  { id: "cfa2-portfolio-management-multifactor-models-q02", topicId: "cfa2-portfolio-management-multifactor-models", text: "A fundamental factor model uses factors defined by:", optionA: "Macroeconomic surprises", optionB: "Firm characteristics such as size and value", optionC: "Principal components only", optionD: "The risk-free rate", correctOption: "B", explanation: "Fundamental models build factors from observable firm attributes (size, value, momentum, quality).", orderIndex: 1 },
  { id: "cfa2-portfolio-management-multifactor-models-q03", topicId: "cfa2-portfolio-management-multifactor-models", text: "Active risk (tracking error) squared can be decomposed into active factor variance plus:", optionA: "Active specific (idiosyncratic) variance", optionB: "The risk-free rate", optionC: "Beta", optionD: "Total market variance", correctOption: "A", explanation: "Active risk² = active factor risk + active specific risk, separating systematic tilts from security-selection risk.", orderIndex: 2 },
  { id: "cfa2-portfolio-management-multifactor-models-q04", topicId: "cfa2-portfolio-management-multifactor-models", text: "The information ratio equals active return divided by:", optionA: "Beta", optionB: "Active risk (tracking error)", optionC: "Total volatility", optionD: "The risk-free rate", correctOption: "B", explanation: "IR = active return / active risk, the core measure of active management efficiency.", orderIndex: 3 },
  { id: "cfa2-portfolio-management-multifactor-models-q05", topicId: "cfa2-portfolio-management-multifactor-models", text: "A macroeconomic factor model would most likely include which factor?", optionA: "Book-to-market", optionB: "Unexpected change in inflation", optionC: "Firm size", optionD: "Momentum", correctOption: "B", explanation: "Macro models use economic surprises like unexpected inflation, GDP growth, and credit-spread changes.", orderIndex: 4 },
  { id: "cfa2-portfolio-management-multifactor-models-q06", topicId: "cfa2-portfolio-management-multifactor-models", text: "APT rests primarily on the principle of:", optionA: "Mean-variance optimization", optionB: "No-arbitrage", optionC: "Purchasing power parity", optionD: "Dividend irrelevance", correctOption: "B", explanation: "APT is derived from the absence of arbitrage among well-diversified portfolios, not CAPM's restrictive assumptions.", orderIndex: 5 },
  { id: "cfa2-portfolio-management-multifactor-models-q07", topicId: "cfa2-portfolio-management-multifactor-models", text: "Return attribution using a factor model splits active return into factor tilts and:", optionA: "Security selection", optionB: "The risk-free rate", optionC: "Beta drift", optionD: "Inflation", correctOption: "A", explanation: "Active return = Σ(factor exposure × factor return) + a security-selection (specific) component.", orderIndex: 6 },
  { id: "cfa2-portfolio-management-multifactor-models-q08", topicId: "cfa2-portfolio-management-multifactor-models", text: "A factor-mimicking portfolio is constructed to:", optionA: "Have unit exposure to one factor and zero to others", optionB: "Maximize idiosyncratic risk", optionC: "Eliminate all returns", optionD: "Track the risk-free rate", correctOption: "A", explanation: "A factor-mimicking portfolio isolates a single factor (unit exposure, zero to the rest) for hedging or targeting it.", orderIndex: 7 },
  { id: "cfa2-portfolio-management-multifactor-models-q09", topicId: "cfa2-portfolio-management-multifactor-models", text: "The fundamental law of active management states IR is approximately the information coefficient times the:", optionA: "Square root of breadth", optionB: "Beta", optionC: "Tracking error", optionD: "Risk-free rate", correctOption: "A", explanation: "IR ≈ IC × √breadth: skill scaled by the number of independent active decisions.", orderIndex: 8 },
  { id: "cfa2-portfolio-management-multifactor-models-q10", topicId: "cfa2-portfolio-management-multifactor-models", text: "Statistical factor models derive their factors using techniques such as:", optionA: "Principal components analysis", optionB: "Surveying CEOs", optionC: "The Taylor rule", optionD: "Cap-rate analysis", correctOption: "A", explanation: "Statistical models extract latent factors from the return covariance matrix via PCA or factor analysis.", orderIndex: 9 },
  { id: "cfa2-portfolio-management-multifactor-models-q11", topicId: "cfa2-portfolio-management-multifactor-models", text: "Multifactor models help a manager hedge a specific risk by:", optionA: "Taking an offsetting position in that factor's exposure", optionB: "Increasing idiosyncratic risk", optionC: "Buying the risk-free asset only", optionD: "Removing diversification", correctOption: "A", explanation: "Knowing factor betas lets a manager offset (hedge) a targeted factor while leaving other exposures intact.", orderIndex: 10 },
  { id: "cfa2-portfolio-management-multifactor-models-q12", topicId: "cfa2-portfolio-management-multifactor-models", text: "Compared with the CAPM, a key practical advantage of multifactor models is that they:", optionA: "Need no data", optionB: "Capture multiple sources of systematic risk, improving risk/return explanation", optionC: "Eliminate all risk", optionD: "Ignore systematic risk", correctOption: "B", explanation: "By modeling several systematic factors, multifactor models explain returns and risk better than the single-factor CAPM.", orderIndex: 11 },

  // Fixed Income: credit analysis
  { id: "cfa2-fixed-income-credit-analysis-q01", topicId: "cfa2-fixed-income-credit-analysis", text: "Expected credit loss is the product of probability of default, exposure at default and:", optionA: "Loss given default", optionB: "The coupon rate", optionC: "Duration", optionD: "The risk-free rate", correctOption: "A", explanation: "Expected loss = PD × LGD × EAD, where LGD = 1 − recovery rate.", orderIndex: 0 },
  { id: "cfa2-fixed-income-credit-analysis-q02", topicId: "cfa2-fixed-income-credit-analysis", text: "Loss given default equals:", optionA: "1 − the recovery rate", optionB: "The coupon rate", optionC: "The probability of default", optionD: "The spread duration", correctOption: "A", explanation: "LGD is the fraction not recovered: 1 − recovery rate.", orderIndex: 1 },
  { id: "cfa2-fixed-income-credit-analysis-q03", topicId: "cfa2-fixed-income-credit-analysis", text: "Which spread measure removes the effect of embedded options for comparing bonds?", optionA: "Nominal spread", optionB: "Option-adjusted spread (OAS)", optionC: "Current yield", optionD: "Coupon", correctOption: "B", explanation: "OAS strips out the option's effect, enabling apples-to-apples comparison of bonds with optionality.", orderIndex: 2 },
  { id: "cfa2-fixed-income-credit-analysis-q04", topicId: "cfa2-fixed-income-credit-analysis", text: "The approximate price impact of a spread change is −(spread duration ×):", optionA: "Change in spread", optionB: "Coupon", optionC: "Recovery rate", optionD: "Time to maturity", correctOption: "A", explanation: "Return impact ≈ −spread duration × Δspread (plus a small convexity term).", orderIndex: 3 },
  { id: "cfa2-fixed-income-credit-analysis-q05", topicId: "cfa2-fixed-income-credit-analysis", text: "A structural (Merton) credit model treats default as occurring when:", optionA: "A statistical hazard fires randomly", optionB: "Firm asset value falls below the value of debt", optionC: "The coupon is missed by one day", optionD: "Interest rates rise", correctOption: "B", explanation: "Structural models link default to the firm's asset value falling below its debt (equity as a call on assets).", orderIndex: 4 },
  { id: "cfa2-fixed-income-credit-analysis-q06", topicId: "cfa2-fixed-income-credit-analysis", text: "Reduced-form credit models, in contrast, model default as:", optionA: "A deterministic event", optionB: "A statistical hazard driven by observable variables", optionC: "Impossible", optionD: "A function of duration only", correctOption: "B", explanation: "Reduced-form models treat default as a random hazard whose intensity depends on macro/firm variables, without modeling asset value directly.", orderIndex: 5 },
  { id: "cfa2-fixed-income-credit-analysis-q07", topicId: "cfa2-fixed-income-credit-analysis", text: "Anticipating an economic downturn, a credit manager would typically:", optionA: "Move down in quality and extend spread duration", optionB: "Move up in quality and shorten spread duration", optionC: "Buy only equities", optionD: "Ignore credit risk", correctOption: "B", explanation: "Defensively, managers upgrade quality and cut spread duration before a downturn widens spreads.", orderIndex: 6 },
  { id: "cfa2-fixed-income-credit-analysis-q08", topicId: "cfa2-fixed-income-credit-analysis", text: "The G-spread is measured relative to:", optionA: "The government (Treasury) yield", optionB: "The swap curve", optionC: "The spot curve", optionD: "The coupon", correctOption: "A", explanation: "The G-spread is the yield spread over a comparable-maturity government bond.", orderIndex: 7 },
  { id: "cfa2-fixed-income-credit-analysis-q09", topicId: "cfa2-fixed-income-credit-analysis", text: "A bottom-up credit strategy focuses on:", optionA: "Sector rotation over the cycle", optionB: "Selecting individual mispriced issuers", optionC: "Government policy", optionD: "Currency forecasting", correctOption: "B", explanation: "Bottom-up credit picks specific issuers/bonds believed to be mispriced, versus top-down sector/quality rotation.", orderIndex: 8 },
  { id: "cfa2-fixed-income-credit-analysis-q10", topicId: "cfa2-fixed-income-credit-analysis", text: "The credit spread compensates investors mainly for expected loss plus:", optionA: "A risk premium and liquidity", optionB: "Dividends", optionC: "The coupon", optionD: "Inflation only", correctOption: "A", explanation: "Spreads cover expected credit loss, a risk/uncertainty premium, and a liquidity premium.", orderIndex: 9 },
  { id: "cfa2-fixed-income-credit-analysis-q11", topicId: "cfa2-fixed-income-credit-analysis", text: "Holding many uncorrelated issuers reduces which component of credit risk?", optionA: "Idiosyncratic (issuer-specific) default risk", optionB: "Systematic spread risk", optionC: "Interest-rate risk", optionD: "Inflation risk", correctOption: "A", explanation: "Diversification across issuers reduces idiosyncratic default risk, though systematic spread risk remains.", orderIndex: 10 },
  { id: "cfa2-fixed-income-credit-analysis-q12", topicId: "cfa2-fixed-income-credit-analysis", text: "In a recovery phase, a credit manager seeking higher returns would most likely:", optionA: "Add lower-rated, higher-spread credit", optionB: "Move entirely to Treasuries", optionC: "Shorten spread duration sharply", optionD: "Sell all credit", correctOption: "A", explanation: "As conditions improve and spreads tighten, adding lower-rated, higher-spread bonds increases return potential.", orderIndex: 11 },

  // Pensions & post-employment benefits
  { id: "cfa2-financial-reporting-pensions-q01", topicId: "cfa2-financial-reporting-pensions", text: "In a defined contribution plan, investment risk is borne by the:", optionA: "Employer", optionB: "Employee", optionC: "Government", optionD: "Plan auditor", correctOption: "B", explanation: "In DC plans the employer's obligation is just the contribution; the employee bears the investment outcome.", orderIndex: 0 },
  { id: "cfa2-financial-reporting-pensions-q02", topicId: "cfa2-financial-reporting-pensions", text: "A defined benefit plan's funded status equals plan assets minus the:", optionA: "Projected benefit obligation (PBO)", optionB: "Service cost", optionC: "Discount rate", optionD: "Contribution", correctOption: "A", explanation: "Funded status = fair value of plan assets − PBO; a deficit is reported as a net pension liability.", orderIndex: 1 },
  { id: "cfa2-financial-reporting-pensions-q03", topicId: "cfa2-financial-reporting-pensions", text: "All else equal, increasing the discount rate used for a DB obligation will:", optionA: "Increase the PBO", optionB: "Decrease the PBO", optionC: "Not affect the PBO", optionD: "Increase plan assets", correctOption: "B", explanation: "A higher discount rate lowers the present value of future benefits, reducing the PBO.", orderIndex: 2 },
  { id: "cfa2-financial-reporting-pensions-q04", topicId: "cfa2-financial-reporting-pensions", text: "Under IFRS, remeasurements (actuarial gains/losses) of a DB plan are reported in:", optionA: "Profit or loss", optionB: "Other comprehensive income (not recycled)", optionC: "Retained earnings directly", optionD: "The cash flow statement", correctOption: "B", explanation: "IFRS records remeasurements in OCI and does not subsequently recycle them to P&L.", orderIndex: 3 },
  { id: "cfa2-financial-reporting-pensions-q05", topicId: "cfa2-financial-reporting-pensions", text: "Service cost in a DB plan represents:", optionA: "Interest on the obligation", optionB: "The present value of benefits earned by employees in the period", optionC: "The return on plan assets", optionD: "Employer contributions", correctOption: "B", explanation: "Service cost is the additional benefit obligation from employees' service during the period.", orderIndex: 4 },
  { id: "cfa2-financial-reporting-pensions-q06", topicId: "cfa2-financial-reporting-pensions", text: "A higher assumed rate of compensation growth will, all else equal:", optionA: "Decrease the PBO", optionB: "Increase the PBO", optionC: "Not affect the PBO", optionD: "Reduce service cost", correctOption: "B", explanation: "Higher expected salary growth raises the projected benefits, increasing the PBO and service cost.", orderIndex: 5 },
  { id: "cfa2-financial-reporting-pensions-q07", topicId: "cfa2-financial-reporting-pensions", text: "For a DC plan, the periodic pension expense is generally equal to:", optionA: "The change in the PBO", optionB: "The employer's contribution for the period", optionC: "Net interest cost", optionD: "Actuarial losses", correctOption: "B", explanation: "DC expense is simply the contribution owed; there is no actuarial obligation to measure.", orderIndex: 6 },
  { id: "cfa2-financial-reporting-pensions-q08", topicId: "cfa2-financial-reporting-pensions", text: "Net interest expense on a DB net liability is calculated using the:", optionA: "Expected return on assets", optionB: "Discount rate applied to the net pension liability", optionC: "Risk-free rate on contributions", optionD: "Compensation growth rate", correctOption: "B", explanation: "Under IFRS, net interest = discount rate × the opening net pension liability (or asset).", orderIndex: 7 },
  { id: "cfa2-financial-reporting-pensions-q09", topicId: "cfa2-financial-reporting-pensions", text: "A plan whose assets exceed its PBO reports a:", optionA: "Net pension asset (capped by the asset ceiling)", optionB: "Net pension liability", optionC: "Deferred tax liability only", optionD: "No balance-sheet item", correctOption: "A", explanation: "A surplus is recognized as a net pension asset, subject to the asset-ceiling test under IFRS.", orderIndex: 8 },
  { id: "cfa2-financial-reporting-pensions-q10", topicId: "cfa2-financial-reporting-pensions", text: "Analysts adjust pension disclosures mainly to:", optionA: "Inflate earnings", optionB: "Improve comparability and detect aggressive assumptions", optionC: "Hide the obligation", optionD: "Avoid taxes", correctOption: "B", explanation: "Reclassifying components and testing assumptions makes cross-company comparisons meaningful and reveals bias.", orderIndex: 9 },
  { id: "cfa2-financial-reporting-pensions-q11", topicId: "cfa2-financial-reporting-pensions", text: "Total periodic pension cost (economic) is best approximated by:", optionA: "Contributions only", optionB: "Ending net liability − beginning net liability + employer contributions", optionC: "Service cost only", optionD: "The discount rate", correctOption: "B", explanation: "Economic pension cost = change in funded status adjusted for employer contributions during the period.", orderIndex: 10 },
  { id: "cfa2-financial-reporting-pensions-q12", topicId: "cfa2-financial-reporting-pensions", text: "Moving actuarial losses from the corridor into P&L over time (US GAAP) is called:", optionA: "Amortization of actuarial gains/losses", optionB: "Capitalization", optionC: "Remeasurement to OCI", optionD: "Settlement", correctOption: "A", explanation: "US GAAP allows deferral with corridor amortization of actuarial gains/losses into pension expense over time.", orderIndex: 11 },

  // Multinational operations & translation
  { id: "cfa2-financial-reporting-multinational-q01", topicId: "cfa2-financial-reporting-multinational", text: "The current-rate translation method is used when the subsidiary's functional currency is the:", optionA: "Parent's presentation currency", optionB: "Local (subsidiary's own) currency", optionC: "US dollar always", optionD: "Currency of hyperinflation", correctOption: "B", explanation: "When the functional currency is the local currency, the current-rate method applies and the gain/loss goes to OCI (CTA).", orderIndex: 0 },
  { id: "cfa2-financial-reporting-multinational-q02", topicId: "cfa2-financial-reporting-multinational", text: "Under the temporal method, non-monetary assets are translated at the:", optionA: "Current rate", optionB: "Historical rate", optionC: "Average rate", optionD: "Forward rate", correctOption: "B", explanation: "The temporal method translates non-monetary items (inventory, PP&E) at historical rates; monetary items at the current rate.", orderIndex: 1 },
  { id: "cfa2-financial-reporting-multinational-q03", topicId: "cfa2-financial-reporting-multinational", text: "Translation gains or losses under the current-rate method are reported in:", optionA: "Net income", optionB: "Other comprehensive income (cumulative translation adjustment)", optionC: "Retained earnings directly", optionD: "The cash flow statement", correctOption: "B", explanation: "Current-rate translation adjustments accumulate in OCI as the CTA, not in net income.", orderIndex: 2 },
  { id: "cfa2-financial-reporting-multinational-q04", topicId: "cfa2-financial-reporting-multinational", text: "Remeasurement gains/losses under the temporal method are reported in:", optionA: "OCI", optionB: "Net income", optionC: "A separate equity reserve only", optionD: "The notes only", correctOption: "B", explanation: "The temporal method runs the remeasurement gain/loss through the income statement.", orderIndex: 3 },
  { id: "cfa2-financial-reporting-multinational-q05", topicId: "cfa2-financial-reporting-multinational", text: "The functional currency is determined by the:", optionA: "Parent's home country always", optionB: "Primary economic environment in which the entity operates", optionC: "Auditor's preference", optionD: "Tax authority", correctOption: "B", explanation: "Functional currency reflects where the entity primarily generates and spends cash, prices, and obtains financing.", orderIndex: 4 },
  { id: "cfa2-financial-reporting-multinational-q06", topicId: "cfa2-financial-reporting-multinational", text: "Under the current-rate method, revenues and expenses are translated at the:", optionA: "Historical rate", optionB: "Average rate for the period", optionC: "Closing rate", optionD: "Forward rate", correctOption: "B", explanation: "Income-statement items use the period's average rate under the current-rate method.", orderIndex: 5 },
  { id: "cfa2-financial-reporting-multinational-q07", topicId: "cfa2-financial-reporting-multinational", text: "Under the temporal method, COGS and depreciation are translated at:", optionA: "The current rate", optionB: "Historical rates tied to the related assets", optionC: "The average rate", optionD: "The forward rate", correctOption: "B", explanation: "Because they relate to non-monetary assets carried at historical cost, COGS and depreciation use historical rates.", orderIndex: 6 },
  { id: "cfa2-financial-reporting-multinational-q08", topicId: "cfa2-financial-reporting-multinational", text: "Financial ratios of the subsidiary are best preserved under the:", optionA: "Temporal method", optionB: "Current-rate method", optionC: "Neither method", optionD: "Both equally", correctOption: "B", explanation: "Because all balance-sheet items use one (current) rate, the current-rate method largely preserves the sub's ratios.", orderIndex: 7 },
  { id: "cfa2-financial-reporting-multinational-q09", topicId: "cfa2-financial-reporting-multinational", text: "In a hyperinflationary economy, US GAAP requires the foreign entity to use the:", optionA: "Current-rate method", optionB: "Temporal method (functional currency = parent's)", optionC: "Average-rate method", optionD: "No translation", correctOption: "B", explanation: "US GAAP treats the parent's currency as functional in hyperinflation, applying the temporal method.", orderIndex: 8 },
  { id: "cfa2-financial-reporting-multinational-q10", topicId: "cfa2-financial-reporting-multinational", text: "Under IFRS, a subsidiary in a hyperinflationary economy first:", optionA: "Restates for inflation, then translates at the current rate", optionB: "Uses historical rates only", optionC: "Ignores inflation", optionD: "Converts to gold", correctOption: "A", explanation: "IFRS restates the statements for inflation and then translates everything at the current rate.", orderIndex: 9 },
  { id: "cfa2-financial-reporting-multinational-q11", topicId: "cfa2-financial-reporting-multinational", text: "A depreciating local currency with a net asset exposure produces, under the current-rate method, a:", optionA: "Positive CTA", optionB: "Negative CTA in OCI", optionC: "Gain in net income", optionD: "No effect", correctOption: "B", explanation: "Translating a net asset position at a weakening rate yields a negative cumulative translation adjustment.", orderIndex: 10 },
  { id: "cfa2-financial-reporting-multinational-q12", topicId: "cfa2-financial-reporting-multinational", text: "Monetary assets and liabilities under the temporal method are translated at the:", optionA: "Historical rate", optionB: "Current (closing) rate", optionC: "Average rate", optionD: "Forward rate", correctOption: "B", explanation: "The temporal method translates monetary items (cash, receivables, debt) at the current rate.", orderIndex: 11 },

  // Swaps & FRA valuation
  { id: "cfa2-derivatives-swaps-fra-q01", topicId: "cfa2-derivatives-swaps-fra", text: "The long position in a forward rate agreement benefits when the reference rate at expiry is:", optionA: "Below the FRA rate", optionB: "Above the FRA rate", optionC: "Equal to the FRA rate", optionD: "Zero", correctOption: "B", explanation: "The long FRA gains when the realized reference rate exceeds the contracted FRA rate.", orderIndex: 0 },
  { id: "cfa2-derivatives-swaps-fra-q02", topicId: "cfa2-derivatives-swaps-fra", text: "A plain-vanilla interest-rate swap is economically equivalent to a:", optionA: "Single forward", optionB: "Series (portfolio) of forward rate agreements", optionC: "Equity option", optionD: "Currency forward", correctOption: "B", explanation: "Exchanging fixed for floating across multiple dates is equivalent to a strip of FRAs (or a long/short bond pair).", orderIndex: 1 },
  { id: "cfa2-derivatives-swaps-fra-q03", topicId: "cfa2-derivatives-swaps-fra", text: "The fixed rate on a newly initiated swap is set so that the swap's initial value is:", optionA: "Positive to the payer", optionB: "Zero", optionC: "Equal to the notional", optionD: "Negative to the receiver", correctOption: "B", explanation: "The swap fixed rate equates the PV of the fixed and floating legs, giving an initial value of zero.", orderIndex: 2 },
  { id: "cfa2-derivatives-swaps-fra-q04", topicId: "cfa2-derivatives-swaps-fra", text: "The floating leg of a swap resets to par value on each:", optionA: "Trade date only", optionB: "Reset/payment date", optionC: "Maturity date only", optionD: "Calendar year-end", correctOption: "B", explanation: "Immediately after each reset, the floating leg is worth par, which simplifies swap valuation.", orderIndex: 3 },
  { id: "cfa2-derivatives-swaps-fra-q05", topicId: "cfa2-derivatives-swaps-fra", text: "After rates rise, the value of a pay-fixed/receive-floating swap to the fixed-rate payer:", optionA: "Increases", optionB: "Decreases", optionC: "Is unchanged", optionD: "Becomes the notional", correctOption: "A", explanation: "Rising rates make the floating leg the payer receives more valuable, increasing the pay-fixed position's value.", orderIndex: 4 },
  { id: "cfa2-derivatives-swaps-fra-q06", topicId: "cfa2-derivatives-swaps-fra", text: "A currency swap involves exchanging:", optionA: "Only floating interest", optionB: "Principal and interest payments in two different currencies", optionC: "Equity returns", optionD: "Commodities", correctOption: "B", explanation: "Currency swaps exchange principal and interest streams denominated in two currencies.", orderIndex: 5 },
  { id: "cfa2-derivatives-swaps-fra-q07", topicId: "cfa2-derivatives-swaps-fra", text: "A firm with floating-rate debt that wants fixed payments can enter a swap to:", optionA: "Receive fixed, pay floating", optionB: "Pay fixed, receive floating", optionC: "Pay floating, receive floating", optionD: "Buy a call option", correctOption: "B", explanation: "Paying fixed and receiving floating offsets the floating debt, synthetically converting it to fixed-rate.", orderIndex: 6 },
  { id: "cfa2-derivatives-swaps-fra-q08", topicId: "cfa2-derivatives-swaps-fra", text: "The FRA settlement amount is paid on a discounted basis because:", optionA: "It is settled at expiry but covers a future period's interest", optionB: "Interest rates are negative", optionC: "The notional is exchanged", optionD: "It is an equity product", correctOption: "A", explanation: "Settlement occurs at the FRA's expiry, so the interest differential for the upcoming period is discounted back.", orderIndex: 7 },
  { id: "cfa2-derivatives-swaps-fra-q09", topicId: "cfa2-derivatives-swaps-fra", text: "An equity swap most commonly exchanges:", optionA: "An equity return for a fixed or floating rate", optionB: "Two fixed rates", optionC: "Two currencies' principal", optionD: "Commodities for bonds", correctOption: "A", explanation: "Equity swaps exchange the total return on a stock/index for a fixed or floating interest stream.", orderIndex: 8 },
  { id: "cfa2-derivatives-swaps-fra-q10", topicId: "cfa2-derivatives-swaps-fra", text: "The swap fixed rate is computed from the:", optionA: "Set of discount factors implied by the spot/forward curve", optionB: "Dividend yield", optionC: "Equity beta", optionD: "Recovery rate", correctOption: "A", explanation: "The fixed rate is a par-rate calculation using discount factors derived from the current term structure.", orderIndex: 9 },
  { id: "cfa2-derivatives-swaps-fra-q11", topicId: "cfa2-derivatives-swaps-fra", text: "The value of an existing swap to the fixed payer can be found as:", optionA: "PV(floating leg) − PV(fixed leg)", optionB: "PV(fixed leg) − PV(floating leg)", optionC: "Notional × coupon", optionD: "Zero at all times", correctOption: "A", explanation: "For the fixed-rate payer, swap value = PV of the floating leg received minus PV of the fixed leg paid.", orderIndex: 10 },
  { id: "cfa2-derivatives-swaps-fra-q12", topicId: "cfa2-derivatives-swaps-fra", text: "A key advantage of using swaps to change exposure is that they:", optionA: "Require reissuing debt", optionB: "Adjust exposure cheaply without altering the underlying assets/liabilities", optionC: "Eliminate all risk", optionD: "Guarantee profits", correctOption: "B", explanation: "Swaps efficiently convert fixed↔floating or currency exposures without buying/selling the underlying instruments.", orderIndex: 11 },

  // Time-series analysis
  { id: "cfa2-quantitative-methods-time-series-q01", topicId: "cfa2-quantitative-methods-time-series", text: "A log-linear trend model is appropriate when a series grows at a constant:", optionA: "Absolute amount per period", optionB: "Growth rate (percentage) per period", optionC: "Variance", optionD: "Mean only", correctOption: "B", explanation: "Log-linear (exponential) trends fit series with a constant percentage growth rate; linear trends fit constant absolute change.", orderIndex: 0 },
  { id: "cfa2-quantitative-methods-time-series-q02", topicId: "cfa2-quantitative-methods-time-series", text: "An AR(1) model is covariance-stationary only if the slope coefficient is:", optionA: "Exactly 1", optionB: "Less than 1 in absolute value", optionC: "Greater than 1", optionD: "Negative only", correctOption: "B", explanation: "|b₁| < 1 is required for stationarity; b₁ = 1 is a non-stationary random walk (unit root).", orderIndex: 1 },
  { id: "cfa2-quantitative-methods-time-series-q03", topicId: "cfa2-quantitative-methods-time-series", text: "A series with a unit root can usually be made stationary by:", optionA: "Squaring it", optionB: "First-differencing", optionC: "Adding a trend", optionD: "Multiplying by its lag", correctOption: "B", explanation: "Differencing removes a unit root, producing a stationary series for AR modeling.", orderIndex: 2 },
  { id: "cfa2-quantitative-methods-time-series-q04", topicId: "cfa2-quantitative-methods-time-series", text: "The Dickey-Fuller test is used to test for:", optionA: "Heteroskedasticity", optionB: "A unit root (non-stationarity)", optionC: "Multicollinearity", optionD: "Normality", correctOption: "B", explanation: "Dickey-Fuller tests the null that the series has a unit root and is therefore non-stationary.", orderIndex: 3 },
  { id: "cfa2-quantitative-methods-time-series-q05", topicId: "cfa2-quantitative-methods-time-series", text: "The mean-reverting level of an AR(1) model is:", optionA: "b₀ × b₁", optionB: "b₀ / (1 − b₁)", optionC: "b₁ / b₀", optionD: "1 − b₁", correctOption: "B", explanation: "The long-run mean of a stationary AR(1) is the intercept divided by (1 − slope).", orderIndex: 4 },
  { id: "cfa2-quantitative-methods-time-series-q06", topicId: "cfa2-quantitative-methods-time-series", text: "Significant autocorrelation in a model's residuals indicates the model is:", optionA: "Correctly specified", optionB: "Misspecified (e.g., needs more lags)", optionC: "Stationary by definition", optionD: "Free of a unit root", correctOption: "B", explanation: "Residual autocorrelation signals misspecification; adding lags or seasonal terms may be needed.", orderIndex: 5 },
  { id: "cfa2-quantitative-methods-time-series-q07", topicId: "cfa2-quantitative-methods-time-series", text: "Out-of-sample forecast accuracy is best compared using the:", optionA: "Root mean squared error (RMSE)", optionB: "R-squared", optionC: "Durbin-Watson statistic", optionD: "Intercept", correctOption: "A", explanation: "Lower RMSE indicates better out-of-sample forecasting performance.", orderIndex: 6 },
  { id: "cfa2-quantitative-methods-time-series-q08", topicId: "cfa2-quantitative-methods-time-series", text: "ARCH is present when the variance of the error term:", optionA: "Is constant", optionB: "Depends on prior periods' squared errors", optionC: "Is always zero", optionD: "Equals the mean", correctOption: "B", explanation: "Autoregressive conditional heteroskedasticity means error variance depends on past squared errors.", orderIndex: 7 },
  { id: "cfa2-quantitative-methods-time-series-q09", topicId: "cfa2-quantitative-methods-time-series", text: "Seasonality in a quarterly AR model is often handled by adding:", optionA: "A lag at the seasonal interval (e.g., the fourth lag)", optionB: "More observations only", optionC: "A higher intercept", optionD: "A unit root", correctOption: "A", explanation: "A seasonal lag (e.g., x_{t-4} for quarterly data) captures recurring seasonal patterns.", orderIndex: 8 },
  { id: "cfa2-quantitative-methods-time-series-q10", topicId: "cfa2-quantitative-methods-time-series", text: "Regressing two unrelated unit-root (non-stationary) series tends to produce a:", optionA: "Spurious regression", optionB: "Perfectly valid result", optionC: "Zero R-squared", optionD: "Stationary residual always", correctOption: "A", explanation: "Two trending non-stationary series can show a high but meaningless (spurious) relationship.", orderIndex: 9 },
  { id: "cfa2-quantitative-methods-time-series-q11", topicId: "cfa2-quantitative-methods-time-series", text: "Two non-stationary series can be validly regressed together if they are:", optionA: "Cointegrated", optionB: "Heteroskedastic", optionC: "Seasonal", optionD: "Uncorrelated", correctOption: "A", explanation: "Cointegration means a long-run equilibrium relationship exists, making the regression meaningful.", orderIndex: 10 },
  { id: "cfa2-quantitative-methods-time-series-q12", topicId: "cfa2-quantitative-methods-time-series", text: "A random walk is best described as an AR(1) with:", optionA: "b₁ = 0", optionB: "b₁ = 1 (a unit root)", optionC: "A negative intercept", optionD: "Constant variance", correctOption: "B", explanation: "A random walk has slope 1 (unit root); its variance grows over time, so it is non-stationary.", orderIndex: 11 },

  // Economic growth
  { id: "cfa2-economics-growth-q01", topicId: "cfa2-economics-growth", text: "In growth accounting, output growth not explained by capital and labor growth is attributed to:", optionA: "Inflation", optionB: "Total factor productivity (TFP)", optionC: "Population only", optionD: "The exchange rate", correctOption: "B", explanation: "TFP is the residual capturing technology/efficiency gains beyond measured factor inputs.", orderIndex: 0 },
  { id: "cfa2-economics-growth-q02", topicId: "cfa2-economics-growth", text: "The neoclassical (Solow) model predicts that long-run per-capita growth comes from:", optionA: "Capital accumulation alone", optionB: "Exogenous technological progress", optionC: "Higher savings forever", optionD: "Population growth", correctOption: "B", explanation: "Due to diminishing returns to capital, sustained per-capita growth requires exogenous technological progress.", orderIndex: 1 },
  { id: "cfa2-economics-growth-q03", topicId: "cfa2-economics-growth", text: "Endogenous growth theory differs from the Solow model in that it holds:", optionA: "Capital has diminishing returns always", optionB: "R&D and human capital can yield constant/increasing returns and raise long-run growth", optionC: "Growth is impossible", optionD: "Technology is fixed", correctOption: "B", explanation: "Endogenous models let investment in knowledge generate non-diminishing returns, so policy can lift the long-run growth rate.", orderIndex: 2 },
  { id: "cfa2-economics-growth-q04", topicId: "cfa2-economics-growth", text: "The convergence hypothesis predicts that, all else equal, poorer economies will:", optionA: "Grow more slowly", optionB: "Grow faster and catch up to richer economies", optionC: "Never grow", optionD: "Have higher inflation", correctOption: "B", explanation: "Neoclassical convergence implies lower-income economies grow faster due to higher marginal returns to capital.", orderIndex: 3 },
  { id: "cfa2-economics-growth-q05", topicId: "cfa2-economics-growth", text: "'Capital deepening' refers to:", optionA: "An increase in capital per worker", optionB: "More workers", optionC: "Higher TFP", optionD: "Lower savings", correctOption: "A", explanation: "Capital deepening raises the capital-to-labor ratio; its growth contribution diminishes as the ratio rises.", orderIndex: 4 },
  { id: "cfa2-economics-growth-q06", topicId: "cfa2-economics-growth", text: "Sustainable economic growth tends to support long-run equity returns through:", optionA: "Higher inflation", optionB: "Higher corporate earnings growth", optionC: "Lower productivity", optionD: "Currency depreciation", correctOption: "B", explanation: "Durable growth feeds aggregate earnings, a key driver of long-horizon equity returns.", orderIndex: 5 },
  { id: "cfa2-economics-growth-q07", topicId: "cfa2-economics-growth", text: "Which institutional factor most supports long-run growth?", optionA: "Weak property rights", optionB: "Strong property rights and rule of law", optionC: "Closed trade", optionD: "High corruption", correctOption: "B", explanation: "Secure property rights and rule of law encourage investment and innovation, supporting growth.", orderIndex: 6 },
  { id: "cfa2-economics-growth-q08", topicId: "cfa2-economics-growth", text: "In the production function Y = A·F(K, L), 'A' represents:", optionA: "Labor hours", optionB: "Total factor productivity / technology", optionC: "The capital stock", optionD: "The savings rate", correctOption: "B", explanation: "A scales output for given inputs and represents technology/total factor productivity.", orderIndex: 7 },
  { id: "cfa2-economics-growth-q09", topicId: "cfa2-economics-growth", text: "Growth driven mainly by capital deepening (rather than TFP) is generally:", optionA: "More sustainable indefinitely", optionB: "Subject to diminishing returns and less durable", optionC: "Impossible", optionD: "Independent of the steady state", correctOption: "B", explanation: "Because capital faces diminishing returns, growth relying on capital deepening fades without TFP gains.", orderIndex: 8 },
  { id: "cfa2-economics-growth-q10", topicId: "cfa2-economics-growth", text: "Favorable demographics raise growth potential primarily by increasing:", optionA: "The labor input", optionB: "Inflation", optionC: "The discount rate", optionD: "Currency value", correctOption: "A", explanation: "A growing working-age population expands the labor input component of potential output.", orderIndex: 9 },
  { id: "cfa2-economics-growth-q11", topicId: "cfa2-economics-growth", text: "'Club convergence' holds that convergence occurs only among economies that:", optionA: "Speak the same language", optionB: "Share similar institutions and characteristics", optionC: "Have identical GDP", optionD: "Use the same currency", correctOption: "B", explanation: "Club convergence says only economies with comparable institutions/structures converge to similar income levels.", orderIndex: 10 },
  { id: "cfa2-economics-growth-q12", topicId: "cfa2-economics-growth", text: "Openness to trade is generally associated with:", optionA: "Lower productivity", optionB: "Higher growth via technology diffusion and competition", optionC: "No growth effect", optionD: "Guaranteed deflation", correctOption: "B", explanation: "Trade openness spreads technology and intensifies competition, supporting productivity and growth.", orderIndex: 11 },

  // Hedge fund strategies
  { id: "cfa2-alternative-investments-hedge-funds-q01", topicId: "cfa2-alternative-investments-hedge-funds", text: "An equity market-neutral strategy aims for a portfolio beta of approximately:", optionA: "1.0", optionB: "0", optionC: "2.0", optionD: "−1.0", correctOption: "B", explanation: "Market-neutral funds balance longs and shorts to target near-zero net market (beta) exposure, isolating alpha.", orderIndex: 0 },
  { id: "cfa2-alternative-investments-hedge-funds-q02", topicId: "cfa2-alternative-investments-hedge-funds", text: "Merger (risk) arbitrage is an example of which strategy category?", optionA: "Macro", optionB: "Event-driven", optionC: "Relative value", optionD: "Dedicated short", correctOption: "B", explanation: "Merger arbitrage trades around announced corporate events, a classic event-driven approach.", orderIndex: 1 },
  { id: "cfa2-alternative-investments-hedge-funds-q03", topicId: "cfa2-alternative-investments-hedge-funds", text: "Global macro and managed futures (CTA) strategies primarily trade on:", optionA: "Single-stock fundamentals only", optionB: "Macroeconomic trends across asset classes", optionC: "Merger spreads", optionD: "Convertible bonds", correctOption: "B", explanation: "Macro/CTA strategies take directional positions based on macro views and price trends across markets.", orderIndex: 2 },
  { id: "cfa2-alternative-investments-hedge-funds-q04", topicId: "cfa2-alternative-investments-hedge-funds", text: "A 'high-water mark' ensures that incentive fees are charged only on:", optionA: "Gross assets", optionB: "New profits above the prior peak value", optionC: "Every gain regardless of past losses", optionD: "Management fees", correctOption: "B", explanation: "The high-water mark prevents charging performance fees on gains that merely recover earlier losses.", orderIndex: 3 },
  { id: "cfa2-alternative-investments-hedge-funds-q05", topicId: "cfa2-alternative-investments-hedge-funds", text: "Fund-of-funds add diversification but suffer from:", optionA: "No fees", optionB: "An extra layer of fees (double fees)", optionC: "Guaranteed returns", optionD: "Daily liquidity always", correctOption: "B", explanation: "Fund-of-funds charge their own fee on top of the underlying managers' fees, reducing net returns.", orderIndex: 4 },
  { id: "cfa2-alternative-investments-hedge-funds-q06", topicId: "cfa2-alternative-investments-hedge-funds", text: "Many hedge-fund return streams are described as 'short volatility' because they:", optionA: "Always profit in crises", optionB: "Earn steady gains then suffer large losses in stress (negative skew)", optionC: "Have no risk", optionD: "Are perfectly normal", correctOption: "B", explanation: "Such strategies resemble selling insurance: small consistent gains punctuated by occasional large drawdowns.", orderIndex: 5 },
  { id: "cfa2-alternative-investments-hedge-funds-q07", topicId: "cfa2-alternative-investments-hedge-funds", text: "Lock-ups, gates, and notice periods are features that limit a hedge fund's:", optionA: "Leverage", optionB: "Investor liquidity / redemptions", optionC: "Fees", optionD: "Returns", correctOption: "B", explanation: "These provisions restrict how and when investors can withdraw capital, managing liquidity for the manager.", orderIndex: 6 },
  { id: "cfa2-alternative-investments-hedge-funds-q08", topicId: "cfa2-alternative-investments-hedge-funds", text: "Convertible arbitrage is best classified as a ____ strategy.", optionA: "Relative value", optionB: "Macro", optionC: "Event-driven", optionD: "Long-only", correctOption: "A", explanation: "Convertible arbitrage exploits pricing differences between a convertible bond and its components — a relative-value trade.", orderIndex: 7 },
  { id: "cfa2-alternative-investments-hedge-funds-q09", topicId: "cfa2-alternative-investments-hedge-funds", text: "Because hedge-fund returns are often non-normal, risk should be assessed with:", optionA: "Standard deviation alone", optionB: "Measures capturing skew, kurtosis and tail/drawdown risk", optionC: "The dividend yield", optionD: "Beta only", correctOption: "B", explanation: "Fat tails and negative skew mean volatility understates risk; downside/tail measures are needed.", orderIndex: 8 },
  { id: "cfa2-alternative-investments-hedge-funds-q10", topicId: "cfa2-alternative-investments-hedge-funds", text: "A dedicated short-bias fund profits when:", optionA: "Targeted stocks decline", optionB: "The market rises", optionC: "Rates fall only", optionD: "Volatility is zero", correctOption: "A", explanation: "Dedicated short managers are net short and gain when their shorted securities fall in price.", orderIndex: 9 },
  { id: "cfa2-alternative-investments-hedge-funds-q11", topicId: "cfa2-alternative-investments-hedge-funds", text: "Operational due diligence on a hedge fund focuses on:", optionA: "Only past returns", optionB: "Independent administration/custody, valuation, controls and key-person risk", optionC: "The benchmark index", optionD: "The risk-free rate", correctOption: "B", explanation: "ODD assesses the non-investment infrastructure whose failure is a leading cause of fund losses.", orderIndex: 10 },
  { id: "cfa2-alternative-investments-hedge-funds-q12", topicId: "cfa2-alternative-investments-hedge-funds", text: "Reported hedge-fund correlations to equities tend to:", optionA: "Stay constant", optionB: "Rise during market crises, reducing diversification when needed", optionC: "Fall to −1 in crises", optionD: "Be exactly 1 always", correctOption: "B", explanation: "Like other alternatives, hedge-fund correlations often spike in stress, eroding diversification benefits.", orderIndex: 11 },

  // Ethics: investment analysis, recommendations & records
  { id: "cfa2-ethics-analysis-recommendations-q01", topicId: "cfa2-ethics-analysis-recommendations", text: "Standard V(A) requires that recommendations have a:", optionA: "Guaranteed return", optionB: "Reasonable and adequate basis supported by research", optionC: "Majority vote", optionD: "Regulatory pre-approval", correctOption: "B", explanation: "Diligence and Reasonable Basis [V(A)] requires sufficient research/analysis behind any recommendation or action.", orderIndex: 0 },
  { id: "cfa2-ethics-analysis-recommendations-q02", topicId: "cfa2-ethics-analysis-recommendations", text: "When relying on third-party research, a member must:", optionA: "Assume it is always correct", optionB: "Make reasonable efforts to verify its soundness", optionC: "Never use it", optionD: "Disclose nothing", correctOption: "B", explanation: "Members remain responsible and should take reasonable steps to confirm secondary/third-party research is sound.", orderIndex: 1 },
  { id: "cfa2-ethics-analysis-recommendations-q03", topicId: "cfa2-ethics-analysis-recommendations", text: "Standard V(B) requires members to communicate by:", optionA: "Mixing fact and opinion freely", optionB: "Distinguishing fact from opinion and disclosing the basic process and risks", optionC: "Hiding assumptions", optionD: "Omitting limitations", correctOption: "B", explanation: "V(B) Communication requires separating fact from opinion and disclosing the process, risks, and limitations.", orderIndex: 2 },
  { id: "cfa2-ethics-analysis-recommendations-q04", topicId: "cfa2-ethics-analysis-recommendations", text: "Absent a regulatory requirement, CFA Institute recommends retaining records for at least:", optionA: "1 year", optionB: "7 years", optionC: "20 years", optionD: "No minimum", correctOption: "B", explanation: "The recommended minimum record-retention period is seven years when no stricter law applies.", orderIndex: 3 },
  { id: "cfa2-ethics-analysis-recommendations-q05", topicId: "cfa2-ethics-analysis-recommendations", text: "Research files and records created for the employer are generally:", optionA: "The member's personal property to take when leaving", optionB: "The firm's property", optionC: "Public domain", optionD: "Owned by clients", correctOption: "B", explanation: "Supporting records belong to the firm; a departing member cannot take them to a new employer.", orderIndex: 4 },
  { id: "cfa2-ethics-analysis-recommendations-q06", topicId: "cfa2-ethics-analysis-recommendations", text: "A member who disagrees with a team's consensus research may:", optionA: "Never be associated with the report", optionB: "Remain associated if the report has a reasonable basis they can support", optionC: "Be forced to sign it", optionD: "Publicly denounce it always", correctOption: "B", explanation: "A member need not dissent publicly if the report rests on a reasonable basis they can accept.", orderIndex: 5 },
  { id: "cfa2-ethics-analysis-recommendations-q07", topicId: "cfa2-ethics-analysis-recommendations", text: "Using a quantitative model without understanding its assumptions most likely violates:", optionA: "V(A) Diligence and Reasonable Basis", optionB: "Fair Dealing", optionC: "Priority of Transactions", optionD: "Record Retention", correctOption: "A", explanation: "Relying on a model without grasping its inputs/limitations breaches the diligence/reasonable-basis requirement.", orderIndex: 6 },
  { id: "cfa2-ethics-analysis-recommendations-q08", topicId: "cfa2-ethics-analysis-recommendations", text: "Material changes to the investment process should be disclosed to clients:", optionA: "Only at year-end", optionB: "Promptly", optionC: "Never", optionD: "Only if asked", correctOption: "B", explanation: "V(B) requires prompt disclosure of material changes that could affect the investment process.", orderIndex: 7 },
  { id: "cfa2-ethics-analysis-recommendations-q09", topicId: "cfa2-ethics-analysis-recommendations", text: "When communicating a recommendation, a member should identify:", optionA: "Only the upside", optionB: "Key assumptions, limitations and risks", optionC: "Competitors' fees", optionD: "Other clients' positions", correctOption: "B", explanation: "Clients need the important assumptions, limitations, and risk factors to evaluate a recommendation.", orderIndex: 8 },
  { id: "cfa2-ethics-analysis-recommendations-q10", topicId: "cfa2-ethics-analysis-recommendations", text: "Maintaining records of the rationale for investment actions primarily supports:", optionA: "Marketing", optionB: "Demonstrating a reasonable basis and compliance", optionC: "Tax evasion", optionD: "Higher fees", correctOption: "B", explanation: "Records substantiate that analysis and actions had a reasonable basis, supporting V(A) and V(C).", orderIndex: 9 },
  { id: "cfa2-ethics-analysis-recommendations-q11", topicId: "cfa2-ethics-analysis-recommendations", text: "Presenting an opinion as if it were established fact violates:", optionA: "V(B) Communication with Clients", optionB: "Priority of Transactions", optionC: "Loyalty to Employer", optionD: "Knowledge of the Law", correctOption: "A", explanation: "V(B) requires clearly distinguishing fact from opinion in communications.", orderIndex: 10 },
  { id: "cfa2-ethics-analysis-recommendations-q12", topicId: "cfa2-ethics-analysis-recommendations", text: "The level of diligence required for a recommendation:", optionA: "Is the same for all decisions", optionB: "Varies with the nature and complexity of the analysis", optionC: "Is set by clients", optionD: "Is unnecessary for buys", correctOption: "B", explanation: "What constitutes a 'reasonable basis' depends on the complexity and significance of the decision.", orderIndex: 11 },

  // Corporate governance, ESG & stakeholders
  { id: "cfa2-corporate-issuers-governance-esg-q01", topicId: "cfa2-corporate-issuers-governance-esg", text: "The principal-agent problem in corporate governance arises between:", optionA: "Customers and suppliers", optionB: "Shareholders (principals) and managers (agents)", optionC: "Regulators and auditors", optionD: "Employees and customers", correctOption: "B", explanation: "Managers (agents) may pursue their own interests over those of shareholders (principals), the core agency conflict.", orderIndex: 0 },
  { id: "cfa2-corporate-issuers-governance-esg-q02", topicId: "cfa2-corporate-issuers-governance-esg", text: "A strong board is characterized by:", optionA: "A combined chair/CEO with no committees", optionB: "Independent, diverse directors and key committees", optionC: "Directors appointed by management only", optionD: "No audit committee", correctOption: "B", explanation: "Independence, diversity, and functioning audit/remuneration/nomination committees signal strong governance.", orderIndex: 1 },
  { id: "cfa2-corporate-issuers-governance-esg-q03", topicId: "cfa2-corporate-issuers-governance-esg", text: "A poison pill (takeover defense) generally:", optionA: "Increases management accountability", optionB: "Entrenches management and can reduce accountability", optionC: "Has no governance effect", optionD: "Guarantees a higher takeover price", correctOption: "B", explanation: "Takeover defenses can insulate management from the market for corporate control, weakening accountability.", orderIndex: 2 },
  { id: "cfa2-corporate-issuers-governance-esg-q04", topicId: "cfa2-corporate-issuers-governance-esg", text: "Negative (exclusionary) screening in ESG investing means:", optionA: "Selecting the best ESG performers", optionB: "Excluding certain sectors or companies on ESG grounds", optionC: "Ignoring ESG", optionD: "Buying only bonds", correctOption: "B", explanation: "Negative screening removes objectionable industries/companies (e.g., tobacco, weapons) from the universe.", orderIndex: 3 },
  { id: "cfa2-corporate-issuers-governance-esg-q05", topicId: "cfa2-corporate-issuers-governance-esg", text: "ESG 'materiality' refers to focusing on factors that:", optionA: "Are always environmental", optionB: "Affect a company's cash flows or risk", optionC: "Are immaterial to value", optionD: "Only matter to regulators", correctOption: "B", explanation: "Material ESG factors are those with a plausible impact on financial performance and risk.", orderIndex: 4 },
  { id: "cfa2-corporate-issuers-governance-esg-q06", topicId: "cfa2-corporate-issuers-governance-esg", text: "A shareholder-vs-creditor conflict can arise when a firm:", optionA: "Pays down all debt", optionB: "Takes on riskier projects that benefit shareholders at creditors' expense (risk-shifting)", optionC: "Issues equity", optionD: "Holds cash", correctOption: "B", explanation: "Risk-shifting transfers value from creditors to shareholders by increasing asset risk after debt is issued.", orderIndex: 5 },
  { id: "cfa2-corporate-issuers-governance-esg-q07", topicId: "cfa2-corporate-issuers-governance-esg", text: "Active ownership (engagement) as an ESG approach involves:", optionA: "Selling all holdings", optionB: "Using voting and dialogue to influence company practices", optionC: "Ignoring management", optionD: "Avoiding equities", correctOption: "B", explanation: "Engagement uses proxy voting and direct dialogue to push companies toward better ESG practices.", orderIndex: 6 },
  { id: "cfa2-corporate-issuers-governance-esg-q08", topicId: "cfa2-corporate-issuers-governance-esg", text: "Strong corporate governance tends to:", optionA: "Raise the cost of capital", optionB: "Lower risk and the cost of capital", optionC: "Have no effect on value", optionD: "Guarantee higher earnings", correctOption: "B", explanation: "Better governance reduces agency and operational risk, which can lower the firm's cost of capital.", orderIndex: 7 },
  { id: "cfa2-corporate-issuers-governance-esg-q09", topicId: "cfa2-corporate-issuers-governance-esg", text: "'Greenwashing' refers to:", optionA: "Genuine emissions cuts", optionB: "Overstating or misrepresenting ESG credentials", optionC: "A type of bond", optionD: "An accounting method", correctOption: "B", explanation: "Greenwashing is misleading promotion of a company/product as more sustainable than it is.", orderIndex: 8 },
  { id: "cfa2-corporate-issuers-governance-esg-q10", topicId: "cfa2-corporate-issuers-governance-esg", text: "A dual-class share structure typically:", optionA: "Gives all shareholders equal votes", optionB: "Concentrates voting control with insiders despite less economic ownership", optionC: "Eliminates voting", optionD: "Is required by law", correctOption: "B", explanation: "Dual-class shares grant insiders disproportionate voting power relative to their cash-flow stake, a governance concern.", orderIndex: 9 },
  { id: "cfa2-corporate-issuers-governance-esg-q11", topicId: "cfa2-corporate-issuers-governance-esg", text: "ESG integration into valuation most directly affects:", optionA: "Only marketing", optionB: "Cash-flow forecasts and/or the discount rate", optionC: "Share count", optionD: "The dividend payment date", correctOption: "B", explanation: "Integrating material ESG factors adjusts projected cash flows and the required return used in valuation.", orderIndex: 10 },
  { id: "cfa2-corporate-issuers-governance-esg-q12", topicId: "cfa2-corporate-issuers-governance-esg", text: "Stakeholder management seeks to balance the interests of:", optionA: "Shareholders only", optionB: "Shareholders, board, management, employees, creditors, customers, suppliers and regulators", optionC: "Regulators only", optionD: "Competitors", correctOption: "B", explanation: "Governance addresses the full set of stakeholders whose interests intersect with the firm.", orderIndex: 11 },

  // Market risk & VaR
  { id: "cfa2-portfolio-management-market-risk-var-q01", topicId: "cfa2-portfolio-management-market-risk-var", text: "A '5% one-day VaR of $1 million' means there is a 5% probability the portfolio will lose:", optionA: "Exactly $1 million in a day", optionB: "At least $1 million in a day", optionC: "At most $1 million ever", optionD: "Nothing", correctOption: "B", explanation: "VaR is the minimum loss at the given tail probability: a 5% chance of losing $1m or more in a day.", orderIndex: 0 },
  { id: "cfa2-portfolio-management-market-risk-var-q02", topicId: "cfa2-portfolio-management-market-risk-var", text: "The parametric (variance-covariance) VaR method assumes returns are:", optionA: "Lognormal with fat tails", optionB: "Normally distributed", optionC: "Uniform", optionD: "Non-stationary", correctOption: "B", explanation: "Parametric VaR assumes (multivariate) normal returns, which understates risk for options and fat-tailed assets.", orderIndex: 1 },
  { id: "cfa2-portfolio-management-market-risk-var-q03", topicId: "cfa2-portfolio-management-market-risk-var", text: "Historical simulation VaR is computed by:", optionA: "Assuming a normal distribution", optionB: "Applying the distribution of actual past returns", optionC: "Running random simulations", optionD: "Using duration only", correctOption: "B", explanation: "Historical simulation reuses the empirical distribution of past returns, requiring no distributional assumption.", orderIndex: 2 },
  { id: "cfa2-portfolio-management-market-risk-var-q04", topicId: "cfa2-portfolio-management-market-risk-var", text: "Monte Carlo VaR is particularly useful for portfolios with:", optionA: "Only linear instruments", optionB: "Non-linear payoffs such as options", optionC: "No risk", optionD: "Constant returns", correctOption: "B", explanation: "Monte Carlo can model complex, non-linear payoffs by simulating many scenarios, at higher computational cost.", orderIndex: 3 },
  { id: "cfa2-portfolio-management-market-risk-var-q05", topicId: "cfa2-portfolio-management-market-risk-var", text: "Conditional VaR (expected shortfall) measures the:", optionA: "Most likely gain", optionB: "Average loss given that the loss exceeds the VaR threshold", optionC: "Minimum loss", optionD: "Standard deviation", correctOption: "B", explanation: "Expected shortfall captures the average severity of losses beyond VaR, addressing VaR's tail blind spot.", orderIndex: 4 },
  { id: "cfa2-portfolio-management-market-risk-var-q06", topicId: "cfa2-portfolio-management-market-risk-var", text: "A key limitation of VaR is that it:", optionA: "Describes losses beyond the threshold", optionB: "Says nothing about the magnitude of losses beyond the VaR level", optionC: "Cannot be computed", optionD: "Requires no assumptions", correctOption: "B", explanation: "VaR ignores how bad losses get past the cutoff — a major reason expected shortfall is used alongside it.", orderIndex: 5 },
  { id: "cfa2-portfolio-management-market-risk-var-q07", topicId: "cfa2-portfolio-management-market-risk-var", text: "Stress testing and scenario analysis complement VaR by:", optionA: "Assuming normal markets", optionB: "Examining extreme or hypothetical adverse conditions", optionC: "Lowering risk estimates", optionD: "Ignoring tail events", correctOption: "B", explanation: "Stress tests probe severe scenarios that statistical VaR, based on normal periods, may miss.", orderIndex: 6 },
  { id: "cfa2-portfolio-management-market-risk-var-q08", topicId: "cfa2-portfolio-management-market-risk-var", text: "Increasing the confidence level from 95% to 99% will, all else equal, make VaR:", optionA: "Smaller", optionB: "Larger", optionC: "Unchanged", optionD: "Negative", correctOption: "B", explanation: "A higher confidence level moves further into the tail, increasing the reported VaR loss.", orderIndex: 7 },
  { id: "cfa2-portfolio-management-market-risk-var-q09", topicId: "cfa2-portfolio-management-market-risk-var", text: "A drawback of historical simulation is that it:", optionA: "Requires a normality assumption", optionB: "Assumes the past distribution will repeat (backward-looking)", optionC: "Cannot use real data", optionD: "Ignores history", correctOption: "B", explanation: "Historical simulation depends entirely on the chosen sample and may miss risks absent from that history.", orderIndex: 8 },
  { id: "cfa2-portfolio-management-market-risk-var-q10", topicId: "cfa2-portfolio-management-market-risk-var", text: "Position limits, risk budgets and stop-loss rules are examples of:", optionA: "Return objectives", optionB: "Market-risk management constraints", optionC: "VaR methods", optionD: "Performance benchmarks", correctOption: "B", explanation: "These are governance tools that constrain and manage market-risk exposures.", orderIndex: 9 },
  { id: "cfa2-portfolio-management-market-risk-var-q11", topicId: "cfa2-portfolio-management-market-risk-var", text: "For an options portfolio, parametric VaR is least reliable because options have:", optionA: "Linear payoffs", optionB: "Non-linear (convex) payoffs not captured by a normal/linear approach", optionC: "No risk", optionD: "Constant delta", correctOption: "B", explanation: "Option convexity (gamma) violates the linear/normal assumptions of parametric VaR, distorting the estimate.", orderIndex: 10 },
  { id: "cfa2-portfolio-management-market-risk-var-q12", topicId: "cfa2-portfolio-management-market-risk-var", text: "A criticism that VaR can be 'gamed' refers to managers:", optionA: "Reducing genuine risk", optionB: "Structuring positions to lower reported VaR while keeping tail risk", optionC: "Disclosing all risks", optionD: "Using expected shortfall", correctOption: "B", explanation: "Because VaR ignores the tail, exposures can be arranged to report a low VaR while retaining large tail risk.", orderIndex: 11 },

  // Machine learning & big data
  { id: "cfa2-quantitative-methods-machine-learning-q01", topicId: "cfa2-quantitative-methods-machine-learning", text: "Supervised learning differs from unsupervised learning in that it uses:", optionA: "No data", optionB: "Labeled data (known target outputs)", optionC: "Only text", optionD: "Random outputs", correctOption: "B", explanation: "Supervised learning trains on labeled examples to predict a target; unsupervised learning finds structure without labels.", orderIndex: 0 },
  { id: "cfa2-quantitative-methods-machine-learning-q02", topicId: "cfa2-quantitative-methods-machine-learning", text: "K-means clustering is an example of:", optionA: "Supervised regression", optionB: "Unsupervised learning", optionC: "Reinforcement learning", optionD: "A trend model", correctOption: "B", explanation: "Clustering groups unlabeled observations by similarity — an unsupervised technique.", orderIndex: 1 },
  { id: "cfa2-quantitative-methods-machine-learning-q03", topicId: "cfa2-quantitative-methods-machine-learning", text: "Overfitting is characterized by a model that has:", optionA: "High bias, low variance", optionB: "Low bias but high variance (fits noise, fails out of sample)", optionC: "No errors ever", optionD: "Constant accuracy", correctOption: "B", explanation: "Overfit models capture noise, performing well in-sample but poorly on new data (high variance).", orderIndex: 2 },
  { id: "cfa2-quantitative-methods-machine-learning-q04", topicId: "cfa2-quantitative-methods-machine-learning", text: "LASSO and ridge regression help prevent overfitting through:", optionA: "Adding more features", optionB: "Regularization (penalizing coefficient size)", optionC: "Removing the target", optionD: "Increasing variance", correctOption: "B", explanation: "Penalized regressions shrink coefficients, reducing model complexity and overfitting.", orderIndex: 3 },
  { id: "cfa2-quantitative-methods-machine-learning-q05", topicId: "cfa2-quantitative-methods-machine-learning", text: "Principal components analysis (PCA) is primarily used for:", optionA: "Labeling data", optionB: "Dimension reduction", optionC: "Reinforcement learning", optionD: "Forecasting interest rates", correctOption: "B", explanation: "PCA reduces many correlated features into a few uncorrelated components capturing most variance.", orderIndex: 4 },
  { id: "cfa2-quantitative-methods-machine-learning-q06", topicId: "cfa2-quantitative-methods-machine-learning", text: "Cross-validation is used to:", optionA: "Increase overfitting", optionB: "Assess out-of-sample performance and tune the model", optionC: "Clean data only", optionD: "Label data", correctOption: "B", explanation: "Cross-validation partitions data to estimate generalization error and guide hyperparameter tuning.", orderIndex: 5 },
  { id: "cfa2-quantitative-methods-machine-learning-q07", topicId: "cfa2-quantitative-methods-machine-learning", text: "In the bias-variance tradeoff, an overly simple model tends to:", optionA: "Overfit", optionB: "Underfit (high bias)", optionC: "Have zero error", optionD: "Generalize perfectly", correctOption: "B", explanation: "Too-simple models underfit, exhibiting high bias and missing real patterns.", orderIndex: 6 },
  { id: "cfa2-quantitative-methods-machine-learning-q08", topicId: "cfa2-quantitative-methods-machine-learning", text: "The first step of a typical data-analytics project is:", optionA: "Model tuning", optionB: "Conceptualization of the problem", optionC: "Reporting results", optionD: "Deployment", correctOption: "B", explanation: "Projects start by conceptualizing the task before collecting, preparing, exploring, and modeling the data.", orderIndex: 7 },
  { id: "cfa2-quantitative-methods-machine-learning-q09", topicId: "cfa2-quantitative-methods-machine-learning", text: "In text analytics, converting words to a normalized base form is called:", optionA: "Tokenization", optionB: "Stemming/lemmatization", optionC: "Clustering", optionD: "Regularization", correctOption: "B", explanation: "Stemming/lemmatization reduces words to a root form; tokenization splits text into tokens.", orderIndex: 8 },
  { id: "cfa2-quantitative-methods-machine-learning-q10", topicId: "cfa2-quantitative-methods-machine-learning", text: "The 'three Vs' commonly used to describe big data are volume, velocity and:", optionA: "Value", optionB: "Variety", optionC: "Volatility", optionD: "Validity", correctOption: "B", explanation: "Big data is classically described by volume, velocity, and variety (with veracity often added).", orderIndex: 9 },
  { id: "cfa2-quantitative-methods-machine-learning-q11", topicId: "cfa2-quantitative-methods-machine-learning", text: "A random forest is an ensemble of:", optionA: "Linear regressions", optionB: "Decision trees", optionC: "Clusters", optionD: "Principal components", correctOption: "B", explanation: "Random forests aggregate many decision trees to improve accuracy and reduce overfitting.", orderIndex: 10 },
  { id: "cfa2-quantitative-methods-machine-learning-q12", topicId: "cfa2-quantitative-methods-machine-learning", text: "Data wrangling (preparation) in a project mainly involves:", optionA: "Cleaning and organizing raw data (handling outliers/missing values)", optionB: "Writing the final report", optionC: "Choosing the confidence level", optionD: "Deploying the model", correctOption: "A", explanation: "Wrangling cleans, transforms and structures raw data so it is usable for exploration and modeling.", orderIndex: 11 },

  // Multistage DDM
  { id: "cfa2-equity-multistage-ddm-q01", topicId: "cfa2-equity-multistage-ddm", text: "The Gordon growth model is appropriate only for firms with:", optionA: "Volatile, unpredictable growth", optionB: "Stable growth below the required return", optionC: "No dividends", optionD: "Negative earnings", correctOption: "B", explanation: "Gordon assumes a single constant growth rate g < r indefinitely — suitable for mature, stable dividend payers.", orderIndex: 0 },
  { id: "cfa2-equity-multistage-ddm-q02", topicId: "cfa2-equity-multistage-ddm", text: "In a two-stage DDM, the terminal value is usually computed using:", optionA: "The high-growth rate", optionB: "The Gordon model with the long-run (stable) growth rate", optionC: "Book value", optionD: "The risk-free rate", correctOption: "B", explanation: "After the explicit high-growth phase, the terminal value applies Gordon growth at the sustainable long-run rate.", orderIndex: 1 },
  { id: "cfa2-equity-multistage-ddm-q03", topicId: "cfa2-equity-multistage-ddm", text: "The H-model approximates a growth rate that:", optionA: "Jumps suddenly", optionB: "Declines linearly from a high to a long-run rate", optionC: "Is constant", optionD: "Rises over time", correctOption: "B", explanation: "The H-model assumes growth fades linearly over 2H years from the initial high rate to the stable rate.", orderIndex: 2 },
  { id: "cfa2-equity-multistage-ddm-q04", topicId: "cfa2-equity-multistage-ddm", text: "Sustainable growth rate equals:", optionA: "ROE × retention ratio", optionB: "Dividend yield × payout", optionC: "r − g", optionD: "ROE × payout ratio", correctOption: "A", explanation: "g = b × ROE, where b is the earnings retention ratio (1 − payout).", orderIndex: 3 },
  { id: "cfa2-equity-multistage-ddm-q05", topicId: "cfa2-equity-multistage-ddm", text: "In most multistage models, the largest component of value is typically the:", optionA: "First dividend", optionB: "Terminal value", optionC: "Risk-free rate", optionD: "Book value", correctOption: "B", explanation: "The terminal (continuing) value usually dominates, so models are highly sensitive to its r and g inputs.", orderIndex: 4 },
  { id: "cfa2-equity-multistage-ddm-q06", topicId: "cfa2-equity-multistage-ddm", text: "A three-stage DDM is most suitable for a:", optionA: "Mature utility", optionB: "Young firm moving through growth, transition and maturity", optionC: "Firm in liquidation", optionD: "Risk-free bond", correctOption: "B", explanation: "Three-stage models capture an initial high-growth phase, a transition, and a stable maturity phase.", orderIndex: 5 },
  { id: "cfa2-equity-multistage-ddm-q07", topicId: "cfa2-equity-multistage-ddm", text: "If the long-run growth rate assumption rises (toward r), the estimated value will:", optionA: "Fall sharply", optionB: "Rise sharply", optionC: "Stay constant", optionD: "Become zero", correctOption: "B", explanation: "As g_L approaches r, the terminal value (and thus the estimate) increases sharply — a key sensitivity.", orderIndex: 6 },
  { id: "cfa2-equity-multistage-ddm-q08", topicId: "cfa2-equity-multistage-ddm", text: "DDMs are least appropriate for firms that:", optionA: "Pay stable dividends", optionB: "Pay no dividends and have no clear dividend policy", optionC: "Are mature", optionD: "Have positive ROE", correctOption: "B", explanation: "Without dividends, FCFE or residual-income models are preferable to a DDM.", orderIndex: 7 },
  { id: "cfa2-equity-multistage-ddm-q09", topicId: "cfa2-equity-multistage-ddm", text: "A long-run growth rate used in a terminal value should generally not exceed the:", optionA: "Dividend yield", optionB: "Long-run growth rate of the overall economy", optionC: "Risk-free rate", optionD: "Inflation rate only", correctOption: "B", explanation: "A perpetual growth rate above economy-wide growth is implausible, so g_L is capped near nominal GDP growth.", orderIndex: 8 },
  { id: "cfa2-equity-multistage-ddm-q10", topicId: "cfa2-equity-multistage-ddm", text: "In the H-model, a larger H (longer fade period) will, all else equal:", optionA: "Lower the value", optionB: "Raise the value (more years of above-normal growth)", optionC: "Not affect value", optionD: "Equal the Gordon model", correctOption: "B", explanation: "A longer high-growth fade adds more excess growth, increasing the estimated value.", orderIndex: 9 },
  { id: "cfa2-equity-multistage-ddm-q11", topicId: "cfa2-equity-multistage-ddm", text: "The required return r in a DDM is most commonly estimated using:", optionA: "The CAPM", optionB: "The dividend yield", optionC: "The payout ratio", optionD: "Book value", correctOption: "A", explanation: "CAPM (or a build-up/multifactor model) provides the cost of equity used to discount dividends.", orderIndex: 10 },
  { id: "cfa2-equity-multistage-ddm-q12", topicId: "cfa2-equity-multistage-ddm", text: "A two-stage model discounts the terminal value back to the present using:", optionA: "The terminal growth rate", optionB: "The required return over the number of explicit-forecast years", optionC: "The risk-free rate", optionD: "No discounting", correctOption: "B", explanation: "The TV computed at year n is discounted to today at (1+r)^n, like any future cash flow.", orderIndex: 11 },

  // Private company valuation
  { id: "cfa2-equity-private-company-q01", topicId: "cfa2-equity-private-company", text: "The three broad approaches to private company valuation are income, market, and:", optionA: "Arbitrage", optionB: "Asset-based", optionC: "Parity", optionD: "Duration", correctOption: "B", explanation: "Private valuation uses income, market (guideline), and asset-based approaches.", orderIndex: 0 },
  { id: "cfa2-equity-private-company-q02", topicId: "cfa2-equity-private-company", text: "A discount for lack of marketability (DLOM) reflects that private interests:", optionA: "Pay higher dividends", optionB: "Cannot be sold quickly without a price concession", optionC: "Have no risk", optionD: "Are tax-free", correctOption: "B", explanation: "Illiquidity of private equity warrants a DLOM relative to freely traded shares.", orderIndex: 1 },
  { id: "cfa2-equity-private-company-q03", topicId: "cfa2-equity-private-company", text: "Valuing a controlling stake using guideline public (minority) prices usually requires adding a:", optionA: "Control premium", optionB: "Liquidity discount", optionC: "Size discount", optionD: "Tax penalty", correctOption: "A", explanation: "Public minority prices lack control, so a control premium is added for a controlling interest.", orderIndex: 2 },
  { id: "cfa2-equity-private-company-q04", topicId: "cfa2-equity-private-company", text: "Normalizing a private firm's earnings involves adjusting for:", optionA: "Market beta", optionB: "Owner compensation, related-party transactions and one-offs", optionC: "The risk-free rate", optionD: "Index weights", correctOption: "B", explanation: "Normalization removes non-market owner pay, related-party items and non-recurring effects to show true earnings power.", orderIndex: 3 },
  { id: "cfa2-equity-private-company-q05", topicId: "cfa2-equity-private-company", text: "The excess earnings method is a form of which approach?", optionA: "Market", optionB: "Income", optionC: "Asset-based", optionD: "Option-pricing", correctOption: "B", explanation: "Excess earnings values intangible value from earnings above a fair return on tangible assets — an income method.", orderIndex: 4 },
  { id: "cfa2-equity-private-company-q06", topicId: "cfa2-equity-private-company", text: "Discount rates for private companies are generally ____ than for comparable public firms.", optionA: "Lower", optionB: "Higher", optionC: "Identical", optionD: "Zero", correctOption: "B", explanation: "Illiquidity, smaller size and company-specific risk raise the required return for private firms.", orderIndex: 5 },
  { id: "cfa2-equity-private-company-q07", topicId: "cfa2-equity-private-company", text: "The guideline transactions method derives multiples from:", optionA: "The firm's own dividends", optionB: "Prices paid in acquisitions of comparable companies", optionC: "The risk-free rate", optionD: "Replacement cost", correctOption: "B", explanation: "It uses valuation multiples observed in M&A transactions of similar businesses.", orderIndex: 6 },
  { id: "cfa2-equity-private-company-q08", topicId: "cfa2-equity-private-company", text: "The appropriate standard (definition) of value depends mainly on the:", optionA: "Purpose of the valuation", optionB: "Risk-free rate", optionC: "Auditor", optionD: "Share price", correctOption: "A", explanation: "Tax, litigation, M&A or financial-reporting purposes dictate which value standard (e.g., fair market value) applies.", orderIndex: 7 },
  { id: "cfa2-equity-private-company-q09", topicId: "cfa2-equity-private-company", text: "A build-up or expanded-CAPM discount rate for a small private firm typically adds:", optionA: "A size premium and company-specific premium", optionB: "A liquidity discount to returns", optionC: "Nothing extra", optionD: "A negative premium", correctOption: "A", explanation: "Private/small-firm discount rates layer size and specific-risk premia onto the base CAPM return.", orderIndex: 8 },
  { id: "cfa2-equity-private-company-q10", topicId: "cfa2-equity-private-company", text: "The asset-based approach is generally least appropriate for:", optionA: "A holding company of liquid assets", optionB: "A going concern with significant intangible value", optionC: "A firm in liquidation", optionD: "A real-estate holding entity", correctOption: "B", explanation: "Asset-based NAV misses going-concern/intangible value, so it suits asset-holding or liquidation cases, not operating firms.", orderIndex: 9 },
  { id: "cfa2-equity-private-company-q11", topicId: "cfa2-equity-private-company", text: "A discount for lack of control (DLOC) applies to:", optionA: "Controlling stakes", optionB: "Minority interests", optionC: "Public indices", optionD: "Risk-free bonds", correctOption: "B", explanation: "Minority holders can't direct the firm, so a DLOC reduces the per-share value of non-controlling interests.", orderIndex: 10 },
  { id: "cfa2-equity-private-company-q12", topicId: "cfa2-equity-private-company", text: "Capitalized cash flow valuation is most appropriate when a private firm has:", optionA: "Highly erratic cash flows", optionB: "Stable, predictable growth", optionC: "No cash flows", optionD: "Only intangible assets", correctOption: "B", explanation: "The capitalized-cash-flow (single-period) method fits firms with steady, predictable growth, akin to Gordon.", orderIndex: 11 },

  // Term structure & interest-rate models
  { id: "cfa2-fixed-income-term-structure-q01", topicId: "cfa2-fixed-income-term-structure", text: "The pure (unbiased) expectations theory holds that forward rates equal:", optionA: "Expected future spot rates", optionB: "The risk-free rate plus a fixed premium", optionC: "Current spot rates", optionD: "Zero", correctOption: "A", explanation: "Under pure expectations, forwards are unbiased forecasts of future spot rates with no risk premium.", orderIndex: 0 },
  { id: "cfa2-fixed-income-term-structure-q02", topicId: "cfa2-fixed-income-term-structure", text: "The liquidity preference theory adds to expectations a:", optionA: "Negative term premium", optionB: "Positive premium for longer maturities", optionC: "Tax adjustment", optionD: "Currency premium", correctOption: "B", explanation: "Investors require a liquidity/term premium to hold longer maturities, biasing forwards above expected spots.", orderIndex: 1 },
  { id: "cfa2-fixed-income-term-structure-q03", topicId: "cfa2-fixed-income-term-structure", text: "Market segmentation theory explains the curve by:", optionA: "A single global rate", optionB: "Supply and demand within distinct maturity segments", optionC: "Only inflation", optionD: "Equity returns", correctOption: "B", explanation: "Segmentation holds that distinct investor clienteles dominate maturity buckets, shaping the curve.", orderIndex: 2 },
  { id: "cfa2-fixed-income-term-structure-q04", topicId: "cfa2-fixed-income-term-structure", text: "Empirically, most of the variation in yield-curve movements is explained by changes in the:", optionA: "Level (parallel shifts)", optionB: "Curvature", optionC: "Convexity", optionD: "Coupon", correctOption: "A", explanation: "The first principal component — the level (parallel) shift — accounts for the bulk of curve variance.", orderIndex: 3 },
  { id: "cfa2-fixed-income-term-structure-q05", topicId: "cfa2-fixed-income-term-structure", text: "Key rate durations are useful because they capture exposure to:", optionA: "Only parallel shifts", optionB: "Shifts at specific maturities (non-parallel moves)", optionC: "Credit spreads", optionD: "Currency moves", correctOption: "B", explanation: "Key rate (partial) durations measure sensitivity to changes at individual points on the curve, unlike a single effective duration.", orderIndex: 4 },
  { id: "cfa2-fixed-income-term-structure-q06", topicId: "cfa2-fixed-income-term-structure", text: "An arbitrage-free interest-rate model (e.g., Ho-Lee) is calibrated to:", optionA: "Economic equilibrium assumptions only", optionB: "Fit the current observed yield curve exactly", optionC: "Historical averages", optionD: "Equity volatility", correctOption: "B", explanation: "Arbitrage-free models are fit to today's curve so they price on-the-run bonds without arbitrage.", orderIndex: 5 },
  { id: "cfa2-fixed-income-term-structure-q07", topicId: "cfa2-fixed-income-term-structure", text: "Equilibrium term-structure models (e.g., CIR, Vasicek) start from:", optionA: "The current curve", optionB: "Assumptions about economic factors and the short rate", optionC: "Option prices", optionD: "Credit ratings", correctOption: "B", explanation: "Equilibrium models derive the curve from assumptions about the short-rate process and economic drivers.", orderIndex: 6 },
  { id: "cfa2-fixed-income-term-structure-q08", topicId: "cfa2-fixed-income-term-structure", text: "The swap spread is the difference between the swap rate and the:", optionA: "Coupon rate", optionB: "Government bond yield of the same maturity", optionC: "Dividend yield", optionD: "Risk-free real rate", correctOption: "B", explanation: "The swap spread (swap rate minus matched-maturity government yield) reflects bank credit/liquidity conditions.", orderIndex: 7 },
  { id: "cfa2-fixed-income-term-structure-q09", topicId: "cfa2-fixed-income-term-structure", text: "Under the preferred-habitat theory, investors leave their preferred maturity only if:", optionA: "Forced by regulators", optionB: "Compensated by a sufficient premium", optionC: "Rates are zero", optionD: "Never", correctOption: "B", explanation: "Preferred-habitat extends segmentation: investors will shift maturities for adequate extra yield.", orderIndex: 8 },
  { id: "cfa2-fixed-income-term-structure-q10", topicId: "cfa2-fixed-income-term-structure", text: "A 'steepening' of the yield curve is a change primarily in its:", optionA: "Level", optionB: "Slope", optionC: "Curvature", optionD: "Credit spread", correctOption: "B", explanation: "Steepening/flattening describes changes in the slope (the gap between long and short rates).", orderIndex: 9 },
  { id: "cfa2-fixed-income-term-structure-q11", topicId: "cfa2-fixed-income-term-structure", text: "Arbitrage-free models are particularly used to value:", optionA: "Risk-free zero-coupon bonds only", optionB: "Bonds with embedded options (on an interest-rate tree)", optionC: "Equities", optionD: "Commodities", correctOption: "B", explanation: "Calibrated arbitrage-free trees value callable/putable bonds via backward induction.", orderIndex: 10 },
  { id: "cfa2-fixed-income-term-structure-q12", topicId: "cfa2-fixed-income-term-structure", text: "If the pure expectations theory holds and the curve is upward sloping, the market expects future short rates to:", optionA: "Fall", optionB: "Rise", optionC: "Stay flat", optionD: "Be negative", correctOption: "B", explanation: "An upward-sloping curve under pure expectations implies expected increases in future short rates.", orderIndex: 11 },

  // Credit default swaps
  { id: "cfa2-fixed-income-cds-q01", topicId: "cfa2-fixed-income-cds", text: "In a CDS, the protection buyer:", optionA: "Receives a premium and pays on default", optionB: "Pays a periodic premium and is compensated on a credit event", optionC: "Owns the reference bond always", optionD: "Sets the recovery rate", correctOption: "B", explanation: "The buyer pays the CDS spread and receives a payout if the reference entity has a credit event.", orderIndex: 0 },
  { id: "cfa2-fixed-income-cds-q02", topicId: "cfa2-fixed-income-cds", text: "A CDS payout on default is approximately notional times:", optionA: "The recovery rate", optionB: "(1 − recovery rate)", optionC: "The coupon", optionD: "Duration", correctOption: "B", explanation: "The protection payment compensates for loss given default = notional × (1 − recovery).", orderIndex: 1 },
  { id: "cfa2-fixed-income-cds-q03", topicId: "cfa2-fixed-income-cds", text: "Buying CDS protection is economically similar to:", optionA: "Going long the credit", optionB: "Going short the credit (shorting the bond)", optionC: "Buying equity", optionD: "Lending risk-free", correctOption: "B", explanation: "Protection buyers profit when credit deteriorates, equivalent to a short credit position.", orderIndex: 2 },
  { id: "cfa2-fixed-income-cds-q04", topicId: "cfa2-fixed-income-cds", text: "Which is a standard CDS credit event?", optionA: "A dividend increase", optionB: "Bankruptcy, failure to pay, or restructuring", optionC: "A stock split", optionD: "A rating upgrade", correctOption: "B", explanation: "Defined credit events typically include bankruptcy, failure to pay, and (sometimes) restructuring.", orderIndex: 3 },
  { id: "cfa2-fixed-income-cds-q05", topicId: "cfa2-fixed-income-cds", text: "The CDS upfront payment is approximately:", optionA: "(CDS spread − coupon) × duration", optionB: "Notional × coupon", optionC: "Recovery × notional", optionD: "Zero always", correctOption: "A", explanation: "Because CDS trade with standard coupons, the spread/coupon difference is settled upfront, scaled by duration.", orderIndex: 4 },
  { id: "cfa2-fixed-income-cds-q06", topicId: "cfa2-fixed-income-cds", text: "A single-name CDS references:", optionA: "A basket of issuers", optionB: "One specific issuer", optionC: "An equity index", optionD: "A currency", correctOption: "B", explanation: "Single-name CDS cover one reference entity; index CDS (CDX/iTraxx) cover a basket.", orderIndex: 5 },
  { id: "cfa2-fixed-income-cds-q07", topicId: "cfa2-fixed-income-cds", text: "The CDS spread is approximately equal to:", optionA: "Hazard rate × (1 − recovery)", optionB: "The risk-free rate", optionC: "Duration × convexity", optionD: "The coupon rate", correctOption: "A", explanation: "Intuitively the spread compensates for expected loss ≈ default intensity × loss given default.", orderIndex: 6 },
  { id: "cfa2-fixed-income-cds-q08", topicId: "cfa2-fixed-income-cds", text: "As a reference entity's credit quality worsens, the value of a long-protection CDS position:", optionA: "Falls", optionB: "Rises", optionC: "Is unchanged", optionD: "Goes to zero", correctOption: "B", explanation: "Widening spreads increase the mark-to-market value to the protection buyer.", orderIndex: 7 },
  { id: "cfa2-fixed-income-cds-q09", topicId: "cfa2-fixed-income-cds", text: "Index CDS products such as CDX and iTraxx allow investors to:", optionA: "Trade a single bond", optionB: "Take diversified credit exposure across many names", optionC: "Buy equities", optionD: "Hedge currency only", correctOption: "B", explanation: "Index CDS give efficient long/short exposure to a basket of credits.", orderIndex: 8 },
  { id: "cfa2-fixed-income-cds-q10", topicId: "cfa2-fixed-income-cds", text: "The CDS-cash basis is the difference between the CDS spread and the:", optionA: "Coupon", optionB: "Cash bond's credit spread", optionC: "Risk-free rate", optionD: "Dividend yield", correctOption: "B", explanation: "The basis compares the CDS spread to the same issuer's cash-bond spread; deviations create relative-value trades.", orderIndex: 9 },
  { id: "cfa2-fixed-income-cds-q11", topicId: "cfa2-fixed-income-cds", text: "A bond investor worried about default can hedge by:", optionA: "Selling CDS protection", optionB: "Buying CDS protection on the issuer", optionC: "Buying more of the bond", optionD: "Shorting Treasuries", correctOption: "B", explanation: "Buying protection offsets the credit risk of the held bond.", orderIndex: 10 },
  { id: "cfa2-fixed-income-cds-q12", topicId: "cfa2-fixed-income-cds", text: "CDS enable 'synthetic' credit exposure because they let investors take a view:", optionA: "Only by owning the bond", optionB: "Without buying or shorting the underlying bond", optionC: "On equities only", optionD: "Risk-free", correctOption: "B", explanation: "Selling or buying protection creates long/short credit exposure without trading the cash bond.", orderIndex: 11 },

  // Forwards & futures pricing
  { id: "cfa2-derivatives-forwards-futures-q01", topicId: "cfa2-derivatives-forwards-futures", text: "Ignoring income and costs, the no-arbitrage forward price is:", optionA: "S₀ / (1 + r)^T", optionB: "S₀ × (1 + r)^T", optionC: "S₀ − r", optionD: "S₀ × r × T", correctOption: "B", explanation: "Cost-of-carry: F₀ = S₀(1 + r)^T compounds the spot at the risk-free rate to delivery.", orderIndex: 0 },
  { id: "cfa2-derivatives-forwards-futures-q02", topicId: "cfa2-derivatives-forwards-futures", text: "Carry benefits such as dividends or coupons ____ the forward price.", optionA: "Raise", optionB: "Lower", optionC: "Do not affect", optionD: "Double", correctOption: "B", explanation: "Income accruing to the asset reduces the cost of carry, lowering the forward price.", orderIndex: 1 },
  { id: "cfa2-derivatives-forwards-futures-q03", topicId: "cfa2-derivatives-forwards-futures", text: "Carry costs such as storage ____ the forward price.", optionA: "Lower", optionB: "Raise", optionC: "Do not affect", optionD: "Eliminate", correctOption: "B", explanation: "Storage and similar costs add to carry, increasing the forward price.", orderIndex: 2 },
  { id: "cfa2-derivatives-forwards-futures-q04", topicId: "cfa2-derivatives-forwards-futures", text: "At initiation, the value of a forward contract is:", optionA: "Equal to the spot", optionB: "Zero", optionC: "Equal to the forward price", optionD: "Negative", correctOption: "B", explanation: "The forward price is set so neither party pays at inception; the contract's value starts at zero.", orderIndex: 3 },
  { id: "cfa2-derivatives-forwards-futures-q05", topicId: "cfa2-derivatives-forwards-futures", text: "The main difference between futures and forwards is that futures are:", optionA: "Customized and OTC", optionB: "Standardized, exchange-traded and marked-to-market daily", optionC: "Free of margin", optionD: "Settled only at maturity", correctOption: "B", explanation: "Futures are standardized, cleared, and margined with daily settlement, reducing counterparty risk.", orderIndex: 4 },
  { id: "cfa2-derivatives-forwards-futures-q06", topicId: "cfa2-derivatives-forwards-futures", text: "'Contango' describes a market where futures prices are:", optionA: "Below spot", optionB: "Above spot", optionC: "Equal to spot", optionD: "Negative", correctOption: "B", explanation: "Contango: futures > spot, typical when carry costs dominate convenience yield.", orderIndex: 5 },
  { id: "cfa2-derivatives-forwards-futures-q07", topicId: "cfa2-derivatives-forwards-futures", text: "'Backwardation' occurs when futures prices are:", optionA: "Above spot", optionB: "Below spot", optionC: "Equal to spot", optionD: "Zero", correctOption: "B", explanation: "Backwardation: futures < spot, often due to a high convenience yield/benefits.", orderIndex: 6 },
  { id: "cfa2-derivatives-forwards-futures-q08", topicId: "cfa2-derivatives-forwards-futures", text: "The value of a forward before expiry is approximately:", optionA: "(F_t − F₀) discounted to today", optionB: "S₀ × r", optionC: "The coupon", optionD: "Always zero", correctOption: "A", explanation: "The forward's mark-to-market value is the PV of the difference between the current and contracted forward prices.", orderIndex: 7 },
  { id: "cfa2-derivatives-forwards-futures-q09", topicId: "cfa2-derivatives-forwards-futures", text: "A convenience yield on a commodity behaves like a:", optionA: "Carry cost (raises the forward)", optionB: "Carry benefit (lowers the forward)", optionC: "Tax", optionD: "Margin call", correctOption: "B", explanation: "The convenience yield is a benefit of holding the physical asset, reducing the forward price.", orderIndex: 8 },
  { id: "cfa2-derivatives-forwards-futures-q10", topicId: "cfa2-derivatives-forwards-futures", text: "Daily mark-to-market on futures introduces, relative to forwards:", optionA: "Counterparty risk", optionB: "Interim cash flows (margin variation) that can cause a small price difference", optionC: "No difference at all", optionD: "Higher credit risk", correctOption: "B", explanation: "When rates correlate with the asset, the timing of margin cash flows makes futures and forward prices differ slightly.", orderIndex: 9 },
  { id: "cfa2-derivatives-forwards-futures-q11", topicId: "cfa2-derivatives-forwards-futures", text: "If the observed forward price exceeds the no-arbitrage price, an arbitrageur would:", optionA: "Buy the forward and the asset", optionB: "Sell the forward and buy the underlying (cash-and-carry)", optionC: "Do nothing", optionD: "Short the underlying only", correctOption: "B", explanation: "An overpriced forward is sold while buying/holding the underlying — a cash-and-carry arbitrage.", orderIndex: 10 },
  { id: "cfa2-derivatives-forwards-futures-q12", topicId: "cfa2-derivatives-forwards-futures", text: "With continuous compounding, the forward price is:", optionA: "S₀ × e^(rT) adjusted for carry", optionB: "S₀ − rT", optionC: "S₀ / r", optionD: "S₀ × r", correctOption: "A", explanation: "Under continuous compounding, F₀ = S₀·e^((r − income + cost)T).", orderIndex: 11 },

  // Income taxes (deferred tax)
  { id: "cfa2-financial-reporting-income-taxes-q01", topicId: "cfa2-financial-reporting-income-taxes", text: "A deferred tax liability arises when taxable income is currently ____ accounting income.", optionA: "Greater than", optionB: "Less than", optionC: "Equal to", optionD: "Unrelated to", correctOption: "B", explanation: "When tax paid now is lower than book tax expense (e.g., accelerated tax depreciation), a DTL builds up.", orderIndex: 0 },
  { id: "cfa2-financial-reporting-income-taxes-q02", topicId: "cfa2-financial-reporting-income-taxes", text: "A temporary difference is one that:", optionA: "Never reverses", optionB: "Reverses in future periods, creating a DTA or DTL", optionC: "Affects only the effective tax rate", optionD: "Is a permanent exemption", correctOption: "B", explanation: "Temporary differences reverse over time and give rise to deferred tax assets/liabilities.", orderIndex: 1 },
  { id: "cfa2-financial-reporting-income-taxes-q03", topicId: "cfa2-financial-reporting-income-taxes", text: "Tax-exempt interest income is an example of a:", optionA: "Temporary difference", optionB: "Permanent difference", optionC: "Deferred tax asset", optionD: "Deferred tax liability", correctOption: "B", explanation: "Permanent differences (like tax-exempt income) never reverse and alter the effective tax rate, not deferred taxes.", orderIndex: 2 },
  { id: "cfa2-financial-reporting-income-taxes-q04", topicId: "cfa2-financial-reporting-income-taxes", text: "A net operating loss carryforward typically creates a:", optionA: "Deferred tax liability", optionB: "Deferred tax asset", optionC: "Permanent difference", optionD: "Goodwill", correctOption: "B", explanation: "Loss carryforwards can offset future taxable income, so they are recognized as deferred tax assets.", orderIndex: 3 },
  { id: "cfa2-financial-reporting-income-taxes-q05", topicId: "cfa2-financial-reporting-income-taxes", text: "Under US GAAP, a valuation allowance is recorded against a DTA when:", optionA: "Realization is more likely than not to fail", optionB: "The DTA will certainly be used", optionC: "There is a DTL", optionD: "Tax rates rise", correctOption: "A", explanation: "A valuation allowance reduces a DTA to the amount expected to be realized when realization is doubtful.", orderIndex: 4 },
  { id: "cfa2-financial-reporting-income-taxes-q06", topicId: "cfa2-financial-reporting-income-taxes", text: "Accelerated depreciation for tax versus straight-line for books initially produces a:", optionA: "Deferred tax asset", optionB: "Deferred tax liability", optionC: "Permanent difference", optionD: "No difference", correctOption: "B", explanation: "Higher early tax depreciation lowers current taxable income relative to book, creating a DTL that reverses later.", orderIndex: 5 },
  { id: "cfa2-financial-reporting-income-taxes-q07", topicId: "cfa2-financial-reporting-income-taxes", text: "A reduction in the statutory tax rate will, for a company with a net DTL:", optionA: "Increase the DTL", optionB: "Decrease the DTL (a one-time gain to tax expense)", optionC: "Have no effect", optionD: "Create a DTA", correctOption: "B", explanation: "Remeasuring a DTL at a lower rate reduces it, lowering income tax expense in the period of change.", orderIndex: 6 },
  { id: "cfa2-financial-reporting-income-taxes-q08", topicId: "cfa2-financial-reporting-income-taxes", text: "Income tax expense equals taxes payable plus:", optionA: "ΔDTL − ΔDTA", optionB: "ΔDTA − ΔDTL", optionC: "Dividends", optionD: "Depreciation", correctOption: "A", explanation: "Tax expense = current taxes payable + the change in deferred tax liabilities − the change in deferred tax assets.", orderIndex: 7 },
  { id: "cfa2-financial-reporting-income-taxes-q09", topicId: "cfa2-financial-reporting-income-taxes", text: "For analysis, a DTL expected to keep growing and never reverse is often treated as:", optionA: "Debt", optionB: "Equity", optionC: "A current asset", optionD: "Revenue", correctOption: "B", explanation: "If a DTL is not expected to reverse, analysts may reclassify it toward equity rather than a liability.", orderIndex: 8 },
  { id: "cfa2-financial-reporting-income-taxes-q10", topicId: "cfa2-financial-reporting-income-taxes", text: "Permanent differences affect a company's:", optionA: "Deferred tax balances", optionB: "Effective tax rate", optionC: "Revenue recognition", optionD: "Inventory method", correctOption: "B", explanation: "Because they never reverse, permanent differences change the effective tax rate, not deferred taxes.", orderIndex: 9 },
  { id: "cfa2-financial-reporting-income-taxes-q11", topicId: "cfa2-financial-reporting-income-taxes", text: "A warranty expense accrued for books but deductible only when paid creates a:", optionA: "Deferred tax liability", optionB: "Deferred tax asset", optionC: "Permanent difference", optionD: "Goodwill", correctOption: "B", explanation: "Book expense recognized before the tax deduction means more tax is paid now, creating a DTA that reverses when paid.", orderIndex: 10 },
  { id: "cfa2-financial-reporting-income-taxes-q12", topicId: "cfa2-financial-reporting-income-taxes", text: "Deferred tax assets and liabilities are measured using the:", optionA: "Historical tax rate", optionB: "Tax rate expected to apply when the difference reverses", optionC: "Risk-free rate", optionD: "Average industry rate", correctOption: "B", explanation: "Deferred taxes use the enacted/expected future tax rate applicable when the temporary difference reverses.", orderIndex: 11 },

  // Industry & competitive analysis
  { id: "cfa2-equity-industry-analysis-q01", topicId: "cfa2-equity-industry-analysis", text: "Porter's Five Forces include rivalry, new entrants, substitutes, supplier power and:", optionA: "Buyer (customer) power", optionB: "Inflation", optionC: "The risk-free rate", optionD: "Dividend policy", correctOption: "A", explanation: "The fifth force is the bargaining power of buyers/customers.", orderIndex: 0 },
  { id: "cfa2-equity-industry-analysis-q02", topicId: "cfa2-equity-industry-analysis", text: "A defensive (non-cyclical) industry is characterized by demand that is:", optionA: "Highly sensitive to the business cycle", optionB: "Relatively stable across the business cycle", optionC: "Always declining", optionD: "Zero", correctOption: "B", explanation: "Defensive industries (e.g., utilities, staples) have stable demand regardless of the economic cycle.", orderIndex: 1 },
  { id: "cfa2-equity-industry-analysis-q03", topicId: "cfa2-equity-industry-analysis", text: "In the growth stage of the industry life cycle, firms typically experience:", optionA: "Declining demand", optionB: "Rapid demand growth and often falling prices", optionC: "Stable mature margins", optionD: "Liquidation", correctOption: "B", explanation: "The growth phase sees fast volume growth, new entrants, and price declines as scale builds.", orderIndex: 2 },
  { id: "cfa2-equity-industry-analysis-q04", topicId: "cfa2-equity-industry-analysis", text: "High barriers to entry tend to:", optionA: "Reduce incumbents' pricing power", optionB: "Protect incumbents and support higher, more durable margins", optionC: "Guarantee losses", optionD: "Eliminate rivalry", correctOption: "B", explanation: "Entry barriers shield incumbents from new competition, supporting profitability.", orderIndex: 3 },
  { id: "cfa2-equity-industry-analysis-q05", topicId: "cfa2-equity-industry-analysis", text: "A highly concentrated industry (few large players) generally has:", optionA: "Less pricing power", optionB: "More pricing power", optionC: "No competitive advantage", optionD: "Zero margins", correctOption: "B", explanation: "Fewer competitors typically means greater pricing power and less destructive rivalry.", orderIndex: 4 },
  { id: "cfa2-equity-industry-analysis-q06", topicId: "cfa2-equity-industry-analysis", text: "Porter's generic competitive strategies are cost leadership, focus and:", optionA: "Differentiation", optionB: "Diversification", optionC: "Vertical integration", optionD: "Hedging", correctOption: "A", explanation: "The three generic strategies are cost leadership, differentiation, and focus.", orderIndex: 5 },
  { id: "cfa2-equity-industry-analysis-q07", topicId: "cfa2-equity-industry-analysis", text: "The experience (learning) curve implies that unit costs:", optionA: "Rise with cumulative output", optionB: "Fall with cumulative output", optionC: "Are constant", optionD: "Are random", correctOption: "B", explanation: "Cumulative production experience lowers unit costs, advantaging high-volume incumbents.", orderIndex: 6 },
  { id: "cfa2-equity-industry-analysis-q08", topicId: "cfa2-equity-industry-analysis", text: "A firm can sustain returns above its cost of capital only with a durable:", optionA: "Dividend", optionB: "Competitive advantage (moat)", optionC: "Share buyback", optionD: "Tax loss", correctOption: "B", explanation: "Without a moat, competition erodes excess returns toward the cost of capital.", orderIndex: 7 },
  { id: "cfa2-equity-industry-analysis-q09", topicId: "cfa2-equity-industry-analysis", text: "Strong supplier power in an industry tends to:", optionA: "Raise input costs and squeeze margins", optionB: "Lower input costs", optionC: "Have no effect", optionD: "Eliminate rivalry", correctOption: "A", explanation: "Powerful suppliers can charge more, compressing the industry's profitability.", orderIndex: 8 },
  { id: "cfa2-equity-industry-analysis-q10", topicId: "cfa2-equity-industry-analysis", text: "The threat of substitutes is greatest when:", optionA: "Substitutes are costly and inferior", optionB: "Close substitutes are cheap and readily available", optionC: "There are no substitutes", optionD: "Switching costs are high", correctOption: "B", explanation: "Cheap, comparable substitutes cap prices and limit industry profitability.", orderIndex: 9 },
  { id: "cfa2-equity-industry-analysis-q11", topicId: "cfa2-equity-industry-analysis", text: "Industry analysis feeds equity valuation primarily by informing forecasts of:", optionA: "Revenue growth, margins and reinvestment", optionB: "The risk-free rate", optionC: "The number of shares", optionD: "Dividend dates", correctOption: "A", explanation: "Industry structure shapes the revenue, margin, and reinvestment assumptions in a DCF.", orderIndex: 10 },
  { id: "cfa2-equity-industry-analysis-q12", topicId: "cfa2-equity-industry-analysis", text: "A mature-stage industry is typically characterized by:", optionA: "Explosive growth", optionB: "Consolidation and stable margins", optionC: "No competition", optionD: "Rapid new entry", correctOption: "B", explanation: "Maturity brings slower growth, consolidation, and relatively stable margins among survivors.", orderIndex: 11 },

  // Option strategies & Greeks
  { id: "cfa2-derivatives-option-strategies-q01", topicId: "cfa2-derivatives-option-strategies", text: "A covered call position consists of:", optionA: "Long stock and a short call", optionB: "Long stock and a long put", optionC: "Two long calls", optionD: "A short put only", correctOption: "A", explanation: "A covered call is long the underlying plus a written (short) call, earning premium while capping upside.", orderIndex: 0 },
  { id: "cfa2-derivatives-option-strategies-q02", topicId: "cfa2-derivatives-option-strategies", text: "A protective put provides:", optionA: "Income with capped upside", optionB: "A downside floor while keeping upside", optionC: "Unlimited downside", optionD: "No effect on risk", correctOption: "B", explanation: "Buying a put on a held asset sets a loss floor while retaining upside (less the premium).", orderIndex: 1 },
  { id: "cfa2-derivatives-option-strategies-q03", topicId: "cfa2-derivatives-option-strategies", text: "A long straddle profits when the underlying:", optionA: "Stays flat", optionB: "Makes a large move in either direction", optionC: "Rises only", optionD: "Pays a dividend", correctOption: "B", explanation: "A long straddle (call + put at the same strike) is long volatility and gains on large moves up or down.", orderIndex: 2 },
  { id: "cfa2-derivatives-option-strategies-q04", topicId: "cfa2-derivatives-option-strategies", text: "A collar combines a long put and a:", optionA: "Short call (to finance the put)", optionB: "Long call", optionC: "Short stock", optionD: "Long bond", correctOption: "A", explanation: "A collar buys a protective put and sells a call to offset its cost, bounding both downside and upside.", orderIndex: 3 },
  { id: "cfa2-derivatives-option-strategies-q05", topicId: "cfa2-derivatives-option-strategies", text: "Delta measures option sensitivity to a change in:", optionA: "Volatility", optionB: "The underlying's price", optionC: "Time", optionD: "Interest rates", correctOption: "B", explanation: "Delta is the change in option value per unit change in the underlying — the hedge ratio.", orderIndex: 4 },
  { id: "cfa2-derivatives-option-strategies-q06", topicId: "cfa2-derivatives-option-strategies", text: "Vega is largest for options that are:", optionA: "Deep in the money and short-dated", optionB: "At the money and longer-dated", optionC: "Already expired", optionD: "Deep out of the money", correctOption: "B", explanation: "Vega (volatility sensitivity) peaks for at-the-money, longer-maturity options.", orderIndex: 5 },
  { id: "cfa2-derivatives-option-strategies-q07", topicId: "cfa2-derivatives-option-strategies", text: "Theta generally represents an option's:", optionA: "Gain from volatility", optionB: "Time decay (loss of value as expiry nears)", optionC: "Rate sensitivity", optionD: "Delta", correctOption: "B", explanation: "Theta measures the erosion of option value with the passage of time.", orderIndex: 6 },
  { id: "cfa2-derivatives-option-strategies-q08", topicId: "cfa2-derivatives-option-strategies", text: "A bull call spread is constructed by:", optionA: "Buying a lower-strike call and selling a higher-strike call", optionB: "Selling both calls", optionC: "Buying two puts", optionD: "Shorting the stock", correctOption: "A", explanation: "A bull call spread buys a lower-strike call and writes a higher-strike call — bullish, with limited risk and reward.", orderIndex: 7 },
  { id: "cfa2-derivatives-option-strategies-q09", topicId: "cfa2-derivatives-option-strategies", text: "A long butterfly spread profits most when the underlying:", optionA: "Moves sharply", optionB: "Stays near the middle strike at expiry", optionC: "Falls to zero", optionD: "Doubles", correctOption: "B", explanation: "A long butterfly is a short-volatility strategy that pays off when the price stays near the central strike.", orderIndex: 8 },
  { id: "cfa2-derivatives-option-strategies-q10", topicId: "cfa2-derivatives-option-strategies", text: "Gamma is largest for options that are:", optionA: "At the money near expiration", optionB: "Deep in the money", optionC: "Long-dated and far OTM", optionD: "Expired", correctOption: "A", explanation: "Gamma (rate of change of delta) peaks for at-the-money options close to expiry.", orderIndex: 9 },
  { id: "cfa2-derivatives-option-strategies-q11", topicId: "cfa2-derivatives-option-strategies", text: "A covered call's maximum gain occurs when the stock at expiry is:", optionA: "Far below the strike", optionB: "At or above the call's strike", optionC: "Zero", optionD: "Irrelevant", correctOption: "B", explanation: "Upside is capped at the strike; max gain = (strike − purchase price) + premium received.", orderIndex: 10 },
  { id: "cfa2-derivatives-option-strategies-q12", topicId: "cfa2-derivatives-option-strategies", text: "A delta-neutral hedge must be rebalanced because of:", optionA: "Rho", optionB: "Gamma (delta changes as the underlying moves)", optionC: "Theta only", optionD: "The strike price", correctOption: "B", explanation: "Gamma causes delta to change with the underlying, so a static hedge drifts and needs dynamic rebalancing.", orderIndex: 11 },

  // Simulation & probabilistic methods
  { id: "cfa2-quantitative-methods-simulation-q01", topicId: "cfa2-quantitative-methods-simulation", text: "Monte Carlo simulation produces a:", optionA: "Single point estimate", optionB: "Distribution of possible outcomes", optionC: "Risk-free rate", optionD: "Closed-form solution", correctOption: "B", explanation: "By running many random scenarios, Monte Carlo builds a full distribution of outcomes.", orderIndex: 0 },
  { id: "cfa2-quantitative-methods-simulation-q02", topicId: "cfa2-quantitative-methods-simulation", text: "A key limitation of Monte Carlo simulation is that it:", optionA: "Cannot handle complexity", optionB: "Is only as reliable as its input assumptions", optionC: "Requires no data", optionD: "Gives an analytical answer", correctOption: "B", explanation: "Results depend entirely on the assumed input distributions and relationships ('garbage in, garbage out').", orderIndex: 1 },
  { id: "cfa2-quantitative-methods-simulation-q03", topicId: "cfa2-quantitative-methods-simulation", text: "Monte Carlo is especially valuable for valuing instruments with:", optionA: "Linear payoffs only", optionB: "Complex, path-dependent or non-linear payoffs", optionC: "No risk", optionD: "Fixed coupons", correctOption: "B", explanation: "Simulation handles path-dependency and non-linearity that closed-form models cannot easily address.", orderIndex: 2 },
  { id: "cfa2-quantitative-methods-simulation-q04", topicId: "cfa2-quantitative-methods-simulation", text: "Bootstrapping estimates a sampling distribution by:", optionA: "Assuming normality", optionB: "Repeatedly resampling, with replacement, from observed data", optionC: "Using a single sample once", optionD: "Ignoring the data", correctOption: "B", explanation: "Bootstrapping resamples the observed data many times to approximate the sampling distribution and standard errors.", orderIndex: 3 },
  { id: "cfa2-quantitative-methods-simulation-q05", topicId: "cfa2-quantitative-methods-simulation", text: "Historical simulation differs from Monte Carlo in that it:", optionA: "Assumes a parametric distribution", optionB: "Resamples actual past data without a distribution assumption", optionC: "Cannot use real data", optionD: "Is purely analytical", correctOption: "B", explanation: "Historical simulation reuses the empirical distribution of past observations rather than a modeled one.", orderIndex: 4 },
  { id: "cfa2-quantitative-methods-simulation-q06", topicId: "cfa2-quantitative-methods-simulation", text: "Bayes' formula is used to:", optionA: "Update a prior probability with new evidence", optionB: "Compute duration", optionC: "Estimate beta", optionD: "Price a bond", correctOption: "A", explanation: "Bayes' rule revises a prior probability given new information: P(A|B) = P(B|A)P(A)/P(B).", orderIndex: 5 },
  { id: "cfa2-quantitative-methods-simulation-q07", topicId: "cfa2-quantitative-methods-simulation", text: "Sensitivity analysis differs from scenario analysis in that sensitivity analysis:", optionA: "Changes many inputs at once", optionB: "Varies one input at a time", optionC: "Uses no inputs", optionD: "Is a simulation", correctOption: "B", explanation: "Sensitivity analysis changes a single variable; scenario analysis changes a coherent set of variables together.", orderIndex: 6 },
  { id: "cfa2-quantitative-methods-simulation-q08", topicId: "cfa2-quantitative-methods-simulation", text: "Ignoring correlations among inputs in a simulation will most likely:", optionA: "Have no effect", optionB: "Misstate the portfolio's risk", optionC: "Eliminate risk", optionD: "Guarantee accuracy", correctOption: "B", explanation: "Correlations drive aggregate risk; omitting them biases the simulated outcome distribution.", orderIndex: 7 },
  { id: "cfa2-quantitative-methods-simulation-q09", topicId: "cfa2-quantitative-methods-simulation", text: "Increasing the number of Monte Carlo trials primarily improves:", optionA: "The validity of the assumptions", optionB: "The convergence/precision of the estimate", optionC: "The input data quality", optionD: "The risk-free rate", correctOption: "B", explanation: "More trials reduce simulation noise so the estimate converges, but cannot fix flawed assumptions.", orderIndex: 8 },
  { id: "cfa2-quantitative-methods-simulation-q10", topicId: "cfa2-quantitative-methods-simulation", text: "A retirement-wealth projection that accounts for uncertain returns is best done with:", optionA: "A single deterministic forecast", optionB: "Monte Carlo simulation", optionC: "A coupon calculation", optionD: "A trend line", correctOption: "B", explanation: "Monte Carlo captures the distribution of possible wealth paths under uncertain returns.", orderIndex: 9 },
  { id: "cfa2-quantitative-methods-simulation-q11", topicId: "cfa2-quantitative-methods-simulation", text: "An advantage of Monte Carlo over an analytical (closed-form) model is its ability to:", optionA: "Always be faster", optionB: "Incorporate many interacting variables and constraints flexibly", optionC: "Avoid assumptions entirely", optionD: "Guarantee the true answer", correctOption: "B", explanation: "Simulation flexibly models complex, multi-variable problems that lack tractable closed-form solutions.", orderIndex: 10 },
  { id: "cfa2-quantitative-methods-simulation-q12", topicId: "cfa2-quantitative-methods-simulation", text: "In Monte Carlo, random draws are generated from:", optionA: "The realized future", optionB: "Specified probability distributions for the inputs", optionC: "A single historical value", optionD: "The benchmark only", correctOption: "B", explanation: "Each input is sampled from an assumed probability distribution to create scenarios.", orderIndex: 11 },

  // Economics of regulation
  { id: "cfa2-economics-regulation-q01", topicId: "cfa2-economics-regulation", text: "A natural monopoly is a market failure best addressed by:", optionA: "Encouraging many small entrants", optionB: "Price/economic regulation of the single efficient provider", optionC: "Banning the product", optionD: "No intervention", correctOption: "B", explanation: "When one provider is most efficient, regulators often control prices/entry rather than force competition.", orderIndex: 0 },
  { id: "cfa2-economics-regulation-q02", topicId: "cfa2-economics-regulation", text: "An externality is an example of a:", optionA: "Market failure justifying regulation", optionB: "Perfectly efficient market", optionC: "Tax shelter", optionD: "Risk-free asset", correctOption: "A", explanation: "Externalities (costs/benefits not borne by the transacting parties) are a classic rationale for regulation.", orderIndex: 1 },
  { id: "cfa2-economics-regulation-q03", topicId: "cfa2-economics-regulation", text: "'Regulatory capture' describes a situation where regulators:", optionA: "Serve the public exclusively", optionB: "Come to serve the interests of the regulated industry", optionC: "Are abolished", optionD: "Set zero rules", correctOption: "B", explanation: "Capture occurs when the regulated industry unduly influences its regulator's decisions.", orderIndex: 2 },
  { id: "cfa2-economics-regulation-q04", topicId: "cfa2-economics-regulation", text: "Firms exploiting differences in rules across jurisdictions engage in:", optionA: "Regulatory arbitrage", optionB: "Tax-loss harvesting", optionC: "Index rebalancing", optionD: "Greenmail", correctOption: "A", explanation: "Regulatory arbitrage shifts activity to where rules are most favorable.", orderIndex: 3 },
  { id: "cfa2-economics-regulation-q05", topicId: "cfa2-economics-regulation", text: "Prudential regulation primarily aims to ensure the:", optionA: "Safety and soundness of financial institutions", optionB: "Maximum number of competitors", optionC: "Lowest possible prices", optionD: "Highest taxes", correctOption: "A", explanation: "Prudential regulation focuses on the stability/solvency of financial firms and the system.", orderIndex: 4 },
  { id: "cfa2-economics-regulation-q06", topicId: "cfa2-economics-regulation", text: "A self-regulating organization (SRO) is one that:", optionA: "Has no authority", optionB: "Is granted regulatory authority over its members (e.g., an exchange)", optionC: "Replaces all government", optionD: "Only sets taxes", correctOption: "B", explanation: "SROs (like exchanges) are private bodies delegated authority to regulate their members.", orderIndex: 5 },
  { id: "cfa2-economics-regulation-q07", topicId: "cfa2-economics-regulation", text: "Disclosure requirements address which market failure?", optionA: "Natural monopoly", optionB: "Information asymmetry", optionC: "Public goods", optionD: "Externalities", correctOption: "B", explanation: "Mandatory disclosure reduces information asymmetry between firms and investors/consumers.", orderIndex: 6 },
  { id: "cfa2-economics-regulation-q08", topicId: "cfa2-economics-regulation", text: "When assessing a regulation, analysts weigh its benefits against its:", optionA: "Compliance costs and unintended consequences", optionB: "Dividend yield", optionC: "Beta", optionD: "Coupon", correctOption: "A", explanation: "Sound regulatory analysis is cost-benefit, accounting for compliance burdens and side effects.", orderIndex: 7 },
  { id: "cfa2-economics-regulation-q09", topicId: "cfa2-economics-regulation", text: "Regulation that raises barriers to entry tends to:", optionA: "Reduce incumbents' profitability", optionB: "Protect incumbents' pricing power", optionC: "Have no valuation impact", optionD: "Lower all prices", correctOption: "B", explanation: "Higher regulatory entry barriers can shield incumbents, affecting industry economics and valuation.", orderIndex: 8 },
  { id: "cfa2-economics-regulation-q10", topicId: "cfa2-economics-regulation", text: "A public good (e.g., national defense) is under-provided by markets because it is:", optionA: "Excludable and rival", optionB: "Non-excludable and non-rival", optionC: "Highly profitable", optionD: "Easy to price", correctOption: "B", explanation: "Non-excludable, non-rival goods invite free-riding, so markets under-provide them — a regulation rationale.", orderIndex: 9 },
  { id: "cfa2-economics-regulation-q11", topicId: "cfa2-economics-regulation", text: "Administrative regulations are issued by:", optionA: "Legislatures", optionB: "Government agencies", optionC: "Courts", optionD: "Shareholders", correctOption: "B", explanation: "Agencies issue administrative regulations under authority delegated by statute.", orderIndex: 10 },
  { id: "cfa2-economics-regulation-q12", topicId: "cfa2-economics-regulation", text: "From an investment standpoint, a major regulatory change is significant because it:", optionA: "Never affects companies", optionB: "Can alter industry structure, costs and risk — hence valuation", optionC: "Only changes accounting", optionD: "Is irrelevant to risk", correctOption: "B", explanation: "Regulation reshapes barriers, pricing, and risk, feeding directly into cash-flow and discount-rate assumptions.", orderIndex: 11 },

  // Commodities & commodity derivatives
  { id: "cfa2-alternative-investments-commodities-q01", topicId: "cfa2-alternative-investments-commodities", text: "Most commodity investors gain exposure through:", optionA: "Holding the physical spot commodity", optionB: "Futures contracts", optionC: "Dividends", optionD: "Coupons", correctOption: "B", explanation: "Because physical storage is costly/impractical, investors usually use commodity futures.", orderIndex: 0 },
  { id: "cfa2-alternative-investments-commodities-q02", topicId: "cfa2-alternative-investments-commodities", text: "The total return of a commodity futures position is price return, collateral return and:", optionA: "Roll return", optionB: "Dividend return", optionC: "Coupon return", optionD: "Tax return", correctOption: "A", explanation: "Futures total return = price return + roll return + collateral (cash) return.", orderIndex: 1 },
  { id: "cfa2-alternative-investments-commodities-q03", topicId: "cfa2-alternative-investments-commodities", text: "A market in backwardation (futures below spot) produces a roll return that is:", optionA: "Positive", optionB: "Negative", optionC: "Zero", optionD: "Undefined", correctOption: "A", explanation: "Rolling up toward a higher spot in backwardation generates a positive roll yield.", orderIndex: 2 },
  { id: "cfa2-alternative-investments-commodities-q04", topicId: "cfa2-alternative-investments-commodities", text: "Contango (futures above spot) generates a roll return that is:", optionA: "Positive", optionB: "Negative", optionC: "Zero", optionD: "Equal to the coupon", correctOption: "B", explanation: "Rolling into successively cheaper-to-hold-but-higher-priced contracts in contango creates a negative roll yield.", orderIndex: 3 },
  { id: "cfa2-alternative-investments-commodities-q05", topicId: "cfa2-alternative-investments-commodities", text: "The theory of storage relates futures prices to spot plus storage cost minus the:", optionA: "Convenience yield", optionB: "Dividend yield", optionC: "Risk-free rate", optionD: "Beta", correctOption: "A", explanation: "Futures ≈ spot + storage − convenience yield; a high convenience yield pushes toward backwardation.", orderIndex: 4 },
  { id: "cfa2-alternative-investments-commodities-q06", topicId: "cfa2-alternative-investments-commodities", text: "The insurance/hedging-pressure theory suggests producers selling futures cause prices to sit:", optionA: "Above expected spot", optionB: "Below expected future spot (normal backwardation)", optionC: "At the risk-free rate", optionD: "At zero", correctOption: "B", explanation: "Producer hedging pressure depresses futures below the expected spot, compensating long speculators.", orderIndex: 5 },
  { id: "cfa2-alternative-investments-commodities-q07", topicId: "cfa2-alternative-investments-commodities", text: "Commodities are often added to portfolios as a(n):", optionA: "Inflation hedge and diversifier", optionB: "Source of dividends", optionC: "Risk-free asset", optionD: "Duration hedge", correctOption: "A", explanation: "Commodities tend to rise with unexpected inflation and diversify stock/bond portfolios.", orderIndex: 6 },
  { id: "cfa2-alternative-investments-commodities-q08", topicId: "cfa2-alternative-investments-commodities", text: "Unlike stocks and bonds, commodities provide:", optionA: "No income (dividends or coupons)", optionB: "Guaranteed coupons", optionC: "Voting rights", optionD: "A fixed maturity value", correctOption: "A", explanation: "Commodities generate no cash income; return comes from price, roll, and collateral yield.", orderIndex: 7 },
  { id: "cfa2-alternative-investments-commodities-q09", topicId: "cfa2-alternative-investments-commodities", text: "The collateral return component of a futures strategy comes from:", optionA: "The cash held to back the futures", optionB: "Dividends on the commodity", optionC: "The convenience yield", optionD: "Storage costs", correctOption: "A", explanation: "Futures require little cash outlay, so the backing collateral earns a (cash/T-bill) yield.", orderIndex: 8 },
  { id: "cfa2-alternative-investments-commodities-q10", topicId: "cfa2-alternative-investments-commodities", text: "A high convenience yield typically signals:", optionA: "Abundant supply and contango", optionB: "Tight supply and a tendency toward backwardation", optionC: "Zero demand", optionD: "Negative prices", correctOption: "B", explanation: "Scarcity raises the convenience yield of holding the physical, pushing the curve toward backwardation.", orderIndex: 9 },
  { id: "cfa2-alternative-investments-commodities-q11", topicId: "cfa2-alternative-investments-commodities", text: "Commodity returns are primarily driven by:", optionA: "Dividend policy", optionB: "Supply-demand dynamics and the futures-curve shape", optionC: "Share buybacks", optionD: "Credit ratings", correctOption: "B", explanation: "Physical supply/demand and the resulting curve (roll yield) drive commodity futures returns.", orderIndex: 10 },
  { id: "cfa2-alternative-investments-commodities-q12", topicId: "cfa2-alternative-investments-commodities", text: "Major commodity sub-sectors include energy, metals, livestock and:", optionA: "Agriculture", optionB: "Equities", optionC: "Government bonds", optionD: "Currencies", correctOption: "A", explanation: "Commodity indices span energy, industrial/precious metals, agriculture, and livestock.", orderIndex: 11 },

  // GIPS standards
  { id: "cfa2-ethics-gips-q01", topicId: "cfa2-ethics-gips", text: "GIPS compliance is claimed on a:", optionA: "Composite basis", optionB: "Firm-wide basis", optionC: "Per-client basis", optionD: "Per-security basis", correctOption: "B", explanation: "A firm either complies with GIPS firm-wide or not at all; partial compliance is prohibited.", orderIndex: 0 },
  { id: "cfa2-ethics-gips-q02", topicId: "cfa2-ethics-gips", text: "A GIPS composite must include all:", optionA: "Best-performing portfolios", optionB: "Actual fee-paying, discretionary portfolios of a similar strategy", optionC: "Model portfolios", optionD: "Terminated accounts only", correctOption: "B", explanation: "Composites group every actual fee-paying discretionary portfolio of a strategy to prevent cherry-picking.", orderIndex: 1 },
  { id: "cfa2-ethics-gips-q03", topicId: "cfa2-ethics-gips", text: "GIPS requires performance to be reported using ____ returns.", optionA: "Money-weighted", optionB: "Time-weighted", optionC: "Simple price", optionD: "Nominal coupon", correctOption: "B", explanation: "Time-weighted returns remove the effect of client cash-flow timing, the GIPS default.", orderIndex: 2 },
  { id: "cfa2-ethics-gips-q04", topicId: "cfa2-ethics-gips", text: "When first claiming compliance, a firm must show at least ____ of compliant history.", optionA: "1 year", optionB: "5 years (or since inception)", optionC: "20 years", optionD: "No history", correctOption: "B", explanation: "A minimum of five years (or since inception) is required, building toward ten years.", orderIndex: 3 },
  { id: "cfa2-ethics-gips-q05", topicId: "cfa2-ethics-gips", text: "GIPS verification is:", optionA: "Mandatory", optionB: "Voluntary, firm-wide, and performed by an independent third party", optionC: "Done per composite by CFA Institute", optionD: "Prohibited", correctOption: "B", explanation: "Verification is recommended (not required), covers the whole firm, and is done by an independent verifier.", orderIndex: 4 },
  { id: "cfa2-ethics-gips-q06", topicId: "cfa2-ethics-gips", text: "Non-discretionary portfolios are:", optionA: "Required in composites", optionB: "Excluded from composites", optionC: "The only ones included", optionD: "Reported separately as fact", correctOption: "B", explanation: "Only discretionary portfolios belong in composites; client-imposed constraints make accounts non-discretionary.", orderIndex: 5 },
  { id: "cfa2-ethics-gips-q07", topicId: "cfa2-ethics-gips", text: "The primary purpose of GIPS is to ensure:", optionA: "Higher returns", optionB: "Fair representation and full disclosure of performance", optionC: "Lower fees", optionD: "Tax efficiency", correctOption: "B", explanation: "GIPS standardizes performance presentation for fairness and transparency to prospective clients.", orderIndex: 6 },
  { id: "cfa2-ethics-gips-q08", topicId: "cfa2-ethics-gips", text: "Including only the firm's surviving, successful portfolios would introduce:", optionA: "Survivorship bias (which GIPS prevents via composites)", optionB: "No bias", optionC: "A tax", optionD: "A discount", correctOption: "A", explanation: "Composite construction including all relevant portfolios prevents survivorship and selection bias.", orderIndex: 7 },
  { id: "cfa2-ethics-gips-q09", topicId: "cfa2-ethics-gips", text: "GIPS presentations must include a benchmark and a measure of:", optionA: "Dispersion", optionB: "Beta only", optionC: "Duration", optionD: "Tax rate", correctOption: "A", explanation: "Composites show an appropriate benchmark and internal dispersion of portfolio returns.", orderIndex: 8 },
  { id: "cfa2-ethics-gips-q10", topicId: "cfa2-ethics-gips", text: "Presenting deliberately misleading performance figures:", optionA: "Is allowed if disclosed", optionB: "Violates GIPS' fair-representation principle", optionC: "Is required", optionD: "Has no consequence", correctOption: "B", explanation: "GIPS prohibits false or misleading performance and requires full, fair disclosure.", orderIndex: 9 },
  { id: "cfa2-ethics-gips-q11", topicId: "cfa2-ethics-gips", text: "If local law conflicts with GIPS, a firm should:", optionA: "Ignore the law", optionB: "Follow the law and disclose the conflict", optionC: "Abandon GIPS entirely", optionD: "Do nothing", correctOption: "B", explanation: "Where law conflicts with GIPS, comply with law and disclose the conflict.", orderIndex: 10 },
  { id: "cfa2-ethics-gips-q12", topicId: "cfa2-ethics-gips", text: "GIPS standards are best described as:", optionA: "Mandatory regulations", optionB: "Voluntary ethical performance-presentation standards", optionC: "Tax rules", optionD: "Accounting principles", correctOption: "B", explanation: "GIPS are voluntary, ethical standards for presenting investment performance.", orderIndex: 11 },

  // Mergers, acquisitions & restructuring
  { id: "cfa2-corporate-issuers-mergers-acquisitions-q01", topicId: "cfa2-corporate-issuers-mergers-acquisitions", text: "A merger between two firms in the same industry and stage of production is:", optionA: "Vertical", optionB: "Horizontal", optionC: "Conglomerate", optionD: "A spin-off", correctOption: "B", explanation: "Horizontal mergers combine competitors in the same business, often for synergies or market power.", orderIndex: 0 },
  { id: "cfa2-corporate-issuers-mergers-acquisitions-q02", topicId: "cfa2-corporate-issuers-mergers-acquisitions", text: "A vertical merger combines firms that are:", optionA: "Direct competitors", optionB: "At different stages of the same supply chain", optionC: "In unrelated industries", optionD: "Identical", correctOption: "B", explanation: "Vertical mergers join a company with a supplier or customer along its value chain.", orderIndex: 1 },
  { id: "cfa2-corporate-issuers-mergers-acquisitions-q03", topicId: "cfa2-corporate-issuers-mergers-acquisitions", text: "In an all-stock deal, the target shareholders:", optionA: "Bear none of the deal risk", optionB: "Share in the combined firm's risk and reward", optionC: "Receive only cash", optionD: "Lose all upside", correctOption: "B", explanation: "Stock consideration gives target holders an ongoing stake, sharing post-merger risk/reward with the acquirer.", orderIndex: 2 },
  { id: "cfa2-corporate-issuers-mergers-acquisitions-q04", topicId: "cfa2-corporate-issuers-mergers-acquisitions", text: "A 'poison pill' is a:", optionA: "Takeover defense that makes acquisition more costly", optionB: "Type of dividend", optionC: "Accounting method", optionD: "Synergy estimate", correctOption: "A", explanation: "A poison pill lets existing holders buy shares cheaply if a raider crosses a threshold, deterring hostile bids.", orderIndex: 3 },
  { id: "cfa2-corporate-issuers-mergers-acquisitions-q05", topicId: "cfa2-corporate-issuers-mergers-acquisitions", text: "The gain to target shareholders in an acquisition is generally the:", optionA: "Premium paid over the pre-bid price", optionB: "Entire synergy", optionC: "Acquirer's market cap", optionD: "Risk-free rate", correctOption: "A", explanation: "Target holders capture the takeover premium; acquirer gains = synergies − premium.", orderIndex: 4 },
  { id: "cfa2-corporate-issuers-mergers-acquisitions-q06", topicId: "cfa2-corporate-issuers-mergers-acquisitions", text: "The 'winner's curse' in M&A refers to:", optionA: "Underpaying for a target", optionB: "Overpaying such that the premium exceeds the synergies", optionC: "Avoiding all deals", optionD: "Paying in cash", correctOption: "B", explanation: "Aggressive bidding can lead the acquirer to overpay, destroying its own shareholders' value.", orderIndex: 5 },
  { id: "cfa2-corporate-issuers-mergers-acquisitions-q07", topicId: "cfa2-corporate-issuers-mergers-acquisitions", text: "Comparable transaction analysis includes a control premium because it uses:", optionA: "Minority public prices", optionB: "Prices actually paid to acquire whole companies", optionC: "Book values", optionD: "Risk-free rates", correctOption: "B", explanation: "Transaction comps reflect prices paid for control, so they embed a control premium.", orderIndex: 6 },
  { id: "cfa2-corporate-issuers-mergers-acquisitions-q08", topicId: "cfa2-corporate-issuers-mergers-acquisitions", text: "A spin-off is a form of:", optionA: "Acquisition", optionB: "Corporate restructuring/divestiture", optionC: "Dividend reinvestment", optionD: "Stock split", correctOption: "B", explanation: "A spin-off separates a business unit into an independent company — a restructuring/divestiture.", orderIndex: 7 },
  { id: "cfa2-corporate-issuers-mergers-acquisitions-q09", topicId: "cfa2-corporate-issuers-mergers-acquisitions", text: "Antitrust regulators assess a horizontal merger partly using the:", optionA: "Herfindahl-Hirschman Index (HHI)", optionB: "Sharpe ratio", optionC: "Dividend yield", optionD: "Duration", correctOption: "A", explanation: "The HHI measures market concentration; large increases can trigger antitrust scrutiny.", orderIndex: 8 },
  { id: "cfa2-corporate-issuers-mergers-acquisitions-q10", topicId: "cfa2-corporate-issuers-mergers-acquisitions", text: "Managerial 'hubris' as a merger motive tends to:", optionA: "Increase deal discipline", optionB: "Lead to overpaying for targets", optionC: "Reduce premiums", optionD: "Improve synergies", correctOption: "B", explanation: "Overconfident managers may overestimate synergies and overpay, harming acquirer value.", orderIndex: 9 },
  { id: "cfa2-corporate-issuers-mergers-acquisitions-q11", topicId: "cfa2-corporate-issuers-mergers-acquisitions", text: "Inviting a friendly 'white knight' is a response to a:", optionA: "Dividend cut", optionB: "Hostile takeover bid", optionC: "Stock split", optionD: "Bond default", correctOption: "B", explanation: "A white knight is a preferred acquirer sought to fend off a hostile bidder.", orderIndex: 10 },
  { id: "cfa2-corporate-issuers-mergers-acquisitions-q12", topicId: "cfa2-corporate-issuers-mergers-acquisitions", text: "A cash offer, versus a stock offer, transfers more of the deal's risk and reward to the:", optionA: "Target shareholders", optionB: "Acquirer", optionC: "Regulators", optionD: "Bondholders", correctOption: "B", explanation: "With cash, target holders exit at a fixed price and the acquirer bears all subsequent risk/reward.", orderIndex: 11 },

  // Trading, execution & rebalancing
  { id: "cfa2-portfolio-management-trading-execution-q01", topicId: "cfa2-portfolio-management-trading-execution", text: "Which is an implicit trading cost?", optionA: "Commission", optionB: "Market impact", optionC: "Exchange fee", optionD: "Transaction tax", correctOption: "B", explanation: "Market impact is implicit; commissions, fees and taxes are explicit costs.", orderIndex: 0 },
  { id: "cfa2-portfolio-management-trading-execution-q02", topicId: "cfa2-portfolio-management-trading-execution", text: "Implementation shortfall measures the gap between:", optionA: "Two benchmarks", optionB: "A paper-portfolio return and the actual executed return", optionC: "Beta and alpha", optionD: "Bid and ask only", correctOption: "B", explanation: "Implementation shortfall captures total cost as the difference between a decision-price portfolio and the real one.", orderIndex: 1 },
  { id: "cfa2-portfolio-management-trading-execution-q03", topicId: "cfa2-portfolio-management-trading-execution", text: "A market order prioritizes:", optionA: "Price control", optionB: "Immediacy of execution (at the cost of impact)", optionC: "Avoiding execution", optionD: "Zero cost", correctOption: "B", explanation: "Market orders execute immediately but pay the spread/impact; limit orders control price but risk non-execution.", orderIndex: 2 },
  { id: "cfa2-portfolio-management-trading-execution-q04", topicId: "cfa2-portfolio-management-trading-execution", text: "A limit order's main risk is:", optionA: "Paying high impact", optionB: "Non-execution if the price isn't reached", optionC: "Immediate fill", optionD: "Zero risk", correctOption: "B", explanation: "Limit orders may not fill, creating opportunity cost if the price moves away.", orderIndex: 3 },
  { id: "cfa2-portfolio-management-trading-execution-q05", topicId: "cfa2-portfolio-management-trading-execution", text: "VWAP is a benchmark comparing fills to the:", optionA: "Closing price", optionB: "Volume-weighted average price over the trading period", optionC: "Risk-free rate", optionD: "Prior day's open", correctOption: "B", explanation: "VWAP measures execution quality against the volume-weighted average traded price.", orderIndex: 4 },
  { id: "cfa2-portfolio-management-trading-execution-q06", topicId: "cfa2-portfolio-management-trading-execution", text: "An implementation-shortfall algorithm explicitly trades off market impact against:", optionA: "Dividends", optionB: "Timing (price) risk", optionC: "Beta", optionD: "Duration", correctOption: "B", explanation: "IS algos balance trading fast (impact) against trading slow (price-drift/timing risk).", orderIndex: 5 },
  { id: "cfa2-portfolio-management-trading-execution-q07", topicId: "cfa2-portfolio-management-trading-execution", text: "Slicing a large order into smaller child orders aims to:", optionA: "Increase market impact", optionB: "Reduce market impact", optionC: "Raise commissions", optionD: "Guarantee a fill", correctOption: "B", explanation: "Breaking up a large order limits the price impact of demanding too much liquidity at once.", orderIndex: 6 },
  { id: "cfa2-portfolio-management-trading-execution-q08", topicId: "cfa2-portfolio-management-trading-execution", text: "Corridor (percentage-range) rebalancing triggers a trade when:", optionA: "A set date arrives", optionB: "A weight breaches its tolerance band", optionC: "A dividend is paid", optionD: "Volatility is zero", correctOption: "B", explanation: "Corridor rebalancing acts on drift past a band rather than on the calendar.", orderIndex: 7 },
  { id: "cfa2-portfolio-management-trading-execution-q09", topicId: "cfa2-portfolio-management-trading-execution", text: "Rebalancing corridors should be wider for assets with:", optionA: "Higher transaction costs", optionB: "Higher volatility", optionC: "Higher correlation only", optionD: "Lower risk tolerance", correctOption: "A", explanation: "Higher trading costs justify wider bands; higher volatility argues for narrower bands.", orderIndex: 8 },
  { id: "cfa2-portfolio-management-trading-execution-q10", topicId: "cfa2-portfolio-management-trading-execution", text: "Disciplined rebalancing is inherently a ____ strategy.", optionA: "Momentum", optionB: "Contrarian", optionC: "Buy-and-hold", optionD: "Risk-free", correctOption: "B", explanation: "Rebalancing sells winners and buys losers — a contrarian action that can earn a diversification return.", orderIndex: 9 },
  { id: "cfa2-portfolio-management-trading-execution-q11", topicId: "cfa2-portfolio-management-trading-execution", text: "The opportunity-cost component of implementation shortfall arises from:", optionA: "Commissions", optionB: "Unfilled portions of an order as the price moves away", optionC: "Taxes", optionD: "The spread only", correctOption: "B", explanation: "Shares left unexecuted whose price moves adversely create a missed-trade (opportunity) cost.", orderIndex: 10 },
  { id: "cfa2-portfolio-management-trading-execution-q12", topicId: "cfa2-portfolio-management-trading-execution", text: "A more aggressive (liquidity-demanding) execution generally has:", optionA: "Higher market impact but lower timing risk", optionB: "Lower impact and lower timing risk", optionC: "No cost", optionD: "Higher opportunity cost", correctOption: "A", explanation: "Trading quickly raises impact cost but reduces exposure to adverse price drift.", orderIndex: 11 },

  // Financial analysis techniques & earnings quality
  { id: "cfa2-financial-reporting-analysis-techniques-q01", topicId: "cfa2-financial-reporting-analysis-techniques", text: "The 3-way DuPont decomposition expresses ROE as net margin × asset turnover ×:", optionA: "Financial leverage", optionB: "The tax rate", optionC: "Interest coverage", optionD: "The current ratio", correctOption: "A", explanation: "ROE = net profit margin × total asset turnover × financial leverage (assets/equity).", orderIndex: 0 },
  { id: "cfa2-financial-reporting-analysis-techniques-q02", topicId: "cfa2-financial-reporting-analysis-techniques", text: "Common-size income statements express each line item as a percentage of:", optionA: "Total assets", optionB: "Revenue (sales)", optionC: "Equity", optionD: "Net income", correctOption: "B", explanation: "Common-size income statements scale items by revenue; common-size balance sheets scale by total assets.", orderIndex: 1 },
  { id: "cfa2-financial-reporting-analysis-techniques-q03", topicId: "cfa2-financial-reporting-analysis-techniques", text: "A large and growing gap between net income and operating cash flow suggests:", optionA: "High earnings quality", optionB: "Lower earnings quality (high accruals)", optionC: "No information", optionD: "A tax benefit", correctOption: "B", explanation: "Earnings well above operating cash flow indicate accrual-heavy, less sustainable results.", orderIndex: 2 },
  { id: "cfa2-financial-reporting-analysis-techniques-q04", topicId: "cfa2-financial-reporting-analysis-techniques", text: "The interest coverage ratio is a measure of:", optionA: "Liquidity", optionB: "Solvency", optionC: "Profitability", optionD: "Activity", correctOption: "B", explanation: "Interest coverage (EBIT/interest) gauges the ability to service debt — a solvency metric.", orderIndex: 3 },
  { id: "cfa2-financial-reporting-analysis-techniques-q05", topicId: "cfa2-financial-reporting-analysis-techniques", text: "Rising days sales outstanding (DSO) with flat sales may indicate:", optionA: "Faster collections", optionB: "Aggressive revenue recognition or collection problems", optionC: "Lower inventory", optionD: "Higher cash", correctOption: "B", explanation: "Receivables growing faster than sales can signal channel stuffing or deteriorating collections — an earnings-quality concern.", orderIndex: 4 },
  { id: "cfa2-financial-reporting-analysis-techniques-q06", topicId: "cfa2-financial-reporting-analysis-techniques", text: "The 5-way DuPont model adds which effects to the analysis?", optionA: "Tax burden and interest burden", optionB: "Dividend and buyback", optionC: "Beta and alpha", optionD: "Duration and convexity", correctOption: "A", explanation: "The 5-way decomposition isolates tax burden × interest burden × EBIT margin × asset turnover × leverage.", orderIndex: 5 },
  { id: "cfa2-financial-reporting-analysis-techniques-q07", topicId: "cfa2-financial-reporting-analysis-techniques", text: "Total asset turnover measures:", optionA: "Profit per share", optionB: "Revenue generated per unit of assets", optionC: "Debt per equity", optionD: "Cash per liability", correctOption: "B", explanation: "Asset turnover = revenue / average total assets — an efficiency (activity) ratio.", orderIndex: 6 },
  { id: "cfa2-financial-reporting-analysis-techniques-q08", topicId: "cfa2-financial-reporting-analysis-techniques", text: "Capitalizing costs that should be expensed will, in the current year, tend to:", optionA: "Lower earnings", optionB: "Inflate earnings and assets (an earnings-quality red flag)", optionC: "Have no effect", optionD: "Reduce assets", correctOption: "B", explanation: "Improper capitalization shifts an expense to the balance sheet, boosting current income — a quality warning sign.", orderIndex: 7 },
  { id: "cfa2-financial-reporting-analysis-techniques-q09", topicId: "cfa2-financial-reporting-analysis-techniques", text: "High-quality earnings are best described as:", optionA: "Large one-time gains", optionB: "Sustainable and backed by cash flow", optionC: "Maximized by accruals", optionD: "Volatile", correctOption: "B", explanation: "Quality earnings are repeatable and supported by operating cash, not one-offs or aggressive accruals.", orderIndex: 8 },
  { id: "cfa2-financial-reporting-analysis-techniques-q10", topicId: "cfa2-financial-reporting-analysis-techniques", text: "Ratios are most meaningful when compared against:", optionA: "Nothing", optionB: "Peers and the firm's own historical trend", optionC: "The risk-free rate", optionD: "Random benchmarks", correctOption: "B", explanation: "Context from peer and historical comparisons turns a raw ratio into a useful signal.", orderIndex: 9 },
  { id: "cfa2-financial-reporting-analysis-techniques-q11", topicId: "cfa2-financial-reporting-analysis-techniques", text: "The accruals ratio is used to assess:", optionA: "Liquidity", optionB: "Earnings quality", optionC: "Currency risk", optionD: "Duration", correctOption: "B", explanation: "A high accruals ratio (accruals relative to earnings/assets) signals lower earnings quality.", orderIndex: 10 },
  { id: "cfa2-financial-reporting-analysis-techniques-q12", topicId: "cfa2-financial-reporting-analysis-techniques", text: "Before forecasting, analysts should adjust statements for:", optionA: "Off-balance-sheet items and non-recurring effects", optionB: "Only the share price", optionC: "The dividend date", optionD: "Nothing", correctOption: "A", explanation: "Normalizing for off-balance-sheet exposures and one-offs improves comparability and forecast reliability.", orderIndex: 11 },

  // MBS & ABS
  { id: "cfa2-fixed-income-mbs-abs-q01", topicId: "cfa2-fixed-income-mbs-abs", text: "Securitization typically moves the pooled loans into a:", optionA: "The originator's balance sheet", optionB: "Bankruptcy-remote special purpose vehicle (SPV)", optionC: "A government agency", optionD: "An equity fund", correctOption: "B", explanation: "Loans are sold to a bankruptcy-remote SPV that issues the securities, isolating them from the originator.", orderIndex: 0 },
  { id: "cfa2-fixed-income-mbs-abs-q02", topicId: "cfa2-fixed-income-mbs-abs", text: "The defining risk of mortgage-backed pass-throughs is:", optionA: "Prepayment risk", optionB: "Currency risk", optionC: "Equity risk", optionD: "Liquidity-only risk", correctOption: "A", explanation: "Borrowers' ability to prepay creates contraction/extension (prepayment) risk and negative convexity.", orderIndex: 1 },
  { id: "cfa2-fixed-income-mbs-abs-q03", topicId: "cfa2-fixed-income-mbs-abs", text: "When interest rates fall, MBS investors face:", optionA: "Extension risk", optionB: "Contraction risk (faster prepayments)", optionC: "No prepayment effect", optionD: "Higher coupons", correctOption: "B", explanation: "Falling rates spur refinancing, returning principal early (contraction risk) to be reinvested at lower rates.", orderIndex: 2 },
  { id: "cfa2-fixed-income-mbs-abs-q04", topicId: "cfa2-fixed-income-mbs-abs", text: "When interest rates rise, MBS face:", optionA: "Contraction risk", optionB: "Extension risk (slower prepayments)", optionC: "No risk", optionD: "Negative coupons", correctOption: "B", explanation: "Rising rates slow prepayments, extending the security's life just as rates become less favorable.", orderIndex: 3 },
  { id: "cfa2-fixed-income-mbs-abs-q05", topicId: "cfa2-fixed-income-mbs-abs", text: "CMOs are created primarily to:", optionA: "Eliminate credit risk", optionB: "Redistribute prepayment risk across tranches", optionC: "Increase the coupon", optionD: "Remove all risk", correctOption: "B", explanation: "Collateralized mortgage obligations carve cash flows into tranches with different prepayment exposures.", orderIndex: 4 },
  { id: "cfa2-fixed-income-mbs-abs-q06", topicId: "cfa2-fixed-income-mbs-abs", text: "In an ABS waterfall, the senior tranche:", optionA: "Absorbs losses first", optionB: "Is paid first and protected by subordinated tranches", optionC: "Has the highest yield", optionD: "Has no rating", correctOption: "B", explanation: "Credit tranching pays senior holders first; subordinated tranches absorb losses, enhancing senior credit quality.", orderIndex: 5 },
  { id: "cfa2-fixed-income-mbs-abs-q07", topicId: "cfa2-fixed-income-mbs-abs", text: "Agency MBS, versus non-agency, generally have:", optionA: "Higher credit risk", optionB: "Minimal credit risk (government backing)", optionC: "No prepayment risk", optionD: "Equity exposure", correctOption: "B", explanation: "Agency MBS carry government/agency guarantees, so credit risk is minimal; prepayment risk remains.", orderIndex: 6 },
  { id: "cfa2-fixed-income-mbs-abs-q08", topicId: "cfa2-fixed-income-mbs-abs", text: "A PAC tranche's prepayment risk is reduced by shifting it to the:", optionA: "Senior tranche", optionB: "Support (companion) tranche", optionC: "Equity tranche", optionD: "Government", correctOption: "B", explanation: "Support tranches absorb prepayment variability so PAC tranches enjoy a more stable schedule.", orderIndex: 7 },
  { id: "cfa2-fixed-income-mbs-abs-q09", topicId: "cfa2-fixed-income-mbs-abs", text: "Auto-loan ABS are ____ , while credit-card ABS are typically ____ .", optionA: "amortizing; non-amortizing (revolving)", optionB: "revolving; amortizing", optionC: "both amortizing", optionD: "both revolving", correctOption: "A", explanation: "Auto loans amortize; credit-card receivables are revolving/non-amortizing with a lockout period.", orderIndex: 8 },
  { id: "cfa2-fixed-income-mbs-abs-q10", topicId: "cfa2-fixed-income-mbs-abs", text: "Overcollateralization and reserve accounts are forms of:", optionA: "Credit enhancement", optionB: "Prepayment", optionC: "Duration", optionD: "Leverage only", correctOption: "A", explanation: "These internal credit enhancements provide a loss buffer that protects senior ABS investors.", orderIndex: 9 },
  { id: "cfa2-fixed-income-mbs-abs-q11", topicId: "cfa2-fixed-income-mbs-abs", text: "Prepayment speeds are commonly measured using:", optionA: "CPR/SMM (and the PSA benchmark)", optionB: "Beta", optionC: "Duration only", optionD: "The dividend yield", correctOption: "A", explanation: "Conditional prepayment rate (CPR), single monthly mortality (SMM), and the PSA model quantify prepayments.", orderIndex: 10 },
  { id: "cfa2-fixed-income-mbs-abs-q12", topicId: "cfa2-fixed-income-mbs-abs", text: "Negative convexity in MBS means that as rates fall, price appreciation is:", optionA: "Greater than a comparable option-free bond", optionB: "Limited because prepayments rise", optionC: "Unaffected", optionD: "Infinite", correctOption: "B", explanation: "Faster prepayments cap upside as rates fall, producing the negative convexity of MBS.", orderIndex: 11 },

  // Interest-rate derivatives & swaptions
  { id: "cfa2-derivatives-interest-rate-q01", topicId: "cfa2-derivatives-interest-rate", text: "An interest-rate cap protects a floating-rate:", optionA: "Lender against falling rates", optionB: "Borrower against rising rates", optionC: "Equity investor", optionD: "Bondholder against default", correctOption: "B", explanation: "A cap pays off when the reference rate exceeds the strike, limiting a borrower's interest cost.", orderIndex: 0 },
  { id: "cfa2-derivatives-interest-rate-q02", topicId: "cfa2-derivatives-interest-rate", text: "An interest-rate cap is economically a series of:", optionA: "Caplets (calls on the reference rate)", optionB: "Floorlets (puts)", optionC: "Forwards only", optionD: "Equity options", correctOption: "A", explanation: "A cap is a portfolio of caplets, each a call option on the reference interest rate.", orderIndex: 1 },
  { id: "cfa2-derivatives-interest-rate-q03", topicId: "cfa2-derivatives-interest-rate", text: "An interest-rate floor protects a floating-rate:", optionA: "Borrower against rising rates", optionB: "Lender/investor against falling rates", optionC: "Equity short seller", optionD: "Issuer of fixed debt", correctOption: "B", explanation: "A floor pays when the reference rate falls below the strike, protecting an investor's income.", orderIndex: 2 },
  { id: "cfa2-derivatives-interest-rate-q04", topicId: "cfa2-derivatives-interest-rate", text: "An interest-rate collar is created by:", optionA: "Buying a cap and selling a floor", optionB: "Buying two caps", optionC: "Selling two floors", optionD: "Buying a swap", correctOption: "A", explanation: "A borrower's collar buys a cap and sells a floor, lowering net premium while bounding the rate.", orderIndex: 3 },
  { id: "cfa2-derivatives-interest-rate-q05", topicId: "cfa2-derivatives-interest-rate", text: "A payer swaption gives the holder the right to:", optionA: "Receive fixed / pay floating", optionB: "Pay fixed / receive floating", optionC: "Buy a stock", optionD: "Sell a bond at par", correctOption: "B", explanation: "A payer swaption is the right to enter a swap paying fixed and receiving floating.", orderIndex: 4 },
  { id: "cfa2-derivatives-interest-rate-q06", topicId: "cfa2-derivatives-interest-rate", text: "A payer swaption gains value when interest rates:", optionA: "Fall", optionB: "Rise", optionC: "Stay flat", optionD: "Are negative", correctOption: "B", explanation: "Paying a now-below-market fixed rate becomes valuable as rates rise — a payer swaption is like a call on rates.", orderIndex: 5 },
  { id: "cfa2-derivatives-interest-rate-q07", topicId: "cfa2-derivatives-interest-rate", text: "A receiver swaption gains value when rates:", optionA: "Rise", optionB: "Fall", optionC: "Are unchanged", optionD: "Double", correctOption: "B", explanation: "The right to receive a now-above-market fixed rate is worth more as rates fall.", orderIndex: 6 },
  { id: "cfa2-derivatives-interest-rate-q08", topicId: "cfa2-derivatives-interest-rate", text: "An interest-rate swap can be viewed as a portfolio of:", optionA: "Equity options", optionB: "Forward rate agreements", optionC: "Currency spots", optionD: "Dividends", correctOption: "B", explanation: "Each swap payment is equivalent to an FRA, so a swap is a strip of FRAs.", orderIndex: 7 },
  { id: "cfa2-derivatives-interest-rate-q09", topicId: "cfa2-derivatives-interest-rate", text: "A company expecting to borrow in 6 months and worried about rising rates could hedge with a:", optionA: "Receiver swaption", optionB: "Payer swaption (or buying a cap/FRA)", optionC: "Long equity call", optionD: "Short floor only", correctOption: "B", explanation: "A payer swaption (or cap/long FRA) locks in protection against higher future borrowing rates.", orderIndex: 8 },
  { id: "cfa2-derivatives-interest-rate-q10", topicId: "cfa2-derivatives-interest-rate", text: "Issuers of callable debt can monetize or hedge the embedded option using:", optionA: "Receiver swaptions", optionB: "Equity futures", optionC: "Commodity forwards", optionD: "Currency swaps only", correctOption: "A", explanation: "A callable bond embeds a receiver-swaption-like option; issuers use swaptions to hedge/monetize call risk.", orderIndex: 9 },
  { id: "cfa2-derivatives-interest-rate-q11", topicId: "cfa2-derivatives-interest-rate", text: "Valuing caps, floors and swaptions requires an input for interest-rate:", optionA: "Dividends", optionB: "Volatility", optionC: "Beta", optionD: "Recovery rate", correctOption: "B", explanation: "Like all options, these are valued using a rate-volatility input within an arbitrage-free model.", orderIndex: 10 },
  { id: "cfa2-derivatives-interest-rate-q12", topicId: "cfa2-derivatives-interest-rate", text: "A floating-rate lender wanting a minimum income could buy a(n):", optionA: "Cap", optionB: "Floor", optionC: "Payer swaption", optionD: "Equity put", correctOption: "B", explanation: "Buying a floor guarantees a minimum interest rate on the lender's floating-rate asset.", orderIndex: 11 },

  // Currency exchange rate determination
  { id: "cfa2-economics-currency-determination-q01", topicId: "cfa2-economics-currency-determination", text: "In a P/B (price/base) quote, the rate gives:", optionA: "Units of base per 1 price currency", optionB: "Units of price currency per 1 base currency", optionC: "The interest differential", optionD: "The inflation rate", correctOption: "B", explanation: "A price/base quote states how many units of the price currency buy one unit of the base currency.", orderIndex: 0 },
  { id: "cfa2-economics-currency-determination-q02", topicId: "cfa2-economics-currency-determination", text: "Forward exchange points are determined by the:", optionA: "Dividend differential", optionB: "Interest-rate differential between the two currencies", optionC: "Equity risk premium", optionD: "Recovery rate", correctOption: "B", explanation: "Covered interest rate parity ties the forward premium/discount to the interest-rate differential.", orderIndex: 1 },
  { id: "cfa2-economics-currency-determination-q03", topicId: "cfa2-economics-currency-determination", text: "Under covered interest rate parity, the higher-yielding currency trades at a forward:", optionA: "Premium", optionB: "Discount", optionC: "Rate equal to spot", optionD: "Indeterminate rate", correctOption: "B", explanation: "The higher-yield currency is at a forward discount, offsetting its interest advantage.", orderIndex: 2 },
  { id: "cfa2-economics-currency-determination-q04", topicId: "cfa2-economics-currency-determination", text: "A cross rate is computed from:", optionA: "A single currency pair", optionB: "Two pairs that share a common currency", optionC: "The risk-free rate", optionD: "Inflation only", correctOption: "B", explanation: "Cross rates are derived by combining two quotes that share a common currency.", orderIndex: 3 },
  { id: "cfa2-economics-currency-determination-q05", topicId: "cfa2-economics-currency-determination", text: "In the Mundell-Fleming model with high capital mobility, expansionary monetary policy tends to:", optionA: "Appreciate the currency", optionB: "Depreciate the currency (via lower rates)", optionC: "Leave it unchanged", optionD: "Raise interest rates", correctOption: "B", explanation: "Lower domestic rates from easy money spur capital outflows, depreciating the currency.", orderIndex: 4 },
  { id: "cfa2-economics-currency-determination-q06", topicId: "cfa2-economics-currency-determination", text: "Monetary models link long-run exchange rates to relative money supply and:", optionA: "Inflation", optionB: "Dividends", optionC: "Beta", optionD: "Duration", correctOption: "A", explanation: "Monetary approaches emphasize relative money growth and inflation as long-run currency drivers.", orderIndex: 5 },
  { id: "cfa2-economics-currency-determination-q07", topicId: "cfa2-economics-currency-determination", text: "The portfolio-balance approach suggests persistent fiscal deficits eventually:", optionA: "Strengthen the currency", optionB: "Pressure the currency lower", optionC: "Have no effect", optionD: "Eliminate inflation", correctOption: "B", explanation: "Mounting government debt can erode confidence and weigh on the currency over time.", orderIndex: 6 },
  { id: "cfa2-economics-currency-determination-q08", topicId: "cfa2-economics-currency-determination", text: "The real exchange rate adjusts the nominal rate for:", optionA: "Relative price levels (inflation)", optionB: "Dividend yields", optionC: "Beta", optionD: "Coupon rates", correctOption: "A", explanation: "The real exchange rate reflects relative purchasing power by accounting for relative price levels.", orderIndex: 7 },
  { id: "cfa2-economics-currency-determination-q09", topicId: "cfa2-economics-currency-determination", text: "Short-term exchange-rate movements are often dominated by:", optionA: "Trade flows", optionB: "Capital flows", optionC: "Dividend payments", optionD: "Coupon resets", correctOption: "B", explanation: "Capital flows responding to relative returns typically dominate trade flows in the short run.", orderIndex: 8 },
  { id: "cfa2-economics-currency-determination-q10", topicId: "cfa2-economics-currency-determination", text: "Central-bank intervention is generally most effective when backed by:", optionA: "No reserves", optionB: "Ample reserves and credibility", optionC: "Higher dividends", optionD: "A stock buyback", correctOption: "B", explanation: "Intervention works best when the central bank has the reserves and credibility to sustain it.", orderIndex: 9 },
  { id: "cfa2-economics-currency-determination-q11", topicId: "cfa2-economics-currency-determination", text: "Capital controls primarily aim to:", optionA: "Permanently fix the real rate", optionB: "Influence capital flows and the currency, usually temporarily", optionC: "Eliminate inflation", optionD: "Raise dividends", correctOption: "B", explanation: "Controls can affect flows and exchange rates in the short run but rarely override fundamentals long-term.", orderIndex: 10 },
  { id: "cfa2-economics-currency-determination-q12", topicId: "cfa2-economics-currency-determination", text: "Expansionary fiscal policy with high capital mobility tends to ____ the currency in the Mundell-Fleming model.", optionA: "Depreciate", optionB: "Appreciate (higher rates attract capital)", optionC: "Not affect", optionD: "Eliminate", correctOption: "B", explanation: "Looser fiscal policy can raise interest rates, attracting capital inflows that appreciate the currency.", orderIndex: 11 },

  // Real estate & REITs
  { id: "cfa2-alternative-investments-real-estate-q01", topicId: "cfa2-alternative-investments-real-estate", text: "Net operating income (NOI) is:", optionA: "Rental income minus operating expenses (before financing and taxes)", optionB: "Net income after taxes", optionC: "Gross rent only", optionD: "Cash flow after debt service", correctOption: "A", explanation: "NOI = property rental income less operating expenses, excluding financing and income taxes.", orderIndex: 0 },
  { id: "cfa2-alternative-investments-real-estate-q02", topicId: "cfa2-alternative-investments-real-estate", text: "Direct capitalization values a property as:", optionA: "NOI × cap rate", optionB: "NOI / cap rate", optionC: "Cap rate / NOI", optionD: "NOI − cap rate", correctOption: "B", explanation: "The income approach divides stabilized NOI by the capitalization rate.", orderIndex: 1 },
  { id: "cfa2-alternative-investments-real-estate-q03", topicId: "cfa2-alternative-investments-real-estate", text: "A lower capitalization rate implies a property value that is:", optionA: "Lower", optionB: "Higher", optionC: "Unchanged", optionD: "Negative", correctOption: "B", explanation: "Since value = NOI / cap rate, a lower cap rate yields a higher value (lower income yield).", orderIndex: 2 },
  { id: "cfa2-alternative-investments-real-estate-q04", topicId: "cfa2-alternative-investments-real-estate", text: "The cap rate is approximately the discount rate minus the:", optionA: "Growth rate of NOI", optionB: "Inflation rate", optionC: "Risk-free rate", optionD: "Vacancy rate", correctOption: "A", explanation: "Analogous to Gordon growth, cap rate ≈ required return − expected NOI growth.", orderIndex: 3 },
  { id: "cfa2-alternative-investments-real-estate-q05", topicId: "cfa2-alternative-investments-real-estate", text: "The four quadrants of real estate are private/public crossed with:", optionA: "Equity and debt", optionB: "Large and small cap", optionC: "Domestic and foreign", optionD: "Growth and value", correctOption: "A", explanation: "Real estate spans private/public equity (property, REITs) and private/public debt (mortgages, MBS).", orderIndex: 4 },
  { id: "cfa2-alternative-investments-real-estate-q06", topicId: "cfa2-alternative-investments-real-estate", text: "Funds from operations (FFO) adjusts net income by adding back:", optionA: "Interest expense", optionB: "Real-estate depreciation (and removing property sale gains)", optionC: "Dividends", optionD: "Taxes", correctOption: "B", explanation: "FFO adds back non-cash depreciation and excludes one-off property sale gains to reflect recurring cash earnings.", orderIndex: 5 },
  { id: "cfa2-alternative-investments-real-estate-q07", topicId: "cfa2-alternative-investments-real-estate", text: "AFFO improves on FFO by subtracting:", optionA: "Dividends", optionB: "Maintenance (recurring) capital expenditures", optionC: "Interest", optionD: "Taxes", correctOption: "B", explanation: "Adjusted FFO deducts recurring maintenance capex, giving a cleaner measure of distributable cash.", orderIndex: 6 },
  { id: "cfa2-alternative-investments-real-estate-q08", topicId: "cfa2-alternative-investments-real-estate", text: "Public REITs, versus direct property, are generally:", optionA: "Less liquid", optionB: "More liquid but more correlated with equities", optionC: "Risk-free", optionD: "Free of management fees", correctOption: "B", explanation: "Listed REITs trade like stocks (more liquid) but show higher short-run correlation with equity markets.", orderIndex: 7 },
  { id: "cfa2-alternative-investments-real-estate-q09", topicId: "cfa2-alternative-investments-real-estate", text: "The cost approach values property as:", optionA: "NOI / cap rate", optionB: "Replacement cost − depreciation + land value", optionC: "PV of dividends", optionD: "Comparable P/E", correctOption: "B", explanation: "The cost approach estimates the cost to rebuild less depreciation, plus land.", orderIndex: 8 },
  { id: "cfa2-alternative-investments-real-estate-q10", topicId: "cfa2-alternative-investments-real-estate", text: "REITs are tax-advantaged because they must:", optionA: "Retain all earnings", optionB: "Distribute most of their income to shareholders", optionC: "Avoid real estate", optionD: "Hold only cash", correctOption: "B", explanation: "REITs largely escape entity-level tax by distributing the bulk of taxable income to investors.", orderIndex: 9 },
  { id: "cfa2-alternative-investments-real-estate-q11", topicId: "cfa2-alternative-investments-real-estate", text: "Real estate in a portfolio is valued for income, diversification and:", optionA: "Inflation sensitivity", optionB: "Guaranteed returns", optionC: "Zero risk", optionD: "Daily liquidity", correctOption: "A", explanation: "Property income tends to rise with inflation, adding an inflation-hedging, diversifying role.", orderIndex: 10 },
  { id: "cfa2-alternative-investments-real-estate-q12", topicId: "cfa2-alternative-investments-real-estate", text: "The DCF approach to property value sums the PV of forecast NOI and the:", optionA: "Reversion (terminal) value", optionB: "Coupon", optionC: "Dividend", optionD: "Risk-free rate", correctOption: "A", explanation: "Property DCF discounts interim NOI plus a terminal (reversion) sale value at the end of the holding period.", orderIndex: 11 },

  // Professionalism & market integrity
  { id: "cfa2-ethics-professionalism-integrity-q01", topicId: "cfa2-ethics-professionalism-integrity", text: "When applicable law is less strict than the Code and Standards, a member must follow:", optionA: "The local law", optionB: "The Code and Standards (the stricter)", optionC: "Neither", optionD: "Client preference", correctOption: "B", explanation: "Standard I(A) requires adhering to the stricter of law or the Code and Standards.", orderIndex: 0 },
  { id: "cfa2-ethics-professionalism-integrity-q02", topicId: "cfa2-ethics-professionalism-integrity", text: "Acting on material nonpublic information violates Standard:", optionA: "II(A) Material Nonpublic Information", optionB: "I(B) Independence", optionC: "III(A) Loyalty", optionD: "VI(B) Priority", correctOption: "A", explanation: "Trading or causing trades on MNPI breaches Standard II(A) Integrity of Capital Markets.", orderIndex: 1 },
  { id: "cfa2-ethics-professionalism-integrity-q03", topicId: "cfa2-ethics-professionalism-integrity", text: "The mosaic theory permits an analyst to:", optionA: "Trade on insider tips", optionB: "Combine public and non-material non-public information to reach a conclusion", optionC: "Spread rumors", optionD: "Front-run clients", correctOption: "B", explanation: "Under the mosaic theory, conclusions from public plus non-material non-public information are permissible.", orderIndex: 2 },
  { id: "cfa2-ethics-professionalism-integrity-q04", topicId: "cfa2-ethics-professionalism-integrity", text: "Wash trades and spoofing are forms of:", optionA: "Market manipulation [II(B)]", optionB: "Fair dealing", optionC: "Diligence", optionD: "Record retention", correctOption: "A", explanation: "Transaction-based manipulation like wash trades/spoofing violates Standard II(B).", orderIndex: 3 },
  { id: "cfa2-ethics-professionalism-integrity-q05", topicId: "cfa2-ethics-professionalism-integrity", text: "Plagiarizing another analyst's report violates Standard:", optionA: "I(C) Misrepresentation", optionB: "II(B) Market Manipulation", optionC: "IV(A) Loyalty", optionD: "VII Conduct", correctOption: "A", explanation: "Plagiarism — using others' work without attribution — is a misrepresentation under I(C).", orderIndex: 4 },
  { id: "cfa2-ethics-professionalism-integrity-q06", topicId: "cfa2-ethics-professionalism-integrity", text: "Firewalls (information barriers) are a recommended procedure for complying with:", optionA: "II(A) Material Nonpublic Information", optionB: "VI(B) Priority of Transactions", optionC: "III(C) Suitability", optionD: "V(C) Record Retention", correctOption: "A", explanation: "Firewalls prevent the flow of MNPI between departments, supporting II(A) compliance.", orderIndex: 5 },
  { id: "cfa2-ethics-professionalism-integrity-q07", topicId: "cfa2-ethics-professionalism-integrity", text: "Dishonesty, fraud, or deceit reflecting on professional integrity violates:", optionA: "I(D) Misconduct", optionB: "II(A) MNPI", optionC: "III(B) Fair Dealing", optionD: "VI(A) Disclosure", correctOption: "A", explanation: "Standard I(D) Misconduct addresses behavior reflecting adversely on professional integrity.", orderIndex: 6 },
  { id: "cfa2-ethics-professionalism-integrity-q08", topicId: "cfa2-ethics-professionalism-integrity", text: "A 'pump-and-dump' scheme is an example of:", optionA: "Information-based market manipulation", optionB: "Fair dealing", optionC: "Suitability analysis", optionD: "Independence", correctOption: "A", explanation: "Spreading false positive information to inflate a price then selling is information-based manipulation under II(B).", orderIndex: 7 },
  { id: "cfa2-ethics-professionalism-integrity-q09", topicId: "cfa2-ethics-professionalism-integrity", text: "Accepting a lavish, influence-seeking gift from a company you cover risks violating:", optionA: "I(B) Independence and Objectivity", optionB: "II(B) Manipulation", optionC: "V(C) Records", optionD: "VII Conduct", correctOption: "A", explanation: "Lavish benefits that could bias judgement threaten independence and objectivity under I(B).", orderIndex: 8 },
  { id: "cfa2-ethics-professionalism-integrity-q10", topicId: "cfa2-ethics-professionalism-integrity", text: "If a member discovers a colleague is violating the law, the member should:", optionA: "Participate", optionB: "Dissociate from the activity (and report as appropriate)", optionC: "Ignore it", optionD: "Profit from it", correctOption: "B", explanation: "Standard I(A) requires members to dissociate from any known violation of law or the Code.", orderIndex: 9 },
  { id: "cfa2-ethics-professionalism-integrity-q11", topicId: "cfa2-ethics-professionalism-integrity", text: "Standard II(A) prohibits a member from MNPI use that would:", optionA: "Benefit clients fairly", optionB: "Harm the integrity of capital markets and disadvantage other investors", optionC: "Improve disclosure", optionD: "Support diligence", correctOption: "B", explanation: "Acting on MNPI undermines market integrity and unfairly disadvantages those without the information.", orderIndex: 10 },
  { id: "cfa2-ethics-professionalism-integrity-q12", topicId: "cfa2-ethics-professionalism-integrity", text: "Guaranteeing a specific return on a volatile fund violates:", optionA: "I(C) Misrepresentation", optionB: "II(A) MNPI", optionC: "III(D) Performance", optionD: "VI(C) Referral Fees", correctOption: "A", explanation: "Promising a return on a risky investment is a misrepresentation under Standard I(C).", orderIndex: 11 },

  // Capital budgeting
  { id: "cfa2-corporate-issuers-capital-budgeting-q01", topicId: "cfa2-corporate-issuers-capital-budgeting", text: "The theoretically preferred capital-budgeting rule is to accept projects with:", optionA: "Positive NPV", optionB: "The shortest payback", optionC: "The highest IRR regardless of NPV", optionD: "Any positive accounting profit", correctOption: "A", explanation: "NPV directly measures the value added to shareholders; accept when NPV > 0.", orderIndex: 0 },
  { id: "cfa2-corporate-issuers-capital-budgeting-q02", topicId: "cfa2-corporate-issuers-capital-budgeting", text: "The IRR is the discount rate at which a project's NPV equals:", optionA: "The initial outlay", optionB: "Zero", optionC: "The terminal value", optionD: "The cost of capital", correctOption: "B", explanation: "IRR is the rate that makes the project's NPV zero; accept if IRR exceeds the cost of capital.", orderIndex: 1 },
  { id: "cfa2-corporate-issuers-capital-budgeting-q03", topicId: "cfa2-corporate-issuers-capital-budgeting", text: "When NPV and IRR rankings conflict for mutually exclusive projects, an analyst should follow:", optionA: "IRR", optionB: "NPV", optionC: "Payback", optionD: "Accounting return", correctOption: "B", explanation: "NPV is the more reliable rule; IRR can mislead due to scale and reinvestment-rate assumptions.", orderIndex: 2 },
  { id: "cfa2-corporate-issuers-capital-budgeting-q04", topicId: "cfa2-corporate-issuers-capital-budgeting", text: "Sunk costs should be:", optionA: "Included in the analysis", optionB: "Excluded from the incremental cash flows", optionC: "Added to NPV", optionD: "Treated as opportunity costs", correctOption: "B", explanation: "Sunk costs are already incurred and irrelevant to the incremental decision.", orderIndex: 3 },
  { id: "cfa2-corporate-issuers-capital-budgeting-q05", topicId: "cfa2-corporate-issuers-capital-budgeting", text: "Financing costs (interest) are excluded from project cash flows because they are:", optionA: "Captured in the discount rate (WACC)", optionB: "Sunk costs", optionC: "Opportunity costs", optionD: "Non-cash", correctOption: "A", explanation: "The required return/WACC reflects financing costs, so including interest in cash flows would double-count.", orderIndex: 4 },
  { id: "cfa2-corporate-issuers-capital-budgeting-q06", topicId: "cfa2-corporate-issuers-capital-budgeting", text: "A drawback of the payback period is that it:", optionA: "Uses NPV", optionB: "Ignores the time value of money and cash flows after payback", optionC: "Overstates risk", optionD: "Requires a discount rate", correctOption: "B", explanation: "Plain payback ignores discounting and any cash flows beyond the payback point.", orderIndex: 5 },
  { id: "cfa2-corporate-issuers-capital-budgeting-q07", topicId: "cfa2-corporate-issuers-capital-budgeting", text: "The profitability index equals:", optionA: "PV of future cash flows / initial investment", optionB: "NPV − outlay", optionC: "IRR / WACC", optionD: "Payback / life", correctOption: "A", explanation: "PI = PV(inflows)/initial outlay; PI > 1 corresponds to a positive NPV.", orderIndex: 6 },
  { id: "cfa2-corporate-issuers-capital-budgeting-q08", topicId: "cfa2-corporate-issuers-capital-budgeting", text: "Non-conventional cash flows (sign changes) can cause IRR to:", optionA: "Always be unique", optionB: "Produce multiple or no IRRs", optionC: "Equal the WACC", optionD: "Be negative only", correctOption: "B", explanation: "Multiple sign changes can yield multiple or no real IRRs, a key IRR weakness.", orderIndex: 7 },
  { id: "cfa2-corporate-issuers-capital-budgeting-q09", topicId: "cfa2-corporate-issuers-capital-budgeting", text: "Changes in net working capital should be:", optionA: "Ignored", optionB: "Included as part of the project's cash flows", optionC: "Treated as sunk", optionD: "Added to the discount rate", correctOption: "B", explanation: "Investment in (and recovery of) working capital is an incremental project cash flow.", orderIndex: 8 },
  { id: "cfa2-corporate-issuers-capital-budgeting-q10", topicId: "cfa2-corporate-issuers-capital-budgeting", text: "The depreciation tax shield in a project equals depreciation times the:", optionA: "Tax rate", optionB: "WACC", optionC: "Growth rate", optionD: "Beta", correctOption: "A", explanation: "Depreciation reduces taxable income, saving cash equal to depreciation × tax rate.", orderIndex: 9 },
  { id: "cfa2-corporate-issuers-capital-budgeting-q11", topicId: "cfa2-corporate-issuers-capital-budgeting", text: "A foregone alternative use of an existing resource is a(n):", optionA: "Sunk cost", optionB: "Opportunity cost (include it)", optionC: "Financing cost", optionD: "Permanent difference", correctOption: "B", explanation: "Opportunity costs of using resources elsewhere are relevant incremental costs.", orderIndex: 10 },
  { id: "cfa2-corporate-issuers-capital-budgeting-q12", topicId: "cfa2-corporate-issuers-capital-budgeting", text: "Real options (e.g., to expand or abandon) add value because they:", optionA: "Are ignored by NPV's flexibility", optionB: "Give management flexibility that static NPV omits", optionC: "Reduce all risk to zero", optionD: "Lower the discount rate", correctOption: "B", explanation: "Real options capture managerial flexibility to adapt, value that a static NPV calculation misses.", orderIndex: 11 },

  // Economics & investment markets
  { id: "cfa2-portfolio-management-economics-markets-q01", topicId: "cfa2-portfolio-management-economics-markets", text: "An asset's value is fundamentally the present value of its:", optionA: "Book value", optionB: "Expected future cash flows", optionC: "Dividend yield", optionD: "Beta", correctOption: "B", explanation: "All valuation reduces to discounting expected future cash flows at a required return.", orderIndex: 0 },
  { id: "cfa2-portfolio-management-economics-markets-q02", topicId: "cfa2-portfolio-management-economics-markets", text: "The required return on an asset can be decomposed into the real risk-free rate, expected inflation and a:", optionA: "Risk premium", optionB: "Dividend", optionC: "Coupon", optionD: "Tax shield", correctOption: "A", explanation: "Required return = real risk-free rate + expected inflation + a risk premium for the asset's risk.", orderIndex: 1 },
  { id: "cfa2-portfolio-management-economics-markets-q03", topicId: "cfa2-portfolio-management-economics-markets", text: "The real risk-free rate is most closely tied to expected:", optionA: "Real GDP growth", optionB: "The dividend yield", optionC: "Credit spreads", optionD: "The VIX", correctOption: "A", explanation: "The real risk-free rate reflects the economy's real growth and the inter-temporal rate of substitution.", orderIndex: 2 },
  { id: "cfa2-portfolio-management-economics-markets-q04", topicId: "cfa2-portfolio-management-economics-markets", text: "Credit spreads typically ____ during recessions.", optionA: "Narrow", optionB: "Widen", optionC: "Stay constant", optionD: "Disappear", correctOption: "B", explanation: "Rising default risk in downturns widens credit spreads (credit is pro-cyclical).", orderIndex: 3 },
  { id: "cfa2-portfolio-management-economics-markets-q05", topicId: "cfa2-portfolio-management-economics-markets", text: "The term premium in default-free bond yields compensates investors for:", optionA: "Default risk", optionB: "Uncertainty about future short rates over a longer horizon", optionC: "Currency risk", optionD: "Equity risk", correctOption: "B", explanation: "Longer maturities carry a term premium for bearing interest-rate (reinvestment/price) uncertainty.", orderIndex: 4 },
  { id: "cfa2-portfolio-management-economics-markets-q06", topicId: "cfa2-portfolio-management-economics-markets", text: "Equities, relative to government bonds, are most sensitive to:", optionA: "The business cycle", optionB: "Coupon payments", optionC: "Storage costs", optionD: "Prepayment", correctOption: "A", explanation: "Equity cash flows are pro-cyclical, so stocks bear a higher, cycle-sensitive risk premium.", orderIndex: 5 },
  { id: "cfa2-portfolio-management-economics-markets-q07", topicId: "cfa2-portfolio-management-economics-markets", text: "A 'pro-cyclical' asset earns a risk premium because it tends to perform poorly:", optionA: "In expansions", optionB: "During recessions (bad times)", optionC: "Never", optionD: "Only in inflation", correctOption: "B", explanation: "Assets that pay off poorly in bad times must offer a premium to compensate investors.", orderIndex: 6 },
  { id: "cfa2-portfolio-management-economics-markets-q08", topicId: "cfa2-portfolio-management-economics-markets", text: "Higher expected inflation generally raises:", optionA: "Nominal bond yields", optionB: "Real GDP", optionC: "The dividend payout", optionD: "Recovery rates", correctOption: "A", explanation: "Nominal yields rise with expected inflation (the inflation component of required return).", orderIndex: 7 },
  { id: "cfa2-portfolio-management-economics-markets-q09", topicId: "cfa2-portfolio-management-economics-markets", text: "Real estate's return profile is best described as:", optionA: "Purely bond-like", optionB: "A blend of bond-like (income) and equity-like (cyclical) features", optionC: "Risk-free", optionD: "Identical to commodities", correctOption: "B", explanation: "Lease income is bond-like while property values are cyclical, giving real estate hybrid characteristics.", orderIndex: 8 },
  { id: "cfa2-portfolio-management-economics-markets-q10", topicId: "cfa2-portfolio-management-economics-markets", text: "Investors' required returns generally rise when risk aversion:", optionA: "Falls", optionB: "Rises", optionC: "Is constant", optionD: "Is zero", correctOption: "B", explanation: "Greater risk aversion increases the risk premium demanded, raising required returns and lowering prices.", orderIndex: 9 },
  { id: "cfa2-portfolio-management-economics-markets-q11", topicId: "cfa2-portfolio-management-economics-markets", text: "The slope of the yield curve embeds market expectations about:", optionA: "Future growth and inflation", optionB: "Dividend policy", optionC: "Share count", optionD: "Audit quality", correctOption: "A", explanation: "The curve's shape reflects expected future short rates, which depend on growth and inflation expectations.", orderIndex: 10 },
  { id: "cfa2-portfolio-management-economics-markets-q12", topicId: "cfa2-portfolio-management-economics-markets", text: "During an economic expansion, credit spreads typically:", optionA: "Widen", optionB: "Narrow", optionC: "Stay fixed", optionD: "Go negative", correctOption: "B", explanation: "Improving conditions lower default risk, narrowing credit spreads in expansions.", orderIndex: 11 }
];
