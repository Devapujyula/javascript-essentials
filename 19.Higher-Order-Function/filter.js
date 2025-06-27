/**
 * Filter function
 * Filter is also a HOF
 * Filter also loops over the array elements
 * There is one special thing about filter, i.e., the argument function f which we have to pass
 * inside filter should always returns a boolean, oterwise output
 * will be converted to a boolean
 * Filter loops over every element , passes that element in the argument function and then if the output
 * of the this function call is true, then it stores the original element in a row in a new array
 * otherwise doesn't add this add element to the array
 */

function oddEven(x) {
  return x % 2 == 0;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.filter(oddEven);

console.log(arr.filter(oddEven));

const array = [5, 1, 3, 2, 6];

// filter out the odd values

function isOdd(x) {
  return x % 2;
}
const output = array.filter(isOdd);
console.log(output);
