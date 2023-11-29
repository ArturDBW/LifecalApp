import styled from "styled-components";
import { DailtyTableRow } from "../elements/DailyTableRow";
import ProductsModal from "../components/ProductsModal";
import React, { useState } from "react";
const GridContainer = styled.div`
  display: grid;
  width: 1200px;
  background-color: #c0bebe;
`;

const HeaderTable = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 200px);
`;

export const DailyTable = () => {
  const handleAddMealsClick = (rowName: string) => {
    console.log(`Dodaj element do wiersza: ${rowName}`);
  };

  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = useState("");
  console.log(selectedRow);

  return (
    <>
      <GridContainer>
        <HeaderTable>
          <div></div>
          <div>Dessert (100g serving)</div>
          <div>Calories</div>
          <div>Fat&nbsp;(g)</div>
          <div>Carbs&nbsp;(g)</div>
          <div>Protein&nbsp;(g)</div>
        </HeaderTable>
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
      </GridContainer>
      <ProductsModal
        open={open}
        setOpen={setOpen}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
      />
    </>
  );
};
