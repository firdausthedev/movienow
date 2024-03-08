import { Detail } from "@/lib/types";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

function SavedIcon({ movie }: { movie: Detail }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedMoviesString = localStorage.getItem("savedMovies");
    if (savedMoviesString) {
      try {
        const movies = JSON.parse(savedMoviesString);
        const isMovieSaved = movies.some((m: Detail) => m.id === movie.id);
        setIsSaved(isMovieSaved);
      } catch (error) {
        console.error("Error parsing saved movies:", error);
      }
    }
  }, [movie.id]);

  function handleSave() {
    // Get saved movies from localStorage
    // If there are no saved movies, create an empty array
    // Check if the movie is already saved
    // If it is, remove it from the saved movies
    // If it's not, add it to the saved movies
    // Save the updated movies to localStorage

    try {
      const savedMoviesString = localStorage.getItem("savedMovies");
      const movies = savedMoviesString ? JSON.parse(savedMoviesString) : [];
      const isMovieSaved = movies.some((m: Detail) => m.id === movie.id);

      if (!isMovieSaved) {
        const updatedMovies = [...movies, movie];
        localStorage.setItem("savedMovies", JSON.stringify(updatedMovies));
        setIsSaved(true);
      } else {
        const updatedMovies = movies.filter((m: Detail) => m.id !== movie.id);
        localStorage.setItem("savedMovies", JSON.stringify(updatedMovies));
        setIsSaved(false);
      }
    } catch (error) {
      console.error("Error saving movie:", error);
    }
  }

  return (
    <button
      aria-label="heart icon"
      className="transition-colors duration-150 hover:text-accent"
      onClick={handleSave}
    >
      {isSaved ? (
        <FaHeart className="inline text-accent" />
      ) : (
        <FaRegHeart className="inline" />
      )}
    </button>
  );
}

export default SavedIcon;
