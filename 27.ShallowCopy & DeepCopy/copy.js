var x = { a: 10, b: 20 };
var y = x; // normal copy

console.log("X : ", x);
console.log("Y : ", y);

y.b = "5000";

console.log("*******************");

console.log("X : ", x);
console.log("Y : ", y);
