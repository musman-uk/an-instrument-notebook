# Seasonal Notes

This repository contains an in‑development project called **Seasonal Notes**, a small, handwritten‑feeling website that presents short reflections arranged around the four seasons of the year.

## Project Contents

A short summary of what each part of the project contains:

- `source/` – Markdown notes and Nunjucks templates used to generate the site  
- `docs/` – the generated static site ready for deployment  
- `assets/` – fonts, images, and supporting files  
- `README.md` – main overview of the project  
- `ROADMAP.md` – planned development and future directions  
- `DEVLOG.md` – notes on changes, iterations, and build progress  
- `DESIGN-NOTES.md` – design philosophy, layout decisions, and rationale  
- `.github/workflows/` – automated workflow that runs the build process

## Development Process

A simplified view of how the website is being developed:

| Stage        | Location               | Purpose                                                |
|--------------|------------------------|--------------------------------------------------------|
| Write        | `source/`              | Notes and templates are authored and updated          |
| Build        | `.eleventy.js` | Static site generator compiles pages and layouts   |
| Automate     | `.github/workflows/`   | Workflow triggers the build process upon manual dispatch |
| Deploy       | `docs/`                | Static HTML output used for GitHub Pages deployment   |

## Status

Version `0.0.0` – Draft  
The project is in its earliest phase, with structure, templates, and seasonal note rendering being established.
