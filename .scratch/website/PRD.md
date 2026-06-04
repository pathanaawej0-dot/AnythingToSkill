Status: ready-for-agent

# AnythingToSkill Website — PRD

## Problem Statement

AnythingToSkill currently lives as a GitHub repo with a README. There's no dedicated website where users can learn about the project, read installation docs, browse usage guides, or follow updates. Users discovering the project via skills.sh or GitHub have no polished landing page to understand what it does and how to use it.

## Solution

A multi-page website at `anythingtoskill.aawej.in` built with Next.js (App Router) and deployed on Vercel. The site serves as the project's marketing and documentation hub, covering everything from installation to advanced usage.

## User Stories

1. As a visitor, I want to land on a home page that explains what AnythingToSkill is, so that I quickly understand the value proposition.

2. As a user, I want to see an interactive install command (copyable `npx skills add ...`), so that I can install the skill immediately.

3. As a user, I want documentation on installation, usage, input sources, output format, and FAQ, so that I can use the skill effectively.

4. As a reader, I want a blog section with launch posts and tutorials, so that I can learn tips and stay updated.

5. As a curious developer, I want to try an interactive playground/demo, so that I can see how the skill works without installing it.

6. As a contributor, I want an about page with GitHub link, license, and contribution info, so that I know how to get involved.

7. As a user, I want the site to be fast and mobile-friendly, so that I can access it from any device.

## Implementation Decisions

- **Framework**: Next.js 15+ with App Router and Tailwind CSS
- **Deployment**: Vercel with custom domain `anythingtoskill.aawej.in` + `.vercel.app` fallback
- **Content**: MDX for docs and blog posts, enabling markdown-driven content with React components
- **Monorepo layout**: Site lives in `web/` at the repo root
- **Pages**: Home `/`, Docs `/docs/*` (sidebar layout), Blog `/blog` + `/blog/[slug]`, Playground `/playground`, About `/about`
- **No DESIGN.md** — design tokens are inlined in Tailwind config
- **Responsive**: Mobile-first design, dark theme (fits dev tool aesthetic)
- **SEO**: Static generation for docs and blog, meta tags for each page

## Testing Decisions

- Manual visual testing during development — preview locally with `npm run dev`, verify in browser
- Vercel deploy previews for PR-based review

## Out of Scope

- User accounts or authentication
- Analytics or user tracking (beyond Vercel's default)
- Search functionality (v1)
- i18n / multi-language support
- Server-side rendered dynamic content (all pages are static or statically-generated)

## Further Notes

- Domain: `anythingtoskill.aawej.in` pointed at Vercel via DNS
- Auto-deploys from `main` branch via Vercel GitHub integration
- The playground/demo is a simulated walkthrough, not a live agent session
