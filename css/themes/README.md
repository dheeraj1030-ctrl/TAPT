# Theming System Guide

**Owner:** Theming Teammate  
**Role:** Developing and managing interface color schemes and aesthetics.

## How to Create a New Theme

1. Create a new CSS file in this directory (e.g. `css/themes/light.css`, `css/themes/cyberpunk.css`).
2. Copy all variables from `css/themes/default.css`.
3. Adjust the color variables according to your palette:
   - `--bg-main`: Viewport background
   - `--bg-card`: Surface card, sidebar, topbar
   - `--border-color`: Borders and dividers
   - `--text-main`: Primary text
   - `--text-muted`: Secondary text
   - `--accent-blue`: Highlights and active items
   - `--accent-green`: Primary buttons

## Guidelines
- **Tokens Only**: Do not define layout rules (`width`, `height`, `flex`, `margin`) inside theme files. Theme files should strictly provide CSS custom properties.
- This ensures your new themes automatically apply to both the **Desktop** and **Mobile** layouts without breaking anyone's work!
