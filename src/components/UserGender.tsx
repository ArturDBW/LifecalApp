import { useState } from "react";
import { ContainerBox } from "../styles/GetBasicInformationStyles";
import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

type UserGenderProps = {
  changePage: number;
};

export const UserGender = ({ changePage }: UserGenderProps) => {
  const [view, setView] = useState<string>("");

  const handleChange = (_: React.ChangeEvent<{}>, newValue: string) => {
    setView(newValue);
  };

  return (
    <ContainerBox
      sx={{
        transform: `translateX(${200 - changePage}%)`,
      }}
    >
      <Box>
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          marginBottom="28px"
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
        <Typography variant="body2" align="center" marginBottom="28px">
          We use this information to calculate and provide you with daily
          personalized recommendations.
        </Typography>

        <Button
          disabled={true && view === ""}
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
