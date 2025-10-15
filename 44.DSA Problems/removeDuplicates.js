// Remove duplicates from an array or string
//* Set new Method used
let array = [1, 3, 4, 5, 2, 3, 7, 8, 9, 9, 7, 6, 4, 3];

let uniqueNumbers = new Set(array);

let sortedUniqueNumbers = [...uniqueNumbers].sort((a, b) => a - b);

console.log(uniqueNumbers);
console.log(sortedUniqueNumbers);

// another method of implementing here
//* Filter
let arr = [1, 3, 4, 5, 2, 3, 7, 8, 9, 9, 7, 6, 4, 3];
let filterNumbers = arr.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});

console.log(filterNumbers);

let sortedFilterNumbers = filterNumbers.sort((a, b) => a - b);

console.log(sortedFilterNumbers);
