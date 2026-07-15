import { useState, useCallback } from 'react'
import { loadFromStorage, saveToStorage } from '../utils/storage'

const TASKS_KEY = 'focusflow_tasks'

function loadInitialTasks() {
  const saved = loadFromStorage(TASKS_KEY)
  if (!Array.isArray(saved)) {
    return []
  }
  // Validate schema for each task
  const validTasks = saved.filter(
    (t) =>
      t &&
      typeof t === 'object' &&
      typeof t.id === 'number' &&
      typeof t.text === 'string' &&
      typeof t.done === 'boolean',
  )
  
  if (validTasks.length !== saved.length) {
    saveToStorage(TASKS_KEY, validTasks)
  }
  return validTasks
}

export function useTasks() {
  const [tasks, setTasks] = useState(() => loadInitialTasks())

  const persist = (next) => {
    setTasks(next)
    saveToStorage(TASKS_KEY, next)
  }

  const addTask = useCallback((text) => {
    const trimmed = text.trim()
    if (!trimmed) return

    persist([
      ...tasks,
      { id: Date.now(), text: trimmed, done: false },
    ])
  }, [tasks])

  const toggleTask = useCallback((id) => {
    persist(
      tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    )
  }, [tasks])

  const clearCompleted = useCallback(() => {
    persist(tasks.filter((t) => !t.done))
  }, [tasks])

  return { tasks, addTask, toggleTask, clearCompleted }
}
