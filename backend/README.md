# TAPT Backend & API Specification

**Owner:** Backend Team  
**Role:** Authentication, API endpoints, and database models for TAPT.

---

## 1. Authentication (GitHub OAuth)
- **Target Page**: `index.html`
- **Flow**:
  1. User clicks `#github-login-btn`.
  2. Redirects to GitHub OAuth consent.
  3. GitHub redirects back with authorization code.
  4. Backend exchanges code for token, fetches user profile (username, avatar, team membership).
  5. If authenticated & authorized: issue session cookie or JWT and redirect to `meetings.html`.
  6. If unauthorized: redirect to `index.html` with error displayed in `#login-error`.

---

## 2. API Endpoints Needed

### A. Meetings API
- `GET /api/meetings`: Fetch list of all meetings (Title, Date, Task count, Status).
- `POST /api/meetings`: Create a new meeting (restricted to `role: admin`).
- `GET /api/meetings/:id`: Get meeting details and associated tasks.

### B. Tasks API
- `GET /api/tasks`: Fetch tasks, with optional filter by `meetingId` or `status`.
- `POST /api/tasks`: Create new task.
- `PATCH /api/tasks/:id`: Update task status (Pending, In Progress, Completed).

### C. Scores API
- `GET /api/scores`: Fetch team leaderboard and member scores.

### D. User & Session
- `GET /api/me`: Returns current logged-in user profile (`name`, `avatarInitials`, `role`).
- `POST /api/logout`: Invalidate session.

---

## 3. Separation of Concerns
- All server-side code (Node/Express, Python/FastAPI, Go, etc.) resides in this `backend/` directory.
- Frontend files in the root / `frontend/` directory communicate strictly via JSON APIs.
