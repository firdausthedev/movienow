import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import { getGenres } from "@/lib/actions";

export function MobileMenu() {
  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <>
      <label
        htmlFor="mobile-menu"
        className="peer relative flex h-full cursor-pointer items-center px-4 text-base text-white hover:bg-darkBlue focus:bg-darkBlue has-[:checked]:bg-darkBlue md:hidden"
      >
        <input type="checkbox" id="mobile-menu" className="peer hidden" />
        Menu{" "}
        <FaAngleDown className="inline transition duration-300 peer-checked:rotate-180 peer-focus:rotate-180" />
      </label>
      <MobileList />
    </>
  );
}

async function MobileList() {
  const genres = await getGenres();
  return (
    <div className="absolute left-0 top-12 z-30 hidden w-full rounded-sm bg-darkBlue p-7 peer-has-[:checked]:block md:peer-has-[:checked]:hidden ">
      <ul className="flex flex-col gap-4">
        <Link href="/">Home</Link>
        <Link href="/saved">Saved</Link>
        <Link href="#movies">Movies</Link>
        <div className="rounded-sm border border-gray p-3">
          <h2>Categories </h2>
          <div className="mt-4 columns-3">
            <ul className="flex flex-col gap-2">
              {genres.genres.map((genre) => (
                <li key={genre.id}>
                  <Link href={{ pathname: "/", query: { genre: genre.id } }}>
                    {genre.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}
