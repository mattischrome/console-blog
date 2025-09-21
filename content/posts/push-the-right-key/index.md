---
category: Software
date: '2025-01-22'
tags: ["Twenty Five", "Neovim", "Blogging", "Software", "rcmd"]
title: Push the right key
---
One of the absurd barriers to writing regularly is that my new post script is written to open the new markdown file in Neovim and until this week I had no idea how to type a hashtag (which markdown uses for headers) in this editor.

<!--more-->
Neovim, and its venerable predecessors vi and vim, is notorious for being a bit tricksy to work with. This is because it is a modal editor: you use keys to switch the editor between modes. The same key presses mean different things in different modes, which can be frustrating when you first start out and have no clue what is going on.

Even when you do have some clue what is going on, there can be settings that are a bit confusing. Like the fact that the left hand alt key is actually mapped to the escape key. Because macs require you to type alt+3 for a hash key, this meant I was effectively typing ESC+3 when I tried to get a hash.

But the right key works! As in, the actual right-hand alt key. So I can now type a hash in Neovim. Progress! Delight!

Moreover, theres a nice synergy with another app that I use called [rcmd](https://lowtechguys.com/rcmd) that turns the right-hand CMD key into an app switcher. And it doesn't just enable alt/cmd+tab style switching between the app you're using and the previous one, it allows you to jump to a specific app. It's not something I need all the time, but the more I use it, the more that I remember to use it and the more useful it becomes.

The same is also true of Neovim. I'm getting used to some of the shortcuts that I use most regularly like `dd` for deleting a whole line (which is useful for promoting drafts to full posts) and `$` for jumping to the end of the line. I know from various accidental invocations of the pasteboard that there is a hyper-logical and precise way to perform sophisticated copy/paste actions. The other day I even managed to paste something I'd copied (yanked in (Neo)vim parlance) a few copies earlier, getting around that annoying situation where you accidentally copy again before you paste what was there before.

There are loads of ways you can do this stuff. But it's sometimes fun to learn a new way, which is what I am doing here. Sometimes though, I do just open the whole blog repo in Visual Studio Code and command palette my way to success. Diversity leads to better quality of life.
