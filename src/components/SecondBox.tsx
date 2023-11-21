import { useState } from "react";

type SecondBoxProps = {
  changePage: number;
};

import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
export const SecondBox = ({ changePage }: SecondBoxProps) => {
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
        transform: `translateX(${100 - changePage}%)`,
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
          What goal do you have in mind?
        </Typography>
        <ToggleButtonGroup
          orientation="vertical"
          sx={{ width: "100%" }}
          value={view}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="list" aria-label="list">
            Lose Weight
          </ToggleButton>
          <ToggleButton value="module" aria-label="module">
            Maintain weight
          </ToggleButton>
          <ToggleButton value="quilt" aria-label="quilt">
            Gain weight
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" align="center">
          Your sex impacts your metabolic rate, so we use this information to
          calculate your daily recommendations.
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
