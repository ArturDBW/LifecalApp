import styled from "styled-components";

const ProgressBarOutside = styled.div`
  width: 100%;
  height: 6px;
  background-color: #eee;
  border-radius: 30px;
  margin-top: 4px;
`;

type ProgressBarInsideProps = {
  backgroundColorStyled: string;
  widthStyled: number;
};

const ProgressBarInside = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["backgroundColorStyled", "widthStyled"].includes(prop),
})<ProgressBarInsideProps>`
  background-color: ${({ backgroundColorStyled }) =>
    `${backgroundColorStyled}`};
  width: ${({ widthStyled }) =>
    `${widthStyled > 100 ? (widthStyled = 100) : widthStyled}%`};
  height: 100%;
  border-radius: 30px;
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

type ProgressBarProps = {
  backgroundColorStyled: string;
  widthStyled: number;
  macroType: string;
  isGrammage: boolean;
};

const Test = styled.div``;

const SpanContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GramsInformation = styled.span`
  font-size: 14px;
`;

const PercentContainer = styled.span`
  display: flex;
  align-items: end;
`;

export const ProgressBar = ({
  backgroundColorStyled,
  widthStyled,
  macroType,
  isGrammage,
}: ProgressBarProps) => {
  return (
    <Test>
      <DataContainer>
        <SpanContainer>
          <span>{macroType}</span>
          {isGrammage && <GramsInformation>12.6 g / 33 g</GramsInformation>}
        </SpanContainer>
        <PercentContainer>
          {widthStyled}
          {macroType === "Calories" ? " kcal" : "%"}
        </PercentContainer>
      </DataContainer>
      <ProgressBarOutside>
        <ProgressBarInside
          backgroundColorStyled={backgroundColorStyled}
          widthStyled={widthStyled}
        ></ProgressBarInside>
      </ProgressBarOutside>
    </Test>
  );
};
