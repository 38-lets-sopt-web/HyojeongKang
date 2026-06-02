// pages/movie-detail-page.tsx
import { useParams, useNavigate } from 'react-router-dom'
import { useMovieDetail } from '../hooks/use-movie-detail'
import { useGuestSession } from '../hooks/use-guest-session'
import StarRating from '../ui/star-rating'
import { PATH } from '../routes/path'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'
const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/w1280'

export default function MovieDetailPage() {
  const { movieId } = useParams()
  const navigate = useNavigate()
  const { data, isPending, isError } = useMovieDetail(Number(movieId))
  const { guestSessionId } = useGuestSession()

  if (isPending) return <p>불러오는 중...</p>
  if (isError) return <p>에러가 발생했습니다.</p>

  return (
    <div className="min-h-screen px-50 py-10 text-white bg-gray-950">
      <div className="px-8 py-4">
        <button
          onClick={() => navigate(PATH.home)}
          className="text-gray-400 hover:text-white text-base"
        >
          ← 목록으로 돌아가기
        </button>
      </div>

      <div
        className="w-full h-96 bg-cover bg-center bg-gray-800"
        style={{
          backgroundImage: `url(${BACKDROP_BASE_URL}${data.backdrop_path})`,
        }}
      />

      <div className="py-6 flex gap-6">
        <img
          src={`${IMAGE_BASE_URL}${data.poster_path}`}
          alt={data.title}
          className="w-48 rounded-xl shadow-2xl self-start"
        />

        <div className="flex-1 bg-white text-gray-900 rounded-xl p-6 flex flex-col gap-4">
          <p className="text-sm text-gray-500">{data.release_date}</p>
          <h1 className="text-3xl font-bold">{data.title}</h1>

          <div className="flex gap-2 flex-wrap">
            {data.genres.map((genre) => (
              <span
                key={genre.id}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400 text-xs mb-1">평점</p>
              <p className="font-semibold">
                {data.vote_average.toFixed(1)} / 10
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">투표 수</p>
              <p className="font-semibold">
                {data.vote_count.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">상영 시간</p>
              <p className="font-semibold">
                {Math.floor(data.runtime / 60)}시간 {data.runtime % 60}분
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">상태</p>
              <p className="font-semibold">{data.status}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-6 bg-white text-gray-900 rounded-xl mb-6">
        <h2 className="font-bold text-lg mb-3">줄거리</h2>
        <p className="text-sm leading-relaxed text-gray-700">{data.overview}</p>
      </div>

      <div className=" mb-10 flex gap-6">
        <div className="flex-1 bg-white text-gray-900 rounded-xl p-6">
          <h2 className="font-bold text-lg mb-4">기본 정보</h2>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex gap-4">
              <p className="text-gray-400 w-20">원제</p>
              <p>{data.original_title}</p>
            </div>
            <div className="flex gap-4">
              <p className="text-gray-400 w-20">원어</p>
              <p>{data.original_language}</p>
            </div>
            <div className="flex gap-4">
              <p className="text-gray-400 w-20">제작 국가</p>
              <p>{data.origin_country.join(', ')}</p>
            </div>
            <div className="flex gap-4">
              <p className="text-gray-400 w-20">사용 언어</p>
              <p>{data.spoken_languages.map((l) => l.name).join(', ')}</p>
            </div>
            <div className="flex gap-4">
              <p className="text-gray-400 w-20">예산</p>
              <p>US${data.budget.toLocaleString()}</p>
            </div>
            <div className="flex gap-4">
              <p className="text-gray-400 w-20">수익</p>
              <p>US${data.revenue.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <StarRating movieId={Number(movieId)} guestSessionId={guestSessionId} />
      </div>
    </div>
  )
}
