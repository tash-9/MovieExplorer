import { Calendar, Star } from "lucide-react";

const MovieCard = ({ movie, onSeeDetails }) => {
  return (
    <div className="bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.03] hover:border-accent/50 transition-all duration-300 flex flex-col">
      <div className="aspect-[2/3] bg-background overflow-hidden">
        {movie.poster ? (
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted text-sm text-center px-2">
            No Image Available
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-3 flex-1">
        <h3 className="text-base font-semibold text-white line-clamp-1" title={movie.title}>
          {movie.title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-muted">
          <span className="flex items-center gap-1">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            {movie.rating ?? "N/A"}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {movie.year}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onSeeDetails(movie)}
          className="mt-auto text-sm font-medium bg-accent hover:bg-accent/90 hover:scale-105 transition-all cursor-pointer py-2 rounded-full text-white"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;