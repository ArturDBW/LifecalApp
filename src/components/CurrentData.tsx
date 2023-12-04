import styled from "styled-components";
import { ProgressBar } from "../elements/ProgressBar";

const ContainerStyled = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-column: 1/-1;
  }
`;

const BasicInfoBoxStyled = styled.div``;
const DataStyled = styled.div`
  font-size: 20px;
`;
const CaloriesStyled = styled.div`
  margin-top: 12px;
`;
const CaloriesInfoStyled = styled.span`
  font-size: 58px;
`;
const SecondCaloriesInfoStyled = styled.span`
  margin-top: 16px;
  font-size: 28px;
`;
const ProgresBarBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;

  @media (max-width: 768px) {
    gap: 8px 0;
  }
`;

export const CurrentData = () => {
  return (
    <ContainerStyled>
      <BasicInfoBoxStyled>
        <DataStyled>Monday, 24th January</DataStyled>
        <CaloriesStyled>
          <CaloriesInfoStyled>
            1654<SecondCaloriesInfoStyled>kcal</SecondCaloriesInfoStyled>
          </CaloriesInfoStyled>
        </CaloriesStyled>
      </BasicInfoBoxStyled>
      <ProgresBarBoxStyled>
        <ProgressBar
          backgroundColorStyled="linear-gradient(to right, #ff7e5f, #feb47b)"
          widthStyled={15}
          macroType="Calories"
          isGrammage={true}
        />
        <ProgressBar
          backgroundColorStyled="linear-gradient(to right, #09f7ed, #30bdba)"
          widthStyled={45}
          macroType="Fat"
          isGrammage={true}
        />
        <ProgressBar
          backgroundColorStyled="linear-gradient(to right, #ac72b1, #4d1749)"
          widthStyled={85}
          macroType="Carbs"
          isGrammage={true}
        />
        <ProgressBar
          backgroundColorStyled="linear-gradient(to right, #c747c7, #f911d8)"
          widthStyled={30}
          macroType="Protein"
          isGrammage={true}
        />
      </ProgresBarBoxStyled>
    </ContainerStyled>
  );
};
