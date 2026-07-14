import { useState, useEffect, useRef, useCallback } from 'react'
import { loadFromStorage, saveToStorage } from '../utils/storage'

const SESSION_KEY = 'focusflow_session'
const DEFAULT_DURATION_SECONDS = 25 * 60

function loadInitialState() {
  const saved = loadFromStorage(SESSION_KEY)
  if (!saved) {
    return {
      durationSeconds: DEFAULT_DURATION_SECONDS,
      remainingSeconds: DEFAULT_DURATION_SECONDS,
      status: 'idle',
      endTime: null,
    }
  }

  // 1. Validate durationSeconds: positive finite number, cap at 180 mins, align to whole minutes
  let durationSeconds = Number(saved.durationSeconds)
  if (!Number.isFinite(durationSeconds) || durationSeconds <= 0 || durationSeconds > 180 * 60) {
    durationSeconds = DEFAULT_DURATION_SECONDS
  } else {
    durationSeconds = Math.round(durationSeconds / 60) * 60
    if (durationSeconds <= 0) {
      durationSeconds = 60
    }
  }

  // 2. Validate status
  let status = saved.status
  const validStatuses = ['idle', 'running', 'paused', 'complete']
  if (!validStatuses.includes(status)) {
    status = 'idle'
  }

  let remainingSeconds = durationSeconds
  let endTime = null

  // 3. Resolve status, remainingSeconds, and endTime based on status type
  if (status === 'running') {
    const savedEndTime = Number(saved.endTime)
    if (Number.isFinite(savedEndTime)) {
      const remaining = (savedEndTime - Date.now()) / 1000
      if (remaining <= 0) {
        status = 'complete'
        remainingSeconds = 0
        endTime = null
      } else {
        status = 'running'
        remainingSeconds = Math.min(remaining, durationSeconds)
        endTime = savedEndTime
      }
    } else {
      // If status is running but endTime is missing/invalid, fallback to paused
      status = 'paused'
      let savedRemaining = Number(saved.remainingSeconds)
      if (Number.isFinite(savedRemaining) && savedRemaining > 0 && savedRemaining <= durationSeconds) {
        remainingSeconds = savedRemaining
      } else if (savedRemaining <= 0) {
        status = 'complete'
        remainingSeconds = 0
      } else {
        remainingSeconds = durationSeconds
      }
      endTime = null
    }
  } else if (status === 'paused') {
    let savedRemaining = Number(saved.remainingSeconds)
    if (Number.isFinite(savedRemaining) && savedRemaining > 0 && savedRemaining <= durationSeconds) {
      remainingSeconds = savedRemaining
    } else if (savedRemaining <= 0) {
      status = 'complete'
      remainingSeconds = 0
    } else {
      remainingSeconds = durationSeconds
    }
    endTime = null
  } else if (status === 'complete') {
    remainingSeconds = 0
    endTime = null
  } else {
    // idle or fallback
    status = 'idle'
    remainingSeconds = durationSeconds
    endTime = null
  }

  // 4. Save clean state back to storage if it resolved differently to ensure data integrity
  if (
    status !== saved.status ||
    remainingSeconds !== saved.remainingSeconds ||
    durationSeconds !== saved.durationSeconds ||
    endTime !== saved.endTime
  ) {
    saveToStorage(SESSION_KEY, {
      durationSeconds,
      remainingSeconds,
      status,
      endTime,
    })
  }

  return { durationSeconds, remainingSeconds, status, endTime }
}

export function formatTime(totalSeconds) {
  const rounded = Math.ceil(totalSeconds)
  const minutes = Math.floor(rounded / 60)
  const seconds = rounded % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export function useTimer({ onComplete } = {}) {
  // Use lazy state initialization to prevent reading localStorage on every render
  const [initial] = useState(() => loadInitialState())

  const [durationSeconds, setDurationSeconds] = useState(initial.durationSeconds)
  const [remainingSeconds, setRemainingSeconds] = useState(initial.remainingSeconds)
  const [status, setStatus] = useState(initial.status)
  const endTimeRef = useRef(initial.endTime)
  const intervalRef = useRef(null)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  const clearTick = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const tick = useCallback(() => {
    if (!endTimeRef.current) return

    const remaining = Math.min(durationSeconds, Math.max(0, (endTimeRef.current - Date.now()) / 1000))
    setRemainingSeconds(remaining)

    if (remaining === 0) {
      clearTick()
      endTimeRef.current = null
      setStatus('complete')
      saveToStorage(SESSION_KEY, {
        durationSeconds,
        remainingSeconds: 0,
        status: 'complete',
        endTime: null,
      })
      onCompleteRef.current?.()
    }
  }, [clearTick, durationSeconds])

  useEffect(() => {
    if (status !== 'running') {
      clearTick()
      return undefined
    }

    intervalRef.current = setInterval(tick, 200)
    return clearTick
  }, [status, tick, clearTick])

  const start = useCallback(() => {
    if (status === 'running' || status === 'complete' || endTimeRef.current) return

    const remaining = status === 'idle' ? durationSeconds : remainingSeconds
    if (remaining <= 0) return

    const endTime = Date.now() + remaining * 1000
    endTimeRef.current = endTime
    setRemainingSeconds(remaining)
    setStatus('running')
    saveToStorage(SESSION_KEY, {
      durationSeconds,
      remainingSeconds: remaining,
      status: 'running',
      endTime,
    })
  }, [status, durationSeconds, remainingSeconds])

  const pause = useCallback(() => {
    if (status !== 'running' || !endTimeRef.current) return

    const remaining = Math.min(durationSeconds, Math.max(0, (endTimeRef.current - Date.now()) / 1000))
    endTimeRef.current = null
    setRemainingSeconds(remaining)
    setStatus('paused')
    saveToStorage(SESSION_KEY, {
      durationSeconds,
      remainingSeconds: remaining,
      status: 'paused',
      endTime: null,
    })
  }, [status, durationSeconds])

  const reset = useCallback(() => {
    clearTick()
    endTimeRef.current = null
    setRemainingSeconds(durationSeconds)
    setStatus('idle')
    saveToStorage(SESSION_KEY, {
      durationSeconds,
      remainingSeconds: durationSeconds,
      status: 'idle',
      endTime: null,
    })
  }, [clearTick, durationSeconds])

  const setDurationMinutes = useCallback(
    (minutes) => {
      const parsed = Number(minutes)
      if (!Number.isFinite(parsed) || parsed < 1 || parsed > 180) return

      const seconds = Math.round(parsed) * 60 // Enforce integer minutes
      clearTick()
      endTimeRef.current = null
      setDurationSeconds(seconds)
      setRemainingSeconds(seconds)
      setStatus('idle')
      saveToStorage(SESSION_KEY, {
        durationSeconds: seconds,
        remainingSeconds: seconds,
        status: 'idle',
        endTime: null,
      })
    },
    [clearTick],
  )

  return {
    durationSeconds,
    remainingSeconds,
    status,
    start,
    pause,
    reset,
    setDurationMinutes,
    isRunning: status === 'running',
    isPaused: status === 'paused',
    isComplete: status === 'complete',
    formattedTime: formatTime(remainingSeconds),
  }
}
