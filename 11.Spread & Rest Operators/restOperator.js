// With Rest Parameter, we can pack multiple values into an array.

function numbers(...args) {
  console.log(args);
}
numbers(1, 2, 3);

// Destructuring arrays and objects with Rest Parameter Syntax
var [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(rest);

// Objects
let { firstName, ...rest } = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 27,
};

console.log(firstName); // Rahul
console.log(rest); // Object {lastName: "Attuluri", age: 27}
