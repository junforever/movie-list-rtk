import { Genres } from '@/types/global';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genres: [] as Genres[],
};

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    setGenres: (state, { payload }: { payload: Genres[] }) => {
      state.genres = payload;
    },
  },
});

export const { setGenres } = genresSlice.actions;
