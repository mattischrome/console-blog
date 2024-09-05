---
category: Football
pubDate: '2016-06-05T00:00:00Z'
tags:
- Football
- Stats
- Modelling
- Sixteen
title: Euro 2016 Panini Stickers
---
Sound the conspicuous consumption klaxon! &#x1F4E3; I know it's foolish but I decided to collect the Panini stickers for the Euro 2016 tournament this summer. I think it's a more edifying waste of money than a series of group game accumulators that don't come off. If this week's long read in The Guardian is anything to go by, [we really shouldn't be giving any more of our money to betting companies](https://www.theguardian.com/business/2016/may/31/big-gamble-dangerous-british-betting-shops). The album also looks better than any of the official books. Anyway, this post celebrates my inner collector/geek and the beauty of the shiny sticker!

I find sticking the stickers into the album relaxing. Like the craze for adult colouring books, it takes a nostalgic childhood memory and uses it to escape the pressures of everyday life. I wouldn't say that I'm a perfectionist though, I totally mangled Swedish keeper Andreas Isakson as I stuck him in and I've even stuck down an a-b pair in the wrong order!

The burning question is how many packets of stickers will it take to fill the album? It depends on how many people you are able to swap with and how much money you are prepared to spend on excess stickers. If you have enough friends collecting stickers, you should in theory be able to buy 675 stickers (135 packets at 50p each) because you can then swap all your duplicates with your mates. eBay wasn't a thing when I was ten (the last time I collected stickers for the 1990 World Cup) but it is now. You can resort to all sorts of shenanigans there. In the real world and such "cheating" aside, it's likely that you will need more than 135 packets.

### The Hypergeometric distribution, stickers-induced bankruptcy and you

How many swaps are you likely to generate? We can calculate the probability of getting N out of 5 new unseen stickers in each packet. We use hypergeometric distribution for just this sort of thing: taking small samples from a larger population without replacement and calculating the probability of N successes in that sample. In Excel the formula <code>=HYPERGEOM.DIST(NUM_GOT,5,NUM_NEED,TOTAL_NUM,0)</code> generates these probabilities. The names I gave the variables should explain each parameter. As mentioned you get five stickers in each pack, so this is the number of draws each time. The fifth parameter takes the value 1 or 0 depending on whether you want cumulative values or not. Cumulative values helped me build the Markov chain I used later on.

If we play around in Excel we see that the probability of generating swaps increases quickly as you begin to accumulate more stickers. In the following table I compare a situation near to the start of collecting, somewhere about halfway through, and somewhere near to the end:

| **Number of unseen stickers (Out of 5)** | **With 600 stickers still to collect** | **With 300 stickers still to collect** | **With 50 stickers still to collect** |
|:--|: