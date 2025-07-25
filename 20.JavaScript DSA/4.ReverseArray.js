let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// 1. reversed an array using reverse inbuilt method
let reverseArray1 = arr.reverse();
console.log(reverseArray1);

// 2. Manual method Using for loop
function reverseArray2(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(reverseArray2([9, 8, 7]));

// 3. Two pointer technique
// Reversing an array without using built-in-methods and without extra space
function reverseInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
console.log(reverseInPlace([9, 8, 7, 6, 5]));

// 4 using slice and reverse method
let reversed = arr.slice().reverse();
console.log(arr);
console.log(reversed);
