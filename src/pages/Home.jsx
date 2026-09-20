import { Clapperboard, Eye, Loader2, MousePointerClick, Search } from "lucide-react";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import { getShows } from "../services/get-shows";

const steps = [
  {
    icon: Search,
    title: "1. Browse or search",
    description: "Scroll the grid below, or use the search icon in the navbar to look up a title.",
  },
  {
    icon: MousePointerClick,
    title: "2. Pick a card",
    description: "Tap \"See Details\" on any movie card that catches your eye.",
  },
  {
    icon: Eye,
    title: "3. View the details",
    description: "A modal opens with the rating, release date, genres and full overview.",
  },
];

const Home = () => {
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
        const result = await getShows();
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

    fetchMovies();
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 60%, rgba(0,0,0,0.9) 100%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5">
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-6 py-20">
            <div className="flex items-center gap-2 text-accent">
              <Clapperboard size={36} />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              DISCOVER <span className="text-accent">MOVIES</span>
            </h1>
            <p className="max-w-xl text-muted text-lg">
              Explore and discover your favorite movies and TV shows from around
              the world.
            </p>
            <a
            
              href="#movies"
              className="text-lg font-medium hover:scale-105 transition-all bg-accent hover:bg-accent/90 px-8 py-3 rounded-full text-white"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="bg-accent/5">
        <div className="max-w-6xl mx-auto px-5 py-14">
          <h2 className="text-2xl font-bold text-white text-center mb-8">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-surface border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-3"
              >
                <div className="h-12 w-12 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-muted text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Movie grid */}
      <div id="movies" className="max-w-6xl mx-auto px-5 py-16 scroll-mt-20">
        {loading && (
          <div className="flex justify-center items-center gap-2 py-20 text-muted">
            <Loader2 className="animate-spin text-accent" size={20} /> Loading movies...
          </div>
        )}

        {!loading && error && (
          <p className="text-center text-accent py-20">{error}</p>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onSeeDetails={setSelectedMovie} />
            ))}
          </div>
        )}
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default Home;