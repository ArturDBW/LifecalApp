import { TextField } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  ButtonStyled,
  FormContainerStyled,
  TextFieldNameStyled,
} from "../styles/AddMealsFormStyles";

interface Product {
  name: string | null;
  id: number | string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

type AddMealsFormProps = {
  tableData: Product[];
  setTableData: React.Dispatch<React.SetStateAction<Product[]>>;
};

type DataFormTypes = {
  nameValue: string | null;
  caloriesValue: number | null;
  fatValue: number | null;
  carbsValue: number | null;
  proteinValue: number | null;
  isError: boolean;
};

type DataFromTypesValidation = Omit<DataFormTypes, "isError">;

const valueIsOkay = ({
  nameValue,
  caloriesValue,
  fatValue,
  carbsValue,
  proteinValue,
}: DataFromTypesValidation) => {
  const isAnyOfTheValuesNull =
    nameValue === null ||
    caloriesValue === null ||
    fatValue === null ||
    carbsValue === null ||
    proteinValue === null;
  if (isAnyOfTheValuesNull) {
    return false;
  }
  const isAnyOfTheValuesOutOfRange =
    caloriesValue < 1 || fatValue < 0 || carbsValue < 0 || proteinValue < 0;

  if (isAnyOfTheValuesOutOfRange) {
    return false;
  }
  return true;
};

export const AddMealsForm = ({
  tableData,
  setTableData,
}: AddMealsFormProps) => {
  const initialState: DataFormTypes = {
    nameValue: null,
    caloriesValue: null,
    fatValue: null,
    carbsValue: null,
    proteinValue: null,
    isError: false,
  };

  const [form, setForm] = useState<DataFormTypes>(initialState);

  const {
    nameValue,
    caloriesValue,
    fatValue,
    carbsValue,
    proteinValue,
    isError,
  } = form;

  const handleAddProduct = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formValidation = valueIsOkay({
      nameValue,
      caloriesValue,
      fatValue,
      carbsValue,
      proteinValue,
    });

    if (formValidation === false) {
      setForm((previousValues) => ({ ...previousValues, isError: true }));
      return;
    }

    const newProduct = {
      name: nameValue,
      id: uuidv4(),
      calories: parseFloat(String(caloriesValue as number)),
      fat: parseFloat(String(fatValue as number)),
      carbs: parseFloat(String(carbsValue as number)),
      protein: parseFloat(String(proteinValue as number)),
    };

    const updatedTableData = [...tableData, newProduct];

    setTableData(updatedTableData);

    setForm(initialState);
  };

  const handleInputChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setForm((previousValue) => ({
      ...previousValue,
      [e.target.name]: isNaN(newValue) ? null : newValue,
      isError: false,
    }));
  };

  const handleInputChangeString = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setForm((previousValue) => ({
      ...previousValue,
      [e.target.name]: newValue === "" ? null : newValue,
      isError: false,
    }));
  };

  return (
    <FormContainerStyled onSubmit={handleAddProduct}>
      <TextFieldNameStyled
        value={nameValue !== null ? nameValue.toString() : ""}
        name="nameValue"
        onChange={handleInputChangeString}
        id="outlined-basic"
        label="Meal"
        variant="outlined"
        fullWidth
        error={isError && nameValue === null}
        helperText={isError && nameValue === null ? "Invalid name." : ""}
        sx={{
          "& .MuiFormHelperText-root": {
            position: "absolute",
            top: 0,
            left: 0,
          },
        }}
      />
      <TextField
        value={caloriesValue !== null ? caloriesValue.toString() : ""}
        name="caloriesValue"
        onChange={handleInputChangeNumber}
        type="number"
        id="outlined-basic"
        label="Calories"
        variant="outlined"
        error={isError && (caloriesValue === null || caloriesValue < 1)}
        helperText={
          isError && (caloriesValue === null || caloriesValue < 1)
            ? "Invalid value."
            : ""
        }
        sx={{
          "& .MuiFormHelperText-root": {
            position: "absolute",
            top: 0,
            left: 0,
          },
        }}
        fullWidth
      />

      <TextField
        value={fatValue !== null ? fatValue.toString() : ""}
        onChange={handleInputChangeNumber}
        name="fatValue"
        type="number"
        id="outlined-basic"
        label="Fat (g)"
        variant="outlined"
        error={isError && (fatValue === null || fatValue < 0)}
        helperText={
          isError && (fatValue === null || fatValue < 0) ? "Invalid value." : ""
        }
        sx={{
          "& .MuiFormHelperText-root": {
            position: "absolute",
            top: 0,
            left: 0,
          },
        }}
        fullWidth
      />
      <TextField
        value={carbsValue !== null ? carbsValue.toString() : ""}
        onChange={handleInputChangeNumber}
        name="carbsValue"
        type="number"
        id="outlined-basic"
        label="Carbs (g)"
        variant="outlined"
        error={isError && (carbsValue === null || carbsValue < 0)}
        helperText={
          isError && (carbsValue === null || carbsValue < 0)
            ? "Invalid value."
            : ""
        }
        sx={{
          "& .MuiFormHelperText-root": {
            position: "absolute",
            top: 0,
            left: 0,
          },
        }}
        fullWidth
      />

      <TextField
        value={proteinValue !== null ? proteinValue.toString() : ""}
        name="proteinValue"
        onChange={handleInputChangeNumber}
        type="number"
        id="outlined-basic"
        label="Protein (g)"
        variant="outlined"
        error={isError && (proteinValue === null || proteinValue < 0)}
        helperText={
          isError && (proteinValue === null || proteinValue < 0)
            ? "Invalid value."
            : ""
        }
        fullWidth
        sx={{
          "& .MuiFormHelperText-root": {
            position: "absolute",
            top: 0,
            left: 0,
          },
        }}
      />

      <ButtonStyled variant="contained" type="submit" fullWidth size="large">
        Add product
      </ButtonStyled>
    </FormContainerStyled>
  );
};
