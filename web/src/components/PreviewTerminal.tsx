"use client";

import { useState, useEffect } from "react";

const steps = [
  { label: "START", text: "Starting AnythingToSkill..." },
  { label: "LINK", text: "Found your link: YouTube Video" },
  { label: "READ", text: "Reading the video transcript..." },
  { label: "LEARN", text: "Learning the key steps and tips..." },
  { label: "BUILD", text: "Creating your custom AI skill..." },
  { label: "DONE", text: "Success! Your skill is ready to install." },
];

export function PreviewTerminal() {
  const [visibleSteps, setVisibleSteps] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleSteps((v) => (v < steps.length ? v + 1 : v));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-surface/50 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden font-mono text-sm soft-shadow">
      <div className="bg-white/5 px-4 py-4 border-b border-white/5 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-primary/40" />
          <div className="w-3 h-3 rounded-full bg-accent/40" />
          <div className="w-3 h-3 rounded-full bg-muted/40" />
        </div>
        <span className="text-[10px] text-muted uppercase tracking-[0.2em] font-bold">Terminal Preview</span>
      </div>
      <div className="p-8 space-y-5 min-h-[400px]">
        {steps.slice(0, visibleSteps).map((step, i) => (
          <div key={i} className="flex gap-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="text-accent font-bold opacity-80">[{step.label}]</span>
            <span className="text-ink/90">{step.text}</span>
          </div>
        ))}
        {visibleSteps < steps.length && (
          <div className="w-2 h-5 bg-accent/60 animate-pulse inline-block align-middle ml-1" />
        )}
      </div>
    </div>
  );
}
