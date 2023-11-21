import { useState } from "react";
import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import styled from "styled-components";

type UserTargetProps = {
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

export const UserTarget = ({ changePage }: UserTargetProps) => {
  const [view, setView] = useState<string>("");

  const handleChange = (_: React.ChangeEvent<{}>, newValue: string) => {
    setView(newValue);
  };

  return (
    <ContainerBox
      sx={{
        transform: `translateX(${100 - changePage}%)`,
      }}
    >
      <Box>
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          marginBottom="28px"
        >
          What goal do you have in mind?
        </Typography>
        <ToggleButtonGroup
          orientation="vertical"
          fullWidth
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
        <Typography variant="body2" align="center" marginBottom="28px">
          Your sex impacts your metabolic rate, so we use this information to
          calculate your daily recommendations.
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
