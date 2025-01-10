import { useGetMoviesListQuery } from '@/services/api.service';
import { Movie, ApiRest } from '@/types/global';
import { MovieCard } from '../MovieCard/MovieCard';
import { useEffect, useState, useCallback } from 'react';
import { debounce, isEven, isPrime } from '@/utils/functions';
import { useStoreDispatch, useStoreSelector } from '@/store/store';
import { setPage } from '@/store/slices/filters/filtersSlice';
import { Toast } from '../Toast/Toast';
import { RuleList, RULE } from '../../types/global';

const cardFormat = (rule: RuleList, num: number): string => {
  /* eslint-disable */
  switch (rule) {
    case RULE.PrimeNumber:
      return isPrime(num) ? 'bg-odd-red text-white' : 'bg-even-orange text-white';

    case RULE.OddEven:
      return isEven(num) ? 'bg-even-orange text-white' : 'bg-odd-red text-white';

    default:
      return 'bg-black';
  }
  /* eslint-enable */
};

export const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const dispatch = useStoreDispatch();
  const { category, language, page } = useStoreSelector(state => state.filters);
  const { rule } = useStoreSelector(state => state.formatters);
  const { data, isLoading, error } = useGetMoviesListQuery({ page, category, language });

  useEffect(() => {
    if (data) {
      if (data.page > 1) {
        setMovies(prev => [...prev, ...data.results]);
        window.scrollTo({
          top: document.body.scrollHeight - 1000,
          behavior: 'auto',
        });
        return;
      }
      setMovies(data.results);
    }
  }, [data]);

  const handleScroll = useCallback(
    (data: ApiRest | undefined) => {
      if (document.body.scrollHeight - 100 < window.scrollY + window.innerHeight && data) {
        if (!data.page) return;

        if (data.page < page || data.page + 1 > data.total_pages) return;

        dispatch(setPage(data.page + 1));
      }
    },
    [page],
  );

  useEffect(() => {
    const debouncedHandleScroll = debounce(() => handleScroll(data), 300);

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [data, handleScroll]);

  return (
    <section>
      {(isLoading || !data) && <Toast title="Loading" icon="loading" />}
      {error ? (
        <Toast title="Error" text="There was an error loading the data, the api responded with an error" icon="error" />
      ) : (
        movies && (
          <ul className="grid gap-8 py-6 grid-cols-list">
            {movies.map((movie: Movie, index: number) => (
              <li key={crypto.randomUUID()}>
                <MovieCard movie={movie} cssClass={cardFormat(rule, index + 1)} />
              </li>
            ))}
          </ul>
        )
      )}
    </section>
  );
};
