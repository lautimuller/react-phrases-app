// src/renderProps/PhraseSearch.tsx
import React, { useState, useMemo } from "react";
import { usePhrase } from "../context/PhraseContext/usePhrase";
import { Phrase } from "../context/PhraseContext/PhraseContext.types";

interface Props {
  children: (
    results: Phrase[],  // Cambiado de string[] a Phrase[]
    handleSearch: (query: string) => void,
    query: string
  ) => React.ReactNode;
}

export const PhraseSearch: React.FC<Props> = ({ children }) => {
  const { phrases } = usePhrase();
  const [query, setQuery] = useState("");

  // Manejamos la búsqueda usando useMemo para optimizar el rendimiento
  const results = useMemo(() => {
    return phrases
      .filter((phrase) =>
        phrase.text.toLowerCase().includes(query.toLowerCase())
      );
  }, [query, phrases]);

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  return <>{children(results, handleSearch, query)}</>;
};
