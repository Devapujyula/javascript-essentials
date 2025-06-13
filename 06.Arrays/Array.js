/**
 * Arrays are variables which can hold more than one value
 *
 * const fruits = ["banana", "apple", "cherry"]
 *
 * Array can be different types
 *
 * const anyThing = [1, "Satya", false, null, undefined, $]
 *
 * Accessing values
 * let numbers = [1, 2, 3, 4, 5]
 * console.log(number[0]) // 1
 *
 * Symbol is a primitive data type introduced in ES6.
 * It’s used to create unique identifiers.
 * It's not iterable, not indexable, and not like an object or array.
 */

// Accesing values

let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

// Finding the length
console.log(numbers.length);

// changing the values
numbers[4] = 6;
console.log(numbers);
// Arrays are mutable
// Arrays can be changed
// In javaScript, arrays are objects. The type of operator on arrays return object
console.log(typeof numbers);

// Arrays can hold many values under a single name

// Array Methods
// There are some important array methods in JavaScript. Some of them are as follows:
let numbers = [1, 2, 3, 4, 5];

// converts an array to a string og comma separate values
console.log(numbers.toString());

// join - joins all the array elements using a separtor
console.log(numbers.join("-"));

// pop - removes last element from the array
numbers.pop();
console.log(numbers);

// push - Adds a new element at the end of the array
numbers.push(5);
console.log(numbers);

// shift - remov first element and returns it
numbers.shift();
console.log(numbers);

// unshift - adds element to the beginning returns new array length
numbers.unshift();
console.log(numbers);

// delete - Array elements can be deleted using the delete operator
delete numbers[4];
console.log(numbers);

// concat - used to join arrays to the given array
let a1 = [3, 4, 5, 6];
let a2 = [7, 8, 9, 10];
let a3 = [11, 12, 13, 14];
console.log(a1.concat(a2, a3));

// sort - sort method is used to sort an array alphabetically
let array = [9, 3, 6, 1, 8, 2, 1];
console.log(array.sort());
// sort() takes an optional compare function. If this function is printed as the first argument, the sort() function will consider these values (the values returned from the compare function) as the basis of sorting.

// splice - splice can be used to add new items to an array

let no = [3, 4, 5, 6, 7];
no.splice(0, 2, 1, 2);
console.log(no);
// no.splice(a, b, c, d)
// a - position to add
// b - No of elements to remove
// c,d - elements to be added
// no - returns deleted items, modifies the array

// slice - slice out a piece from an array It creates a new array
let num = [1, 2, 3, 4];
let newNum = num.slice(2);
console.log(newNum); // [3, 4]
