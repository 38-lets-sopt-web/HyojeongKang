import { useEffect, useState } from 'react'
import { getGuestSession } from '../api/ratings'

const GUEST_SESSION_KEY = 'guest_session_id'

export const useGuestSession = () => {
  const [guestSessionId, setGuestSessionId] = useState<string | null>(
    localStorage.getItem(GUEST_SESSION_KEY),
  )

  useEffect(() => {
    if (guestSessionId) return

    const fetchSession = async () => {
      const sessionId = await getGuestSession()
      localStorage.setItem(GUEST_SESSION_KEY, sessionId)
      setGuestSessionId(sessionId)
    }

    fetchSession()
  }, [])

  return { guestSessionId }
}
