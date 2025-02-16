import React from "react";
import { NoResultsContainer, NoResultsImage } from "./NoResults.styles";

export const NoResults: React.FC = () => {
  return (
    <NoResultsContainer>
      <NoResultsImage data-testid="no-results"
        src="src/assets/images/NoResults.png"
        alt="No se encontraron resultados"
      />
    </NoResultsContainer>
  );
};
