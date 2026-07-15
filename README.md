# Abdikarim Singir — Portfolio

A minimalist single-page portfolio for Abdikarim Singir, senior graphic designer. Built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

## Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Styling:** Tailwind CSS with CSS-variable design tokens (`app/globals.css`)
- **Language toggle:** English / 中文 via `components/language-provider.tsx`
- **Contact form:** API route (`app/api/contact/route.ts`) sends email over SMTP using `nodemailer`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Contact form / email

The contact form posts to `/api/contact`, which sends mail via SMTP. Configure these variables in `.env.local` (see `.env.example`):

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=your-email@gmail.com
```

If SMTP is not configured, the API returns a clear error instead of a false success, and the UI shows a message telling visitors to email directly. The API also applies basic per-IP rate limiting.

To test locally you can use MailHog and point `SMTP_HOST`/`SMTP_PORT` at it, or run `npx tsx scripts/test-email.ts`.

## Editing content

- **Projects:** `lib/portfolio-data.ts` (`projects` array). Add an image under `public/images/` and reference it as `/images/your-file.jpg`. An empty `image` falls back to a numbered placeholder card.
- **About / CV:** `components/portfolio-about.tsx`. The CV path/filename are defined once in `cvConfig` (`lib/portfolio-data.ts`) and the downloaded file lives at `public/documents/`.
- **Site config:** `lib/site-config.ts` (name, email, phone, social links, logo).
- **Copy & translations:** `lib/translations.ts` (English + 中文).
- **Theme tokens:** `app/globals.css` (colors, accent) and `tailwind.config.ts`.

## Project structure

```
app/
  layout.tsx        Root layout + metadata
  page.tsx          Composes the sections
  globals.css       Design tokens / base styles
  api/contact/      Contact form email endpoint
components/
  portfolio-*.tsx   Page sections (header, hero, work, about, services, contact, footer)
  language-provider.tsx
  ui/button.tsx     Only UI primitive actually used
lib/
  portfolio-data.ts Translations-free content (projects, cvConfig)
  site-config.ts    Contact/social config
  translations.ts   EN / ZH copy
  utils.ts          cn() helper
public/
  images/           Project images
  documents/        CV PDF
scripts/
  test-email.ts     Local email smoke test
```

## Deploy

The project builds as a static site with one dynamic API route (`/api/contact`).

- **Hosting:** Vercel is configured via `vercel.json` (framework `nextjs`). Any Node host works too.
- **CI:** `.github/workflows/ci.yml` runs `npm ci && npm run build` on every push/PR.
- **Environment variables:** set these in your host's dashboard (do **not** commit real values; `.env.local` is gitignored):

  ```
  SMTP_HOST=smtp.gmail.com
  SMTP_PORT=587
  SMTP_SECURE=false
  SMTP_USER=you@gmail.com
  SMTP_PASS=your-16-char-app-password
  SMTP_FROM=you@gmail.com
  CONTACT_EMAIL=you@gmail.com
  ```

  Use a Gmail **app password**, not your normal password. If unset, the form returns a clear error instead of a false success.
- **Domain:** update `metadataBase` in `app/layout.tsx` to your real domain so the generated Open Graph image (`app/opengraph-image.tsx`) and favicon (`app/icon.svg`) get absolute URLs.

