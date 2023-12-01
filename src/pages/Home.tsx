import styled from "styled-components";
import { DailyTable } from "../components/DailyTable";

const Container = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`;

export const Home = () => {
  return (
    <Container>
      <DailyTable />
    </Container>
  );
  1;
};
