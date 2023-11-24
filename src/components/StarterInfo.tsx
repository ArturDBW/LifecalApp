import { Box, Button } from "@mui/material";
import {
  BottomFirtHalfSpanStyled,
  BottomSecondHalfSpanStyled,
  ContainerStyled,
  DescriptionStyled,
  HeaderStyled,
} from "../styles/StarterInfoStyles";

type StarterInfoProps = {
  changePage: number;
  setChangePage: React.Dispatch<React.SetStateAction<number>>;
};

export const StarterInfo = ({
  changePage,
  setChangePage,
}: StarterInfoProps) => {
  return (
    <ContainerStyled changePage={changePage}>
      <Box>
        <HeaderStyled>Lifecal</HeaderStyled>
        <DescriptionStyled>
          Personalized nutrition and healthy eating at your fingertips. More
          than a calorie counter, Lifesum helps you adopt nutritious diets that
          fit your lifestyle and taste. Achieve your weight loss goals while
          building healthy eating habits for life.
        </DescriptionStyled>
      </Box>
      <Box>
        <BottomFirtHalfSpanStyled>Healthy eating.</BottomFirtHalfSpanStyled>
        <BottomSecondHalfSpanStyled>Simplified.</BottomSecondHalfSpanStyled>
        <Button
          onClick={() => setChangePage(changePage + 100)}
          variant="contained"
          size="large"
          fullWidth
        >
          GET STARTED
        </Button>
      </Box>
    </ContainerStyled>
  );
};
