import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUserMeals } from "../slice/userSlice";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

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

  const [isOpenHistory, setIsOpenHistory] = useState(false);

  const userMeals = useSelector(selectUserMeals);

  const userMealsFiltredByType = userMeals.filter(
    (meal: MealProps) => meal.type === rowName
  );

  const formatNumber = (value: number) => {
    return Number(value.toFixed(2)).toString();
  };

  return (
    <TableRow>
      <ButtonBoxStyled>
        {userMealsFiltredByType.length >= 1 && (
          <ButtonStyled onClick={() => setIsOpenHistory(!isOpenHistory)}>
            {isOpenHistory ? (
              <ExpandLessIcon sx={{ fontSize: 20 }} />
            ) : (
              <ExpandMoreIcon sx={{ fontSize: 20 }} />
            )}
          </ButtonStyled>
        )}
        <ButtonStyled onClick={onAddButonClick}>
          <AddIcon sx={{ fontSize: 20 }} />
        </ButtonStyled>
      </ButtonBoxStyled>
      <SingleElementStyledSelf>{rowName}</SingleElementStyledSelf>
      <SingleElementStyled>
        {formatNumber(
          userMealsFiltredByType.reduce(
            (sum: number, meal: MealProps) => sum + meal.mealCalories,
            0
          )
        )}
      </SingleElementStyled>
      <SingleElementStyled>
        {formatNumber(
          userMealsFiltredByType.reduce(
            (sum: number, meal: MealProps) => sum + meal.mealFat,
            0
          )
        )}
      </SingleElementStyled>
      <SingleElementStyled>
        {formatNumber(
          userMealsFiltredByType.reduce(
            (sum: number, meal: MealProps) => sum + meal.mealCarbonhydrates,
            0
          )
        )}
      </SingleElementStyled>
      <SingleElementStyled>
        {formatNumber(
          userMealsFiltredByType.reduce(
            (sum: number, meal: MealProps) => sum + meal.mealProteins,
            0
          )
        )}
      </SingleElementStyled>
      {isOpenHistory && (
        <>
          {userMealsFiltredByType.map((meal: MealProps, i: number) => (
            <TableRowHistory key={i}>
              <SingleElementStyled>&nbsp;</SingleElementStyled>
              <SingleElementStyledSelf>{meal.name}</SingleElementStyledSelf>
              <SingleElementStyled>{meal.mealCalories}</SingleElementStyled>
              <SingleElementStyled>{meal.mealFat}</SingleElementStyled>
              <SingleElementStyled>
                {meal.mealCarbonhydrates}
              </SingleElementStyled>
              <SingleElementStyled>{meal.mealProteins}</SingleElementStyled>
            </TableRowHistory>
          ))}
        </>
      )}
    </TableRow>
  );
};
