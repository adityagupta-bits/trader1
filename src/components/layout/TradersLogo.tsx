"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TradersLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      <div className="relative w-9 h-9 overflow-hidden rounded-lg bg-black border border-white/10 flex items-center justify-center p-1 group-hover:border-emerald-500/50 transition-colors">
        <Image
          src="/traders-logo.png"
          alt="Traders @ BPHC Logo"
          width={36}
          height={36}
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold tracking-wider text-base text-white group-hover:text-emerald-400 transition-colors">
          TRADERS
        </span>
        <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-500/90 -mt-1">
          BITS HYDERABAD
        </span>
      </div>
    </Link>
  );
}