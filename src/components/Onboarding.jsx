import { useState } from 'react'

function Onboarding({ onComplete }) {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return
    onComplete(trimmed)
  }

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <div className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col items-center justify-center gap-8 px-6 py-8">
        <h1 className="text-3xl font-bold text-primary text-center">
          Welcome to FocusFlow
        </h1>

        <p className="text-sm text-text-muted text-center">
          Build better study habits, one session at a time.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="What's your name?"
            autoFocus
            className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-base text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary"
          />

          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full rounded-xl bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:opacity-90 disabled:opacity-50"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}

export default Onboarding
