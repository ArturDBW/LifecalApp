import styled from "styled-components";

export const ContainerStyled = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-column: 1/-1;
  }
`;

export const DataStyled = styled.div`
  font-size: 20px;
`;
export const CaloriesStyled = styled.div`
  margin-top: 12px;
`;
export const CaloriesInfoStyled = styled.span`
  font-size: 58px;
`;
export const SecondCaloriesInfoStyled = styled.span`
  margin-top: 16px;
  font-size: 28px;
`;
export const ProgresBarBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;

  @media (max-width: 768px) {
    gap: 8px 0;
  }
`;
