import { configureStore, combineReducers } from "@reduxjs/toolkit";
 
import type { ThunkAction, Action } from '@reduxjs/toolkit';
import appSlice from "./slices/appSlice";
import selectedElementsSlice from "./slices/selectedElementsSlice";
 
import { createWrapper } from "next-redux-wrapper";
import themeSlice from "./slices/themeSlice";
export const rootReducer = combineReducers({
    appSlice: appSlice,
    selectedElementsSlice: selectedElementsSlice,
    themeSlice: themeSlice
     
});
export const store = configureStore({
 
    reducer: rootReducer,
  
   
})



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>; 

export const wrapper = createWrapper(() => store);
