import { defineProgram } from "./builder";
import type { AuthoredMaterial } from "./builder";
import type { Question, Subject, Topic } from "@jyotir/core";
import { expansionTopics as frmExp1Topics, expansionMaterials as frmExp1Materials, expansionQuestions as frmExp1Questions } from "./frm-exp-1";
import { expansionTopics as frmExp2Topics, expansionMaterials as frmExp2Materials, expansionQuestions as frmExp2Questions } from "./frm-exp-2";
import { expansionTopics as frmExp3Topics, expansionMaterials as frmExp3Materials, expansionQuestions as frmExp3Questions } from "./frm-exp-3";
import { expansionTopics as frmExp4Topics, expansionMaterials as frmExp4Materials, expansionQuestions as frmExp4Questions } from "./frm-exp-4";
import { expansionTopics as frmExp5Topics, expansionMaterials as frmExp5Materials, expansionQuestions as frmExp5Questions } from "./frm-exp-5";
import { expansionTopics as frmExp6Topics, expansionMaterials as frmExp6Materials, expansionQuestions as frmExp6Questions } from "./frm-exp-6";

const allSubjects: Subject[] = [
    { id: "frm-foundations", examId: "frm", name: "Foundations of Risk Management", slug: "foundations", orderIndex: 0 },
    { id: "frm-quantitative-analysis", examId: "frm", name: "Quantitative Analysis", slug: "quantitative-analysis", orderIndex: 1 },
    { id: "frm-financial-markets", examId: "frm", name: "Financial Markets & Products", slug: "financial-markets", orderIndex: 2 },
    { id: "frm-valuation-risk-models", examId: "frm", name: "Valuation & Risk Models", slug: "valuation-risk-models", orderIndex: 3 },
    { id: "frm-market-risk", examId: "frm", name: "Market Risk Measurement", slug: "market-risk", orderIndex: 4 },
    { id: "frm-credit-risk", examId: "frm", name: "Credit Risk Measurement", slug: "credit-risk", orderIndex: 5 },
    { id: "frm-operational-risk", examId: "frm", name: "Operational & Integrated Risk", slug: "operational-risk", orderIndex: 6 },
    { id: "frm-liquidity-risk", examId: "frm", name: "Liquidity & Treasury Risk", slug: "liquidity-risk", orderIndex: 7 },
    { id: "frm-investment-risk", examId: "frm", name: "Risk Management in Investment", slug: "investment-risk", orderIndex: 8 },
    { id: "frm-current-issues", examId: "frm", name: "Current Issues in Risk", slug: "current-issues", orderIndex: 9 }
];

const allTopics: Topic[] = [
    {
      id: "frm-foundations-risk-management-capm",
      subjectId: "frm-foundations",
      name: "Risk Management & CAPM",
      slug: "risk-management-capm",
      orderIndex: 0
    },
    {
      id: "frm-quantitative-analysis-volatility-ewma-garch",
      subjectId: "frm-quantitative-analysis",
      name: "Volatility, EWMA & GARCH",
      slug: "volatility-ewma-garch",
      orderIndex: 0
    },
    {
      id: "frm-financial-markets-futures-forwards-hedging",
      subjectId: "frm-financial-markets",
      name: "Futures, Forwards & Hedging",
      slug: "futures-forwards-hedging",
      orderIndex: 0
    },
    {
      id: "frm-valuation-risk-models-value-at-risk",
      subjectId: "frm-valuation-risk-models",
      name: "Value at Risk (VaR)",
      slug: "value-at-risk",
      orderIndex: 0
    },
    {
      id: "frm-market-risk-var-methods-backtesting",
      subjectId: "frm-market-risk",
      name: "VaR Methods & Backtesting",
      slug: "var-methods-backtesting",
      orderIndex: 0
    },
    {
      id: "frm-credit-risk-default-probability-credit-var",
      subjectId: "frm-credit-risk",
      name: "Default Probability & Credit VaR",
      slug: "default-probability-credit-var",
      orderIndex: 0
    },
    {
      id: "frm-operational-risk-basel-accords-raroc",
      subjectId: "frm-operational-risk",
      name: "Basel Accords & RAROC",
      slug: "basel-accords-raroc",
      orderIndex: 0
    },
    {
      id: "frm-liquidity-risk-liquidity-risk-management",
      subjectId: "frm-liquidity-risk",
      name: "Liquidity Risk Management",
      slug: "liquidity-risk-management",
      orderIndex: 0
    },
    {
      id: "frm-investment-risk-portfolio-risk-budgeting",
      subjectId: "frm-investment-risk",
      name: "Portfolio Risk Budgeting",
      slug: "portfolio-risk-budgeting",
      orderIndex: 0
    },
    {
      id: "frm-current-issues-basel-iii-iv-emerging-risks",
      subjectId: "frm-current-issues",
      name: "Basel III/IV & Emerging Risks",
      slug: "basel-iii-iv-emerging-risks",
      orderIndex: 0
    },
    ...frmExp1Topics,
    ...frmExp2Topics,
    ...frmExp3Topics,
    ...frmExp4Topics,
    ...frmExp5Topics,
    ...frmExp6Topics
];

