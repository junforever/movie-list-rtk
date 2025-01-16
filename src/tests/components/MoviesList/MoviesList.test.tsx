import { MoviesList } from '@/components/MoviesList/MoviesList';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { vi } from 'vitest';
import { moviesRtk } from '@/services/api.service';
import { filtersSlice } from '@/store/slices/filters/filtersSlice';
import { genresSlice } from '@/store/slices/genres/genresSlice';
import { formattersSlice } from '@/store/slices/formatters/formattersSlice';
import { mockFilters, mockGenres, mockMovies, mockRules } from '@/tests/fixtures/storeFixtures';

// const mockedFn = vi.fn().mockReturnValue({
//   data: mockMovies,
//   isLoading: false,
//   error: null,
// });

// vi.mock('@/services/api.service', async () => {
//   const actual = await vi.importActual('@/services/api.service');
//   return {
//     ...actual,
//     useGetMoviesListQuery: vi.fn(() => ({
//       data: mockMovies,
//       isLoading: false,
//       error: null,
//     })),
//   };

// });

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    genres: genresSlice.reducer,
    formatters: formattersSlice.reducer,
    [moviesRtk.reducerPath]: moviesRtk.reducer,
  },
  preloadedState: {
    filters: mockFilters,
    formatters: mockRules,
    genres: mockGenres,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(moviesRtk.middleware),
});

describe('Testing MoviesList.test functionality', () => {
  let modalRoot: HTMLElement;
  beforeEach(() => {
    vi.clearAllMocks();

    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    modalRoot.remove();
  });

  test('MoviesList should display the movie cards ', async () => {
    vi.mock('@/services/api.service', async () => {
      const actual = await vi.importActual('@/services/api.service');
      return {
        ...actual,
        useGetMoviesListQuery: vi.fn(() => ({
          data: mockMovies,
          isLoading: false,
          error: null,
        })),
      };
    });

    render(
      <Provider store={store}>
        <MoviesList />
      </Provider>,
    );

    const movieItems = await screen.findAllByRole('listitem');
    expect(movieItems).toHaveLength(mockMovies.results.length);
  });

  // test('Toast with loading message must appear if the data is loading', async () => {
  //   vi.mock('@/services/api.service', async () => {
  //     const actual = await vi.importActual('@/services/api.service');
  //     return {
  //       ...actual,
  //       useGetMoviesListQuery: vi.fn(() => ({
  //         data: undefined,
  //         isLoading: true,
  //         error: null,
  //       })),
  //     };
  //   });

  //   render(
  //     <Provider store={store}>
  //       <MoviesList />
  //     </Provider>,
  //   );
  //   expect(screen.queryByTestId('toast-comp')).toBeTruthy();
  // });
});
