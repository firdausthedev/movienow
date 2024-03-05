export type GenreResponse = {
  genres: Genre[];
};

export type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Detail = {
  backdrop_path: string;
  genres: Genre[];
  id: number;
  overview: string;
  poster_path: string | null;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  credits: {
    cast: {
      id: number;
      name: string;
      cast_id: number;
    }[];
    crew: {
      id: number;
      name: string;
      job: string;
    }[];
  };
  videos: Video;
  recommendations: MoviesResponse;
};

export type MovieCredits = {
  cast: Movie[];
  crew: MovieCasts[];
  id: number;
};

export interface MovieCasts extends Movie {
  credit_id: string;
  department: string;
  job: string;
}

export type Video = {
  id: number;
  results: {
    key: string;
    site: string;
    type: string;
  }[];
};

export enum Role {
  Acting = "Acting",
  Director = "Director",
}

export enum SortSelection {
  Popularity = "Popularity",
  Recent = "Recent",
  Rating = "Rating",
}
