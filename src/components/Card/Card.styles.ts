import styled from "styled-components";

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
