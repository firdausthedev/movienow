import Carousell from "@/components/Carousell/Carousell";
import MovieList from "@/components/MovieList/List";
import { getMovies, getMoviesCarousel } from "@/lib/actions";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const pageNumber = searchParams["page"] ?? "1";
  const genre = searchParams["genre"] ?? "";
  const select = searchParams["select"] ?? "";
  const moviesCarousel = await getMoviesCarousel(genre);
  const movieList = await getMovies(genre, select, pageNumber);
  return (
    <main>
      <Carousell movies={moviesCarousel} />
      <MovieList
        movies={movieList}
        heading="Recent releases"
        page={pageNumber}
      />
    </main>
  );
}
