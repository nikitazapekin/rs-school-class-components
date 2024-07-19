import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    //getPokemonByName: builder.query<Pokemon, string>({
        getPokemonByName: builder.query<any, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi










/*import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  JSON_ACCEPT_HEADER,
  TOKEN,
  URL_API,
  URL_SEARCH_API,
  DEFAULT_MOVIE_LIST,
} from '../common/constant.tsx';
import {
  Movie,
  MovieAdaptResponse,
  MoviesDetails,
  MoviesDetailsServerResponse,
  QueryParams,
} from '../types/api.tsx';

const baseQuery = fetchBaseQuery({
  baseUrl: URL_API,
  prepareHeaders: (headers) => {
    headers.set('Authorization', `Bearer ${TOKEN}`);
    headers.set('Accept', JSON_ACCEPT_HEADER);
    return headers;
  },
});

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery,
  endpoints: (builder) => ({
    getMovie: builder.query<MovieAdaptResponse, QueryParams>({
      query: (params) => {
        const url = params.query
          ? URL_SEARCH_API
          : `${URL_API}/${DEFAULT_MOVIE_LIST}`;
        const page = params.page ? params.page : 1;
        let result = `${url}?page=${page}`;
        if (params.query) {
          result += `&query=${encodeURIComponent(params.query)}`;
        }
        return result;
      },
      transformResponse: (response: {
        results: Movie[];
        total_pages: number;
      }): MovieAdaptResponse => ({
        totalPages: response.total_pages,
        results: response.results.map((item) => ({
          id: item.id.toString(),
          name: item.title,
          description: item.overview,
          posterPath: item.poster_path || '',
          rating: parseFloat(item.vote_average.toFixed(1)),
        })),
      }),
    }),
    getMovieByID: builder.query<MoviesDetails, string>({
      query: (id) => `${URL_API}/${id}`,
      transformResponse: (
        response: MoviesDetailsServerResponse
      ): MoviesDetails => ({
        id: response.id.toString(),
        title: response.title,
        overview: response.overview,
        backdropPath: response.backdrop_path,
        posterPath: response.poster_path,
        genres: response.genres.map((genre) => genre.name),
        originalLanguage: response.original_language,
        releaseDate: new Date(response.release_date).toLocaleDateString(
          'en-US',
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }
        ),
        adult: response.adult,
        budget: response.budget,
        revenue: response.revenue,
        runtime: `${Math.floor(response.runtime / 60)}h ${response.runtime % 60}m`,
        status: response.status,
        tagline: response.tagline,
        voteAverage: parseFloat(response.vote_average.toFixed(1)),
      }),
    }),
  }),
});

export const { useGetMovieQuery, useGetMovieByIDQuery } = moviesApi;
export const { middleware: moviesApiMiddleware } = moviesApi;



  const { data, error, isLoading } = useGetMovieQuery({ query, page });
*/