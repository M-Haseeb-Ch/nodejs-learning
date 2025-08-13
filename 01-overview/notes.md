## Topic 01
## V8, Libuv, and Node.js basics 

-------------------------------------------------------------------------------------
## What is a JavaScript Engine?
A JavaScript engine is a program that executes JavaScript code.  
Initially, JavaScript was designed to run only in browsers on the client side, and each browser came with its own engine.

Some notable engines are:  
- `V8` – Used by Google Chrome and Node.js  
- `SpiderMonkey` – Used by Mozilla Firefox  
- `JavaScriptCore (Nitro)` – Used by Apple Safari  

The V8 engine, developed by Google, is one of the fastest and most widely used JavaScript engines.


-------------------------------------------------------------------------------------
## What is Libuv ?
Libuv is a multi-platform C library originally created for Node.js. Its main purpose is to provide:

- `Event Loop:` A mechanism to efficiently interact with the operating system.
- `Asynchronous I/O:` Handles input/output tasks asynchronously so the main thread doesn’t get blocked.
- `Thread Pool:` Offloads potentially blocking tasks to a pool of worker threads, preventing the main event loop from being blocked.
- `Cross-Platform Compatibility`: Offers a consistent API that hides OS-specific details, enabling it to run on different operating systems seamlessly.


-------------------------------------------------------------------------------------
## What is Node.js?
Node.js was developed by `Ryan Dahl`. It is an open-source, cross platform runtime JavaScript environment that uses the V8 engine and libuv. It enables JavaScript to run outside the browser in a standalone environment. Before Node.js, JavaScript was primarily a browser-based scripting language.
