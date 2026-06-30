# FocusFlow — MVP 1.0

## Objective
Build and deploy the simplest working version of FocusFlow to validate one core question: does a streak + study timer loop give students enough motivation to show up and study consistently every day?

## The Problem
Students lose focus while studying because of phone distractions and have no simple way to plan or track their progress — leading to low motivation and poor study habits.

## The One-Line Solution
A minimal web app that gives students a custom study timer, a task checklist, a streak counter, and instant XP rewards — nothing more.

## Who It's For
Students (high school and college level) and anyone who does independent deep focus work — people who want to study better without juggling complex tools.

## Core Features (What We Are Building NOW)

### Study Timer
- A custom countdown timer — set any duration you want (default: 25 minutes)
- Start, pause, and reset controls
- Audio alert ("ding") when the timer hits zero — works even if the user switches tabs

### Gamification Loop
- **Streak Counter** — increments by 1 each calendar day the user completes at least one full session; stored in localStorage
- **XP Reward** — flat +10 XP credited instantly on natural timer completion
- **Level Badge** — calculated client-side from total XP, displayed on the dashboard

### Task Checklist
- Add tasks for the day, check them off, and clear completed ones
- Keeps the session intentional without overcomplicating the UI

### Dashboard
- Single-screen interface showing: active streak, total XP, level badge, and today's tasks
- Toast notification on timer completion (e.g. "🎉 You earned +10 XP!")

## What We Are Skipping for Now
- No login or accounts — all data lives in localStorage
- No leaderboards or multiplayer features
- No virtual shop or in-app economy
- No mobile push notifications
- No custom timer durations (coming in v2)
- No AI planner, app blocking, or smart breaks
- No cross-platform (Android / iOS)

## The Rule
If a feature doesn't directly help a student start a study session right now, it doesn't belong in v1.

## How to Validate It
- Deploy to Vercel and share with 5–10 students
- Run for 7 days, then ask one question: *"Did seeing your streak motivate you to come back and study the next day?"*
- If yes — the core loop is working. Build from there.

## Build Plan
1. Build the web app (React + Vite + Tailwind)
2. Push to a public GitHub repo
3. Deploy to Vercel
4. Gather feedback from real students
5. Decide what to add in v2 based on what they actually use

## What's Next (v2)
- UI improvements and light/dark theme toggle
- Supabase auth and cloud sync
- Profile screen with stats
