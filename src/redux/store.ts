import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";
import type { ThunkAction, Action } from '@reduxjs/toolkit';
import appSlice from "./slices/appSlice";
import selectedElementsSlice from "./slices/selectedElementsSlice";
import { githubApi } from "./slices/querySlice";
import { usersGithubApi } from "./slices/userQuerySlice";
const rootReducer = combineReducers({
    appSlice: appSlice,
    selectedElementsSlice: selectedElementsSlice,
    postsSlice: postsSlice,
    [githubApi.reducerPath]: githubApi.reducer,
    [usersGithubApi.reducerPath]: usersGithubApi.reducer,
    posts: postsSlice
});
export const store = configureStore({
    //  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(githubApi.middleware).concat(usersGithubApi.middleware),
    //  });
    //  reducer: {
    //    posts: postsSlice
    // }
})



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
/*
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
*/
/*
export const store = configureStore({
    reducer: {
        posts: postsSlice
    }
})
*/



/*
//lib/store.ts

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { ThunkAction, Action } from '@reduxjs/toolkit';
import appSlice from './slices/appSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { githubApi } from './slices/querySlice';
import { usersGithubApi } from './slices/userQuerySlice';
import selectedElementsSlice from './slices/selectedElementsSlice';
import testSlice from './slices/testSlice';

const rootReducer = combineReducers({
  appSlice: appSlice,
  selectedElementsSlice: selectedElementsSlice,
  testSlice: testSlice,
  [githubApi.reducerPath]: githubApi.reducer,
  [usersGithubApi.reducerPath]: usersGithubApi.reducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(githubApi.middleware).concat(usersGithubApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Set up listeners
const store = makeStore();
setupListeners(store.dispatch);

export default store;

*/