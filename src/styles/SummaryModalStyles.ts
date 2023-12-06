import { Button, Box, Typography } from "@mui/material";
import styled from "styled-components";

export const BoxStyled = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 340px;
  max-width: 440px;
  padding: 24px;
  background-color: white;
  border-radius: 10px;
  outline: none;
`;

export const HeaderStyled = styled(Typography).attrs({
  variant: "h4",
})`
  text-align: center;
`;

export const ShortDescriptionStyled = styled(Typography).attrs({
  variant: "h6",
  mt: 4,
  mb: 2,
})`
  text-align: center;
  margin-top: 24px;
`;

export const ButtonStyled = styled(Button).attrs({
  size: "large",
  variant: "contained",
  fullWidth: true,
})``;

export const ButtonContainer = styled.div`
  margin-top: 24px;
`;
