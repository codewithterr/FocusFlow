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

function loadInitialStreak() {
  const saved = loadFromStorage(STREAK_KEY)
  const fallback = { count: 0, lastActiveDate: null }
  if (!saved || typeof saved !== 'object') {
    return fallback
  }

  // Validate count
  let count = Number(saved.count)
  if (!Number.isFinite(count) || count < 0) {
    count = 0
  }

  // Validate lastActiveDate (should be YYYY-MM-DD string or null)
  let lastActiveDate = saved.lastActiveDate
  if (lastActiveDate !== null) {
    if (typeof lastActiveDate !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(lastActiveDate)) {
      lastActiveDate = null
    }
  }

  // Consistent state enforcement
  if (count === 0 || lastActiveDate === null) {
    count = 0
    lastActiveDate = null
  }

  // Save back if it resolved differently to ensure data integrity
  if (count !== saved.count || lastActiveDate !== saved.lastActiveDate) {
    saveToStorage(STREAK_KEY, { count, lastActiveDate })
  }

  return { count, lastActiveDate }
}

export function useStreak() {
  const [streak, setStreak] = useState(() => loadInitialStreak())

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
