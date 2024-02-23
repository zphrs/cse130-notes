---
nextNote: "../day11/"
prevNote: "../day08/"
title: "Day 9 - RPCs"
date: 2024-01-29
---

# Day 9 - RPCs

## Stubs

Handles sending and receiving the command and arguments for both the client and the server.

### Client

Serializes command + args and later receives the response from the server and passes it to the initiating process.

### Server

Deserializes command + args and calls the requested method.

## Marshaling/Serialization

Ensuring that the client and server data types are compatible.

### Hiccups in Marshaling

- Little-endian vs big-endian
- size of integers
- floating point format (IEEE/Intel?)
- Pointers (unswizzle/swizzle)

#### Swizzling

Unswizzling is to give each object a unique identifier and then use that identifier in place of any pointers.

To swizzle is to replace the unique identifier with a pointer to the object.

## Error Handling

### At least once

Retry until client gets a positive acknowledgement.

Request should be idempotent. (aka no side effect from repeated requests)

### At most once

Send one request and wait for a response. If there's no response then it's considered failed but the client shouldn't retry.

### Exactly once

- Retry until acknowledgement
- Client and server track requests
- Much more complex
  - More corner cases
  - But more reliable

## Dealing w/ Inefficiency

Less efficient because:

- Marshaling takes time
- Network takes time
- Only pass by value allowed

### Async RPCs

- Client sends request and waits for an accept from the server
- Then client can do other things while waiting for the response
- After the client gets a response it sends and acknowledgement to the server to end the RPC

## Intermediaries

If either is offline then buffers can be used instead.

### Notification

- Push (initiator sends message) / Pull (initiator requests message)
- Decoupled: intermediary makes decisions on when to deliver message

Example:

- Publish/Subscribe: recipients subscribe to service, and are notified when a service "publishes" a new message
