"use client";

import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useRef } from "react";

export function SearchCheckbox() {
  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <>
      <label
        htmlFor="search"
        className="peer relative size-12 cursor-pointer text-gray hover:bg-darkBlue focus:bg-darkBlue has-[:checked]:bg-darkBlue"
      >
        <input type="checkbox" id="search" className="peer hidden" />
        <FaMagnifyingGlass className="absolute inset-0 m-auto size-full p-3 peer-checked:hidden" />
        <FaXmark className="absolute inset-0 m-auto hidden size-full p-3 peer-checked:flex " />
      </label>
      <Suspense>
        <SearchBox />
      </Suspense>
    </>
  );
}

function SearchBox() {
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleSearch(term: string) {
    const query = term ? `?query=${encodeURIComponent(term)}` : "";
    router.push(`/search${query}`);
  }
  return (
    <div className="absolute left-0 top-12 z-10 hidden w-full rounded-sm bg-darkBlue p-7  peer-has-[:checked]:block">
      <div className="relative">
        <input
          type="text"
          autoComplete="off"
          className="h-20 w-full rounded-md border-none bg-charcoal pl-16 pr-6 text-xl font-semibold text-white"
          placeholder="Search"
          ref={inputRef}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSearch(e.currentTarget.value);
            }
          }}
          defaultValue={
            searchParams ? searchParams.get("query")?.toString() : ""
          }
        />
        <button
          className="absolute inset-y-0 left-0 my-auto flex items-center pl-5"
          onClick={() => {
            if (inputRef.current) {
              handleSearch(inputRef.current.value);
            }
          }}
        >
          <FaMagnifyingGlass className="pointer-events-none text-3xl text-gray" />
        </button>
      </div>
    </div>
  );
}
