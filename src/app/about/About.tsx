import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import Link from 'next/link';

export const About = () => {
  return (
    <section className='about-section px-[4%] lg:px-[2%] py-44 text-serikaWhite'>
      <h1 className='about-section__title text-2xl lg:text-4xl font-semibold'>
        About Bobotto
      </h1>
      <div className='about-section__content mx-[4%] p-[2%] bg-serikaGray text-serikaWhite mt-6 text-lg lg:text-xl text-justify grid gap-4 border-2 border-serikaGray rounded-lg border-opacity-50'>
        <p>
          Bobotto is a chatbot that utilizes google&#39;s artificial
          intelligence to generate answers from your inputs.
        </p>
        <p>
          Bobotto is created as a training ground for me to make a simple
          chatbot, layouts, and asynchronous processes. As for now, Bobotto
          project still needs to be improved in terms of user experience, and
          its capability to process prompts in other form such as images and
          speeches, and may be developed further on its functionality and user
          experiences.
        </p>
        <p>
          Thank you for giving Bobotto a try. Kindly have a look on
          Bobotto&#39;s repository on Github down below.
        </p>
        <Link href='https://github.com/fcram7/bobotto' target='_blank'>
          <Button variant='outline' className='bg-serikaGray hover:bg-serikaYellow hover:border-serikaGray'>
            <Github /> Github Repository
          </Button>
        </Link>

        <div className='about-section__technologies-used mt-4 grid gap-3'>
          <h2 className='about-section__subtitle text-xl lg:text-3xl'>
            Technologies Used
          </h2>
          <p>Frontend library / framework</p>
          <ul className='grid gap-1 list-disc ps-8'>
            <li>React</li>
            <li>NextJS</li>
          </ul>
          <p>CSS Framework</p>
          <ul className='grid gap-1 list-disc ps-8'>
            <li>Tailwind CSS</li>
          </ul>
          <p>UI Component</p>
          <ul className='grid gap-1 list-disc ps-8'>
            <li>ShadCN UI</li>
          </ul>
          <p>State Management</p>
          <ul className='grid gap-1 list-disc ps-8'>
            <li>Zustand</li>
          </ul>
          <p>Generative AI API</p>
          <ul className='grid gap-1 list-disc ps-8'>
            <li>Google Gemini</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
