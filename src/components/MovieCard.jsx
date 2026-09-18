import { Calendar, Star } from "lucide-react";

const MovieCard = ({ movie, onSeeDetails }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.03] hover:border-gray-700 transition-all duration-300 flex flex-col">
      <div className="aspect-[2/3] bg-gray-800 overflow-hidden">
        {movie.poster ? (
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm text-center px-2">
            No Image Available
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-3 flex-1">
        <h3 className="text-base font-semibold text-gray-100 line-clamp-1" title={movie.title}>
          {movie.title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-gray-400">
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
          className="mt-auto text-sm font-medium bg-blue-600 hover:bg-blue-500 hover:scale-105 transition-all cursor-pointer py-2 rounded-full text-gray-100"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
