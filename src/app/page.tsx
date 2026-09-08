"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { clubEvents, EventItem } from "@/data/events";
import { clubAnnouncements } from "@/data/announcements";
import { submitToSheetDB } from "@/lib/sheetdb";

export default function HomePage() {
  const upcomingEvents = clubEvents.filter((e) => e.category === "upcoming");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regEmail || !selectedEvent) return;
    setLoading(true);

    await submitToSheetDB({
      type: "registration",
      name: regName,
      email: regEmail,
      event: selectedEvent.name,
    });

    setLoading(false);
    setRegistered(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setRegistered(false);
    setRegName("");
    setRegEmail("");
  };

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30 pointer-events-none">
          <div className="w-[650px] h-[650px] bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              OFFICIAL QUANT & TRADING CLUB OF BITS HYDERABAD
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Where Quantitative Rigor Meets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
                Market Instinct.
              </span>
            </h1>

            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
              We empower engineers, mathematicians, and scientists at BPHC to decode global financial markets through statistical modeling, algorithmic execution, derivatives mechanics, and disciplined risk architecture.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <Link
                href="/events"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm shadow-lg shadow-emerald-500/25 transition-all active:scale-95"
              >
                Explore Upcoming Events
              </Link>
              <Link
                href="/about"
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
              >
                Learn About the Club
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-84 aspect-square rounded-3xl p-8 bg-gradient-to-b from-[#141A24] to-[#0A0D14] border border-white/15 shadow-2xl flex flex-col items-center justify-center text-center group hover:border-emerald-500/40 transition-colors">
              <div className="w-40 h-40 relative mb-4">
                <Image
                  src="/traders-logo.png"
                  alt="Traders Bull Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_28px_rgba(16,185,129,0.35)] transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="font-mono text-sm font-bold uppercase tracking-widest text-emerald-400">
                TRADERS @ BPHC
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Alpha, Algorithms & Capital Markets
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics / Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: "Active Members", val: "500+" },
            { label: "Virtual Capital Deployed", val: "₹50L+" },
            { label: "Flagship Competitions", val: "15+" },
            { label: "Fin/Quant Placements", val: "100%" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#0F141C] border border-white/10 hover:border-emerald-500/30 transition-all text-center group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono group-hover:scale-105 transition-transform">
                {stat.val}
              </div>
              <div className="text-xs text-zinc-400 mt-2 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Announcements & News Feed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Bulletin & Dispatches
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Latest Club Announcements
            </h2>
          </div>
          <Link
            href="/about"
            className="text-sm text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1"
          >
            Explore Divisions &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clubAnnouncements.map((ann) => (
            <div
              key={ann.id}
              className="p-6 rounded-2xl bg-[#0F141C] border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {ann.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">{ann.date}</span>
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{ann.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{ann.summary}</p>
              </div>

              {ann.linkHref && (
                <div className="pt-4 mt-4 border-t border-white/5">
                  <Link
                    href={ann.linkHref}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
                  >
                    {ann.linkText || "Learn more"} &rarr;
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Upcoming Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Live Challenges
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Featured Flagship Events
            </h2>
          </div>
          <Link
            href="/events"
            className="text-sm text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1"
          >
            View all archives &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((evt) => (
            <div
              key={evt.id}
              className="p-6 rounded-2xl bg-[#0F141C] border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {evt.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">{evt.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{evt.name}</h3>
                <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">{evt.description}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">{evt.venue}</span>
                <button
                  onClick={() => {
                    setSelectedEvent(evt);
                    setRegistered(false);
                  }}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black transition-colors shadow-sm"
                >
                  Quick Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Activities Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#111722] to-[#0B0E14] border border-white/10 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Transforming Students into Market Practitioners
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Whether you want to construct statistical arbitrage strategies, pitch institutional stock ideas, or master option volatility spreads, Traders provides the platform, data, and community.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-white/5 text-left border border-white/5 space-y-2">
              <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">{"01 // QUANT & ALGO"}</div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Backtesting automated bots using Python, statistical time series models, and high-frequency order book simulation.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white/5 text-left border border-white/5 space-y-2">
              <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">{"02 // DERIVATIVES & F&O"}</div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Mastering delta hedging, iron condors, straddles, and market volatility through rigorous risk management principles.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white/5 text-left border border-white/5 space-y-2">
              <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">{"03 // EQUITY RESEARCH"}</div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Fundamental business teardowns, discounted cash flow (DCF) modeling, and investor pitches presented to industry leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Registration Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md p-6 rounded-2xl bg-[#0F141C] border border-white/20 shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1"
            >
              ✕
            </button>

            {registered ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Registration Confirmed!</h3>
                <p className="text-xs text-zinc-400">
                  You have been registered for <span className="text-emerald-400 font-semibold">{selectedEvent.name}</span>. Check your inbox for joining details.
                </p>
                <button
                  onClick={closeModal}
                  className="w-full py-2.5 rounded-lg text-xs font-semibold bg-emerald-500 text-black hover:bg-emerald-400 transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                    {selectedEvent.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white">{selectedEvent.name}</h3>
                  <p className="text-xs text-zinc-400 mt-1">{selectedEvent.date} • {selectedEvent.venue}</p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs text-zinc-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. f20230000@hyderabad.bits-pilani.ac.in"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-black transition-colors disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Confirm Free Registration"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}