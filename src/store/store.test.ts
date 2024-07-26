// src/store/store.test.ts

//import { configureStore } from '@reduxjs/toolkit';
import { // rootReducer,
     store } from './store';
import { githubApi } from './slices/querySlice';
import { usersGithubApi } from './slices/userQuerySlice';

// Мок для проверки middleware

/*
const createMockStore = (initialState?: any) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(githubApi.middleware)
        .concat(usersGithubApi.middleware),
  });
};
*/
describe('Redux Store', () => {
  it('should be configured correctly', () => {
 
    expect(store).toBeDefined();

 
    const state = store.getState();
    expect(state).toHaveProperty('appSlice');
    expect(state).toHaveProperty('selectedElementsSlice');
    expect(state).toHaveProperty(githubApi.reducerPath);
    expect(state).toHaveProperty(usersGithubApi.reducerPath);
  });
 
});
