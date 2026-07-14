import { useState, useRef, useCallback } from 'react'
import { Zap } from 'lucide-react'
import TaskChecklist from './components/TaskChecklist'
import StreakTracker from './components/StreakTracker'
import { useTimer } from './hooks/useTimer'
import { useTasks } from './hooks/useTasks'
import { useStreak } from './hooks/useStreak'
import { loadFromStorage, saveToStorage } from './utils/storage'

const XP_KEY = 'focusflow_xp'
const XP_PER_SESSION = 10

/** Level = floor(totalXP / 100) + 1 */
const calcLevel = (xp) => Math.floor(xp / 100) + 1

/** Creates a short ding sound using the Web Audio API. */
const playDing = () => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.type = 'sine'
    osc.frequency.setValueAtTime(880, ctx.currentTime)
    gain.gain.setValueAtTime(0.3, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.5)
  } catch {
    // Audio not available — silent fallback
  }
}

function App() {
  const [xp, setXp] = useState(() => loadFromStorage(XP_KEY, 0))
  const [toast, setToast] = useState(null)
  const toastTimeoutRef = useRef(null)

  const { streak, recordSession } = useStreak()
  const { tasks, addTask, toggleTask, clearCompleted } = useTasks()

  const handleTimerComplete = useCallback(() => {
    playDing()

    setXp((prev) => {
      const next = prev + XP_PER_SESSION
      saveToStorage(XP_KEY, next)
      return next
    })

    recordSession()

    // Show toast
    setToast(`You earned +${XP_PER_SESSION} XP!`)
    clearTimeout(toastTimeoutRef.current)
    toastTimeoutRef.current = setTimeout(() => setToast(null), 3000)
  }, [recordSession])

  const { formattedTime, start, pause, reset, isRunning, isComplete, setDurationMinutes, durationSeconds } =
    useTimer({ onComplete: handleTimerComplete })

  const level = calcLevel(xp)

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <div className="mx-auto max-w-[480px] px-6 py-8 flex flex-col items-center gap-8">
        {/* Header */}
        <header className="w-full flex items-center justify-between">
          <h1 className="text-lg font-bold text-primary">FocusFlow</h1>
          <StreakTracker streak={streak} />
        </header>

        {/* XP Bar */}
        <div className="w-full flex items-center gap-3 rounded-xl border border-white/10 bg-surface px-4 py-3">
          <Zap size={18} className="text-accent" />
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs text-text-muted mb-1">
              <span>Level {level}</span>
              <span>{xp} XP</span>
            </div>
            <div className="h-1.5 rounded-full bg-bg overflow-hidden">
              <div
                className="h-full rounded-full bg-accent transition-all duration-300"
                style={{ width: `${xp % 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Timer (hero element) */}
        <section className="w-full flex flex-col items-center gap-6">
          <p className="text-sm text-text-muted">Let's focus.</p>

          <div
            className="font-mono text-[64px] sm:text-7xl font-bold text-text-primary tabular-nums leading-none"
            aria-live="polite"
            aria-label={`${formattedTime} remaining`}
          >
            {formattedTime}
          </div>

          {isComplete && (
            <p className="text-base text-success font-medium">Great session!</p>
          )}

          <div className="flex items-center gap-3">
            <label htmlFor="duration" className="text-sm text-text-muted">
              Duration (min)
            </label>
            <input
              id="duration"
              type="number"
              min="1"
              max="180"
              step="1"
              value={Math.round(durationSeconds / 60)}
              disabled={isRunning}
              onChange={(e) => {
                const val = Number(e.target.value)
                if (Number.isFinite(val) && val >= 1 && val <= 180) {
                  setDurationMinutes(val)
                }
              }}
              onBlur={(e) => {
                e.target.value = Math.round(durationSeconds / 60)
              }}
              className="w-20 rounded-xl border border-white/10 bg-surface px-3 py-2 text-sm text-text-primary text-center disabled:opacity-50 focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-4">
            {isRunning ? (
              <button
                type="button"
                onClick={pause}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:opacity-90"
              >
                Pause
              </button>
            ) : (
              <button
                type="button"
                onClick={start}
                disabled={isComplete}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:opacity-90 disabled:opacity-50"
              >
                Start
              </button>
            )}

            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface"
            >
              Reset
            </button>
          </div>
        </section>

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
