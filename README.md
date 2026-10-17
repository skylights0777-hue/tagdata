# TagData

Marketing site for [TagData](https://tagdata.netlify.app/), an enterprise AI infrastructure company. It describes data operations, human-in-the-loop review, multimodal workflows, and model evaluation, and it includes a strategy-call form that opens the visitor's email app with the request.

Pages:

- `/` — home
- `/solutions` — capabilities and industries
- `/contact` — cofounders
- `/book-strategy-call` — strategy-call request form

## Run locally

Paths in the HTML are extensionless (`/solutions`, not `solutions.html`), matching the live site. Use a static server that maps those paths to the `.html` files:

```bash
npx --yes serve . -l 4173
```

Then open http://localhost:4173/. `serve` clean URLs load `solutions.html` at `/solutions` (and the same for `/contact` and `/book-strategy-call`). Styles and `booking.js` are served from the site root.

`python3 -m http.server` only serves the `.html` filenames, so in-page links such as `/solutions` will 404.

## Deploy

Deploy target is [Netlify](https://www.netlify.com/). Connect the repository and publish the site root. `netlify.toml` sets `publish = "."` and leaves Pretty URLs post-processing off so `/solutions` and `/solutions.html` both return the page, the same way the current site does. No build command is required.
