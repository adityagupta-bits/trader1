import { Announcement } from "./types";

export type { Announcement };

export const clubAnnouncements: Announcement[] = [
  {
    id: "ann-1",
    title: "Winter Quant Research Cohort Applications Open",
    date: "February 24, 2026",
    category: "Applications",
    summary: "Join our intensive 6-week research fellowship covering statistical time-series forecasting, machine learning for momentum trading, and low-latency systems.",
    linkText: "Apply via Portal",
    linkHref: "/contact",
  },
  {
    id: "ann-2",
    title: "Results Announced: National Mock Stock 2026",
    date: "February 12, 2026",
    category: "Results",
    summary: "Over 850 participants competed in our live simulated order book. Congratulations to Team AlphaForge from IIT Bombay & Team Quantrix from BITS Pilani!",
    linkText: "View Leaderboard",
    linkHref: "/events",
  },
  {
    id: "ann-3",
    title: "Quarterly Indian Market Macro Report Released",
    date: "January 30, 2026",
    category: "Research",
    summary: "Our equity research desk released the Q1 2026 comprehensive macroeconomic breakdown on RBI monetary policy, Nifty earnings revisions, and FII flows.",
    linkText: "Read Report",
    linkHref: "/about",
  },
];