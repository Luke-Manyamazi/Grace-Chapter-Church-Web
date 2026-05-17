# Grace Chapter Church

Official website for Grace Chapter Church — *Revealing Christ to the World*.

Built with React, Vite, and Tailwind CSS.

---

## Tech Stack

- **React 18** + **Vite 6**
- **Tailwind CSS** + **Shadcn/ui**
- **Framer Motion** — animations
- **React Router DOM v6** — routing
- **TanStack React Query** — data fetching & caching
- **YouTube Data API v3** — live sermons feed
- **EmailJS** — contact form

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Luke-Manyamazi/Grace-Chapter-Church-Web.git
cd Grace-Chapter-Church-Web
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and fill in your keys:

```bash
touch .env
```

| Variable | Where to get it |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | [emailjs.com](https://www.emailjs.com) → Email Services |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS → Email Templates |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS → Account → API Keys |
| `VITE_YOUTUBE_API_KEY` | [Google Cloud Console](https://console.cloud.google.com) → YouTube Data API v3 |

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Build for Production

```bash
npm run build
```

Output is in the `dist/` folder — deploy to any static host (Netlify, Vercel, Cloudflare Pages, etc.).

---

## Project Structure

```
src/
├── pages/          # One file per route
├── components/
│   ├── layout/     # Navbar, Footer
│   ├── shared/     # PageHero, YouTubeEmbed, etc.
│   └── ui/         # Shadcn/ui primitives
├── hooks/          # useDocumentTitle, useLatestSermons
└── lib/            # utils, query client, auth context
public/
└── images/         # All church photos and logos
```

---

## Social & Contact

- Website: [gracechapterchurch.online](https://gracechapterchurch.online)
- YouTube: [@GraceChapterChurch](https://www.youtube.com/@GraceChapterChurch)
- Instagram: [@grace_chapter_church](https://www.instagram.com/grace_chapter_church)
- Facebook: [GraceChapterChurch](https://www.facebook.com/GraceChapterChurch)
