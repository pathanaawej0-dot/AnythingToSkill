export default function WebsiteDocsPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-ink leading-tight">Website Skills</h1>
        <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-[40ch]">
          Capture technical documentation and API guides as agent capabilities.
        </p>
      </header>
      
      <div className="h-px bg-white/5 w-full" />

      <article className="prose prose-invert max-w-none space-y-12 text-muted leading-relaxed">
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-ink tracking-tight">Smart Crawling</h2>
          <p className="text-lg">
            AnythingToSkill visits the URL you provide and uses **Semantic Extraction** to strip away navigation menus, sidebars, and ads. It focuses entirely on the technical content to ensure your AI gets a clean, noise-free set of instructions.
          </p>
          <div className="not-prose grid sm:grid-cols-2 gap-4">
            <div className="p-5 border border-white/5 rounded-lg bg-white/[0.02]">
              <div className="text-accent font-bold mb-2">Input</div>
              <p className="text-xs text-muted font-mono break-all">https://react.dev/learn/use-state</p>
            </div>
            <div className="p-5 border border-white/5 rounded-lg bg-white/[0.02]">
              <div className="text-primary font-bold mb-2">Output</div>
              <p className="text-xs text-muted font-mono italic">Validated Skill: react-state-management</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-ink tracking-tight">Large Documentation Sets</h2>
          <p>
            When dealing with massive documentation hubs (like the entire Next.js manual), the agent uses a **Progressive Fetching** strategy:
          </p>
          <ol className="space-y-4">
            <li><strong>Index Scan:</strong> The tool reads the Table of Contents first.</li>
            <li><strong>Selection:</strong> It summarizes the available topics and asks you which ones are most relevant.</li>
            <li><strong>Deep Read:</strong> It only fetches and analyzes the specific pages you selected, saving time and context window space.</li>
          </ol>
        </section>

        <section className="p-10 bg-white/[0.03] border border-white/5 rounded-2xl space-y-6 not-prose">
          <h3 className="text-xl font-bold text-ink tracking-tight">Access Restricted Content</h3>
          <p className="text-muted leading-relaxed text-sm">
            AnythingToSkill can only access pages that are publicly available on the web. If you need to turn a password-protected internal guide into a skill, we recommend copying the text and using the <strong className="text-ink">"Plain Text"</strong> source option instead.
          </p>
        </section>
      </article>
    </div>
  );
}