const allMaterials: AuthoredMaterial[] = [
    {
      id: "frm-foundations-risk-management-capm-m01",
      topicId: "frm-foundations-risk-management-capm",
      title: "Risk Management & CAPM",
      content: `**Risk management** is the process of identifying, measuring and controlling the exposures that threaten an institution's value. The FRM curriculum begins here, distinguishing risk types and grounding the trade-off between **risk and return**.

## Types of Risk
- **Market risk** arises from movements in prices, rates and volatility.
- **Credit risk** is the loss from a counterparty's failure to pay.
- **Operational risk** stems from failed processes, people or systems.
- **Liquidity risk** is the inability to transact at fair prices.

## Systematic vs Idiosyncratic
- **Systematic (market) risk** cannot be diversified away and is rewarded.
- **Idiosyncratic (firm-specific) risk** is diversifiable and earns no premium.

## The CAPM
The **Capital Asset Pricing Model** prices only non-diversifiable risk through **beta**:

\`\`\`
E(R_i) = R_f + beta_i * (E(R_m) - R_f)
\`\`\`

where **beta** measures sensitivity to the market and (E(R_m) - R_f) is the **market risk premium**.

| Measure | Formula |
| --- | --- |
| Sharpe ratio | (R_p - R_f) / sigma_p |
| Treynor ratio | (R_p - R_f) / beta_p |
| Jensen's alpha | R_p - [R_f + beta_p*(R_m - R_f)] |

## Risk-Adjusted Performance
- The **Sharpe ratio** divides excess return by total risk; the **Treynor ratio** uses beta instead.
- **Jensen's alpha** is the return above the CAPM prediction, a measure of manager skill.

### Tip
- Beta of 1.0 means the asset moves with the market; only systematic risk earns a premium under CAPM.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "frm-quantitative-analysis-volatility-ewma-garch-m01",
      topicId: "frm-quantitative-analysis-volatility-ewma-garch",
      title: "Volatility, EWMA & GARCH",
      content: `**Volatility** is the standard deviation of returns and the central input to most risk models. Because it changes over time (**volatility clustering**), the FRM tests several estimation schemes.

## Equally Weighted Estimate
The simple historical variance gives each of the past m returns the same weight, which reacts slowly and shows a **ghosting** effect when large moves drop out of the window.

## EWMA
The **exponentially weighted moving average** places more weight on recent returns through a decay factor lambda:

\`\`\`
sigma_n^2 = lambda * sigma_(n-1)^2 + (1 - lambda) * u_(n-1)^2
\`\`\`

- RiskMetrics uses **lambda = 0.94** for daily data.
- A higher lambda gives a smoother, slower-reacting series.

## GARCH(1,1)
**GARCH(1,1)** adds a long-run variance term, so estimates revert toward a mean:

\`\`\`
sigma_n^2 = omega + alpha * u_(n-1)^2 + beta * sigma_(n-1)^2
\`\`\`

| Term | Role |
| --- | --- |
| omega | Constant linked to long-run variance |
| alpha | Weight on the most recent squared return |
| beta | Weight on the previous variance |

- **Persistence** is alpha + beta; it must be below 1 for the model to be **mean-reverting**.
- The long-run variance equals **omega / (1 - alpha - beta)**.
- EWMA is the special case where omega = 0 and alpha + beta = 1.

### Tip
- If alpha + beta is close to 1, shocks to volatility decay very slowly and persistence is high.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "frm-financial-markets-futures-forwards-hedging-m01",
      topicId: "frm-financial-markets-futures-forwards-hedging",
      title: "Futures, Forwards & Hedging",
      content: `**Forwards** and **futures** are contracts to buy or sell an asset at a fixed price on a future date. They are the building blocks for hedging market exposure in the FRM Products section.

## Forwards vs Futures
| Feature | Forward | Future |
| --- | --- | --- |
| Trading | Over-the-counter | Exchange-traded |
| Standardization | Customized | Standardized |
| Settlement | At maturity | Daily marking-to-market |
| Credit risk | Counterparty | Clearinghouse |

## Cost-of-Carry Pricing
For an asset with no income, the **forward price** is:

\`\`\`
F_0 = S_0 * e^(r*T)
\`\`\`

- With a dividend or convenience yield q, F_0 = S_0 * e^((r - q)*T).
- **Contango** is F above spot; **backwardation** is F below spot.

## The Minimum-Variance Hedge
The **hedge ratio** that minimizes variance is:

\`\`\`
h* = rho * (sigma_S / sigma_F)
\`\`\`

where rho is the correlation between spot and futures returns. The **optimal number of contracts** is h* times the position size divided by the futures contract size.

## Basis Risk
- **Basis** = spot price - futures price; it converges to zero at delivery.
- A hedge is imperfect when the asset, maturity or quantity does not match the contract, leaving **basis risk**.

### Tip
- A short hedge protects a holder of the asset; a long hedge protects a future buyer against price rises.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "frm-valuation-risk-models-value-at-risk-m01",
      topicId: "frm-valuation-risk-models-value-at-risk",
      title: "Value at Risk (VaR)",
      content: `**Value at Risk (VaR)** estimates the maximum loss over a horizon at a given confidence level. It is the single most tested concept in the FRM Valuation section.

## Definition
A one-day 99% VaR of 1 million means there is a **1% chance** of losing more than 1 million in a day. VaR answers "how bad can things get" up to a confidence threshold, not beyond it.

## Parametric (Delta-Normal) VaR
Assuming normally distributed returns:

\`\`\`
VaR = z * sigma * sqrt(t) * V
\`\`\`

where z is the standard-normal quantile (**2.33 for 99%, 1.65 for 95%**), sigma is the return volatility, t is the horizon, and V is the portfolio value.

| Confidence | z-value |
| --- | --- |
| 95% | 1.65 |
| 97.5% | 1.96 |
| 99% | 2.33 |

## Scaling and Aggregation
- VaR scales with the **square root of time**: T-day VaR = 1-day VaR * sqrt(T).
- Portfolio VaR is below the sum of component VaRs whenever assets are imperfectly correlated, reflecting **diversification**.

## Expected Shortfall
**Expected Shortfall (ES)**, also called CVaR, is the average loss **beyond** the VaR threshold. It is a **coherent** risk measure that captures tail severity, which VaR ignores.

### Tip
- VaR can violate **subadditivity** for non-normal portfolios, which is the main reason regulators favor Expected Shortfall.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "frm-market-risk-var-methods-backtesting-m01",
      topicId: "frm-market-risk-var-methods-backtesting",
      title: "VaR Methods & Backtesting",
      content: `**Market risk measurement** compares three ways to compute **VaR** and then validates the chosen model through **backtesting** against realized losses.

## Three VaR Approaches
| Method | Key trait |
| --- | --- |
| Parametric | Assumes a distribution; fast but misses fat tails |
| Historical simulation | Reuses actual past returns; no distribution assumption |
| Monte Carlo | Simulates many paths; flexible but compute-heavy |

- **Historical simulation** ranks past profit-and-loss and reads off the percentile.
- **Monte Carlo** can price nonlinear positions but is the slowest method.

## Backtesting
**Backtesting** counts how often actual losses **exceed** the VaR estimate. At 99% one-day VaR, roughly 1% of days should be **exceptions**.

\`\`\`
Expected exceptions = (1 - confidence) * number of days
\`\`\`

## The Basel Traffic-Light Test
Over 250 days at 99% VaR:

| Zone | Exceptions | Action |
| --- | --- | --- |
| Green | 0 to 4 | Model accepted |
| Yellow | 5 to 9 | Multiplier increased |
| Red | 10 or more | Model rejected |

- Too many exceptions implies the model **understates** risk; too few implies it is overly conservative.
- A **conditional coverage** test also checks that exceptions are not clustered in time (independence).

### Tip
- Backtesting needs both correct unconditional coverage and independence of exceptions to validate a VaR model.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "frm-credit-risk-default-probability-credit-var-m01",
      topicId: "frm-credit-risk-default-probability-credit-var",
      title: "Default Probability & Credit VaR",
      content: `**Credit risk** is the loss from a borrower or counterparty failing to meet obligations. The FRM measures it through expected loss, default probability and **Credit VaR**.

## The Loss Building Blocks
**Expected Loss (EL)** combines three drivers:

\`\`\`
EL = PD * LGD * EAD
\`\`\`

| Term | Meaning |
| --- | --- |
| PD | Probability of default |
| LGD | Loss given default (1 - recovery) |
| EAD | Exposure at default |

- **LGD** equals one minus the recovery rate.

## Expected vs Unexpected Loss
- **Expected loss** is priced into spreads and covered by provisions.
- **Unexpected loss** is the volatility of losses, covered by **economic capital**.

## Default Probability
- A bond's **credit spread** approximates PD * LGD over the horizon.
- The **Merton model** treats equity as a call option on firm assets, defaulting when asset value falls below debt.
- **Cumulative** and **marginal** default probabilities link through survival rates.

## Credit VaR
**Credit VaR** is the unexpected loss at a confidence level, the worst credit loss minus the expected loss:

\`\`\`
Credit VaR = Worst-case loss (at confidence) - Expected Loss
\`\`\`

- Default correlation raises portfolio Credit VaR; a higher **copula** correlation fattens the loss tail.

### Tip
- Economic capital is sized to unexpected loss, not expected loss, since expected loss is already provisioned.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "frm-operational-risk-basel-accords-raroc-m01",
      topicId: "frm-operational-risk-basel-accords-raroc",
      title: "Basel Accords & RAROC",
      content: `**Operational risk** is the risk of loss from inadequate processes, people, systems or external events. The Basel framework sets capital for it and **RAROC** links risk to performance.

## The Basel Accords
| Accord | Focus |
| --- | --- |
| Basel I | Credit risk, simple risk weights |
| Basel II | Three pillars; adds operational risk |
| Basel III | Liquidity and capital quality |

- **Pillar 1** sets minimum capital, **Pillar 2** supervisory review, **Pillar 3** market discipline.

## Operational Risk Capital
- Approaches evolved from the **Basic Indicator** and **Standardized** methods toward the loss-data-driven **Standardized Measurement Approach**.
- Loss data is mapped across **event types** and **business lines**.

## RAROC
**Risk-Adjusted Return on Capital** measures return per unit of risk capital:

\`\`\`
RAROC = (Revenue - Costs - Expected Loss) / Economic Capital
\`\`\`

- A project adds value when **RAROC exceeds the hurdle rate** (the cost of equity).
- **Adjusted RAROC** subtracts the risk-free rate from RAROC before comparing to the equity premium.

## Why It Matters
| Use | Benefit |
| --- | --- |
| Capital allocation | Directs capital to high-RAROC units |
| Pricing | Sets risk-based loan pricing |
| Performance | Compares units on a like-for-like basis |

### Tip
- Accept a business line only when its RAROC clears the firm's hurdle rate, not merely when it is positive.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "frm-liquidity-risk-liquidity-risk-management-m01",
      topicId: "frm-liquidity-risk-liquidity-risk-management",
      title: "Liquidity Risk Management",
      content: `**Liquidity risk** is the danger of being unable to meet obligations or trade positions without large losses. The FRM splits it into funding and market liquidity.

## Two Faces of Liquidity
- **Funding liquidity risk** is the inability to raise cash to meet cash-flow needs.
- **Market (trading) liquidity risk** is the inability to sell an asset near its fair value.

## Measuring Market Liquidity
The **liquidity-adjusted VaR** adds a cost-of-liquidation term based on the bid-ask spread:

\`\`\`
LVaR = VaR + 0.5 * (spread) * position value
\`\`\`

| Driver | Effect on liquidity cost |
| --- | --- |
| Wider bid-ask spread | Higher liquidation cost |
| Larger position size | Greater market impact |
| Higher spread volatility | Larger exogenous cost add-on |

## Basel III Liquidity Ratios
- The **Liquidity Coverage Ratio (LCR)** requires enough **high-quality liquid assets** to survive a 30-day stress:

\`\`\`
LCR = HQLA / Net cash outflows over 30 days >= 100%
\`\`\`

- The **Net Stable Funding Ratio (NSFR)** ensures stable funding over a one-year horizon.

## Managing the Risk
- Hold a **liquidity buffer** of HQLA and diversify funding sources and maturities.
- Run **cash-flow gap** analysis and stress scenarios to anticipate shortfalls.

### Tip
- Funding and market liquidity reinforce each other in a crisis, producing a downward **liquidity spiral**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "frm-investment-risk-portfolio-risk-budgeting-m01",
      topicId: "frm-investment-risk-portfolio-risk-budgeting",
      title: "Portfolio Risk Budgeting",
      content: `**Risk budgeting** allocates a portfolio's total risk among positions and factors, the core of risk management in the investment process.

## Portfolio Variance
For two assets, variance depends on weights, volatilities and correlation:

\`\`\`
sigma_p^2 = w1^2*sigma1^2 + w2^2*sigma2^2 + 2*w1*w2*rho*sigma1*sigma2
\`\`\`

- Lower **correlation** reduces portfolio variance, the engine of diversification.

## Marginal and Component Risk
| Measure | Meaning |
| --- | --- |
| Marginal VaR | Change in VaR from a small position increase |
| Incremental VaR | VaR change from adding a whole position |
| Component VaR | Each position's share of total VaR (sums to total) |

- **Component VaR** decomposes total VaR so the parts add back to the whole.

## Tracking Error and Information Ratio
- **Tracking error** is the volatility of active (portfolio minus benchmark) returns.
- The **information ratio** rewards active return per unit of tracking error:

\`\`\`
IR = (R_portfolio - R_benchmark) / Tracking error
\`\`\`

## Risk Parity
- A **risk-parity** portfolio equalizes each asset's risk contribution rather than its capital weight.
- Surplus risk and funded-ratio analysis extend budgeting to **liability-relative** investors.

### Tip
- Component VaRs sum to total VaR, making them the right tool for assigning a risk budget across desks.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "frm-current-issues-basel-iii-iv-emerging-risks-m01",
      topicId: "frm-current-issues-basel-iii-iv-emerging-risks",
      title: "Basel III/IV & Emerging Risks",
      content: `**Current issues** track how the Basel framework and the risk landscape are evolving, from post-crisis capital rules to climate and cyber threats.

## Basel III Capital Strengthening
- Raised the quality and quantity of capital, centered on **Common Equity Tier 1 (CET1)**.
- Added a **capital conservation buffer** and a **countercyclical buffer**.
- Introduced a non-risk-based **leverage ratio** as a backstop:

\`\`\`
Leverage ratio = Tier 1 capital / Total exposure >= 3%
\`\`\`

## Basel III/IV Finalization
| Reform | Aim |
| --- | --- |
| Output floor | Caps internal-model capital relief at 72.5% of standardized |
| Revised standardized approaches | More risk-sensitive credit and operational rules |
| FRTB | Overhauls the trading-book market-risk framework |

- The **Fundamental Review of the Trading Book (FRTB)** replaces VaR with **Expected Shortfall** for regulatory market risk.

## Emerging Risks
- **Climate risk** splits into **physical** and **transition** risk and now enters stress tests.
- **Cyber and operational resilience** risks grow with digital dependence and outsourcing.
- **Model risk** and AI governance demand robust validation of increasingly complex models.
- **Geopolitical** shocks and supply-chain disruptions add fresh sources of correlated loss.

### Tip
- Remember that FRTB shifts the regulatory measure from VaR to Expected Shortfall at a 97.5% confidence level, while the output floor curbs internal-model relief.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    ...frmExp1Materials,
    ...frmExp2Materials,
    ...frmExp3Materials,
    ...frmExp4Materials,
    ...frmExp5Materials,
    ...frmExp6Materials
];

const allQuestions: Question[] = [
    {
      id: "frm-foundations-risk-management-capm-q01",
      topicId: "frm-foundations-risk-management-capm",
      text: "Under the CAPM, which type of risk earns a return premium?",
      optionA: "Idiosyncratic risk",
      optionB: "Systematic (market) risk",
      optionC: "Diversifiable risk",
      optionD: "Firm-specific risk",
      correctOption: "B",
      explanation: "Only non-diversifiable systematic risk, measured by beta, is rewarded; idiosyncratic risk can be diversified away.",
      orderIndex: 0
    },
    {
      id: "frm-foundations-risk-management-capm-q02",
      topicId: "frm-foundations-risk-management-capm",
      text: "In the CAPM equation, beta measures an asset's:",
      optionA: "Total return volatility",
      optionB: "Sensitivity to overall market movements",
      optionC: "Dividend yield",
      optionD: "Default probability",
      correctOption: "B",
      explanation: "Beta is the asset's sensitivity to the market; it scales the market risk premium in CAPM.",
      orderIndex: 1
    },
    {
      id: "frm-foundations-risk-management-capm-q03",
      topicId: "frm-foundations-risk-management-capm",
      text: "The Sharpe ratio divides excess return by:",
      optionA: "Beta",
      optionB: "Market return",
      optionC: "Total risk (standard deviation)",
      optionD: "Tracking error",
      correctOption: "C",
      explanation: "The Sharpe ratio uses total risk in the denominator, whereas the Treynor ratio uses beta.",
      orderIndex: 2
    },
    {
      id: "frm-foundations-risk-management-capm-q04",
      topicId: "frm-foundations-risk-management-capm",
      text: "Jensen's alpha represents the portfolio return:",
      optionA: "Equal to the risk-free rate",
      optionB: "Below the benchmark",
      optionC: "In excess of the CAPM prediction",
      optionD: "Equal to the market return",
      correctOption: "C",
      explanation: "Alpha is the return earned above what CAPM predicts, often used as a measure of manager skill.",
      orderIndex: 3
    },
    {
      id: "frm-foundations-risk-management-capm-q05",
      topicId: "frm-foundations-risk-management-capm",
      text: "An asset with a beta of 1.0 is expected to:",
      optionA: "Outperform the market in every period",
      optionB: "Have zero risk",
      optionC: "Move with the overall market",
      optionD: "Earn only the risk-free rate",
      correctOption: "C",
      explanation: "A beta of 1.0 means the asset moves in line with the market on average.",
      orderIndex: 4
    },
    {
      id: "frm-foundations-risk-management-capm-q06",
      topicId: "frm-foundations-risk-management-capm",
      text: "Which risk can be reduced by holding a well-diversified portfolio?",
      optionA: "Idiosyncratic risk",
      optionB: "Systematic risk",
      optionC: "Market risk",
      optionD: "Undiversifiable risk",
      correctOption: "A",
      explanation: "Idiosyncratic, firm-specific risk is diversifiable; systematic market risk remains regardless of diversification.",
      orderIndex: 5
    },
    {
      id: "frm-foundations-risk-management-capm-q07",
      topicId: "frm-foundations-risk-management-capm",
      text: "The market risk premium in the CAPM is defined as:",
      optionA: "The risk-free rate alone",
      optionB: "The expected market return minus the risk-free rate",
      optionC: "Beta times the risk-free rate",
      optionD: "The total volatility of the market",
      correctOption: "B",
      explanation: "The market risk premium is the expected market return less the risk-free rate.",
      orderIndex: 6
    },
    {
      id: "frm-foundations-risk-management-capm-q08",
      topicId: "frm-foundations-risk-management-capm",
      text: "Credit risk is best described as the risk of loss from:",
      optionA: "Movements in interest rates",
      optionB: "Failed internal processes",
      optionC: "An inability to sell at fair value",
      optionD: "A counterparty failing to meet its obligations",
      correctOption: "D",
      explanation: "Credit risk is the loss arising when a borrower or counterparty fails to pay as promised.",
      orderIndex: 7
    },
    {
      id: "frm-quantitative-analysis-volatility-ewma-garch-q01",
      topicId: "frm-quantitative-analysis-volatility-ewma-garch",
      text: "In the EWMA model, a higher decay factor lambda produces a volatility series that is:",
      optionA: "More jagged and faster to react",
      optionB: "Smoother and slower to react",
      optionC: "Always constant",
      optionD: "Equal to the long-run variance",
      correctOption: "B",
      explanation: "A higher lambda gives recent returns relatively less extra weight, producing a smoother, slower-reacting estimate.",
      orderIndex: 0
    },
    {
      id: "frm-quantitative-analysis-volatility-ewma-garch-q02",
      topicId: "frm-quantitative-analysis-volatility-ewma-garch",
      text: "The RiskMetrics daily EWMA model uses a lambda of approximately:",
      optionA: "0.50",
      optionB: "0.72",
      optionC: "0.94",
      optionD: "1.20",
      correctOption: "C",
      explanation: "RiskMetrics adopts lambda equal to 0.94 for daily volatility estimation.",
      orderIndex: 1
    },
    {
      id: "frm-quantitative-analysis-volatility-ewma-garch-q03",
      topicId: "frm-quantitative-analysis-volatility-ewma-garch",
      text: "In a GARCH(1,1) model, persistence is measured by:",
      optionA: "omega only",
      optionB: "omega divided by alpha",
      optionC: "alpha minus beta",
      optionD: "alpha plus beta",
      correctOption: "D",
      explanation: "Persistence equals alpha plus beta; it must be below 1 for the model to be mean-reverting.",
      orderIndex: 2
    },
    {
      id: "frm-quantitative-analysis-volatility-ewma-garch-q04",
      topicId: "frm-quantitative-analysis-volatility-ewma-garch",
      text: "The long-run variance implied by a GARCH(1,1) model equals:",
      optionA: "omega divided by (1 minus alpha minus beta)",
      optionB: "omega times alpha",
      optionC: "alpha divided by beta",
      optionD: "alpha plus beta",
      correctOption: "A",
      explanation: "The unconditional long-run variance is omega divided by (1 minus alpha minus beta).",
      orderIndex: 3
    },
    {
      id: "frm-quantitative-analysis-volatility-ewma-garch-q05",
      topicId: "frm-quantitative-analysis-volatility-ewma-garch",
      text: "EWMA is a special case of GARCH(1,1) in which:",
      optionA: "omega is zero and alpha plus beta equals 1",
      optionB: "alpha equals beta equals zero",
      optionC: "omega equals 1",
      optionD: "beta is greater than 1",
      correctOption: "A",
      explanation: "Setting omega to zero and alpha plus beta to 1 reduces GARCH(1,1) to the EWMA recursion.",
      orderIndex: 4
    },
    {
      id: "frm-quantitative-analysis-volatility-ewma-garch-q06",
      topicId: "frm-quantitative-analysis-volatility-ewma-garch",
      text: "The tendency of large return moves to be followed by large moves is called:",
      optionA: "Volatility clustering",
      optionB: "Mean reversion",
      optionC: "Heteroskedastic decay",
      optionD: "Ghosting",
      correctOption: "A",
      explanation: "Volatility clustering describes periods of high volatility persisting, a key motivation for EWMA and GARCH.",
      orderIndex: 5
    },
    {
      id: "frm-quantitative-analysis-volatility-ewma-garch-q07",
      topicId: "frm-quantitative-analysis-volatility-ewma-garch",
      text: "A drawback of the equally weighted variance estimate is the ghosting effect, which occurs when:",
      optionA: "Recent returns are overweighted",
      optionB: "Volatility reverts to its mean too quickly",
      optionC: "The variance can never change",
      optionD: "A large past return abruptly drops out of the window",
      correctOption: "D",
      explanation: "Ghosting is the sudden jump in the estimate when a large observation leaves the equally weighted window.",
      orderIndex: 6
    },
    {
      id: "frm-quantitative-analysis-volatility-ewma-garch-q08",
      topicId: "frm-quantitative-analysis-volatility-ewma-garch",
      text: "Compared with EWMA, the GARCH(1,1) model additionally incorporates:",
      optionA: "No weighting of past returns",
      optionB: "Only the most recent squared return",
      optionC: "A fixed lambda of 0.94",
      optionD: "A long-run variance term that drives mean reversion",
      correctOption: "D",
      explanation: "GARCH(1,1) adds the omega term tied to long-run variance, giving it mean reversion that EWMA lacks.",
      orderIndex: 7
    },
    {
      id: "frm-financial-markets-futures-forwards-hedging-q01",
      topicId: "frm-financial-markets-futures-forwards-hedging",
      text: "Which feature distinguishes futures from forward contracts?",
      optionA: "Futures are customized over-the-counter deals",
      optionB: "Futures are exchange-traded and marked-to-market daily",
      optionC: "Futures carry more counterparty credit risk",
      optionD: "Futures settle only at maturity",
      correctOption: "B",
      explanation: "Futures are standardized, exchange-traded, and marked-to-market daily through a clearinghouse, unlike forwards.",
      orderIndex: 0
    },
    {
      id: "frm-financial-markets-futures-forwards-hedging-q02",
      topicId: "frm-financial-markets-futures-forwards-hedging",
      text: "For a non-dividend asset, the cost-of-carry forward price is:",
      optionA: "S_0 minus r times T",
      optionB: "S_0 divided by r",
      optionC: "S_0 times e raised to (r times T)",
      optionD: "S_0 times r times T",
      correctOption: "C",
      explanation: "Under cost of carry with no income, the forward price equals spot compounded at the risk-free rate over T.",
      orderIndex: 1
    },
    {
      id: "frm-financial-markets-futures-forwards-hedging-q03",
      topicId: "frm-financial-markets-futures-forwards-hedging",
      text: "The minimum-variance hedge ratio is equal to:",
      optionA: "The ratio of spot price to futures price",
      optionB: "One minus the correlation",
      optionC: "Futures volatility divided by spot volatility",
      optionD: "Correlation times the ratio of spot volatility to futures volatility",
      correctOption: "D",
      explanation: "The optimal hedge ratio is the correlation multiplied by the ratio of spot to futures return volatility.",
      orderIndex: 2
    },
    {
      id: "frm-financial-markets-futures-forwards-hedging-q04",
      topicId: "frm-financial-markets-futures-forwards-hedging",
      text: "A market is in backwardation when the futures price is:",
      optionA: "Below the spot price",
      optionB: "Above the spot price",
      optionC: "Zero",
      optionD: "Equal to the spot price",
      correctOption: "A",
      explanation: "Backwardation describes a futures price below the spot price; contango is the opposite case.",
      orderIndex: 3
    },
    {
      id: "frm-financial-markets-futures-forwards-hedging-q05",
      topicId: "frm-financial-markets-futures-forwards-hedging",
      text: "Basis is defined as:",
      optionA: "Futures price times the hedge ratio",
      optionB: "Spot price minus futures price",
      optionC: "The risk-free rate",
      optionD: "The sum of spot and futures prices",
      correctOption: "B",
      explanation: "Basis equals the spot price minus the futures price and converges to zero as delivery approaches.",
      orderIndex: 4
    },
    {
      id: "frm-financial-markets-futures-forwards-hedging-q06",
      topicId: "frm-financial-markets-futures-forwards-hedging",
      text: "An investor who already owns an asset and fears a price decline should use a:",
      optionA: "Short hedge",
      optionB: "Long hedge",
      optionC: "Naked call",
      optionD: "Cash-and-carry arbitrage",
      correctOption: "A",
      explanation: "A short hedge (selling futures) protects the value of an asset already held against falling prices.",
      orderIndex: 5
    },
    {
      id: "frm-financial-markets-futures-forwards-hedging-q07",
      topicId: "frm-financial-markets-futures-forwards-hedging",
      text: "Basis risk in a hedge arises mainly when:",
      optionA: "The hedge perfectly matches the exposure",
      optionB: "The hedging instrument or maturity does not match the underlying",
      optionC: "The contract is exchange-cleared",
      optionD: "Futures are marked-to-market daily",
      correctOption: "B",
      explanation: "Basis risk results from mismatches in asset, maturity, or quantity between the position and the hedging contract.",
      orderIndex: 6
    },
    {
      id: "frm-financial-markets-futures-forwards-hedging-q08",
      topicId: "frm-financial-markets-futures-forwards-hedging",
      text: "Compared with a forward, an exchange-traded future largely removes counterparty credit risk because of:",
      optionA: "Daily news disclosure",
      optionB: "The absence of margin",
      optionC: "Customized contract terms",
      optionD: "The clearinghouse acting as central counterparty",
      correctOption: "D",
      explanation: "The clearinghouse interposes itself as central counterparty and collects margin, sharply reducing credit risk.",
      orderIndex: 7
    },
    {
      id: "frm-valuation-risk-models-value-at-risk-q01",
      topicId: "frm-valuation-risk-models-value-at-risk",
      text: "A one-day 99% VaR of 2 million means there is a:",
      optionA: "99% chance of losing exactly 2 million",
      optionB: "Certainty of losing 2 million",
      optionC: "1% chance of losing more than 2 million in a day",
      optionD: "1% chance of gaining 2 million",
      correctOption: "C",
      explanation: "A 99% one-day VaR of 2 million implies a 1% probability that the daily loss exceeds 2 million.",
      orderIndex: 0
    },
    {
      id: "frm-valuation-risk-models-value-at-risk-q02",
      topicId: "frm-valuation-risk-models-value-at-risk",
      text: "In the delta-normal VaR formula, the z-value used for 99% confidence is approximately:",
      optionA: "1.28",
      optionB: "1.65",
      optionC: "1.96",
      optionD: "2.33",
      correctOption: "D",
      explanation: "The one-tailed standard-normal quantile for 99% confidence is about 2.33.",
      orderIndex: 1
    },
    {
      id: "frm-valuation-risk-models-value-at-risk-q03",
      topicId: "frm-valuation-risk-models-value-at-risk",
      text: "To scale a one-day VaR to a 10-day horizon under the square-root-of-time rule, you multiply by:",
      optionA: "10",
      optionB: "The square root of 10",
      optionC: "100",
      optionD: "1",
      correctOption: "B",
      explanation: "VaR scales with the square root of time, so the 10-day VaR is the one-day VaR times the square root of 10.",
      orderIndex: 2
    },
    {
      id: "frm-valuation-risk-models-value-at-risk-q04",
      topicId: "frm-valuation-risk-models-value-at-risk",
      text: "Expected Shortfall (Conditional VaR) measures the:",
      optionA: "Most likely daily gain",
      optionB: "Loss at exactly the VaR level only",
      optionC: "Probability of any loss",
      optionD: "Average loss in the tail beyond the VaR threshold",
      correctOption: "D",
      explanation: "Expected Shortfall is the average of losses that exceed the VaR cutoff, capturing tail severity.",
      orderIndex: 3
    },
    {
      id: "frm-valuation-risk-models-value-at-risk-q05",
      topicId: "frm-valuation-risk-models-value-at-risk",
      text: "Portfolio VaR is generally less than the sum of component VaRs because of:",
      optionA: "Diversification from imperfect correlation",
      optionB: "Higher volatility",
      optionC: "Leverage",
      optionD: "Margin requirements",
      correctOption: "A",
      explanation: "Imperfect correlation among assets produces a diversification benefit, lowering portfolio VaR below the sum of parts.",
      orderIndex: 4
    },
    {
      id: "frm-valuation-risk-models-value-at-risk-q06",
      topicId: "frm-valuation-risk-models-value-at-risk",
      text: "Which property of VaR makes Expected Shortfall preferred by regulators?",
      optionA: "VaR always overstates risk",
      optionB: "VaR ignores the confidence level",
      optionC: "VaR cannot be computed parametrically",
      optionD: "VaR can fail subadditivity for non-normal portfolios",
      correctOption: "D",
      explanation: "VaR can violate subadditivity, so it is not always coherent; Expected Shortfall is coherent and captures the tail.",
      orderIndex: 5
    },
    {
      id: "frm-valuation-risk-models-value-at-risk-q07",
      topicId: "frm-valuation-risk-models-value-at-risk",
      text: "In the delta-normal approach, VaR is computed as z times sigma times the square root of t times:",
      optionA: "The risk-free rate",
      optionB: "The portfolio value",
      optionC: "Beta",
      optionD: "The correlation",
      correctOption: "B",
      explanation: "Parametric VaR equals z times volatility times the square root of the horizon times the portfolio value.",
      orderIndex: 6
    },
    {
      id: "frm-valuation-risk-models-value-at-risk-q08",
      topicId: "frm-valuation-risk-models-value-at-risk",
      text: "Lowering the confidence level of a VaR estimate from 99% to 95% will, all else equal:",
      optionA: "Increase the reported VaR",
      optionB: "Decrease the reported VaR",
      optionC: "Leave VaR unchanged",
      optionD: "Make VaR negative",
      correctOption: "B",
      explanation: "A lower confidence level uses a smaller z-value, producing a smaller VaR figure.",
      orderIndex: 7
    },
    {
      id: "frm-market-risk-var-methods-backtesting-q01",
      topicId: "frm-market-risk-var-methods-backtesting",
      text: "Which VaR method reuses actual historical returns without assuming a distribution?",
      optionA: "Parametric (delta-normal)",
      optionB: "Historical simulation",
      optionC: "Monte Carlo simulation",
      optionD: "Cornish-Fisher expansion",
      correctOption: "B",
      explanation: "Historical simulation ranks observed past profit-and-loss and reads the percentile, making no distributional assumption.",
      orderIndex: 0
    },
    {
      id: "frm-market-risk-var-methods-backtesting-q02",
      topicId: "frm-market-risk-var-methods-backtesting",
      text: "Which VaR approach is best suited to nonlinear portfolios but is the most computationally intensive?",
      optionA: "Parametric VaR",
      optionB: "Historical simulation",
      optionC: "Monte Carlo simulation",
      optionD: "Delta-normal VaR",
      correctOption: "C",
      explanation: "Monte Carlo simulation can capture nonlinear payoffs by simulating many paths, but it is the slowest method.",
      orderIndex: 1
    },
    {
      id: "frm-market-risk-var-methods-backtesting-q03",
      topicId: "frm-market-risk-var-methods-backtesting",
      text: "Over 250 trading days at 99% one-day VaR, the expected number of exceptions is about:",
      optionA: "0",
      optionB: "2.5",
      optionC: "25",
      optionD: "50",
      correctOption: "B",
      explanation: "At 99% confidence, roughly 1% of 250 days, about 2.5 days, are expected to be exceptions.",
      orderIndex: 2
    },
    {
      id: "frm-market-risk-var-methods-backtesting-q04",
      topicId: "frm-market-risk-var-methods-backtesting",
      text: "In the Basel traffic-light backtest, 10 or more exceptions in 250 days places a model in the:",
      optionA: "Red zone",
      optionB: "Yellow zone",
      optionC: "Blue zone",
      optionD: "Green zone",
      correctOption: "A",
      explanation: "Ten or more exceptions fall in the red zone, indicating the model is rejected as understating risk.",
      orderIndex: 3
    },
    {
      id: "frm-market-risk-var-methods-backtesting-q05",
      topicId: "frm-market-risk-var-methods-backtesting",
      text: "A backtest that finds far more exceptions than expected suggests the VaR model:",
      optionA: "Uses too high a confidence level",
      optionB: "Overstates the true risk",
      optionC: "Is perfectly calibrated",
      optionD: "Understates the true risk",
      correctOption: "D",
      explanation: "Too many exceptions mean losses breach VaR more often than they should, so the model understates risk.",
      orderIndex: 4
    },
    {
      id: "frm-market-risk-var-methods-backtesting-q06",
      topicId: "frm-market-risk-var-methods-backtesting",
      text: "A conditional coverage backtest additionally checks that exceptions are:",
      optionA: "Always clustered together",
      optionB: "Greater than 10 per year",
      optionC: "Independent and not clustered in time",
      optionD: "Equal to the confidence level",
      correctOption: "C",
      explanation: "Conditional coverage tests both the correct exception rate and that exceptions occur independently over time.",
      orderIndex: 5
    },
    {
      id: "frm-market-risk-var-methods-backtesting-q07",
      topicId: "frm-market-risk-var-methods-backtesting",
      text: "A key weakness of the parametric VaR method is that it:",
      optionA: "Requires storing all past returns",
      optionB: "Cannot scale across time horizons",
      optionC: "Tends to understate fat-tailed losses",
      optionD: "Is the slowest to compute",
      correctOption: "C",
      explanation: "Assuming normality, parametric VaR underestimates losses when actual returns have fat tails.",
      orderIndex: 6
    },
    {
      id: "frm-market-risk-var-methods-backtesting-q08",
      topicId: "frm-market-risk-var-methods-backtesting",
      text: "The expected number of backtesting exceptions equals:",
      optionA: "The confidence level times the number of days",
      optionB: "The number of days divided by the z-value",
      optionC: "One minus the confidence level, times the number of days",
      optionD: "The VaR amount times volatility",
      correctOption: "C",
      explanation: "Expected exceptions equal (1 minus confidence) multiplied by the number of observation days.",
      orderIndex: 7
    },
    {
      id: "frm-credit-risk-default-probability-credit-var-q01",
      topicId: "frm-credit-risk-default-probability-credit-var",
      text: "Expected Loss on a credit exposure is the product of:",
      optionA: "PD, LGD and EAD",
      optionB: "PD and the risk-free rate",
      optionC: "LGD and volatility",
      optionD: "EAD and beta",
      correctOption: "A",
      explanation: "Expected Loss equals probability of default times loss given default times exposure at default.",
      orderIndex: 0
    },
    {
      id: "frm-credit-risk-default-probability-credit-var-q02",
      topicId: "frm-credit-risk-default-probability-credit-var",
      text: "Loss given default (LGD) is equal to:",
      optionA: "The probability of default",
      optionB: "Exposure at default times beta",
      optionC: "One minus the recovery rate",
      optionD: "The credit spread",
      correctOption: "C",
      explanation: "LGD is the fraction of exposure lost in default, equal to one minus the recovery rate.",
      orderIndex: 1
    },
    {
      id: "frm-credit-risk-default-probability-credit-var-q03",
      topicId: "frm-credit-risk-default-probability-credit-var",
      text: "Economic capital for credit risk is sized to cover:",
      optionA: "Expected loss only",
      optionB: "The risk-free return",
      optionC: "Operating expenses",
      optionD: "Unexpected loss",
      correctOption: "D",
      explanation: "Expected loss is provisioned in pricing; economic capital is held against unexpected loss volatility.",
      orderIndex: 2
    },
    {
      id: "frm-credit-risk-default-probability-credit-var-q04",
      topicId: "frm-credit-risk-default-probability-credit-var",
      text: "In the Merton model, a firm defaults when:",
      optionA: "Its equity rises above its debt",
      optionB: "The value of its assets falls below its debt",
      optionC: "Its recovery rate hits 100%",
      optionD: "Its credit spread reaches zero",
      correctOption: "B",
      explanation: "The Merton model treats equity as a call option and defaults when asset value drops below the debt face value.",
      orderIndex: 3
    },
    {
      id: "frm-credit-risk-default-probability-credit-var-q05",
      topicId: "frm-credit-risk-default-probability-credit-var",
      text: "Credit VaR is most accurately described as:",
      optionA: "The worst-case loss at a confidence level minus the expected loss",
      optionB: "The expected loss plus the risk-free rate",
      optionC: "The probability of default alone",
      optionD: "The total exposure at default",
      correctOption: "A",
      explanation: "Credit VaR is the unexpected loss: the worst-case loss at a confidence level less the expected loss.",
      orderIndex: 4
    },
    {
      id: "frm-credit-risk-default-probability-credit-var-q06",
      topicId: "frm-credit-risk-default-probability-credit-var",
      text: "All else equal, a higher default correlation across a loan portfolio:",
      optionA: "Raises portfolio Credit VaR",
      optionB: "Lowers portfolio Credit VaR",
      optionC: "Eliminates unexpected loss",
      optionD: "Has no effect on the loss distribution",
      correctOption: "A",
      explanation: "Higher default correlation fattens the loss tail, increasing portfolio Credit VaR.",
      orderIndex: 5
    },
    {
      id: "frm-credit-risk-default-probability-credit-var-q07",
      topicId: "frm-credit-risk-default-probability-credit-var",
      text: "A bond's credit spread over the risk-free rate approximately compensates for:",
      optionA: "Expected credit loss (PD times LGD)",
      optionB: "Liquidity gains",
      optionC: "Inflation only",
      optionD: "Currency movements",
      correctOption: "A",
      explanation: "Credit spread broadly compensates investors for expected credit loss, roughly PD times LGD over the horizon.",
      orderIndex: 6
    },
    {
      id: "frm-credit-risk-default-probability-credit-var-q08",
      topicId: "frm-credit-risk-default-probability-credit-var",
      text: "Exposure at default (EAD) represents:",
      optionA: "The recovery rate on collateral",
      optionB: "The amount outstanding and at risk when default occurs",
      optionC: "The probability the borrower defaults",
      optionD: "The fraction lost in default",
      correctOption: "B",
      explanation: "EAD is the expected outstanding exposure subject to loss at the moment of default.",
      orderIndex: 7
    },
    {
      id: "frm-operational-risk-basel-accords-raroc-q01",
      topicId: "frm-operational-risk-basel-accords-raroc",
      text: "Operational risk is the risk of loss arising from:",
      optionA: "Movements in market prices",
      optionB: "Changes in interest rates",
      optionC: "A counterparty defaulting on a loan",
      optionD: "Failed internal processes, people, systems or external events",
      correctOption: "D",
      explanation: "Operational risk covers losses from inadequate or failed processes, people, systems, or external events.",
      orderIndex: 0
    },
    {
      id: "frm-operational-risk-basel-accords-raroc-q02",
      topicId: "frm-operational-risk-basel-accords-raroc",
      text: "Which Basel Accord first introduced an explicit capital charge for operational risk?",
      optionA: "Basel I",
      optionB: "Basel III",
      optionC: "Basel II",
      optionD: "Basel IV",
      correctOption: "C",
      explanation: "Basel II added operational risk capital alongside its three-pillar framework.",
      orderIndex: 1
    },
    {
      id: "frm-operational-risk-basel-accords-raroc-q03",
      topicId: "frm-operational-risk-basel-accords-raroc",
      text: "In the RAROC formula, the numerator subtracts which item from net revenue?",
      optionA: "Economic capital",
      optionB: "The hurdle rate",
      optionC: "The risk-free rate",
      optionD: "Expected loss",
      correctOption: "D",
      explanation: "RAROC's numerator nets revenue and costs and subtracts expected loss, then divides by economic capital.",
      orderIndex: 2
    },
    {
      id: "frm-operational-risk-basel-accords-raroc-q04",
      topicId: "frm-operational-risk-basel-accords-raroc",
      text: "A business line creates value when its RAROC is:",
      optionA: "Equal to zero",
      optionB: "Negative",
      optionC: "Below the risk-free rate",
      optionD: "Above the firm's hurdle rate",
      correctOption: "D",
      explanation: "A project adds value only when RAROC exceeds the hurdle rate (the cost of equity capital).",
      orderIndex: 3
    },
    {
      id: "frm-operational-risk-basel-accords-raroc-q05",
      topicId: "frm-operational-risk-basel-accords-raroc",
      text: "Under Basel II, Pillar 1 specifically addresses:",
      optionA: "Market discipline and disclosure",
      optionB: "Supervisory review",
      optionC: "Minimum capital requirements",
      optionD: "Liquidity coverage",
      correctOption: "C",
      explanation: "Pillar 1 sets minimum regulatory capital; Pillar 2 is supervisory review and Pillar 3 is market discipline.",
      orderIndex: 4
    },
    {
      id: "frm-operational-risk-basel-accords-raroc-q06",
      topicId: "frm-operational-risk-basel-accords-raroc",
      text: "RAROC is primarily used by banks to:",
      optionA: "Forecast interest rates",
      optionB: "Measure inflation",
      optionC: "Allocate capital and set risk-based pricing",
      optionD: "Determine recovery rates",
      correctOption: "C",
      explanation: "RAROC guides capital allocation, risk-based pricing, and like-for-like performance comparison across units.",
      orderIndex: 5
    },
    {
      id: "frm-operational-risk-basel-accords-raroc-q07",
      topicId: "frm-operational-risk-basel-accords-raroc",
      text: "Adjusted RAROC refines the basic measure by:",
      optionA: "Subtracting the risk-free rate before comparison",
      optionB: "Ignoring economic capital",
      optionC: "Adding back expected loss",
      optionD: "Multiplying by beta",
      correctOption: "A",
      explanation: "Adjusted RAROC subtracts the risk-free rate so the result can be compared directly to the equity risk premium.",
      orderIndex: 6
    },
    {
      id: "frm-operational-risk-basel-accords-raroc-q08",
      topicId: "frm-operational-risk-basel-accords-raroc",
      text: "Basel II maps operational loss data across business lines and:",
      optionA: "Interest rate buckets",
      optionB: "Loss event types",
      optionC: "Currency pairs",
      optionD: "Credit ratings",
      correctOption: "B",
      explanation: "Operational loss data is classified by business line and by event type to drive capital estimation.",
      orderIndex: 7
    },
    {
      id: "frm-liquidity-risk-liquidity-risk-management-q01",
      topicId: "frm-liquidity-risk-liquidity-risk-management",
      text: "Funding liquidity risk refers to the inability to:",
      optionA: "Sell an asset near its fair value",
      optionB: "Diversify a portfolio",
      optionC: "Hedge interest rate exposure",
      optionD: "Raise cash to meet cash-flow obligations",
      correctOption: "D",
      explanation: "Funding liquidity risk is the risk of being unable to raise cash to meet obligations as they fall due.",
      orderIndex: 0
    },
    {
      id: "frm-liquidity-risk-liquidity-risk-management-q02",
      topicId: "frm-liquidity-risk-liquidity-risk-management",
      text: "Market (trading) liquidity risk is the risk of:",
      optionA: "A counterparty defaulting",
      optionB: "Rising interest rates",
      optionC: "An operational system failure",
      optionD: "Being unable to sell an asset near its fair value",
      correctOption: "D",
      explanation: "Market liquidity risk is the inability to transact an asset close to its fair value without moving the price.",
      orderIndex: 1
    },
    {
      id: "frm-liquidity-risk-liquidity-risk-management-q03",
      topicId: "frm-liquidity-risk-liquidity-risk-management",
      text: "Liquidity-adjusted VaR (LVaR) adds a cost term based primarily on the:",
      optionA: "Bid-ask spread",
      optionB: "Risk-free rate",
      optionC: "Beta of the asset",
      optionD: "Dividend yield",
      correctOption: "A",
      explanation: "LVaR augments standard VaR with a liquidation-cost term driven by the bid-ask spread.",
      orderIndex: 2
    },
    {
      id: "frm-liquidity-risk-liquidity-risk-management-q04",
      topicId: "frm-liquidity-risk-liquidity-risk-management",
      text: "The Basel III Liquidity Coverage Ratio (LCR) is designed to ensure a bank can survive a stress period of:",
      optionA: "1 year",
      optionB: "90 days",
      optionC: "7 days",
      optionD: "30 days",
      correctOption: "D",
      explanation: "The LCR requires enough high-quality liquid assets to cover net cash outflows over a 30-day stress horizon.",
      orderIndex: 3
    },
    {
      id: "frm-liquidity-risk-liquidity-risk-management-q05",
      topicId: "frm-liquidity-risk-liquidity-risk-management",
      text: "The Net Stable Funding Ratio (NSFR) targets stable funding over a horizon of:",
      optionA: "One year",
      optionB: "30 days",
      optionC: "Ten days",
      optionD: "One quarter",
      correctOption: "A",
      explanation: "The NSFR promotes resilience by requiring stable funding to support assets over a one-year horizon.",
      orderIndex: 4
    },
    {
      id: "frm-liquidity-risk-liquidity-risk-management-q06",
      topicId: "frm-liquidity-risk-liquidity-risk-management",
      text: "In the LCR, the numerator consists of:",
      optionA: "Net cash outflows",
      optionB: "Risk-weighted assets",
      optionC: "Tier 1 capital",
      optionD: "High-quality liquid assets (HQLA)",
      correctOption: "D",
      explanation: "The LCR divides high-quality liquid assets by net cash outflows over 30 days, requiring at least 100%.",
      orderIndex: 5
    },
    {
      id: "frm-liquidity-risk-liquidity-risk-management-q07",
      topicId: "frm-liquidity-risk-liquidity-risk-management",
      text: "Holding a buffer of high-quality liquid assets and diversifying funding sources is a way to:",
      optionA: "Increase leverage",
      optionB: "Raise credit correlation",
      optionC: "Manage liquidity risk",
      optionD: "Reduce diversification",
      correctOption: "C",
      explanation: "A liquidity buffer and diversified, laddered funding reduce the chance of a cash-flow shortfall.",
      orderIndex: 6
    },
    {
      id: "frm-liquidity-risk-liquidity-risk-management-q08",
      topicId: "frm-liquidity-risk-liquidity-risk-management",
      text: "A liquidity spiral describes a crisis in which:",
      optionA: "Spreads always narrow",
      optionB: "Funding and market liquidity reinforce each other downward",
      optionC: "VaR estimates fall to zero",
      optionD: "Recovery rates rise sharply",
      correctOption: "B",
      explanation: "In a liquidity spiral, falling funding and market liquidity feed on each other, deepening the stress.",
      orderIndex: 7
    },
    {
      id: "frm-investment-risk-portfolio-risk-budgeting-q01",
      topicId: "frm-investment-risk-portfolio-risk-budgeting",
      text: "In a two-asset portfolio, lowering the correlation between the assets will:",
      optionA: "Reduce portfolio variance",
      optionB: "Increase portfolio variance",
      optionC: "Leave variance unchanged",
      optionD: "Eliminate all risk",
      correctOption: "A",
      explanation: "Lower correlation reduces the covariance term, decreasing portfolio variance through diversification.",
      orderIndex: 0
    },
    {
      id: "frm-investment-risk-portfolio-risk-budgeting-q02",
      topicId: "frm-investment-risk-portfolio-risk-budgeting",
      text: "Component VaR has the useful property that the components:",
      optionA: "Are independent of position size",
      optionB: "Always equal each other",
      optionC: "Sum to the total portfolio VaR",
      optionD: "Sum to zero",
      correctOption: "C",
      explanation: "Component VaRs are constructed so that they add up exactly to the total portfolio VaR.",
      orderIndex: 1
    },
    {
      id: "frm-investment-risk-portfolio-risk-budgeting-q03",
      topicId: "frm-investment-risk-portfolio-risk-budgeting",
      text: "Marginal VaR measures the change in portfolio VaR from:",
      optionA: "Removing the entire position",
      optionB: "Doubling the portfolio",
      optionC: "A small increase in a position",
      optionD: "Changing the confidence level",
      correctOption: "C",
      explanation: "Marginal VaR is the sensitivity of portfolio VaR to a small change in a given position.",
      orderIndex: 2
    },
    {
      id: "frm-investment-risk-portfolio-risk-budgeting-q04",
      topicId: "frm-investment-risk-portfolio-risk-budgeting",
      text: "Tracking error is defined as the volatility of:",
      optionA: "The benchmark return",
      optionB: "Active (portfolio minus benchmark) returns",
      optionC: "Total portfolio return",
      optionD: "The risk-free rate",
      correctOption: "B",
      explanation: "Tracking error is the standard deviation of the difference between portfolio and benchmark returns.",
      orderIndex: 3
    },
    {
      id: "frm-investment-risk-portfolio-risk-budgeting-q05",
      topicId: "frm-investment-risk-portfolio-risk-budgeting",
      text: "The information ratio is computed as active return divided by:",
      optionA: "The risk-free rate",
      optionB: "Beta",
      optionC: "Tracking error",
      optionD: "Total volatility",
      correctOption: "C",
      explanation: "The information ratio divides active return (over the benchmark) by the tracking error.",
      orderIndex: 4
    },
    {
      id: "frm-investment-risk-portfolio-risk-budgeting-q06",
      topicId: "frm-investment-risk-portfolio-risk-budgeting",
      text: "A risk-parity portfolio is constructed so that each asset contributes:",
      optionA: "An equal amount of capital",
      optionB: "An equal amount of expected return",
      optionC: "Zero risk",
      optionD: "An equal amount of risk",
      correctOption: "D",
      explanation: "Risk parity equalizes each asset's risk contribution rather than its capital weight.",
      orderIndex: 5
    },
    {
      id: "frm-investment-risk-portfolio-risk-budgeting-q07",
      topicId: "frm-investment-risk-portfolio-risk-budgeting",
      text: "Which measure captures the VaR change from adding an entirely new position to a portfolio?",
      optionA: "Component VaR",
      optionB: "Marginal VaR",
      optionC: "Incremental VaR",
      optionD: "Diversified VaR",
      correctOption: "C",
      explanation: "Incremental VaR is the change in total VaR resulting from adding a complete new position.",
      orderIndex: 6
    },
    {
      id: "frm-investment-risk-portfolio-risk-budgeting-q08",
      topicId: "frm-investment-risk-portfolio-risk-budgeting",
      text: "In the two-asset portfolio variance formula, the cross term includes:",
      optionA: "Twice the product of weights, volatilities and correlation",
      optionB: "Only the weights",
      optionC: "The risk-free rate",
      optionD: "The sum of the variances only",
      correctOption: "A",
      explanation: "The covariance term equals two times the product of the two weights, their volatilities, and the correlation.",
      orderIndex: 7
    },
    {
      id: "frm-current-issues-basel-iii-iv-emerging-risks-q01",
      topicId: "frm-current-issues-basel-iii-iv-emerging-risks",
      text: "Basel III strengthened capital quality by emphasizing which core component?",
      optionA: "Subordinated debt",
      optionB: "Common Equity Tier 1 (CET1)",
      optionC: "Goodwill",
      optionD: "Deferred tax assets",
      correctOption: "B",
      explanation: "Basel III centers capital quality on Common Equity Tier 1, the most loss-absorbing form of capital.",
      orderIndex: 0
    },
    {
      id: "frm-current-issues-basel-iii-iv-emerging-risks-q02",
      topicId: "frm-current-issues-basel-iii-iv-emerging-risks",
      text: "The Basel III leverage ratio is a backstop because it is:",
      optionA: "A non-risk-based measure of capital to total exposure",
      optionB: "Risk-weighted by counterparty",
      optionC: "Based only on credit ratings",
      optionD: "Calculated solely from market risk",
      correctOption: "A",
      explanation: "The leverage ratio compares Tier 1 capital to total exposure without risk weighting, acting as a backstop.",
      orderIndex: 1
    },
    {
      id: "frm-current-issues-basel-iii-iv-emerging-risks-q03",
      topicId: "frm-current-issues-basel-iii-iv-emerging-risks",
      text: "The Basel III/IV output floor limits internal-model capital relief to a percentage of the standardized approach of:",
      optionA: "50%",
      optionB: "90%",
      optionC: "72.5%",
      optionD: "100%",
      correctOption: "C",
      explanation: "The output floor caps capital benefits from internal models at 72.5% of the standardized approach.",
      orderIndex: 2
    },
    {
      id: "frm-current-issues-basel-iii-iv-emerging-risks-q04",
      topicId: "frm-current-issues-basel-iii-iv-emerging-risks",
      text: "Under FRTB, the regulatory market-risk measure shifts from VaR to:",
      optionA: "Expected Shortfall",
      optionB: "Beta",
      optionC: "Duration",
      optionD: "Standard deviation",
      correctOption: "A",
      explanation: "The Fundamental Review of the Trading Book replaces VaR with Expected Shortfall for regulatory market risk.",
      orderIndex: 3
    },
    {
      id: "frm-current-issues-basel-iii-iv-emerging-risks-q05",
      topicId: "frm-current-issues-basel-iii-iv-emerging-risks",
      text: "Climate risk is commonly divided into physical risk and:",
      optionA: "Rollover risk",
      optionB: "Settlement risk",
      optionC: "Basis risk",
      optionD: "Transition risk",
      correctOption: "D",
      explanation: "Climate risk splits into physical risk (hazard damage) and transition risk (shifting to a low-carbon economy).",
      orderIndex: 4
    },
    {
      id: "frm-current-issues-basel-iii-iv-emerging-risks-q06",
      topicId: "frm-current-issues-basel-iii-iv-emerging-risks",
      text: "The capital conservation buffer introduced by Basel III is intended to:",
      optionA: "Replace minimum capital entirely",
      optionB: "Build a usable cushion above the minimum during good times",
      optionC: "Lower required capital in downturns to zero",
      optionD: "Increase leverage",
      correctOption: "B",
      explanation: "The conservation buffer accumulates capital above the minimum that can be drawn down under stress.",
      orderIndex: 5
    },
    {
      id: "frm-current-issues-basel-iii-iv-emerging-risks-q07",
      topicId: "frm-current-issues-basel-iii-iv-emerging-risks",
      text: "Under FRTB, the Expected Shortfall measure is calibrated at a confidence level of:",
      optionA: "90%",
      optionB: "97.5%",
      optionC: "95%",
      optionD: "99.9%",
      correctOption: "B",
      explanation: "FRTB sets the Expected Shortfall confidence level at 97.5% for regulatory market-risk capital.",
      orderIndex: 6
    },
    {
      id: "frm-current-issues-basel-iii-iv-emerging-risks-q08",
      topicId: "frm-current-issues-basel-iii-iv-emerging-risks",
      text: "Growing reliance on increasingly complex models has heightened the importance of managing:",
      optionA: "Model risk and validation",
      optionB: "Currency risk",
      optionC: "Dividend risk",
      optionD: "Settlement risk",
      correctOption: "A",
      explanation: "Complex and AI-driven models raise model risk, demanding stronger validation and governance.",
      orderIndex: 7
    },
    ...(frmExp1Questions as Question[]),
    ...(frmExp2Questions as Question[]),
    ...(frmExp3Questions as Question[]),
    ...(frmExp4Questions as Question[]),
    ...(frmExp5Questions as Question[]),
    ...(frmExp6Questions as Question[])
];

const frmBundles = defineProgram(
  [
    {
      exam: {
        id: "frm-1",
        slug: "frm-1",
        name: "FRM Part I",
        tagline: "Foundations · Quant · Markets & Products · Valuation models",
        orderIndex: 8,
        family: "frm",
        familyName: "FRM (GARP)",
        familyTagline: "Financial Risk Manager — pick your part",
        levelLabel: "Part I"
      },
      subjectIds: [
        "frm-foundations",
        "frm-quantitative-analysis",
        "frm-financial-markets",
        "frm-valuation-risk-models"
      ]
    },
    {
      exam: {
        id: "frm-2",
        slug: "frm-2",
        name: "FRM Part II",
        tagline: "Market · Credit · Operational · Liquidity · Investment risk",
        orderIndex: 9,
        family: "frm",
        familyName: "FRM (GARP)",
        familyTagline: "Financial Risk Manager — pick your part",
        levelLabel: "Part II"
      },
      subjectIds: [
        "frm-market-risk",
        "frm-credit-risk",
        "frm-operational-risk",
        "frm-liquidity-risk",
        "frm-investment-risk",
        "frm-current-issues"
      ]
    }
  ],
  { subjects: allSubjects, topics: allTopics, materials: allMaterials, questions: allQuestions }
);

export const frmPart1 = frmBundles[0]!;
export const frmPart2 = frmBundles[1]!;
