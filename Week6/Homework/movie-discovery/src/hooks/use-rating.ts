import { useMutation } from '@tanstack/react-query'
import { postRating, deleteRating } from '../api/ratings'

export const useRating = (movieId: number, guestSessionId: string | null) => {
  const { mutate: saveRating, isSuccess: isSaveSuccess } = useMutation({
    mutationFn: (rating: number) => {
      if (!guestSessionId) throw new Error('게스트 세션이 없습니다.')
      return postRating(movieId, rating, guestSessionId)
    },
  })

  const { mutate: removeRating, isSuccess: isDeleteSuccess } = useMutation({
    mutationFn: () => {
      if (!guestSessionId) throw new Error('게스트 세션이 없습니다.')
      return deleteRating(movieId, guestSessionId)
    },
  })

  return {
    saveRating,
    removeRating,
    isSaveSuccess,
    isDeleteSuccess,
  }
}
