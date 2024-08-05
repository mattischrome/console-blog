---
category: Mathematics
pubDate: '2012-10-02T00:00:00Z'
tags:
- Maths
- Lists
- Intros
- Twelve
title: 'Nonlinear Systems: A Rough Intro'
heroImage: ../../assets/images/defaultHero.jpg
description: This is another mathematics post that does not actually feature any equations
  or graphs. It is
---
This is another mathematics post that does not actually feature any equations or graphs. It is intended to set the way clear for writing regularly about nonlinear systems. This in itself is a precursor to writing more about mathematical biology as biological systems are inherently complex and nonlinear. I am reading [P. G. Drazin’s textbook on Nonlinear Systems](http://www.amazon.co.uk/Nonlinear-Systems-Cambridge-Applied-Mathematics/dp/0521406684/ref=sr_1_1?ie=UTF8&qid=1349212296&sr=8-1) and this post is a glossary of terms from the start of the book laid down here because I wanted to remember how to typeset [definition lists](http://www.w3schools.com/tags/tag_dl.asp) in Markdown (though in the end I (ab)used `<h4>` tags because it looked better).

#### Nonlinear system

A set of nonlinear equations, which may be algebraic, functional, ordinary differential, partial differential, integral or a combination of these. Often the system will depend on given parameters. It is generally helpful to think of a nonlinear system as a feedback loop in which the response is not proportional to the the input. There are a great number of applications for the theory of nonlinear systems, as we shall see when the series of mathematical biology posts really gets going.

#### Dynamical system

Pretty much a synonym for nonlinear system but an emphasis is usually placed on the evolution of a solution over time or a time-like variable. The phrase comes from the name of equations governing the motion of a system of particles.

#### Nonlinearity, effect of

As a parameter that governs a particular system changes slowly, a solution may change into slowly and continuously or abruptly and discontinuously (a catastrophe).

#### Steady solution (steady state)

A persistent long-term solution of a set of nonlinear equations.

#### Stable solution (stable steady state)

Those solutions to a system that if perturbed slightly remain near their starting position for ever afterward. Usually such solutions are the more frequently observed (e.g. a body at rest on a smooth surface). 

#### Unstable solution (unstable steady state)

Some systems can be perturbed from rest and not respond in a predictable fashion. The long term behaviour of an unstable solution will depend significantly on the nature of the initial displacement and the system may move a long way from its initial position. 

#### Butterfly Effect

A popular characterisation of an unstable solution to a nonlinear system is that “a butterfly flapping its wings in Tokyo today could cause a hurricane in Paris next week”, the intention being to capture how small changes in the initial conditions of a complex nonlinear system such as the atmosphere can lead to large disturbances in the system over time.

#### Bifurcation

If a parameter of a nonlinear system is varied and the qualitative nature of the solutions change, a bifurcation is said to have occurred. Specifically the study of bifurcations is the study of how the number of steady states of a nonlinear system change as its parameters are varied.

#### Symmetry breaking

Bifurcations can also alter the symmetry of solutions to nonlinear systems. By symmetry we mean that the set of solutions of the nonlinear system is invariant under some group of translations (but the solutions therein need not be invariant). The presence of symmetries is often closely connected to the stability of solutions of the underlying nonlinear system. Whenever symmetries are involved, group theory looms large. A refresher on groups will follow in a few weeks.

#### Periodic solutions

Some systems will have periodic stable solutions. Bifurcating parameters can also feature regimes with periodic solutions.

#### Chaotic solutions

Nonlinear systems may have aperiodic solutions that appear to be random yet have stationary statistical properties (the mean and variance do not change with time). These are called chaotic solutions. Such solutions can be considered stable if they persist for all time.

***

That concludes the list and is pretty much all that can be said without providing proper mathematical definitions. The next post in this sequence will also be rather basic, a list of types of bifurcations illustrated by a few graphs. There will be equations galore and hopefully the graphs will be special too, rather than jpgs exported from R. After that, we’ll get into the good stuff.