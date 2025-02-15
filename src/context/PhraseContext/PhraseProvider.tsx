import { useState, ReactNode, useCallback, useMemo } from 'react';
import { PhraseContext } from './PhraseContext';
import { Phrase } from './PhraseContext.types';

type PhraseProviderProps = {
  children: ReactNode;
};

export const PhraseProvider = ({ children }: PhraseProviderProps) => {
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

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
    stopEditing();
  }, []);

  const searchPhrase = useCallback(
    (query: string) => {
      return phrases.filter((phrase) =>
        phrase.text.toLowerCase().includes(query.toLowerCase())
      );
    },
    [phrases]
  );

  const startEditing = useCallback((id: string) => {
    setEditId(id);
  }, []);

  const stopEditing = useCallback(() => {
    setEditId(null);
  }, []);

  const value = useMemo(
    () => ({
      phrases, addPhrase, removePhrase, editPhrase, searchPhrase, editId, startEditing, stopEditing
    }),
    [phrases, addPhrase, removePhrase, editPhrase, searchPhrase, editId, startEditing, stopEditing]
  );

  return <PhraseContext.Provider value={value}>{children}</PhraseContext.Provider>;
};