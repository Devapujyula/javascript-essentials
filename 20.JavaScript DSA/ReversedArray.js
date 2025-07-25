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
