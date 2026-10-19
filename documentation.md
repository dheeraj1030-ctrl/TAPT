# Project Documentation: [PROJECT NAME]

This document serves as the technical reference for [PROJECT NAME]. It details the styling architecture, CSS custom properties, component structures, class names, element IDs, and DOM relationships across the codebase.

---

## 1. Authentication Screen (`index.html` & `css/style.css`)

### Purpose
Provides a dark-themed GitHub sign-in interface for [PROJECT NAME]. The authentication page is `index.html` (there is no `login.html`).

### Page Structure & Selectors
- **Page Wrapper (`.auth-container`)**:
  - Flex column container centering the login content on the screen.
  - Sizing & Spacing: `max-width: 380px`, `width: 100%`, `gap: 24px`.
- **Header Section (`<header class="auth-header">`)**:
  - **App Icon Badge (`.app-icon`)**:
    - Container dimension: `56px` by `56px` with `border-radius: 12px`.
    - Styling: `background-color: #161b22`, `border: 1px solid #30363d`, `color: #58a6ff`, `box-shadow: 0 4px 12px rgba(1, 4, 9, 0.4)`.
    - Holds the inline vector logo establishing branding for [PROJECT NAME].
  - **Title (`.auth-title`)**:
    - Headline styling: `font-size: 24px`, `font-weight: 600`, `color: #ffffff`, `margin-bottom: 6px`.
    - Heading text: "Welcome to [PROJECT NAME]".
  - **Subtitle (`.auth-subtitle`)**:
    - Subheading styling: `font-size: 14px`, `color: #c9d1d9`.
    - Explanatory copy: "Sign in with your GitHub account to continue".
- **Main Login Card (`<main class="login-card">`)**:
  - Elevated surface card housing authentication controls.
  - Styling: `background-color: #161b22`, `border: 1px solid #30363d`, `border-radius: 12px`, `padding: 28px 24px`, `box-shadow: 0 8px 24px rgba(1, 4, 9, 0.5)`.
  - **Error Container (`#login-error.error-box`)**:
    - Alert container located above the sign-in button.
    - Styling: `background-color: rgba(248, 81, 73, 0.15)`, `border: 1px solid rgba(248, 81, 73, 0.4)`, `border-radius: 6px`, `color: #ff7b72`, `font-size: 13px`, `padding: 10px 14px`, `text-align: center`, `line-height: 1.4`.
    - Hidden by default when empty via `.error-box:empty { display: none; }`.
  - **GitHub Sign-In Button (`#github-login-btn.github-button`)**:
    - Full-width action button triggering GitHub OAuth.
    - Base Styling: `background-color: #238636`, `color: #ffffff`, `border: 1px solid rgba(240, 246, 252, 0.1)`, `border-radius: 8px`, `padding: 12px 18px`, `font-size: 15px`, `font-weight: 600`, `box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2)`.
    - Hover State (`.github-button:hover`): `background-color: #2ea043`, `box-shadow: 0 4px 12px rgba(35, 134, 54, 0.35)`.
    - Active Feedback (`.github-button:active`): `transform: scale(0.98)`.
    - Inner Elements: `.github-icon` (`width: 22px`, `height: 22px`, `flex-shrink: 0`) and `.button-text` (`letter-spacing: 0.2px`, "Continue with GitHub").
  - **Access Restriction Note (`.access-note`)**:
    - Advisory text below the button: "Access is limited to team members added by an admin."
    - Styling: `font-size: 13px`, `color: #b1bac4`, `text-align: center`, `line-height: 1.5`.

---

## 2. Shared Application Stylesheet (`css/layout.css`)

### Color Variables (`:root`)
`css/layout.css` defines the application's global design tokens and layout dimensions:
- `--bg-main` (`#0d1117`): Dark background for viewport bodies.
- `--bg-card` (`#161b22`): Elevated surface background for cards, tables, and top header.
- `--bg-sidebar` (`#161b22`): Background color for the fixed navigation sidebar.
- `--border-color` (`#30363d`): Divider lines, panel borders, and cell dividers.
- `--text-main` (`#e6edf3`): High-contrast primary text.
- `--text-muted` (`#c9d1d9`): Secondary lighter grey text for navigation links and headers.
- `--text-dim` (`#8b949e`): Tertiary dim grey text for empty state indicators.
- `--accent-blue` (`#58a6ff`): Highlight blue for active links, upcoming badges, and action anchors.
- `--accent-green` (`#238636`): Primary action button green.
- `--sidebar-active` (`#21262d`): Background color for selected navigation items and table headers.
- `--avatar-bg` (`#30363d`): Surface background for the circular user avatar badge.
- `--sidebar-width` (`240px`): Fixed width specification for the sidebar.
- `--topbar-height` (`64px`): Fixed height specification for the top navigation bar.

