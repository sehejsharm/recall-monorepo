// CFA Level II — additional readings (12 questions each).
import type { AuthoredMaterial } from "./builder";
import type { Question, Subject, Topic } from "@jyotir/core";

export const expSubjects: Subject[] = [
  { id: "cfa2-quantitative-methods", examId: "cfa-2", name: "Quantitative Methods", slug: "quantitative-methods", orderIndex: 4 },
  { id: "cfa2-economics", examId: "cfa-2", name: "Economics", slug: "economics", orderIndex: 5 },
  { id: "cfa2-alternative-investments", examId: "cfa-2", name: "Alternative Investments", slug: "alternative-investments", orderIndex: 6 }
];

export const expTopics: Topic[] = [
  { id: "cfa2-quantitative-methods-multiple-regression", subjectId: "cfa2-quantitative-methods", name: "Multiple Regression & Model Misspecification", slug: "multiple-regression", orderIndex: 0 },
  { id: "cfa2-economics-currency-forecasting", subjectId: "cfa2-economics", name: "Currency Exchange Rates & Forecasting", slug: "currency-forecasting", orderIndex: 0 },
  { id: "cfa2-equity-price-multiples", subjectId: "cfa2-equity", name: "Price & Enterprise-Value Multiples", slug: "price-multiples", orderIndex: 2 },
  { id: "cfa2-alternative-investments-pe-real-estate", subjectId: "cfa2-alternative-investments", name: "Private Equity & Real Estate Valuation", slug: "pe-real-estate", orderIndex: 0 }
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
  { id: "cfa2-alternative-investments-pe-real-estate-q12", topicId: "cfa2-alternative-investments-pe-real-estate", text: "DPI (distributions to paid-in capital) measures a private fund's:", optionA: "Unrealized value only", optionB: "Realized cash returned to investors relative to capital contributed", optionC: "Management fee", optionD: "Leverage ratio", correctOption: "B", explanation: "DPI is the ratio of cumulative distributions to paid-in capital—the realized, cash-on-cash return to LPs.", orderIndex: 11 }
];
