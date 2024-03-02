import Carousell from "@/components/Carousell/Carousell";
import MovieList from "@/components/MovieList/List";
import { getMovies, getMoviesCarousel } from "@/lib/actions";

export default async function Home() {
  const moviesCarousel = await getMoviesCarousel();
  const movieList = await getMovies();
  return (
    <main>
      <Carousell movies={moviesCarousel} />
      <MovieList movies={movieList} heading="Recent releases" />
    </main>
  );
}
