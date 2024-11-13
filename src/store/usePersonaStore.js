import { create } from 'zustand';

export const usePersonaStore = create((set) => ({
  persona: {
    name: 'New persona',
    color: '#EAFE99',
    avatar: 0,
  },
  cards: [],
  updatePersona: (updates) =>
    set((state) => ({
      persona: { ...state.persona, ...updates },
    })),
  addCard: (type) =>
    set((state) => ({
      cards: [...state.cards, { type, content: '' }],
    })),
  updateCard: (index, content) =>
    set((state) => {
      const updatedCards = [...state.cards];
      updatedCards[index] = { ...updatedCards[index], content };
      return { cards: updatedCards };
    }),
}));
