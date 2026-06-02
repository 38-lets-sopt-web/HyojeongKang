export const PATH = {
  home: '/',
  movieDetail: (id: string | number) => `/movie/${id}`,
} as const
