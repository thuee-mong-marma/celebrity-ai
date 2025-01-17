import { create } from "zustand";

const defaultPersona = "Snoop Dogg";

type PersonaStore = {
  currentPersona : string;
  setPersona: (persona: string) => void
}

export const usePersona = create<PersonaStore>((set) => ({
  currentPersona: defaultPersona,
  setPersona: (persona) => set({currentPersona: persona})
}))