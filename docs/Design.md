# FocusFlow — Design Guidelines

## Design Philosophy
Minimal, calm, and distraction-free. The UI itself should feel like a focused environment — clean enough that nothing competes with the student's work.

## Color Palette
| Name         | Hex       | Usage                               |
| ------------ | --------- | ----------------------------------- |
| Background   | `#0F1117` | Main app background (dark mode)     |
| Surface      | `#1A1D27` | Cards and panels                    |
| Primary      | `#6C63FF` | Buttons, active states, highlights  |
| Accent       | `#A78BFA` | Streak counter, progress indicators |
| Text Primary | `#F1F1F1` | Headings and main text              |
| Text Muted   | `#6B7280` | Subtitles, placeholders             |
| Success      | `#34D399` | Completed tasks, streak badge       |
| Danger       | `#F87171` | End session, delete task            |

## Typography
- **Display / Headings:** `Inter` (bold, clean, modern)
- **Body:** `Inter` (regular weight)
- **Timer Display:** `JetBrains Mono` or `Space Mono` (monospaced — gives a focused, technical feel)
- Font sizes follow a simple scale: 12 / 14 / 16 / 20 / 24 / 32 / 48px

## Spacing & Layout
- Base spacing unit: `4px`
- Use consistent padding: `16px` for cards, `24px` for page margins
- Mobile-first layout, centered content max-width `480px`
- Generous whitespace — resist the urge to fill empty space

## Components Style
- **Buttons:** Rounded (`rounded-xl`), solid fill for primary actions, ghost/outline for secondary
- **Cards:** Slightly elevated surface color with subtle border (`border-white/10`)
- **Timer:** Large monospaced display, center-aligned, takes up dominant visual space
- **Checklist items:** Simple rows with a checkbox, no heavy decoration
- **Streak badge:** Small pill component with accent color and a 🔥 emoji

## UI Tone
- Dark mode in v1, light/dark toggle coming in v2
- No animations that feel busy or distracting
- Subtle transitions only (e.g. `transition-opacity`, `transition-colors` — 150–200ms)
- No gradients in v1 — keep it flat and clean

## Signature Element
The **timer display** is the hero of every screen. It should be the largest, most prominent element — commanding attention the same way a clock on a wall does in a quiet library.
