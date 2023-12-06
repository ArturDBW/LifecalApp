import { DailtyTableRow } from "../elements/DailyTableRow";
import ProductsModal from "../components/ProductsModal";
import React, { useState } from "react";
import { GridContainerStyled } from "../styles/DailyTableStyles";

interface Product {
  name: string | null;
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

  return (
    <>
      <GridContainerStyled>
        <DailtyTableRow
          rowName={"Breakfast"}
          setOpen={setOpen}
          setSelectedRow={setSelectedRow}
        />
        <DailtyTableRow
          rowName={"Lunch"}
          setOpen={setOpen}
          setSelectedRow={setSelectedRow}
        />
        <DailtyTableRow
          rowName={"Dinner"}
          setOpen={setOpen}
          setSelectedRow={setSelectedRow}
        />
        <DailtyTableRow
          rowName={"Snack"}
          setOpen={setOpen}
          setSelectedRow={setSelectedRow}
        />
        <DailtyTableRow
          rowName={"Supper"}
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
