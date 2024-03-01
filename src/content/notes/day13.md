---
nextNote: "../day14/"
prevNote: "../day12/"
title: "Day 13 - Virtualization Cont."
date: 2024-02-07
---

# Day 13 - Virtualization Cont.

## Comparison: Cyclic Executive vs Separate Threads

### Cyclic Executive

- Each task is given a fixed amount of time to run for each cycle
- A task yields back to the scheduler after its time is up
- The next task can only run after the current task yields
- Tasks are run in a fixed order

### Separate Threads

- all tasks run at the same time but are scheduled by the OS and can be interrupted /woven after any arbitrary assembly instruction, meaning that each task is no longer atomic

## Bounded Buffer

Problem: counter = counter + 1 isn't atomic

To make it atomic use mutexes to make sure a push's increment can't happen at the same time as a pop's decrement.

## Race conditions
