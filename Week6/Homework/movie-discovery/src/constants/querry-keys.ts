export const queryKeys = {
  movies: {
    all: (rating: number | null) => ['movies', rating] as const,
    detail: (movieId: number) => ['movies', movieId] as const,
  },
}
