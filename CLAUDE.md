# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing Page Studio is a WYSIWYG visual editor for creating branded kiosk landing pages. It generates standalone HTML files or PowerShell deployment scripts for Windows enterprise environments (Intune/SCCM).

**Tech stack:** Vanilla JavaScript (ES6+), HTML5, CSS3 with custom properties. No build system, bundler, or package manager.

## Development

Open `index.html` directly in a browser. No build step required.

**Hosted version:** https://landingpage-studio.pages.dev

## Architecture

### Files
- **index.html** - UI structure with 4-tab interface (Layout, Colors, Links, Export)
- **app.js** - Core logic, state management, HTML/PowerShell generation (~2600 lines)
- **styles.css** - Responsive styling with CSS variables, accessibility support

### State Management
All state persists to `localStorage` under key `LANDING_PAGE_STUDIO_STATE`. Auto-saves with 150ms debounce on changes.

```javascript
// Key state structures
let groups = [];           // Link groups with nested links array
let ungroupedLinks = [];   // Standalone links
let groupIdCounter = 0;    // Auto-increment for unique IDs
let linkIdCounter = 0;
```

### Key Constants
- `DEFAULTS` - 18 default configuration values
- `TEMPLATES` - Quick-start presets (customerFacing, employeeKiosk)
- `APP_PRESETS` - 15 Windows app shortcuts with paths/args
- `themes` - 20 WCAG-compliant color themes

### Rendering Pattern
Template literals with inline event handlers. All user content runs through `escapeHtml()` for XSS prevention.

```javascript
renderGroups()        // Rebuilds all group cards with drag handlers
renderUngroupedLinks() // Rebuilds standalone links section
updatePreview()       // Regenerates iframe preview (debounced)
```

### Drag-and-Drop
Multi-level system supporting:
- Group reordering
- Link reordering within/across groups
- Cross-container moves (group ↔ standalone)

State tracked via: `draggedGroupId`, `draggedLinkId`, `draggedLinkGroupId`, `draggedUngroupedId`

## Adding Features

### New Theme
Add to `themes` object with WCAG AA compliant colors:
```javascript
themes.myTheme = {
    primary: '#hex', accent: '#hex', background: '#hex',
    surface: '#hex', text: '#hex', textSecondary: '#hex',
    border: '#hex', linkBg: '#hex', linkText: '#hex', linkBorder: '#hex'
};
```

### New App Preset
Add to `APP_PRESETS` array:
```javascript
{ key: 'myapp', name: 'My App', path: 'C:\\Path\\app.exe', args: '' }
```

### New Configuration Field
1. Add default to `DEFAULTS`
2. Add input to appropriate tab in `index.html`
3. Wire up with `oninput`/`onchange` to update state
4. Handle in `saveState()` and `loadState()`
5. Use in `generateHTML()` and/or `generatePowerShellScript()`

## Accessibility Requirements

Generated pages target WCAG AA compliance. Maintain:
- ARIA attributes on interactive elements
- `role` attributes for custom widgets
- Screen reader announcements via `announce()` function
- Keyboard navigation support
- Sufficient color contrast in themes
