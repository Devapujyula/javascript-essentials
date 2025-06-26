/**
 * async is a keyword you add before a function to make it return a Promise.
 * await tells JavaScript to wait for a Promise to resolve before moving on.
 * 
 * Why Use Async/Await?
Makes asynchronous code look and behave like synchronous code.

Easier to read and write than chaining .then() calls.

Simplifies error handling with try...catch.
 */

function wait(ms) {
  return new Promise((reslove) => setTimeout(reslove, ms));
}

async function sayHello() {
  console.log("Before wait");

  await wait(1000);
  console.log("After wait");
}

sayHello();
