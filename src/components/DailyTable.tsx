import styled from "styled-components";
import { DailtyTableRow } from "../elements/DailyTableRow";
import ProductsModal from "../components/ProductsModal";
import React, { useState } from "react";

const GridContainerStyled = styled.div`
  background-color: #eee;
  font-size: 14px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow-y: auto;
  max-height: 544px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    grid-column: 1/-1;
    grid-row: 2/3;
    margin-top: 16px;
    max-height: auto;
  }
`;

interface Product {
  name: string;
  id: number | string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

type DailyTableProps = {
  tableData: Product[];
  setTableData: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const DailyTable = ({ tableData, setTableData }: DailyTableProps) => {
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = useState("");
  console.log(selectedRow);

  return (
    <>
      <GridContainerStyled>
        <DailtyTableRow
          rowName={"Śniadanie"}
          setOpen={setOpen}
          setSelectedRow={setSelectedRow}
        />
        <DailtyTableRow
          rowName={"Lunch"}
          setOpen={setOpen}
          setSelectedRow={setSelectedRow}
        />
        <DailtyTableRow
          rowName={"Obiad"}
          setOpen={setOpen}
          setSelectedRow={setSelectedRow}
        />
        <DailtyTableRow
          rowName={"Podwieczorek"}
          setOpen={setOpen}
          setSelectedRow={setSelectedRow}
        />
        <DailtyTableRow
          rowName={"Kolacja"}
          setOpen={setOpen}
          setSelectedRow={setSelectedRow}
        />
      </GridContainerStyled>
      <ProductsModal
        open={open}
        setOpen={setOpen}
        selectedRow={selectedRow}
        tableData={tableData}
        setTableData={setTableData}
      />
    </>
  );
};
