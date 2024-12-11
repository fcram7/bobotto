'use client';

import { Form, FormField } from '@/components/ui/form';
import { PromptSchema } from '@/utils/schema/promptSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormItemComponent } from './FormItemComponent';
import { Button } from '@/components/ui/button';
import { promptStore } from '@/utils/states/promptState';
import { gemini } from '@/utils/gemini/gemini';

export const PromptForm = () => {
  const { setPromptList } = promptStore();
  const promptForm = useForm<z.infer<typeof PromptSchema>>({
    resolver: zodResolver(PromptSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof PromptSchema>) => {
    setPromptList({
      user: 'You',
      prompt: values.prompt,
    });

    promptForm.resetField('prompt');

    const answer = await gemini(values.prompt);

    setPromptList({
      user: 'Bobotto',
      prompt: (await answer) as string,
    });
  };

  return (
    <Form {...promptForm}>
      <form
        onSubmit={promptForm.handleSubmit(onSubmit)}
        className='space-y-8 text-serikaWhite'
      >
        <FormField
          control={promptForm.control}
          name='prompt'
          render={({ field }) => <FormItemComponent field={field} />}
        />
        <Button
          className='bg-serikaGray border-serikaWhite hover:border-serikaGray hover:bg-serikaYellow hover:text-primary'
          variant='outline'
          type='submit'
        >
          Enter
        </Button>
      </form>
    </Form>
  );
};
