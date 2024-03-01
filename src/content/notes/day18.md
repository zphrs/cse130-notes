---
nextNote: "../day19/"
prevNote: "../day15/"
title: "Day 18 - Mutexless"
date: 2024-02-26
---

# Day 18 - Mutexless

## Strict Alternation

Taking turns by using a shared variable to keep track
of whose turn it is

Waiting thread spins on reading the shared variable, checking whether the shared variable is equal to its own ID

### Downsides

Only two threads allowed

A thread busy doing noncritical work can prevent the other thread from entering the critical section

Either thread can crash, causing the other to wait indefinitely

## Dekker's Algorithm

Track turn and have threads proclaim interest.

Give mutex to a thread only if other thread is not interested and it's the thread's turn.

Keep an array called `wants_to_enter` to track interest of the threads.

Then have each thread wait until either it is their turn or the other thread is not interested. While a thread is waiting it sets `wants_to_enter` to `false` and then switches back to `true` once it's their turn.

### Code

```c
bool wants_to_enter[2] = {false, false};
while wants_to_enter[other_id] {
    if turn != id {
        wants_to_enter[id] = false;
        while turn != id {
            // busy wait
        }
        wants_to_enter[id] = true;
    }
}

// critical section
turn = other_id;
wants_to_enter[id] = false;
// remainder section

```

Supporting any number of threads is technically possible.

No thread that is outside a critical reagion can block because a thread proclaims interest only when it is in the critical section.

As long as the critical region eventually terminates, all threads get a turn.

## Lamport's Bakery Algorithm

Named after the bakery ticket system where you take a number and wait until your number is called.

When a thread wants to lock, it looks at all other threads and takes a number that is one greater than the maximum number of all other threads. Then it waits until all other threads with a nonzero number less than its own have finished. To break ties, the thread with the lower ID goes first.

There's a problem though:

```c
m = max(thread_numbers);
my_number = m + 1;
```

The above is not atomic. To solve this we keep an array of `entering` to track whether any thead is inside the above critical section. Then we wait to lock until both no one's in the critical section and the above condition is true:

```c
lock(int id) {
    entering[id] = true;
    m = max(thread_numbers);
    my_number = m + 1;
    entering[id] = false;

    for (j in threads) {
        while (entering[j]) {
            // busy wait
        }
        while (thread_numbers[j] != 0
            && (
                thread_numbers[j] < my_number
                || (thread_numbers[j] == my_number && j < id)
            )
        ) {
            // busy wait
        }
    }
}
```

Finally, this supports any number of threads, ensuring one thread at a time in the critical section and doesn't require atomicity; but it does use busy waiting.
