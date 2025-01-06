export const CATEGORY = {
  Popular: 'popular',
  NowPlaying: 'now_playing',
  MostRelated: 'most_related',
  Upcoming: 'upcoming',
} as const;

export type CategoryList = (typeof CATEGORY)[keyof typeof CATEGORY];

export const LANGUAGE = {
  Spanish: 'es',
  English: 'en',
} as const;

export type LanguageList = (typeof LANGUAGE)[keyof typeof LANGUAGE];

export interface FiltersState {
  category: CategoryList;
  language: LanguageList;
}

export interface QueryParams extends FiltersState {
  page: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ApiRest {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
