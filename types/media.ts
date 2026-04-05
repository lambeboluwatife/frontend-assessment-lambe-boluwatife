/**
 * Media type - represents a TV show or Movie from the API
 */
export interface Media {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  name?: string; // For TV shows
  title?: string; // For movies
  original_name?: string;
  overview: string;
  poster_path: string | null;
  media_type: "tv" | "movie";
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date?: string;
  release_date?: string; // For movies
  vote_average: number;
  vote_count: number;
  origin_country?: string[];
}

/**
 * Array of media items
 */
export type MediaArray = Media[];

export type Mode = "movie" | "tv";
