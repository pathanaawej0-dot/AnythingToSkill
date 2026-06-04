export default function UsagePage() {
  return (
    <div className="space-y-16">
      <header className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-ink leading-tight">How to Use</h1>
        <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-[40ch]">
          The simple, 3-step workflow to turn knowledge into AI power.
        </p>
      </header>
      
      <div className="h-px bg-white/5 w-full" />

      <article className="prose prose-invert max-w-none space-y-16 text-muted leading-relaxed">
        {/* Step 1 */}
        <section className="space-y-8">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Step One</span>
            <h2 className="text-3xl font-bold text-ink tracking-tight mt-0">Trigger the Transformation</h2>
            <p className="text-lg">
              AnythingToSkill is built into your agent's command list. You can start the process in two ways:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 not-prose">
            <div className="p-8 bg-white/[0.03] border border-white/5 rounded-2xl space-y-3">
              <div className="text-xs font-mono text-accent">Slash Command</div>
              <p className="text-sm font-medium">Type <code className="text-ink bg-white/5 px-1.5 py-0.5 rounded-sm">/anythingtoskill</code> directly into the chat and hit Enter.</p>
            </div>
            <div className="p-8 bg-white/[0.03] border border-white/5 rounded-2xl space-y-3">
              <div className="text-xs font-mono text-accent">Natural Language</div>
              <p className="text-sm font-medium">Say something like: <span className="italic text-ink">"Hey, I want to turn this link into a skill."</span></p>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section className="space-y-8">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Step Two</span>
            <h2 className="text-3xl font-bold text-ink tracking-tight mt-0">Provide the Source</h2>
            <p className="text-lg">
              Once active, the tool will ask for your content source. You can provide a URL or a local file path.
            </p>
          </div>
          <ul className="space-y-6 list-none pl-0 not-prose">
            {[
              { type: "Video", icon: "📺", text: "Paste a YouTube link to extract transcript knowledge." },
              { type: "Documentation", icon: "📄", text: "Paste a URL to any technical documentation or blog post." },
              { type: "Codebase", icon: "💻", text: "Provide a path like './src/utils' to analyze local patterns." }
            ].map((source, i) => (
              <li key={i} className="flex gap-6 p-6 border border-white/5 rounded-xl bg-white/[0.01]">
                <span className="text-2xl">{source.icon}</span>
                <div>
                  <h4 className="font-bold text-ink">{source.type}</h4>
                  <p className="text-sm">{source.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Step 3 */}
        <section className="space-y-8">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Step Three</span>
            <h2 className="text-3xl font-bold text-ink tracking-tight mt-0">Review and Install</h2>
            <p className="text-lg">
              Before anything is saved, you get to see exactly what the agent built. This is the **Preview Phase**.
            </p>
          </div>
          <div className="space-y-6">
            <p>
              Check the **Instructions** and **Examples** for accuracy. If you see something you want to change, just tell the agent! You can say:
            </p>
            <div className="bg-white/[0.03] border-l-4 border-primary p-6 rounded-r-xl italic font-medium">
              "This is good, but add an extra example showing how to handle error states."
            </div>
            <p>
              When you're satisfied, click **Install** or say "Yes, install it." The skill is then written to your disk and becomes part of your agent's permanent knowledge.
            </p>
          </div>
        </section>

        <section className="p-10 bg-white/[0.03] border border-white/5 rounded-2xl space-y-6 not-prose">
          <h3 className="text-xl font-bold text-ink tracking-tight">Pro Tip: Deep Linking</h3>
          <p className="text-muted leading-relaxed text-sm">
            For documentation, you don't need to provide the root URL of a massive site. If you only need info about "React Suspense," provide the direct link to that specific page. This makes the generated skill much more precise and useful.
          </p>
        </section>
      </article>
    </div>
  );
}
