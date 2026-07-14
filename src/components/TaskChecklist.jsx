import { useState } from 'react'
import { Check, Trash2 } from 'lucide-react'

function TaskChecklist({ tasks, onAdd, onToggle, onClearCompleted }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(input)
    setInput('')
  }

  const completedCount = tasks.filter((t) => t.done).length

  return (
    <section className="w-full rounded-xl border border-white/10 bg-surface p-4">
      <h2 className="text-sm font-semibold text-text-muted mb-3">Today's Tasks</h2>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
          className="flex-1 rounded-xl border border-white/10 bg-bg px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary"
        />
        <button
          type="submit"
          className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
        >
          Add
        </button>
      </form>

      {tasks.length === 0 && (
        <p className="text-xs text-text-muted text-center py-4">No tasks yet — add one above</p>
      )}

      <ul className="flex flex-col gap-1">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-bg/50 transition-colors"
          >
            <button
              type="button"
              onClick={() => onToggle(task.id)}
              className={`flex-shrink-0 w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                task.done
                  ? 'bg-success border-success'
                  : 'border-white/20 hover:border-primary'
              }`}
            >
              {task.done && <Check size={12} className="text-white" />}
            </button>

            <span
              className={`flex-1 text-sm ${
                task.done ? 'text-text-muted line-through' : 'text-text-primary'
              }`}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>

      {completedCount > 0 && (
        <button
          type="button"
          onClick={onClearCompleted}
          className="mt-3 flex items-center gap-1 text-xs text-danger hover:opacity-80 transition-opacity"
        >
          <Trash2 size={12} />
          Clear completed ({completedCount})
        </button>
      )}
    </section>
  )
}

export default TaskChecklist
