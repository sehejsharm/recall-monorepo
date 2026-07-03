import { defineBundle } from "./builder";
import type { Question } from "@jyotir/core";
import { expansionTopics as cfaExp1Topics, expansionMaterials as cfaExp1Materials, expansionQuestions as cfaExp1Questions } from "./cfa-exp-1";
import { expansionTopics as cfaExp2Topics, expansionMaterials as cfaExp2Materials, expansionQuestions as cfaExp2Questions } from "./cfa-exp-2";
import { expansionTopics as cfaExp3Topics, expansionMaterials as cfaExp3Materials, expansionQuestions as cfaExp3Questions } from "./cfa-exp-3";
import { expansionTopics as cfaExp4Topics, expansionMaterials as cfaExp4Materials, expansionQuestions as cfaExp4Questions } from "./cfa-exp-4";
import { expansionTopics as cfaExp5Topics, expansionMaterials as cfaExp5Materials, expansionQuestions as cfaExp5Questions } from "./cfa-exp-5";
import { expansionTopics as cfaExp6Topics, expansionMaterials as cfaExp6Materials, expansionQuestions as cfaExp6Questions } from "./cfa-exp-6";
import { cfaL1TopUp } from "./cfa-exp-7";
import { exp8Topics, exp8Materials, exp8Questions } from "./cfa-exp-8";
import { exp9Topics, exp9Materials, exp9Questions } from "./cfa-exp-9";
import { exp10Topics, exp10Materials, exp10Questions } from "./cfa-exp-10";

