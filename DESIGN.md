---
version: alpha
name: AETHER Animation Library
description: A dark, cinematic high-performance landing page for a motion library featuring deep blacks, monochrome aesthetics, and physics-based interactions.
colors:
  background: "#050505"
  text-main: "#f0f0f0"
  text-muted: "#888888"
  accent: "#ffffff"
  border: "rgba(255,255,255,0.05)"
  loader-bg: "#000000"
typography:
  display:
    family: "Space Grotesk"
    weight: "700"
    styles: ["bold", "uppercase", "tracking-tighter"]
  body:
    family: "Geist"
    weight: "400"
    size: "16px"
  mono:
    family: "Space Grotesk"
    size: "10px"
    styles: ["uppercase", "tracking-widest"]
spacing:
  section-padding: "8rem"
  gutter: "2rem"
rounded:
  standard: "8px"
  card: "12px"
  pill: "9999px"
components:
  - Nav
  - HeroParallax
  - BentoGrid
  - HorizontalScroll
  - StickyStack
  - MagneticButton
  - VideoExpand
  - Accordion
  - CanvasParticles
  - RepositoryGrid
---

## Overview
AETHER is a technical, avant-garde landing page designed to showcase animation primitives. The visual language is defined by "Digital Alchemy"—a high-contrast, monochrome palette that emphasizes texture, motion density, and cinematic depth. The interface feels reactive and fluid, utilizing a custom cursor system, noise overlays, and physics-based interactions to create a tactile digital environment. The layout is spaced aggressively to permit large-scale typography and immersive media to breathe.

## Colors
The palette is strictly limited to grayscale to ensure focus remains on motion and light.
- **Primary Background**: `#050505` (Deep off-black).
- **Primary Text**: `#f0f0f0` (High-contrast off-white).
- **Muted Text**: `#888888` for secondary labels.
- **Borders**: Subtle `rgba(255,255,255,0.05)` or `#222` for structural definition.
- **Overlays**: Translucent black gradients (`rgba(0,0,0,0.8)`) used to ensure text legibility over media.

## Typography
- **Space Grotesk**: Used for high-impact headlines (7xl to 9xl) and functional labels. Characterized by tight tracking and bold weights.
- **Geist**: The primary sans-serif for body copy and navigation, prioritizing legibility and a modern, Swiss-inspired aesthetic.
- **Special Treatment**: "Kinetic Type" effects utilize `-webkit-text-stroke` to create hollow outlines that fill with color on hover.

## Layout
- **Fluid Verticality**: Standard vertical scrolling punctuated by horizontal transitions.
- **Bento Grid**: A 3-column grid in the "Work" section with asymmetric vertical offsets (e.g., center column pushed down 24 units).
- **Horizontal Pipeline**: A full-viewport horizontal scroll section triggered by vertical scroll progress.
- **Sticky Wrapper**: A two-column split layout where the left column is sticky (titles/description) and the right column scrolls through content cards.

## Elevation & Depth
- **Parallax Layers**: Background images move at a slower rate (`data-speed="0.4"`) than the foreground text.
- **Z-Indexing**: UI Overlays (noise, cursor, progress bar) sit at the highest layers (z-90 to z-9999).
- **Inner Depth**: 3D Tilt cards use `translateZ(40px)` for internal elements to create an actual sense of perspective during mouse tracking.

## Shapes
- **Containers**: Rounded corners are used consistently: `8px` for buttons, `12px` for large cards, and `20px` for immersive video containers.
- **Geometric Accents**: Perfectly circular magnetic wraps and buttons evoke precision.

## Components
- **Custom Cursor**: A dual-element system consisting of a 6px white dot and a 40px trailing circle that expands/blurs on hoverable elements.
- **Magnetic Wraps**: Interactive containers that pull their content towards the cursor based on distance.
- **Reveal Items**: Items that use CSS transitions (`cubic-bezier(0.23, 1, 0.32, 1)`) to fade up or scale in as they enter the viewport.
- **Section Labels**: Small, monospace tags floating in the top-left of sections, framed by 1px borders.
- **Marquee**: An infinite-looping text track using `translateX(-50%)` animation.

## Page Sections

### Navigation
Fixed, full-width bar with `mix-blend-difference`. Features a minimalist logo (AETHER) on the left, centered links (WORK, REPOSITORY), and a pill-shaped "Menu" button on the right.

### Hero Parallax
Full-screen immersive section. Contains a grayscale architecture background with a `0.4` parallax speed. Large headlines "DIGITAL ALCHEMY" are split into lines with vertical reveal animations. A "System v1.0" badge sits at the top.

