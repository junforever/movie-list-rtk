import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GenresApiRest } from '@/types/global';

export const genresRtk = createApi({
  reducerPath: 'genresRtk',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_GENRES_URL,
  }),
  endpoints: builder => ({
    getGenresList: builder.query<GenresApiRest, unknown>({
      query: () => ({
        url: '',
        method: 'GET',
        params: { api_key: import.meta.env.VITE_API_KEY },
        keepUnusedDataFor: 3000,
      }),
    }),
  }),
});

export const { useGetGenresListQuery } = genresRtk;
