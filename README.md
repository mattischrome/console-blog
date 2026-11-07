# mattischrome

The source for [mattischrome.com](https://mattischrome.com), a personal blog about music, books, travel, technology and whatever else. It's built with [Hugo](https://gohugo.io) and a custom theme called **marginalia**, deployed on [Netlify](https://www.netlify.com), with search by [Pagefind](https://pagefind.app).

- [Running it locally](#running-it-locally)
- [Writing a post](#writing-a-post)
- [Images and video](#images-and-video)
- [Shortcodes](#shortcodes)
- [Category colours](#category-colours)
- [The Now page](#the-now-page)
- [Deploying](#deploying)

## Running it locally

```bash
hugo serve            # live preview at http://localhost:1313 (drafts not shown)
hugo serve -D         # include drafts
hugo --gc --minify    # production build into public/
```

Search only works after a full build, because Pagefind indexes the built site:

```bash
hugo --gc --minify && npx pagefind --site public
```

The first build after a clone takes a minute or two, because Hugo resizes every image. After that the resized images come from Hugo's cache and builds take a few seconds.

## Writing a post

Every post is a **page bundle**: a folder under `content/posts/` holding an `index.md` and an `images/` folder.

```
content/posts/my-new-post/
├── index.md
└── images/
    ├── hero.jpg
    └── another-photo.jpg
```

`hugo new content posts/my-new-post` creates one from `archetypes/posts/`, with today's date and the year tag filled in. Bundles in `drafts/` are treated as if they were in `content/posts/`, so work in progress can live there.

### Front matter

```yaml
---
title: "Post Title"
categories: "Music"          # the first category sets the post's colour
tags: [Twenty Six, Albums]
date: "2026-11-07"
draft: false
layout: long                 # long | short | photo
hero: images/hero.jpg        # optional; tops the post and its card
hero_alt: "What the hero shows"
hero_caption: "Optional caption, *markdown* allowed"
toc: true                    # optional table of contents (h2–h3)
---
```

| Key | What it does |
|---|---|
| `layout` | `long` is the standard article layout, `short` uses larger type in a cosier column, and `photo` shows the hero full-width and puts the text second. |
| `hero` | The image on the post and on its listing card (cropped to 4:3 on cards). Posts without one get the default hero. |
| `toc` | Adds a table of contents, with a small ↑ link back to the top beside each heading. The older `tableOfContents: true` (set by `scripts/toc_script.py`) works too. |
| `categories` | Only the **first** category counts. It picks the colour (see [Category colours](#category-colours)). |

Put `<!--more-->` where the summary on the listing cards should end.

## Images and video

Images in a post's bundle are resized automatically at build time. Visitors get WebP versions at a sensible size for their screen, lazy-loaded, with width and height set so the page doesn't jump around while loading. You don't need to resize anything by hand: drop in the original and reference it.

| You write | You get |
|---|---|
| `![Alt text](images/photo.jpg)` | A responsive image at the width of the text column |
| `{{< figure src="images/photo.jpg" alt="…" caption="…" >}}` | The same, inside a `<figure>` with a caption |
| `{{< marginfigure src="images/photo.jpg" … >}}` | A small image in the margin |
| `hero: images/photo.jpg` | The post's hero image and its listing card |
| `![Alt text](images/clip.mp4)` | A muted, looping video that plays inline, like a GIF |

Things to know:

- **Use MP4 instead of GIF.** GIFs are passed through untouched, because resizing would lose the animation, so they stay huge. Convert them first:
  ```bash
  ffmpeg -i clip.gif -movflags +faststart -pix_fmt yuv420p \
    -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -crf 23 -an clip.mp4
  ```
  For the Iceland steam clip, that took 4.6 MB down to 80 KB.
- **Write the image as markdown or a shortcode, not raw HTML.** A raw `<img src="…">` tag skips the image processing and is served full size.
- **SVGs** are served as they are.
- **Old image URLs keep working.** Images used to live in `static/assets/images/`. They were moved into their post bundles in November 2026. `static/_redirects` sends the old URLs to the new ones, and `static_to_bundle_moves.csv` lists every move.

## Shortcodes

| Shortcode | Use it for | Example |
|---|---|---|
| `figure` | An image with a caption, in the text column | `{{< figure src="images/view.jpg" alt="The bay at dusk" caption="Cadaqués from the church." >}}` |
| `marginfigure` | A small image in the right margin, Tufte style | `{{< marginfigure src="images/cover.jpg" alt="Album cover" caption="Released in 1994." >}}` |
| `sidenote` | A numbered note in the margin, tied to a point in the sentence | `Some claim{{< sidenote >}}Here's the source.{{< /sidenote >}} in the text.` |
| `marginnote` | An unnumbered aside in the margin | `{{< marginnote >}}A loose thought that belongs nearby.{{< /marginnote >}}` |
| `rawhtml` | Passing HTML through unchanged | `{{< rawhtml >}}<div class="…">…</div>{{< /rawhtml >}}` |

Details:

- **`figure`** takes `src` (required), `alt`, `caption` (markdown allowed), `title`, `class` and `link`. An empty caption leaves out the caption line, so `caption=""` is fine as a placeholder. This replaces Hugo's built-in `figure` shortcode, which doesn't resize images.
- **`marginfigure`** takes `src`, `alt` and `caption`. The image must be in the post's bundle.
- **Margin notes and figures** float into the right margin on wide screens (72rem and up). On narrower screens the margin disappears and each note collapses behind a small toggle (the note number, or ⊕) that opens it inline. No JavaScript is involved.
- **`sidenote` and `marginnote`** take markdown inside them.
- **`rawhtml`** is rarely needed, because raw HTML in markdown is already allowed.

## Category colours

Each post takes its colour from its **first category**. The colour is used for the card's offset shadow and tint, the category chip, links, the title dot and the active nav underline. Each colour has two shades:

- **`--cat`** is the bright shade, used for decoration (shadows, tints, chips).
- **`--cat-deep`** is a darker twin, used for text. Every deep shade passes WCAG AA contrast (4.5:1) on the site's backgrounds.

Category names are matched case-insensitively, with spaces turned into hyphens, so `Life Experiences` matches `life-experiences`. Several names can share a colour.

| Swatch | Categories | `--cat` | `--cat-deep` | Colour |
|:---:|---|---|---|---|
| ![](docs/swatches/music.svg) | Music, Podcasts | `#e5399e` | `#a91464` | hot magenta |
| ![](docs/swatches/books.svg) | Books | `#f4a700` | `#8f6400` | amber |
| ![](docs/swatches/understated-classics.svg) | Understated Classics | `#5c7c99` | `#3e566d` | dusty blue |
| ![](docs/swatches/ideas.svg) | Ideas | `#00a3c4` | `#006a80` | cyan |
| ![](docs/swatches/life-experiences.svg) | Life Experiences, Life Experience | `#ff7a59` | `#a8381d` | coral |
| ![](docs/swatches/travel.svg) | Travel | `#1e88e5` | `#135d9e` | clear azure |
| ![](docs/swatches/album-digest.svg) | Album Digest, Albums | `#d7263d` | `#9b1528` | crimson |
| ![](docs/swatches/writing.svg) | Writing, Short Fiction, Poems | `#6f42c1` | `#53309e` | violet |
| ![](docs/swatches/films.svg) | Films, Movies | `#8d5524` | `#6b3f17` | sepia |
| ![](docs/swatches/art.svg) | Art, Theatre, Creativity | `#b04bd6` | `#7b2a99` | orchid |
| ![](docs/swatches/food.svg) | Food | `#f57c00` | `#9a4a00` | tangerine |
| ![](docs/swatches/programming.svg) | Programming, Coding, Software, Technology, Gadgets, LaTeX, R | `#3f51b5` | `#2c3a8c` | indigo |
| ![](docs/swatches/blogging.svg) | Blogging, Blog, Meta | `#8fbf26` | `#4f6d14` | lime |
| ![](docs/swatches/politics-and-beliefs.svg) | Politics and Beliefs | `#808f1f` | `#525c12` | olive |
| ![](docs/swatches/civ.svg) | Civ, Games | `#e0b400` | `#735c00` | gold |
| ![](docs/swatches/football.svg) | Football | `#2a4bd7` | `#1e3799` | royal blue |
| ![](docs/swatches/mathematics.svg) | Mathematics, Maths, Science | `#ec6a8c` | `#a12f52` | rose |
| ![](docs/swatches/photo.svg) | Photo, Photography | `#6b7280` | `#474d57` | graphite |
| ![](docs/swatches/cats.svg) | Cats | `#2b2b2b` | `#2b2b2b` | black, obviously |
| ![](docs/swatches/garden.svg) | Garden | `#3ba84c` | `#23703b` | leaf green |
| ![](docs/swatches/default.svg) | Anything else (e.g. Random), or no category | `#12b0a0` | `#0b6e64` | teal |

Each swatch shows `--cat` on the left and `--cat-deep` on the right.

### Adding a category colour

A new colour needs two edits, kept in step:

1. In `themes/marginalia/layouts/partials/category-class.html`, add the lowercased, hyphenated name to the `$known` list.
2. In `themes/marginalia/assets/css/main.css`, add a matching rule beside the others:
   ```css
   .cat-knitting
     { --cat: #c2185b; --cat-deep: #880e4f; }  /* raspberry */
   ```
   Check that `--cat-deep` reaches at least 4.5:1 contrast against white.

A category missing from either place falls back to the default teal.

If you update this table, regenerate the swatches too: they are 48×20 SVGs in `docs/swatches/`, named after the first category in each group.

## The Now page

`content/now/index.md` builds the [/now](https://mattischrome.com/now/) page from a list of **shelves** in its front matter:

- **`source: lastfm`** pulls top albums from Last.fm when the site is built. It needs a `HUGO_LASTFM_API_KEY` environment variable, set on Netlify. Without the key, or if Last.fm is down, that shelf is skipped with a warning and the build carries on.
- **`source: folder`** shows the covers in a subfolder of the bundle (e.g. `book_covers/`), newest first. Name the files `YYYY-MM-DD-some-title.jpg`, using the date you started the book or film. The newest date becomes the page's "Updated" date.

## Deploying

Pushing to `main` deploys to production on Netlify. Pull requests get a deploy preview. Netlify's build (in `netlify.toml`) runs:

```bash
hugo --gc --minify && npx pagefind --site public
```

- **Hugo version:** pinned by `HUGO_VERSION` in `netlify.toml`.
- **Image cache:** resized images are kept in Hugo's cache folder, which Netlify saves between builds. A normal deploy takes about half a minute. A deploy that adds or moves many images takes longer the first time. `--gc` removes cached sizes that nothing uses any more.
- **Redirects:** `static/_redirects` holds Netlify redirect rules.
