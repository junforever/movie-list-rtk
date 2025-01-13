import { useEffect } from 'react';
import { useGetGenresListQuery } from '@/services/genre.service';
import { setGenres } from '@/store/slices/genres/genresSlice';
import { useStoreDispatch } from '@/store/store';

export const useLoadGenres = () => {
  const { data, error } = useGetGenresListQuery({});
  const dispatch = useStoreDispatch();

  useEffect(() => {
    if (data && !error) {
      dispatch(setGenres(data.genres));
    }
  }, [data, error, dispatch]);

  return {
    error,
  };
};
