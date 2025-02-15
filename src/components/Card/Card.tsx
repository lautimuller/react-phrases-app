import React from "react";
import { Card as MuiCard, CardContent, IconButton, Typography, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface CardProps {
  content: string;
  onEdit: () => void;
  onDelete: () => void;
}

export const Card: React.FC<CardProps> = ({ content, onEdit, onDelete }) => {
  return (
    <MuiCard sx={{ maxWidth: 345, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-between", padding: 1 }}>
        <IconButton onClick={onEdit}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </MuiCard>
  );
};
