import styled from "styled-components";
import DataTable from "../components/DataTable";
import { DailyTable } from "../components/DailyTable";

const Container = styled.div`
  margin-left: 200px;
`;

export const Home = () => {
  return (
    <Container>
      <DataTable />
      <DailyTable />
    </Container>
  );
  1;
};
