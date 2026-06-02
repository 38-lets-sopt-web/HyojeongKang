export interface GuestSessionResponse {
  success: boolean
  guest_session_id: string
  expires_at: string
}

export interface RatingRequest {
  value: number
}

export interface RatingResponse {
  success: boolean
  status_code: number
  status_message: string
}
