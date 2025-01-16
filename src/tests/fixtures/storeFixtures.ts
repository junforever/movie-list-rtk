import { CATEGORY, FiltersState, LANGUAGE, RULE, RuleList } from '@/types/global';

export const mockMovies = {
  results: [
    {
      adult: false,
      backdrop_path: '/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg',
      genre_ids: [28],
      id: 939243,
      original_language: 'en',
      original_title: 'Sonic the Hedgehog 3',
      overview:
        'Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.',
      popularity: 3088.942,
      poster_path: '/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg',
      release_date: '2024-12-19',
      title: 'Sonic the Hedgehog 3',
      video: false,
      vote_average: 7.604,
      vote_count: 538,
    },
    {
      adult: false,
      backdrop_path: '/oHPoF0Gzu8xwK4CtdXDaWdcuZxZ.jpg',
      genre_ids: [28],
      id: 762509,
      original_language: 'en',
      original_title: 'Mufasa: The Lion King',
      overview:
        'Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.',
      popularity: 2932.613,
      poster_path: '/jbOSUAWMGzGL1L4EaUF8K6zYFo7.jpg',
      release_date: '2024-12-18',
      title: 'Mufasa: The Lion King',
      video: false,
      vote_average: 7.415,
      vote_count: 632,
    },
  ],
};

export const mockGenres = {
  genres: [
    {
      id: 28,
      name: 'Action',
    },
  ],
};

export const mockFilters: FiltersState = {
  category: CATEGORY.Popular,
  language: LANGUAGE.English,
  page: 1,
};

export const mockRules = {
  rule: RULE.None as RuleList,
};
