import { createSlice } from '@reduxjs/toolkit';
import { fetchExampleData } from './trelloContentServices';
import { IStateCardData, IStateColumnData } from '../../models/store';

interface TrelloContentState {
  columnOrderIds: string[]
  columnData: IStateColumnData,
  cardData: IStateCardData
}

const initialState: TrelloContentState = {
  columnOrderIds: [],
  columnData: {},
  cardData: {}
};

const trelloContentSlice = createSlice({
  name: 'trello-content',
  initialState,
  reducers: {
 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExampleData.fulfilled, (state, action) => {
        const boardData = action.payload.data.board;

        const {columnOrderIds, columns} = boardData;
        state.columnOrderIds = columnOrderIds;

        const columnDataObject: IStateColumnData = {};
        const cardDataObject: IStateCardData = {};

        columns.forEach(clm => {
          columnDataObject[clm._id] = clm;

          clm.cards.forEach(card => {
            cardDataObject[card._id] = card
          })
        })
        state.columnData = columnDataObject;
        state.cardData = cardDataObject;
        
        console.log(".addCase ~ data:", columnOrderIds, columns)
      })
  },
});

export const {} = trelloContentSlice.actions;

export default trelloContentSlice.reducer;
