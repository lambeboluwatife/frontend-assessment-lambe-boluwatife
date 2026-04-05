import { MediaArray } from "@/types/media";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

/**
 * Fetch trending movies for the day
 */
export const fetchTrendingMovies = async (): Promise<MediaArray> => {
  try {
    const response = await fetch(
      `${baseUrl}/trending/movie/day?api_key=${apiKey}`
    );
    if (!response.ok) throw new Error("Failed to fetch movies");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

/**
 * Fetch trending TV shows for the day
 */
export const fetchTrendingTV = async (): Promise<MediaArray> => {
  try {
    const response = await fetch(
      `${baseUrl}/trending/tv/day?api_key=${apiKey}`
    );
    if (!response.ok) throw new Error("Failed to fetch TV shows");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching TV shows:", error);
    return [];
  }
};

/**
 * Fetch media by type (movie or tv)
 */
export const fetchTrendingByType = async (
  type: "movie" | "tv"
): Promise<MediaArray> => {
  return type === "movie" ? fetchTrendingMovies() : fetchTrendingTV();
};
