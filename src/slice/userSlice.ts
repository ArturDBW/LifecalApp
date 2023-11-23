import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addItem(state, action) {
      state.user.push(action.payload);
    },
  },
});

export const { addItem } = userSlice.actions;

export default userSlice.reducer;

export const getUser = (state) => state.user.user;

export const selectUser = (state) => state.user.user;
