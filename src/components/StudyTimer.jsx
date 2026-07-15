function StudyTimer({
  formattedTime,
  isRunning,
  isComplete,
  durationSeconds,
  onStart,
  onPause,
  onReset,
  onDurationChange,
}) {
  return (
    <section className="w-full flex flex-col items-center gap-6">
      <div
        className="font-mono text-5xl sm:text-7xl font-bold text-text-primary tabular-nums leading-none"
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
              onDurationChange(val)
            }
          }}
          className="w-20 rounded-xl border border-white/10 bg-surface px-3 py-2 text-sm text-text-primary text-center disabled:opacity-50 focus:outline-none focus:border-primary"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {isRunning ? (
          <button
            type="button"
            onClick={onPause}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:opacity-90"
          >
            Pause
          </button>
        ) : (
          <button
            type="button"
            onClick={onStart}
            disabled={isComplete}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:opacity-90 disabled:opacity-50"
          >
            Start
          </button>
        )}

        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface"
        >
          Reset
        </button>
      </div>
    </section>
  )
}

export default StudyTimer
