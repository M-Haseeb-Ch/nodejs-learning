/**
 * Demonstration of Node.js Event Loop Phases
 * 
 * Expected Output:
 * 1. Synchronous Code Processing - First Cycle
 * 2. Microtasks
 *  2.1. Microtasks - Executing process.nextTick - First Cycle
 *  2.2. Microtasks - Executing Promise.resolve - First Cycle
 * 3. EventLoop Phases
 *  3.1. EventLoop - Timers - Executing setTimeout() - First Cycle
 *  3.2. EventLoop - Pending Callbacks - Executing Connection Failure - First Cycle
 *  3.3. EventLoop - Poll - Executing Socket Data Read - Second Cycle
 *  3.4. EventLoop - Check - Executing setImmediate() - Second Cycle
 *  3.5. EventLoop - Close Callbacks - Executing Socket Close - Second Cycle
 * 
 * **Steps:**
 * 1. Navigate into the project folder
 * 2. Run the script ( node event-loop.js )
 */

const net = require('net');

// **3** Event Loop Phases
const server = net.createServer(socket => {
  // - **3.3** Poll (retrieving new I/O events)
  socket.on('data', () => {
    console.log('  3.3. EventLoop - Poll - Executing Socket Data Read - Second Cycle');
  });

  // - **3.5** Close Callbacks (e.g., socket.on('close'))
  socket.on('close', () => {
    console.log('  3.5. EventLoop - Close Callbacks - Executing Socket Close - Second Cycle');
  });

  server.close();
});

server.listen(0, () => {
  // Connect & send immediately so poll has work queued
  const client = net.connect(server.address().port, () => {
    client.write('hi'); // Server will receive this in the poll phase

    // - **3.4** Check (setImmediate) Triggering in second cycle to show actual sequence
    setImmediate(() => {
      console.log('  3.4. EventLoop - Check - Executing setImmediate() - Second Cycle');
    });

    client.end();
  });
});

// - **3.2** Pending Callbacks (I/O callbacks deferred to the next loop)
const socket = net.connect({ port: 65000, host: '127.0.0.1' }); // Closed port
socket.on('error', () => {
  console.log('  3.2. EventLoop - Pending Callbacks - Executing Connection Failure - First Cycle');
});

// - **3.1** Timers (setTimeout, setInterval)
setTimeout(() => {
  console.log('3. EventLoop Phases');
  console.log('  3.1. EventLoop - Timers - Executing setTimeout() - First Cycle');
}, 0);

// **2** Microtasks (run after synchronous code completes, before event loop phases)
// - **2.2** Promises (resolve/reject)
Promise.resolve().then(() => {
  console.log('  2.2. Microtasks - Executing Promise.resolve - First Cycle');
});

// - **2.1** process.nextTick
process.nextTick(() => {
  console.log('2. Microtasks');
  console.log('  2.1. Microtasks - Executing process.nextTick - First Cycle');
});

// **1** Synchronous Code Processing
console.log('1. Synchronous Code Processing - First Cycle');