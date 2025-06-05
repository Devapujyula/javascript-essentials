/**
 * var is Globally scoped while let & const are block scoped
 * var can update and redeclare with in its scope
 * let can be updated but not re-declared
 * const can neither be updated no be re-declared
 * var varibles are intialized with undefined whereas let and cons variables are not intialized
 * const must be initialized during declaration unlike let and var
 */

var a = 45;
var b = "Prakash";
var c = null;
var d = undefined;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

{
  let b = "this";
  console.log(b);
}
console.log(b);

var a = "Satya";
var b = 34;
var c = undefined;
var d = null;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let a = 20;
a = "Prakash";

console.log(a);
const employeeId = 651845;
employeeId = 651876;

console.log(employeeId);

let d = undefined;

console.log(d);

let e;
e = undefined;
console.log(e);

console.log(x);
var x = 50;

console.log(y);
let y = 45; // Cannot access y before initialization

console.log(z);
const z = 65;

// const sai; // const must e initialized when declared
sai = 23;
