import { configureStore } from '@reduxjs/toolkit';
// import { getDefaultMiddleware } from '@reduxjs/toolkit';
import apiQuerySlice from './reducers/apiQuerySlice.js';

// configured Store variable to handle state of store for App
export const store = configureStore({
  reducer: { apiQueryReults: apiQuerySlice },
  initialState: [
    { queryResultsData: {} },
  ],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }) 
});
