export default function InstallationPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-ink leading-tight">Installation</h1>
        <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-[40ch]">
          Quickly add AnythingToSkill to your AI agent and start building.
        </p>
      </header>
      
      <div className="h-px bg-white/5 w-full" />

      <article className="prose prose-invert max-w-none space-y-12 text-muted leading-relaxed">
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-ink tracking-tight">Standard Installation</h2>
          <p className="text-lg">
            AnythingToSkill is distributed as a universal agent skill. The most reliable way to install it is using the <code className="text-primary bg-primary/5 px-1.5 py-0.5 rounded-sm">skills.sh</code> CLI, which handles dependency resolution and path mapping automatically.
          </p>
          <div className="not-prose">
            <div className="relative group">
              <pre className="bg-white/[0.03] border border-white/5 p-6 rounded-xl font-mono text-sm text-ink overflow-x-auto">
                npx skills add pathanaawej0-dot/AnythingToSkill
              </pre>
              <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-muted opacity-50 group-hover:opacity-100 transition-opacity">Terminal</div>
            </div>
          </div>
          <p className="text-sm italic">Note: This command works with any agent that supports the Skills ecosystem, including Claude Code, Cursor, and OpenCode.</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-ink tracking-tight">Manual Installation</h2>
          <p className="text-lg">
            If you prefer full control over the installation path, you can clone the repository and copy the <code className="text-ink font-bold">skills/anythingtoskill/</code> directory into your agent's local skill folder.
          </p>
          <div className="not-prose overflow-hidden rounded-xl border border-white/5 bg-white/[0.02]">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.03]">
                  <th className="px-6 py-4 font-bold text-ink uppercase tracking-widest text-[10px]">Agent Environment</th>
                  <th className="px-6 py-4 font-bold text-ink uppercase tracking-widest text-[10px]">Skill Directory Path</th>
                </tr>
              </thead>
              <tbody className="text-muted/80">
                <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                  <td className="px-6 py-4 font-medium text-ink">Claude Code</td>
                  <td className="px-6 py-4 font-mono text-xs">.claude/skills/</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                  <td className="px-6 py-4 font-medium text-ink">Cursor / Windsurf</td>
                  <td className="px-6 py-4 font-mono text-xs">.cursor/skills/</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                  <td className="px-6 py-4 font-medium text-ink">Gemini CLI</td>
                  <td className="px-6 py-4 font-mono text-xs">.agents/skills/</td>
                </tr>
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="px-6 py-4 font-medium text-ink">GitHub Copilot</td>
                  <td className="px-6 py-4 font-mono text-xs">.copilot/skills/</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-ink tracking-tight">Verification</h2>
          <p className="text-lg">
            To confirm the installation was successful, restart your agent session and type:
          </p>
          <div className="not-prose">
            <pre className="bg-white/[0.03] border border-white/5 p-6 rounded-xl font-mono text-sm text-primary">
              /anythingtoskill
            </pre>
          </div>
          <p>
            If you see a welcome message asking for a source link, the skill is active and ready to use.
          </p>
        </section>

        <section className="p-10 bg-primary/5 border border-primary/10 rounded-2xl space-y-4 not-prose">
          <h3 className="text-xl font-bold text-primary">Global vs. Project Install</h3>
          <p className="text-muted leading-relaxed font-medium">
            When you run AnythingToSkill for the first time, it will ask if you want to install generated skills <strong className="text-ink">Globally</strong> or <strong className="text-ink">Locally</strong>.
          </p>
          <ul className="space-y-3 text-sm text-muted/80">
            <li className="flex gap-3"><span className="text-primary font-bold">•</span> <strong>Global:</strong> Adds the skill to your system library, available in every project you open.</li>
            <li className="flex gap-3"><span className="text-primary font-bold">•</span> <strong>Project:</strong> Adds the skill to your current folder, perfect for project-specific rules you want to commit to Git.</li>
          </ul>
        </section>
      </article>
    </div>
  );
}
