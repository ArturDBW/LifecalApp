import { Button, Modal, Box, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProgressBar } from "../elements/ProgressBar";
import { useSelector } from "react-redux";
import { selectUser } from "../slice/userSlice";

const BoxStyled = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 340px;
  max-width: 440px;
  padding: 24px;
  background-color: white;
  border-radius: 10px;
`;

const HeaderStyled = styled(Typography).attrs({
  variant: "h4",
})`
  text-align: center;
`;

const ShortDescriptionStyled = styled(Typography).attrs({
  variant: "h6",
  mt: 4,
  mb: 2,
})`
  text-align: center;
  margin-top: 24px;
`;

const ButtonStyled = styled(Button).attrs({
  size: "large",
  variant: "contained",
  fullWidth: true,
})``;

const ButtonContainer = styled.div`
  margin-top: 24px;
`;

type SummaryModalProps = {
  openModal: boolean;
};

export const SummaryModal = ({ openModal }: SummaryModalProps) => {
  const user = useSelector(selectUser);
  const calories: number = user[0]?.userCaloriesNeeds;

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxStyled>
          <HeaderStyled>Your personalized health plan is ready!</HeaderStyled>
          <ShortDescriptionStyled>
            Daily nutritional recommendations
          </ShortDescriptionStyled>

          <ProgressBar
            backgroundColorStyled="linear-gradient(to right, #ff7e5f, #feb47b)"
            widthStyled={calories}
            macroType="Calories"
            isGrammage={false}
          />
          <ProgressBar
            backgroundColorStyled="linear-gradient(to right, #ac72b1, #4d1749)"
            widthStyled={50}
            macroType="Carbs"
            isGrammage={false}
          />
          <ProgressBar
            backgroundColorStyled="linear-gradient(to right, #09f7ed, #30bdba)"
            widthStyled={30}
            macroType="Fat"
            isGrammage={false}
          />
          <ProgressBar
            backgroundColorStyled="linear-gradient(to right, #c747c7, #f911d8)"
            widthStyled={20}
            macroType="Protein"
            isGrammage={false}
          />
          <ButtonContainer>
            <Link to="/home">
              <ButtonStyled>GET STARTED</ButtonStyled>
            </Link>
          </ButtonContainer>
        </BoxStyled>
      </Modal>
    </div>
  );
};
