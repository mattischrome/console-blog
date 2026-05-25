---
title: 'Panini Stickers 2026'
date: '2026-05-25'
tags: 
  - "Twenty Six"
draft: true
---

Ten years ago, ahead of the 2016 European Championship, I wrote a few posts about the Panini sticker album for the tournament and my efforts to fill it up. It was a nice subject to investigate with Excel and R as a little data science exercise.

## Previous posts
+ In [**Euro 2016 Panini Stickers**]({{< "/posts/euro-2016-panini-stickers/" >}}), I wrote a bit about the setup of things (updated below) and showed off how you can use the Hypergeometric distribution to work out how many stickers you are going to be able to put into your album when you open a packet.
+ Of course it's fairly obvious that you fill the album quicker if you have friends to swap stickers with. There was no maths or stats content in [**Swaptastic Part 1**]({{< "/posts/swaptastic-part-1" >}}), just some pictures of envelopes I'd received in the mail with stickers in.
+ In [**Part 2**]({{< "/posts/swaptastic-part-2" >}}), I went into some more detail about a model I'd made for evaluating the impact of having peers to swap with. It was a rather brute force R model, but it showed that you can significantly reduce the number of packets you have to buy if you have about four or five people to swap with.
+ For [**Part 3**]({{< "/posts/swaptastic-part-3" >}}), I built a Shiny app that lets you see the results of the swapping model interactively. It's hosted on the [Shiny Apps website](https://www.shinyapps.io) and I'm pleased to say that it still works ten years later!

## What has changed since 2016
+ EURO16 was 24 teams, WC26 is double that at a staggering 48 teams. Having boggled at the thought of seeing Iceland at an international tournament, we now get to see Curacao!
+ Fortunately (or not, depending on your avidness), there are not double the stickers to collect. There's quite a few pictures in the album that would have been stickers in previous editions, and the number of stickers per team has been reduced from 28 to 20. The album has gone from 680 stickers in total to 960.
+ This time there are also some additional stickers that you can collect from the labels of Coca-cola bottles in a promotional tie-in. These go in the back of the album, but I'm not interested in these from a collecting or analysis point of view.
+ Panini also say that there are some super-rare variations in stickers that occur at a rate of once in every hundreed packets. These are always an extra sticker though, so again they don't affect the analysis.
+ To accomodate the extra size of the collection, packs now contain 7 stickers as opposed to 5 back in 2016.
+ Packs cost £1.25 now, a 250% increase on the 50p per pack 10 years ago.

## The Basics

In the highly improbable situation where you are able to get no duplicates at all, you need about **140 packets** (you need 974 stickers in all as you get six inside the album to start with), which will set you back £175. However, the whole point of these posts is that this simply doesn't happen! 

The first question we might ask is whether we generate swaps faster or slower now that both the album and the sticker packs are bigger?

Previously, I created this table: 

| **Number of unseen stickers (Out of 5)** | **With 600 stickers still to collect** | **With 300 stickers still to collect** | **With 50 stickers still to collect** |
|:--|------:|------:|------:|
| 5 | 53.4% |  1.6% |  0%   |
| 4 | 35.8% | 10.5% |  0%   |
| 3 |  9.5% | 26.9% |  0.3% |
| 2 |  1.2% | 34.1% |  4.3% |
| 1 |  0.1% | 21.5% | 27.2% |
| 0 |  0%   |  5.4% | 68.2% |

So let's make something similar for the new setup:

| **Number of unseen stickers (Out of 7)** | **With 900 stickers still to collect** | **With 600 stickers still to collect** | **With 300 stickers still to collect** | **With 50 stickers still to collect** |
|:--|------:|------:|------:|------:|
| 7 | 55.0% | 3.2%  | 0.02% |    0% |
| 6 | 34.4% | 14.2% |  0.4% |    0% |
| 5 |  9.1% | 27.2% |  2.7% |    0% |
| 4 |  1.3% | 28.8% | 10.2% |    0% |
| 3 |  0.1% | 18.2% | 23.3% |  0.4% |
| 2 |  0%   |  6.9% | 31.2% |  4.2% |
| 1 |  0%   |  1.4% | 23.9% | 26.2% |
| 0 |  0%   |  1.3% |  7.7% | 69.2% |