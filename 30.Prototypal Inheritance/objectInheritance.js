//& Creating Sigle Object
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var person1 = new Person("Virat", "kohli");
console.log(person1);

//& Creating a multiple objects
var person2 = new Person("Sachin", "Tendulkar");
console.log(person2);

//& Instance specific and prototype properties
Person.prototype.displayFullName = function () {
  return this.firstName + " " + this.lastName;
};

//& Accessing Prototype of Instances
console.log(Object.getPrototypeOf(person1));
console.log(Object.getPrototypeOf(person2));
console.log(person1.displayFullName());
console.log(person2.displayFullName());

//& Instance Specific properties
console.log(Object.getOwnPropertyNames(person1));
