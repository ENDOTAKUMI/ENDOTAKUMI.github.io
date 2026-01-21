# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website for ENDO Takumi (遠藤 拓巳), hosted on GitHub Pages. The site showcases the owner's profile, event participation/organization work (primarily FlutterKaigi, Kotlin Fest, and PHPerKaigi), and contact information.

## Technology Stack

- Pure HTML/CSS/JavaScript (no build process)
- jQuery 3.4.1 for DOM manipulation and animations
- scrollgress library for scroll progress bar
- FontAwesome 5.6.1 for social icons
- Japanese language content (lang="ja")

## Project Structure

```
├── index.html          # Main single-page application
├── css/
│   ├── reset.css      # CSS reset styles
│   ├── parts.css      # Component styles (buttons, animations)
│   └── layout.css     # Layout and page structure
├── js/
│   └── script.js      # All JavaScript functionality
└── img/               # Event images and assets
```

## Architecture

### Single-Page Application Flow

The site is a single-page application with three main sections:
1. **Profile** (#profile) - Personal introduction and background
2. **Works** (#works) - Portfolio of event participation/organization
3. **Contact** (#contact) - Social media links

### Navigation System

Two navigation menus exist:
- **Desktop navigation** (#pc-nav) - Always visible header navigation
- **Mobile navigation** (#g-nav) - Slide-up menu triggered by hamburger button (.openbtn)

Both use smooth scrolling to section anchors and highlight the current section based on scroll position.

### Animation System

The site heavily uses scroll-triggered animations defined in js/script.js:

1. **Loading animation**: Splash screen (#splash) with logo fade-in/out on page load
2. **Scroll animations**:
   - `.bgLRextend` / `.bgappear` - Background extend and text appear effects
   - `.fadeUp` - Fade up from bottom
   - `.flipLeft` - Flip/rotate effect
3. **Current section detection**: Highlights active navigation based on scroll position
4. **Scroll progress bar**: scrollgress library shows reading progress
5. **Page-top button**: Appears after 200px scroll

### Key JavaScript Functions

- `PositionCheck()` - Calculates section positions for navigation highlighting
- `ScrollAnime()` - Updates navigation current state based on scroll
- `fadeAnime()` - Triggers scroll-based animation classes
- `PageTopAnime()` - Shows/hides scroll-to-top button

All animations are triggered by adding/removing CSS classes as elements enter/exit viewport.

## Development Workflow

### Making Content Changes

**Adding new event entries** (most common task):
1. Add new image to `img/` directory (event##.png format)
2. Copy an existing works-area section in index.html (lines 86-104, 106-122, etc.)
3. Update image src, event title, description, and external link
4. Event sections are ordered chronologically (newest first)

**Styling changes**:
- Component/animation styles: `css/parts.css`
- Layout/structure: `css/layout.css`
- Base reset: `css/reset.css` (rarely modified)

**Animation changes**:
- Animation triggers and logic: `js/script.js`
- Animation styling (transitions, transforms): `css/parts.css`

### Testing

Since this is a static site with no build process:
1. Open `index.html` directly in a browser, or
2. Use a local server: `python -m http.server 8000`
3. Test all three sections (Profile, Works, Contact)
4. Test responsive menu (mobile view)
5. Test scroll animations by scrolling through sections
6. Verify smooth scrolling navigation works

### Deployment

The site is deployed via GitHub Pages. Changes pushed to the main branch are automatically deployed.

## Important Notes

### SEO and Meta Tags

The site includes `<meta name="robots" content="noindex,nofollow" />` - this prevents search engine indexing. Remove this tag if the site should be publicly searchable.

### External Dependencies (CDN)

The site relies on these external resources:
- jQuery (code.jquery.com)
- scrollgress (cdnjs.cloudflare.com)
- FontAwesome (use.fontawesome.com)
- Google Fonts - Lato font (fonts.googleapis.com)

Changes to these dependencies require updating the CDN URLs in index.html.

### Image Optimization

Event images in `img/` are quite large (some over 13MB). Consider optimizing images before adding them to reduce page load time.

### Current Branch Context

As indicated by git status, the current branch is `feature/add_event` which suggests this is used for adding new event entries to the portfolio. This branch should be merged to `main` after completing event additions.
