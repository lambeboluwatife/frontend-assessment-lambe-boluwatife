export const revalidate = 3600; // Revalidate every hour
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const fetchMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`,
  );
  const data = await response.json();
  return data.results;
};

const Home = async () => {
  const movies = await fetchMovies();
  console.log("Fetched movies:", movies);

  return (
    <div>
      <h1>
        Welcome to the Content Explorer! This is a small web application that
        fetches data from a public API and presents it in a browseable,
        searchable interface. Explore the latest trending movies and TV shows,
        discover new content, and find your next favorite! Happy browsing!
      </h1>
    </div>
  );
};

export default Home;
