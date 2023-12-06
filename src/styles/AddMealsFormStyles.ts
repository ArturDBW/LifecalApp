import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const FormContainerStyled = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 8px;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TextFieldNameStyled = styled(TextField)`
  grid-column: 1/-1;
`;

export const ButtonStyled = styled(Button)`
  grid-column: 1/-1;
`;
