import { createContext } from 'react';
import { PhraseContextType } from './PhraseContext.types';

export const PhraseContext = createContext<PhraseContextType | undefined>(undefined);
