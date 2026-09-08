"use client";
import React from "react";
import { teamMembers } from "@/data/team";

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
          Executive Leadership & Quants
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          The Minds Behind Traders @ BPHC
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Our leadership comprises quantitative researchers, algorithmic engineers, derivatives specialists, and equity analysts across BITS Pilani Hyderabad.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="p-6 rounded-2xl bg-[#0F141C] border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-lg text-emerald-400 font-mono group-hover:scale-105 transition-transform">
                  {member.name.charAt(0)}
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-400 border border-white/5">
                  {member.division}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">{member.name}</h3>
                <div className="text-xs text-emerald-400 font-medium">{member.role}</div>
                {member.bio && (
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                )}
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span>LinkedIn Profile</span>
                <span>&rarr;</span>
              </a>
              <span className="text-[10px] font-mono text-zinc-600">BPHC &apos;26</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}