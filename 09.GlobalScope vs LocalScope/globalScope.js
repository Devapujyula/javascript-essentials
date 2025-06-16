// JavaScript varibales have 3 types of scope
// 1. Global scope
// 2. Function scope
// 3. Block scope
// Before ES6(2015), JavaScript variables had only Global Scope and Function Scope.
// ES6 introduces 2 important new JavaScript keywords: let and const - to help with block scope

// Global Scope vs Local Scope
// Any variable outside code block {} is said to be in Global Scope
// can be access anywhere in the program
// Gotchas : name Collisions, modify by mistake
// Gotchas means the issues with Global variables

let firstName = "Prasanna";
console.log(firstName);

firstName = "Panda";
console.log(firstName);

function nameChange() {
  firstName = "Lakshmi";
  console.log(firstName);
}

nameChange();

if (true) {
  firstName = "sai Lakshmi Prasanna";
  console.log(firstName);
}
