---
category: Blogging
date: '2025-01-31'
tags:
- Twenty Five
- Imagemagick
- Paris
- Photos
- Blogging
- Software
title: Dithering Around
---
While off sick and under the weather I decided to play around with presenting the photos on this blog in a fashion more in keeping with the current Hugo theme.

I used [Imagemagick](https://imagemagick.org) to process the same files from [the Paris post](/posts/in-praise-of-paris/) earlier this week. I made them a bit smaller, reduced the number of colours to 256, posterized them (a built-in Imagemagick function that groups colours), and then did a dither on them.

```zsh
magick input.jpg -resize 800x600 -colors 256 -posterize 4 -ordered-dither o8x8 output.jpg
```

The results below are probably a bit too low quality, but they are smaller. It was fun to experiment with them. I haven't included all of the photos from the post earlier this week, just the ones that look more like computer game levels from the 1980s!

An evil wizard has trapped you in the reconstruction of a major cathedral!

![Dithered photo from Paris post](./images/Paris-02_dith_d.jpg)

Listen to the Thinker's riddle to get a clue for the next level!

![Dithered photo from Paris post](./images/Paris-04_dith_d.jpg)

A glamorous lady greets you on a windy city bridge!

![Dithered photo from Paris post](./images/Paris-05_dith_d.jpg)

You meet the spy in the park to discuss the secrets you have uncovered!

![Dithered photo from Paris post](./images/Paris-06_dith_d.jpg)

Navigate the maze, but be sure to avoid the killer statues!

![Dithered photo from Paris post](./images/Paris-07_dith_d.jpg)

Summon the cloud wraith to the Eiffel Tower!

![Dithered photo from Paris post](./images/Paris-08_dith_d.jpg)

Something something how did I never see all that temporary fencing!

![Dithered photo from Paris post](./images/Paris-10_dith_d.jpg)

Only you can turn back time and rescue us from this eighties video game!

![Dithered photo from Paris post](./images/Paris-13_dith_d.jpg)
