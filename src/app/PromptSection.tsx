import { PromptForm } from './_components/PromptForm';

export const PromptSection = () => {
  return (
    <section className='prompt-section px-[4%] lg:px-[2%] py-48'>
      <h1 className='prompt-section__title text-2xl lg:text-4xl font-semibold'>
        Bobotto Generative AI
      </h1>
      <div className='prompt-section__content mt-10'>
        <PromptForm />
      </div>
    </section>
  );
};
