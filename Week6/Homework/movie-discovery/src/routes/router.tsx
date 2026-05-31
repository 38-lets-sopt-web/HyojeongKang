import { createBrowserRouter } from 'react-router-dom'
import { PATH } from './path'
import MovieListPage from '../pages/MovieListPage'
import MovieDetailPage from '../pages/MovieDetailPage'

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
