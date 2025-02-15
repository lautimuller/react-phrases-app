import React from "react";
import {
  Card as MuiCard,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Phrase } from "../../context/PhraseContext/PhraseContext.types";
import colors from "../../styles/colors";
import { IconButton } from "./Card.styles";
interface CardProps {
  content: Phrase;
  onEdit: () => void;
  onDelete: () => void;
  isEditing: boolean;
  startEditing: (id: string) => void;
}

export const Card: React.FC<CardProps> = ({
  content,
  onEdit,
  onDelete,
  isEditing,
  startEditing,
}) => {
  const onStartEditing = () => {
    startEditing(content.id);
    onEdit();
  };

  return (
    <MuiCard
    sx={{
      boxShadow: isEditing ? 6 : 2,
      minHeight: '150px', // Ajusta este valor según tus necesidades
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="body2" color="text.secondary">
        {content.text}
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
        onClick={onDelete}
        sx={{ "&:focus": { outline: "none", border: "none" } }}
      >
        <DeleteIcon style={{ color: colors.primary }} />
      </IconButton>
    </Box>
  </MuiCard>
  );
};
