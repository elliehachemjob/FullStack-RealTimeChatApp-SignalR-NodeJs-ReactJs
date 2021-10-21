import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "message",
  initialState: {
    value: [],
    adminMsgs: [],
  },
  reducers: {
    messageSave: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
    //   incrementByAmount: (state, action) => {
    //     state.value += action.payload;
    //   },
    clearMessages: (state) => {
      state.value = [];
    },
    adminMsgsDispatcher: (state, action) => {
      state.adminMsgs = [...state.adminMsgs, ...action.payload];
    },
  },
});

export const { messageSave, clearMessages, adminMsgsDispatcher } =
  slice.actions;

export const storedMessages = (state) => state.messagesSaved.value;
export const adminMsgSelector = (state) => state.messagesSaved.adminMsgs;

export default slice.reducer;
