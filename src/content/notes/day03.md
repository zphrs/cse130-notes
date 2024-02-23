---
nextNote: "../day04/"
prevNote: "../day02/"
title: "Day 3 - Memory"
date: 2024-01-12
---

# Day 3 - Memory

There are three possible functions which a computer might do, store, compute, and communicate.

## Store

Remembers stuff

### Memory

A place to remember things, modeled as a map between a space of names and a space of values (relies on name abstraction)

Interface:

Write(name, value) - Assign a new value to a name

Value = Read(name) - Get value of name

#### Memory Properties

##### Volatility

Whether the memory needs power to be applied consistently (span of seconds) in order to remember.

##### Abundance

fewer bits as we move upwards from Tape through HDD, SSD, DRAM, and Caches to Registers

##### Cost

More expensive as we move upwards in terms of $/byte

##### Granularity

the sizes of the values which get requested

#### Performance

##### Bandwidth

memory/time

##### Latency

Time until memory

##### Synchronous

One action at a time

##### Asynchronous

Many actions at a time

## Compute

interprets stuff

## Communicate

Sends stuff
