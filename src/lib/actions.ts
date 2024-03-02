import { GenreResponse, MoviesResponse } from "./types";
import { genres, movies } from "./placeholder-data";

export const getGenres = async () => {
  const data = { genres: genres };
  return data as GenreResponse;
};

export const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = movies;
  return data as MoviesResponse;
};
