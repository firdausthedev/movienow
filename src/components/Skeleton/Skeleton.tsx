export function CarousellSkeleton() {
  return (
    <div className="mb-10 flex flex-col items-center gap-5">
      <div className="container h-lg animate-pulse rounded-xl bg-gray" />
      <div className="flex h-4 w-40 animate-pulse rounded-sm bg-gray" />
    </div>
  );
}

export function MovieListSkeleton({ amount }: { amount: number }) {
  return (
    <div className="container py-10">
      <div className="h-4 w-32 animate-pulse rounded-sm bg-gray" />
      <div className="mt-4 grid grid-cols-5 gap-4">
        {Array.from({ length: amount }, (_, i) => (
          <div
            key={i}
            className="h-40 w-full animate-pulse rounded-xl bg-gray"
          />
        ))}
      </div>
    </div>
  );
}