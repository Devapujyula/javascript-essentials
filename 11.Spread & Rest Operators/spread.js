const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8, 9];

// general combination
console.log(num1.concat(num2));

// spread operator
const joinedArray = [...num1, ...num2];
console.log(joinedArray);

const myName = "Prakash";
console.log(...myName);

const user = {
  name: "Prakash",
  age: 26,
};

const updateUser = { ...user, city: "Banglore" };
console.log(updateUser);

function add() {
  console.log(arguments);
}

add(2, 5, 8, 7);

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}
