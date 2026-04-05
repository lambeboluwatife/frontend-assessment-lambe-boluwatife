"use client";

/**
 * SkeletonLoader component - displays a shimmer loading animation
 * for media items while data is being fetched
 */
const SkeletonLoader = () => {
  return (
    <div className="flex flex-col gap-6">
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
      <div className="aspect-2/3 bg-surface-container-high relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="h-8 bg-surface-container-high w-3/4"></div>
        <div className="h-4 bg-surface-container-high w-1/2"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
