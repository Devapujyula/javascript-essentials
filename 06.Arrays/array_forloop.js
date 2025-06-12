// Array and for loops
const firstName = ["Prakash", "Kiran", "sagar"];
let lastName = "Watson";

const newArray = [];

// for loop
// for(initialization, condition, increment/decrement)

for (let i = 0; i < firstName.length; i++) {
  // console.log(i);
  // console.log(firstName[i]);
  let fullName = `${firstName[i]} ${lastName}`;
  newArray.push(fullName);
}

console.log(firstName);
console.log(newArray);
