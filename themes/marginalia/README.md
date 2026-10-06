# Marginalia — a Hugo theme

A quirky, readable theme for a personal blog that ranges across many topics.
Sticker-style cards with bright category colours, Tufte-style sidenotes,
system fonts only, semantic HTML, and JavaScript in exactly one place (search).

## Requirements

- Hugo **0.128 or newer** (tested with 0.148.2; extended not required)
- [pagefind](https://pagefind.app) for the search page (run via `npx`, no install needed)

## Install

Copy (or git-submodule) this folder into your site's `themes/` directory,
then in your site's `hugo.toml`:

```toml
theme = "marginalia"

[pagination]
  pagerSize = 20          # 20 cards per page on the home grid

[taxonomies]
  category = "categories"
  tag = "tags"

[menus]
  [[menus.main]]
    name = "Home"
    pageRef = "/"
    weight = 10
  [[menus.main]]
    name = "Categories"
    pageRef = "/categories"
    weight = 20
  [[menus.main]]
    name = "Tags"
    pageRef = "/tags"
    weight = 30
  [[menus.main]]
    name = "Search"
    pageRef = "/search"
    weight = 40
```

A complete working example lives in `exampleSite/`. Try it with:

```sh
hugo server --source exampleSite --themesDir ../..
```

## Writing posts

All posts are page bundles; images belong in the bundle's `images/` folder.
Three archetypes create ready-made bundles:

```sh
hugo new posts/my-essay --kind long     # long-form: sidenotes, optional TOC
hugo new posts/a-thought --kind short   # short-form: cosy single column
hugo new posts/todays-photo --kind photo  # a single photograph
```

Useful front-matter keys (all shown in the archetypes):

| key            | what it does                                                        |
|----------------|---------------------------------------------------------------------|
| `categories`   | first entry sets the post's callout colour everywhere               |
| `tags`         | shown on cards and post pages; feed the tags pages and search       |
| `hero`         | bundle-relative image path (e.g. `images/cover.jpg`) used as the hero on the post and on its card (4:3, tinted on cards only). No `hero` → the site default is used. |
| `hero_alt`     | alt text for the hero                                               |
| `hero_caption` | caption under the hero on the post page                             |
| `toc`          | `toc: true` shows a table of contents (margin-floated on wide screens, above the content on phones) |

### Sidenotes and margin figures (Tufte style)

```
Some claim{{</* sidenote */>}}And its source, in the margin.{{</* /sidenote */>}} in text.

{{</* marginnote */>}}An unnumbered aside.{{</* /marginnote */>}}

{{</* marginfigure src="images/sketch.jpg" alt="A sketch" caption="Drawn on the train." */>}}
```

On narrow screens the notes collapse behind a tappable number / ⊕ symbol —
pure CSS, no JavaScript.

## Search

Search uses pagefind, which indexes the *finished* site, so build in two steps:

```sh
hugo && npx pagefind --site public
```

Add that as your deploy build command (Netlify/Vercel/GitHub Actions all take
it verbatim). Create the search page once in your site:

```sh
mkdir -p content && printf -- '---\ntitle: Search\nlayout: search\n---\n' > content/search.md
```

## Customising

**Add a category colour** (unknown categories get the teal default):
1. `assets/css/main.css` → section 2, add `.cat-<name> { --cat: …; --cat-deep: …; }`
2. `layouts/partials/category-class.html` → add the lowercased name to `$known`

**Change the default hero**: set in your site config
`[params] default_hero = "/images/whatever.jpg"` (file in your site's `static/`).

**Add a sidebar** (blogroll, last.fm scrobbles, …): create
`layouts/partials/sidebar-<name>.html` in *your site* following the
`<section class="sidebar-box">` pattern, then list it in your own copy of
`layouts/partials/sidebars.html` (copy the theme's version into your site;
site partials override theme partials).

**Add a page + menu entry**: `hugo new about.md`, then either add
`menus: main` to its front matter or a `[[menus.main]]` entry in `hugo.toml`.

**Fonts, spacing, colours**: everything is a custom property at the top of
`assets/css/main.css` (section 1), with a file map comment at the very top.

## Notes on the home-page grid

The grid uses CSS Grid Lanes (`display: grid-lanes`) — the native masonry
layout standardised in late 2025 — behind an `@supports` check. Browsers
without it (most, as of mid-2026) get a tidy regular grid from the same
markup; nothing to do when support lands, it just switches on.
