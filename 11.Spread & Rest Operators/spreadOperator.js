/**
 * The Spread Operator is used to unpack an iterable (e.g. an array, object, etc.) into individual elements.
 */

// Spread Operator with Arrays
let arr1 = [2, 3];
let arr2 = [1, ...arr1, 4];
console.log(arr2);

// Creating a copy
let arr3 = [...arr2];
console.log(arr3);

// Concatenation
let arr4 = [5, 6];
let arr5 = [...arr3, ...arr4];
console.log(arr5);

// Spread Operator with Objects
let person = { name: "Prakash", age: 27 };
let personDetails = { ...person, city: "Hyderabad" };

console.log(personDetails);

// Spread Operator with Function Calls
function add(a, b, c) {
  return a + b + c;
}
let numbers = [1, 2, 3, 4, 5];
console.log(add(...numbers));
