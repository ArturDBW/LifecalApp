import { Box, Typography } from "@mui/material";
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
  transform: ${({ changePage }) => `translateX(${0 - changePage}%)`};
`;

export const BottomFirtHalfSpanStyled = styled(Typography).attrs({
  variant: "h4",
})`
  text-align: center;
`;

export const BottomSecondHalfSpanStyled = styled(Typography).attrs({
  variant: "h4",
  mb: 2,
})`
  text-align: center;
`;

export const HeaderStyled = styled(Typography).attrs({
  variant: "h2",
})`
  text-align: center;
`;

export const DescriptionStyled = styled(Typography).attrs({
  variant: "body1",
  mt: 4,
})`
  text-align: center;
`;
