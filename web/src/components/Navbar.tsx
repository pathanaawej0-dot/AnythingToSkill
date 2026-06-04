"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <nav className="glass-nav rounded-full px-6 h-14 flex items-center gap-8 shadow-2xl border border-white/[0.08] max-w-fit">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity pr-4 border-r border-white/10">
          <div className="w-5 h-5 bg-primary rounded-[4px]" />
          <span className="font-bold text-base tracking-tight text-ink">AnythingToSkill</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-muted">
          <Link href="/docs" className="hover:text-ink transition-colors">Docs</Link>
          <Link href="/blog" className="hover:text-ink transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-ink transition-colors">About</Link>
        </div>
        <div className="pl-4 border-l border-white/10">
          <Link href="/docs/installation" className="px-4 py-1.5 bg-ink text-background rounded-full font-bold hover:bg-ink/90 transition-all text-[11px]">Install</Link>
        </div>
      </nav>
    </div>
  );
}
