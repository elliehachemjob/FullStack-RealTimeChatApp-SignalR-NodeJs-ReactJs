import { createSlice } from '@reduxjs/toolkit';


export const slice = createSlice({
    name: 'message',
    initialState: {
      value:[],
    },
    reducers: {
      messageSave: state => {
        return [...state]
    
      },
    //   incrementByAmount: (state, action) => {
    //     state.value += action.payload;
    //   },
    },
  });
  
  export const { messageSave } = slice.actions;
  
  export const selectCount = state => state.messagesSaved.value;
  
  export default slice.reducer;