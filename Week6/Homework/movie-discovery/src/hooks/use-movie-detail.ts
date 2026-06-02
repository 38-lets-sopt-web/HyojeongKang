import { useQuery } from '@tanstack/react-query'
import { getMovieDetail } from '../api/movie'
import { queryKeys } from '../constants/querry-keys'

export const useMovieDetail = (movieId: number) => {
  return useQuery({
    queryKey: queryKeys.movies.detail(movieId),
    queryFn: () => getMovieDetail(movieId),
  })
}
