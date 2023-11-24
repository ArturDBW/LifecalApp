import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { addItem } from "../slice/userSlice";
import { useDispatch } from "react-redux";

type UserBodyProps = {
  changePage: number;
  target: string | null;
  gender: string | null;
};

const ContainerBox = styled(Box)`
  padding: 20px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease;
  position: absolute;
  top: 0;
  left: 0;
`;

const HeaderStyled = styled(Typography).attrs({
  variant: "h5",
  textAlign: "center",
  fontWeight: "bold",
})`
  margin-bottom: "28px";
`;

type CaloriesForm = {
  age: number | null;
  weight: number | null;
  height: number | null;
};

export const UserBody = ({ changePage, target, gender }: UserBodyProps) => {
  const [form, setForm] = useState<CaloriesForm>({
    age: null,
    weight: null,
    height: null,
  });

  const { age, weight, height } = form;

  const calculateCalories = () => {
    if (age === null || height === null || weight === null) {
      throw new Error("Musisz ustawić wszystkie wartości");
    }
    const baseCalories = Math.trunc(
      (10 * weight + 6.25 * height - 5 * age) * 1.8
    );

    return gender === "male" ? baseCalories + 5 : baseCalories - 126;
  };

  const calories = calculateCalories();

  const calculateCarbohydrates = (calories: number) => {
    return Math.trunc((calories * 0.55) / 4);
  };

  const calculateWhey = (calories: number) => {
    return Math.trunc((calories * 0.2) / 4);
  };

  const calculateFat = (calories: number) => {
    return Math.trunc((calories * 0.25) / 9);
  };

  const dispatch = useDispatch();

  const handleAddInformation = () => {
    const information = {
      userAge: form.age,
      userWeight: form.weight,
      userHeight: form.height,
      userTarget: target,
      userGender: gender,
      userCaloriesNeeds: calories,
      userCarbohydratesNeeds: calculateCarbohydrates(calories),
      userWheyNeeds: calculateWhey(calories),
      userFatNeeds: calculateFat(calories),
    };
    dispatch(addItem(information));
  };

  return (
    <ContainerBox
      sx={{
        transform: `translateX(${300 - changePage}%)`,
      }}
    >
      <Box>
        <HeaderStyled>
          We need information about your age, weight and height.
        </HeaderStyled>
        <TextField
          id="outlined-basic"
          label="Your age"
          variant="outlined"
          fullWidth
          type="number"
          value={age !== null ? age.toString() : ""}
          onChange={(e) => {
            const newValue = parseInt(e.target.value, 10);
            setForm((previousValue) => ({
              ...previousValue,
              age: isNaN(newValue) ? null : newValue,
            }));
          }}
          sx={{ marginBottom: "20px" }}
          error={age !== null ? age < 12 || age > 99 : false}
          helperText={
            age !== null && (age < 12 || age > 99) ? "Invalid age." : ""
          }
        />
        <TextField
          id="outlined-basic"
          label="Your weight (kg)"
          variant="outlined"
          fullWidth
          type="number"
          value={weight !== null ? weight.toString() : ""}
          onChange={(e) => {
            const newValue = parseInt(e.target.value, 10);
            setForm((previousValue) => ({
              ...previousValue,
              weight: isNaN(newValue) ? null : newValue,
            }));
          }}
          sx={{ marginBottom: "20px" }}
          error={weight !== null ? weight < 35 || weight > 160 : false}
          helperText={
            weight !== null && (weight < 35 || weight > 160)
              ? "Invalid weight."
              : ""
          }
        />
        <TextField
          id="outlined-basic"
          label="Your height (cm)"
          variant="outlined"
          fullWidth
          value={height !== null ? height.toString() : ""}
          onChange={(e) => {
            const newValue = parseInt(e.target.value, 10);
            setForm((previousValue) => ({
              ...previousValue,
              height: isNaN(newValue) ? null : newValue,
            }));
          }}
          type="number"
          error={height !== null ? height < 120 || height > 240 : false}
          helperText={
            height !== null && (height < 120 || height > 240)
              ? "Invalid height."
              : ""
          }
        />
      </Box>
      <Box>
        <Typography variant="body2" align="center" marginBottom="28px">
          We use this information to calculate and provide you with daily
          personalized recommendations.
        </Typography>

        <Button
          onClick={handleAddInformation}
          variant="contained"
          size="large"
          fullWidth
          disabled={
            age === null ||
            weight === null ||
            height === null ||
            age < 12 ||
            age > 99 ||
            weight < 35 ||
            weight > 160 ||
            height < 120 ||
            height > 240
          }
        >
          NEXT
        </Button>
      </Box>
    </ContainerBox>
  );
};
