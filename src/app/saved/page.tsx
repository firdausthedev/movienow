"use client";

import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieList/Card";
import {
  EmptyListMessage,
  ListContainer,
  ListHeading,
} from "@/components/MovieList/List";
import { MovieListSkeleton } from "@/components/Skeleton/Skeleton";
import { getSavedMovies } from "@/lib/actions";
import { Movie } from "@/lib/types";

export default function Saved({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const [movies, setMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    try {
      const savedMovies = getSavedMovies();
      if (savedMovies) {
        setMovies(savedMovies);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching saved movies:", error);
    }
  }, [searchParams]);

  if (!movies) {
    return (
      <div>
        <MovieListSkeleton amount={20} />
      </div>
    );
  }

  return (
    <main id="movies" className="container py-10">
      <ListHeading value="Saved movies" />
      {movies.length > 0 ? (
        <ListContainer>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ListContainer>
      ) : (
        <EmptyListMessage />
      )}
    </main>
  );
}
