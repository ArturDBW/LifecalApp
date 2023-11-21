type FourthBoxProps = {
  changePage: number;
};

import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
export const FourthBox = ({ changePage }: FourthBoxProps) => {
  const [age, setAge] = useState<number | undefined>();
  const [weight, setWeight] = useState<number | undefined>();
  const [height, setHeight] = useState<number | undefined>();

  return (
    <Box
      sx={{
        padding: "20px",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transform: `translateX(${300 - changePage}%)`,
        transition: "transform 0.2s ease",
        position: "absolute",
        top: "0",
        left: "0",
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            marginBottom: "40px",
            fontWeight: "bold",
          }}
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
        />
      </Box>
      <Box>
        <Typography variant="body2" align="center">
          We use this information to calculate and provide you with daily
          personalized recommendations.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            alignItems: "start",
          }}
        >
          <Button variant="contained" size="large" fullWidth>
            NEXT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
