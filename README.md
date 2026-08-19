# nicolasdirnegger.com

Source for my academic website. Static HTML, CSS and a little JavaScript,
deployed to GitHub Pages.

Live at **https://nickeyd01.github.io/WebsiteND/**

## Layout

```
index.html      the whole site — one page, sections linked by hash
style.css       design tokens at the top, then components in page order
script.js       scrollspy: highlights the nav and syncs the URL hash
favicon.svg     resonance-dip mark
files/          CV (PDF)
images/         portrait, figures, project photos
```

There is no build step and no dependencies. Fonts come from Google Fonts;
everything else is in the repo.

## Working on it locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Opening `index.html` directly with `file://`
mostly works, but relative paths and fonts behave better over HTTP.

## Deploying

Pushing to `main` triggers `.github/workflows/jekyll-gh-pages.yml`, which builds
with Jekyll and deploys to Pages. Nothing here uses Jekyll templating yet — the
workflow just copies the files through — so a push is all that's needed.

## Editing content

Each entry under Publications, Talks, Patents, Press, Community and Earlier work
is one `<div class="pub">` or `<li class="pub">` block with the same shape:

```html
<div class="pub">
  <p class="pub__year">2026</p>          <!-- left rail: year, month, or role -->
  <div class="pub__body">
    <h3><a href="...">Title</a></h3>
    <p class="pub__authors">Authors or venue</p>
    <p class="pub__meta">
      <span class="tag">Highlighted label</span>       <!-- filled accent -->
      <span class="tag tag--quiet">Quiet label</span>  <!-- outlined -->
      <span class="mono">Citation</span>
    </p>
    <p class="pub__note">A sentence or two on what it is.</p>
  </div>
</div>
```

To add something, copy a neighbouring block and change the text. Publications are
ordered newest first; the left rail carries plain years, and press entries use
`Mon YYYY` because they are all from the same year.

Colours, type and spacing are CSS custom properties in the `:root` block at the
top of `style.css`, with dark-mode values in the `prefers-color-scheme` block
directly below. Change them there rather than in individual rules.

## Notes

- External links need `target="_blank" rel="noopener noreferrer"`.
- Figures need `loading="lazy"` and real `alt` text.
- The header graphic is inline SVG in `index.html`, styled by the `.trace` rules
  in `style.css`. It uses `currentColor`-style theming via the `--signal` token,
  so it follows dark mode automatically.
- `images/UCLA.png` is currently unused.

## Licence

MIT — see `LICENSE`.
