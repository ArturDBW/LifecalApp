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
  max-width: 500px;
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
            backgroundColorStyled="#29e652"
            widthStyled={calories}
            macroType="Calories"
            isGrammage={false}
          />
          <ProgressBar
            backgroundColorStyled="#e69429"
            widthStyled={50}
            macroType="Carbs"
            isGrammage={false}
          />
          <ProgressBar
            backgroundColorStyled="#dd0aaf"
            widthStyled={30}
            macroType="Fat"
            isGrammage={false}
          />
          <ProgressBar
            backgroundColorStyled="#3f20f1"
            widthStyled={20}
            macroType="Whey"
            isGrammage={false}
          />
          <ButtonContainer>
            <Link to="/home">
              <ButtonStyled>Testowy</ButtonStyled>
            </Link>
          </ButtonContainer>
        </BoxStyled>
      </Modal>
    </div>
  );
};
