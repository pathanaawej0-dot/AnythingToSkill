export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
      <header className="space-y-6 max-w-4xl">
        <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-bold">[FOUNDATION & MISSION]</span>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-ink leading-[0.9]">
          Encoding human knowledge for the <span className="text-primary">agentic</span> era.
        </h1>
        <p className="text-xl text-muted leading-relaxed max-w-[48ch]">
          AnythingToSkill was founded on a simple premise: the value of AI is unlocked when agents have precise, actionable capabilities derived from real-world expertise.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-ink tracking-tight border-b border-surface pb-6">Our Approach</h2>
          <div className="space-y-6 text-muted leading-relaxed font-medium">
            <p>
              We believe skill creation shouldn't require learning complex proprietary formats. By building an automated pipeline that targets universal standards like <code className="text-accent">skills.sh</code>, we ensure that your domain knowledge remains portable and permanent.
            </p>
            <p>
              Whether it's a technical tutorial on YouTube or an internal company guide, our system deconstructs the information into procedural steps that agents can execute with high reliability.
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-ink tracking-tight border-b border-surface pb-6">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="font-bold text-ink">Portability</h3>
              <p className="text-sm">Skills that work across any agent ecosystem, from Claude Code to OpenCode.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-ink">Precision</h3>
              <p className="text-sm">Technical clarity over marketing jargon. Every skill is validated for utility.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-ink">Transparency</h3>
              <p className="text-sm">The transformation process is open and reviewable at every step.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-ink">Efficiency</h3>
              <p className="text-sm">Optimized pipelines that value the developer's time above all else.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-16 bg-surface/20 border border-surface rounded-md flex flex-col items-center text-center space-y-8">
        <div className="w-12 h-12 bg-primary rounded-sm mb-4" />
        <h2 className="text-4xl font-bold text-ink tracking-tight">Open Source & Community Driven</h2>
        <p className="text-muted max-w-[50ch] font-medium leading-relaxed">
          AnythingToSkill is built in public. We welcome contributions to our content fetchers, analysis engines, and quality guides.
        </p>
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <a href="https://github.com" className="px-8 py-3 bg-ink text-background rounded-md font-bold text-sm hover:opacity-90 transition-opacity">GitHub Repository</a>
          <a href="/docs" className="px-8 py-3 border border-surface text-ink rounded-md font-bold text-sm hover:border-accent transition-colors">Read Documentation</a>
        </div>
      </section>
    </div>
  );
}
