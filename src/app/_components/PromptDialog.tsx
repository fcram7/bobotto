'use client';

import { promptStore } from '@/utils/states/promptState';
import { PromptCard } from './PromptCard';
import { Loader2 } from 'lucide-react';

export const PromptDialog = () => {
  const { promptList } = promptStore();

  return (
    <section className='prompt-dialog-section px-[4%] lg:px-[18%] h-[550px] lg:h-[410px] overflow-y-auto'>
      <div className='prompt-dialog-content h-full'>
        {promptList.length > 0 ? (
          <div className='grid gap-2'>
            {promptList.map((prompt, index) => (
              <div
                className={`flex ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                key={index}
              >
                <PromptCard
                  user={prompt.user}
                  prompt={prompt.prompt}
                  cardIndex={index}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center gap-4 h-full">
            <Loader2 size={48} className='animate-spin' />
            <p className='text-2xl lg:text-4xl'>
              Waiting for your prompt...
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
