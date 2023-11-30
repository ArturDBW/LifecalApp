import styled from "styled-components";
import { DailtyTableRow } from "../elements/DailyTableRow";
import ProductsModal from "../components/ProductsModal";
import React, { useState } from "react";

const GridContainerStyled = styled.div`
  display: grid;
  max-width: 1000px;
  background-color: #f5f5f5;
  font-size: 14px;
  border-radius: 5px;
`;

const HeaderTableStyled = styled.div`
  display: grid;
  grid-template-columns: 100px 200px repeat(4, 1fr);
  justify-items: end;
  align-items: center;
`;

const SingleElementStyled = styled.div`
  padding: 16px;
  font-weight: bold;
`;

const SingleElementStyledSelf = styled.div`
  padding: 16px;
  justify-self: start;
  font-weight: bold;
`;

export const DailyTable = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = useState("");
  console.log(selectedRow);

  return (
    <>
      <GridContainerStyled>
        <HeaderTableStyled>
          <SingleElementStyled></SingleElementStyled>
          <SingleElementStyledSelf>
            Dessert (100g serving)
          </SingleElementStyledSelf>
          <SingleElementStyled>Calories</SingleElementStyled>
          <SingleElementStyled>Fat&nbsp;(g)</SingleElementStyled>
          <SingleElementStyled>Carbs&nbsp;(g)</SingleElementStyled>
          <SingleElementStyled>Protein&nbsp;(g)</SingleElementStyled>
        </HeaderTableStyled>
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
