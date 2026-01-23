# Contributing to Landing Page Studio

## Development Setup

1. Clone the repository
2. Open `index.html` in a browser
3. No build step, dependencies, or package manager required

## Architecture Overview

See [CLAUDE.md](CLAUDE.md) for detailed architecture documentation including:
- File structure
- State management
- Key constants and rendering patterns
- How to add new features

## Code Style

- **Vanilla JavaScript** (ES6+) - no frameworks or transpilers
- **Template literals** for HTML generation
- **CSS custom properties** for theming
- All user content must pass through `escapeHtml()` for XSS prevention

## Adding Features

### New Configuration Field

1. Add default value to `DEFAULTS` constant
2. Add input element to appropriate tab in `index.html`
3. Wire up `oninput`/`onchange` event to call `updatePreview()` or `debouncedUpdatePreview()`
4. Add to `saveState()` function
5. Add to `loadState()` function
6. Add to `applyImportedConfig()` function
7. Add to `resetAll()` function
8. Use in `generateHTML()` and/or `generatePowerShellScript()`

### New Color Theme

Add to `themes` object with all required color properties:

```javascript
themes.myTheme = {
    primary: '#hex',
    accent: '#hex',
    background: '#hex',
    surface: '#hex',
    text: '#hex',
    textSecondary: '#hex',
    border: '#hex',
    linkBg: '#hex',
    linkText: '#hex',
    linkBorder: '#hex'
};
```

Ensure WCAG AA contrast compliance.

### New App Preset

Add to `APP_PRESETS` array:

```javascript
{ key: 'uniquekey', name: 'Display Name', path: 'C:\\Path\\To\\app.exe', args: '' }
```

### New Icon

Add to appropriate category in `ICON_LIBRARY`:

```javascript
ICON_LIBRARY.categoryName.push({
    name: 'Icon Name',
    svg: '<svg viewBox="0 0 24 24">...</svg>'
});
```

## Testing

- Test in Edge, Chrome, Firefox, Safari
- Verify generated HTML renders correctly
- Test PowerShell script on Windows target
- Check accessibility with screen reader
- Validate color contrast ratios

## Pull Requests

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request with clear description
