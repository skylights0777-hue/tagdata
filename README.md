# TagFoundry

Marketing site for [TagFoundry](https://tagfoundry.co/), a data tagging company for the AI ecosystem. The site covers annotation, human-in-the-loop validation, multimodal tagging, and model evaluation, and it includes a strategy-call form that opens the visitor's email app with the request.

Pages:

- `/` — home
- `/solutions` — labeling capabilities and industries
- `/contact` — cofounders
- `/book-strategy-call` — strategy-call request form

## Run locally

Paths in the HTML are extensionless (`/solutions`, not `solutions.html`). Use a static server that maps those paths to the `.html` files:

```bash
npx --yes serve . -l 4173
```

Then open http://localhost:4173/. `serve` clean URLs load `solutions.html` at `/solutions` (and the same for `/contact` and `/book-strategy-call`). Styles, `booking.js`, and `favicon.svg` are served from the site root.

`python3 -m http.server` only serves the `.html` filenames, so in-page links such as `/solutions` will 404.

## Deploy

The site is hosted on [Vercel](https://vercel.com/) at [tagfoundry.co](https://tagfoundry.co). `vercel.json` publishes the repository root as a static site with no build step (`framework` and `buildCommand` are null). Rewrites serve `solutions.html`, `contact.html`, and `book-strategy-call.html` at `/solutions`, `/contact`, and `/book-strategy-call`. `cleanUrls` stays off, so those `.html` URLs still return the same files instead of redirecting. Trailing slashes redirect to the extensionless path.

[Netlify](https://www.netlify.com/) config remains in `netlify.toml`. It publishes the repository root and leaves Pretty URLs post-processing off so `/solutions` and `/solutions.html` both return the page. No build command is required there either.
