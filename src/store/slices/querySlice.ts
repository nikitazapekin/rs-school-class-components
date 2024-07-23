
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SearchUsersResponse } from '../types';
export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    searchUsers: builder.query<SearchUsersResponse, { query: string; page: number; per_page: number }>({
      query: ({ query = 'type:user', page = 1, per_page = 10 }) => ({
        url: 'search/users',
        params: {
          q: query || 'type:user',
          page,
          per_page,
        },
      }),
    }),
  }),
});

export const { useSearchUsersQuery, useLazySearchUsersQuery } = githubApi;
 

/*
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store as appStore } from '../store';
import { setupListeners } from '@reduxjs/toolkit/query';
interface RenderWithProvidersOptions {
  preloadedState?: any;
  store?: typeof appStore;
  renderOptions?: any;
}
export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = appStore, 
    ...renderOptions
  }: RenderWithProvidersOptions = {}
) {

  setupListeners(store.dispatch);

  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
  */