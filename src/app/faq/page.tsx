"use client";
import React, { useState } from "react";
import Link from "next/link";
import { clubFaqs } from "@/data/faq";

export default function FaqPage() {
  const [openId, setOpenId] = useState<string | null>("faq-experience");
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "General", "Recruitment", "Quant & Tech", "Competitions"];

  const filteredFaqs = clubFaqs.filter((item) => {
    if (filter === "All") return true;
    return item.category === filter;
  });

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          KNOWLEDGE BASE & GUIDES
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Everything you need to know about joining Traders @ BPHC, participating in mock stock competitions, and learning quantitative finance.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === cat
                  ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="rounded-2xl bg-[#0F141C] border border-white/10 overflow-hidden transition-all hover:border-white/20"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-semibold text-base sm:text-lg text-white">
                  {faq.question}
                </span>
                <span
                  className={`w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-xs font-mono text-emerald-400 transition-transform ${
                    isOpen ? "rotate-180 bg-emerald-500/10" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm text-zinc-400 leading-relaxed border-t border-white/5">
                  <p>{faq.answer}</p>
                  <div className="pt-4 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {faq.category}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-b from-[#111722] to-[#0B0E14] border border-white/10 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Still have questions?</h3>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
          Reach out to our leadership desk or drop by our weekly open trading floor sessions at BPHC.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-colors inline-block"
          >
            Contact the Desk
          </Link>
        </div>
      </div>
    </div>
  );
}