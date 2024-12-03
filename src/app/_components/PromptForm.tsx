'use client';

import { Form, FormField } from '@/components/ui/form';
import { PromptSchema } from '@/utils/schema/promptSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormItemComponent } from './FormItemComponent';
import { Button } from '@/components/ui/button';

export const PromptForm = () => {
  const promptForm = useForm<z.infer<typeof PromptSchema>>({
    resolver: zodResolver(PromptSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const onSubmit = (values: z.infer<typeof PromptSchema>) => {
    console.log(values.prompt);
  }

  return (
    <Form {...promptForm}>
      <form onSubmit={promptForm.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={promptForm.control}
          name='prompt'
          render={({ field }) => (
            <FormItemComponent field={field} onChangeHandler={undefined} />
          )}
        />
        <Button type='submit'>Enter</Button>
      </form>
    </Form>
  );
};
