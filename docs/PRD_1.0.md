# FocusFlow — Product Requirements Document (PRD) 1.0

## 1. Product Overview
- **Product Name:** FocusFlow
- **What is it?** A web-based productivity and study app that uses gamification mechanics — streaks, XP, and rewards — to help students build consistent daily study habits.
- **Why build it?** Traditional study tools focus on utility but fail to keep users engaged long-term. By introducing high-retention mechanics inspired by apps like Duolingo, FocusFlow transforms studying from a chore into an engaging daily habit loop.

## 2. Target Users

**Primary Persona — "Struggling Student"**
- A high school or college student preparing for exams or building new skills
- Highly prone to distractions, struggles to maintain a consistent study routine
- Needs short structured sessions, visible progress, and immediate positive reinforcement

**Secondary Persona — Independent Learner**
- A self-directed professional or hobbyist doing deep focus work
- Values simplicity and minimal friction to get into a flow state

## 3. Core Gamification Loop
- **The Hook** — Daily study streaks that reward uninterrupted daily engagement
- **The Reward** — XP awarded instantly upon completing study sessions, leading to level-ups
- **The Competition** *(future phase)* — Tiered public leaderboards where users compete weekly by XP
- **The Stakes** *(future phase)* — A hearts/lives system that penalises missed goals and creates urgency

## 4. MVP Scope (v1)

### In Scope
- Study Timer — custom countdown timer with start, pause, and reset (default: 25 minutes)
- Streak Counter — tracks consecutive days with at least one completed session (localStorage)
- XP System — flat +10 XP per completed session, level badge calculated client-side
- Task Checklist — daily tasks the user can add, check off, and clear
- Dashboard — single screen showing streak, XP, level, and tasks
- Audio + Toast alerts on session completion

### Out of Scope for v1
- User authentication and cloud sync
- Leaderboards and social features
- In-app economy or virtual shop
- Mobile push notifications
- Custom timer durations or advanced Pomodoro settings (moved to v2)
- AI-generated quizzes or smart planner
- Native mobile apps (iOS / Android)

## 5. Full Feature Wishlist (Future Phases)

### Authentication & Profiles
- Multi-platform login (Email, Google, Apple)
- Cloud profiles tracking XP, streak history, and level data
- Profile screen with stats and achievements

### UI/UX
- Light/dark theme toggle
- UI improvements and polish

### Advanced Gamification
- Streak Freeze items to protect progress during planned breaks
- Formulaic XP based on session length and quiz performance
- Weekly league system (Bronze → Silver → Gold → Diamond) with promotion and demotion
- In-app virtual economy — earn gems/coins to unlock themes, avatars, and power-ups

### Study Engine
- Flexible Pomodoro timers (25/5, 50/10, or fully custom)
- Multiple study decks or subject categories

### Notifications
- Smart contextual reminders scheduled around the user's historical peak study time
- Streak-at-risk alerts sent late evening if the daily goal is still incomplete
- Weekly email summaries with XP milestones and league standing

### AI Features
- AI-generated adaptive quizzes parsed from user notes or uploaded study material
- Personalised study schedule suggestions based on usage patterns

### Social & Scaling
- Group study rooms and peer challenges
- Cross-platform native apps (iOS and Android)
- Offline support and home screen widgets

## 6. Platform Roadmap
- **Phase 1 — Web MVP:** Validate the core study + streak + XP loop via a responsive web app
- **Phase 2 — Polish + Auth:** UI improvements, light/dark theme toggle, Supabase auth, cloud sync, profile screen
- **Phase 3 — AI + Social:** AI quiz generation, group study rooms, and leaderboards

## 7. Success Metrics

### v1 Metrics
- 5–10 students use the app for at least one full week
- Users return on consecutive days (streak retention)
- Positive qualitative feedback on simplicity and motivation

### Long-term Metrics
- Daily Active Users (DAU) and Monthly Active Users (MAU)
- Stickiness Ratio (DAU/MAU) as a measure of habit formation
- Streak retention past 3, 7, and 30 days
- Average daily session length

## 8. Constraints
- v1 must be a web app only — no mobile app
- No login required in v1 — localStorage only
- Simple enough for any student to use immediately with zero onboarding
