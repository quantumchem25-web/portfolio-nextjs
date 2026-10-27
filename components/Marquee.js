"use client";

import { tools } from "@/lib/data";

export default function Marquee() {
  const doubled = [...tools, ...tools];

  return (
    <div className="relative py-6 border-y border-white/5 overflow-hidden bg-[#0d0d14]">
      <div className="marquee-track">
        {doubled.map((tool, i) => (
          <span key={i} className="flex items-center gap-12 text-lg font-semibold text-[#9b9ba6] whitespace-nowrap">
            {tool}
            <span className="text-[#6366f1]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
