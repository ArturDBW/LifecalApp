import styled from "styled-components";
import { DailyTable } from "../components/DailyTable";
import { CurrentData } from "../components/CurrentData";
import { AddMeals } from "../components/AddMeals";

const Container = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  gap: 0 16px;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: min-content 1fr;
  height: 100%;
`;

export const Home = () => {
  return (
    <Container>
      <CurrentData />
      <DailyTable />
      <AddMeals />
    </Container>
  );
  1;
};
