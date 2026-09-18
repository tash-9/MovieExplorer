import { Clapperboard } from "lucide-react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Cinematic red glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-3xl" />

      {/* Hero overlay: black -> transparent */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 60%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center gap-6">
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
          <Link
            to="/movies"
            className="text-lg font-medium hover:scale-105 transition-all bg-accent hover:bg-accent/90 px-8 py-3 rounded-full text-white"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;