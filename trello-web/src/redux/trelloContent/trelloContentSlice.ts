import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchExampleData } from './trelloContentServices';

interface TrelloContentState {
  value: number;
}

const initialState: TrelloContentState = {
  value: 0,
};

const trelloContentSlice = createSlice({
  name: 'trello-content',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExampleData.fulfilled, (state, action) => {
        console.log(".addCase ~ action:", action)
        // Assuming the data returned is a number for this example
        state.value = action.payload;
      })
  },
});

export const { incrementByAmount } = trelloContentSlice.actions;

export default trelloContentSlice.reducer;
