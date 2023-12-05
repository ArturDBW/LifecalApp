import styled from "styled-components";

export const GridContainerStyled = styled.div`
  background-color: #eee;
  font-size: 14px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow-y: auto;
  height: 542px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 18px;

  @media (max-width: 768px) {
    grid-column: 1/-1;
    grid-row: 2/3;
    margin-top: 16px;
    max-height: auto;
  }
`;
