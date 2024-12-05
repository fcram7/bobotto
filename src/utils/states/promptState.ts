import { create } from 'zustand';

type prompt = {
  user: string;
  prompt: string;
}

interface promptList {
  promptList: prompt[];
}

interface promptAction {
  setPromptList: (promptList: prompt) => void;
}

const initialState: promptList = {
  promptList: []
}

export const promptStore = create<promptList & promptAction>((set) => ({
  ...initialState,
  setPromptList: (newPrompt) => set((state) => ({
    promptList: [
      ...state.promptList,
      newPrompt
    ]
  }))
}))