import { useState, ReactNode, useCallback, useMemo } from 'react';
import { PhraseContext } from './PhraseContext';
import { Phrase } from './PhraseContext.types';

type PhraseProviderProps = {
  children: ReactNode;
};

export const PhraseProvider = ({ children }: PhraseProviderProps) => {
  const [phrases, setPhrases] = useState<Phrase[]>([]);

  const addPhrase = useCallback((text: string) => {
    setPhrases((prev) => [...prev, { id: Date.now().toString(), text }]);
  }, []);

  const removePhrase = useCallback((id: string) => {
    setPhrases((prev) => prev.filter((phrase) => phrase.id !== id));
  }, []);

  const editPhrase = useCallback((id: string, newText: string) => {
    setPhrases((prev) =>
      prev.map((phrase) => (phrase.id === id ? { ...phrase, text: newText } : phrase))
    );
  }, []);

  const searchPhrase = useCallback(
    (query: string) => {
      return phrases.filter((phrase) =>
        phrase.text.toLowerCase().includes(query.toLowerCase())
      );
    },
    [phrases]
  );

  const value = useMemo(
    () => ({ phrases, addPhrase, removePhrase, editPhrase, searchPhrase }),
    [phrases, addPhrase, removePhrase, editPhrase, searchPhrase]
  );

  return <PhraseContext.Provider value={value}>{children}</PhraseContext.Provider>;
};
