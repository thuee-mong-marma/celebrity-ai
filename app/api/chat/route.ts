// import { NextRequest, NextResponse } from "next/server";
// import { Message as VercelChatMessage, StreamingTextResponse } from "ai";

// import { ChatOpenAI } from "@langchain/openai";
// import { PromptTemplate } from "@langchain/core/prompts";
// import { HttpResponseOutputParser } from "langchain/output_parsers";

// export const runtime = 'edge';

// // const formatMessage = (message: VercelChatMessage) => {
// //   return `${message.role}: ${message.content}`;
// // };

// const TEMPLATE = `You goal is to give advice in the style of {persona} on the following situation.\n{personality}
// Make 3 paragraphs and keep it around 300 and 500 characters.\nDo not exceed 500 characters\n\n
// Situation:\n{message}`;

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     console.log('req body', body)
//     const { message, persona, personality } = body;

//     const prompt = PromptTemplate.fromTemplate(TEMPLATE);

//     const model = new ChatOpenAI({
//       temperature: 0.8,
//       model: "gpt-4o-mini",
//     });

//     const outputParser = new HttpResponseOutputParser();

//     const chain = prompt.pipe(model).pipe(outputParser);

//     const stream = await chain.stream({
//       message: message,
//       persona: persona,
//       personality: personality,
//     });

//     return new StreamingTextResponse(stream);

//   } catch (error: any) {
//     console.error(error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, persona, personality } = await req.json();

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: `Your job is to act as a virtual therapist. You will give advice in the style of ${persona} and your personality is ${personality}. Always reply with a friendly and empathetic tone keeping your personality in mind. Always try to avoid conversation which are not related to giving advices. For example, if the user asks you about literature, you should politely decline and redirect the conversation back to giving advice.`,
    messages,
  });

  return result.toDataStreamResponse();
}