import { Button, TextField } from "@mui/material";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import data from "../data.json";

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

export const AddMealsForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [caloriesValue, setCaloriesValue] = useState("");
  const [fatValue, setFatValue] = useState("");
  const [carbsValue, setCarbsValue] = useState("");
  const [proteinValue, setProteinValue] = useState("");

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

      <ButtonStyled variant="contained" type="submit" fullWidth size="large">
        Add product
      </ButtonStyled>
    </FormContainerStyled>
  );
};
