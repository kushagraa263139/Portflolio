## Project rules
- All portfolio text, links and facts live in `src/content/portfolio.ts`; components only render it. Why: the owner edits content in one place.
- Links with an empty URL are hidden via `withUrl`, never shown as placeholders. Why: no invented or broken links.
- The site is a single scrolling page (`/`) with section anchors and a static résumé PDF in `public/`. Why: frontend-only portfolio with smooth-scroll nav.
- Pinboard visuals use the paper/tone tokens and `@utility` classes in `src/styles.css` (tape, pin-card, chip, btn-*), not ad hoc colours. Why: one consistent design language.
