import { Clapperboard } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-100">
          <Clapperboard className="text-blue-400" size={24} />
          Movie<span className="text-blue-400">Explorer</span>
        </Link>
        <nav>
          <Link
            to="/movies"
            className="text-sm font-medium bg-blue-600 hover:bg-blue-500 hover:scale-105 transition-all px-5 py-2 rounded-full text-gray-100"
          >
            Movies
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
