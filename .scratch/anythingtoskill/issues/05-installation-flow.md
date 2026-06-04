Status: completed

## What to build

Polish the installation step: after the user approves the skill, the agent writes it to `.agents/skills/<name>/SKILL.md` in the project cwd, then prompts for scope preference. If global, runs `npx skills add` with appropriate flags. Handles edge cases (npx not available, write failures).

## Acceptance criteria

- [ ] Agent creates the skill directory and SKILL.md at `.agents/skills/<name>/`
- [ ] Post-write prompt: "Install project-specifically or globally?"
- [ ] **Project**: agent confirms "Already installed at `.agents/skills/<name>/`"
- [ ] **Global**: agent runs `npx skills add ./.agents/skills/<name> -g -y`
- [ ] If `npx` unavailable, agent explains and offers manual instructions
- [ ] Agent confirms success or explains failure
- [ ] Edge case: skill name already exists at target path → agent asks to overwrite or rename

## Blocked by

01-core-skill, 04-preview-loop

## User stories covered

7, 8
