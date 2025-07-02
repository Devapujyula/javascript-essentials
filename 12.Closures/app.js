/**
 * Closure = when a function remembers and uses variables from the outer scope even after that scope has finished running.
 * JavaScript variables can belongs to the local or global scope
 * Global variables can be made local (private) with closures.
 * Nested functions are required to understand closures.
 * A closure is a function having access to the parent scope, even after the parent function has closed
 */
// function outer() {
//   let counter = 0;

//   function increment() {
//     counter++;
//     console.log(counter);
//   }

//   return increment;
// }

// const addOne = outer();

// addOne();
// addOne();
// addOne();

// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// function outer() {
//   const outerVar = "Hey I am the outer Var";
//   function inner() {
//     const innerVar = "Hey I am an inner var";
//     console.log(innerVar);
//     console.log(outerVar);
//   }
//   return inner;
// }

// const innerFn = outer();
// innerFn();

// Counter example
function counter() {
  var count = 0;
  console.log("Outer Function Executed");

  function innerCount() {
    console.log("Inner Function Executed");
    count = count + 1;
    console.log(count);
  }
}
counter();
