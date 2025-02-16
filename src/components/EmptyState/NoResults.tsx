import React from "react";
import { NoResultsContainer, NoResultsImage } from "./NoResults.styles";

export const NoResults: React.FC = () => {
  return (
    <NoResultsContainer>
      <NoResultsImage
        src="src/assets/images/NoResults.png"
        alt="No se encontraron resultados"
      />
    </NoResultsContainer>
  );
};
