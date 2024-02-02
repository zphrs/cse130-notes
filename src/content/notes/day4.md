---
nextNote: ""
prevNote: "../day3/"
title: "Day 4 - Interpreters/Comm Links"
date: 2024-01-17
---

# Day 4 - Interpreters/Comm Links

Interpreters execute instructions and occasionally sends out messages using communication links.

Communication links allow for sending and receiving messages.

## Interpreters - Compute

Interpreters execute instructions and occasionally sends out messages using communication links.

---

In essence, consists of:

### Instruction Reference

reference to next instruction

### Repotoire

what commands are available

### Environment Reference

where to output stuff

### List of Examples

#### General Purpose

- Laptop
- Infotainment system in car

#### Special Purpose

- Keyboard
- Mouse
- Laser Printer
- Software-defined radio
- Microwave oven
- Clock chip
- USB interface

### Layers of Interpretation

Interpreters can be built on top of interpreters. (turtles all the way down)

This creates layers of interpreters.

### Interpreter Layer Design Goals

- Do either what was asked or do nothing
- Half-completed tasks are not allowed

## Comm Links - Communicate

### List of Examples

#### Hardware

- Twisted pair
- Coaxial cable
- Optical fiber

#### Higher Level

- Ethernet
- USB
- The internet
- The telephone system
- A Unix pipexw

### Operations

- SEND(link_name, outgoing_message_buffer)
- RECEIVE(link_name, incoming_message_buffer)

---

Why not just use memory's READ/WRITE?

Because:

- data corruption (collision)
- data duplication
- data loss
- broken connection
- congestion

### Link Names

link_name depends on layer:

- TCP port number
- IP address
- Internet address
- Many parts: roger@<ip>:<port>

### Message Buffers

Abstractions with buffer length
