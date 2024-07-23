
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../types';
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
