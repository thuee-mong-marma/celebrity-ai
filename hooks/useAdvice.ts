import { Message } from 'ai';
import { create } from 'zustand';

type AdviceStore = {
  advice: Message[];
  isAdviceGenerating: boolean;
  setAdvice: (messages: Message[]) => void;
  setAdviceGenerating: (isAdviceGenerating: boolean) => void;
};

export const useAdvice = create<AdviceStore>((set) => ({
  advice: [],
  isAdviceGenerating: false,
  setAdviceGenerating: (isAdviceGenerating) => set({ isAdviceGenerating }),
  setAdvice: (messages) => set({ advice: messages }),
}));

