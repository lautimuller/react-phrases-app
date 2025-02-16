import React from "react";
import { TextField } from "@mui/material";
import { textFieldStyle } from "./SearchBar.styles";
import { usePhrase } from "../../context/PhraseContext/usePhrase";

export const SearchBar: React.FC = () => {
  const { query, setQuery } = usePhrase();

  return (
    <TextField
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Buscar"
      variant="outlined"
      fullWidth
      sx={textFieldStyle}
    />
  );
};
