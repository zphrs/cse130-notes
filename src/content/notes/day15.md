---
nextNote: "../day18/"
prevNote: "../day14/"
title: "Day 15 - Virtualization Cont."
date: 2024-02-12
---

# Day 15 - Virtualization Cont.

## Bounded Buffer Example

```c
#define N ... // buffer size

Globals:
    Item buffer[N];
    int in = 0, out = 0, counter = 0;

void push(Item item) {
    while (counter == N) {} // busy waiting
    buffer[in] = item;
    in = (in + 1) % N;
    counter++;
}

Item pop() {
    while (counter == 0) {} // busy waiting
    Item item = buffer[out];
    out = (out + 1) % N;
    counter--;
    return item;
}

```

The above code has a race condition.

### Mutex

One possible fix is with a mutex:

```c
Globals:
    Lock l;

void push(Item item) {
    l.acquire();
    while (counter == N) {
        l.release();
        l.acquire();
    } // busy waiting
    Buffer[in] = item;
    in = (in + 1) % N;

    counter++;
    l.release();
}

void pop() {
    l.acquire();
    while (counter == 0) {
        l.release();
        l.acquire();
    } // busy waiting
    Item item = buffer[out];
    out = (out + 1) % N;
    counter--;
    l.release();
    return item;
}

```

### Condition Variable

However, the mutex solution creates needless spin locks. A better solution is to use condition variables:

```c
Globals:
    Lock l;
    Condition full, empty;

void push(Item item) {
    l.acquire();
    while (counter == N) {
        full.wait(l);
    } // busy waiting
    Buffer[in] = item;
    in = (in + 1) % N;

    counter++;
    empty.signal(l);
    l.release();
}

void pop() {
    l.acquire();
    while (counter == 0) {
        empty.wait(l);
    } // busy waiting
    Item item = buffer[out];
    out = (out + 1) % N;
    counter--;
    full.signal();
    l.release();
    return item;
}
```
