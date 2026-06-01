import { useInfiniteQuery } from '@tanstack/react-query'
import { getMovies } from '../api/movie'
import { queryKeys } from '../constants/querry-keys'

export const useMovies = () => {
  return useInfiniteQuery({
    queryKey: queryKeys.movies.all,
    queryFn: ({ pageParam }) => getMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
  })
}
