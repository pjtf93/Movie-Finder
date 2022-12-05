type MovieType = {
  id?: number | undefined;
  title?: string | undefined;
  release_date?: string | undefined;
  poster_path?: string | undefined;
  overview?: string | undefined;
  popularity?: number | undefined;
  vote_average?: number | undefined;
  vote_count?: number | undefined;
  genres?: GenreType[] | undefined;
  production_countries?: ProductionCountryType[] | undefined;
  original_title?: string | undefined;
  short?: boolean | undefined;
};

type MovieListType = {
  page: number;
  results: MovieType[];
  total_pages: number;
};

type GenreType = {
  id: number;
  name: string;
};

// type ProductionCompanyType = {
//   id: number;
//   logo_path: string;
//   name: string;
//   origin_country: string;
// };

type ProductionCountryType = {
  iso_3166_1: string;
  name: string;
};

export type {
  MovieType,
  MovieListType,
  GenreType,
  // ProductionCompanyType,
  ProductionCountryType,
};
