import { createSlice } from "@reduxjs/toolkit";

interface User {
  currentCalories: number;
  currentProteins: number;
  currentFat: number;
  currentCarbonhydrates: number;
}

interface Meals {
  id: number;
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
    addItemMeals(state, action) {
      state.meals.push(action.payload);
    },
    addCalorie(state, action) {
      state.user[0].currentCalories += action.payload;
    },
    addProtein(state, action) {
      state.user[0].currentProteins += action.payload;
    },
    addFat(state, action) {
      state.user[0].currentFat += action.payload;
    },
    addCarbonhydrate(state, action) {
      state.user[0].currentCarbonhydrates += action.payload;
    },
    deleteCalorie(state, action) {
      state.user[0].currentCalories -= action.payload;
    },
    deleteProtein(state, action) {
      state.user[0].currentProteins -= action.payload;
    },
    deleteFat(state, action) {
      state.user[0].currentFat -= action.payload;
    },
    deleteCarbonhydrate(state, action) {
      state.user[0].currentCarbonhydrates -= action.payload;
    },
    deleteItem(state, action) {
      state.meals = state.meals.filter((item) => item.id !== action.payload);
    },
  },
});

export default userSlice.reducer;

export const {
  addItem,
  addItemMeals,
  addCalorie,
  addProtein,
  addFat,
  addCarbonhydrate,
  deleteItem,
  deleteCalorie,
  deleteProtein,
  deleteFat,
  deleteCarbonhydrate,
} = userSlice.actions;

export const selectUser = (state: { user: UserState }) => state.user.user;
export const selectUserMeals = (state: { user: UserState }) => state.user.meals;
