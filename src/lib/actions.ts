import { GenreResponse, MoviesResponse } from "./types";

const API = `&api_key=${process.env.TMDB_API_KEY}`;
const DEFAULT_SORT = "&DEFAULT_SORT_by=popularity.desc";
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
    if (option === "Popularity") {
      sort = DEFAULT_SORT;
    }
    if (option === "Rating") {
      sort = "&sort_by=vote_average.desc&vote_count.gte=10";
    }
    if (option === "Recent") {
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
