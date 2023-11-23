import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addItem, selectUser } from "../slice/userSlice";

type UserTargetProps = {
  changePage: number;
  setChangePage: React.Dispatch<React.SetStateAction<number>>;
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

export const UserTarget = ({ changePage, setChangePage }: UserTargetProps) => {
  const [view, setView] = useState<string | null>(null);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: string) => {
    setView(newValue);
  };

  const dispatch = useDispatch();

  const handleAddInformation = () => {
    const information = {
      userTarget: view,
    };
    dispatch(addItem(information));
    setChangePage(changePage + 100);
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
          value={view}
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
          onClick={handleAddInformation}
          disabled={true && view === null}
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
