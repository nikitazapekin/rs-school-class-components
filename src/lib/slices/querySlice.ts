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
