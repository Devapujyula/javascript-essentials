/* 
arrays are also custom objects in JS
index of the element is the key and the element itself is the value
*/

/**
 * Higher order function: These are functions that defends and operats on other functions
 * Higher order funtions take another function as an argument or returns a function as an argument and then execute the logic
 * Example:
 *
 * function gun() {
 * };
 * function fun (gun) {
 * gun();
 * };
 *
 * from the above example fun is HOF
 * map function
 * map is a HOF that is available with arrays  -> f
 * it take function as an argument and it returns an array in which every value is actually populated by calling function f with original array element as an argument
 * Every element of the original array is passed one by one in theargument function f
 * What ever is the output for each individual element, we populate that output in an array
 *
 * map internally iterates/ loops over every element of the given original array pass that
 * element in the argument function f and then store the returned value inside an array
 *
 * WHEN TO USE MAP????
 * In any situation wen we have to do an operation on every element of the
 * array and store the result of each operation
 * map can be a good option
 *
 * For example:
 * Array of Product object
 *
 */

function square(ele) {
  return ele * ele; // returns sqaure
}

function cube(ele) {
  return ele * ele * ele;
}

function isEvenOrOdd(x) {
  if (x % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const array = [1, 2, 3, 4, 5];

const result = array.map(square); // sqaure is function passed as an argument
console.log(result);

const cubeResult = array.map(cube);
console.log(cubeResult);

const evenOdd = array.map(isEvenOrOdd);
console.log(evenOdd);

const newArr = [9, 8, 7, 6, 5];

function print(element, index) {
  return `Element at index ${index} is ${element}`;
}

const result2 = newArr.map(print);
console.log(result2);

// Custom map function

function customMapper(arr, func) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
}

const value = customMapper(newArr, print);
console.log(value);
