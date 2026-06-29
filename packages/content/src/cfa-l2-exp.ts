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
  { id: "cfa2-fixed-income-credit-analysis", subjectId: "cfa2-fixed-income", name: "Credit Analysis & Credit Strategies", slug: "credit-analysis", orderIndex: 1 }
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
  { id: "cfa2-fixed-income-credit-analysis-q12", topicId: "cfa2-fixed-income-credit-analysis", text: "In a recovery phase, a credit manager seeking higher returns would most likely:", optionA: "Add lower-rated, higher-spread credit", optionB: "Move entirely to Treasuries", optionC: "Shorten spread duration sharply", optionD: "Sell all credit", correctOption: "A", explanation: "As conditions improve and spreads tighten, adding lower-rated, higher-spread bonds increases return potential.", orderIndex: 11 }
];
