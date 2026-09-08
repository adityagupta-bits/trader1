import { FaqItem } from "./types";

export type { FaqItem };

export const clubFaqs: FaqItem[] = [
  {
    id: "faq-experience",
    question: "Do I need prior trading experience to join?",
    answer: "Not at all! We recruit freshmen and sophomores primarily based on analytical aptitude, problem-solving, and curiosity about market dynamics. We conduct structured training bootcamps covering financial accounting, derivative Greeks, and basic Python quantitative libraries from scratch.",
    category: "Recruitment",
  },
  {
    id: "faq-tech-stack",
    question: "What tech stack does the Quant team use?",
    answer: "Our quantitative pipeline heavily leverages Python (NumPy, Pandas, SciPy, statsmodels, PyTorch) for research and backtesting with vectorbt and Backtrader. For high-frequency market data pipelines and low-latency order matching simulators, we utilize C++20 and Rust alongside Redis and TimescaleDB.",
    category: "Quant & Tech",
  },
  {
    id: "faq-paper-trading",
    question: "How do the paper trading leagues work?",
    answer: "Participants are allocated a simulated virtual capital pool (e.g., ₹10,00,000) inside our custom web terminal connected to live market feeds (NSE/BSE). You place limit and market orders across equities and F&O instruments, subject to realistic slippage and margin constraints. Leaderboards rank portfolios by Sharpe Ratio, Sortino Ratio, and maximum drawdown.",
    category: "Competitions",
  },
  {
    id: "faq-recruitment-timeline",
    question: "When are inductions and recruitment drives conducted?",
    answer: "We run two primary recruitment cycles each academic year: the Autumn Intake (August/September) for freshmen and general inductions, and the Spring Cohort (January/February) targeted at specialized Quantitative Research and Tech division openings.",
    category: "Recruitment",
  },
  {
    id: "faq-alumni-network",
    question: "How does the club support internships and careers?",
    answer: "Traders @ BPHC maintains an active network of alumni working at top quantitative trading firms, hedge funds, investment banks, and fintech startups. We conduct mock interviews, resume reviews, algorithmic coding rounds, and invite alumni for closed-door technical masterclasses.",
    category: "General",
  },
];