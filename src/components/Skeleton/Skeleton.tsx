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

export default function DetailSkeleton() {
  return (
    <div
      aria-label="modal"
      className="fixed inset-0 z-40 flex size-full items-center justify-center bg-slate-800/15 shadow-md backdrop-blur-sm "
    >
      <div
        aria-label="modal-content"
        className="flex h-3/4 w-lg flex-col gap-3 rounded-xl bg-black p-4"
      >
        <div className="flex justify-end">
          <div className="h-4 w-8 animate-pulse rounded-sm bg-gray" />
        </div>
        <div className="size-full animate-pulse rounded-sm bg-gray" />
        <div className="size-full animate-pulse rounded-sm bg-gray" />
      </div>
    </div>
  );
}
