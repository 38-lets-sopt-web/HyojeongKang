import type { Movie } from '../types/movie'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

interface MovieCardProps {
  movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="cursor-pointer rounded-xl overflow-hidden bg-white hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="w-full aspect-2/3 object-cover"
      />

      <div className="px-4 py-4 pb-6 flex flex-col gap-2">
        <h2 className="font-semibold text-base truncate text-gray-900">
          {movie.title}
        </h2>
        <p className="text-sm text-gray-500">{movie.release_date}</p>
        <p className="text-sm text-yellow-500">
          ⭐ {movie.vote_average.toFixed(1)}
        </p>
        <p className="text-xs text-gray-400 line-clamp-2">{movie.overview}</p>
      </div>
    </div>
  )
}
