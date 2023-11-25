import { Button, Modal, Box, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProgressBar } from "../elements/ProgressBar";

const BoxStyled = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
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

export const SummaryModal = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
            widthStyled={3221}
            macroType="Calories"
          />
          <ProgressBar
            backgroundColorStyled="#e69429"
            widthStyled={50}
            macroType="Carbs"
          />
          <ProgressBar
            backgroundColorStyled="#dd0aaf"
            widthStyled={30}
            macroType="Fat"
          />
          <ProgressBar
            backgroundColorStyled="#3f20f1"
            widthStyled={20}
            macroType="Whey"
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
