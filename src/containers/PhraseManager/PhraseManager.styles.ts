import styled from "styled-components";
import colors from "../../styles/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

export const Card = styled.div`
  background-color: ${colors.background};
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

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: #1976d2;
  margin: 30px 0 30px 0;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 0 3rem;
`;

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoResultsImage = styled.img`
  max-width: 40%;
  height: auto;
`;