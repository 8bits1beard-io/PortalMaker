# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PortalMaker is a WYSIWYG visual editor for creating branded kiosk portal pages. It generates standalone HTML files or PowerShell deployment scripts for Windows enterprise environments (Intune/SCCM).

**Tech stack:** Vanilla JavaScript (ES6+), HTML5, CSS3 with custom properties. No build system, bundler, or package manager.

**Version:** Defined in `APP_VERSION` constant at the top of `app.js`.

## Development

Open `index.html` directly in a browser. No build step required.

## Architecture

### Files
- **index.html** - UI structure with 5-tab interface (Links, Style, Page, Extras, Export)
- **app.js** - Core logic, state management, HTML/PowerShell generation (~4500 lines)
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
let customPresets = [];    // User-defined application presets
```

### Key Constants
- `APP_VERSION` - Current version string (update when releasing)
- `DEFAULTS` - Default configuration values (colors, banner, button size, computer name format, greeting mode, iOS spacing, open links in new tab). Note: `linkLayout` is auto-determined (cards when groups exist, grid for standalone links only)
- `VISUAL_STYLES` - Unified visual style presets that define both button and group appearance (ios, rounded, glass, elevated, minimal, gradient, outline, square)
- `BANNER_STYLES` - Announcement banner color schemes (info, warning, urgent)
- `TEMPLATES` - Quick-start presets (customerFacing, employeeKiosk)
- `ICON_LIBRARY` - Built-in SVG icons organized by category (ui, microsoft, browsers, tools)
- `COLOR_PROPERTIES` - Advanced color customization fields
- `APP_PRESETS` - Built-in Windows application shortcuts
- `PROTOCOL_HANDLERS` - Maps custom `PortalMaker-*` protocols to executable paths
- `themes` - 20 WCAG-compliant color themes

### Visual Styles
The `visualStyle` setting replaces the old separate `buttonStyle` and `cardStyle` settings. Each visual style defines both button and group appearance for a cohesive look:

| Style | Button Type | Group Type | Description |
|-------|-------------|------------|-------------|
| `ios` | ios | ios | App-style icons with iOS Settings-like grouped lists |
| `rounded` | rounded | subtle | Soft rounded buttons with subtle frosted cards |
| `glass` | glass | glass | Full glassmorphism effect |
| `elevated` | elevated | elevated | Prominent shadows and depth |
| `minimal` | textonly | none | Clean text links, no card backgrounds |
| `gradient` | gradient | elevated | Subtle gradients with depth |
| `outline` | outline | bordered | Elegant bordered buttons and cards |
| `square` | square | bordered | Sharp corners, modern look |

Migration: Old configs with `buttonStyle`/`cardStyle` are automatically migrated to the closest `visualStyle` match.

### Rendering Pattern
Template literals with inline event handlers. All user content runs through `escapeHtml()` for XSS prevention.

```javascript
renderGroups()         // Rebuilds all group cards with drag handlers
renderUngroupedLinks() // Rebuilds standalone links section
updatePreview()        // Regenerates iframe preview (debounced)
renderAdvancedColors() // Rebuilds color override inputs
renderThemeSwatches()  // Rebuilds theme picker grid
```

### Key Functions
- `generateHTML(useComputerNameVariable)` - Generates the portal HTML (line ~2184)
- `generatePowerShellScript()` - Generates deployment script with protocol handlers (line ~3786)
- `saveState()` / `loadState()` - localStorage persistence (lines ~1337, ~1437)
- `applyImportedConfig(config)` - Applies imported JSON/HTML configuration (line ~4280)
- `init()` - Application bootstrap, called on DOMContentLoaded (line ~1577)

### Drag-and-Drop
Multi-level system supporting:
- Group reordering
- Link reordering within/across groups
- Cross-container moves (group ↔ standalone)

State tracked via: `draggedGroupId`, `draggedLinkId`, `draggedLinkGroupId`, `draggedUngroupedId`

### Greeting Mode
A `<select id="greetingMode">` dropdown controls greeting behavior with four modes:
- `none` — No greeting displayed (default)
- `time` — Time-based only ("Good morning/afternoon/evening"), no text input
- `custom` — User-typed greeting text, text input visible
- `custom-time` — Time-based prefix prepended to custom text, text input visible

`toggleGreetingInput()` shows/hides the text input based on the selected mode. Old configs with `timeGreeting` boolean are migrated automatically in `loadState()` and `applyImportedConfig()`.

### iOS Spacing
When button style is `ios`, a "Shortcut Spacing" slider (`iosSpacing`, 0–2rem, default 0.75rem) controls padding between shortcuts. `toggleIosSpacing()` shows/hides the slider based on button style. The value applies to button padding, standalone grid gap, and links-list gap in the generated CSS.

### Device Name Info Feature
Extracts and displays location, site code, or other info embedded in device names (FQDN). Uses `nslookup` for reverse DNS lookup. Supports:
- Computer name format option: `hostname` or `fqdn`
- Regex pattern matching to extract specific segments (e.g., site code, region)
- Position options include `below-greeting` for centered display under greeting text

### Custom Presets
Users can create custom application presets (`customPresets` array) with name, URL, category, and icon. These persist in localStorage and can be exported/imported with configurations.

## Adding Features

### New Theme
Add to `themes` object with WCAG AA compliant colors:
```javascript
themes.myTheme = {
    primary: '#hex', accent: '#hex'
};
```
Themes can optionally override derived colors: `linkBg`, `linkText`, `linkHoverBg`, `linkHoverText`, `bodyText`, `headingColor`. If omitted, these are derived from `primary` and `accent` automatically.

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

## Testing

Manual testing approach:
- Test in Edge, Chrome, Firefox, Safari
- Verify generated HTML renders correctly in browser
- Test PowerShell script execution on Windows
- Check accessibility with screen reader
- Validate color contrast ratios meet WCAG AA
