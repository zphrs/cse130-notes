---
nextNote: "../day8/"
prevNote: "../day5/"
title: "Day 6 - Regex"
date: 2024-01-22
---

# Day 6 - Regex

## regcomp

```c
regex_t preg;
int regcomp(regex_t *preg, const char *regex, int cflags);
```

- preg - declared regex_t structure which is a reference to the compiled regular expression.
- regex - the regular expression to be compiled (c string).
- cflags - flags that control the compilation of the regular expression.
  - REG_EXTENDED - Use extended regular expressions - treats +, ?, parentheses, etc. as special characters without being escaped.
  - REG_NEWLINE - multiline REGEX.
  - Can be combined with |.

## regfree

```c
void regfree(regex_t *preg);
```

## regexec

```c
int regexec(
    const regex_t *preg, // compiled regular expression
    const char *string, // string to match
    size_t nmatch, // number of elements in pmatch
    regmatch_t pmatch[], // see below
    int eflags // flags
    );
```

### pmatch/nmatch

```c
typedef struct {
    regoff_t rm_so; // start of match
    regoff_t rm_eo; // end of match
} regmatch_t;
```

If `regex == "([a-z]+) ([0-9]+)"` then `nmatch` should be 3.

if `string == "hello 123"`, then:

- `pmatch[0]` is the entire match: `hello 123`
- `match[1]` is `hello`
- `pmatch[2]` is `123`

### Return value

0 for success, error code for failure. Can call `regerror()` to convert the error code to a string.
