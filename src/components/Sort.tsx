"use client";

import { FaAngleDown } from "react-icons/fa6";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function Sort() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sort = searchParams?.get("sort");
  const select = searchParams?.get("select") ?? "Popularity";

  function handleSortClick() {
    const params = new URLSearchParams(searchParams!);
    if (!sort) {
      params.set("sort", "true");
    } else {
      params.delete("sort");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  if (pathname !== "/") {
    return null;
  }
  return (
    <div className="relative">
      <button
        onClick={handleSortClick}
        id="sort-menu"
        data-dropdown-toggle="dropdown"
        className="flex w-36 items-center justify-between rounded-md bg-slate-800 p-2 text-sm hover:text-gray"
        type="button"
      >
        {select}
        <FaAngleDown aria-hidden="true" />
      </button>
      <div
        id="dropdown"
        className={`absolute z-10 mt-3 w-36 divide-y rounded-lg bg-slate-800 shadow ${sort ? "block" : "hidden"}`}
      >
        <ul className="py-2 text-sm" aria-labelledby="sort-menu">
          <Selection value="Popularity" />
          <Selection value="Recent" />
          <Selection value="Rating" />
        </ul>
      </div>
    </div>
  );
}

function Selection({ value }: { value: string }) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleSelectClick() {
    const params = new URLSearchParams(searchParams!);
    params.set("select", value);
    params.delete("sort");

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <li
      className={`flex w-full items-center justify-between px-4 py-2 hover:bg-slate-900`}
    >
      <button onClick={handleSelectClick} type="button" className="flex flex-1">
        {value}
      </button>
    </li>
  );
}
