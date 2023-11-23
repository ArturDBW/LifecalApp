import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUser } from "../slice/userSlice";

type UserTargetProps = {
  changePage: number;
  setChangePage: React.Dispatch<React.SetStateAction<number>>;
  target: string | null;
  setTarget: React.Dispatch<React.SetStateAction<string | null>>;
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
          value={target}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="loseWeight" aria-label="loseWeight">
            Lose Weight
          </ToggleButton>
          <ToggleButton value="maintainWeight" aria-label="maintainWeight">
            Maintain weight
          </ToggleButton>
          <ToggleButton value="gainWeight" aria-label="gainWeight">
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
          onClick={() => {
            setChangePage(changePage + 100);
          }}
          disabled={true && target === null}
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
