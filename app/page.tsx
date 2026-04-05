import MovieList from "@/components/MovieList";
import SkeletonLoader from "@/components/SkeletonLoader";
import { fetchTrendingMovies, fetchTrendingTV } from "@/lib/api";
import { Suspense } from "react";

export const revalidate = 3600; // Revalidate every hour

const MovieListFallback = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
    {Array.from({ length: 8 }).map((_, i) => (
      <SkeletonLoader key={i} />
    ))}
  </div>
);

const Home = async () => {
  const [movies, tvShows] = await Promise.all([
    fetchTrendingMovies(),
    fetchTrendingTV(),
  ]);

  return (
    <main className="pt-32 px-8 max-w-400 mx-auto">
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-primary/15 pb-8">
          <div>
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary mb-2 block">
              Cinematic Library
            </span>
            <h1 className="font-headline text-on-primary text-5xl md:text-7xl font-black tracking-tighter leading-none">
              THE ARCHIVE
            </h1>
          </div>
          <div className="font-label text-on-primary text-xs max-w-xs text-right opacity-60">
            Curated selections from the golden age of noir to contemporary
            auteur-driven masterpieces.
          </div>
        </div>
      </div>

      <Suspense fallback={<MovieListFallback />}>
        <MovieList movies={movies} tvShows={tvShows} />
      </Suspense>
    </main>
  );
};

export default Home;
