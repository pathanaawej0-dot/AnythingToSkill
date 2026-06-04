export function Footer() {
  return (
    <footer className="border-t border-white/5 py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-primary rounded-sm" />
              <span className="font-bold text-lg tracking-tight text-ink">AnythingToSkill</span>
            </div>
            <p className="text-sm text-muted leading-relaxed font-medium">
              Create custom AI agent skills from any link or file. Built for the global agent ecosystem.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink">Resources</h4>
            <ul className="space-y-4 text-[13px] font-medium text-muted">
              <li><a href="https://skills.sh" className="hover:text-ink transition-colors">skills.sh</a></li>
              <li><a href="https://agentskills.io" className="hover:text-ink transition-colors">Specification</a></li>
              <li><a href="https://github.com" className="hover:text-ink transition-colors">GitHub</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink">Platform</h4>
            <ul className="space-y-4 text-[13px] font-medium text-muted">
              <li><a href="/docs" className="hover:text-ink transition-colors">Documentation</a></li>
              <li><a href="/blog" className="hover:text-ink transition-colors">Blog</a></li>
              <li><a href="/about" className="hover:text-ink transition-colors">About</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink">Legal</h4>
            <ul className="space-y-4 text-[13px] font-medium text-muted">
              <li><a href="/license" className="hover:text-ink transition-colors">MIT License</a></li>
              <li><a href="/privacy" className="hover:text-ink transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] font-medium text-muted">
          <span>© 2026 AnythingToSkill</span>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>Global Edge Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
