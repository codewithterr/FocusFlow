function StreakTracker({ streak }) {
  const { count } = streak

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-surface px-4 py-2">
      <span className="text-lg" role="img" aria-label="fire">
        🔥
      </span>
      <span className="text-sm font-semibold text-accent">
        {count} {count === 1 ? 'day' : 'days'}
      </span>
    </div>
  )
}

export default StreakTracker
