import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { ContainerBox } from "../styles/GetBasicInformationStyles";

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
          value={gender}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="female" aria-label="female">
            Female
          </ToggleButton>
          <ToggleButton value="male" aria-label="male">
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
          onClick={() => {
            setChangePage(changePage + 100);
          }}
          disabled={true && gender === null}
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
