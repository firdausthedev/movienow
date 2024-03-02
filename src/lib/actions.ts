import { GenreResponse } from "./types";
import { genres } from "./placeholder-data";

export const getGenres = async () => {
  const data = { genres: genres };
  return data as GenreResponse;
};
