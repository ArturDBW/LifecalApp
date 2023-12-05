import { Box, Typography, TextField } from "@mui/material";
import styled from "styled-components";

type ContainerStyledProps = {
  changePage: number;
};

export const ContainerStyled = styled(Box).withConfig({
  shouldForwardProp: (prop) => !["changePage"].includes(prop),
})<ContainerStyledProps>`
  padding: 20px;
  height: 60vh;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  transition: transform 0.2s ease;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ changePage }) => `translateX(${300 - changePage}%)`};
`;

export const HeaderStyled = styled(Typography).attrs({
  variant: "h5",
  textAlign: "center",
  mb: 5,
  mt: 2,
})``;

export const TypographyStyled = styled(Typography).attrs({
  variant: "body2",
  mb: 2,
})`
  text-align: center;
`;

export const TextFieldStyled = styled(TextField).attrs({
  variant: "outlined",
  fullWidth: true,
})``;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
