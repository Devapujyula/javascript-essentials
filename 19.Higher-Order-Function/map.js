const arr = [5, 1, 3, 2, 6];
// Double
function double(x) {
  return x * 2;
}
const output = arr.map(double);
console.log(output);

// Triple
function triple(x) {
  return x * 3;
}
const tripleResult = arr.map(triple);
console.log(tripleResult);

// Binary
function binary(x) {
  return x.toString(2);
}

const binaryResult = arr.map(binary);
console.log(binaryResult);

const users = [
  { firstName: "Prakash", lastName: "DSP", age: 26 },
  { firstName: "Saikiran", lastName: "Yadla", age: 25 },
  { firstName: "Satwik", lastName: "Varma", age: 26 },
];

const usersList = users.map((user) => user.firstName + " " + user.lastName);

console.log(usersList);

const sameUsers = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(sameUsers);

const outputUsers = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output);
