"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const snapshots = [
  {
    name: "Private Productivity Community",
    members: "16,592",
    weeklyVisits: "127K",
    weeklyContributions: "4.6K",
    progress: 83,
    bars: [44, 56, 48, 72, 64, 88, 108]
  },
  {
    name: "Private Smart Shopping Community",
    members: "12,820",
    weeklyVisits: "82K",
    weeklyContributions: "1.2K",
    progress: 85,
    bars: [38, 46, 62, 58, 74, 70, 94]
  }
];

export function HeroSnapshot() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = snapshots[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % snapshots.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-500">Live program snapshot</p>
          <p className="mt-1 inline-flex break-words text-xl font-black text-ink sm:text-2xl">
            {active.name}
          </p>
        </div>
        <span className="w-fit rounded-full bg-teal/10 px-3 py-1 text-xs font-bold text-teal">Active</span>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Members", active.members],
          ["Weekly visits", active.weeklyVisits],
          ["Weekly contributions", active.weeklyContributions]
        ].map(([label, value]) => (
          <div key={label} className="rounded-md bg-cloud p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
            <p className="mt-2 text-xl font-black text-ink sm:text-2xl">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-slate-500">
          <span>Subscriber goal</span>
          <span>{active.progress}%</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-teal via-iris to-coral transition-all duration-700"
            style={{ width: `${active.progress}%` }}
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-7 items-end gap-1.5 sm:gap-2">
        {active.bars.map((height, index) => (
          <div
            key={`${active.name}-${index}`}
            className="rounded-t-md bg-ink/85 transition-all duration-700"
            style={{ height: Math.max(36, height) }}
          />
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {snapshots.map((snapshot, index) => (
          <button
            key={snapshot.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "h-2.5 rounded-full transition-all",
              index === activeIndex ? "w-7 bg-ink" : "w-2.5 bg-slate-300 hover:bg-slate-400"
            )}
            aria-label={`Show ${snapshot.name}`}
          />
        ))}
      </div>
    </div>
  );
}
