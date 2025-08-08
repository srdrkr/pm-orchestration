// /api/ai-generate.js
// AI-powered document generation endpoint
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Set in Vercel env vars
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { system, user } = req.body;

    if (!system || !user) {
      return res.status(400).json({ error: 'Missing system or user message' });
    }

    const completion = await client.chat.completions.create({
      model: 'gpt-4o', // or gpt-4.1 / gpt-4o-mini depending on needs
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
      temperature: 0.2,
    });

    let output = completion.choices[0]?.message?.content || '';

    // Basic sanitizer: enforce headings if missing
    if (!/^#{1,6}\s/m.test(output)) {
      output = `# Output\n\n${output}`;
    }

    res.status(200).json({ output });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error', details: error });
  }
}