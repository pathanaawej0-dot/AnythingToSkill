---
name: anythingtoskill
description: >
  Convert any source into an installable agent skill. Accepts YouTube URLs,
  documentation URLs, local code files, or pasted text. Use when the user says
  /anythingtoskill, "turn this into a skill", "create a skill from X",
  or "convert this to a skill".
---

# AnythingToSkill

## Step 1: Identify the source

Determine what the user provided. Ask if unclear.

| Pattern | Source type |
|---------|-------------|
| YouTube URL | Video transcript |
| URL | Web page or docs site |
| Local file path | Code or text |
| Pasted text | Raw content |

## Step 2: Fetch content

- **YouTube URL** → read `references/fetch-youtube-transcript.md`
- **URL** → read `references/fetch-url-content.md`
- **Local file** → read `references/fetch-local-code.md`
- **Pasted text** → already in context

## Step 3: Analyze and determine scope

Read `references/skill-quality-guide.md` before generating.

Scope matches the source's coverage. If source covers a narrow topic, generate a narrow skill. If it covers multiple topics, the skill should too.

For large sources (docs sites, repos), fetch the index/TOC first, summarize available topics, and ask the user to narrow scope.

## Step 4: Generate the skill

Write a draft with:
- **name**: lowercase, hyphens, <=64 chars, matches directory name
- **description**: <=1024 chars, describes what and when, trigger keywords
- **Instructions**: concrete procedural steps, not generic advice
- **At least one example**
- **Gotchas section**: known pitfalls and corrections

Validate the draft against `references/skill-quality-guide.md` before previewing.

## Step 5: Preview and iterate

Show the user a clear preview. Ask:
- "What do you think? Would you like to revise anything?"
- Specifically invite feedback on: name, description, instructions

Revise and re-preview until the user approves.

## Step 6: Write to disk

Create `.agents/skills/<name>/SKILL.md` in the project root.

## Step 7: Install

Ask: "Install project-specifically or globally?"

- **Project**: confirm it's already at `.agents/skills/<name>/`
- **Global**: run `npx skills add ./.agents/skills/<name> -g -y`

If `npx` is unavailable, provide manual instructions.

## Error handling

| Scenario | Action |
|----------|--------|
| URL inaccessible | Tell user, ask for alternative |
| Content too trivial | Explain, ask for more context |
| No source given | Ask what to convert |
| Source too large | Summarize topics, ask user to narrow |
