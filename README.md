# An Instrument Notebook

This repository contains [An Instrument Notebook](https://musman-uk.github.io/an-instrument-notebook/) - a website gathering instruments and presenting them visually and sonically, with an accompanied note.

---

## Project Contents

A short summary of what each part of the project contains:

- `.github/workflows/` – automated workflow that runs the build process  
- `docs/` – the generated static site ready for deployment
- `releases/` – optional snapshots of the site for versioned or archived builds    
- `source/` – Markdown notes and Nunjucks templates used to generate the site  
- `.eleventy.js` – Eleventy configuration defining input paths, layouts, and build behaviour  
- `.gitignore` – patterns specifying files and directories excluded from version control  
- `README.md` – high‑level overview of the project, including purpose, structure, atnd development approach
- `RECORD.md` – consolidated technical record of design constraints, development process, milestones, and roadmap  
- `package.json` – project metadata and Node.js dependencies required for the Eleventy build

---

## Development Overview

A simplified view of how the website is being developed:

| Stage        | Location               | Purpose                                                |
|--------------|------------------------|--------------------------------------------------------|
| Write        | `source/`              | Notes and templates are authored and updated          |
| Build        | `.eleventy.js` | Static site generator compiles pages and layouts   |
| Automate     | `.github/workflows/`   | Workflow triggers the build process upon manual dispatch |
| Deploy       | `docs/`                | Static HTML output used for GitHub Pages deployment   |

## Status

Version `1.0.0` –  Published


---

<sub>© Mohammed Usman</sub>

<sub>All rights reserved. No commercial use, redistribution, or derivatives.</sub>
