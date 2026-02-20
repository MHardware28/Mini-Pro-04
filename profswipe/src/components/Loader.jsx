export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-6">
      {/* DaisyUI skeleton shaped like the card */}
      <div className="w-[360px] h-[520px] bg-base-200 rounded-3xl overflow-hidden animate-pulse">
        <div className="skeleton w-full h-48 rounded-none" />
        <div className="p-4 space-y-3">
          <div className="skeleton h-5 w-3/4 rounded-lg" />
          <div className="skeleton h-4 w-1/2 rounded-lg" />
          <div className="skeleton h-3 w-1/3 rounded-lg" />
          <div className="space-y-2 mt-4">
            <div className="skeleton h-2 w-full rounded-full" />
            <div className="skeleton h-2 w-full rounded-full" />
            <div className="skeleton h-2 w-full rounded-full" />
          </div>
          <div className="flex gap-2 mt-4">
            <div className="skeleton h-5 w-16 rounded-full" />
            <div className="skeleton h-5 w-20 rounded-full" />
            <div className="skeleton h-5 w-14 rounded-full" />
          </div>
          <div className="skeleton h-10 w-full rounded-xl mt-4" />
        </div>
      </div>

      <div className="flex items-center gap-3 text-base-content/40">
        <span className="loading loading-dots loading-md" />
        <span className="text-sm font-display">Loading professors...</span>
      </div>
    </div>
  )
}
