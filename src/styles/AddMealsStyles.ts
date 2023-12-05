import styled from "styled-components";

export const ContainerStyled = styled.div`
  background-color: #fff;
  grid-row: 2/-1;
  grid-column: 1/3;
  border-radius: 10px;
  margin-top: 18px;
  display: flex;
  padding: 16px;
  gap: 0 16px;

  @media (max-width: 768px) {
    grid-column: 1/-1;
    grid-row: 3/4;
    flex-direction: column;
  }
`;

export const InfoBoxStyled = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;
export const InfoSpanStyled = styled.span`
  font-size: 40px;
`;
