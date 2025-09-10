---
category: Software
date: '2025-06-02'
tags:
- Twenty Five
- LLM
- Software
- Crosswords
- Hype
title: LLMs and Cryptic Crosswords
---
At the time of writing, one way to demonstrate the illusory nature of LLM intelligence is to get one to try and answer a cryptic crossword clue.

<!--more-->

(NOTE: as the saying goes, "the plural of anecdote is not data" but I have tried this experiment with a number of LLMs and had similar results each time.)

Crosswords are great. I should write about them more. Even ordinary crosswords with supposedly simple clues can be a good way to boot up your brain first thing in the morning. And that's to say nothing of the pleasure of giving up on a clue, coming back later and instantly getting it. I take this as evidence of the "under-brain", the one you don't know about that ticks away in the background while you concentrate on humming the latest earworm.

At our house, we've been doing more cryptic crosswords lately. It's partly because we've become addicted to them, with the increased practice making us (humblebrag) rather good at them. But, dear reader, 'ordinary' crosswords are just the gateway drug. The true prize is the cryptic crossword - sometimes literally in the case of The Guardian, when there is an _actual_ prize!

Cryptic crosswords and their clues are a special kind of puzzle, imbued with many variations of sub-puzzles and meta-puzzles. But this arcana is simply a set of rules and isn't this is exactly the sort of thing you'd get your AI assistant to learn and then destroy all-comers with ease? I mean, it would be yet another cultural death knell for the species if Chat-GPT did the crossword in the morning, presumably leaving you to your meatbag fate of smooshing delicious croissants into your mouth unperturbed by the awkward business of doing thinking stuff.

The sorts of (easy) clues that you get include:

- code words that indicate the presence of an anagram
- phrasing to suggest you should use all the initials of the following words
- weird initialisms that suggest certain letters are present in the word you're looking for (e.g. second for S, Mr for M etc)
- along with some remaining words that are the definition of what you're looking for

The more difficult cryptics take these formulae even further, usually including a whole canon of different clue types and signifiers. In some ways, a cryptic is often a duel with the setter. The more you know the setter, the more you know how to do the crossword. It's a learned skill and the setter sets not only the puzzle but also the learning curve.

It's surprising how easy it is to find the answers to cryptic crosswords online.{{% sidenote "sn-cross" %}}It should also be noted that we do our crosswords on an app that gives the answer when we want to give up. This is a nice feature for cryptics because then the puzzle becomes one of working backwards from the clue to the solution.{{% /sidenote %}} You can usually just pop the clue and the number of letters into a search engine because the answer has already been indexed somewhere. But that's no fun. So I thought "why not feed this tricky clue into an LLM and ask it to explain the answer?" Because they're rubbish at them, that's why.

To give the one I used some credit, it did attempt to explain what it was doing before just completely melting down and stopping mid-sentence. Not unlike me in a meeting at work where I'm saying what I think we should do and suddenly think about chocolate hob nobs instead. (This happens more often than I would like it to, but in my defence chocolate hobnobs _are_ ace.) The techniques it suggested were on the right lines but it failed to spot the word hidden in plain sight, which is a particular feature of the cryptics we do. (We'd missed it too!)

But the AI models don't fare too well on the basics either - and again this was me being unfair. On one occasion I tried asking Le Chat (Mirai's LLM chat app) what words filled a particular pattern of letters. I told it explicitly that underscores were where the missing letters were. No luck at all. It didn't even report an answer that had the right number of letters. Wolfram Alpha can do this in its sleep.

The reason being that they are just text guessers, there's no thinking going on, at least not yet. Deepseek and Claude, which try to reason their answers, are not really at the level of cryptic crosswords.

In the end it's my mistake, not theirs. But it's interesting to think that there are so many things that people think this technology works for. And also interesting to think that the solution function seems so much easier to solve for - a word grid rather than a sentence or a cat picture. And yet...

Perhaps there are also ways that I could get better at prompting for answers to my clues (though to be fair, I'd rather put _that_ effort into solving the clues myself.) It's certainly true that the prompt influences the answer and you can get different answers by coming at things in a different way.

The next step for me is to get one of these assistants to write me a cryptic crossword. I am curious about what I will get, but not that hopeful that it will be any good. As I mentioned before, the sheer number of possiblilities for the clues means that a crossword is a dialogue between the setter and the solver. If the setter is just a random text generator, what hope for the solver?