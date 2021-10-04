import { createSlice } from '@reduxjs/toolkit';


export const slice = createSlice({
    name: 'message',
    initialState: {
      value:[],
    },
    reducers: {
      messageSave: (state, action) => {
        state.value =[...state.value ,...action.payload]
    
      },
    //   incrementByAmount: (state, action) => {
    //     state.value += action.payload;
    //   },
    },
  });
  
  export const { messageSave } = slice.actions;
  
  export const selectCount = state => state.messagesSaved.value;
  
  export default slice.reducer;