# Simple Accessible Accordion

I built this project to showcase how to create accessible UI components — and how to **test**, **validate**, and ensure they behave the way users (and screen readers) expect.

It’s designed with accessibility at its core.

## Notes

I could have created separate branches for each feature and fix, but kept everything in `main` for simplicity in this case.

That said, I made sure to keep the commits concise and descriptive, so you can explore the commit history for a clear view of the development process and decisions made along the way.

## Live Demo

Try it here: 

[samuel-fuchs-accessible-accordion.netlify.app](https://samuel-fuchs-accessible-accordion.netlify.app/)

## Features

- WCAG 2.1 A/AA–compliant
- Keyboard-accessible
- ARIA attributes: `aria-expanded`, `aria-controls`, `aria-labelledby`, `role="region"`
- Icon rotation for visual cue
- Responsive layout
- Axe-tested: 0 violations
- Jest-tested for accessibility behaviors

## Accessibility Testing

All related screenshots can be found in the Screenshots section below

### Axe DevTools
- Used the browser extension to validate color contrast, ARIA usage, and interactions

Fixed all initial issues:
- Missing `<title>` → Fixed via Next.js metadata
- Link color contrast → Adjusted and underlined

### Lighthouse

- Ran an accessibility audit using Chrome Lighthouse
- Score: **100 / 100**
- Verified semantic structure, ARIA roles, contrast, and keyboard support

### VoiceOver (macOS)
- Button labels are read correctly
- `aria-expanded` state is announced
- Toggled content is properly accessible

### WAVE (WebAIM)

- Used the WAVE browser extension to review accessibility visually
- No critical errors flagged
- Verified presence of landmarks, heading structure, and ARIA attributes

### Keyboard Navigation
- Tabbing focuses each button
- Space / Enter toggle open/close state
- Visual focus rings are present

## Testing

Tested with `Jest` and `React Testing Library` using `@testing-library/user-event` for realistic interactions.

### What’s covered:

- Renders all accordion items
- Toggles content on click and with keyboard
- `aria-expanded` updates correctly
- Keyboard focus and toggling via Enter/Space

### Run tests:

```bash
npm run test
```

## Build Process

1. Project Configuration

- Initialized project with Next.js, Tailwind, TypeScript

2. Accordion Component

- Built accessible component

3. ARIA & WCAG Support

- Level A/AA:
- `aria-expanded`, `aria-controls`, `aria-labelledby`
- `role="region"` for content
- Focus styles using `focus:outline`

4. Main Page Layout

- Used semantic headings (example: h1, h2)
- Sectioned content

5. Accessibility Passes

- Axe: initial scan flagged 2 issues → resolved
- VoiceOver manually tested

## Screenshots

### Axe Audit – 0 Issues
![Axe test passing](./public/screenshots/axe/axe-initial-scan-pass-02.png)

### Axe Audit – first scan
![Axe first scan](./public/screenshots/axe/axe-initial-scan-pass-01.png)

### VoiceOver Reading Accordion
![VoiceOver reading](./public/screenshots/voiceover/voiceover-expanded-state.png)

### Lighthouse Analysis
![Lighthouse audit](./public/screenshots/lighthouse/lighthouse-accessibility-score.png)

### WAVE Overlay on Accordion  
![WAVE overlay](./public/screenshots/wave/wave-overlay-screenshot.png)

### Mobile Responsive View
![Mobile view](./public/screenshots/mobile/mobile-view.png)

### Jest Tests Passing
![Jest passing](./public/screenshots/testing/jest-tests-passing.png)

## Author

Made with ❤️ by [Samuel Fuchs](https://github.com/samuelfuchs)

I care deeply about building inclusive, user-first digital experiences — and I’m always learning more about how accessibility can drive better UX and broader reach.