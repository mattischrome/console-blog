---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
layout: long
categories: []          # e.g. [Music] — first entry sets the callout colour
tags: []
# hero: images/cover.jpg      # image in this bundle's images/ folder
# hero_alt: ""                # alt text for the hero image
# hero_caption: ""            # optional caption under the hero
# toc: true                   # show a table of contents (for heading-heavy posts)
---

Put images for this post in the `images/` folder next to this file.

Sidenote example: {{</* sidenote */>}}This ends up in the margin.{{</* /sidenote */>}}
