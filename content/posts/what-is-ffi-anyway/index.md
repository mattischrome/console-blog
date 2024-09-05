---
category: Programming
pubDate: '2022-02-03T00:00:00Z'
tags:
- Ruby
- FFI
- Programming
- Learning new things
- Twenty Two
title: What is FFI anyway?
---
At the moment I can’t compile this blog locally because my `ruby-ffi` install is somehow wrong and is preventing Jekyll from running on my recently upgraded Mac system. Fortunately the site still compiles on Netlify, or else you wouldn’t be reading this!

It’s always annoying when you rely on a complex multi-part system and some obscure part fails. It leaves you groping for answers and inventing unnecessary hack solutions. The dreaded old Stack Overflow rabbit hole. FFI stands for [Foreign Function Interface][1], a mechanism that allows code written in one language to be called by another language.

In Ruby, this functionality is encapsulated in `ruby-ffi` gem. This is the one that keeps on breaking for me. There are a great many places where using code written in other programming languages alongside Ruby would be useful in a static site generator like Jekyll. When looking at where Jekyll depended on  `ruby-ffi`, the first dependency I found was a gem that reads in HTML documents and understands their structure - presumably code that had already been written in a fast and open source way in a language like Java or C. 

So why doesn’t it want to run on M1? Most solutions suggest to force install the x64 version which can then be run with Rosetta. I’m loathe to try this though, as it might be I get stuck with a suboptimal version of `ruby-ffi` going forward[^1]. That said, Jekyll seems pretty moribund at this point, and so it might be worth experimenting just to get the local build working. My qualms aren’t going to matter if I’m going to use a more modern tool like [ Eleventy](https://www.11ty.dev "Link to the Eleventy website") in the future.

[^1]:	I suppose one would forcibly uninstall the x64 `ruby-ffi` and then reinstall the arm64 version.

[1]:	https://en.wikipedia.org/wiki/Foreign_function_interface