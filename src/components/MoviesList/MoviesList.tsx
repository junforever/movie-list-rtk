import { useGetMoviesListQuery } from '@/services/api.service';
import { Movie, ApiRest } from '@/types/global';
import { MovieCard } from '../MovieCard/MovieCard';
import { useEffect, useState, useCallback } from 'react';
import { debounce } from '@/utils/functions';

export const MoviesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const { data, isLoading, error } = useGetMoviesListQuery({ page: currentPage, category: 'popular', language: 'en' });
  useEffect(() => {
    if (data) {
      setMovies(prev => [...prev, ...data.results]);
      if (data.page > 1) {
        window.scrollTo({
          top: document.body.scrollHeight - 1000,
          behavior: 'auto',
        });
      }
    }
  }, [data]);

  const handleScroll = useCallback(
    (data: ApiRest | undefined) => {
      if (document.body.scrollHeight - 100 < window.scrollY + window.innerHeight && data) {
        if (!data.page) return;

        if (data.page < currentPage || data.page + 1 > data.total_pages) return;

        setCurrentPage(data.page + 1);
      }
    },
    [currentPage],
  );

  useEffect(() => {
    const debouncedHandleScroll = debounce(() => handleScroll(data), 300);

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [data, handleScroll]);

  return (
    <>
      {(isLoading || !data) && <div>Loading...</div>}
      {error && <div>Error: {JSON.stringify(error)}</div>}
      {movies && (
        <ul className="grid gap-8 p-6 grid-cols-list">
          {movies.map((movie: Movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} cssClass="bg-black" />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
