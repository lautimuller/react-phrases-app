import { useContext } from 'react';
import { PhraseContext } from './PhraseContext';
import { PhraseContextType } from './PhraseContext.types';

export const usePhrase = (): PhraseContextType => {
  const context = useContext(PhraseContext);
  if (!context) {
    throw new Error('usePhrase debe ser utilizado dentro de un PhraseProvider');
  }
  return context;
};
