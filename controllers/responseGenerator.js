import { Router } from 'express';
import { OpenAI } from 'openai';

const responseRouter = Router();

responseRouter.post('/generate-response', async (req, res) => {
 const openai = new OpenAI({
   apiKey: process.env.openAIKey,
});
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

    const aiResponse = await openai.chat.completions.create({
       model: 'gpt-4.1-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 150,
    });

    const generatedText = aiResponse.choices[0].message?.content || '';
    res.json({ response: generatedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

export default responseRouter;
