import { DailtyTableRow } from "../elements/DailyTableRow";
import ProductsModal from "../components/ProductsModal";
import React, { useState } from "react";
import { GridContainerStyled } from "../styles/DailyTableStyles";

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
