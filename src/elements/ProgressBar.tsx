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
};

export const ProgressBar = ({
  backgroundColorStyled,
  widthStyled,
  macroType,
}: ProgressBarProps) => {
  return (
    <>
      <DataContainer>
        <span>{macroType}</span>
        <span>
          {widthStyled}
          {macroType === "Calories" ? " kcal" : "%"}
        </span>
      </DataContainer>
      <ProgressBarOutside>
        <ProgressBarInside
          backgroundColorStyled={backgroundColorStyled}
          widthStyled={widthStyled}
        ></ProgressBarInside>
      </ProgressBarOutside>
    </>
  );
};