### Bento Reveal (Work)
Grid of three cards. The first features a grayscale-to-color zoom on hover. The second is offset vertically with a parallax lag. The third is a 3D tilt card that tracks mouse movement, containing an icon and "Interactive 3D" text.

### Horizontal Pipeline
A 400vh tall section that locks to the viewport. Content translates horizontally across the screen, featuring large gradient text ("Design Systems"), video previews, and a drawing SVG vector animation.

### Adaptive Stack
A sticky left-hand title ("Adaptive Stack") paired with a scrolling stack of 16:9 image cards on the right. Cards transition from 60% to 100% opacity on hover.

### Physics & Trail
A dedicated interaction zone. Features circular magnetic buttons and an image trail system that spawns ephemeral architecture snippets behind the cursor.

### Immersive Expand
A 70% width video container that expands to 100% width and loses its border-radius as it reaches the center of the viewport.

### Counters & Text
Three columns of statistics (Projects, FPS, Awards) with numerical counting animations. Below, a paragraph with a staggered "word-by-word" reveal effect.

### SVG Clipping Mask
A high-impact section where a background video (ink in water) is visible only through the letters of the word "IMPACT" via an SVG `mask`.

### Flex Accordion
A set of four vertical panels. On hover, a panel expands (flex-3) while others shrink (flex-1). Images transition from grayscale to color on hover.

### Repository Grid
A dark grey section (`#0a0a0a`) containing a 3-column grid of code snippet buttons. Each button features a monospace label and a copy icon, triggering a toast notification upon interaction.

### Footer
A fixed background section revealed as the main content is scrolled away. Dominated by a massive 15vw title "AETHER" in neutral-800, creating a "curtain reveal" effect.

## Motion & Interaction
- **Preloader**: A 0-100% counter with a progress bar that slides up on completion.
- **Magnetic Physics**: Elements follow the mouse within a specific radius using a `0.8` multiplier for subtle lag.
- **Tilt**: 3D rotation based on mouse coordinate percentage relative to card center.
- **Image Trail**: Rapid spawning/despawning of images with a random rotation variable (`--r`).
- **Smooth Scroll**: Controlled via `scroll-smooth` with custom JS-driven horizontal and expansion triggers.

## Do's and Don'ts
- **Do**: Use high-contrast photography with grain or noise.
- **Do**: Maintain strict monochrome unless using the specific hover color reveals.
- **Don't**: Use standard scrollbars; the site requires a hidden scrollbar (`no-scrollbar`).
- **Don't**: Use sharp transitions; always prefer `cubic-bezier(0.23, 1, 0.32, 1)`.

## Accessibility
- **Selection Style**: Text selection is inverted (white background, black text).
- **Contrast**: High contrast ratios maintained between `#f0f0f0` and `#050505`.
- **Responsiveness**: Horizontal sections and grids collapse to single-column vertical stacks on mobile devices.

## Assets
1. `https://cdn.tailwindcss.com` - Styling engine
2. `https://unpkg.com/lucide@latest` - Icon library
3. `https://fonts.googleapis.com` - Font provider
4. `https://fonts.gstatic.com` - Font CDN
5. `https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=2553&auto=format&fit=crop` - Hero Background
6. `https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2600&auto=format&fit=crop` - Fluidity Card
7. `https://images.unsplash.com/photo-1506729623306-b5a934d88b53?q=80&w=2670&auto=format&fit=crop` - Depth Card
8. `https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2487&auto=format&fit=crop` - Perspective Card
9. `https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop` - Design Systems Image
10. `https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2694&auto=format&fit=crop` - Process Image
11. `https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&w=2600&auto=format&fit=crop` - Stack Image 1
12. `https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2600&auto=format&fit=crop` - Stack Image 2
13. `https://images.unsplash.com/photo-1496564203457-11bb12075d90?q=80&w=2500&auto=format&fit=crop` - Video Thumbnail
14. `https://assets.mixkit.co/videos/preview/mixkit-abstract-video-of-ink-in-water-2527-large.mp4` - Ink Mask Video
15. `https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?q=80&w=2500` - Accordion Structure
16. `https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2600&auto=format&fit=crop` - Accordion Robotics
17. `https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop` - Accordion Network
18. `https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop` - Accordion Orbit
19. `image.jpg` - Placeholder for repository thumbnails
20. `%23noiseFilter` - SVG Noise generated via turbulence
21. `http://www.w3.org/2000/svg` - SVG Namespace
22. `https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=200` - Trail Image 1
23. `https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=200` - Trail Image 2
24. `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200` - Trail Image 3
