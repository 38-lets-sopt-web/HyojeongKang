import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useMovies } from '../hooks/use-movies'
import MovieCard from '../ui/movie-card'
import type { Movie } from '../types/movie'
import { RATING_OPTIONS } from '../constants/rating'

export default function MovieListPage() {
  const [ratingFilter, setRatingFilter] = useState<number | null>(null)
  const { data, isPending, isError, fetchNextPage, hasNextPage } =
    useMovies(ratingFilter)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  if (isPending) return <p>불러오는 중...</p>
  if (isError) return <p>에러가 발생했습니다.</p>

  const movies = data.pages.flatMap((page) => page.results)

  return (
    <div className="min-h-screen px-50 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-white">🎬 Movie Explorer</h1>
        <select
          value={ratingFilter ?? ''}
          onChange={(e) =>
            setRatingFilter(
              e.target.value === '' ? null : Number(e.target.value),
            )
          }
          className="bg-gray-800 text-white px-6 py-3 text-base rounded-lg border border-gray-600 focus:outline-none cursor-pointer"
        >
          {RATING_OPTIONS.map((opt) => (
            <option key={opt.label} value={opt.value ?? ''}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div ref={ref} className="h-10" />
    </div>
  )
}
