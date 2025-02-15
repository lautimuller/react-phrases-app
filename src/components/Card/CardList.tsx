import React from "react";
import { Grid } from "@mui/material";
import { Card } from "./Card";
import { usePhrase } from "../../context/PhraseContext/usePhrase";

interface Phrase {
  id: string;
  text: string;
}

interface CardListProps {
  results: Phrase[];
  handleEdit: (id: string, text: string) => void;
  removePhrase: (id: string) => void;
}

export const CardList: React.FC<CardListProps> = ({
  results,
  handleEdit,
  removePhrase,
}) => {
  const { editId, startEditing } = usePhrase();

  return (
    <Grid container spacing={3}>
      {results.map((phrase) => (
        <Grid item xs={12} sm={6} md={3} key={phrase.id}>
          <Card
            content={phrase}
            onEdit={() => handleEdit(phrase.id, phrase.text)}
            onDelete={() => removePhrase(phrase.id)}
            isEditing={phrase.id === editId}
            startEditing={startEditing}
          />
        </Grid>
      ))}
    </Grid>
  );
};
