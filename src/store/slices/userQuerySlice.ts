 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 

export interface User {
	login: string;
	id: number;
	avatar_url: string;
	type: string;
} 
export interface User {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    score: number;
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
 