# TAPT (Task Tracker)

A lightweight, dark-themed internal productivity dashboard for engineering teams to coordinate meetings, track tasks, and monitor team scores.

---

## 🏗️ Modular Architecture & Team Division

To enable smooth team collaboration without merge conflicts or overlapping work, the codebase is segregated into **4 distinct domains**:

```text
TAPT/
├── index.html                   # Sign-in screen (GitHub OAuth entry)
├── meetings.html                # Meetings dashboard (responsive table + mobile cards)
├── tasks.html                   # Tasks view
├── scores.html                  # Scores / Leaderboard view
│
├── css/
│   ├── base.css                 # 🌐 Base resets & responsive visibility helpers (.desktop-only, .mobile-only)
│   ├── components.css           # 🧩 Shared UI widgets (buttons, badges, empty states, table base)
│   ├── layout.css               # 📦 Master aggregator importing all modular stylesheets
│   ├── style.css                # 🔑 Login page specific styles
│   │
│   ├── themes/                  # 🎨 OWNED BY: Theming Team
│   │   ├── README.md            # Guide on creating and customizing themes
│   │   ├── default.css          # Base dark palette CSS custom properties (:root)
│   │   └── ...                  # Future themes (light.css, cyberpunk.css, etc.)
│   │
│   └── layouts/
│       ├── desktop.css          # 🖥️ OWNED BY: Desktop Team (screens > 768px: fixed sidebar, table layout)
│       └── mobile.css           # 📱 OWNED BY: Mobile Team (screens <= 768px: bottom nav bar, cards, touch targets)
│
├── backend/                     # ⚙️ OWNED BY: Backend Team
│   └── README.md                # Backend architecture, GitHub OAuth flow, and API endpoints
│
├── documentation.md             # Technical reference for design tokens and DOM selectors
└── README.md                    # Project overview and collaboration guide
```

---

## 👥 Responsibility & Ownership Matrix

| Workstream | Primary Files | Scope & Responsibilities |
| :--- | :--- | :--- |
| **📱 Mobile Port** | `css/layouts/mobile.css` | Mobile-first viewport adaptations, bottom navigation bar, meeting cards, 44px+ touch targets, iOS safe-area handling. |
| **🖥️ Desktop Layout** | `css/layouts/desktop.css` | Fixed 240px sidebar, desktop top bar, wide table layouts, desktop spacing. |
| **🎨 Theming Engine** | `css/themes/*.css` | Managing CSS custom properties (`:root` color palettes, surface colors, text contrasts). Changing themes requires **zero layout edits**. |
| **⚙️ Backend & API** | `backend/*` | GitHub OAuth authentication, session handling, database models, and REST API endpoints (`/api/meetings`, `/api/tasks`, `/api/scores`). |

---

## 🚀 How to Run & Test

Zero build tools or dependencies are required. Everything runs natively in any modern web browser:

1. **Sign In**: Open `index.html` in your browser.
2. **Dashboard**: Navigate to `meetings.html`, `tasks.html`, or `scores.html`.
3. **Desktop Testing**: Open the pages on a desktop browser to verify the 240px fixed sidebar and data table.
4. **Mobile Testing**: Open your browser's Developer Tools (`F12` or `Ctrl+Shift+I` / `Cmd+Opt+I`), toggle **Device Emulation** (e.g., iPhone 14 or Pixel 7), and verify:
   - The desktop sidebar is hidden.
   - The **Bottom Navigation Bar** appears and provides thumb-friendly access.
   - Content adapts to full width without horizontal overflow.
   - Meeting cards render instead of wide desktop tables.

---

## 🌿 Git Branching & Collaboration Workflow

To maintain a clean and reliable codebase:

1. **Never commit directly to `main`**.
2. **Branch off `main` for each feature or role**:
   - Mobile: `feat/mobile-cards`, `feat/mobile-drawer`
   - Desktop: `feat/desktop-refactor`
   - Theming: `theme/light-mode`, `theme/cyberpunk`
   - Backend: `feat/github-oauth`, `feat/meetings-api`
3. **Respect File Boundaries**: Only modify files within your assigned domain. If a DOM change is needed in shared HTML files, coordinate with the team using the `.desktop-only` and `.mobile-only` visibility helper classes.
4. **Merge via Pull Requests**: Open a PR with screenshots/demos before merging into `main`.

---

## 📋 Status & Current Roadmap

- [x] Initial login screen & dashboard prototype
- [x] Establish modular architecture (Theming, Desktop, Mobile, Backend segregation)
- [x] Build mobile bottom navigation bar and touch targets (`css/layouts/mobile.css`)
- [x] Build responsive meeting cards for mobile screens (`meetings.html`)
- [x] Add theming guide & token baseline (`css/themes/`)
- [x] Define backend API contract and OAuth flow (`backend/README.md`)
- [ ] Connect GitHub OAuth on `index.html`
- [ ] Add dynamic JavaScript rendering for meetings, tasks, and scores
- [ ] Implement theme switcher toggle script
- [ ] Complete task management table and mobile task cards on `tasks.html`
- [ ] Build leaderboard UI on `scores.html`
