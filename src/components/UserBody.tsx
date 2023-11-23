import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { addItem } from "../slice/userSlice";
import { useDispatch } from "react-redux";

type UserBodyProps = {
  changePage: number;
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
export const UserBody = ({ changePage }: UserBodyProps) => {
  const [age, setAge] = useState<number | undefined>();
  const [weight, setWeight] = useState<number | undefined>();
  const [height, setHeight] = useState<number | undefined>();

  const dispatch = useDispatch();

  const handleAddInformation = () => {
    const information = {
      userAge: age,
      userWeight: weight,
      userHeight: height,
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
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          marginBottom="28px"
        >
          We need information about your age, weight and height.
        </Typography>
        <TextField
          id="outlined-basic"
          label="Your age"
          variant="outlined"
          fullWidth
          type="number"
          value={age !== undefined ? age.toString() : ""}
          onChange={(e) => {
            const newValue = parseInt(e.target.value, 10);
            setAge(isNaN(newValue) ? undefined : newValue);
          }}
          sx={{ marginBottom: "20px" }}
          error={age !== undefined ? age < 12 || age > 99 : false}
          helperText={
            age !== undefined && (age < 12 || age > 99) ? "Invalid age." : ""
          }
        />
        <TextField
          id="outlined-basic"
          label="Your weight (kg)"
          variant="outlined"
          fullWidth
          type="number"
          value={weight !== undefined ? weight.toString() : ""}
          onChange={(e) => {
            const newValue = parseInt(e.target.value, 10);
            setWeight(isNaN(newValue) ? undefined : newValue);
          }}
          sx={{ marginBottom: "20px" }}
          error={weight !== undefined ? weight < 35 || weight > 160 : false}
          helperText={
            weight !== undefined && (weight < 35 || weight > 160)
              ? "Invalid weight."
              : ""
          }
        />
        <TextField
          id="outlined-basic"
          label="Your height (cm)"
          variant="outlined"
          fullWidth
          value={height !== undefined ? height.toString() : ""}
          onChange={(e) => {
            const newValue = parseInt(e.target.value, 10);
            setHeight(isNaN(newValue) ? undefined : newValue);
          }}
          type="number"
          error={height !== undefined ? height < 120 || height > 240 : false}
          helperText={
            height !== undefined && (height < 120 || height > 240)
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
          disabled={
            age === undefined ||
            weight === undefined ||
            height === undefined ||
            age < 12 ||
            age > 99 ||
            weight < 35 ||
            weight > 160 ||
            height < 120 ||
            height > 240
          }
          variant="contained"
          size="large"
          fullWidth
        >
          NEXT
        </Button>
      </Box>
    </ContainerBox>
  );
};
