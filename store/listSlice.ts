import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListItem {
  id: number;
  name: string;
}

interface ListState {
  items: ListItem[];
}

const initialState: ListState = {
  items: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ListItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action: PayloadAction<ListItem>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    clearList: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateItem, clearList } = listSlice.actions;
export default listSlice.reducer;
