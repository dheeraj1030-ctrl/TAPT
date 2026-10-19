# TAPT & Task Tracker

## Project Description
This project is a front-end web interface for TAPT and Task Tracker. It includes a login screen and an internal dashboard with pages for meetings, tasks, and scores.

---

## Status
The project is currently an early static prototype. 
- All pages are built with plain HTML and CSS.
- There is no JavaScript, backend server, or database connected.
- Clicking buttons or links does not save data or perform real actions yet.
- The meetings page shows hard-coded sample data.
- The tasks and scores pages are placeholders.

---

## What It Will Do
Based on the existing markup and layout:
- **Sign In**: Allow team members to sign in using their GitHub account.
- **Show Login Errors**: Display an error alert if login fails.
- **Sidebar Navigation**: Let users switch between Meetings, Tasks, Scores, and Admin views.
- **Top Bar**: Show the active page title, user initials, user display name, and a logout link.
- **Meetings View**: Show a table of meetings with title, date, task count, status (Completed or Upcoming), and a link to view tasks.
- **New Meeting Action**: Allow admin users to trigger the creation of a new meeting.
- **Empty State**: Show a message when no meetings exist.
- **Tasks View**: Display and track tasks (not yet built).
- **Scores View**: Display team scores or rankings (not yet built).
- **Role-Based Access**: Hide or show admin features based on user permissions.

---

## Tech Used
- **HTML5**: Page structure and semantic tags (`<nav>`, `<header>`, `<main>`, `<table>`).
- **Vanilla CSS**: Custom styling, CSS variables (`:root`), and flexbox layout. No CSS frameworks are used.
- **Inline SVG**: Icons for the app logo, GitHub logo, and Bootstrap icons (calendar, checkmark, trophy, shield).
- **No External Dependencies**: No npm packages, JavaScript libraries, or external CDNs are required.

---

## How to Run
You do not need to install anything or run any terminal commands.

1. Open this folder in Windows File Explorer:
   `c:\Users\dheer\Documents\programming\html css and js`
2. Double-click any HTML file to open it in your browser:
   - `index.html`: Sign-in screen.
   - `meetings.html`: Meetings list table.
   - `tasks.html`: Tasks page.
   - `scores.html`: Scores page.
3. Click links in the sidebar to move between pages.

---

## Folder Structure

```text
html css and js/
├── css/
│   ├── layout.css       # Shared styles for sidebar, top bar, tables, and buttons
│   └── style.css        # Styles for the login screen
├── Skills/
│   ├── Caveman Skill.md # AI prompt instructions for concise tone
│   └── Minimalist skill.md # Coding guide (references Python standards)
├── documentation.md     # Technical reference for layout and styles
├── index.html           # Login screen for TAPT
├── meetings.html        # Meetings page with data table
├── README.md            # Beginner project guide
├── scores.html          # Scores placeholder page
└── tasks.html           # Tasks placeholder page
```

---

## File Summary and Status

| File | Purpose | Status |
| :--- | :--- | :--- |
| `index.html` | GitHub login page with app badge, title, error container, and sign-in button. | Built (UI only, no auth logic) |
| `css/style.css` | Styles for `index.html` (centered dark card, button states, hidden error box). | Built |
| `css/layout.css` | Shared stylesheet for the app shell (sidebar, top bar, table, badges, buttons). | Built |
| `meetings.html` | Meetings dashboard with header, "New meeting" button, sample data rows, and empty state. | Built (Static UI with sample data) |
| `tasks.html` | Tasks page with shared sidebar, top bar, and "Content coming soon" card. | Placeholder |
| `scores.html` | Scores page with shared sidebar, top bar, and "Content coming soon" card. | Placeholder |
| `documentation.md` | Full documentation of CSS variables, components, and page layouts. | Built |
| `Skills/Caveman Skill.md` | Instructions for an AI assistant to speak briefly. | Built (Not used by the web app) |
| `Skills/Minimalist skill.md` | Code guidelines on DRY code and Python practices. | Built (Not used by the web app) |

---

## Key Ideas
- **Pure Web Standards**: Everything runs natively in any modern web browser without a build step.
- **Consistent Dark Theme**: Uses dark background colors (`#0d1117`, `#161b22`) and light text (`#e6edf3`, `#c9d1d9`).
- **CSS Custom Properties**: Color codes and dimensions are defined once in `:root` inside `css/layout.css`.
- **Desktop Shell**: A fixed 240px sidebar on the left and a sticky 64px header on top keep navigation visible.
- **Responsive Table**: The meetings table sits inside `.table-responsive` so it can scroll horizontally on smaller screens without breaking layout.
- **Admin Flags**: Admin items use `data-role="admin"` to mark elements that will need permission checks later.

---

## How We Work
- Keep HTML semantic and clean.
- Keep all styles in external CSS files (`css/style.css` and `css/layout.css`). Do not use inline styles.
- Keep dependencies at zero until logic is needed.
- Currently, the sidebar and header are copied into each page. Once JavaScript is added, they will become a single reusable component.

---

## Roadmap

- [x] Build login page layout and styles (`index.html`, `css/style.css`)
- [x] Build shared dashboard navigation and top bar (`css/layout.css`)
- [x] Build meetings table layout with status badges and sample data (`meetings.html`)
- [x] Build placeholder views for Tasks and Scores (`tasks.html`, `scores.html`)
- [x] Document project design tokens and structure (`documentation.md`)
- [ ] Connect GitHub OAuth for real sign-in
- [ ] Add JavaScript to show real login error messages in `#login-error`
- [ ] Create a shared JavaScript component for sidebar and top bar
- [ ] Add interactive modal or form for the "New meeting" button
- [ ] Render meetings dynamically from JavaScript data
- [ ] Toggle `#empty-state` when no meetings are available
- [ ] Build task tracking table and filters on `tasks.html`
- [ ] Build score board and leaderboard on `scores.html`
- [ ] Enforce role checks for `data-role="admin"` elements
- [ ] Fix logout link destination (currently points to non-existent `login.html`)
