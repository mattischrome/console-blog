---
category: Programming
pubDate: '2011-02-02T00:00:00Z'
tags:
- Programming
- Projects
- Games
- Fun
- Eleven
title: Programming an UNO game, part 2
heroImage: ../../assets/images/defaultHero.jpg
description: It turns out that programming the UNO game is not that complicated once
  you start designing the
---
It turns out that programming the UNO game is not that complicated once you start designing the thing. This post will get the rules and game elements clear.

#### The deck

An UNO deck consists of four sets of coloured cards (red, yellow, green and blue) together with eight wild cards. The non-wild cards are marked with either numbers or special symbols. The numbers range from zero to nine with two of each number except for the zero, which is unique. For each colour there are also two each of three kinds of special card: SKIP, SWAP and DRAW. The eight wild cards are divided into four each of two types: WILD and WILDFOUR. The wild cards are usually black in UNO decks so we may refer to them as black cards on occasion. There are one hundred and eight cards in total.

#### Gameplay

It is recommended that there be between two and ten players. The deck is shuffled and each player is dealt seven cards from the deck and a starting player selected. This selection can be done in a number of ways, a good way is for the players to cut the deck before dealing and to choose the person who turns up the highest value card.

After the deal, the remainder of the deck is set aside face down and the top card turned up and placed on the table in the middle of the circle created by the players. The starting player then attempts to match either the colour or number that is on this card. Note that if a special coloured card or a wild card is turned up initially, it is placed to the back of the deck and another chosen until a number card is revealed. For example, if a red seven is turned up then the first player can lay any red card or a seven of any colour. If she cannot do this but has a wild card, she can lay this instead - we will explain the wild cards in a moment. Failing that, she must pick up another card from the remainder of the deck. After any of these actions, the play moves on to the next player.

Play proceeds clockwise in this fashion with each player aiming to get rid of all their cards. When laying their penultimate card, a player must say “UNO!”. If they do not, then they may be required to take two cards from the deck if another player manages to say “UNO!” before the next player lays a card. A player cannot lay a special or wild card as their last card.

#### Scoring

When a player has successfully discarded all of their cards, they are declared the winner of the round and the values of the cards remaining in the hands of the other players are added to give that player’s score for the round (the winner scores zero). Numbers are taken at face value, special cards have a value of 20 and wild cards a value of 50. If over the course of several rounds a player’s score exceeds a pre-determined threshold (say 250) they are eliminated from future rounds and the ultimate winner of the game is the last person standing.

#### Behaviour of the special cards

The SKIP card is usually marked with a “null” symbol. It causes the play to skip over the next player, who misses a turn. In two player games this card will have no effect so it can either be discarded or treated as a zero.

The SWITCH card is usually marked with arrows. It causes the play to change direction from clockwise to anti-clockwise, or vice versa. In two player games this card will also have no effect so it can either be discarded or treated as a zero.

The DRAW card is usually marked “+2” in some fashion. It forces the next player to draw two cards from the deck and miss their turn. There are unofficial rule variations in which the next player may not have to pick up a card and miss their turn (see below).

The WILD card is marked with an oval cut into four segments coloured red, yellow, green and blue. The player laying this card can nominate a new colour that subsequent players must lay. In addition the next player must pick up a card from the deck and miss their turn. As stated above, this can only be laid if there is no legal alternative. As with the DRAW card, there are unofficial variations in which the next player may not have to pick up a card and miss their turn (see below).

The WILDFOUR card also features all four colours and is usually marked with “+4” in some fashion. It allows the player laying the card to nominate a new colour for the deck. Meanwhile, the next player is forced to pick up four cards from the deck and miss their turn. Again, there are unofficial rule variation that may prevent a player from picking up additional cards (see below).

#### Unofficial rule variation

In some unofficial rule variations, in a situation where the next player is required to pick up cards as the result of a DRAW, WILD or WILDFOUR card being played, they do not have to do so if they themselves have a DRAW, WILD or WILDFOUR card. The player after them would then have to pick up the number of cards corresponding to the sum of the cards played. For example, a DRAW followed by a WILD would lead to the next player picking up three cards. This can continue with the number of cards that the subsequent player is required to pick up increasing accordingly. It is to be noted that a DRAW card cannot be played _after_ either of the wild cards and a WILD card cannot be played _after_ a WILDFOUR card.

This variation is not consistent with the remainder of the rules though as it does not preserve the unique nature of the wild cards, which must be played only when there is no alternative - not to avoid picking up cards! Initially we will not include it in the program, though we may return to it later as a way of investigating how to create different gameplay options for the user.

#### Moving on to the code

Stay tuned for part three, where I will discuss how I program the game and will also give some screenshots of the console based version.