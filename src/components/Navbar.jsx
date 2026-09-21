import { Clapperboard, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

const navLinks = [
  { to: "/", label: "Home" },
];

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <Clapperboard className="text-red-500" size={24} />
          Movie<span className="text-red-500">Explorer</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium transition-all ${
                  isActive ? "text-white" : "text-muted hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            to="/movies"
            className="text-sm font-medium bg-red-600 hover:bg-red-700 hover:scale-105 transition-all px-5 py-2 rounded-full text-white"
          >
            Explore Now
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white p-2 -mr-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <nav className="sm:hidden border-t border-border px-5 py-4 flex flex-col gap-4 bg-background">
          {navLinks.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium py-2 ${
                  isActive ? "text-white" : "text-muted hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            to="/movies"
            onClick={() => setIsMenuOpen(false)}
            className="text-center text-sm font-medium bg-red-600 hover:bg-red-700 transition-all px-5 py-3 rounded-full text-white"
          >
            Explore Now
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;