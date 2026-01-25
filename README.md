# PortalMaker

**Version:** 1.0.0
**Author:** Joshua Walderbach

> Design branded portal pages for kiosks and curated user experiences. Visual editor with live preview and enterprise deployment.

## Features

- **Visual Editor** - Configure your portal without writing code
- **Tabbed Interface** - Organized configuration in Links, Style, Page, Extras, and Export tabs
- **Live Preview** - See changes in real-time as you edit
- **Auto-Save** - Your work is automatically saved to browser storage
- **Dual Logo Support** - Main logo above greeting, small logo with flexible corner/greeting positioning
- **SVG Upload** - Upload SVG files or reference hosted logos
- **Color Themes** - 20 preset WCAG-compliant themes plus custom colors
- **Advanced Colors** - Override individual colors (background, text, links, hover states)
- **Icon Library** - 40+ built-in SVG icons for groups and links
- **Link Layouts** - Cards, List, or Grid display with configurable columns
- **Button Styles** - Rounded, Square, or Text-only link buttons
- **Button Sizes** - Small, Medium, or Large button sizing
- **Announcement Banner** - Optional banner with Info/Warning/Urgent styles
- **Computer Name Display** - Show hostname or FQDN with flexible positioning (top-right, footer, or below greeting)
- **FQDN Identifier** - Extract site/region from device FQDN via nslookup
- **Drag-and-Drop** - Reorder groups and links by dragging
- **Quick Start Templates** - Load ready-made kiosk layouts
- **Auto-Redirect** - Optionally redirect to another page after a delay
- **Import/Export** - Save and load configurations as JSON
- **WCAG Compliant** - Generated pages meet accessibility standards
- **Enterprise Ready** - PowerShell scripts for Intune/SCCM/Win32 deployment

## Quick Start

1. **Open** `index.html` in any modern browser
2. **Configure** your page settings, colors, and links
3. **Preview** changes in real-time on the right panel
4. **Download** the PowerShell script or standalone HTML

## Configuration

### Layout Settings

| Setting | Description |
|---------|-------------|
| Page Title | Browser tab text |
| Greeting | Main heading (e.g., "Welcome") |
| Main Logo | Logo displayed above the greeting (upload SVG or enter URL) |
| Small Logo | Secondary logo with flexible positioning (corner or beside greeting) |
| Computer Name | Toggle display with format (hostname or FQDN) and position (top-right, footer, or below greeting) |
| FQDN Identifier | Extract site/region from device FQDN via nslookup with configurable position |
| Date/Time | Optional live clock (ISO 8601) |
| Footer | Optional footer text |
| Auto-Redirect | Redirect to another URL after specified seconds |
| Announcement Banner | Optional banner with title, message, and style (Info/Warning/Urgent) |
| Link Layout | Cards (default), List, or Grid display |
| Button Style | Rounded (default), Square, or Text-only |
| Button Size | Small, Medium (default), or Large |
| Script Name | Name used in the PowerShell script filename |
| Destination Path | Where the portal saves on target machines |

### Color Themes

Choose from 20 preset themes or create custom colors:

**Walmart** · **Sunset** · **Violet** · **Slate** · **Forest** · **Ocean** · **Crimson** · **Monochrome** · **Berry** · **Midnight** · **Teal** · **Coffee** · **Steel** · **Winter** · **Spring** · **Summer** · **Independence** · **Halloween** · **Synthwave** · **Corporate**

### Links

- **Add Group** - Create categorized link sections with optional icons
- **Add Link** - Add links to a group or as standalone (ungrouped)
- **Drag handles** - Use ⋮⋮ (groups) or ⋮ (links) to reorder

## Download Options

| Option | Use Case |
|--------|----------|
| **PowerShell Script** | Enterprise deployment via Intune/SCCM. Filename: `Generate-Portal_[ScriptName].ps1`. Captures computer name at runtime. |
| **Save Configuration** | Save settings as JSON file for backup or sharing. |
| **Load Configuration** | Import a previously saved configuration. |
| **Reset Everything** | Clear all settings and start fresh. |

See [DEPLOYMENT.md](DEPLOYMENT.md) for enterprise deployment instructions.

## Browser Support

Edge, Chrome, Firefox, Safari

## Files

| File | Purpose |
|------|---------|
| `index.html` | PortalMaker application |
| `styles.css` | Application styles |
| `app.js` | Application logic |
| `README.md` | This documentation |
| `DEPLOYMENT.md` | Enterprise deployment guide |
| `CONTRIBUTING.md` | Developer documentation |
