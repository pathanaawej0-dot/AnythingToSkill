# AnythingToSkill — Architecture

## Repository structure

```
/
├── AGENTS.md                    — Agent skills configuration
├── ARCHITECTURE.md              — This file
├── CONTEXT.md                   — Domain glossary
├── CONTRIBUTING.md              — Contribution guide
├── LICENSE                      — MIT
├── README.md                    — Project overview
├── skills/
│   └── anythingtoskill/         — The AnythingToSkill agent skill
│       ├── SKILL.md             — Main instructions (7-step pipeline)
│       └── references/
│           ├── fetch-youtube-transcript.md
│           ├── fetch-url-content.md
│           ├── fetch-local-code.md
│           └── skill-quality-guide.md
├── web/                         — Website (Next.js)
│   ├── app/
│   └── ...
├── docs/
│   └── agents/
│       ├── domain.md
│       ├── issue-tracker.md
│       └── triage-labels.md
└── .scratch/                    — Issues and PRDs
    ├── anythingtoskill/
    │   ├── PRD.md
    │   └── issues/
    └── website/
        ├── PRD.md
        └── issues/
```

## How the skill works

AnythingToSkill is an agent skill (SKILL.md + references). When a user activates it:

1. Agent determines source type (YT, URL, code, text)
2. Agent reads the appropriate `references/*.md` to fetch content
3. Agent reads `references/skill-quality-guide.md` for quality standards
4. Agent generates a skill draft, validates it, previews to user
5. User approves → agent writes `.agents/skills/<name>/SKILL.md`
6. Agent offers project-specific or global install

## Key design decisions

- **Progressive disclosure**: SKILL.md is under 80 lines. Detail lives in reference files loaded on demand.
- **Universal output**: Generated skills use only `name` + `description` + markdown — no agent-specific features.
- **Installation**: Project scope = `.agents/skills/<name>/`. Global scope = `~/.agents/skills/<name>/` via `npx skills add -g`.
- **Quality gate**: Every generated skill is validated against `references/skill-quality-guide.md` before preview.
