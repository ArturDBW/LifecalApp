import styled from "styled-components";
import TableCell from "@mui/material/TableCell";
import { Paper } from "@mui/material";

export const TableColumnName = styled(TableCell)`
  width: 50%;
`;

export const TableContainerStyled = styled(Paper)``;

export const TableStyled = styled.table``;

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.2s all;
  &:hover {
    transform: scale(125%);
  }
`;
