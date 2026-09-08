"use client";
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono">
        HTTP 404 // ORDER NOT FOUND
      </div>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-mono tracking-tight">
        404 - Liquidity Void
      </h1>
      <p className="text-zinc-400 max-w-md text-sm sm:text-base leading-relaxed">
        The route or market asset you requested does not exist on our order book. Return to our main terminal.
      </p>
      <div className="pt-2">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs uppercase tracking-wider transition-all"
        >
          Return to Terminal
        </Link>
      </div>
    </div>
  );
}