---
title: "In Praise of Playing the Long Game"
category: "Ideas"
tags: [Twenty Five, Twenty Four, Twenty Eighty, Calendar, Ideas, Bargains]
date: "2025-02-10"
description: "I bought a Barbara Hepworth calendar that I thought was a steal until I realised it was a 2024 calendar."
params:
  math: true
---

I bought a Barbara Hepworth calendar in the sale at the Tate Modern shop that I thought was a steal until I realised it was a 2024 calendar, not a 2025 one! However, the joke's on them because I only have to wait until 2029 for the next year that starts with a Monday.

Unfortunately, unlike 2024, 2029 is _not_ a leap year. This means all the days of the week would be wrong from March 1st onwards. It gets worse! The next two years that start on a Monday are 2035 and 2046, both of which quite obviously fail to be leap years.

Oh dear...

<!--more-->

In fact, the next year I could use this calendar is **2080**. Just as well that it has some nice pictures of Barbara Hepworth sculptures in it that I can look at while I am waiting!

### Fun fact

In finding out just how poor a bargain my calendar was, I came across something called ["Zeller's Congruence"](https://en.wikipedia.org/wiki/Zeller%27s_congruence). This is an algorithm that helps you determine the day of the week for any Julian or Gregorian calendar date.

It looks like this for the Gregorian calendar:

\[ h = \left(q + \left\lfloor \frac{13(m+1)}{5} \right\rfloor + K + \left\lfloor \frac{K}{4} \right\rfloor + \left\lfloor \frac{J}{4} \right\rfloor + 5J \right) \mod 7 \]

Where:

- \( h \) is the day of the week (0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday)
- \( q \) is the day of the month
- \( m \) is the month (3 = March, 4 = April, ..., 14 = February)
- \( K \) is the year of the century (\( \text{year} \mod 100 \))
- \( J \) is the zero-based century (\( \text{floor(year / 100)} \))

If, like me, you think that term for the month \( m \) looks a little bit weird, it's because February is a pain in the backside and so the algorithm starts with March (scientifically proven to be the month of good omens) so that February can be considered last.

