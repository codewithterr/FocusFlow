# FocusFlow 🎯

> A focused productivity app built for students to study better, not harder.

🔗 **Live Demo:** coming soon

---

## Overview

FocusFlow is a minimal study app designed to help students stay focused, manage their time, and track their progress effectively. It uses gamification mechanics — streaks, XP, and rewards — to help students build consistent daily study habits.

Traditional study tools focus on utility but fail to keep users engaged long-term. By introducing high-retention mechanics inspired by apps like Duolingo, FocusFlow transforms studying from a chore into an engaging daily habit loop.

## The Problem

Students lose focus while studying because of phone distractions and have no simple way to plan or track their progress — leading to low motivation and poor study habits.

- Gets distracted by phone frequently
- Finds it hard to stay focused for long periods
- Lacks motivation due to no visible progress

## Core Features

### Study Timer
- Custom countdown timer — set any duration you want (default: 25 minutes)
- Start, pause, and reset controls
- Audio alert when the timer hits zero

### Streak Tracker
- Tracks consecutive days with at least one completed session
- Stored in localStorage
- Encourages daily consistency

### XP System
- Flat +10 XP credited instantly on session completion
- Level badge calculated from total XP
- Visible rewards boost motivation

### Task Checklist
- Add daily tasks, check them off, and clear completed ones
- Keeps sessions intentional without overcomplicating the UI

### Dashboard
- Single-screen interface showing: active streak, total XP, level badge, and today's tasks
- Toast notification on timer completion

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Language | JavaScript |
| Storage | localStorage |
| Hosting | Vercel |
| Version Control | GitHub |

## Project Structure

```
FocusFlow/
├── web_app/              ← React app lives here
│   ├── src/
│   │   ├── components/
│   │   │   ├── StudyTimer.jsx
│   │   │   ├── TaskChecklist.jsx
│   │   │   ├── StreakTracker.jsx
│   │   │   └── XPDisplay.jsx
│   │   ├── hooks/
│   │   │   ├── useTimer.js
│   │   │   ├── useTasks.js
│   │   │   └── useStreak.js
│   │   ├── utils/
│   │   │   └── storage.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── PRD_1.0.md
├── Design.md
├── TechStack.md
├── MVP_1.0.md
├── Agents.md
└── README.md
```

## Getting Started

### Prerequisites
- Node.js v18+
- npm or pnpm

### Installation

```bash
git clone https://github.com/codewithterr/FocusFlow.git
cd FocusFlow/web_app
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Deploy

Push to GitHub and connect to Vercel for automatic deployments.

## Design

- **Theme:** Dark mode (light/dark toggle coming in v2)
- **Primary Color:** `#6C63FF`
- **Background:** `#0F1117`
- **Typography:** Inter for UI, JetBrains Mono for timer display
- **Philosophy:** Minimal, calm, and distraction-free

## localStorage Keys

| Key | Description |
|-----|-------------|
| `focusflow_tasks` | Array of task objects |
| `focusflow_streak` | Object with count and last active date |
| `focusflow_session` | Current timer session state |
| `focusflow_xp` | Total XP earned |

## Roadmap

### Phase 1 — Setup ✅
- Create repo, docs, init project

### Phase 2 — Build MVP ⬅ we are here
- Study timer, task checklist, streak tracker, XP system

### Phase 3 — Prototype + Pitch
- Deploy to Vercel, share with Adi, gather feedback

### Phase 4 — UI/UX Polish
- Apply Design.md, collaborate on layout, fix bugs

### Phase 5 — Auth + Security
- Supabase auth, cloud sync, privacy policy

### Phase 6 — Launch
- Final deploy, make repo public, handoff

## Validation

Deploy to Vercel and share with 5–10 students. Run for 7 days and ask:

> "Did seeing your streak motivate you to come back and study the next day?"

If yes — the core loop is working. Build from there.

## Contributing

Contributions are welcome! If you'd like to help build FocusFlow:

1. Read `Agents.md` before writing any code
2. Check `PRD_1.0.md` to make sure your feature fits the current phase
3. Keep components small and single-purpose
4. Open a PR with a clear description of what you changed and why

## License

MIT — free to use, fork, and build on.

## Contact

Built by [@codewithterr](https://github.com/codewithterr) — feel free to open an issue or reach out!
