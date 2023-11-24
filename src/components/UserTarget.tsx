import { Box, Button, ToggleButton } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../slice/userSlice";
import {
  ContainerStyled,
  HeaderStyled,
  ToggleButtonGroupStyled,
  TypographyStyled,
} from "../styles/UserTargetStyles";

type UserTargetProps = {
  changePage: number;
  setChangePage: React.Dispatch<React.SetStateAction<number>>;
  target: string | null;
  setTarget: React.Dispatch<React.SetStateAction<string | null>>;
};

export const UserTarget = ({
  changePage,
  setChangePage,
  target,
  setTarget,
}: UserTargetProps) => {
  const handleChange = (_: React.ChangeEvent<{}>, newValue: string) => {
    setTarget(newValue);
  };

  const user = useSelector(selectUser);
  console.log(user);

  return (
    <ContainerStyled changePage={changePage}>
      <Box>
        <HeaderStyled>What goal do you have in mind?</HeaderStyled>
        <ToggleButtonGroupStyled value={target} onChange={handleChange}>
          <ToggleButton value="loseWeight" aria-label="loseWeight">
            Lose Weight
          </ToggleButton>
          <ToggleButton value="maintainWeight" aria-label="maintainWeight">
            Maintain weight
          </ToggleButton>
          <ToggleButton value="gainWeight" aria-label="gainWeight">
            Gain weight
          </ToggleButton>
        </ToggleButtonGroupStyled>
      </Box>
      <Box>
        <TypographyStyled>
          Your sex impacts your metabolic rate, so we use this information to
          calculate your daily recommendations.
        </TypographyStyled>
        <Button
          onClick={() => {
            setChangePage(changePage + 100);
          }}
          disabled={target === null}
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
