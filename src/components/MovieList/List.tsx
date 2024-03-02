import { Sort } from "../Sort";
import MovieCard from "./Card";
import { MoviesResponse } from "@/lib/types";

async function MovieList({
  movies,
  heading,
}: {
  movies: MoviesResponse;
  heading: string;
}) {
  return (
    <section id="movies" className="container py-10">
      <div className="flex justify-between">
        <ListHeading value={heading} />
        <Sort />
      </div>

      {movies.results.length > 0 ? (
        <>
          <ListContainer>
            {movies.results.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </ListContainer>
        </>
      ) : (
        <EmptyListMessage />
      )}
    </section>
  );
}

export function ListHeading({ value }: { value: string }) {
  return <h2 className="text-xl font-semibold">{value}</h2>;
}

export function ListContainer({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 grid grid-cols-5 gap-4">{children}</div>;
}

export function EmptyListMessage() {
  return <p className="mt-3">No data in the list</p>;
}

export default MovieList;
