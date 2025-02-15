import React from "react";
import { TextField } from "@mui/material";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      fullWidth
      variant="outlined"
      sx={{ marginBottom: 2 }}
    />
  );
};
