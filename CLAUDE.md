# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PortalMaker (v1.0.18) is a WYSIWYG visual editor for creating branded kiosk portal pages. It generates standalone HTML files or PowerShell deployment scripts for Windows enterprise environments (Intune/SCCM).

**Tech stack:** Vanilla JavaScript (ES6+), HTML5, CSS3 with custom properties. No build system, bundler, or package manager.

## Development

Open `index.html` directly in a browser. No build step required.

## Architecture

### Files
- **index.html** - UI structure with 5-tab interface (Links, Style, Page, Extras, Export)
- **app.js** - Core logic, state management, HTML/PowerShell generation (~3300 lines)
- **styles.css** - Responsive styling with CSS variables, accessibility support

### State Management
All state persists to `localStorage` under key `startPageStudioState`. Auto-saves with 150ms debounce on changes.

```javascript
// Key state structures
let groups = [];           // Link groups with nested links array
let ungroupedLinks = [];   // Standalone links
let groupIdCounter = 0;    // Auto-increment for unique IDs
let linkIdCounter = 0;
let colorOverrides = {};   // Advanced color customizations
```

### Key Constants
- `DEFAULTS` - Default configuration values (layout, colors, banner, button size, computer name format)
- `BANNER_STYLES` - Announcement banner color schemes (info, warning, urgent)
- `TEMPLATES` - Quick-start presets (customerFacing, employeeKiosk)
- `ICON_LIBRARY` - Built-in SVG icons organized by category (ui, microsoft, browsers, tools)
- `COLOR_PROPERTIES` - Advanced color customization fields
- `themes` - 20 WCAG-compliant color themes

### Rendering Pattern
Template literals with inline event handlers. All user content runs through `escapeHtml()` for XSS prevention.

```javascript
renderGroups()         // Rebuilds all group cards with drag handlers
renderUngroupedLinks() // Rebuilds standalone links section
updatePreview()        // Regenerates iframe preview (debounced)
renderAdvancedColors() // Rebuilds color override inputs
```

### Drag-and-Drop
Multi-level system supporting:
- Group reordering
- Link reordering within/across groups
- Cross-container moves (group ↔ standalone)

State tracked via: `draggedGroupId`, `draggedLinkId`, `draggedLinkGroupId`, `draggedUngroupedId`

### FQDN Identifier Feature
Uses `nslookup` for reverse DNS lookup to determine fully qualified domain name. Supports:
- Computer name format option: `hostname` or `fqdn`
- Network identifier display modes with regex pattern matching
- Position options include `below-greeting` for centered display under greeting text

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

### New Icon to Library
Add to appropriate category in `ICON_LIBRARY`:
```javascript
ICON_LIBRARY.categoryName.push({ name: 'Icon Name', svg: '<svg>...</svg>' });
```

### New App Preset
Add to `APP_PRESETS` array:
```javascript
{ id: 'app-id', name: 'App Name', url: 'protocol:', category: 'Category Name', icon: '<svg>...</svg>' }
```
- Use Windows URI schemes where available (e.g., `calculator:`, `ms-settings:`, `ms-paint:`)
- For apps without native URI schemes, add to `PROTOCOL_HANDLERS` and use `PortalMaker-appname:` format
- Icons should use `fill="currentColor"` for theme compatibility
- Categories: `System Tools`, `Accessibility`, `Browsers`, `Print/Devices`

### New Protocol Handler
For Windows apps without native URI schemes, add to `PROTOCOL_HANDLERS`:
```javascript
PROTOCOL_HANDLERS['PortalMaker-myapp'] = 'C:\\Path\\To\\app.exe';
```
Then reference in `APP_PRESETS` with url: `PortalMaker-myapp:`

The PowerShell deployment script registers these as custom URL protocols and optionally configures Edge/Chrome to suppress the "Open app?" confirmation dialogs.

### New Configuration Field
1. Add default to `DEFAULTS`
2. Add input to appropriate tab in `index.html`
3. Wire up with `oninput`/`onchange` to call `updatePreview()` or `debouncedUpdatePreview()`
4. Handle in `saveState()` and `loadState()`
5. Handle in `applyImportedConfig()` for config import
6. Handle in `resetAll()` for reset functionality
7. Use in `generateHTML()` and/or `generatePowerShellScript()`

## Accessibility Requirements

Generated pages target WCAG AA compliance. Maintain:
- ARIA attributes on interactive elements
- `role` attributes for custom widgets
- Screen reader announcements via `announce()` function
- Keyboard navigation support
- Sufficient color contrast in themes
