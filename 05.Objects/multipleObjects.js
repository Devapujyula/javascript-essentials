/**
 * Creating multiple Objects
 * 1. Using Object Literals
 * 2. Using Factory function
 * 3. Using Constructor function
 * 4. Using JS Classes
 */

// 1. Using Object Literals
var car1 = {
  color: "blue",
  brand: "Audi",
  start: function () {
    console.log("started");
  },
};

var car2 = {
  color: "red",
  brand: "Tata",
  start: function () {
    console.log("started");
  },
};

var car3 = {
  color: "green",
  brand: "BMW",
  start: function () {
    console.log("started");
  },
};

// 2. Factory function
// A factory function is any function that returns a new object for every function call
//! Function name should follow camelCase naming convention
// Passing Object Properties
function createCar(color, brand) {
  return {
    color: color, // & we can directly give value as color and brand no need to give full shorthand notation is enough
    brand: brand, // & brand
    start: function () {
      // & start() {...}
      console.log("started");
    },
  };
}

var car1 = createCar("blue", "Audi");
var car2 = createCar("red", "Tata");
var car3 = createCar("green", "BMW");
console.log(car1);
console.log(car2);
console.log(car3);

// 3. Constructor Function
// A regular function that returns a "new" Object on calling with the new operator.
// The created new object is called an "instance".
// ! Function name should follow PascalCase naming Convention
/**
 * Syntax:
 * function FunctionName(parameter1, paramter2,..) {
 * this.property1 = parameter1;
 * this.property2 = parameter2;
 * ...
 * ...
 * }
 * let myObject = new FunctionName(arg1, arg2...)
 *
 * & The new operator
 * When a function is called with new, it does the following steps:
 * 1. Creates an empty object and assigns to this
 * 2. Return this
 */
// & Constructor function
//& In construtor function this refers to the instance object.
function Car(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = function () {
    console.log("started");
  };
}
var car1 = new Car("blue", "Audi");
var car2 = new Car("red", "Tata");
var car3 = new Car("green", "BMW");
console.log(car1);
console.log(car2);
console.log(car3);
// The name property
console.log(car1.brand, car1.color);
console.log(typeof car1);

//car1 is instance
// car1.start() is instance method
// car1.color, car1.brand are instance properties

//& The constructor property
/**
 * Every object in javaScript has a constructor property
 * The constructor property refers to the constructor function which is used to create the object
 */

var car1 = new Car("blue", "Audi");
console.log(car1.constructor);

// & Built-in constructor functions
/**
 * function Date()
 * function Error()
 * function Promise()
 * function Object()
 * function String()
 * function Number()
 */
let now = new Date();
console.log(now);
console.log(typeof now);

let date = new Date("2025-06-25");
console.log(date);

let date1 = new Date(1998, 8, 14, 3, 23, 45, 0);
console.log(date1);

let date2 = new Date(1999, 4, 10);
console.log(date2);
