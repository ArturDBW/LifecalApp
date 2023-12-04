import styled from "styled-components";
import { AddMealsForm } from "./AddMealsForm";

const ContainerStyled = styled.div`
  background-color: #fff;
  grid-row: 2/-1;
  grid-column: 1/3;
  border-radius: 10px;
  margin-top: 16px;
  display: flex;
  padding: 16px;
  gap: 0 16px;

  @media (max-width: 768px) {
    grid-column: 1/-1;
    grid-row: 3/4;
    flex-direction: column;
  }
`;

const InfoBoxStyled = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;
const InfoSpanStyled = styled.span`
  font-size: 40px;
`;

export const AddMeals = ({ tableData, setTableData }) => {
  return (
    <ContainerStyled>
      <InfoBoxStyled>
        <InfoSpanStyled>
          If your product is not on the list, add it yourself.
        </InfoSpanStyled>
      </InfoBoxStyled>
      <AddMealsForm tableData={tableData} setTableData={setTableData} />
    </ContainerStyled>
  );
};