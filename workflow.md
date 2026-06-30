# FocusFlow — Workflow Plan

> 3-week build plan from setup to launch.
> Start date: Friday 27 June 2026

---

## Overview

| Week | Focus | Goal |
|---|---|---|
| Week 1 | Setup + Build MVP | Working prototype deployed to Vercel |
| Week 2 | UI/UX + Polish | Polished app collaborated with Adi |
| Week 3 | Auth + Security + Launch | Secure, shippable, public product |

---

## Week 1 — Build MVP (27 Jun – 4 Jul)

**Goal:** Get a working prototype live on Vercel and pitch it to Adi by Thursday.

---

### Friday 27 Jun — Phase 1: Setup
- [ ] Create GitHub repo (public) + add README.md to root
- [ ] Create `docs/` folder and upload: MVP_1.0.md, PRD_1.0.md, Design.md, TechStack.md, Agents.md
- [ ] Run `npm create vite@latest focusflow -- --template react`
- [ ] Install Tailwind CSS and configure tailwind.config.js and index.css
- [ ] Create folder structure: `src/components`, `src/hooks`, `src/utils`
- [ ] Push first commit: `"init: project setup with Vite + React + Tailwind"`

> ⏱ Est. time: ~1 hour

---

### Saturday 28 Jun — Lock Design + StudyTimer
- [ ] Decide with Adi: dark mode or light mode? Update Design.md accordingly
- [ ] Create `docs/Screens.md` — document all 5 screens and their content
- [ ] Build `StudyTimer.jsx` — custom countdown timer (default 25 min), start / pause / reset
- [ ] Build `useTimer.js` hook — timer logic separated from UI
- [ ] Push commit: `"feat: study timer component"`

> ⏱ Est. time: 2–3 hours

---

### Sunday 29 Jun — Checklist, Streak + XP
- [ ] Build `TaskChecklist.jsx` — add, check off, and clear tasks
- [ ] Build `useTasks.js` hook — save tasks to localStorage (`focusflow_tasks`)
- [ ] Build `StreakTracker.jsx` — consecutive days counter
- [ ] Build `useStreak.js` hook — save streak to localStorage (`focusflow_streak`)
- [ ] Add XP logic — +10 XP on timer completion, running total stored in localStorage
- [ ] Push commit: `"feat: checklist, streak tracker and XP system"`

> ⏱ Est. time: 3–4 hours

---

### Monday 30 Jun — Dashboard + Onboarding
- [ ] Build onboarding screen — name input + continue button (save to localStorage)
- [ ] Build main dashboard — connect timer + checklist + streak into one screen
- [ ] Make it mobile responsive — test on your phone
- [ ] Push commit: `"feat: dashboard and onboarding screen"`

> ⏱ Est. time: ~2 hours after college

---

### Tuesday 1 Jul — Audio, Toasts + Bug Testing
- [ ] Add audio alert on timer completion (browser Audio API — no library needed)
- [ ] Add toast notification on session complete: "🎉 You earned +10 XP!"
- [ ] Bug test: does localStorage persist on refresh? Does streak increment correctly?
- [ ] Push commit: `"feat: audio alert and toast notifications"`

> ⏱ Est. time: ~1.5 hours after college

---

### Wednesday 2 Jul — Buffer + Styling
- [ ] Catch up on anything unfinished from Mon/Tue
- [ ] Apply basic styling from Design.md — colours, fonts, spacing
- [ ] Do NOT add new features today

> ⏱ Buffer day — rest if everything is done

---

### Thursday 3 Jul — Deploy + Pitch to Adi
- [ ] Deploy to Vercel — connect GitHub repo, one-click deploy
- [ ] Add live demo link to README.md
- [ ] Share live link with Adi — let him use it cold, no explanation
- [ ] Ask: "What's confusing? What's missing? What felt good?"
- [ ] Push final commit: `"release: MVP v1 deployed"`

---

### Friday 4 Jul — Week 1 Review
- [ ] Write down Adi's feedback — what to keep, change, and add
- [ ] Update PRD_1.0.md — move confirmed v2 features into the roadmap section
- [ ] Plan Week 2 tasks based on feedback
- [ ] Update Screens.md if any screen decisions changed

> 🏆 You shipped a working product in one week.

---

## Week 2 — UI/UX + Polish (5 Jul – 11 Jul)

**Goal:** Turn the working prototype into a polished, visually complete app in collaboration with Adi.

---

### Monday 7 Jul — Apply Design System
- [ ] Set up CSS variables or Tailwind theme tokens from Design.md (colours, fonts, spacing)
- [ ] Apply Inter font for UI and JetBrains Mono / Space Mono for timer display
- [ ] Replace all placeholder colours with the design palette
- [ ] Push commit: `"style: apply design system tokens"`

---

### Tuesday 8 Jul — Screen by Screen Polish (Home + Timer)
- [ ] Polish onboarding screen — typography, spacing, button style
- [ ] Polish home/dashboard screen — layout, card styling, task list appearance
- [ ] Polish timer screen — make the countdown the hero element, large and centred
- [ ] Push commit: `"style: polish onboarding, dashboard and timer screens"`

---

