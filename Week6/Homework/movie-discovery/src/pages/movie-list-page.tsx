import { useMovies } from '../hooks/use-movies'
import MovieCard from '../ui/movie-card'
import type { Movie } from '../types/movie'

export default function MovieListPage() {
  const { data, isPending, isError } = useMovies()

  if (isPending) return <p>불러오는 중...</p>
  if (isError) return <p>에러가 발생했습니다.</p>

  const movies = data.pages.flatMap((page) => page.results)

  return (
    <div className="min-h-screen bg-gray-950 px-8 py-10">
      <div className="grid grid-cols-4 gap-6">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
