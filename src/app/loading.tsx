import { MovieListSkeleton } from "@/components/Skeleton/Skeleton";

export default function Loading() {
  return (
    <div>
      <MovieListSkeleton amount={20} />
    </div>
  );
}
