"use client";

import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      date: "June 5, 2026",
      title: "Introducing AnythingToSkill: Turn Any Content Into AI Agent Skills",
      excerpt: "Today we are launching AnythingToSkill, a tool designed to democratize agent capability creation by turning links into skills.",
      tag: "Launch",
      slug: "launch"
    },
    {
      date: "June 5, 2026",
      title: "Tutorial: How to Turn a YouTube Video into a Custom AI Skill",
      excerpt: "A step-by-step guide on using AnythingToSkill to convert any YouTube tutorial into a reusable AI agent skill in seconds.",
      tag: "Guide",
      slug: "tutorial"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-40 space-y-24">
      <header className="space-y-8 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-ink leading-tight">Blog</h1>
        <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-[32ch] font-medium">
          Latest news, guides, and updates from the team.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        {posts.map((post, i) => (
          <Link key={i} href={`/blog/${post.slug}`} className="group block space-y-8">
            <div className="aspect-[16/9] bg-white/[0.03] border border-white/[0.05] rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-primary/50 group-hover:bg-white/[0.06] flex items-center justify-center relative">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted/30 group-hover:text-primary/30 transition-colors">
                No Image Available
              </div>
              <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-muted group-hover:text-ink transition-colors">
                {post.tag}
              </div>
            </div>
            <div className="space-y-4 px-2">
              <div className="text-[12px] font-medium text-muted uppercase tracking-widest">{post.date}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight group-hover:text-primary transition-colors leading-tight">{post.title}</h2>
              <p className="text-lg text-muted leading-relaxed font-medium line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
