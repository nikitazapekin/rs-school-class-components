 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 

export interface User {
	login: string;
	id: number;
	avatar_url: string;
	type: string;
} 



/*
export const usersGithubApi = createApi({
  reducerPath: 'userGithubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    searchUsersGithub: builder.query<User, {username: string }>({
      query: ({ username}) => ({
        url: 'users',
        params: {
         username
        },
      }),
    }),
  }),
});
*/

export interface User {
	login: string;
	id: number;
	avatar_url: string;
	type: string;
} 

export const usersGithubApi = createApi({
  reducerPath: 'userGithubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    getUserGithub: builder.query<User, { username: string }>({
      query: ({ username }) => `users/${username}`,
    }),
  }),
});

export const { useGetUserGithubQuery, useLazyGetUserGithubQuery } = usersGithubApi;

//export const { useSearchUsersGithubQuery, useLazySearchUsersGithubQuery } = usersGithubApi;
 