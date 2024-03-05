"use client";

import { MoviesResponse } from "@/lib/types";
import styles from "./content.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
export default function Recommendation({
  recommendations,
  max,
}: {
  max: number;
  recommendations: MoviesResponse;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams!.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  if (recommendations.results.length <= 0) return null;

  return (
    <div className="flex flex-col gap-2">
      <h3 className={styles.header}>Recommended Movies</h3>
      <div className={styles.customLinkContainer}>
        {recommendations.results.slice(0, max).map((movie, index) => {
          const shortedTitle =
            movie.title.length > 50
              ? movie.title.slice(0, 50) + "..."
              : movie.title;
          return (
            <Link
              scroll={false}
              prefetch={false}
              href={
                pathname +
                "?" +
                createQueryString("detail", `${movie.id.toString()}`)
              }
              key={index}
              className={styles.customLink}
            >
              {shortedTitle}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
