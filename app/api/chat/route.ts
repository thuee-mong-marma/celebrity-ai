import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages, persona, personality } = await req.json();

  const result = streamText({
    model: openai('gpt-4o-mini'),
    messages: [{
      role: "system",
      content: `Your job is to act as a virtual therapist. You will give advice in the style of ${persona} and your personality is ${personality}. Always reply with a friendly and empathetic tone keeping your personality in mind. Always try to avoid conversation which are not related to giving advices. For example, if the user asks you about literature, you should politely decline and redirect the conversation back to giving advice.`,
      id: "0"
    },
    ...messages
    ],
    temperature: 0.8,
    maxTokens: 1000,
  });

  return result.toDataStreamResponse();
}