'use client';

import { promptStore } from '@/utils/states/promptState';
import { PromptCard } from './PromptCard';

export const PromptDialog = () => {
  const { promptList } = promptStore();

  return (
    <section className="prompt-dialog-section px-[4%] lg:px-[18%] h-[550px] lg:h-[370px] overflow-y-auto">
      <div className="prompt-dialog-content">
        {promptList.length > 0 ? (
          <div className="grid gap-2">
            {promptList.map((prompt, index) => (
              <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`} key={index} >
                <PromptCard user={prompt.user} prompt={prompt.prompt} cardIndex={index} />
              </div>
            ))}
          </div>
        ) : (
          <p>Please enter a prompt.</p>
        )}
      </div>
    </section>
  )
}