---
category: Life Experiences
date: '2017-04-11'
tableOfContents: true
tags: ["Writing","Blogging","Software","Seventeen"]
title: Changes
---
<!--more-->

## Moving the blog to Jekyll (again, sort of)
Et voila, my blog lives! In a new body ([Jekyll](https://jekyllrb.com)) and at [a new location](https://mattischrome.com/).

## The Process
I set up Jekyll on my MacBook Air after loads of initial problems with installing the theme and getting assorted Ruby gems installed and working. [Stack Overflow](https://www.stackoverflow.com) is a friend for life now. By way of comparison, getting things up and running on my new Mac was simple.

I converted "all" my posts to markdown [using a PHP script](https://github.com/benbalter/wordpress-to-jekyll-exporter/) and my WordPress export file. Except for 90 or so posts that don't get converted for some reason. I had to create posts for those by hand and paste the content in from Wordpress. 

As part of this process I set up the sublimejekyll plugin on Sublime Text and that also took ages because... well I still don't know why. I did uncover the following pro tip though: if a program says it can't find a directory, it probably means that said directory really isn't there. Make the damn directory. 

As I made the posts compatible for Jekyll I decided to delete a few older posts. Most were short and don't add much to the overall flow of the blog. Image only posts never really added much. Besides I have Instagram for that kind of thing. 

I downloaded all the images from the old version of the site: all 36,000 and 2.7Gb of them. Wordpress had created at least 18 copies of each image at different sizes. Oh dear. That resize image thumbnails plugin seemed like such a good idea at the time. 

I deleted all the unnecessary images. I wish I could say I used some clever command line fu to get this done. I didn’t. I just used the innately useful keyboard shortcuts in MacOS. 

Then I realised that some posts before 2013 had images from a single folder elsewhere within my Wordpress install. This meant I had another 200 images to track down. In the end I used very few of these images but I’m glad I didn’t overlook them. 

As I went through the posts every image asset got classified into hero / gallery / other. I used Automator to create small teaser versions of the hero images. In some places I’ve just used the larger hero images. This is not very efficient but was necessary for getting the site up and running. 

Then I have to go through each of the posts that I want to keep, changing the image references and setting the header and teaser images. The internal links all had to change too - and be warned that some of them may not have changed yet. (At heart I am very lazy.) I’ve learned a lot more about Sublime Text as part of this process.

I’ve not yet managed to sort out related posts for each post. The default Jekyll method is to use latent semantic indexing or lsi but for all my posts this takes an incredibly long time: about until the heat death of the known universe. It’s not that practical. Apparently there is a related posts plug-in that only uses tags (but I deleted all my tags because I thought they were what was slowing down lsi). Fixing this is very much on the to do list.
Of course at this point I don't have much idea of how to track down internal links that may have died in the transition: always listen to your regex teachers when you are in school kids.

2017 New Year's Resolution: learn to [regex](http://regexr.com).

Yes, it really is that that important!

## The really geeky stuff
At this point I should confess that I’ve used Jekyll before but because I was on shared hosting I had no ssh access to the server. This meant that I had to FTP over the whole caboodle every time that I ran Jekyll.  However I’ve fixed that side of things this time around. With the help of the [`rsync` command](http://nathangrigg.net/2012/04/rsyncing-jekyll/) I can deploy the site very quickly, only uploading the changes since last time. Compared to FTP it feels like magic.

The site is now hosted on a Digital Ocean droplet and has a new domain name. There’s an [A+ rated](https://www.ssllabs.com/ssltest/analyze.html?d=mattischrome.com) security certificate and everything. My blog got hacked on shared hosting, though it may have been the fault of WordPress rather than most. Even so, with Jekyll there’s no database to infest with gribblies. My hope that this means I will avoid emailing myself a post shilling Christian Laboutin shoes.{{% sidenote "sn-1" %}}Note that there is no email subscription available for this version of the site. Yet. Expect massive fanfare when there is. You can follow @notmattischrome on twitter for links to updates in the meantime.{{% /sidenote %}}

Assessing the performance of the new site using tools like [Pingdom](https://tools.pingdom.com) shows that there are still some optimisations to be made. However there are already a few little bells and whistles trilling away. If you add the site to the home screen of your phone or tablet, you should see my little logo. I can’t test it but it should also work with Windows 10 devices too. 

There’s also a little Google analytics tracker. This is not a permanent feature. I don’t intend to spy on my readers. It is there for the first few months to check the level of traffic to the site. I’ve not got wild expectations. I doubt I will even get the same numbers as I had for the WordPress version of the site.

## What’s changed?
With my hosting solution change in mind, I decided that it would be better for there to be fewer images on the site. I still have backups of old posts so I can add some back at a later stage.

I’ve cut the number of posts from just over 600 down to just under 240. I kept all the series like the [understated classics](/tag/understated-classics) and my posts about [South America](/tag/south-america). Most of the book reviews remain. I jettisoned most of the pouting about my job and my life prior to going to South America, but some of it remains. Generally if a post changed my way of writing, I’ve kept it.

Our memories of the past aren’t set in stone. The internet has an awkward way of setting things in amber. Forgive me for favouring the plasticity of thought over the precision of tapes and drives. If you want to hold me to account for my terrible writing, that’s what the wayback machine is for.

Another thing motivates the choice of posts retained from the old version of the blog. I want to get back to writing longer posts. Sometimes I used posts comprising mostly pictures as a way of churning out lots of posts, without really thinking about why I was writing them. I want to put a bit more thought in to writing. It would be nice if my posts were a reflection on my skills and passions, rather than mindless vanities or quick emotive responses to flash in the pan events.

Finally, I must thank [Frank Hecker](https://civilityandtruth.com/about/). His blog also uses Jekyll and the minimal mistakes theme. When I emailed him about how he set up his blog, he replied at length with many suggestions that were invaluable in getting things up and running. Also the documentation of [minimal mistakes](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/) was incredibly good, to the extent that it's given me lots of ideas about what to put into posts. Like the [table of contents](https://mmistakes.github.io/minimal-mistakes/docs/helpers/). How cool is that?  

I wish I could say that I’ve written lots of posts in the past six months and that they are all ready to go. Unfortunately the niggling details of the relocation process absorbed more of my time. Well, that and the release of [Civilization VI](http://civilization.com). Fortunately the act of looking over my previous efforts gives me a few clues as to where I want to go. I hope you will join me.