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

/*import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {},
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
*/




/*
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { ThunkAction, Action } from '@reduxjs/toolkit';
import appSlice from './slices/appSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { githubApi } from './slices/querySlice';
import { usersGithubApi } from './slices/userQuerySlice';
import selectedElementsSlice from './slices/selectedElementsSlice';

export const rootReducer = combineReducers({
	appSlice: appSlice,
	selectedElementsSlice: selectedElementsSlice,
	[githubApi.reducerPath]: githubApi.reducer,
	[usersGithubApi.reducerPath]: usersGithubApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(githubApi.middleware).concat(usersGithubApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

setupListeners(store.dispatch);

*/