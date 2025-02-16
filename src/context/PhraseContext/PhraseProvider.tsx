import { useState, ReactNode, useCallback, useMemo } from "react";
import { PhraseContext } from "./PhraseContext";
import { Phrase } from "./PhraseContext.types";

type PhraseProviderProps = {
  children: ReactNode;
};

export const PhraseProvider = ({ children }: PhraseProviderProps) => {
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [newPhrase, setNewPhrase] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const addPhrase = useCallback((text: string) => {
    setPhrases((prev) => [...prev, { id: Date.now().toString(), text }]);
  }, []);

  const removePhrase = useCallback((id: string) => {
    setPhrases((prev) => prev.filter((phrase) => phrase.id !== id));
  }, []);

  const editPhrase = useCallback((id: string, newText: string) => {
    setPhrases((prev) =>
      prev.map((phrase) =>
        phrase.id === id ? { ...phrase, text: newText } : phrase
      )
    );
    stopEditing();
  }, []);

  const startEditing = useCallback((phrase: Phrase) => {
    setEditId(phrase.id);
    setNewPhrase(phrase.text)
  }, []);

  const stopEditing = useCallback(() => {
    setEditId(null);
  }, []);

  const filteredPhrases = useMemo(() => {
    if (!query) return phrases;
    return phrases.filter((phrase) =>
      phrase.text.toLowerCase().includes(query.toLowerCase())
    );
  }, [phrases, query]);

  const value = useMemo(
    () => ({
      phrases: filteredPhrases,
      addPhrase,
      removePhrase,
      editPhrase,
      newPhrase,
      setNewPhrase,
      editId,
      startEditing,
      stopEditing,
      query,
      setQuery,
    }),
    [
      filteredPhrases,
      addPhrase,
      removePhrase,
      editPhrase,
      newPhrase,
      setNewPhrase,
      editId,
      startEditing,
      stopEditing,
      query,
      setQuery,
    ]
  );

  return (
    <PhraseContext.Provider value={value}>{children}</PhraseContext.Provider>
  );
};
