import MovieList from "@/components/MovieList/List";
import { getMovies } from "@/lib/actions";

export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const search = searchParams["query"] ?? "";
  const pageNumber = searchParams["page"] ?? "1";

  const movies = await getMovies();
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
