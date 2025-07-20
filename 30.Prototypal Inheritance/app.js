// * built in Array Constructor
//&  creating an Array older way
var myArray = new Array("a", 2, true);
myArray.push("pen");
console.log(myArray);
console.log(myArray.length);

//& Creating an Array modern way
var myArray = ["a", 2, true];
myArray.push("pen");
console.log(myArray);
console.log(myArray.length);

/**
 * & prototype property
 * ^ prototype property will be shared across all the instances of its constructor function
 */
console.log(Array.prototype);

//& Accessing prototype of inheritance
console.log(Object.getPrototypeOf(myArray));

//& Prototype of multiple instances
var sports = new Array("cricket", "Hockey", "Football");
console.log(Object.getPrototypeOf(sports));

//& Prototypal Inheritance
// On calling the new() operator, all the properties and methods defined on the prototype will become accessible to the instance objects. This process is called Prototypal Inheritance.
