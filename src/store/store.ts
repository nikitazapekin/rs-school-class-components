import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { ThunkAction, Action } from '@reduxjs/toolkit';
import appSlice from "./slices/appSlice";
import { setupListeners } from '@reduxjs/toolkit/query'
import { githubApi } from "./slices/querySlice";
import { usersGithubApi } from "./slices/userQuerySlice";

export const rootReducer = combineReducers({
  appSlice: appSlice,
  [githubApi.reducerPath]: githubApi.reducer,
  [usersGithubApi.reducerPath]: usersGithubApi.reducer,  
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(githubApi.middleware)
      .concat(usersGithubApi.middleware),  
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

setupListeners(store.dispatch);



 