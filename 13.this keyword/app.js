/**
 * In JS, this keyword refers to an object, based on the context.
 * this keyword refers to different objects depending on how it is used
 * In an object method, this refers to the object.
 * Alone, this refers to the global object.
 * In a function, this refers to the global object.
 * In a function, in strict mode, this is undefined.
 * In an event, this refers to the element that received the event.
 * Method like call(), apply(), and bind() can refer this to any object
 */

console.log(this); // window (browser global object)

// this inside a function
function foo() {
  console.log(this);
}

foo(); // window (or global)

// this inside a object
const person = {
  name: "Prakash",
  greet() {
    console.log(this.name);
  },
};
person.greet();

// this inside a constructor function
function Person(name) {
  this.name = name;
}

const prakash = new Person("Prakash");
console.log(prakash.name);
