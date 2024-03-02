"use client";

import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Detail, Video } from "@/lib/types";
import DetailSkeleton from "../Skeleton/Skeleton";
import { Content } from "./Content";

export default function DetailModal() {
  const [movie, setMovie] = useState<Detail | null>(null);
  const [video, setVideo] = useState<Video | null>(null);
  const [error, setError] = useState("");
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const detail = searchParams?.get("detail");

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(`/api/detail/${detail}`);
        const { data } = await res.json();
        if (data.movie.status_code !== 34) {
          setMovie(data.movie);
          setVideo(data.video);
        } else {
          console.log(data);

          setError("Failed to fetch movie.");
        }
      } catch (error) {
        setError("Something went wrong");
      }
    }
    if (detail) {
      setMovie(null);
      setVideo(null);
      setError("");
      fetchMovie();
    }
  }, [detail]);

  if (!detail) {
    return null;
  }
  if (!movie && !error) {
    return <DetailSkeleton />;
  }

  return (
    <div
      aria-label="modal"
      className="fixed inset-0 z-40 flex size-full items-center justify-center bg-slate-800/15 shadow-md backdrop-blur-sm "
    >
      <div
        aria-label="modal-content"
        className="flex h-3/4 w-lg flex-col gap-3 rounded-xl bg-black p-5"
      >
        <div className="flex justify-end">
          <button
            onClick={() => {
              const params = new URLSearchParams(searchParams!);
              params.delete("detail");
              replace(`${pathname}?${params.toString()}`);
            }}
            aria-label="close-modal"
            className="flex w-fit rounded-full p-3 transition-colors duration-200 ease-in-out hover:bg-white/70"
          >
            <FaXmark aria-hidden="true" className="text-base text-white" />
          </button>
        </div>

        {error && <p className="text-white">{error}</p>}
        {movie && video && <Content movie={movie} video={video} />}
      </div>
    </div>
  );
}
