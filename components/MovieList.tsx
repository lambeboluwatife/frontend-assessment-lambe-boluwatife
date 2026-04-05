"use client";
import Image from "next/image";
import { useState } from "react";
import { MediaArray, Mode } from "@/types/media";

interface MovieListProps {
  movies: MediaArray;
  tvShows: MediaArray;
}

const MovieList = ({ movies, tvShows }: MovieListProps) => {
  const [mode, setMode] = useState<Mode>("movie");

  // Get the current data based on mode
  const displayData = mode === "movie" ? movies : tvShows;

  return (
    <section>
      <div className="flex bg-surface-container border border-primary rounded-lg p-1 mb-6 w-fit">
        {(["movie", "tv"] as Mode[]).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => {
              setMode(option);
            }}
            className={`px-4 py-2 text-on-primary rounded text-xs font-label font-medium tracking-widest transition-all duration-200 cursor-pointer ${
              mode === option
                ? "bg-primary"
                : "text-on-surface-variant hover:text-primary/80"
            }`}
          >
            {option === "movie" ? "Movies" : "TV Shows"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {displayData.map((item) => (
          <article key={item.id} className="group cursor-pointer relative">
            <div className="relative overflow-hidden aspect-[2/3] transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_0_40px_-5px_rgba(230,195,100,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
              {item.poster_path && (
                <Image
                  alt={item.name || item.title || "Untitled"}
                  width={300}
                  height={450}
                  className="w-full h-full object-cover"
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                />
              )}
              <div className="absolute left-0 top-0 h-full w-2 film-strip-edge z-20 opacity-30"></div>
              <div className="absolute right-0 top-0 h-full w-2 film-strip-edge z-20 opacity-30"></div>
              <div className="absolute top-4 right-0 translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-primary text-on-primary px-3 py-1 font-label text-sm font-bold notched-corner z-30">
                {item.vote_average.toFixed(1)}
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2 relative">
              <div className="flex justify-between items-start gap-4">
                <h3 className="font-headline text-on-primary text-2xl font-bold tracking-tight leading-tight group-hover:text-primary transition-colors">
                  {(item.name || item.title || "Untitled").toUpperCase()}
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-label text-xs tracking-widest text-on-surface-variant">
                  {
                    (item.first_air_date || item.release_date || "N/A")?.split(
                      "-",
                    )[0]
                  }
                </span>
                <span className="w-1 h-1 bg-primary"></span>
                <span className="font-label text-xs tracking-widest text-on-surface-variant uppercase">
                  {mode === "movie" ? "Film" : "Series"}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MovieList;
