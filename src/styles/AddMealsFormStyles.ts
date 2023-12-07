import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const FormContainerStyled = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 8px;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TextFieldNameStyled = styled(TextField)`
  grid-column: 1/-1;
`;

export const ButtonStyled = styled(Button)`
  grid-column: 1/-1;
`;

type SuccesInformationStyledProps = {
  successInfoVisible: boolean;
};

export const SuccessInformationStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["successInfoVisible"].includes(prop),
})<SuccesInformationStyledProps>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${(props) => (props.successInfoVisible ? "20%" : "-20%")};
  transform: translate(-50%, -50%);
  padding: 24px;
  background-color: #43a047;
  font-size: 16px;
  color: #fff;
  left: 50%;
  border-radius: 10px;
  min-width: 280px;
  transition: top 0.3s ease-in-out;
`;

export const SuccessInformationSpanStyled = styled.span`
  margin-left: 16px;
`;
