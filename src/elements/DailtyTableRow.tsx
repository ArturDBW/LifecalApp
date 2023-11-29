import { useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import { selectUserMeals } from "../slice/userSlice";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 200px);
`;

const TableRowHistory = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 200px);
`;

export const DailtyTableRow = ({ rowName, handleAddMealsClick }) => {
  const [selectedRow] = useState(rowName);

  const onAddButonClick = () => {
    handleAddMealsClick(rowName);
  };

  const userMeals = useSelector(selectUserMeals);

  return (
    <TableRow>
      <button onClick={onAddButonClick}>+</button>
      <div>{rowName}</div>
      <div>0</div>
      <div>0</div>
      <div>0</div>
      <div>0</div>
      {userMeals
        .filter((meal) => meal.type === selectedRow)
        .map((meal, i) => (
          <TableRowHistory key={i}>
            <div></div>
            <div>{meal.name}</div>
            <div>{meal.mealCalories}</div>
            <div>{meal.mealFat}</div>
            <div>{meal.mealCarbonhydrates}</div>
            <div>{meal.mealProteins}</div>
          </TableRowHistory>
        ))}
    </TableRow>
  );
};
