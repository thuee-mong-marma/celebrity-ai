import { create } from 'zustand';

type AdviceStore = {
  advice: string;
  isAdviceGenerating: boolean;
  setAdvice: (advice: string) => void;
  setAdviceGenerating: (isAdviceGenerating: boolean) => void;
};

export const useAdvice = create<AdviceStore>((set) => ({
  advice: '',
  isAdviceGenerating: false,
  setAdviceGenerating: (isAdviceGenerating) => set({ isAdviceGenerating }),
  setAdvice: (advice) => set({ advice }),
}));
