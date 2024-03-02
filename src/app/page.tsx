import MovieList from "@/components/MovieList/List";
import { getMovies } from "@/lib/actions";

export default async function Home() {
  const movieList = await getMovies();
  return (
    <main>
      <MovieList movies={movieList} heading="Recent releases" />
    </main>
  );
}
