type FirstBoxProps = {
  changePage: number;
};

import { Box, Button, Typography } from "@mui/material";
export const FirstBox = ({ changePage }: FirstBoxProps) => {
  return (
    <Box
      sx={{
        padding: "20px",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transform: `translateX(${0 - changePage}%)`,
        transition: "transform 0.2s ease",
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            marginBottom: "40px",
            fontWeight: "bold",
          }}
        >
          Lifecal
        </Typography>
        <Typography align="center" variant="body1">
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
        <Typography variant="h4" align="center">
          Simplified.
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
            GET STARTED
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
