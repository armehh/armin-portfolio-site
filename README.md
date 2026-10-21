# Armin Rafiqin | Software Engineering Portfolio

Personal portfolio website showcasing my experience, projects and technical skills as a final-year Software Engineering (Multimedia System Development) student at Universiti Kebangsaan Malaysia (UKM).

**Live site:** https://armin-portfolio-preview.onrender.com

## Sections

- **Professional Summary:** who I am, what I build and what I'm looking for next
- **Experience & Leadership:** multimedia and publicity roles in UKM student communities (PERTAMA, PERMAS)
- **Featured Projects:** games, platforms and web apps from coursework and my final year project
- **Technical Skills:** languages, tools and methods across web, game and design work
- **Education & Recognition:** education, achievements and languages
- **Contact:** contact details and a message form

## Tech Stack

- HTML, CSS and vanilla JavaScript (no framework)
- Fonts: Space Grotesk and Inter (Google Fonts)
- Hosting: Render (static site), auto-deployed from `main`
- Backend: [describe, e.g. contact form handler]

## Project Structure

```
armin-portfolio-site/
├── portfolio/
│   ├── index.html      # Page structure
│   ├── content.js      # All site content (text, projects, skills, links)
│   ├── css/style.css   # Styling
│   ├── js/script.js    # Rendering and interactions
│   └── favicon.svg
├── backend/            # [describe what it does]
└── README.md
```

Page content is kept in `content.js` and rendered into `index.html` by `js/script.js`, so most updates only need edits to `content.js`.

## Run Locally

```bash
git clone https://github.com/armehh/armin-portfolio-site.git
cd armin-portfolio-site/portfolio
```

Open `index.html` in a browser, or serve the folder with any static server, for example:

```bash
npx serve .
```

## Deployment

Pushing to `main` triggers an automatic deploy on Render.

## Author

**Armin Rafiqin**
GitHub: [@armehh](https://github.com/armehh)

&copy; 2026 Armin Rafiqin. All rights reserved.
