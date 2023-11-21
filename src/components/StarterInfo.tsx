import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";

type StarterInfoProps = {
  changePage: number;
};

const ContainerBox = styled(Box)`
  padding: 20px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease;
`;

export const StarterInfo = ({ changePage }: StarterInfoProps) => {
  return (
    <ContainerBox
      sx={{
        transform: `translateX(${0 - changePage}%)`,
      }}
    >
      <Box>
        <Typography variant="h2" align="center" fontSize="bold">
          Lifecal
        </Typography>
        <Typography align="center" variant="body1" marginTop="28px">
          Personalized nutrition and healthy eating at your fingertips. More
          than a calorie counter, Lifesum helps you adopt nutritious diets that
          fit your lifestyle and taste. Achieve your weight loss goals while
          building healthy eating habits for life.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4" align="center">
          Healthy eating.
        </Typography>
        <Typography variant="h4" align="center" marginBottom="28px">
          Simplified.
        </Typography>

        <Button variant="contained" size="large" fullWidth>
          GET STARTED
        </Button>
      </Box>
    </ContainerBox>
  );
};
