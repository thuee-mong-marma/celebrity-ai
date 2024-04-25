import { create } from "zustand";

type PersonaStore = {
  currentPersona : string;
  setPersona: (persona: string) => void
}

export const usePersona = create<PersonaStore>((set) => ({
  currentPersona: "Snoop Dogg",
  setPersona: (persona) => set({currentPersona: persona})
}))