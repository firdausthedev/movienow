import {
  Detail,
  GenreResponse,
  Movie,
  MovieCredits,
  MoviesResponse,
  SortSelection,
} from "./types";

const API = `&api_key=${process.env.TMDB_API_KEY}`;
const DEFAULT_SORT = "&sort_by=popularity.desc";
const FILTER = "&include_adult=false&include_video=false&language=en-US&";

export const getGenres = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?${API}`,
  );
  const data = await res.json();
  return data as GenreResponse;
};

export const getMovies = async (
  genre: string,
  option: string,
  page: string,
) => {
  const genres = genre ? `&with_genres=${genre}` : "";
  let sort;
  if (option) {
    if (option === SortSelection.Popularity) {
      sort = DEFAULT_SORT;
    }
    if (option === SortSelection.Rating) {
      sort = "&sort_by=vote_average.desc&vote_count.gte=10";
    }
    if (option === SortSelection.Recent) {
      sort = "&sort_by=release_date.desc";
    }
  } else {
    sort = DEFAULT_SORT;
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?page=${page + FILTER + sort + genres + API}`,
  );
  const data = await res.json();
  return data as MoviesResponse;
};

export const getMoviesCarousel = async (genre: string) => {
  const genres = genre ? `&with_genres=${genre}` : "";
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?page=1${FILTER + DEFAULT_SORT + genres + API}`,
  );
  const data: MoviesResponse = await res.json();
  return data.results.slice(0, 4);
};

export const getSearch = async (query: string, page: string) => {
  const pageQuery = `&page=${page}`;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query + pageQuery + FILTER + API}`,
  );
  const data = await res.json();
  return data as MoviesResponse;
};

export const getDetail = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?${API}&append_to_response=credits,videos,recommendations`,
  );
  const data = await res.json();
  return data as Detail;
};

export const getMoviesByPersonId = async (id: string, page: string = "1") => {
  const pageQuery = `&page=${page}`;
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?${API + pageQuery + FILTER}`,
  );
  const data = await res.json();
  return data as MovieCredits;
};

export const getSavedMovies = () => {
  try {
    const savedMovies = localStorage.getItem("savedMovies");
    if (savedMovies) {
      return JSON.parse(savedMovies) as Movie[];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error parsing saved movies:", error);
    return null;
  }
};
