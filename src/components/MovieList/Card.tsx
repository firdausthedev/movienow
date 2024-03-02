"use client";

import { useCallback } from "react";
import { Movie } from "@/lib/types";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import StarRating from "../Rating/Star";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const overview = movie.overview;
  const shortedOverview = overview.substring(0, 100) + "...";
  const averageRating = movie.vote_average / 2;
  const backdrop = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
    : movie.poster_path
      ? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
      : null;

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams!.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <>
      <Link
        scroll={false}
        href={
          pathname + "?" + createQueryString("detail", `${movie.id.toString()}`)
        }
        aria-label="movie"
        className={`group relative h-40 w-full cursor-pointer overflow-hidden rounded-md 
        ${!backdrop ? "bg-gray/25" : "bg-cover bg-center bg-no-repeat "}`}
        style={{
          backgroundImage: backdrop ? `url(${backdrop})` : "",
        }}
      >
        <div
          className={`absolute bottom-0  size-full flex-col gap-2 bg-black/40  p-4 text-start group-hover:flex ${!backdrop ? "flex" : "hidden"}`}
        >
          <h3 className="text-semiXl font-bold leading-none">
            {movie.title}{" "}
            {movie.release_date && (
              <span>({movie.release_date.split("-")[0]})</span>
            )}
          </h3>
          {movie.vote_average > 0 && (
            <div className="text-xs">
              <StarRating averageRating={averageRating} />
            </div>
          )}

          <div>
            <p className="text-xs text-white">{shortedOverview}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
