import React, { createContext, useContext } from 'react';
import { usePersonaStore } from '../store/usePersonaStore';

const PersonaContext = createContext();

export const PersonaProvider = ({ children }) => {
  const personaStore = usePersonaStore();
  return (
    <PersonaContext.Provider value={personaStore}>
      {children}
    </PersonaContext.Provider>
  );
};

export const usePersonaContext = () => useContext(PersonaContext);