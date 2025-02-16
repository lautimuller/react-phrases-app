import React from "react";
import {
  Card as MuiCard,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { usePhrase } from "../../context/PhraseContext/usePhrase";
import colors from "../../styles/colors";
import { IconButton } from "./Card.styles";

type CardProps = {
  phraseId: string;
};

export const Card: React.FC<CardProps> = ({ phraseId }) => {
  const { phrases, editId, startEditing, removePhrase } = usePhrase();
  const phrase = phrases.find((p) => p.id === phraseId);

  if (!phrase) return null;

  const onStartEditing = () => {
    startEditing(phrase);
  };

  return (
    <MuiCard
      sx={{
        boxShadow: phrase.id === editId ? 6 : 2,
        minHeight: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {phrase.text}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "end", padding: 1 }}>
        <IconButton
          onClick={onStartEditing}
          sx={{ "&:focus": { outline: "none", border: "none" } }}
        >
          <EditIcon style={{ color: colors.primary }} />
        </IconButton>
        <IconButton
          onClick={() => removePhrase(phrase.id)}
          sx={{ "&:focus": { outline: "none", border: "none" } }}
        >
          <DeleteIcon style={{ color: colors.primary }} />
        </IconButton>
      </Box>
    </MuiCard>
  );
};
