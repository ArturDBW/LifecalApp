import styled from "styled-components";

const ProgressBarOutside = styled.div`
  width: 100%;
  height: 6px;
  background-color: #dfdcdc;
  border-radius: 30px;
  margin-top: 4px;
`;
const ProgressBarInside = styled.div`
  width: 40%;
  height: 100%;
  background-color: orange;
`;
const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProgressBar = () => {
  return (
    <>
      <DataContainer>
        <span>Whey</span>
        <span>40%</span>
      </DataContainer>
      <ProgressBarOutside>
        <ProgressBarInside></ProgressBarInside>
      </ProgressBarOutside>
    </>
  );
};
