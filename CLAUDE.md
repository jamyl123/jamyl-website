# CLAUDE.md — Jamyl Mamri Personal Website

## Project Overview
Personal professional website for **Jamyl Mamri**, a senior AI & digital strategy consultant. The site serves as his online presence at mamri.com, replacing the previous minimal site and Wix site.

- **GitHub Repo:** jamyl123/jamyl-website
- **Live URL:** https://jamyl123.github.io/jamyl-website/
- **Target domain:** mamri.com (to be connected via GitHub Pages custom domain)
- **Hosting:** GitHub Pages (legacy deploy from `main` branch)
- **Language:** French (lang="fr")

## Owner Profile
- **Name:** Jamyl Mamri
- **Title:** Consultant Senior en IA & Stratégie Digitale
- **Companies:** Synchronism (sync.ma, founded 2005, Rabat/Montreal) and 8mind.co (founded 2022, Rabat/Paris)
- **Experience:** 25+ years between Morocco and Canada
- **Education:** Harvard Kennedy School (2018), ESCP Paris, HEC Montreal
- **Key clients:** AMDIE, Stellantis, Marsa Maroc, Bank Al Maghrib, Tanger Med, Maroc Telecom, Royal Air Maroc, etc.
- **Awards:** Espoir TIZI 2015, American Design Award, YPA Excellence Award, Best e-commerce site in Morocco (Med-IT)
- **Contact:** jamyl.mamri@synchronism.com | +212 6 67 21 81 23 | Rabat, Morocco
- **LinkedIn:** linkedin.com/in/jamylmamri

## Folder Structure
```
jamyl-website/
├── .claude/
│   └── launch.json          # Dev server config (python3 http.server on port 8080)
├── .git/
├── index.html               # Single-page website (all sections)
├── style.css                # All styles (CSS custom properties, responsive)
├── script.js                # Animations, counters, mobile menu, scroll effects
├── photo-jamyl-mamri.png    # Profile photo (pre-cropped to ~880x880 square)
└── CLAUDE.md                # This file
```

## File Details

### index.html
Single-page site with all content. Includes:
- SEO meta tags (description, keywords, author, robots, canonical)
- OpenGraph and Twitter Card meta tags
- JSON-LD structured data (Person schema)
- Google Fonts: Inter (body) and Playfair Display (headings)
- All sections inline (no routing, no framework)

### style.css
~600 lines of vanilla CSS using CSS custom properties. Key design tokens in `:root`. Fully responsive with breakpoints at 1024px, 768px, and 480px. Mobile hamburger menu.

### script.js
Vanilla JS (no dependencies). Features:
- Navbar scroll effect (transparent -> frosted glass on scroll)
- Mobile menu toggle with body scroll lock
- Smooth scroll for anchor links
- Intersection Observer for fade-in animations
- Animated number counters (ease-out cubic)
- Active nav link highlighting on scroll
- Hero elements are immediately visible (no fade-in delay)

### photo-jamyl-mamri.png
Profile headshot with blue/grey background, navy blazer, white shirt. Pre-cropped to square (~880x880) from original landscape image to ensure face is centered in the circular frame. Source file: `~/Documents/Perso 2026/JM Profile pic/Profile pic  Jamyl Mamri JM 2026.png`

## Design Choices

### Color Palette
- **Background light:** #FAFAF8 (warm off-white)
- **Background dark:** #0F1923 (deep navy)
- **Background accent:** #1A2A3A (medium navy)
- **Primary/Gold:** #C8A84E (used for accents, badges, borders, CTAs)
- **Primary light:** #D4BC6A
- **Primary dark:** #B8942E
- **Text dark:** #1A1A1A
- **Text light/muted:** #6B7280
- **Text on dark:** #E8E8E6
- **Card dark:** #162330
- **Border dark:** #2A3A4A

### Typography
- **Headings:** Playfair Display (serif) — elegant, premium feel
- **Body:** Inter (sans-serif) — clean, modern readability
- **Hero name:** clamp(2.5rem, 6vw, 4.5rem), Playfair Display 700
- **Section titles:** clamp(1.8rem, 4vw, 2.8rem), Playfair Display 600
- **Body text:** 16px base, line-height 1.7

### Layout
- Max container width: 1200px
- Single-page with smooth scroll navigation
- Alternating light/dark sections for visual rhythm
- Dark hero with radial gradient background pattern (subtle gold glows)
- Cards with border + hover elevation effects

### Profile Photo
- Displayed as 180x180 circle with gold border (3px, rgba gold)
- `object-fit: cover; object-position: center center`
- Image is pre-cropped to square to ensure proper centering
- Box shadow for depth

## Sections (in order)

1. **Navigation** — Fixed top navbar. Logo "JM" left, links right. Frosted glass on scroll. Gold "Contact" CTA button. Mobile hamburger menu.

2. **Hero** (#hero) — Full viewport dark section. Contains: circular profile photo, "CONSULTANT SENIOR · EXPERT IA" badge, name in large serif, tagline, quote in italic serif, description, two CTA buttons ("Prendre contact" + "Découvrir mon parcours"), 4-column stats grid.

3. **Profil** (#about) — Light background. Two-column grid: left = bio text with links to sync.ma and 8mind.co, right = 3 highlight cards (locations, education, awards).

4. **Expertise** (#expertise) — Dark background. 3-column grid of 6 numbered cards: IA appliquée, Stratégie Digitale, Coaching Exécutif, Innovation Publique, Data & Performance, Formation & Conférences.

5. **Parcours** (#experience) — Light background. Vertical timeline with 5 entries: 8mind.co (2022+), Synchronism (2005+), Secteur Public (2011+), HEM (2016-2019), Bell Canada (2001-2005).

6. **Références** (#clients) — Dark background. 4-column grid of 16 client names + "Plateformes nationales conçues" list (MoroccoNow, Zonesindustrielles.ma, MarocPME, SimpleIR, Tanger Med).

7. **Formation** (#education) — Light background. 4 education cards: Harvard Kennedy School, HEC Montréal, ESCP Paris, Lycée Lakanal.

8. **Distinctions** (#awards) — Accent dark background. 4 awards with SVG icons: Espoir TIZI, American Design Award, YPA Excellence Award, Meilleur site e-commerce.

9. **Contact** (#contact) — Dark background. 2x2 grid of contact cards: Email, Phone, LinkedIn, Location.

10. **Footer** — Darkest background. Brand name, links to Synchronism/8mind/LinkedIn, copyright.

## User Preferences
- **No languages section** — was removed per user request
- **Quote displayed prominently** in hero: "J'accompagne les dirigeants qui veulent faire de l'intelligence artificielle un avantage stratégique réel."
- **4 stats aligned** in grid: 25+ Années d'expérience, 200+ Projets réalisés, 50+ Masterclasses en IA, 8 Pays d'intervention
- **Photo centering is important** — user iterated multiple times to get the face perfectly centered in the circle. Solution: pre-crop image to square before using object-fit.
- User does not know how to code — all changes should be fully implemented, not explained
- User prefers minimal permission prompts
- Site content is in French
