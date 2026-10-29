---
title: "Now"
type: now
# Each shelf is a section on the page, rendered in this order.
#   source: lastfm  -> albums pulled from Last.fm at build time
#   source: folder  -> images from a subfolder of this bundle, newest first
# Name cover files YYYY-MM-DD-some-title.jpg so they sort by when you started them.
shelves:
  - heading: Listening (This week)
    source: lastfm
    user: mattischrome
    period: 7day        # overall | 7day | 1month | 3month | 6month | 12month
    limit: 6
  - heading: Listening (All time)
    source: lastfm
    user: mattischrome
    period: overall        # overall | 7day | 1month | 3month | 6month | 12month
    limit: 6
  - heading: Reading
    source: folder
    dir: book_covers
    limit: 6
    size: 300x450         # crop size; 2:3 suits book covers and film posters
  - heading: Watching
    source: folder
    dir: movie_posters
    limit: 6
    size: 300x450
  - heading: Playing
    source: folder
    dir: game_covers
    limit: 6
    size: 300x400
  # Later:
  # - heading: On the table
  #   source: folder
  #   dir: boardgame_covers
  #   size: 400x400
---

Mostly getting this blog up and running again at the moment. And dealing with the aftermath of a leak in the kitchen at home.
