import { useState } from "react";

type ThirdBoxProps = {
  changePage: number;
};

import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
export const ThirdBox = ({ changePage }: ThirdBoxProps) => {
  const [view, setView] = useState<string>("");

  const handleChange = (_: React.ChangeEvent<{}>, newValue: string) => {
    setView(newValue);
  };

  return (
    <Box
      sx={{
        padding: "20px",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transform: `translateX(${200 - changePage}%)`,
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
          What sex should we use to calculate your recommendations?
        </Typography>
        <ToggleButtonGroup
          orientation="vertical"
          sx={{ width: "100%" }}
          value={view}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="list" aria-label="list">
            Female
          </ToggleButton>
          <ToggleButton value="module" aria-label="module">
            Male
          </ToggleButton>
        </ToggleButtonGroup>
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
          <Button
            disabled={true && view === ""}
            variant="contained"
            size="large"
            fullWidth
          >
            NEXT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
