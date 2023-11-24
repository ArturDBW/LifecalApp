import { Box, Paper } from "@mui/material";
import { StarterInfo } from "../components/StarterInfo";
import { UserTarget } from "../components/UserTarget";
import { UserGender } from "../components/UserGender";
import { UserBody } from "../components/OLDUserBody";
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
  position: absolute;
  top: 0;
`;

const PaperStyled = styled(Paper)`
  min-height: 60vh;
  width: 360px;
  background-color: transparent;
  overflow: hidden;
  position: relative;
`;

type ReturnArrowProps = {
  changePage: number;
};

const ReturnArrow = styled(ArrowBackIcon).withConfig({
  shouldForwardProp: (prop) => !["changePage"].includes(prop),
})<ReturnArrowProps>`
  position: absolute;
  top: 4px;
  left: 4px;
  cursor: pointer;
  z-index: 10;
`;

export const GetBasicInformation = () => {
  const [changePage, setChangePage] = useState(0);
  const [target, setTarget] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);

  return (
    <ImageContainer>
      <PaperStyled elevation={8}>
        {changePage !== 0 && (
          <ReturnArrow
            changePage={changePage}
            onClick={() => setChangePage(changePage - 100)}
          />
        )}
        <StarterInfo changePage={changePage} setChangePage={setChangePage} />
        <UserTarget
          changePage={changePage}
          setChangePage={setChangePage}
          target={target}
          setTarget={setTarget}
        />
        <UserGender
          changePage={changePage}
          setChangePage={setChangePage}
          gender={gender}
          setGender={setGender}
        />
        <UserBody changePage={changePage} target={target} gender={gender} />
      </PaperStyled>
    </ImageContainer>
  );
};
