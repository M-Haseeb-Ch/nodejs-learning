## Topic 02
## Event Loop - Execution Order

-------------------------------------------------------------------------------------
## What is an Event Loop?
The event loop is a core feature of libuv that Node.js uses to interact efficiently with the operating system. Since JavaScript is single-threaded, it means it can execute only one task at a time. Node.js leverages the event loop to handle multiple asynchronous operations without blocking the main thread.

When Node.js encounters an asynchronous task, such as reading a file or making a network request, it offloads this task to the operating system via libuv. This allows the main thread to continue running other JavaScript code without waiting for the task to complete.

Once the operating system finishes the asynchronous task, it notifies Node.js by placing the associated callback function into a specific queue within the event loop. The event loop continuously cycles through each phase, checking these queues for callbacks that are ready to be executed.

During each phase of the event loop, Node.js processes all (on a FIFO basis) the callbacks in the relevant queue and thus completes the asynchronous tasks. This mechanism ensures that Node.js can efficiently manage many tasks concurrently, despite running on a single thread.

`Note: When the event loop processes a phase, it handles all tasks in that phase on a FIFO basis before moving to the next phase.`


-------------------------------------------------------------------------------------
## What are the phases or sequence of the Event Loop?

The sequence is as follows:

**1** Synchronous Code Processing

**2** Micro Tasks (Micro tasks, if present, are run after each synchronous code processing ends.)
- **2.1** process.nextTick
- **2.2** Promises (resolve/reject)

**3** Event Loop Phases
- **3.1** Timers (setTimeout, setInterval)
- **3.2** Pending Callbacks (I/O callbacks deferred to the next loop)
- **3.3** Poll (retrieving new I/O events)
- **3.4** Check (setImmediate)
- **3.5** Close Callbacks (e.g socket.on('close'))

This sequence defines the order in which Node.js processes code, showing the precedence and priority of microtasks and event loop phases.