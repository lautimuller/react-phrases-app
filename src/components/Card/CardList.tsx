import React from "react";
import { Grid } from "@mui/material";
import { Card } from "./Card";
import { usePhrase } from "../../context/PhraseContext/usePhrase";

export const CardList: React.FC = () => {
  const { phrases } = usePhrase();

  return (
    <Grid container spacing={3}>
      {phrases.map((phrase) => (
        <Grid item xs={12} sm={6} md={3} key={phrase.id} data-testid={`card-${phrase.id}`}>
          <Card phraseId={phrase.id} />
        </Grid>
      ))}
    </Grid>
  );
};
