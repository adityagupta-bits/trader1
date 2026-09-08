"use client";
import React from "react";
import Link from "next/link";

export default function AboutPage() {
  const divisions = [
    {
      num: "01",
      title: "Quantitative Research & Strategy",
      desc: "Develops systematic trading models, statistical arbitrage engines, volatility surface estimators, and machine-learning driven alpha signals using Python and C++.",
      skills: ["Time Series Analysis", "GARCH Models", "NumPy & Pandas", "Machine Learning"],
    },
    {
      num: "02",
      title: "Derivatives & Technical Analysis",
      desc: "Focuses on Indian F&O (NSE Nifty/BankNifty options & futures), implementing delta-neutral hedging, calendar spreads, and order book momentum dynamics.",
      skills: ["Options Greeks", "Volatility Skew", "Risk Hedging", "Price Action Analysis"],
    },
    {
      num: "03",
      title: "Equity Research & Fundamental Valuation",
      desc: "Conducts institutional-grade equity valuation, DCF modeling, unit economics analysis, and macro policy forecasting across key Indian industries.",
      skills: ["DCF Valuation", "Financial Statements", "Comparable Multiples", "Sector Thematics"],
    },
    {
      num: "04",
      title: "Tech, Data & Systems Infrastructure",
      desc: "Engineers high-throughput order matching simulators, real-time WebSocket ticker feeds, backtesting cloud pipelines, and internal tools.",
      skills: ["Next.js & React", "TypeScript & Node.js", "C++ Low-Latency", "PostgreSQL & Timescale"],
    },
  ];

  const initiatives = [
    {
      title: "Mock Stock Trading Floors",
      desc: "High-pressure real-time trading floor simulations during college festivals and national leagues with dynamic news shocks and live volatile order books.",
    },
    {
      title: "Quant Research Lab & Cohorts",
      desc: "Selective 6-week research fellowships where students author original backtested algorithmic strategies, statistical whitepapers, and backtest results.",
    },
    {
      title: "Derivatives & Financial Bootcamps",
      desc: "Intensive beginner-to-advanced workshops demystifying options Greeks, portfolio optimization, factor investing, and risk budgeting.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          ABOUT TRADERS @ BPHC
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Demystifying Capital Markets with Engineering Precision.
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
          Founded at BITS Pilani, Hyderabad Campus, Traders is the official student body dedicated to quantitative finance, equity research, derivatives strategies, and algorithmic trading.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-[#0F141C] border border-white/10 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-mono font-bold text-lg">
            M
          </div>
          <h2 className="text-xl font-bold text-white">Our Mission</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            To bridge the gap between academic STEM training and real-world capital markets. We equip students with practical skills in financial data analysis, risk management, and quantitative strategy design.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-[#0F141C] border border-white/10 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-mono font-bold text-lg">
            V
          </div>
          <h2 className="text-xl font-bold text-white">Our Vision</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            To establish BITS Pilani Hyderabad as a premier talent pipeline for global quantitative hedge funds, proprietary trading desks, and institutional asset management firms.
          </p>
        </div>
      </div>

      {/* Flagship Initiatives */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Core Club Initiatives
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initiatives.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0F141C] border border-white/10 hover:border-emerald-500/30 transition-all space-y-3"
            >
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Club Divisions Breakdown */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            Organizational Structure
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Our Specialized Divisions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {divisions.map((div) => (
            <div
              key={div.num}
              className="p-6 sm:p-8 rounded-2xl bg-[#0F141C] border border-white/10 hover:border-emerald-500/30 transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-emerald-400 text-sm font-bold">{div.num} {"//"}</span>
                <span className="text-xs font-mono text-zinc-500 uppercase">Division</span>
              </div>
              <h3 className="text-xl font-bold text-white">{div.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{div.desc}</p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {div.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#111722] to-[#0B0E14] border border-white/10 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Ready to Build Your Edge in Capital Markets?
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed">
          Whether you are an aspiring algorithmic developer or a fundamental equity analyst, Traders @ BPHC is your launchpad.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/events"
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs shadow-lg shadow-emerald-500/20 transition-all"
          >
            Explore Flagship Events
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-all"
          >
            Contact the Team
          </Link>
        </div>
      </div>
    </div>
  );
}