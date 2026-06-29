// CFA Level II — asset-valuation focus. A focused, high-yield starter track
// (12 questions per reading); expandable toward the full Level II curriculum.
import { defineBundle } from "./builder";
import type { Question } from "@jyotir/core";
import type { AuthoredMaterial } from "./builder";

const exam = {
  id: "cfa-2",
  slug: "cfa-2" as const,
  name: "CFA Level II",
  tagline: "Asset valuation: Equity · Fixed Income · Derivatives · FRA",
  orderIndex: 6
};

const subjects = [
  { id: "cfa2-financial-reporting", examId: "cfa-2", name: "Financial Statement Analysis", slug: "financial-reporting", orderIndex: 0 },
  { id: "cfa2-equity", examId: "cfa-2", name: "Equity Valuation", slug: "equity", orderIndex: 1 },
  { id: "cfa2-fixed-income", examId: "cfa-2", name: "Fixed Income", slug: "fixed-income", orderIndex: 2 },
  { id: "cfa2-derivatives", examId: "cfa-2", name: "Derivatives", slug: "derivatives", orderIndex: 3 }
];

const topics = [
  { id: "cfa2-financial-reporting-intercorporate-investments", subjectId: "cfa2-financial-reporting", name: "Intercorporate Investments", slug: "intercorporate-investments", orderIndex: 0 },
  { id: "cfa2-equity-fcf-valuation", subjectId: "cfa2-equity", name: "Free Cash Flow Valuation (FCFF/FCFE)", slug: "fcf-valuation", orderIndex: 0 },
  { id: "cfa2-equity-residual-income", subjectId: "cfa2-equity", name: "Residual Income Valuation", slug: "residual-income", orderIndex: 1 },
  { id: "cfa2-fixed-income-arbitrage-free-oas", subjectId: "cfa2-fixed-income", name: "Arbitrage-Free Valuation & OAS", slug: "arbitrage-free-oas", orderIndex: 0 },
  { id: "cfa2-derivatives-option-valuation", subjectId: "cfa2-derivatives", name: "Option Valuation: Binomial & BSM", slug: "option-valuation", orderIndex: 0 }
];

