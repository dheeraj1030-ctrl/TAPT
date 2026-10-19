# [PROJECT NAME]

For colours, CSS classes and page elements, see documentation.md.

## Project Description
This project is a front-end web interface for [PROJECT NAME]. It includes a login screen and an internal dashboard with pages for meetings, tasks, and scores.

---

## Status
The project is currently an early static prototype:
- All pages are built with plain HTML and CSS.
- There is no JavaScript, backend server, or database connected.
- Clicking buttons or links does not save data or perform actions yet.
- The meetings page displays sample data.
- The tasks and scores pages are placeholder screens.

---

## What It Does
Based on the existing prototype:
- **Sign In**: Team members can view a sign-in screen designed for GitHub authentication.
- **Login Errors**: Displays an alert box container to show error messages if sign-in fails.
- **Sidebar Navigation**: Allows switching between Meetings, Tasks, Scores, and Admin views.
- **Top Bar**: Displays the current view title, user avatar initials, user name, and a logout link.
- **Meetings View**: Shows a table of meetings with title, date, task count, status (Completed or Upcoming), and a link to view tasks.
- **New Meeting Action**: Provides a button for creating a new meeting (marked for administrator access).
- **Empty State**: Displays a message when no meetings exist.
- **Tasks View**: Placeholder page for future task tracking.
- **Scores View**: Placeholder page for future team scores and rankings.
- **Role-Based Access**: Distinguishes admin actions for future permission checks.

---

## Tech Stack
- **HTML5**: Page structure using semantic elements (`<nav>`, `<header>`, `<main>`, `<table>`).
- **Vanilla CSS**: Custom styling with a dark theme and flexbox layout. No external CSS frameworks are used.
- **Inline SVG**: Vector icons for branding, the GitHub sign-in button, and navigation items.
- **No External Dependencies**: Runs directly in the browser without build tools, package managers, or third-party libraries.

---

## How to Run
You do not need to install anything or run terminal commands:
1. Open the project folder and double-click `index.html`.
2. The sign-in screen will open in your default web browser (`index.html` is the login page).
3. Use the navigation links to move between pages (`meetings.html`, `tasks.html`, `scores.html`).

---

## Folder Structure

```text
html css and js/
├── css/
│   ├── layout.css       # Shared styles for dashboard pages
│   └── style.css        # Styles for the login screen
├── documentation.md     # Technical reference for styles and components
├── index.html           # Login screen for [PROJECT NAME]
├── meetings.html        # Meetings dashboard page
├── README.md            # Beginner project overview
├── scores.html          # Scores placeholder page
└── tasks.html           # Tasks placeholder page
```

---

## File Summary and Status

| File | Purpose | Status |
| :--- | :--- | :--- |
| `index.html` | GitHub login page for [PROJECT NAME]. | Built (UI only, no auth logic) |
| `meetings.html` | Meetings dashboard with data table, action buttons, and sample data. | Built (Static UI with sample data) |
| `tasks.html` | Tasks placeholder page with shared navigation shell. | Placeholder |
| `scores.html` | Scores placeholder page with shared navigation shell. | Placeholder |
| `css/style.css` | Stylesheet for the login page (`index.html`). | Built |
| `css/layout.css` | Shared stylesheet for the dashboard shell (sidebar, top bar, table, badges, buttons). | Built |
| `documentation.md` | Technical reference for design tokens, CSS variables, classes, and page elements. | Built |
| `README.md` | Beginner project guide and overview for [PROJECT NAME]. | Built |

---

## Key Ideas
- **Pure Web Standards**: Everything runs natively in modern web browsers without a compilation or build step.
- **Consistent Dark Theme**: High-contrast dark styling across all screens.
- **Responsive Layout**: The meetings table scrolls horizontally on smaller screens to prevent page overflow.
- **Authentication Entry Point**: `index.html` serves as the primary sign-in screen (not `login.html`).
- **Admin Flags**: Administrator elements use role attributes to prepare for permission enforcement once backend logic is connected.

---

## How We Work
- Keep HTML semantic, accessible, and clean.
- Keep all styles in external CSS files (`css/style.css` and `css/layout.css`). Do not use inline styles.
- Keep dependencies at zero until backend logic or dynamic behavior is needed.
- The sidebar and top bar are currently repeated in each dashboard page as static HTML. Once JavaScript is introduced, they will become a shared component.

---

## Roadmap

- [x] Build login page layout and styles (`index.html`, `css/style.css`)
- [x] Build shared dashboard navigation and top bar (`css/layout.css`)
- [x] Build meetings table layout with status badges and sample data (`meetings.html`)
- [x] Build placeholder views for Tasks and Scores (`tasks.html`, `scores.html`)
- [x] Document project design tokens, CSS classes, and page elements (`documentation.md`)
- [ ] Connect GitHub OAuth for real sign-in on `index.html`
- [ ] Add JavaScript to display error messages in the login error container
- [ ] Create a shared JavaScript component for sidebar and top bar
- [ ] Add interactive modal or form for the "New meeting" button
- [ ] Render meetings dynamically from JavaScript data
- [ ] Toggle the empty state message when no meetings are available
- [ ] Build task tracking table and filters on `tasks.html`
- [ ] Build score board and leaderboard on `scores.html`
- [ ] Enforce permission checks for admin features
- [ ] Update logout link destination to point to `index.html` (currently links to non-existent `login.html`)
