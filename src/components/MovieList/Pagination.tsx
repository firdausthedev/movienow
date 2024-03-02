"use client";

import { useCallback } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function PaginateBtn({
  page,
  isNext,
  totalPage,
}: {
  page: string;
  isNext: boolean;
  totalPage: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPageNum = parseInt(page);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams!.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  if (
    (currentPageNum === 1 && !isNext) ||
    (isNext && currentPageNum === totalPage)
  ) {
    return <span aria-hidden="true" />;
  }

  return (
    <Link
      scroll={false}
      replace
      href={
        pathname +
        "?" +
        createQueryString(
          "page",
          `${isNext ? currentPageNum + 1 : currentPageNum - 1}`,
        )
      }
      className="rounded-md bg-white px-5 py-2 text-sm text-black transition duration-150 hover:scale-105 hover:text-gray"
    >
      Page {isNext ? currentPageNum + 1 : currentPageNum - 1}
      {!isNext ? (
        <FaArrowLeft className="ml-2 inline" />
      ) : (
        <FaArrowRight className="ml-2 inline" />
      )}
    </Link>
  );
}
