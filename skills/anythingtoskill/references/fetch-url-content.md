# Fetch URL Content

Use when the user provides a documentation URL, blog post, or any web page.

## How to detect

- URL starts with `http://` or `https://`
- Not a YouTube URL (handled by fetch-youtube-transcript)

## How to fetch

1. Use the agent's webfetch tool to retrieve the URL
2. If the fetched content is large (>50K chars or multiple pages detected):
   - Fetch the index/TOC first
   - Summarize available topics
   - Ask the user: "This site has these topics — which should the skill cover?"
   - Deep-read only the selected pages

## What to extract

- Main headings and structure
- Code examples and patterns
- API signatures and parameters
- Configuration options
- Gotchas/warnings mentioned in the docs

## Error handling

| Error | Action |
|-------|--------|
| 404 / inaccessible | Tell user, ask for alternative URL |
| Login wall | Tell user content is behind auth, ask for pasted text instead |
| Redirect loop | Try the final URL, if fails explain |
| Too many redirects | Ask user to paste content directly |
