import { Calendar, Star, X } from "lucide-react";
import { useEffect } from "react";

const MovieModal = ({ movie, onClose }) => {
  // Allow closing the modal with the Escape key.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!movie) return null;

  // Close when the user clicks the dark backdrop, not the modal itself.
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/70 p-4"
    >
      <div className="bg-gray-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <div className="h-56 sm:h-72 bg-gray-800">
            {movie.backdrop ? (
              <img
                src={movie.backdrop}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                No Image Available
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 bg-gray-950/70 hover:bg-gray-950 cursor-pointer rounded-full p-2 text-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-100">{movie.title}</h2>

          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-300">
            <span className="flex items-center gap-1">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              Rating: {movie.rating ?? "N/A"}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              Release: {movie.releaseDate}
            </span>
            {movie.runtime && <span>Runtime: {movie.runtime} min</span>}
            <span className="px-2 py-0.5 rounded-full border border-gray-700 text-xs text-gray-400">
              {movie.status}
            </span>
          </div>

          {movie.genres.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="text-xs bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-1">Overview</h3>
            <p className="text-gray-300 leading-relaxed">{movie.summary}</p>
          </div>

          <p className="text-sm text-gray-500">Network: {movie.network}</p>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={onClose}
              className="text-sm font-medium bg-gray-800 hover:bg-gray-700 cursor-pointer transition-colors px-5 py-2 rounded-full text-gray-100"
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
