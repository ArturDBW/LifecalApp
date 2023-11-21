import { Box, Button, Paper } from "@mui/material";
import backgroundImage from "../assets/health.avif";
import { StarterInfo } from "../components/StarterInfo";
import { useState } from "react";
import { UserTarget } from "../components/UserTarget";
import { UserGender } from "../components/UserGender";
import { UserBody } from "../components/UserBody";
import styled from "styled-components";

const ImageContainer = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

const Window = styled(Paper)`
  min-height: 60vh;
  width: 360px;
  background-color: transparent;
  overflow: hidden;
  position: relative;
`;

export const GetBasicInformation = () => {
  const [changePage, setChangePage] = useState<number>(0);

  return (
    <ImageContainer>
      <Box>
        <Button onClick={() => setChangePage(changePage + 100)}>+</Button>
        <Button onClick={() => setChangePage(changePage - 100)}>-</Button>
      </Box>
      <Window elevation={8}>
        <StarterInfo changePage={changePage} />
        <UserTarget changePage={changePage} />
        <UserGender changePage={changePage} />
        <UserBody changePage={changePage} />
      </Window>
    </ImageContainer>
  );
};
