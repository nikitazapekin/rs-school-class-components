import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";
import type { ThunkAction, Action } from '@reduxjs/toolkit';
import appSlice from "./slices/appSlice";
import selectedElementsSlice from "./slices/selectedElementsSlice";
import { githubApi } from "./slices/querySlice";
import { usersGithubApi } from "./slices/userQuerySlice";
import { createWrapper } from "next-redux-wrapper";
const rootReducer = combineReducers({
    appSlice: appSlice,
    selectedElementsSlice: selectedElementsSlice,
    postsSlice: postsSlice,
    [githubApi.reducerPath]: githubApi.reducer,
    [usersGithubApi.reducerPath]: usersGithubApi.reducer,
    posts: postsSlice
});
export const store = configureStore({
 
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(githubApi.middleware).concat(usersGithubApi.middleware),
   
})



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>; 

export const wrapper = createWrapper(() => store);