import { Box, Paper } from "@mui/material";
import styled from "styled-components";

export const ContainerBox = styled(Box)`
  padding: 20px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease;
  position: absolute;
  top: 0;
  left: 0;
`;

export const PaperStyled = styled(Paper)`
  min-height: 60vh;
  width: 360px;
  background-color: transparent;
  overflow: hidden;
  position: relative;
`;
