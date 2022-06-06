Events are emitted
Event loop picks them up
Callbalcks are called

Start Node.js app –> start event loop

-> first would be handled tasks with expired timers (setTimeout)
-> I/O polling and callbacks (looking fo r new I/O events that are ready to be executed) – 99% of code is here
-> setImmediate callbacks. Special timer. Immediately after the I/O polling and execution callback
-> Close callbacks. Web socket, or server shutdown.


Two other queues:
1. Process.nextTick().queue
Tick is a loop cycle.
Similar to setImmediate but event is executed right after current phase. Doesn't wait for entrire loop to finish.
Immediately after the I/O polling and execution callback

2. Other microtasks queue (Resolved promises)