### Wednesday 9 Jul — Screen by Screen Polish (Progress + Profile)
- [ ] Build and style progress screen — streak count, XP total, level badge, weekly stats
- [ ] Build and style profile screen — name display, daily study goal, settings stubs
- [ ] Add bottom navigation bar — Home, Progress, Profile tabs
- [ ] Push commit: `"style: progress and profile screens + bottom nav"`

---

### Thursday 10 Jul — Collaboration Session with Adi
- [ ] Share the updated build with Adi
- [ ] Go through each screen together — adjust colours, layout, copy as needed
- [ ] Note every change he suggests, prioritise by effort vs. impact
- [ ] Implement agreed changes
- [ ] Push commit: `"style: UI updates from Adi feedback session"`

---

### Friday 11 Jul — Mobile Responsiveness + QA
- [ ] Test every screen on mobile (Chrome DevTools + real device)
- [ ] Fix any layout issues, overflow problems, or tap target sizes
- [ ] QA full user flow: onboarding → dashboard → timer → complete session → streak updates
- [ ] Push commit: `"fix: mobile responsiveness and QA fixes"`

---

### Weekend 12–13 Jul — Buffer + Improved Version Deploy
- [ ] Fix any remaining bugs or rough edges
- [ ] Re-deploy to Vercel — share improved version with Adi
- [ ] Update README screenshot with the new polished UI
- [ ] Rest — Week 3 is the hardest sprint

---

## Week 3 — Auth, Security + Launch (14 Jul – 20 Jul)

**Goal:** Make the app secure, add accounts, write the legal docs, and do the final public launch.

---

### Monday 14 Jul — Supabase Setup + Auth
- [ ] Create a Supabase project at supabase.com
- [ ] Install Supabase client: `npm install @supabase/supabase-js`
- [ ] Set up email login and/or Google OAuth in Supabase dashboard
- [ ] Build login and signup screens
- [ ] Push commit: `"feat: Supabase auth setup"`

---

### Tuesday 15 Jul — Migrate localStorage to Supabase DB
- [ ] Create Supabase tables: `tasks`, `streaks`, `sessions`
- [ ] Replace all localStorage reads/writes with Supabase queries
- [ ] Test: do tasks and streaks persist across devices when logged in?
- [ ] Keep localStorage as fallback for logged-out users
- [ ] Push commit: `"feat: migrate data layer to Supabase"`

---

### Wednesday 16 Jul — Security + Input Sanitization
- [ ] Add input validation on all user-facing fields (name, task text, timer duration)
- [ ] Add basic rate limiting via Supabase Row Level Security (RLS) policies
- [ ] Make sure no sensitive keys are exposed in the frontend (use .env variables)
- [ ] Add `.env.example` file to repo so contributors know what vars are needed
- [ ] Push commit: `"security: input validation, RLS policies and env vars"`

---

### Thursday 17 Jul — Privacy Policy + Legal Docs
- [ ] Write Privacy Policy — use a generator like Termly or iubenda, customise for FocusFlow
- [ ] Write Terms of Use — keep it simple and student-friendly
- [ ] Add both to a `/legal` page in the app
- [ ] Add "By continuing you agree to our Terms & Privacy Policy" to onboarding screen
- [ ] Push commit: `"docs: privacy policy and terms of use"`

---

### Friday 18 Jul — Final Testing + Pre-launch Checklist
- [ ] Full end-to-end test: sign up → onboard → study session → streak → logout → login → data persists
- [ ] Test on mobile and desktop
- [ ] Check all links work (legal pages, GitHub repo link if any)
- [ ] Make sure README is up to date with live demo link and correct GitHub handles
- [ ] Update roadmap in README — mark Phase 1 as complete ✅

---

### Saturday 19 Jul — Final Deploy + Make Repo Public
- [ ] Final Vercel deploy — confirm everything works on production URL
- [ ] Make GitHub repo fully public
- [ ] Tag the release: `git tag v1.0.0` and push
- [ ] Push commit: `"release: FocusFlow v1.0 public launch"`

---

### Sunday 20 Jul — Handoff + Celebrate
- [ ] Share credentials and repo access with Adi
- [ ] Share the live link with 5–10 students to start validation
- [ ] Write a short post-mortem: what went well, what was hard, what you'd do differently
- [ ] Plan Week 4+ based on user feedback

> 🚀 FocusFlow is live. You built a real product in 3 weeks.

---

## Quick Reference

### Commit Message Convention
```
feat: new feature
fix: bug fix
style: UI or styling change
docs: documentation update
security: security improvement
release: deployment milestone
```

### Key localStorage Keys
| Key | Description |
|---|---|
| `focusflow_tasks` | Array of task objects |
| `focusflow_streak` | Object with count and last active date |
| `focusflow_session` | Current timer session state |

### Important Links
| Resource | URL |
|---|---|
| GitHub Repo | https://github.com/YOUR_USERNAME/focusflow |
| Live App | https://focusflow.vercel.app (update after deploy) |
| Supabase Dashboard | https://supabase.com/dashboard |
| Vercel Dashboard | https://vercel.com/dashboard |
| Design Reference | docs/Design.md |
| AI Coding Rules | docs/Agents.md |

---

*Last updated: 27 June 2026*
