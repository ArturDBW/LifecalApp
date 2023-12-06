import {
  ContainerStyled,
  GreenSpanStyled,
  InfoBoxStyled,
  InfoSpanStyled,
} from "../styles/AddMealsStyles";
import { AddMealsForm } from "./AddMealsForm";

interface Product {
  name: string | null;
  id: number | string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

type AddMealsFormProps = {
  tableData: Product[];
  setTableData: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const AddMeals = ({ tableData, setTableData }: AddMealsFormProps) => {
  return (
    <ContainerStyled>
      <InfoBoxStyled>
        <InfoSpanStyled>
          If your product is not on <GreenSpanStyled>the list</GreenSpanStyled>,
          add it yourself.
        </InfoSpanStyled>
      </InfoBoxStyled>
      <AddMealsForm tableData={tableData} setTableData={setTableData} />
    </ContainerStyled>
  );
};
