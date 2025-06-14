// Reference vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefines, Null
// Arrays, Functions, Objects = Object
// typeof

// when assignment primitive data type value to a variable any
// changes are made directly to that value, without affecing
// original value

// when assigning non-primitive data types value to a variable is
// done by reference so any changes will affect all the refernces

let number1 = 10;
let number2 = number1;
number2 = 20;
console.log(`The first number is ${number1}`);
console.log(`The second number is ${number2}`);

let person1 = { name: "Prakash" };
let person2 = { ...person1 };
person2 = { name: "chitti" };

console.log(`The first name is ${person1.name}`);
console.log(`The second name is ${person2.name}`);
