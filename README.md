# PM Orchestration

Product Management orchestration tools and document generation APIs.

## Overview

This project provides serverless functions for automating product management tasks, with a focus on AI-powered document generation.

## API Endpoints

### `/api/ai-generate`

POST endpoint for AI-powered content generation.

**Request:**
```json
{
  "system": "You are a helpful assistant...",
  "user": "Generate a PRD for..."
}
```

**Response:**
```json
{
  "output": "# Generated Content\n\nYour AI-generated content here..."
}
```

## Directory Structure

- `api/` - Vercel serverless functions
- `document-creation/` - Document generation specific functionality

## Development

```bash
npm install
npm run dev
```

## Deployment

```bash
npm run deploy
```

## Environment Variables

Set in Vercel dashboard:
- `OPENAI_API_KEY` - Your OpenAI API key