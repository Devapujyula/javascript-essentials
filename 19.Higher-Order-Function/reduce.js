/**
 * Reduce Function
 * Reduce is HOF available for arrays
 * reduce also takes a function f as an argument,
 * what reduce dooes is, it one by one goes to every element of the array,
 * say the current element is arr[1]
 * reduce will pass this element to the function f, and accumulate the result of further functions calls
 * with this particular result
 *
 * Cart -> [iphone{100000, name:"Iphone"}, case{500, name="backcase"}, tempered glass{price:300, name :"tempered glass"}]
 */

const arr = [1, 2, 3, 4, 5, 6];
function sum(prevResult, currResult) {
  console.log(prevResult, currResult);

  return prevResult + currResult;
}

const result = arr.reduce(sum);
console.log(result);

function addPrices(prevResult, currValue) {
  let newPrice = prevResult.price + currValue.price;
  return { price: newPrice };
}

let cart = [
  {
    price: 100000,
    name: "Iphone",
  },
  {
    price: 500,
    name: "Iphone BackCase",
  },
  {
    price: 300,
    name: "Iphone Tempered Glass",
  },
];

const totalPrice = cart.reduce(addPrices);
console.log(totalPrice);

const array = [5, 1, 3, 2, 6];

// sum or max of the array
function findSum(array) {
  let sum = 0;
  for (let i = 0; i <= array.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(findSum(arr));

const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(output);
