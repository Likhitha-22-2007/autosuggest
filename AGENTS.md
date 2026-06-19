# Autosuggest Project — Agent Instructions

## Project Overview

**Autosuggest** is a web application for implementing auto-suggest functionality. It uses Express.js for the backend and vanilla HTML/CSS/JavaScript for the frontend.

- **Repository:** https://github.com/Likhitha-22-2007/autosuggest
- **Tech Stack:** Node.js (Express.js), HTML5, CSS3, vanilla JavaScript
- **Status:** Early-stage learning project with basic frontend template; core auto-suggest logic pending implementation

## Quick Start

### Running the Server
```bash
node server.js
```
The app runs on `http://localhost:6700` (or `PORT` environment variable).

### Project Structure
```
├── server.js                 # Express server entry point
├── package.json             # Dependencies: express ^5.2.1
├── frontend/
│   ├── index.html          # Main HTML (navbar + basic elements)
│   ├── css/
│   │   └── index.css       # Styling for navbar, headings, paragraphs
│   └── js/
│       └── index.js        # Currently minimal (console.log only)
└── README.md               # Project notes
```

## Architecture & Conventions

### Backend
- **File:** [server.js](server.js)
- Serves static files from `/frontend` using `express.static()`
- No API routes implemented yet
- Uses environment variable `PORT` (default: 6700)

### Frontend
- **Static files:** All HTML, CSS, JS served directly; no build step
- **No frameworks:** Vanilla JavaScript only
- **HTML:** [frontend/index.html](frontend/index.html) — currently placeholder content (navbar + headings)
- **CSS:** [frontend/css/index.css](frontend/css/index.css) — utility classes (`.navbar`, `.para`, `.heading`)
- **JS:** [frontend/js/index.js](frontend/js/index.js) — currently empty (only console.log)

## Key Implementation Areas

### Auto-Suggest Feature (Not Yet Implemented)
When implementing auto-suggest, consider:

1. **Backend Logic** — Add API endpoints to fetch suggestions
   - Input: user query/input string
   - Output: array of matching suggestions
   - Consider data source (hardcoded list, database, or external API)

2. **Frontend UI** — Build suggestion UI component
   - Input field to capture user text
   - Dropdown/list to display suggestions
   - Mouse/keyboard navigation (arrow keys, Enter to select)
   - Debounce or throttle API calls to reduce server load

3. **Integration Points**
   - Consider CORS headers if frontend and backend ever run on different ports
   - Test with different input scenarios (empty, partial, no matches)

## Common Pitfalls & Notes

- **Script Tag Error:** `frontend/index.html` line 32 has a typo: `<scriptsrc = "js/index.js">` should be `<script src="js/index.js"></script>`. AI agents should fix this when enhancing the frontend.
- **Testing:** No test suite configured yet. When adding tests, set up a proper test runner.
- **No State Management:** This project is suitable for learning; as it grows, consider state management patterns.

## Agent Behaviors

### When Adding Features
1. Always validate that `script` tags are properly formed
2. Debounce API calls on the frontend to reduce server load
3. Add basic error handling for failed API requests
4. Document any new API endpoints clearly

### When Making Suggestions
- Recommend focusing on the auto-suggest feature as the core deliverable
- For learning purposes, vanilla JavaScript is fine; frameworks can be added later if needed
- Suggest adding console logging/debugging before deploying

### When Testing
- Manually test in browser (http://localhost:6700) before running automated tests
- Check console for errors (F12 DevTools)
- Verify static files are served correctly

## Dependencies
- **express** ^5.2.1 — Web framework

No other runtime dependencies. Development setup uses Node.js.

---

**Last updated:** 2026-06-19
