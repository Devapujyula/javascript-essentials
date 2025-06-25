// & this keyword in JavaScript
/**
 * The this is determined in three ways.
 *? 1. In Object methods, it refers to the object that is executing the current function.
 *? 2. In Regular functions, it refers to the window object.
 *? 3. In Arrow functions, it refers to the context in which the code is defined.
 */

// ! 1. Object method this keyword
var car = {
  color: "blue",
  brand: "Audi",
  start: function () {
    console.log(this); // this = car
    // ekkada this anedhi car ane object yokka object context lo undhi ani dhaani ardam
    // & here this refers to the object that is executing the current function
  },
};
car.start();

// ! 2. this keyword in Regular function
function start() {
  console.log(this); // this = window
  // & here this refers to the window Object
}
start();

/**
 * ! 3. this keyword in Arrow function
 * In Arrow  functions, this depends on 2 Aspects
 * In arrow functions, this is lexically bound – it takes the value of this from where the function was defined, not how it's called.
 * ! 1. when the code is defined
 * ! 2. In which the Context code is defined
 * */

//& when the code is defines
//& 1. When is callback fn defined
// ekkada function eppudu define avuthundhi antey eppudu avuthe manam function ni call chesthamo appudu mathrame code define avuthundhi appati varaku code dfine avvadhu.
var car = {
  color: "blue",
  brand: "Audi",
  start: function () {
    setTimeout(function () {
      console.log(this);
    }, 1000);
  },
};
car.start();

//& 2. context
console.log(this); // this = window

//& this in Arrow function
var car = {
  color: "blue",
  brand: "Audi",
  start: () => {
    console.log(this); // this = window
    //! Arrow function inherits this from the context in which the code is defined
  },
};
car.start();

//& Arrow functions with callbacks and this
var car = {
  color: "blue",
  brand: "Audi",
  start: function () {
    setTimeout(() => {
      console.log(this); // this = car
    }, 1000);
  },
};
car.start();

//& Arrow function inherits this from the context in which the code is defines
