# Frontend Mentor - Tech Book Club Landing Page

A solution to the [Tech Book Club Landing Page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tech-book-club-landing-page-fZQidjHU73).

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Features](#features)
- [Author](#author)

---

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Tech Book Club Landing Page](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

---

## Tech Stack

- **React 19** — component-based UI
- **TypeScript** — type safety across components and constants
- **Tailwind CSS v4** — utility-first styling with a custom design token theme
- **Vite** — fast dev server and build tool
- **Fontsource** — self-hosted Martian Mono and Inter fonts
- **ESLint + Prettier** — linting and formatting

---

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Button.tsx
│   ├── CommunityBadge.tsx
│   └── MembershipCard.tsx
├── section/            # Page sections
│   ├── Header.tsx
│   ├── AboutSection.tsx
│   ├── CommunitySection.tsx
│   ├── Steps.tsx
│   ├── Membership.tsx
│   ├── Testimonial.tsx
│   └── Footer.tsx
├── svg/                # SVG icon components
│   ├── Check.tsx
│   ├── Star.tsx
│   ├── UpArrow.tsx
│   ├── DownArrow.tsx
│   ├── PatternArrow.tsx
│   ├── Bluesky.tsx
│   └── Linkedin.tsx
├── constants/
│   └── index.ts        # Static data and TypeScript types
├── App.tsx
├── main.tsx
└── index.css           # Tailwind config and custom design tokens
```

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## Features

- Fully responsive layout — mobile, tablet, and desktop
- Accessible markup with semantic HTML, ARIA labels, and screen reader support
- Membership section with three plan tiers (Starter, Pro, Enterprise)
- Decorative pattern glow on the highlighted membership card
- Dynamic copyright year in the footer
- Self-hosted fonts via Fontsource (no external requests)

---

## Author

- Frontend Mentor — [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- GitHub — [@yourusername](https://github.com/yourusername)
