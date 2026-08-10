// GENERATED FILE — do not edit by hand.
// Run `pnpm catalog:generate` to regenerate from the content bundle.
// packages/content/test/catalog.test.ts fails if this drifts.
//
// This module deliberately imports NOTHING from the exam bundles. Its whole
// purpose is to let UI that only needs exam names (the onboarding picker, the
// home countdown, the settings dropdown, the leaderboard filter) avoid pulling
// the 5.7 MB question corpus into the client bundle. Keep it dependency-free
// apart from the Exam type.
import type { Exam } from "@jyotir/core";

/** Every exam, ordered as the pickers display them. */
export const examCatalog: Exam[] = [
  {
    "id": "upsc",
    "slug": "upsc",
    "name": "UPSC Civil Services",
    "tagline": "Polity · History · Geography · Economy · Current Affairs",
    "orderIndex": 0
  },
  {
    "id": "jee-main",
    "slug": "jee-main",
    "name": "JEE Main",
    "tagline": "Physics · Chemistry · Mathematics — the NTA qualifier",
    "orderIndex": 1,
    "family": "jee",
    "familyName": "JEE",
    "familyTagline": "Joint Entrance Exam — pick your level",
    "levelLabel": "Main"
  },
  {
    "id": "jee-adv",
    "slug": "jee-adv",
    "name": "JEE Advanced",
    "tagline": "Deeper Physics · Chemistry · Maths for the IIT cutoff",
    "orderIndex": 2,
    "family": "jee",
    "familyName": "JEE",
    "familyTagline": "Joint Entrance Exam — pick your level",
    "levelLabel": "Advanced"
  },
  {
    "id": "neet",
    "slug": "neet",
    "name": "NEET UG",
    "tagline": "Biology · Chemistry · Physics for medical aspirants",
    "orderIndex": 2
  },
  {
    "id": "ssc-cgl",
    "slug": "ssc-cgl",
    "name": "SSC CGL",
    "tagline": "Quant · Reasoning · English · General Awareness",
    "orderIndex": 3
  },
  {
    "id": "gate",
    "slug": "gate",
    "name": "GATE",
    "tagline": "Engineering Maths · Aptitude · Core CS",
    "orderIndex": 4
  },
  {
    "id": "cfa-1",
    "slug": "cfa-1",
    "name": "CFA Level I",
    "tagline": "Foundations: Ethics · FRA · Equity · Fixed Income · Derivatives",
    "orderIndex": 5,
    "family": "cfa",
    "familyName": "CFA Program",
    "familyTagline": "Chartered Financial Analyst — pick your level",
    "levelLabel": "Level I"
  },
  {
    "id": "cfa-2",
    "slug": "cfa-2",
    "name": "CFA Level II",
    "tagline": "Asset valuation: Equity · Fixed Income · Derivatives · FRA",
    "orderIndex": 6,
    "family": "cfa",
    "familyName": "CFA Program",
    "familyTagline": "Chartered Financial Analyst — pick your level",
    "levelLabel": "Level II"
  },
  {
    "id": "cfa-3",
    "slug": "cfa-3",
    "name": "CFA Level III",
    "tagline": "Portfolio management & wealth: behavior · allocation · attribution",
    "orderIndex": 7,
    "family": "cfa",
    "familyName": "CFA Program",
    "familyTagline": "Chartered Financial Analyst — pick your level",
    "levelLabel": "Level III"
  },
  {
    "id": "frm-1",
    "slug": "frm-1",
    "name": "FRM Part I",
    "tagline": "Foundations · Quant · Markets & Products · Valuation models",
    "orderIndex": 8,
    "family": "frm",
    "familyName": "FRM (GARP)",
    "familyTagline": "Financial Risk Manager — pick your part",
    "levelLabel": "Part I"
  },
  {
    "id": "frm-2",
    "slug": "frm-2",
    "name": "FRM Part II",
    "tagline": "Market · Credit · Operational · Liquidity · Investment risk",
    "orderIndex": 9,
    "family": "frm",
    "familyName": "FRM (GARP)",
    "familyTagline": "Financial Risk Manager — pick your part",
    "levelLabel": "Part II"
  }
];

/**
 * examId -> the path of that exam's very first topic, used as the onboarding
 * taste-session destination. Precomputed so resolving it needs no topic data.
 */
export const firstTopicPathByExam: Record<string, string> = {
  "upsc": "/upsc/polity/fundamental-rights",
  "jee-main": "/jee-main/physics/kinematics-1d",
  "jee-adv": "/jee-adv/physics/rotational-dynamics",
  "neet": "/neet/biology/cell-structure-function",
  "ssc-cgl": "/ssc-cgl/quant/percentages-profit-loss",
  "gate": "/gate/engineering-mathematics/linear-algebra",
  "cfa-1": "/cfa-1/ethics/code-of-ethics-standards",
  "cfa-2": "/cfa-2/financial-reporting/intercorporate-investments",
  "cfa-3": "/cfa-3/behavioral/biases-portfolio",
  "frm-1": "/frm-1/foundations/risk-management-capm",
  "frm-2": "/frm-2/market-risk/var-methods-backtesting"
};
