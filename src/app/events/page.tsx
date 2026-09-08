"use client";
import React, { useState } from "react";
import { clubEvents, EventItem } from "@/data/events";
import { submitToSheetDB } from "@/lib/sheetdb";

export default function EventsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [registered, setRegistered] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const filteredEvents = clubEvents.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regEmail || !selectedEvent) return;
    setSubmitting(true);

    await submitToSheetDB({
      type: "registration",
      name: regName,
      email: regEmail,
      event: selectedEvent.name,
    });

    setSubmitting(false);
    setRegistered(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setRegistered(false);
    setRegName("");
    setRegEmail("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
          Calendar & Archives
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Competitions, Workshops & Summits
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Participate in national mock stock leagues, algorithmic trading challenges, and masterclasses conducted by Traders @ BPHC.
        </p>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 pt-4">
          {(["all", "upcoming", "past"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg capitalize transition-all ${
                filter === tab
                  ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab} Events
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((evt) => (
          <div
            key={evt.id}
            className="rounded-2xl bg-[#0F141C] border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between overflow-hidden group"
          >
            {/* Visual Poster Card Header */}
            <div className={`h-36 bg-gradient-to-br ${evt.posterBg} p-5 flex flex-col justify-between border-b border-white/5`}>
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/60 text-emerald-400 border border-emerald-500/30">
                  {evt.badge}
                </span>
                <span className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider">{evt.category}</span>
              </div>
              <div className="font-bold text-lg text-white line-clamp-1 group-hover:text-emerald-300 transition-colors">
                {evt.name}
              </div>
            </div>

            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <div className="text-xs font-mono text-emerald-400 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1">
                    📅 {evt.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    ⏰ {evt.time}
                  </span>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1.5">
                  <span>📍</span>
                  <span>{evt.venue}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 line-clamp-3 pt-1 leading-relaxed">
                  {evt.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                {evt.registrationOpen ? (
                  <button
                    onClick={() => {
                      setSelectedEvent(evt);
                      setRegistered(false);
                    }}
                    className="w-full py-2.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-black transition-all shadow-sm active:scale-[0.98]"
                  >
                    Register for Event
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full py-2.5 rounded-lg text-xs font-semibold bg-white/5 text-zinc-500 cursor-not-allowed border border-white/5"
                  >
                    Event Concluded
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Registration Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md p-6 sm:p-8 rounded-2xl bg-[#0F141C] border border-white/20 shadow-2xl">
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
                <h3 className="text-xl font-bold text-white">Registration Successful!</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  You are registered for <span className="text-emerald-400 font-semibold">{selectedEvent.name}</span>. Check your inbox for confirmation and session credentials.
                </p>
                <button
                  onClick={closeModal}
                  className="w-full py-2.5 rounded-lg text-xs font-semibold bg-emerald-500 text-black hover:bg-emerald-400 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                    {selectedEvent.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">{selectedEvent.name}</h3>
                  <div className="text-xs text-zinc-400 mt-1 font-mono">
                    {selectedEvent.date} • {selectedEvent.venue}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs text-zinc-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
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

                  <div>
                    <label className="block text-xs text-zinc-300 mb-1">Event Selected</label>
                    <input
                      type="text"
                      disabled
                      value={selectedEvent.name}
                      className="w-full px-3.5 py-2 text-xs rounded-lg bg-white/5 border border-white/5 text-zinc-500 cursor-not-allowed"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-black transition-colors disabled:opacity-50"
                >
                  {submitting ? "Processing..." : "Confirm Free Registration"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}