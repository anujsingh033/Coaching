# Achievers Coaching Institute Website

A modern, premium, responsive static website for coaching institutes such as IIT-JEE, NEET, UPSC, SSC, Banking, Railway and foundation programs.

## Pages

- `index.html` - Home page with animated hero, counters, courses, faculty, testimonials, FAQ, brochure and demo forms.
- `about.html` - Institute story, vision, mission, founder message, timeline and awards.
- `courses.html` - Filterable and searchable course catalog with detail modal.
- `faculty.html` - Faculty cards, experience, qualifications and demo lecture CTAs.
- `results.html` - Rankers, counters, selection statistics and improvement journey cards.
- `gallery.html` - Filterable masonry gallery with lightbox.
- `blog.html` - Blog/news listing with search, categories and pagination.
- `admission.html` - Admission process, eligibility, fee/scholarship cards and multi-step form.
- `contact.html` - Contact information, Google map, branches, inquiry form, WhatsApp and live chat UI.
- `portal.html` - Student portal landing page with login, password toggle and dashboard preview.

## Tech

- HTML5
- Tailwind CSS CDN
- CSS3 custom design system
- JavaScript ES modules
- GSAP and ScrollTrigger
- Framer Motion animation API via CDN import
- Lucide icons

## Run Locally

Use any static server from the project root:

```bash
python -m http.server 5500
```

Then open:

```text
http://127.0.0.1:5500/index.html
```

The site uses CDN assets for Tailwind, GSAP, Framer Motion, Lucide, Google Fonts and remote optimized imagery.

## Notes

- Dark mode is persisted with `localStorage`.
- Lead forms are front-end demos and show success states after validation.
- Map, WhatsApp, chat and video/demo buttons are UI-ready placeholders for production integrations.
- Image tags use lazy loading where appropriate.
