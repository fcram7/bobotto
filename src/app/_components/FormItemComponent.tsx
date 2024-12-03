import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea';
import { ChangeEventHandler } from 'react'
import { ControllerRenderProps } from 'react-hook-form';

interface geminiInput {
  onChangeHandler: ChangeEventHandler<HTMLInputElement> | undefined;
  field: ControllerRenderProps<
    {
      prompt: string;
    }, 'prompt'
  >
}

export const FormItemComponent = ({ field }: geminiInput) => {
  return (
    <FormItem>
      <FormLabel className='lg:text-xl'>Your Prompt</FormLabel>
      <FormControl>
        <Textarea className='h-40' placeholder='Type what you want to find out...' required {...field} />
      </FormControl>
      <FormDescription>As for now you can only use text for your prompt</FormDescription>
      <FormMessage />
    </FormItem>
  )
}