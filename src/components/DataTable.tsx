import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import TableHead from "@mui/material/TableHead";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";

import {
  addItemMeals,
  addCalorie,
  addProtein,
  addFat,
  addCarbonhydrate,
} from "../slice/userSlice";
import {
  ButtonStyled,
  TableColumnName,
  TableContainerStyled,
  TableStyled,
} from "../styles/DataTableStyles";

type TablePaginationActionsProps = {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
};

type handleAddMealToDailyTableProps = {
  name: string;
  id: number | string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  type: string;
};

type handleCalcMacrosProps = {
  calories: number;
  proteins: number;
  carbs: number;
  fat: number;
};

interface Product {
  name: string | null;
  id: number | string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

type CustomPaginationActionTable = {
  selectedRow: string;
  tableData: Product[];
  setTableData: React.Dispatch<React.SetStateAction<Product[]>>;
};

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

type FoodDataProps = {
  name: string | null;
  id: number | string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
};

export default function CustomPaginationActionsTable({
  selectedRow,
  tableData,
}: CustomPaginationActionTable) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const dispatch = useDispatch();

  const addMealToDailyTableAndCalcMacros = (
    foodData: handleAddMealToDailyTableProps
  ) => {
    const newMeal = {
      name: foodData.name,
      id: uuidv4(),
      mealCalories: foodData.calories,
      mealCarbonhydrates: foodData.carbs,
      mealProteins: foodData.protein,
      mealFat: foodData.fat,
      type: selectedRow,
    };
    dispatch(addItemMeals(newMeal));
  };

  const handleCalcMacros = ({
    calories,
    proteins,
    carbs,
    fat,
  }: handleCalcMacrosProps) => {
    dispatch(addCalorie(calories));
    dispatch(addProtein(proteins));
    dispatch(addFat(fat));
    dispatch(addCarbonhydrate(carbs));
  };

  const handleCombinedFunction = (foodData: FoodDataProps) => {
    addMealToDailyTableAndCalcMacros({
      name: foodData.name as string,
      id: uuidv4(),
      calories: foodData.calories,
      carbs: foodData.carbs,
      protein: foodData.protein,
      fat: foodData.fat,
      type: selectedRow,
    });
    handleCalcMacros({
      calories: foodData.calories,
      proteins: foodData.protein,
      carbs: foodData.carbs,
      fat: foodData.fat,
    });
  };

  return (
    <TableContainerStyled component={Paper}>
      <TableStyled aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Dessert</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? tableData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : tableData
          ).map((foodData) => (
            <TableRow key={foodData.id}>
              <TableCell sx={{ cursor: "pointer", width: 50 }}>
                <ButtonStyled onClick={() => handleCombinedFunction(foodData)}>
                  <AddIcon />
                </ButtonStyled>
              </TableCell>
              <TableColumnName component="th" scope="row">
                {foodData.name}
              </TableColumnName>
              <TableCell style={{ width: 160 }} align="right">
                {foodData.calories}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {foodData.fat}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {foodData.carbs}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {foodData.protein}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 64.52 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={tableData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </TableStyled>
    </TableContainerStyled>
  );
}
