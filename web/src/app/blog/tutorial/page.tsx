import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Turn a YouTube Video into an AI Skill | AnythingToSkill Blog",
  description: "Step-by-step guide on using AnythingToSkill to convert any YouTube tutorial into a reusable AI agent skill in less than 2 minutes.",
};

export default function TutorialBlog() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-24 space-y-12">
      <header className="space-y-6">
        <div className="flex items-center justify-between border-b border-surface pb-6">
          <span className="font-mono text-[10px] text-muted uppercase tracking-widest">June 5, 2026</span>
          <span className="px-2 py-0.5 border border-accent rounded-sm text-[10px] font-bold text-accent uppercase tracking-widest">Guide</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-ink leading-[0.9]">
          How to Turn a YouTube Video into a Custom AI Skill
        </h1>
        <p className="text-xl text-muted leading-relaxed font-medium">
          Step-by-step guide on using AnythingToSkill to convert any YouTube tutorial into a reusable AI agent skill in less than 2 minutes.
        </p>
      </header>

      <div className="prose prose-invert max-w-none space-y-12 text-muted leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-ink">The Goal</h2>
          <p>
            Have you ever watched a great 20-minute coding tutorial on YouTube and wished your AI agent could just "know" everything in that video?
          </p>
          <p>
            In this guide, I’ll show you how to use AnythingToSkill to turn that video into a working AI skill in about 90 seconds.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-ink">Step 1: Activate AnythingToSkill</h2>
          <p>Open your terminal in any project and type:</p>
          <pre className="bg-surface p-6 rounded-md border border-surface font-mono text-sm overflow-x-auto text-ink">
            /anythingtoskill
          </pre>
          <p>The agent will wake up and ask you what you want to turn into a skill.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-ink">Step 2: Provide the Link</h2>
          <p>
            Find the YouTube video you want to learn from. For this example, let's use a "React Hooks Guide." Paste the URL into the chat.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-ink">Step 3: The Automated "Read"</h2>
          <p>AnythingToSkill will now:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fetch the video transcript.</li>
            <li>Identify the key coding patterns.</li>
            <li>Summarize the most important "gotchas" and tips mentioned in the video.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-ink">Step 4: Review and Refine</h2>
          <p>You’ll see a preview of the skill. It will look something like this:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Name:</strong> <code className="text-accent">react-hooks-guide</code></li>
            <li><strong>Instructions:</strong> A 5-step guide on using useState and useEffect correctly.</li>
            <li><strong>Examples:</strong> Ready-to-use code snippets.</li>
          </ul>
          <p>
            If you want more detail or a different name, just say: <em>"Make it more detailed"</em> or <em>"Add an example for custom hooks."</em>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-ink">Step 5: Install</h2>
          <p>
            Once you're happy, AnythingToSkill will ask if you want to install it <strong>locally</strong> (just for this project) or <strong>globally</strong> (for all your projects).
          </p>
          <p>
            That’s it! Your AI agent now has the specialized knowledge from that video, ready to help you whenever you need it.
          </p>
        </section>

        <section className="pt-12 border-t border-surface space-y-6 text-center">
          <h2 className="text-2xl font-bold text-ink">Ready to try it?</h2>
          <p>Install AnythingToSkill now and start building your custom AI library.</p>
          <pre className="bg-surface p-6 rounded-md border border-surface font-mono text-sm overflow-x-auto text-ink inline-block mx-auto">
            npx skills add pathanaawej0-dot/AnythingToSkill
          </pre>
        </section>
      </div>
    </article>
  );
}
