import { client } from './client'
import type { MovieListResponse, MovieDetail } from '../types/movie'

// 영화 목록
export const getMovies = async (page: number): Promise<MovieListResponse> => {
  const { data } = await client.get<MovieListResponse>('/discover/movie', {
    params: { page, sort_by: 'vote_count.desc' },
  })
  return data
}

// 영화 상세
export const getMovieDetail = async (movieId: number): Promise<MovieDetail> => {
  const { data } = await client.get<MovieDetail>(`/movie/${movieId}`)
  return data
}
