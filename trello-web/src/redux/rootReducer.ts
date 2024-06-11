import { combineReducers } from '@reduxjs/toolkit';
import trelloContentSlice from './trelloContent/trelloContentSlice';

const rootReducer = combineReducers({
  example: trelloContentSlice,
  // Add other reducers here
});

export default rootReducer;
