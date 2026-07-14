import { useState, useCallback } from 'react'
import { loadFromStorage, saveToStorage } from '../utils/storage'

const STREAK_KEY = 'focusflow_streak'

/** Returns today's date as YYYY-MM-DD in local time. */
const todayKey = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

/** Returns yesterday's date as YYYY-MM-DD in local time. */
const yesterdayKey = () => {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function useStreak() {
  const [streak, setStreak] = useState(() =>
    loadFromStorage(STREAK_KEY, { count: 0, lastActiveDate: null }),
  )

  /** Call when a timer session completes naturally. */
  const recordSession = useCallback(() => {
    const today = todayKey()
    const { count = 0, lastActiveDate } = streak

    // Already counted today — do nothing
    if (lastActiveDate === today) return

    const isConsecutive = lastActiveDate === yesterdayKey()
    const nextCount = isConsecutive ? count + 1 : 1
    const next = { count: nextCount, lastActiveDate: today }

    setStreak(next)
    saveToStorage(STREAK_KEY, next)
  }, [streak])

  return { streak, recordSession }
}
