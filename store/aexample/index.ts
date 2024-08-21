import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';



export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: () => 0,
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;

// selector
export const selectCount = (state:RootState) => state.counter;

