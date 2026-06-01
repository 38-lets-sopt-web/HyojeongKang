export const queryKeys = {
  movies: {
    all: ['movies'] as const,
    detail: (movieId: number) => ['movies', movieId] as const,
  },
}
