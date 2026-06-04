Status: completed

## What to build

Create the AnythingToSkill directory structure and main `SKILL.md` with the full pipeline for the simplest input type (pasted text). This is the thinnest vertical slice: accept text → analyze → generate a skill draft → preview → write to `.agents/skills/<name>/` → ask project vs global.

Supporting only pasted text for now. Reference files for YT/URL/code fetching come in slice 02.

## Acceptance criteria

- [ ] `skills/anythingtoskill/SKILL.md` exists with valid frontmatter (`name: anythingtoskill`, description)
- [ ] SKILL.md covers the full pipeline for pasted text input
- [ ] Agent shows a readable preview of the generated skill before writing
- [ ] Agent asks "project or global?" after generating
- [ ] Project install: skill lands at `.agents/skills/<name>/SKILL.md`
- [ ] Global install: agent runs `npx skills add` with `-g` flag

## Blocked by

None - can start immediately.

## User stories covered

1, 3, 5, 6, 7, 8, 9, 10, 11, 12
