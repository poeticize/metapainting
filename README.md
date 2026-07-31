# MetaPainting

**Be a Part of the Art** — [metapainting.net](https://metapainting.net)

Every MetaPainting begins as a completed work of art. That painting is then masked, divided into numbered shapes, and handed to the crowd. Participants peel off a section, paint their contribution onto the surface, and become inseparable from the finished piece. The result is a layered collaboration between artist and community — dozens, sometimes hundreds of people — each one a valid creator in their own right.

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

### 1. Create the image folder

```
public/paintings/{slug}/
```

### 2. Name your images using this convention

Images are named `{phase}-{sequence}.jpg` so they sort naturally by phase:

| Prefix | Phase | Description |
|--------|-------|-------------|
| `01-design` | Design & Concept | Sketches, vector layouts, planning |
| `02-painting` | The Painting (Underpainting) | The completed painting before masking |
| `03-masking` | The Masking | Masked surface, cut shapes, numbered sections |
| `04-collab` | The Collaboration | Participants painting, peeling masks, event photos |
| `05-complete` | Completion | Finished collaborative work (studio light) |
| `06-effect` | Effects | Blacklight, phosphorescence, special lighting (optional) |
| `07-event` | Event Photos | Venue, crowd, engagement shots (optional) |
| `thumb` | Thumbnail | Primary gallery card image |
| `thumb-alt` | Alt Thumbnail | Alternate view for gallery toggle (optional) |

**Examples:**

```
public/paintings/chemical-expression/
  01-design-1.jpg
  02-painting-1.jpg
  02-painting-2.jpg
  03-masking-1.jpg
  03-masking-2.jpg
  04-collab-1.jpg
  04-collab-2.jpg
  04-collab-3.jpg
  05-complete-1.jpg
  06-effect-1.jpg
  thumb.jpg
  thumb-alt.jpg
```

### 3. Create the content file

Create `src/content/paintings/{slug}.md`:

```yaml
---
title: "Painting Name"
tagline: "A short evocative description"
participants: 50
medium: "Acrylic on wood"
featured: false
sortOrder: 10
tags: ["crowd", "nature"]
hasBlacklight: false
photoAlbumUrl: "https://photos.app.goo.gl/..."  # optional
thumbnail: "/paintings/{slug}/thumb.jpg"
thumbnailAlt: "/paintings/{slug}/thumb-alt.jpg"  # optional
phases:
  - label: "The Painting"
    description: "Description of the underpainting"
    images: ["02-painting-1.jpg"]
  - label: "The Collaboration"
    description: "Description of the crowd phase"
    images: ["04-collab-1.jpg", "04-collab-2.jpg"]
  - label: "Complete"
    description: "The finished work"
    images: ["05-complete-1.jpg"]
---

Optional long-form body text about this painting's story...
```

### 4. Push to `main`

Netlify rebuilds automatically on push.

## Project Structure

```
src/
  content/paintings/   — Markdown files (one per painting)
  components/          — Reusable Astro components
  layouts/             — Page layouts (Base, PaintingDetail)
  pages/               — Route pages
  styles/              — Global CSS design system
public/
  paintings/           — Image assets organized by painting slug
  vectors/             — Downloadable template files (SVG, PDF)
```

## Known Paintings (from Google Photos albums)

Albums with source material:
- [Live Painting Collage](https://photos.app.goo.gl/KNcMFZmYvdNh7HKX7) — People painting (Dec 2013 – Nov 2025)
- [Gallery of Wonders](https://photos.app.goo.gl/317HsySBDr2qkFas6) — Show with pre-painted masked photos (May 2025)
- [Whirled Religion](https://goo.gl/photos/eEhQ3qpyK8uJphMZA) — Individual painting album
- [Chemical Expression](https://photos.app.goo.gl/o1WXWisY3bLzK8vk8) — Individual painting album
- [Love and Burning](https://photos.app.goo.gl/tA1rTkYdVChnktM99) — Individual painting album

Paintings mentioned in documents: Coded (67), MetaDead (51), Infinitree (42), Freak When See (72), Atomic (31), and many more.
