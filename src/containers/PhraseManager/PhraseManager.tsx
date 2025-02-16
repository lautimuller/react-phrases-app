import React from "react";
import { PhraseSearch } from "../../renderProps/PhraseSearch";
import { CardList } from "../../components/Card/CardList";
import { Title, Container } from "./PhraseManager.styles";
import { HeaderBar } from "../../components/Header/HeaderBar";
import { NoResults } from "../../components/EmptyState/NoResults";

export const PhraseManager: React.FC = () => {
  return (
    <Container>
      <PhraseSearch>
        {(results) => (
          <>
            <Title>Gestor de Frases 💬</Title>
            <HeaderBar />
            {results.length > 0 ? <CardList /> : <NoResults />}
          </>
        )}
      </PhraseSearch>
    </Container>
  );
};
