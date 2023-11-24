import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { addItem } from "../slice/userSlice";
import { useDispatch } from "react-redux";
import {
  ContainerStyled,
  HeaderStyled,
  TextFieldStyled,
  TypographyStyled,
} from "../styles/UserBodyStyles";
import { SummaryModal } from "./SummaryModal";

type UserBodyProps = {
  changePage: number;
  target: string | null;
  gender: string | null;
};

type DataFormTypes = {
  age: number | null;
  weight: number | null;
  height: number | null;
  isError: boolean;
};

type CalculateCaloriesTypes = {
  age: number;
  weight: number;
  height: number;
  gender: UserBodyProps["gender"];
};

type DataFromTypesValidation = Omit<DataFormTypes, "isError">;

const valuesIsOkay = ({ age, height, weight }: DataFromTypesValidation) => {
  const isAnyOfTheValuesNull =
    age === null || height === null || weight === null;
  if (isAnyOfTheValuesNull) {
    return false;
  }
  const isAnyOfTheValuesOutOfRange =
    age < 12 ||
    age > 99 ||
    height < 120 ||
    height > 240 ||
    weight < 30 ||
    weight > 160;

  if (isAnyOfTheValuesOutOfRange) {
    return false;
  }
  return true;
};

const calculateCalories = ({
  age,
  weight,
  height,
  gender,
}: CalculateCaloriesTypes) => {
  const baseCalories = Math.trunc(
    (10 * weight + 6.25 * height - 5 * age) * 1.8
  );

  return gender === "male" ? baseCalories + 5 : baseCalories - 126;
};

const calculateCarbohydrates = (calories: number) => {
  return Math.trunc((calories * 0.55) / 4);
};

const calculateWhey = (calories: number) => {
  return Math.trunc((calories * 0.2) / 4);
};

const calculateFat = (calories: number) => {
  return Math.trunc((calories * 0.25) / 9);
};

export const UserBody = ({ changePage, target, gender }: UserBodyProps) => {
  const [form, setForm] = useState<DataFormTypes>({
    age: null,
    weight: null,
    height: null,
    isError: false,
  });

  const { age, weight, height } = form;

  const dispatch = useDispatch();

  const handleAddInformation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formValidation = valuesIsOkay({ age, height, weight });

    if (formValidation === false) {
      setForm((previousValues) => ({ ...previousValues, isError: true }));
      return;
    }

    const calories = calculateCalories({
      age,
      height,
      weight,
      gender,
    } as CalculateCaloriesTypes);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setForm((previousValue) => ({
      ...previousValue,
      [e.target.name]: isNaN(newValue) ? null : newValue,
      isError: false,
    }));
  };

  return (
    <ContainerStyled changePage={changePage}>
      <form onSubmit={handleAddInformation}>
        <Box>
          <HeaderStyled>
            We need information about your age, weight and height.
          </HeaderStyled>

          <TextFieldStyled
            name="age"
            label="Your age"
            type="number"
            value={age !== null ? age.toString() : ""}
            onChange={handleInputChange}
            sx={{ marginBottom: "20px" }}
            error={form.isError && (age === null || age < 12 || age > 99)}
            helperText={
              form.isError && (age === null || age < 12 || age > 99)
                ? "Invalid age."
                : ""
            }
          />
          <TextFieldStyled
            name="weight"
            label="Your weight (kg)"
            type="number"
            value={weight !== null ? weight.toString() : ""}
            onChange={handleInputChange}
            sx={{ marginBottom: "20px" }}
            error={
              form.isError && (weight === null || weight < 35 || weight > 160)
            }
            helperText={
              form.isError && (weight === null || weight < 35 || weight > 160)
                ? "Invalid weight."
                : ""
            }
          />
          <TextFieldStyled
            name="height"
            label="Your height (cm)"
            value={height !== null ? height.toString() : ""}
            onChange={handleInputChange}
            type="number"
            error={
              form.isError && (height === null || height < 120 || height > 240)
            }
            helperText={
              form.isError && (height === null || height < 120 || height > 240)
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
            // onClick={handleAddInformation}
            variant="contained"
            size="large"
            fullWidth
            type="submit"
          >
            NEXT
          </Button>
        </Box>
      </form>
      <SummaryModal />
    </ContainerStyled>
  );
};
