import styled from "styled-components";
import { ProgressBar } from "../elements/ProgressBar";
import { useSelector } from "react-redux";
import { selectUser } from "../slice/userSlice";

const ContainerStyled = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-column: 1/-1;
  }
`;

const BasicInfoBoxStyled = styled.div``;
const DataStyled = styled.div`
  font-size: 20px;
`;
const CaloriesStyled = styled.div`
  margin-top: 12px;
`;
const CaloriesInfoStyled = styled.span`
  font-size: 58px;
`;
const SecondCaloriesInfoStyled = styled.span`
  margin-top: 16px;
  font-size: 28px;
`;
const ProgresBarBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;

  @media (max-width: 768px) {
    gap: 8px 0;
  }
`;

export const CurrentData = () => {
  const userData = useSelector(selectUser);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;

  return (
    <ContainerStyled>
      <BasicInfoBoxStyled>
        <DataStyled>{formattedDate}</DataStyled>
        <CaloriesStyled>
          <CaloriesInfoStyled>
            {userData[0].currentCalories}
            <SecondCaloriesInfoStyled>kcal</SecondCaloriesInfoStyled>
          </CaloriesInfoStyled>
        </CaloriesStyled>
      </BasicInfoBoxStyled>
      <ProgresBarBoxStyled>
        <ProgressBar
          backgroundColorStyled="linear-gradient(to right, #ff7e5f, #feb47b)"
          widthStyled={Number(
            (
              (userData[0].currentCalories / userData[0].userCaloriesNeeds) *
              100
            ).toFixed(2)
          )}
          macroType="Calories"
          isGrammage={true}
          currentMacro={userData[0].currentCalories}
          targetMacro={userData[0].userCaloriesNeeds}
        />
        <ProgressBar
          backgroundColorStyled="linear-gradient(to right, #09f7ed, #30bdba)"
          widthStyled={Number(
            ((userData[0].currentFat / userData[0].userFatNeeds) * 100).toFixed(
              2
            )
          )}
          macroType="Fat"
          isGrammage={true}
          currentMacro={userData[0].currentFat}
          targetMacro={userData[0].userFatNeeds}
        />
        <ProgressBar
          backgroundColorStyled="linear-gradient(to right, #ac72b1, #4d1749)"
          widthStyled={Number(
            (
              (userData[0].currentCarbonhydrates /
                userData[0].userCarbohydratesNeeds) *
              100
            ).toFixed(2)
          )}
          macroType="Carbs"
          isGrammage={true}
          currentMacro={
            Math.round(userData[0].currentCarbonhydrates * 100) / 100
          }
          targetMacro={userData[0].userCarbohydratesNeeds}
        />
        <ProgressBar
          backgroundColorStyled="linear-gradient(to right, #c747c7, #f911d8)"
          widthStyled={Number(
            (
              (userData[0].currentProteins / userData[0].userProteinNeeds) *
              100
            ).toFixed(2)
          )}
          macroType="Protein"
          isGrammage={true}
          currentMacro={Math.round(userData[0].currentProteins * 100) / 100}
          targetMacro={userData[0].userProteinNeeds}
        />
      </ProgresBarBoxStyled>
    </ContainerStyled>
  );
};
