# FocusFlow — Tech Stack

## Frontend
- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Language:** JavaScript (no TypeScript in v1 to keep it simple)

## Storage
- **Local Storage** — all user data (tasks, streaks, timer state) is stored in the browser locally
- No backend or database in v1

## Hosting & Deployment
- **Hosting:** Vercel (free tier)
- **Repo:** GitHub (public, open source)

## Tools & Dev Setup
- Node.js (v18+)
- npm or pnpm
- VS Code recommended
- Git for version control

## Future Stack Considerations (v2+)
- Supabase for backend + auth (when accounts are needed)
- React Native or Expo for mobile
- PWA support for offline use

## Rules for AI Code Generation
- Always use React functional components with hooks
- Use Tailwind for all styling — no inline styles or separate CSS files
- Keep components small and single-purpose
- Store all state in localStorage with clear key names (e.g. `focusflow_streak`, `focusflow_tasks`)