### Core Components & Classes

- **Layout Shell**:
  - `.sidebar`: Fixed left navigation column (`position: fixed; top: 0; left: 0; width: var(--sidebar-width); height: 100vh; background-color: var(--bg-sidebar); border-right: 1px solid var(--border-color); padding: 20px 0; z-index: 100;`).
  - `.sidebar-header`: Branding header container (`padding: 0 20px 20px 20px; border-bottom: 1px solid var(--border-color); margin-bottom: 16px;`).
  - `.sidebar-title`: App title row (`font-size: 18px; font-weight: 600; color: #ffffff; display: flex; align-items: center; gap: 10px;`).
  - `.sidebar-nav`: Nav list wrapper (`display: flex; flex-direction: column; gap: 4px; padding: 0 12px;`).
  - `.nav-link`: Navigation links (`display: flex; align-items: center; gap: 12px; padding: 10px 14px; color: var(--text-muted); font-size: 14px; font-weight: 500; border-radius: 6px;`).
    - `.nav-link:hover`: `background-color: var(--sidebar-active); color: #ffffff;`.
    - `.nav-link.active`: `background-color: var(--sidebar-active); color: var(--accent-blue); font-weight: 600;`.
  - `.nav-icon`: Vector icon sizing (`width: 18px; height: 18px; flex-shrink: 0;`).
  - `.nav-divider`: Section divider line (`height: 1px; background-color: var(--border-color); margin: 12px 0;`).
  - `.main-wrapper`: Content offset container (`margin-left: var(--sidebar-width); min-height: 100vh; display: flex; flex-direction: column;`).
  - `.top-bar`: Sticky top header bar (`height: var(--topbar-height); background-color: var(--bg-card); border-bottom: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between; padding: 0 32px; position: sticky; top: 0; z-index: 50;`).
  - `.top-bar-title`: Current page title (`font-size: 20px; font-weight: 600; color: #ffffff;`).
  - `.user-area`: User info cluster (`display: flex; align-items: center; gap: 14px;`).
  - `.user-avatar`: Circular avatar circle (`width: 36px; height: 36px; border-radius: 50%; background-color: var(--avatar-bg); border: 1px solid var(--border-color); color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600;`).
  - `.user-name`: User label (`font-size: 14px; color: var(--text-main); font-weight: 500;`).
  - `.logout-btn`: Text action link (`font-size: 13px; color: var(--accent-blue); padding: 6px 10px; border-radius: 4px;`). Hover: `background-color: var(--sidebar-active); text-decoration: underline;`.
  - `.page-content`: Main page viewport padding (`flex: 1; padding: 32px; display: flex; flex-direction: column;`).

- **Content Header & Buttons**:
  - `.content-header`: Section title and action row (`display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;`).
  - `.content-title`: Section heading (`font-size: 20px; font-weight: 600; color: var(--text-main);`).
  - `.btn`: Base button element (`display: inline-flex; align-items: center; justify-content: center; padding: 8px 16px; font-size: 14px; font-weight: 500; border-radius: 6px; border: 1px solid rgba(240, 246, 252, 0.1); cursor: pointer; text-decoration: none;`).
  - `.btn-primary`: Primary action button (`background-color: var(--accent-green); color: #ffffff;`). Hover: `background-color: #2ea043;`.

- **Data Tables**:
  - `.table-responsive`: Card wrapper enabling horizontal scrolling on narrow viewports (`width: 100%; overflow-x: auto; background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px;`).
  - `.table`: Base table element (`width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; color: var(--text-main);`).
  - `.table th`: Header cells (`background-color: var(--sidebar-active); color: var(--text-muted); font-weight: 600; padding: 12px 16px; border-bottom: 1px solid var(--border-color); white-space: nowrap;`).
  - `.table td`: Data cells (`padding: 14px 16px; border-bottom: 1px solid var(--border-color); color: var(--text-main); vertical-align: middle; white-space: nowrap;`). Last row removes border via `.table tbody tr:last-child td { border-bottom: none; }`.
  - `.table tbody tr:hover`: Row hover highlight (`background-color: rgba(255, 255, 255, 0.02);`).
  - `.action-link`: Inline table link (`color: var(--accent-blue); text-decoration: none; font-weight: 500;`). Hover: `text-decoration: underline;`.

- **Status Badges**:
  - `.badge`: Base pill badge (`display: inline-block; padding: 3px 10px; font-size: 12px; font-weight: 500; border-radius: 12px; text-align: center;`).
  - `.badge-completed`: Completed state pill (`background-color: rgba(35, 134, 54, 0.2); color: #3fb950; border: 1px solid rgba(63, 185, 80, 0.3);`).
  - `.badge-upcoming`: Upcoming state pill (`background-color: rgba(56, 139, 253, 0.15); color: var(--accent-blue); border: 1px solid rgba(88, 166, 255, 0.3);`).

