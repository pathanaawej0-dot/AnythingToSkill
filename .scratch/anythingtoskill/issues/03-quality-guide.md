Status: completed

## What to build

Add `references/skill-quality-guide.md` that the agent reads during skill generation. This ensures every generated skill meets minimum quality standards before it reaches the preview step.

Content should cover: naming rules, description optimization, instruction quality, scope calibration, gotchas, templates, progressive disclosure.

## Acceptance criteria

- [ ] `references/skill-quality-guide.md` exists
- [ ] Defines minimum quality bar (valid name, valid description, concrete instructions, >=1 example)
- [ ] Covers description optimization for triggering accuracy
- [ ] Covers scope calibration (not too narrow, not too broad)
- [ ] SKILL.md instructs the agent to load this file during the analyze/generate step
- [ ] Agent validates generated skill against this guide before showing preview

## Blocked by

01-core-skill

## User stories covered

11, 12
