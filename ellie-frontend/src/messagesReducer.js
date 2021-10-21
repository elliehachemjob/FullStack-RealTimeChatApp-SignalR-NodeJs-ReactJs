import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "message",
  initialState: {
    value: [],
    adminMsgs: [
      { message: "hey" },
      { message: "admin here" },
      { message: "1" },
    ],
    clientMsgs: [
      { message: "hey" },
      { message: "client here" },
      { message: "1" },
    ],
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
    clientMsgsDispatcher: (state, action) => {
      state.adminMsgs = [...state.adminMsgs, ...action.payload];
    },
  },
});

export const {
  messageSave,
  clearMessages,
  adminMsgsDispatcher,
  clientMsgsDispatcher,
} = slice.actions;

export const storedMessages = (state) => state.messagesSaved.value;
export const adminMsgSelector = (state) => state.messagesSaved.adminMsgs;
export const clientMsgSelector = (state) => state.messagesSaved.clientMsgs;

export default slice.reducer;
