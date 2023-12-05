import { Modal } from "@mui/material";
import { Link } from "react-router-dom";
import { ProgressBar } from "../elements/ProgressBar";
import { useSelector } from "react-redux";
import { selectUser } from "../slice/userSlice";
import {
  BoxStyled,
  ButtonContainer,
  ButtonStyled,
  HeaderStyled,
  ShortDescriptionStyled,
} from "../styles/SummaryModalStyles";

type SummaryModalProps = {
  openModal: boolean;
};

export const SummaryModal = ({ openModal }: SummaryModalProps) => {
  const user = useSelector(selectUser);
  const calories: number = user[0]?.userCaloriesNeeds;

  return (
    <div>
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
