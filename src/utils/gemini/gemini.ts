import { GoogleGenerativeAI } from '@google/generative-ai'

export const gemini = async (prompt: string) => {
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY as string);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  try {
    const result = await model.generateContent(prompt);

    return result.response.text();
  } catch (err) {
    console.error(err);

    return err;
  }
}