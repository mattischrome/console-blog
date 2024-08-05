---
category: Latex
pubDate: '2022-02-08T00:00:00Z'
tags:
- LaTeX
- Captions
- Footnotes
- Twenty Two
title: 'TIL: footnotes in Latex captions'
heroImage: ../../assets/images/defaultHero.jpg
description: Today I had an interesting bug in some Latex code I am writing. Putting
  a footnote into a caption
---
Today I had an interesting bug in some Latex code I am writing. Putting a footnote into a caption caused the document to fail compilation. The problem was that this document doesn't use a table of figures at the start, so I hadn't thought to include a short summary caption. Apparently the curly brace in the footnote command does not sit well with that, even if you aren't using a list or table of figures in your document. The solution is simple, as long as the footnote isn't crucial to the list of tables!

Instead of:

	\caption{This is my caption\footnote{And for some reason it needs a footnote}}

Do this:

	\caption[This is my caption and there definitely aren't any footnotes you need to worry about]{This is my caption\footnote{And for some reason it needs a footnote}}