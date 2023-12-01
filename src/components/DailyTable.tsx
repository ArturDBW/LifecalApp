import styled from "styled-components";
import { DailtyTableRow } from "../elements/DailyTableRow";
import ProductsModal from "../components/ProductsModal";
import React, { useState } from "react";

const GridContainerStyled = styled.div`
  background-color: #eee;
  font-size: 14px;
  border-radius: 5px;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`;

export const DailyTable = () => {
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
      <ProductsModal open={open} setOpen={setOpen} selectedRow={selectedRow} />
    </>
  );
};
