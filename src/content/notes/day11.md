---
nextNote: "../day12"
prevNote: "../day09/"
title: "Day 11 - HTTP Server"
date: 2024-02-02
---

# Day 11 - HTTP Server

## Your HTTP Server

## Sockets/Helper Functions

### Normal Socket Procedure

#### `listener_socket = socket(...)`

Creates a listener socket

#### `bind(listener_socket, ...)`

Binds the listener socket to a port

#### `listen(listener_socket, ...)`

Starts listening for incoming connections

#### `accept(listener_socket, ...)`

`connection_fd = accept(listener_socket, ...)`

Accepts a new connection, returning a file descriptor to that connection

#### setsockopt(connection_fd, ...)

Sets options for the connection, including timeouts (will return a EAGAIN error if the connection times out)

#### Typical Ordering

1. Make a socket
2. bind to a port
3. listen
4. accept
5. setsockopt
6. read/write
7. close

See Day 5 to review read/write/close calls & file descriptors.
