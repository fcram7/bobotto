import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea';
import { ControllerRenderProps } from 'react-hook-form';

interface geminiInput {
  field: ControllerRenderProps<
    {
      prompt: string;
    }, 'prompt'
  >
}

export const FormItemComponent = ({ field }: geminiInput) => {
  return (
    <FormItem className='py-3'>
      <FormLabel className='lg:text-xl'>Your Prompt</FormLabel>
      <FormControl>
        <Textarea className='h-20' placeholder='Type what you want to find out...' required {...field} />
      </FormControl>
      <FormDescription>As for now you can only use text for your prompt</FormDescription>
      <FormMessage />
    </FormItem>
  )
}