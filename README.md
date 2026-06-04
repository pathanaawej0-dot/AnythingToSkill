# AnythingToSkill

**Convert anything into an installable agent skill.**

Turn YouTube videos, documentation pages, codebases, and raw text into reusable agent skills compatible with skills.sh and any agentskills.io-compatible agent.

## How it works

```
User says → /anythingtoskill or "turn this into a skill"
                        │
                        ▼
           AnythingToSkill activates
                        │
                        ▼
       1. Identifies the source type
       2. Fetches content (YT transcript / URL / local code / text)
       3. Analyzes and determines skill scope
       4. Generates a skill following quality best practices
       5. Shows you a preview → you give feedback → agent revises
       6. Writes the skill to disk
       7. Asks: project-specific or global install?
```

## Installation

### Install via skills.sh CLI

```bash
npx skills add pathanaawej0-dot/AnythingToSkill
```

This installs the AnythingToSkill skill to your agent. After installation, you can trigger it by saying "turn this into a skill" or `/anythingtoskill`.

### Manual install

Copy the `skills/anythingtoskill/` directory into your agent's skills directory:

| Agent | Project path | Global path |
|-------|-------------|-------------|
| OpenCode | `.agents/skills/` | `~/.config/opencode/skills/` |
| Claude Code | `.claude/skills/` | `~/.claude/skills/` |
| Cursor | `.cursor/skills/` | `~/.cursor/skills/` |
| Codex | `.codex/skills/` | `~/.codex/skills/` |
| GitHub Copilot | `.copilot/skills/` | `~/.copilot/skills/` |
| Generic | `.agents/skills/` | `~/.agents/skills/` |

## Usage

### Basic usage

```
/anythingtoskill
```

Or describe what you want:

```
"turn this youtube video into a skill"
"create a skill from this documentation page"
"convert this codebase into a skill"
```

### Input types

| Input | Example |
|-------|---------|
| **YouTube URL** | `https://youtube.com/watch?v=...` |
| **Documentation URL** | `https://react.dev/learn/...` |
| **Local code** | `./src/utils/` or `~/projects/my-lib/` |
| **Pasted text** | Paste any instructions or guide |

### What you get

A complete, installable skill at `.agents/skills/<name>/SKILL.md` with:

- **name** — unique identifier (lowercase, hyphens)
- **description** — optimized for accurate agent triggering
- **Instructions** — concrete procedural steps
- **Examples** — realistic input/output patterns
- **Gotchas** — known pitfalls and edge cases
- **References** — supporting files for complex topics

The skill follows the [Agent Skills specification](https://agentskills.io) and works with any compatible agent.

### Installation options

After generating the skill, AnythingToSkill asks:

> "Install project-specifically or globally?"

- **Project** — skill is added to `.agents/skills/<name>/` in your current project, committed with your code
- **Global** — skill is installed to `~/.agents/skills/<name>/` via `npx skills add`, available across all projects

## Example

```
You:  /anythingtoskill
Agent: What do you want to turn into a skill?
You:  https://youtube.com/watch?v=dQw4w9WgXcQ
Agent: [reads the transcript, generates a skill draft]

Here's what I've generated:

name: react-hooks-guide
description: >
  A guide to React hooks including useState, useEffect, and custom hooks.
  Use when working with React functional components or hooks.

Instructions:
1. Identify which hook the user needs...
2. Provide the correct import and usage pattern...
3. Include common gotchas...

Examples:
- "add a counter with useState" → provides useState code
- "fetch data on mount" → provides useEffect with fetch

What do you think? Would you like to revise anything?

You:  Looks good, install it globally
Agent: Installed globally at ~/.agents/skills/react-hooks-guide/
```

## How it's built

AnythingToSkill is itself an agent skill. The repo structure:

```
skills/anythingtoskill/
├── SKILL.md                                    # Main instructions (7-step pipeline)
└── references/
    ├── fetch-youtube-transcript.md             # YouTube transcript fetching guide
    ├── fetch-url-content.md                    # Documentation/web page fetching guide
    ├── fetch-local-code.md                     # Local codebase analysis guide
    └── skill-quality-guide.md                  # Quality standards for generated skills
```

## Compatibility

Works with any agent that supports the [Agent Skills](https://agentskills.io) format:

- OpenCode
- Claude Code
- Cursor
- Codex
- GitHub Copilot
- Windsurf
- Gemini CLI
- Cline
- Roo Code
- and 60+ more

## Links

- [skills.sh listing][skills-sh]
- [Agent Skills specification][agentskills]
- [Report an issue][issues]

[skills-sh]: https://skills.sh/pathanaawej0-dot/AnythingToSkill
[agentskills]: https://agentskills.io
[issues]: https://github.com/pathanaawej0-dot/AnythingToSkill/issues
