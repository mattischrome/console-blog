---
category: Programming
date: '2010-12-28'
tableOfContents: true
tags: ["Programming", "Projects", "Games", "Ten", "Fun"]
title: Programming an UNO game
---
<!--more-->

#### A new year, a new hobby

I don’t write about programming enough. This is a shame because it is a very interesting subject and I find that the problem solving aspects of programming are very satisfying. Keenly aware of the need to do more hobby programming and to get up to speed on areas of software development that I’ve been neglecting, I have decided to give myself the project of creating a computerised version of the [UNO card game](http://en.wikipedia.org/wiki/Uno_(card_game)). I know that one already exists, for example there’s an official one that you can play on MSN messenger.

In the first few posts I am going to describe the game and its rules, and then how I came to design their implementation in  [C++ code](http://en.wikipedia.org/wiki/C%2B%2B). I have started with C++ because it is the closest that programming has to a _lingua franca_, which will help in my attempts to take the code beyond the algorithms for representing the card deck and the game play. It is not the most difficult thing in the world to program but it will serve as a nice illustration of some standard library features. Card games like UNO are great for illustrating the behaviour of things like structs and the decks and hands used in the game play are a nice way to demonstrate the differences between the different generic containers in C++.

#### Beyond just implementing the game

At this stage, the project is still in flux and what I will end up doing is still very much dependent on how much time I find myself with in the coming months, along with how successful (or otherwise) my code turns out to be. Nevertheless, there are several interesting platforms and arenas in which the resulting code may end up being used. At the moment this includes investigating how to package the code for installation with both Windows and one of the major Linux distributions (probably [Ubuntu](http://www.ubuntu.com/)), how to deliver it using [Adobe AIR](http://www.adobe.com/products/air/) and/or Flash, and how to set up the game in-browser with [Silverlight](http://www.microsoft.com/silverlight/).

Before that I will also need a [GUI](http://en.wikipedia.org/wiki/Graphical_user_interface), which is another aspect of programming that I have rarely touched save for a scientific calculator programmed in [Cocoa](http://www.apple.com/macosx/developers/) - oh how I wish I had kept up my Cocoa programming post-iphone! I think I will start with [Qt](http://qt.nokia.com/) for the Linux implementation and [Windows Presentation Foundation(WPF)](http://en.wikipedia.org/wiki/Windows_Presentation_Foundation) for a Windows Vista/7 version.

There is more to think about than just the GUI and how to deliver the finished executable. I am really interested in trying to cover as many bases as possible, both in terms of languages used and software design. I hope I will be able to write posts like “Why programming language _X_ is really bad for programming an UNO game”, “How I implemented feature _Y_” (there are lots of alternative rules in UNO, so it will be nice to configure the game to an individual’s particular taste) and “How to let the computer do Z without looking as though it is cheating”. 

#### Hold the horses

Well. Let’s see how I do! There are obviously lots of exciting things to do but I have to actually take the baby steps forward first. In a couple of days, I will write a post where I work through the representation of the cards, the players and [the game rules](http://en.wikipedia.org/wiki/Uno_(card_game)#Official_rules) in C++ - or at least as far as I can get in a thousand words.