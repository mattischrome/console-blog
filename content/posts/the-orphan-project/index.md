---
title: "The Orphan Project"
category: "Blogging"
tags: [Blogging, Twenty Four, Orphans, Series, Metadata]
date: "2024-10-26"
description: "After revamping this blog and making a nice tags page, I realised that there are several orphan tags that could do with some company. This post describes the start of this project."
---

A nice feature I added to this blog in its recent update was a [tags page](https://mattischrome.com/tags/). With the help of this [very useful discourse thread](https://discourse.gohugo.io/t/how-to-get-a-tags-page/24213/4) and some additional CSS tweaks, the resulting page is something that I am very happy with. It lists all of the tags that apply to any post, along with the number of posts with that tag, in alphabetical order. It's mostly intended as a guide for you the reader, to help you see whether your preoccupations match my own.

Consider the numbers now. What do you think my most popular tags are? The distribution of numbers like this tend to follow [a power law](https://en.wikipedia.org/wiki/Power_law). There are several tags that have large numbers of posts (for example, I like to tag each post with the year it was written, so there are quite a few relating to numbers) and large numbers of tags that are attached to only one or two posts. It is a known result that power law networks form from preferential attachment processes, and [many document taxonomies have been shown to evolve in this way](https://academic.oup.com/edited-volume/34294/chapter-abstract/290741696?redirectedFrom=fulltext). This blog is no different. Existing tags are more likely to be added to subsequent posts because they are likely to be about similar topics. It's also true that it's easier to draw from a pool of existing tags than it is to invent new ones. 

At the local level of a network, it doesn't really matter if the low degree nodes are degree one or degree two, you still get the power law in the end. When I looked at [disease transmission on these types of network](https://researchportal.bath.ac.uk/en/studentTheses/modelling-the-spread-of-disease-on-networks) during my PhD, I often made sure that the minimum degree of the network was two, but this was to facilitate the transmission in my disease models. In order for the infection to spread (whatever it was, there were many different ideas for what the signal travelling across the network could represent), it was better for each network to have an inward and outward connection. For network of tags from a blog post, a degree one node is possible, but to me it seems like a missed opportunity! If you have a tag you used once, it might represent an idea that you didn't come back to. There might be a whole host of things you could go back to write about.

With that I mind, I wrangled the contents of my tags page into R so I could have a look at the 'Orphan' tags there. Mostly, it's artists in album reviews that I've not bothered with again (see what I mean about it revealing preoccupations?) or authors whose books I only wrote about once. Hilariously, the tag [Series](https://mattischrome.com/tags/series/) had only been used once (or at least it had prior to this post). That highlights the additional value of looking into these orphans, it highlights potential mistakes in tagging. I admit that when I first created the tags page, I did scan through for the more obvious mistakes such as variations on the same tag (tags do encounter some genetic drift it seems) or just outright typos. I think what's left now is a collection that I can work with.

The orphan project, as I am calling it, is to periodically scrape my tags page and randomly select an orphan tag or two, with the aim of then writing a new post to keep it company. I'm aware that writing new posts will inevitably generate new orphans (provided I actually write any posts!) and so it will never be a finished task. For example, after this post goes up, it will be the only post that has the [orphans](https://mattischrome.com/tags/orphans/) tag. Better yet, I had to make the link to that tag page before it even existed! How meta! Speaking of which, I also tagged this post [meta](https://mattischrome.com/tags/meta/), but there were already two of those. Given how often I write meta-posts, this isn't really a surprise! 

Stay tuned for additional posts tagged [DIY](https://mattischrome.com/tags/diy/), [Fuck Buttons](https://mattischrome.com/tags/fuck-buttons/), [Randomness](https://mattischrome.com/tags/randomness/), and many more! 