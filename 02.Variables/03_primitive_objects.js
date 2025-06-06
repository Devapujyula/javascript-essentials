/**
 * Primitive datatypes are a set of basic data types in a javascript
 * Object is a non primitve datatype in a javascript
 * There are 7 primitive daatypes in a javascript
 * 1. Null
 * 2. Number
 * 3. String
 * 4. Symbol
 * 5. undefined
 * 6. Boolean
 * 7. BigInt
 *
 * An Object in a JavaScript can be created as follows
 *
 * const Item = {
 * name : "LED Bulb ",
 * Price: "165"
 * above example name indicates key and price indicates value}
 */

let a = null;
let b = 345;
let c = true;
let d = BigInt("5667");
let e = "Satya";
let f = Symbol("I am a symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof d);
console.log(typeof f);

const studentDetails = {
  studentName: "Prakash Dsp",
  studentPhoneumber: 8500957777,
  studentMarks: "972 out of 1000",
};

console.log(studentDetails);
