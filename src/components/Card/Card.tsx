import React from "react";
import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { usePhrase } from "../../context/PhraseContext/usePhrase";
import colors from "../../styles/colors";
import {
  StyledCard,
  StyledCardContent,
  StyledBox,
  IconButton,
} from "./Card.styles";

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
    <StyledCard isEditing={phrase.id === editId}>
      <StyledCardContent>
        <Typography variant="body2" color="text.secondary">
          {phrase.text}
        </Typography>
      </StyledCardContent>
      <StyledBox>
        <IconButton onClick={onStartEditing} aria-label="edit">
          <EditIcon style={{ color: colors.primary }} />
        </IconButton>
        <IconButton onClick={() => removePhrase(phrase.id)} aria-label="delete">
          <DeleteIcon style={{ color: colors.primary }} />
        </IconButton>
      </StyledBox>
    </StyledCard>
  );
};
