---
title: Day 2 - Complexity
date: 2024-01-10
nextNote: ../../notes/day3/
prevNote: ""
---

## Issues of Complexity

### Emergent Properties

When you link stuff together new properties emerge

### Propagation of Effects

If there’s a bug in one part then that bug can propagate through the system creating more issues

### Incommensurate Scaling

When something scales differently compared to another part of the system

### Tradeoffs

Ex. Time vs Memory

## Complexity Definitions

Large number of components with a large number of interconnections which are not uniformly organized.

If there are a lot of irregularities and/or it takes many words to describe the system then it’s complex.

## Sources of Complexity

### Many Responsibilities

If the system has to do more then it becomes more complex

### Many Constraints

If the system has to do the same with fewer resources then it becomes more complex

### Law of Diminishing Returns

The better the system gets the future potential gains get harder

“Lowest hanging fruit”

## Management Strategies

### Modularity

Break a big problem into smaller pieces. Decreases debugging time because once you find which “neighborhood” is responsible for the bug, that “neighborhood” is much smaller than the entire system.

Reduces number of components and interactions between different parts of the codebase

Allows for swapping out modules/easy upgrades/rewrites within a singular module

### Abstraction

Break into components at logical points and then treat an individual component as a black box which you can trust.

Benefits of Robustness:

Allows for slight differences on the inputs and allows the inputs to be used for more

Ex. JSON api calls usually return a ton of data just in case the developer might need that extra data

### Layering

Abstractions + Modularity -> many interconnections?

Reduce interconnections with layering

Modules in a layer may only interact with modules in the layer or up/down one layer.

Easier to use and add more functionality but it adds some overhead

### Hierarchy

Combine small groups of modules into small subsystems

Then combine small subsystems into large systems

### Naming

Use names to make modules easy to find and easy to replace

Use names to have different sources that get treated the same way
