import { PreviewTerminal } from "@/components/PreviewTerminal";
import { CommandBar } from "@/components/CommandBar";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-40 flex flex-col items-center text-center relative z-10">
          <div className="space-y-8 max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-ink leading-[0.9]">
              Custom AI skills from <span className="text-primary">anywhere.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-[32ch] mx-auto font-medium">
              Turn your links, videos, and code into instructions your AI can follow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <div className="w-full max-w-md">
                <CommandBar />
              </div>
            </div>
          </div>

          <div className="mt-24 w-full max-w-4xl animate-in fade-in zoom-in duration-1000 delay-200">
            <PreviewTerminal />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 md:py-48 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink">How it works</h2>
            <p className="text-lg text-muted max-w-[30ch] mx-auto font-medium">
              A simple journey from raw data to AI capability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "01", label: "Check", desc: "We scan your link to see what kind of info it has." },
              { id: "02", label: "Read", desc: "Our system extracts the core text, code, or video data." },
              { id: "03", label: "Learn", desc: "We learn the key steps, tips, and rules from the content." },
              { id: "04", label: "Create", desc: "A custom skill file is built specifically for your AI agent." },
              { id: "05", label: "Review", desc: "You check the draft and make any final adjustments." },
              { id: "06", label: "Install", desc: "Your new skill is ready to use in any project." },
            ].map((step) => (
              <div key={step.id} className="p-10 bg-white/[0.03] border border-white/[0.05] rounded-2xl hover:bg-white/[0.06] transition-all duration-300 group">
                <span className="text-primary font-mono text-sm font-bold mb-6 block uppercase tracking-widest">Step {step.id}</span>
                <div className="space-y-3">
                  <h3 className="font-bold text-ink text-2xl tracking-tight">{step.label}</h3>
                  <p className="text-muted leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 md:py-48 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "YouTube", text: "Turn helpful video tutorials into clear instructions for your AI." },
              { title: "Websites", text: "Pull info from docs and guides to keep your AI up to date." },
              { title: "Your Code", text: "Teach your AI how you write code and organize your projects." },
              { title: "Plain Text", text: "Convert any notes or written guides into a working AI skill." },
            ].map((feature) => (
              <div key={feature.title} className="group p-8 transition-all duration-300 hover:translate-y-[-4px]">
                <h3 className="text-2xl font-bold text-ink mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-muted leading-relaxed font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-48 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-ink">Ready to start?</h2>
          <div className="max-w-lg mx-auto">
            <CommandBar />
          </div>
        </div>
      </section>
    </main>
  );
}
