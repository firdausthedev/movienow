import { FaAngleDown } from "react-icons/fa";
import { Suspense } from "react";
import Link from "next/link";
import { getGenres } from "@/lib/actions";

export function DropDownToggler() {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="categories dropdown"
      data-dropdown-toggle="dropdown"
      className="group mr-10 flex h-full cursor-pointer list-none items-center justify-center px-4 text-semiXl font-medium
         text-gray transition duration-150 hover:bg-darkBlue hover:text-white focus:bg-darkBlue focus:text-white"
    >
      Categories{" "}
      <FaAngleDown className="ml-2 mt-1 inline transition duration-300 group-hover:rotate-180 group-focus:rotate-180" />
      <Suspense
        fallback={
          <div className="absolute left-0 top-12 z-20 hidden w-full flex-col items-center rounded-sm bg-darkBlue p-10 text-gray group-hover:flex group-focus:flex">
            <p>Loading...</p>
          </div>
        }
      >
        <DropDown />
      </Suspense>
    </div>
  );
}

export async function DropDown() {
  const genres = await getGenres();
  return (
    <div
      id="dropdown"
      role="list"
      className="absolute left-0 top-12 z-20 hidden w-full flex-col items-center rounded-sm bg-darkBlue p-10 text-gray group-hover:flex group-focus:flex"
    >
      <div className="mx-auto">
        <h2 className="text-xl text-white">Genre</h2>
        <div className="mt-4 columns-3">
          <ul>
            {genres.genres.map((genre) => (
              <GenreBtn key={genre.id} value={genre.name} id={genre.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function GenreBtn({ value, id }: { value: string; id: number }) {
  return (
    <li className="flex">
      <Link
        className="w-full list-none rounded-md p-3 text-start transition-colors duration-150 hover:bg-white hover:text-dark"
        href={{ pathname: "/", query: { genre: id } }}
        replace={false}
        prefetch={false}
      >
        {value}
      </Link>
    </li>
  );
}
