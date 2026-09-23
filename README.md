# Ridhima Dubey — Portfolio

A React + Vite portfolio site: a photo-free hero with the portfolio name/role, about, skills,
education timeline, projects, a separate **Internships** section (expandable cards), and a
separate **Certifications** section (filterable gallery). Includes an interactive accent-color
switcher (5 swatches) in the hero.

## Sections

- **Hero** — name, "Frontend Developer Portfolio" heading, tagline, contact links, color picker
- **About** — summary + quick stats
- **Skills** — programming, web dev, tools, frameworks
- **Education** — timeline
- **Projects** — Women Saver Website, E-commerce Website
- **Internships** — QSkill Front-End Development internship, Astrid Infotech UI/UX internship,
  each an expandable card with a "View certificate" button
- **Certifications** — Mastering C/C++, C++ Through C, Intro to HTML (Sololearn), Database Power
  webinar — filterable by category (Programming / Web / Workshop), click a card to view full size
- **Contact**

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy to Vercel, Netlify, GitHub Pages,
or any static host.

## Customize

- **Colors**: edit the `ACCENTS` array in `src/theme.js`.
- **Content**: each section is its own file in `src/components/` — edit the text/data arrays
  directly (`Internships.jsx`, `Certifications.jsx`, `Projects.jsx`, etc.).
- **Images**: certificate/internship images live in `public/images/`.
