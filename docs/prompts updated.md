# FocusFlow — OpenCode Prompts

> Copy and paste these prompts into OpenCode at the start of each session.
> Always start with the Context Loader prompt before anything else.

---

## 🔁 Context Loader (Run This Every Session First)

```
Read the following files before doing anything:
- docs/Agents.md
- docs/TechStack.md
- docs/PRD_1.0.md
- docs/MVP_1.0.md
- docs/Design.md

Follow these docs strictly. Do not install packages or add features 
not listed in TechStack.md or PRD_1.0.md.
```

---

## Week 1 — Build MVP

---

### Day 1 — Friday 27 Jun — Setup

```
Set up the FocusFlow project:
1. Initialise a Vite React project in the current folder
2. Install Tailwind CSS with postcss and autoprefixer
3. Configure tailwind.config.js for React files
4. Add Tailwind directives to src/index.css
5. Create these empty folders: src/components, src/hooks, src/utils
6. Push everything to GitHub with commit message:
   "init: project setup with Vite + React + Tailwind"
```

---

### Day 2 — Saturday 28 Jun — StudyTimer

```
Build the StudyTimer feature following docs/Agents.md and docs/Design.md:
1. Create src/hooks/useTimer.js — timer logic with custom duration 
   (default 25 min), start, pause, and reset controls
2. Create src/components/StudyTimer.jsx — UI for the timer using the 
   useTimer hook
3. Style with Tailwind using the dark theme from docs/Design.md
4. The timer display must use JetBrains Mono font and be the largest 
   element on screen — it is the hero of the UI
5. Save timer session state to localStorage key: focusflow_session
6. Push with commit message: "feat: study timer component"
```

---

### Day 3 — Sunday 29 Jun — Checklist, Streak + XP

```
Build three features following docs/Agents.md:
1. Create src/hooks/useTasks.js + src/components/TaskChecklist.jsx
   - Add tasks, check them off, clear completed ones
   - Save to localStorage key: focusflow_tasks
2. Create src/hooks/useStreak.js + src/components/StreakTracker.jsx
   - Track consecutive days where at least one session was completed
   - Save to localStorage key: focusflow_streak
   - Display streak count with a fire emoji 🔥
3. Add XP logic:
   - +10 XP credited instantly on natural timer completion
   - Save running total to localStorage key: focusflow_xp
   - Calculate level badge client-side from total XP
4. Push with commit message: "feat: checklist, streak and XP system"
```

---

### Day 4 — Monday 30 Jun — Dashboard + Onboarding

```
Build two screens following docs/Design.md:
1. Onboarding screen:
   - "Welcome to FocusFlow" heading
   - Name input field with placeholder "What's your name?"
   - Continue button
   - Save name to localStorage key: focusflow_username
   - Only show this screen if no name is saved yet
2. Main dashboard:
   - Connect StudyTimer, TaskChecklist, and StreakTracker into one screen
   - Show active streak, XP total, level badge, and today's tasks
   - Display personalised greeting using saved name
3. Make everything mobile responsive — max-width 480px, centered
4. Push with commit message: "feat: dashboard and onboarding screen"
```

---

### Day 5 — Tuesday 1 Jul — Audio, Toasts + Bug Fixes

```
Add finishing touches and fix bugs:
1. Add audio alert on timer completion using the browser Audio API 
   (no external library — use new Audio() with a base64 or hosted sound)
2. Add toast notification on session complete:
   - Message: "🎉 Awesome! You earned +10 XP"
   - Auto-dismiss after 3 seconds
3. Bug test and fix:
   - Does localStorage persist correctly on page refresh?
   - Does streak increment only once per calendar day?
   - Does XP total accumulate correctly across sessions?
   - Does the timer reset properly after ending a session?
4. Push with commit message: "feat: audio alert, toasts and bug fixes"
```

---

### Day 6 — Wednesday 2 Jul — Buffer + Styling

```
Polish the UI using docs/Design.md — do not add any new features:
1. Apply the full colour palette from Design.md to all components
2. Set Inter as the default font for all UI text
3. Set JetBrains Mono or Space Mono for the timer display
4. Apply consistent spacing — 16px padding for cards, 24px page margins
5. Add subtle transitions on buttons and interactive elements 
   (transition-colors, transition-opacity, 150-200ms only)
6. Make sure no gradients are used — keep it flat and clean
7. Push with commit message: "style: apply full design system"
```

