// Shallow copy
// 1. Spread Operator
// 2. Object.assign()

var x = { a: 10, b: 20, address: { area: "Hyderabad" } };

//& Shallow copy usinf Spread Operator
// var y = { ...x }; // new memory is created

//& Shallow copy usind Object.assign()
var y = Object.assign({}, x);

console.log("X :", x);
console.log("Y :", y);

y.b = 7000;
y.address.area = "Tirupathi";
console.log("**************");

console.log("X :", x);
console.log("Y :", y);
