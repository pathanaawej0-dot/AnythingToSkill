Status: completed

## What to build

Implement the full preview-and-iteration loop. After the agent generates a skill draft and validates it against the quality guide, it presents a readable preview to the user and asks for feedback. Loop continues until user approves.

## Acceptance criteria

- [x] Preview is presented clearly (not raw markdown dump)
- [x] Agent explicitly asks: "What do you think? Would you like to revise anything?"
- [x] Agent specifically invites feedback on: name accuracy, description coverage, instruction clarity
- [x] User can request changes; agent revises and re-previews
- [x] Loop terminates when user approves
- [x] On approval, agent proceeds to write + install (slice 01)

## Blocked by

01-core-skill, 03-quality-guide

## User stories covered

5, 6
