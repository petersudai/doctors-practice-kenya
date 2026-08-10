# Uzima Family Clinic

A portfolio concept site for a fictional Kenyan family practice, built to demonstrate a
premium, locally-grounded design direction for pitching to real doctors across Kenya.

Stack: [Astro](https://astro.build), React islands, Tailwind CSS v4. Photography from Unsplash.

## Structure

- `src/pages/` — Home, About, Services, Doctors, Contact
- `src/components/` — Astro components + React islands (`WhatsAppButton`, `MobileMenu`, `BookingForm`)
- `src/data/site.ts` — all copy, doctor/service/branch/testimonial content, and image URLs in one place
- `src/styles/global.css` — Tailwind v4 theme tokens (colors, fonts)

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------- |
| `npm install`       | Install dependencies                         |
| `npm run dev`       | Start local dev server                       |
| `npm run build`     | Build production site to `./dist/`           |
| `npm run preview`   | Preview the production build locally         |
| `npx astro check`   | Type-check the project                       |

The booking form on `/contact` is UI-only for this demo. It validates and shows a
confirmation state client-side but doesn't send data anywhere.
