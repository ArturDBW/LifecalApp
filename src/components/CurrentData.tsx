import { ProgressBar } from "../elements/ProgressBar";
import { useSelector } from "react-redux";
import { selectUser } from "../slice/userSlice";
import {
  CaloriesInfoStyled,
  CaloriesStyled,
  ContainerStyled,
  DataStyled,
  ProgresBarBoxStyled,
  SecondCaloriesInfoStyled,
} from "../styles/CurrentDataStyles";

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
      <div>
        <DataStyled>{formattedDate}</DataStyled>
        <CaloriesStyled>
          <CaloriesInfoStyled>
            {userData[0].currentCalories}
            <SecondCaloriesInfoStyled>kcal</SecondCaloriesInfoStyled>
          </CaloriesInfoStyled>
        </CaloriesStyled>
      </div>
      <ProgresBarBoxStyled>
        <ProgressBar
          backgroundColorStyled="linear-gradient(to right,#feb47b ,#ff7e5f)"
          widthStyled={Number(
            (
              (userData[0].currentCalories / userData[0].userCaloriesNeeds) *
              100
            ).toFixed(2)
          )}
          macroType="Calories"
          isGrammage={true}
          currentMacro={Math.round(userData[0].currentCalories * 100) / 100}
          targetMacro={Math.round(userData[0].userCaloriesNeeds * 100) / 100}
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
          currentMacro={Math.round(userData[0].currentFat * 100) / 100}
          targetMacro={Math.round(userData[0].userFatNeeds * 100) / 100}
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
          targetMacro={
            Math.round(userData[0].userCarbohydratesNeeds * 100) / 100
          }
        />
        <ProgressBar
          backgroundColorStyled="linear-gradient(to right, #f911d8, #c747c7)"
          widthStyled={Number(
            (
              (userData[0].currentProteins / userData[0].userProteinNeeds) *
              100
            ).toFixed(2)
          )}
          macroType="Protein"
          isGrammage={true}
          currentMacro={Math.round(userData[0].currentProteins * 100) / 100}
          targetMacro={Math.round(userData[0].userProteinNeeds * 100) / 100}
        />
      </ProgresBarBoxStyled>
    </ContainerStyled>
  );
};
