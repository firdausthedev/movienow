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
  return (
    <div
      className="relative flex h-[590px] rounded-xl bg-cover bg-top bg-no-repeat px-10"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w780${movie.backdrop_path}')`,
      }}
    >
      <div className="absolute inset-0 h-full bg-gradient-to-r from-black" />
      <div className="z-10 my-auto flex h-3/4 max-w-sm flex-col items-start justify-center gap-5 text-white">
        <h2 className="text-semiXl font-semibold">{`#${index + 1} Most popular`}</h2>
        <h3 className="text-3xl font-bold">
          {movie.title} <span>({movie.release_date.split("-")[0]})</span>
        </h3>

        <p className="text-base font-normal">{movie.overview}</p>
        <Link
          href="/"
          className="rounded-lg bg-white p-5 text-base font-semibold text-black transition-transform duration-150 hover:scale-105 hover:text-gray"
        >
          More Details
        </Link>
      </div>
    </div>
  );
}

export default CarousellItem;
