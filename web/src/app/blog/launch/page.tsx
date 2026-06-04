import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introducing AnythingToSkill | AnythingToSkill Blog",
  description: "Learn how AnythingToSkill allows you to convert YouTube videos, websites, and code into custom AI agent skills using a simple, automated pipeline.",
};

export default function LaunchBlog() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-24 space-y-12">
      <header className="space-y-6">
        <div className="flex items-center justify-between border-b border-surface pb-6">
          <span className="font-mono text-[10px] text-muted uppercase tracking-widest">June 5, 2026</span>
          <span className="px-2 py-0.5 border border-accent rounded-sm text-[10px] font-bold text-accent uppercase tracking-widest">Launch</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-ink leading-[0.9]">
          Introducing AnythingToSkill: Turn Any Content Into AI Agent Skills
        </h1>
        <p className="text-xl text-muted leading-relaxed font-medium">
          Learn how AnythingToSkill allows you to convert YouTube videos, websites, and code into custom AI agent skills using a simple, automated pipeline.
        </p>
      </header>

      <div className="prose prose-invert max-w-none space-y-8 text-muted leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-ink">The Story</h2>
          <p>
            AI agents are getting smarter, but they still struggle with one thing: <strong>specific knowledge.</strong>
          </p>
          <p>
            If you want your AI agent to follow a specific coding style, understand a complex tutorial, or use a new library, you usually have to paste thousands of lines of text into the chat. It’s slow, it’s messy, and it’s expensive.
          </p>
          <p className="font-bold text-ink">
            Today, we are launching AnythingToSkill.
          </p>
          <p>
            AnythingToSkill is a simple tool that turns any link or file into a high-quality, installable AI skill. Whether it’s a YouTube tutorial, a documentation page, or your own local code, our system "reads" the content and builds it into a smart skill that your AI can use instantly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-ink">Why "Skills" Matter</h2>
          <p>
            We built this on the <strong>Agent Skills</strong> open standard. A "Skill" is a small package of instructions that tells an AI exactly how to do something.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Portable:</strong> Build a skill once and use it in Claude Code, Cursor, Gemini CLI, or GitHub Copilot.</li>
            <li><strong>Fast:</strong> Your AI only loads the skill when it actually needs it, keeping your chat clean and fast.</li>
            <li><strong>Reliable:</strong> No more "guessing." Your AI follows a step-by-step guide every time.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-ink">How It Works</h2>
          <p>The process is simple:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Give us a link:</strong> YouTube, a website, or a local folder.</li>
            <li><strong>We analyze it:</strong> Our system finds the most important steps and tips.</li>
            <li><strong>Review the draft:</strong> You check the skill and ask for any changes.</li>
            <li><strong>Install:</strong> Save it to your project or your global library with one click.</li>
          </ol>
        </section>

        <section className="pt-12 border-t border-surface space-y-6">
          <h2 className="text-2xl font-bold text-ink">Get Started</h2>
          <p>You can start using AnythingToSkill today. Just run this in your terminal:</p>
          <pre className="bg-surface p-6 rounded-md border border-surface font-mono text-sm overflow-x-auto text-ink">
            npx skills add pathanaawej0-dot/AnythingToSkill
          </pre>
        </section>
      </div>
    </article>
  );
}
