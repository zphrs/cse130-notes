---
nextNote: "../day9/"
prevNote: "../day6/"
title: "Day 8 - Client-Server Model"
date: 2024-01-26
---

# Day 8 - Client-Server Model

## Adv. of Client-Server

Strengthen modularity:

- Limit interaction between modules (no propagation of effects via global variables)
- Prevent propagation of errors
- Provide flexibility and interchangability

Uses only message passing to communicate between modules.

## Soft vs Hard Modularity

Soft modularity is when an error can propagate between modules, while hard
modularity is when an error cannot.

## Protection Against Errors

### Soft Modularity

Some programming languages can prevent too much error propagation but it is still difficult.

### Hard Modularity

- Client can time out and then try elsewhere

Limited interaction means limited errors

## Possible Issues with Messages

What if the message is lost?

- Do they all fail?
- Do only some fail?
- Are they out of order?

If all messages are required then acknowledgement is usually needed.

## If (client/server) fails

### Client

- Server usually unaffected
- if client fails midway through a request then the server can timeout

### Server

- Client checks messages for correctness and validity
- Client times out and tries a different server
- Server is usually restartable without affecting clients

## Possible Client-Server Issues

### Representation

SerDe is hard! Little Endian vs Big Endian, etc.

---

shoutout to protobufs

### Message Ordering

Some networks can reorder messages

### Malicious/Buggy Servers & Clients

---

DDOS on server or a bug in server or client

## Scaling

Multiple servers + multiple clients

### Multiple Clients

- Server might want to keep clients separate
- Server might want to facilitate sharing

### Multiple Servers

- Client may request different services
- Client might pick best server for its needs
- Client might need to stick to one server
