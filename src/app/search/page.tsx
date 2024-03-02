import MovieCard from "@/components/MovieList/Card";
import MovieList, {
  EmptyListMessage,
  ListContainer,
  ListHeading,
} from "@/components/MovieList/List";
import { getMoviesByActorId, getSearch } from "@/lib/actions";
import { Movie } from "@/lib/types";

function MoviesByActor({ movies, name }: { movies: Movie[]; name: string }) {
  return (
    <main id="movies" className="container py-10">
      <ListHeading value={`Movies for: ${name}`} />
      {movies.length > 0 ? (
        <ListContainer>
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </ListContainer>
      ) : (
        <EmptyListMessage />
      )}
    </main>
  );
}

export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const search = searchParams["query"] ?? "";
  const pageNumber = searchParams["page"] ?? "1";
  const person = searchParams["person"] ?? "";
  const name = searchParams["name"] ?? "";

  let movies;

  if (person) {
    movies = await getMoviesByActorId(person, pageNumber);
    return <MoviesByActor movies={movies.cast.slice(0, 40)} name={name} />;
  } else {
    movies = await getSearch(search, pageNumber);
    return (
      <main>
        <MovieList
          page={pageNumber}
          movies={movies}
          heading={`Movies for: ${search}`}
        />
      </main>
    );
  }
}
