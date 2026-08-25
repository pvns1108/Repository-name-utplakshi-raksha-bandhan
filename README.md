# For Utplakshi — A Raksha Bandhan Film

A small, cinematic website made as a Raksha Bandhan gift. It plays out in five
scenes — an opening, a playful question, a set of memories, an emotional
message, and a final reveal — rather than reading like a typical festival
page.

Built with React + Vite. No backend, no database — it's a static site you can
run locally or host anywhere that serves static files.

---

## 1. Install

You'll need [Node.js](https://nodejs.org) 18 or newer installed. Then, from
this folder:

```bash
npm install
```

## 2. Run it locally

```bash
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`) and
auto-reloads as you edit files. This is the fastest way to preview your
changes — customize the text in `src/data/siteConfig.js`, save, and the
browser updates instantly.

## 3. Build for production

```bash
npm run build
```

This produces an optimized, static version of the site in a new `dist/`
folder. `npm run preview` will serve that build locally so you can
double-check it before sharing.

```bash
npm run preview
```

---

## Where to add Utplakshi's photos

Drop image files into:

```
public/photos/
```

using these exact filenames (matching what `siteConfig.js` expects by
default):

```
public/photos/memory-1.jpg
public/photos/memory-2.jpg
public/photos/memory-3.jpg
public/photos/memory-4.jpg
public/photos/memory-5.jpg
public/photos/memory-6.jpg
```

You don't have to use all six — three to six memories all look good. If you
remove one from `siteConfig.js`, you don't need to add its photo. If a photo
is missing or fails to load, the site automatically shows an elegant
placeholder instead of a broken image, so nothing will ever look broken.

Photos look best as **portrait or landscape shots, reasonably high
resolution** (at least 1200px on the longer side) — the site crops them to
fit its frames automatically, and desaturates them slightly until hovered.

## Where to add the music

Drop an MP3 file at:

```
public/music/rakhi.mp3
```

Music **never autoplays** — there's a small "Play soundtrack" button in the
bottom-right corner that she has to press herself (browsers block autoplay
audio anyway, and it's a nicer moment if she chooses to turn it on). If no
file is present at that path, the button quietly doesn't appear — the site
will not break or show an error.

## Where to edit the personal messages

Everything you'd want to personalize lives in one file:

```
src/data/siteConfig.js
```

That includes:

- `sisterName` — used as a fallback in the finale
- `opening` — the title-sequence text and the "Begin" button label
- `question` — the playful "are you ready?" beat, including both replies
- `memories` — the array of memory cards (image path, number, title, text)
- `message` — the eyebrow line and the list of lines that reveal one by one
  as she scrolls
- `finale` — the "Happy Raksha Bandhan" headline, her name, the closing
  message, and the signature
- `music` — whether the soundtrack control appears, and the path to the file

You shouldn't need to touch any component or CSS file to make this yours —
just edit the values in that one file. Use `"\n"` inside a string anywhere
you want a manual line break (the opening title and the finale message both
use this).

---

## Project structure

```
src/
├── components/          Reusable, presentational pieces
│   ├── AmbientBackground.jsx   grain, drifting particles, glow orbs
│   ├── CinematicText.jsx       a single scroll-revealed line of text
│   ├── MemoryCard.jsx          one memory card (with placeholder fallback)
│   ├── MusicButton.jsx         the floating soundtrack toggle
│   ├── Scene.jsx                shared full-height "scene" wrapper
│   └── ScrollIndicator.jsx     the small "keep going" hint
│
├── scenes/               The five scenes of the film, in order
│   ├── OpeningScene.jsx
│   ├── QuestionScene.jsx
│   ├── MemoriesScene.jsx
│   ├── MessageScene.jsx
│   └── FinaleScene.jsx
│
├── hooks/
│   ├── useInView.js                  IntersectionObserver helper
│   └── usePrefersReducedMotion.js    respects the OS "reduce motion" setting
│
├── data/
│   └── siteConfig.js     <- almost everything you'll want to edit is here
│
├── App.jsx               Composes the scenes and handles scene-to-scene
│                          navigation (smooth-scroll + focus management)
├── main.jsx               Entry point
└── styles.css             One centralized, sectioned stylesheet
```

---

## Accessibility notes

- All interactive elements are real `<button>` / `<a>` elements, reachable
  and operable by keyboard, with visible focus outlines.
- Advancing scenes by button (Begin, Continue) also moves keyboard/
  screen-reader focus to the next scene, the same way scrolling would.
- The site checks `prefers-reduced-motion` and, when it's set, skips the
  staggered timed reveals and decorative animation (particles, grain,
  twinkling stars) while keeping every scene and all of its content intact.
- Images use the memory's title as alt text; decorative elements (grain,
  particles, stars, the scroll hint) are hidden from assistive tech.

---

## Deploying it

Since this is a static site, you can host the contents of `dist/` (after
running `npm run build`) almost anywhere:

- **Vercel / Netlify** — connect the project folder (or drag-and-drop the
  `dist/` folder in Netlify's dashboard) and it will build and host it for
  free.
- **GitHub Pages** — push this folder to a repo and use GitHub's Pages
  action, or serve the `dist/` folder from a `gh-pages` branch.
- **Any static host** (S3, Cloudflare Pages, a shared host, etc.) — just
  upload the contents of `dist/` after building.

If you deploy under a subpath (e.g. `yoursite.com/rakhi/` instead of the
domain root), set `base: '/rakhi/'` in `vite.config.js` before building.

---

Made with care, for Utplakshi. Happy Raksha Bandhan.
