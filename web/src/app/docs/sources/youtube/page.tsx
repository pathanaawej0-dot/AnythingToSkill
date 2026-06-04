export default function YouTubeDocsPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-ink leading-tight">YouTube Skills</h1>
        <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-[40ch]">
          Transform video-based knowledge into actionable AI capabilities.
        </p>
      </header>
      
      <div className="h-px bg-white/5 w-full" />

      <article className="prose prose-invert max-w-none space-y-12 text-muted leading-relaxed">
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-ink tracking-tight">The Extraction Process</h2>
          <p className="text-lg">
            When you provide a YouTube URL, AnythingToSkill initiates a specialized **Content Fetcher**. The tool securely retrieves the video's transcript (including time-stamped captions) and passes it through an analysis engine that filters out conversational filler and focuses on procedural logic.
          </p>
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl space-y-4 not-prose">
            <h4 className="font-bold text-ink text-sm uppercase tracking-widest">Synthesis Engine Logic</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><span className="text-primary font-mono">[01]</span> Identify technical definitions and setup steps.</li>
              <li className="flex gap-3"><span className="text-primary font-mono">[02]</span> Extract code snippets or commands mentioned in the audio.</li>
              <li className="flex gap-3"><span className="text-primary font-mono">[03]</span> Detect "Warning" or "Pro Tip" cues to create safety instructions.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-ink tracking-tight">Best Use Cases</h2>
          <p>This source type is perfect for:</p>
          <div className="grid sm:grid-cols-2 gap-6 not-prose">
            <div className="p-6 bg-white/[0.03] border border-white/5 rounded-xl">
              <h3 className="font-bold text-ink mb-2">Coding Tutorials</h3>
              <p className="text-sm">Turn 40-minute deep dives into clear instructions for your AI to follow.</p>
            </div>
            <div className="p-6 bg-white/[0.03] border border-white/5 rounded-xl">
              <h3 className="font-bold text-ink mb-2">Interface Guides</h3>
              <p className="text-sm">Teach your AI how to navigate a specific dashboard or CLI tool.</p>
            </div>
          </div>
        </section>

        <section className="p-10 bg-white/[0.03] border border-white/5 rounded-2xl space-y-6 not-prose">
          <h3 className="text-xl font-bold text-ink tracking-tight">Technical Limitations</h3>
          <p className="text-muted leading-relaxed text-sm italic">
            "Wait, what if the video has no captions?"
          </p>
          <p className="text-muted leading-relaxed text-sm">
            The tool relies on **text-based transcripts**. If a video does not have captions (either uploaded or auto-generated), AnythingToSkill will notify you that it cannot proceed. We recommend checking for the "CC" icon on YouTube before providing the link.
          </p>
        </section>
      </article>
    </div>
  );
}
