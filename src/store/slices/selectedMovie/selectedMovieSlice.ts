import { createSlice } from '@reduxjs/toolkit';
import { Movie } from '@/types/global';

const initialState: {
  selectedMovie: Movie | null;
} = {
  selectedMovie: null,
};

export const selectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState,
  reducers: {
    setSelectedMovie: (state, { payload }: { payload: Movie | null }) => {
      state.selectedMovie = payload;
    },
  },
});

export const { setSelectedMovie } = selectedMovieSlice.actions;
