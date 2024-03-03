import { Detail, Video } from "@/lib/types";
import StarRating from "../Rating/Star";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";
import styles from "./content.module.css";
import Recommendation from "./Recommendation";

export function Content({ movie }: { movie: Detail }) {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
    : movie.backdrop_path
      ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
      : null;

  const averageRating = movie.vote_average / 2.0;

  return (
    <div className="flex flex-col gap-3 overflow-y-auto pb-10">
      <Poster poster={poster} />
      <div className="flex flex-col gap-1">
        <h2 className="text-semiXl font-semibold">
          {movie.title}{" "}
          {movie.release_date && (
            <span className="text-gray">
              ({movie.release_date.split("-")[0]})
            </span>
          )}
        </h2>
        {movie.vote_average > 0 && (
          <div className="flex items-center gap-1">
            <StarRating averageRating={averageRating} />
            <span className="mt-1 text-xs text-gray">({movie.vote_count})</span>
          </div>
        )}
      </div>
      <p className="text-sm font-light">{movie.overview}</p>
      <Trailer video={movie.videos} />
      <Genre movie={movie} />
      <Casting movie={movie} />
      <Recommendation recommendations={movie.recommendations} max={5} />
    </div>
  );
}

function Poster({ poster }: { poster: string | null }) {
  if (!poster) return null;
  return (
    <Image
      alt="movie-poster"
      className="mx-auto"
      src={poster}
      width={300}
      height={450}
    />
  );
}

function Casting({ movie }: { movie: Detail }) {
  if (movie.credits.cast.length > 0) {
    return (
      <>
        <h3 className={styles.header}>Top Casts</h3>
        <div className="flex flex-wrap gap-4">
          {movie.credits.cast.slice(0, 5).map((cast, index) => {
            return (
              <Link
                href={{
                  pathname: "/search",
                  query: { person: cast.id, name: cast.name },
                }}
                className={styles.customLink}
                key={index}
                prefetch={false}
              >
                {cast.name}
              </Link>
            );
          })}
        </div>
      </>
    );
  }
}

function Genre({ movie }: { movie: Detail }) {
  if (movie.genres.length <= 0) return null;
  return (
    <>
      <h3 className={styles.header}>Genres</h3>
      <div className="flex flex-wrap gap-4">
        {movie.genres.map((genre, index) => {
          return (
            <Link
              key={index}
              className={styles.customLink}
              href={{ pathname: "/", query: { genre: genre.id } }}
              prefetch={false}
            >
              {genre.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}

function Trailer({ video }: { video: Video }) {
  if (video.results.length <= 0) return null;

  // get the first result where the provider is Youtube and type is trailer
  const result = video.results.find(
    (result) => result.site === "YouTube" && result.type === "Trailer",
  );

  if (!result) return null;

  const link = `https://www.youtube.com/watch?v=${result.key}`;

  return (
    <a
      aria-label="trailer-link"
      target="_blank"
      rel="noreferrer"
      href={link}
      className="flex w-fit items-center justify-center gap-2 border border-white p-2 text-xs transition-colors duration-150  hover:border-gray hover:text-gray"
    >
      <FaPlay /> Trailer
    </a>
  );
}
