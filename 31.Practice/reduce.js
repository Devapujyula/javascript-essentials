let arr = [11, 4, 78, 98, 45, 34, 87, 98, 12, 43];
let max = arr.reduce((accumulator, element, index, array) => {
  if (accumulator > element) {
    return accumulator;
  } else {
    return element;
  }
}, arr[0]);

console.log(max);
