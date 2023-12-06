import styled from "styled-components";
import { DailyTable } from "../components/DailyTable";
import { CurrentData } from "../components/CurrentData";
import { AddMeals } from "../components/AddMeals";
import foodData from "../data.json";
import { useState } from "react";

interface Product {
  name: string | null;
  id: number | string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

const Container = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  gap: 0 18px;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: min-content 1fr;
  height: 100%;

  @media (max-width: 768px) {
    padding: 8px;
    grid-template-columns: 1fr;
  }
`;

export const Home = () => {
  const [tableData, setTableData] = useState<Product[]>(foodData);

  return (
    <Container>
      <CurrentData />
      <DailyTable tableData={tableData} setTableData={setTableData} />
      <AddMeals tableData={tableData} setTableData={setTableData} />
    </Container>
  );
  1;
};
