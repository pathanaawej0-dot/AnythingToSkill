# Fetch Local Code

Use when the user provides a path to a local file or directory.

## How to detect

- User mentions a file path (absolute or relative)
- User says "my project", "this repo", "my code"

## How to fetch

1. **Single file**: read the file directly
2. **Directory/repo**: 
   - List the directory structure first
   - Identify key files (entry points, configs, main modules)
   - Read only the most relevant files (don't read everything)
   - Prioritize: README, source files, tests, configs

## What to extract

- Project structure and conventions
- Key patterns and idioms used
- Configuration patterns
- Testing approach
- Build/deploy setup

## Error handling

| Error | Action |
|-------|--------|
| Path doesn't exist | Tell user, ask for correct path |
| Permission denied | Explain, ask user to check permissions |
| Very large codebase | Focus on entry points and ask user which module to target |
