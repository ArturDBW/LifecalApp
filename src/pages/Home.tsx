import styled from "styled-components";
import { DailyTable } from "../components/DailyTable";

const Container = styled.div`
  padding: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Home = () => {
  return (
    <Container>
      <DailyTable />
    </Container>
  );
  1;
};
