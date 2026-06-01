export interface Movie {
  id: number
  title: string
  poster_path: string | null
  overview: string
  release_date: string
  vote_average: number
}

export interface MovieListResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

interface Genre {
  id: number
  name: string
}

export interface MovieDetail {
  id: number
  title: string
  original_title: string
  poster_path: string | null
  backdrop_path: string | null
  release_date: string
  genres: Genre[]
  vote_average: number
  runtime: number
  vote_count: number
  status: string
  overview: string
  original_language: string
  origin_country: string[]
  budget: number
  revenue: number
}
