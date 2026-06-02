import { client } from './client'
import type {
  GuestSessionResponse,
  RatingRequest,
  RatingResponse,
} from '../types/rating'

// 게스트 세션 발급
export const getGuestSession = async (): Promise<string> => {
  const { data } = await client.get<GuestSessionResponse>(
    '/authentication/guest_session/new',
  )
  return data.guest_session_id
}

// 별점 매기기
export const postRating = async (
  movieId: number,
  rating: number,
  guestSessionId: string,
): Promise<RatingResponse> => {
  const { data } = await client.post<RatingResponse>(
    `/movie/${movieId}/rating`,
    { value: rating } satisfies RatingRequest,
    { params: { guest_session_id: guestSessionId } },
  )
  return data
}

// 별점 삭제
export const deleteRating = async (
  movieId: number,
  guestSessionId: string,
): Promise<RatingResponse> => {
  const { data } = await client.delete<RatingResponse>(
    `/movie/${movieId}/rating`,
    {
      params: { guest_session_id: guestSessionId },
    },
  )
  return data
}
