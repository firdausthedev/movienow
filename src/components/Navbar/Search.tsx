"use client";

import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";

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
      <SearchBox />
    </>
  );
}

function SearchBox() {
  return (
    <div className="absolute left-0 top-12 z-10 hidden w-full rounded-sm bg-darkBlue p-7  peer-has-[:checked]:block">
      <div className="relative">
        <input
          type="text"
          autoComplete="off"
          className="h-20 w-full rounded-md border-none bg-charcoal pl-16 pr-6 text-xl font-semibold text-white"
          placeholder="Search"
        />
        <button className="absolute inset-y-0 left-0 my-auto flex items-center pl-5">
          <FaMagnifyingGlass className="pointer-events-none text-3xl text-gray" />
        </button>
      </div>
    </div>
  );
}
