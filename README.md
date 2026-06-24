# afghaizzam — Personal Portfolio

Personal portfolio website for **Afgha Izzam Tursina**, CCUS Research Analyst at Rystad Energy.

🌐 **Live site:** [afghaizzamtursina.github.io](https://afghaizzamtursina.github.io) *(update this link once deployed)*

---

## Features

- **Bilingual (EN / ID)** — full language toggle with `localStorage` persistence
- **Dark / Light mode** — theme toggle with logo swap and `localStorage` persistence
- **Medium RSS integration** — auto-fetches articles from Medium with a curated whitelist and English title/excerpt overrides
- **Data-driven** — all content lives in one `SITE` object; no HTML restructuring needed to update anything
- **Single file** — entire site is one `index.html` with embedded CSS and JS; only `assets/` folder needed alongside it

---

## File Structure

```
portfolio/
├── index.html                  ← entire site (HTML + CSS + JS)
└── assets/
    └── images/
        ├── profile-picture.svg
        ├── icon/
        │   ├── logo-it-white.svg          ← nav logo (dark mode)
        │   ├── logo-it-darkblue.svg       ← nav logo (light mode)
        │   └── logo-it-white-bgblue.svg   ← favicon
        └── projects/
            ├── 1_well placements.png
            ├── 2_material balance pressure.png
            ├── 3_well correlation.png
            ├── 4_distance optimization.png
            ├── 5_well log analysis.png
            ├── 6_rock type prediction.png
            └── 7_business intelligence.png
```

---

## How to Update Content

All content is in the `SITE` object at the top of the `<script>` block in `index.html`. You never need to touch the HTML or CSS to update text, jobs, projects, or blog posts.

### Personal info
```js
name:  "Your Name",
email: "your@email.com",
cvUrl: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID",
```

### Add a new job
Paste a new object at the **top** of `SITE.experience[]`:
```js
{
  date:    "Jan 2026 – Present",
  role:    "Your Role",
  company: "Company Name",
  bullets: {
    en: ["English bullet 1", "English bullet 2"],
    id: ["Poin Indonesia 1", "Poin Indonesia 2"],
  },
  tags: ["Tool1", "Tool2"],
},
```

### Add a new project
Paste a new object at the **top** of `SITE.projects[]`:
```js
{
  title: { en: "Project Title",    id: "Judul Proyek" },
  desc:  { en: "English description.", id: "Deskripsi Indonesia." },
  image: "assets/images/projects/your-image.png",
  tags:  ["Python"],
  github: "https://github.com/...",   // leave "" to hide
  demo:   "",
},
```

### Add a blog article
Paste a new object into `SITE.blog.whitelist[]`. Order here = display order.
```js
{
  url: "https://medium.com/@izzamtursina/your-article-slug",
  en: {
    title:   "English Title",
    excerpt: "English summary of the article...",
  },
},
```
If `en` is omitted, the original Medium content (Indonesian) is shown in both languages.

### Change translations
All UI strings are in `SITE.i18n`. Each key is `{ en: "...", id: "..." }`:
```js
bio: {
  en: "English bio text...",
  id: "Teks bio dalam Bahasa Indonesia...",
},
```

---

## Tech Stack

| Concern | Solution |
|---|---|
| Language | Plain HTML / CSS / JS — no framework, no build step |
| Fonts | Inter + JetBrains Mono via Google Fonts |
| Icons | Boxicons 2.1.4 via CDN |
| Blog feed | Medium RSS via [rss2json.com](https://api.rss2json.com) (free tier, 1000 req/day) |
| Hosting | GitHub Pages |
| CV hosting | Google Drive direct download link |

---

## Local Development

No build tools needed. Just open `index.html` in a browser:

```bash
# Option 1 — open directly
open index.html

# Option 2 — serve locally (avoids any CORS issues with RSS fetch)
npx serve .
# or
python3 -m http.server 8000
```

> The Medium RSS fetch requires an internet connection and may not work when opened as a local `file://` URL in some browsers due to CORS. Use a local server if you need to test the blog section.

---

## Deployment (GitHub Pages)

1. Push `index.html` and `assets/` to your GitHub repository
2. Go to **Settings → Pages → Source** — set branch to `main`, folder to `/ (root)`
3. Site goes live at `https://yourusername.github.io/repo-name`

Changes go live automatically ~30 seconds after each push.

---

## Contact

- **Email:** afghaizzam21@gmail.com
- **LinkedIn:** [afghaizzamtursina](https://www.linkedin.com/in/afghaizzamtursina/)
- **Medium:** [@izzamtursina](https://medium.com/@izzamtursina)
