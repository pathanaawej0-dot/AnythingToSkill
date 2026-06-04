export default function CodeDocsPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-ink leading-tight">Source Code Skills</h1>
        <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-[40ch]">
          Encode project architecture and local conventions as a reusable skill.
        </p>
      </header>
      
      <div className="h-px bg-white/5 w-full" />

      <article className="prose prose-invert max-w-none space-y-12 text-muted leading-relaxed">
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-ink tracking-tight">Standardizing Context</h2>
          <p className="text-lg">
            The **Source Code** fetcher is the most powerful tool for development teams. It analyzes your local file structure, naming conventions, and component patterns to create a "Project Map" that new AI agents can use to stay perfectly aligned with your existing codebase.
          </p>
          <div className="not-prose bg-white/[0.02] border border-white/5 p-8 rounded-2xl space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent">What the agent analyzes</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-sm font-bold text-ink">File Architecture</div>
                <p className="text-xs text-muted">Where do components, hooks, and services live? How are they structured?</p>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-bold text-ink">Coding Standards</div>
                <p className="text-xs text-muted">Naming conventions (camelCase vs. PascalCase), import order, and linting rules.</p>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-bold text-ink">Design Tokens</div>
                <p className="text-xs text-muted">Existing CSS variables, Tailwind configs, and shared UI primitives.</p>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-bold text-ink">Business Logic</div>
                <p className="text-xs text-muted">How data flows between services and how state is managed globally.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-ink tracking-tight">Security & Privacy</h2>
          <p>
            Unlike cloud-based tools, AnythingToSkill runs **entirely within your local agent environment.** 
          </p>
          <ul className="space-y-4">
            <li><strong>No Data Leakage:</strong> Your source code never leaves your machine.</li>
            <li><strong>Instruction Only:</strong> The generated skill extracts only the "how-to" and "where" logic, not the actual proprietary data or secrets.</li>
            <li><strong>Safe Ignore:</strong> The tool automatically respects <code className="text-primary">.gitignore</code> and <code className="text-primary">.geminiignore</code> files.</li>
          </ul>
        </section>

        <section className="p-10 bg-white/[0.03] border border-white/5 rounded-2xl space-y-6 not-prose text-center">
          <h3 className="text-xl font-bold text-ink tracking-tight">Best for Onboarding</h3>
          <p className="text-muted leading-relaxed text-sm max-w-[50ch] mx-auto">
            Create a skill named <code className="text-accent">project-architect</code> and install it locally. Every time a new AI agent joins the project, it will instantly know how to write code like a veteran of the team.
          </p>
        </section>
      </article>
    </div>
  );
}
