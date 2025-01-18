import { create } from "zustand";

const defaultPersona = "Keanu Reeves";

type PersonaStore = {
  currentPersona : string;
  setPersona: (persona: string) => void
}

export const usePersona = create<PersonaStore>((set) => ({
  currentPersona: defaultPersona,
  setPersona: (persona) => set({currentPersona: persona})
}))