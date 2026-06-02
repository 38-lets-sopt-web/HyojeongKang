import { useState } from 'react'
import { useRating } from '../hooks/use-rating'

interface StarRatingProps {
  movieId: number
  guestSessionId: string | null
}

export default function StarRating({
  movieId,
  guestSessionId,
}: StarRatingProps) {
  const RATING_KEY = `rating_${movieId}`

  const savedRating = localStorage.getItem(RATING_KEY)
  const [rating, setRating] = useState<number | null>(
    savedRating ? Number(savedRating) : null,
  )
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const { saveRating, removeRating, isSaveSuccess, isDeleteSuccess } =
    useRating(movieId, guestSessionId)

  return (
    <div className="w-72 bg-white text-gray-900 rounded-xl p-6 flex flex-col gap-4">
      <h2 className="font-bold text-lg">별점 남기기</h2>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-500">0.5 ~ 10.0</label>
        <input
          type="number"
          min={0.5}
          max={10.0}
          step={0.5}
          value={rating ?? ''}
          onChange={(e) =>
            setRating(e.target.value === '' ? null : Number(e.target.value))
          }
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => {
            if (rating === null) {
              setErrorMessage('별점을 입력해주세요.')
              return
            }
            if (rating < 0.5 || rating > 10.0) {
              setErrorMessage('0.5 ~ 10.0 사이의 값을 입력해주세요.')
              return
            }
            setErrorMessage(null)
            saveRating(rating)
            localStorage.setItem(RATING_KEY, String(rating))
          }}
          className="flex-1 bg-gray-900 text-white py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
        >
          별점 저장하기
        </button>
        <button
          onClick={() => {
            removeRating()
            localStorage.removeItem(RATING_KEY)
            setRating(null)
          }}
          className="flex-1 border border-gray-300 text-gray-600 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors"
        >
          별점 삭제하기
        </button>
      </div>

      {errorMessage && (
        <p className="text-red-500 text-sm text-center">{errorMessage}</p>
      )}

      {isSaveSuccess && (
        <p className="text-green-500 text-sm text-center">
          별점이 저장되었습니다!
        </p>
      )}
      {isDeleteSuccess && (
        <p className="text-red-400 text-sm text-center">
          별점이 삭제되었습니다!
        </p>
      )}
    </div>
  )
}
