import { Loader2, Search } from "lucide-react";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import { getShows, searchShows } from "../services/get-shows";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchMovies = async () => {
      setLoading(true);
      setError("");
      try {
        const trimmed = query.trim();
        const result = trimmed ? await searchShows(trimmed) : await getShows();
        if (!isCancelled) setMovies(result);
      } catch (err) {
        console.log(err);
        if (!isCancelled) {
          setError("Something went wrong while loading movies. Please try again.");
        }
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };

    const timeout = setTimeout(fetchMovies, 400);
    return () => {
      isCancelled = true;
      clearTimeout(timeout);
    };
  }, [query]);

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <div className="max-w-xl mx-auto mb-10">
        <div className="flex items-center gap-3 bg-surface border border-border rounded-2xl px-4 py-3 shadow-2xl focus-within:border-accent transition-colors">
          <Search size={20} className="text-muted shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie..."
            className="w-full bg-transparent outline-none text-white placeholder:text-muted"
          />
        </div>
      </div>

      {loading && (
        <div className="flex justify-center items-center gap-2 py-20 text-muted">
          <Loader2 className="animate-spin text-accent" size={20} /> Loading movies...
        </div>
      )}

      {!loading && error && (
        <p className="text-center text-accent py-20">{error}</p>
      )}

      {!loading && !error && movies.length === 0 && (
        <p className="text-center text-muted py-20">
          No movies found. Try a different search.
        </p>
      )}

      {!loading && !error && movies.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onSeeDetails={setSelectedMovie} />
          ))}
        </div>
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default Movies;