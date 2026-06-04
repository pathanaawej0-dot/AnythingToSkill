# Skill Quality Guide

How to write a high-quality agent skill. Follow this when generating a new skill.

## Minimum quality bar

A skill must meet ALL of these before it's ready to write:

- `name`: lowercase, hyphens only, max 64 chars, matches directory name
- `description`: max 1024 chars, describes what and when, includes trigger keywords
- Instructions must contain concrete procedural steps (not generic advice)
- At least one concrete example (input → output)

## Naming

- Short, descriptive slug: `react-usestate`, `csv-analyzer`, `code-review`
- Must match the directory name exactly
- Lowercase letters, numbers, and hyphens only

## Description

The description is the most critical field — it determines when the skill triggers.

Good:
```yaml
description: >
  Analyze CSV and tabular data files — compute summary statistics,
  add derived columns, generate charts, and clean messy data. Use
  when the user has a CSV, TSV, or Excel file and wants to explore,
  transform, or visualize data.
```

Poor: `description: Process CSV files.`

Rules:
- Use imperative phrasing: "Use when..." or "Use this skill when..."
- Focus on user intent, not implementation
- Include keywords the user might say
- Err on the side of being pushy (list contexts explicitly)

## Instructions

### Add what the agent lacks, omit what it knows

Focus on domain-specific knowledge the agent wouldn't know without the skill. Don't explain general concepts.

### Favor procedures over declarations

Teach the agent HOW to approach a problem class, not WHAT to produce for one instance.

Good:
```
1. Read the schema from references/schema.yaml to find relevant tables
2. Join tables using the _id foreign key convention
3. Apply filters as WHERE clauses
4. Aggregate and format as a markdown table
```

Poor:
```
Join `orders` to `customers` on `customer_id`, filter where `region = 'EMEA'`.
```

### Provide defaults, not menus

Pick one default approach. Mention alternatives briefly.

### Gotchas section

Include concrete corrections for mistakes the agent will make without being told:

```markdown
## Gotchas
- The `users` table uses soft deletes. Queries must include `WHERE deleted_at IS NULL`.
- User ID is `user_id` in DB, `uid` in auth service, `accountId` in billing API.
```

### Templates for output

Provide templates for structured output:

```markdown
## Report structure
```markdown
# [Title]
## Key findings
- Finding 1
## Recommendations
1. Actionable step
```
```

### Checklists for multi-step workflows

```markdown
Progress:
- [ ] Step 1: Analyze
- [ ] Step 2: Validate
- [ ] Step 3: Execute
```

### Validation loops

Instruct the agent to validate its own work before finishing.

## Scope

- Coherent unit of work: not too narrow (multiple skills needed per task), not too broad (hard to trigger precisely)
- If source covers multiple topics, scope matches the source coverage

## Structure

- Keep SKILL.md under 500 lines, under 5000 tokens
- Move detailed reference material to `references/`
- Use progressive disclosure: tell the agent WHEN to load each reference file

## Calibration

- Give freedom when multiple approaches are valid
- Be prescriptive when operations are fragile or consistency matters
- Match specificity to the fragility of the task
