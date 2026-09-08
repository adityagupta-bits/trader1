"use client";
import React from "react";
import Link from "next/link";
import TradersLogo from "./TradersLogo";

export default function Footer() {
  return (
    <footer className="bg-[#080B10] border-t border-white/10 pt-12 pb-8 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          <div className="md:col-span-2 space-y-4">
            <TradersLogo />
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              The premier student-led organization for Quantitative Finance, Algorithmic Trading, and Equity Valuation at BITS Pilani, Hyderabad Campus.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/traders_bphc/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-emerald-400 transition-colors text-xs font-medium inline-flex items-center gap-2"
                aria-label="Instagram"
              >
                <span>Instagram</span>
                <span className="text-zinc-500 font-mono">@traders_bphc</span>
              </a>
              <a
                href="https://www.linkedin.com/company/tradersatbphc"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-emerald-400 transition-colors text-xs font-medium inline-flex items-center gap-2"
                aria-label="LinkedIn"
              >
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Quick Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About the Club</Link></li>
              <li><Link href="/events" className="hover:text-emerald-400 transition-colors">Events & Competitions</Link></li>
              <li><Link href="/team" className="hover:text-emerald-400 transition-colors">Executive Team</Link></li>
              <li><Link href="/faq" className="hover:text-emerald-400 transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Campus Headquarters</h3>
            <p className="text-xs leading-relaxed text-zinc-400">
              BITS Pilani, Hyderabad Campus<br />
              Jawahar Nagar, Kapra Mandal<br />
              Hyderabad, Telangana 500078
            </p>
            <p className="text-xs font-mono text-emerald-400 mt-3">
              traders@hyderabad.bits-pilani.ac.in
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>&copy; 2026 Traders @ BPHC. All rights reserved.</p>
          <p className="font-mono">Built for Quantitative & Market Excellence</p>
        </div>
      </div>
    </footer>
  );
}