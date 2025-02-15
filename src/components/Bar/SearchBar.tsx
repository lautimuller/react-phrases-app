import React from "react";
import { TextField } from "@mui/material";
import { textFieldStyle } from "./SearchBar.styles";

interface SearchBarProps {
  query: string;
  handleSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  query,
  handleSearch,
}) => {
  return (
    <TextField
      value={query}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Buscar"
      variant="outlined"
      fullWidth
      sx={textFieldStyle}
    />
  );
};
