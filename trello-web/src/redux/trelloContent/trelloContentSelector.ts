import { RootState } from "../store";

export const columnOrderIdSelector = (state: RootState) => state.trello.columnOrderIds;

export const columnDataSelector = (state: RootState) => state.trello.columnData;

export const cardDataSelector = (state: RootState) => state.trello.cardData;