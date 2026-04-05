import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
        Welcome to The Archive
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Cinematic Library of movies and TV shows from the 20th and 21st
        centuries.
      </p>
    </div>
  );
}
