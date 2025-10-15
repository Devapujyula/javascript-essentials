// function abc(a, b = 0, c) {}

// function xyz(a, b, c = 0) {}
// function pqr(a = 0, b, c) {}

// console.log(abc.length, xyz.length, pqr.length);
// const arr1 = [];
// const arr2 = [];
// console.log(arr1 == arr2); // true
// console.log(arr1 === arr2); // false

// if ([]) {
//   console.log("I am Prakash");
// } else {
//   console.log("I am absent");
// }

// let a = 10;
// let b = 20;
// const array = [1, 2, 3, 4, 5];
// const fruits = ["Apple", "Banana", "Orange"];
// const [first, second, third] = fruits;
// console.log(first, second, third);
// console.log(first);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [first, second, third, ...restNumbers] = numbers;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(restNumbers);

// console.log("1" + 2 + 2); //122
// console.log(2 + 2 + "1" + 2 + 2); // 4122
// function sub(a, b) {
//   if (b !== undefined) {
//     return a - b;
//   } else {
//     return function (c) {
//       return a - c;
//     };
//   }
// }
// console.log(sub(8)(3));
// console.log(sub(8, 3));

// const arr = ["Prakash", "Akash"];

// const first = arr[0];
// const second = arr[1];

// let flag = false;
// for (let char of second) {
//   if (first.includes(char)) {
//     flag = true;
//     break;
//   }
// }
// console.log(flag ? "present" : "not matched");

//* Closure Example withour using global varaibales
// function myFunction() {
//   let count = 0;
//   return function counter() {
//     return count++;
//   };
// }

// const count = myFunction();
// console.log(count());
// console.log(count());

//* Second Largest Element in an Array
// let arr1 = [23, 12, 43, 45, 1, 78, 98, 34];
// let sortedArray1 = arr1.sort((a, b) => b - a);
// console.log(sortedArray1); // we will get sorted Array
// console.log(sortedArray1[1]); // we will get secomd largest element in an array

//* Now here the thing is if in an array second largest element is repeted then how to handle that scenario
// let arr2 = [3, 5, 5, 7, 1];
// let uniqueSet = new Set(arr2);
// SET -> Unique Elements and gives object output
// console.log(uniqueSet);

//* Take an array double it first and then reverse it
let arr = [1, 2, 3, 4, 5];
let double = arr.map((num) => {
  return num * 2;
});

console.log(double);
let reversedArrayType1 = double.reverse();
console.log(reversedArrayType1);

console.log(double);

let reversedArrayType2 = double.slice().reverse();
console.log(reversedArrayType2);

console.log(double);

function reversedArrayType3(double) {
  const result = [];
  for (let i = double.length - 1; i >= 0; i--) {
    result.push(double[i]);
  }
  return result;
}
console.log(reversedArrayType3(double));