---

### Day 7 — Thursday 3 Jul — Pre-Deploy Check + Build

```
Prepare FocusFlow for deployment:
1. Run npm run build and fix any errors or warnings
2. Check all localStorage keys match exactly:
   - focusflow_tasks
   - focusflow_streak
   - focusflow_session
   - focusflow_xp
   - focusflow_username
3. Check all components follow the file structure in docs/Agents.md
4. Remove any console.log statements left from development
5. Make sure .env variables (if any) are in .env.example not committed
6. Push with commit message: "release: MVP v1 ready for deploy"
```

> After this — connect the GitHub repo to Vercel manually (2 min, one click).

---

## Week 2 — UI/UX Polish

---

### Day 8 — Monday 7 Jul — Design System Tokens

```
Set up the design system properly following docs/Design.md:
1. Add all colour values as Tailwind theme extensions in tailwind.config.js
2. Add font families (Inter, JetBrains Mono) to the Tailwind config
3. Replace any hardcoded hex values in components with Tailwind theme classes
4. Verify the dark background (#0F1117) is applied to the root element
5. Push with commit message: "style: design system tokens in Tailwind config"
```

---

### Day 9 — Tuesday 8 Jul — Polish Home + Timer Screens

```
Polish the onboarding and dashboard screens:
1. Onboarding screen — refine typography, spacing, button border radius
2. Dashboard screen — improve card layout, task list visual hierarchy
3. Timer screen — ensure the countdown is dominant, centred, and uses 
   the correct monospace font at a large size (min 48px)
4. All buttons should be rounded-xl with solid fill for primary actions
5. Push with commit message: "style: polish onboarding, dashboard and timer"
```

---

### Day 10 — Wednesday 9 Jul — Progress + Profile Screens

```
Build and style the remaining screens:
1. Progress screen:
   - Show "Time Invested Today" from current session data
   - Show streak count with fire emoji
   - Show a simple weekly stats bar or line chart (use recharts if needed)
2. Profile screen:
   - Show username and role ("Student")
   - Show daily study goal (editable, default 2hr/day)
   - Settings stubs: Notifications toggle, Theme (dark only for now), 
     placeholder for Focus Mode settings
3. Add bottom navigation bar with 3 tabs: Home, Progress, Profile
4. Push with commit message: "feat: progress and profile screens + bottom nav"
```

---

### Day 11 — Thursday 10 Jul — Adi Feedback Session

```
Implement UI changes from Adi's feedback session:
[Replace this list with actual feedback from Adi before running]
1. Change: [insert here]
2. Change: [insert here]
3. Change: [insert here]
Push with commit message: "style: UI updates from Adi feedback session"
```

---

### Day 12 — Friday 11 Jul — Mobile QA

```
Full mobile responsiveness audit and QA:
1. Test every screen at 375px, 390px, and 414px widths 
   (iPhone SE, iPhone 14, iPhone 14 Plus)
2. Fix any overflow, clipping, or layout issues
3. Make sure all tap targets are at least 44x44px
4. QA the full user flow:
   Onboarding → Dashboard → Start Timer → Complete Session → 
   Streak Updates → XP Increases → Navigate to Progress → Navigate to Profile
5. Fix all bugs found
6. Push with commit message: "fix: mobile responsiveness and QA fixes"
```

---

### Day 13-14 — Weekend 12-13 Jul — Buffer + Re-deploy

```
Final Week 2 polish and re-deploy:
1. Fix any remaining rough edges from QA
2. Update the README with a new screenshot of the polished UI
3. Run npm run build — confirm no errors
4. Push with commit message: "release: polished UI v1.1 ready for deploy"
```

> Re-deploy on Vercel after this push (automatic if connected to GitHub).

---

## Week 3 — Auth, Security + Launch

---

### Day 15 — Monday 14 Jul — Supabase Setup + Auth

