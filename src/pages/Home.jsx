import { Clapperboard } from "lucide-react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-600/30 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-24 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center gap-6">
          <div className="flex items-center gap-2 text-blue-400">
            <Clapperboard size={36} />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            DISCOVER <span className="text-blue-400">MOVIES</span>
          </h1>
          <p className="max-w-xl text-gray-400 text-lg">
            Explore and discover your favorite movies and TV shows from around
            the world.
          </p>
          <Link
            to="/movies"
            className="text-lg font-medium hover:scale-105 transition-all bg-blue-500 hover:bg-blue-400 px-8 py-3 rounded-full text-gray-100"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
