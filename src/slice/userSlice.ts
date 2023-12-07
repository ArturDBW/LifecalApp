import { createSlice } from "@reduxjs/toolkit";

interface User {
  currentCalories: number;
  currentProteins: number;
  currentFat: number;
  currentCarbonhydrates: number;
  userCaloriesNeeds: number;
  userFatNeeds: number;
  userCarbohydratesNeeds: number;
  userProteinNeeds: number;
}

interface Meals {
  type: string;
  name: string;
  id: number;
  mealCalories: number;
  mealFat: number;
  mealCarbonhydrates: number;
  mealProteins: number;
}

interface UserState {
  user: User[];
  meals: Meals[];
}

const initialState: UserState = {
  user: [],
  meals: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addItem(state, action) {
      state.user.push(action.payload);
    },
    deleteItem(state, action) {
      state.meals = state.meals.filter((item) => item.id !== action.payload);
    },
    addItemMeals(state, action) {
      state.meals.push(action.payload);
    },
    addMacro(state, action) {
      const { calories, proteins, fat, carbs } = action.payload;
      state.user[0].currentCalories += calories;
      state.user[0].currentProteins += proteins;
      state.user[0].currentFat += fat;
      state.user[0].currentCarbonhydrates += carbs;
    },
    deleteMacro(state, action) {
      const { calories, proteins, fat, carbs } = action.payload;
      state.user[0].currentCalories -= calories;
      state.user[0].currentProteins -= proteins;
      state.user[0].currentFat -= fat;
      state.user[0].currentCarbonhydrates -= carbs;
    },
  },
});

export default userSlice.reducer;

export const { addItem, addItemMeals, deleteItem, addMacro, deleteMacro } =
  userSlice.actions;

export const selectUser = (state: { user: UserState }) => state.user.user;
export const selectUserMeals = (state: { user: UserState }) => state.user.meals;