export const cfaLevel1 = defineBundle({
  exam: {
    id: "cfa-1",
    slug: "cfa-1",
    name: "CFA Level I",
    tagline: "Foundations: Ethics · FRA · Equity · Fixed Income · Derivatives",
    orderIndex: 5,
    family: "cfa",
    familyName: "CFA Program",
    familyTagline: "Chartered Financial Analyst — pick your level",
    levelLabel: "Level I"
  },
  subjects: [
    { id: "cfa-ethics", examId: "cfa-1", name: "Ethics & Professional Standards", slug: "ethics", orderIndex: 0 },
    { id: "cfa-quantitative-methods", examId: "cfa-1", name: "Quantitative Methods", slug: "quantitative-methods", orderIndex: 1 },
    { id: "cfa-economics", examId: "cfa-1", name: "Economics", slug: "economics", orderIndex: 2 },
    { id: "cfa-financial-reporting", examId: "cfa-1", name: "Financial Statement Analysis", slug: "financial-reporting", orderIndex: 3 },
    { id: "cfa-corporate-issuers", examId: "cfa-1", name: "Corporate Issuers", slug: "corporate-issuers", orderIndex: 4 },
    { id: "cfa-equity", examId: "cfa-1", name: "Equity Investments", slug: "equity", orderIndex: 5 },
    { id: "cfa-fixed-income", examId: "cfa-1", name: "Fixed Income", slug: "fixed-income", orderIndex: 6 },
    { id: "cfa-derivatives", examId: "cfa-1", name: "Derivatives", slug: "derivatives", orderIndex: 7 },
    { id: "cfa-alternative-investments", examId: "cfa-1", name: "Alternative Investments", slug: "alternative-investments", orderIndex: 8 },
    { id: "cfa-portfolio-management", examId: "cfa-1", name: "Portfolio Management", slug: "portfolio-management", orderIndex: 9 }
  ],
  topics: [
    {
      id: "cfa-ethics-code-of-ethics-standards",
      subjectId: "cfa-ethics",
      name: "Code of Ethics & Standards",
      slug: "code-of-ethics-standards",
      orderIndex: 0
    },
    {
      id: "cfa-quantitative-methods-time-value-of-money",
      subjectId: "cfa-quantitative-methods",
      name: "Time Value of Money",
      slug: "time-value-of-money",
      orderIndex: 0
    },
    {
      id: "cfa-economics-market-structures",
      subjectId: "cfa-economics",
      name: "Market Structures",
      slug: "market-structures",
      orderIndex: 0
    },
    {
      id: "cfa-financial-reporting-financial-ratios-analysis",
      subjectId: "cfa-financial-reporting",
      name: "Financial Ratios & Analysis",
      slug: "financial-ratios-analysis",
      orderIndex: 0
    },
    {
      id: "cfa-corporate-issuers-cost-of-capital",
      subjectId: "cfa-corporate-issuers",
      name: "Cost of Capital",
      slug: "cost-of-capital",
      orderIndex: 0
    },
    {
      id: "cfa-equity-equity-valuation-ddm",
      subjectId: "cfa-equity",
      name: "Equity Valuation: DDM",
      slug: "equity-valuation-ddm",
      orderIndex: 0
    },
    {
      id: "cfa-fixed-income-duration-convexity",
      subjectId: "cfa-fixed-income",
      name: "Duration & Convexity",
      slug: "duration-convexity",
      orderIndex: 0
    },
    {
      id: "cfa-derivatives-options-put-call-parity",
      subjectId: "cfa-derivatives",
      name: "Options: Put-Call Parity",
      slug: "options-put-call-parity",
      orderIndex: 0
    },
    {
      id: "cfa-alternative-investments-hedge-funds-private-equity",
      subjectId: "cfa-alternative-investments",
      name: "Hedge Funds & Private Equity",
      slug: "hedge-funds-private-equity",
      orderIndex: 0
    },
    {
      id: "cfa-portfolio-management-portfolio-risk-return-capm",
      subjectId: "cfa-portfolio-management",
      name: "Portfolio Risk, Return & CAPM",
      slug: "portfolio-risk-return-capm",
      orderIndex: 0
    },
    ...cfaExp1Topics,
    ...cfaExp2Topics,
    ...cfaExp3Topics,
    ...cfaExp4Topics,
    ...cfaExp5Topics,
    ...cfaExp6Topics,
    ...exp8Topics,
    ...exp9Topics,
    ...exp10Topics
  ],
  materials: [
    {
      id: "cfa-ethics-code-of-ethics-standards-m01",
      topicId: "cfa-ethics-code-of-ethics-standards",
      title: "Code of Ethics & Standards",
      content: `The **Code of Ethics** and the **Standards of Professional Conduct** are the ethical backbone of the CFA Program and the most heavily weighted topic at every level.

## The Seven Standards
| # | Standard | Core idea |
| --- | --- | --- |
| I | Professionalism | Knowledge of law, independence, no misrepresentation |
| II | Integrity of Capital Markets | No material nonpublic information, no manipulation |
| III | Duties to Clients | Loyalty, fair dealing, suitability, performance, confidentiality |
| IV | Duties to Employers | Loyalty, no improper compensation, supervision |
| V | Investment Analysis | Diligence, communication, record retention |
| VI | Conflicts of Interest | Disclosure, priority of transactions, referral fees |
| VII | Responsibilities as a Member | No conduct compromising the CFA designation |

## Key Principles
- **Loyalty, prudence, and care** to clients require placing **client interests before your own** and the employer's.
- Under **Standard II(A)**, members must not act or cause others to act on **material nonpublic information**.
- **Standard III(B) Fair Dealing** requires treating all clients fairly when disseminating recommendations; it does not require identical treatment.
- The **Mosaic Theory** lets analysts combine public and **nonmaterial nonpublic** information into a recommendation without violating insider rules.

### When Laws Conflict
- Members must follow the **stricter** of the applicable law or the Code and Standards.

### Tip
- When in doubt, the more conservative action that protects client interests and market integrity is almost always the compliant answer.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "cfa-quantitative-methods-time-value-of-money-m01",
      topicId: "cfa-quantitative-methods-time-value-of-money",
      title: "Time Value of Money",
      content: `The **time value of money (TVM)** captures the core idea that a dollar today is worth more than a dollar tomorrow because it can earn a return.

## Core Formulas
The future value of a single sum compounds at rate r over n periods:

\`\`\`
FV = PV * (1 + r)^n
PV = FV / (1 + r)^n
\`\`\`

- **PV** is present value, **FV** is future value, **r** is the periodic rate, **n** is the number of periods.

## Annuities
- An **ordinary annuity** pays at the **end** of each period; an **annuity due** pays at the **beginning**.
- An annuity due is worth more: multiply the ordinary annuity value by **(1 + r)**.
- A **perpetuity** pays forever: PV = PMT / r.

## Compounding Frequency
With m compounding periods per year and stated rate r:

\`\`\`
EAR = (1 + r/m)^m - 1
\`\`\`

| Frequency | m |
| --- | --- |
| Annual | 1 |
| Semiannual | 2 |
| Quarterly | 4 |
| Monthly | 12 |

- More frequent compounding raises the **effective annual rate (EAR)** above the stated rate.
- **Continuous compounding** gives FV = PV * e^(r*n).

### Tip
- Always match the rate and the number of periods to the same frequency before computing; a mismatch is the most common TVM error.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "cfa-economics-market-structures-m01",
      topicId: "cfa-economics-market-structures",
      title: "Market Structures",
      content: `**Market structure** describes how the number of firms, product differentiation, and barriers to entry shape pricing power and long-run profits.

## The Four Structures
| Structure | Sellers | Barriers | Pricing power |
| --- | --- | --- | --- |
| Perfect competition | Many | None | Price taker |
| Monopolistic competition | Many | Low | Some |
| Oligopoly | Few | High | Considerable |
| Monopoly | One | Very high | Greatest |

## Perfect Competition
- Firms are **price takers**; the demand curve facing a single firm is **perfectly elastic** (horizontal).
- In the long run, economic profit is driven to **zero** because entry is free.
- Profit is maximized where **marginal revenue equals marginal cost (MR = MC)**.

## Monopoly
- A single seller faces the **downward-sloping market demand** curve and sets MR = MC, then charges the price the demand curve allows.
- Sources of monopoly include **economies of scale**, patents, control of resources, and government licensing.

## Measuring Concentration
- The **Herfindahl-Hirschman Index (HHI)** sums the squared market shares of all firms; higher HHI means more concentration.
- The **N-firm concentration ratio** adds the shares of the largest N firms but ignores mergers among leaders.

### Tip
- In every structure a profit-maximizing firm produces where MR = MC; what differs is the shape of the demand curve it faces.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "cfa-financial-reporting-financial-ratios-analysis-m01",
      topicId: "cfa-financial-reporting-financial-ratios-analysis",
      title: "Financial Ratios & Analysis",
      content: `**Ratio analysis** converts financial statements into comparable measures of liquidity, solvency, efficiency, and profitability.

## Liquidity Ratios
- **Current ratio** = current assets / current liabilities.
- **Quick ratio** = (cash + marketable securities + receivables) / current liabilities; it excludes inventory.

## Solvency Ratios
\`\`\`
Debt-to-equity = Total debt / Total equity
Interest coverage = EBIT / Interest expense
\`\`\`

## Profitability Ratios
| Ratio | Formula |
| --- | --- |
| Gross margin | Gross profit / Revenue |
| Net margin | Net income / Revenue |
| Return on assets (ROA) | Net income / Total assets |
| Return on equity (ROE) | Net income / Equity |

## DuPont Analysis
The three-part **DuPont** decomposition breaks ROE into drivers:

\`\`\`
ROE = Net margin * Asset turnover * Financial leverage
\`\`\`

- **Net margin** measures profitability, **asset turnover** measures efficiency, and **financial leverage** (assets / equity) measures the use of debt.
- A rising ROE driven mainly by leverage signals more risk, not better operations.

### Activity Ratios
- **Inventory turnover** = COGS / average inventory; higher turnover means inventory sells faster.
- **Receivables turnover** = revenue / average receivables.

### Tip
- Always compare a ratio against the company's history and industry peers; a single number in isolation tells you little.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "cfa-corporate-issuers-cost-of-capital-m01",
      topicId: "cfa-corporate-issuers-cost-of-capital",
      title: "Cost of Capital",
      content: `The **cost of capital** is the required return a firm must earn to satisfy its providers of capital, and it serves as the **discount rate** for evaluating projects.

## Weighted Average Cost of Capital
The **WACC** weights each source by its market-value proportion:

\`\`\`
WACC = (E/V)*Re + (D/V)*Rd*(1 - t)
\`\`\`

- **E** is equity value, **D** is debt value, **V = E + D**, **Re** is cost of equity, **Rd** is cost of debt, and **t** is the marginal tax rate.
- Interest on debt is **tax-deductible**, so the after-tax cost of debt is **Rd * (1 - t)**.

## Cost of Equity
The most common estimate uses the **CAPM**:

\`\`\`
Re = Rf + beta * (Rm - Rf)
\`\`\`

| Input | Meaning |
| --- | --- |
| Rf | Risk-free rate |
| beta | Sensitivity to market risk |
| Rm - Rf | Equity risk premium |

- An alternative for dividend-paying firms is the **dividend discount model**: Re = D1 / P0 + g.

## Using WACC Correctly
- Use **target** (not historical) capital structure weights and **market** values, not book values.
- Apply WACC only to projects with risk similar to the firm's average; riskier projects need a higher discount rate.

### Tip
- Forgetting the (1 - t) tax shield on debt is the single most common cost-of-capital mistake.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "cfa-equity-equity-valuation-ddm-m01",
      topicId: "cfa-equity-equity-valuation-ddm",
      title: "Equity Valuation: DDM",
      content: `The **dividend discount model (DDM)** values a stock as the present value of all expected future dividends, discounted at the required return on equity.

## Gordon Growth Model
For a dividend growing at a constant rate g forever:

\`\`\`
V0 = D1 / (r - g)
\`\`\`

- **D1** is next year's dividend (D0 * (1 + g)), **r** is the required return, and **g** is the constant growth rate.
- The model requires **r greater than g**; otherwise the value is undefined or negative.

## Sustainable Growth
The growth rate a firm can sustain from retained earnings:

\`\`\`
g = Retention ratio * ROE = b * ROE
\`\`\`

- **b** is the retention ratio (1 minus the dividend payout ratio).

## Multistage DDM
| Stage | Assumption |
| --- | --- |
| High growth | Above-normal g for n years |
| Transition | g declines toward maturity |
| Terminal | Constant g via Gordon model |

- The **terminal value** is found with the Gordon model at the start of the stable phase, then discounted back to today.

## Strengths and Limits
- DDM works best for **stable, dividend-paying** firms with predictable payout policies.
- It is unreliable for firms that pay **no dividends** or have growth above the discount rate; use free-cash-flow models instead.

### Tip
- Sensitivity to (r - g) is extreme: small changes in either input swing the Gordon value sharply, so stress-test your assumptions.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "cfa-fixed-income-duration-convexity-m01",
      topicId: "cfa-fixed-income-duration-convexity",
      title: "Duration & Convexity",
      content: `**Duration** and **convexity** measure how a bond's price responds to changes in yield, the cornerstone of interest-rate risk management.

## Duration
- **Macaulay duration** is the weighted average time to receive a bond's cash flows, measured in years.
- **Modified duration** estimates the percentage price change for a 1% change in yield:

\`\`\`
Modified duration = Macaulay duration / (1 + y/m)
%change in price ~= -Modified duration * change in yield
\`\`\`

- Duration and price move **inversely** to yield: when yields rise, prices fall.

## Drivers of Duration
| Factor | Effect on duration |
| --- | --- |
| Longer maturity | Higher duration |
| Lower coupon | Higher duration |
| Lower yield | Higher duration |

- A **zero-coupon bond** has Macaulay duration equal to its maturity.

## Convexity
- Duration is a **linear** approximation; the true price-yield curve is **convex**.
- For large yield moves, add the **convexity** adjustment for accuracy:

\`\`\`
%change in price ~= -ModDur * dy + 0.5 * Convexity * (dy)^2
\`\`\`

- Positive convexity helps the investor: prices rise more when yields fall than they drop when yields rise by the same amount.

### Tip
- Use modified duration for small yield changes; always include convexity once the yield shift is large.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "cfa-derivatives-options-put-call-parity-m01",
      topicId: "cfa-derivatives-options-put-call-parity",
      title: "Options: Put-Call Parity",
      content: `**Put-call parity** is a no-arbitrage relationship that links the prices of a European call, a European put, the underlying asset, and a risk-free bond.

## The Parity Equation
For options with the same strike K and expiration T on the same underlying:

\`\`\`
C + PV(K) = P + S
\`\`\`

- **C** is the call price, **P** is the put price, **S** is the spot price, and **PV(K)** is the present value of the strike, K / (1 + r)^T.
- The left side (call plus a bond paying K) is the **fiduciary call**; the right side (put plus stock) is the **protective put**. Both produce identical payoffs.

## Rearranging Parity
| Solve for | Expression |
| --- | --- |
| Call | C = P + S - PV(K) |
| Put | P = C - S + PV(K) |
| Stock | S = C - P + PV(K) |
| Bond | PV(K) = P + S - C |

## Synthetic Positions
- A **synthetic call** = put + stock - bond; a **synthetic put** = call - stock + bond.
- If the parity relation does not hold, an **arbitrage** opportunity exists: buy the cheaper side and sell the dearer side.

### Notes
- Parity holds strictly for **European** options on non-dividend-paying assets; dividends reduce S by their present value.

### Tip
- Memorize fiduciary call equals protective put; from that single identity you can derive every synthetic position on the exam.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "cfa-alternative-investments-hedge-funds-private-equity-m01",
      topicId: "cfa-alternative-investments-hedge-funds-private-equity",
      title: "Hedge Funds & Private Equity",
      content: `**Hedge funds** and **private equity** are alternative investments that pursue absolute returns using strategies and structures unavailable to traditional long-only funds.

## Hedge Fund Strategies
| Strategy | Approach |
| --- | --- |
| Equity long/short | Long undervalued, short overvalued names |
| Event-driven | Mergers, distressed, special situations |
| Relative value | Exploit pricing differences between related assets |
| Macro | Bets on rates, currencies, and economies |

- Hedge funds use **leverage**, **short selling**, and **derivatives** to seek returns uncorrelated with markets.

## Fee Structure
The classic **"2 and 20"** model charges a management fee plus an incentive fee:

\`\`\`
Total fee = 2% of assets + 20% of profits above a hurdle
\`\`\`

- A **high-water mark** ensures incentive fees are paid only on new net profits, not on recovering prior losses.

## Private Equity
- **Venture capital** funds early-stage companies; **buyout (LBO)** funds acquire mature firms using heavy debt.
- The **J-curve** describes early negative returns from fees and write-downs, followed by gains as investments mature and exit.
- Exits occur via **IPO**, **trade sale**, or **secondary sale** to another fund.

### Risks and Liquidity
- Both are **illiquid**, have long lock-up periods, and carry **survivorship** and **backfill** biases in reported index returns.

### Tip
- Net-of-fee returns matter most; the 2-and-20 structure can consume a large share of gross performance.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "cfa-portfolio-management-portfolio-risk-return-capm-m01",
      topicId: "cfa-portfolio-management-portfolio-risk-return-capm",
      title: "Portfolio Risk, Return & CAPM",
      content: `**Modern portfolio theory** shows how combining assets reduces risk, and the **CAPM** prices the systematic risk that diversification cannot remove.

## Portfolio Return and Risk
- Portfolio return is the **weighted average** of asset returns.
- Two-asset portfolio variance depends on the **correlation** between the assets:

\`\`\`
Var(p) = w1^2*s1^2 + w2^2*s2^2 + 2*w1*w2*Cov(1,2)
\`\`\`

- The lower the **correlation**, the greater the **diversification** benefit; perfect positive correlation gives no benefit.

## Systematic vs Unsystematic Risk
- **Unsystematic** (firm-specific) risk is **diversifiable** and earns no premium.
- **Systematic** (market) risk, measured by **beta**, cannot be diversified away and is the only risk rewarded.

## The CAPM
The required return rises linearly with beta along the **Security Market Line**:

\`\`\`
E(R) = Rf + beta * (Rm - Rf)
\`\`\`

| Term | Meaning |
| --- | --- |
| Rf | Risk-free rate |
| beta | Systematic risk measure |
| Rm - Rf | Market risk premium |

- A **beta of 1** moves with the market; beta above 1 is more volatile, below 1 less volatile.

### Performance Measures
- The **Sharpe ratio** = (Rp - Rf) / standard deviation rewards total-risk-adjusted return.

### Tip
- Only systematic risk is priced; a stock with high total volatility but low beta still has a modest required return under CAPM.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    ...cfaExp1Materials,
    ...cfaExp2Materials,
    ...cfaExp3Materials,
    ...cfaExp4Materials,
    ...cfaExp5Materials,
    ...cfaExp6Materials,
    ...exp8Materials,
    ...exp9Materials,
    ...exp10Materials
  ],
  questions: [
    {
      id: "cfa-ethics-code-of-ethics-standards-q01",
      topicId: "cfa-ethics-code-of-ethics-standards",
      text: "When the applicable local law is less strict than the CFA Institute Code and Standards, a member must comply with the:",
      optionA: "Code and Standards, because they are stricter",
      optionB: "less strict local law, since law overrides the Code",
      optionC: "law of the member's home country only",
      optionD: "employer's internal policy regardless of either",
      correctOption: "A",
      explanation: "Members must always follow the stricter of applicable law or the Code and Standards.",
      orderIndex: 0
    },
    {
      id: "cfa-ethics-code-of-ethics-standards-q02",
      topicId: "cfa-ethics-code-of-ethics-standards",
      text: "An analyst combines several pieces of public and nonmaterial nonpublic information to form a buy recommendation. This approach is best described as:",
      optionA: "a violation of the prohibition on insider trading",
      optionB: "the Mosaic Theory, which is permitted",
      optionC: "front running of client orders",
      optionD: "a breach of the duty of loyalty to employers",
      correctOption: "B",
      explanation: "The Mosaic Theory permits combining public and nonmaterial nonpublic information.",
      orderIndex: 1
    },
    {
      id: "cfa-ethics-code-of-ethics-standards-q03",
      topicId: "cfa-ethics-code-of-ethics-standards",
      text: "Under the duty of loyalty, prudence, and care, a member managing client assets must place the interests of:",
      optionA: "the employer ahead of all other parties",
      optionB: "the member ahead of the client to ensure retention",
      optionC: "the client ahead of the member's and employer's",
      optionD: "regulators ahead of the client at all times",
      correctOption: "C",
      explanation: "Standard III requires client interests come before the member's and employer's.",
      orderIndex: 2
    },
    {
      id: "cfa-ethics-code-of-ethics-standards-q04",
      topicId: "cfa-ethics-code-of-ethics-standards",
      text: "The Standard on Fair Dealing requires that a member disseminating an investment recommendation must:",
      optionA: "give every client an identical position size",
      optionB: "notify only the firm's largest clients first",
      optionC: "treat all clients fairly, though not necessarily equally",
      optionD: "delay all trades until every client has acted",
      correctOption: "C",
      explanation: "Fair Dealing requires fair, not identical, treatment of all clients.",
      orderIndex: 3
    },
    {
      id: "cfa-ethics-code-of-ethics-standards-q05",
      topicId: "cfa-ethics-code-of-ethics-standards",
      text: "A portfolio manager receives material nonpublic information about a pending acquisition. The most appropriate action is to:",
      optionA: "trade quickly before the information becomes public",
      optionB: "share it only with the firm's best clients",
      optionC: "use it but disclose the source afterward",
      optionD: "refrain from acting or causing others to act on it",
      correctOption: "D",
      explanation: "Standard II(A) prohibits acting or causing others to act on material nonpublic information.",
      orderIndex: 4
    },
    {
      id: "cfa-ethics-code-of-ethics-standards-q06",
      topicId: "cfa-ethics-code-of-ethics-standards",
      text: "Which Standard most directly governs the disclosure of referral fees and the priority of transactions?",
      optionA: "Investment Analysis and Recommendations",
      optionB: "Integrity of Capital Markets",
      optionC: "Duties to Employers",
      optionD: "Conflicts of Interest",
      correctOption: "D",
      explanation: "Standard VI Conflicts of Interest covers disclosure, priority of transactions, and referral fees.",
      orderIndex: 5
    },
    {
      id: "cfa-ethics-code-of-ethics-standards-q07",
      topicId: "cfa-ethics-code-of-ethics-standards",
      text: "A member who accepts a gift from a client that could affect independence should, under the Standards:",
      optionA: "decline all client communication going forward",
      optionB: "keep the gift secret to avoid embarrassment",
      optionC: "resign from managing the client's account",
      optionD: "disclose the gift to the employer to preserve independence",
      correctOption: "D",
      explanation: "Disclosure to the employer protects independence and objectivity under Standard I(B).",
      orderIndex: 6
    },
    {
      id: "cfa-ethics-code-of-ethics-standards-q08",
      topicId: "cfa-ethics-code-of-ethics-standards",
      text: "Engaging in conduct that compromises the reputation or integrity of the CFA designation is a violation of the Standard on:",
      optionA: "Duties to Clients",
      optionB: "Market manipulation",
      optionC: "Responsibilities as a CFA Institute Member or Candidate",
      optionD: "Suitability of recommendations",
      correctOption: "C",
      explanation: "Standard VII addresses conduct that compromises the CFA designation's reputation.",
      orderIndex: 7
    },
    {
      id: "cfa-quantitative-methods-time-value-of-money-q01",
      topicId: "cfa-quantitative-methods-time-value-of-money",
      text: "An investor deposits 1,000 at an annual rate of 8% compounded annually. What is the value after 3 years?",
      optionA: "1,240.00",
      optionB: "1,080.00",
      optionC: "1,259.71",
      optionD: "1,360.49",
      correctOption: "C",
      explanation: "FV = 1000 * (1.08)^3 = 1000 * 1.259712 = 1,259.71.",
      orderIndex: 0
    },
    {
      id: "cfa-quantitative-methods-time-value-of-money-q02",
      topicId: "cfa-quantitative-methods-time-value-of-money",
      text: "Compared with an otherwise identical ordinary annuity, the present value of an annuity due is:",
      optionA: "higher, because each payment is received one period sooner",
      optionB: "the same, since the cash flows are equal",
      optionC: "lower, because payments arrive later",
      optionD: "undefined without the discount rate",
      correctOption: "A",
      explanation: "Annuity-due payments arrive one period earlier, so their present value is higher.",
      orderIndex: 1
    },
    {
      id: "cfa-quantitative-methods-time-value-of-money-q03",
      topicId: "cfa-quantitative-methods-time-value-of-money",
      text: "A stated annual rate of 12% compounded monthly produces an effective annual rate closest to:",
      optionA: "12.00%",
      optionB: "12.36%",
      optionC: "11.39%",
      optionD: "12.68%",
      correctOption: "D",
      explanation: "EAR = (1 + 0.12/12)^12 - 1 = 1.01^12 - 1 = 12.68%.",
      orderIndex: 2
    },
    {
      id: "cfa-quantitative-methods-time-value-of-money-q04",
      topicId: "cfa-quantitative-methods-time-value-of-money",
      text: "A perpetuity pays 50 per year forever. If the required return is 10%, its present value is:",
      optionA: "450",
      optionB: "550",
      optionC: "5,000",
      optionD: "500",
      correctOption: "D",
      explanation: "PV of a perpetuity = PMT / r = 50 / 0.10 = 500.",
      orderIndex: 3
    },
    {
      id: "cfa-quantitative-methods-time-value-of-money-q05",
      topicId: "cfa-quantitative-methods-time-value-of-money",
      text: "Holding the stated annual rate constant, increasing the compounding frequency causes the effective annual rate to:",
      optionA: "decrease toward zero",
      optionB: "rise above the stated rate",
      optionC: "fall below the stated rate",
      optionD: "stay exactly equal to the stated rate",
      correctOption: "B",
      explanation: "More frequent compounding raises the effective annual rate above the stated rate.",
      orderIndex: 4
    },
    {
      id: "cfa-quantitative-methods-time-value-of-money-q06",
      topicId: "cfa-quantitative-methods-time-value-of-money",
      text: "What is the present value of 5,000 to be received in 4 years if the annual discount rate is 6%?",
      optionA: "3,960",
      optionB: "4,158",
      optionC: "4,717",
      optionD: "3,711",
      correctOption: "A",
      explanation: "PV = 5000 / (1.06)^4 = 5000 / 1.26248 = 3,960.",
      orderIndex: 5
    },
    {
      id: "cfa-quantitative-methods-time-value-of-money-q07",
      topicId: "cfa-quantitative-methods-time-value-of-money",
      text: "Using continuous compounding, the future value of a single sum is found with the factor:",
      optionA: "(1 + r)^n",
      optionB: "(1 + r/m)^(m*n)",
      optionC: "e^(r*n)",
      optionD: "1 / (1 + r)^n",
      correctOption: "C",
      explanation: "Continuous compounding uses FV = PV * e^(r*n).",
      orderIndex: 6
    },
    {
      id: "cfa-quantitative-methods-time-value-of-money-q08",
      topicId: "cfa-quantitative-methods-time-value-of-money",
      text: "The most common time-value error when valuing a semiannual-pay bond is failing to:",
      optionA: "discount the maturity value at all",
      optionB: "include the coupon in present value",
      optionC: "use a calculator instead of a formula",
      optionD: "match the rate and number of periods to the same frequency",
      correctOption: "D",
      explanation: "Rate and period count must use the same frequency; a mismatch is the classic TVM error.",
      orderIndex: 7
    },
    {
      id: "cfa-economics-market-structures-q01",
      topicId: "cfa-economics-market-structures",
      text: "In perfect competition, the demand curve facing an individual firm is best described as:",
      optionA: "downward sloping and steep",
      optionB: "perfectly elastic (horizontal)",
      optionC: "perfectly inelastic (vertical)",
      optionD: "upward sloping",
      correctOption: "B",
      explanation: "A price-taking firm in perfect competition faces a horizontal, perfectly elastic demand curve.",
      orderIndex: 0
    },
    {
      id: "cfa-economics-market-structures-q02",
      topicId: "cfa-economics-market-structures",
      text: "A profit-maximizing firm in any market structure produces the quantity where:",
      optionA: "price equals average total cost",
      optionB: "total revenue is at its maximum",
      optionC: "marginal revenue equals marginal cost",
      optionD: "average cost equals average revenue",
      correctOption: "C",
      explanation: "Profit is maximized where marginal revenue equals marginal cost in every structure.",
      orderIndex: 1
    },
    {
      id: "cfa-economics-market-structures-q03",
      topicId: "cfa-economics-market-structures",
      text: "In long-run equilibrium under perfect competition, economic profit for the typical firm is:",
      optionA: "maximized and positive",
      optionB: "zero because free entry erodes profit",
      optionC: "negative but improving",
      optionD: "equal to accounting profit",
      correctOption: "B",
      explanation: "Free entry drives long-run economic profit to zero in perfect competition.",
      orderIndex: 2
    },
    {
      id: "cfa-economics-market-structures-q04",
      topicId: "cfa-economics-market-structures",
      text: "Which market structure is characterized by a single seller facing the entire downward-sloping market demand curve?",
      optionA: "Perfect competition",
      optionB: "Monopoly",
      optionC: "Oligopoly",
      optionD: "Monopolistic competition",
      correctOption: "B",
      explanation: "A monopoly is one seller facing the whole downward-sloping market demand curve.",
      orderIndex: 3
    },
    {
      id: "cfa-economics-market-structures-q05",
      topicId: "cfa-economics-market-structures",
      text: "A key limitation of the N-firm concentration ratio relative to the Herfindahl-Hirschman Index is that the ratio:",
      optionA: "cannot be computed without total revenue",
      optionB: "applies only to monopolies",
      optionC: "always exceeds 100 percent",
      optionD: "is unaffected by a merger between two leading firms",
      correctOption: "D",
      explanation: "The concentration ratio can miss mergers among top firms, which the HHI captures.",
      orderIndex: 4
    },
    {
      id: "cfa-economics-market-structures-q06",
      topicId: "cfa-economics-market-structures",
      text: "Monopolistic competition differs from perfect competition primarily because firms in it:",
      optionA: "face no barriers to entry whatsoever",
      optionB: "are pure price takers with no pricing power",
      optionC: "produce an identical, homogeneous product",
      optionD: "sell differentiated products and have some pricing power",
      correctOption: "D",
      explanation: "Monopolistic competition features product differentiation, giving firms some pricing power.",
      orderIndex: 5
    },
    {
      id: "cfa-economics-market-structures-q07",
      topicId: "cfa-economics-market-structures",
      text: "Which of the following is most likely a source of long-lasting monopoly power?",
      optionA: "Many close substitute products",
      optionB: "Patents and significant economies of scale",
      optionC: "Free and immediate entry of rivals",
      optionD: "Homogeneous goods and perfect information",
      correctOption: "B",
      explanation: "Patents and large economies of scale create high barriers that sustain monopoly power.",
      orderIndex: 6
    },
    {
      id: "cfa-economics-market-structures-q08",
      topicId: "cfa-economics-market-structures",
      text: "An industry with a small number of large interdependent firms and high entry barriers is best classified as:",
      optionA: "perfect competition",
      optionB: "an oligopoly",
      optionC: "monopolistic competition",
      optionD: "a pure monopoly",
      correctOption: "B",
      explanation: "Few interdependent firms with high barriers describe an oligopoly.",
      orderIndex: 7
    },
    {
      id: "cfa-financial-reporting-financial-ratios-analysis-q01",
      topicId: "cfa-financial-reporting-financial-ratios-analysis",
      text: "The quick ratio differs from the current ratio mainly because the quick ratio excludes:",
      optionA: "inventory",
      optionB: "accounts receivable",
      optionC: "cash and cash equivalents",
      optionD: "marketable securities",
      correctOption: "A",
      explanation: "The quick ratio removes inventory, the least liquid current asset.",
      orderIndex: 0
    },
    {
      id: "cfa-financial-reporting-financial-ratios-analysis-q02",
      topicId: "cfa-financial-reporting-financial-ratios-analysis",
      text: "A firm has net income of 200 and total equity of 1,000. Its return on equity is:",
      optionA: "5%",
      optionB: "10%",
      optionC: "20%",
      optionD: "200%",
      correctOption: "C",
      explanation: "ROE = net income / equity = 200 / 1000 = 20%.",
      orderIndex: 1
    },
    {
      id: "cfa-financial-reporting-financial-ratios-analysis-q03",
      topicId: "cfa-financial-reporting-financial-ratios-analysis",
      text: "In the three-part DuPont identity, return on equity equals the product of net profit margin, asset turnover, and:",
      optionA: "the current ratio",
      optionB: "financial leverage",
      optionC: "interest coverage",
      optionD: "the dividend payout ratio",
      correctOption: "B",
      explanation: "Three-part DuPont: ROE = net margin * asset turnover * financial leverage.",
      orderIndex: 2
    },
    {
      id: "cfa-financial-reporting-financial-ratios-analysis-q04",
      topicId: "cfa-financial-reporting-financial-ratios-analysis",
      text: "If a company's ROE rises only because it took on substantially more debt, the increase most likely reflects:",
      optionA: "improved operating profitability",
      optionB: "greater financial leverage and higher risk",
      optionC: "faster inventory turnover",
      optionD: "a higher gross margin",
      correctOption: "B",
      explanation: "A leverage-driven ROE gain signals more financial risk, not better operations.",
      orderIndex: 3
    },
    {
      id: "cfa-financial-reporting-financial-ratios-analysis-q05",
      topicId: "cfa-financial-reporting-financial-ratios-analysis",
      text: "The interest coverage ratio is calculated as:",
      optionA: "EBIT divided by interest expense",
      optionB: "net income divided by interest expense",
      optionC: "total debt divided by EBIT",
      optionD: "revenue divided by interest expense",
      correctOption: "A",
      explanation: "Interest coverage = EBIT / interest expense.",
      orderIndex: 4
    },
    {
      id: "cfa-financial-reporting-financial-ratios-analysis-q06",
      topicId: "cfa-financial-reporting-financial-ratios-analysis",
      text: "Cost of goods sold is 800 and average inventory is 200. Inventory turnover is:",
      optionA: "4.0 times",
      optionB: "2.0 times",
      optionC: "0.25 times",
      optionD: "1.6 times",
      correctOption: "A",
      explanation: "Inventory turnover = COGS / average inventory = 800 / 200 = 4.0.",
      orderIndex: 5
    },
    {
      id: "cfa-financial-reporting-financial-ratios-analysis-q07",
      topicId: "cfa-financial-reporting-financial-ratios-analysis",
      text: "A current ratio below 1.0 most directly suggests that a firm may have:",
      optionA: "excessive long-term debt",
      optionB: "a high gross margin",
      optionC: "very high profitability",
      optionD: "weak short-term liquidity",
      correctOption: "D",
      explanation: "A current ratio under 1.0 means current liabilities exceed current assets, signaling weak liquidity.",
      orderIndex: 6
    },
    {
      id: "cfa-financial-reporting-financial-ratios-analysis-q08",
      topicId: "cfa-financial-reporting-financial-ratios-analysis",
      text: "To interpret a single financial ratio meaningfully, an analyst should primarily compare it with:",
      optionA: "the risk-free rate of interest",
      optionB: "the company's history and industry peers",
      optionC: "the firm's stock price",
      optionD: "the prevailing inflation rate",
      correctOption: "B",
      explanation: "Ratios are meaningful only against trend and peer benchmarks, not in isolation.",
      orderIndex: 7
    },
    {
      id: "cfa-corporate-issuers-cost-of-capital-q01",
      topicId: "cfa-corporate-issuers-cost-of-capital",
      text: "In the weighted average cost of capital, the cost of debt is multiplied by (1 - t) because:",
      optionA: "dividends are tax-deductible",
      optionB: "debt has no maturity",
      optionC: "equity is riskier than debt",
      optionD: "interest expense is tax-deductible",
      correctOption: "D",
      explanation: "Interest is tax-deductible, so the relevant cost of debt is after-tax: Rd * (1 - t).",
      orderIndex: 0
    },
    {
      id: "cfa-corporate-issuers-cost-of-capital-q02",
      topicId: "cfa-corporate-issuers-cost-of-capital",
      text: "A firm has a beta of 1.2, a risk-free rate of 3%, and an equity risk premium of 5%. Its CAPM cost of equity is:",
      optionA: "8.0%",
      optionB: "6.0%",
      optionC: "9.0%",
      optionD: "11.0%",
      correctOption: "C",
      explanation: "Re = 3% + 1.2 * 5% = 3% + 6% = 9.0%.",
      orderIndex: 1
    },
    {
      id: "cfa-corporate-issuers-cost-of-capital-q03",
      topicId: "cfa-corporate-issuers-cost-of-capital",
      text: "When estimating WACC, the weights for debt and equity should ideally be based on:",
      optionA: "book values from the balance sheet",
      optionB: "target market-value proportions",
      optionC: "historical issuance prices",
      optionD: "par values of the securities",
      correctOption: "B",
      explanation: "WACC weights should use target capital structure at market values.",
      orderIndex: 2
    },
    {
      id: "cfa-corporate-issuers-cost-of-capital-q04",
      topicId: "cfa-corporate-issuers-cost-of-capital",
      text: "A firm is financed 40% by debt and 60% by equity. With an after-tax cost of debt of 5% and cost of equity of 10%, the WACC is:",
      optionA: "7.5%",
      optionB: "6.5%",
      optionC: "9.0%",
      optionD: "8.0%",
      correctOption: "D",
      explanation: "WACC = 0.40 * 5% + 0.60 * 10% = 2% + 6% = 8.0%.",
      orderIndex: 3
    },
    {
      id: "cfa-corporate-issuers-cost-of-capital-q05",
      topicId: "cfa-corporate-issuers-cost-of-capital",
      text: "Applying the firm's overall WACC to a project that is much riskier than the firm's average operations will most likely:",
      optionA: "overstate the project's value by understating risk",
      optionB: "correctly value the project",
      optionC: "have no effect on the decision",
      optionD: "understate the project's expected cash flows",
      correctOption: "A",
      explanation: "Using too low a discount rate for a riskier project overstates its value.",
      orderIndex: 4
    },
    {
      id: "cfa-corporate-issuers-cost-of-capital-q06",
      topicId: "cfa-corporate-issuers-cost-of-capital",
      text: "Using the dividend discount approach, the cost of equity equals the dividend yield plus the:",
      optionA: "risk-free rate",
      optionB: "after-tax cost of debt",
      optionC: "constant dividend growth rate",
      optionD: "market risk premium",
      correctOption: "C",
      explanation: "DDM cost of equity = D1 / P0 + g, the dividend yield plus growth.",
      orderIndex: 5
    },
    {
      id: "cfa-corporate-issuers-cost-of-capital-q07",
      topicId: "cfa-corporate-issuers-cost-of-capital",
      text: "A bond yields 8% before tax and the marginal tax rate is 25%. The after-tax cost of debt is:",
      optionA: "8.0%",
      optionB: "2.0%",
      optionC: "6.0%",
      optionD: "10.0%",
      correctOption: "C",
      explanation: "After-tax cost of debt = 8% * (1 - 0.25) = 6.0%.",
      orderIndex: 6
    },
    {
      id: "cfa-corporate-issuers-cost-of-capital-q08",
      topicId: "cfa-corporate-issuers-cost-of-capital",
      text: "In capital budgeting, the WACC is most appropriately used as the:",
      optionA: "growth rate of cash flows",
      optionB: "discount rate for projects of average firm risk",
      optionC: "terminal value multiple",
      optionD: "inflation adjustment factor",
      correctOption: "B",
      explanation: "WACC is the discount rate for projects with risk similar to the firm's average.",
      orderIndex: 7
    },
    {
      id: "cfa-equity-equity-valuation-ddm-q01",
      topicId: "cfa-equity-equity-valuation-ddm",
      text: "A stock will pay a dividend of 2.00 next year, grows at 4% forever, and has a required return of 9%. Its Gordon growth value is:",
      optionA: "40.00",
      optionB: "22.22",
      optionC: "50.00",
      optionD: "25.00",
      correctOption: "A",
      explanation: "V0 = D1 / (r - g) = 2.00 / (0.09 - 0.04) = 2.00 / 0.05 = 40.00.",
      orderIndex: 0
    },
    {
      id: "cfa-equity-equity-valuation-ddm-q02",
      topicId: "cfa-equity-equity-valuation-ddm",
      text: "The Gordon growth model becomes mathematically invalid when the growth rate is:",
      optionA: "less than the required return",
      optionB: "equal to zero",
      optionC: "negative",
      optionD: "greater than or equal to the required return",
      correctOption: "D",
      explanation: "The model requires r greater than g; otherwise (r - g) is zero or negative.",
      orderIndex: 1
    },
    {
      id: "cfa-equity-equity-valuation-ddm-q03",
      topicId: "cfa-equity-equity-valuation-ddm",
      text: "A firm retains 60% of earnings and earns an ROE of 15%. Its sustainable growth rate is:",
      optionA: "6.0%",
      optionB: "9.0%",
      optionC: "15.0%",
      optionD: "25.0%",
      correctOption: "B",
      explanation: "g = retention * ROE = 0.60 * 15% = 9.0%.",
      orderIndex: 2
    },
    {
      id: "cfa-equity-equity-valuation-ddm-q04",
      topicId: "cfa-equity-equity-valuation-ddm",
      text: "The dividend discount model is least appropriate for valuing a company that:",
      optionA: "pays no dividends and reinvests all earnings",
      optionB: "pays a stable, growing dividend",
      optionC: "has a long dividend history",
      optionD: "operates in a mature industry",
      correctOption: "A",
      explanation: "The DDM cannot value firms that pay no dividends; use cash-flow models instead.",
      orderIndex: 3
    },
    {
      id: "cfa-equity-equity-valuation-ddm-q05",
      topicId: "cfa-equity-equity-valuation-ddm",
      text: "In a multistage DDM, the terminal value is most commonly estimated using the:",
      optionA: "Gordon growth model at the start of the stable phase",
      optionB: "current dividend yield only",
      optionC: "book value of equity",
      optionD: "average historical share price",
      correctOption: "A",
      explanation: "Terminal value uses the Gordon model at the onset of the constant-growth stage.",
      orderIndex: 4
    },
    {
      id: "cfa-equity-equity-valuation-ddm-q06",
      topicId: "cfa-equity-equity-valuation-ddm",
      text: "If next year's dividend is 3.00 and the stock is valued at 60 using the Gordon model with 3% growth, the required return is:",
      optionA: "8%",
      optionB: "6%",
      optionC: "5%",
      optionD: "3%",
      correctOption: "A",
      explanation: "r = D1/V0 + g = 3/60 + 0.03 = 0.05 + 0.03 = 8%.",
      orderIndex: 5
    },
    {
      id: "cfa-equity-equity-valuation-ddm-q07",
      topicId: "cfa-equity-equity-valuation-ddm",
      text: "The retention ratio used in the sustainable growth formula equals:",
      optionA: "the dividend payout ratio",
      optionB: "one minus the dividend payout ratio",
      optionC: "dividends divided by net income",
      optionD: "the price-to-earnings ratio",
      correctOption: "B",
      explanation: "Retention ratio b = 1 - payout ratio.",
      orderIndex: 6
    },
    {
      id: "cfa-equity-equity-valuation-ddm-q08",
      topicId: "cfa-equity-equity-valuation-ddm",
      text: "A notable weakness of the Gordon growth model is that its output is highly sensitive to small changes in the:",
      optionA: "number of shares outstanding",
      optionB: "current market price",
      optionC: "company's tax rate",
      optionD: "spread between the required return and growth rate",
      correctOption: "D",
      explanation: "Value is extremely sensitive to the (r - g) denominator, so small input changes swing it sharply.",
      orderIndex: 7
    },
    {
      id: "cfa-fixed-income-duration-convexity-q01",
      topicId: "cfa-fixed-income-duration-convexity",
      text: "A bond has a modified duration of 6. If its yield rises by 0.5%, the bond's price will change by approximately:",
      optionA: "+3.0%",
      optionB: "-0.5%",
      optionC: "-3.0%",
      optionD: "+6.0%",
      correctOption: "C",
      explanation: "Price change ~ -ModDur * dy = -6 * 0.005 = -3.0%.",
      orderIndex: 0
    },
    {
      id: "cfa-fixed-income-duration-convexity-q02",
      topicId: "cfa-fixed-income-duration-convexity",
      text: "Holding other factors constant, a bond with a lower coupon rate will have a duration that is:",
      optionA: "lower",
      optionB: "higher",
      optionC: "unchanged",
      optionD: "always equal to its maturity",
      correctOption: "B",
      explanation: "Lower coupons push cash flows later, raising duration.",
      orderIndex: 1
    },
    {
      id: "cfa-fixed-income-duration-convexity-q03",
      topicId: "cfa-fixed-income-duration-convexity",
      text: "The Macaulay duration of a zero-coupon bond is equal to its:",
      optionA: "coupon rate",
      optionB: "current yield",
      optionC: "convexity",
      optionD: "time to maturity",
      correctOption: "D",
      explanation: "A zero-coupon bond has a single cash flow, so its Macaulay duration equals its maturity.",
      orderIndex: 2
    },
    {
      id: "cfa-fixed-income-duration-convexity-q04",
      topicId: "cfa-fixed-income-duration-convexity",
      text: "Convexity is added to a duration-based price estimate primarily to improve accuracy for:",
      optionA: "very small yield changes",
      optionB: "large yield changes",
      optionC: "floating-rate notes only",
      optionD: "changes in credit spreads only",
      correctOption: "B",
      explanation: "Duration is linear; convexity corrects the estimate for large yield moves.",
      orderIndex: 3
    },
    {
      id: "cfa-fixed-income-duration-convexity-q05",
      topicId: "cfa-fixed-income-duration-convexity",
      text: "For a bond with positive convexity, when yields move by equal amounts in each direction, the price:",
      optionA: "rises more when yields fall than it falls when yields rise",
      optionB: "falls more when yields rise than it rises when yields fall",
      optionC: "changes by exactly the same amount either way",
      optionD: "is unaffected by the direction of the move",
      correctOption: "A",
      explanation: "Positive convexity means gains from falling yields exceed losses from equal rising yields.",
      orderIndex: 4
    },
    {
      id: "cfa-fixed-income-duration-convexity-q06",
      topicId: "cfa-fixed-income-duration-convexity",
      text: "Modified duration is obtained from Macaulay duration by:",
      optionA: "multiplying by (1 + y/m)",
      optionB: "subtracting the convexity",
      optionC: "dividing by (1 + y/m)",
      optionD: "adding the current yield",
      correctOption: "C",
      explanation: "Modified duration = Macaulay duration / (1 + y/m).",
      orderIndex: 5
    },
    {
      id: "cfa-fixed-income-duration-convexity-q07",
      topicId: "cfa-fixed-income-duration-convexity",
      text: "All else equal, increasing a bond's time to maturity generally causes its interest-rate sensitivity to:",
      optionA: "decrease",
      optionB: "increase",
      optionC: "stay constant",
      optionD: "become zero",
      correctOption: "B",
      explanation: "Longer maturity raises duration and thus interest-rate sensitivity.",
      orderIndex: 6
    },
    {
      id: "cfa-fixed-income-duration-convexity-q08",
      topicId: "cfa-fixed-income-duration-convexity",
      text: "A bond has a modified duration of 5 and convexity of 80. For a yield drop of 1%, the estimated price change is closest to:",
      optionA: "+5.0%",
      optionB: "+4.6%",
      optionC: "-4.6%",
      optionD: "+5.4%",
      correctOption: "D",
      explanation: "Change ~ -5*(-0.01) + 0.5*80*(0.01)^2 = 0.05 + 0.004 = 5.4%.",
      orderIndex: 7
    },
    {
      id: "cfa-derivatives-options-put-call-parity-q01",
      topicId: "cfa-derivatives-options-put-call-parity",
      text: "Put-call parity states that a call plus the present value of the strike equals:",
      optionA: "a put plus the underlying stock",
      optionB: "a put minus the underlying stock",
      optionC: "the underlying stock alone",
      optionD: "two calls minus a put",
      correctOption: "A",
      explanation: "Parity: C + PV(K) = P + S, the fiduciary call equals the protective put.",
      orderIndex: 0
    },
    {
      id: "cfa-derivatives-options-put-call-parity-q02",
      topicId: "cfa-derivatives-options-put-call-parity",
      text: "A stock trades at 50, a call and put share a strike of 50, the put costs 4, and PV of the strike is 48. The call value is:",
      optionA: "2",
      optionB: "4",
      optionC: "8",
      optionD: "6",
      correctOption: "D",
      explanation: "C = P + S - PV(K) = 4 + 50 - 48 = 6.",
      orderIndex: 1
    },
    {
      id: "cfa-derivatives-options-put-call-parity-q03",
      topicId: "cfa-derivatives-options-put-call-parity",
      text: "The combination of a long put and a long share of the underlying stock is known as a:",
      optionA: "protective put",
      optionB: "covered call",
      optionC: "fiduciary call",
      optionD: "bull spread",
      correctOption: "A",
      explanation: "Put plus stock is a protective put, the right side of the parity identity.",
      orderIndex: 2
    },
    {
      id: "cfa-derivatives-options-put-call-parity-q04",
      topicId: "cfa-derivatives-options-put-call-parity",
      text: "Put-call parity holds strictly for European options written on an underlying that pays:",
      optionA: "a large continuous dividend",
      optionB: "no dividends",
      optionC: "variable dividends",
      optionD: "interest semiannually",
      correctOption: "B",
      explanation: "Standard parity assumes European options on a non-dividend-paying underlying.",
      orderIndex: 3
    },
    {
      id: "cfa-derivatives-options-put-call-parity-q05",
      topicId: "cfa-derivatives-options-put-call-parity",
      text: "A synthetic long put can be constructed from a long call, a short position in the stock, and a:",
      optionA: "long forward contract",
      optionB: "short call at a different strike",
      optionC: "second long call",
      optionD: "long bond (lend at the risk-free rate)",
      correctOption: "D",
      explanation: "Synthetic put = call - stock + bond, where the bond is risk-free lending.",
      orderIndex: 4
    },
    {
      id: "cfa-derivatives-options-put-call-parity-q06",
      topicId: "cfa-derivatives-options-put-call-parity",
      text: "If observed market prices violate put-call parity, an investor can most likely earn a profit through:",
      optionA: "arbitrage by buying the cheaper side and selling the dearer side",
      optionB: "writing only naked puts",
      optionC: "holding the underlying to maturity",
      optionD: "buying both the call and the put",
      correctOption: "A",
      explanation: "A parity violation permits riskless arbitrage between the two equivalent sides.",
      orderIndex: 5
    },
    {
      id: "cfa-derivatives-options-put-call-parity-q07",
      topicId: "cfa-derivatives-options-put-call-parity",
      text: "The present value of the strike price in the parity equation is computed by discounting the strike at the:",
      optionA: "risk-free rate",
      optionB: "dividend yield",
      optionC: "stock's expected return",
      optionD: "implied volatility",
      correctOption: "A",
      explanation: "PV(K) = K / (1 + r)^T uses the risk-free rate r.",
      orderIndex: 6
    },
    {
      id: "cfa-derivatives-options-put-call-parity-q08",
      topicId: "cfa-derivatives-options-put-call-parity",
      text: "When the underlying pays dividends before expiration, the value used for the stock in put-call parity should be:",
      optionA: "the spot price increased by the dividends",
      optionB: "unchanged from the spot price",
      optionC: "the spot price reduced by the present value of the dividends",
      optionD: "the strike price",
      correctOption: "C",
      explanation: "Dividends reduce the effective stock value by the present value of those dividends.",
      orderIndex: 7
    },
    {
      id: "cfa-alternative-investments-hedge-funds-private-equity-q01",
      topicId: "cfa-alternative-investments-hedge-funds-private-equity",
      text: "Under a typical 2-and-20 fee structure, the 20% portion represents the:",
      optionA: "annual management fee on assets",
      optionB: "incentive fee on profits above a hurdle",
      optionC: "redemption penalty",
      optionD: "administrative expense ratio",
      correctOption: "B",
      explanation: "The 20% is an incentive fee charged on profits, often above a hurdle rate.",
      orderIndex: 0
    },
    {
      id: "cfa-alternative-investments-hedge-funds-private-equity-q02",
      topicId: "cfa-alternative-investments-hedge-funds-private-equity",
      text: "A high-water mark provision ensures that incentive fees are charged only on:",
      optionA: "the original capital contributed",
      optionB: "gross assets each year",
      optionC: "new net profits above the prior peak value",
      optionD: "the management fee base",
      correctOption: "C",
      explanation: "A high-water mark restricts incentive fees to new profits above the previous peak.",
      orderIndex: 1
    },
    {
      id: "cfa-alternative-investments-hedge-funds-private-equity-q03",
      topicId: "cfa-alternative-investments-hedge-funds-private-equity",
      text: "The private-equity J-curve describes a fund's tendency to show, in its early years:",
      optionA: "immediate strong positive returns",
      optionB: "perfectly flat returns",
      optionC: "negative returns from fees and early write-downs",
      optionD: "returns identical to public equities",
      correctOption: "C",
      explanation: "The J-curve reflects early negative returns from fees and write-downs before later gains.",
      orderIndex: 2
    },
    {
      id: "cfa-alternative-investments-hedge-funds-private-equity-q04",
      topicId: "cfa-alternative-investments-hedge-funds-private-equity",
      text: "A leveraged buyout fund typically acquires:",
      optionA: "early-stage startups with venture financing",
      optionB: "publicly traded bonds only",
      optionC: "diversified index portfolios",
      optionD: "mature companies using a large amount of debt",
      correctOption: "D",
      explanation: "LBO buyout funds acquire mature firms financed largely with debt.",
      orderIndex: 3
    },
    {
      id: "cfa-alternative-investments-hedge-funds-private-equity-q05",
      topicId: "cfa-alternative-investments-hedge-funds-private-equity",
      text: "Which hedge fund strategy seeks to profit primarily from announced mergers and corporate reorganizations?",
      optionA: "Global macro",
      optionB: "Equity market neutral",
      optionC: "Event-driven",
      optionD: "Convertible arbitrage",
      correctOption: "C",
      explanation: "Event-driven strategies target mergers, distressed, and special-situation events.",
      orderIndex: 4
    },
    {
      id: "cfa-alternative-investments-hedge-funds-private-equity-q06",
      topicId: "cfa-alternative-investments-hedge-funds-private-equity",
      text: "Reported hedge fund index returns are often overstated because of survivorship and:",
      optionA: "mark-to-market accounting",
      optionB: "inflation indexing",
      optionC: "backfill bias",
      optionD: "currency hedging",
      correctOption: "C",
      explanation: "Survivorship and backfill biases inflate reported hedge fund index returns.",
      orderIndex: 5
    },
    {
      id: "cfa-alternative-investments-hedge-funds-private-equity-q07",
      topicId: "cfa-alternative-investments-hedge-funds-private-equity",
      text: "Which of the following is a common exit route for a private equity investment?",
      optionA: "Margin call",
      optionB: "Coupon payment",
      optionC: "Reverse stock split",
      optionD: "Initial public offering or trade sale",
      correctOption: "D",
      explanation: "PE investments exit through IPOs, trade sales, or secondary sales.",
      orderIndex: 6
    },
    {
      id: "cfa-alternative-investments-hedge-funds-private-equity-q08",
      topicId: "cfa-alternative-investments-hedge-funds-private-equity",
      text: "A defining liquidity characteristic shared by hedge funds and private equity is that investors typically face:",
      optionA: "daily redemption at net asset value",
      optionB: "no fees on withdrawals",
      optionC: "lock-up periods that restrict withdrawals",
      optionD: "government-guaranteed principal",
      correctOption: "C",
      explanation: "Both impose lock-up periods, making them relatively illiquid investments.",
      orderIndex: 7
    },
    {
      id: "cfa-portfolio-management-portfolio-risk-return-capm-q01",
      topicId: "cfa-portfolio-management-portfolio-risk-return-capm",
      text: "Under the CAPM, an asset with a beta of 1.5, a risk-free rate of 2%, and a market return of 8% has an expected return of:",
      optionA: "11%",
      optionB: "9%",
      optionC: "12%",
      optionD: "8%",
      correctOption: "A",
      explanation: "E(R) = 2% + 1.5 * (8% - 2%) = 2% + 9% = 11%.",
      orderIndex: 0
    },
    {
      id: "cfa-portfolio-management-portfolio-risk-return-capm-q02",
      topicId: "cfa-portfolio-management-portfolio-risk-return-capm",
      text: "According to portfolio theory, the type of risk that earns no risk premium because it can be diversified away is:",
      optionA: "systematic risk",
      optionB: "market risk",
      optionC: "unsystematic (firm-specific) risk",
      optionD: "interest-rate risk",
      correctOption: "C",
      explanation: "Diversifiable unsystematic risk earns no premium; only systematic risk is rewarded.",
      orderIndex: 1
    },
    {
      id: "cfa-portfolio-management-portfolio-risk-return-capm-q03",
      topicId: "cfa-portfolio-management-portfolio-risk-return-capm",
      text: "The diversification benefit of combining two assets into a portfolio is greatest when their correlation is:",
      optionA: "as low as possible",
      optionB: "exactly +1",
      optionC: "exactly equal to the betas",
      optionD: "equal to the risk-free rate",
      correctOption: "A",
      explanation: "Lower correlation increases diversification; perfect positive correlation gives no benefit.",
      orderIndex: 2
    },
    {
      id: "cfa-portfolio-management-portfolio-risk-return-capm-q04",
      topicId: "cfa-portfolio-management-portfolio-risk-return-capm",
      text: "In the CAPM, the market risk premium is represented by the term:",
      optionA: "the market return minus the risk-free rate",
      optionB: "beta times the standard deviation",
      optionC: "the risk-free rate",
      optionD: "the Sharpe ratio",
      correctOption: "A",
      explanation: "The market risk premium equals the market return minus the risk-free rate (Rm - Rf).",
      orderIndex: 3
    },
    {
      id: "cfa-portfolio-management-portfolio-risk-return-capm-q05",
      topicId: "cfa-portfolio-management-portfolio-risk-return-capm",
      text: "A stock with a beta greater than 1.0 is expected to be:",
      optionA: "less volatile than the overall market",
      optionB: "more volatile than the overall market",
      optionC: "uncorrelated with the market",
      optionD: "risk-free",
      correctOption: "B",
      explanation: "A beta above 1.0 implies greater volatility than the market.",
      orderIndex: 4
    },
    {
      id: "cfa-portfolio-management-portfolio-risk-return-capm-q06",
      topicId: "cfa-portfolio-management-portfolio-risk-return-capm",
      text: "The Sharpe ratio measures the excess return of a portfolio per unit of its:",
      optionA: "beta",
      optionB: "tracking error",
      optionC: "unsystematic risk only",
      optionD: "total risk (standard deviation)",
      correctOption: "D",
      explanation: "The Sharpe ratio divides excess return by total risk (standard deviation).",
      orderIndex: 5
    },
    {
      id: "cfa-portfolio-management-portfolio-risk-return-capm-q07",
      topicId: "cfa-portfolio-management-portfolio-risk-return-capm",
      text: "The expected return of a two-asset portfolio is calculated as the:",
      optionA: "product of the two asset returns",
      optionB: "weighted average of the asset variances",
      optionC: "weighted average of the asset returns",
      optionD: "square root of the covariance",
      correctOption: "C",
      explanation: "Portfolio return is the weighted average of the component asset returns.",
      orderIndex: 6
    },
    {
      id: "cfa-portfolio-management-portfolio-risk-return-capm-q08",
      topicId: "cfa-portfolio-management-portfolio-risk-return-capm",
      text: "A stock with very high total volatility but a low beta will, under the CAPM, have a required return that is:",
      optionA: "modest because only systematic risk is priced",
      optionB: "very high because total volatility is priced",
      optionC: "equal to the market return",
      optionD: "below the risk-free rate",
      correctOption: "A",
      explanation: "CAPM prices only systematic risk, so a low-beta stock has a modest required return despite high volatility.",
      orderIndex: 7
    },
    ...(cfaExp1Questions as Question[]),
    ...(cfaExp2Questions as Question[]),
    ...(cfaExp3Questions as Question[]),
    ...(cfaExp4Questions as Question[]),
    ...(cfaExp5Questions as Question[]),
    ...(cfaExp6Questions as Question[]),
    ...cfaL1TopUp,
    ...exp8Questions,
    ...exp9Questions,
    ...exp10Questions
  ]
});
