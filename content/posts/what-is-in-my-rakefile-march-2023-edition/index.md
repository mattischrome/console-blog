---
pubDate: '2023-03-15T00:00:00Z'
tags:
- Blogging
- Writing
- Jekyll
- Rake
- Housekeeping
- Twenty Three
title: What is in my Rakefile? (March 2023 edition)
heroImage: ../../assets/images/defaultHero.jpg
description: Because I am bored of forgetting what's in my website's Rakefile, I thought
  I'd write a list. Also,
---
Because I am bored of forgetting what's in my website's Rakefile, I thought I'd write a list. Also, as I'm probably going to move over to a node based approach soon, it's a handy wish list for my `package.json` file when the time comes.

### Make a new post in `_posts` named "Title"

```rake post["Title"]```

If no title is given, you will be prompted for one. The post will be opened in the editor specified in the Rakefile.

### Make a new post in `_drafts` named "Title"


```rake draft["Title"]```

If no title is given, you will be prompted for one. The draft will be opened in the editor specified in the Rakefile.

### Move a post from `_drafts` to `_posts`

```rake publish```

Available drafts will be listed as a numbered list. Enter the appropriate number to publish that draft. Note that you will not be able to look at the draft before it is published. 

### Make a page for the website named "Title"

```rake page["Title"]```

Note that by default the page is at the root of the website. To specify a path of e.g. `/path/to/folder` you can use a second argument to do this, e.g.:

```rake page["Title","path/to/folder"]```

### Build the site

This will build a complete version of the site

```rake build```

### Various ways to preview the site

There are various ways to preview the site based on draft status:

```rake watch```

This will serve a preview (by default on `localhost:3000`) with only the completed published posts up to the current system date. Any published posts with a date ahead of the current system date will be omitted.

When debugging the appearance of the site, you might want to run a preview of just N posts:


```rake watch[N]```

To include the current drafts among the preview use:

```rake watch["drafts"]```

Note that if a draft has a YAML key with a post date, this is what will be used. Otherwise each draft will assume to be published at the system time when the preview is requested. Note that published posts with future dates will not be included in this preview.

To include future published posts in the preview (e.g. to check that pictures are correct etc) then:

```rake watch["future"]```

This preview will also include any drafts.

These flags cannot be combined, e.g. `rake watch["drafts","future"]` will produce an error. Note that the `"future"` options also passed the `--drafts` flag to Jekyll, so there is actually no need for the flags to be combined.

### View a local preview of the site in your browser

This does not always work on my machine (or may require a refresh) but you can automatically start a preview in your browser. On my system it often loads before the preview is ready, so this option is often unhelpful. Nevertheless, the command is:

```rake preview```

### Deploy the site to remote git repo

If a git(hub) repository has been configured, you can commit current changes using the command

```rake deploy["Commit message"]```

If the commit message is absent, this will be requested from the command line.

Because my site is configured to deploy on Netlify when the git repo changes, I have another command that also commits to the repo but with the Netlify flag `[skip ci]` appended to the commit message, along with a cool broom emoji.

```rake spruce["Commit message"]```

This ends up executing the commands:
```
git add .
git commit -m "[skip ci] Commit message 🧹"
git push origin main
```

NB the main branch is true of my repos, but the deployment branch of the repository is set in Jekyll's `_config.yml`.