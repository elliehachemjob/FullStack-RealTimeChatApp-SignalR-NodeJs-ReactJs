import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "auth",
  initialState: {
    username: "",
  },
  reducers: {
    username: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { username } = slice.actions;

export const usernameSelector = (state) => state.authReducer.username;

export default slice.reducer;
