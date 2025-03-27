# Accessible Accordion

## This project demonstrates a simple accordion built with accessibility in mind, following WCAG 2.1 guidelines.

I could've followed best practices and create separate branches for each feature and fix, but i kept my commits to the `main` branch for simplicity.

Step by step
1. Project Configuration

- Next.js, Typescript, Tailwind, eslint

2. Created Accordion Component

- Created a reusable Accordion component

3. ARIA & Accessibility Basics

Level A/AA

- aria-expanded, aria-controls, aria-labelledby
- role="region" for content panels
- hidden={!isOpen} to hide inactive panels from screen readers
- Focus styles are visible via Tailwind focus:outline

4. Main Page Layout (page.tsx)

- Semantic HTML tags (h1 and h2 hierarchy)

Testing
## Axe - initial scan
Showed 2 issues:

- Documents must have <title> element to aid in navigation
Fix: set document title using Next.js metadata

- Links must be distinguishable without relying on color
Fix 1: Used a darker blue for the <footer>'s <a> tag.
Fix 2: Added an underline

### VoiceOver - Screen Reader Test
This component was manually tested with VoiceOver (macOS).

- Button labels were announced correctly
- aria-expanded was read aloud as expected
- Expanded content was accessible after toggling

![VoiceOver reading expanded state](./public/screenshots/voiceover-expanded-state.png)