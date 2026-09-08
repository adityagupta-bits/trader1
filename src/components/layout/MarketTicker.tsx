"use client";
import React from "react";

const tickerItems = [
  { symbol: "NIFTY 50", price: "24,850.20", change: "▲ +0.85%", up: true },
  { symbol: "SENSEX", price: "81,220.40", change: "▲ +0.72%", up: true },
  { symbol: "NASDAQ", price: "18,430.60", change: "▲ +1.14%", up: true },
  { symbol: "TRADERS VIRTUAL AUM", price: "₹50L+", change: "SIMULATED", up: true },
  { symbol: "NEXT EVENT", price: "BULL RUN 2026", change: "REGISTRATION OPEN", up: true },
  { symbol: "QUANT SHARPE RATIO", price: "2.14", change: "ANNUALIZED", up: true },
];

export default function MarketTicker() {
  return (
    <div className="w-full bg-[#080B10] border-b border-white/5 py-1.5 overflow-hidden select-none text-xs font-mono">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 mx-5">
            <span className="text-zinc-400 font-semibold">{item.symbol}</span>
            <span className="text-zinc-200">{item.price}</span>
            <span className={item.up ? "text-emerald-400" : "text-rose-400"}>
              {item.change}
            </span>
            <span className="text-zinc-700">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}