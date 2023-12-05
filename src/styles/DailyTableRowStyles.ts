import styled from "styled-components";

export const TableRow = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  padding: 16px;
  gap: 16px;
  background-color: #fff;
  border-radius: 10px;

  @media (max-width: 480px) {
    gap: 16px 4px;
  }
`;

export const TableRowHistory = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(5, 50px);
  grid-template-rows: 1fr;
  grid-column: 1/-1;
  gap: 0 16px;

  @media (max-width: 480px) {
    font-size: 12px;
    gap: 0 10px;
    grid-template-columns: 1fr repeat(5, 40px);
  }
`;

export const SingleElementStyled = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
`;

export const SingleElementStyledSelf = styled.div`
  justify-self: start;
  display: flex;
  align-items: center;
  position: relative;
`;

export const HeaderSingleElementStyledSelf = styled.div`
  justify-self: start;
  font-weight: 700;
`;

export const MinusButtonStyled = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  transition: 0.2s all;
  &:hover {
    transform: scale(125%);
  }
`;
export const HeaderSingleElementStyled = styled.div`
  justify-self: end;
  font-weight: 700;
`;
export const TitleBoxStyled = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
`;
export const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.2s all;
  justify-self: end;
  align-items: center;
  &:hover {
    transform: scale(125%);
  }
`;

export const MacrosBoxStyled = styled.div`
  display: flex;
`;

export const MacrosElementStyled = styled.div`
  flex-grow: 1;
  max-width: 50px;
`;

export const CaloriesElementStyled = styled.div`
  justify-self: end;
  font-weight: 700;
  font-size: 18px;
`;
