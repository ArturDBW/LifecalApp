import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUserMeals } from "../slice/userSlice";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

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

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 100px 200px repeat(4, 1fr);
  justify-items: end;
  align-items: center;
  border-top: 1px solid gray;
`;

const TableRowHistory = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 100px 200px repeat(4, 1fr);
  justify-items: end;
  align-items: center;
  border-top: 1px solid gray;
  grid-column: 1/-1;
`;

const SingleElementStyled = styled.div`
  padding: 16px;
`;

const SingleElementStyledSelf = styled.div`
  padding: 16px;
  justify-self: start;
`;
const ButtonBoxStyled = styled.div`
  padding: 16px;
  display: flex;
`;
const ButtonStyled = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

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
      <ButtonBoxStyled>
        <ButtonStyled onClick={onAddButonClick}>
          <ExpandMoreIcon sx={{ fontSize: 20 }} />
        </ButtonStyled>
        <ButtonStyled>
          <AddIcon sx={{ fontSize: 20 }} />
        </ButtonStyled>
      </ButtonBoxStyled>
      <SingleElementStyledSelf>{rowName}</SingleElementStyledSelf>
      <SingleElementStyled>0</SingleElementStyled>
      <SingleElementStyled>0</SingleElementStyled>
      <SingleElementStyled>0</SingleElementStyled>
      <SingleElementStyled>0</SingleElementStyled>
      {userMeals
        .filter((meal: MealProps) => meal.type === rowName)
        .map((meal: MealProps, i: number) => (
          <TableRowHistory key={i}>
            <SingleElementStyled>&nbsp;</SingleElementStyled>
            <SingleElementStyledSelf>{meal.name}</SingleElementStyledSelf>
            <SingleElementStyled>{meal.mealCalories}</SingleElementStyled>
            <SingleElementStyled>{meal.mealFat}</SingleElementStyled>
            <SingleElementStyled>{meal.mealCarbonhydrates}</SingleElementStyled>
            <SingleElementStyled>{meal.mealProteins}</SingleElementStyled>
          </TableRowHistory>
        ))}
    </TableRow>
  );
};
