---
category: Programming
date: '2017-11-04'

tags: ["Programming", "R", "Seventeen"]
title: A Little Lesson in R
---
I had to compute an indicator this week. It had confidence intervals that relied on taking 100,000 samples from the indicator's approximate distribution. I had to repeat this over multiple GP practices and for twelve different demographic groups.

I decided to use `dplyr`[^1] because I thought it would help me organise all subgroups involved. I used [`mutate_at()`](http://dplyr.tidyverse.org/reference/summarise_all.html) heavily and thought that `dplyr` was keeping everything organised. However, when I moved from the 10 samples I'd used for testing to the 100,000 samples required by the specification of the indicator, my code moved to a crawl. Fearing that my work laptop was a little puny, I left it running overnight on my Mac[^2] and by morning R was still holding up its infuriating little stop sign.

So how could I fix it? The programmer in me returned to the for loops that I'd tried to avoid. I overhauled the code using base R and vectorised `sapply` commands. These were handy, cutting out some of the loops, though I still used a loop for each of the sites. This is not an unfamiliar approach for me: I used the same technique to run my [sticker swapping simulations](swaptastic-part-2) last year. The original `dplyr` commands aren't designed for passing around so many numbers about, at least not in this particular way[^3].

In the end most of the work was done by this single line of code:
```r
sapply(sapply(rep(1,num_samples), 
               runif),
        qnorm,
        sample_mean,
        sample_sd)
```
It looks complicated but can be unpacked as follows: `sapply` takes a vector and a function, applying the function to each element of the vector. The first, inner, call to `sapply` constructs the vector for the second, outer, call. The vector constructed consists of uniformly generated random numbers between 0 and 1 (using `runif`). The second `sapply` calls `qnorm`,[^4] which is R's approximation to the inverse cumulative distribution function of the normal distribution. The additional parameters to the second `sapply` are the parameters required by `qnorm`.

The new code ran on my work laptop and took just over four minutes to finish. This is what stunned me into writing this post. Even though both bits of code had taken a similar amount of time to run in the test case, the time invested in writing things properly is well worth the extra effort.

[^1]: There will be future posts about `dplyr`.
[^2]: This indicator involved the use of publicly available data so I was free to use the code at home.
[^3]: That said, at the time of writing there is <a href=\"https://github.com/tidyverse/dplyr/issues/2813\">an open github issue</a> about the slowness of `mutate_at()` in the current version of `dplyr`.
[^4]: Various properties and generators of random numbers from various distributions are discussed in <a href=\"https://mattischrome.com/generate-random-numbers-in-r/\">this post</a>.