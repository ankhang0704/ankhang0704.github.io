---
name: improve-codebase-architecture
description: Audit landing page layout, architecture, responsiveness, and critical bugs. Use when diagnosing layout issues, responsive design problems, or styling inconsistencies in the portfolio/landing page.
---

# Improve Landing Page Architecture Skill

## Quick start
Act as the architecture and layout governor for the Portfolio and FM Dictionary landing pages. Focus on HTML structure, Tailwind CSS classes, vanilla JavaScript logic, and responsive design rather than complex backend paradigms.

## Core Guardrails & Rules

1. **Focus on Layout & Responsiveness (P0):** 
   - Identify critical bugs related to layout, mobile responsiveness (Tailwind grid/flex), and structural integrity.
   - Audit Dark/Light mode consistency across all components to ensure no unreadable text or broken backgrounds.

2. **Bilingual System Consistency (P0):**
   - Verify that `data-vi` and `data-en` attributes are used correctly.
   - Ensure the Vanilla JS toggle script logic effectively switches visibility without breaking layout.

3. **Styling & Aesthetics (P1):**
   - Ensure "Ambient Glow" effect is maintained in all main sections.
   - Validate correct typography (`font-serif italic` for emphasis, `text-xl` for body, `md:text-8xl` for hero headers).
   - Icons must remain monochromatic and use Font Awesome 6.

4. **Routing & Deployment (P0):**
   - Enforce root-relative absolute paths (e.g., `/style.css`) for all internal links, assets, and scripts.
   - Ensure trailing slashes are present for directory links (e.g., `/fm-dictionary/`).

## Audit Checklist
- [ ] Dark/Light mode consistency.
- [ ] Bilingual toggle functionality.
- [ ] Mobile responsiveness and Grid/Flex structure.
- [ ] Mobile Menu (Hamburger) functionality and overlay links.
- [ ] AOS animation performance.
- [ ] Root-relative paths for assets and links.

## Reporting Structure
When auditing, output the results using the following markdown format:

```markdown
# Layout & Architecture Report

## 🔴 Critical Layout/Logic Bugs
* **Problem:** [Clear description]
* **Evidence:** [Cite specific file paths/lines]
* **Proposed Fix:** [Actionable steps using HTML/Tailwind/Vanilla JS]

## 🟡 Styling & Responsiveness Warnings
* **Problem:** [Description]
* **Evidence:** [File links]
* **Proposed Fix:** [Actionable steps]

## 🧪 Verification Tasks
[Detail what needs to be manually tested (e.g. mobile view, language toggle, animations)]
```