const materials: AuthoredMaterial[] = [
  {
    id: "cfa2-financial-reporting-intercorporate-investments-m01",
    topicId: "cfa2-financial-reporting-intercorporate-investments",
    title: "Intercorporate Investments",
    content: `Accounting for an investment in another company depends on **influence/control**, not just ownership %.

| Category | Typical stake | Method |
| --- | --- | --- |
| Financial assets | < 20% | **Fair value** (FVPL or FVOCI) |
| Associate | 20–50% (significant influence) | **Equity method** |
| Business combination | > 50% (control) | **Consolidation** (acquisition method) |
| Joint venture | shared control | **Equity method** (IFRS & US GAAP) |

## Equity method
- One-line: investment carried at cost + share of investee earnings − dividends received. Dividends **reduce the carrying value** (return of investment), not income.

## Consolidation
- Combine 100% of subsidiary assets/liabilities; recognize **non-controlling interest** for the portion not owned.
- **Goodwill** = purchase price − fair value of identifiable net assets. Goodwill is **not amortized** but tested for impairment. (Partial vs full goodwill differs under IFRS vs US GAAP.)
- Acquisition-method: assets/liabilities recorded at **fair value** at acquisition.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa2-equity-fcf-valuation-m01",
    topicId: "cfa2-equity-fcf-valuation",
    title: "Free Cash Flow Valuation (FCFF/FCFE)",
    content: `## Definitions
- **FCFF** = cash to *all* capital providers. FCFF = NI + NCC + Int×(1−t) − FCInv − WCInv.
- **FCFE** = cash to *equity* holders. FCFE = FCFF − Int×(1−t) + Net borrowing. Or FCFE = NI + NCC − FCInv − WCInv + Net borrowing.

## Discounting
- Discount **FCFF at WACC** → firm value; subtract debt → equity value.
- Discount **FCFE at the cost of equity (r)** → equity value directly.
- Single-stage: Firm = FCFF₁/(WACC − g); Equity = FCFE₁/(r − g).

## Notes
- Use FCFE when capital structure is stable; FCFF when leverage is changing/high (FCFE can be negative).
- **Dividends ≠ FCFE**; FCF models value the capacity to pay, not the policy.
- Add back **non-cash charges (NCC)** like depreciation; subtract reinvestment (FCInv, WCInv).`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa2-equity-residual-income-m01",
    topicId: "cfa2-equity-residual-income",
    title: "Residual Income Valuation",
    content: `**Residual income** = net income − equity charge = NI − (r × beginning book value).

**V₀ = B₀ + Σ RI_t/(1+r)^t.** Single-stage: **V₀ = B₀ + [(ROE − r)/(r − g)] × B₀**.

## Why use it
- Recognizes value **earlier** and depends **less on a terminal value** than DDM/FCF — useful for non-dividend payers and firms with negative near-term FCF.

## Cautions
- Relies on **clean-surplus** accounting (all income flows through retained earnings; bypassed by some OCI items).
- Sensitive to **book value and accounting quality**; adjust for off-balance-sheet items and aggressive accruals.
- A **persistence factor (ω)** scales how long abnormal RI continues before fading to the cost of equity.`,
    estimatedReadTime: 2,
    orderIndex: 1
  },
  {
    id: "cfa2-fixed-income-arbitrage-free-oas-m01",
    topicId: "cfa2-fixed-income-arbitrage-free-oas",
    title: "Arbitrage-Free Valuation & OAS",
    content: `## Arbitrage-free value
Discount each cash flow at its **spot rate**; otherwise stripping/reconstitution would create arbitrage. For bonds **with embedded options**, value along an **interest-rate tree** (calibrated to be arbitrage-free) using backward induction.

## Embedded options
- **Callable bond** = straight bond − value of call (issuer's option). Value_callable = Value_straight − Call.
- **Putable bond** = straight bond + value of put. Value_putable = Value_straight + Put.
- Higher **volatility** raises both option values → **lowers** callable price, **raises** putable price.

## Spreads
- **Z-spread**: constant spread over the spot curve that prices the bond — ignores optionality.
- **OAS (option-adjusted spread)**: Z-spread **minus** the option cost; it's the spread after removing the embedded option's effect, so OAS is comparable across bonds.
- For callables, **OAS < Z-spread**; for putables, **OAS > Z-spread**.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "cfa2-derivatives-option-valuation-m01",
    topicId: "cfa2-derivatives-option-valuation",
    title: "Option Valuation: Binomial & BSM",
    content: `## Binomial (risk-neutral)
π = (1 + r − d)/(u − d); option = [π·c_u + (1−π)·c_d]/(1+r). Real probabilities are irrelevant once the option is replicated/hedged.

## Black-Scholes-Merton (BSM)
c = S·N(d₁) − Ke^(−rT)·N(d₂); p via put-call parity. Assumes lognormal prices, constant volatility & rate, no early exercise (European).

## The Greeks
| Greek | Measures sensitivity to |
| --- | --- |
| Delta | Underlying price (call 0→1) |
| Gamma | Rate of change of delta (largest ATM) |
| Vega | Volatility (largest ATM, long-dated) |
| Theta | Time decay |
| Rho | Interest rate |

- **Delta hedging** neutralizes small moves; rebalancing is needed because of **gamma**.
- Carry/dividends lower call value; **only volatility is unobservable** → implied vol drives quoted prices.`,
    estimatedReadTime: 2,
    orderIndex: 0
  }
];

const questions: Question[] = [
  // Intercorporate Investments
  { id: "cfa2-financial-reporting-intercorporate-investments-q01", topicId: "cfa2-financial-reporting-intercorporate-investments", text: "An investor with significant influence (typically a 20–50% stake) over an investee accounts for it using the:", optionA: "Fair value method", optionB: "Equity method", optionC: "Consolidation (acquisition) method", optionD: "Cost method with no income recognition", correctOption: "B", explanation: "Significant influence (usually 20–50% ownership) triggers the equity method, recognizing a proportionate share of the investee's earnings.", orderIndex: 0 },
  { id: "cfa2-financial-reporting-intercorporate-investments-q02", topicId: "cfa2-financial-reporting-intercorporate-investments", text: "Under the equity method, dividends received from the associate are:", optionA: "Recognized as income", optionB: "A reduction of the carrying value of the investment", optionC: "Added to goodwill", optionD: "Recorded as a liability", correctOption: "B", explanation: "Dividends are treated as a return of investment, reducing the investment's carrying value rather than being booked as income.", orderIndex: 1 },
  { id: "cfa2-financial-reporting-intercorporate-investments-q03", topicId: "cfa2-financial-reporting-intercorporate-investments", text: "When one company obtains control (>50%) of another, it uses:", optionA: "The equity method", optionB: "Consolidation under the acquisition method", optionC: "Fair value through profit or loss", optionD: "Proportionate consolidation only", correctOption: "B", explanation: "Control requires full consolidation using the acquisition method, combining 100% of the subsidiary's assets and liabilities.", orderIndex: 2 },
  { id: "cfa2-financial-reporting-intercorporate-investments-q04", topicId: "cfa2-financial-reporting-intercorporate-investments", text: "Goodwill arising in a business combination is:", optionA: "Amortized over 40 years", optionB: "Not amortized but tested for impairment", optionC: "Expensed immediately", optionD: "Recorded as a liability", correctOption: "B", explanation: "Under both IFRS and US GAAP, goodwill is not amortized; it is carried and tested for impairment.", orderIndex: 3 },
  { id: "cfa2-financial-reporting-intercorporate-investments-q05", topicId: "cfa2-financial-reporting-intercorporate-investments", text: "Goodwill in an acquisition equals the purchase price minus the:", optionA: "Book value of the target's equity", optionB: "Fair value of identifiable net assets acquired", optionC: "Market capitalization of the acquirer", optionD: "Non-controlling interest", correctOption: "B", explanation: "Goodwill is the excess of consideration paid over the fair value of the identifiable net assets acquired.", orderIndex: 4 },
  { id: "cfa2-financial-reporting-intercorporate-investments-q06", topicId: "cfa2-financial-reporting-intercorporate-investments", text: "A non-controlling interest appears on the consolidated balance sheet when the parent owns:", optionA: "100% of the subsidiary", optionB: "Less than 100% but a controlling stake", optionC: "Under 20%", optionD: "Exactly 50% with no control", correctOption: "B", explanation: "When a parent controls but does not wholly own a subsidiary, the portion not owned is reported as non-controlling (minority) interest.", orderIndex: 5 },
  { id: "cfa2-financial-reporting-intercorporate-investments-q07", topicId: "cfa2-financial-reporting-intercorporate-investments", text: "Equity securities held with no significant influence are generally measured at:", optionA: "Amortized cost", optionB: "Fair value", optionC: "The equity method", optionD: "Historical cost less impairment", correctOption: "B", explanation: "Passive equity investments (<20%, no influence) are carried at fair value, with changes in FVPL or FVOCI.", orderIndex: 6 },
  { id: "cfa2-financial-reporting-intercorporate-investments-q08", topicId: "cfa2-financial-reporting-intercorporate-investments", text: "Compared with the equity method, full consolidation generally results in reported revenue and total assets that are:", optionA: "Lower", optionB: "Higher", optionC: "Identical", optionD: "Always negative", correctOption: "B", explanation: "Consolidation brings in 100% of the subsidiary's revenue and assets, so reported totals are higher than the one-line equity method, though net income to the parent is the same.", orderIndex: 7 },
  { id: "cfa2-financial-reporting-intercorporate-investments-q09", topicId: "cfa2-financial-reporting-intercorporate-investments", text: "A joint venture with shared control is typically accounted for under IFRS using the:", optionA: "Equity method", optionB: "Full consolidation", optionC: "Fair value method", optionD: "Cost method", correctOption: "A", explanation: "IFRS requires the equity method for joint ventures (shared control), rather than proportionate consolidation in most cases.", orderIndex: 8 },
  { id: "cfa2-financial-reporting-intercorporate-investments-q10", topicId: "cfa2-financial-reporting-intercorporate-investments", text: "In the acquisition method, the acquired company's identifiable assets and liabilities are recorded at their:", optionA: "Original book values", optionB: "Fair values at the acquisition date", optionC: "Replacement cost", optionD: "Tax basis", correctOption: "B", explanation: "The acquisition method records identifiable assets and liabilities at their acquisition-date fair values.", orderIndex: 9 },
  { id: "cfa2-financial-reporting-intercorporate-investments-q11", topicId: "cfa2-financial-reporting-intercorporate-investments", text: "Net income attributable to the parent is generally the same under the equity method and consolidation because:", optionA: "Both recognize the parent's economic share of the subsidiary's profit", optionB: "Goodwill is amortized identically", optionC: "Dividends are income in both", optionD: "Revenue is identical in both", correctOption: "A", explanation: "Both methods ultimately attribute the same economic share of subsidiary earnings to the parent; only the gross presentation differs.", orderIndex: 10 },
  { id: "cfa2-financial-reporting-intercorporate-investments-q12", topicId: "cfa2-financial-reporting-intercorporate-investments", text: "Classifying a debt investment as 'held to maturity' (amortized cost) rather than fair value requires:", optionA: "Intent and ability to hold until maturity", optionB: "Ownership above 50%", optionC: "Significant influence", optionD: "Shared control", correctOption: "A", explanation: "Amortized-cost (held-to-maturity) treatment requires both the intent and the ability to hold the debt security to maturity.", orderIndex: 11 },

  // FCFF/FCFE
  { id: "cfa2-equity-fcf-valuation-q01", topicId: "cfa2-equity-fcf-valuation", text: "Free cash flow to the firm (FCFF) represents cash available to:", optionA: "Common shareholders only", optionB: "All capital providers (debt and equity)", optionC: "Preferred shareholders only", optionD: "The government", correctOption: "B", explanation: "FCFF is the cash flow available to all suppliers of capital after operating expenses and investments, before financing payments.", orderIndex: 0 },
  { id: "cfa2-equity-fcf-valuation-q02", topicId: "cfa2-equity-fcf-valuation", text: "FCFF should be discounted at the:", optionA: "Cost of equity", optionB: "Weighted average cost of capital (WACC)", optionC: "Risk-free rate", optionD: "Cost of debt", correctOption: "B", explanation: "Because FCFF accrues to all capital providers, it is discounted at the WACC to obtain firm value.", orderIndex: 1 },
  { id: "cfa2-equity-fcf-valuation-q03", topicId: "cfa2-equity-fcf-valuation", text: "FCFE is most appropriately discounted at the:", optionA: "WACC", optionB: "Cost of equity", optionC: "After-tax cost of debt", optionD: "Government bond yield", correctOption: "B", explanation: "FCFE belongs to equity holders, so it is discounted at the required return on equity to value equity directly.", orderIndex: 2 },
  { id: "cfa2-equity-fcf-valuation-q04", topicId: "cfa2-equity-fcf-valuation", text: "Starting from net income, FCFF adds back:", optionA: "Dividends paid", optionB: "Non-cash charges and after-tax interest expense", optionC: "Net borrowing", optionD: "Share repurchases", correctOption: "B", explanation: "FCFF = NI + non-cash charges + Int(1−t) − FCInv − WCInv; after-tax interest is added back because FCFF is pre-financing.", orderIndex: 3 },
  { id: "cfa2-equity-fcf-valuation-q05", topicId: "cfa2-equity-fcf-valuation", text: "The relationship between FCFF and FCFE is FCFE =", optionA: "FCFF + Int(1−t) − Net borrowing", optionB: "FCFF − Int(1−t) + Net borrowing", optionC: "FCFF + FCInv", optionD: "FCFF − dividends", correctOption: "B", explanation: "FCFE = FCFF − after-tax interest + net borrowing, reflecting cash flows to and from debt holders.", orderIndex: 4 },
  { id: "cfa2-equity-fcf-valuation-q06", topicId: "cfa2-equity-fcf-valuation", text: "To move from firm value (from FCFF) to equity value, an analyst:", optionA: "Adds the market value of debt", optionB: "Subtracts the market value of debt", optionC: "Adds back interest", optionD: "Subtracts dividends", correctOption: "B", explanation: "Equity value = firm value − market value of debt (and other non-equity claims).", orderIndex: 5 },
  { id: "cfa2-equity-fcf-valuation-q07", topicId: "cfa2-equity-fcf-valuation", text: "FCFE is often preferred over a dividend discount model when:", optionA: "Dividends differ significantly from the firm's capacity to pay", optionB: "The firm never invests", optionC: "There is no debt", optionD: "Earnings are negative forever", correctOption: "A", explanation: "FCFE values the capacity to distribute cash, which is more meaningful than actual dividends when payout policy diverges from cash generation.", orderIndex: 6 },
  { id: "cfa2-equity-fcf-valuation-q08", topicId: "cfa2-equity-fcf-valuation", text: "Using the single-stage model, firm value equals FCFF₁ divided by:", optionA: "(WACC − g)", optionB: "(r − g)", optionC: "WACC", optionD: "(g − WACC)", correctOption: "A", explanation: "The constant-growth FCFF model gives firm value = FCFF₁ / (WACC − g).", orderIndex: 7 },
  { id: "cfa2-equity-fcf-valuation-q09", topicId: "cfa2-equity-fcf-valuation", text: "An increase in working capital investment (WCInv), all else equal, will:", optionA: "Increase FCFF", optionB: "Decrease FCFF", optionC: "Not affect FCFF", optionD: "Increase net borrowing", correctOption: "B", explanation: "Investment in working capital is a use of cash, so a higher WCInv reduces FCFF (and FCFE).", orderIndex: 8 },
  { id: "cfa2-equity-fcf-valuation-q10", topicId: "cfa2-equity-fcf-valuation", text: "FCFF is generally preferred to FCFE when a company:", optionA: "Has a stable capital structure", optionB: "Has volatile or high leverage that can make FCFE negative", optionC: "Pays no taxes", optionD: "Has no fixed assets", correctOption: "B", explanation: "With changing or high leverage, FCFE can be volatile or negative; FCFF (discounted at WACC) is more stable in such cases.", orderIndex: 9 },
  { id: "cfa2-equity-fcf-valuation-q11", topicId: "cfa2-equity-fcf-valuation", text: "Net borrowing (new debt minus repayments) is added when computing:", optionA: "FCFF from net income", optionB: "FCFE", optionC: "WACC", optionD: "EBIT", correctOption: "B", explanation: "FCFE includes net borrowing because new debt provides cash to equity holders and repayments use it.", orderIndex: 10 },
  { id: "cfa2-equity-fcf-valuation-q12", topicId: "cfa2-equity-fcf-valuation", text: "Non-cash charges such as depreciation are added back in FCF calculations because they:", optionA: "Are cash outflows", optionB: "Reduced net income without using cash", optionC: "Represent new investment", optionD: "Are financing flows", correctOption: "B", explanation: "Depreciation and similar non-cash charges lowered accounting income but did not consume cash, so they are added back.", orderIndex: 11 },

  // Residual Income
  { id: "cfa2-equity-residual-income-q01", topicId: "cfa2-equity-residual-income", text: "Residual income equals net income minus a charge for:", optionA: "The cost of debt", optionB: "Equity capital (required return × beginning book value)", optionC: "Taxes", optionD: "Depreciation", correctOption: "B", explanation: "Residual income is the profit remaining after charging for the cost of equity capital employed.", orderIndex: 0 },
  { id: "cfa2-equity-residual-income-q02", topicId: "cfa2-equity-residual-income", text: "The residual income model expresses intrinsic value as:", optionA: "Only the present value of future dividends", optionB: "Current book value plus the present value of future residual income", optionC: "Book value minus debt", optionD: "The sum of all future sales", correctOption: "B", explanation: "Value = current book value + PV of expected future residual income.", orderIndex: 1 },
  { id: "cfa2-equity-residual-income-q03", topicId: "cfa2-equity-residual-income", text: "A firm creates value above book value only when:", optionA: "ROE exceeds the required return on equity", optionB: "ROE equals the required return", optionC: "ROE is below the required return", optionD: "Growth exceeds the required return", correctOption: "A", explanation: "Positive residual income (value above book) requires ROE > r, the cost of equity.", orderIndex: 2 },
  { id: "cfa2-equity-residual-income-q04", topicId: "cfa2-equity-residual-income", text: "Relative to the dividend discount model, the residual income model typically:", optionA: "Relies more heavily on the terminal value", optionB: "Recognizes value earlier and depends less on the terminal value", optionC: "Cannot value non-dividend payers", optionD: "Ignores book value", correctOption: "B", explanation: "RI front-loads value into current book value and near-term RI, reducing dependence on uncertain terminal values.", orderIndex: 3 },
  { id: "cfa2-equity-residual-income-q05", topicId: "cfa2-equity-residual-income", text: "The residual income model assumes ____ accounting, where all changes in equity except transactions with owners flow through income.", optionA: "Cash-basis", optionB: "Clean-surplus", optionC: "Tax-basis", optionD: "Fair-value-only", correctOption: "B", explanation: "RI relies on clean-surplus accounting; violations (e.g., certain OCI items) distort the model.", orderIndex: 4 },
  { id: "cfa2-equity-residual-income-q06", topicId: "cfa2-equity-residual-income", text: "A firm with beginning book value $40, ROE of 15%, required return 10%, and growth 4% has an intrinsic value (single-stage) closest to:", optionA: "$40", optionB: "$73", optionC: "$60", optionD: "$33", correctOption: "B", explanation: "V = 40 + [(0.15 − 0.10)/(0.10 − 0.04)]×40 = 40 + (0.05/0.06)×40 ≈ 40 + 33.3 = $73.3.", orderIndex: 5 },
  { id: "cfa2-equity-residual-income-q07", topicId: "cfa2-equity-residual-income", text: "A persistence factor (ω) in a residual income model controls:", optionA: "The tax rate", optionB: "How quickly abnormal residual income decays toward zero", optionC: "The risk-free rate", optionD: "Dividend payout", correctOption: "B", explanation: "The persistence factor models the fade of residual income as competition erodes abnormal returns.", orderIndex: 6 },
  { id: "cfa2-equity-residual-income-q08", topicId: "cfa2-equity-residual-income", text: "A weakness of the residual income model is its sensitivity to:", optionA: "Dividend policy", optionB: "Book value and accounting quality", optionC: "The number of shares outstanding", optionD: "Stock liquidity", correctOption: "B", explanation: "Because it builds on book value and reported earnings, RI is sensitive to accounting choices and quality.", orderIndex: 7 },
  { id: "cfa2-equity-residual-income-q09", topicId: "cfa2-equity-residual-income", text: "Residual income valuation is especially useful for firms that:", optionA: "Pay large stable dividends", optionB: "Do not pay dividends or have negative near-term free cash flow", optionC: "Have no book value", optionD: "Are risk-free", correctOption: "B", explanation: "RI handles non-dividend payers and negative-FCF firms better than DDM/FCF models.", orderIndex: 8 },
  { id: "cfa2-equity-residual-income-q10", topicId: "cfa2-equity-residual-income", text: "If a company's ROE exactly equals its cost of equity, its intrinsic value under the RI model equals:", optionA: "Zero", optionB: "Book value", optionC: "Twice book value", optionD: "The terminal value", correctOption: "B", explanation: "With ROE = r, residual income is zero and intrinsic value equals current book value.", orderIndex: 9 },
  { id: "cfa2-equity-residual-income-q11", topicId: "cfa2-equity-residual-income", text: "The equity charge in a residual income calculation is computed using:", optionA: "Ending book value × WACC", optionB: "Beginning book value of equity × required return on equity", optionC: "Net income × tax rate", optionD: "Market cap × beta", correctOption: "B", explanation: "The equity charge = beginning book value of equity multiplied by the required return on equity.", orderIndex: 10 },
  { id: "cfa2-equity-residual-income-q12", topicId: "cfa2-equity-residual-income", text: "Continuing (terminal) residual income that persists indefinitely at a constant level would be valued as a:", optionA: "Growing annuity at the growth rate", optionB: "Perpetuity discounted at the required return", optionC: "Zero", optionD: "Lump sum at book value", correctOption: "B", explanation: "Constant perpetual residual income is valued as a perpetuity (RI / r) in the continuing-value term.", orderIndex: 11 },

  // Arbitrage-Free Valuation & OAS
  { id: "cfa2-fixed-income-arbitrage-free-oas-q01", topicId: "cfa2-fixed-income-arbitrage-free-oas", text: "Arbitrage-free valuation of a bond discounts each cash flow at the:", optionA: "Single yield to maturity", optionB: "Maturity-matched spot rate", optionC: "Coupon rate", optionD: "Forward rate only", correctOption: "B", explanation: "Each cash flow is discounted at its corresponding spot rate so that stripping and reconstitution offer no arbitrage.", orderIndex: 0 },
  { id: "cfa2-fixed-income-arbitrage-free-oas-q02", topicId: "cfa2-fixed-income-arbitrage-free-oas", text: "The value of a callable bond equals the value of an otherwise identical straight bond:", optionA: "Plus the value of the call option", optionB: "Minus the value of the call option", optionC: "Plus the value of a put option", optionD: "Unchanged", correctOption: "B", explanation: "The issuer's call option has value to the issuer, so Value_callable = Value_straight − Value_call.", orderIndex: 1 },
  { id: "cfa2-fixed-income-arbitrage-free-oas-q03", topicId: "cfa2-fixed-income-arbitrage-free-oas", text: "The value of a putable bond equals the straight-bond value:", optionA: "Minus the value of the put", optionB: "Plus the value of the put", optionC: "Minus the value of a call", optionD: "Times the put delta", correctOption: "B", explanation: "The investor's put option adds value, so Value_putable = Value_straight + Value_put.", orderIndex: 2 },
  { id: "cfa2-fixed-income-arbitrage-free-oas-q04", topicId: "cfa2-fixed-income-arbitrage-free-oas", text: "Increasing interest-rate volatility will, all else equal, cause the price of a callable bond to:", optionA: "Increase", optionB: "Decrease", optionC: "Stay the same", optionD: "Become negative", correctOption: "B", explanation: "Higher volatility raises the call option's value; since it is subtracted, the callable bond's price falls.", orderIndex: 3 },
  { id: "cfa2-fixed-income-arbitrage-free-oas-q05", topicId: "cfa2-fixed-income-arbitrage-free-oas", text: "Increasing interest-rate volatility will cause the price of a putable bond to:", optionA: "Increase", optionB: "Decrease", optionC: "Stay the same", optionD: "Always equal par", correctOption: "A", explanation: "Higher volatility raises the put's value, which is added to the straight-bond value, increasing the putable bond's price.", orderIndex: 4 },
  { id: "cfa2-fixed-income-arbitrage-free-oas-q06", topicId: "cfa2-fixed-income-arbitrage-free-oas", text: "The option-adjusted spread (OAS) is best described as the Z-spread:", optionA: "Plus the option cost", optionB: "After removing the effect of the embedded option", optionC: "Computed at a single discount rate", optionD: "For a risk-free bond", correctOption: "B", explanation: "OAS strips out the embedded option's effect, leaving a spread comparable across bonds with different optionality.", orderIndex: 5 },
  { id: "cfa2-fixed-income-arbitrage-free-oas-q07", topicId: "cfa2-fixed-income-arbitrage-free-oas", text: "For a callable bond, the OAS is generally:", optionA: "Greater than the Z-spread", optionB: "Less than the Z-spread", optionC: "Equal to the Z-spread", optionD: "Negative", correctOption: "B", explanation: "The call option's cost is subtracted from the Z-spread, so OAS < Z-spread for callables.", orderIndex: 6 },
  { id: "cfa2-fixed-income-arbitrage-free-oas-q08", topicId: "cfa2-fixed-income-arbitrage-free-oas", text: "Bonds with embedded options are best valued using:", optionA: "A single discount rate", optionB: "A calibrated, arbitrage-free interest-rate tree with backward induction", optionC: "Only the current spot rate", optionD: "The dividend discount model", correctOption: "B", explanation: "An arbitrage-free binomial interest-rate tree lets the option be exercised optimally at each node via backward induction.", orderIndex: 7 },
  { id: "cfa2-fixed-income-arbitrage-free-oas-q09", topicId: "cfa2-fixed-income-arbitrage-free-oas", text: "The Z-spread differs from the nominal spread in that it is measured relative to the:", optionA: "Single benchmark YTM", optionB: "Entire spot-rate (zero) curve", optionC: "Coupon rate", optionD: "Forward rate", correctOption: "B", explanation: "The Z-spread is the constant spread added to every spot rate on the benchmark curve to price the bond.", orderIndex: 8 },
  { id: "cfa2-fixed-income-arbitrage-free-oas-q10", topicId: "cfa2-fixed-income-arbitrage-free-oas", text: "If two callable bonds have the same Z-spread but different option costs, the one with the higher option cost has the:", optionA: "Higher OAS", optionB: "Lower OAS", optionC: "Same OAS", optionD: "Higher coupon", correctOption: "B", explanation: "OAS = Z-spread − option cost, so a larger option cost yields a lower OAS at the same Z-spread.", orderIndex: 9 },
  { id: "cfa2-fixed-income-arbitrage-free-oas-q11", topicId: "cfa2-fixed-income-arbitrage-free-oas", text: "An OAS that is higher than that of comparable bonds suggests the bond is, all else equal:", optionA: "Overvalued", optionB: "Undervalued (cheap)", optionC: "Fairly valued", optionD: "Risk-free", correctOption: "B", explanation: "A wider OAS means more compensation for the same option-adjusted risk, signaling the bond may be relatively cheap.", orderIndex: 10 },
  { id: "cfa2-fixed-income-arbitrage-free-oas-q12", topicId: "cfa2-fixed-income-arbitrage-free-oas", text: "Reconstitution arbitrage is prevented when a bond is priced using:", optionA: "Its yield to maturity", optionB: "Spot rates for each cash flow (arbitrage-free value)", optionC: "The coupon rate", optionD: "A flat discount rate", correctOption: "B", explanation: "Pricing each cash flow at the appropriate spot rate equates the bond to its stripped components, eliminating reconstitution arbitrage.", orderIndex: 11 },

  // Option Valuation: Binomial & BSM
  { id: "cfa2-derivatives-option-valuation-q01", topicId: "cfa2-derivatives-option-valuation", text: "In risk-neutral option valuation, the option price does NOT depend on:", optionA: "The risk-free rate", optionB: "Investors' real-world probabilities of up/down moves", optionC: "The strike price", optionD: "The volatility of the underlying", correctOption: "B", explanation: "Once the option is replicated/hedged, only risk-neutral probabilities matter; real-world probabilities are irrelevant.", orderIndex: 0 },
  { id: "cfa2-derivatives-option-valuation-q02", topicId: "cfa2-derivatives-option-valuation", text: "The Black-Scholes-Merton model assumes the underlying price is:", optionA: "Normally distributed", optionB: "Lognormally distributed", optionC: "Uniformly distributed", optionD: "Constant", correctOption: "B", explanation: "BSM assumes lognormal prices (normally distributed continuously compounded returns), constant volatility, and a constant risk-free rate.", orderIndex: 1 },
  { id: "cfa2-derivatives-option-valuation-q03", topicId: "cfa2-derivatives-option-valuation", text: "Delta measures an option's sensitivity to a change in:", optionA: "Volatility", optionB: "The price of the underlying", optionC: "Time", optionD: "Interest rates", correctOption: "B", explanation: "Delta is the rate of change of the option price with respect to the underlying's price (0→1 for calls).", orderIndex: 2 },
  { id: "cfa2-derivatives-option-valuation-q04", topicId: "cfa2-derivatives-option-valuation", text: "Gamma is largest for options that are:", optionA: "Deep in the money", optionB: "At the money", optionC: "Deep out of the money", optionD: "Already expired", correctOption: "B", explanation: "Gamma (the rate of change of delta) peaks for at-the-money options near expiration.", orderIndex: 3 },
  { id: "cfa2-derivatives-option-valuation-q05", topicId: "cfa2-derivatives-option-valuation", text: "Vega measures sensitivity to changes in:", optionA: "The underlying price", optionB: "Implied volatility", optionC: "Time to expiry", optionD: "The risk-free rate", correctOption: "B", explanation: "Vega captures how the option value changes with volatility; it is largest for at-the-money, longer-dated options.", orderIndex: 4 },
  { id: "cfa2-derivatives-option-valuation-q06", topicId: "cfa2-derivatives-option-valuation", text: "In the one-period binomial model, the risk-neutral probability of an up move is:", optionA: "(1 + r − d)/(u − d)", optionB: "(u − d)/(1 + r)", optionC: "(u − 1 − r)/(u − d)", optionD: "(1 + r)/(u·d)", correctOption: "A", explanation: "π = (1 + r − d)/(u − d) is the risk-neutral up-probability.", orderIndex: 5 },
  { id: "cfa2-derivatives-option-valuation-q07", topicId: "cfa2-derivatives-option-valuation", text: "Theta generally reflects an option's:", optionA: "Gain from volatility", optionB: "Loss of value as time passes (time decay)", optionC: "Sensitivity to interest rates", optionD: "Delta hedge ratio", correctOption: "B", explanation: "Theta measures time decay—the erosion of an option's value as expiration approaches, all else equal.", orderIndex: 6 },
  { id: "cfa2-derivatives-option-valuation-q08", topicId: "cfa2-derivatives-option-valuation", text: "A delta-neutral hedge must be rebalanced because of:", optionA: "Rho", optionB: "Gamma (delta changes as the underlying moves)", optionC: "Theta", optionD: "The strike price", correctOption: "B", explanation: "Gamma means delta itself changes with the underlying, so a delta hedge drifts and requires rebalancing.", orderIndex: 7 },
  { id: "cfa2-derivatives-option-valuation-q09", topicId: "cfa2-derivatives-option-valuation", text: "In the BSM call formula c = S·N(d₁) − Ke^(−rT)·N(d₂), N(d₂) is interpreted as the:", optionA: "Option's delta", optionB: "Risk-neutral probability the call expires in the money", optionC: "Gamma of the option", optionD: "Time value", correctOption: "B", explanation: "N(d₂) is the risk-neutral probability that the option is exercised (finishes in the money); N(d₁) relates to delta.", orderIndex: 8 },
  { id: "cfa2-derivatives-option-valuation-q10", topicId: "cfa2-derivatives-option-valuation", text: "The only input to the BSM model that is not directly observable is:", optionA: "The spot price", optionB: "Volatility", optionC: "The strike price", optionD: "Time to expiry", correctOption: "B", explanation: "Spot, strike, time, and rate are observable; volatility must be estimated (or implied from market prices).", orderIndex: 9 },
  { id: "cfa2-derivatives-option-valuation-q11", topicId: "cfa2-derivatives-option-valuation", text: "Increasing the volatility input in an option model raises the value of:", optionA: "Calls only", optionB: "Both calls and puts", optionC: "Puts only", optionD: "Neither", correctOption: "B", explanation: "Greater volatility increases the value of both calls and puts because of their asymmetric (limited-loss) payoffs.", orderIndex: 10 },
  { id: "cfa2-derivatives-option-valuation-q12", topicId: "cfa2-derivatives-option-valuation", text: "As the number of steps in a binomial tree increases toward infinity, its option value converges to the:", optionA: "Intrinsic value", optionB: "Black-Scholes-Merton value", optionC: "Forward price", optionD: "Strike price", correctOption: "B", explanation: "A finely subdivided binomial tree converges to the continuous-time BSM value.", orderIndex: 11 }
];

export const cfaLevel2 = defineBundle({ exam, subjects, topics, materials, questions });
