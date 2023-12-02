import { Button, TextField } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";

const FormContainerStyled = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  gap: 16px;
`;

const TextFieldNameStyled = styled(TextField)`
  grid-column: 1/-1;
`;

const ButtonStyled = styled(Button)`
  grid-column: 1/-1;
`;

interface Product {
  name: string;
  id: number;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

type AddMealsFormProps = {
  tableData: Product[];
  setTableData: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const AddMealsForm = ({
  tableData,
  setTableData,
}: AddMealsFormProps) => {
  const [nameValue, setNameValue] = useState("");
  const [caloriesValue, setCaloriesValue] = useState("");
  const [fatValue, setFatValue] = useState("");
  const [carbsValue, setCarbsValue] = useState("");
  const [proteinValue, setProteinValue] = useState("");

  const handleAddProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newProduct = {
      name: nameValue,
      id: tableData.length + 1,
      calories: parseFloat(caloriesValue),
      fat: parseFloat(fatValue),
      carbs: parseFloat(carbsValue),
      protein: parseFloat(proteinValue),
    };

    const updatedTableData = [...tableData, newProduct];

    setTableData(updatedTableData);

    setNameValue("");
    setCaloriesValue("");
    setFatValue("");
    setCarbsValue("");
    setProteinValue("");
  };

  return (
    <FormContainerStyled>
      <TextFieldNameStyled
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
        id="outlined-basic"
        label="Meal"
        variant="outlined"
        fullWidth
      />
      <TextField
        value={caloriesValue}
        onChange={(e) => setCaloriesValue(e.target.value)}
        id="outlined-basic"
        label="Calories"
        variant="outlined"
        fullWidth
      />

      <TextField
        value={fatValue}
        onChange={(e) => setFatValue(e.target.value)}
        id="outlined-basic"
        label="Fat (g)"
        variant="outlined"
        fullWidth
      />
      <TextField
        value={carbsValue}
        onChange={(e) => setCarbsValue(e.target.value)}
        id="outlined-basic"
        label="Carbs (g)"
        variant="outlined"
        fullWidth
      />

      <TextField
        value={proteinValue}
        onChange={(e) => setProteinValue(e.target.value)}
        id="outlined-basic"
        label="Protein (g)"
        variant="outlined"
        fullWidth
      />

      <ButtonStyled
        variant="contained"
        type="submit"
        fullWidth
        size="large"
        onClick={handleAddProduct}
      >
        Add product
      </ButtonStyled>
    </FormContainerStyled>
  );
};
