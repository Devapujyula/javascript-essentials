//* Array Falttening
// let arr = [1, 2, 3, 4, 5]; // 1-D Array
let nums = [1, 2, [4, 8], [9, 3], [10, 14], 29]; //2-D Array
let result = [];
function arrayFlaten(arr) {
  for (ele of arr) {
    if (Array.isArray(ele)) {
      arrayFlaten(ele);
    } else {
      result.push(ele);
    }
  }
}
arrayFlaten(nums);
console.log(result);

// ✅ Method 1: Using flat() method (Simple & Best)
var arr = [1, [2, 3], [4, 5, [6, 7]]];
var flattened = arr.flat(2);

console.log(flattened);

var arr = [1, [2, 3, [4, 5, [6, 7]]], 8, [9, 10, [11, 12, [13, 14]]], [15, 16]];
var flattened = arr.flat(3);

console.log(flattened);

// ✅ Method 2: Using Recursion (For deep flattening without using flat())

//* Recursion is when a function calls itself to solve a smaller version of the same problem.

function flattenArray(arr) {
  let result = []; // This will store the flattened items
  for (let item of arr) {
    // The traditional method of the above written line is:
    // for (let i = 0; i < arr.length; i++) {
    //  let item = arr[i];
    //  }
    //Loop through each element of the array (1, [2, 3], etc.)
    if (Array.isArray(item)) {
      // Check if the current item is an array.
      // If yes → we recursively call flatten() again.
      result = result.concat(flattenArray(item));
      //       Here’s the important part:
      // flatten(item) will return a flattened array.
      // .concat() merges that into your result.
      // ✅ This is the recursive call. The function is solving a smaller version of the same problem.
    } else {
      // If it’s not an array (e.g., a number like 1, 2), just add it directly.
      result.push(item); // return the final flattened array
    }
  }
  return result;
}
var arr = [1, [2, 3], [4, [5, 6]]];
console.log(flattenArray(arr));
