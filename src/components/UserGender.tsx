import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ContainerBox } from "../styles/GetBasicInformationStyles";
import { useDispatch } from "react-redux";
import { addItem } from "../slice/userSlice";

type UserGenderProps = {
  changePage: number;
  setChangePage: React.Dispatch<React.SetStateAction<number>>;
};

export const UserGender = ({ changePage, setChangePage }: UserGenderProps) => {
  const [view, setView] = useState<string>("");

  const handleChange = (_: React.ChangeEvent<{}>, newValue: string) => {
    setView(newValue);
  };

  const dispatch = useDispatch();

  const handleAddInformation = () => {
    setChangePage(changePage + 100);

    const information = {
      userGender: view,
    };
    dispatch(addItem(information));
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
          onClick={handleAddInformation}
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
