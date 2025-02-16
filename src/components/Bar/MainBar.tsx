import React from "react";
import { TextField } from "@mui/material";
import { textFieldStyle } from "./MainBar.styles";

interface MainBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const MainBar: React.FC<MainBarProps> = ({
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
      sx={textFieldStyle}
      inputProps={{ maxLength: 120 }}
    />
  );
};