let birthYear = [1997, 1998, 1999, 2002, 2003, 2020];
let ages = birthYear.map((element, index, array) => {
  console.log(index);
  console.log(array);

  let age = 2025 - element;
  return age;
});
console.log(birthYear);

console.table(ages);
