import { z } from 'zod';

export const PromptSchema = z.object({
  prompt: z.string().min(6, {
    message: 'Make sure your prompt is more than 6 characters',
  }),
});
