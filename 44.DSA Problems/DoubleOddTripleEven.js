let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = arr.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item * 3;
  }
});

console.log(result);
