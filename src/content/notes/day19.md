---
nextNote: "../day19/"
prevNote: "../day15/"
title: "Day 18 - Mutexless"
date: 2024-02-28
---

# Day 19 - Args

## `getopt()`

```c
#include <unistd.h>

int getopt(int argc, char *const argv[], const char *optstring);
```

Example optstring for server arguments: `"t:`

### Returns

- `-1` when there are no more options - argv == null
- `?` when an option is not recognized - argv = null, optopt = the character of the option found
- The character of the option found - argv = the inputted argument of the option found

### Errors

`opterror` - enables or disables error messages.

`?` from getopt means there was an error and `optopt` is the character of the option that caused the error.

### `optind`

`optind` is the index of the next element to be processed in argv or NULL if there are no non option arguments.
