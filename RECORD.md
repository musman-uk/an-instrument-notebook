# RECORD

A consolidated technical record covering design constraints, structural decisions, development history, and planned work for **Instrumental Notes**.

---

## 1. Design Style

### Visual System
- Handwritten, analogue‑inspired aesthetic  
- Soft, neutral backgrounds with minimal ornamentation  
- Sticky‑note style cards with subtle rotation and shadow  
- Handwritten typeface for note bodies  
- Instrument‑related colours used sparingly as accents  

### Layout & Structure
- Notes follow a fixed rhythm: title → handwritten body  
- Instrument pages group notes without visual overload  
- Homepage presents instrument groups as a simple entry grid  
- Consistent layouts across notes to maintain collection feel  
- Line lengths and spacing tuned for short‑form reading  

### Navigation
- Minimal, predictable navigation with no hidden menus  
- Homepage includes About link; About page includes return link  
- Notes remain uncluttered, with no internal navigation elements  

### Interaction & Accessibility
- Subtle hover shifts; no distracting animations  
- Clear focus states and readable contrast  
- Cards lift slightly on hover to reinforce tactile metaphor  
- Links understated but identifiable  

### Growth Principles
- Notes added incrementally within instrument groups  
- Structure supports quiet expansion without changing tone  
- Notes remain timeless (not dated, not blog‑like)  
- Site grows as a curated collection, not a feed  

---

## 2. Development Overview

### Content Model
- Notes stored within instrument group folders  
- Each note uses a handwritten‑style layout  
- Optional metadata planned for future expansion (IDs, tags, ordering)

### Template System
- Base layout defines global typography, spacing, and navigation  
- Note layout applies handwritten card style  
- Homepage and instrument pages use grid‑based grouping  

### Build Pipeline
- Eleventy used to generate static pages  
- Templates compiled into HTML under the output directory  
- Build process validated through incremental content additions  

---

## 3. Milestones

### Initial Structure
- Repository created with early folder layout  
- Instrument group folders added with placeholder notes  
- Base, note, and About layouts drafted  

### Build & Layout
- Eleventy configuration established  
- Homepage grid refined for instrument groups  
- Navigation pattern finalised (homepage About link, About return link)

### Visual System
- Handwritten note style clarified  
- Instrument accent colours introduced  
- Layout spacing and card behaviour tested with first full note set  

---

## 4. Version History

### Unreleased
- Initial repository structure established  
- Foundational templates and content layout added  
- Drafted Index and Prelude content  
- Early build and generation workflow set up (in progress)  

---

## 5. Roadmap

### v1.0.0 — First Release
- Populate each instrument group with an initial curated set of notes  
- Finalise colour palette and handwritten rendering behaviour  
- Introduce optional metadata for notes (IDs, tags, ordering)  
- Ensure Eleventy build process reliably generates the static site  
- Prepare structure for gradual expansion of notes and instrument groups  
