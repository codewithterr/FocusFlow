import { useState, useRef, useCallback, useEffect } from 'react'
import { Zap } from 'lucide-react'
import Onboarding from './components/Onboarding'
import StudyTimer from './components/StudyTimer'
import TaskChecklist from './components/TaskChecklist'
import StreakTracker from './components/StreakTracker'
import { useTimer } from './hooks/useTimer'
import { useTasks } from './hooks/useTasks'
import { useStreak } from './hooks/useStreak'
import { loadFromStorage, saveToStorage } from './utils/storage'
import { playDing } from './utils/audio'

const USERNAME_KEY = 'focusflow_username'
const XP_KEY = 'focusflow_xp'
const XP_PER_SESSION = 10
const XP_PER_LEVEL = 100
const TOAST_DURATION_MS = 3000

/** Returns a trimmed username from storage, or null if missing/invalid. */
const loadUsername = () => {
  const saved = loadFromStorage(USERNAME_KEY)
  if (typeof saved !== 'string') return null
  const trimmed = saved.trim()
  return trimmed || null
}

/** Level = floor(totalXP / XP_PER_LEVEL) + 1 */
const calcLevel = (xp) => Math.floor(xp / XP_PER_LEVEL) + 1

/** Validates and returns the loaded XP value, fallback to 0. */
const loadInitialXp = () => {
  const saved = loadFromStorage(XP_KEY, 0)
  const parsed = Number(saved)
  if (Number.isFinite(parsed) && parsed >= 0) {
    return parsed
  }
  return 0
}

function App() {
  const [username, setUsername] = useState(loadUsername)
  const [xp, setXp] = useState(() => loadInitialXp())
  const [toast, setToast] = useState(null)
  const toastTimeoutRef = useRef(null)

  const { streak, recordSession } = useStreak()
  const { tasks, addTask, toggleTask, clearCompleted } = useTasks()

  useEffect(() => {
    return () => clearTimeout(toastTimeoutRef.current)
  }, [])

  const handleOnComplete = useCallback((name) => {
    saveToStorage(USERNAME_KEY, name)
    setUsername(name)
  }, [])

  const handleTimerComplete = useCallback(() => {
    playDing()

    setXp((prev) => {
      const next = prev + XP_PER_SESSION
      saveToStorage(XP_KEY, next)
      return next
    })

    recordSession()

    setToast(`🎉 Awesome! You earned +${XP_PER_SESSION} XP`)
    clearTimeout(toastTimeoutRef.current)
    toastTimeoutRef.current = setTimeout(() => setToast(null), TOAST_DURATION_MS)
  }, [recordSession])

  const { formattedTime, start, pause, reset, isRunning, isComplete, setDurationMinutes, durationSeconds } =
    useTimer({ onComplete: handleTimerComplete })

  const level = calcLevel(xp)

  if (!username) {
    return <Onboarding onComplete={handleOnComplete} />
  }

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <div className="mx-auto max-w-[480px] px-6 py-8 flex flex-col items-center gap-8">
        {/* Header */}
        <header className="w-full flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h1 className="text-lg font-bold text-primary">FocusFlow</h1>
            <p className="text-sm text-text-muted truncate">Let's focus, {username}.</p>
          </div>
          <div className="flex-shrink-0">
            <StreakTracker streak={streak} />
          </div>
        </header>

        {/* XP Bar */}
        <div className="w-full flex items-center gap-3 rounded-xl border border-white/10 bg-surface px-4 py-4">
          <Zap size={18} className="text-accent" />
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs text-text-muted mb-1">
              <span>Level {level}</span>
              <span>{xp} XP</span>
            </div>
            <div className="h-1.5 rounded-full bg-bg overflow-hidden">
              <div
                className="h-full rounded-full bg-accent transition-all duration-200"
                style={{ width: `${xp % XP_PER_LEVEL}%` }}
              />
            </div>
          </div>
        </div>

        {/* Timer (hero element) */}
        <StudyTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isComplete={isComplete}
          durationSeconds={durationSeconds}
          onStart={start}
          onPause={pause}
          onReset={reset}
          onDurationChange={setDurationMinutes}
        />

        {/* Tasks */}
        <TaskChecklist
          tasks={tasks}
          onAdd={addTask}
          onToggle={toggleTask}
          onClearCompleted={clearCompleted}
        />
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-xl bg-success px-5 py-3 text-sm font-medium text-white shadow-lg animate-[fadeIn_0.15s_ease-out]">
          {toast}
        </div>
      )}
    </div>
  )
}

export default App
