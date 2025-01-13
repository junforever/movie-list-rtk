import { Genre } from '@/types/global';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genres: [] as Genre[],
};

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    setGenres: (state, { payload }: { payload: Genre[] | undefined }) => {
      state.genres = payload ?? [];
    },
  },
});

export const { setGenres } = genresSlice.actions;
