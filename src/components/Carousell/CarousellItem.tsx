import Link from "next/link";

function CarousellItem({
  movie,
  index,
}: {
  movie: {
    backdrop_path: string | null;
    release_date: string;
    title: string;
    id: number;
    overview: string;
  };
  index: number;
}) {
  const shortedOverview = movie.overview.substring(0, 100) + "...";
  return (
    <div
      className="relative flex h-auto rounded-xl bg-cover bg-top bg-no-repeat px-10 py-12 md:h-lg md:py-0"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w780${movie.backdrop_path}')`,
      }}
    >
      <div className="absolute inset-0 h-full bg-gradient-to-r from-black" />
      <div className="z-10 my-auto flex h-full max-w-sm flex-col items-start justify-center gap-2 text-white  md:h-3/4 md:gap-5">
        <h2 className="text-sm font-semibold md:text-semiXl">{`#${index + 1} Most popular`}</h2>
        <h3 className="text-lg font-bold md:text-3xl">
          {movie.title} <span>({movie.release_date.split("-")[0]})</span>
        </h3>

        <p className="hidden text-xs font-normal md:block md:text-base">
          {movie.overview}
        </p>
        <p className="block text-xs font-normal md:hidden md:text-base">
          {shortedOverview}
        </p>
        <Link
          href={{ query: { detail: movie.id } }}
          className="mt-3 rounded-lg bg-white p-3 text-xs font-semibold text-black transition-transform duration-150 hover:scale-105 hover:text-gray md:mt-0 md:p-5 md:text-base"
        >
          More Details
        </Link>
      </div>
    </div>
  );
}

export default CarousellItem;
