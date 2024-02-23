---
nextNote: "../day06/"
prevNote: "../day04/"
title: "Day 5 - File I/O"
date: 2024-01-19
---

# Day 5 - File I/O

## Buffered vs Unbuffered I/O

fread is buffered while read is unbuffered.

## read

```c
#include <unistd.h>

int res = read(
    int fd,
    void *buf, // buffer to read into
    size_t count, // max number of bytes to read
);
```

returns number of bytes read, 0 for EOF, -1 for error

## write

```c
#include <unistd.h>

int res = write(
    int fd, // file descriptor - gotten from open() call
    const void *buf, // buffer to write from
    size_t count, // number of bytes to write
);
// returns number of bytes written, -1 for error
```

## open

```c
#include <fcntl.h>

int fd = open(
    const char *pathname, // path to file
    int flags, // flags - see below
    mode_t mode, // file perms if O_CREAT
);
```

### Flags

- `O_RDONLY` - read only
- `O_WRONLY` - write only
- `O_WRONLY | O_CREAT` - create file if it doesn't exist
- `O_WRONLY | O_TRUNC` - truncate file if it exists (delete initial contents of file)
- `O_WRONLY | O_CREAT | O_TRUNC` - create file if it doesn't exist, truncate if it does - equivalent to `creat()` call

## close

```c
#include <unistd.h>

int res = close(int fd);
// returns 0 for success, -1 for error
```

## unlink

Deletes the file at path `name`.

```c
#include <unistd.h>

int res = unlink(const char *name);
// returns 0 for success, -1 for error
```

## lseek

```c
#include <unistd.h>

off_t res = lseek(
    int fd, // file descriptor
    off_t offset, // number of bytes to move
    int origin, // SEEK_SET, SEEK_CUR, SEEK_END
);
// returns new offset from beginning of file, -1 for error
```

### offset

- SEEK_SET - from beginning of file
- SEEK_CUR - from current position
- SEEK_END - from end of file
