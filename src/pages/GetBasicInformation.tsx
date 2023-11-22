import { Box, Button, Paper } from "@mui/material";
import { StarterInfo } from "../components/StarterInfo";
import { UserTarget } from "../components/UserTarget";
import { UserGender } from "../components/UserGender";
import { UserBody } from "../components/UserBody";
import { useState } from "react";
import backgroundImage from "../assets/health.avif";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ImageContainer = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Window = styled(Paper)`
  min-height: 60vh;
  width: 360px;
  background-color: transparent;
  overflow: hidden;
  position: relative;
`;

const ReturnArrow = styled(ArrowBackIcon)`
  position: absolute;
  top: 4px;
  left: 4px;
  cursor: pointer;
  z-index: 10;
`;

export const GetBasicInformation = () => {
  const [changePage, setChangePage] = useState<number>(0);

  return (
    <ImageContainer>
      <Window elevation={8}>
        <ReturnArrow
          onClick={() => setChangePage(changePage - 100)}
          sx={{ display: changePage === 0 ? "none" : "block" }}
        />
        <StarterInfo changePage={changePage} setChangePage={setChangePage} />
        <UserTarget changePage={changePage} setChangePage={setChangePage} />
        <UserGender changePage={changePage} setChangePage={setChangePage} />
        <UserBody changePage={changePage} />
      </Window>
    </ImageContainer>
  );
};
