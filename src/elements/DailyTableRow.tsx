import { useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import {
  ButtonStyled,
  CaloriesElementStyled,
  HeaderSingleElementStyled,
  HeaderSingleElementStyledSelf,
  MacrosBoxStyled,
  MacrosElementStyled,
  MinusButtonStyled,
  SingleElementStyled,
  SingleElementStyledSelf,
  TableRow,
  TableRowHistory,
  TitleBoxStyled,
} from "../styles/DailyTableRowStyles";
import { deleteItem, selectUserMeals, deleteMacro } from "../slice/userSlice";

type MealProps = {
  type: string;
  name: string;
  id: number;
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

  const dispatch = useDispatch();
  const handleDeleteItem = (
    itemId: number,
    calories: number,
    proteins: number,
    fat: number,
    carbs: number
  ) => {
    dispatch(deleteItem(itemId));
    dispatch(deleteMacro({ calories, proteins, carbs, fat }));
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
      {isOpenHistory && userMealsFiltredByType.length > 0 && (
        <>
          <TableRowHistory>
            <HeaderSingleElementStyledSelf>Meals</HeaderSingleElementStyledSelf>
            <HeaderSingleElementStyled>Calories</HeaderSingleElementStyled>
            <HeaderSingleElementStyled>Fat</HeaderSingleElementStyled>
            <HeaderSingleElementStyled>Carbs</HeaderSingleElementStyled>
            <HeaderSingleElementStyled>Proteins</HeaderSingleElementStyled>
            <HeaderSingleElementStyled>Delete</HeaderSingleElementStyled>
          </TableRowHistory>
          {userMealsFiltredByType.map((meal: MealProps, i: number) => (
            <TableRowHistory key={i}>
              <SingleElementStyledSelf>
                <span>{meal.name}</span>
              </SingleElementStyledSelf>
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
              <SingleElementStyled>
                <MinusButtonStyled
                  onClick={() =>
                    handleDeleteItem(
                      meal.id,
                      meal.mealCalories,
                      meal.mealProteins,
                      meal.mealFat,
                      meal.mealCarbonhydrates
                    )
                  }
                >
                  <DeleteIcon />
                </MinusButtonStyled>
              </SingleElementStyled>
            </TableRowHistory>
          ))}
        </>
      )}
    </TableRow>
  );
};
