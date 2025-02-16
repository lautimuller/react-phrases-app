import styled from "styled-components";
import { Card as MuiCard, CardContent as MuiCardContent, Box as MuiBox, IconButton as MuiIconButton } from "@mui/material";

export const StyledCard = styled(MuiCard)`
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledCardContent = styled(MuiCardContent)`
  flex-grow: 1;
`;

export const StyledBox = styled(MuiBox)`
  display: flex;
  justify-content: end;
  padding: 1;
`;

export const CardWrapper = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const CardContent = styled.p`
  margin: 0 0 8px;
  color: #495057;
`;

export const IconButton = styled(MuiIconButton)`
  &:focus {
    outline: none;
    border: none;
  }
`;