```
Add authentication using Supabase:
1. Install Supabase client: npm install @supabase/supabase-js
2. Create src/utils/supabase.js — initialise Supabase client using 
   environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
3. Add these variables to .env and .env.example
4. Build a Login screen — email + password input, login and sign up buttons
5. Add auth state listener in App.jsx — redirect to onboarding if new user, 
   dashboard if returning user
6. Push with commit message: "feat: Supabase auth setup"
```

---

### Day 16 — Tuesday 15 Jul — Migrate Data to Supabase

```
Migrate all localStorage data to Supabase database:
1. Create Supabase tables via SQL in the Supabase dashboard:
   - tasks (id, user_id, text, completed, created_at)
   - streaks (id, user_id, count, last_active_date)
   - sessions (id, user_id, duration, xp_earned, completed_at)
2. Update useTasks.js — replace localStorage with Supabase queries
3. Update useStreak.js — replace localStorage with Supabase queries
4. Keep localStorage as fallback for users who are not logged in
5. Test: do tasks and streaks persist across devices when logged in?
6. Push with commit message: "feat: migrate data layer to Supabase"
```

---

### Day 17 — Wednesday 16 Jul — Security

```
Harden the app security:
1. Add Row Level Security (RLS) policies in Supabase — users can only 
   read and write their own data
2. Add input validation on all user-facing fields:
   - Name: max 50 characters, no special characters
   - Task text: max 200 characters
   - Timer duration: min 1 min, max 180 min, numbers only
3. Sanitize all inputs before saving to Supabase
4. Confirm no API keys or secrets are hardcoded anywhere in the codebase
5. Push with commit message: "security: RLS policies and input validation"
```

---

### Day 18 — Thursday 17 Jul — Privacy Policy + Legal

```
Add legal pages to the app:
1. Create a /legal route in the app
2. Add a PrivacyPolicy.jsx component with the privacy policy content
3. Add a TermsOfUse.jsx component with the terms of use content
4. Add "By continuing you agree to our Terms & Privacy Policy" 
   with a link to /legal on the onboarding screen
5. Make sure both pages are mobile friendly
6. Push with commit message: "docs: privacy policy and terms of use pages"
```

---

### Day 19 — Friday 18 Jul — Final Pre-Launch Checklist

```
Final checks before public launch:
1. Full end-to-end test:
   Sign up → Onboard → Study session → Streak updates → XP increases → 
   Logout → Login → All data persists correctly
2. Test on mobile and desktop browsers (Chrome, Safari, Firefox)
3. Run npm run build — zero errors, zero warnings
4. Check README is up to date:
   - Live demo URL is correct
   - GitHub handles are filled in
   - Screenshot is current
5. Update roadmap in README — mark Phase 1 as complete ✅
6. Push with commit message: "chore: pre-launch final checks"
```

---

### Day 20 — Saturday 19 Jul — Public Launch

```
Launch FocusFlow publicly:
1. Run final npm run build and confirm it passes
2. Tag the release: git tag v1.0.0
3. Push the tag: git push origin v1.0.0
4. Push final commit with message: "release: FocusFlow v1.0.0 public launch"
```

> After this:
> - Make the GitHub repo public
> - Confirm Vercel deploy is live
> - Share the live link with Adi and 5–10 students

---

### Day 21 — Sunday 20 Jul — Handoff

```
Prepare handoff for Adi:
1. Create a CONTRIBUTING.md file at the root of the repo with:
   - How to clone and run the project locally
   - Link to docs/Agents.md for coding rules
   - Link to docs/PRD_1.0.md for feature scope
   - How to submit a pull request
2. Push with commit message: "docs: add CONTRIBUTING.md for Adi handoff"
```

> Share GitHub repo access and Vercel credentials with Adi after this.

---

## Useful Correction Prompts

Use these if the agent goes off-script at any point:

**If it installs wrong packages:**
```
Stop. You installed a package not listed in docs/TechStack.md. 
Uninstall it and only use what is listed in TechStack.md.
```

**If it adds out-of-scope features:**
```
Stop. This feature is not in the MVP scope in docs/PRD_1.0.md. 
Remove it and stick to what is listed under "In Scope" for v1.
```

**If the styling looks wrong:**
```
Stop. Your styling doesn't match docs/Design.md. 
Re-read Design.md and fix the colours, fonts, and spacing to match exactly.
```

