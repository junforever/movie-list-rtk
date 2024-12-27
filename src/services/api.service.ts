import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FiltersState, ApiRest } from '@/types/global';

export const moviesRtk = createApi({
  reducerPath: 'moviesRtk',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: builder => ({
    getMoviesList: builder.query<ApiRest, FiltersState>({
      query: ({ category, page, language }) => ({
        url: `/${category}`,
        method: 'GET',
        params: { page, language, api_key: import.meta.env.VITE_API_KEY },
      }),
    }),
  }),
});

export const { useGetMoviesListQuery } = moviesRtk;
