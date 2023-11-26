import { Box, Typography, ToggleButtonGroup } from "@mui/material";
import styled from "styled-components";

type ContainerStyledProps = {
  changePage: number;
};

export const ContainerStyled = styled(Box).withConfig({
  shouldForwardProp: (prop) => !["changePage"].includes(prop),
})<ContainerStyledProps>`
  padding: 20px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ changePage }) => `translateX(${100 - changePage}%)`};
`;

export const HeaderStyled = styled(Typography).attrs({
  variant: "h5",
  mb: 5,
  mt: 2,
})`
  text-align: center;
  font-weight: bold;
`;

export const TypographyStyled = styled(Typography).attrs({
  variant: "body2",
  mb: 2,
})`
  text-align: center;
`;

export const ToggleButtonGroupStyled = styled(ToggleButtonGroup).attrs({
  orientation: "vertical",
  fullWidth: true,
  exclusive: true,
})``;
