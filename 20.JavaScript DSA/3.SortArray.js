let nums = [12, 67, 8, 9, 1, 3, 34, 65, 76, 87];
console.log(nums);
nums.sort((a, b) => {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});
console.log(nums);

let arr = [10, 3, 25, 7];
let sortedAscendingArray = arr.sort((a, b) => a - b);
console.log(sortedAscendingArray);

let descendingSortedArray = arr.sort((a, b) => b - a);
console.log(descendingSortedArray);

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 25 },
];

people.sort((a, b) => a.age - b.age);
console.log(people);

// sort by string
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
