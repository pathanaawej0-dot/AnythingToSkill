# AnythingToSkill

An agent skill that converts arbitrary content (YouTube transcripts, documentation URLs, local code, pasted text) into installable agent skills compatible with the skills.sh ecosystem.

## Language

**Skill**:
An installable agent capability: a directory with a `SKILL.md` containing YAML frontmatter (`name`, `description`) and markdown instructions. Compatible with skills.sh.
_Avoid_: Plugin, extension, tool

**Source**:
The raw input the user provides to be converted into a skill. Can be a YouTube URL, a documentation URL, a local file path, or pasted text.
_Avoid_: Input, material, content

**Generated Skill**:
The output of AnythingToSkill — a new skill directory with `SKILL.md` written to either project-specific or global scope.
_Avoid_: Output skill, child skill

**Content Fetcher**:
A reference file bundled inside AnythingToSkill that teaches the agent how to retrieve content from a specific source type (e.g., `references/fetch-youtube-transcript.md`).
_Avoid_: Bundled skill, sub-skill

**Scope**:
Where the generated skill is installed. **Project** = `.agents/skills/<name>/` inside the current working directory. **Global** = `~/.agents/skills/<name>/` (canonical) via `npx skills add -g`.
_Avoid_: Local, system-wide

**Preview**:
The iterative review step where the generated skill is shown to the user before being written to disk. User can request revisions; the agent revises and re-previews.

**Quality Guide**:
The reference file at `references/skill-quality-guide.md` that the agent reads to ensure generated skills meet minimum quality standards.

**Trigger Pattern**:
How AnythingToSkill is activated. Supports two modes: slash command (`/anythingtoskill`) and natural language ("turn this into a skill", "create a skill from...").
