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
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  padding: 16px;
  gap: 16px;
  background-color: #fff;
  border-radius: 10px;
`;

const TableRowHistory = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(4, 50px);
  grid-template-rows: 1fr;
  grid-column: 1/-1;
  gap: 0 16px;

  @media (max-width: 480px) {
    font-size: 12px;
    gap: 0 8px;
  }
`;

const SingleElementStyled = styled.div`
  justify-self: end;
`;

const SingleElementStyledSelf = styled.div`
  justify-self: start;
`;

const HeaderSingleElementStyledSelf = styled.div`
  justify-self: start;
  font-weight: 700;
`;

const HeaderSingleElementStyled = styled.div`
  justify-self: end;
  font-weight: 700;
`;
const TitleBoxStyled = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
`;
const ButtonStyled = styled.button`
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

const MacrosBoxStyled = styled.div`
  display: flex;
`;

const MacrosElementStyled = styled.div`
  flex-grow: 1;
  max-width: 50px;
`;

const CaloriesElementStyled = styled.div`
  justify-self: end;
  font-weight: 700;
  font-size: 18px;
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
      <TitleBoxStyled>
        <SingleElementStyledSelf>{rowName}</SingleElementStyledSelf>
        {userMealsFiltredByType.length >= 1 && (
          <ButtonStyled onClick={() => setIsOpenHistory(!isOpenHistory)}>
            {isOpenHistory ? (
              <ExpandLessIcon sx={{ fontSize: 20 }} />
            ) : (
              <ExpandMoreIcon sx={{ fontSize: 20 }} />
            )}
          </ButtonStyled>
        )}
      </TitleBoxStyled>

      <CaloriesElementStyled>
        {formatNumber(
          userMealsFiltredByType.reduce(
            (sum: number, meal: MealProps) => sum + meal.mealCalories,
            0
          )
        )}
        &nbsp;kcal
      </CaloriesElementStyled>
      <MacrosBoxStyled>
        <MacrosElementStyled>
          {formatNumber(
            userMealsFiltredByType.reduce(
              (sum: number, meal: MealProps) => sum + meal.mealFat,
              0
            )
          )}
          g
        </MacrosElementStyled>

        <MacrosElementStyled>
          {formatNumber(
            userMealsFiltredByType.reduce(
              (sum: number, meal: MealProps) => sum + meal.mealCarbonhydrates,
              0
            )
          )}
          g
        </MacrosElementStyled>
        <MacrosElementStyled>
          {formatNumber(
            userMealsFiltredByType.reduce(
              (sum: number, meal: MealProps) => sum + meal.mealProteins,
              0
            )
          )}
          g
        </MacrosElementStyled>
      </MacrosBoxStyled>
      <ButtonStyled onClick={onAddButonClick}>
        <AddIcon sx={{ fontSize: 20 }} />
      </ButtonStyled>
      {isOpenHistory && (
        <>
          <TableRowHistory>
            <HeaderSingleElementStyledSelf>Meals</HeaderSingleElementStyledSelf>
            <HeaderSingleElementStyled>Calories</HeaderSingleElementStyled>
            <HeaderSingleElementStyled>Fat</HeaderSingleElementStyled>
            <HeaderSingleElementStyled>Carbs</HeaderSingleElementStyled>
            <HeaderSingleElementStyled>Proteins</HeaderSingleElementStyled>
          </TableRowHistory>
          {userMealsFiltredByType.map((meal: MealProps, i: number) => (
            <TableRowHistory key={i}>
              <SingleElementStyledSelf>{meal.name}</SingleElementStyledSelf>
              <SingleElementStyled>
                {meal.mealCalories}&nbsp;kcal
              </SingleElementStyled>
              <SingleElementStyled>{meal.mealFat}&nbsp;g</SingleElementStyled>
              <SingleElementStyled>
                {meal.mealCarbonhydrates}&nbsp;g
              </SingleElementStyled>
              <SingleElementStyled>
                {meal.mealProteins}&nbsp;g
              </SingleElementStyled>
            </TableRowHistory>
          ))}
        </>
      )}
    </TableRow>
  );
};