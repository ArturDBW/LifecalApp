import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUserMeals } from "../slice/userSlice";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 200px);
`;

const TableRowHistory = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 200px);
`;

type MealProps = {
  type: string;
  name: string;
  mealCalories: number;
  mealFat: number;
  mealCarbonhydrates: number;
  mealProteins: number;
};

type DailyTableRowProps = {
  rowName: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedRow: React.Dispatch<React.SetStateAction<string>>;
};

export const DailtyTableRow = ({
  rowName,
  setOpen,
  setSelectedRow,
}: DailyTableRowProps) => {
  const onAddButonClick = () => {
    setSelectedRow(rowName);
    setOpen(true);
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
        .filter((meal: MealProps) => meal.type === rowName)
        .map((meal: MealProps, i: number) => (
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
