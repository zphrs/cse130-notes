---
nextNote: ""
prevNote: "../day13/"
title: "Day 14 - Virtualization Cont."
date: 2024-02-09
---

# Day 14 - Virtualization Cont.

## Race conditions

A race condition is when the behavior of a system depends on the timing of events.

---

Doesn't necessarily mean a bug, might just mean a different result.

That said, race conditions are difficult to diagnose because they are based on random timings.

## Mutual Exclusion (Mutex)

Ensures that only one thread is inside a critical section at a time (where the code reads and manipulates a shared variable).

Shared variables can even include variables which are shared between parallel calls to the same function.

### How to Use

Call acquire before entering a critical section and call release after leaving the critical section. If there is a spinlock inside the critical section then make sure to regularly release and reacquire the lock during the spinlock.

## Locks & Condition Variables

Each condition variable has exactly one lock.

Three functions:

- `wait()` - release lock, wait for a signal/broadcast, reacquire lock
- `signal()` wake any one of the threads that are waiting on the condition variable
- `broadcast()` - wake all threads that are waiting on a condition variable

### How to Use

Use to avoid busy waiting. An example is to have a condition variable for when a buffer is full and another for when a buffer is empty.

## Semaphores

Problem: previous solutions waste CPU times

Uses two atomic operations:

- `up(S) <- S + 1`
- `down(S): while (S <= 0) {}; S <- S - 1`
  - Down can be modified to eliminate busy waiting for S to be greater than 0

Note: up is sometimes `V()` and down is sometimes `P()`.

### Two Types

Binary: 0 or 1
Counting: 0 to ∞

### General Synchronization

- Mutex
- Rendezvous semaphore (one thread waits for another before proceeding)
- Like rendezvous but n threads wait for the last one before proceeding

### How to Use

Use to avoid busy waiting. An example is to have a semaphore for when a buffer is full (initialized to N) and another for when a buffer is empty (initialized to 0). Lastly use a binary semaphore to protect the buffer (inc/dec).

### Binary Semaphore vs Mutex

A binary semaphore can be used to implement a mutex but a mutex cannot be used to implement a binary semaphore. A mutex must be released by the same thread that acquired it while a binary semaphore can be released by any thread.