- **Empty States**:
  - `.empty-state-card`: Standalone placeholder card used on upcoming views (`background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 48px 32px; text-align: center; max-width: 520px; margin: 40px auto; width: 100%; box-shadow: 0 4px 16px rgba(1, 4, 9, 0.3);`).
  - `.empty-state-title`: Heading inside placeholder card (`font-size: 22px; font-weight: 600; color: #ffffff; margin-bottom: 8px;`).
  - `.empty-state-message`: Body text inside placeholder card (`font-size: 15px; color: var(--text-muted);`).
  - `#empty-state`: Table-embedded zero-data container (`display: none; text-align: center; padding: 48px 24px; background-color: var(--bg-card); border: 1px dashed var(--border-color); border-radius: 8px; color: var(--text-dim); margin-top: 24px; font-size: 15px;`).

---

## 3. Application Pages (`meetings.html`, `tasks.html`, `scores.html`)

### A. Shared Shell (Sidebar & Top Bar)
All internal dashboard pages share an identical navigation shell:
1. **Sidebar (`<nav class="sidebar" aria-label="Main Navigation">`)**:
   - Header with vector icon and title: **[PROJECT NAME]**.
   - Navigation links with Bootstrap SVG icons:
     - **Meetings** (`meetings.html`): Calendar icon. Carries `.nav-link.active` on `meetings.html`.
     - **Tasks** (`tasks.html`): Check2-square icon. Carries `.nav-link.active` on `tasks.html`.
     - **Scores** (`scores.html`): Trophy icon. Carries `.nav-link.active` on `scores.html`.
     - **Admin** (`#`): Shield icon with attribute `data-role="admin"`, separated by `.nav-divider`.
2. **Top Navigation Bar (`<header class="top-bar">`)**:
   - Page title (`.top-bar-title`): Matches the active page ("Meetings", "Tasks", or "Scores").
   - Profile cluster (`.user-area`):
     - Initials badge: `<div class="user-avatar" title="User Avatar">UN</div>`.
     - User name: `<span id="user-name" class="user-name">User Name</span>`.
     - Logout link: `<a href="login.html" id="logout-btn" class="logout-btn">Logout</a>`.
     - *Technical Note on Login Link*: The login page is `index.html`. In the static prototype, the logout link's `href` attribute currently points to `login.html`, which needs to be updated to `index.html`.

### B. Meetings Page Elements (`meetings.html`)
- **Content Header (`.content-header`)**:
  - Title: `<h2 class="content-title">All meetings</h2>`.
  - Action button: `<button type="button" id="new-meeting-btn" class="btn btn-primary" data-role="admin">New meeting</button>`.
- **Responsive Table Container (`.table-responsive`)**:
  - Table: `<table id="meetings-table" class="table">`.
  - Column headers: `Title`, `Date`, `Tasks`, `Status`, `Actions`.
  - Body container: `<tbody id="meetings-body">`.
  - Sample Records:
    1. *Sprint planning* | `20 Oct 2026` | `5 tasks` | `<span class="badge badge-completed">Completed</span>` | `<a href="tasks.html" class="action-link">View tasks</a>`
    2. *Design review* | `22 Oct 2026` | `3 tasks` | `<span class="badge badge-upcoming">Upcoming</span>` | `<a href="tasks.html" class="action-link">View tasks</a>`
    3. *Weekly sync* | `25 Oct 2026` | `0 tasks` | `<span class="badge badge-upcoming">Upcoming</span>` | `<a href="tasks.html" class="action-link">View tasks</a>`
- **Zero-Data State (`#empty-state.empty-state`)**:
  - Contains message: `<p>No meetings yet.</p>`.
  - Hidden by default via CSS rule `#empty-state { display: none; }`.

### C. Tasks & Scores Pages (`tasks.html`, `scores.html`)
Both pages utilize the common shell and render standalone empty-state cards within `<main id="page-content" class="page-content">`:
- **Tasks (`tasks.html`)**: Contains `.empty-state-card` with `<h2 class="empty-state-title">Tasks</h2>` and `<p class="empty-state-message">Content coming soon</p>`.
- **Scores (`scores.html`)**: Contains `.empty-state-card` with `<h2 class="empty-state-title">Scores</h2>` and `<p class="empty-state-message">Content coming soon</p>`.

### D. Implementation Details
- **Role Markers**: Elements requiring administrator permissions (`#new-meeting-btn` and the Admin sidebar link) carry `data-role="admin"`.
- **Shared HTML Notice**: The sidebar and top bar markup are duplicated across `meetings.html`, `tasks.html`, and `scores.html` using the comment:
  `<!-- This block is repeated on every page. Later we will replace it with one shared JavaScript component. -->`
