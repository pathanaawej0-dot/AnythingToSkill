export default function DocsPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-ink leading-tight">Introduction</h1>
        <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-[40ch]">
          The ultimate automated pipeline for creating and sharing AI agent skills.
        </p>
      </header>
      
      <div className="h-px bg-white/5 w-full" />

      <article className="prose prose-invert max-w-none space-y-12 text-muted leading-relaxed">
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-ink tracking-tight">What is AnythingToSkill?</h2>
          <p className="text-lg">
            AnythingToSkill is a specialized agent skill designed to bridge the gap between human knowledge and AI execution. It automates the complex process of fetching, analyzing, and formatting information into high-quality **Agent Skills**—a standardized format used by modern AI assistants to follow specific instructions and expert workflows.
          </p>
          <p className="text-lg">
            Instead of spending hours manually writing <code className="text-primary bg-primary/5 px-1.5 py-0.5 rounded-sm">SKILL.md</code> files, you can simply point the tool at a resource (like a video or a documentation page) and let it synthesize a production-grade capability in seconds.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-ink tracking-tight">Core Value Propositions</h2>
          <div className="grid sm:grid-cols-2 gap-8 not-prose">
            <div className="p-6 bg-white/[0.03] border border-white/5 rounded-xl space-y-3">
              <h3 className="font-bold text-ink text-lg">Universal Standards</h3>
              <p className="text-sm">Built on the <a href="https://agentskills.io" className="text-primary hover:underline">agentskills.io</a> specification, ensuring your skills work across 60+ different AI agents.</p>
            </div>
            <div className="p-6 bg-white/[0.03] border border-white/5 rounded-xl space-y-3">
              <h3 className="font-bold text-ink text-lg">Context Efficiency</h3>
              <p className="text-sm">Skills use "Progressive Disclosure," meaning your agent only loads the details when a specific task triggers them.</p>
            </div>
            <div className="p-6 bg-white/[0.03] border border-white/5 rounded-xl space-y-3">
              <h3 className="font-bold text-ink text-lg">Quality Guaranteed</h3>
              <p className="text-sm">Every generated skill passes through a rigorous quality gate that checks for name formatting, description clarity, and example relevance.</p>
            </div>
            <div className="p-6 bg-white/[0.03] border border-white/5 rounded-xl space-y-3">
              <h3 className="font-bold text-ink text-lg">Collaborative Design</h3>
              <p className="text-sm">The agent previews every skill it builds, allowing you to iterate on the logic until it meets your exact requirements.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-ink tracking-tight">Who is this for?</h2>
          <ul className="space-y-4 text-lg list-none pl-0">
            {[
              { title: "Developers", desc: "who want to encode their project's unique architecture and rules for AI assistants." },
              { title: "Educators", desc: "who want to turn their course material and tutorials into interactive AI-guided experiences." },
              { title: "Teams", desc: "who need to standardize best practices and internal workflows across their organization." }
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-primary font-bold mt-1">→</span>
                <span><strong className="text-ink">{item.title}</strong> {item.desc}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
