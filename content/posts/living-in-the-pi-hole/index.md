---
category: Technology
pubDate: '2020-05-29T00:00:00Z'
tags:
- Software
- Ads
- Economics
- Twenty
- Internet
title: Living in the Pi Hole
---
Ingrid bought me a [raspberry pi](https://www.raspberrypi.org) for my birthday. I've set it up to run the [Pi-hole](https://docs.pi-hole.net) software. Pi-hole is a nifty bit of kit that intercepts your web requests and purges any that ask for material on known ad servers. Essentially it's like having an ad blocker on your network rather than just your computer.

I've written before about [why I hate web advertising](/net-loss/), and since then it's got even more malign. The use of our web browsing habits to track our every move and sell us crap has gotten way worse. Instagram is particularly *awful* for it and gets more awful with every amendment that Facebook makes. An ad-blocking solution that works for apps as well as in the browser is especially welcome.

I've recently backed up and purged my Mac. This is not entirely unconnected to the resumption of posts on this blog as I'd managed to completely bork my Ruby installation. Definitely a story for another time. Since the great reboot of 2020, one of many pieces of software I have not reinstalled is an ad blocker. As a result I thought I'd note down some observations. Not everything gets blocked and it's good to understand what exactly the Pi-hole protects you from and what it doesn't. I'll try to write further posts later about what you and I need to do to further protect our online privacy.

Pi-hole doesn't block YouTube video ads as well as the Pi-hole website claims to. The Apple TV still suffers from the occasional YouTube ad. On my laptop, some of the static adverts next to a playing video get blocked and some don't. These are often adverts for more established brands, so maybe Google goes the extra mile for higher paying advertisers. It's a shame they can't go the extra mile in protecting our privacy.

Nor does Pi-hole do that great a job of blocking Facebook ads. That said, I was very proactive about blocking ads on Facebook, often using more than one app in order to do so. These days I prefer to avoid ads on Facebook by using Facebook far less than I used to.

Pi-hole fares better at blocking generic in-app ads. I tried reinstalling Words With Friends and even offered to watch a video for more credits, but it simply said a video wasn't available. This has made Words With Friends about 100% better than it was. My testing was limited but it does seem to extend to other apps using iAds (e.g. the Met Office app).

It does block random spammy ads on webpages. I can compare sites like the Guardian on Safari (which is ad free because I'm a subscriber and am logged in) versus on Firefox (why log in twice?). I can also visit the Guardian on my work laptop because I can't redirect that computer to use the Pi Hole. There are varying degrees of success. The best experience for The Guardian is when I am logged in. (See further notes below about using your money to support non ad-based services.)

There are also some weird blocks. Pi-hole can break functionality on sites like comparethemarket.com and the John Lewis website, usually in places where clicks get harvested to track attention and desire flows. This shows the potential danger for these companies of using third parties to capture this data, especially if the use of tools like Pi-hole become more widespread. I used to use Ghostery, which also alerted you to this kind of data collection. Pi-hole is better for this because it cuts the connection and refuses to serve the content, rather than letting you know. In retrospect, I get the feeling that Ghostery was probably watching the watchers, collecting data for the collectors. [There is some evidence to suggest this.](https://www.businessinsider.com/evidon-sells-ghostery-data-to-advertisers-2013-6?op=1&r=US&IR=T)

### You gotta pay for stuff too
The bottom line is that you have to pay for what you access. The golden age of free stuff is over. Pay what you can when you can. At the same time, we still have a responsibility to signal to content providers that it's not okay to simply scan us and clog pages with unnecessary adverts.