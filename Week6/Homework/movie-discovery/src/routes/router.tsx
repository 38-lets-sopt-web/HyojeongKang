import { createBrowserRouter } from 'react-router-dom'
import { PATH } from './path'
import MovieListPage from '../pages/movie-list-page'
import MovieDetailPage from '../pages/movie-detail-page'

export const router = createBrowserRouter([
  {
    path: PATH.home,
    element: <MovieListPage />,
  },
  {
    path: '/movie/:movieId',
    element: <MovieDetailPage />,
  },
])
