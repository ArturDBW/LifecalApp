import { Box, Button } from "@mui/material";
import { useState } from "react";
import { addItem } from "../slice/userSlice";
import { useDispatch } from "react-redux";
import {
  ContainerStyled,
  HeaderStyled,
  TextFieldStyled,
  TypographyStyled,
} from "../styles/UserBodyStyles";
import { Link } from "react-router-dom";

type UserBodyProps = {
  changePage: number;
  target: string | null;
  gender: string | null;
};

type DataFormTypes = {
  age: number | null;
  weight: number | null;
  height: number | null;
};

export const UserBody = ({ changePage, target, gender }: UserBodyProps) => {
  const [form, setForm] = useState<DataFormTypes>({
    age: null,
    weight: null,
    height: null,
  });

  const { age, weight, height } = form;

  const calculateCalories = (
    age: number | null = 0,
    weight: number | null = 0,
    height: number | null = 0
  ) => {
    if (age === null || height === null || weight === null) {
      throw new Error("Uzupełnij wszystkie wartości");
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
      userAge: age,
      userWeight: weight,
      userHeight: height,
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
    <ContainerStyled changePage={changePage}>
      <Box>
        <HeaderStyled>
          We need information about your age, weight and height.
        </HeaderStyled>
        <TextFieldStyled
          id="outlined-basic"
          label="Your age"
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
        <TextFieldStyled
          id="outlined-basic"
          label="Your weight (kg)"
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
        <TextFieldStyled
          id="outlined-basic"
          label="Your height (cm)"
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
        <TypographyStyled>
          We use this information to calculate and provide you with daily
          personalized recommendations.
        </TypographyStyled>

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
        <Link to="/home">testowy link do home</Link>
      </Box>
    </ContainerStyled>
  );
};
