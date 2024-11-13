import { usePersonaStore } from '../store/usePersonaStore';

export const usePersonaState = () => {
  const { persona, updatePersona } = usePersonaStore();

  const setName = (name) => updatePersona({ name });
  const setColor = (color) => updatePersona({ color });
  const setAvatar = (avatar) => updatePersona({ avatar });

  return {
    persona,
    setName,
    setColor,
    setAvatar,
  };
};