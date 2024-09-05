---
category: Mathematics
pubDate: '2014-09-25T00:00:00Z'
tags:
- Maths
- Stats
- R
- Fourteen
title: How to generate random numbers in R
---
This post deals with how to generate random numbers in R. It is good to know how to generate random numbers with a particular language or software package for at least one of the following three reasons:

1. You want to test something that depends on a particular distribution.
2. You’re running a stochastic process of some kind (Branching process, random walk etc) and you need random numbers for deciding whether an event occurs.
3. You forgot to pick your lottery numbers this week.

Let’s step through doing each of these with R. Over time I will write this post out again for C++, Java, Python, and Ruby. This post is just a memory aid that I can use later on and is not meant as anything more rigorous than that. As such it is a living document, I will mutate this post in place as and when I need to. Memory aids are useful for when you haven’t used a particular programming language or software package for a while. Who knows, it might save me a couple of searches with DuckDuckGo.

## How to generate random numbers in R from a particular distribution

Ideally there would be one central random number generating function and you would pass it the distribution you need along with your parameters. R appears to have separate functions for each distribution, which is a bit annoying, but at least they are (fairly) sensibly named. Here’s a table:

| **Distribution you need values from** | **Sample R command** |
|