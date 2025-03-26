# Accessible Accordion

## This project demonstrates a simple accordion built with accessibility in mind, following WCAG 2.1 guidelines.
        
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