**If it creates messy commits:**
```
Squash the last [N] commits into one with the message: "[your message here]"
```

**If it breaks something:**
```
Something broke after your last change. 
Run the dev server, identify the error, and fix it before doing anything else.
```

---

## Cursor Prompts (Step 2 — Review + Refine)

> Run Cursor **after OpenCode** has built the feature.
> This is your human checkpoint — read the code, then use these prompts.

---

### Cursor Context Loader (Run First Every Session)

```
Read these files before reviewing anything:
- docs/Agents.md
- docs/Design.md
- docs/TechStack.md

You are reviewing code that was just generated by an AI agent.
Your job is to refine it — not rewrite it from scratch.
Only suggest changes that are clearly wrong, inconsistent, or improvable.
Do not add features that are not already in the code.
```

---

### After Every OpenCode Feature — General Review Prompt

```
Review the code that was just generated and check for the following:

1. RULES CHECK (against docs/Agents.md):
   - Are all components functional (no class components)?
   - Is Tailwind used for all styling — no inline styles or separate CSS files?
   - Are components small and single-purpose?
   - Are localStorage keys named exactly as defined in Agents.md?
   - Are files named in PascalCase and hooks prefixed with "use"?

2. DESIGN CHECK (against docs/Design.md):
   - Are the correct colours used (#0F1117 background, #6C63FF primary etc.)?
   - Is Inter used for UI text and JetBrains Mono for the timer?
   - Is spacing consistent — 16px card padding, 24px page margins?
   - Are there any gradients? (remove them — flat only in v1)

3. CODE QUALITY:
   - Are there any console.log statements? (remove them)
   - Are there any hardcoded values that should be constants?
   - Is any logic duplicated across components that should be in a hook?
   - Are there any obvious performance issues?

List every issue found, then fix them one by one.
```

---

### Cursor Prompt — After StudyTimer is Built

```
Review StudyTimer.jsx and useTimer.js specifically:
1. Does the timer count down correctly and stop at 00:00?
2. Does pause actually freeze the countdown (not just hide it)?
3. Does reset return to the original custom duration (not always 25 min)?
4. Is the timer display the largest element on screen (min font-size 48px)?
5. Is JetBrains Mono applied to the timer digits?
6. Is session state saved to localStorage key: focusflow_session?
Fix any issues found.
```

---

### Cursor Prompt — After Checklist + Streak + XP is Built

```
Review TaskChecklist.jsx, StreakTracker.jsx and the XP logic:
1. Do tasks persist in localStorage after page refresh?
2. Does the streak only increment once per calendar day (not per session)?
3. Does XP add +10 correctly every time a session completes naturally?
4. Is the level badge calculated client-side from total XP (not hardcoded)?
5. Are the localStorage keys exactly:
   - focusflow_tasks
   - focusflow_streak  
   - focusflow_xp
Fix any issues found.
```

---

### Cursor Prompt — After Dashboard + Onboarding is Built

```
Review App.jsx and the onboarding + dashboard screens:
1. Does the app show onboarding only when no name is saved in localStorage?
2. After onboarding, does it go straight to the dashboard (no extra clicks)?
3. Does the dashboard correctly display streak, XP, level badge, and tasks?
4. Is the personalised greeting using the saved username?
5. Is the layout mobile responsive at 375px width?
6. Is max-width capped at 480px and centered?
Fix any issues found.
```

---

### Cursor Prompt — After Audio + Toasts is Built

```
Review the audio alert and toast notification:
1. Does the audio play when the timer reaches 00:00 naturally?
2. Does the audio work even if the user switched to another browser tab?
3. Does the toast appear immediately after session completion?
4. Does the toast auto-dismiss after exactly 3 seconds?
5. Does the toast show the correct message: "🎉 Awesome! You earned +10 XP"?
Fix any issues found.
```

---

### Cursor Prompt — Before Every Deploy

```
Final pre-deploy review:
1. Run through every screen visually — does anything look broken or misaligned?
2. Check the browser console — are there any errors or warnings?
3. Are there any TODO comments or placeholder text left in the UI?
4. Does npm run build complete with zero errors?
5. Are all .env variables in .env.example and NOT in .env committed to git?
If everything passes, confirm it is ready to deploy.
```

