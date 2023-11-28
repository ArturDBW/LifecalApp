import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    addItemMeals(state, action) {
      state.meals.push(action.payload);
    },
    calcCalories(state, action) {
      state.user[0].currentCalories += action.payload;
      state.user[0].currentProteins += action.payload;
      state.user[0].currentFat += action.payload;
      state.user[0].currentCarbonhydrates += action.payload;
    },
  },
});

export default userSlice.reducer;

export const { addItem, addItemMeals, calcCalories } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectUserMeals = (state) => state.user.meals;
