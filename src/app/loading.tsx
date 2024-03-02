import {
  CarousellSkeleton,
  MovieListSkeleton,
} from "@/components/Skeleton/Skeleton";

export default function Loading() {
  return (
    <div>
      <CarousellSkeleton />
      <MovieListSkeleton amount={20} />
    </div>
  );
}
