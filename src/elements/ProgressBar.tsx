import styled from "styled-components";

type ProgressBarInsideProps = {
  backgroundColorStyled: string;
  widthStyled: number;
};

type ProgressBarProps = {
  backgroundColorStyled: string;
  widthStyled: number;
  macroType: string;
  isGrammage: boolean;
  currentMacro?: number;
  targetMacro?: number;
};

const ProgressBarOutside = styled.div`
  width: 100%;
  height: 6px;
  background-color: #eee;
  border-radius: 30px;
  margin-top: 4px;
`;

const ProgressBarInside = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["backgroundColorStyled", "widthStyled"].includes(prop),
})<ProgressBarInsideProps>`
  background: ${({ backgroundColorStyled }) => `${backgroundColorStyled}`};
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
  currentMacro,
  targetMacro,
}: ProgressBarProps) => {
  return (
    <div>
      <DataContainer>
        <SpanContainer>
          <span>{macroType}</span>
          {isGrammage && (
            <GramsInformation>
              {currentMacro} g / {targetMacro} g
            </GramsInformation>
          )}
        </SpanContainer>
        <PercentContainer>
          {widthStyled}
          {macroType === "Calories" && isGrammage === false ? " kcal" : "%"}
        </PercentContainer>
      </DataContainer>
      <ProgressBarOutside>
        <ProgressBarInside
          backgroundColorStyled={backgroundColorStyled}
          widthStyled={widthStyled}
        ></ProgressBarInside>
      </ProgressBarOutside>
    </div>
  );
};
