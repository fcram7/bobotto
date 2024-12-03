import { GoogleGenerativeAI } from '@google/generative-ai'

type gemini = {
  prompt: string;
}

export const gemini = async ({ prompt }: gemini) => {
  const genAI = new GoogleGenerativeAI(process.env.NEXT_GEMINI_KEY!);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  try {
    const result = await model.generateContent(prompt);

    return result;
  } catch (err) {
    console.error(err);

    return err;
  }
}