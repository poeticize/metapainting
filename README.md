# MetaPainting

**Be a Part of the Art** — [metapainting.net](https://metapainting.net)

Collaborative art featuring dozens, sometimes hundreds, of participants per piece. Each painting tells the story of its creation, from blank canvas to shared masterpiece, with a hidden UV-reactive layer revealed under blacklight.

## Tech Stack

- [Astro](https://astro.build) — Static site generator
- Deployed on [Netlify](https://netlify.com) (free tier)
- Content Collections for scalable painting data
- Netlify Forms for contact and email-gated downloads

## Development

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build for production
npm run preview   # Preview production build locally
```

## Adding a New Painting

1. Create a folder in `public/paintings/{slug}/` with your images (final, progress, blacklight, etc.)
2. Create `src/content/paintings/{slug}.md` with frontmatter:

```yaml
---
title: "Painting Name"
tagline: "A short evocative description"
participants: 50
featured: false
sortOrder: 10
tags: ["blacklight", "nature"]
thumbnail: "/paintings/{slug}/final.jpg"
thumbnailDark: "/paintings/{slug}/dark.jpg"
phases:
  - label: "Phase Name"
    description: "What happened in this phase"
    images: ["image1.jpg", "image2.jpg"]
---
```

3. Push to `main` — Netlify rebuilds automatically.

## Project Structure

```
src/
  content/paintings/   — Markdown files (one per painting)
  components/          — Reusable Astro components
  layouts/             — Page layouts
  pages/               — Route pages
  styles/              — Global CSS
public/
  paintings/           — Image assets per painting
  vectors/             — Downloadable template files
```
