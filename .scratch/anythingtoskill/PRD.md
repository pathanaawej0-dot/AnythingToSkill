# AnythingToSkill PRD

## Problem Statement

Creating agent skills requires deep knowledge of the skills.sh format, quality best practices, and content-fetching techniques. Users have valuable domain knowledge in YouTube videos, documentation sites, and codebases but no way to convert that knowledge into a reusable agent skill without learning the entire skill creation workflow from scratch.

## Solution

AnythingToSkill is an agent skill that, when activated, guides the agent through the full skill creation pipeline: identifying the source type, fetching content, analyzing it, generating a skills.sh-compatible skill, previewing it for the user, iterating on feedback, writing it to disk, and offering project-specific or global installation.

## User Stories

1. As a user, I want to give a YouTube video URL and get a skill based on its transcript, so that I can turn video tutorials into reusable agent capabilities.

2. As a user, I want to give a documentation URL and get a skill based on its content, so that I can capture library/framework knowledge as an agent skill.

3. As a user, I want to paste raw text and get a skill from it, so that I can convert any written knowledge into a skill.

4. As a user, I want to point to a local codebase directory and get a skill based on its patterns, so that I can encode project conventions as a skill.

5. As a user, I want to preview the generated skill before it's written, so that I can verify quality and request changes.

6. As a user, I want to request revisions to the generated skill and see an updated preview, so that I can refine the skill iteratively.

7. As a user, I want to install the skill project-specifically (`.agents/skills/<name>/`), so that it's committed with my project.

8. As a user, I want to install the skill globally (`~/.agents/skills/<name>/`), so that it's available across all my projects.

9. As a user, I want to invoke the skill via `/anythingtoskill` or natural language, so that it's easy to trigger regardless of my agent.

10. As a user, I want the agent to tell me when input is inaccessible, too trivial, or too large, so that I understand why it can't proceed.

11. As a user, I want the generated skill to meet minimum quality standards (valid name, clear description, concrete instructions, examples), so that it's actually useful when installed.

12. As a user, I want the generated skill to be universal (compatible with any agentskills.io-compatible agent), so that I'm not locked into one agent ecosystem.

## Implementation Decisions

- **AnythingToSkill is an agent skill itself**, not a CLI tool. It bundles content-fetching instructions as reference `.md` files under `references/`, keeping the main `SKILL.md` under 50 lines.
- **Content fetching uses progressive disclosure**: `references/fetch-youtube-transcript.md`, `references/fetch-url-content.md`, `references/fetch-local-code.md` are loaded only when the relevant source type is identified.
- **Quality is enforced via `references/skill-quality-guide.md`**, which the agent reads during skill generation to validate name format, description quality, instruction concreteness, and example presence.
- **Generated skills follow the universal skills.sh format**: `name` + `description` in YAML frontmatter, markdown body with instructions. No agent-specific fields. Can optionally include `references/`, `scripts/`, `assets/`.
- **Installation flow**: agent writes to `.agents/skills/<name>/` in the project cwd, then asks project vs global. Global install delegates to `npx skills add ./.agents/skills/<name> -g -y`.
- **For large sources** (documentation sites, repos), the agent fetches the index/TOC first, summarizes available topics, and asks the user to narrow scope before deep-reading.
- **Error handling**: agent explains the failure and offers a path forward. Silent failures are not acceptable.

## Testing Decisions

- **Manual smoke tests**: run the skill against at least one source of each type (YT URL, docs URL, pasted text, local code), manually verify the generated skill meets the quality bar.
- **No automated eval harness for v1** — the skill's output quality is subjective and best judged by a human.

## Out of Scope

- Automated test case generation for the generated skill
- Publishing generated skills to skills.sh
- Multi-agent evaluation of generated skill quality
- Batch generation (processing multiple sources in one session)
- Running the generated skill to verify it works before install

## Further Notes

- The name "AnythingToSkill" is used as `name: anythingtoskill` in the SKILL.md frontmatter and as the directory name.
- The project lives at `github.com/<owner>/AnythingToSkill` — installable via `npx skills add <owner>/AnythingToSkill`.
