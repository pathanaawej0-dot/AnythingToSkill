# Fetch YouTube Transcript

Use when the user provides a YouTube video URL.

## How to detect

- URL matches `youtube.com/watch?v=`, `youtu.be/`, or `youtube.com/shorts/`

## How to fetch

1. Use the `fetch-youtube-transcript` agent skill to get the transcript
2. The skill returns the full transcript text with timestamps
3. Pass the full transcript to the skill generation step

## What to do if unavailable

If the fetch-youtube-transcript skill isn't installed:
- Use the python library `youtube-transcript-api` via bash
- Run: `pip install youtube-transcript-api && python -c "from youtube_transcript_api import YouTubeTranscriptApi; print(YouTubeTranscriptApi.get_transcript('<VIDEO_ID>'))"`
- Extract the video ID from the URL

## Error handling

| Error | Action |
|-------|--------|
| Transcript disabled on video | Tell user, suggest alternative source |
| Video unavailable/private | Tell user, ask for different source |
| API call fails | Retry once, then explain failure |
