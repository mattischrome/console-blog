---
category: Writing
pubDate: '2020-06-01T00:00:00Z'
tags:
- Blogging
- Writing
- Jekyll
- Software
- Liquid
- Rake
- zsh
- Twenty
title: Sprucing up the Blog
heroImage: ../../assets/images/defaultHero.jpg
description: This post explains some of the modifications I made to a minimal Jekyll
  theme to get this blog as I
---
This post explains some of the modifications I made to a minimal Jekyll theme to get this blog as I wanted it. This blog (currently) uses the excellent [Sidey theme](https://sidey-jekyll.netlify.app/about) by [Ronalds Vilciņš](https://www.ronaldsvilcins.com). His site looks eerily similar to this one, at least at time of writing.

The theme is pretty minimal in terms of features (and appearance) but it scores well on the Google Page Speed test. The features I added have increased the build time, but have not affected the speed of the site in terms of the page speed test.

First off, I added links from each to the next and previous posts so you can read the blog and flit through in chronological order. This was very easy thanks to this article by [Marcin Swieczkowski](https://www.bytedude.com) and the CSS in the theme.

This worked nicely so I also installed the `jekyll-paginate-v2` plugin and paginated the home page. For normal people this means that the plugin breaks up the homepage from being a list of almost three hundred posts into separate pages with fifty posts per page. Again I reused the CSS and liquid suggested by Marcin to create back and forth links. The plugin adds about three or four seconds to the build time, an increase of about 25-30%.

Next, I really wanted each post to have a set of links to other relevant posts on the blog. Ideally this would be based on the content of posts but the `lsi` (latent semantic indexing) option in Jekyll has never worked for more than twenty posts. Instead I used a method explained by Sharath on the Webjada blog that loops through a post's tags and matches other posts that match N or more tags. Sharath's post suggests two common tags but I've gone for three. With the way I've tagged my posts, two tags in common seems little better than just picking the most recent posts.

To ensure each post has suggestions for further reading that are approximately contemporaneous, I've tagged each post with the year it was written. In the case of some of my travel posts, I also tagged them with the year the events occurred in. I also had to include code to handle the case where a post had no other posts in common. Here's my version of the code, which I saved to my post layout:

```liquid
{% raw %}
{% assign maxRelated = 4 %}
{% assign minCommonTags =  3 %}
{% assign maxRelatedCounter = 0 %}
{% assign headerUnprinted = TRUE %}
      
{% for post in site.posts %}
  {% assign sameTagCount = 0 %}
  {% assign commonTags = '' %}
  {% for tag in post.tags %}
    {% if post.url != page.url %}
      {% if page.tags contains tag %}
        {% assign sameTagCount = sameTagCount | plus: 1 %}
      {% endif %}
    {% endif %}
  {% endfor %}
  {% if sameTagCount >= minCommonTags %}
    {% assign maxRelatedCounter = maxRelatedCounter | plus: 1 %}
    {% if headerUnprinted == TRUE and maxRelatedCounter == 1 %}
      <span class="meta">
      <h4>You May Also Enjoy</h4>
      {% assign headerUnprinted = FALSE %}
    {% endif %}
    <div>
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h5>
    </div>
    {% if maxRelatedCounter >= maxRelated %}
      {% break %}
    {% endif %}
  {% endif %}
{% endfor %}
{% if headerUnprinted == FALSE %}
  </span>
{% endif %}
{% endraw %}
```

This doubled my build time, but locally this was from 10 seconds to 20 seconds, which isn't too bad. In future I want to use a separate Python script that runs through the `_posts` directory and performs a true lexical analysis of my posts. The output will be a CSV in the `_data` directory with the nearest neighbours for each post, then there will be less [Liquid](https://shopify.github.io/liquid/) involved in building the site.

My last modification was to find a [boilerplate Rakefile](https://github.com/gummesson/jekyll-rake-boilerplate) and modify that to better suit this site. I've gone added some new tasks. One runs Jekyll with the `--drafts` and `--future` modifiers so I can have a look at how future posts look when I've finished writing them. Another task creates an extra deploy option, which I've called 'spruce', that prepends `[skip ci]` to the commit message (and a broom emoji to the end!). This means that Netlify won't bother to build that commit of the site: one way to save those precious free build minutes!

In future I will add another task to the Rakefile that runs the Python code that generates the connections between posts, as mentioned above.

If you're using MacOS, I have one final tip about using Rake and zsh together. Add `alias rake="noglob bundle exec rake"` to your `.zshrc` file, as it will help you supply arguments to your various rake tasks. It took me the best part of an afternoon to figure this out, so hopefully this will save you some time. Alternatively, if you use rake more frequently, you could install the [oh-my-zsh rake plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/rake).

Finally, there are still some things to do. As well as the Python script for better related posts, there are issues with the search. It works in development, but not when the site is deployed on Netlify. While I probably use the search more than anyone, it might be worth getting an Algolia version working. I'd also like to add comments but not using services like Disqus that always seem to insert spammy chum links into your posts.