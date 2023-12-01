import styled from "styled-components";
import { ProgressBar } from "../elements/ProgressBar";

const FooterContainerStyled = styled.footer`
  background-color: #ffffff;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  position: sticky;
  top: 100%;
`;

export const Footer = () => {
  return (
    <FooterContainerStyled>
      <ProgressBar
        macroType="Calories
        "
        backgroundColorStyled="#db2626"
        widthStyled={30}
      />
      <ProgressBar
        macroType="Fat"
        backgroundColorStyled="#26db44"
        widthStyled={50}
      />
      <ProgressBar
        macroType="Carbs"
        backgroundColorStyled="#dbcf26"
        widthStyled={20}
      />
      <ProgressBar
        macroType="Proteins"
        backgroundColorStyled="#db26c3"
        widthStyled={50}
      />
    </FooterContainerStyled>
  );
};
