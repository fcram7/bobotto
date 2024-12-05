import { PromptDialog } from './_components/PromptDialog';
import { PromptForm } from './_components/PromptForm';

export const PromptSection = () => {
  return (
    <section className='prompt-section px-[4%] lg:px-[2%] py-12'>
      <div className='prompt-section__content mt-10'>
        <div className='prompt-section__prompt-dialog'>
          <PromptDialog />
        </div>
        <PromptForm />
      </div>
    </section>
  );
};
