import { Clapperboard, Search } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
          <Clapperboard className="text-accent" size={24} />
          Movie<span className="text-accent">Explorer</span>
        </Link>
        <nav>
          <Link
            to="/movies"
            aria-label="Search movies"
            className="flex items-center justify-center h-10 w-10 rounded-full border border-border text-white hover:border-accent hover:text-accent hover:scale-105 transition-all"
          >
            <Search size={18} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;