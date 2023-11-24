import { Box, Button, ToggleButton } from "@mui/material";
import {
  ContainerStyled,
  ToggleButtonGroupStyled,
  TypographyStyled,
} from "../styles/UserGenderStyles";
import { HeaderStyled } from "../styles/UserGenderStyles";

type UserGenderProps = {
  changePage: number;
  setChangePage: React.Dispatch<React.SetStateAction<number>>;
  gender: string | null;
  setGender: React.Dispatch<React.SetStateAction<string | null>>;
};

export const UserGender = ({
  changePage,
  setChangePage,
  gender,
  setGender,
}: UserGenderProps) => {
  const handleChange = (_: React.ChangeEvent<{}>, newValue: string) => {
    setGender(newValue);
  };

  return (
    <ContainerStyled changePage={changePage}>
      <Box>
        <HeaderStyled>
          What sex should we use to calculate your recommendations?
        </HeaderStyled>
        <ToggleButtonGroupStyled value={gender} onChange={handleChange}>
          <ToggleButton value="female" aria-label="female">
            Female
          </ToggleButton>
          <ToggleButton value="male" aria-label="male">
            Male
          </ToggleButton>
        </ToggleButtonGroupStyled>
      </Box>
      <Box>
        <TypographyStyled>
          We use this information to calculate and provide you with daily
          personalized recommendations.
        </TypographyStyled>

        <Button
          onClick={() => {
            setChangePage(changePage + 100);
          }}
          disabled={gender === null}
          variant="contained"
          size="large"
          fullWidth
        >
          NEXT
        </Button>
      </Box>
    </ContainerStyled>
  );
};
