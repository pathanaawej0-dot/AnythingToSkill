Status: completed

## What to build

Add reference files that teach the agent how to fetch content from YouTube URLs, documentation URLs, and local code. The SKILL.md from slice 01 already has the pipeline; this slice plugs in the content-fetching layer so the pipeline works for all source types.

Each reference file is a markdown file the agent reads when it identifies the corresponding source type.

## Acceptance criteria

- [ ] `references/fetch-youtube-transcript.md` exists — teaches agent to use the fetch-youtube-transcript skill
- [ ] `references/fetch-url-content.md` exists — teaches agent to use webfetch, handle inaccessible URLs, and TOC-first approach for large sites
- [ ] `references/fetch-local-code.md` exists — teaches agent to read files/directories for code patterns
- [ ] SKILL.md references these files at the right point in the pipeline
- [ ] Each reference covers: how to detect the source type, exact steps, error handling

## Blocked by

01-core-skill

## User stories covered

1, 2, 4, 10
