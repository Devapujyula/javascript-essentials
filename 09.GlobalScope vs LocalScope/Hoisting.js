/**
 * 1. What is Hoisting?

"Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope during the compilation phase, before the code is executed."

This means you can use functions and var variables before they're actually declared in the code.

2. Why Was It Introduced?

"Hoisting was introduced to make JavaScript more flexible and beginner-friendly. It allows developers to organize code more naturally — for example, calling a function before it’s defined."


 */

getName();
console.log(x);

var x = 7;

function getName() {
  console.log("Namaste JavaScript");
}
getName();
console.log(x);

console.log(getName);
