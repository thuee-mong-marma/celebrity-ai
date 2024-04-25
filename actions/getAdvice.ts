'use server'

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function getAdvice(message: string) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages : [
       {
        role: 'user',
        content: message
       }
      ]
    });

    if(!response) {
      throw new Error('No response from OpenAI')
    }

    return {data: response.choices[0].message.content};

  } catch(err) {
    console.log(err)
    return {err: (err as Error).message}
  }
}