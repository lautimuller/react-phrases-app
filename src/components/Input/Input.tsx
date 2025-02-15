import React from "react";
import { InputProps } from "./Input.types";
import * as S from "./Input.styles";

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type = "text",
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <S.StyledInput
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
