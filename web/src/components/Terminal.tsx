"use client";

import { useState, useEffect } from "react";

const steps = [
  { label: "INIT", text: "Initializing AnythingToSkill v1.0.0..." },
  { label: "IDENTIFY", text: "Source identified: YouTube URL (dQw4w9WgXcQ)" },
  { label: "FETCH", text: "Retrieving transcript via internal API..." },
  { label: "ANALYZE", text: "Analyzing 1,240 tokens. Scope: React Hooks Guide." },
  { label: "QUALITY", text: "Applying quality gate: references/skill-quality-guide.md" },
  { label: "GENERATE", text: "Synthesizing SKILL.md. Name: react-hooks-expert" },
  { label: "PREVIEW", text: "Skill synthesis complete. Ready for installation." },
];

export function Terminal() {
  const [visibleSteps, setVisibleSteps] = useState<number>(0);

  useEffect(() => {
    if (visibleSteps < steps.length) {
      const timer = setTimeout(() => {
        setVisibleSteps((v) => v + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [visibleSteps]);

  return (
    <div className="w-full max-w-2xl bg-surface border border-surface rounded-sm overflow-hidden font-mono text-sm leading-relaxed">
      <div className="bg-background px-4 py-2 border-b border-surface flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-surface" />
          <div className="w-2.5 h-2.5 rounded-full bg-surface" />
          <div className="w-2.5 h-2.5 rounded-full bg-surface" />
        </div>
        <span className="text-[10px] text-muted tracking-widest uppercase">system:process_log</span>
      </div>
      <div className="p-6 space-y-3 min-h-[320px]">
        {steps.slice(0, visibleSteps).map((step, i) => (
          <div key={i} className="flex gap-4 animate-in fade-in slide-in-from-left-2 duration-300">
            <span className="text-accent shrink-0 select-none">[{step.label}]</span>
            <span className="text-ink">{step.text}</span>
          </div>
        ))}
        {visibleSteps < steps.length && (
          <div className="w-2 h-4 bg-accent animate-pulse inline-block align-middle ml-1" />
        )}
      </div>
    </div>
  );
}
