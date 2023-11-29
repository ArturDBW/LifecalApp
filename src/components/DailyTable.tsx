import styled from "styled-components";
import { DailtyTableRow } from "../elements/DailtyTableRow";

const GridContainer = styled.div`
  display: grid;
  width: 1200px;
  background-color: #c0bebe;
`;

const HeaderTable = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 200px);
`;

export const DailyTable = () => {
  const handleAddMealsClick = (rowName: string) => {
    console.log(`Dodaj element do wiersza: ${rowName}`);
  };

  return (
    <GridContainer>
      <HeaderTable>
        <div></div>
        <div>Dessert (100g serving)</div>
        <div>Calories</div>
        <div>Fat&nbsp;(g)</div>
        <div>Carbs&nbsp;(g)</div>
        <div>Protein&nbsp;(g)</div>
      </HeaderTable>
      <DailtyTableRow
        rowName={"Śniadanie"}
        handleAddMealsClick={handleAddMealsClick}
      />
      <DailtyTableRow
        rowName={"Lunch"}
        handleAddMealsClick={handleAddMealsClick}
      />
      <DailtyTableRow
        rowName={"Obiad"}
        handleAddMealsClick={handleAddMealsClick}
      />
      <DailtyTableRow
        rowName={"Podwieczorek"}
        handleAddMealsClick={handleAddMealsClick}
      />
      <DailtyTableRow
        rowName={"Kolacja"}
        handleAddMealsClick={handleAddMealsClick}
      />
    </GridContainer>
  );
};
