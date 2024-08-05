---
category: Mathematics
pubDate: '2014-09-25T00:00:00Z'
tags:
- Maths
- Stats
- R
- Fourteen
title: How to generate random numbers in R
heroImage: ../../assets/images/defaultHero.jpg
description: This post deals with how to generate random numbers in R. It is good
  to know how to generate random
---
This post deals with how to generate random numbers in R. It is good to know how to generate random numbers with a particular language or software package for at least one of the following three reasons:

1. You want to test something that depends on a particular distribution.
2. You’re running a stochastic process of some kind (Branching process, random walk etc) and you need random numbers for deciding whether an event occurs.
3. You forgot to pick your lottery numbers this week.

Let’s step through doing each of these with R. Over time I will write this post out again for C++, Java, Python, and Ruby. This post is just a memory aid that I can use later on and is not meant as anything more rigorous than that. As such it is a living document, I will mutate this post in place as and when I need to. Memory aids are useful for when you haven’t used a particular programming language or software package for a while. Who knows, it might save me a couple of searches with DuckDuckGo.

## How to generate random numbers in R from a particular distribution

Ideally there would be one central random number generating function and you would pass it the distribution you need along with your parameters. R appears to have separate functions for each distribution, which is a bit annoying, but at least they are (fairly) sensibly named. Here’s a table:

| **Distribution you need values from** | **Sample R command** |
|----|----|
| Normal | `rnorm()` |
| Uniform | `runif()` |
| Exponential |  `rexp()` |
| Poisson |  `rpois()` |
| Negative Binomial |  `rnbinom()` |

Note that for each distribution `dist`, the name of that function that generates random numbers from `dist` is `rdist`. There are also functions `ddist`, `pdist`, and `qdist`. `ddist` will return the height of the pdf, `pdist` will return the cdf, and `qdist` will give the inverse cdf (the quantiles).

It's annoying that there is no clear way that the names of the distributions become the stem at the heart of those d-, p-, q-, and r- functions. Is it the first four letters? No, it's the first three letters for the exponential distribution and (not the first) five letters for the negative binomial distribution. (And the _whole_ name when you start looking at things like the Weibull distribution.) Obviously you learn the names after you use them for a while. And to repeat, it is also strange that you can't pass the name of a distribution (or your own pdf) to a more generic function. Mind you, such generic functions would have to handle the gamut of idiosyncrasies of different probability distributions. Maybe it is better this way.

I will add more distributions later. It will also be useful to work out how to generate samples from my own pdfs. I will add instructions for this later. There are also tests to checking hypotheses that data follow a particular distribution and I will add instructions for this in another post.

## Generating random numbers for change of state

Often this is simply a case of generating uniform random numbers in [0,1]. You can use `runif(1)` because 0.0 and 1.0 are the default values for `min` and `max` for `runif`. The seed changes each time you start R. If you need to use the same seed to repeat previous work, you can use the `set.seed` function before using `runic`. [Check out the R man page for Random Number Generation](https://stat.ethz.ch/R-manual/R-devel/library/base/html/Random.html) for more detail. This always feels like something that I should know more thoroughly, yet every time I come to random number generation I skim the literature to convince myself it works and then I leave it at that. Generally I tend to stick to the state of the art in what happens to ‘just work’ and then hammer that.

I'll add other techniques that use other distributions later. I think particularly of the negative binomial distribution but I want to write a separate post about that a later date. When I write that post I'll add the relevant R code to this post (and the Java to the Java post, and so on).

## Generating your lottery numbers

The lottery is a mug’s game, but you definitely won’t win if you never play. (Technically if you don’t play you can’t lose, and lotteries set you up to lose: the clue is in the name.) Nevertheless, for special occasions when you might want to quickly generate lottery numbers, or N integers in some other range, you should use `sample(6,1:49)` for your lucky ticket, or `sample(numSamples,low:high)` for the more general case.

## Other notes

It also goes without saying that it's a great idea to use the amazing help in R.