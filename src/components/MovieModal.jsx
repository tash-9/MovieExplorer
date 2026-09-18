import { Calendar, Star, X } from "lucide-react";
import { useEffect } from "react";

const MovieModal = ({ movie, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!movie) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      <div className="bg-surface border border-border w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <div className="h-56 sm:h-72 bg-background">
            {movie.backdrop ? (
              <img
                src={movie.backdrop}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted">
                No Image Available
              </div>
            )}
          </div>
          {/* Hero overlay: black -> transparent */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
            }}
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 bg-black/70 hover:bg-accent cursor-pointer rounded-full p-2 text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">{movie.title}</h2>

          <div className="flex flex-wrap items-center gap-5 text-sm text-muted">
            <span className="flex items-center gap-1">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              Rating: {movie.rating ?? "N/A"}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              Release: {movie.releaseDate}
            </span>
            {movie.runtime && <span>Runtime: {movie.runtime} min</span>}
            <span className="px-2 py-0.5 rounded-full border border-border text-xs text-muted">
              {movie.status}
            </span>
          </div>

          {movie.genres.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="text-xs bg-accent/15 text-accent px-3 py-1 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

          <div>
            <h3 className="text-sm font-semibold text-muted mb-1">Overview</h3>
            <p className="text-white/80 leading-relaxed">{movie.summary}</p>
          </div>

          <p className="text-sm text-muted">Network: {movie.network}</p>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={onClose}
              className="text-sm font-medium bg-background border border-border hover:border-accent hover:text-accent cursor-pointer transition-colors px-5 py-2 rounded-full text-white"
            >
              ❌ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;