import { Sort } from "../Sort";
import MovieCard from "./Card";
import { MoviesResponse } from "@/lib/types";
import PaginateBtn from "./Pagination";

async function MovieList({
  page,
  movies,
  heading,
}: {
  page: string;
  movies: MoviesResponse;
  heading: string;
}) {
  return (
    <section id="movies" className="container py-5 md:py-10">
      <div className="flex items-center justify-between">
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
          <div className="mt-10 flex justify-between">
            <PaginateBtn
              page={page}
              isNext={false}
              totalPage={movies.total_pages}
            />
            <PaginateBtn
              page={page}
              isNext={true}
              totalPage={movies.total_pages}
            />
          </div>
        </>
      ) : (
        <EmptyListMessage />
      )}
    </section>
  );
}

export function ListHeading({ value }: { value: string }) {
  return <h2 className="text-base font-semibold md:text-xl">{value}</h2>;
}

export function ListContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-5">{children}</div>
  );
}

export function EmptyListMessage() {
  return <p className="mt-3">No data in the list</p>;
}

export default MovieList;
