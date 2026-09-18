# 🎬 MovieExplorer

A responsive Movie Explorer application built with React, React Router, and Tailwind CSS. Browse shows, search by title, and view detailed information in an interactive modal — all powered by the free [TVMaze API](https://www.tvmaze.com/api).

## ✨ Features

- **Home page** — hero banner with a call-to-action into the movie listing page.
- **Movie listing page** — a search bar that filters the grid live (debounced) as you type, plus a responsive card grid (1 column on mobile, up to 4 on desktop).
- **Movie details modal** — backdrop image, title, rating, release date, runtime, genres and overview. Closable via the ✕ button, the "Close" button, clicking the backdrop, or the Escape key.
- Fully responsive layout for mobile, tablet and desktop.

## 🛠️ Tech stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router v8](https://reactrouter.com/) for routing
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [lucide-react](https://lucide.dev/) for icons
- [TVMaze API](https://www.tvmaze.com/api) for show data (no API key required)

## 📁 Project structure

```
movie-explorer/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieModal.jsx
│   │   └── Navbar.jsx
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Movies.jsx
│   ├── services/
│   │   └── get-shows.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

## 🌐 API endpoints used

| Purpose            | Endpoint                                     |
| ------------------- | --------------------------------------------- |
| Browse all shows    | `GET https://api.tvmaze.com/shows`            |
| Search shows by title | `GET https://api.tvmaze.com/search/shows?q=:query` |

## 📦 Deployment

This is a standard Vite + React app, so it deploys directly to [Vercel](https://vercel.com), [Netlify](https://netlify.com) or GitHub Pages:

- Build command: `npm run build`
- Output directory: `dist`

