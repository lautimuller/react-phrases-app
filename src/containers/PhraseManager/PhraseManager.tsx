import React, { useState } from "react";
import { usePhrase } from "../../context/PhraseContext/usePhrase";
import { HeaderBar } from "../../components/Header/HeaderBar";
import { PhraseSearch } from "../../renderProps/PhraseSearch";
import { CardList } from "../../components/Card/CardList";
import { Title, Container, NoResultsContainer, NoResultsImage } from "./PhraseManager.styles";

export const PhraseManager: React.FC = () => {
  const { addPhrase, removePhrase, editPhrase } = usePhrase();
  const [newPhrase, setNewPhrase] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  const handleSave = () => {
    if (newPhrase.trim()) {
      if (editId) {
        editPhrase(editId, newPhrase);
        setEditId(null);
      } else {
        addPhrase(newPhrase);
      }
      setNewPhrase("");
    }
  };

  const handleEdit = (id: string, text: string) => {
    setEditId(id);
    setNewPhrase(text);
  };

  return (
    <Container>
      <PhraseSearch>
        {(results, handleSearch, query) => (
          <>
            <Title>Gestor de Frases 💬</Title>

            <HeaderBar
              newPhrase={newPhrase}
              setNewPhrase={setNewPhrase}
              editId={editId}
              handleSave={handleSave}
              handleEdit={handleEdit}
              removePhrase={removePhrase}
              handleSearch={handleSearch}
              query={query}
            />

            {results.length > 0 ? (
              <CardList
                results={results}
                handleEdit={handleEdit}
                removePhrase={removePhrase}
              />
            ) : (
              <NoResultsContainer>
                <NoResultsImage
                  src="src/assets/images/NoResults.png"
                  alt="No Results Found"
                />
              </NoResultsContainer>
            )}
          </>
        )}
      </PhraseSearch>
    </Container>
  );
};