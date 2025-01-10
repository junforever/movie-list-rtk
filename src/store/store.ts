import { configureStore } from '@reduxjs/toolkit';
import { filtersSlice } from './slices/filters/filtersSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { moviesRtk } from '@/services/api.service';
import { genresSlice } from './slices/genres/genresSlice';
import { formattersSlice } from './slices/formatters/formattersSlice';

export const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    genres: genresSlice.reducer,
    formatters: formattersSlice.reducer,
    [moviesRtk.reducerPath]: moviesRtk.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(moviesRtk.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useStoreDispatch = () => useDispatch<AppDispatch>();
