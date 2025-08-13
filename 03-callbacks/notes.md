## Topic 03
## CallBacks

-------------------------------------------------------------------------------------
## What are Callbacks?
Callbacks are just functions also called `callback functions` that are passed as arguments to another function.


-------------------------------------------------------------------------------------
## Why were Callbacks needed?
JavaScript is single-threaded and can perform one task at a time in a sequence top to bottom, means it's synchronous. Now if a long task has appeared it would stop the code from further processing and code will wait for this task to finish. With Node.js we handed over such tasks to run in the background so that the code would not have to wait, and long time consuming tasks are performed asynchronously in the background.

`The Problem:`  
With synchronous programming we are waiting for each task to finish before going further and we can take any action after it, but with asynchronous programming a task is running in the background and we don't know when it will finish and how can we perform action on the outcome of this task.

`The Solution:`  
We pass a callback function to such asynchronous function (task). When the async work is done, it calls our callback function, this lets us handle what happens next.

`The Solution (In Another Words):`  
In synchronous code, we perform a task and then act on the result immediately, while in asynchronous code, we don’t know when the task will finish, so we pass a callback function saying: “Whenever you’re done, run this function that I gave you.”


-------------------------------------------------------------------------------------
# What is the syntex of callback functions?
Let’s say we have a car for service.
We want to:

- 1. Wash the car
- 2. Refill fuel
- 3. Check engine oil
- 4. Check coolant
- 5. Check brake fluid
- 6. Inspect battery
- 7. Change tyres
- 8. Start the car
- 9. Test drive the car

`Example`
Check `callbacks-example-1.js`


-------------------------------------------------------------------------------------
# What is "Callback Hell" and "Pyramid of Doom"?
`Callback Hell`
In the above car example, there are several nested callbacks. As the logic inside these callbacks grows, the code becomes messier and harder to manage, which is why it’s called Callback Hell.

`Pyramid of Doom`
With each nested callback, the indentation increases, making the code appear like a pyramid from left to right. This visual shape, combined with the complexity is referred to as the Pyramid of Doom.


-------------------------------------------------------------------------------------
# But we can avoid this with seperate functions.

While we could avoid this deep nesting by creating a separate function for each task (e.g., washCar(), refillFuel(), checkEngineOil(), etc.). However, in a sequence with many steps (say 9+), this still leads to multiple nested callbacks causing `Callback Hell` and quickly becomes hard to read and maintain

`Example`
Check `callbacks-example-2.js`