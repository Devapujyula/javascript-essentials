/**
 *& Creating a function
 *^ syntax:
 let myFuncion = new Function("para1, para2....", `code`)
 */
//& creating a function
// Older way of writting
var Car = new Function(
  "color, brand",
  `
  this.color = color;
  this.brand = brand;
  this.start = function() {
  console.log("started")}`
);
console.log(Function.prototype);

//& Creating a function
// modern way of writting
function Car(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = function () {
    console.log("started");
  };
}
console.log(Object.getPrototypeOf(Car));

//& Creating an Instance
var car1 = new Car("blue", "Audi");
console.log(car1);
console.log(Object.getPrototypeOf(car1));

//& car constructor prototype
console.log(Car.prototype);
