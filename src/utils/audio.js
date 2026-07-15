let sharedAudioCtx = null

const getAudioContext = () => {
  if (typeof window === 'undefined') return null
  if (!sharedAudioCtx) {
    sharedAudioCtx = new (window.AudioContext || window.webkitAudioContext)()
  }
  return sharedAudioCtx
}

export const unlockAudio = () => {
  try {
    const ctx = getAudioContext()
    if (ctx && ctx.state === 'suspended') {
      ctx.resume()
    }
  } catch {
    // AudioContext not supported or blocked
  }
}

export const playDing = () => {
  try {
    const ctx = getAudioContext()
    if (!ctx) return

    if (ctx.state === 'suspended') {
      ctx.resume()
    }

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
    // AudioContext not supported or failed to play
  }
}
