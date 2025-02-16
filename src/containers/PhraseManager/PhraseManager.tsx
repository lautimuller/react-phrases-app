import React from "react";
import { PhraseSearch } from "../../renderProps/PhraseSearch";
import { CardList } from "../../components/Card/CardList";
import { Title, Container, NoResultsContainer, NoResultsImage } from "./PhraseManager.styles";
import { HeaderBar } from "../../components/Header/HeaderBar";

export const PhraseManager: React.FC = () => {
  return (
    <Container>
      <PhraseSearch>
        {(results) => (
          <>
            <Title>Gestor de Frases 💬</Title>
            <HeaderBar />
            {results.length > 0 ? (
              <CardList />
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
