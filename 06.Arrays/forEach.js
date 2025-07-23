// for every element present inside array the specified function will be executed
//* forEach
// let salaries = [45000, 56000, 50000, 60000, 75000, 55000, 40000];
// salaries.forEach((salary, index, array) => {
//   let increment = salary / 10;
//   salaries[index] = salary + increment;
// });
// console.log(salaries);

//* map
const numbers = [1, 2, 3, 4, 5];
const modified = numbers.map((number) => {
  if (number === 2) {
    return number * 3;
  }
  return number;
});
console.log(modified);

//* forEach
const numbers1 = [1, 2, 3, 4, 5];
const modified1 = numbers.forEach((number) => {
  if (number === 2) {
    return number * 3;
  }
  return number;
});
console.log(modified1);

//* Practise - 1
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const twoTable = nums.map((num) => {
  return num * 2;
});
console.log(twoTable);

//* Practice - 2
const marks = [23, 24, 56, 78, 97];
const modifiedMarks = marks.map((mark) => {
  if (mark === 23) return 45;
  return mark;
});
console.log(modifiedMarks);

//* Filter
const ages = [27, 22, 21, 23, 25, 26];
const newAge = ages.filter((age) => {
  return age <= 25;
});

console.log(newAge);
