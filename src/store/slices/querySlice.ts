





import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 
interface UserItem {
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

interface SearchUsersResponse {
    total_count: number;
    incomplete_results: boolean;
    items: UserItem[];
}

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
 