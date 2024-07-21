import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    searchUsers: builder.query({
      query: ({ query = 'type:user', page = 1, per_page = 30 }) => ({
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
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
  reducerPath: 'githubApi',  // Updated to match the correct API
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    searchUsers: builder.query({
      query: ({ query, page = 1, per_page = 30 }) => ({
        url: 'search/users',
        params: {
          q: query,
          page,
          per_page
        }
      }),
    }),
  }),
});

export const { useSearchUsersQuery, useLazySearchUsersQuery } = githubApi;
*/
//`https://api.github.com/search/users?q=${typedValue}&page=${offset}&per_page=${limit}`;

/*
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 
export const githubApi = createApi({
  reducerPath: 'pokemonApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/search/users?' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<string, string>({
     // query: (name) => `pokemon/${name}`,
     query: (name) => ``
    }),
  }),
})
//
 
export const { useGetPokemonByNameQuery, useLazyGetPokemonByNameQuery } = githubApi

*/