---

## Antigravity Prompts (Step 3 — Bug Detection)

> Run Antigravity **after Cursor** has reviewed and refined the code.
> Antigravity's job is to stress test logic and catch edge cases.

---

### Antigravity Context Loader (Run First Every Session)

```
Read these files before starting:
- docs/PRD_1.0.md
- docs/MVP_1.0.md
- docs/Agents.md

You are doing a deep bug check on code that has already been reviewed.
Focus on logic errors, edge cases, and data integrity issues.
Do not change the UI or add features — only fix bugs.
```

---

### Antigravity — General Bug Check (Run After Every Feature)

```
Do a deep bug check on the latest code changes. Focus on:

1. LOGIC BUGS:
   - Are there any off-by-one errors in the timer countdown?
   - Could the streak increment more than once in a single day?
   - Could XP go negative or reset unexpectedly?
   - What happens if the user closes the tab mid-session?

2. EDGE CASES:
   - What happens if localStorage is full or unavailable?
   - What happens if the user adds 0 tasks and starts a session?
   - What happens if the timer duration is set to 0 or a negative number?
   - What happens if the user rapidly clicks start/pause/reset?

3. DATA INTEGRITY:
   - Could any localStorage value become corrupted (e.g. NaN, null, undefined)?
   - Is there a try/catch around all localStorage read/write operations?
   - If a localStorage key is missing, does the app crash or handle it gracefully?

4. BROWSER COMPATIBILITY:
   - Does the Audio API work on Safari? (it often needs a user gesture first)
   - Does localStorage work correctly on mobile browsers?

List every bug found with a severity (high / medium / low) then fix all high 
and medium severity bugs. List low severity ones for later.
```

---

### Antigravity — Timer Specific Bug Check

```
Deep test the timer logic in useTimer.js:
1. Start the timer, switch browser tabs, come back after 2 minutes — 
   is the time still accurate or has it drifted?
2. Pause the timer at 10:00, wait 30 seconds, resume — 
   does it continue from 10:00 or has time passed?
3. Set a custom duration of 1 minute — does it count down correctly 
   and trigger completion at exactly 00:00?
4. Start the timer, immediately click end — 
   does XP get awarded? (it should NOT — session wasn't completed)
5. What happens if the user sets the duration to a non-number value?
Fix all bugs found.
```

---

### Antigravity — Streak Logic Bug Check

```
Deep test the streak logic in useStreak.js:
1. Complete a session today — does streak show 1?
2. Simulate completing a session yesterday and today — does streak show 2?
3. Simulate missing a day — does streak reset to 1 (not 0) on the next session?
4. Complete two sessions in one day — does streak stay at the same number 
   (not increment twice)?
5. What happens if last_active_date in localStorage is corrupted or missing?
6. What happens at midnight — does the streak logic use local time or UTC?
   (it should use local time so students don't lose streaks at midnight)
Fix all bugs found.
```

---

### Antigravity — Auth + Data Migration Bug Check (Week 3)

```
Deep test the Supabase auth and data layer:
1. Sign up with a new email — does the user land on onboarding?
2. Complete onboarding and a session — does data save to Supabase correctly?
3. Log out and log back in — is all data (tasks, streak, XP) restored?
4. Open the app on a different device with the same account — 
   does data sync correctly?
5. What happens if the Supabase connection fails? 
   Does the app crash or fall back to localStorage?
6. Can a user access another user's data by manipulating the URL or 
   localStorage? (RLS should prevent this)
Fix all high and medium severity bugs found.
```

---

### Antigravity — Final Security Check (Before Launch)

```
Security audit before public launch:
1. Are all Supabase RLS policies active — can users only access their own data?
2. Try submitting a task with 1000 characters — is it rejected cleanly?
3. Try submitting a task with HTML or script tags — is it sanitized?
4. Try setting the timer to -5 minutes — is it rejected?
5. Check the network tab in browser devtools — are any secret keys 
   visible in API requests? (they should not be)
6. Is the .env file in .gitignore? Confirm it was never committed to git.
Report every issue found with severity. Fix all high severity issues immediately.
```

---

*Last updated: 27 June 2026*
