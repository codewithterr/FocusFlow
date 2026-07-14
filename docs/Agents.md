# FocusFlow — Agents & AI Coding Rules

## Purpose
This file defines how AI coding assistants (Claude, Cursor, Copilot, etc.) should behave when working on the FocusFlow codebase. Always refer to PRD_1.0.md, TechStack.md, and Design.md alongside this file.

## General Rules
- Always read PRD_1.0.md before writing any feature code
- Never add features that are marked "Out of Scope" in the PRD
- Keep components small — one component should do one thing
- Write clean, readable code over clever code
- Add a short comment above any function that isn't immediately obvious

## Code Style Rules
- Use React functional components only — no class components
- Always use `const` — never `var`, avoid `let` unless reassignment is needed
- Tailwind CSS for all styling — no inline styles, no separate `.css` files
- Name components in PascalCase, files in PascalCase (e.g. `StudyTimer.jsx`)
- Name hooks with `use` prefix (e.g. `useStreak.js`)

## File Structure to Follow
```
src/
├── components/
│   ├── StudyTimer.jsx
│   ├── TaskChecklist.jsx
│   └── StreakTracker.jsx
├── hooks/
│   ├── useTimer.js
│   ├── useTasks.js
│   └── useStreak.js
├── utils/
│   └── storage.js
├── App.jsx
└── main.jsx
```

## localStorage Rules
Use these exact key names for consistency:
- `focusflow_username` — user's display name (string)
- `focusflow_tasks` — array of task objects
- `focusflow_streak` — object with count and last active date
- `focusflow_session` — current timer session state
- `focusflow_xp` — total XP earned (number)

## What the AI Should NOT Do
- Do not install unnecessary packages — keep dependencies minimal
- Do not create a backend or database in v1
- Do not add authentication or user accounts in v1
- Do not use TypeScript unless explicitly asked
- Do not override design tokens — always use the colors defined in Design.md
- Do not add loading spinners or skeletons for local data (it's instant)

## When Adding a New Feature
1. Check PRD_1.0.md — is it in scope for v1?
2. Check TechStack.md — use only the listed tools
3. Follow Design.md for all visual decisions
4. Keep the component isolated and reusable
5. Save any persistent state to localStorage using the defined key names

## Tone of the App (for copy/UI text)
- Short, direct, encouraging
- No jargon
- Examples: "Let's focus.", "Great session!", "Keep the streak alive 🔥"
