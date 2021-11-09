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
      { message: "clieasdasdnt here" },
      { message: "1" },
    ],
  },

  reducers: {
    messageSave: (state:any, action) => {
      state.value = [...state.value, ...action.payload];
    },
    //   incrementByAmount: (state, action) => {
    //     state.value += action.payload;
    //   },
    clearMessages: (state:any) => {
      state.value = [];
    },
    adminMsgsDispatcher: (state:any, action) => {
      state.adminMsgs = [...state.adminMsgs, ...action.payload];
    },
    clientMsgsDispatcher: (state:any, action) => {
      state.clientMsgs = [];
    },
  },
});

export const {
  messageSave,
  clearMessages,
  adminMsgsDispatcher,
  clientMsgsDispatcher,
} = slice.actions;

export const storedMessages:any = (state:any) => state.messagesSaved.value;
export const adminMsgSelector:any = (state:any) => state.messagesSaved.adminMsgs;
export const clientMsgSelector:any = (state:any) => state.messagesSaved.clientMsgs;

export default slice.reducer;
